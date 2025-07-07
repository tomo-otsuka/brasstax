# brasstax

**brasstax** is a comprehensive tax estimation tool designed to help users project their annual tax liabilities and understand the impact of various financial scenarios. This static web application, accessible at [tomo-otsuka.github.io/brasstax](https://tomo-otsuka.github.io/brasstax), provides a suite of calculators and visualizations to make tax planning more transparent and manageable.

## Key Features

- **Estimated Tax Calculator:** Project your federal and state tax liabilities for the year based on your income, deductions, and credits. This tool helps you determine the appropriate estimated tax payments for each period to avoid underpayment penalties.
- **Marriage Penalty Analysis:** Compare the tax implications of filing as a single individual versus married filing jointly. This feature helps you understand how your tax situation might change after marriage.
- **State-by-State Tax Comparison:** Analyze and compare income, property, and sales tax rates across different states. This is particularly useful for individuals considering a move or those with income in multiple states.
- **Interactive Tax Charts:** Visualize your tax breakdown through interactive charts, making it easier to understand where your money is going and how different income sources are taxed.

## Tech Stack

- **Frontend:** [React](https://reactjs.org/)
- **UI Library:** [Material-UI (MUI)](https://mui.com/)
- **Charting:** [Chart.js](https://www.chartjs.org/)
- **Build Tool:** [Create React App](https://create-react-app.dev/)

## Getting Started

To run brasstax locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/tomo-otsuka/brasstax.git
    cd brasstax
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm start
    ```
    This will open the application in your default browser at `http://localhost:3000`.

## Available Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run build`: Builds the app for production to the `docs/` folder.

## Deployment

This application is deployed as a static site on GitHub Pages. The production build is configured to output to the `docs/` directory. GitHub Pages is configured to look for the `index.html` file in this directory to serve the application.