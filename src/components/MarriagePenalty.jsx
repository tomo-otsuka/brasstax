import React, { useState, useMemo } from "react";
import {
  DeductionTypeEnum,
  FilingStatusEnum,
  JurisdictionEnum,
} from "../constants";
import { calculateTax } from "../taxFunctions";
import {
  Grid,
  Box,
  Typography,
  TextField,
  MenuItem,
  Card,
  CardContent,
  Divider,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  Share,
  ExpandMore as ExpandMoreIcon,
  LocationOn as StateIcon,
  Person as PersonIcon,
  Favorite as ResultIcon,
} from "@mui/icons-material";

export function MarriagePenalty({
  searchParams,
  setSearchParams,
  showSnackbar,
}) {
  const [ordinaryIncome1, setOrdinaryIncome1] = useState(
    Number(searchParams.get("ordinaryIncome1")) || 75000,
  );
  const [shortTermCapitalGains1, setShortTermCapitalGains1] = useState(
    Number(searchParams.get("shortTermCapitalGains1")) || 5000,
  );
  const [longTermCapitalGains1, setLongTermCapitalGains1] = useState(
    Number(searchParams.get("longTermCapitalGains1")) || 10000,
  );
  const [ordinaryIncome2, setOrdinaryIncome2] = useState(
    Number(searchParams.get("ordinaryIncome2")) || 75000,
  );
  const [shortTermCapitalGains2, setShortTermCapitalGains2] = useState(
    Number(searchParams.get("shortTermCapitalGains2")) || 0,
  );
  const [longTermCapitalGains2, setLongTermCapitalGains2] = useState(
    Number(searchParams.get("longTermCapitalGains2")) || 0,
  );
  const [selectedState, setSelectedState] = useState(
    searchParams.get("selectedState") || JurisdictionEnum.CALIFORNIA.name,
  );

  const updateSearchParams = (key, value) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, value);
    setSearchParams(newSearchParams);
  };

  const tax1 = useMemo(
    () =>
      calculateTax(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        ordinaryIncome1,
        shortTermCapitalGains1,
        longTermCapitalGains1,
        DeductionTypeEnum.STANDARD.name,
        0,
        0,
        selectedState,
      ),
    [
      ordinaryIncome1,
      shortTermCapitalGains1,
      longTermCapitalGains1,
      selectedState,
    ],
  );

  const tax2 = useMemo(
    () =>
      calculateTax(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        ordinaryIncome2,
        shortTermCapitalGains2,
        longTermCapitalGains2,
        DeductionTypeEnum.STANDARD.name,
        0,
        0,
        selectedState,
      ),
    [
      ordinaryIncome2,
      shortTermCapitalGains2,
      longTermCapitalGains2,
      selectedState,
    ],
  );

  const taxMarried = useMemo(
    () =>
      calculateTax(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.MARRIED_FILING_JOINTLY.name,
        ordinaryIncome1 + ordinaryIncome2,
        shortTermCapitalGains1 + shortTermCapitalGains2,
        longTermCapitalGains1 + longTermCapitalGains2,
        DeductionTypeEnum.STANDARD.name,
        0,
        0,
        selectedState,
      ),
    [
      ordinaryIncome1,
      shortTermCapitalGains1,
      longTermCapitalGains1,
      ordinaryIncome2,
      shortTermCapitalGains2,
      longTermCapitalGains2,
      selectedState,
    ],
  );

  const taxDifference = useMemo(() => {
    const difference = {};
    for (const key in taxMarried) {
      difference[key] = taxMarried[key] - (tax1[key] || 0) - (tax2[key] || 0);
    }
    return difference;
  }, [tax1, tax2, taxMarried]);

  const totalDifference = taxDifference["Total Tax"];
  const resultText =
    totalDifference >= 0 ? "Marriage Penalty" : "Marriage Bonus";
  const resultColor = totalDifference >= 0 ? "error.main" : "success.main";

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Grid size="grow">
          <Typography variant="h4" component="h1">
            Marriage Penalty Calculator
          </Typography>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            startIcon={<Share />}
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              showSnackbar();
            }}
          >
            Share
          </Button>
        </Grid>
      </Grid>
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="explanation-content"
          id="explanation-header"
        >
          <Typography variant="h6">About This Tool</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>
            The "marriage penalty" (or bonus) is the difference between what a
            couple pays filing jointly versus what they'd pay as two single
            filers.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Why Does This Happen?
          </Typography>
          <Typography paragraph>
            When two people with similar incomes marry, their combined income
            can push them into higher brackets—because joint brackets aren't
            always double the single brackets. On the flip side, couples with
            very different incomes often see a <strong>marriage bonus</strong>.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <StateIcon sx={{ color: "primary.main" }} />
                    <Typography variant="h6">State</Typography>
                  </Box>
                  <TextField
                    select
                    label="State"
                    value={selectedState}
                    onChange={(e) => {
                      setSelectedState(e.target.value);
                      updateSearchParams("selectedState", e.target.value);
                    }}
                    fullWidth
                  >
                    {Object.values(JurisdictionEnum)
                      .filter((j) => j.name !== JurisdictionEnum.FEDERAL.name)
                      .map((state) => (
                        <MenuItem key={state.name} value={state.name}>
                          {state.readable}
                        </MenuItem>
                      ))}
                  </TextField>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <PersonIcon sx={{ color: "primary.main" }} />
                    <Typography variant="h6">Person 1</Typography>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label="Ordinary Income"
                        type="number"
                        value={ordinaryIncome1}
                        onChange={(e) => {
                          setOrdinaryIncome1(Number(e.target.value));
                          updateSearchParams("ordinaryIncome1", e.target.value);
                        }}
                        fullWidth
                        inputProps={{ step: 1000 }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label="Short Term Capital Gains"
                        type="number"
                        value={shortTermCapitalGains1}
                        onChange={(e) => {
                          setShortTermCapitalGains1(Number(e.target.value));
                          updateSearchParams(
                            "shortTermCapitalGains1",
                            e.target.value,
                          );
                        }}
                        fullWidth
                        inputProps={{ step: 1000 }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label="Long Term Capital Gains"
                        type="number"
                        value={longTermCapitalGains1}
                        onChange={(e) => {
                          setLongTermCapitalGains1(Number(e.target.value));
                          updateSearchParams(
                            "longTermCapitalGains1",
                            e.target.value,
                          );
                        }}
                        fullWidth
                        inputProps={{ step: 1000 }}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <PersonIcon sx={{ color: "primary.main" }} />
                    <Typography variant="h6">Person 2</Typography>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label="Ordinary Income"
                        type="number"
                        value={ordinaryIncome2}
                        onChange={(e) => {
                          setOrdinaryIncome2(Number(e.target.value));
                          updateSearchParams("ordinaryIncome2", e.target.value);
                        }}
                        fullWidth
                        inputProps={{ step: 1000 }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label="Short Term Capital Gains"
                        type="number"
                        value={shortTermCapitalGains2}
                        onChange={(e) => {
                          setShortTermCapitalGains2(Number(e.target.value));
                          updateSearchParams(
                            "shortTermCapitalGains2",
                            e.target.value,
                          );
                        }}
                        fullWidth
                        inputProps={{ step: 1000 }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label="Long Term Capital Gains"
                        type="number"
                        value={longTermCapitalGains2}
                        onChange={(e) => {
                          setLongTermCapitalGains2(Number(e.target.value));
                          updateSearchParams(
                            "longTermCapitalGains2",
                            e.target.value,
                          );
                        }}
                        fullWidth
                        inputProps={{ step: 1000 }}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ position: "sticky", top: "1rem" }}>
            <Card
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
                    mb: 2,
                  }}
                >
                  <ResultIcon sx={{ color: "primary.main" }} />
                  <Typography variant="h5" component="h2">
                    {resultText}
                  </Typography>
                </Box>
                <Typography
                  variant="h3"
                  component="p"
                  textAlign="center"
                  sx={{ color: resultColor, fontWeight: 700, mb: 2 }}
                >
                  $
                  {Math.abs(totalDifference).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <TableContainer component={Paper}>
                  <Table aria-label="tax comparison table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Tax Type</TableCell>
                        <TableCell align="right">Separately</TableCell>
                        <TableCell align="right">Jointly</TableCell>
                        <TableCell align="right">Difference</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Object.keys(taxMarried).map((key) => (
                        <TableRow
                          key={key}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                            fontWeight: key === "Total Tax" ? "bold" : "normal",
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {key}
                          </TableCell>
                          <TableCell align="right">
                            ${(tax1[key] + tax2[key]).toFixed(2)}
                          </TableCell>
                          <TableCell align="right">
                            ${taxMarried[key].toFixed(2)}
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{
                              color:
                                taxDifference[key] > 0
                                  ? "error.main"
                                  : "success.main",
                            }}
                          >
                            ${taxDifference[key].toFixed(2)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
