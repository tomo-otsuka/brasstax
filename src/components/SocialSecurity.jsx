import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Tabs,
  Tab,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  Alert,
  Collapse,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  History,
  People,
  Warning,
  Timeline,
  AttachMoney,
  CalendarToday,
  TrendingDown,
  TrendingUp,
  AccountBalance,
  Star,
  Person,
  FamilyRestroom,
} from "@mui/icons-material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

// --- Data ---

const originData = {
  signed: "August 14, 1935",
  firstTaxes: "January 1, 1937",
  firstBenefits: "January 1, 1940",
  firstCheckDate: "January 31, 1940",
  firstRecipient: "Ida M. Fuller",
  firstCheckAmount: 22.54,
  totalContributed: 24.75,
  legislation: "Social Security Act (H.R. 7260), Public Law 74-271",
  president: "Franklin D. Roosevelt",
  originalCoverage: "~50 million workers (~60% of workforce)",
  originalTaxRate:
    "1% each from employer and employee (2% total) on first $3,000",
  excluded: "Agricultural workers, domestic workers, self-employed farmers",
};

const keyAmendments = [
  {
    year: 1939,
    name: "Social Security Amendments of 1939",
    summary:
      "Added survivors and dependents benefits; shifted from individual accounts to pay-as-you-go system; advanced monthly benefits to 1940.",
  },
  {
    year: 1950,
    name: "Social Security Amendments of 1950",
    summary:
      "Extended coverage to ~10 million more workers (farmers, self-employed, government workers); substantially increased benefits; raised wage base to $3,600.",
  },
  {
    year: 1954,
    name: "Social Security Amendments of 1954",
    summary:
      "Added disability freeze provision; extended coverage to self-employed farmers, ministers, members of religious orders; added coverage for state/local government employees.",
  },
  {
    year: 1956,
    name: "Social Security Amendments of 1956",
    summary:
      "Created Disability Insurance (DI) benefits for workers aged 50–64; lowered widow retirement age to 62; added benefits for disabled children.",
  },
  {
    year: 1965,
    name: "Social Security Amendments of 1965",
    summary:
      "Created Medicare (Titles XVIII); added Supplemental Security Income (SSI) program (1972); increased cash benefits; liberalized eligibility.",
  },
  {
    year: 1972,
    name: "Social Security Amendments of 1972",
    summary:
      "Established SSI program (aged, blind, disabled); created automatic COLAs starting 1975; expanded Medicare.",
  },
  {
    year: 1977,
    name: "Social Security Amendments of 1977",
    summary:
      "Reformed benefit formula to protect higher earners; phased in gradual increase to Normal Retirement Age (NRA) from 65 to 66–67; aimed to restore long-range solvency.",
  },
  {
    year: 1983,
    name: "Social Security Amendments of 1983",
    summary:
      "Greenspan Commission reforms: phased in gradual increase of NRA to 67 for those born 1955+; taxed benefits for higher earners; brought federal employees into Social Security; increased payroll tax on benefits.",
  },
  {
    year: 2000,
    name: "Senior Citizens' Freedom to Work Act",
    summary:
      "Eliminated retirement earnings test for beneficiaries at or above Normal Retirement Age.",
  },
];

const parameterEvolution = [
  {
    era: "1937",
    taxRate: "2%",
    wageBase: "$3,000",
    NRA: "65",
    earliest: "65",
    maxMonthly: "~$73",
  },
  {
    era: "1950",
    taxRate: "2.25%",
    wageBase: "$3,600",
    NRA: "65",
    earliest: "62",
    maxMonthly: "~$140",
  },
  {
    era: "1977",
    taxRate: "12.4%",
    wageBase: "~$16,500",
    NRA: "65 (phasing up)",
    earliest: "62",
    maxMonthly: "~$600",
  },
  {
    era: "2024",
    taxRate: "12.4%",
    wageBase: "$168,600",
    NRA: "66–67",
    earliest: "62",
    maxMonthly: "$3,822",
  },
];

const beneficiaryBreakdown = [
  {
    category: "Retired Workers & Dependents",
    count: 53000000,
    pct: 79,
    icon: <AccountBalance />,
  },
  {
    category: "Disabled Workers & Dependents",
    count: 9000000,
    pct: 13,
    icon: <Person />,
  },
  {
    category: "Survivors of Deceased Workers",
    count: 6000000,
    pct: 9,
    icon: <FamilyRestroom />,
  },
];

const beneficiaryBreakdownData = {
  labels: beneficiaryBreakdown.map((b) => b.category),
  datasets: [
    {
      data: beneficiaryBreakdown.map((b) => b.pct),
      backgroundColor: ["#6366f1", "#a855f7", "#ec4899"],
      borderColor: ["#6366f1", "#a855f7", "#ec4899"],
      borderWidth: 2,
      hoverOffset: 8,
    },
  ],
};

const beneficiaryBreakdownOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: { padding: 20, usePointStyle: true },
    },
    tooltip: {
      callbacks: {
        label: (ctx) => `${ctx.label}: ${ctx.parsed}% of beneficiaries`,
      },
    },
  },
};

const currentStats = {
  totalBeneficiaries: "67 million",
  retiredAndDependents: "53 million",
  disabledAndDependents: "9 million",
  survivors: "6 million",
  coveredWorkers: "~183 million",
  totalCost2023Billion: "$1,392 billion",
  totalIncome2023Billion: "$1,351 billion",
  trustFundReservesBillion: "$2.788 trillion",
  payrollTaxRate: "12.4% (6.2% + 6.2%)",
  taxableWageBase: "$168,600 (2024)",
  maxMonthlyBenefitFRA: "$3,822 (2024)",
  averageDIMonthly: "~$1,483/month (2024)",
  workersPerBeneficiary2023: "2.7",
  workersPerBeneficiary2040: "2.3",
};

const depletionDates = {
  intermediate: {
    OASI: "2033",
    combinedOASDI: "2035",
    DI: "Not depleted (through 2098)",
    OASIBenefitsAfterDepletionPct: 79,
    combinedBenefitsAfterDepletionPct: 83,
  },
  highCost: { OASI: "2031", combinedOASDI: "2032", DI: "2043" },
  lowCost: { OASI: "2040", combinedOASDI: "2080", fullBenefitsResumed: "2086" },
  stochastic95PctRange: "2032–2043",
};

const solvencyNumbers = {
  actuarialDeficitPctPayroll: "3.50% of taxable payroll",
  actuarialDeficitPctGDP: "1.2% of GDP",
  unfundedObligationTrillions: "$22.6 trillion (75-year present value)",
  payrollTaxIncreaseNeeded: "From 12.4% to 15.73% (+3.33 percentage points)",
  benefitReductionNeededPct:
    "20.8% across the board (24.8% for new beneficiaries)",
};

const demographicAnalysis = {
  benefitMost: [
    {
      label: "Ida May Fuller & Earliest Cohorts",
      detail: "Paid pennies on the dollar; extreme positive return (900x+ ROI)",
    },
    {
      label: "Low-income workers",
      detail:
        "The first bend point replaces 90% of earnings; highest ROI among modern workers",
    },
    {
      label: "Single-earner married couples",
      detail:
        "Non-working spouse receives 50% spousal bonus with zero additional taxes paid",
    },
    {
      label: "Long-lived demographics",
      detail:
        "Those living into their 90s draw benefits for decades, vastly increasing lifetime payout",
    },
  ],
  benefitLeast: [
    {
      label: "Modern High-income single workers",
      detail:
        "Only receive 15% replacement on highest earnings; often a negative real return on taxes paid",
    },
    {
      label: "Short-lived demographics",
      detail:
        "Dying before or shortly after FRA results in a massive net loss of lifetime taxes paid",
    },
    {
      label: "Low-wage workers with interrupted histories",
      detail:
        "Formula uses 35 highest-earning years — zero-earning years drag down average",
    },
    {
      label: "Dual-earner high-income couples",
      detail:
        "Both pay maximum taxes but neither benefits from the free spousal bonus",
    },
  ],
  ageGroups: [
    { age: "62 (earliest)", status: "~30% reduced benefits vs. FRA" },
    {
      age: "66–67 (Full Retirement Age)",
      status: "100% of Primary Insurance Amount (PIA)",
    },
    {
      age: "70 (maximum delay)",
      status: "~124–132% of PIA (highest possible)",
    },
    {
      age: "50–64 (disability)",
      status: "DI beneficiaries average ~$1,483/month (2024)",
    },
    {
      age: "Under 18 (children)",
      status: "Receive ~50% of parent's benefit; average ~$1,000/month",
    },
  ],
};

const roiComparison = [
  {
    group: "Ida May Fuller (First Cohort)",
    ratio: 924,
    description:
      "Paid $24.75 total, collected $22,888 (approx $550 paid, $260,000+ collected in 2024 dollars)",
  },
  {
    group: "Average 1940s Retiree",
    ratio: 15,
    description: "Early beneficiaries with very low initial tax rates",
  },
  {
    group: "Modern Low-Income Single-Earner Couple",
    ratio: 2.0,
    description: "Benefits from 90% replacement rate + free 50% spousal bonus",
  },
  {
    group: "Modern Average-Income Single Worker",
    ratio: 1.0,
    description: "Gets back roughly what they paid in (adjusted for inflation)",
  },
  {
    group: "Modern High-Income Single Worker",
    ratio: 0.85,
    description:
      "Only 15% replacement rate on top earnings, often negative real return",
  },
];

const roiChartData = {
  labels: roiComparison.map((r) => r.group),
  datasets: [
    {
      label: "Lifetime Benefit to Tax Ratio (Multiplier)",
      data: roiComparison.map((r) => r.ratio),
      backgroundColor: (ctx) => {
        const value = ctx.raw;
        if (value > 100) return "rgba(251, 191, 36, 0.8)"; // Gold
        if (value > 1.5) return "rgba(16, 185, 129, 0.8)"; // Green
        if (value >= 1.0) return "rgba(99, 102, 241, 0.8)"; // Blue
        return "rgba(239, 68, 68, 0.8)"; // Red
      },
      borderColor: (ctx) => {
        const value = ctx.raw;
        if (value > 100) return "#f59e0b";
        if (value > 1.5) return "#059669";
        if (value >= 1.0) return "#4f46e5";
        return "#dc2626";
      },
      borderWidth: 1,
      borderRadius: 4,
    },
  ],
};

const roiChartOptions = {
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx) => `${ctx.raw}x Return on Taxes Paid`,
        afterLabel: (ctx) => {
          const idx = ctx.dataIndex;
          return roiComparison[idx].description;
        },
      },
    },
  },
  scales: {
    x: {
      type: "logarithmic",
      title: {
        display: true,
        text: "Benefit Multiplier (Log Scale)",
        font: { weight: "bold" },
      },
      ticks: {
        callback: function (value) {
          if (
            value === 0.1 ||
            value === 1 ||
            value === 10 ||
            value === 100 ||
            value === 1000
          ) {
            return value + "x";
          }
          return null;
        },
      },
    },
  },
};

const historicalProjections = [
  { year: "1983", depletion: "2014" },
  { year: "1993", depletion: "2036" },
  { year: "1994", depletion: "2029" },
  { year: "1995", depletion: "2030" },
  { year: "1996", depletion: "2029" },
  { year: "1997", depletion: "2029" },
  { year: "2000", depletion: "2037" },
  { year: "2001", depletion: "2038" },
  { year: "2003", depletion: "2042" },
  { year: "2009", depletion: "2037" },
  { year: "2011", depletion: "2036" },
  { year: "2024 (current)", depletion: "2035 (combined), 2033 (OASI)" },
];

const historicalProjectionData = {
  labels: historicalProjections.map((h) => h.year),
  datasets: [
    {
      label: "Projected Depletion Year",
      data: historicalProjections.map((h) =>
        parseInt(h.depletion.split(" ")[0]),
      ),
      backgroundColor: (ctx) => {
        const idx = ctx.dataIndex;
        return idx === historicalProjections.length - 1
          ? "#6366f1"
          : "rgba(168, 85, 247, 0.5)";
      },
      borderColor: (ctx) => {
        const idx = ctx.dataIndex;
        return idx === historicalProjections.length - 1
          ? "#6366f1"
          : "rgba(168, 85, 247, 0.8)";
      },
      borderWidth: 2,
      borderRadius: 4,
    },
  ],
};

const historicalProjectionOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx) => `Depletion: ${ctx.parsed.y}`,
      },
    },
  },
  scales: {
    y: {
      reverse: true,
      min: 2010,
      max: 2090,
      ticks: { stepSize: 10 },
      title: { display: true, text: "Year" },
    },
  },
};

const keyDates = [
  {
    date: "August 14, 1935",
    event: "Social Security Act signed by FDR",
    icon: <History color="primary" />,
  },
  {
    date: "January 1, 1937",
    event: "First payroll taxes collected",
    icon: <AttachMoney color="primary" />,
  },
  {
    date: "January 1, 1940",
    event: "First monthly benefit payments began",
    icon: <CalendarToday color="primary" />,
  },
  {
    date: "January 31, 1940",
    event: `First check: $22.54 to Ida M. Fuller`,
    icon: <AttachMoney color="primary" />,
  },
  {
    date: "2010",
    event: "First year costs exceed non-interest income",
    icon: <TrendingDown color="error" />,
  },
  {
    date: "2021",
    event: "First year costs exceed total income (including interest)",
    icon: <TrendingDown color="error" />,
  },
  {
    date: "2033 (est.)",
    event: "OASI trust fund depleted (79% benefits payable)",
    icon: <Warning color="warning" />,
  },
  {
    date: "2035 (est.)",
    event: "Combined OASDI trust fund depleted (83% benefits payable)",
    icon: <Warning color="warning" />,
  },
];

// --- Components ---

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export function SocialSecurity() {
  const [tabValue, setTabValue] = useState(0);
  const [expandedSections, setExpandedSections] = useState({
    origin: true,
    timeline: true,
    demographics: true,
    solvency: true,
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSectionToggle = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      {/* Header */}
      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(45deg, #6366f1 30%, #a855f7 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 1,
            }}
          >
            US Social Security: A Complete History
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: "800px" }}
          >
            From the Great Depression to the looming solvency crisis — here's
            how Social Security evolved, who benefits the most, and when the
            money runs out.
          </Typography>
        </Grid>

        {/* Navigation Tabs */}
        <Grid size={{ xs: 12 }}>
          <Paper elevation={2} sx={{ borderRadius: 3 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              textColor="inherit"
              indicatorColor="primary"
              sx={{ minHeight: 56 }}
            >
              <Tab
                label={
                  <>
                    <History fontSize="small" sx={{ mr: 1 }} /> Origins &
                    Timeline
                  </>
                }
              />
              <Tab
                label={
                  <>
                    <People fontSize="small" sx={{ mr: 1 }} /> Who Benefits Most
                    / Least
                  </>
                }
              />
              <Tab
                label={
                  <>
                    <Warning fontSize="small" sx={{ mr: 1 }} /> Solvency & Trust
                    Funds
                  </>
                }
              />
              <Tab
                label={
                  <>
                    <Timeline fontSize="small" sx={{ mr: 1 }} /> Historical
                    Projections
                  </>
                }
              />
            </Tabs>
          </Paper>
        </Grid>

        {/* Tab 1: Origins & Timeline */}
        <Grid size={{ xs: 12 }}>
          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={3}>
              {/* Origin Card */}
              <Grid size={{ xs: 12 }}>
                <Accordion
                  expanded={expandedSections.origin}
                  onChange={() => handleSectionToggle("origin")}
                  disableGutters
                  elevation={0}
                  sx={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 3,
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                      <History color="primary" />
                      <Typography variant="h6" fontWeight="600">
                        Origins: The Social Security Act of 1935
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Paper
                          elevation={0}
                          variant="outlined"
                          sx={{ p: 3, borderRadius: 3 }}
                        >
                          <Typography
                            variant="subtitle2"
                            color="primary"
                            gutterBottom
                            fontWeight="600"
                          >
                            KEY FACTS
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 2,
                            }}
                          >
                            <Box>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                display="block"
                              >
                                SIGNED INTO LAW
                              </Typography>
                              <Typography variant="h6">
                                {originData.signed}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                display="block"
                              >
                                LEGISLATION
                              </Typography>
                              <Typography variant="body1">
                                {originData.legislation}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                display="block"
                              >
                                SIGNED BY
                              </Typography>
                              <Typography variant="body1">
                                {originData.president}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                display="block"
                              >
                                FIRST TAXES COLLECTED
                              </Typography>
                              <Typography variant="body1">
                                {originData.firstTaxes}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                display="block"
                              >
                                FIRST MONTHLY PAYMENTS
                              </Typography>
                              <Typography variant="body1">
                                {originData.firstBenefits}
                              </Typography>
                            </Box>
                          </Box>
                        </Paper>
                      </Grid>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Paper
                          elevation={0}
                          variant="outlined"
                          sx={{ p: 3, borderRadius: 3 }}
                        >
                          <Typography
                            variant="subtitle2"
                            color="primary"
                            gutterBottom
                            fontWeight="600"
                          >
                            THE FIRST RECIPIENT
                          </Typography>
                          <Typography
                            variant="h6"
                            fontWeight="700"
                            gutterBottom
                          >
                            {originData.firstRecipient}
                          </Typography>
                          <Typography variant="body1" sx={{ mb: 2 }}>
                            Received her first check of{" "}
                            <strong>
                              ${originData.firstCheckAmount.toFixed(2)}
                            </strong>{" "}
                            on {originData.firstCheckDate}. She had paid only{" "}
                            <strong>
                              ${originData.totalContributed.toFixed(2)}
                            </strong>{" "}
                            in total taxes (1937–1939) on earnings of $2,484.
                          </Typography>
                          <Divider sx={{ my: 2 }} />
                          <Typography
                            variant="subtitle2"
                            color="primary"
                            gutterBottom
                            fontWeight="600"
                          >
                            ORIGINAL PROGRAM DESIGN
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 1.5,
                            }}
                          >
                            <Typography variant="body2">
                              <strong>Coverage:</strong>{" "}
                              {originData.originalCoverage}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Tax Rate:</strong>{" "}
                              {originData.originalTaxRate}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Excluded:</strong> {originData.excluded}
                            </Typography>
                          </Box>
                        </Paper>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>

              {/* Timeline */}
              <Grid size={{ xs: 12 }}>
                <Accordion
                  expanded={expandedSections.timeline}
                  onChange={() => handleSectionToggle("timeline")}
                  disableGutters
                  elevation={0}
                  sx={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 3,
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                      <Timeline color="primary" />
                      <Typography variant="h6" fontWeight="600">
                        Key Legislative Milestones & Parameter Evolution
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={3}>
                      {/* Key Amendments */}
                      <Grid size={{ xs: 12 }}>
                        <Typography
                          variant="subtitle2"
                          color="primary"
                          gutterBottom
                          fontWeight="600"
                        >
                          MAJOR AMENDMENTS
                        </Typography>
                        <TableContainer
                          component={Paper}
                          elevation={0}
                          variant="outlined"
                          sx={{ borderRadius: 3 }}
                        >
                          <Table size="small">
                            <TableHead>
                              <TableRow>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                  Year
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                  Legislation
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                  Key Changes
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {keyAmendments.map((a) => (
                                <TableRow
                                  key={a.year}
                                  sx={{ "&:last-child": { borderBottom: 1 } }}
                                >
                                  <TableCell>
                                    <Chip
                                      label={a.year}
                                      size="small"
                                      color="primary"
                                      variant="outlined"
                                    />
                                  </TableCell>
                                  <TableCell>
                                    <Typography
                                      variant="body2"
                                      fontWeight="600"
                                    >
                                      {a.name}
                                    </Typography>
                                  </TableCell>
                                  <TableCell>
                                    <Typography
                                      variant="body2"
                                      color="text.secondary"
                                    >
                                      {a.summary}
                                    </Typography>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Grid>

                      {/* Parameter Evolution */}
                      <Grid size={{ xs: 12 }}>
                        <Typography
                          variant="subtitle2"
                          color="primary"
                          gutterBottom
                          fontWeight="600"
                          sx={{ mt: 2 }}
                        >
                          PARAMETER EVOLUTION
                        </Typography>
                        <TableContainer
                          component={Paper}
                          elevation={0}
                          variant="outlined"
                          sx={{ borderRadius: 3 }}
                        >
                          <Table size="small">
                            <TableHead>
                              <TableRow>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                  Era
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                  Payroll Tax Rate
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                  Taxable Wage Base
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                  Normal Retirement Age
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                  Earliest Retirement
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                  Max Monthly Benefit
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {parameterEvolution.map((p) => (
                                <TableRow key={p.era}>
                                  <TableCell>
                                    <Chip
                                      label={p.era}
                                      size="small"
                                      color="primary"
                                      variant="outlined"
                                    />
                                  </TableCell>
                                  <TableCell>{p.taxRate}</TableCell>
                                  <TableCell>{p.wageBase}</TableCell>
                                  <TableCell>{p.NRA}</TableCell>
                                  <TableCell>{p.earliest}</TableCell>
                                  <TableCell>
                                    <Typography
                                      variant="body2"
                                      fontWeight="600"
                                    >
                                      {p.maxMonthly}
                                    </Typography>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Grid>

                      {/* Key Dates Timeline */}
                      <Grid size={{ xs: 12 }}>
                        <Typography
                          variant="subtitle2"
                          color="primary"
                          gutterBottom
                          fontWeight="600"
                          sx={{ mt: 2 }}
                        >
                          CRITICAL DATES
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1.5,
                          }}
                        >
                          {keyDates.map((k, i) => (
                            <Box
                              key={i}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  minWidth: 32,
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                {k.icon}
                              </Box>
                              <Chip
                                label={k.date}
                                size="small"
                                color={
                                  k.icon.props.color === "error"
                                    ? "error"
                                    : k.icon.props.color === "warning"
                                      ? "warning"
                                      : "primary"
                                }
                                variant="outlined"
                                sx={{ fontWeight: "bold", minWidth: 100 }}
                              />
                              <Typography variant="body2">{k.event}</Typography>
                            </Box>
                          ))}
                        </Box>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </TabPanel>
        </Grid>

        {/* Tab 2: Demographics */}
        <Grid size={{ xs: 12 }}>
          <TabPanel value={tabValue} index={1}>
            <Grid container spacing={3}>
              {/* Beneficiary Breakdown Chart */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    gutterBottom
                    fontWeight="600"
                  >
                    BENEFICIARY BREAKDOWN (2023)
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    ~67 million total beneficiaries
                  </Typography>
                  <Box sx={{ height: 280 }}>
                    <Doughnut
                      data={beneficiaryBreakdownData}
                      options={beneficiaryBreakdownOptions}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.5,
                      mt: 2,
                    }}
                  >
                    {beneficiaryBreakdown.map((b) => (
                      <Box
                        key={b.category}
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            bgcolor:
                              b.category === "Retired Workers & Dependents"
                                ? "#6366f1"
                                : b.category === "Disabled Workers & Dependents"
                                  ? "#a855f7"
                                  : "#ec4899",
                          }}
                        />
                        <Box>
                          <Typography variant="body2" fontWeight="600">
                            {b.category}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {b.count.toLocaleString()} recipients ({b.pct}%)
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>

              {/* Current Stats */}
              <Grid size={{ xs: 12, md: 7 }}>
                <Paper
                  elevation={0}
                  variant="outlined"
                  sx={{ p: 3, borderRadius: 3, height: "100%" }}
                >
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    gutterBottom
                    fontWeight="600"
                  >
                    CURRENT STATISTICS (2024)
                  </Typography>
                  <Grid container spacing={2}>
                    {[
                      {
                        label: "Total Beneficiaries",
                        value: currentStats.totalBeneficiaries,
                      },
                      {
                        label: "Covered Workers",
                        value: currentStats.coveredWorkers,
                      },
                      {
                        label: "Workers per Beneficiary",
                        value: `${currentStats.workersPerBeneficiary2023} (2023) → ${currentStats.workersPerBeneficiary2040} (2040)`,
                      },
                      {
                        label: "Payroll Tax Rate",
                        value: currentStats.payrollTaxRate,
                      },
                      {
                        label: "Taxable Wage Base",
                        value: currentStats.taxableWageBase,
                      },
                      {
                        label: "Max Monthly Benefit (FRA)",
                        value: currentStats.maxMonthlyBenefitFRA,
                      },
                      {
                        label: "Avg DI Monthly",
                        value: currentStats.averageDIMonthly,
                      },
                      {
                        label: "Total Program Cost (2023)",
                        value: currentStats.totalCost2023Billion,
                      },
                      {
                        label: "Total Income (2023)",
                        value: currentStats.totalIncome2023Billion,
                      },
                      {
                        label: "Trust Fund Reserves",
                        value: currentStats.trustFundReservesBillion,
                      },
                    ].map((stat) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={stat.label}>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          display="block"
                        >
                          {stat.label}
                        </Typography>
                        <Typography variant="body1" fontWeight="600">
                          {stat.value}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Grid>

              {/* ROI Winners */}
              <Grid size={{ xs: 12 }}>
                <Accordion
                  disableGutters
                  elevation={0}
                  sx={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 3,
                    mb: 3,
                    "&:before": { display: "none" },
                  }}
                  defaultExpanded
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                      <TrendingUp color="success" />
                      <Typography variant="h6" fontWeight="600">
                        Return on Investment (ROI): Who Paid the Least & Got the
                        Most?
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      While high earners receive the highest{" "}
                      <strong>absolute</strong> monthly check, the true
                      "winners" of Social Security are those who have the
                      highest <strong>Return on Investment</strong> (Total
                      Benefits Received ÷ Total Taxes Paid). The formula heavily
                      favors early generations, low-income earners, and
                      single-earner married couples.
                    </Typography>
                    <Box sx={{ height: 320, width: "100%" }}>
                      <Bar data={roiChartData} options={roiChartOptions} />
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Grid>

              {/* Who Benefits Most */}
              <Grid size={{ xs: 12 }}>
                <Accordion
                  expanded={expandedSections.demographics}
                  onChange={() => handleSectionToggle("demographics")}
                  disableGutters
                  elevation={0}
                  sx={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 3,
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                      <Star color="primary" />
                      <Typography variant="h6" fontWeight="600">
                        Who Benefits the Most vs. the Least
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={3}>
                      {/* Benefits Most */}
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 3,
                            borderRadius: 3,
                            borderLeft: "4px solid #66bb6a",
                            background: "rgba(102, 187, 106, 0.05)",
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            color="success.main"
                            gutterBottom
                            fontWeight="700"
                          >
                            WHO BENEFITS THE MOST
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 2,
                            }}
                          >
                            {demographicAnalysis.benefitMost.map((b) => (
                              <Box key={b.label}>
                                <Typography variant="body2" fontWeight="700">
                                  {b.label}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {b.detail}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Paper>
                      </Grid>

                      {/* Benefits Least */}
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 3,
                            borderRadius: 3,
                            borderLeft: "4px solid #ef5350",
                            background: "rgba(239, 83, 80, 0.05)",
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            color="error.main"
                            gutterBottom
                            fontWeight="700"
                          >
                            WHO BENEFITS THE LEAST
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 2,
                            }}
                          >
                            {demographicAnalysis.benefitLeast.map((b) => (
                              <Box key={b.label}>
                                <Typography variant="body2" fontWeight="700">
                                  {b.label}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {b.detail}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Paper>
                      </Grid>

                      {/* Age Groups */}
                      <Grid size={{ xs: 12 }}>
                        <Typography
                          variant="subtitle2"
                          color="primary"
                          gutterBottom
                          fontWeight="600"
                          sx={{ mt: 1 }}
                        >
                          AGE GROUP ANALYSIS
                        </Typography>
                        <TableContainer
                          component={Paper}
                          elevation={0}
                          variant="outlined"
                          sx={{ borderRadius: 3 }}
                        >
                          <Table size="small">
                            <TableHead>
                              <TableRow>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                  Age Group
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                  Benefit Status
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {demographicAnalysis.ageGroups.map((a) => (
                                <TableRow key={a.age}>
                                  <TableCell>
                                    <Chip
                                      label={a.age}
                                      size="small"
                                      color="primary"
                                      variant="outlined"
                                    />
                                  </TableCell>
                                  <TableCell>
                                    <Typography variant="body2">
                                      {a.status}
                                    </Typography>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </TabPanel>
        </Grid>

        {/* Tab 3: Solvency */}
        <Grid size={{ xs: 12 }}>
          <TabPanel value={tabValue} index={2}>
            <Grid container spacing={3}>
              {/* Alert */}
              <Grid size={{ xs: 12 }}>
                <Alert
                  severity="warning"
                  icon={<Warning />}
                  sx={{ borderRadius: 3 }}
                >
                  <Typography variant="body1">
                    <strong>Warning:</strong> Based on the 2024 Trustees Report
                    (Intermediate Assumptions), the combined OASDI trust fund is
                    projected to be depleted by <strong>2035</strong>, after
                    which only <strong>83%</strong> of scheduled benefits can be
                    paid from ongoing tax income.
                  </Typography>
                </Alert>
              </Grid>

              {/* Depletion Dates Table */}
              <Grid size={{ xs: 12 }}>
                <Paper
                  elevation={0}
                  variant="outlined"
                  sx={{ p: 3, borderRadius: 3 }}
                >
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    gutterBottom
                    fontWeight="600"
                  >
                    TRUST FUND DEPLETION DATES (2024 Trustees Report)
                  </Typography>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            Scenario
                          </TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            OASI Depletion
                          </TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            Combined OASDI Depletion
                          </TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            DI Depletion
                          </TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            Benefits After Depletion
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow sx={{ bgcolor: "rgba(99, 102, 241, 0.08)" }}>
                          <TableCell>
                            <Chip
                              label="Intermediate"
                              size="small"
                              color="primary"
                            />
                          </TableCell>
                          <TableCell fontWeight="bold">
                            {depletionDates.intermediate.OASI}
                          </TableCell>
                          <TableCell fontWeight="bold">
                            {depletionDates.intermediate.combinedOASDI}
                          </TableCell>
                          <TableCell>
                            {depletionDates.intermediate.DI}
                          </TableCell>
                          <TableCell>
                            {
                              depletionDates.intermediate
                                .combinedBenefitsAfterDepletionPct
                            }
                            % of scheduled benefits
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Chip
                              label="High-Cost"
                              size="small"
                              color="error"
                              variant="outlined"
                            />
                          </TableCell>
                          <TableCell fontWeight="bold">
                            {depletionDates.highCost.OASI}
                          </TableCell>
                          <TableCell fontWeight="bold">
                            {depletionDates.highCost.combinedOASDI}
                          </TableCell>
                          <TableCell fontWeight="bold">
                            {depletionDates.highCost.DI}
                          </TableCell>
                          <TableCell>
                            {
                              depletionDates.intermediate
                                .OASIBenefitsAfterDepletionPct
                            }
                            % of scheduled benefits
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Chip
                              label="Low-Cost"
                              size="small"
                              color="success"
                              variant="outlined"
                            />
                          </TableCell>
                          <TableCell fontWeight="bold">
                            {depletionDates.lowCost.OASI}
                          </TableCell>
                          <TableCell fontWeight="bold">
                            {depletionDates.lowCost.combinedOASDI}
                          </TableCell>
                          <TableCell>{depletionDates.lowCost.DI}</TableCell>
                          <TableCell>
                            Full benefits by{" "}
                            {depletionDates.lowCost.fullBenefitsResumed}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Chip
                              label="95% Confidence Range"
                              size="small"
                              color="warning"
                              variant="outlined"
                            />
                          </TableCell>
                          <TableCell colSpan={2}>
                            <Typography variant="body2">
                              {depletionDates.stochastic95PctRange} (combined
                              OASDI)
                            </Typography>
                          </TableCell>
                          <TableCell colSpan={2}></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>

              {/* Solvency Numbers */}
              <Grid size={{ xs: 12 }}>
                <Paper
                  elevation={0}
                  variant="outlined"
                  sx={{ p: 3, borderRadius: 3 }}
                >
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    gutterBottom
                    fontWeight="600"
                  >
                    75-YEAR SOLVENCY REQUIREMENTS
                  </Typography>
                  <Grid container spacing={3}>
                    {[
                      {
                        label: "Actuarial Deficit",
                        value: solvencyNumbers.actuarialDeficitPctPayroll,
                        icon: <TrendingDown />,
                      },
                      {
                        label: "Open-Group Unfunded Obligation (75-year PV)",
                        value: solvencyNumbers.unfundedObligationTrillions,
                        icon: <AccountBalance />,
                      },
                      {
                        label: "Payroll Tax Increase Needed",
                        value: solvencyNumbers.payrollTaxIncreaseNeeded,
                        icon: <AttachMoney />,
                      },
                      {
                        label: "Benefit Reduction Needed",
                        value: solvencyNumbers.benefitReductionNeededPct,
                        icon: <TrendingDown color="error" />,
                      },
                    ].map((item) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={item.label}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 1.5,
                          }}
                        >
                          <Box sx={{ mt: 0.5 }}>{item.icon}</Box>
                          <Box>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                              display="block"
                            >
                              {item.label}
                            </Typography>
                            <Typography variant="body1" fontWeight="600">
                              {item.value}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Grid>

              {/* Key Projections */}
              <Grid size={{ xs: 12 }}>
                <Paper
                  elevation={0}
                  variant="outlined"
                  sx={{ p: 3, borderRadius: 3 }}
                >
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    gutterBottom
                    fontWeight="600"
                  >
                    KEY PROJECTIONS
                  </Typography>
                  <Grid container spacing={2}>
                    {[
                      {
                        label: "First year costs exceed non-interest income",
                        value: "2010",
                      },
                      {
                        label:
                          "First year costs exceed total income (including interest)",
                        value: "2021",
                      },
                      {
                        label: "Workers per beneficiary (2023)",
                        value: "2.7 (declining to 2.3 by 2040)",
                      },
                      { label: "OASDI cost as % of GDP (2024)", value: "5.2%" },
                      {
                        label: "OASDI cost as % of GDP (peak ~2078)",
                        value: "6.4%",
                      },
                      {
                        label: "Total Program Cost (2023)",
                        value: "$1,392 billion",
                      },
                      { label: "Total Income (2023)", value: "$1,351 billion" },
                      {
                        label: "Trust Fund Reserves (end of 2023)",
                        value: "$2.788 trillion",
                      },
                      {
                        label: "Covered Workers with Payroll Taxes (2023)",
                        value: "~183 million",
                      },
                      {
                        label: "Number of Beneficiaries (2023)",
                        value:
                          "~67 million (53M retired, 9M disabled, 6M survivors)",
                      },
                    ].map((p) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={p.label}>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          display="block"
                        >
                          {p.label}
                        </Typography>
                        <Typography variant="body1" fontWeight="600">
                          {p.value}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </TabPanel>
        </Grid>

        {/* Tab 4: Historical Projections */}
        <Grid size={{ xs: 12 }}>
          <TabPanel value={tabValue} index={3}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12 }}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    gutterBottom
                    fontWeight="600"
                  >
                    HISTORICAL TRUST FUND DEPLETION DATE PROJECTIONS
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    The depletion date has fluctuated due to economic
                    conditions, demographic shifts, and methodological changes.
                    The trend shows the gap narrowing as baby boomers retire.
                  </Typography>
                  <Box sx={{ height: 360 }}>
                    <Bar
                      data={historicalProjectionData}
                      options={historicalProjectionOptions}
                    />
                  </Box>
                </Paper>
              </Grid>

              {/* Projection Table */}
              <Grid size={{ xs: 12 }}>
                <TableContainer
                  component={Paper}
                  elevation={0}
                  variant="outlined"
                  sx={{ borderRadius: 3 }}
                >
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Report Year
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Projected Depletion Date
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {historicalProjections.map((h) => (
                        <TableRow key={h.year}>
                          <TableCell>
                            <Chip
                              label={h.year}
                              size="small"
                              color={
                                h.year.includes("2024") ? "primary" : "default"
                              }
                              variant={
                                h.year.includes("2024") ? "filled" : "outlined"
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <Typography
                              variant="body2"
                              fontWeight={
                                h.year.includes("2024") ? "bold" : "normal"
                              }
                            >
                              {h.depletion}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>

              {/* Context */}
              <Grid size={{ xs: 12 }}>
                <Alert
                  severity="info"
                  icon={<History />}
                  sx={{ borderRadius: 3 }}
                >
                  <Typography variant="body2">
                    <strong>Note:</strong> The 1983 Greenspan Commission
                    projected depletion by 2014 — 16 years before the current
                    intermediate estimate of 2035. Each revision has generally
                    pushed the date later, but the baby boom retirement (born
                    1946–1964) is accelerating the timeline. The 2024 report
                    shows the trust fund already in deficit: costs exceeded
                    income in 2021.
                  </Typography>
                </Alert>
              </Grid>
            </Grid>
          </TabPanel>
        </Grid>
      </Grid>
    </Box>
  );
}
