!function() {
    "use strict";
    var u, N = function() {
        return (N = Object.assign || function(n) {
            for (var t, e = 1, r = arguments.length; e < r; e++)
                for (var o in t = arguments[e])
                    Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
            return n
        }
        ).apply(this, arguments)
    };
    function B(n, t) {
        var e = "function" == typeof Symbol && n[Symbol.iterator];
        if (!e)
            return n;
        var r, o, i = e.call(n), u = [];
        try {
            for (; (void 0 === t || 0 < t--) && !(r = i.next()).done; )
                u.push(r.value)
        } catch (n) {
            o = {
                error: n
            }
        } finally {
            try {
                r && !r.done && (e = i.return) && e.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return u
    }
    function b(n, t, e) {
        if (e || 2 === arguments.length)
            for (var r, o = 0, i = t.length; o < i; o++)
                !r && o in t || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
        return n.concat(r || Array.prototype.slice.call(t))
    }
    "undefined" == typeof Element || Element.prototype.addEventListener || (u = [],
    qo = function(n, t) {
        for (var e = 0; e < u.length; ) {
            var r = u[e];
            if (r.object === this && r.type === n && r.listener === t) {
                "DOMContentLoaded" === n ? this.detachEvent("onreadystatechange", r.wrapper) : this.detachEvent("on" + n, r.wrapper),
                u.splice(e, 1);
                break
            }
            ++e
        }
    }
    ,
    Element.prototype.addEventListener = Mo = function(n, t) {
        function e(n) {
            n.target = n.srcElement,
            n.currentTarget = i,
            void 0 !== t.handleEvent ? t.handleEvent(n) : t.call(i, n)
        }
        var r, o, i = this;
        "DOMContentLoaded" === n ? (r = function(n) {
            "complete" === document.readyState && e(n)
        }
        ,
        document.attachEvent("onreadystatechange", r),
        u.push({
            object: this,
            type: n,
            listener: t,
            wrapper: r
        }),
        "complete" === document.readyState && ((o = new window.Event).srcElement = window,
        r(o))) : (this.attachEvent("on" + n, e),
        u.push({
            object: this,
            type: n,
            listener: t,
            wrapper: e
        }))
    }
    ,
    Element.prototype.removeEventListener = qo,
    HTMLDocument && !HTMLDocument.prototype.addEventListener && (HTMLDocument.prototype.addEventListener = Mo,
    HTMLDocument.prototype.removeEventListener = qo),
    Window && !Window.prototype.addEventListener && (Window.prototype.addEventListener = Mo,
    Window.prototype.removeEventListener = qo));
    function p(n) {
        return JSON.stringify({
            ev_type: "batch",
            list: n
        })
    }
    var _ = ["init", "start", "config", "beforeDestroy", "provide", "beforeReport", "report", "beforeBuild", "build", "beforeSend", "send", "beforeConfig"]
      , P = function() {
        return {}
    };
    function w(n) {
        return n
    }
    function x(n) {
        return "object" == typeof n && null !== n
    }
    var t = Object.prototype;
    function i(n) {
        if (x(n)) {
            if ("function" != typeof Object.getPrototypeOf)
                return "[object Object]" === t.toString.call(n);
            n = Object.getPrototypeOf(n);
            return n === t || null === n
        }
    }
    function a(n) {
        return "[object Array]" === t.toString.call(n)
    }
    function E(n) {
        return "function" == typeof n
    }
    function H(n) {
        return "number" == typeof n
    }
    function d(n) {
        return "string" == typeof n
    }
    function e(n) {
        return "undefined" != typeof Event && function(n, t) {
            try {
                return n instanceof t
            } catch (n) {
                return
            }
        }(n, Event)
    }
    function m(n, t) {
        var e, r, o = N({}, n);
        for (e in t)
            r = e,
            Object.prototype.hasOwnProperty.call(t, r) && void 0 !== t[e] && (x(t[e]) && i(t[e]) ? o[e] = m(x(n[e]) ? n[e] : {}, t[e]) : a(t[e]) && a(n[e]) ? o[e] = function t(n, e) {
                n = a(n) ? n : [];
                e = a(e) ? e : [];
                return Array.prototype.concat.call(n, e).map(function(n) {
                    return n instanceof RegExp ? n : x(n) && i(n) ? m({}, n) : a(n) ? t([], n) : n
                })
            }(n[e], t[e]) : o[e] = t[e]);
        return o
    }
    function S(n, t) {
        if (!a(n))
            return !1;
        if (0 === n.length)
            return !1;
        for (var e = 0; e < n.length; ) {
            if (n[e] === t)
                return !0;
            e++
        }
        return !1
    }
    function T(n, t) {
        if (!a(n))
            return n;
        var e = n.indexOf(t);
        if (0 <= e) {
            t = n.slice();
            return t.splice(e, 1),
            t
        }
        return n
    }
    function l(n, t, e) {
        for (var r, o = (t = B(t.split(".")))[0], i = t.slice(1); n && 0 < i.length; )
            n = n[o],
            o = (r = B(i))[0],
            i = r.slice(1);
        if (n)
            return e(n, o)
    }
    var r = function(e, n) {
        return e && x(e) ? n.reduce(function(n, t) {
            return n[t] = e[t],
            n
        }, {}) : e
    };
    function v(n) {
        return a(n) && n.length ? function(n) {
            for (var t = [], e = n.length, r = 0; r < e; r++) {
                var o = n[r];
                d(o) ? t.push(o.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")) : o && o.source && t.push(o.source)
            }
            return new RegExp(t.join("|"),"i")
        }(n) : null
    }
    var g = function(n, t) {
        n = v(n || []);
        return !!n && n.test(t)
    };
    function c(n) {
        try {
            return d(n) ? n : JSON.stringify(n)
        } catch (n) {
            return "[FAILED_TO_STRINGIFY]:" + String(n)
        }
    }
    function h(i, u, a, c) {
        return void 0 === c && (c = !0),
        function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            if (!i)
                return P;
            var e = i[u]
              , r = a.apply(void 0, b([e], B(n), !1))
              , o = r;
            return E(o) && c && (o = function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                try {
                    return r.apply(this, t)
                } catch (n) {
                    return E(e) && e.apply(this, t)
                }
            }
            ),
            i[u] = o,
            function(n) {
                n || (o === i[u] ? i[u] = e : r = e)
            }
        }
    }
    function R() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        console.warn.apply(console, b(["[SDK]", Date.now(), o("" + k++)], B(n), !1))
    }
    function j(r) {
        return function(n) {
            for (var t = n, e = 0; e < r.length && t; e++)
                try {
                    t = r[e](t)
                } catch (n) {
                    y(n)
                }
            return t
        }
    }
    var f = function(i, u, a) {
        return function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            if (!i)
                return P;
            var e = i[u]
              , r = a.apply(void 0, b([e], B(n), !1))
              , o = r;
            return E(o) && (o = function() {
                for (var n = [], t = 0; t < arguments.length; t++)
                    n[t] = arguments[t];
                return r.apply(this, n)
            }
            ),
            i[u] = o,
            function() {
                o === i[u] ? i[u] = e : r = e
            }
        }
    }
      , o = "".padStart ? function(n, t) {
        return n.padStart(t = void 0 === t ? 8 : t, " ")
    }
    : function(n) {
        return n
    }
      , s = 0
      , y = function() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        console.error.apply(console, b(["[SDK]", Date.now(), o("" + s++)], B(n), !1))
    }
      , k = 0
      , O = function(n) {
        return Math.random() < Number(n)
    }
      , C = function(n, t) {
        return n < Number(t)
    }
      , L = function(r) {
        return function(n) {
            for (var t = !0, e = 0; e < r.length && t; e++)
                try {
                    t = r[e](n)
                } catch (n) {
                    y(n)
                }
            return t
        }
    };
    function I() {
        var n = function() {
            for (var n = new Array(16), t = 0, e = 0; e < 16; e++)
                0 == (3 & e) && (t = 4294967296 * Math.random()),
                n[e] = t >>> ((3 & e) << 3) & 255;
            return n
        }();
        return n[6] = 15 & n[6] | 64,
        n[8] = 63 & n[8] | 128,
        function(n) {
            for (var t = [], e = 0; e < 256; ++e)
                t[e] = (e + 256).toString(16).substr(1);
            var r = 0
              , o = t;
            return [o[n[r++]], o[n[r++]], o[n[r++]], o[n[r++]], "-", o[n[r++]], o[n[r++]], "-", o[n[r++]], o[n[r++]], "-", o[n[r++]], o[n[r++]], "-", o[n[r++]], o[n[r++]], o[n[r++]], o[n[r++]], o[n[+r]], o[n[15]]].join("")
        }(n)
    }
    function M(r, n) {
        var t = [];
        try {
            t = n.reduce(function(n, t) {
                try {
                    var e = t(r);
                    "function" == typeof e && n.push(e)
                } catch (n) {}
                return n
            }, [])
        } catch (n) {}
        return function(n) {
            return M(n, t)
        }
    }
    function q(n, r) {
        var o = B(n, 1)[0];
        return function(t, n) {
            var e = o(function(n) {
                return L(r)(n) ? t(n) : P
            });
            n(function() {
                e()
            })
        }
    }
    var A = function(n) {
        function t(n) {
            a = T(a, n),
            f || s()
        }
        var e, r, o, i, u, a = [], c = [], f = !1, s = (r = function() {
            return a.length
        }
        ,
        o = function() {
            f = !0,
            e && e[0](),
            c.forEach(function(n) {
                return n()
            }),
            c.length = 0,
            e = void 0
        }
        ,
        -1 === (i = n = void (u = 0) === n ? 3e5 : n) ? P : function() {
            if (r())
                return u && clearTimeout(u),
                void (u = 0);
            0 === u && (u = setTimeout(o, i))
        }
        );
        return {
            next: function(n) {
                return M(n, a)
            },
            complete: function(n) {
                c.push(n)
            },
            attach: function(n, t) {
                e = [n, t]
            },
            subscribe: function(n) {
                if (f)
                    throw new Error("Observer is closed");
                return a.push(n),
                e && e[1] && e[1](n),
                s(),
                function() {
                    return t(n)
                }
            },
            unsubscribe: t
        }
    }
      , D = function(n, t, e) {
        e = A(e);
        try {
            n(e.next, e.attach),
            t && e.complete(t)
        } catch (n) {}
        return [e.subscribe, e.unsubscribe]
    };
    function U() {
        function r(n) {
            n.length && n.forEach(function(n) {
                try {
                    n()
                } catch (n) {}
            }),
            n.length = 0
        }
        function t(n) {
            i[n] && i[n].forEach(function(n) {
                r(n[1])
            }),
            i[n] = void 0
        }
        var o = !1
          , i = {};
        return {
            set: function(n, t, e) {
                i[n] ? i[n].push([t, e]) : i[n] = [[t, e]],
                o && r(e)
            },
            has: function(n) {
                return !!i[n]
            },
            remove: t,
            removeByEvType: function(t) {
                Object.keys(i).forEach(function(n) {
                    i[n] && i[n].forEach(function(n) {
                        n[0] === t && r(n[1])
                    })
                })
            },
            clear: function() {
                o = !0,
                Object.keys(i).forEach(function(n) {
                    t(n)
                })
            }
        }
    }
    var W = function(n, t, e, r) {
        return n.destroyAgent.set(t, e, r)
    };
    var F = function(n) {
        var e, r, o, t = (e = {},
        r = {},
        o = {
            set: function(n, t) {
                return e[n] = t,
                r[n] = c(t),
                o
            },
            merge: function(t) {
                return e = N(N({}, e), t),
                Object.keys(t).forEach(function(n) {
                    r[n] = c(t[n])
                }),
                o
            },
            delete: function(n) {
                return delete e[n],
                delete r[n],
                o
            },
            clear: function() {
                return e = {},
                r = {},
                o
            },
            get: function(n) {
                return r[n]
            },
            toString: function() {
                return N({}, r)
            }
        });
        n.provide("context", t),
        n.on("report", function(n) {
            return n.extra || (n.extra = {}),
            n.extra.context = t.toString(),
            n
        })
    }
      , X = function(a, c, e) {
        function f() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            var e = n[0];
            if (e) {
                var r = e.split(".")[0];
                if (r in f)
                    return i = f,
                    u = e,
                    o = [].slice.call(n, 1),
                    l(i, u, function(n, t) {
                        if (n && t in n && E(n[t]))
                            try {
                                return n[t].apply(n, o)
                            } catch (n) {
                                return
                            }
                    });
                var o, i = s[r] || [], u = null !== (u = null == c ? void 0 : c(a)) && void 0 !== u ? u : {};
                i.push(b([u], B(n), !1)),
                void (s[r] = i)
            }
        }
        var n, s = {};
        for (n in h(a, "provide", function(e) {
            return function(n, t) {
                f[n] = t,
                e.call(a, n, t)
            }
        })(),
        a)
            Object.prototype.hasOwnProperty.call(a, n) && (f[n] = a[n]);
        return a.on("provide", function(n) {
            s[n] && (s[n].forEach(function(n) {
                var t = B(n)
                  , n = t[0]
                  , t = t.slice(1);
                null != e && e(a, n, t)
            }),
            s[n] = null)
        }),
        f
    };
    function z(r, o) {
        r.on("init", function() {
            function n(n) {
                n.forEach(function(n) {
                    var t = n.name;
                    S(e, t) || (e.push(t),
                    n.setup(r),
                    o && o(t, n.setup),
                    r.destroyAgent.set(t, t, [function() {
                        e = T(e, t),
                        n.tearDown && n.tearDown()
                    }
                    ]))
                })
            }
            var e = [];
            r.provide("applyIntegrations", n);
            var t = r.config();
            t && t.integrations && n(t.integrations)
        })
    }
    function G(n) {
        return n.split(J)[0]
    }
    var J = "_";
    function Y(n, t) {
        return n.initSubject(t)
    }
    function $(n, t, e) {
        var t = B(t, 2)
          , r = t[0]
          , t = t[1]
          , o = n.privateSubject || {};
        return o[r] || (o[r] = D(t, function() {
            o[r] = void 0
        }, e)),
        o[r]
    }
    var V = function() {
        return Date.now()
    };
    function K() {
        if ("object" == typeof window && x(window))
            return window
    }
    function Q() {
        if ("object" == typeof document && x(document))
            return document
    }
    function Z() {
        return K() && window.location
    }
    function nn() {
        if (K() && x(window.performance))
            return window.performance
    }
    function tn() {
        if ("function" == typeof XMLHttpRequest && E(XMLHttpRequest))
            return XMLHttpRequest
    }
    function en() {
        if (K() && E(window.MutationObserver))
            return window.MutationObserver
    }
    function rn() {
        if (K() && E(window.PerformanceObserver))
            return window.PerformanceObserver
    }
    function on() {
        var n = function() {
            if (K() && "navigator"in window)
                return window.navigator
        }();
        if (n)
            return n.connection || n.mozConnection || n.webkitConnection
    }
    function un(n) {
        var t = Q();
        if (!t || !n)
            return "";
        t = t.createElement("a");
        return t.href = n,
        t.href
    }
    function an(n) {
        var t = Q();
        if (!t || !n)
            return {
                url: n,
                protocol: "",
                domain: "",
                query: "",
                path: "",
                hash: ""
            };
        t = t.createElement("a");
        t.href = n;
        n = t.pathname || "/";
        return "/" !== n[0] && (n = "/" + n),
        {
            url: t.href,
            protocol: t.protocol.slice(0, -1),
            domain: t.hostname,
            query: t.search.substring(1),
            path: n,
            hash: t.hash
        }
    }
    function cn() {
        var n = K() && Z();
        return n ? n.href : ""
    }
    function fn() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        var e = yn(K());
        e && (e.errors || (e.errors = []),
        e.errors.push(n))
    }
    function sn(n, t) {
        var e = n && new n(t);
        return [function(n, t) {
            e && n && e.observe(n, t)
        }
        , function() {
            return e && e.disconnect()
        }
        ]
    }
    var ln = function(n) {
        return {
            pid: n.pid,
            view_id: n.viewId,
            url: cn()
        }
    }
      , dn = function(n) {
        var t = n.config()
          , t = ln(t);
        return t.context = n.context ? n.context.toString() : {},
        t
    }
      , pn = function(t, n) {
        void 0 === n && (n = !1);
        var e = dn(t);
        return n && (e.timestamp = V()),
        function(n) {
            t.report(N(N({}, n), {
                overrides: e
            }))
        }
    }
      , vn = "view_0"
      , hn = function(o) {
        return function(e, n) {
            function t(n) {
                var t;
                n.viewId && n.viewId !== (null === (t = o.config()) || void 0 === t ? void 0 : t.viewId) && (e(r),
                r = N(N({}, dn(o)), ln(n)))
            }
            var r = dn(o);
            o.on("beforeConfig", t),
            n(function() {
                o.off("beforeConfig", t)
            })
        }
    }
      , mn = "f_view_0"
      , gn = function(r) {
        return function(n, t) {
            var e = dn(r);
            t(P, function(n) {
                e && n(e)
            })
        }
    }
      , yn = function(n) {
        if (n)
            return n.__SLARDAR_REGISTRY__ || (n.__SLARDAR_REGISTRY__ = {
                Slardar: {
                    plugins: [],
                    errors: [],
                    subject: {}
                }
            }),
            n.__SLARDAR_REGISTRY__.Slardar
    }
      , bn = function(e) {
        var n = e && e.timing || void 0;
        return [n, function() {
            return e && e.now ? e.now() : (Date.now ? Date.now() : +new Date) - (n && n.navigationStart || 0)
        }
        , function(n) {
            var t = (e || {}).getEntriesByType;
            return E(t) && t.call(e, n) || []
        }
        , function() {
            var n = (e || {}).clearResourceTimings;
            E(n) && n.call(e)
        }
        , function(n) {
            var t = (e || {}).getEntriesByName;
            return E(t) && t.call(e, n) || []
        }
        ]
    }
      , _n = function(n) {
        var t = {
            url: cn(),
            timestamp: V()
        }
          , e = n.config();
        return null != e && e.pid && (t.pid = e.pid),
        null != n && n.context && (t.context = n.context.toString()),
        t
    }
      , wn = function(e, r) {
        return function(n) {
            function t(n) {
                return n.overrides = r,
                n
            }
            e.on("report", t),
            n(),
            e.off("report", t)
        }
    }
      , xn = "<unknown>";
    function En(n) {
        try {
            for (var t, e = n, r = [], o = 0, i = 0, u = " > ".length; e && o++ < 5 && !("html" === (t = function(n) {
                var t, e, r, o, i, u = n, a = [];
                if (!u || !u.tagName)
                    return "";
                if (a.push(u.tagName.toLowerCase()),
                u.id)
                    return "#" + u.id;
                n = u.className;
                if (n && d(n))
                    for (e = n.split(/\s+/),
                    i = 0; i < e.length; i++)
                        a.push("." + e[i]);
                var c = ["type", "name", "title", "alt"];
                for (i = 0; i < c.length; i++)
                    r = c[i],
                    (o = u.getAttribute(r)) && a.push("[" + r + '="' + o + '"]');
                var f = u
                  , s = 1
                  , l = !0;
                for (; f = f.previousElementSibling; )
                    (null === (t = f.tagName) || void 0 === t ? void 0 : t.toLowerCase()) === (null === (t = u.tagName) || void 0 === t ? void 0 : t.toLowerCase()) && (f.className === u.className && c.every(function(n) {
                        return u.getAttribute(n) === (null == f ? void 0 : f.getAttribute(n))
                    }) && (l = !1),
                    s++);
                1 < s && !l && a.push(":nth-of-type(" + s + ")");
                return a.join("")
            }(e)) || 1 < o && 256 <= i + r.length * u + t.length); )
                r.push(t),
                i += t.length,
                e = e.parentNode;
            return r.reverse().join(" > ")
        } catch (n) {
            return xn
        }
    }
    var Sn = function(n, t, e, r) {
        return void 0 === r && (r = !1),
        n.addEventListener(t, e, r),
        function() {
            n.removeEventListener(t, e, r)
        }
    }
      , Tn = function(n, t, e, r) {
        return void 0 === r && (r = !1),
        n.addEventListener(t, e, r),
        function() {
            n.removeEventListener(t, e, r)
        }
    };
    function Rn(n) {
        var t, e = K();
        e && (t = B(On(n), 1)[0],
        ["unload", "beforeunload", "pagehide"].forEach(function(n) {
            Sn(e, n, t, !1)
        }))
    }
    function jn(n) {
        var t, e = Q(), r = K();
        e && r && (t = P,
        t = Tn(e, "visibilitychange", function() {
            "visible" === e.visibilityState && (n(),
            t())
        }, !0))
    }
    function kn() {
        return !!btoa && !!atob
    }
    var On = function(t) {
        var e = !1;
        return [function(n) {
            e || (e = !0,
            t && t(n))
        }
        ]
    }
      , Cn = function(n, t) {
        return x(n) ? N(N({}, t), n) : !!n && t
    };
    function Ln(n) {
        try {
            var t = localStorage.getItem(n)
              , e = t
              , r = e = t && "string" == typeof t ? JSON.parse((u = t,
            kn() ? decodeURI(atob(u)) : u)) : e
              , o = r.expires
              , i = function(n, t) {
                var e = {};
                for (o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && t.indexOf(o) < 0 && (e[o] = n[o]);
                if (null != n && "function" == typeof Object.getOwnPropertySymbols)
                    for (var r = 0, o = Object.getOwnPropertySymbols(n); r < o.length; r++)
                        t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, o[r]) && (e[o[r]] = n[o[r]]);
                return e
            }(r, ["expires"]);
            return o >= V() ? i : void 0
        } catch (n) {
            return
        }
        var u
    }
    function In(n, t, e) {
        var r;
        if (!(e <= 0))
            try {
                localStorage.setItem(n, (r = JSON.stringify(N(N({}, t), {
                    expires: V() + e
                })),
                kn() ? btoa(encodeURI(r)) : r))
            } catch (n) {}
    }
    function Mn(n) {
        return !1 === n ? 0 : !0 !== n && void 0 !== n && H(n) ? n : 7776e6
    }
    function qn() {
        var t = new RegExp("\\/monitor_web\\/collect|\\/monitor_browser\\/collect\\/batch","i");
        return function(n) {
            return t.test(n)
        }
    }
    function An(r, o) {
        return function(n, t) {
            var e = o([n, t = void 0 === t ? {} : t])
              , t = r(n, t);
            return t.then(function(n) {
                e(n)
            }, function() {
                e(void 0)
            }),
            t
        }
    }
    function Dn(n, r) {
        var o = Cn(n, st);
        if (o && O(o.sampleRate))
            return function(n, t) {
                var e = o.origins;
                e.length && g(e, n) && (t("traceparent", "00-" + lt() + "-" + lt().substring(16) + "-" + ft),
                t("baggage", r))
            }
    }
    function Nn(n, t) {
        return !n || !t || (dt.test(n) || pt.test(t))
    }
    var Bn = function(n) {
        var t;
        if ("object" == typeof window && window.__perfsee__) {
            var e = {};
            return null !== (t = Error.captureStackTrace) && void 0 !== t && t.call(Error, e, n),
            e.stack
        }
    }
      , Pn = "xhr_0"
      , Hn = function(r) {
        return function() {
            for (var n, t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            return n = B(t, 2),
            this._method = n[0],
            this._url = n[1],
            r.apply(this, t)
        }
    }
      , Un = function(o) {
        return function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            this._reqHeaders = this._reqHeaders || {};
            var e = B(n, 2)
              , r = e[0]
              , e = e[1];
            return this._reqHeaders[r] = e,
            o && o.apply(this, n)
        }
    }
      , Wn = function(i, u) {
        var a = qn();
        return function() {
            for (var n, r, o, t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            return this._start = V(),
            this._data = null == t ? void 0 : t[0],
            a(this._url) || (n = u([this._method, this._url, this._start, this]),
            o = n,
            f(r = this, "onreadystatechange", function(e) {
                return function() {
                    for (var n = [], t = 0; t < arguments.length; t++)
                        n[t] = arguments[t];
                    return 4 === this.readyState && o(r),
                    e && e.apply(this, n)
                }
            })()),
            i.apply(this, t)
        }
    }
      , Fn = function(r) {
        return function(n, t) {
            var e;
            r && ((e = []).push(f(r, "open", Hn)()),
            e.push(f(r, "setRequestHeader", Un)()),
            e.push(f(r, "send", Wn)(n)),
            t(function() {
                e.forEach(function(n) {
                    return n()
                })
            }))
        }
    }
      , Xn = ["fetch_0", function(n, t) {
        var e, r = K();
        r && fetch && ((e = []).push(f(r, "fetch", An)(n)),
        t(function() {
            e.forEach(function(n) {
                return n()
            })
        }))
    }
    ]
      , zn = ["resource"]
      , Gn = ["longtask"]
      , Jn = function(r, o, i) {
        var u = r && new r(function(n, r) {
            n.getEntries ? n.getEntries().forEach(function(n, t, e) {
                return o(n, t, e, r)
            }) : i && i()
        }
        );
        return [function(n) {
            if (!r || !u)
                return i && i();
            try {
                u.observe({
                    entryTypes: n
                })
            } catch (n) {
                return i && i()
            }
        }
        , function(n, t) {
            if (!r || !u)
                return i && i();
            try {
                var e = {
                    type: n,
                    buffered: !0
                };
                void 0 !== t && (e.durationThreshold = t),
                u.observe(e)
            } catch (n) {
                return i && i()
            }
            u.observe({
                type: n,
                buffered: !1
            })
        }
        , function() {
            return u && u.disconnect()
        }
        ]
    }
      , Yn = function(n, t, e) {
        n = B(Jn(n, t), 3),
        t = n[0],
        n = n[2];
        return t(e),
        n
    }
      , $n = function(n, t, e, r) {
        n = B(Jn(n, t), 3),
        t = n[1],
        n = n[2];
        return t(e, r),
        n
    }
      , Vn = ["longtask_0", function(n, t) {
        var e = rn();
        e && t(Yn(e, n, Gn))
    }
    ]
      , Kn = ["resource_0", function(t, n) {
        var e, r = rn();
        r && (e = qn(),
        n(Yn(r, function(n) {
            e(n.name) || t(n)
        }, zn)))
    }
    ]
      , Qn = "pageview"
      , Zn = "session"
      , nt = "js_error"
      , tt = "http"
      , et = "resource_error"
      , rt = "resource"
      , ot = "custom"
      , it = "performance"
      , ut = "performance_timing"
      , at = "performance_longtask"
      , ct = "blank_screen"
      , ft = "01"
      , st = {
        sampleRate: 1,
        origins: []
    }
      , lt = function() {
        var n = window && (window.crypto || window.msCrypto);
        if (void 0 !== n && n.getRandomValues) {
            var t = new Uint16Array(8);
            n.getRandomValues(t);
            n = function(n) {
                for (var t = n.toString(16); t.length < 4; )
                    t = "0" + t;
                return t
            }
            ;
            return n(t[0]) + n(t[1]) + n(t[2]) + n(t[3]) + n(t[4]) + n(t[5]) + n(t[6]) + n(t[7])
        }
        return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[x]/g, function() {
            return (16 * Math.random() | 0).toString(16)
        })
    }
      , dt = new RegExp("(cookie|auth|jwt|token|key|ticket|secret|credential|session|password)","i")
      , pt = new RegExp("(bearer|session)","i")
      , vt = function(t) {
        var e = !1;
        return function(n) {
            e || (e = !0,
            t(n))
        }
    }
      , ht = function(n, t) {
        try {
            if (t) {
                var e = n.request.url
                  , r = t(e);
                if (!r)
                    return;
                n.request.url = r,
                n.extra = N(N({}, n.extra), {
                    original_url: e
                })
            }
        } catch (n) {}
    };
    var mt = function(n, t) {
        var e, r = n._method, o = n._reqHeaders, i = n._url, u = n._start, a = n._data, o = {
            api: "xhr",
            request: {
                url: un(i),
                method: (r || "").toLowerCase(),
                headers: o && (e = o,
                Object.keys(e).reduce(function(n, t) {
                    return Nn(t, e[t]) || (n[t.toLowerCase()] = e[t]),
                    n
                }, {})),
                timestamp: u
            },
            response: {
                status: n.status || 0,
                is_custom_error: !1,
                timestamp: V()
            },
            duration: V() - u
        };
        "function" == typeof n.getAllResponseHeaders && (o.response.headers = d(c = n.getAllResponseHeaders()) && c ? c.split("\r\n").reduce(function(n, t) {
            var e;
            return d(t) && (t = (e = B(t.split(": "), 2))[0],
            e = e[1],
            Nn(t, e) || (n[t.toLowerCase()] = e)),
            n
        }, {}) : {});
        var u = o.response.status
          , c = t.collectBodyOnError
          , t = t.extraExtractor;
        try {
            var f = null == t ? void 0 : t(n.response, o, a);
            f && (o.extra = f),
            f && (o.response.is_custom_error = !0),
            c && (f || 400 <= u) && (o.request.body = a ? "" + a : void 0,
            o.response.body = n.response ? "" + n.response : void 0)
        } catch (n) {}
        return o
    };
    function gt(n, t, e) {
        t = null === (n = n.config()) || void 0 === n ? void 0 : n.plugins[t];
        return Cn(t, e)
    }
    var yt = "ajax"
      , bt = {
        autoWrap: !0,
        setContextAtReq: function() {
            return w
        },
        ignoreUrls: [],
        collectBodyOnError: !1
    };
    function _t(t, e) {
        return function(n) {
            if (e)
                try {
                    t(n)
                } catch (n) {}
        }
    }
    function wt(o) {
        function i(t, e) {
            var r;
            return function(n) {
                u = void 0,
                n && r !== n && e({
                    event: r = n,
                    name: t
                })
            }
        }
        var u;
        return [i, function(r) {
            return function(n) {
                var t;
                try {
                    t = n.target
                } catch (n) {
                    return
                }
                var e = t && t.tagName;
                e && ("INPUT" === e || "TEXTAREA" === e || t.isContentEditable) && (u || i("input", r)(n),
                clearTimeout(u),
                u = window.setTimeout(function() {
                    u = void 0
                }, o))
            }
        }
        ]
    }
    var xt = "click"
      , Et = ["click_0", function(n, t) {
        var e, r = Q();
        r && (e = Tn(r, xt, n, !0),
        t(function() {
            e()
        }))
    }
    ]
      , St = "keypress"
      , Tt = ["keypress_0", function(n, t) {
        var e, r = Q();
        r && (e = Tn(r, St, n, !0),
        t(function() {
            e()
        }))
    }
    ]
      , Rt = function(n, t, e) {
        var r, o = B(t, 2), i = o[0], u = o[1], a = e.maxBreadcrumbs, c = e.onAddBreadcrumb, f = e.onMaxBreadcrumbs, t = e.dom, o = B(wt(100), 2), e = o[0], o = o[1], c = B(function(e, r, o) {
            void 0 === e && (e = 20),
            void 0 === r && (r = w),
            void 0 === o && (o = function(n, t) {
                return n.slice(-t)
            }
            );
            var i = [];
            return [function() {
                return i
            }
            , function(n) {
                var t = r(n);
                t && (n = N(N({}, t), {
                    timestamp: n.timestamp || V()
                }),
                i = 0 <= e && i.length + 1 > e ? o(b(b([], B(i), !1), [n], !1), e) : b(b([], B(i), !1), [n], !1))
            }
            ]
        }(a, c, f), 2), f = c[0], c = c[1];
        return t && (r = c,
        n.push(i[0](e(xt, _t(e = function(n) {
            var t;
            try {
                t = n.event.target ? En(n.event.target) : En(n.event)
            } catch (n) {
                t = xn
            }
            0 !== t.length && r({
                type: "dom",
                category: "ui." + n.name,
                message: t
            })
        }
        , "dom")))),
        n.push(u[0](o(_t(e, "dom"))))),
        [f, c]
    }
      , jt = "breadcrumb"
      , kt = {
        maxBreadcrumbs: 20,
        dom: !0
    };
    function Ot(n, t) {
        return n instanceof t
    }
    function Ct(n, t, e) {
        return t = t && t.method || "get",
        (t = Ot(n, e) ? n.method || t : t).toLowerCase()
    }
    function Lt(t) {
        for (var n = [], e = 1; e < arguments.length; e++)
            n[e - 1] = arguments[e];
        try {
            return n.reduce(function(e, n) {
                return new t(n || {}).forEach(function(n, t) {
                    return !Nn(t, n) && (e[t] = n)
                }),
                e
            }, {})
        } catch (n) {
            return {}
        }
    }
    function It(n, t, e) {
        return Ot(n, e) ? n.body : null == t ? void 0 : t.body
    }
    var Mt = function(n) {
        if (!d(n))
            return !1;
        var t = B(n.split(":"), 2)
          , n = t[0];
        return !t[1] || "http" === n || "https" === n
    }
      , qt = function(n, t, e, r, o, i) {
        Ot(e, o) ? e.headers.set(n, t) : r.headers instanceof i ? r.headers.set(n, t) : r.headers = N(N({}, r.headers), ((r = {})[n] = t,
        r))
    }
      , At = function(t, e, n, r, o, i, u) {
        function a() {
            var n;
            f && (c.request.body = null === (n = It(t, e, r)) || void 0 === n ? void 0 : n.toString())
        }
        var c = {
            api: "fetch",
            request: {
                method: Ct(t, e, r),
                timestamp: u,
                url: un(t instanceof r ? t.url : t),
                headers: Lt(o, t.headers, e.headers)
            },
            response: {
                status: n && n.status || 0,
                is_custom_error: !1,
                timestamp: V()
            },
            duration: V() - u
        }
          , f = i.collectBodyOnError
          , s = i.extraExtractor;
        if (n)
            try {
                var l = Lt(o, n.headers);
                c.response.headers = l;
                try {
                    -1 !== (l["content-type"] || "").indexOf("application/json") && s && n.clone().json().then(function(n) {
                        n = s(n, c, null === (n = It(t, e, r)) || void 0 === n ? void 0 : n.toString());
                        n && (c.extra = n,
                        c.response.is_custom_error = !0,
                        a())
                    }).catch(P)
                } catch (n) {}
                400 <= n.status && a()
            } catch (n) {}
        else
            a();
        return c
    }
      , Dt = "fetch"
      , Nt = {
        autoWrap: !0,
        setContextAtReq: function() {
            return w
        },
        ignoreUrls: [],
        collectBodyOnError: !1
    };
    function Bt(n) {
        var t;
        return !function(n) {
            switch (Object.prototype.toString.call(n)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMError]":
            case "[object DOMException]":
                return 1;
            default:
                return n instanceof Error
            }
        }(n) ? (i(n) || e(n) || d(n)) && (t = {
            message: c(n)
        }) : t = r(n, Xt),
        t
    }
    function Pt(n) {
        var t = Bt(n.error);
        if (!t)
            return t;
        var e = n.colno
          , r = n.lineno
          , n = n.filename;
        return e && !t.colno && (t.colno = String(e)),
        r && !t.lineno && (t.lineno = String(r)),
        n && !t.filename && (t.filename = n),
        t
    }
    function Ht(n) {
        var t;
        try {
            var e = void 0;
            if ("reason"in n ? e = n.reason : "detail"in n && "reason"in n.detail && (e = n.detail.reason),
            e) {
                var r = Bt(e);
                return N(N({}, r), {
                    name: null !== (t = r && r.name) && void 0 !== t ? t : "UnhandledRejection"
                })
            }
        } catch (n) {}
    }
    function Ut(n) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(n) ? Pt(n) : ("[object PromiseRejectionEvent]" === Object.prototype.toString.call(n) ? Ht : Bt)(n)
    }
    function Wt(n, t) {
        return n && t && n === t
    }
    function Ft() {
        var r;
        return function(n) {
            try {
                if (e = r,
                !(!(t = n) || !e) && !(!Wt(t.message, e.message) || !Wt(t.stack, e.stack)))
                    return void (r = n)
            } catch (n) {
                fn(n)
            }
            var t, e;
            return r = n
        }
    }
    var Xt = ["name", "message", "stack", "filename", "lineno", "colno"]
      , zt = ["EventTarget", "Window", "Node", "ApplicationCache", "ChannelMergerNode", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "MessagePort", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
      , Gt = ["setTimeout", "setInterval", "requestAnimationFrame", "requestIdleCallback"]
      , Jt = ["onload", "onerror", "onprogress", "onreadystatechange"]
      , Yt = "addEventListener"
      , $t = ["async_error_0", function(o, n) {
        function u(n, e) {
            if (!E(n))
                return n;
            var r = {
                type: "capture-global",
                data: N({}, e)
            }
              , t = n._w_ || (n._w_ = function() {
                try {
                    return (n.handleEvent && E(n.handleEvent) ? n.handleEvent : n).apply(this, [].map.call(arguments, function(n) {
                        return u(n, e)
                    }))
                } catch (n) {
                    var t = Bt(n);
                    throw t && o({
                        source: r,
                        error: t
                    }),
                    n
                }
            }
            );
            return t._hook_ = !0,
            t
        }
        var t = K()
          , e = tn()
          , r = [];
        t && r.push.apply(r, b([], B(Gt.filter(function(n) {
            return t[n]
        }).map(function(o) {
            return h(t, o, function(r) {
                return function(n) {
                    for (var t = [], e = 1; e < arguments.length; e++)
                        t[e - 1] = arguments[e];
                    return r && r.call.apply(r, b([this, u(n, {
                        function: o
                    })], B(t), !1))
                }
            }, !1)()
        })), !1)),
        e && e.prototype && r.push(h(e.prototype, "send", function(r) {
            return function() {
                for (var t = this, n = [], e = 0; e < arguments.length; e++)
                    n[e] = arguments[e];
                return Jt.filter(function(n) {
                    return t[n] && !t[n]._hook_
                }).forEach(function(n) {
                    t[n] = u(t[n], {
                        function: n
                    })
                }),
                r.apply(this, n)
            }
        }, !1)()),
        zt.forEach(function(i) {
            var n = t && t[i] && t[i].prototype;
            n && n[Yt] && (r.push(h(n, Yt, function(o) {
                return function(n, t, e) {
                    try {
                        var r = t.handleEvent;
                        E(r) && (t.handleEvent = u(r, {
                            function: "handleEvent",
                            target: i
                        }))
                    } catch (n) {}
                    return o && o.call(this, n, u(t, {
                        function: Yt,
                        target: i
                    }), e)
                }
            }, !1)()),
            r.push(h(n, "removeEventListener", function(r) {
                return function(n, t, e) {
                    return null != t && t._w_ && r.call(this, n, t._w_, e),
                    r.call(this, n, t, e)
                }
            }, !1)()))
        }),
        n(function() {
            return r.forEach(function(n) {
                return n()
            })
        })
    }
    ]
      , Vt = ["err_0", function(n, t) {
        var e, r = K();
        r && (e = Sn(r, "error", n, !0),
        t(function() {
            e()
        }))
    }
    ]
      , Kt = ["perr_0", function(n, t) {
        var e, r = K();
        r && (e = Sn(r, "unhandledrejection", n, !0),
        t(function() {
            e()
        }))
    }
    ]
      , Qt = function(o, n, t, e) {
        function r(n) {
            var t = n.error
              , e = n.extra
              , r = n.react
              , n = n.source;
            !(t = s ? d(t) : t) || !t.message || l && l.test(t.message) || o({
                ev_type: nt,
                payload: {
                    error: t,
                    breadcrumbs: [],
                    extra: e,
                    react: r,
                    source: n
                }
            })
        }
        var i = B(t, 3)
          , u = i[0]
          , a = i[1]
          , c = i[2]
          , f = e.ignoreErrors
          , t = e.onerror
          , i = e.onunhandledrejection
          , s = e.dedupe
          , e = e.captureGlobalAsync
          , l = v(f)
          , d = Ft();
        return t && n.push(u[0](function(n) {
            return r({
                error: Pt(n),
                source: {
                    type: "onerror"
                }
            })
        })),
        i && n.push(a[0](function(n) {
            return r({
                error: Ht(n),
                source: {
                    type: "onunhandledrejection"
                }
            })
        })),
        e && n.push(c()[0](function(n) {
            r(n)
        })),
        function(n, t, e) {
            return r({
                error: Ut(n),
                extra: t,
                react: e,
                source: {
                    type: "manual"
                }
            })
        }
    }
      , Zt = "jsError"
      , ne = {
        ignoreErrors: [],
        onerror: !0,
        onunhandledrejection: !0,
        captureGlobalAsync: !1,
        dedupe: !0
    };
    function te(n) {
        return "complete" === n.readyState
    }
    function ee(e) {
        return function(n, t) {
            e({
                ev_type: Qn,
                payload: {
                    pid: t,
                    source: n
                }
            })
        }
    }
    function re(n, t) {
        var e = n[0] + n[1] + n[2]
          , r = n[0] / e;
        return n[2] / e > t.frustrating_threshold ? 2 : r > t.satisfying_threshold || 0 === e ? 0 : 1
    }
    function oe(o, i) {
        return function(n, t) {
            var e = n.payload;
            switch (n.ev_type) {
            case it:
                var r = e.name;
                e.isSupport && o(t[ye], r, e.value);
                break;
            case "action":
                o(t[ye], "action", e.duration || 0);
                break;
            case nt:
                i(t[me], 0);
                break;
            case tt:
                e.response.is_custom_error || 400 <= e.response.status ? i(t[me], 1) : (r = e.response.timing) && o(t[ge], 0, r.duration);
                break;
            case et:
                i(t[me], 2);
                break;
            case ct:
                i(t[me], 3);
                break;
            case rt:
                o(t[ge], 1, e.duration);
                break;
            case at:
                e.longtasks.forEach(function(n) {
                    o(t[ge], 2, n.duration)
                })
            }
        }
    }
    function ie() {
        function n() {
            o = [0, 0, 0],
            i = {
                error_count: [0, 0, 0, 0],
                duration_count: [0, 0, 0],
                perf_apdex: {}
            }
        }
        var o, i;
        return n(),
        [function(n, t, e) {
            var r = n && n[t];
            !r || e <= 0 || (n = e < (r[0].threshold || 0) ? 0 : e > (r[1].threshold || 0) ? 2 : 1,
            o[n] += r[n].weight,
            "string" == typeof t ? (r = i[ye][e = t + "_" + n],
            i[ye][e] = (r || 0) + 1) : 2 == n && (i.duration_count[t] += 1))
        }
        , function(n, t) {
            n && (o[2] += n[t],
            i.error_count[t] += 1)
        }
        , function() {
            return [o, i]
        }
        , n]
    }
    var ue = function(n) {
        return "hidden" === n.visibilityState
    }
      , ae = ["hidden_3", function(t, n) {
        var e, r, o, i = Q(), u = K();
        i && u && (r = Tn(i, "visibilitychange", e = function(n) {
            t("pagehide" === n.type || ue(i))
        }
        , !0),
        o = Sn(u, "pagehide", e, !0),
        n(function() {
            r(),
            o()
        }, function(n) {
            n(ue(i))
        }))
    }
    ]
      , ce = ["load_1", function(n, t) {
        var e, r, o, i = K(), u = Q();
        i && u && (e = !1,
        r = P,
        o = function() {
            setTimeout(function() {
                n(),
                e = !0
            }, 0)
        }
        ,
        te(u) ? o() : r = Sn(i, "load", o, !1),
        t(function() {
            r()
        }, function(n) {
            e && n()
        }))
    }
    ]
      , fe = ["unload_0", function(n, t) {
        var e, r, o, i = K();
        i && (e = B(On(n), 1)[0],
        r = function() {
            e()
        }
        ,
        o = [],
        ["unload", "beforeunload", "pagehide"].forEach(function(n) {
            o.push(Sn(i, n, r, !1))
        }),
        t(function() {
            o.forEach(function(n) {
                return n()
            })
        }))
    }
    ]
      , se = ["domLoad_1", function(n, t) {
        var e, r, o = K(), i = Q();
        o && i && (e = !1,
        r = P,
        o = function() {
            setTimeout(function() {
                n(),
                e = !0
            }, 0)
        }
        ,
        "loading" !== i.readyState ? o() : r = Tn(i, "DOMContentLoaded", o, !1),
        t(function() {
            r()
        }, function(n) {
            e && n()
        }))
    }
    ]
      , le = ["activated_0", function(n, t) {
        var e, r, o, i = Q();
        i && (e = !1,
        r = P,
        o = function() {
            n(),
            e = !0
        }
        ,
        i && i.prerendering ? r = Tn(i, "prerenderingchange", o, !0) : o(),
        t(function() {
            r()
        }, function(n) {
            e && n()
        }))
    }
    ]
      , de = ["hash_0", function(n, t) {
        var e, r = K();
        r && (e = Sn(r, "hashchange", function() {
            return n(location.href)
        }, !0),
        t(function() {
            e()
        }))
    }
    ]
      , pe = ["history_0", function(n, t) {
        var e, r, o, i = K() && window.history, u = K();
        i && u && (r = function() {
            return n(location.href)
        }
        ,
        (e = []).push(h(i, "pushState", o = function(e) {
            return function() {
                for (var n = [], t = 0; t < arguments.length; t++)
                    n[t] = arguments[t];
                try {
                    e.apply(i, n)
                } finally {
                    r()
                }
            }
        }
        )(), h(i, "replaceState", o)()),
        e.push(Sn(u, "popstate", r, !0)),
        t(function() {
            e.forEach(function(n) {
                return n()
            })
        }))
    }
    ]
      , ve = function(n) {
        return n + "_" + V()
    }
      , he = function(n) {
        return "manual" === n
    }
      , me = "error_weight"
      , ge = "duration_apdex"
      , ye = "perf_apdex"
      , be = function(n, t, e, r) {
        var o, i, u, a, c, f, s = r.sendInit, l = r.initPid, d = r.routeMode, p = r.extractPid, r = r.onPidUpdate, v = he(d) ? function() {
            return ""
        }
        : (o = d,
        function(n) {
            var t;
            return "hash" === o ? (null === (t = an(n).hash) || void 0 === t ? void 0 : t.replace(/^#/, "")) || "/" : an(n).path
        }
        ), h = p || function() {}
        , r = B(function(r, n, t, o) {
            var i = t
              , u = n;
            o && o(n);
            return [function(n, t, e) {
                "user_set" !== n && t !== i ? (i = t,
                u = null != e ? e : i,
                o && o(u),
                r(n, u)) : "user_set" === n && t !== u && (u = t,
                o && o(u),
                r(n, u))
            }
            , function() {
                n && r("init", n)
            }
            ]
        }(ee(n), l || (i = location.href,
        null !== (u = h(i)) && void 0 !== u ? u : v(i)), v(location.href), r), 2), m = r[0], r = r[1];
        return he(d) || (a = B((c = function(n, t) {
            return m(n, v(t), h(t))
        }
        ,
        f = "",
        [function(n, t) {
            t !== f && c(n, f = t)
        }
        ]), 1)[0],
        e.length && e.forEach(function(n) {
            return t.push(n[0](function(n) {
                return a(d, n)
            }))
        })),
        s && r(),
        [m.bind(null, "user_set")]
    }
      , _e = function(r, t, n, e) {
        var o, i, u, a = B(n, 2), c = a[0], f = a[1], s = 2 === e.apdex, l = void 0, d = void 0, p = void 0, v = !1, h = B(ie(), 4), m = h[0], g = h[1], y = h[2], b = h[3], n = B(ie(), 4), a = n[0], e = n[1], _ = n[2], w = n[3], h = B((o = {
            start: V(),
            end: 0,
            time_spent: 0,
            is_bounced: !1,
            entry: "",
            exit: "",
            p_count: 0,
            a_count: 0
        },
        [function(n, t) {
            var e = B(n, 3)
              , r = e[0]
              , n = e[1]
              , e = e[2];
            o.end = V(),
            o.time_spent += t && t.time_spent || 0,
            o.last_page = t,
            o.p_count += 1,
            o.rank = r,
            o.apdex = n,
            o.apdex_detail = e;
            e = Q();
            e && (o.is_bounced = !te(e))
        }
        , function(n, t) {
            o.time_spent += n.time_spent,
            o.p_count += 1,
            o.exit = t
        }
        , function() {
            o.a_count += 1
        }
        , function(n) {
            o.entry = n,
            o.exit = n
        }
        , function() {
            return o
        }
        ]), 5), x = h[0], E = h[1], S = h[2], T = h[3], R = h[4], n = B((u = void (i = 0),
        [function(n) {
            n ? u && (i += V() - u,
            u = void 0) : u = V()
        }
        , function() {
            u && (i += V() - u);
            var n = i;
            return i = 0,
            u = V(),
            n
        }
        ]), 2), h = n[0], j = n[1];
        t.push(c[0](h)),
        s || t.push(f[0](function() {
            var n, t, e;
            v && (n = (e = B(_(), 2))[0],
            t = e[1],
            e = re(n, p),
            x([e, n, t], C()),
            r({
                ev_type: Zn,
                payload: R()
            }),
            w())
        }));
        var k = oe(m, g)
          , O = oe(a, e)
          , C = function() {
            var n = B(y(), 2)
              , t = n[0]
              , n = n[1];
            return {
                start: l[0],
                pid: l[1],
                view_id: l[2],
                end: V(),
                time_spent: j(),
                apdex: t,
                rank: re(t, p),
                detail: n
            }
        };
        return t.push(function() {
            v = !1
        }),
        [function(n, t) {
            if (!l)
                return l = [V(), n, t],
                T(n),
                void (v = !(!p || !l));
            v && (d = C(),
            E(d, n)),
            l = [V(), n, t],
            b()
        }
        , function(n) {
            v && (s || (O(n, p),
            "action" === n.ev_type && S()),
            n.common.pid === l[1] && k(n, p))
        }
        , function(n) {
            v && (n.payload.last = d),
            r(n)
        }
        , function(n) {
            if (!n)
                return t.forEach(function(n) {
                    return n()
                }),
                void (t.length = 0);
            v = !(!(p = n) || !l)
        }
        ]
    }
      , we = "pageview"
      , xe = {
        sendInit: !0,
        routeMode: "history",
        apdex: 2
    };
    var Ee = ["xmlhttprequest", "fetch", "beacon"]
      , Se = function(e, r, n, t) {
        var o, i, u, a, c = B(n, 2), n = c[0], f = c[1], s = nn();
        s && (c = t.ignoreUrls,
        o = t.slowSessionThreshold,
        i = t.ignoreTypes,
        u = v(c),
        a = function(n, t) {
            void 0 === t && (t = !1),
            S(i || Ee, n.initiatorType) || u && u.test(n.name) || (n = {
                ev_type: rt,
                payload: n
            },
            t && (n.extra = {
                sample_rate: 1
            }),
            e(n))
        }
        ,
        r.push(n[0](function() {
            var n = B(bn(s), 3)
              , t = n[0]
              , n = n[2]
              , e = function() {
                if (!t)
                    return !1;
                var n = t.loadEventEnd - t.navigationStart;
                return o < n
            }();
            n("resource").forEach(function(n) {
                return a(n, e)
            }),
            r.push(f()[0](function(n) {
                a(n)
            }))
        })))
    }
      , Te = "resource"
      , Re = {
        ignoreUrls: [],
        slowSessionThreshold: 4e3
    };
    function je(n) {
        return n = "link" === (t = n).tagName.toLowerCase() ? "href" : "src",
        E(t.getAttribute) ? t.getAttribute(n) || "" : t[n] || "";
        var t
    }
    var ke = function(n, t) {
        var e = n.target || n.srcElement;
        if (e) {
            n = e.tagName;
            if (n && d(n))
                return {
                    url: je(e),
                    tagName: n,
                    xpath: t ? En(e) : void 0
                }
        }
    }
      , Oe = function(n, t) {
        var e = n.url
          , r = n.tagName
          , n = n.xpath
          , e = un(e)
          , t = t(e)[0];
        return {
            type: r.toLowerCase(),
            url: e,
            xpath: n,
            timing: t
        }
    }
      , Ce = "resourceError"
      , Le = {
        includeUrls: [],
        ignoreUrls: [],
        dedupe: !0,
        gatherPath: !1
    };
    function Ie(e) {
        return function(n, t) {
            e(Ne(n, t))
        }
    }
    function Me(t) {
        var e = 0
          , r = Ae(n, 0);
        return [function() {
            e = V()
        }
        , function() {
            var n;
            n = V() - e,
            r.value = n,
            t && t(Ne(r)),
            e = 0
        }
        ]
    }
    var qe = {
        isSupport: !0,
        isPolyfill: !1,
        isBounced: !1,
        isCustom: !1,
        type: "perf"
    }
      , Ae = function(n, t) {
        return N({
            name: n,
            value: t
        }, qe)
    }
      , De = function(t, e, r) {
        var o = !1;
        return function(n) {
            r.length && r.forEach(function(n) {
                n()
            }),
            r.length = 0,
            o || (o = !0,
            e && e(t(n)))
        }
    }
      , Ne = function(n, t) {
        return {
            ev_type: it,
            payload: n,
            overrides: t
        }
    }
      , n = "spa_load"
      , Be = function() {
        var n = nn();
        return (0,
        B(bn(n), 3)[2])("navigation")[0]
    }
      , Pe = function() {
        var n = Be();
        return n && n.activationStart || 0
    };
    function He(n) {
        var t, e, n = null === (n = null == n ? void 0 : n.sources) || void 0 === n ? void 0 : n.filter(function(n) {
            return !!n.node
        });
        if (n && n.length) {
            if (1 === n.length)
                return n[0].node;
            var r, o = 0;
            try {
                for (var i = function(n) {
                    var t = "function" == typeof Symbol && Symbol.iterator
                      , e = t && n[t]
                      , r = 0;
                    if (e)
                        return e.call(n);
                    if (n && "number" == typeof n.length)
                        return {
                            next: function() {
                                return {
                                    value: (n = n && r >= n.length ? void 0 : n) && n[r++],
                                    done: !n
                                }
                            }
                        };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }(n), u = i.next(); !u.done; u = i.next()) {
                    var a = u.value
                      , c = Ge(a);
                    o < c && (o = c,
                    r = a.node)
                }
            } catch (n) {
                t = {
                    error: n
                }
            } finally {
                try {
                    u && !u.done && (e = i.return) && e.call(i)
                } finally {
                    if (t)
                        throw t.error
                }
            }
            return r
        }
    }
    function Ue(t) {
        function e(n) {
            n < o || !r || (u(),
            i = window.setTimeout(r, n - t()),
            o = n)
        }
        var r, o = -1 / 0, i = void 0, u = function() {
            return window.clearTimeout(i)
        };
        return [function(n, t) {
            r = n,
            e(t)
        }
        , function() {
            u(),
            r = void 0
        }
        , e]
    }
    function We(n, e) {
        var r = ["img", "script", "iframe", "link", "audio", "video", "source"]
          , t = (n = B(sn(n, function(n) {
            for (var t = 0; t < n.length; t++)
                ("childList" === n[t].type && function n(t, e) {
                    for (var r = 0; r < t.length; r++)
                        if (S(e, t[r].nodeName.toLowerCase()) || t[r].children && n(t[r].children, e))
                            return 1
                }(n[t].addedNodes, r) || "attributes" === n[t].type && S(r, n[t].target.nodeName.toLowerCase())) && e(n[t])
        }), 2))[0];
        return [function() {
            return t(document, {
                attributes: !0,
                childList: !0,
                subtree: !0,
                attributeFilter: ["href", "src"]
            })
        }
        , n[1]]
    }
    function Fe(n) {
        var n = (t = n || {}).domContentLoadedEventEnd
          , t = t.navigationStart;
        return n ? n - (void 0 === t ? 0 : t) : null
    }
    function Xe(n, t) {
        var e = n.startTime
          , r = n.duration;
        n.start = e,
        n.end = e + r,
        t.push(n)
    }
    function ze(d, n, p) {
        var v = (n = B(n, 5))[0]
          , h = n[1]
          , m = n[2]
          , g = n[3]
          , y = n[4];
        return function(e, n) {
            var r, o = [], i = [], t = B([r = {}, function(n, t) {
                return r[n] = t
            }
            , function(n) {
                return delete r[n]
            }
            ], 3), u = t[0], a = t[1], c = t[2];
            p.forEach(function(n) {
                n.entryType === Gn[0] && Xe(n, o)
            });
            var f = 0;
            d.push(v[0](function(n) {
                if ("get" !== (B(n, 1)[0] || "").toLowerCase())
                    return P;
                var t = f += 1;
                return a(t, V()),
                function() {
                    c(t)
                }
            })),
            d.push(h[0](function(n) {
                var t = B(n, 2)
                  , n = t[0]
                  , t = t[1];
                if (!window.Request || "get" !== Ct(n, t, window.Request))
                    return P;
                var e = f += 1;
                return a(e, V()),
                function() {
                    c(e)
                }
            }));
            var s = B(y && We(y, function() {
                return e(n() + 5e3)
            }) || [], 2)
              , t = s[0]
              , s = s[1];
            t && t();
            function l() {
                return function(n, t, e) {
                    if (2 < n.length)
                        return e();
                    for (var r = [], o = 0; o < t.length; o++)
                        r.push([t[o].start, 0], [t[o].end, 1]);
                    for (o = 0; o < n.length; o++)
                        r.push([n[o], 0]);
                    r.sort(function(n, t) {
                        return n[0] - t[0]
                    });
                    for (var i = n.length, o = r.length - 1; 0 <= o; o--) {
                        var u = B(r[o], 2)
                          , a = u[0];
                        switch (u[1]) {
                        case 0:
                            i--;
                            break;
                        case 1:
                            if (2 < ++i)
                                return a
                        }
                    }
                    return 0
                }(function(n) {
                    for (var t = Object.keys(n), e = [], r = 0; r < t.length; r++) {
                        var o = n[t[r]];
                        "number" == typeof o && e.push(o)
                    }
                    return e
                }(u), i, n)
            }
            return s && d.push(s),
            d.push(m[0](function(n) {
                Xe(n, o);
                var t = n.startTime
                  , n = n.duration;
                e(t + n + 5e3)
            })),
            d.push(g[0](function(n) {
                var t = n.fetchStart
                  , n = n.responseEnd;
                i.push({
                    start: t,
                    end: n
                }),
                e(l() + 5e3)
            })),
            d.push(function() {
                o.length = 0,
                i.length = 0
            }),
            [o, l]
        }
    }
    var Ge = function(n) {
        var t, e, r, o, i, u, a, c, f = n.previousRect, s = n.currentRect, l = window.innerWidth * window.devicePixelRatio, d = window.innerHeight * window.devicePixelRatio;
        return (t = Math.max(s.left, f.left),
        e = Math.min(s.right, f.right),
        r = Math.max(s.top, f.top),
        o = Math.min(s.bottom, f.bottom),
        r = o - r,
        r = (t = e - t) <= 0 || r <= 0 ? 0 : t * r,
        Math.min((s.width * s.height + f.width * f.height - r) / (d * l), 1)) * (i = 0 === s.x && 0 === s.y && 0 === s.width && 0 === s.height ? {
            x: s.x,
            y: d
        } : {
            x: s.x,
            y: s.y
        },
        u = i.x,
        a = i.y,
        c = 0 === f.x && 0 === f.y && 0 === f.width && 0 === f.height ? {
            x: f.x,
            y: d
        } : {
            x: f.x,
            y: f.y
        },
        i = c.x,
        c = c.y,
        a = Math.max(Math.abs(u - i), Math.abs(a - c)),
        c = Math.max(l, d),
        Math.min(a / c, 1))
    }
      , Je = "first-contentful-paint"
      , Ye = "first-paint"
      , $e = "paint"
      , Ve = function(o, n, t, i, e) {
        var e = B(e, 3)
          , r = e[0]
          , u = e[1]
          , a = e[2]
          , c = rn()
          , f = nn()
          , s = Q()
          , l = Ae(n, 0)
          , d = De(Ne, t, i);
        if (!f || !c || !s)
            return l.isSupport = !1,
            void d(l);
        function p() {
            if (ue(s))
                return l.isSupport = !1,
                void d(l);
            function t(n) {
                var t = n.startTime
                  , n = Pe();
                l.value = t < n ? 0 : t - n,
                d(l)
            }
            var n, e, r = (0,
            B(bn(f), 5)[4])(o)[0];
            r ? t(r) : (i.push(Yn(c, function(n) {
                n.name === o && t(n)
            }, [$e])),
            r = a(),
            i.push(r[0](function() {
                l.isBounced = !0,
                d(l)
            })),
            n = function(n) {
                n && d(l)
            }
            ,
            e = u(),
            i.push(function() {
                return e[1](n)
            }),
            e[0](n))
        }
        i.push(function() {
            return r[1](p)
        }),
        r[0](p)
    }
      , Ke = ["fp", function(n, t, e) {
        return Ve(Ye, "fp", n, t, e)
    }
    ]
      , Qe = ["fcp", function(n, t, e) {
        return Ve(Je, "fcp", n, t, e)
    }
    ]
      , Ze = function(n, t, e, r) {
        var o = B(e, 5)
          , i = o[0]
          , u = o[1]
          , a = o[2]
          , c = o[3]
          , f = o[4]
          , s = Ae("tti", 0)
          , l = De(Ne, n, t)
          , e = nn()
          , o = rn()
          , n = r || {}
          , r = n.entries
          , d = void 0 === r ? [] : r
          , p = n.observer;
        if (t.push(function() {
            p && p.disconnect(),
            d.length = 0
        }),
        !window || !XMLHttpRequest || !e || !o || o.supportedEntryTypes && !S(o.supportedEntryTypes || [], Gn[0]))
            return s.isSupport = !1,
            void l(s);
        var n = B(bn(e), 5)
          , v = n[0]
          , h = n[1]
          , m = n[4]
          , o = B(Ue(h), 3)
          , e = o[0]
          , n = o[1]
          , g = o[2]
          , c = B(ze(t, [i, u, a, c, en()], d)(g, h), 2)
          , y = c[0]
          , b = c[1];
        t.push(n);
        function _(n) {
            var t = m(Je)[0];
            if (!(t = function(n, t, e, r, o) {
                if (r - e < 5e3)
                    return null;
                o = 0 === o.length ? n : o[o.length - 1].end;
                return r - o < 5e3 ? null : Math.max(o, t)
            }((t ? t.startTime : Fe(v)) || 0, Fe(v) || 0, b(), h(), y)))
                return g(h() + 1e3);
            n(t)
        }
        function w(n) {
            s.value = n,
            l(s)
        }
        n = y[y.length - 1];
        e(function() {
            return _(w)
        }, Math.max(b() + 5e3, n ? n.end : 0)),
        t.push(f[0](function() {
            s.isSupport = !1,
            l(s)
        }))
    }
      , nr = "tti";
    function tr(n, e, t, r) {
        if (!n || -1 < r.indexOf(n.tagName))
            return 0;
        var o = n.children;
        if ((o = [].slice.call(void 0 === o ? [] : o).reduceRight(function(n, t) {
            return n + tr(t, e + 1, 0 < n, r)
        }, 0)) <= 0 && !t) {
            if (!E(n.getBoundingClientRect))
                return 0;
            t = n.getBoundingClientRect() || {},
            n = t.top,
            t = t.height;
            if (n > window.innerHeight || t <= 0)
                return 0
        }
        return o + 1 + .5 * e
    }
    var er = ["SCRIPT", "STYLE", "META", "HEAD"]
      , rr = function(n, e, t) {
        var r = B(t, 2)
          , o = r[0]
          , i = r[1]
          , u = Q()
          , a = en()
          , c = nn()
          , f = c && c.timing && c.timing.navigationStart || void 0
          , s = Ae("fmp", 0)
          , l = De(Ne, n, e);
        if (!u || !a || !f)
            return s.isSupport = !1,
            void l(s);
        function d() {
            return y.push({
                time: V() - g,
                score: tr(u && u.body, 1, !1, er)
            })
        }
        function p(n) {
            void 0 === n && (n = 0);
            var t, e = (e = (t = B(void 0 === (e = y) ? [] : e))[0],
            (t = t.slice(1)) && t.reduce(function(n, t) {
                var e = B(n, 2)
                  , r = e[0]
                  , n = e[1]
                  , e = t.score - r.score;
                return [t, t.time >= r.time && n.rate < e ? {
                    time: t.time,
                    rate: e
                } : n]
            }, [e, {
                time: null == e ? void 0 : e.time,
                rate: 0
            }])[1].time || 0);
            s.value = e ? e + n : 0,
            l(s),
            y.length = 0
        }
        var v, h, m, g = V(), y = [], t = function() {
            if (K() && "requestAnimationFrame"in window)
                return window.requestAnimationFrame
        }(), r = function() {
            if (K() && "cancelAnimationFrame"in window)
                return window.cancelAnimationFrame
        }(), b = B((c = u,
        n = r,
        r = !0,
        h = !E(t = t) || r && c && c.hidden ? function(n) {
            return n(0),
            0
        }
        : t,
        m = E(n) ? n : P,
        [function(n) {
            v && m(v),
            v = h(n)
        }
        , h, m]), 1)[0], n = B(sn(a, function() {
            return b(d)
        }), 2), a = n[0], n = n[1], _ = g - (f || 0);
        a(u, {
            subtree: !0,
            childList: !0
        }),
        e.push(n),
        e.push(i[0](function() {
            s.isSupport = !1,
            l(s)
        })),
        e.push(o[0](function() {
            var n, t;
            n = window.setTimeout(function() {
                p(_)
            }, 200),
            t = e,
            n && t.push(function() {
                return clearTimeout(n)
            })
        }))
    }
      , or = "fmp"
      , ir = {
        renderType: "CSR"
    };
    var ur = ["keydown", "click"]
      , ar = ["lcp", function(n, o, t) {
        var t = B(t, 3)
          , e = t[0]
          , i = t[1]
          , u = t[2]
          , a = rn()
          , c = Q()
          , f = Ae("lcp", 0)
          , s = De(Ne, n, o);
        if (!a || !c)
            return f.isSupport = !1,
            void s(f);
        function r() {
            if (ue(c))
                return f.isSupport = !1,
                void s(f);
            function t() {
                setTimeout(function() {
                    s(f)
                }, 0)
            }
            o.push($n(a, function(n) {
                var t = n.startTime
                  , e = n.element
                  , n = Pe();
                if (f.value = t < n ? 0 : t - n,
                e)
                    try {
                        f.extra = {
                            element: En(e)
                        }
                    } catch (n) {}
            }, "largest-contentful-paint")),
            ur.forEach(function(n) {
                o.push(Tn(c, n, t, !0))
            });
            var n = u();
            function e(n) {
                n && s(f)
            }
            o.push(n[0](function() {
                f.isBounced = !0,
                s(f)
            }));
            var r = i();
            o.push(function() {
                return r[1](e)
            }),
            r[0](e)
        }
        o.push(function() {
            return e[1](r)
        }),
        e[0](r)
    }
    ]
      , cr = ["cls", function(n, t, e) {
        var r = B(e, 4)
          , o = r[1]
          , i = r[2]
          , e = r[3]
          , r = rn()
          , u = Ae("cls", 0)
          , a = Ie(n);
        if (!r)
            return u.isSupport = !1,
            void a(u);
        var c, f, s, n = B((f = [],
        s = void (c = 0),
        [function() {
            c = 0
        }
        , function(n, t) {
            var e, r;
            t.hadRecentInput || (e = f[0],
            r = f[f.length - 1],
            s = c && t.startTime - r < 1e3 && t.startTime - e < 5e3 ? (c += t.value,
            f.push(t.startTime),
            t.value > s.value ? t : s) : (c = t.value,
            f = [t.startTime],
            t),
            n(c, s))
        }
        ]), 2), l = n[0], n = n[1].bind(null, function(n, t) {
            if (n > u.value) {
                u.value = n;
                try {
                    var e = He(t);
                    u.extra = e ? {
                        element: En(e)
                    } : void 0
                } catch (n) {}
            }
        });
        t.push($n(r, n, "layout-shift"));
        o = o();
        t.push(o[0](function(n) {
            n && l()
        }));
        e = e();
        t.push(e[0](function(n) {
            a(u, n),
            l(),
            u = Ae("cls", 0)
        }));
        i = i();
        t.push(i[0](function() {
            a(u)
        }))
    }
    ]
      , fr = "event"
      , sr = ["inp", function(n, t, e) {
        var r = B(e, 4)
          , e = r[0]
          , o = r[2]
          , i = r[3]
          , u = rn()
          , a = function() {
            if (K() && E(window.PerformanceEventTiming))
                return window.PerformanceEventTiming
        }()
          , r = nn()
          , c = Ae("inp", 0)
          , f = Ie(n);
        if (!u || !a || !r)
            return c.isSupport = !1,
            void f(c);
        function s() {
            g = _(),
            y = [],
            b = {}
        }
        function l(n) {
            var t = y[y.length - 1]
              , e = b[n.interactionId];
            (e || y.length < 10 || n.duration > t.latency) && (e ? (e.entries.push(n),
            e.latency = Math.max(e.latency, n.duration)) : (n = {
                id: n.interactionId,
                latency: n.duration,
                entries: [n]
            },
            b[n.id] = n,
            y.push(n)),
            y.sort(function(n, t) {
                return t.latency - n.latency
            }),
            y.splice(10).forEach(function(n) {
                delete b[n.id]
            }))
        }
        function d() {
            var n = (n = Math.min(y.length - 1, Math.floor(w() / 50)),
            y[n]);
            n && (c.value = n.latency,
            (n = n.entries[0].target) && (c.extra = {
                element: En(n)
            }))
        }
        function p(t) {
            t.interactionId && l(t),
            "first-input" !== t.entryType || y.some(function(n) {
                return n.entries.some(function(n) {
                    return t.duration === n.duration && t.startTime === n.startTime
                })
            }) || l(t)
        }
        var v, h, m, g = 0, y = [], b = {}, _ = B((h = 1 / (v = 0),
        m = 0,
        t.push($n(u, function(n) {
            n.interactionId && (h = Math.min(h, n.interactionId),
            m = Math.max(m, n.interactionId),
            v = m ? (m - h) / 7 + 1 : 0)
        }, fr, 0)),
        [function() {
            return v
        }
        ]), 1)[0], w = function() {
            return _() - g
        };
        t.push(e[0](function() {
            t.push($n(u, p, fr, 40)),
            "interactionId"in a.prototype && t.push($n(u, p, "first-input"));
            var n = i();
            t.push(n[0](function(n) {
                d(),
                f(c, n),
                s(),
                c = Ae("inp", 0)
            }));
            n = o();
            t.push(n[0](function() {
                d(),
                f(c)
            })),
            t.push(s)
        }))
    }
    ]
      , lr = "longtask"
      , dr = [lr, function(t, n, e) {
        e = B(e, 4)[3];
        n.push(e[0](function(n) {
            t({
                ev_type: at,
                payload: {
                    type: "perf",
                    longtasks: [n]
                }
            })
        }))
    }
    ]
      , pr = ["timing", function(n, e, t) {
        var r = B(t, 3)
          , o = r[0]
          , i = r[1]
          , t = r[2]
          , r = nn()
          , r = B(bn(r), 3)
          , u = r[0]
          , a = r[1]
          , c = r[2]
          , f = De(function(n) {
            var t = c("navigation")[0]
              , e = t && t.responseStart;
            return (!e || e <= 0 || e > a()) && (t = void 0),
            {
                ev_type: ut,
                payload: {
                    isBounced: n,
                    timing: u,
                    navigation_timing: t
                }
            }
        }, n, e);
        e.push(t[0](function() {
            f(!0)
        }));
        function s() {
            function n() {
                f(!1)
            }
            var t = i();
            e.push(function() {
                return t[1](n)
            }),
            t[0](n)
        }
        e.push(function() {
            return o[1](s)
        }),
        o[0](s)
    }
    ];
    sr[0];
    function vr(n, t) {
        return ~yr.indexOf(n.tagName) || _r < t
    }
    function hr(n) {
        return {
            width: (n = n.getBoundingClientRect()).width,
            height: n.height,
            top: n.top
        }
    }
    function mr(n) {
        return n ? document.querySelector(n) : document.body
    }
    function gr(e, r, n, o) {
        if (void 0 === r && (r = 0),
        void 0 === n && (n = 0),
        void 0 === o && (o = 1.5),
        !e || vr(e, r) || o <= n)
            return n;
        var t = function() {
            if (!r)
                return 0;
            var n = hr(e)
              , t = n.top
              , n = n.height;
            return t > innerHeight || n <= 0 ? 0 : 1 / (1 << r - 1)
        }();
        return [].reduceRight.call(e.children, function(n, t) {
            return gr(t, r + 1, n, o)
        }, n + t)
    }
    var yr = ["SCRIPT", "STYLE", "META", "HEAD"]
      , br = [nt, tt, et]
      , _r = 4
      , wr = [it, at, ut, ot];
    function xr(n) {
        var e = n.cb
          , t = n.screenshotUrl
          , r = n.window
          , o = n.document
          , i = n.mask
          , u = n.partialShot
          , a = n.quality
          , c = n.rootSelector;
        if (K() && "Promise"in window && Promise && r && o) {
            if (r.html2canvas)
                return f(),
                0;
            n = o.createElement("script");
            n.src = t,
            n.crossOrigin = "anonymous",
            n.onload = f,
            n.onerror = function() {
                e()
            }
            ,
            null !== (t = o.head) && void 0 !== t && t.appendChild(n)
        }
        function f() {
            var t;
            ((t = r).requestIdleCallback || function(n) {
                return t.setTimeout(n, 1)
            }
            )(function() {
                r.html2canvas && r.html2canvas(u && c && o.querySelector(c) || o.body, {
                    scale: 360 / r.innerWidth,
                    mask: i,
                    useCROS: !0
                }).then(function(n) {
                    e("data:image" === (n = n.toDataURL("image/jpeg", a)).slice(0, 10) ? n : Er())
                }).catch(function() {
                    e(Er())
                })
            })
        }
    }
    function Er(n, t) {
        void 0 === n && (n = 192),
        void 0 === t && (t = 108);
        var e = document.createElement("canvas");
        e.width = n,
        e.height = t;
        var r = e.getContext("2d");
        return r && (r.fillStyle = "#ffffff",
        r.fillRect(0, 0, n, t)),
        e.toDataURL("image/jpeg")
    }
    var Sr = function(e, r, n, t) {
        function o(n, t) {
            M || (u = A()) && (M = !0,
            r.forEach(function(n) {
                return n()
            }),
            r.length = 0,
            e({
                ev_type: ct,
                payload: {
                    timestamp: u[0],
                    score: u[1],
                    screenshot: t,
                    error: a,
                    serialized_dom: function e(n, r, t) {
                        if (void 0 === r && (r = 0),
                        void 0 === t && (t = !0),
                        !n || vr(n, r))
                            return "";
                        var o = N(N({}, hr(n)), {
                            id: n.getAttribute("id"),
                            class: n.getAttribute("class")
                        })
                          , i = Object.keys(o).reduce(function(n, t) {
                            return n + (H(o[t]) || o[t] ? " " + t + '="' + o[t] + '"' : "")
                        }, "")
                          , u = n.tagName.toLowerCase()
                          , n = [].reduce.call(n.children, function(n, t) {
                            return n + e(t, r + 1, !1)
                        }, "");
                        return "<" + u + i + (t ? ' innerHeight="' + innerHeight + '" visibilityState="' + document.visibilityState + '"' : "") + ">" + n + "</" + u + ">"
                    }(mr(_))
                },
                overrides: {
                    timestamp: n || u[0]
                }
            }))
        }
        function i() {
            s && clearTimeout(s),
            c && clearTimeout(c),
            c = j.setTimeout(function() {
                f = O(function() {
                    (u = A()) && D()
                })
            }, 1e3)
        }
        var u, a, c, f, s, l, d, p = B(n, 5), v = p[0], h = p[1], m = p[2], g = p[3], y = p[4], b = t.threshold, n = t.screenshot, _ = t.rootSelector, p = t.autoDetect, w = t.ssUrl, x = t.quality, E = t.mask, S = t.partialShot, T = t.initDetTime, R = t.runDetTime, j = K(), k = Q(), O = j.requestAnimationFrame || P, C = j.cancelAnimationFrame || P, L = B(bn(performance), 2)[1], I = 0, M = !1, q = !n, A = function() {
            var n = mr(_);
            if (n) {
                n = gr(n, 0, 0, b);
                return n < b ? [V(), n] : void 0
            }
        }, D = (l = function() {
            u && !M && (q ? o() : (q = !0,
            xr({
                cb: o.bind(null, V()),
                screenshotUrl: w,
                window: j,
                document: k,
                mask: E,
                partialShot: S,
                quality: x,
                rootSelector: _
            })))
        }
        ,
        function() {
            s && clearTimeout(s),
            d = V(),
            s = j.setTimeout(function() {
                (d < I ? i : l)()
            }, 1e4 < L() ? R : T)
        }
        );
        return r.push(y[0](function() {
            a && o()
        })),
        p && r.push(v[0](function() {
            var n = h();
            r.push(n[0](function() {
                var n = B(sn(en(), i), 2)
                  , t = n[0]
                  , e = n[1];
                r.push(function() {
                    clearTimeout(c),
                    clearTimeout(s),
                    C(f),
                    e && e()
                }),
                t(null === (t = Q()) || void 0 === t ? void 0 : t.body, {
                    subtree: !0,
                    childList: !0
                }),
                r.push(m()[0](function() {
                    c && i()
                })),
                r.push(g()[0](function() {
                    c && i()
                })),
                i()
            }))
        })),
        [function(n) {
            M || ~wr.indexOf(n.ev_type) || (I = V(),
            a = function(n, t) {
                if (-1 === br.indexOf(t.ev_type))
                    return n;
                if (t.ev_type === tt && t.payload.response.status < 400)
                    return n;
                if (n && br.indexOf(n.type) < br.indexOf(t.ev_type))
                    return n;
                var e = "";
                switch (t.ev_type) {
                case nt:
                    e = t.payload.error.message;
                    break;
                case tt:
                    e = t.payload.request.url;
                    break;
                case et:
                    e = t.payload.url
                }
                return {
                    type: t.ev_type,
                    message: e,
                    timestamp: V()
                }
            }(a = a && 1e4 < I - a.timestamp ? void 0 : a, n))
        }
        , i]
    }
      , Tr = "blankScreen";
    var Rr = {
        entries: [],
        observer: void 0
    }
      , jr = "performance";
    function kr(e) {
        function r(n) {
            var t = Or(n);
            t && ((n = Bn(r)) && (t.stacks = n),
            e.report({
                ev_type: ot,
                payload: t,
                extra: {
                    timestamp: V()
                }
            }))
        }
        e.provide("sendEvent", r),
        e.provide("sendLog", function(n) {
            n = Cr(n);
            n && e.report({
                ev_type: ot,
                payload: n,
                extra: {
                    timestamp: V()
                }
            })
        })
    }
    var Or = function(n) {
        if (n && x(n) && n.name && d(n.name)) {
            var t = {
                name: n.name,
                type: "event"
            };
            if ("metrics"in n && x(n.metrics)) {
                var e = n.metrics
                  , r = {};
                for (o in e)
                    H(e[o]) && (r[o] = e[o]);
                t.metrics = r
            }
            if ("categories"in n && x(n.categories)) {
                var o, i = n.categories, u = {};
                for (o in i)
                    u[o] = c(i[o]);
                t.categories = u
            }
            return "attached_log"in n && d(n.attached_log) && (t.attached_log = n.attached_log),
            t
        }
    }
      , Cr = function(n) {
        if (n && x(n) && n.content && d(n.content)) {
            var t = {
                content: c(n.content),
                type: "log",
                level: "info"
            };
            if ("level"in n && (t.level = n.level),
            "extra"in n && x(n.extra)) {
                var e, r = n.extra, o = {}, i = {};
                for (e in r)
                    H(r[e]) ? o[e] = r[e] : i[e] = c(r[e]);
                t.metrics = o,
                t.categories = i
            }
            return "attached_log"in n && d(n.attached_log) && (t.attached_log = n.attached_log),
            t
        }
    };
    function Lr(n) {
        return (null == n ? void 0 : n.effectiveType) || (null == n ? void 0 : n.type) || ""
    }
    function Ir(n, t) {
        var e = n.common || {};
        return e.sample_rate = t,
        n.common = e,
        n
    }
    function Mr(n, t, e, r, o) {
        return n ? (i = o(r, t),
        function() {
            return i
        }
        ) : function() {
            return e(t)
        }
        ;
        var i
    }
    function qr(n, t, e, r) {
        if (void 0 === (n = l(n, t, function(n, t) {
            return n[t]
        })))
            return !1;
        var o, t = "boolean" == typeof n ? "bool" : H(n) ? "number" : "string";
        return function(n, t, e) {
            switch (e) {
            case "eq":
                return S(t, n);
            case "neq":
                return !S(t, n);
            case "gt":
                return n > t[0];
            case "gte":
                return n >= t[0];
            case "lt":
                return n < t[0];
            case "lte":
                return n <= t[0];
            case "regex":
                return Boolean(n.match(new RegExp(t.join("|"))));
            case "not_regex":
                return !n.match(new RegExp(t.join("|")));
            default:
                return !1
            }
        }(n, (o = t,
        r.map(function(n) {
            switch (o) {
            case "number":
                return Number(n);
            case "boolean":
                return "1" === n;
            default:
                return String(n)
            }
        })), e)
    }
    function Ar(t, n) {
        try {
            return "rule" === n.type ? qr(t, n.field, n.op, n.values) : "and" === n.type ? n.children.every(function(n) {
                return Ar(t, n)
            }) : n.children.some(function(n) {
                return Ar(t, n)
            })
        } catch (n) {
            return fn(n),
            !1
        }
    }
    function Dr() {
        var e = K();
        return e && e.navigator.sendBeacon ? {
            get: function() {},
            post: function(n, t) {
                e.navigator.sendBeacon(n, t)
            }
        } : {
            get: P,
            post: P
        }
    }
    function Nr(n, t, e) {
        var r = t.url
          , o = t.data
          , i = t.success
          , u = void 0 === i ? P : i
          , a = void 0 === (i = t.fail) ? P : i
          , c = void 0 === (i = t.getResponseText) ? P : i
          , t = void 0 !== (t = t.withCredentials) && t;
        (e = new e).withCredentials = t,
        e.open(n, r, !0),
        e.setRequestHeader("Content-Type", "application/json"),
        e.onload = function() {
            null != c && c(this.responseText);
            try {
                var n;
                400 <= this.status ? a(new Error(this.responseText || this.statusText)) : this.responseText ? (n = JSON.parse(this.responseText),
                u(n)) : u({})
            } catch (n) {
                a(n)
            }
        }
        ,
        e.onerror = function() {
            a(new Error("Network request failed"))
        }
        ,
        e.onabort = function() {
            a(new Error("Network request aborted"))
        }
        ,
        e.send(o)
    }
    var Br = function(n) {
        var t = on()
          , e = Lr(t);
        t && (t.onchange = function() {
            e = Lr(t)
        }
        ),
        n.on("report", function(n) {
            return N(N({}, n), {
                extra: N(N({}, n.extra || {}), {
                    network_type: e
                })
            })
        })
    }
      , Pr = function(n, t, e, r, o) {
        if (!t)
            return w;
        var i = t.sample_rate
          , u = t.include_users
          , a = t.sample_granularity
          , c = t.rules
          , t = t.r
          , t = void 0 === t ? Math.random() : t;
        if (S(u, n))
            return function(n) {
                return Ir(n, 1)
            }
            ;
        var f, s, l, d, p, v, h, m = "session" === a, g = Mr(m, i, e, t, r), y = (f = c,
        s = m,
        l = i,
        d = e,
        p = t,
        v = r,
        h = {},
        Object.keys(f).forEach(function(n) {
            var t = f[n]
              , e = t.enable
              , r = t.sample_rate
              , t = t.conditional_sample_rules;
            e ? (h[n] = {
                enable: e,
                sample_rate: r,
                effectiveSampleRate: r * l,
                hit: Mr(s, r, d, p, v)
            },
            t && (h[n].conditional_hit_rules = t.map(function(n) {
                var t = n.sample_rate
                  , n = n.filter;
                return {
                    sample_rate: t,
                    hit: Mr(s, t, d, p, v),
                    effectiveSampleRate: t * l,
                    filter: n
                }
            }))) : h[n] = {
                enable: e,
                hit: function() {
                    return !1
                },
                sample_rate: 0,
                effectiveSampleRate: 0
            }
        }),
        h);
        return function(n) {
            if (!g())
                return m && o[0](),
                !1;
            if (!(n.ev_type in y))
                return Ir(n, i);
            if (!y[n.ev_type].enable)
                return m && o[1](n.ev_type),
                !1;
            if (null !== (t = n.common) && void 0 !== t && t.sample_rate)
                return n;
            var t = y[n.ev_type]
              , e = t.conditional_hit_rules;
            if (e)
                for (var r = 0; r < e.length; r++)
                    if (Ar(n, e[r].filter))
                        return !!e[r].hit() && Ir(n, e[r].effectiveSampleRate);
            return t.hit() ? Ir(n, t.effectiveSampleRate) : (e && e.length || !m || o[1](n.ev_type),
            !1)
        }
    };
    function Hr(e) {
        var n, r, o, i, t, u, a, c, f, s = (o = (n = e).transport,
        i = e.endpoint,
        t = e.size,
        u = void 0 === t ? 10 : t,
        a = void 0 === (n = e.wait) ? 1e3 : n,
        c = [],
        f = 0,
        {
            getSize: function() {
                return u
            },
            getWait: function() {
                return a
            },
            setSize: function(n) {
                u = n
            },
            setWait: function(n) {
                a = n
            },
            getEndpoint: function() {
                return i
            },
            setEndpoint: function(n) {
                i = n
            },
            send: function(n) {
                c.push(n),
                c.length >= u && l.call(this),
                clearTimeout(f),
                f = setTimeout(l.bind(this), a)
            },
            flush: function() {
                clearTimeout(f),
                l.call(this)
            },
            getBatchData: function() {
                return c.length ? p(c) : ""
            },
            clear: function() {
                clearTimeout(f),
                c = []
            },
            fail: function(n) {
                r = n
            }
        });
        function l() {
            var t;
            c.length && (t = this.getBatchData(),
            o.post({
                url: i,
                data: t,
                fail: function(n) {
                    r && r(n, t)
                }
            }),
            c = [])
        }
        var d = s.send;
        return Rn(function() {
            var t, n;
            e.transport.useBeacon ? (t = Dr(),
            (n = s.getBatchData()) && (t.post(s.getEndpoint(), n),
            s.clear()),
            s.send = function(n) {
                t.post(s.getEndpoint(), p([n]))
            }
            ,
            jn(function() {
                s.send = d
            })) : s.flush()
        }),
        s
    }
    var Ur = "2.10.0"
      , Wr = "APM_PLUS_WEB"
      , Fr = "/settings/get/webpro.json"
      , Xr = "/monitor_web/collect"
      , zr = "APMPLUS"
      , Gr = [Xr, Fr, "/monitor_browser/collect"]
      , Jr = "session"
      , Yr = {
        sample_rate: 1,
        include_users: [],
        sample_granularity: Jr,
        rules: {}
    }
      , $r = 20;
    function Vr(n, t) {
        return n.plugins.filter(function(n) {
            return n.name === t && n.version === Ur
        })[0]
    }
    function Kr(n, t, e) {
        (e = void 0 === e ? yn(K()) : e) && e.plugins && (Vr(e, n) || e.plugins.push({
            name: n,
            version: Ur,
            apply: t
        }))
    }
    function Qr(r) {
        r.provide("reloadPlugin", function(n, t) {
            var e;
            r.destroyAgent.has(n) && r.destroyAgent.remove(n),
            void 0 !== t && r.set({
                plugins: N(N({}, r.config().plugins), ((e = {})[n] = t,
                e))
            }),
            r.config().plugins[n] && function(n, t, e) {
                void 0 === e && (e = yn(K()));
                if (e) {
                    e = Vr(e, t);
                    if (e)
                        try {
                            if (n.destroyAgent.has(t))
                                return;
                            e.apply(n)
                        } catch (n) {
                            R("[loader].applyPlugin failed", t, n)
                        }
                    else
                        R("[loader].applyPlugin not found", t)
                }
            }(r, n)
        })
    }
    var Zr = {
        build: function(n) {
            return {
                ev_type: n.ev_type,
                payload: n.payload,
                common: N(N({}, n.extra || {}), n.overrides || {})
            }
        }
    };
    function no(n) {
        var t, e = n.plugins || {};
        for (t in e)
            e[t] && !x(e[t]) && (e[t] = {});
        return N(N({}, n), {
            plugins: e
        })
    }
    function to(n) {
        return x(n) && "aid"in n
    }
    function eo(n) {
        return N({}, n)
    }
    function ro() {
        var n = K()
          , t = Q();
        if (n && t)
            return (null === (t = null === (t = null === (t = function() {
                if (!document)
                    return null;
                if (document.currentScript)
                    return document.currentScript;
                try {
                    throw new Error
                } catch (n) {
                    var t = 0
                      , e = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i.exec(n.stack)
                      , r = e && e[2] || !1
                      , o = e && e[3] || 0
                      , i = document.location.href.replace(document.location.hash, "")
                      , u = ""
                      , a = document.getElementsByTagName("script");
                    for (r === i && (e = document.documentElement.outerHTML,
                    o = new RegExp("(?:[^\\n]+?\\n){0," + (o - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),
                    u = e.replace(o, "$1").trim()); t < a.length; t++) {
                        if ("interactive" === a[t].readyState)
                            return a[t];
                        if (a[t].src === r)
                            return a[t];
                        if (r === i && a[t].innerHTML && a[t].innerHTML.trim() === u)
                            return a[t]
                    }
                    return null
                }
            }()) || void 0 === t ? void 0 : t.getAttribute("src")) || void 0 === t ? void 0 : t.match(/globalName=(.+)$/)) || void 0 === t ? void 0 : t[1]) || Wr
    }
    function oo(n, t) {
        void 0 === n && (n = 0);
        var e = {
            userId: I(),
            deviceId: I(),
            r: Math.random()
        };
        return t <= 0 ? e : (function(n, t) {
            try {
                var e = localStorage.getItem(n);
                if (!e || !kn() || "{" !== e[0])
                    return;
                In(n, JSON.parse(e), t)
            } catch (n) {}
        }(n = zr + n, t),
        Ln(n) || e)
    }
    var io = function(n, t) {
        return void 0 === t && (t = Xr),
        (n && 0 <= n.indexOf("//") ? "" : "https://") + n + t
    }
      , uo = I
      , ao = function(n) {
        try {
            var t = localStorage.getItem(n);
            return t ? JSON.parse(t) : null
        } catch (n) {
            return null
        }
    }
      , co = function(n, t) {
        try {
            localStorage.setItem(n, JSON.stringify(t))
        } catch (n) {}
    }
      , fo = function(n) {
        return zr + "__cache__server__config__" + String(n)
    }
      , so = function(t) {
        var c, f, s, l = t, d = {}, p = P, e = P;
        return {
            getConfig: function() {
                return l
            },
            setConfig: function(n) {
                function e() {
                    var n, t;
                    r.get({
                        withCredentials: !0,
                        url: (void 0 === t && (t = Fr),
                        ((n = o) && 0 <= n.indexOf("//") ? "" : "https://") + n + t + "?aid=" + i),
                        success: function(n) {
                            n = n.data || {};
                            !function(n, t) {
                                n = fo(n);
                                co(n, t)
                            }(i, n),
                            u(n)
                        },
                        fail: function() {
                            var n;
                            (a += 1) < 3 ? e() : (null == (n = function(n) {
                                n = fo(n);
                                return ao(n)
                            }(i)) || delete n.timestamp,
                            u(n || {
                                sample: {
                                    sample_rate: 0
                                }
                            }))
                        }
                    })
                }
                var r, o, i, u, a;
                return d = N(N({}, d), n || {}),
                v(),
                c || (c = n,
                l.useLocalConfig ? (s = {},
                p()) : f ? h() : (r = l.transport,
                o = l.domain,
                i = l.aid,
                u = function(n) {
                    f = n,
                    h()
                }
                ,
                a = 0,
                e())),
                l
            },
            onChange: function(n) {
                e = n
            },
            onReady: function(n) {
                p = function() {
                    !function() {
                        t.userId !== l.userId && (t.sample.r = Math.random(),
                        v());
                        !function(n) {
                            var t = n.aid
                              , e = n.userId
                              , r = n.deviceId
                              , o = n.sample
                              , n = n.storageExpires;
                            In(zr + t, {
                                userId: e,
                                deviceId: r,
                                r: o.r
                            }, Mn(n))
                        }(l)
                    }(),
                    n()
                }
                ,
                s && p()
            }
        };
        function v() {
            var n = N(N(N({}, t), s || {}), d);
            n.plugins = function() {
                for (var n = [], t = 0; t < arguments.length; t++)
                    n[t] = arguments[t];
                for (var e = {}, r = 0; r < n.length; )
                    e = m(e, n[r++]);
                return e
            }(t.plugins, (null == s ? void 0 : s.plugins) || {}, d.plugins || {}),
            n.sample = lo(lo(t.sample, null == s ? void 0 : s.sample), d.sample),
            l = n,
            e()
        }
        function h() {
            s = function(n) {
                if (!n)
                    return {};
                var t = n.sample
                  , e = n.timestamp
                  , r = n.status
                  , o = n.apdex;
                if (!t)
                    return {};
                var i = t.sample_rate
                  , u = t.sample_granularity
                  , n = t.include_users
                  , t = t.rules;
                return {
                    sample: {
                        include_users: n,
                        sample_rate: r && 4 === r ? 0 : i,
                        sample_granularity: void 0 === u ? Jr : u,
                        rules: (void 0 === t ? [] : t).reduce(function(n, t) {
                            var e = t.name
                              , r = t.enable
                              , o = t.sample_rate
                              , t = t.conditional_sample_rules;
                            return n[e] = {
                                enable: r,
                                sample_rate: o,
                                conditional_sample_rules: t
                            },
                            n
                        }, {})
                    },
                    apdex: o,
                    serverTimestamp: e
                }
            }(f),
            v(),
            p()
        }
    };
    function lo(r, o) {
        if (!r || !o)
            return r || o;
        var n = N(N({}, r), o);
        return n.include_users = b(b([], B(r.include_users || []), !1), B(o.include_users || []), !1),
        n.rules = b(b([], B(Object.keys(r.rules || {})), !1), B(Object.keys(o.rules || {})), !1).reduce(function(n, t) {
            var e;
            return t in n || (t in (r.rules || {}) && t in (o.rules || {}) ? (n[t] = N(N({}, r.rules[t]), o.rules[t]),
            n[t].conditional_sample_rules = b(b([], B(r.rules[t].conditional_sample_rules || []), !1), B(o.rules[t].conditional_sample_rules || []), !1)) : n[t] = (null === (e = r.rules) || void 0 === e ? void 0 : e[t]) || (null === (e = o.rules) || void 0 === e ? void 0 : e[t])),
            n
        }, {}),
        n
    }
    function po(n) {
        var t = (e = void 0 === n ? {} : n).createSender
          , n = e.builder
          , e = e.createDefaultConfig
          , r = function(n) {
            var e, r, t = n.builder, o = n.createSender, i = n.createDefaultConfig, u = n.createConfigManager, a = n.userConfigNormalizer, c = n.initConfigNormalizer, f = n.validateInitConfig, s = {};
            _.forEach(function(n) {
                return s[n] = []
            });
            var l = !1
              , d = !1
              , p = !1
              , v = []
              , h = []
              , m = U()
              , g = {
                getBuilder: function() {
                    return t
                },
                getSender: function() {
                    return e
                },
                getPreStartQueue: function() {
                    return v
                },
                init: function(n) {
                    if (l)
                        R("already inited");
                    else {
                        if (!(n && x(n) && f(n)))
                            throw new Error("invalid InitConfig, init failed");
                        var t = i(n);
                        if (!t)
                            throw new Error("defaultConfig missing");
                        n = c(n);
                        if ((r = u(t)).setConfig(n),
                        r.onChange(function() {
                            y("config")
                        }),
                        !(e = o(r.getConfig())))
                            throw new Error("sender missing");
                        y("init", l = !0)
                    }
                },
                set: function(n) {
                    l && n && x(n) && (y("beforeConfig", !1, n),
                    null != r && r.setConfig(n))
                },
                config: function(n) {
                    if (l)
                        return n && x(n) && (y("beforeConfig", !1, n),
                        null != r && r.setConfig(a(n))),
                        null == r ? void 0 : r.getConfig()
                },
                provide: function(n, t) {
                    S(h, n) ? R("cannot provide " + n + ", reserved") : (g[n] = t,
                    y("provide", !1, n))
                },
                start: function() {
                    var t = this;
                    l && (d || null != r && r.onReady(function() {
                        y("start", d = !0),
                        v.forEach(function(n) {
                            return t.build(n)
                        }),
                        v.length = 0
                    }))
                },
                report: function(n) {
                    n && (!(n = j(s.beforeReport)(n)) || (n = j(s.report)(n)) && (d ? this.build(n) : v.push(n)))
                },
                build: function(n) {
                    !d || (n = j(s.beforeBuild)(n)) && (!(n = t.build(n)) || (n = j(s.build)(n)) && this.send(n))
                },
                send: function(n) {
                    !d || (n = j(s.beforeSend)(n)) && (e.send(n),
                    y("send", !1, n))
                },
                destroy: function() {
                    m.clear(),
                    p = !0,
                    y("beforeDestroy", !(v.length = 0))
                },
                on: function(n, t) {
                    if ("init" === n && l || "start" === n && d || "beforeDestroy" === n && p)
                        try {
                            t()
                        } catch (n) {}
                    else
                        s[n] && s[n].push(t)
                },
                off: function(n, t) {
                    s[n] && (s[n] = T(s[n], t))
                },
                destroyAgent: m
            }
              , h = Object.keys(g);
            return g;
            function y(n, t) {
                void 0 === t && (t = !1);
                for (var e = [], r = 2; r < arguments.length; r++)
                    e[r - 2] = arguments[r];
                s[n].forEach(function(n) {
                    try {
                        n.apply(void 0, b([], B(e), !1))
                    } catch (n) {}
                }),
                t && (s[n].length = 0)
            }
        }({
            validateInitConfig: to,
            initConfigNormalizer: no,
            userConfigNormalizer: eo,
            createSender: void 0 === t ? function(n) {
                return Hr({
                    size: $r,
                    endpoint: io(n.domain),
                    transport: n.transport
                })
            }
            : t,
            builder: void 0 === n ? Zr : n,
            createDefaultConfig: void 0 === e ? To : e,
            createConfigManager: so
        });
        F(r);
        var o, i, u, e = yn(K());
        return o = r,
        e = e && e.subject,
        i = e || {},
        u = {},
        o.provide("setFilter", function(n, t) {
            u[n] || (u[n] = []),
            u[n].push(t)
        }),
        o.provide("initSubject", function(n) {
            var t = B(n, 2)
              , e = t[0]
              , n = t[1]
              , t = G(e)
              , t = !!t && u[t];
            return i[e] || (i[e] = D(n, function() {
                i[e] = void 0
            })),
            t ? $(o, [e, q(i[e], t)]) : i[e]
        }),
        o.provide("getSubject", function(n) {
            return i[n]
        }),
        o.provide("privateSubject", {}),
        xo(r),
        Eo(r),
        ho(r),
        Br(r),
        So(r),
        z(e = X(r, _n, function(n, t, e) {
            return wn(n, t)(function() {
                var n = B(e)
                  , t = n[0]
                  , n = n.slice(1);
                r[t].apply(r, b([], B(n), !1))
            })
        }), Kr),
        e
    }
    function vo(n) {
        var e, i, t, r, u, o = po(n = void 0 === n ? {} : n);
        return (e = o).on("start", function() {
            var n = e.config()
              , t = n.userId
              , n = n.sample
              , n = Pr(t, n, O, C, [function() {
                e.destroy()
            }
            , function(n) {
                e.destroyAgent.removeByEvType(n)
            }
            ]);
            e.on("build", n)
        }),
        i = o,
        r = go(t = void 0 === t ? mo : t),
        n = yo(t),
        u = bo(i, r, t),
        null !== (t = i.p) && void 0 !== t && t.a && "observe"in i.p.a && i.p.a.observe(function(n) {
            var t = B(n, 5);
            t[0];
            var e = t[1]
              , r = t[2]
              , o = t[3]
              , n = t[4]
              , t = i.config();
            wo(t, e) && u(e, r, o, n)
        }),
        i.on("init", function() {
            var n, o = i.config();
            null !== (n = i.p) && void 0 !== n && n.a.forEach(function(n) {
                var t = B(n, 5);
                t[0];
                var e = t[1]
                  , r = t[2]
                  , n = t[3]
                  , t = t[4];
                wo(o, e) && u(e, r, n, t)
            }),
            i.p && i.p.a && (i.p.a.length = 0),
            i.provide("precollect", function(n, t, e, r) {
                void 0 === e && (e = V()),
                void 0 === r && (r = location.href),
                wo(o, n) && u(n, t, e, r)
            })
        }),
        i.on("provide", _o(i, r, n)),
        kr(o),
        Object.keys(Ro).forEach(function(n) {
            Kr(n, Ro[n]),
            Ro[n](o)
        }),
        Qr(o),
        o.provide("create", vo),
        o
    }
    var ho = function(u) {
        u.on("report", function(n) {
            return t = n,
            e = u.config(),
            e = void 0 === (e = (n = e || {}).pid) ? "" : e,
            n = void 0 === (n = n.viewId) ? "" : n,
            n = {
                url: cn(),
                timestamp: Date.now(),
                pid: e,
                view_id: n
            },
            N(N({}, t), {
                extra: N(N({}, n), t.extra || {})
            });
            var t, e
        }),
        u.on("init", function() {
            var n = u.config()
              , r = n.pid
              , o = n.viewId
              , i = u.getPreStartQueue();
            i.forEach(function(n, t) {
                var e = n.extra || {};
                i[t] = N(N({}, n), {
                    extra: N(N({}, e), {
                        pid: e.pid || r,
                        view_id: e.view_id || o
                    })
                })
            })
        })
    }
      , mo = {
        sri: "reportSri",
        st: "reportResourceError",
        err: "captureException",
        reject: "captureException"
    }
      , go = function(n) {
        return Object.keys(n).reduce(function(n, t) {
            return n[t] = [],
            n
        }, {})
    }
      , yo = function(e) {
        return Object.keys(e).reduce(function(n, t) {
            return n[e[t]] ? n[e[t]].push(t) : n[e[t]] = [t],
            n
        }, {})
    }
      , bo = function(o, i, u) {
        return function(n, t, e, r) {
            void 0 === e && (e = V()),
            void 0 === r && (r = location.href);
            r = N(N({}, _n(o)), {
                url: r,
                timestamp: e
            });
            i[n] && (o[u[n]] ? wn(o, r)(function() {
                o[u[n]](t)
            }) : null !== (e = i[n]) && void 0 !== e && e.push([t, r]))
        }
    }
      , _o = function(r, o, n) {
        return function(e) {
            e in n && n[e].forEach(function(n) {
                var t;
                null !== (t = o[n]) && void 0 !== t && t.forEach(function(n) {
                    var n = B(n, 2)
                      , t = n[0]
                      , n = n[1];
                    wn(r, n)(function() {
                        r[e](t)
                    })
                }),
                o[n] = null
            })
        }
    }
      , wo = function(n, t) {
        return "err" === t ? !1 !== l(n, "plugins." + Zt + ".onerror", function(n, t) {
            return n[t]
        }) : "reject" !== t || !1 !== l(n, "plugins." + Zt + ".onunhandledrejection", function(n, t) {
            return n[t]
        })
    }
      , xo = function(e) {
        var r, o = !1;
        e.on("init", function() {
            r = (new Date).getTime(),
            e.on("config", function() {
                var n, t = null === (n = e.config()) || void 0 === n ? void 0 : n.serverTimestamp;
                isNaN(t) || Number(t) <= 0 || o || (o = !0,
                (n = (new Date).getTime()) - r < 700 && t && (n = t - (n + r) / 2,
                !isNaN(n) && (0 < n || n < -6e5) && e.set({
                    offset: n
                })))
            })
        })
    }
      , Eo = function(r) {
        r.on("beforeBuild", function(n) {
            return t = n,
            e = r.config(),
            (n = {}).aid = e.aid,
            n.user_id = e.userId,
            N(N({}, t), {
                extra: N(N({}, n), t.extra || {})
            });
            var t, e
        })
    }
      , So = function(c) {
        c.on("start", function() {
            var e, n = c.config(), t = n.deviceId, r = n.sessionId, o = n.release, i = n.env, u = n.offset, a = n.aid, n = n.token, a = {
                did: t,
                sid: r,
                release: o,
                env: i,
                sname: Wr,
                sversion: Ur,
                soffset: u || 0,
                biz_id: a,
                x_auth_token: n
            }, n = c.getSender();
            n.setEndpoint(n.getEndpoint() + (x(e = a) ? Object.keys(e).reduce(function(n, t) {
                return n += "&" + t + "=" + e[t]
            }, "").replace("&", "?") : ""))
        })
    }
      , To = function(n) {
        var t, e = Mn(n.storageExpires), n = oo(n.aid, e);
        return {
            aid: 0,
            pid: "",
            token: "",
            viewId: ve("_"),
            userId: n.userId,
            deviceId: n.deviceId,
            sessionId: uo(),
            storageExpires: e,
            domain: "apmplus.volces.com",
            plugins: {
                ajax: {
                    ignoreUrls: Gr
                },
                fetch: {
                    ignoreUrls: Gr
                },
                breadcrumb: {},
                pageview: {},
                jsError: {},
                resource: {},
                resourceError: {},
                performance: {},
                tti: {},
                fmp: {},
                blankScreen: !1
            },
            release: "",
            env: "production",
            sample: N(N({}, Yr), {
                r: n.r
            }),
            transport: (t = tn()) ? {
                useBeacon: !0,
                get: function(n) {
                    Nr("GET", n, t)
                },
                post: function(n) {
                    Nr("POST", n, t)
                }
            } : {
                get: P,
                post: P
            }
        }
    }
      , Ro = ((Oo = {})[we] = function(p) {
        p.on("init", function() {
            var e, n, t, r, o, i, u, a, c, f, s, l, d = null === (r = p.config()) || void 0 === r ? void 0 : r.plugins[we];
            e = p,
            (l = Cn(n = d, xe)) && Z() && (t = l.routeMode,
            i = l.apdex,
            c = e.report.bind(e),
            a = P,
            i && (r = [],
            n = (d = B(_e(e.report.bind(e), r, [Y(e, ae), Y(e, fe)], l), 4))[0],
            o = d[1],
            i = d[2],
            u = d[3],
            c = i,
            a = n,
            e.on("send", o),
            r.push(function() {
                return e.off("send", o)
            }),
            e.on("start", function() {
                u(e.config().apdex)
            }),
            W(e, we, Zn, r)),
            f = B(be(c, c = [], he(t) ? [] : [e.initSubject(de), e.initSubject(pe)], N(N({}, l), {
                initPid: null === (l = e.config()) || void 0 === l ? void 0 : l.pid,
                onPidUpdate: function(n) {
                    var t = ve(n);
                    a(n, t),
                    e.set({
                        pid: n,
                        viewId: t,
                        actionId: void 0
                    })
                }
            })), 1)[0],
            $(e, [mn, gn(e)], -1),
            s = function() {
                f(e.config().pid)
            }
            ,
            e.on("config", s),
            c.push(function() {
                return e.off("config", s)
            }),
            W(e, we, Qn, c),
            e.provide("sendPageview", f))
        })
    }
    ,
    Oo[yt] = function(o) {
        o.on("init", function() {
            var n, t, e, a, c, f, s, l, d, r = gt(o, yt, bt);
            r && (n = [],
            e = null === (t = o.config()) || void 0 === t ? void 0 : t.domain,
            (r = N(N({}, r), {
                setContextAtReq: function() {
                    return pn(o, !0)
                },
                setTraceHeader: Dn(r.trace, "apmplus.app_id=" + (null === (t = o.config()) || void 0 === t ? void 0 : t.aid) + ",apmplus.origin=web,apmplus.client_domain=" + ("string" == typeof e && 0 <= e.indexOf("//") ? "" : "https://") + e)
            })).autoWrap && (t = n,
            e = [Y(o, [Pn, Fn(XMLHttpRequest && XMLHttpRequest.prototype)]), function() {
                return Y(o, Kn)
            }
            ],
            a = r,
            r = B(e, 2),
            e = r[0],
            c = r[1],
            f = a.setTraceHeader,
            s = a.ignoreUrls,
            l = a.setContextAtReq,
            d = a.extractUrl,
            t.push(e[0](function(n) {
                var t = B(n, 4);
                t[0];
                n = t[1];
                t[2];
                var e = t[3];
                if (!n)
                    return P;
                var r = un(n);
                if (g(s, r))
                    return P;
                f && f(r, function(n, t) {
                    return e.setRequestHeader(n, t)
                });
                var o = l()
                  , i = void 0
                  , u = c()[0](function(n) {
                    r !== n.name || i || (i = n)
                });
                return function(n) {
                    var t = mt(n, a);
                    setTimeout(function() {
                        i && (t.response.timing = i),
                        ht(t, d),
                        o && o({
                            ev_type: tt,
                            payload: t
                        }),
                        u()
                    }, 100)
                }
            }))),
            W(o, yt, tt, n))
        })
    }
    ,
    Oo[Dt] = function(o) {
        o.on("init", function() {
            var n, t, e, f, s, l, d, p, v, h, m, r = gt(o, Dt, Nt);
            r && (n = [],
            e = null === (t = o.config()) || void 0 === t ? void 0 : t.domain,
            (r = N(N({}, r), {
                setContextAtReq: function() {
                    return pn(o, !0)
                },
                setTraceHeader: Dn(r.trace, "apmplus.app_id=" + (null === (t = o.config()) || void 0 === t ? void 0 : t.aid) + ",apmplus.origin=web,apmplus.client_domain=" + ("string" == typeof e && 0 <= e.indexOf("//") ? "" : "https://") + e)
            })).autoWrap && (t = n,
            e = [Y(o, Xn), function() {
                return Y(o, Kn)
            }
            ],
            f = r,
            r = B(e, 2),
            e = r[0],
            s = r[1],
            l = f.setTraceHeader,
            d = f.ignoreUrls,
            p = f.setContextAtReq,
            v = f.extractUrl,
            h = window.Headers,
            (m = window.Request) && h && t.push(e[0](function(n) {
                var n = B(n, 2)
                  , r = n[0]
                  , o = n[1]
                  , t = un(r instanceof m ? r.url : r);
                if (!Mt(t) || g(d, t))
                    return P;
                l && l(t, function(n, t) {
                    return qt(n, t, r, o, m, h)
                });
                var i = p()
                  , u = V()
                  , a = void 0
                  , c = s()[0](function(n) {
                    t !== n.name || a || (a = n)
                });
                return function(n) {
                    var t = At(r, o, n, m, h, f, u)
                      , e = vt(function(n) {
                        a && (n.response.timing = a),
                        ht(n, v),
                        i && i({
                            ev_type: tt,
                            payload: n
                        }),
                        c()
                    });
                    setTimeout(function() {
                        e(t)
                    }, 1e3)
                }
            }))),
            W(o, Dt, tt, n))
        })
    }
    ,
    Oo[nr] = function(e) {
        e.on("init", function() {
            var n, t;
            gt(e, nr, {}) && (t = [],
            Ze(pn(n = e), t, [Y(n, [Pn, Fn(XMLHttpRequest && XMLHttpRequest.prototype)]), Y(n, Xn), Y(n, Vn), Y(n, Kn), $(n, [vn, hn(n)])], n.pp),
            W(n, nr, it, t))
        })
    }
    ,
    Oo[or] = function(r) {
        r.on("init", function() {
            var n, t, e = gt(r, or, ir);
            e && (n = r,
            t = [],
            "SSR" === (e = void 0 === (e = e) ? ir : e).renderType ? Ve(Ye, or, pn(n), t, [Y(n, le), function() {
                return Y(n, ae)
            }
            , function() {
                return Y(n, fe)
            }
            ]) : rr(pn(n), t, [Y(n, ce), $(n, [vn, hn(n)])]),
            W(n, or, it, t))
        })
    }
    ,
    Oo[jt] = function(u) {
        u.on("init", function() {
            var n, t, e, r, o, i = null === (o = u.config()) || void 0 === o ? void 0 : o.plugins[jt];
            n = u,
            (o = Cn(t = i, kt)) && (o = (t = B(Rt(i = [], [Y(n, Et), Y(n, Tt)], o), 2))[0],
            e = t[1],
            n.on("report", r = function(n) {
                return n.ev_type === tt && e({
                    type: tt,
                    category: n.payload.api,
                    message: "",
                    data: {
                        method: n.payload.request.method,
                        url: n.payload.request.url,
                        status_code: String(n.payload.response.status)
                    },
                    timestamp: n.payload.request.timestamp
                }),
                n
            }
            ),
            i.push(function() {
                n.off("report", r)
            }),
            W(n, jt, nt, i),
            n.provide("getBreadcrumbs", o),
            n.provide("addBreadcrumb", e))
        })
    }
    ,
    Oo[Zt] = function(t) {
        t.on("init", function() {
            var n = null === (n = t.config()) || void 0 === n ? void 0 : n.plugins[Zt];
            !function(t, n) {
                window.removeEventListener("error", t.pcErr, !0),
                window.removeEventListener("unhandledrejection", t.pcRej, !0);
                var e = Cn(n, ne);
                e && (e = Qt(function(n) {
                    t.getBreadcrumbs && (n.payload.breadcrumbs = t.getBreadcrumbs()),
                    t.report(n)
                }, n = [], [Y(t, Vt), Y(t, Kt), function() {
                    return Y(t, $t)
                }
                ], e),
                W(t, Zt, nt, n),
                t.provide("captureException", e))
            }(t, n)
        })
    }
    ,
    Oo[jr] = function(p) {
        p.on("init", function() {
            var n = p.pp || Rr;
            null !== (f = n.observer) && void 0 !== f && f.disconnect();
            var e, t, r, o, i, u, a, c, f, s, l, d = gt(p, jr, {});
            d && (e = function() {
                return Y(p, le)
            }
            ,
            t = function() {
                return Y(p, ae)
            }
            ,
            r = function() {
                return Y(p, fe)
            }
            ,
            o = Y(p, ce),
            i = Y(p, Vn),
            u = void 0,
            $(p, [mn, gn(p)], -1)[0](function(n) {
                u = n
            })(),
            a = function(n) {
                n = n.ev_type === it && (n.payload.name === cr[0] || n.payload.name === sr[0]) || n.ev_type === at ? n : N(N({}, n), {
                    overrides: u
                });
                p.report(n)
            }
            ,
            c = function() {
                return $(p, [vn, hn(p)])
            }
            ,
            [Ke, Qe, ar, sr, cr].forEach(function(n) {
                !1 !== d[n[0]] && (n[1](a, n = [], [e(), t, r, c]),
                W(p, jr, it, n))
            }),
            [dr, pr].forEach(function(n) {
                var t;
                !1 !== d[n[0]] && (n[1](a, t = [], [o, e, r(), i]),
                n = n[0] === lr ? at : "timing" === n[0] ? ut : it,
                W(p, jr, n, t))
            }),
            f = (s = B(Me(p.report.bind(p)), 2))[0],
            s = s[1],
            p.provide("performanceInit", f),
            p.provide("performanceSend", s),
            n.entries.length = 0,
            l = function(n) {
                var t = N(N(N({}, qe), n), {
                    isCustom: !0
                })
                  , n = Bn(l);
                n && Object.assign(t, {
                    stacks: n
                }),
                p.report(Ne(t))
            }
            ,
            p.provide("sendCustomPerfMetric", l))
        })
    }
    ,
    Oo[Ce] = function(e) {
        e.on("init", function() {
            var n, t = gt(e, Ce, Le);
            t && (n = [],
            t = function(e, n, t, r) {
                var o = B(t, 1)[0]
                  , i = K();
                if (i) {
                    var u = r.ignoreUrls
                      , t = r.includeUrls
                      , a = r.dedupe
                      , c = r.gatherPath
                      , f = v(t)
                      , s = v(u)
                      , l = B(bn(nn()), 5)[4]
                      , d = void 0
                      , p = function(n) {
                        var t = location && location.href;
                        t && n.url === t || f && !f.test(n.url) || s && s.test(n.url) || n.url && (a && n.url === d || (d = n.url,
                        (n = Oe(n, l)) && e({
                            ev_type: et,
                            payload: n
                        })))
                    };
                    return n.push(o[0](function(n) {
                        n = n || i.event;
                        !n || (n = ke(n, c)) && p(n)
                    })),
                    p
                }
            }(e.report.bind(e), n, [Y(e, Vt)], t),
            W(e, Ce, et, n),
            t && e.provide("reportResourceError", t))
        })
    }
    ,
    Oo[Te] = function(r) {
        r.on("init", function() {
            var n, t, e = null === (t = r.config()) || void 0 === t ? void 0 : t.plugins[Te];
            n = r,
            (e = Cn(t = e, Re)) && (t = [],
            Se(n.report.bind(n), t, [Y(n, ce), function() {
                return Y(n, Kn)
            }
            ], e),
            W(n, Te, rt, t))
        })
    }
    ,
    Oo[Tr] = function(u, a) {
        u.on("init", function() {
            var n, t, e, r, o = {
                autoDetect: !0,
                threshold: 1.5,
                screenshot: !0,
                ssUrl: "https://apm.volccdn.com/mars-web/apmplus/web/html2canvas.min.js",
                mask: !1,
                partialShot: !0,
                quality: .1,
                initDetTime: 8e3,
                runDetTime: 4e3
            }, i = a ? Cn(a, o) : gt(u, Tr, o);
            i && (n = u,
            t = i,
            o = Q(),
            i = K(),
            o && i && (i = [],
            t = B(Sr(n.report.bind(n), i, [Y(n, le), function() {
                return Y(n, se)
            }
            , function() {
                return Y(n, Vn)
            }
            , function() {
                return Y(n, Kn)
            }
            , Y(n, fe)], t), 2),
            e = t[0],
            t = t[1],
            n.on("report", r = function(n) {
                return e(n),
                n
            }
            ),
            i.push(function() {
                n.off("report", r)
            }),
            W(n, Tr, ct, i),
            n.provide("detectBlankScreen", t)))
        })
    }
    ,
    Oo)
      , jo = vo()
      , ko = function() {
        var n = K()
          , t = ro();
        if (n && t)
            return n[t]
    }();
    ko && ["p", "pp", "pcErr", "pcRej"].forEach(function(n) {
        jo.provide(n, ko[n])
    });
    var Oo, Co, Lo, Io, Mo = K(), qo = ro();
    Mo && qo && (Oo = (null == (Oo = Mo[qo]) ? void 0 : Oo.q) || [],
    Mo[qo] = jo,
    Oo.forEach(function(n) {
        var t, e;
        e = n,
        n = N(N({}, _n(t = jo)), {
            url: e.pop(),
            timestamp: e.pop()
        }),
        wn(t, n)(function() {
            t.apply(void 0, b([], B(e), !1))
        })
    }),
    Oo.length = 0,
    jo.p && ("observe"in jo.p.a && console.warn("global precollect queue already updated"),
    jo.p.a = (Lo = jo.p.a,
    Io = [],
    Lo.observe = function(n) {
        Io.push(n)
    }
    ,
    Lo.push = function() {
        for (var n, t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        return t.forEach(function(t) {
            Io.forEach(function(n) {
                return n(t)
            })
        }),
        (n = [].push).call.apply(n, b([Lo], B(t), !1))
    }
    ,
    Lo),
    (Co = jo.precollect) && jo.provide("precollect", function() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        return jo.p.a.push(b(["precollect"], B(n), !1)),
        Co.apply(void 0, b([], B(n), !1))
    })))
}();
