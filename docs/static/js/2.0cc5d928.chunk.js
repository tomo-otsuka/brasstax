/*! For license information please see 2.0cc5d928.chunk.js.LICENSE.txt */
(this.webpackJsonpbrasstax = this.webpackJsonpbrasstax || []).push([
  [2],
  [
    function (e, t, n) {
      "use strict";
      e.exports = n(34);
    },
    function (e, t, n) {
      "use strict";
      e.exports = n(28);
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function a(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      }
      n.d(t, "a", function () {
        return a;
      });
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var r = n(10);
      function a(e) {
        return (a =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var i = n(16);
      function o(e, t) {
        return !t || ("object" !== a(t) && "function" !== typeof t)
          ? Object(i.a)(e)
          : t;
      }
      function l(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(r.a)(e);
          if (t) {
            var i = Object(r.a)(this).constructor;
            n = Reflect.construct(a, arguments, i);
          } else n = a.apply(this, arguments);
          return o(this, n);
        };
      }
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (r =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function a(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t);
      }
      n.d(t, "a", function () {
        return a;
      });
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n(18);
      function a(e, t) {
        var n;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = Object(r.a)(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var a = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return a >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[a++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          l = !0,
          u = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (l = e.done), e;
          },
          e: function (e) {
            (u = !0), (o = e);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return b;
      }),
        n.d(t, "b", function () {
          return v;
        }),
        n.d(t, "c", function () {
          return O;
        }),
        n.d(t, "d", function () {
          return p;
        }),
        n.d(t, "e", function () {
          return y;
        });
      var r = n(11),
        a = n(1),
        i = n.n(a),
        o = (n(19), n(14)),
        l = n(24),
        u = n(12),
        s = n(9),
        c = n(25),
        f = n.n(c),
        d = (n(39), n(17)),
        h =
          (n(27),
          (function (e) {
            var t = Object(l.a)();
            return (t.displayName = e), t;
          })("Router-History")),
        p = (function (e) {
          var t = Object(l.a)();
          return (t.displayName = e), t;
        })("Router"),
        v = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).state = {
                location: t.history.location,
              }),
              (n._isMounted = !1),
              (n._pendingLocation = null),
              t.staticContext ||
                (n.unlisten = t.history.listen(function (e) {
                  n._isMounted
                    ? n.setState({ location: e })
                    : (n._pendingLocation = e);
                })),
              n
            );
          }
          Object(r.a)(t, e),
            (t.computeRootMatch = function (e) {
              return { path: "/", url: "/", params: {}, isExact: "/" === e };
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              (this._isMounted = !0),
                this._pendingLocation &&
                  this.setState({ location: this._pendingLocation });
            }),
            (n.componentWillUnmount = function () {
              this.unlisten && this.unlisten();
            }),
            (n.render = function () {
              return i.a.createElement(
                p.Provider,
                {
                  value: {
                    history: this.props.history,
                    location: this.state.location,
                    match: t.computeRootMatch(this.state.location.pathname),
                    staticContext: this.props.staticContext,
                  },
                },
                i.a.createElement(h.Provider, {
                  children: this.props.children || null,
                  value: this.props.history,
                })
              );
            }),
            t
          );
        })(i.a.Component);
      i.a.Component;
      i.a.Component;
      var g = {},
        m = 0;
      function y(e, t) {
        void 0 === t && (t = {}),
          ("string" === typeof t || Array.isArray(t)) && (t = { path: t });
        var n = t,
          r = n.path,
          a = n.exact,
          i = void 0 !== a && a,
          o = n.strict,
          l = void 0 !== o && o,
          u = n.sensitive,
          s = void 0 !== u && u;
        return [].concat(r).reduce(function (t, n) {
          if (!n && "" !== n) return null;
          if (t) return t;
          var r = (function (e, t) {
              var n = "" + t.end + t.strict + t.sensitive,
                r = g[n] || (g[n] = {});
              if (r[e]) return r[e];
              var a = [],
                i = { regexp: f()(e, a, t), keys: a };
              return m < 1e4 && ((r[e] = i), m++), i;
            })(n, { end: i, strict: l, sensitive: s }),
            a = r.regexp,
            o = r.keys,
            u = a.exec(e);
          if (!u) return null;
          var c = u[0],
            d = u.slice(1),
            h = e === c;
          return i && !h
            ? null
            : {
                path: n,
                url: "/" === n && "" === c ? "/" : c,
                isExact: h,
                params: o.reduce(function (e, t, n) {
                  return (e[t.name] = d[n]), e;
                }, {}),
              };
        }, null);
      }
      var b = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          Object(r.a)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return i.a.createElement(p.Consumer, null, function (t) {
              t || Object(u.a)(!1);
              var n = e.props.location || t.location,
                r = e.props.computedMatch
                  ? e.props.computedMatch
                  : e.props.path
                  ? y(n.pathname, e.props)
                  : t.match,
                a = Object(s.a)({}, t, { location: n, match: r }),
                o = e.props,
                l = o.children,
                c = o.component,
                f = o.render;
              return (
                Array.isArray(l) && 0 === l.length && (l = null),
                i.a.createElement(
                  p.Provider,
                  { value: a },
                  a.match
                    ? l
                      ? "function" === typeof l
                        ? l(a)
                        : l
                      : c
                      ? i.a.createElement(c, a)
                      : f
                      ? f(a)
                      : null
                    : "function" === typeof l
                    ? l(a)
                    : null
                )
              );
            });
          }),
          t
        );
      })(i.a.Component);
      function x(e) {
        return "/" === e.charAt(0) ? e : "/" + e;
      }
      function k(e, t) {
        if (!e) return t;
        var n = x(e);
        return 0 !== t.pathname.indexOf(n)
          ? t
          : Object(s.a)({}, t, { pathname: t.pathname.substr(n.length) });
      }
      function _(e) {
        return "string" === typeof e ? e : Object(o.e)(e);
      }
      function w(e) {
        return function () {
          Object(u.a)(!1);
        };
      }
      function S() {}
      i.a.Component;
      var O = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          Object(r.a)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return i.a.createElement(p.Consumer, null, function (t) {
              t || Object(u.a)(!1);
              var n,
                r,
                a = e.props.location || t.location;
              return (
                i.a.Children.forEach(e.props.children, function (e) {
                  if (null == r && i.a.isValidElement(e)) {
                    n = e;
                    var o = e.props.path || e.props.from;
                    r = o
                      ? y(a.pathname, Object(s.a)({}, e.props, { path: o }))
                      : t.match;
                  }
                }),
                r
                  ? i.a.cloneElement(n, { location: a, computedMatch: r })
                  : null
              );
            });
          }),
          t
        );
      })(i.a.Component);
      i.a.useContext;
    },
    function (e, t, n) {
      "use strict";
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return (r = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      "use strict";
      var r = "Invariant failed";
      t.a = function (e, t) {
        if (!e) throw new Error(r);
      };
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n(18);
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
              var n = [],
                r = !0,
                a = !1,
                i = void 0;
              try {
                for (
                  var o, l = e[Symbol.iterator]();
                  !(r = (o = l.next()).done) &&
                  (n.push(o.value), !t || n.length !== t);
                  r = !0
                );
              } catch (u) {
                (a = !0), (i = u);
              } finally {
                try {
                  r || null == l.return || l.return();
                } finally {
                  if (a) throw i;
                }
              }
              return n;
            }
          })(e, t) ||
          Object(r.a)(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return w;
      }),
        n.d(t, "b", function () {
          return P;
        }),
        n.d(t, "d", function () {
          return D;
        }),
        n.d(t, "c", function () {
          return v;
        }),
        n.d(t, "f", function () {
          return g;
        }),
        n.d(t, "e", function () {
          return p;
        });
      var r = n(9);
      function a(e) {
        return "/" === e.charAt(0);
      }
      function i(e, t) {
        for (var n = t, r = n + 1, a = e.length; r < a; n += 1, r += 1)
          e[n] = e[r];
        e.pop();
      }
      var o = function (e, t) {
        void 0 === t && (t = "");
        var n,
          r = (e && e.split("/")) || [],
          o = (t && t.split("/")) || [],
          l = e && a(e),
          u = t && a(t),
          s = l || u;
        if (
          (e && a(e) ? (o = r) : r.length && (o.pop(), (o = o.concat(r))),
          !o.length)
        )
          return "/";
        if (o.length) {
          var c = o[o.length - 1];
          n = "." === c || ".." === c || "" === c;
        } else n = !1;
        for (var f = 0, d = o.length; d >= 0; d--) {
          var h = o[d];
          "." === h
            ? i(o, d)
            : ".." === h
            ? (i(o, d), f++)
            : f && (i(o, d), f--);
        }
        if (!s) for (; f--; f) o.unshift("..");
        !s || "" === o[0] || (o[0] && a(o[0])) || o.unshift("");
        var p = o.join("/");
        return n && "/" !== p.substr(-1) && (p += "/"), p;
      };
      function l(e) {
        return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
      }
      var u = function e(t, n) {
          if (t === n) return !0;
          if (null == t || null == n) return !1;
          if (Array.isArray(t))
            return (
              Array.isArray(n) &&
              t.length === n.length &&
              t.every(function (t, r) {
                return e(t, n[r]);
              })
            );
          if ("object" === typeof t || "object" === typeof n) {
            var r = l(t),
              a = l(n);
            return r !== t || a !== n
              ? e(r, a)
              : Object.keys(Object.assign({}, t, n)).every(function (r) {
                  return e(t[r], n[r]);
                });
          }
          return !1;
        },
        s = n(12);
      function c(e) {
        return "/" === e.charAt(0) ? e : "/" + e;
      }
      function f(e) {
        return "/" === e.charAt(0) ? e.substr(1) : e;
      }
      function d(e, t) {
        return (function (e, t) {
          return (
            0 === e.toLowerCase().indexOf(t.toLowerCase()) &&
            -1 !== "/?#".indexOf(e.charAt(t.length))
          );
        })(e, t)
          ? e.substr(t.length)
          : e;
      }
      function h(e) {
        return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      }
      function p(e) {
        var t = e.pathname,
          n = e.search,
          r = e.hash,
          a = t || "/";
        return (
          n && "?" !== n && (a += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (a += "#" === r.charAt(0) ? r : "#" + r),
          a
        );
      }
      function v(e, t, n, a) {
        var i;
        "string" === typeof e
          ? ((i = (function (e) {
              var t = e || "/",
                n = "",
                r = "",
                a = t.indexOf("#");
              -1 !== a && ((r = t.substr(a)), (t = t.substr(0, a)));
              var i = t.indexOf("?");
              return (
                -1 !== i && ((n = t.substr(i)), (t = t.substr(0, i))),
                {
                  pathname: t,
                  search: "?" === n ? "" : n,
                  hash: "#" === r ? "" : r,
                }
              );
            })(e)).state = t)
          : (void 0 === (i = Object(r.a)({}, e)).pathname && (i.pathname = ""),
            i.search
              ? "?" !== i.search.charAt(0) && (i.search = "?" + i.search)
              : (i.search = ""),
            i.hash
              ? "#" !== i.hash.charAt(0) && (i.hash = "#" + i.hash)
              : (i.hash = ""),
            void 0 !== t && void 0 === i.state && (i.state = t));
        try {
          i.pathname = decodeURI(i.pathname);
        } catch (l) {
          throw l instanceof URIError
            ? new URIError(
                'Pathname "' +
                  i.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.'
              )
            : l;
        }
        return (
          n && (i.key = n),
          a
            ? i.pathname
              ? "/" !== i.pathname.charAt(0) &&
                (i.pathname = o(i.pathname, a.pathname))
              : (i.pathname = a.pathname)
            : i.pathname || (i.pathname = "/"),
          i
        );
      }
      function g(e, t) {
        return (
          e.pathname === t.pathname &&
          e.search === t.search &&
          e.hash === t.hash &&
          e.key === t.key &&
          u(e.state, t.state)
        );
      }
      function m() {
        var e = null;
        var t = [];
        return {
          setPrompt: function (t) {
            return (
              (e = t),
              function () {
                e === t && (e = null);
              }
            );
          },
          confirmTransitionTo: function (t, n, r, a) {
            if (null != e) {
              var i = "function" === typeof e ? e(t, n) : e;
              "string" === typeof i
                ? "function" === typeof r
                  ? r(i, a)
                  : a(!0)
                : a(!1 !== i);
            } else a(!0);
          },
          appendListener: function (e) {
            var n = !0;
            function r() {
              n && e.apply(void 0, arguments);
            }
            return (
              t.push(r),
              function () {
                (n = !1),
                  (t = t.filter(function (e) {
                    return e !== r;
                  }));
              }
            );
          },
          notifyListeners: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            t.forEach(function (e) {
              return e.apply(void 0, n);
            });
          },
        };
      }
      var y = !(
        "undefined" === typeof window ||
        !window.document ||
        !window.document.createElement
      );
      function b(e, t) {
        t(window.confirm(e));
      }
      var x = "popstate",
        k = "hashchange";
      function _() {
        try {
          return window.history.state || {};
        } catch (e) {
          return {};
        }
      }
      function w(e) {
        void 0 === e && (e = {}), y || Object(s.a)(!1);
        var t = window.history,
          n = (function () {
            var e = window.navigator.userAgent;
            return (
              ((-1 === e.indexOf("Android 2.") &&
                -1 === e.indexOf("Android 4.0")) ||
                -1 === e.indexOf("Mobile Safari") ||
                -1 !== e.indexOf("Chrome") ||
                -1 !== e.indexOf("Windows Phone")) &&
              window.history &&
              "pushState" in window.history
            );
          })(),
          a = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          i = e,
          o = i.forceRefresh,
          l = void 0 !== o && o,
          u = i.getUserConfirmation,
          f = void 0 === u ? b : u,
          g = i.keyLength,
          w = void 0 === g ? 6 : g,
          S = e.basename ? h(c(e.basename)) : "";
        function O(e) {
          var t = e || {},
            n = t.key,
            r = t.state,
            a = window.location,
            i = a.pathname + a.search + a.hash;
          return S && (i = d(i, S)), v(i, r, n);
        }
        function M() {
          return Math.random().toString(36).substr(2, w);
        }
        var E = m();
        function C(e) {
          Object(r.a)(V, e),
            (V.length = t.length),
            E.notifyListeners(V.location, V.action);
        }
        function P(e) {
          (function (e) {
            return (
              void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
            );
          })(e) || L(O(e.state));
        }
        function T() {
          L(O(_()));
        }
        var D = !1;
        function L(e) {
          if (D) (D = !1), C();
          else {
            E.confirmTransitionTo(e, "POP", f, function (t) {
              t
                ? C({ action: "POP", location: e })
                : (function (e) {
                    var t = V.location,
                      n = R.indexOf(t.key);
                    -1 === n && (n = 0);
                    var r = R.indexOf(e.key);
                    -1 === r && (r = 0);
                    var a = n - r;
                    a && ((D = !0), z(a));
                  })(e);
            });
          }
        }
        var j = O(_()),
          R = [j.key];
        function A(e) {
          return S + p(e);
        }
        function z(e) {
          t.go(e);
        }
        var F = 0;
        function N(e) {
          1 === (F += e) && 1 === e
            ? (window.addEventListener(x, P),
              a && window.addEventListener(k, T))
            : 0 === F &&
              (window.removeEventListener(x, P),
              a && window.removeEventListener(k, T));
        }
        var I = !1;
        var V = {
          length: t.length,
          action: "POP",
          location: j,
          createHref: A,
          push: function (e, r) {
            var a = "PUSH",
              i = v(e, r, M(), V.location);
            E.confirmTransitionTo(i, a, f, function (e) {
              if (e) {
                var r = A(i),
                  o = i.key,
                  u = i.state;
                if (n)
                  if ((t.pushState({ key: o, state: u }, null, r), l))
                    window.location.href = r;
                  else {
                    var s = R.indexOf(V.location.key),
                      c = R.slice(0, s + 1);
                    c.push(i.key), (R = c), C({ action: a, location: i });
                  }
                else window.location.href = r;
              }
            });
          },
          replace: function (e, r) {
            var a = "REPLACE",
              i = v(e, r, M(), V.location);
            E.confirmTransitionTo(i, a, f, function (e) {
              if (e) {
                var r = A(i),
                  o = i.key,
                  u = i.state;
                if (n)
                  if ((t.replaceState({ key: o, state: u }, null, r), l))
                    window.location.replace(r);
                  else {
                    var s = R.indexOf(V.location.key);
                    -1 !== s && (R[s] = i.key), C({ action: a, location: i });
                  }
                else window.location.replace(r);
              }
            });
          },
          go: z,
          goBack: function () {
            z(-1);
          },
          goForward: function () {
            z(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = E.setPrompt(e);
            return (
              I || (N(1), (I = !0)),
              function () {
                return I && ((I = !1), N(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = E.appendListener(e);
            return (
              N(1),
              function () {
                N(-1), t();
              }
            );
          },
        };
        return V;
      }
      var S = "hashchange",
        O = {
          hashbang: {
            encodePath: function (e) {
              return "!" === e.charAt(0) ? e : "!/" + f(e);
            },
            decodePath: function (e) {
              return "!" === e.charAt(0) ? e.substr(1) : e;
            },
          },
          noslash: { encodePath: f, decodePath: c },
          slash: { encodePath: c, decodePath: c },
        };
      function M(e) {
        var t = e.indexOf("#");
        return -1 === t ? e : e.slice(0, t);
      }
      function E() {
        var e = window.location.href,
          t = e.indexOf("#");
        return -1 === t ? "" : e.substring(t + 1);
      }
      function C(e) {
        window.location.replace(M(window.location.href) + "#" + e);
      }
      function P(e) {
        void 0 === e && (e = {}), y || Object(s.a)(!1);
        var t = window.history,
          n = (window.navigator.userAgent.indexOf("Firefox"), e),
          a = n.getUserConfirmation,
          i = void 0 === a ? b : a,
          o = n.hashType,
          l = void 0 === o ? "slash" : o,
          u = e.basename ? h(c(e.basename)) : "",
          f = O[l],
          g = f.encodePath,
          x = f.decodePath;
        function k() {
          var e = x(E());
          return u && (e = d(e, u)), v(e);
        }
        var _ = m();
        function w(e) {
          Object(r.a)(V, e),
            (V.length = t.length),
            _.notifyListeners(V.location, V.action);
        }
        var P = !1,
          T = null;
        function D() {
          var e,
            t,
            n = E(),
            r = g(n);
          if (n !== r) C(r);
          else {
            var a = k(),
              o = V.location;
            if (
              !P &&
              ((t = a),
              (e = o).pathname === t.pathname &&
                e.search === t.search &&
                e.hash === t.hash)
            )
              return;
            if (T === p(a)) return;
            (T = null),
              (function (e) {
                if (P) (P = !1), w();
                else {
                  var t = "POP";
                  _.confirmTransitionTo(e, t, i, function (n) {
                    n
                      ? w({ action: t, location: e })
                      : (function (e) {
                          var t = V.location,
                            n = A.lastIndexOf(p(t));
                          -1 === n && (n = 0);
                          var r = A.lastIndexOf(p(e));
                          -1 === r && (r = 0);
                          var a = n - r;
                          a && ((P = !0), z(a));
                        })(e);
                  });
                }
              })(a);
          }
        }
        var L = E(),
          j = g(L);
        L !== j && C(j);
        var R = k(),
          A = [p(R)];
        function z(e) {
          t.go(e);
        }
        var F = 0;
        function N(e) {
          1 === (F += e) && 1 === e
            ? window.addEventListener(S, D)
            : 0 === F && window.removeEventListener(S, D);
        }
        var I = !1;
        var V = {
          length: t.length,
          action: "POP",
          location: R,
          createHref: function (e) {
            var t = document.querySelector("base"),
              n = "";
            return (
              t && t.getAttribute("href") && (n = M(window.location.href)),
              n + "#" + g(u + p(e))
            );
          },
          push: function (e, t) {
            var n = "PUSH",
              r = v(e, void 0, void 0, V.location);
            _.confirmTransitionTo(r, n, i, function (e) {
              if (e) {
                var t = p(r),
                  a = g(u + t);
                if (E() !== a) {
                  (T = t),
                    (function (e) {
                      window.location.hash = e;
                    })(a);
                  var i = A.lastIndexOf(p(V.location)),
                    o = A.slice(0, i + 1);
                  o.push(t), (A = o), w({ action: n, location: r });
                } else w();
              }
            });
          },
          replace: function (e, t) {
            var n = "REPLACE",
              r = v(e, void 0, void 0, V.location);
            _.confirmTransitionTo(r, n, i, function (e) {
              if (e) {
                var t = p(r),
                  a = g(u + t);
                E() !== a && ((T = t), C(a));
                var i = A.indexOf(p(V.location));
                -1 !== i && (A[i] = t), w({ action: n, location: r });
              }
            });
          },
          go: z,
          goBack: function () {
            z(-1);
          },
          goForward: function () {
            z(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = _.setPrompt(e);
            return (
              I || (N(1), (I = !0)),
              function () {
                return I && ((I = !1), N(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = _.appendListener(e);
            return (
              N(1),
              function () {
                N(-1), t();
              }
            );
          },
        };
        return V;
      }
      function T(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function D(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.getUserConfirmation,
          a = t.initialEntries,
          i = void 0 === a ? ["/"] : a,
          o = t.initialIndex,
          l = void 0 === o ? 0 : o,
          u = t.keyLength,
          s = void 0 === u ? 6 : u,
          c = m();
        function f(e) {
          Object(r.a)(x, e),
            (x.length = x.entries.length),
            c.notifyListeners(x.location, x.action);
        }
        function d() {
          return Math.random().toString(36).substr(2, s);
        }
        var h = T(l, 0, i.length - 1),
          g = i.map(function (e) {
            return v(e, void 0, "string" === typeof e ? d() : e.key || d());
          }),
          y = p;
        function b(e) {
          var t = T(x.index + e, 0, x.entries.length - 1),
            r = x.entries[t];
          c.confirmTransitionTo(r, "POP", n, function (e) {
            e ? f({ action: "POP", location: r, index: t }) : f();
          });
        }
        var x = {
          length: g.length,
          action: "POP",
          location: g[h],
          index: h,
          entries: g,
          createHref: y,
          push: function (e, t) {
            var r = "PUSH",
              a = v(e, t, d(), x.location);
            c.confirmTransitionTo(a, r, n, function (e) {
              if (e) {
                var t = x.index + 1,
                  n = x.entries.slice(0);
                n.length > t ? n.splice(t, n.length - t, a) : n.push(a),
                  f({ action: r, location: a, index: t, entries: n });
              }
            });
          },
          replace: function (e, t) {
            var r = "REPLACE",
              a = v(e, t, d(), x.location);
            c.confirmTransitionTo(a, r, n, function (e) {
              e && ((x.entries[x.index] = a), f({ action: r, location: a }));
            });
          },
          go: b,
          goBack: function () {
            b(-1);
          },
          goForward: function () {
            b(1);
          },
          canGo: function (e) {
            var t = x.index + e;
            return t >= 0 && t < x.entries.length;
          },
          block: function (e) {
            return void 0 === e && (e = !1), c.setPrompt(e);
          },
          listen: function (e) {
            return c.appendListener(e);
          },
        };
        return x;
      }
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return Vn;
      }),
        n.d(t, "b", function () {
          return Ua;
        }),
        n.d(t, "c", function () {
          return oi;
        }),
        n.d(t, "d", function () {
          return va;
        }),
        n.d(t, "e", function () {
          return Un;
        }),
        n.d(t, "f", function () {
          return La;
        }),
        n.d(t, "g", function () {
          return si;
        }),
        n.d(t, "h", function () {
          return Ra;
        }),
        n.d(t, "i", function () {
          return Ha;
        }),
        n.d(t, "j", function () {
          return ai;
        });
      var r = n(2);
      var a = n(16),
        i = n(10);
      function o(e, t, n) {
        return (o =
          "undefined" !== typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, n) {
                var r = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Object(i.a)(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var a = Object.getOwnPropertyDescriptor(r, t);
                  return a.get ? a.get.call(n) : a.value;
                }
              })(e, t, n || e);
      }
      var l = n(6),
        u = n(5),
        s = n(7),
        c = n(20);
      var f = n(18);
      function d(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Object(c.a)(e);
          })(e) ||
          (function (e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          Object(f.a)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var h = n(3),
        p = n(4);
      var v =
        "undefined" === typeof window
          ? function (e) {
              return e();
            }
          : window.requestAnimationFrame;
      function g(e, t, n) {
        var r =
            n ||
            function (e) {
              return Array.prototype.slice.call(e);
            },
          a = !1,
          i = [];
        return function () {
          for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
            o[l] = arguments[l];
          (i = r(o)),
            a ||
              ((a = !0),
              v.call(window, function () {
                (a = !1), e.apply(t, i);
              }));
        };
      }
      var m = function (e) {
          return "start" === e ? "left" : "end" === e ? "right" : "center";
        },
        y = function (e, t, n) {
          return "start" === e ? t : "end" === e ? n : (t + n) / 2;
        };
      function b() {}
      var x = (function () {
        var e = 0;
        return function () {
          return e++;
        };
      })();
      function k(e) {
        return null === e || "undefined" === typeof e;
      }
      function _(e) {
        if (Array.isArray && Array.isArray(e)) return !0;
        var t = Object.prototype.toString.call(e);
        return "[object" === t.substr(0, 7) && "Array]" === t.substr(-6);
      }
      function w(e) {
        return (
          null !== e && "[object Object]" === Object.prototype.toString.call(e)
        );
      }
      var S = function (e) {
        return ("number" === typeof e || e instanceof Number) && isFinite(+e);
      };
      function O(e, t) {
        return S(e) ? e : t;
      }
      function M(e, t) {
        return "undefined" === typeof e ? t : e;
      }
      var E = function (e, t) {
        return "string" === typeof e && e.endsWith("%")
          ? (parseFloat(e) / 100) * t
          : +e;
      };
      function C(e, t, n) {
        if (e && "function" === typeof e.call) return e.apply(n, t);
      }
      function P(e, t, n, r) {
        var a, i, o;
        if (_(e))
          if (((i = e.length), r))
            for (a = i - 1; a >= 0; a--) t.call(n, e[a], a);
          else for (a = 0; a < i; a++) t.call(n, e[a], a);
        else if (w(e))
          for (i = (o = Object.keys(e)).length, a = 0; a < i; a++)
            t.call(n, e[o[a]], o[a]);
      }
      function T(e, t) {
        var n, r, a, i;
        if (!e || !t || e.length !== t.length) return !1;
        for (n = 0, r = e.length; n < r; ++n)
          if (
            ((a = e[n]),
            (i = t[n]),
            a.datasetIndex !== i.datasetIndex || a.index !== i.index)
          )
            return !1;
        return !0;
      }
      function D(e) {
        if (_(e)) return e.map(D);
        if (w(e)) {
          for (
            var t = Object.create(null),
              n = Object.keys(e),
              r = n.length,
              a = 0;
            a < r;
            ++a
          )
            t[n[a]] = D(e[n[a]]);
          return t;
        }
        return e;
      }
      function L(e) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(e);
      }
      function j(e, t, n, r) {
        if (L(e)) {
          var a = t[e],
            i = n[e];
          w(a) && w(i) ? R(a, i, r) : (t[e] = D(i));
        }
      }
      function R(e, t, n) {
        var r = _(t) ? t : [t],
          a = r.length;
        if (!w(e)) return e;
        for (var i = (n = n || {}).merger || j, o = 0; o < a; ++o)
          if (w((t = r[o])))
            for (var l = Object.keys(t), u = 0, s = l.length; u < s; ++u)
              i(l[u], e, t, n);
        return e;
      }
      function A(e, t) {
        return R(e, t, { merger: z });
      }
      function z(e, t, n) {
        if (L(e)) {
          var r = t[e],
            a = n[e];
          w(r) && w(a)
            ? A(r, a)
            : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = D(a));
        }
      }
      function F(e, t) {
        var n = e.indexOf(".", t);
        return -1 === n ? e.length : n;
      }
      function N(e, t) {
        if ("" === t) return e;
        for (var n = 0, r = F(t, n); e && r > n; )
          (e = e[t.substr(n, r - n)]), (r = F(t, (n = r + 1)));
        return e;
      }
      function I(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      var V = function (e) {
          return "undefined" !== typeof e;
        },
        B = function (e) {
          return "function" === typeof e;
        },
        W = Math.PI,
        U = 2 * W,
        $ = U + W,
        H = Number.POSITIVE_INFINITY,
        Y = W / 180,
        Q = W / 2,
        q = W / 4,
        X = (2 * W) / 3,
        K = Math.log10,
        G = Math.sign;
      function Z(e) {
        var t = Math.pow(10, Math.floor(K(e))),
          n = e / t;
        return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * t;
      }
      function J(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      }
      function ee(e, t, n) {
        return Math.abs(e - t) < n;
      }
      function te(e, t, n) {
        var r, a, i;
        for (r = 0, a = e.length; r < a; r++)
          (i = e[r][n]),
            isNaN(i) ||
              ((t.min = Math.min(t.min, i)), (t.max = Math.max(t.max, i)));
      }
      function ne(e) {
        return e * (W / 180);
      }
      function re(e) {
        return e * (180 / W);
      }
      function ae(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
      }
      function ie(e, t) {
        return ((e - t + $) % U) - W;
      }
      function oe(e) {
        return ((e % U) + U) % U;
      }
      function le(e, t, n) {
        var r = oe(e),
          a = oe(t),
          i = oe(n),
          o = oe(a - r),
          l = oe(i - r),
          u = oe(r - a),
          s = oe(r - i);
        return r === a || r === i || (o > l && u < s);
      }
      function ue(e, t, n) {
        return Math.max(t, Math.min(n, e));
      }
      var se = function (e) {
          return 0 === e || 1 === e;
        },
        ce = function (e, t, n) {
          return -Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * U) / n);
        },
        fe = function (e, t, n) {
          return Math.pow(2, -10 * e) * Math.sin(((e - t) * U) / n) + 1;
        },
        de = {
          linear: function (e) {
            return e;
          },
          easeInQuad: function (e) {
            return e * e;
          },
          easeOutQuad: function (e) {
            return -e * (e - 2);
          },
          easeInOutQuad: function (e) {
            return (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
          },
          easeInCubic: function (e) {
            return e * e * e;
          },
          easeOutCubic: function (e) {
            return (e -= 1) * e * e + 1;
          },
          easeInOutCubic: function (e) {
            return (e /= 0.5) < 1
              ? 0.5 * e * e * e
              : 0.5 * ((e -= 2) * e * e + 2);
          },
          easeInQuart: function (e) {
            return e * e * e * e;
          },
          easeOutQuart: function (e) {
            return -((e -= 1) * e * e * e - 1);
          },
          easeInOutQuart: function (e) {
            return (e /= 0.5) < 1
              ? 0.5 * e * e * e * e
              : -0.5 * ((e -= 2) * e * e * e - 2);
          },
          easeInQuint: function (e) {
            return e * e * e * e * e;
          },
          easeOutQuint: function (e) {
            return (e -= 1) * e * e * e * e + 1;
          },
          easeInOutQuint: function (e) {
            return (e /= 0.5) < 1
              ? 0.5 * e * e * e * e * e
              : 0.5 * ((e -= 2) * e * e * e * e + 2);
          },
          easeInSine: function (e) {
            return 1 - Math.cos(e * Q);
          },
          easeOutSine: function (e) {
            return Math.sin(e * Q);
          },
          easeInOutSine: function (e) {
            return -0.5 * (Math.cos(W * e) - 1);
          },
          easeInExpo: function (e) {
            return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
          },
          easeOutExpo: function (e) {
            return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
          },
          easeInOutExpo: function (e) {
            return se(e)
              ? e
              : e < 0.5
              ? 0.5 * Math.pow(2, 10 * (2 * e - 1))
              : 0.5 * (2 - Math.pow(2, -10 * (2 * e - 1)));
          },
          easeInCirc: function (e) {
            return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1);
          },
          easeOutCirc: function (e) {
            return Math.sqrt(1 - (e -= 1) * e);
          },
          easeInOutCirc: function (e) {
            return (e /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - e * e) - 1)
              : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
          },
          easeInElastic: function (e) {
            return se(e) ? e : ce(e, 0.075, 0.3);
          },
          easeOutElastic: function (e) {
            return se(e) ? e : fe(e, 0.075, 0.3);
          },
          easeInOutElastic: function (e) {
            var t = 0.1125;
            return se(e)
              ? e
              : e < 0.5
              ? 0.5 * ce(2 * e, t, 0.45)
              : 0.5 + 0.5 * fe(2 * e - 1, t, 0.45);
          },
          easeInBack: function (e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t);
          },
          easeOutBack: function (e) {
            var t = 1.70158;
            return (e -= 1) * e * ((t + 1) * e + t) + 1;
          },
          easeInOutBack: function (e) {
            var t = 1.70158;
            return (e /= 0.5) < 1
              ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
              : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
          },
          easeInBounce: function (e) {
            return 1 - de.easeOutBounce(1 - e);
          },
          easeOutBounce: function (e) {
            var t = 7.5625,
              n = 2.75;
            return e < 1 / n
              ? t * e * e
              : e < 2 / n
              ? t * (e -= 1.5 / n) * e + 0.75
              : e < 2.5 / n
              ? t * (e -= 2.25 / n) * e + 0.9375
              : t * (e -= 2.625 / n) * e + 0.984375;
          },
          easeInOutBounce: function (e) {
            return e < 0.5
              ? 0.5 * de.easeInBounce(2 * e)
              : 0.5 * de.easeOutBounce(2 * e - 1) + 0.5;
          },
        },
        he = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        pe = "0123456789ABCDEF",
        ve = function (e) {
          return pe[15 & e];
        },
        ge = function (e) {
          return pe[(240 & e) >> 4] + pe[15 & e];
        },
        me = function (e) {
          return (240 & e) >> 4 === (15 & e);
        };
      function ye(e) {
        var t = (function (e) {
          return me(e.r) && me(e.g) && me(e.b) && me(e.a);
        })(e)
          ? ve
          : ge;
        return e
          ? "#" + t(e.r) + t(e.g) + t(e.b) + (e.a < 255 ? t(e.a) : "")
          : e;
      }
      function be(e) {
        return (e + 0.5) | 0;
      }
      var xe = function (e, t, n) {
        return Math.max(Math.min(e, n), t);
      };
      function ke(e) {
        return xe(be(2.55 * e), 0, 255);
      }
      function _e(e) {
        return xe(be(255 * e), 0, 255);
      }
      function we(e) {
        return xe(be(e / 2.55) / 100, 0, 1);
      }
      function Se(e) {
        return xe(be(100 * e), 0, 100);
      }
      var Oe = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
      var Me = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function Ee(e, t, n) {
        var r = t * Math.min(n, 1 - n),
          a = function (t) {
            var a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : (t + e / 30) % 12;
            return n - r * Math.max(Math.min(a - 3, 9 - a, 1), -1);
          };
        return [a(0), a(8), a(4)];
      }
      function Ce(e, t, n) {
        var r = function (r) {
          var a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (r + e / 60) % 6;
          return n - n * t * Math.max(Math.min(a, 4 - a, 1), 0);
        };
        return [r(5), r(3), r(1)];
      }
      function Pe(e, t, n) {
        var r,
          a = Ee(e, 1, 0.5);
        for (t + n > 1 && ((t *= r = 1 / (t + n)), (n *= r)), r = 0; r < 3; r++)
          (a[r] *= 1 - t - n), (a[r] += t);
        return a;
      }
      function Te(e) {
        var t,
          n,
          r,
          a = e.r / 255,
          i = e.g / 255,
          o = e.b / 255,
          l = Math.max(a, i, o),
          u = Math.min(a, i, o),
          s = (l + u) / 2;
        return (
          l !== u &&
            ((r = l - u),
            (n = s > 0.5 ? r / (2 - l - u) : r / (l + u)),
            (t =
              60 *
                (t =
                  l === a
                    ? (i - o) / r + (i < o ? 6 : 0)
                    : l === i
                    ? (o - a) / r + 2
                    : (a - i) / r + 4) +
              0.5)),
          [0 | t, n || 0, s]
        );
      }
      function De(e, t, n, r) {
        return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, r)).map(_e);
      }
      function Le(e, t, n) {
        return De(Ee, e, t, n);
      }
      function je(e) {
        return ((e % 360) + 360) % 360;
      }
      function Re(e) {
        var t,
          n = Me.exec(e),
          r = 255;
        if (n) {
          n[5] !== t && (r = n[6] ? ke(+n[5]) : _e(+n[5]));
          var a = je(+n[2]),
            i = +n[3] / 100,
            o = +n[4] / 100;
          return {
            r: (t =
              "hwb" === n[1]
                ? (function (e, t, n) {
                    return De(Pe, e, t, n);
                  })(a, i, o)
                : "hsv" === n[1]
                ? (function (e, t, n) {
                    return De(Ce, e, t, n);
                  })(a, i, o)
                : Le(a, i, o))[0],
            g: t[1],
            b: t[2],
            a: r,
          };
        }
      }
      var Ae,
        ze = {
          x: "dark",
          Z: "light",
          Y: "re",
          X: "blu",
          W: "gr",
          V: "medium",
          U: "slate",
          A: "ee",
          T: "ol",
          S: "or",
          B: "ra",
          C: "lateg",
          D: "ights",
          R: "in",
          Q: "turquois",
          E: "hi",
          P: "ro",
          O: "al",
          N: "le",
          M: "de",
          L: "yello",
          F: "en",
          K: "ch",
          G: "arks",
          H: "ea",
          I: "ightg",
          J: "wh",
        },
        Fe = {
          OiceXe: "f0f8ff",
          antiquewEte: "faebd7",
          aqua: "ffff",
          aquamarRe: "7fffd4",
          azuY: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "0",
          blanKedOmond: "ffebcd",
          Xe: "ff",
          XeviTet: "8a2be2",
          bPwn: "a52a2a",
          burlywood: "deb887",
          caMtXe: "5f9ea0",
          KartYuse: "7fff00",
          KocTate: "d2691e",
          cSO: "ff7f50",
          cSnflowerXe: "6495ed",
          cSnsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "ffff",
          xXe: "8b",
          xcyan: "8b8b",
          xgTMnPd: "b8860b",
          xWay: "a9a9a9",
          xgYF: "6400",
          xgYy: "a9a9a9",
          xkhaki: "bdb76b",
          xmagFta: "8b008b",
          xTivegYF: "556b2f",
          xSange: "ff8c00",
          xScEd: "9932cc",
          xYd: "8b0000",
          xsOmon: "e9967a",
          xsHgYF: "8fbc8f",
          xUXe: "483d8b",
          xUWay: "2f4f4f",
          xUgYy: "2f4f4f",
          xQe: "ced1",
          xviTet: "9400d3",
          dAppRk: "ff1493",
          dApskyXe: "bfff",
          dimWay: "696969",
          dimgYy: "696969",
          dodgerXe: "1e90ff",
          fiYbrick: "b22222",
          flSOwEte: "fffaf0",
          foYstWAn: "228b22",
          fuKsia: "ff00ff",
          gaRsbSo: "dcdcdc",
          ghostwEte: "f8f8ff",
          gTd: "ffd700",
          gTMnPd: "daa520",
          Way: "808080",
          gYF: "8000",
          gYFLw: "adff2f",
          gYy: "808080",
          honeyMw: "f0fff0",
          hotpRk: "ff69b4",
          RdianYd: "cd5c5c",
          Rdigo: "4b0082",
          ivSy: "fffff0",
          khaki: "f0e68c",
          lavFMr: "e6e6fa",
          lavFMrXsh: "fff0f5",
          lawngYF: "7cfc00",
          NmoncEffon: "fffacd",
          ZXe: "add8e6",
          ZcSO: "f08080",
          Zcyan: "e0ffff",
          ZgTMnPdLw: "fafad2",
          ZWay: "d3d3d3",
          ZgYF: "90ee90",
          ZgYy: "d3d3d3",
          ZpRk: "ffb6c1",
          ZsOmon: "ffa07a",
          ZsHgYF: "20b2aa",
          ZskyXe: "87cefa",
          ZUWay: "778899",
          ZUgYy: "778899",
          ZstAlXe: "b0c4de",
          ZLw: "ffffe0",
          lime: "ff00",
          limegYF: "32cd32",
          lRF: "faf0e6",
          magFta: "ff00ff",
          maPon: "800000",
          VaquamarRe: "66cdaa",
          VXe: "cd",
          VScEd: "ba55d3",
          VpurpN: "9370db",
          VsHgYF: "3cb371",
          VUXe: "7b68ee",
          VsprRggYF: "fa9a",
          VQe: "48d1cc",
          VviTetYd: "c71585",
          midnightXe: "191970",
          mRtcYam: "f5fffa",
          mistyPse: "ffe4e1",
          moccasR: "ffe4b5",
          navajowEte: "ffdead",
          navy: "80",
          Tdlace: "fdf5e6",
          Tive: "808000",
          TivedBb: "6b8e23",
          Sange: "ffa500",
          SangeYd: "ff4500",
          ScEd: "da70d6",
          pOegTMnPd: "eee8aa",
          pOegYF: "98fb98",
          pOeQe: "afeeee",
          pOeviTetYd: "db7093",
          papayawEp: "ffefd5",
          pHKpuff: "ffdab9",
          peru: "cd853f",
          pRk: "ffc0cb",
          plum: "dda0dd",
          powMrXe: "b0e0e6",
          purpN: "800080",
          YbeccapurpN: "663399",
          Yd: "ff0000",
          Psybrown: "bc8f8f",
          PyOXe: "4169e1",
          saddNbPwn: "8b4513",
          sOmon: "fa8072",
          sandybPwn: "f4a460",
          sHgYF: "2e8b57",
          sHshell: "fff5ee",
          siFna: "a0522d",
          silver: "c0c0c0",
          skyXe: "87ceeb",
          UXe: "6a5acd",
          UWay: "708090",
          UgYy: "708090",
          snow: "fffafa",
          sprRggYF: "ff7f",
          stAlXe: "4682b4",
          tan: "d2b48c",
          teO: "8080",
          tEstN: "d8bfd8",
          tomato: "ff6347",
          Qe: "40e0d0",
          viTet: "ee82ee",
          JHt: "f5deb3",
          wEte: "ffffff",
          wEtesmoke: "f5f5f5",
          Lw: "ffff00",
          LwgYF: "9acd32",
        };
      function Ne(e) {
        Ae ||
          ((Ae = (function () {
            var e,
              t,
              n,
              r,
              a,
              i = {},
              o = Object.keys(Fe),
              l = Object.keys(ze);
            for (e = 0; e < o.length; e++) {
              for (r = a = o[e], t = 0; t < l.length; t++)
                (n = l[t]), (a = a.replace(n, ze[n]));
              (n = parseInt(Fe[r], 16)),
                (i[a] = [(n >> 16) & 255, (n >> 8) & 255, 255 & n]);
            }
            return i;
          })()).transparent = [0, 0, 0, 0]);
        var t = Ae[e.toLowerCase()];
        return (
          t && { r: t[0], g: t[1], b: t[2], a: 4 === t.length ? t[3] : 255 }
        );
      }
      function Ie(e, t, n) {
        if (e) {
          var r = Te(e);
          (r[t] = Math.max(0, Math.min(r[t] + r[t] * n, 0 === t ? 360 : 1))),
            (r = Le(r)),
            (e.r = r[0]),
            (e.g = r[1]),
            (e.b = r[2]);
        }
      }
      function Ve(e, t) {
        return e ? Object.assign(t || {}, e) : e;
      }
      function Be(e) {
        var t = { r: 0, g: 0, b: 0, a: 255 };
        return (
          Array.isArray(e)
            ? e.length >= 3 &&
              ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
              e.length > 3 && (t.a = _e(e[3])))
            : ((t = Ve(e, { r: 0, g: 0, b: 0, a: 1 })).a = _e(t.a)),
          t
        );
      }
      function We(e) {
        return "r" === e.charAt(0)
          ? (function (e) {
              var t,
                n,
                r,
                a = Oe.exec(e),
                i = 255;
              if (a) {
                if (a[7] !== t) {
                  var o = +a[7];
                  i = 255 & (a[8] ? ke(o) : 255 * o);
                }
                return (
                  (t = +a[1]),
                  (n = +a[3]),
                  (r = +a[5]),
                  {
                    r: (t = 255 & (a[2] ? ke(t) : t)),
                    g: (n = 255 & (a[4] ? ke(n) : n)),
                    b: (r = 255 & (a[6] ? ke(r) : r)),
                    a: i,
                  }
                );
              }
            })(e)
          : Re(e);
      }
      var Ue = (function () {
        function e(t) {
          if ((Object(h.a)(this, e), t instanceof e)) return t;
          var n,
            r = typeof t;
          "object" === r
            ? (n = Be(t))
            : "string" === r &&
              (n =
                (function (e) {
                  var t,
                    n = e.length;
                  return (
                    "#" === e[0] &&
                      (4 === n || 5 === n
                        ? (t = {
                            r: 255 & (17 * he[e[1]]),
                            g: 255 & (17 * he[e[2]]),
                            b: 255 & (17 * he[e[3]]),
                            a: 5 === n ? 17 * he[e[4]] : 255,
                          })
                        : (7 !== n && 9 !== n) ||
                          (t = {
                            r: (he[e[1]] << 4) | he[e[2]],
                            g: (he[e[3]] << 4) | he[e[4]],
                            b: (he[e[5]] << 4) | he[e[6]],
                            a: 9 === n ? (he[e[7]] << 4) | he[e[8]] : 255,
                          })),
                    t
                  );
                })(t) ||
                Ne(t) ||
                We(t)),
            (this._rgb = n),
            (this._valid = !!n);
        }
        return (
          Object(p.a)(e, [
            {
              key: "valid",
              get: function () {
                return this._valid;
              },
            },
            {
              key: "rgb",
              get: function () {
                var e = Ve(this._rgb);
                return e && (e.a = we(e.a)), e;
              },
              set: function (e) {
                this._rgb = Be(e);
              },
            },
            {
              key: "rgbString",
              value: function () {
                return this._valid
                  ? (e = this._rgb) &&
                      (e.a < 255
                        ? "rgba("
                            .concat(e.r, ", ")
                            .concat(e.g, ", ")
                            .concat(e.b, ", ")
                            .concat(we(e.a), ")")
                        : "rgb("
                            .concat(e.r, ", ")
                            .concat(e.g, ", ")
                            .concat(e.b, ")"))
                  : this._rgb;
                var e;
              },
            },
            {
              key: "hexString",
              value: function () {
                return this._valid ? ye(this._rgb) : this._rgb;
              },
            },
            {
              key: "hslString",
              value: function () {
                return this._valid
                  ? (function (e) {
                      if (e) {
                        var t = Te(e),
                          n = t[0],
                          r = Se(t[1]),
                          a = Se(t[2]);
                        return e.a < 255
                          ? "hsla("
                              .concat(n, ", ")
                              .concat(r, "%, ")
                              .concat(a, "%, ")
                              .concat(we(e.a), ")")
                          : "hsl("
                              .concat(n, ", ")
                              .concat(r, "%, ")
                              .concat(a, "%)");
                      }
                    })(this._rgb)
                  : this._rgb;
              },
            },
            {
              key: "mix",
              value: function (e, t) {
                var n = this;
                if (e) {
                  var r,
                    a = n.rgb,
                    i = e.rgb,
                    o = t === r ? 0.5 : t,
                    l = 2 * o - 1,
                    u = a.a - i.a,
                    s = ((l * u === -1 ? l : (l + u) / (1 + l * u)) + 1) / 2;
                  (r = 1 - s),
                    (a.r = 255 & (s * a.r + r * i.r + 0.5)),
                    (a.g = 255 & (s * a.g + r * i.g + 0.5)),
                    (a.b = 255 & (s * a.b + r * i.b + 0.5)),
                    (a.a = o * a.a + (1 - o) * i.a),
                    (n.rgb = a);
                }
                return n;
              },
            },
            {
              key: "clone",
              value: function () {
                return new e(this.rgb);
              },
            },
            {
              key: "alpha",
              value: function (e) {
                return (this._rgb.a = _e(e)), this;
              },
            },
            {
              key: "clearer",
              value: function (e) {
                return (this._rgb.a *= 1 - e), this;
              },
            },
            {
              key: "greyscale",
              value: function () {
                var e = this._rgb,
                  t = be(0.3 * e.r + 0.59 * e.g + 0.11 * e.b);
                return (e.r = e.g = e.b = t), this;
              },
            },
            {
              key: "opaquer",
              value: function (e) {
                return (this._rgb.a *= 1 + e), this;
              },
            },
            {
              key: "negate",
              value: function () {
                var e = this._rgb;
                return (
                  (e.r = 255 - e.r), (e.g = 255 - e.g), (e.b = 255 - e.b), this
                );
              },
            },
            {
              key: "lighten",
              value: function (e) {
                return Ie(this._rgb, 2, e), this;
              },
            },
            {
              key: "darken",
              value: function (e) {
                return Ie(this._rgb, 2, -e), this;
              },
            },
            {
              key: "saturate",
              value: function (e) {
                return Ie(this._rgb, 1, e), this;
              },
            },
            {
              key: "desaturate",
              value: function (e) {
                return Ie(this._rgb, 1, -e), this;
              },
            },
            {
              key: "rotate",
              value: function (e) {
                return (
                  (function (e, t) {
                    var n = Te(e);
                    (n[0] = je(n[0] + t)),
                      (n = Le(n)),
                      (e.r = n[0]),
                      (e.g = n[1]),
                      (e.b = n[2]);
                  })(this._rgb, e),
                  this
                );
              },
            },
          ]),
          e
        );
      })();
      function $e(e) {
        return new Ue(e);
      }
      var He = function (e) {
        return e instanceof CanvasGradient || e instanceof CanvasPattern;
      };
      function Ye(e) {
        return He(e) ? e : $e(e);
      }
      function Qe(e) {
        return He(e) ? e : $e(e).saturate(0.5).darken(0.1).hexString();
      }
      var qe = Object.create(null),
        Xe = Object.create(null);
      function Ke(e, t) {
        if (!t) return e;
        for (var n = t.split("."), r = 0, a = n.length; r < a; ++r) {
          var i = n[r];
          e = e[i] || (e[i] = Object.create(null));
        }
        return e;
      }
      function Ge(e, t, n) {
        return "string" === typeof t ? R(Ke(e, t), n) : R(Ke(e, ""), t);
      }
      var Ze = new ((function () {
        function e(t) {
          Object(h.a)(this, e),
            (this.animation = void 0),
            (this.backgroundColor = "rgba(0,0,0,0.1)"),
            (this.borderColor = "rgba(0,0,0,0.1)"),
            (this.color = "#666"),
            (this.datasets = {}),
            (this.devicePixelRatio = function (e) {
              return e.chart.platform.getDevicePixelRatio();
            }),
            (this.elements = {}),
            (this.events = [
              "mousemove",
              "mouseout",
              "click",
              "touchstart",
              "touchmove",
            ]),
            (this.font = {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12,
              style: "normal",
              lineHeight: 1.2,
              weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = function (e, t) {
              return Qe(t.backgroundColor);
            }),
            (this.hoverBorderColor = function (e, t) {
              return Qe(t.borderColor);
            }),
            (this.hoverColor = function (e, t) {
              return Qe(t.color);
            }),
            (this.indexAxis = "x"),
            (this.interaction = { mode: "nearest", intersect: !0 }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            this.describe(t);
        }
        return (
          Object(p.a)(e, [
            {
              key: "set",
              value: function (e, t) {
                return Ge(this, e, t);
              },
            },
            {
              key: "get",
              value: function (e) {
                return Ke(this, e);
              },
            },
            {
              key: "describe",
              value: function (e, t) {
                return Ge(Xe, e, t);
              },
            },
            {
              key: "override",
              value: function (e, t) {
                return Ge(qe, e, t);
              },
            },
            {
              key: "route",
              value: function (e, t, n, a) {
                var i,
                  o = Ke(this, e),
                  l = Ke(this, n),
                  u = "_" + t;
                Object.defineProperties(
                  o,
                  ((i = {}),
                  Object(r.a)(i, u, { value: o[t], writable: !0 }),
                  Object(r.a)(i, t, {
                    enumerable: !0,
                    get: function () {
                      var e = this[u],
                        t = l[a];
                      return w(e) ? Object.assign({}, t, e) : M(e, t);
                    },
                    set: function (e) {
                      this[u] = e;
                    },
                  }),
                  i)
                );
              },
            },
          ]),
          e
        );
      })())({
        _scriptable: function (e) {
          return !e.startsWith("on");
        },
        _indexable: function (e) {
          return "events" !== e;
        },
        hover: { _fallback: "interaction" },
        interaction: { _scriptable: !1, _indexable: !1 },
      });
      function Je(e, t, n, r, a) {
        var i = t[a];
        return (
          i || ((i = t[a] = e.measureText(a).width), n.push(a)),
          i > r && (r = i),
          r
        );
      }
      function et(e, t, n, r) {
        var a = ((r = r || {}).data = r.data || {}),
          i = (r.garbageCollect = r.garbageCollect || []);
        r.font !== t &&
          ((a = r.data = {}), (i = r.garbageCollect = []), (r.font = t)),
          e.save(),
          (e.font = t);
        var o,
          l,
          u,
          s,
          c,
          f = 0,
          d = n.length;
        for (o = 0; o < d; o++)
          if (void 0 !== (s = n[o]) && null !== s && !0 !== _(s))
            f = Je(e, a, i, f, s);
          else if (_(s))
            for (l = 0, u = s.length; l < u; l++)
              void 0 === (c = s[l]) ||
                null === c ||
                _(c) ||
                (f = Je(e, a, i, f, c));
        e.restore();
        var h = i.length / 2;
        if (h > n.length) {
          for (o = 0; o < h; o++) delete a[i[o]];
          i.splice(0, h);
        }
        return f;
      }
      function tt(e, t, n) {
        var r = e.currentDevicePixelRatio,
          a = 0 !== n ? Math.max(n / 2, 0.5) : 0;
        return Math.round((t - a) * r) / r + a;
      }
      function nt(e, t) {
        (t = t || e.getContext("2d")).save(),
          t.resetTransform(),
          t.clearRect(0, 0, e.width, e.height),
          t.restore();
      }
      function rt(e, t, n, r) {
        var a,
          i,
          o,
          l,
          u,
          s = t.pointStyle,
          c = t.rotation,
          f = t.radius,
          d = (c || 0) * Y;
        if (
          s &&
          "object" === typeof s &&
          ("[object HTMLImageElement]" === (a = s.toString()) ||
            "[object HTMLCanvasElement]" === a)
        )
          return (
            e.save(),
            e.translate(n, r),
            e.rotate(d),
            e.drawImage(s, -s.width / 2, -s.height / 2, s.width, s.height),
            void e.restore()
          );
        if (!(isNaN(f) || f <= 0)) {
          switch ((e.beginPath(), s)) {
            default:
              e.arc(n, r, f, 0, U), e.closePath();
              break;
            case "triangle":
              e.moveTo(n + Math.sin(d) * f, r - Math.cos(d) * f),
                (d += X),
                e.lineTo(n + Math.sin(d) * f, r - Math.cos(d) * f),
                (d += X),
                e.lineTo(n + Math.sin(d) * f, r - Math.cos(d) * f),
                e.closePath();
              break;
            case "rectRounded":
              (l = f - (u = 0.516 * f)),
                (i = Math.cos(d + q) * l),
                (o = Math.sin(d + q) * l),
                e.arc(n - i, r - o, u, d - W, d - Q),
                e.arc(n + o, r - i, u, d - Q, d),
                e.arc(n + i, r + o, u, d, d + Q),
                e.arc(n - o, r + i, u, d + Q, d + W),
                e.closePath();
              break;
            case "rect":
              if (!c) {
                (l = Math.SQRT1_2 * f), e.rect(n - l, r - l, 2 * l, 2 * l);
                break;
              }
              d += q;
            case "rectRot":
              (i = Math.cos(d) * f),
                (o = Math.sin(d) * f),
                e.moveTo(n - i, r - o),
                e.lineTo(n + o, r - i),
                e.lineTo(n + i, r + o),
                e.lineTo(n - o, r + i),
                e.closePath();
              break;
            case "crossRot":
              d += q;
            case "cross":
              (i = Math.cos(d) * f),
                (o = Math.sin(d) * f),
                e.moveTo(n - i, r - o),
                e.lineTo(n + i, r + o),
                e.moveTo(n + o, r - i),
                e.lineTo(n - o, r + i);
              break;
            case "star":
              (i = Math.cos(d) * f),
                (o = Math.sin(d) * f),
                e.moveTo(n - i, r - o),
                e.lineTo(n + i, r + o),
                e.moveTo(n + o, r - i),
                e.lineTo(n - o, r + i),
                (d += q),
                (i = Math.cos(d) * f),
                (o = Math.sin(d) * f),
                e.moveTo(n - i, r - o),
                e.lineTo(n + i, r + o),
                e.moveTo(n + o, r - i),
                e.lineTo(n - o, r + i);
              break;
            case "line":
              (i = Math.cos(d) * f),
                (o = Math.sin(d) * f),
                e.moveTo(n - i, r - o),
                e.lineTo(n + i, r + o);
              break;
            case "dash":
              e.moveTo(n, r),
                e.lineTo(n + Math.cos(d) * f, r + Math.sin(d) * f);
          }
          e.fill(), t.borderWidth > 0 && e.stroke();
        }
      }
      function at(e, t, n) {
        return (
          (n = n || 0.5),
          e &&
            e.x > t.left - n &&
            e.x < t.right + n &&
            e.y > t.top - n &&
            e.y < t.bottom + n
        );
      }
      function it(e, t) {
        e.save(),
          e.beginPath(),
          e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
          e.clip();
      }
      function ot(e) {
        e.restore();
      }
      function lt(e, t, n, r, a) {
        if (!t) return e.lineTo(n.x, n.y);
        if ("middle" === a) {
          var i = (t.x + n.x) / 2;
          e.lineTo(i, t.y), e.lineTo(i, n.y);
        } else
          ("after" === a) !== !!r ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
        e.lineTo(n.x, n.y);
      }
      function ut(e, t, n, r) {
        if (!t) return e.lineTo(n.x, n.y);
        e.bezierCurveTo(
          r ? t.cp1x : t.cp2x,
          r ? t.cp1y : t.cp2y,
          r ? n.cp2x : n.cp1x,
          r ? n.cp2y : n.cp1y,
          n.x,
          n.y
        );
      }
      function st(e, t, n, r, a) {
        var i,
          o,
          l =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
          u = _(t) ? t : [t],
          s = l.strokeWidth > 0 && "" !== l.strokeColor;
        for (
          e.save(),
            l.translation && e.translate(l.translation[0], l.translation[1]),
            k(l.rotation) || e.rotate(l.rotation),
            e.font = a.string,
            l.color && (e.fillStyle = l.color),
            l.textAlign && (e.textAlign = l.textAlign),
            l.textBaseline && (e.textBaseline = l.textBaseline),
            i = 0;
          i < u.length;
          ++i
        ) {
          if (
            ((o = u[i]),
            s &&
              (l.strokeColor && (e.strokeStyle = l.strokeColor),
              k(l.strokeWidth) || (e.lineWidth = l.strokeWidth),
              e.strokeText(o, n, r, l.maxWidth)),
            e.fillText(o, n, r, l.maxWidth),
            l.strikethrough || l.underline)
          ) {
            var c = e.measureText(o),
              f = n - c.actualBoundingBoxLeft,
              d = n + c.actualBoundingBoxRight,
              h = r - c.actualBoundingBoxAscent,
              p = r + c.actualBoundingBoxDescent,
              v = l.strikethrough ? (h + p) / 2 : p;
            (e.strokeStyle = e.fillStyle),
              e.beginPath(),
              (e.lineWidth = l.decorationWidth || 2),
              e.moveTo(f, v),
              e.lineTo(d, v),
              e.stroke();
          }
          r += a.lineHeight;
        }
        e.restore();
      }
      function ct(e, t) {
        var n = t.x,
          r = t.y,
          a = t.w,
          i = t.h,
          o = t.radius;
        e.arc(n + o.topLeft, r + o.topLeft, o.topLeft, -Q, W, !0),
          e.lineTo(n, r + i - o.bottomLeft),
          e.arc(n + o.bottomLeft, r + i - o.bottomLeft, o.bottomLeft, W, Q, !0),
          e.lineTo(n + a - o.bottomRight, r + i),
          e.arc(
            n + a - o.bottomRight,
            r + i - o.bottomRight,
            o.bottomRight,
            Q,
            0,
            !0
          ),
          e.lineTo(n + a, r + o.topRight),
          e.arc(n + a - o.topRight, r + o.topRight, o.topRight, 0, -Q, !0),
          e.lineTo(n + o.topLeft, r);
      }
      var ft = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
        dt = new RegExp(
          /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
        );
      function ht(e, t) {
        var n = ("" + e).match(ft);
        if (!n || "normal" === n[1]) return 1.2 * t;
        switch (((e = +n[2]), n[3])) {
          case "px":
            return e;
          case "%":
            e /= 100;
        }
        return t * e;
      }
      function pt(e, t) {
        var n,
          r = {},
          a = w(t),
          i = a ? Object.keys(t) : t,
          o = w(e)
            ? a
              ? function (n) {
                  return M(e[n], e[t[n]]);
                }
              : function (t) {
                  return e[t];
                }
            : function () {
                return e;
              },
          l = Object(s.a)(i);
        try {
          for (l.s(); !(n = l.n()).done; ) {
            var u = n.value;
            r[u] = +o(u) || 0;
          }
        } catch (c) {
          l.e(c);
        } finally {
          l.f();
        }
        return r;
      }
      function vt(e) {
        return pt(e, { top: "y", right: "x", bottom: "y", left: "x" });
      }
      function gt(e) {
        return pt(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
      }
      function mt(e) {
        var t = vt(e);
        return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
      }
      function yt(e, t) {
        (e = e || {}), (t = t || Ze.font);
        var n = M(e.size, t.size);
        "string" === typeof n && (n = parseInt(n, 10));
        var r = M(e.style, t.style);
        r &&
          !("" + r).match(dt) &&
          (console.warn('Invalid font style specified: "' + r + '"'), (r = ""));
        var a = {
          family: M(e.family, t.family),
          lineHeight: ht(M(e.lineHeight, t.lineHeight), n),
          size: n,
          style: r,
          weight: M(e.weight, t.weight),
          string: "",
        };
        return (
          (a.string = (function (e) {
            return !e || k(e.size) || k(e.family)
              ? null
              : (e.style ? e.style + " " : "") +
                  (e.weight ? e.weight + " " : "") +
                  e.size +
                  "px " +
                  e.family;
          })(a)),
          a
        );
      }
      function bt(e, t, n, r) {
        var a,
          i,
          o,
          l = !0;
        for (a = 0, i = e.length; a < i; ++a)
          if (
            void 0 !== (o = e[a]) &&
            (void 0 !== t && "function" === typeof o && ((o = o(t)), (l = !1)),
            void 0 !== n && _(o) && ((o = o[n % o.length]), (l = !1)),
            void 0 !== o)
          )
            return r && !l && (r.cacheable = !1), o;
      }
      function xt(e, t, n) {
        n =
          n ||
          function (n) {
            return e[n] < t;
          };
        for (var r, a = e.length - 1, i = 0; a - i > 1; )
          n((r = (i + a) >> 1)) ? (i = r) : (a = r);
        return { lo: i, hi: a };
      }
      var kt = function (e, t, n) {
          return xt(e, n, function (r) {
            return e[r][t] < n;
          });
        },
        _t = function (e, t, n) {
          return xt(e, n, function (r) {
            return e[r][t] >= n;
          });
        };
      var wt = ["push", "pop", "shift", "splice", "unshift"];
      function St(e, t) {
        var n = e._chartjs;
        if (n) {
          var r = n.listeners,
            a = r.indexOf(t);
          -1 !== a && r.splice(a, 1),
            r.length > 0 ||
              (wt.forEach(function (t) {
                delete e[t];
              }),
              delete e._chartjs);
        }
      }
      function Ot(e) {
        var t,
          n,
          r = new Set();
        for (t = 0, n = e.length; t < n; ++t) r.add(e[t]);
        if (r.size === n) return e;
        var a = [];
        return (
          r.forEach(function (e) {
            a.push(e);
          }),
          a
        );
      }
      function Mt(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : [""],
          a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
          i = arguments.length > 3 ? arguments[3] : void 0,
          o =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : function () {
                  return e[0];
                };
        V(i) || (i = Nt("_fallback", e));
        var l =
          ((t = {}),
          Object(r.a)(t, Symbol.toStringTag, "Object"),
          Object(r.a)(t, "_cacheable", !0),
          Object(r.a)(t, "_scopes", e),
          Object(r.a)(t, "_rootScopes", a),
          Object(r.a)(t, "_fallback", i),
          Object(r.a)(t, "_getTarget", o),
          Object(r.a)(t, "override", function (t) {
            return Mt([t].concat(d(e)), n, a, i);
          }),
          t);
        return new Proxy(l, {
          deleteProperty: function (t, n) {
            return delete t[n], delete t._keys, delete e[0][n], !0;
          },
          get: function (t, r) {
            return Dt(t, r, function () {
              return Ft(r, n, e, t);
            });
          },
          getOwnPropertyDescriptor: function (e, t) {
            return Reflect.getOwnPropertyDescriptor(e._scopes[0], t);
          },
          getPrototypeOf: function () {
            return Reflect.getPrototypeOf(e[0]);
          },
          has: function (e, t) {
            return It(e).includes(t);
          },
          ownKeys: function (e) {
            return It(e);
          },
          set: function (e, t, n) {
            return (
              ((e._storage || (e._storage = o()))[t] = n),
              delete e[t],
              delete e._keys,
              !0
            );
          },
        });
      }
      function Et(e, t, n, r) {
        var a = {
          _cacheable: !1,
          _proxy: e,
          _context: t,
          _subProxy: n,
          _stack: new Set(),
          _descriptors: Ct(e, r),
          setContext: function (t) {
            return Et(e, t, n, r);
          },
          override: function (a) {
            return Et(e.override(a), t, n, r);
          },
        };
        return new Proxy(a, {
          deleteProperty: function (t, n) {
            return delete t[n], delete e[n], !0;
          },
          get: function (e, t, n) {
            return Dt(e, t, function () {
              return (function (e, t, n) {
                var r = e._proxy,
                  a = e._context,
                  i = e._subProxy,
                  o = e._descriptors,
                  l = r[t];
                B(l) &&
                  o.isScriptable(t) &&
                  (l = (function (e, t, n, r) {
                    var a = n._proxy,
                      i = n._context,
                      o = n._subProxy,
                      l = n._stack;
                    if (l.has(e))
                      throw new Error(
                        "Recursion detected: " + d(l).join("->") + "->" + e
                      );
                    l.add(e),
                      (t = t(i, o || r)),
                      l.delete(e),
                      w(t) && (t = At(a._scopes, a, e, t));
                    return t;
                  })(t, l, e, n));
                _(l) &&
                  l.length &&
                  (l = (function (e, t, n, r) {
                    var a = n._proxy,
                      i = n._context,
                      o = n._subProxy,
                      l = n._descriptors;
                    if (V(i.index) && r(e)) t = t[i.index % t.length];
                    else if (w(t[0])) {
                      var u = t,
                        c = a._scopes.filter(function (e) {
                          return e !== u;
                        });
                      t = [];
                      var f,
                        d = Object(s.a)(u);
                      try {
                        for (d.s(); !(f = d.n()).done; ) {
                          var h = At(c, a, e, f.value);
                          t.push(Et(h, i, o && o[e], l));
                        }
                      } catch (p) {
                        d.e(p);
                      } finally {
                        d.f();
                      }
                    }
                    return t;
                  })(t, l, e, o.isIndexable));
                Tt(t, l) && (l = Et(l, a, i && i[t], o));
                return l;
              })(e, t, n);
            });
          },
          getOwnPropertyDescriptor: function (t, n) {
            return t._descriptors.allKeys
              ? Reflect.has(e, n)
                ? { enumerable: !0, configurable: !0 }
                : void 0
              : Reflect.getOwnPropertyDescriptor(e, n);
          },
          getPrototypeOf: function () {
            return Reflect.getPrototypeOf(e);
          },
          has: function (t, n) {
            return Reflect.has(e, n);
          },
          ownKeys: function () {
            return Reflect.ownKeys(e);
          },
          set: function (t, n, r) {
            return (e[n] = r), delete t[n], !0;
          },
        });
      }
      function Ct(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { scriptable: !0, indexable: !0 },
          n = e._scriptable,
          r = void 0 === n ? t.scriptable : n,
          a = e._indexable,
          i = void 0 === a ? t.indexable : a,
          o = e._allKeys,
          l = void 0 === o ? t.allKeys : o;
        return {
          allKeys: l,
          scriptable: r,
          indexable: i,
          isScriptable: B(r)
            ? r
            : function () {
                return r;
              },
          isIndexable: B(i)
            ? i
            : function () {
                return i;
              },
        };
      }
      var Pt = function (e, t) {
          return e ? e + I(t) : t;
        },
        Tt = function (e, t) {
          return w(t) && "adapters" !== e;
        };
      function Dt(e, t, n) {
        var r = e[t];
        return V(r) || ((r = n()), V(r) && (e[t] = r)), r;
      }
      function Lt(e, t, n) {
        return B(e) ? e(t, n) : e;
      }
      var jt = function (e, t) {
        return !0 === e ? t : "string" === typeof e ? N(t, e) : void 0;
      };
      function Rt(e, t, n, r) {
        var a,
          i = Object(s.a)(t);
        try {
          for (i.s(); !(a = i.n()).done; ) {
            var o = a.value,
              l = jt(n, o);
            if (l) {
              e.add(l);
              var u = Lt(l._fallback, n, l);
              if (V(u) && u !== n && u !== r) return u;
            } else if (!1 === l && V(r) && n !== r) return null;
          }
        } catch (c) {
          i.e(c);
        } finally {
          i.f();
        }
        return !1;
      }
      function At(e, t, n, r) {
        var a = t._rootScopes,
          i = Lt(t._fallback, n, r),
          o = [].concat(d(e), d(a)),
          l = new Set();
        l.add(r);
        var u = zt(l, o, n, i || n);
        return (
          null !== u &&
          (!V(i) || i === n || null !== (u = zt(l, o, i, u))) &&
          Mt(d(l), [""], a, i, function () {
            var e = t._getTarget();
            return n in e || (e[n] = {}), e[n];
          })
        );
      }
      function zt(e, t, n, r) {
        for (; n; ) n = Rt(e, t, n, r);
        return n;
      }
      function Ft(e, t, n, r) {
        var a,
          i,
          o = Object(s.a)(t);
        try {
          for (o.s(); !(i = o.n()).done; ) {
            var l = i.value;
            if (((a = Nt(Pt(l, e), n)), V(a)))
              return Tt(e, a) ? At(n, r, e, a) : a;
          }
        } catch (u) {
          o.e(u);
        } finally {
          o.f();
        }
      }
      function Nt(e, t) {
        var n,
          r = Object(s.a)(t);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var a = n.value;
            if (a) {
              var i = a[e];
              if (V(i)) return i;
            }
          }
        } catch (o) {
          r.e(o);
        } finally {
          r.f();
        }
      }
      function It(e) {
        var t = e._keys;
        return (
          t ||
            (t = e._keys = (function (e) {
              var t,
                n = new Set(),
                r = Object(s.a)(e);
              try {
                for (r.s(); !(t = r.n()).done; ) {
                  var a,
                    i = t.value,
                    o = Object(s.a)(
                      Object.keys(i).filter(function (e) {
                        return !e.startsWith("_");
                      })
                    );
                  try {
                    for (o.s(); !(a = o.n()).done; ) {
                      var l = a.value;
                      n.add(l);
                    }
                  } catch (u) {
                    o.e(u);
                  } finally {
                    o.f();
                  }
                }
              } catch (u) {
                r.e(u);
              } finally {
                r.f();
              }
              return d(n);
            })(e._scopes)),
          t
        );
      }
      var Vt = Number.EPSILON || 1e-14,
        Bt = function (e, t) {
          return t < e.length && !e[t].skip && e[t];
        };
      function Wt(e, t, n, r) {
        var a = e.skip ? t : e,
          i = t,
          o = n.skip ? t : n,
          l = ae(i, a),
          u = ae(o, i),
          s = l / (l + u),
          c = u / (l + u),
          f = r * (s = isNaN(s) ? 0 : s),
          d = r * (c = isNaN(c) ? 0 : c);
        return {
          previous: { x: i.x - f * (o.x - a.x), y: i.y - f * (o.y - a.y) },
          next: { x: i.x + d * (o.x - a.x), y: i.y + d * (o.y - a.y) },
        };
      }
      function Ut(e) {
        var t,
          n,
          r,
          a = e.length,
          i = Array(a).fill(0),
          o = Array(a),
          l = Bt(e, 0);
        for (t = 0; t < a; ++t)
          if (((n = r), (r = l), (l = Bt(e, t + 1)), r)) {
            if (l) {
              var u = l.x - r.x;
              i[t] = 0 !== u ? (l.y - r.y) / u : 0;
            }
            o[t] = n
              ? l
                ? G(i[t - 1]) !== G(i[t])
                  ? 0
                  : (i[t - 1] + i[t]) / 2
                : i[t - 1]
              : i[t];
          }
        !(function (e, t, n) {
          for (
            var r, a, i, o, l, u = e.length, s = Bt(e, 0), c = 0;
            c < u - 1;
            ++c
          )
            (l = s),
              (s = Bt(e, c + 1)),
              l &&
                s &&
                (ee(t[c], 0, Vt)
                  ? (n[c] = n[c + 1] = 0)
                  : ((r = n[c] / t[c]),
                    (a = n[c + 1] / t[c]),
                    (o = Math.pow(r, 2) + Math.pow(a, 2)) <= 9 ||
                      ((i = 3 / Math.sqrt(o)),
                      (n[c] = r * i * t[c]),
                      (n[c + 1] = a * i * t[c]))));
        })(e, i, o),
          (function (e, t) {
            for (var n, r, a, i = e.length, o = Bt(e, 0), l = 0; l < i; ++l)
              if (((r = a), (a = o), (o = Bt(e, l + 1)), a)) {
                var u = a,
                  s = u.x,
                  c = u.y;
                r &&
                  ((n = (s - r.x) / 3),
                  (a.cp1x = s - n),
                  (a.cp1y = c - n * t[l])),
                  o &&
                    ((n = (o.x - s) / 3),
                    (a.cp2x = s + n),
                    (a.cp2y = c + n * t[l]));
              }
          })(e, o);
      }
      function $t(e, t, n) {
        return Math.max(Math.min(e, n), t);
      }
      function Ht(e, t, n, r) {
        var a, i, o, l;
        if (
          (t.spanGaps &&
            (e = e.filter(function (e) {
              return !e.skip;
            })),
          "monotone" === t.cubicInterpolationMode)
        )
          Ut(e);
        else {
          var u = r ? e[e.length - 1] : e[0];
          for (a = 0, i = e.length; a < i; ++a)
            (l = Wt(
              u,
              (o = e[a]),
              e[Math.min(a + 1, i - (r ? 0 : 1)) % i],
              t.tension
            )),
              (o.cp1x = l.previous.x),
              (o.cp1y = l.previous.y),
              (o.cp2x = l.next.x),
              (o.cp2y = l.next.y),
              (u = o);
        }
        t.capBezierPoints &&
          (function (e, t) {
            var n,
              r,
              a,
              i,
              o,
              l = at(e[0], t);
            for (n = 0, r = e.length; n < r; ++n)
              (o = i),
                (i = l),
                (l = n < r - 1 && at(e[n + 1], t)),
                i &&
                  ((a = e[n]),
                  o &&
                    ((a.cp1x = $t(a.cp1x, t.left, t.right)),
                    (a.cp1y = $t(a.cp1y, t.top, t.bottom))),
                  l &&
                    ((a.cp2x = $t(a.cp2x, t.left, t.right)),
                    (a.cp2y = $t(a.cp2y, t.top, t.bottom))));
          })(e, n);
      }
      function Yt(e) {
        var t = e.parentNode;
        return t && "[object ShadowRoot]" === t.toString() && (t = t.host), t;
      }
      function Qt(e, t, n) {
        var r;
        return (
          "string" === typeof e
            ? ((r = parseInt(e, 10)),
              -1 !== e.indexOf("%") && (r = (r / 100) * t.parentNode[n]))
            : (r = e),
          r
        );
      }
      var qt = function (e) {
        return window.getComputedStyle(e, null);
      };
      var Xt = ["top", "right", "bottom", "left"];
      function Kt(e, t, n) {
        var r = {};
        n = n ? "-" + n : "";
        for (var a = 0; a < 4; a++) {
          var i = Xt[a];
          r[i] = parseFloat(e[t + "-" + i + n]) || 0;
        }
        return (r.width = r.left + r.right), (r.height = r.top + r.bottom), r;
      }
      function Gt(e, t) {
        var n = t.canvas,
          r = t.currentDevicePixelRatio,
          a = qt(n),
          i = "border-box" === a.boxSizing,
          o = Kt(a, "padding"),
          l = Kt(a, "border", "width"),
          u = (function (e, t) {
            var n,
              r,
              a = e.native || e,
              i = a.touches,
              o = i && i.length ? i[0] : a,
              l = o.offsetX,
              u = o.offsetY,
              s = !1;
            if (
              (function (e, t, n) {
                return (e > 0 || t > 0) && (!n || !n.shadowRoot);
              })(l, u, a.target)
            )
              (n = l), (r = u);
            else {
              var c = t.getBoundingClientRect();
              (n = o.clientX - c.left), (r = o.clientY - c.top), (s = !0);
            }
            return { x: n, y: r, box: s };
          })(e, n),
          s = u.x,
          c = u.y,
          f = u.box,
          d = o.left + (f && l.left),
          h = o.top + (f && l.top),
          p = t.width,
          v = t.height;
        return (
          i && ((p -= o.width + l.width), (v -= o.height + l.height)),
          {
            x: Math.round((((s - d) / p) * n.width) / r),
            y: Math.round((((c - h) / v) * n.height) / r),
          }
        );
      }
      var Zt = function (e) {
        return Math.round(10 * e) / 10;
      };
      function Jt(e, t, n, r) {
        var a = qt(e),
          i = Kt(a, "margin"),
          o = Qt(a.maxWidth, e, "clientWidth") || H,
          l = Qt(a.maxHeight, e, "clientHeight") || H,
          u = (function (e, t, n) {
            var r, a;
            if (void 0 === t || void 0 === n) {
              var i = Yt(e);
              if (i) {
                var o = i.getBoundingClientRect(),
                  l = qt(i),
                  u = Kt(l, "border", "width"),
                  s = Kt(l, "padding");
                (t = o.width - s.width - u.width),
                  (n = o.height - s.height - u.height),
                  (r = Qt(l.maxWidth, i, "clientWidth")),
                  (a = Qt(l.maxHeight, i, "clientHeight"));
              } else (t = e.clientWidth), (n = e.clientHeight);
            }
            return { width: t, height: n, maxWidth: r || H, maxHeight: a || H };
          })(e, t, n),
          s = u.width,
          c = u.height;
        if ("content-box" === a.boxSizing) {
          var f = Kt(a, "border", "width"),
            d = Kt(a, "padding");
          (s -= d.width + f.width), (c -= d.height + f.height);
        }
        return (
          (s = Math.max(0, s - i.width)),
          (c = Math.max(0, r ? Math.floor(s / r) : c - i.height)),
          (s = Zt(Math.min(s, o, u.maxWidth))),
          (c = Zt(Math.min(c, l, u.maxHeight))),
          s && !c && (c = Zt(s / 2)),
          { width: s, height: c }
        );
      }
      function en(e, t, n) {
        var r = (e.currentDevicePixelRatio = t || 1),
          a = e.canvas,
          i = e.width,
          o = e.height;
        (a.height = o * r),
          (a.width = i * r),
          e.ctx.setTransform(r, 0, 0, r, 0, 0),
          a.style &&
            (n || (!a.style.height && !a.style.width)) &&
            ((a.style.height = o + "px"), (a.style.width = i + "px"));
      }
      var tn = (function () {
        var e = !1;
        try {
          var t = {
            get passive() {
              return (e = !0), !1;
            },
          };
          window.addEventListener("test", null, t),
            window.removeEventListener("test", null, t);
        } catch (n) {}
        return e;
      })();
      function nn(e, t) {
        var n = (function (e, t) {
            return qt(e).getPropertyValue(t);
          })(e, t),
          r = n && n.match(/^(\d+)(\.\d+)?px$/);
        return r ? +r[1] : void 0;
      }
      function rn(e, t, n, r) {
        return { x: e.x + n * (t.x - e.x), y: e.y + n * (t.y - e.y) };
      }
      function an(e, t, n, r) {
        return {
          x: e.x + n * (t.x - e.x),
          y:
            "middle" === r
              ? n < 0.5
                ? e.y
                : t.y
              : "after" === r
              ? n < 1
                ? e.y
                : t.y
              : n > 0
              ? t.y
              : e.y,
        };
      }
      function on(e, t, n, r) {
        var a = { x: e.cp2x, y: e.cp2y },
          i = { x: t.cp1x, y: t.cp1y },
          o = rn(e, a, n),
          l = rn(a, i, n),
          u = rn(i, t, n),
          s = rn(o, l, n),
          c = rn(l, u, n);
        return rn(s, c, n);
      }
      var ln = new Map();
      function un(e, t, n) {
        return (function (e, t) {
          t = t || {};
          var n = e + JSON.stringify(t),
            r = ln.get(n);
          return r || ((r = new Intl.NumberFormat(e, t)), ln.set(n, r)), r;
        })(t, n).format(e);
      }
      function sn(e, t, n) {
        return e
          ? (function (e, t) {
              return {
                x: function (n) {
                  return e + e + t - n;
                },
                setWidth: function (e) {
                  t = e;
                },
                textAlign: function (e) {
                  return "center" === e ? e : "right" === e ? "left" : "right";
                },
                xPlus: function (e, t) {
                  return e - t;
                },
                leftForLtr: function (e, t) {
                  return e - t;
                },
              };
            })(t, n)
          : {
              x: function (e) {
                return e;
              },
              setWidth: function (e) {},
              textAlign: function (e) {
                return e;
              },
              xPlus: function (e, t) {
                return e + t;
              },
              leftForLtr: function (e, t) {
                return e;
              },
            };
      }
      function cn(e, t) {
        var n, r;
        ("ltr" !== t && "rtl" !== t) ||
          ((r = [
            (n = e.canvas.style).getPropertyValue("direction"),
            n.getPropertyPriority("direction"),
          ]),
          n.setProperty("direction", t, "important"),
          (e.prevTextDirection = r));
      }
      function fn(e, t) {
        void 0 !== t &&
          (delete e.prevTextDirection,
          e.canvas.style.setProperty("direction", t[0], t[1]));
      }
      function dn(e) {
        return "angle" === e
          ? { between: le, compare: ie, normalize: oe }
          : {
              between: function (e, t, n) {
                return e >= Math.min(t, n) && e <= Math.max(n, t);
              },
              compare: function (e, t) {
                return e - t;
              },
              normalize: function (e) {
                return e;
              },
            };
      }
      function hn(e) {
        var t = e.start,
          n = e.end,
          r = e.count;
        return {
          start: t % r,
          end: n % r,
          loop: e.loop && (n - t + 1) % r === 0,
          style: e.style,
        };
      }
      function pn(e, t, n) {
        if (!n) return [e];
        for (
          var r,
            a,
            i,
            o = n.property,
            l = n.start,
            u = n.end,
            s = t.length,
            c = dn(o),
            f = c.compare,
            d = c.between,
            h = c.normalize,
            p = (function (e, t, n) {
              var r,
                a,
                i = n.property,
                o = n.start,
                l = n.end,
                u = dn(i),
                s = u.between,
                c = u.normalize,
                f = t.length,
                d = e.start,
                h = e.end,
                p = e.loop;
              if (p) {
                for (
                  d += f, h += f, r = 0, a = f;
                  r < a && s(c(t[d % f][i]), o, l);
                  ++r
                )
                  d--, h--;
                (d %= f), (h %= f);
              }
              return (
                h < d && (h += f), { start: d, end: h, loop: p, style: e.style }
              );
            })(e, t, n),
            v = p.start,
            g = p.end,
            m = p.loop,
            y = p.style,
            b = [],
            x = !1,
            k = null,
            _ = function () {
              return x || (d(l, i, r) && 0 !== f(l, i));
            },
            w = function () {
              return !x || 0 === f(u, r) || d(u, i, r);
            },
            S = v,
            O = v;
          S <= g;
          ++S
        )
          (a = t[S % s]).skip ||
            ((r = h(a[o])),
            (x = d(r, l, u)),
            null === k && _() && (k = 0 === f(r, l) ? S : O),
            null !== k &&
              w() &&
              (b.push(hn({ start: k, end: S, loop: m, count: s, style: y })),
              (k = null)),
            (O = S),
            (i = r));
        return (
          null !== k &&
            b.push(hn({ start: k, end: g, loop: m, count: s, style: y })),
          b
        );
      }
      function vn(e, t) {
        for (var n = [], r = e.segments, a = 0; a < r.length; a++) {
          var i = pn(r[a], e.points, t);
          i.length && n.push.apply(n, d(i));
        }
        return n;
      }
      function gn(e, t, n) {
        return n && n.setContext && t
          ? (function (e, t, n) {
              var r,
                a = t.length,
                i = [],
                o = e[0].start,
                l = o,
                u = Object(s.a)(e);
              try {
                for (u.s(); !(r = u.n()).done; ) {
                  var c = r.value,
                    f = void 0,
                    d = void 0,
                    h = t[o % a];
                  for (l = o + 1; l <= c.end; l++) {
                    var p = t[l % a];
                    yn(
                      (d = mn(n.setContext({ type: "segment", p0: h, p1: p }))),
                      f
                    ) &&
                      (i.push({ start: o, end: l - 1, loop: c.loop, style: f }),
                      (f = d),
                      (o = l - 1)),
                      (h = p),
                      (f = d);
                  }
                  o < l - 1 &&
                    (i.push({ start: o, end: l - 1, loop: c.loop, style: d }),
                    (o = l - 1));
                }
              } catch (v) {
                u.e(v);
              } finally {
                u.f();
              }
              return i;
            })(e, t, n)
          : e;
      }
      function mn(e) {
        return {
          backgroundColor: e.backgroundColor,
          borderCapStyle: e.borderCapStyle,
          borderDash: e.borderDash,
          borderDashOffset: e.borderDashOffset,
          borderJoinStyle: e.borderJoinStyle,
          borderWidth: e.borderWidth,
          borderColor: e.borderColor,
        };
      }
      function yn(e, t) {
        return t && JSON.stringify(e) !== JSON.stringify(t);
      }
      var bn = new ((function () {
          function e() {
            Object(h.a)(this, e),
              (this._request = null),
              (this._charts = new Map()),
              (this._running = !1),
              (this._lastDate = void 0);
          }
          return (
            Object(p.a)(e, [
              {
                key: "_notify",
                value: function (e, t, n, r) {
                  var a = t.listeners[r],
                    i = t.duration;
                  a.forEach(function (r) {
                    return r({
                      chart: e,
                      numSteps: i,
                      currentStep: Math.min(n - t.start, i),
                    });
                  });
                },
              },
              {
                key: "_refresh",
                value: function () {
                  var e = this;
                  e._request ||
                    ((e._running = !0),
                    (e._request = v.call(window, function () {
                      e._update(),
                        (e._request = null),
                        e._running && e._refresh();
                    })));
                },
              },
              {
                key: "_update",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : Date.now(),
                    t = this,
                    n = 0;
                  t._charts.forEach(function (r, a) {
                    if (r.running && r.items.length) {
                      for (
                        var i, o = r.items, l = o.length - 1, u = !1;
                        l >= 0;
                        --l
                      )
                        (i = o[l])._active
                          ? (i._total > r.duration && (r.duration = i._total),
                            i.tick(e),
                            (u = !0))
                          : ((o[l] = o[o.length - 1]), o.pop());
                      u && (a.draw(), t._notify(a, r, e, "progress")),
                        o.length ||
                          ((r.running = !1), t._notify(a, r, e, "complete")),
                        (n += o.length);
                    }
                  }),
                    (t._lastDate = e),
                    0 === n && (t._running = !1);
                },
              },
              {
                key: "_getAnims",
                value: function (e) {
                  var t = this._charts,
                    n = t.get(e);
                  return (
                    n ||
                      ((n = {
                        running: !1,
                        items: [],
                        listeners: { complete: [], progress: [] },
                      }),
                      t.set(e, n)),
                    n
                  );
                },
              },
              {
                key: "listen",
                value: function (e, t, n) {
                  this._getAnims(e).listeners[t].push(n);
                },
              },
              {
                key: "add",
                value: function (e, t) {
                  var n;
                  t &&
                    t.length &&
                    (n = this._getAnims(e).items).push.apply(n, d(t));
                },
              },
              {
                key: "has",
                value: function (e) {
                  return this._getAnims(e).items.length > 0;
                },
              },
              {
                key: "start",
                value: function (e) {
                  var t = this._charts.get(e);
                  t &&
                    ((t.running = !0),
                    (t.start = Date.now()),
                    (t.duration = t.items.reduce(function (e, t) {
                      return Math.max(e, t._duration);
                    }, 0)),
                    this._refresh());
                },
              },
              {
                key: "running",
                value: function (e) {
                  if (!this._running) return !1;
                  var t = this._charts.get(e);
                  return !!(t && t.running && t.items.length);
                },
              },
              {
                key: "stop",
                value: function (e) {
                  var t = this._charts.get(e);
                  if (t && t.items.length) {
                    for (var n = t.items, r = n.length - 1; r >= 0; --r)
                      n[r].cancel();
                    (t.items = []), this._notify(e, t, Date.now(), "complete");
                  }
                },
              },
              {
                key: "remove",
                value: function (e) {
                  return this._charts.delete(e);
                },
              },
            ]),
            e
          );
        })())(),
        xn = "transparent",
        kn = {
          boolean: function (e, t, n) {
            return n > 0.5 ? t : e;
          },
          color: function (e, t, n) {
            var r = Ye(e || xn),
              a = r.valid && Ye(t || xn);
            return a && a.valid ? a.mix(r, n).hexString() : t;
          },
          number: function (e, t, n) {
            return e + (t - e) * n;
          },
        },
        _n = (function () {
          function e(t, n, r, a) {
            Object(h.a)(this, e);
            var i = n[r];
            a = bt([t.to, a, i, t.from]);
            var o = bt([t.from, i, a]);
            (this._active = !0),
              (this._fn = t.fn || kn[t.type || typeof o]),
              (this._easing = de[t.easing] || de.linear),
              (this._start = Math.floor(Date.now() + (t.delay || 0))),
              (this._duration = this._total = Math.floor(t.duration)),
              (this._loop = !!t.loop),
              (this._target = n),
              (this._prop = r),
              (this._from = o),
              (this._to = a),
              (this._promises = void 0);
          }
          return (
            Object(p.a)(e, [
              {
                key: "active",
                value: function () {
                  return this._active;
                },
              },
              {
                key: "update",
                value: function (e, t, n) {
                  var r = this;
                  if (r._active) {
                    r._notify(!1);
                    var a = r._target[r._prop],
                      i = n - r._start,
                      o = r._duration - i;
                    (r._start = n),
                      (r._duration = Math.floor(Math.max(o, e.duration))),
                      (r._total += i),
                      (r._loop = !!e.loop),
                      (r._to = bt([e.to, t, a, e.from])),
                      (r._from = bt([e.from, a, t]));
                  }
                },
              },
              {
                key: "cancel",
                value: function () {
                  var e = this;
                  e._active &&
                    (e.tick(Date.now()), (e._active = !1), e._notify(!1));
                },
              },
              {
                key: "tick",
                value: function (e) {
                  var t,
                    n = this,
                    r = e - n._start,
                    a = n._duration,
                    i = n._prop,
                    o = n._from,
                    l = n._loop,
                    u = n._to;
                  if (((n._active = o !== u && (l || r < a)), !n._active))
                    return (n._target[i] = u), void n._notify(!0);
                  r < 0
                    ? (n._target[i] = o)
                    : ((t = (r / a) % 2),
                      (t = l && t > 1 ? 2 - t : t),
                      (t = n._easing(Math.min(1, Math.max(0, t)))),
                      (n._target[i] = n._fn(o, u, t)));
                },
              },
              {
                key: "wait",
                value: function () {
                  var e = this._promises || (this._promises = []);
                  return new Promise(function (t, n) {
                    e.push({ res: t, rej: n });
                  });
                },
              },
              {
                key: "_notify",
                value: function (e) {
                  for (
                    var t = e ? "res" : "rej", n = this._promises || [], r = 0;
                    r < n.length;
                    r++
                  )
                    n[r][t]();
                },
              },
            ]),
            e
          );
        })();
      Ze.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0,
      });
      var wn = Object.keys(Ze.animation);
      Ze.describe("animation", {
        _fallback: !1,
        _indexable: !1,
        _scriptable: function (e) {
          return "onProgress" !== e && "onComplete" !== e && "fn" !== e;
        },
      }),
        Ze.set("animations", {
          colors: {
            type: "color",
            properties: ["color", "borderColor", "backgroundColor"],
          },
          numbers: {
            type: "number",
            properties: ["x", "y", "borderWidth", "radius", "tension"],
          },
        }),
        Ze.describe("animations", { _fallback: "animation" }),
        Ze.set("transitions", {
          active: { animation: { duration: 400 } },
          resize: { animation: { duration: 0 } },
          show: {
            animations: {
              colors: { from: "transparent" },
              visible: { type: "boolean", duration: 0 },
            },
          },
          hide: {
            animations: {
              colors: { to: "transparent" },
              visible: {
                type: "boolean",
                easing: "linear",
                fn: function (e) {
                  return 0 | e;
                },
              },
            },
          },
        });
      var Sn = (function () {
        function e(t, n) {
          Object(h.a)(this, e),
            (this._chart = t),
            (this._properties = new Map()),
            this.configure(n);
        }
        return (
          Object(p.a)(e, [
            {
              key: "configure",
              value: function (e) {
                if (w(e)) {
                  var t = this._properties;
                  Object.getOwnPropertyNames(e).forEach(function (n) {
                    var r = e[n];
                    if (w(r)) {
                      var a,
                        i = {},
                        o = Object(s.a)(wn);
                      try {
                        for (o.s(); !(a = o.n()).done; ) {
                          var l = a.value;
                          i[l] = r[l];
                        }
                      } catch (u) {
                        o.e(u);
                      } finally {
                        o.f();
                      }
                      ((_(r.properties) && r.properties) || [n]).forEach(
                        function (e) {
                          (e !== n && t.has(e)) || t.set(e, i);
                        }
                      );
                    }
                  });
                }
              },
            },
            {
              key: "_animateOptions",
              value: function (e, t) {
                var n = t.options,
                  r = (function (e, t) {
                    if (!t) return;
                    var n = e.options;
                    if (!n) return void (e.options = t);
                    n.$shared &&
                      (e.options = n = Object.assign({}, n, {
                        $shared: !1,
                        $animations: {},
                      }));
                    return n;
                  })(e, n);
                if (!r) return [];
                var a = this._createAnimations(r, n);
                return (
                  n.$shared &&
                    (function (e, t) {
                      for (
                        var n = [], r = Object.keys(t), a = 0;
                        a < r.length;
                        a++
                      ) {
                        var i = e[r[a]];
                        i && i.active() && n.push(i.wait());
                      }
                      return Promise.all(n);
                    })(e.options.$animations, n).then(
                      function () {
                        e.options = n;
                      },
                      function () {}
                    ),
                  a
                );
              },
            },
            {
              key: "_createAnimations",
              value: function (e, t) {
                var n,
                  r = this._properties,
                  a = [],
                  i = e.$animations || (e.$animations = {}),
                  o = Object.keys(t),
                  l = Date.now();
                for (n = o.length - 1; n >= 0; --n) {
                  var u = o[n];
                  if ("$" !== u.charAt(0))
                    if ("options" !== u) {
                      var s = t[u],
                        c = i[u],
                        f = r.get(u);
                      if (c) {
                        if (f && c.active()) {
                          c.update(f, s, l);
                          continue;
                        }
                        c.cancel();
                      }
                      f && f.duration
                        ? ((i[u] = c = new _n(f, e, u, s)), a.push(c))
                        : (e[u] = s);
                    } else a.push.apply(a, d(this._animateOptions(e, t)));
                }
                return a;
              },
            },
            {
              key: "update",
              value: function (e, t) {
                if (0 !== this._properties.size) {
                  var n = this._createAnimations(e, t);
                  return n.length ? (bn.add(this._chart, n), !0) : void 0;
                }
                Object.assign(e, t);
              },
            },
          ]),
          e
        );
      })();
      function On(e, t) {
        var n = (e && e.options) || {},
          r = n.reverse,
          a = void 0 === n.min ? t : 0,
          i = void 0 === n.max ? t : 0;
        return { start: r ? i : a, end: r ? a : i };
      }
      function Mn(e, t) {
        var n,
          r,
          a = [],
          i = e._getSortedDatasetMetas(t);
        for (n = 0, r = i.length; n < r; ++n) a.push(i[n].index);
        return a;
      }
      function En(e, t, n, r) {
        var a,
          i,
          o,
          l,
          u = e.keys,
          s = "single" === r.mode;
        if (null !== t) {
          for (a = 0, i = u.length; a < i; ++a) {
            if ((o = +u[a]) === n) {
              if (r.all) continue;
              break;
            }
            (l = e.values[o]),
              S(l) && (s || 0 === t || G(t) === G(l)) && (t += l);
          }
          return t;
        }
      }
      function Cn(e, t) {
        var n = e && e.options.stacked;
        return n || (void 0 === n && void 0 !== t.stack);
      }
      function Pn(e, t, n) {
        var r = e[t] || (e[t] = {});
        return r[n] || (r[n] = {});
      }
      function Tn(e, t) {
        for (
          var n = e.chart,
            r = e._cachedMeta,
            a = n._stacks || (n._stacks = {}),
            i = r.iScale,
            o = r.vScale,
            l = r.index,
            u = i.axis,
            s = o.axis,
            c = (function (e, t, n) {
              return ""
                .concat(e.id, ".")
                .concat(t.id, ".")
                .concat(n.stack || n.type);
            })(i, o, r),
            f = t.length,
            d = 0;
          d < f;
          ++d
        ) {
          var h = t[d],
            p = h[u],
            v = h[s];
          ((h._stacks || (h._stacks = {}))[s] = Pn(a, c, p))[l] = v;
        }
      }
      function Dn(e, t) {
        var n = e.scales;
        return Object.keys(n)
          .filter(function (e) {
            return n[e].axis === t;
          })
          .shift();
      }
      function Ln(e, t) {
        t = t || e._parsed;
        var n,
          r = Object(s.a)(t);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var a = n.value._stacks;
            if (
              !a ||
              void 0 === a[e.vScale.id] ||
              void 0 === a[e.vScale.id][e.index]
            )
              return;
            delete a[e.vScale.id][e.index];
          }
        } catch (i) {
          r.e(i);
        } finally {
          r.f();
        }
      }
      var jn = function (e) {
          return "reset" === e || "none" === e;
        },
        Rn = function (e, t) {
          return t ? e : Object.assign({}, e);
        },
        An = (function () {
          function e(t, n) {
            Object(h.a)(this, e),
              (this.chart = t),
              (this._ctx = t.ctx),
              (this.index = n),
              (this._cachedDataOpts = {}),
              (this._cachedMeta = this.getMeta()),
              (this._type = this._cachedMeta.type),
              (this.options = void 0),
              (this._parsing = !1),
              (this._data = void 0),
              (this._objectData = void 0),
              (this._sharedOptions = void 0),
              (this._drawStart = void 0),
              (this._drawCount = void 0),
              (this.enableOptionSharing = !1),
              (this.$context = void 0),
              this.initialize();
          }
          return (
            Object(p.a)(e, [
              {
                key: "initialize",
                value: function () {
                  var e = this,
                    t = e._cachedMeta;
                  e.configure(),
                    e.linkScales(),
                    (t._stacked = Cn(t.vScale, t)),
                    e.addElements();
                },
              },
              {
                key: "updateIndex",
                value: function (e) {
                  this.index = e;
                },
              },
              {
                key: "linkScales",
                value: function () {
                  var e = this,
                    t = e.chart,
                    n = e._cachedMeta,
                    r = e.getDataset(),
                    a = function (e, t, n, r) {
                      return "x" === e ? t : "r" === e ? r : n;
                    },
                    i = (n.xAxisID = M(r.xAxisID, Dn(t, "x"))),
                    o = (n.yAxisID = M(r.yAxisID, Dn(t, "y"))),
                    l = (n.rAxisID = M(r.rAxisID, Dn(t, "r"))),
                    u = n.indexAxis,
                    s = (n.iAxisID = a(u, i, o, l)),
                    c = (n.vAxisID = a(u, o, i, l));
                  (n.xScale = e.getScaleForId(i)),
                    (n.yScale = e.getScaleForId(o)),
                    (n.rScale = e.getScaleForId(l)),
                    (n.iScale = e.getScaleForId(s)),
                    (n.vScale = e.getScaleForId(c));
                },
              },
              {
                key: "getDataset",
                value: function () {
                  return this.chart.data.datasets[this.index];
                },
              },
              {
                key: "getMeta",
                value: function () {
                  return this.chart.getDatasetMeta(this.index);
                },
              },
              {
                key: "getScaleForId",
                value: function (e) {
                  return this.chart.scales[e];
                },
              },
              {
                key: "_getOtherScale",
                value: function (e) {
                  var t = this._cachedMeta;
                  return e === t.iScale ? t.vScale : t.iScale;
                },
              },
              {
                key: "reset",
                value: function () {
                  this._update("reset");
                },
              },
              {
                key: "_destroy",
                value: function () {
                  var e = this._cachedMeta;
                  this._data && St(this._data, this), e._stacked && Ln(e);
                },
              },
              {
                key: "_dataCheck",
                value: function () {
                  var e,
                    t,
                    n = this,
                    r = n.getDataset(),
                    a = r.data || (r.data = []);
                  w(a)
                    ? (n._data = (function (e) {
                        var t,
                          n,
                          r,
                          a = Object.keys(e),
                          i = new Array(a.length);
                        for (t = 0, n = a.length; t < n; ++t)
                          (r = a[t]), (i[t] = { x: r, y: e[r] });
                        return i;
                      })(a))
                    : n._data !== a &&
                      (n._data && (St(n._data, n), Ln(n._cachedMeta)),
                      a &&
                        Object.isExtensible(a) &&
                        ((t = n),
                        (e = a)._chartjs
                          ? e._chartjs.listeners.push(t)
                          : (Object.defineProperty(e, "_chartjs", {
                              configurable: !0,
                              enumerable: !1,
                              value: { listeners: [t] },
                            }),
                            wt.forEach(function (t) {
                              var n = "_onData" + I(t),
                                r = e[t];
                              Object.defineProperty(e, t, {
                                configurable: !0,
                                enumerable: !1,
                                value: function () {
                                  for (
                                    var t = arguments.length,
                                      a = new Array(t),
                                      i = 0;
                                    i < t;
                                    i++
                                  )
                                    a[i] = arguments[i];
                                  var o = r.apply(this, a);
                                  return (
                                    e._chartjs.listeners.forEach(function (e) {
                                      "function" === typeof e[n] &&
                                        e[n].apply(e, a);
                                    }),
                                    o
                                  );
                                },
                              });
                            }))),
                      (n._data = a));
                },
              },
              {
                key: "addElements",
                value: function () {
                  var e = this,
                    t = e._cachedMeta;
                  e._dataCheck(),
                    e.datasetElementType &&
                      (t.dataset = new e.datasetElementType());
                },
              },
              {
                key: "buildOrUpdateElements",
                value: function (e) {
                  var t = this,
                    n = t._cachedMeta,
                    r = t.getDataset(),
                    a = !1;
                  t._dataCheck(),
                    (n._stacked = Cn(n.vScale, n)),
                    n.stack !== r.stack &&
                      ((a = !0), Ln(n), (n.stack = r.stack)),
                    t._resyncElements(e),
                    a && Tn(t, n._parsed);
                },
              },
              {
                key: "configure",
                value: function () {
                  var e = this,
                    t = e.chart.config,
                    n = t.datasetScopeKeys(e._type),
                    r = t.getOptionScopes(e.getDataset(), n, !0);
                  (e.options = t.createResolver(r, e.getContext())),
                    (e._parsing = e.options.parsing);
                },
              },
              {
                key: "parse",
                value: function (e, t) {
                  var n,
                    r,
                    a,
                    i = this,
                    o = i._cachedMeta,
                    l = i._data,
                    u = o.iScale,
                    s = o._stacked,
                    c = u.axis,
                    f = (0 === e && t === l.length) || o._sorted,
                    d = e > 0 && o._parsed[e - 1];
                  if (!1 === i._parsing) (o._parsed = l), (o._sorted = !0);
                  else {
                    a = _(l[e])
                      ? i.parseArrayData(o, l, e, t)
                      : w(l[e])
                      ? i.parseObjectData(o, l, e, t)
                      : i.parsePrimitiveData(o, l, e, t);
                    for (n = 0; n < t; ++n)
                      (o._parsed[n + e] = r = a[n]),
                        f &&
                          ((null === r[c] || (d && r[c] < d[c])) && (f = !1),
                          (d = r));
                    o._sorted = f;
                  }
                  s && Tn(i, a);
                },
              },
              {
                key: "parsePrimitiveData",
                value: function (e, t, n, a) {
                  var i,
                    o,
                    l,
                    u = e.iScale,
                    s = e.vScale,
                    c = u.axis,
                    f = s.axis,
                    d = u.getLabels(),
                    h = u === s,
                    p = new Array(a);
                  for (i = 0, o = a; i < o; ++i) {
                    var v;
                    (l = i + n),
                      (p[i] =
                        ((v = {}),
                        Object(r.a)(v, c, h || u.parse(d[l], l)),
                        Object(r.a)(v, f, s.parse(t[l], l)),
                        v));
                  }
                  return p;
                },
              },
              {
                key: "parseArrayData",
                value: function (e, t, n, r) {
                  var a,
                    i,
                    o,
                    l,
                    u = e.xScale,
                    s = e.yScale,
                    c = new Array(r);
                  for (a = 0, i = r; a < i; ++a)
                    (l = t[(o = a + n)]),
                      (c[a] = { x: u.parse(l[0], o), y: s.parse(l[1], o) });
                  return c;
                },
              },
              {
                key: "parseObjectData",
                value: function (e, t, n, r) {
                  var a,
                    i,
                    o,
                    l,
                    u = e.xScale,
                    s = e.yScale,
                    c = this._parsing,
                    f = c.xAxisKey,
                    d = void 0 === f ? "x" : f,
                    h = c.yAxisKey,
                    p = void 0 === h ? "y" : h,
                    v = new Array(r);
                  for (a = 0, i = r; a < i; ++a)
                    (l = t[(o = a + n)]),
                      (v[a] = {
                        x: u.parse(N(l, d), o),
                        y: s.parse(N(l, p), o),
                      });
                  return v;
                },
              },
              {
                key: "getParsed",
                value: function (e) {
                  return this._cachedMeta._parsed[e];
                },
              },
              {
                key: "getDataElement",
                value: function (e) {
                  return this._cachedMeta.data[e];
                },
              },
              {
                key: "applyStack",
                value: function (e, t, n) {
                  var r = this.chart,
                    a = this._cachedMeta,
                    i = t[e.axis];
                  return En(
                    { keys: Mn(r, !0), values: t._stacks[e.axis] },
                    i,
                    a.index,
                    { mode: n }
                  );
                },
              },
              {
                key: "updateRangeFromParsed",
                value: function (e, t, n, r) {
                  var a = n[t.axis],
                    i = null === a ? NaN : a,
                    o = r && n._stacks[t.axis];
                  r &&
                    o &&
                    ((r.values = o),
                    (e.min = Math.min(e.min, i)),
                    (e.max = Math.max(e.max, i)),
                    (i = En(r, a, this._cachedMeta.index, { all: !0 }))),
                    (e.min = Math.min(e.min, i)),
                    (e.max = Math.max(e.max, i));
                },
              },
              {
                key: "getMinMax",
                value: function (e, t) {
                  var n,
                    r,
                    a,
                    i,
                    o = this,
                    l = o._cachedMeta,
                    u = l._parsed,
                    s = l._sorted && e === l.iScale,
                    c = u.length,
                    f = o._getOtherScale(e),
                    d = t &&
                      l._stacked && { keys: Mn(o.chart, !0), values: null },
                    h = {
                      min: Number.POSITIVE_INFINITY,
                      max: Number.NEGATIVE_INFINITY,
                    },
                    p = (function (e) {
                      var t = e.getUserBounds(),
                        n = t.min,
                        r = t.max,
                        a = t.minDefined,
                        i = t.maxDefined;
                      return {
                        min: a ? n : Number.NEGATIVE_INFINITY,
                        max: i ? r : Number.POSITIVE_INFINITY,
                      };
                    })(f),
                    v = p.min,
                    g = p.max;
                  function m() {
                    return (
                      (a = u[n]),
                      (r = a[e.axis]),
                      (i = a[f.axis]),
                      !S(r) || v > i || g < i
                    );
                  }
                  for (
                    n = 0;
                    n < c && (m() || (o.updateRangeFromParsed(h, e, a, d), !s));
                    ++n
                  );
                  if (s)
                    for (n = c - 1; n >= 0; --n)
                      if (!m()) {
                        o.updateRangeFromParsed(h, e, a, d);
                        break;
                      }
                  return h;
                },
              },
              {
                key: "getAllParsedValues",
                value: function (e) {
                  var t,
                    n,
                    r,
                    a = this._cachedMeta._parsed,
                    i = [];
                  for (t = 0, n = a.length; t < n; ++t)
                    (r = a[t][e.axis]), S(r) && i.push(r);
                  return i;
                },
              },
              {
                key: "getMaxOverflow",
                value: function () {
                  return !1;
                },
              },
              {
                key: "getLabelAndValue",
                value: function (e) {
                  var t = this._cachedMeta,
                    n = t.iScale,
                    r = t.vScale,
                    a = this.getParsed(e);
                  return {
                    label: n ? "" + n.getLabelForValue(a[n.axis]) : "",
                    value: r ? "" + r.getLabelForValue(a[r.axis]) : "",
                  };
                },
              },
              {
                key: "_update",
                value: function (e) {
                  var t = this,
                    n = t._cachedMeta;
                  t.configure(),
                    (t._cachedDataOpts = {}),
                    t.update(e || "default"),
                    (n._clip = (function (e) {
                      var t, n, r, a;
                      return (
                        w(e)
                          ? ((t = e.top),
                            (n = e.right),
                            (r = e.bottom),
                            (a = e.left))
                          : (t = n = r = a = e),
                        { top: t, right: n, bottom: r, left: a }
                      );
                    })(
                      M(
                        t.options.clip,
                        (function (e, t, n) {
                          if (!1 === n) return !1;
                          var r = On(e, n),
                            a = On(t, n);
                          return {
                            top: a.end,
                            right: r.end,
                            bottom: a.start,
                            left: r.start,
                          };
                        })(n.xScale, n.yScale, t.getMaxOverflow())
                      )
                    ));
                },
              },
              { key: "update", value: function (e) {} },
              {
                key: "draw",
                value: function () {
                  var e,
                    t = this,
                    n = t._ctx,
                    r = t.chart,
                    a = t._cachedMeta,
                    i = a.data || [],
                    o = r.chartArea,
                    l = [],
                    u = t._drawStart || 0,
                    s = t._drawCount || i.length - u;
                  for (
                    a.dataset && a.dataset.draw(n, o, u, s), e = u;
                    e < u + s;
                    ++e
                  ) {
                    var c = i[e];
                    c.active ? l.push(c) : c.draw(n, o);
                  }
                  for (e = 0; e < l.length; ++e) l[e].draw(n, o);
                },
              },
              {
                key: "getStyle",
                value: function (e, t) {
                  var n = t ? "active" : "default";
                  return void 0 === e && this._cachedMeta.dataset
                    ? this.resolveDatasetElementOptions(n)
                    : this.resolveDataElementOptions(e || 0, n);
                },
              },
              {
                key: "getContext",
                value: function (e, t, n) {
                  var r,
                    a = this,
                    i = a.getDataset();
                  if (e >= 0 && e < a._cachedMeta.data.length) {
                    var o = a._cachedMeta.data[e];
                    ((r =
                      o.$context ||
                      (o.$context = (function (e, t, n) {
                        return Object.assign(Object.create(e), {
                          active: !1,
                          dataIndex: t,
                          parsed: void 0,
                          raw: void 0,
                          element: n,
                          index: t,
                          mode: "default",
                          type: "data",
                        });
                      })(a.getContext(), e, o))).parsed = a.getParsed(e)),
                      (r.raw = i.data[e]);
                  } else
                    (r =
                      a.$context ||
                      (a.$context = (function (e, t) {
                        return Object.assign(Object.create(e), {
                          active: !1,
                          dataset: void 0,
                          datasetIndex: t,
                          index: t,
                          mode: "default",
                          type: "dataset",
                        });
                      })(a.chart.getContext(), a.index))).dataset = i;
                  return (r.active = !!t), (r.mode = n), r;
                },
              },
              {
                key: "resolveDatasetElementOptions",
                value: function (e) {
                  return this._resolveElementOptions(
                    this.datasetElementType.id,
                    e
                  );
                },
              },
              {
                key: "resolveDataElementOptions",
                value: function (e, t) {
                  return this._resolveElementOptions(
                    this.dataElementType.id,
                    t,
                    e
                  );
                },
              },
              {
                key: "_resolveElementOptions",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "default",
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = this,
                    a = "active" === t,
                    i = r._cachedDataOpts,
                    o = e + "-" + t,
                    l = i[o],
                    u = r.enableOptionSharing && V(n);
                  if (l) return Rn(l, u);
                  var s = r.chart.config,
                    c = s.datasetElementScopeKeys(r._type, e),
                    f = a ? ["".concat(e, "Hover"), "hover", e, ""] : [e, ""],
                    d = s.getOptionScopes(r.getDataset(), c),
                    h = Object.keys(Ze.elements[e]),
                    p = function () {
                      return r.getContext(n, a);
                    },
                    v = s.resolveNamedOptions(d, h, p, f);
                  return (
                    v.$shared &&
                      ((v.$shared = u), (i[o] = Object.freeze(Rn(v, u)))),
                    v
                  );
                },
              },
              {
                key: "_resolveAnimations",
                value: function (e, t, n) {
                  var r,
                    a = this,
                    i = a.chart,
                    o = a._cachedDataOpts,
                    l = "animation-".concat(t),
                    u = o[l];
                  if (u) return u;
                  if (!1 !== i.options.animation) {
                    var s = a.chart.config,
                      c = s.datasetAnimationScopeKeys(a._type, t),
                      f = s.getOptionScopes(a.getDataset(), c);
                    r = s.createResolver(f, a.getContext(e, n, t));
                  }
                  var d = new Sn(i, r && r.animations);
                  return r && r._cacheable && (o[l] = Object.freeze(d)), d;
                },
              },
              {
                key: "getSharedOptions",
                value: function (e) {
                  if (e.$shared)
                    return (
                      this._sharedOptions ||
                      (this._sharedOptions = Object.assign({}, e))
                    );
                },
              },
              {
                key: "includeOptions",
                value: function (e, t) {
                  return !t || jn(e) || this.chart._animationsDisabled;
                },
              },
              {
                key: "updateElement",
                value: function (e, t, n, r) {
                  jn(r)
                    ? Object.assign(e, n)
                    : this._resolveAnimations(t, r).update(e, n);
                },
              },
              {
                key: "updateSharedOptions",
                value: function (e, t, n) {
                  e &&
                    !jn(t) &&
                    this._resolveAnimations(void 0, t).update(e, n);
                },
              },
              {
                key: "_setStyle",
                value: function (e, t, n, r) {
                  e.active = r;
                  var a = this.getStyle(t, r);
                  this._resolveAnimations(t, n, r).update(e, {
                    options: (!r && this.getSharedOptions(a)) || a,
                  });
                },
              },
              {
                key: "removeHoverStyle",
                value: function (e, t, n) {
                  this._setStyle(e, n, "active", !1);
                },
              },
              {
                key: "setHoverStyle",
                value: function (e, t, n) {
                  this._setStyle(e, n, "active", !0);
                },
              },
              {
                key: "_removeDatasetHoverStyle",
                value: function () {
                  var e = this._cachedMeta.dataset;
                  e && this._setStyle(e, void 0, "active", !1);
                },
              },
              {
                key: "_setDatasetHoverStyle",
                value: function () {
                  var e = this._cachedMeta.dataset;
                  e && this._setStyle(e, void 0, "active", !0);
                },
              },
              {
                key: "_resyncElements",
                value: function (e) {
                  var t = this,
                    n = t._cachedMeta.data.length,
                    r = t._data.length;
                  r > n
                    ? t._insertElements(n, r - n, e)
                    : r < n && t._removeElements(r, n - r);
                  var a = Math.min(r, n);
                  a && t.parse(0, a);
                },
              },
              {
                key: "_insertElements",
                value: function (e, t) {
                  var n,
                    r =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2],
                    a = this,
                    i = a._cachedMeta,
                    o = i.data,
                    l = e + t,
                    u = function (e) {
                      for (e.length += t, n = e.length - 1; n >= l; n--)
                        e[n] = e[n - t];
                    };
                  for (u(o), n = e; n < l; ++n) o[n] = new a.dataElementType();
                  a._parsing && u(i._parsed),
                    a.parse(e, t),
                    r && a.updateElements(o, e, t, "reset");
                },
              },
              { key: "updateElements", value: function (e, t, n, r) {} },
              {
                key: "_removeElements",
                value: function (e, t) {
                  var n = this._cachedMeta;
                  if (this._parsing) {
                    var r = n._parsed.splice(e, t);
                    n._stacked && Ln(n, r);
                  }
                  n.data.splice(e, t);
                },
              },
              {
                key: "_onDataPush",
                value: function () {
                  var e = arguments.length;
                  this._insertElements(this.getDataset().data.length - e, e);
                },
              },
              {
                key: "_onDataPop",
                value: function () {
                  this._removeElements(this._cachedMeta.data.length - 1, 1);
                },
              },
              {
                key: "_onDataShift",
                value: function () {
                  this._removeElements(0, 1);
                },
              },
              {
                key: "_onDataSplice",
                value: function (e, t) {
                  this._removeElements(e, t),
                    this._insertElements(e, arguments.length - 2);
                },
              },
              {
                key: "_onDataUnshift",
                value: function () {
                  this._insertElements(0, arguments.length);
                },
              },
            ]),
            e
          );
        })();
      function zn(e) {
        var t,
          n,
          r,
          a,
          i = (function (e) {
            if (!e._cache.$bar) {
              for (
                var t = e.getMatchingVisibleMetas("bar"),
                  n = [],
                  r = 0,
                  a = t.length;
                r < a;
                r++
              )
                n = n.concat(t[r].controller.getAllParsedValues(e));
              e._cache.$bar = Ot(
                n.sort(function (e, t) {
                  return e - t;
                })
              );
            }
            return e._cache.$bar;
          })(e),
          o = e._length,
          l = function () {
            (o = Math.min(o, (t && Math.abs(r - a)) || o)), (a = r);
          };
        for (t = 0, n = i.length; t < n; ++t)
          (r = e.getPixelForValue(i[t])), l();
        for (t = 0, n = e.ticks.length; t < n; ++t)
          (r = e.getPixelForTick(t)), l();
        return o;
      }
      function Fn(e, t, n, r) {
        return (
          _(e)
            ? (function (e, t, n, r) {
                var a = n.parse(e[0], r),
                  i = n.parse(e[1], r),
                  o = Math.min(a, i),
                  l = Math.max(a, i),
                  u = o,
                  s = l;
                Math.abs(o) > Math.abs(l) && ((u = l), (s = o)),
                  (t[n.axis] = s),
                  (t._custom = {
                    barStart: u,
                    barEnd: s,
                    start: a,
                    end: i,
                    min: o,
                    max: l,
                  });
              })(e, t, n, r)
            : (t[n.axis] = n.parse(e, r)),
          t
        );
      }
      function Nn(e, t, n, r) {
        var a,
          i,
          o,
          l,
          u = e.iScale,
          s = e.vScale,
          c = u.getLabels(),
          f = u === s,
          d = [];
        for (a = n, i = n + r; a < i; ++a)
          (l = t[a]),
            ((o = {})[u.axis] = f || u.parse(c[a], a)),
            d.push(Fn(l, o, s, a));
        return d;
      }
      function In(e) {
        return e && void 0 !== e.barStart && void 0 !== e.barEnd;
      }
      (An.defaults = {}),
        (An.prototype.datasetElementType = null),
        (An.prototype.dataElementType = null);
      var Vn = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n() {
          return Object(h.a)(this, n), t.apply(this, arguments);
        }
        return (
          Object(p.a)(n, [
            {
              key: "parsePrimitiveData",
              value: function (e, t, n, r) {
                return Nn(e, t, n, r);
              },
            },
            {
              key: "parseArrayData",
              value: function (e, t, n, r) {
                return Nn(e, t, n, r);
              },
            },
            {
              key: "parseObjectData",
              value: function (e, t, n, r) {
                var a,
                  i,
                  o,
                  l,
                  u = e.iScale,
                  s = e.vScale,
                  c = this._parsing,
                  f = c.xAxisKey,
                  d = void 0 === f ? "x" : f,
                  h = c.yAxisKey,
                  p = void 0 === h ? "y" : h,
                  v = "x" === u.axis ? d : p,
                  g = "x" === s.axis ? d : p,
                  m = [];
                for (a = n, i = n + r; a < i; ++a)
                  (l = t[a]),
                    ((o = {})[u.axis] = u.parse(N(l, v), a)),
                    m.push(Fn(N(l, g), o, s, a));
                return m;
              },
            },
            {
              key: "updateRangeFromParsed",
              value: function (e, t, r, a) {
                o(Object(i.a)(n.prototype), "updateRangeFromParsed", this).call(
                  this,
                  e,
                  t,
                  r,
                  a
                );
                var l = r._custom;
                l &&
                  t === this._cachedMeta.vScale &&
                  ((e.min = Math.min(e.min, l.min)),
                  (e.max = Math.max(e.max, l.max)));
              },
            },
            {
              key: "getLabelAndValue",
              value: function (e) {
                var t = this._cachedMeta,
                  n = t.iScale,
                  r = t.vScale,
                  a = this.getParsed(e),
                  i = a._custom,
                  o = In(i)
                    ? "[" + i.start + ", " + i.end + "]"
                    : "" + r.getLabelForValue(a[r.axis]);
                return { label: "" + n.getLabelForValue(a[n.axis]), value: o };
              },
            },
            {
              key: "initialize",
              value: function () {
                var e = this;
                (e.enableOptionSharing = !0),
                  o(Object(i.a)(n.prototype), "initialize", this).call(this),
                  (e._cachedMeta.stack = e.getDataset().stack);
              },
            },
            {
              key: "update",
              value: function (e) {
                var t = this._cachedMeta;
                this.updateElements(t.data, 0, t.data.length, e);
              },
            },
            {
              key: "updateElements",
              value: function (e, t, n, r) {
                var a = this,
                  i = "reset" === r,
                  o = a._cachedMeta.vScale,
                  l = o.getBasePixel(),
                  u = o.isHorizontal(),
                  s = a._getRuler(),
                  c = a.resolveDataElementOptions(t, r),
                  f = a.getSharedOptions(c),
                  d = a.includeOptions(r, f);
                a.updateSharedOptions(f, r, c);
                for (var h = t; h < t + n; h++) {
                  var p = a.getParsed(h),
                    v =
                      i || k(p[o.axis])
                        ? { base: l, head: l }
                        : a._calculateBarValuePixels(h),
                    g = a._calculateBarIndexPixels(h, s),
                    m = {
                      horizontal: u,
                      base: v.base,
                      x: u ? v.head : g.center,
                      y: u ? g.center : v.head,
                      height: u ? g.size : void 0,
                      width: u ? void 0 : g.size,
                    };
                  d && (m.options = f || a.resolveDataElementOptions(h, r)),
                    a.updateElement(e[h], h, m, r);
                }
              },
            },
            {
              key: "_getStacks",
              value: function (e, t) {
                var n,
                  r,
                  a = this._cachedMeta.iScale,
                  i = a.getMatchingVisibleMetas(this._type),
                  o = a.options.stacked,
                  l = i.length,
                  u = [];
                for (n = 0; n < l; ++n) {
                  if (((r = i[n]), "undefined" !== typeof t)) {
                    var s = r.controller.getParsed(t)[
                      r.controller._cachedMeta.vScale.axis
                    ];
                    if (k(s) || isNaN(s)) continue;
                  }
                  if (
                    ((!1 === o ||
                      -1 === u.indexOf(r.stack) ||
                      (void 0 === o && void 0 === r.stack)) &&
                      u.push(r.stack),
                    r.index === e)
                  )
                    break;
                }
                return u.length || u.push(void 0), u;
              },
            },
            {
              key: "_getStackCount",
              value: function (e) {
                return this._getStacks(void 0, e).length;
              },
            },
            {
              key: "_getStackIndex",
              value: function (e, t) {
                var n = this._getStacks(e),
                  r = void 0 !== t ? n.indexOf(t) : -1;
                return -1 === r ? n.length - 1 : r;
              },
            },
            {
              key: "_getRuler",
              value: function () {
                var e,
                  t,
                  n = this,
                  r = n.options,
                  a = n._cachedMeta,
                  i = a.iScale,
                  o = [];
                for (e = 0, t = a.data.length; e < t; ++e)
                  o.push(i.getPixelForValue(n.getParsed(e)[i.axis], e));
                var l = r.barThickness;
                return {
                  min: l || zn(i),
                  pixels: o,
                  start: i._startPixel,
                  end: i._endPixel,
                  stackCount: n._getStackCount(),
                  scale: i,
                  grouped: r.grouped,
                  ratio: l ? 1 : r.categoryPercentage * r.barPercentage,
                };
              },
            },
            {
              key: "_calculateBarValuePixels",
              value: function (e) {
                var t,
                  n,
                  r = this,
                  a = r._cachedMeta,
                  i = a.vScale,
                  o = a._stacked,
                  l = r.options,
                  u = l.base,
                  s = l.minBarLength,
                  c = r.getParsed(e),
                  f = c._custom,
                  d = In(f),
                  h = c[i.axis],
                  p = 0,
                  v = o ? r.applyStack(i, c, o) : h;
                v !== h && ((p = v - h), (v = h)),
                  d &&
                    ((h = f.barStart),
                    (v = f.barEnd - f.barStart),
                    0 !== h && G(h) !== G(f.barEnd) && (p = 0),
                    (p += h));
                var g = k(u) || d ? p : u,
                  m = i.getPixelForValue(g);
                (n =
                  (t = this.chart.getDataVisibility(e)
                    ? i.getPixelForValue(p + v)
                    : m) - m),
                  void 0 !== s &&
                    Math.abs(n) < s &&
                    ((n = n < 0 ? -s : s),
                    0 === h && (m -= n / 2),
                    (t = m + n));
                var y = u || 0;
                if (m === i.getPixelForValue(y)) {
                  var b = i.getLineWidthForValue(y) / 2;
                  n > 0 ? ((m += b), (n -= b)) : n < 0 && ((m -= b), (n += b));
                }
                return { size: n, base: m, head: t, center: t + n / 2 };
              },
            },
            {
              key: "_calculateBarIndexPixels",
              value: function (e, t) {
                var n,
                  r,
                  a = this,
                  i = t.scale,
                  o = a.options,
                  l = M(o.maxBarThickness, 1 / 0);
                if (t.grouped) {
                  var u = o.skipNull ? a._getStackCount(e) : t.stackCount,
                    s =
                      "flex" === o.barThickness
                        ? (function (e, t, n, r) {
                            var a = t.pixels,
                              i = a[e],
                              o = e > 0 ? a[e - 1] : null,
                              l = e < a.length - 1 ? a[e + 1] : null,
                              u = n.categoryPercentage;
                            null === o &&
                              (o = i - (null === l ? t.end - t.start : l - i)),
                              null === l && (l = i + i - o);
                            var s = i - ((i - Math.min(o, l)) / 2) * u;
                            return {
                              chunk: ((Math.abs(l - o) / 2) * u) / r,
                              ratio: n.barPercentage,
                              start: s,
                            };
                          })(e, t, o, u)
                        : (function (e, t, n, r) {
                            var a,
                              i,
                              o = n.barThickness;
                            return (
                              k(o)
                                ? ((a = t.min * n.categoryPercentage),
                                  (i = n.barPercentage))
                                : ((a = o * r), (i = 1)),
                              {
                                chunk: a / r,
                                ratio: i,
                                start: t.pixels[e] - a / 2,
                              }
                            );
                          })(e, t, o, u),
                    c = a._getStackIndex(a.index, a._cachedMeta.stack);
                  (n = s.start + s.chunk * c + s.chunk / 2),
                    (r = Math.min(l, s.chunk * s.ratio));
                } else
                  (n = i.getPixelForValue(a.getParsed(e)[i.axis], e)),
                    (r = Math.min(l, t.min * t.ratio));
                return { base: n - r / 2, head: n + r / 2, center: n, size: r };
              },
            },
            {
              key: "draw",
              value: function () {
                var e = this,
                  t = e.chart,
                  n = e._cachedMeta,
                  r = n.vScale,
                  a = n.data,
                  i = a.length,
                  o = 0;
                for (it(t.ctx, t.chartArea); o < i; ++o)
                  null !== e.getParsed(o)[r.axis] && a[o].draw(e._ctx);
                ot(t.ctx);
              },
            },
          ]),
          n
        );
      })(An);
      (Vn.id = "bar"),
        (Vn.defaults = {
          datasetElementType: !1,
          dataElementType: "bar",
          categoryPercentage: 0.8,
          barPercentage: 0.9,
          grouped: !0,
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "base", "width", "height"],
            },
          },
        }),
        (Vn.overrides = {
          interaction: { mode: "index" },
          scales: {
            _index_: { type: "category", offset: !0, grid: { offset: !0 } },
            _value_: { type: "linear", beginAtZero: !0 },
          },
        });
      var Bn = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n() {
          return Object(h.a)(this, n), t.apply(this, arguments);
        }
        return (
          Object(p.a)(n, [
            {
              key: "initialize",
              value: function () {
                (this.enableOptionSharing = !0),
                  o(Object(i.a)(n.prototype), "initialize", this).call(this);
              },
            },
            {
              key: "parseObjectData",
              value: function (e, t, n, r) {
                var a,
                  i,
                  o,
                  l = e.xScale,
                  u = e.yScale,
                  s = this._parsing,
                  c = s.xAxisKey,
                  f = void 0 === c ? "x" : c,
                  d = s.yAxisKey,
                  h = void 0 === d ? "y" : d,
                  p = [];
                for (a = n, i = n + r; a < i; ++a)
                  (o = t[a]),
                    p.push({
                      x: l.parse(N(o, f), a),
                      y: u.parse(N(o, h), a),
                      _custom: o && o.r && +o.r,
                    });
                return p;
              },
            },
            {
              key: "getMaxOverflow",
              value: function () {
                for (
                  var e = this._cachedMeta,
                    t = e.data,
                    n = e._parsed,
                    r = 0,
                    a = t.length - 1;
                  a >= 0;
                  --a
                )
                  r = Math.max(r, t[a].size() / 2, n[a]._custom);
                return r > 0 && r;
              },
            },
            {
              key: "getLabelAndValue",
              value: function (e) {
                var t = this._cachedMeta,
                  n = t.xScale,
                  r = t.yScale,
                  a = this.getParsed(e),
                  i = n.getLabelForValue(a.x),
                  o = r.getLabelForValue(a.y),
                  l = a._custom;
                return {
                  label: t.label,
                  value: "(" + i + ", " + o + (l ? ", " + l : "") + ")",
                };
              },
            },
            {
              key: "update",
              value: function (e) {
                var t = this._cachedMeta.data;
                this.updateElements(t, 0, t.length, e);
              },
            },
            {
              key: "updateElements",
              value: function (e, t, n, r) {
                for (
                  var a = this,
                    i = "reset" === r,
                    o = a._cachedMeta,
                    l = o.xScale,
                    u = o.yScale,
                    s = a.resolveDataElementOptions(t, r),
                    c = a.getSharedOptions(s),
                    f = a.includeOptions(r, c),
                    d = t;
                  d < t + n;
                  d++
                ) {
                  var h = e[d],
                    p = !i && a.getParsed(d),
                    v = i ? l.getPixelForDecimal(0.5) : l.getPixelForValue(p.x),
                    g = i ? u.getBasePixel() : u.getPixelForValue(p.y),
                    m = { x: v, y: g, skip: isNaN(v) || isNaN(g) };
                  f &&
                    ((m.options = a.resolveDataElementOptions(d, r)),
                    i && (m.options.radius = 0)),
                    a.updateElement(h, d, m, r);
                }
                a.updateSharedOptions(c, r, s);
              },
            },
            {
              key: "resolveDataElementOptions",
              value: function (e, t) {
                var r = this.getParsed(e),
                  a = o(
                    Object(i.a)(n.prototype),
                    "resolveDataElementOptions",
                    this
                  ).call(this, e, t);
                a.$shared && (a = Object.assign({}, a, { $shared: !1 }));
                var l = a.radius;
                return (
                  "active" !== t && (a.radius = 0),
                  (a.radius += M(r && r._custom, l)),
                  a
                );
              },
            },
          ]),
          n
        );
      })(An);
      (Bn.id = "bubble"),
        (Bn.defaults = {
          datasetElementType: !1,
          dataElementType: "point",
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "borderWidth", "radius"],
            },
          },
        }),
        (Bn.overrides = {
          scales: { x: { type: "linear" }, y: { type: "linear" } },
          plugins: {
            tooltip: {
              callbacks: {
                title: function () {
                  return "";
                },
              },
            },
          },
        });
      var Wn = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n(e, r) {
          var a;
          return (
            Object(h.a)(this, n),
            ((a = t.call(this, e, r)).enableOptionSharing = !0),
            (a.innerRadius = void 0),
            (a.outerRadius = void 0),
            (a.offsetX = void 0),
            (a.offsetY = void 0),
            a
          );
        }
        return (
          Object(p.a)(n, [
            { key: "linkScales", value: function () {} },
            {
              key: "parse",
              value: function (e, t) {
                var n,
                  r,
                  a = this.getDataset().data,
                  i = this._cachedMeta;
                for (n = e, r = e + t; n < r; ++n) i._parsed[n] = +a[n];
              },
            },
            {
              key: "_getRotation",
              value: function () {
                return ne(this.options.rotation - 90);
              },
            },
            {
              key: "_getCircumference",
              value: function () {
                return ne(this.options.circumference);
              },
            },
            {
              key: "_getRotationExtents",
              value: function () {
                for (
                  var e = U, t = -U, n = this, r = 0;
                  r < n.chart.data.datasets.length;
                  ++r
                )
                  if (n.chart.isDatasetVisible(r)) {
                    var a = n.chart.getDatasetMeta(r).controller,
                      i = a._getRotation(),
                      o = a._getCircumference();
                    (e = Math.min(e, i)), (t = Math.max(t, i + o));
                  }
                return { rotation: e, circumference: t - e };
              },
            },
            {
              key: "update",
              value: function (e) {
                var t,
                  n,
                  r = this,
                  a = r.chart.chartArea,
                  i = r._cachedMeta,
                  o = i.data,
                  l = r.getMaxBorderWidth() + r.getMaxOffset(o),
                  u = Math.max((Math.min(a.width, a.height) - l) / 2, 0),
                  s = Math.min(
                    ((t = r.options.cutout),
                    (n = u),
                    "string" === typeof t && t.endsWith("%")
                      ? parseFloat(t) / 100
                      : t / n),
                    1
                  ),
                  c = r._getRingWeight(r.index),
                  f = r._getRotationExtents(),
                  d = f.circumference,
                  h = (function (e, t, n) {
                    var r = 1,
                      a = 1,
                      i = 0,
                      o = 0;
                    if (t < U) {
                      var l = e,
                        u = l + t,
                        s = Math.cos(l),
                        c = Math.sin(l),
                        f = Math.cos(u),
                        d = Math.sin(u),
                        h = function (e, t, r) {
                          return le(e, l, u) ? 1 : Math.max(t, t * n, r, r * n);
                        },
                        p = function (e, t, r) {
                          return le(e, l, u)
                            ? -1
                            : Math.min(t, t * n, r, r * n);
                        },
                        v = h(0, s, f),
                        g = h(Q, c, d),
                        m = p(W, s, f),
                        y = p(W + Q, c, d);
                      (r = (v - m) / 2),
                        (a = (g - y) / 2),
                        (i = -(v + m) / 2),
                        (o = -(g + y) / 2);
                    }
                    return { ratioX: r, ratioY: a, offsetX: i, offsetY: o };
                  })(f.rotation, d, s),
                  p = h.ratioX,
                  v = h.ratioY,
                  g = h.offsetX,
                  m = h.offsetY,
                  y = (a.width - l) / p,
                  b = (a.height - l) / v,
                  x = Math.max(Math.min(y, b) / 2, 0),
                  k = E(r.options.radius, x),
                  _ =
                    (k - Math.max(k * s, 0)) /
                    r._getVisibleDatasetWeightTotal();
                (r.offsetX = g * k),
                  (r.offsetY = m * k),
                  (i.total = r.calculateTotal()),
                  (r.outerRadius = k - _ * r._getRingWeightOffset(r.index)),
                  (r.innerRadius = Math.max(r.outerRadius - _ * c, 0)),
                  r.updateElements(o, 0, o.length, e);
              },
            },
            {
              key: "_circumference",
              value: function (e, t) {
                var n = this,
                  r = n.options,
                  a = n._cachedMeta,
                  i = n._getCircumference();
                return (t && r.animation.animateRotate) ||
                  !this.chart.getDataVisibility(e) ||
                  null === a._parsed[e]
                  ? 0
                  : n.calculateCircumference((a._parsed[e] * i) / U);
              },
            },
            {
              key: "updateElements",
              value: function (e, t, n, r) {
                var a,
                  i = this,
                  o = "reset" === r,
                  l = i.chart,
                  u = l.chartArea,
                  s = l.options.animation,
                  c = (u.left + u.right) / 2,
                  f = (u.top + u.bottom) / 2,
                  d = o && s.animateScale,
                  h = d ? 0 : i.innerRadius,
                  p = d ? 0 : i.outerRadius,
                  v = i.resolveDataElementOptions(t, r),
                  g = i.getSharedOptions(v),
                  m = i.includeOptions(r, g),
                  y = i._getRotation();
                for (a = 0; a < t; ++a) y += i._circumference(a, o);
                for (a = t; a < t + n; ++a) {
                  var b = i._circumference(a, o),
                    x = e[a],
                    k = {
                      x: c + i.offsetX,
                      y: f + i.offsetY,
                      startAngle: y,
                      endAngle: y + b,
                      circumference: b,
                      outerRadius: p,
                      innerRadius: h,
                    };
                  m && (k.options = g || i.resolveDataElementOptions(a, r)),
                    (y += b),
                    i.updateElement(x, a, k, r);
                }
                i.updateSharedOptions(g, r, v);
              },
            },
            {
              key: "calculateTotal",
              value: function () {
                var e,
                  t = this._cachedMeta,
                  n = t.data,
                  r = 0;
                for (e = 0; e < n.length; e++) {
                  var a = t._parsed[e];
                  null !== a &&
                    !isNaN(a) &&
                    this.chart.getDataVisibility(e) &&
                    (r += Math.abs(a));
                }
                return r;
              },
            },
            {
              key: "calculateCircumference",
              value: function (e) {
                var t = this._cachedMeta.total;
                return t > 0 && !isNaN(e) ? U * (Math.abs(e) / t) : 0;
              },
            },
            {
              key: "getLabelAndValue",
              value: function (e) {
                var t = this._cachedMeta,
                  n = this.chart,
                  r = n.data.labels || [],
                  a = un(t._parsed[e], n.options.locale);
                return { label: r[e] || "", value: a };
              },
            },
            {
              key: "getMaxBorderWidth",
              value: function (e) {
                var t,
                  n,
                  r,
                  a,
                  i,
                  o = 0,
                  l = this.chart;
                if (!e)
                  for (t = 0, n = l.data.datasets.length; t < n; ++t)
                    if (l.isDatasetVisible(t)) {
                      (e = (r = l.getDatasetMeta(t)).data),
                        (a = r.controller) !== this && a.configure();
                      break;
                    }
                if (!e) return 0;
                for (t = 0, n = e.length; t < n; ++t)
                  "inner" !==
                    (i = a.resolveDataElementOptions(t)).borderAlign &&
                    (o = Math.max(
                      o,
                      i.borderWidth || 0,
                      i.hoverBorderWidth || 0
                    ));
                return o;
              },
            },
            {
              key: "getMaxOffset",
              value: function (e) {
                for (var t = 0, n = 0, r = e.length; n < r; ++n) {
                  var a = this.resolveDataElementOptions(n);
                  t = Math.max(t, a.offset || 0, a.hoverOffset || 0);
                }
                return t;
              },
            },
            {
              key: "_getRingWeightOffset",
              value: function (e) {
                for (var t = 0, n = 0; n < e; ++n)
                  this.chart.isDatasetVisible(n) &&
                    (t += this._getRingWeight(n));
                return t;
              },
            },
            {
              key: "_getRingWeight",
              value: function (e) {
                return Math.max(M(this.chart.data.datasets[e].weight, 1), 0);
              },
            },
            {
              key: "_getVisibleDatasetWeightTotal",
              value: function () {
                return (
                  this._getRingWeightOffset(this.chart.data.datasets.length) ||
                  1
                );
              },
            },
          ]),
          n
        );
      })(An);
      (Wn.id = "doughnut"),
        (Wn.defaults = {
          datasetElementType: !1,
          dataElementType: "arc",
          animation: { animateRotate: !0, animateScale: !1 },
          animations: {
            numbers: {
              type: "number",
              properties: [
                "circumference",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "startAngle",
                "x",
                "y",
                "offset",
                "borderWidth",
              ],
            },
          },
          cutout: "50%",
          rotation: 0,
          circumference: 360,
          radius: "100%",
          indexAxis: "r",
        }),
        (Wn.overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels: function (e) {
                  var t = e.data;
                  return t.labels.length && t.datasets.length
                    ? t.labels.map(function (t, n) {
                        var r = e.getDatasetMeta(0).controller.getStyle(n);
                        return {
                          text: t,
                          fillStyle: r.backgroundColor,
                          strokeStyle: r.borderColor,
                          lineWidth: r.borderWidth,
                          hidden: !e.getDataVisibility(n),
                          index: n,
                        };
                      })
                    : [];
                },
              },
              onClick: function (e, t, n) {
                n.chart.toggleDataVisibility(t.index), n.chart.update();
              },
            },
            tooltip: {
              callbacks: {
                title: function () {
                  return "";
                },
                label: function (e) {
                  var t = e.label,
                    n = ": " + e.formattedValue;
                  return _(t) ? ((t = t.slice())[0] += n) : (t += n), t;
                },
              },
            },
          },
        });
      var Un = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n() {
          return Object(h.a)(this, n), t.apply(this, arguments);
        }
        return (
          Object(p.a)(n, [
            {
              key: "initialize",
              value: function () {
                (this.enableOptionSharing = !0),
                  o(Object(i.a)(n.prototype), "initialize", this).call(this);
              },
            },
            {
              key: "update",
              value: function (e) {
                var t = this,
                  n = t._cachedMeta,
                  r = n.dataset,
                  a = n.data,
                  i = void 0 === a ? [] : a,
                  o = n._dataset,
                  l = t.chart._animationsDisabled,
                  u = (function (e, t, n) {
                    var r = t.length,
                      a = 0,
                      i = r;
                    if (e._sorted) {
                      var o = e.iScale,
                        l = e._parsed,
                        u = o.axis,
                        s = o.getUserBounds(),
                        c = s.min,
                        f = s.max,
                        d = s.minDefined,
                        h = s.maxDefined;
                      d &&
                        (a = ue(
                          Math.min(
                            kt(l, o.axis, c).lo,
                            n ? r : kt(t, u, o.getPixelForValue(c)).lo
                          ),
                          0,
                          r - 1
                        )),
                        (i = h
                          ? ue(
                              Math.max(
                                kt(l, o.axis, f).hi + 1,
                                n ? 0 : kt(t, u, o.getPixelForValue(f)).hi + 1
                              ),
                              a,
                              r
                            ) - a
                          : r - a);
                    }
                    return { start: a, count: i };
                  })(n, i, l),
                  s = u.start,
                  c = u.count;
                (t._drawStart = s),
                  (t._drawCount = c),
                  (function (e) {
                    var t = e.xScale,
                      n = e.yScale,
                      r = e._scaleRanges,
                      a = {
                        xmin: t.min,
                        xmax: t.max,
                        ymin: n.min,
                        ymax: n.max,
                      };
                    if (!r) return (e._scaleRanges = a), !0;
                    var i =
                      r.xmin !== t.min ||
                      r.xmax !== t.max ||
                      r.ymin !== n.min ||
                      r.ymax !== n.max;
                    return Object.assign(r, a), i;
                  })(n) && ((s = 0), (c = i.length)),
                  (r._decimated = !!o._decimated),
                  (r.points = i);
                var f = t.resolveDatasetElementOptions(e);
                t.options.showLine || (f.borderWidth = 0),
                  (f.segment = t.options.segment),
                  t.updateElement(r, void 0, { animated: !l, options: f }, e),
                  t.updateElements(i, s, c, e);
              },
            },
            {
              key: "updateElements",
              value: function (e, t, n, r) {
                for (
                  var a = this,
                    i = "reset" === r,
                    o = a._cachedMeta,
                    l = o.xScale,
                    u = o.yScale,
                    s = o._stacked,
                    c = a.resolveDataElementOptions(t, r),
                    f = a.getSharedOptions(c),
                    d = a.includeOptions(r, f),
                    h = a.options.spanGaps,
                    p = J(h) ? h : Number.POSITIVE_INFINITY,
                    v = a.chart._animationsDisabled || i || "none" === r,
                    g = t > 0 && a.getParsed(t - 1),
                    m = t;
                  m < t + n;
                  ++m
                ) {
                  var y = e[m],
                    b = a.getParsed(m),
                    x = v ? y : {},
                    _ = k(b.y),
                    w = (x.x = l.getPixelForValue(b.x, m)),
                    S = (x.y =
                      i || _
                        ? u.getBasePixel()
                        : u.getPixelForValue(
                            s ? a.applyStack(u, b, s) : b.y,
                            m
                          ));
                  (x.skip = isNaN(w) || isNaN(S) || _),
                    (x.stop = m > 0 && b.x - g.x > p),
                    (x.parsed = b),
                    d && (x.options = f || a.resolveDataElementOptions(m, r)),
                    v || a.updateElement(y, m, x, r),
                    (g = b);
                }
                a.updateSharedOptions(f, r, c);
              },
            },
            {
              key: "getMaxOverflow",
              value: function () {
                var e = this,
                  t = e._cachedMeta,
                  n = t.dataset,
                  r = (n.options && n.options.borderWidth) || 0,
                  a = t.data || [];
                if (!a.length) return r;
                var i = a[0].size(e.resolveDataElementOptions(0)),
                  o = a[a.length - 1].size(
                    e.resolveDataElementOptions(a.length - 1)
                  );
                return Math.max(r, i, o) / 2;
              },
            },
            {
              key: "draw",
              value: function () {
                this._cachedMeta.dataset.updateControlPoints(
                  this.chart.chartArea
                ),
                  o(Object(i.a)(n.prototype), "draw", this).call(this);
              },
            },
          ]),
          n
        );
      })(An);
      (Un.id = "line"),
        (Un.defaults = {
          datasetElementType: "line",
          dataElementType: "point",
          showLine: !0,
          spanGaps: !1,
        }),
        (Un.overrides = {
          scales: {
            _index_: { type: "category" },
            _value_: { type: "linear" },
          },
        });
      var $n = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n(e, r) {
          var a;
          return (
            Object(h.a)(this, n),
            ((a = t.call(this, e, r)).innerRadius = void 0),
            (a.outerRadius = void 0),
            a
          );
        }
        return (
          Object(p.a)(n, [
            {
              key: "update",
              value: function (e) {
                var t = this._cachedMeta.data;
                this._updateRadius(), this.updateElements(t, 0, t.length, e);
              },
            },
            {
              key: "_updateRadius",
              value: function () {
                var e = this,
                  t = e.chart,
                  n = t.chartArea,
                  r = t.options,
                  a = Math.min(n.right - n.left, n.bottom - n.top),
                  i = Math.max(a / 2, 0),
                  o =
                    (i -
                      Math.max(
                        r.cutoutPercentage ? (i / 100) * r.cutoutPercentage : 1,
                        0
                      )) /
                    t.getVisibleDatasetCount();
                (e.outerRadius = i - o * e.index),
                  (e.innerRadius = e.outerRadius - o);
              },
            },
            {
              key: "updateElements",
              value: function (e, t, n, r) {
                var a,
                  i = this,
                  o = "reset" === r,
                  l = i.chart,
                  u = i.getDataset(),
                  s = l.options.animation,
                  c = i._cachedMeta.rScale,
                  f = c.xCenter,
                  d = c.yCenter,
                  h = c.getIndexAngle(0) - 0.5 * W,
                  p = h,
                  v = 360 / i.countVisibleElements();
                for (a = 0; a < t; ++a) p += i._computeAngle(a, r, v);
                for (a = t; a < t + n; a++) {
                  var g = e[a],
                    m = p,
                    y = p + i._computeAngle(a, r, v),
                    b = l.getDataVisibility(a)
                      ? c.getDistanceFromCenterForValue(u.data[a])
                      : 0;
                  (p = y),
                    o &&
                      (s.animateScale && (b = 0),
                      s.animateRotate && (m = y = h));
                  var x = {
                    x: f,
                    y: d,
                    innerRadius: 0,
                    outerRadius: b,
                    startAngle: m,
                    endAngle: y,
                    options: i.resolveDataElementOptions(a, r),
                  };
                  i.updateElement(g, a, x, r);
                }
              },
            },
            {
              key: "countVisibleElements",
              value: function () {
                var e = this,
                  t = this.getDataset(),
                  n = this._cachedMeta,
                  r = 0;
                return (
                  n.data.forEach(function (n, a) {
                    !isNaN(t.data[a]) && e.chart.getDataVisibility(a) && r++;
                  }),
                  r
                );
              },
            },
            {
              key: "_computeAngle",
              value: function (e, t, n) {
                return this.chart.getDataVisibility(e)
                  ? ne(this.resolveDataElementOptions(e, t).angle || n)
                  : 0;
              },
            },
          ]),
          n
        );
      })(An);
      ($n.id = "polarArea"),
        ($n.defaults = {
          dataElementType: "arc",
          animation: { animateRotate: !0, animateScale: !0 },
          animations: {
            numbers: {
              type: "number",
              properties: [
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
              ],
            },
          },
          indexAxis: "r",
          startAngle: 0,
        }),
        ($n.overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels: function (e) {
                  var t = e.data;
                  return t.labels.length && t.datasets.length
                    ? t.labels.map(function (t, n) {
                        var r = e.getDatasetMeta(0).controller.getStyle(n);
                        return {
                          text: t,
                          fillStyle: r.backgroundColor,
                          strokeStyle: r.borderColor,
                          lineWidth: r.borderWidth,
                          hidden: !e.getDataVisibility(n),
                          index: n,
                        };
                      })
                    : [];
                },
              },
              onClick: function (e, t, n) {
                n.chart.toggleDataVisibility(t.index), n.chart.update();
              },
            },
            tooltip: {
              callbacks: {
                title: function () {
                  return "";
                },
                label: function (e) {
                  return (
                    e.chart.data.labels[e.dataIndex] + ": " + e.formattedValue
                  );
                },
              },
            },
          },
          scales: {
            r: {
              type: "radialLinear",
              angleLines: { display: !1 },
              beginAtZero: !0,
              grid: { circular: !0 },
              pointLabels: { display: !1 },
              startAngle: 0,
            },
          },
        });
      var Hn = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n() {
          return Object(h.a)(this, n), t.apply(this, arguments);
        }
        return n;
      })(Wn);
      (Hn.id = "pie"),
        (Hn.defaults = {
          cutout: 0,
          rotation: 0,
          circumference: 360,
          radius: "100%",
        });
      var Yn = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n() {
          return Object(h.a)(this, n), t.apply(this, arguments);
        }
        return (
          Object(p.a)(n, [
            {
              key: "getLabelAndValue",
              value: function (e) {
                var t = this._cachedMeta.vScale,
                  n = this.getParsed(e);
                return {
                  label: t.getLabels()[e],
                  value: "" + t.getLabelForValue(n[t.axis]),
                };
              },
            },
            {
              key: "update",
              value: function (e) {
                var t = this,
                  n = t._cachedMeta,
                  r = n.dataset,
                  a = n.data || [],
                  i = n.iScale.getLabels();
                if (((r.points = a), "resize" !== e)) {
                  var o = t.resolveDatasetElementOptions(e);
                  t.options.showLine || (o.borderWidth = 0);
                  var l = {
                    _loop: !0,
                    _fullLoop: i.length === a.length,
                    options: o,
                  };
                  t.updateElement(r, void 0, l, e);
                }
                t.updateElements(a, 0, a.length, e);
              },
            },
            {
              key: "updateElements",
              value: function (e, t, n, r) {
                for (
                  var a = this,
                    i = a.getDataset(),
                    o = a._cachedMeta.rScale,
                    l = "reset" === r,
                    u = t;
                  u < t + n;
                  u++
                ) {
                  var s = e[u],
                    c = a.resolveDataElementOptions(u, r),
                    f = o.getPointPositionForValue(u, i.data[u]),
                    d = l ? o.xCenter : f.x,
                    h = l ? o.yCenter : f.y,
                    p = {
                      x: d,
                      y: h,
                      angle: f.angle,
                      skip: isNaN(d) || isNaN(h),
                      options: c,
                    };
                  a.updateElement(s, u, p, r);
                }
              },
            },
          ]),
          n
        );
      })(An);
      (Yn.id = "radar"),
        (Yn.defaults = {
          datasetElementType: "line",
          dataElementType: "point",
          indexAxis: "r",
          showLine: !0,
          elements: { line: { fill: "start" } },
        }),
        (Yn.overrides = {
          aspectRatio: 1,
          scales: { r: { type: "radialLinear" } },
        });
      var Qn = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n() {
          return Object(h.a)(this, n), t.apply(this, arguments);
        }
        return n;
      })(Un);
      (Qn.id = "scatter"),
        (Qn.defaults = { showLine: !1, fill: !1 }),
        (Qn.overrides = {
          interaction: { mode: "point" },
          plugins: {
            tooltip: {
              callbacks: {
                title: function () {
                  return "";
                },
                label: function (e) {
                  return "(" + e.label + ", " + e.formattedValue + ")";
                },
              },
            },
          },
          scales: { x: { type: "linear" }, y: { type: "linear" } },
        });
      function qn() {
        throw new Error(
          "This method is not implemented: either no adapter can be found or an incomplete integration was provided."
        );
      }
      var Xn = (function () {
        function e(t) {
          Object(h.a)(this, e), (this.options = t || {});
        }
        return (
          Object(p.a)(e, [
            {
              key: "formats",
              value: function () {
                return qn();
              },
            },
            {
              key: "parse",
              value: function (e, t) {
                return qn();
              },
            },
            {
              key: "format",
              value: function (e, t) {
                return qn();
              },
            },
            {
              key: "add",
              value: function (e, t, n) {
                return qn();
              },
            },
            {
              key: "diff",
              value: function (e, t, n) {
                return qn();
              },
            },
            {
              key: "startOf",
              value: function (e, t, n) {
                return qn();
              },
            },
            {
              key: "endOf",
              value: function (e, t) {
                return qn();
              },
            },
          ]),
          e
        );
      })();
      Xn.override = function (e) {
        Object.assign(Xn.prototype, e);
      };
      var Kn = { _date: Xn };
      function Gn(e, t) {
        return "native" in e ? { x: e.x, y: e.y } : Gt(e, t);
      }
      function Zn(e, t, n, r) {
        var a = e.controller,
          i = e.data,
          o = e._sorted,
          l = a._cachedMeta.iScale;
        if (l && t === l.axis && o && i.length) {
          var u = l._reversePixels ? _t : kt;
          if (!r) return u(i, t, n);
          if (a._sharedOptions) {
            var s = i[0],
              c = "function" === typeof s.getRange && s.getRange(t);
            if (c) {
              var f = u(i, t, n - c),
                d = u(i, t, n + c);
              return { lo: f.lo, hi: d.hi };
            }
          }
        }
        return { lo: 0, hi: i.length - 1 };
      }
      function Jn(e, t, n, r, a) {
        for (
          var i = e.getSortedVisibleDatasetMetas(),
            o = n[t],
            l = 0,
            u = i.length;
          l < u;
          ++l
        )
          for (
            var s = i[l],
              c = s.index,
              f = s.data,
              d = Zn(i[l], t, o, a),
              h = d.lo,
              p = d.hi,
              v = h;
            v <= p;
            ++v
          ) {
            var g = f[v];
            g.skip || r(g, c, v);
          }
      }
      function er(e, t, n, r) {
        var a = [];
        if (!at(t, e.chartArea, e._minPadding)) return a;
        return (
          Jn(
            e,
            n,
            t,
            function (e, n, i) {
              e.inRange(t.x, t.y, r) &&
                a.push({ element: e, datasetIndex: n, index: i });
            },
            !0
          ),
          a
        );
      }
      function tr(e, t, n, r, a) {
        var i = (function (e) {
            var t = -1 !== e.indexOf("x"),
              n = -1 !== e.indexOf("y");
            return function (e, r) {
              var a = t ? Math.abs(e.x - r.x) : 0,
                i = n ? Math.abs(e.y - r.y) : 0;
              return Math.sqrt(Math.pow(a, 2) + Math.pow(i, 2));
            };
          })(n),
          o = Number.POSITIVE_INFINITY,
          l = [];
        if (!at(t, e.chartArea, e._minPadding)) return l;
        return (
          Jn(e, n, t, function (e, n, u) {
            if (!r || e.inRange(t.x, t.y, a)) {
              var s = e.getCenterPoint(a),
                c = i(t, s);
              c < o
                ? ((l = [{ element: e, datasetIndex: n, index: u }]), (o = c))
                : c === o && l.push({ element: e, datasetIndex: n, index: u });
            }
          }),
          l
        );
      }
      function nr(e, t, n, r) {
        var a = Gn(t, e),
          i = [],
          o = n.axis,
          l = "x" === o ? "inXRange" : "inYRange",
          u = !1;
        return (
          (function (e, t) {
            for (
              var n,
                r,
                a,
                i = e.getSortedVisibleDatasetMetas(),
                o = 0,
                l = i.length;
              o < l;
              ++o
            ) {
              var u = i[o];
              n = u.index;
              for (var s = 0, c = (r = u.data).length; s < c; ++s)
                (a = r[s]).skip || t(a, n, s);
            }
          })(e, function (e, t, n) {
            e[l](a[o], r) && i.push({ element: e, datasetIndex: t, index: n }),
              e.inRange(a.x, a.y, r) && (u = !0);
          }),
          n.intersect && !u ? [] : i
        );
      }
      var rr = {
          modes: {
            index: function (e, t, n, r) {
              var a = Gn(t, e),
                i = n.axis || "x",
                o = n.intersect ? er(e, a, i, r) : tr(e, a, i, !1, r),
                l = [];
              return o.length
                ? (e.getSortedVisibleDatasetMetas().forEach(function (e) {
                    var t = o[0].index,
                      n = e.data[t];
                    n &&
                      !n.skip &&
                      l.push({ element: n, datasetIndex: e.index, index: t });
                  }),
                  l)
                : [];
            },
            dataset: function (e, t, n, r) {
              var a = Gn(t, e),
                i = n.axis || "xy",
                o = n.intersect ? er(e, a, i, r) : tr(e, a, i, !1, r);
              if (o.length > 0) {
                var l = o[0].datasetIndex,
                  u = e.getDatasetMeta(l).data;
                o = [];
                for (var s = 0; s < u.length; ++s)
                  o.push({ element: u[s], datasetIndex: l, index: s });
              }
              return o;
            },
            point: function (e, t, n, r) {
              return er(e, Gn(t, e), n.axis || "xy", r);
            },
            nearest: function (e, t, n, r) {
              return tr(e, Gn(t, e), n.axis || "xy", n.intersect, r);
            },
            x: function (e, t, n, r) {
              return (n.axis = "x"), nr(e, t, n, r);
            },
            y: function (e, t, n, r) {
              return (n.axis = "y"), nr(e, t, n, r);
            },
          },
        },
        ar = ["left", "top", "right", "bottom"];
      function ir(e, t) {
        return e.filter(function (e) {
          return e.pos === t;
        });
      }
      function or(e, t) {
        return e.filter(function (e) {
          return -1 === ar.indexOf(e.pos) && e.box.axis === t;
        });
      }
      function lr(e, t) {
        return e.sort(function (e, n) {
          var r = t ? n : e,
            a = t ? e : n;
          return r.weight === a.weight
            ? r.index - a.index
            : r.weight - a.weight;
        });
      }
      function ur(e, t, n, r) {
        return Math.max(e[n], t[n]) + Math.max(e[r], t[r]);
      }
      function sr(e, t) {
        (e.top = Math.max(e.top, t.top)),
          (e.left = Math.max(e.left, t.left)),
          (e.bottom = Math.max(e.bottom, t.bottom)),
          (e.right = Math.max(e.right, t.right));
      }
      function cr(e, t, n) {
        var r = n.box,
          a = e.maxPadding;
        w(n.pos) ||
          (n.size && (e[n.pos] -= n.size),
          (n.size = n.horizontal ? r.height : r.width),
          (e[n.pos] += n.size)),
          r.getPadding && sr(a, r.getPadding());
        var i = Math.max(0, t.outerWidth - ur(a, e, "left", "right")),
          o = Math.max(0, t.outerHeight - ur(a, e, "top", "bottom")),
          l = i !== e.w,
          u = o !== e.h;
        return (
          (e.w = i),
          (e.h = o),
          n.horizontal ? { same: l, other: u } : { same: u, other: l }
        );
      }
      function fr(e, t) {
        var n = t.maxPadding;
        function r(e) {
          var r = { left: 0, top: 0, right: 0, bottom: 0 };
          return (
            e.forEach(function (e) {
              r[e] = Math.max(t[e], n[e]);
            }),
            r
          );
        }
        return r(e ? ["left", "right"] : ["top", "bottom"]);
      }
      function dr(e, t, n) {
        var r,
          a,
          i,
          o,
          l,
          u,
          s = [];
        for (r = 0, a = e.length, l = 0; r < a; ++r) {
          (o = (i = e[r]).box).update(
            i.width || t.w,
            i.height || t.h,
            fr(i.horizontal, t)
          );
          var c = cr(t, n, i),
            f = c.same,
            d = c.other;
          (l |= f && s.length), (u = u || d), o.fullSize || s.push(i);
        }
        return (l && dr(s, t, n)) || u;
      }
      function hr(e, t, n) {
        var r,
          a,
          i,
          o,
          l = n.padding,
          u = t.x,
          s = t.y;
        for (r = 0, a = e.length; r < a; ++r)
          (o = (i = e[r]).box),
            i.horizontal
              ? ((o.left = o.fullSize ? l.left : t.left),
                (o.right = o.fullSize ? n.outerWidth - l.right : t.left + t.w),
                (o.top = s),
                (o.bottom = s + o.height),
                (o.width = o.right - o.left),
                (s = o.bottom))
              : ((o.left = u),
                (o.right = u + o.width),
                (o.top = o.fullSize ? l.top : t.top),
                (o.bottom = o.fullSize ? n.outerHeight - l.right : t.top + t.h),
                (o.height = o.bottom - o.top),
                (u = o.right));
        (t.x = u), (t.y = s);
      }
      Ze.set("layout", { padding: { top: 0, right: 0, bottom: 0, left: 0 } });
      var pr = function (e, t) {
          e.boxes || (e.boxes = []),
            (t.fullSize = t.fullSize || !1),
            (t.position = t.position || "top"),
            (t.weight = t.weight || 0),
            (t._layers =
              t._layers ||
              function () {
                return [
                  {
                    z: 0,
                    draw: function (e) {
                      t.draw(e);
                    },
                  },
                ];
              }),
            e.boxes.push(t);
        },
        vr = function (e, t) {
          var n = e.boxes ? e.boxes.indexOf(t) : -1;
          -1 !== n && e.boxes.splice(n, 1);
        },
        gr = function (e, t, n) {
          (t.fullSize = n.fullSize),
            (t.position = n.position),
            (t.weight = n.weight);
        },
        mr = function (e, t, n, r) {
          if (e) {
            var a = mt(e.options.layout.padding),
              i = t - a.width,
              o = n - a.height,
              l = (function (e) {
                var t = (function (e) {
                    var t,
                      n,
                      r,
                      a = [];
                    for (t = 0, n = (e || []).length; t < n; ++t)
                      (r = e[t]),
                        a.push({
                          index: t,
                          box: r,
                          pos: r.position,
                          horizontal: r.isHorizontal(),
                          weight: r.weight,
                        });
                    return a;
                  })(e),
                  n = lr(
                    t.filter(function (e) {
                      return e.box.fullSize;
                    }),
                    !0
                  ),
                  r = lr(ir(t, "left"), !0),
                  a = lr(ir(t, "right")),
                  i = lr(ir(t, "top"), !0),
                  o = lr(ir(t, "bottom")),
                  l = or(t, "x"),
                  u = or(t, "y");
                return {
                  fullSize: n,
                  leftAndTop: r.concat(i),
                  rightAndBottom: a.concat(u).concat(o).concat(l),
                  chartArea: ir(t, "chartArea"),
                  vertical: r.concat(a).concat(u),
                  horizontal: i.concat(o).concat(l),
                };
              })(e.boxes),
              u = l.vertical,
              s = l.horizontal;
            P(e.boxes, function (e) {
              "function" === typeof e.beforeLayout && e.beforeLayout();
            });
            var c =
                u.reduce(function (e, t) {
                  return t.box.options && !1 === t.box.options.display
                    ? e
                    : e + 1;
                }, 0) || 1,
              f = Object.freeze({
                outerWidth: t,
                outerHeight: n,
                padding: a,
                availableWidth: i,
                availableHeight: o,
                vBoxMaxWidth: i / 2 / c,
                hBoxMaxHeight: o / 2,
              }),
              d = Object.assign({}, a);
            sr(d, mt(r));
            var h = Object.assign(
              { maxPadding: d, w: i, h: o, x: a.left, y: a.top },
              a
            );
            !(function (e, t) {
              var n, r, a;
              for (n = 0, r = e.length; n < r; ++n)
                (a = e[n]).horizontal
                  ? ((a.width = a.box.fullSize && t.availableWidth),
                    (a.height = t.hBoxMaxHeight))
                  : ((a.width = t.vBoxMaxWidth),
                    (a.height = a.box.fullSize && t.availableHeight));
            })(u.concat(s), f),
              dr(l.fullSize, h, f),
              dr(u, h, f),
              dr(s, h, f) && dr(u, h, f),
              (function (e) {
                var t = e.maxPadding;
                function n(n) {
                  var r = Math.max(t[n] - e[n], 0);
                  return (e[n] += r), r;
                }
                (e.y += n("top")), (e.x += n("left")), n("right"), n("bottom");
              })(h),
              hr(l.leftAndTop, h, f),
              (h.x += h.w),
              (h.y += h.h),
              hr(l.rightAndBottom, h, f),
              (e.chartArea = {
                left: h.left,
                top: h.top,
                right: h.left + h.w,
                bottom: h.top + h.h,
                height: h.h,
                width: h.w,
              }),
              P(l.chartArea, function (t) {
                var n = t.box;
                Object.assign(n, e.chartArea), n.update(h.w, h.h);
              });
          }
        },
        yr = (function () {
          function e() {
            Object(h.a)(this, e);
          }
          return (
            Object(p.a)(e, [
              { key: "acquireContext", value: function (e, t) {} },
              {
                key: "releaseContext",
                value: function (e) {
                  return !1;
                },
              },
              { key: "addEventListener", value: function (e, t, n) {} },
              { key: "removeEventListener", value: function (e, t, n) {} },
              {
                key: "getDevicePixelRatio",
                value: function () {
                  return 1;
                },
              },
              {
                key: "getMaximumSize",
                value: function (e, t, n, r) {
                  return (
                    (t = Math.max(0, t || e.width)),
                    (n = n || e.height),
                    { width: t, height: Math.max(0, r ? Math.floor(t / r) : n) }
                  );
                },
              },
              {
                key: "isAttached",
                value: function (e) {
                  return !0;
                },
              },
            ]),
            e
          );
        })(),
        br = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(h.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(p.a)(n, [
              {
                key: "acquireContext",
                value: function (e) {
                  return (e && e.getContext && e.getContext("2d")) || null;
                },
              },
            ]),
            n
          );
        })(yr),
        xr = {
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup",
          pointerenter: "mouseenter",
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointerleave: "mouseout",
          pointerout: "mouseout",
        },
        kr = function (e) {
          return null === e || "" === e;
        };
      var _r = !!tn && { passive: !0 };
      function wr(e, t, n) {
        e.canvas.removeEventListener(t, n, _r);
      }
      function Sr(e, t, n) {
        var r = e.canvas,
          a = (r && Yt(r)) || r,
          i = new MutationObserver(function (e) {
            var t = Yt(a);
            e.forEach(function (e) {
              for (var r = 0; r < e.addedNodes.length; r++) {
                var i = e.addedNodes[r];
                (i !== a && i !== t) || n(e.target);
              }
            });
          });
        return i.observe(document, { childList: !0, subtree: !0 }), i;
      }
      function Or(e, t, n) {
        var r = e.canvas,
          a = r && Yt(r);
        if (a) {
          var i = new MutationObserver(function (e) {
            e.forEach(function (e) {
              for (var t = 0; t < e.removedNodes.length; t++)
                if (e.removedNodes[t] === r) {
                  n();
                  break;
                }
            });
          });
          return i.observe(a, { childList: !0 }), i;
        }
      }
      var Mr = new Map(),
        Er = 0;
      function Cr() {
        var e = window.devicePixelRatio;
        e !== Er &&
          ((Er = e),
          Mr.forEach(function (t, n) {
            n.currentDevicePixelRatio !== e && t();
          }));
      }
      function Pr(e, t, n) {
        var r = e.canvas,
          a = r && Yt(r);
        if (a) {
          var i = g(function (e, t) {
              var r = a.clientWidth;
              n(e, t), r < a.clientWidth && n();
            }, window),
            o = new ResizeObserver(function (e) {
              var t = e[0],
                n = t.contentRect.width,
                r = t.contentRect.height;
              (0 === n && 0 === r) || i(n, r);
            });
          return (
            o.observe(a),
            (function (e, t) {
              Mr.size || window.addEventListener("resize", Cr), Mr.set(e, t);
            })(e, i),
            o
          );
        }
      }
      function Tr(e, t, n) {
        n && n.disconnect(),
          "resize" === t &&
            (function (e) {
              Mr.delete(e), Mr.size || window.removeEventListener("resize", Cr);
            })(e);
      }
      function Dr(e, t, n) {
        var r = e.canvas,
          a = g(
            function (t) {
              null !== e.ctx &&
                n(
                  (function (e, t) {
                    var n = xr[e.type] || e.type,
                      r = Gt(e, t),
                      a = r.x,
                      i = r.y;
                    return {
                      type: n,
                      chart: t,
                      native: e,
                      x: void 0 !== a ? a : null,
                      y: void 0 !== i ? i : null,
                    };
                  })(t, e)
                );
            },
            e,
            function (e) {
              var t = e[0];
              return [t, t.offsetX, t.offsetY];
            }
          );
        return (
          (function (e, t, n) {
            e.addEventListener(t, n, _r);
          })(r, t, a),
          a
        );
      }
      var Lr = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(h.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(p.a)(n, [
              {
                key: "acquireContext",
                value: function (e, t) {
                  var n = e && e.getContext && e.getContext("2d");
                  return n && n.canvas === e
                    ? ((function (e, t) {
                        var n = e.style,
                          r = e.getAttribute("height"),
                          a = e.getAttribute("width");
                        if (
                          ((e.$chartjs = {
                            initial: {
                              height: r,
                              width: a,
                              style: {
                                display: n.display,
                                height: n.height,
                                width: n.width,
                              },
                            },
                          }),
                          (n.display = n.display || "block"),
                          (n.boxSizing = n.boxSizing || "border-box"),
                          kr(a))
                        ) {
                          var i = nn(e, "width");
                          void 0 !== i && (e.width = i);
                        }
                        if (kr(r))
                          if ("" === e.style.height)
                            e.height = e.width / (t || 2);
                          else {
                            var o = nn(e, "height");
                            void 0 !== o && (e.height = o);
                          }
                      })(e, t),
                      n)
                    : null;
                },
              },
              {
                key: "releaseContext",
                value: function (e) {
                  var t = e.canvas;
                  if (!t.$chartjs) return !1;
                  var n = t.$chartjs.initial;
                  ["height", "width"].forEach(function (e) {
                    var r = n[e];
                    k(r) ? t.removeAttribute(e) : t.setAttribute(e, r);
                  });
                  var r = n.style || {};
                  return (
                    Object.keys(r).forEach(function (e) {
                      t.style[e] = r[e];
                    }),
                    (t.width = t.width),
                    delete t.$chartjs,
                    !0
                  );
                },
              },
              {
                key: "addEventListener",
                value: function (e, t, n) {
                  this.removeEventListener(e, t);
                  var r = e.$proxies || (e.$proxies = {}),
                    a = { attach: Sr, detach: Or, resize: Pr }[t] || Dr;
                  r[t] = a(e, t, n);
                },
              },
              {
                key: "removeEventListener",
                value: function (e, t) {
                  var n = e.$proxies || (e.$proxies = {}),
                    r = n[t];
                  r &&
                    (({ attach: Tr, detach: Tr, resize: Tr }[t] || wr)(e, t, r),
                    (n[t] = void 0));
                },
              },
              {
                key: "getDevicePixelRatio",
                value: function () {
                  return window.devicePixelRatio;
                },
              },
              {
                key: "getMaximumSize",
                value: function (e, t, n, r) {
                  return Jt(e, t, n, r);
                },
              },
              {
                key: "isAttached",
                value: function (e) {
                  var t = Yt(e);
                  return !(!t || !Yt(t));
                },
              },
            ]),
            n
          );
        })(yr),
        jr = (function () {
          function e() {
            Object(h.a)(this, e),
              (this.x = void 0),
              (this.y = void 0),
              (this.active = !1),
              (this.options = void 0),
              (this.$animations = void 0);
          }
          return (
            Object(p.a)(e, [
              {
                key: "tooltipPosition",
                value: function (e) {
                  var t = this.getProps(["x", "y"], e);
                  return { x: t.x, y: t.y };
                },
              },
              {
                key: "hasValue",
                value: function () {
                  return J(this.x) && J(this.y);
                },
              },
              {
                key: "getProps",
                value: function (e, t) {
                  var n = this,
                    r = this.$animations;
                  if (!t || !r) return n;
                  var a = {};
                  return (
                    e.forEach(function (e) {
                      a[e] = r[e] && r[e].active() ? r[e]._to : n[e];
                    }),
                    a
                  );
                },
              },
            ]),
            e
          );
        })();
      (jr.defaults = {}), (jr.defaultRoutes = void 0);
      var Rr = {
        values: function (e) {
          return _(e) ? e : "" + e;
        },
        numeric: function (e, t, n) {
          if (0 === e) return "0";
          var r,
            a = this.chart.options.locale,
            i = e;
          if (n.length > 1) {
            var o = Math.max(
              Math.abs(n[0].value),
              Math.abs(n[n.length - 1].value)
            );
            (o < 1e-4 || o > 1e15) && (r = "scientific"),
              (i = (function (e, t) {
                var n =
                  t.length > 3
                    ? t[2].value - t[1].value
                    : t[1].value - t[0].value;
                Math.abs(n) > 1 &&
                  e !== Math.floor(e) &&
                  (n = e - Math.floor(e));
                return n;
              })(e, n));
          }
          var l = K(Math.abs(i)),
            u = Math.max(Math.min(-1 * Math.floor(l), 20), 0),
            s = {
              notation: r,
              minimumFractionDigits: u,
              maximumFractionDigits: u,
            };
          return Object.assign(s, this.options.ticks.format), un(e, a, s);
        },
        logarithmic: function (e, t, n) {
          if (0 === e) return "0";
          var r = e / Math.pow(10, Math.floor(K(e)));
          return 1 === r || 2 === r || 5 === r
            ? Rr.numeric.call(this, e, t, n)
            : "";
        },
      };
      var Ar = { formatters: Rr };
      function zr(e, t) {
        var n = e.options.ticks,
          r =
            n.maxTicksLimit ||
            (function (e) {
              var t = e.options.offset,
                n = e._tickSize(),
                r = e._length / n + (t ? 0 : 1),
                a = e._maxLength / n;
              return Math.floor(Math.min(r, a));
            })(e),
          a = n.major.enabled
            ? (function (e) {
                var t,
                  n,
                  r = [];
                for (t = 0, n = e.length; t < n; t++) e[t].major && r.push(t);
                return r;
              })(t)
            : [],
          i = a.length,
          o = a[0],
          l = a[i - 1],
          u = [];
        if (i > r)
          return (
            (function (e, t, n, r) {
              var a,
                i = 0,
                o = n[0];
              for (r = Math.ceil(r), a = 0; a < e.length; a++)
                a === o && (t.push(e[a]), (o = n[++i * r]));
            })(t, u, a, i / r),
            u
          );
        var s = (function (e, t, n) {
          var r = (function (e) {
              var t,
                n,
                r = e.length;
              if (r < 2) return !1;
              for (n = e[0], t = 1; t < r; ++t)
                if (e[t] - e[t - 1] !== n) return !1;
              return n;
            })(e),
            a = t.length / n;
          if (!r) return Math.max(a, 1);
          for (
            var i = (function (e) {
                var t,
                  n = [],
                  r = Math.sqrt(e);
                for (t = 1; t < r; t++)
                  e % t === 0 && (n.push(t), n.push(e / t));
                return (
                  r === (0 | r) && n.push(r),
                  n
                    .sort(function (e, t) {
                      return e - t;
                    })
                    .pop(),
                  n
                );
              })(r),
              o = 0,
              l = i.length - 1;
            o < l;
            o++
          ) {
            var u = i[o];
            if (u > a) return u;
          }
          return Math.max(a, 1);
        })(a, t, r);
        if (i > 0) {
          var c,
            f,
            d = i > 1 ? Math.round((l - o) / (i - 1)) : null;
          for (Fr(t, u, s, k(d) ? 0 : o - d, o), c = 0, f = i - 1; c < f; c++)
            Fr(t, u, s, a[c], a[c + 1]);
          return Fr(t, u, s, l, k(d) ? t.length : l + d), u;
        }
        return Fr(t, u, s), u;
      }
      function Fr(e, t, n, r, a) {
        var i,
          o,
          l,
          u = M(r, 0),
          s = Math.min(M(a, e.length), e.length),
          c = 0;
        for (
          n = Math.ceil(n), a && (n = (i = a - r) / Math.floor(i / n)), l = u;
          l < 0;

        )
          c++, (l = Math.round(u + c * n));
        for (o = Math.max(u, 0); o < s; o++)
          o === l && (t.push(e[o]), c++, (l = Math.round(u + c * n)));
      }
      Ze.set("scale", {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: "ticks",
        grace: 0,
        grid: {
          display: !0,
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickLength: 8,
          tickWidth: function (e, t) {
            return t.lineWidth;
          },
          tickColor: function (e, t) {
            return t.color;
          },
          offset: !1,
          borderDash: [],
          borderDashOffset: 0,
          borderWidth: 1,
        },
        title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
        ticks: {
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          textStrokeWidth: 0,
          textStrokeColor: "",
          padding: 3,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 3,
          labelOffset: 0,
          callback: Ar.formatters.values,
          minor: {},
          major: {},
          align: "center",
          crossAlign: "near",
        },
      }),
        Ze.route("scale.ticks", "color", "", "color"),
        Ze.route("scale.grid", "color", "", "borderColor"),
        Ze.route("scale.grid", "borderColor", "", "borderColor"),
        Ze.route("scale.title", "color", "", "color"),
        Ze.describe("scale", {
          _fallback: !1,
          _scriptable: function (e) {
            return (
              !e.startsWith("before") &&
              !e.startsWith("after") &&
              "callback" !== e &&
              "parser" !== e
            );
          },
          _indexable: function (e) {
            return "borderDash" !== e && "tickBorderDash" !== e;
          },
        }),
        Ze.describe("scales", { _fallback: "scale" });
      var Nr = function (e, t, n) {
        return "top" === t || "left" === t ? e[t] + n : e[t] - n;
      };
      function Ir(e, t) {
        for (var n = [], r = e.length / t, a = e.length, i = 0; i < a; i += r)
          n.push(e[Math.floor(i)]);
        return n;
      }
      function Vr(e, t, n) {
        var r,
          a = e.ticks.length,
          i = Math.min(t, a - 1),
          o = e._startPixel,
          l = e._endPixel,
          u = 1e-6,
          s = e.getPixelForTick(i);
        if (
          !(
            n &&
            ((r =
              1 === a
                ? Math.max(s - o, l - s)
                : 0 === t
                ? (e.getPixelForTick(1) - s) / 2
                : (s - e.getPixelForTick(i - 1)) / 2),
            (s += i < t ? r : -r) < o - u || s > l + u)
          )
        )
          return s;
      }
      function Br(e) {
        return e.drawTicks ? e.tickLength : 0;
      }
      function Wr(e, t) {
        if (!e.display) return 0;
        var n = yt(e.font, t),
          r = mt(e.padding);
        return (_(e.text) ? e.text.length : 1) * n.lineHeight + r.height;
      }
      function Ur(e, t, n) {
        var r = m(e);
        return (
          ((n && "right" !== t) || (!n && "right" === t)) &&
            (r = (function (e) {
              return "left" === e ? "right" : "right" === e ? "left" : e;
            })(r)),
          r
        );
      }
      var $r = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n(e) {
            var r;
            return (
              Object(h.a)(this, n),
              ((r = t.call(this)).id = e.id),
              (r.type = e.type),
              (r.options = void 0),
              (r.ctx = e.ctx),
              (r.chart = e.chart),
              (r.top = void 0),
              (r.bottom = void 0),
              (r.left = void 0),
              (r.right = void 0),
              (r.width = void 0),
              (r.height = void 0),
              (r._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
              (r.maxWidth = void 0),
              (r.maxHeight = void 0),
              (r.paddingTop = void 0),
              (r.paddingBottom = void 0),
              (r.paddingLeft = void 0),
              (r.paddingRight = void 0),
              (r.axis = void 0),
              (r.labelRotation = void 0),
              (r.min = void 0),
              (r.max = void 0),
              (r.ticks = []),
              (r._gridLineItems = null),
              (r._labelItems = null),
              (r._labelSizes = null),
              (r._length = 0),
              (r._maxLength = 0),
              (r._longestTextCache = {}),
              (r._startPixel = void 0),
              (r._endPixel = void 0),
              (r._reversePixels = !1),
              (r._userMax = void 0),
              (r._userMin = void 0),
              (r._suggestedMax = void 0),
              (r._suggestedMin = void 0),
              (r._ticksLength = 0),
              (r._borderValue = 0),
              (r._cache = {}),
              (r._dataLimitsCached = !1),
              (r.$context = void 0),
              r
            );
          }
          return (
            Object(p.a)(n, [
              {
                key: "init",
                value: function (e) {
                  var t = this;
                  (t.options = e.setContext(t.getContext())),
                    (t.axis = e.axis),
                    (t._userMin = t.parse(e.min)),
                    (t._userMax = t.parse(e.max)),
                    (t._suggestedMin = t.parse(e.suggestedMin)),
                    (t._suggestedMax = t.parse(e.suggestedMax));
                },
              },
              {
                key: "parse",
                value: function (e, t) {
                  return e;
                },
              },
              {
                key: "getUserBounds",
                value: function () {
                  var e = this._userMin,
                    t = this._userMax,
                    n = this._suggestedMin,
                    r = this._suggestedMax;
                  return (
                    (e = O(e, Number.POSITIVE_INFINITY)),
                    (t = O(t, Number.NEGATIVE_INFINITY)),
                    (n = O(n, Number.POSITIVE_INFINITY)),
                    (r = O(r, Number.NEGATIVE_INFINITY)),
                    {
                      min: O(e, n),
                      max: O(t, r),
                      minDefined: S(e),
                      maxDefined: S(t),
                    }
                  );
                },
              },
              {
                key: "getMinMax",
                value: function (e) {
                  var t,
                    n = this,
                    r = n.getUserBounds(),
                    a = r.min,
                    i = r.max,
                    o = r.minDefined,
                    l = r.maxDefined;
                  if (o && l) return { min: a, max: i };
                  for (
                    var u = n.getMatchingVisibleMetas(), s = 0, c = u.length;
                    s < c;
                    ++s
                  )
                    (t = u[s].controller.getMinMax(n, e)),
                      o || (a = Math.min(a, t.min)),
                      l || (i = Math.max(i, t.max));
                  return { min: O(a, O(i, a)), max: O(i, O(a, i)) };
                },
              },
              {
                key: "getPadding",
                value: function () {
                  var e = this;
                  return {
                    left: e.paddingLeft || 0,
                    top: e.paddingTop || 0,
                    right: e.paddingRight || 0,
                    bottom: e.paddingBottom || 0,
                  };
                },
              },
              {
                key: "getTicks",
                value: function () {
                  return this.ticks;
                },
              },
              {
                key: "getLabels",
                value: function () {
                  var e = this.chart.data;
                  return (
                    this.options.labels ||
                    (this.isHorizontal() ? e.xLabels : e.yLabels) ||
                    e.labels ||
                    []
                  );
                },
              },
              {
                key: "beforeLayout",
                value: function () {
                  (this._cache = {}), (this._dataLimitsCached = !1);
                },
              },
              {
                key: "beforeUpdate",
                value: function () {
                  C(this.options.beforeUpdate, [this]);
                },
              },
              {
                key: "update",
                value: function (e, t, n) {
                  var r = this,
                    a = r.options.ticks,
                    i = a.sampleSize;
                  r.beforeUpdate(),
                    (r.maxWidth = e),
                    (r.maxHeight = t),
                    (r._margins = n = Object.assign(
                      { left: 0, right: 0, top: 0, bottom: 0 },
                      n
                    )),
                    (r.ticks = null),
                    (r._labelSizes = null),
                    (r._gridLineItems = null),
                    (r._labelItems = null),
                    r.beforeSetDimensions(),
                    r.setDimensions(),
                    r.afterSetDimensions(),
                    (r._maxLength = r.isHorizontal()
                      ? r.width + n.left + n.right
                      : r.height + n.top + n.bottom),
                    r._dataLimitsCached ||
                      (r.beforeDataLimits(),
                      r.determineDataLimits(),
                      r.afterDataLimits(),
                      (r._dataLimitsCached = !0)),
                    r.beforeBuildTicks(),
                    (r.ticks = r.buildTicks() || []),
                    r.afterBuildTicks();
                  var o = i < r.ticks.length;
                  r._convertTicksToLabels(o ? Ir(r.ticks, i) : r.ticks),
                    r.configure(),
                    r.beforeCalculateLabelRotation(),
                    r.calculateLabelRotation(),
                    r.afterCalculateLabelRotation(),
                    a.display &&
                      (a.autoSkip || "auto" === a.source) &&
                      ((r.ticks = zr(r, r.ticks)), (r._labelSizes = null)),
                    o && r._convertTicksToLabels(r.ticks),
                    r.beforeFit(),
                    r.fit(),
                    r.afterFit(),
                    r.afterUpdate();
                },
              },
              {
                key: "configure",
                value: function () {
                  var e,
                    t,
                    n = this,
                    r = n.options.reverse;
                  n.isHorizontal()
                    ? ((e = n.left), (t = n.right))
                    : ((e = n.top), (t = n.bottom), (r = !r)),
                    (n._startPixel = e),
                    (n._endPixel = t),
                    (n._reversePixels = r),
                    (n._length = t - e),
                    (n._alignToPixels = n.options.alignToPixels);
                },
              },
              {
                key: "afterUpdate",
                value: function () {
                  C(this.options.afterUpdate, [this]);
                },
              },
              {
                key: "beforeSetDimensions",
                value: function () {
                  C(this.options.beforeSetDimensions, [this]);
                },
              },
              {
                key: "setDimensions",
                value: function () {
                  var e = this;
                  e.isHorizontal()
                    ? ((e.width = e.maxWidth),
                      (e.left = 0),
                      (e.right = e.width))
                    : ((e.height = e.maxHeight),
                      (e.top = 0),
                      (e.bottom = e.height)),
                    (e.paddingLeft = 0),
                    (e.paddingTop = 0),
                    (e.paddingRight = 0),
                    (e.paddingBottom = 0);
                },
              },
              {
                key: "afterSetDimensions",
                value: function () {
                  C(this.options.afterSetDimensions, [this]);
                },
              },
              {
                key: "_callHooks",
                value: function (e) {
                  var t = this;
                  t.chart.notifyPlugins(e, t.getContext()),
                    C(t.options[e], [t]);
                },
              },
              {
                key: "beforeDataLimits",
                value: function () {
                  this._callHooks("beforeDataLimits");
                },
              },
              { key: "determineDataLimits", value: function () {} },
              {
                key: "afterDataLimits",
                value: function () {
                  this._callHooks("afterDataLimits");
                },
              },
              {
                key: "beforeBuildTicks",
                value: function () {
                  this._callHooks("beforeBuildTicks");
                },
              },
              {
                key: "buildTicks",
                value: function () {
                  return [];
                },
              },
              {
                key: "afterBuildTicks",
                value: function () {
                  this._callHooks("afterBuildTicks");
                },
              },
              {
                key: "beforeTickToLabelConversion",
                value: function () {
                  C(this.options.beforeTickToLabelConversion, [this]);
                },
              },
              {
                key: "generateTickLabels",
                value: function (e) {
                  var t,
                    n,
                    r,
                    a = this.options.ticks;
                  for (t = 0, n = e.length; t < n; t++)
                    (r = e[t]).label = C(a.callback, [r.value, t, e], this);
                },
              },
              {
                key: "afterTickToLabelConversion",
                value: function () {
                  C(this.options.afterTickToLabelConversion, [this]);
                },
              },
              {
                key: "beforeCalculateLabelRotation",
                value: function () {
                  C(this.options.beforeCalculateLabelRotation, [this]);
                },
              },
              {
                key: "calculateLabelRotation",
                value: function () {
                  var e,
                    t,
                    n,
                    r = this,
                    a = r.options,
                    i = a.ticks,
                    o = r.ticks.length,
                    l = i.minRotation || 0,
                    u = i.maxRotation,
                    s = l;
                  if (
                    !r._isVisible() ||
                    !i.display ||
                    l >= u ||
                    o <= 1 ||
                    !r.isHorizontal()
                  )
                    r.labelRotation = l;
                  else {
                    var c = r._getLabelSizes(),
                      f = c.widest.width,
                      d = c.highest.height,
                      h = ue(r.chart.width - f, 0, r.maxWidth);
                    f + 6 > (e = a.offset ? r.maxWidth / o : h / (o - 1)) &&
                      ((e = h / (o - (a.offset ? 0.5 : 1))),
                      (t =
                        r.maxHeight -
                        Br(a.grid) -
                        i.padding -
                        Wr(a.title, r.chart.options.font)),
                      (n = Math.sqrt(f * f + d * d)),
                      (s = re(
                        Math.min(
                          Math.asin(Math.min((c.highest.height + 6) / e, 1)),
                          Math.asin(Math.min(t / n, 1)) - Math.asin(d / n)
                        )
                      )),
                      (s = Math.max(l, Math.min(u, s)))),
                      (r.labelRotation = s);
                  }
                },
              },
              {
                key: "afterCalculateLabelRotation",
                value: function () {
                  C(this.options.afterCalculateLabelRotation, [this]);
                },
              },
              {
                key: "beforeFit",
                value: function () {
                  C(this.options.beforeFit, [this]);
                },
              },
              {
                key: "fit",
                value: function () {
                  var e = this,
                    t = { width: 0, height: 0 },
                    n = e.chart,
                    r = e.options,
                    a = r.ticks,
                    i = r.title,
                    o = r.grid,
                    l = e._isVisible(),
                    u = e.isHorizontal();
                  if (l) {
                    var s = Wr(i, n.options.font);
                    if (
                      (u
                        ? ((t.width = e.maxWidth), (t.height = Br(o) + s))
                        : ((t.height = e.maxHeight), (t.width = Br(o) + s)),
                      a.display && e.ticks.length)
                    ) {
                      var c = e._getLabelSizes(),
                        f = c.first,
                        d = c.last,
                        h = c.widest,
                        p = c.highest,
                        v = 2 * a.padding,
                        g = ne(e.labelRotation),
                        m = Math.cos(g),
                        y = Math.sin(g);
                      if (u) {
                        var b = a.mirror ? 0 : y * h.width + m * p.height;
                        t.height = Math.min(e.maxHeight, t.height + b + v);
                      } else {
                        var x = a.mirror ? 0 : m * h.width + y * p.height;
                        t.width = Math.min(e.maxWidth, t.width + x + v);
                      }
                      e._calculatePadding(f, d, y, m);
                    }
                  }
                  e._handleMargins(),
                    u
                      ? ((e.width = e._length =
                          n.width - e._margins.left - e._margins.right),
                        (e.height = t.height))
                      : ((e.width = t.width),
                        (e.height = e._length =
                          n.height - e._margins.top - e._margins.bottom));
                },
              },
              {
                key: "_calculatePadding",
                value: function (e, t, n, r) {
                  var a = this,
                    i = a.options,
                    o = i.ticks,
                    l = o.align,
                    u = o.padding,
                    s = i.position,
                    c = 0 !== a.labelRotation,
                    f = "top" !== s && "x" === a.axis;
                  if (a.isHorizontal()) {
                    var d = a.getPixelForTick(0) - a.left,
                      h = a.right - a.getPixelForTick(a.ticks.length - 1),
                      p = 0,
                      v = 0;
                    c
                      ? f
                        ? ((p = r * e.width), (v = n * t.height))
                        : ((p = n * e.height), (v = r * t.width))
                      : "start" === l
                      ? (v = t.width)
                      : "end" === l
                      ? (p = e.width)
                      : ((p = e.width / 2), (v = t.width / 2)),
                      (a.paddingLeft = Math.max(
                        ((p - d + u) * a.width) / (a.width - d),
                        0
                      )),
                      (a.paddingRight = Math.max(
                        ((v - h + u) * a.width) / (a.width - h),
                        0
                      ));
                  } else {
                    var g = t.height / 2,
                      m = e.height / 2;
                    "start" === l
                      ? ((g = 0), (m = e.height))
                      : "end" === l && ((g = t.height), (m = 0)),
                      (a.paddingTop = g + u),
                      (a.paddingBottom = m + u);
                  }
                },
              },
              {
                key: "_handleMargins",
                value: function () {
                  var e = this;
                  e._margins &&
                    ((e._margins.left = Math.max(
                      e.paddingLeft,
                      e._margins.left
                    )),
                    (e._margins.top = Math.max(e.paddingTop, e._margins.top)),
                    (e._margins.right = Math.max(
                      e.paddingRight,
                      e._margins.right
                    )),
                    (e._margins.bottom = Math.max(
                      e.paddingBottom,
                      e._margins.bottom
                    )));
                },
              },
              {
                key: "afterFit",
                value: function () {
                  C(this.options.afterFit, [this]);
                },
              },
              {
                key: "isHorizontal",
                value: function () {
                  var e = this.options,
                    t = e.axis,
                    n = e.position;
                  return "top" === n || "bottom" === n || "x" === t;
                },
              },
              {
                key: "isFullSize",
                value: function () {
                  return this.options.fullSize;
                },
              },
              {
                key: "_convertTicksToLabels",
                value: function (e) {
                  var t = this;
                  t.beforeTickToLabelConversion(),
                    t.generateTickLabels(e),
                    t.afterTickToLabelConversion();
                },
              },
              {
                key: "_getLabelSizes",
                value: function () {
                  var e = this,
                    t = e._labelSizes;
                  if (!t) {
                    var n = e.options.ticks.sampleSize,
                      r = e.ticks;
                    n < r.length && (r = Ir(r, n)),
                      (e._labelSizes = t = e._computeLabelSizes(r, r.length));
                  }
                  return t;
                },
              },
              {
                key: "_computeLabelSizes",
                value: function (e, t) {
                  var n,
                    r,
                    a,
                    i,
                    o,
                    l,
                    u,
                    s,
                    c,
                    f,
                    d,
                    h = this.ctx,
                    p = this._longestTextCache,
                    v = [],
                    g = [],
                    m = 0,
                    y = 0;
                  for (n = 0; n < t; ++n) {
                    if (
                      ((i = e[n].label),
                      (o = this._resolveTickFontOptions(n)),
                      (h.font = l = o.string),
                      (u = p[l] = p[l] || { data: {}, gc: [] }),
                      (s = o.lineHeight),
                      (c = f = 0),
                      k(i) || _(i))
                    ) {
                      if (_(i))
                        for (r = 0, a = i.length; r < a; ++r)
                          k((d = i[r])) ||
                            _(d) ||
                            ((c = Je(h, u.data, u.gc, c, d)), (f += s));
                    } else (c = Je(h, u.data, u.gc, c, i)), (f = s);
                    v.push(c),
                      g.push(f),
                      (m = Math.max(c, m)),
                      (y = Math.max(f, y));
                  }
                  !(function (e, t) {
                    P(e, function (e) {
                      var n,
                        r = e.gc,
                        a = r.length / 2;
                      if (a > t) {
                        for (n = 0; n < a; ++n) delete e.data[r[n]];
                        r.splice(0, a);
                      }
                    });
                  })(p, t);
                  var b = v.indexOf(m),
                    x = g.indexOf(y),
                    w = function (e) {
                      return { width: v[e] || 0, height: g[e] || 0 };
                    };
                  return {
                    first: w(0),
                    last: w(t - 1),
                    widest: w(b),
                    highest: w(x),
                  };
                },
              },
              {
                key: "getLabelForValue",
                value: function (e) {
                  return e;
                },
              },
              {
                key: "getPixelForValue",
                value: function (e, t) {
                  return NaN;
                },
              },
              { key: "getValueForPixel", value: function (e) {} },
              {
                key: "getPixelForTick",
                value: function (e) {
                  var t = this.ticks;
                  return e < 0 || e > t.length - 1
                    ? null
                    : this.getPixelForValue(t[e].value);
                },
              },
              {
                key: "getPixelForDecimal",
                value: function (e) {
                  var t = this;
                  t._reversePixels && (e = 1 - e);
                  var n = t._startPixel + e * t._length;
                  return ue(
                    t._alignToPixels ? tt(t.chart, n, 0) : n,
                    -32768,
                    32767
                  );
                },
              },
              {
                key: "getDecimalForPixel",
                value: function (e) {
                  var t = (e - this._startPixel) / this._length;
                  return this._reversePixels ? 1 - t : t;
                },
              },
              {
                key: "getBasePixel",
                value: function () {
                  return this.getPixelForValue(this.getBaseValue());
                },
              },
              {
                key: "getBaseValue",
                value: function () {
                  var e = this.min,
                    t = this.max;
                  return e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0;
                },
              },
              {
                key: "getContext",
                value: function (e) {
                  var t,
                    n,
                    r = this,
                    a = r.ticks || [];
                  if (e >= 0 && e < a.length) {
                    var i = a[e];
                    return (
                      i.$context ||
                      (i.$context = (function (e, t, n) {
                        return Object.assign(Object.create(e), {
                          tick: n,
                          index: t,
                          type: "tick",
                        });
                      })(r.getContext(), e, i))
                    );
                  }
                  return (
                    r.$context ||
                    (r.$context =
                      ((t = r.chart.getContext()),
                      (n = r),
                      Object.assign(Object.create(t), {
                        scale: n,
                        type: "scale",
                      })))
                  );
                },
              },
              {
                key: "_tickSize",
                value: function () {
                  var e = this,
                    t = e.options.ticks,
                    n = ne(e.labelRotation),
                    r = Math.abs(Math.cos(n)),
                    a = Math.abs(Math.sin(n)),
                    i = e._getLabelSizes(),
                    o = t.autoSkipPadding || 0,
                    l = i ? i.widest.width + o : 0,
                    u = i ? i.highest.height + o : 0;
                  return e.isHorizontal()
                    ? u * r > l * a
                      ? l / r
                      : u / a
                    : u * a < l * r
                    ? u / r
                    : l / a;
                },
              },
              {
                key: "_isVisible",
                value: function () {
                  var e = this.options.display;
                  return "auto" !== e
                    ? !!e
                    : this.getMatchingVisibleMetas().length > 0;
                },
              },
              {
                key: "_computeGridLineItems",
                value: function (e) {
                  var t,
                    n,
                    r,
                    a,
                    i,
                    o,
                    l,
                    u,
                    s,
                    c,
                    f,
                    d,
                    h = this,
                    p = h.axis,
                    v = h.chart,
                    g = h.options,
                    m = g.grid,
                    y = g.position,
                    b = m.offset,
                    x = h.isHorizontal(),
                    k = h.ticks.length + (b ? 1 : 0),
                    _ = Br(m),
                    S = [],
                    O = m.setContext(h.getContext(0)),
                    M = O.drawBorder ? O.borderWidth : 0,
                    E = M / 2,
                    C = function (e) {
                      return tt(v, e, M);
                    };
                  if ("top" === y)
                    (t = C(h.bottom)),
                      (o = h.bottom - _),
                      (u = t - E),
                      (c = C(e.top) + E),
                      (d = e.bottom);
                  else if ("bottom" === y)
                    (t = C(h.top)),
                      (c = e.top),
                      (d = C(e.bottom) - E),
                      (o = t + E),
                      (u = h.top + _);
                  else if ("left" === y)
                    (t = C(h.right)),
                      (i = h.right - _),
                      (l = t - E),
                      (s = C(e.left) + E),
                      (f = e.right);
                  else if ("right" === y)
                    (t = C(h.left)),
                      (s = e.left),
                      (f = C(e.right) - E),
                      (i = t + E),
                      (l = h.left + _);
                  else if ("x" === p) {
                    if ("center" === y) t = C((e.top + e.bottom) / 2 + 0.5);
                    else if (w(y)) {
                      var P = Object.keys(y)[0],
                        T = y[P];
                      t = C(h.chart.scales[P].getPixelForValue(T));
                    }
                    (c = e.top), (d = e.bottom), (u = (o = t + E) + _);
                  } else if ("y" === p) {
                    if ("center" === y) t = C((e.left + e.right) / 2);
                    else if (w(y)) {
                      var D = Object.keys(y)[0],
                        L = y[D];
                      t = C(h.chart.scales[D].getPixelForValue(L));
                    }
                    (l = (i = t - E) - _), (s = e.left), (f = e.right);
                  }
                  for (n = 0; n < k; ++n) {
                    var j = m.setContext(h.getContext(n)),
                      R = j.lineWidth,
                      A = j.color,
                      z = m.borderDash || [],
                      F = j.borderDashOffset,
                      N = j.tickWidth,
                      I = j.tickColor,
                      V = j.tickBorderDash || [],
                      B = j.tickBorderDashOffset;
                    void 0 !== (r = Vr(h, n, b)) &&
                      ((a = tt(v, r, R)),
                      x ? (i = l = s = f = a) : (o = u = c = d = a),
                      S.push({
                        tx1: i,
                        ty1: o,
                        tx2: l,
                        ty2: u,
                        x1: s,
                        y1: c,
                        x2: f,
                        y2: d,
                        width: R,
                        color: A,
                        borderDash: z,
                        borderDashOffset: F,
                        tickWidth: N,
                        tickColor: I,
                        tickBorderDash: V,
                        tickBorderDashOffset: B,
                      }));
                  }
                  return (h._ticksLength = k), (h._borderValue = t), S;
                },
              },
              {
                key: "_computeLabelItems",
                value: function (e) {
                  var t,
                    n,
                    r,
                    a,
                    i,
                    o,
                    l,
                    u,
                    s,
                    c,
                    f,
                    d = this,
                    h = d.axis,
                    p = d.options,
                    v = p.position,
                    g = p.ticks,
                    m = d.isHorizontal(),
                    y = d.ticks,
                    b = g.align,
                    x = g.crossAlign,
                    k = g.padding,
                    S = g.mirror,
                    O = Br(p.grid),
                    M = O + k,
                    E = S ? -k : M,
                    C = -ne(d.labelRotation),
                    P = [],
                    T = "middle";
                  if ("top" === v)
                    (i = d.bottom - E), (o = d._getXAxisLabelAlignment());
                  else if ("bottom" === v)
                    (i = d.top + E), (o = d._getXAxisLabelAlignment());
                  else if ("left" === v) {
                    var D = d._getYAxisLabelAlignment(O);
                    (o = D.textAlign), (a = D.x);
                  } else if ("right" === v) {
                    var L = d._getYAxisLabelAlignment(O);
                    (o = L.textAlign), (a = L.x);
                  } else if ("x" === h) {
                    if ("center" === v) i = (e.top + e.bottom) / 2 + M;
                    else if (w(v)) {
                      var j = Object.keys(v)[0],
                        R = v[j];
                      i = d.chart.scales[j].getPixelForValue(R) + M;
                    }
                    o = d._getXAxisLabelAlignment();
                  } else if ("y" === h) {
                    if ("center" === v) a = (e.left + e.right) / 2 - M;
                    else if (w(v)) {
                      var A = Object.keys(v)[0],
                        z = v[A];
                      a = d.chart.scales[A].getPixelForValue(z);
                    }
                    o = d._getYAxisLabelAlignment(O).textAlign;
                  }
                  "y" === h &&
                    ("start" === b
                      ? (T = "top")
                      : "end" === b && (T = "bottom"));
                  var F = d._getLabelSizes();
                  for (t = 0, n = y.length; t < n; ++t) {
                    r = y[t].label;
                    var N = g.setContext(d.getContext(t));
                    (l = d.getPixelForTick(t) + g.labelOffset),
                      (s = (u = d._resolveTickFontOptions(t)).lineHeight);
                    var I = (c = _(r) ? r.length : 1) / 2,
                      V = N.color,
                      B = N.textStrokeColor,
                      W = N.textStrokeWidth;
                    m
                      ? ((a = l),
                        (f =
                          "top" === v
                            ? "near" === x || 0 !== C
                              ? -c * s + s / 2
                              : "center" === x
                              ? -F.highest.height / 2 - I * s + s
                              : -F.highest.height + s / 2
                            : "near" === x || 0 !== C
                            ? s / 2
                            : "center" === x
                            ? F.highest.height / 2 - I * s
                            : F.highest.height - c * s),
                        S && (f *= -1))
                      : ((i = l), (f = ((1 - c) * s) / 2)),
                      P.push({
                        rotation: C,
                        label: r,
                        font: u,
                        color: V,
                        strokeColor: B,
                        strokeWidth: W,
                        textOffset: f,
                        textAlign: o,
                        textBaseline: T,
                        translation: [a, i],
                      });
                  }
                  return P;
                },
              },
              {
                key: "_getXAxisLabelAlignment",
                value: function () {
                  var e = this.options,
                    t = e.position,
                    n = e.ticks;
                  if (-ne(this.labelRotation))
                    return "top" === t ? "left" : "right";
                  var r = "center";
                  return (
                    "start" === n.align
                      ? (r = "left")
                      : "end" === n.align && (r = "right"),
                    r
                  );
                },
              },
              {
                key: "_getYAxisLabelAlignment",
                value: function (e) {
                  var t,
                    n,
                    r = this,
                    a = r.options,
                    i = a.position,
                    o = a.ticks,
                    l = o.crossAlign,
                    u = o.mirror,
                    s = o.padding,
                    c = e + s,
                    f = r._getLabelSizes().widest.width;
                  return (
                    "left" === i
                      ? u
                        ? ((t = "left"), (n = r.right + s))
                        : ((n = r.right - c),
                          "near" === l
                            ? (t = "right")
                            : "center" === l
                            ? ((t = "center"), (n -= f / 2))
                            : ((t = "left"), (n = r.left)))
                      : "right" === i
                      ? u
                        ? ((t = "right"), (n = r.left + s))
                        : ((n = r.left + c),
                          "near" === l
                            ? (t = "left")
                            : "center" === l
                            ? ((t = "center"), (n += f / 2))
                            : ((t = "right"), (n = r.right)))
                      : (t = "right"),
                    { textAlign: t, x: n }
                  );
                },
              },
              {
                key: "_computeLabelArea",
                value: function () {
                  var e = this;
                  if (!e.options.ticks.mirror) {
                    var t = e.chart,
                      n = e.options.position;
                    return "left" === n || "right" === n
                      ? {
                          top: 0,
                          left: e.left,
                          bottom: t.height,
                          right: e.right,
                        }
                      : "top" === n || "bottom" === n
                      ? {
                          top: e.top,
                          left: 0,
                          bottom: e.bottom,
                          right: t.width,
                        }
                      : void 0;
                  }
                },
              },
              {
                key: "drawBackground",
                value: function () {
                  var e = this.ctx,
                    t = this.options.backgroundColor,
                    n = this.left,
                    r = this.top,
                    a = this.width,
                    i = this.height;
                  t &&
                    (e.save(),
                    (e.fillStyle = t),
                    e.fillRect(n, r, a, i),
                    e.restore());
                },
              },
              {
                key: "getLineWidthForValue",
                value: function (e) {
                  var t = this,
                    n = t.options.grid;
                  if (!t._isVisible() || !n.display) return 0;
                  var r = t.ticks.findIndex(function (t) {
                    return t.value === e;
                  });
                  return r >= 0 ? n.setContext(t.getContext(r)).lineWidth : 0;
                },
              },
              {
                key: "drawGrid",
                value: function (e) {
                  var t,
                    n,
                    r = this,
                    a = r.options.grid,
                    i = r.ctx,
                    o = r.chart,
                    l = a.setContext(r.getContext()),
                    u = a.drawBorder ? l.borderWidth : 0,
                    s =
                      r._gridLineItems ||
                      (r._gridLineItems = r._computeGridLineItems(e)),
                    c = function (e, t, n) {
                      n.width &&
                        n.color &&
                        (i.save(),
                        (i.lineWidth = n.width),
                        (i.strokeStyle = n.color),
                        i.setLineDash(n.borderDash || []),
                        (i.lineDashOffset = n.borderDashOffset),
                        i.beginPath(),
                        i.moveTo(e.x, e.y),
                        i.lineTo(t.x, t.y),
                        i.stroke(),
                        i.restore());
                    };
                  if (a.display)
                    for (t = 0, n = s.length; t < n; ++t) {
                      var f = s[t];
                      a.drawOnChartArea &&
                        c({ x: f.x1, y: f.y1 }, { x: f.x2, y: f.y2 }, f),
                        a.drawTicks &&
                          c(
                            { x: f.tx1, y: f.ty1 },
                            { x: f.tx2, y: f.ty2 },
                            {
                              color: f.tickColor,
                              width: f.tickWidth,
                              borderDash: f.tickBorderDash,
                              borderDashOffset: f.tickBorderDashOffset,
                            }
                          );
                    }
                  if (u) {
                    var d,
                      h,
                      p,
                      v,
                      g = l.lineWidth,
                      m = r._borderValue;
                    r.isHorizontal()
                      ? ((d = tt(o, r.left, u) - u / 2),
                        (h = tt(o, r.right, g) + g / 2),
                        (p = v = m))
                      : ((p = tt(o, r.top, u) - u / 2),
                        (v = tt(o, r.bottom, g) + g / 2),
                        (d = h = m)),
                      c(
                        { x: d, y: p },
                        { x: h, y: v },
                        { width: u, color: l.borderColor }
                      );
                  }
                },
              },
              {
                key: "drawLabels",
                value: function (e) {
                  var t = this;
                  if (t.options.ticks.display) {
                    var n = t.ctx,
                      r = t._computeLabelArea();
                    r && it(n, r);
                    var a,
                      i,
                      o =
                        t._labelItems ||
                        (t._labelItems = t._computeLabelItems(e));
                    for (a = 0, i = o.length; a < i; ++a) {
                      var l = o[a],
                        u = l.font;
                      st(n, l.label, 0, l.textOffset, u, l);
                    }
                    r && ot(n);
                  }
                },
              },
              {
                key: "drawTitle",
                value: function () {
                  var e = this.ctx,
                    t = this.options,
                    n = t.position,
                    r = t.title,
                    a = t.reverse;
                  if (r.display) {
                    var i = yt(r.font),
                      o = mt(r.padding),
                      l = r.align,
                      u = i.lineHeight / 2;
                    "bottom" === n
                      ? ((u += o.bottom),
                        _(r.text) && (u += i.lineHeight * (r.text.length - 1)))
                      : (u += o.top);
                    var s = (function (e, t, n, r) {
                        var a,
                          i,
                          o,
                          l = e.top,
                          u = e.left,
                          s = e.bottom,
                          c = e.right,
                          f = 0;
                        return (
                          e.isHorizontal()
                            ? ((i = y(r, u, c)), (o = Nr(e, n, t)), (a = c - u))
                            : ((i = Nr(e, n, t)),
                              (o = y(r, s, l)),
                              (f = "left" === n ? -Q : Q)),
                          { titleX: i, titleY: o, maxWidth: a, rotation: f }
                        );
                      })(this, u, n, l),
                      c = s.titleX,
                      f = s.titleY,
                      d = s.maxWidth,
                      h = s.rotation;
                    st(e, r.text, 0, 0, i, {
                      color: r.color,
                      maxWidth: d,
                      rotation: h,
                      textAlign: Ur(l, n, a),
                      textBaseline: "middle",
                      translation: [c, f],
                    });
                  }
                },
              },
              {
                key: "draw",
                value: function (e) {
                  var t = this;
                  t._isVisible() &&
                    (t.drawBackground(),
                    t.drawGrid(e),
                    t.drawTitle(),
                    t.drawLabels(e));
                },
              },
              {
                key: "_layers",
                value: function () {
                  var e = this,
                    t = e.options,
                    r = (t.ticks && t.ticks.z) || 0,
                    a = (t.grid && t.grid.z) || 0;
                  return e._isVisible() &&
                    r !== a &&
                    e.draw === n.prototype.draw
                    ? [
                        {
                          z: a,
                          draw: function (t) {
                            e.drawBackground(), e.drawGrid(t), e.drawTitle();
                          },
                        },
                        {
                          z: r,
                          draw: function (t) {
                            e.drawLabels(t);
                          },
                        },
                      ]
                    : [
                        {
                          z: r,
                          draw: function (t) {
                            e.draw(t);
                          },
                        },
                      ];
                },
              },
              {
                key: "getMatchingVisibleMetas",
                value: function (e) {
                  var t,
                    n,
                    r = this,
                    a = r.chart.getSortedVisibleDatasetMetas(),
                    i = r.axis + "AxisID",
                    o = [];
                  for (t = 0, n = a.length; t < n; ++t) {
                    var l = a[t];
                    l[i] !== r.id || (e && l.type !== e) || o.push(l);
                  }
                  return o;
                },
              },
              {
                key: "_resolveTickFontOptions",
                value: function (e) {
                  return yt(
                    this.options.ticks.setContext(this.getContext(e)).font
                  );
                },
              },
            ]),
            n
          );
        })(jr),
        Hr = (function () {
          function e(t, n, r) {
            Object(h.a)(this, e),
              (this.type = t),
              (this.scope = n),
              (this.override = r),
              (this.items = Object.create(null));
          }
          return (
            Object(p.a)(e, [
              {
                key: "isForType",
                value: function (e) {
                  return Object.prototype.isPrototypeOf.call(
                    this.type.prototype,
                    e.prototype
                  );
                },
              },
              {
                key: "register",
                value: function (e) {
                  var t,
                    n = this,
                    r = Object.getPrototypeOf(e);
                  (function (e) {
                    return "id" in e && "defaults" in e;
                  })(r) && (t = n.register(r));
                  var a = n.items,
                    i = e.id,
                    o = n.scope + "." + i;
                  if (!i) throw new Error("class does not have id: " + e);
                  return (
                    i in a ||
                      ((a[i] = e),
                      (function (e, t, n) {
                        var r = R(Object.create(null), [
                          n ? Ze.get(n) : {},
                          Ze.get(t),
                          e.defaults,
                        ]);
                        Ze.set(t, r),
                          e.defaultRoutes &&
                            (function (e, t) {
                              Object.keys(t).forEach(function (n) {
                                var r = n.split("."),
                                  a = r.pop(),
                                  i = [e].concat(r).join("."),
                                  o = t[n].split("."),
                                  l = o.pop(),
                                  u = o.join(".");
                                Ze.route(i, a, u, l);
                              });
                            })(t, e.defaultRoutes);
                        e.descriptors && Ze.describe(t, e.descriptors);
                      })(e, o, t),
                      n.override && Ze.override(e.id, e.overrides)),
                    o
                  );
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this.items[e];
                },
              },
              {
                key: "unregister",
                value: function (e) {
                  var t = this.items,
                    n = e.id,
                    r = this.scope;
                  n in t && delete t[n],
                    r &&
                      n in Ze[r] &&
                      (delete Ze[r][n], this.override && delete qe[n]);
                },
              },
            ]),
            e
          );
        })();
      var Yr = new ((function () {
          function e() {
            Object(h.a)(this, e),
              (this.controllers = new Hr(An, "datasets", !0)),
              (this.elements = new Hr(jr, "elements")),
              (this.plugins = new Hr(Object, "plugins")),
              (this.scales = new Hr($r, "scales")),
              (this._typedRegistries = [
                this.controllers,
                this.scales,
                this.elements,
              ]);
          }
          return (
            Object(p.a)(e, [
              {
                key: "add",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("register", t);
                },
              },
              {
                key: "remove",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("unregister", t);
                },
              },
              {
                key: "addControllers",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("register", t, this.controllers);
                },
              },
              {
                key: "addElements",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("register", t, this.elements);
                },
              },
              {
                key: "addPlugins",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("register", t, this.plugins);
                },
              },
              {
                key: "addScales",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("register", t, this.scales);
                },
              },
              {
                key: "getController",
                value: function (e) {
                  return this._get(e, this.controllers, "controller");
                },
              },
              {
                key: "getElement",
                value: function (e) {
                  return this._get(e, this.elements, "element");
                },
              },
              {
                key: "getPlugin",
                value: function (e) {
                  return this._get(e, this.plugins, "plugin");
                },
              },
              {
                key: "getScale",
                value: function (e) {
                  return this._get(e, this.scales, "scale");
                },
              },
              {
                key: "removeControllers",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("unregister", t, this.controllers);
                },
              },
              {
                key: "removeElements",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("unregister", t, this.elements);
                },
              },
              {
                key: "removePlugins",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("unregister", t, this.plugins);
                },
              },
              {
                key: "removeScales",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("unregister", t, this.scales);
                },
              },
              {
                key: "_each",
                value: function (e, t, n) {
                  var r = this;
                  d(t).forEach(function (t) {
                    var a = n || r._getRegistryForType(t);
                    n || a.isForType(t) || (a === r.plugins && t.id)
                      ? r._exec(e, a, t)
                      : P(t, function (t) {
                          var a = n || r._getRegistryForType(t);
                          r._exec(e, a, t);
                        });
                  });
                },
              },
              {
                key: "_exec",
                value: function (e, t, n) {
                  var r = I(e);
                  C(n["before" + r], [], n), t[e](n), C(n["after" + r], [], n);
                },
              },
              {
                key: "_getRegistryForType",
                value: function (e) {
                  for (var t = 0; t < this._typedRegistries.length; t++) {
                    var n = this._typedRegistries[t];
                    if (n.isForType(e)) return n;
                  }
                  return this.plugins;
                },
              },
              {
                key: "_get",
                value: function (e, t, n) {
                  var r = t.get(e);
                  if (void 0 === r)
                    throw new Error(
                      '"' + e + '" is not a registered ' + n + "."
                    );
                  return r;
                },
              },
            ]),
            e
          );
        })())(),
        Qr = (function () {
          function e() {
            Object(h.a)(this, e), (this._init = []);
          }
          return (
            Object(p.a)(e, [
              {
                key: "notify",
                value: function (e, t, n, r) {
                  var a = this;
                  "beforeInit" === t &&
                    ((a._init = a._createDescriptors(e, !0)),
                    a._notify(a._init, e, "install"));
                  var i = r ? a._descriptors(e).filter(r) : a._descriptors(e),
                    o = a._notify(i, e, t, n);
                  return (
                    "destroy" === t &&
                      (a._notify(i, e, "stop"),
                      a._notify(a._init, e, "uninstall")),
                    o
                  );
                },
              },
              {
                key: "_notify",
                value: function (e, t, n, r) {
                  r = r || {};
                  var a,
                    i = Object(s.a)(e);
                  try {
                    for (i.s(); !(a = i.n()).done; ) {
                      var o = a.value,
                        l = o.plugin;
                      if (!1 === C(l[n], [t, r, o.options], l) && r.cancelable)
                        return !1;
                    }
                  } catch (u) {
                    i.e(u);
                  } finally {
                    i.f();
                  }
                  return !0;
                },
              },
              {
                key: "invalidate",
                value: function () {
                  k(this._cache) ||
                    ((this._oldCache = this._cache), (this._cache = void 0));
                },
              },
              {
                key: "_descriptors",
                value: function (e) {
                  if (this._cache) return this._cache;
                  var t = (this._cache = this._createDescriptors(e));
                  return this._notifyStateChanges(e), t;
                },
              },
              {
                key: "_createDescriptors",
                value: function (e, t) {
                  var n = e && e.config,
                    r = M(n.options && n.options.plugins, {}),
                    a = (function (e) {
                      for (
                        var t = [], n = Object.keys(Yr.plugins.items), r = 0;
                        r < n.length;
                        r++
                      )
                        t.push(Yr.getPlugin(n[r]));
                      for (var a = e.plugins || [], i = 0; i < a.length; i++) {
                        var o = a[i];
                        -1 === t.indexOf(o) && t.push(o);
                      }
                      return t;
                    })(n);
                  return !1 !== r || t
                    ? (function (e, t, n, r) {
                        for (
                          var a = [], i = e.getContext(), o = 0;
                          o < t.length;
                          o++
                        ) {
                          var l = t[o],
                            u = qr(n[l.id], r);
                          null !== u &&
                            a.push({
                              plugin: l,
                              options: Xr(e.config, l, u, i),
                            });
                        }
                        return a;
                      })(e, a, r, t)
                    : [];
                },
              },
              {
                key: "_notifyStateChanges",
                value: function (e) {
                  var t = this._oldCache || [],
                    n = this._cache,
                    r = function (e, t) {
                      return e.filter(function (e) {
                        return !t.some(function (t) {
                          return e.plugin.id === t.plugin.id;
                        });
                      });
                    };
                  this._notify(r(t, n), e, "stop"),
                    this._notify(r(n, t), e, "start");
                },
              },
            ]),
            e
          );
        })();
      function qr(e, t) {
        return t || !1 !== e ? (!0 === e ? {} : e) : null;
      }
      function Xr(e, t, n, r) {
        var a = e.pluginScopeKeys(t),
          i = e.getOptionScopes(n, a);
        return e.createResolver(i, r, [""], {
          scriptable: !1,
          indexable: !1,
          allKeys: !0,
        });
      }
      function Kr(e, t) {
        var n = Ze.datasets[e] || {};
        return (
          ((t.datasets || {})[e] || {}).indexAxis ||
          t.indexAxis ||
          n.indexAxis ||
          "x"
        );
      }
      function Gr(e, t) {
        return "x" === e || "y" === e
          ? e
          : t.axis ||
              ("top" === (n = t.position) || "bottom" === n
                ? "x"
                : "left" === n || "right" === n
                ? "y"
                : void 0) ||
              e.charAt(0).toLowerCase();
        var n;
      }
      function Zr(e) {
        var t = e.options || (e.options = {});
        (t.plugins = M(t.plugins, {})),
          (t.scales = (function (e, t) {
            var n = qe[e.type] || { scales: {} },
              r = t.scales || {},
              a = Kr(e.type, t),
              i = Object.create(null),
              o = Object.create(null);
            return (
              Object.keys(r).forEach(function (e) {
                var t = r[e],
                  l = Gr(e, t),
                  u = (function (e, t) {
                    return e === t ? "_index_" : "_value_";
                  })(l, a),
                  s = n.scales || {};
                (i[l] = i[l] || e),
                  (o[e] = A(Object.create(null), [{ axis: l }, t, s[l], s[u]]));
              }),
              e.data.datasets.forEach(function (n) {
                var a = n.type || e.type,
                  l = n.indexAxis || Kr(a, t),
                  u = (qe[a] || {}).scales || {};
                Object.keys(u).forEach(function (e) {
                  var t = (function (e, t) {
                      var n = e;
                      return (
                        "_index_" === e
                          ? (n = t)
                          : "_value_" === e && (n = "x" === t ? "y" : "x"),
                        n
                      );
                    })(e, l),
                    a = n[t + "AxisID"] || i[t] || t;
                  (o[a] = o[a] || Object.create(null)),
                    A(o[a], [{ axis: t }, r[a], u[e]]);
                });
              }),
              Object.keys(o).forEach(function (e) {
                var t = o[e];
                A(t, [Ze.scales[t.type], Ze.scale]);
              }),
              o
            );
          })(e, t));
      }
      var Jr = new Map(),
        ea = new Set();
      function ta(e, t) {
        var n = Jr.get(e);
        return n || ((n = t()), Jr.set(e, n), ea.add(n)), n;
      }
      var na = function (e, t, n) {
          var r = N(t, n);
          void 0 !== r && e.add(r);
        },
        ra = (function () {
          function e(t) {
            Object(h.a)(this, e),
              (this._config = (function (e) {
                var t = ((e = e || {}).data = e.data || {
                  datasets: [],
                  labels: [],
                });
                return (
                  (t.datasets = t.datasets || []),
                  (t.labels = t.labels || []),
                  Zr(e),
                  e
                );
              })(t)),
              (this._scopeCache = new Map()),
              (this._resolverCache = new Map());
          }
          return (
            Object(p.a)(e, [
              {
                key: "type",
                get: function () {
                  return this._config.type;
                },
                set: function (e) {
                  this._config.type = e;
                },
              },
              {
                key: "data",
                get: function () {
                  return this._config.data;
                },
                set: function (e) {
                  this._config.data = e;
                },
              },
              {
                key: "options",
                get: function () {
                  return this._config.options;
                },
                set: function (e) {
                  this._config.options = e;
                },
              },
              {
                key: "plugins",
                get: function () {
                  return this._config.plugins;
                },
              },
              {
                key: "update",
                value: function () {
                  var e = this._config;
                  this.clearCache(), Zr(e);
                },
              },
              {
                key: "clearCache",
                value: function () {
                  this._scopeCache.clear(), this._resolverCache.clear();
                },
              },
              {
                key: "datasetScopeKeys",
                value: function (e) {
                  return ta(e, function () {
                    return [["datasets.".concat(e), ""]];
                  });
                },
              },
              {
                key: "datasetAnimationScopeKeys",
                value: function (e, t) {
                  return ta(
                    "".concat(e, ".transition.").concat(t),
                    function () {
                      return [
                        [
                          "datasets.".concat(e, ".transitions.").concat(t),
                          "transitions.".concat(t),
                        ],
                        ["datasets.".concat(e), ""],
                      ];
                    }
                  );
                },
              },
              {
                key: "datasetElementScopeKeys",
                value: function (e, t) {
                  return ta("".concat(e, "-").concat(t), function () {
                    return [
                      [
                        "datasets.".concat(e, ".elements.").concat(t),
                        "datasets.".concat(e),
                        "elements.".concat(t),
                        "",
                      ],
                    ];
                  });
                },
              },
              {
                key: "pluginScopeKeys",
                value: function (e) {
                  var t = e.id,
                    n = this.type;
                  return ta("".concat(n, "-plugin-").concat(t), function () {
                    return [
                      ["plugins.".concat(t)].concat(
                        d(e.additionalOptionScopes || [])
                      ),
                    ];
                  });
                },
              },
              {
                key: "_cachedScopes",
                value: function (e, t) {
                  var n = this._scopeCache,
                    r = n.get(e);
                  return (r && !t) || ((r = new Map()), n.set(e, r)), r;
                },
              },
              {
                key: "getOptionScopes",
                value: function (e, t, n) {
                  var r = this.options,
                    a = this.type,
                    i = this._cachedScopes(e, n),
                    o = i.get(t);
                  if (o) return o;
                  var l = new Set();
                  t.forEach(function (t) {
                    e &&
                      (l.add(e),
                      t.forEach(function (t) {
                        return na(l, e, t);
                      })),
                      t.forEach(function (e) {
                        return na(l, r, e);
                      }),
                      t.forEach(function (e) {
                        return na(l, qe[a] || {}, e);
                      }),
                      t.forEach(function (e) {
                        return na(l, Ze, e);
                      }),
                      t.forEach(function (e) {
                        return na(l, Xe, e);
                      });
                  });
                  var u = d(l);
                  return ea.has(t) && i.set(t, u), u;
                },
              },
              {
                key: "chartOptionScopes",
                value: function () {
                  var e = this.options,
                    t = this.type;
                  return [
                    e,
                    qe[t] || {},
                    Ze.datasets[t] || {},
                    { type: t },
                    Ze,
                    Xe,
                  ];
                },
              },
              {
                key: "resolveNamedOptions",
                value: function (e, t, n) {
                  var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : [""],
                    a = { $shared: !0 },
                    i = aa(this._resolverCache, e, r),
                    o = i.resolver,
                    l = i.subPrefixes,
                    u = o;
                  if (ia(o, t)) {
                    (a.$shared = !1), (n = B(n) ? n() : n);
                    var c = this.createResolver(e, n, l);
                    u = Et(o, n, c);
                  }
                  var f,
                    d = Object(s.a)(t);
                  try {
                    for (d.s(); !(f = d.n()).done; ) {
                      var h = f.value;
                      a[h] = u[h];
                    }
                  } catch (p) {
                    d.e(p);
                  } finally {
                    d.f();
                  }
                  return a;
                },
              },
              {
                key: "createResolver",
                value: function (e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [""],
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    a = aa(this._resolverCache, e, n),
                    i = a.resolver;
                  return w(t) ? Et(i, t, void 0, r) : i;
                },
              },
            ]),
            e
          );
        })();
      function aa(e, t, n) {
        var r = e.get(t);
        r || ((r = new Map()), e.set(t, r));
        var a = n.join(),
          i = r.get(a);
        i ||
          ((i = {
            resolver: Mt(t, n),
            subPrefixes: n.filter(function (e) {
              return !e.toLowerCase().includes("hover");
            }),
          }),
          r.set(a, i));
        return i;
      }
      function ia(e, t) {
        var n,
          r = Ct(e),
          a = r.isScriptable,
          i = r.isIndexable,
          o = Object(s.a)(t);
        try {
          for (o.s(); !(n = o.n()).done; ) {
            var l = n.value;
            if ((a(l) && B(e[l])) || (i(l) && _(e[l]))) return !0;
          }
        } catch (u) {
          o.e(u);
        } finally {
          o.f();
        }
        return !1;
      }
      var oa = ["top", "bottom", "left", "right", "chartArea"];
      function la(e, t) {
        return (
          "top" === e || "bottom" === e || (-1 === oa.indexOf(e) && "x" === t)
        );
      }
      function ua(e, t) {
        return function (n, r) {
          return n[e] === r[e] ? n[t] - r[t] : n[e] - r[e];
        };
      }
      function sa(e) {
        var t = e.chart,
          n = t.options.animation;
        t.notifyPlugins("afterRender"), C(n && n.onComplete, [e], t);
      }
      function ca(e) {
        var t = e.chart,
          n = t.options.animation;
        C(n && n.onProgress, [e], t);
      }
      function fa() {
        return "undefined" !== typeof window && "undefined" !== typeof document;
      }
      function da(e) {
        return (
          fa() && "string" === typeof e
            ? (e = document.getElementById(e))
            : e && e.length && (e = e[0]),
          e && e.canvas && (e = e.canvas),
          e
        );
      }
      var ha = {},
        pa = function (e) {
          var t = da(e);
          return Object.values(ha)
            .filter(function (e) {
              return e.canvas === t;
            })
            .pop();
        },
        va = (function () {
          function e(t, n) {
            var r = this;
            Object(h.a)(this, e);
            var a = this;
            this.config = n = new ra(n);
            var i = da(t),
              o = pa(i);
            if (o)
              throw new Error(
                "Canvas is already in use. Chart with ID '" +
                  o.id +
                  "' must be destroyed before the canvas can be reused."
              );
            var l = n.createResolver(n.chartOptionScopes(), a.getContext());
            this.platform = a._initializePlatform(i, n);
            var u = a.platform.acquireContext(i, l.aspectRatio),
              s = u && u.canvas,
              c = s && s.height,
              f = s && s.width;
            (this.id = x()),
              (this.ctx = u),
              (this.canvas = s),
              (this.width = f),
              (this.height = c),
              (this._options = l),
              (this._aspectRatio = this.aspectRatio),
              (this._layers = []),
              (this._metasets = []),
              (this._stacks = void 0),
              (this.boxes = []),
              (this.currentDevicePixelRatio = void 0),
              (this.chartArea = void 0),
              (this._active = []),
              (this._lastEvent = void 0),
              (this._listeners = {}),
              (this._sortedMetasets = []),
              (this.scales = {}),
              (this.scale = void 0),
              (this._plugins = new Qr()),
              (this.$proxies = {}),
              (this._hiddenIndices = {}),
              (this.attached = !1),
              (this._animationsDisabled = void 0),
              (this.$context = void 0),
              (this._doResize = (function (e, t) {
                var n;
                return function () {
                  return t ? (clearTimeout(n), (n = setTimeout(e, t))) : e(), t;
                };
              })(function () {
                return r.update("resize");
              }, l.resizeDelay || 0)),
              (ha[a.id] = a),
              u && s
                ? (bn.listen(a, "complete", sa),
                  bn.listen(a, "progress", ca),
                  a._initialize(),
                  a.attached && a.update())
                : console.error(
                    "Failed to create chart: can't acquire context from the given item"
                  );
          }
          return (
            Object(p.a)(e, [
              {
                key: "aspectRatio",
                get: function () {
                  var e = this.options,
                    t = e.aspectRatio,
                    n = e.maintainAspectRatio,
                    r = this.width,
                    a = this.height,
                    i = this._aspectRatio;
                  return k(t) ? (n && i ? i : a ? r / a : null) : t;
                },
              },
              {
                key: "data",
                get: function () {
                  return this.config.data;
                },
                set: function (e) {
                  this.config.data = e;
                },
              },
              {
                key: "options",
                get: function () {
                  return this._options;
                },
                set: function (e) {
                  this.config.options = e;
                },
              },
              {
                key: "_initialize",
                value: function () {
                  var e = this;
                  return (
                    e.notifyPlugins("beforeInit"),
                    e.options.responsive
                      ? e.resize()
                      : en(e, e.options.devicePixelRatio),
                    e.bindEvents(),
                    e.notifyPlugins("afterInit"),
                    e
                  );
                },
              },
              {
                key: "_initializePlatform",
                value: function (e, t) {
                  return t.platform
                    ? new t.platform()
                    : !fa() ||
                      ("undefined" !== typeof OffscreenCanvas &&
                        e instanceof OffscreenCanvas)
                    ? new br()
                    : new Lr();
                },
              },
              {
                key: "clear",
                value: function () {
                  return nt(this.canvas, this.ctx), this;
                },
              },
              {
                key: "stop",
                value: function () {
                  return bn.stop(this), this;
                },
              },
              {
                key: "resize",
                value: function (e, t) {
                  bn.running(this)
                    ? (this._resizeBeforeDraw = { width: e, height: t })
                    : this._resize(e, t);
                },
              },
              {
                key: "_resize",
                value: function (e, t) {
                  var n = this,
                    r = n.options,
                    a = n.canvas,
                    i = r.maintainAspectRatio && n.aspectRatio,
                    o = n.platform.getMaximumSize(a, e, t, i),
                    l = n.currentDevicePixelRatio,
                    u = r.devicePixelRatio || n.platform.getDevicePixelRatio();
                  (n.width === o.width && n.height === o.height && l === u) ||
                    ((n.width = o.width),
                    (n.height = o.height),
                    (n._aspectRatio = n.aspectRatio),
                    en(n, u, !0),
                    n.notifyPlugins("resize", { size: o }),
                    C(r.onResize, [n, o], n),
                    n.attached && n._doResize() && n.render());
                },
              },
              {
                key: "ensureScalesHaveIDs",
                value: function () {
                  P(this.options.scales || {}, function (e, t) {
                    e.id = t;
                  });
                },
              },
              {
                key: "buildOrUpdateScales",
                value: function () {
                  var e = this,
                    t = e.options,
                    n = t.scales,
                    r = e.scales,
                    a = Object.keys(r).reduce(function (e, t) {
                      return (e[t] = !1), e;
                    }, {}),
                    i = [];
                  n &&
                    (i = i.concat(
                      Object.keys(n).map(function (e) {
                        var t = n[e],
                          r = Gr(e, t),
                          a = "r" === r,
                          i = "x" === r;
                        return {
                          options: t,
                          dposition: a ? "chartArea" : i ? "bottom" : "left",
                          dtype: a ? "radialLinear" : i ? "category" : "linear",
                        };
                      })
                    )),
                    P(i, function (n) {
                      var i = n.options,
                        o = i.id,
                        l = Gr(o, i),
                        u = M(i.type, n.dtype);
                      (void 0 !== i.position &&
                        la(i.position, l) === la(n.dposition)) ||
                        (i.position = n.dposition),
                        (a[o] = !0);
                      var s = null;
                      o in r && r[o].type === u
                        ? (s = r[o])
                        : ((s = new (Yr.getScale(u))({
                            id: o,
                            type: u,
                            ctx: e.ctx,
                            chart: e,
                          })),
                          (r[s.id] = s));
                      s.init(i, t);
                    }),
                    P(a, function (e, t) {
                      e || delete r[t];
                    }),
                    P(r, function (t) {
                      gr(e, t, t.options), pr(e, t);
                    });
                },
              },
              {
                key: "_updateMetasetIndex",
                value: function (e, t) {
                  var n = this._metasets,
                    r = e.index;
                  r !== t && ((n[r] = n[t]), (n[t] = e), (e.index = t));
                },
              },
              {
                key: "_updateMetasets",
                value: function () {
                  var e = this,
                    t = e._metasets,
                    n = e.data.datasets.length,
                    r = t.length;
                  if (r > n) {
                    for (var a = n; a < r; ++a) e._destroyDatasetMeta(a);
                    t.splice(n, r - n);
                  }
                  e._sortedMetasets = t.slice(0).sort(ua("order", "index"));
                },
              },
              {
                key: "_removeUnreferencedMetasets",
                value: function () {
                  var e = this,
                    t = e._metasets,
                    n = e.data.datasets;
                  t.length > n.length && delete e._stacks,
                    t.forEach(function (t, r) {
                      0 ===
                        n.filter(function (e) {
                          return e === t._dataset;
                        }).length && e._destroyDatasetMeta(r);
                    });
                },
              },
              {
                key: "buildOrUpdateControllers",
                value: function () {
                  var e,
                    t,
                    n = this,
                    r = [],
                    a = n.data.datasets;
                  for (
                    n._removeUnreferencedMetasets(), e = 0, t = a.length;
                    e < t;
                    e++
                  ) {
                    var i = a[e],
                      o = n.getDatasetMeta(e),
                      l = i.type || n.config.type;
                    if (
                      (o.type &&
                        o.type !== l &&
                        (n._destroyDatasetMeta(e), (o = n.getDatasetMeta(e))),
                      (o.type = l),
                      (o.indexAxis = i.indexAxis || Kr(l, n.options)),
                      (o.order = i.order || 0),
                      n._updateMetasetIndex(o, e),
                      (o.label = "" + i.label),
                      (o.visible = n.isDatasetVisible(e)),
                      o.controller)
                    )
                      o.controller.updateIndex(e), o.controller.linkScales();
                    else {
                      var u = Yr.getController(l),
                        s = Ze.datasets[l],
                        c = s.datasetElementType,
                        f = s.dataElementType;
                      Object.assign(u.prototype, {
                        dataElementType: Yr.getElement(f),
                        datasetElementType: c && Yr.getElement(c),
                      }),
                        (o.controller = new u(n, e)),
                        r.push(o.controller);
                    }
                  }
                  return n._updateMetasets(), r;
                },
              },
              {
                key: "_resetElements",
                value: function () {
                  var e = this;
                  P(
                    e.data.datasets,
                    function (t, n) {
                      e.getDatasetMeta(n).controller.reset();
                    },
                    e
                  );
                },
              },
              {
                key: "reset",
                value: function () {
                  this._resetElements(), this.notifyPlugins("reset");
                },
              },
              {
                key: "update",
                value: function (e) {
                  var t = this,
                    n = t.config;
                  n.update(),
                    (t._options = n.createResolver(
                      n.chartOptionScopes(),
                      t.getContext()
                    )),
                    P(t.scales, function (e) {
                      vr(t, e);
                    });
                  var r = (t._animationsDisabled = !t.options.animation);
                  if (
                    (t.ensureScalesHaveIDs(),
                    t.buildOrUpdateScales(),
                    t._plugins.invalidate(),
                    !1 !==
                      t.notifyPlugins("beforeUpdate", {
                        mode: e,
                        cancelable: !0,
                      }))
                  ) {
                    var a = t.buildOrUpdateControllers();
                    t.notifyPlugins("beforeElementsUpdate");
                    for (
                      var i = 0, o = 0, l = t.data.datasets.length;
                      o < l;
                      o++
                    ) {
                      var u = t.getDatasetMeta(o).controller,
                        s = !r && -1 === a.indexOf(u);
                      u.buildOrUpdateElements(s),
                        (i = Math.max(+u.getMaxOverflow(), i));
                    }
                    (t._minPadding = i),
                      t._updateLayout(i),
                      r ||
                        P(a, function (e) {
                          e.reset();
                        }),
                      t._updateDatasets(e),
                      t.notifyPlugins("afterUpdate", { mode: e }),
                      t._layers.sort(ua("z", "_idx")),
                      t._lastEvent && t._eventHandler(t._lastEvent, !0),
                      t.render();
                  }
                },
              },
              {
                key: "_updateLayout",
                value: function (e) {
                  var t = this;
                  if (
                    !1 !== t.notifyPlugins("beforeLayout", { cancelable: !0 })
                  ) {
                    mr(t, t.width, t.height, e);
                    var n = t.chartArea,
                      r = n.width <= 0 || n.height <= 0;
                    (t._layers = []),
                      P(
                        t.boxes,
                        function (e) {
                          var n;
                          (r && "chartArea" === e.position) ||
                            (e.configure && e.configure(),
                            (n = t._layers).push.apply(n, d(e._layers())));
                        },
                        t
                      ),
                      t._layers.forEach(function (e, t) {
                        e._idx = t;
                      }),
                      t.notifyPlugins("afterLayout");
                  }
                },
              },
              {
                key: "_updateDatasets",
                value: function (e) {
                  var t = this,
                    n = "function" === typeof e;
                  if (
                    !1 !==
                    t.notifyPlugins("beforeDatasetsUpdate", {
                      mode: e,
                      cancelable: !0,
                    })
                  ) {
                    for (var r = 0, a = t.data.datasets.length; r < a; ++r)
                      t._updateDataset(r, n ? e({ datasetIndex: r }) : e);
                    t.notifyPlugins("afterDatasetsUpdate", { mode: e });
                  }
                },
              },
              {
                key: "_updateDataset",
                value: function (e, t) {
                  var n = this,
                    r = n.getDatasetMeta(e),
                    a = { meta: r, index: e, mode: t, cancelable: !0 };
                  !1 !== n.notifyPlugins("beforeDatasetUpdate", a) &&
                    (r.controller._update(t),
                    (a.cancelable = !1),
                    n.notifyPlugins("afterDatasetUpdate", a));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  !1 !== e.notifyPlugins("beforeRender", { cancelable: !0 }) &&
                    (bn.has(e)
                      ? e.attached && !bn.running(e) && bn.start(e)
                      : (e.draw(), sa({ chart: e })));
                },
              },
              {
                key: "draw",
                value: function () {
                  var e,
                    t = this;
                  if (t._resizeBeforeDraw) {
                    var n = t._resizeBeforeDraw,
                      r = n.width,
                      a = n.height;
                    t._resize(r, a), (t._resizeBeforeDraw = null);
                  }
                  if (
                    (t.clear(),
                    !(t.width <= 0 || t.height <= 0) &&
                      !1 !== t.notifyPlugins("beforeDraw", { cancelable: !0 }))
                  ) {
                    var i = t._layers;
                    for (e = 0; e < i.length && i[e].z <= 0; ++e)
                      i[e].draw(t.chartArea);
                    for (t._drawDatasets(); e < i.length; ++e)
                      i[e].draw(t.chartArea);
                    t.notifyPlugins("afterDraw");
                  }
                },
              },
              {
                key: "_getSortedDatasetMetas",
                value: function (e) {
                  var t,
                    n,
                    r = this._sortedMetasets,
                    a = [];
                  for (t = 0, n = r.length; t < n; ++t) {
                    var i = r[t];
                    (e && !i.visible) || a.push(i);
                  }
                  return a;
                },
              },
              {
                key: "getSortedVisibleDatasetMetas",
                value: function () {
                  return this._getSortedDatasetMetas(!0);
                },
              },
              {
                key: "_drawDatasets",
                value: function () {
                  var e = this;
                  if (
                    !1 !==
                    e.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })
                  ) {
                    for (
                      var t = e.getSortedVisibleDatasetMetas(),
                        n = t.length - 1;
                      n >= 0;
                      --n
                    )
                      e._drawDataset(t[n]);
                    e.notifyPlugins("afterDatasetsDraw");
                  }
                },
              },
              {
                key: "_drawDataset",
                value: function (e) {
                  var t = this,
                    n = t.ctx,
                    r = e._clip,
                    a = t.chartArea,
                    i = { meta: e, index: e.index, cancelable: !0 };
                  !1 !== t.notifyPlugins("beforeDatasetDraw", i) &&
                    (it(n, {
                      left: !1 === r.left ? 0 : a.left - r.left,
                      right: !1 === r.right ? t.width : a.right + r.right,
                      top: !1 === r.top ? 0 : a.top - r.top,
                      bottom: !1 === r.bottom ? t.height : a.bottom + r.bottom,
                    }),
                    e.controller.draw(),
                    ot(n),
                    (i.cancelable = !1),
                    t.notifyPlugins("afterDatasetDraw", i));
                },
              },
              {
                key: "getElementsAtEventForMode",
                value: function (e, t, n, r) {
                  var a = rr.modes[t];
                  return "function" === typeof a ? a(this, e, n, r) : [];
                },
              },
              {
                key: "getDatasetMeta",
                value: function (e) {
                  var t = this.data.datasets[e],
                    n = this._metasets,
                    r = n
                      .filter(function (e) {
                        return e && e._dataset === t;
                      })
                      .pop();
                  return (
                    r ||
                      (r = n[e] = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null,
                        order: (t && t.order) || 0,
                        index: e,
                        _dataset: t,
                        _parsed: [],
                        _sorted: !1,
                      }),
                    r
                  );
                },
              },
              {
                key: "getContext",
                value: function () {
                  return (
                    this.$context ||
                    (this.$context = { chart: this, type: "chart" })
                  );
                },
              },
              {
                key: "getVisibleDatasetCount",
                value: function () {
                  return this.getSortedVisibleDatasetMetas().length;
                },
              },
              {
                key: "isDatasetVisible",
                value: function (e) {
                  var t = this.data.datasets[e];
                  if (!t) return !1;
                  var n = this.getDatasetMeta(e);
                  return "boolean" === typeof n.hidden ? !n.hidden : !t.hidden;
                },
              },
              {
                key: "setDatasetVisibility",
                value: function (e, t) {
                  this.getDatasetMeta(e).hidden = !t;
                },
              },
              {
                key: "toggleDataVisibility",
                value: function (e) {
                  this._hiddenIndices[e] = !this._hiddenIndices[e];
                },
              },
              {
                key: "getDataVisibility",
                value: function (e) {
                  return !this._hiddenIndices[e];
                },
              },
              {
                key: "_updateDatasetVisibility",
                value: function (e, t) {
                  var n = this,
                    r = t ? "show" : "hide",
                    a = n.getDatasetMeta(e),
                    i = a.controller._resolveAnimations(void 0, r);
                  n.setDatasetVisibility(e, t),
                    i.update(a, { visible: t }),
                    n.update(function (t) {
                      return t.datasetIndex === e ? r : void 0;
                    });
                },
              },
              {
                key: "hide",
                value: function (e) {
                  this._updateDatasetVisibility(e, !1);
                },
              },
              {
                key: "show",
                value: function (e) {
                  this._updateDatasetVisibility(e, !0);
                },
              },
              {
                key: "_destroyDatasetMeta",
                value: function (e) {
                  var t = this,
                    n = t._metasets && t._metasets[e];
                  n &&
                    n.controller &&
                    (n.controller._destroy(), delete t._metasets[e]);
                },
              },
              {
                key: "destroy",
                value: function () {
                  var e,
                    t,
                    n = this,
                    r = n.canvas,
                    a = n.ctx;
                  for (
                    n.stop(), bn.remove(n), e = 0, t = n.data.datasets.length;
                    e < t;
                    ++e
                  )
                    n._destroyDatasetMeta(e);
                  n.config.clearCache(),
                    r &&
                      (n.unbindEvents(),
                      nt(r, a),
                      n.platform.releaseContext(a),
                      (n.canvas = null),
                      (n.ctx = null)),
                    n.notifyPlugins("destroy"),
                    delete ha[n.id];
                },
              },
              {
                key: "toBase64Image",
                value: function () {
                  var e;
                  return (e = this.canvas).toDataURL.apply(e, arguments);
                },
              },
              {
                key: "bindEvents",
                value: function () {
                  var e = this,
                    t = e._listeners,
                    n = e.platform,
                    r = function (r, a) {
                      n.addEventListener(e, r, a), (t[r] = a);
                    },
                    a = function (r, a) {
                      t[r] && (n.removeEventListener(e, r, a), delete t[r]);
                    },
                    i = function (t, n, r) {
                      (t.offsetX = n), (t.offsetY = r), e._eventHandler(t);
                    };
                  if (
                    (P(e.options.events, function (e) {
                      return r(e, i);
                    }),
                    e.options.responsive)
                  ) {
                    var o;
                    i = function (t, n) {
                      e.canvas && e.resize(t, n);
                    };
                    var l = function t() {
                      a("attach", t),
                        (e.attached = !0),
                        e.resize(),
                        r("resize", i),
                        r("detach", o);
                    };
                    (o = function () {
                      (e.attached = !1), a("resize", i), r("attach", l);
                    }),
                      n.isAttached(e.canvas) ? l() : o();
                  } else e.attached = !0;
                },
              },
              {
                key: "unbindEvents",
                value: function () {
                  var e = this,
                    t = e._listeners;
                  t &&
                    (delete e._listeners,
                    P(t, function (t, n) {
                      e.platform.removeEventListener(e, n, t);
                    }));
                },
              },
              {
                key: "updateHoverStyle",
                value: function (e, t, n) {
                  var r,
                    a,
                    i,
                    o = n ? "set" : "remove";
                  for (
                    "dataset" === t &&
                      this.getDatasetMeta(e[0].datasetIndex).controller[
                        "_" + o + "DatasetHoverStyle"
                      ](),
                      a = 0,
                      i = e.length;
                    a < i;
                    ++a
                  ) {
                    var l =
                      (r = e[a]) &&
                      this.getDatasetMeta(r.datasetIndex).controller;
                    l &&
                      l[o + "HoverStyle"](r.element, r.datasetIndex, r.index);
                  }
                },
              },
              {
                key: "getActiveElements",
                value: function () {
                  return this._active || [];
                },
              },
              {
                key: "setActiveElements",
                value: function (e) {
                  var t = this,
                    n = t._active || [],
                    r = e.map(function (e) {
                      var n = e.datasetIndex,
                        r = e.index,
                        a = t.getDatasetMeta(n);
                      if (!a) throw new Error("No dataset found at index " + n);
                      return { datasetIndex: n, element: a.data[r], index: r };
                    });
                  !T(r, n) && ((t._active = r), t._updateHoverStyles(r, n));
                },
              },
              {
                key: "notifyPlugins",
                value: function (e, t, n) {
                  return this._plugins.notify(this, e, t, n);
                },
              },
              {
                key: "_updateHoverStyles",
                value: function (e, t, n) {
                  var r = this,
                    a = r.options.hover,
                    i = function (e, t) {
                      return e.filter(function (e) {
                        return !t.some(function (t) {
                          return (
                            e.datasetIndex === t.datasetIndex &&
                            e.index === t.index
                          );
                        });
                      });
                    },
                    o = i(t, e),
                    l = n ? e : i(e, t);
                  o.length && r.updateHoverStyle(o, a.mode, !1),
                    l.length && a.mode && r.updateHoverStyle(l, a.mode, !0);
                },
              },
              {
                key: "_eventHandler",
                value: function (e, t) {
                  var n = this,
                    r = this,
                    a = { event: e, replay: t, cancelable: !0 },
                    i = function (t) {
                      return (t.options.events || n.options.events).includes(
                        e.type
                      );
                    };
                  if (!1 !== r.notifyPlugins("beforeEvent", a, i)) {
                    var o = r._handleEvent(e, t);
                    return (
                      (a.cancelable = !1),
                      r.notifyPlugins("afterEvent", a, i),
                      (o || a.changed) && r.render(),
                      r
                    );
                  }
                },
              },
              {
                key: "_handleEvent",
                value: function (e, t) {
                  var n,
                    r = this,
                    a = r._active,
                    i = void 0 === a ? [] : a,
                    o = r.options,
                    l = o.hover,
                    u = t,
                    s = [],
                    c = null;
                  return (
                    "mouseout" !== e.type &&
                      ((s = r.getElementsAtEventForMode(e, l.mode, l, u)),
                      (c = "click" === e.type ? r._lastEvent : e)),
                    (r._lastEvent = null),
                    at(e, r.chartArea, r._minPadding) &&
                      (C(o.onHover, [e, s, r], r),
                      ("mouseup" !== e.type &&
                        "click" !== e.type &&
                        "contextmenu" !== e.type) ||
                        C(o.onClick, [e, s, r], r)),
                    ((n = !T(s, i)) || t) &&
                      ((r._active = s), r._updateHoverStyles(s, i, t)),
                    (r._lastEvent = c),
                    n
                  );
                },
              },
            ]),
            e
          );
        })(),
        ga = function () {
          return P(va.instances, function (e) {
            return e._plugins.invalidate();
          });
        },
        ma = !0;
      function ya(e, t) {
        var n = t.startAngle,
          r = t.endAngle,
          a = t.pixelMargin,
          i = t.x,
          o = t.y,
          l = t.outerRadius,
          u = t.innerRadius,
          s = a / l;
        e.beginPath(),
          e.arc(i, o, l, n - s, r + s),
          u > a
            ? ((s = a / u), e.arc(i, o, u, r + s, n - s, !0))
            : e.arc(i, o, a, r + Q, n - Q),
          e.closePath(),
          e.clip();
      }
      function ba(e, t, n, r) {
        var a = pt(e.options.borderRadius, [
            "outerStart",
            "outerEnd",
            "innerStart",
            "innerEnd",
          ]),
          i = (n - t) / 2,
          o = Math.min(i, (r * t) / 2),
          l = function (e) {
            var t = ((n - Math.min(i, e)) * r) / 2;
            return ue(e, 0, Math.min(i, t));
          };
        return {
          outerStart: l(a.outerStart),
          outerEnd: l(a.outerEnd),
          innerStart: ue(a.innerStart, 0, o),
          innerEnd: ue(a.innerEnd, 0, o),
        };
      }
      function xa(e, t, n, r) {
        return { x: n + e * Math.cos(t), y: r + e * Math.sin(t) };
      }
      function ka(e, t) {
        var n = t.x,
          r = t.y,
          a = t.startAngle,
          i = t.endAngle,
          o = t.pixelMargin,
          l = Math.max(t.outerRadius - o, 0),
          u = t.innerRadius + o,
          s = ba(t, u, l, i - a),
          c = s.outerStart,
          f = s.outerEnd,
          d = s.innerStart,
          h = s.innerEnd,
          p = l - c,
          v = l - f,
          g = a + c / p,
          m = i - f / v,
          y = u + d,
          b = u + h,
          x = a + d / y,
          k = i - h / b;
        if ((e.beginPath(), e.arc(n, r, l, g, m), f > 0)) {
          var _ = xa(v, m, n, r);
          e.arc(_.x, _.y, f, m, i + Q);
        }
        var w = xa(b, i, n, r);
        if ((e.lineTo(w.x, w.y), h > 0)) {
          var S = xa(b, k, n, r);
          e.arc(S.x, S.y, h, i + Q, k + Math.PI);
        }
        if ((e.arc(n, r, u, i - h / u, a + d / u, !0), d > 0)) {
          var O = xa(y, x, n, r);
          e.arc(O.x, O.y, d, x + Math.PI, a - Q);
        }
        var M = xa(p, a, n, r);
        if ((e.lineTo(M.x, M.y), c > 0)) {
          var E = xa(p, g, n, r);
          e.arc(E.x, E.y, c, a - Q, g);
        }
        e.closePath();
      }
      function _a(e, t) {
        var n = t.options,
          r = "inner" === n.borderAlign;
        n.borderWidth &&
          (r
            ? ((e.lineWidth = 2 * n.borderWidth), (e.lineJoin = "round"))
            : ((e.lineWidth = n.borderWidth), (e.lineJoin = "bevel")),
          t.fullCircles &&
            (function (e, t, n) {
              var r,
                a = t.x,
                i = t.y,
                o = t.startAngle,
                l = t.endAngle,
                u = t.pixelMargin,
                s = Math.max(t.outerRadius - u, 0),
                c = t.innerRadius + u;
              for (
                n &&
                  ((t.endAngle = t.startAngle + U),
                  ya(e, t),
                  (t.endAngle = l),
                  t.endAngle === t.startAngle &&
                    ((t.endAngle += U), t.fullCircles--)),
                  e.beginPath(),
                  e.arc(a, i, c, o + U, o, !0),
                  r = 0;
                r < t.fullCircles;
                ++r
              )
                e.stroke();
              for (
                e.beginPath(), e.arc(a, i, s, o, o + U), r = 0;
                r < t.fullCircles;
                ++r
              )
                e.stroke();
            })(e, t, r),
          r && ya(e, t),
          ka(e, t),
          e.stroke());
      }
      Object.defineProperties(va, {
        defaults: { enumerable: ma, value: Ze },
        instances: { enumerable: ma, value: ha },
        overrides: { enumerable: ma, value: qe },
        registry: { enumerable: ma, value: Yr },
        version: { enumerable: ma, value: "3.1.0" },
        getChart: { enumerable: ma, value: pa },
        register: {
          enumerable: ma,
          value: function () {
            Yr.add.apply(Yr, arguments), ga();
          },
        },
        unregister: {
          enumerable: ma,
          value: function () {
            Yr.remove.apply(Yr, arguments), ga();
          },
        },
      });
      var wa = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n(e) {
          var r;
          return (
            Object(h.a)(this, n),
            ((r = t.call(this)).options = void 0),
            (r.circumference = void 0),
            (r.startAngle = void 0),
            (r.endAngle = void 0),
            (r.innerRadius = void 0),
            (r.outerRadius = void 0),
            (r.pixelMargin = 0),
            (r.fullCircles = 0),
            e && Object.assign(Object(a.a)(r), e),
            r
          );
        }
        return (
          Object(p.a)(n, [
            {
              key: "inRange",
              value: function (e, t, n) {
                var r = (function (e, t) {
                    var n = t.x - e.x,
                      r = t.y - e.y,
                      a = Math.sqrt(n * n + r * r),
                      i = Math.atan2(r, n);
                    return i < -0.5 * W && (i += U), { angle: i, distance: a };
                  })(this.getProps(["x", "y"], n), { x: e, y: t }),
                  a = r.angle,
                  i = r.distance,
                  o = this.getProps(
                    [
                      "startAngle",
                      "endAngle",
                      "innerRadius",
                      "outerRadius",
                      "circumference",
                    ],
                    n
                  ),
                  l = o.startAngle,
                  u = o.endAngle,
                  s = o.innerRadius,
                  c = o.outerRadius;
                return (
                  (o.circumference >= U || le(a, l, u)) && i >= s && i <= c
                );
              },
            },
            {
              key: "getCenterPoint",
              value: function (e) {
                var t = this.getProps(
                    [
                      "x",
                      "y",
                      "startAngle",
                      "endAngle",
                      "innerRadius",
                      "outerRadius",
                    ],
                    e
                  ),
                  n = t.x,
                  r = t.y,
                  a = (t.startAngle + t.endAngle) / 2,
                  i = (t.innerRadius + t.outerRadius) / 2;
                return { x: n + Math.cos(a) * i, y: r + Math.sin(a) * i };
              },
            },
            {
              key: "tooltipPosition",
              value: function (e) {
                return this.getCenterPoint(e);
              },
            },
            {
              key: "draw",
              value: function (e) {
                var t = this,
                  n = t.options,
                  r = n.offset || 0;
                if (
                  ((t.pixelMargin = "inner" === n.borderAlign ? 0.33 : 0),
                  (t.fullCircles = Math.floor(t.circumference / U)),
                  !(
                    0 === t.circumference ||
                    t.innerRadius < 0 ||
                    t.outerRadius < 0
                  ))
                ) {
                  if ((e.save(), r && t.circumference < U)) {
                    var a = (t.startAngle + t.endAngle) / 2;
                    e.translate(Math.cos(a) * r, Math.sin(a) * r);
                  }
                  (e.fillStyle = n.backgroundColor),
                    (e.strokeStyle = n.borderColor),
                    (function (e, t) {
                      if (t.fullCircles) {
                        (t.endAngle = t.startAngle + U), ka(e, t);
                        for (var n = 0; n < t.fullCircles; ++n) e.fill();
                      }
                      isNaN(t.circumference) ||
                        (t.endAngle = t.startAngle + (t.circumference % U)),
                        ka(e, t),
                        e.fill();
                    })(e, t),
                    _a(e, t),
                    e.restore();
                }
              },
            },
          ]),
          n
        );
      })(jr);
      function Sa(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t;
        (e.lineCap = M(n.borderCapStyle, t.borderCapStyle)),
          e.setLineDash(M(n.borderDash, t.borderDash)),
          (e.lineDashOffset = M(n.borderDashOffset, t.borderDashOffset)),
          (e.lineJoin = M(n.borderJoinStyle, t.borderJoinStyle)),
          (e.lineWidth = M(n.borderWidth, t.borderWidth)),
          (e.strokeStyle = M(n.borderColor, t.borderColor));
      }
      function Oa(e, t, n) {
        e.lineTo(n.x, n.y);
      }
      function Ma(e, t, n) {
        n = n || {};
        var r = e.length,
          a = Math.max(n.start || 0, t.start),
          i = Math.min(n.end || r - 1, t.end);
        return {
          count: r,
          start: a,
          loop: t.loop,
          ilen: i < a ? r + i - a : i - a,
        };
      }
      function Ea(e, t, n, r) {
        var a,
          i,
          o,
          l = t.points,
          u = t.options,
          s = Ma(l, n, r),
          c = s.count,
          f = s.start,
          d = s.loop,
          h = s.ilen,
          p = (function (e) {
            return e.stepped ? lt : e.tension ? ut : Oa;
          })(u),
          v = r || {},
          g = v.move,
          m = void 0 === g || g,
          y = v.reverse;
        for (a = 0; a <= h; ++a)
          (i = l[(f + (y ? h - a : a)) % c]).skip ||
            (m ? (e.moveTo(i.x, i.y), (m = !1)) : p(e, o, i, y, u.stepped),
            (o = i));
        return d && p(e, o, (i = l[(f + (y ? h : 0)) % c]), y, u.stepped), !!d;
      }
      function Ca(e, t, n, r) {
        var a,
          i,
          o,
          l,
          u,
          s,
          c = t.points,
          f = Ma(c, n, r),
          d = f.count,
          h = f.start,
          p = f.ilen,
          v = r || {},
          g = v.move,
          m = void 0 === g || g,
          y = v.reverse,
          b = 0,
          x = 0,
          k = function (e) {
            return (h + (y ? p - e : e)) % d;
          },
          _ = function () {
            l !== u && (e.lineTo(b, u), e.lineTo(b, l), e.lineTo(b, s));
          };
        for (m && ((i = c[k(0)]), e.moveTo(i.x, i.y)), a = 0; a <= p; ++a)
          if (!(i = c[k(a)]).skip) {
            var w = i.x,
              S = i.y,
              O = 0 | w;
            O === o
              ? (S < l ? (l = S) : S > u && (u = S), (b = (x * b + w) / ++x))
              : (_(), e.lineTo(w, S), (o = O), (x = 0), (l = u = S)),
              (s = S);
          }
        _();
      }
      function Pa(e) {
        var t = e.options,
          n = t.borderDash && t.borderDash.length;
        return !e._decimated && !e._loop && !t.tension && !t.stepped && !n
          ? Ca
          : Ea;
      }
      (wa.id = "arc"),
        (wa.defaults = {
          borderAlign: "center",
          borderColor: "#fff",
          borderRadius: 0,
          borderWidth: 2,
          offset: 0,
          angle: void 0,
        }),
        (wa.defaultRoutes = { backgroundColor: "backgroundColor" });
      var Ta = "function" === typeof Path2D;
      function Da(e, t, n, r) {
        Ta && 1 === t.segments.length
          ? (function (e, t, n, r) {
              var a = t._path;
              a ||
                ((a = t._path = new Path2D()),
                t.path(a, n, r) && a.closePath()),
                Sa(e, t.options),
                e.stroke(a);
            })(e, t, n, r)
          : (function (e, t, n, r) {
              var a,
                i = t.segments,
                o = t.options,
                l = Pa(t),
                u = Object(s.a)(i);
              try {
                for (u.s(); !(a = u.n()).done; ) {
                  var c = a.value;
                  Sa(e, o, c.style),
                    e.beginPath(),
                    l(e, t, c, { start: n, end: n + r - 1 }) && e.closePath(),
                    e.stroke();
                }
              } catch (f) {
                u.e(f);
              } finally {
                u.f();
              }
            })(e, t, n, r);
      }
      var La = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n(e) {
          var r;
          return (
            Object(h.a)(this, n),
            ((r = t.call(this)).animated = !0),
            (r.options = void 0),
            (r._loop = void 0),
            (r._fullLoop = void 0),
            (r._path = void 0),
            (r._points = void 0),
            (r._segments = void 0),
            (r._decimated = !1),
            (r._pointsUpdated = !1),
            e && Object.assign(Object(a.a)(r), e),
            r
          );
        }
        return (
          Object(p.a)(n, [
            {
              key: "updateControlPoints",
              value: function (e) {
                var t = this,
                  n = t.options;
                if (n.tension && !n.stepped && !t._pointsUpdated) {
                  var r = n.spanGaps ? t._loop : t._fullLoop;
                  Ht(t._points, n, e, r), (t._pointsUpdated = !0);
                }
              },
            },
            {
              key: "points",
              get: function () {
                return this._points;
              },
              set: function (e) {
                var t = this;
                (t._points = e),
                  delete t._segments,
                  delete t._path,
                  (t._pointsUpdated = !1);
              },
            },
            {
              key: "segments",
              get: function () {
                return (
                  this._segments ||
                  (this._segments = (function (e, t) {
                    var n = e.points,
                      r = e.options.spanGaps,
                      a = n.length;
                    if (!a) return [];
                    var i = !!e._loop,
                      o = (function (e, t, n, r) {
                        var a = 0,
                          i = t - 1;
                        if (n && !r) for (; a < t && !e[a].skip; ) a++;
                        for (; a < t && e[a].skip; ) a++;
                        for (a %= t, n && (i += a); i > a && e[i % t].skip; )
                          i--;
                        return { start: a, end: (i %= t) };
                      })(n, a, i, r),
                      l = o.start,
                      u = o.end;
                    return gn(
                      !0 === r
                        ? [{ start: l, end: u, loop: i }]
                        : (function (e, t, n, r) {
                            var a,
                              i = e.length,
                              o = [],
                              l = t,
                              u = e[t];
                            for (a = t + 1; a <= n; ++a) {
                              var s = e[a % i];
                              s.skip || s.stop
                                ? u.skip ||
                                  ((r = !1),
                                  o.push({
                                    start: t % i,
                                    end: (a - 1) % i,
                                    loop: r,
                                  }),
                                  (t = l = s.stop ? a : null))
                                : ((l = a), u.skip && (t = a)),
                                (u = s);
                            }
                            return (
                              null !== l &&
                                o.push({ start: t % i, end: l % i, loop: r }),
                              o
                            );
                          })(
                            n,
                            l,
                            u < l ? u + a : u,
                            !!e._fullLoop && 0 === l && u === a - 1
                          ),
                      n,
                      t
                    );
                  })(this, this.options.segment))
                );
              },
            },
            {
              key: "first",
              value: function () {
                var e = this.segments,
                  t = this.points;
                return e.length && t[e[0].start];
              },
            },
            {
              key: "last",
              value: function () {
                var e = this.segments,
                  t = this.points,
                  n = e.length;
                return n && t[e[n - 1].end];
              },
            },
            {
              key: "interpolate",
              value: function (e, t) {
                var n = this,
                  r = n.options,
                  a = e[t],
                  i = n.points,
                  o = vn(n, { property: t, start: a, end: a });
                if (o.length) {
                  var l,
                    u,
                    s = [],
                    c = (function (e) {
                      return e.stepped ? an : e.tension ? on : rn;
                    })(r);
                  for (l = 0, u = o.length; l < u; ++l) {
                    var f = o[l],
                      d = f.start,
                      h = f.end,
                      p = i[d],
                      v = i[h];
                    if (p !== v) {
                      var g = c(
                        p,
                        v,
                        Math.abs((a - p[t]) / (v[t] - p[t])),
                        r.stepped
                      );
                      (g[t] = e[t]), s.push(g);
                    } else s.push(p);
                  }
                  return 1 === s.length ? s[0] : s;
                }
              },
            },
            {
              key: "pathSegment",
              value: function (e, t, n) {
                return Pa(this)(e, this, t, n);
              },
            },
            {
              key: "path",
              value: function (e, t, n) {
                var r = this,
                  a = r.segments,
                  i = Pa(r),
                  o = r._loop;
                (t = t || 0), (n = n || r.points.length - t);
                var l,
                  u = Object(s.a)(a);
                try {
                  for (u.s(); !(l = u.n()).done; ) {
                    o &= i(e, r, l.value, { start: t, end: t + n - 1 });
                  }
                } catch (c) {
                  u.e(c);
                } finally {
                  u.f();
                }
                return !!o;
              },
            },
            {
              key: "draw",
              value: function (e, t, n, r) {
                var a = this,
                  i = a.options || {};
                (a.points || []).length &&
                  i.borderWidth &&
                  (e.save(),
                  Da(e, a, n, r),
                  e.restore(),
                  a.animated && ((a._pointsUpdated = !1), (a._path = void 0)));
              },
            },
          ]),
          n
        );
      })(jr);
      function ja(e, t, n, r) {
        var a = e.options,
          i = e.getProps([n], r)[n];
        return Math.abs(t - i) < a.radius + a.hitRadius;
      }
      (La.id = "line"),
        (La.defaults = {
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderWidth: 3,
          capBezierPoints: !0,
          cubicInterpolationMode: "default",
          fill: !1,
          spanGaps: !1,
          stepped: !1,
          tension: 0,
        }),
        (La.defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        }),
        (La.descriptors = {
          _scriptable: !0,
          _indexable: function (e) {
            return "borderDash" !== e && "fill" !== e;
          },
        });
      var Ra = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n(e) {
          var r;
          return (
            Object(h.a)(this, n),
            ((r = t.call(this)).options = void 0),
            (r.parsed = void 0),
            (r.skip = void 0),
            (r.stop = void 0),
            e && Object.assign(Object(a.a)(r), e),
            r
          );
        }
        return (
          Object(p.a)(n, [
            {
              key: "inRange",
              value: function (e, t, n) {
                var r = this.options,
                  a = this.getProps(["x", "y"], n),
                  i = a.x,
                  o = a.y;
                return (
                  Math.pow(e - i, 2) + Math.pow(t - o, 2) <
                  Math.pow(r.hitRadius + r.radius, 2)
                );
              },
            },
            {
              key: "inXRange",
              value: function (e, t) {
                return ja(this, e, "x", t);
              },
            },
            {
              key: "inYRange",
              value: function (e, t) {
                return ja(this, e, "y", t);
              },
            },
            {
              key: "getCenterPoint",
              value: function (e) {
                var t = this.getProps(["x", "y"], e);
                return { x: t.x, y: t.y };
              },
            },
            {
              key: "size",
              value: function (e) {
                var t = (e = e || this.options || {}).radius || 0;
                return (
                  2 *
                  ((t = Math.max(t, (t && e.hoverRadius) || 0)) +
                    ((t && e.borderWidth) || 0))
                );
              },
            },
            {
              key: "draw",
              value: function (e) {
                var t = this,
                  n = t.options;
                t.skip ||
                  n.radius < 0.1 ||
                  ((e.strokeStyle = n.borderColor),
                  (e.lineWidth = n.borderWidth),
                  (e.fillStyle = n.backgroundColor),
                  rt(e, n, t.x, t.y));
              },
            },
            {
              key: "getRange",
              value: function () {
                var e = this.options || {};
                return e.radius + e.hitRadius;
              },
            },
          ]),
          n
        );
      })(jr);
      function Aa(e, t) {
        var n,
          r,
          a,
          i,
          o,
          l = e.getProps(["x", "y", "base", "width", "height"], t),
          u = l.x,
          s = l.y,
          c = l.base,
          f = l.width,
          d = l.height;
        return (
          e.horizontal
            ? ((o = d / 2),
              (n = Math.min(u, c)),
              (r = Math.max(u, c)),
              (a = s - o),
              (i = s + o))
            : ((n = u - (o = f / 2)),
              (r = u + o),
              (a = Math.min(s, c)),
              (i = Math.max(s, c))),
          { left: n, top: a, right: r, bottom: i }
        );
      }
      function za(e) {
        var t = e.options.borderSkipped,
          n = {};
        return t
          ? ((n[
              (t = e.horizontal
                ? Fa(t, "left", "right", e.base > e.x)
                : Fa(t, "bottom", "top", e.base < e.y))
            ] = !0),
            n)
          : n;
      }
      function Fa(e, t, n, r) {
        var a, i, o;
        return (
          r
            ? ((o = n),
              (e = Na((e = (a = e) === (i = t) ? o : a === o ? i : a), n, t)))
            : (e = Na(e, t, n)),
          e
        );
      }
      function Na(e, t, n) {
        return "start" === e ? t : "end" === e ? n : e;
      }
      function Ia(e, t, n, r) {
        return e ? 0 : Math.max(Math.min(t, r), n);
      }
      function Va(e) {
        var t = Aa(e),
          n = t.right - t.left,
          r = t.bottom - t.top,
          a = (function (e, t, n) {
            var r = e.options.borderWidth,
              a = za(e),
              i = vt(r);
            return {
              t: Ia(a.top, i.top, 0, n),
              r: Ia(a.right, i.right, 0, t),
              b: Ia(a.bottom, i.bottom, 0, n),
              l: Ia(a.left, i.left, 0, t),
            };
          })(e, n / 2, r / 2),
          i = (function (e, t, n) {
            var r = gt(e.options.borderRadius),
              a = Math.min(t, n),
              i = za(e);
            return {
              topLeft: Ia(i.top || i.left, r.topLeft, 0, a),
              topRight: Ia(i.top || i.right, r.topRight, 0, a),
              bottomLeft: Ia(i.bottom || i.left, r.bottomLeft, 0, a),
              bottomRight: Ia(i.bottom || i.right, r.bottomRight, 0, a),
            };
          })(e, n / 2, r / 2);
        return {
          outer: { x: t.left, y: t.top, w: n, h: r, radius: i },
          inner: {
            x: t.left + a.l,
            y: t.top + a.t,
            w: n - a.l - a.r,
            h: r - a.t - a.b,
            radius: {
              topLeft: Math.max(0, i.topLeft - Math.max(a.t, a.l)),
              topRight: Math.max(0, i.topRight - Math.max(a.t, a.r)),
              bottomLeft: Math.max(0, i.bottomLeft - Math.max(a.b, a.l)),
              bottomRight: Math.max(0, i.bottomRight - Math.max(a.b, a.r)),
            },
          },
        };
      }
      function Ba(e, t, n, r) {
        var a = null === t,
          i = null === n,
          o = e && !(a && i) && Aa(e, r);
        return (
          o &&
          (a || (t >= o.left && t <= o.right)) &&
          (i || (n >= o.top && n <= o.bottom))
        );
      }
      function Wa(e, t) {
        e.rect(t.x, t.y, t.w, t.h);
      }
      (Ra.id = "point"),
        (Ra.defaults = {
          borderWidth: 1,
          hitRadius: 1,
          hoverBorderWidth: 1,
          hoverRadius: 4,
          pointStyle: "circle",
          radius: 3,
          rotation: 0,
        }),
        (Ra.defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        });
      var Ua = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n(e) {
          var r;
          return (
            Object(h.a)(this, n),
            ((r = t.call(this)).options = void 0),
            (r.horizontal = void 0),
            (r.base = void 0),
            (r.width = void 0),
            (r.height = void 0),
            e && Object.assign(Object(a.a)(r), e),
            r
          );
        }
        return (
          Object(p.a)(n, [
            {
              key: "draw",
              value: function (e) {
                var t,
                  n = this.options,
                  r = Va(this),
                  a = r.inner,
                  i = r.outer,
                  o =
                    (t = i.radius).topLeft ||
                    t.topRight ||
                    t.bottomLeft ||
                    t.bottomRight
                      ? ct
                      : Wa;
                e.save(),
                  (i.w === a.w && i.h === a.h) ||
                    (e.beginPath(),
                    o(e, i),
                    e.clip(),
                    o(e, a),
                    (e.fillStyle = n.borderColor),
                    e.fill("evenodd")),
                  e.beginPath(),
                  o(e, a),
                  (e.fillStyle = n.backgroundColor),
                  e.fill(),
                  e.restore();
              },
            },
            {
              key: "inRange",
              value: function (e, t, n) {
                return Ba(this, e, t, n);
              },
            },
            {
              key: "inXRange",
              value: function (e, t) {
                return Ba(this, e, null, t);
              },
            },
            {
              key: "inYRange",
              value: function (e, t) {
                return Ba(this, null, e, t);
              },
            },
            {
              key: "getCenterPoint",
              value: function (e) {
                var t = this.getProps(["x", "y", "base", "horizontal"], e),
                  n = t.x,
                  r = t.y,
                  a = t.base,
                  i = t.horizontal;
                return { x: i ? (n + a) / 2 : n, y: i ? r : (r + a) / 2 };
              },
            },
            {
              key: "getRange",
              value: function (e) {
                return "x" === e ? this.width / 2 : this.height / 2;
              },
            },
          ]),
          n
        );
      })(jr);
      (Ua.id = "bar"),
        (Ua.defaults = {
          borderSkipped: "start",
          borderWidth: 0,
          borderRadius: 0,
          pointStyle: void 0,
        }),
        (Ua.defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        });
      var $a = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n(e) {
          var r;
          return (
            Object(h.a)(this, n),
            ((r = t.call(this)).chart = e.chart),
            (r.options = e.options),
            (r.ctx = e.ctx),
            (r._padding = void 0),
            (r.top = void 0),
            (r.bottom = void 0),
            (r.left = void 0),
            (r.right = void 0),
            (r.width = void 0),
            (r.height = void 0),
            (r.position = void 0),
            (r.weight = void 0),
            (r.fullSize = void 0),
            r
          );
        }
        return (
          Object(p.a)(n, [
            {
              key: "update",
              value: function (e, t) {
                var n = this,
                  r = n.options;
                if (((n.left = 0), (n.top = 0), r.display)) {
                  (n.width = n.right = e), (n.height = n.bottom = t);
                  var a = _(r.text) ? r.text.length : 1;
                  n._padding = mt(r.padding);
                  var i = a * yt(r.font).lineHeight + n._padding.height;
                  n.isHorizontal() ? (n.height = i) : (n.width = i);
                } else n.width = n.height = n.right = n.bottom = 0;
              },
            },
            {
              key: "isHorizontal",
              value: function () {
                var e = this.options.position;
                return "top" === e || "bottom" === e;
              },
            },
            {
              key: "_drawArgs",
              value: function (e) {
                var t,
                  n,
                  r,
                  a = this.top,
                  i = this.left,
                  o = this.bottom,
                  l = this.right,
                  u = this.options,
                  s = u.align,
                  c = 0;
                return (
                  this.isHorizontal()
                    ? ((n = y(s, i, l)), (r = a + e), (t = l - i))
                    : ("left" === u.position
                        ? ((n = i + e), (r = y(s, o, a)), (c = -0.5 * W))
                        : ((n = l - e), (r = y(s, a, o)), (c = 0.5 * W)),
                      (t = o - a)),
                  { titleX: n, titleY: r, maxWidth: t, rotation: c }
                );
              },
            },
            {
              key: "draw",
              value: function () {
                var e = this,
                  t = e.ctx,
                  n = e.options;
                if (n.display) {
                  var r = yt(n.font),
                    a = r.lineHeight / 2 + e._padding.top,
                    i = e._drawArgs(a),
                    o = i.titleX,
                    l = i.titleY,
                    u = i.maxWidth,
                    s = i.rotation;
                  st(t, n.text, 0, 0, r, {
                    color: n.color,
                    maxWidth: u,
                    rotation: s,
                    textAlign: m(n.align),
                    textBaseline: "middle",
                    translation: [o, l],
                  });
                }
              },
            },
          ]),
          n
        );
      })(jr);
      var Ha = {
          id: "title",
          _element: $a,
          start: function (e, t, n) {
            !(function (e, t) {
              var n = new $a({ ctx: e.ctx, options: t, chart: e });
              gr(e, n, t), pr(e, n), (e.titleBlock = n);
            })(e, n);
          },
          stop: function (e) {
            var t = e.titleBlock;
            vr(e, t), delete e.titleBlock;
          },
          beforeUpdate: function (e, t, n) {
            var r = e.titleBlock;
            gr(e, r, n), (r.options = n);
          },
          defaults: {
            align: "center",
            display: !1,
            font: { weight: "bold" },
            fullSize: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3,
          },
          defaultRoutes: { color: "color" },
          descriptors: { _scriptable: !0, _indexable: !1 },
        },
        Ya = {
          average: function (e) {
            if (!e.length) return !1;
            var t,
              n,
              r = 0,
              a = 0,
              i = 0;
            for (t = 0, n = e.length; t < n; ++t) {
              var o = e[t].element;
              if (o && o.hasValue()) {
                var l = o.tooltipPosition();
                (r += l.x), (a += l.y), ++i;
              }
            }
            return { x: r / i, y: a / i };
          },
          nearest: function (e, t) {
            var n,
              r,
              a,
              i = t.x,
              o = t.y,
              l = Number.POSITIVE_INFINITY;
            for (n = 0, r = e.length; n < r; ++n) {
              var u = e[n].element;
              if (u && u.hasValue()) {
                var s = ae(t, u.getCenterPoint());
                s < l && ((l = s), (a = u));
              }
            }
            if (a) {
              var c = a.tooltipPosition();
              (i = c.x), (o = c.y);
            }
            return { x: i, y: o };
          },
        };
      function Qa(e, t) {
        return t && (_(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
      }
      function qa(e) {
        return ("string" === typeof e || e instanceof String) &&
          e.indexOf("\n") > -1
          ? e.split("\n")
          : e;
      }
      function Xa(e, t) {
        var n = t.element,
          r = t.datasetIndex,
          a = t.index,
          i = e.getDatasetMeta(r).controller,
          o = i.getLabelAndValue(a),
          l = o.label,
          u = o.value;
        return {
          chart: e,
          label: l,
          parsed: i.getParsed(a),
          raw: e.data.datasets[r].data[a],
          formattedValue: u,
          dataset: i.getDataset(),
          dataIndex: a,
          datasetIndex: r,
          element: n,
        };
      }
      function Ka(e, t) {
        var n = e._chart.ctx,
          r = e.body,
          a = e.footer,
          i = e.title,
          o = t.boxWidth,
          l = t.boxHeight,
          u = yt(t.bodyFont),
          s = yt(t.titleFont),
          c = yt(t.footerFont),
          f = i.length,
          d = a.length,
          h = r.length,
          p = mt(t.padding),
          v = p.height,
          g = 0,
          m = r.reduce(function (e, t) {
            return e + t.before.length + t.lines.length + t.after.length;
          }, 0);
        ((m += e.beforeBody.length + e.afterBody.length),
        f &&
          (v +=
            f * s.lineHeight + (f - 1) * t.titleSpacing + t.titleMarginBottom),
        m) &&
          (v +=
            h * (t.displayColors ? Math.max(l, u.lineHeight) : u.lineHeight) +
            (m - h) * u.lineHeight +
            (m - 1) * t.bodySpacing);
        d &&
          (v +=
            t.footerMarginTop + d * c.lineHeight + (d - 1) * t.footerSpacing);
        var y = 0,
          b = function (e) {
            g = Math.max(g, n.measureText(e).width + y);
          };
        return (
          n.save(),
          (n.font = s.string),
          P(e.title, b),
          (n.font = u.string),
          P(e.beforeBody.concat(e.afterBody), b),
          (y = t.displayColors ? o + 2 : 0),
          P(r, function (e) {
            P(e.before, b), P(e.lines, b), P(e.after, b);
          }),
          (y = 0),
          (n.font = c.string),
          P(e.footer, b),
          n.restore(),
          { width: (g += p.width), height: v }
        );
      }
      function Ga(e, t, n, r) {
        var a = n.x,
          i = n.width,
          o = e.width,
          l = e.chartArea,
          u = l.left,
          s = l.right,
          c = "center";
        return (
          "center" === r
            ? (c = a <= (u + s) / 2 ? "left" : "right")
            : a <= i / 2
            ? (c = "left")
            : a >= o - i / 2 && (c = "right"),
          (function (e, t, n, r) {
            var a = r.x,
              i = r.width,
              o = n.caretSize + n.caretPadding;
            return (
              ("left" === e && a + i + o > t.width) ||
              ("right" === e && a - i - o < 0) ||
              void 0
            );
          })(c, e, t, n) && (c = "center"),
          c
        );
      }
      function Za(e, t, n) {
        var r =
          t.yAlign ||
          (function (e, t) {
            var n = t.y,
              r = t.height;
            return n < r / 2
              ? "top"
              : n > e.height - r / 2
              ? "bottom"
              : "center";
          })(e, n);
        return { xAlign: t.xAlign || Ga(e, t, n, r), yAlign: r };
      }
      function Ja(e, t, n, r) {
        var a = e.caretSize,
          i = e.caretPadding,
          o = e.cornerRadius,
          l = n.xAlign,
          u = n.yAlign,
          s = a + i,
          c = o + i,
          f = (function (e, t) {
            var n = e.x,
              r = e.width;
            return "right" === t ? (n -= r) : "center" === t && (n -= r / 2), n;
          })(t, l),
          d = (function (e, t, n) {
            var r = e.y,
              a = e.height;
            return (
              "top" === t ? (r += n) : (r -= "bottom" === t ? a + n : a / 2), r
            );
          })(t, u, s);
        return (
          "center" === u
            ? "left" === l
              ? (f += s)
              : "right" === l && (f -= s)
            : "left" === l
            ? (f -= c)
            : "right" === l && (f += c),
          { x: ue(f, 0, r.width - t.width), y: ue(d, 0, r.height - t.height) }
        );
      }
      function ei(e, t, n) {
        var r = mt(n.padding);
        return "center" === t
          ? e.x + e.width / 2
          : "right" === t
          ? e.x + e.width - r.right
          : e.x + r.left;
      }
      function ti(e) {
        return Qa([], qa(e));
      }
      function ni(e, t) {
        var n =
          t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
        return n ? e.override(n) : e;
      }
      var ri = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n(e) {
          var r;
          return (
            Object(h.a)(this, n),
            ((r = t.call(this)).opacity = 0),
            (r._active = []),
            (r._chart = e._chart),
            (r._eventPosition = void 0),
            (r._size = void 0),
            (r._cachedAnimations = void 0),
            (r._tooltipItems = []),
            (r.$animations = void 0),
            (r.$context = void 0),
            (r.options = e.options),
            (r.dataPoints = void 0),
            (r.title = void 0),
            (r.beforeBody = void 0),
            (r.body = void 0),
            (r.afterBody = void 0),
            (r.footer = void 0),
            (r.xAlign = void 0),
            (r.yAlign = void 0),
            (r.x = void 0),
            (r.y = void 0),
            (r.height = void 0),
            (r.width = void 0),
            (r.caretX = void 0),
            (r.caretY = void 0),
            (r.labelColors = void 0),
            (r.labelPointStyles = void 0),
            (r.labelTextColors = void 0),
            r
          );
        }
        return (
          Object(p.a)(n, [
            {
              key: "initialize",
              value: function (e) {
                (this.options = e),
                  (this._cachedAnimations = void 0),
                  (this.$context = void 0);
              },
            },
            {
              key: "_resolveAnimations",
              value: function () {
                var e = this,
                  t = e._cachedAnimations;
                if (t) return t;
                var n = e._chart,
                  r = e.options.setContext(e.getContext()),
                  a = r.enabled && n.options.animation && r.animations,
                  i = new Sn(e._chart, a);
                return (
                  a._cacheable && (e._cachedAnimations = Object.freeze(i)), i
                );
              },
            },
            {
              key: "getContext",
              value: function () {
                var e,
                  t,
                  n,
                  r = this;
                return (
                  r.$context ||
                  (r.$context =
                    ((e = r._chart.getContext()),
                    (t = r),
                    (n = r._tooltipItems),
                    Object.assign(Object.create(e), {
                      tooltip: t,
                      tooltipItems: n,
                      type: "tooltip",
                    })))
                );
              },
            },
            {
              key: "getTitle",
              value: function (e, t) {
                var n = this,
                  r = t.callbacks,
                  a = r.beforeTitle.apply(n, [e]),
                  i = r.title.apply(n, [e]),
                  o = r.afterTitle.apply(n, [e]),
                  l = [];
                return (
                  (l = Qa(l, qa(a))), (l = Qa(l, qa(i))), (l = Qa(l, qa(o)))
                );
              },
            },
            {
              key: "getBeforeBody",
              value: function (e, t) {
                return ti(t.callbacks.beforeBody.apply(this, [e]));
              },
            },
            {
              key: "getBody",
              value: function (e, t) {
                var n = this,
                  r = t.callbacks,
                  a = [];
                return (
                  P(e, function (e) {
                    var t = { before: [], lines: [], after: [] },
                      i = ni(r, e);
                    Qa(t.before, qa(i.beforeLabel.call(n, e))),
                      Qa(t.lines, i.label.call(n, e)),
                      Qa(t.after, qa(i.afterLabel.call(n, e))),
                      a.push(t);
                  }),
                  a
                );
              },
            },
            {
              key: "getAfterBody",
              value: function (e, t) {
                return ti(t.callbacks.afterBody.apply(this, [e]));
              },
            },
            {
              key: "getFooter",
              value: function (e, t) {
                var n = this,
                  r = t.callbacks,
                  a = r.beforeFooter.apply(n, [e]),
                  i = r.footer.apply(n, [e]),
                  o = r.afterFooter.apply(n, [e]),
                  l = [];
                return (
                  (l = Qa(l, qa(a))), (l = Qa(l, qa(i))), (l = Qa(l, qa(o)))
                );
              },
            },
            {
              key: "_createItems",
              value: function (e) {
                var t,
                  n,
                  r = this,
                  a = r._active,
                  i = r._chart.data,
                  o = [],
                  l = [],
                  u = [],
                  s = [];
                for (t = 0, n = a.length; t < n; ++t)
                  s.push(Xa(r._chart, a[t]));
                return (
                  e.filter &&
                    (s = s.filter(function (t, n, r) {
                      return e.filter(t, n, r, i);
                    })),
                  e.itemSort &&
                    (s = s.sort(function (t, n) {
                      return e.itemSort(t, n, i);
                    })),
                  P(s, function (t) {
                    var n = ni(e.callbacks, t);
                    o.push(n.labelColor.call(r, t)),
                      l.push(n.labelPointStyle.call(r, t)),
                      u.push(n.labelTextColor.call(r, t));
                  }),
                  (r.labelColors = o),
                  (r.labelPointStyles = l),
                  (r.labelTextColors = u),
                  (r.dataPoints = s),
                  s
                );
              },
            },
            {
              key: "update",
              value: function (e, t) {
                var n,
                  r = this,
                  a = r.options.setContext(r.getContext()),
                  i = r._active,
                  o = [];
                if (i.length) {
                  var l = Ya[a.position].call(r, i, r._eventPosition);
                  (o = r._createItems(a)),
                    (r.title = r.getTitle(o, a)),
                    (r.beforeBody = r.getBeforeBody(o, a)),
                    (r.body = r.getBody(o, a)),
                    (r.afterBody = r.getAfterBody(o, a)),
                    (r.footer = r.getFooter(o, a));
                  var u = (r._size = Ka(r, a)),
                    s = Object.assign({}, l, u),
                    c = Za(r._chart, a, s),
                    f = Ja(a, s, c, r._chart);
                  (r.xAlign = c.xAlign),
                    (r.yAlign = c.yAlign),
                    (n = {
                      opacity: 1,
                      x: f.x,
                      y: f.y,
                      width: u.width,
                      height: u.height,
                      caretX: l.x,
                      caretY: l.y,
                    });
                } else 0 !== r.opacity && (n = { opacity: 0 });
                (r._tooltipItems = o),
                  (r.$context = void 0),
                  n && r._resolveAnimations().update(r, n),
                  e &&
                    a.external &&
                    a.external.call(r, {
                      chart: r._chart,
                      tooltip: r,
                      replay: t,
                    });
              },
            },
            {
              key: "drawCaret",
              value: function (e, t, n, r) {
                var a = this.getCaretPosition(e, n, r);
                t.lineTo(a.x1, a.y1),
                  t.lineTo(a.x2, a.y2),
                  t.lineTo(a.x3, a.y3);
              },
            },
            {
              key: "getCaretPosition",
              value: function (e, t, n) {
                var r,
                  a,
                  i,
                  o,
                  l,
                  u,
                  s = this.xAlign,
                  c = this.yAlign,
                  f = n.cornerRadius,
                  d = n.caretSize,
                  h = e.x,
                  p = e.y,
                  v = t.width,
                  g = t.height;
                return (
                  "center" === c
                    ? ((l = p + g / 2),
                      "left" === s
                        ? ((a = (r = h) - d), (o = l + d), (u = l - d))
                        : ((a = (r = h + v) + d), (o = l - d), (u = l + d)),
                      (i = r))
                    : ((a =
                        "left" === s
                          ? h + f + d
                          : "right" === s
                          ? h + v - f - d
                          : this.caretX),
                      "top" === c
                        ? ((l = (o = p) - d), (r = a - d), (i = a + d))
                        : ((l = (o = p + g) + d), (r = a + d), (i = a - d)),
                      (u = o)),
                  { x1: r, x2: a, x3: i, y1: o, y2: l, y3: u }
                );
              },
            },
            {
              key: "drawTitle",
              value: function (e, t, n) {
                var r,
                  a,
                  i,
                  o = this,
                  l = o.title,
                  u = l.length;
                if (u) {
                  var s = sn(n.rtl, o.x, o.width);
                  for (
                    e.x = ei(o, n.titleAlign, n),
                      t.textAlign = s.textAlign(n.titleAlign),
                      t.textBaseline = "middle",
                      r = yt(n.titleFont),
                      a = n.titleSpacing,
                      t.fillStyle = n.titleColor,
                      t.font = r.string,
                      i = 0;
                    i < u;
                    ++i
                  )
                    t.fillText(l[i], s.x(e.x), e.y + r.lineHeight / 2),
                      (e.y += r.lineHeight + a),
                      i + 1 === u && (e.y += n.titleMarginBottom - a);
                }
              },
            },
            {
              key: "_drawColorBox",
              value: function (e, t, n, r, a) {
                var i = this,
                  o = i.labelColors[n],
                  l = i.labelPointStyles[n],
                  u = a.boxHeight,
                  s = a.boxWidth,
                  c = yt(a.bodyFont),
                  f = ei(i, "left", a),
                  d = r.x(f),
                  h = u < c.lineHeight ? (c.lineHeight - u) / 2 : 0,
                  p = t.y + h;
                if (a.usePointStyle) {
                  var v = {
                      radius: Math.min(s, u) / 2,
                      pointStyle: l.pointStyle,
                      rotation: l.rotation,
                      borderWidth: 1,
                    },
                    g = r.leftForLtr(d, s) + s / 2,
                    m = p + u / 2;
                  (e.strokeStyle = a.multiKeyBackground),
                    (e.fillStyle = a.multiKeyBackground),
                    rt(e, v, g, m),
                    (e.strokeStyle = o.borderColor),
                    (e.fillStyle = o.backgroundColor),
                    rt(e, v, g, m);
                } else {
                  (e.lineWidth = o.borderWidth || 1),
                    (e.strokeStyle = o.borderColor),
                    e.setLineDash(o.borderDash || []),
                    (e.lineDashOffset = o.borderDashOffset || 0);
                  var y = r.leftForLtr(d, s),
                    b = r.leftForLtr(r.xPlus(d, 1), s - 2),
                    x = gt(o.borderRadius);
                  Object.values(x).some(function (e) {
                    return 0 !== e;
                  })
                    ? (e.beginPath(),
                      (e.fillStyle = a.multiKeyBackground),
                      ct(e, { x: y, y: p, w: s, h: u, radius: x }),
                      e.fill(),
                      e.stroke(),
                      (e.fillStyle = o.backgroundColor),
                      e.beginPath(),
                      ct(e, { x: b, y: p + 1, w: s - 2, h: u - 2, radius: x }),
                      e.fill())
                    : ((e.fillStyle = a.multiKeyBackground),
                      e.fillRect(y, p, s, u),
                      e.strokeRect(y, p, s, u),
                      (e.fillStyle = o.backgroundColor),
                      e.fillRect(b, p + 1, s - 2, u - 2));
                }
                e.fillStyle = i.labelTextColors[n];
              },
            },
            {
              key: "drawBody",
              value: function (e, t, n) {
                var r,
                  a,
                  i,
                  o,
                  l,
                  u,
                  s,
                  c = this,
                  f = c.body,
                  d = n.bodySpacing,
                  h = n.bodyAlign,
                  p = n.displayColors,
                  v = n.boxHeight,
                  g = n.boxWidth,
                  m = yt(n.bodyFont),
                  y = m.lineHeight,
                  b = 0,
                  x = sn(n.rtl, c.x, c.width),
                  k = function (n) {
                    t.fillText(n, x.x(e.x + b), e.y + y / 2), (e.y += y + d);
                  },
                  _ = x.textAlign(h);
                for (
                  t.textAlign = h,
                    t.textBaseline = "middle",
                    t.font = m.string,
                    e.x = ei(c, _, n),
                    t.fillStyle = n.bodyColor,
                    P(c.beforeBody, k),
                    b =
                      p && "right" !== _
                        ? "center" === h
                          ? g / 2 + 1
                          : g + 2
                        : 0,
                    o = 0,
                    u = f.length;
                  o < u;
                  ++o
                ) {
                  for (
                    r = f[o],
                      a = c.labelTextColors[o],
                      t.fillStyle = a,
                      P(r.before, k),
                      i = r.lines,
                      p &&
                        i.length &&
                        (c._drawColorBox(t, e, o, x, n),
                        (y = Math.max(m.lineHeight, v))),
                      l = 0,
                      s = i.length;
                    l < s;
                    ++l
                  )
                    k(i[l]), (y = m.lineHeight);
                  P(r.after, k);
                }
                (b = 0), (y = m.lineHeight), P(c.afterBody, k), (e.y -= d);
              },
            },
            {
              key: "drawFooter",
              value: function (e, t, n) {
                var r,
                  a,
                  i = this,
                  o = i.footer,
                  l = o.length;
                if (l) {
                  var u = sn(n.rtl, i.x, i.width);
                  for (
                    e.x = ei(i, n.footerAlign, n),
                      e.y += n.footerMarginTop,
                      t.textAlign = u.textAlign(n.footerAlign),
                      t.textBaseline = "middle",
                      r = yt(n.footerFont),
                      t.fillStyle = n.footerColor,
                      t.font = r.string,
                      a = 0;
                    a < l;
                    ++a
                  )
                    t.fillText(o[a], u.x(e.x), e.y + r.lineHeight / 2),
                      (e.y += r.lineHeight + n.footerSpacing);
                }
              },
            },
            {
              key: "drawBackground",
              value: function (e, t, n, r) {
                var a = this.xAlign,
                  i = this.yAlign,
                  o = e.x,
                  l = e.y,
                  u = n.width,
                  s = n.height,
                  c = r.cornerRadius;
                (t.fillStyle = r.backgroundColor),
                  (t.strokeStyle = r.borderColor),
                  (t.lineWidth = r.borderWidth),
                  t.beginPath(),
                  t.moveTo(o + c, l),
                  "top" === i && this.drawCaret(e, t, n, r),
                  t.lineTo(o + u - c, l),
                  t.quadraticCurveTo(o + u, l, o + u, l + c),
                  "center" === i && "right" === a && this.drawCaret(e, t, n, r),
                  t.lineTo(o + u, l + s - c),
                  t.quadraticCurveTo(o + u, l + s, o + u - c, l + s),
                  "bottom" === i && this.drawCaret(e, t, n, r),
                  t.lineTo(o + c, l + s),
                  t.quadraticCurveTo(o, l + s, o, l + s - c),
                  "center" === i && "left" === a && this.drawCaret(e, t, n, r),
                  t.lineTo(o, l + c),
                  t.quadraticCurveTo(o, l, o + c, l),
                  t.closePath(),
                  t.fill(),
                  r.borderWidth > 0 && t.stroke();
              },
            },
            {
              key: "_updateAnimationTarget",
              value: function (e) {
                var t = this,
                  n = t._chart,
                  r = t.$animations,
                  a = r && r.x,
                  i = r && r.y;
                if (a || i) {
                  var o = Ya[e.position].call(t, t._active, t._eventPosition);
                  if (!o) return;
                  var l = (t._size = Ka(t, e)),
                    u = Object.assign({}, o, t._size),
                    s = Za(n, e, u),
                    c = Ja(e, u, s, n);
                  (a._to === c.x && i._to === c.y) ||
                    ((t.xAlign = s.xAlign),
                    (t.yAlign = s.yAlign),
                    (t.width = l.width),
                    (t.height = l.height),
                    (t.caretX = o.x),
                    (t.caretY = o.y),
                    t._resolveAnimations().update(t, c));
                }
              },
            },
            {
              key: "draw",
              value: function (e) {
                var t = this,
                  n = t.options.setContext(t.getContext()),
                  r = t.opacity;
                if (r) {
                  t._updateAnimationTarget(n);
                  var a = { width: t.width, height: t.height },
                    i = { x: t.x, y: t.y };
                  r = Math.abs(r) < 0.001 ? 0 : r;
                  var o = mt(n.padding),
                    l =
                      t.title.length ||
                      t.beforeBody.length ||
                      t.body.length ||
                      t.afterBody.length ||
                      t.footer.length;
                  n.enabled &&
                    l &&
                    (e.save(),
                    (e.globalAlpha = r),
                    t.drawBackground(i, e, a, n),
                    cn(e, n.textDirection),
                    (i.y += o.top),
                    t.drawTitle(i, e, n),
                    t.drawBody(i, e, n),
                    t.drawFooter(i, e, n),
                    fn(e, n.textDirection),
                    e.restore());
                }
              },
            },
            {
              key: "getActiveElements",
              value: function () {
                return this._active || [];
              },
            },
            {
              key: "setActiveElements",
              value: function (e, t) {
                var n = this,
                  r = n._active,
                  a = e.map(function (e) {
                    var t = e.datasetIndex,
                      r = e.index,
                      a = n._chart.getDatasetMeta(t);
                    if (!a)
                      throw new Error("Cannot find a dataset at index " + t);
                    return { datasetIndex: t, element: a.data[r], index: r };
                  }),
                  i = !T(r, a),
                  o = n._positionChanged(a, t);
                (i || o) &&
                  ((n._active = a), (n._eventPosition = t), n.update(!0));
              },
            },
            {
              key: "handleEvent",
              value: function (e, t) {
                var n,
                  r = this,
                  a = r.options,
                  i = r._active || [],
                  o = [];
                "mouseout" !== e.type &&
                  ((o = r._chart.getElementsAtEventForMode(e, a.mode, a, t)),
                  a.reverse && o.reverse());
                var l = r._positionChanged(o, e);
                return (
                  (n = t || !T(o, i) || l) &&
                    ((r._active = o),
                    (a.enabled || a.external) &&
                      ((r._eventPosition = { x: e.x, y: e.y }),
                      r.update(!0, t))),
                  n
                );
              },
            },
            {
              key: "_positionChanged",
              value: function (e, t) {
                var n = this,
                  r = Ya[n.options.position].call(n, e, t);
                return n.caretX !== r.x || n.caretY !== r.y;
              },
            },
          ]),
          n
        );
      })(jr);
      ri.positioners = Ya;
      var ai = {
        id: "tooltip",
        _element: ri,
        positioners: Ya,
        afterInit: function (e, t, n) {
          n && (e.tooltip = new ri({ _chart: e, options: n }));
        },
        beforeUpdate: function (e, t, n) {
          e.tooltip && e.tooltip.initialize(n);
        },
        reset: function (e, t, n) {
          e.tooltip && e.tooltip.initialize(n);
        },
        afterDraw: function (e) {
          var t = e.tooltip,
            n = { tooltip: t };
          !1 !== e.notifyPlugins("beforeTooltipDraw", n) &&
            (t && t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n));
        },
        afterEvent: function (e, t) {
          if (e.tooltip) {
            var n = t.replay;
            e.tooltip.handleEvent(t.event, n) && (t.changed = !0);
          }
        },
        defaults: {
          enabled: !0,
          external: null,
          position: "average",
          backgroundColor: "rgba(0,0,0,0.8)",
          titleColor: "#fff",
          titleFont: { weight: "bold" },
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleAlign: "left",
          bodyColor: "#fff",
          bodySpacing: 2,
          bodyFont: {},
          bodyAlign: "left",
          footerColor: "#fff",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFont: { weight: "bold" },
          footerAlign: "left",
          padding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          boxHeight: function (e, t) {
            return t.bodyFont.size;
          },
          boxWidth: function (e, t) {
            return t.bodyFont.size;
          },
          multiKeyBackground: "#fff",
          displayColors: !0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          animation: { duration: 400, easing: "easeOutQuart" },
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "width", "height", "caretX", "caretY"],
            },
            opacity: { easing: "linear", duration: 200 },
          },
          callbacks: {
            beforeTitle: b,
            title: function (e) {
              if (e.length > 0) {
                var t = e[0],
                  n = t.chart.data.labels,
                  r = n ? n.length : 0;
                if (this && this.options && "dataset" === this.options.mode)
                  return t.dataset.label || "";
                if (t.label) return t.label;
                if (r > 0 && t.dataIndex < r) return n[t.dataIndex];
              }
              return "";
            },
            afterTitle: b,
            beforeBody: b,
            beforeLabel: b,
            label: function (e) {
              if (this && this.options && "dataset" === this.options.mode)
                return e.label + ": " + e.formattedValue || e.formattedValue;
              var t = e.dataset.label || "";
              t && (t += ": ");
              var n = e.formattedValue;
              return k(n) || (t += n), t;
            },
            labelColor: function (e) {
              var t = e.chart
                .getDatasetMeta(e.datasetIndex)
                .controller.getStyle(e.dataIndex);
              return {
                borderColor: t.borderColor,
                backgroundColor: t.backgroundColor,
                borderWidth: t.borderWidth,
                borderDash: t.borderDash,
                borderDashOffset: t.borderDashOffset,
                borderRadius: 0,
              };
            },
            labelTextColor: function () {
              return this.options.bodyColor;
            },
            labelPointStyle: function (e) {
              var t = e.chart
                .getDatasetMeta(e.datasetIndex)
                .controller.getStyle(e.dataIndex);
              return { pointStyle: t.pointStyle, rotation: t.rotation };
            },
            afterLabel: b,
            afterBody: b,
            beforeFooter: b,
            footer: b,
            afterFooter: b,
          },
        },
        defaultRoutes: {
          bodyFont: "font",
          footerFont: "font",
          titleFont: "font",
        },
        descriptors: {
          _scriptable: function (e) {
            return "filter" !== e && "itemSort" !== e && "external" !== e;
          },
          _indexable: !1,
          callbacks: { _scriptable: !1, _indexable: !1 },
          animation: { _fallback: !1 },
          animations: { _fallback: "animation" },
        },
        additionalOptionScopes: ["interaction"],
      };
      function ii(e, t, n) {
        var r = e.indexOf(t);
        return -1 === r
          ? (function (e, t, n) {
              return "string" === typeof t
                ? e.push(t) - 1
                : isNaN(t)
                ? null
                : n;
            })(e, t, n)
          : r !== e.lastIndexOf(t)
          ? n
          : r;
      }
      var oi = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n(e) {
          var r;
          return (
            Object(h.a)(this, n),
            ((r = t.call(this, e))._startValue = void 0),
            (r._valueRange = 0),
            r
          );
        }
        return (
          Object(p.a)(n, [
            {
              key: "parse",
              value: function (e, t) {
                if (k(e)) return null;
                var n = this.getLabels();
                return (function (e, t) {
                  return null === e ? null : ue(Math.round(e), 0, t);
                })(
                  (t = isFinite(t) && n[t] === e ? t : ii(n, e, M(t, e))),
                  n.length - 1
                );
              },
            },
            {
              key: "determineDataLimits",
              value: function () {
                var e = this,
                  t = e.getUserBounds(),
                  n = t.minDefined,
                  r = t.maxDefined,
                  a = e.getMinMax(!0),
                  i = a.min,
                  o = a.max;
                "ticks" === e.options.bounds &&
                  (n || (i = 0), r || (o = e.getLabels().length - 1)),
                  (e.min = i),
                  (e.max = o);
              },
            },
            {
              key: "buildTicks",
              value: function () {
                var e = this,
                  t = e.min,
                  n = e.max,
                  r = e.options.offset,
                  a = [],
                  i = e.getLabels();
                (i = 0 === t && n === i.length - 1 ? i : i.slice(t, n + 1)),
                  (e._valueRange = Math.max(i.length - (r ? 0 : 1), 1)),
                  (e._startValue = e.min - (r ? 0.5 : 0));
                for (var o = t; o <= n; o++) a.push({ value: o });
                return a;
              },
            },
            {
              key: "getLabelForValue",
              value: function (e) {
                var t = this.getLabels();
                return e >= 0 && e < t.length ? t[e] : e;
              },
            },
            {
              key: "configure",
              value: function () {
                var e = this;
                o(Object(i.a)(n.prototype), "configure", this).call(this),
                  e.isHorizontal() || (e._reversePixels = !e._reversePixels);
              },
            },
            {
              key: "getPixelForValue",
              value: function (e) {
                var t = this;
                return (
                  "number" !== typeof e && (e = t.parse(e)),
                  null === e
                    ? NaN
                    : t.getPixelForDecimal((e - t._startValue) / t._valueRange)
                );
              },
            },
            {
              key: "getPixelForTick",
              value: function (e) {
                var t = this.ticks;
                return e < 0 || e > t.length - 1
                  ? null
                  : this.getPixelForValue(t[e].value);
              },
            },
            {
              key: "getValueForPixel",
              value: function (e) {
                var t = this;
                return Math.round(
                  t._startValue + t.getDecimalForPixel(e) * t._valueRange
                );
              },
            },
            {
              key: "getBasePixel",
              value: function () {
                return this.bottom;
              },
            },
          ]),
          n
        );
      })($r);
      function li(e, t) {
        var n,
          r,
          a,
          i,
          o = [],
          l = e.step,
          u = e.min,
          s = e.max,
          c = e.precision,
          f = e.count,
          d = e.maxTicks,
          h = l || 1,
          p = d - 1,
          v = t.min,
          g = t.max,
          m = !k(u),
          y = !k(s),
          b = !k(f),
          x = Z((g - v) / p / h) * h;
        if (x < 1e-14 && !m && !y) return [{ value: v }, { value: g }];
        (i = Math.ceil(g / x) - Math.floor(v / x)) > p &&
          (x = Z((i * x) / p / h) * h),
          k(c) || ((n = Math.pow(10, c)), (x = Math.ceil(x * n) / n)),
          (r = Math.floor(v / x) * x),
          (a = Math.ceil(g / x) * x),
          m &&
          y &&
          l &&
          (function (e, t) {
            var n = Math.round(e);
            return n - t <= e && n + t >= e;
          })((s - u) / l, x / 1e3)
            ? ((x = (s - u) / (i = Math.min((s - u) / x, d))), (r = u), (a = s))
            : b
            ? (x = ((a = y ? s : a) - (r = m ? u : r)) / (i = f - 1))
            : (i = ee((i = (a - r) / x), Math.round(i), x / 1e3)
                ? Math.round(i)
                : Math.ceil(i)),
          (n = Math.pow(
            10,
            k(c)
              ? (function (e) {
                  if (S(e)) {
                    for (var t = 1, n = 0; Math.round(e * t) / t !== e; )
                      (t *= 10), n++;
                    return n;
                  }
                })(x)
              : c
          )),
          (r = Math.round(r * n) / n),
          (a = Math.round(a * n) / n);
        var _ = 0;
        for (
          m &&
          (o.push({ value: u }),
          r <= u && _++,
          ee(Math.round((r + _ * x) * n) / n, u, x / 10) && _++);
          _ < i;
          ++_
        )
          o.push({ value: Math.round((r + _ * x) * n) / n });
        return (
          y
            ? ee(o[o.length - 1].value, s, x / 10)
              ? (o[o.length - 1].value = s)
              : o.push({ value: s })
            : o.push({ value: a }),
          o
        );
      }
      (oi.id = "category"),
        (oi.defaults = { ticks: { callback: oi.prototype.getLabelForValue } });
      var ui = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n(e) {
            var r;
            return (
              Object(h.a)(this, n),
              ((r = t.call(this, e)).start = void 0),
              (r.end = void 0),
              (r._startValue = void 0),
              (r._endValue = void 0),
              (r._valueRange = 0),
              r
            );
          }
          return (
            Object(p.a)(n, [
              {
                key: "parse",
                value: function (e, t) {
                  return k(e) ||
                    (("number" === typeof e || e instanceof Number) &&
                      !isFinite(+e))
                    ? null
                    : +e;
                },
              },
              {
                key: "handleTickRangeOptions",
                value: function () {
                  var e = this,
                    t = e.options,
                    n = t.beginAtZero,
                    r = t.stacked,
                    a = e.getUserBounds(),
                    i = a.minDefined,
                    o = a.maxDefined,
                    l = e.min,
                    u = e.max,
                    s = function (e) {
                      return (l = i ? l : e);
                    },
                    c = function (e) {
                      return (u = o ? u : e);
                    };
                  if (n || r) {
                    var f = G(l),
                      d = G(u);
                    f < 0 && d < 0 ? c(0) : f > 0 && d > 0 && s(0);
                  }
                  l === u && (c(u + 1), n || s(l - 1)),
                    (e.min = l),
                    (e.max = u);
                },
              },
              {
                key: "getTickLimit",
                value: function () {
                  var e,
                    t = this,
                    n = t.options.ticks,
                    r = n.maxTicksLimit,
                    a = n.stepSize;
                  return (
                    a
                      ? (e = Math.ceil(t.max / a) - Math.floor(t.min / a) + 1)
                      : ((e = t.computeTickLimit()), (r = r || 11)),
                    r && (e = Math.min(r, e)),
                    e
                  );
                },
              },
              {
                key: "computeTickLimit",
                value: function () {
                  return Number.POSITIVE_INFINITY;
                },
              },
              {
                key: "buildTicks",
                value: function () {
                  var e = this,
                    t = e.options,
                    n = t.ticks,
                    r = e.getTickLimit(),
                    a = li(
                      {
                        maxTicks: (r = Math.max(2, r)),
                        min: t.min,
                        max: t.max,
                        precision: n.precision,
                        step: n.stepSize,
                        count: n.count,
                      },
                      (function (e, t) {
                        var n = e.min,
                          r = e.max;
                        return { min: n - Math.abs(E(t, n)), max: r + E(t, r) };
                      })(e, t.grace)
                    );
                  return (
                    "ticks" === t.bounds && te(a, e, "value"),
                    t.reverse
                      ? (a.reverse(), (e.start = e.max), (e.end = e.min))
                      : ((e.start = e.min), (e.end = e.max)),
                    a
                  );
                },
              },
              {
                key: "configure",
                value: function () {
                  var e = this,
                    t = e.ticks,
                    r = e.min,
                    a = e.max;
                  if (
                    (o(Object(i.a)(n.prototype), "configure", this).call(this),
                    e.options.offset && t.length)
                  ) {
                    var l = (a - r) / Math.max(t.length - 1, 1) / 2;
                    (r -= l), (a += l);
                  }
                  (e._startValue = r),
                    (e._endValue = a),
                    (e._valueRange = a - r);
                },
              },
              {
                key: "getLabelForValue",
                value: function (e) {
                  return un(e, this.chart.options.locale);
                },
              },
            ]),
            n
          );
        })($r),
        si = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(h.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(p.a)(n, [
              {
                key: "determineDataLimits",
                value: function () {
                  var e = this,
                    t = e.getMinMax(!0),
                    n = t.min,
                    r = t.max;
                  (e.min = S(n) ? n : 0),
                    (e.max = S(r) ? r : 1),
                    e.handleTickRangeOptions();
                },
              },
              {
                key: "computeTickLimit",
                value: function () {
                  var e = this;
                  if (e.isHorizontal()) return Math.ceil(e.width / 40);
                  var t = e._resolveTickFontOptions(0);
                  return Math.ceil(e.height / t.lineHeight);
                },
              },
              {
                key: "getPixelForValue",
                value: function (e) {
                  return null === e
                    ? NaN
                    : this.getPixelForDecimal(
                        (e - this._startValue) / this._valueRange
                      );
                },
              },
              {
                key: "getValueForPixel",
                value: function (e) {
                  return (
                    this._startValue +
                    this.getDecimalForPixel(e) * this._valueRange
                  );
                },
              },
            ]),
            n
          );
        })(ui);
      function ci(e) {
        return 1 === e / Math.pow(10, Math.floor(K(e)));
      }
      (si.id = "linear"),
        (si.defaults = { ticks: { callback: Ar.formatters.numeric } });
      var fi = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n(e) {
          var r;
          return (
            Object(h.a)(this, n),
            ((r = t.call(this, e)).start = void 0),
            (r.end = void 0),
            (r._startValue = void 0),
            (r._valueRange = 0),
            r
          );
        }
        return (
          Object(p.a)(n, [
            {
              key: "parse",
              value: function (e, t) {
                var n = ui.prototype.parse.apply(this, [e, t]);
                if (0 !== n) return S(n) && n > 0 ? n : null;
                this._zero = !0;
              },
            },
            {
              key: "determineDataLimits",
              value: function () {
                var e = this,
                  t = e.getMinMax(!0),
                  n = t.min,
                  r = t.max;
                (e.min = S(n) ? Math.max(0, n) : null),
                  (e.max = S(r) ? Math.max(0, r) : null),
                  e.options.beginAtZero && (e._zero = !0),
                  e.handleTickRangeOptions();
              },
            },
            {
              key: "handleTickRangeOptions",
              value: function () {
                var e = this,
                  t = e.getUserBounds(),
                  n = t.minDefined,
                  r = t.maxDefined,
                  a = e.min,
                  i = e.max,
                  o = function (e) {
                    return (a = n ? a : e);
                  },
                  l = function (e) {
                    return (i = r ? i : e);
                  },
                  u = function (e, t) {
                    return Math.pow(10, Math.floor(K(e)) + t);
                  };
                a === i && (a <= 0 ? (o(1), l(10)) : (o(u(a, -1)), l(u(i, 1)))),
                  a <= 0 && o(u(i, -1)),
                  i <= 0 && l(u(a, 1)),
                  e._zero &&
                    e.min !== e._suggestedMin &&
                    a === u(e.min, 0) &&
                    o(u(a, -1)),
                  (e.min = a),
                  (e.max = i);
              },
            },
            {
              key: "buildTicks",
              value: function () {
                var e = this,
                  t = e.options,
                  n = (function (e, t) {
                    var n = Math.floor(K(t.max)),
                      r = Math.ceil(t.max / Math.pow(10, n)),
                      a = [],
                      i = O(e.min, Math.pow(10, Math.floor(K(t.min)))),
                      o = Math.floor(K(i)),
                      l = Math.floor(i / Math.pow(10, o)),
                      u = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
                    do {
                      a.push({ value: i, major: ci(i) }),
                        10 === ++l && ((l = 1), (u = ++o >= 0 ? 1 : u)),
                        (i = Math.round(l * Math.pow(10, o) * u) / u);
                    } while (o < n || (o === n && l < r));
                    var s = O(e.max, i);
                    return a.push({ value: s, major: ci(i) }), a;
                  })({ min: e._userMin, max: e._userMax }, e);
                return (
                  "ticks" === t.bounds && te(n, e, "value"),
                  t.reverse
                    ? (n.reverse(), (e.start = e.max), (e.end = e.min))
                    : ((e.start = e.min), (e.end = e.max)),
                  n
                );
              },
            },
            {
              key: "getLabelForValue",
              value: function (e) {
                return void 0 === e ? "0" : un(e, this.chart.options.locale);
              },
            },
            {
              key: "configure",
              value: function () {
                var e = this,
                  t = e.min;
                o(Object(i.a)(n.prototype), "configure", this).call(this),
                  (e._startValue = K(t)),
                  (e._valueRange = K(e.max) - K(t));
              },
            },
            {
              key: "getPixelForValue",
              value: function (e) {
                var t = this;
                return (
                  (void 0 !== e && 0 !== e) || (e = t.min),
                  null === e || isNaN(e)
                    ? NaN
                    : t.getPixelForDecimal(
                        e === t.min ? 0 : (K(e) - t._startValue) / t._valueRange
                      )
                );
              },
            },
            {
              key: "getValueForPixel",
              value: function (e) {
                var t = this,
                  n = t.getDecimalForPixel(e);
                return Math.pow(10, t._startValue + n * t._valueRange);
              },
            },
          ]),
          n
        );
      })($r);
      function di(e) {
        var t = e.ticks;
        if (t.display && e.display) {
          var n = mt(t.backdropPadding);
          return M(t.font && t.font.size, Ze.font.size) + n.height;
        }
        return 0;
      }
      function hi(e, t, n, r, a) {
        return e === r || e === a
          ? { start: t - n / 2, end: t + n / 2 }
          : e < r || e > a
          ? { start: t - n, end: t }
          : { start: t, end: t + n };
      }
      function pi(e) {
        return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right";
      }
      function vi(e, t, n) {
        90 === e || 270 === e
          ? (n.y -= t.h / 2)
          : (e > 270 || e < 90) && (n.y -= t.h);
      }
      function gi(e, t, n, r) {
        var a = e.ctx;
        if (n) a.arc(e.xCenter, e.yCenter, t, 0, U);
        else {
          var i = e.getPointPosition(0, t);
          a.moveTo(i.x, i.y);
          for (var o = 1; o < r; o++)
            (i = e.getPointPosition(o, t)), a.lineTo(i.x, i.y);
        }
      }
      function mi(e) {
        return J(e) ? e : 0;
      }
      (fi.id = "logarithmic"),
        (fi.defaults = {
          ticks: {
            callback: Ar.formatters.logarithmic,
            major: { enabled: !0 },
          },
        });
      var yi = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n(e) {
          var r;
          return (
            Object(h.a)(this, n),
            ((r = t.call(this, e)).xCenter = void 0),
            (r.yCenter = void 0),
            (r.drawingArea = void 0),
            (r._pointLabels = []),
            (r._pointLabelItems = []),
            r
          );
        }
        return (
          Object(p.a)(n, [
            {
              key: "setDimensions",
              value: function () {
                var e = this;
                (e.width = e.maxWidth),
                  (e.height = e.maxHeight),
                  (e.paddingTop = di(e.options) / 2),
                  (e.xCenter = Math.floor(e.width / 2)),
                  (e.yCenter = Math.floor((e.height - e.paddingTop) / 2)),
                  (e.drawingArea =
                    Math.min(e.height - e.paddingTop, e.width) / 2);
              },
            },
            {
              key: "determineDataLimits",
              value: function () {
                var e = this,
                  t = e.getMinMax(!1),
                  n = t.min,
                  r = t.max;
                (e.min = S(n) && !isNaN(n) ? n : 0),
                  (e.max = S(r) && !isNaN(r) ? r : 0),
                  e.handleTickRangeOptions();
              },
            },
            {
              key: "computeTickLimit",
              value: function () {
                return Math.ceil(this.drawingArea / di(this.options));
              },
            },
            {
              key: "generateTickLabels",
              value: function (e) {
                var t = this;
                ui.prototype.generateTickLabels.call(t, e),
                  (t._pointLabels = t.getLabels().map(function (e, n) {
                    var r = C(t.options.pointLabels.callback, [e, n], t);
                    return r || 0 === r ? r : "";
                  }));
              },
            },
            {
              key: "fit",
              value: function () {
                var e = this,
                  t = e.options;
                t.display && t.pointLabels.display
                  ? (function (e) {
                      var t,
                        n,
                        r,
                        a,
                        i,
                        o,
                        l = {
                          l: 0,
                          r: e.width,
                          t: 0,
                          b: e.height - e.paddingTop,
                        },
                        u = {},
                        s = [],
                        c = [],
                        f = e.getLabels().length;
                      for (t = 0; t < f; t++) {
                        var d = e.options.pointLabels.setContext(
                          e.getContext(t)
                        );
                        (c[t] = d.padding),
                          (r = e.getPointPosition(t, e.drawingArea + c[t]));
                        var h = yt(d.font);
                        (e.ctx.font = h.string),
                          (a = e.ctx),
                          (i = h.lineHeight),
                          (n = _((o = e._pointLabels[t]))
                            ? { w: et(a, a.font, o), h: o.length * i }
                            : { w: a.measureText(o).width, h: i }),
                          (s[t] = n);
                        var p = e.getIndexAngle(t),
                          v = re(p),
                          g = hi(v, r.x, n.w, 0, 180),
                          m = hi(v, r.y, n.h, 90, 270);
                        g.start < l.l && ((l.l = g.start), (u.l = p)),
                          g.end > l.r && ((l.r = g.end), (u.r = p)),
                          m.start < l.t && ((l.t = m.start), (u.t = p)),
                          m.end > l.b && ((l.b = m.end), (u.b = p));
                      }
                      e._setReductions(e.drawingArea, l, u),
                        (e._pointLabelItems = []);
                      var y = e.options,
                        b = di(y),
                        x = e.getDistanceFromCenterForValue(
                          y.ticks.reverse ? e.min : e.max
                        );
                      for (t = 0; t < f; t++) {
                        var k = 0 === t ? b / 2 : 0,
                          w = e.getPointPosition(t, x + k + c[t]),
                          S = re(e.getIndexAngle(t)),
                          O = s[t];
                        vi(S, O, w);
                        var M = pi(S),
                          E = void 0,
                          C =
                            (E =
                              "left" === M
                                ? w.x
                                : "center" === M
                                ? w.x - O.w / 2
                                : w.x - O.w) + O.w;
                        e._pointLabelItems[t] = {
                          x: w.x,
                          y: w.y,
                          textAlign: M,
                          left: E,
                          top: w.y,
                          right: C,
                          bottom: w.y + O.h,
                        };
                      }
                    })(e)
                  : e.setCenterPoint(0, 0, 0, 0);
              },
            },
            {
              key: "_setReductions",
              value: function (e, t, n) {
                var r = this,
                  a = t.l / Math.sin(n.l),
                  i = Math.max(t.r - r.width, 0) / Math.sin(n.r),
                  o = -t.t / Math.cos(n.t),
                  l =
                    -Math.max(t.b - (r.height - r.paddingTop), 0) /
                    Math.cos(n.b);
                (a = mi(a)),
                  (i = mi(i)),
                  (o = mi(o)),
                  (l = mi(l)),
                  (r.drawingArea = Math.max(
                    e / 2,
                    Math.min(
                      Math.floor(e - (a + i) / 2),
                      Math.floor(e - (o + l) / 2)
                    )
                  )),
                  r.setCenterPoint(a, i, o, l);
              },
            },
            {
              key: "setCenterPoint",
              value: function (e, t, n, r) {
                var a = this,
                  i = a.width - t - a.drawingArea,
                  o = e + a.drawingArea,
                  l = n + a.drawingArea,
                  u = a.height - a.paddingTop - r - a.drawingArea;
                (a.xCenter = Math.floor((o + i) / 2 + a.left)),
                  (a.yCenter = Math.floor((l + u) / 2 + a.top + a.paddingTop));
              },
            },
            {
              key: "getIndexAngle",
              value: function (e) {
                return oe(
                  e * (U / this.getLabels().length) +
                    ne(this.options.startAngle || 0)
                );
              },
            },
            {
              key: "getDistanceFromCenterForValue",
              value: function (e) {
                var t = this;
                if (k(e)) return NaN;
                var n = t.drawingArea / (t.max - t.min);
                return t.options.reverse ? (t.max - e) * n : (e - t.min) * n;
              },
            },
            {
              key: "getValueForDistanceFromCenter",
              value: function (e) {
                if (k(e)) return NaN;
                var t = this,
                  n = e / (t.drawingArea / (t.max - t.min));
                return t.options.reverse ? t.max - n : t.min + n;
              },
            },
            {
              key: "getPointPosition",
              value: function (e, t) {
                var n = this,
                  r = n.getIndexAngle(e) - Q;
                return {
                  x: Math.cos(r) * t + n.xCenter,
                  y: Math.sin(r) * t + n.yCenter,
                  angle: r,
                };
              },
            },
            {
              key: "getPointPositionForValue",
              value: function (e, t) {
                return this.getPointPosition(
                  e,
                  this.getDistanceFromCenterForValue(t)
                );
              },
            },
            {
              key: "getBasePosition",
              value: function (e) {
                return this.getPointPositionForValue(
                  e || 0,
                  this.getBaseValue()
                );
              },
            },
            {
              key: "getPointLabelPosition",
              value: function (e) {
                var t = this._pointLabelItems[e];
                return {
                  left: t.left,
                  top: t.top,
                  right: t.right,
                  bottom: t.bottom,
                };
              },
            },
            {
              key: "drawBackground",
              value: function () {
                var e = this,
                  t = e.options,
                  n = t.backgroundColor,
                  r = t.grid.circular;
                if (n) {
                  var a = e.ctx;
                  a.save(),
                    a.beginPath(),
                    gi(
                      e,
                      e.getDistanceFromCenterForValue(e._endValue),
                      r,
                      e.getLabels().length
                    ),
                    a.closePath(),
                    (a.fillStyle = n),
                    a.fill(),
                    a.restore();
                }
              },
            },
            {
              key: "drawGrid",
              value: function () {
                var e,
                  t,
                  n,
                  r = this,
                  a = r.ctx,
                  i = r.options,
                  o = i.angleLines,
                  l = i.grid,
                  u = r.getLabels().length;
                if (
                  (i.pointLabels.display &&
                    (function (e, t) {
                      for (
                        var n = e.ctx, r = e.options.pointLabels, a = t - 1;
                        a >= 0;
                        a--
                      ) {
                        var i = r.setContext(e.getContext(a)),
                          o = yt(i.font),
                          l = e._pointLabelItems[a],
                          u = l.x,
                          s = l.y,
                          c = l.textAlign,
                          f = l.left,
                          d = l.top,
                          h = l.right,
                          p = l.bottom,
                          v = i.backdropColor;
                        if (!k(v)) {
                          var g = mt(i.backdropPadding);
                          (n.fillStyle = v),
                            n.fillRect(
                              f - g.left,
                              d - g.top,
                              h - f + g.width,
                              p - d + g.height
                            );
                        }
                        st(n, e._pointLabels[a], u, s + o.lineHeight / 2, o, {
                          color: i.color,
                          textAlign: c,
                          textBaseline: "middle",
                        });
                      }
                    })(r, u),
                  l.display &&
                    r.ticks.forEach(function (e, n) {
                      if (0 !== n) {
                        t = r.getDistanceFromCenterForValue(e.value);
                        var a = l.setContext(r.getContext(n - 1));
                        !(function (e, t, n, r) {
                          var a = e.ctx,
                            i = t.circular,
                            o = t.color,
                            l = t.lineWidth;
                          (!i && !r) ||
                            !o ||
                            !l ||
                            n < 0 ||
                            (a.save(),
                            (a.strokeStyle = o),
                            (a.lineWidth = l),
                            a.setLineDash(t.borderDash),
                            (a.lineDashOffset = t.borderDashOffset),
                            a.beginPath(),
                            gi(e, n, i, r),
                            a.closePath(),
                            a.stroke(),
                            a.restore());
                        })(r, a, t, u);
                      }
                    }),
                  o.display)
                ) {
                  for (a.save(), e = r.getLabels().length - 1; e >= 0; e--) {
                    var s = o.setContext(r.getContext(e)),
                      c = s.color,
                      f = s.lineWidth;
                    f &&
                      c &&
                      ((a.lineWidth = f),
                      (a.strokeStyle = c),
                      a.setLineDash(s.borderDash),
                      (a.lineDashOffset = s.borderDashOffset),
                      (t = r.getDistanceFromCenterForValue(
                        i.ticks.reverse ? r.min : r.max
                      )),
                      (n = r.getPointPosition(e, t)),
                      a.beginPath(),
                      a.moveTo(r.xCenter, r.yCenter),
                      a.lineTo(n.x, n.y),
                      a.stroke());
                  }
                  a.restore();
                }
              },
            },
            {
              key: "drawLabels",
              value: function () {
                var e = this,
                  t = e.ctx,
                  n = e.options,
                  r = n.ticks;
                if (r.display) {
                  var a,
                    i,
                    o = e.getIndexAngle(0);
                  t.save(),
                    t.translate(e.xCenter, e.yCenter),
                    t.rotate(o),
                    (t.textAlign = "center"),
                    (t.textBaseline = "middle"),
                    e.ticks.forEach(function (o, l) {
                      if (0 !== l || n.reverse) {
                        var u = r.setContext(e.getContext(l)),
                          s = yt(u.font);
                        if (
                          ((a = e.getDistanceFromCenterForValue(
                            e.ticks[l].value
                          )),
                          u.showLabelBackdrop)
                        ) {
                          (i = t.measureText(o.label).width),
                            (t.fillStyle = u.backdropColor);
                          var c = mt(u.backdropPadding);
                          t.fillRect(
                            -i / 2 - c.left,
                            -a - s.size / 2 - c.top,
                            i + c.width,
                            s.size + c.height
                          );
                        }
                        st(t, o.label, 0, -a, s, { color: u.color });
                      }
                    }),
                    t.restore();
                }
              },
            },
            { key: "drawTitle", value: function () {} },
          ]),
          n
        );
      })(ui);
      (yi.id = "radialLinear"),
        (yi.defaults = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0,
          },
          grid: { circular: !1 },
          startAngle: 0,
          ticks: {
            showLabelBackdrop: !0,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPadding: 2,
            callback: Ar.formatters.numeric,
          },
          pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: { size: 10 },
            callback: function (e) {
              return e;
            },
            padding: 5,
          },
        }),
        (yi.defaultRoutes = {
          "angleLines.color": "borderColor",
          "pointLabels.color": "color",
          "ticks.color": "color",
        }),
        (yi.descriptors = { angleLines: { _fallback: "grid" } });
      var bi = {
          millisecond: { common: !0, size: 1, steps: 1e3 },
          second: { common: !0, size: 1e3, steps: 60 },
          minute: { common: !0, size: 6e4, steps: 60 },
          hour: { common: !0, size: 36e5, steps: 24 },
          day: { common: !0, size: 864e5, steps: 30 },
          week: { common: !1, size: 6048e5, steps: 4 },
          month: { common: !0, size: 2628e6, steps: 12 },
          quarter: { common: !1, size: 7884e6, steps: 4 },
          year: { common: !0, size: 3154e7 },
        },
        xi = Object.keys(bi);
      function ki(e, t) {
        return e - t;
      }
      function _i(e, t) {
        if (k(t)) return null;
        var n = e._adapter,
          r = e.options.time,
          a = r.parser,
          i = r.round,
          o = r.isoWeekday,
          l = t;
        return (
          "function" === typeof a && (l = a(l)),
          S(l) || (l = "string" === typeof a ? n.parse(l, a) : n.parse(l)),
          null === l
            ? null
            : (i &&
                (l =
                  "week" !== i || (!J(o) && !0 !== o)
                    ? n.startOf(l, i)
                    : n.startOf(l, "isoWeek", o)),
              +l)
        );
      }
      function wi(e, t, n, r) {
        for (var a = xi.length, i = xi.indexOf(e); i < a - 1; ++i) {
          var o = bi[xi[i]],
            l = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
          if (o.common && Math.ceil((n - t) / (l * o.size)) <= r) return xi[i];
        }
        return xi[a - 1];
      }
      function Si(e, t, n) {
        if (n) {
          if (n.length) {
            var r = xt(n, t),
              a = r.lo,
              i = r.hi;
            e[n[a] >= t ? n[a] : n[i]] = !0;
          }
        } else e[t] = !0;
      }
      function Oi(e, t, n) {
        var r,
          a,
          i = [],
          o = {},
          l = t.length;
        for (r = 0; r < l; ++r)
          (o[(a = t[r])] = r), i.push({ value: a, major: !1 });
        return 0 !== l && n
          ? (function (e, t, n, r) {
              var a,
                i,
                o = e._adapter,
                l = +o.startOf(t[0].value, r),
                u = t[t.length - 1].value;
              for (a = l; a <= u; a = +o.add(a, 1, r))
                (i = n[a]) >= 0 && (t[i].major = !0);
              return t;
            })(e, i, o, n)
          : i;
      }
      var Mi = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n(e) {
          var r;
          return (
            Object(h.a)(this, n),
            ((r = t.call(this, e))._cache = { data: [], labels: [], all: [] }),
            (r._unit = "day"),
            (r._majorUnit = void 0),
            (r._offsets = {}),
            (r._normalized = !1),
            r
          );
        }
        return (
          Object(p.a)(n, [
            {
              key: "init",
              value: function (e, t) {
                var r = e.time || (e.time = {}),
                  a = (this._adapter = new Kn._date(e.adapters.date));
                A(r.displayFormats, a.formats()),
                  o(Object(i.a)(n.prototype), "init", this).call(this, e),
                  (this._normalized = t.normalized);
              },
            },
            {
              key: "parse",
              value: function (e, t) {
                return void 0 === e ? null : _i(this, e);
              },
            },
            {
              key: "beforeLayout",
              value: function () {
                o(Object(i.a)(n.prototype), "beforeLayout", this).call(this),
                  (this._cache = { data: [], labels: [], all: [] });
              },
            },
            {
              key: "determineDataLimits",
              value: function () {
                var e = this,
                  t = e.options,
                  n = e._adapter,
                  r = t.time.unit || "day",
                  a = e.getUserBounds(),
                  i = a.min,
                  o = a.max,
                  l = a.minDefined,
                  u = a.maxDefined;
                function s(e) {
                  l || isNaN(e.min) || (i = Math.min(i, e.min)),
                    u || isNaN(e.max) || (o = Math.max(o, e.max));
                }
                (l && u) ||
                  (s(e._getLabelBounds()),
                  ("ticks" === t.bounds && "labels" === t.ticks.source) ||
                    s(e.getMinMax(!1))),
                  (i = S(i) && !isNaN(i) ? i : +n.startOf(Date.now(), r)),
                  (o = S(o) && !isNaN(o) ? o : +n.endOf(Date.now(), r) + 1),
                  (e.min = Math.min(i, o - 1)),
                  (e.max = Math.max(i + 1, o));
              },
            },
            {
              key: "_getLabelBounds",
              value: function () {
                var e = this.getLabelTimestamps(),
                  t = Number.POSITIVE_INFINITY,
                  n = Number.NEGATIVE_INFINITY;
                return (
                  e.length && ((t = e[0]), (n = e[e.length - 1])),
                  { min: t, max: n }
                );
              },
            },
            {
              key: "buildTicks",
              value: function () {
                var e = this,
                  t = e.options,
                  n = t.time,
                  r = t.ticks,
                  a =
                    "labels" === r.source
                      ? e.getLabelTimestamps()
                      : e._generate();
                "ticks" === t.bounds &&
                  a.length &&
                  ((e.min = e._userMin || a[0]),
                  (e.max = e._userMax || a[a.length - 1]));
                var i = e.min,
                  o = (function (e, t, n) {
                    for (var r = 0, a = e.length; r < a && e[r] < t; ) r++;
                    for (; a > r && e[a - 1] > n; ) a--;
                    return r > 0 || a < e.length ? e.slice(r, a) : e;
                  })(a, i, e.max);
                return (
                  (e._unit =
                    n.unit ||
                    (r.autoSkip
                      ? wi(n.minUnit, e.min, e.max, e._getLabelCapacity(i))
                      : (function (e, t, n, r, a) {
                          for (var i = xi.length - 1; i >= xi.indexOf(n); i--) {
                            var o = xi[i];
                            if (
                              bi[o].common &&
                              e._adapter.diff(a, r, o) >= t - 1
                            )
                              return o;
                          }
                          return xi[n ? xi.indexOf(n) : 0];
                        })(e, o.length, n.minUnit, e.min, e.max))),
                  (e._majorUnit =
                    r.major.enabled && "year" !== e._unit
                      ? (function (e) {
                          for (
                            var t = xi.indexOf(e) + 1, n = xi.length;
                            t < n;
                            ++t
                          )
                            if (bi[xi[t]].common) return xi[t];
                        })(e._unit)
                      : void 0),
                  e.initOffsets(a),
                  t.reverse && o.reverse(),
                  Oi(e, o, e._majorUnit)
                );
              },
            },
            {
              key: "initOffsets",
              value: function (e) {
                var t,
                  n,
                  r = this,
                  a = 0,
                  i = 0;
                r.options.offset &&
                  e.length &&
                  ((t = r.getDecimalForValue(e[0])),
                  (a =
                    1 === e.length
                      ? 1 - t
                      : (r.getDecimalForValue(e[1]) - t) / 2),
                  (n = r.getDecimalForValue(e[e.length - 1])),
                  (i =
                    1 === e.length
                      ? n
                      : (n - r.getDecimalForValue(e[e.length - 2])) / 2));
                var o = e.length < 3 ? 0.5 : 0.25;
                (a = ue(a, 0, o)),
                  (i = ue(i, 0, o)),
                  (r._offsets = { start: a, end: i, factor: 1 / (a + 1 + i) });
              },
            },
            {
              key: "_generate",
              value: function () {
                var e,
                  t,
                  n = this,
                  r = n._adapter,
                  a = n.min,
                  i = n.max,
                  o = n.options,
                  l = o.time,
                  u = l.unit || wi(l.minUnit, a, i, n._getLabelCapacity(a)),
                  s = M(l.stepSize, 1),
                  c = "week" === u && l.isoWeekday,
                  f = J(c) || !0 === c,
                  d = {},
                  h = a;
                if (
                  (f && (h = +r.startOf(h, "isoWeek", c)),
                  (h = +r.startOf(h, f ? "day" : u)),
                  r.diff(i, a, u) > 1e5 * s)
                )
                  throw new Error(
                    a +
                      " and " +
                      i +
                      " are too far apart with stepSize of " +
                      s +
                      " " +
                      u
                  );
                var p = "data" === o.ticks.source && n.getDataTimestamps();
                for (e = h, t = 0; e < i; e = +r.add(e, s, u), t++) Si(d, e, p);
                return (
                  (e !== i && "ticks" !== o.bounds && 1 !== t) || Si(d, e, p),
                  Object.keys(d)
                    .sort(function (e, t) {
                      return e - t;
                    })
                    .map(function (e) {
                      return +e;
                    })
                );
              },
            },
            {
              key: "getLabelForValue",
              value: function (e) {
                var t = this._adapter,
                  n = this.options.time;
                return n.tooltipFormat
                  ? t.format(e, n.tooltipFormat)
                  : t.format(e, n.displayFormats.datetime);
              },
            },
            {
              key: "_tickFormatFunction",
              value: function (e, t, n, r) {
                var a = this,
                  i = a.options,
                  o = i.time.displayFormats,
                  l = a._unit,
                  u = a._majorUnit,
                  s = l && o[l],
                  c = u && o[u],
                  f = n[t],
                  d = u && c && f && f.major,
                  h = a._adapter.format(e, r || (d ? c : s)),
                  p = i.ticks.callback;
                return p ? C(p, [h, t, n], a) : h;
              },
            },
            {
              key: "generateTickLabels",
              value: function (e) {
                var t, n, r;
                for (t = 0, n = e.length; t < n; ++t)
                  (r = e[t]).label = this._tickFormatFunction(r.value, t, e);
              },
            },
            {
              key: "getDecimalForValue",
              value: function (e) {
                var t = this;
                return null === e ? NaN : (e - t.min) / (t.max - t.min);
              },
            },
            {
              key: "getPixelForValue",
              value: function (e) {
                var t = this,
                  n = t._offsets,
                  r = t.getDecimalForValue(e);
                return t.getPixelForDecimal((n.start + r) * n.factor);
              },
            },
            {
              key: "getValueForPixel",
              value: function (e) {
                var t = this,
                  n = t._offsets,
                  r = t.getDecimalForPixel(e) / n.factor - n.end;
                return t.min + r * (t.max - t.min);
              },
            },
            {
              key: "_getLabelSize",
              value: function (e) {
                var t = this,
                  n = t.options.ticks,
                  r = t.ctx.measureText(e).width,
                  a = ne(t.isHorizontal() ? n.maxRotation : n.minRotation),
                  i = Math.cos(a),
                  o = Math.sin(a),
                  l = t._resolveTickFontOptions(0).size;
                return { w: r * i + l * o, h: r * o + l * i };
              },
            },
            {
              key: "_getLabelCapacity",
              value: function (e) {
                var t = this,
                  n = t.options.time,
                  r = n.displayFormats,
                  a = r[n.unit] || r.millisecond,
                  i = t._tickFormatFunction(e, 0, Oi(t, [e], t._majorUnit), a),
                  o = t._getLabelSize(i),
                  l =
                    Math.floor(
                      t.isHorizontal() ? t.width / o.w : t.height / o.h
                    ) - 1;
                return l > 0 ? l : 1;
              },
            },
            {
              key: "getDataTimestamps",
              value: function () {
                var e,
                  t,
                  n = this,
                  r = n._cache.data || [];
                if (r.length) return r;
                var a = n.getMatchingVisibleMetas();
                if (n._normalized && a.length)
                  return (n._cache.data = a[0].controller.getAllParsedValues(
                    n
                  ));
                for (e = 0, t = a.length; e < t; ++e)
                  r = r.concat(a[e].controller.getAllParsedValues(n));
                return (n._cache.data = n.normalize(r));
              },
            },
            {
              key: "getLabelTimestamps",
              value: function () {
                var e,
                  t,
                  n = this,
                  r = n._cache.labels || [];
                if (r.length) return r;
                var a = n.getLabels();
                for (e = 0, t = a.length; e < t; ++e) r.push(_i(n, a[e]));
                return (n._cache.labels = n._normalized ? r : n.normalize(r));
              },
            },
            {
              key: "normalize",
              value: function (e) {
                return Ot(e.sort(ki));
              },
            },
          ]),
          n
        );
      })($r);
      function Ei(e, t, n) {
        var r, a, i, o;
        if (n) (r = Math.floor(t)), (a = Math.ceil(t)), (i = e[r]), (o = e[a]);
        else {
          var l = xt(e, t);
          (i = l.lo), (o = l.hi), (r = e[i]), (a = e[o]);
        }
        var u = a - r;
        return u ? i + ((o - i) * (t - r)) / u : i;
      }
      (Mi.id = "time"),
        (Mi.defaults = {
          bounds: "data",
          adapters: {},
          time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {},
          },
          ticks: { source: "auto", major: { enabled: !1 } },
        });
      var Ci = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n(e) {
          var r;
          return (
            Object(h.a)(this, n),
            ((r = t.call(this, e))._table = []),
            (r._maxIndex = void 0),
            r
          );
        }
        return (
          Object(p.a)(n, [
            {
              key: "initOffsets",
              value: function () {
                var e = this,
                  t = e._getTimestampsForTable();
                (e._table = e.buildLookupTable(t)),
                  (e._maxIndex = e._table.length - 1),
                  o(Object(i.a)(n.prototype), "initOffsets", this).call(
                    this,
                    t
                  );
              },
            },
            {
              key: "buildLookupTable",
              value: function (e) {
                var t = this.min,
                  n = this.max;
                if (!e.length)
                  return [
                    { time: t, pos: 0 },
                    { time: n, pos: 1 },
                  ];
                var r,
                  a,
                  i,
                  o = [t];
                for (r = 0, a = e.length; r < a; ++r)
                  (i = e[r]) > t && i < n && o.push(i);
                return o.push(n), o;
              },
            },
            {
              key: "_getTimestampsForTable",
              value: function () {
                var e = this,
                  t = e._cache.all || [];
                if (t.length) return t;
                var n = e.getDataTimestamps(),
                  r = e.getLabelTimestamps();
                return (
                  (t =
                    n.length && r.length
                      ? e.normalize(n.concat(r))
                      : n.length
                      ? n
                      : r),
                  (t = e._cache.all = t)
                );
              },
            },
            {
              key: "getPixelForValue",
              value: function (e, t) {
                var n = this,
                  r = n._offsets,
                  a =
                    n._normalized && n._maxIndex > 0 && !k(t)
                      ? t / n._maxIndex
                      : n.getDecimalForValue(e);
                return n.getPixelForDecimal((r.start + a) * r.factor);
              },
            },
            {
              key: "getDecimalForValue",
              value: function (e) {
                return Ei(this._table, e) / this._maxIndex;
              },
            },
            {
              key: "getValueForPixel",
              value: function (e) {
                var t = this,
                  n = t._offsets,
                  r = t.getDecimalForPixel(e) / n.factor - n.end;
                return Ei(t._table, r * this._maxIndex, !0);
              },
            },
          ]),
          n
        );
      })(Mi);
      (Ci.id = "timeseries"), (Ci.defaults = Mi.defaults);
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n(20);
      function a(e, t) {
        if (e) {
          if ("string" === typeof e) return Object(r.a)(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Object(r.a)(e, t)
              : void 0
          );
        }
      }
    },
    function (e, t, n) {
      e.exports = n(35)();
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      }),
        n.d(t, "b", function () {
          return m;
        });
      var r = n(8),
        a = n(11),
        i = n(1),
        o = n.n(i),
        l = n(14),
        u = (n(19), n(9)),
        s = n(17),
        c = n(12);
      o.a.Component;
      var f = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this).history = Object(
              l.b
            )(t.props)),
            t
          );
        }
        return (
          Object(a.a)(t, e),
          (t.prototype.render = function () {
            return o.a.createElement(r.b, {
              history: this.history,
              children: this.props.children,
            });
          }),
          t
        );
      })(o.a.Component);
      var d = function (e, t) {
          return "function" === typeof e ? e(t) : e;
        },
        h = function (e, t) {
          return "string" === typeof e ? Object(l.c)(e, null, null, t) : e;
        },
        p = function (e) {
          return e;
        },
        v = o.a.forwardRef;
      "undefined" === typeof v && (v = p);
      var g = v(function (e, t) {
        var n = e.innerRef,
          r = e.navigate,
          a = e.onClick,
          i = Object(s.a)(e, ["innerRef", "navigate", "onClick"]),
          l = i.target,
          c = Object(u.a)({}, i, {
            onClick: function (e) {
              try {
                a && a(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (l && "_self" !== l) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), r());
            },
          });
        return (c.ref = (p !== v && t) || n), o.a.createElement("a", c);
      });
      var m = v(function (e, t) {
          var n = e.component,
            a = void 0 === n ? g : n,
            i = e.replace,
            l = e.to,
            f = e.innerRef,
            m = Object(s.a)(e, ["component", "replace", "to", "innerRef"]);
          return o.a.createElement(r.d.Consumer, null, function (e) {
            e || Object(c.a)(!1);
            var n = e.history,
              r = h(d(l, e.location), e.location),
              s = r ? n.createHref(r) : "",
              g = Object(u.a)({}, m, {
                href: s,
                navigate: function () {
                  var t = d(l, e.location);
                  (i ? n.replace : n.push)(t);
                },
              });
            return (
              p !== v ? (g.ref = t || f) : (g.innerRef = f),
              o.a.createElement(a, g)
            );
          });
        }),
        y = function (e) {
          return e;
        },
        b = o.a.forwardRef;
      "undefined" === typeof b && (b = y);
      b(function (e, t) {
        var n = e["aria-current"],
          a = void 0 === n ? "page" : n,
          i = e.activeClassName,
          l = void 0 === i ? "active" : i,
          f = e.activeStyle,
          p = e.className,
          v = e.exact,
          g = e.isActive,
          x = e.location,
          k = e.sensitive,
          _ = e.strict,
          w = e.style,
          S = e.to,
          O = e.innerRef,
          M = Object(s.a)(e, [
            "aria-current",
            "activeClassName",
            "activeStyle",
            "className",
            "exact",
            "isActive",
            "location",
            "sensitive",
            "strict",
            "style",
            "to",
            "innerRef",
          ]);
        return o.a.createElement(r.d.Consumer, null, function (e) {
          e || Object(c.a)(!1);
          var n = x || e.location,
            i = h(d(S, n), n),
            s = i.pathname,
            E = s && s.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            C = E
              ? Object(r.e)(n.pathname, {
                  path: E,
                  exact: v,
                  sensitive: k,
                  strict: _,
                })
              : null,
            P = !!(g ? g(C, n) : C),
            T = P
              ? (function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return t
                    .filter(function (e) {
                      return e;
                    })
                    .join(" ");
                })(p, l)
              : p,
            D = P ? Object(u.a)({}, w, {}, f) : w,
            L = Object(u.a)(
              {
                "aria-current": (P && a) || null,
                className: T,
                style: D,
                to: i,
              },
              M
            );
          return (
            y !== b ? (L.ref = t || O) : (L.innerRef = O),
            o.a.createElement(m, L)
          );
        });
      });
    },
    ,
    function (e, t, n) {
      "use strict";
      var r = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
      function o(e) {
        if (null === e || void 0 === e)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(e);
      }
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              r[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, r)).join("")
          );
        } catch (a) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (var n, l, u = o(e), s = 1; s < arguments.length; s++) {
              for (var c in (n = Object(arguments[s])))
                a.call(n, c) && (u[c] = n[c]);
              if (r) {
                l = r(n);
                for (var f = 0; f < l.length; f++)
                  i.call(n, l[f]) && (u[l[f]] = n[l[f]]);
              }
            }
            return u;
          };
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        var r = n(1),
          a = n.n(r),
          i = n(11),
          o = n(19),
          l = n.n(o),
          u = 1073741823,
          s =
            "undefined" !== typeof globalThis
              ? globalThis
              : "undefined" !== typeof window
              ? window
              : "undefined" !== typeof e
              ? e
              : {};
        function c(e) {
          var t = [];
          return {
            on: function (e) {
              t.push(e);
            },
            off: function (e) {
              t = t.filter(function (t) {
                return t !== e;
              });
            },
            get: function () {
              return e;
            },
            set: function (n, r) {
              (e = n),
                t.forEach(function (t) {
                  return t(e, r);
                });
            },
          };
        }
        var f =
          a.a.createContext ||
          function (e, t) {
            var n,
              a,
              o =
                "__create-react-context-" +
                (function () {
                  var e = "__global_unique_id__";
                  return (s[e] = (s[e] || 0) + 1);
                })() +
                "__",
              f = (function (e) {
                function n() {
                  var t;
                  return (
                    ((t = e.apply(this, arguments) || this).emitter = c(
                      t.props.value
                    )),
                    t
                  );
                }
                Object(i.a)(n, e);
                var r = n.prototype;
                return (
                  (r.getChildContext = function () {
                    var e;
                    return ((e = {})[o] = this.emitter), e;
                  }),
                  (r.componentWillReceiveProps = function (e) {
                    if (this.props.value !== e.value) {
                      var n,
                        r = this.props.value,
                        a = e.value;
                      (
                        (i = r) === (o = a)
                          ? 0 !== i || 1 / i === 1 / o
                          : i !== i && o !== o
                      )
                        ? (n = 0)
                        : ((n = "function" === typeof t ? t(r, a) : u),
                          0 !== (n |= 0) && this.emitter.set(e.value, n));
                    }
                    var i, o;
                  }),
                  (r.render = function () {
                    return this.props.children;
                  }),
                  n
                );
              })(r.Component);
            f.childContextTypes = (((n = {})[o] = l.a.object.isRequired), n);
            var d = (function (t) {
              function n() {
                var e;
                return (
                  ((e = t.apply(this, arguments) || this).state = {
                    value: e.getValue(),
                  }),
                  (e.onUpdate = function (t, n) {
                    0 !== ((0 | e.observedBits) & n) &&
                      e.setState({ value: e.getValue() });
                  }),
                  e
                );
              }
              Object(i.a)(n, t);
              var r = n.prototype;
              return (
                (r.componentWillReceiveProps = function (e) {
                  var t = e.observedBits;
                  this.observedBits = void 0 === t || null === t ? u : t;
                }),
                (r.componentDidMount = function () {
                  this.context[o] && this.context[o].on(this.onUpdate);
                  var e = this.props.observedBits;
                  this.observedBits = void 0 === e || null === e ? u : e;
                }),
                (r.componentWillUnmount = function () {
                  this.context[o] && this.context[o].off(this.onUpdate);
                }),
                (r.getValue = function () {
                  return this.context[o] ? this.context[o].get() : e;
                }),
                (r.render = function () {
                  return ((e = this.props.children),
                  Array.isArray(e) ? e[0] : e)(this.state.value);
                  var e;
                }),
                n
              );
            })(r.Component);
            return (
              (d.contextTypes = (((a = {})[o] = l.a.object), a)),
              { Provider: f, Consumer: d }
            );
          };
        t.a = f;
      }.call(this, n(37)));
    },
    function (e, t, n) {
      var r = n(38);
      (e.exports = h),
        (e.exports.parse = i),
        (e.exports.compile = function (e, t) {
          return l(i(e, t), t);
        }),
        (e.exports.tokensToFunction = l),
        (e.exports.tokensToRegExp = d);
      var a = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
      function i(e, t) {
        for (
          var n, r = [], i = 0, o = 0, l = "", c = (t && t.delimiter) || "/";
          null != (n = a.exec(e));

        ) {
          var f = n[0],
            d = n[1],
            h = n.index;
          if (((l += e.slice(o, h)), (o = h + f.length), d)) l += d[1];
          else {
            var p = e[o],
              v = n[2],
              g = n[3],
              m = n[4],
              y = n[5],
              b = n[6],
              x = n[7];
            l && (r.push(l), (l = ""));
            var k = null != v && null != p && p !== v,
              _ = "+" === b || "*" === b,
              w = "?" === b || "*" === b,
              S = n[2] || c,
              O = m || y;
            r.push({
              name: g || i++,
              prefix: v || "",
              delimiter: S,
              optional: w,
              repeat: _,
              partial: k,
              asterisk: !!x,
              pattern: O ? s(O) : x ? ".*" : "[^" + u(S) + "]+?",
            });
          }
        }
        return o < e.length && (l += e.substr(o)), l && r.push(l), r;
      }
      function o(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function l(e, t) {
        for (var n = new Array(e.length), a = 0; a < e.length; a++)
          "object" === typeof e[a] &&
            (n[a] = new RegExp("^(?:" + e[a].pattern + ")$", f(t)));
        return function (t, a) {
          for (
            var i = "",
              l = t || {},
              u = (a || {}).pretty ? o : encodeURIComponent,
              s = 0;
            s < e.length;
            s++
          ) {
            var c = e[s];
            if ("string" !== typeof c) {
              var f,
                d = l[c.name];
              if (null == d) {
                if (c.optional) {
                  c.partial && (i += c.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + c.name + '" to be defined');
              }
              if (r(d)) {
                if (!c.repeat)
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to not repeat, but received `' +
                      JSON.stringify(d) +
                      "`"
                  );
                if (0 === d.length) {
                  if (c.optional) continue;
                  throw new TypeError(
                    'Expected "' + c.name + '" to not be empty'
                  );
                }
                for (var h = 0; h < d.length; h++) {
                  if (((f = u(d[h])), !n[s].test(f)))
                    throw new TypeError(
                      'Expected all "' +
                        c.name +
                        '" to match "' +
                        c.pattern +
                        '", but received `' +
                        JSON.stringify(f) +
                        "`"
                    );
                  i += (0 === h ? c.prefix : c.delimiter) + f;
                }
              } else {
                if (
                  ((f = c.asterisk
                    ? encodeURI(d).replace(/[?#]/g, function (e) {
                        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : u(d)),
                  !n[s].test(f))
                )
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to match "' +
                      c.pattern +
                      '", but received "' +
                      f +
                      '"'
                  );
                i += c.prefix + f;
              }
            } else i += c;
          }
          return i;
        };
      }
      function u(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
      }
      function s(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1");
      }
      function c(e, t) {
        return (e.keys = t), e;
      }
      function f(e) {
        return e && e.sensitive ? "" : "i";
      }
      function d(e, t, n) {
        r(t) || ((n = t || n), (t = []));
        for (
          var a = (n = n || {}).strict, i = !1 !== n.end, o = "", l = 0;
          l < e.length;
          l++
        ) {
          var s = e[l];
          if ("string" === typeof s) o += u(s);
          else {
            var d = u(s.prefix),
              h = "(?:" + s.pattern + ")";
            t.push(s),
              s.repeat && (h += "(?:" + d + h + ")*"),
              (o += h = s.optional
                ? s.partial
                  ? d + "(" + h + ")?"
                  : "(?:" + d + "(" + h + "))?"
                : d + "(" + h + ")");
          }
        }
        var p = u(n.delimiter || "/"),
          v = o.slice(-p.length) === p;
        return (
          a || (o = (v ? o.slice(0, -p.length) : o) + "(?:" + p + "(?=$))?"),
          (o += i ? "$" : a && v ? "" : "(?=" + p + "|$)"),
          c(new RegExp("^" + o, f(n)), t)
        );
      }
      function h(e, t, n) {
        return (
          r(t) || ((n = t || n), (t = [])),
          (n = n || {}),
          e instanceof RegExp
            ? (function (e, t) {
                var n = e.source.match(/\((?!\?)/g);
                if (n)
                  for (var r = 0; r < n.length; r++)
                    t.push({
                      name: r,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      partial: !1,
                      asterisk: !1,
                      pattern: null,
                    });
                return c(e, t);
              })(e, t)
            : r(e)
            ? (function (e, t, n) {
                for (var r = [], a = 0; a < e.length; a++)
                  r.push(h(e[a], t, n).source);
                return c(new RegExp("(?:" + r.join("|") + ")", f(n)), t);
              })(e, t, n)
            : (function (e, t, n) {
                return d(i(e, n), t, n);
              })(e, t, n)
        );
      }
    },
    function (e, t, n) {
      "use strict";
      !(function e() {
        if (
          "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
      })(),
        (e.exports = n(29));
    },
    function (e, t, n) {
      "use strict";
      var r = n(41),
        a = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        l = {};
      function u(e) {
        return r.isMemo(e) ? o : l[e.$$typeof] || a;
      }
      (l[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (l[r.Memo] = o);
      var s = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" !== typeof n) {
          if (p) {
            var a = h(n);
            a && a !== p && e(t, a, r);
          }
          var o = c(n);
          f && (o = o.concat(f(n)));
          for (var l = u(t), v = u(n), g = 0; g < o.length; ++g) {
            var m = o[g];
            if (!i[m] && (!r || !r[m]) && (!v || !v[m]) && (!l || !l[m])) {
              var y = d(n, m);
              try {
                s(t, m, y);
              } catch (b) {}
            }
          }
        }
        return t;
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(23),
        a = 60103,
        i = 60106;
      (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
      var o = 60109,
        l = 60110,
        u = 60112;
      t.Suspense = 60113;
      var s = 60115,
        c = 60116;
      if ("function" === typeof Symbol && Symbol.for) {
        var f = Symbol.for;
        (a = f("react.element")),
          (i = f("react.portal")),
          (t.Fragment = f("react.fragment")),
          (t.StrictMode = f("react.strict_mode")),
          (t.Profiler = f("react.profiler")),
          (o = f("react.provider")),
          (l = f("react.context")),
          (u = f("react.forward_ref")),
          (t.Suspense = f("react.suspense")),
          (s = f("react.memo")),
          (c = f("react.lazy"));
      }
      var d = "function" === typeof Symbol && Symbol.iterator;
      function h(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var p = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        v = {};
      function g(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = n || p);
      }
      function m() {}
      function y(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = n || p);
      }
      (g.prototype.isReactComponent = {}),
        (g.prototype.setState = function (e, t) {
          if ("object" !== typeof e && "function" !== typeof e && null != e)
            throw Error(h(85));
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (g.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (m.prototype = g.prototype);
      var b = (y.prototype = new m());
      (b.constructor = y), r(b, g.prototype), (b.isPureReactComponent = !0);
      var x = { current: null },
        k = Object.prototype.hasOwnProperty,
        _ = { key: !0, ref: !0, __self: !0, __source: !0 };
      function w(e, t, n) {
        var r,
          i = {},
          o = null,
          l = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (o = "" + t.key),
          t))
            k.call(t, r) && !_.hasOwnProperty(r) && (i[r] = t[r]);
        var u = arguments.length - 2;
        if (1 === u) i.children = n;
        else if (1 < u) {
          for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in (u = e.defaultProps)) void 0 === i[r] && (i[r] = u[r]);
        return {
          $$typeof: a,
          type: e,
          key: o,
          ref: l,
          props: i,
          _owner: x.current,
        };
      }
      function S(e) {
        return "object" === typeof e && null !== e && e.$$typeof === a;
      }
      var O = /\/+/g;
      function M(e, t) {
        return "object" === typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })("" + e.key)
          : t.toString(36);
      }
      function E(e, t, n, r, o) {
        var l = typeof e;
        ("undefined" !== l && "boolean" !== l) || (e = null);
        var u = !1;
        if (null === e) u = !0;
        else
          switch (l) {
            case "string":
            case "number":
              u = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case a:
                case i:
                  u = !0;
              }
          }
        if (u)
          return (
            (o = o((u = e))),
            (e = "" === r ? "." + M(u, 0) : r),
            Array.isArray(o)
              ? ((n = ""),
                null != e && (n = e.replace(O, "$&/") + "/"),
                E(o, t, n, "", function (e) {
                  return e;
                }))
              : null != o &&
                (S(o) &&
                  (o = (function (e, t) {
                    return {
                      $$typeof: a,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    o,
                    n +
                      (!o.key || (u && u.key === o.key)
                        ? ""
                        : ("" + o.key).replace(O, "$&/") + "/") +
                      e
                  )),
                t.push(o)),
            1
          );
        if (((u = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
          for (var s = 0; s < e.length; s++) {
            var c = r + M((l = e[s]), s);
            u += E(l, t, n, c, o);
          }
        else if (
          "function" ===
          typeof (c = (function (e) {
            return null === e || "object" !== typeof e
              ? null
              : "function" === typeof (e = (d && e[d]) || e["@@iterator"])
              ? e
              : null;
          })(e))
        )
          for (e = c.call(e), s = 0; !(l = e.next()).done; )
            u += E((l = l.value), t, n, (c = r + M(l, s++)), o);
        else if ("object" === l)
          throw (
            ((t = "" + e),
            Error(
              h(
                31,
                "[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t
              )
            ))
          );
        return u;
      }
      function C(e, t, n) {
        if (null == e) return e;
        var r = [],
          a = 0;
        return (
          E(e, r, "", "", function (e) {
            return t.call(n, e, a++);
          }),
          r
        );
      }
      function P(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()),
            (e._status = 0),
            (e._result = t),
            t.then(
              function (t) {
                0 === e._status &&
                  ((t = t.default), (e._status = 1), (e._result = t));
              },
              function (t) {
                0 === e._status && ((e._status = 2), (e._result = t));
              }
            );
        }
        if (1 === e._status) return e._result;
        throw e._result;
      }
      var T = { current: null };
      function D() {
        var e = T.current;
        if (null === e) throw Error(h(321));
        return e;
      }
      var L = {
        ReactCurrentDispatcher: T,
        ReactCurrentBatchConfig: { transition: 0 },
        ReactCurrentOwner: x,
        IsSomeRendererActing: { current: !1 },
        assign: r,
      };
      (t.Children = {
        map: C,
        forEach: function (e, t, n) {
          C(
            e,
            function () {
              t.apply(this, arguments);
            },
            n
          );
        },
        count: function (e) {
          var t = 0;
          return (
            C(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            C(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!S(e)) throw Error(h(143));
          return e;
        },
      }),
        (t.Component = g),
        (t.PureComponent = y),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
        (t.cloneElement = function (e, t, n) {
          if (null === e || void 0 === e) throw Error(h(267, e));
          var i = r({}, e.props),
            o = e.key,
            l = e.ref,
            u = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((l = t.ref), (u = x.current)),
              void 0 !== t.key && (o = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var s = e.type.defaultProps;
            for (c in t)
              k.call(t, c) &&
                !_.hasOwnProperty(c) &&
                (i[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) i.children = n;
          else if (1 < c) {
            s = Array(c);
            for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
            i.children = s;
          }
          return {
            $$typeof: a,
            type: e.type,
            key: o,
            ref: l,
            props: i,
            _owner: u,
          };
        }),
        (t.createContext = function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: l,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: o, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = w),
        (t.createFactory = function (e) {
          var t = w.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: u, render: e };
        }),
        (t.isValidElement = S),
        (t.lazy = function (e) {
          return {
            $$typeof: c,
            _payload: { _status: -1, _result: e },
            _init: P,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
        }),
        (t.useCallback = function (e, t) {
          return D().useCallback(e, t);
        }),
        (t.useContext = function (e, t) {
          return D().useContext(e, t);
        }),
        (t.useDebugValue = function () {}),
        (t.useEffect = function (e, t) {
          return D().useEffect(e, t);
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return D().useImperativeHandle(e, t, n);
        }),
        (t.useLayoutEffect = function (e, t) {
          return D().useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return D().useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return D().useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return D().useRef(e);
        }),
        (t.useState = function (e) {
          return D().useState(e);
        }),
        (t.version = "17.0.2");
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        a = n(23),
        i = n(30);
      function o(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      if (!r) throw Error(o(227));
      var l = new Set(),
        u = {};
      function s(e, t) {
        c(e, t), c(e + "Capture", t);
      }
      function c(e, t) {
        for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
      }
      var f = !(
          "undefined" === typeof window ||
          "undefined" === typeof window.document ||
          "undefined" === typeof window.document.createElement
        ),
        d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        h = Object.prototype.hasOwnProperty,
        p = {},
        v = {};
      function g(e, t, n, r, a, i, o) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = a),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = i),
          (this.removeEmptyString = o);
      }
      var m = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
          m[e] = new g(e, 0, !1, e, null, !1, !1);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var t = e[0];
          m[t] = new g(t, 1, !1, e[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            m[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          m[e] = new g(e, 2, !1, e, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            m[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          m[e] = new g(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          m[e] = new g(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          m[e] = new g(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          m[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      var y = /[\-:]([a-z])/g;
      function b(e) {
        return e[1].toUpperCase();
      }
      function x(e, t, n, r) {
        var a = m.hasOwnProperty(t) ? m[t] : null;
        (null !== a
          ? 0 === a.type
          : !r &&
            2 < t.length &&
            ("o" === t[0] || "O" === t[0]) &&
            ("n" === t[1] || "N" === t[1])) ||
          ((function (e, t, n, r) {
            if (
              null === t ||
              "undefined" === typeof t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return (
                      !r &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                          "aria-" !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, a, r) && (n = null),
          r || null === a
            ? (function (e) {
                return (
                  !!h.call(v, e) ||
                  (!h.call(p, e) &&
                    (d.test(e) ? (v[e] = !0) : ((p[e] = !0), !1)))
                );
              })(t) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : a.mustUseProperty
            ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
            : ((t = a.attributeName),
              (r = a.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n =
                    3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(y, b);
          m[t] = new g(t, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, b);
            m[t] = new g(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(y, b);
          m[t] = new g(
            t,
            1,
            !1,
            e,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          m[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (m.xlinkHref = new g(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0,
          !1
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          m[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        _ = 60103,
        w = 60106,
        S = 60107,
        O = 60108,
        M = 60114,
        E = 60109,
        C = 60110,
        P = 60112,
        T = 60113,
        D = 60120,
        L = 60115,
        j = 60116,
        R = 60121,
        A = 60128,
        z = 60129,
        F = 60130,
        N = 60131;
      if ("function" === typeof Symbol && Symbol.for) {
        var I = Symbol.for;
        (_ = I("react.element")),
          (w = I("react.portal")),
          (S = I("react.fragment")),
          (O = I("react.strict_mode")),
          (M = I("react.profiler")),
          (E = I("react.provider")),
          (C = I("react.context")),
          (P = I("react.forward_ref")),
          (T = I("react.suspense")),
          (D = I("react.suspense_list")),
          (L = I("react.memo")),
          (j = I("react.lazy")),
          (R = I("react.block")),
          I("react.scope"),
          (A = I("react.opaque.id")),
          (z = I("react.debug_trace_mode")),
          (F = I("react.offscreen")),
          (N = I("react.legacy_hidden"));
      }
      var V,
        B = "function" === typeof Symbol && Symbol.iterator;
      function W(e) {
        return null === e || "object" !== typeof e
          ? null
          : "function" === typeof (e = (B && e[B]) || e["@@iterator"])
          ? e
          : null;
      }
      function U(e) {
        if (void 0 === V)
          try {
            throw Error();
          } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            V = (t && t[1]) || "";
          }
        return "\n" + V + e;
      }
      var $ = !1;
      function H(e, t) {
        if (!e || $) return "";
        $ = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t)
            if (
              ((t = function () {
                throw Error();
              }),
              Object.defineProperty(t.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              "object" === typeof Reflect && Reflect.construct)
            ) {
              try {
                Reflect.construct(t, []);
              } catch (u) {
                var r = u;
              }
              Reflect.construct(e, [], t);
            } else {
              try {
                t.call();
              } catch (u) {
                r = u;
              }
              e.call(t.prototype);
            }
          else {
            try {
              throw Error();
            } catch (u) {
              r = u;
            }
            e();
          }
        } catch (u) {
          if (u && r && "string" === typeof u.stack) {
            for (
              var a = u.stack.split("\n"),
                i = r.stack.split("\n"),
                o = a.length - 1,
                l = i.length - 1;
              1 <= o && 0 <= l && a[o] !== i[l];

            )
              l--;
            for (; 1 <= o && 0 <= l; o--, l--)
              if (a[o] !== i[l]) {
                if (1 !== o || 1 !== l)
                  do {
                    if ((o--, 0 > --l || a[o] !== i[l]))
                      return "\n" + a[o].replace(" at new ", " at ");
                  } while (1 <= o && 0 <= l);
                break;
              }
          }
        } finally {
          ($ = !1), (Error.prepareStackTrace = n);
        }
        return (e = e ? e.displayName || e.name : "") ? U(e) : "";
      }
      function Y(e) {
        switch (e.tag) {
          case 5:
            return U(e.type);
          case 16:
            return U("Lazy");
          case 13:
            return U("Suspense");
          case 19:
            return U("SuspenseList");
          case 0:
          case 2:
          case 15:
            return (e = H(e.type, !1));
          case 11:
            return (e = H(e.type.render, !1));
          case 22:
            return (e = H(e.type._render, !1));
          case 1:
            return (e = H(e.type, !0));
          default:
            return "";
        }
      }
      function Q(e) {
        if (null == e) return null;
        if ("function" === typeof e) return e.displayName || e.name || null;
        if ("string" === typeof e) return e;
        switch (e) {
          case S:
            return "Fragment";
          case w:
            return "Portal";
          case M:
            return "Profiler";
          case O:
            return "StrictMode";
          case T:
            return "Suspense";
          case D:
            return "SuspenseList";
        }
        if ("object" === typeof e)
          switch (e.$$typeof) {
            case C:
              return (e.displayName || "Context") + ".Consumer";
            case E:
              return (e._context.displayName || "Context") + ".Provider";
            case P:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ""),
                e.displayName ||
                  ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
              );
            case L:
              return Q(e.type);
            case R:
              return Q(e._render);
            case j:
              (t = e._payload), (e = e._init);
              try {
                return Q(e(t));
              } catch (n) {}
          }
        return null;
      }
      function q(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "object":
          case "string":
          case "undefined":
            return e;
          default:
            return "";
        }
      }
      function X(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          "input" === e.toLowerCase() &&
          ("checkbox" === t || "radio" === t)
        );
      }
      function K(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = X(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];
            if (
              !e.hasOwnProperty(t) &&
              "undefined" !== typeof n &&
              "function" === typeof n.get &&
              "function" === typeof n.set
            ) {
              var a = n.get,
                i = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return a.call(this);
                  },
                  set: function (e) {
                    (r = "" + e), i.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = "" + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }
      function G(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = "";
        return (
          e && (r = X(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        );
      }
      function Z(e) {
        if (
          "undefined" ===
          typeof (e =
            e || ("undefined" !== typeof document ? document : void 0))
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      function J(e, t) {
        var n = t.checked;
        return a({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }
      function ee(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        (n = q(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
              "checkbox" === t.type || "radio" === t.type
                ? null != t.checked
                : null != t.value,
          });
      }
      function te(e, t) {
        null != (t = t.checked) && x(e, "checked", t, !1);
      }
      function ne(e, t) {
        te(e, t);
        var n = q(t.value),
          r = t.type;
        if (null != n)
          "number" === r
            ? ((0 === n && "" === e.value) || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
          return void e.removeAttribute("value");
        t.hasOwnProperty("value")
          ? ae(e, t.type, n)
          : t.hasOwnProperty("defaultValue") &&
            ae(e, t.type, q(t.defaultValue)),
          null == t.checked &&
            null != t.defaultChecked &&
            (e.defaultChecked = !!t.defaultChecked);
      }
      function re(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (
            !(
              ("submit" !== r && "reset" !== r) ||
              (void 0 !== t.value && null !== t.value)
            )
          )
            return;
          (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        "" !== (n = e.name) && (e.name = ""),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          "" !== n && (e.name = n);
      }
      function ae(e, t, n) {
        ("number" === t && Z(e.ownerDocument) === e) ||
          (null == n
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      function ie(e, t) {
        return (
          (e = a({ children: void 0 }, t)),
          (t = (function (e) {
            var t = "";
            return (
              r.Children.forEach(e, function (e) {
                null != e && (t += e);
              }),
              t
            );
          })(t.children)) && (e.children = t),
          e
        );
      }
      function oe(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
          for (n = 0; n < e.length; n++)
            (a = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== a && (e[n].selected = a),
              a && r && (e[n].defaultSelected = !0);
        } else {
          for (n = "" + q(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n)
              return (
                (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
              );
            null !== t || e[a].disabled || (t = e[a]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function le(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
        return a({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue,
        });
      }
      function ue(e, t) {
        var n = t.value;
        if (null == n) {
          if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(o(92));
            if (Array.isArray(n)) {
              if (!(1 >= n.length)) throw Error(o(93));
              n = n[0];
            }
            t = n;
          }
          null == t && (t = ""), (n = t);
        }
        e._wrapperState = { initialValue: q(n) };
      }
      function se(e, t) {
        var n = q(t.value),
          r = q(t.defaultValue);
        null != n &&
          ((n = "" + n) !== e.value && (e.value = n),
          null == t.defaultValue &&
            e.defaultValue !== n &&
            (e.defaultValue = n)),
          null != r && (e.defaultValue = "" + r);
      }
      function ce(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
          "" !== t &&
          null !== t &&
          (e.value = t);
      }
      var fe = "http://www.w3.org/1999/xhtml",
        de = "http://www.w3.org/2000/svg";
      function he(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function pe(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e
          ? he(t)
          : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
          ? "http://www.w3.org/1999/xhtml"
          : e;
      }
      var ve,
        ge,
        me =
          ((ge = function (e, t) {
            if (e.namespaceURI !== de || "innerHTML" in e) e.innerHTML = t;
            else {
              for (
                (ve = ve || document.createElement("div")).innerHTML =
                  "<svg>" + t.valueOf().toString() + "</svg>",
                  t = ve.firstChild;
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
          }),
          "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return ge(e, t);
                });
              }
            : ge);
      function ye(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType)
            return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      var be = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        xe = ["Webkit", "ms", "Moz", "O"];
      function ke(e, t, n) {
        return null == t || "boolean" === typeof t || "" === t
          ? ""
          : n ||
            "number" !== typeof t ||
            0 === t ||
            (be.hasOwnProperty(e) && be[e])
          ? ("" + t).trim()
          : t + "px";
      }
      function _e(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              a = ke(n, t[n], r);
            "float" === n && (n = "cssFloat"),
              r ? e.setProperty(n, a) : (e[n] = a);
          }
      }
      Object.keys(be).forEach(function (e) {
        xe.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (be[t] = be[e]);
        });
      });
      var we = a(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        }
      );
      function Se(e, t) {
        if (t) {
          if (
            we[e] &&
            (null != t.children || null != t.dangerouslySetInnerHTML)
          )
            throw Error(o(137, e));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(o(60));
            if (
              "object" !== typeof t.dangerouslySetInnerHTML ||
              !("__html" in t.dangerouslySetInnerHTML)
            )
              throw Error(o(61));
          }
          if (null != t.style && "object" !== typeof t.style)
            throw Error(o(62));
        }
      }
      function Oe(e, t) {
        if (-1 === e.indexOf("-")) return "string" === typeof t.is;
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      function Me(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      var Ee = null,
        Ce = null,
        Pe = null;
      function Te(e) {
        if ((e = ea(e))) {
          if ("function" !== typeof Ee) throw Error(o(280));
          var t = e.stateNode;
          t && ((t = na(t)), Ee(e.stateNode, e.type, t));
        }
      }
      function De(e) {
        Ce ? (Pe ? Pe.push(e) : (Pe = [e])) : (Ce = e);
      }
      function Le() {
        if (Ce) {
          var e = Ce,
            t = Pe;
          if (((Pe = Ce = null), Te(e), t))
            for (e = 0; e < t.length; e++) Te(t[e]);
        }
      }
      function je(e, t) {
        return e(t);
      }
      function Re(e, t, n, r, a) {
        return e(t, n, r, a);
      }
      function Ae() {}
      var ze = je,
        Fe = !1,
        Ne = !1;
      function Ie() {
        (null === Ce && null === Pe) || (Ae(), Le());
      }
      function Ve(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = na(n);
        if (null === r) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (r = !r.disabled) ||
              (r = !(
                "button" === (e = e.type) ||
                "input" === e ||
                "select" === e ||
                "textarea" === e
              )),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
        return n;
      }
      var Be = !1;
      if (f)
        try {
          var We = {};
          Object.defineProperty(We, "passive", {
            get: function () {
              Be = !0;
            },
          }),
            window.addEventListener("test", We, We),
            window.removeEventListener("test", We, We);
        } catch (ge) {
          Be = !1;
        }
      function Ue(e, t, n, r, a, i, o, l, u) {
        var s = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, s);
        } catch (c) {
          this.onError(c);
        }
      }
      var $e = !1,
        He = null,
        Ye = !1,
        Qe = null,
        qe = {
          onError: function (e) {
            ($e = !0), (He = e);
          },
        };
      function Xe(e, t, n, r, a, i, o, l, u) {
        ($e = !1), (He = null), Ue.apply(qe, arguments);
      }
      function Ke(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            0 !== (1026 & (t = e).flags) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function Ge(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (
            (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
            null !== t)
          )
            return t.dehydrated;
        }
        return null;
      }
      function Ze(e) {
        if (Ke(e) !== e) throw Error(o(188));
      }
      function Je(e) {
        if (
          !(e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = Ke(e))) throw Error(o(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var a = n.return;
              if (null === a) break;
              var i = a.alternate;
              if (null === i) {
                if (null !== (r = a.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (a.child === i.child) {
                for (i = a.child; i; ) {
                  if (i === n) return Ze(a), e;
                  if (i === r) return Ze(a), t;
                  i = i.sibling;
                }
                throw Error(o(188));
              }
              if (n.return !== r.return) (n = a), (r = i);
              else {
                for (var l = !1, u = a.child; u; ) {
                  if (u === n) {
                    (l = !0), (n = a), (r = i);
                    break;
                  }
                  if (u === r) {
                    (l = !0), (r = a), (n = i);
                    break;
                  }
                  u = u.sibling;
                }
                if (!l) {
                  for (u = i.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = i), (r = a);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = i), (n = a);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) throw Error(o(189));
                }
              }
              if (n.alternate !== r) throw Error(o(190));
            }
            if (3 !== n.tag) throw Error(o(188));
            return n.stateNode.current === n ? e : t;
          })(e))
        )
          return null;
        for (var t = e; ; ) {
          if (5 === t.tag || 6 === t.tag) return t;
          if (t.child) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      }
      function et(e, t) {
        for (var n = e.alternate; null !== t; ) {
          if (t === e || t === n) return !0;
          t = t.return;
        }
        return !1;
      }
      var tt,
        nt,
        rt,
        at,
        it = !1,
        ot = [],
        lt = null,
        ut = null,
        st = null,
        ct = new Map(),
        ft = new Map(),
        dt = [],
        ht = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        );
      function pt(e, t, n, r, a) {
        return {
          blockedOn: e,
          domEventName: t,
          eventSystemFlags: 16 | n,
          nativeEvent: a,
          targetContainers: [r],
        };
      }
      function vt(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            lt = null;
            break;
          case "dragenter":
          case "dragleave":
            ut = null;
            break;
          case "mouseover":
          case "mouseout":
            st = null;
            break;
          case "pointerover":
          case "pointerout":
            ct.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            ft.delete(t.pointerId);
        }
      }
      function gt(e, t, n, r, a, i) {
        return null === e || e.nativeEvent !== i
          ? ((e = pt(t, n, r, a, i)),
            null !== t && null !== (t = ea(t)) && nt(t),
            e)
          : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            null !== a && -1 === t.indexOf(a) && t.push(a),
            e);
      }
      function mt(e) {
        var t = Jr(e.target);
        if (null !== t) {
          var n = Ke(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = Ge(n)))
                return (
                  (e.blockedOn = t),
                  void at(e.lanePriority, function () {
                    i.unstable_runWithPriority(e.priority, function () {
                      rt(n);
                    });
                  })
                );
            } else if (3 === t && n.stateNode.hydrate)
              return void (e.blockedOn =
                3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function yt(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n)
            return null !== (t = ea(n)) && nt(t), (e.blockedOn = n), !1;
          t.shift();
        }
        return !0;
      }
      function bt(e, t, n) {
        yt(e) && n.delete(t);
      }
      function xt() {
        for (it = !1; 0 < ot.length; ) {
          var e = ot[0];
          if (null !== e.blockedOn) {
            null !== (e = ea(e.blockedOn)) && tt(e);
            break;
          }
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) {
              e.blockedOn = n;
              break;
            }
            t.shift();
          }
          null === e.blockedOn && ot.shift();
        }
        null !== lt && yt(lt) && (lt = null),
          null !== ut && yt(ut) && (ut = null),
          null !== st && yt(st) && (st = null),
          ct.forEach(bt),
          ft.forEach(bt);
      }
      function kt(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          it ||
            ((it = !0),
            i.unstable_scheduleCallback(i.unstable_NormalPriority, xt)));
      }
      function _t(e) {
        function t(t) {
          return kt(t, e);
        }
        if (0 < ot.length) {
          kt(ot[0], e);
          for (var n = 1; n < ot.length; n++) {
            var r = ot[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          null !== lt && kt(lt, e),
            null !== ut && kt(ut, e),
            null !== st && kt(st, e),
            ct.forEach(t),
            ft.forEach(t),
            n = 0;
          n < dt.length;
          n++
        )
          (r = dt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < dt.length && null === (n = dt[0]).blockedOn; )
          mt(n), null === n.blockedOn && dt.shift();
      }
      function wt(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      var St = {
          animationend: wt("Animation", "AnimationEnd"),
          animationiteration: wt("Animation", "AnimationIteration"),
          animationstart: wt("Animation", "AnimationStart"),
          transitionend: wt("Transition", "TransitionEnd"),
        },
        Ot = {},
        Mt = {};
      function Et(e) {
        if (Ot[e]) return Ot[e];
        if (!St[e]) return e;
        var t,
          n = St[e];
        for (t in n) if (n.hasOwnProperty(t) && t in Mt) return (Ot[e] = n[t]);
        return e;
      }
      f &&
        ((Mt = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete St.animationend.animation,
          delete St.animationiteration.animation,
          delete St.animationstart.animation),
        "TransitionEvent" in window || delete St.transitionend.transition);
      var Ct = Et("animationend"),
        Pt = Et("animationiteration"),
        Tt = Et("animationstart"),
        Dt = Et("transitionend"),
        Lt = new Map(),
        jt = new Map(),
        Rt = [
          "abort",
          "abort",
          Ct,
          "animationEnd",
          Pt,
          "animationIteration",
          Tt,
          "animationStart",
          "canplay",
          "canPlay",
          "canplaythrough",
          "canPlayThrough",
          "durationchange",
          "durationChange",
          "emptied",
          "emptied",
          "encrypted",
          "encrypted",
          "ended",
          "ended",
          "error",
          "error",
          "gotpointercapture",
          "gotPointerCapture",
          "load",
          "load",
          "loadeddata",
          "loadedData",
          "loadedmetadata",
          "loadedMetadata",
          "loadstart",
          "loadStart",
          "lostpointercapture",
          "lostPointerCapture",
          "playing",
          "playing",
          "progress",
          "progress",
          "seeking",
          "seeking",
          "stalled",
          "stalled",
          "suspend",
          "suspend",
          "timeupdate",
          "timeUpdate",
          Dt,
          "transitionEnd",
          "waiting",
          "waiting",
        ];
      function At(e, t) {
        for (var n = 0; n < e.length; n += 2) {
          var r = e[n],
            a = e[n + 1];
          (a = "on" + (a[0].toUpperCase() + a.slice(1))),
            jt.set(r, t),
            Lt.set(r, a),
            s(a, [r]);
        }
      }
      (0, i.unstable_now)();
      var zt = 8;
      function Ft(e) {
        if (0 !== (1 & e)) return (zt = 15), 1;
        if (0 !== (2 & e)) return (zt = 14), 2;
        if (0 !== (4 & e)) return (zt = 13), 4;
        var t = 24 & e;
        return 0 !== t
          ? ((zt = 12), t)
          : 0 !== (32 & e)
          ? ((zt = 11), 32)
          : 0 !== (t = 192 & e)
          ? ((zt = 10), t)
          : 0 !== (256 & e)
          ? ((zt = 9), 256)
          : 0 !== (t = 3584 & e)
          ? ((zt = 8), t)
          : 0 !== (4096 & e)
          ? ((zt = 7), 4096)
          : 0 !== (t = 4186112 & e)
          ? ((zt = 6), t)
          : 0 !== (t = 62914560 & e)
          ? ((zt = 5), t)
          : 67108864 & e
          ? ((zt = 4), 67108864)
          : 0 !== (134217728 & e)
          ? ((zt = 3), 134217728)
          : 0 !== (t = 805306368 & e)
          ? ((zt = 2), t)
          : 0 !== (1073741824 & e)
          ? ((zt = 1), 1073741824)
          : ((zt = 8), e);
      }
      function Nt(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return (zt = 0);
        var r = 0,
          a = 0,
          i = e.expiredLanes,
          o = e.suspendedLanes,
          l = e.pingedLanes;
        if (0 !== i) (r = i), (a = zt = 15);
        else if (0 !== (i = 134217727 & n)) {
          var u = i & ~o;
          0 !== u
            ? ((r = Ft(u)), (a = zt))
            : 0 !== (l &= i) && ((r = Ft(l)), (a = zt));
        } else
          0 !== (i = n & ~o)
            ? ((r = Ft(i)), (a = zt))
            : 0 !== l && ((r = Ft(l)), (a = zt));
        if (0 === r) return 0;
        if (
          ((r = n & (((0 > (r = 31 - $t(r)) ? 0 : 1 << r) << 1) - 1)),
          0 !== t && t !== r && 0 === (t & o))
        ) {
          if ((Ft(t), a <= zt)) return t;
          zt = a;
        }
        if (0 !== (t = e.entangledLanes))
          for (e = e.entanglements, t &= r; 0 < t; )
            (a = 1 << (n = 31 - $t(t))), (r |= e[n]), (t &= ~a);
        return r;
      }
      function It(e) {
        return 0 !== (e = -1073741825 & e.pendingLanes)
          ? e
          : 1073741824 & e
          ? 1073741824
          : 0;
      }
      function Vt(e, t) {
        switch (e) {
          case 15:
            return 1;
          case 14:
            return 2;
          case 12:
            return 0 === (e = Bt(24 & ~t)) ? Vt(10, t) : e;
          case 10:
            return 0 === (e = Bt(192 & ~t)) ? Vt(8, t) : e;
          case 8:
            return (
              0 === (e = Bt(3584 & ~t)) &&
                0 === (e = Bt(4186112 & ~t)) &&
                (e = 512),
              e
            );
          case 2:
            return 0 === (t = Bt(805306368 & ~t)) && (t = 268435456), t;
        }
        throw Error(o(358, e));
      }
      function Bt(e) {
        return e & -e;
      }
      function Wt(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function Ut(e, t, n) {
        e.pendingLanes |= t;
        var r = t - 1;
        (e.suspendedLanes &= r),
          (e.pingedLanes &= r),
          ((e = e.eventTimes)[(t = 31 - $t(t))] = n);
      }
      var $t = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 === e ? 32 : (31 - ((Ht(e) / Yt) | 0)) | 0;
            },
        Ht = Math.log,
        Yt = Math.LN2;
      var Qt = i.unstable_UserBlockingPriority,
        qt = i.unstable_runWithPriority,
        Xt = !0;
      function Kt(e, t, n, r) {
        Fe || Ae();
        var a = Zt,
          i = Fe;
        Fe = !0;
        try {
          Re(a, e, t, n, r);
        } finally {
          (Fe = i) || Ie();
        }
      }
      function Gt(e, t, n, r) {
        qt(Qt, Zt.bind(null, e, t, n, r));
      }
      function Zt(e, t, n, r) {
        var a;
        if (Xt)
          if ((a = 0 === (4 & t)) && 0 < ot.length && -1 < ht.indexOf(e))
            (e = pt(null, e, t, n, r)), ot.push(e);
          else {
            var i = Jt(e, t, n, r);
            if (null === i) a && vt(e, r);
            else {
              if (a) {
                if (-1 < ht.indexOf(e))
                  return (e = pt(i, e, t, n, r)), void ot.push(e);
                if (
                  (function (e, t, n, r, a) {
                    switch (t) {
                      case "focusin":
                        return (lt = gt(lt, e, t, n, r, a)), !0;
                      case "dragenter":
                        return (ut = gt(ut, e, t, n, r, a)), !0;
                      case "mouseover":
                        return (st = gt(st, e, t, n, r, a)), !0;
                      case "pointerover":
                        var i = a.pointerId;
                        return (
                          ct.set(i, gt(ct.get(i) || null, e, t, n, r, a)), !0
                        );
                      case "gotpointercapture":
                        return (
                          (i = a.pointerId),
                          ft.set(i, gt(ft.get(i) || null, e, t, n, r, a)),
                          !0
                        );
                    }
                    return !1;
                  })(i, e, t, n, r)
                )
                  return;
                vt(e, r);
              }
              Lr(e, t, r, null, n);
            }
          }
      }
      function Jt(e, t, n, r) {
        var a = Me(r);
        if (null !== (a = Jr(a))) {
          var i = Ke(a);
          if (null === i) a = null;
          else {
            var o = i.tag;
            if (13 === o) {
              if (null !== (a = Ge(i))) return a;
              a = null;
            } else if (3 === o) {
              if (i.stateNode.hydrate)
                return 3 === i.tag ? i.stateNode.containerInfo : null;
              a = null;
            } else i !== a && (a = null);
          }
        }
        return Lr(e, t, r, a, n), null;
      }
      var en = null,
        tn = null,
        nn = null;
      function rn() {
        if (nn) return nn;
        var e,
          t,
          n = tn,
          r = n.length,
          a = "value" in en ? en.value : en.textContent,
          i = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        var o = r - e;
        for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
        return (nn = a.slice(e, 1 < t ? 1 - t : void 0));
      }
      function an(e) {
        var t = e.keyCode;
        return (
          "charCode" in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      function on() {
        return !0;
      }
      function ln() {
        return !1;
      }
      function un(e) {
        function t(t, n, r, a, i) {
          for (var o in ((this._reactName = t),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = a),
          (this.target = i),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
          return (
            (this.isDefaultPrevented = (
              null != a.defaultPrevented
                ? a.defaultPrevented
                : !1 === a.returnValue
            )
              ? on
              : ln),
            (this.isPropagationStopped = ln),
            this
          );
        }
        return (
          a(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault
                  ? e.preventDefault()
                  : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
                (this.isDefaultPrevented = on));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation
                  ? e.stopPropagation()
                  : "unknown" !== typeof e.cancelBubble &&
                    (e.cancelBubble = !0),
                (this.isPropagationStopped = on));
            },
            persist: function () {},
            isPersistent: on,
          }),
          t
        );
      }
      var sn,
        cn,
        fn,
        dn = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        hn = un(dn),
        pn = a({}, dn, { view: 0, detail: 0 }),
        vn = un(pn),
        gn = a({}, pn, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: En,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return "movementX" in e
              ? e.movementX
              : (e !== fn &&
                  (fn && "mousemove" === e.type
                    ? ((sn = e.screenX - fn.screenX),
                      (cn = e.screenY - fn.screenY))
                    : (cn = sn = 0),
                  (fn = e)),
                sn);
          },
          movementY: function (e) {
            return "movementY" in e ? e.movementY : cn;
          },
        }),
        mn = un(gn),
        yn = un(a({}, gn, { dataTransfer: 0 })),
        bn = un(a({}, pn, { relatedTarget: 0 })),
        xn = un(
          a({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        kn = un(
          a({}, dn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          })
        ),
        _n = un(a({}, dn, { data: 0 })),
        wn = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified",
        },
        Sn = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta",
        },
        On = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };
      function Mn(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = On[e]) && !!t[e];
      }
      function En() {
        return Mn;
      }
      var Cn = un(
          a({}, pn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = an(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? an(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? an(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          })
        ),
        Pn = un(
          a({}, gn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          })
        ),
        Tn = un(
          a({}, pn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: En,
          })
        ),
        Dn = un(
          a({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        Ln = un(
          a({}, gn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          })
        ),
        jn = [9, 13, 27, 32],
        Rn = f && "CompositionEvent" in window,
        An = null;
      f && "documentMode" in document && (An = document.documentMode);
      var zn = f && "TextEvent" in window && !An,
        Fn = f && (!Rn || (An && 8 < An && 11 >= An)),
        Nn = String.fromCharCode(32),
        In = !1;
      function Vn(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== jn.indexOf(t.keyCode);
          case "keydown":
            return 229 !== t.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return !0;
          default:
            return !1;
        }
      }
      function Bn(e) {
        return "object" === typeof (e = e.detail) && "data" in e
          ? e.data
          : null;
      }
      var Wn = !1;
      var Un = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
      function $n(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Un[e.type] : "textarea" === t;
      }
      function Hn(e, t, n, r) {
        De(r),
          0 < (t = Rr(t, "onChange")).length &&
            ((n = new hn("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
      }
      var Yn = null,
        Qn = null;
      function qn(e) {
        Mr(e, 0);
      }
      function Xn(e) {
        if (G(ta(e))) return e;
      }
      function Kn(e, t) {
        if ("change" === e) return t;
      }
      var Gn = !1;
      if (f) {
        var Zn;
        if (f) {
          var Jn = "oninput" in document;
          if (!Jn) {
            var er = document.createElement("div");
            er.setAttribute("oninput", "return;"),
              (Jn = "function" === typeof er.oninput);
          }
          Zn = Jn;
        } else Zn = !1;
        Gn = Zn && (!document.documentMode || 9 < document.documentMode);
      }
      function tr() {
        Yn && (Yn.detachEvent("onpropertychange", nr), (Qn = Yn = null));
      }
      function nr(e) {
        if ("value" === e.propertyName && Xn(Qn)) {
          var t = [];
          if ((Hn(t, Qn, e, Me(e)), (e = qn), Fe)) e(t);
          else {
            Fe = !0;
            try {
              je(e, t);
            } finally {
              (Fe = !1), Ie();
            }
          }
        }
      }
      function rr(e, t, n) {
        "focusin" === e
          ? (tr(), (Qn = n), (Yn = t).attachEvent("onpropertychange", nr))
          : "focusout" === e && tr();
      }
      function ar(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
          return Xn(Qn);
      }
      function ir(e, t) {
        if ("click" === e) return Xn(t);
      }
      function or(e, t) {
        if ("input" === e || "change" === e) return Xn(t);
      }
      var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        ur = Object.prototype.hasOwnProperty;
      function sr(e, t) {
        if (lr(e, t)) return !0;
        if (
          "object" !== typeof e ||
          null === e ||
          "object" !== typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
          if (!ur.call(t, n[r]) || !lr(e[n[r]], t[n[r]])) return !1;
        return !0;
      }
      function cr(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function fr(e, t) {
        var n,
          r = cr(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
              return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = cr(r);
        }
      }
      function dr(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? dr(e, t.parentNode)
                : "contains" in e
                ? e.contains(t)
                : !!e.compareDocumentPosition &&
                  !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function hr() {
        for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = "string" === typeof t.contentWindow.location.href;
          } catch (r) {
            n = !1;
          }
          if (!n) break;
          t = Z((e = t.contentWindow).document);
        }
        return t;
      }
      function pr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (("input" === t &&
            ("text" === e.type ||
              "search" === e.type ||
              "tel" === e.type ||
              "url" === e.type ||
              "password" === e.type)) ||
            "textarea" === t ||
            "true" === e.contentEditable)
        );
      }
      var vr = f && "documentMode" in document && 11 >= document.documentMode,
        gr = null,
        mr = null,
        yr = null,
        br = !1;
      function xr(e, t, n) {
        var r =
          n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        br ||
          null == gr ||
          gr !== Z(r) ||
          ("selectionStart" in (r = gr) && pr(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                anchorNode: (r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              }),
          (yr && sr(yr, r)) ||
            ((yr = r),
            0 < (r = Rr(mr, "onSelect")).length &&
              ((t = new hn("onSelect", "select", null, t, n)),
              e.push({ event: t, listeners: r }),
              (t.target = gr))));
      }
      At(
        "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
          " "
        ),
        0
      ),
        At(
          "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
            " "
          ),
          1
        ),
        At(Rt, 2);
      for (
        var kr = "change selectionchange textInput compositionstart compositionend compositionupdate".split(
            " "
          ),
          _r = 0;
        _r < kr.length;
        _r++
      )
        jt.set(kr[_r], 0);
      c("onMouseEnter", ["mouseout", "mouseover"]),
        c("onMouseLeave", ["mouseout", "mouseover"]),
        c("onPointerEnter", ["pointerout", "pointerover"]),
        c("onPointerLeave", ["pointerout", "pointerover"]),
        s(
          "onChange",
          "change click focusin focusout input keydown keyup selectionchange".split(
            " "
          )
        ),
        s(
          "onSelect",
          "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
            " "
          )
        ),
        s("onBeforeInput", [
          "compositionend",
          "keypress",
          "textInput",
          "paste",
        ]),
        s(
          "onCompositionEnd",
          "compositionend focusout keydown keypress keyup mousedown".split(" ")
        ),
        s(
          "onCompositionStart",
          "compositionstart focusout keydown keypress keyup mousedown".split(
            " "
          )
        ),
        s(
          "onCompositionUpdate",
          "compositionupdate focusout keydown keypress keyup mousedown".split(
            " "
          )
        );
      var wr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
        Sr = new Set(
          "cancel close invalid load scroll toggle".split(" ").concat(wr)
        );
      function Or(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = n),
          (function (e, t, n, r, a, i, l, u, s) {
            if ((Xe.apply(this, arguments), $e)) {
              if (!$e) throw Error(o(198));
              var c = He;
              ($e = !1), (He = null), Ye || ((Ye = !0), (Qe = c));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      function Mr(e, t) {
        t = 0 !== (4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            a = r.event;
          r = r.listeners;
          e: {
            var i = void 0;
            if (t)
              for (var o = r.length - 1; 0 <= o; o--) {
                var l = r[o],
                  u = l.instance,
                  s = l.currentTarget;
                if (((l = l.listener), u !== i && a.isPropagationStopped()))
                  break e;
                Or(a, l, s), (i = u);
              }
            else
              for (o = 0; o < r.length; o++) {
                if (
                  ((u = (l = r[o]).instance),
                  (s = l.currentTarget),
                  (l = l.listener),
                  u !== i && a.isPropagationStopped())
                )
                  break e;
                Or(a, l, s), (i = u);
              }
          }
        }
        if (Ye) throw ((e = Qe), (Ye = !1), (Qe = null), e);
      }
      function Er(e, t) {
        var n = ra(t),
          r = e + "__bubble";
        n.has(r) || (Dr(t, e, 2, !1), n.add(r));
      }
      var Cr = "_reactListening" + Math.random().toString(36).slice(2);
      function Pr(e) {
        e[Cr] ||
          ((e[Cr] = !0),
          l.forEach(function (t) {
            Sr.has(t) || Tr(t, !1, e, null), Tr(t, !0, e, null);
          }));
      }
      function Tr(e, t, n, r) {
        var a =
            4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
          i = n;
        if (
          ("selectionchange" === e && 9 !== n.nodeType && (i = n.ownerDocument),
          null !== r && !t && Sr.has(e))
        ) {
          if ("scroll" !== e) return;
          (a |= 2), (i = r);
        }
        var o = ra(i),
          l = e + "__" + (t ? "capture" : "bubble");
        o.has(l) || (t && (a |= 4), Dr(i, e, a, t), o.add(l));
      }
      function Dr(e, t, n, r) {
        var a = jt.get(t);
        switch (void 0 === a ? 2 : a) {
          case 0:
            a = Kt;
            break;
          case 1:
            a = Gt;
            break;
          default:
            a = Zt;
        }
        (n = a.bind(null, t, n, e)),
          (a = void 0),
          !Be ||
            ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
            (a = !0),
          r
            ? void 0 !== a
              ? e.addEventListener(t, n, { capture: !0, passive: a })
              : e.addEventListener(t, n, !0)
            : void 0 !== a
            ? e.addEventListener(t, n, { passive: a })
            : e.addEventListener(t, n, !1);
      }
      function Lr(e, t, n, r, a) {
        var i = r;
        if (0 === (1 & t) && 0 === (2 & t) && null !== r)
          e: for (;;) {
            if (null === r) return;
            var o = r.tag;
            if (3 === o || 4 === o) {
              var l = r.stateNode.containerInfo;
              if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
              if (4 === o)
                for (o = r.return; null !== o; ) {
                  var u = o.tag;
                  if (
                    (3 === u || 4 === u) &&
                    ((u = o.stateNode.containerInfo) === a ||
                      (8 === u.nodeType && u.parentNode === a))
                  )
                    return;
                  o = o.return;
                }
              for (; null !== l; ) {
                if (null === (o = Jr(l))) return;
                if (5 === (u = o.tag) || 6 === u) {
                  r = i = o;
                  continue e;
                }
                l = l.parentNode;
              }
            }
            r = r.return;
          }
        !(function (e, t, n) {
          if (Ne) return e(t, n);
          Ne = !0;
          try {
            ze(e, t, n);
          } finally {
            (Ne = !1), Ie();
          }
        })(function () {
          var r = i,
            a = Me(n),
            o = [];
          e: {
            var l = Lt.get(e);
            if (void 0 !== l) {
              var u = hn,
                s = e;
              switch (e) {
                case "keypress":
                  if (0 === an(n)) break e;
                case "keydown":
                case "keyup":
                  u = Cn;
                  break;
                case "focusin":
                  (s = "focus"), (u = bn);
                  break;
                case "focusout":
                  (s = "blur"), (u = bn);
                  break;
                case "beforeblur":
                case "afterblur":
                  u = bn;
                  break;
                case "click":
                  if (2 === n.button) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  u = mn;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  u = yn;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  u = Tn;
                  break;
                case Ct:
                case Pt:
                case Tt:
                  u = xn;
                  break;
                case Dt:
                  u = Dn;
                  break;
                case "scroll":
                  u = vn;
                  break;
                case "wheel":
                  u = Ln;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  u = kn;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  u = Pn;
              }
              var c = 0 !== (4 & t),
                f = !c && "scroll" === e,
                d = c ? (null !== l ? l + "Capture" : null) : l;
              c = [];
              for (var h, p = r; null !== p; ) {
                var v = (h = p).stateNode;
                if (
                  (5 === h.tag &&
                    null !== v &&
                    ((h = v),
                    null !== d &&
                      null != (v = Ve(p, d)) &&
                      c.push(jr(p, v, h))),
                  f)
                )
                  break;
                p = p.return;
              }
              0 < c.length &&
                ((l = new u(l, s, null, n, a)),
                o.push({ event: l, listeners: c }));
            }
          }
          if (0 === (7 & t)) {
            if (
              ((u = "mouseout" === e || "pointerout" === e),
              (!(l = "mouseover" === e || "pointerover" === e) ||
                0 !== (16 & t) ||
                !(s = n.relatedTarget || n.fromElement) ||
                (!Jr(s) && !s[Gr])) &&
                (u || l) &&
                ((l =
                  a.window === a
                    ? a
                    : (l = a.ownerDocument)
                    ? l.defaultView || l.parentWindow
                    : window),
                u
                  ? ((u = r),
                    null !==
                      (s = (s = n.relatedTarget || n.toElement)
                        ? Jr(s)
                        : null) &&
                      (s !== (f = Ke(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                      (s = null))
                  : ((u = null), (s = r)),
                u !== s))
            ) {
              if (
                ((c = mn),
                (v = "onMouseLeave"),
                (d = "onMouseEnter"),
                (p = "mouse"),
                ("pointerout" !== e && "pointerover" !== e) ||
                  ((c = Pn),
                  (v = "onPointerLeave"),
                  (d = "onPointerEnter"),
                  (p = "pointer")),
                (f = null == u ? l : ta(u)),
                (h = null == s ? l : ta(s)),
                ((l = new c(v, p + "leave", u, n, a)).target = f),
                (l.relatedTarget = h),
                (v = null),
                Jr(a) === r &&
                  (((c = new c(d, p + "enter", s, n, a)).target = h),
                  (c.relatedTarget = f),
                  (v = c)),
                (f = v),
                u && s)
              )
                e: {
                  for (d = s, p = 0, h = c = u; h; h = Ar(h)) p++;
                  for (h = 0, v = d; v; v = Ar(v)) h++;
                  for (; 0 < p - h; ) (c = Ar(c)), p--;
                  for (; 0 < h - p; ) (d = Ar(d)), h--;
                  for (; p--; ) {
                    if (c === d || (null !== d && c === d.alternate)) break e;
                    (c = Ar(c)), (d = Ar(d));
                  }
                  c = null;
                }
              else c = null;
              null !== u && zr(o, l, u, c, !1),
                null !== s && null !== f && zr(o, f, s, c, !0);
            }
            if (
              "select" ===
                (u =
                  (l = r ? ta(r) : window).nodeName &&
                  l.nodeName.toLowerCase()) ||
              ("input" === u && "file" === l.type)
            )
              var g = Kn;
            else if ($n(l))
              if (Gn) g = or;
              else {
                g = ar;
                var m = rr;
              }
            else
              (u = l.nodeName) &&
                "input" === u.toLowerCase() &&
                ("checkbox" === l.type || "radio" === l.type) &&
                (g = ir);
            switch (
              (g && (g = g(e, r))
                ? Hn(o, g, n, a)
                : (m && m(e, l, r),
                  "focusout" === e &&
                    (m = l._wrapperState) &&
                    m.controlled &&
                    "number" === l.type &&
                    ae(l, "number", l.value)),
              (m = r ? ta(r) : window),
              e)
            ) {
              case "focusin":
                ($n(m) || "true" === m.contentEditable) &&
                  ((gr = m), (mr = r), (yr = null));
                break;
              case "focusout":
                yr = mr = gr = null;
                break;
              case "mousedown":
                br = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                (br = !1), xr(o, n, a);
                break;
              case "selectionchange":
                if (vr) break;
              case "keydown":
              case "keyup":
                xr(o, n, a);
            }
            var y;
            if (Rn)
              e: {
                switch (e) {
                  case "compositionstart":
                    var b = "onCompositionStart";
                    break e;
                  case "compositionend":
                    b = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    b = "onCompositionUpdate";
                    break e;
                }
                b = void 0;
              }
            else
              Wn
                ? Vn(e, n) && (b = "onCompositionEnd")
                : "keydown" === e &&
                  229 === n.keyCode &&
                  (b = "onCompositionStart");
            b &&
              (Fn &&
                "ko" !== n.locale &&
                (Wn || "onCompositionStart" !== b
                  ? "onCompositionEnd" === b && Wn && (y = rn())
                  : ((tn = "value" in (en = a) ? en.value : en.textContent),
                    (Wn = !0))),
              0 < (m = Rr(r, b)).length &&
                ((b = new _n(b, e, null, n, a)),
                o.push({ event: b, listeners: m }),
                y ? (b.data = y) : null !== (y = Bn(n)) && (b.data = y))),
              (y = zn
                ? (function (e, t) {
                    switch (e) {
                      case "compositionend":
                        return Bn(t);
                      case "keypress":
                        return 32 !== t.which ? null : ((In = !0), Nn);
                      case "textInput":
                        return (e = t.data) === Nn && In ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (Wn)
                      return "compositionend" === e || (!Rn && Vn(e, t))
                        ? ((e = rn()), (nn = tn = en = null), (Wn = !1), e)
                        : null;
                    switch (e) {
                      case "paste":
                        return null;
                      case "keypress":
                        if (
                          !(t.ctrlKey || t.altKey || t.metaKey) ||
                          (t.ctrlKey && t.altKey)
                        ) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case "compositionend":
                        return Fn && "ko" !== t.locale ? null : t.data;
                      default:
                        return null;
                    }
                  })(e, n)) &&
                0 < (r = Rr(r, "onBeforeInput")).length &&
                ((a = new _n("onBeforeInput", "beforeinput", null, n, a)),
                o.push({ event: a, listeners: r }),
                (a.data = y));
          }
          Mr(o, t);
        });
      }
      function jr(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function Rr(e, t) {
        for (var n = t + "Capture", r = []; null !== e; ) {
          var a = e,
            i = a.stateNode;
          5 === a.tag &&
            null !== i &&
            ((a = i),
            null != (i = Ve(e, n)) && r.unshift(jr(e, i, a)),
            null != (i = Ve(e, t)) && r.push(jr(e, i, a))),
            (e = e.return);
        }
        return r;
      }
      function Ar(e) {
        if (null === e) return null;
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function zr(e, t, n, r, a) {
        for (var i = t._reactName, o = []; null !== n && n !== r; ) {
          var l = n,
            u = l.alternate,
            s = l.stateNode;
          if (null !== u && u === r) break;
          5 === l.tag &&
            null !== s &&
            ((l = s),
            a
              ? null != (u = Ve(n, i)) && o.unshift(jr(n, u, l))
              : a || (null != (u = Ve(n, i)) && o.push(jr(n, u, l)))),
            (n = n.return);
        }
        0 !== o.length && e.push({ event: t, listeners: o });
      }
      function Fr() {}
      var Nr = null,
        Ir = null;
      function Vr(e, t) {
        switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!t.autoFocus;
        }
        return !1;
      }
      function Br(e, t) {
        return (
          "textarea" === e ||
          "option" === e ||
          "noscript" === e ||
          "string" === typeof t.children ||
          "number" === typeof t.children ||
          ("object" === typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var Wr = "function" === typeof setTimeout ? setTimeout : void 0,
        Ur = "function" === typeof clearTimeout ? clearTimeout : void 0;
      function $r(e) {
        1 === e.nodeType
          ? (e.textContent = "")
          : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
      }
      function Hr(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
        }
        return e;
      }
      function Yr(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || "$!" === n || "$?" === n) {
              if (0 === t) return e;
              t--;
            } else "/$" === n && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var Qr = 0;
      var qr = Math.random().toString(36).slice(2),
        Xr = "__reactFiber$" + qr,
        Kr = "__reactProps$" + qr,
        Gr = "__reactContainer$" + qr,
        Zr = "__reactEvents$" + qr;
      function Jr(e) {
        var t = e[Xr];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[Gr] || n[Xr])) {
            if (
              ((n = t.alternate),
              null !== t.child || (null !== n && null !== n.child))
            )
              for (e = Yr(e); null !== e; ) {
                if ((n = e[Xr])) return n;
                e = Yr(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function ea(e) {
        return !(e = e[Xr] || e[Gr]) ||
          (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
          ? null
          : e;
      }
      function ta(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(o(33));
      }
      function na(e) {
        return e[Kr] || null;
      }
      function ra(e) {
        var t = e[Zr];
        return void 0 === t && (t = e[Zr] = new Set()), t;
      }
      var aa = [],
        ia = -1;
      function oa(e) {
        return { current: e };
      }
      function la(e) {
        0 > ia || ((e.current = aa[ia]), (aa[ia] = null), ia--);
      }
      function ua(e, t) {
        ia++, (aa[ia] = e.current), (e.current = t);
      }
      var sa = {},
        ca = oa(sa),
        fa = oa(!1),
        da = sa;
      function ha(e, t) {
        var n = e.type.contextTypes;
        if (!n) return sa;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var a,
          i = {};
        for (a in n) i[a] = t[a];
        return (
          r &&
            (((e =
              e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
          i
        );
      }
      function pa(e) {
        return null !== (e = e.childContextTypes) && void 0 !== e;
      }
      function va() {
        la(fa), la(ca);
      }
      function ga(e, t, n) {
        if (ca.current !== sa) throw Error(o(168));
        ua(ca, t), ua(fa, n);
      }
      function ma(e, t, n) {
        var r = e.stateNode;
        if (
          ((e = t.childContextTypes), "function" !== typeof r.getChildContext)
        )
          return n;
        for (var i in (r = r.getChildContext()))
          if (!(i in e)) throw Error(o(108, Q(t) || "Unknown", i));
        return a({}, n, r);
      }
      function ya(e) {
        return (
          (e =
            ((e = e.stateNode) &&
              e.__reactInternalMemoizedMergedChildContext) ||
            sa),
          (da = ca.current),
          ua(ca, e),
          ua(fa, fa.current),
          !0
        );
      }
      function ba(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(o(169));
        n
          ? ((e = ma(e, t, da)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            la(fa),
            la(ca),
            ua(ca, e))
          : la(fa),
          ua(fa, n);
      }
      var xa = null,
        ka = null,
        _a = i.unstable_runWithPriority,
        wa = i.unstable_scheduleCallback,
        Sa = i.unstable_cancelCallback,
        Oa = i.unstable_shouldYield,
        Ma = i.unstable_requestPaint,
        Ea = i.unstable_now,
        Ca = i.unstable_getCurrentPriorityLevel,
        Pa = i.unstable_ImmediatePriority,
        Ta = i.unstable_UserBlockingPriority,
        Da = i.unstable_NormalPriority,
        La = i.unstable_LowPriority,
        ja = i.unstable_IdlePriority,
        Ra = {},
        Aa = void 0 !== Ma ? Ma : function () {},
        za = null,
        Fa = null,
        Na = !1,
        Ia = Ea(),
        Va =
          1e4 > Ia
            ? Ea
            : function () {
                return Ea() - Ia;
              };
      function Ba() {
        switch (Ca()) {
          case Pa:
            return 99;
          case Ta:
            return 98;
          case Da:
            return 97;
          case La:
            return 96;
          case ja:
            return 95;
          default:
            throw Error(o(332));
        }
      }
      function Wa(e) {
        switch (e) {
          case 99:
            return Pa;
          case 98:
            return Ta;
          case 97:
            return Da;
          case 96:
            return La;
          case 95:
            return ja;
          default:
            throw Error(o(332));
        }
      }
      function Ua(e, t) {
        return (e = Wa(e)), _a(e, t);
      }
      function $a(e, t, n) {
        return (e = Wa(e)), wa(e, t, n);
      }
      function Ha() {
        if (null !== Fa) {
          var e = Fa;
          (Fa = null), Sa(e);
        }
        Ya();
      }
      function Ya() {
        if (!Na && null !== za) {
          Na = !0;
          var e = 0;
          try {
            var t = za;
            Ua(99, function () {
              for (; e < t.length; e++) {
                var n = t[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
            }),
              (za = null);
          } catch (n) {
            throw (null !== za && (za = za.slice(e + 1)), wa(Pa, Ha), n);
          } finally {
            Na = !1;
          }
        }
      }
      var Qa = k.ReactCurrentBatchConfig;
      function qa(e, t) {
        if (e && e.defaultProps) {
          for (var n in ((t = a({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      var Xa = oa(null),
        Ka = null,
        Ga = null,
        Za = null;
      function Ja() {
        Za = Ga = Ka = null;
      }
      function ei(e) {
        var t = Xa.current;
        la(Xa), (e.type._context._currentValue = t);
      }
      function ti(e, t) {
        for (; null !== e; ) {
          var n = e.alternate;
          if ((e.childLanes & t) === t) {
            if (null === n || (n.childLanes & t) === t) break;
            n.childLanes |= t;
          } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
          e = e.return;
        }
      }
      function ni(e, t) {
        (Ka = e),
          (Za = Ga = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 !== (e.lanes & t) && (Ro = !0), (e.firstContext = null));
      }
      function ri(e, t) {
        if (Za !== e && !1 !== t && 0 !== t)
          if (
            (("number" === typeof t && 1073741823 !== t) ||
              ((Za = e), (t = 1073741823)),
            (t = { context: e, observedBits: t, next: null }),
            null === Ga)
          ) {
            if (null === Ka) throw Error(o(308));
            (Ga = t),
              (Ka.dependencies = {
                lanes: 0,
                firstContext: t,
                responders: null,
              });
          } else Ga = Ga.next = t;
        return e._currentValue;
      }
      var ai = !1;
      function ii(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null },
          effects: null,
        };
      }
      function oi(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              effects: e.effects,
            });
      }
      function li(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
        };
      }
      function ui(e, t) {
        if (null !== (e = e.updateQueue)) {
          var n = (e = e.shared).pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
      }
      function si(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var a = null,
            i = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var o = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null,
              };
              null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
            } while (null !== n);
            null === i ? (a = i = t) : (i = i.next = t);
          } else a = i = t;
          return (
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: a,
              lastBaseUpdate: i,
              shared: r.shared,
              effects: r.effects,
            }),
            void (e.updateQueue = n)
          );
        }
        null === (e = n.lastBaseUpdate)
          ? (n.firstBaseUpdate = t)
          : (e.next = t),
          (n.lastBaseUpdate = t);
      }
      function ci(e, t, n, r) {
        var i = e.updateQueue;
        ai = !1;
        var o = i.firstBaseUpdate,
          l = i.lastBaseUpdate,
          u = i.shared.pending;
        if (null !== u) {
          i.shared.pending = null;
          var s = u,
            c = s.next;
          (s.next = null), null === l ? (o = c) : (l.next = c), (l = s);
          var f = e.alternate;
          if (null !== f) {
            var d = (f = f.updateQueue).lastBaseUpdate;
            d !== l &&
              (null === d ? (f.firstBaseUpdate = c) : (d.next = c),
              (f.lastBaseUpdate = s));
          }
        }
        if (null !== o) {
          for (d = i.baseState, l = 0, f = c = s = null; ; ) {
            u = o.lane;
            var h = o.eventTime;
            if ((r & u) === u) {
              null !== f &&
                (f = f.next = {
                  eventTime: h,
                  lane: 0,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                });
              e: {
                var p = e,
                  v = o;
                switch (((u = t), (h = n), v.tag)) {
                  case 1:
                    if ("function" === typeof (p = v.payload)) {
                      d = p.call(h, d, u);
                      break e;
                    }
                    d = p;
                    break e;
                  case 3:
                    p.flags = (-4097 & p.flags) | 64;
                  case 0:
                    if (
                      null ===
                        (u =
                          "function" === typeof (p = v.payload)
                            ? p.call(h, d, u)
                            : p) ||
                      void 0 === u
                    )
                      break e;
                    d = a({}, d, u);
                    break e;
                  case 2:
                    ai = !0;
                }
              }
              null !== o.callback &&
                ((e.flags |= 32),
                null === (u = i.effects) ? (i.effects = [o]) : u.push(o));
            } else
              (h = {
                eventTime: h,
                lane: u,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              }),
                null === f ? ((c = f = h), (s = d)) : (f = f.next = h),
                (l |= u);
            if (null === (o = o.next)) {
              if (null === (u = i.shared.pending)) break;
              (o = u.next),
                (u.next = null),
                (i.lastBaseUpdate = u),
                (i.shared.pending = null);
            }
          }
          null === f && (s = d),
            (i.baseState = s),
            (i.firstBaseUpdate = c),
            (i.lastBaseUpdate = f),
            (Nl |= l),
            (e.lanes = l),
            (e.memoizedState = d);
        }
      }
      function fi(e, t, n) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              a = r.callback;
            if (null !== a) {
              if (((r.callback = null), (r = n), "function" !== typeof a))
                throw Error(o(191, a));
              a.call(r);
            }
          }
      }
      var di = new r.Component().refs;
      function hi(e, t, n, r) {
        (n =
          null === (n = n(r, (t = e.memoizedState))) || void 0 === n
            ? t
            : a({}, t, n)),
          (e.memoizedState = n),
          0 === e.lanes && (e.updateQueue.baseState = n);
      }
      var pi = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && Ke(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = su(),
            a = cu(e),
            i = li(r, a);
          (i.payload = t),
            void 0 !== n && null !== n && (i.callback = n),
            ui(e, i),
            fu(e, a, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = su(),
            a = cu(e),
            i = li(r, a);
          (i.tag = 1),
            (i.payload = t),
            void 0 !== n && null !== n && (i.callback = n),
            ui(e, i),
            fu(e, a, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = su(),
            r = cu(e),
            a = li(n, r);
          (a.tag = 2),
            void 0 !== t && null !== t && (a.callback = t),
            ui(e, a),
            fu(e, r, n);
        },
      };
      function vi(e, t, n, r, a, i, o) {
        return "function" === typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, i, o)
          : !t.prototype ||
              !t.prototype.isPureReactComponent ||
              !sr(n, r) ||
              !sr(a, i);
      }
      function gi(e, t, n) {
        var r = !1,
          a = sa,
          i = t.contextType;
        return (
          "object" === typeof i && null !== i
            ? (i = ri(i))
            : ((a = pa(t) ? da : ca.current),
              (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                ? ha(e, a)
                : sa)),
          (t = new t(n, i)),
          (e.memoizedState =
            null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = pi),
          (e.stateNode = t),
          (t._reactInternals = e),
          r &&
            (((e =
              e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
          t
        );
      }
      function mi(e, t, n, r) {
        (e = t.state),
          "function" === typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(n, r),
          "function" === typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && pi.enqueueReplaceState(t, t.state, null);
      }
      function yi(e, t, n, r) {
        var a = e.stateNode;
        (a.props = n), (a.state = e.memoizedState), (a.refs = di), ii(e);
        var i = t.contextType;
        "object" === typeof i && null !== i
          ? (a.context = ri(i))
          : ((i = pa(t) ? da : ca.current), (a.context = ha(e, i))),
          ci(e, n, a, r),
          (a.state = e.memoizedState),
          "function" === typeof (i = t.getDerivedStateFromProps) &&
            (hi(e, t, i, n), (a.state = e.memoizedState)),
          "function" === typeof t.getDerivedStateFromProps ||
            "function" === typeof a.getSnapshotBeforeUpdate ||
            ("function" !== typeof a.UNSAFE_componentWillMount &&
              "function" !== typeof a.componentWillMount) ||
            ((t = a.state),
            "function" === typeof a.componentWillMount &&
              a.componentWillMount(),
            "function" === typeof a.UNSAFE_componentWillMount &&
              a.UNSAFE_componentWillMount(),
            t !== a.state && pi.enqueueReplaceState(a, a.state, null),
            ci(e, n, a, r),
            (a.state = e.memoizedState)),
          "function" === typeof a.componentDidMount && (e.flags |= 4);
      }
      var bi = Array.isArray;
      function xi(e, t, n) {
        if (
          null !== (e = n.ref) &&
          "function" !== typeof e &&
          "object" !== typeof e
        ) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(o(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(o(147, e));
            var a = "" + e;
            return null !== t &&
              null !== t.ref &&
              "function" === typeof t.ref &&
              t.ref._stringRef === a
              ? t.ref
              : (((t = function (e) {
                  var t = r.refs;
                  t === di && (t = r.refs = {}),
                    null === e ? delete t[a] : (t[a] = e);
                })._stringRef = a),
                t);
          }
          if ("string" !== typeof e) throw Error(o(284));
          if (!n._owner) throw Error(o(290, e));
        }
        return e;
      }
      function ki(e, t) {
        if ("textarea" !== e.type)
          throw Error(
            o(
              31,
              "[object Object]" === Object.prototype.toString.call(t)
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : t
            )
          );
      }
      function _i(e) {
        function t(t, n) {
          if (e) {
            var r = t.lastEffect;
            null !== r
              ? ((r.nextEffect = n), (t.lastEffect = n))
              : (t.firstEffect = t.lastEffect = n),
              (n.nextEffect = null),
              (n.flags = 8);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e, t) {
          for (e = new Map(); null !== t; )
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
              (t = t.sibling);
          return e;
        }
        function a(e, t) {
          return ((e = Uu(e, t)).index = 0), (e.sibling = null), e;
        }
        function i(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.flags = 2), n)
                  : r
                : ((t.flags = 2), n)
              : n
          );
        }
        function l(t) {
          return e && null === t.alternate && (t.flags = 2), t;
        }
        function u(e, t, n, r) {
          return null === t || 6 !== t.tag
            ? (((t = Qu(n, e.mode, r)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function s(e, t, n, r) {
          return null !== t && t.elementType === n.type
            ? (((r = a(t, n.props)).ref = xi(e, t, n)), (r.return = e), r)
            : (((r = $u(n.type, n.key, n.props, null, e.mode, r)).ref = xi(
                e,
                t,
                n
              )),
              (r.return = e),
              r);
        }
        function c(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = qu(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
        }
        function f(e, t, n, r, i) {
          return null === t || 7 !== t.tag
            ? (((t = Hu(n, e.mode, r, i)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function d(e, t, n) {
          if ("string" === typeof t || "number" === typeof t)
            return ((t = Qu("" + t, e.mode, n)).return = e), t;
          if ("object" === typeof t && null !== t) {
            switch (t.$$typeof) {
              case _:
                return (
                  ((n = $u(t.type, t.key, t.props, null, e.mode, n)).ref = xi(
                    e,
                    null,
                    t
                  )),
                  (n.return = e),
                  n
                );
              case w:
                return ((t = qu(t, e.mode, n)).return = e), t;
            }
            if (bi(t) || W(t))
              return ((t = Hu(t, e.mode, n, null)).return = e), t;
            ki(e, t);
          }
          return null;
        }
        function h(e, t, n, r) {
          var a = null !== t ? t.key : null;
          if ("string" === typeof n || "number" === typeof n)
            return null !== a ? null : u(e, t, "" + n, r);
          if ("object" === typeof n && null !== n) {
            switch (n.$$typeof) {
              case _:
                return n.key === a
                  ? n.type === S
                    ? f(e, t, n.props.children, r, a)
                    : s(e, t, n, r)
                  : null;
              case w:
                return n.key === a ? c(e, t, n, r) : null;
            }
            if (bi(n) || W(n)) return null !== a ? null : f(e, t, n, r, null);
            ki(e, n);
          }
          return null;
        }
        function p(e, t, n, r, a) {
          if ("string" === typeof r || "number" === typeof r)
            return u(t, (e = e.get(n) || null), "" + r, a);
          if ("object" === typeof r && null !== r) {
            switch (r.$$typeof) {
              case _:
                return (
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r.type === S
                    ? f(t, e, r.props.children, a, r.key)
                    : s(t, e, r, a)
                );
              case w:
                return c(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  a
                );
            }
            if (bi(r) || W(r)) return f(t, (e = e.get(n) || null), r, a, null);
            ki(t, r);
          }
          return null;
        }
        function v(a, o, l, u) {
          for (
            var s = null, c = null, f = o, v = (o = 0), g = null;
            null !== f && v < l.length;
            v++
          ) {
            f.index > v ? ((g = f), (f = null)) : (g = f.sibling);
            var m = h(a, f, l[v], u);
            if (null === m) {
              null === f && (f = g);
              break;
            }
            e && f && null === m.alternate && t(a, f),
              (o = i(m, o, v)),
              null === c ? (s = m) : (c.sibling = m),
              (c = m),
              (f = g);
          }
          if (v === l.length) return n(a, f), s;
          if (null === f) {
            for (; v < l.length; v++)
              null !== (f = d(a, l[v], u)) &&
                ((o = i(f, o, v)),
                null === c ? (s = f) : (c.sibling = f),
                (c = f));
            return s;
          }
          for (f = r(a, f); v < l.length; v++)
            null !== (g = p(f, a, v, l[v], u)) &&
              (e &&
                null !== g.alternate &&
                f.delete(null === g.key ? v : g.key),
              (o = i(g, o, v)),
              null === c ? (s = g) : (c.sibling = g),
              (c = g));
          return (
            e &&
              f.forEach(function (e) {
                return t(a, e);
              }),
            s
          );
        }
        function g(a, l, u, s) {
          var c = W(u);
          if ("function" !== typeof c) throw Error(o(150));
          if (null == (u = c.call(u))) throw Error(o(151));
          for (
            var f = (c = null), v = l, g = (l = 0), m = null, y = u.next();
            null !== v && !y.done;
            g++, y = u.next()
          ) {
            v.index > g ? ((m = v), (v = null)) : (m = v.sibling);
            var b = h(a, v, y.value, s);
            if (null === b) {
              null === v && (v = m);
              break;
            }
            e && v && null === b.alternate && t(a, v),
              (l = i(b, l, g)),
              null === f ? (c = b) : (f.sibling = b),
              (f = b),
              (v = m);
          }
          if (y.done) return n(a, v), c;
          if (null === v) {
            for (; !y.done; g++, y = u.next())
              null !== (y = d(a, y.value, s)) &&
                ((l = i(y, l, g)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return c;
          }
          for (v = r(a, v); !y.done; g++, y = u.next())
            null !== (y = p(v, a, g, y.value, s)) &&
              (e &&
                null !== y.alternate &&
                v.delete(null === y.key ? g : y.key),
              (l = i(y, l, g)),
              null === f ? (c = y) : (f.sibling = y),
              (f = y));
          return (
            e &&
              v.forEach(function (e) {
                return t(a, e);
              }),
            c
          );
        }
        return function (e, r, i, u) {
          var s =
            "object" === typeof i &&
            null !== i &&
            i.type === S &&
            null === i.key;
          s && (i = i.props.children);
          var c = "object" === typeof i && null !== i;
          if (c)
            switch (i.$$typeof) {
              case _:
                e: {
                  for (c = i.key, s = r; null !== s; ) {
                    if (s.key === c) {
                      switch (s.tag) {
                        case 7:
                          if (i.type === S) {
                            n(e, s.sibling),
                              ((r = a(s, i.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                          break;
                        default:
                          if (s.elementType === i.type) {
                            n(e, s.sibling),
                              ((r = a(s, i.props)).ref = xi(e, s, i)),
                              (r.return = e),
                              (e = r);
                            break e;
                          }
                      }
                      n(e, s);
                      break;
                    }
                    t(e, s), (s = s.sibling);
                  }
                  i.type === S
                    ? (((r = Hu(
                        i.props.children,
                        e.mode,
                        u,
                        i.key
                      )).return = e),
                      (e = r))
                    : (((u = $u(
                        i.type,
                        i.key,
                        i.props,
                        null,
                        e.mode,
                        u
                      )).ref = xi(e, r, i)),
                      (u.return = e),
                      (e = u));
                }
                return l(e);
              case w:
                e: {
                  for (s = i.key; null !== r; ) {
                    if (r.key === s) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === i.containerInfo &&
                        r.stateNode.implementation === i.implementation
                      ) {
                        n(e, r.sibling),
                          ((r = a(r, i.children || [])).return = e),
                          (e = r);
                        break e;
                      }
                      n(e, r);
                      break;
                    }
                    t(e, r), (r = r.sibling);
                  }
                  ((r = qu(i, e.mode, u)).return = e), (e = r);
                }
                return l(e);
            }
          if ("string" === typeof i || "number" === typeof i)
            return (
              (i = "" + i),
              null !== r && 6 === r.tag
                ? (n(e, r.sibling), ((r = a(r, i)).return = e), (e = r))
                : (n(e, r), ((r = Qu(i, e.mode, u)).return = e), (e = r)),
              l(e)
            );
          if (bi(i)) return v(e, r, i, u);
          if (W(i)) return g(e, r, i, u);
          if ((c && ki(e, i), "undefined" === typeof i && !s))
            switch (e.tag) {
              case 1:
              case 22:
              case 0:
              case 11:
              case 15:
                throw Error(o(152, Q(e.type) || "Component"));
            }
          return n(e, r);
        };
      }
      var wi = _i(!0),
        Si = _i(!1),
        Oi = {},
        Mi = oa(Oi),
        Ei = oa(Oi),
        Ci = oa(Oi);
      function Pi(e) {
        if (e === Oi) throw Error(o(174));
        return e;
      }
      function Ti(e, t) {
        switch ((ua(Ci, t), ua(Ei, e), ua(Mi, Oi), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : pe(null, "");
            break;
          default:
            t = pe(
              (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
              (e = e.tagName)
            );
        }
        la(Mi), ua(Mi, t);
      }
      function Di() {
        la(Mi), la(Ei), la(Ci);
      }
      function Li(e) {
        Pi(Ci.current);
        var t = Pi(Mi.current),
          n = pe(t, e.type);
        t !== n && (ua(Ei, e), ua(Mi, n));
      }
      function ji(e) {
        Ei.current === e && (la(Mi), la(Ei));
      }
      var Ri = oa(0);
      function Ai(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (
              null !== n &&
              (null === (n = n.dehydrated) ||
                "$?" === n.data ||
                "$!" === n.data)
            )
              return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 !== (64 & t.flags)) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      var zi = null,
        Fi = null,
        Ni = !1;
      function Ii(e, t) {
        var n = Bu(5, null, null, 0);
        (n.elementType = "DELETED"),
          (n.type = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          (n.flags = 8),
          null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
      }
      function Vi(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !==
                (t =
                  1 !== t.nodeType ||
                  n.toLowerCase() !== t.nodeName.toLowerCase()
                    ? null
                    : t) && ((e.stateNode = t), !0)
            );
          case 6:
            return (
              null !==
                (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), !0)
            );
          case 13:
          default:
            return !1;
        }
      }
      function Bi(e) {
        if (Ni) {
          var t = Fi;
          if (t) {
            var n = t;
            if (!Vi(e, t)) {
              if (!(t = Hr(n.nextSibling)) || !Vi(e, t))
                return (
                  (e.flags = (-1025 & e.flags) | 2), (Ni = !1), void (zi = e)
                );
              Ii(zi, n);
            }
            (zi = e), (Fi = Hr(t.firstChild));
          } else (e.flags = (-1025 & e.flags) | 2), (Ni = !1), (zi = e);
        }
      }
      function Wi(e) {
        for (
          e = e.return;
          null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

        )
          e = e.return;
        zi = e;
      }
      function Ui(e) {
        if (e !== zi) return !1;
        if (!Ni) return Wi(e), (Ni = !0), !1;
        var t = e.type;
        if (
          5 !== e.tag ||
          ("head" !== t && "body" !== t && !Br(t, e.memoizedProps))
        )
          for (t = Fi; t; ) Ii(e, t), (t = Hr(t.nextSibling));
        if ((Wi(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(o(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ("/$" === n) {
                  if (0 === t) {
                    Fi = Hr(e.nextSibling);
                    break e;
                  }
                  t--;
                } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
              }
              e = e.nextSibling;
            }
            Fi = null;
          }
        } else Fi = zi ? Hr(e.stateNode.nextSibling) : null;
        return !0;
      }
      function $i() {
        (Fi = zi = null), (Ni = !1);
      }
      var Hi = [];
      function Yi() {
        for (var e = 0; e < Hi.length; e++)
          Hi[e]._workInProgressVersionPrimary = null;
        Hi.length = 0;
      }
      var Qi = k.ReactCurrentDispatcher,
        qi = k.ReactCurrentBatchConfig,
        Xi = 0,
        Ki = null,
        Gi = null,
        Zi = null,
        Ji = !1,
        eo = !1;
      function to() {
        throw Error(o(321));
      }
      function no(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!lr(e[n], t[n])) return !1;
        return !0;
      }
      function ro(e, t, n, r, a, i) {
        if (
          ((Xi = i),
          (Ki = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (Qi.current = null === e || null === e.memoizedState ? To : Do),
          (e = n(r, a)),
          eo)
        ) {
          i = 0;
          do {
            if (((eo = !1), !(25 > i))) throw Error(o(301));
            (i += 1),
              (Zi = Gi = null),
              (t.updateQueue = null),
              (Qi.current = Lo),
              (e = n(r, a));
          } while (eo);
        }
        if (
          ((Qi.current = Po),
          (t = null !== Gi && null !== Gi.next),
          (Xi = 0),
          (Zi = Gi = Ki = null),
          (Ji = !1),
          t)
        )
          throw Error(o(300));
        return e;
      }
      function ao() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          null === Zi ? (Ki.memoizedState = Zi = e) : (Zi = Zi.next = e), Zi
        );
      }
      function io() {
        if (null === Gi) {
          var e = Ki.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = Gi.next;
        var t = null === Zi ? Ki.memoizedState : Zi.next;
        if (null !== t) (Zi = t), (Gi = e);
        else {
          if (null === e) throw Error(o(310));
          (e = {
            memoizedState: (Gi = e).memoizedState,
            baseState: Gi.baseState,
            baseQueue: Gi.baseQueue,
            queue: Gi.queue,
            next: null,
          }),
            null === Zi ? (Ki.memoizedState = Zi = e) : (Zi = Zi.next = e);
        }
        return Zi;
      }
      function oo(e, t) {
        return "function" === typeof t ? t(e) : t;
      }
      function lo(e) {
        var t = io(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = Gi,
          a = r.baseQueue,
          i = n.pending;
        if (null !== i) {
          if (null !== a) {
            var l = a.next;
            (a.next = i.next), (i.next = l);
          }
          (r.baseQueue = a = i), (n.pending = null);
        }
        if (null !== a) {
          (a = a.next), (r = r.baseState);
          var u = (l = i = null),
            s = a;
          do {
            var c = s.lane;
            if ((Xi & c) === c)
              null !== u &&
                (u = u.next = {
                  lane: 0,
                  action: s.action,
                  eagerReducer: s.eagerReducer,
                  eagerState: s.eagerState,
                  next: null,
                }),
                (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
            else {
              var f = {
                lane: c,
                action: s.action,
                eagerReducer: s.eagerReducer,
                eagerState: s.eagerState,
                next: null,
              };
              null === u ? ((l = u = f), (i = r)) : (u = u.next = f),
                (Ki.lanes |= c),
                (Nl |= c);
            }
            s = s.next;
          } while (null !== s && s !== a);
          null === u ? (i = r) : (u.next = l),
            lr(r, t.memoizedState) || (Ro = !0),
            (t.memoizedState = r),
            (t.baseState = i),
            (t.baseQueue = u),
            (n.lastRenderedState = r);
        }
        return [t.memoizedState, n.dispatch];
      }
      function uo(e) {
        var t = io(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          a = n.pending,
          i = t.memoizedState;
        if (null !== a) {
          n.pending = null;
          var l = (a = a.next);
          do {
            (i = e(i, l.action)), (l = l.next);
          } while (l !== a);
          lr(i, t.memoizedState) || (Ro = !0),
            (t.memoizedState = i),
            null === t.baseQueue && (t.baseState = i),
            (n.lastRenderedState = i);
        }
        return [i, r];
      }
      function so(e, t, n) {
        var r = t._getVersion;
        r = r(t._source);
        var a = t._workInProgressVersionPrimary;
        if (
          (null !== a
            ? (e = a === r)
            : ((e = e.mutableReadLanes),
              (e = (Xi & e) === e) &&
                ((t._workInProgressVersionPrimary = r), Hi.push(t))),
          e)
        )
          return n(t._source);
        throw (Hi.push(t), Error(o(350)));
      }
      function co(e, t, n, r) {
        var a = Tl;
        if (null === a) throw Error(o(349));
        var i = t._getVersion,
          l = i(t._source),
          u = Qi.current,
          s = u.useState(function () {
            return so(a, t, n);
          }),
          c = s[1],
          f = s[0];
        s = Zi;
        var d = e.memoizedState,
          h = d.refs,
          p = h.getSnapshot,
          v = d.source;
        d = d.subscribe;
        var g = Ki;
        return (
          (e.memoizedState = { refs: h, source: t, subscribe: r }),
          u.useEffect(
            function () {
              (h.getSnapshot = n), (h.setSnapshot = c);
              var e = i(t._source);
              if (!lr(l, e)) {
                (e = n(t._source)),
                  lr(f, e) ||
                    (c(e),
                    (e = cu(g)),
                    (a.mutableReadLanes |= e & a.pendingLanes)),
                  (e = a.mutableReadLanes),
                  (a.entangledLanes |= e);
                for (var r = a.entanglements, o = e; 0 < o; ) {
                  var u = 31 - $t(o),
                    s = 1 << u;
                  (r[u] |= e), (o &= ~s);
                }
              }
            },
            [n, t, r]
          ),
          u.useEffect(
            function () {
              return r(t._source, function () {
                var e = h.getSnapshot,
                  n = h.setSnapshot;
                try {
                  n(e(t._source));
                  var r = cu(g);
                  a.mutableReadLanes |= r & a.pendingLanes;
                } catch (i) {
                  n(function () {
                    throw i;
                  });
                }
              });
            },
            [t, r]
          ),
          (lr(p, n) && lr(v, t) && lr(d, r)) ||
            (((e = {
              pending: null,
              dispatch: null,
              lastRenderedReducer: oo,
              lastRenderedState: f,
            }).dispatch = c = Co.bind(null, Ki, e)),
            (s.queue = e),
            (s.baseQueue = null),
            (f = so(a, t, n)),
            (s.memoizedState = s.baseState = f)),
          f
        );
      }
      function fo(e, t, n) {
        return co(io(), e, t, n);
      }
      function ho(e) {
        var t = ao();
        return (
          "function" === typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = (e = t.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: oo,
            lastRenderedState: e,
          }).dispatch = Co.bind(null, Ki, e)),
          [t.memoizedState, e]
        );
      }
      function po(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === (t = Ki.updateQueue)
            ? ((t = { lastEffect: null }),
              (Ki.updateQueue = t),
              (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function vo(e) {
        return (e = { current: e }), (ao().memoizedState = e);
      }
      function go() {
        return io().memoizedState;
      }
      function mo(e, t, n, r) {
        var a = ao();
        (Ki.flags |= e),
          (a.memoizedState = po(1 | t, n, void 0, void 0 === r ? null : r));
      }
      function yo(e, t, n, r) {
        var a = io();
        r = void 0 === r ? null : r;
        var i = void 0;
        if (null !== Gi) {
          var o = Gi.memoizedState;
          if (((i = o.destroy), null !== r && no(r, o.deps)))
            return void po(t, n, i, r);
        }
        (Ki.flags |= e), (a.memoizedState = po(1 | t, n, i, r));
      }
      function bo(e, t) {
        return mo(516, 4, e, t);
      }
      function xo(e, t) {
        return yo(516, 4, e, t);
      }
      function ko(e, t) {
        return yo(4, 2, e, t);
      }
      function _o(e, t) {
        return "function" === typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null !== t && void 0 !== t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function wo(e, t, n) {
        return (
          (n = null !== n && void 0 !== n ? n.concat([e]) : null),
          yo(4, 2, _o.bind(null, t, e), n)
        );
      }
      function So() {}
      function Oo(e, t) {
        var n = io();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && no(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e);
      }
      function Mo(e, t) {
        var n = io();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && no(t, r[1])
          ? r[0]
          : ((e = e()), (n.memoizedState = [e, t]), e);
      }
      function Eo(e, t) {
        var n = Ba();
        Ua(98 > n ? 98 : n, function () {
          e(!0);
        }),
          Ua(97 < n ? 97 : n, function () {
            var n = qi.transition;
            qi.transition = 1;
            try {
              e(!1), t();
            } finally {
              qi.transition = n;
            }
          });
      }
      function Co(e, t, n) {
        var r = su(),
          a = cu(e),
          i = {
            lane: a,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null,
          },
          o = t.pending;
        if (
          (null === o ? (i.next = i) : ((i.next = o.next), (o.next = i)),
          (t.pending = i),
          (o = e.alternate),
          e === Ki || (null !== o && o === Ki))
        )
          eo = Ji = !0;
        else {
          if (
            0 === e.lanes &&
            (null === o || 0 === o.lanes) &&
            null !== (o = t.lastRenderedReducer)
          )
            try {
              var l = t.lastRenderedState,
                u = o(l, n);
              if (((i.eagerReducer = o), (i.eagerState = u), lr(u, l))) return;
            } catch (s) {}
          fu(e, a, r);
        }
      }
      var Po = {
          readContext: ri,
          useCallback: to,
          useContext: to,
          useEffect: to,
          useImperativeHandle: to,
          useLayoutEffect: to,
          useMemo: to,
          useReducer: to,
          useRef: to,
          useState: to,
          useDebugValue: to,
          useDeferredValue: to,
          useTransition: to,
          useMutableSource: to,
          useOpaqueIdentifier: to,
          unstable_isNewReconciler: !1,
        },
        To = {
          readContext: ri,
          useCallback: function (e, t) {
            return (ao().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: ri,
          useEffect: bo,
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null !== n && void 0 !== n ? n.concat([e]) : null),
              mo(4, 2, _o.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return mo(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = ao();
            return (
              (t = void 0 === t ? null : t),
              (e = e()),
              (n.memoizedState = [e, t]),
              e
            );
          },
          useReducer: function (e, t, n) {
            var r = ao();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = (e = r.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t,
              }).dispatch = Co.bind(null, Ki, e)),
              [r.memoizedState, e]
            );
          },
          useRef: vo,
          useState: ho,
          useDebugValue: So,
          useDeferredValue: function (e) {
            var t = ho(e),
              n = t[0],
              r = t[1];
            return (
              bo(
                function () {
                  var t = qi.transition;
                  qi.transition = 1;
                  try {
                    r(e);
                  } finally {
                    qi.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = ho(!1),
              t = e[0];
            return vo((e = Eo.bind(null, e[1]))), [e, t];
          },
          useMutableSource: function (e, t, n) {
            var r = ao();
            return (
              (r.memoizedState = {
                refs: { getSnapshot: t, setSnapshot: null },
                source: e,
                subscribe: n,
              }),
              co(r, e, t, n)
            );
          },
          useOpaqueIdentifier: function () {
            if (Ni) {
              var e = !1,
                t = (function (e) {
                  return { $$typeof: A, toString: e, valueOf: e };
                })(function () {
                  throw (
                    (e || ((e = !0), n("r:" + (Qr++).toString(36))),
                    Error(o(355)))
                  );
                }),
                n = ho(t)[1];
              return (
                0 === (2 & Ki.mode) &&
                  ((Ki.flags |= 516),
                  po(
                    5,
                    function () {
                      n("r:" + (Qr++).toString(36));
                    },
                    void 0,
                    null
                  )),
                t
              );
            }
            return ho((t = "r:" + (Qr++).toString(36))), t;
          },
          unstable_isNewReconciler: !1,
        },
        Do = {
          readContext: ri,
          useCallback: Oo,
          useContext: ri,
          useEffect: xo,
          useImperativeHandle: wo,
          useLayoutEffect: ko,
          useMemo: Mo,
          useReducer: lo,
          useRef: go,
          useState: function () {
            return lo(oo);
          },
          useDebugValue: So,
          useDeferredValue: function (e) {
            var t = lo(oo),
              n = t[0],
              r = t[1];
            return (
              xo(
                function () {
                  var t = qi.transition;
                  qi.transition = 1;
                  try {
                    r(e);
                  } finally {
                    qi.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = lo(oo)[0];
            return [go().current, e];
          },
          useMutableSource: fo,
          useOpaqueIdentifier: function () {
            return lo(oo)[0];
          },
          unstable_isNewReconciler: !1,
        },
        Lo = {
          readContext: ri,
          useCallback: Oo,
          useContext: ri,
          useEffect: xo,
          useImperativeHandle: wo,
          useLayoutEffect: ko,
          useMemo: Mo,
          useReducer: uo,
          useRef: go,
          useState: function () {
            return uo(oo);
          },
          useDebugValue: So,
          useDeferredValue: function (e) {
            var t = uo(oo),
              n = t[0],
              r = t[1];
            return (
              xo(
                function () {
                  var t = qi.transition;
                  qi.transition = 1;
                  try {
                    r(e);
                  } finally {
                    qi.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = uo(oo)[0];
            return [go().current, e];
          },
          useMutableSource: fo,
          useOpaqueIdentifier: function () {
            return uo(oo)[0];
          },
          unstable_isNewReconciler: !1,
        },
        jo = k.ReactCurrentOwner,
        Ro = !1;
      function Ao(e, t, n, r) {
        t.child = null === e ? Si(t, null, n, r) : wi(t, e.child, n, r);
      }
      function zo(e, t, n, r, a) {
        n = n.render;
        var i = t.ref;
        return (
          ni(t, a),
          (r = ro(e, t, n, r, i, a)),
          null === e || Ro
            ? ((t.flags |= 1), Ao(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -517),
              (e.lanes &= ~a),
              nl(e, t, a))
        );
      }
      function Fo(e, t, n, r, a, i) {
        if (null === e) {
          var o = n.type;
          return "function" !== typeof o ||
            Wu(o) ||
            void 0 !== o.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = $u(n.type, null, r, t, t.mode, i)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = o), No(e, t, o, r, a, i));
        }
        return (
          (o = e.child),
          0 === (a & i) &&
          ((a = o.memoizedProps),
          (n = null !== (n = n.compare) ? n : sr)(a, r) && e.ref === t.ref)
            ? nl(e, t, i)
            : ((t.flags |= 1),
              ((e = Uu(o, r)).ref = t.ref),
              (e.return = t),
              (t.child = e))
        );
      }
      function No(e, t, n, r, a, i) {
        if (null !== e && sr(e.memoizedProps, r) && e.ref === t.ref) {
          if (((Ro = !1), 0 === (i & a)))
            return (t.lanes = e.lanes), nl(e, t, i);
          0 !== (16384 & e.flags) && (Ro = !0);
        }
        return Bo(e, t, n, r, i);
      }
      function Io(e, t, n) {
        var r = t.pendingProps,
          a = r.children,
          i = null !== e ? e.memoizedState : null;
        if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
          if (0 === (4 & t.mode))
            (t.memoizedState = { baseLanes: 0 }), bu(t, n);
          else {
            if (0 === (1073741824 & n))
              return (
                (e = null !== i ? i.baseLanes | n : n),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = { baseLanes: e }),
                bu(t, e),
                null
              );
            (t.memoizedState = { baseLanes: 0 }),
              bu(t, null !== i ? i.baseLanes : n);
          }
        else
          null !== i
            ? ((r = i.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            bu(t, r);
        return Ao(e, t, a, n), t.child;
      }
      function Vo(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          (t.flags |= 128);
      }
      function Bo(e, t, n, r, a) {
        var i = pa(n) ? da : ca.current;
        return (
          (i = ha(t, i)),
          ni(t, a),
          (n = ro(e, t, n, r, i, a)),
          null === e || Ro
            ? ((t.flags |= 1), Ao(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -517),
              (e.lanes &= ~a),
              nl(e, t, a))
        );
      }
      function Wo(e, t, n, r, a) {
        if (pa(n)) {
          var i = !0;
          ya(t);
        } else i = !1;
        if ((ni(t, a), null === t.stateNode))
          null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            gi(t, n, r),
            yi(t, n, r, a),
            (r = !0);
        else if (null === e) {
          var o = t.stateNode,
            l = t.memoizedProps;
          o.props = l;
          var u = o.context,
            s = n.contextType;
          "object" === typeof s && null !== s
            ? (s = ri(s))
            : (s = ha(t, (s = pa(n) ? da : ca.current)));
          var c = n.getDerivedStateFromProps,
            f =
              "function" === typeof c ||
              "function" === typeof o.getSnapshotBeforeUpdate;
          f ||
            ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
              "function" !== typeof o.componentWillReceiveProps) ||
            ((l !== r || u !== s) && mi(t, o, r, s)),
            (ai = !1);
          var d = t.memoizedState;
          (o.state = d),
            ci(t, r, o, a),
            (u = t.memoizedState),
            l !== r || d !== u || fa.current || ai
              ? ("function" === typeof c &&
                  (hi(t, n, c, r), (u = t.memoizedState)),
                (l = ai || vi(t, n, l, r, d, u, s))
                  ? (f ||
                      ("function" !== typeof o.UNSAFE_componentWillMount &&
                        "function" !== typeof o.componentWillMount) ||
                      ("function" === typeof o.componentWillMount &&
                        o.componentWillMount(),
                      "function" === typeof o.UNSAFE_componentWillMount &&
                        o.UNSAFE_componentWillMount()),
                    "function" === typeof o.componentDidMount && (t.flags |= 4))
                  : ("function" === typeof o.componentDidMount &&
                      (t.flags |= 4),
                    (t.memoizedProps = r),
                    (t.memoizedState = u)),
                (o.props = r),
                (o.state = u),
                (o.context = s),
                (r = l))
              : ("function" === typeof o.componentDidMount && (t.flags |= 4),
                (r = !1));
        } else {
          (o = t.stateNode),
            oi(e, t),
            (l = t.memoizedProps),
            (s = t.type === t.elementType ? l : qa(t.type, l)),
            (o.props = s),
            (f = t.pendingProps),
            (d = o.context),
            "object" === typeof (u = n.contextType) && null !== u
              ? (u = ri(u))
              : (u = ha(t, (u = pa(n) ? da : ca.current)));
          var h = n.getDerivedStateFromProps;
          (c =
            "function" === typeof h ||
            "function" === typeof o.getSnapshotBeforeUpdate) ||
            ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
              "function" !== typeof o.componentWillReceiveProps) ||
            ((l !== f || d !== u) && mi(t, o, r, u)),
            (ai = !1),
            (d = t.memoizedState),
            (o.state = d),
            ci(t, r, o, a);
          var p = t.memoizedState;
          l !== f || d !== p || fa.current || ai
            ? ("function" === typeof h &&
                (hi(t, n, h, r), (p = t.memoizedState)),
              (s = ai || vi(t, n, s, r, d, p, u))
                ? (c ||
                    ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                      "function" !== typeof o.componentWillUpdate) ||
                    ("function" === typeof o.componentWillUpdate &&
                      o.componentWillUpdate(r, p, u),
                    "function" === typeof o.UNSAFE_componentWillUpdate &&
                      o.UNSAFE_componentWillUpdate(r, p, u)),
                  "function" === typeof o.componentDidUpdate && (t.flags |= 4),
                  "function" === typeof o.getSnapshotBeforeUpdate &&
                    (t.flags |= 256))
                : ("function" !== typeof o.componentDidUpdate ||
                    (l === e.memoizedProps && d === e.memoizedState) ||
                    (t.flags |= 4),
                  "function" !== typeof o.getSnapshotBeforeUpdate ||
                    (l === e.memoizedProps && d === e.memoizedState) ||
                    (t.flags |= 256),
                  (t.memoizedProps = r),
                  (t.memoizedState = p)),
              (o.props = r),
              (o.state = p),
              (o.context = u),
              (r = s))
            : ("function" !== typeof o.componentDidUpdate ||
                (l === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 4),
              "function" !== typeof o.getSnapshotBeforeUpdate ||
                (l === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 256),
              (r = !1));
        }
        return Uo(e, t, n, r, i, a);
      }
      function Uo(e, t, n, r, a, i) {
        Vo(e, t);
        var o = 0 !== (64 & t.flags);
        if (!r && !o) return a && ba(t, n, !1), nl(e, t, i);
        (r = t.stateNode), (jo.current = t);
        var l =
          o && "function" !== typeof n.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (t.flags |= 1),
          null !== e && o
            ? ((t.child = wi(t, e.child, null, i)),
              (t.child = wi(t, null, l, i)))
            : Ao(e, t, l, i),
          (t.memoizedState = r.state),
          a && ba(t, n, !0),
          t.child
        );
      }
      function $o(e) {
        var t = e.stateNode;
        t.pendingContext
          ? ga(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && ga(0, t.context, !1),
          Ti(e, t.containerInfo);
      }
      var Ho,
        Yo,
        Qo,
        qo = { dehydrated: null, retryLane: 0 };
      function Xo(e, t, n) {
        var r,
          a = t.pendingProps,
          i = Ri.current,
          o = !1;
        return (
          (r = 0 !== (64 & t.flags)) ||
            (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
          r
            ? ((o = !0), (t.flags &= -65))
            : (null !== e && null === e.memoizedState) ||
              void 0 === a.fallback ||
              !0 === a.unstable_avoidThisFallback ||
              (i |= 1),
          ua(Ri, 1 & i),
          null === e
            ? (void 0 !== a.fallback && Bi(t),
              (e = a.children),
              (i = a.fallback),
              o
                ? ((e = Ko(t, e, i, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = qo),
                  e)
                : "number" === typeof a.unstable_expectedLoadTime
                ? ((e = Ko(t, e, i, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = qo),
                  (t.lanes = 33554432),
                  e)
                : (((n = Yu(
                    { mode: "visible", children: e },
                    t.mode,
                    n,
                    null
                  )).return = t),
                  (t.child = n)))
            : (e.memoizedState,
              o
                ? ((a = Zo(e, t, a.children, a.fallback, n)),
                  (o = t.child),
                  (i = e.child.memoizedState),
                  (o.memoizedState =
                    null === i
                      ? { baseLanes: n }
                      : { baseLanes: i.baseLanes | n }),
                  (o.childLanes = e.childLanes & ~n),
                  (t.memoizedState = qo),
                  a)
                : ((n = Go(e, t, a.children, n)), (t.memoizedState = null), n))
        );
      }
      function Ko(e, t, n, r) {
        var a = e.mode,
          i = e.child;
        return (
          (t = { mode: "hidden", children: t }),
          0 === (2 & a) && null !== i
            ? ((i.childLanes = 0), (i.pendingProps = t))
            : (i = Yu(t, a, 0, null)),
          (n = Hu(n, a, r, null)),
          (i.return = e),
          (n.return = e),
          (i.sibling = n),
          (e.child = i),
          n
        );
      }
      function Go(e, t, n, r) {
        var a = e.child;
        return (
          (e = a.sibling),
          (n = Uu(a, { mode: "visible", children: n })),
          0 === (2 & t.mode) && (n.lanes = r),
          (n.return = t),
          (n.sibling = null),
          null !== e &&
            ((e.nextEffect = null),
            (e.flags = 8),
            (t.firstEffect = t.lastEffect = e)),
          (t.child = n)
        );
      }
      function Zo(e, t, n, r, a) {
        var i = t.mode,
          o = e.child;
        e = o.sibling;
        var l = { mode: "hidden", children: n };
        return (
          0 === (2 & i) && t.child !== o
            ? (((n = t.child).childLanes = 0),
              (n.pendingProps = l),
              null !== (o = n.lastEffect)
                ? ((t.firstEffect = n.firstEffect),
                  (t.lastEffect = o),
                  (o.nextEffect = null))
                : (t.firstEffect = t.lastEffect = null))
            : (n = Uu(o, l)),
          null !== e ? (r = Uu(e, r)) : ((r = Hu(r, i, a, null)).flags |= 2),
          (r.return = t),
          (n.return = t),
          (n.sibling = r),
          (t.child = n),
          r
        );
      }
      function Jo(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        null !== n && (n.lanes |= t), ti(e.return, t);
      }
      function el(e, t, n, r, a, i) {
        var o = e.memoizedState;
        null === o
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: a,
              lastEffect: i,
            })
          : ((o.isBackwards = t),
            (o.rendering = null),
            (o.renderingStartTime = 0),
            (o.last = r),
            (o.tail = n),
            (o.tailMode = a),
            (o.lastEffect = i));
      }
      function tl(e, t, n) {
        var r = t.pendingProps,
          a = r.revealOrder,
          i = r.tail;
        if ((Ao(e, t, r.children, n), 0 !== (2 & (r = Ri.current))))
          (r = (1 & r) | 2), (t.flags |= 64);
        else {
          if (null !== e && 0 !== (64 & e.flags))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && Jo(e, n);
              else if (19 === e.tag) Jo(e, n);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        if ((ua(Ri, r), 0 === (2 & t.mode))) t.memoizedState = null;
        else
          switch (a) {
            case "forwards":
              for (n = t.child, a = null; null !== n; )
                null !== (e = n.alternate) && null === Ai(e) && (a = n),
                  (n = n.sibling);
              null === (n = a)
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                el(t, !1, a, n, i, t.lastEffect);
              break;
            case "backwards":
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === Ai(e)) {
                  t.child = a;
                  break;
                }
                (e = a.sibling), (a.sibling = n), (n = a), (a = e);
              }
              el(t, !0, n, null, i, t.lastEffect);
              break;
            case "together":
              el(t, !1, null, null, void 0, t.lastEffect);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function nl(e, t, n) {
        if (
          (null !== e && (t.dependencies = e.dependencies),
          (Nl |= t.lanes),
          0 !== (n & t.childLanes))
        ) {
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Uu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Uu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        return null;
      }
      function rl(e, t) {
        if (!Ni)
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var n = null; null !== t; )
                null !== t.alternate && (n = t), (t = t.sibling);
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
            case "collapsed":
              n = e.tail;
              for (var r = null; null !== n; )
                null !== n.alternate && (r = n), (n = n.sibling);
              null === r
                ? t || null === e.tail
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (r.sibling = null);
          }
      }
      function al(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return null;
          case 1:
            return pa(t.type) && va(), null;
          case 3:
            return (
              Di(),
              la(fa),
              la(ca),
              Yi(),
              (r = t.stateNode).pendingContext &&
                ((r.context = r.pendingContext), (r.pendingContext = null)),
              (null !== e && null !== e.child) ||
                (Ui(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
              null
            );
          case 5:
            ji(t);
            var i = Pi(Ci.current);
            if (((n = t.type), null !== e && null != t.stateNode))
              Yo(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(o(166));
                return null;
              }
              if (((e = Pi(Mi.current)), Ui(t))) {
                (r = t.stateNode), (n = t.type);
                var l = t.memoizedProps;
                switch (((r[Xr] = t), (r[Kr] = l), n)) {
                  case "dialog":
                    Er("cancel", r), Er("close", r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Er("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < wr.length; e++) Er(wr[e], r);
                    break;
                  case "source":
                    Er("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Er("error", r), Er("load", r);
                    break;
                  case "details":
                    Er("toggle", r);
                    break;
                  case "input":
                    ee(r, l), Er("invalid", r);
                    break;
                  case "select":
                    (r._wrapperState = { wasMultiple: !!l.multiple }),
                      Er("invalid", r);
                    break;
                  case "textarea":
                    ue(r, l), Er("invalid", r);
                }
                for (var s in (Se(n, l), (e = null), l))
                  l.hasOwnProperty(s) &&
                    ((i = l[s]),
                    "children" === s
                      ? "string" === typeof i
                        ? r.textContent !== i && (e = ["children", i])
                        : "number" === typeof i &&
                          r.textContent !== "" + i &&
                          (e = ["children", "" + i])
                      : u.hasOwnProperty(s) &&
                        null != i &&
                        "onScroll" === s &&
                        Er("scroll", r));
                switch (n) {
                  case "input":
                    K(r), re(r, l, !0);
                    break;
                  case "textarea":
                    K(r), ce(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof l.onClick && (r.onclick = Fr);
                }
                (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
              } else {
                switch (
                  ((s = 9 === i.nodeType ? i : i.ownerDocument),
                  e === fe && (e = he(n)),
                  e === fe
                    ? "script" === n
                      ? (((e = s.createElement("div")).innerHTML =
                          "<script></script>"),
                        (e = e.removeChild(e.firstChild)))
                      : "string" === typeof r.is
                      ? (e = s.createElement(n, { is: r.is }))
                      : ((e = s.createElement(n)),
                        "select" === n &&
                          ((s = e),
                          r.multiple
                            ? (s.multiple = !0)
                            : r.size && (s.size = r.size)))
                    : (e = s.createElementNS(e, n)),
                  (e[Xr] = t),
                  (e[Kr] = r),
                  Ho(e, t),
                  (t.stateNode = e),
                  (s = Oe(n, r)),
                  n)
                ) {
                  case "dialog":
                    Er("cancel", e), Er("close", e), (i = r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Er("load", e), (i = r);
                    break;
                  case "video":
                  case "audio":
                    for (i = 0; i < wr.length; i++) Er(wr[i], e);
                    i = r;
                    break;
                  case "source":
                    Er("error", e), (i = r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Er("error", e), Er("load", e), (i = r);
                    break;
                  case "details":
                    Er("toggle", e), (i = r);
                    break;
                  case "input":
                    ee(e, r), (i = J(e, r)), Er("invalid", e);
                    break;
                  case "option":
                    i = ie(e, r);
                    break;
                  case "select":
                    (e._wrapperState = { wasMultiple: !!r.multiple }),
                      (i = a({}, r, { value: void 0 })),
                      Er("invalid", e);
                    break;
                  case "textarea":
                    ue(e, r), (i = le(e, r)), Er("invalid", e);
                    break;
                  default:
                    i = r;
                }
                Se(n, i);
                var c = i;
                for (l in c)
                  if (c.hasOwnProperty(l)) {
                    var f = c[l];
                    "style" === l
                      ? _e(e, f)
                      : "dangerouslySetInnerHTML" === l
                      ? null != (f = f ? f.__html : void 0) && me(e, f)
                      : "children" === l
                      ? "string" === typeof f
                        ? ("textarea" !== n || "" !== f) && ye(e, f)
                        : "number" === typeof f && ye(e, "" + f)
                      : "suppressContentEditableWarning" !== l &&
                        "suppressHydrationWarning" !== l &&
                        "autoFocus" !== l &&
                        (u.hasOwnProperty(l)
                          ? null != f && "onScroll" === l && Er("scroll", e)
                          : null != f && x(e, l, f, s));
                  }
                switch (n) {
                  case "input":
                    K(e), re(e, r, !1);
                    break;
                  case "textarea":
                    K(e), ce(e);
                    break;
                  case "option":
                    null != r.value && e.setAttribute("value", "" + q(r.value));
                    break;
                  case "select":
                    (e.multiple = !!r.multiple),
                      null != (l = r.value)
                        ? oe(e, !!r.multiple, l, !1)
                        : null != r.defaultValue &&
                          oe(e, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    "function" === typeof i.onClick && (e.onclick = Fr);
                }
                Vr(n, r) && (t.flags |= 4);
              }
              null !== t.ref && (t.flags |= 128);
            }
            return null;
          case 6:
            if (e && null != t.stateNode) Qo(0, t, e.memoizedProps, r);
            else {
              if ("string" !== typeof r && null === t.stateNode)
                throw Error(o(166));
              (n = Pi(Ci.current)),
                Pi(Mi.current),
                Ui(t)
                  ? ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[Xr] = t),
                    r.nodeValue !== n && (t.flags |= 4))
                  : (((r = (9 === n.nodeType
                      ? n
                      : n.ownerDocument
                    ).createTextNode(r))[Xr] = t),
                    (t.stateNode = r));
            }
            return null;
          case 13:
            return (
              la(Ri),
              (r = t.memoizedState),
              0 !== (64 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r),
                  (n = !1),
                  null === e
                    ? void 0 !== t.memoizedProps.fallback && Ui(t)
                    : (n = null !== e.memoizedState),
                  r &&
                    !n &&
                    0 !== (2 & t.mode) &&
                    ((null === e &&
                      !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                    0 !== (1 & Ri.current)
                      ? 0 === Al && (Al = 3)
                      : ((0 !== Al && 3 !== Al) || (Al = 4),
                        null === Tl ||
                          (0 === (134217727 & Nl) && 0 === (134217727 & Il)) ||
                          vu(Tl, Ll))),
                  (r || n) && (t.flags |= 4),
                  null)
            );
          case 4:
            return Di(), null === e && Pr(t.stateNode.containerInfo), null;
          case 10:
            return ei(t), null;
          case 17:
            return pa(t.type) && va(), null;
          case 19:
            if ((la(Ri), null === (r = t.memoizedState))) return null;
            if (((l = 0 !== (64 & t.flags)), null === (s = r.rendering)))
              if (l) rl(r, !1);
              else {
                if (0 !== Al || (null !== e && 0 !== (64 & e.flags)))
                  for (e = t.child; null !== e; ) {
                    if (null !== (s = Ai(e))) {
                      for (
                        t.flags |= 64,
                          rl(r, !1),
                          null !== (l = s.updateQueue) &&
                            ((t.updateQueue = l), (t.flags |= 4)),
                          null === r.lastEffect && (t.firstEffect = null),
                          t.lastEffect = r.lastEffect,
                          r = n,
                          n = t.child;
                        null !== n;

                      )
                        (e = r),
                          ((l = n).flags &= 2),
                          (l.nextEffect = null),
                          (l.firstEffect = null),
                          (l.lastEffect = null),
                          null === (s = l.alternate)
                            ? ((l.childLanes = 0),
                              (l.lanes = e),
                              (l.child = null),
                              (l.memoizedProps = null),
                              (l.memoizedState = null),
                              (l.updateQueue = null),
                              (l.dependencies = null),
                              (l.stateNode = null))
                            : ((l.childLanes = s.childLanes),
                              (l.lanes = s.lanes),
                              (l.child = s.child),
                              (l.memoizedProps = s.memoizedProps),
                              (l.memoizedState = s.memoizedState),
                              (l.updateQueue = s.updateQueue),
                              (l.type = s.type),
                              (e = s.dependencies),
                              (l.dependencies =
                                null === e
                                  ? null
                                  : {
                                      lanes: e.lanes,
                                      firstContext: e.firstContext,
                                    })),
                          (n = n.sibling);
                      return ua(Ri, (1 & Ri.current) | 2), t.child;
                    }
                    e = e.sibling;
                  }
                null !== r.tail &&
                  Va() > Ul &&
                  ((t.flags |= 64), (l = !0), rl(r, !1), (t.lanes = 33554432));
              }
            else {
              if (!l)
                if (null !== (e = Ai(s))) {
                  if (
                    ((t.flags |= 64),
                    (l = !0),
                    null !== (n = e.updateQueue) &&
                      ((t.updateQueue = n), (t.flags |= 4)),
                    rl(r, !0),
                    null === r.tail &&
                      "hidden" === r.tailMode &&
                      !s.alternate &&
                      !Ni)
                  )
                    return (
                      null !== (t = t.lastEffect = r.lastEffect) &&
                        (t.nextEffect = null),
                      null
                    );
                } else
                  2 * Va() - r.renderingStartTime > Ul &&
                    1073741824 !== n &&
                    ((t.flags |= 64),
                    (l = !0),
                    rl(r, !1),
                    (t.lanes = 33554432));
              r.isBackwards
                ? ((s.sibling = t.child), (t.child = s))
                : (null !== (n = r.last) ? (n.sibling = s) : (t.child = s),
                  (r.last = s));
            }
            return null !== r.tail
              ? ((n = r.tail),
                (r.rendering = n),
                (r.tail = n.sibling),
                (r.lastEffect = t.lastEffect),
                (r.renderingStartTime = Va()),
                (n.sibling = null),
                (t = Ri.current),
                ua(Ri, l ? (1 & t) | 2 : 1 & t),
                n)
              : null;
          case 23:
          case 24:
            return (
              xu(),
              null !== e &&
                (null !== e.memoizedState) !== (null !== t.memoizedState) &&
                "unstable-defer-without-hiding" !== r.mode &&
                (t.flags |= 4),
              null
            );
        }
        throw Error(o(156, t.tag));
      }
      function il(e) {
        switch (e.tag) {
          case 1:
            pa(e.type) && va();
            var t = e.flags;
            return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
          case 3:
            if ((Di(), la(fa), la(ca), Yi(), 0 !== (64 & (t = e.flags))))
              throw Error(o(285));
            return (e.flags = (-4097 & t) | 64), e;
          case 5:
            return ji(e), null;
          case 13:
            return (
              la(Ri),
              4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
            );
          case 19:
            return la(Ri), null;
          case 4:
            return Di(), null;
          case 10:
            return ei(e), null;
          case 23:
          case 24:
            return xu(), null;
          default:
            return null;
        }
      }
      function ol(e, t) {
        try {
          var n = "",
            r = t;
          do {
            (n += Y(r)), (r = r.return);
          } while (r);
          var a = n;
        } catch (i) {
          a = "\nError generating stack: " + i.message + "\n" + i.stack;
        }
        return { value: e, source: t, stack: a };
      }
      function ll(e, t) {
        try {
          console.error(t.value);
        } catch (n) {
          setTimeout(function () {
            throw n;
          });
        }
      }
      (Ho = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        (Yo = function (e, t, n, r) {
          var i = e.memoizedProps;
          if (i !== r) {
            (e = t.stateNode), Pi(Mi.current);
            var o,
              l = null;
            switch (n) {
              case "input":
                (i = J(e, i)), (r = J(e, r)), (l = []);
                break;
              case "option":
                (i = ie(e, i)), (r = ie(e, r)), (l = []);
                break;
              case "select":
                (i = a({}, i, { value: void 0 })),
                  (r = a({}, r, { value: void 0 })),
                  (l = []);
                break;
              case "textarea":
                (i = le(e, i)), (r = le(e, r)), (l = []);
                break;
              default:
                "function" !== typeof i.onClick &&
                  "function" === typeof r.onClick &&
                  (e.onclick = Fr);
            }
            for (f in (Se(n, r), (n = null), i))
              if (!r.hasOwnProperty(f) && i.hasOwnProperty(f) && null != i[f])
                if ("style" === f) {
                  var s = i[f];
                  for (o in s)
                    s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                  "dangerouslySetInnerHTML" !== f &&
                    "children" !== f &&
                    "suppressContentEditableWarning" !== f &&
                    "suppressHydrationWarning" !== f &&
                    "autoFocus" !== f &&
                    (u.hasOwnProperty(f)
                      ? l || (l = [])
                      : (l = l || []).push(f, null));
            for (f in r) {
              var c = r[f];
              if (
                ((s = null != i ? i[f] : void 0),
                r.hasOwnProperty(f) && c !== s && (null != c || null != s))
              )
                if ("style" === f)
                  if (s) {
                    for (o in s)
                      !s.hasOwnProperty(o) ||
                        (c && c.hasOwnProperty(o)) ||
                        (n || (n = {}), (n[o] = ""));
                    for (o in c)
                      c.hasOwnProperty(o) &&
                        s[o] !== c[o] &&
                        (n || (n = {}), (n[o] = c[o]));
                  } else n || (l || (l = []), l.push(f, n)), (n = c);
                else
                  "dangerouslySetInnerHTML" === f
                    ? ((c = c ? c.__html : void 0),
                      (s = s ? s.__html : void 0),
                      null != c && s !== c && (l = l || []).push(f, c))
                    : "children" === f
                    ? ("string" !== typeof c && "number" !== typeof c) ||
                      (l = l || []).push(f, "" + c)
                    : "suppressContentEditableWarning" !== f &&
                      "suppressHydrationWarning" !== f &&
                      (u.hasOwnProperty(f)
                        ? (null != c && "onScroll" === f && Er("scroll", e),
                          l || s === c || (l = []))
                        : "object" === typeof c &&
                          null !== c &&
                          c.$$typeof === A
                        ? c.toString()
                        : (l = l || []).push(f, c));
            }
            n && (l = l || []).push("style", n);
            var f = l;
            (t.updateQueue = f) && (t.flags |= 4);
          }
        }),
        (Qo = function (e, t, n, r) {
          n !== r && (t.flags |= 4);
        });
      var ul = "function" === typeof WeakMap ? WeakMap : Map;
      function sl(e, t, n) {
        ((n = li(-1, n)).tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function () {
            Ql || ((Ql = !0), (ql = r)), ll(0, t);
          }),
          n
        );
      }
      function cl(e, t, n) {
        (n = li(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" === typeof r) {
          var a = t.value;
          n.payload = function () {
            return ll(0, t), r(a);
          };
        }
        var i = e.stateNode;
        return (
          null !== i &&
            "function" === typeof i.componentDidCatch &&
            (n.callback = function () {
              "function" !== typeof r &&
                (null === Xl ? (Xl = new Set([this])) : Xl.add(this), ll(0, t));
              var e = t.stack;
              this.componentDidCatch(t.value, {
                componentStack: null !== e ? e : "",
              });
            }),
          n
        );
      }
      var fl = "function" === typeof WeakSet ? WeakSet : Set;
      function dl(e) {
        var t = e.ref;
        if (null !== t)
          if ("function" === typeof t)
            try {
              t(null);
            } catch (n) {
              Fu(e, n);
            }
          else t.current = null;
      }
      function hl(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return;
          case 1:
            if (256 & t.flags && null !== e) {
              var n = e.memoizedProps,
                r = e.memoizedState;
              (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                t.elementType === t.type ? n : qa(t.type, n),
                r
              )),
                (e.__reactInternalSnapshotBeforeUpdate = t);
            }
            return;
          case 3:
            return void (256 & t.flags && $r(t.stateNode.containerInfo));
          case 5:
          case 6:
          case 4:
          case 17:
            return;
        }
        throw Error(o(163));
      }
      function pl(e, t, n) {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            if (
              null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
            ) {
              e = t = t.next;
              do {
                if (3 === (3 & e.tag)) {
                  var r = e.create;
                  e.destroy = r();
                }
                e = e.next;
              } while (e !== t);
            }
            if (
              null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
            ) {
              e = t = t.next;
              do {
                var a = e;
                (r = a.next),
                  0 !== (4 & (a = a.tag)) &&
                    0 !== (1 & a) &&
                    (Ru(n, e), ju(n, e)),
                  (e = r);
              } while (e !== t);
            }
            return;
          case 1:
            return (
              (e = n.stateNode),
              4 & n.flags &&
                (null === t
                  ? e.componentDidMount()
                  : ((r =
                      n.elementType === n.type
                        ? t.memoizedProps
                        : qa(n.type, t.memoizedProps)),
                    e.componentDidUpdate(
                      r,
                      t.memoizedState,
                      e.__reactInternalSnapshotBeforeUpdate
                    ))),
              void (null !== (t = n.updateQueue) && fi(n, t, e))
            );
          case 3:
            if (null !== (t = n.updateQueue)) {
              if (((e = null), null !== n.child))
                switch (n.child.tag) {
                  case 5:
                    e = n.child.stateNode;
                    break;
                  case 1:
                    e = n.child.stateNode;
                }
              fi(n, t, e);
            }
            return;
          case 5:
            return (
              (e = n.stateNode),
              void (
                null === t &&
                4 & n.flags &&
                Vr(n.type, n.memoizedProps) &&
                e.focus()
              )
            );
          case 6:
          case 4:
          case 12:
            return;
          case 13:
            return void (
              null === n.memoizedState &&
              ((n = n.alternate),
              null !== n &&
                ((n = n.memoizedState),
                null !== n && ((n = n.dehydrated), null !== n && _t(n))))
            );
          case 19:
          case 17:
          case 20:
          case 21:
          case 23:
          case 24:
            return;
        }
        throw Error(o(163));
      }
      function vl(e, t) {
        for (var n = e; ; ) {
          if (5 === n.tag) {
            var r = n.stateNode;
            if (t)
              "function" === typeof (r = r.style).setProperty
                ? r.setProperty("display", "none", "important")
                : (r.display = "none");
            else {
              r = n.stateNode;
              var a = n.memoizedProps.style;
              (a =
                void 0 !== a && null !== a && a.hasOwnProperty("display")
                  ? a.display
                  : null),
                (r.style.display = ke("display", a));
            }
          } else if (6 === n.tag)
            n.stateNode.nodeValue = t ? "" : n.memoizedProps;
          else if (
            ((23 !== n.tag && 24 !== n.tag) ||
              null === n.memoizedState ||
              n === e) &&
            null !== n.child
          ) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === e) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === e) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }
      function gl(e, t) {
        if (ka && "function" === typeof ka.onCommitFiberUnmount)
          try {
            ka.onCommitFiberUnmount(xa, t);
          } catch (i) {}
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
              var n = (e = e.next);
              do {
                var r = n,
                  a = r.destroy;
                if (((r = r.tag), void 0 !== a))
                  if (0 !== (4 & r)) Ru(t, n);
                  else {
                    r = t;
                    try {
                      a();
                    } catch (i) {
                      Fu(r, i);
                    }
                  }
                n = n.next;
              } while (n !== e);
            }
            break;
          case 1:
            if (
              (dl(t),
              "function" === typeof (e = t.stateNode).componentWillUnmount)
            )
              try {
                (e.props = t.memoizedProps),
                  (e.state = t.memoizedState),
                  e.componentWillUnmount();
              } catch (i) {
                Fu(t, i);
              }
            break;
          case 5:
            dl(t);
            break;
          case 4:
            _l(e, t);
        }
      }
      function ml(e) {
        (e.alternate = null),
          (e.child = null),
          (e.dependencies = null),
          (e.firstEffect = null),
          (e.lastEffect = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.return = null),
          (e.updateQueue = null);
      }
      function yl(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function bl(e) {
        e: {
          for (var t = e.return; null !== t; ) {
            if (yl(t)) break e;
            t = t.return;
          }
          throw Error(o(160));
        }
        var n = t;
        switch (((t = n.stateNode), n.tag)) {
          case 5:
            var r = !1;
            break;
          case 3:
          case 4:
            (t = t.containerInfo), (r = !0);
            break;
          default:
            throw Error(o(161));
        }
        16 & n.flags && (ye(t, ""), (n.flags &= -17));
        e: t: for (n = e; ; ) {
          for (; null === n.sibling; ) {
            if (null === n.return || yl(n.return)) {
              n = null;
              break e;
            }
            n = n.return;
          }
          for (
            n.sibling.return = n.return, n = n.sibling;
            5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

          ) {
            if (2 & n.flags) continue t;
            if (null === n.child || 4 === n.tag) continue t;
            (n.child.return = n), (n = n.child);
          }
          if (!(2 & n.flags)) {
            n = n.stateNode;
            break e;
          }
        }
        r ? xl(e, n, t) : kl(e, n, t);
      }
      function xl(e, t, n) {
        var r = e.tag,
          a = 5 === r || 6 === r;
        if (a)
          (e = a ? e.stateNode : e.stateNode.instance),
            t
              ? 8 === n.nodeType
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (8 === n.nodeType
                  ? (t = n.parentNode).insertBefore(e, n)
                  : (t = n).appendChild(e),
                (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                  null !== t.onclick ||
                  (t.onclick = Fr));
        else if (4 !== r && null !== (e = e.child))
          for (xl(e, t, n), e = e.sibling; null !== e; )
            xl(e, t, n), (e = e.sibling);
      }
      function kl(e, t, n) {
        var r = e.tag,
          a = 5 === r || 6 === r;
        if (a)
          (e = a ? e.stateNode : e.stateNode.instance),
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
          for (kl(e, t, n), e = e.sibling; null !== e; )
            kl(e, t, n), (e = e.sibling);
      }
      function _l(e, t) {
        for (var n, r, a = t, i = !1; ; ) {
          if (!i) {
            i = a.return;
            e: for (;;) {
              if (null === i) throw Error(o(160));
              switch (((n = i.stateNode), i.tag)) {
                case 5:
                  r = !1;
                  break e;
                case 3:
                case 4:
                  (n = n.containerInfo), (r = !0);
                  break e;
              }
              i = i.return;
            }
            i = !0;
          }
          if (5 === a.tag || 6 === a.tag) {
            e: for (var l = e, u = a, s = u; ; )
              if ((gl(l, s), null !== s.child && 4 !== s.tag))
                (s.child.return = s), (s = s.child);
              else {
                if (s === u) break e;
                for (; null === s.sibling; ) {
                  if (null === s.return || s.return === u) break e;
                  s = s.return;
                }
                (s.sibling.return = s.return), (s = s.sibling);
              }
            r
              ? ((l = n),
                (u = a.stateNode),
                8 === l.nodeType
                  ? l.parentNode.removeChild(u)
                  : l.removeChild(u))
              : n.removeChild(a.stateNode);
          } else if (4 === a.tag) {
            if (null !== a.child) {
              (n = a.stateNode.containerInfo),
                (r = !0),
                (a.child.return = a),
                (a = a.child);
              continue;
            }
          } else if ((gl(e, a), null !== a.child)) {
            (a.child.return = a), (a = a.child);
            continue;
          }
          if (a === t) break;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === t) return;
            4 === (a = a.return).tag && (i = !1);
          }
          (a.sibling.return = a.return), (a = a.sibling);
        }
      }
      function wl(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            var n = t.updateQueue;
            if (null !== (n = null !== n ? n.lastEffect : null)) {
              var r = (n = n.next);
              do {
                3 === (3 & r.tag) &&
                  ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()),
                  (r = r.next);
              } while (r !== n);
            }
            return;
          case 1:
            return;
          case 5:
            if (null != (n = t.stateNode)) {
              r = t.memoizedProps;
              var a = null !== e ? e.memoizedProps : r;
              e = t.type;
              var i = t.updateQueue;
              if (((t.updateQueue = null), null !== i)) {
                for (
                  n[Kr] = r,
                    "input" === e &&
                      "radio" === r.type &&
                      null != r.name &&
                      te(n, r),
                    Oe(e, a),
                    t = Oe(e, r),
                    a = 0;
                  a < i.length;
                  a += 2
                ) {
                  var l = i[a],
                    u = i[a + 1];
                  "style" === l
                    ? _e(n, u)
                    : "dangerouslySetInnerHTML" === l
                    ? me(n, u)
                    : "children" === l
                    ? ye(n, u)
                    : x(n, l, u, t);
                }
                switch (e) {
                  case "input":
                    ne(n, r);
                    break;
                  case "textarea":
                    se(n, r);
                    break;
                  case "select":
                    (e = n._wrapperState.wasMultiple),
                      (n._wrapperState.wasMultiple = !!r.multiple),
                      null != (i = r.value)
                        ? oe(n, !!r.multiple, i, !1)
                        : e !== !!r.multiple &&
                          (null != r.defaultValue
                            ? oe(n, !!r.multiple, r.defaultValue, !0)
                            : oe(n, !!r.multiple, r.multiple ? [] : "", !1));
                }
              }
            }
            return;
          case 6:
            if (null === t.stateNode) throw Error(o(162));
            return void (t.stateNode.nodeValue = t.memoizedProps);
          case 3:
            return void (
              (n = t.stateNode).hydrate &&
              ((n.hydrate = !1), _t(n.containerInfo))
            );
          case 12:
            return;
          case 13:
            return (
              null !== t.memoizedState && ((Wl = Va()), vl(t.child, !0)),
              void Sl(t)
            );
          case 19:
            return void Sl(t);
          case 17:
            return;
          case 23:
          case 24:
            return void vl(t, null !== t.memoizedState);
        }
        throw Error(o(163));
      }
      function Sl(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new fl()),
            t.forEach(function (t) {
              var r = Iu.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      function Ol(e, t) {
        return (
          null !== e &&
          (null === (e = e.memoizedState) || null !== e.dehydrated) &&
          null !== (t = t.memoizedState) &&
          null === t.dehydrated
        );
      }
      var Ml = Math.ceil,
        El = k.ReactCurrentDispatcher,
        Cl = k.ReactCurrentOwner,
        Pl = 0,
        Tl = null,
        Dl = null,
        Ll = 0,
        jl = 0,
        Rl = oa(0),
        Al = 0,
        zl = null,
        Fl = 0,
        Nl = 0,
        Il = 0,
        Vl = 0,
        Bl = null,
        Wl = 0,
        Ul = 1 / 0;
      function $l() {
        Ul = Va() + 500;
      }
      var Hl,
        Yl = null,
        Ql = !1,
        ql = null,
        Xl = null,
        Kl = !1,
        Gl = null,
        Zl = 90,
        Jl = [],
        eu = [],
        tu = null,
        nu = 0,
        ru = null,
        au = -1,
        iu = 0,
        ou = 0,
        lu = null,
        uu = !1;
      function su() {
        return 0 !== (48 & Pl) ? Va() : -1 !== au ? au : (au = Va());
      }
      function cu(e) {
        if (0 === (2 & (e = e.mode))) return 1;
        if (0 === (4 & e)) return 99 === Ba() ? 1 : 2;
        if ((0 === iu && (iu = Fl), 0 !== Qa.transition)) {
          0 !== ou && (ou = null !== Bl ? Bl.pendingLanes : 0), (e = iu);
          var t = 4186112 & ~ou;
          return (
            0 === (t &= -t) &&
              0 === (t = (e = 4186112 & ~e) & -e) &&
              (t = 8192),
            t
          );
        }
        return (
          (e = Ba()),
          0 !== (4 & Pl) && 98 === e
            ? (e = Vt(12, iu))
            : (e = Vt(
                (e = (function (e) {
                  switch (e) {
                    case 99:
                      return 15;
                    case 98:
                      return 10;
                    case 97:
                    case 96:
                      return 8;
                    case 95:
                      return 2;
                    default:
                      return 0;
                  }
                })(e)),
                iu
              )),
          e
        );
      }
      function fu(e, t, n) {
        if (50 < nu) throw ((nu = 0), (ru = null), Error(o(185)));
        if (null === (e = du(e, t))) return null;
        Ut(e, t, n), e === Tl && ((Il |= t), 4 === Al && vu(e, Ll));
        var r = Ba();
        1 === t
          ? 0 !== (8 & Pl) && 0 === (48 & Pl)
            ? gu(e)
            : (hu(e, n), 0 === Pl && ($l(), Ha()))
          : (0 === (4 & Pl) ||
              (98 !== r && 99 !== r) ||
              (null === tu ? (tu = new Set([e])) : tu.add(e)),
            hu(e, n)),
          (Bl = e);
      }
      function du(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
          (e.childLanes |= t),
            null !== (n = e.alternate) && (n.childLanes |= t),
            (n = e),
            (e = e.return);
        return 3 === n.tag ? n.stateNode : null;
      }
      function hu(e, t) {
        for (
          var n = e.callbackNode,
            r = e.suspendedLanes,
            a = e.pingedLanes,
            i = e.expirationTimes,
            l = e.pendingLanes;
          0 < l;

        ) {
          var u = 31 - $t(l),
            s = 1 << u,
            c = i[u];
          if (-1 === c) {
            if (0 === (s & r) || 0 !== (s & a)) {
              (c = t), Ft(s);
              var f = zt;
              i[u] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1;
            }
          } else c <= t && (e.expiredLanes |= s);
          l &= ~s;
        }
        if (((r = Nt(e, e === Tl ? Ll : 0)), (t = zt), 0 === r))
          null !== n &&
            (n !== Ra && Sa(n),
            (e.callbackNode = null),
            (e.callbackPriority = 0));
        else {
          if (null !== n) {
            if (e.callbackPriority === t) return;
            n !== Ra && Sa(n);
          }
          15 === t
            ? ((n = gu.bind(null, e)),
              null === za ? ((za = [n]), (Fa = wa(Pa, Ya))) : za.push(n),
              (n = Ra))
            : 14 === t
            ? (n = $a(99, gu.bind(null, e)))
            : (n = $a(
                (n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(o(358, e));
                  }
                })(t)),
                pu.bind(null, e)
              )),
            (e.callbackPriority = t),
            (e.callbackNode = n);
        }
      }
      function pu(e) {
        if (((au = -1), (ou = iu = 0), 0 !== (48 & Pl))) throw Error(o(327));
        var t = e.callbackNode;
        if (Lu() && e.callbackNode !== t) return null;
        var n = Nt(e, e === Tl ? Ll : 0);
        if (0 === n) return null;
        var r = n,
          a = Pl;
        Pl |= 16;
        var i = wu();
        for ((Tl === e && Ll === r) || ($l(), ku(e, r)); ; )
          try {
            Mu();
            break;
          } catch (u) {
            _u(e, u);
          }
        if (
          (Ja(),
          (El.current = i),
          (Pl = a),
          null !== Dl ? (r = 0) : ((Tl = null), (Ll = 0), (r = Al)),
          0 !== (Fl & Il))
        )
          ku(e, 0);
        else if (0 !== r) {
          if (
            (2 === r &&
              ((Pl |= 64),
              e.hydrate && ((e.hydrate = !1), $r(e.containerInfo)),
              0 !== (n = It(e)) && (r = Su(e, n))),
            1 === r)
          )
            throw ((t = zl), ku(e, 0), vu(e, n), hu(e, Va()), t);
          switch (
            ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
          ) {
            case 0:
            case 1:
              throw Error(o(345));
            case 2:
              Pu(e);
              break;
            case 3:
              if (
                (vu(e, n), (62914560 & n) === n && 10 < (r = Wl + 500 - Va()))
              ) {
                if (0 !== Nt(e, 0)) break;
                if (((a = e.suspendedLanes) & n) !== n) {
                  su(), (e.pingedLanes |= e.suspendedLanes & a);
                  break;
                }
                e.timeoutHandle = Wr(Pu.bind(null, e), r);
                break;
              }
              Pu(e);
              break;
            case 4:
              if ((vu(e, n), (4186112 & n) === n)) break;
              for (r = e.eventTimes, a = -1; 0 < n; ) {
                var l = 31 - $t(n);
                (i = 1 << l), (l = r[l]) > a && (a = l), (n &= ~i);
              }
              if (
                ((n = a),
                10 <
                  (n =
                    (120 > (n = Va() - n)
                      ? 120
                      : 480 > n
                      ? 480
                      : 1080 > n
                      ? 1080
                      : 1920 > n
                      ? 1920
                      : 3e3 > n
                      ? 3e3
                      : 4320 > n
                      ? 4320
                      : 1960 * Ml(n / 1960)) - n))
              ) {
                e.timeoutHandle = Wr(Pu.bind(null, e), n);
                break;
              }
              Pu(e);
              break;
            case 5:
              Pu(e);
              break;
            default:
              throw Error(o(329));
          }
        }
        return hu(e, Va()), e.callbackNode === t ? pu.bind(null, e) : null;
      }
      function vu(e, t) {
        for (
          t &= ~Vl,
            t &= ~Il,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
          0 < t;

        ) {
          var n = 31 - $t(t),
            r = 1 << n;
          (e[n] = -1), (t &= ~r);
        }
      }
      function gu(e) {
        if (0 !== (48 & Pl)) throw Error(o(327));
        if ((Lu(), e === Tl && 0 !== (e.expiredLanes & Ll))) {
          var t = Ll,
            n = Su(e, t);
          0 !== (Fl & Il) && (n = Su(e, (t = Nt(e, t))));
        } else n = Su(e, (t = Nt(e, 0)));
        if (
          (0 !== e.tag &&
            2 === n &&
            ((Pl |= 64),
            e.hydrate && ((e.hydrate = !1), $r(e.containerInfo)),
            0 !== (t = It(e)) && (n = Su(e, t))),
          1 === n)
        )
          throw ((n = zl), ku(e, 0), vu(e, t), hu(e, Va()), n);
        return (
          (e.finishedWork = e.current.alternate),
          (e.finishedLanes = t),
          Pu(e),
          hu(e, Va()),
          null
        );
      }
      function mu(e, t) {
        var n = Pl;
        Pl |= 1;
        try {
          return e(t);
        } finally {
          0 === (Pl = n) && ($l(), Ha());
        }
      }
      function yu(e, t) {
        var n = Pl;
        (Pl &= -2), (Pl |= 8);
        try {
          return e(t);
        } finally {
          0 === (Pl = n) && ($l(), Ha());
        }
      }
      function bu(e, t) {
        ua(Rl, jl), (jl |= t), (Fl |= t);
      }
      function xu() {
        (jl = Rl.current), la(Rl);
      }
      function ku(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), Ur(n)), null !== Dl))
          for (n = Dl.return; null !== n; ) {
            var r = n;
            switch (r.tag) {
              case 1:
                null !== (r = r.type.childContextTypes) && void 0 !== r && va();
                break;
              case 3:
                Di(), la(fa), la(ca), Yi();
                break;
              case 5:
                ji(r);
                break;
              case 4:
                Di();
                break;
              case 13:
              case 19:
                la(Ri);
                break;
              case 10:
                ei(r);
                break;
              case 23:
              case 24:
                xu();
            }
            n = n.return;
          }
        (Tl = e),
          (Dl = Uu(e.current, null)),
          (Ll = jl = Fl = t),
          (Al = 0),
          (zl = null),
          (Vl = Il = Nl = 0);
      }
      function _u(e, t) {
        for (;;) {
          var n = Dl;
          try {
            if ((Ja(), (Qi.current = Po), Ji)) {
              for (var r = Ki.memoizedState; null !== r; ) {
                var a = r.queue;
                null !== a && (a.pending = null), (r = r.next);
              }
              Ji = !1;
            }
            if (
              ((Xi = 0),
              (Zi = Gi = Ki = null),
              (eo = !1),
              (Cl.current = null),
              null === n || null === n.return)
            ) {
              (Al = 1), (zl = t), (Dl = null);
              break;
            }
            e: {
              var i = e,
                o = n.return,
                l = n,
                u = t;
              if (
                ((t = Ll),
                (l.flags |= 2048),
                (l.firstEffect = l.lastEffect = null),
                null !== u &&
                  "object" === typeof u &&
                  "function" === typeof u.then)
              ) {
                var s = u;
                if (0 === (2 & l.mode)) {
                  var c = l.alternate;
                  c
                    ? ((l.updateQueue = c.updateQueue),
                      (l.memoizedState = c.memoizedState),
                      (l.lanes = c.lanes))
                    : ((l.updateQueue = null), (l.memoizedState = null));
                }
                var f = 0 !== (1 & Ri.current),
                  d = o;
                do {
                  var h;
                  if ((h = 13 === d.tag)) {
                    var p = d.memoizedState;
                    if (null !== p) h = null !== p.dehydrated;
                    else {
                      var v = d.memoizedProps;
                      h =
                        void 0 !== v.fallback &&
                        (!0 !== v.unstable_avoidThisFallback || !f);
                    }
                  }
                  if (h) {
                    var g = d.updateQueue;
                    if (null === g) {
                      var m = new Set();
                      m.add(s), (d.updateQueue = m);
                    } else g.add(s);
                    if (0 === (2 & d.mode)) {
                      if (
                        ((d.flags |= 64),
                        (l.flags |= 16384),
                        (l.flags &= -2981),
                        1 === l.tag)
                      )
                        if (null === l.alternate) l.tag = 17;
                        else {
                          var y = li(-1, 1);
                          (y.tag = 2), ui(l, y);
                        }
                      l.lanes |= 1;
                      break e;
                    }
                    (u = void 0), (l = t);
                    var b = i.pingCache;
                    if (
                      (null === b
                        ? ((b = i.pingCache = new ul()),
                          (u = new Set()),
                          b.set(s, u))
                        : void 0 === (u = b.get(s)) &&
                          ((u = new Set()), b.set(s, u)),
                      !u.has(l))
                    ) {
                      u.add(l);
                      var x = Nu.bind(null, i, s, l);
                      s.then(x, x);
                    }
                    (d.flags |= 4096), (d.lanes = t);
                    break e;
                  }
                  d = d.return;
                } while (null !== d);
                u = Error(
                  (Q(l.type) || "A React component") +
                    " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                );
              }
              5 !== Al && (Al = 2), (u = ol(u, l)), (d = o);
              do {
                switch (d.tag) {
                  case 3:
                    (i = u),
                      (d.flags |= 4096),
                      (t &= -t),
                      (d.lanes |= t),
                      si(d, sl(0, i, t));
                    break e;
                  case 1:
                    i = u;
                    var k = d.type,
                      _ = d.stateNode;
                    if (
                      0 === (64 & d.flags) &&
                      ("function" === typeof k.getDerivedStateFromError ||
                        (null !== _ &&
                          "function" === typeof _.componentDidCatch &&
                          (null === Xl || !Xl.has(_))))
                    ) {
                      (d.flags |= 4096),
                        (t &= -t),
                        (d.lanes |= t),
                        si(d, cl(d, i, t));
                      break e;
                    }
                }
                d = d.return;
              } while (null !== d);
            }
            Cu(n);
          } catch (w) {
            (t = w), Dl === n && null !== n && (Dl = n = n.return);
            continue;
          }
          break;
        }
      }
      function wu() {
        var e = El.current;
        return (El.current = Po), null === e ? Po : e;
      }
      function Su(e, t) {
        var n = Pl;
        Pl |= 16;
        var r = wu();
        for ((Tl === e && Ll === t) || ku(e, t); ; )
          try {
            Ou();
            break;
          } catch (a) {
            _u(e, a);
          }
        if ((Ja(), (Pl = n), (El.current = r), null !== Dl))
          throw Error(o(261));
        return (Tl = null), (Ll = 0), Al;
      }
      function Ou() {
        for (; null !== Dl; ) Eu(Dl);
      }
      function Mu() {
        for (; null !== Dl && !Oa(); ) Eu(Dl);
      }
      function Eu(e) {
        var t = Hl(e.alternate, e, jl);
        (e.memoizedProps = e.pendingProps),
          null === t ? Cu(e) : (Dl = t),
          (Cl.current = null);
      }
      function Cu(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (((e = t.return), 0 === (2048 & t.flags))) {
            if (null !== (n = al(n, t, jl))) return void (Dl = n);
            if (
              (24 !== (n = t).tag && 23 !== n.tag) ||
              null === n.memoizedState ||
              0 !== (1073741824 & jl) ||
              0 === (4 & n.mode)
            ) {
              for (var r = 0, a = n.child; null !== a; )
                (r |= a.lanes | a.childLanes), (a = a.sibling);
              n.childLanes = r;
            }
            null !== e &&
              0 === (2048 & e.flags) &&
              (null === e.firstEffect && (e.firstEffect = t.firstEffect),
              null !== t.lastEffect &&
                (null !== e.lastEffect &&
                  (e.lastEffect.nextEffect = t.firstEffect),
                (e.lastEffect = t.lastEffect)),
              1 < t.flags &&
                (null !== e.lastEffect
                  ? (e.lastEffect.nextEffect = t)
                  : (e.firstEffect = t),
                (e.lastEffect = t)));
          } else {
            if (null !== (n = il(t))) return (n.flags &= 2047), void (Dl = n);
            null !== e &&
              ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
          }
          if (null !== (t = t.sibling)) return void (Dl = t);
          Dl = t = e;
        } while (null !== t);
        0 === Al && (Al = 5);
      }
      function Pu(e) {
        var t = Ba();
        return Ua(99, Tu.bind(null, e, t)), null;
      }
      function Tu(e, t) {
        do {
          Lu();
        } while (null !== Gl);
        if (0 !== (48 & Pl)) throw Error(o(327));
        var n = e.finishedWork;
        if (null === n) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
          throw Error(o(177));
        e.callbackNode = null;
        var r = n.lanes | n.childLanes,
          a = r,
          i = e.pendingLanes & ~a;
        (e.pendingLanes = a),
          (e.suspendedLanes = 0),
          (e.pingedLanes = 0),
          (e.expiredLanes &= a),
          (e.mutableReadLanes &= a),
          (e.entangledLanes &= a),
          (a = e.entanglements);
        for (var l = e.eventTimes, u = e.expirationTimes; 0 < i; ) {
          var s = 31 - $t(i),
            c = 1 << s;
          (a[s] = 0), (l[s] = -1), (u[s] = -1), (i &= ~c);
        }
        if (
          (null !== tu && 0 === (24 & r) && tu.has(e) && tu.delete(e),
          e === Tl && ((Dl = Tl = null), (Ll = 0)),
          1 < n.flags
            ? null !== n.lastEffect
              ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
              : (r = n)
            : (r = n.firstEffect),
          null !== r)
        ) {
          if (
            ((a = Pl),
            (Pl |= 32),
            (Cl.current = null),
            (Nr = Xt),
            pr((l = hr())))
          ) {
            if ("selectionStart" in l)
              u = { start: l.selectionStart, end: l.selectionEnd };
            else
              e: if (
                ((u = ((u = l.ownerDocument) && u.defaultView) || window),
                (c = u.getSelection && u.getSelection()) && 0 !== c.rangeCount)
              ) {
                (u = c.anchorNode),
                  (i = c.anchorOffset),
                  (s = c.focusNode),
                  (c = c.focusOffset);
                try {
                  u.nodeType, s.nodeType;
                } catch (M) {
                  u = null;
                  break e;
                }
                var f = 0,
                  d = -1,
                  h = -1,
                  p = 0,
                  v = 0,
                  g = l,
                  m = null;
                t: for (;;) {
                  for (
                    var y;
                    g !== u || (0 !== i && 3 !== g.nodeType) || (d = f + i),
                      g !== s || (0 !== c && 3 !== g.nodeType) || (h = f + c),
                      3 === g.nodeType && (f += g.nodeValue.length),
                      null !== (y = g.firstChild);

                  )
                    (m = g), (g = y);
                  for (;;) {
                    if (g === l) break t;
                    if (
                      (m === u && ++p === i && (d = f),
                      m === s && ++v === c && (h = f),
                      null !== (y = g.nextSibling))
                    )
                      break;
                    m = (g = m).parentNode;
                  }
                  g = y;
                }
                u = -1 === d || -1 === h ? null : { start: d, end: h };
              } else u = null;
            u = u || { start: 0, end: 0 };
          } else u = null;
          (Ir = { focusedElem: l, selectionRange: u }),
            (Xt = !1),
            (lu = null),
            (uu = !1),
            (Yl = r);
          do {
            try {
              Du();
            } catch (M) {
              if (null === Yl) throw Error(o(330));
              Fu(Yl, M), (Yl = Yl.nextEffect);
            }
          } while (null !== Yl);
          (lu = null), (Yl = r);
          do {
            try {
              for (l = e; null !== Yl; ) {
                var b = Yl.flags;
                if ((16 & b && ye(Yl.stateNode, ""), 128 & b)) {
                  var x = Yl.alternate;
                  if (null !== x) {
                    var k = x.ref;
                    null !== k &&
                      ("function" === typeof k ? k(null) : (k.current = null));
                  }
                }
                switch (1038 & b) {
                  case 2:
                    bl(Yl), (Yl.flags &= -3);
                    break;
                  case 6:
                    bl(Yl), (Yl.flags &= -3), wl(Yl.alternate, Yl);
                    break;
                  case 1024:
                    Yl.flags &= -1025;
                    break;
                  case 1028:
                    (Yl.flags &= -1025), wl(Yl.alternate, Yl);
                    break;
                  case 4:
                    wl(Yl.alternate, Yl);
                    break;
                  case 8:
                    _l(l, (u = Yl));
                    var _ = u.alternate;
                    ml(u), null !== _ && ml(_);
                }
                Yl = Yl.nextEffect;
              }
            } catch (M) {
              if (null === Yl) throw Error(o(330));
              Fu(Yl, M), (Yl = Yl.nextEffect);
            }
          } while (null !== Yl);
          if (
            ((k = Ir),
            (x = hr()),
            (b = k.focusedElem),
            (l = k.selectionRange),
            x !== b &&
              b &&
              b.ownerDocument &&
              dr(b.ownerDocument.documentElement, b))
          ) {
            null !== l &&
              pr(b) &&
              ((x = l.start),
              void 0 === (k = l.end) && (k = x),
              "selectionStart" in b
                ? ((b.selectionStart = x),
                  (b.selectionEnd = Math.min(k, b.value.length)))
                : (k =
                    ((x = b.ownerDocument || document) && x.defaultView) ||
                    window).getSelection &&
                  ((k = k.getSelection()),
                  (u = b.textContent.length),
                  (_ = Math.min(l.start, u)),
                  (l = void 0 === l.end ? _ : Math.min(l.end, u)),
                  !k.extend && _ > l && ((u = l), (l = _), (_ = u)),
                  (u = fr(b, _)),
                  (i = fr(b, l)),
                  u &&
                    i &&
                    (1 !== k.rangeCount ||
                      k.anchorNode !== u.node ||
                      k.anchorOffset !== u.offset ||
                      k.focusNode !== i.node ||
                      k.focusOffset !== i.offset) &&
                    ((x = x.createRange()).setStart(u.node, u.offset),
                    k.removeAllRanges(),
                    _ > l
                      ? (k.addRange(x), k.extend(i.node, i.offset))
                      : (x.setEnd(i.node, i.offset), k.addRange(x))))),
              (x = []);
            for (k = b; (k = k.parentNode); )
              1 === k.nodeType &&
                x.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
            for (
              "function" === typeof b.focus && b.focus(), b = 0;
              b < x.length;
              b++
            )
              ((k = x[b]).element.scrollLeft = k.left),
                (k.element.scrollTop = k.top);
          }
          (Xt = !!Nr), (Ir = Nr = null), (e.current = n), (Yl = r);
          do {
            try {
              for (b = e; null !== Yl; ) {
                var w = Yl.flags;
                if ((36 & w && pl(b, Yl.alternate, Yl), 128 & w)) {
                  x = void 0;
                  var S = Yl.ref;
                  if (null !== S) {
                    var O = Yl.stateNode;
                    switch (Yl.tag) {
                      case 5:
                        x = O;
                        break;
                      default:
                        x = O;
                    }
                    "function" === typeof S ? S(x) : (S.current = x);
                  }
                }
                Yl = Yl.nextEffect;
              }
            } catch (M) {
              if (null === Yl) throw Error(o(330));
              Fu(Yl, M), (Yl = Yl.nextEffect);
            }
          } while (null !== Yl);
          (Yl = null), Aa(), (Pl = a);
        } else e.current = n;
        if (Kl) (Kl = !1), (Gl = e), (Zl = t);
        else
          for (Yl = r; null !== Yl; )
            (t = Yl.nextEffect),
              (Yl.nextEffect = null),
              8 & Yl.flags && (((w = Yl).sibling = null), (w.stateNode = null)),
              (Yl = t);
        if (
          (0 === (r = e.pendingLanes) && (Xl = null),
          1 === r ? (e === ru ? nu++ : ((nu = 0), (ru = e))) : (nu = 0),
          (n = n.stateNode),
          ka && "function" === typeof ka.onCommitFiberRoot)
        )
          try {
            ka.onCommitFiberRoot(xa, n, void 0, 64 === (64 & n.current.flags));
          } catch (M) {}
        if ((hu(e, Va()), Ql)) throw ((Ql = !1), (e = ql), (ql = null), e);
        return 0 !== (8 & Pl) || Ha(), null;
      }
      function Du() {
        for (; null !== Yl; ) {
          var e = Yl.alternate;
          uu ||
            null === lu ||
            (0 !== (8 & Yl.flags)
              ? et(Yl, lu) && (uu = !0)
              : 13 === Yl.tag && Ol(e, Yl) && et(Yl, lu) && (uu = !0));
          var t = Yl.flags;
          0 !== (256 & t) && hl(e, Yl),
            0 === (512 & t) ||
              Kl ||
              ((Kl = !0),
              $a(97, function () {
                return Lu(), null;
              })),
            (Yl = Yl.nextEffect);
        }
      }
      function Lu() {
        if (90 !== Zl) {
          var e = 97 < Zl ? 97 : Zl;
          return (Zl = 90), Ua(e, Au);
        }
        return !1;
      }
      function ju(e, t) {
        Jl.push(t, e),
          Kl ||
            ((Kl = !0),
            $a(97, function () {
              return Lu(), null;
            }));
      }
      function Ru(e, t) {
        eu.push(t, e),
          Kl ||
            ((Kl = !0),
            $a(97, function () {
              return Lu(), null;
            }));
      }
      function Au() {
        if (null === Gl) return !1;
        var e = Gl;
        if (((Gl = null), 0 !== (48 & Pl))) throw Error(o(331));
        var t = Pl;
        Pl |= 32;
        var n = eu;
        eu = [];
        for (var r = 0; r < n.length; r += 2) {
          var a = n[r],
            i = n[r + 1],
            l = a.destroy;
          if (((a.destroy = void 0), "function" === typeof l))
            try {
              l();
            } catch (s) {
              if (null === i) throw Error(o(330));
              Fu(i, s);
            }
        }
        for (n = Jl, Jl = [], r = 0; r < n.length; r += 2) {
          (a = n[r]), (i = n[r + 1]);
          try {
            var u = a.create;
            a.destroy = u();
          } catch (s) {
            if (null === i) throw Error(o(330));
            Fu(i, s);
          }
        }
        for (u = e.current.firstEffect; null !== u; )
          (e = u.nextEffect),
            (u.nextEffect = null),
            8 & u.flags && ((u.sibling = null), (u.stateNode = null)),
            (u = e);
        return (Pl = t), Ha(), !0;
      }
      function zu(e, t, n) {
        ui(e, (t = sl(0, (t = ol(n, t)), 1))),
          (t = su()),
          null !== (e = du(e, 1)) && (Ut(e, 1, t), hu(e, t));
      }
      function Fu(e, t) {
        if (3 === e.tag) zu(e, e, t);
        else
          for (var n = e.return; null !== n; ) {
            if (3 === n.tag) {
              zu(n, e, t);
              break;
            }
            if (1 === n.tag) {
              var r = n.stateNode;
              if (
                "function" === typeof n.type.getDerivedStateFromError ||
                ("function" === typeof r.componentDidCatch &&
                  (null === Xl || !Xl.has(r)))
              ) {
                var a = cl(n, (e = ol(t, e)), 1);
                if ((ui(n, a), (a = su()), null !== (n = du(n, 1))))
                  Ut(n, 1, a), hu(n, a);
                else if (
                  "function" === typeof r.componentDidCatch &&
                  (null === Xl || !Xl.has(r))
                )
                  try {
                    r.componentDidCatch(t, e);
                  } catch (i) {}
                break;
              }
            }
            n = n.return;
          }
      }
      function Nu(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          (t = su()),
          (e.pingedLanes |= e.suspendedLanes & n),
          Tl === e &&
            (Ll & n) === n &&
            (4 === Al || (3 === Al && (62914560 & Ll) === Ll && 500 > Va() - Wl)
              ? ku(e, 0)
              : (Vl |= n)),
          hu(e, t);
      }
      function Iu(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t),
          0 === (t = 0) &&
            (0 === (2 & (t = e.mode))
              ? (t = 1)
              : 0 === (4 & t)
              ? (t = 99 === Ba() ? 1 : 2)
              : (0 === iu && (iu = Fl),
                0 === (t = Bt(62914560 & ~iu)) && (t = 4194304))),
          (n = su()),
          null !== (e = du(e, t)) && (Ut(e, t, n), hu(e, n));
      }
      function Vu(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
          (this.mode = r),
          (this.flags = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null);
      }
      function Bu(e, t, n, r) {
        return new Vu(e, t, n, r);
      }
      function Wu(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function Uu(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = Bu(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            null === t
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function $u(e, t, n, r, a, i) {
        var l = 2;
        if (((r = e), "function" === typeof e)) Wu(e) && (l = 1);
        else if ("string" === typeof e) l = 5;
        else
          e: switch (e) {
            case S:
              return Hu(n.children, a, i, t);
            case z:
              (l = 8), (a |= 16);
              break;
            case O:
              (l = 8), (a |= 1);
              break;
            case M:
              return (
                ((e = Bu(12, n, t, 8 | a)).elementType = M),
                (e.type = M),
                (e.lanes = i),
                e
              );
            case T:
              return (
                ((e = Bu(13, n, t, a)).type = T),
                (e.elementType = T),
                (e.lanes = i),
                e
              );
            case D:
              return ((e = Bu(19, n, t, a)).elementType = D), (e.lanes = i), e;
            case F:
              return Yu(n, a, i, t);
            case N:
              return ((e = Bu(24, n, t, a)).elementType = N), (e.lanes = i), e;
            default:
              if ("object" === typeof e && null !== e)
                switch (e.$$typeof) {
                  case E:
                    l = 10;
                    break e;
                  case C:
                    l = 9;
                    break e;
                  case P:
                    l = 11;
                    break e;
                  case L:
                    l = 14;
                    break e;
                  case j:
                    (l = 16), (r = null);
                    break e;
                  case R:
                    l = 22;
                    break e;
                }
              throw Error(o(130, null == e ? e : typeof e, ""));
          }
        return (
          ((t = Bu(l, n, t, a)).elementType = e), (t.type = r), (t.lanes = i), t
        );
      }
      function Hu(e, t, n, r) {
        return ((e = Bu(7, e, r, t)).lanes = n), e;
      }
      function Yu(e, t, n, r) {
        return ((e = Bu(23, e, r, t)).elementType = F), (e.lanes = n), e;
      }
      function Qu(e, t, n) {
        return ((e = Bu(6, e, null, t)).lanes = n), e;
      }
      function qu(e, t, n) {
        return (
          ((t = Bu(
            4,
            null !== e.children ? e.children : [],
            e.key,
            t
          )).lanes = n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      function Xu(e, t, n) {
        (this.tag = t),
          (this.containerInfo = e),
          (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
          (this.timeoutHandle = -1),
          (this.pendingContext = this.context = null),
          (this.hydrate = n),
          (this.callbackNode = null),
          (this.callbackPriority = 0),
          (this.eventTimes = Wt(0)),
          (this.expirationTimes = Wt(-1)),
          (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
          (this.entanglements = Wt(0)),
          (this.mutableSourceEagerHydrationData = null);
      }
      function Ku(e, t, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: w,
          key: null == r ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n,
        };
      }
      function Gu(e, t, n, r) {
        var a = t.current,
          i = su(),
          l = cu(a);
        e: if (n) {
          t: {
            if (Ke((n = n._reactInternals)) !== n || 1 !== n.tag)
              throw Error(o(170));
            var u = n;
            do {
              switch (u.tag) {
                case 3:
                  u = u.stateNode.context;
                  break t;
                case 1:
                  if (pa(u.type)) {
                    u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              u = u.return;
            } while (null !== u);
            throw Error(o(171));
          }
          if (1 === n.tag) {
            var s = n.type;
            if (pa(s)) {
              n = ma(n, s, u);
              break e;
            }
          }
          n = u;
        } else n = sa;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = li(i, l)).payload = { element: e }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          ui(a, t),
          fu(a, l, i),
          l
        );
      }
      function Zu(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
          case 5:
          default:
            return e.child.stateNode;
        }
      }
      function Ju(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t;
        }
      }
      function es(e, t) {
        Ju(e, t), (e = e.alternate) && Ju(e, t);
      }
      function ts(e, t, n) {
        var r =
          (null != n &&
            null != n.hydrationOptions &&
            n.hydrationOptions.mutableSources) ||
          null;
        if (
          ((n = new Xu(e, t, null != n && !0 === n.hydrate)),
          (t = Bu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
          (n.current = t),
          (t.stateNode = n),
          ii(t),
          (e[Gr] = n.current),
          Pr(8 === e.nodeType ? e.parentNode : e),
          r)
        )
          for (e = 0; e < r.length; e++) {
            var a = (t = r[e])._getVersion;
            (a = a(t._source)),
              null == n.mutableSourceEagerHydrationData
                ? (n.mutableSourceEagerHydrationData = [t, a])
                : n.mutableSourceEagerHydrationData.push(t, a);
          }
        this._internalRoot = n;
      }
      function ns(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType ||
              " react-mount-point-unstable " !== e.nodeValue))
        );
      }
      function rs(e, t, n, r, a) {
        var i = n._reactRootContainer;
        if (i) {
          var o = i._internalRoot;
          if ("function" === typeof a) {
            var l = a;
            a = function () {
              var e = Zu(o);
              l.call(e);
            };
          }
          Gu(t, o, e, a);
        } else {
          if (
            ((i = n._reactRootContainer = (function (e, t) {
              if (
                (t ||
                  (t = !(
                    !(t = e
                      ? 9 === e.nodeType
                        ? e.documentElement
                        : e.firstChild
                      : null) ||
                    1 !== t.nodeType ||
                    !t.hasAttribute("data-reactroot")
                  )),
                !t)
              )
                for (var n; (n = e.lastChild); ) e.removeChild(n);
              return new ts(e, 0, t ? { hydrate: !0 } : void 0);
            })(n, r)),
            (o = i._internalRoot),
            "function" === typeof a)
          ) {
            var u = a;
            a = function () {
              var e = Zu(o);
              u.call(e);
            };
          }
          yu(function () {
            Gu(t, o, e, a);
          });
        }
        return Zu(o);
      }
      function as(e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!ns(t)) throw Error(o(200));
        return Ku(e, t, null, n);
      }
      (Hl = function (e, t, n) {
        var r = t.lanes;
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || fa.current) Ro = !0;
          else {
            if (0 === (n & r)) {
              switch (((Ro = !1), t.tag)) {
                case 3:
                  $o(t), $i();
                  break;
                case 5:
                  Li(t);
                  break;
                case 1:
                  pa(t.type) && ya(t);
                  break;
                case 4:
                  Ti(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  r = t.memoizedProps.value;
                  var a = t.type._context;
                  ua(Xa, a._currentValue), (a._currentValue = r);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 !== (n & t.child.childLanes)
                      ? Xo(e, t, n)
                      : (ua(Ri, 1 & Ri.current),
                        null !== (t = nl(e, t, n)) ? t.sibling : null);
                  ua(Ri, 1 & Ri.current);
                  break;
                case 19:
                  if (((r = 0 !== (n & t.childLanes)), 0 !== (64 & e.flags))) {
                    if (r) return tl(e, t, n);
                    t.flags |= 64;
                  }
                  if (
                    (null !== (a = t.memoizedState) &&
                      ((a.rendering = null),
                      (a.tail = null),
                      (a.lastEffect = null)),
                    ua(Ri, Ri.current),
                    r)
                  )
                    break;
                  return null;
                case 23:
                case 24:
                  return (t.lanes = 0), Io(e, t, n);
              }
              return nl(e, t, n);
            }
            Ro = 0 !== (16384 & e.flags);
          }
        else Ro = !1;
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (e = t.pendingProps),
              (a = ha(t, ca.current)),
              ni(t, n),
              (a = ro(null, t, r, e, a, n)),
              (t.flags |= 1),
              "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof)
            ) {
              if (
                ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                pa(r))
              ) {
                var i = !0;
                ya(t);
              } else i = !1;
              (t.memoizedState =
                null !== a.state && void 0 !== a.state ? a.state : null),
                ii(t);
              var l = r.getDerivedStateFromProps;
              "function" === typeof l && hi(t, r, l, e),
                (a.updater = pi),
                (t.stateNode = a),
                (a._reactInternals = t),
                yi(t, r, e, n),
                (t = Uo(null, t, r, !0, i, n));
            } else (t.tag = 0), Ao(null, t, a, n), (t = t.child);
            return t;
          case 16:
            a = t.elementType;
            e: {
              switch (
                (null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (a = (i = a._init)(a._payload)),
                (t.type = a),
                (i = t.tag = (function (e) {
                  if ("function" === typeof e) return Wu(e) ? 1 : 0;
                  if (void 0 !== e && null !== e) {
                    if ((e = e.$$typeof) === P) return 11;
                    if (e === L) return 14;
                  }
                  return 2;
                })(a)),
                (e = qa(a, e)),
                i)
              ) {
                case 0:
                  t = Bo(null, t, a, e, n);
                  break e;
                case 1:
                  t = Wo(null, t, a, e, n);
                  break e;
                case 11:
                  t = zo(null, t, a, e, n);
                  break e;
                case 14:
                  t = Fo(null, t, a, qa(a.type, e), r, n);
                  break e;
              }
              throw Error(o(306, a, ""));
            }
            return t;
          case 0:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Bo(e, t, r, (a = t.elementType === r ? a : qa(r, a)), n)
            );
          case 1:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Wo(e, t, r, (a = t.elementType === r ? a : qa(r, a)), n)
            );
          case 3:
            if (($o(t), (r = t.updateQueue), null === e || null === r))
              throw Error(o(282));
            if (
              ((r = t.pendingProps),
              (a = null !== (a = t.memoizedState) ? a.element : null),
              oi(e, t),
              ci(t, r, null, n),
              (r = t.memoizedState.element) === a)
            )
              $i(), (t = nl(e, t, n));
            else {
              if (
                ((i = (a = t.stateNode).hydrate) &&
                  ((Fi = Hr(t.stateNode.containerInfo.firstChild)),
                  (zi = t),
                  (i = Ni = !0)),
                i)
              ) {
                if (null != (e = a.mutableSourceEagerHydrationData))
                  for (a = 0; a < e.length; a += 2)
                    ((i = e[a])._workInProgressVersionPrimary = e[a + 1]),
                      Hi.push(i);
                for (n = Si(t, null, r, n), t.child = n; n; )
                  (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
              } else Ao(e, t, r, n), $i();
              t = t.child;
            }
            return t;
          case 5:
            return (
              Li(t),
              null === e && Bi(t),
              (r = t.type),
              (a = t.pendingProps),
              (i = null !== e ? e.memoizedProps : null),
              (l = a.children),
              Br(r, a) ? (l = null) : null !== i && Br(r, i) && (t.flags |= 16),
              Vo(e, t),
              Ao(e, t, l, n),
              t.child
            );
          case 6:
            return null === e && Bi(t), null;
          case 13:
            return Xo(e, t, n);
          case 4:
            return (
              Ti(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = wi(t, null, r, n)) : Ao(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (a = t.pendingProps),
              zo(e, t, r, (a = t.elementType === r ? a : qa(r, a)), n)
            );
          case 7:
            return Ao(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return Ao(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              (r = t.type._context),
                (a = t.pendingProps),
                (l = t.memoizedProps),
                (i = a.value);
              var u = t.type._context;
              if ((ua(Xa, u._currentValue), (u._currentValue = i), null !== l))
                if (
                  ((u = l.value),
                  0 ===
                    (i = lr(u, i)
                      ? 0
                      : 0 |
                        ("function" === typeof r._calculateChangedBits
                          ? r._calculateChangedBits(u, i)
                          : 1073741823)))
                ) {
                  if (l.children === a.children && !fa.current) {
                    t = nl(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                    var s = u.dependencies;
                    if (null !== s) {
                      l = u.child;
                      for (var c = s.firstContext; null !== c; ) {
                        if (c.context === r && 0 !== (c.observedBits & i)) {
                          1 === u.tag &&
                            (((c = li(-1, n & -n)).tag = 2), ui(u, c)),
                            (u.lanes |= n),
                            null !== (c = u.alternate) && (c.lanes |= n),
                            ti(u.return, n),
                            (s.lanes |= n);
                          break;
                        }
                        c = c.next;
                      }
                    } else
                      l = 10 === u.tag && u.type === t.type ? null : u.child;
                    if (null !== l) l.return = u;
                    else
                      for (l = u; null !== l; ) {
                        if (l === t) {
                          l = null;
                          break;
                        }
                        if (null !== (u = l.sibling)) {
                          (u.return = l.return), (l = u);
                          break;
                        }
                        l = l.return;
                      }
                    u = l;
                  }
              Ao(e, t, a.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (a = t.type),
              (r = (i = t.pendingProps).children),
              ni(t, n),
              (r = r((a = ri(a, i.unstable_observedBits)))),
              (t.flags |= 1),
              Ao(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (i = qa((a = t.type), t.pendingProps)),
              Fo(e, t, a, (i = qa(a.type, i)), r, n)
            );
          case 15:
            return No(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (a = t.pendingProps),
              (a = t.elementType === r ? a : qa(r, a)),
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (t.tag = 1),
              pa(r) ? ((e = !0), ya(t)) : (e = !1),
              ni(t, n),
              gi(t, r, a),
              yi(t, r, a, n),
              Uo(null, t, r, !0, e, n)
            );
          case 19:
            return tl(e, t, n);
          case 23:
          case 24:
            return Io(e, t, n);
        }
        throw Error(o(156, t.tag));
      }),
        (ts.prototype.render = function (e) {
          Gu(e, this._internalRoot, null, null);
        }),
        (ts.prototype.unmount = function () {
          var e = this._internalRoot,
            t = e.containerInfo;
          Gu(null, e, null, function () {
            t[Gr] = null;
          });
        }),
        (tt = function (e) {
          13 === e.tag && (fu(e, 4, su()), es(e, 4));
        }),
        (nt = function (e) {
          13 === e.tag && (fu(e, 67108864, su()), es(e, 67108864));
        }),
        (rt = function (e) {
          if (13 === e.tag) {
            var t = su(),
              n = cu(e);
            fu(e, n, t), es(e, n);
          }
        }),
        (at = function (e, t) {
          return t();
        }),
        (Ee = function (e, t, n) {
          switch (t) {
            case "input":
              if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                  ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var a = na(r);
                    if (!a) throw Error(o(90));
                    G(r), ne(r, a);
                  }
                }
              }
              break;
            case "textarea":
              se(e, n);
              break;
            case "select":
              null != (t = n.value) && oe(e, !!n.multiple, t, !1);
          }
        }),
        (je = mu),
        (Re = function (e, t, n, r, a) {
          var i = Pl;
          Pl |= 4;
          try {
            return Ua(98, e.bind(null, t, n, r, a));
          } finally {
            0 === (Pl = i) && ($l(), Ha());
          }
        }),
        (Ae = function () {
          0 === (49 & Pl) &&
            ((function () {
              if (null !== tu) {
                var e = tu;
                (tu = null),
                  e.forEach(function (e) {
                    (e.expiredLanes |= 24 & e.pendingLanes), hu(e, Va());
                  });
              }
              Ha();
            })(),
            Lu());
        }),
        (ze = function (e, t) {
          var n = Pl;
          Pl |= 2;
          try {
            return e(t);
          } finally {
            0 === (Pl = n) && ($l(), Ha());
          }
        });
      var is = { Events: [ea, ta, na, De, Le, Lu, { current: !1 }] },
        os = {
          findFiberByHostInstance: Jr,
          bundleType: 0,
          version: "17.0.2",
          rendererPackageName: "react-dom",
        },
        ls = {
          bundleType: os.bundleType,
          version: os.version,
          rendererPackageName: os.rendererPackageName,
          rendererConfig: os.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: k.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = Je(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance:
            os.findFiberByHostInstance ||
            function () {
              return null;
            },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
        };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var us = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!us.isDisabled && us.supportsFiber)
          try {
            (xa = us.inject(ls)), (ka = us);
          } catch (ge) {}
      }
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = is),
        (t.createPortal = as),
        (t.findDOMNode = function (e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(o(188));
            throw Error(o(268, Object.keys(e)));
          }
          return (e = null === (e = Je(t)) ? null : e.stateNode);
        }),
        (t.flushSync = function (e, t) {
          var n = Pl;
          if (0 !== (48 & n)) return e(t);
          Pl |= 1;
          try {
            if (e) return Ua(99, e.bind(null, t));
          } finally {
            (Pl = n), Ha();
          }
        }),
        (t.hydrate = function (e, t, n) {
          if (!ns(t)) throw Error(o(200));
          return rs(null, e, t, !0, n);
        }),
        (t.render = function (e, t, n) {
          if (!ns(t)) throw Error(o(200));
          return rs(null, e, t, !1, n);
        }),
        (t.unmountComponentAtNode = function (e) {
          if (!ns(e)) throw Error(o(40));
          return (
            !!e._reactRootContainer &&
            (yu(function () {
              rs(null, null, e, !1, function () {
                (e._reactRootContainer = null), (e[Gr] = null);
              });
            }),
            !0)
          );
        }),
        (t.unstable_batchedUpdates = mu),
        (t.unstable_createPortal = function (e, t) {
          return as(
            e,
            t,
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null
          );
        }),
        (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
          if (!ns(n)) throw Error(o(200));
          if (null == e || void 0 === e._reactInternals) throw Error(o(38));
          return rs(e, t, n, !1, r);
        }),
        (t.version = "17.0.2");
    },
    function (e, t, n) {
      "use strict";
      e.exports = n(31);
    },
    function (e, t, n) {
      "use strict";
      var r, a, i, o;
      if (
        "object" === typeof performance &&
        "function" === typeof performance.now
      ) {
        var l = performance;
        t.unstable_now = function () {
          return l.now();
        };
      } else {
        var u = Date,
          s = u.now();
        t.unstable_now = function () {
          return u.now() - s;
        };
      }
      if (
        "undefined" === typeof window ||
        "function" !== typeof MessageChannel
      ) {
        var c = null,
          f = null,
          d = function e() {
            if (null !== c)
              try {
                var n = t.unstable_now();
                c(!0, n), (c = null);
              } catch (r) {
                throw (setTimeout(e, 0), r);
              }
          };
        (r = function (e) {
          null !== c ? setTimeout(r, 0, e) : ((c = e), setTimeout(d, 0));
        }),
          (a = function (e, t) {
            f = setTimeout(e, t);
          }),
          (i = function () {
            clearTimeout(f);
          }),
          (t.unstable_shouldYield = function () {
            return !1;
          }),
          (o = t.unstable_forceFrameRate = function () {});
      } else {
        var h = window.setTimeout,
          p = window.clearTimeout;
        if ("undefined" !== typeof console) {
          var v = window.cancelAnimationFrame;
          "function" !== typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            ),
            "function" !== typeof v &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              );
        }
        var g = !1,
          m = null,
          y = -1,
          b = 5,
          x = 0;
        (t.unstable_shouldYield = function () {
          return t.unstable_now() >= x;
        }),
          (o = function () {}),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (b = 0 < e ? Math.floor(1e3 / e) : 5);
          });
        var k = new MessageChannel(),
          _ = k.port2;
        (k.port1.onmessage = function () {
          if (null !== m) {
            var e = t.unstable_now();
            x = e + b;
            try {
              m(!0, e) ? _.postMessage(null) : ((g = !1), (m = null));
            } catch (n) {
              throw (_.postMessage(null), n);
            }
          } else g = !1;
        }),
          (r = function (e) {
            (m = e), g || ((g = !0), _.postMessage(null));
          }),
          (a = function (e, n) {
            y = h(function () {
              e(t.unstable_now());
            }, n);
          }),
          (i = function () {
            p(y), (y = -1);
          });
      }
      function w(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
          var r = (n - 1) >>> 1,
            a = e[r];
          if (!(void 0 !== a && 0 < M(a, t))) break e;
          (e[r] = t), (e[n] = a), (n = r);
        }
      }
      function S(e) {
        return void 0 === (e = e[0]) ? null : e;
      }
      function O(e) {
        var t = e[0];
        if (void 0 !== t) {
          var n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length; r < a; ) {
              var i = 2 * (r + 1) - 1,
                o = e[i],
                l = i + 1,
                u = e[l];
              if (void 0 !== o && 0 > M(o, n))
                void 0 !== u && 0 > M(u, o)
                  ? ((e[r] = u), (e[l] = n), (r = l))
                  : ((e[r] = o), (e[i] = n), (r = i));
              else {
                if (!(void 0 !== u && 0 > M(u, n))) break e;
                (e[r] = u), (e[l] = n), (r = l);
              }
            }
          }
          return t;
        }
        return null;
      }
      function M(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      var E = [],
        C = [],
        P = 1,
        T = null,
        D = 3,
        L = !1,
        j = !1,
        R = !1;
      function A(e) {
        for (var t = S(C); null !== t; ) {
          if (null === t.callback) O(C);
          else {
            if (!(t.startTime <= e)) break;
            O(C), (t.sortIndex = t.expirationTime), w(E, t);
          }
          t = S(C);
        }
      }
      function z(e) {
        if (((R = !1), A(e), !j))
          if (null !== S(E)) (j = !0), r(F);
          else {
            var t = S(C);
            null !== t && a(z, t.startTime - e);
          }
      }
      function F(e, n) {
        (j = !1), R && ((R = !1), i()), (L = !0);
        var r = D;
        try {
          for (
            A(n), T = S(E);
            null !== T &&
            (!(T.expirationTime > n) || (e && !t.unstable_shouldYield()));

          ) {
            var o = T.callback;
            if ("function" === typeof o) {
              (T.callback = null), (D = T.priorityLevel);
              var l = o(T.expirationTime <= n);
              (n = t.unstable_now()),
                "function" === typeof l ? (T.callback = l) : T === S(E) && O(E),
                A(n);
            } else O(E);
            T = S(E);
          }
          if (null !== T) var u = !0;
          else {
            var s = S(C);
            null !== s && a(z, s.startTime - n), (u = !1);
          }
          return u;
        } finally {
          (T = null), (D = r), (L = !1);
        }
      }
      var N = o;
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          j || L || ((j = !0), r(F));
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return D;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return S(E);
        }),
        (t.unstable_next = function (e) {
          switch (D) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = D;
          }
          var n = D;
          D = t;
          try {
            return e();
          } finally {
            D = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = N),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = D;
          D = e;
          try {
            return t();
          } finally {
            D = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, n, o) {
          var l = t.unstable_now();
          switch (
            ("object" === typeof o && null !== o
              ? (o = "number" === typeof (o = o.delay) && 0 < o ? l + o : l)
              : (o = l),
            e)
          ) {
            case 1:
              var u = -1;
              break;
            case 2:
              u = 250;
              break;
            case 5:
              u = 1073741823;
              break;
            case 4:
              u = 1e4;
              break;
            default:
              u = 5e3;
          }
          return (
            (e = {
              id: P++,
              callback: n,
              priorityLevel: e,
              startTime: o,
              expirationTime: (u = o + u),
              sortIndex: -1,
            }),
            o > l
              ? ((e.sortIndex = o),
                w(C, e),
                null === S(E) &&
                  e === S(C) &&
                  (R ? i() : (R = !0), a(z, o - l)))
              : ((e.sortIndex = u), w(E, e), j || L || ((j = !0), r(F))),
            e
          );
        }),
        (t.unstable_wrapCallback = function (e) {
          var t = D;
          return function () {
            var n = D;
            D = t;
            try {
              return e.apply(this, arguments);
            } finally {
              D = n;
            }
          };
        });
    },
    ,
    ,
    function (e, t, n) {
      "use strict";
      n(23);
      var r = n(1),
        a = 60103;
      if (((t.Fragment = 60107), "function" === typeof Symbol && Symbol.for)) {
        var i = Symbol.for;
        (a = i("react.element")), (t.Fragment = i("react.fragment"));
      }
      var o =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = Object.prototype.hasOwnProperty,
        u = { key: !0, ref: !0, __self: !0, __source: !0 };
      function s(e, t, n) {
        var r,
          i = {},
          s = null,
          c = null;
        for (r in (void 0 !== n && (s = "" + n),
        void 0 !== t.key && (s = "" + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          l.call(t, r) && !u.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
        return {
          $$typeof: a,
          type: e,
          key: s,
          ref: c,
          props: i,
          _owner: o.current,
        };
      }
      (t.jsx = s), (t.jsxs = s);
    },
    function (e, t, n) {
      "use strict";
      var r = n(36);
      function a() {}
      function i() {}
      (i.resetWarningCache = a),
        (e.exports = function () {
          function e(e, t, n, a, i, o) {
            if (o !== r) {
              var l = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: a,
          };
          return (n.PropTypes = n), n;
        });
    },
    function (e, t, n) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" === typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t) {
      e.exports =
        Array.isArray ||
        function (e) {
          return "[object Array]" == Object.prototype.toString.call(e);
        };
    },
    function (e, t, n) {
      "use strict";
      e.exports = n(40);
    },
    function (e, t, n) {
      "use strict";
      var r = "function" === typeof Symbol && Symbol.for,
        a = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        o = r ? Symbol.for("react.fragment") : 60107,
        l = r ? Symbol.for("react.strict_mode") : 60108,
        u = r ? Symbol.for("react.profiler") : 60114,
        s = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        f = r ? Symbol.for("react.async_mode") : 60111,
        d = r ? Symbol.for("react.concurrent_mode") : 60111,
        h = r ? Symbol.for("react.forward_ref") : 60112,
        p = r ? Symbol.for("react.suspense") : 60113,
        v = r ? Symbol.for("react.suspense_list") : 60120,
        g = r ? Symbol.for("react.memo") : 60115,
        m = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        b = r ? Symbol.for("react.fundamental") : 60117,
        x = r ? Symbol.for("react.responder") : 60118,
        k = r ? Symbol.for("react.scope") : 60119;
      function _(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case a:
              switch ((e = e.type)) {
                case f:
                case d:
                case o:
                case u:
                case l:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case h:
                    case m:
                    case g:
                    case s:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
              return t;
          }
        }
      }
      function w(e) {
        return _(e) === d;
      }
      (t.AsyncMode = f),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = c),
        (t.ContextProvider = s),
        (t.Element = a),
        (t.ForwardRef = h),
        (t.Fragment = o),
        (t.Lazy = m),
        (t.Memo = g),
        (t.Portal = i),
        (t.Profiler = u),
        (t.StrictMode = l),
        (t.Suspense = p),
        (t.isAsyncMode = function (e) {
          return w(e) || _(e) === f;
        }),
        (t.isConcurrentMode = w),
        (t.isContextConsumer = function (e) {
          return _(e) === c;
        }),
        (t.isContextProvider = function (e) {
          return _(e) === s;
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === a;
        }),
        (t.isForwardRef = function (e) {
          return _(e) === h;
        }),
        (t.isFragment = function (e) {
          return _(e) === o;
        }),
        (t.isLazy = function (e) {
          return _(e) === m;
        }),
        (t.isMemo = function (e) {
          return _(e) === g;
        }),
        (t.isPortal = function (e) {
          return _(e) === i;
        }),
        (t.isProfiler = function (e) {
          return _(e) === u;
        }),
        (t.isStrictMode = function (e) {
          return _(e) === l;
        }),
        (t.isSuspense = function (e) {
          return _(e) === p;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === o ||
            e === d ||
            e === u ||
            e === l ||
            e === p ||
            e === v ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === g ||
                e.$$typeof === s ||
                e.$$typeof === c ||
                e.$$typeof === h ||
                e.$$typeof === b ||
                e.$$typeof === x ||
                e.$$typeof === k ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = _);
    },
    function (e, t, n) {
      "use strict";
      e.exports = n(42);
    },
    function (e, t, n) {
      "use strict";
      var r = "function" === typeof Symbol && Symbol.for,
        a = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        o = r ? Symbol.for("react.fragment") : 60107,
        l = r ? Symbol.for("react.strict_mode") : 60108,
        u = r ? Symbol.for("react.profiler") : 60114,
        s = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        f = r ? Symbol.for("react.async_mode") : 60111,
        d = r ? Symbol.for("react.concurrent_mode") : 60111,
        h = r ? Symbol.for("react.forward_ref") : 60112,
        p = r ? Symbol.for("react.suspense") : 60113,
        v = r ? Symbol.for("react.suspense_list") : 60120,
        g = r ? Symbol.for("react.memo") : 60115,
        m = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        b = r ? Symbol.for("react.fundamental") : 60117,
        x = r ? Symbol.for("react.responder") : 60118,
        k = r ? Symbol.for("react.scope") : 60119;
      function _(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case a:
              switch ((e = e.type)) {
                case f:
                case d:
                case o:
                case u:
                case l:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case h:
                    case m:
                    case g:
                    case s:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
              return t;
          }
        }
      }
      function w(e) {
        return _(e) === d;
      }
      (t.AsyncMode = f),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = c),
        (t.ContextProvider = s),
        (t.Element = a),
        (t.ForwardRef = h),
        (t.Fragment = o),
        (t.Lazy = m),
        (t.Memo = g),
        (t.Portal = i),
        (t.Profiler = u),
        (t.StrictMode = l),
        (t.Suspense = p),
        (t.isAsyncMode = function (e) {
          return w(e) || _(e) === f;
        }),
        (t.isConcurrentMode = w),
        (t.isContextConsumer = function (e) {
          return _(e) === c;
        }),
        (t.isContextProvider = function (e) {
          return _(e) === s;
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === a;
        }),
        (t.isForwardRef = function (e) {
          return _(e) === h;
        }),
        (t.isFragment = function (e) {
          return _(e) === o;
        }),
        (t.isLazy = function (e) {
          return _(e) === m;
        }),
        (t.isMemo = function (e) {
          return _(e) === g;
        }),
        (t.isPortal = function (e) {
          return _(e) === i;
        }),
        (t.isProfiler = function (e) {
          return _(e) === u;
        }),
        (t.isStrictMode = function (e) {
          return _(e) === l;
        }),
        (t.isSuspense = function (e) {
          return _(e) === p;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === o ||
            e === d ||
            e === u ||
            e === l ||
            e === p ||
            e === v ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === g ||
                e.$$typeof === s ||
                e.$$typeof === c ||
                e.$$typeof === h ||
                e.$$typeof === b ||
                e.$$typeof === x ||
                e.$$typeof === k ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = _);
    },
  ],
]);
//# sourceMappingURL=2.0cc5d928.chunk.js.map
