import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";

export function InputSection({ title, icon, children }) {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          {icon && React.cloneElement(icon, { sx: { color: "primary.main" } })}
          <Typography variant="h6">{title}</Typography>
        </Box>
        {children}
      </CardContent>
    </Card>
  );
}
