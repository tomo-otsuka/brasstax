import "./App.css";
import React, { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { EstimatedTaxes } from "./components/EstimatedTaxes.jsx";
import { TaxRateExplorer } from "./components/TaxRateExplorer.jsx";
import { MarriagePenalty } from "./components/MarriagePenalty";
import { StateTaxComparison } from "./components/StateTaxComparison.jsx";
import { LandingPage } from "./components/LandingPage.jsx";
import { ReactComponent as Logo } from "./brasstax-logo.svg";
import {
  AppBar,
  Tabs,
  Tab,
  Container,
  Box,
  Snackbar,
  Alert,
  useMediaQuery,
  useTheme,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  MonetizationOn,
  BarChart,
  People,
  Public,
  Menu as MenuIcon,
} from "@mui/icons-material";

const navItems = [
  {
    label: "Estimated Taxes",
    path: "/brasstax/estimated-taxes",
    icon: <MonetizationOn />,
  },
  {
    label: "Tax Rate Explorer",
    path: "/brasstax/tax-rate-explorer",
    icon: <BarChart />,
  },
  {
    label: "Marriage Penalty",
    path: "/brasstax/marriage-penalty",
    icon: <People />,
  },
  {
    label: "State Tax Comparison",
    path: "/brasstax/state-tax-comparison",
    icon: <Public />,
  },
];

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleMenuClose();
  };

  const showSnackbar = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/brasstax/" style={{ textDecoration: "none" }}>
            <Logo style={{ height: 40, width: "auto", margin: "0 16px" }} />
          </Link>
          {isMobile ? (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleMenuOpen}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {navItems.map((item) => (
                  <MenuItem
                    key={item.path}
                    onClick={() => handleMenuItemClick(item.path)}
                    selected={location.pathname === item.path}
                  >
                    {item.icon}
                    <span style={{ marginLeft: "8px" }}>{item.label}</span>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
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
              {navItems.map((item) => (
                <Tab
                  key={item.path}
                  label={item.label}
                  value={item.path}
                  component={Link}
                  to={item.path}
                  icon={item.icon}
                />
              ))}
            </Tabs>
          )}
        </Box>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/brasstax/" element={<LandingPage />} />
          <Route
            path="/brasstax/estimated-taxes"
            element={
              <EstimatedTaxes
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                showSnackbar={showSnackbar}
              />
            }
          />
          <Route
            path="/brasstax/tax-rate-explorer"
            element={
              <TaxRateExplorer
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                showSnackbar={showSnackbar}
              />
            }
          />
          <Route
            path="/brasstax/marriage-penalty"
            element={
              <MarriagePenalty
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                showSnackbar={showSnackbar}
              />
            }
          />
          <Route
            path="/brasstax/state-tax-comparison"
            element={
              <StateTaxComparison
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                showSnackbar={showSnackbar}
              />
            }
          />
        </Routes>
      </Container>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Link copied to clipboard!
        </Alert>
      </Snackbar>
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
