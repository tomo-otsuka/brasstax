(this.webpackJsonpbrasstax = this.webpackJsonpbrasstax || []).push([
  [0],
  {
    16: function (e, t, a) {},
    17: function (e, t, a) {},
    19: function (e, t, a) {
      "use strict";
      a.r(t);
      var r,
        n,
        i,
        c,
        l = a(2),
        u = a.n(l),
        s = a(11),
        o = a.n(s),
        b = (a(16), a(3)),
        d = a(1),
        m = a(4),
        h = a(5),
        j = a(7),
        O = a(6),
        v = (a(17), a(0)),
        S = (function (e) {
          Object(j.a)(a, e);
          var t = Object(O.a)(a);
          function a() {
            return Object(m.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(h.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.selectOptions.map(function (e) {
                      return Object(v.jsx)("option", {
                        value: e.name,
                        children: e.readable,
                      });
                    });
                  return Object(v.jsxs)("div", {
                    children: [
                      Object(v.jsxs)("label", {
                        children: [this.props.label, ": "],
                      }),
                      Object(v.jsx)("select", {
                        onChange: function (t) {
                          return e.props.onChange(t);
                        },
                        children: t,
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(u.a.Component),
        x = (function (e) {
          Object(j.a)(a, e);
          var t = Object(O.a)(a);
          function a() {
            return Object(m.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(h.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(v.jsxs)("div", {
                    children: [
                      Object(v.jsx)("input", {
                        type: "checkbox",
                        checked: this.props.checked,
                        onChange: function (t) {
                          return e.props.onChange(t);
                        },
                      }),
                      Object(v.jsx)("label", { children: this.props.label }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(u.a.Component),
        I = (function (e) {
          Object(j.a)(a, e);
          var t = Object(O.a)(a);
          function a() {
            return Object(m.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(h.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(v.jsxs)("div", {
                    children: [
                      Object(v.jsx)("label", {
                        children: this.props.label + ": ",
                      }),
                      Object(v.jsx)("input", {
                        type: "text",
                        onChange: function (t) {
                          return e.props.onChange(t);
                        },
                        disabled: this.props.disabled,
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(u.a.Component),
        k = (function (e) {
          Object(j.a)(a, e);
          var t = Object(O.a)(a);
          function a() {
            return Object(m.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(h.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(v.jsxs)("div", {
                    children: [
                      Object(v.jsx)("label", {
                        children: this.props.label + ": ",
                      }),
                      Object(v.jsx)("span", { children: this.props.value }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(u.a.Component),
        g = Object.freeze({
          FEDERAL: { name: "federal", readable: "Federal" },
          CALIFORNIA: { name: "california", readable: "CA" },
        }),
        A = Object.freeze({
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
        f = Object.freeze({
          FIRST: { name: 0, readable: "1/1 - 3/31" },
          SECOND: { name: 1, readable: "1/1 - 5/31" },
          THIRD: { name: 2, readable: "1/1 - 8/31" },
          FOURTH: { name: 3, readable: "1/1 - 12/31" },
        }),
        p = Object.freeze({
          STANDARD: { name: "standard", readable: "Standard" },
          ITEMIZED: { name: "itemized", readable: "Itemized" },
        }),
        T = a(10),
        E = new Set([g.CALIFORNIA.name]),
        _ =
          ((r = {}),
          Object(d.a)(r, A.SINGLE.name, [
            { bracketStart: 518400, rate: 0.37, cumulative: 156235 },
            { bracketStart: 207350, rate: 0.35, cumulative: 47367.5 },
            { bracketStart: 163300, rate: 0.32, cumulative: 33271.5 },
            { bracketStart: 85525, rate: 0.24, cumulative: 14605.5 },
            { bracketStart: 40125, rate: 0.22, cumulative: 4617.5 },
            { bracketStart: 9875, rate: 0.12, cumulative: 987.5 },
            { bracketStart: 0, rate: 0.1, cumulative: 0 },
          ]),
          Object(d.a)(r, A.MARRIED_FILING_JOINTLY.name, [
            { bracketStart: 622050, rate: 0.37, cumulative: 167307.5 },
            { bracketStart: 414700, rate: 0.35, cumulative: 94735 },
            { bracketStart: 326600, rate: 0.32, cumulative: 66543 },
            { bracketStart: 171050, rate: 0.24, cumulative: 29211 },
            { bracketStart: 80250, rate: 0.22, cumulative: 9235 },
            { bracketStart: 19750, rate: 0.12, cumulative: 1975 },
            { bracketStart: 0, rate: 0.1, cumulative: 0 },
          ]),
          Object(d.a)(r, A.MARRIED_FILING_SEPARATELY.name, [
            { bracketStart: 311025, rate: 0.37, cumulative: 83653.75 },
            { bracketStart: 207350, rate: 0.35, cumulative: 47367.5 },
            { bracketStart: 163300, rate: 0.32, cumulative: 33271.5 },
            { bracketStart: 85525, rate: 0.24, cumulative: 14605.5 },
            { bracketStart: 40125, rate: 0.22, cumulative: 4617.5 },
            { bracketStart: 9875, rate: 0.12, cumulative: 987.5 },
            { bracketStart: 0, rate: 0.1, cumulative: 0 },
          ]),
          Object(d.a)(r, A.HEAD_OF_HOUSEHOLD.name, [
            { bracketStart: 518400, rate: 0.37, cumulative: 154793.5 },
            { bracketStart: 207350, rate: 0.35, cumulative: 45926 },
            { bracketStart: 163300, rate: 0.32, cumulative: 31830 },
            { bracketStart: 85500, rate: 0.24, cumulative: 13158 },
            { bracketStart: 53700, rate: 0.22, cumulative: 6162 },
            { bracketStart: 14100, rate: 0.12, cumulative: 1410 },
            { bracketStart: 0, rate: 0.1, cumulative: 0 },
          ]),
          r),
        C =
          ((n = {}),
          Object(d.a)(n, A.SINGLE.name, [
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
          Object(d.a)(n, A.MARRIED_FILING_JOINTLY.name, [
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
          Object(d.a)(n, A.MARRIED_FILING_SEPARATELY.name, [
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
          Object(d.a)(n, A.HEAD_OF_HOUSEHOLD.name, [
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
          n),
        L =
          ((i = {}),
          Object(d.a)(i, g.FEDERAL.name, _),
          Object(d.a)(i, g.CALIFORNIA.name, C),
          i),
        y =
          ((c = {}),
          Object(d.a)(c, A.SINGLE.name, [
            { bracketEnd: 40400, rate: 0 },
            { bracketEnd: 445850, rate: 0.15 },
            { bracketEnd: 1 / 0, rate: 0.2 },
          ]),
          Object(d.a)(c, A.MARRIED_FILING_JOINTLY.name, [
            { bracketEnd: 80800, rate: 0 },
            { bracketEnd: 501600, rate: 0.15 },
            { bracketEnd: 1 / 0, rate: 0.2 },
          ]),
          Object(d.a)(c, A.MARRIED_FILING_SEPARATELY.name, [
            { bracketEnd: 40400, rate: 0 },
            { bracketEnd: 250800, rate: 0.15 },
            { bracketEnd: 1 / 0, rate: 0.2 },
          ]),
          Object(d.a)(c, A.HEAD_OF_HOUSEHOLD.name, [
            { bracketEnd: 54100, rate: 0 },
            { bracketEnd: 473750, rate: 0.15 },
            { bracketEnd: 1 / 0, rate: 0.2 },
          ]),
          c);
      function R(e, t, a, r, n, i, c) {
        n < 0 && ((r += n), (n = 0)),
          r < 0 && ((a += Math.max(r, -3e3)), (r = 0));
        var l = 0;
        return (
          i === p.STANDARD.name
            ? (l = (function (e, t) {
                var a, r, n;
                return ((n = {}),
                Object(d.a)(
                  n,
                  g.FEDERAL.name,
                  ((a = {}),
                  Object(d.a)(a, A.SINGLE.name, 12400),
                  Object(d.a)(a, A.MARRIED_FILING_JOINTLY.name, 25100),
                  Object(d.a)(a, A.MARRIED_FILING_SEPARATELY.name, 12550),
                  Object(d.a)(a, A.HEAD_OF_HOUSEHOLD.name, 18800),
                  a)
                ),
                Object(d.a)(
                  n,
                  g.CALIFORNIA.name,
                  ((r = {}),
                  Object(d.a)(r, A.SINGLE.name, 4601),
                  Object(d.a)(r, A.MARRIED_FILING_JOINTLY.name, 9202),
                  Object(d.a)(r, A.MARRIED_FILING_SEPARATELY.name, 4601),
                  Object(d.a)(r, A.HEAD_OF_HOUSEHOLD.name, 9202),
                  r)
                ),
                n)[e][t];
              })(e, t))
            : i === p.ITEMIZED.name && (l = c),
          (a -= l) < 0 && (r += a),
          r < 0 && (n += r),
          [(a = Math.max(0, a)), (r = Math.max(0, r)), (n = Math.max(0, n))]
        );
      }
      function N(e, t, a, r, n) {
        var i = L[e][t],
          c = a + r;
        E.has(e) && (c += n);
        var l,
          u = 0,
          s = Object(T.a)(i);
        try {
          for (s.s(); !(l = s.n()).done; ) {
            var o = l.value;
            if (!(c < o.bracketStart)) {
              (u += o.cumulative), (u += (c - o.bracketStart) * o.rate);
              break;
            }
          }
        } catch (b) {
          s.e(b);
        } finally {
          s.f();
        }
        return u;
      }
      function F(e, t, a, r, n) {
        if (E.has(e)) return 0;
        var i,
          c = y[t],
          l = a + r,
          u = 0,
          s = n,
          o = Object(T.a)(c);
        try {
          for (o.s(); !(i = o.n()).done; ) {
            var b = i.value;
            if (!(b.bracketEnd < a + r)) {
              var d = Math.min(s, b.bracketEnd - l);
              (u += d * b.rate), (s -= d), (l += d);
            }
          }
        } catch (m) {
          o.e(m);
        } finally {
          o.f();
        }
        return u;
      }
      function D(e) {
        return 0.062 * Math.min(e, 142800);
      }
      function G(e, t) {
        var a = e === A.MARRIED_FILING_JOINTLY.name ? 25e4 : 2e5;
        return 0.0145 * t + 0.009 * Math.max(0, t - a);
      }
      function z(e, t, a) {
        var r,
          n = ((r = {}),
          Object(d.a)(r, A.SINGLE.name, 2e5),
          Object(d.a)(r, A.MARRIED_FILING_JOINTLY.name, 25e4),
          Object(d.a)(r, A.MARRIED_FILING_SEPARATELY.name, 125e3),
          Object(d.a)(r, A.HEAD_OF_HOUSEHOLD.name, 2e5),
          r)[e];
        return 0.038 * Math.max(0, Math.min(t + a - n, a));
      }
      var M = (function (e) {
          Object(j.a)(a, e);
          var t = Object(O.a)(a);
          function a(e) {
            var r;
            return (
              Object(m.a)(this, a),
              ((r = t.call(this, e)).state = {
                jurisdiction: g.FEDERAL.name,
                filingStatus: A.SINGLE.name,
                timePeriod: f.FIRST.name,
                ordinaryIncome: 0,
                shortTermCapitalGains: 0,
                longTermCapitalGains: 0,
                deductionType: p.STANDARD.name,
                itemizedDeductions: 0,
                taxCreditsAnnual: 0,
                includePriorYearCalculation: !1,
                priorYearAgi: 0,
                priorYearTax: 0,
                withholding: 0,
              }),
              r
            );
          }
          return (
            Object(h.a)(a, [
              {
                key: "handleStateChange",
                value: function (e, t) {
                  e in this.state
                    ? this.setState(Object(d.a)({}, e, t))
                    : alert("incorrect state variable: ".concat(e));
                },
              },
              {
                key: "_calculateObligationBasedOnPriorYear",
                value: function () {
                  var e =
                      this.state.filingStatus !==
                      A.MARRIED_FILING_SEPARATELY.name
                        ? 15e4
                        : 75e3,
                    t = this.state.priorYearAgi <= e ? 1 : 1.1;
                  return this.state.priorYearTax * t;
                },
              },
              {
                key: "_calculateAnnualizedIncome",
                value: function () {
                  var e = [4, 2.4, 1.5, 1][this.state.timePeriod],
                    t = e * this.state.ordinaryIncome,
                    a = e * this.state.shortTermCapitalGains,
                    r = e * this.state.longTermCapitalGains;
                  return t + Math.max(a + r, -3e3);
                },
              },
              {
                key: "_calculateTotalTaxBasedOnAnnualizedIncome",
                value: function () {
                  var e = [4, 2.4, 1.5, 1][this.state.timePeriod],
                    t = e * this.state.ordinaryIncome,
                    a = e * this.state.shortTermCapitalGains,
                    r = e * this.state.longTermCapitalGains;
                  return (function (e, t, a, r, n, i, c, l) {
                    var u = R(e, t, a, r, n, i, c),
                      s = Object(b.a)(u, 3),
                      o = N(e, t, (a = s[0]), (r = s[1]), (n = s[2]));
                    return (
                      (o += F(e, t, a, r, n)),
                      e === g.FEDERAL.name &&
                        ((o += D(a)), (o += G(t, a)), (o += z(t, a, r + n))),
                      (o -= l),
                      Math.max(0, o)
                    );
                  })(
                    this.state.jurisdiction,
                    this.state.filingStatus,
                    t,
                    a,
                    r,
                    this.state.deductionType,
                    e * this.state.itemizedDeductions,
                    this.state.taxCreditsAnnual
                  );
                },
              },
              {
                key: "_calculateAnnualizedAdjustedIncomes",
                value: function () {
                  var e = [4, 2.4, 1.5, 1][this.state.timePeriod],
                    t = e * this.state.ordinaryIncome,
                    a = e * this.state.shortTermCapitalGains,
                    r = e * this.state.longTermCapitalGains;
                  return R(
                    this.state.jurisdiction,
                    this.state.filingStatus,
                    t,
                    a,
                    r,
                    this.state.deductionType,
                    this.state.itemizedDeductions
                  );
                },
              },
              {
                key: "_calculateIncomeTax",
                value: function () {
                  var e = this._calculateAnnualizedAdjustedIncomes(),
                    t = Object(b.a)(e, 3),
                    a = t[0],
                    r = t[1],
                    n = t[2];
                  return N(
                    this.state.jurisdiction,
                    this.state.filingStatus,
                    a,
                    r,
                    n
                  );
                },
              },
              {
                key: "_calculateLongTermCapitalGainsTax",
                value: function () {
                  var e = this._calculateAnnualizedAdjustedIncomes(),
                    t = Object(b.a)(e, 3),
                    a = t[0],
                    r = t[1],
                    n = t[2];
                  return F(
                    this.state.jurisdiction,
                    this.state.filingStatus,
                    a,
                    r,
                    n
                  );
                },
              },
              {
                key: "_calculateMedicareTax",
                value: function () {
                  var e = this._calculateAnnualizedAdjustedIncomes(),
                    t = Object(b.a)(e, 3),
                    a = t[0];
                  t[1], t[2];
                  return G(this.state.filingStatus, a);
                },
              },
              {
                key: "_calculateNetInvestmentIncomeTax",
                value: function () {
                  var e = this._calculateAnnualizedAdjustedIncomes(),
                    t = Object(b.a)(e, 3),
                    a = t[0],
                    r = t[1],
                    n = t[2];
                  return z(this.state.filingStatus, a, r + n);
                },
              },
              {
                key: "_calculateSocialSecurityTax",
                value: function () {
                  var e = this._calculateAnnualizedAdjustedIncomes(),
                    t = Object(b.a)(e, 3),
                    a = t[0];
                  t[1], t[2];
                  return D(a);
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
                  var e = [0.25, 0.5, 0.75, 1][this.state.timePeriod];
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
                  var e = [this._calculateObligationBasedOnAnnualizedIncome()];
                  return (
                    this.state.includePriorYearCalculation &&
                      ((this.state.jurisdiction === g.CALIFORNIA.name &&
                        this._calculateAnnualizedIncome() > 1e6) ||
                        e.push(this._calculateObligationBasedOnPriorYear())),
                    Math.min.apply(Math, e)
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
                  var e = this;
                  return Object(v.jsxs)("div", {
                    className: "App App-header",
                    children: [
                      Object(v.jsx)("div", {
                        className: "row",
                        children: Object(v.jsxs)("div", {
                          className: "bordered",
                          children: [
                            Object(v.jsx)(S, {
                              onChange: function (t) {
                                return e.handleStateChange(
                                  "jurisdiction",
                                  t.target.value
                                );
                              },
                              label: "Jurisdiction",
                              selectOptions: Object.values(g),
                            }),
                            Object(v.jsx)(S, {
                              onChange: function (t) {
                                return e.handleStateChange(
                                  "filingStatus",
                                  t.target.value
                                );
                              },
                              label: "Filing Status",
                              selectOptions: Object.values(A),
                            }),
                            Object(v.jsx)(S, {
                              onChange: function (t) {
                                return e.handleStateChange(
                                  "timePeriod",
                                  t.target.value
                                );
                              },
                              label: "Time Period",
                              selectOptions: Object.values(f),
                            }),
                          ],
                        }),
                      }),
                      Object(v.jsx)("div", {
                        className: "row",
                        children: Object(v.jsxs)("div", {
                          className: "column",
                          children: [
                            Object(v.jsxs)("div", {
                              className: "row",
                              children: [
                                Object(v.jsxs)("div", {
                                  className: "bordered",
                                  children: [
                                    Object(v.jsx)(I, {
                                      label: "Ordinary Income",
                                      onChange: function (t) {
                                        return e.handleStateChange(
                                          "ordinaryIncome",
                                          t.target.value
                                        );
                                      },
                                    }),
                                    Object(v.jsx)(I, {
                                      label: "Short Term Capital Gains",
                                      onChange: function (t) {
                                        return e.handleStateChange(
                                          "shortTermCapitalGains",
                                          t.target.value
                                        );
                                      },
                                    }),
                                    Object(v.jsx)(I, {
                                      label: "Long Term Capital Gains",
                                      onChange: function (t) {
                                        return e.handleStateChange(
                                          "longTermCapitalGains",
                                          t.target.value
                                        );
                                      },
                                    }),
                                    Object(v.jsx)(S, {
                                      onChange: function (t) {
                                        return e.handleStateChange(
                                          "deductionType",
                                          t.target.value
                                        );
                                      },
                                      label: "Deduction Type",
                                      selectOptions: Object.values(p),
                                    }),
                                    "itemized" === this.state.deductionType &&
                                      Object(v.jsx)(I, {
                                        label: "Itemized Deductions",
                                        onChange: function (t) {
                                          return e.handleStateChange(
                                            "itemizedDeductions",
                                            t.target.value
                                          );
                                        },
                                      }),
                                    Object(v.jsx)(I, {
                                      label: "Tax Credits (Annual)",
                                      onChange: function (t) {
                                        return e.handleStateChange(
                                          "taxCreditsAnnual",
                                          t.target.value
                                        );
                                      },
                                    }),
                                  ],
                                }),
                                Object(v.jsxs)("div", {
                                  className: "bordered",
                                  children: [
                                    Object(v.jsx)(k, {
                                      label: "Annualized Income",
                                      value: this._calculateAnnualizedIncome().toFixed(
                                        2
                                      ),
                                    }),
                                    this.state.jurisdiction ===
                                      g.FEDERAL.name &&
                                      Object(v.jsxs)("div", {
                                        className: "small",
                                        children: [
                                          Object(v.jsx)(k, {
                                            label: "Income Tax",
                                            value: this._calculateIncomeTax().toFixed(
                                              2
                                            ),
                                          }),
                                          Object(v.jsx)(k, {
                                            label: "Medicare Tax",
                                            value: this._calculateMedicareTax().toFixed(
                                              2
                                            ),
                                          }),
                                          Object(v.jsx)(k, {
                                            label: "Social Security Tax",
                                            value: this._calculateSocialSecurityTax().toFixed(
                                              2
                                            ),
                                          }),
                                          Object(v.jsx)(k, {
                                            label:
                                              "Long Term Capital Gains Tax",
                                            value: this._calculateLongTermCapitalGainsTax().toFixed(
                                              2
                                            ),
                                          }),
                                          Object(v.jsx)(k, {
                                            label: "Net Investment Tax",
                                            value: this._calculateNetInvestmentIncomeTax().toFixed(
                                              2
                                            ),
                                          }),
                                        ],
                                      }),
                                    Object(v.jsx)(k, {
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
                                    Object(v.jsx)(k, {
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
                            Object(v.jsxs)("div", {
                              className: "row",
                              children: [
                                Object(v.jsxs)("div", {
                                  className: "bordered",
                                  children: [
                                    Object(v.jsx)(x, {
                                      label: "Include prior year calculation",
                                      checked: this.state
                                        .includePriorYearCalculation,
                                      onChange: function (t) {
                                        return e.handleStateChange(
                                          "includePriorYearCalculation",
                                          t.target.checked
                                        );
                                      },
                                    }),
                                    Object(v.jsx)(I, {
                                      label: "Prior Year AGI",
                                      onChange: function (t) {
                                        return e.handleStateChange(
                                          "priorYearAgi",
                                          t.target.value
                                        );
                                      },
                                      disabled: !this.state
                                        .includePriorYearCalculation,
                                    }),
                                    Object(v.jsx)(I, {
                                      label: "Prior Year Tax",
                                      onChange: function (t) {
                                        return e.handleStateChange(
                                          "priorYearTax",
                                          t.target.value
                                        );
                                      },
                                      disabled: !this.state
                                        .includePriorYearCalculation,
                                    }),
                                  ],
                                }),
                                Object(v.jsx)("div", {
                                  className: "bordered",
                                  children: Object(v.jsx)(k, {
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
                      Object(v.jsx)("div", {
                        className: "row",
                        children: Object(v.jsxs)("div", {
                          className: "bordered",
                          children: [
                            Object(v.jsx)(k, {
                              label: "Annualized Obligation",
                              value: this._calculateAnnualizedObligation().toFixed(
                                2
                              ),
                            }),
                            Object(v.jsx)(k, {
                              label: "Obligation in time period",
                              value: this._calculateObligationDuringTimePeriod().toFixed(
                                2
                              ),
                            }),
                            Object(v.jsx)(I, {
                              label: "Withholding",
                              onChange: function (t) {
                                return e.handleStateChange(
                                  "withholding",
                                  t.target.value
                                );
                              },
                            }),
                            Object(v.jsx)(k, {
                              label: "Taxes Owed",
                              value: this._calculateTaxesOwed().toFixed(2),
                            }),
                          ],
                        }),
                      }),
                      Object(v.jsxs)("span", {
                        className: "footer",
                        children: [
                          "This is not financial advice. ",
                          Object(v.jsx)("br", {}),
                          "This tool is meant to estimate the estimated payments, and is provided without any guarantees. ",
                          Object(v.jsx)("br", {}),
                          "The author is not a CPA nor did any CPA review this. Please use at your own risk. ",
                          Object(v.jsx)("br", {}),
                          "If you would like to inspect the calculations or make any contributions, please review the source code",
                          " ",
                          Object(v.jsx)("a", {
                            href: "https://github.com/tomo-otsuka/brasstax",
                            children: "here",
                          }),
                          ". ",
                          Object(v.jsx)("br", {}),
                          Object(v.jsx)("br", {}),
                          "Privacy: This tool does not collect any sensitive data. ",
                          Object(v.jsx)("br", {}),
                          "In fact, after retrieving the initial static assets to display this page, ",
                          Object(v.jsx)("br", {}),
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
        })(u.a.Component),
        P = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 20))
              .then(function (t) {
                var a = t.getCLS,
                  r = t.getFID,
                  n = t.getFCP,
                  i = t.getLCP,
                  c = t.getTTFB;
                a(e), r(e), n(e), i(e), c(e);
              });
        };
      o.a.render(
        Object(v.jsx)(u.a.StrictMode, { children: Object(v.jsx)(M, {}) }),
        document.getElementById("root")
      ),
        P();
    },
  },
  [[19, 1, 2]],
]);
//# sourceMappingURL=main.7e172f7f.chunk.js.map
