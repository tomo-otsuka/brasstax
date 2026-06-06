import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
  InputAdornment,
  Tooltip as MuiTooltip,
  Tabs,
  Tab,
  Chip,
  Card,
  CardContent,
} from "@mui/material";
import {
  Share,
  ExpandMore as ExpandMoreIcon,
  Store,
  Home,
  HelpOutline,
  Business,
  Calculate,
  Timeline,
  PieChart as PieChartIcon,
  MonetizationOn,
  Public,
  BarChart,
  ArrowDownward,
  ArrowUpward,
} from "@mui/icons-material";
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarController,
  BarElement,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from "chart.js";
import { InputSection } from "./common/InputSection";
import { ResultCard } from "./common/ResultCard";
import { TaxYearBadge } from "./common/TaxYearBadge";

Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarController,
  BarElement,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
);

const CA_PROPERTY_TAX_RATE = 0.01;
const ANNUAL_ASSESSMENT_CAP = 0.02;
const LOOP_HOLE_REVENUE_IMPACT = 269000000;
const TOTAL_CA_PROPERTY_TAX_REVENUE = 100000000000;
const MARKET_TO_ASSESSED_RATIO = 1.8;
const REVENUE_NEUTRAL_RATE = CA_PROPERTY_TAX_RATE / MARKET_TO_ASSESSED_RATIO;

const PERSONAS = {
  recentHomePurchaser: {
    name: "Recent Home Purchaser",
    icon: <Home />,
    purchasePrice: 1200000,
    purchaseYear: new Date().getFullYear() - 5,
    currentValue: 1500000,
    description: "Bought 5 years ago, carrying the tax burden",
  },
  youngFirstTimeBuyer: {
    name: "Young First-Time Buyer",
    icon: <Home />,
    purchasePrice: 800000,
    purchaseYear: new Date().getFullYear(),
    currentValue: 800000,
    description: "Full market value, no Prop 13 benefit",
  },
  longTimeHomeowner: {
    name: "Long-Time Homeowner",
    icon: <Home />,
    purchasePrice: 150000,
    purchaseYear: new Date().getFullYear() - 30,
    currentValue: 800000,
    description: "Capped growth, decades of Prop 13 protection",
  },
  recentCommercialBuyer: {
    name: "Recent Commercial Buyer",
    icon: <Business />,
    purchasePrice: 2000000,
    purchaseYear: new Date().getFullYear() - 2,
    currentValue: 2000000,
    description: "Full market value, no legacy benefit",
  },
  corporateEntityOwner: {
    name: "Corporate Entity Owner",
    icon: <Store />,
    purchasePrice: 2000000,
    purchaseYear: new Date().getFullYear() - 45,
    currentValue: 10000000,
    description: "Loophole: entity ownership avoids reassessment",
  },
  custom: {
    name: "Custom",
    icon: <Calculate />,
    purchasePrice: 500000,
    purchaseYear: new Date().getFullYear() - 10,
    currentValue: 500000,
    description: "All fields editable",
  },
};

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

const formatCompactCurrency = (value) => {
  if (value >= 1e12) return `$${(value / 1e12).toFixed(1)}T`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(1)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`;
  if (value >= 1e3) return `$${(value / 1e3).toFixed(1)}K`;
  return formatCurrency(value);
};

function useProp13Results(
  purchasePrice,
  purchaseYear,
  currentValue,
  loopholeClosed,
) {
  const yearsSincePurchase = Math.max(
    0,
    new Date().getFullYear() - purchaseYear,
  );

  const assessedValue = useMemo(() => {
    let av = purchasePrice;
    for (let i = 0; i < yearsSincePurchase; i++) {
      av = av * (1 + ANNUAL_ASSESSMENT_CAP);
    }
    return av;
  }, [purchasePrice, yearsSincePurchase]);

  const annualTax = useMemo(
    () => assessedValue * CA_PROPERTY_TAX_RATE,
    [assessedValue],
  );

  const annualFairTax = useMemo(
    () => currentValue * REVENUE_NEUTRAL_RATE,
    [currentValue],
  );

  const annualSubsidy = annualFairTax - annualTax;

  const totalPaid = useMemo(() => {
    let total = 0;
    let av = purchasePrice;
    for (let i = 0; i < yearsSincePurchase; i++) {
      total += av * CA_PROPERTY_TAX_RATE;
      av = av * (1 + ANNUAL_ASSESSMENT_CAP);
    }
    return total;
  }, [purchasePrice, yearsSincePurchase]);

  const totalFairTaxPaid = useMemo(() => {
    let total = 0;
    let mv = purchasePrice;
    const impliedGrowthRate =
      yearsSincePurchase > 0
        ? Math.pow(currentValue / purchasePrice, 1 / yearsSincePurchase) - 1
        : 0;
    for (let i = 0; i < yearsSincePurchase; i++) {
      total += mv * REVENUE_NEUTRAL_RATE;
      mv = mv * (1 + impliedGrowthRate);
    }
    return total;
  }, [purchasePrice, currentValue, yearsSincePurchase]);

  const cumulativeSubsidy = totalFairTaxPaid - totalPaid;

  const loopholeAnnualTax = useMemo(() => {
    if (!loopholeClosed) {
      return { annualTax, assessedValue, totalPaid };
    }
    const reassessedValue = currentValue;
    const reassessedAnnualTax = reassessedValue * CA_PROPERTY_TAX_RATE;
    let reassessedTotal = 0;
    let av = currentValue;
    for (let i = 0; i < yearsSincePurchase; i++) {
      reassessedTotal += av * CA_PROPERTY_TAX_RATE;
      av = av * (1 + ANNUAL_ASSESSMENT_CAP);
    }
    return {
      annualTax: reassessedAnnualTax,
      assessedValue: reassessedValue,
      totalPaid: reassessedTotal,
    };
  }, [
    loopholeClosed,
    currentValue,
    annualTax,
    assessedValue,
    totalPaid,
    yearsSincePurchase,
  ]);

  const timeSeriesData = useMemo(() => {
    const labels = [];
    const actualCumulative = [];
    const fairTaxCumulative = [];
    const assessedValues = [];
    const marketValues = [];
    let av = purchasePrice;
    let mv = purchasePrice;
    let cumActual = 0;
    let cumFair = 0;
    const impliedGrowthRate =
      yearsSincePurchase > 0
        ? Math.pow(currentValue / purchasePrice, 1 / yearsSincePurchase) - 1
        : 0;

    for (let i = 0; i <= yearsSincePurchase; i++) {
      labels.push(purchaseYear + i);
      actualCumulative.push(
        cumActual + (i > 0 ? av * CA_PROPERTY_TAX_RATE : 0),
      );
      fairTaxCumulative.push(cumFair + (i > 0 ? mv * REVENUE_NEUTRAL_RATE : 0));
      assessedValues.push(av);
      marketValues.push(mv);
      cumActual += av * CA_PROPERTY_TAX_RATE;
      cumFair += mv * REVENUE_NEUTRAL_RATE;
      av = av * (1 + ANNUAL_ASSESSMENT_CAP);
      mv = mv * (1 + impliedGrowthRate);
    }
    return {
      labels,
      actualCumulative,
      fairTaxCumulative,
      assessedValues,
      marketValues,
    };
  }, [purchasePrice, purchaseYear, currentValue, yearsSincePurchase]);

  return {
    yearsSincePurchase,
    assessedValue,
    annualTax,
    annualFairTax,
    annualSubsidy,
    totalPaid,
    totalFairTaxPaid,
    cumulativeSubsidy,
    loopholeAnnualTax,
    timeSeriesData,
  };
}

const LoopholeTab = ({ loopholeClosed, handleLoopholeToggle }) => {
  const p1 = PERSONAS.recentCommercialBuyer;
  const p2 = PERSONAS.corporateEntityOwner;

  const r1 = useProp13Results(
    p1.purchasePrice,
    p1.purchaseYear,
    p1.currentValue,
    false,
  );
  const r2 = useProp13Results(
    p2.purchasePrice,
    p2.purchaseYear,
    p2.currentValue,
    loopholeClosed,
  );

  const r1Tax = r1.annualTax;
  const r2Tax = r2.loopholeAnnualTax.annualTax;

  const ratio = r2Tax > 0 ? r1Tax / r2Tax : 0;

  return (
    <Box sx={{ animation: "fadeInUp 0.8s ease-out" }}>
      <InputSection
        title="The Commercial Property Transfer Loophole"
        icon={<Store />}
      >
        <Typography variant="body2" paragraph sx={{ lineHeight: 1.8 }}>
          A second layer of asymmetry exists for commercial real estate. Under
          current law, if a corporation or partnership owns commercial property,
          the property can stay deeded to the entity even when ownership changes
          hands -- effectively transferring control without triggering
          reassessment.
        </Typography>
        <Typography variant="body2" paragraph sx={{ lineHeight: 1.8 }}>
          <strong>The key rule:</strong> No single partner may exceed 50%
          control of the entity. As long as ownership is split among partners
          each holding ≤50%, no "change in ownership" is triggered and the low
          assessed value is preserved.
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
          This means a corporate entity can hold a $10M property purchased in
          1980 for $2M assessed value indefinitely -- even as the business
          changes hands repeatedly.
        </Typography>
      </InputSection>

      <InputSection title="Interactive Demonstration" icon={<Calculate />}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ResultCard
              title={p1.name}
              value={r1Tax}
              icon={p1.icon}
              label={p1.description}
              subtitle={`Assessed Value: ${formatCurrency(Math.round(r1.assessedValue))}`}
              resultColor="#ef4444"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ResultCard
              title={p2.name}
              value={r2Tax}
              icon={p2.icon}
              label={p2.description}
              subtitle={`Assessed Value: ${formatCurrency(Math.round(r2.loopholeAnnualTax.assessedValue))}`}
              resultColor="#10b981"
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 2,
            backgroundColor: "rgba(139, 92, 246, 0.05)",
            borderRadius: 2,
            border: "1px solid rgba(139, 92, 246, 0.2)",
          }}
        >
          <Typography variant="body2" sx={{ flex: 1, fontWeight: 600 }}>
            Toggle Loophole Status for Corporate Entity
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" color="text.secondary">
              {loopholeClosed ? "Closed" : "Open"}
            </Typography>
            <Switch
              checked={!loopholeClosed}
              onChange={handleLoopholeToggle}
              sx={{
                "& .MuiSwitch-thumb": { backgroundColor: "#8b5cf6" },
                "& .MuiSwitch-track": {
                  backgroundColor: "rgba(139, 92, 246, 0.3)",
                },
              }}
            />
            <MuiTooltip
              title="Closing the loophole triggers full reassessment"
              placement="top"
            >
              <HelpOutline sx={{ color: "text.secondary" }} />
            </MuiTooltip>
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Impact:</strong> The Recent Commercial Buyer pays{" "}
            {ratio.toFixed(1)}x more in annual property taxes than the Corporate
            Entity Owner for a property of similar market value, solely due to
            the ownership structure loophole.
          </Typography>
        </Box>
      </InputSection>

      <InputSection title="Statewide Revenue Impact" icon={<PieChartIcon />}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ResultCard
              title="Loophole Revenue Impact"
              value={LOOP_HOLE_REVENUE_IMPACT}
              icon={<MonetizationOn />}
              label="Annual revenue if loophole is closed"
              resultColor="#8b5cf6"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 2 }}>
              <Typography variant="body2" paragraph sx={{ lineHeight: 1.8 }}>
                The CA Board of Equalization estimated closing this loophole
                would raise up to <strong>$269 million annually</strong>.
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                Multiple legislative attempts (2014, 2015, 2018, 2020) to close
                it have failed.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </InputSection>
    </Box>
  );
};

export const Prop13Analysis = ({
  searchParams,
  setSearchParams,
  showSnackbar,
}) => {
  const mode = searchParams.get("mode") || "my-property";
  const persona = searchParams.get("persona") || "recentHomePurchaser";
  const loopholeClosed = searchParams.get("loopholeClosed") === "true";

  const [purchasePrice, setPurchasePrice] = useState(
    searchParams.get("purchasePrice") || PERSONAS[persona].purchasePrice,
  );
  const [purchaseYear, setPurchaseYear] = useState(
    searchParams.get("purchaseYear") || PERSONAS[persona].purchaseYear,
  );
  const [currentValue, setCurrentValue] = useState(
    searchParams.get("currentValue") || PERSONAS[persona].currentValue,
  );

  const [selectedPersonas, setSelectedPersonas] = useState([
    searchParams.get("persona1") || "recentHomePurchaser",
    searchParams.get("persona2") || "longTimeHomeowner",
  ]);

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const updateSearchParams = (key, value) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (value === undefined || value === null) {
      newSearchParams.delete(key);
    } else {
      newSearchParams.set(key, String(value));
    }
    setSearchParams(newSearchParams);
  };

  const handleModeChange = (_, newMode) => {
    updateSearchParams("mode", newMode);
  };

  const handlePersonaChange = (p) => {
    updateSearchParams("persona", p);
    const personaData = PERSONAS[p];
    setPurchasePrice(personaData.purchasePrice);
    setPurchaseYear(personaData.purchaseYear);
    setCurrentValue(personaData.currentValue);
  };

  const handleLoopholeToggle = (e) => {
    updateSearchParams("loopholeClosed", e.target.checked);
  };

  const handleComparePersonaChange = (index, value) => {
    const newPersonas = [...selectedPersonas];
    newPersonas[index] = value;
    setSelectedPersonas(newPersonas);
    updateSearchParams(`persona${index + 1}`, value);
  };

  const results = useProp13Results(
    Number(purchasePrice),
    Number(purchaseYear),
    Number(currentValue),
    loopholeClosed,
  );

  const compareResults = useMemo(() => {
    return selectedPersonas.map((p) => {
      const personaData = PERSONAS[p];
      const pp = personaData.purchasePrice;
      const py = personaData.purchaseYear;
      const cv = personaData.currentValue;
      const lc = p === "corporateEntityOwner" ? loopholeClosed : false;
      const ysp = Math.max(0, new Date().getFullYear() - py);

      let av = pp;
      for (let i = 0; i < ysp; i++) {
        av = av * (1 + ANNUAL_ASSESSMENT_CAP);
      }
      const annualTax = av * CA_PROPERTY_TAX_RATE;

      const annualFairTax = cv * REVENUE_NEUTRAL_RATE;
      const annualSubsidy = annualFairTax - annualTax;

      let total = 0;
      let tav = pp;
      for (let i = 0; i < ysp; i++) {
        total += tav * CA_PROPERTY_TAX_RATE;
        tav = tav * (1 + ANNUAL_ASSESSMENT_CAP);
      }
      const totalPaid = total;

      let total2 = 0;
      let tmv = pp;
      const impliedGrowthRate = ysp > 0 ? Math.pow(cv / pp, 1 / ysp) - 1 : 0;
      for (let i = 0; i < ysp; i++) {
        total2 += tmv * REVENUE_NEUTRAL_RATE;
        tmv = tmv * (1 + impliedGrowthRate);
      }
      const totalFairTaxPaid = total2;

      const cumulativeSubsidy = totalFairTaxPaid - totalPaid;

      let loopholeAV = av;
      let loopholeTotal = 0;
      if (lc) {
        loopholeAV = cv;
        let cav = cv;
        for (let i = 0; i < ysp; i++) {
          loopholeTotal += cav * CA_PROPERTY_TAX_RATE;
          cav = cav * (1 + ANNUAL_ASSESSMENT_CAP);
        }
      }

      const labels = [];
      const actualCumulative = [];
      const fairTaxCumulative = [];
      let tav2 = pp;
      let tmv2 = pp;
      let cumActual = 0;
      let cumFair = 0;
      for (let i = 0; i <= ysp; i++) {
        labels.push(py + i);
        actualCumulative.push(
          cumActual + (i > 0 ? tav2 * CA_PROPERTY_TAX_RATE : 0),
        );
        fairTaxCumulative.push(
          cumFair + (i > 0 ? tmv2 * REVENUE_NEUTRAL_RATE : 0),
        );
        cumActual += tav2 * CA_PROPERTY_TAX_RATE;
        cumFair += tmv2 * REVENUE_NEUTRAL_RATE;
        tav2 = tav2 * (1 + ANNUAL_ASSESSMENT_CAP);
        tmv2 = tmv2 * (1 + impliedGrowthRate);
      }

      return {
        yearsSincePurchase: ysp,
        assessedValue: loopholeTotal > 0 ? loopholeAV : av,
        annualTax: loopholeTotal > 0 ? cv * CA_PROPERTY_TAX_RATE : annualTax,
        annualFairTax,
        annualSubsidy,
        totalPaid: loopholeTotal > 0 ? loopholeTotal : totalPaid,
        totalFairTaxPaid,
        cumulativeSubsidy,
        timeSeriesData: { labels, actualCumulative, fairTaxCumulative },
      };
    });
  }, [selectedPersonas, loopholeClosed]);

  // Chart creation and update
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current?.getContext("2d");
    if (!ctx) return;

    if (mode === "my-property") {
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: results.timeSeriesData.labels,
          datasets: [
            {
              label: "Actual Cumulative Taxes (Prop 13)",
              data: results.timeSeriesData.actualCumulative,
              borderColor: "#6366f1",
              backgroundColor: "rgba(99, 102, 241, 0.1)",
              fill: true,
              tension: 0.3,
              pointRadius: 3,
              pointHoverRadius: 6,
            },
            {
              label: "Fair Tax (Revenue Neutral Rate)",
              data: results.timeSeriesData.fairTaxCumulative,
              borderColor: "#ef4444",
              backgroundColor: "rgba(239, 68, 68, 0.05)",
              fill: true,
              tension: 0.3,
              pointRadius: 3,
              pointHoverRadius: 6,
              borderDash: [5, 5],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 2,
          plugins: {
            legend: { display: true, position: "top" },
            tooltip: {
              callbacks: {
                label: (ctx) =>
                  `${ctx.dataset.label}: ${formatCurrency(ctx.parsed.y)}`,
              },
            },
          },
          scales: {
            y: {
              ticks: { callback: (v) => formatCompactCurrency(v) },
              grid: { color: "rgba(255,255,255,0.05)" },
            },
            x: {
              grid: { color: "rgba(255,255,255,0.05)" },
            },
          },
        },
      });
    } else if (mode === "compare") {
      const labels = selectedPersonas.map((p) => PERSONAS[p].name);
      const actualTaxes = compareResults.map((r) => r.annualTax);
      const fairTaxes = compareResults.map((r) => r.annualFairTax);

      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Actual Annual Tax",
              data: actualTaxes,
              backgroundColor: "rgba(99, 102, 241, 0.7)",
              borderColor: "#6366f1",
              borderWidth: 1,
            },
            {
              label: `Fair Tax (${(REVENUE_NEUTRAL_RATE * 100).toFixed(2)}% Revenue Neutral Rate)`,
              data: fairTaxes,
              backgroundColor: "rgba(239, 68, 68, 0.5)",
              borderColor: "#ef4444",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 2,
          plugins: {
            legend: { display: true, position: "top" },
            tooltip: {
              callbacks: {
                label: (ctx) =>
                  `${ctx.dataset.label}: ${formatCurrency(ctx.parsed.y)}`,
              },
            },
          },
          scales: {
            y: {
              ticks: { callback: (v) => formatCompactCurrency(v) },
              grid: { color: "rgba(255,255,255,0.05)" },
            },
            x: {
              grid: { color: "rgba(255,255,255,0.05)" },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [mode, results, selectedPersonas, compareResults, loopholeClosed]);

  const currentPersona = PERSONAS[persona] || PERSONAS.custom;

  return (
    <Box
      sx={{
        position: "relative",
        my: 2,
        animation: "fadeInUp 0.8s ease-out",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          background: "linear-gradient(135deg, #ffffff 0%, #8b5cf6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          fontSize: { xs: "1.8rem", md: "2.5rem" },
        }}
      >
        Prop 13 Analysis
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        paragraph
        sx={{ maxWidth: "700px", mb: 4, lineHeight: 1.6 }}
      >
        See how California's same-rule system creates a two-tier tax outcome
        based on timing. Without Prop 13, everyone would pay a lower, fair
        revenue-neutral rate. Instead, new buyers subsidize long-time owners.
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 3,
          flexWrap: "wrap",
        }}
      >
        <TaxYearBadge />
        <Chip
          label="California Only"
          size="small"
          sx={{
            backgroundColor: "rgba(139, 92, 246, 0.15)",
            color: "#8b5cf6",
            fontWeight: 600,
          }}
        />
        <Chip
          label="Revenue Neutral"
          size="small"
          sx={{
            backgroundColor: "rgba(139, 92, 246, 0.15)",
            color: "#8b5cf6",
            fontWeight: 600,
          }}
        />
      </Box>

      {/* Mode Selector */}
      <Box sx={{ mb: 4, borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={mode}
          onChange={handleModeChange}
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 600,
              minHeight: 48,
            },
          }}
        >
          <Tab
            value="my-property"
            label="My Property"
            icon={<Home />}
            iconPosition="start"
          />
          <Tab
            value="compare"
            label="Compare Scenarios"
            icon={<Timeline />}
            iconPosition="start"
          />
          <Tab
            value="loophole"
            label="The Commercial Loophole"
            icon={<Store />}
            iconPosition="start"
          />
        </Tabs>
      </Box>

      {mode === "my-property" && (
        <Box>
          {/* Persona Selector */}
          <InputSection title="Choose a Scenario" icon={<Business />}>
            <RadioGroup
              value={persona}
              onChange={(e) => handlePersonaChange(e.target.value)}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              {Object.entries(PERSONAS).map(([key, p]) => (
                <FormControlLabel
                  key={key}
                  value={key}
                  control={<Radio sx={{ color: "#8b5cf6" }} />}
                  label={
                    <Box>
                      <Typography variant="body2" fontWeight={600}>
                        {p.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {p.description}
                      </Typography>
                    </Box>
                  }
                />
              ))}
            </RadioGroup>
          </InputSection>

          {/* Input Fields */}
          <InputSection title="Your Numbers" icon={<Calculate />}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Purchase Price"
                  type="text"
                  value={
                    purchasePrice ? Number(purchasePrice).toLocaleString() : ""
                  }
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^\d]/g, "");
                    const numVal = val ? Number(val) : "";
                    setPurchasePrice(numVal);
                    updateSearchParams("purchasePrice", numVal);
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Purchase Year"
                  type="number"
                  value={purchaseYear}
                  onChange={(e) => {
                    setPurchaseYear(Number(e.target.value));
                    updateSearchParams("purchaseYear", e.target.value);
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">yr</InputAdornment>
                    ),
                  }}
                  inputProps={{ min: 1978, max: new Date().getFullYear() }}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Current Estimated Value"
                  type="text"
                  value={
                    currentValue ? Number(currentValue).toLocaleString() : ""
                  }
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^\d]/g, "");
                    const numVal = val ? Number(val) : "";
                    setCurrentValue(numVal);
                    updateSearchParams("currentValue", numVal);
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </InputSection>

          {/* Results */}
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <ResultCard
                title="Current Annual Tax"
                value={results.annualTax}
                icon={<Home />}
                label={`Based on assessed value of ${formatCurrency(Math.round(results.assessedValue))} at 1%`}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <ResultCard
                title="Fair Tax (Revenue Neutral Rate)"
                value={results.annualFairTax}
                icon={<Public />}
                label={`What you'd pay at ${(REVENUE_NEUTRAL_RATE * 100).toFixed(2)}% fair market rate`}
                resultColor="#ef4444"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <ResultCard
                title={
                  results.annualSubsidy >= 0
                    ? "Prop 13 Benefit (Subsidy)"
                    : "Prop 13 Penalty (You Subsidize Others)"
                }
                value={Math.abs(results.annualSubsidy)}
                icon={
                  results.annualSubsidy >= 0 ? (
                    <ArrowDownward />
                  ) : (
                    <ArrowUpward />
                  )
                }
                label={
                  results.annualSubsidy >= 0
                    ? `You are subsidized by ${formatCompactCurrency(Math.abs(results.annualSubsidy))} per year compared to a fair revenue-neutral system.`
                    : `You are overpaying by ${formatCompactCurrency(Math.abs(results.annualSubsidy))} per year to subsidize long-time property owners.`
                }
                resultColor={results.annualSubsidy >= 0 ? "#10b981" : "#ef4444"}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <ResultCard
                title="Total Paid to Date"
                value={results.totalPaid}
                icon={<MonetizationOn />}
                label={`Over ${results.yearsSincePurchase} years`}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <ResultCard
                title="Cumulative Fair Tax"
                value={results.totalFairTaxPaid}
                icon={<Public />}
                label="What you would have paid in a fair system"
                resultColor="#ef4444"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <ResultCard
                title={
                  results.cumulativeSubsidy >= 0
                    ? "Prop 13 Savings to Date"
                    : "Penalty Paid to Date"
                }
                value={Math.abs(results.cumulativeSubsidy)}
                icon={
                  results.cumulativeSubsidy >= 0 ? (
                    <ArrowDownward />
                  ) : (
                    <ArrowUpward />
                  )
                }
                label={
                  results.cumulativeSubsidy >= 0
                    ? `You have been subsidized by ${formatCompactCurrency(Math.abs(results.cumulativeSubsidy))} total from long-time property owners`
                    : `You have overpaid ${formatCompactCurrency(Math.abs(results.cumulativeSubsidy))} total, subsidizing long-time property owners`
                }
                resultColor={
                  results.cumulativeSubsidy >= 0 ? "#10b981" : "#ef4444"
                }
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Timeline sx={{ color: "primary.main" }} />
                    <Typography variant="h6">Divergence Over Time</Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Cumulative property taxes paid vs. what you would've paid
                    under market-based taxation
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <canvas ref={chartRef} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Share Button */}
          <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
              startIcon={<Share />}
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                showSnackbar();
              }}
            >
              Share These Numbers
            </Button>
          </Box>
        </Box>
      )}

      {mode === "compare" && (
        <Box>
          {/* Persona Selection */}
          <InputSection
            title="Select Two Scenarios to Compare"
            icon={<Timeline />}
          >
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body2" fontWeight={600} gutterBottom>
                  Scenario A
                </Typography>
                <RadioGroup
                  value={selectedPersonas[0]}
                  onChange={(e) =>
                    handleComparePersonaChange(0, e.target.value)
                  }
                  sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                >
                  {Object.entries(PERSONAS).map(([key, p]) => (
                    <FormControlLabel
                      key={key}
                      value={key}
                      control={<Radio sx={{ color: "#8b5cf6" }} />}
                      label={
                        <Box>
                          <Typography variant="body2" fontWeight={600}>
                            {p.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {p.description}
                          </Typography>
                        </Box>
                      }
                    />
                  ))}
                </RadioGroup>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body2" fontWeight={600} gutterBottom>
                  Scenario B
                </Typography>
                <RadioGroup
                  value={selectedPersonas[1]}
                  onChange={(e) =>
                    handleComparePersonaChange(1, e.target.value)
                  }
                  sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                >
                  {Object.entries(PERSONAS).map(([key, p]) => (
                    <FormControlLabel
                      key={key}
                      value={key}
                      control={<Radio sx={{ color: "#8b5cf6" }} />}
                      label={
                        <Box>
                          <Typography variant="body2" fontWeight={600}>
                            {p.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {p.description}
                          </Typography>
                        </Box>
                      }
                    />
                  ))}
                </RadioGroup>
              </Grid>
            </Grid>
          </InputSection>

          {/* Comparison Results */}
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {compareResults.map((r, i) => {
              const p = PERSONAS[selectedPersonas[i]];
              const otherR = compareResults[i === 0 ? 1 : 0];
              const otherP = PERSONAS[selectedPersonas[i === 0 ? 1 : 0]];
              const ratio =
                r.annualTax > 0 ? otherR.annualTax / r.annualTax : Infinity;
              const isLower = r.annualTax < otherR.annualTax;

              return (
                <Grid key={i} size={{ xs: 12, md: 6 }}>
                  <ResultCard
                    title={p.name}
                    value={r.annualTax}
                    icon={p.icon}
                    label={`vs. ${otherP.name}: ${ratio === Infinity ? "∞" : ratio.toFixed(1)}x difference`}
                    resultColor={isLower ? "#10b981" : "#ef4444"}
                    subtitle={
                      isLower
                        ? `Pays ${formatCompactCurrency(otherR.annualTax - r.annualTax)} less per year`
                        : `Pays ${formatCompactCurrency(r.annualTax - otherR.annualTax)} more per year`
                    }
                  />
                </Grid>
              );
            })}
            <Grid size={{ xs: 12 }}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <BarChart sx={{ color: "primary.main" }} />
                    <Typography variant="h6">Tax Burden Comparison</Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Actual annual tax vs. market-based tax for each scenario
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <canvas ref={chartRef} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Share Button */}
          <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
              startIcon={<Share />}
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                showSnackbar();
              }}
            >
              Share This Comparison
            </Button>
          </Box>
        </Box>
      )}

      {mode === "loophole" && (
        <LoopholeTab
          loopholeClosed={loopholeClosed}
          handleLoopholeToggle={handleLoopholeToggle}
        />
      )}

      {/* Revenue Breakdown */}
      <InputSection
        title="California Revenue Breakdown"
        icon={<PieChartIcon />}
        sx={{ mt: 4 }}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <ResultCard
              title="Total State Property Tax"
              value={TOTAL_CA_PROPERTY_TAX_REVENUE}
              icon={<MonetizationOn />}
              label="2024-2025 FY total revenue"
              resultColor="#10b981"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <ResultCard
              title="Property Tax Rate"
              value={CA_PROPERTY_TAX_RATE * 100}
              valueSuffix="%"
              icon={<Home />}
              label="Capped by Prop 13 (1% of assessed value)"
              resultColor="#6366f1"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <ResultCard
              title="Assessment Growth Cap"
              value={ANNUAL_ASSESSMENT_CAP * 100}
              valueSuffix="%"
              icon={<Calculate />}
              label="Max annual increase in assessed value"
              resultColor="#f59e0b"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <ResultCard
              title="Fair Rate (Revenue Neutral)"
              value={(REVENUE_NEUTRAL_RATE * 100).toFixed(2)}
              valueSuffix="%"
              icon={<Public />}
              label={`If all CA property was reassessed`}
              resultColor="#ef4444"
            />
          </Grid>
        </Grid>
      </InputSection>

      {/* About Revenue Neutrality Accordion */}
      <Accordion sx={{ mt: 4 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" fontWeight={600}>
            What is a "Revenue Neutral" Fair Tax?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph sx={{ lineHeight: 1.8 }}>
            If Proposition 13 were repealed and all properties were reassessed
            to their true market value, total assessed value in California would
            roughly double. If we wanted to keep total property tax revenue
            exactly the same ("revenue neutral"), the overall tax rate would
            need to drop proportionally.
          </Typography>
          <Typography variant="body2" paragraph sx={{ lineHeight: 1.8 }}>
            We estimate the total market value of CA real estate is{" "}
            <strong>{MARKET_TO_ASSESSED_RATIO}x</strong> the total assessed
            value. Therefore, a fair, revenue-neutral tax rate would be roughly{" "}
            <strong>{(REVENUE_NEUTRAL_RATE * 100).toFixed(2)}%</strong> instead
            of the current 1%.
          </Typography>
          <Typography variant="body2" paragraph sx={{ lineHeight: 1.8 }}>
            When recent buyers pay 1% on their true market value, they are
            paying a <strong>penalty</strong> to subsidize long-time owners who
            pay 1% on artificially low assessed values.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* About Prop 13 Accordion */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" fontWeight={600}>
            About Proposition 13
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph sx={{ lineHeight: 1.8 }}>
            <strong>Proposition 13</strong> (1978) amended the California
            Constitution to cap property taxes at 1% of assessed value, with
            annual assessed value increases capped at 2%. Full reassessment only
            occurs upon change of ownership.
          </Typography>
          <Typography variant="body2" paragraph sx={{ lineHeight: 1.8 }}>
            This created an asymmetry by timing:
          </Typography>
          <Box sx={{ ml: 2, mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Long-time property owners:</strong> Pay taxes based on
              decades-old assessed values (capped at 2% annual increase)
            </Typography>
            <Typography variant="body2">
              <strong>New property buyers:</strong> Pay taxes based on current
              market value (full reassessment)
            </Typography>
          </Box>
          <Typography variant="body2" paragraph sx={{ lineHeight: 1.8 }}>
            There is no distinction between residential and commercial -- the
            same rule creates different outcomes depending on when you bought.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
