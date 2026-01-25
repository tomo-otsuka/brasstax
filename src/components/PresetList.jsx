import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Chip, Box } from "@mui/material";

export const PresetList = ({ presets, basePath }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
      {presets.map((preset) => {
        const searchParams = new URLSearchParams(preset.params).toString();
        const to = `${basePath}?${searchParams}`;
        return (
          <Chip
            key={preset.name}
            label={preset.name}
            component={RouterLink}
            to={to}
            clickable
          />
        );
      })}
    </Box>
  );
};
