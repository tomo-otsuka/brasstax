import "./App.css";
import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { EstimatedTaxes } from "./components/EstimatedTaxes.jsx";
import { TaxChart } from "./components/TaxChart.jsx";
import { MarriagePenalty } from "./components/MarriagePenalty";
import { StateTaxComparison } from "./components/StateTaxComparison.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="row">
          <div className="nav">
            <nav>
              <ul>
                <li>
                  <Link to="/brasstax/estimated-taxes">Estimated Taxes</Link>
                </li>
                <li>
                  <Link to="/brasstax/tax-chart">Tax Chart</Link>
                </li>
                <li>
                  <Link to="/brasstax/marriage-penalty">Marriage Penalty</Link>
                </li>
                <li>
                  <Link to="/brasstax/state-tax-comparison">State Tax Comparison</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="main">
            <Switch>
              <Route path="/brasstax/estimated-taxes">
                <EstimatedTaxes />
              </Route>
              <Route path="/brasstax/tax-chart">
                <TaxChart />
              </Route>
              <Route path="/brasstax/marriage-penalty">
                <MarriagePenalty />
              </Route>
              <Route path="/brasstax/state-tax-comparison">
                <StateTaxComparison />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
