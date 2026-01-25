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
import { TradVsRoth } from "./components/TradVsRoth.jsx";
import { LandingPage } from "./components/LandingPage.jsx";
import { BonusTruth } from "./components/BonusTruth.jsx";
import { Disclaimer } from "./components/common/Disclaimer.jsx";
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
  Timeline,
  Menu as MenuIcon,
  FactCheck,
} from "@mui/icons-material";

const navItems = [
  {
    label: "Estimated Taxes",
    path: "/estimated-taxes",
    icon: <MonetizationOn />,
  },
  {
    label: "Tax Rate Explorer",
    path: "/tax-rate-explorer",
    icon: <BarChart />,
  },
  {
    label: "Trad vs Roth",
    path: "/trad-vs-roth",
    icon: <Timeline />,
  },
  {
    label: "Marriage Penalty",
    path: "/marriage-penalty",
    icon: <People />,
  },
  {
    label: "State Tax Comparison",
    path: "/state-tax-comparison",
    icon: <Public />,
  },
  {
    label: "Bonus Truth",
    path: "/bonus-truth",
    icon: <FactCheck />,
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
      <AppBar position="static" sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 64,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", display: "flex" }}>
              <Logo style={{ height: 32, width: "auto" }} />
            </Link>
          </Box>

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
              indicatorColor="primary"
              sx={{
                "& .MuiTab-root": {
                  fontSize: "0.9rem",
                  textTransform: "none",
                  minWidth: 120,
                  fontWeight: 500,
                  opacity: 0.7,
                },
                "& .Mui-selected": {
                  color: "#fff !important",
                  fontWeight: 700,
                  opacity: 1,
                },
              }}
            >
              {navItems.map((item) => (
                <Tab
                  key={item.path}
                  label={item.label}
                  value={item.path}
                  component={Link}
                  to={item.path}
                  icon={item.icon}
                  iconPosition="start"
                  sx={{ minHeight: 64 }}
                />
              ))}
            </Tabs>
          )}
        </Box>
      </AppBar>
      <Box sx={{ pt: 2, pb: 8, minHeight: "100vh" }}>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/estimated-taxes"
              element={
                <EstimatedTaxes
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  showSnackbar={showSnackbar}
                />
              }
            />
            <Route
              path="/tax-rate-explorer"
              element={
                <TaxRateExplorer
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  showSnackbar={showSnackbar}
                />
              }
            />
            <Route
              path="/marriage-penalty"
              element={
                <MarriagePenalty
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  showSnackbar={showSnackbar}
                />
              }
            />
            <Route
              path="/state-tax-comparison"
              element={
                <StateTaxComparison
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  showSnackbar={showSnackbar}
                />
              }
            />
            <Route
              path="/trad-vs-roth"
              element={
                <TradVsRoth
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  showSnackbar={showSnackbar}
                />
              }
            />
            <Route
              path="/bonus-truth"
              element={
                <BonusTruth
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  showSnackbar={showSnackbar}
                />
              }
            />
          </Routes>
          <Disclaimer />
        </Container>
      </Box>
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
