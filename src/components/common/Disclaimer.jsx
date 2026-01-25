import React from "react";
import { Box, Typography } from "@mui/material";

export const Disclaimer = () => {
  return (
    <Box
      sx={{
        mt: 6,
        pt: 3,
        borderTop: "1px solid",
        borderColor: "divider",
        textAlign: "center",
      }}
    >
      <Typography variant="caption" color="text.secondary">
        Not financial advice. Calculations are estimates only—use at your own
        risk.
      </Typography>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: "block", mt: 1 }}
      >
        This tool runs entirely in your browser and collects no data.{" "}
        <a
          href="https://github.com/tomo-otsuka/brasstax"
          style={{ color: "inherit" }}
        >
          View source
        </a>
      </Typography>
    </Box>
  );
};
