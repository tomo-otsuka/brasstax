import React, { useState, useMemo, useRef, useEffect } from "react";
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
  TextField,
  MenuItem,
  Button,
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
  Share,
  Calculate,
} from "@mui/icons-material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  BarElement,
  LineController,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import { InputSection } from "./common/InputSection";
import { ResultCard } from "./common/ResultCard";
import { TaxYearBadge } from "./common/TaxYearBadge";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  BarElement,
  LineController,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
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

const generationalData = [
  {
    generation: "Greatest / Silent (pre-1945)",
    taxExperience:
      "Paid very low payroll taxes (under 10% combined until 1984).",
    outcome:
      "Extremely high positive real rate of return. Benefited from massive expansions in 1950s and 1970s.",
  },
  {
    generation: "Baby Boomers (1946–1964)",
    taxExperience:
      "First generation to pay the modern 12.4% rate for bulk of high-earning years.",
    outcome:
      "Generally positive return. The vast majority will lock in full benefits before the 2035 trust fund depletion.",
  },
  {
    generation: "Generation X (1965–1980)",
    taxExperience:
      "Paid 12.4% for entire careers. Faced gradual increase of FRA from 65 to 67.",
    outcome:
      "Tail-end will reach FRA right as Trust Fund depletes (2033-2035). At high risk of facing ~17% automatic benefit cuts.",
  },
  {
    generation: "Millennials & Gen Z (1981+)",
    taxExperience:
      "Entering workforce under a mature, expensive system. Likely to be burdened with fixing the shortfall (higher taxes, higher wage cap).",
    outcome:
      "Without reform, projected to receive ~83% of promised benefits despite paying full taxes. Highest risk of FRA being raised to 68-70.",
  },
];

const generationalValueData = {
  labels: [
    "Greatest Gen (~1920)",
    "Boomer (~1950)",
    "Gen X (~1970)",
    "Millennial (~1985)",
    "Gen Z (~2000+)",
  ],
  datasets: [
    {
      label: "Median Lifetime Taxes Paid",
      data: [50000, 350000, 450000, 550000, 650000],
      backgroundColor: "rgba(239, 68, 68, 0.8)",
      borderRadius: 4,
    },
    {
      label: "Median Lifetime Benefits Earned",
      data: [250000, 400000, 420000, 430000, 450000],
      backgroundColor: "rgba(16, 185, 129, 0.8)",
      borderRadius: 4,
    },
  ],
};

const generationalValueOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top", labels: { color: "rgba(255, 255, 255, 0.8)" } },
    tooltip: {
      callbacks: {
        label: (ctx) => `${ctx.dataset.label}: $${ctx.raw.toLocaleString()}`,
      },
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: "Total Dollars (Inflation Adjusted)",
        color: "rgba(255, 255, 255, 0.7)",
        font: { weight: "bold" },
      },
      ticks: {
        color: "rgba(255, 255, 255, 0.6)",
        callback: (value) => "$" + value / 1000 + "k",
      },
      grid: { color: "rgba(255, 255, 255, 0.1)" },
    },
    x: {
      ticks: { color: "rgba(255, 255, 255, 0.6)" },
      grid: { color: "rgba(255, 255, 255, 0.1)" },
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
  datasets: [
    {
      label: "Projected Depletion Year",
      data: historicalProjections.map((h) => ({
        x: parseInt(h.year.split(" ")[0]),
        y: parseInt(h.depletion.split(" ")[0]),
      })),
      backgroundColor: "rgba(168, 85, 247, 0.2)",
      borderColor: "rgba(168, 85, 247, 0.8)",
      borderWidth: 2,
      pointBackgroundColor: (ctx) => {
        const idx = ctx.dataIndex;
        return idx === historicalProjections.length - 1
          ? "#6366f1"
          : "rgba(168, 85, 247, 0.8)";
      },
      pointBorderColor: (ctx) => {
        const idx = ctx.dataIndex;
        return idx === historicalProjections.length - 1
          ? "#6366f1"
          : "rgba(168, 85, 247, 0.8)";
      },
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: true,
      tension: 0,
    },
  ],
};

const historicalProjectionOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        title: (ctx) => `Projection from ${ctx[0].parsed.x}`,
        label: (ctx) => `Depletion: ${ctx.parsed.y}`,
      },
    },
  },
  scales: {
    x: {
      type: "linear",
      title: { display: true, text: "Report Year" },
      ticks: {
        stepSize: 5,
        callback: (value) => value.toString(),
      },
    },
    y: {
      reverse: true,
      min: 2010,
      max: 2090,
      ticks: { stepSize: 10 },
      title: { display: true, text: "Projected Depletion Year" },
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

const SOCIAL_SECURITY_PERSONAS = {
  averageEarner: {
    name: "Average Earner",
    icon: <Person fontSize="small" />,
    pia: 2000,
    fra: 67,
    lifeExpectancy: 85,
    cola: 2.4,
    description: "Typical lifetime earnings, average life expectancy",
  },
  highEarner: {
    name: "Max Earner",
    icon: <Star fontSize="small" />,
    pia: 3822,
    fra: 67,
    lifeExpectancy: 85,
    cola: 2.4,
    description: "Maxed out taxable earnings (2024 max PIA)",
  },
  lowEarner: {
    name: "Low Earner",
    icon: <People fontSize="small" />,
    pia: 1000,
    fra: 67,
    lifeExpectancy: 85,
    cola: 2.4,
    description: "Lower lifetime earnings trajectory",
  },
  shortLife: {
    name: "Short Life Expectancy",
    icon: <TrendingDown fontSize="small" />,
    pia: 2000,
    fra: 67,
    lifeExpectancy: 74,
    cola: 2.4,
    description: "Average earner passing away earlier",
  },
  longLife: {
    name: "Long Life Expectancy",
    icon: <TrendingUp fontSize="small" />,
    pia: 2000,
    fra: 67,
    lifeExpectancy: 95,
    cola: 2.4,
    description: "Average earner living to 95",
  },
  custom: {
    name: "Custom",
    icon: <Calculate fontSize="small" />,
    pia: 3000,
    fra: 67,
    lifeExpectancy: 85,
    cola: 2.4,
    description: "Set your own parameters",
  },
};

// --- Components ---

export function SocialSecurity({
  searchParams,
  setSearchParams,
  showSnackbar,
}) {
  const persona =
    (searchParams && searchParams.get("persona")) || "averageEarner";
  const getParam = (key, fallback) => {
    if (searchParams && searchParams.get(key)) {
      return Number(searchParams.get(key));
    }
    return fallback;
  };

  const [pia, setPia] = useState(
    getParam("pia", SOCIAL_SECURITY_PERSONAS[persona].pia),
  );
  const [fra, setFra] = useState(
    getParam("fra", SOCIAL_SECURITY_PERSONAS[persona].fra),
  );
  const [cola, setCola] = useState(
    getParam("cola", SOCIAL_SECURITY_PERSONAS[persona].cola),
  );
  const [lifeExpectancy, setLifeExpectancy] = useState(
    getParam(
      "lifeExpectancy",
      SOCIAL_SECURITY_PERSONAS[persona].lifeExpectancy,
    ),
  );

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const updateSearchParams = (key, value) => {
    if (searchParams && setSearchParams) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(key, value);
      setSearchParams(newSearchParams);
    }
  };

  const handlePersonaChange = (p) => {
    if (searchParams && setSearchParams) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("persona", p);
      newSearchParams.delete("pia");
      newSearchParams.delete("fra");
      newSearchParams.delete("cola");
      newSearchParams.delete("lifeExpectancy");
      setSearchParams(newSearchParams);
    }
    const personaData = SOCIAL_SECURITY_PERSONAS[p];
    setPia(personaData.pia);
    setFra(personaData.fra);
    setCola(personaData.cola);
    setLifeExpectancy(personaData.lifeExpectancy);
  };

  const handleInputChange = (key, value, setter) => {
    setter(value);
    if (searchParams && setSearchParams) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(key, value);
      newSearchParams.set("persona", "custom");
      setSearchParams(newSearchParams);
    }
  };

  const results = useMemo(() => {
    const earlyReduction = fra === 67 ? 0.7 : 0.75;
    const benefit62 = pia * earlyReduction;
    const benefitFra = pia;
    const delayYears = 70 - fra;
    const benefit70 = pia * (1 + delayYears * 0.08);

    const years = lifeExpectancy - 62 + 1;
    const labels = Array.from({ length: years }, (_, i) => 62 + i);

    let cum62 = 0;
    let cumFra = 0;
    let cum70 = 0;

    const data62 = [];
    const dataFra = [];
    const data70 = [];

    labels.forEach((age) => {
      const currentYearCola = Math.pow(1 + cola / 100, age - 62);

      if (age >= 62) cum62 += benefit62 * 12 * currentYearCola;
      data62.push(cum62);

      if (age >= fra) cumFra += benefitFra * 12 * currentYearCola;
      dataFra.push(cumFra);

      if (age >= 70) cum70 += benefit70 * 12 * currentYearCola;
      data70.push(cum70);
    });

    const final62 = data62[data62.length - 1] || 0;
    const finalFra = dataFra[dataFra.length - 1] || 0;
    const final70 = data70[data70.length - 1] || 0;

    let breakEven62vsFra = null;
    let breakEvenFravs70 = null;
    labels.forEach((age, index) => {
      if (!breakEven62vsFra && dataFra[index] > data62[index])
        breakEven62vsFra = age;
      if (!breakEvenFravs70 && data70[index] > dataFra[index])
        breakEvenFravs70 = age;
    });

    let bestStrategy = "Claim at 70";
    let highestValue = final70;
    if (finalFra > highestValue) {
      bestStrategy = "Claim at FRA";
      highestValue = finalFra;
    }
    if (final62 > highestValue) {
      bestStrategy = "Claim at 62";
      highestValue = final62;
    }

    return {
      labels,
      data62,
      dataFra,
      data70,
      benefit62,
      benefitFra,
      benefit70,
      final62,
      finalFra,
      final70,
      bestStrategy,
      highestValue,
      breakEven62vsFra,
      breakEvenFravs70,
    };
  }, [pia, fra, cola, lifeExpectancy]);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      chartInstance.current = new ChartJS(ctx, {
        type: "line",
        data: {
          labels: results.labels,
          datasets: [
            {
              label: "Claim at 62",
              data: results.data62,
              borderColor: "#ec4899",
              backgroundColor: "rgba(236, 72, 153, 0.1)",
              borderWidth: 3,
              fill: true,
              tension: 0.4,
            },
            {
              label: `Claim at FRA (${fra})`,
              data: results.dataFra,
              borderColor: "#a855f7",
              backgroundColor: "rgba(168, 85, 247, 0.1)",
              borderWidth: 3,
              fill: true,
              tension: 0.4,
            },
            {
              label: "Claim at 70",
              data: results.data70,
              borderColor: "#6366f1",
              backgroundColor: "rgba(99, 102, 241, 0.1)",
              borderWidth: 3,
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: "index",
            intersect: false,
          },
          plugins: {
            title: {
              display: true,
              text: "Cumulative Lifetime Benefits",
              color: "rgba(255,255,255,0.9)",
              font: { size: 16 },
            },
            legend: { labels: { color: "rgba(255, 255, 255, 0.8)" } },
            tooltip: {
              callbacks: {
                label: (ctx) =>
                  `${ctx.dataset.label}: $${Math.round(ctx.raw).toLocaleString()}`,
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Age",
                color: "rgba(255, 255, 255, 0.7)",
              },
              ticks: { color: "rgba(255, 255, 255, 0.6)" },
              grid: { color: "rgba(255, 255, 255, 0.1)" },
            },
            y: {
              title: {
                display: true,
                text: "Cumulative Benefits ($)",
                color: "rgba(255, 255, 255, 0.7)",
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.6)",
                callback: (val) => "$" + val.toLocaleString(),
              },
              grid: { color: "rgba(255, 255, 255, 0.1)" },
            },
          },
        },
      });
    }
    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, [results, fra]);

  return (
    <Box component="main" sx={{ flexGrow: 1, padding: 2 }}>
      <Box component="header">
        <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Grid size="grow">
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #8b5cf6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                }}
              >
                Social Security Claiming Analyzer
              </Typography>
              <TaxYearBadge year="2024" />
            </Box>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              startIcon={<Share />}
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                if (showSnackbar) showSnackbar();
              }}
            >
              Share
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Accordion sx={{ mb: 3 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">How this works</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>
            This tool calculates the{" "}
            <strong>Cumulative Lifetime Benefits</strong> of different claiming
            strategies. Delaying benefits until age 70 results in the highest
            monthly check, but it takes years to "break even" from the missed
            early payments.
          </Typography>
          <ul>
            <li>
              <Typography>
                <strong>Age 62 (Early):</strong> Earliest claiming age. Your
                benefit is permanently reduced by up to 30%.
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>FRA ({fra}):</strong> Full Retirement Age. You receive
                100% of your Primary Insurance Amount (PIA).
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Age 70 (Delayed):</strong> Maximum benefit. You receive
                an 8% increase for every year you delay past FRA.
              </Typography>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5 }}>
          <InputSection title="Assumptions">
            <TextField
              select
              variant="filled"
              label="Select Persona"
              value={persona}
              onChange={(e) => handlePersonaChange(e.target.value)}
              fullWidth
              sx={{
                mb: 3,
                backgroundColor: "rgba(139, 92, 246, 0.05)",
                borderRadius: 1,
                "& .MuiFilledInput-root": {
                  backgroundColor: "transparent",
                },
                "& .MuiFilledInput-root:hover": {
                  backgroundColor: "rgba(139, 92, 246, 0.08)",
                },
                "& .MuiFilledInput-root.Mui-focused": {
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                },
              }}
            >
              {Object.entries(SOCIAL_SECURITY_PERSONAS).map(([key, p]) => (
                <MenuItem key={key} value={key}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    {p.icon}
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {p.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {p.description}
                      </Typography>
                    </Box>
                  </Box>
                </MenuItem>
              ))}
            </TextField>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label="Monthly PIA at FRA ($)"
                  type="number"
                  value={pia}
                  onChange={(e) =>
                    handleInputChange("pia", Number(e.target.value), setPia)
                  }
                  fullWidth
                  inputProps={{ step: 100 }}
                  helperText="Primary Insurance Amount"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  select
                  label="Full Retirement Age (FRA)"
                  value={fra}
                  onChange={(e) =>
                    handleInputChange("fra", Number(e.target.value), setFra)
                  }
                  fullWidth
                >
                  <MenuItem value={66}>66 (Born 1943-1954)</MenuItem>
                  <MenuItem value={67}>67 (Born 1960 or later)</MenuItem>
                </TextField>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label="Life Expectancy (Age)"
                  type="number"
                  value={lifeExpectancy}
                  onChange={(e) =>
                    handleInputChange(
                      "lifeExpectancy",
                      Number(e.target.value),
                      setLifeExpectancy,
                    )
                  }
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label="Annual COLA (%)"
                  type="number"
                  value={cola}
                  onChange={(e) =>
                    handleInputChange("cola", Number(e.target.value), setCola)
                  }
                  fullWidth
                  inputProps={{ step: 0.1 }}
                  helperText="Cost of Living Adjustment"
                />
              </Grid>
            </Grid>
          </InputSection>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ position: "sticky", top: "1rem" }}>
            <ResultCard
              title={`Highest Lifetime Value: ${results.bestStrategy}`}
              icon={<Timeline />}
              value={results.highestValue}
              subtitle={`Cumulative Benefits at Age ${lifeExpectancy}`}
            >
              {(results.breakEven62vsFra || results.breakEvenFravs70) && (
                <Box
                  sx={{
                    mb: 3,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  {results.breakEven62vsFra && (
                    <Alert
                      severity="info"
                      icon={<Timeline />}
                      sx={{ borderRadius: 2 }}
                    >
                      <strong>Age {results.breakEven62vsFra}:</strong> Claiming
                      at FRA ({fra}) surpasses claiming at 62.
                    </Alert>
                  )}
                  {results.breakEvenFravs70 && (
                    <Alert
                      severity="success"
                      icon={<TrendingUp />}
                      sx={{ borderRadius: 2 }}
                    >
                      <strong>Age {results.breakEvenFravs70}:</strong> Claiming
                      at 70 surpasses claiming at FRA ({fra}).
                    </Alert>
                  )}
                </Box>
              )}
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid size={{ xs: 4 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 1,
                      bgcolor: "rgba(236, 72, 153, 0.1)",
                      border: "1px solid rgba(236, 72, 153, 0.3)",
                    }}
                  >
                    <Typography variant="subtitle2" color="textSecondary">
                      Claim at 62
                    </Typography>
                    <Typography variant="h6">
                      ${Math.round(results.benefit62).toLocaleString()}/mo
                    </Typography>
                    <Typography variant="caption">
                      Total: ${Math.round(results.final62).toLocaleString()}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 1,
                      bgcolor: "rgba(168, 85, 247, 0.1)",
                      border: "1px solid rgba(168, 85, 247, 0.3)",
                    }}
                  >
                    <Typography variant="subtitle2" color="textSecondary">
                      Claim at {fra}
                    </Typography>
                    <Typography variant="h6">
                      ${Math.round(results.benefitFra).toLocaleString()}/mo
                    </Typography>
                    <Typography variant="caption">
                      Total: ${Math.round(results.finalFra).toLocaleString()}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 1,
                      bgcolor: "rgba(99, 102, 241, 0.1)",
                      border: "1px solid rgba(99, 102, 241, 0.3)",
                    }}
                  >
                    <Typography variant="subtitle2" color="textSecondary">
                      Claim at 70
                    </Typography>
                    <Typography variant="h6">
                      ${Math.round(results.benefit70).toLocaleString()}/mo
                    </Typography>
                    <Typography variant="caption">
                      Total: ${Math.round(results.final70).toLocaleString()}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{ height: 300 }}>
                <canvas ref={chartRef} />
              </Box>
            </ResultCard>
          </Box>
        </Grid>
      </Grid>

      {/* Supporting Data / Historical Information */}
      <Box sx={{ mt: 6 }}>
        <Divider sx={{ mb: 4 }} />
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
          Explore Social Security Data & History
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Dive into the numbers behind the program: ROI by demographic,
          historical trust fund depletion dates, and a generational breakdown of
          winners and losers.
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <TrendingUp color="primary" />
              <Typography variant="h6" fontWeight="600">
                Return on Investment (ROI): Who Paid the Least & Got the Most?
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              While high earners receive the highest <strong>absolute</strong>{" "}
              monthly check, the true "winners" of Social Security are those who
              have the highest <strong>Return on Investment</strong> (Total
              Benefits Received ÷ Total Taxes Paid). The formula heavily favors
              early generations, low-income earners, and single-earner married
              couples.
            </Typography>
            <Box sx={{ height: 320, width: "100%", mb: 3 }}>
              <Bar data={roiChartData} options={roiChartOptions} />
            </Box>
            <Grid container spacing={3}>
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
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    {demographicAnalysis.benefitMost.map((b) => (
                      <Box key={b.label}>
                        <Typography variant="body2" fontWeight="700">
                          {b.label}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {b.detail}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
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
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    {demographicAnalysis.benefitLeast.map((b) => (
                      <Box key={b.label}>
                        <Typography variant="body2" fontWeight="700">
                          {b.label}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {b.detail}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <History color="primary" />
              <Typography variant="h6" fontWeight="600">
                Generational Outlook
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              <strong>Estimated Lifetime Value by Generation:</strong>{" "}
              Historically, Social Security represented a massive transfer of
              wealth to early retirees. As the system matured and the
              worker-to-beneficiary ratio shrank, the lifetime ROI has steadily
              declined. Millennials and Gen Z are currently projected to pay
              more into the system than they will receive back in real terms.
            </Typography>
            <Box sx={{ height: 350, width: "100%", mb: 4 }}>
              <Bar
                data={generationalValueData}
                options={generationalValueOptions}
              />
            </Box>
            <Typography
              variant="subtitle2"
              color="primary"
              gutterBottom
              fontWeight="600"
            >
              QUALITATIVE OUTLOOK BY COHORT
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
                    <TableCell sx={{ fontWeight: "bold", minWidth: 150 }}>
                      Generation
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Tax Experience
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Expected Outcome / Benefit Risk
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {generationalData.map((g, idx) => (
                    <TableRow key={idx}>
                      <TableCell>
                        <Chip
                          label={g.generation}
                          size="small"
                          color={
                            g.generation.includes("pre-1945") ||
                            g.generation.includes("Boomers")
                              ? "success"
                              : g.generation.includes("Generation X")
                                ? "warning"
                                : "error"
                          }
                          variant="outlined"
                          sx={{ fontWeight: "bold" }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {g.taxExperience}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">{g.outcome}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Warning color="warning" />
              <Typography variant="h6" fontWeight="600">
                Solvency & Trust Fund Depletion
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Alert
              severity="warning"
              icon={<Warning />}
              sx={{ borderRadius: 3, mb: 3 }}
            >
              <Typography variant="body1">
                <strong>Warning:</strong> Based on the 2024 Trustees Report
                (Intermediate Assumptions), the combined OASDI trust fund is
                projected to be depleted by <strong>2035</strong>, after which
                only <strong>83%</strong> of scheduled benefits can be paid from
                ongoing tax income.
              </Typography>
            </Alert>
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
                        label: "Open-Group Unfunded Obligation",
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
                      <Grid size={{ xs: 12 }} key={item.label}>
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
              <Grid size={{ xs: 12, md: 6 }}>
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
                    HISTORICAL DEPLETION PROJECTIONS
                  </Typography>
                  <Box sx={{ height: 250 }}>
                    <Line
                      data={historicalProjectionData}
                      options={historicalProjectionOptions}
                    />
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
