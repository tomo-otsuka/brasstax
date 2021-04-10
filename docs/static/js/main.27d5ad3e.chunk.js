(this.webpackJsonpbrasstax = this.webpackJsonpbrasstax || []).push([
  [0],
  {
    12: function (e, t, n) {},
    13: function (e, t, n) {},
    15: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(1),
        a = n.n(i),
        r = n(7),
        c = n.n(r),
        o = (n(12), n(2)),
        s = n(3),
        l = n(5),
        u = n(4),
        h = (n(13), n(0)),
        j = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(o.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(s.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(h.jsxs)("div", {
                    children: [
                      Object(h.jsx)("label", {
                        for: "filing-status",
                        children: "Filing Status: ",
                      }),
                      Object(h.jsxs)("select", {
                        id: "filing-status",
                        onChange: function (t) {
                          return e.props.onChange(t);
                        },
                        children: [
                          Object(h.jsx)("option", {
                            value: "single",
                            children: "Single",
                          }),
                          Object(h.jsx)("option", {
                            value: "married-jointly",
                            children: "Married Filing Jointly",
                          }),
                          Object(h.jsx)("option", {
                            value: "married-separately",
                            children: "Married Filing Separately",
                          }),
                          Object(h.jsx)("option", {
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
            n
          );
        })(a.a.Component),
        d = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(o.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(s.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(h.jsxs)("div", {
                    children: [
                      Object(h.jsx)("label", {
                        for: "time-period",
                        children: "Time Period: ",
                      }),
                      Object(h.jsxs)("select", {
                        id: "time-period",
                        onChange: function (t) {
                          return e.props.onChange(t);
                        },
                        children: [
                          Object(h.jsx)("option", {
                            value: "1",
                            children: "1/1 - 3/31",
                          }),
                          Object(h.jsx)("option", {
                            value: "2",
                            children: "1/1 - 5/31",
                          }),
                          Object(h.jsx)("option", {
                            value: "3",
                            children: "1/1 - 8/31",
                          }),
                          Object(h.jsx)("option", {
                            value: "4",
                            children: "1/1 - 12/31",
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.a.Component),
        b = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n(e) {
            var i;
            return (
              Object(o.a)(this, n),
              ((i = t.call(this, e)).state = {
                filingStatus: "single",
                timePeriod: 1,
              }),
              i
            );
          }
          return (
            Object(s.a)(n, [
              {
                key: "handleFilingStatusChange",
                value: function (e) {
                  this.setState({ filingStatus: e.target.value });
                },
              },
              {
                key: "handleTimePeriodChange",
                value: function (e) {
                  this.setState({ timePeriod: e.target.value });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(h.jsxs)("div", {
                    className: "App App-header",
                    children: [
                      Object(h.jsx)(j, {
                        onChange: function (t) {
                          return e.handleFilingStatusChange(t);
                        },
                      }),
                      Object(h.jsx)(d, {
                        onChange: function (t) {
                          return e.handleTimePeriodChange(t);
                        },
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.a.Component),
        p = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 16))
              .then(function (t) {
                var n = t.getCLS,
                  i = t.getFID,
                  a = t.getFCP,
                  r = t.getLCP,
                  c = t.getTTFB;
                n(e), i(e), a(e), r(e), c(e);
              });
        };
      c.a.render(
        Object(h.jsx)(a.a.StrictMode, { children: Object(h.jsx)(b, {}) }),
        document.getElementById("root")
      ),
        p();
    },
  },
  [[15, 1, 2]],
]);
//# sourceMappingURL=main.27d5ad3e.chunk.js.map
