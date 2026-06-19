import React, { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Alert,
  AlertTitle,
  Paper,
  Slider,
  TextField,
  Divider,
  Switch,
  FormControlLabel,
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
} from "chart.js";
import { Line } from "react-chartjs-2";
import InfoIcon from "@mui/icons-material/Info";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const SpcxIpoVisualizer = () => {
  const [spcxPrice, setSpcxPrice] = useState(185);
  const [daysSinceIpo, setDaysSinceIpo] = useState(0);
  const [includePerformanceBonus, setIncludePerformanceBonus] = useState(false);

  // Calculator Constants & Derived Values
  const TOTAL_SHARES_B = 13.11; // 13.11 billion shares (from $1.77T valuation at $135 IPO price)
  const VTI_MARKET_CAP_B = 55000; // $55 Trillion
  const QQQ_MARKET_CAP_B = 25000; // $25 Trillion
  const VTI_AUM_B = 1500; // $1.5 Trillion AUM
  const QQQ_AUM_B = 300; // $300 Billion AUM

  // Generate some simulated daily data from June 12, 2026 to Dec 31, 2026
  const chartData = useMemo(() => {
    const startDate = new Date("2026-06-12T00:00:00");
    const endDate = new Date("2026-12-31T00:00:00");
    const dates = [];
    const floatValues = [];
    const vtiWeights = [];
    const qqqWeights = [];

    const currentSpcxMarketCapB = spcxPrice * TOTAL_SHARES_B;

    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      const dateStr = currentDate.toISOString().split("T")[0];
      dates.push(dateStr);

      // Simulate float dynamics based on SPCX staggered lockup rules:
      // Base float: ~5%
      let currentFloat = 5.0;

      const days = Math.floor(
        (currentDate - startDate) / (1000 * 60 * 60 * 24),
      );

      if (days >= 180) {
        currentFloat = 90.0;
      } else if (days >= 135) {
        currentFloat = 60.0;
      } else if (days >= 120) {
        currentFloat = 53.0;
      } else if (days >= 105) {
        currentFloat = 46.0;
      } else if (days >= 90) {
        currentFloat = 39.0;
      } else if (days >= 84) {
        currentFloat = 32.0;
        if (includePerformanceBonus) currentFloat += 10.0;
      } else if (days >= 70) {
        currentFloat = 12.0;
      }

      floatValues.push(currentFloat);

      // ETF Logic
      const spcxFloatCapB = currentSpcxMarketCapB * (currentFloat / 100);
      const vtiWeight =
        days >= 6 ? (spcxFloatCapB / VTI_MARKET_CAP_B) * 100 : 0;
      const qqqWeight =
        days >= 101 ? (currentSpcxMarketCapB / QQQ_MARKET_CAP_B) * 100 : 0;

      vtiWeights.push(vtiWeight);
      qqqWeights.push(qqqWeight);

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return { dates, floatValues, vtiWeights, qqqWeights };
  }, [includePerformanceBonus, spcxPrice]);

  // Derived current metrics based on selected date
  const spcxFloat = chartData.floatValues[daysSinceIpo];
  const selectedDateStr = chartData.dates[daysSinceIpo];

  const spcxMarketCapB = spcxPrice * TOTAL_SHARES_B;
  const spcxFloatCapB = spcxMarketCapB * (spcxFloat / 100);

  // Inclusion Logic
  // VTI included after Day 5 (Day 6, June 18)
  const isVtiIncluded = daysSinceIpo >= 6;
  const vtiWeightPercent = isVtiIncluded
    ? (spcxFloatCapB / VTI_MARKET_CAP_B) * 100
    : 0;

  // QQQ included on Day 101 (Sept 21)
  const isQqqIncluded = daysSinceIpo >= 101;
  const qqqWeightPercent = isQqqIncluded
    ? (spcxMarketCapB / QQQ_MARKET_CAP_B) * 100
    : 0;

  const vtiForcedBuyingB = VTI_AUM_B * (vtiWeightPercent / 100);
  const qqqForcedBuyingB = QQQ_AUM_B * (qqqWeightPercent / 100);

  const data = {
    labels: chartData.dates,
    datasets: [
      {
        label: "SPCX Estimated Public Float (%)",
        data: chartData.floatValues,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.1,
        fill: true,
        stepped: true, // Float jumps are usually stepped events
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "SPCX Float Over Time (2026 Simulation)",
        font: { size: 16 },
      },
      tooltip: {
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
        },
      },
      x: {
        title: {
          display: true,
          text: "Date",
        },
        ticks: {
          maxTicksLimit: 10,
        },
      },
    },
  };

  const etfData = {
    labels: chartData.dates,
    datasets: [
      {
        label: "VTI Estimated Weight (%)",
        data: chartData.vtiWeights,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.1,
        fill: true,
        stepped: true,
      },
      {
        label: "QQQ Estimated Weight (%)",
        data: chartData.qqqWeights,
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        tension: 0.1,
        fill: true,
        stepped: true,
      },
    ],
  };

  const etfOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "ETF Inclusion Weights Over Time",
        font: { size: 16 },
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.dataset.label.replace(" (%)", "")}: ${context.parsed.y.toFixed(3)}%`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Weight (%)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Date",
        },
        ticks: {
          maxTicksLimit: 10,
        },
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
      title: "VTI & Russell Fast-Track Inclusion",
      description:
        "Included after the close of the 5th trading day. (Note: June 19 is Juneteenth market holiday).",
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
        "Up to 20% release 2 days after Q2 earnings (plus potential 10% performance bonus).",
      type: "downward",
    },
    {
      date: "2026-09-10",
      title: "90-Day Lockup Expiry",
      description: "Second staggered release tranche (~7% float increase).",
      type: "downward",
    },
    {
      date: "2026-09-21",
      title: "QQQ (Nasdaq-100) Inclusion",
      description:
        "Eligible for Q3 quarterly rebalance. (Missed Q2 reference date of late May).",
      type: "upward",
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
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        SPCX IPO & Index Inclusion Dynamics
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        Understand the competing forces of supply and demand following the
        massive SPCX initial public offering.
      </Typography>

      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ height: "100%" }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={1}>
                <TrendingUpIcon color="success" sx={{ fontSize: 32, mr: 1 }} />
                <Typography variant="h6" color="success.main">
                  Upward Pressure: Fund Inclusion
                </Typography>
              </Box>
              <Typography variant="body2" paragraph>
                When a mega-cap company like SPCX goes public, major index funds
                must add it to their portfolios to accurately track the market.
                This creates a massive <strong>demand shock</strong>.
              </Typography>
              <Typography variant="body2">
                Because passive funds (like VTI or QQQ) are strictly
                rules-based, they are forced to buy shares on the open market,
                regardless of the price. If the public float is small, this
                aggressive buying can drive the stock price up significantly.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ height: "100%" }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={1}>
                <TrendingDownIcon color="error" sx={{ fontSize: 32, mr: 1 }} />
                <Typography variant="h6" color="error.main">
                  Downward Pressure: Float Increases
                </Typography>
              </Box>
              <Typography variant="body2" paragraph>
                Early in an IPO, the "public float" (shares available to trade)
                is deliberately kept small. Over time, lockup agreements expire,
                allowing insiders and early investors to sell their shares.
              </Typography>
              <Typography variant="body2">
                This creates a <strong>supply shock</strong>. As the float
                increases dramatically, the sudden influx of available shares
                can outstrip demand, putting downward pressure on the stock
                price.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* ETF Calculator Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Interactive ETF Weight Calculator
      </Typography>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Typography variant="h6" gutterBottom>
              Adjust Parameters
            </Typography>
            <Box mb={3}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="baseline"
              >
                <Typography id="price-slider" gutterBottom>
                  SPCX Stock Price: <strong>${spcxPrice}</strong>
                </Typography>
                <Typography variant="body2" color="primary">
                  Implied Market Cap:{" "}
                  <strong>${(spcxMarketCapB / 1000).toFixed(2)}T</strong>
                </Typography>
              </Box>
              <Slider
                value={spcxPrice}
                onChange={(e, val) => setSpcxPrice(val)}
                min={50}
                max={500}
                step={5}
                valueLabelDisplay="auto"
                aria-labelledby="price-slider"
              />
            </Box>
            <Box mb={2}>
              <Typography id="timeline-slider" gutterBottom>
                Timeline: <strong>{selectedDateStr}</strong> (Day {daysSinceIpo}
                )
              </Typography>
              <Slider
                value={daysSinceIpo}
                onChange={(e, val) => setDaysSinceIpo(val)}
                min={0}
                max={chartData.dates.length - 1}
                step={1}
                aria-labelledby="timeline-slider"
              />
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Computed Public Float: <strong>{spcxFloat}%</strong>
              </Typography>
            </Box>
            <Box mb={2}>
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
                label="Simulate 10% Q2 Performance Unlock"
              />
            </Box>
            <Typography variant="caption" color="text.secondary">
              * Assumes 13.11 Billion total shares outstanding (based on $1.77T
              IPO valuation).
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card
                  variant="outlined"
                  sx={{ bgcolor: "rgba(75, 192, 192, 0.05)" }}
                >
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                      VTI Estimated Weight
                    </Typography>
                    <Typography
                      variant="h4"
                      color={isVtiIncluded ? "primary" : "text.disabled"}
                    >
                      {isVtiIncluded
                        ? `${vtiWeightPercent.toFixed(3)}%`
                        : "0.000%"}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      Forced Buying:{" "}
                      <strong>
                        {isVtiIncluded
                          ? `$${(vtiForcedBuyingB * 1000).toFixed(0)}M`
                          : "$0M"}
                      </strong>
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                      sx={{ mt: 1 }}
                    >
                      {isVtiIncluded
                        ? "(Scales with Float %)"
                        : "(Not included yet)"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card
                  variant="outlined"
                  sx={{ bgcolor: "rgba(153, 102, 255, 0.05)" }}
                >
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                      QQQ Estimated Weight
                    </Typography>
                    <Typography
                      variant="h4"
                      color={isQqqIncluded ? "secondary" : "text.disabled"}
                    >
                      {isQqqIncluded
                        ? `${qqqWeightPercent.toFixed(3)}%`
                        : "0.000%"}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      Forced Buying:{" "}
                      <strong>
                        {isQqqIncluded
                          ? `$${(qqqForcedBuyingB * 1000).toFixed(0)}M`
                          : "$0M"}
                      </strong>
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                      sx={{ mt: 1 }}
                    >
                      {isQqqIncluded
                        ? "(Unaffected by Float %)"
                        : "(Not included yet)"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box mt={3}>
              <Alert
                icon={false}
                severity="info"
                sx={{ "& .MuiAlert-message": { width: "100%" } }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="body1">
                    <strong>Total Absolute Buying (VTI + QQQ):</strong>
                  </Typography>
                  <Typography variant="h6" color="primary.main">
                    ${((vtiForcedBuyingB + qqqForcedBuyingB) * 1000).toFixed(0)}{" "}
                    Million
                  </Typography>
                </Box>
              </Alert>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4, height: 400 }}>
        <Line data={data} options={options} />
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4, height: 400 }}>
        <Line data={etfData} options={etfOptions} />
      </Paper>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Key Milestone Timeline
      </Typography>

      <Grid container spacing={2}>
        {events.map((event, index) => (
          <Grid item xs={12} key={index}>
            <Alert
              icon={
                event.type === "upward" ? (
                  <TrendingUpIcon />
                ) : event.type === "downward" ? (
                  <TrendingDownIcon />
                ) : (
                  <InfoIcon />
                )
              }
              severity={
                event.type === "upward"
                  ? "success"
                  : event.type === "downward"
                    ? "error"
                    : "info"
              }
              variant="outlined"
            >
              <AlertTitle>
                <strong>{event.date}</strong> - {event.title}
              </AlertTitle>
              {event.description}
            </Alert>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
