import React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Divider,
  Tooltip,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export function ResultCard({
  title,
  value,
  valuePrefix = "$",
  valueSuffix = "",
  resultColor = "primary.main",
  icon,
  label,
  children,
  subtitle,
  tooltip,
}) {
  return (
    <Card
      component="article"
      sx={{
        background:
          "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
        border: "1px solid rgba(99, 102, 241, 0.3)",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            mb: 1,
          }}
        >
          {icon && React.cloneElement(icon, { sx: { color: "primary.main" } })}
          <Typography
            variant="h5"
            component="h2"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            {title}
            {tooltip && (
              <Tooltip title={tooltip} placement="top">
                <HelpOutlineIcon
                  fontSize="small"
                  sx={{ color: "text.secondary", cursor: "help" }}
                />
              </Tooltip>
            )}
          </Typography>
        </Box>
        {subtitle && (
          <Typography
            variant="body2"
            textAlign="center"
            color="text.secondary"
            gutterBottom
            sx={{ mb: 2 }}
          >
            {subtitle}
          </Typography>
        )}
        {!subtitle && <Divider sx={{ my: 2 }} />}
        <Typography
          variant="h3"
          component="p"
          textAlign="center"
          sx={{ color: resultColor, fontWeight: 700, mb: 1 }}
        >
          {valuePrefix}
          {typeof value === "number"
            ? value.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : value}
          {valueSuffix}
        </Typography>
        {label && (
          <Typography
            variant="body2"
            textAlign="center"
            color="text.secondary"
            gutterBottom
          >
            {label}
          </Typography>
        )}
        {children}
      </CardContent>
    </Card>
  );
}
