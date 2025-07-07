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
      // Expected value based on 2022 federal tax brackets for single filer with $50,000 ordinary income
      // $50,000 - $12,950 (standard deduction) = $37,050 taxable income
      // 9950 * 0.10 = 995
      // (37050 - 9950) * 0.12 = 27100 * 0.12 = 3252
      // Total = 995 + 3252 = 4247
      expect(result).toBeCloseTo(4247);
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
      // Expected value based on 2022 federal tax brackets for MFJ with $150,000 ordinary income
      // $150,000 - $30,000 (itemized deduction) = $120,000 taxable income
      // 19900 * 0.10 = 1990
      // (81050 - 19900) * 0.12 = 61150 * 0.12 = 7338
      // (120000 - 81050) * 0.22 = 38950 * 0.22 = 8569
      // Total = 1990 + 7338 + 8569 = 17897
      expect(result).toBeCloseTo(17897);
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
      // Base tax was 4247, so 4247 - 1000 = 3247
      expect(result).toBeCloseTo(3247);
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
      // Taxable income: (40000 + 5000) - 12950 = 45000 - 12950 = 32050
      // 9950 * 0.10 = 995
      // (32050 - 9950) * 0.12 = 22100 * 0.12 = 2652
      // Total = 995 + 2652 = 3647
      expect(result).toBeCloseTo(3647);
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
      // Ordinary taxable income: 50000 - 12950 = 37050
      // LTCG tax: 10000 * 0.15 (since 37050 + 10000 = 47050, which is > 41675)
      // Ordinary tax: 4247 (from previous test)
      // LTCG tax: (47050 - 41675) * 0.15 = 5375 * 0.15 = 806.25
      // Total = 4247 + 806.25 = 5053.25
      expect(result).toBeCloseTo(5053.25);
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
      // Deduction: 4803
      // Taxable income: 60000 - 4803 = 55197
      // 9325 * 0.02 = 186.5
      // (22107 - 9325) * 0.04 = 12782 * 0.04 = 511.28
      // (34892 - 22107) * 0.06 = 12785 * 0.06 = 767.1
      // (48435 - 34892) * 0.08 = 13543 * 0.08 = 1083.44
      // (55197 - 48435) * 0.093 = 6762 * 0.093 = 628.866
      // Total = 93.25 + 255.64 + 511.4 + 812.58 + 540.96 = 2213.83
      expect(result).toBeCloseTo(2213.83);
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
      // Standard deduction for single federal is 12950
      // ordinaryIncome: 20000 - 12950 = 7050
      expect(ordinary).toBe(7050);
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
      // ordinaryIncome: 10000 - 12950 = -2950
      // shortTermCapitalGains: 5000 + (-2950) = 2050
      expect(ordinary).toBe(0);
      expect(short).toBe(2050);
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
      // ordinaryIncome: 10000 - 12950 = -2950
      // shortTermCapitalGains: 1000 + (-2950) = -1950
      // longTermCapitalGains: 5000 + (-1950) = 3050
      expect(ordinary).toBe(0);
      expect(short).toBe(0);
      expect(long).toBe(3050);
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
      // ordinaryIncome: 50000 - 3000 - 12950 = 34050
      expect(ordinary).toBe(
        50000 -
          3000 -
          STANDARD_DEDUCTION_AMOUNTS[JurisdictionEnum.FEDERAL.name][
            FilingStatusEnum.SINGLE.name
          ],
      );
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
      // 9950 * 0.10 = 995
      // (40000 - 9950) * 0.12 = 30050 * 0.12 = 3606
      // Total = 995 + 3606 = 4601
      expect(tax).toBeCloseTo(4601);
    });

    test("should calculate federal income tax for married filing jointly in highest bracket", () => {
      const tax = calculateIncomeTax(
        JurisdictionEnum.FEDERAL.name,
        FilingStatusEnum.MARRIED_FILING_JOINTLY.name,
        700000, // taxable income
        0,
        0,
      );
      // 19900 * 0.10 = 1990
      // (81050 - 19900) * 0.12 = 61150 * 0.12 = 7338
      // (172750 - 81050) * 0.22 = 91700 * 0.22 = 20174
      // (329850 - 172750) * 0.24 = 157100 * 0.24 = 37704
      // (418850 - 329850) * 0.32 = 89000 * 0.32 = 28480
      // (628300 - 418850) * 0.35 = 209450 * 0.35 = 73307.5
      // (700000 - 628300) * 0.37 = 71700 * 0.37 = 26529
      // Total = 1990 + 7338 + 20174 + 37704 + 28480 + 73307.5 + 26529 = 195522.5
      expect(tax).toBeCloseTo(195522.5);
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
      // 9325 * 0.02 = 186.5
      // (22107 - 9325) * 0.04 = 511.28
      // (34892 - 22107) * 0.06 = 767.1
      // (48435 - 34892) * 0.08 = 1083.44
      // (60000 - 48435) * 0.093 = 11565 * 0.093 = 1075.545
      // Total = 93.25 + 255.64 + 511.4 + 812.58 + 925.2 = 2598.07
      expect(tax).toBeCloseTo(2598.07);
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
