import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BonusTruth } from "./BonusTruth";

// Mock Chart.js to avoid canvas errors in test environment
jest.mock("react-chartjs-2", () => ({
  Bar: () => null,
}));

describe("BonusTruth Component", () => {
  test("renders correctly", () => {
    render(<BonusTruth />);
    expect(screen.getByText("The Truth About Your Bonus")).toBeInTheDocument();
  });

  test("calculates tax difference correctly for default values", () => {
    render(<BonusTruth />);

    // We have Salary and Bonus inputs.
    // MUI Sliders are role="slider".
    // MUI TextFields with type="number" are role="spinbutton".
    // Values: Salary=75000 (default), Bonus=5000 (default).

    // Use getAllByRole to get the spinbuttons.
    // Order in DOM: Salary, then Bonus.
    const spinbuttons = screen.getAllByRole("spinbutton");
    const salaryInput = spinbuttons[0];

    // Double check it's the right one
    expect(salaryInput).toHaveValue(75000);

    // Change Salary to 30000
    fireEvent.change(salaryInput, { target: { value: "30000" } });

    expect(screen.getByText(/You overpaid/i)).toBeInTheDocument();
  });

  test("calculates underpayment correctly", () => {
    render(<BonusTruth />);

    const spinbuttons = screen.getAllByRole("spinbutton");
    const salaryInput = spinbuttons[0];

    // Change Salary to 200000
    fireEvent.change(salaryInput, { target: { value: "200000" } });

    expect(screen.getByText(/You underpaid/i)).toBeInTheDocument();
  });
});
