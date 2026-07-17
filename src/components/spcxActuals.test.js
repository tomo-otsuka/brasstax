import {
  SPCX_ACTUALS,
  getActualClose,
  getLatestActual,
  computeLedgerEntry,
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
