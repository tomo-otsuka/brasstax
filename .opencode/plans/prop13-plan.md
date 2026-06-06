# CA Prop 13 Analysis - Implementation Plan

## Overview

A new tool analyzing California's Proposition 13 and its impact on property taxes, specifically how the same reassessment rules create dramatically different outcomes depending on when you bought your property -- a two-tier system by timing, not by law.

**Key principle:** Data-driven, not political. The numbers speak for themselves.

**Revenue neutrality assumption:** Total CA property tax revenue remains constant -- Prop 13 only shifts the burden between long-time and new property owners, it doesn't increase or decrease the total collected.

**Success criteria:** A user should finish with a clear "aha" moment: seeing the total they've paid vs what they would've paid without Prop 13, understanding how two people with the same property value pay wildly different taxes, and learning how the loophole compounds this inequality for commercial real estate.

## Scope

- **California-only** (Prop 13 is a CA-specific constitutional amendment)
- **Not in navigation** -- accessible only from the landing page
- **Educational framing** -- explains what Prop 13 is for any visitor

## What is Prop 13?

Proposition 13 (1978) amended the California Constitution to cap property taxes at 1% of assessed value, with annual assessed value increases capped at 2%. Full reassessment only occurs upon change of ownership. This created an asymmetry by timing:

- **Long-time property owners (any type):** Pay taxes based on decades-old assessed values (capped at 2% annual increase)
- **New property buyers (any type):** Pay taxes based on current market value (full reassessment)
- **No distinction between residential and commercial** -- same rule, different outcomes depending on when you bought

### The Commercial Property Transfer Loophole

A second layer of asymmetry exists for commercial real estate. Under current law, if a corporation or partnership owns commercial property, the property can stay deeded to the entity even when ownership changes hands -- effectively transferring control without triggering reassessment.

The key rule: **no single partner may exceed 50% control** of the entity. As long as ownership is split among partners each holding ≤50%, no "change in ownership" is triggered and the low assessed value is preserved.

- The CA Board of Equalization estimated closing this loophole would raise **up to $269 million annually**
- Multiple legislative attempts (2014, 2015, 2018, 2020) to close it have failed
- This means a corporate entity can hold a $10M property purchased in 1980 for $2M assessed value indefinitely -- even as the business changes hands repeatedly

## Files to Create/Modify

### New Files

1. **`src/components/Prop13Analysis.jsx`** -- Main component
   - Input: purchase price, purchase year, current estimated value, assessed value (optional)
   - Before/after Prop 13 comparison showing the two-tier system
   - Charts: bar chart showing tax burden gap between long-time and new owners, line chart showing divergence over time, revenue breakdown
   - "About Prop 13" accordion explaining the policy

### Modified Files

2. **`src/components/LandingPage.jsx`** -- Add landing page card
   - New entry in `tools` array
   - Title: "Prop 13 Analysis" (or similar)
   - Description: "See how California's same-rule system creates a two-tier tax outcome based on timing."
   - Path: `/prop-13`
   - Icon: `Business` or `Store` from `@mui/icons-material`
   - Color: A distinct color (e.g., `#8b5cf6` purple or `#06b6d4` cyan)

## Component Structure

```
Prop13Analysis.jsx
├── Mode selector (tabs or toggle)
│   ├── "My Property" (default) -- personal calculator
│   │   └── "How much did you buy your home for?" (number input)
│   │   └── "When did you buy it?" (year picker)
│   │   └── "How much is it worth now (estimate)?" (number input)
│   │   └── "What's your current assessed value?" (number input, optional -- auto-calculated if blank)
│   │   └── "Show me my numbers" button
│   └── "Compare Scenarios" -- presets and side-by-side
│       └── Persona selector (dropdown or cards)
│           ├── "Young First-Time Buyer" -- defaults: $800K purchase, 0 years, $800K current (full market)
│           ├── "Long-Time Homeowner" -- defaults: $150K purchase, 30 years, $800K current (capped)
│           ├── "Recent Commercial Buyer" -- defaults: $2M purchase, 2 years, $2M current (full market)
│           ├── "Corporate Entity Owner" -- defaults: $2M purchase, 45 years, $10M current (loophole)
│           │   └── Explains the 50% partnership rule loophole: entity ownership avoids reassessment on transfer
│           └── "Custom" -- all fields editable, no defaults
├── Personal results (always shown after "My Property" input)
│   ├── Total paid in property taxes since purchase (sum of annual payments)
│   ├── What you would've paid if Prop 13 was never passed (full market value each year)
│   ├── How much you've "saved" (or lost, depending on perspective)
│   ├── Current annual property tax vs what it would be at full market value
│   └── Divergence over time (line chart: actual cumulative taxes vs what-if without Prop 13)
├── Comparison mode (optional, when "Compare Scenarios" selected)
│   ├── Select 2 personas to compare side-by-side (e.g., "Young Buyer vs Long-Time Owner")
│   │   └── Shows dollar difference, ratio (e.g., "6x more in taxes")
│   ├── Side-by-side bar chart: actual vs market-based tax for each
│   └── Loophole toggle (Corporate Entity Owner only)
│       └── "Loophole open" (default) vs "Loophole closed" -- shows reassessment impact
├── Revenue breakdown (optional, collapsible)
│   └── Aggregate CA property tax revenue breakdown:
│       - Commercial vs residential split
│       - Long-time vs new owners split
│       - Revenue impact of closing the loophole ($269M/yr)
└── About Prop 13 accordion
    ├── What is Prop 13 (overview)
    ├── The Commercial Property Transfer Loophole (dedicated subsection)
    │   └── 50% partnership rule, $269M annual revenue impact, failed legislative attempts
    └── Source links
```

## Design Decisions

- **No nav item** -- stays hidden from top bar
- **Landing page card** -- visible but not prominent (placed after existing tools)
- **"My Property" mode (default)** -- the primary experience. User enters 3 numbers:
  1. Purchase price (what they bought it for)
  2. Purchase year (when they bought it)
  3. Current estimated value (what it's worth now)
  - Assessed value is auto-calculated from purchase price + year (2% annual cap)
  - Shows: total paid so far, what they would've paid without Prop 13, current annual tax vs market-based tax
  - Line chart: cumulative taxes over time (actual vs what-if without Prop 13)
- **Personas with intelligent defaults** -- for the "Compare Scenarios" mode:
  - **Young First-Time Buyer**: $800K purchase price, 0 years, $800K current value (full market value)
  - **Long-Time Homeowner**: $150K purchase price, 30 years, $800K current value (capped growth)
  - **Recent Commercial Buyer**: $2M purchase price, 2 years, $2M current value (full market value)
  - **Corporate Entity Owner**: $2M purchase price, 45 years, $10M current value (loophole user -- entity ownership avoids reassessment on transfer, no single partner >50%)
  - **Custom**: All fields editable, no defaults
- **Comparison mode** -- users can select 2 personas to see side-by-side tax differences (dollar gap, ratio, "Xx more in taxes")
- **Loophole toggle** -- Corporate Entity Owner persona has an "open/closed" toggle showing the financial impact of closing the loophole
- **Revenue breakdown** -- collapsible section showing aggregate CA revenue breakdown (commercial vs residential, long-time vs new, loophole revenue impact)
- **Charts** -- Chart.js (consistent with existing tools):
  - Line chart (personal mode): cumulative taxes over time -- actual vs what-if without Prop 13
  - Bar chart (comparison mode): actual tax vs market-based tax for each persona
  - Line chart (comparison mode): assessed vs market value divergence over time
  - (Optional) Pie/bar: revenue breakdown
- **URL state** -- shareable links encoding mode, inputs, persona(s), comparison mode, and loophole toggle state (consistent with other tools)
- **Constants** -- CA property tax rate is 1% (hardcoded constant, documented in code)

## Implementation Order

1. Create `src/components/Prop13Analysis.jsx` with "My Property" mode + personas + comparison mode
2. Add landing page card to `src/components/LandingPage.jsx`
3. Add route `/prop-13` to `src/App.jsx` (without nav entry)
4. Run `npm run build` to verify production build
5. Run `npm test` if tests exist

## Open Questions

- Any specific data points or sources you want cited in the "About" section?
- Should the revenue breakdown be a default section or hidden behind a toggle?
- Should the comparison mode be opt-in (select 2 personas) or always-on (show default comparison)?
