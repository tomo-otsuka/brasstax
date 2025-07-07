import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <Box sx={{ textAlign: "center", my: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Brass Tax!
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        A casual, back-of-the-napkin approach to tax estimation.
      </Typography>
      <Typography variant="body1" paragraph sx={{ my: 4 }}>
        This application provides several tools to help you explore your tax situation.
        Whether you're planning for estimated taxes, curious about the "marriage
        penalty," or comparing state tax burdens, there are features available
        for each of these purposes.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            component={Link}
            to="/brasstax/estimated-taxes"
          >
            Estimate Your Taxes
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            component={Link}
            to="/brasstax/marriage-penalty"
          >
            Analyze Marriage Penalty
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            component={Link}
            to="/brasstax/state-tax-comparison"
          >
            Compare State Taxes
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" component={Link} to="/brasstax/tax-chart">
            View Tax Charts
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ my: 4 }}>
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
          And yes, "Brass Tax" is a pun. I hope it brings a little levity to a
          topic that's often anything but fun.
        </Typography>
      </Box>
    </Box>
  );
};
