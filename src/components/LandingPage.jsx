import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  keyframes,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  ArrowForward,
  MonetizationOn,
  BarChart,
  People,
  Public,
  Timeline,
  FactCheck,
  Gavel,
  Security,
  RocketLaunch,
} from "@mui/icons-material";
import { usePageMeta } from "./common/usePageMeta";

// Animation Keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const tools = [
  {
    title: "Estimated Taxes",
    description:
      "Calculate your quarterly estimated tax payments using the annualized income method.",
    path: "/estimated-taxes",
    buttonText: "Get Started",
    delay: "0.1s",
    icon: <MonetizationOn />,
    color: "#6366f1", // Indigo
  },
  {
    title: "Tax Rate Explorer",
    description:
      "See exactly how each dollar is taxed with an interactive visualization of marginal vs. effective rates.",
    path: "/tax-rate-explorer",
    buttonText: "Explore Rates",
    delay: "0.2s",
    icon: <BarChart />,
    color: "#a855f7", // Purple
  },
  {
    title: "Trad vs Roth",
    description:
      "Analyze whether a Traditional or Roth contribution yields a higher estimated net result for your long-term retirement planning.",
    path: "/trad-vs-roth",
    buttonText: "Compare Plans",
    delay: "0.3s",
    icon: <Timeline />,
    color: "#ec4899", // Pink
  },
  {
    title: "Marriage Penalty",
    description:
      "Find out if saying 'I do' will impact your estimated tax liability based on your unique income profiles.",
    path: "/marriage-penalty",
    buttonText: "Calculate Impact",
    delay: "0.4s",
    icon: <People />,
    color: "#3b82f6", // Blue
  },
  {
    title: "State Tax Comparison",
    description:
      "Compare your total tax burden across different states, including income tax impact for all 50 jurisdictions.",
    path: "/state-tax-comparison",
    buttonText: "Compare States",
    delay: "0.5s",
    icon: <Public />,
    color: "#10b981", // Emerald
  },
  {
    title: "Bonus Truth",
    description:
      "Understand how your bonus is actually taxed vs. withheld, and whether you'll owe more or get a refund.",
    path: "/bonus-truth",
    buttonText: "Check Your Bonus",
    delay: "0.6s",
    icon: <FactCheck />,
    color: "#f59e0b", // Amber
  },
  {
    title: "Prop 13 Analysis",
    description:
      "See how California's same-rule system creates a two-tier tax outcome based on timing.",
    path: "/prop-13",
    buttonText: "Analyze Prop 13",
    delay: "0.7s",
    icon: <Gavel />,
    color: "#8b5cf6", // Purple
  },
  {
    title: "Social Security",
    description:
      "Explore the complete history of Social Security — from its 1935 origins to the 2035 trust fund depletion crisis, including who benefits most and least.",
    path: "/social-security",
    buttonText: "Explore History",
    delay: "0.8s",
    icon: <Security />,
    color: "#14b8a6", // Teal
  },
  {
    title: "SPCX IPO",
    description:
      "Model index inclusion timelines, float dynamics, and forced buying pressure for extremely high market cap IPOs.",
    path: "/spcx-ipo",
    buttonText: "Model SPCX",
    delay: "0.9s",
    icon: <RocketLaunch />,
    color: "#2dd4bf", // Teal to match SPCX theme
  },
];

export const LandingPage = () => {
  usePageMeta({
    title: "Personal Finance & Tax Tools",
    description:
      "Brass Tax provides free tools to calculate estimated taxes, explore marginal rates, analyze Prop 13, and model SPCX IPO index inclusions.",
  });

  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        my: 2,
        animation: `${fadeInUp} 0.8s ease-out`,
        overflow: "visible", // Allow blobs to bleed
      }}
    >
      {/* Background Blobs for depth */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          left: "10%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          opacity: 0.15,
          filter: "blur(80px)",
          zIndex: -1,
          animation: `${fadeInUp} 2s ease-in-out infinite alternate`,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 100,
          right: "10%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
          opacity: 0.12,
          filter: "blur(100px)",
          zIndex: -1,
          animation: `${fadeInUp} 3s ease-in-out infinite alternate-reverse`,
        }}
      />

      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          background:
            "linear-gradient(135deg, #ffffff 0%, #a1a1aa 50%, #6366f1 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 2,
          fontWeight: 900,
          letterSpacing: "-0.02em",
          fontSize: { xs: "2.5rem", md: "4rem" },
        }}
      >
        Welcome to Brass Tax
      </Typography>
      <Typography
        variant="h5"
        color="text.secondary"
        paragraph
        sx={{
          mb: 8,
          fontWeight: 400,
          maxWidth: "700px",
          mx: "auto",
          lineHeight: 1.6,
          fontSize: { xs: "1.1rem", md: "1.30rem" },
        }}
      >
        A few tools I built because I was curious about how the numbers actually
        add up. No advisors, no jargon—just math.
      </Typography>

      <Typography
        variant="overline"
        component="h2"
        sx={{
          mt: 8,
          mb: 2,
          letterSpacing: 4,
          fontWeight: 700,
          color: "primary.main",
          display: "block",
        }}
      >
        ANALYSIS TOOLS
      </Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ mb: 10 }}>
        {tools.map((tool) => (
          <Grid
            key={tool.title}
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{
              animation: `${fadeInUp} 0.8s ease-out`,
              animationFillMode: "both",
              animationDelay: tool.delay,
            }}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 1, // Compact padding
                background: "rgba(255, 255, 255, 0.02)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                "&:hover": {
                  transform: "translateY(-12px) scale(1.02)",
                  background: "rgba(255, 255, 255, 0.04)",
                  borderColor: `${tool.color}55`,
                  boxShadow: `0 20px 40px -20px ${tool.color}66`,
                },
              }}
            >
              <CardContent sx={{ textAlign: "left", p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 48,
                    height: 48,
                    borderRadius: 1,
                    mb: 3,
                    background: `linear-gradient(135deg, ${tool.color}15 0%, ${tool.color}33 100%)`,
                    color: tool.color,
                    border: `1px solid ${tool.color}33`,
                  }}
                >
                  {React.cloneElement(tool.icon, { fontSize: "medium" })}
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 800, mb: 1.5, letterSpacing: "-0.01em" }}
                >
                  {tool.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                  sx={{ lineHeight: 1.7, opacity: 0.8 }}
                >
                  {tool.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end", p: 3, pt: 0 }}>
                <Button
                  variant="text"
                  component={Link}
                  to={tool.path}
                  endIcon={<ArrowForward />}
                  color="primary"
                  sx={{
                    fontWeight: 700,
                    textTransform: "none",
                    "&:hover": {
                      background: `${tool.color}11`,
                      color: "#fff",
                    },
                  }}
                >
                  {tool.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          my: 10,
          maxWidth: "900px",
          mx: "auto",
          textAlign: "center",
          p: 6,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)",
          borderRadius: 1,
          border: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 800, mb: 3 }}>
          Getting down to{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            brass tacks
          </Box>
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            fontSize: "1.2rem",
            color: "text.secondary",
            maxWidth: "700px",
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          We strip away the noise and focus on the essential facts. Just a dev
          project designed to make the tax code a little less of a black box.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.9rem",
            color: "text.primary",
            fontWeight: 700,
            mt: 4,
            letterSpacing: 2,
            opacity: 0.6,
          }}
        >
          - MEANDERING MATH -
        </Typography>
      </Box>
    </Box>
  );
};
