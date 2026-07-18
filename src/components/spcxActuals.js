// Standalone data module for SPCX recorded closing prices.
//
// `closes` holds real recorded daily closes (source: Yahoo Finance daily
// history, cross-checked with MacroTrends and CNBC). The IPO-day close was
// confirmed against CNBC ($160.95, a +19% pop from the $135 IPO price); the
// 2026-06-16 close ($211.39) was confirmed against MacroTrends ($225.64 was
// the intraday high that day, not the close).
//
// If `closes` is emptied entirely, every consumer below degrades gracefully
// (returns null / empty), and the page falls back to slider-driven behavior
// everywhere, exactly like before this data module existed. `isSample` is
// kept (currently false, since these are real closes) so the "Sample data"
// UI chip keeps working unchanged if placeholder data is ever substituted
// back in.
export const SPCX_ACTUALS = {
  ipoPrice: 135,
  isSample: false,
  asOf: "2026-07-17", // last date with a recorded close
  closes: {
    "2026-06-12": 160.95,
    "2026-06-15": 192.5,
    "2026-06-16": 211.39,
    "2026-06-17": 191.82,
    "2026-06-18": 185.0,
    "2026-06-22": 154.6,
    "2026-06-23": 156.11,
    "2026-06-24": 154.54,
    "2026-06-25": 153.0,
    "2026-06-26": 153.23,
    "2026-06-29": 164.19,
    "2026-06-30": 170.86,
    "2026-07-01": 157.54,
    "2026-07-02": 162.0,
    "2026-07-06": 160.42,
    "2026-07-07": 149.47,
    "2026-07-08": 148.3,
    "2026-07-09": 152.16,
    "2026-07-10": 145.3,
    "2026-07-13": 139.14,
    "2026-07-14": 136.08,
    "2026-07-15": 135.27,
    "2026-07-16": 131.11,
    "2026-07-17": 123.99,
  },
};

/**
 * Look up the recorded close for a given YYYY-MM-DD date string.
 * `closes` defaults to the module's data but can be overridden (e.g. in
 * tests, or to simulate the "no actuals recorded" fallback).
 * Returns the close (number) or null if not recorded.
 */
export const getActualClose = (dateStr, closes = SPCX_ACTUALS.closes) => {
  if (!dateStr || !closes) return null;
  const close = closes[dateStr];
  return typeof close === "number" && isFinite(close) ? close : null;
};

/**
 * Returns the most recent recorded close as { date, close }, or null if no
 * closes are recorded.
 */
export const getLatestActual = (closes = SPCX_ACTUALS.closes) => {
  if (!closes) return null;
  const dates = Object.keys(closes).sort();
  if (dates.length === 0) return null;
  const date = dates[dates.length - 1];
  return { date, close: closes[date] };
};

/**
 * Build purchase lots for one fund from weight-changing events.
 *
 * Each event: { date, floatBeforePct, floatAfterPct }. floatBeforePct of
 * null marks the fund's inclusion (weight goes from 0 to the full weight at
 * floatAfterPct); later events are float increases, where the fund buys only
 * the incremental weight. `weightPct(price, floatPct)` is the fund's index
 * weight formula in percent.
 *
 * A lot is only created for events whose date has a recorded close — future
 * or unrecorded dates produce no lot yet, so the ledger grows automatically
 * as new closes are entered.
 */
export const buildLots = ({
  events,
  aumB,
  weightPct,
  closes = SPCX_ACTUALS.closes,
}) => {
  const lots = [];
  (events || []).forEach((event) => {
    const price = getActualClose(event.date, closes);
    if (price === null) return;
    const weightBefore =
      event.floatBeforePct === null
        ? 0
        : weightPct(price, event.floatBeforePct);
    const weightAfter = weightPct(price, event.floatAfterPct);
    const capitalDeployedB = aumB * ((weightAfter - weightBefore) / 100);
    if (capitalDeployedB > 1e-9) {
      lots.push({ date: event.date, buyPrice: price, capitalDeployedB });
    }
  });
  return lots;
};

/**
 * Aggregate a fund's lots against the latest close: per-lot ledger entries
 * plus totals and the share-weighted average buy price. Returns null when
 * there are no valid lots (e.g. no closes recorded, or no latest close), so
 * callers can hide the ledger UI entirely.
 */
export const aggregateLots = (lots, latestClose) => {
  if (!lots || lots.length === 0) return null;
  const entries = lots
    .map((lot) =>
      computeLedgerEntry({
        buyPrice: lot.buyPrice,
        capitalDeployedB: lot.capitalDeployedB,
        latestClose,
      }),
    )
    .map((entry, i) => (entry === null ? null : { ...lots[i], ...entry }))
    .filter((entry) => entry !== null);
  if (entries.length === 0) return null;

  const totalDeployedB = entries.reduce((s, e) => s + e.capitalDeployedB, 0);
  const totalSharesB = entries.reduce((s, e) => s + e.impliedSharesB, 0);
  const totalMarkToMarketB = entries.reduce((s, e) => s + e.markToMarketB, 0);
  const avgBuyPrice = totalDeployedB / totalSharesB;
  const percentChange = ((latestClose - avgBuyPrice) / avgBuyPrice) * 100;

  return {
    lots: entries,
    totalDeployedB,
    totalMarkToMarketB,
    avgBuyPrice,
    latestClose,
    percentChange,
  };
};

/**
 * Core ledger math for a single purchase lot:
 * - impliedSharesB: capital deployed (in $B) divided by the buy price,
 *   i.e. billions of shares implied by that dollar amount.
 * - markToMarketB: unrealized P&L in $B versus the latest actual close.
 * - percentChange: unrealized return, as a percent, versus the buy price.
 *
 * Returns null if any input is missing/invalid, so callers can render
 * "no ledger yet" instead of NaN/Infinity when actuals aren't available.
 */
export const computeLedgerEntry = ({
  buyPrice,
  capitalDeployedB,
  latestClose,
}) => {
  if (
    typeof buyPrice !== "number" ||
    !isFinite(buyPrice) ||
    buyPrice <= 0 ||
    typeof capitalDeployedB !== "number" ||
    !isFinite(capitalDeployedB) ||
    typeof latestClose !== "number" ||
    !isFinite(latestClose)
  ) {
    return null;
  }

  const impliedSharesB = capitalDeployedB / buyPrice;
  const markToMarketB = impliedSharesB * (latestClose - buyPrice);
  const percentChange = ((latestClose - buyPrice) / buyPrice) * 100;

  return {
    buyPrice,
    capitalDeployedB,
    impliedSharesB,
    latestClose,
    markToMarketB,
    percentChange,
  };
};
