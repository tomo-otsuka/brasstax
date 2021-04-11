(this.webpackJsonpbrasstax = this.webpackJsonpbrasstax || []).push([
  [0],
  {
    13: function (e, t, a) {},
    14: function (e, t, a) {},
    16: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        r = a.n(n),
        i = a(8),
        c = a.n(i),
        l = (a(13), a(7)),
        u = a(2),
        o = a(3),
        s = a(5),
        h = a(4),
        b = (a(14), a(0)),
        d = (function (e) {
          Object(s.a)(a, e);
          var t = Object(h.a)(a);
          function a() {
            return Object(u.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(b.jsxs)("div", {
                    children: [
                      Object(b.jsx)("label", {
                        for: "filing-status",
                        children: "Filing Status: ",
                      }),
                      Object(b.jsxs)("select", {
                        id: "filing-status",
                        onChange: function (t) {
                          return e.props.onChange(t);
                        },
                        children: [
                          Object(b.jsx)("option", {
                            value: "single",
                            children: "Single",
                          }),
                          Object(b.jsx)("option", {
                            value: "married-filing-jointly",
                            children: "Married Filing Jointly",
                          }),
                          Object(b.jsx)("option", {
                            value: "married-filing-separately",
                            children: "Married Filing Separately",
                          }),
                          Object(b.jsx)("option", {
                            value: "head-of-household",
                            children: "Head of Household",
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        j = (function (e) {
          Object(s.a)(a, e);
          var t = Object(h.a)(a);
          function a() {
            return Object(u.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(b.jsxs)("div", {
                    children: [
                      Object(b.jsx)("label", {
                        for: "time-period",
                        children: "Time Period: ",
                      }),
                      Object(b.jsxs)("select", {
                        id: "time-period",
                        onChange: function (t) {
                          return e.props.onChange(t);
                        },
                        children: [
                          Object(b.jsx)("option", {
                            value: "0",
                            children: "1/1 - 3/31",
                          }),
                          Object(b.jsx)("option", {
                            value: "1",
                            children: "1/1 - 5/31",
                          }),
                          Object(b.jsx)("option", {
                            value: "2",
                            children: "1/1 - 8/31",
                          }),
                          Object(b.jsx)("option", {
                            value: "3",
                            children: "1/1 - 12/31",
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        O = (function (e) {
          Object(s.a)(a, e);
          var t = Object(h.a)(a);
          function a() {
            return Object(u.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(b.jsxs)("div", {
                    children: [
                      Object(b.jsx)("label", {
                        for: "ordinary-income",
                        children: "Ordinary Income: ",
                      }),
                      Object(b.jsx)("input", {
                        type: "text",
                        onChange: function (t) {
                          return e.props.onChange(t);
                        },
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        v = (function (e) {
          Object(s.a)(a, e);
          var t = Object(h.a)(a);
          function a() {
            return Object(u.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(b.jsxs)("div", {
                    children: [
                      Object(b.jsx)("label", {
                        for: "short-term-capital-gains",
                        children: "Short Term Capital Gains: ",
                      }),
                      Object(b.jsx)("input", {
                        type: "text",
                        onChange: function (t) {
                          return e.props.onChange(t);
                        },
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        p = (function (e) {
          Object(s.a)(a, e);
          var t = Object(h.a)(a);
          function a() {
            return Object(u.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(b.jsxs)("div", {
                    children: [
                      Object(b.jsx)("label", {
                        for: "long-term-capital-gains",
                        children: "Long Term Capital Gains: ",
                      }),
                      Object(b.jsx)("input", {
                        type: "text",
                        onChange: function (t) {
                          return e.props.onChange(t);
                        },
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        g = (function (e) {
          Object(s.a)(a, e);
          var t = Object(h.a)(a);
          function a() {
            return Object(u.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(b.jsxs)("div", {
                    children: [
                      Object(b.jsx)("label", {
                        for: "withholdings",
                        children: "Withholdings: ",
                      }),
                      Object(b.jsx)("input", {
                        type: "text",
                        onChange: function (t) {
                          return e.props.onChange(t);
                        },
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        f = (function (e) {
          Object(s.a)(a, e);
          var t = Object(h.a)(a);
          function a() {
            return Object(u.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(b.jsxs)("div", {
                    children: [
                      Object(b.jsx)("label", {
                        for: "prior-year-agi",
                        children: "Prior Year AGI: ",
                      }),
                      Object(b.jsx)("input", {
                        type: "text",
                        onChange: function (t) {
                          return e.props.onChange(t);
                        },
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        m = (function (e) {
          Object(s.a)(a, e);
          var t = Object(h.a)(a);
          function a() {
            return Object(u.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(b.jsxs)("div", {
                    children: [
                      Object(b.jsx)("label", {
                        for: "prior-year-tax",
                        children: "Prior Year Tax: ",
                      }),
                      Object(b.jsx)("input", {
                        type: "text",
                        onChange: function (t) {
                          return e.props.onChange(t);
                        },
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        x = (function (e) {
          Object(s.a)(a, e);
          var t = Object(h.a)(a);
          function a() {
            return Object(u.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(b.jsxs)("div", {
                    children: [
                      Object(b.jsx)("label", {
                        for: "annualized-income",
                        children: "Annualized Income: ",
                      }),
                      Object(b.jsx)("span", {
                        id: "annualized-income",
                        children: this.props.value,
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        y = (function (e) {
          Object(s.a)(a, e);
          var t = Object(h.a)(a);
          function a() {
            return Object(u.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(b.jsxs)("div", {
                    children: [
                      Object(b.jsxs)("label", {
                        for: "obligation-based-on-current-year",
                        children: ["Obligation based on current year:", " "],
                      }),
                      Object(b.jsx)("span", {
                        id: "obligation-based-on-current-year",
                        children: this.props.value,
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        C = (function (e) {
          Object(s.a)(a, e);
          var t = Object(h.a)(a);
          function a() {
            return Object(u.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(b.jsxs)("div", {
                    children: [
                      Object(b.jsxs)("label", {
                        for: "obligation-based-on-prior-year",
                        children: ["Obligation based on prior year:", " "],
                      }),
                      Object(b.jsx)("span", {
                        id: "obligation-based-on-prior-year",
                        children: this.props.value,
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        k = (function (e) {
          Object(s.a)(a, e);
          var t = Object(h.a)(a);
          function a(e) {
            var n;
            return (
              Object(u.a)(this, a),
              ((n = t.call(this, e)).state = {
                filingStatus: "single",
                timePeriod: 0,
                ordinaryIncome: 0,
                shortTermCapitalGains: 0,
                longTermCapitalGains: 0,
                annualizedIncome: 0,
                obligationBasedOnCurrentYear: 0,
                withholdings: 0,
                priorYearAgi: 0,
                priorYearTax: 0,
                obligationBasedOnPriorYear: 0,
              }),
              n
            );
          }
          return (
            Object(o.a)(a, [
              {
                key: "handleFilingStatusChange",
                value: function (e) {
                  this.setState(
                    { filingStatus: e.target.value },
                    this._updateObligationBasedOnCurrentYear
                  );
                },
              },
              {
                key: "handleTimePeriodChange",
                value: function (e) {
                  this.setState(
                    { timePeriod: e.target.value },
                    this._updateObligationBasedOnCurrentYear
                  );
                },
              },
              {
                key: "handleOrdinaryIncomeChange",
                value: function (e) {
                  this.setState(
                    { ordinaryIncome: e.target.value },
                    this._updateObligationBasedOnCurrentYear
                  );
                },
              },
              {
                key: "handleShortTermCapitalGainsChange",
                value: function (e) {
                  this.setState(
                    { shortTermCapitalGains: e.target.value },
                    this._updateObligationBasedOnCurrentYear
                  );
                },
              },
              {
                key: "handleLongTermCapitalGainsChange",
                value: function (e) {
                  this.setState(
                    { longTermCapitalGains: e.target.value },
                    this._updateObligationBasedOnCurrentYear
                  );
                },
              },
              {
                key: "handleWithholdingsChange",
                value: function (e) {
                  this.setState({ withholdings: e.target.value });
                },
              },
              {
                key: "_calculateObligationBasedOnPriorYear",
                value: function (e, t) {
                  return (
                    t *
                    (e <=
                    ("married-filing-separately" !== this.state.filingStatus
                      ? 15e4
                      : 75e3)
                      ? 1
                      : 1.1)
                  );
                },
              },
              {
                key: "handlePriorYearAgiChange",
                value: function (e) {
                  var t = e.target.value,
                    a = this.state.priorYearTax;
                  this.setState({ priorYearAgi: t }),
                    this.setState({
                      obligationBasedOnPriorYear: this._calculateObligationBasedOnPriorYear(
                        t,
                        a
                      ),
                    });
                },
              },
              {
                key: "handlePriorYearTaxChange",
                value: function (e) {
                  var t = this.state.priorYearAgi,
                    a = e.target.value;
                  this.setState({ priorYearTax: a }),
                    this.setState({
                      obligationBasedOnPriorYear: this._calculateObligationBasedOnPriorYear(
                        t,
                        a
                      ),
                    });
                },
              },
              {
                key: "_updateObligationBasedOnCurrentYear",
                value: function () {
                  var e = [4, 2.4, 1.5, 1][this.state.timePeriod],
                    t = e * this.state.ordinaryIncome,
                    a = e * this.state.shortTermCapitalGains,
                    n = e * this.state.longTermCapitalGains;
                  this.setState({ annualizedIncome: t + a + n }),
                    this.setState({
                      obligationBasedOnCurrentYear: this._calculateTax(t, a, n),
                    });
                },
              },
              {
                key: "_calculateTax",
                value: function (e, t, a) {
                  var n = this._calculateIncomeTax(e, t);
                  return (
                    (n += this._calculateLongTermCapitalGainsTax(e, t, a)),
                    (n += this._calculateSocialSecurityTax(e)),
                    (n += this._calculateMedicareTax(e)),
                    (n += this._calculateNetInvestmentIncomeTax(e, t + a))
                  );
                },
              },
              {
                key: "_calculateIncomeTax",
                value: function (e, t) {
                  var a,
                    n = {
                      single: [
                        {
                          bracketStart: 518400,
                          rate: 0.37,
                          cumulative: 156235,
                        },
                        {
                          bracketStart: 207350,
                          rate: 0.35,
                          cumulative: 47367.5,
                        },
                        {
                          bracketStart: 163300,
                          rate: 0.32,
                          cumulative: 33271.5,
                        },
                        {
                          bracketStart: 85525,
                          rate: 0.24,
                          cumulative: 14605.5,
                        },
                        { bracketStart: 40125, rate: 0.22, cumulative: 4617.5 },
                        { bracketStart: 9875, rate: 0.12, cumulative: 987.5 },
                        { bracketStart: 0, rate: 0.1, cumulative: 0 },
                      ],
                      "married-filing-jointly": [
                        {
                          bracketStart: 622050,
                          rate: 0.37,
                          cumulative: 167307.5,
                        },
                        { bracketStart: 414700, rate: 0.35, cumulative: 94735 },
                        { bracketStart: 326600, rate: 0.32, cumulative: 66543 },
                        { bracketStart: 171050, rate: 0.24, cumulative: 29211 },
                        { bracketStart: 80250, rate: 0.22, cumulative: 9235 },
                        { bracketStart: 19750, rate: 0.12, cumulative: 1975 },
                        { bracketStart: 0, rate: 0.1, cumulative: 0 },
                      ],
                      "married-filing-separately": [
                        {
                          bracketStart: 311025,
                          rate: 0.37,
                          cumulative: 83653.75,
                        },
                        {
                          bracketStart: 207350,
                          rate: 0.35,
                          cumulative: 47367.5,
                        },
                        {
                          bracketStart: 163300,
                          rate: 0.32,
                          cumulative: 33271.5,
                        },
                        {
                          bracketStart: 85525,
                          rate: 0.24,
                          cumulative: 14605.5,
                        },
                        { bracketStart: 40125, rate: 0.22, cumulative: 4617.5 },
                        { bracketStart: 9875, rate: 0.12, cumulative: 987.5 },
                        { bracketStart: 0, rate: 0.1, cumulative: 0 },
                      ],
                      "head-of-household": [
                        {
                          bracketStart: 518400,
                          rate: 0.37,
                          cumulative: 154793.5,
                        },
                        { bracketStart: 207350, rate: 0.35, cumulative: 45926 },
                        { bracketStart: 163300, rate: 0.32, cumulative: 31830 },
                        { bracketStart: 85500, rate: 0.24, cumulative: 13158 },
                        { bracketStart: 53700, rate: 0.22, cumulative: 6162 },
                        { bracketStart: 14100, rate: 0.12, cumulative: 1410 },
                        { bracketStart: 0, rate: 0.1, cumulative: 0 },
                      ],
                    }[this.state.filingStatus],
                    r = e + t,
                    i = 0,
                    c = Object(l.a)(n);
                  try {
                    for (c.s(); !(a = c.n()).done; ) {
                      var u = a.value;
                      if (!(r < u.bracketStart)) {
                        (i += u.cumulative),
                          (i += (r - u.bracketStart) * u.rate);
                        break;
                      }
                    }
                  } catch (o) {
                    c.e(o);
                  } finally {
                    c.f();
                  }
                  return i;
                },
              },
              {
                key: "_calculateLongTermCapitalGainsTax",
                value: function (e, t, a) {
                  var n,
                    r = {
                      single: [
                        { bracketEnd: 40400, rate: 0 },
                        { bracketEnd: 445850, rate: 0.15 },
                        { bracketEnd: 1 / 0, rate: 0.2 },
                      ],
                      "married-filing-jointly": [
                        { bracketEnd: 80800, rate: 0 },
                        { bracketEnd: 501600, rate: 0.15 },
                        { bracketEnd: 1 / 0, rate: 0.2 },
                      ],
                      "married-filing-separately": [
                        { bracketEnd: 40400, rate: 0 },
                        { bracketEnd: 250800, rate: 0.15 },
                        { bracketEnd: 1 / 0, rate: 0.2 },
                      ],
                      "head-of-household": [
                        { bracketEnd: 54100, rate: 0 },
                        { bracketEnd: 473750, rate: 0.15 },
                        { bracketEnd: 1 / 0, rate: 0.2 },
                      ],
                    }[this.state.filingStatus],
                    i = e + t,
                    c = 0,
                    u = a,
                    o = Object(l.a)(r);
                  try {
                    for (o.s(); !(n = o.n()).done; ) {
                      var s = n.value;
                      if (!(s.bracketEnd < e + t)) {
                        var h = Math.min(u, s.bracketEnd - i);
                        (c += h * s.rate), (u -= h), (i += h);
                      }
                    }
                  } catch (b) {
                    o.e(b);
                  } finally {
                    o.f();
                  }
                  return c;
                },
              },
              {
                key: "_calculateSocialSecurityTax",
                value: function (e) {
                  return 0.062 * Math.min(e, 142800);
                },
              },
              {
                key: "_calculateMedicareTax",
                value: function (e) {
                  var t =
                    "married-jointly" === this.state.filingStatus ? 25e4 : 2e5;
                  return 0.0145 * e + 0.009 * Math.max(0, e - t);
                },
              },
              {
                key: "_calculateNetInvestmentIncomeTax",
                value: function (e, t) {
                  var a = {
                    single: 2e5,
                    "married-filing-jointly": 25e4,
                    "married-filing-separately": 125e3,
                    "head-of-household": 2e5,
                  }[this.state.filingStatus];
                  return 0.038 * Math.max(0, Math.min(e + t - a, t));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(b.jsxs)("div", {
                    className: "App App-header",
                    children: [
                      Object(b.jsx)(d, {
                        onChange: function (t) {
                          return e.handleFilingStatusChange(t);
                        },
                      }),
                      Object(b.jsx)(j, {
                        onChange: function (t) {
                          return e.handleTimePeriodChange(t);
                        },
                      }),
                      Object(b.jsx)(O, {
                        onChange: function (t) {
                          return e.handleOrdinaryIncomeChange(t);
                        },
                      }),
                      Object(b.jsx)(v, {
                        onChange: function (t) {
                          return e.handleShortTermCapitalGainsChange(t);
                        },
                      }),
                      Object(b.jsx)(p, {
                        onChange: function (t) {
                          return e.handleLongTermCapitalGainsChange(t);
                        },
                      }),
                      Object(b.jsx)(x, { value: this.state.annualizedIncome }),
                      Object(b.jsx)(y, {
                        value: this.state.obligationBasedOnCurrentYear,
                      }),
                      Object(b.jsx)(f, {
                        onChange: function (t) {
                          return e.handlePriorYearAgiChange(t);
                        },
                      }),
                      Object(b.jsx)(m, {
                        onChange: function (t) {
                          return e.handlePriorYearTaxChange(t);
                        },
                      }),
                      Object(b.jsx)(C, {
                        value: this.state.obligationBasedOnPriorYear,
                      }),
                      Object(b.jsx)(g, {
                        onChange: function (t) {
                          return e.handleWithholdingsChange(t);
                        },
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        S = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 17))
              .then(function (t) {
                var a = t.getCLS,
                  n = t.getFID,
                  r = t.getFCP,
                  i = t.getLCP,
                  c = t.getTTFB;
                a(e), n(e), r(e), i(e), c(e);
              });
        };
      c.a.render(
        Object(b.jsx)(r.a.StrictMode, { children: Object(b.jsx)(k, {}) }),
        document.getElementById("root")
      ),
        S();
    },
  },
  [[16, 1, 2]],
]);
//# sourceMappingURL=main.53d048c0.chunk.js.map
