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
  asOf: "2026-10-13", // last date with a recorded close
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
    "2026-07-20": 119.85,
    "2026-07-21": 123.54,
    "2026-07-22": 115.26,
    "2026-07-23": 118.24,
    "2026-07-24": 115.07,
    "2026-07-27": 113.5,
    "2026-07-28": 116.41,
    "2026-07-29": 112.55,
    "2026-07-30": 112.2,
    "2026-07-31": 108.37,
    "2026-08-03": 114.53,
    "2026-08-04": 125.33,
    "2026-08-05": 108.27,
    "2026-08-06": 114.92,
    "2026-08-07": 133.11,
    "2026-08-10": 138.74,
    "2026-08-11": 133.29,
    "2026-08-12": 146.15,
    "2026-08-13": 141.29,
    "2026-08-14": 140.0,
    "2026-08-17": 146.23,
    "2026-08-18": 143.34,
    "2026-08-19": 139.65,
    "2026-08-20": 134.0,
    "2026-08-21": 136.97,
    "2026-08-24": 135.0,
    "2026-08-25": 137.95,
    "2026-08-26": 139.63,
    "2026-08-27": 140.87,
    "2026-08-28": 141.5,
    "2026-08-31": 143.69,
    "2026-09-01": 142.23,
    "2026-09-02": 140.71,
    "2026-09-03": 149.74,
    "2026-09-04": 147.95,
    "2026-09-08": 153.47,
    "2026-09-09": 147.55,
    "2026-09-10": 148.18,
    "2026-09-11": 151.21,
    "2026-09-14": 148.15,
    "2026-09-15": 143.49,
    "2026-09-16": 150.88,
    "2026-09-17": 154.81,
    "2026-09-18": 152.71,
    "2026-09-21": 151.85,
    "2026-09-22": 154.72,
    "2026-09-23": 148.36,
    "2026-09-24": 148.03,
    "2026-09-25": 148.68,
    "2026-09-28": 145.47,
    "2026-09-29": 149.24,
    "2026-09-30": 150.86,
    "2026-10-01": 148.07,
    "2026-10-02": 158.96,
    "2026-10-05": 171.09,
    "2026-10-06": 171.92,
    "2026-10-07": 167.6,
    "2026-10-08": 160.57,
    "2026-10-09": 162.57,
    "2026-10-12": 163.42,
    "2026-10-13": 156.54,
  },
};

// Actual disclosed initial-inclusion positions, sourced from each fund's own
// reported holdings shortly after inclusion — supersedes the float-formula
// estimate for that one lot. Source: Vanguard's 2026-06-30 portfolio
// holdings (VTI, VT), reported via The Motley Fool 2026-07-24; QQQ holdings
// via stockanalysis.com as of 2026-07-23. Share counts are unchanged from
// each fund's execution-date buy since no float event has occurred since;
// `buyPrice` is that execution-date close, not the later reporting date's.
// Later float-change lots (not yet disclosed) still use the formula.
export const SPCX_DISCLOSED_LOTS = {
  vti: { date: "2026-06-18", buyPrice: 185.0, sharesB: 0.018738438 },
  vt: { date: "2026-06-18", buyPrice: 185.0, sharesB: 0.000441613 },
  qqq: { date: "2026-07-06", buyPrice: 160.42, sharesB: 0.039678634 },
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
 *
 * `disclosedLot` (optional): an actual reported position — { date, buyPrice,
 * sharesB } — that replaces the formula-computed lot for the inclusion event
 * on that same date (see SPCX_DISCLOSED_LOTS). Every other event (float
 * changes) still uses the formula, since only the initial buy has been
 * disclosed so far.
 */
export const buildLots = ({
  events,
  aumB,
  weightPct,
  closes = SPCX_ACTUALS.closes,
  disclosedLot = null,
}) => {
  const lots = [];
  (events || []).forEach((event) => {
    const price = getActualClose(event.date, closes);
    if (price === null) return;
    const isInclusionEvent = event.floatBeforePct === null;
    if (isInclusionEvent && disclosedLot && disclosedLot.date === event.date) {
      lots.push({
        date: event.date,
        buyPrice: disclosedLot.buyPrice,
        capitalDeployedB: disclosedLot.sharesB * disclosedLot.buyPrice,
        source: "disclosed",
      });
      return;
    }
    const weightBefore = isInclusionEvent
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
 * - markToMarketB: paper P&L in $B versus the latest actual close, assuming
 *   the lot is still held (fund creations/redemptions aren't modeled).
 * - percentChange: that same paper return, as a percent, versus the buy price.
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
