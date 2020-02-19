!function (t) {
    "use strict";

    function e(t) {
        if (!b(t)) return mr;
        y(t.objectMaxDepth) && (mr.objectMaxDepth = n(t.objectMaxDepth) ? t.objectMaxDepth : NaN), y(t.urlErrorParamsEnabled) && D(t.urlErrorParamsEnabled) && (mr.urlErrorParamsEnabled = t.urlErrorParamsEnabled)
    }

    function n(t) {
        return C(t) && 0 < t
    }

    function r(t, e) {
        return e = e || Error, function () {
            var n, r = arguments[0];
            for (n = "[" + (t ? t + ":" : "") + r + "] http://errors.angularjs.org/1.7.8/" + (t ? t + "/" : "") + r, r = 1; r < arguments.length; r++) {
                n = n + (1 == r ? "?" : "&") + "p" + (r - 1) + "=";
                var i, o = encodeURIComponent;
                i = arguments[r], i = "function" == typeof i ? i.toString().replace(/ \{[\s\S]*$/, "") : void 0 === i ? "undefined" : "string" != typeof i ? JSON.stringify(i) : i, n += o(i)
            }
            return new e(n)
        }
    }

    function i(t) {
        if (null == t || M(t)) return !1;
        if (S(t) || x(t) || pr && t instanceof pr) return !0;
        var e = "length" in Object(t) && t.length;
        return C(e) && (0 <= e && e - 1 in t || "function" == typeof t.item)
    }

    function o(t, e, n) {
        var r, a;
        if (t) if (A(t)) for (r in t) "prototype" !== r && "length" !== r && "name" !== r && t.hasOwnProperty(r) && e.call(n, t[r], r, t); else if (S(t) || i(t)) {
            var s = "object" != typeof t;
            for (r = 0, a = t.length; r < a; r++) (s || r in t) && e.call(n, t[r], r, t)
        } else if (t.forEach && t.forEach !== o) t.forEach(e, n, t); else if (w(t)) for (r in t) e.call(n, t[r], r, t); else if ("function" == typeof t.hasOwnProperty) for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t); else for (r in t) gr.call(t, r) && e.call(n, t[r], r, t);
        return t
    }

    function a(t, e, n) {
        for (var r = Object.keys(t).sort(), i = 0; i < r.length; i++) e.call(n, t[r[i]], r[i]);
        return r
    }

    function s(t) {
        return function (e, n) {
            t(n, e)
        }
    }

    function u() {
        return ++Or
    }

    function c(t, e, n) {
        for (var r = t.$$hashKey, i = 0, o = e.length; i < o; ++i) {
            var a = e[i];
            if (b(a) || A(a)) for (var s = Object.keys(a), u = 0, l = s.length; u < l; u++) {
                var f = s[u], h = a[f];
                n && b(h) ? k(h) ? t[f] = new Date(h.valueOf()) : O(h) ? t[f] = new RegExp(h) : h.nodeName ? t[f] = h.cloneNode(!0) : N(h) ? t[f] = h.clone() : (b(t[f]) || (t[f] = S(h) ? [] : {}), c(t[f], [h], !0)) : t[f] = h
            }
        }
        return r ? t.$$hashKey = r : delete t.$$hashKey, t
    }

    function l(t) {
        return c(t, wr.call(arguments, 1), !1)
    }

    function f(t) {
        return c(t, wr.call(arguments, 1), !0)
    }

    function h(t) {
        return parseInt(t, 10)
    }

    function p(t, e) {
        return l(Object.create(t), e)
    }

    function d() {
    }

    function $(t) {
        return t
    }

    function m(t) {
        return function () {
            return t
        }
    }

    function v(t) {
        return A(t.toString) && t.toString !== kr
    }

    function g(t) {
        return void 0 === t
    }

    function y(t) {
        return void 0 !== t
    }

    function b(t) {
        return null !== t && "object" == typeof t
    }

    function w(t) {
        return null !== t && "object" == typeof t && !Sr(t)
    }

    function x(t) {
        return "string" == typeof t
    }

    function C(t) {
        return "number" == typeof t
    }

    function k(t) {
        return "[object Date]" === kr.call(t)
    }

    function S(t) {
        return Array.isArray(t) || t instanceof Array
    }

    function E(t) {
        switch (kr.call(t)) {
            case"[object Error]":
            case"[object Exception]":
            case"[object DOMException]":
                return !0;
            default:
                return t instanceof Error
        }
    }

    function A(t) {
        return "function" == typeof t
    }

    function O(t) {
        return "[object RegExp]" === kr.call(t)
    }

    function M(t) {
        return t && t.window === t
    }

    function T(t) {
        return t && t.$evalAsync && t.$watch
    }

    function D(t) {
        return "boolean" == typeof t
    }

    function V(t) {
        return t && C(t.length) && Tr.test(kr.call(t))
    }

    function N(t) {
        return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
    }

    function j(t) {
        var e = {};
        t = t.split(",");
        var n;
        for (n = 0; n < t.length; n++) e[t[n]] = !0;
        return e
    }

    function P(t) {
        return yr(t.nodeName || t[0] && t[0].nodeName)
    }

    function I(t, e) {
        var n = t.indexOf(e);
        return 0 <= n && t.splice(n, 1), n
    }

    function R(t, e, r) {
        function i(t, e, n) {
            if (0 > --n) return "...";
            var r, i = e.$$hashKey;
            if (S(t)) {
                r = 0;
                for (var o = t.length; r < o; r++) e.push(a(t[r], n))
            } else if (w(t)) for (r in t) e[r] = a(t[r], n); else if (t && "function" == typeof t.hasOwnProperty) for (r in t) t.hasOwnProperty(r) && (e[r] = a(t[r], n)); else for (r in t) gr.call(t, r) && (e[r] = a(t[r], n));
            return i ? e.$$hashKey = i : delete e.$$hashKey, e
        }

        function a(t, e) {
            if (!b(t)) return t;
            var n = u.indexOf(t);
            if (-1 !== n) return c[n];
            if (M(t) || T(t)) throw Er("cpws");
            var n = !1, r = s(t);
            return void 0 === r && (r = S(t) ? [] : Object.create(Sr(t)), n = !0), u.push(t), c.push(r), n ? i(t, r, e) : r
        }

        function s(t) {
            switch (kr.call(t)) {
                case"[object Int8Array]":
                case"[object Int16Array]":
                case"[object Int32Array]":
                case"[object Float32Array]":
                case"[object Float64Array]":
                case"[object Uint8Array]":
                case"[object Uint8ClampedArray]":
                case"[object Uint16Array]":
                case"[object Uint32Array]":
                    return new t.constructor(a(t.buffer), t.byteOffset, t.length);
                case"[object ArrayBuffer]":
                    if (!t.slice) {
                        var e = new ArrayBuffer(t.byteLength);
                        return new Uint8Array(e).set(new Uint8Array(t)), e
                    }
                    return t.slice(0);
                case"[object Boolean]":
                case"[object Number]":
                case"[object String]":
                case"[object Date]":
                    return new t.constructor(t.valueOf());
                case"[object RegExp]":
                    return e = new RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), e.lastIndex = t.lastIndex, e;
                case"[object Blob]":
                    return new t.constructor([t], {type: t.type})
            }
            if (A(t.cloneNode)) return t.cloneNode(!0)
        }

        var u = [], c = [];
        if (r = n(r) ? r : NaN, e) {
            if (V(e) || "[object ArrayBuffer]" === kr.call(e)) throw Er("cpta");
            if (t === e) throw Er("cpi");
            return S(e) ? e.length = 0 : o(e, function (t, n) {
                "$$hashKey" !== n && delete e[n]
            }), u.push(t), c.push(e), i(t, e, r)
        }
        return a(t, r)
    }

    function U(t, e) {
        return t === e || t !== t && e !== e
    }

    function L(t, e) {
        if (t === e) return !0;
        if (null === t || null === e) return !1;
        if (t !== t && e !== e) return !0;
        var n, r = typeof t;
        if (r === typeof e && "object" === r) {
            if (!S(t)) {
                if (k(t)) return !!k(e) && U(t.getTime(), e.getTime());
                if (O(t)) return !!O(e) && t.toString() === e.toString();
                if (T(t) || T(e) || M(t) || M(e) || S(e) || k(e) || O(e)) return !1;
                r = ft();
                for (n in t) if ("$" !== n.charAt(0) && !A(t[n])) {
                    if (!L(t[n], e[n])) return !1;
                    r[n] = !0
                }
                for (n in e) if (!(n in r) && "$" !== n.charAt(0) && y(e[n]) && !A(e[n])) return !1;
                return !0
            }
            if (!S(e)) return !1;
            if ((r = t.length) === e.length) {
                for (n = 0; n < r; n++) if (!L(t[n], e[n])) return !1;
                return !0
            }
        }
        return !1
    }

    function F(t, e, n) {
        return t.concat(wr.call(e, n))
    }

    function q(t, e) {
        var n = 2 < arguments.length ? wr.call(arguments, 2) : [];
        return !A(e) || e instanceof RegExp ? e : n.length ? function () {
            return arguments.length ? e.apply(t, F(n, arguments, 0)) : e.apply(t, n)
        } : function () {
            return arguments.length ? e.apply(t, arguments) : e.call(t)
        }
    }

    function _(e, n) {
        var r = n;
        return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? r = void 0 : M(n) ? r = "$WINDOW" : n && t.document === n ? r = "$DOCUMENT" : T(n) && (r = "$SCOPE"), r
    }

    function H(t, e) {
        if (!g(t)) return C(e) || (e = e ? 2 : null), JSON.stringify(t, _, e)
    }

    function B(t) {
        return x(t) ? JSON.parse(t) : t
    }

    function z(t, e) {
        t = t.replace(Pr, "");
        var n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
        return Mr(n) ? e : n
    }

    function W(t, e) {
        return t = new Date(t.getTime()), t.setMinutes(t.getMinutes() + e), t
    }

    function G(t, e, n) {
        n = n ? -1 : 1;
        var r = t.getTimezoneOffset();
        return e = z(e, r), W(t, n * (e - r))
    }

    function K(t) {
        t = pr(t).clone().empty();
        var e = pr("<div></div>").append(t).html();
        try {
            return t[0].nodeType === Fr ? yr(e) : e.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function (t, e) {
                return "<" + yr(e)
            })
        } catch (t) {
            return yr(e)
        }
    }

    function J(t) {
        try {
            return decodeURIComponent(t)
        } catch (t) {
        }
    }

    function Z(t) {
        var e = {};
        return o((t || "").split("&"), function (t) {
            var n, r, i;
            t && (r = t = t.replace(/\+/g, "%20"), n = t.indexOf("="), -1 !== n && (r = t.substring(0, n), i = t.substring(n + 1)), r = J(r), y(r) && (i = !y(i) || J(i), gr.call(e, r) ? S(e[r]) ? e[r].push(i) : e[r] = [e[r], i] : e[r] = i))
        }), e
    }

    function Y(t) {
        var e = [];
        return o(t, function (t, n) {
            S(t) ? o(t, function (t) {
                e.push(X(n, !0) + (!0 === t ? "" : "=" + X(t, !0)))
            }) : e.push(X(n, !0) + (!0 === t ? "" : "=" + X(t, !0)))
        }), e.length ? e.join("&") : ""
    }

    function Q(t) {
        return X(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function X(t, e) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, e ? "%20" : "+")
    }

    function tt(t, e) {
        var n, r, i = Ir.length;
        for (r = 0; r < i; ++r) if (n = Ir[r] + e, x(n = t.getAttribute(n))) return n;
        return null
    }

    function et(e, n) {
        var r, i, a = {};
        o(Ir, function (t) {
            t += "app", !r && e.hasAttribute && e.hasAttribute(t) && (r = e, i = e.getAttribute(t))
        }), o(Ir, function (t) {
            t += "app";
            var n;
            !r && (n = e.querySelector("[" + t.replace(":", "\\:") + "]")) && (r = n, i = n.getAttribute(t))
        }), r && (Rr ? (a.strictDi = null !== tt(r, "strict-di"), n(r, i ? [i] : [], a)) : t.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))
    }

    function nt(e, n, r) {
        b(r) || (r = {}), r = l({strictDi: !1}, r);
        var i = function () {
            if (e = pr(e), e.injector()) {
                var i = e[0] === t.document ? "document" : K(e);
                throw Er("btstrpd", i.replace(/</, "&lt;").replace(/>/, "&gt;"))
            }
            return n = n || [], n.unshift(["$provide", function (t) {
                t.value("$rootElement", e)
            }]), r.debugInfoEnabled && n.push(["$compileProvider", function (t) {
                t.debugInfoEnabled(!0)
            }]), n.unshift("ng"), i = Kt(n, r.strictDi), i.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (t, e, n, r) {
                t.$apply(function () {
                    e.data("$injector", r), n(e)(t)
                })
            }]), i
        }, a = /^NG_ENABLE_DEBUG_INFO!/, s = /^NG_DEFER_BOOTSTRAP!/;
        if (t && a.test(t.name) && (r.debugInfoEnabled = !0, t.name = t.name.replace(a, "")), t && !s.test(t.name)) return i();
        t.name = t.name.replace(s, ""), Ar.resumeBootstrap = function (t) {
            return o(t, function (t) {
                n.push(t)
            }), i()
        }, A(Ar.resumeDeferredBootstrap) && Ar.resumeDeferredBootstrap()
    }

    function rt() {
        t.name = "NG_ENABLE_DEBUG_INFO!" + t.name, t.location.reload()
    }

    function it(t) {
        if (!(t = Ar.element(t).injector())) throw Er("test");
        return t.get("$$testability")
    }

    function ot(t, e) {
        return e = e || "_", t.replace(Ur, function (t, n) {
            return (n ? e : "") + t.toLowerCase()
        })
    }

    function at(t, e, n) {
        if (!t) throw Er("areq", e || "?", n || "required");
        return t
    }

    function st(t, e, n) {
        return n && S(t) && (t = t[t.length - 1]), at(A(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
    }

    function ut(t, e) {
        if ("hasOwnProperty" === t) throw Er("badname", e)
    }

    function ct(t, e, n) {
        if (!e) return t;
        e = e.split(".");
        for (var r, i = t, o = e.length, a = 0; a < o; a++) r = e[a], t && (t = (i = t)[r]);
        return !n && A(t) ? q(i, t) : t
    }

    function lt(t) {
        for (var e, n = t[0], r = t[t.length - 1], i = 1; n !== r && (n = n.nextSibling); i++) (e || t[i] !== n) && (e || (e = pr(wr.call(t, 0, i))), e.push(n));
        return e || t
    }

    function ft() {
        return Object.create(null)
    }

    function ht(t) {
        if (null == t) return "";
        switch (typeof t) {
            case"string":
                break;
            case"number":
                t = "" + t;
                break;
            default:
                t = !v(t) || S(t) || k(t) ? H(t) : t.toString()
        }
        return t
    }

    function pt(t) {
        function e(t, e, n) {
            return t[e] || (t[e] = n())
        }

        var n = r("$injector"), i = r("ng");
        return t = e(t, "angular", Object), t.$$minErr = t.$$minErr || r, e(t, "module", function () {
            var t = {};
            return function (r, o, a) {
                var s = {};
                if ("hasOwnProperty" === r) throw i("badname", "module");
                return o && t.hasOwnProperty(r) && (t[r] = null), e(t, r, function () {
                    function t(t, e, n, r) {
                        return r || (r = u), function () {
                            return r[n || "push"]([t, e, arguments]), h
                        }
                    }

                    function e(t, e, n) {
                        return n || (n = u), function (i, o) {
                            return o && A(o) && (o.$$moduleName = r), n.push([t, e, arguments]), h
                        }
                    }

                    if (!o) throw n("nomod", r);
                    var u = [], c = [], l = [], f = t("$injector", "invoke", "push", c), h = {
                        _invokeQueue: u,
                        _configBlocks: c,
                        _runBlocks: l,
                        info: function (t) {
                            if (y(t)) {
                                if (!b(t)) throw i("aobj", "value");
                                return s = t, this
                            }
                            return s
                        },
                        requires: o,
                        name: r,
                        provider: e("$provide", "provider"),
                        factory: e("$provide", "factory"),
                        service: e("$provide", "service"),
                        value: t("$provide", "value"),
                        constant: t("$provide", "constant", "unshift"),
                        decorator: e("$provide", "decorator", c),
                        animation: e("$animateProvider", "register"),
                        filter: e("$filterProvider", "register"),
                        controller: e("$controllerProvider", "register"),
                        directive: e("$compileProvider", "directive"),
                        component: e("$compileProvider", "component"),
                        config: f,
                        run: function (t) {
                            return l.push(t), this
                        }
                    };
                    return a && f(a), h
                })
            }
        })
    }

    function dt(t, e) {
        if (S(t)) {
            e = e || [];
            for (var n = 0, r = t.length; n < r; n++) e[n] = t[n]
        } else if (b(t)) for (n in e = e || {}, t) "$" === n.charAt(0) && "$" === n.charAt(1) || (e[n] = t[n]);
        return e || t
    }

    function $t(t, e) {
        var r = [];
        return n(e) && (t = Ar.copy(t, null, e)), JSON.stringify(t, function (t, e) {
            if (e = _(t, e), b(e)) {
                if (0 <= r.indexOf(e)) return "...";
                r.push(e)
            }
            return e
        })
    }

    function mt(t, e) {
        return e.toUpperCase()
    }

    function vt(t) {
        return t.replace(Br, mt)
    }

    function gt(t) {
        return 1 === (t = t.nodeType) || !t || 9 === t
    }

    function yt(t, e) {
        var n, r, i = e.createDocumentFragment(), a = [];
        if (Jr.test(t)) {
            for (n = i.appendChild(e.createElement("div")), r = (Zr.exec(t) || ["", ""])[1].toLowerCase(), r = Qr[r] || Qr._default, n.innerHTML = r[1] + t.replace(Yr, "<$1></$2>") + r[2], r = r[0]; r--;) n = n.lastChild;
            a = F(a, n.childNodes), n = i.firstChild, n.textContent = ""
        } else a.push(e.createTextNode(t));
        return i.textContent = "", i.innerHTML = "", o(a, function (t) {
            i.appendChild(t)
        }), i
    }

    function bt(e) {
        if (e instanceof bt) return e;
        var n;
        if (x(e) && (e = Dr(e), n = !0), !(this instanceof bt)) {
            if (n && "<" !== e.charAt(0)) throw Gr("nosel");
            return new bt(e)
        }
        if (n) {
            n = t.document;
            var r;
            e = (r = Kr.exec(e)) ? [n.createElement(r[1])] : (r = yt(e, n)) ? r.childNodes : [], Vt(this, e)
        } else A(e) ? Ut(e) : Vt(this, e)
    }

    function wt(t) {
        return t.cloneNode(!0)
    }

    function xt(t, e) {
        !e && gt(t) && pr.cleanData([t]), t.querySelectorAll && pr.cleanData(t.querySelectorAll("*"))
    }

    function Ct(t) {
        for (var e in t) return !1;
        return !0
    }

    function kt(t) {
        var e = t.ng339, n = e && _r[e], r = n && n.events, n = n && n.data;
        n && !Ct(n) || r && !Ct(r) || (delete _r[e], t.ng339 = void 0)
    }

    function St(t, e, n, r) {
        if (y(r)) throw Gr("offargs");
        var i = (r = At(t)) && r.events, a = r && r.handle;
        if (a) {
            if (e) {
                var s = function (e) {
                    var r = i[e];
                    y(n) && I(r || [], n), y(n) && r && 0 < r.length || (t.removeEventListener(e, a), delete i[e])
                };
                o(e.split(" "), function (t) {
                    s(t), Wr[t] && s(Wr[t])
                })
            } else for (e in i) "$destroy" !== e && t.removeEventListener(e, a), delete i[e];
            kt(t)
        }
    }

    function Et(t, e) {
        var n = t.ng339;
        (n = n && _r[n]) && (e ? delete n.data[e] : n.data = {}, kt(t))
    }

    function At(t, e) {
        var n = t.ng339, n = n && _r[n];
        return e && !n && (t.ng339 = n = ++Hr, n = _r[n] = {events: {}, data: {}, handle: void 0}), n
    }

    function Ot(t, e, n) {
        if (gt(t)) {
            var r, i = y(n), o = !i && e && !b(e), a = !e;
            if (t = (t = At(t, !o)) && t.data, i) t[vt(e)] = n; else {
                if (a) return t;
                if (o) return t && t[vt(e)];
                for (r in e) t[vt(r)] = e[r]
            }
        }
    }

    function Mt(t, e) {
        return !!t.getAttribute && -1 < (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ")
    }

    function Tt(t, e) {
        if (e && t.setAttribute) {
            var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "), r = n;
            o(e.split(" "), function (t) {
                t = Dr(t), r = r.replace(" " + t + " ", " ")
            }), r !== n && t.setAttribute("class", Dr(r))
        }
    }

    function Dt(t, e) {
        if (e && t.setAttribute) {
            var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "), r = n;
            o(e.split(" "), function (t) {
                t = Dr(t), -1 === r.indexOf(" " + t + " ") && (r += t + " ")
            }), r !== n && t.setAttribute("class", Dr(r))
        }
    }

    function Vt(t, e) {
        if (e) if (e.nodeType) t[t.length++] = e; else {
            var n = e.length;
            if ("number" == typeof n && e.window !== e) {
                if (n) for (var r = 0; r < n; r++) t[t.length++] = e[r]
            } else t[t.length++] = e
        }
    }

    function Nt(t, e) {
        return jt(t, "$" + (e || "ngController") + "Controller")
    }

    function jt(t, e, n) {
        for (9 === t.nodeType && (t = t.documentElement), e = S(e) ? e : [e]; t;) {
            for (var r = 0, i = e.length; r < i; r++) if (y(n = pr.data(t, e[r]))) return n;
            t = t.parentNode || 11 === t.nodeType && t.host
        }
    }

    function Pt(t) {
        for (xt(t, !0); t.firstChild;) t.removeChild(t.firstChild)
    }

    function It(t, e) {
        e || xt(t);
        var n = t.parentNode;
        n && n.removeChild(t)
    }

    function Rt(e, n) {
        n = n || t, "complete" === n.document.readyState ? n.setTimeout(e) : pr(n).on("load", e)
    }

    function Ut(e) {
        function n() {
            t.document.removeEventListener("DOMContentLoaded", n), t.removeEventListener("load", n), e()
        }

        "complete" === t.document.readyState ? t.setTimeout(e) : (t.document.addEventListener("DOMContentLoaded", n), t.addEventListener("load", n))
    }

    function Lt(t, e) {
        var n = ei[e.toLowerCase()];
        return n && ni[P(t)] && n
    }

    function Ft(t, e) {
        var n = function (n, r) {
            n.isDefaultPrevented = function () {
                return n.defaultPrevented
            };
            var i = e[r || n.type], o = i ? i.length : 0;
            if (o) {
                if (g(n.immediatePropagationStopped)) {
                    var a = n.stopImmediatePropagation;
                    n.stopImmediatePropagation = function () {
                        n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
                    }
                }
                n.isImmediatePropagationStopped = function () {
                    return !0 === n.immediatePropagationStopped
                };
                var s = i.specialHandlerWrapper || qt;
                1 < o && (i = dt(i));
                for (var u = 0; u < o; u++) n.isImmediatePropagationStopped() || s(t, n, i[u])
            }
        };
        return n.elem = t, n
    }

    function qt(t, e, n) {
        n.call(t, e)
    }

    function _t(t, e, n) {
        var r = e.relatedTarget;
        r && (r === t || Xr.call(t, r)) || n.call(t, e)
    }

    function Ht() {
        this.$get = function () {
            return l(bt, {
                hasClass: function (t, e) {
                    return t.attr && (t = t[0]), Mt(t, e)
                }, addClass: function (t, e) {
                    return t.attr && (t = t[0]), Dt(t, e)
                }, removeClass: function (t, e) {
                    return t.attr && (t = t[0]), Tt(t, e)
                }
            })
        }
    }

    function Bt(t, e) {
        var n = t && t.$$hashKey;
        return n ? ("function" == typeof n && (n = t.$$hashKey()), n) : (n = typeof t, n = "function" === n || "object" === n && null !== t ? t.$$hashKey = n + ":" + (e || u)() : n + ":" + t)
    }

    function zt() {
        this._keys = [], this._values = [], this._lastKey = NaN, this._lastIndex = -1
    }

    function Wt(t) {
        return t = Function.prototype.toString.call(t).replace(fi, ""), t.match(si) || t.match(ui)
    }

    function Gt(t) {
        return (t = Wt(t)) ? "function(" + (t[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Kt(t, e) {
        function n(t) {
            return function (e, n) {
                if (!b(e)) return t(e, n);
                o(e, s(t))
            }
        }

        function r(t, e) {
            if (ut(t, "service"), (A(e) || S(e)) && (e = d.instantiate(e)), !e.$get) throw hi("pget", t);
            return p[t + "Provider"] = e
        }

        function i(t, e) {
            return function () {
                var n = y.invoke(e, this);
                if (g(n)) throw hi("undef", t);
                return n
            }
        }

        function a(t, e, n) {
            return r(t, {$get: !1 !== n ? i(t, e) : e})
        }

        function u(t) {
            at(g(t) || S(t), "modulesToLoad", "not an array");
            var e, n = [];
            return o(t, function (t) {
                function r(t) {
                    var e, n;
                    for (e = 0, n = t.length; e < n; e++) {
                        var r = t[e], i = d.get(r[0]);
                        i[r[1]].apply(i, r[2])
                    }
                }

                if (!h.get(t)) {
                    h.set(t, !0);
                    try {
                        x(t) ? (e = $r(t), y.modules[t] = e, n = n.concat(u(e.requires)).concat(e._runBlocks), r(e._invokeQueue), r(e._configBlocks)) : A(t) ? n.push(d.invoke(t)) : S(t) ? n.push(d.invoke(t)) : st(t, "module")
                    } catch (e) {
                        throw S(t) && (t = t[t.length - 1]), e.message && e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), hi("modulerr", t, e.stack || e.message || e)
                    }
                }
            }), n
        }

        function c(t, n) {
            function r(e, r) {
                if (t.hasOwnProperty(e)) {
                    if (t[e] === l) throw hi("cdep", e + " <- " + f.join(" <- "));
                    return t[e]
                }
                try {
                    return f.unshift(e), t[e] = l, t[e] = n(e, r), t[e]
                } catch (n) {
                    throw t[e] === l && delete t[e], n
                } finally {
                    f.shift()
                }
            }

            function i(t, n, i) {
                var o = [];
                t = Kt.$$annotate(t, e, i);
                for (var a = 0, s = t.length; a < s; a++) {
                    var u = t[a];
                    if ("string" != typeof u) throw hi("itkn", u);
                    o.push(n && n.hasOwnProperty(u) ? n[u] : r(u, i))
                }
                return o
            }

            return {
                invoke: function (t, e, n, r) {
                    if ("string" == typeof n && (r = n, n = null), n = i(t, n, r), S(t) && (t = t[t.length - 1]), r = t, hr || "function" != typeof r) r = !1; else {
                        var o = r.$$ngIsClass;
                        D(o) || (o = r.$$ngIsClass = /^class\b/.test(Function.prototype.toString.call(r))), r = o
                    }
                    return r ? (n.unshift(null), new (Function.prototype.bind.apply(t, n))) : t.apply(e, n)
                }, instantiate: function (t, e, n) {
                    var r = S(t) ? t[t.length - 1] : t;
                    return t = i(t, e, n), t.unshift(null), new (Function.prototype.bind.apply(r, t))
                }, get: r, annotate: Kt.$$annotate, has: function (e) {
                    return p.hasOwnProperty(e + "Provider") || t.hasOwnProperty(e)
                }
            }
        }

        e = !0 === e;
        var l = {}, f = [], h = new oi, p = {
            $provide: {
                provider: n(r), factory: n(a), service: n(function (t, e) {
                    return a(t, ["$injector", function (t) {
                        return t.instantiate(e)
                    }])
                }), value: n(function (t, e) {
                    return a(t, m(e), !1)
                }), constant: n(function (t, e) {
                    ut(t, "constant"), p[t] = e, $[t] = e
                }), decorator: function (t, e) {
                    var n = d.get(t + "Provider"), r = n.$get;
                    n.$get = function () {
                        var t = y.invoke(r, n);
                        return y.invoke(e, null, {$delegate: t})
                    }
                }
            }
        }, d = p.$injector = c(p, function (t, e) {
            throw Ar.isString(e) && f.push(e), hi("unpr", f.join(" <- "))
        }), $ = {}, v = c($, function (t, e) {
            var n = d.get(t + "Provider", e);
            return y.invoke(n.$get, n, void 0, t)
        }), y = v;
        p.$injectorProvider = {$get: m(v)}, y.modules = d.modules = ft();
        var w = u(t), y = v.get("$injector");
        return y.strictDi = e, o(w, function (t) {
            t && y.invoke(t)
        }), y.loadNewModules = function (t) {
            o(u(t), function (t) {
                t && y.invoke(t)
            })
        }, y
    }

    function Jt() {
        var t = !0;
        this.disableAutoScrolling = function () {
            t = !1
        }, this.$get = ["$window", "$location", "$rootScope", function (e, n, r) {
            function i(t) {
                var e = null;
                return Array.prototype.some.call(t, function (t) {
                    if ("a" === P(t)) return e = t, !0
                }), e
            }

            function o(t) {
                if (t) {
                    t.scrollIntoView();
                    var n;
                    n = a.yOffset, A(n) ? n = n() : N(n) ? (n = n[0], n = "fixed" !== e.getComputedStyle(n).position ? 0 : n.getBoundingClientRect().bottom) : C(n) || (n = 0), n && (t = t.getBoundingClientRect().top, e.scrollBy(0, t - n))
                } else e.scrollTo(0, 0)
            }

            function a(t) {
                t = x(t) ? t : C(t) ? t.toString() : n.hash();
                var e;
                t ? (e = s.getElementById(t)) ? o(e) : (e = i(s.getElementsByName(t))) ? o(e) : "top" === t && o(null) : o(null)
            }

            var s = e.document;
            return t && r.$watch(function () {
                return n.hash()
            }, function (t, e) {
                t === e && "" === t || Rt(function () {
                    r.$evalAsync(a)
                })
            }), a
        }]
    }

    function Zt(t, e) {
        return t || e ? t ? e ? (S(t) && (t = t.join(" ")), S(e) && (e = e.join(" ")), t + " " + e) : t : e : ""
    }

    function Yt(t) {
        x(t) && (t = t.split(" "));
        var e = ft();
        return o(t, function (t) {
            t.length && (e[t] = !0)
        }), e
    }

    function Qt(t) {
        return b(t) ? t : {}
    }

    function Xt(t, e, n, r, i) {
        function a() {
            x = null, u()
        }

        function s() {
            v = C(), v = g(v) ? null : v, L(v, E) && (v = E), y = E = v
        }

        function u() {
            var t = y;
            s(), b === c.url() && t === v || (b = c.url(), y = v, o(k, function (t) {
                t(c.url(), v)
            }))
        }

        var c = this, l = t.location, f = t.history, h = t.setTimeout, p = t.clearTimeout, $ = {}, m = i(n);
        c.isMock = !1, c.$$completeOutstandingRequest = m.completeTask, c.$$incOutstandingRequestCount = m.incTaskCount, c.notifyWhenNoOutstandingRequests = m.notifyWhenNoPendingTasks;
        var v, y, b = l.href, w = e.find("base"), x = null, C = r.history ? function () {
            try {
                return f.state
            } catch (t) {
            }
        } : d;
        s(), c.url = function (e, n, i) {
            if (g(i) && (i = null), l !== t.location && (l = t.location), f !== t.history && (f = t.history), e) {
                var o = y === i;
                if (e = $n(e).href, b === e && (!r.history || o)) return c;
                var a = b && De(b) === De(e);
                return b = e, y = i, !r.history || a && o ? (a || (x = e), n ? l.replace(e) : a ? (n = l, i = e, o = i.indexOf("#"), i = -1 === o ? "" : i.substr(o), n.hash = i) : l.href = e, l.href !== e && (x = e)) : (f[n ? "replaceState" : "pushState"](i, "", e), s()), x && (x = e), c
            }
            return (x || l.href).replace(/#$/, "")
        }, c.state = function () {
            return v
        };
        var k = [], S = !1, E = null;
        c.onUrlChange = function (e) {
            return S || (r.history && pr(t).on("popstate", a), pr(t).on("hashchange", a), S = !0), k.push(e), e
        }, c.$$applicationDestroyed = function () {
            pr(t).off("hashchange popstate", a)
        }, c.$$checkUrlChange = u, c.baseHref = function () {
            var t = w.attr("href");
            return t ? t.replace(/^(https?:)?\/\/[^\/]*/, "") : ""
        }, c.defer = function (t, e, n) {
            var r;
            return e = e || 0, n = n || m.DEFAULT_TASK_TYPE, m.incTaskCount(n), r = h(function () {
                delete $[r], m.completeTask(t, n)
            }, e), $[r] = n, r
        }, c.defer.cancel = function (t) {
            if ($.hasOwnProperty(t)) {
                var e = $[t];
                return delete $[t], p(t), m.completeTask(d, e), !0
            }
            return !1
        }
    }

    function te() {
        this.$get = ["$window", "$log", "$sniffer", "$document", "$$taskTrackerFactory", function (t, e, n, r, i) {
            return new Xt(t, r, e, n, i)
        }]
    }

    function ee() {
        this.$get = function () {
            function t(t, n) {
                function i(t) {
                    t !== h && (p ? p === t && (p = t.n) : p = t, o(t.n, t.p), o(t, h), h = t, h.n = null)
                }

                function o(t, e) {
                    t !== e && (t && (t.p = e), e && (e.n = t))
                }

                if (t in e) throw r("$cacheFactory")("iid", t);
                var a = 0, s = l({}, n, {id: t}), u = ft(), c = n && n.capacity || Number.MAX_VALUE, f = ft(), h = null,
                    p = null;
                return e[t] = {
                    put: function (t, e) {
                        if (!g(e)) {
                            if (c < Number.MAX_VALUE) {
                                i(f[t] || (f[t] = {key: t}))
                            }
                            return t in u || a++, u[t] = e, a > c && this.remove(p.key), e
                        }
                    }, get: function (t) {
                        if (c < Number.MAX_VALUE) {
                            var e = f[t];
                            if (!e) return;
                            i(e)
                        }
                        return u[t]
                    }, remove: function (t) {
                        if (c < Number.MAX_VALUE) {
                            var e = f[t];
                            if (!e) return;
                            e === h && (h = e.p), e === p && (p = e.n), o(e.n, e.p), delete f[t]
                        }
                        t in u && (delete u[t], a--)
                    }, removeAll: function () {
                        u = ft(), a = 0, f = ft(), h = p = null
                    }, destroy: function () {
                        f = s = u = null, delete e[t]
                    }, info: function () {
                        return l({}, s, {size: a})
                    }
                }
            }

            var e = {};
            return t.info = function () {
                var t = {};
                return o(e, function (e, n) {
                    t[n] = e.info()
                }), t
            }, t.get = function (t) {
                return e[t]
            }, t
        }
    }

    function ne() {
        this.$get = ["$cacheFactory", function (t) {
            return t("templates")
        }]
    }

    function re(e, n) {
        function r(t, e, n) {
            var r = /^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/, i = ft();
            return o(t, function (t, o) {
                if ((t = t.trim()) in C) i[o] = C[t]; else {
                    var a = t.match(r);
                    if (!a) throw bi("iscp", e, o, t, n ? "controller bindings definition" : "isolate scope definition");
                    i[o] = {
                        mode: a[1][0],
                        collection: "*" === a[2],
                        optional: "?" === a[3],
                        attrName: a[4] || o
                    }, a[4] && (C[t] = i[o])
                }
            }), i
        }

        function i(t) {
            var e = t.charAt(0);
            if (!e || e !== yr(e)) throw bi("baddir", t);
            if (t !== t.trim()) throw bi("baddir", t)
        }

        function a(t) {
            var e = t.require || t.controller && t.name;
            return !S(e) && b(e) && o(e, function (t, n) {
                var r = t.match(v);
                t.substring(r[0].length) || (e[n] = r[0] + n)
            }), e
        }

        var u = {}, c = /^\s*directive:\s*([\w-]+)\s+(.*)$/, f = /(([\w-]+)(?::([^;]+))?;?)/,
            h = j("ngSrc,ngSrcset,src,srcset"), v = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, w = /^(on[a-z]+|formaction)$/,
            C = ft();
        this.directive = function t(n, r) {
            return at(n, "name"), ut(n, "directive"), x(n) ? (i(n), at(r, "directiveFactory"), u.hasOwnProperty(n) || (u[n] = [], e.factory(n + "Directive", ["$injector", "$exceptionHandler", function (t, e) {
                var r = [];
                return o(u[n], function (i, o) {
                    try {
                        var s = t.invoke(i);
                        A(s) ? s = {compile: m(s)} : !s.compile && s.link && (s.compile = m(s.link)), s.priority = s.priority || 0, s.index = o, s.name = s.name || n, s.require = a(s);
                        var u = s, c = s.restrict;
                        if (c && (!x(c) || !/[EACM]/.test(c))) throw bi("badrestrict", c, n);
                        u.restrict = c || "EA", s.$$moduleName = i.$$moduleName, r.push(s)
                    } catch (t) {
                        e(t)
                    }
                }), r
            }])), u[n].push(r)) : o(n, s(t)), this
        }, this.component = function t(e, n) {
            function r(t) {
                function e(e) {
                    return A(e) || S(e) ? function (n, r) {
                        return t.invoke(e, this, {$element: n, $attrs: r})
                    } : e
                }

                var r = n.template || n.templateUrl ? n.template : "", a = {
                    controller: i,
                    controllerAs: ue(n.controller) || n.controllerAs || "$ctrl",
                    template: e(r),
                    templateUrl: e(n.templateUrl),
                    transclude: n.transclude,
                    scope: {},
                    bindToController: n.bindings || {},
                    restrict: "E",
                    require: n.require
                };
                return o(n, function (t, e) {
                    "$" === e.charAt(0) && (a[e] = t)
                }), a
            }

            if (!x(e)) return o(e, s(q(this, t))), this;
            var i = n.controller || function () {
            };
            return o(n, function (t, e) {
                "$" === e.charAt(0) && (r[e] = t, A(i) && (i[e] = t))
            }), r.$inject = ["$injector"], this.directive(e, r)
        }, this.aHrefSanitizationWhitelist = function (t) {
            return y(t) ? (n.aHrefSanitizationWhitelist(t), this) : n.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function (t) {
            return y(t) ? (n.imgSrcSanitizationWhitelist(t), this) : n.imgSrcSanitizationWhitelist()
        };
        var k = !0;
        this.debugInfoEnabled = function (t) {
            return y(t) ? (k = t, this) : k
        };
        var O = !1;
        this.strictComponentBindingsEnabled = function (t) {
            return y(t) ? (O = t, this) : O
        };
        var M = 10;
        this.onChangesTtl = function (t) {
            return arguments.length ? (M = t, this) : M
        };
        var V = !0;
        this.commentDirectivesEnabled = function (t) {
            return arguments.length ? (V = t, this) : V
        };
        var N = !0;
        this.cssClassDirectivesEnabled = function (t) {
            return arguments.length ? (N = t, this) : N
        };
        var R = ft();
        this.addPropertySecurityContext = function (t, e, n) {
            var r = t.toLowerCase() + "|" + e.toLowerCase();
            if (r in R && R[r] !== n) throw bi("ctxoverride", t, e, R[r], n);
            return R[r] = n, this
        }, function () {
            function t(t, e) {
                o(e, function (e) {
                    R[e.toLowerCase()] = t
                })
            }

            t(Zi.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), t(Zi.CSS, ["*|style"]), t(Zi.URL, "area|href area|ping a|href a|ping blockquote|cite body|background del|cite input|src ins|cite q|cite".split(" ")), t(Zi.MEDIA_URL, "audio|src img|src img|srcset source|src source|srcset track|src video|src video|poster".split(" ")), t(Zi.RESOURCE_URL, "*|formAction applet|code applet|codebase base|href embed|src frame|src form|action head|profile html|manifest iframe|src link|href media|src object|codebase object|data script|src".split(" "))
        }(), this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", function (e, n, i, a, s, m, y, C, j) {
            function F() {
                try {
                    if (!--Nt) throw Ot = void 0, bi("infchng", M);
                    y.$apply(function () {
                        for (var t = 0, e = Ot.length; t < e; ++t) try {
                            Ot[t]()
                        } catch (t) {
                            i(t)
                        }
                        Ot = void 0
                    })
                } finally {
                    Nt++
                }
            }

            function _(t, e) {
                if (!t) return t;
                if (!x(t)) throw bi("srcset", e, t.toString());
                for (var n = "", r = Dr(t), i = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, i = /\s/.test(r) ? i : /(,)/, r = r.split(i), i = Math.floor(r.length / 2), o = 0; o < i; o++) var a = 2 * o, n = n + C.getTrustedMediaUrl(Dr(r[a])), n = n + " " + Dr(r[a + 1]);
                return r = Dr(r[2 * o]).split(/\s/), n += C.getTrustedMediaUrl(Dr(r[0])), 2 === r.length && (n += " " + Dr(r[1])), n
            }

            function H(t, e) {
                if (e) {
                    var n, r, i, o = Object.keys(e);
                    for (n = 0, r = o.length; n < r; n++) i = o[n], this[i] = e[i]
                } else this.$attr = {};
                this.$$element = t
            }

            function B(t, e, n) {
                Tt.innerHTML = "<span " + e + ">", e = Tt.firstChild.attributes;
                var r = e[0];
                e.removeNamedItem(r.name), r.value = n, t.attributes.setNamedItem(r)
            }

            function z(t, e) {
                try {
                    t.addClass(e)
                } catch (t) {
                }
            }

            function W(t, e, n, r, i) {
                t instanceof pr || (t = pr(t));
                var o = G(t, e, t, n, r, i);
                W.$$addScopeClass(t);
                var a = null;
                return function (e, n, r) {
                    if (!t) throw bi("multilink");
                    at(e, "scope"), i && i.needsNewScope && (e = e.$parent.$new()), r = r || {};
                    var s = r.parentBoundTranscludeFn, u = r.transcludeControllers;
                    if (r = r.futureParentElement, s && s.$$boundTransclude && (s = s.$$boundTransclude), a || (a = (r = r && r[0]) && "foreignobject" !== P(r) && kr.call(r).match(/SVG/) ? "svg" : "html"), r = "html" !== a ? pr(mt(a, pr("<div></div>").append(t).html())) : n ? ti.clone.call(t) : t, u) for (var c in u) r.data("$" + c + "Controller", u[c].instance);
                    return W.$$addScopeInfo(r, e), n && n(r, e), o && o(e, r, r, s), n || (t = o = null), r
                }
            }

            function G(t, e, n, r, i, o) {
                function a(t, n, r, i) {
                    var o, a, s, u, c, l, p;
                    if (f) for (p = Array(n.length), u = 0; u < h.length; u += 3) o = h[u], p[o] = n[o]; else p = n;
                    for (u = 0, c = h.length; u < c;) a = p[h[u++]], n = h[u++], o = h[u++], n ? (n.scope ? (s = t.$new(), W.$$addScopeInfo(pr(a), s)) : s = t, l = n.transcludeOnThisElement ? Z(t, n.transclude, i) : !n.templateOnThisElement && i ? i : !i && e ? Z(t, e) : null, n(o, s, a, r, l)) : o && o(t, a.childNodes, void 0, i)
                }

                for (var s, u, c, l, f, h = [], p = S(t) || t instanceof pr, d = 0; d < t.length; d++) s = new H, 11 === hr && J(t, d, p), u = Y(t[d], [], s, 0 === d ? r : void 0, i), (o = u.length ? nt(u, t[d], s, e, n, null, [], [], o) : null) && o.scope && W.$$addScopeClass(s.$$element), s = o && o.terminal || !(c = t[d].childNodes) || !c.length ? null : G(c, o ? (o.transcludeOnThisElement || !o.templateOnThisElement) && o.transclude : e), (o || s) && (h.push(d, o, s), l = !0, f = f || o), o = null;
                return l ? a : null
            }

            function J(t, e, n) {
                var r, i = t[e], o = i.parentNode;
                if (i.nodeType === Fr) for (; (r = o ? i.nextSibling : t[e + 1]) && r.nodeType === Fr;) i.nodeValue += r.nodeValue, r.parentNode && r.parentNode.removeChild(r), n && r === t[e + 1] && t.splice(e + 1, 1)
            }

            function Z(t, e, n) {
                function r(r, i, o, a, s) {
                    return r || (r = t.$new(!1, s), r.$$transcluded = !0), e(r, i, {
                        parentBoundTranscludeFn: n,
                        transcludeControllers: o,
                        futureParentElement: a
                    })
                }

                var i, o = r.$$slots = ft();
                for (i in e.$$slots) o[i] = e.$$slots[i] ? Z(t, e.$$slots[i], n) : null;
                return r
            }

            function Y(t, e, n, r, o) {
                var a, u = n.$attr;
                switch (t.nodeType) {
                    case 1:
                        a = P(t), ut(e, oe(a), "E", r, o);
                        for (var c, l, h, p, d, $ = t.attributes, m = 0, v = $ && $.length; m < v; m++) {
                            var g, w = !1, C = !1, k = !1, S = !1, E = !1;
                            c = $[m], l = c.name, p = c.value, h = oe(l.toLowerCase()), (d = h.match(Rt)) ? (k = "Attr" === d[1], S = "Prop" === d[1], E = "On" === d[1], l = l.replace(xi, "").toLowerCase().substr(4 + d[1].length).replace(/_(.)/g, function (t, e) {
                                return e.toUpperCase()
                            })) : (g = h.match(Ut)) && ct(g[1]) && (w = l, C = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6)), S || E ? (n[h] = p, u[h] = c.name, S ? bt(t, e, h, l) : e.push(ir(s, y, i, h, l, !1))) : (h = oe(l.toLowerCase()), u[h] = l, !k && n.hasOwnProperty(h) || (n[h] = p, Lt(t, h) && (n[h] = !0)), xt(t, e, p, h, k), ut(e, h, "A", r, o, w, C))
                        }
                        if ("input" === a && "hidden" === t.getAttribute("type") && t.setAttribute("autocomplete", "off"), !Vt) break;
                        if (u = t.className, b(u) && (u = u.animVal), x(u) && "" !== u) for (; t = f.exec(u);) h = oe(t[2]), ut(e, h, "C", r, o) && (n[h] = Dr(t[3])), u = u.substr(t.index + t[0].length);
                        break;
                    case Fr:
                        $t(e, t.nodeValue);
                        break;
                    case 8:
                        if (!Dt) break;
                        Q(t, e, n, r, o)
                }
                return e.sort(pt), e
            }

            function Q(t, e, n, r, i) {
                try {
                    var o = c.exec(t.nodeValue);
                    if (o) {
                        var a = oe(o[1]);
                        ut(e, a, "M", r, i) && (n[a] = Dr(o[2]))
                    }
                } catch (t) {
                }
            }

            function X(t, e, n) {
                var r = [], i = 0;
                if (e && t.hasAttribute && t.hasAttribute(e)) do {
                    if (!t) throw bi("uterdir", e, n);
                    1 === t.nodeType && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), t = t.nextSibling
                } while (0 < i); else r.push(t);
                return pr(r)
            }

            function tt(t, e, n) {
                return function (r, i, o, a, s) {
                    return i = X(i[0], e, n), t(r, i, o, a, s)
                }
            }

            function et(t, e, n, r, i, o) {
                var a;
                return t ? W(e, n, r, i, o) : function () {
                    return a || (a = W(e, n, r, i, o), e = n = o = null), a.apply(this, arguments)
                }
            }

            function nt(e, n, r, a, s, u, c, f, h) {
                function p(t, e, n, r) {
                    t && (n && (t = tt(t, n, r)), t.require = $.require, t.directiveName = m, (E === $ || $.$$isolateScope) && (t = kt(t, {isolateScope: !0})), c.push(t)), e && (n && (e = tt(e, n, r)), e.require = $.require, e.directiveName = m, (E === $ || $.$$isolateScope) && (e = kt(e, {isolateScope: !0})), f.push(e))
                }

                function d(t, e, a, s, u) {
                    function h(t, e, n, r) {
                        var i;
                        if (T(t) || (r = n, n = e, e = t, t = void 0), N && (i = y), n || (n = N ? x.parent() : x), !r) return u(t, e, i, n, D);
                        var o = u.$$slots[r];
                        if (o) return o(t, e, i, n, D);
                        if (g(o)) throw bi("noslot", r, K(x))
                    }

                    var p, d, $, m, v, y, w, x;
                    n === a ? (s = r, x = r.$$element) : (x = pr(a), s = new H(x, r)), v = e, E ? m = e.$new(!0) : C && (v = e.$parent), u && (w = h, w.$$boundTransclude = u, w.isSlotFilled = function (t) {
                        return !!u.$$slots[t]
                    }), k && (y = it(x, s, w, k, m, e, E)), E && (W.$$addScopeInfo(x, m, !0, !(O && (O === E || O === E.$$originalDirective))), W.$$addScopeClass(x, !0), m.$$isolateBindings = E.$$isolateBindings, d = At(e, s, m, m.$$isolateBindings, E), d.removeWatches && m.$on("$destroy", d.removeWatches));
                    for (p in y) {
                        d = k[p], $ = y[p];
                        var M = d.$$bindings.bindToController;
                        $.instance = $(), x.data("$" + d.name + "Controller", $.instance), $.bindingInfo = At(v, s, $.instance, M, d)
                    }
                    for (o(k, function (t, e) {
                        var n = t.require;
                        t.bindToController && !S(n) && b(n) && l(y[e].instance, rt(e, n, x, y))
                    }), o(y, function (t) {
                        var e = t.instance;
                        if (A(e.$onChanges)) try {
                            e.$onChanges(t.bindingInfo.initialChanges)
                        } catch (t) {
                            i(t)
                        }
                        if (A(e.$onInit)) try {
                            e.$onInit()
                        } catch (t) {
                            i(t)
                        }
                        A(e.$doCheck) && (v.$watch(function () {
                            e.$doCheck()
                        }), e.$doCheck()), A(e.$onDestroy) && v.$on("$destroy", function () {
                            e.$onDestroy()
                        })
                    }), p = 0, d = c.length; p < d; p++) $ = c[p], St($, $.isolateScope ? m : e, x, s, $.require && rt($.directiveName, $.require, x, y), w);
                    var D = e
                    ;
                    for (E && (E.template || null === E.templateUrl) && (D = m), t && t(D, a.childNodes, void 0, u), p = f.length - 1; 0 <= p; p--) $ = f[p], St($, $.isolateScope ? m : e, x, s, $.require && rt($.directiveName, $.require, x, y), w);
                    o(y, function (t) {
                        t = t.instance, A(t.$postLink) && t.$postLink()
                    })
                }

                h = h || {};
                for (var $, m, v, y, w, x = -Number.MAX_VALUE, C = h.newScopeDirective, k = h.controllerDirectives, E = h.newIsolateScopeDirective, O = h.templateDirective, M = h.nonTlbTranscludeDirective, D = !1, V = !1, N = h.hasElementTranscludeDirective, j = r.$$element = pr(n), I = a, R = !1, U = !1, L = 0, F = e.length; L < F; L++) {
                    $ = e[L];
                    var _ = $.$$start, B = $.$$end;
                    if (_ && (j = X(n, _, B)), v = void 0, x > $.priority) break;
                    if ((w = $.scope) && ($.templateUrl || (b(w) ? (dt("new/isolated scope", E || C, $, j), E = $) : dt("new/isolated scope", E, $, j)), C = C || $), m = $.name, !R && ($.replace && ($.templateUrl || $.template) || $.transclude && !$.$$tlb)) {
                        for (w = L + 1; R = e[w++];) if (R.transclude && !R.$$tlb || R.replace && (R.templateUrl || R.template)) {
                            U = !0;
                            break
                        }
                        R = !0
                    }
                    if (!$.templateUrl && $.controller && (k = k || ft(), dt("'" + m + "' controller", k[m], $, j), k[m] = $), w = $.transclude) if (D = !0, $.$$tlb || (dt("transclusion", M, $, j), M = $), "element" === w) N = !0, x = $.priority, v = j, j = r.$$element = pr(W.$$createComment(m, r[m])), n = j[0], Ct(s, wr.call(v, 0), n), I = et(U, v, a, x, u && u.name, {nonTlbTranscludeDirective: M}); else {
                        var z = ft();
                        if (b(w)) {
                            v = t.document.createDocumentFragment();
                            var G = ft(), J = ft();
                            o(w, function (t, e) {
                                var n = "?" === t.charAt(0);
                                t = n ? t.substring(1) : t, G[t] = e, z[e] = null, J[e] = n
                            }), o(j.contents(), function (e) {
                                var n = G[oe(P(e))];
                                n ? (J[n] = !0, z[n] = z[n] || t.document.createDocumentFragment(), z[n].appendChild(e)) : v.appendChild(e)
                            }), o(J, function (t, e) {
                                if (!t) throw bi("reqslot", e)
                            });
                            for (var Z in z) z[Z] && (I = pr(z[Z].childNodes), z[Z] = et(U, I, a));
                            v = pr(v.childNodes)
                        } else v = pr(wt(n)).contents();
                        j.empty(), I = et(U, v, a, void 0, void 0, {needsNewScope: $.$$isolateScope || $.$$newScope}), I.$$slots = z
                    }
                    if ($.template) if (V = !0, dt("template", O, $, j), O = $, w = A($.template) ? $.template(j, r) : $.template, w = It(w), $.replace) {
                        if (u = $, v = Jr.test(w) ? se(mt($.templateNamespace, Dr(w))) : [], n = v[0], 1 !== v.length || 1 !== n.nodeType) throw bi("tplrt", m, "");
                        Ct(s, j, n), F = {$attr: {}}, w = Y(n, [], F);
                        var Q = e.splice(L + 1, e.length - (L + 1));
                        (E || C) && st(w, E, C), e = e.concat(w).concat(Q), lt(r, F), F = e.length
                    } else j.html(w);
                    if ($.templateUrl) V = !0, dt("template", O, $, j), O = $, $.replace && (u = $), d = ht(e.splice(L, e.length - L), j, r, s, D && I, c, f, {
                        controllerDirectives: k,
                        newScopeDirective: C !== $ && C,
                        newIsolateScopeDirective: E,
                        templateDirective: O,
                        nonTlbTranscludeDirective: M
                    }), F = e.length; else if ($.compile) try {
                        y = $.compile(j, r, I);
                        var nt = $.$$originalDirective || $;
                        A(y) ? p(null, q(nt, y), _, B) : y && p(q(nt, y.pre), q(nt, y.post), _, B)
                    } catch (t) {
                        i(t, K(j))
                    }
                    $.terminal && (d.terminal = !0, x = Math.max(x, $.priority))
                }
                return d.scope = C && !0 === C.scope, d.transcludeOnThisElement = D, d.templateOnThisElement = V, d.transclude = I, h.hasElementTranscludeDirective = N, d
            }

            function rt(t, e, n, r) {
                var i;
                if (x(e)) {
                    var a = e.match(v);
                    e = e.substring(a[0].length);
                    var s = a[1] || a[3], a = "?" === a[2];
                    if ("^^" === s ? n = n.parent() : i = (i = r && r[e]) && i.instance, !i) {
                        var u = "$" + e + "Controller";
                        i = "^^" === s && n[0] && 9 === n[0].nodeType ? null : s ? n.inheritedData(u) : n.data(u)
                    }
                    if (!i && !a) throw bi("ctreq", e, t)
                } else if (S(e)) for (i = [], s = 0, a = e.length; s < a; s++) i[s] = rt(t, e[s], n, r); else b(e) && (i = {}, o(e, function (e, o) {
                    i[o] = rt(t, e, n, r)
                }));
                return i || null
            }

            function it(t, e, n, r, i, o, a) {
                var s, u = ft();
                for (s in r) {
                    var c = r[s],
                        l = {$scope: c === a || c.$$isolateScope ? i : o, $element: t, $attrs: e, $transclude: n},
                        f = c.controller;
                    "@" === f && (f = e[c.name]), l = m(f, l, !0, c.controllerAs), u[c.name] = l, t.data("$" + c.name + "Controller", l.instance)
                }
                return u
            }

            function st(t, e, n) {
                for (var r = 0, i = t.length; r < i; r++) t[r] = p(t[r], {$$isolateScope: e, $$newScope: n})
            }

            function ut(t, n, i, o, a, s, c) {
                if (n === a) return null;
                var l = null;
                if (u.hasOwnProperty(n)) {
                    a = e.get(n + "Directive");
                    for (var f = 0, h = a.length; f < h; f++) if (n = a[f], (g(o) || o > n.priority) && -1 !== n.restrict.indexOf(i)) {
                        if (s && (n = p(n, {$$start: s, $$end: c})), !n.$$bindings) {
                            var d = l = n, $ = n.name, m = {isolateScope: null, bindToController: null};
                            if (b(d.scope) && (!0 === d.bindToController ? (m.bindToController = r(d.scope, $, !0), m.isolateScope = {}) : m.isolateScope = r(d.scope, $, !1)), b(d.bindToController) && (m.bindToController = r(d.bindToController, $, !0)), m.bindToController && !d.controller) throw bi("noctrl", $);
                            l = l.$$bindings = m, b(l.isolateScope) && (n.$$isolateBindings = l.isolateScope)
                        }
                        t.push(n), l = n
                    }
                }
                return l
            }

            function ct(t) {
                if (u.hasOwnProperty(t)) for (var n = e.get(t + "Directive"), r = 0, i = n.length; r < i; r++) if (t = n[r], t.multiElement) return !0;
                return !1
            }

            function lt(t, e) {
                var n = e.$attr, r = t.$attr;
                o(t, function (r, i) {
                    "$" !== i.charAt(0) && (e[i] && e[i] !== r && (r = r.length ? r + ("style" === i ? ";" : " ") + e[i] : e[i]), t.$set(i, r, !0, n[i]))
                }), o(e, function (e, i) {
                    t.hasOwnProperty(i) || "$" === i.charAt(0) || (t[i] = e, "class" !== i && "style" !== i && (r[i] = n[i]))
                })
            }

            function ht(t, e, n, r, s, u, c, l) {
                var f, h, d = [], $ = e[0], m = t.shift(),
                    v = p(m, {templateUrl: null, transclude: null, replace: null, $$originalDirective: m}),
                    g = A(m.templateUrl) ? m.templateUrl(e, n) : m.templateUrl, y = m.templateNamespace;
                return e.empty(), a(g).then(function (i) {
                    var a, p;
                    if (i = It(i), m.replace) {
                        if (i = Jr.test(i) ? se(mt(y, Dr(i))) : [], a = i[0], 1 !== i.length || 1 !== a.nodeType) throw bi("tplrt", m.name, g);
                        i = {$attr: {}}, Ct(r, e, a);
                        var w = Y(a, [], i);
                        b(m.scope) && st(w, !0), t = w.concat(t), lt(n, i)
                    } else a = $, e.html(i);
                    for (t.unshift(v), f = nt(t, a, n, s, e, m, u, c, l), o(r, function (t, n) {
                        t === a && (r[n] = e[0])
                    }), h = G(e[0].childNodes, s); d.length;) {
                        i = d.shift(), p = d.shift();
                        var x = d.shift(), C = d.shift(), w = e[0];
                        if (!i.$$destroyed) {
                            if (p !== $) {
                                var k = p.className;
                                l.hasElementTranscludeDirective && m.replace || (w = wt(a)), Ct(x, pr(p), w), z(pr(w), k)
                            }
                            p = f.transcludeOnThisElement ? Z(i, f.transclude, C) : C, f(h, i, w, r, p)
                        }
                    }
                    d = null
                }).catch(function (t) {
                    E(t) && i(t)
                }), function (t, e, n, r, i) {
                    t = i, e.$$destroyed || (d ? d.push(e, n, r, t) : (f.transcludeOnThisElement && (t = Z(e, f.transclude, i)), f(h, e, n, r, t)))
                }
            }

            function pt(t, e) {
                var n = e.priority - t.priority;
                return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
            }

            function dt(t, e, n, r) {
                function i(t) {
                    return t ? " (module: " + t + ")" : ""
                }

                if (e) throw bi("multidir", e.name, i(e.$$moduleName), n.name, i(n.$$moduleName), t, K(r))
            }

            function $t(t, e) {
                var r = n(e, !0);
                r && t.push({
                    priority: 0, compile: function (t) {
                        t = t.parent();
                        var e = !!t.length;
                        return e && W.$$addBindingClass(t), function (t, n) {
                            var i = n.parent();
                            e || W.$$addBindingClass(i), W.$$addBindingInfo(i, r.expressions), t.$watch(r, function (t) {
                                n[0].nodeValue = t
                            })
                        }
                    }
                })
            }

            function mt(e, n) {
                switch (e = yr(e || "html")) {
                    case"svg":
                    case"math":
                        var r = t.document.createElement("div");
                        return r.innerHTML = "<" + e + ">" + n + "</" + e + ">", r.childNodes[0].childNodes;
                    default:
                        return n
                }
            }

            function vt(t, e) {
                return "srcdoc" === e ? C.HTML : "src" === e || "ngSrc" === e ? -1 === ["img", "video", "audio", "source", "track"].indexOf(t) ? C.RESOURCE_URL : C.MEDIA_URL : "xlinkHref" === e ? "image" === t ? C.MEDIA_URL : "a" === t ? C.URL : C.RESOURCE_URL : "form" === t && "action" === e || "base" === t && "href" === e || "link" === t && "href" === e ? C.RESOURCE_URL : "a" !== t || "href" !== e && "ngHref" !== e ? void 0 : C.URL
            }

            function gt(t, e) {
                var n = e.toLowerCase();
                return R[t + "|" + n] || R["*|" + n]
            }

            function yt(t) {
                return _(C.valueOf(t), "ng-prop-srcset")
            }

            function bt(t, e, n, r) {
                if (w.test(r)) throw bi("nodomevents");
                t = P(t);
                var i = gt(t, r), o = $;
                "srcset" !== r || "img" !== t && "source" !== t ? i && (o = C.getTrusted.bind(C, i)) : o = yt, e.push({
                    priority: 100,
                    compile: function (t, e) {
                        var i = s(e[n]), a = s(e[n], function (t) {
                            return C.valueOf(t)
                        });
                        return {
                            pre: function (t, e) {
                                function n() {
                                    var n = i(t);
                                    e[0][r] = o(n)
                                }

                                n(), t.$watch(a, n)
                            }
                        }
                    }
                })
            }

            function xt(t, e, r, i, o) {
                var a = P(t), s = vt(a, i), u = h[i] || o, c = n(r, !o, s, u);
                if (c) {
                    if ("multiple" === i && "select" === a) throw bi("selmulti", K(t));
                    if (w.test(i)) throw bi("nodomevents");
                    e.push({
                        priority: 100, compile: function () {
                            return {
                                pre: function (t, e, o) {
                                    e = o.$$observers || (o.$$observers = ft());
                                    var a = o[i];
                                    a !== r && (c = a && n(a, !0, s, u), r = a), c && (o[i] = c(t), (e[i] || (e[i] = [])).$$inter = !0, (o.$$observers && o.$$observers[i].$$scope || t).$watch(c, function (t, e) {
                                        "class" === i && t !== e ? o.$updateClass(t, e) : o.$set(i, t)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function Ct(e, n, r) {
                var i, o, a = n[0], s = n.length, u = a.parentNode;
                if (e) for (i = 0, o = e.length; i < o; i++) if (e[i] === a) {
                    e[i++] = r, o = i + s - 1;
                    for (var c = e.length; i < c; i++, o++) o < c ? e[i] = e[o] : delete e[i];
                    e.length -= s - 1, e.context === a && (e.context = r);
                    break
                }
                for (u && u.replaceChild(r, a), e = t.document.createDocumentFragment(), i = 0; i < s; i++) e.appendChild(n[i]);
                for (pr.hasData(a) && (pr.data(r, pr.data(a)), pr(a).off("$destroy")), pr.cleanData(e.querySelectorAll("*")), i = 1; i < s; i++) delete n[i];
                n[0] = r, n.length = 1
            }

            function kt(t, e) {
                return l(function () {
                    return t.apply(null, arguments)
                }, t, e)
            }

            function St(t, e, n, r, o, a) {
                try {
                    t(e, n, r, o, a)
                } catch (t) {
                    i(t, K(n))
                }
            }

            function Et(t, e) {
                if (O) throw bi("missingattr", t, e)
            }

            function At(t, e, r, i, a) {
                function u(e, n, i) {
                    A(r.$onChanges) && !U(n, i) && (Ot || (t.$$postDigest(F), Ot = []), l || (l = {}, Ot.push(c)), l[e] && (i = l[e].previousValue), l[e] = new ie(i, n))
                }

                function c() {
                    r.$onChanges(l), l = void 0
                }

                var l, f = [], h = {};
                return o(i, function (i, o) {
                    var c, l, p, $, m = i.attrName, v = i.optional;
                    switch (i.mode) {
                        case"@":
                            v || gr.call(e, m) || (Et(m, a.name), r[o] = e[m] = void 0), v = e.$observe(m, function (t) {
                                (x(t) || D(t)) && (u(o, t, r[o]), r[o] = t)
                            }), e.$$observers[m].$$scope = t, c = e[m], x(c) ? r[o] = n(c)(t) : D(c) && (r[o] = c), h[o] = new ie(wi, r[o]), f.push(v);
                            break;
                        case"=":
                            if (!gr.call(e, m)) {
                                if (v) break;
                                Et(m, a.name), e[m] = void 0
                            }
                            if (v && !e[m]) break;
                            l = s(e[m]), $ = l.literal ? L : U, p = l.assign || function () {
                                throw c = r[o] = l(t), bi("nonassign", e[m], m, a.name)
                            }, c = r[o] = l(t), v = function (e) {
                                return $(e, r[o]) || ($(e, c) ? p(t, e = r[o]) : r[o] = e), c = e
                            }, v.$stateful = !0, v = i.collection ? t.$watchCollection(e[m], v) : t.$watch(s(e[m], v), null, l.literal), f.push(v);
                            break;
                        case"<":
                            if (!gr.call(e, m)) {
                                if (v) break;
                                Et(m, a.name), e[m] = void 0
                            }
                            if (v && !e[m]) break;
                            l = s(e[m]);
                            var g = l.literal, y = r[o] = l(t);
                            h[o] = new ie(wi, r[o]), v = t[i.collection ? "$watchCollection" : "$watch"](l, function (t, e) {
                                if (e === t) {
                                    if (e === y || g && L(e, y)) return;
                                    e = y
                                }
                                u(o, t, e), r[o] = t
                            }), f.push(v);
                            break;
                        case"&":
                            if (v || gr.call(e, m) || Et(m, a.name), (l = e.hasOwnProperty(m) ? s(e[m]) : d) === d && v) break;
                            r[o] = function (e) {
                                return l(t, e)
                            }
                    }
                }), {
                    initialChanges: h, removeWatches: f.length && function () {
                        for (var t = 0, e = f.length; t < e; ++t) f[t]()
                    }
                }
            }

            var Ot, Mt = /^\w/, Tt = t.document.createElement("div"), Dt = V, Vt = N, Nt = M;
            H.prototype = {
                $normalize: oe, $addClass: function (t) {
                    t && 0 < t.length && j.addClass(this.$$element, t)
                }, $removeClass: function (t) {
                    t && 0 < t.length && j.removeClass(this.$$element, t)
                }, $updateClass: function (t, e) {
                    var n = ae(t, e);
                    n && n.length && j.addClass(this.$$element, n), (n = ae(e, t)) && n.length && j.removeClass(this.$$element, n)
                }, $set: function (t, e, n, r) {
                    var a = Lt(this.$$element[0], t), s = ri[t], u = t;
                    a ? (this.$$element.prop(t, e), r = a) : s && (this[s] = e, u = s), this[t] = e, r ? this.$attr[t] = r : (r = this.$attr[t]) || (this.$attr[t] = r = ot(t, "-")), "img" === P(this.$$element) && "srcset" === t && (this[t] = e = _(e, "$set('srcset', value)")), !1 !== n && (null === e || g(e) ? this.$$element.removeAttr(r) : Mt.test(r) ? a && !1 === e ? this.$$element.removeAttr(r) : this.$$element.attr(r, e) : B(this.$$element[0], r, e)), (t = this.$$observers) && o(t[u], function (t) {
                        try {
                            t(e)
                        } catch (t) {
                            i(t)
                        }
                    })
                }, $observe: function (t, e) {
                    var n = this, r = n.$$observers || (n.$$observers = ft()), i = r[t] || (r[t] = []);
                    return i.push(e), y.$evalAsync(function () {
                        i.$$inter || !n.hasOwnProperty(t) || g(n[t]) || e(n[t])
                    }), function () {
                        I(i, e)
                    }
                }
            };
            var jt = n.startSymbol(), Pt = n.endSymbol(), It = "{{" === jt && "}}" === Pt ? $ : function (t) {
                return t.replace(/\{\{/g, jt).replace(/}}/g, Pt)
            }, Rt = /^ng(Attr|Prop|On)([A-Z].*)$/, Ut = /^(.+)Start$/;
            return W.$$addBindingInfo = k ? function (t, e) {
                var n = t.data("$binding") || [];
                S(e) ? n = n.concat(e) : n.push(e), t.data("$binding", n)
            } : d, W.$$addBindingClass = k ? function (t) {
                z(t, "ng-binding")
            } : d, W.$$addScopeInfo = k ? function (t, e, n, r) {
                t.data(n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", e)
            } : d, W.$$addScopeClass = k ? function (t, e) {
                z(t, e ? "ng-isolate-scope" : "ng-scope")
            } : d, W.$$createComment = function (e, n) {
                var r = "";
                return k && (r = " " + (e || "") + ": ", n && (r += n + " ")), t.document.createComment(r)
            }, W
        }]
    }

    function ie(t, e) {
        this.previousValue = t, this.currentValue = e
    }

    function oe(t) {
        return t.replace(xi, "").replace(Ci, function (t, e, n) {
            return n ? e.toUpperCase() : e
        })
    }

    function ae(t, e) {
        var n = "", r = t.split(/\s+/), i = e.split(/\s+/), o = 0;
        t:for (; o < r.length; o++) {
            for (var a = r[o], s = 0; s < i.length; s++) if (a === i[s]) continue t;
            n += (0 < n.length ? " " : "") + a
        }
        return n
    }

    function se(t) {
        t = pr(t);
        var e = t.length;
        if (1 >= e) return t;
        for (; e--;) {
            var n = t[e];
            (8 === n.nodeType || n.nodeType === Fr && "" === n.nodeValue.trim()) && xr.call(t, e, 1)
        }
        return t
    }

    function ue(t, e) {
        if (e && x(e)) return e;
        if (x(t)) {
            var n = Si.exec(t);
            if (n) return n[3]
        }
    }

    function ce() {
        var t = {};
        this.has = function (e) {
            return t.hasOwnProperty(e)
        }, this.register = function (e, n) {
            ut(e, "controller"), b(e) ? l(t, e) : t[e] = n
        }, this.$get = ["$injector", function (e) {
            function n(t, e, n, i) {
                if (!t || !b(t.$scope)) throw r("$controller")("noscp", i, e);
                t.$scope[e] = n
            }

            return function (r, i, o, a) {
                var s, u, c;
                if (o = !0 === o, a && x(a) && (c = a), x(r)) {
                    if (!(a = r.match(Si))) throw ki("ctrlfmt", r);
                    if (u = a[1], c = c || a[3], !(r = t.hasOwnProperty(u) ? t[u] : ct(i.$scope, u, !0))) throw ki("ctrlreg", u);
                    st(r, u, !0)
                }
                return o ? (o = (S(r) ? r[r.length - 1] : r).prototype, s = Object.create(o || null), c && n(i, c, s, u || r.name), l(function () {
                    var t = e.invoke(r, s, i, u);
                    return t !== s && (b(t) || A(t)) && (s = t, c && n(i, c, s, u || r.name)), s
                }, {instance: s, identifier: c})) : (s = e.instantiate(r, i, u), c && n(i, c, s, u || r.name), s)
            }
        }]
    }

    function le() {
        this.$get = ["$window", function (t) {
            return pr(t.document)
        }]
    }

    function fe() {
        this.$get = ["$document", "$rootScope", function (t, e) {
            function n() {
                i = r.hidden
            }

            var r = t[0], i = r && r.hidden;
            return t.on("visibilitychange", n), e.$on("$destroy", function () {
                t.off("visibilitychange", n)
            }), function () {
                return i
            }
        }]
    }

    function he() {
        this.$get = ["$log", function (t) {
            return function (e, n) {
                t.error.apply(t, arguments)
            }
        }]
    }

    function pe(t) {
        return b(t) ? k(t) ? t.toISOString() : H(t) : t
    }

    function de() {
        this.$get = function () {
            return function (t) {
                if (!t) return "";
                var e = [];
                return a(t, function (t, n) {
                    null === t || g(t) || A(t) || (S(t) ? o(t, function (t) {
                        e.push(X(n) + "=" + X(pe(t)))
                    }) : e.push(X(n) + "=" + X(pe(t))))
                }), e.join("&")
            }
        }
    }

    function $e() {
        this.$get = function () {
            return function (t) {
                function e(t, r, i) {
                    S(t) ? o(t, function (t, n) {
                        e(t, r + "[" + (b(t) ? n : "") + "]")
                    }) : b(t) && !k(t) ? a(t, function (t, n) {
                        e(t, r + (i ? "" : "[") + n + (i ? "" : "]"))
                    }) : (A(t) && (t = t()), n.push(X(r) + "=" + (null == t ? "" : X(pe(t)))))
                }

                if (!t) return "";
                var n = [];
                return e(t, "", !0), n.join("&")
            }
        }
    }

    function me(t, e) {
        if (x(t)) {
            var n = t.replace(Di, "").trim();
            if (n) {
                var r, i = e("Content-Type"), i = i && 0 === i.indexOf(Ai);
                if ((r = i) || (r = (r = n.match(Mi)) && Ti[r[0]].test(n)), r) try {
                    t = B(n)
                } catch (e) {
                    if (!i) return t;
                    throw Vi("baddata", t, e)
                }
            }
        }
        return t
    }

    function ve(t) {
        var e, n = ft();
        return x(t) ? o(t.split("\n"), function (t) {
            e = t.indexOf(":");
            var r = yr(Dr(t.substr(0, e)));
            t = Dr(t.substr(e + 1)), r && (n[r] = n[r] ? n[r] + ", " + t : t)
        }) : b(t) && o(t, function (t, e) {
            var r = yr(e), i = Dr(t);
            r && (n[r] = n[r] ? n[r] + ", " + i : i)
        }), n
    }

    function ge(t) {
        var e;
        return function (n) {
            return e || (e = ve(t)), n ? (n = e[yr(n)], void 0 === n && (n = null), n) : e
        }
    }

    function ye(t, e, n, r) {
        return A(r) ? r(t, e, n) : (o(r, function (r) {
            t = r(t, e, n)
        }), t)
    }

    function be() {
        var t = this.defaults = {
            transformResponse: [me],
            transformRequest: [function (t) {
                return b(t) && "[object File]" !== kr.call(t) && "[object Blob]" !== kr.call(t) && "[object FormData]" !== kr.call(t) ? H(t) : t
            }],
            headers: {common: {Accept: "application/json, text/plain, */*"}, post: dt(Oi), put: dt(Oi), patch: dt(Oi)},
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            paramSerializer: "$httpParamSerializer",
            jsonpCallbackParam: "callback"
        }, e = !1;
        this.useApplyAsync = function (t) {
            return y(t) ? (e = !!t, this) : e
        };
        var n = this.interceptors = [], i = this.xsrfWhitelistedOrigins = [];
        this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function (a, s, u, c, f, h, p, $) {
            function m(e) {
                function n(t, e) {
                    for (var n = 0, r = e.length; n < r;) {
                        var i = e[n++], o = e[n++];
                        t = t.then(i, o)
                    }
                    return e.length = 0, t
                }

                function i(t, e) {
                    var n, r = {};
                    return o(t, function (t, i) {
                        A(t) ? null != (n = t(e)) && (r[i] = n) : r[i] = t
                    }), r
                }

                function s(t) {
                    var e = l({}, t);
                    return e.data = ye(t.data, t.headers, t.status, u.transformResponse), t = t.status, 200 <= t && 300 > t ? e : h.reject(e)
                }

                if (!b(e)) throw r("$http")("badreq", e);
                if (!x($.valueOf(e.url))) throw r("$http")("badreq", e.url);
                var u = l({
                    method: "get",
                    transformRequest: t.transformRequest,
                    transformResponse: t.transformResponse,
                    paramSerializer: t.paramSerializer,
                    jsonpCallbackParam: t.jsonpCallbackParam
                }, e);
                u.headers = function (e) {
                    var n, r, o, a = t.headers, s = l({}, e.headers), a = l({}, a.common, a[yr(e.method)]);
                    t:for (n in a) {
                        r = yr(n);
                        for (o in s) if (yr(o) === r) continue t;
                        s[n] = a[n]
                    }
                    return i(s, dt(e))
                }(e), u.method = br(u.method), u.paramSerializer = x(u.paramSerializer) ? p.get(u.paramSerializer) : u.paramSerializer, a.$$incOutstandingRequestCount("$http");
                var c = [], f = [];
                return e = h.resolve(u), o(E, function (t) {
                    (t.request || t.requestError) && c.unshift(t.request, t.requestError), (t.response || t.responseError) && f.push(t.response, t.responseError)
                }), e = n(e, c), e = e.then(function (e) {
                    var n = e.headers, r = ye(e.data, ge(n), void 0, e.transformRequest);
                    return g(r) && o(n, function (t, e) {
                        "content-type" === yr(e) && delete n[e]
                    }), g(e.withCredentials) && !g(t.withCredentials) && (e.withCredentials = t.withCredentials), v(e, r).then(s, s)
                }), e = n(e, f), e = e.finally(function () {
                    a.$$completeOutstandingRequest(d, "$http")
                })
            }

            function v(n, r) {
                function i(t) {
                    if (t) {
                        var n = {};
                        return o(t, function (t, r) {
                            n[r] = function (n) {
                                function r() {
                                    t(n)
                                }

                                e ? f.$applyAsync(r) : f.$$phase ? r() : f.$apply(r)
                            }
                        }), n
                    }
                }

                function a(t, n, r, i, o) {
                    function a() {
                        c(n, t, r, i, o)
                    }

                    d && (200 <= t && 300 > t ? d.put(V, [t, n, ve(r), i, o]) : d.remove(V)), e ? f.$applyAsync(a) : (a(), f.$$phase || f.$apply())
                }

                function c(t, e, r, i, o) {
                    e = -1 <= e ? e : 0, (200 <= e && 300 > e ? E.resolve : E.reject)({
                        data: t,
                        status: e,
                        headers: ge(r),
                        config: n,
                        statusText: i,
                        xhrStatus: o
                    })
                }

                function l(t) {
                    c(t.data, t.status, dt(t.headers()), t.statusText, t.xhrStatus)
                }

                function p() {
                    var t = m.pendingRequests.indexOf(n);
                    -1 !== t && m.pendingRequests.splice(t, 1)
                }

                var d, v, E = h.defer(), M = E.promise, T = n.headers, D = "jsonp" === yr(n.method), V = n.url;
                return D ? V = $.getTrustedResourceUrl(V) : x(V) || (V = $.valueOf(V)), V = w(V, n.paramSerializer(n.params)), D && (V = C(V, n.jsonpCallbackParam)), m.pendingRequests.push(n), M.then(p, p), !n.cache && !t.cache || !1 === n.cache || "GET" !== n.method && "JSONP" !== n.method || (d = b(n.cache) ? n.cache : b(t.cache) ? t.cache : k), d && (v = d.get(V), y(v) ? v && A(v.then) ? v.then(l, l) : S(v) ? c(v[1], v[0], dt(v[2]), v[3], v[4]) : c(v, 200, {}, "OK", "complete") : d.put(V, M)), g(v) && ((v = O(n.url) ? u()[n.xsrfCookieName || t.xsrfCookieName] : void 0) && (T[n.xsrfHeaderName || t.xsrfHeaderName] = v), s(n.method, V, r, a, T, n.timeout, n.withCredentials, n.responseType, i(n.eventHandlers), i(n.uploadEventHandlers))), M
            }

            function w(t, e) {
                return 0 < e.length && (t += (-1 === t.indexOf("?") ? "?" : "&") + e), t
            }

            function C(t, e) {
                var n = t.split("?");
                if (2 < n.length) throw Vi("badjsonp", t);
                return n = Z(n[1]), o(n, function (n, r) {
                    if ("JSON_CALLBACK" === n) throw Vi("badjsonp", t);
                    if (r === e) throw Vi("badjsonp", e, t)
                }), t += (-1 === t.indexOf("?") ? "?" : "&") + e + "=JSON_CALLBACK"
            }

            var k = c("$http");
            t.paramSerializer = x(t.paramSerializer) ? p.get(t.paramSerializer) : t.paramSerializer;
            var E = [];
            o(n, function (t) {
                E.unshift(x(t) ? p.get(t) : p.invoke(t))
            });
            var O = mn(i);
            return m.pendingRequests = [], function (t) {
                o(arguments, function (t) {
                    m[t] = function (e, n) {
                        return m(l({}, n || {}, {method: t, url: e}))
                    }
                })
            }("get", "delete", "head", "jsonp"), function (t) {
                o(arguments, function (t) {
                    m[t] = function (e, n, r) {
                        return m(l({}, r || {}, {method: t, url: e, data: n}))
                    }
                })
            }("post", "put", "patch"), m.defaults = t, m
        }]
    }

    function we() {
        this.$get = function () {
            return function () {
                return new t.XMLHttpRequest
            }
        }
    }

    function xe() {
        this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (t, e, n, r) {
            return Ce(t, r, t.defer, e, n[0])
        }]
    }

    function Ce(t, e, n, r, i) {
        function a(t, e, n) {
            t = t.replace("JSON_CALLBACK", e);
            var o = i.createElement("script"), a = null;
            return o.type = "text/javascript", o.src = t, o.async = !0, a = function (t) {
                o.removeEventListener("load", a), o.removeEventListener("error", a), i.body.removeChild(o), o = null;
                var s = -1, u = "unknown";
                t && ("load" !== t.type || r.wasCalled(e) || (t = {type: "error"}), u = t.type, s = "error" === t.type ? 404 : 200), n && n(s, u)
            }, o.addEventListener("load", a), o.addEventListener("error", a), i.body.appendChild(o), a
        }

        return function (i, s, u, c, l, f, h, p, d, $) {
            function m(t) {
                C = "timeout" === t, w && w(), x && x.abort()
            }

            function v(t, e, r, i, o, a) {
                y(k) && n.cancel(k), w = x = null, t(e, r, i, o, a)
            }

            if (s = s || t.url(), "jsonp" === yr(i)) var b = r.createCallback(s), w = a(s, b, function (t, e) {
                var n = 200 === t && r.getResponse(b);
                v(c, t, n, "", e, "complete"), r.removeCallback(b)
            }); else {
                var x = e(i, s), C = !1;
                if (x.open(i, s, !0), o(l, function (t, e) {
                    y(t) && x.setRequestHeader(e, t)
                }), x.onload = function () {
                    var t = x.statusText || "", e = "response" in x ? x.response : x.responseText,
                        n = 1223 === x.status ? 204 : x.status;
                    0 === n && (n = e ? 200 : "file" === $n(s).protocol ? 404 : 0), v(c, n, e, x.getAllResponseHeaders(), t, "complete")
                }, x.onerror = function () {
                    v(c, -1, null, null, "", "error")
                }, x.ontimeout = function () {
                    v(c, -1, null, null, "", "timeout")
                }, x.onabort = function () {
                    v(c, -1, null, null, "", C ? "timeout" : "abort")
                }, o(d, function (t, e) {
                    x.addEventListener(e, t)
                }), o($, function (t, e) {
                    x.upload.addEventListener(e, t)
                }), h && (x.withCredentials = !0), p) try {
                    x.responseType = p
                } catch (t) {
                    if ("json" !== p) throw t
                }
                x.send(g(u) ? null : u)
            }
            if (0 < f) var k = n(function () {
                m("timeout")
            }, f); else f && A(f.then) && f.then(function () {
                m(y(f.$$timeoutId) ? "timeout" : "abort")
            })
        }
    }

    function ke() {
        var t = "{{", e = "}}";
        this.startSymbol = function (e) {
            return e ? (t = e, this) : t
        }, this.endSymbol = function (t) {
            return t ? (e = t, this) : e
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, r, i) {
            function o(t) {
                return "\\\\\\" + t
            }

            function a(n) {
                return n.replace(h, t).replace(p, e)
            }

            function s(t, e, n, r) {
                var i = t.$watch(function (t) {
                    return i(), r(t)
                }, e, n);
                return i
            }

            function u(o, u, h, p) {
                function d(t) {
                    try {
                        return t = h && !$ ? i.getTrusted(h, t) : i.valueOf(t), p && !y(t) ? t : ht(t)
                    } catch (t) {
                        r(Ni.interr(o, t))
                    }
                }

                var $ = h === i.URL || h === i.MEDIA_URL;
                if (!o.length || -1 === o.indexOf(t)) {
                    if (u) return;
                    return u = a(o), $ && (u = i.getTrusted(h, u)), u = m(u), u.exp = o, u.expressions = [], u.$$watchDelegate = s, u
                }
                p = !!p;
                for (var v, b, w, x, C = 0, k = [], S = o.length, E = [], A = []; C < S;) {
                    if (-1 === (v = o.indexOf(t, C)) || -1 === (b = o.indexOf(e, v + c))) {
                        C !== S && E.push(a(o.substring(C)));
                        break
                    }
                    C !== v && E.push(a(o.substring(C, v))), C = o.substring(v + c, b), k.push(C), C = b + f, A.push(E.length), E.push("")
                }
                x = 1 === E.length && 1 === A.length;
                var O = $ && x ? void 0 : d;
                if (w = k.map(function (t) {
                    return n(t, O)
                }), !u || k.length) {
                    var M = function (t) {
                        for (var e = 0, n = k.length; e < n; e++) {
                            if (p && g(t[e])) return;
                            E[A[e]] = t[e]
                        }
                        return $ ? i.getTrusted(h, x ? E[0] : E.join("")) : (h && 1 < E.length && Ni.throwNoconcat(o), E.join(""))
                    };
                    return l(function (t) {
                        var e = 0, n = k.length, i = Array(n);
                        try {
                            for (; e < n; e++) i[e] = w[e](t);
                            return M(i)
                        } catch (t) {
                            r(Ni.interr(o, t))
                        }
                    }, {
                        exp: o, expressions: k, $$watchDelegate: function (t, e) {
                            var n;
                            return t.$watchGroup(w, function (r, i) {
                                var o = M(r);
                                e.call(this, o, r !== i ? n : o, t), n = o
                            })
                        }
                    })
                }
            }

            var c = t.length, f = e.length, h = new RegExp(t.replace(/./g, o), "g"),
                p = new RegExp(e.replace(/./g, o), "g");
            return u.startSymbol = function () {
                return t
            }, u.endSymbol = function () {
                return e
            }, u
        }]
    }

    function Se() {
        this.$get = ["$$intervalFactory", "$window", function (t, e) {
            var n = {}, r = function (t) {
                e.clearInterval(t), delete n[t]
            }, i = t(function (t, r, i) {
                return t = e.setInterval(t, r), n[t] = i, t
            }, r);
            return i.cancel = function (t) {
                if (!t) return !1;
                if (!t.hasOwnProperty("$$intervalId")) throw ji("badprom");
                if (!n.hasOwnProperty(t.$$intervalId)) return !1;
                t = t.$$intervalId;
                var e = n[t], i = e.promise;
                return i.$$state && (i.$$state.pur = !0), e.reject("canceled"), r(t), !0
            }, i
        }]
    }

    function Ee() {
        this.$get = ["$browser", "$q", "$$q", "$rootScope", function (t, e, n, r) {
            return function (i, o) {
                return function (a, s, u, c) {
                    function l() {
                        f ? a.apply(null, h) : a(p)
                    }

                    var f = 4 < arguments.length, h = f ? wr.call(arguments, 4) : [], p = 0, d = y(c) && !c,
                        $ = (d ? n : e).defer(), m = $.promise;
                    return u = y(u) ? u : 0, m.$$intervalId = i(function () {
                        d ? t.defer(l) : r.$evalAsync(l), $.notify(p++), 0 < u && p >= u && ($.resolve(p), o(m.$$intervalId)), d || r.$apply()
                    }, s, $, d), m
                }
            }
        }]
    }

    function Ae(t, e) {
        var n = $n(t);
        e.$$protocol = n.protocol, e.$$host = n.hostname, e.$$port = h(n.port) || Ri[n.protocol] || null
    }

    function Oe(t, e, n) {
        if (Li.test(t)) throw Ui("badpath", t);
        var r = "/" !== t.charAt(0);
        r && (t = "/" + t), t = $n(t);
        for (var r = (r && "/" === t.pathname.charAt(0) ? t.pathname.substring(1) : t.pathname).split("/"), i = r.length; i--;) r[i] = decodeURIComponent(r[i]), n && (r[i] = r[i].replace(/\//g, "%2F"));
        n = r.join("/"), e.$$path = n, e.$$search = Z(t.search), e.$$hash = decodeURIComponent(t.hash), e.$$path && "/" !== e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
    }

    function Me(t, e) {
        return t.slice(0, e.length) === e
    }

    function Te(t, e) {
        if (Me(e, t)) return e.substr(t.length)
    }

    function De(t) {
        var e = t.indexOf("#");
        return -1 === e ? t : t.substr(0, e)
    }

    function Ve(t, e, n) {
        this.$$html5 = !0, n = n || "", Ae(t, this), this.$$parse = function (t) {
            var n = Te(e, t);
            if (!x(n)) throw Ui("ipthprfx", t, e);
            Oe(n, this, !0), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$normalizeUrl = function (t) {
            return e + t.substr(1)
        }, this.$$parseLinkUrl = function (r, i) {
            if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
            var o, a;
            return y(o = Te(t, r)) ? (a = o, a = n && y(o = Te(n, o)) ? e + (Te("/", o) || o) : t + a) : y(o = Te(e, r)) ? a = e + o : e === r + "/" && (a = e), a && this.$$parse(a), !!a
        }
    }

    function Ne(t, e, n) {
        Ae(t, this), this.$$parse = function (r) {
            var i, o = Te(t, r) || Te(e, r);
            g(o) || "#" !== o.charAt(0) ? this.$$html5 ? i = o : (i = "", g(o) && (t = r, this.replace())) : (i = Te(n, o), g(i) && (i = o)), Oe(i, this, !1), r = this.$$path;
            var o = t, a = /^\/[A-Z]:(\/.*)/;
            Me(i, o) && (i = i.replace(o, "")), a.exec(i) || (r = (i = a.exec(r)) ? i[1] : r), this.$$path = r, this.$$compose()
        }, this.$$normalizeUrl = function (e) {
            return t + (e ? n + e : "")
        }, this.$$parseLinkUrl = function (e, n) {
            return De(t) === De(e) && (this.$$parse(e), !0)
        }
    }

    function je(t, e, n) {
        this.$$html5 = !0, Ne.apply(this, arguments), this.$$parseLinkUrl = function (r, i) {
            if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
            var o, a;
            return t === De(r) ? o = r : (a = Te(e, r)) ? o = t + n + a : e === r + "/" && (o = e), o && this.$$parse(o), !!o
        }, this.$$normalizeUrl = function (e) {
            return t + n + e
        }
    }

    function Pe(t) {
        return function () {
            return this[t]
        }
    }

    function Ie(t, e) {
        return function (n) {
            return g(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
        }
    }

    function Re() {
        var t = "!", e = {enabled: !1, requireBase: !0, rewriteLinks: !0};
        this.hashPrefix = function (e) {
            return y(e) ? (t = e, this) : t
        }, this.html5Mode = function (t) {
            return D(t) ? (e.enabled = t, this) : b(t) ? (D(t.enabled) && (e.enabled = t.enabled), D(t.requireBase) && (e.requireBase = t.requireBase), (D(t.rewriteLinks) || x(t.rewriteLinks)) && (e.rewriteLinks = t.rewriteLinks), this) : e
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (n, r, i, o, a) {
            function s(t, e) {
                return t === e || $n(t).href === $n(e).href
            }

            function u(t, e, n) {
                var i = l.url(), o = l.$$state;
                try {
                    r.url(t, e, n), l.$$state = r.state()
                } catch (t) {
                    throw l.url(i), l.$$state = o, t
                }
            }

            function c(t, e) {
                n.$broadcast("$locationChangeSuccess", l.absUrl(), t, l.$$state, e)
            }

            var l, f;
            f = r.baseHref();
            var h, p = r.url();
            if (e.enabled) {
                if (!f && e.requireBase) throw Ui("nobase");
                h = p.substring(0, p.indexOf("/", p.indexOf("//") + 2)) + (f || "/"), f = i.history ? Ve : je
            } else h = De(p), f = Ne;
            var d = h.substr(0, De(h).lastIndexOf("/") + 1);
            l = new f(h, d, "#" + t), l.$$parseLinkUrl(p, p), l.$$state = r.state();
            var $ = /^\s*(javascript|mailto):/i;
            o.on("click", function (t) {
                var i = e.rewriteLinks;
                if (i && !t.ctrlKey && !t.metaKey && !t.shiftKey && 2 !== t.which && 2 !== t.button) {
                    for (var a = pr(t.target); "a" !== P(a[0]);) if (a[0] === o[0] || !(a = a.parent())[0]) return;
                    if (!x(i) || !g(a.attr(i))) {
                        var i = a.prop("href"), s = a.attr("href") || a.attr("xlink:href");
                        b(i) && "[object SVGAnimatedString]" === i.toString() && (i = $n(i.animVal).href), $.test(i) || !i || a.attr("target") || t.isDefaultPrevented() || !l.$$parseLinkUrl(i, s) || (t.preventDefault(), l.absUrl() !== r.url() && n.$apply())
                    }
                }
            }), l.absUrl() !== p && r.url(l.absUrl(), !0);
            var m = !0;
            return r.onUrlChange(function (t, e) {
                Me(t, d) ? (n.$evalAsync(function () {
                    var r, i = l.absUrl(), o = l.$$state;
                    l.$$parse(t), l.$$state = e, r = n.$broadcast("$locationChangeStart", t, i, e, o).defaultPrevented, l.absUrl() === t && (r ? (l.$$parse(i), l.$$state = o, u(i, !1, o)) : (m = !1, c(i, o)))
                }), n.$$phase || n.$digest()) : a.location.href = t
            }), n.$watch(function () {
                if (m || l.$$urlUpdatedByLocation) {
                    l.$$urlUpdatedByLocation = !1;
                    var t = r.url(), e = l.absUrl(), o = r.state(), a = l.$$replace,
                        f = !s(t, e) || l.$$html5 && i.history && o !== l.$$state;
                    (m || f) && (m = !1, n.$evalAsync(function () {
                        var e = l.absUrl(),
                            r = n.$broadcast("$locationChangeStart", e, t, l.$$state, o).defaultPrevented;
                        l.absUrl() === e && (r ? (l.$$parse(t), l.$$state = o) : (f && u(e, a, o === l.$$state ? null : l.$$state), c(t, o)))
                    }))
                }
                l.$$replace = !1
            }), l
        }]
    }

    function Ue() {
        var t = !0, e = this;
        this.debugEnabled = function (e) {
            return y(e) ? (t = e, this) : t
        }, this.$get = ["$window", function (n) {
            function r(t) {
                return E(t) && (t.stack && a ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t
            }

            function i(t) {
                var e = n.console || {}, i = e[t] || e.log || d;
                return function () {
                    var t = [];
                    return o(arguments, function (e) {
                        t.push(r(e))
                    }), Function.prototype.apply.call(i, e, t)
                }
            }

            var a = hr || /\bEdge\//.test(n.navigator && n.navigator.userAgent);
            return {
                log: i("log"), info: i("info"), warn: i("warn"), error: i("error"), debug: function () {
                    var n = i("debug");
                    return function () {
                        t && n.apply(e, arguments)
                    }
                }()
            }
        }]
    }

    function Le(t) {
        return t + ""
    }

    function Fe(t, e) {
        return void 0 !== t ? t : e
    }

    function qe(t, e) {
        return void 0 === t ? e : void 0 === e ? t : t + e
    }

    function _e(t, e) {
        switch (t.type) {
            case Wi.MemberExpression:
                if (t.computed) return !1;
                break;
            case Wi.UnaryExpression:
                return 1;
            case Wi.BinaryExpression:
                return "+" !== t.operator && 1;
            case Wi.CallExpression:
                return !1
        }
        return void 0 === e ? Gi : e
    }

    function He(t, e, n) {
        var r, i, a = t.isPure = _e(t, n);
        switch (t.type) {
            case Wi.Program:
                r = !0, o(t.body, function (t) {
                    He(t.expression, e, a), r = r && t.expression.constant
                }), t.constant = r;
                break;
            case Wi.Literal:
                t.constant = !0, t.toWatch = [];
                break;
            case Wi.UnaryExpression:
                He(t.argument, e, a), t.constant = t.argument.constant, t.toWatch = t.argument.toWatch;
                break;
            case Wi.BinaryExpression:
                He(t.left, e, a), He(t.right, e, a), t.constant = t.left.constant && t.right.constant, t.toWatch = t.left.toWatch.concat(t.right.toWatch);
                break;
            case Wi.LogicalExpression:
                He(t.left, e, a), He(t.right, e, a), t.constant = t.left.constant && t.right.constant, t.toWatch = t.constant ? [] : [t];
                break;
            case Wi.ConditionalExpression:
                He(t.test, e, a), He(t.alternate, e, a), He(t.consequent, e, a), t.constant = t.test.constant && t.alternate.constant && t.consequent.constant, t.toWatch = t.constant ? [] : [t];
                break;
            case Wi.Identifier:
                t.constant = !1, t.toWatch = [t];
                break;
            case Wi.MemberExpression:
                He(t.object, e, a), t.computed && He(t.property, e, a), t.constant = t.object.constant && (!t.computed || t.property.constant), t.toWatch = t.constant ? [] : [t];
                break;
            case Wi.CallExpression:
                r = n = !!t.filter && !e(t.callee.name).$stateful, i = [], o(t.arguments, function (t) {
                    He(t, e, a), r = r && t.constant, i.push.apply(i, t.toWatch)
                }), t.constant = r, t.toWatch = n ? i : [t];
                break;
            case Wi.AssignmentExpression:
                He(t.left, e, a), He(t.right, e, a), t.constant = t.left.constant && t.right.constant, t.toWatch = [t];
                break;
            case Wi.ArrayExpression:
                r = !0, i = [], o(t.elements, function (t) {
                    He(t, e, a), r = r && t.constant, i.push.apply(i, t.toWatch)
                }), t.constant = r, t.toWatch = i;
                break;
            case Wi.ObjectExpression:
                r = !0, i = [], o(t.properties, function (t) {
                    He(t.value, e, a), r = r && t.value.constant, i.push.apply(i, t.value.toWatch), t.computed && (He(t.key, e, !1), r = r && t.key.constant, i.push.apply(i, t.key.toWatch))
                }), t.constant = r, t.toWatch = i;
                break;
            case Wi.ThisExpression:
                t.constant = !1, t.toWatch = [];
                break;
            case Wi.LocalsExpression:
                t.constant = !1, t.toWatch = []
        }
    }

    function Be(t) {
        if (1 === t.length) {
            t = t[0].expression;
            var e = t.toWatch;
            return 1 !== e.length ? e : e[0] !== t ? e : void 0
        }
    }

    function ze(t) {
        return t.type === Wi.Identifier || t.type === Wi.MemberExpression
    }

    function We(t) {
        if (1 === t.body.length && ze(t.body[0].expression)) return {
            type: Wi.AssignmentExpression,
            left: t.body[0].expression,
            right: {type: Wi.NGValueParameter},
            operator: "="
        }
    }

    function Ge(t) {
        this.$filter = t
    }

    function Ke(t) {
        this.$filter = t
    }

    function Je(t, e, n) {
        this.ast = new Wi(t, n), this.astCompiler = n.csp ? new Ke(e) : new Ge(e)
    }

    function Ze(t) {
        return A(t.valueOf) ? t.valueOf() : _i.call(t)
    }

    function Ye() {
        var t, e, n = ft(), r = {true: !0, false: !1, null: null, undefined: void 0};
        this.addLiteral = function (t, e) {
            r[t] = e
        }, this.setIdentifierFns = function (n, r) {
            return t = n, e = r, this
        }, this.$get = ["$filter", function (i) {
            function a(t, e) {
                var r, o;
                switch (typeof t) {
                    case"string":
                        return o = t = t.trim(), r = n[o], r || (r = new zi(v), r = new Je(r, i, v).parse(t), n[o] = h(r)), m(r, e);
                    case"function":
                        return m(t, e);
                    default:
                        return m(d, e)
                }
            }

            function s(t, e, n) {
                return null == t || null == e ? t === e : !("object" == typeof t && "object" == typeof (t = Ze(t)) && !n) && (t === e || t !== t && e !== e)
            }

            function u(t, e, n, r, i) {
                var o, a = r.inputs;
                if (1 === a.length) {
                    var u = s, a = a[0];
                    return t.$watch(function (t) {
                        var e = a(t);
                        return s(e, u, a.isPure) || (o = r(t, void 0, void 0, [e]), u = e && Ze(e)), o
                    }, e, n, i)
                }
                for (var c = [], l = [], f = 0, h = a.length; f < h; f++) c[f] = s, l[f] = null;
                return t.$watch(function (t) {
                    for (var e = !1, n = 0, i = a.length; n < i; n++) {
                        var u = a[n](t);
                        (e || (e = !s(u, c[n], a[n].isPure))) && (l[n] = u, c[n] = u && Ze(u))
                    }
                    return e && (o = r(t, void 0, void 0, l)), o
                }, e, n, i)
            }

            function c(t, e, n, r, i) {
                function o() {
                    c(u) && s()
                }

                function a(t, e, n, r) {
                    return u = d && r ? r[0] : f(t, e, n, r), c(u) && t.$$postDigest(o), p(u)
                }

                var s, u, c = r.literal ? l : y, f = r.$$intercepted || r, p = r.$$interceptor || $,
                    d = r.inputs && !f.inputs;
                return a.literal = r.literal, a.constant = r.constant, a.inputs = r.inputs, h(a), s = t.$watch(a, e, n, i)
            }

            function l(t) {
                var e = !0;
                return o(t, function (t) {
                    y(t) || (e = !1)
                }), e
            }

            function f(t, e, n, r) {
                var i = t.$watch(function (t) {
                    return i(), r(t)
                }, e, n);
                return i
            }

            function h(t) {
                return t.constant ? t.$$watchDelegate = f : t.oneTime ? t.$$watchDelegate = c : t.inputs && (t.$$watchDelegate = u), t
            }

            function p(t, e) {
                function n(n) {
                    return e(t(n))
                }

                return n.$stateful = t.$stateful || e.$stateful, n.$$pure = t.$$pure && e.$$pure, n
            }

            function m(t, e) {
                if (!e) return t;
                t.$$interceptor && (e = p(t.$$interceptor, e), t = t.$$intercepted);
                var n = !1, r = function (r, i, o, a) {
                    return r = n && a ? a[0] : t(r, i, o, a), e(r)
                };
                return r.$$intercepted = t, r.$$interceptor = e, r.literal = t.literal, r.oneTime = t.oneTime, r.constant = t.constant, e.$stateful || (n = !t.inputs, r.inputs = t.inputs ? t.inputs : [t], e.$$pure || (r.inputs = r.inputs.map(function (t) {
                    return t.isPure === Gi ? function (e) {
                        return t(e)
                    } : t
                }))), h(r)
            }

            var v = {
                csp: Nr().noUnsafeEval,
                literals: R(r),
                isIdentifierStart: A(t) && t,
                isIdentifierContinue: A(e) && e
            };
            return a.$$getAst = function (t) {
                return new Je(new zi(v), i, v).getAst(t).ast
            }, a
        }]
    }

    function Qe() {
        var t = !0;
        this.$get = ["$rootScope", "$exceptionHandler", function (e, n) {
            return tn(function (t) {
                e.$evalAsync(t)
            }, n, t)
        }], this.errorOnUnhandledRejections = function (e) {
            return y(e) ? (t = e, this) : t
        }
    }

    function Xe() {
        var t = !0;
        this.$get = ["$browser", "$exceptionHandler", function (e, n) {
            return tn(function (t) {
                e.defer(t)
            }, n, t)
        }], this.errorOnUnhandledRejections = function (e) {
            return y(e) ? (t = e, this) : t
        }
    }

    function tn(t, e, n) {
        function i() {
            return new a
        }

        function a() {
            var t = this.promise = new s;
            this.resolve = function (e) {
                f(t, e)
            }, this.reject = function (e) {
                p(t, e)
            }, this.notify = function (e) {
                $(t, e)
            }
        }

        function s() {
            this.$$state = {status: 0}
        }

        function u() {
            for (; !C && k.length;) {
                var t = k.shift();
                if (!t.pur) {
                    t.pur = !0;
                    var n = t.value,
                        n = "Possibly unhandled rejection: " + ("function" == typeof n ? n.toString().replace(/ \{[\s\S]*$/, "") : g(n) ? "undefined" : "string" != typeof n ? $t(n, void 0) : n);
                    E(t.value) ? e(t.value, n) : e(n)
                }
            }
        }

        function c(r) {
            !n || r.pending || 2 !== r.status || r.pur || (0 === C && 0 === k.length && t(u), k.push(r)), !r.processScheduled && r.pending && (r.processScheduled = !0, ++C, t(function () {
                var i, o, a;
                a = r.pending, r.processScheduled = !1, r.pending = void 0;
                try {
                    for (var s = 0, c = a.length; s < c; ++s) {
                        r.pur = !0, o = a[s][0], i = a[s][r.status];
                        try {
                            A(i) ? f(o, i(r.value)) : 1 === r.status ? f(o, r.value) : p(o, r.value)
                        } catch (t) {
                            p(o, t), t && !0 === t.$$passToExceptionHandler && e(t)
                        }
                    }
                } finally {
                    --C, n && 0 === C && t(u)
                }
            }))
        }

        function f(t, e) {
            t.$$state.status || (e === t ? d(t, x("qcycle", e)) : h(t, e))
        }

        function h(t, e) {
            function n(e) {
                a || (a = !0, h(t, e))
            }

            function r(e) {
                a || (a = !0, d(t, e))
            }

            function i(e) {
                $(t, e)
            }

            var o, a = !1;
            try {
                (b(e) || A(e)) && (o = e.then), A(o) ? (t.$$state.status = -1, o.call(e, n, r, i)) : (t.$$state.value = e, t.$$state.status = 1, c(t.$$state))
            } catch (t) {
                r(t)
            }
        }

        function p(t, e) {
            t.$$state.status || d(t, e)
        }

        function d(t, e) {
            t.$$state.value = e, t.$$state.status = 2, c(t.$$state)
        }

        function $(n, r) {
            var i = n.$$state.pending;
            0 >= n.$$state.status && i && i.length && t(function () {
                for (var t, n, o = 0, a = i.length; o < a; o++) {
                    n = i[o][0], t = i[o][3];
                    try {
                        $(n, A(t) ? t(r) : r)
                    } catch (t) {
                        e(t)
                    }
                }
            })
        }

        function m(t) {
            var e = new s;
            return p(e, t), e
        }

        function v(t, e, n) {
            var r = null;
            try {
                A(n) && (r = n())
            } catch (t) {
                return m(t)
            }
            return r && A(r.then) ? r.then(function () {
                return e(t)
            }, m) : e(t)
        }

        function y(t, e, n, r) {
            var i = new s;
            return f(i, t), i.then(e, n, r)
        }

        function w(t) {
            if (!A(t)) throw x("norslvr", t);
            var e = new s;
            return t(function (t) {
                f(e, t)
            }, function (t) {
                p(e, t)
            }), e
        }

        var x = r("$q", TypeError), C = 0, k = [];
        l(s.prototype, {
            then: function (t, e, n) {
                if (g(t) && g(e) && g(n)) return this;
                var r = new s;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, t, e, n]), 0 < this.$$state.status && c(this.$$state), r
            }, catch: function (t) {
                return this.then(null, t)
            }, finally: function (t, e) {
                return this.then(function (e) {
                    return v(e, O, t)
                }, function (e) {
                    return v(e, m, t)
                }, e)
            }
        });
        var O = y;
        return w.prototype = s.prototype, w.defer = i, w.reject = m, w.when = y, w.resolve = O, w.all = function (t) {
            var e = new s, n = 0, r = S(t) ? [] : {};
            return o(t, function (t, i) {
                n++, y(t).then(function (t) {
                    r[i] = t, --n || f(e, r)
                }, function (t) {
                    p(e, t)
                })
            }), 0 === n && f(e, r), e
        }, w.race = function (t) {
            var e = i();
            return o(t, function (t) {
                y(t).then(e.resolve, e.reject)
            }), e.promise
        }, w
    }

    function en() {
        this.$get = ["$window", "$timeout", function (t, e) {
            var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
                r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame,
                i = !!n, o = i ? function (t) {
                    var e = n(t);
                    return function () {
                        r(e)
                    }
                } : function (t) {
                    var n = e(t, 16.66, !1);
                    return function () {
                        e.cancel(n)
                    }
                };
            return o.supported = i, o
        }]
    }

    function nn() {
        function t(t) {
            function e() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = ++Or, this.$$ChildScope = null, this.$$suspended = !1
            }

            return e.prototype = t, e
        }

        var e = 10, n = r("$rootScope"), a = null, s = null;
        this.digestTtl = function (t) {
            return arguments.length && (e = t), e
        }, this.$get = ["$exceptionHandler", "$parse", "$browser", function (r, u, c) {
            function l(t) {
                t.currentScope.$$destroyed = !0
            }

            function f(t) {
                9 === hr && (t.$$childHead && f(t.$$childHead), t.$$nextSibling && f(t.$$nextSibling)), t.$parent = t.$$nextSibling = t.$$prevSibling = t.$$childHead = t.$$childTail = t.$root = t.$$watchers = null
            }

            function h() {
                this.$id = ++Or, this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$suspended = this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
            }

            function p(t) {
                if (x.$$phase) throw n("inprog", x.$$phase);
                x.$$phase = t
            }

            function $(t, e) {
                do {
                    t.$$watchersCount += e
                } while (t = t.$parent)
            }

            function m(t, e, n) {
                do {
                    t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n]
                } while (t = t.$parent)
            }

            function v() {
            }

            function y() {
                for (; S.length;) try {
                    S.shift()()
                } catch (t) {
                    r(t)
                }
                s = null
            }

            function w() {
                null === s && (s = c.defer(function () {
                    x.$apply(y)
                }, null, "$applyAsync"))
            }

            h.prototype = {
                constructor: h, $new: function (e, n) {
                    var r;
                    return n = n || this, e ? (r = new h, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = t(this)), r = new this.$$ChildScope), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (e || n !== this) && r.$on("$destroy", l), r
                }, $watch: function (t, e, n, r) {
                    var i = u(t);
                    if (e = A(e) ? e : d, i.$$watchDelegate) return i.$$watchDelegate(this, e, n, i, t);
                    var o = this, s = o.$$watchers, c = {fn: e, last: v, get: i, exp: r || t, eq: !!n};
                    return a = null, s || (s = o.$$watchers = [], s.$$digestWatchIndex = -1), s.unshift(c), s.$$digestWatchIndex++, $(this, 1), function () {
                        var t = I(s, c);
                        0 <= t && ($(o, -1), t < s.$$digestWatchIndex && s.$$digestWatchIndex--), a = null
                    }
                }, $watchGroup: function (t, e) {
                    function n() {
                        u = !1;
                        try {
                            c ? (c = !1, e(i, i, s)) : e(i, r, s)
                        } finally {
                            for (var n = 0; n < t.length; n++) r[n] = i[n]
                        }
                    }

                    var r = Array(t.length), i = Array(t.length), a = [], s = this, u = !1, c = !0;
                    if (!t.length) {
                        var l = !0;
                        return s.$evalAsync(function () {
                            l && e(i, i, s)
                        }), function () {
                            l = !1
                        }
                    }
                    return 1 === t.length ? this.$watch(t[0], function (t, n, o) {
                        i[0] = t, r[0] = n, e(i, t === n ? i : r, o)
                    }) : (o(t, function (t, e) {
                        var r = s.$watch(t, function (t) {
                            i[e] = t, u || (u = !0, s.$evalAsync(n))
                        });
                        a.push(r)
                    }), function () {
                        for (; a.length;) a.shift()()
                    })
                }, $watchCollection: function (t, e) {
                    function n(t) {
                        r = t;
                        var e, n, a;
                        if (!g(r)) {
                            if (b(r)) if (i(r)) for (o !== h && (o = h, $ = o.length = 0, l++), t = r.length, $ !== t && (l++, o.length = $ = t), e = 0; e < t; e++) a = o[e], n = r[e], a !== a && n !== n || a === n || (l++, o[e] = n); else {
                                o !== p && (o = p = {}, $ = 0, l++), t = 0;
                                for (e in r) gr.call(r, e) && (t++, n = r[e], a = o[e], e in o ? a !== a && n !== n || a === n || (l++, o[e] = n) : ($++, o[e] = n, l++));
                                if ($ > t) for (e in l++, o) gr.call(r, e) || ($--, delete o[e])
                            } else o !== r && (o = r, l++);
                            return l
                        }
                    }

                    n.$$pure = u(t).literal, n.$stateful = !n.$$pure;
                    var r, o, a, s = this, c = 1 < e.length, l = 0, f = u(t, n), h = [], p = {}, d = !0, $ = 0;
                    return this.$watch(f, function () {
                        if (d ? (d = !1, e(r, r, s)) : e(r, a, s), c) if (b(r)) if (i(r)) {
                            a = Array(r.length);
                            for (var t = 0; t < r.length; t++) a[t] = r[t]
                        } else for (t in a = {}, r) gr.call(r, t) && (a[t] = r[t]); else a = r
                    })
                }, $digest: function () {
                    var t, i, o, u, l, f, h, d, $, m, g = e, b = C.length ? x : this, w = [];
                    p("$digest"), c.$$checkUrlChange(), this === x && null !== s && (c.defer.cancel(s), y()), a = null;
                    do {
                        for (h = !1, d = b, f = 0; f < C.length; f++) {
                            try {
                                m = C[f], (u = m.fn)(m.scope, m.locals)
                            } catch (t) {
                                r(t)
                            }
                            a = null
                        }
                        C.length = 0;
                        t:do {
                            if (f = !d.$$suspended && d.$$watchers) for (f.$$digestWatchIndex = f.length; f.$$digestWatchIndex--;) try {
                                if (t = f[f.$$digestWatchIndex]) if (l = t.get, (i = l(d)) === (o = t.last) || (t.eq ? L(i, o) : Mr(i) && Mr(o))) {
                                    if (t === a) {
                                        h = !1;
                                        break t
                                    }
                                } else h = !0, a = t, t.last = t.eq ? R(i, null) : i, u = t.fn, u(i, o === v ? i : o, d), 5 > g && ($ = 4 - g, w[$] || (w[$] = []), w[$].push({
                                    msg: A(t.exp) ? "fn: " + (t.exp.name || t.exp.toString()) : t.exp,
                                    newVal: i,
                                    oldVal: o
                                }))
                            } catch (t) {
                                r(t)
                            }
                            if (!(f = !d.$$suspended && d.$$watchersCount && d.$$childHead || d !== b && d.$$nextSibling)) for (; d !== b && !(f = d.$$nextSibling);) d = d.$parent
                        } while (d = f);
                        if ((h || C.length) && !g--) throw x.$$phase = null, n("infdig", e, w)
                    } while (h || C.length);
                    for (x.$$phase = null; E < k.length;) try {
                        k[E++]()
                    } catch (t) {
                        r(t)
                    }
                    k.length = E = 0, c.$$checkUrlChange()
                }, $suspend: function () {
                    this.$$suspended = !0
                }, $isSuspended: function () {
                    return this.$$suspended
                }, $resume: function () {
                    this.$$suspended = !1
                }, $destroy: function () {
                    if (!this.$$destroyed) {
                        var t = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this === x && c.$$applicationDestroyed(), $(this, -this.$$watchersCount);
                        for (var e in this.$$listenerCount) m(this, this.$$listenerCount[e], e);
                        t && t.$$childHead === this && (t.$$childHead = this.$$nextSibling), t && t.$$childTail === this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = d, this.$on = this.$watch = this.$watchGroup = function () {
                            return d
                        }, this.$$listeners = {}, this.$$nextSibling = null, f(this)
                    }
                }, $eval: function (t, e) {
                    return u(t)(this, e)
                }, $evalAsync: function (t, e) {
                    x.$$phase || C.length || c.defer(function () {
                        C.length && x.$digest()
                    }, null, "$evalAsync"), C.push({scope: this, fn: u(t), locals: e})
                }, $$postDigest: function (t) {
                    k.push(t)
                }, $apply: function (t) {
                    try {
                        p("$apply");
                        try {
                            return this.$eval(t)
                        } finally {
                            x.$$phase = null
                        }
                    } catch (t) {
                        r(t)
                    } finally {
                        try {
                            x.$digest()
                        } catch (t) {
                            throw r(t), t
                        }
                    }
                }, $applyAsync: function (t) {
                    function e() {
                        n.$eval(t)
                    }

                    var n = this;
                    t && S.push(e), t = u(t), w()
                }, $on: function (t, e) {
                    var n = this.$$listeners[t];
                    n || (this.$$listeners[t] = n = []), n.push(e);
                    var r = this;
                    do {
                        r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++
                    } while (r = r.$parent);
                    var i = this;
                    return function () {
                        var r = n.indexOf(e);
                        -1 !== r && (delete n[r], m(i, 1, t))
                    }
                }, $emit: function (t, e) {
                    var n, i, o, a = [], s = this, u = !1, c = {
                        name: t, targetScope: s, stopPropagation: function () {
                            u = !0
                        }, preventDefault: function () {
                            c.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, l = F([c], arguments, 1);
                    do {
                        for (n = s.$$listeners[t] || a, c.currentScope = s, i = 0, o = n.length; i < o; i++) if (n[i]) try {
                            n[i].apply(null, l)
                        } catch (t) {
                            r(t)
                        } else n.splice(i, 1), i--, o--;
                        if (u) break;
                        s = s.$parent
                    } while (s);
                    return c.currentScope = null, c
                }, $broadcast: function (t, e) {
                    var n = this, i = this, o = {
                        name: t, targetScope: this, preventDefault: function () {
                            o.defaultPrevented = !0
                        }, defaultPrevented: !1
                    };
                    if (!this.$$listenerCount[t]) return o;
                    for (var a, s, u = F([o], arguments, 1); n = i;) {
                        for (o.currentScope = n, i = n.$$listeners[t] || [], a = 0, s = i.length; a < s; a++) if (i[a]) try {
                            i[a].apply(null, u)
                        } catch (t) {
                            r(t)
                        } else i.splice(a, 1), a--, s--;
                        if (!(i = n.$$listenerCount[t] && n.$$childHead || n !== this && n.$$nextSibling)) for (; n !== this && !(i = n.$$nextSibling);) n = n.$parent
                    }
                    return o.currentScope = null, o
                }
            };
            var x = new h, C = x.$$asyncQueue = [], k = x.$$postDigestQueue = [], S = x.$$applyAsyncQueue = [], E = 0;
            return x
        }]
    }

    function rn() {
        var t = /^\s*(https?|s?ftp|mailto|tel|file):/, e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (e) {
            return y(e) ? (t = e, this) : t
        }, this.imgSrcSanitizationWhitelist = function (t) {
            return y(t) ? (e = t, this) : e
        }, this.$get = function () {
            return function (n, r) {
                var i = r ? e : t, o = $n(n && n.trim()).href;
                return "" === o || o.match(i) ? n : "unsafe:" + o
            }
        }
    }

    function on(t) {
        if ("self" === t) return t;
        if (x(t)) {
            if (-1 < t.indexOf("***")) throw Ji("iwcard", t);
            return t = Vr(t).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*"), new RegExp("^" + t + "$")
        }
        if (O(t)) return new RegExp("^" + t.source + "$");
        throw Ji("imatcher")
    }

    function an(t) {
        var e = [];
        return y(t) && o(t, function (t) {
            e.push(on(t))
        }), e
    }

    function sn() {
        this.SCE_CONTEXTS = Zi;
        var e = ["self"], n = [];
        this.resourceUrlWhitelist = function (t) {
            return arguments.length && (e = an(t)), e
        }, this.resourceUrlBlacklist = function (t) {
            return arguments.length && (n = an(t)), n
        }, this.$get = ["$injector", "$$sanitizeUri", function (r, i) {
            function o(e, n) {
                var r;
                return "self" === e ? (r = vn(n, eo)) || (t.document.baseURI ? r = t.document.baseURI : (Ki || (Ki = t.document.createElement("a"), Ki.href = ".", Ki = Ki.cloneNode(!1)), r = Ki.href), r = vn(n, r)) : r = !!e.exec(n.href), r
            }

            function a(t) {
                var e = function (t) {
                    this.$$unwrapTrustedValue = function () {
                        return t
                    }
                };
                return t && (e.prototype = new t), e.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                }, e.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                }, e
            }

            var s = function (t) {
                throw Ji("unsafe")
            };
            r.has("$sanitize") && (s = r.get("$sanitize"));
            var u = a(), c = {};
            return c[Zi.HTML] = a(u), c[Zi.CSS] = a(u), c[Zi.MEDIA_URL] = a(u), c[Zi.URL] = a(c[Zi.MEDIA_URL]), c[Zi.JS] = a(u), c[Zi.RESOURCE_URL] = a(c[Zi.URL]), {
                trustAs: function (t, e) {
                    var n = c.hasOwnProperty(t) ? c[t] : null;
                    if (!n) throw Ji("icontext", t, e);
                    if (null === e || g(e) || "" === e) return e;
                    if ("string" != typeof e) throw Ji("itype", t);
                    return new n(e)
                }, getTrusted: function (t, r) {
                    if (null === r || g(r) || "" === r) return r;
                    var a = c.hasOwnProperty(t) ? c[t] : null;
                    if (a && r instanceof a) return r.$$unwrapTrustedValue();
                    if (A(r.$$unwrapTrustedValue) && (r = r.$$unwrapTrustedValue()), t === Zi.MEDIA_URL || t === Zi.URL) return i(r.toString(), t === Zi.MEDIA_URL);
                    if (t === Zi.RESOURCE_URL) {
                        var u, l, a = $n(r.toString()), f = !1;
                        for (u = 0, l = e.length; u < l; u++) if (o(e[u], a)) {
                            f = !0;
                            break
                        }
                        if (f) for (u = 0, l = n.length; u < l; u++) if (o(n[u], a)) {
                            f = !1;
                            break
                        }
                        if (f) return r;
                        throw Ji("insecurl", r.toString())
                    }
                    if (t === Zi.HTML) return s(r);
                    throw Ji("unsafe")
                }, valueOf: function (t) {
                    return t instanceof u ? t.$$unwrapTrustedValue() : t
                }
            }
        }]
    }

    function un() {
        var t = !0;
        this.enabled = function (e) {
            return arguments.length && (t = !!e), t
        }, this.$get = ["$parse", "$sceDelegate", function (e, n) {
            if (t && 8 > hr) throw Ji("iequirks");
            var r = dt(Zi);
            r.isEnabled = function () {
                return t
            }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, t || (r.trustAs = r.getTrusted = function (t, e) {
                return e
            }, r.valueOf = $), r.parseAs = function (t, n) {
                var i = e(n);
                return i.literal && i.constant ? i : e(n, function (e) {
                    return r.getTrusted(t, e)
                })
            };
            var i = r.parseAs, a = r.getTrusted, s = r.trustAs;
            return o(Zi, function (t, e) {
                var n = yr(e);
                r[("parse_as_" + n).replace(Yi, mt)] = function (e) {
                    return i(t, e)
                }, r[("get_trusted_" + n).replace(Yi, mt)] = function (e) {
                    return a(t, e)
                }, r[("trust_as_" + n).replace(Yi, mt)] = function (e) {
                    return s(t, e)
                }
            }), r
        }]
    }

    function cn() {
        this.$get = ["$window", "$document", function (t, e) {
            var n = {},
                r = !((!t.nw || !t.nw.process) && t.chrome && (t.chrome.app && t.chrome.app.runtime || !t.chrome.app && t.chrome.runtime && t.chrome.runtime.id)) && t.history && t.history.pushState,
                i = h((/android (\d+)/.exec(yr((t.navigator || {}).userAgent)) || [])[1]),
                o = /Boxee/i.test((t.navigator || {}).userAgent), a = e[0] || {}, s = a.body && a.body.style, u = !1,
                c = !1;
            return s && (u = !!("transition" in s || "webkitTransition" in s), c = !!("animation" in s || "webkitAnimation" in s)), {
                history: !(!r || 4 > i || o),
                hasEvent: function (t) {
                    if ("input" === t && hr) return !1;
                    if (g(n[t])) {
                        var e = a.createElement("div");
                        n[t] = "on" + t in e
                    }
                    return n[t]
                },
                csp: Nr(),
                transitions: u,
                animations: c,
                android: i
            }
        }]
    }

    function ln() {
        this.$get = m(function (t) {
            return new fn(t)
        })
    }

    function fn(t) {
        function e() {
            var t = i.pop();
            return t && t.cb
        }

        function n(t) {
            for (var e = i.length - 1; 0 <= e; --e) {
                var n = i[e];
                if (n.type === t) return i.splice(e, 1), n.cb
            }
        }

        var r = {}, i = [], o = this.ALL_TASKS_TYPE = "$$all$$", a = this.DEFAULT_TASK_TYPE = "$$default$$";
        this.completeTask = function (i, s) {
            s = s || a;
            try {
                i()
            } finally {
                var u;
                u = s || a, r[u] && (r[u]--, r[o]--), u = r[s];
                var c = r[o];
                if (!c || !u) for (u = c ? n : e; c = u(s);) try {
                    c()
                } catch (e) {
                    t.error(e)
                }
            }
        }, this.incTaskCount = function (t) {
            t = t || a, r[t] = (r[t] || 0) + 1, r[o] = (r[o] || 0) + 1
        }, this.notifyWhenNoPendingTasks = function (t, e) {
            e = e || o, r[e] ? i.push({type: e, cb: t}) : t()
        }
    }

    function hn() {
        var t;
        this.httpOptions = function (e) {
            return e ? (t = e, this) : t
        }, this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function (e, n, r, i, o) {
            function a(s, u) {
                a.totalPendingRequests++, x(s) && !g(n.get(s)) || (s = o.getTrustedResourceUrl(s));
                var c = r.defaults && r.defaults.transformResponse;
                return S(c) ? c = c.filter(function (t) {
                    return t !== me
                }) : c === me && (c = null), r.get(s, l({cache: n, transformResponse: c}, t)).finally(function () {
                    a.totalPendingRequests--
                }).then(function (t) {
                    return n.put(s, t.data)
                }, function (t) {
                    return u || (t = Qi("tpload", s, t.status, t.statusText), e(t)), i.reject(t)
                })
            }

            return a.totalPendingRequests = 0, a
        }]
    }

    function pn() {
        this.$get = ["$rootScope", "$browser", "$location", function (t, e, n) {
            return {
                findBindings: function (t, e, n) {
                    t = t.getElementsByClassName("ng-binding");
                    var r = [];
                    return o(t, function (t) {
                        var i = Ar.element(t).data("$binding");
                        i && o(i, function (i) {
                            n ? new RegExp("(^|\\s)" + Vr(e) + "(\\s|\\||$)").test(i) && r.push(t) : -1 !== i.indexOf(e) && r.push(t)
                        })
                    }), r
                }, findModels: function (t, e, n) {
                    for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                        var o = t.querySelectorAll("[" + r[i] + "model" + (n ? "=" : "*=") + '"' + e + '"]');
                        if (o.length) return o
                    }
                }, getLocation: function () {
                    return n.url()
                }, setLocation: function (e) {
                    e !== n.url() && (n.url(e), t.$digest())
                }, whenStable: function (t) {
                    e.notifyWhenNoOutstandingRequests(t)
                }
            }
        }]
    }

    function dn() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (t, e, n, r, i) {
            function o(o, s, u) {
                A(o) || (u = s, s = o, o = d);
                var c, l = wr.call(arguments, 3), f = y(u) && !u, h = (f ? r : n).defer(), p = h.promise;
                return c = e.defer(function () {
                    try {
                        h.resolve(o.apply(null, l))
                    } catch (t) {
                        h.reject(t), i(t)
                    } finally {
                        delete a[p.$$timeoutId]
                    }
                    f || t.$apply()
                }, s, "$timeout"), p.$$timeoutId = c, a[c] = h, p
            }

            var a = {};
            return o.cancel = function (t) {
                if (!t) return !1;
                if (!t.hasOwnProperty("$$timeoutId")) throw Xi("badprom");
                if (!a.hasOwnProperty(t.$$timeoutId)) return !1;
                t = t.$$timeoutId;
                var n = a[t], r = n.promise;
                return r.$$state && (r.$$state.pur = !0), n.reject("canceled"), delete a[t], e.defer.cancel(t)
            }, o
        }]
    }

    function $n(t) {
        return x(t) ? (hr && (to.setAttribute("href", t), t = to.href), to.setAttribute("href", t), t = to.hostname, !no && -1 < t.indexOf(":") && (t = "[" + t + "]"), {
            href: to.href,
            protocol: to.protocol ? to.protocol.replace(/:$/, "") : "",
            host: to.host,
            search: to.search ? to.search.replace(/^\?/, "") : "",
            hash: to.hash ? to.hash.replace(/^#/, "") : "",
            hostname: t,
            port: to.port,
            pathname: "/" === to.pathname.charAt(0) ? to.pathname : "/" + to.pathname
        }) : t
    }

    function mn(t) {
        var e = [eo].concat(t.map($n));
        return function (t) {
            return t = $n(t), e.some(vn.bind(null, t))
        }
    }

    function vn(t, e) {
        return t = $n(t), e = $n(e), t.protocol === e.protocol && t.host === e.host
    }

    function gn() {
        this.$get = m(t)
    }

    function yn(t) {
        function e(t) {
            try {
                return decodeURIComponent(t)
            } catch (e) {
                return t
            }
        }

        var n = t[0] || {}, r = {}, i = "";
        return function () {
            var t, o, a, s, u;
            try {
                t = n.cookie || ""
            } catch (e) {
                t = ""
            }
            if (t !== i) for (i = t, t = i.split("; "), r = {}, a = 0; a < t.length; a++) o = t[a], 0 < (s = o.indexOf("=")) && (u = e(o.substring(0, s)), g(r[u]) && (r[u] = e(o.substring(s + 1))));
            return r
        }
    }

    function bn() {
        this.$get = yn
    }

    function wn(t) {
        function e(n, r) {
            if (b(n)) {
                var i = {};
                return o(n, function (t, n) {
                    i[n] = e(n, t)
                }), i
            }
            return t.factory(n + "Filter", r)
        }

        this.register = e, this.$get = ["$injector", function (t) {
            return function (e) {
                return t.get(e + "Filter")
            }
        }], e("currency", En), e("date", Rn), e("filter", xn), e("json", Un), e("limitTo", Ln), e("lowercase", co), e("number", An), e("orderBy", qn), e("uppercase", lo)
    }

    function xn() {
        return function (t, e, n, o) {
            if (!i(t)) {
                if (null == t) return t;
                throw r("filter")("notarray", t)
            }
            o = o || "$";
            var a;
            switch (Sn(e)) {
                case"function":
                    break;
                case"boolean":
                case"null":
                case"number":
                case"string":
                    a = !0;
                case"object":
                    e = Cn(e, n, o, a);
                    break;
                default:
                    return t
            }
            return Array.prototype.filter.call(t, e)
        }
    }

    function Cn(t, e, n, r) {
        var i = b(t) && n in t;
        return !0 === e ? e = L : A(e) || (e = function (t, e) {
            return !g(t) && (null === t || null === e ? t === e : !(b(e) || b(t) && !v(t)) && (t = yr("" + t), e = yr("" + e), -1 !== t.indexOf(e)))
        }), function (o) {
            return i && !b(o) ? kn(o, t[n], e, n, !1) : kn(o, t, e, n, r)
        }
    }

    function kn(t, e, n, r, i, o) {
        var a = Sn(t), s = Sn(e);
        if ("string" === s && "!" === e.charAt(0)) return !kn(t, e.substring(1), n, r, i);
        if (S(t)) return t.some(function (t) {
            return kn(t, e, n, r, i)
        });
        switch (a) {
            case"object":
                var u;
                if (i) {
                    for (u in t) if (u.charAt && "$" !== u.charAt(0) && kn(t[u], e, n, r, !0)) return !0;
                    return !o && kn(t, e, n, r, !1)
                }
                if ("object" === s) {
                    for (u in e) if (o = e[u], !A(o) && !g(o) && (a = u === r, !kn(a ? t : t[u], o, n, r, a, a))) return !1;
                    return !0
                }
                return n(t, e);
            case"function":
                return !1;
            default:
                return n(t, e)
        }
    }

    function Sn(t) {
        return null === t ? "null" : typeof t
    }

    function En(t) {
        var e = t.NUMBER_FORMATS;
        return function (t, n, r) {
            g(n) && (n = e.CURRENCY_SYM), g(r) && (r = e.PATTERNS[1].maxFrac);
            var i = n ? /\u00A4/g : /\s*\u00A4\s*/g;
            return null == t ? t : Tn(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, r).replace(i, n)
        }
    }

    function An(t) {
        var e = t.NUMBER_FORMATS;
        return function (t, n) {
            return null == t ? t : Tn(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
        }
    }

    function On(t) {
        var e, n, r, i, o, a = 0;
        for (-1 < (n = t.indexOf(io)) && (t = t.replace(io, "")), 0 < (r = t.search(/e/i)) ? (0 > n && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : 0 > n && (n = t.length), r = 0; t.charAt(r) === oo; r++) ;
        if (r === (o = t.length)) e = [0], n = 1; else {
            for (o--; t.charAt(o) === oo;) o--;
            for (n -= r, e = [], i = 0; r <= o; r++, i++) e[i] = +t.charAt(r)
        }
        return n > ro && (e = e.splice(0, ro - 1), a = n - 1, n = 1), {d: e, e: a, i: n}
    }

    function Mn(t, e, n, r) {
        var i = t.d, o = i.length - t.i;
        if (e = g(e) ? Math.min(Math.max(n, o), r) : +e, n = e + t.i, r = i[n], 0 < n) {
            i.splice(Math.max(t.i, n));
            for (var a = n; a < i.length; a++) i[a] = 0
        } else for (o = Math.max(0, o), t.i = 1, i.length = Math.max(1, n = e + 1), i[0] = 0, a = 1; a < n; a++) i[a] = 0;
        if (5 <= r) if (0 > n - 1) {
            for (r = 0; r > n; r--) i.unshift(0), t.i++;
            i.unshift(1), t.i++
        } else i[n - 1]++;
        for (; o < Math.max(0, e); o++) i.push(0);
        (e = i.reduceRight(function (t, e, n, r) {
            return e += t, r[n] = e % 10, Math.floor(e / 10)
        }, 0)) && (i.unshift(e), t.i++)
    }

    function Tn(t, e, n, r, i) {
        if (!x(t) && !C(t) || isNaN(t)) return "";
        var o = !isFinite(t), a = !1, s = Math.abs(t) + "", u = "";
        if (o) u = "∞"; else {
            for (a = On(s), Mn(a, i, e.minFrac, e.maxFrac), u = a.d, s = a.i, i = a.e, o = [], a = u.reduce(function (t, e) {
                return t && !e
            }, !0); 0 > s;) u.unshift(0), s++;
            for (0 < s ? o = u.splice(s, u.length) : (o = u, u = [0]), s = [], u.length >= e.lgSize && s.unshift(u.splice(-e.lgSize, u.length).join("")); u.length > e.gSize;) s.unshift(u.splice(-e.gSize, u.length).join(""));
            u.length && s.unshift(u.join("")), u = s.join(n), o.length && (u += r + o.join("")), i && (u += "e+" + i)
        }
        return 0 > t && !a ? e.negPre + u + e.negSuf : e.posPre + u + e.posSuf
    }

    function Dn(t, e, n, r) {
        var i = "";
        for ((0 > t || r && 0 >= t) && (r ? t = 1 - t : (t = -t, i = "-")), t = "" + t; t.length < e;) t = oo + t;
        return n && (t = t.substr(t.length - e)), i + t
    }

    function Vn(t, e, n, r, i) {
        return n = n || 0, function (o) {
            return o = o["get" + t](), (0 < n || o > -n) && (o += n), 0 === o && -12 === n && (o = 12), Dn(o, e, r, i)
        }
    }

    function Nn(t, e, n) {
        return function (r, i) {
            var o = r["get" + t]();
            return i[br((n ? "STANDALONE" : "") + (e ? "SHORT" : "") + t)][o]
        }
    }

    function jn(t) {
        var e = new Date(t, 0, 1).getDay();
        return new Date(t, 0, (4 >= e ? 5 : 12) - e)
    }

    function Pn(t) {
        return function (e) {
            var n = jn(e.getFullYear());
            return e = +new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay())) - +n, e = 1 + Math.round(e / 6048e5), Dn(e, t)
        }
    }

    function In(t, e) {
        return 0 >= t.getFullYear() ? e.ERAS[0] : e.ERAS[1]
    }

    function Rn(t) {
        function e(t) {
            var e;
            if (e = t.match(n)) {
                t = new Date(0);
                var r = 0, i = 0, o = e[8] ? t.setUTCFullYear : t.setFullYear, a = e[8] ? t.setUTCHours : t.setHours;
                e[9] && (r = h(e[9] + e[10]), i = h(e[9] + e[11])), o.call(t, h(e[1]), h(e[2]) - 1, h(e[3])), r = h(e[4] || 0) - r, i = h(e[5] || 0) - i, o = h(e[6] || 0), e = Math.round(1e3 * parseFloat("0." + (e[7] || 0))), a.call(t, r, i, o, e)
            }
            return t
        }

        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (n, r, i) {
            var a, s, u = "", c = [];
            if (r = r || "mediumDate", r = t.DATETIME_FORMATS[r] || r, x(n) && (n = uo.test(n) ? h(n) : e(n)), C(n) && (n = new Date(n)), !k(n) || !isFinite(n.getTime())) return n;
            for (; r;) (s = so.exec(r)) ? (c = F(c, s, 1), r = c.pop()) : (c.push(r), r = null);
            var l = n.getTimezoneOffset();
            return i && (l = z(i, l), n = G(n, i, !0)), o(c, function (e) {
                a = ao[e], u += a ? a(n, t.DATETIME_FORMATS, l) : "''" === e ? "'" : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), u
        }
    }

    function Un() {
        return function (t, e) {
            return g(e) && (e = 2), H(t, e)
        }
    }

    function Ln() {
        return function (t, e, n) {
            return e = 1 / 0 === Math.abs(Number(e)) ? Number(e) : h(e), Mr(e) ? t : (C(t) && (t = t.toString()), i(t) ? (n = !n || isNaN(n) ? 0 : h(n), n = 0 > n ? Math.max(0, t.length + n) : n, 0 <= e ? Fn(t, n, n + e) : 0 === n ? Fn(t, e, t.length) : Fn(t, Math.max(0, n + e), n)) : t)
        }
    }

    function Fn(t, e, n) {
        return x(t) ? t.slice(e, n) : wr.call(t, e, n)
    }

    function qn(t) {
        function e(e) {
            return e.map(function (e) {
                var n = 1, r = $;
                if (A(e)) r = e; else if (x(e) && ("+" !== e.charAt(0) && "-" !== e.charAt(0) || (n = "-" === e.charAt(0) ? -1 : 1, e = e.substring(1)), "" !== e && (r = t(e), r.constant))) var i = r(),
                    r = function (t) {
                        return t[i]
                    };
                return {get: r, descending: n}
            })
        }

        function n(t) {
            switch (typeof t) {
                case"number":
                case"boolean":
                case"string":
                    return !0;
                default:
                    return !1
            }
        }

        function o(t, e) {
            var n = 0, r = t.type, i = e.type;
            if (r === i) {
                var i = t.value, o = e.value;
                "string" === r ? (i = i.toLowerCase(), o = o.toLowerCase()) : "object" === r && (b(i) && (i = t.index), b(o) && (o = e.index)), i !== o && (n = i < o ? -1 : 1)
            } else n = "undefined" === r ? 1 : "undefined" === i ? -1 : "null" === r ? 1 : "null" === i ? -1 : r < i ? -1 : 1;
            return n
        }

        return function (t, a, s, u) {
            if (null == t) return t;
            if (!i(t)) throw r("orderBy")("notarray", t);
            S(a) || (a = [a]), 0 === a.length && (a = ["+"]);
            var c = e(a), l = s ? -1 : 1, f = A(u) ? u : o;
            return t = Array.prototype.map.call(t, function (t, e) {
                return {
                    value: t,
                    tieBreaker: {value: e, type: "number", index: e},
                    predicateValues: c.map(function (r) {
                        var i = r.get(t);
                        return r = typeof i, null === i ? r = "null" : "object" === r && (A(i.valueOf) && (i = i.valueOf(), n(i)) || v(i) && (i = i.toString(), n(i))), {
                            value: i,
                            type: r,
                            index: e
                        }
                    })
                }
            }), t.sort(function (t, e) {
                for (var n = 0, r = c.length; n < r; n++) {
                    var i = f(t.predicateValues[n], e.predicateValues[n]);
                    if (i) return i * c[n].descending * l
                }
                return (f(t.tieBreaker, e.tieBreaker) || o(t.tieBreaker, e.tieBreaker)) * l
            }), t = t.map(function (t) {
                return t.value
            })
        }
    }

    function _n(t) {
        return A(t) && (t = {link: t}), t.restrict = t.restrict || "AC", m(t)
    }

    function Hn(t, e, n, r, i) {
        this.$$controls = [], this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = i(e.name || e.ngForm || "")(n), this.$dirty = !1, this.$valid = this.$pristine = !0, this.$submitted = this.$invalid = !1, this.$$parentForm = po, this.$$element = t, this.$$animate = r, Bn(this)
    }

    function Bn(t) {
        t.$$classCache = {}, t.$$classCache[Zo] = !(t.$$classCache[Jo] = t.$$element.hasClass(Jo))
    }

    function zn(t) {
        function e(t, e, n) {
            n && !t.$$classCache[e] ? (t.$$animate.addClass(t.$$element, e), t.$$classCache[e] = !0) : !n && t.$$classCache[e] && (t.$$animate.removeClass(t.$$element, e), t.$$classCache[e] = !1)
        }

        function n(t, n, r) {
            n = n ? "-" + ot(n, "-") : "", e(t, Jo + n, !0 === r), e(t, Zo + n, !1 === r)
        }

        var r = t.set, i = t.unset;
        t.clazz.prototype.$setValidity = function (t, o, a) {
            g(o) ? (this.$pending || (this.$pending = {}), r(this.$pending, t, a)) : (this.$pending && i(this.$pending, t, a), Wn(this.$pending) && (this.$pending = void 0)), D(o) ? o ? (i(this.$error, t, a), r(this.$$success, t, a)) : (r(this.$error, t, a), i(this.$$success, t, a)) : (i(this.$error, t, a), i(this.$$success, t, a)), this.$pending ? (e(this, "ng-pending", !0), this.$valid = this.$invalid = void 0, n(this, "", null)) : (e(this, "ng-pending", !1), this.$valid = Wn(this.$error), this.$invalid = !this.$valid, n(this, "", this.$valid)), o = this.$pending && this.$pending[t] ? void 0 : !this.$error[t] && (!!this.$$success[t] || null), n(this, t, o), this.$$parentForm.$setValidity(t, o, this)
        }
    }

    function Wn(t) {
        if (t) for (var e in t) if (t.hasOwnProperty(e)) return !1;
        return !0
    }

    function Gn(t) {
        t.$formatters.push(function (e) {
            return t.$isEmpty(e) ? e : e.toString()
        })
    }

    function Kn(t, e, n, r, i, o) {
        var a = yr(e[0].type);
        if (!i.android) {
            var s = !1;
            e.on("compositionstart", function () {
                s = !0
            }), e.on("compositionupdate", function (t) {
                (g(t.data) || "" === t.data) && (s = !1)
            }), e.on("compositionend", function () {
                s = !1, c()
            })
        }
        var u, c = function (t) {
            if (u && (o.defer.cancel(u), u = null), !s) {
                var i = e.val();
                t = t && t.type, "password" === a || n.ngTrim && "false" === n.ngTrim || (i = Dr(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, t)
            }
        };
        if (i.hasEvent("input")) e.on("input", c); else {
            var l = function (t, e, n) {
                u || (u = o.defer(function () {
                    u = null, e && e.value === n || c(t)
                }))
            };
            e.on("keydown", function (t) {
                var e = t.keyCode;
                91 === e || 15 < e && 19 > e || 37 <= e && 40 >= e || l(t, this, this.value)
            }), i.hasEvent("paste") && e.on("paste cut drop", l)
        }
        e.on("change", c), Ao[a] && r.$$hasNativeValidators && a === n.type && e.on("keydown wheel mousedown", function (t) {
            if (!u) {
                var e = this.validity, n = e.badInput, r = e.typeMismatch;
                u = o.defer(function () {
                    u = null, e.badInput === n && e.typeMismatch === r || c(t)
                })
            }
        }), r.$render = function () {
            var t = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
            e.val() !== t && e.val(t)
        }
    }

    function Jn(t, e) {
        return function (n, r) {
            var i, a;
            if (k(n)) return n;
            if (x(n)) {
                if ('"' === n.charAt(0) && '"' === n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), go.test(n)) return new Date(n);
                if (t.lastIndex = 0, i = t.exec(n)) return i.shift(), a = r ? {
                    yyyy: r.getFullYear(),
                    MM: r.getMonth() + 1,
                    dd: r.getDate(),
                    HH: r.getHours(),
                    mm: r.getMinutes(),
                    ss: r.getSeconds(),
                    sss: r.getMilliseconds() / 1e3
                } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, o(i, function (t, n) {
                    n < e.length && (a[e[n]] = +t)
                }), i = new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0), 100 > a.yyyy && i.setFullYear(a.yyyy), i
            }
            return NaN
        }
    }

    function Zn(t, e, n, r) {
        return function (i, o, a, s, u, c, l, f) {
            function h(t) {
                return t && !(t.getTime && t.getTime() !== t.getTime())
            }

            function p(t) {
                return y(t) && !k(t) ? d(t) || void 0 : t
            }

            function d(t, e) {
                var r = s.$options.getOption("timezone");
                m && m !== r && (e = W(e, z(m)));
                var i = n(t, e);
                return !isNaN(i) && r && (i = G(i, r)), i
            }

            Yn(i, o, a, s, t), Kn(i, o, a, s, u, c);
            var $, m, v = "time" === t || "datetimelocal" === t;
            if (s.$parsers.push(function (n) {
                return s.$isEmpty(n) ? null : e.test(n) ? d(n, $) : void (s.$$parserName = t)
            }), s.$formatters.push(function (t) {
                if (t && !k(t)) throw Xo("datefmt", t);
                if (h(t)) {
                    $ = t;
                    var e = s.$options.getOption("timezone");
                    e && (m = e, $ = G($, e, !0));
                    var n = r;
                    return v && x(s.$options.getOption("timeSecondsFormat")) && (n = r.replace("ss.sss", s.$options.getOption("timeSecondsFormat")).replace(/:$/, "")), t = l("date")(t, n, e), v && s.$options.getOption("timeStripZeroSeconds") && (t = t.replace(/(?::00)?(?:\.000)?$/, "")), t
                }
                return m = $ = null, ""
            }), y(a.min) || a.ngMin) {
                var b = a.min || f(a.ngMin)(i), w = p(b);
                s.$validators.min = function (t) {
                    return !h(t) || g(w) || n(t) >= w
                }, a.$observe("min", function (t) {
                    t !== b && (w = p(t), b = t, s.$validate())
                })
            }
            if (y(a.max) || a.ngMax) {
                var C = a.max || f(a.ngMax)(i), S = p(C);
                s.$validators.max = function (t) {
                    return !h(t) || g(S) || n(t) <= S
                }, a.$observe("max", function (t) {
                    t !== C && (S = p(t), C = t, s.$validate())
                })
            }
        }
    }

    function Yn(t, e, n, r, i) {
        (r.$$hasNativeValidators = b(e[0].validity)) && r.$parsers.push(function (t) {
            var n = e.prop("validity") || {};
            if (!n.badInput && !n.typeMismatch) return t;
            r.$$parserName = i
        })
    }

    function Qn(t) {
        t.$parsers.push(function (e) {
            return t.$isEmpty(e) ? null : wo.test(e) ? parseFloat(e) : void (t.$$parserName = "number")
        }), t.$formatters.push(function (e) {
            if (!t.$isEmpty(e)) {
                if (!C(e)) throw Xo("numfmt", e);
                e = e.toString()
            }
            return e
        })
    }

    function Xn(t) {
        return y(t) && !C(t) && (t = parseFloat(t)), Mr(t) ? void 0 : t
    }

    function tr(t) {
        var e = t.toString(), n = e.indexOf(".");
        return -1 === n ? -1 < t && 1 > t && (t = /e-(\d+)$/.exec(e)) ? Number(t[1]) : 0 : e.length - n - 1
    }

    function er(t, e, n) {
        t = Number(t);
        var r = (0 | t) !== t, i = (0 | e) !== e, o = (0 | n) !== n;
        if (r || i || o) {
            var a = r ? tr(t) : 0, s = i ? tr(e) : 0, u = o ? tr(n) : 0, a = Math.max(a, s, u), a = Math.pow(10, a);
            t *= a, e *= a, n *= a, r && (t = Math.round(t)), i && (e = Math.round(e)), o && (n = Math.round(n))
        }
        return 0 == (t - e) % n
    }

    function nr(t, e, n, r, i) {
        if (y(r)) {
            if (t = t(r), !t.constant) throw Xo("constexpr", n, r);
            return t(e)
        }
        return i
    }

    function rr(t, e) {
        function n(t, e) {
            if (!t || !t.length) return [];
            if (!e || !e.length) return t;
            var n = [], r = 0;
            t:for (; r < t.length; r++) {
                for (var i = t[r], o = 0; o < e.length; o++) if (i === e[o]) continue t;
                n.push(i)
            }
            return n
        }

        function r(t) {
            if (!t) return t;
            var e = t;
            return S(t) ? e = t.map(r).join(" ") : b(t) ? e = Object.keys(t).filter(function (e) {
                return t[e]
            }).join(" ") : x(t) || (e = t + ""), e
        }

        t = "ngClass" + t;
        var i;
        return ["$parse", function (a) {
            return {
                restrict: "AC", link: function (s, u, c) {
                    function l(t, e) {
                        var n = [];
                        return o(t, function (t) {
                            (0 < e || p[t]) && (p[t] = (p[t] || 0) + e, p[t] === +(0 < e) && n.push(t))
                        }), n.join(" ")
                    }

                    function f(t) {
                        if (t === e) {
                            var n = h, n = l(n && n.split(" "), 1);
                            c.$addClass(n)
                        } else n = h, n = l(n && n.split(" "), -1), c.$removeClass(n);
                        d = t
                    }

                    var h, p = u.data("$classCounts"), d = !0;
                    p || (p = ft(), u.data("$classCounts", p)), "ngClass" !== t && (i || (i = a("$index", function (t) {
                        return 1 & t
                    })), s.$watch(i, f)), s.$watch(a(c[t], r), function (t) {
                        if (d === e) {
                            var r = h && h.split(" "), i = t && t.split(" "), o = n(r, i), r = n(i, r), o = l(o, -1),
                                r = l(r, 1);
                            c.$addClass(r), c.$removeClass(o)
                        }
                        h = t
                    })
                }
            }
        }]
    }

    function ir(t, e, n, r, i, o) {
        return {
            restrict: "A", compile: function (a, s) {
                var u = t(s[r]);
                return function (t, r) {
                    r.on(i, function (r) {
                        var i = function () {
                            u(t, {$event: r})
                        };
                        if (e.$$phase) if (o) t.$evalAsync(i); else try {
                            i()
                        } catch (t) {
                            n(t)
                        } else t.$apply(i)
                    })
                }
            }
        }
    }

    function or(t, e, n, r, i, o, a, s, u) {
        this.$modelValue = this.$viewValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = u(n.name || "", !1)(t), this.$$parentForm = po, this.$options = ta, this.$$updateEvents = "", this.$$updateEventHandler = this.$$updateEventHandler.bind(this),
            this.$$parsedNgModel = i(n.ngModel), this.$$parsedNgModelAssign = this.$$parsedNgModel.assign, this.$$ngModelGet = this.$$parsedNgModel, this.$$ngModelSet = this.$$parsedNgModelAssign, this.$$pendingDebounce = null, this.$$parserValid = void 0, this.$$parserName = "parse", this.$$currentValidationRunId = 0, this.$$scope = t, this.$$rootScope = t.$root, this.$$attr = n, this.$$element = r, this.$$animate = o, this.$$timeout = a, this.$$parse = i, this.$$q = s, this.$$exceptionHandler = e, Bn(this), ar(this)
    }

    function ar(t) {
        t.$$scope.$watch(function (e) {
            return e = t.$$ngModelGet(e), e === t.$modelValue || t.$modelValue !== t.$modelValue && e !== e || t.$$setModelValue(e), e
        })
    }

    function sr(t) {
        this.$$options = t
    }

    function ur(t, e) {
        o(e, function (e, n) {
            y(t[n]) || (t[n] = e)
        })
    }

    function cr(t, e) {
        t.prop("selected", e), t.attr("selected", e)
    }

    function lr(t, e, n) {
        if (t) {
            if (x(t) && (t = new RegExp("^" + t + "$")), !t.test) throw r("ngPattern")("noregexp", e, t, K(n));
            return t
        }
    }

    function fr(t) {
        return t = h(t), Mr(t) ? -1 : t
    }

    var hr, pr, dr, $r, mr = {objectMaxDepth: 5, urlErrorParamsEnabled: !0}, vr = /^\/(.+)\/([a-z]*)$/,
        gr = Object.prototype.hasOwnProperty, yr = function (t) {
            return x(t) ? t.toLowerCase() : t
        }, br = function (t) {
            return x(t) ? t.toUpperCase() : t
        }, wr = [].slice, xr = [].splice, Cr = [].push, kr = Object.prototype.toString, Sr = Object.getPrototypeOf,
        Er = r("ng"), Ar = t.angular || (t.angular = {}), Or = 0;
    hr = t.document.documentMode;
    var Mr = Number.isNaN || function (t) {
        return t !== t
    };
    d.$inject = [], $.$inject = [];
    var Tr = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
        Dr = function (t) {
            return x(t) ? t.trim() : t
        }, Vr = function (t) {
            return t.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        }, Nr = function () {
            if (!y(Nr.rules)) {
                var e = t.document.querySelector("[ng-csp]") || t.document.querySelector("[data-ng-csp]");
                if (e) {
                    var n = e.getAttribute("ng-csp") || e.getAttribute("data-ng-csp");
                    Nr.rules = {
                        noUnsafeEval: !n || -1 !== n.indexOf("no-unsafe-eval"),
                        noInlineStyle: !n || -1 !== n.indexOf("no-inline-style")
                    }
                } else {
                    e = Nr;
                    try {
                        new Function(""), n = !1
                    } catch (t) {
                        n = !0
                    }
                    e.rules = {noUnsafeEval: n, noInlineStyle: !1}
                }
            }
            return Nr.rules
        }, jr = function () {
            if (y(jr.name_)) return jr.name_;
            var e, n, r, i, o = Ir.length;
            for (n = 0; n < o; ++n) if (r = Ir[n], e = t.document.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
                i = e.getAttribute(r + "jq");
                break
            }
            return jr.name_ = i
        }, Pr = /:/g, Ir = ["ng-", "data-ng-", "ng:", "x-ng-"], Rr = function (e) {
            var n = e.currentScript;
            return !n || (n instanceof t.HTMLScriptElement || n instanceof t.SVGScriptElement) && (n = n.attributes, [n.getNamedItem("src"), n.getNamedItem("href"), n.getNamedItem("xlink:href")].every(function (t) {
                if (!t) return !0;
                if (!t.value) return !1;
                var n = e.createElement("a");
                if (n.href = t.value, e.location.origin === n.origin) return !0;
                switch (n.protocol) {
                    case"http:":
                    case"https:":
                    case"ftp:":
                    case"blob:":
                    case"file:":
                    case"data:":
                        return !0;
                    default:
                        return !1
                }
            }))
        }(t.document), Ur = /[A-Z]/g, Lr = !1, Fr = 3,
        qr = {full: "1.7.8", major: 1, minor: 7, dot: 8, codeName: "enthusiastic-oblation"};
    bt.expando = "ng339";
    var _r = bt.cache = {}, Hr = 1;
    bt._data = function (t) {
        return this.cache[t[this.expando]] || {}
    };
    var Br = /-([a-z])/g, zr = /^-ms-/, Wr = {mouseleave: "mouseout", mouseenter: "mouseover"}, Gr = r("jqLite"),
        Kr = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Jr = /<|&#?\w+;/, Zr = /<([\w:-]+)/,
        Yr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Qr = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Qr.optgroup = Qr.option, Qr.tbody = Qr.tfoot = Qr.colgroup = Qr.caption = Qr.thead, Qr.th = Qr.td;
    var Xr = t.Node.prototype.contains || function (t) {
        return !!(16 & this.compareDocumentPosition(t))
    }, ti = bt.prototype = {
        ready: Ut, toString: function () {
            var t = [];
            return o(this, function (e) {
                t.push("" + e)
            }), "[" + t.join(", ") + "]"
        }, eq: function (t) {
            return pr(0 <= t ? this[t] : this[this.length + t])
        }, length: 0, push: Cr, sort: [].sort, splice: [].splice
    }, ei = {};
    o("multiple selected checked disabled readOnly required open".split(" "), function (t) {
        ei[yr(t)] = t
    });
    var ni = {};
    o("input select option textarea button form details".split(" "), function (t) {
        ni[t] = !0
    });
    var ri = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern",
        ngStep: "step"
    };
    o({
        data: Ot, removeData: Et, hasData: function (t) {
            for (var e in _r[t.ng339]) return !0;
            return !1
        }, cleanData: function (t) {
            for (var e = 0, n = t.length; e < n; e++) Et(t[e]), St(t[e])
        }
    }, function (t, e) {
        bt[e] = t
    }), o({
        data: Ot, inheritedData: jt, scope: function (t) {
            return pr.data(t, "$scope") || jt(t.parentNode || t, ["$isolateScope", "$scope"])
        }, isolateScope: function (t) {
            return pr.data(t, "$isolateScope") || pr.data(t, "$isolateScopeNoTemplate")
        }, controller: Nt, injector: function (t) {
            return jt(t, "$injector")
        }, removeAttr: function (t, e) {
            t.removeAttribute(e)
        }, hasClass: Mt, css: function (t, e, n) {
            if (e = vt(e.replace(zr, "ms-")), !y(n)) return t.style[e];
            t.style[e] = n
        }, attr: function (t, e, n) {
            var r = t.nodeType;
            if (r !== Fr && 2 !== r && 8 !== r && t.getAttribute) {
                var r = yr(e), i = ei[r];
                if (!y(n)) return t = t.getAttribute(e), i && null !== t && (t = r), null === t ? void 0 : t;
                null === n || !1 === n && i ? t.removeAttribute(e) : t.setAttribute(e, i ? r : n)
            }
        }, prop: function (t, e, n) {
            if (!y(n)) return t[e];
            t[e] = n
        }, text: function () {
            function t(t, e) {
                if (g(e)) {
                    var n = t.nodeType;
                    return 1 === n || n === Fr ? t.textContent : ""
                }
                t.textContent = e
            }

            return t.$dv = "", t
        }(), val: function (t, e) {
            if (g(e)) {
                if (t.multiple && "select" === P(t)) {
                    var n = [];
                    return o(t.options, function (t) {
                        t.selected && n.push(t.value || t.text)
                    }), n
                }
                return t.value
            }
            t.value = e
        }, html: function (t, e) {
            if (g(e)) return t.innerHTML;
            xt(t, !0), t.innerHTML = e
        }, empty: Pt
    }, function (t, e) {
        bt.prototype[e] = function (e, n) {
            var r, i, o = this.length;
            if (t !== Pt && g(2 === t.length && t !== Mt && t !== Nt ? e : n)) {
                if (b(e)) {
                    for (r = 0; r < o; r++) if (t === Ot) t(this[r], e); else for (i in e) t(this[r], i, e[i]);
                    return this
                }
                for (r = t.$dv, o = g(r) ? Math.min(o, 1) : o, i = 0; i < o; i++) {
                    var a = t(this[i], e, n);
                    r = r ? r + a : a
                }
                return r
            }
            for (r = 0; r < o; r++) t(this[r], e, n);
            return this
        }
    }), o({
        removeData: Et, on: function (t, e, n, r) {
            if (y(r)) throw Gr("onargs");
            if (gt(t)) {
                r = At(t, !0);
                var i = r.events, o = r.handle;
                o || (o = r.handle = Ft(t, i)), r = 0 <= e.indexOf(" ") ? e.split(" ") : [e];
                for (var a = r.length, s = function (e, r, a) {
                    var s = i[e];
                    s || (s = i[e] = [], s.specialHandlerWrapper = r, "$destroy" === e || a || t.addEventListener(e, o)), s.push(n)
                }; a--;) e = r[a], Wr[e] ? (s(Wr[e], _t), s(e, void 0, !0)) : s(e)
            }
        }, off: St, one: function (t, e, n) {
            t = pr(t), t.on(e, function r() {
                t.off(e, n), t.off(e, r)
            }), t.on(e, n)
        }, replaceWith: function (t, e) {
            var n, r = t.parentNode;
            xt(t), o(new bt(e), function (e) {
                n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t), n = e
            })
        }, children: function (t) {
            var e = [];
            return o(t.childNodes, function (t) {
                1 === t.nodeType && e.push(t)
            }), e
        }, contents: function (t) {
            return t.contentDocument || t.childNodes || []
        }, append: function (t, e) {
            var n = t.nodeType;
            if (1 === n || 11 === n) {
                e = new bt(e);
                for (var n = 0, r = e.length; n < r; n++) t.appendChild(e[n])
            }
        }, prepend: function (t, e) {
            if (1 === t.nodeType) {
                var n = t.firstChild;
                o(new bt(e), function (e) {
                    t.insertBefore(e, n)
                })
            }
        }, wrap: function (t, e) {
            var n = pr(e).eq(0).clone()[0], r = t.parentNode;
            r && r.replaceChild(n, t), n.appendChild(t)
        }, remove: It, detach: function (t) {
            It(t, !0)
        }, after: function (t, e) {
            var n = t, r = t.parentNode;
            if (r) {
                e = new bt(e);
                for (var i = 0, o = e.length; i < o; i++) {
                    var a = e[i];
                    r.insertBefore(a, n.nextSibling), n = a
                }
            }
        }, addClass: Dt, removeClass: Tt, toggleClass: function (t, e, n) {
            e && o(e.split(" "), function (e) {
                var r = n;
                g(r) && (r = !Mt(t, e)), (r ? Dt : Tt)(t, e)
            })
        }, parent: function (t) {
            return (t = t.parentNode) && 11 !== t.nodeType ? t : null
        }, next: function (t) {
            return t.nextElementSibling
        }, find: function (t, e) {
            return t.getElementsByTagName ? t.getElementsByTagName(e) : []
        }, clone: wt, triggerHandler: function (t, e, n) {
            var r, i, a = e.type || e, s = At(t);
            (s = (s = s && s.events) && s[a]) && (r = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                }, isDefaultPrevented: function () {
                    return !0 === this.defaultPrevented
                }, stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                }, isImmediatePropagationStopped: function () {
                    return !0 === this.immediatePropagationStopped
                }, stopPropagation: d, type: a, target: t
            }, e.type && (r = l(r, e)), e = dt(s), i = n ? [r].concat(n) : [r], o(e, function (e) {
                r.isImmediatePropagationStopped() || e.apply(t, i)
            }))
        }
    }, function (t, e) {
        bt.prototype[e] = function (e, n, r) {
            for (var i, o = 0, a = this.length; o < a; o++) g(i) ? (i = t(this[o], e, n, r), y(i) && (i = pr(i))) : Vt(i, t(this[o], e, n, r));
            return y(i) ? i : this
        }
    }), bt.prototype.bind = bt.prototype.on, bt.prototype.unbind = bt.prototype.off;
    var ii = Object.create(null);
    zt.prototype = {
        _idx: function (t) {
            return t !== this._lastKey && (this._lastKey = t, this._lastIndex = this._keys.indexOf(t)), this._lastIndex
        }, _transformKey: function (t) {
            return Mr(t) ? ii : t
        }, get: function (t) {
            if (t = this._transformKey(t), -1 !== (t = this._idx(t))) return this._values[t]
        }, has: function (t) {
            return t = this._transformKey(t), -1 !== this._idx(t)
        }, set: function (t, e) {
            t = this._transformKey(t);
            var n = this._idx(t);
            -1 === n && (n = this._lastIndex = this._keys.length), this._keys[n] = t, this._values[n] = e
        }, delete: function (t) {
            return t = this._transformKey(t), -1 !== (t = this._idx(t)) && (this._keys.splice(t, 1), this._values.splice(t, 1), this._lastKey = NaN, this._lastIndex = -1, !0)
        }
    };
    var oi = zt, ai = [function () {
            this.$get = [function () {
                return oi
            }]
        }], si = /^([^(]+?)=>/, ui = /^[^(]*\(\s*([^)]*)\)/m, ci = /,/, li = /^\s*(_?)(\S+?)\1\s*$/,
        fi = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, hi = r("$injector");
    Kt.$$annotate = function (t, e, n) {
        var r;
        if ("function" == typeof t) {
            if (!(r = t.$inject)) {
                if (r = [], t.length) {
                    if (e) throw x(n) && n || (n = t.name || Gt(t)), hi("strictdi", n);
                    e = Wt(t), o(e[1].split(ci), function (t) {
                        t.replace(li, function (t, e, n) {
                            r.push(n)
                        })
                    })
                }
                t.$inject = r
            }
        } else S(t) ? (e = t.length - 1, st(t[e], "fn"), r = t.slice(0, e)) : st(t, "fn", !0);
        return r
    };
    var pi = r("$animate"), di = function () {
        this.$get = d
    }, $i = function () {
        var t = new oi, e = [];
        this.$get = ["$$AnimateRunner", "$rootScope", function (n, r) {
            function i(t, e, n) {
                var r = !1;
                return e && (e = x(e) ? e.split(" ") : S(e) ? e : [], o(e, function (e) {
                    e && (r = !0, t[e] = n)
                })), r
            }

            function a() {
                o(e, function (e) {
                    var n = t.get(e);
                    if (n) {
                        var r = Yt(e.attr("class")), i = "", a = "";
                        o(n, function (t, e) {
                            t !== !!r[e] && (t ? i += (i.length ? " " : "") + e : a += (a.length ? " " : "") + e)
                        }), o(e, function (t) {
                            i && Dt(t, i), a && Tt(t, a)
                        }), t.delete(e)
                    }
                }), e.length = 0
            }

            return {
                enabled: d, on: d, off: d, pin: d, push: function (o, s, u, c) {
                    return c && c(), u = u || {}, u.from && o.css(u.from), u.to && o.css(u.to), (u.addClass || u.removeClass) && (s = u.addClass, c = u.removeClass, u = t.get(o) || {}, s = i(u, s, !0), c = i(u, c, !1), (s || c) && (t.set(o, u), e.push(o), 1 === e.length && r.$$postDigest(a))), o = new n, o.complete(), o
                }
            }
        }]
    }, mi = ["$provide", function (t) {
        var e = this, n = null, r = null;
        this.$$registeredAnimations = Object.create(null), this.register = function (n, r) {
            if (n && "." !== n.charAt(0)) throw pi("notcsel", n);
            var i = n + "-animation";
            e.$$registeredAnimations[n.substr(1)] = i, t.factory(i, r)
        }, this.customFilter = function (t) {
            return 1 === arguments.length && (r = A(t) ? t : null), r
        }, this.classNameFilter = function (t) {
            if (1 === arguments.length && (n = t instanceof RegExp ? t : null) && /[(\s|\/)]ng-animate[(\s|\/)]/.test(n.toString())) throw n = null, pi("nongcls", "ng-animate");
            return n
        }, this.$get = ["$$animateQueue", function (t) {
            function e(t, e, n) {
                if (n) {
                    var r;
                    t:{
                        for (r = 0; r < n.length; r++) {
                            var i = n[r];
                            if (1 === i.nodeType) {
                                r = i;
                                break t
                            }
                        }
                        r = void 0
                    }
                    !r || r.parentNode || r.previousElementSibling || (n = null)
                }
                n ? n.after(t) : e.prepend(t)
            }

            return {
                on: t.on, off: t.off, pin: t.pin, enabled: t.enabled, cancel: function (t) {
                    t.cancel && t.cancel()
                }, enter: function (n, r, i, o) {
                    return r = r && pr(r), i = i && pr(i), r = r || i.parent(), e(n, r, i), t.push(n, "enter", Qt(o))
                }, move: function (n, r, i, o) {
                    return r = r && pr(r), i = i && pr(i), r = r || i.parent(), e(n, r, i), t.push(n, "move", Qt(o))
                }, leave: function (e, n) {
                    return t.push(e, "leave", Qt(n), function () {
                        e.remove()
                    })
                }, addClass: function (e, n, r) {
                    return r = Qt(r), r.addClass = Zt(r.addclass, n), t.push(e, "addClass", r)
                }, removeClass: function (e, n, r) {
                    return r = Qt(r), r.removeClass = Zt(r.removeClass, n), t.push(e, "removeClass", r)
                }, setClass: function (e, n, r, i) {
                    return i = Qt(i), i.addClass = Zt(i.addClass, n), i.removeClass = Zt(i.removeClass, r), t.push(e, "setClass", i)
                }, animate: function (e, n, r, i, o) {
                    return o = Qt(o), o.from = o.from ? l(o.from, n) : n, o.to = o.to ? l(o.to, r) : r, o.tempClasses = Zt(o.tempClasses, i || "ng-inline-animate"), t.push(e, "animate", o)
                }
            }
        }]
    }], vi = function () {
        this.$get = ["$$rAF", function (t) {
            function e(e) {
                n.push(e), 1 < n.length || t(function () {
                    for (var t = 0; t < n.length; t++) n[t]();
                    n = []
                })
            }

            var n = [];
            return function () {
                var t = !1;
                return e(function () {
                    t = !0
                }), function (n) {
                    t ? n() : e(n)
                }
            }
        }]
    }, gi = function () {
        this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function (t, e, n, r, i) {
            function a(t) {
                this.setHost(t);
                var e = n();
                this._doneCallbacks = [], this._tick = function (t) {
                    r() ? i(t, 0, !1) : e(t)
                }, this._state = 0
            }

            return a.chain = function (t, e) {
                function n() {
                    r === t.length ? e(!0) : t[r](function (t) {
                        !1 === t ? e(!1) : (r++, n())
                    })
                }

                var r = 0;
                n()
            }, a.all = function (t, e) {
                function n(n) {
                    i = i && n, ++r === t.length && e(i)
                }

                var r = 0, i = !0;
                o(t, function (t) {
                    t.done(n)
                })
            }, a.prototype = {
                setHost: function (t) {
                    this.host = t || {}
                }, done: function (t) {
                    2 === this._state ? t() : this._doneCallbacks.push(t)
                }, progress: d, getPromise: function () {
                    if (!this.promise) {
                        var e = this;
                        this.promise = t(function (t, n) {
                            e.done(function (e) {
                                !1 === e ? n() : t()
                            })
                        })
                    }
                    return this.promise
                }, then: function (t, e) {
                    return this.getPromise().then(t, e)
                }, catch: function (t) {
                    return this.getPromise().catch(t)
                }, finally: function (t) {
                    return this.getPromise().finally(t)
                }, pause: function () {
                    this.host.pause && this.host.pause()
                }, resume: function () {
                    this.host.resume && this.host.resume()
                }, end: function () {
                    this.host.end && this.host.end(), this._resolve(!0)
                }, cancel: function () {
                    this.host.cancel && this.host.cancel(), this._resolve(!1)
                }, complete: function (t) {
                    var e = this;
                    0 === e._state && (e._state = 1, e._tick(function () {
                        e._resolve(t)
                    }))
                }, _resolve: function (t) {
                    2 !== this._state && (o(this._doneCallbacks, function (e) {
                        e(t)
                    }), this._doneCallbacks.length = 0, this._state = 2)
                }
            }, a
        }]
    }, yi = function () {
        this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (t, e, n) {
            return function (e, r) {
                function i() {
                    return t(function () {
                        o.addClass && (e.addClass(o.addClass), o.addClass = null), o.removeClass && (e.removeClass(o.removeClass), o.removeClass = null), o.to && (e.css(o.to), o.to = null), a || s.complete(), a = !0
                    }), s
                }

                var o = r || {};
                o.$$prepared || (o = R(o)), o.cleanupStyles && (o.from = o.to = null), o.from && (e.css(o.from), o.from = null);
                var a, s = new n;
                return {start: i, end: i}
            }
        }]
    }, bi = r("$compile"), wi = new function () {
    };
    re.$inject = ["$provide", "$$sanitizeUriProvider"], ie.prototype.isFirstChange = function () {
        return this.previousValue === wi
    };
    var xi = /^((?:x|data)[:\-_])/i, Ci = /[:\-_]+(.)/g, ki = r("$controller"), Si = /^(\S+)(\s+as\s+([\w$]+))?$/,
        Ei = function () {
            this.$get = ["$document", function (t) {
                return function (e) {
                    return e ? !e.nodeType && e instanceof pr && (e = e[0]) : e = t[0].body, e.offsetWidth + 1
                }
            }]
        }, Ai = "application/json", Oi = {"Content-Type": Ai + ";charset=utf-8"}, Mi = /^\[|^\{(?!\{)/,
        Ti = {"[": /]$/, "{": /}$/}, Di = /^\)]\}',?\n/, Vi = r("$http"),
        Ni = Ar.$interpolateMinErr = r("$interpolate");
    Ni.throwNoconcat = function (t) {
        throw Ni("noconcat", t)
    }, Ni.interr = function (t, e) {
        return Ni("interr", t, e.toString())
    };
    var ji = r("$interval"), Pi = function () {
            this.$get = function () {
                function t(t) {
                    var e = function (t) {
                        e.data = t, e.called = !0
                    };
                    return e.id = t, e
                }

                var e = Ar.callbacks, n = {};
                return {
                    createCallback: function (r) {
                        r = "_" + (e.$$counter++).toString(36);
                        var i = "angular.callbacks." + r, o = t(r);
                        return n[i] = e[r] = o, i
                    }, wasCalled: function (t) {
                        return n[t].called
                    }, getResponse: function (t) {
                        return n[t].data
                    }, removeCallback: function (t) {
                        delete e[n[t].id], delete n[t]
                    }
                }
            }
        }, Ii = /^([^?#]*)(\?([^#]*))?(#(.*))?$/, Ri = {http: 80, https: 443, ftp: 21}, Ui = r("$location"),
        Li = /^\s*[\\\/]{2,}/, Fi = {
            $$absUrl: "", $$html5: !1, $$replace: !1, $$compose: function () {
                for (var t = this.$$path, e = this.$$hash, n = Y(this.$$search), e = e ? "#" + Q(e) : "", t = t.split("/"), r = t.length; r--;) t[r] = Q(t[r].replace(/%2F/g, "/"));
                this.$$url = t.join("/") + (n ? "?" + n : "") + e, this.$$absUrl = this.$$normalizeUrl(this.$$url), this.$$urlUpdatedByLocation = !0
            }, absUrl: Pe("$$absUrl"), url: function (t) {
                if (g(t)) return this.$$url;
                var e = Ii.exec(t);
                return (e[1] || "" === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === t) && this.search(e[3] || ""), this.hash(e[5] || ""), this
            }, protocol: Pe("$$protocol"), host: Pe("$$host"), port: Pe("$$port"), path: Ie("$$path", function (t) {
                return t = null !== t ? t.toString() : "", "/" === t.charAt(0) ? t : "/" + t
            }), search: function (t, e) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (x(t) || C(t)) t = t.toString(), this.$$search = Z(t); else {
                            if (!b(t)) throw Ui("isrcharg");
                            t = R(t, {}), o(t, function (e, n) {
                                null == e && delete t[n]
                            }), this.$$search = t
                        }
                        break;
                    default:
                        g(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
                }
                return this.$$compose(), this
            }, hash: Ie("$$hash", function (t) {
                return null !== t ? t.toString() : ""
            }), replace: function () {
                return this.$$replace = !0, this
            }
        };
    o([je, Ne, Ve], function (t) {
        t.prototype = Object.create(Fi), t.prototype.state = function (e) {
            if (!arguments.length) return this.$$state;
            if (t !== Ve || !this.$$html5) throw Ui("nostate");
            return this.$$state = g(e) ? null : e, this.$$urlUpdatedByLocation = !0, this
        }
    });
    var qi = r("$parse"), _i = {}.constructor.prototype.valueOf, Hi = ft();
    o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (t) {
        Hi[t] = !0
    });
    var Bi = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, zi = function (t) {
        this.options = t
    };
    zi.prototype = {
        constructor: zi, lex: function (t) {
            for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) if ('"' === (t = this.text.charAt(this.index)) || "'" === t) this.readString(t); else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent(); else if (this.is(t, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: t
            }), this.index++; else if (this.isWhitespace(t)) this.index++; else {
                var e = t + this.peek(), n = e + this.peek(2), r = Hi[e], i = Hi[n];
                Hi[t] || r || i ? (t = i ? n : r ? e : t, this.tokens.push({
                    index: this.index,
                    text: t,
                    operator: !0
                }), this.index += t.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        }, is: function (t, e) {
            return -1 !== e.indexOf(t)
        }, peek: function (t) {
            return t = t || 1, this.index + t < this.text.length && this.text.charAt(this.index + t)
        }, isNumber: function (t) {
            return "0" <= t && "9" >= t && "string" == typeof t
        }, isWhitespace: function (t) {
            return " " === t || "\r" === t || "\t" === t || "\n" === t || "\v" === t || " " === t
        }, isIdentifierStart: function (t) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(t, this.codePointAt(t)) : this.isValidIdentifierStart(t)
        }, isValidIdentifierStart: function (t) {
            return "a" <= t && "z" >= t || "A" <= t && "Z" >= t || "_" === t || "$" === t
        }, isIdentifierContinue: function (t) {
            return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(t, this.codePointAt(t)) : this.isValidIdentifierContinue(t)
        }, isValidIdentifierContinue: function (t, e) {
            return this.isValidIdentifierStart(t, e) || this.isNumber(t)
        }, codePointAt: function (t) {
            return 1 === t.length ? t.charCodeAt(0) : (t.charCodeAt(0) << 10) + t.charCodeAt(1) - 56613888
        }, peekMultichar: function () {
            var t = this.text.charAt(this.index), e = this.peek();
            if (!e) return t;
            var n = t.charCodeAt(0), r = e.charCodeAt(0);
            return 55296 <= n && 56319 >= n && 56320 <= r && 57343 >= r ? t + e : t
        }, isExpOperator: function (t) {
            return "-" === t || "+" === t || this.isNumber(t)
        }, throwError: function (t, e, n) {
            throw n = n || this.index, e = y(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n, qi("lexerr", t, e, this.text)
        }, readNumber: function () {
            for (var t = "", e = this.index; this.index < this.text.length;) {
                var n = yr(this.text.charAt(this.index));
                if ("." === n || this.isNumber(n)) t += n; else {
                    var r = this.peek();
                    if ("e" === n && this.isExpOperator(r)) t += n; else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" === t.charAt(t.length - 1)) t += n; else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" !== t.charAt(t.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({index: e, text: t, constant: !0, value: Number(t)})
        }, readIdent: function () {
            var t = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                var e = this.peekMultichar();
                if (!this.isIdentifierContinue(e)) break;
                this.index += e.length
            }
            this.tokens.push({index: t, text: this.text.slice(t, this.index), identifier: !0})
        }, readString: function (t) {
            var e = this.index;
            this.index++;
            for (var n = "", r = t, i = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index), r = r + o;
                if (i) "u" === o ? (i = this.text.substring(this.index + 1, this.index + 5), i.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + i + "]"), this.index += 4, n += String.fromCharCode(parseInt(i, 16))) : n += Bi[o] || o, i = !1; else if ("\\" === o) i = !0; else {
                    if (o === t) return this.index++, void this.tokens.push({
                        index: e,
                        text: r,
                        constant: !0,
                        value: n
                    });
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", e)
        }
    };
    var Wi = function (t, e) {
        this.lexer = t, this.options = e
    };
    Wi.Program = "Program", Wi.ExpressionStatement = "ExpressionStatement", Wi.AssignmentExpression = "AssignmentExpression", Wi.ConditionalExpression = "ConditionalExpression", Wi.LogicalExpression = "LogicalExpression", Wi.BinaryExpression = "BinaryExpression", Wi.UnaryExpression = "UnaryExpression", Wi.CallExpression = "CallExpression", Wi.MemberExpression = "MemberExpression", Wi.Identifier = "Identifier", Wi.Literal = "Literal", Wi.ArrayExpression = "ArrayExpression", Wi.Property = "Property", Wi.ObjectExpression = "ObjectExpression", Wi.ThisExpression = "ThisExpression", Wi.LocalsExpression = "LocalsExpression", Wi.NGValueParameter = "NGValueParameter", Wi.prototype = {
        ast: function (t) {
            return this.text = t, this.tokens = this.lexer.lex(t), t = this.program(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
        }, program: function () {
            for (var t = []; ;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && t.push(this.expressionStatement()), !this.expect(";")) return {
                type: Wi.Program,
                body: t
            }
        }, expressionStatement: function () {
            return {type: Wi.ExpressionStatement, expression: this.filterChain()}
        }, filterChain: function () {
            for (var t = this.expression(); this.expect("|");) t = this.filter(t);
            return t
        }, expression: function () {
            return this.assignment()
        }, assignment: function () {
            var t = this.ternary();
            if (this.expect("=")) {
                if (!ze(t)) throw qi("lval");
                t = {type: Wi.AssignmentExpression, left: t, right: this.assignment(), operator: "="}
            }
            return t
        }, ternary: function () {
            var t, e, n = this.logicalOR();
            return this.expect("?") && (t = this.expression(), this.consume(":")) ? (e = this.expression(), {
                type: Wi.ConditionalExpression,
                test: n,
                alternate: t,
                consequent: e
            }) : n
        }, logicalOR: function () {
            for (var t = this.logicalAND(); this.expect("||");) t = {
                type: Wi.LogicalExpression,
                operator: "||",
                left: t,
                right: this.logicalAND()
            };
            return t
        }, logicalAND: function () {
            for (var t = this.equality(); this.expect("&&");) t = {
                type: Wi.LogicalExpression,
                operator: "&&",
                left: t,
                right: this.equality()
            };
            return t
        }, equality: function () {
            for (var t, e = this.relational(); t = this.expect("==", "!=", "===", "!==");) e = {
                type: Wi.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.relational()
            };
            return e
        }, relational: function () {
            for (var t, e = this.additive(); t = this.expect("<", ">", "<=", ">=");) e = {
                type: Wi.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.additive()
            };
            return e
        }, additive: function () {
            for (var t, e = this.multiplicative(); t = this.expect("+", "-");) e = {
                type: Wi.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.multiplicative()
            };
            return e
        }, multiplicative: function () {
            for (var t, e = this.unary(); t = this.expect("*", "/", "%");) e = {
                type: Wi.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.unary()
            };
            return e
        }, unary: function () {
            var t;
            return (t = this.expect("+", "-", "!")) ? {
                type: Wi.UnaryExpression,
                operator: t.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        }, primary: function () {
            var t;
            this.expect("(") ? (t = this.filterChain(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? t = R(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? t = {
                type: Wi.Literal,
                value: this.options.literals[this.consume().text]
            } : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var e; e = this.expect("(", "[", ".");) "(" === e.text ? (t = {
                type: Wi.CallExpression,
                callee: t,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === e.text ? (t = {
                type: Wi.MemberExpression,
                object: t,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === e.text ? t = {
                type: Wi.MemberExpression,
                object: t,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return t
        }, filter: function (t) {
            t = [t];
            for (var e = {
                type: Wi.CallExpression,
                callee: this.identifier(),
                arguments: t,
                filter: !0
            }; this.expect(":");) t.push(this.expression());
            return e
        }, parseArguments: function () {
            var t = [];
            if (")" !== this.peekToken().text) do {
                t.push(this.filterChain())
            } while (this.expect(","));
            return t
        }, identifier: function () {
            var t = this.consume();
            return t.identifier || this.throwError("is not a valid identifier", t), {type: Wi.Identifier, name: t.text}
        }, constant: function () {
            return {type: Wi.Literal, value: this.consume().value}
        }, arrayDeclaration: function () {
            var t = [];
            if ("]" !== this.peekToken().text) do {
                if (this.peek("]")) break;
                t.push(this.expression())
            } while (this.expect(","));
            return this.consume("]"), {type: Wi.ArrayExpression, elements: t}
        }, object: function () {
            var t, e = [];
            if ("}" !== this.peekToken().text) do {
                if (this.peek("}")) break;
                t = {
                    type: Wi.Property,
                    kind: "init"
                }, this.peek().constant ? (t.key = this.constant(), t.computed = !1, this.consume(":"), t.value = this.expression()) : this.peek().identifier ? (t.key = this.identifier(), t.computed = !1, this.peek(":") ? (this.consume(":"), t.value = this.expression()) : t.value = t.key) : this.peek("[") ? (this.consume("["), t.key = this.expression(), this.consume("]"), t.computed = !0, this.consume(":"), t.value = this.expression()) : this.throwError("invalid key", this.peek()), e.push(t)
            } while (this.expect(","));
            return this.consume("}"), {type: Wi.ObjectExpression, properties: e}
        }, throwError: function (t, e) {
            throw qi("syntax", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
        }, consume: function (t) {
            if (0 === this.tokens.length) throw qi("ueoe", this.text);
            var e = this.expect(t);
            return e || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), e
        }, peekToken: function () {
            if (0 === this.tokens.length) throw qi("ueoe", this.text);
            return this.tokens[0]
        }, peek: function (t, e, n, r) {
            return this.peekAhead(0, t, e, n, r)
        }, peekAhead: function (t, e, n, r, i) {
            if (this.tokens.length > t) {
                t = this.tokens[t];
                var o = t.text;
                if (o === e || o === n || o === r || o === i || !(e || n || r || i)) return t
            }
            return !1
        }, expect: function (t, e, n, r) {
            return !!(t = this.peek(t, e, n, r)) && (this.tokens.shift(), t)
        }, selfReferential: {this: {type: Wi.ThisExpression}, $locals: {type: Wi.LocalsExpression}}
    };
    var Gi = 2;
    Ge.prototype = {
        compile: function (t) {
            var e = this;
            this.state = {
                nextId: 0,
                filters: {},
                fn: {vars: [], body: [], own: {}},
                assign: {vars: [], body: [], own: {}},
                inputs: []
            }, He(t, e.$filter);
            var n, r = "";
            return this.stage = "assign", (n = We(t)) && (this.state.computing = "assign", r = this.nextId(), this.recurse(n, r), this.return_(r), r = "fn.assign=" + this.generateFunction("assign", "s,v,l")), n = Be(t.body), e.stage = "inputs", o(n, function (t, n) {
                var r = "fn" + n;
                e.state[r] = {vars: [], body: [], own: {}}, e.state.computing = r;
                var i = e.nextId();
                e.recurse(t, i), e.return_(i), e.state.inputs.push({name: r, isPure: t.isPure}), t.watchId = n
            }), this.state.computing = "fn", this.stage = "main", this.recurse(t), t = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + r + this.watchFns() + "return fn;", t = new Function("$filter", "getStringValue", "ifDefined", "plus", t)(this.$filter, Le, Fe, qe), this.state = this.stage = void 0, t
        }, USE: "use", STRICT: "strict", watchFns: function () {
            var t = [], e = this.state.inputs, n = this;
            return o(e, function (e) {
                t.push("var " + e.name + "=" + n.generateFunction(e.name, "s")), e.isPure && t.push(e.name, ".isPure=" + JSON.stringify(e.isPure) + ";")
            }), e.length && t.push("fn.inputs=[" + e.map(function (t) {
                return t.name
            }).join(",") + "];"), t.join("")
        }, generateFunction: function (t, e) {
            return "function(" + e + "){" + this.varsPrefix(t) + this.body(t) + "};"
        }, filterPrefix: function () {
            var t = [], e = this;
            return o(this.state.filters, function (n, r) {
                t.push(n + "=$filter(" + e.escape(r) + ")")
            }), t.length ? "var " + t.join(",") + ";" : ""
        }, varsPrefix: function (t) {
            return this.state[t].vars.length ? "var " + this.state[t].vars.join(",") + ";" : ""
        }, body: function (t) {
            return this.state[t].body.join("")
        }, recurse: function (t, e, n, r, i, a) {
            var s, u, c, l, f, h = this;
            if (r = r || d, !a && y(t.watchId)) e = e || this.nextId(), this.if_("i", this.lazyAssign(e, this.computedMember("i", t.watchId)), this.lazyRecurse(t, e, n, r, i, !0)); else switch (t.type) {
                case Wi.Program:
                    o(t.body, function (e, n) {
                        h.recurse(e.expression, void 0, void 0, function (t) {
                            u = t
                        }), n !== t.body.length - 1 ? h.current().body.push(u, ";") : h.return_(u)
                    });
                    break;
                case Wi.Literal:
                    l = this.escape(t.value), this.assign(e, l), r(e || l);
                    break;
                case Wi.UnaryExpression:
                    this.recurse(t.argument, void 0, void 0, function (t) {
                        u = t
                    }), l = t.operator + "(" + this.ifDefined(u, 0) + ")", this.assign(e, l), r(l);
                    break;
                case Wi.BinaryExpression:
                    this.recurse(t.left, void 0, void 0, function (t) {
                        s = t
                    }), this.recurse(t.right, void 0, void 0, function (t) {
                        u = t
                    }), l = "+" === t.operator ? this.plus(s, u) : "-" === t.operator ? this.ifDefined(s, 0) + t.operator + this.ifDefined(u, 0) : "(" + s + ")" + t.operator + "(" + u + ")", this.assign(e, l), r(l);
                    break;
                case Wi.LogicalExpression:
                    e = e || this.nextId(), h.recurse(t.left, e), h.if_("&&" === t.operator ? e : h.not(e), h.lazyRecurse(t.right, e)), r(e);
                    break;
                case Wi.ConditionalExpression:
                    e = e || this.nextId(), h.recurse(t.test, e), h.if_(e, h.lazyRecurse(t.alternate, e), h.lazyRecurse(t.consequent, e)), r(e);
                    break;
                case Wi.Identifier:
                    e = e || this.nextId(), n && (n.context = "inputs" === h.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", t.name) + "?l:s"), n.computed = !1, n.name = t.name), h.if_("inputs" === h.stage || h.not(h.getHasOwnProperty("l", t.name)), function () {
                        h.if_("inputs" === h.stage || "s", function () {
                            i && 1 !== i && h.if_(h.isNull(h.nonComputedMember("s", t.name)), h.lazyAssign(h.nonComputedMember("s", t.name), "{}")), h.assign(e, h.nonComputedMember("s", t.name))
                        })
                    }, e && h.lazyAssign(e, h.nonComputedMember("l", t.name))), r(e);
                    break;
                case Wi.MemberExpression:
                    s = n && (n.context = this.nextId()) || this.nextId(), e = e || this.nextId(), h.recurse(t.object, s, void 0, function () {
                        h.if_(h.notNull(s), function () {
                            t.computed ? (u = h.nextId(), h.recurse(t.property, u), h.getStringValue(u), i && 1 !== i && h.if_(h.not(h.computedMember(s, u)), h.lazyAssign(h.computedMember(s, u), "{}")), l = h.computedMember(s, u), h.assign(e, l), n && (n.computed = !0, n.name = u)) : (i && 1 !== i && h.if_(h.isNull(h.nonComputedMember(s, t.property.name)), h.lazyAssign(h.nonComputedMember(s, t.property.name), "{}")), l = h.nonComputedMember(s, t.property.name), h.assign(e, l), n && (n.computed = !1, n.name = t.property.name))
                        }, function () {
                            h.assign(e, "undefined")
                        }), r(e)
                    }, !!i);
                    break;
                case Wi.CallExpression:
                    e = e || this.nextId(), t.filter ? (u = h.filter(t.callee.name), c = [], o(t.arguments, function (t) {
                        var e = h.nextId();
                        h.recurse(t, e), c.push(e)
                    }), l = u + "(" + c.join(",") + ")", h.assign(e, l), r(e)) : (u = h.nextId(), s = {}, c = [], h.recurse(t.callee, u, s, function () {
                        h.if_(h.notNull(u), function () {
                            o(t.arguments, function (e) {
                                h.recurse(e, t.constant ? void 0 : h.nextId(), void 0, function (t) {
                                    c.push(t)
                                })
                            }), l = s.name ? h.member(s.context, s.name, s.computed) + "(" + c.join(",") + ")" : u + "(" + c.join(",") + ")", h.assign(e, l)
                        }, function () {
                            h.assign(e, "undefined")
                        }), r(e)
                    }));
                    break;
                case Wi.AssignmentExpression:
                    u = this.nextId(), s = {}, this.recurse(t.left, void 0, s, function () {
                        h.if_(h.notNull(s.context), function () {
                            h.recurse(t.right, u), l = h.member(s.context, s.name, s.computed) + t.operator + u, h.assign(e, l), r(e || l)
                        })
                    }, 1);
                    break;
                case Wi.ArrayExpression:
                    c = [], o(t.elements, function (e) {
                        h.recurse(e, t.constant ? void 0 : h.nextId(), void 0, function (t) {
                            c.push(t)
                        })
                    }), l = "[" + c.join(",") + "]", this.assign(e, l), r(e || l);
                    break;
                case Wi.ObjectExpression:
                    c = [], f = !1, o(t.properties, function (t) {
                        t.computed && (f = !0)
                    }), f ? (e = e || this.nextId(), this.assign(e, "{}"), o(t.properties, function (t) {
                        t.computed ? (s = h.nextId(), h.recurse(t.key, s)) : s = t.key.type === Wi.Identifier ? t.key.name : "" + t.key.value, u = h.nextId(), h.recurse(t.value, u), h.assign(h.member(e, s, t.computed), u)
                    })) : (o(t.properties, function (e) {
                        h.recurse(e.value, t.constant ? void 0 : h.nextId(), void 0, function (t) {
                            c.push(h.escape(e.key.type === Wi.Identifier ? e.key.name : "" + e.key.value) + ":" + t)
                        })
                    }), l = "{" + c.join(",") + "}", this.assign(e, l)), r(e || l);
                    break;
                case Wi.ThisExpression:
                    this.assign(e, "s"), r(e || "s");
                    break;
                case Wi.LocalsExpression:
                    this.assign(e, "l"), r(e || "l");
                    break;
                case Wi.NGValueParameter:
                    this.assign(e, "v"), r(e || "v")
            }
        }, getHasOwnProperty: function (t, e) {
            var n = t + "." + e, r = this.current().own;
            return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, t + "&&(" + this.escape(e) + " in " + t + ")")), r[n]
        }, assign: function (t, e) {
            if (t) return this.current().body.push(t, "=", e, ";"), t
        }, filter: function (t) {
            return this.state.filters.hasOwnProperty(t) || (this.state.filters[t] = this.nextId(!0)), this.state.filters[t]
        }, ifDefined: function (t, e) {
            return "ifDefined(" + t + "," + this.escape(e) + ")"
        }, plus: function (t, e) {
            return "plus(" + t + "," + e + ")"
        }, return_: function (t) {
            this.current().body.push("return ", t, ";")
        }, if_: function (t, e, n) {
            if (!0 === t) e(); else {
                var r = this.current().body;
                r.push("if(", t, "){"), e(), r.push("}"), n && (r.push("else{"), n(), r.push("}"))
            }
        },
        not: function (t) {
            return "!(" + t + ")"
        }, isNull: function (t) {
            return t + "==null"
        }, notNull: function (t) {
            return t + "!=null"
        }, nonComputedMember: function (t, e) {
            var n = /[^$_a-zA-Z0-9]/g;
            return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? t + "." + e : t + '["' + e.replace(n, this.stringEscapeFn) + '"]'
        }, computedMember: function (t, e) {
            return t + "[" + e + "]"
        }, member: function (t, e, n) {
            return n ? this.computedMember(t, e) : this.nonComputedMember(t, e)
        }, getStringValue: function (t) {
            this.assign(t, "getStringValue(" + t + ")")
        }, lazyRecurse: function (t, e, n, r, i, o) {
            var a = this;
            return function () {
                a.recurse(t, e, n, r, i, o)
            }
        }, lazyAssign: function (t, e) {
            var n = this;
            return function () {
                n.assign(t, e)
            }
        }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function (t) {
            return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        }, escape: function (t) {
            if (x(t)) return "'" + t.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (C(t)) return t.toString();
            if (!0 === t) return "true";
            if (!1 === t) return "false";
            if (null === t) return "null";
            if (void 0 === t) return "undefined";
            throw qi("esc")
        }, nextId: function (t, e) {
            var n = "v" + this.state.nextId++;
            return t || this.current().vars.push(n + (e ? "=" + e : "")), n
        }, current: function () {
            return this.state[this.state.computing]
        }
    }, Ke.prototype = {
        compile: function (t) {
            var e = this;
            He(t, e.$filter);
            var n, r;
            (n = We(t)) && (r = this.recurse(n)), n = Be(t.body);
            var i;
            n && (i = [], o(n, function (t, n) {
                var r = e.recurse(t);
                r.isPure = t.isPure, t.input = r, i.push(r), t.watchId = n
            }));
            var a = [];
            return o(t.body, function (t) {
                a.push(e.recurse(t.expression))
            }), t = 0 === t.body.length ? d : 1 === t.body.length ? a[0] : function (t, e) {
                var n;
                return o(a, function (r) {
                    n = r(t, e)
                }), n
            }, r && (t.assign = function (t, e, n) {
                return r(t, n, e)
            }), i && (t.inputs = i), t
        }, recurse: function (t, e, n) {
            var r, i, a, s = this;
            if (t.input) return this.inputs(t.input, t.watchId);
            switch (t.type) {
                case Wi.Literal:
                    return this.value(t.value, e);
                case Wi.UnaryExpression:
                    return i = this.recurse(t.argument), this["unary" + t.operator](i, e);
                case Wi.BinaryExpression:
                case Wi.LogicalExpression:
                    return r = this.recurse(t.left), i = this.recurse(t.right), this["binary" + t.operator](r, i, e);
                case Wi.ConditionalExpression:
                    return this["ternary?:"](this.recurse(t.test), this.recurse(t.alternate), this.recurse(t.consequent), e);
                case Wi.Identifier:
                    return s.identifier(t.name, e, n);
                case Wi.MemberExpression:
                    return r = this.recurse(t.object, !1, !!n), t.computed || (i = t.property.name), t.computed && (i = this.recurse(t.property)), t.computed ? this.computedMember(r, i, e, n) : this.nonComputedMember(r, i, e, n);
                case Wi.CallExpression:
                    return a = [], o(t.arguments, function (t) {
                        a.push(s.recurse(t))
                    }), t.filter && (i = this.$filter(t.callee.name)), t.filter || (i = this.recurse(t.callee, !0)), t.filter ? function (t, n, r, o) {
                        for (var s = [], u = 0; u < a.length; ++u) s.push(a[u](t, n, r, o));
                        return t = i.apply(void 0, s, o), e ? {context: void 0, name: void 0, value: t} : t
                    } : function (t, n, r, o) {
                        var s, u = i(t, n, r, o);
                        if (null != u.value) {
                            s = [];
                            for (var c = 0; c < a.length; ++c) s.push(a[c](t, n, r, o));
                            s = u.value.apply(u.context, s)
                        }
                        return e ? {value: s} : s
                    };
                case Wi.AssignmentExpression:
                    return r = this.recurse(t.left, !0, 1), i = this.recurse(t.right), function (t, n, o, a) {
                        var s = r(t, n, o, a);
                        return t = i(t, n, o, a), s.context[s.name] = t, e ? {value: t} : t
                    };
                case Wi.ArrayExpression:
                    return a = [], o(t.elements, function (t) {
                        a.push(s.recurse(t))
                    }), function (t, n, r, i) {
                        for (var o = [], s = 0; s < a.length; ++s) o.push(a[s](t, n, r, i));
                        return e ? {value: o} : o
                    };
                case Wi.ObjectExpression:
                    return a = [], o(t.properties, function (t) {
                        t.computed ? a.push({
                            key: s.recurse(t.key),
                            computed: !0,
                            value: s.recurse(t.value)
                        }) : a.push({
                            key: t.key.type === Wi.Identifier ? t.key.name : "" + t.key.value,
                            computed: !1,
                            value: s.recurse(t.value)
                        })
                    }), function (t, n, r, i) {
                        for (var o = {}, s = 0; s < a.length; ++s) a[s].computed ? o[a[s].key(t, n, r, i)] = a[s].value(t, n, r, i) : o[a[s].key] = a[s].value(t, n, r, i);
                        return e ? {value: o} : o
                    };
                case Wi.ThisExpression:
                    return function (t) {
                        return e ? {value: t} : t
                    };
                case Wi.LocalsExpression:
                    return function (t, n) {
                        return e ? {value: n} : n
                    };
                case Wi.NGValueParameter:
                    return function (t, n, r) {
                        return e ? {value: r} : r
                    }
            }
        }, "unary+": function (t, e) {
            return function (n, r, i, o) {
                return n = t(n, r, i, o), n = y(n) ? +n : 0, e ? {value: n} : n
            }
        }, "unary-": function (t, e) {
            return function (n, r, i, o) {
                return n = t(n, r, i, o), n = y(n) ? -n : -0, e ? {value: n} : n
            }
        }, "unary!": function (t, e) {
            return function (n, r, i, o) {
                return n = !t(n, r, i, o), e ? {value: n} : n
            }
        }, "binary+": function (t, e, n) {
            return function (r, i, o, a) {
                var s = t(r, i, o, a);
                return r = e(r, i, o, a), s = qe(s, r), n ? {value: s} : s
            }
        }, "binary-": function (t, e, n) {
            return function (r, i, o, a) {
                var s = t(r, i, o, a);
                return r = e(r, i, o, a), s = (y(s) ? s : 0) - (y(r) ? r : 0), n ? {value: s} : s
            }
        }, "binary*": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) * e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary/": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) / e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary%": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) % e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary===": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) === e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary!==": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) !== e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary==": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) == e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary!=": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) != e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary<": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) < e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary>": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) > e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary<=": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) <= e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary>=": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) >= e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary&&": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) && e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary||": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) || e(r, i, o, a), n ? {value: r} : r
            }
        }, "ternary?:": function (t, e, n, r) {
            return function (i, o, a, s) {
                return i = t(i, o, a, s) ? e(i, o, a, s) : n(i, o, a, s), r ? {value: i} : i
            }
        }, value: function (t, e) {
            return function () {
                return e ? {context: void 0, name: void 0, value: t} : t
            }
        }, identifier: function (t, e, n) {
            return function (r, i, o, a) {
                return r = i && t in i ? i : r, n && 1 !== n && r && null == r[t] && (r[t] = {}), i = r ? r[t] : void 0, e ? {
                    context: r,
                    name: t,
                    value: i
                } : i
            }
        }, computedMember: function (t, e, n, r) {
            return function (i, o, a, s) {
                var u, c, l = t(i, o, a, s);
                return null != l && (u = e(i, o, a, s), u += "", r && 1 !== r && l && !l[u] && (l[u] = {}), c = l[u]), n ? {
                    context: l,
                    name: u,
                    value: c
                } : c
            }
        }, nonComputedMember: function (t, e, n, r) {
            return function (i, o, a, s) {
                return i = t(i, o, a, s), r && 1 !== r && i && null == i[e] && (i[e] = {}), o = null != i ? i[e] : void 0, n ? {
                    context: i,
                    name: e,
                    value: o
                } : o
            }
        }, inputs: function (t, e) {
            return function (n, r, i, o) {
                return o ? o[e] : t(n, r, i)
            }
        }
    }, Je.prototype = {
        constructor: Je, parse: function (t) {
            t = this.getAst(t);
            var e = this.astCompiler.compile(t.ast), n = t.ast;
            return e.literal = 0 === n.body.length || 1 === n.body.length && (n.body[0].expression.type === Wi.Literal || n.body[0].expression.type === Wi.ArrayExpression || n.body[0].expression.type === Wi.ObjectExpression), e.constant = t.ast.constant, e.oneTime = t.oneTime, e
        }, getAst: function (t) {
            var e = !1;
            return t = t.trim(), ":" === t.charAt(0) && ":" === t.charAt(1) && (e = !0, t = t.substring(2)), {
                ast: this.ast.ast(t),
                oneTime: e
            }
        }
    };
    var Ki, Ji = r("$sce"),
        Zi = {HTML: "html", CSS: "css", MEDIA_URL: "mediaUrl", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"},
        Yi = /_([a-z])/g, Qi = r("$templateRequest"), Xi = r("$timeout"), to = t.document.createElement("a"),
        eo = $n(t.location.href);
    to.href = "http://[::1]";
    var no = "[::1]" === to.hostname;
    yn.$inject = ["$document"], wn.$inject = ["$provide"];
    var ro = 22, io = ".", oo = "0";
    En.$inject = ["$locale"], An.$inject = ["$locale"];
    var ao = {
            yyyy: Vn("FullYear", 4, 0, !1, !0),
            yy: Vn("FullYear", 2, 0, !0, !0),
            y: Vn("FullYear", 1, 0, !1, !0),
            MMMM: Nn("Month"),
            MMM: Nn("Month", !0),
            MM: Vn("Month", 2, 1),
            M: Vn("Month", 1, 1),
            LLLL: Nn("Month", !1, !0),
            dd: Vn("Date", 2),
            d: Vn("Date", 1),
            HH: Vn("Hours", 2),
            H: Vn("Hours", 1),
            hh: Vn("Hours", 2, -12),
            h: Vn("Hours", 1, -12),
            mm: Vn("Minutes", 2),
            m: Vn("Minutes", 1),
            ss: Vn("Seconds", 2),
            s: Vn("Seconds", 1),
            sss: Vn("Milliseconds", 3),
            EEEE: Nn("Day"),
            EEE: Nn("Day", !0),
            a: function (t, e) {
                return 12 > t.getHours() ? e.AMPMS[0] : e.AMPMS[1]
            },
            Z: function (t, e, n) {
                return t = -1 * n, t = (0 <= t ? "+" : "") + (Dn(Math[0 < t ? "floor" : "ceil"](t / 60), 2) + Dn(Math.abs(t % 60), 2))
            },
            ww: Pn(2),
            w: Pn(1),
            G: In,
            GG: In,
            GGG: In,
            GGGG: function (t, e) {
                return 0 >= t.getFullYear() ? e.ERANAMES[0] : e.ERANAMES[1]
            }
        }, so = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
        uo = /^-?\d+$/;
    Rn.$inject = ["$locale"];
    var co = m(yr), lo = m(br);
    qn.$inject = ["$parse"];
    var fo = m({
        restrict: "E", compile: function (t, e) {
            if (!e.href && !e.xlinkHref) return function (t, e) {
                if ("a" === e[0].nodeName.toLowerCase()) {
                    var n = "[object SVGAnimatedString]" === kr.call(e.prop("href")) ? "xlink:href" : "href";
                    e.on("click", function (t) {
                        e.attr(n) || t.preventDefault()
                    })
                }
            }
        }
    }), ho = {};
    o(ei, function (t, e) {
        function n(t, n, i) {
            t.$watch(i[r], function (t) {
                i.$set(e, !!t)
            })
        }

        if ("multiple" !== t) {
            var r = oe("ng-" + e), i = n;
            "checked" === t && (i = function (t, e, i) {
                i.ngModel !== i[r] && n(t, e, i)
            }), ho[r] = function () {
                return {restrict: "A", priority: 100, link: i}
            }
        }
    }), o(ri, function (t, e) {
        ho[e] = function () {
            return {
                priority: 100, link: function (t, n, r) {
                    if ("ngPattern" === e && "/" === r.ngPattern.charAt(0) && (n = r.ngPattern.match(vr))) return void r.$set("ngPattern", new RegExp(n[1], n[2]));
                    t.$watch(r[e], function (t) {
                        r.$set(e, t)
                    })
                }
            }
        }
    }), o(["src", "srcset", "href"], function (t) {
        var e = oe("ng-" + t);
        ho[e] = ["$sce", function (n) {
            return {
                priority: 99, link: function (r, i, o) {
                    var a = t, s = t;
                    "href" === t && "[object SVGAnimatedString]" === kr.call(i.prop("href")) && (s = "xlinkHref", o.$attr[s] = "xlink:href", a = null), o.$set(e, n.getTrustedMediaUrl(o[e])), o.$observe(e, function (e) {
                        e ? (o.$set(s, e), hr && a && i.prop(a, o[s])) : "href" === t && o.$set(s, null)
                    })
                }
            }
        }]
    });
    var po = {
        $addControl: d, $getControls: m([]), $$renameControl: function (t, e) {
            t.$name = e
        }, $removeControl: d, $setValidity: d, $setDirty: d, $setPristine: d, $setSubmitted: d, $$setSubmitted: d
    };
    Hn.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"], Hn.prototype = {
        $rollbackViewValue: function () {
            o(this.$$controls, function (t) {
                t.$rollbackViewValue()
            })
        }, $commitViewValue: function () {
            o(this.$$controls, function (t) {
                t.$commitViewValue()
            })
        }, $addControl: function (t) {
            ut(t.$name, "input"), this.$$controls.push(t), t.$name && (this[t.$name] = t), t.$$parentForm = this
        }, $getControls: function () {
            return dt(this.$$controls)
        }, $$renameControl: function (t, e) {
            var n = t.$name;
            this[n] === t && delete this[n], this[e] = t, t.$name = e
        }, $removeControl: function (t) {
            t.$name && this[t.$name] === t && delete this[t.$name], o(this.$pending, function (e, n) {
                this.$setValidity(n, null, t)
            }, this), o(this.$error, function (e, n) {
                this.$setValidity(n, null, t)
            }, this), o(this.$$success, function (e, n) {
                this.$setValidity(n, null, t)
            }, this), I(this.$$controls, t), t.$$parentForm = po
        }, $setDirty: function () {
            this.$$animate.removeClass(this.$$element, Yo), this.$$animate.addClass(this.$$element, Qo), this.$dirty = !0, this.$pristine = !1, this.$$parentForm.$setDirty()
        }, $setPristine: function () {
            this.$$animate.setClass(this.$$element, Yo, Qo + " ng-submitted"), this.$dirty = !1, this.$pristine = !0, this.$submitted = !1, o(this.$$controls, function (t) {
                t.$setPristine()
            })
        }, $setUntouched: function () {
            o(this.$$controls, function (t) {
                t.$setUntouched()
            })
        }, $setSubmitted: function () {
            for (var t = this; t.$$parentForm && t.$$parentForm !== po;) t = t.$$parentForm;
            t.$$setSubmitted()
        }, $$setSubmitted: function () {
            this.$$animate.addClass(this.$$element, "ng-submitted"), this.$submitted = !0, o(this.$$controls, function (t) {
                t.$$setSubmitted && t.$$setSubmitted()
            })
        }
    }, zn({
        clazz: Hn, set: function (t, e, n) {
            var r = t[e];
            r ? -1 === r.indexOf(n) && r.push(n) : t[e] = [n]
        }, unset: function (t, e, n) {
            var r = t[e];
            r && (I(r, n), 0 === r.length && delete t[e])
        }
    });
    var $o = function (t) {
            return ["$timeout", "$parse", function (e, n) {
                function r(t) {
                    return "" === t ? n('this[""]').assign : n(t).assign || d
                }

                return {
                    name: "form",
                    restrict: t ? "EAC" : "E",
                    require: ["form", "^^?form"],
                    controller: Hn,
                    compile: function (n, i) {
                        n.addClass(Yo).addClass(Jo);
                        var o = i.name ? "name" : !(!t || !i.ngForm) && "ngForm";
                        return {
                            pre: function (t, n, i, a) {
                                var s = a[0];
                                if (!("action" in i)) {
                                    var u = function (e) {
                                        t.$apply(function () {
                                            s.$commitViewValue(), s.$setSubmitted()
                                        }), e.preventDefault()
                                    };
                                    n[0].addEventListener("submit", u), n.on("$destroy", function () {
                                        e(function () {
                                            n[0].removeEventListener("submit", u)
                                        }, 0, !1)
                                    })
                                }
                                (a[1] || s.$$parentForm).$addControl(s);
                                var c = o ? r(s.$name) : d;
                                o && (c(t, s), i.$observe(o, function (e) {
                                    s.$name !== e && (c(t, void 0), s.$$parentForm.$$renameControl(s, e), (c = r(s.$name))(t, s))
                                })), n.on("$destroy", function () {
                                    s.$$parentForm.$removeControl(s), c(t, void 0), l(s, po)
                                })
                            }
                        }
                    }
                }
            }]
        }, mo = $o(), vo = $o(!0), go = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
        yo = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
        bo = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
        wo = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, xo = /^(\d{4,})-(\d{2})-(\d{2})$/,
        Co = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, ko = /^(\d{4,})-W(\d\d)$/,
        So = /^(\d{4,})-(\d\d)$/, Eo = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Ao = ft();
    o(["date", "datetime-local", "month", "time", "week"], function (t) {
        Ao[t] = !0
    });
    var Oo = {
        text: function (t, e, n, r, i, o) {
            Kn(t, e, n, r, i, o), Gn(r)
        },
        date: Zn("date", xo, Jn(xo, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": Zn("datetimelocal", Co, Jn(Co, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: Zn("time", Eo, Jn(Eo, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: Zn("week", ko, function (t, e) {
            if (k(t)) return t;
            if (x(t)) {
                ko.lastIndex = 0;
                var n = ko.exec(t);
                if (n) {
                    var r = +n[1], i = +n[2], o = n = 0, a = 0, s = 0, u = jn(r), i = 7 * (i - 1);
                    return e && (n = e.getHours(), o = e.getMinutes(), a = e.getSeconds(), s = e.getMilliseconds()), new Date(r, 0, u.getDate() + i, n, o, a, s)
                }
            }
            return NaN
        }, "yyyy-Www"),
        month: Zn("month", So, Jn(So, ["yyyy", "MM"]), "yyyy-MM"),
        number: function (t, e, n, r, i, o, a, s) {
            Yn(t, e, n, r, "number"), Qn(r), Kn(t, e, n, r, i, o);
            var u;
            if (y(n.min) || n.ngMin) {
                var c = n.min || s(n.ngMin)(t);
                u = Xn(c), r.$validators.min = function (t, e) {
                    return r.$isEmpty(e) || g(u) || e >= u
                }, n.$observe("min", function (t) {
                    t !== c && (u = Xn(t), c = t, r.$validate())
                })
            }
            if (y(n.max) || n.ngMax) {
                var l = n.max || s(n.ngMax)(t), f = Xn(l);
                r.$validators.max = function (t, e) {
                    return r.$isEmpty(e) || g(f) || e <= f
                }, n.$observe("max", function (t) {
                    t !== l && (f = Xn(t), l = t, r.$validate())
                })
            }
            if (y(n.step) || n.ngStep) {
                var h = n.step || s(n.ngStep)(t), p = Xn(h);
                r.$validators.step = function (t, e) {
                    return r.$isEmpty(e) || g(p) || er(e, u || 0, p)
                }, n.$observe("step", function (t) {
                    t !== h && (p = Xn(t), h = t, r.$validate())
                })
            }
        },
        url: function (t, e, n, r, i, o) {
            Kn(t, e, n, r, i, o), Gn(r), r.$validators.url = function (t, e) {
                var n = t || e;
                return r.$isEmpty(n) || yo.test(n)
            }
        },
        email: function (t, e, n, r, i, o) {
            Kn(t, e, n, r, i, o), Gn(r), r.$validators.email = function (t, e) {
                var n = t || e;
                return r.$isEmpty(n) || bo.test(n)
            }
        },
        radio: function (t, e, n, r) {
            var i = !n.ngTrim || "false" !== Dr(n.ngTrim);
            g(n.name) && e.attr("name", ++Or), e.on("change", function (t) {
                var o;
                e[0].checked && (o = n.value, i && (o = Dr(o)), r.$setViewValue(o, t && t.type))
            }), r.$render = function () {
                var t = n.value;
                i && (t = Dr(t)), e[0].checked = t === r.$viewValue
            }, n.$observe("value", r.$render)
        },
        range: function (t, e, n, r, i, o) {
            function a(t, r) {
                e.attr(t, n[t]);
                var i = n[t];
                n.$observe(t, function (t) {
                    t !== i && (i = t, r(t))
                })
            }

            function s(t) {
                f = Xn(t), Mr(r.$modelValue) || (l ? (t = e.val(), f > t && (t = f, e.val(t)), r.$setViewValue(t)) : r.$validate())
            }

            function u(t) {
                h = Xn(t), Mr(r.$modelValue) || (l ? (t = e.val(), h < t && (e.val(h), t = h < f ? f : h), r.$setViewValue(t)) : r.$validate())
            }

            function c(t) {
                p = Xn(t), Mr(r.$modelValue) || (l ? r.$viewValue !== e.val() && r.$setViewValue(e.val()) : r.$validate())
            }

            Yn(t, e, n, r, "range"), Qn(r), Kn(t, e, n, r, i, o);
            var l = r.$$hasNativeValidators && "range" === e[0].type, f = l ? 0 : void 0, h = l ? 100 : void 0,
                p = l ? 1 : void 0, d = e[0].validity;
            t = y(n.min), i = y(n.max), o = y(n.step);
            var $ = r.$render;
            r.$render = l && y(d.rangeUnderflow) && y(d.rangeOverflow) ? function () {
                $(), r.$setViewValue(e.val())
            } : $, t && (f = Xn(n.min), r.$validators.min = l ? function () {
                return !0
            } : function (t, e) {
                return r.$isEmpty(e) || g(f) || e >= f
            }, a("min", s)), i && (h = Xn(n.max), r.$validators.max = l ? function () {
                return !0
            } : function (t, e) {
                return r.$isEmpty(e) || g(h) || e <= h
            }, a("max", u)), o && (p = Xn(n.step), r.$validators.step = l ? function () {
                return !d.stepMismatch
            } : function (t, e) {
                return r.$isEmpty(e) || g(p) || er(e, f || 0, p)
            }, a("step", c))
        },
        checkbox: function (t, e, n, r, i, o, a, s) {
            var u = nr(s, t, "ngTrueValue", n.ngTrueValue, !0), c = nr(s, t, "ngFalseValue", n.ngFalseValue, !1);
            e.on("change", function (t) {
                r.$setViewValue(e[0].checked, t && t.type)
            }), r.$render = function () {
                e[0].checked = r.$viewValue
            }, r.$isEmpty = function (t) {
                return !1 === t
            }, r.$formatters.push(function (t) {
                return L(t, u)
            }), r.$parsers.push(function (t) {
                return t ? u : c
            })
        },
        hidden: d,
        button: d,
        submit: d,
        reset: d,
        file: d
    }, Mo = ["$browser", "$sniffer", "$filter", "$parse", function (t, e, n, r) {
        return {
            restrict: "E", require: ["?ngModel"], link: {
                pre: function (i, o, a, s) {
                    s[0] && (Oo[yr(a.type)] || Oo.text)(i, o, a, s[0], e, t, n, r)
                }
            }
        }
    }], To = function () {
        var t = {
            configurable: !0, enumerable: !1, get: function () {
                return this.getAttribute("value") || ""
            }, set: function (t) {
                this.setAttribute("value", t)
            }
        };
        return {
            restrict: "E", priority: 200, compile: function (e, n) {
                if ("hidden" === yr(n.type)) return {
                    pre: function (e, n, r, i) {
                        e = n[0], e.parentNode && e.parentNode.insertBefore(e, e.nextSibling), Object.defineProperty && Object.defineProperty(e, "value", t)
                    }
                }
            }
        }
    }, Do = /^(true|false|\d+)$/, Vo = function () {
        function t(t, e, n) {
            var r = y(n) ? n : 9 === hr ? "" : null;
            t.prop("value", r), e.$set("value", n)
        }

        return {
            restrict: "A", priority: 100, compile: function (e, n) {
                return Do.test(n.ngValue) ? function (e, n, r) {
                    e = e.$eval(r.ngValue), t(n, r, e)
                } : function (e, n, r) {
                    e.$watch(r.ngValue, function (e) {
                        t(n, r, e)
                    })
                }
            }
        }
    }, No = ["$compile", function (t) {
        return {
            restrict: "AC", compile: function (e) {
                return t.$$addBindingClass(e), function (e, n, r) {
                    t.$$addBindingInfo(n, r.ngBind), n = n[0], e.$watch(r.ngBind, function (t) {
                        n.textContent = ht(t)
                    })
                }
            }
        }
    }], jo = ["$interpolate", "$compile", function (t, e) {
        return {
            compile: function (n) {
                return e.$$addBindingClass(n), function (n, r, i) {
                    n = t(r.attr(i.$attr.ngBindTemplate)), e.$$addBindingInfo(r, n.expressions), r = r[0], i.$observe("ngBindTemplate", function (t) {
                        r.textContent = g(t) ? "" : t
                    })
                }
            }
        }
    }], Po = ["$sce", "$parse", "$compile", function (t, e, n) {
        return {
            restrict: "A", compile: function (r, i) {
                var o = e(i.ngBindHtml), a = e(i.ngBindHtml, function (e) {
                    return t.valueOf(e)
                });
                return n.$$addBindingClass(r), function (e, r, i) {
                    n.$$addBindingInfo(r, i.ngBindHtml), e.$watch(a, function () {
                        var n = o(e);
                        r.html(t.getTrustedHtml(n) || "")
                    })
                }
            }
        }
    }], Io = m({
        restrict: "A", require: "ngModel", link: function (t, e, n, r) {
            r.$viewChangeListeners.push(function () {
                t.$eval(n.ngChange)
            })
        }
    }), Ro = rr("", !0), Uo = rr("Odd", 0), Lo = rr("Even", 1), Fo = _n({
        compile: function (t, e) {
            e.$set("ngCloak", void 0), t.removeClass("ng-cloak")
        }
    }), qo = [function () {
        return {restrict: "A", scope: !0, controller: "@", priority: 500}
    }], _o = {}, Ho = {blur: !0, focus: !0};
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (t) {
        var e = oe("ng-" + t);
        _o[e] = ["$parse", "$rootScope", "$exceptionHandler", function (n, r, i) {
            return ir(n, r, i, e, t, Ho[t])
        }]
    });
    var Bo = ["$animate", "$compile", function (t, e) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function (n, r, i, o, a) {
                var s, u, c;
                n.$watch(i.ngIf, function (n) {
                    n ? u || a(function (n, o) {
                        u = o, n[n.length++] = e.$$createComment("end ngIf", i.ngIf), s = {clone: n}, t.enter(n, r.parent(), r)
                    }) : (c && (c.remove(), c = null), u && (u.$destroy(), u = null), s && (c = lt(s.clone), t.leave(c).done(function (t) {
                        !1 !== t && (c = null)
                    }), s = null))
                })
            }
        }
    }], zo = ["$templateRequest", "$anchorScroll", "$animate", function (t, e, n) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: Ar.noop,
            compile: function (r, i) {
                var o = i.ngInclude || i.src, a = i.onload || "", s = i.autoscroll;
                return function (r, i, u, c, l) {
                    var f, h, p, d = 0, $ = function () {
                        h && (h.remove(), h = null), f && (f.$destroy(), f = null), p && (n.leave(p).done(function (t) {
                            !1 !== t && (h = null)
                        }), h = p, p = null)
                    };
                    r.$watch(o, function (o) {
                        var u = function (t) {
                            !1 === t || !y(s) || s && !r.$eval(s) || e()
                        }, h = ++d;
                        o ? (t(o, !0).then(function (t) {
                            if (!r.$$destroyed && h === d) {
                                var e = r.$new();
                                c.template = t, t = l(e, function (t) {
                                    $(), n.enter(t, null, i).done(u)
                                }), f = e, p = t, f.$emit("$includeContentLoaded", o), r.$eval(a)
                            }
                        }, function () {
                            r.$$destroyed || h !== d || ($(), r.$emit("$includeContentError", o))
                        }), r.$emit("$includeContentRequested", o)) : ($(), c.template = null)
                    })
                }
            }
        }
    }], Wo = ["$compile", function (e) {
        return {
            restrict: "ECA", priority: -400, require: "ngInclude", link: function (n, r, i, o) {
                kr.call(r[0]).match(/SVG/) ? (r.empty(), e(yt(o.template, t.document).childNodes)(n, function (t) {
                    r.append(t)
                }, {futureParentElement: r})) : (r.html(o.template), e(r.contents())(n))
            }
        }
    }], Go = _n({
        priority: 450, compile: function () {
            return {
                pre: function (t, e, n) {
                    t.$eval(n.ngInit)
                }
            }
        }
    }), Ko = function () {
        return {
            restrict: "A", priority: 100, require: "ngModel", link: function (t, e, n, r) {
                var i = n.ngList || ", ", a = "false" !== n.ngTrim, s = a ? Dr(i) : i;
                r.$parsers.push(function (t) {
                    if (!g(t)) {
                        var e = [];
                        return t && o(t.split(s), function (t) {
                            t && e.push(a ? Dr(t) : t)
                        }), e
                    }
                }), r.$formatters.push(function (t) {
                    if (S(t)) return t.join(i)
                }), r.$isEmpty = function (t) {
                    return !t || !t.length
                }
            }
        }
    }, Jo = "ng-valid", Zo = "ng-invalid", Yo = "ng-pristine", Qo = "ng-dirty", Xo = r("ngModel");
    or.$inject = "$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" "), or.prototype = {
        $$initGetterSetters: function () {
            if (this.$options.getOption("getterSetter")) {
                var t = this.$$parse(this.$$attr.ngModel + "()"), e = this.$$parse(this.$$attr.ngModel + "($$$p)");
                this.$$ngModelGet = function (e) {
                    var n = this.$$parsedNgModel(e);
                    return A(n) && (n = t(e)), n
                }, this.$$ngModelSet = function (t, n) {
                    A(this.$$parsedNgModel(t)) ? e(t, {$$$p: n}) : this.$$parsedNgModelAssign(t, n)
                }
            } else if (!this.$$parsedNgModel.assign) throw Xo("nonassign", this.$$attr.ngModel, K(this.$$element))
        }, $render: d, $isEmpty: function (t) {
            return g(t) || "" === t || null === t || t !== t
        }, $$updateEmptyClasses: function (t) {
            this.$isEmpty(t) ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"), this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"), this.$$animate.addClass(this.$$element, "ng-not-empty"))
        }, $setPristine: function () {
            this.$dirty = !1, this.$pristine = !0, this.$$animate.removeClass(this.$$element, Qo), this.$$animate.addClass(this.$$element, Yo)
        }, $setDirty: function () {
            this.$dirty = !0, this.$pristine = !1, this.$$animate.removeClass(this.$$element, Yo), this.$$animate.addClass(this.$$element, Qo), this.$$parentForm.$setDirty()
        }, $setUntouched: function () {
            this.$touched = !1, this.$untouched = !0, this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched")
        }, $setTouched: function () {
            this.$touched = !0, this.$untouched = !1, this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched")
        }, $rollbackViewValue: function () {
            this.$$timeout.cancel(this.$$pendingDebounce), this.$viewValue = this.$$lastCommittedViewValue, this.$render()
        }, $validate: function () {
            if (!Mr(this.$modelValue)) {
                var t = this.$$lastCommittedViewValue, e = this.$$rawModelValue, n = this.$valid, r = this.$modelValue,
                    i = this.$options.getOption("allowInvalid"), o = this;
                this.$$runValidators(e, t, function (t) {
                    i || n === t || (o.$modelValue = t ? e : void 0, o.$modelValue !== r && o.$$writeModelToScope())
                })
            }
        }, $$runValidators: function (t, e, n) {
            function r(t, e) {
                a === s.$$currentValidationRunId && s.$setValidity(t, e)
            }

            function i(t) {
                a === s.$$currentValidationRunId && n(t)
            }

            this.$$currentValidationRunId++;
            var a = this.$$currentValidationRunId, s = this;
            !function () {
                var t = s.$$parserName;
                return g(s.$$parserValid) ? (r(t, null), !0) : (s.$$parserValid || (o(s.$validators, function (t, e) {
                    r(e, null)
                }), o(s.$asyncValidators, function (t, e) {
                    r(e, null)
                })), r(t, s.$$parserValid), s.$$parserValid)
            }() ? i(!1) : function () {
                var n = !0;
                return o(s.$validators, function (i, o) {
                    var a = Boolean(i(t, e));
                    n = n && a, r(o, a)
                }), !!n || (o(s.$asyncValidators, function (t, e) {
                    r(e, null)
                }), !1)
            }() ? function () {
                var n = [], a = !0;
                o(s.$asyncValidators, function (i, o) {
                    var s = i(t, e);
                    if (!s || !A(s.then)) throw Xo("nopromise", s);
                    r(o, void 0), n.push(s.then(function () {
                        r(o, !0)
                    }, function () {
                        a = !1, r(o, !1)
                    }))
                }), n.length ? s.$$q.all(n).then(function () {
                    i(a)
                }, d) : i(!0)
            }() : i(!1)
        }, $commitViewValue: function () {
            var t = this.$viewValue;
            this.$$timeout.cancel(this.$$pendingDebounce), (this.$$lastCommittedViewValue !== t || "" === t && this.$$hasNativeValidators) && (this.$$updateEmptyClasses(t), this.$$lastCommittedViewValue = t, this.$pristine && this.$setDirty(), this.$$parseAndValidate())
        }, $$parseAndValidate: function () {
            var t = this.$$lastCommittedViewValue, e = this;
            if (this.$$parserValid = !g(t) || void 0, this.$setValidity(this.$$parserName, null), this.$$parserName = "parse", this.$$parserValid) for (var n = 0; n < this.$parsers.length; n++) if (t = this.$parsers[n](t), g(t)) {
                this.$$parserValid = !1;
                break
            }
            Mr(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
            var r = this.$modelValue, i = this.$options.getOption("allowInvalid");
            this.$$rawModelValue = t, i && (this.$modelValue = t, e.$modelValue !== r && e.$$writeModelToScope()), this.$$runValidators(t, this.$$lastCommittedViewValue, function (n) {
                i || (e.$modelValue = n ? t : void 0, e.$modelValue !== r && e.$$writeModelToScope())
            })
        }, $$writeModelToScope: function () {
            this.$$ngModelSet(this.$$scope, this.$modelValue), o(this.$viewChangeListeners, function (t) {
                try {
                    t()
                } catch (t) {
                    this.$$exceptionHandler(t)
                }
            }, this)
        }, $setViewValue: function (t, e) {
            this.$viewValue = t, this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(e)
        }, $$debounceViewValueCommit: function (t) {
            var e = this.$options.getOption("debounce");
            C(e[t]) ? e = e[t] : C(e.default) && -1 === this.$options.getOption("updateOn").indexOf(t) ? e = e.default : C(e["*"]) && (e = e["*"]), this.$$timeout.cancel(this.$$pendingDebounce);
            var n = this;
            0 < e ? this.$$pendingDebounce = this.$$timeout(function () {
                n.$commitViewValue()
            }, e) : this.$$rootScope.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function () {
                n.$commitViewValue()
            })
        }, $overrideModelOptions: function (t) {
            this.$options = this.$options.createChild(t), this.$$setUpdateOnEvents()
        }, $processModelValue: function () {
            var t = this.$$format();
            this.$viewValue !== t && (this.$$updateEmptyClasses(t), this.$viewValue = this.$$lastCommittedViewValue = t, this.$render(), this.$$runValidators(this.$modelValue, this.$viewValue, d))
        }, $$format: function () {
            for (var t = this.$formatters, e = t.length, n = this.$modelValue; e--;) n = t[e](n);
            return n
        }, $$setModelValue: function (t) {
            this.$modelValue = this.$$rawModelValue = t, this.$$parserValid = void 0, this.$processModelValue()
        }, $$setUpdateOnEvents: function () {
            this.$$updateEvents && this.$$element.off(this.$$updateEvents, this.$$updateEventHandler), (this.$$updateEvents = this.$options.getOption("updateOn")) && this.$$element.on(this.$$updateEvents, this.$$updateEventHandler)
        }, $$updateEventHandler: function (t) {
            this.$$debounceViewValueCommit(t && t.type)
        }
    }, zn({
        clazz: or, set: function (t, e) {
            t[e] = !0
        }, unset: function (t, e) {
            delete t[e]
        }
    });
    var ta, ea = ["$rootScope", function (t) {
        return {
            restrict: "A",
            require: ["ngModel", "^?form", "^?ngModelOptions"],
            controller: or,
            priority: 1,
            compile: function (e) {
                return e.addClass(Yo).addClass("ng-untouched").addClass(Jo), {
                    pre: function (t, e, n, r) {
                        var i = r[0];
                        e = r[1] || i.$$parentForm, (r = r[2]) && (i.$options = r.$options), i.$$initGetterSetters(), e.$addControl(i), n.$observe("name", function (t) {
                            i.$name !== t && i.$$parentForm.$$renameControl(i, t)
                        }), t.$on("$destroy", function () {
                            i.$$parentForm.$removeControl(i)
                        })
                    }, post: function (e, n, r, i) {
                        function o() {
                            a.$setTouched()
                        }

                        var a = i[0];
                        a.$$setUpdateOnEvents(), n.on("blur", function () {
                            a.$touched || (t.$$phase ? e.$evalAsync(o) : e.$apply(o))
                        })
                    }
                }
            }
        }
    }], na = /(\s+|^)default(\s+|$)/;
    sr.prototype = {
        getOption: function (t) {
            return this.$$options[t]
        }, createChild: function (t) {
            var e = !1;
            return t = l({}, t), o(t, function (n, r) {
                "$inherit" === n ? "*" === r ? e = !0 : (t[r] = this.$$options[r], "updateOn" === r && (t.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === r && (t.updateOnDefault = !1, t[r] = Dr(n.replace(na, function () {
                    return t.updateOnDefault = !0, " "
                })))
            }, this), e && (delete t["*"], ur(t, this.$$options)), ur(t, ta.$$options), new sr(t)
        }
    }, ta = new sr({
        updateOn: "",
        updateOnDefault: !0,
        debounce: 0,
        getterSetter: !1,
        allowInvalid: !1,
        timezone: null
    });
    var ra = function () {
            function t(t, e) {
                this.$$attrs = t, this.$$scope = e
            }

            return t.$inject = ["$attrs", "$scope"], t.prototype = {
                $onInit: function () {
                    var t = this.parentCtrl ? this.parentCtrl.$options : ta,
                        e = this.$$scope.$eval(this.$$attrs.ngModelOptions);
                    this.$options = t.createChild(e)
                }
            }, {
                restrict: "A",
                priority: 10,
                require: {parentCtrl: "?^^ngModelOptions"},
                bindToController: !0,
                controller: t
            }
        }, ia = _n({terminal: !0, priority: 1e3}), oa = r("ngOptions"),
        aa = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        sa = ["$compile", "$document", "$parse", function (e, n, r) {
            function a(t, e, n) {
                function o(t, e, n, r, i) {
                    this.selectValue = t, this.viewValue = e, this.label = n, this.group = r, this.disabled = i
                }

                function a(t) {
                    var e;
                    if (!c && i(t)) e = t; else {
                        e = [];
                        for (var n in t) t.hasOwnProperty(n) && "$" !== n.charAt(0) && e.push(n)
                    }
                    return e
                }

                var s = t.match(aa);
                if (!s) throw oa("iexp", t, K(e));
                var u = s[5] || s[7], c = s[6];
                t = / as /.test(s[0]) && s[1];
                var l = s[9];
                e = r(s[2] ? s[1] : u);
                var f = t && r(t) || e, h = l && r(l), p = l ? function (t, e) {
                        return h(n, e)
                    } : function (t) {
                        return Bt(t)
                    }, d = function (t, e) {
                        return p(t, b(t, e))
                    }, $ = r(s[2] || s[1]), m = r(s[3] || ""), v = r(s[4] || ""), g = r(s[8]), y = {},
                    b = c ? function (t, e) {
                        return y[c] = e, y[u] = t, y
                    } : function (t) {
                        return y[u] = t, y
                    };
                return {
                    trackBy: l, getTrackByValue: d, getWatchables: r(g, function (t) {
                        var e = [];
                        t = t || [];
                        for (var r = a(t), i = r.length, o = 0; o < i; o++) {
                            var u = t === r ? o : r[o], c = t[u], u = b(c, u), c = p(c, u);
                            e.push(c), (s[2] || s[1]) && (c = $(n, u), e.push(c)), s[4] && (u = v(n, u), e.push(u))
                        }
                        return e
                    }), getOptions: function () {
                        for (var t = [], e = {}, r = g(n) || [], i = a(r), s = i.length, u = 0; u < s; u++) {
                            var c = r === i ? u : i[u], h = b(r[c], c), y = f(n, h), c = p(y, h), w = $(n, h),
                                x = m(n, h), h = v(n, h), y = new o(c, y, w, x, h);
                            t.push(y), e[c] = y
                        }
                        return {
                            items: t, selectValueMap: e, getOptionFromViewValue: function (t) {
                                return e[d(t)]
                            }, getViewValueFromOption: function (t) {
                                return l ? R(t.viewValue) : t.viewValue
                            }
                        }
                    }
                }
            }

            var s = t.document.createElement("option"), u = t.document.createElement("optgroup");
            return {
                restrict: "A", terminal: !0, require: ["select", "ngModel"], link: {
                    pre: function (t, e, n, r) {
                        r[0].registerOption = d
                    }, post: function (t, r, i, c) {
                        function l(t) {
                            var e = (t = v.getOptionFromViewValue(t)) && t.element;
                            return e && !e.selected && (e.selected = !0), t
                        }

                        function f(t, e) {
                            t.element = e, e.disabled = t.disabled, t.label !== e.label && (e.label = t.label, e.textContent = t.label), e.value = t.selectValue
                        }

                        var h = c[0], p = c[1], d = i.multiple;
                        c = 0;
                        for (var $ = r.children(), m = $.length; c < m; c++) if ("" === $[c].value) {
                            h.hasEmptyOption = !0, h.emptyOption = $.eq(c);
                            break
                        }
                        r.empty(), c = !!h.emptyOption, pr(s.cloneNode(!1)).val("?");
                        var v, g = a(i.ngOptions, r, t), b = n[0].createDocumentFragment();
                        h.generateUnknownOptionValue = function (t) {
                            return "?"
                        }, d ? (h.writeValue = function (t) {
                            if (v) {
                                var e = t && t.map(l) || [];
                                v.items.forEach(function (t) {
                                    t.element.selected && -1 === Array.prototype.indexOf.call(e, t) && (t.element.selected = !1)
                                })
                            }
                        }, h.readValue = function () {
                            var t = r.val() || [], e = [];
                            return o(t, function (t) {
                                (t = v.selectValueMap[t]) && !t.disabled && e.push(v.getViewValueFromOption(t))
                            }), e
                        }, g.trackBy && t.$watchCollection(function () {
                            if (S(p.$viewValue)) return p.$viewValue.map(function (t) {
                                return g.getTrackByValue(t)
                            })
                        }, function () {
                            p.$render()
                        })) : (h.writeValue = function (t) {
                            if (v) {
                                var e = r[0].options[r[0].selectedIndex], n = v.getOptionFromViewValue(t);
                                e && e.removeAttribute("selected"), n ? (r[0].value !== n.selectValue && (h.removeUnknownOption(), r[0].value = n.selectValue, n.element.selected = !0), n.element.setAttribute("selected", "selected")) : h.selectUnknownOrEmptyOption(t)
                            }
                        }, h.readValue = function () {
                            var t = v.selectValueMap[r.val()];
                            return t && !t.disabled ? (h.unselectEmptyOption(), h.removeUnknownOption(), v.getViewValueFromOption(t)) : null
                        }, g.trackBy && t.$watch(function () {
                            return g.getTrackByValue(p.$viewValue)
                        }, function () {
                            p.$render()
                        })), c && (e(h.emptyOption)(t), r.prepend(h.emptyOption), 8 === h.emptyOption[0].nodeType ? (h.hasEmptyOption = !1, h.registerOption = function (t, e) {
                            "" === e.val() && (h.hasEmptyOption = !0, h.emptyOption = e, h.emptyOption.removeClass("ng-scope"), p.$render(), e.on("$destroy", function () {
                                var t = h.$isEmptyOptionSelected();
                                h.hasEmptyOption = !1, h.emptyOption = void 0, t && p.$render()
                            }))
                        }) : h.emptyOption.removeClass("ng-scope")), t.$watchCollection(g.getWatchables, function () {
                            var t = v && h.readValue();
                            if (v) for (var e = v.items.length - 1; 0 <= e; e--) {
                                var n = v.items[e];
                                It(y(n.group) ? n.element.parentNode : n.element)
                            }
                            v = g.getOptions();
                            var i = {};
                            v.items.forEach(function (t) {
                                var e;
                                if (y(t.group)) {
                                    e = i[t.group], e || (e = u.cloneNode(!1), b.appendChild(e), e.label = null === t.group ? "null" : t.group, i[t.group] = e);
                                    var n = s.cloneNode(!1);
                                    e.appendChild(n), f(t, n)
                                } else e = s.cloneNode(!1), b.appendChild(e), f(t, e)
                            }), r[0].appendChild(b), p.$render(), p.$isEmpty(t) || (e = h.readValue(), (g.trackBy || d ? L(t, e) : t === e) || (p.$setViewValue(e), p.$render()))
                        })
                    }
                }
            }
        }], ua = ["$locale", "$interpolate", "$log", function (t, e, n) {
            var r = /{}/g, i = /^when(Minus)?(.+)$/;
            return {
                link: function (a, s, u) {
                    function c(t) {
                        s.text(t || "")
                    }

                    var l, f = u.count, h = u.$attr.when && s.attr(u.$attr.when), p = u.offset || 0, $ = a.$eval(h) || {},
                        m = {}, v = e.startSymbol(), y = e.endSymbol(), b = v + f + "-" + p + y, w = Ar.noop;
                    o(u, function (t, e) {
                        var n = i.exec(e);
                        n && (n = (n[1] ? "-" : "") + yr(n[2]), $[n] = s.attr(u.$attr[e]))
                    }), o($, function (t, n) {
                        m[n] = e(t.replace(r, b))
                    }), a.$watch(f, function (e) {
                        var r = parseFloat(e), i = Mr(r);
                        i || r in $ || (r = t.pluralCat(r - p)), r === l || i && Mr(l) || (w(), i = m[r], g(i) ? (null != e && n.debug("ngPluralize: no rule defined for '" + r + "' in " + h), w = d, c()) : w = a.$watch(i, c), l = r)
                    })
                }
            }
        }], ca = r("ngRef"), la = ["$parse", function (t) {
            return {
                priority: -1, restrict: "A", compile: function (e, n) {
                    var r = oe(P(e)), i = t(n.ngRef), o = i.assign || function () {
                        throw ca("nonassign", n.ngRef)
                    };
                    return function (t, e, a) {
                        var s;
                        if (a.hasOwnProperty("ngRefRead")) {
                            if ("$element" === a.ngRefRead) s = e; else if (!(s = e.data("$" + a.ngRefRead + "Controller"))) throw ca("noctrl", a.ngRefRead, n.ngRef)
                        } else s = e.data("$" + r + "Controller");
                        s = s || e, o(t, s), e.on("$destroy", function () {
                            i(t) === s && o(t, null)
                        })
                    }
                }
            }
        }], fa = ["$parse", "$animate", "$compile", function (t, e, n) {
            var a = r("ngRepeat"), s = function (t, e, n, r, i, o, a) {
                t[n] = r, i && (t[i] = o), t.$index = e, t.$first = 0 === e, t.$last = e === a - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 == (1 & e))
            }, u = function (t, e, n) {
                return Bt(n)
            }, c = function (t, e) {
                return e
            };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function (r, l) {
                    var f = l.ngRepeat, h = n.$$createComment("end ngRepeat", f),
                        p = f.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!p) throw a("iexp", f);
                    var d = p[1], $ = p[2], m = p[3], v = p[4],
                        p = d.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);
                    if (!p) throw a("iidexp", d);
                    var g = p[3] || p[1], y = p[2];
                    if (m && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(m) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(m))) throw a("badident", m);
                    var b;
                    if (v) {
                        var w = {$id: Bt}, x = t(v);
                        b = function (t, e, n, r) {
                            return y && (w[y] = e), w[g] = n, w.$index = r, x(t, w)
                        }
                    }
                    return function (t, n, r, l, p) {
                        var d = ft();
                        t.$watchCollection($, function (r) {
                            var l, $, v, x, C, k, S, E, A, O, M = n[0], T = ft();
                            if (m && (t[m] = r), i(r)) E = r, $ = b || u; else for (O in $ = b || c, E = [], r) gr.call(r, O) && "$" !== O.charAt(0) && E.push(O);
                            for (x = E.length, O = Array(x), l = 0; l < x; l++) if (C = r === E ? l : E[l], k = r[C], S = $(t, C, k, l), d[S]) A = d[S], delete d[S], T[S] = A, O[l] = A; else {
                                if (T[S]) throw o(O, function (t) {
                                    t && t.scope && (d[t.id] = t)
                                }), a("dupes", f, S, k);
                                O[l] = {id: S, scope: void 0, clone: void 0}, T[S] = !0
                            }
                            w && (w[g] = void 0);
                            for (v in d) {
                                if (A = d[v], S = lt(A.clone), e.leave(S), S[0].parentNode) for (l = 0, $ = S.length; l < $; l++) S[l].$$NG_REMOVED = !0;
                                A.scope.$destroy()
                            }
                            for (l = 0; l < x; l++) if (C = r === E ? l : E[l], k = r[C], A = O[l], A.scope) {
                                v = M;
                                do {
                                    v = v.nextSibling
                                } while (v && v.$$NG_REMOVED);
                                A.clone[0] !== v && e.move(lt(A.clone), null, M), M = A.clone[A.clone.length - 1], s(A.scope, l, g, k, y, C, x)
                            } else p(function (t, n) {
                                A.scope = n;
                                var r = h.cloneNode(!1);
                                t[t.length++] = r, e.enter(t, null, M), M = r, A.clone = t, T[A.id] = A, s(A.scope, l, g, k, y, C, x)
                            });
                            d = T
                        })
                    }
                }
            }
        }], ha = ["$animate", function (t) {
            return {
                restrict: "A", multiElement: !0, link: function (e, n, r) {
                    e.$watch(r.ngShow, function (e) {
                        t[e ? "removeClass" : "addClass"](n, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], pa = ["$animate", function (t) {
            return {
                restrict: "A", multiElement: !0, link: function (e, n, r) {
                    e.$watch(r.ngHide, function (e) {
                        t[e ? "addClass" : "removeClass"](n, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], da = _n(function (t, e, n) {
            t.$watchCollection(n.ngStyle, function (t, n) {
                n && t !== n && (t || (t = {}), o(n, function (e, n) {
                    null == t[n] && (t[n] = "")
                })), t && e.css(t)
            })
        }), $a = ["$animate", "$compile", function (t, e) {
            return {
                require: "ngSwitch", controller: ["$scope", function () {
                    this.cases = {}
                }], link: function (n, r, i, a) {
                    var s = [], u = [], c = [], l = [], f = function (t, e) {
                        return function (n) {
                            !1 !== n && t.splice(e, 1)
                        }
                    };
                    n.$watch(i.ngSwitch || i.on, function (n) {
                        for (var r, i; c.length;) t.cancel(c.pop());
                        for (r = 0, i = l.length; r < i; ++r) {
                            var h = lt(u[r].clone);
                            l[r].$destroy(), (c[r] = t.leave(h)).done(f(c, r))
                        }
                        u.length = 0, l.length = 0, (s = a.cases["!" + n] || a.cases["?"]) && o(s, function (n) {
                            n.transclude(function (r, i) {
                                l.push(i);
                                var o = n.element;
                                r[r.length++] = e.$$createComment("end ngSwitchWhen"), u.push({clone: r}), t.enter(r, o.parent(), o)
                            })
                        })
                    })
                }
            }
        }], ma = _n({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (t, e, n, r, i) {
                t = n.ngSwitchWhen.split(n.ngSwitchWhenSeparator).sort().filter(function (t, e, n) {
                    return n[e - 1] !== t
                }), o(t, function (t) {
                    r.cases["!" + t] = r.cases["!" + t] || [], r.cases["!" + t].push({transclude: i, element: e})
                })
            }
        }), va = _n({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (t, e, n, r, i) {
                r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({transclude: i, element: e})
            }
        }), ga = r("ngTransclude"), ya = ["$compile", function (t) {
            return {
                restrict: "EAC", compile: function (e) {
                    var n = t(e.contents());
                    return e.empty(), function (t, e, r, i, o) {
                        function a() {
                            n(t, function (t) {
                                e.append(t)
                            })
                        }

                        if (!o) throw ga("orphan", K(e));
                        r.ngTransclude === r.$attr.ngTransclude && (r.ngTransclude = ""), r = r.ngTransclude || r.ngTranscludeSlot, o(function (t, n) {
                            var r;
                            if (r = t.length) t:{
                                r = 0;
                                for (var i = t.length; r < i; r++) {
                                    var o = t[r];
                                    if (o.nodeType !== Fr || o.nodeValue.trim()) {
                                        r = !0;
                                        break t
                                    }
                                }
                                r = void 0
                            }
                            r ? e.append(t) : (a(), n.$destroy())
                        }, null, r), r && !o.isSlotFilled(r) && a()
                    }
                }
            }
        }], ba = ["$templateCache", function (t) {
            return {
                restrict: "E", terminal: !0, compile: function (e, n) {
                    "text/ng-template" === n.type && t.put(n.id, e[0].text)
                }
            }
        }], wa = {$setViewValue: d, $render: d}, xa = ["$element", "$scope", function (e, n) {
            function r() {
                s || (s = !0, n.$$postDigest(function () {
                    s = !1, o.ngModelCtrl.$render()
                }))
            }

            function i(t) {
                u || (u = !0, n.$$postDigest(function () {
                    n.$$destroyed || (u = !1, o.ngModelCtrl.$setViewValue(o.readValue()), t && o.ngModelCtrl.$render())
                }))
            }

            var o = this, a = new oi;
            o.selectValueMap = {}, o.ngModelCtrl = wa, o.multiple = !1, o.unknownOption = pr(t.document.createElement("option")), o.hasEmptyOption = !1, o.emptyOption = void 0, o.renderUnknownOption = function (t) {
                t = o.generateUnknownOptionValue(t), o.unknownOption.val(t), e.prepend(o.unknownOption), cr(o.unknownOption, !0), e.val(t)
            }, o.updateUnknownOption = function (t) {
                t = o.generateUnknownOptionValue(t), o.unknownOption.val(t), cr(o.unknownOption, !0), e.val(t)
            }, o.generateUnknownOptionValue = function (t) {
                return "? " + Bt(t) + " ?"
            }, o.removeUnknownOption = function () {
                o.unknownOption.parent() && o.unknownOption.remove()
            }, o.selectEmptyOption = function () {
                o.emptyOption && (e.val(""), cr(o.emptyOption, !0))
            }, o.unselectEmptyOption = function () {
                o.hasEmptyOption && cr(o.emptyOption, !1)
            }, n.$on("$destroy", function () {
                o.renderUnknownOption = d
            }), o.readValue = function () {
                var t = e.val(), t = t in o.selectValueMap ? o.selectValueMap[t] : t;
                return o.hasOption(t) ? t : null
            }, o.writeValue = function (t) {
                var n = e[0].options[e[0].selectedIndex];
                n && cr(pr(n), !1), o.hasOption(t) ? (o.removeUnknownOption(), n = Bt(t), e.val(n in o.selectValueMap ? n : t), cr(pr(e[0].options[e[0].selectedIndex]), !0)) : o.selectUnknownOrEmptyOption(t)
            }, o.addOption = function (t, e) {
                if (8 !== e[0].nodeType) {
                    ut(t, '"option value"'), "" === t && (o.hasEmptyOption = !0, o.emptyOption = e);
                    var n = a.get(t) || 0;
                    a.set(t, n + 1), r()
                }
            }, o.removeOption = function (t) {
                var e = a.get(t);
                e && (1 === e ? (a.delete(t), "" === t && (o.hasEmptyOption = !1, o.emptyOption = void 0)) : a.set(t, e - 1))
            }, o.hasOption = function (t) {
                return !!a.get(t)
            }, o.$hasEmptyOption = function () {
                return o.hasEmptyOption
            }, o.$isUnknownOptionSelected = function () {
                return e[0].options[0] === o.unknownOption[0]
            }, o.$isEmptyOptionSelected = function () {
                return o.hasEmptyOption && e[0].options[e[0].selectedIndex] === o.emptyOption[0]
            }, o.selectUnknownOrEmptyOption = function (t) {
                null == t && o.emptyOption ? (o.removeUnknownOption(), o.selectEmptyOption()) : o.unknownOption.parent().length ? o.updateUnknownOption(t) : o.renderUnknownOption(t)
            };
            var s = !1, u = !1;
            o.registerOption = function (t, e, n, a, s) {
                if (n.$attr.ngValue) {
                    var u, c;
                    n.$observe("value", function (t) {
                        var n, r = e.prop("selected");
                        y(c) && (o.removeOption(u), delete o.selectValueMap[c], n = !0), c = Bt(t), u = t, o.selectValueMap[c] = t, o.addOption(t, e), e.attr("value", c), n && r && i()
                    })
                } else a ? n.$observe("value", function (t) {
                    o.readValue();
                    var n, r = e.prop("selected");
                    y(u) && (o.removeOption(u), n = !0), u = t, o.addOption(t, e), n && r && i()
                }) : s ? t.$watch(s, function (t, r) {
                    n.$set("value", t);
                    var a = e.prop("selected");
                    r !== t && o.removeOption(r), o.addOption(t, e), r && a && i()
                }) : o.addOption(n.value, e);
                n.$observe("disabled", function (t) {
                    ("true" === t || t && e.prop("selected")) && (o.multiple ? i(!0) : (o.ngModelCtrl.$setViewValue(null), o.ngModelCtrl.$render()))
                }), e.on("$destroy", function () {
                    var t = o.readValue(), e = n.value;
                    o.removeOption(e), r(), (o.multiple && t && -1 !== t.indexOf(e) || t === e) && i(!0)
                })
            }
        }], Ca = function () {
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: xa,
                priority: 1,
                link: {
                    pre: function (t, e, n, r) {
                        var i = r[0], a = r[1];
                        if (a) {
                            if (i.ngModelCtrl = a, e.on("change", function () {
                                i.removeUnknownOption(), t.$apply(function () {
                                    a.$setViewValue(i.readValue())
                                })
                            }), n.multiple) {
                                i.multiple = !0, i.readValue = function () {
                                    var t = [];
                                    return o(e.find("option"), function (e) {
                                        e.selected && !e.disabled && (e = e.value, t.push(e in i.selectValueMap ? i.selectValueMap[e] : e))
                                    }), t
                                }, i.writeValue = function (t) {
                                    o(e.find("option"), function (e) {
                                        var n = !!t && (-1 !== Array.prototype.indexOf.call(t, e.value) || -1 !== Array.prototype.indexOf.call(t, i.selectValueMap[e.value]));
                                        n !== e.selected && cr(pr(e), n)
                                    })
                                };
                                var s, u = NaN;
                                t.$watch(function () {
                                    u !== a.$viewValue || L(s, a.$viewValue) || (s = dt(a.$viewValue), a.$render()), u = a.$viewValue
                                }), a.$isEmpty = function (t) {
                                    return !t || 0 === t.length
                                }
                            }
                        } else i.registerOption = d
                    }, post: function (t, e, n, r) {
                        var i = r[1];
                        if (i) {
                            var o = r[0];
                            i.$render = function () {
                                o.writeValue(i.$viewValue)
                            }
                        }
                    }
                }
            }
        }, ka = ["$interpolate", function (t) {
            return {
                restrict: "E", priority: 100, compile: function (e, n) {
                    var r, i;
                    return y(n.ngValue) || (y(n.value) ? r = t(n.value, !0) : (i = t(e.text(), !0)) || n.$set("value", e.text())), function (t, e, n) {
                        var o = e.parent();
                        (o = o.data("$selectController") || o.parent().data("$selectController")) && o.registerOption(t, e, n, r, i)
                    }
                }
            }
        }], Sa = ["$parse", function (t) {
            return {
                restrict: "A", require: "?ngModel", link: function (e, n, r, i) {
                    if (i) {
                        var o = r.hasOwnProperty("required") || t(r.ngRequired)(e);
                        r.ngRequired || (r.required = !0), i.$validators.required = function (t, e) {
                            return !o || !i.$isEmpty(e)
                        }, r.$observe("required", function (t) {
                            o !== t && (o = t, i.$validate())
                        })
                    }
                }
            }
        }], Ea = ["$parse", function (t) {
            return {
                restrict: "A", require: "?ngModel", compile: function (e, n) {
                    var r, i;
                    return n.ngPattern && (r = n.ngPattern, i = "/" === n.ngPattern.charAt(0) && vr.test(n.ngPattern) ? function () {
                        return n.ngPattern
                    } : t(n.ngPattern)), function (t, e, n, o) {
                        if (o) {
                            var a = n.pattern;
                            n.ngPattern ? a = i(t) : r = n.pattern;
                            var s = lr(a, r, e);
                            n.$observe("pattern", function (t) {
                                var n = s;
                                s = lr(t, r, e), (n && n.toString()) !== (s && s.toString()) && o.$validate()
                            }), o.$validators.pattern = function (t, e) {
                                return o.$isEmpty(e) || g(s) || s.test(e)
                            }
                        }
                    }
                }
            }
        }], Aa = ["$parse", function (t) {
            return {
                restrict: "A", require: "?ngModel", link: function (e, n, r, i) {
                    if (i) {
                        var o = r.maxlength || t(r.ngMaxlength)(e), a = fr(o);
                        r.$observe("maxlength", function (t) {
                            o !== t && (a = fr(t), o = t, i.$validate())
                        }), i.$validators.maxlength = function (t, e) {
                            return 0 > a || i.$isEmpty(e) || e.length <= a
                        }
                    }
                }
            }
        }], Oa = ["$parse", function (t) {
            return {
                restrict: "A", require: "?ngModel", link: function (e, n, r, i) {
                    if (i) {
                        var o = r.minlength || t(r.ngMinlength)(e), a = fr(o) || -1;
                        r.$observe("minlength", function (t) {
                            o !== t && (a = fr(t) || -1, o = t, i.$validate())
                        }), i.$validators.minlength = function (t, e) {
                            return i.$isEmpty(e) || e.length >= a
                        }
                    }
                }
            }
        }];
    t.angular.bootstrap ? t.console && console.log("WARNING: Tried to load AngularJS more than once.") : (function () {
        var e;
        if (!Lr) {
            var n = jr();
            (dr = g(n) ? t.jQuery : n ? t[n] : void 0) && dr.fn.on ? (pr = dr, l(dr.fn, {
                scope: ti.scope,
                isolateScope: ti.isolateScope,
                controller: ti.controller,
                injector: ti.injector,
                inheritedData: ti.inheritedData
            })) : pr = bt, e = pr.cleanData, pr.cleanData = function (t) {
                for (var n, r, i = 0; null != (r = t[i]); i++) (n = (pr._data(r) || {}).events) && n.$destroy && pr(r).triggerHandler("$destroy");
                e(t)
            }, Ar.element = pr, Lr = !0
        }
    }(), function (n) {
        l(n, {
            errorHandlingConfig: e,
            bootstrap: nt,
            copy: R,
            extend: l,
            merge: f,
            equals: L,
            element: pr,
            forEach: o,
            injector: Kt,
            noop: d,
            bind: q,
            toJson: H,
            fromJson: B,
            identity: $,
            isUndefined: g,
            isDefined: y,
            isString: x,
            isFunction: A,
            isObject: b,
            isNumber: C,
            isElement: N,
            isArray: S,
            version: qr,
            isDate: k,
            callbacks: {$$counter: 0},
            getTestability: it,
            reloadWithDebugInfo: rt,
            $$minErr: r,
            $$csp: Nr,
            $$encodeUriSegment: Q,
            $$encodeUriQuery: X,
            $$lowercase: yr,
            $$stringify: ht,
            $$uppercase: br
        }), $r = pt(t), $r("ng", ["ngLocale"], ["$provide", function (t) {
            t.provider({$$sanitizeUri: rn}), t.provider("$compile", re).directive({
                a: fo,
                input: Mo,
                textarea: Mo,
                form: mo,
                script: ba,
                select: Ca,
                option: ka,
                ngBind: No,
                ngBindHtml: Po,
                ngBindTemplate: jo,
                ngClass: Ro,
                ngClassEven: Lo,
                ngClassOdd: Uo,
                ngCloak: Fo,
                ngController: qo,
                ngForm: vo,
                ngHide: pa,
                ngIf: Bo,
                ngInclude: zo,
                ngInit: Go,
                ngNonBindable: ia,
                ngPluralize: ua,
                ngRef: la,
                ngRepeat: fa,
                ngShow: ha,
                ngStyle: da,
                ngSwitch: $a,
                ngSwitchWhen: ma,
                ngSwitchDefault: va,
                ngOptions: sa,
                ngTransclude: ya,
                ngModel: ea,
                ngList: Ko,
                ngChange: Io,
                pattern: Ea,
                ngPattern: Ea,
                required: Sa,
                ngRequired: Sa,
                minlength: Oa,
                ngMinlength: Oa,
                maxlength: Aa,
                ngMaxlength: Aa,
                ngValue: Vo,
                ngModelOptions: ra
            }).directive({ngInclude: Wo, input: To}).directive(ho).directive(_o), t.provider({
                $anchorScroll: Jt,
                $animate: mi,
                $animateCss: yi,
                $$animateJs: di,
                $$animateQueue: $i,
                $$AnimateRunner: gi,
                $$animateAsyncRun: vi,
                $browser: te,
                $cacheFactory: ee,
                $controller: ce,
                $document: le,
                $$isDocumentHidden: fe,
                $exceptionHandler: he,
                $filter: wn,
                $$forceReflow: Ei,
                $interpolate: ke,
                $interval: Se,
                $$intervalFactory: Ee,
                $http: be,
                $httpParamSerializer: de,
                $httpParamSerializerJQLike: $e,
                $httpBackend: xe,
                $xhrFactory: we,
                $jsonpCallbacks: Pi,
                $location: Re,
                $log: Ue,
                $parse: Ye,
                $rootScope: nn,
                $q: Qe,
                $$q: Xe,
                $sce: un,
                $sceDelegate: sn,
                $sniffer: cn,
                $$taskTrackerFactory: ln,
                $templateCache: ne,
                $templateRequest: hn,
                $$testability: pn,
                $timeout: dn,
                $window: gn,
                $$rAF: en,
                $$jqLite: Ht,
                $$Map: ai,
                $$cookieReader: bn
            })
        }]).info({angularVersion: "1.7.8"})
    }(Ar), Ar.module("ngLocale", [], ["$provide", function (t) {
        function e(t) {
            t += "";
            var e = t.indexOf(".");
            return -1 == e ? 0 : t.length - e - 1
        }

        t.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: "January February March April May June July August September October November December".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                short: "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: ""
                }]
            },
            id: "en-us",
            localeID: "en_US",
            pluralCat: function (t, n) {
                var r = 0 | t, i = n;
                return void 0 === i && (i = Math.min(e(t), 3)), Math.pow(10, i), 1 == r && 0 == i ? "one" : "other"
            }
        })
    }]), pr(function () {
        et(t.document, nt)
    }))
}(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'), function (t, e) {
    "use strict";

    function n(t) {
        var e = [];
        return h(e, c).chars(t), e.join("")
    }

    var r, i, o, a, s, u, c, l, f, h, p = e.$$minErr("$sanitize");
    e.module("ngSanitize", []).provider("$sanitize", function () {
        function n(t, e) {
            return d(t.split(","), e)
        }

        function d(t, e) {
            var n, r = {};
            for (n = 0; n < t.length; n++) r[e ? u(t[n]) : t[n]] = !0;
            return r
        }

        function $(t, e) {
            e && e.length && i(t, d(e))
        }

        function m(t) {
            for (var e = {}, n = 0, r = t.length; n < r; n++) {
                var i = t[n];
                e[i.name] = i.value
            }
            return e
        }

        function v(t) {
            return t.replace(/&/g, "&amp;").replace(x, function (t) {
                var e = t.charCodeAt(0);
                return t = t.charCodeAt(1), "&#" + (1024 * (e - 55296) + (t - 56320) + 65536) + ";"
            }).replace(C, function (t) {
                return "&#" + t.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function g(e) {
            for (; e;) {
                if (e.nodeType === t.Node.ELEMENT_NODE) for (var n = e.attributes, r = 0, i = n.length; r < i; r++) {
                    var o = n[r], a = o.name.toLowerCase();
                    "xmlns:ns1" !== a && 0 !== a.lastIndexOf("ns1:", 0) || (e.removeAttributeNode(o), r--, i--)
                }
                (n = e.firstChild) && g(n), e = y("nextSibling", e)
            }
        }

        function y(t, e) {
            var n = e[t];
            if (n && l.call(e, n)) throw p("elclob", e.outerHTML || e.outerText);
            return n
        }

        var b = !1, w = !1;
        this.$get = ["$$sanitizeUri", function (t) {
            return b = !0, w && i(T, O), function (e) {
                var n = [];
                return f(e, h(n, function (e, n) {
                    return !/^unsafe:/.test(t(e, n))
                })), n.join("")
            }
        }], this.enableSvg = function (t) {
            return s(t) ? (w = t, this) : w
        }, this.addValidElements = function (t) {
            return b || (a(t) && (t = {htmlElements: t}), $(O, t.svgElements), $(k, t.htmlVoidElements), $(T, t.htmlVoidElements), $(T, t.htmlElements)), this
        }, this.addValidAttrs = function (t) {
            return b || i(V, d(t, !0)), this
        }, r = e.bind, i = e.extend, o = e.forEach, a = e.isArray, s = e.isDefined, u = e.$$lowercase, c = e.noop, f = function (t, e) {
            null === t || void 0 === t ? t = "" : "string" != typeof t && (t = "" + t);
            var n = N(t);
            if (!n) return "";
            var r = 5;
            do {
                if (0 === r) throw p("uinput");
                r--, t = n.innerHTML, n = N(t)
            } while (t !== n.innerHTML);
            for (r = n.firstChild; r;) {
                switch (r.nodeType) {
                    case 1:
                        e.start(r.nodeName.toLowerCase(), m(r.attributes));
                        break;
                    case 3:
                        e.chars(r.textContent)
                }
                var i;
                if (!((i = r.firstChild) || (1 === r.nodeType && e.end(r.nodeName.toLowerCase()), i = y("nextSibling", r)))) for (; null == i && (r = y("parentNode", r)) !== n;) i = y("nextSibling", r), 1 === r.nodeType && e.end(r.nodeName.toLowerCase());
                r = i
            }
            for (; r = n.firstChild;) n.removeChild(r)
        }, h = function (t, e) {
            var n = !1, i = r(t, t.push);
            return {
                start: function (t, r) {
                    t = u(t), !n && M[t] && (n = t), n || !0 !== T[t] || (i("<"), i(t), o(r, function (n, r) {
                        var o = u(r), a = "img" === t && "src" === o || "background" === o;
                        !0 !== V[o] || !0 === D[o] && !e(n, a) || (i(" "), i(r), i('="'), i(v(n)), i('"'))
                    }), i(">"))
                }, end: function (t) {
                    t = u(t), n || !0 !== T[t] || !0 === k[t] || (i("</"), i(t), i(">")), t == n && (n = !1)
                }, chars: function (t) {
                    n || i(v(t))
                }
            }
        }, l = t.Node.prototype.contains || function (t) {
            return !!(16 & this.compareDocumentPosition(t))
        };
        var x = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, C = /([^#-~ |!])/g, k = n("area,br,col,hr,img,wbr"),
            S = n("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), E = n("rp,rt"), A = i({}, E, S),
            S = i({}, S, n("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),
            E = i({}, E, n("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
            O = n("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
            M = n("script,style"), T = i({}, k, S, E, A),
            D = n("background,cite,href,longdesc,src,xlink:href,xml:base"),
            A = n("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
            E = n("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
            V = i({}, D, E, A), N = function (t, e) {
                function n(e) {
                    e = "<remove></remove>" + e;
                    try {
                        var n = (new t.DOMParser).parseFromString(e, "text/html").body;
                        return n.firstChild.remove(), n
                    } catch (t) {
                    }
                }

                function r(t) {
                    return o.innerHTML = t, e.documentMode && g(o), o
                }

                var i;
                if (!e || !e.implementation) throw p("noinert");
                i = e.implementation.createHTMLDocument("inert");
                var o = (i.documentElement || i.getDocumentElement()).querySelector("body");
                return o.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', o.querySelector("svg") ? (o.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', o.querySelector("svg img") ? n : r) : function (e) {
                    e = "<remove></remove>" + e;
                    try {
                        e = encodeURI(e)
                    } catch (t) {
                        return
                    }
                    var n = new t.XMLHttpRequest;
                    return n.responseType = "document", n.open("GET", "data:text/html;charset=utf-8," + e, !1), n.send(null), e = n.response.body, e.firstChild.remove(), e
                }
            }(t, t.document)
    }).info({angularVersion: "1.7.8"}), e.module("ngSanitize").filter("linky", ["$sanitize", function (t) {
        var r = /((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
            i = /^mailto:/i, o = e.$$minErr("linky"), a = e.isDefined, s = e.isFunction, u = e.isObject, c = e.isString;
        return function (e, l, f) {
            function h(t) {
                t && v.push(n(t))
            }

            if (null == e || "" === e) return e;
            if (!c(e)) throw o("notstring", e);
            for (var p, d, $ = s(f) ? f : u(f) ? function () {
                return f
            } : function () {
                return {}
            }, m = e, v = []; e = m.match(r);) p = e[0], e[2] || e[4] || (p = (e[3] ? "http://" : "mailto:") + p), d = e.index, h(m.substr(0, d)), function (t, e) {
                var n, r = $(t);
                v.push("<a ");
                for (n in r) v.push(n + '="' + r[n] + '" ');
                !a(l) || "target" in r || v.push('target="', l, '" '), v.push('href="', t.replace(/"/g, "&quot;"), '">'), h(e), v.push("</a>")
            }(p, e[0].replace(i, "")), m = m.substring(d + e[0].length);
            return h(m), t(v.join(""))
        }
    }])
}(window, window.angular), function (t, e) {
    "use strict";

    function n(t, e, n) {
        if (!t) throw G("areq", e || "?", n || "required");
        return t
    }

    function r(t, e) {
        return t || e ? t ? e ? (j(t) && (t = t.join(" ")), j(e) && (e = e.join(" ")), t + " " + e) : t : e : ""
    }

    function i(t) {
        var e = {};
        return t && (t.to || t.from) && (e.to = t.to, e.from = t.from), e
    }

    function o(t, e, n) {
        var r = "";
        return t = j(t) ? t : t && L(t) && t.length ? t.split(/\s+/) : [], N(t, function (t, i) {
            t && 0 < t.length && (r += 0 < i ? " " : "", r += n ? e + t : t + e)
        }), r
    }

    function a(t) {
        if (t instanceof q) switch (t.length) {
            case 0:
                return t;
            case 1:
                if (1 === t[0].nodeType) return t;
                break;
            default:
                return q(s(t))
        }
        if (1 === t.nodeType) return q(t)
    }

    function s(t) {
        if (!t[0]) return t;
        for (var e = 0; e < t.length; e++) {
            var n = t[e];
            if (1 === n.nodeType) return n
        }
    }

    function u(t, e, n) {
        N(e, function (e) {
            t.addClass(e, n)
        })
    }

    function c(t, e, n) {
        N(e, function (e) {
            t.removeClass(e, n)
        })
    }

    function l(t) {
        return function (e, n) {
            n.addClass && (u(t, e, n.addClass), n.addClass = null), n.removeClass && (c(t, e, n.removeClass), n.removeClass = null)
        }
    }

    function f(t) {
        if (t = t || {}, !t.$$prepared) {
            var e = t.domOperation || _;
            t.domOperation = function () {
                t.$$domOperationFired = !0, e(), e = _
            }, t.$$prepared = !0
        }
        return t
    }

    function h(t, e) {
        p(t, e), d(t, e)
    }

    function p(t, e) {
        e.from && (t.css(e.from), e.from = null)
    }

    function d(t, e) {
        e.to && (t.css(e.to), e.to = null)
    }

    function $(t, e, n) {
        var r = e.options || {};
        n = n.options || {};
        var i = (r.addClass || "") + " " + (n.addClass || ""), o = (r.removeClass || "") + " " + (n.removeClass || "");
        return t = m(t.attr("class"), i, o), n.preparationClasses && (r.preparationClasses = w(n.preparationClasses, r.preparationClasses), delete n.preparationClasses), i = r.domOperation !== _ ? r.domOperation : null, V(r, n), i && (r.domOperation = i), r.addClass = t.addClass ? t.addClass : null, r.removeClass = t.removeClass ? t.removeClass : null, e.addClass = r.addClass, e.removeClass = r.removeClass, r
    }

    function m(t, e, n) {
        function r(t) {
            L(t) && (t = t.split(" "));
            var e = {};
            return N(t, function (t) {
                t.length && (e[t] = !0)
            }), e
        }

        var i = {};
        t = r(t), e = r(e), N(e, function (t, e) {
            i[e] = 1
        }), n = r(n), N(n, function (t, e) {
            i[e] = 1 === i[e] ? null : -1
        });
        var o = {addClass: "", removeClass: ""};
        return N(i, function (e, n) {
            var r, i;
            1 === e ? (r = "addClass", i = !t[n] || t[n + "-remove"]) : -1 === e && (r = "removeClass", i = t[n] || t[n + "-add"]), i && (o[r].length && (o[r] += " "), o[r] += n)
        }), o
    }

    function v(t) {
        return t instanceof q ? t[0] : t
    }

    function g(t, e, n, r) {
        t = "", n && (t = o(n, "ng-", !0)), r.addClass && (t = w(t, o(r.addClass, "-add"))), r.removeClass && (t = w(t, o(r.removeClass, "-remove"))), t.length && (r.preparationClasses = t, e.addClass(t))
    }

    function y(t, e) {
        var n = e ? "paused" : "", r = M + "PlayState";
        return b(t, [r, n]), [r, n]
    }

    function b(t, e) {
        t.style[e[0]] = e[1]
    }

    function w(t, e) {
        return t ? e ? t + " " + e : t : e
    }

    function x(t, e, n) {
        var r = Object.create(null), i = t.getComputedStyle(e) || {};
        return N(n, function (t, e) {
            var n = i[t];
            if (n) {
                var o = n.charAt(0);
                ("-" === o || "+" === o || 0 <= o) && (n = C(n)), 0 === n && (n = null), r[e] = n
            }
        }), r
    }

    function C(t) {
        var e = 0;
        return t = t.split(/\s*,\s*/), N(t, function (t) {
            "s" === t.charAt(t.length - 1) && (t = t.substring(0, t.length - 1)), t = parseFloat(t) || 0, e = e ? Math.max(t, e) : t
        }), e
    }

    function k(t) {
        return 0 === t || null != t
    }

    function S(t, e) {
        var n = A, r = t + "s";
        return e ? n += "Duration" : r += " linear all", [n, r]
    }

    function E(t, e, n) {
        N(n, function (n) {
            t[n] = P(t[n]) ? t[n] : e.style.getPropertyValue(n)
        })
    }

    var A, O, M, T;
    void 0 === t.ontransitionend && void 0 !== t.onwebkittransitionend ? (A = "WebkitTransition", O = "webkitTransitionEnd transitionend") : (A = "transition", O = "transitionend"), void 0 === t.onanimationend && void 0 !== t.onwebkitanimationend ? (M = "WebkitAnimation", T = "webkitAnimationEnd animationend") : (M = "animation", T = "animationend");
    var D, V, N, j, P, I, R, U, L, F, q, _, H = M + "Delay", B = M + "Duration", z = A + "Delay", W = A + "Duration",
        G = e.$$minErr("ng"), K = {
            blockTransitions: function (t, e) {
                var n = e ? "-" + e + "s" : "";
                return b(t, [z, n]), [z, n]
            }
        }, J = {
            transitionDuration: W,
            transitionDelay: z,
            transitionProperty: A + "Property",
            animationDuration: B,
            animationDelay: H,
            animationIterationCount: M + "IterationCount"
        }, Z = {transitionDuration: W, transitionDelay: z, animationDuration: B, animationDelay: H};
    e.module("ngAnimate", [], function () {
        _ = e.noop, D = e.copy, V = e.extend, q = e.element, N = e.forEach, j = e.isArray, L = e.isString, U = e.isObject, F = e.isUndefined, P = e.isDefined, R = e.isFunction, I = e.isElement
    }).info({angularVersion: "1.7.8"}).directive("ngAnimateSwap", ["$animate", function (t) {
        return {
            restrict: "A", transclude: "element", terminal: !0, priority: 550, link: function (e, n, r, i, o) {
                var a, s;
                e.$watchCollection(r.ngAnimateSwap || r.for, function (e) {
                    a && t.leave(a), s && (s.$destroy(), s = null), (e || 0 === e) && o(function (e, r) {
                        a = e, s = r, t.enter(e, null, n)
                    })
                })
            }
        }
    }]).directive("ngAnimateChildren", ["$interpolate", function (t) {
        return {
            link: function (e, n, r) {
                function i(t) {
                    n.data("$$ngAnimateChildren", "on" === t || "true" === t)
                }

                var o = r.ngAnimateChildren;
                L(o) && 0 === o.length ? n.data("$$ngAnimateChildren", !0) : (i(t(o)(e)), r.$observe("ngAnimateChildren", i))
            }
        }
    }]).factory("$$rAFScheduler", ["$$rAF", function (t) {
        function e(t) {
            r = r.concat(t), n()
        }

        function n() {
            if (r.length) {
                for (var e = r.shift(), o = 0; o < e.length; o++) e[o]();
                i || t(function () {
                    i || n()
                })
            }
        }

        var r, i;
        return r = e.queue = [], e.waitUntilQuiet = function (e) {
            i && i(), i = t(function () {
                i = null, e(), n()
            })
        }, e
    }]).provider("$$animateQueue", ["$animateProvider", function (e) {
        function r(t) {
            return {addClass: t.addClass, removeClass: t.removeClass, from: t.from, to: t.to}
        }

        function i(t) {
            if (!t) return null;
            t = t.split(" ");
            var e = Object.create(null);
            return N(t, function (t) {
                e[t] = !0
            }), e
        }

        function o(t, e) {
            if (t && e) {
                var n = i(e);
                return t.split(" ").some(function (t) {
                    return n[t]
                })
            }
        }

        function u(t, e, n) {
            return p[t].some(function (t) {
                return t(e, n)
            })
        }

        function c(t, e) {
            var n = 0 < (t.addClass || "").length, r = 0 < (t.removeClass || "").length;
            return e ? n && r : n || r
        }

        var p = this.rules = {skip: [], cancel: [], join: []};
        p.join.push(function (t, e) {
            return !t.structural && c(t)
        }), p.skip.push(function (t, e) {
            return !t.structural && !c(t)
        }), p.skip.push(function (t, e) {
            return "leave" === e.event && t.structural
        }), p.skip.push(function (t, e) {
            return e.structural && 2 === e.state && !t.structural
        }), p.cancel.push(function (t, e) {
            return e.structural && t.structural
        }), p.cancel.push(function (t, e) {
            return 2 === e.state && t.structural
        }), p.cancel.push(function (t, e) {
            if (e.structural) return !1;
            var n = t.addClass, r = t.removeClass, i = e.addClass, a = e.removeClass;
            return !(F(n) && F(r) || F(i) && F(a)) && (o(n, a) || o(r, i))
        }), this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$Map", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", "$$isDocumentHidden", function (i, o, p, d, m, y, b, w, x, C, k) {
            function S(t) {
                z.delete(t.target)
            }

            function E() {
                var t = !1;
                return function (e) {
                    t ? e() : o.$$postDigest(function () {
                        t = !0, e()
                    })
                }
            }

            function A(t, e, n) {
                var r = [], i = K[n];
                return i && N(i, function (i) {
                    X.call(i.node, e) ? r.push(i.callback) : "leave" === n && X.call(i.node, t) && r.push(i.callback)
                }), r
            }

            function O(t, e, n) {
                var r = s(e);
                return t.filter(function (t) {
                    return !(t.node === r && (!n || t.callback === n))
                })
            }

            function M(t, e, n) {
                function s(t, e, n, r) {
                    S(function () {
                        var t = A(w, m, e);
                        t.length ? i(function () {
                            N(t, function (t) {
                                t(d, n, r)
                            }), "close" !== n || m.parentNode || tt.off(m)
                        }) : "close" !== n || m.parentNode || tt.off(m)
                    }), t.progress(e, n, r)
                }

                function l(t) {
                    var e = d, n = p;
                    n.preparationClasses && (e.removeClass(n.preparationClasses), n.preparationClasses = null), n.activeClasses && (e.removeClass(n.activeClasses), n.activeClasses = null), Q(d, p), h(d, p), p.domOperation(), C.complete(!t)
                }

                var p = D(n), d = a(t), m = v(d), w = m && m.parentNode, p = f(p), C = new b, S = E();
                if (j(p.addClass) && (p.addClass = p.addClass.join(" ")), p.addClass && !L(p.addClass) && (p.addClass = null), j(p.removeClass) && (p.removeClass = p.removeClass.join(" ")), p.removeClass && !L(p.removeClass) && (p.removeClass = null), p.from && !U(p.from) && (p.from = null), p.to && !U(p.to) && (p.to = null), !(W && m && Z(m, e, n) && Y(m, p))) return l(), C;
                var O = 0 <= ["enter", "move", "leave"].indexOf(e), M = k(), V = M || z.get(m);
                n = !V && B.get(m) || {};
                var P = !!n.state;
                if (V || P && 1 === n.state || (V = !_(m, w, e)), V) return M && s(C, e, "start", r(p)), l(), M && s(C, e, "close", r(p)), C;
                if (O && T(m), M = {
                    structural: O,
                    element: d,
                    event: e,
                    addClass: p.addClass,
                    removeClass: p.removeClass,
                    close: l,
                    options: p,
                    runner: C
                }, P) {
                    if (u("skip", M, n)) return 2 === n.state ? (l(), C) : ($(d, n, M), n.runner);
                    if (u("cancel", M, n)) if (2 === n.state) n.runner.end(); else {
                        if (!n.structural) return $(d, n, M), n.runner;
                        n.close()
                    } else if (u("join", M, n)) {
                        if (2 !== n.state) return g(x, d, O ? e : null, p), e = M.event = n.event, p = $(d, n, M), n.runner;
                        $(d, M, {})
                    }
                } else $(d, M, {});
                if ((P = M.structural) || (P = "animate" === M.event && 0 < Object.keys(M.options.to || {}).length || c(M)), !P) return l(), R(m), C;
                var I = (n.counter || 0) + 1;
                return M.counter = I, H(m, 1, M), o.$$postDigest(function () {
                    d = a(t);
                    var n = B.get(m), i = !n, n = n || {},
                        o = 0 < (d.parent() || []).length && ("animate" === n.event || n.structural || c(n));
                    i || n.counter !== I || !o ? (i && (Q(d, p), h(d, p)), (i || O && n.event !== e) && (p.domOperation(), C.end()), o || R(m)) : (e = !n.structural && c(n, !0) ? "setClass" : n.event, H(m, 2), n = y(d, e, n.options), C.setHost(n), s(C, e, "start", r(p)), n.done(function (t) {
                        l(!t), (t = B.get(m)) && t.counter === I && R(m), s(C, e, "close", r(p))
                    }))
                }), C
            }

            function T(t) {
                t = t.querySelectorAll("[data-ng-animate]"), N(t, function (t) {
                    var e = parseInt(t.getAttribute("data-ng-animate"), 10), n = B.get(t);
                    if (n) switch (e) {
                        case 2:
                            n.runner.end();
                        case 1:
                            B.delete(t)
                    }
                })
            }

            function R(t) {
                t.removeAttribute("data-ng-animate"), B.delete(t)
            }

            function _(t, e, n) {
                n = d[0].body;
                var r, i = v(p), o = t === n || "HTML" === t.nodeName, a = t === i, s = !1, u = z.get(t);
                for ((t = q.data(t, "$ngAnimatePin")) && (e = v(t)); e && (a || (a = e === i), 1 === e.nodeType);) {
                    if (t = B.get(e) || {}, !s) {
                        var c = z.get(e);
                        if (!0 === c && !1 !== u) {
                            u = !0;
                            break
                        }
                        !1 === c && (u = !1), s = t.structural
                    }
                    if ((F(r) || !0 === r) && (t = q.data(e, "$$ngAnimateChildren"), P(t) && (r = t)), s && !1 === r) break;
                    if (o || (o = e === n), o && a) break;
                    e = a || !(t = q.data(e, "$ngAnimatePin")) ? e.parentNode : v(t)
                }
                return (!s || r) && !0 !== u && a && o
            }

            function H(t, e, n) {
                n = n || {}, n.state = e, t.setAttribute("data-ng-animate", e), n = (e = B.get(t)) ? V(e, n) : n, B.set(t, n)
            }

            var B = new m, z = new m, W = null, G = o.$watch(function () {
                return 0 === w.totalPendingRequests
            }, function (t) {
                t && (G(), o.$$postDigest(function () {
                    o.$$postDigest(function () {
                        null === W && (W = !0)
                    })
                }))
            }), K = Object.create(null);
            m = e.customFilter();
            var J = e.classNameFilter();
            C = function () {
                return !0
            };
            var Z = m || C, Y = J ? function (t, e) {
                var n = [t.getAttribute("class"), e.addClass, e.removeClass].join(" ");
                return J.test(n)
            } : C, Q = l(x), X = t.Node.prototype.contains || function (t) {
                return this === t || !!(16 & this.compareDocumentPosition(t))
            }, tt = {
                on: function (t, e, n) {
                    var r = s(e);
                    K[t] = K[t] || [], K[t].push({node: r, callback: n}), q(e).on("$destroy", function () {
                        B.get(r) || tt.off(t, e, n)
                    })
                }, off: function (t, e, n) {
                    if (1 !== arguments.length || L(arguments[0])) {
                        var r = K[t];
                        r && (K[t] = 1 === arguments.length ? null : O(r, e, n))
                    } else for (r in e = arguments[0], K) K[r] = O(K[r], e)
                }, pin: function (t, e) {
                    n(I(t), "element", "not an element"), n(I(e), "parentElement", "not an element"), t.data("$ngAnimatePin", e)
                }, push: function (t, e, n, r) {
                    return n = n || {}, n.domOperation = r, M(t, e, n)
                }, enabled: function (t, e) {
                    var n = arguments.length;
                    if (0 === n) e = !!W; else if (I(t)) {
                        var r = v(t);
                        1 === n ? e = !z.get(r) : (z.has(r) || q(t).on("$destroy", S), z.set(r, !e))
                    } else e = W = !!t;
                    return e
                }
            };
            return tt
        }]
    }]).provider("$$animateCache", function () {
        var t = 0, e = Object.create(null);
        this.$get = [function () {
            return {
                cacheKey: function (e, n, r, i) {
                    var o = e.parentNode;
                    return e = [o.$$ngAnimateParentKey || (o.$$ngAnimateParentKey = ++t), n, e.getAttribute("class")], r && e.push(r), i && e.push(i), e.join(" ")
                }, containsCachedAnimationWithoutDuration: function (t) {
                    return (t = e[t]) && !t.isValid || !1
                }, flush: function () {
                    e = Object.create(null)
                }, count: function (t) {
                    return (t = e[t]) ? t.total : 0
                }, get: function (t) {
                    return (t = e[t]) && t.value
                }, put: function (t, n, r) {
                    e[t] ? (e[t].total++, e[t].value = n) : e[t] = {total: 1, value: n, isValid: r}
                }
            }
        }]
    }).provider("$$animation", ["$animateProvider", function (t) {
        var e = this.drivers = [];
        this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$Map", "$$rAFScheduler", "$$animateCache", function (t, n, i, o, a, s, u) {
            function c(t) {
                function e(t) {
                    if (t.processed) return t;
                    t.processed = !0;
                    var n = t.domNode, o = n.parentNode;
                    i.set(n, t);
                    for (var a; o;) {
                        if (a = i.get(o)) {
                            a.processed || (a = e(a));
                            break
                        }
                        o = o.parentNode
                    }
                    return (a || r).children.push(t), t
                }

                var n, r = {children: []}, i = new a;
                for (n = 0; n < t.length; n++) {
                    var o = t[n];
                    i.set(o.domNode, t[n] = {domNode: o.domNode, element: o.element, fn: o.fn, children: []})
                }
                for (n = 0; n < t.length; n++) e(t[n]);
                return function (t) {
                    var e, n = [], r = [];
                    for (e = 0; e < t.children.length; e++) r.push(t.children[e]);
                    t = r.length;
                    var i = 0, o = [];
                    for (e = 0; e < r.length; e++) {
                        var a = r[e];
                        0 >= t && (t = i, i = 0, n.push(o), o = []), o.push(a), a.children.forEach(function (t) {
                            i++, r.push(t)
                        }), t--
                    }
                    return o.length && n.push(o), n
                }(r)
            }

            var p = [], d = l(t);
            return function (a, l, $) {
                function m(t) {
                    t = t.hasAttribute("ng-animate-ref") ? [t] : t.querySelectorAll("[ng-animate-ref]");
                    var e = [];
                    return N(t, function (t) {
                        var n = t.getAttribute("ng-animate-ref");
                        n && n.length && e.push(t)
                    }), e
                }

                function g(t) {
                    var e = [], n = {};
                    N(t, function (t, r) {
                        var i = v(t.element), o = 0 <= ["enter", "move"].indexOf(t.event), i = t.structural ? m(i) : [];
                        if (i.length) {
                            var a = o ? "to" : "from";
                            N(i, function (t) {
                                var e = t.getAttribute("ng-animate-ref");
                                n[e] = n[e] || {}, n[e][a] = {animationID: r, element: q(t)}
                            })
                        } else e.push(t)
                    });
                    var r = {}, i = {};
                    return N(n, function (n, o) {
                        var a = n.from, s = n.to;
                        if (a && s) {
                            var u = t[a.animationID], c = t[s.animationID], l = a.animationID.toString();
                            if (!i[l]) {
                                var f = i[l] = {
                                    structural: !0, beforeStart: function () {
                                        u.beforeStart(), c.beforeStart()
                                    }, close: function () {
                                        u.close(), c.close()
                                    }, classes: y(u.classes, c.classes), from: u, to: c, anchors: []
                                };
                                f.classes.length ? e.push(f) : (e.push(u), e.push(c))
                            }
                            i[l].anchors.push({out: a.element, in: s.element})
                        } else a = a ? a.animationID : s.animationID, s = a.toString(), r[s] || (r[s] = !0, e.push(t[a]))
                    }), e
                }

                function y(t, e) {
                    t = t.split(" "), e = e.split(" ");
                    for (var n = [], r = 0; r < t.length; r++) {
                        var i = t[r];
                        if ("ng-" !== i.substring(0, 3)) for (var o = 0; o < e.length; o++) if (i === e[o]) {
                            n.push(i);
                            break
                        }
                    }
                    return n.join(" ")
                }

                function b(t) {
                    for (var n = e.length - 1; 0 <= n; n--) {
                        var r = i.get(e[n])(t);
                        if (r) return r
                    }
                }

                function w(t, e) {
                    function n(t) {
                        (t = t.data("$$animationRunner")) && t.setHost(e)
                    }

                    t.from && t.to ? (n(t.from.element), n(t.to.element)) : n(t.element)
                }

                function x() {
                    var t = a.data("$$animationRunner");
                    !t || "leave" === l && $.$$domOperationFired || t.end()
                }

                function C(e) {
                    a.off("$destroy", x), a.removeData("$$animationRunner"), d(a, $), h(a, $), $.domOperation(), A && t.removeClass(a, A), S.complete(!e)
                }

                $ = f($);
                var k = 0 <= ["enter", "move", "leave"].indexOf(l), S = new o({
                    end: function () {
                        C()
                    }, cancel: function () {
                        C(!0)
                    }
                });
                if (!e.length) return C(), S;
                var E = r(a.attr("class"), r($.addClass, $.removeClass)), A = $.tempClasses;
                return A && (E += " " + A, $.tempClasses = null), k && a.data("$$animatePrepareClasses", "ng-" + l + "-prepare"), a.data("$$animationRunner", S), p.push({
                    element: a,
                    classes: E,
                    event: l,
                    structural: k,
                    options: $,
                    beforeStart: function () {
                        A = (A ? A + " " : "") + "ng-animate", t.addClass(a, A);
                        var e = a.data("$$animatePrepareClasses");
                        e && t.removeClass(a, e)
                    },
                    close: C
                }), a.on("$destroy", x), 1 < p.length ? S : (n.$$postDigest(function () {
                    var e = [];
                    N(p, function (t) {
                        t.element.data("$$animationRunner") ? e.push(t) : t.close()
                    }), p.length = 0;
                    var n = g(e), r = [];
                    N(n, function (t) {
                        var e = t.from ? t.from.element : t.element, n = $.addClass,
                            i = u.cacheKey(e[0], t.event, (n ? n + " " : "") + "ng-animate", $.removeClass);
                        r.push({
                            element: e, domNode: v(e), fn: function () {
                                var e, n = t.close;
                                if (u.containsCachedAnimationWithoutDuration(i)) n(); else {
                                    if (t.beforeStart(), (t.anchors ? t.from.element || t.to.element : t.element).data("$$animationRunner")) {
                                        var r = b(t);
                                        r && (e = r.start)
                                    }
                                    e ? (e = e(), e.done(function (t) {
                                        n(!t)
                                    }), w(t, e)) : n()
                                }
                            }
                        })
                    });
                    for (var n = c(r), i = 0; i < n.length; i++) for (var o = n[i], a = 0; a < o.length; a++) {
                        var l = o[a], f = l.element;
                        n[i][a] = l.fn, 0 === i ? f.removeData("$$animatePrepareClasses") : (l = f.data("$$animatePrepareClasses")) && t.addClass(f, l)
                    }
                    s(n)
                }), S)
            }
        }]
    }]).provider("$animateCss", ["$animateProvider", function (t) {
        this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$animateCache", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (t, e, n, r, a, s, u, c, $) {
            function m(n, r, i, s) {
                var u, c = "stagger-" + i;
                return 0 < a.count(i) && ((u = a.get(c)) || (r = o(r, "-stagger"), e.addClass(n, r), u = x(t, n, s), u.animationDuration = Math.max(u.animationDuration, 0), u.transitionDuration = Math.max(u.transitionDuration, 0), e.removeClass(n, r), a.put(c, u, !0))), u || {}
            }

            function g(t) {
                V.push(t), c.waitUntilQuiet(function () {
                    a.flush();
                    for (var t = s(), e = 0; e < V.length; e++) V[e](t);
                    V.length = 0
                })
            }

            function w(e, n, r, i) {
                return n = a.get(r), n || (n = x(t, e, J), "infinite" === n.animationIterationCount && (n.animationIterationCount = 1)), a.put(r, n, i || 0 < n.transitionDuration || 0 < n.animationDuration), e = n, r = e.animationDelay, i = e.transitionDelay, e.maxDelay = r && i ? Math.max(r, i) : r || i, e.maxDuration = Math.max(e.animationDuration * e.animationIterationCount, e.transitionDuration), e
            }

            var C = l(e), V = [];
            return function (t, s) {
                function c() {
                    x()
                }

                function l() {
                    x(!0)
                }

                function x(n) {
                    if (!(q || G && W)) {
                        q = !0, W = !1, ft && !U.$$skipPreparationClasses && e.removeClass(t, ft), yt && e.removeClass(t, yt), y(F, !1), K.blockTransitions(F, !1), N(rt, function (t) {
                            F.style[t[0]] = ""
                        }), C(t, U), h(t, U), Object.keys(L).length && N(L, function (t, e) {
                            t ? F.style.setProperty(e, t) : F.style.removeProperty(e)
                        }), U.onDone && U.onDone(), at && at.length && t.off(at.join(" "), I);
                        var i = t.data("$$animateCss");
                        i && (r.cancel(i[0].timer), t.removeData("$$animateCss")), J && J.complete(!n)
                    }
                }

                function V(t) {
                    gt.blockTransition && K.blockTransitions(F, t), gt.blockKeyframeAnimation && y(F, !!t)
                }

                function P() {
                    return J = new n({end: c, cancel: l}), g(_), x(), {
                        $$willAnimate: !1, start: function () {
                            return J
                        }, end: c
                    }
                }

                function I(t) {
                    t.stopPropagation();
                    var e = t.originalEvent || t;
                    e.target === F && (t = e.$manualTimeStamp || Date.now(), e = parseFloat(e.elapsedTime.toFixed(3)), Math.max(t - nt, 0) >= X && e >= tt && (G = !0, x()))
                }

                function R() {
                    function n() {
                        if (!q) {
                            if (V(!1), N(rt, function (t) {
                                F.style[t[0]] = t[1]
                            }), C(t, U), e.addClass(t, yt), gt.recalculateTimingStyles) {
                                if (ht = F.getAttribute("class") + " " + ft, dt = a.cacheKey(F, st, U.addClass, U.removeClass), mt = w(F, ht, dt, !1), vt = mt.maxDelay, Q = Math.max(vt, 0), 0 === (tt = mt.maxDuration)) return void x();
                                gt.hasTransitions = 0 < mt.transitionDuration, gt.hasAnimations = 0 < mt.animationDuration
                            }
                            if (gt.applyAnimationDelay && (vt = "boolean" != typeof U.delay && k(U.delay) ? parseFloat(U.delay) : vt, Q = Math.max(vt, 0), mt.animationDelay = vt, bt = [H, vt + "s"], rt.push(bt), F.style[bt[0]] = bt[1]), X = 1e3 * Q, et = 1e3 * tt, U.easing) {
                                var n, o = U.easing;
                                gt.hasTransitions && (n = A + "TimingFunction", rt.push([n, o]), F.style[n] = o), gt.hasAnimations && (n = M + "TimingFunction", rt.push([n, o]), F.style[n] = o)
                            }
                            mt.transitionDuration && at.push(O), mt.animationDuration && at.push(T), nt = Date.now();
                            var s = X + 1.5 * et;
                            n = nt + s;
                            var o = t.data("$$animateCss") || [], u = !0;
                            if (o.length) {
                                var c = o[0];
                                (u = n > c.expectedEndTime) ? r.cancel(c.timer) : o.push(x)
                            }
                            u && (s = r(i, s, !1), o[0] = {
                                timer: s,
                                expectedEndTime: n
                            }, o.push(x), t.data("$$animateCss", o)), at.length && t.on(at.join(" "), I), U.to && (U.cleanupStyles && E(L, F, Object.keys(U.to)), d(t, U))
                        }
                    }

                    function i() {
                        var e = t.data("$$animateCss");
                        if (e) {
                            for (var n = 1; n < e.length; n++) e[n]();
                            t.removeData("$$animateCss")
                        }
                    }

                    if (!q) if (F.parentNode) {
                        var o = function (t) {
                                if (G) W && t && (W = !1, x()); else if (W = !t, mt.animationDuration) if (t = y(F, W), W) rt.push(t); else {
                                    var e = rt, n = e.indexOf(t);
                                    0 <= t && e.splice(n, 1)
                                }
                            },
                            s = 0 < $t && (mt.transitionDuration && 0 === pt.transitionDuration || mt.animationDuration && 0 === pt.animationDuration) && Math.max(pt.animationDelay, pt.transitionDelay);
                        s ? r(n, Math.floor(s * $t * 1e3), !1) : n(), Y.resume = function () {
                            o(!0)
                        }, Y.pause = function () {
                            o(!1)
                        }
                    } else x()
                }

                var U = s || {};
                U.$$prepared || (U = f(D(U)));
                var L = {}, F = v(t);
                if (!F || !F.parentNode || !$.enabled()) return P();
                var q, W, G, J, Y, Q, X, tt, et, nt, rt = [], it = t.attr("class"), ot = i(U), at = [];
                if (0 === U.duration || !u.animations && !u.transitions) return P();
                var st = U.event && j(U.event) ? U.event.join(" ") : U.event, ut = st && U.structural, ct = "", lt = "";
                ut ? ct = o(st, "ng-", !0) : st && (ct = st), U.addClass && (lt += o(U.addClass, "-add")), U.removeClass && (lt.length && (lt += " "), lt += o(U.removeClass, "-remove")), U.applyClassesEarly && lt.length && C(t, U);
                var ft = [ct, lt].join(" ").trim(), ht = it + " " + ft, it = ot.to && 0 < Object.keys(ot.to).length;
                if (!(0 < (U.keyframeStyle || "").length || it || ft)) return P();
                var pt, dt = a.cacheKey(F, st, U.addClass, U.removeClass);
                if (a.containsCachedAnimationWithoutDuration(dt)) return ft = null, P();
                0 < U.stagger ? (ot = parseFloat(U.stagger), pt = {
                    transitionDelay: ot,
                    animationDelay: ot,
                    transitionDuration: 0,
                    animationDuration: 0
                }) : pt = m(F, ft, dt, Z), U.$$skipPreparationClasses || e.addClass(t, ft), U.transitionStyle && (ot = [A, U.transitionStyle], b(F, ot), rt.push(ot)), 0 <= U.duration && (ot = 0 < F.style[A].length, ot = S(U.duration, ot), b(F, ot), rt.push(ot)), U.keyframeStyle && (ot = [M, U.keyframeStyle], b(F, ot), rt.push(ot));
                var $t = pt ? 0 <= U.staggerIndex ? U.staggerIndex : a.count(dt) : 0;
                (ct = 0 === $t) && !U.skipBlocking && K.blockTransitions(F, 9999);
                var mt = w(F, ht, dt, !ut), vt = mt.maxDelay;
                Q = Math.max(vt, 0), tt = mt.maxDuration;
                var gt = {};
                if (gt.hasTransitions = 0 < mt.transitionDuration, gt.hasAnimations = 0 < mt.animationDuration, gt.hasTransitionAll = gt.hasTransitions && "all" === mt.transitionProperty, gt.applyTransitionDuration = it && (gt.hasTransitions && !gt.hasTransitionAll || gt.hasAnimations && !gt.hasTransitions), gt.applyAnimationDuration = U.duration && gt.hasAnimations, gt.applyTransitionDelay = k(U.delay) && (gt.applyTransitionDuration || gt.hasTransitions), gt.applyAnimationDelay = k(U.delay) && gt.hasAnimations, gt.recalculateTimingStyles = 0 < lt.length, (gt.applyTransitionDuration || gt.applyAnimationDuration) && (tt = U.duration ? parseFloat(U.duration) : tt, gt.applyTransitionDuration && (gt.hasTransitions = !0, mt.transitionDuration = tt, ot = 0 < F.style[A + "Property"].length, rt.push(S(tt, ot))), gt.applyAnimationDuration && (gt.hasAnimations = !0, mt.animationDuration = tt, rt.push([B, tt + "s"]))), 0 === tt && !gt.recalculateTimingStyles) return P();
                var yt = o(ft, "-active");
                if (null != U.delay) {
                    var bt;
                    "boolean" != typeof U.delay && (bt = parseFloat(U.delay), Q = Math.max(bt, 0)), gt.applyTransitionDelay && rt.push([z, bt + "s"]), gt.applyAnimationDelay && rt.push([H, bt + "s"])
                }
                return null == U.duration && 0 < mt.transitionDuration && (gt.recalculateTimingStyles = gt.recalculateTimingStyles || ct), X = 1e3 * Q, et = 1e3 * tt, U.skipBlocking || (gt.blockTransition = 0 < mt.transitionDuration, gt.blockKeyframeAnimation = 0 < mt.animationDuration && 0 < pt.animationDelay && 0 === pt.animationDuration), U.from && (U.cleanupStyles && E(L, F, Object.keys(U.from)), p(t, U)), gt.blockTransition || gt.blockKeyframeAnimation ? V(tt) : U.skipBlocking || K.blockTransitions(F, !1), {
                    $$willAnimate: !0,
                    end: c,
                    start: function () {
                        if (!q) return Y = {end: c, cancel: l, resume: null, pause: null}, J = new n(Y), g(R), J
                    }
                }
            }
        }]
    }]).provider("$$animateCssDriver", ["$$animationProvider", function (t) {
        t.drivers.push("$$animateCssDriver"), this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (t, e, n, r, i, o, a) {
            function s(t) {
                return t.replace(/\bng-\S+\b/g, "")
            }

            function u(t, e) {
                return L(t) && (t = t.split(" ")), L(e) && (e = e.split(" ")), t.filter(function (t) {
                    return -1 === e.indexOf(t)
                }).join(" ")
            }

            function c(e, r, i) {
                function o(t) {
                    var e = {}, n = v(t).getBoundingClientRect();
                    return N(["width", "height", "top", "left"], function (t) {
                        var r = n[t];
                        switch (t) {
                            case"top":
                                r += h.scrollTop;
                                break;
                            case"left":
                                r += h.scrollLeft
                        }
                        e[t] = Math.floor(r) + "px"
                    }), e
                }

                function a() {
                    var e = s(i.attr("class") || ""), n = u(e, f), e = u(f, e), n = t(l, {
                        to: o(i),
                        addClass: "ng-anchor-in " + n,
                        removeClass: "ng-anchor-out " + e,
                        delay: !0
                    });
                    return n.$$willAnimate ? n : null
                }

                function c() {
                    l.remove(), r.removeClass("ng-animate-shim"), i.removeClass("ng-animate-shim")
                }

                var l = q(v(r).cloneNode(!0)), f = s(l.attr("class") || "");
                r.addClass("ng-animate-shim"), i.addClass("ng-animate-shim"), l.addClass("ng-anchor"), p.append(l);
                var d;
                if (!(e = function () {
                    var e = t(l, {addClass: "ng-anchor-out", delay: !0, from: o(r)});
                    return e.$$willAnimate ? e : null
                }()) && !(d = a())) return c();
                var $ = e || d;
                return {
                    start: function () {
                        function t() {
                            r && r.end()
                        }

                        var e, r = $.start();
                        return r.done(function () {
                            if (r = null, !d && (d = a())) return r = d.start(), r.done(function () {
                                r = null, c(), e.complete()
                            }), r;
                            c(), e.complete()
                        }), e = new n({end: t, cancel: t})
                    }
                }
            }

            function l(t, e, r, i) {
                var o = f(t), a = f(e), s = [];
                if (N(i, function (t) {
                    (t = c(r, t.out, t.in)) && s.push(t)
                }), o || a || 0 !== s.length) return {
                    start: function () {
                        function t() {
                            N(e, function (t) {
                                t.end()
                            })
                        }

                        var e = [];
                        o && e.push(o.start()), a && e.push(a.start()), N(s, function (t) {
                            e.push(t.start())
                        });
                        var r = new n({end: t, cancel: t});
                        return n.all(e, function (t) {
                            r.complete(t)
                        }), r
                    }
                }
            }

            function f(e) {
                var n = e.element, r = e.options || {};
                return e.structural && (r.event = e.event, r.structural = !0, r.applyClassesEarly = !0, "leave" === e.event && (r.onDone = r.domOperation)), r.preparationClasses && (r.event = w(r.event, r.preparationClasses)), e = t(n, r), e.$$willAnimate ? e : null
            }

            if (!i.animations && !i.transitions) return _;
            var h = a[0].body;
            e = v(r);
            var p = q(e.parentNode && 11 === e.parentNode.nodeType || h.contains(e) ? e : h);
            return function (t) {
                return t.from && t.to ? l(t.from, t.to, t.classes, t.anchors) : f(t)
            }
        }]
    }]).provider("$$animateJs", ["$animateProvider", function (t) {
        this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (e, n, r) {
            function i(n) {
                n = j(n) ? n : n.split(" ");
                for (var r = [], i = {}, o = 0; o < n.length; o++) {
                    var a = n[o], s = t.$$registeredAnimations[a];
                    s && !i[a] && (r.push(e.get(s)), i[a] = !0)
                }
                return r
            }

            var o = l(r);
            return function (t, e, r, a) {
                function s() {
                    a.domOperation(), o(t, a)
                }

                function u(t, e, r, i, o) {
                    switch (r) {
                        case"animate":
                            e = [e, i.from, i.to, o];
                            break;
                        case"setClass":
                            e = [e, m, v, o];
                            break;
                        case"addClass":
                            e = [e, m, o];
                            break;
                        case"removeClass":
                            e = [e, v, o];
                            break;
                        default:
                            e = [e, o]
                    }
                    if (e.push(i), t = t.apply(t, e)) if (R(t.start) && (t = t.start()), t instanceof n) t.done(o); else if (R(t)) return t;
                    return _
                }

                function c(t, e, r, i, o) {
                    var a = [];
                    return N(i, function (i) {
                        var s = i[o];
                        s && a.push(function () {
                            var i, o, a = !1, c = function (t) {
                                a || (a = !0, (o || _)(t), i.complete(!t))
                            };
                            return i = new n({
                                end: function () {
                                    c()
                                }, cancel: function () {
                                    c(!0)
                                }
                            }), o = u(s, t, e, r, function (t) {
                                c(!1 === t)
                            }), i
                        })
                    }), a
                }

                function l(t, e, r, i, o) {
                    var a = c(t, e, r, i, o);
                    if (0 === a.length) {
                        var s, u;
                        "beforeSetClass" === o ? (s = c(t, "removeClass", r, i, "beforeRemoveClass"), u = c(t, "addClass", r, i, "beforeAddClass")) : "setClass" === o && (s = c(t, "removeClass", r, i, "removeClass"), u = c(t, "addClass", r, i, "addClass")), s && (a = a.concat(s)), u && (a = a.concat(u))
                    }
                    if (0 !== a.length) return function (t) {
                        var e = [];
                        return a.length && N(a, function (t) {
                            e.push(t())
                        }), e.length ? n.all(e, t) : t(), function (t) {
                            N(e, function (e) {
                                t ? e.cancel() : e.end()
                            })
                        }
                    }
                }

                var p = !1;
                3 === arguments.length && U(r) && (a = r, r = null), a = f(a), r || (r = t.attr("class") || "", a.addClass && (r += " " + a.addClass), a.removeClass && (r += " " + a.removeClass));
                var d, $, m = a.addClass, v = a.removeClass, g = i(r);
                if (g.length) {
                    var y, b;
                    "leave" === e ? (b = "leave", y = "afterLeave") : (b = "before" + e.charAt(0).toUpperCase() + e.substr(1), y = e), "enter" !== e && "move" !== e && (d = l(t, e, a, g, b)), $ = l(t, e, a, g, y)
                }
                if (d || $) {
                    var w;
                    return {
                        $$willAnimate: !0, end: function () {
                            return w ? w.end() : (p = !0, s(), h(t, a), w = new n, w.complete(!0)), w
                        }, start: function () {
                            function e(e) {
                                p = !0, s(), h(t, a), w.complete(e)
                            }

                            if (w) return w;
                            w = new n;
                            var r, i = [];
                            return d && i.push(function (t) {
                                r = d(t)
                            }), i.length ? i.push(function (t) {
                                s(), t(!0)
                            }) : s(), $ && i.push(function (t) {
                                r = $(t)
                            }), w.setHost({
                                end: function () {
                                    p || ((r || _)(void 0), e(void 0))
                                }, cancel: function () {
                                    p || ((r || _)(!0), e(!0))
                                }
                            }), n.chain(i, e), w
                        }
                    }
                }
            }
        }]
    }]).provider("$$animateJsDriver", ["$$animationProvider", function (t) {
        t.drivers.push("$$animateJsDriver"), this.$get = ["$$animateJs", "$$AnimateRunner", function (t, e) {
            function n(e) {
                return t(e.element, e.event, e.classes, e.options)
            }

            return function (t) {
                if (!t.from || !t.to) return n(t);
                var r = n(t.from), i = n(t.to);
                return r || i ? {
                    start: function () {
                        function t() {
                            return function () {
                                N(n, function (t) {
                                    t.end()
                                })
                            }
                        }

                        var n = [];
                        r && n.push(r.start()), i && n.push(i.start()), e.all(n, function (t) {
                            o.complete(t)
                        });
                        var o = new e({end: t(), cancel: t()});
                        return o
                    }
                } : void 0
            }
        }]
    }])
}(window, window.angular);
var Chat = angular.module("Chat", ["ngSanitize", "ngAnimate"]);
Chat.directive("resize", ["$window", "$timeout", function (t, e) {
    function n(e, n, r) {
        var i = e.start;
        e.$watch("start", function (e) {
            if (void 0 !== (i = e) && !0 === i) {
                if (n[0]) {
                    var r = 40, o = (window.innerHeight, document.getElementById("footer")), a = n[0].clientHeight;
                    console.log(n), console.log(a), o.style.bottom = -a + r + "px", o.style.marginTop = 0
                }
                angular.element(t).bind("resize", function () {
                    var t = document.getElementById("footer"), e = n[0].clientHeight;
                    t.style.bottom = -e + r + "px", t.style.marginTop = 0
                })
            }
        })
    }

    return {link: n, scope: {start: "="}, restrict: "EA"}
}]), Chat.controller("MainCtrl", ["$scope", "$timeout", "$interval", function (t, e, n) {
    var r, i = (document.getElementsByClassName("alert")[0], document.getElementsByClassName("overlay")[0], "");
    navigator.userAgent && (i = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream), t.overlay = !0, t.platform = "", t.active = !0, t.platform = i ? "ios" : "android", t.randomIntFromInterval = function (t, e) {
        return Math.floor(Math.random() * (e - t + 1) + t)
    }, t.shodDialog = !1, t.callButton = !1, t.questionBox = !1, t.footer = !1, t.messageCount = 0, t.dialog = [], t.person = "Sabina", t.city = "", t.phoneNumber = "0690985247", t.managerDialog = [{
        text: "Üdvözöllek! Mindannyian meghalunk egyszer…",
        who: "manager"
    }, {text: "Tudni akarod a halálod okát és időpontját?", who: "manager"}, {
        text: "Kérem, add meg a nemed:",
        who: "manager",
        type: "question",
        wait: !0,
        answer: [{text: "Nő"}, {text: "Férfi"}]
    }, {
        text: "Milyen gyakran fogyasztasz alkoholt?",
        who: "manager",
        type: "question",
        wait: !0,
        answer: [{text: "Egyáltalán nem"}, {text: "Többször egy hónapban"}, {text: "Többször egy héten"}, {text: "Naponta"}]
    }, {
        text: "Milyen gyakran fogyasztasz gyorsételt?",
        who: "manager",
        type: "question",
        wait: !0,
        answer: [{text: "Gyakran"}, {text: "Többször egy héten"}, {text: "Ritkán, de előfordul"}, {text: "Nem fogyasztok gyorsételt"}]
    }, {
        text: "Diagnosztizáltak rákot valamely közeli rokonodnál?",
        who: "manager",
        type: "question",
        wait: !0,
        answer: [{text: "Igen"}, {text: "Nem"}, {text: "Nem tudom"}]
    }, {
        text: "Dohányzol?",
        who: "manager",
        type: "question",
        wait: !0,
        answer: [{text: "Nem"}, {text: "Csak akkor, ha alkoholt iszok"}, {text: "Kevesebbet, mint napi egy doboz"}, {text: "Többet, mint napi egy doboz"}]
    }, {
        text: "Gépeld be a születésed időpontját",
        who: "manager",
        wait: !0,
        type: "date"
    }, {text: "Köszönöm a válaszaidat!", who: "manager"}, {
        text: 'Egy üzenetet rögzítettem számodra.',
        who: "manager"
    }, {
        text: "Hívj fel, és hallgasd meg a fontos üzenetet. Különben a következmények visszafordíthatatlanok lehetnek.",
        who: "manager"
    }, {text: "Fel tudsz hívni, és meghallgatni az üzenetet?", who: "manager"}], t.managerSay = function (n, i) {
        t.shodDialog = !0, r = e(function () {
            t.dialog.push(t.managerDialog[n]), t.messageCount++, t.shodDialog = !1, t.userSay = !1, t.bzz()
        }, i)
    }, t.startChat = function (e, n) {
        t.hidden = !0, t.managerSay(e, n)
    }, t.$watch("dialog", function (n, r, i) {
        var o = t.dialog.length, a = t.managerMessage(n);
        n[o - 1] && a !== t.managerDialog.length && (n[o - 1].wait || t.managerSay(a, 6e3)), a === t.managerDialog.length && (t.callButton = !0, e(function () {
            t.footer = !0
        }, 600)), t.listScroll()
    }, !0), t.managerMessage = function (t) {
        var e = 0;
        return angular.forEach(t, function (t) {
            "manager" === t.who && e++
        }), e
    }, t.sendMessage = function (e, n) {
        null !== n && (n.currentTarget.offsetParent.style.display = "none"), t.dialog.push({
            text: e,
            who: "user"
        }), t.listScroll()
    }, t.bzz = function () {
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate, navigator.vibrate && navigator.vibrate(200)
    }, t.listScroll = function () {
        var t = angular.element(document.querySelector(".body-container"));
        e(function () {
            t[0].scrollTop = t[0].scrollHeight
        }, 500)
    };
    t.formChange = function (e) {
        var n = e.day, r = e.month, i = e.year;
        if (n && r && i) {
            n = n < 10 ? "0" + n : n, r = r < 10 ? "0" + r : r, document.getElementById("zodiak-form").style.display = "none";
            var o = n + "." + r + "." + i;
            t.sendMessage(o, null)
        }
    }, t.startChat(0, 4e3)
}]);