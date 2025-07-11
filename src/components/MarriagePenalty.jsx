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
import { Share, ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

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
        <Grid item xs>
          <Typography variant="h4" component="h1">
            Marriage Penalty Calculator
          </Typography>
        </Grid>
        <Grid item>
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
            The "marriage penalty" (or "bonus") refers to the difference in the
            total tax paid by a married couple filing jointly compared to the
            sum of the taxes they would pay if they were single.
          </Typography>
          <Typography variant="h6" gutterBottom>
            What Causes It?
          </Typography>
          <Typography paragraph>
            The marriage penalty often occurs when two individuals with similar
            incomes marry. Because the tax brackets for married couples filing
            jointly are not always double the size of the single brackets, their
            combined income can be pushed into a higher tax bracket than it
            would be if they filed as two single individuals. Conversely, a
            "marriage bonus" often occurs when one spouse earns significantly
            more than the other.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    State
                  </Typography>
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
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Person 1
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
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
                    <Grid item xs={12} sm={4}>
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
                    <Grid item xs={12} sm={4}>
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
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Person 2
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
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
                    <Grid item xs={12} sm={4}>
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
                    <Grid item xs={12} sm={4}>
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
        <Grid item xs={12} md={5}>
          <Box sx={{ position: "sticky", top: "1rem" }}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  textAlign="center"
                  gutterBottom
                >
                  {resultText}
                </Typography>
                <Typography
                  variant="h4"
                  component="p"
                  textAlign="center"
                  gutterBottom
                  sx={{ color: resultColor }}
                >
                  ${Math.abs(totalDifference).toFixed(2)}
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
