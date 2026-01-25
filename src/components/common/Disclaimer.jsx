import React, { useState } from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import { ShieldOutlined } from "@mui/icons-material";
import { LegalModal } from "./LegalModal";

export const Disclaimer = () => {
  const [modalType, setModalType] = useState(null); // 'terms' | 'privacy' | null

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        pt: 4,
        pb: 4,
        borderTop: "1px solid",
        borderColor: "divider",
        textAlign: "center",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 2 }}>
        <Button
          size="small"
          color="inherit"
          sx={{ textTransform: "none", fontSize: "0.75rem", opacity: 0.7 }}
          onClick={() => setModalType("terms")}
        >
          Terms of Use
        </Button>
        <Button
          size="small"
          color="inherit"
          sx={{ textTransform: "none", fontSize: "0.75rem", opacity: 0.7 }}
          onClick={() => setModalType("privacy")}
        >
          Privacy Policy
        </Button>
      </Box>

      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: "block", mb: 2, maxWidth: 600, mx: "auto", px: 2 }}
      >
        <strong>Disclaimer:</strong> This application is for mathematical
        illustration and educational purposes only. It does not constitute
        financial, tax, or legal advice. Calculations are estimates based on
        simplified 2025 tax models. Always consult with a qualified professional
        before making financial decisions. Use at your own risk.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <ShieldOutlined sx={{ fontSize: 16, color: "text.disabled" }} />
        <Typography variant="caption" color="text.disabled">
          Local Processing • Zero-Knowledge Architecture •{" "}
          <Link
            href="https://github.com/tomo-otsuka/brasstax"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source
          </Link>
        </Typography>
      </Box>

      <LegalModal
        open={!!modalType}
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </Box>
  );
};
