import "./App.css";
import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { EstimatedTaxes } from "./components/EstimatedTaxes.jsx";
import { TaxChart } from "./components/TaxChart.jsx";
import { MarriagePenalty } from "./components/MarriagePenalty";
import { StateTaxComparison } from "./components/StateTaxComparison.jsx";
import { LandingPage } from "./components/LandingPage.jsx";
import { ReactComponent as Logo } from "./brasstax-logo.svg";
import { AppBar, Tabs, Tab, Container, Box } from "@mui/material";
import { MonetizationOn, BarChart, People, Public } from "@mui/icons-material";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/brasstax/" style={{ textDecoration: "none" }}>
            <Logo style={{ height: 40, width: "auto", margin: "0 16px" }} />
          </Link>
          <Tabs
            value={location.pathname}
            onChange={(event, newValue) => {
              navigate(newValue);
            }}
            centered
            textColor="inherit"
            indicatorColor="secondary"
            sx={{ flexGrow: 1 }}
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
        </Box>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/brasstax/" element={<LandingPage />} />
          <Route
            path="/brasstax/estimated-taxes"
            element={<EstimatedTaxes />}
          />
          <Route path="/brasstax/tax-chart" element={<TaxChart />} />
          <Route
            path="/brasstax/marriage-penalty"
            element={<MarriagePenalty />}
          />
          <Route
            path="/brasstax/state-tax-comparison"
            element={<StateTaxComparison />}
          />
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
