import $, { useState as Se, useEffect as xe, useContext as Pe, useSyncExternalStore as dr } from "react";
function vr() {
  let [i, l] = Se({
    hostname: "",
    port: "",
    pathname: "",
    search: "",
    hash: "",
    protocol: ""
  });
  return xe(() => {
    const { hostname: g, port: h, pathname: b, search: w, hash: T, protocol: _ } = document.location;
    l({ hostname: g, port: h, pathname: b, search: w, hash: T, protocol: _ });
  }, [document.location.pathname]), i;
}
const Oe = $.createContext(null), je = $.createContext(null), pr = () => Pe(Oe), hr = () => Pe(je);
function Tr() {
  const { navigate: i } = hr();
  return i;
}
function Cr() {
  const { state: i, visited: l } = pr();
  return { state: i, visited: l };
}
var B = {}, gr = {
  get exports() {
    return B;
  },
  set exports(i) {
    B = i;
  }
}, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function mr() {
  if (Te)
    return A;
  Te = 1;
  var i = $, l = Symbol.for("react.element"), g = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, b = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(_, m, f) {
    var c, d = {}, C = null, L = null;
    f !== void 0 && (C = "" + f), m.key !== void 0 && (C = "" + m.key), m.ref !== void 0 && (L = m.ref);
    for (c in m)
      h.call(m, c) && !w.hasOwnProperty(c) && (d[c] = m[c]);
    if (_ && _.defaultProps)
      for (c in m = _.defaultProps, m)
        d[c] === void 0 && (d[c] = m[c]);
    return { $$typeof: l, type: _, key: C, ref: L, props: d, _owner: b.current };
  }
  return A.Fragment = g, A.jsx = T, A.jsxs = T, A;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function Rr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var i = $, l = Symbol.for("react.element"), g = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), _ = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), Q = Symbol.iterator, ke = "@@iterator";
    function De(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var O = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Fe("error", e, t);
      }
    }
    function Fe(e, r, t) {
      {
        var n = O.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ae = !1, Ie = !1, We = !1, $e = !1, Le = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === w || Le || e === b || e === f || e === c || $e || e === L || Ae || Ie || We || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === d || e.$$typeof === T || e.$$typeof === _ || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case g:
          return "Portal";
        case w:
          return "Profiler";
        case b:
          return "StrictMode";
        case f:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return re(r) + ".Consumer";
          case T:
            var t = e;
            return re(t._context) + ".Provider";
          case m:
            return Ve(e, e.render, "ForwardRef");
          case d:
            var n = e.displayName || null;
            return n !== null ? n : S(e.type) || "Memo";
          case C: {
            var u = e, s = u._payload, o = u._init;
            try {
              return S(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, D = 0, te, ne, ae, oe, ie, ue, se;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Ne() {
      {
        if (D === 0) {
          te = console.log, ne = console.info, ae = console.warn, oe = console.error, ie = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Ue() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: te
            }),
            info: P({}, e, {
              value: ne
            }),
            warn: P({}, e, {
              value: ae
            }),
            error: P({}, e, {
              value: oe
            }),
            group: P({}, e, {
              value: ie
            }),
            groupCollapsed: P({}, e, {
              value: ue
            }),
            groupEnd: P({}, e, {
              value: se
            })
          });
        }
        D < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = O.ReactCurrentDispatcher, J;
    function Y(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var G = !1, V;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Me();
    }
    function ce(e, r) {
      if (!e || G)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      G = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = q.current, q.current = null, Ne();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (x) {
              n = x;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (x) {
              n = x;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            n = x;
          }
          e();
        }
      } catch (x) {
        if (x && n && typeof x.stack == "string") {
          for (var a = x.stack.split(`
`), E = n.stack.split(`
`), v = a.length - 1, p = E.length - 1; v >= 1 && p >= 0 && a[v] !== E[p]; )
            p--;
          for (; v >= 1 && p >= 0; v--, p--)
            if (a[v] !== E[p]) {
              if (v !== 1 || p !== 1)
                do
                  if (v--, p--, p < 0 || a[v] !== E[p]) {
                    var y = `
` + a[v].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, y), y;
                  }
                while (v >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        G = !1, q.current = s, Ue(), Error.prepareStackTrace = u;
      }
      var k = e ? e.displayName || e.name : "", we = k ? Y(k) : "";
      return typeof e == "function" && V.set(e, we), we;
    }
    function Be(e, r, t) {
      return ce(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, qe(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case f:
          return Y("Suspense");
        case c:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return Be(e.render);
          case d:
            return N(e.type, r, t);
          case C: {
            var n = e, u = n._payload, s = n._init;
            try {
              return N(s(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, fe = {}, de = O.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, u) {
      {
        var s = Function.call.bind(U);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var E = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              a = v;
            }
            a && !(a instanceof Error) && (M(u), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), M(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, M(u), R("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Ge = Array.isArray;
    function z(e) {
      return Ge(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (Ke(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), ve(e);
    }
    var F = O.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ge, K;
    K = {};
    function Xe(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = S(F.current.type);
        K[t] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(F.current.type), e.ref), K[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          he || (he = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          ge || (ge = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, u, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, u) {
      {
        var s, o = {}, a = null, E = null;
        t !== void 0 && (pe(t), a = "" + t), Ze(r) && (pe(r.key), a = "" + r.key), Xe(r) && (E = r.ref, Qe(r, u));
        for (s in r)
          U.call(r, s) && !He.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (s in v)
            o[s] === void 0 && (o[s] = v[s]);
        }
        if (a || E) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(o, p), E && rr(o, p);
        }
        return tr(e, a, E, u, n, F.current, o);
      }
    }
    var H = O.ReactCurrentOwner, me = O.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function Re() {
      {
        if (H.current) {
          var e = S(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function or(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + S(e._owner.type) + "."), j(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
      }
    }
    function be(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && ye(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = De(e);
          if (typeof u == "function" && u !== e.entries)
            for (var s = u.call(e), o; !(o = s.next()).done; )
              Z(o.value) && ye(o.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === d))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = S(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var u = S(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            j(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function _e(e, r, t, n, u, s) {
      {
        var o = Ye(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = ar(u);
          E ? a += E : a += Re();
          var v;
          e === null ? v = "null" : z(e) ? v = "array" : e !== void 0 && e.$$typeof === l ? (v = "<" + (S(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, a);
        }
        var p = nr(e, r, t, u, s);
        if (p == null)
          return p;
        if (o) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (z(y)) {
                for (var k = 0; k < y.length; k++)
                  be(y[k], e);
                Object.freeze && Object.freeze(y);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              be(y, e);
        }
        return e === h ? ur(p) : ir(p), p;
      }
    }
    function sr(e, r, t) {
      return _e(e, r, t, !0);
    }
    function lr(e, r, t) {
      return _e(e, r, t, !1);
    }
    var cr = lr, fr = sr;
    I.Fragment = h, I.jsx = cr, I.jsxs = fr;
  }()), I;
}
(function(i) {
  process.env.NODE_ENV === "production" ? i.exports = mr() : i.exports = Rr();
})(gr);
const Er = B.Fragment, W = B.jsx, yr = (i, l) => i.find((g) => g.path === l) || null;
function br(i) {
  let l = [];
  const g = (f) => (l.push(f), () => {
    l = f.filter((c) => c !== f);
  });
  let h = {
    pathname: "/",
    routeDetail: null,
    loader: null,
    navigationInProgress: !1
  };
  const b = () => {
    let f = window.navigation.entries(), c = f.length > 0 ? new Set(f.map((d) => {
      var C;
      return (C = new URL(d == null ? void 0 : d.url)) == null ? void 0 : C.pathname;
    })) : [];
    return Array.from(c);
  }, w = (f) => {
    h = {
      ...h,
      ...f
    }, l.forEach((c) => c(h));
  }, T = async (f) => {
    const { pathname: c } = new URL(f), d = yr(i, c);
    w({
      pathname: c,
      routeDetail: d,
      navigationInProgress: !1
    });
  }, _ = (f) => {
    f.intercept({
      async handler() {
        await T(f.destination.url);
      }
    });
  };
  return window.navigation.addEventListener("navigate", _), T(window.location.href), {
    get state() {
      return h;
    },
    get visited() {
      return b();
    },
    navigate: (f, c, d) => {
      window.navigation.navigate(f, {
        history: d != null && d.replaceMode ? "replace" : "push",
        state: c,
        info: d == null ? void 0 : d.info
      });
    },
    subscribe: g
  };
}
const _r = ({
  router: i
}) => {
  var g;
  const l = dr(
    i == null ? void 0 : i.subscribe,
    () => i == null ? void 0 : i.state
  );
  return /* @__PURE__ */ W(
    Oe.Provider,
    {
      value: { state: l, visited: i.visited },
      children: /* @__PURE__ */ W("div", { children: (g = l == null ? void 0 : l.routeDetail) == null ? void 0 : g.children })
    }
  );
};
function Sr({ children: i }) {
  const [l, g] = Se([]);
  xe(() => {
    let b = [];
    $.Children.forEach(i, (w) => {
      b.push(w.props);
    }), g(b);
  }, [i]);
  const h = br(l);
  return /* @__PURE__ */ W(je.Provider, { value: { navigate: h == null ? void 0 : h.navigate }, children: l.length > 0 && /* @__PURE__ */ W(_r, { router: h }) });
}
const xr = ({ children: i, path: l }) => {
  const g = vr();
  return /* @__PURE__ */ W(Er, { children: g.pathname === l ? i : null });
};
export {
  xr as Route,
  Sr as RouterProvider,
  vr as useLocation,
  Tr as useNavigate,
  Cr as useRouterState
};
