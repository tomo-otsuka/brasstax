# SPCX Page: Retro / Backwards-Looking Updates

## Context

The SPCX page (`src/components/SpcxIpoVisualizer.jsx`, route `/spcx-ipo`) was built as a
forward-looking simulation. The in-world clock has now passed several modeled events:

| Event | Date | Status |
|---|---|---|
| IPO ($135 offer price) | 2026-06-12 | past |
| Total Market / Russell inclusion (executed at Jun 18 close) | 2026-06-18 | past |
| Nasdaq-100 inclusion (executed at Jul 6 close, effective Jul 7 pre-market) | 2026-07-07 | past |
| First lockup expiry | 2026-08-21 | future |
| S&P 500 inclusion | 2027-06-18 | future |

The page still treats every date as equally hypothetical. This plan makes it "today-aware"
and adds a reality-check layer: what did index funds pay at each inclusion, and how has the
price deviated since.

## Data source

There is no price feed. Add a standalone data module `src/components/spcxActuals.js`:

```js
export const SPCX_ACTUALS = {
  ipoPrice: 135,
  isSample: true, // flip to false when real closes are entered
  asOf: "YYYY-MM-DD", // last date with a recorded close
  closes: {
    "2026-06-12": 187.2, // one entry per trading day; sample values until replaced
    // ...
  },
};
```

- Populate with a **plausible sample series** (IPO pop above $135, then drift; end near the
  page's current $185 default) covering every trading day from 2026-06-12 through 2026-07-16.
  Values are placeholders the owner will overwrite with real closes.
- Export small pure helpers: `getActualClose(dateStr)` (or `null`), `getLatestActual()`
  (`{ date, close }` or `null`), and the ledger math below. Pure functions live here (or in a
  sibling module) so they are unit-testable without rendering.
- Graceful degradation everywhere: any date without a recorded close falls back to the
  slider price; if `closes` is empty the page must behave exactly as today.

## Features

### 1. Today-aware charts

- Both charts (float chart, ETF weights chart) get:
  - A solid "Today" vertical line (visually distinct from the dashed selected-date line),
    positioned from the same NY-timezone "today" logic used by `getInitialDaysSinceIpo`.
  - A subtle background shading over the past region (IPO → today).
- Chart title: drop "(2026 Simulation)"; use "SPCX Float: Actual to Date, Projected Forward".

### 2. Actual price overlay

- Overlay the actual close series as a line on the float chart, on a secondary right-hand
  y-axis labeled "SPCX Price ($)". Only rendered when actuals exist.
- Tooltip on that dataset shows the close price.

### 3. Slider semantics

- The price slider now means **assumed price from today forward**. Relabel it
  "Assumed SPCX Price" with a caption noting past dates use recorded closes.
- Default slider value: latest actual close (rounded to slider step) when available,
  else the current 185. An explicit `?price=` param still wins.
- When the selected date is in the past and has a recorded close, all derived numbers for
  that date (market cap, weights, forced buying) use the recorded close, not the slider.
  Chart series likewise use recorded closes for past dates and the slider price forward.
- Show an "As of {asOf}" chip near the price slider when actuals exist, plus a warning-style
  "Sample data" chip when `isSample` is true.

### 4. Inclusion ledger (core feature)

For each inclusion event already past, compute a purchase lot:

- **Buy price** = actual close on the execution date (Total Market/Russell and Global All Cap:
  2026-06-18; Nasdaq-100: 2026-07-06). 
- **Capital deployed** = that fund group's forced-buying dollars computed at the execution
  date using the buy price (reuse the existing weight formulas, including the QQQ 3x
  float-cap rule, with the float as of that date).
- **Implied shares** = capital deployed / buy price.
- **Mark-to-market** = implied shares x (latest actual close − buy price); also as a percent.

UI:

- Each past-inclusion ETF card gains a ledger block: "Bought at $X on {date} · now $Y ·
  −Z% (−$N B unrealized)", green when positive, red when negative. Future inclusions
  (S&P 500) keep their current presentation.
- Rename the "Forced Buying" line to "Capital Deployed" on cards whose inclusion is past.
- Add a headline stat box next to (or matching the style of) "Total Est. Passive Buying":
  "Passive Investors' Mark-to-Market Since Inclusion" with the summed unrealized P&L.
- One-line footnote near the stat: estimates of unrealized mark-to-market on model-implied
  positions, not audited fund results.

### 5. Timeline past/future split

- Past events: filled/checkmark styling, past-tense copy, and (when actuals exist) the
  actual close on that date plus return since then.
- Insert a "Today — {date}" divider row between past and future events.
- Future events keep current styling.

## Non-goals

- No live data fetching, no API keys, no backend.
- No changes to other pages.

## v2 addendum (implemented)

Tranche-lot tracking, originally deferred: each fund's ledger is now a series of
purchase lots — the inclusion buy plus an incremental buy at every float increase
after the fund's effective date (`buildLots` / `aggregateLots` in `spcxActuals.js`).
Lots materialize automatically once their date has a recorded close, so the first
lockup expiry (2026-08-21) needs only a data update. The per-card ledger shows a
lot list with a share-weighted average buy price once a fund has more than one lot.

## Acceptance criteria

1. Fresh landing (no params): date defaults to today, price slider defaults to latest
   actual close, past region shaded, Today line visible on both charts.
2. Selecting a past date shows that day's actual close driving the numbers; selecting a
   future date uses the slider price.
3. Ledger math verified by unit tests on the pure helpers (buy price lookup, capital
   deployed at execution date, mark-to-market sign and magnitude), including the
   no-actuals fallback.
4. With `closes` emptied, the page renders identically to the pre-change behavior
   (no crashes, no ledger UI, no overlay).
5. `npx eslint src/components/spcxActuals.js src/components/SpcxIpoVisualizer.jsx` clean;
   `npm test` passes; `npm run build` succeeds (build output goes to `docs/`).

## Workflow notes (from AGENTS.md)

- Functional components + hooks; MUI for all UI; match the file's existing style
  (e.g., `tooltipSlotProps`, `CHART_COLORS`).
- Run `npm run build` before committing so `docs/` stays current. Concise commit
  messages. Push immediately after a successful commit.
