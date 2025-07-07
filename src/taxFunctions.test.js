import {
  calculateTax,
  adjustIncomes,
  calculateDeduction,
  calculateIncomeTax,
  calculateLongTermCapitalGainsTax,
  calculateSocialSecurityTax,
  calculateMedicareTax,
  calculateAdditionalMedicareTax,
  calculateNetInvestmentIncomeTax,
} from "./taxFunctions";
import {
  FilingStatusEnum,
  DeductionTypeEnum,
  JurisdictionEnum,
} from "./constants";
import { STANDARD_DEDUCTION_AMOUNTS } from "./data/taxData";

describe("Tax Functions - Comprehensive Tests", () => {
  // --- calculateTax Tests ---
  describe("calculateTax", () => {
    test("should calculate federal tax for a single filer with only ordinary income and standard deduction", () => {
      const result = calculateTax(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        50000, // ordinaryIncome
        0, // shortTermCapitalGains
        0, // longTermCapitalGains
        DeductionTypeEnum.STANDARD.name,
        0, // itemizedDeduction
        0, // taxCredits
      );
      // Expected value based on 2024 federal tax brackets for single filer with $50,000 ordinary income
      // $50,000 - $14,600 (standard deduction) = $35,400 taxable income
      // 11600 * 0.10 = 1160
      // (35400 - 11600) * 0.12 = 23800 * 0.12 = 2856
      // Total = 1160 + 2856 = 4016
      expect(result).toBeCloseTo(4016);
    });

    test("should calculate federal tax for married filing jointly with ordinary income and itemized deduction", () => {
      const result = calculateTax(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.MARRIED_FILING_JOINTLY.name,
        150000, // ordinaryIncome
        0, // shortTermCapitalGains
        0, // longTermCapitalGains
        DeductionTypeEnum.ITEMIZED.name,
        30000, // itemizedDeduction (greater than standard)
        0, // taxCredits
      );
      // Expected value based on 2024 federal tax brackets for MFJ with $150,000 ordinary income
      // $150,000 - $30,000 (itemized deduction) = $120,000 taxable income
      // 23200 * 0.10 = 2320
      // (94300 - 23200) * 0.12 = 71100 * 0.12 = 8532
      // (120000 - 94300) * 0.22 = 25700 * 0.22 = 5654
      // Total = 2320 + 8532 + 5654 = 16506
      expect(result).toBeCloseTo(16506);
    });

    test("should handle tax credits correctly", () => {
      const result = calculateTax(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        50000,
        0,
        0,
        DeductionTypeEnum.STANDARD.name,
        0,
        1000, // taxCredits
      );
      // Base tax was 4016, so 4016 - 1000 = 3016
      expect(result).toBeCloseTo(3016);
    });

    test("should not result in negative tax", () => {
      const result = calculateTax(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        10000, // low income
        0,
        0,
        DeductionTypeEnum.STANDARD.name,
        0,
        5000, // high tax credits
      );
      expect(result).toBe(0);
    });

    test("should correctly calculate tax with short-term capital gains", () => {
      const result = calculateTax(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        40000,
        5000, // shortTermCapitalGains
        0,
        DeductionTypeEnum.STANDARD.name,
        0,
        0,
      );
      // Taxable income: (40000 + 5000) - 14600 = 30400
      // 11600 * 0.10 = 1160
      // (30400 - 11600) * 0.12 = 18800 * 0.12 = 2256
      // Total = 1160 + 2256 = 3416
      expect(result).toBeCloseTo(3416);
    });

    test("should correctly calculate tax with long-term capital gains (federal)", () => {
      const result = calculateTax(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        50000,
        0,
        10000, // longTermCapitalGains
        DeductionTypeEnum.STANDARD.name,
        0,
        0,
      );
      // Ordinary taxable income: 50000 - 14600 = 35400
      // LTCG tax: 10000 * 0.15 (since 35400 + 10000 = 45400, which is > 41675)
      // Ordinary tax: 4016 (from previous test)
      // LTCG tax: (45400 - 41675) * 0.15 = 3725 * 0.15 = 558.75
      // Total = 4016 + 558.75 = 4574.75
      expect(result).toBeCloseTo(4574.75);
    });

    test("should correctly calculate tax for California (LTCG as ordinary)", () => {
      const result = calculateTax(
        JurisdictionEnum.CALIFORNIA.name,
        FilingStatusEnum.SINGLE.name,
        50000,
        0,
        10000, // longTermCapitalGains
        DeductionTypeEnum.STANDARD.name,
        0,
        0,
      );
      // CA treats LTCG as ordinary income.
      // Total income: 50000 + 10000 = 60000
      // Deduction: 5540
      // Taxable income: 60000 - 5540 = 54460
      // 10757 * 0.01 = 107.57
      // (25500 - 10757) * 0.02 = 14743 * 0.02 = 294.86
      // (40246 - 25500) * 0.04 = 14746 * 0.04 = 589.84
      // (54460 - 40246) * 0.06 = 14214 * 0.06 = 852.84
      // Total = 107.57 + 294.86 + 589.84 + 852.84 = 1845.11
      expect(result).toBeCloseTo(1845.11);
    });
  });

  // --- adjustIncomes Tests ---
  describe("adjustIncomes", () => {
    test("should apply standard deduction and keep incomes positive", () => {
      const [ordinary, short, long] = adjustIncomes(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        20000, // ordinaryIncome
        5000, // shortTermCapitalGains
        2000, // longTermCapitalGains
        DeductionTypeEnum.STANDARD.name,
        0,
      );
      // Standard deduction for single federal is 14600
      // ordinaryIncome: 20000 - 14600 = 5400
      expect(ordinary).toBe(5400);
      expect(short).toBe(5000);
      expect(long).toBe(2000);
    });

    test("should apply itemized deduction and keep incomes positive", () => {
      const [ordinary, short, long] = adjustIncomes(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        20000,
        5000,
        2000,
        DeductionTypeEnum.ITEMIZED.name,
        15000, // itemizedDeduction
      );
      // ordinaryIncome: 20000 - 15000 = 5000
      expect(ordinary).toBe(5000);
      expect(short).toBe(5000);
      expect(long).toBe(2000);
    });

    test("should reduce short-term capital gains if ordinary income goes negative after deduction", () => {
      const [ordinary, short, long] = adjustIncomes(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        10000, // ordinaryIncome
        5000, // shortTermCapitalGains
        2000, // longTermCapitalGains
        DeductionTypeEnum.STANDARD.name,
        0,
      );
      // ordinaryIncome: 10000 - 14600 = -4600
      // shortTermCapitalGains: 5000 + (-4600) = 400
      expect(ordinary).toBe(0);
      expect(short).toBe(400);
      expect(long).toBe(2000);
    });

    test("should reduce long-term capital gains if short-term capital gains go negative after deduction", () => {
      const [ordinary, short, long] = adjustIncomes(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        10000, // ordinaryIncome
        1000, // shortTermCapitalGains
        5000, // longTermCapitalGains
        DeductionTypeEnum.STANDARD.name,
        0,
      );
      // ordinaryIncome: 10000 - 14600 = -4600
      // shortTermCapitalGains: 1000 + (-4600) = -3600
      // longTermCapitalGains: 5000 + (-3600) = 1400
      expect(ordinary).toBe(0);
      expect(short).toBe(0);
      expect(long).toBe(1400);
    });

    test("should handle negative longTermCapitalGains by reducing shortTermCapitalGains", () => {
      const [ordinary, short, long] = adjustIncomes(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        50000,
        1000,
        -500, // negative longTermCapitalGains
        DeductionTypeEnum.STANDARD.name,
        0,
      );
      // longTermCapitalGains becomes 0, shortTermCapitalGains becomes 1000 - 500 = 500
      expect(ordinary).toBe(
        50000 -
          STANDARD_DEDUCTION_AMOUNTS[JurisdictionEnum.FEDERAL.name][
            FilingStatusEnum.SINGLE.name
          ],
      );
      expect(short).toBe(500);
      expect(long).toBe(0);
    });

    test("should handle negative shortTermCapitalGains by reducing ordinaryIncome (up to 3000)", () => {
      const [ordinary, short, long] = adjustIncomes(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        50000,
        -5000, // negative shortTermCapitalGains
        1000,
        DeductionTypeEnum.STANDARD.name,
        0,
      );
      // shortTermCapitalGains becomes 0, ordinaryIncome reduces by 3000 (max loss)
      // ordinaryIncome: 50000 - 3000 - 14600 = 32400
      expect(ordinary).toBe(32400);
      expect(short).toBe(0);
      expect(long).toBe(1000);
    });
  });

  // --- calculateDeduction Tests ---
  describe("calculateDeduction", () => {
    test("should return standard deduction for federal single filer", () => {
      const deduction = calculateDeduction(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        DeductionTypeEnum.STANDARD.name,
        10000, // itemizedDeduction (should be ignored)
      );
      expect(deduction).toBe(
        STANDARD_DEDUCTION_AMOUNTS[JurisdictionEnum.FEDERAL.name][
          FilingStatusEnum.SINGLE.name
        ],
      );
    });

    test("should return standard deduction for California married filing jointly", () => {
      const deduction = calculateDeduction(
        JurisdictionEnum.CALIFORNIA.name,
        FilingStatusEnum.MARRIED_FILING_JOINTLY.name,
        DeductionTypeEnum.STANDARD.name,
        10000, // itemizedDeduction (should be ignored)
      );
      expect(deduction).toBe(
        STANDARD_DEDUCTION_AMOUNTS[JurisdictionEnum.CALIFORNIA.name][
          FilingStatusEnum.MARRIED_FILING_JOINTLY.name
        ],
      );
    });

    test("should return itemized deduction when selected", () => {
      const deduction = calculateDeduction(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        DeductionTypeEnum.ITEMIZED.name,
        20000, // itemizedDeduction
      );
      expect(deduction).toBe(20000);
    });

    test("should return 0 if itemized deduction is 0", () => {
      const deduction = calculateDeduction(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        DeductionTypeEnum.ITEMIZED.name,
        0,
      );
      expect(deduction).toBe(0);
    });
  });

  // --- calculateIncomeTax Tests ---
  describe("calculateIncomeTax", () => {
    test("should calculate federal income tax for single filer in lowest bracket", () => {
      const tax = calculateIncomeTax(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        5000, // taxable income
        0,
        0,
      );
      expect(tax).toBeCloseTo(5000 * 0.1); // 10% bracket
    });

    test("should calculate federal income tax for single filer spanning multiple brackets", () => {
      const tax = calculateIncomeTax(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        40000, // taxable income
        0,
        0,
      );
      // 11600 * 0.10 = 1160
      // (40000 - 11600) * 0.12 = 28400 * 0.12 = 3408
      // Total = 1160 + 3408 = 4568
      expect(tax).toBeCloseTo(4568);
    });

    test("should calculate federal income tax for married filing jointly in highest bracket", () => {
      const tax = calculateIncomeTax(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.MARRIED_FILING_JOINTLY.name,
        700000, // taxable income
        0,
        0,
      );
      // 23200 * 0.10 = 2320
      // (94300 - 23200) * 0.12 = 71100 * 0.12 = 8532
      // (201050 - 94300) * 0.22 = 106750 * 0.22 = 23485
      // (383900 - 201050) * 0.24 = 182850 * 0.24 = 43884
      // (487450 - 383900) * 0.32 = 103550 * 0.32 = 33136
      // (700000 - 487450) * 0.35 = 212550 * 0.35 = 74392.5
      // Total = 2320 + 8532 + 17259 + 37704 + 33136 + 74392.5 = 185749.5
      expect(tax).toBeCloseTo(185749.5);
    });

    test("should include long-term capital gains for California income tax", () => {
      const tax = calculateIncomeTax(
        JurisdictionEnum.CALIFORNIA.name,
        FilingStatusEnum.SINGLE.name,
        50000, // ordinaryIncome
        0,
        10000, // longTermCapitalGains
      );
      // Total applicable income: 50000 + 10000 = 60000
      // 10757 * 0.01 = 107.57
      // (25500 - 10757) * 0.02 = 14743 * 0.02 = 294.86
      // (40246 - 25500) * 0.04 = 14746 * 0.04 = 589.84
      // (55867 - 40246) * 0.06 = 15621 * 0.06 = 937.26
      // (60000 - 55867) * 0.08 = 4133 * 0.08 = 330.64
      // Total = 107.57 + 294.86 + 589.84 + 937.26 + 330.64 = 2260.17
      expect(tax).toBeCloseTo(2260.17);
    });

    test("should return 0 for zero applicable income", () => {
      const tax = calculateIncomeTax(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        0,
        0,
        0,
      );
      expect(tax).toBe(0);
    });
  });

  // --- calculateLongTermCapitalGainsTax Tests ---
  describe("calculateLongTermCapitalGainsTax", () => {
    test("should calculate federal long-term capital gains tax for single filer", () => {
      const tax = calculateLongTermCapitalGainsTax(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        40000, // ordinaryIncome
        0,
        10000, // longTermCapitalGains
      );
      // Accounted income: 40000. Bracket ends: 41675 (0%), 459750 (15%)
      // Gains in 0% bracket: 41675 - 40000 = 1675
      // Remaining gains: 10000 - 1675 = 8325
      // Tax: 1675 * 0 + 8325 * 0.15 = 1248.75
      expect(tax).toBeCloseTo(1248.75);
    });

    test("should calculate federal long-term capital gains tax spanning multiple brackets", () => {
      const tax = calculateLongTermCapitalGainsTax(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        30000, // ordinaryIncome
        0,
        100000, // longTermCapitalGains
      );
      // Accounted income: 30000. Bracket ends: 41675 (0%), 459750 (15%)
      // Gains in 0% bracket: 41675 - 30000 = 11675
      // Remaining gains: 100000 - 11675 = 88325
      // Tax: 11675 * 0 + 88325 * 0.15 = 13248.75
      expect(tax).toBeCloseTo(13248.75);
    });

    test("should return 0 for jurisdictions that treat LTCG as ordinary income", () => {
      const tax = calculateLongTermCapitalGainsTax(
        JurisdictionEnum.CALIFORNIA.name,
        FilingStatusEnum.SINGLE.name,
        50000,
        0,
        10000,
      );
      expect(tax).toBe(0);
    });

    test("should return 0 if no long-term capital gains", () => {
      const tax = calculateLongTermCapitalGainsTax(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.SINGLE.name,
        50000,
        0,
        0,
      );
      expect(tax).toBe(0);
    });
  });

  // --- calculateSocialSecurityTax Tests ---
  describe("calculateSocialSecurityTax", () => {
    test("should calculate social security tax below the cap", () => {
      const tax = calculateSocialSecurityTax(100000);
      expect(tax).toBeCloseTo(100000 * 0.062);
    });

    test("should cap social security tax at 147000", () => {
      const tax = calculateSocialSecurityTax(200000);
      expect(tax).toBeCloseTo(147000 * 0.062);
    });

    test("should return 0 for zero income", () => {
      const tax = calculateSocialSecurityTax(0);
      expect(tax).toBe(0);
    });
  });

  // --- calculateMedicareTax Tests ---
  describe("calculateMedicareTax", () => {
    test("should calculate medicare tax below additional tax threshold", () => {
      const tax = calculateMedicareTax(FilingStatusEnum.SINGLE.name, 150000);
      expect(tax).toBeCloseTo(150000 * 0.0145);
    });

    test("should calculate medicare tax with additional tax for single filer", () => {
      const tax = calculateMedicareTax(FilingStatusEnum.SINGLE.name, 250000);
      // 250000 * 0.0145 + (250000 - 200000) * 0.009
      // 3625 + 50000 * 0.009 = 3625 + 450 = 4075
      expect(tax).toBeCloseTo(4075);
    });

    test("should calculate medicare tax with additional tax for married filing jointly", () => {
      const tax = calculateMedicareTax(
        FilingStatusEnum.MARRIED_FILING_JOINTLY.name,
        300000,
      );
      // 300000 * 0.0145 + (300000 - 250000) * 0.009
      // 4350 + 50000 * 0.009 = 4350 + 450 = 4800
      expect(tax).toBeCloseTo(4800);
    });

    test("should return 0 for zero income", () => {
      const tax = calculateMedicareTax(FilingStatusEnum.SINGLE.name, 0);
      expect(tax).toBe(0);
    });
  });

  // --- calculateAdditionalMedicareTax Tests ---
  describe("calculateAdditionalMedicareTax", () => {
    test("should calculate additional medicare tax for single filer above threshold", () => {
      const tax = calculateAdditionalMedicareTax(
        FilingStatusEnum.SINGLE.name,
        250000,
      );
      expect(tax).toBeCloseTo(50000 * 0.009);
    });

    test("should return 0 for single filer below threshold", () => {
      const tax = calculateAdditionalMedicareTax(
        FilingStatusEnum.SINGLE.name,
        150000,
      );
      expect(tax).toBe(0);
    });

    test("should calculate additional medicare tax for married filing jointly above threshold", () => {
      const tax = calculateAdditionalMedicareTax(
        FilingStatusEnum.MARRIED_FILING_JOINTLY.name,
        300000,
      );
      expect(tax).toBeCloseTo(50000 * 0.009);
    });

    test("should return 0 for married filing jointly below threshold", () => {
      const tax = calculateAdditionalMedicareTax(
        FilingStatusEnum.MARRIED_FILING_JOINTLY.name,
        200000,
      );
      expect(tax).toBe(0);
    });
  });

  // --- calculateNetInvestmentIncomeTax Tests ---
  describe("calculateNetInvestmentIncomeTax", () => {
    test("should calculate net investment income tax for single filer", () => {
      const tax = calculateNetInvestmentIncomeTax(
        FilingStatusEnum.SINGLE.name,
        150000,
        100000,
      );
      // Threshold: 200000. Min(150000 + 100000 - 200000, 100000) = Min(50000, 100000) = 50000
      expect(tax).toBeCloseTo(50000 * 0.038);
    });

    test("should calculate net investment income tax for married filing jointly", () => {
      const tax = calculateNetInvestmentIncomeTax(
        FilingStatusEnum.MARRIED_FILING_JOINTLY.name,
        200000,
        100000,
      );
      // Threshold: 250000. Min(200000 + 100000 - 250000, 100000) = Min(50000, 100000) = 50000
      expect(tax).toBeCloseTo(50000 * 0.038);
    });

    test("should return 0 if income + capital gains is below threshold", () => {
      const tax = calculateNetInvestmentIncomeTax(
        FilingStatusEnum.SINGLE.name,
        100000,
        50000,
      );
      // Threshold: 200000. 100000 + 50000 = 150000 (below threshold)
      expect(tax).toBe(0);
    });

    test("should return 0 if capital gains are 0", () => {
      const tax = calculateNetInvestmentIncomeTax(
        FilingStatusEnum.SINGLE.name,
        250000,
        0,
      );
      expect(tax).toBe(0);
    });
  });
});
