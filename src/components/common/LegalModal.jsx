import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";

export const LegalModal = ({ open, onClose, type }) => {
  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms of Use";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      scroll="paper"
      PaperProps={{
        sx: {
          bgcolor: "#1e1e1e", // Force solid dark background
          backgroundImage: "none",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 800 }}>{title}</DialogTitle>
      <DialogContent dividers>
        {isPrivacy ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="body1">
              <strong>1. Data Minimization</strong>
              <br />
              This application operates on a "Zero-Knowledge" architecture
              regarding server-side storage. All calculations performed by the
              tools (Tax Estimator, Marriage Penalty, etc.) are executed
              strictly within your local browser environment.
            </Typography>
            <Typography variant="body1">
              <strong>2. Data Persistence</strong>
              <br />
              Any data you enter (income, filing status, etc.) effectively
              disappears when you close the tab. We do not use cookies to track
              behavior or store personal financial data across sessions, except
              for strictly functional URL parameters if you choose to share a
              link.
            </Typography>
            <Typography variant="body1">
              <strong>3. Third-Party Analytics</strong>
              <br />
              We do not use external analytics trackers (like Google Analytics)
              that could inadvertently capture financial profile data.
            </Typography>
          </Box>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="body1">
              <strong>1. Educational Purpose Only (No Advice)</strong>
              <br />
              The BrassTax application is strictly an educational tool designed
              to illustrate mathematical mechanics of the US Tax Code.{" "}
              <strong>
                It is not a substitute for professional tax advice.
              </strong>
            </Typography>
            <Typography variant="body1">
              <strong>2. Accuracy & Limitation of Liability</strong>
              <br />
              While we strive to align our algorithms with 2025 IRS tax tables,
              tax laws are complex and subject to change. We expressly disclaim
              liability for any errors, omissions, or financial decisions made
              based on these outputs.
            </Typography>
            <Typography variant="body1">
              <strong>3. "As-Is" Provision</strong>
              <br />
              The software is provided "AS IS", without warranty of any kind,
              express or implied.
            </Typography>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
