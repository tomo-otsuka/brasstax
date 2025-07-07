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
        This tool is designed to give you a rough idea of your tax situation
        without getting lost in the weeds. Think of it as a friendly guide, not
        a substitute for a CPA. Whether you're planning for estimated taxes,
        curious about the "marriage penalty," or comparing state tax burdens,
        we've got a calculator for you.
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
    </Box>
  );
};
