import {
  SPCX_ACTUALS,
  getActualClose,
  getLatestActual,
  computeLedgerEntry,
  buildLots,
  aggregateLots,
} from "./spcxActuals";

describe("spcxActuals data module", () => {
  test("SPCX_ACTUALS has a non-empty closes map with the expected shape", () => {
    expect(SPCX_ACTUALS.ipoPrice).toBe(135);
    expect(typeof SPCX_ACTUALS.asOf).toBe("string");
    expect(Object.keys(SPCX_ACTUALS.closes).length).toBeGreaterThan(0);
  });
});

describe("getActualClose", () => {
  test("returns the recorded close for a known date", () => {
    expect(getActualClose("2026-06-18")).toBe(185.0);
    expect(getActualClose("2026-07-06")).toBe(160.42);
  });

  test("returns null for a date with no recorded close", () => {
    expect(getActualClose("2026-06-19")).toBeNull(); // Juneteenth holiday
    expect(getActualClose("2099-01-01")).toBeNull();
  });

  test("returns null for a falsy date string", () => {
    expect(getActualClose(null)).toBeNull();
    expect(getActualClose(undefined)).toBeNull();
    expect(getActualClose("")).toBeNull();
  });

  // Acceptance criterion 4: with `closes` emptied, helpers must degrade
  // gracefully rather than crash.
  test("falls back to null when a closes map is explicitly empty", () => {
    expect(getActualClose("2026-06-18", {})).toBeNull();
  });
});

describe("getLatestActual", () => {
  test("returns the chronologically latest recorded close", () => {
    const latest = getLatestActual();
    expect(latest).toEqual({ date: "2026-07-17", close: 123.99 });
  });

  test("returns null when the closes map is empty (no-actuals fallback)", () => {
    expect(getLatestActual({})).toBeNull();
  });

  test("picks the max date string out of an arbitrary map", () => {
    const closes = {
      "2026-01-05": 100,
      "2026-01-01": 90,
      "2026-01-10": 110,
    };
    expect(getLatestActual(closes)).toEqual({ date: "2026-01-10", close: 110 });
  });
});

describe("computeLedgerEntry", () => {
  test("computes implied shares, mark-to-market, and percent change for a gain", () => {
    const entry = computeLedgerEntry({
      buyPrice: 100,
      capitalDeployedB: 10, // $10B deployed
      latestClose: 120,
    });
    expect(entry).not.toBeNull();
    expect(entry.impliedSharesB).toBeCloseTo(0.1); // 10 / 100
    expect(entry.markToMarketB).toBeCloseTo(2); // 0.1 * (120 - 100)
    expect(entry.percentChange).toBeCloseTo(20); // (120-100)/100 * 100
    expect(entry.markToMarketB).toBeGreaterThan(0);
  });

  test("computes a negative mark-to-market for a loss (matches real SPCX ledger direction)", () => {
    // Mirrors the Nasdaq-100 execution: bought at the 2026-07-06 close,
    // marked against the 2026-07-17 close, both well below the buy price.
    const buyPrice = getActualClose("2026-07-06");
    const latestClose = getLatestActual().close;
    const entry = computeLedgerEntry({
      buyPrice,
      capitalDeployedB: 5,
      latestClose,
    });
    expect(entry).not.toBeNull();
    expect(latestClose).toBeLessThan(buyPrice);
    expect(entry.markToMarketB).toBeLessThan(0);
    expect(entry.percentChange).toBeLessThan(0);
  });

  test("returns null (no-actuals fallback) when any required input is missing or invalid", () => {
    expect(
      computeLedgerEntry({
        buyPrice: null,
        capitalDeployedB: 5,
        latestClose: 100,
      }),
    ).toBeNull();
    expect(
      computeLedgerEntry({
        buyPrice: 100,
        capitalDeployedB: null,
        latestClose: 100,
      }),
    ).toBeNull();
    expect(
      computeLedgerEntry({
        buyPrice: 100,
        capitalDeployedB: 5,
        latestClose: null,
      }),
    ).toBeNull();
    expect(
      computeLedgerEntry({
        buyPrice: 0,
        capitalDeployedB: 5,
        latestClose: 100,
      }),
    ).toBeNull();
    expect(
      computeLedgerEntry({
        buyPrice: -10,
        capitalDeployedB: 5,
        latestClose: 100,
      }),
    ).toBeNull();
    expect(computeLedgerEntry({})).toBeNull();
  });
});

describe("buildLots", () => {
  // Simple linear weight formula so expected capital is easy to derive:
  // weight% = floatPct / 10 (independent of price).
  const linearWeightPct = (price, floatPct) => floatPct / 10;
  const closes = {
    "2026-06-18": 200,
    "2026-08-21": 100,
  };

  test("creates an inclusion lot (weight from 0) plus an incremental lot per float change", () => {
    const lots = buildLots({
      events: [
        { date: "2026-06-18", floatBeforePct: null, floatAfterPct: 5 },
        { date: "2026-08-21", floatBeforePct: 5, floatAfterPct: 12 },
      ],
      aumB: 1000,
      weightPct: linearWeightPct,
      closes,
    });
    expect(lots).toHaveLength(2);
    // Inclusion: 0 -> 0.5% of $1000B = $5B at $200
    expect(lots[0]).toEqual({
      date: "2026-06-18",
      buyPrice: 200,
      capitalDeployedB: 5,
    });
    // Float increase: 0.5% -> 1.2%, incremental 0.7% of $1000B = $7B at $100
    expect(lots[1].date).toBe("2026-08-21");
    expect(lots[1].buyPrice).toBe(100);
    expect(lots[1].capitalDeployedB).toBeCloseTo(7);
  });

  test("skips events whose date has no recorded close (future events appear later)", () => {
    const lots = buildLots({
      events: [
        { date: "2026-06-18", floatBeforePct: null, floatAfterPct: 5 },
        { date: "2026-12-09", floatBeforePct: 12, floatAfterPct: 100 },
      ],
      aumB: 1000,
      weightPct: linearWeightPct,
      closes,
    });
    expect(lots).toHaveLength(1);
    expect(lots[0].date).toBe("2026-06-18");
  });

  test("skips zero-delta events and returns no lots with an empty closes map", () => {
    const flat = buildLots({
      events: [{ date: "2026-06-18", floatBeforePct: 5, floatAfterPct: 5 }],
      aumB: 1000,
      weightPct: linearWeightPct,
      closes,
    });
    expect(flat).toHaveLength(0);
    const none = buildLots({
      events: [{ date: "2026-06-18", floatBeforePct: null, floatAfterPct: 5 }],
      aumB: 1000,
      weightPct: linearWeightPct,
      closes: {},
    });
    expect(none).toHaveLength(0);
  });
});

describe("aggregateLots", () => {
  const lots = [
    { date: "2026-06-18", buyPrice: 200, capitalDeployedB: 4 }, // 0.02B shares
    { date: "2026-08-21", buyPrice: 100, capitalDeployedB: 6 }, // 0.06B shares
  ];

  test("aggregates totals and share-weighted average buy price across lots", () => {
    const agg = aggregateLots(lots, 150);
    expect(agg).not.toBeNull();
    expect(agg.lots).toHaveLength(2);
    expect(agg.totalDeployedB).toBeCloseTo(10);
    // 0.08B shares for $10B -> $125 average, not the naive (200+100)/2
    expect(agg.avgBuyPrice).toBeCloseTo(125);
    // MTM: 0.02*(150-200) + 0.06*(150-100) = -1 + 3 = +2
    expect(agg.totalMarkToMarketB).toBeCloseTo(2);
    expect(agg.percentChange).toBeCloseTo(20); // (150-125)/125
  });

  test("single-lot aggregate matches the lot's own ledger entry", () => {
    const agg = aggregateLots([lots[0]], 150);
    expect(agg.totalDeployedB).toBeCloseTo(4);
    expect(agg.avgBuyPrice).toBeCloseTo(200);
    expect(agg.totalMarkToMarketB).toBeCloseTo(0.02 * (150 - 200));
  });

  test("returns null with no lots or no latest close (no-actuals fallback)", () => {
    expect(aggregateLots([], 150)).toBeNull();
    expect(aggregateLots(null, 150)).toBeNull();
    expect(aggregateLots(lots, null)).toBeNull();
  });
});
