import React, { useMemo } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Alert,
  AlertTitle,
  Paper,
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
  // Generate some simulated daily data from June 12, 2026 to Dec 31, 2026
  const chartData = useMemo(() => {
    const startDate = new Date("2026-06-12T00:00:00");
    const endDate = new Date("2026-12-31T00:00:00");
    const dates = [];
    const floatValues = [];

    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      const dateStr = currentDate.toISOString().split("T")[0];
      dates.push(dateStr);

      // Simulate float dynamics based on SPCX staggered lockup rules:
      // Base float: ~5%
      let currentFloat = 5.0;

      const daysSinceIpo = Math.floor(
        (currentDate - startDate) / (1000 * 60 * 60 * 24),
      );

      if (daysSinceIpo >= 180) {
        // Dec 9, 2026 (180 days)
        currentFloat = 90.0;
      } else if (daysSinceIpo >= 135) {
        // Oct 25, 2026 (135 days)
        currentFloat = 60.0;
      } else if (daysSinceIpo >= 120) {
        // Oct 10, 2026 (120 days)
        currentFloat = 53.0;
      } else if (daysSinceIpo >= 105) {
        // Sep 25, 2026 (105 days)
        currentFloat = 46.0;
      } else if (daysSinceIpo >= 90) {
        // Sep 10, 2026 (90 days)
        currentFloat = 39.0;
      } else if (daysSinceIpo >= 84) {
        // ~Sep 4, 2026 (Q2 Earnings Release + 2 days)
        // Earnings-based release: up to 20% + 10% performance bonus
        currentFloat = 32.0;
      } else if (daysSinceIpo >= 70) {
        // Aug 21, 2026 (70 days)
        currentFloat = 12.0;
      }

      floatValues.push(currentFloat);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return { dates, floatValues };
  }, []);

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

      <Paper elevation={3} sx={{ p: 3, mb: 4, height: 400 }}>
        <Line data={data} options={options} />
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
