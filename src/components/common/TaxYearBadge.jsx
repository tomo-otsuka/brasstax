import React from "react";
import { Chip, Tooltip } from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";

export const TaxYearBadge = ({ year = "2025" }) => {
  return (
    <Tooltip
      title={`Calculations are based on ${year} tax brackets and limits.`}
    >
      <Chip
        label={`Tax Year ${year}`}
        size="small"
        variant="outlined"
        color="primary"
        icon={<InfoOutlined sx={{ fontSize: "16px !important" }} />}
        sx={{
          fontWeight: 700,
          borderRadius: 1,
          height: 24,
          "& .MuiChip-label": { px: 1, fontSize: "0.75rem" },
        }}
      />
    </Tooltip>
  );
};
