import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Link,
} from "@mui/material";

export const PresetList = ({ presets, basePath }) => {
  return (
    <Paper elevation={2} sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Example Scenarios
      </Typography>
      <List dense>
        {presets.map((preset) => {
          const searchParams = new URLSearchParams(preset.params).toString();
          const to = `${basePath}?${searchParams}`;
          return (
            <ListItem key={preset.name} disablePadding>
              <ListItemText
                primary={
                  <Link component={RouterLink} to={to}>
                    {preset.name}
                  </Link>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};
