(this.webpackJsonpbrasstax = this.webpackJsonpbrasstax || []).push([
  [0],
  {
    32: function (t, e, a) {},
    33: function (t, e, a) {},
    43: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(1),
        r = a.n(n),
        i = a(26),
        c = a.n(i),
        l = (a(32), a(3)),
        s = a(4),
        u = a(6),
        o = a(5),
        d = (a(33), a(21)),
        b = a(8),
        m = a(13),
        h = a(2),
        j = a(0);
      function O(t) {
        var e = t.selectOptions.map(function (t) {
          return Object(j.jsx)("option", {
            value: t.name,
            children: t.readable,
          });
        });
        return Object(j.jsxs)("div", {
          children: [
            Object(j.jsxs)("label", { children: [t.label, ": "] }),
            Object(j.jsx)("select", { onInput: t.onInput, children: e }),
          ],
        });
      }
      function v(t) {
        return Object(j.jsxs)("div", {
          children: [
            Object(j.jsx)("input", {
              type: "checkbox",
              checked: t.checked,
              onInput: t.onInput,
            }),
            Object(j.jsx)("label", { children: t.label }),
          ],
        });
      }
      function x(t) {
        var e = Object(n.useState)(""),
          a = Object(m.a)(e, 2),
          r = a[0],
          i = a[1];
        return Object(j.jsxs)("div", {
          children: [
            Object(j.jsx)("label", { children: t.label + ": " }),
            Object(j.jsx)("input", {
              type: "text",
              onInput: function (e) {
                var a = e.target.value;
                a.match(/[^\d\.\-]/) && (a = a.replace(/[^\d\.\-]/g, "")),
                  i(a),
                  t.onInput(a);
              },
              disabled: t.disabled,
              value: r,
            }),
          ],
        });
      }
      function I(t) {
        return Object(j.jsxs)("div", {
          children: [
            Object(j.jsx)("label", { children: t.label + ": " }),
            Object(j.jsx)("span", { children: t.value }),
          ],
        });
      }
      var S,
        f,
        p,
        k,
        A = Object.freeze({
          FEDERAL: { name: "federal", readable: "Federal" },
          CALIFORNIA: { name: "california", readable: "CA" },
        }),
        g = Object.freeze({
          SINGLE: { name: "single", readable: "Single" },
          MARRIED_FILING_JOINTLY: {
            name: "married-filing-jointly",
            readable: "Married Filing Jointly",
          },
          MARRIED_FILING_SEPARATELY: {
            name: "married-filing-separately",
            readable: "Married Filing Separately",
          },
          HEAD_OF_HOUSEHOLD: {
            name: "head-of-household",
            readable: "Head of Household",
          },
        }),
        T = Object.freeze({
          FIRST: { name: 0, readable: "1/1 - 3/31" },
          SECOND: { name: 1, readable: "1/1 - 5/31" },
          THIRD: { name: 2, readable: "1/1 - 8/31" },
          FOURTH: { name: 3, readable: "1/1 - 12/31" },
        }),
        E = Object.freeze({
          STANDARD: { name: "standard", readable: "Standard" },
          ITEMIZED: { name: "itemized", readable: "Itemized" },
        }),
        _ = a(7),
        y = new Set([A.CALIFORNIA.name]),
        C =
          ((S = {}),
          Object(h.a)(S, g.SINGLE.name, [
            { bracketStart: 518400, rate: 0.37, cumulative: 156235 },
            { bracketStart: 207350, rate: 0.35, cumulative: 47367.5 },
            { bracketStart: 163300, rate: 0.32, cumulative: 33271.5 },
            { bracketStart: 85525, rate: 0.24, cumulative: 14605.5 },
            { bracketStart: 40125, rate: 0.22, cumulative: 4617.5 },
            { bracketStart: 9875, rate: 0.12, cumulative: 987.5 },
            { bracketStart: 0, rate: 0.1, cumulative: 0 },
          ]),
          Object(h.a)(S, g.MARRIED_FILING_JOINTLY.name, [
            { bracketStart: 622050, rate: 0.37, cumulative: 167307.5 },
            { bracketStart: 414700, rate: 0.35, cumulative: 94735 },
            { bracketStart: 326600, rate: 0.32, cumulative: 66543 },
            { bracketStart: 171050, rate: 0.24, cumulative: 29211 },
            { bracketStart: 80250, rate: 0.22, cumulative: 9235 },
            { bracketStart: 19750, rate: 0.12, cumulative: 1975 },
            { bracketStart: 0, rate: 0.1, cumulative: 0 },
          ]),
          Object(h.a)(S, g.MARRIED_FILING_SEPARATELY.name, [
            { bracketStart: 311025, rate: 0.37, cumulative: 83653.75 },
            { bracketStart: 207350, rate: 0.35, cumulative: 47367.5 },
            { bracketStart: 163300, rate: 0.32, cumulative: 33271.5 },
            { bracketStart: 85525, rate: 0.24, cumulative: 14605.5 },
            { bracketStart: 40125, rate: 0.22, cumulative: 4617.5 },
            { bracketStart: 9875, rate: 0.12, cumulative: 987.5 },
            { bracketStart: 0, rate: 0.1, cumulative: 0 },
          ]),
          Object(h.a)(S, g.HEAD_OF_HOUSEHOLD.name, [
            { bracketStart: 518400, rate: 0.37, cumulative: 154793.5 },
            { bracketStart: 207350, rate: 0.35, cumulative: 45926 },
            { bracketStart: 163300, rate: 0.32, cumulative: 31830 },
            { bracketStart: 85500, rate: 0.24, cumulative: 13158 },
            { bracketStart: 53700, rate: 0.22, cumulative: 6162 },
            { bracketStart: 14100, rate: 0.12, cumulative: 1410 },
            { bracketStart: 0, rate: 0.1, cumulative: 0 },
          ]),
          S),
        N =
          ((f = {}),
          Object(h.a)(f, g.SINGLE.name, [
            { bracketStart: 1e6, rate: 0.133, cumulative: 107549.37 },
            { bracketStart: 599012, rate: 0.123, cumulative: 58227.85 },
            { bracketStart: 359407, rate: 0.113, cumulative: 31152.48 },
            { bracketStart: 299508, rate: 0.103, cumulative: 24982.88 },
            { bracketStart: 58634, rate: 0.093, cumulative: 2581.6 },
            { bracketStart: 46394, rate: 0.08, cumulative: 1602.4 },
            { bracketStart: 33421, rate: 0.06, cumulative: 824.02 },
            { bracketStart: 21175, rate: 0.04, cumulative: 334.18 },
            { bracketStart: 8932, rate: 0.02, cumulative: 89.32 },
            { bracketStart: 0, rate: 0.01, cumulative: 0 },
          ]),
          Object(h.a)(f, g.MARRIED_FILING_JOINTLY.name, [
            { bracketStart: 1198024, rate: 0.133, cumulative: 118435.92 },
            { bracketStart: 1e6, rate: 0.123, cumulative: 94078.97 },
            { bracketStart: 718814, rate: 0.113, cumulative: 62304.95 },
            { bracketStart: 599016, rate: 0.103, cumulative: 49965.76 },
            { bracketStart: 117268, rate: 0.093, cumulative: 5163.2 },
            { bracketStart: 92788, rate: 0.08, cumulative: 3204.8 },
            { bracketStart: 66842, rate: 0.06, cumulative: 1648.04 },
            { bracketStart: 42350, rate: 0.04, cumulative: 668.36 },
            { bracketStart: 17864, rate: 0.02, cumulative: 178.64 },
            { bracketStart: 0, rate: 0.01, cumulative: 0 },
          ]),
          Object(h.a)(f, g.MARRIED_FILING_SEPARATELY.name, [
            { bracketStart: 1e6, rate: 0.133, cumulative: 107549.37 },
            { bracketStart: 599012, rate: 0.123, cumulative: 58227.85 },
            { bracketStart: 359407, rate: 0.113, cumulative: 31152.48 },
            { bracketStart: 299508, rate: 0.103, cumulative: 24982.88 },
            { bracketStart: 58634, rate: 0.093, cumulative: 2581.6 },
            { bracketStart: 46394, rate: 0.08, cumulative: 1602.4 },
            { bracketStart: 33421, rate: 0.06, cumulative: 824.02 },
            { bracketStart: 21175, rate: 0.04, cumulative: 334.18 },
            { bracketStart: 8932, rate: 0.02, cumulative: 89.32 },
            { bracketStart: 0, rate: 0.01, cumulative: 0 },
          ]),
          Object(h.a)(f, g.HEAD_OF_HOUSEHOLD.name, [
            { bracketStart: 1e6, rate: 0.133, cumulative: 101385.48 },
            { bracketStart: 814658, rate: 0.123, cumulative: 78588.41 },
            { bracketStart: 488796, rate: 0.113, cumulative: 41776 },
            { bracketStart: 407329, rate: 0.103, cumulative: 33374.9 },
            { bracketStart: 79812, rate: 0.093, cumulative: 2915.82 },
            { bracketStart: 67569, rate: 0.08, cumulative: 1936.38 },
            { bracketStart: 54597, rate: 0.06, cumulative: 1158.06 },
            { bracketStart: 42353, rate: 0.04, cumulative: 668.3 },
            { bracketStart: 17876, rate: 0.02, cumulative: 178.76 },
            { bracketStart: 0, rate: 0.01, cumulative: 0 },
          ]),
          f),
        L =
          ((p = {}),
          Object(h.a)(p, A.FEDERAL.name, C),
          Object(h.a)(p, A.CALIFORNIA.name, N),
          p),
        R =
          ((k = {}),
          Object(h.a)(k, g.SINGLE.name, [
            { bracketEnd: 40400, rate: 0 },
            { bracketEnd: 445850, rate: 0.15 },
            { bracketEnd: 1 / 0, rate: 0.2 },
          ]),
          Object(h.a)(k, g.MARRIED_FILING_JOINTLY.name, [
            { bracketEnd: 80800, rate: 0 },
            { bracketEnd: 501600, rate: 0.15 },
            { bracketEnd: 1 / 0, rate: 0.2 },
          ]),
          Object(h.a)(k, g.MARRIED_FILING_SEPARATELY.name, [
            { bracketEnd: 40400, rate: 0 },
            { bracketEnd: 250800, rate: 0.15 },
            { bracketEnd: 1 / 0, rate: 0.2 },
          ]),
          Object(h.a)(k, g.HEAD_OF_HOUSEHOLD.name, [
            { bracketEnd: 54100, rate: 0 },
            { bracketEnd: 473750, rate: 0.15 },
            { bracketEnd: 1 / 0, rate: 0.2 },
          ]),
          k);
      function D(t, e, a, n, r, i, c) {
        return (
          r < 0 && ((n += r), (r = 0)),
          n < 0 && ((a += Math.max(n, -3e3)), (n = 0)),
          (a -= F(t, e, i, c)) < 0 && (n += a),
          n < 0 && (r += n),
          [(a = Math.max(0, a)), (n = Math.max(0, n)), (r = Math.max(0, r))]
        );
      }
      function F(t, e, a, n) {
        var r = 0;
        return (
          a === E.STANDARD.name
            ? (r = (function (t, e) {
                var a, n, r;
                return ((r = {}),
                Object(h.a)(
                  r,
                  A.FEDERAL.name,
                  ((a = {}),
                  Object(h.a)(a, g.SINGLE.name, 12400),
                  Object(h.a)(a, g.MARRIED_FILING_JOINTLY.name, 25100),
                  Object(h.a)(a, g.MARRIED_FILING_SEPARATELY.name, 12550),
                  Object(h.a)(a, g.HEAD_OF_HOUSEHOLD.name, 18800),
                  a)
                ),
                Object(h.a)(
                  r,
                  A.CALIFORNIA.name,
                  ((n = {}),
                  Object(h.a)(n, g.SINGLE.name, 4601),
                  Object(h.a)(n, g.MARRIED_FILING_JOINTLY.name, 9202),
                  Object(h.a)(n, g.MARRIED_FILING_SEPARATELY.name, 4601),
                  Object(h.a)(n, g.HEAD_OF_HOUSEHOLD.name, 9202),
                  n)
                ),
                r)[t][e];
              })(t, e))
            : a === E.ITEMIZED.name && (r = n),
          r
        );
      }
      function G(t, e, a, n, r) {
        var i = L[t][e],
          c = a + n;
        y.has(t) && (c += r);
        var l,
          s = 0,
          u = Object(_.a)(i);
        try {
          for (u.s(); !(l = u.n()).done; ) {
            var o = l.value;
            if (!(c < o.bracketStart)) {
              (s += o.cumulative), (s += (c - o.bracketStart) * o.rate);
              break;
            }
          }
        } catch (d) {
          u.e(d);
        } finally {
          u.f();
        }
        return s;
      }
      function M(t, e, a, n, r) {
        if (y.has(t)) return 0;
        var i,
          c = R[e],
          l = a + n,
          s = 0,
          u = r,
          o = Object(_.a)(c);
        try {
          for (o.s(); !(i = o.n()).done; ) {
            var d = i.value;
            if (!(d.bracketEnd < a + n)) {
              var b = Math.min(u, d.bracketEnd - l);
              (s += b * d.rate), (u -= b), (l += b);
            }
          }
        } catch (m) {
          o.e(m);
        } finally {
          o.f();
        }
        return s;
      }
      function z(t, e) {
        var a = t === g.MARRIED_FILING_JOINTLY.name ? 25e4 : 2e5;
        return 0.009 * Math.max(0, e - a);
      }
      function P(t, e, a) {
        var n,
          r = ((n = {}),
          Object(h.a)(n, g.SINGLE.name, 2e5),
          Object(h.a)(n, g.MARRIED_FILING_JOINTLY.name, 25e4),
          Object(h.a)(n, g.MARRIED_FILING_SEPARATELY.name, 125e3),
          Object(h.a)(n, g.HEAD_OF_HOUSEHOLD.name, 2e5),
          n)[t];
        return 0.038 * Math.max(0, Math.min(e + a - r, a));
      }
      var Y = (function (t) {
          Object(u.a)(a, t);
          var e = Object(o.a)(a);
          function a(t) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = e.call(this, t)).state = {
                jurisdiction: A.FEDERAL.name,
                filingStatus: g.SINGLE.name,
                timePeriod: T.FIRST.name,
                ordinaryIncome: 0,
                shortTermCapitalGains: 0,
                longTermCapitalGains: 0,
                deductionType: E.STANDARD.name,
                itemizedDeductions: 0,
                taxCreditsAnnual: 0,
                includePriorYearCalculation: !1,
                priorYearAgi: 0,
                priorYearTax: 0,
                withholding: 0,
              }),
              n
            );
          }
          return (
            Object(s.a)(a, [
              {
                key: "handleStateChange",
                value: function (t, e) {
                  t in this.state
                    ? this.setState(Object(h.a)({}, t, e))
                    : alert("incorrect state variable: ".concat(t));
                },
              },
              {
                key: "_calculateObligationBasedOnPriorYear",
                value: function () {
                  var t =
                      this.state.filingStatus !==
                      g.MARRIED_FILING_SEPARATELY.name
                        ? 15e4
                        : 75e3,
                    e = this.state.priorYearAgi <= t ? 1 : 1.1;
                  return this.state.priorYearTax * e;
                },
              },
              {
                key: "_calculateAnnualizedIncome",
                value: function () {
                  var t = [4, 2.4, 1.5, 1][this.state.timePeriod],
                    e = t * this.state.ordinaryIncome,
                    a = t * this.state.shortTermCapitalGains,
                    n = t * this.state.longTermCapitalGains;
                  return e + Math.max(a + n, -3e3);
                },
              },
              {
                key: "_calculateTotalTaxBasedOnAnnualizedIncome",
                value: function () {
                  var t = [4, 2.4, 1.5, 1][this.state.timePeriod],
                    e = t * this.state.ordinaryIncome,
                    a = t * this.state.shortTermCapitalGains,
                    n = t * this.state.longTermCapitalGains;
                  return (function (t, e, a, n, r, i, c, l) {
                    var s = D(t, e, a, n, r, i, c),
                      u = Object(m.a)(s, 3),
                      o = G(t, e, (a = u[0]), (n = u[1]), (r = u[2]));
                    return (
                      (o += M(t, e, a, n, r)),
                      t === A.FEDERAL.name &&
                        ((o += z(e, a)), (o += P(e, a, n + r))),
                      (o -= l),
                      Math.max(0, o)
                    );
                  })(
                    this.state.jurisdiction,
                    this.state.filingStatus,
                    e,
                    a,
                    n,
                    this.state.deductionType,
                    t * this.state.itemizedDeductions,
                    this.state.taxCreditsAnnual
                  );
                },
              },
              {
                key: "_calculateAnnualizedAdjustedIncomes",
                value: function () {
                  var t = [4, 2.4, 1.5, 1][this.state.timePeriod],
                    e = t * this.state.ordinaryIncome,
                    a = t * this.state.shortTermCapitalGains,
                    n = t * this.state.longTermCapitalGains,
                    r = t * this.state.itemizedDeductions;
                  return D(
                    this.state.jurisdiction,
                    this.state.filingStatus,
                    e,
                    a,
                    n,
                    this.state.deductionType,
                    r
                  );
                },
              },
              {
                key: "_calculateDeduction",
                value: function () {
                  var t =
                    [4, 2.4, 1.5, 1][this.state.timePeriod] *
                    this.state.itemizedDeductions;
                  return F(
                    this.state.jurisdiction,
                    this.state.filingStatus,
                    this.state.deductionType,
                    t
                  );
                },
              },
              {
                key: "_calculateIncomeTax",
                value: function () {
                  var t = this._calculateAnnualizedAdjustedIncomes(),
                    e = Object(m.a)(t, 3),
                    a = e[0],
                    n = e[1],
                    r = e[2];
                  return G(
                    this.state.jurisdiction,
                    this.state.filingStatus,
                    a,
                    n,
                    r
                  );
                },
              },
              {
                key: "_calculateLongTermCapitalGainsTax",
                value: function () {
                  var t = this._calculateAnnualizedAdjustedIncomes(),
                    e = Object(m.a)(t, 3),
                    a = e[0],
                    n = e[1],
                    r = e[2];
                  return M(
                    this.state.jurisdiction,
                    this.state.filingStatus,
                    a,
                    n,
                    r
                  );
                },
              },
              {
                key: "_calculateAdditionalMedicareTax",
                value: function () {
                  var t = this._calculateAnnualizedAdjustedIncomes(),
                    e = Object(m.a)(t, 3),
                    a = e[0];
                  e[1], e[2];
                  return z(this.state.filingStatus, a);
                },
              },
              {
                key: "_calculateNetInvestmentIncomeTax",
                value: function () {
                  var t = this._calculateAnnualizedAdjustedIncomes(),
                    e = Object(m.a)(t, 3),
                    a = e[0],
                    n = e[1],
                    r = e[2];
                  return P(this.state.filingStatus, a, n + r);
                },
              },
              {
                key: "_calculateObligationBasedOnAnnualizedIncome",
                value: function () {
                  return 0.9 * this._calculateTotalTaxBasedOnAnnualizedIncome();
                },
              },
              {
                key: "_calculateObligationDuringTimePeriod",
                value: function () {
                  var t = [0.25, 0.5, 0.75, 1];
                  this.state.jurisdiction === A.CALIFORNIA.name &&
                    (t = [0.3, 0.7, 0.7, 1]);
                  var e = t[this.state.timePeriod];
                  return this._calculateAnnualizedObligation() * e;
                },
              },
              {
                key: "_calculateTaxesOwed",
                value: function () {
                  return (
                    this._calculateObligationDuringTimePeriod() -
                    this.state.withholding
                  );
                },
              },
              {
                key: "_calculateAnnualizedObligation",
                value: function () {
                  var t = [this._calculateObligationBasedOnAnnualizedIncome()];
                  return (
                    this.state.includePriorYearCalculation &&
                      ((this.state.jurisdiction === A.CALIFORNIA.name &&
                        this._calculateAnnualizedIncome() > 1e6) ||
                        t.push(this._calculateObligationBasedOnPriorYear())),
                    Math.min.apply(Math, t)
                  );
                },
              },
              {
                key: "_calculateAnnualizedEffectiveTaxRate",
                value: function () {
                  return (
                    this._calculateTotalTaxBasedOnAnnualizedIncome() /
                      this._calculateAnnualizedIncome() || 0
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this;
                  return Object(j.jsxs)("div", {
                    className: "App App-header",
                    children: [
                      Object(j.jsx)("div", {
                        className: "row",
                        children: Object(j.jsxs)("div", {
                          className: "bordered",
                          children: [
                            Object(j.jsx)(O, {
                              onInput: function (e) {
                                return t.handleStateChange(
                                  "jurisdiction",
                                  e.target.value
                                );
                              },
                              label: "Jurisdiction",
                              selectOptions: Object.values(A),
                            }),
                            Object(j.jsx)(O, {
                              onInput: function (e) {
                                return t.handleStateChange(
                                  "filingStatus",
                                  e.target.value
                                );
                              },
                              label: "Filing Status",
                              selectOptions: Object.values(g),
                            }),
                            Object(j.jsx)(O, {
                              onInput: function (e) {
                                return t.handleStateChange(
                                  "timePeriod",
                                  e.target.value
                                );
                              },
                              label: "Time Period",
                              selectOptions: Object.values(T),
                            }),
                          ],
                        }),
                      }),
                      Object(j.jsx)("div", {
                        className: "row",
                        children: Object(j.jsxs)("div", {
                          className: "column",
                          children: [
                            Object(j.jsxs)("div", {
                              className: "row",
                              children: [
                                Object(j.jsxs)("div", {
                                  className: "bordered",
                                  children: [
                                    Object(j.jsx)(x, {
                                      label: "Ordinary Income",
                                      onInput: function (e) {
                                        return t.handleStateChange(
                                          "ordinaryIncome",
                                          e
                                        );
                                      },
                                    }),
                                    Object(j.jsx)(x, {
                                      label: "Short Term Capital Gains",
                                      onInput: function (e) {
                                        return t.handleStateChange(
                                          "shortTermCapitalGains",
                                          e
                                        );
                                      },
                                    }),
                                    Object(j.jsx)(x, {
                                      label: "Long Term Capital Gains",
                                      onInput: function (e) {
                                        return t.handleStateChange(
                                          "longTermCapitalGains",
                                          e
                                        );
                                      },
                                    }),
                                    Object(j.jsx)(O, {
                                      onInput: function (e) {
                                        return t.handleStateChange(
                                          "deductionType",
                                          e.target.value
                                        );
                                      },
                                      label: "Deduction Type",
                                      selectOptions: Object.values(E),
                                    }),
                                    "itemized" === this.state.deductionType &&
                                      Object(j.jsx)(x, {
                                        label: "Itemized Deductions",
                                        onInput: function (e) {
                                          return t.handleStateChange(
                                            "itemizedDeductions",
                                            e
                                          );
                                        },
                                      }),
                                    Object(j.jsx)(x, {
                                      label: "Tax Credits (Annual)",
                                      onInput: function (e) {
                                        return t.handleStateChange(
                                          "taxCreditsAnnual",
                                          e
                                        );
                                      },
                                    }),
                                  ],
                                }),
                                Object(j.jsxs)("div", {
                                  className: "bordered",
                                  children: [
                                    Object(j.jsx)(I, {
                                      label: "Annualized Income",
                                      value: this._calculateAnnualizedIncome().toFixed(
                                        2
                                      ),
                                    }),
                                    Object(j.jsx)("div", {
                                      className: "small",
                                      children: Object(j.jsx)(I, {
                                        label: "Deduction",
                                        value: this._calculateDeduction().toFixed(
                                          2
                                        ),
                                      }),
                                    }),
                                    this.state.jurisdiction ===
                                      A.FEDERAL.name &&
                                      Object(j.jsxs)("div", {
                                        className: "small",
                                        children: [
                                          Object(j.jsx)(I, {
                                            label: "Income Tax",
                                            value: this._calculateIncomeTax().toFixed(
                                              2
                                            ),
                                          }),
                                          Object(j.jsx)(I, {
                                            label:
                                              "Long Term Capital Gains Tax",
                                            value: this._calculateLongTermCapitalGainsTax().toFixed(
                                              2
                                            ),
                                          }),
                                          Object(j.jsx)(I, {
                                            label: "Additional Medicare Tax",
                                            value: this._calculateAdditionalMedicareTax().toFixed(
                                              2
                                            ),
                                          }),
                                          Object(j.jsx)(I, {
                                            label: "Net Investment Tax",
                                            value: this._calculateNetInvestmentIncomeTax().toFixed(
                                              2
                                            ),
                                          }),
                                        ],
                                      }),
                                    Object(j.jsx)(I, {
                                      label: "Total Tax",
                                      value:
                                        this._calculateTotalTaxBasedOnAnnualizedIncome().toFixed(
                                          2
                                        ) +
                                        " (" +
                                        (
                                          100 *
                                          this._calculateAnnualizedEffectiveTaxRate()
                                        ).toFixed(2) +
                                        "%)",
                                    }),
                                    Object(j.jsx)(I, {
                                      label:
                                        "Obligation based on annualized income",
                                      value: this._calculateObligationBasedOnAnnualizedIncome().toFixed(
                                        2
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(j.jsxs)("div", {
                              className: "row",
                              children: [
                                Object(j.jsxs)("div", {
                                  className: "bordered",
                                  children: [
                                    Object(j.jsx)(v, {
                                      label: "Include prior year calculation",
                                      checked: this.state
                                        .includePriorYearCalculation,
                                      onInput: function (e) {
                                        return t.handleStateChange(
                                          "includePriorYearCalculation",
                                          e.target.checked
                                        );
                                      },
                                    }),
                                    Object(j.jsx)(x, {
                                      label: "Prior Year AGI",
                                      onInput: function (e) {
                                        return t.handleStateChange(
                                          "priorYearAgi",
                                          e
                                        );
                                      },
                                      disabled: !this.state
                                        .includePriorYearCalculation,
                                    }),
                                    Object(j.jsx)(x, {
                                      label: "Prior Year Tax",
                                      onInput: function (e) {
                                        return t.handleStateChange(
                                          "priorYearTax",
                                          e
                                        );
                                      },
                                      disabled: !this.state
                                        .includePriorYearCalculation,
                                    }),
                                  ],
                                }),
                                Object(j.jsx)("div", {
                                  className: "bordered",
                                  children: Object(j.jsx)(I, {
                                    label: "Obligation based on prior year",
                                    value: this._calculateObligationBasedOnPriorYear().toFixed(
                                      2
                                    ),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(j.jsx)("div", {
                        className: "row",
                        children: Object(j.jsxs)("div", {
                          className: "bordered",
                          children: [
                            Object(j.jsx)(I, {
                              label: "Annualized Obligation",
                              value: this._calculateAnnualizedObligation().toFixed(
                                2
                              ),
                            }),
                            Object(j.jsx)(I, {
                              label: "Obligation in time period",
                              value: this._calculateObligationDuringTimePeriod().toFixed(
                                2
                              ),
                            }),
                            Object(j.jsx)(x, {
                              label: "Withholding ($)",
                              onInput: function (e) {
                                return t.handleStateChange("withholding", e);
                              },
                            }),
                            Object(j.jsx)(I, {
                              label: "Taxes Owed",
                              value: this._calculateTaxesOwed().toFixed(2),
                            }),
                          ],
                        }),
                      }),
                      Object(j.jsxs)("span", {
                        className: "footer",
                        children: [
                          "This is not financial advice. ",
                          Object(j.jsx)("br", {}),
                          "This tool is meant to estimate the estimated payments, and is provided without any guarantees. ",
                          Object(j.jsx)("br", {}),
                          "The author is not a CPA nor did any CPA review this. Please use at your own risk. ",
                          Object(j.jsx)("br", {}),
                          "If you would like to inspect the calculations or make any contributions, please review the source code",
                          " ",
                          Object(j.jsx)("a", {
                            href: "https://github.com/tomo-otsuka/brasstax",
                            children: "here",
                          }),
                          ". ",
                          Object(j.jsx)("br", {}),
                          Object(j.jsx)("br", {}),
                          "Privacy: This tool does not collect any sensitive data. ",
                          Object(j.jsx)("br", {}),
                          "In fact, after retrieving the initial static assets to display this page, ",
                          Object(j.jsx)("br", {}),
                          "it does not communicate to a server whatsoever.",
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
        H = a(15);
      H.d.register(H.e, H.c, H.g, H.h, H.f, H.a, H.b, H.j, H.i);
      var w = (function (t) {
          Object(u.a)(a, t);
          var e = Object(o.a)(a);
          function a(t) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = e.call(this, t)).chartRef = r.a.createRef()),
              (n.state = {
                filingStatus: g.SINGLE.name,
                ordinaryIncome: 0,
                shortTermCapitalGains: 0,
                longTermCapitalGains: 0,
                chart: null,
              }),
              n
            );
          }
          return (
            Object(s.a)(a, [
              {
                key: "handleStateChange",
                value: function (t, e) {
                  t in this.state
                    ? this.setState(Object(h.a)({}, t, e))
                    : alert("incorrect state variable: ".concat(t));
                },
              },
              {
                key: "calculateTax",
                value: function (t) {
                  var e = A.FEDERAL.name,
                    a = this.state.filingStatus,
                    n = E.STANDARD.name,
                    r = Math.min(t, this.state.ordinaryIncome),
                    i = Math.max(
                      0,
                      Math.min(t - r, this.state.shortTermCapitalGains)
                    ),
                    c = Math.max(
                      0,
                      Math.min(t - r - i, this.state.longTermCapitalGains)
                    ),
                    l = F(e, a, n, 0),
                    s = Math.max(0, r - l);
                  return {
                    "Federal Income Tax": G(e, a, s, i, c),
                    "Social Security": (function (t) {
                      return 0.062 * Math.min(t, 142800);
                    })(r),
                    Medicare: (function (t, e) {
                      return 0.0145 * e + z(t, e);
                    })(a, r),
                    LTCG: M(e, a, r, i, c),
                    NIIT: P(a, r, i + c),
                    "State Income Tax": G(A.CALIFORNIA.name, a, s, i, c),
                  };
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var t = this.chartRef.current.getContext("2d"),
                    e = new H.d(t, {
                      options: {
                        interaction: { mode: "index", intersect: !1 },
                        scales: {
                          "y-axis": {
                            type: "linear",
                            position: "left",
                            min: "0",
                            max: "0.6",
                            title: { display: !0, text: "Tax Rate" },
                            stacked: !0,
                          },
                          "x-axis": {
                            type: "linear",
                            title: { display: !0, text: "Income" },
                            stacked: !0,
                          },
                        },
                        plugins: {
                          title: {
                            display: !0,
                            text: "Marginal and Effective Tax Rates",
                          },
                        },
                      },
                    });
                  this.setState({ chart: e });
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var t = this,
                    e =
                      Number(this.state.ordinaryIncome) +
                      Number(this.state.shortTermCapitalGains) +
                      Number(this.state.longTermCapitalGains),
                    a = Math.max(1, Math.ceil(e / 100)),
                    n = Array.from(
                      { length: Math.ceil(e / a) },
                      function (t, e) {
                        return e * a;
                      }
                    ),
                    r = n.map(function (e, a) {
                      return (
                        Object.values(t.calculateTax(e)).reduce(function (
                          t,
                          e
                        ) {
                          return t + e;
                        },
                        0) / n[a]
                      );
                    }),
                    i = [];
                  i.push({
                    type: "line",
                    label: "Effective Tax Rate",
                    yAxisID: "y-axis",
                    xAxisID: "x-axis",
                    data: r,
                  });
                  var c,
                    l = {
                      "Federal Income Tax": "51, 153, 51",
                      "Social Security": "100, 242, 175",
                      Medicare: "255, 0, 102",
                      LTCG: "0, 51, 153",
                      NIIT: "0, 142, 175",
                      "State Income Tax": "153, 51, 153",
                    },
                    s = void 0,
                    u = Object(_.a)(n.entries());
                  try {
                    for (u.s(); !(c = u.n()).done; ) {
                      for (
                        var o = Object(m.a)(c.value, 2),
                          d = o[0],
                          b = o[1],
                          h = this.calculateTax(b),
                          j = function () {
                            var t = Object(m.a)(v[O], 2),
                              e = t[0],
                              n = t[1],
                              r = i.findIndex(function (t) {
                                return t.label === e;
                              });
                            -1 === r &&
                              (i.push({
                                type: "bar",
                                label: e,
                                backgroundColor: "rgba(".concat(l[e], ", 0.5)"),
                                borderColor: "rgba(".concat(l[e], ", 1)"),
                                borderWidth: 1,
                                yAxisID: "y-axis",
                                xAxisID: "x-axis",
                                data: [],
                                stacked: !0,
                              }),
                              (r = i.length - 1)),
                              (i[r].data[d] = n - (s ? s[e] : 0)),
                              (i[r].data[d] /= a);
                          },
                          O = 0,
                          v = Object.entries(h);
                        O < v.length;
                        O++
                      )
                        j();
                      s = h;
                    }
                  } catch (x) {
                    u.e(x);
                  } finally {
                    u.f();
                  }
                  (this.state.chart.data.labels = n),
                    (this.state.chart.data.datasets = i),
                    this.state.chart.update("active");
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this;
                  return Object(j.jsxs)("div", {
                    className: "App App-header",
                    children: [
                      Object(j.jsx)(O, {
                        onChange: function (e) {
                          return t.handleStateChange(
                            "filingStatus",
                            e.target.value
                          );
                        },
                        label: "Filing Status",
                        selectOptions: Object.values(g),
                      }),
                      Object(j.jsx)(x, {
                        label: "Ordinary Income",
                        onChange: function (e) {
                          return t.handleStateChange(
                            "ordinaryIncome",
                            e.target.value
                          );
                        },
                      }),
                      Object(j.jsx)(x, {
                        label: "Short Term Capital Gains",
                        onChange: function (e) {
                          return t.handleStateChange(
                            "shortTermCapitalGains",
                            e.target.value
                          );
                        },
                      }),
                      Object(j.jsx)(x, {
                        label: "Long Term Capital Gains",
                        onChange: function (e) {
                          return t.handleStateChange(
                            "longTermCapitalGains",
                            e.target.value
                          );
                        },
                      }),
                      Object(j.jsx)("canvas", {
                        id: "myChart",
                        ref: this.chartRef,
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        B = (function (t) {
          Object(u.a)(a, t);
          var e = Object(o.a)(a);
          function a() {
            return Object(l.a)(this, a), e.apply(this, arguments);
          }
          return (
            Object(s.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(j.jsx)(d.a, {
                    children: Object(j.jsxs)("div", {
                      className: "row",
                      children: [
                        Object(j.jsx)("div", {
                          className: "nav",
                          children: Object(j.jsx)("nav", {
                            children: Object(j.jsxs)("ul", {
                              children: [
                                Object(j.jsx)("li", {
                                  children: Object(j.jsx)(d.b, {
                                    to: "/brasstax/estimated-taxes",
                                    children: "Estimated Taxes",
                                  }),
                                }),
                                Object(j.jsx)("li", {
                                  children: Object(j.jsx)(d.b, {
                                    to: "/brasstax/tax-chart",
                                    children: "Tax Chart",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        Object(j.jsx)("div", {
                          className: "main",
                          children: Object(j.jsxs)(b.c, {
                            children: [
                              Object(j.jsx)(b.a, {
                                path: "/brasstax/estimated-taxes",
                                children: Object(j.jsx)(Y, {}),
                              }),
                              Object(j.jsx)(b.a, {
                                path: "/brasstax/tax-chart",
                                children: Object(j.jsx)(w, {}),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        J = function (t) {
          t &&
            t instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 44))
              .then(function (e) {
                var a = e.getCLS,
                  n = e.getFID,
                  r = e.getFCP,
                  i = e.getLCP,
                  c = e.getTTFB;
                a(t), n(t), r(t), i(t), c(t);
              });
        };
      c.a.render(
        Object(j.jsx)(r.a.StrictMode, { children: Object(j.jsx)(B, {}) }),
        document.getElementById("root")
      ),
        J();
    },
  },
  [[43, 1, 2]],
]);
//# sourceMappingURL=main.f583315a.chunk.js.map
