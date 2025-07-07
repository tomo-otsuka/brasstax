import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { EstimatedTaxes } from "./components/EstimatedTaxes.jsx";
import { TaxChart } from "./components/TaxChart.jsx";
import { MarriagePenalty } from "./components/MarriagePenalty";
import { StateTaxComparison } from "./components/StateTaxComparison.jsx";
import { AppBar, Tabs, Tab, Container } from "@mui/material";
import { MonetizationOn, BarChart, People, Public } from "@mui/icons-material";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static">
        <Tabs
          value={location.pathname}
          onChange={(event, newValue) => {
            navigate(newValue);
          }}
          centered
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab
            label="Estimated Taxes"
            value="/brasstax/estimated-taxes"
            component={Link}
            to="/brasstax/estimated-taxes"
            icon={<MonetizationOn />}
          />
          <Tab
            label="Tax Chart"
            value="/brasstax/tax-chart"
            component={Link}
            to="/brasstax/tax-chart"
            icon={<BarChart />}
          />
          <Tab
            label="Marriage Penalty"
            value="/brasstax/marriage-penalty"
            component={Link}
            to="/brasstax/marriage-penalty"
            icon={<People />}
          />
          <Tab
            label="State Tax Comparison"
            value="/brasstax/state-tax-comparison"
            component={Link}
            to="/brasstax/state-tax-comparison"
            icon={<Public />}
          />
        </Tabs>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/brasstax/estimated-taxes" element={<EstimatedTaxes />} />
          <Route path="/brasstax/tax-chart" element={<TaxChart />} />
          <Route path="/brasstax/marriage-penalty" element={<MarriagePenalty />} />
          <Route path="/brasstax/state-tax-comparison" element={<StateTaxComparison />} />
        </Routes>
      </Container>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
