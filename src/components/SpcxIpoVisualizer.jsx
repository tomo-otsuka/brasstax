import React, { useMemo, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper,
  Slider,
  Divider,
  Switch,
  FormControlLabel,
  Chip,
  Alert,
  Button,
  Tooltip as MuiTooltip,
} from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import ShareIcon from "@mui/icons-material/Share";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { usePageMeta } from "./common/usePageMeta";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

// Shared chart color palette aligned with theme
const CHART_COLORS = {
  teal: {
    border: "#2dd4bf",
    bg: "rgba(45, 212, 191, 0.15)",
  },
  indigo: {
    border: "#818cf8",
    bg: "rgba(129, 140, 248, 0.15)",
  },
  purple: {
    border: "#c084fc",
    bg: "rgba(192, 132, 252, 0.15)",
  },
  emerald: {
    border: "#10b981",
    bg: "rgba(16, 185, 129, 0.15)",
  },
  amber: {
    border: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.15)",
  },
};

// Shared Tooltip slotProps for styled hover details
const tooltipSlotProps = {
  tooltip: {
    sx: {
      bgcolor: "rgba(15, 23, 42, 0.95)",
      backdropFilter: "blur(4px)",
      color: "#f8fafc",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)",
      p: 1.5,
      borderRadius: 2,
    },
  },
  arrow: {
    sx: {
      color: "rgba(15, 23, 42, 0.95)",
    },
  },
};

// Formatting helpers
const formatMoneyShort = (valInB) => {
  if (valInB === 0) return "$0M";
  if (valInB >= 1000) return `$${(valInB / 1000).toFixed(1)}T`;
  if (valInB >= 1) return `$${valInB.toFixed(2)}B`;
  return `$${(valInB * 1000).toFixed(0)}M`;
};

const formatMoneyLong = (valInB) => {
  if (valInB === 0) return "$0 Million";
  if (valInB >= 1000) return `$${(valInB / 1000).toFixed(1)} Trillion`;
  if (valInB >= 1) return `$${valInB.toFixed(2)} Billion`;
  return `$${(valInB * 1000).toFixed(0)} Million`;
};

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

// 2027 holidays to skip
const HOLIDAYS_2027 = [
  "2027-01-01", // New Year's Day
  "2027-01-18", // MLK Day
  "2027-02-15", // Washington's Birthday
  "2027-03-26", // Good Friday
  "2027-05-31", // Memorial Day
  "2027-06-18", // Juneteenth (Observed)
  "2027-07-05", // Independence Day (Observed)
];

const isTradingDay = (date) => {
  const day = date.getDay();
  if (day === 0 || day === 6) return false; // Weekend

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const dayOfMonth = String(date.getDate()).padStart(2, "0");
  const dateString = `${year}-${month}-${dayOfMonth}`;

  const holidays = [
    "2026-06-19", // Juneteenth
    "2026-07-03", // Independence Day (observed)
    "2026-09-07", // Labor Day
    "2026-11-26", // Thanksgiving
    "2026-12-25", // Christmas
    ...HOLIDAYS_2027,
  ];
  return !holidays.includes(dateString);
};

const generateSimulatedDates = () => {
  const startDate = new Date("2026-06-12T00:00:00");
  const endDate = new Date("2027-07-31T00:00:00");
  const dates = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    if (isTradingDay(currentDate)) {
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const dayOfMonth = String(currentDate.getDate()).padStart(2, "0");
      dates.push(`${year}-${month}-${dayOfMonth}`);
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
};

const SIMULATED_DATES = generateSimulatedDates();

const getInitialPrice = () => {
  const params = new URLSearchParams(window.location.search);
  const price = params.get("price");
  if (price !== null && price.trim() !== "" && !isNaN(Number(price))) {
    return Number(price);
  }
  return 185;
};

const getInitialDaysSinceIpo = () => {
  const params = new URLSearchParams(window.location.search);
  const day = params.get("day");
  if (day !== null && day.trim() !== "" && !isNaN(Number(day))) {
    const parsedDay = Math.floor(Number(day));
    if (parsedDay >= 0 && parsedDay < SIMULATED_DATES.length) {
      return parsedDay;
    }
  }

  // Get current date in New York time (US market timezone)
  const today = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
  );
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const dayVal = String(today.getDate()).padStart(2, "0");
  const todayStr = `${year}-${month}-${dayVal}`;

  const index = SIMULATED_DATES.findIndex((d) => d >= todayStr);
  if (index === -1) {
    return SIMULATED_DATES.length - 1;
  }
  if (SIMULATED_DATES[index] === todayStr) {
    return index;
  }
  if (index === 0) {
    return 0;
  }
  return index - 1;
};

const getInitialPerformanceBonus = () => {
  const params = new URLSearchParams(window.location.search);
  const bonus = params.get("bonus");
  if (bonus !== null) {
    return bonus === "true";
  }
  return false;
};

const getInitialSp500Profitability = () => {
  const params = new URLSearchParams(window.location.search);
  const val = params.get("sp500Profitable");
  if (val !== null) {
    return val === "true";
  }
  return true;
};

export const SpcxIpoVisualizer = () => {
  usePageMeta({
    title: "SPCX IPO & Index Inclusion Dynamics",
    description:
      "Model the unique disruptions to major indexes caused by an extremely high market cap IPO. Analyze index inclusion rules.",
  });

  const [spcxPrice, setSpcxPrice] = useState(getInitialPrice);
  const [daysSinceIpo, setDaysSinceIpo] = useState(getInitialDaysSinceIpo);
  const [includePerformanceBonus, setIncludePerformanceBonus] = useState(
    getInitialPerformanceBonus,
  );
  const [sp500ProfitabilityMet, setSp500ProfitabilityMet] = useState(
    getInitialSp500Profitability,
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("price", spcxPrice);
    params.set("day", daysSinceIpo);
    params.set("bonus", includePerformanceBonus);
    params.set("sp500Profitable", sp500ProfitabilityMet);
    const newRelativePathQuery =
      window.location.pathname + "?" + params.toString() + window.location.hash;
    window.history.replaceState(null, "", newRelativePathQuery);
  }, [spcxPrice, daysSinceIpo, includePerformanceBonus, sp500ProfitabilityMet]);

  // Calculator Constants & Derived Values
  const IMPLIED_SHARES_B = 13.17; // 13.17B Implied Shares Outstanding (all classes, used for headline valuation)
  const LISTED_SHARES_B = 7.57; // 7.57B Listed Shares Outstanding (used by indexes for weighting)
  const VTI_MARKET_CAP_B = 55000; // $55 Trillion
  const QQQ_MARKET_CAP_B = 25000; // $25 Trillion
  const VT_MARKET_CAP_B = 91667; // $91.67 Trillion (aligned with US representing ~60% of FTSE Global All Cap)
  const SP500_MARKET_CAP_B = 45000; // $45 Trillion
  const VTI_AUM_B = 3000; // $3.0 Trillion AUM (Total tracking CRSP US Total Market)
  const QQQ_AUM_B = 800; // $800 Billion AUM (Total tracking Nasdaq-100)
  const VT_AUM_B = 2400; // $2.4 Trillion AUM (Total tracking FTSE Global All Cap)
  const SP500_AUM_B = 16000; // $16.0 Trillion AUM (Total tracking S&P 500)

  // Generate some simulated daily data from June 12, 2026 to July 31, 2027
  const chartData = useMemo(() => {
    const floatValues = [];
    const vtiWeights = [];
    const qqqWeights = [];
    const vtWeights = [];
    const sp500Weights = [];

    const currentListedMarketCapB = spcxPrice * LISTED_SHARES_B;
    const startDate = new Date("2026-06-12T00:00:00");

    SIMULATED_DATES.forEach((dateStr, index) => {
      const currentDate = new Date(`${dateStr}T00:00:00`);
      const tradingDaysSinceIpo = index + 1; // June 12 is trading day 1

      const calendarDays = Math.floor(
        (currentDate - startDate) / (1000 * 60 * 60 * 24),
      );

      // Simulate float dynamics based on SPCX staggered lockup rules:
      // Base float: ~5%
      let currentFloat = 5.0;

      if (calendarDays >= 180) {
        currentFloat = 100.0;
      } else if (calendarDays >= 135) {
        currentFloat = 60.0;
      } else if (calendarDays >= 120) {
        currentFloat = 53.0;
      } else if (calendarDays >= 105) {
        currentFloat = 46.0;
      } else if (calendarDays >= 90) {
        currentFloat = 39.0;
      } else if (calendarDays >= 84) {
        currentFloat = 32.0;
      } else if (calendarDays >= 70) {
        currentFloat = 12.0;
      }

      if (includePerformanceBonus && calendarDays >= 84) {
        currentFloat = Math.min(100.0, currentFloat + 10.0);
      }

      floatValues.push(currentFloat);

      // ETF Logic
      const spcxFloatCapB = currentListedMarketCapB * (currentFloat / 100);

      // VTI included on 5th trading day (June 18)
      const vtiWeight =
        tradingDaysSinceIpo >= 5
          ? (spcxFloatCapB / (VTI_MARKET_CAP_B + spcxFloatCapB)) * 100
          : 0;

      // QQQ included on 15th trading day (July 6)
      const effectiveQqqCapB = Math.min(
        currentListedMarketCapB,
        3 * spcxFloatCapB,
      );
      const qqqWeight =
        tradingDaysSinceIpo >= 15
          ? (effectiveQqqCapB / (QQQ_MARKET_CAP_B + effectiveQqqCapB)) * 100
          : 0;

      // VT included on 5th trading day (same as VTI)
      const vtWeight =
        tradingDaysSinceIpo >= 5
          ? (spcxFloatCapB / (VT_MARKET_CAP_B + spcxFloatCapB)) * 100
          : 0;

      // SPY included roughly after 1 year (calendarDays >= 365, effective on rebalance date)
      const sp500Weight =
        calendarDays >= 371 && sp500ProfitabilityMet // Jun 18, 2027
          ? (spcxFloatCapB / (SP500_MARKET_CAP_B + spcxFloatCapB)) * 100
          : 0;

      vtiWeights.push(vtiWeight);
      qqqWeights.push(qqqWeight);
      vtWeights.push(vtWeight);
      sp500Weights.push(sp500Weight);
    });

    return {
      dates: SIMULATED_DATES,
      floatValues,
      vtiWeights,
      qqqWeights,
      vtWeights,
      sp500Weights,
    };
  }, [includePerformanceBonus, spcxPrice, sp500ProfitabilityMet]);

  // Derived current metrics based on selected date
  const spcxFloat = chartData.floatValues[daysSinceIpo];
  const selectedDateStr = chartData.dates[daysSinceIpo];

  const impliedMarketCapB = spcxPrice * IMPLIED_SHARES_B;

  // Inclusion Logic
  const vtiWeightPercent = chartData.vtiWeights[daysSinceIpo];
  const isVtiIncluded = vtiWeightPercent > 0;

  const qqqWeightPercent = chartData.qqqWeights[daysSinceIpo];
  const isQqqIncluded = qqqWeightPercent > 0;

  const vtWeightPercent = chartData.vtWeights[daysSinceIpo];
  const isVtIncluded = vtWeightPercent > 0;

  const sp500WeightPercent = chartData.sp500Weights[daysSinceIpo];
  const isSp500Included = sp500WeightPercent > 0;

  const vtiForcedBuyingB = VTI_AUM_B * (vtiWeightPercent / 100);
  const qqqForcedBuyingB = QQQ_AUM_B * (qqqWeightPercent / 100);
  const vtForcedBuyingB = VT_AUM_B * (vtWeightPercent / 100);
  const sp500ForcedBuyingB = SP500_AUM_B * (sp500WeightPercent / 100);

  // Shared dark-mode chart options
  const chartTextColor = "rgba(255, 255, 255, 0.7)";
  const chartGridColor = "rgba(255, 255, 255, 0.06)";

  // Helper to dynamically highlight the point corresponding to the selected date
  const getPointSettings = (dataArray, colorBorder) => {
    const radii = new Array(dataArray.length).fill(0);
    const hoverRadii = new Array(dataArray.length).fill(5);
    const bgColors = new Array(dataArray.length).fill(colorBorder);
    const borderColors = new Array(dataArray.length).fill(colorBorder);
    const borderWidths = new Array(dataArray.length).fill(0);

    if (daysSinceIpo >= 0 && daysSinceIpo < dataArray.length) {
      radii[daysSinceIpo] = 6;
      hoverRadii[daysSinceIpo] = 8;
      bgColors[daysSinceIpo] = colorBorder;
      borderColors[daysSinceIpo] = "#ffffff";
      borderWidths[daysSinceIpo] = 2;
    }

    return {
      pointRadius: radii,
      pointHoverRadius: hoverRadii,
      pointBackgroundColor: bgColors,
      pointBorderColor: borderColors,
      pointBorderWidth: borderWidths,
      pointHoverBackgroundColor: colorBorder,
    };
  };

  // Custom plugin to draw a vertical line on the selected timeline date
  const verticalLinePlugin = {
    id: "verticalLine",
    afterDraw: (chart) => {
      if (daysSinceIpo === undefined || daysSinceIpo === null) return;
      const {
        ctx,
        chartArea: { top, bottom },
        scales: { x },
      } = chart;
      const xCoord = x.getPixelForTick(daysSinceIpo);
      if (xCoord !== undefined && xCoord >= x.left && xCoord <= x.right) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([5, 5]);
        ctx.moveTo(xCoord, top);
        ctx.lineTo(xCoord, bottom);
        ctx.stroke();
        ctx.restore();
      }
    },
  };

  const floatPointSettings = getPointSettings(
    chartData.floatValues,
    CHART_COLORS.teal.border,
  );

  const data = {
    labels: chartData.dates,
    datasets: [
      {
        label: "SPCX Estimated Public Float (%)",
        data: chartData.floatValues,
        borderColor: CHART_COLORS.teal.border,
        backgroundColor: CHART_COLORS.teal.bg,
        tension: 0.1,
        fill: true,
        stepped: true,
        ...floatPointSettings,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    onClick: (event, elements) => {
      if (elements && elements.length > 0) {
        setDaysSinceIpo(elements[0].index);
      }
    },
    plugins: {
      legend: {
        position: "top",
        labels: { color: chartTextColor, usePointStyle: true, padding: 16 },
      },
      title: {
        display: true,
        text: "SPCX Float Over Time (2026 Simulation)",
        font: { size: 16, weight: 600 },
        color: "#ffffff",
        padding: { bottom: 16 },
      },
      tooltip: {
        backgroundColor: "rgba(15, 15, 20, 0.9)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        titleColor: "#fff",
        bodyColor: "rgba(255, 255, 255, 0.8)",
        cornerRadius: 8,
        padding: 12,
        callbacks: {
          label: (context) => `Float: ${context.parsed.y}%`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "Public Float (%)",
          color: chartTextColor,
        },
        ticks: { color: chartTextColor },
        grid: { color: chartGridColor },
      },
      x: {
        title: { display: true, text: "Date", color: chartTextColor },
        ticks: { maxTicksLimit: 10, color: chartTextColor },
        grid: { color: chartGridColor },
      },
    },
  };

  const vtiPointSettings = getPointSettings(
    chartData.vtiWeights,
    CHART_COLORS.indigo.border,
  );
  const qqqPointSettings = getPointSettings(
    chartData.qqqWeights,
    CHART_COLORS.purple.border,
  );
  const vtPointSettings = getPointSettings(
    chartData.vtWeights,
    CHART_COLORS.emerald.border,
  );
  const sp500PointSettings = getPointSettings(
    chartData.sp500Weights,
    CHART_COLORS.amber.border,
  );

  const etfData = {
    labels: chartData.dates,
    datasets: [
      {
        label: "Broad Market Est. Weight (%)",
        data: chartData.vtiWeights,
        borderColor: CHART_COLORS.indigo.border,
        backgroundColor: CHART_COLORS.indigo.bg,
        tension: 0.1,
        fill: true,
        stepped: true,
        ...vtiPointSettings,
        borderWidth: 2,
      },
      {
        label: "Nasdaq-100 Est. Weight (%)",
        data: chartData.qqqWeights,
        borderColor: CHART_COLORS.purple.border,
        backgroundColor: CHART_COLORS.purple.bg,
        tension: 0.1,
        fill: true,
        stepped: true,
        ...qqqPointSettings,
        borderWidth: 2,
      },
      {
        label: "Global All Cap Est. Weight (%)",
        data: chartData.vtWeights,
        borderColor: CHART_COLORS.emerald.border,
        backgroundColor: CHART_COLORS.emerald.bg,
        tension: 0.1,
        fill: true,
        stepped: true,
        ...vtPointSettings,
        borderWidth: 2,
      },
      {
        label: "S&P 500 Est. Weight (%)",
        data: chartData.sp500Weights,
        borderColor: CHART_COLORS.amber.border,
        backgroundColor: CHART_COLORS.amber.bg,
        tension: 0.1,
        fill: true,
        stepped: true,
        ...sp500PointSettings,
        borderWidth: 2,
      },
    ],
  };

  const etfOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    onClick: (event, elements) => {
      if (elements && elements.length > 0) {
        setDaysSinceIpo(elements[0].index);
      }
    },
    plugins: {
      legend: {
        position: "top",
        labels: { color: chartTextColor, usePointStyle: true, padding: 16 },
      },
      title: {
        display: true,
        text: "ETF Inclusion Weights Over Time",
        font: { size: 16, weight: 600 },
        color: "#ffffff",
        padding: { bottom: 16 },
      },
      tooltip: {
        backgroundColor: "rgba(15, 15, 20, 0.9)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        titleColor: "#fff",
        bodyColor: "rgba(255, 255, 255, 0.8)",
        cornerRadius: 8,
        padding: 12,
        callbacks: {
          label: (context) =>
            `${context.dataset.label.replace(" (%)", "")}: ${context.parsed.y.toFixed(3)}%`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Weight (%)", color: chartTextColor },
        ticks: { color: chartTextColor },
        grid: { color: chartGridColor },
      },
      x: {
        title: { display: true, text: "Date", color: chartTextColor },
        ticks: { maxTicksLimit: 10, color: chartTextColor },
        grid: { color: chartGridColor },
      },
    },
  };

  const events = [
    {
      date: "2026-06-12",
      title: "SPCX IPO",
      description:
        "Initial Public Offering. Very small initial float (~5%) created scarcity.",
      type: "neutral",
    },
    {
      date: "2026-06-18",
      title: "Total Market & Russell Fast-Track Inclusion",
      description:
        "Included after the close of the 5th trading day. (Note: June 19 is Juneteenth market holiday).",
      type: "upward",
    },
    {
      date: "2026-07-06",
      title: "Nasdaq-100 Fast-Track Inclusion",
      description:
        "Included on the 15th trading day. Subject to the new 3x float-constrained weighting methodology.",
      type: "upward",
    },
    {
      date: "2026-08-21",
      title: "70-Day Lockup Expiry",
      description: "First staggered release tranche (~7% float increase).",
      type: "downward",
    },
    {
      date: "2026-09-04",
      title: "Earnings-Based Release",
      description:
        "Up to 20% release 2 days after Q2 earnings (plus potential 10% Q2 performance bonus unlock).",
      type: "downward",
    },
    {
      date: "2026-09-10",
      title: "90-Day Lockup Expiry",
      description: "Second staggered release tranche (~7% float increase).",
      type: "downward",
    },
    {
      date: "2026-09-25",
      title: "105-Day Lockup Expiry",
      description: "Third staggered release tranche (~7% float increase).",
      type: "downward",
    },
    {
      date: "2026-10-10",
      title: "120-Day Lockup Expiry",
      description: "Fourth staggered release tranche (~7% float increase).",
      type: "downward",
    },
    {
      date: "2026-10-25",
      title: "135-Day Lockup Expiry",
      description: "Fifth staggered release tranche (~7% float increase).",
      type: "downward",
    },
    {
      date: "2026-12-09",
      title: "180-Day Lockup Expiry",
      description: "Standard lockup expiration for remaining insider shares.",
      type: "downward",
    },
    {
      date: "2027-06-18",
      title: "S&P 500 Inclusion",
      description: "Eligible for S&P 500 after 1 year of trading seasoning.",
      type: "upward",
    },
  ];

  // Helpers for event styling
  const eventColor = (type) => {
    if (type === "upward") return "#34d399";
    if (type === "downward") return "#f87171";
    return "#818cf8";
  };

  const eventBg = (type) =>
    type === "upward"
      ? "rgba(52, 211, 153, 0.08)"
      : type === "downward"
        ? "rgba(248, 113, 113, 0.08)"
        : "rgba(129, 140, 248, 0.08)";

  const EventIcon = ({ type }) =>
    type === "upward" ? (
      <TrendingUpIcon sx={{ color: eventColor(type), fontSize: 22 }} />
    ) : type === "downward" ? (
      <TrendingDownIcon sx={{ color: eventColor(type), fontSize: 22 }} />
    ) : (
      <RocketLaunchIcon sx={{ color: eventColor(type), fontSize: 22 }} />
    );

  // Reusable section header
  const SectionHeader = ({ icon, children }) => (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3, mt: 5 }}>
      {React.cloneElement(icon, {
        sx: { color: "primary.main", fontSize: 28 },
      })}
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        {children}
      </Typography>
    </Box>
  );

  return (
    <Box>
      {/* ──────── Title Section ──────── */}
      <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Grid size="grow">
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                background: "linear-gradient(135deg, #ffffff 0%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                fontSize: { xs: "1.8rem", md: "2.5rem" },
              }}
            >
              SPCX IPO & Index Inclusion Dynamics
            </Typography>
          </Box>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            startIcon={<ShareIcon />}
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Link copied to clipboard!");
            }}
          >
            Share
          </Button>
        </Grid>
      </Grid>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4, maxWidth: 800 }}
      >
        Model the unique disruptions to major indexes caused by an extremely
        high market cap IPO. Analyze how index funds must follow strict
        inclusion rules as SPCX enters the public markets, and understand the
        direct impacts these index rebalancing events will have on your own
        portfolio.
      </Typography>

      {/* ──────── Dashboard Section ──────── */}
      <SectionHeader icon={<ShowChartIcon />}>
        Interactive SPCX Market Dashboard
      </SectionHeader>

      <Grid container spacing={3} mb={4}>
        {/* Left Column: Inputs & Summary */}
        <Grid size={{ xs: 12, md: 4.5, lg: 3.5 }}>
          <Paper
            sx={{
              p: { xs: 2.5, md: 4 },
              height: "100%",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}
            >
              Adjust Parameters
            </Typography>

            <Box mb={3}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="baseline"
                flexWrap="wrap"
                gap={1}
              >
                <Typography id="price-slider" gutterBottom>
                  SPCX Stock Price: <strong>${spcxPrice}</strong>
                </Typography>
                <Chip
                  label={`Implied Valuation: $${(impliedMarketCapB / 1000).toFixed(2)}T`}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              </Box>
              <Slider
                value={spcxPrice}
                onChange={(e, val) => setSpcxPrice(val)}
                min={50}
                max={500}
                step={5}
                valueLabelDisplay="auto"
                valueLabelFormat={(v) => `$${v}`}
                aria-labelledby="price-slider"
              />
            </Box>

            <Box mb={2}>
              <Typography id="timeline-slider" gutterBottom>
                Date: <strong>{selectedDateStr}</strong>{" "}
                <Chip
                  label={`Trading Day ${daysSinceIpo + 1}`}
                  size="small"
                  variant="outlined"
                  sx={{ ml: 0.5, verticalAlign: "middle" }}
                />
                <Chip
                  label={`Day ${Math.floor((new Date(`${selectedDateStr}T00:00:00`) - new Date("2026-06-12T00:00:00")) / (1000 * 60 * 60 * 24))}`}
                  size="small"
                  variant="outlined"
                  sx={{ ml: 0.5, verticalAlign: "middle" }}
                />
              </Typography>
              <Slider
                value={daysSinceIpo}
                onChange={(e, val) => setDaysSinceIpo(val)}
                min={0}
                max={chartData.dates.length - 1}
                step={1}
                aria-labelledby="timeline-slider"
              />
            </Box>

            <Box
              mb={2}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FormControlLabel
                control={
                  <Switch
                    checked={includePerformanceBonus}
                    onChange={(e) =>
                      setIncludePerformanceBonus(e.target.checked)
                    }
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2">
                    Simulate 10% Q2 Performance Unlock
                  </Typography>
                }
              />
              <MuiTooltip
                title={
                  <Box sx={{ p: 0.5 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 700, mb: 1, color: "#fff" }}
                    >
                      Q2 Performance Bonus Criteria
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "0.8rem",
                        lineHeight: 1.4,
                      }}
                    >
                      An additional 10% lockup tranche unlocks if the SPCX stock
                      price closes at or above <strong>$175.50</strong> (30%
                      above the $135 IPO price) for at least 5 of the 10
                      consecutive trading days ending on the Q2 earnings release
                      date.
                    </Typography>
                  </Box>
                }
                arrow
                placement="top"
                enterTouchDelay={0}
                slotProps={tooltipSlotProps}
              >
                <InfoOutlinedIcon
                  sx={{
                    fontSize: 16,
                    color: "text.secondary",
                    cursor: "pointer",
                    opacity: 0.8,
                    "&:hover": { opacity: 1 },
                  }}
                />
              </MuiTooltip>
            </Box>

            <Box
              mb={2}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FormControlLabel
                control={
                  <Switch
                    checked={sp500ProfitabilityMet}
                    onChange={(e) => setSp500ProfitabilityMet(e.target.checked)}
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2">
                    Meets S&P 500 Profitability Rule
                  </Typography>
                }
              />
              <MuiTooltip
                title={
                  <Box sx={{ p: 0.5 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 700, mb: 1, color: "#fff" }}
                    >
                      S&P 500 Profitability Rule
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "0.8rem",
                        lineHeight: 1.4,
                      }}
                    >
                      To be eligible for S&P 500 inclusion, a company must have
                      positive reported earnings (GAAP) in its most recent
                      quarter, and a positive sum of earnings over its most
                      recent four quarters.
                    </Typography>
                  </Box>
                }
                arrow
                placement="top"
                enterTouchDelay={0}
                slotProps={tooltipSlotProps}
              >
                <InfoOutlinedIcon
                  sx={{
                    fontSize: 16,
                    color: "text.secondary",
                    cursor: "pointer",
                    opacity: 0.8,
                    "&:hover": { opacity: 1 },
                  }}
                />
              </MuiTooltip>
            </Box>

            <Box
              mb={3}
              p={2}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                borderRadius: 2,
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2" color="text.secondary">
                  Computed Public Float
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {spcxFloat}%
                </Typography>
              </Box>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
              >
                * % of 7.57B index-eligible listed shares
              </Typography>
            </Box>

            {/* Total buying summary */}
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                background:
                  "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
                border: "1px solid rgba(99, 102, 241, 0.25)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 2,
                mt: { xs: 3, md: "auto" },
              }}
            >
              <Box>
                <Typography variant="body1">
                  <strong>Total Est. Passive Buying:</strong>
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Based on{" "}
                  {formatMoneyShort(
                    VTI_AUM_B + QQQ_AUM_B + VT_AUM_B + SP500_AUM_B,
                  )}{" "}
                  total benchmarked assets (ETFs, Mutual Funds, Institutional)
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  background:
                    "linear-gradient(135deg, #818cf8 0%, #10b981 50%, #f59e0b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {formatMoneyLong(
                  vtiForcedBuyingB +
                    qqqForcedBuyingB +
                    vtForcedBuyingB +
                    sp500ForcedBuyingB,
                )}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Right Column: ETF Weights & Cards */}
        <Grid
          size={{ xs: 12, md: 7.5, lg: 8.5 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            minWidth: 0,
            width: "100%",
          }}
        >
          <Paper
            sx={{
              p: 3,
              minHeight: { xs: 450, sm: 400, md: 350 },
              border: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ flexGrow: 1, position: "relative", width: "100%" }}>
              <Line
                data={etfData}
                options={etfOptions}
                plugins={[verticalLinePlugin]}
              />
            </Box>
          </Paper>

          {/* Individual ETF Weight Breakdown */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Individual ETF Weight Breakdown on {formatDate(selectedDateStr)}
            </Typography>
            <Grid container spacing={2}>
              {/* VTI Card */}
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    borderColor: isVtiIncluded
                      ? "rgba(129, 140, 248, 0.35)"
                      : "rgba(255,255,255,0.08)",
                    background: isVtiIncluded
                      ? "linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.02) 100%)"
                      : "transparent",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "none",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      sx={{ letterSpacing: 1.2 }}
                    >
                      Broad Market Est. Weight
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        color: isVtiIncluded
                          ? CHART_COLORS.indigo.border
                          : "text.disabled",
                        fontWeight: 700,
                        my: 0.5,
                      }}
                    >
                      {isVtiIncluded
                        ? `${vtiWeightPercent.toFixed(3)}%`
                        : "0.000%"}
                    </Typography>
                    <Divider sx={{ my: 1.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      Benchmarked Assets:{" "}
                      <strong>{formatMoneyShort(VTI_AUM_B)}</strong>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      Forced Buying:{" "}
                      <strong>
                        {isVtiIncluded
                          ? formatMoneyShort(vtiForcedBuyingB)
                          : "$0M"}
                      </strong>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      Example Funds: <strong>VTI, ITOT, VTSAX, FSKAX</strong>
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        mt: 0.5,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Inclusion: <strong>June 18, 2026</strong>
                      </Typography>
                      <MuiTooltip
                        title={
                          <Box sx={{ p: 0.5 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontWeight: 700, mb: 1, color: "#fff" }}
                            >
                              Broad Market Index
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "rgba(255,255,255,0.85)",
                                fontSize: "0.8rem",
                              }}
                            >
                              <strong>Inclusion Rule:</strong> Fast-track
                              inclusion after the close of the 5th trading day
                              (June 18, 2026).
                            </Typography>
                          </Box>
                        }
                        arrow
                        placement="top"
                        enterTouchDelay={0}
                        slotProps={tooltipSlotProps}
                      >
                        <InfoOutlinedIcon
                          sx={{
                            fontSize: 16,
                            color: "text.secondary",
                            cursor: "pointer",
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                          }}
                        />
                      </MuiTooltip>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        mt: 0.5,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Weighting Rules
                      </Typography>
                      <MuiTooltip
                        title={
                          <Box sx={{ p: 0.5 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontWeight: 700, mb: 1, color: "#fff" }}
                            >
                              Broad Market Index
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "rgba(255,255,255,0.85)",
                                fontSize: "0.8rem",
                              }}
                            >
                              <strong>Weighting Rule:</strong> Free-float market
                              cap weighted. The index weight scales dynamically
                              with the public float percentage.
                            </Typography>
                          </Box>
                        }
                        arrow
                        placement="top"
                        enterTouchDelay={0}
                        slotProps={tooltipSlotProps}
                      >
                        <InfoOutlinedIcon
                          sx={{
                            fontSize: 16,
                            color: "text.secondary",
                            cursor: "pointer",
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                          }}
                        />
                      </MuiTooltip>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* VT Card */}
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    borderColor: isVtIncluded
                      ? "rgba(16, 185, 129, 0.35)"
                      : "rgba(255,255,255,0.08)",
                    background: isVtIncluded
                      ? "linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.02) 100%)"
                      : "transparent",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "none",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      sx={{ letterSpacing: 1.2 }}
                    >
                      Global All Cap Est. Weight
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        color: isVtIncluded
                          ? CHART_COLORS.emerald.border
                          : "text.disabled",
                        fontWeight: 700,
                        my: 0.5,
                      }}
                    >
                      {isVtIncluded
                        ? `${vtWeightPercent.toFixed(3)}%`
                        : "0.000%"}
                    </Typography>
                    <Divider sx={{ my: 1.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      Benchmarked Assets:{" "}
                      <strong>{formatMoneyShort(VT_AUM_B)}</strong>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      Forced Buying:{" "}
                      <strong>
                        {isVtIncluded
                          ? formatMoneyShort(vtForcedBuyingB)
                          : "$0M"}
                      </strong>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      Example Funds: <strong>VT, VTWAX</strong>
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        mt: 0.5,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Inclusion: <strong>June 18, 2026</strong>
                      </Typography>
                      <MuiTooltip
                        title={
                          <Box sx={{ p: 0.5 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontWeight: 700, mb: 1, color: "#fff" }}
                            >
                              Global All Cap
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "rgba(255,255,255,0.85)",
                                fontSize: "0.8rem",
                              }}
                            >
                              <strong>Inclusion Rule:</strong> Fast-track
                              inclusion after the close of the 5th trading day
                              (June 18, 2026).
                            </Typography>
                          </Box>
                        }
                        arrow
                        placement="top"
                        enterTouchDelay={0}
                        slotProps={tooltipSlotProps}
                      >
                        <InfoOutlinedIcon
                          sx={{
                            fontSize: 16,
                            color: "text.secondary",
                            cursor: "pointer",
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                          }}
                        />
                      </MuiTooltip>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        mt: 0.5,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Weighting Rules
                      </Typography>
                      <MuiTooltip
                        title={
                          <Box sx={{ p: 0.5 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontWeight: 700, mb: 1, color: "#fff" }}
                            >
                              Global All Cap
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "rgba(255,255,255,0.85)",
                                fontSize: "0.8rem",
                              }}
                            >
                              <strong>Weighting Rule:</strong> Free-float market
                              cap weighted. Represented in the global index
                              based on free-float market cap relative to global
                              total.
                            </Typography>
                          </Box>
                        }
                        arrow
                        placement="top"
                        enterTouchDelay={0}
                        slotProps={tooltipSlotProps}
                      >
                        <InfoOutlinedIcon
                          sx={{
                            fontSize: 16,
                            color: "text.secondary",
                            cursor: "pointer",
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                          }}
                        />
                      </MuiTooltip>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* QQQ Card */}
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    borderColor: isQqqIncluded
                      ? "rgba(192, 132, 252, 0.35)"
                      : "rgba(255,255,255,0.08)",
                    background: isQqqIncluded
                      ? "linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0.02) 100%)"
                      : "transparent",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "none",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      sx={{ letterSpacing: 1.2 }}
                    >
                      Nasdaq-100 Est. Weight
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        color: isQqqIncluded
                          ? CHART_COLORS.purple.border
                          : "text.disabled",
                        fontWeight: 700,
                        my: 0.5,
                      }}
                    >
                      {isQqqIncluded
                        ? `${qqqWeightPercent.toFixed(3)}%`
                        : "0.000%"}
                    </Typography>
                    <Divider sx={{ my: 1.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      Benchmarked Assets:{" "}
                      <strong>{formatMoneyShort(QQQ_AUM_B)}</strong>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      Forced Buying:{" "}
                      <strong>
                        {isQqqIncluded
                          ? formatMoneyShort(qqqForcedBuyingB)
                          : "$0M"}
                      </strong>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      Example Funds: <strong>QQQ, QQQM</strong>
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        mt: 0.5,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Inclusion: <strong>July 6, 2026</strong>
                      </Typography>
                      <MuiTooltip
                        title={
                          <Box sx={{ p: 0.5 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontWeight: 700, mb: 1, color: "#fff" }}
                            >
                              Nasdaq-100
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "rgba(255,255,255,0.85)",
                                fontSize: "0.8rem",
                              }}
                            >
                              <strong>Inclusion Rule:</strong> Fast-track
                              inclusion on the 15th trading day (July 6, 2026).
                            </Typography>
                          </Box>
                        }
                        arrow
                        placement="top"
                        enterTouchDelay={0}
                        slotProps={tooltipSlotProps}
                      >
                        <InfoOutlinedIcon
                          sx={{
                            fontSize: 16,
                            color: "text.secondary",
                            cursor: "pointer",
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                          }}
                        />
                      </MuiTooltip>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        mt: 0.5,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Weighting Rules
                      </Typography>
                      <MuiTooltip
                        title={
                          <Box sx={{ p: 0.5 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontWeight: 700, mb: 1, color: "#fff" }}
                            >
                              Nasdaq-100
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "rgba(255,255,255,0.85)",
                                fontSize: "0.8rem",
                              }}
                            >
                              <strong>Weighting Rule:</strong> Subject to
                              Nasdaq-100 float-constrained rules. The index
                              weight is capped based on a maximum of 3x the
                              public float market cap if the float is under
                              33.33%, transitioning to full market cap weighting
                              thereafter.
                            </Typography>
                          </Box>
                        }
                        arrow
                        placement="top"
                        enterTouchDelay={0}
                        slotProps={tooltipSlotProps}
                      >
                        <InfoOutlinedIcon
                          sx={{
                            fontSize: 16,
                            color: "text.secondary",
                            cursor: "pointer",
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                          }}
                        />
                      </MuiTooltip>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* S&P 500 Card */}
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    borderColor: isSp500Included
                      ? "rgba(245, 158, 11, 0.35)"
                      : "rgba(255,255,255,0.08)",
                    background: isSp500Included
                      ? "linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(245, 158, 11, 0.02) 100%)"
                      : "transparent",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "none",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      sx={{ letterSpacing: 1.2 }}
                    >
                      S&P 500 Est. Weight
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        color: isSp500Included
                          ? CHART_COLORS.amber.border
                          : "text.disabled",
                        fontWeight: 700,
                        my: 0.5,
                      }}
                    >
                      {isSp500Included
                        ? `${sp500WeightPercent.toFixed(3)}%`
                        : "0.000%"}
                    </Typography>
                    <Divider sx={{ my: 1.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      Benchmarked Assets:{" "}
                      <strong>{formatMoneyShort(SP500_AUM_B)}</strong>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      Forced Buying:{" "}
                      <strong>
                        {isSp500Included
                          ? formatMoneyShort(sp500ForcedBuyingB)
                          : "$0M"}
                      </strong>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      Example Funds: <strong>SPY, VOO, VFIAX, FXAIX</strong>
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        mt: 0.5,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Inclusion: <strong>June 18, 2027</strong>
                      </Typography>
                      <MuiTooltip
                        title={
                          <Box sx={{ p: 0.5 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontWeight: 700, mb: 1, color: "#fff" }}
                            >
                              S&P 500
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "rgba(255,255,255,0.85)",
                                fontSize: "0.8rem",
                              }}
                            >
                              <strong>Inclusion Rule:</strong> Standard
                              seasoning requirement of at least 1 year (365
                              days) of active trading before eligibility, added
                              on the nearest quarterly rebalance date (June 18,
                              2027, calendar day 371). Must also meet strict
                              profitability requirements (positive recent
                              quarter and positive sum of last 4 quarters).
                            </Typography>
                          </Box>
                        }
                        arrow
                        placement="top"
                        enterTouchDelay={0}
                        slotProps={tooltipSlotProps}
                      >
                        <InfoOutlinedIcon
                          sx={{
                            fontSize: 16,
                            color: "text.secondary",
                            cursor: "pointer",
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                          }}
                        />
                      </MuiTooltip>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        mt: 0.5,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Weighting Rules
                      </Typography>
                      <MuiTooltip
                        title={
                          <Box sx={{ p: 0.5 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontWeight: 700, mb: 1, color: "#fff" }}
                            >
                              S&P 500
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "rgba(255,255,255,0.85)",
                                fontSize: "0.8rem",
                              }}
                            >
                              <strong>Weighting Rule:</strong> Free-float market
                              cap weighted. Weighting dynamically adjusts as
                              lockup shares expire and public float increases.
                            </Typography>
                          </Box>
                        }
                        arrow
                        placement="top"
                        enterTouchDelay={0}
                        slotProps={tooltipSlotProps}
                      >
                        <InfoOutlinedIcon
                          sx={{
                            fontSize: 16,
                            color: "text.secondary",
                            cursor: "pointer",
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                          }}
                        />
                      </MuiTooltip>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* ──────── Float Dynamics Section ──────── */}
      <SectionHeader icon={<ShowChartIcon />}>
        SPCX Float Dynamics Over Time
      </SectionHeader>

      <Paper
        sx={{
          p: 3,
          minHeight: { xs: 450, sm: 400, md: 350 },
          border: "1px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          flexDirection: "column",
          mb: 4,
        }}
      >
        <Box sx={{ flexGrow: 1, position: "relative", width: "100%" }}>
          <Line data={data} options={options} plugins={[verticalLinePlugin]} />
        </Box>
      </Paper>

      {/* ──────── Timeline ──────── */}
      <SectionHeader icon={<TimelineIcon />}>
        Key Milestone Timeline
      </SectionHeader>

      <Box sx={{ position: "relative", pl: { xs: 3, md: 5 }, pb: 2 }}>
        {/* Vertical connecting line */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: 14, md: 22 },
            top: 8,
            bottom: 8,
            width: 2,
            background:
              "linear-gradient(180deg, rgba(99,102,241,0.5) 0%, rgba(168,85,247,0.3) 100%)",
            borderRadius: 1,
          }}
        />

        {events.map((event, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              mb: 2,
              transition: "transform 0.2s ease",
              "&:hover": { transform: "translateX(4px)" },
            }}
          >
            {/* Dot on the timeline */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: -15, md: -23 },
                top: 18,
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: eventColor(event.type),
                boxShadow: `0 0 8px ${eventColor(event.type)}`,
                zIndex: 1,
              }}
            />

            <Paper
              sx={{
                p: 2,
                bgcolor: eventBg(event.type),
                border: `1px solid ${eventColor(event.type)}22`,
                transition: "border-color 0.2s ease",
                "&:hover": {
                  borderColor: `${eventColor(event.type)}55`,
                },
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                gap={1}
                mb={0.5}
                flexWrap="wrap"
              >
                <EventIcon type={event.type} />
                <Chip
                  label={event.date}
                  size="small"
                  sx={{
                    fontWeight: 600,
                    bgcolor: `${eventColor(event.type)}18`,
                    color: eventColor(event.type),
                    border: `1px solid ${eventColor(event.type)}33`,
                  }}
                />
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {event.title}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {event.description}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>

      <Box mt={4}>
        <Alert severity="info" sx={{ borderRadius: 2 }}>
          <Typography variant="body2" component="div">
            <strong>Key Assumptions:</strong>
            <ol
              style={{ marginTop: "8px", marginBottom: 0, paddingLeft: "20px" }}
            >
              <li style={{ marginBottom: "4px" }}>
                <strong>Earnings Dates:</strong> The quarterly earnings
                announcement dates (e.g., estimating Q2 earnings on September 2,
                2026, for a September 4 release) are assumptions for
                visualization purposes. Actual earnings dates are determined by
                the company and may vary, which would shift the exact dates of
                earnings-based lockup releases.
              </li>
              <li>
                <strong>Market Capitalization:</strong> This simulation assumes
                that the aggregate market capitalization of the existing index
                constituents remains constant while SPCX's market capitalization
                and float vary.
              </li>
            </ol>
          </Typography>
        </Alert>
      </Box>
    </Box>
  );
};
