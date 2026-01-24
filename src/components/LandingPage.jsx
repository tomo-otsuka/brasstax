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
import { ArrowForward } from "@mui/icons-material";

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
  },
  {
    title: "Tax Rate Explorer",
    description:
      "See exactly how each dollar is taxed with an interactive visualization of marginal vs. effective rates.",
    path: "/tax-rate-explorer",
    buttonText: "Explore Rates",
    delay: "0.2s",
  },
  {
    title: "Marriage Penalty",
    description:
      "Find out if saying 'I do' will cost you—or save you—on your tax bill.",
    path: "/marriage-penalty",
    buttonText: "Calculate Impact",
    delay: "0.3s",
  },
  {
    title: "State Tax Comparison",
    description:
      "Compare your total tax burden across all 50 states, including income, property, and sales tax.",
    path: "/state-tax-comparison",
    buttonText: "Compare States",
    delay: "0.4s",
  },
];

export const LandingPage = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        my: 4,
        animation: `${fadeInUp} 0.8s ease-out`,
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          background: "linear-gradient(135deg, #fff 0%, #a1a1aa 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 2,
        }}
      >
        Welcome to Brass Tax
      </Typography>
      <Typography
        variant="h5"
        color="text.secondary"
        paragraph
        sx={{ mb: 6, fontWeight: 400 }}
      >
        Cutting through the complexity of taxes, one calculation at a time.
      </Typography>

      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ mt: 8, mb: 4 }}
      >
        Tools
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
        {tools.map((tool) => (
          <Grid
            key={tool.title}
            size={{ xs: 12, sm: 6, md: 3 }}
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
                p: 2,
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontSize: "1.25rem", mb: 2 }}
                >
                  {tool.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                  sx={{ lineHeight: 1.7 }}
                >
                  {tool.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-start", p: 2, pt: 0 }}>
                <Button
                  variant="text"
                  component={Link}
                  to={tool.path}
                  endIcon={<ArrowForward />}
                  color="primary"
                  sx={{
                    ml: -1,
                    fontWeight: 700,
                    "&:hover": { background: "transparent", color: "#fff" },
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
          my: 4,
          maxWidth: "800px",
          mx: "auto",
          textAlign: "left",
          p: 4,
          background: "rgba(255,255,255,0.02)",
          borderRadius: 4,
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "primary.main", mb: 3 }}
        >
          What's with the name?
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.1rem", color: "text.secondary" }}
        >
          The phrase "getting down to brass tacks" means focusing on the
          essential facts. That's what this app is all about—stripping away the
          complexity to give you a clear, actionable view of your tax situation.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.1rem", color: "text.secondary" }}
        >
          And yes, it's a pun. Taxes don't have to be boring.
        </Typography>
      </Box>
    </Box>
  );
};
