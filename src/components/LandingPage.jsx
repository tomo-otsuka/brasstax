import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";

const tools = [
  {
    title: "Estimated Taxes",
    description:
      "Estimate your quarterly tax payments based on your income and deductions.",
    path: "/estimated-taxes",
    buttonText: "Estimate Payments",
  },
  {
    title: "Tax Rate Explorer",
    description:
      "Visualize how your marginal and effective tax rates change as your income increases.",
    path: "/tax-rate-explorer",
    buttonText: "Explore Rates",
  },
  {
    title: "Marriage Penalty",
    description:
      "Compare the tax liability of filing jointly versus as two single individuals.",
    path: "/marriage-penalty",
    buttonText: "Analyze Penalty",
  },
  {
    title: "State Tax Comparison",
    description:
      "Compare the estimated income, property, and sales tax burden across different states.",
    path: "/state-tax-comparison",
    buttonText: "Compare States",
  },
];

export const LandingPage = () => {
  return (
    <Box sx={{ textAlign: "center", my: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Brass Tax
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        A developer's attempt to make sense of the tax code.
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ my: 4, maxWidth: "800px", mx: "auto" }}
      >
        This site is a collection of tools built to better understand the US tax
        system. It's a set of distilled concepts—from the marriage penalty to
        state-by-state tax comparisons—turned into simple, interactive
        calculators and charts.
      </Typography>

      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 6 }}>
        Tools
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
        {tools.map((tool) => (
          <Grid item key={tool.title} xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {tool.title}
                </Typography>
                <Typography color="text.secondary">
                  {tool.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", p: 2 }}>
                <Button
                  variant="contained"
                  component={Link}
                  to={tool.path}
                  size="large"
                >
                  {tool.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ my: 4, maxWidth: "800px", mx: "auto" }}>
        <Typography variant="h4" gutterBottom>
          What's with the name?
        </Typography>
        <Typography variant="body1" paragraph>
          The phrase "getting down to brass tacks" means to focus on the
          essential facts of a situation. This application is all about
          stripping away the complexity of the tax code to give you a clear,
          high-level view of your financial picture.
        </Typography>
        <Typography variant="body1" paragraph>
          And yes, "Brass Tax" is a pun. It's meant to bring a little levity to
          a topic that's often anything but fun.
        </Typography>
      </Box>
    </Box>
  );
};
