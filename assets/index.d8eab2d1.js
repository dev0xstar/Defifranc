function O1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var f6 =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Cp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var x = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ti = Symbol.for("react.element"),
  P1 = Symbol.for("react.portal"),
  T1 = Symbol.for("react.fragment"),
  R1 = Symbol.for("react.strict_mode"),
  N1 = Symbol.for("react.profiler"),
  b1 = Symbol.for("react.provider"),
  L1 = Symbol.for("react.context"),
  A1 = Symbol.for("react.forward_ref"),
  I1 = Symbol.for("react.suspense"),
  $1 = Symbol.for("react.memo"),
  M1 = Symbol.for("react.lazy"),
  Jc = Symbol.iterator;
function z1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Jc && e[Jc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _p = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Op = Object.assign,
  Pp = {};
function Fr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Pp),
    (this.updater = n || _p);
}
Fr.prototype.isReactComponent = {};
Fr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Tp() {}
Tp.prototype = Fr.prototype;
function Ru(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Pp),
    (this.updater = n || _p);
}
var Nu = (Ru.prototype = new Tp());
Nu.constructor = Ru;
Op(Nu, Fr.prototype);
Nu.isPureReactComponent = !0;
var ef = Array.isArray,
  Rp = Object.prototype.hasOwnProperty,
  bu = { current: null },
  Np = { key: !0, ref: !0, __self: !0, __source: !0 };
function bp(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Rp.call(t, r) && !Np.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: ti,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: bu.current,
  };
}
function D1(e, t) {
  return {
    $$typeof: ti,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Lu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ti;
}
function F1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var tf = /\/+/g;
function _l(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? F1("" + e.key)
    : t.toString(36);
}
function Bi(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ti:
          case P1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + _l(s, 0) : r),
      ef(o)
        ? ((n = ""),
          e != null && (n = e.replace(tf, "$&/") + "/"),
          Bi(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Lu(o) &&
            (o = D1(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(tf, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), ef(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + _l(i, l);
      s += Bi(i, t, n, a, o);
    }
  else if (((a = z1(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + _l(i, l++)), (s += Bi(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function mi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Bi(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function j1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ie = { current: null },
  Hi = { transition: null },
  U1 = {
    ReactCurrentDispatcher: Ie,
    ReactCurrentBatchConfig: Hi,
    ReactCurrentOwner: bu,
  };
F.Children = {
  map: mi,
  forEach: function (e, t, n) {
    mi(
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
      mi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      mi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Lu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = Fr;
F.Fragment = T1;
F.Profiler = N1;
F.PureComponent = Ru;
F.StrictMode = R1;
F.Suspense = I1;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U1;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Op({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = bu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Rp.call(t, a) &&
        !Np.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ti, type: e.type, key: o, ref: i, props: r, _owner: s };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: L1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: b1, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = bp;
F.createFactory = function (e) {
  var t = bp.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: A1, render: e };
};
F.isValidElement = Lu;
F.lazy = function (e) {
  return { $$typeof: M1, _payload: { _status: -1, _result: e }, _init: j1 };
};
F.memo = function (e, t) {
  return { $$typeof: $1, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Hi.transition;
  Hi.transition = {};
  try {
    e();
  } finally {
    Hi.transition = t;
  }
};
F.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function (e, t) {
  return Ie.current.useCallback(e, t);
};
F.useContext = function (e) {
  return Ie.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return Ie.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return Ie.current.useEffect(e, t);
};
F.useId = function () {
  return Ie.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return Ie.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return Ie.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return Ie.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return Ie.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return Ie.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return Ie.current.useRef(e);
};
F.useState = function (e) {
  return Ie.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return Ie.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return Ie.current.useTransition();
};
F.version = "18.2.0";
(function (e) {
  e.exports = F;
})(x);
const ae = Cp(x.exports),
  No = O1({ __proto__: null, default: ae }, [x.exports]);
var ha = {},
  Us = { exports: {} },
  qe = {},
  Lp = { exports: {} },
  Ap = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, A) {
    var M = P.length;
    P.push(A);
    e: for (; 0 < M; ) {
      var X = (M - 1) >>> 1,
        le = P[X];
      if (0 < o(le, A)) (P[X] = A), (P[M] = le), (M = X);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var A = P[0],
      M = P.pop();
    if (M !== A) {
      P[0] = M;
      e: for (var X = 0, le = P.length, Xt = le >>> 1; X < Xt; ) {
        var st = 2 * (X + 1) - 1,
          vt = P[st],
          z = st + 1,
          ee = P[z];
        if (0 > o(vt, M))
          z < le && 0 > o(ee, vt)
            ? ((P[X] = ee), (P[z] = M), (X = z))
            : ((P[X] = vt), (P[st] = M), (X = st));
        else if (z < le && 0 > o(ee, M)) (P[X] = ee), (P[z] = M), (X = z);
        else break e;
      }
    }
    return A;
  }
  function o(P, A) {
    var M = P.sortIndex - A.sortIndex;
    return M !== 0 ? M : P.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    m = !1,
    v = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(P) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= P)
        r(u), (A.sortIndex = A.expirationTime), t(a, A);
      else break;
      A = n(u);
    }
  }
  function E(P) {
    if (((v = !1), y(P), !m))
      if (n(a) !== null) (m = !0), Ot(k);
      else {
        var A = n(u);
        A !== null && Re(E, A.startTime - P);
      }
  }
  function k(P, A) {
    (m = !1), v && ((v = !1), h(R), (R = -1)), (g = !0);
    var M = d;
    try {
      for (
        y(A), f = n(a);
        f !== null && (!(f.expirationTime > A) || (P && !j()));

      ) {
        var X = f.callback;
        if (typeof X == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var le = X(f.expirationTime <= A);
          (A = e.unstable_now()),
            typeof le == "function" ? (f.callback = le) : f === n(a) && r(a),
            y(A);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Xt = !0;
      else {
        var st = n(u);
        st !== null && Re(E, st.startTime - A), (Xt = !1);
      }
      return Xt;
    } finally {
      (f = null), (d = M), (g = !1);
    }
  }
  var _ = !1,
    C = null,
    R = -1,
    $ = 5,
    N = -1;
  function j() {
    return !(e.unstable_now() - N < $);
  }
  function J() {
    if (C !== null) {
      var P = e.unstable_now();
      N = P;
      var A = !0;
      try {
        A = C(!0, P);
      } finally {
        A ? se() : ((_ = !1), (C = null));
      }
    } else _ = !1;
  }
  var se;
  if (typeof p == "function")
    se = function () {
      p(J);
    };
  else if (typeof MessageChannel < "u") {
    var xe = new MessageChannel(),
      Me = xe.port2;
    (xe.port1.onmessage = J),
      (se = function () {
        Me.postMessage(null);
      });
  } else
    se = function () {
      S(J, 0);
    };
  function Ot(P) {
    (C = P), _ || ((_ = !0), se());
  }
  function Re(P, A) {
    R = S(function () {
      P(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || g || ((m = !0), Ot(k));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : ($ = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (P) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = d;
      }
      var M = d;
      d = A;
      try {
        return P();
      } finally {
        d = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, A) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var M = d;
      d = P;
      try {
        return A();
      } finally {
        d = M;
      }
    }),
    (e.unstable_scheduleCallback = function (P, A, M) {
      var X = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? X + M : X))
          : (M = X),
        P)
      ) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return (
        (le = M + le),
        (P = {
          id: c++,
          callback: A,
          priorityLevel: P,
          startTime: M,
          expirationTime: le,
          sortIndex: -1,
        }),
        M > X
          ? ((P.sortIndex = M),
            t(u, P),
            n(a) === null &&
              P === n(u) &&
              (v ? (h(R), (R = -1)) : (v = !0), Re(E, M - X)))
          : ((P.sortIndex = le), t(a, P), m || g || ((m = !0), Ot(k))),
        P
      );
    }),
    (e.unstable_shouldYield = j),
    (e.unstable_wrapCallback = function (P) {
      var A = d;
      return function () {
        var M = d;
        d = A;
        try {
          return P.apply(this, arguments);
        } finally {
          d = M;
        }
      };
    });
})(Ap);
(function (e) {
  e.exports = Ap;
})(Lp);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ip = x.exports,
  Qe = Lp.exports;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
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
var $p = new Set(),
  bo = {};
function Zn(e, t) {
  Rr(e, t), Rr(e + "Capture", t);
}
function Rr(e, t) {
  for (bo[e] = t, e = 0; e < t.length; e++) $p.add(t[e]);
}
var Dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ma = Object.prototype.hasOwnProperty,
  B1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  nf = {},
  rf = {};
function H1(e) {
  return ma.call(rf, e)
    ? !0
    : ma.call(nf, e)
    ? !1
    : B1.test(e)
    ? (rf[e] = !0)
    : ((nf[e] = !0), !1);
}
function W1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function V1(e, t, n, r) {
  if (t === null || typeof t > "u" || W1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function $e(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ke[e] = new $e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ke[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ke[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ke[e] = new $e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ke[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ke[e] = new $e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ke[e] = new $e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ke[e] = new $e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ke[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Au = /[\-:]([a-z])/g;
function Iu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Au, Iu);
    ke[t] = new $e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Au, Iu);
    ke[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Au, Iu);
  ke[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ke[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new $e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ke[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $u(e, t, n, r) {
  var o = ke.hasOwnProperty(t) ? ke[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (V1(t, n, o, r) && (n = null),
    r || o === null
      ? H1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Bt = Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  vi = Symbol.for("react.element"),
  cr = Symbol.for("react.portal"),
  fr = Symbol.for("react.fragment"),
  Mu = Symbol.for("react.strict_mode"),
  va = Symbol.for("react.profiler"),
  Mp = Symbol.for("react.provider"),
  zp = Symbol.for("react.context"),
  zu = Symbol.for("react.forward_ref"),
  ga = Symbol.for("react.suspense"),
  ya = Symbol.for("react.suspense_list"),
  Du = Symbol.for("react.memo"),
  Gt = Symbol.for("react.lazy"),
  Dp = Symbol.for("react.offscreen"),
  of = Symbol.iterator;
function Xr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (of && e[of]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ie = Object.assign,
  Ol;
function lo(e) {
  if (Ol === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ol = (t && t[1]) || "";
    }
  return (
    `
` +
    Ol +
    e
  );
}
var Pl = !1;
function Tl(e, t) {
  if (!e || Pl) return "";
  Pl = !0;
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
        typeof Reflect == "object" && Reflect.construct)
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
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Pl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? lo(e) : "";
}
function Y1(e) {
  switch (e.tag) {
    case 5:
      return lo(e.type);
    case 16:
      return lo("Lazy");
    case 13:
      return lo("Suspense");
    case 19:
      return lo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Tl(e.type, !1)), e;
    case 11:
      return (e = Tl(e.type.render, !1)), e;
    case 1:
      return (e = Tl(e.type, !0)), e;
    default:
      return "";
  }
}
function wa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case fr:
      return "Fragment";
    case cr:
      return "Portal";
    case va:
      return "Profiler";
    case Mu:
      return "StrictMode";
    case ga:
      return "Suspense";
    case ya:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case zp:
        return (e.displayName || "Context") + ".Consumer";
      case Mp:
        return (e._context.displayName || "Context") + ".Provider";
      case zu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Du:
        return (
          (t = e.displayName || null), t !== null ? t : wa(e.type) || "Memo"
        );
      case Gt:
        (t = e._payload), (e = e._init);
        try {
          return wa(e(t));
        } catch {}
    }
  return null;
}
function X1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return wa(t);
    case 8:
      return t === Mu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Sn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Fp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function K1(e) {
  var t = Fp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function gi(e) {
  e._valueTracker || (e._valueTracker = K1(e));
}
function jp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Fp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function us(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function xa(e, t) {
  var n = t.checked;
  return ie({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function sf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Sn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Up(e, t) {
  (t = t.checked), t != null && $u(e, "checked", t, !1);
}
function Sa(e, t) {
  Up(e, t);
  var n = Sn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ea(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ea(e, t.type, Sn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function lf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ea(e, t, n) {
  (t !== "number" || us(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ao = Array.isArray;
function Er(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Sn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ka(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return ie({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function af(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (ao(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Sn(n) };
}
function Bp(e, t) {
  var n = Sn(t.value),
    r = Sn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function uf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Hp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ca(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Hp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var yi,
  Wp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        yi = yi || document.createElement("div"),
          yi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = yi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Lo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var go = {
    animationIterationCount: !0,
    aspectRatio: !0,
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
  Q1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(go).forEach(function (e) {
  Q1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (go[t] = go[e]);
  });
});
function Vp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (go.hasOwnProperty(e) && go[e])
    ? ("" + t).trim()
    : t + "px";
}
function Yp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Vp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var q1 = ie(
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
function _a(e, t) {
  if (t) {
    if (q1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function Oa(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Pa = null;
function Fu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ta = null,
  kr = null,
  Cr = null;
function cf(e) {
  if ((e = oi(e))) {
    if (typeof Ta != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = Ys(t)), Ta(e.stateNode, e.type, t));
  }
}
function Xp(e) {
  kr ? (Cr ? Cr.push(e) : (Cr = [e])) : (kr = e);
}
function Kp() {
  if (kr) {
    var e = kr,
      t = Cr;
    if (((Cr = kr = null), cf(e), t)) for (e = 0; e < t.length; e++) cf(t[e]);
  }
}
function Qp(e, t) {
  return e(t);
}
function qp() {}
var Rl = !1;
function Zp(e, t, n) {
  if (Rl) return e(t, n);
  Rl = !0;
  try {
    return Qp(e, t, n);
  } finally {
    (Rl = !1), (kr !== null || Cr !== null) && (qp(), Kp());
  }
}
function Ao(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ys(n);
  if (r === null) return null;
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
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var Ra = !1;
if (Dt)
  try {
    var Kr = {};
    Object.defineProperty(Kr, "passive", {
      get: function () {
        Ra = !0;
      },
    }),
      window.addEventListener("test", Kr, Kr),
      window.removeEventListener("test", Kr, Kr);
  } catch {
    Ra = !1;
  }
function Z1(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var yo = !1,
  cs = null,
  fs = !1,
  Na = null,
  G1 = {
    onError: function (e) {
      (yo = !0), (cs = e);
    },
  };
function J1(e, t, n, r, o, i, s, l, a) {
  (yo = !1), (cs = null), Z1.apply(G1, arguments);
}
function ev(e, t, n, r, o, i, s, l, a) {
  if ((J1.apply(this, arguments), yo)) {
    if (yo) {
      var u = cs;
      (yo = !1), (cs = null);
    } else throw Error(T(198));
    fs || ((fs = !0), (Na = u));
  }
}
function Gn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Gp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ff(e) {
  if (Gn(e) !== e) throw Error(T(188));
}
function tv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Gn(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return ff(o), e;
        if (i === r) return ff(o), t;
        i = i.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function Jp(e) {
  return (e = tv(e)), e !== null ? eh(e) : null;
}
function eh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = eh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var th = Qe.unstable_scheduleCallback,
  df = Qe.unstable_cancelCallback,
  nv = Qe.unstable_shouldYield,
  rv = Qe.unstable_requestPaint,
  ce = Qe.unstable_now,
  ov = Qe.unstable_getCurrentPriorityLevel,
  ju = Qe.unstable_ImmediatePriority,
  nh = Qe.unstable_UserBlockingPriority,
  ds = Qe.unstable_NormalPriority,
  iv = Qe.unstable_LowPriority,
  rh = Qe.unstable_IdlePriority,
  Bs = null,
  kt = null;
function sv(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function")
    try {
      kt.onCommitFiberRoot(Bs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var dt = Math.clz32 ? Math.clz32 : uv,
  lv = Math.log,
  av = Math.LN2;
function uv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((lv(e) / av) | 0)) | 0;
}
var wi = 64,
  xi = 4194304;
function uo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ps(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = uo(l)) : ((i &= s), i !== 0 && (r = uo(i)));
  } else (s = n & ~o), s !== 0 ? (r = uo(s)) : i !== 0 && (r = uo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & o) === 0 &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - dt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function cv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function fv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - dt(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? ((l & n) === 0 || (l & r) !== 0) && (o[s] = cv(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function ba(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function oh() {
  var e = wi;
  return (wi <<= 1), (wi & 4194240) === 0 && (wi = 64), e;
}
function Nl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ni(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - dt(t)),
    (e[t] = n);
}
function dv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - dt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Uu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - dt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var V = 0;
function ih(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var sh,
  Bu,
  lh,
  ah,
  uh,
  La = !1,
  Si = [],
  un = null,
  cn = null,
  fn = null,
  Io = new Map(),
  $o = new Map(),
  nn = [],
  pv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function pf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      un = null;
      break;
    case "dragenter":
    case "dragleave":
      cn = null;
      break;
    case "mouseover":
    case "mouseout":
      fn = null;
      break;
    case "pointerover":
    case "pointerout":
      Io.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $o.delete(t.pointerId);
  }
}
function Qr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = oi(t)), t !== null && Bu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function hv(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (un = Qr(un, e, t, n, r, o)), !0;
    case "dragenter":
      return (cn = Qr(cn, e, t, n, r, o)), !0;
    case "mouseover":
      return (fn = Qr(fn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Io.set(i, Qr(Io.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), $o.set(i, Qr($o.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function ch(e) {
  var t = $n(e.target);
  if (t !== null) {
    var n = Gn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Gp(n)), t !== null)) {
          (e.blockedOn = t),
            uh(e.priority, function () {
              lh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Wi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Aa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Pa = r), n.target.dispatchEvent(r), (Pa = null);
    } else return (t = oi(n)), t !== null && Bu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function hf(e, t, n) {
  Wi(e) && n.delete(t);
}
function mv() {
  (La = !1),
    un !== null && Wi(un) && (un = null),
    cn !== null && Wi(cn) && (cn = null),
    fn !== null && Wi(fn) && (fn = null),
    Io.forEach(hf),
    $o.forEach(hf);
}
function qr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    La ||
      ((La = !0),
      Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, mv)));
}
function Mo(e) {
  function t(o) {
    return qr(o, e);
  }
  if (0 < Si.length) {
    qr(Si[0], e);
    for (var n = 1; n < Si.length; n++) {
      var r = Si[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    un !== null && qr(un, e),
      cn !== null && qr(cn, e),
      fn !== null && qr(fn, e),
      Io.forEach(t),
      $o.forEach(t),
      n = 0;
    n < nn.length;
    n++
  )
    (r = nn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nn.length && ((n = nn[0]), n.blockedOn === null); )
    ch(n), n.blockedOn === null && nn.shift();
}
var _r = Bt.ReactCurrentBatchConfig,
  hs = !0;
function vv(e, t, n, r) {
  var o = V,
    i = _r.transition;
  _r.transition = null;
  try {
    (V = 1), Hu(e, t, n, r);
  } finally {
    (V = o), (_r.transition = i);
  }
}
function gv(e, t, n, r) {
  var o = V,
    i = _r.transition;
  _r.transition = null;
  try {
    (V = 4), Hu(e, t, n, r);
  } finally {
    (V = o), (_r.transition = i);
  }
}
function Hu(e, t, n, r) {
  if (hs) {
    var o = Aa(e, t, n, r);
    if (o === null) jl(e, t, r, ms, n), pf(e, r);
    else if (hv(o, e, t, n, r)) r.stopPropagation();
    else if ((pf(e, r), t & 4 && -1 < pv.indexOf(e))) {
      for (; o !== null; ) {
        var i = oi(o);
        if (
          (i !== null && sh(i),
          (i = Aa(e, t, n, r)),
          i === null && jl(e, t, r, ms, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else jl(e, t, r, null, n);
  }
}
var ms = null;
function Aa(e, t, n, r) {
  if (((ms = null), (e = Fu(r)), (e = $n(e)), e !== null))
    if (((t = Gn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Gp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ms = e), null;
}
function fh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ov()) {
        case ju:
          return 1;
        case nh:
          return 4;
        case ds:
        case iv:
          return 16;
        case rh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var sn = null,
  Wu = null,
  Vi = null;
function dh() {
  if (Vi) return Vi;
  var e,
    t = Wu,
    n = t.length,
    r,
    o = "value" in sn ? sn.value : sn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Vi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Yi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ei() {
  return !0;
}
function mf() {
  return !1;
}
function Ze(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ei
        : mf),
      (this.isPropagationStopped = mf),
      this
    );
  }
  return (
    ie(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ei));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ei));
      },
      persist: function () {},
      isPersistent: Ei,
    }),
    t
  );
}
var jr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Vu = Ze(jr),
  ri = ie({}, jr, { view: 0, detail: 0 }),
  yv = Ze(ri),
  bl,
  Ll,
  Zr,
  Hs = ie({}, ri, {
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
    getModifierState: Yu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Zr &&
            (Zr && e.type === "mousemove"
              ? ((bl = e.screenX - Zr.screenX), (Ll = e.screenY - Zr.screenY))
              : (Ll = bl = 0),
            (Zr = e)),
          bl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ll;
    },
  }),
  vf = Ze(Hs),
  wv = ie({}, Hs, { dataTransfer: 0 }),
  xv = Ze(wv),
  Sv = ie({}, ri, { relatedTarget: 0 }),
  Al = Ze(Sv),
  Ev = ie({}, jr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kv = Ze(Ev),
  Cv = ie({}, jr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  _v = Ze(Cv),
  Ov = ie({}, jr, { data: 0 }),
  gf = Ze(Ov),
  Pv = {
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
  Tv = {
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
  Rv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Nv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Rv[e]) ? !!t[e] : !1;
}
function Yu() {
  return Nv;
}
var bv = ie({}, ri, {
    key: function (e) {
      if (e.key) {
        var t = Pv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Yi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Tv[e.keyCode] || "Unidentified"
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
    getModifierState: Yu,
    charCode: function (e) {
      return e.type === "keypress" ? Yi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Yi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Lv = Ze(bv),
  Av = ie({}, Hs, {
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
  }),
  yf = Ze(Av),
  Iv = ie({}, ri, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Yu,
  }),
  $v = Ze(Iv),
  Mv = ie({}, jr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zv = Ze(Mv),
  Dv = ie({}, Hs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  }),
  Fv = Ze(Dv),
  jv = [9, 13, 27, 32],
  Xu = Dt && "CompositionEvent" in window,
  wo = null;
Dt && "documentMode" in document && (wo = document.documentMode);
var Uv = Dt && "TextEvent" in window && !wo,
  ph = Dt && (!Xu || (wo && 8 < wo && 11 >= wo)),
  wf = String.fromCharCode(32),
  xf = !1;
function hh(e, t) {
  switch (e) {
    case "keyup":
      return jv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function mh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var dr = !1;
function Bv(e, t) {
  switch (e) {
    case "compositionend":
      return mh(t);
    case "keypress":
      return t.which !== 32 ? null : ((xf = !0), wf);
    case "textInput":
      return (e = t.data), e === wf && xf ? null : e;
    default:
      return null;
  }
}
function Hv(e, t) {
  if (dr)
    return e === "compositionend" || (!Xu && hh(e, t))
      ? ((e = dh()), (Vi = Wu = sn = null), (dr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ph && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Wv = {
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
function Sf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Wv[e.type] : t === "textarea";
}
function vh(e, t, n, r) {
  Xp(r),
    (t = vs(t, "onChange")),
    0 < t.length &&
      ((n = new Vu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var xo = null,
  zo = null;
function Vv(e) {
  Ph(e, 0);
}
function Ws(e) {
  var t = mr(e);
  if (jp(t)) return e;
}
function Yv(e, t) {
  if (e === "change") return t;
}
var gh = !1;
if (Dt) {
  var Il;
  if (Dt) {
    var $l = "oninput" in document;
    if (!$l) {
      var Ef = document.createElement("div");
      Ef.setAttribute("oninput", "return;"),
        ($l = typeof Ef.oninput == "function");
    }
    Il = $l;
  } else Il = !1;
  gh = Il && (!document.documentMode || 9 < document.documentMode);
}
function kf() {
  xo && (xo.detachEvent("onpropertychange", yh), (zo = xo = null));
}
function yh(e) {
  if (e.propertyName === "value" && Ws(zo)) {
    var t = [];
    vh(t, zo, e, Fu(e)), Zp(Vv, t);
  }
}
function Xv(e, t, n) {
  e === "focusin"
    ? (kf(), (xo = t), (zo = n), xo.attachEvent("onpropertychange", yh))
    : e === "focusout" && kf();
}
function Kv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ws(zo);
}
function Qv(e, t) {
  if (e === "click") return Ws(t);
}
function qv(e, t) {
  if (e === "input" || e === "change") return Ws(t);
}
function Zv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ht = typeof Object.is == "function" ? Object.is : Zv;
function Do(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ma.call(t, o) || !ht(e[o], t[o])) return !1;
  }
  return !0;
}
function Cf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _f(e, t) {
  var n = Cf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Cf(n);
  }
}
function wh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? wh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function xh() {
  for (var e = window, t = us(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = us(e.document);
  }
  return t;
}
function Ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Gv(e) {
  var t = xh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    wh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ku(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = _f(n, i));
        var s = _f(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Jv = Dt && "documentMode" in document && 11 >= document.documentMode,
  pr = null,
  Ia = null,
  So = null,
  $a = !1;
function Of(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $a ||
    pr == null ||
    pr !== us(r) ||
    ((r = pr),
    "selectionStart" in r && Ku(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (So && Do(So, r)) ||
      ((So = r),
      (r = vs(Ia, "onSelect")),
      0 < r.length &&
        ((t = new Vu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = pr))));
}
function ki(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var hr = {
    animationend: ki("Animation", "AnimationEnd"),
    animationiteration: ki("Animation", "AnimationIteration"),
    animationstart: ki("Animation", "AnimationStart"),
    transitionend: ki("Transition", "TransitionEnd"),
  },
  Ml = {},
  Sh = {};
Dt &&
  ((Sh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete hr.animationend.animation,
    delete hr.animationiteration.animation,
    delete hr.animationstart.animation),
  "TransitionEvent" in window || delete hr.transitionend.transition);
function Vs(e) {
  if (Ml[e]) return Ml[e];
  if (!hr[e]) return e;
  var t = hr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Sh) return (Ml[e] = t[n]);
  return e;
}
var Eh = Vs("animationend"),
  kh = Vs("animationiteration"),
  Ch = Vs("animationstart"),
  _h = Vs("transitionend"),
  Oh = new Map(),
  Pf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function kn(e, t) {
  Oh.set(e, t), Zn(t, [e]);
}
for (var zl = 0; zl < Pf.length; zl++) {
  var Dl = Pf[zl],
    eg = Dl.toLowerCase(),
    tg = Dl[0].toUpperCase() + Dl.slice(1);
  kn(eg, "on" + tg);
}
kn(Eh, "onAnimationEnd");
kn(kh, "onAnimationIteration");
kn(Ch, "onAnimationStart");
kn("dblclick", "onDoubleClick");
kn("focusin", "onFocus");
kn("focusout", "onBlur");
kn(_h, "onTransitionEnd");
Rr("onMouseEnter", ["mouseout", "mouseover"]);
Rr("onMouseLeave", ["mouseout", "mouseover"]);
Rr("onPointerEnter", ["pointerout", "pointerover"]);
Rr("onPointerLeave", ["pointerout", "pointerover"]);
Zn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Zn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Zn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Zn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var co =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ng = new Set("cancel close invalid load scroll toggle".split(" ").concat(co));
function Tf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ev(r, t, void 0, e), (e.currentTarget = null);
}
function Ph(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          Tf(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Tf(o, l, u), (i = a);
        }
    }
  }
  if (fs) throw ((e = Na), (fs = !1), (Na = null), e);
}
function Q(e, t) {
  var n = t[ja];
  n === void 0 && (n = t[ja] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Th(t, e, 2, !1), n.add(r));
}
function Fl(e, t, n) {
  var r = 0;
  t && (r |= 4), Th(n, e, r, t);
}
var Ci = "_reactListening" + Math.random().toString(36).slice(2);
function Fo(e) {
  if (!e[Ci]) {
    (e[Ci] = !0),
      $p.forEach(function (n) {
        n !== "selectionchange" && (ng.has(n) || Fl(n, !1, e), Fl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ci] || ((t[Ci] = !0), Fl("selectionchange", !1, t));
  }
}
function Th(e, t, n, r) {
  switch (fh(t)) {
    case 1:
      var o = vv;
      break;
    case 4:
      o = gv;
      break;
    default:
      o = Hu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ra ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function jl(e, t, n, r, o) {
  var i = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = $n(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Zp(function () {
    var u = i,
      c = Fu(n),
      f = [];
    e: {
      var d = Oh.get(e);
      if (d !== void 0) {
        var g = Vu,
          m = e;
        switch (e) {
          case "keypress":
            if (Yi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Lv;
            break;
          case "focusin":
            (m = "focus"), (g = Al);
            break;
          case "focusout":
            (m = "blur"), (g = Al);
            break;
          case "beforeblur":
          case "afterblur":
            g = Al;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = vf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = xv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = $v;
            break;
          case Eh:
          case kh:
          case Ch:
            g = kv;
            break;
          case _h:
            g = zv;
            break;
          case "scroll":
            g = yv;
            break;
          case "wheel":
            g = Fv;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = _v;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = yf;
        }
        var v = (t & 4) !== 0,
          S = !v && e === "scroll",
          h = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var p = u, y; p !== null; ) {
          y = p;
          var E = y.stateNode;
          if (
            (y.tag === 5 &&
              E !== null &&
              ((y = E),
              h !== null && ((E = Ao(p, h)), E != null && v.push(jo(p, E, y)))),
            S)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((d = new g(d, m, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Pa &&
            (m = n.relatedTarget || n.fromElement) &&
            ($n(m) || m[Ft]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          g
            ? ((m = n.relatedTarget || n.toElement),
              (g = u),
              (m = m ? $n(m) : null),
              m !== null &&
                ((S = Gn(m)), m !== S || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((g = null), (m = u)),
          g !== m)
        ) {
          if (
            ((v = vf),
            (E = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = yf),
              (E = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (S = g == null ? d : mr(g)),
            (y = m == null ? d : mr(m)),
            (d = new v(E, p + "leave", g, n, c)),
            (d.target = S),
            (d.relatedTarget = y),
            (E = null),
            $n(c) === u &&
              ((v = new v(h, p + "enter", m, n, c)),
              (v.target = y),
              (v.relatedTarget = S),
              (E = v)),
            (S = E),
            g && m)
          )
            t: {
              for (v = g, h = m, p = 0, y = v; y; y = nr(y)) p++;
              for (y = 0, E = h; E; E = nr(E)) y++;
              for (; 0 < p - y; ) (v = nr(v)), p--;
              for (; 0 < y - p; ) (h = nr(h)), y--;
              for (; p--; ) {
                if (v === h || (h !== null && v === h.alternate)) break t;
                (v = nr(v)), (h = nr(h));
              }
              v = null;
            }
          else v = null;
          g !== null && Rf(f, d, g, v, !1),
            m !== null && S !== null && Rf(f, S, m, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? mr(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var k = Yv;
        else if (Sf(d))
          if (gh) k = qv;
          else {
            k = Kv;
            var _ = Xv;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (k = Qv);
        if (k && (k = k(e, u))) {
          vh(f, k, n, c);
          break e;
        }
        _ && _(e, d, u),
          e === "focusout" &&
            (_ = d._wrapperState) &&
            _.controlled &&
            d.type === "number" &&
            Ea(d, "number", d.value);
      }
      switch (((_ = u ? mr(u) : window), e)) {
        case "focusin":
          (Sf(_) || _.contentEditable === "true") &&
            ((pr = _), (Ia = u), (So = null));
          break;
        case "focusout":
          So = Ia = pr = null;
          break;
        case "mousedown":
          $a = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ($a = !1), Of(f, n, c);
          break;
        case "selectionchange":
          if (Jv) break;
        case "keydown":
        case "keyup":
          Of(f, n, c);
      }
      var C;
      if (Xu)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        dr
          ? hh(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (ph &&
          n.locale !== "ko" &&
          (dr || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && dr && (C = dh())
            : ((sn = c),
              (Wu = "value" in sn ? sn.value : sn.textContent),
              (dr = !0))),
        (_ = vs(u, R)),
        0 < _.length &&
          ((R = new gf(R, e, null, n, c)),
          f.push({ event: R, listeners: _ }),
          C ? (R.data = C) : ((C = mh(n)), C !== null && (R.data = C)))),
        (C = Uv ? Bv(e, n) : Hv(e, n)) &&
          ((u = vs(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new gf("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    Ph(f, t);
  });
}
function jo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function vs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ao(e, n)),
      i != null && r.unshift(jo(e, i, o)),
      (i = Ao(e, t)),
      i != null && r.push(jo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function nr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Rf(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = Ao(n, i)), a != null && s.unshift(jo(n, a, l)))
        : o || ((a = Ao(n, i)), a != null && s.push(jo(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var rg = /\r\n?/g,
  og = /\u0000|\uFFFD/g;
function Nf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      rg,
      `
`
    )
    .replace(og, "");
}
function _i(e, t, n) {
  if (((t = Nf(t)), Nf(e) !== t && n)) throw Error(T(425));
}
function gs() {}
var Ma = null,
  za = null;
function Da(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Fa = typeof setTimeout == "function" ? setTimeout : void 0,
  ig = typeof clearTimeout == "function" ? clearTimeout : void 0,
  bf = typeof Promise == "function" ? Promise : void 0,
  sg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof bf < "u"
      ? function (e) {
          return bf.resolve(null).then(e).catch(lg);
        }
      : Fa;
function lg(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ul(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Mo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Mo(t);
}
function dn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Lf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ur = Math.random().toString(36).slice(2),
  Et = "__reactFiber$" + Ur,
  Uo = "__reactProps$" + Ur,
  Ft = "__reactContainer$" + Ur,
  ja = "__reactEvents$" + Ur,
  ag = "__reactListeners$" + Ur,
  ug = "__reactHandles$" + Ur;
function $n(e) {
  var t = e[Et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ft] || n[Et])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Lf(e); e !== null; ) {
          if ((n = e[Et])) return n;
          e = Lf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function oi(e) {
  return (
    (e = e[Et] || e[Ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function mr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function Ys(e) {
  return e[Uo] || null;
}
var Ua = [],
  vr = -1;
function Cn(e) {
  return { current: e };
}
function G(e) {
  0 > vr || ((e.current = Ua[vr]), (Ua[vr] = null), vr--);
}
function K(e, t) {
  vr++, (Ua[vr] = e.current), (e.current = t);
}
var En = {},
  Te = Cn(En),
  je = Cn(!1),
  Vn = En;
function Nr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return En;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ue(e) {
  return (e = e.childContextTypes), e != null;
}
function ys() {
  G(je), G(Te);
}
function Af(e, t, n) {
  if (Te.current !== En) throw Error(T(168));
  K(Te, t), K(je, n);
}
function Rh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(T(108, X1(e) || "Unknown", o));
  return ie({}, n, r);
}
function ws(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || En),
    (Vn = Te.current),
    K(Te, e),
    K(je, je.current),
    !0
  );
}
function If(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = Rh(e, t, Vn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      G(je),
      G(Te),
      K(Te, e))
    : G(je),
    K(je, n);
}
var Lt = null,
  Xs = !1,
  Bl = !1;
function Nh(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
function cg(e) {
  (Xs = !0), Nh(e);
}
function _n() {
  if (!Bl && Lt !== null) {
    Bl = !0;
    var e = 0,
      t = V;
    try {
      var n = Lt;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Lt = null), (Xs = !1);
    } catch (o) {
      throw (Lt !== null && (Lt = Lt.slice(e + 1)), th(ju, _n), o);
    } finally {
      (V = t), (Bl = !1);
    }
  }
  return null;
}
var gr = [],
  yr = 0,
  xs = null,
  Ss = 0,
  Je = [],
  et = 0,
  Yn = null,
  At = 1,
  It = "";
function bn(e, t) {
  (gr[yr++] = Ss), (gr[yr++] = xs), (xs = e), (Ss = t);
}
function bh(e, t, n) {
  (Je[et++] = At), (Je[et++] = It), (Je[et++] = Yn), (Yn = e);
  var r = At;
  e = It;
  var o = 32 - dt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - dt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (At = (1 << (32 - dt(t) + o)) | (n << o) | r),
      (It = i + e);
  } else (At = (1 << i) | (n << o) | r), (It = e);
}
function Qu(e) {
  e.return !== null && (bn(e, 1), bh(e, 1, 0));
}
function qu(e) {
  for (; e === xs; )
    (xs = gr[--yr]), (gr[yr] = null), (Ss = gr[--yr]), (gr[yr] = null);
  for (; e === Yn; )
    (Yn = Je[--et]),
      (Je[et] = null),
      (It = Je[--et]),
      (Je[et] = null),
      (At = Je[--et]),
      (Je[et] = null);
}
var Xe = null,
  Ye = null,
  ne = !1,
  ft = null;
function Lh(e, t) {
  var n = tt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function $f(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Xe = e), (Ye = dn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Xe = e), (Ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Yn !== null ? { id: At, overflow: It } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = tt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Xe = e),
            (Ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ba(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ha(e) {
  if (ne) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!$f(e, t)) {
        if (Ba(e)) throw Error(T(418));
        t = dn(n.nextSibling);
        var r = Xe;
        t && $f(e, t)
          ? Lh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ne = !1), (Xe = e));
      }
    } else {
      if (Ba(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (ne = !1), (Xe = e);
    }
  }
}
function Mf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Xe = e;
}
function Oi(e) {
  if (e !== Xe) return !1;
  if (!ne) return Mf(e), (ne = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Da(e.type, e.memoizedProps))),
    t && (t = Ye))
  ) {
    if (Ba(e)) throw (Ah(), Error(T(418)));
    for (; t; ) Lh(e, t), (t = dn(t.nextSibling));
  }
  if ((Mf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = dn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = Xe ? dn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ah() {
  for (var e = Ye; e; ) e = dn(e.nextSibling);
}
function br() {
  (Ye = Xe = null), (ne = !1);
}
function Zu(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var fg = Bt.ReactCurrentBatchConfig;
function at(e, t) {
  if (e && e.defaultProps) {
    (t = ie({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Es = Cn(null),
  ks = null,
  wr = null,
  Gu = null;
function Ju() {
  Gu = wr = ks = null;
}
function ec(e) {
  var t = Es.current;
  G(Es), (e._currentValue = t);
}
function Wa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Or(e, t) {
  (ks = e),
    (Gu = wr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (Fe = !0), (e.firstContext = null));
}
function ot(e) {
  var t = e._currentValue;
  if (Gu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), wr === null)) {
      if (ks === null) throw Error(T(308));
      (wr = e), (ks.dependencies = { lanes: 0, firstContext: e });
    } else wr = wr.next = e;
  return t;
}
var Mn = null;
function tc(e) {
  Mn === null ? (Mn = [e]) : Mn.push(e);
}
function Ih(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), tc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    jt(e, r)
  );
}
function jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Jt = !1;
function nc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function $h(e, t) {
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
function $t(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function pn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), (U & 2) !== 0)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      jt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), tc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    jt(e, n)
  );
}
function Xi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Uu(e, n);
  }
}
function zf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Cs(e, t, n, r) {
  var o = e.updateQueue;
  Jt = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var f = o.baseState;
    (s = 0), (c = u = a = null), (l = i);
    do {
      var d = l.lane,
        g = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var m = e,
            v = l;
          switch (((d = t), (g = n), v.tag)) {
            case 1:
              if (((m = v.payload), typeof m == "function")) {
                f = m.call(g, f, d);
                break e;
              }
              f = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = v.payload),
                (d = typeof m == "function" ? m.call(g, f, d) : m),
                d == null)
              )
                break e;
              f = ie({}, f, d);
              break e;
            case 2:
              Jt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [l]) : d.push(l));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = f)) : (c = c.next = g),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = f),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Kn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Df(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(T(191, o));
        o.call(r);
      }
    }
}
var Mh = new Ip.Component().refs;
function Va(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ie({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ks = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Gn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      o = mn(e),
      i = $t(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = pn(e, i, o)),
      t !== null && (pt(t, e, o, r), Xi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      o = mn(e),
      i = $t(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = pn(e, i, o)),
      t !== null && (pt(t, e, o, r), Xi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Le(),
      r = mn(e),
      o = $t(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = pn(e, o, r)),
      t !== null && (pt(t, e, r, n), Xi(t, e, r));
  },
};
function Ff(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Do(n, r) || !Do(o, i)
      : !0
  );
}
function zh(e, t, n) {
  var r = !1,
    o = En,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ot(i))
      : ((o = Ue(t) ? Vn : Te.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Nr(e, o) : En)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ks),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function jf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ks.enqueueReplaceState(t, t.state, null);
}
function Ya(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Mh), nc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = ot(i))
    : ((i = Ue(t) ? Vn : Te.current), (o.context = Nr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Va(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ks.enqueueReplaceState(o, o.state, null),
      Cs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            l === Mh && (l = o.refs = {}),
              s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Pi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Uf(e) {
  var t = e._init;
  return t(e._payload);
}
function Dh(e) {
  function t(h, p) {
    if (e) {
      var y = h.deletions;
      y === null ? ((h.deletions = [p]), (h.flags |= 16)) : y.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function o(h, p) {
    return (h = vn(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, p, y) {
    return (
      (h.index = y),
      e
        ? ((y = h.alternate),
          y !== null
            ? ((y = y.index), y < p ? ((h.flags |= 2), p) : y)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, p, y, E) {
    return p === null || p.tag !== 6
      ? ((p = Ql(y, h.mode, E)), (p.return = h), p)
      : ((p = o(p, y)), (p.return = h), p);
  }
  function a(h, p, y, E) {
    var k = y.type;
    return k === fr
      ? c(h, p, y.props.children, E, y.key)
      : p !== null &&
        (p.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Gt &&
            Uf(k) === p.type))
      ? ((E = o(p, y.props)), (E.ref = Gr(h, p, y)), (E.return = h), E)
      : ((E = Ji(y.type, y.key, y.props, null, h.mode, E)),
        (E.ref = Gr(h, p, y)),
        (E.return = h),
        E);
  }
  function u(h, p, y, E) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== y.containerInfo ||
      p.stateNode.implementation !== y.implementation
      ? ((p = ql(y, h.mode, E)), (p.return = h), p)
      : ((p = o(p, y.children || [])), (p.return = h), p);
  }
  function c(h, p, y, E, k) {
    return p === null || p.tag !== 7
      ? ((p = Bn(y, h.mode, E, k)), (p.return = h), p)
      : ((p = o(p, y)), (p.return = h), p);
  }
  function f(h, p, y) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Ql("" + p, h.mode, y)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case vi:
          return (
            (y = Ji(p.type, p.key, p.props, null, h.mode, y)),
            (y.ref = Gr(h, null, p)),
            (y.return = h),
            y
          );
        case cr:
          return (p = ql(p, h.mode, y)), (p.return = h), p;
        case Gt:
          var E = p._init;
          return f(h, E(p._payload), y);
      }
      if (ao(p) || Xr(p))
        return (p = Bn(p, h.mode, y, null)), (p.return = h), p;
      Pi(h, p);
    }
    return null;
  }
  function d(h, p, y, E) {
    var k = p !== null ? p.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return k !== null ? null : l(h, p, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case vi:
          return y.key === k ? a(h, p, y, E) : null;
        case cr:
          return y.key === k ? u(h, p, y, E) : null;
        case Gt:
          return (k = y._init), d(h, p, k(y._payload), E);
      }
      if (ao(y) || Xr(y)) return k !== null ? null : c(h, p, y, E, null);
      Pi(h, y);
    }
    return null;
  }
  function g(h, p, y, E, k) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (h = h.get(y) || null), l(p, h, "" + E, k);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case vi:
          return (h = h.get(E.key === null ? y : E.key) || null), a(p, h, E, k);
        case cr:
          return (h = h.get(E.key === null ? y : E.key) || null), u(p, h, E, k);
        case Gt:
          var _ = E._init;
          return g(h, p, y, _(E._payload), k);
      }
      if (ao(E) || Xr(E)) return (h = h.get(y) || null), c(p, h, E, k, null);
      Pi(p, E);
    }
    return null;
  }
  function m(h, p, y, E) {
    for (
      var k = null, _ = null, C = p, R = (p = 0), $ = null;
      C !== null && R < y.length;
      R++
    ) {
      C.index > R ? (($ = C), (C = null)) : ($ = C.sibling);
      var N = d(h, C, y[R], E);
      if (N === null) {
        C === null && (C = $);
        break;
      }
      e && C && N.alternate === null && t(h, C),
        (p = i(N, p, R)),
        _ === null ? (k = N) : (_.sibling = N),
        (_ = N),
        (C = $);
    }
    if (R === y.length) return n(h, C), ne && bn(h, R), k;
    if (C === null) {
      for (; R < y.length; R++)
        (C = f(h, y[R], E)),
          C !== null &&
            ((p = i(C, p, R)), _ === null ? (k = C) : (_.sibling = C), (_ = C));
      return ne && bn(h, R), k;
    }
    for (C = r(h, C); R < y.length; R++)
      ($ = g(C, h, R, y[R], E)),
        $ !== null &&
          (e && $.alternate !== null && C.delete($.key === null ? R : $.key),
          (p = i($, p, R)),
          _ === null ? (k = $) : (_.sibling = $),
          (_ = $));
    return (
      e &&
        C.forEach(function (j) {
          return t(h, j);
        }),
      ne && bn(h, R),
      k
    );
  }
  function v(h, p, y, E) {
    var k = Xr(y);
    if (typeof k != "function") throw Error(T(150));
    if (((y = k.call(y)), y == null)) throw Error(T(151));
    for (
      var _ = (k = null), C = p, R = (p = 0), $ = null, N = y.next();
      C !== null && !N.done;
      R++, N = y.next()
    ) {
      C.index > R ? (($ = C), (C = null)) : ($ = C.sibling);
      var j = d(h, C, N.value, E);
      if (j === null) {
        C === null && (C = $);
        break;
      }
      e && C && j.alternate === null && t(h, C),
        (p = i(j, p, R)),
        _ === null ? (k = j) : (_.sibling = j),
        (_ = j),
        (C = $);
    }
    if (N.done) return n(h, C), ne && bn(h, R), k;
    if (C === null) {
      for (; !N.done; R++, N = y.next())
        (N = f(h, N.value, E)),
          N !== null &&
            ((p = i(N, p, R)), _ === null ? (k = N) : (_.sibling = N), (_ = N));
      return ne && bn(h, R), k;
    }
    for (C = r(h, C); !N.done; R++, N = y.next())
      (N = g(C, h, R, N.value, E)),
        N !== null &&
          (e && N.alternate !== null && C.delete(N.key === null ? R : N.key),
          (p = i(N, p, R)),
          _ === null ? (k = N) : (_.sibling = N),
          (_ = N));
    return (
      e &&
        C.forEach(function (J) {
          return t(h, J);
        }),
      ne && bn(h, R),
      k
    );
  }
  function S(h, p, y, E) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === fr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case vi:
          e: {
            for (var k = y.key, _ = p; _ !== null; ) {
              if (_.key === k) {
                if (((k = y.type), k === fr)) {
                  if (_.tag === 7) {
                    n(h, _.sibling),
                      (p = o(_, y.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  _.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Gt &&
                    Uf(k) === _.type)
                ) {
                  n(h, _.sibling),
                    (p = o(_, y.props)),
                    (p.ref = Gr(h, _, y)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, _);
                break;
              } else t(h, _);
              _ = _.sibling;
            }
            y.type === fr
              ? ((p = Bn(y.props.children, h.mode, E, y.key)),
                (p.return = h),
                (h = p))
              : ((E = Ji(y.type, y.key, y.props, null, h.mode, E)),
                (E.ref = Gr(h, p, y)),
                (E.return = h),
                (h = E));
          }
          return s(h);
        case cr:
          e: {
            for (_ = y.key; p !== null; ) {
              if (p.key === _)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === y.containerInfo &&
                  p.stateNode.implementation === y.implementation
                ) {
                  n(h, p.sibling),
                    (p = o(p, y.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = ql(y, h.mode, E)), (p.return = h), (h = p);
          }
          return s(h);
        case Gt:
          return (_ = y._init), S(h, p, _(y._payload), E);
      }
      if (ao(y)) return m(h, p, y, E);
      if (Xr(y)) return v(h, p, y, E);
      Pi(h, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = o(p, y)), (p.return = h), (h = p))
          : (n(h, p), (p = Ql(y, h.mode, E)), (p.return = h), (h = p)),
        s(h))
      : n(h, p);
  }
  return S;
}
var Lr = Dh(!0),
  Fh = Dh(!1),
  ii = {},
  Ct = Cn(ii),
  Bo = Cn(ii),
  Ho = Cn(ii);
function zn(e) {
  if (e === ii) throw Error(T(174));
  return e;
}
function rc(e, t) {
  switch ((K(Ho, t), K(Bo, e), K(Ct, ii), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ca(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ca(t, e));
  }
  G(Ct), K(Ct, t);
}
function Ar() {
  G(Ct), G(Bo), G(Ho);
}
function jh(e) {
  zn(Ho.current);
  var t = zn(Ct.current),
    n = Ca(t, e.type);
  t !== n && (K(Bo, e), K(Ct, n));
}
function oc(e) {
  Bo.current === e && (G(Ct), G(Bo));
}
var re = Cn(0);
function _s(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Hl = [];
function ic() {
  for (var e = 0; e < Hl.length; e++)
    Hl[e]._workInProgressVersionPrimary = null;
  Hl.length = 0;
}
var Ki = Bt.ReactCurrentDispatcher,
  Wl = Bt.ReactCurrentBatchConfig,
  Xn = 0,
  oe = null,
  pe = null,
  me = null,
  Os = !1,
  Eo = !1,
  Wo = 0,
  dg = 0;
function Ce() {
  throw Error(T(321));
}
function sc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ht(e[n], t[n])) return !1;
  return !0;
}
function lc(e, t, n, r, o, i) {
  if (
    ((Xn = i),
    (oe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ki.current = e === null || e.memoizedState === null ? vg : gg),
    (e = n(r, o)),
    Eo)
  ) {
    i = 0;
    do {
      if (((Eo = !1), (Wo = 0), 25 <= i)) throw Error(T(301));
      (i += 1),
        (me = pe = null),
        (t.updateQueue = null),
        (Ki.current = yg),
        (e = n(r, o));
    } while (Eo);
  }
  if (
    ((Ki.current = Ps),
    (t = pe !== null && pe.next !== null),
    (Xn = 0),
    (me = pe = oe = null),
    (Os = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function ac() {
  var e = Wo !== 0;
  return (Wo = 0), e;
}
function wt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return me === null ? (oe.memoizedState = me = e) : (me = me.next = e), me;
}
function it() {
  if (pe === null) {
    var e = oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = pe.next;
  var t = me === null ? oe.memoizedState : me.next;
  if (t !== null) (me = t), (pe = e);
  else {
    if (e === null) throw Error(T(310));
    (pe = e),
      (e = {
        memoizedState: pe.memoizedState,
        baseState: pe.baseState,
        baseQueue: pe.baseQueue,
        queue: pe.queue,
        next: null,
      }),
      me === null ? (oe.memoizedState = me = e) : (me = me.next = e);
  }
  return me;
}
function Vo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Vl(e) {
  var t = it(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = pe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var c = u.lane;
      if ((Xn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (oe.lanes |= c),
          (Kn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      ht(r, t.memoizedState) || (Fe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (oe.lanes |= i), (Kn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yl(e) {
  var t = it(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    ht(i, t.memoizedState) || (Fe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Uh() {}
function Bh(e, t) {
  var n = oe,
    r = it(),
    o = t(),
    i = !ht(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Fe = !0)),
    (r = r.queue),
    uc(Vh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (me !== null && me.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yo(9, Wh.bind(null, n, r, o, t), void 0, null),
      ge === null)
    )
      throw Error(T(349));
    (Xn & 30) !== 0 || Hh(n, t, o);
  }
  return o;
}
function Hh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Wh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Yh(t) && Xh(e);
}
function Vh(e, t, n) {
  return n(function () {
    Yh(t) && Xh(e);
  });
}
function Yh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function Xh(e) {
  var t = jt(e, 1);
  t !== null && pt(t, e, 1, -1);
}
function Bf(e) {
  var t = wt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = mg.bind(null, oe, e)),
    [t.memoizedState, e]
  );
}
function Yo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Kh() {
  return it().memoizedState;
}
function Qi(e, t, n, r) {
  var o = wt();
  (oe.flags |= e),
    (o.memoizedState = Yo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Qs(e, t, n, r) {
  var o = it();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (pe !== null) {
    var s = pe.memoizedState;
    if (((i = s.destroy), r !== null && sc(r, s.deps))) {
      o.memoizedState = Yo(t, n, i, r);
      return;
    }
  }
  (oe.flags |= e), (o.memoizedState = Yo(1 | t, n, i, r));
}
function Hf(e, t) {
  return Qi(8390656, 8, e, t);
}
function uc(e, t) {
  return Qs(2048, 8, e, t);
}
function Qh(e, t) {
  return Qs(4, 2, e, t);
}
function qh(e, t) {
  return Qs(4, 4, e, t);
}
function Zh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Gh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Qs(4, 4, Zh.bind(null, t, e), n)
  );
}
function cc() {}
function Jh(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && sc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function e0(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && sc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function t0(e, t, n) {
  return (Xn & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n))
    : (ht(n, t) || ((n = oh()), (oe.lanes |= n), (Kn |= n), (e.baseState = !0)),
      t);
}
function pg(e, t) {
  var n = V;
  (V = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Wl.transition;
  Wl.transition = {};
  try {
    e(!1), t();
  } finally {
    (V = n), (Wl.transition = r);
  }
}
function n0() {
  return it().memoizedState;
}
function hg(e, t, n) {
  var r = mn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    r0(e))
  )
    o0(t, n);
  else if (((n = Ih(e, t, n, r)), n !== null)) {
    var o = Le();
    pt(n, e, r, o), i0(n, t, r);
  }
}
function mg(e, t, n) {
  var r = mn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (r0(e)) o0(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), ht(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), tc(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ih(e, t, o, r)),
      n !== null && ((o = Le()), pt(n, e, r, o), i0(n, t, r));
  }
}
function r0(e) {
  var t = e.alternate;
  return e === oe || (t !== null && t === oe);
}
function o0(e, t) {
  Eo = Os = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function i0(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Uu(e, n);
  }
}
var Ps = {
    readContext: ot,
    useCallback: Ce,
    useContext: Ce,
    useEffect: Ce,
    useImperativeHandle: Ce,
    useInsertionEffect: Ce,
    useLayoutEffect: Ce,
    useMemo: Ce,
    useReducer: Ce,
    useRef: Ce,
    useState: Ce,
    useDebugValue: Ce,
    useDeferredValue: Ce,
    useTransition: Ce,
    useMutableSource: Ce,
    useSyncExternalStore: Ce,
    useId: Ce,
    unstable_isNewReconciler: !1,
  },
  vg = {
    readContext: ot,
    useCallback: function (e, t) {
      return (wt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ot,
    useEffect: Hf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Qi(4194308, 4, Zh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Qi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Qi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = wt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = wt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = hg.bind(null, oe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = wt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Bf,
    useDebugValue: cc,
    useDeferredValue: function (e) {
      return (wt().memoizedState = e);
    },
    useTransition: function () {
      var e = Bf(!1),
        t = e[0];
      return (e = pg.bind(null, e[1])), (wt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = oe,
        o = wt();
      if (ne) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), ge === null)) throw Error(T(349));
        (Xn & 30) !== 0 || Hh(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Hf(Vh.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Yo(9, Wh.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = wt(),
        t = ge.identifierPrefix;
      if (ne) {
        var n = It,
          r = At;
        (n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Wo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = dg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  gg = {
    readContext: ot,
    useCallback: Jh,
    useContext: ot,
    useEffect: uc,
    useImperativeHandle: Gh,
    useInsertionEffect: Qh,
    useLayoutEffect: qh,
    useMemo: e0,
    useReducer: Vl,
    useRef: Kh,
    useState: function () {
      return Vl(Vo);
    },
    useDebugValue: cc,
    useDeferredValue: function (e) {
      var t = it();
      return t0(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(Vo)[0],
        t = it().memoizedState;
      return [e, t];
    },
    useMutableSource: Uh,
    useSyncExternalStore: Bh,
    useId: n0,
    unstable_isNewReconciler: !1,
  },
  yg = {
    readContext: ot,
    useCallback: Jh,
    useContext: ot,
    useEffect: uc,
    useImperativeHandle: Gh,
    useInsertionEffect: Qh,
    useLayoutEffect: qh,
    useMemo: e0,
    useReducer: Yl,
    useRef: Kh,
    useState: function () {
      return Yl(Vo);
    },
    useDebugValue: cc,
    useDeferredValue: function (e) {
      var t = it();
      return pe === null ? (t.memoizedState = e) : t0(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = Yl(Vo)[0],
        t = it().memoizedState;
      return [e, t];
    },
    useMutableSource: Uh,
    useSyncExternalStore: Bh,
    useId: n0,
    unstable_isNewReconciler: !1,
  };
function Ir(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Y1(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Xl(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n != null ? n : null,
    digest: t != null ? t : null,
  };
}
function Xa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var wg = typeof WeakMap == "function" ? WeakMap : Map;
function s0(e, t, n) {
  (n = $t(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Rs || ((Rs = !0), (ru = r)), Xa(e, t);
    }),
    n
  );
}
function l0(e, t, n) {
  (n = $t(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Xa(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Xa(e, t),
          typeof r != "function" &&
            (hn === null ? (hn = new Set([this])) : hn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Wf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new wg();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Ag.bind(null, e, t, n)), t.then(e, e));
}
function Vf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Yf(e, t, n, r, o) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = $t(-1, 1)), (t.tag = 2), pn(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = o), e);
}
var xg = Bt.ReactCurrentOwner,
  Fe = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? Fh(t, null, n, r) : Lr(t, e.child, n, r);
}
function Xf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Or(t, o),
    (r = lc(e, t, n, r, i, o)),
    (n = ac()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ut(e, t, o))
      : (ne && n && Qu(t), (t.flags |= 1), Ne(e, t, r, o), t.child)
  );
}
function Kf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !yc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), a0(e, t, i, r, o))
      : ((e = Ji(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), (e.lanes & o) === 0)) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Do), n(s, r) && e.ref === t.ref)
    )
      return Ut(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = vn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function a0(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Do(i, r) && e.ref === t.ref)
      if (((Fe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        (e.flags & 131072) !== 0 && (Fe = !0);
      else return (t.lanes = e.lanes), Ut(e, t, o);
  }
  return Ka(e, t, n, r, o);
}
function u0(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        K(Sr, Ve),
        (Ve |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          K(Sr, Ve),
          (Ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        K(Sr, Ve),
        (Ve |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      K(Sr, Ve),
      (Ve |= r);
  return Ne(e, t, o, n), t.child;
}
function c0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ka(e, t, n, r, o) {
  var i = Ue(n) ? Vn : Te.current;
  return (
    (i = Nr(t, i)),
    Or(t, o),
    (n = lc(e, t, n, r, i, o)),
    (r = ac()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ut(e, t, o))
      : (ne && r && Qu(t), (t.flags |= 1), Ne(e, t, n, o), t.child)
  );
}
function Qf(e, t, n, r, o) {
  if (Ue(n)) {
    var i = !0;
    ws(t);
  } else i = !1;
  if ((Or(t, o), t.stateNode === null))
    qi(e, t), zh(t, n, r), Ya(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ot(u))
      : ((u = Ue(n) ? Vn : Te.current), (u = Nr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && jf(t, s, r, u)),
      (Jt = !1);
    var d = t.memoizedState;
    (s.state = d),
      Cs(t, r, s, o),
      (a = t.memoizedState),
      l !== r || d !== a || je.current || Jt
        ? (typeof c == "function" && (Va(t, n, c, r), (a = t.memoizedState)),
          (l = Jt || Ff(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      $h(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : at(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = ot(a))
        : ((a = Ue(n) ? Vn : Te.current), (a = Nr(t, a)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && jf(t, s, r, a)),
      (Jt = !1),
      (d = t.memoizedState),
      (s.state = d),
      Cs(t, r, s, o);
    var m = t.memoizedState;
    l !== f || d !== m || je.current || Jt
      ? (typeof g == "function" && (Va(t, n, g, r), (m = t.memoizedState)),
        (u = Jt || Ff(t, n, u, r, d, m, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, m, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, m, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (s.props = r),
        (s.state = m),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Qa(e, t, n, r, i, o);
}
function Qa(e, t, n, r, o, i) {
  c0(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && If(t, n, !1), Ut(e, t, i);
  (r = t.stateNode), (xg.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Lr(t, e.child, null, i)), (t.child = Lr(t, null, l, i)))
      : Ne(e, t, l, i),
    (t.memoizedState = r.state),
    o && If(t, n, !0),
    t.child
  );
}
function f0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Af(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Af(e, t.context, !1),
    rc(e, t.containerInfo);
}
function qf(e, t, n, r, o) {
  return br(), Zu(o), (t.flags |= 256), Ne(e, t, n, r), t.child;
}
var qa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Za(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function d0(e, t, n) {
  var r = t.pendingProps,
    o = re.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    K(re, o & 1),
    e === null)
  )
    return (
      Ha(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              (r & 1) === 0 && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Gs(s, r, 0, null)),
              (e = Bn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Za(n)),
              (t.memoizedState = qa),
              e)
            : fc(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Sg(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      (s & 1) === 0 && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = vn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = vn(l, i)) : ((i = Bn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Za(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = qa),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = vn(i, { mode: "visible", children: r.children })),
    (t.mode & 1) === 0 && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function fc(e, t) {
  return (
    (t = Gs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ti(e, t, n, r) {
  return (
    r !== null && Zu(r),
    Lr(t, e.child, null, n),
    (e = fc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Sg(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Xl(Error(T(422)))), Ti(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Gs({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Bn(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        (t.mode & 1) !== 0 && Lr(t, e.child, null, s),
        (t.child.memoizedState = Za(s)),
        (t.memoizedState = qa),
        i);
  if ((t.mode & 1) === 0) return Ti(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(T(419))), (r = Xl(i, r, void 0)), Ti(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Fe || l)) {
    if (((r = ge), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = (o & (r.suspendedLanes | s)) !== 0 ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), jt(e, o), pt(r, e, o, -1));
    }
    return gc(), (r = Xl(Error(T(421)))), Ti(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ig.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ye = dn(o.nextSibling)),
      (Xe = t),
      (ne = !0),
      (ft = null),
      e !== null &&
        ((Je[et++] = At),
        (Je[et++] = It),
        (Je[et++] = Yn),
        (At = e.id),
        (It = e.overflow),
        (Yn = t)),
      (t = fc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Zf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Wa(e.return, t, n);
}
function Kl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function p0(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ne(e, t, r.children, n), (r = re.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zf(e, n, t);
        else if (e.tag === 19) Zf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((K(re, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && _s(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Kl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && _s(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Kl(t, !0, n, null, i);
        break;
      case "together":
        Kl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function qi(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ut(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Kn |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = vn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = vn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Eg(e, t, n) {
  switch (t.tag) {
    case 3:
      f0(t), br();
      break;
    case 5:
      jh(t);
      break;
    case 1:
      Ue(t.type) && ws(t);
      break;
    case 4:
      rc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      K(Es, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (K(re, re.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? d0(e, t, n)
          : (K(re, re.current & 1),
            (e = Ut(e, t, n)),
            e !== null ? e.sibling : null);
      K(re, re.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return p0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        K(re, re.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), u0(e, t, n);
  }
  return Ut(e, t, n);
}
var h0, Ga, m0, v0;
h0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ga = function () {};
m0 = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), zn(Ct.current);
    var i = null;
    switch (n) {
      case "input":
        (o = xa(e, o)), (r = xa(e, r)), (i = []);
        break;
      case "select":
        (o = ie({}, o, { value: void 0 })),
          (r = ie({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ka(e, o)), (r = ka(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = gs);
    }
    _a(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (bo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (bo.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && Q("scroll", e),
                  i || l === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
v0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Jr(e, t) {
  if (!ne)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function _e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function kg(e, t, n) {
  var r = t.pendingProps;
  switch ((qu(t), t.tag)) {
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
      return _e(t), null;
    case 1:
      return Ue(t.type) && ys(), _e(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ar(),
        G(je),
        G(Te),
        ic(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Oi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), ft !== null && (su(ft), (ft = null)))),
        Ga(e, t),
        _e(t),
        null
      );
    case 5:
      oc(t);
      var o = zn(Ho.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        m0(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return _e(t), null;
        }
        if (((e = zn(Ct.current)), Oi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Et] = t), (r[Uo] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Q("cancel", r), Q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < co.length; o++) Q(co[o], r);
              break;
            case "source":
              Q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Q("error", r), Q("load", r);
              break;
            case "details":
              Q("toggle", r);
              break;
            case "input":
              sf(r, i), Q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Q("invalid", r);
              break;
            case "textarea":
              af(r, i), Q("invalid", r);
          }
          _a(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      _i(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      _i(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : bo.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  Q("scroll", r);
            }
          switch (n) {
            case "input":
              gi(r), lf(r, i, !0);
              break;
            case "textarea":
              gi(r), uf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = gs);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Hp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Et] = t),
            (e[Uo] = r),
            h0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Oa(n, r)), n)) {
              case "dialog":
                Q("cancel", e), Q("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < co.length; o++) Q(co[o], e);
                o = r;
                break;
              case "source":
                Q("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Q("error", e), Q("load", e), (o = r);
                break;
              case "details":
                Q("toggle", e), (o = r);
                break;
              case "input":
                sf(e, r), (o = xa(e, r)), Q("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ie({}, r, { value: void 0 })),
                  Q("invalid", e);
                break;
              case "textarea":
                af(e, r), (o = ka(e, r)), Q("invalid", e);
                break;
              default:
                o = r;
            }
            _a(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? Yp(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Wp(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Lo(e, a)
                    : typeof a == "number" && Lo(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (bo.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && Q("scroll", e)
                      : a != null && $u(e, i, a, s));
              }
            switch (n) {
              case "input":
                gi(e), lf(e, r, !1);
                break;
              case "textarea":
                gi(e), uf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Sn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Er(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Er(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = gs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return _e(t), null;
    case 6:
      if (e && t.stateNode != null) v0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = zn(Ho.current)), zn(Ct.current), Oi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Et] = t),
            (i = r.nodeValue !== n) && ((e = Xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                _i(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _i(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Et] = t),
            (t.stateNode = r);
      }
      return _e(t), null;
    case 13:
      if (
        (G(re),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ne && Ye !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          Ah(), br(), (t.flags |= 98560), (i = !1);
        else if (((i = Oi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(T(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(T(317));
            i[Et] = t;
          } else
            br(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          _e(t), (i = !1);
        } else ft !== null && (su(ft), (ft = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (re.current & 1) !== 0
                ? he === 0 && (he = 3)
                : gc())),
          t.updateQueue !== null && (t.flags |= 4),
          _e(t),
          null);
    case 4:
      return (
        Ar(), Ga(e, t), e === null && Fo(t.stateNode.containerInfo), _e(t), null
      );
    case 10:
      return ec(t.type._context), _e(t), null;
    case 17:
      return Ue(t.type) && ys(), _e(t), null;
    case 19:
      if ((G(re), (i = t.memoizedState), i === null)) return _e(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Jr(i, !1);
        else {
          if (he !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((s = _s(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Jr(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return K(re, (re.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ce() > $r &&
            ((t.flags |= 128), (r = !0), Jr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = _s(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Jr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ne)
            )
              return _e(t), null;
          } else
            2 * ce() - i.renderingStartTime > $r &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Jr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ce()),
          (t.sibling = null),
          (n = re.current),
          K(re, r ? (n & 1) | 2 : n & 1),
          t)
        : (_e(t), null);
    case 22:
    case 23:
      return (
        vc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (Ve & 1073741824) !== 0 &&
            (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : _e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function Cg(e, t) {
  switch ((qu(t), t.tag)) {
    case 1:
      return (
        Ue(t.type) && ys(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ar(),
        G(je),
        G(Te),
        ic(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return oc(t), null;
    case 13:
      if ((G(re), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340));
        br();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return G(re), null;
    case 4:
      return Ar(), null;
    case 10:
      return ec(t.type._context), null;
    case 22:
    case 23:
      return vc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ri = !1,
  Pe = !1,
  _g = typeof WeakSet == "function" ? WeakSet : Set,
  b = null;
function xr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ue(e, t, r);
      }
    else n.current = null;
}
function Ja(e, t, n) {
  try {
    n();
  } catch (r) {
    ue(e, t, r);
  }
}
var Gf = !1;
function Og(e, t) {
  if (((Ma = hs), (e = xh()), Ku(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (o !== 0 && f.nodeType !== 3) || (l = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === o && (l = s),
                d === i && ++c === r && (a = s),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (za = { focusedElem: e, selectionRange: n }, hs = !1, b = t; b !== null; )
    if (((t = b), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (b = e);
    else
      for (; b !== null; ) {
        t = b;
        try {
          var m = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var v = m.memoizedProps,
                    S = m.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : at(t.type, v),
                      S
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (E) {
          ue(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (b = e);
          break;
        }
        b = t.return;
      }
  return (m = Gf), (Gf = !1), m;
}
function ko(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Ja(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function qs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function eu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function g0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), g0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Et], delete t[Uo], delete t[ja], delete t[ag], delete t[ug])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function y0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Jf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || y0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function tu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = gs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (tu(e, t, n), e = e.sibling; e !== null; ) tu(e, t, n), (e = e.sibling);
}
function nu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (nu(e, t, n), e = e.sibling; e !== null; ) nu(e, t, n), (e = e.sibling);
}
var Se = null,
  ut = !1;
function Qt(e, t, n) {
  for (n = n.child; n !== null; ) w0(e, t, n), (n = n.sibling);
}
function w0(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function")
    try {
      kt.onCommitFiberUnmount(Bs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Pe || xr(n, t);
    case 6:
      var r = Se,
        o = ut;
      (Se = null),
        Qt(e, t, n),
        (Se = r),
        (ut = o),
        Se !== null &&
          (ut
            ? ((e = Se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Se.removeChild(n.stateNode));
      break;
    case 18:
      Se !== null &&
        (ut
          ? ((e = Se),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ul(e.parentNode, n)
              : e.nodeType === 1 && Ul(e, n),
            Mo(e))
          : Ul(Se, n.stateNode));
      break;
    case 4:
      (r = Se),
        (o = ut),
        (Se = n.stateNode.containerInfo),
        (ut = !0),
        Qt(e, t, n),
        (Se = r),
        (ut = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Ja(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      Qt(e, t, n);
      break;
    case 1:
      if (
        !Pe &&
        (xr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ue(n, t, l);
        }
      Qt(e, t, n);
      break;
    case 21:
      Qt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Pe = (r = Pe) || n.memoizedState !== null), Qt(e, t, n), (Pe = r))
        : Qt(e, t, n);
      break;
    default:
      Qt(e, t, n);
  }
}
function ed(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new _g()),
      t.forEach(function (r) {
        var o = $g.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function lt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Se = l.stateNode), (ut = !1);
              break e;
            case 3:
              (Se = l.stateNode.containerInfo), (ut = !0);
              break e;
            case 4:
              (Se = l.stateNode.containerInfo), (ut = !0);
              break e;
          }
          l = l.return;
        }
        if (Se === null) throw Error(T(160));
        w0(i, s, o), (Se = null), (ut = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        ue(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) x0(t, e), (t = t.sibling);
}
function x0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((lt(t, e), gt(e), r & 4)) {
        try {
          ko(3, e, e.return), qs(3, e);
        } catch (v) {
          ue(e, e.return, v);
        }
        try {
          ko(5, e, e.return);
        } catch (v) {
          ue(e, e.return, v);
        }
      }
      break;
    case 1:
      lt(t, e), gt(e), r & 512 && n !== null && xr(n, n.return);
      break;
    case 5:
      if (
        (lt(t, e),
        gt(e),
        r & 512 && n !== null && xr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Lo(o, "");
        } catch (v) {
          ue(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Up(o, i),
              Oa(l, s);
            var u = Oa(l, i);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? Yp(o, f)
                : c === "dangerouslySetInnerHTML"
                ? Wp(o, f)
                : c === "children"
                ? Lo(o, f)
                : $u(o, c, f, u);
            }
            switch (l) {
              case "input":
                Sa(o, i);
                break;
              case "textarea":
                Bp(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Er(o, !!i.multiple, g, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Er(o, !!i.multiple, i.defaultValue, !0)
                      : Er(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Uo] = i;
          } catch (v) {
            ue(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((lt(t, e), gt(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          ue(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (lt(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Mo(t.containerInfo);
        } catch (v) {
          ue(e, e.return, v);
        }
      break;
    case 4:
      lt(t, e), gt(e);
      break;
    case 13:
      lt(t, e),
        gt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (hc = ce())),
        r & 4 && ed(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Pe = (u = Pe) || c), lt(t, e), (Pe = u)) : lt(t, e),
        gt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && (e.mode & 1) !== 0)
        )
          for (b = e, c = e.child; c !== null; ) {
            for (f = b = c; b !== null; ) {
              switch (((d = b), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ko(4, d, d.return);
                  break;
                case 1:
                  xr(d, d.return);
                  var m = d.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (v) {
                      ue(r, n, v);
                    }
                  }
                  break;
                case 5:
                  xr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    nd(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (b = g)) : nd(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Vp("display", s)));
              } catch (v) {
                ue(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                ue(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      lt(t, e), gt(e), r & 4 && ed(e);
      break;
    case 21:
      break;
    default:
      lt(t, e), gt(e);
  }
}
function gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (y0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Lo(o, ""), (r.flags &= -33));
          var i = Jf(e);
          nu(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Jf(e);
          tu(e, l, s);
          break;
        default:
          throw Error(T(161));
      }
    } catch (a) {
      ue(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Pg(e, t, n) {
  (b = e), S0(e);
}
function S0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; b !== null; ) {
    var o = b,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ri;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Pe;
        l = Ri;
        var u = Pe;
        if (((Ri = s), (Pe = a) && !u))
          for (b = o; b !== null; )
            (s = b),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? rd(o)
                : a !== null
                ? ((a.return = s), (b = a))
                : rd(o);
        for (; i !== null; ) (b = i), S0(i), (i = i.sibling);
        (b = o), (Ri = l), (Pe = u);
      }
      td(e);
    } else
      (o.subtreeFlags & 8772) !== 0 && i !== null
        ? ((i.return = o), (b = i))
        : td(e);
  }
}
function td(e) {
  for (; b !== null; ) {
    var t = b;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Pe || qs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Pe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : at(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Df(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Df(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Mo(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        Pe || (t.flags & 512 && eu(t));
      } catch (d) {
        ue(t, t.return, d);
      }
    }
    if (t === e) {
      b = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (b = n);
      break;
    }
    b = t.return;
  }
}
function nd(e) {
  for (; b !== null; ) {
    var t = b;
    if (t === e) {
      b = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (b = n);
      break;
    }
    b = t.return;
  }
}
function rd(e) {
  for (; b !== null; ) {
    var t = b;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            qs(4, t);
          } catch (a) {
            ue(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ue(t, o, a);
            }
          }
          var i = t.return;
          try {
            eu(t);
          } catch (a) {
            ue(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            eu(t);
          } catch (a) {
            ue(t, s, a);
          }
      }
    } catch (a) {
      ue(t, t.return, a);
    }
    if (t === e) {
      b = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (b = l);
      break;
    }
    b = t.return;
  }
}
var Tg = Math.ceil,
  Ts = Bt.ReactCurrentDispatcher,
  dc = Bt.ReactCurrentOwner,
  nt = Bt.ReactCurrentBatchConfig,
  U = 0,
  ge = null,
  de = null,
  Ee = 0,
  Ve = 0,
  Sr = Cn(0),
  he = 0,
  Xo = null,
  Kn = 0,
  Zs = 0,
  pc = 0,
  Co = null,
  De = null,
  hc = 0,
  $r = 1 / 0,
  bt = null,
  Rs = !1,
  ru = null,
  hn = null,
  Ni = !1,
  ln = null,
  Ns = 0,
  _o = 0,
  ou = null,
  Zi = -1,
  Gi = 0;
function Le() {
  return (U & 6) !== 0 ? ce() : Zi !== -1 ? Zi : (Zi = ce());
}
function mn(e) {
  return (e.mode & 1) === 0
    ? 1
    : (U & 2) !== 0 && Ee !== 0
    ? Ee & -Ee
    : fg.transition !== null
    ? (Gi === 0 && (Gi = oh()), Gi)
    : ((e = V),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fh(e.type))),
      e);
}
function pt(e, t, n, r) {
  if (50 < _o) throw ((_o = 0), (ou = null), Error(T(185)));
  ni(e, n, r),
    ((U & 2) === 0 || e !== ge) &&
      (e === ge && ((U & 2) === 0 && (Zs |= n), he === 4 && rn(e, Ee)),
      Be(e, r),
      n === 1 &&
        U === 0 &&
        (t.mode & 1) === 0 &&
        (($r = ce() + 500), Xs && _n()));
}
function Be(e, t) {
  var n = e.callbackNode;
  fv(e, t);
  var r = ps(e, e === ge ? Ee : 0);
  if (r === 0)
    n !== null && df(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && df(n), t === 1))
      e.tag === 0 ? cg(od.bind(null, e)) : Nh(od.bind(null, e)),
        sg(function () {
          (U & 6) === 0 && _n();
        }),
        (n = null);
    else {
      switch (ih(r)) {
        case 1:
          n = ju;
          break;
        case 4:
          n = nh;
          break;
        case 16:
          n = ds;
          break;
        case 536870912:
          n = rh;
          break;
        default:
          n = ds;
      }
      n = R0(n, E0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function E0(e, t) {
  if (((Zi = -1), (Gi = 0), (U & 6) !== 0)) throw Error(T(327));
  var n = e.callbackNode;
  if (Pr() && e.callbackNode !== n) return null;
  var r = ps(e, e === ge ? Ee : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = bs(e, r);
  else {
    t = r;
    var o = U;
    U |= 2;
    var i = C0();
    (ge !== e || Ee !== t) && ((bt = null), ($r = ce() + 500), Un(e, t));
    do
      try {
        bg();
        break;
      } catch (l) {
        k0(e, l);
      }
    while (1);
    Ju(),
      (Ts.current = i),
      (U = o),
      de !== null ? (t = 0) : ((ge = null), (Ee = 0), (t = he));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ba(e)), o !== 0 && ((r = o), (t = iu(e, o)))), t === 1)
    )
      throw ((n = Xo), Un(e, 0), rn(e, r), Be(e, ce()), n);
    if (t === 6) rn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        (r & 30) === 0 &&
          !Rg(o) &&
          ((t = bs(e, r)),
          t === 2 && ((i = ba(e)), i !== 0 && ((r = i), (t = iu(e, i)))),
          t === 1))
      )
        throw ((n = Xo), Un(e, 0), rn(e, r), Be(e, ce()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          Ln(e, De, bt);
          break;
        case 3:
          if (
            (rn(e, r), (r & 130023424) === r && ((t = hc + 500 - ce()), 10 < t))
          ) {
            if (ps(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Le(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Fa(Ln.bind(null, e, De, bt), t);
            break;
          }
          Ln(e, De, bt);
          break;
        case 4:
          if ((rn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - dt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ce() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Tg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Fa(Ln.bind(null, e, De, bt), r);
            break;
          }
          Ln(e, De, bt);
          break;
        case 5:
          Ln(e, De, bt);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return Be(e, ce()), e.callbackNode === n ? E0.bind(null, e) : null;
}
function iu(e, t) {
  var n = Co;
  return (
    e.current.memoizedState.isDehydrated && (Un(e, t).flags |= 256),
    (e = bs(e, t)),
    e !== 2 && ((t = De), (De = n), t !== null && su(t)),
    e
  );
}
function su(e) {
  De === null ? (De = e) : De.push.apply(De, e);
}
function Rg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!ht(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rn(e, t) {
  for (
    t &= ~pc,
      t &= ~Zs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - dt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function od(e) {
  if ((U & 6) !== 0) throw Error(T(327));
  Pr();
  var t = ps(e, 0);
  if ((t & 1) === 0) return Be(e, ce()), null;
  var n = bs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ba(e);
    r !== 0 && ((t = r), (n = iu(e, r)));
  }
  if (n === 1) throw ((n = Xo), Un(e, 0), rn(e, t), Be(e, ce()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ln(e, De, bt),
    Be(e, ce()),
    null
  );
}
function mc(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = n), U === 0 && (($r = ce() + 500), Xs && _n());
  }
}
function Qn(e) {
  ln !== null && ln.tag === 0 && (U & 6) === 0 && Pr();
  var t = U;
  U |= 1;
  var n = nt.transition,
    r = V;
  try {
    if (((nt.transition = null), (V = 1), e)) return e();
  } finally {
    (V = r), (nt.transition = n), (U = t), (U & 6) === 0 && _n();
  }
}
function vc() {
  (Ve = Sr.current), G(Sr);
}
function Un(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ig(n)), de !== null))
    for (n = de.return; n !== null; ) {
      var r = n;
      switch ((qu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ys();
          break;
        case 3:
          Ar(), G(je), G(Te), ic();
          break;
        case 5:
          oc(r);
          break;
        case 4:
          Ar();
          break;
        case 13:
          G(re);
          break;
        case 19:
          G(re);
          break;
        case 10:
          ec(r.type._context);
          break;
        case 22:
        case 23:
          vc();
      }
      n = n.return;
    }
  if (
    ((ge = e),
    (de = e = vn(e.current, null)),
    (Ee = Ve = t),
    (he = 0),
    (Xo = null),
    (pc = Zs = Kn = 0),
    (De = Co = null),
    Mn !== null)
  ) {
    for (t = 0; t < Mn.length; t++)
      if (((n = Mn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Mn = null;
  }
  return e;
}
function k0(e, t) {
  do {
    var n = de;
    try {
      if ((Ju(), (Ki.current = Ps), Os)) {
        for (var r = oe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Os = !1;
      }
      if (
        ((Xn = 0),
        (me = pe = oe = null),
        (Eo = !1),
        (Wo = 0),
        (dc.current = null),
        n === null || n.return === null)
      ) {
        (he = 1), (Xo = t), (de = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = Ee),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if ((c.mode & 1) === 0 && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Vf(s);
          if (g !== null) {
            (g.flags &= -257),
              Yf(g, s, l, i, t),
              g.mode & 1 && Wf(i, u, t),
              (t = g),
              (a = u);
            var m = t.updateQueue;
            if (m === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else m.add(a);
            break e;
          } else {
            if ((t & 1) === 0) {
              Wf(i, u, t), gc();
              break e;
            }
            a = Error(T(426));
          }
        } else if (ne && l.mode & 1) {
          var S = Vf(s);
          if (S !== null) {
            (S.flags & 65536) === 0 && (S.flags |= 256),
              Yf(S, s, l, i, t),
              Zu(Ir(a, l));
            break e;
          }
        }
        (i = a = Ir(a, l)),
          he !== 4 && (he = 2),
          Co === null ? (Co = [i]) : Co.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = s0(i, a, t);
              zf(i, h);
              break e;
            case 1:
              l = a;
              var p = i.type,
                y = i.stateNode;
              if (
                (i.flags & 128) === 0 &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (hn === null || !hn.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = l0(i, l, t);
                zf(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      O0(n);
    } catch (k) {
      (t = k), de === n && n !== null && (de = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function C0() {
  var e = Ts.current;
  return (Ts.current = Ps), e === null ? Ps : e;
}
function gc() {
  (he === 0 || he === 3 || he === 2) && (he = 4),
    ge === null ||
      ((Kn & 268435455) === 0 && (Zs & 268435455) === 0) ||
      rn(ge, Ee);
}
function bs(e, t) {
  var n = U;
  U |= 2;
  var r = C0();
  (ge !== e || Ee !== t) && ((bt = null), Un(e, t));
  do
    try {
      Ng();
      break;
    } catch (o) {
      k0(e, o);
    }
  while (1);
  if ((Ju(), (U = n), (Ts.current = r), de !== null)) throw Error(T(261));
  return (ge = null), (Ee = 0), he;
}
function Ng() {
  for (; de !== null; ) _0(de);
}
function bg() {
  for (; de !== null && !nv(); ) _0(de);
}
function _0(e) {
  var t = T0(e.alternate, e, Ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? O0(e) : (de = t),
    (dc.current = null);
}
function O0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = kg(n, t, Ve)), n !== null)) {
        de = n;
        return;
      }
    } else {
      if (((n = Cg(n, t)), n !== null)) {
        (n.flags &= 32767), (de = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (he = 6), (de = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      de = t;
      return;
    }
    de = t = e;
  } while (t !== null);
  he === 0 && (he = 5);
}
function Ln(e, t, n) {
  var r = V,
    o = nt.transition;
  try {
    (nt.transition = null), (V = 1), Lg(e, t, n, r);
  } finally {
    (nt.transition = o), (V = r);
  }
  return null;
}
function Lg(e, t, n, r) {
  do Pr();
  while (ln !== null);
  if ((U & 6) !== 0) throw Error(T(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (dv(e, i),
    e === ge && ((de = ge = null), (Ee = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      Ni ||
      ((Ni = !0),
      R0(ds, function () {
        return Pr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || i)
  ) {
    (i = nt.transition), (nt.transition = null);
    var s = V;
    V = 1;
    var l = U;
    (U |= 4),
      (dc.current = null),
      Og(e, n),
      x0(n, e),
      Gv(za),
      (hs = !!Ma),
      (za = Ma = null),
      (e.current = n),
      Pg(n),
      rv(),
      (U = l),
      (V = s),
      (nt.transition = i);
  } else e.current = n;
  if (
    (Ni && ((Ni = !1), (ln = e), (Ns = o)),
    (i = e.pendingLanes),
    i === 0 && (hn = null),
    sv(n.stateNode),
    Be(e, ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Rs) throw ((Rs = !1), (e = ru), (ru = null), e);
  return (
    (Ns & 1) !== 0 && e.tag !== 0 && Pr(),
    (i = e.pendingLanes),
    (i & 1) !== 0 ? (e === ou ? _o++ : ((_o = 0), (ou = e))) : (_o = 0),
    _n(),
    null
  );
}
function Pr() {
  if (ln !== null) {
    var e = ih(Ns),
      t = nt.transition,
      n = V;
    try {
      if (((nt.transition = null), (V = 16 > e ? 16 : e), ln === null))
        var r = !1;
      else {
        if (((e = ln), (ln = null), (Ns = 0), (U & 6) !== 0))
          throw Error(T(331));
        var o = U;
        for (U |= 4, b = e.current; b !== null; ) {
          var i = b,
            s = i.child;
          if ((b.flags & 16) !== 0) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (b = u; b !== null; ) {
                  var c = b;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ko(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (b = f);
                  else
                    for (; b !== null; ) {
                      c = b;
                      var d = c.sibling,
                        g = c.return;
                      if ((g0(c), c === u)) {
                        b = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (b = d);
                        break;
                      }
                      b = g;
                    }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var v = m.child;
                if (v !== null) {
                  m.child = null;
                  do {
                    var S = v.sibling;
                    (v.sibling = null), (v = S);
                  } while (v !== null);
                }
              }
              b = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && s !== null)
            (s.return = i), (b = s);
          else
            e: for (; b !== null; ) {
              if (((i = b), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ko(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (b = h);
                break e;
              }
              b = i.return;
            }
        }
        var p = e.current;
        for (b = p; b !== null; ) {
          s = b;
          var y = s.child;
          if ((s.subtreeFlags & 2064) !== 0 && y !== null)
            (y.return = s), (b = y);
          else
            e: for (s = p; b !== null; ) {
              if (((l = b), (l.flags & 2048) !== 0))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qs(9, l);
                  }
                } catch (k) {
                  ue(l, l.return, k);
                }
              if (l === s) {
                b = null;
                break e;
              }
              var E = l.sibling;
              if (E !== null) {
                (E.return = l.return), (b = E);
                break e;
              }
              b = l.return;
            }
        }
        if (
          ((U = o), _n(), kt && typeof kt.onPostCommitFiberRoot == "function")
        )
          try {
            kt.onPostCommitFiberRoot(Bs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (V = n), (nt.transition = t);
    }
  }
  return !1;
}
function id(e, t, n) {
  (t = Ir(n, t)),
    (t = s0(e, t, 1)),
    (e = pn(e, t, 1)),
    (t = Le()),
    e !== null && (ni(e, 1, t), Be(e, t));
}
function ue(e, t, n) {
  if (e.tag === 3) id(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        id(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (hn === null || !hn.has(r)))
        ) {
          (e = Ir(n, e)),
            (e = l0(t, e, 1)),
            (t = pn(t, e, 1)),
            (e = Le()),
            t !== null && (ni(t, 1, e), Be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ag(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Le()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ge === e &&
      (Ee & n) === n &&
      (he === 4 || (he === 3 && (Ee & 130023424) === Ee && 500 > ce() - hc)
        ? Un(e, 0)
        : (pc |= n)),
    Be(e, t);
}
function P0(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = xi), (xi <<= 1), (xi & 130023424) === 0 && (xi = 4194304)));
  var n = Le();
  (e = jt(e, t)), e !== null && (ni(e, t, n), Be(e, n));
}
function Ig(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), P0(e, n);
}
function $g(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), P0(e, n);
}
var T0;
T0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || je.current) Fe = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (Fe = !1), Eg(e, t, n);
      Fe = (e.flags & 131072) !== 0;
    }
  else (Fe = !1), ne && (t.flags & 1048576) !== 0 && bh(t, Ss, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      qi(e, t), (e = t.pendingProps);
      var o = Nr(t, Te.current);
      Or(t, n), (o = lc(null, t, r, e, o, n));
      var i = ac();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ue(r) ? ((i = !0), ws(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            nc(t),
            (o.updater = Ks),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ya(t, r, e, n),
            (t = Qa(null, t, r, !0, i, n)))
          : ((t.tag = 0), ne && i && Qu(t), Ne(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (qi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = zg(r)),
          (e = at(r, e)),
          o)
        ) {
          case 0:
            t = Ka(null, t, r, e, n);
            break e;
          case 1:
            t = Qf(null, t, r, e, n);
            break e;
          case 11:
            t = Xf(null, t, r, e, n);
            break e;
          case 14:
            t = Kf(null, t, r, at(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : at(r, o)),
        Ka(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : at(r, o)),
        Qf(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((f0(t), e === null)) throw Error(T(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          $h(e, t),
          Cs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Ir(Error(T(423)), t)), (t = qf(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Ir(Error(T(424)), t)), (t = qf(e, t, r, n, o));
            break e;
          } else
            for (
              Ye = dn(t.stateNode.containerInfo.firstChild),
                Xe = t,
                ne = !0,
                ft = null,
                n = Fh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((br(), r === o)) {
            t = Ut(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        jh(t),
        e === null && Ha(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Da(r, o) ? (s = null) : i !== null && Da(r, i) && (t.flags |= 32),
        c0(e, t),
        Ne(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Ha(t), null;
    case 13:
      return d0(e, t, n);
    case 4:
      return (
        rc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Lr(t, null, r, n)) : Ne(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : at(r, o)),
        Xf(e, t, r, o, n)
      );
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          K(Es, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (ht(i.value, s)) {
            if (i.children === o.children && !je.current) {
              t = Ut(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = $t(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Wa(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(T(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Wa(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Ne(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Or(t, n),
        (o = ot(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ne(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = at(r, t.pendingProps)),
        (o = at(r.type, o)),
        Kf(e, t, r, o, n)
      );
    case 15:
      return a0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : at(r, o)),
        qi(e, t),
        (t.tag = 1),
        Ue(r) ? ((e = !0), ws(t)) : (e = !1),
        Or(t, n),
        zh(t, r, o),
        Ya(t, r, o, n),
        Qa(null, t, r, !0, e, n)
      );
    case 19:
      return p0(e, t, n);
    case 22:
      return u0(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function R0(e, t) {
  return th(e, t);
}
function Mg(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function tt(e, t, n, r) {
  return new Mg(e, t, n, r);
}
function yc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function zg(e) {
  if (typeof e == "function") return yc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === zu)) return 11;
    if (e === Du) return 14;
  }
  return 2;
}
function vn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = tt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ji(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) yc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case fr:
        return Bn(n.children, o, i, t);
      case Mu:
        (s = 8), (o |= 8);
        break;
      case va:
        return (
          (e = tt(12, n, t, o | 2)), (e.elementType = va), (e.lanes = i), e
        );
      case ga:
        return (e = tt(13, n, t, o)), (e.elementType = ga), (e.lanes = i), e;
      case ya:
        return (e = tt(19, n, t, o)), (e.elementType = ya), (e.lanes = i), e;
      case Dp:
        return Gs(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Mp:
              s = 10;
              break e;
            case zp:
              s = 9;
              break e;
            case zu:
              s = 11;
              break e;
            case Du:
              s = 14;
              break e;
            case Gt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = tt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Bn(e, t, n, r) {
  return (e = tt(7, e, r, t)), (e.lanes = n), e;
}
function Gs(e, t, n, r) {
  return (
    (e = tt(22, e, r, t)),
    (e.elementType = Dp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ql(e, t, n) {
  return (e = tt(6, e, null, t)), (e.lanes = n), e;
}
function ql(e, t, n) {
  return (
    (t = tt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Dg(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Nl(0)),
    (this.expirationTimes = Nl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Nl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function wc(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new Dg(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = tt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    nc(i),
    e
  );
}
function Fg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: cr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function N0(e) {
  if (!e) return En;
  e = e._reactInternals;
  e: {
    if (Gn(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ue(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ue(n)) return Rh(e, n, t);
  }
  return t;
}
function b0(e, t, n, r, o, i, s, l, a) {
  return (
    (e = wc(n, r, !0, e, o, i, s, l, a)),
    (e.context = N0(null)),
    (n = e.current),
    (r = Le()),
    (o = mn(n)),
    (i = $t(r, o)),
    (i.callback = t != null ? t : null),
    pn(n, i, o),
    (e.current.lanes = o),
    ni(e, o, r),
    Be(e, r),
    e
  );
}
function Js(e, t, n, r) {
  var o = t.current,
    i = Le(),
    s = mn(o);
  return (
    (n = N0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $t(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = pn(o, t, s)),
    e !== null && (pt(e, o, s, i), Xi(e, o, s)),
    s
  );
}
function Ls(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function sd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function xc(e, t) {
  sd(e, t), (e = e.alternate) && sd(e, t);
}
function jg() {
  return null;
}
var L0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Sc(e) {
  this._internalRoot = e;
}
el.prototype.render = Sc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  Js(e, t, null, null);
};
el.prototype.unmount = Sc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qn(function () {
      Js(null, e, null, null);
    }),
      (t[Ft] = null);
  }
};
function el(e) {
  this._internalRoot = e;
}
el.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ah();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nn.length && t !== 0 && t < nn[n].priority; n++);
    nn.splice(n, 0, e), n === 0 && ch(e);
  }
};
function Ec(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function tl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ld() {}
function Ug(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ls(s);
        i.call(u);
      };
    }
    var s = b0(t, r, e, 0, null, !1, !1, "", ld);
    return (
      (e._reactRootContainer = s),
      (e[Ft] = s.current),
      Fo(e.nodeType === 8 ? e.parentNode : e),
      Qn(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Ls(a);
      l.call(u);
    };
  }
  var a = wc(e, 0, !1, null, null, !1, !1, "", ld);
  return (
    (e._reactRootContainer = a),
    (e[Ft] = a.current),
    Fo(e.nodeType === 8 ? e.parentNode : e),
    Qn(function () {
      Js(t, a, n, r);
    }),
    a
  );
}
function nl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Ls(s);
        l.call(a);
      };
    }
    Js(t, s, e, o);
  } else s = Ug(n, t, e, o, r);
  return Ls(s);
}
sh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = uo(t.pendingLanes);
        n !== 0 &&
          (Uu(t, n | 1),
          Be(t, ce()),
          (U & 6) === 0 && (($r = ce() + 500), _n()));
      }
      break;
    case 13:
      Qn(function () {
        var r = jt(e, 1);
        if (r !== null) {
          var o = Le();
          pt(r, e, 1, o);
        }
      }),
        xc(e, 1);
  }
};
Bu = function (e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728);
    if (t !== null) {
      var n = Le();
      pt(t, e, 134217728, n);
    }
    xc(e, 134217728);
  }
};
lh = function (e) {
  if (e.tag === 13) {
    var t = mn(e),
      n = jt(e, t);
    if (n !== null) {
      var r = Le();
      pt(n, e, t, r);
    }
    xc(e, t);
  }
};
ah = function () {
  return V;
};
uh = function (e, t) {
  var n = V;
  try {
    return (V = e), t();
  } finally {
    V = n;
  }
};
Ta = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Sa(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Ys(r);
            if (!o) throw Error(T(90));
            jp(r), Sa(r, o);
          }
        }
      }
      break;
    case "textarea":
      Bp(e, n);
      break;
    case "select":
      (t = n.value), t != null && Er(e, !!n.multiple, t, !1);
  }
};
Qp = mc;
qp = Qn;
var Bg = { usingClientEntryPoint: !1, Events: [oi, mr, Ys, Xp, Kp, mc] },
  eo = {
    findFiberByHostInstance: $n,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Hg = {
    bundleType: eo.bundleType,
    version: eo.version,
    rendererPackageName: eo.rendererPackageName,
    rendererConfig: eo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Bt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Jp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: eo.findFiberByHostInstance || jg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!bi.isDisabled && bi.supportsFiber)
    try {
      (Bs = bi.inject(Hg)), (kt = bi);
    } catch {}
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bg;
qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ec(t)) throw Error(T(200));
  return Fg(e, t, null, n);
};
qe.createRoot = function (e, t) {
  if (!Ec(e)) throw Error(T(299));
  var n = !1,
    r = "",
    o = L0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = wc(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ft] = t.current),
    Fo(e.nodeType === 8 ? e.parentNode : e),
    new Sc(t)
  );
};
qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = Jp(t)), (e = e === null ? null : e.stateNode), e;
};
qe.flushSync = function (e) {
  return Qn(e);
};
qe.hydrate = function (e, t, n) {
  if (!tl(t)) throw Error(T(200));
  return nl(null, e, t, !0, n);
};
qe.hydrateRoot = function (e, t, n) {
  if (!Ec(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = L0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = b0(t, null, e, 1, n != null ? n : null, o, !1, i, s)),
    (e[Ft] = t.current),
    Fo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new el(t);
};
qe.render = function (e, t, n) {
  if (!tl(t)) throw Error(T(200));
  return nl(null, e, t, !1, n);
};
qe.unmountComponentAtNode = function (e) {
  if (!tl(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (Qn(function () {
        nl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ft] = null);
        });
      }),
      !0)
    : !1;
};
qe.unstable_batchedUpdates = mc;
qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!tl(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return nl(e, t, n, !1, r);
};
qe.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = qe);
})(Us);
const fo = Cp(Us.exports);
var ad = Us.exports;
(ha.createRoot = ad.createRoot), (ha.hydrateRoot = ad.hydrateRoot);
/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function As() {
  return (
    (As = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    As.apply(this, arguments)
  );
}
var an;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(an || (an = {}));
const ud = "popstate";
function Wg(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: l } = r.location;
    return lu(
      "",
      { pathname: i, search: s, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : au(o);
  }
  return Yg(t, n, null, e);
}
function Vg() {
  return Math.random().toString(36).substr(2, 8);
}
function cd(e) {
  return { usr: e.state, key: e.key };
}
function lu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    As(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Br(t) : t,
      { state: n, key: (t && t.key) || r || Vg() }
    )
  );
}
function au(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Br(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Yg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    l = an.Pop,
    a = null;
  function u() {
    (l = an.Pop), a && a({ action: l, location: d.location });
  }
  function c(g, m) {
    l = an.Push;
    let v = lu(d.location, g, m);
    n && n(v, g);
    let S = cd(v),
      h = d.createHref(v);
    try {
      s.pushState(S, "", h);
    } catch {
      o.location.assign(h);
    }
    i && a && a({ action: l, location: v });
  }
  function f(g, m) {
    l = an.Replace;
    let v = lu(d.location, g, m);
    n && n(v, g);
    let S = cd(v),
      h = d.createHref(v);
    s.replaceState(S, "", h), i && a && a({ action: l, location: v });
  }
  let d = {
    get action() {
      return l;
    },
    get location() {
      return e(o, s);
    },
    listen(g) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(ud, u),
        (a = g),
        () => {
          o.removeEventListener(ud, u), (a = null);
        }
      );
    },
    createHref(g) {
      return t(o, g);
    },
    push: c,
    replace: f,
    go(g) {
      return s.go(g);
    },
  };
  return d;
}
var fd;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(fd || (fd = {}));
function Xg(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Br(t) : t,
    o = I0(r.pathname || "/", n);
  if (o == null) return null;
  let i = A0(e);
  Kg(i);
  let s = null;
  for (let l = 0; s == null && l < i.length; ++l) s = ry(i[l], o);
  return s;
}
function A0(e, t, n, r) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""),
    e.forEach((o, i) => {
      let s = {
        relativePath: o.path || "",
        caseSensitive: o.caseSensitive === !0,
        childrenIndex: i,
        route: o,
      };
      s.relativePath.startsWith("/") &&
        (ye(
          s.relativePath.startsWith(r),
          'Absolute route path "' +
            s.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes."
        ),
        (s.relativePath = s.relativePath.slice(r.length)));
      let l = gn([r, s.relativePath]),
        a = n.concat(s);
      o.children &&
        o.children.length > 0 &&
        (ye(
          o.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + l + '".')
        ),
        A0(o.children, t, a, l)),
        !(o.path == null && !o.index) &&
          t.push({ path: l, score: ty(l, o.index), routesMeta: a });
    }),
    t
  );
}
function Kg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : ny(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Qg = /^:\w+$/,
  qg = 3,
  Zg = 2,
  Gg = 1,
  Jg = 10,
  ey = -2,
  dd = (e) => e === "*";
function ty(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(dd) && (r += ey),
    t && (r += Zg),
    n
      .filter((o) => !dd(o))
      .reduce((o, i) => o + (Qg.test(i) ? qg : i === "" ? Gg : Jg), r)
  );
}
function ny(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function ry(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s],
      a = s === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = oy(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = l.route;
    i.push({
      params: r,
      pathname: gn([o, c.pathname]),
      pathnameBase: uy(gn([o, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (o = gn([o, c.pathnameBase]));
  }
  return i;
}
function oy(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = iy(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      if (c === "*") {
        let d = l[f] || "";
        s = i.slice(0, i.length - d.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = sy(l[f] || "", c)), u;
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function iy(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    $0(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/:(\w+)/g, (s, l) => (r.push(l), "([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function sy(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      $0(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function I0(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function ye(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function $0(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ly(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Br(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : ay(n, t)) : t,
    search: cy(r),
    hash: fy(o),
  };
}
function ay(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Zl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function M0(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Br(e))
    : ((o = As({}, e)),
      ye(
        !o.pathname || !o.pathname.includes("?"),
        Zl("?", "pathname", "search", o)
      ),
      ye(
        !o.pathname || !o.pathname.includes("#"),
        Zl("#", "pathname", "hash", o)
      ),
      ye(!o.search || !o.search.includes("#"), Zl("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    l;
  if (r || s == null) l = n;
  else {
    let f = t.length - 1;
    if (s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) d.shift(), (f -= 1);
      o.pathname = d.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let a = ly(o, l),
    u = s && s !== "/" && s.endsWith("/"),
    c = (i || s === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const gn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  uy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  cy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  fy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class dy {
  constructor(t, n, r) {
    (this.status = t), (this.statusText = n || ""), (this.data = r);
  }
}
function py(e) {
  return e instanceof dy;
}
var rl = { exports: {} },
  ol = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hy = x.exports,
  my = Symbol.for("react.element"),
  vy = Symbol.for("react.fragment"),
  gy = Object.prototype.hasOwnProperty,
  yy = hy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  wy = { key: !0, ref: !0, __self: !0, __source: !0 };
function z0(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) gy.call(t, r) && !wy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: my,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: yy.current,
  };
}
ol.Fragment = vy;
ol.jsx = z0;
ol.jsxs = z0;
(function (e) {
  e.exports = ol;
})(rl);
const D0 = rl.exports.Fragment,
  w = rl.exports.jsx,
  I = rl.exports.jsxs;
/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function uu() {
  return (
    (uu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    uu.apply(this, arguments)
  );
}
function xy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Sy = typeof Object.is == "function" ? Object.is : xy,
  { useState: Ey, useEffect: ky, useLayoutEffect: Cy, useDebugValue: _y } = No;
function Oy(e, t, n) {
  const r = t(),
    [{ inst: o }, i] = Ey({ inst: { value: r, getSnapshot: t } });
  return (
    Cy(() => {
      (o.value = r), (o.getSnapshot = t), Gl(o) && i({ inst: o });
    }, [e, r, t]),
    ky(
      () => (
        Gl(o) && i({ inst: o }),
        e(() => {
          Gl(o) && i({ inst: o });
        })
      ),
      [e]
    ),
    _y(r),
    r
  );
}
function Gl(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Sy(n, r);
  } catch {
    return !0;
  }
}
function Py(e, t, n) {
  return t();
}
const Ty =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ry = !Ty,
  Ny = Ry ? Py : Oy;
"useSyncExternalStore" in No && ((e) => e.useSyncExternalStore)(No);
const by = x.exports.createContext(null),
  Ly = x.exports.createContext(null),
  F0 = x.exports.createContext(null),
  kc = x.exports.createContext(null),
  il = x.exports.createContext(null),
  si = x.exports.createContext({ outlet: null, matches: [] }),
  j0 = x.exports.createContext(null);
function Ay(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  li() || ye(!1);
  let { basename: r, navigator: o } = x.exports.useContext(kc),
    { hash: i, pathname: s, search: l } = H0(e, { relative: n }),
    a = s;
  return (
    r !== "/" && (a = s === "/" ? r : gn([r, s])),
    o.createHref({ pathname: a, search: l, hash: i })
  );
}
function li() {
  return x.exports.useContext(il) != null;
}
function Jn() {
  return li() || ye(!1), x.exports.useContext(il).location;
}
function U0(e) {
  return e.filter(
    (t, n) =>
      n === 0 || (!t.route.index && t.pathnameBase !== e[n - 1].pathnameBase)
  );
}
function B0() {
  li() || ye(!1);
  let { basename: e, navigator: t } = x.exports.useContext(kc),
    { matches: n } = x.exports.useContext(si),
    { pathname: r } = Jn(),
    o = JSON.stringify(U0(n).map((l) => l.pathnameBase)),
    i = x.exports.useRef(!1);
  return (
    x.exports.useEffect(() => {
      i.current = !0;
    }),
    x.exports.useCallback(
      function (l, a) {
        if ((a === void 0 && (a = {}), !i.current)) return;
        if (typeof l == "number") {
          t.go(l);
          return;
        }
        let u = M0(l, JSON.parse(o), r, a.relative === "path");
        e !== "/" &&
          (u.pathname = u.pathname === "/" ? e : gn([e, u.pathname])),
          (a.replace ? t.replace : t.push)(u, a.state, a);
      },
      [e, t, o, r]
    )
  );
}
function H0(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = x.exports.useContext(si),
    { pathname: o } = Jn(),
    i = JSON.stringify(U0(r).map((s) => s.pathnameBase));
  return x.exports.useMemo(
    () => M0(e, JSON.parse(i), o, n === "path"),
    [e, i, o, n]
  );
}
function Iy(e, t) {
  li() || ye(!1);
  let n = x.exports.useContext(F0),
    { matches: r } = x.exports.useContext(si),
    o = r[r.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : "/";
  o && o.route;
  let l = Jn(),
    a;
  if (t) {
    var u;
    let m = typeof t == "string" ? Br(t) : t;
    s === "/" ||
      ((u = m.pathname) == null ? void 0 : u.startsWith(s)) ||
      ye(!1),
      (a = m);
  } else a = l;
  let c = a.pathname || "/",
    f = s === "/" ? c : c.slice(s.length) || "/",
    d = Xg(e, { pathname: f }),
    g = Dy(
      d &&
        d.map((m) =>
          Object.assign({}, m, {
            params: Object.assign({}, i, m.params),
            pathname: gn([s, m.pathname]),
            pathnameBase: m.pathnameBase === "/" ? s : gn([s, m.pathnameBase]),
          })
        ),
      r,
      n || void 0
    );
  return t
    ? w(il.Provider, {
        value: {
          location: uu(
            {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
            },
            a
          ),
          navigationType: an.Pop,
        },
        children: g,
      })
    : g;
}
function $y() {
  let e = jy(),
    t = py(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: r },
    i = { padding: "2px 4px", backgroundColor: r };
  return I(D0, {
    children: [
      w("h2", { children: "Unhandled Thrown Error!" }),
      w("h3", { style: { fontStyle: "italic" }, children: t }),
      n ? w("pre", { style: o, children: n }) : null,
      w("p", { children: "\u{1F4BF} Hey developer \u{1F44B}" }),
      I("p", {
        children: [
          "You can provide a way better UX than this when your app throws errors by providing your own\xA0",
          w("code", { style: i, children: "errorElement" }),
          " props on\xA0",
          w("code", { style: i, children: "<Route>" }),
        ],
      }),
    ],
  });
}
class My extends x.exports.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? w(j0.Provider, {
          value: this.state.error,
          children: this.props.component,
        })
      : this.props.children;
  }
}
function zy(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = x.exports.useContext(by);
  return (
    o && n.route.errorElement && (o._deepestRenderedBoundaryId = n.route.id),
    w(si.Provider, { value: t, children: r })
  );
}
function Dy(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    o = n == null ? void 0 : n.errors;
  if (o != null) {
    let i = r.findIndex(
      (s) => s.route.id && (o == null ? void 0 : o[s.route.id])
    );
    i >= 0 || ye(!1), (r = r.slice(0, Math.min(r.length, i + 1)));
  }
  return r.reduceRight((i, s, l) => {
    let a = s.route.id ? (o == null ? void 0 : o[s.route.id]) : null,
      u = n ? s.route.errorElement || w($y, {}) : null,
      c = () =>
        w(zy, {
          match: s,
          routeContext: { outlet: i, matches: t.concat(r.slice(0, l + 1)) },
          children: a ? u : s.route.element !== void 0 ? s.route.element : i,
        });
    return n && (s.route.errorElement || l === 0)
      ? w(My, { location: n.location, component: u, error: a, children: c() })
      : c();
  }, null);
}
var pd;
(function (e) {
  e.UseRevalidator = "useRevalidator";
})(pd || (pd = {}));
var cu;
(function (e) {
  (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(cu || (cu = {}));
function Fy(e) {
  let t = x.exports.useContext(F0);
  return t || ye(!1), t;
}
function jy() {
  var e;
  let t = x.exports.useContext(j0),
    n = Fy(cu.UseRouteError),
    r = x.exports.useContext(si),
    o = r.matches[r.matches.length - 1];
  return (
    t ||
    (r || ye(!1),
    o.route.id || ye(!1),
    (e = n.errors) == null ? void 0 : e[o.route.id])
  );
}
function yt(e) {
  ye(!1);
}
function Uy(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = an.Pop,
    navigator: i,
    static: s = !1,
  } = e;
  li() && ye(!1);
  let l = t.replace(/^\/*/, "/"),
    a = x.exports.useMemo(
      () => ({ basename: l, navigator: i, static: s }),
      [l, i, s]
    );
  typeof r == "string" && (r = Br(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: f = "",
      state: d = null,
      key: g = "default",
    } = r,
    m = x.exports.useMemo(() => {
      let v = I0(u, l);
      return v == null
        ? null
        : { pathname: v, search: c, hash: f, state: d, key: g };
    }, [l, u, c, f, d, g]);
  return m == null
    ? null
    : w(kc.Provider, {
        value: a,
        children: w(il.Provider, {
          children: n,
          value: { location: m, navigationType: o },
        }),
      });
}
function By(e) {
  let { children: t, location: n } = e,
    r = x.exports.useContext(Ly),
    o = r && !t ? r.router.routes : fu(t);
  return Iy(o, n);
}
var hd;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(hd || (hd = {}));
new Promise(() => {});
function fu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.exports.Children.forEach(e, (r, o) => {
      if (!x.exports.isValidElement(r)) return;
      if (r.type === x.exports.Fragment) {
        n.push.apply(n, fu(r.props.children, t));
        return;
      }
      r.type !== yt && ye(!1), !r.props.index || !r.props.children || ye(!1);
      let i = [...t, o],
        s = {
          id: r.props.id || i.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (s.children = fu(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Hy(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Wy(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Vy(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Wy(e);
}
const Yy = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function Xy(e) {
  let { basename: t, children: n, window: r } = e,
    o = x.exports.useRef();
  o.current == null && (o.current = Wg({ window: r, v5Compat: !0 }));
  let i = o.current,
    [s, l] = x.exports.useState({ action: i.action, location: i.location });
  return (
    x.exports.useLayoutEffect(() => i.listen(l), [i]),
    w(Uy, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: i,
    })
  );
}
const An = x.exports.forwardRef(function (t, n) {
  let {
      onClick: r,
      relative: o,
      reloadDocument: i,
      replace: s,
      state: l,
      target: a,
      to: u,
      preventScrollReset: c,
    } = t,
    f = Hy(t, Yy),
    d = Ay(u, { relative: o }),
    g = Ky(u, {
      replace: s,
      state: l,
      target: a,
      preventScrollReset: c,
      relative: o,
    });
  function m(v) {
    r && r(v), v.defaultPrevented || g(v);
  }
  return w("a", { ...f, href: d, onClick: i ? r : m, ref: n, target: a });
});
var md;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(md || (md = {}));
var vd;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(vd || (vd = {}));
function Ky(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
    } = t === void 0 ? {} : t,
    l = B0(),
    a = Jn(),
    u = H0(e, { relative: s });
  return x.exports.useCallback(
    (c) => {
      if (Vy(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : au(a) === au(u);
        l(e, { replace: f, state: o, preventScrollReset: i, relative: s });
      }
    },
    [a, l, u, r, o, n, e, i, s]
  );
}
const Qy = "modulepreload",
  qy = function (e) {
    return "/" + e;
  },
  gd = {},
  Ht = function (t, n, r) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((o) => {
            if (((o = qy(o)), o in gd)) return;
            gd[o] = !0;
            const i = o.endsWith(".css"),
              s = i ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${o}"]${s}`)) return;
            const l = document.createElement("link");
            if (
              ((l.rel = i ? "stylesheet" : Qy),
              i || ((l.as = "script"), (l.crossOrigin = "")),
              (l.href = o),
              document.head.appendChild(l),
              i)
            )
              return new Promise((a, u) => {
                l.addEventListener("load", a),
                  l.addEventListener("error", () =>
                    u(new Error(`Unable to preload CSS for ${o}`))
                  );
              });
          })
        ).then(() => t());
  };
var W0 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (!!i) {
          var s = typeof i;
          if (s === "string" || s === "number") r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var l = n.apply(null, i);
              l && r.push(l);
            }
          } else if (s === "object") {
            if (
              i.toString !== Object.prototype.toString &&
              !i.toString.toString().includes("[native code]")
            ) {
              r.push(i.toString());
              continue;
            }
            for (var a in i) t.call(i, a) && i[a] && r.push(a);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(W0);
const Wt = W0.exports,
  Zy = ["xxl", "xl", "lg", "md", "sm", "xs"],
  Gy = "xs",
  Jy = x.exports.createContext({
    prefixes: {},
    breakpoints: Zy,
    minBreakpoint: Gy,
  });
function er(e, t) {
  const { prefixes: n } = x.exports.useContext(Jy);
  return e || n[t] || t;
}
function e2(e, t) {
  let n = 0;
  return x.exports.Children.map(e, (r) =>
    x.exports.isValidElement(r) ? t(r, n++) : r
  );
}
const yd = 1e3,
  t2 = {
    min: 0,
    max: 100,
    animated: !1,
    isChild: !1,
    visuallyHidden: !1,
    striped: !1,
  };
function n2(e, t, n) {
  const r = ((e - t) / (n - t)) * 100;
  return Math.round(r * yd) / yd;
}
function wd(
  {
    min: e,
    now: t,
    max: n,
    label: r,
    visuallyHidden: o,
    striped: i,
    animated: s,
    className: l,
    style: a,
    variant: u,
    bsPrefix: c,
    ...f
  },
  d
) {
  return w("div", {
    ref: d,
    ...f,
    role: "progressbar",
    className: Wt(l, `${c}-bar`, {
      [`bg-${u}`]: u,
      [`${c}-bar-animated`]: s,
      [`${c}-bar-striped`]: s || i,
    }),
    style: { width: `${n2(t, e, n)}%`, ...a },
    "aria-valuenow": t,
    "aria-valuemin": e,
    "aria-valuemax": n,
    children: o ? w("span", { className: "visually-hidden", children: r }) : r,
  });
}
const Cc = x.exports.forwardRef(({ isChild: e, ...t }, n) => {
  if (((t.bsPrefix = er(t.bsPrefix, "progress")), e)) return wd(t, n);
  const {
    min: r,
    now: o,
    max: i,
    label: s,
    visuallyHidden: l,
    striped: a,
    animated: u,
    bsPrefix: c,
    variant: f,
    className: d,
    children: g,
    ...m
  } = t;
  return w("div", {
    ref: n,
    ...m,
    className: Wt(d, c),
    children: g
      ? e2(g, (v) => x.exports.cloneElement(v, { isChild: !0 }))
      : wd(
          {
            min: r,
            now: o,
            max: i,
            label: s,
            visuallyHidden: l,
            striped: a,
            animated: u,
            bsPrefix: c,
            variant: f,
          },
          n
        ),
  });
});
Cc.displayName = "ProgressBar";
Cc.defaultProps = t2;
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ function du(e) {
  return typeof window.Node == "object"
    ? e instanceof window.Node
    : e !== null &&
        typeof e == "object" &&
        typeof e.nodeType == "number" &&
        typeof e.nodeName == "string";
}
/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ function r2(e) {
  var t = Object.prototype.toString.call(e),
    n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
  return typeof window.NodeList == "object"
    ? e instanceof window.NodeList
    : e !== null &&
        typeof e == "object" &&
        typeof e.length == "number" &&
        n.test(t) &&
        (e.length === 0 || du(e[0]));
}
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ function Ko(e, t) {
  if ((t === void 0 && (t = document), e instanceof Array)) return e.filter(du);
  if (du(e)) return [e];
  if (r2(e)) return Array.prototype.slice.call(e);
  if (typeof e == "string")
    try {
      var n = t.querySelectorAll(e);
      return Array.prototype.slice.call(n);
    } catch {
      return [];
    }
  return [];
}
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/ function pu(e) {
  if (e.constructor !== Array) throw new TypeError("Expected array.");
  if (e.length === 16) return e;
  if (e.length === 6) {
    var t = On();
    return (
      (t[0] = e[0]),
      (t[1] = e[1]),
      (t[4] = e[2]),
      (t[5] = e[3]),
      (t[12] = e[4]),
      (t[13] = e[5]),
      t
    );
  }
  throw new RangeError("Expected array with either 6 or 16 values.");
}
function On() {
  for (var e = [], t = 0; t < 16; t++) t % 5 == 0 ? e.push(1) : e.push(0);
  return e;
}
function o2(e, t) {
  for (var n = pu(e), r = pu(t), o = [], i = 0; i < 4; i++)
    for (var s = [n[i], n[i + 4], n[i + 8], n[i + 12]], l = 0; l < 4; l++) {
      var a = l * 4,
        u = [r[a], r[a + 1], r[a + 2], r[a + 3]],
        c = s[0] * u[0] + s[1] * u[1] + s[2] * u[2] + s[3] * u[3];
      o[i + a] = c;
    }
  return o;
}
function i2(e) {
  if (typeof e == "string") {
    var t = e.match(/matrix(3d)?\(([^)]+)\)/);
    if (t) {
      var n = t[2].split(", ").map(parseFloat);
      return pu(n);
    }
  }
  return On();
}
function s2(e) {
  var t = (Math.PI / 180) * e,
    n = On();
  return (
    (n[5] = n[10] = Math.cos(t)), (n[6] = n[9] = Math.sin(t)), (n[9] *= -1), n
  );
}
function l2(e) {
  var t = (Math.PI / 180) * e,
    n = On();
  return (
    (n[0] = n[10] = Math.cos(t)), (n[2] = n[8] = Math.sin(t)), (n[2] *= -1), n
  );
}
function a2(e) {
  var t = (Math.PI / 180) * e,
    n = On();
  return (
    (n[0] = n[5] = Math.cos(t)), (n[1] = n[4] = Math.sin(t)), (n[4] *= -1), n
  );
}
function xd(e, t) {
  var n = On();
  return (n[0] = e), (n[5] = typeof t == "number" ? t : e), n;
}
function u2(e) {
  var t = On();
  return (t[12] = e), t;
}
function c2(e) {
  var t = On();
  return (t[13] = e), t;
}
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ var V0 = (function () {
    var e = Date.now();
    return function (t) {
      var n = Date.now();
      n - e > 16
        ? ((e = n), t(n))
        : setTimeout(function () {
            return V0(t);
          }, 0);
    };
  })(),
  f2 =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    V0;
/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/ var Y0 = {
  delay: 0,
  distance: "0",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  origin: "bottom",
  rotate: { x: 0, y: 0, z: 0 },
  scale: 1,
  cleanup: !1,
  container: document.documentElement,
  desktop: !0,
  mobile: !0,
  reset: !1,
  useDelay: "always",
  viewFactor: 0,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  afterReset: function () {},
  afterReveal: function () {},
  beforeReset: function () {},
  beforeReveal: function () {},
};
function d2() {
  return (
    document.documentElement.classList.remove("sr"),
    {
      clean: function () {},
      destroy: function () {},
      reveal: function () {},
      sync: function () {},
      get noop() {
        return !0;
      },
    }
  );
}
function p2() {
  document.documentElement.classList.add("sr"),
    document.body
      ? (document.body.style.height = "100%")
      : document.addEventListener("DOMContentLoaded", function () {
          document.body.style.height = "100%";
        });
}
var to = { success: p2, failure: d2 };
function es(e) {
  return (
    e !== null &&
    e instanceof Object &&
    (e.constructor === Object ||
      Object.prototype.toString.call(e) === "[object Object]")
  );
}
function Z(e, t) {
  if (es(e)) {
    var n = Object.keys(e);
    return n.forEach(function (r) {
      return t(e[r], r, e);
    });
  }
  if (e instanceof Array)
    return e.forEach(function (r, o) {
      return t(r, o, e);
    });
  throw new TypeError("Expected either an array or object literal.");
}
function Dn(e) {
  for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
  if (this.constructor.debug && console) {
    var r = "%cScrollReveal: " + e;
    t.forEach(function (o) {
      return (r +=
        `
 \u2014 ` + o);
    }),
      console.log(r, "color: #ea654b;");
  }
}
function X0() {
  var e = this,
    t = function () {
      return { active: [], stale: [] };
    },
    n = t(),
    r = t(),
    o = t();
  try {
    Z(Ko("[data-sr-id]"), function (i) {
      var s = parseInt(i.getAttribute("data-sr-id"));
      n.active.push(s);
    });
  } catch (i) {
    throw i;
  }
  Z(this.store.elements, function (i) {
    n.active.indexOf(i.id) === -1 && n.stale.push(i.id);
  }),
    Z(n.stale, function (i) {
      return delete e.store.elements[i];
    }),
    Z(this.store.elements, function (i) {
      o.active.indexOf(i.containerId) === -1 && o.active.push(i.containerId),
        i.hasOwnProperty("sequence") &&
          r.active.indexOf(i.sequence.id) === -1 &&
          r.active.push(i.sequence.id);
    }),
    Z(this.store.containers, function (i) {
      o.active.indexOf(i.id) === -1 && o.stale.push(i.id);
    }),
    Z(o.stale, function (i) {
      var s = e.store.containers[i].node;
      s.removeEventListener("scroll", e.delegate),
        s.removeEventListener("resize", e.delegate),
        delete e.store.containers[i];
    }),
    Z(this.store.sequences, function (i) {
      r.active.indexOf(i.id) === -1 && r.stale.push(i.id);
    }),
    Z(r.stale, function (i) {
      return delete e.store.sequences[i];
    });
}
var Sd = (function () {
  var e = {},
    t = document.documentElement.style;
  function n(r, o) {
    if ((o === void 0 && (o = t), r && typeof r == "string")) {
      if (e[r]) return e[r];
      if (typeof o[r] == "string") return (e[r] = r);
      if (typeof o["-webkit-" + r] == "string") return (e[r] = "-webkit-" + r);
      throw new RangeError('Unable to find "' + r + '" style property.');
    }
    throw new TypeError("Expected a string.");
  }
  return (
    (n.clearCache = function () {
      return (e = {});
    }),
    n
  );
})();
function h2(e) {
  var t = window.getComputedStyle(e.node),
    n = t.position,
    r = e.config,
    o = {},
    i = e.node.getAttribute("style") || "",
    s = i.match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
  (o.computed = s
    ? s
        .map(function (R) {
          return R.trim();
        })
        .join("; ") + ";"
    : ""),
    (o.generated = s.some(function (R) {
      return R.match(/visibility\s?:\s?visible/i);
    })
      ? o.computed
      : s
          .concat(["visibility: visible"])
          .map(function (R) {
            return R.trim();
          })
          .join("; ") + ";");
  var l = parseFloat(t.opacity),
    a = isNaN(parseFloat(r.opacity))
      ? parseFloat(t.opacity)
      : parseFloat(r.opacity),
    u = {
      computed: l !== a ? "opacity: " + l + ";" : "",
      generated: l !== a ? "opacity: " + a + ";" : "",
    },
    c = [];
  if (parseFloat(r.distance)) {
    var f = r.origin === "top" || r.origin === "bottom" ? "Y" : "X",
      d = r.distance;
    (r.origin === "top" || r.origin === "left") &&
      (d = /^-/.test(d) ? d.substr(1) : "-" + d);
    var g = d.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),
      m = g[0],
      v = g[1];
    switch (v) {
      case "em":
        d = parseInt(t.fontSize) * m;
        break;
      case "px":
        d = m;
        break;
      case "%":
        d =
          f === "Y"
            ? (e.node.getBoundingClientRect().height * m) / 100
            : (e.node.getBoundingClientRect().width * m) / 100;
        break;
      default:
        throw new RangeError("Unrecognized or missing distance unit.");
    }
    f === "Y" ? c.push(c2(d)) : c.push(u2(d));
  }
  r.rotate.x && c.push(s2(r.rotate.x)),
    r.rotate.y && c.push(l2(r.rotate.y)),
    r.rotate.z && c.push(a2(r.rotate.z)),
    r.scale !== 1 && (r.scale === 0 ? c.push(xd(2e-4)) : c.push(xd(r.scale)));
  var S = {};
  if (c.length) {
    (S.property = Sd("transform")),
      (S.computed = { raw: t[S.property], matrix: i2(t[S.property]) }),
      c.unshift(S.computed.matrix);
    var h = c.reduce(o2);
    S.generated = {
      initial: S.property + ": matrix3d(" + h.join(", ") + ");",
      final: S.property + ": matrix3d(" + S.computed.matrix.join(", ") + ");",
    };
  } else S.generated = { initial: "", final: "" };
  var p = {};
  if (u.generated || S.generated.initial) {
    (p.property = Sd("transition")),
      (p.computed = t[p.property]),
      (p.fragments = []);
    var y = r.delay,
      E = r.duration,
      k = r.easing;
    u.generated &&
      p.fragments.push({
        delayed: "opacity " + E / 1e3 + "s " + k + " " + y / 1e3 + "s",
        instant: "opacity " + E / 1e3 + "s " + k + " 0s",
      }),
      S.generated.initial &&
        p.fragments.push({
          delayed: S.property + " " + E / 1e3 + "s " + k + " " + y / 1e3 + "s",
          instant: S.property + " " + E / 1e3 + "s " + k + " 0s",
        });
    var _ = p.computed && !p.computed.match(/all 0s|none 0s/);
    _ && p.fragments.unshift({ delayed: p.computed, instant: p.computed });
    var C = p.fragments.reduce(
      function (R, $, N) {
        return (
          (R.delayed += N === 0 ? $.delayed : ", " + $.delayed),
          (R.instant += N === 0 ? $.instant : ", " + $.instant),
          R
        );
      },
      { delayed: "", instant: "" }
    );
    p.generated = {
      delayed: p.property + ": " + C.delayed + ";",
      instant: p.property + ": " + C.instant + ";",
    };
  } else p.generated = { delayed: "", instant: "" };
  return { inline: o, opacity: u, position: n, transform: S, transition: p };
}
function Hr(e, t) {
  t.split(";").forEach(function (n) {
    var r = n.split(":"),
      o = r[0],
      i = r.slice(1);
    o && i && (e.style[o.trim()] = i.join(":"));
  });
}
function _c(e) {
  var t = this,
    n;
  try {
    Z(Ko(e), function (r) {
      var o = r.getAttribute("data-sr-id");
      if (o !== null) {
        n = !0;
        var i = t.store.elements[o];
        i.callbackTimer && window.clearTimeout(i.callbackTimer.clock),
          Hr(i.node, i.styles.inline.generated),
          r.removeAttribute("data-sr-id"),
          delete t.store.elements[o];
      }
    });
  } catch (r) {
    return Dn.call(this, "Clean failed.", r.message);
  }
  if (n)
    try {
      X0.call(this);
    } catch (r) {
      return Dn.call(this, "Clean failed.", r.message);
    }
}
function m2() {
  var e = this;
  Z(this.store.elements, function (t) {
    Hr(t.node, t.styles.inline.generated), t.node.removeAttribute("data-sr-id");
  }),
    Z(this.store.containers, function (t) {
      var n = t.node === document.documentElement ? window : t.node;
      n.removeEventListener("scroll", e.delegate),
        n.removeEventListener("resize", e.delegate);
    }),
    (this.store = { containers: {}, elements: {}, history: [], sequences: {} });
}
function Qo(e) {
  for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
  if (es(e))
    return (
      Z(t, function (r) {
        Z(r, function (o, i) {
          es(o)
            ? ((!e[i] || !es(e[i])) && (e[i] = {}), Qo(e[i], o))
            : (e[i] = o);
        });
      }),
      e
    );
  throw new TypeError("Target must be an object literal.");
}
function Is(e) {
  return (
    e === void 0 && (e = navigator.userAgent),
    /Android|iPhone|iPad|iPod/i.test(e)
  );
}
var hu = (function () {
  var e = 0;
  return function () {
    return e++;
  };
})();
function K0() {
  var e = this;
  X0.call(this),
    Z(this.store.elements, function (t) {
      var n = [t.styles.inline.generated];
      t.visible
        ? (n.push(t.styles.opacity.computed),
          n.push(t.styles.transform.generated.final),
          (t.revealed = !0))
        : (n.push(t.styles.opacity.generated),
          n.push(t.styles.transform.generated.initial),
          (t.revealed = !1)),
        Hr(
          t.node,
          n
            .filter(function (r) {
              return r !== "";
            })
            .join(" ")
        );
    }),
    Z(this.store.containers, function (t) {
      var n = t.node === document.documentElement ? window : t.node;
      n.addEventListener("scroll", e.delegate),
        n.addEventListener("resize", e.delegate);
    }),
    this.delegate(),
    (this.initTimeout = null);
}
function po(e, t) {
  t === void 0 && (t = {});
  var n = t.pristine || this.pristine,
    r =
      e.config.useDelay === "always" ||
      (e.config.useDelay === "onload" && n) ||
      (e.config.useDelay === "once" && !e.seen),
    o = e.visible && !e.revealed,
    i = !e.visible && e.revealed && e.config.reset;
  if (t.reveal || o) return v2.call(this, e, r);
  if (t.reset || i) return g2.call(this, e);
}
function v2(e, t) {
  var n = [
    e.styles.inline.generated,
    e.styles.opacity.computed,
    e.styles.transform.generated.final,
  ];
  t
    ? n.push(e.styles.transition.generated.delayed)
    : n.push(e.styles.transition.generated.instant),
    (e.revealed = e.seen = !0),
    Hr(
      e.node,
      n
        .filter(function (r) {
          return r !== "";
        })
        .join(" ")
    ),
    Q0.call(this, e, t);
}
function g2(e) {
  var t = [
    e.styles.inline.generated,
    e.styles.opacity.generated,
    e.styles.transform.generated.initial,
    e.styles.transition.generated.instant,
  ];
  (e.revealed = !1),
    Hr(
      e.node,
      t
        .filter(function (n) {
          return n !== "";
        })
        .join(" ")
    ),
    Q0.call(this, e);
}
function Q0(e, t) {
  var n = this,
    r = t ? e.config.duration + e.config.delay : e.config.duration,
    o = e.revealed ? e.config.beforeReveal : e.config.beforeReset,
    i = e.revealed ? e.config.afterReveal : e.config.afterReset,
    s = 0;
  e.callbackTimer &&
    ((s = Date.now() - e.callbackTimer.start),
    window.clearTimeout(e.callbackTimer.clock)),
    o(e.node),
    (e.callbackTimer = {
      start: Date.now(),
      clock: window.setTimeout(function () {
        i(e.node),
          (e.callbackTimer = null),
          e.revealed &&
            !e.config.reset &&
            e.config.cleanup &&
            _c.call(n, e.node);
      }, r - s),
    });
}
function q0(e, t) {
  if (
    (t === void 0 && (t = this.pristine),
    !e.visible && e.revealed && e.config.reset)
  )
    return po.call(this, e, { reset: !0 });
  var n = this.store.sequences[e.sequence.id],
    r = e.sequence.index;
  if (n) {
    var o = new Ed(n, "visible", this.store),
      i = new Ed(n, "revealed", this.store);
    if (((n.models = { visible: o, revealed: i }), !i.body.length)) {
      var s = n.members[o.body[0]],
        l = this.store.elements[s];
      if (l)
        return (
          Li.call(this, n, o.body[0], -1, t),
          Li.call(this, n, o.body[0], 1, t),
          po.call(this, l, { reveal: !0, pristine: t })
        );
    }
    if (
      !n.blocked.head &&
      r === [].concat(i.head).pop() &&
      r >= [].concat(o.body).shift()
    )
      return (
        Li.call(this, n, r, -1, t),
        po.call(this, e, { reveal: !0, pristine: t })
      );
    if (
      !n.blocked.foot &&
      r === [].concat(i.foot).shift() &&
      r <= [].concat(o.body).pop()
    )
      return (
        Li.call(this, n, r, 1, t), po.call(this, e, { reveal: !0, pristine: t })
      );
  }
}
function y2(e) {
  var t = Math.abs(e);
  if (!isNaN(t))
    (this.id = hu()),
      (this.interval = Math.max(t, 16)),
      (this.members = []),
      (this.models = {}),
      (this.blocked = { head: !1, foot: !1 });
  else throw new RangeError("Invalid sequence interval.");
}
function Ed(e, t, n) {
  var r = this;
  (this.head = []),
    (this.body = []),
    (this.foot = []),
    Z(e.members, function (o, i) {
      var s = n.elements[o];
      s && s[t] && r.body.push(i);
    }),
    this.body.length &&
      Z(e.members, function (o, i) {
        var s = n.elements[o];
        s && !s[t] && (i < r.body[0] ? r.head.push(i) : r.foot.push(i));
      });
}
function Li(e, t, n, r) {
  var o = this,
    i = ["head", null, "foot"][1 + n],
    s = e.members[t + n],
    l = this.store.elements[s];
  (e.blocked[i] = !0),
    setTimeout(function () {
      (e.blocked[i] = !1), l && q0.call(o, l, r);
    }, e.interval);
}
function Z0(e, t, n) {
  var r = this;
  t === void 0 && (t = {}), n === void 0 && (n = !1);
  var o = [],
    i,
    s = t.interval || Y0.interval;
  try {
    s && (i = new y2(s));
    var l = Ko(e);
    if (!l.length) throw new Error("Invalid reveal target.");
    var a = l.reduce(function (u, c) {
      var f = {},
        d = c.getAttribute("data-sr-id");
      d
        ? (Qo(f, r.store.elements[d]), Hr(f.node, f.styles.inline.computed))
        : ((f.id = hu()),
          (f.node = c),
          (f.seen = !1),
          (f.revealed = !1),
          (f.visible = !1));
      var g = Qo({}, f.config || r.defaults, t);
      if ((!g.mobile && Is()) || (!g.desktop && !Is()))
        return d && _c.call(r, f), u;
      var m = Ko(g.container)[0];
      if (!m) throw new Error("Invalid container.");
      if (!m.contains(c)) return u;
      var v;
      return (
        (v = w2(m, o, r.store.containers)),
        v === null && ((v = hu()), o.push({ id: v, node: m })),
        (f.config = g),
        (f.containerId = v),
        (f.styles = h2(f)),
        i &&
          ((f.sequence = { id: i.id, index: i.members.length }),
          i.members.push(f.id)),
        u.push(f),
        u
      );
    }, []);
    Z(a, function (u) {
      (r.store.elements[u.id] = u), u.node.setAttribute("data-sr-id", u.id);
    });
  } catch (u) {
    return Dn.call(this, "Reveal failed.", u.message);
  }
  Z(o, function (u) {
    r.store.containers[u.id] = { id: u.id, node: u.node };
  }),
    i && (this.store.sequences[i.id] = i),
    n !== !0 &&
      (this.store.history.push({ target: e, options: t }),
      this.initTimeout && window.clearTimeout(this.initTimeout),
      (this.initTimeout = window.setTimeout(K0.bind(this), 0)));
}
function w2(e) {
  for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
  var r = null;
  return (
    Z(t, function (o) {
      Z(o, function (i) {
        r === null && i.node === e && (r = i.id);
      });
    }),
    r
  );
}
function x2() {
  var e = this;
  Z(this.store.history, function (t) {
    Z0.call(e, t.target, t.options, !0);
  }),
    K0.call(this);
}
var S2 = function (e) {
    return (e > 0) - (e < 0) || +e;
  },
  kd = Math.sign || S2;
function Cd(e, t) {
  var n = t ? e.node.clientHeight : e.node.offsetHeight,
    r = t ? e.node.clientWidth : e.node.offsetWidth,
    o = 0,
    i = 0,
    s = e.node;
  do
    isNaN(s.offsetTop) || (o += s.offsetTop),
      isNaN(s.offsetLeft) || (i += s.offsetLeft),
      (s = s.offsetParent);
  while (s);
  return {
    bounds: { top: o, right: i + r, bottom: o + n, left: i },
    height: n,
    width: r,
  };
}
function E2(e) {
  var t, n;
  return (
    e.node === document.documentElement
      ? ((t = window.pageYOffset), (n = window.pageXOffset))
      : ((t = e.node.scrollTop), (n = e.node.scrollLeft)),
    { top: t, left: n }
  );
}
function k2(e) {
  e === void 0 && (e = {});
  var t = this.store.containers[e.containerId];
  if (!!t) {
    var n = Math.max(0, Math.min(1, e.config.viewFactor)),
      r = e.config.viewOffset,
      o = {
        top: e.geometry.bounds.top + e.geometry.height * n,
        right: e.geometry.bounds.right - e.geometry.width * n,
        bottom: e.geometry.bounds.bottom - e.geometry.height * n,
        left: e.geometry.bounds.left + e.geometry.width * n,
      },
      i = {
        top: t.geometry.bounds.top + t.scroll.top + r.top,
        right: t.geometry.bounds.right + t.scroll.left - r.right,
        bottom: t.geometry.bounds.bottom + t.scroll.top - r.bottom,
        left: t.geometry.bounds.left + t.scroll.left + r.left,
      };
    return (
      (o.top < i.bottom &&
        o.right > i.left &&
        o.bottom > i.top &&
        o.left < i.right) ||
      e.styles.position === "fixed"
    );
  }
}
function C2(e, t) {
  var n = this;
  e === void 0 && (e = { type: "init" }),
    t === void 0 && (t = this.store.elements),
    f2(function () {
      var r = e.type === "init" || e.type === "resize";
      Z(n.store.containers, function (o) {
        r && (o.geometry = Cd.call(n, o, !0));
        var i = E2.call(n, o);
        o.scroll &&
          (o.direction = {
            x: kd(i.left - o.scroll.left),
            y: kd(i.top - o.scroll.top),
          }),
          (o.scroll = i);
      }),
        Z(t, function (o) {
          (r || o.geometry === void 0) && (o.geometry = Cd.call(n, o)),
            (o.visible = k2.call(n, o));
        }),
        Z(t, function (o) {
          o.sequence ? q0.call(n, o) : po.call(n, o);
        }),
        (n.pristine = !1);
    });
}
function _2() {
  var e = document.documentElement.style;
  return "transform" in e || "WebkitTransform" in e;
}
function O2() {
  var e = document.documentElement.style;
  return "transition" in e || "WebkitTransition" in e;
}
var P2 = "4.0.9",
  Jl,
  ea,
  ta,
  na,
  ra,
  qt,
  oa,
  ia;
function Hn(e) {
  e === void 0 && (e = {});
  var t = typeof this > "u" || Object.getPrototypeOf(this) !== Hn.prototype;
  if (t) return new Hn(e);
  if (!Hn.isSupported())
    return (
      Dn.call(this, "Instantiation failed.", "This browser is not supported."),
      to.failure()
    );
  var n;
  try {
    n = qt ? Qo({}, qt, e) : Qo({}, Y0, e);
  } catch (o) {
    return Dn.call(this, "Invalid configuration.", o.message), to.failure();
  }
  try {
    var r = Ko(n.container)[0];
    if (!r) throw new Error("Invalid container.");
  } catch (o) {
    return Dn.call(this, o.message), to.failure();
  }
  return (
    (qt = n),
    (!qt.mobile && Is()) || (!qt.desktop && !Is())
      ? (Dn.call(
          this,
          "This device is disabled.",
          "desktop: " + qt.desktop,
          "mobile: " + qt.mobile
        ),
        to.failure())
      : (to.success(),
        (this.store = {
          containers: {},
          elements: {},
          history: [],
          sequences: {},
        }),
        (this.pristine = !0),
        (Jl = Jl || C2.bind(this)),
        (ea = ea || m2.bind(this)),
        (ta = ta || Z0.bind(this)),
        (na = na || _c.bind(this)),
        (ra = ra || x2.bind(this)),
        Object.defineProperty(this, "delegate", {
          get: function () {
            return Jl;
          },
        }),
        Object.defineProperty(this, "destroy", {
          get: function () {
            return ea;
          },
        }),
        Object.defineProperty(this, "reveal", {
          get: function () {
            return ta;
          },
        }),
        Object.defineProperty(this, "clean", {
          get: function () {
            return na;
          },
        }),
        Object.defineProperty(this, "sync", {
          get: function () {
            return ra;
          },
        }),
        Object.defineProperty(this, "defaults", {
          get: function () {
            return qt;
          },
        }),
        Object.defineProperty(this, "version", {
          get: function () {
            return P2;
          },
        }),
        Object.defineProperty(this, "noop", {
          get: function () {
            return !1;
          },
        }),
        ia || (ia = this))
  );
}
Hn.isSupported = function () {
  return _2() && O2();
};
Object.defineProperty(Hn, "debug", {
  get: function () {
    return oa || !1;
  },
  set: function (e) {
    return (oa = typeof e == "boolean" ? e : oa);
  },
});
Hn();
const T2 = {
    duration: 1e3,
    delay: 0,
    scale: 1,
    opacity: 0.2,
    easing: "ease-in-out",
    reset: !1,
    distance: "20px",
    origin: "bottom",
  },
  _d = {
    START: "Sun Sep 07 2022 20:00:00 GMT+0200 (Central European Summer Time)",
    END: "Wed Sep 24 2022 18:00:00 GMT+0200 (Central European Summer Time)",
  };
function D() {
  return (
    (D = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    D.apply(this, arguments)
  );
}
function Ae(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Od(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function R2(e) {
  var t = N2(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function N2(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function b2(e, t, n) {
  var r = x.exports.useRef(e !== void 0),
    o = x.exports.useState(t),
    i = o[0],
    s = o[1],
    l = e !== void 0,
    a = r.current;
  return (
    (r.current = l),
    !l && a && i !== t && s(t),
    [
      l ? e : i,
      x.exports.useCallback(
        function (u) {
          for (
            var c = arguments.length, f = new Array(c > 1 ? c - 1 : 0), d = 1;
            d < c;
            d++
          )
            f[d - 1] = arguments[d];
          n && n.apply(void 0, [u].concat(f)), s(u);
        },
        [n]
      ),
    ]
  );
}
function L2(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var o,
      i = n,
      s = i[Od(r)],
      l = i[r],
      a = Ae(i, [Od(r), r].map(R2)),
      u = t[r],
      c = b2(l, s, e[u]),
      f = c[0],
      d = c[1];
    return D({}, a, ((o = {}), (o[r] = f), (o[u] = d), o));
  }, e);
}
function mu(e, t) {
  return (
    (mu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    mu(e, t)
  );
}
function A2(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    mu(e, t);
}
function I2(e) {
  return (e && e.ownerDocument) || document;
}
function $2(e) {
  var t = I2(e);
  return (t && t.defaultView) || window;
}
function M2(e, t) {
  return $2(e).getComputedStyle(e, t);
}
var z2 = /([A-Z])/g;
function D2(e) {
  return e.replace(z2, "-$1").toLowerCase();
}
var F2 = /^ms-/;
function Ai(e) {
  return D2(e).replace(F2, "-ms-");
}
var j2 =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function U2(e) {
  return !!(e && j2.test(e));
}
function $s(e, t) {
  var n = "",
    r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(Ai(t)) || M2(e).getPropertyValue(Ai(t));
  Object.keys(t).forEach(function (o) {
    var i = t[o];
    !i && i !== 0
      ? e.style.removeProperty(Ai(o))
      : U2(o)
      ? (r += o + "(" + i + ") ")
      : (n += Ai(o) + ": " + i + ";");
  }),
    r && (n += "transform: " + r + ";"),
    (e.style.cssText += ";" + n);
}
const Pd = { disabled: !1 },
  G0 = ae.createContext(null);
var B2 = function (t) {
    return t.scrollTop;
  },
  ho = "unmounted",
  en = "exited",
  tn = "entering",
  In = "entered",
  Ms = "exiting",
  Vt = (function (e) {
    A2(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = o,
        l = s && !s.isMounting ? r.enter : r.appear,
        a;
      return (
        (i.appearStatus = null),
        r.in
          ? l
            ? ((a = en), (i.appearStatus = tn))
            : (a = In)
          : r.unmountOnExit || r.mountOnEnter
          ? (a = ho)
          : (a = en),
        (i.state = { status: a }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === ho ? { status: en } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== tn && s !== In && (i = tn)
            : (s === tn || s === In) && (i = Ms);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          l;
        return (
          (i = s = l = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (s = o.enter),
            (l = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: l }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === tn)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : fo.findDOMNode(this);
              s && B2(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === en &&
            this.setState({ status: ho });
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          l = this.context ? this.context.isMounting : o,
          a = this.props.nodeRef ? [l] : [fo.findDOMNode(this), l],
          u = a[0],
          c = a[1],
          f = this.getTimeouts(),
          d = l ? f.appear : f.enter;
        if ((!o && !s) || Pd.disabled) {
          this.safeSetState({ status: In }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: tn }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(d, function () {
                i.safeSetState({ status: In }, function () {
                  i.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          l = this.props.nodeRef ? void 0 : fo.findDOMNode(this);
        if (!i || Pd.disabled) {
          this.safeSetState({ status: en }, function () {
            o.props.onExited(l);
          });
          return;
        }
        this.props.onExit(l),
          this.safeSetState({ status: Ms }, function () {
            o.props.onExiting(l),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: en }, function () {
                  o.props.onExited(l);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (l) {
            s && ((s = !1), (i.nextCallback = null), o(l));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : fo.findDOMNode(this),
          l = o == null && !this.props.addEndListener;
        if (!s || l) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var a = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = a[0],
            c = a[1];
          this.props.addEndListener(u, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === ho) return null;
        var i = this.props,
          s = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var l = Ae(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return w(G0.Provider, {
          value: null,
          children:
            typeof s == "function"
              ? s(o, l)
              : ae.cloneElement(ae.Children.only(s), l),
        });
      }),
      t
    );
  })(ae.Component);
Vt.contextType = G0;
Vt.propTypes = {};
function rr() {}
Vt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: rr,
  onEntering: rr,
  onEntered: rr,
  onExit: rr,
  onExiting: rr,
  onExited: rr,
};
Vt.UNMOUNTED = ho;
Vt.EXITED = en;
Vt.ENTERING = tn;
Vt.ENTERED = In;
Vt.EXITING = Ms;
const Oc = Vt,
  H2 = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
var vu = !1,
  gu = !1;
try {
  var sa = {
    get passive() {
      return (vu = !0);
    },
    get once() {
      return (gu = vu = !0);
    },
  };
  H2 &&
    (window.addEventListener("test", sa, sa),
    window.removeEventListener("test", sa, !0));
} catch {}
function W2(e, t, n, r) {
  if (r && typeof r != "boolean" && !gu) {
    var o = r.once,
      i = r.capture,
      s = n;
    !gu &&
      o &&
      ((s =
        n.__once ||
        function l(a) {
          this.removeEventListener(t, l, i), n.call(this, a);
        }),
      (n.__once = s)),
      e.addEventListener(t, s, vu ? r : i);
  }
  e.addEventListener(t, n, r);
}
function V2(e, t, n, r) {
  var o = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, o),
    n.__once && e.removeEventListener(t, n.__once, o);
}
function J0(e, t, n, r) {
  return (
    W2(e, t, n, r),
    function () {
      V2(e, t, n, r);
    }
  );
}
function Y2(e, t, n, r) {
  if ((n === void 0 && (n = !1), r === void 0 && (r = !0), e)) {
    var o = document.createEvent("HTMLEvents");
    o.initEvent(t, n, r), e.dispatchEvent(o);
  }
}
function X2(e) {
  var t = $s(e, "transitionDuration") || "",
    n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function K2(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1,
    o = setTimeout(function () {
      r || Y2(e, "transitionend", !0);
    }, t + n),
    i = J0(
      e,
      "transitionend",
      function () {
        r = !0;
      },
      { once: !0 }
    );
  return function () {
    clearTimeout(o), i();
  };
}
function Q2(e, t, n, r) {
  n == null && (n = X2(e) || 0);
  var o = K2(e, n, r),
    i = J0(e, "transitionend", t);
  return function () {
    o(), i();
  };
}
function Td(e, t) {
  const n = $s(e, t) || "",
    r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function q2(e, t) {
  const n = Td(e, "transitionDuration"),
    r = Td(e, "transitionDelay"),
    o = Q2(
      e,
      (i) => {
        i.target === e && (o(), t(i));
      },
      n + r
    );
}
function no(...e) {
  return e
    .filter((t) => t != null)
    .reduce((t, n) => {
      if (typeof n != "function")
        throw new Error(
          "Invalid Argument Type, must only provide functions, undefined, or null."
        );
      return t === null
        ? n
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          };
    }, null);
}
function Z2(e) {
  e.offsetHeight;
}
var Rd = function (t) {
  return !t || typeof t == "function"
    ? t
    : function (n) {
        t.current = n;
      };
};
function G2(e, t) {
  var n = Rd(e),
    r = Rd(t);
  return function (o) {
    n && n(o), r && r(o);
  };
}
function J2(e, t) {
  return x.exports.useMemo(
    function () {
      return G2(e, t);
    },
    [e, t]
  );
}
function ew(e) {
  return e && "setState" in e ? fo.findDOMNode(e) : e != null ? e : null;
}
const tw = ae.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: o,
        onExited: i,
        addEndListener: s,
        children: l,
        childRef: a,
        ...u
      },
      c
    ) => {
      const f = x.exports.useRef(null),
        d = J2(f, a),
        g = (_) => {
          d(ew(_));
        },
        m = (_) => (C) => {
          _ && f.current && _(f.current, C);
        },
        v = x.exports.useCallback(m(e), [e]),
        S = x.exports.useCallback(m(t), [t]),
        h = x.exports.useCallback(m(n), [n]),
        p = x.exports.useCallback(m(r), [r]),
        y = x.exports.useCallback(m(o), [o]),
        E = x.exports.useCallback(m(i), [i]),
        k = x.exports.useCallback(m(s), [s]);
      return w(Oc, {
        ref: c,
        ...u,
        onEnter: v,
        onEntered: h,
        onEntering: S,
        onExit: p,
        onExited: E,
        onExiting: y,
        addEndListener: k,
        nodeRef: f,
        children:
          typeof l == "function"
            ? (_, C) => l(_, { ...C, ref: g })
            : ae.cloneElement(l, { ref: g }),
      });
    }
  ),
  nw = {
    height: ["marginTop", "marginBottom"],
    width: ["marginLeft", "marginRight"],
  };
function em(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`,
    r = t[n],
    o = nw[e];
  return r + parseInt($s(t, o[0]), 10) + parseInt($s(t, o[1]), 10);
}
const rw = {
    [en]: "collapse",
    [Ms]: "collapsing",
    [tn]: "collapsing",
    [In]: "collapse show",
  },
  ow = {
    in: !1,
    timeout: 300,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    getDimensionValue: em,
  },
  tm = ae.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: o,
        className: i,
        children: s,
        dimension: l = "height",
        getDimensionValue: a = em,
        ...u
      },
      c
    ) => {
      const f = typeof l == "function" ? l() : l,
        d = x.exports.useMemo(
          () =>
            no((h) => {
              h.style[f] = "0";
            }, e),
          [f, e]
        ),
        g = x.exports.useMemo(
          () =>
            no((h) => {
              const p = `scroll${f[0].toUpperCase()}${f.slice(1)}`;
              h.style[f] = `${h[p]}px`;
            }, t),
          [f, t]
        ),
        m = x.exports.useMemo(
          () =>
            no((h) => {
              h.style[f] = null;
            }, n),
          [f, n]
        ),
        v = x.exports.useMemo(
          () =>
            no((h) => {
              (h.style[f] = `${a(f, h)}px`), Z2(h);
            }, r),
          [r, a, f]
        ),
        S = x.exports.useMemo(
          () =>
            no((h) => {
              h.style[f] = null;
            }, o),
          [f, o]
        );
      return w(tw, {
        ref: c,
        addEndListener: q2,
        ...u,
        "aria-expanded": u.role ? u.in : null,
        onEnter: d,
        onEntering: g,
        onEntered: m,
        onExit: v,
        onExiting: S,
        childRef: s.ref,
        children: (h, p) =>
          ae.cloneElement(s, {
            ...p,
            className: Wt(
              i,
              s.props.className,
              rw[h],
              f === "width" && "collapse-horizontal"
            ),
          }),
      });
    }
  );
tm.defaultProps = ow;
function nm(e, t) {
  return Array.isArray(e) ? e.includes(t) : e === t;
}
const ai = x.exports.createContext({});
ai.displayName = "AccordionContext";
const Pc = x.exports.forwardRef(
  (
    {
      as: e = "div",
      bsPrefix: t,
      className: n,
      children: r,
      eventKey: o,
      ...i
    },
    s
  ) => {
    const { activeEventKey: l } = x.exports.useContext(ai);
    return (
      (t = er(t, "accordion-collapse")),
      w(tm, {
        ref: s,
        in: nm(l, o),
        ...i,
        className: Wt(n, t),
        children: w(e, { children: x.exports.Children.only(r) }),
      })
    );
  }
);
Pc.displayName = "AccordionCollapse";
const sl = x.exports.createContext({ eventKey: "" });
sl.displayName = "AccordionItemContext";
const rm = x.exports.forwardRef(
  ({ as: e = "div", bsPrefix: t, className: n, ...r }, o) => {
    t = er(t, "accordion-body");
    const { eventKey: i } = x.exports.useContext(sl);
    return w(Pc, {
      eventKey: i,
      children: w(e, { ref: o, ...r, className: Wt(n, t) }),
    });
  }
);
rm.displayName = "AccordionBody";
function iw(e, t) {
  const {
    activeEventKey: n,
    onSelect: r,
    alwaysOpen: o,
  } = x.exports.useContext(ai);
  return (i) => {
    let s = e === n ? null : e;
    o &&
      (Array.isArray(n)
        ? n.includes(e)
          ? (s = n.filter((l) => l !== e))
          : (s = [...n, e])
        : (s = [e])),
      r == null || r(s, i),
      t == null || t(i);
  };
}
const Tc = x.exports.forwardRef(
  ({ as: e = "button", bsPrefix: t, className: n, onClick: r, ...o }, i) => {
    t = er(t, "accordion-button");
    const { eventKey: s } = x.exports.useContext(sl),
      l = iw(s, r),
      { activeEventKey: a } = x.exports.useContext(ai);
    return (
      e === "button" && (o.type = "button"),
      w(e, {
        ref: i,
        onClick: l,
        ...o,
        "aria-expanded": s === a,
        className: Wt(n, t, !nm(a, s) && "collapsed"),
      })
    );
  }
);
Tc.displayName = "AccordionButton";
const om = x.exports.forwardRef(
  (
    { as: e = "h2", bsPrefix: t, className: n, children: r, onClick: o, ...i },
    s
  ) => (
    (t = er(t, "accordion-header")),
    w(e, {
      ref: s,
      ...i,
      className: Wt(n, t),
      children: w(Tc, { onClick: o, children: r }),
    })
  )
);
om.displayName = "AccordionHeader";
const im = x.exports.forwardRef(
  ({ as: e = "div", bsPrefix: t, className: n, eventKey: r, ...o }, i) => {
    t = er(t, "accordion-item");
    const s = x.exports.useMemo(() => ({ eventKey: r }), [r]);
    return w(sl.Provider, {
      value: s,
      children: w(e, { ref: i, ...o, className: Wt(n, t) }),
    });
  }
);
im.displayName = "AccordionItem";
const sm = x.exports.forwardRef((e, t) => {
  const {
      as: n = "div",
      activeKey: r,
      bsPrefix: o,
      className: i,
      onSelect: s,
      flush: l,
      alwaysOpen: a,
      ...u
    } = L2(e, { activeKey: "onSelect" }),
    c = er(o, "accordion"),
    f = x.exports.useMemo(
      () => ({ activeEventKey: r, onSelect: s, alwaysOpen: a }),
      [r, s, a]
    );
  return w(ai.Provider, {
    value: f,
    children: w(n, { ref: t, ...u, className: Wt(i, c, l && `${c}-flush`) }),
  });
});
sm.displayName = "Accordion";
const Ii = Object.assign(sm, {
  Button: Tc,
  Collapse: Pc,
  Item: im,
  Header: om,
  Body: rm,
});
const sw = [
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum fugiat ratione ex exercitationem maxime facilis iste ut consequatur possimus cum tempora velit? Reiciendis natus porro, nobis fuga aut quasi!",
  },
  {
    title: "Lorem ipsum dolor.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum fugiat ratione ex exercitationem maxime facilis iste ut consequatur possimus cum tempora velit? Reiciendis natus porro, nobis fuga aut quasi!",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum fugiat ratione ex exercitationem maxime facilis iste ut consequatur possimus cum tempora velit? Reiciendis natus porro, nobis fuga aut quasi!",
  },
  {
    title: "Lorem ipsum dolor adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum fugiat ratione ex exercitationem maxime facilis iste ut consequatur possimus cum tempora velit? Reiciendis natus porro, nobis fuga aut quasi!",
  },
  {
    title: "Lorem consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum fugiat ratione ex exercitationem maxime facilis iste ut consequatur possimus cum tempora velit? Reiciendis natus porro, nobis fuga aut quasi!",
  },
];
function lw() {
  return w("section", {
    className: "dchf-faq mg-top-120 reveal",
    children: I("div", {
      className: "container",
      children: [
        w("div", {
          className: "row",
          children: w("div", {
            className: "col-md-10 col-lg-5",
            children: w("div", {
              className: "main-title reveal",
              children: I("h1", {
                className: "font-primary d-flex align-items-start",
                children: [
                  "FAQ",
                  " ",
                  w("span", {
                    className: "font-regular",
                    children: "Frequently Asked Questions",
                  }),
                ],
              }),
            }),
          }),
        }),
        w(Ii, {
          defaultActiveKey: "0",
          children: sw.map((e, t) =>
            I(
              Ii.Item,
              {
                eventKey: t.toString(),
                children: [
                  w(Ii.Header, {
                    children: I("div", {
                      className: "font-regular d-flex align-items-center",
                      children: [
                        w("div", { className: "circle", children: "Q" }),
                        " ",
                        e.title,
                      ],
                    }),
                  }),
                  w(Ii.Body, {
                    children: I("div", {
                      className: "font-regular d-flex",
                      children: [
                        w("div", {
                          className: "circle primary-color",
                          children: "A",
                        }),
                        e.desc,
                      ],
                    }),
                  }),
                ],
              },
              t
            )
          ),
        }),
      ],
    }),
  });
}
function aw() {
  const [e, t] = x.exports.useState(60),
    [n, r] = x.exports.useState(0),
    [o, i] = x.exports.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  x.exports.useEffect(() => {
    document.title = "Launch | DCHF";
    const a = Hn();
    return a.reveal(".reveal", T2), () => a.destroy();
  }, []);
  function s(a) {
    r((u) => a.target.valueAsNumber);
  }
  x.exports.useEffect(() => {
    l();
    const a = setInterval(() => l(), 1e3);
    return () => {
      clearInterval(a);
    };
  }, []);
  function l() {
    const a = new Date().getTime();
    let u = new Date(_d.START).getTime();
    const c = a > u ? a : u,
      d = new Date(_d.END).getTime() - c;
    let g = Math.ceil(d / 1e3),
      m = Math.ceil(g / 60),
      v = Math.floor(m / 60);
    const S = Math.floor(v / 24);
    (v %= 24),
      (m %= 60),
      (g %= 60),
      i({
        days: S < 0 ? 0 : S.toFixed(0),
        hours: v < 0 ? 0 : v < 10 ? "0" : v,
        minutes: m < 0 ? 0 : m < 10 ? "0" : m,
        seconds: g < 0 ? 0 : g < 10 ? "0" : g,
      });
  }
  return I("div", {
    className: "launch main",
    children: [
      I("section", {
        className: "hero",
        children: [
          w("div", {
            className: "dchf-container",
            children: I("div", {
              className: "hero-header",
              children: [
                w("h1", {
                  className: "font-bold reveal",
                  children: "Moneta Liquidity Bootstrapping",
                }),
                w("p", {
                  className: "font-regular reveal",
                  children:
                    "The Moneta token needs liquidity to be traded efficiently on Uniswap. The deposited ETH will be paired with MON tokens to equal a price of $1 at launch. As a participant of this Liquidity Bootstrapping program you are rewarded with double the amount in Moneta valued at $1. This means for $1 in ETH you\u2019ll receive $2 in Moneta vested over 6 months.",
                }),
              ],
            }),
          }),
          w("div", {
            className: "hero-background",
            style: { backgroundImage: "url(/img/general/dchf-mount.png)" },
          }),
        ],
      }),
      w("section", {
        className: "dchf-works reveal",
        children: w("div", {
          className: "dchf-container",
          children: I("div", {
            className: "dchf-wallet-stats d-flex flex-column flex-md-row",
            children: [
              I("div", {
                className: "left",
                children: [
                  I("div", {
                    className: "top",
                    children: [
                      w("img", {
                        width: 130,
                        src: "/img/launch/ethereum_coin.png",
                        alt: "",
                        className: "img-fluid",
                      }),
                      I("div", {
                        className:
                          "investments d-flex align-items-center justify-content-around",
                        children: [
                          I("div", {
                            className: "deposit",
                            children: [
                              w("span", {
                                className: "title op5 font-medium",
                                children: "Your Deposit",
                              }),
                              w("div", {
                                className: "value primary-color font-bold",
                                children: "- ETH",
                              }),
                              w("div", {
                                className: "currency op5 font-book",
                                children: "- CHF",
                              }),
                            ],
                          }),
                          I("div", {
                            className: "receive",
                            children: [
                              w("span", {
                                className: "title op5 font-medium",
                                children: "You Recieve",
                              }),
                              w("div", {
                                className: "value primary-color font-bold",
                                children: "- MON",
                              }),
                              w("div", {
                                className: "currency op5 font-book",
                                children: "- CHF",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  I("div", {
                    className: "bottom",
                    children: [
                      I("div", {
                        className: "dchf-form",
                        children: [
                          w("label", {
                            htmlFor: "deposit font-medium",
                            children: "Deposit ETH",
                          }),
                          I("div", {
                            className: "dchf-deposit-input",
                            children: [
                              w("input", {
                                id: "deposit",
                                type: "number",
                                className: "deposit-input font-bold",
                                value: n,
                                onChange: (a) => s(a),
                                placeholder: "0",
                              }),
                              I("div", {
                                className: "suffix d-flex align-items-center",
                                children: [
                                  I("div", {
                                    className: "balance font-regular",
                                    children: [
                                      "Balance:",
                                      w("div", {
                                        className: "value font-medium",
                                        children: "0.23 ETH",
                                      }),
                                    ],
                                  }),
                                  w("div", {
                                    className: "icon",
                                    children: I("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "20",
                                      height: "20",
                                      viewBox: "0 0 256 417",
                                      preserveAspectRatio: "xMidYMid",
                                      children: [
                                        w("path", {
                                          fill: "#343434",
                                          d: "M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z",
                                        }),
                                        w("path", {
                                          fill: "#8C8C8C",
                                          d: "M127.962 0L0 212.32l127.962 75.639V154.158z",
                                        }),
                                        w("path", {
                                          fill: "#3C3C3B",
                                          d: "M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z",
                                        }),
                                        w("path", {
                                          fill: "#8C8C8C",
                                          d: "M127.962 416.905v-104.72L0 236.585z",
                                        }),
                                        w("path", {
                                          fill: "#141414",
                                          d: "M127.961 287.958l127.96-75.637-127.96-58.162z",
                                        }),
                                        w("path", {
                                          fill: "#393939",
                                          d: "M0 212.32l127.96 75.638v-133.8z",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      w("a", {
                        type: "button",
                        className: "button button-primary self-end font-medium",
                        children: "Connect Wallet",
                      }),
                    ],
                  }),
                ],
              }),
              I("div", {
                className: "right",
                children: [
                  I("div", {
                    className:
                      "end-timer d-flex align-items-center justify-content-between",
                    children: [
                      w("span", {
                        className: "op5 font-regular",
                        children: "Ends in",
                      }),
                      I("div", {
                        className: "timer-boxes d-flex align-items-center",
                        children: [
                          I("div", {
                            className: "box day font-medium",
                            children: [o == null ? void 0 : o.days, "d"],
                          }),
                          I("div", {
                            className: "box h font-medium",
                            children: [o == null ? void 0 : o.hours, "h"],
                          }),
                          I("div", {
                            className: "box min font-medium",
                            children: [o == null ? void 0 : o.minutes, "m"],
                          }),
                          I("div", {
                            className: "box sec font-medium",
                            children: [o == null ? void 0 : o.seconds, "s"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  w("div", {
                    className: "status text-line font-medium",
                    children: w("span", { children: "STATUS" }),
                  }),
                  I("div", {
                    className: "total_invested d-flex justify-content-between",
                    children: [
                      w("span", {
                        className: "op5 font-regular",
                        children: "Total invested",
                      }),
                      I("div", {
                        className: "value font-medium",
                        children: [
                          "531.04 ETH",
                          w("div", {
                            className: "chf op5 font-regular",
                            children: "\u2248724,422 CHF",
                          }),
                        ],
                      }),
                    ],
                  }),
                  I("div", {
                    className: "progress-box",
                    children: [
                      w(Cc, { now: e }),
                      w("div", {
                        className: "start op5 font-regular",
                        children: "0 ETH",
                      }),
                      w("div", {
                        className: "end op5 font-regular",
                        children: "738 ETH",
                      }),
                    ],
                  }),
                  w("div", {
                    className: "info text-line font-medium",
                    children: w("span", { children: "INFO" }),
                  }),
                  I("div", {
                    className:
                      "max_total row_depo d-flex align-items-center justify-content-between",
                    children: [
                      w("span", {
                        className: "op5 font-regular",
                        children: "Max total supply",
                      }),
                      w("div", {
                        className: "value font-medium",
                        children: "100,000,000 MON",
                      }),
                    ],
                  }),
                  I("div", {
                    className:
                      "max_invest row_depo d-flex align-items-center justify-content-between",
                    children: [
                      w("span", {
                        className: "op5 font-regular",
                        children: "Max invest",
                      }),
                      w("div", {
                        className: "value font-medium",
                        children: "3 ETH",
                      }),
                    ],
                  }),
                  I("div", {
                    className:
                      "min_invest row_depo d-flex align-items-center justify-content-between",
                    children: [
                      w("span", {
                        className: "op5 font-regular",
                        children: "Min invest",
                      }),
                      w("div", {
                        className: "value font-medium",
                        children: "0.2 ETH",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      w(lw, {}),
    ],
  });
}
const Nd = x.exports.lazy(() =>
    Ht(
      () => import("./Discover.cc85da26.js"),
      [
        "assets/Discover.cc85da26.js",
        "assets/Discover.0c609db8.css",
        "assets/document.9215659b.js",
        "assets/helper.6caa5df2.js",
      ]
    )
  ),
  uw = x.exports.lazy(() =>
    Ht(
      () => import("./Moneta.84c748b6.js"),
      [
        "assets/Moneta.84c748b6.js",
        "assets/Moneta.e39c8a71.css",
        "assets/helper.6caa5df2.js",
        "assets/Partners.9862e9f0.js",
      ]
    )
  ),
  cw = x.exports.lazy(() =>
    Ht(
      () => import("./About.ce97fd2e.js"),
      [
        "assets/About.ce97fd2e.js",
        "assets/About.508d38d0.css",
        "assets/document.9215659b.js",
        "assets/helper.6caa5df2.js",
      ]
    )
  );
x.exports.lazy(() =>
  Ht(
    () => import("./Story.2ee1da7c.js"),
    [
      "assets/Story.2ee1da7c.js",
      "assets/Story.87d89545.css",
      "assets/Partners.9862e9f0.js",
    ]
  )
);
const fw = x.exports.lazy(() =>
    Ht(
      () => import("./Works.4ff14cd4.js"),
      ["assets/Works.4ff14cd4.js", "assets/Works.e44dc2af.css"]
    )
  ),
  dw = x.exports.lazy(() => Ht(() => import("./Terms.99640ee2.js"), [])),
  pw = x.exports.lazy(() => Ht(() => import("./Privacy.05aaffb4.js"), [])),
  hw = x.exports.lazy(() => Ht(() => import("./Imprint.dfcfbafb.js"), [])),
  mw = () =>
    I(By, {
      children: [
        w(yt, {
          index: !0,
          element: w(ae.Suspense, { fallback: w(Tt, {}), children: w(Nd, {}) }),
        }),
        w(yt, {
          path: "/moneta",
          element: w(ae.Suspense, { fallback: w(Tt, {}), children: w(uw, {}) }),
        }),
        w(yt, {
          path: "/launch",
          element: w(ae.Suspense, { fallback: w(Tt, {}), children: w(aw, {}) }),
        }),
        w(yt, {
          path: "/about",
          element: w(ae.Suspense, { fallback: w(Tt, {}), children: w(cw, {}) }),
        }),
        w(yt, {
          path: "/works",
          element: w(ae.Suspense, { fallback: w(Tt, {}), children: w(fw, {}) }),
        }),
        w(yt, {
          path: "/terms",
          element: w(ae.Suspense, { fallback: w(Tt, {}), children: w(dw, {}) }),
        }),
        w(yt, {
          path: "/privacy",
          element: w(ae.Suspense, { fallback: w(Tt, {}), children: w(pw, {}) }),
        }),
        w(yt, {
          path: "/imprint",
          element: w(ae.Suspense, { fallback: w(Tt, {}), children: w(hw, {}) }),
        }),
        w(yt, {
          path: "*",
          element: w(ae.Suspense, { fallback: w(Tt, {}), children: w(Nd, {}) }),
        }),
      ],
    }),
  Tt = () => w("div", { className: "app-loading" }),
  vw = {
    config: (e) => {
      try {
        gtag("config", "G-7B9RYDJ4DE", { page_path: e });
      } catch {}
    },
    setUserId: (e) => {
      try {
        gtag("set", { user_id: e });
      } catch {}
    },
  },
  gw = (e) =>
    x.exports.createElement(
      "svg",
      { width: 22, height: 22, xmlns: "http://www.w3.org/2000/svg", ...e },
      x.exports.createElement("path", {
        d: "M1.333 15.639a.5.5 0 0 1 .5-.5H11a.5.5 0 1 1 0 1H1.833a.5.5 0 0 1-.5-.5Z",
        fill: "var(--footer-icon-color)",
      }),
      x.exports.createElement("path", {
        d: "M7.324 2.405A5.912 5.912 0 0 0 2.333 8.25a.5.5 0 0 1-1 0A6.912 6.912 0 0 1 8.25 1.333a.5.5 0 0 1 .429.757l-.962 1.604a.5.5 0 1 1-.858-.514l.465-.775Zm6.365.283a4.625 4.625 0 1 1 6.54 6.54 4.625 4.625 0 0 1-6.54-6.54Zm3.27-.355a3.625 3.625 0 1 0 0 7.25 3.625 3.625 0 0 0 0-7.25Zm-14.367 10.8c-.145.143-.258.448-.258 1.259v3.767c0 .81.113 1.116.258 1.259.145.145.456.258 1.276.258h5.097c.82 0 1.132-.114 1.277-.258.144-.143.258-.448.258-1.259v-3.767c0-.81-.114-1.116-.258-1.259-.145-.144-.456-.258-1.277-.258H3.868c-.82 0-1.13.114-1.276.258Zm-.705-.71c.464-.46 1.17-.548 1.981-.548h5.097c.811 0 1.518.088 1.982.548.465.462.553 1.166.553 1.969v3.767c0 .803-.088 1.507-.553 1.969-.464.46-1.17.548-1.982.548H3.868c-.81 0-1.517-.088-1.98-.548-.466-.462-.554-1.166-.554-1.969v-3.767c0-.803.088-1.507.553-1.968Zm18.28.827a.5.5 0 0 1 .5.5 6.911 6.911 0 0 1-6.917 6.917.5.5 0 0 1-.429-.757l.963-1.605a.5.5 0 1 1 .858.514l-.465.776a5.914 5.914 0 0 0 4.99-5.845.5.5 0 0 1 .5-.5Z",
        fill: "var(--footer-icon-color)",
      })
    ),
  yw = (e) =>
    x.exports.createElement(
      "svg",
      { width: 22, height: 22, xmlns: "http://www.w3.org/2000/svg", ...e },
      x.exports.createElement("path", {
        fillRule: "evenodd",
        d: "M10.809 2.97c-.359 0-.69.063-.915.163h-.001l-5.41 2.403c-.73.322-.87.652-.87.798 0 .147.14.477.87.798v.001l5.41 2.403c.225.1.556.162.915.162.358 0 .69-.062.913-.162l.002-.001 5.408-2.402h.001c.73-.322.871-.652.871-.799 0-.146-.142-.476-.87-.797l-.002-.001-5.408-2.402a.539.539 0 0 1-.017-.008c-.224-.096-.547-.155-.897-.155Zm1.34-.741a.542.542 0 0 0-.018-.008c-.39-.175-.87-.25-1.322-.25-.453 0-.933.075-1.323.25L4.08 4.62c-.829.366-1.467.948-1.467 1.713 0 .766.637 1.347 1.466 1.713l5.407 2.401c.39.175.87.25 1.323.25.452 0 .932-.075 1.322-.25l5.405-2.4c.83-.366 1.468-.948 1.468-1.714 0-.765-.638-1.347-1.467-1.712l-5.388-2.393Z",
        fill: "var(--footer-icon-color)",
      }),
      x.exports.createElement("path", {
        d: "M2.75 9.583a.5.5 0 0 1 .5.5c0 .267.104.589.296.885.193.296.444.52.688.627l.002.001 6.223 2.77c.35.153.743.152 1.08 0l6.225-2.77h.002c.244-.108.496-.332.688-.628.192-.296.296-.618.296-.885a.5.5 0 0 1 1 0c0 .503-.185 1.01-.458 1.43-.272.419-.662.794-1.123.997h-.001l-6.22 2.77h-.001a2.33 2.33 0 0 1-1.891 0h-.002l-6.222-2.77H3.83c-.461-.203-.85-.578-1.123-.997-.273-.419-.458-.927-.458-1.43a.5.5 0 0 1 .5-.5Z",
        fill: "var(--footer-icon-color)",
      }),
      x.exports.createElement("path", {
        d: "M2.75 14.167a.5.5 0 0 1 .5.5 1.66 1.66 0 0 0 .986 1.513l6.223 2.77c.35.153.743.152 1.08 0l6.225-2.77a1.662 1.662 0 0 0 .986-1.514.5.5 0 1 1 1 .002 2.66 2.66 0 0 1-1.58 2.426l-6.222 2.77c-.6.268-1.289.267-1.893 0h-.001l-6.224-2.77a2.661 2.661 0 0 1-1.58-2.426.5.5 0 0 1 .5-.501Z",
        fill: "var(--footer-icon-color)",
      })
    ),
  ww = (e) =>
    x.exports.createElement(
      "svg",
      { width: 22, height: 22, xmlns: "http://www.w3.org/2000/svg", ...e },
      x.exports.createElement("path", {
        d: "M9.8 2.651s.001 0 0 0L4.36 5.794a2.41 2.41 0 0 0-1.192 2.07v6.27a2.39 2.39 0 0 0 1.19 2.07l5.444 3.143a2.4 2.4 0 0 0 2.389 0l5.441-3.142h.002a2.41 2.41 0 0 0 1.19-2.071V7.865a2.397 2.397 0 0 0-1.19-2.07L12.19 2.65a2.402 2.402 0 0 0-2.39 0Zm-.497-.867a3.4 3.4 0 0 1 3.385 0h.001l5.447 3.146a3.397 3.397 0 0 1 1.687 2.935v6.271a3.41 3.41 0 0 1-1.686 2.932l-.003.002-5.446 3.145a3.401 3.401 0 0 1-3.385 0L3.857 17.07a3.39 3.39 0 0 1-1.69-2.936v-6.27a3.41 3.41 0 0 1 1.687-2.933l.003-.002 5.446-3.145Z",
        fill: "var(--footer-icon-color)",
      }),
      x.exports.createElement("path", {
        d: "M10.99 5.312a2.636 2.636 0 1 1 .113 5.27 2.636 2.636 0 0 1-.114-5.27Zm.658 1.114a1.636 1.636 0 1 0-1.203 3.043 1.636 1.636 0 0 0 1.203-3.043Zm-4.815 8.846c0-2.018 1.965-3.489 4.167-3.489s4.167 1.471 4.167 3.488a.5.5 0 1 1-1 0c0-1.283-1.317-2.488-3.167-2.488-1.85 0-3.167 1.205-3.167 2.489a.5.5 0 1 1-1 0Z",
        fill: "var(--footer-icon-color)",
      })
    ),
  xw = (e) =>
    x.exports.createElement(
      "svg",
      { width: 22, height: 22, xmlns: "http://www.w3.org/2000/svg", ...e },
      x.exports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.3 14.956a.5.5 0 0 1 .5.5c0 1.203 1.134 2.194 2.78 2.194 1.637 0 2.774-.998 2.774-2.195h1v1.86c0 1.917-1.758 3.352-3.773 3.352-2.012 0-3.781-1.433-3.781-3.35v-1.86a.5.5 0 0 1 .5-.5Zm.536 2.736c.211 1.078 1.311 1.975 2.745 1.975 1.435 0 2.53-.898 2.737-1.979-.705.614-1.696.962-2.737.962-1.045 0-2.038-.345-2.745-.957Z",
        fill: "var(--footer-icon-color)",
      }),
      x.exports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.563 10.592c-.794 0-1.49.271-1.99.71-.493.431-.782 1.006-.782 1.63v.001c0 .348.095.689.275.986.432.702 1.36 1.209 2.506 1.209 1.15 0 2.075-.499 2.506-1.207a1.905 1.905 0 0 0 .275-.988c0-.626-.29-1.205-.79-1.623l-.006-.005a3.049 3.049 0 0 0-1.994-.713Zm3.79 2.306.001.035c0 .555-.155 1.064-.42 1.504v.003c-.652 1.071-1.945 1.688-3.362 1.688-1.42 0-2.709-.629-3.359-1.686l-.002-.003a2.905 2.905 0 0 1-.42-1.506m7.562-.035c-.01-.933-.45-1.77-1.147-2.354a4.049 4.049 0 0 0-2.643-.952c-1.022 0-1.956.35-2.648.958-.68.595-1.124 1.432-1.124 2.383",
        fill: "var(--footer-icon-color)",
      }),
      x.exports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.343 9.621a1.33 1.33 0 0 0-.963.4l-.009.009a1.34 1.34 0 0 0-.4 1.088v.005c.058.694.713 1.256 1.482 1.256h1.789a.44.44 0 0 0 .424-.437v-1.886a.44.44 0 0 0-.427-.435h-1.896Zm-1.673-.304a2.33 2.33 0 0 1 1.673-.696h1.924a1.44 1.44 0 0 1 1.399 1.435V11.947a1.442 1.442 0 0 1-1.403 1.432H17.453c-1.21 0-2.369-.885-2.478-2.17a2.34 2.34 0 0 1 .695-1.892Zm-9.09 1.266c-1.606 0-2.78 1.114-2.78 2.351v2.521c0 1.194 1.144 2.195 2.78 2.195 1.637 0 2.774-.99 2.774-2.196v-2.52c0-.626-.29-1.208-.781-1.64a3.045 3.045 0 0 0-1.992-.71ZM2.8 12.934c0-1.917 1.758-3.35 3.78-3.35 1.026 0 1.959.36 2.647.955l.004.002c.68.597 1.123 1.444 1.123 2.393v2.52c0 1.95-1.798 3.196-3.773 3.196-1.974 0-3.781-1.255-3.781-3.195v-2.52Z",
        fill: "var(--footer-icon-color)",
      }),
      x.exports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.417 3.707c-.234 0-.455.016-.667.05l-.014.001c-1.056.133-1.899.587-2.478 1.267-.581.682-.925 1.62-.925 2.765v1.835a.5.5 0 0 1-1 0V7.79c0-1.348.408-2.527 1.164-3.413.755-.886 1.83-1.448 3.108-1.61.264-.04.534-.06.812-.06h8.25c.246 0 .502.01.756.05 1.29.153 2.379.712 3.144 1.6.767.888 1.183 2.074 1.183 3.433v1.33a.5.5 0 0 1-.5.5h-1.907c-.38 0-.717.147-.962.399l-.01.01a1.34 1.34 0 0 0-.4 1.088v.005c.058.694.713 1.256 1.482 1.256h1.797a.5.5 0 0 1 .5.5v1.329c0 1.489-.498 2.768-1.407 3.676-.908.909-2.187 1.407-3.676 1.407h-2.292a.5.5 0 1 1 0-1h2.292c1.261 0 2.274-.418 2.97-1.114.695-.695 1.113-1.708 1.113-2.969v-.829h-1.297c-1.21 0-2.369-.885-2.478-2.17a2.339 2.339 0 0 1 .695-1.892 2.326 2.326 0 0 1 1.673-.696h1.407v-.83c0-1.152-.35-2.097-.94-2.78-.588-.682-1.443-1.136-2.514-1.26a3.776 3.776 0 0 0-.63-.043H6.418Z",
        fill: "var(--footer-icon-color)",
      })
    ),
  lm = () => {
    const [e] = x.exports.useState({
      dchf: [
        { path: "/", name: "Discover" },
        { path: "/about", name: "Why DCHF?" },
        { path: "/works", name: "How it works" },
      ],
      company: [
        { path: "/about-us", name: "About Us", soon: !0 },
        { path: "/careers", name: "Careers", soon: !0 },
        { path: "/contact-us", name: "Contact Us", soon: !0 },
        { path: "/legal-terms", name: "Legal Terms", soon: !0 },
        { path: "/cookie-settings", name: "Cookie Settings", soon: !0 },
      ],
      products: [
        { path: "https://app-defifranc-top.vercel.app/", name: "DCHF App" },
        { path: "https://monetadao.com/", name: "Moneta" },
        { path: "https://grizzly.fi/", name: "Grizzly.fi" },
      ],
      solutions: [
        {
          path: "/for-individuals",
          name: "For Individuals",
          icon: w(ww, { className: "me-2" }),
          soon: !0,
        },
        {
          path: "/for-merchants",
          name: "For Merchants",
          icon: w(xw, { className: "me-2" }),
          soon: !0,
        },
        {
          path: "/for-exchanges",
          name: "For Exchanges",
          icon: w(gw, { className: "me-2" }),
          soon: !0,
        },
        {
          path: "/for-developers",
          name: "For Developers",
          icon: w(yw, { className: "me-2" }),
          soon: !0,
        },
      ],
    });
    return [e];
  };
function Sw() {
  const e = Jn().pathname,
    [t, n] = x.exports.useState(!1),
    [r, o] = x.exports.useState(""),
    [i, s] = x.exports.useState(""),
    [l] = lm();
  x.exports.useEffect(() => {
    vw.config(e);
    let f = window.pageYOffset;
    const d = () => {
      const g = window.scrollY,
        m = g >= 50 ? "sticky" : "";
      if ((o(m), g <= 400)) {
        s("up");
        return;
      }
      const v = window.pageYOffset,
        S = v > f ? "down" : "up";
      S !== i && (v - f > 10 || v - f < -10) && s(S), (f = v > 0 ? v : 0);
    };
    return (
      window.addEventListener("scroll", d),
      () => {
        window.removeEventListener("scroll", d);
      }
    );
  }, [r, i]);
  const a = () =>
      l.dchf.map((d, g) =>
        w(
          x.exports.Fragment,
          {
            children: w("li", {
              onClick: c,
              className: e === d.path ? "active" : "",
              children: w(An, {
                className: "font-book",
                to: d.path,
                children: d.name,
              }),
            }),
          },
          g
        )
      ),
    u = () => {
      let f = !t;
      f
        ? document.body.classList.add("toggle-open")
        : document.body.classList.remove("toggle-open"),
        n(() => f);
    },
    c = () => {
      document.body.classList.remove("toggle-open"), n(() => !1);
    };
  return w("header", {
    className: `header ${r} ${i}`,
    children: w("div", {
      className: "dchf-container",
      children: I("div", {
        className: "header-wrap",
        children: [
          w("div", {
            className: "header-logo",
            children: w(An, {
              to: "/",
              children: e.includes("moneta")
                ? w("img", { src: "/img/logos/logo-moneta.svg", alt: "logo" })
                : w("img", {
                    src: "/img/logos/logo-dchf-black.svg",
                    alt: "logo",
                  }),
            }),
          }),
          w("div", {
            className: `header-menu ${t ? "is-open" : ""}`,
            children: I("ul", {
              children: [
                a(),
                w("li", {
                  className: "mobile",
                  children: e.includes("launch")
                    ? w("a", {
                        className: "button button-white",
                        children: "Connect Wallet",
                      })
                    : w("a", {
                        href: "https://app-defifranc-top.vercel.app/",
                        rel: "noreferrer",
                        target: "_blank",
                        className: "button button-white",
                        children: "Go to the App",
                      }),
                }),
              ],
            }),
          }),
          I("div", {
            className: "header-right",
            children: [
              w("div", {
                className: "header-button",
                children: e.includes("launch")
                  ? w("a", {
                      className: "button button-black",
                      children: "Connect Wallet",
                    })
                  : w("a", {
                      href: "https://app-defifranc-top.vercel.app/",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "button button-black",
                      children: "Go to the App",
                    }),
              }),
              w("button", {
                className: `main-menu-indicator btn-md ${t ? "is-open" : ""}`,
                onClick: u,
                children: w("span", { className: "line" }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const Ew = (e) =>
    x.exports.createElement(
      "svg",
      {
        width: 22,
        height: 20,
        viewBox: "0 0 22 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
      },
      x.exports.createElement("path", {
        d: "M20.706.264c-.36-.305-.925-.349-1.51-.114C18.58.396 1.79 7.598 1.105 7.893c-.124.043-1.21.448-1.098 1.35.1.814.973 1.15 1.08 1.19l4.268 1.461c.283.943 1.327 4.421 1.558 5.164.144.463.379 1.072.79 1.197.36.14.72.012.952-.17l2.61-2.42 4.213 3.285.1.06c.286.127.56.19.822.19.202 0 .396-.038.581-.114.631-.259.884-.86.91-.929L21.04 1.8c.192-.873-.075-1.318-.333-1.536zM9.12 12.479l-1.44 3.84-1.44-4.8 11.04-8.16-8.16 9.12z",
        fill: "#fff",
      })
    ),
  kw = (e) =>
    x.exports.createElement(
      "svg",
      {
        width: 25,
        height: 24,
        viewBox: "0 0 25 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
      },
      x.exports.createElement("path", {
        d: "M12.102 0c-6.627 0-12 5.373-12 12 0 5.623 3.872 10.328 9.092 11.63a1.751 1.751 0 0 1-.092-.583v-2.051H7.594c-.821 0-1.551-.353-1.905-1.009-.393-.729-.461-1.844-1.435-2.526-.29-.227-.07-.486.264-.451.615.174 1.125.596 1.605 1.222.478.627.703.769 1.596.769.433 0 1.08-.025 1.69-.121.329-.833.896-1.6 1.589-1.962-3.996-.411-5.903-2.399-5.903-5.098 0-1.162.495-2.286 1.336-3.233-.276-.94-.623-2.857.106-3.587 1.798 0 2.885 1.166 3.146 1.481A8.993 8.993 0 0 1 12.597 6c1.036 0 2.024.174 2.922.483C15.777 6.17 16.865 5 18.667 5c.732.731.38 2.656.102 3.594.836.945 1.328 2.066 1.328 3.226 0 2.697-1.904 4.684-5.894 5.097 1.098.573 1.899 2.183 1.899 3.396v2.734c0 .104-.023.179-.035.268 4.676-1.639 8.035-6.079 8.035-11.315 0-6.627-5.373-12-12-12z",
        fill: "#fff",
      })
    ),
  Cw = (e) =>
    x.exports.createElement(
      "svg",
      {
        width: 18,
        height: 14,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 18 14",
        ...e,
      },
      x.exports.createElement("path", {
        d: "M18 1.656a7.99 7.99 0 0 1-2.127.559A3.542 3.542 0 0 0 17.497.262c-.713.407-1.5.694-2.34.855A3.77 3.77 0 0 0 12.46 0c-2.043 0-3.686 1.587-3.686 3.533 0 .28.024.55.085.805-3.068-.141-5.783-1.55-7.606-3.693a3.425 3.425 0 0 0-.507 1.784c0 1.224.659 2.308 1.639 2.937a3.761 3.761 0 0 1-1.667-.436v.04C.72 6.683 2 8.11 3.677 8.438c-.301.079-.628.116-.968.116-.236 0-.474-.012-.698-.06.478 1.399 1.834 2.428 3.447 2.46a7.63 7.63 0 0 1-4.575 1.508c-.302 0-.592-.014-.883-.05A10.722 10.722 0 0 0 5.661 14c6.79 0 10.503-5.385 10.503-10.052 0-.156-.005-.306-.014-.457A7.194 7.194 0 0 0 18 1.656Z",
        fill: "var(--social-icon-color)",
      })
    ),
  _w = (e) =>
    x.exports.createElement(
      "svg",
      {
        width: 20,
        height: 14,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 14",
        ...e,
      },
      x.exports.createElement("path", {
        d: "M19.22 1.2C18.5.348 17.167 0 14.62 0H5.38c-2.604 0-3.96.37-4.679 1.28C0 2.164 0 3.47 0 5.276v3.444C0 12.221.832 14 5.38 14h9.24c2.208 0 3.43-.307 4.222-1.06C19.654 12.165 20 10.904 20 8.72V5.277c0-1.906-.054-3.219-.78-4.076Zm-6.38 6.275-4.196 2.18a.647.647 0 0 1-.944-.568V4.739a.64.64 0 0 1 .31-.549.648.648 0 0 1 .633-.02l4.196 2.166a.641.641 0 0 1 .001 1.139Z",
        fill: "var(--social-icon-color)",
      })
    ),
  Ow = (e) =>
    x.exports.createElement(
      "svg",
      {
        width: "800px",
        height: "800px",
        viewBox: "0 -28.5 256 256",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        preserveAspectRatio: "xMidYMid",
        ...e,
      },
      x.exports.createElement("path", {
        d: "M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z",
        fill: "#fff",
        fillRule: "nonzero",
      })
    );
function Pw() {
  var r;
  const e = Jn().pathname,
    [t] = lm();
  return w("footer", {
    className: "footer",
    children: w("div", {
      className: "container",
      children: w("div", {
        className: "row justify-content-center",
        children: I("div", {
          className: "col-md-12 col-lg-10 col-xl-10",
          children: [
            w("div", {
              className: "footer-center reveal mt-5",
              children: I("div", {
                className: "row",
                children: [
                  w("div", {
                    className: "col-12 col-sm-4",
                    children: I("div", {
                      className: "footer-menu",
                      children: [
                        w("span", { children: "DCHF" }),
                        w("ul", {
                          children: ((o) =>
                            o.map((s, l) =>
                              s.soon
                                ? w(
                                    x.exports.Fragment,
                                    {
                                      children: I("li", {
                                        children: [
                                          s.icon ? s.icon : "",
                                          w(An, {
                                            to: "#",
                                            className: "font-regular",
                                            children: s.name,
                                          }),
                                        ],
                                      }),
                                    },
                                    l
                                  )
                                : w(
                                    x.exports.Fragment,
                                    {
                                      children: I("li", {
                                        className: e === s.path ? "active" : "",
                                        children: [
                                          s.icon ? s.icon : "",
                                          s.path.includes("http")
                                            ? w("a", {
                                                className: "font-regular",
                                                href: s.path,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: s.name,
                                              })
                                            : w(An, {
                                                to: s.path,
                                                className: "font-regular",
                                                children: s.name,
                                              }),
                                        ],
                                      }),
                                    },
                                    l
                                  )
                            ))(t.dchf),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            w("div", {
              className: "footer-bottom",
              children: I("div", {
                className: "footer-bottom-wrap reveal",
                children: [
                  I("div", {
                    className: "footer-bottom-left",
                    children: [
                      w("div", {
                        className: "footer-logo",
                        children: w("img", {
                          src: "/img/logos/logo-dchf.svg",
                          alt: "logo-dchf",
                        }),
                      }),
                    ],
                  }),
                  w("div", {
                    className: "footer-bottom-right",
                    children: w("div", {
                      className: "footer-social",
                      children: I("ul", {
                        children: [
                          w("li", {
                            children: w("a", {
                              href: "https://t.me/",
                              rel: "noreferrer",
                              target: "_blank",
                              role: "button",
                              children: w(Ew, { width: 24, height: 24 }),
                            }),
                          }),
                          w("li", {
                            children: w("a", {
                              href: "https://x.com/",
                              rel: "noreferrer",
                              target: "_blank",
                              role: "button",
                              children: w(Cw, { width: 24, height: 24 }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  });
}
var Tw = 4,
  Rw = 0.001,
  Nw = 1e-7,
  bw = 10,
  mo = 11,
  $i = 1 / (mo - 1),
  Lw = typeof Float32Array == "function";
function am(e, t) {
  return 1 - 3 * t + 3 * e;
}
function um(e, t) {
  return 3 * t - 6 * e;
}
function cm(e) {
  return 3 * e;
}
function zs(e, t, n) {
  return ((am(t, n) * e + um(t, n)) * e + cm(t)) * e;
}
function fm(e, t, n) {
  return 3 * am(t, n) * e * e + 2 * um(t, n) * e + cm(t);
}
function Aw(e, t, n, r, o) {
  var i,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (i = zs(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > Nw && ++l < bw);
  return s;
}
function Iw(e, t, n, r) {
  for (var o = 0; o < Tw; ++o) {
    var i = fm(t, n, r);
    if (i === 0) return t;
    var s = zs(t, n, r) - e;
    t -= s / i;
  }
  return t;
}
function $w(e) {
  return e;
}
var bd = function (t, n, r, o) {
    if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
      throw new Error("bezier x values must be in [0, 1] range");
    if (t === n && r === o) return $w;
    for (var i = Lw ? new Float32Array(mo) : new Array(mo), s = 0; s < mo; ++s)
      i[s] = zs(s * $i, t, r);
    function l(a) {
      for (var u = 0, c = 1, f = mo - 1; c !== f && i[c] <= a; ++c) u += $i;
      --c;
      var d = (a - i[c]) / (i[c + 1] - i[c]),
        g = u + d * $i,
        m = fm(g, t, r);
      return m >= Rw ? Iw(a, g, t, r) : m === 0 ? g : Aw(a, u, u + $i, t, r);
    }
    return function (u) {
      return u === 0 ? 0 : u === 1 ? 1 : zs(l(u), n, o);
    };
  },
  Rc = function (t) {
    (this.startX = t.startX),
      (this.startY = t.startY),
      (this.endX = t.endX),
      (this.endY = t.endY),
      (this.totalX = this.endX - this.startX),
      (this.totalY = this.endY - this.startY),
      (this.startMultiplierX = t.startMultiplierX || 1),
      (this.endMultiplierX = t.endMultiplierX || 1),
      (this.startMultiplierY = t.startMultiplierY || 1),
      (this.endMultiplierY = t.endMultiplierY || 1);
  };
function yn() {
  return (
    (yn =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    yn.apply(this, arguments)
  );
}
var Ds;
(function (e) {
  (e.speed = "speed"),
    (e.translateX = "translateX"),
    (e.translateY = "translateY"),
    (e.rotate = "rotate"),
    (e.rotateX = "rotateX"),
    (e.rotateY = "rotateY"),
    (e.rotateZ = "rotateZ"),
    (e.scale = "scale"),
    (e.scaleX = "scaleX"),
    (e.scaleY = "scaleY"),
    (e.scaleZ = "scaleZ"),
    (e.opacity = "opacity");
})(Ds || (Ds = {}));
var Fn;
(function (e) {
  (e.px = "px"), (e["%"] = "%"), (e.vh = "vh"), (e.vw = "vw");
})(Fn || (Fn = {}));
var Oo;
(function (e) {
  (e.deg = "deg"), (e.turn = "turn"), (e.rad = "rad");
})(Oo || (Oo = {}));
var yu;
(function (e) {
  e[""] = "";
})(yu || (yu = {}));
var mt;
(function (e) {
  (e.vertical = "vertical"), (e.horizontal = "horizontal");
})(mt || (mt = {}));
var Ld;
(function (e) {
  (e.ease = "ease"),
    (e.easeIn = "easeIn"),
    (e.easeOut = "easeOut"),
    (e.easeInOut = "easeInOut"),
    (e.easeInQuad = "easeInQuad"),
    (e.easeInCubic = "easeInCubic"),
    (e.easeInQuart = "easeInQuart"),
    (e.easeInQuint = "easeInQuint"),
    (e.easeInSine = "easeInSine"),
    (e.easeInExpo = "easeInExpo"),
    (e.easeInCirc = "easeInCirc"),
    (e.easeOutQuad = "easeOutQuad"),
    (e.easeOutCubic = "easeOutCubic"),
    (e.easeOutQuart = "easeOutQuart"),
    (e.easeOutQuint = "easeOutQuint"),
    (e.easeOutSine = "easeOutSine"),
    (e.easeOutExpo = "easeOutExpo"),
    (e.easeOutCirc = "easeOutCirc"),
    (e.easeInOutQuad = "easeInOutQuad"),
    (e.easeInOutCubic = "easeInOutCubic"),
    (e.easeInOutQuart = "easeInOutQuart"),
    (e.easeInOutQuint = "easeInOutQuint"),
    (e.easeInOutSine = "easeInOutSine"),
    (e.easeInOutExpo = "easeInOutExpo"),
    (e.easeInOutCirc = "easeInOutCirc"),
    (e.easeInBack = "easeInBack"),
    (e.easeOutBack = "easeOutBack"),
    (e.easeInOutBack = "easeInOutBack");
})(Ld || (Ld = {}));
var Ad = 0;
function Mw() {
  return ++Ad, Ad;
}
var zw = (function () {
    function e(n) {
      var r = n.el.getBoundingClientRect();
      if (n.view.scrollContainer) {
        var o = n.view.scrollContainer.getBoundingClientRect();
        r = yn({}, r, {
          top: r.top - o.top,
          right: r.right - o.left,
          bottom: r.bottom - o.top,
          left: r.left - o.left,
        });
      }
      (this.height = n.el.offsetHeight),
        (this.width = n.el.offsetWidth),
        (this.left = r.left),
        (this.right = r.right),
        (this.top = r.top),
        (this.bottom = r.bottom),
        n.rootMargin && this._setRectWithRootMargin(n.rootMargin);
    }
    var t = e.prototype;
    return (
      (t._setRectWithRootMargin = function (r) {
        var o = r.top + r.bottom,
          i = r.left + r.right;
        (this.top -= r.top),
          (this.right += r.right),
          (this.bottom += r.bottom),
          (this.left -= r.left),
          (this.height += o),
          (this.width += i);
      }),
      e
    );
  })(),
  Dw = [yu[""], Fn.px, Fn["%"], Fn.vh, Fn.vw, Oo.deg, Oo.turn, Oo.rad];
function Mi(e, t) {
  t === void 0 && (t = Fn["%"]);
  var n = { value: 0, unit: t };
  if (typeof e > "u") return n;
  var r = typeof e == "number" || typeof e == "string";
  if (!r)
    throw new Error(
      "Invalid value provided. Must provide a value as a string or number"
    );
  (e = String(e)),
    (n.value = parseFloat(e)),
    (n.unit = e.match(/[\d.\-+]*\s*(.*)/)[1] || t);
  var o = Dw.includes(n.unit);
  if (!o) throw new Error("Invalid unit provided.");
  return n;
}
var Id = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
  easeInQuad: [0.55, 0.085, 0.68, 0.53],
  easeInCubic: [0.55, 0.055, 0.675, 0.19],
  easeInQuart: [0.895, 0.03, 0.685, 0.22],
  easeInQuint: [0.755, 0.05, 0.855, 0.06],
  easeInSine: [0.47, 0, 0.745, 0.715],
  easeInExpo: [0.95, 0.05, 0.795, 0.035],
  easeInCirc: [0.6, 0.04, 0.98, 0.335],
  easeOutQuad: [0.25, 0.46, 0.45, 0.94],
  easeOutCubic: [0.215, 0.61, 0.355, 1],
  easeOutQuart: [0.165, 0.84, 0.44, 1],
  easeOutQuint: [0.23, 1, 0.32, 1],
  easeOutSine: [0.39, 0.575, 0.565, 1],
  easeOutExpo: [0.19, 1, 0.22, 1],
  easeOutCirc: [0.075, 0.82, 0.165, 1],
  easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
  easeInOutCubic: [0.645, 0.045, 0.355, 1],
  easeInOutQuart: [0.77, 0, 0.175, 1],
  easeInOutQuint: [0.86, 0, 0.07, 1],
  easeInOutSine: [0.445, 0.05, 0.55, 0.95],
  easeInOutExpo: [1, 0, 0, 1],
  easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
  easeInBack: [0.6, -0.28, 0.735, 0.045],
  easeOutBack: [0.175, 0.885, 0.32, 1.275],
  easeInOutBack: [0.68, -0.55, 0.265, 1.55],
};
function dm(e) {
  if (Array.isArray(e)) return bd(e[0], e[1], e[2], e[3]);
  if (typeof e == "string" && typeof Id[e] < "u") {
    var t = Id[e];
    return bd(t[0], t[1], t[2], t[3]);
  }
}
var Fw = Object.values(Ds),
  jw = {
    speed: "px",
    translateX: "%",
    translateY: "%",
    rotate: "deg",
    rotateX: "deg",
    rotateY: "deg",
    rotateZ: "deg",
    scale: "",
    scaleX: "",
    scaleY: "",
    scaleZ: "",
    opacity: "",
  };
function $d(e, t) {
  var n = {};
  return (
    Fw.forEach(function (r) {
      var o = jw[r];
      if (typeof (e == null ? void 0 : e[r]) == "number") {
        var i = e == null ? void 0 : e[r],
          s = (i || 0) * 10 + "px",
          l = (i || 0) * -10 + "px",
          a = Mi(s),
          u = Mi(l),
          c = { start: a.value, end: u.value, unit: a.unit };
        t === mt.vertical && (n.translateY = c),
          t === mt.horizontal && (n.translateX = c);
      }
      if (Array.isArray(e == null ? void 0 : e[r])) {
        var f = e == null ? void 0 : e[r];
        if (typeof f[0] < "u" && typeof f[1] < "u") {
          var d = Mi(f == null ? void 0 : f[0], o),
            g = Mi(f == null ? void 0 : f[1], o),
            m = dm(f == null ? void 0 : f[2]);
          if (
            ((n[r] = { start: d.value, end: g.value, unit: d.unit, easing: m }),
            d.unit !== g.unit)
          )
            throw new Error(
              "Must provide matching units for the min and max offset values of each axis."
            );
        }
      }
    }),
    n
  );
}
function Md(e, t, n, r) {
  var o = n - e,
    i = o / t;
  return r && (i = r(i)), i;
}
function Uw(e, t, n) {
  var r = n >= e && n <= t;
  return r;
}
function Bw(e, t, n, r, o) {
  return ((n - t) * (e - r)) / (o - r) + t;
}
function pm(e, t) {
  var n = Bw(
    typeof e.easing == "function" ? e.easing(t) : t,
    (e == null ? void 0 : e.start) || 0,
    (e == null ? void 0 : e.end) || 0,
    0,
    1
  );
  return { value: n, unit: e == null ? void 0 : e.unit };
}
var Hw = Object.values(Ds).filter(function (e) {
  return e !== "opacity";
});
function Ww(e, t) {
  var n = Object.keys(t),
    r = n.includes("opacity"),
    o = "transform" + (r ? ",opacity" : "");
  e.style.willChange = o;
}
function Vw(e, t, n) {
  if (!!n) {
    var r = Xw(e, t),
      o = Yw(e, t);
    (n.style.transform = r), (n.style.opacity = o);
  }
}
function Yw(e, t) {
  var n = e.opacity && pm(e.opacity, t);
  if (typeof n > "u" || typeof n.value > "u" || typeof n.unit > "u") return "";
  var r = "" + n.value;
  return r;
}
function Xw(e, t) {
  var n = Hw.reduce(function (r, o) {
    var i = e[o] && pm(e[o], t);
    if (typeof i > "u" || typeof i.value > "u" || typeof i.unit > "u") return r;
    var s = o + "(" + i.value + i.unit + ")";
    return r + s;
  }, "");
  return n;
}
function wu(e) {
  var t = e.el;
  !t || ((t.style.transform = ""), (t.style.opacity = ""));
}
function Kw(e, t, n, r) {
  var o = e.top - t.height,
    i = e.left - t.width,
    s = e.bottom,
    l = e.right;
  (i += n.x),
    (l += n.x),
    (o += n.y),
    (s += n.y),
    r &&
      (n.y + e.top < t.height && (o = 0),
      n.x + e.left < t.width && (i = 0),
      s > t.scrollHeight - t.height && (s = t.scrollHeight - t.height),
      l > t.scrollWidth - t.width && (l = t.scrollWidth - t.width));
  var a = new Rc({ startX: i, startY: o, endX: l, endY: s });
  return a;
}
function or(e, t, n) {
  var r = t > e,
    o = (Math.abs(e) + Math.abs(t)) * (r ? -1 : 1),
    i = n + o,
    s = Math.max(n / i, 1);
  return s;
}
function zd(e, t) {
  var n = e.start,
    r = e.end,
    o = e.unit;
  if (o === "%") {
    var i = t / 100;
    (n = n * i), (r = r * i);
  }
  if (o === "vw") {
    var s = n / 100,
      l = r / 100;
    (n = window.innerWidth * s), (r = window.innerWidth * l);
  }
  if (o === "vh") {
    var a = n / 100,
      u = r / 100;
    (n = window.innerHeight * a), (r = window.innerHeight * u);
  }
  return { start: n, end: r };
}
var Dd = { start: 0, end: 0, unit: "" };
function Qw(e, t, n, r, o, i) {
  var s = n.translateX || Dd,
    l = n.translateY || Dd,
    a = zd(s, e.width),
    u = a.start,
    c = a.end,
    f = zd(l, e.height),
    d = f.start,
    g = f.end,
    m = e.top - t.height,
    v = e.left - t.width,
    S = e.bottom,
    h = e.right,
    p = 1,
    y = 1;
  o === mt.vertical && ((p = or(d, g, t.height + e.height)), (y = p));
  var E = 1,
    k = 1;
  if (
    (o === mt.horizontal && ((E = or(u, c, t.width + e.width)), (k = E)),
    d < 0 && (m = m + d * p),
    g > 0 && (S = S + g * y),
    u < 0 && (v = v + u * E),
    c > 0 && (h = h + c * k),
    (v += r.x),
    (h += r.x),
    (m += r.y),
    (S += r.y),
    i)
  ) {
    var _ = r.y + e.top < t.height,
      C = r.x + e.left < t.width,
      R = r.y + e.bottom > t.scrollHeight - t.height,
      $ = r.x + e.right > t.scrollWidth - t.height;
    if (
      (_ && R && ((p = 1), (y = 1), (m = 0), (S = t.scrollHeight - t.height)),
      C && $ && ((E = 1), (k = 1), (v = 0), (h = t.scrollWidth - t.width)),
      !_ && R)
    ) {
      (m = e.top - t.height + r.y), (S = t.scrollHeight - t.height);
      var N = S - m;
      (p = or(d, g, N)), (y = 1), d < 0 && (m = m + d * p);
    }
    if (!C && $) {
      (v = e.left - t.width + r.x), (h = t.scrollWidth - t.width);
      var j = h - v;
      (E = or(u, c, j)), (k = 1), u < 0 && (v = v + u * E);
    }
    if (_ && !R) {
      (m = 0), (S = e.bottom + r.y);
      var J = S - m;
      (p = 1), (y = or(d, g, J)), g > 0 && (S = S + g * y);
    }
    if (C && !$) {
      (v = 0), (h = e.right + r.x);
      var se = h - v;
      (E = 1), (k = or(u, c, se)), c > 0 && (h = h + c * k);
    }
  }
  var xe = new Rc({
    startX: v,
    startY: m,
    endX: h,
    endY: S,
    startMultiplierX: E,
    endMultiplierX: k,
    startMultiplierY: p,
    endMultiplierY: y,
  });
  return xe;
}
function qw(e, t) {
  var n = yn({}, e);
  return (
    n.translateX &&
      (n.translateX = yn({}, e.translateX, {
        start: n.translateX.start * t.startMultiplierX,
        end: n.translateX.end * t.endMultiplierX,
      })),
    n.translateY &&
      (n.translateY = yn({}, e.translateY, {
        start: n.translateY.start * t.startMultiplierY,
        end: n.translateY.end * t.endMultiplierY,
      })),
    n
  );
}
function Zw(e, t, n) {
  return e.rootMargin || e.targetElement || e.shouldDisableScalingTranslations
    ? !1
    : (!!t.translateX && n === mt.horizontal) ||
        (!!t.translateY && n === mt.vertical);
}
var Fd = function (t, n, r) {
    return Math.min(Math.max(t, n), r);
  },
  Gw = (function () {
    function e(n) {
      (this.el = n.el),
        (this.props = n.props),
        (this.scrollAxis = n.scrollAxis),
        (this.id = Mw()),
        (this.effects = $d(this.props, this.scrollAxis)),
        (this.isInView = null),
        (this.progress = 0),
        this._setElementEasing(n.props.easing),
        Ww(n.el, this.effects);
    }
    var t = e.prototype;
    return (
      (t.updateProps = function (r) {
        return (
          (this.props = yn({}, this.props, r)),
          (this.effects = $d(r, this.scrollAxis)),
          this._setElementEasing(r.easing),
          this
        );
      }),
      (t.setCachedAttributes = function (r, o) {
        wu(this),
          (this.rect = new zw({
            el: this.props.targetElement || this.el,
            rootMargin: this.props.rootMargin,
            view: r,
          }));
        var i = Zw(this.props, this.effects, this.scrollAxis);
        return typeof this.props.startScroll == "number" &&
          typeof this.props.endScroll == "number"
          ? ((this.limits = new Rc({
              startX: this.props.startScroll,
              startY: this.props.startScroll,
              endX: this.props.endScroll,
              endY: this.props.endScroll,
            })),
            this._setElementStyles(),
            this)
          : (i
              ? ((this.limits = Qw(
                  this.rect,
                  r,
                  this.effects,
                  o,
                  this.scrollAxis,
                  this.props.shouldAlwaysCompleteAnimation
                )),
                (this.scaledEffects = qw(this.effects, this.limits)))
              : (this.limits = Kw(
                  this.rect,
                  r,
                  o,
                  this.props.shouldAlwaysCompleteAnimation
                )),
            this._setElementStyles(),
            this);
      }),
      (t._updateElementIsInView = function (r) {
        var o = this.isInView === null;
        r !== this.isInView &&
          (r
            ? this.props.onEnter && this.props.onEnter(this)
            : o ||
              (this._setFinalProgress(),
              this._setElementStyles(),
              this.props.onExit && this.props.onExit(this))),
          (this.isInView = r);
      }),
      (t._setFinalProgress = function () {
        var r = Fd(Math.round(this.progress), 0, 1);
        this._updateElementProgress(r);
      }),
      (t._setElementStyles = function () {
        if (!this.props.disabled) {
          var r = this.scaledEffects || this.effects;
          Vw(r, this.progress, this.el);
        }
      }),
      (t._updateElementProgress = function (r) {
        (this.progress = r),
          this.props.onProgressChange &&
            this.props.onProgressChange(this.progress),
          this.props.onChange && this.props.onChange(this);
      }),
      (t._setElementEasing = function (r) {
        this.easing = dm(r);
      }),
      (t.updatePosition = function (r) {
        if (!this.limits) return this;
        var o = this.scrollAxis === mt.vertical,
          i = this.isInView === null,
          s = o ? this.limits.startY : this.limits.startX,
          l = o ? this.limits.endY : this.limits.endX,
          a = o ? this.limits.totalY : this.limits.totalX,
          u = o ? r.y : r.x,
          c = Uw(s, l, u);
        if ((this._updateElementIsInView(c), c)) {
          var f = Md(s, a, u, this.easing);
          this._updateElementProgress(f), this._setElementStyles();
        } else
          i &&
            ((this.progress = Fd(Math.round(Md(s, a, u, this.easing)), 0, 1)),
            this._setElementStyles());
        return this;
      }),
      e
    );
  })(),
  jd = (function () {
    function e(n) {
      (this.scrollContainer = n.scrollContainer),
        (this.width = n.width),
        (this.height = n.height),
        (this.scrollHeight = n.scrollHeight),
        (this.scrollWidth = n.scrollWidth);
    }
    var t = e.prototype;
    return (
      (t.hasChanged = function (r) {
        return (
          r.width !== this.width ||
          r.height !== this.height ||
          r.scrollWidth !== this.scrollWidth ||
          r.scrollHeight !== this.scrollHeight
        );
      }),
      (t.setSize = function (r) {
        return (
          (this.width = r.width),
          (this.height = r.height),
          (this.scrollHeight = r.scrollHeight),
          (this.scrollWidth = r.scrollWidth),
          this
        );
      }),
      e
    );
  })(),
  Jw = (function () {
    function e(n, r) {
      (this.x = n), (this.y = r), (this.dx = 0), (this.dy = 0);
    }
    var t = e.prototype;
    return (
      (t.setScroll = function (r, o) {
        return (
          (this.dx = r - this.x),
          (this.dy = o - this.y),
          (this.x = r),
          (this.y = o),
          this
        );
      }),
      e
    );
  })();
function ex() {
  var e = !1;
  try {
    var t = Object.defineProperty({}, "passive", {
      get: function () {
        return (e = !0), !0;
      },
    });
    window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t);
  } catch {}
  return e;
}
var hm = (function () {
  function e(n) {
    var r = n.scrollAxis,
      o = r === void 0 ? mt.vertical : r,
      i = n.scrollContainer;
    (this.scrollAxis = o),
      (this.elements = []),
      (this._hasScrollContainer = !!i),
      (this.viewEl = i != null ? i : window);
    var s = this._getScrollPosition(),
      l = s[0],
      a = s[1];
    (this.scroll = new Jw(l, a)),
      (this.view = new jd({
        width: 0,
        height: 0,
        scrollWidth: 0,
        scrollHeight: 0,
        scrollContainer: this._hasScrollContainer ? i : void 0,
      })),
      (this._ticking = !1),
      (this._supportsPassive = ex()),
      this._bindAllMethods(),
      this._addListeners(this.viewEl),
      this._addResizeObserver(),
      this._setViewSize();
  }
  e.init = function (r) {
    var o = typeof window < "u";
    if (!o)
      throw new Error(
        "Looks like ParallaxController.init() was called on the server. This method must be called on the client."
      );
    return new e(r);
  };
  var t = e.prototype;
  return (
    (t._bindAllMethods = function () {
      var r = this;
      [
        "_addListeners",
        "_removeListeners",
        "_getScrollPosition",
        "_handleScroll",
        "_handleUpdateCache",
        "_updateAllElements",
        "_updateElementPosition",
        "_setViewSize",
        "_addResizeObserver",
        "_checkIfViewHasChanged",
        "_getViewParams",
        "getElements",
        "createElement",
        "removeElementById",
        "resetElementStyles",
        "updateElementPropsById",
        "update",
        "updateScrollContainer",
        "destroy",
      ].forEach(function (o) {
        r[o] = r[o].bind(r);
      });
    }),
    (t._addListeners = function (r) {
      r.addEventListener(
        "scroll",
        this._handleScroll,
        this._supportsPassive ? { passive: !0 } : !1
      ),
        window.addEventListener("resize", this._handleUpdateCache, !1),
        window.addEventListener("blur", this._handleUpdateCache, !1),
        window.addEventListener("focus", this._handleUpdateCache, !1),
        window.addEventListener("load", this._handleUpdateCache, !1);
    }),
    (t._removeListeners = function (r) {
      var o;
      r.removeEventListener("scroll", this._handleScroll, !1),
        window.removeEventListener("resize", this._handleUpdateCache, !1),
        window.removeEventListener("blur", this._handleUpdateCache, !1),
        window.removeEventListener("focus", this._handleUpdateCache, !1),
        window.removeEventListener("load", this._handleUpdateCache, !1),
        (o = this._resizeObserver) == null || o.disconnect();
    }),
    (t._addResizeObserver = function () {
      var r = this;
      try {
        var o = this._hasScrollContainer
          ? this.viewEl
          : document.documentElement;
        (this._resizeObserver = new ResizeObserver(function () {
          return r.update();
        })),
          this._resizeObserver.observe(o);
      } catch {
        console.warn(
          "Failed to create the resize observer in the ParallaxContoller"
        );
      }
    }),
    (t._getScrollPosition = function () {
      var r = this._hasScrollContainer
          ? this.viewEl.scrollLeft
          : window.pageXOffset,
        o = this._hasScrollContainer
          ? this.viewEl.scrollTop
          : window.pageYOffset;
      return [r, o];
    }),
    (t._handleScroll = function () {
      var r = this._getScrollPosition(),
        o = r[0],
        i = r[1];
      this.scroll.setScroll(o, i),
        !this._ticking &&
          this.elements.length > 0 &&
          ((this._ticking = !0),
          window.requestAnimationFrame(this._updateAllElements));
    }),
    (t._handleUpdateCache = function () {
      this._setViewSize(), this._updateAllElements({ updateCache: !0 });
    }),
    (t._updateAllElements = function (r) {
      var o = this,
        i = r === void 0 ? {} : r,
        s = i.updateCache;
      this.elements &&
        this.elements.forEach(function (l) {
          s && l.setCachedAttributes(o.view, o.scroll),
            o._updateElementPosition(l);
        }),
        (this._ticking = !1);
    }),
    (t._updateElementPosition = function (r) {
      r.props.disabled || r.updatePosition(this.scroll);
    }),
    (t._getViewParams = function () {
      if (this._hasScrollContainer) {
        var r = this.viewEl.offsetWidth,
          o = this.viewEl.offsetHeight,
          i = this.viewEl.scrollHeight,
          s = this.viewEl.scrollWidth;
        return this.view.setSize({
          width: r,
          height: o,
          scrollHeight: i,
          scrollWidth: s,
        });
      }
      var l = document.documentElement,
        a = window.innerWidth || l.clientWidth,
        u = window.innerHeight || l.clientHeight,
        c = l.scrollHeight,
        f = l.scrollWidth;
      return { width: a, height: u, scrollHeight: c, scrollWidth: f };
    }),
    (t._setViewSize = function () {
      return this.view.setSize(this._getViewParams());
    }),
    (t._checkIfViewHasChanged = function () {
      return this.view.hasChanged(this._getViewParams());
    }),
    (t.getElements = function () {
      return this.elements;
    }),
    (t.createElement = function (r) {
      var o = new Gw(yn({}, r, { scrollAxis: this.scrollAxis }));
      return (
        o.setCachedAttributes(this.view, this.scroll),
        (this.elements = this.elements ? [].concat(this.elements, [o]) : [o]),
        this._updateElementPosition(o),
        this._checkIfViewHasChanged() && this.update(),
        o
      );
    }),
    (t.removeElementById = function (r) {
      !this.elements ||
        (this.elements = this.elements.filter(function (o) {
          return o.id !== r;
        }));
    }),
    (t.updateElementPropsById = function (r, o) {
      this.elements &&
        (this.elements = this.elements.map(function (i) {
          return i.id === r ? i.updateProps(o) : i;
        })),
        this.update();
    }),
    (t.resetElementStyles = function (r) {
      wu(r);
    }),
    (t.update = function () {
      var r = this._getScrollPosition(),
        o = r[0],
        i = r[1];
      this.scroll.setScroll(o, i),
        this._setViewSize(),
        this._updateAllElements({ updateCache: !0 });
    }),
    (t.updateScrollContainer = function (r) {
      this._removeListeners(this.viewEl),
        (this.viewEl = r),
        (this._hasScrollContainer = !!r),
        (this.view = new jd({
          width: 0,
          height: 0,
          scrollWidth: 0,
          scrollHeight: 0,
          scrollContainer: r,
        })),
        this._setViewSize(),
        this._addListeners(this.viewEl),
        this._updateAllElements({ updateCache: !0 });
    }),
    (t.destroy = function () {
      this._removeListeners(this.viewEl),
        this.elements &&
          this.elements.forEach(function (r) {
            return wu(r);
          }),
        (this.elements = void 0);
    }),
    e
  );
})();
function tx(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    xu(e, t);
}
function xu(e, t) {
  return (
    (xu =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    xu(e, t)
  );
}
function nx(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function rx(e) {
  return (
    Object.keys(e).forEach(function (t) {
      return e[t] === void 0 ? delete e[t] : {};
    }),
    e
  );
}
var ox = [
  "disabled",
  "easing",
  "endScroll",
  "onChange",
  "onEnter",
  "onExit",
  "onProgressChange",
  "opacity",
  "rootMargin",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "scaleZ",
  "shouldAlwaysCompleteAnimation",
  "shouldDisableScalingTranslations",
  "speed",
  "startScroll",
  "targetElement",
  "translateX",
  "translateY",
];
function ix(e) {
  var t = e.disabled,
    n = e.easing,
    r = e.endScroll,
    o = e.onChange,
    i = e.onEnter,
    s = e.onExit,
    l = e.onProgressChange,
    a = e.opacity,
    u = e.rootMargin,
    c = e.rotate,
    f = e.rotateX,
    d = e.rotateY,
    g = e.rotateZ,
    m = e.scale,
    v = e.scaleX,
    S = e.scaleY,
    h = e.scaleZ,
    p = e.shouldAlwaysCompleteAnimation,
    y = e.shouldDisableScalingTranslations,
    E = e.speed,
    k = e.startScroll,
    _ = e.targetElement,
    C = e.translateX,
    R = e.translateY,
    $ = nx(e, ox),
    N = rx({
      disabled: t,
      easing: n,
      endScroll: r,
      onChange: o,
      onEnter: i,
      onExit: s,
      onProgressChange: l,
      opacity: a,
      rootMargin: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      rotateZ: g,
      scale: m,
      scaleX: v,
      scaleY: S,
      scaleZ: h,
      shouldAlwaysCompleteAnimation: p,
      shouldDisableScalingTranslations: y,
      speed: E,
      startScroll: k,
      targetElement: _,
      translateX: C,
      translateY: R,
    });
  return { parallaxProps: N, rest: $ };
}
function sx(e) {
  x.exports.useEffect(
    function () {
      var t = typeof window > "u",
        n = e instanceof hm;
      if (!t && !e && !n)
        throw new Error(
          "Must wrap your application's <Parallax /> components in a <ParallaxProvider />."
        );
    },
    [e]
  );
}
var mm = ae.createContext(null);
function lx() {
  var e = x.exports.useContext(mm),
    t = typeof window > "u";
  if (t) return null;
  if (!e)
    throw new Error(
      "Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>"
    );
  return e;
}
function d6(e) {
  var t = lx(),
    n = x.exports.useRef(null),
    r = ix(e),
    o = r.parallaxProps;
  sx(t);
  var i = x.exports.useState(),
    s = i[0],
    l = i[1];
  return (
    x.exports.useEffect(function () {
      var a;
      if (n.current instanceof HTMLElement) {
        var u = { el: n.current, props: o };
        (a = t == null ? void 0 : t.createElement(u)), l(a);
      } else throw new Error("You must assign the ref returned by the useParallax() hook to an HTML Element.");
      return function () {
        a && (t == null || t.removeElementById(a.id));
      };
    }, []),
    x.exports.useEffect(
      function () {
        s &&
          (e.disabled && (t == null || t.resetElementStyles(s)),
          t == null || t.updateElementPropsById(s.id, o));
      },
      [
        e.disabled,
        e.easing,
        e.endScroll,
        e.onChange,
        e.onEnter,
        e.onExit,
        e.onProgressChange,
        e.opacity,
        e.rootMargin,
        e.rotate,
        e.rotateX,
        e.rotateY,
        e.rotateZ,
        e.scale,
        e.scaleX,
        e.scaleY,
        e.scaleZ,
        e.shouldAlwaysCompleteAnimation,
        e.shouldDisableScalingTranslations,
        e.speed,
        e.startScroll,
        e.targetElement,
        e.translateX,
        e.translateY,
      ]
    ),
    { ref: n, controller: t, element: s }
  );
}
var ax = function (t) {
    var n = typeof window > "u";
    return n ? null : hm.init(t);
  },
  vm = (function (e) {
    tx(t, e);
    function t(r) {
      var o;
      return (
        (o = e.call(this, r) || this),
        (o.controller = ax({
          scrollAxis: r.scrollAxis,
          scrollContainer: r.scrollContainer,
        })),
        o
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidUpdate = function (o) {
        o.scrollContainer !== this.props.scrollContainer &&
          this.controller.updateScrollContainer(this.props.scrollContainer);
      }),
      (n.componentWillUnmount = function () {
        this.controller = this.controller.destroy();
      }),
      (n.render = function () {
        var o = this.props.children;
        return w(mm.Provider, { value: this.controller, children: o });
      }),
      t
    );
  })(x.exports.Component);
vm.defaultProps = { scrollAxis: mt.vertical };
function gm(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: ym } = Object.prototype,
  { getPrototypeOf: Nc } = Object,
  bc = ((e) => (t) => {
    const n = ym.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Yt = (e) => ((e = e.toLowerCase()), (t) => bc(t) === e),
  ll = (e) => (t) => typeof t === e,
  { isArray: ui } = Array,
  Su = ll("undefined");
function ux(e) {
  return (
    e !== null &&
    !Su(e) &&
    e.constructor !== null &&
    !Su(e.constructor) &&
    Wr(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const wm = Yt("ArrayBuffer");
function cx(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && wm(e.buffer)),
    t
  );
}
const fx = ll("string"),
  Wr = ll("function"),
  xm = ll("number"),
  Sm = (e) => e !== null && typeof e == "object",
  dx = (e) => e === !0 || e === !1,
  ts = (e) => {
    if (bc(e) !== "object") return !1;
    const t = Nc(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  px = Yt("Date"),
  hx = Yt("File"),
  mx = Yt("Blob"),
  vx = Yt("FileList"),
  gx = (e) => Sm(e) && Wr(e.pipe),
  yx = (e) => {
    const t = "[object FormData]";
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        ym.call(e) === t ||
        (Wr(e.toString) && e.toString() === t))
    );
  },
  wx = Yt("URLSearchParams"),
  xx = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function al(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), ui(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let l;
    for (r = 0; r < s; r++) (l = i[r]), t.call(null, e[l], l, e);
  }
}
function Eu() {
  const e = {},
    t = (n, r) => {
      ts(e[r]) && ts(n)
        ? (e[r] = Eu(e[r], n))
        : ts(n)
        ? (e[r] = Eu({}, n))
        : ui(n)
        ? (e[r] = n.slice())
        : (e[r] = n);
    };
  for (let n = 0, r = arguments.length; n < r; n++)
    arguments[n] && al(arguments[n], t);
  return e;
}
const Sx = (e, t, n, { allOwnKeys: r } = {}) => (
    al(
      t,
      (o, i) => {
        n && Wr(o) ? (e[i] = gm(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Ex = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  kx = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Cx = (e, t, n, r) => {
    let o, i, s;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0));
      e = n !== !1 && Nc(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  _x = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Ox = (e) => {
    if (!e) return null;
    if (ui(e)) return e;
    let t = e.length;
    if (!xm(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Px = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Nc(Uint8Array)),
  Tx = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  Rx = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Nx = Yt("HTMLFormElement"),
  bx = (e) =>
    e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Ud = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Lx = Yt("RegExp"),
  Em = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    al(n, (o, i) => {
      t(o, i, e) !== !1 && (r[i] = o);
    }),
      Object.defineProperties(e, r);
  },
  Ax = (e) => {
    Em(e, (t, n) => {
      const r = e[n];
      if (!!Wr(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not read-only method '" + n + "'");
          });
      }
    });
  },
  Ix = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return ui(e) ? r(e) : r(String(e).split(t)), n;
  },
  $x = () => {},
  Mx = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  O = {
    isArray: ui,
    isArrayBuffer: wm,
    isBuffer: ux,
    isFormData: yx,
    isArrayBufferView: cx,
    isString: fx,
    isNumber: xm,
    isBoolean: dx,
    isObject: Sm,
    isPlainObject: ts,
    isUndefined: Su,
    isDate: px,
    isFile: hx,
    isBlob: mx,
    isRegExp: Lx,
    isFunction: Wr,
    isStream: gx,
    isURLSearchParams: wx,
    isTypedArray: Px,
    isFileList: vx,
    forEach: al,
    merge: Eu,
    extend: Sx,
    trim: xx,
    stripBOM: Ex,
    inherits: kx,
    toFlatObject: Cx,
    kindOf: bc,
    kindOfTest: Yt,
    endsWith: _x,
    toArray: Ox,
    forEachEntry: Tx,
    matchAll: Rx,
    isHTMLForm: Nx,
    hasOwnProperty: Ud,
    hasOwnProp: Ud,
    reduceDescriptors: Em,
    freezeMethods: Ax,
    toObjectSet: Ix,
    toCamelCase: bx,
    noop: $x,
    toFiniteNumber: Mx,
  };
function B(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
O.inherits(B, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const km = B.prototype,
  Cm = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Cm[e] = { value: e };
});
Object.defineProperties(B, Cm);
Object.defineProperty(km, "isAxiosError", { value: !0 });
B.from = (e, t, n, r, o, i) => {
  const s = Object.create(km);
  return (
    O.toFlatObject(
      e,
      s,
      function (a) {
        return a !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    B.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
var zx = typeof self == "object" ? self.FormData : window.FormData;
function ku(e) {
  return O.isPlainObject(e) || O.isArray(e);
}
function _m(e) {
  return O.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Bd(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = _m(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function Dx(e) {
  return O.isArray(e) && !e.some(ku);
}
const Fx = O.toFlatObject(O, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function jx(e) {
  return (
    e &&
    O.isFunction(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
function ul(e, t, n) {
  if (!O.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new (zx || FormData)()),
    (n = O.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, S) {
        return !O.isUndefined(S[v]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    s = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && jx(t);
  if (!O.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if (O.isDate(m)) return m.toISOString();
    if (!a && O.isBlob(m))
      throw new B("Blob is not supported. Use a Buffer instead.");
    return O.isArrayBuffer(m) || O.isTypedArray(m)
      ? a && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function c(m, v, S) {
    let h = m;
    if (m && !S && typeof m == "object") {
      if (O.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (O.isArray(m) && Dx(m)) ||
        O.isFileList(m) ||
        (O.endsWith(v, "[]") && (h = O.toArray(m)))
      )
        return (
          (v = _m(v)),
          h.forEach(function (y, E) {
            !(O.isUndefined(y) || y === null) &&
              t.append(
                s === !0 ? Bd([v], E, i) : s === null ? v : v + "[]",
                u(y)
              );
          }),
          !1
        );
    }
    return ku(m) ? !0 : (t.append(Bd(S, v, i), u(m)), !1);
  }
  const f = [],
    d = Object.assign(Fx, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: ku,
    });
  function g(m, v) {
    if (!O.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      f.push(m),
        O.forEach(m, function (h, p) {
          (!(O.isUndefined(h) || h === null) &&
            o.call(t, h, O.isString(p) ? p.trim() : p, v, d)) === !0 &&
            g(h, v ? v.concat(p) : [p]);
        }),
        f.pop();
    }
  }
  if (!O.isObject(e)) throw new TypeError("data must be an object");
  return g(e), t;
}
function Hd(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Lc(e, t) {
  (this._pairs = []), e && ul(e, this, t);
}
const Om = Lc.prototype;
Om.append = function (t, n) {
  this._pairs.push([t, n]);
};
Om.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Hd);
      }
    : Hd;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function Ux(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Pm(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Ux,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = O.isURLSearchParams(t) ? t.toString() : new Lc(t, n).toString(r)),
    i)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class Wd {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    O.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Tm = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Bx = typeof URLSearchParams < "u" ? URLSearchParams : Lc,
  Hx = FormData,
  Wx = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  Mt = {
    isBrowser: !0,
    classes: { URLSearchParams: Bx, FormData: Hx, Blob },
    isStandardBrowserEnv: Wx,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function Vx(e, t) {
  return ul(
    e,
    new Mt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return Mt.isNode && O.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Yx(e) {
  return O.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function Xx(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function Rm(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    const l = Number.isFinite(+s),
      a = i >= n.length;
    return (
      (s = !s && O.isArray(o) ? o.length : s),
      a
        ? (O.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !l)
        : ((!o[s] || !O.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && O.isArray(o[s]) && (o[s] = Xx(o[s])),
          !l)
    );
  }
  if (O.isFormData(e) && O.isFunction(e.entries)) {
    const n = {};
    return (
      O.forEachEntry(e, (r, o) => {
        t(Yx(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function Kx(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new B(
          "Request failed with status code " + n.status,
          [B.ERR_BAD_REQUEST, B.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const Qx = Mt.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, o, i, s, l) {
          const a = [];
          a.push(n + "=" + encodeURIComponent(r)),
            O.isNumber(o) && a.push("expires=" + new Date(o).toGMTString()),
            O.isString(i) && a.push("path=" + i),
            O.isString(s) && a.push("domain=" + s),
            l === !0 && a.push("secure"),
            (document.cookie = a.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function qx(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Zx(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Nm(e, t) {
  return e && !qx(t) ? Zx(e, t) : t;
}
const Gx = Mt.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(i) {
        let s = i;
        return (
          t && (n.setAttribute("href", s), (s = n.href)),
          n.setAttribute("href", s),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (s) {
          const l = O.isString(s) ? o(s) : s;
          return l.protocol === r.protocol && l.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function ci(e, t, n) {
  B.call(this, e == null ? "canceled" : e, B.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
O.inherits(ci, B, { __CANCEL__: !0 });
function Jx(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
const e5 = O.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  t5 = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (o = s.indexOf(":")),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && e5[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Vd = Symbol("internals"),
  bm = Symbol("defaults");
function vo(e) {
  return e && String(e).trim().toLowerCase();
}
function ns(e) {
  return e === !1 || e == null ? e : O.isArray(e) ? e.map(ns) : String(e);
}
function n5(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
function Yd(e, t, n, r) {
  if (O.isFunction(r)) return r.call(this, t, n);
  if (!!O.isString(t)) {
    if (O.isString(r)) return t.indexOf(r) !== -1;
    if (O.isRegExp(r)) return r.test(t);
  }
}
function r5(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function o5(e, t) {
  const n = O.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}
function ro(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
function rt(e, t) {
  e && this.set(e), (this[bm] = t || null);
}
Object.assign(rt.prototype, {
  set: function (e, t, n) {
    const r = this;
    function o(i, s, l) {
      const a = vo(s);
      if (!a) throw new Error("header name must be a non-empty string");
      const u = ro(r, a);
      (u && l !== !0 && (r[u] === !1 || l === !1)) || (r[u || s] = ns(i));
    }
    return (
      O.isPlainObject(e)
        ? O.forEach(e, (i, s) => {
            o(i, s, t);
          })
        : o(t, e, n),
      this
    );
  },
  get: function (e, t) {
    if (((e = vo(e)), !e)) return;
    const n = ro(this, e);
    if (n) {
      const r = this[n];
      if (!t) return r;
      if (t === !0) return n5(r);
      if (O.isFunction(t)) return t.call(this, r, n);
      if (O.isRegExp(t)) return t.exec(r);
      throw new TypeError("parser must be boolean|regexp|function");
    }
  },
  has: function (e, t) {
    if (((e = vo(e)), e)) {
      const n = ro(this, e);
      return !!(n && (!t || Yd(this, this[n], n, t)));
    }
    return !1;
  },
  delete: function (e, t) {
    const n = this;
    let r = !1;
    function o(i) {
      if (((i = vo(i)), i)) {
        const s = ro(n, i);
        s && (!t || Yd(n, n[s], s, t)) && (delete n[s], (r = !0));
      }
    }
    return O.isArray(e) ? e.forEach(o) : o(e), r;
  },
  clear: function () {
    return Object.keys(this).forEach(this.delete.bind(this));
  },
  normalize: function (e) {
    const t = this,
      n = {};
    return (
      O.forEach(this, (r, o) => {
        const i = ro(n, o);
        if (i) {
          (t[i] = ns(r)), delete t[o];
          return;
        }
        const s = e ? r5(o) : String(o).trim();
        s !== o && delete t[o], (t[s] = ns(r)), (n[s] = !0);
      }),
      this
    );
  },
  toJSON: function (e) {
    const t = Object.create(null);
    return (
      O.forEach(Object.assign({}, this[bm] || null, this), (n, r) => {
        n == null || n === !1 || (t[r] = e && O.isArray(n) ? n.join(", ") : n);
      }),
      t
    );
  },
});
Object.assign(rt, {
  from: function (e) {
    return O.isString(e)
      ? new this(t5(e))
      : e instanceof this
      ? e
      : new this(e);
  },
  accessor: function (e) {
    const n = (this[Vd] = this[Vd] = { accessors: {} }).accessors,
      r = this.prototype;
    function o(i) {
      const s = vo(i);
      n[s] || (o5(r, i), (n[s] = !0));
    }
    return O.isArray(e) ? e.forEach(o) : o(e), this;
  },
});
rt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
]);
O.freezeMethods(rt.prototype);
O.freezeMethods(rt);
function i5(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const u = Date.now(),
        c = r[i];
      s || (s = u), (n[o] = a), (r[o] = u);
      let f = i,
        d = 0;
      for (; f !== o; ) (d += n[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t)) return;
      const g = c && u - c;
      return g ? Math.round((d * 1e3) / g) : void 0;
    }
  );
}
function Xd(e, t) {
  let n = 0;
  const r = i5(50, 250);
  return (o) => {
    const i = o.loaded,
      s = o.lengthComputable ? o.total : void 0,
      l = i - n,
      a = r(l),
      u = i <= s;
    n = i;
    const c = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: l,
      rate: a || void 0,
      estimated: a && s && u ? (s - i) / a : void 0,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
function Kd(e) {
  return new Promise(function (n, r) {
    let o = e.data;
    const i = rt.from(e.headers).normalize(),
      s = e.responseType;
    let l;
    function a() {
      e.cancelToken && e.cancelToken.unsubscribe(l),
        e.signal && e.signal.removeEventListener("abort", l);
    }
    O.isFormData(o) && Mt.isStandardBrowserEnv && i.setContentType(!1);
    let u = new XMLHttpRequest();
    if (e.auth) {
      const g = e.auth.username || "",
        m = e.auth.password
          ? unescape(encodeURIComponent(e.auth.password))
          : "";
      i.set("Authorization", "Basic " + btoa(g + ":" + m));
    }
    const c = Nm(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Pm(c, e.params, e.paramsSerializer), !0),
      (u.timeout = e.timeout);
    function f() {
      if (!u) return;
      const g = rt.from(
          "getAllResponseHeaders" in u && u.getAllResponseHeaders()
        ),
        v = {
          data:
            !s || s === "text" || s === "json" ? u.responseText : u.response,
          status: u.status,
          statusText: u.statusText,
          headers: g,
          config: e,
          request: u,
        };
      Kx(
        function (h) {
          n(h), a();
        },
        function (h) {
          r(h), a();
        },
        v
      ),
        (u = null);
    }
    if (
      ("onloadend" in u
        ? (u.onloadend = f)
        : (u.onreadystatechange = function () {
            !u ||
              u.readyState !== 4 ||
              (u.status === 0 &&
                !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
              setTimeout(f);
          }),
      (u.onabort = function () {
        !u || (r(new B("Request aborted", B.ECONNABORTED, e, u)), (u = null));
      }),
      (u.onerror = function () {
        r(new B("Network Error", B.ERR_NETWORK, e, u)), (u = null);
      }),
      (u.ontimeout = function () {
        let m = e.timeout
          ? "timeout of " + e.timeout + "ms exceeded"
          : "timeout exceeded";
        const v = e.transitional || Tm;
        e.timeoutErrorMessage && (m = e.timeoutErrorMessage),
          r(
            new B(m, v.clarifyTimeoutError ? B.ETIMEDOUT : B.ECONNABORTED, e, u)
          ),
          (u = null);
      }),
      Mt.isStandardBrowserEnv)
    ) {
      const g =
        (e.withCredentials || Gx(c)) &&
        e.xsrfCookieName &&
        Qx.read(e.xsrfCookieName);
      g && i.set(e.xsrfHeaderName, g);
    }
    o === void 0 && i.setContentType(null),
      "setRequestHeader" in u &&
        O.forEach(i.toJSON(), function (m, v) {
          u.setRequestHeader(v, m);
        }),
      O.isUndefined(e.withCredentials) ||
        (u.withCredentials = !!e.withCredentials),
      s && s !== "json" && (u.responseType = e.responseType),
      typeof e.onDownloadProgress == "function" &&
        u.addEventListener("progress", Xd(e.onDownloadProgress, !0)),
      typeof e.onUploadProgress == "function" &&
        u.upload &&
        u.upload.addEventListener("progress", Xd(e.onUploadProgress)),
      (e.cancelToken || e.signal) &&
        ((l = (g) => {
          !u ||
            (r(!g || g.type ? new ci(null, e, u) : g), u.abort(), (u = null));
        }),
        e.cancelToken && e.cancelToken.subscribe(l),
        e.signal &&
          (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const d = Jx(c);
    if (d && Mt.protocols.indexOf(d) === -1) {
      r(new B("Unsupported protocol " + d + ":", B.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}
const Qd = { http: Kd, xhr: Kd },
  qd = {
    getAdapter: (e) => {
      if (O.isString(e)) {
        const t = Qd[e];
        if (!e)
          throw Error(
            O.hasOwnProp(e)
              ? `Adapter '${e}' is not available in the build`
              : `Can not resolve adapter '${e}'`
          );
        return t;
      }
      if (!O.isFunction(e)) throw new TypeError("adapter is not a function");
      return e;
    },
    adapters: Qd,
  },
  s5 = { "Content-Type": "application/x-www-form-urlencoded" };
function l5() {
  let e;
  return (
    typeof XMLHttpRequest < "u"
      ? (e = qd.getAdapter("xhr"))
      : typeof process < "u" &&
        O.kindOf(process) === "process" &&
        (e = qd.getAdapter("http")),
    e
  );
}
function a5(e, t, n) {
  if (O.isString(e))
    try {
      return (t || JSON.parse)(e), O.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Vr = {
  transitional: Tm,
  adapter: l5(),
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = O.isObject(t);
      if ((i && O.isHTMLForm(t) && (t = new FormData(t)), O.isFormData(t)))
        return o && o ? JSON.stringify(Rm(t)) : t;
      if (
        O.isArrayBuffer(t) ||
        O.isBuffer(t) ||
        O.isStream(t) ||
        O.isFile(t) ||
        O.isBlob(t)
      )
        return t;
      if (O.isArrayBufferView(t)) return t.buffer;
      if (O.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Vx(t, this.formSerializer).toString();
        if ((l = O.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return ul(
            l ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), a5(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Vr.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && O.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (s)
            throw l.name === "SyntaxError"
              ? B.from(l, B.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Mt.classes.FormData, Blob: Mt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
O.forEach(["delete", "get", "head"], function (t) {
  Vr.headers[t] = {};
});
O.forEach(["post", "put", "patch"], function (t) {
  Vr.headers[t] = O.merge(s5);
});
function la(e, t) {
  const n = this || Vr,
    r = t || n,
    o = rt.from(r.headers);
  let i = r.data;
  return (
    O.forEach(e, function (l) {
      i = l.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function Lm(e) {
  return !!(e && e.__CANCEL__);
}
function aa(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new ci();
}
function Zd(e) {
  return (
    aa(e),
    (e.headers = rt.from(e.headers)),
    (e.data = la.call(e, e.transformRequest)),
    (e.adapter || Vr.adapter)(e).then(
      function (r) {
        return (
          aa(e),
          (r.data = la.call(e, e.transformResponse, r)),
          (r.headers = rt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Lm(r) ||
            (aa(e),
            r &&
              r.response &&
              ((r.response.data = la.call(e, e.transformResponse, r.response)),
              (r.response.headers = rt.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
function qo(e, t) {
  t = t || {};
  const n = {};
  function r(u, c) {
    return O.isPlainObject(u) && O.isPlainObject(c)
      ? O.merge(u, c)
      : O.isPlainObject(c)
      ? O.merge({}, c)
      : O.isArray(c)
      ? c.slice()
      : c;
  }
  function o(u) {
    if (O.isUndefined(t[u])) {
      if (!O.isUndefined(e[u])) return r(void 0, e[u]);
    } else return r(e[u], t[u]);
  }
  function i(u) {
    if (!O.isUndefined(t[u])) return r(void 0, t[u]);
  }
  function s(u) {
    if (O.isUndefined(t[u])) {
      if (!O.isUndefined(e[u])) return r(void 0, e[u]);
    } else return r(void 0, t[u]);
  }
  function l(u) {
    if (u in t) return r(e[u], t[u]);
    if (u in e) return r(void 0, e[u]);
  }
  const a = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
  };
  return (
    O.forEach(Object.keys(e).concat(Object.keys(t)), function (c) {
      const f = a[c] || o,
        d = f(c);
      (O.isUndefined(d) && f !== l) || (n[c] = d);
    }),
    n
  );
}
const Am = "1.1.3",
  Ac = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ac[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Gd = {};
Ac.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      "[Axios v" +
      Am +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (i, s, l) => {
    if (t === !1)
      throw new B(
        o(s, " has been removed" + (n ? " in " + n : "")),
        B.ERR_DEPRECATED
      );
    return (
      n &&
        !Gd[s] &&
        ((Gd[s] = !0),
        console.warn(
          o(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, s, l) : !0
    );
  };
};
function u5(e, t, n) {
  if (typeof e != "object")
    throw new B("options must be an object", B.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i];
    if (s) {
      const l = e[i],
        a = l === void 0 || s(l, i, e);
      if (a !== !0)
        throw new B("option " + i + " must be " + a, B.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new B("Unknown option " + i, B.ERR_BAD_OPTION);
  }
}
const Cu = { assertOptions: u5, validators: Ac },
  Zt = Cu.validators;
class Wn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Wd(), response: new Wd() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = qo(this.defaults, n));
    const { transitional: r, paramsSerializer: o } = n;
    r !== void 0 &&
      Cu.assertOptions(
        r,
        {
          silentJSONParsing: Zt.transitional(Zt.boolean),
          forcedJSONParsing: Zt.transitional(Zt.boolean),
          clarifyTimeoutError: Zt.transitional(Zt.boolean),
        },
        !1
      ),
      o !== void 0 &&
        Cu.assertOptions(
          o,
          { encode: Zt.function, serialize: Zt.function },
          !0
        ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    const i = n.headers && O.merge(n.headers.common, n.headers[n.method]);
    i &&
      O.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (m) {
          delete n.headers[m];
        }
      ),
      (n.headers = new rt(n.headers, i));
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function (m) {
      (typeof m.runWhen == "function" && m.runWhen(n) === !1) ||
        ((l = l && m.synchronous), s.unshift(m.fulfilled, m.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (m) {
      a.push(m.fulfilled, m.rejected);
    });
    let u,
      c = 0,
      f;
    if (!l) {
      const g = [Zd.bind(this), void 0];
      for (
        g.unshift.apply(g, s),
          g.push.apply(g, a),
          f = g.length,
          u = Promise.resolve(n);
        c < f;

      )
        u = u.then(g[c++], g[c++]);
      return u;
    }
    f = s.length;
    let d = n;
    for (c = 0; c < f; ) {
      const g = s[c++],
        m = s[c++];
      try {
        d = g(d);
      } catch (v) {
        m.call(this, v);
        break;
      }
    }
    try {
      u = Zd.call(this, d);
    } catch (g) {
      return Promise.reject(g);
    }
    for (c = 0, f = a.length; c < f; ) u = u.then(a[c++], a[c++]);
    return u;
  }
  getUri(t) {
    t = qo(this.defaults, t);
    const n = Nm(t.baseURL, t.url);
    return Pm(n, t.params, t.paramsSerializer);
  }
}
O.forEach(["delete", "get", "head", "options"], function (t) {
  Wn.prototype[t] = function (n, r) {
    return this.request(
      qo(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
O.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, s, l) {
      return this.request(
        qo(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: s,
        })
      );
    };
  }
  (Wn.prototype[t] = n()), (Wn.prototype[t + "Form"] = n(!0));
});
class Ic {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((l) => {
          r.subscribe(l), (i = l);
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, l) {
        r.reason || ((r.reason = new ci(i, s, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Ic(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function c5(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function f5(e) {
  return O.isObject(e) && e.isAxiosError === !0;
}
function Im(e) {
  const t = new Wn(e),
    n = gm(Wn.prototype.request, t);
  return (
    O.extend(n, Wn.prototype, t, { allOwnKeys: !0 }),
    O.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Im(qo(e, o));
    }),
    n
  );
}
const ve = Im(Vr);
ve.Axios = Wn;
ve.CanceledError = ci;
ve.CancelToken = Ic;
ve.isCancel = Lm;
ve.VERSION = Am;
ve.toFormData = ul;
ve.AxiosError = B;
ve.Cancel = ve.CanceledError;
ve.all = function (t) {
  return Promise.all(t);
};
ve.spread = c5;
ve.isAxiosError = f5;
ve.formToJSON = (e) => Rm(O.isHTMLForm(e) ? new FormData(e) : e);
ve.defaults.baseURL = "https://dev-api.defifranc.com/";
const d5 = ({ children: e, dispatchAlert: t }) => {
    const n = B0();
    return (
      x.exports.useEffect(() => {
        const r = (a) => a,
          o = (a) => a,
          i = (a) => {
            let u = (a == null ? void 0 : a.message) || "Server Error";
            return (
              a.code !== "ERR_CANCELED" && t({ type: "error", msg: u }),
              Promise.reject(a)
            );
          },
          s = ve.interceptors.request.use(r, i),
          l = ve.interceptors.response.use(o, i);
        return () => {
          ve.interceptors.request.eject(s), ve.interceptors.response.eject(l);
        };
      }, [n, t]),
      e
    );
  },
  p5 = (e, t) => {
    switch (t.type) {
      case "success":
        return (e = t), e;
      case "error":
        return (e = t), e;
      case "warning":
        return (e = t), e;
      case "info":
        return (e = t), e;
      case "clear":
        return (e = t), e;
      default:
        return (e = t), e;
    }
  };
function $m(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = $m(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function qn() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = $m(e)) && (r && (r += " "), (r += t));
  return r;
}
function zi(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function zt(e, t, n = { clone: !0 }) {
  const r = n.clone ? D({}, e) : e;
  return (
    zi(e) &&
      zi(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (zi(t[o]) && o in e && zi(e[o])
            ? (r[o] = zt(e[o], t[o], n))
            : (r[o] = t[o]));
      }),
    r
  );
}
function Mr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function wn(e) {
  if (typeof e != "string") throw new Error(Mr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function h5(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function rs(e) {
  return (e && e.ownerDocument) || document;
}
function Mm(e) {
  return rs(e).defaultView || window;
}
function m5(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const v5 =
    typeof window < "u" ? x.exports.useLayoutEffect : x.exports.useEffect,
  g5 = v5;
function y5(e) {
  const t = x.exports.useRef(e);
  return (
    g5(() => {
      t.current = e;
    }),
    x.exports.useCallback((...n) => (0, t.current)(...n), [])
  );
}
function $c(...e) {
  return x.exports.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              m5(n, t);
            });
          },
    e
  );
}
function w5(e, t) {
  const n = D({}, t);
  return (
    Object.keys(e).forEach((r) => {
      n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function zm(e, t, n) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce(
          (i, s) => (s && (i.push(t(s)), n && n[s] && i.push(n[s])), i),
          []
        )
        .join(" ");
    }),
    r
  );
}
const Jd = (e) => e,
  x5 = () => {
    let e = Jd;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Jd;
      },
    };
  },
  S5 = x5(),
  E5 = S5,
  k5 = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    required: "required",
    selected: "selected",
  };
function Mc(e, t, n = "Mui") {
  const r = k5[t];
  return r ? `${n}-${r}` : `${E5.generate(e)}-${t}`;
}
function Dm(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = Mc(e, o, n);
    }),
    r
  );
}
function Fm(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var C5 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  _5 = Fm(function (e) {
    return (
      C5.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function O5(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function P5(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var T5 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(P5(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = O5(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Oe = "-ms-",
  Fs = "-moz-",
  H = "-webkit-",
  jm = "comm",
  zc = "rule",
  Dc = "decl",
  R5 = "@import",
  Um = "@keyframes",
  N5 = Math.abs,
  cl = String.fromCharCode,
  b5 = Object.assign;
function L5(e, t) {
  return (
    (((((((t << 2) ^ ze(e, 0)) << 2) ^ ze(e, 1)) << 2) ^ ze(e, 2)) << 2) ^
    ze(e, 3)
  );
}
function Bm(e) {
  return e.trim();
}
function A5(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function W(e, t, n) {
  return e.replace(t, n);
}
function _u(e, t) {
  return e.indexOf(t);
}
function ze(e, t) {
  return e.charCodeAt(t) | 0;
}
function Zo(e, t, n) {
  return e.slice(t, n);
}
function xt(e) {
  return e.length;
}
function Fc(e) {
  return e.length;
}
function Di(e, t) {
  return t.push(e), e;
}
function I5(e, t) {
  return e.map(t).join("");
}
var fl = 1,
  zr = 1,
  Hm = 0,
  He = 0,
  fe = 0,
  Yr = "";
function dl(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: fl,
    column: zr,
    length: s,
    return: "",
  };
}
function oo(e, t) {
  return b5(dl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function $5() {
  return fe;
}
function M5() {
  return (
    (fe = He > 0 ? ze(Yr, --He) : 0), zr--, fe === 10 && ((zr = 1), fl--), fe
  );
}
function Ke() {
  return (
    (fe = He < Hm ? ze(Yr, He++) : 0), zr++, fe === 10 && ((zr = 1), fl++), fe
  );
}
function _t() {
  return ze(Yr, He);
}
function os() {
  return He;
}
function fi(e, t) {
  return Zo(Yr, e, t);
}
function Go(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Wm(e) {
  return (fl = zr = 1), (Hm = xt((Yr = e))), (He = 0), [];
}
function Vm(e) {
  return (Yr = ""), e;
}
function is(e) {
  return Bm(fi(He - 1, Ou(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function z5(e) {
  for (; (fe = _t()) && fe < 33; ) Ke();
  return Go(e) > 2 || Go(fe) > 3 ? "" : " ";
}
function D5(e, t) {
  for (
    ;
    --t &&
    Ke() &&
    !(fe < 48 || fe > 102 || (fe > 57 && fe < 65) || (fe > 70 && fe < 97));

  );
  return fi(e, os() + (t < 6 && _t() == 32 && Ke() == 32));
}
function Ou(e) {
  for (; Ke(); )
    switch (fe) {
      case e:
        return He;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ou(fe);
        break;
      case 40:
        e === 41 && Ou(e);
        break;
      case 92:
        Ke();
        break;
    }
  return He;
}
function F5(e, t) {
  for (; Ke() && e + fe !== 47 + 10; )
    if (e + fe === 42 + 42 && _t() === 47) break;
  return "/*" + fi(t, He - 1) + "*" + cl(e === 47 ? e : Ke());
}
function j5(e) {
  for (; !Go(_t()); ) Ke();
  return fi(e, He);
}
function U5(e) {
  return Vm(ss("", null, null, null, [""], (e = Wm(e)), 0, [0], e));
}
function ss(e, t, n, r, o, i, s, l, a) {
  for (
    var u = 0,
      c = 0,
      f = s,
      d = 0,
      g = 0,
      m = 0,
      v = 1,
      S = 1,
      h = 1,
      p = 0,
      y = "",
      E = o,
      k = i,
      _ = r,
      C = y;
    S;

  )
    switch (((m = p), (p = Ke()))) {
      case 40:
        if (m != 108 && C.charCodeAt(f - 1) == 58) {
          _u((C += W(is(p), "&", "&\f")), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += is(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += z5(m);
        break;
      case 92:
        C += D5(os() - 1, 7);
        continue;
      case 47:
        switch (_t()) {
          case 42:
          case 47:
            Di(B5(F5(Ke(), os()), t, n), a);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * v:
        l[u++] = xt(C) * h;
      case 125 * v:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            g > 0 &&
              xt(C) - f &&
              Di(
                g > 32
                  ? tp(C + ";", r, n, f - 1)
                  : tp(W(C, " ", "") + ";", r, n, f - 2),
                a
              );
            break;
          case 59:
            C += ";";
          default:
            if (
              (Di((_ = ep(C, t, n, u, c, o, l, y, (E = []), (k = []), f)), i),
              p === 123)
            )
              if (c === 0) ss(C, t, _, _, E, i, f, l, k);
              else
                switch (d) {
                  case 100:
                  case 109:
                  case 115:
                    ss(
                      e,
                      _,
                      _,
                      r && Di(ep(e, _, _, 0, 0, o, l, y, o, (E = []), f), k),
                      o,
                      k,
                      f,
                      l,
                      r ? E : k
                    );
                    break;
                  default:
                    ss(C, _, _, _, [""], k, 0, l, k);
                }
        }
        (u = c = g = 0), (v = h = 1), (y = C = ""), (f = s);
        break;
      case 58:
        (f = 1 + xt(C)), (g = m);
      default:
        if (v < 1) {
          if (p == 123) --v;
          else if (p == 125 && v++ == 0 && M5() == 125) continue;
        }
        switch (((C += cl(p)), p * v)) {
          case 38:
            h = c > 0 ? 1 : ((C += "\f"), -1);
            break;
          case 44:
            (l[u++] = (xt(C) - 1) * h), (h = 1);
            break;
          case 64:
            _t() === 45 && (C += is(Ke())),
              (d = _t()),
              (c = f = xt((y = C += j5(os())))),
              p++;
            break;
          case 45:
            m === 45 && xt(C) == 2 && (v = 0);
        }
    }
  return i;
}
function ep(e, t, n, r, o, i, s, l, a, u, c) {
  for (
    var f = o - 1, d = o === 0 ? i : [""], g = Fc(d), m = 0, v = 0, S = 0;
    m < r;
    ++m
  )
    for (var h = 0, p = Zo(e, f + 1, (f = N5((v = s[m])))), y = e; h < g; ++h)
      (y = Bm(v > 0 ? d[h] + " " + p : W(p, /&\f/g, d[h]))) && (a[S++] = y);
  return dl(e, t, n, o === 0 ? zc : l, a, u, c);
}
function B5(e, t, n) {
  return dl(e, t, n, jm, cl($5()), Zo(e, 2, -2), 0);
}
function tp(e, t, n, r) {
  return dl(e, t, n, Dc, Zo(e, 0, r), Zo(e, r + 1, -1), r);
}
function Ym(e, t) {
  switch (L5(e, t)) {
    case 5103:
      return H + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return H + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return H + e + Fs + e + Oe + e + e;
    case 6828:
    case 4268:
      return H + e + Oe + e + e;
    case 6165:
      return H + e + Oe + "flex-" + e + e;
    case 5187:
      return (
        H + e + W(e, /(\w+).+(:[^]+)/, H + "box-$1$2" + Oe + "flex-$1$2") + e
      );
    case 5443:
      return H + e + Oe + "flex-item-" + W(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        H +
        e +
        Oe +
        "flex-line-pack" +
        W(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return H + e + Oe + W(e, "shrink", "negative") + e;
    case 5292:
      return H + e + Oe + W(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        H +
        "box-" +
        W(e, "-grow", "") +
        H +
        e +
        Oe +
        W(e, "grow", "positive") +
        e
      );
    case 4554:
      return H + W(e, /([^-])(transform)/g, "$1" + H + "$2") + e;
    case 6187:
      return (
        W(W(W(e, /(zoom-|grab)/, H + "$1"), /(image-set)/, H + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return W(e, /(image-set\([^]*)/, H + "$1$`$1");
    case 4968:
      return (
        W(
          W(e, /(.+:)(flex-)?(.*)/, H + "box-pack:$3" + Oe + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        H +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return W(e, /(.+)-inline(.+)/, H + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (xt(e) - 1 - t > 6)
        switch (ze(e, t + 1)) {
          case 109:
            if (ze(e, t + 4) !== 45) break;
          case 102:
            return (
              W(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  H +
                  "$2-$3$1" +
                  Fs +
                  (ze(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~_u(e, "stretch")
              ? Ym(W(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (ze(e, t + 1) !== 115) break;
    case 6444:
      switch (ze(e, xt(e) - 3 - (~_u(e, "!important") && 10))) {
        case 107:
          return W(e, ":", ":" + H) + e;
        case 101:
          return (
            W(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                H +
                (ze(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                H +
                "$2$3$1" +
                Oe +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (ze(e, t + 11)) {
        case 114:
          return H + e + Oe + W(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return H + e + Oe + W(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return H + e + Oe + W(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return H + e + Oe + e + e;
  }
  return e;
}
function Tr(e, t) {
  for (var n = "", r = Fc(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function H5(e, t, n, r) {
  switch (e.type) {
    case R5:
    case Dc:
      return (e.return = e.return || e.value);
    case jm:
      return "";
    case Um:
      return (e.return = e.value + "{" + Tr(e.children, r) + "}");
    case zc:
      e.value = e.props.join(",");
  }
  return xt((n = Tr(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function W5(e) {
  var t = Fc(e);
  return function (n, r, o, i) {
    for (var s = "", l = 0; l < t; l++) s += e[l](n, r, o, i) || "";
    return s;
  };
}
function V5(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Y5(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Dc:
        e.return = Ym(e.value, e.length);
        break;
      case Um:
        return Tr([oo(e, { value: W(e.value, "@", "@" + H) })], r);
      case zc:
        if (e.length)
          return I5(e.props, function (o) {
            switch (A5(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Tr(
                  [oo(e, { props: [W(o, /:(read-\w+)/, ":" + Fs + "$1")] })],
                  r
                );
              case "::placeholder":
                return Tr(
                  [
                    oo(e, {
                      props: [W(o, /:(plac\w+)/, ":" + H + "input-$1")],
                    }),
                    oo(e, { props: [W(o, /:(plac\w+)/, ":" + Fs + "$1")] }),
                    oo(e, { props: [W(o, /:(plac\w+)/, Oe + "input-$1")] }),
                  ],
                  r
                );
            }
            return "";
          });
    }
}
var X5 = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = _t()), o === 38 && i === 12 && (n[r] = 1), !Go(i);

    )
      Ke();
    return fi(t, He);
  },
  K5 = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Go(o)) {
        case 0:
          o === 38 && _t() === 12 && (n[r] = 1), (t[r] += X5(He - 1, n, r));
          break;
        case 2:
          t[r] += is(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = _t() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += cl(o);
      }
    while ((o = Ke()));
    return t;
  },
  Q5 = function (t, n) {
    return Vm(K5(Wm(t), n));
  },
  np = new WeakMap(),
  q5 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !np.get(r)) &&
        !o
      ) {
        np.set(t, !0);
        for (
          var i = [], s = Q5(n, i), l = r.props, a = 0, u = 0;
          a < s.length;
          a++
        )
          for (var c = 0; c < l.length; c++, u++)
            t.props[u] = i[a] ? s[a].replace(/&\f/g, l[c]) : l[c] + " " + s[a];
      }
    }
  },
  Z5 = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  },
  G5 = [Y5],
  J5 = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (v) {
        var S = v.getAttribute("data-emotion");
        S.indexOf(" ") !== -1 &&
          (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || G5,
      i = {},
      s,
      l = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (v) {
          for (
            var S = v.getAttribute("data-emotion").split(" "), h = 1;
            h < S.length;
            h++
          )
            i[S[h]] = !0;
          l.push(v);
        }
      );
    var a,
      u = [q5, Z5];
    {
      var c,
        f = [
          H5,
          V5(function (v) {
            c.insert(v);
          }),
        ],
        d = W5(u.concat(o, f)),
        g = function (S) {
          return Tr(U5(S), d);
        };
      a = function (S, h, p, y) {
        (c = p),
          g(S ? S + "{" + h.styles + "}" : h.styles),
          y && (m.inserted[h.name] = !0);
      };
    }
    var m = {
      key: n,
      sheet: new T5({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: a,
    };
    return m.sheet.hydrate(l), m;
  },
  Xm = { exports: {} },
  Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var we = typeof Symbol == "function" && Symbol.for,
  jc = we ? Symbol.for("react.element") : 60103,
  Uc = we ? Symbol.for("react.portal") : 60106,
  pl = we ? Symbol.for("react.fragment") : 60107,
  hl = we ? Symbol.for("react.strict_mode") : 60108,
  ml = we ? Symbol.for("react.profiler") : 60114,
  vl = we ? Symbol.for("react.provider") : 60109,
  gl = we ? Symbol.for("react.context") : 60110,
  Bc = we ? Symbol.for("react.async_mode") : 60111,
  yl = we ? Symbol.for("react.concurrent_mode") : 60111,
  wl = we ? Symbol.for("react.forward_ref") : 60112,
  xl = we ? Symbol.for("react.suspense") : 60113,
  e3 = we ? Symbol.for("react.suspense_list") : 60120,
  Sl = we ? Symbol.for("react.memo") : 60115,
  El = we ? Symbol.for("react.lazy") : 60116,
  t3 = we ? Symbol.for("react.block") : 60121,
  n3 = we ? Symbol.for("react.fundamental") : 60117,
  r3 = we ? Symbol.for("react.responder") : 60118,
  o3 = we ? Symbol.for("react.scope") : 60119;
function Ge(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case jc:
        switch (((e = e.type), e)) {
          case Bc:
          case yl:
          case pl:
          case ml:
          case hl:
          case xl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case gl:
              case wl:
              case El:
              case Sl:
              case vl:
                return e;
              default:
                return t;
            }
        }
      case Uc:
        return t;
    }
  }
}
function Km(e) {
  return Ge(e) === yl;
}
Y.AsyncMode = Bc;
Y.ConcurrentMode = yl;
Y.ContextConsumer = gl;
Y.ContextProvider = vl;
Y.Element = jc;
Y.ForwardRef = wl;
Y.Fragment = pl;
Y.Lazy = El;
Y.Memo = Sl;
Y.Portal = Uc;
Y.Profiler = ml;
Y.StrictMode = hl;
Y.Suspense = xl;
Y.isAsyncMode = function (e) {
  return Km(e) || Ge(e) === Bc;
};
Y.isConcurrentMode = Km;
Y.isContextConsumer = function (e) {
  return Ge(e) === gl;
};
Y.isContextProvider = function (e) {
  return Ge(e) === vl;
};
Y.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === jc;
};
Y.isForwardRef = function (e) {
  return Ge(e) === wl;
};
Y.isFragment = function (e) {
  return Ge(e) === pl;
};
Y.isLazy = function (e) {
  return Ge(e) === El;
};
Y.isMemo = function (e) {
  return Ge(e) === Sl;
};
Y.isPortal = function (e) {
  return Ge(e) === Uc;
};
Y.isProfiler = function (e) {
  return Ge(e) === ml;
};
Y.isStrictMode = function (e) {
  return Ge(e) === hl;
};
Y.isSuspense = function (e) {
  return Ge(e) === xl;
};
Y.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === pl ||
    e === yl ||
    e === ml ||
    e === hl ||
    e === xl ||
    e === e3 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === El ||
        e.$$typeof === Sl ||
        e.$$typeof === vl ||
        e.$$typeof === gl ||
        e.$$typeof === wl ||
        e.$$typeof === n3 ||
        e.$$typeof === r3 ||
        e.$$typeof === o3 ||
        e.$$typeof === t3))
  );
};
Y.typeOf = Ge;
(function (e) {
  e.exports = Y;
})(Xm);
var Qm = Xm.exports,
  i3 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  s3 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  qm = {};
qm[Qm.ForwardRef] = i3;
qm[Qm.Memo] = s3;
var l3 = !0;
function a3(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var Zm = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || l3 === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  u3 = function (t, n, r) {
    Zm(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function c3(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var f3 = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  d3 = /[A-Z]|^ms/g,
  p3 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Gm = function (t) {
    return t.charCodeAt(1) === 45;
  },
  rp = function (t) {
    return t != null && typeof t != "boolean";
  },
  ua = Fm(function (e) {
    return Gm(e) ? e : e.replace(d3, "-$&").toLowerCase();
  }),
  op = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(p3, function (r, o, i) {
            return (St = { name: o, styles: i, next: St }), o;
          });
    }
    return f3[t] !== 1 && !Gm(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function Jo(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (St = { name: n.name, styles: n.styles, next: St }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (St = { name: r.name, styles: r.styles, next: St }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return h3(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = St,
          s = n(e);
        return (St = i), Jo(e, t, s);
      }
      break;
    }
  }
  if (t == null) return n;
  var l = t[n];
  return l !== void 0 ? l : n;
}
function h3(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Jo(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0
          ? (r += i + "{" + t[s] + "}")
          : rp(s) && (r += ua(i) + ":" + op(i, s) + ";");
      else if (
        Array.isArray(s) &&
        typeof s[0] == "string" &&
        (t == null || t[s[0]] === void 0)
      )
        for (var l = 0; l < s.length; l++)
          rp(s[l]) && (r += ua(i) + ":" + op(i, s[l]) + ";");
      else {
        var a = Jo(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += ua(i) + ":" + a + ";";
            break;
          }
          default:
            r += i + "{" + a + "}";
        }
      }
    }
  return r;
}
var ip = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  St,
  m3 = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    St = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((o = !1), (i += Jo(r, n, s)))
      : (i += s[0]);
    for (var l = 1; l < t.length; l++) (i += Jo(r, n, t[l])), o && (i += s[l]);
    ip.lastIndex = 0;
    for (var a = "", u; (u = ip.exec(i)) !== null; ) a += "-" + u[1];
    var c = c3(i) + a;
    return { name: c, styles: i, next: St };
  },
  v3 = function (t) {
    return t();
  },
  g3 = No["useInsertionEffect"] ? No["useInsertionEffect"] : !1,
  y3 = g3 || v3,
  Jm = x.exports.createContext(
    typeof HTMLElement < "u" ? J5({ key: "css" }) : null
  );
Jm.Provider;
var w3 = function (t) {
    return x.exports.forwardRef(function (n, r) {
      var o = x.exports.useContext(Jm);
      return t(n, o, r);
    });
  },
  x3 = x.exports.createContext({}),
  S3 = _5,
  E3 = function (t) {
    return t !== "theme";
  },
  sp = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? S3 : E3;
  },
  lp = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  k3 = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      Zm(n, r, o),
      y3(function () {
        return u3(n, r, o);
      }),
      null
    );
  },
  C3 = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var l = lp(t, n, r),
      a = l || sp(o),
      u = !a("as");
    return function () {
      var c = arguments,
        f =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && f.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        f.push.apply(f, c);
      else {
        f.push(c[0][0]);
        for (var d = c.length, g = 1; g < d; g++) f.push(c[g], c[0][g]);
      }
      var m = w3(function (v, S, h) {
        var p = (u && v.as) || o,
          y = "",
          E = [],
          k = v;
        if (v.theme == null) {
          k = {};
          for (var _ in v) k[_] = v[_];
          k.theme = x.exports.useContext(x3);
        }
        typeof v.className == "string"
          ? (y = a3(S.registered, E, v.className))
          : v.className != null && (y = v.className + " ");
        var C = m3(f.concat(E), S.registered, k);
        (y += S.key + "-" + C.name), s !== void 0 && (y += " " + s);
        var R = u && l === void 0 ? sp(p) : a,
          $ = {};
        for (var N in v) (u && N === "as") || (R(N) && ($[N] = v[N]));
        return (
          ($.className = y),
          ($.ref = h),
          x.exports.createElement(
            x.exports.Fragment,
            null,
            x.exports.createElement(k3, {
              cache: S,
              serialized: C,
              isStringTag: typeof p == "string",
            }),
            x.exports.createElement(p, $)
          )
        );
      });
      return (
        (m.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (m.defaultProps = t.defaultProps),
        (m.__emotion_real = m),
        (m.__emotion_base = o),
        (m.__emotion_styles = f),
        (m.__emotion_forwardProp = l),
        Object.defineProperty(m, "toString", {
          value: function () {
            return "." + s;
          },
        }),
        (m.withComponent = function (v, S) {
          return e(v, D({}, n, S, { shouldForwardProp: lp(m, S, !0) })).apply(
            void 0,
            f
          );
        }),
        m
      );
    };
  },
  _3 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Pu = C3.bind();
_3.forEach(function (e) {
  Pu[e] = Pu(e);
});
const O3 = Pu;
/** @license MUI v5.10.8
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function P3(e, t) {
  return O3(e, t);
}
const T3 = (e, t) => {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
};
function Po(e, t) {
  return t ? zt(e, t, { clone: !1 }) : e;
}
const Hc = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  ap = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Hc[e]}px)`,
  };
function Pn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || ap;
    return t.reduce((s, l, a) => ((s[i.up(i.keys[a])] = n(t[a])), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || ap;
    return Object.keys(t).reduce((s, l) => {
      if (Object.keys(i.values || Hc).indexOf(l) !== -1) {
        const a = i.up(l);
        s[a] = n(t[l], l);
      } else {
        const a = l;
        s[a] = t[a];
      }
      return s;
    }, {});
  }
  return n(t);
}
function R3(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function N3(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Wc(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function up(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = Wc(e, n) || r),
    t && (o = t(o)),
    o
  );
}
function L(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const l = s[t],
        a = s.theme,
        u = Wc(a, r) || {};
      return Pn(s, l, (f) => {
        let d = up(u, o, f);
        return (
          f === d &&
            typeof f == "string" &&
            (d = up(u, o, `${t}${f === "default" ? "" : wn(f)}`, f)),
          n === !1 ? d : { [n]: d }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function Tn(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? Po(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function b3(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const L3 = { m: "margin", p: "padding" },
  A3 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  cp = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  I3 = b3((e) => {
    if (e.length > 2)
      if (cp[e]) e = cp[e];
      else return [e];
    const [t, n] = e.split(""),
      r = L3[t],
      o = A3[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  $3 = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  M3 = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ],
  e1 = [...$3, ...M3];
function di(e, t, n, r) {
  var o;
  const i = (o = Wc(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (s) => (typeof s == "string" ? s : i * s)
    : Array.isArray(i)
    ? (s) => (typeof s == "string" ? s : i[s])
    : typeof i == "function"
    ? i
    : () => {};
}
function t1(e) {
  return di(e, "spacing", 8);
}
function pi(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function z3(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = pi(t, n)), r), {});
}
function D3(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = I3(n),
    i = z3(o, r),
    s = e[n];
  return Pn(e, s, i);
}
function F3(e, t) {
  const n = t1(e.theme);
  return Object.keys(e)
    .map((r) => D3(e, t, r, n))
    .reduce(Po, {});
}
function kl(e) {
  return F3(e, e1);
}
kl.propTypes = {};
kl.filterProps = e1;
function hi(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const j3 = L({ prop: "border", themeKey: "borders", transform: hi }),
  U3 = L({ prop: "borderTop", themeKey: "borders", transform: hi }),
  B3 = L({ prop: "borderRight", themeKey: "borders", transform: hi }),
  H3 = L({ prop: "borderBottom", themeKey: "borders", transform: hi }),
  W3 = L({ prop: "borderLeft", themeKey: "borders", transform: hi }),
  V3 = L({ prop: "borderColor", themeKey: "palette" }),
  Y3 = L({ prop: "borderTopColor", themeKey: "palette" }),
  X3 = L({ prop: "borderRightColor", themeKey: "palette" }),
  K3 = L({ prop: "borderBottomColor", themeKey: "palette" }),
  Q3 = L({ prop: "borderLeftColor", themeKey: "palette" }),
  Vc = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = di(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: pi(t, r) });
      return Pn(e, e.borderRadius, n);
    }
    return null;
  };
Vc.propTypes = {};
Vc.filterProps = ["borderRadius"];
const q3 = Tn(j3, U3, B3, H3, W3, V3, Y3, X3, K3, Q3, Vc),
  n1 = q3,
  Z3 = L({
    prop: "displayPrint",
    cssProperty: !1,
    transform: (e) => ({ "@media print": { display: e } }),
  }),
  G3 = L({ prop: "display" }),
  J3 = L({ prop: "overflow" }),
  eS = L({ prop: "textOverflow" }),
  tS = L({ prop: "visibility" }),
  nS = L({ prop: "whiteSpace" }),
  r1 = Tn(Z3, G3, J3, eS, tS, nS),
  rS = L({ prop: "flexBasis" }),
  oS = L({ prop: "flexDirection" }),
  iS = L({ prop: "flexWrap" }),
  sS = L({ prop: "justifyContent" }),
  lS = L({ prop: "alignItems" }),
  aS = L({ prop: "alignContent" }),
  uS = L({ prop: "order" }),
  cS = L({ prop: "flex" }),
  fS = L({ prop: "flexGrow" }),
  dS = L({ prop: "flexShrink" }),
  pS = L({ prop: "alignSelf" }),
  hS = L({ prop: "justifyItems" }),
  mS = L({ prop: "justifySelf" }),
  vS = Tn(rS, oS, iS, sS, lS, aS, uS, cS, fS, dS, pS, hS, mS),
  o1 = vS,
  Yc = (e) => {
    if (e.gap !== void 0 && e.gap !== null) {
      const t = di(e.theme, "spacing", 8),
        n = (r) => ({ gap: pi(t, r) });
      return Pn(e, e.gap, n);
    }
    return null;
  };
Yc.propTypes = {};
Yc.filterProps = ["gap"];
const Xc = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = di(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: pi(t, r) });
    return Pn(e, e.columnGap, n);
  }
  return null;
};
Xc.propTypes = {};
Xc.filterProps = ["columnGap"];
const Kc = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = di(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: pi(t, r) });
    return Pn(e, e.rowGap, n);
  }
  return null;
};
Kc.propTypes = {};
Kc.filterProps = ["rowGap"];
const gS = L({ prop: "gridColumn" }),
  yS = L({ prop: "gridRow" }),
  wS = L({ prop: "gridAutoFlow" }),
  xS = L({ prop: "gridAutoColumns" }),
  SS = L({ prop: "gridAutoRows" }),
  ES = L({ prop: "gridTemplateColumns" }),
  kS = L({ prop: "gridTemplateRows" }),
  CS = L({ prop: "gridTemplateAreas" }),
  _S = L({ prop: "gridArea" }),
  OS = Tn(Yc, Xc, Kc, gS, yS, wS, xS, SS, ES, kS, CS, _S),
  i1 = OS,
  PS = L({ prop: "color", themeKey: "palette" }),
  TS = L({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
  }),
  RS = L({ prop: "backgroundColor", themeKey: "palette" }),
  NS = Tn(PS, TS, RS),
  s1 = NS,
  bS = L({ prop: "position" }),
  LS = L({ prop: "zIndex", themeKey: "zIndex" }),
  AS = L({ prop: "top" }),
  IS = L({ prop: "right" }),
  $S = L({ prop: "bottom" }),
  MS = L({ prop: "left" }),
  l1 = Tn(bS, LS, AS, IS, $S, MS),
  zS = L({ prop: "boxShadow", themeKey: "shadows" }),
  a1 = zS;
function Rn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const DS = L({ prop: "width", transform: Rn }),
  u1 = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o, i;
        return {
          maxWidth:
            ((r = e.theme) == null ||
            (o = r.breakpoints) == null ||
            (i = o.values) == null
              ? void 0
              : i[n]) ||
            Hc[n] ||
            Rn(n),
        };
      };
      return Pn(e, e.maxWidth, t);
    }
    return null;
  };
u1.filterProps = ["maxWidth"];
const FS = L({ prop: "minWidth", transform: Rn }),
  jS = L({ prop: "height", transform: Rn }),
  US = L({ prop: "maxHeight", transform: Rn }),
  BS = L({ prop: "minHeight", transform: Rn });
L({ prop: "size", cssProperty: "width", transform: Rn });
L({ prop: "size", cssProperty: "height", transform: Rn });
const HS = L({ prop: "boxSizing" }),
  WS = Tn(DS, u1, FS, jS, US, BS, HS),
  c1 = WS,
  VS = L({ prop: "fontFamily", themeKey: "typography" }),
  YS = L({ prop: "fontSize", themeKey: "typography" }),
  XS = L({ prop: "fontStyle", themeKey: "typography" }),
  KS = L({ prop: "fontWeight", themeKey: "typography" }),
  QS = L({ prop: "letterSpacing" }),
  qS = L({ prop: "textTransform" }),
  ZS = L({ prop: "lineHeight" }),
  GS = L({ prop: "textAlign" }),
  JS = L({ prop: "typography", cssProperty: !1, themeKey: "typography" }),
  eE = Tn(JS, VS, YS, XS, KS, QS, ZS, GS, qS),
  f1 = eE,
  fp = {
    borders: n1.filterProps,
    display: r1.filterProps,
    flexbox: o1.filterProps,
    grid: i1.filterProps,
    positions: l1.filterProps,
    palette: s1.filterProps,
    shadows: a1.filterProps,
    sizing: c1.filterProps,
    spacing: kl.filterProps,
    typography: f1.filterProps,
  },
  d1 = {
    borders: n1,
    display: r1,
    flexbox: o1,
    grid: i1,
    positions: l1,
    palette: s1,
    shadows: a1,
    sizing: c1,
    spacing: kl,
    typography: f1,
  };
Object.keys(fp).reduce(
  (e, t) => (
    fp[t].forEach((n) => {
      e[n] = d1[t];
    }),
    e
  ),
  {}
);
function tE(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function nE(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function rE(e = d1) {
  const t = Object.keys(e).reduce(
    (o, i) => (
      e[i].filterProps.forEach((s) => {
        o[s] = e[i];
      }),
      o
    ),
    {}
  );
  function n(o, i, s) {
    const l = { [o]: i, theme: s },
      a = t[o];
    return a ? a(l) : { [o]: i };
  }
  function r(o) {
    const { sx: i, theme: s = {} } = o || {};
    if (!i) return null;
    function l(a) {
      let u = a;
      if (typeof a == "function") u = a(s);
      else if (typeof a != "object") return a;
      if (!u) return null;
      const c = R3(s.breakpoints),
        f = Object.keys(c);
      let d = c;
      return (
        Object.keys(u).forEach((g) => {
          const m = nE(u[g], s);
          if (m != null)
            if (typeof m == "object")
              if (t[g]) d = Po(d, n(g, m, s));
              else {
                const v = Pn({ theme: s }, m, (S) => ({ [g]: S }));
                tE(v, m) ? (d[g] = r({ sx: m, theme: s })) : (d = Po(d, v));
              }
            else d = Po(d, n(g, m, s));
        }),
        N3(f, d)
      );
    }
    return Array.isArray(i) ? i.map(l) : l(i);
  }
  return r;
}
const p1 = rE();
p1.filterProps = ["sx"];
const oE = p1,
  iE = ["values", "unit", "step"],
  sE = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => D({}, n, { [r.key]: r.val }), {})
    );
  };
function lE(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = Ae(e, iE),
    i = sE(t),
    s = Object.keys(i);
  function l(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function a(d) {
    return `@media (max-width:${
      (typeof t[d] == "number" ? t[d] : d) - r / 100
    }${n})`;
  }
  function u(d, g) {
    const m = s.indexOf(g);
    return `@media (min-width:${
      typeof t[d] == "number" ? t[d] : d
    }${n}) and (max-width:${
      (m !== -1 && typeof t[s[m]] == "number" ? t[s[m]] : g) - r / 100
    }${n})`;
  }
  function c(d) {
    return s.indexOf(d) + 1 < s.length ? u(d, s[s.indexOf(d) + 1]) : l(d);
  }
  function f(d) {
    const g = s.indexOf(d);
    return g === 0
      ? l(s[1])
      : g === s.length - 1
      ? a(s[g])
      : u(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return D(
    {
      keys: s,
      values: i,
      up: l,
      down: a,
      between: u,
      only: c,
      not: f,
      unit: n,
    },
    o
  );
}
const aE = { borderRadius: 4 },
  uE = aE;
function cE(e = 8) {
  if (e.mui) return e;
  const t = t1({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const s = t(i);
          return typeof s == "number" ? `${s}px` : s;
        })
        .join(" ");
  return (n.mui = !0), n;
}
const fE = ["breakpoints", "palette", "spacing", "shape"];
function Qc(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    s = Ae(e, fE),
    l = lE(n),
    a = cE(o);
  let u = zt(
    {
      breakpoints: l,
      direction: "ltr",
      components: {},
      palette: D({ mode: "light" }, r),
      spacing: a,
      shape: D({}, uE, i),
    },
    s
  );
  return (u = t.reduce((c, f) => zt(c, f), u)), u;
}
const dE = x.exports.createContext(null),
  pE = dE;
function hE() {
  return x.exports.useContext(pE);
}
function mE(e) {
  return Object.keys(e).length === 0;
}
function vE(e = null) {
  const t = hE();
  return !t || mE(t) ? e : t;
}
const gE = Qc();
function h1(e = gE) {
  return vE(e);
}
const yE = ["variant"];
function dp(e) {
  return e.length === 0;
}
function m1(e) {
  const { variant: t } = e,
    n = Ae(e, yE);
  let r = t || "";
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === "color"
          ? (r += dp(r) ? e[o] : wn(e[o]))
          : (r += `${dp(r) ? o : wn(o)}${wn(e[o].toString())}`);
      }),
    r
  );
}
const wE = [
    "name",
    "slot",
    "skipVariantsResolver",
    "skipSx",
    "overridesResolver",
  ],
  xE = ["theme"],
  SE = ["theme"];
function io(e) {
  return Object.keys(e).length === 0;
}
function EE(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const kE = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  CE = (e, t) => {
    let n = [];
    t &&
      t.components &&
      t.components[e] &&
      t.components[e].variants &&
      (n = t.components[e].variants);
    const r = {};
    return (
      n.forEach((o) => {
        const i = m1(o.props);
        r[i] = o.style;
      }),
      r
    );
  },
  _E = (e, t, n, r) => {
    var o, i;
    const { ownerState: s = {} } = e,
      l = [],
      a =
        n == null || (o = n.components) == null || (i = o[r]) == null
          ? void 0
          : i.variants;
    return (
      a &&
        a.forEach((u) => {
          let c = !0;
          Object.keys(u.props).forEach((f) => {
            s[f] !== u.props[f] && e[f] !== u.props[f] && (c = !1);
          }),
            c && l.push(t[m1(u.props)]);
        }),
      l
    );
  };
function ls(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const OE = Qc();
function PE(e = {}) {
  const {
      defaultTheme: t = OE,
      rootShouldForwardProp: n = ls,
      slotShouldForwardProp: r = ls,
      styleFunctionSx: o = oE,
    } = e,
    i = (s) => {
      const l = io(s.theme) ? t : s.theme;
      return o(D({}, s, { theme: l }));
    };
  return (
    (i.__mui_systemSx = !0),
    (s, l = {}) => {
      T3(s, (E) => E.filter((k) => !(k != null && k.__mui_systemSx)));
      const {
          name: a,
          slot: u,
          skipVariantsResolver: c,
          skipSx: f,
          overridesResolver: d,
        } = l,
        g = Ae(l, wE),
        m = c !== void 0 ? c : (u && u !== "Root") || !1,
        v = f || !1;
      let S,
        h = ls;
      u === "Root" ? (h = n) : u ? (h = r) : EE(s) && (h = void 0);
      const p = P3(s, D({ shouldForwardProp: h, label: S }, g)),
        y = (E, ...k) => {
          const _ = k
            ? k.map((N) =>
                typeof N == "function" && N.__emotion_real !== N
                  ? (j) => {
                      let { theme: J } = j,
                        se = Ae(j, xE);
                      return N(D({ theme: io(J) ? t : J }, se));
                    }
                  : N
              )
            : [];
          let C = E;
          a &&
            d &&
            _.push((N) => {
              const j = io(N.theme) ? t : N.theme,
                J = kE(a, j);
              if (J) {
                const se = {};
                return (
                  Object.entries(J).forEach(([xe, Me]) => {
                    se[xe] =
                      typeof Me == "function" ? Me(D({}, N, { theme: j })) : Me;
                  }),
                  d(N, se)
                );
              }
              return null;
            }),
            a &&
              !m &&
              _.push((N) => {
                const j = io(N.theme) ? t : N.theme;
                return _E(N, CE(a, j), j, a);
              }),
            v || _.push(i);
          const R = _.length - k.length;
          if (Array.isArray(E) && R > 0) {
            const N = new Array(R).fill("");
            (C = [...E, ...N]), (C.raw = [...E.raw, ...N]);
          } else
            typeof E == "function" &&
              E.__emotion_real !== E &&
              (C = (N) => {
                let { theme: j } = N,
                  J = Ae(N, SE);
                return E(D({ theme: io(j) ? t : j }, J));
              });
          return p(C, ..._);
        };
      return p.withConfig && (y.withConfig = p.withConfig), y;
    }
  );
}
function TE(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : w5(t.components[n].defaultProps, r);
}
function RE({ props: e, name: t, defaultTheme: n }) {
  const r = h1(n);
  return TE({ theme: r, name: t, props: e });
}
function v1(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function NE(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Dr(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Dr(NE(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(Mr(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error(Mr(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function qc(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function bE(e) {
  e = Dr(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, c = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let l = "rgb";
  const a = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((l += "a"), a.push(t[3])), qc({ type: l, values: a })
  );
}
function Tu(e) {
  e = Dr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Dr(bE(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function LE(e, t) {
  const n = Tu(e),
    r = Tu(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function g1(e, t) {
  if (((e = Dr(e)), (t = v1(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return qc(e);
}
function y1(e, t) {
  if (((e = Dr(e)), (t = v1(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return qc(e);
}
function AE(e, t = 0.15) {
  return Tu(e) > 0.5 ? g1(e, t) : y1(e, t);
}
function pp(e) {
  return e.substring(2).toLowerCase();
}
function IE(e, t) {
  return (
    t.documentElement.clientWidth < e.clientX ||
    t.documentElement.clientHeight < e.clientY
  );
}
function $E(e) {
  const {
      children: t,
      disableReactTree: n = !1,
      mouseEvent: r = "onClick",
      onClickAway: o,
      touchEvent: i = "onTouchEnd",
    } = e,
    s = x.exports.useRef(!1),
    l = x.exports.useRef(null),
    a = x.exports.useRef(!1),
    u = x.exports.useRef(!1);
  x.exports.useEffect(
    () => (
      setTimeout(() => {
        a.current = !0;
      }, 0),
      () => {
        a.current = !1;
      }
    ),
    []
  );
  const c = $c(t.ref, l),
    f = y5((m) => {
      const v = u.current;
      u.current = !1;
      const S = rs(l.current);
      if (!a.current || !l.current || ("clientX" in m && IE(m, S))) return;
      if (s.current) {
        s.current = !1;
        return;
      }
      let h;
      m.composedPath
        ? (h = m.composedPath().indexOf(l.current) > -1)
        : (h =
            !S.documentElement.contains(m.target) ||
            l.current.contains(m.target)),
        !h && (n || !v) && o(m);
    }),
    d = (m) => (v) => {
      u.current = !0;
      const S = t.props[m];
      S && S(v);
    },
    g = { ref: c };
  return (
    i !== !1 && (g[i] = d(i)),
    x.exports.useEffect(() => {
      if (i !== !1) {
        const m = pp(i),
          v = rs(l.current),
          S = () => {
            s.current = !0;
          };
        return (
          v.addEventListener(m, f),
          v.addEventListener("touchmove", S),
          () => {
            v.removeEventListener(m, f), v.removeEventListener("touchmove", S);
          }
        );
      }
    }, [f, i]),
    r !== !1 && (g[r] = d(r)),
    x.exports.useEffect(() => {
      if (r !== !1) {
        const m = pp(r),
          v = rs(l.current);
        return (
          v.addEventListener(m, f),
          () => {
            v.removeEventListener(m, f);
          }
        );
      }
    }, [f, r]),
    w(x.exports.Fragment, { children: x.exports.cloneElement(t, g) })
  );
}
function ME(e, t) {
  return D(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
const zE = { black: "#000", white: "#fff" },
  ei = zE,
  DE = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  FE = DE,
  jE = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  ir = jE,
  UE = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  sr = UE,
  BE = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  so = BE,
  HE = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  lr = HE,
  WE = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  ar = WE,
  VE = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  ur = VE,
  YE = ["mode", "contrastThreshold", "tonalOffset"],
  hp = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: ei.white, default: ei.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  ca = {
    text: {
      primary: ei.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: ei.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function mp(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = y1(e.main, o))
      : t === "dark" && (e.dark = g1(e.main, i)));
}
function XE(e = "light") {
  return e === "dark"
    ? { main: lr[200], light: lr[50], dark: lr[400] }
    : { main: lr[700], light: lr[400], dark: lr[800] };
}
function KE(e = "light") {
  return e === "dark"
    ? { main: ir[200], light: ir[50], dark: ir[400] }
    : { main: ir[500], light: ir[300], dark: ir[700] };
}
function QE(e = "light") {
  return e === "dark"
    ? { main: sr[500], light: sr[300], dark: sr[700] }
    : { main: sr[700], light: sr[400], dark: sr[800] };
}
function qE(e = "light") {
  return e === "dark"
    ? { main: ar[400], light: ar[300], dark: ar[700] }
    : { main: ar[700], light: ar[500], dark: ar[900] };
}
function ZE(e = "light") {
  return e === "dark"
    ? { main: ur[400], light: ur[300], dark: ur[700] }
    : { main: ur[800], light: ur[500], dark: ur[900] };
}
function GE(e = "light") {
  return e === "dark"
    ? { main: so[400], light: so[300], dark: so[700] }
    : { main: "#ed6c02", light: so[500], dark: so[900] };
}
function JE(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = Ae(e, YE),
    i = e.primary || XE(t),
    s = e.secondary || KE(t),
    l = e.error || QE(t),
    a = e.info || qE(t),
    u = e.success || ZE(t),
    c = e.warning || GE(t);
  function f(v) {
    return LE(v, ca.text.primary) >= n ? ca.text.primary : hp.text.primary;
  }
  const d = ({
      color: v,
      name: S,
      mainShade: h = 500,
      lightShade: p = 300,
      darkShade: y = 700,
    }) => {
      if (
        ((v = D({}, v)),
        !v.main && v[h] && (v.main = v[h]),
        !v.hasOwnProperty("main"))
      )
        throw new Error(Mr(11, S ? ` (${S})` : "", h));
      if (typeof v.main != "string")
        throw new Error(Mr(12, S ? ` (${S})` : "", JSON.stringify(v.main)));
      return (
        mp(v, "light", p, r),
        mp(v, "dark", y, r),
        v.contrastText || (v.contrastText = f(v.main)),
        v
      );
    },
    g = { dark: ca, light: hp };
  return zt(
    D(
      {
        common: D({}, ei),
        mode: t,
        primary: d({ color: i, name: "primary" }),
        secondary: d({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: d({ color: l, name: "error" }),
        warning: d({ color: c, name: "warning" }),
        info: d({ color: a, name: "info" }),
        success: d({ color: u, name: "success" }),
        grey: FE,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: d,
        tonalOffset: r,
      },
      g[t]
    ),
    o
  );
}
const e4 = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function t4(e) {
  return Math.round(e * 1e5) / 1e5;
}
const vp = { textTransform: "uppercase" },
  gp = '"Roboto", "Helvetica", "Arial", sans-serif';
function n4(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = gp,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: l = 500,
      fontWeightBold: a = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: f,
    } = n,
    d = Ae(n, e4),
    g = o / 14,
    m = f || ((h) => `${(h / u) * g}rem`),
    v = (h, p, y, E, k) =>
      D(
        { fontFamily: r, fontWeight: h, fontSize: m(p), lineHeight: y },
        r === gp ? { letterSpacing: `${t4(E / p)}em` } : {},
        k,
        c
      ),
    S = {
      h1: v(i, 96, 1.167, -1.5),
      h2: v(i, 60, 1.2, -0.5),
      h3: v(s, 48, 1.167, 0),
      h4: v(s, 34, 1.235, 0.25),
      h5: v(s, 24, 1.334, 0),
      h6: v(l, 20, 1.6, 0.15),
      subtitle1: v(s, 16, 1.75, 0.15),
      subtitle2: v(l, 14, 1.57, 0.1),
      body1: v(s, 16, 1.5, 0.15),
      body2: v(s, 14, 1.43, 0.15),
      button: v(l, 14, 1.75, 0.4, vp),
      caption: v(s, 12, 1.66, 0.4),
      overline: v(s, 12, 2.66, 1, vp),
    };
  return zt(
    D(
      {
        htmlFontSize: u,
        pxToRem: m,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: l,
        fontWeightBold: a,
      },
      S
    ),
    d,
    { clone: !1 }
  );
}
const r4 = 0.2,
  o4 = 0.14,
  i4 = 0.12;
function te(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${r4})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${o4})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${i4})`,
  ].join(",");
}
const s4 = [
    "none",
    te(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    te(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    te(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    te(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    te(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    te(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    te(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    te(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    te(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    te(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    te(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    te(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    te(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    te(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    te(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    te(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    te(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    te(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    te(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    te(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    te(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    te(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    te(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    te(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  l4 = s4,
  a4 = ["duration", "easing", "delay"],
  u4 = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  w1 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function yp(e) {
  return `${Math.round(e)}ms`;
}
function c4(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function f4(e) {
  const t = D({}, u4, e.easing),
    n = D({}, w1, e.duration);
  return D(
    {
      getAutoHeightDuration: c4,
      create: (o = ["all"], i = {}) => {
        const {
          duration: s = n.standard,
          easing: l = t.easeInOut,
          delay: a = 0,
        } = i;
        return (
          Ae(i, a4),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof s == "string" ? s : yp(s)} ${l} ${
                  typeof a == "string" ? a : yp(a)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const d4 = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  p4 = d4,
  h4 = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function m4(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    s = Ae(e, h4);
  if (e.vars) throw new Error(Mr(18));
  const l = JE(r),
    a = Qc(e);
  let u = zt(a, {
    mixins: ME(a.breakpoints, n),
    palette: l,
    shadows: l4.slice(),
    typography: n4(l, i),
    transitions: f4(o),
    zIndex: D({}, p4),
  });
  return (u = zt(u, s)), (u = t.reduce((c, f) => zt(c, f), u)), u;
}
const v4 = m4(),
  Zc = v4;
function x1() {
  return h1(Zc);
}
const g4 = (e) => e.scrollTop;
function js(e, t) {
  var n, r;
  const { timeout: o, easing: i, style: s = {} } = e;
  return {
    duration:
      (n = s.transitionDuration) != null
        ? n
        : typeof o == "number"
        ? o
        : o[t.mode] || 0,
    easing:
      (r = s.transitionTimingFunction) != null
        ? r
        : typeof i == "object"
        ? i[t.mode]
        : i,
    delay: s.transitionDelay,
  };
}
function S1({ props: e, name: t }) {
  return RE({ props: e, name: t, defaultTheme: Zc });
}
const y4 = (e) => ls(e) && e !== "classes",
  w4 = PE({ defaultTheme: Zc, rootShouldForwardProp: y4 }),
  tr = w4;
function x4(e) {
  return Mc("MuiSvgIcon", e);
}
Dm("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const S4 = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  E4 = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${wn(t)}`, `fontSize${wn(n)}`],
      };
    return zm(o, x4, r);
  },
  k4 = tr("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${wn(n.color)}`],
        t[`fontSize${wn(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, s, l, a, u, c, f, d, g, m, v, S, h, p;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (i = o.duration) == null
                  ? void 0
                  : i.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((s = e.typography) == null || (l = s.pxToRem) == null
            ? void 0
            : l.call(s, 20)) || "1.25rem",
        medium:
          ((a = e.typography) == null || (u = a.pxToRem) == null
            ? void 0
            : u.call(a, 24)) || "1.5rem",
        large:
          ((c = e.typography) == null || (f = c.pxToRem) == null
            ? void 0
            : f.call(c, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (d =
          (g = (e.vars || e).palette) == null || (m = g[t.color]) == null
            ? void 0
            : m.main) != null
          ? d
          : {
              action:
                (v = (e.vars || e).palette) == null || (S = v.action) == null
                  ? void 0
                  : S.active,
              disabled:
                (h = (e.vars || e).palette) == null || (p = h.action) == null
                  ? void 0
                  : p.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  E1 = x.exports.forwardRef(function (t, n) {
    const r = S1({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: s = "inherit",
        component: l = "svg",
        fontSize: a = "medium",
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: f,
        viewBox: d = "0 0 24 24",
      } = r,
      g = Ae(r, S4),
      m = D({}, r, {
        color: s,
        component: l,
        fontSize: a,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: d,
      }),
      v = {};
    c || (v.viewBox = d);
    const S = E4(m);
    return I(
      k4,
      D(
        {
          as: l,
          className: qn(S.root, i),
          focusable: "false",
          color: u,
          "aria-hidden": f ? void 0 : !0,
          role: f ? "img" : void 0,
          ref: n,
        },
        v,
        g,
        { ownerState: m, children: [o, f ? w("title", { children: f }) : null] }
      )
    );
  });
E1.muiName = "SvgIcon";
const Cl = E1,
  C4 = [
    "addEndListener",
    "appear",
    "children",
    "container",
    "direction",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ];
function _4(e, t, n) {
  const r = t.getBoundingClientRect(),
    o = n && n.getBoundingClientRect(),
    i = Mm(t);
  let s;
  if (t.fakeTransform) s = t.fakeTransform;
  else {
    const u = i.getComputedStyle(t);
    s =
      u.getPropertyValue("-webkit-transform") ||
      u.getPropertyValue("transform");
  }
  let l = 0,
    a = 0;
  if (s && s !== "none" && typeof s == "string") {
    const u = s.split("(")[1].split(")")[0].split(",");
    (l = parseInt(u[4], 10)), (a = parseInt(u[5], 10));
  }
  return e === "left"
    ? o
      ? `translateX(${o.right + l - r.left}px)`
      : `translateX(${i.innerWidth + l - r.left}px)`
    : e === "right"
    ? o
      ? `translateX(-${r.right - o.left - l}px)`
      : `translateX(-${r.left + r.width - l}px)`
    : e === "up"
    ? o
      ? `translateY(${o.bottom + a - r.top}px)`
      : `translateY(${i.innerHeight + a - r.top}px)`
    : o
    ? `translateY(-${r.top - o.top + r.height - a}px)`
    : `translateY(-${r.top + r.height - a}px)`;
}
function O4(e) {
  return typeof e == "function" ? e() : e;
}
function Fi(e, t, n) {
  const r = O4(n),
    o = _4(e, t, r);
  o && ((t.style.webkitTransform = o), (t.style.transform = o));
}
const P4 = x.exports.forwardRef(function (t, n) {
    const r = x1(),
      o = {
        enter: r.transitions.easing.easeOut,
        exit: r.transitions.easing.sharp,
      },
      i = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: s,
        appear: l = !0,
        children: a,
        container: u,
        direction: c = "down",
        easing: f = o,
        in: d,
        onEnter: g,
        onEntered: m,
        onEntering: v,
        onExit: S,
        onExited: h,
        onExiting: p,
        style: y,
        timeout: E = i,
        TransitionComponent: k = Oc,
      } = t,
      _ = Ae(t, C4),
      C = x.exports.useRef(null),
      R = $c(a.ref, C, n),
      $ = (P) => (A) => {
        P && (A === void 0 ? P(C.current) : P(C.current, A));
      },
      N = $((P, A) => {
        Fi(c, P, u), g4(P), g && g(P, A);
      }),
      j = $((P, A) => {
        const M = js({ timeout: E, style: y, easing: f }, { mode: "enter" });
        (P.style.webkitTransition = r.transitions.create(
          "-webkit-transform",
          D({}, M)
        )),
          (P.style.transition = r.transitions.create("transform", D({}, M))),
          (P.style.webkitTransform = "none"),
          (P.style.transform = "none"),
          v && v(P, A);
      }),
      J = $(m),
      se = $(p),
      xe = $((P) => {
        const A = js({ timeout: E, style: y, easing: f }, { mode: "exit" });
        (P.style.webkitTransition = r.transitions.create(
          "-webkit-transform",
          A
        )),
          (P.style.transition = r.transitions.create("transform", A)),
          Fi(c, P, u),
          S && S(P);
      }),
      Me = $((P) => {
        (P.style.webkitTransition = ""), (P.style.transition = ""), h && h(P);
      }),
      Ot = (P) => {
        s && s(C.current, P);
      },
      Re = x.exports.useCallback(() => {
        C.current && Fi(c, C.current, u);
      }, [c, u]);
    return (
      x.exports.useEffect(() => {
        if (d || c === "down" || c === "right") return;
        const P = h5(() => {
            C.current && Fi(c, C.current, u);
          }),
          A = Mm(C.current);
        return (
          A.addEventListener("resize", P),
          () => {
            P.clear(), A.removeEventListener("resize", P);
          }
        );
      }, [c, d, u]),
      x.exports.useEffect(() => {
        d || Re();
      }, [d, Re]),
      w(
        k,
        D(
          {
            nodeRef: C,
            onEnter: N,
            onEntered: J,
            onEntering: j,
            onExit: xe,
            onExited: Me,
            onExiting: se,
            addEndListener: Ot,
            appear: l,
            in: d,
            timeout: E,
          },
          _,
          {
            children: (P, A) =>
              x.exports.cloneElement(
                a,
                D(
                  {
                    ref: R,
                    style: D(
                      { visibility: P === "exited" && !d ? "hidden" : void 0 },
                      y,
                      a.props.style
                    ),
                  },
                  A
                )
              ),
          }
        )
      )
    );
  }),
  T4 = P4;
function R4(e) {
  return Mc("MuiCollapse", e);
}
Dm("MuiCollapse", [
  "root",
  "horizontal",
  "vertical",
  "entered",
  "hidden",
  "wrapper",
  "wrapperInner",
]);
const N4 = [
    "addEndListener",
    "children",
    "className",
    "collapsedSize",
    "component",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "orientation",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  b4 = (e) => {
    const { orientation: t, classes: n } = e,
      r = {
        root: ["root", `${t}`],
        entered: ["entered"],
        hidden: ["hidden"],
        wrapper: ["wrapper", `${t}`],
        wrapperInner: ["wrapperInner", `${t}`],
      };
    return zm(r, R4, n);
  },
  L4 = tr("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.orientation],
        n.state === "entered" && t.entered,
        n.state === "exited" && !n.in && n.collapsedSize === "0px" && t.hidden,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    D(
      {
        height: 0,
        overflow: "hidden",
        transition: e.transitions.create("height"),
      },
      t.orientation === "horizontal" && {
        height: "auto",
        width: 0,
        transition: e.transitions.create("width"),
      },
      t.state === "entered" &&
        D(
          { height: "auto", overflow: "visible" },
          t.orientation === "horizontal" && { width: "auto" }
        ),
      t.state === "exited" &&
        !t.in &&
        t.collapsedSize === "0px" && { visibility: "hidden" }
    )
  ),
  A4 = tr("div", {
    name: "MuiCollapse",
    slot: "Wrapper",
    overridesResolver: (e, t) => t.wrapper,
  })(({ ownerState: e }) =>
    D(
      { display: "flex", width: "100%" },
      e.orientation === "horizontal" && { width: "auto", height: "100%" }
    )
  ),
  I4 = tr("div", {
    name: "MuiCollapse",
    slot: "WrapperInner",
    overridesResolver: (e, t) => t.wrapperInner,
  })(({ ownerState: e }) =>
    D(
      { width: "100%" },
      e.orientation === "horizontal" && { width: "auto", height: "100%" }
    )
  ),
  k1 = x.exports.forwardRef(function (t, n) {
    const r = S1({ props: t, name: "MuiCollapse" }),
      {
        addEndListener: o,
        children: i,
        className: s,
        collapsedSize: l = "0px",
        component: a,
        easing: u,
        in: c,
        onEnter: f,
        onEntered: d,
        onEntering: g,
        onExit: m,
        onExited: v,
        onExiting: S,
        orientation: h = "vertical",
        style: p,
        timeout: y = w1.standard,
        TransitionComponent: E = Oc,
      } = r,
      k = Ae(r, N4),
      _ = D({}, r, { orientation: h, collapsedSize: l }),
      C = b4(_),
      R = x1(),
      $ = x.exports.useRef(),
      N = x.exports.useRef(null),
      j = x.exports.useRef(),
      J = typeof l == "number" ? `${l}px` : l,
      se = h === "horizontal",
      xe = se ? "width" : "height";
    x.exports.useEffect(
      () => () => {
        clearTimeout($.current);
      },
      []
    );
    const Me = x.exports.useRef(null),
      Ot = $c(n, Me),
      Re = (z) => (ee) => {
        if (z) {
          const We = Me.current;
          ee === void 0 ? z(We) : z(We, ee);
        }
      },
      P = () =>
        N.current ? N.current[se ? "clientWidth" : "clientHeight"] : 0,
      A = Re((z, ee) => {
        N.current && se && (N.current.style.position = "absolute"),
          (z.style[xe] = J),
          f && f(z, ee);
      }),
      M = Re((z, ee) => {
        const We = P();
        N.current && se && (N.current.style.position = "");
        const { duration: Pt, easing: Kt } = js(
          { style: p, timeout: y, easing: u },
          { mode: "enter" }
        );
        if (y === "auto") {
          const Gc = R.transitions.getAutoHeightDuration(We);
          (z.style.transitionDuration = `${Gc}ms`), (j.current = Gc);
        } else
          z.style.transitionDuration = typeof Pt == "string" ? Pt : `${Pt}ms`;
        (z.style[xe] = `${We}px`),
          (z.style.transitionTimingFunction = Kt),
          g && g(z, ee);
      }),
      X = Re((z, ee) => {
        (z.style[xe] = "auto"), d && d(z, ee);
      }),
      le = Re((z) => {
        (z.style[xe] = `${P()}px`), m && m(z);
      }),
      Xt = Re(v),
      st = Re((z) => {
        const ee = P(),
          { duration: We, easing: Pt } = js(
            { style: p, timeout: y, easing: u },
            { mode: "exit" }
          );
        if (y === "auto") {
          const Kt = R.transitions.getAutoHeightDuration(ee);
          (z.style.transitionDuration = `${Kt}ms`), (j.current = Kt);
        } else
          z.style.transitionDuration = typeof We == "string" ? We : `${We}ms`;
        (z.style[xe] = J), (z.style.transitionTimingFunction = Pt), S && S(z);
      });
    return w(
      E,
      D(
        {
          in: c,
          onEnter: A,
          onEntered: X,
          onEntering: M,
          onExit: le,
          onExited: Xt,
          onExiting: st,
          addEndListener: (z) => {
            y === "auto" && ($.current = setTimeout(z, j.current || 0)),
              o && o(Me.current, z);
          },
          nodeRef: Me,
          timeout: y === "auto" ? null : y,
        },
        k,
        {
          children: (z, ee) =>
            w(
              L4,
              D(
                {
                  as: a,
                  className: qn(
                    C.root,
                    s,
                    {
                      entered: C.entered,
                      exited: !c && J === "0px" && C.hidden,
                    }[z]
                  ),
                  style: D({ [se ? "minWidth" : "minHeight"]: J }, p),
                  ownerState: D({}, _, { state: z }),
                  ref: Ot,
                },
                ee,
                {
                  children: w(A4, {
                    ownerState: D({}, _, { state: z }),
                    className: C.wrapper,
                    ref: N,
                    children: w(I4, {
                      ownerState: D({}, _, { state: z }),
                      className: C.wrapperInner,
                      children: i,
                    }),
                  }),
                }
              )
            ),
        }
      )
    );
  });
k1.muiSupportAuto = !0;
const $4 = k1;
function wp(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function M4(e, t, n) {
  return t && wp(e.prototype, t), n && wp(e, n), e;
}
function q() {
  return (
    (q =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    q.apply(this, arguments)
  );
}
function z4(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
function xn(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function xp(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
var C1 = ae.createContext(),
  D4 = {
    mui: {
      root: {},
      anchorOriginTopCenter: {},
      anchorOriginBottomCenter: {},
      anchorOriginTopRight: {},
      anchorOriginBottomRight: {},
      anchorOriginTopLeft: {},
      anchorOriginBottomLeft: {},
    },
    container: {
      containerRoot: {},
      containerAnchorOriginTopCenter: {},
      containerAnchorOriginBottomCenter: {},
      containerAnchorOriginTopRight: {},
      containerAnchorOriginBottomRight: {},
      containerAnchorOriginTopLeft: {},
      containerAnchorOriginBottomLeft: {},
    },
  },
  Rt = { view: { default: 20, dense: 4 }, snackbar: { default: 6, dense: 2 } },
  jn = {
    maxSnack: 3,
    dense: !1,
    hideIconVariant: !1,
    variant: "default",
    autoHideDuration: 5e3,
    anchorOrigin: { vertical: "bottom", horizontal: "left" },
    TransitionComponent: T4,
    transitionDuration: { enter: 225, exit: 195 },
  },
  To = function (t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  F4 = function (t) {
    return "" + To(t.vertical) + To(t.horizontal);
  },
  j4 = function (t) {
    return Object.keys(t)
      .filter(function (n) {
        return !D4.container[n];
      })
      .reduce(function (n, r) {
        var o;
        return q({}, n, ((o = {}), (o[r] = t[r]), o));
      }, {});
  },
  on = {
    TIMEOUT: "timeout",
    CLICKAWAY: "clickaway",
    MAXSNACK: "maxsnack",
    INSTRUCTED: "instructed",
  },
  as = {
    toContainerAnchorOrigin: function (t) {
      return "containerAnchorOrigin" + t;
    },
    toAnchorOrigin: function (t) {
      var n = t.vertical,
        r = t.horizontal;
      return "anchorOrigin" + To(n) + To(r);
    },
    toVariant: function (t) {
      return "variant" + To(t);
    },
  },
  ji = function (t) {
    return !!t || t === 0;
  },
  Sp = function (t) {
    return typeof t == "number" || t === null;
  },
  U4 = function (t, n, r) {
    return function (o) {
      return o === "autoHideDuration"
        ? Sp(t.autoHideDuration)
          ? t.autoHideDuration
          : Sp(n.autoHideDuration)
          ? n.autoHideDuration
          : jn.autoHideDuration
        : t[o] || n[o] || r[o];
    };
  };
function fa(e, t, n) {
  return (
    e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    n === void 0 && (n = {}),
    q({}, n, {}, t, {}, e)
  );
}
var B4 = "SnackbarContent",
  _1 = { root: B4 + "-root" },
  H4 = tr("div")(function (e) {
    var t,
      n,
      r = e.theme;
    return (
      (n = {}),
      (n["&." + _1.root] =
        ((t = { display: "flex", flexWrap: "wrap", flexGrow: 1 }),
        (t[r.breakpoints.up("sm")] = { flexGrow: "initial", minWidth: 288 }),
        t)),
      n
    );
  }),
  W4 = x.exports.forwardRef(function (e, t) {
    var n = e.className,
      r = xn(e, ["className"]);
    return w(H4, {
      ...Object.assign({ ref: t, className: qn(_1.root, n) }, r),
    });
  }),
  Ep = { right: "left", left: "right", bottom: "up", top: "down" },
  V4 = function (t) {
    return t.horizontal !== "center" ? Ep[t.horizontal] : Ep[t.vertical];
  },
  Y4 = function (t) {
    return w(Cl, {
      ...Object.assign({}, t),
      children: w("path", {
        d: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",
      }),
    });
  },
  X4 = function (t) {
    return w(Cl, {
      ...Object.assign({}, t),
      children: w("path", {
        d: "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z",
      }),
    });
  },
  K4 = function (t) {
    return w(Cl, {
      ...Object.assign({}, t),
      children: w("path", {
        d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2, 6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12, 13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
      }),
    });
  },
  Q4 = function (t) {
    return w(Cl, {
      ...Object.assign({}, t),
      children: w("path", {
        d: "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12A10,10 0 0,0 12,2Z",
      }),
    });
  },
  Ui = { fontSize: 20, marginInlineEnd: 8 },
  q4 = {
    default: void 0,
    success: w(Y4, { style: Ui }),
    warning: w(X4, { style: Ui }),
    error: w(K4, { style: Ui }),
    info: w(Q4, { style: Ui }),
  };
function Ro(e, t) {
  return e.reduce(
    function (n, r) {
      return r == null
        ? n
        : function () {
            for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
              s[l] = arguments[l];
            var a = [].concat(s);
            t && a.indexOf(t) === -1 && a.push(t),
              n.apply(this, a),
              r.apply(this, a);
          };
    },
    function () {}
  );
}
var Z4 = typeof window < "u" ? x.exports.useLayoutEffect : x.exports.useEffect;
function kp(e) {
  var t = x.exports.useRef(e);
  return (
    Z4(function () {
      t.current = e;
    }),
    x.exports.useCallback(function () {
      return t.current.apply(void 0, arguments);
    }, [])
  );
}
var G4 = x.exports.forwardRef(function (e, t) {
    var n = e.children,
      r = e.autoHideDuration,
      o = e.ClickAwayListenerProps,
      i = e.disableWindowBlurListener,
      s = i === void 0 ? !1 : i,
      l = e.onClose,
      a = e.onMouseEnter,
      u = e.onMouseLeave,
      c = e.open,
      f = e.resumeHideDuration,
      d = xn(e, [
        "children",
        "autoHideDuration",
        "ClickAwayListenerProps",
        "disableWindowBlurListener",
        "onClose",
        "onMouseEnter",
        "onMouseLeave",
        "open",
        "resumeHideDuration",
      ]),
      g = x.exports.useRef(),
      m = kp(function () {
        l && l.apply(void 0, arguments);
      }),
      v = kp(function (k) {
        !l ||
          k == null ||
          (clearTimeout(g.current),
          (g.current = setTimeout(function () {
            m(null, on.TIMEOUT);
          }, k)));
      });
    x.exports.useEffect(
      function () {
        return (
          c && v(r),
          function () {
            clearTimeout(g.current);
          }
        );
      },
      [c, r, v]
    );
    var S = function () {
        clearTimeout(g.current);
      },
      h = x.exports.useCallback(
        function () {
          r != null && v(f != null ? f : r * 0.5);
        },
        [r, f, v]
      ),
      p = function (_) {
        a && a(_), S();
      },
      y = function (_) {
        u && u(_), h();
      },
      E = function (_) {
        l && l(_, on.CLICKAWAY);
      };
    return (
      x.exports.useEffect(
        function () {
          if (!s && c)
            return (
              window.addEventListener("focus", h),
              window.addEventListener("blur", S),
              function () {
                window.removeEventListener("focus", h),
                  window.removeEventListener("blur", S);
              }
            );
        },
        [s, h, c]
      ),
      x.exports.createElement(
        $E,
        q({ onClickAway: E }, o),
        x.exports.createElement(
          "div",
          q({ onMouseEnter: p, onMouseLeave: y, ref: t }, d),
          n
        )
      )
    );
  }),
  Nt = "SnackbarItem",
  be = {
    contentRoot: Nt + "-contentRoot",
    lessPadding: Nt + "-lessPadding",
    variantSuccess: Nt + "-variantSuccess",
    variantError: Nt + "-variantError",
    variantInfo: Nt + "-variantInfo",
    variantWarning: Nt + "-variantWarning",
    message: Nt + "-message",
    action: Nt + "-action",
    wrappedRoot: Nt + "-wrappedRoot",
  },
  J4 = tr(G4)(function (e) {
    var t,
      n = e.theme,
      r = n.palette.mode || n.palette.type,
      o = AE(n.palette.background.default, r === "light" ? 0.8 : 0.98);
    return (
      (t = {}),
      (t["&." + be.wrappedRoot] = {
        position: "relative",
        transform: "translateX(0)",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }),
      (t["." + be.contentRoot] = q({}, n.typography.body2, {
        backgroundColor: o,
        color: n.palette.getContrastText(o),
        alignItems: "center",
        padding: "6px 16px",
        borderRadius: "4px",
        boxShadow:
          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
      })),
      (t["." + be.lessPadding] = { paddingLeft: 8 * 2.5 }),
      (t["." + be.variantSuccess] = {
        backgroundColor: "#43a047",
        color: "#fff",
      }),
      (t["." + be.variantError] = {
        backgroundColor: "#d32f2f",
        color: "#fff",
      }),
      (t["." + be.variantInfo] = { backgroundColor: "#2196f3", color: "#fff" }),
      (t["." + be.variantWarning] = {
        backgroundColor: "#ff9800",
        color: "#fff",
      }),
      (t["." + be.message] = {
        display: "flex",
        alignItems: "center",
        padding: "8px 0",
      }),
      (t["." + be.action] = {
        display: "flex",
        alignItems: "center",
        marginLeft: "auto",
        paddingLeft: 16,
        marginRight: -8,
      }),
      t
    );
  }),
  e6 = function (t) {
    var n = t.classes,
      r = xn(t, ["classes"]),
      o = x.exports.useRef(),
      i = x.exports.useState(!0),
      s = i[0],
      l = i[1];
    x.exports.useEffect(function () {
      return function () {
        o.current && clearTimeout(o.current);
      };
    }, []);
    var a = Ro([r.snack.onClose, r.onClose], r.snack.key),
      u = function () {
        r.snack.requestClose && a(null, on.INSTRCUTED);
      },
      c = function () {
        o.current = setTimeout(function () {
          l(!s);
        }, 125);
      },
      f = r.style,
      d = r.ariaAttributes,
      g = r.className,
      m = r.hideIconVariant,
      v = r.iconVariant,
      S = r.snack,
      h = r.action,
      p = r.content,
      y = r.TransitionComponent,
      E = r.TransitionProps,
      k = r.transitionDuration,
      _ = xn(r, [
        "style",
        "dense",
        "ariaAttributes",
        "className",
        "hideIconVariant",
        "iconVariant",
        "snack",
        "action",
        "content",
        "TransitionComponent",
        "TransitionProps",
        "transitionDuration",
        "onEnter",
        "onEntered",
        "onEntering",
        "onExit",
        "onExited",
        "onExiting",
      ]),
      C = S.key,
      R = S.open,
      $ = S.className,
      N = S.variant,
      j = S.content,
      J = S.action,
      se = S.ariaAttributes,
      xe = S.anchorOrigin,
      Me = S.message,
      Ot = S.TransitionComponent,
      Re = S.TransitionProps,
      P = S.transitionDuration,
      A = xn(S, [
        "persist",
        "key",
        "open",
        "entered",
        "requestClose",
        "className",
        "variant",
        "content",
        "action",
        "ariaAttributes",
        "anchorOrigin",
        "message",
        "TransitionComponent",
        "TransitionProps",
        "transitionDuration",
        "onEnter",
        "onEntered",
        "onEntering",
        "onExit",
        "onExited",
        "onExiting",
      ]),
      M = q({}, q4, {}, v)[N],
      X = q({ "aria-describedby": "notistack-snackbar" }, fa(se, d)),
      le = Ot || y || jn.TransitionComponent,
      Xt = fa(P, k, jn.transitionDuration),
      st = q({ direction: V4(xe) }, fa(Re, E)),
      vt = J || h;
    typeof vt == "function" && (vt = vt(C));
    var z = j || p;
    typeof z == "function" && (z = z(C, S.message));
    var ee = [
      "onEnter",
      "onEntering",
      "onEntered",
      "onExit",
      "onExiting",
      "onExited",
    ].reduce(function (We, Pt) {
      var Kt;
      return q(
        {},
        We,
        ((Kt = {}), (Kt[Pt] = Ro([r.snack[Pt], r[Pt]], r.snack.key)), Kt)
      );
    }, {});
    return w($4, {
      unmountOnExit: !0,
      timeout: 175,
      in: s,
      onExited: ee.onExited,
      children: w(J4, {
        ...Object.assign({}, _, A, {
          open: R,
          className: qn(n.root, be.wrappedRoot, n[as.toAnchorOrigin(xe)]),
          onClose: a,
        }),
        children: w(le, {
          ...Object.assign({ appear: !0, in: R, timeout: Xt }, st, {
            onExit: ee.onExit,
            onExiting: ee.onExiting,
            onExited: c,
            onEnter: ee.onEnter,
            onEntering: ee.onEntering,
            onEntered: Ro([ee.onEntered, u]),
          }),
          children:
            z ||
            I(W4, {
              ...Object.assign({}, X, {
                role: "alert",
                style: f,
                className: qn(
                  be.contentRoot,
                  be[as.toVariant(N)],
                  n[as.toVariant(N)],
                  g,
                  $,
                  !m && M && be.lessPadding
                ),
              }),
              children: [
                I("div", {
                  id: X["aria-describedby"],
                  className: be.message,
                  children: [m ? null : M, Me],
                }),
                vt && w("div", { className: be.action, children: vt }),
              ],
            }),
        }),
      }),
    });
  },
  da = {
    container: "& > .MuiCollapse-container, & > .MuiCollapse-root",
    wrapper:
      "& > .MuiCollapse-container > .MuiCollapse-wrapper, & > .MuiCollapse-root > .MuiCollapse-wrapper",
  },
  pa = 16,
  Nn = "SnackbarContainer",
  ct = {
    root: Nn + "-root",
    rootDense: Nn + "-rootDense",
    top: Nn + "-top",
    bottom: Nn + "-bottom",
    left: Nn + "-left",
    right: Nn + "-right",
    center: Nn + "-center",
  },
  t6 = tr("div")(function (e) {
    var t,
      n,
      r,
      o,
      i,
      s,
      l = e.theme;
    return (
      (s = {}),
      (s["&." + ct.root] =
        ((t = {
          boxSizing: "border-box",
          display: "flex",
          maxHeight: "100%",
          position: "fixed",
          zIndex: l.zIndex.snackbar,
          height: "auto",
          width: "auto",
          transition:
            "top 300ms ease 0ms, right 300ms ease 0ms, bottom 300ms ease 0ms, left 300ms ease 0ms, margin 300ms ease 0ms, max-width 300ms ease 0ms",
          pointerEvents: "none",
        }),
        (t[da.container] = { pointerEvents: "all" }),
        (t[da.wrapper] = {
          padding: Rt.snackbar.default + "px 0px",
          transition: "padding 300ms ease 0ms",
        }),
        (t.maxWidth = "calc(100% - " + Rt.view.default * 2 + "px)"),
        (t[l.breakpoints.down("sm")] = {
          width: "100%",
          maxWidth: "calc(100% - " + pa * 2 + "px)",
        }),
        t)),
      (s["&." + ct.rootDense] =
        ((n = {}),
        (n[da.wrapper] = { padding: Rt.snackbar.dense + "px 0px" }),
        n)),
      (s["&." + ct.top] = {
        top: Rt.view.default - Rt.snackbar.default,
        flexDirection: "column",
      }),
      (s["&." + ct.bottom] = {
        bottom: Rt.view.default - Rt.snackbar.default,
        flexDirection: "column-reverse",
      }),
      (s["&." + ct.left] =
        ((r = { left: Rt.view.default }),
        (r[l.breakpoints.up("sm")] = { alignItems: "flex-start" }),
        (r[l.breakpoints.down("sm")] = { left: pa + "px" }),
        r)),
      (s["&." + ct.right] =
        ((o = { right: Rt.view.default }),
        (o[l.breakpoints.up("sm")] = { alignItems: "flex-end" }),
        (o[l.breakpoints.down("sm")] = { right: pa + "px" }),
        o)),
      (s["&." + ct.center] =
        ((i = { left: "50%", transform: "translateX(-50%)" }),
        (i[l.breakpoints.up("sm")] = { alignItems: "center" }),
        i)),
      s
    );
  }),
  n6 = function (t) {
    var n = t.className,
      r = t.anchorOrigin,
      o = t.dense,
      i = xn(t, ["className", "anchorOrigin", "dense"]),
      s = qn(ct[r.vertical], ct[r.horizontal], ct.root, n, o && ct.rootDense);
    return w(t6, { ...Object.assign({ className: s }, i) });
  },
  r6 = ae.memo(n6),
  o6 = (function (e) {
    z4(t, e);
    function t(r) {
      var o;
      return (
        (o = e.call(this, r) || this),
        (o.enqueueSnackbar = function (i, s) {
          s === void 0 && (s = {});
          var l = s,
            a = l.key,
            u = l.preventDuplicate,
            c = xn(l, ["key", "preventDuplicate"]),
            f = ji(a),
            d = f ? a : new Date().getTime() + Math.random(),
            g = U4(c, o.props, jn),
            m = q({ key: d }, c, {
              message: i,
              open: !0,
              entered: !1,
              requestClose: !1,
              variant: g("variant"),
              anchorOrigin: g("anchorOrigin"),
              autoHideDuration: g("autoHideDuration"),
            });
          return (
            c.persist && (m.autoHideDuration = void 0),
            o.setState(function (v) {
              if ((u === void 0 && o.props.preventDuplicate) || u) {
                var S = function (E) {
                    return f ? E.key === a : E.message === i;
                  },
                  h = v.queue.findIndex(S) > -1,
                  p = v.snacks.findIndex(S) > -1;
                if (h || p) return v;
              }
              return o.handleDisplaySnack(
                q({}, v, { queue: [].concat(v.queue, [m]) })
              );
            }),
            d
          );
        }),
        (o.handleDisplaySnack = function (i) {
          var s = i.snacks;
          return s.length >= o.maxSnack
            ? o.handleDismissOldest(i)
            : o.processQueue(i);
        }),
        (o.processQueue = function (i) {
          var s = i.queue,
            l = i.snacks;
          return s.length > 0
            ? q({}, i, {
                snacks: [].concat(l, [s[0]]),
                queue: s.slice(1, s.length),
              })
            : i;
        }),
        (o.handleDismissOldest = function (i) {
          if (
            i.snacks.some(function (c) {
              return !c.open || c.requestClose;
            })
          )
            return i;
          var s = !1,
            l = !1,
            a = i.snacks.reduce(function (c, f) {
              return c + (f.open && f.persist ? 1 : 0);
            }, 0);
          a === o.maxSnack && (l = !0);
          var u = i.snacks.map(function (c) {
            return !s && (!c.persist || l)
              ? ((s = !0),
                c.entered
                  ? (c.onClose && c.onClose(null, on.MAXSNACK, c.key),
                    o.props.onClose &&
                      o.props.onClose(null, on.MAXSNACK, c.key),
                    q({}, c, { open: !1 }))
                  : q({}, c, { requestClose: !0 }))
              : q({}, c);
          });
          return q({}, i, { snacks: u });
        }),
        (o.handleEnteredSnack = function (i, s, l) {
          if (!ji(l))
            throw new Error(
              "handleEnteredSnack Cannot be called with undefined key"
            );
          o.setState(function (a) {
            var u = a.snacks;
            return {
              snacks: u.map(function (c) {
                return c.key === l ? q({}, c, { entered: !0 }) : q({}, c);
              }),
            };
          });
        }),
        (o.handleCloseSnack = function (i, s, l) {
          if (
            (o.props.onClose && o.props.onClose(i, s, l), s !== on.CLICKAWAY)
          ) {
            var a = l === void 0;
            o.setState(function (u) {
              var c = u.snacks,
                f = u.queue;
              return {
                snacks: c.map(function (d) {
                  return !a && d.key !== l
                    ? q({}, d)
                    : d.entered
                    ? q({}, d, { open: !1 })
                    : q({}, d, { requestClose: !0 });
                }),
                queue: f.filter(function (d) {
                  return d.key !== l;
                }),
              };
            });
          }
        }),
        (o.closeSnackbar = function (i) {
          var s = o.state.snacks.find(function (l) {
            return l.key === i;
          });
          ji(i) && s && s.onClose && s.onClose(null, on.INSTRUCTED, i),
            o.handleCloseSnack(null, on.INSTRUCTED, i);
        }),
        (o.handleExitedSnack = function (i, s, l) {
          var a = s || l;
          if (!ji(a))
            throw new Error(
              "handleExitedSnack Cannot be called with undefined key"
            );
          o.setState(function (u) {
            var c = o.processQueue(
              q({}, u, {
                snacks: u.snacks.filter(function (f) {
                  return f.key !== a;
                }),
              })
            );
            return c.queue.length === 0 ? c : o.handleDismissOldest(c);
          });
        }),
        (o.state = {
          snacks: [],
          queue: [],
          contextValue: {
            enqueueSnackbar: o.enqueueSnackbar.bind(xp(o)),
            closeSnackbar: o.closeSnackbar.bind(xp(o)),
          },
        }),
        o
      );
    }
    var n = t.prototype;
    return (
      (n.render = function () {
        var o = this,
          i = this.state.contextValue,
          s = this.props,
          l = s.iconVariant,
          a = s.dense,
          u = a === void 0 ? jn.dense : a,
          c = s.hideIconVariant,
          f = c === void 0 ? jn.hideIconVariant : c,
          d = s.domRoot,
          g = s.children,
          m = s.classes,
          v = m === void 0 ? {} : m,
          S = xn(s, [
            "maxSnack",
            "preventDuplicate",
            "variant",
            "anchorOrigin",
            "iconVariant",
            "dense",
            "hideIconVariant",
            "domRoot",
            "children",
            "classes",
          ]),
          h = this.state.snacks.reduce(function (y, E) {
            var k,
              _ = F4(E.anchorOrigin),
              C = y[_] || [];
            return q({}, y, ((k = {}), (k[_] = [].concat(C, [E])), k));
          }, {}),
          p = Object.keys(h).map(function (y) {
            var E = h[y];
            return w(
              r6,
              {
                dense: u,
                anchorOrigin: E[0].anchorOrigin,
                className: qn(
                  v.containerRoot,
                  v[as.toContainerAnchorOrigin(y)]
                ),
                children: E.map(function (k) {
                  return w(e6, {
                    ...Object.assign({}, S, {
                      key: k.key,
                      snack: k,
                      dense: u,
                      iconVariant: l,
                      hideIconVariant: f,
                      classes: j4(v),
                      onClose: o.handleCloseSnack,
                      onExited: Ro([o.handleExitedSnack, o.props.onExited]),
                      onEntered: Ro([o.handleEnteredSnack, o.props.onEntered]),
                    }),
                  });
                }),
              },
              y
            );
          });
        return I(C1.Provider, {
          value: i,
          children: [g, d ? Us.exports.createPortal(p, d) : p],
        });
      }),
      M4(t, [
        {
          key: "maxSnack",
          get: function () {
            return this.props.maxSnack || jn.maxSnack;
          },
        },
      ]),
      t
    );
  })(x.exports.Component),
  i6 = function () {
    return x.exports.useContext(C1);
  };
function s6({ alertState: e }) {
  const { enqueueSnackbar: t, closeSnackbar: n } = i6();
  return (
    x.exports.useEffect(() => {
      var r;
      return (
        e.type === "clear"
          ? n()
          : ((r = e.msg) == null ? void 0 : r.length) > 0 &&
            t(e.msg, { variant: e.type }),
        () => {
          n();
        }
      );
    }, [e, t, n]),
    w(D0, {})
  );
}
function l6({ alertState: e }) {
  return w(o6, { maxSnack: 3, children: w(s6, { alertState: e }) });
}
function a6() {
  const [e, t] = x.exports.useReducer(p5, {});
  return w(d5, {
    dispatchAlert: t,
    children: I("div", {
      className: "App",
      children: [
        w(Sw, {}),
        w(vm, { children: w(mw, {}) }),
        w(Pw, {}),
        w(l6, { alertState: e }),
      ],
    }),
  });
}
function u6() {
  const { pathname: e } = Jn();
  return (
    x.exports.useEffect(() => {
      window.scrollTo(0, 0);
    }, [e]),
    null
  );
}
const c6 = (e) => {
  e &&
    e instanceof Function &&
    Ht(() => import("./web-vitals.611aa583.js"), []).then(
      ({ getCLS: t, getFID: n, getFCP: r, getLCP: o, getTTFB: i }) => {
        t(e), n(e), r(e), o(e), i(e);
      }
    );
};
ha.createRoot(document.getElementById("root")).render(
  w(ae.StrictMode, { children: I(Xy, { children: [w(u6, {}), w(a6, {})] }) })
);
c6();
export {
  D0 as F,
  An as L,
  ae as R,
  Hn as S,
  T2 as a,
  I as b,
  ve as c,
  f6 as d,
  w as j,
  x as r,
  d6 as u,
};
