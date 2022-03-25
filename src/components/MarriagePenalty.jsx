import React, { useEffect, useState } from "react";

import {
  DeductionTypeEnum,
  FilingStatusEnum,
  JurisdictionEnum,
} from "../constants";
import {
  calculateDeduction,
  calculateIncomeTax,
  calculateLongTermCapitalGainsTax,
  calculateMedicareTax,
  calculateNetInvestmentIncomeTax,
} from "../taxFunctions";
import { LabeledTextBox } from "./Components";

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

export function MarriagePenalty(props) {
  const [ordinaryIncome1, setOrdinaryIncome1] = useState(0);
  const [shortTermCapitalGains1, setShortTermCapitalGains1] = useState(0);
  const [longTermCapitalGains1, setLongTermCapitalGains1] = useState(0);
  const [ordinaryIncome2, setOrdinaryIncome2] = useState(0);
  const [shortTermCapitalGains2, setShortTermCapitalGains2] = useState(0);
  const [longTermCapitalGains2, setLongTermCapitalGains2] = useState(0);
  const [tax1, setTax1] = useState({});
  const [tax2, setTax2] = useState({});
  const [taxMarried, setTaxMarried] = useState({});
  const [taxDifference, setTaxDifference] = useState({});

  useEffect(() => {
    setTax1(
      calculateTax(
        FilingStatusEnum.SINGLE.name,
        ordinaryIncome1,
        shortTermCapitalGains1,
        longTermCapitalGains1
      )
    );
  }, [ordinaryIncome1, shortTermCapitalGains1, longTermCapitalGains1]);
  useEffect(() => {
    setTax2(
      calculateTax(
        FilingStatusEnum.SINGLE.name,
        ordinaryIncome2,
        shortTermCapitalGains2,
        longTermCapitalGains2
      )
    );
  }, [ordinaryIncome2, shortTermCapitalGains2, longTermCapitalGains2]);
  useEffect(() => {
    setTaxMarried(
      calculateTax(
        FilingStatusEnum.MARRIED_FILING_JOINTLY.name,
        ordinaryIncome1 + ordinaryIncome2,
        shortTermCapitalGains1 + shortTermCapitalGains2,
        longTermCapitalGains1 + longTermCapitalGains2
      )
    );
  }, [
    ordinaryIncome1,
    shortTermCapitalGains1,
    longTermCapitalGains1,
    ordinaryIncome2,
    shortTermCapitalGains2,
    longTermCapitalGains2,
  ]);
  useEffect(() => {
    setTaxDifference({
      "Federal Income Tax": financial(
        taxMarried["Federal Income Tax"] -
          tax1["Federal Income Tax"] -
          tax2["Federal Income Tax"]
      ),
      Medicare: financial(
        taxMarried["Medicare"] - tax1["Medicare"] - tax2["Medicare"]
      ),
      LTCG: financial(taxMarried["LTCG"] - tax1["LTCG"] - tax2["LTCG"]),
      NIIT: financial(taxMarried["NIIT"] - tax1["NIIT"] - tax2["NIIT"]),
      "State Income Tax": financial(
        taxMarried["State Income Tax"] -
          tax1["State Income Tax"] -
          tax2["State Income Tax"]
      ),
      "Total Tax": financial(
        taxMarried["Total Tax"] - tax1["Total Tax"] - tax2["Total Tax"]
      ),
    });
  }, [taxMarried, tax1, tax2]);

  const calculateTax = (
    filingStatus,
    ordinaryIncome,
    shortTermCapitalGains,
    longTermCapitalGains
  ) => {
    const jurisdiction = JurisdictionEnum.FEDERAL.name;
    const deductionType = DeductionTypeEnum.STANDARD.name;

    const deduction = calculateDeduction(
      jurisdiction,
      filingStatus,
      deductionType,
      0
    );

    const taxableIncome = Math.max(0, ordinaryIncome - deduction);

    const incomeTax = calculateIncomeTax(
      jurisdiction,
      filingStatus,
      taxableIncome,
      shortTermCapitalGains,
      longTermCapitalGains
    );
    const medicareTax = calculateMedicareTax(filingStatus, ordinaryIncome);
    const longTermCapitalGainsTax = calculateLongTermCapitalGainsTax(
      jurisdiction,
      filingStatus,
      ordinaryIncome,
      shortTermCapitalGains,
      longTermCapitalGains
    );
    const netInvestmentIncomeTax = calculateNetInvestmentIncomeTax(
      filingStatus,
      ordinaryIncome,
      shortTermCapitalGains + longTermCapitalGains
    );

    const stateIncomeTax = calculateIncomeTax(
      JurisdictionEnum.CALIFORNIA.name,
      filingStatus,
      taxableIncome,
      shortTermCapitalGains,
      longTermCapitalGains
    );
    return {
      "Federal Income Tax": financial(incomeTax),
      Medicare: financial(medicareTax),
      LTCG: financial(longTermCapitalGainsTax),
      NIIT: financial(netInvestmentIncomeTax),
      "State Income Tax": financial(stateIncomeTax),
      "Total Tax": financial(
        incomeTax +
          medicareTax +
          longTermCapitalGainsTax +
          netInvestmentIncomeTax +
          stateIncomeTax
      ),
    };
  };

  return (
    <div className="App App-header">
      <div className="row">
        <div className="bordered">
          Person 1
          <LabeledTextBox
            label="Ordinary Income"
            onInput={(textValue) => setOrdinaryIncome1(parseFloat(textValue))}
          ></LabeledTextBox>
          <LabeledTextBox
            label="Short Term Capital Gains"
            onInput={(textValue) =>
              setShortTermCapitalGains1(parseFloat(textValue))
            }
          ></LabeledTextBox>
          <LabeledTextBox
            label="Long Term Capital Gains"
            onInput={(textValue) =>
              setLongTermCapitalGains1(parseFloat(textValue))
            }
          ></LabeledTextBox>
        </div>
        <div className="bordered">
          Person 2
          <LabeledTextBox
            label="Ordinary Income"
            onInput={(textValue) => setOrdinaryIncome2(parseFloat(textValue))}
          ></LabeledTextBox>
          <LabeledTextBox
            label="Short Term Capital Gains"
            onInput={(textValue) =>
              setShortTermCapitalGains2(parseFloat(textValue))
            }
          ></LabeledTextBox>
          <LabeledTextBox
            label="Long Term Capital Gains"
            onInput={(textValue) =>
              setLongTermCapitalGains2(parseFloat(textValue))
            }
          ></LabeledTextBox>
        </div>
      </div>
      <div className="row">
        <div className="bordered">
          Person 1 Taxes
          {Object.entries(tax1).map(([key, value]) => (
            <div>
              {key}: {value}
            </div>
          ))}
        </div>
        <div className="bordered">
          Person 2 Taxes
          {Object.entries(tax2).map(([key, value]) => (
            <div>
              {key}: {value}
            </div>
          ))}
        </div>
      </div>
      <div className="bordered">
        Married Taxes
        {Object.entries(taxMarried).map(([key, value]) => (
          <div>
            {key}: {value}
          </div>
        ))}
      </div>
      <div className="bordered">
        Tax Difference
        {Object.entries(taxDifference).map(([key, value]) => (
          <div>
            {key}: {value}
          </div>
        ))}
      </div>
    </div>
  );
}
