# GEMINI.md - brasstax Project

This file provides context to the Gemini AI assistant to ensure it can effectively and safely collaborate on this project.

## Project Overview

`brasstax` is a React-based tax calculation application. It provides several tools for estimating taxes, comparing state taxes, and visualizing tax liabilities with charts.

## Tech Stack

*   **Frontend**: React
*   **UI Library**: Material-UI (MUI)
*   **Charting**: Chart.js
*   **Build Tool**: Create React App (`react-scripts`)

## Key Commands

*   **Run development server**: `npm start`
*   **Run tests**: `npm test`
*   **Create production build**: `npm run build` (output is directed to the `docs/` folder)

## Conventions & Style Guide

*   **Component Style**: Use functional components with React Hooks. Class components should be refactored when encountered.
*   **UI Components**: Use Material-UI components for all UI elements. Avoid custom components for standard elements like buttons, inputs, and selects.
*   **Build Path**: The production build output is configured to the `docs/` directory, not the standard `build/` directory.

## Workflow & User Preferences

*   **Development Server**: Do not run `npm start` automatically. Please ask for confirmation first.
*   **Committing**: Before committing, run `npm run build` to ensure the production assets in `docs/` are up-to-date.
*   **Committing**: Before committing, run `npm run build` to ensure the production assets in `docs/` are up-to-date.
*   **Commit Messages**: Prefer concise commit messages.
*   **Pushing**: Push changes to the remote repository immediately after a successful commit.
