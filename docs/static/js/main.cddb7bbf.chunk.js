(this.webpackJsonpbrasstax = this.webpackJsonpbrasstax || []).push([
  [0],
  {
    13: function (e, t, a) {},
    14: function (e, t, a) {},
    16: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a(1),
        i = a.n(r),
        n = a(8),
        l = a.n(n),
        c = (a(13), a(2)),
        s = a(3),
        o = a(5),
        u = a(4),
        d = (a(14), a(7));
      function h(e, t, a, r) {
        r < 0 && ((a += r), (r = 0)),
          a < 0 && ((t += Math.max(a, -3e3)), (a = 0));
        var i = (function (e, t, a) {
          var r,
            i = {
              single: [
                { bracketStart: 518400, rate: 0.37, cumulative: 156235 },
                { bracketStart: 207350, rate: 0.35, cumulative: 47367.5 },
                { bracketStart: 163300, rate: 0.32, cumulative: 33271.5 },
                { bracketStart: 85525, rate: 0.24, cumulative: 14605.5 },
                { bracketStart: 40125, rate: 0.22, cumulative: 4617.5 },
                { bracketStart: 9875, rate: 0.12, cumulative: 987.5 },
                { bracketStart: 0, rate: 0.1, cumulative: 0 },
              ],
              "married-filing-jointly": [
                { bracketStart: 622050, rate: 0.37, cumulative: 167307.5 },
                { bracketStart: 414700, rate: 0.35, cumulative: 94735 },
                { bracketStart: 326600, rate: 0.32, cumulative: 66543 },
                { bracketStart: 171050, rate: 0.24, cumulative: 29211 },
                { bracketStart: 80250, rate: 0.22, cumulative: 9235 },
                { bracketStart: 19750, rate: 0.12, cumulative: 1975 },
                { bracketStart: 0, rate: 0.1, cumulative: 0 },
              ],
              "married-filing-separately": [
                { bracketStart: 311025, rate: 0.37, cumulative: 83653.75 },
                { bracketStart: 207350, rate: 0.35, cumulative: 47367.5 },
                { bracketStart: 163300, rate: 0.32, cumulative: 33271.5 },
                { bracketStart: 85525, rate: 0.24, cumulative: 14605.5 },
                { bracketStart: 40125, rate: 0.22, cumulative: 4617.5 },
                { bracketStart: 9875, rate: 0.12, cumulative: 987.5 },
                { bracketStart: 0, rate: 0.1, cumulative: 0 },
              ],
              "head-of-household": [
                { bracketStart: 518400, rate: 0.37, cumulative: 154793.5 },
                { bracketStart: 207350, rate: 0.35, cumulative: 45926 },
                { bracketStart: 163300, rate: 0.32, cumulative: 31830 },
                { bracketStart: 85500, rate: 0.24, cumulative: 13158 },
                { bracketStart: 53700, rate: 0.22, cumulative: 6162 },
                { bracketStart: 14100, rate: 0.12, cumulative: 1410 },
                { bracketStart: 0, rate: 0.1, cumulative: 0 },
              ],
            }[e],
            n = t + a,
            l = 0,
            c = Object(d.a)(i);
          try {
            for (c.s(); !(r = c.n()).done; ) {
              var s = r.value;
              if (!(n < s.bracketStart)) {
                (l += s.cumulative), (l += (n - s.bracketStart) * s.rate);
                break;
              }
            }
          } catch (o) {
            c.e(o);
          } finally {
            c.f();
          }
          return l;
        })(e, t, a);
        return (
          (i += (function (e, t, a, r) {
            var i,
              n = {
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
              }[e],
              l = t + a,
              c = 0,
              s = r,
              o = Object(d.a)(n);
            try {
              for (o.s(); !(i = o.n()).done; ) {
                var u = i.value;
                if (!(u.bracketEnd < t + a)) {
                  var h = Math.min(s, u.bracketEnd - l);
                  (c += h * u.rate), (s -= h), (l += h);
                }
              }
            } catch (b) {
              o.e(b);
            } finally {
              o.f();
            }
            return c;
          })(e, t, a, r)),
          (i += (function (e) {
            return 0.062 * Math.min(e, 142800);
          })(t)),
          (i += (function (e, t) {
            var a = "married-jointly" === e ? 25e4 : 2e5,
              r = Math.max(0, t - a);
            return 0.0145 * t + 0.009 * r;
          })(e, t)),
          (i += (function (e, t, a) {
            var r = {
              single: 2e5,
              "married-filing-jointly": 25e4,
              "married-filing-separately": 125e3,
              "head-of-household": 2e5,
            }[e];
            return 0.038 * Math.max(0, Math.min(t + a - r, a));
          })(e, t, a + r))
        );
      }
      var b = a(0),
        j = (function (e) {
          Object(o.a)(a, e);
          var t = Object(u.a)(a);
          function a() {
            return Object(c.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(s.a)(a, [
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
        })(i.a.Component),
        g = (function (e) {
          Object(o.a)(a, e);
          var t = Object(u.a)(a);
          function a() {
            return Object(c.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(s.a)(a, [
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
        })(i.a.Component),
        v = (function (e) {
          Object(o.a)(a, e);
          var t = Object(u.a)(a);
          function a() {
            return Object(c.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(s.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(b.jsxs)("div", {
                    children: [
                      Object(b.jsx)("label", {
                        children: this.props.label + ": ",
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
        })(i.a.Component),
        O = (function (e) {
          Object(o.a)(a, e);
          var t = Object(u.a)(a);
          function a() {
            return Object(c.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(s.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(b.jsxs)("div", {
                    children: [
                      Object(b.jsx)("label", {
                        children: this.props.label + ": ",
                      }),
                      Object(b.jsx)("span", { children: this.props.value }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(i.a.Component),
        m = (function (e) {
          Object(o.a)(a, e);
          var t = Object(u.a)(a);
          function a(e) {
            var r;
            return (
              Object(c.a)(this, a),
              ((r = t.call(this, e)).state = {
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
              r
            );
          }
          return (
            Object(s.a)(a, [
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
                    r = e * this.state.longTermCapitalGains;
                  this.setState({
                    annualizedIncome: t + Math.max(a + r, -3e3),
                  }),
                    this.setState({
                      obligationBasedOnCurrentYear:
                        0.9 * h(this.state.filingStatus, t, a, r),
                    });
                },
              },
              {
                key: "_calculateObligationDuringTimePeriod",
                value: function () {
                  var e = [0.25, 0.5, 0.75, 1][this.state.timePeriod];
                  return (
                    Math.min(
                      this.state.obligationBasedOnPriorYear,
                      this.state.obligationBasedOnCurrentYear
                    ) * e
                  );
                },
              },
              {
                key: "_calculateTaxesOwed",
                value: function () {
                  return (
                    this._calculateObligationDuringTimePeriod() -
                    this.state.withholdings
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(b.jsxs)("div", {
                    className: "App App-header",
                    children: [
                      Object(b.jsx)("div", {
                        className: "row",
                        children: Object(b.jsxs)("div", {
                          className: "bordered",
                          children: [
                            Object(b.jsx)(j, {
                              onChange: function (t) {
                                return e.handleFilingStatusChange(t);
                              },
                            }),
                            Object(b.jsx)(g, {
                              onChange: function (t) {
                                return e.handleTimePeriodChange(t);
                              },
                            }),
                          ],
                        }),
                      }),
                      Object(b.jsx)("div", {
                        className: "row",
                        children: Object(b.jsxs)("div", {
                          className: "column",
                          children: [
                            Object(b.jsxs)("div", {
                              className: "row",
                              children: [
                                Object(b.jsxs)("div", {
                                  className: "bordered",
                                  children: [
                                    Object(b.jsx)(v, {
                                      label: "Ordinary Income",
                                      onChange: function (t) {
                                        return e.handleOrdinaryIncomeChange(t);
                                      },
                                    }),
                                    Object(b.jsx)(v, {
                                      label: "Short Term Capital Gains",
                                      onChange: function (t) {
                                        return e.handleShortTermCapitalGainsChange(
                                          t
                                        );
                                      },
                                    }),
                                    Object(b.jsx)(v, {
                                      label: "Long Term Capital Gains",
                                      onChange: function (t) {
                                        return e.handleLongTermCapitalGainsChange(
                                          t
                                        );
                                      },
                                    }),
                                  ],
                                }),
                                Object(b.jsxs)("div", {
                                  className: "bordered",
                                  children: [
                                    Object(b.jsx)(O, {
                                      label: "Annualized Income",
                                      value: this.state.annualizedIncome.toFixed(
                                        2
                                      ),
                                    }),
                                    Object(b.jsx)(O, {
                                      label: "Obligation based on current year",
                                      value: this.state.obligationBasedOnCurrentYear.toFixed(
                                        2
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(b.jsxs)("div", {
                              className: "row",
                              children: [
                                Object(b.jsxs)("div", {
                                  className: "bordered",
                                  children: [
                                    Object(b.jsx)(v, {
                                      label: "Prior Year AGI",
                                      onChange: function (t) {
                                        return e.handlePriorYearAgiChange(t);
                                      },
                                    }),
                                    Object(b.jsx)(v, {
                                      label: "Prior Year Tax",
                                      onChange: function (t) {
                                        return e.handlePriorYearTaxChange(t);
                                      },
                                    }),
                                  ],
                                }),
                                Object(b.jsx)("div", {
                                  className: "bordered",
                                  children: Object(b.jsx)(O, {
                                    label: "Obligation based on prior year",
                                    value: this.state.obligationBasedOnPriorYear.toFixed(
                                      2
                                    ),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(b.jsx)("div", {
                        className: "row",
                        children: Object(b.jsxs)("div", {
                          className: "bordered",
                          children: [
                            Object(b.jsx)(O, {
                              label: "Annualized Obligation",
                              value: Math.min(
                                this.state.obligationBasedOnPriorYear,
                                this.state.obligationBasedOnCurrentYear
                              ).toFixed(2),
                            }),
                            Object(b.jsx)(O, {
                              label: "Obligation in time period",
                              value: this._calculateObligationDuringTimePeriod().toFixed(
                                2
                              ),
                            }),
                            Object(b.jsx)(v, {
                              label: "Withholdings",
                              onChange: function (t) {
                                return e.handleWithholdingsChange(t);
                              },
                            }),
                            Object(b.jsx)(O, {
                              label: "Taxes Owed",
                              value: this._calculateTaxesOwed().toFixed(2),
                            }),
                          ],
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(i.a.Component),
        f = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 17))
              .then(function (t) {
                var a = t.getCLS,
                  r = t.getFID,
                  i = t.getFCP,
                  n = t.getLCP,
                  l = t.getTTFB;
                a(e), r(e), i(e), n(e), l(e);
              });
        };
      l.a.render(
        Object(b.jsx)(i.a.StrictMode, { children: Object(b.jsx)(m, {}) }),
        document.getElementById("root")
      ),
        f();
    },
  },
  [[16, 1, 2]],
]);
//# sourceMappingURL=main.cddb7bbf.chunk.js.map
