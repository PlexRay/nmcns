/*! Unit.js v1.0.1 | (c) 2014 Nicolas Tallefourtane | http://unitjs.com/license.html */
/*! Sinon.JS v1.10.3 | (c) 2014 Christian Johansen (christian@cjohansen.no) | https://github.com/cjohansen/Sinon.JS/blob/master/LICENSE */
this.sinon = function() {
    function define(e, t, n) {
        "samsam" == e ? samsam = t() : "function" == typeof n && (formatio = n(samsam))
    }
    var samsam, formatio;
    define.amd = {}, ("function" == typeof define && define.amd && function(e) {
        define("samsam", e)
    } || "object" == typeof module && function(e) {
        module.exports = e()
    } || function(e) {
        this.samsam = e()
    })(function() {
        function e(e) {
            var t = e;
            return "number" == typeof e && e !== t
        }

        function t(e) {
            return f.toString.call(e).split(/[ \]]/)[1]
        }

        function n(e) {
            if ("object" != typeof e || "number" != typeof e.length || "Array" === t(e)) return !1;
            if ("function" == typeof e.callee) return !0;
            try {
                e[e.length] = 6, delete e[e.length]
            } catch (n) {
                return !0
            }
            return !1
        }

        function r(e) {
            if (!e || 1 !== e.nodeType || !h) return !1;
            try {
                e.appendChild(h), e.removeChild(h)
            } catch (t) {
                return !1
            }
            return !0
        }

        function i(e) {
            var t, n = [];
            for (t in e) f.hasOwnProperty.call(e, t) && n.push(t);
            return n
        }

        function o(e) {
            return "function" == typeof e.getTime && e.getTime() == e.valueOf()
        }

        function s(e) {
            return 0 === e && 1 / e === -1 / 0
        }

        function a(t, n) {
            return t === n || e(t) && e(n) ? 0 !== t || s(t) === s(n) : void 0
        }

        function u(s, u) {
            function l(e) {
                return "object" != typeof e || null === e || e instanceof Boolean || e instanceof Date || e instanceof Number || e instanceof RegExp || e instanceof String ? !1 : !0
            }

            function c(e, t) {
                var n;
                for (n = 0; n < e.length; n++)
                    if (e[n] === t) return n;
                return -1
            }
            var h = [],
                p = [],
                d = [],
                y = [],
                m = {};
            return function g(s, u, v, w) {
                var b = typeof s,
                    x = typeof u;
                if (s === u || e(s) || e(u) || null == s || null == u || "object" !== b || "object" !== x) return a(s, u);
                if (r(s) || r(u)) return !1;
                var C = o(s),
                    E = o(u);
                if (!(!C && !E || C && E && s.getTime() === u.getTime())) return !1;
                if (s instanceof RegExp && u instanceof RegExp && s.toString() !== u.toString()) return !1;
                var T = t(s),
                    A = t(u),
                    k = i(s),
                    S = i(u);
                if (n(s) || n(u)) {
                    if (s.length !== u.length) return !1
                } else if (b !== x || T !== A || k.length !== S.length) return !1;
                var O, R, j, q, I, N, D, P, L, M, X;
                for (R = 0, j = k.length; j > R; R++) {
                    if (O = k[R], !f.hasOwnProperty.call(u, O)) return !1;
                    if (q = s[O], I = u[O], N = l(q), D = l(I), P = N ? c(h, q) : -1, L = D ? c(p, I) : -1, M = -1 !== P ? d[P] : v + "[" + JSON.stringify(O) + "]", X = -1 !== L ? y[L] : w + "[" + JSON.stringify(O) + "]", m[M + X]) return !0;
                    if (-1 === P && N && (h.push(q), d.push(M)), -1 === L && D && (p.push(I), y.push(X)), N && D && (m[M + X] = !0), !g(q, I, M, X)) return !1
                }
                return !0
            }(s, u, "$1", "$2")
        }

        function l(e, t) {
            if (0 === t.length) return !0;
            var n, r, i, o;
            for (n = 0, r = e.length; r > n; ++n)
                if (c(e[n], t[0])) {
                    for (i = 0, o = t.length; o > i; ++i)
                        if (!c(e[n + i], t[i])) return !1;
                    return !0
                }
            return !1
        }
        var c, f = Object.prototype,
            h = "undefined" != typeof document && document.createElement("div");
        return c = function p(e, n) {
            if (n && "function" == typeof n.test) return n.test(e);
            if ("function" == typeof n) return n(e) === !0;
            if ("string" == typeof n) {
                n = n.toLowerCase();
                var r = "string" == typeof e || !!e;
                return r && String(e).toLowerCase().indexOf(n) >= 0
            }
            if ("number" == typeof n) return n === e;
            if ("boolean" == typeof n) return n === e;
            if ("Array" === t(e) && "Array" === t(n)) return l(e, n);
            if (n && "object" == typeof n) {
                var i;
                for (i in n)
                    if (!p(e[i], n[i])) return !1;
                return !0
            }
            throw new Error("Matcher was not a string, a number, a function, a boolean or an object")
        }, {
            isArguments: n,
            isElement: r,
            isDate: o,
            isNegZero: s,
            identical: a,
            deepEqual: u,
            match: c,
            keys: i
        }
    }), ("function" == typeof define && define.amd && function(e) {
        define("formatio", ["samsam"], e)
    } || "object" == typeof module && function(e) {
        module.exports = e(require("samsam"))
    } || function(e) {
        this.formatio = e(this.samsam)
    })(function(e) {
        function t(e) {
            if (!e) return "";
            if (e.displayName) return e.displayName;
            if (e.name) return e.name;
            var t = e.toString().match(/function\s+([^\(]+)/m);
            return t && t[1] || ""
        }

        function n(e, n) {
            var r, i, o = t(n && n.constructor),
                a = e.excludeConstructors || s.excludeConstructors || [];
            for (r = 0, i = a.length; i > r; ++r) {
                if ("string" == typeof a[r] && a[r] === o) return "";
                if (a[r].test && a[r].test(o)) return ""
            }
            return o
        }

        function r(e, t) {
            if ("object" != typeof e) return !1;
            var n, r;
            for (n = 0, r = t.length; r > n; ++n)
                if (t[n] === e) return !0;
            return !1
        }

        function i(t, n, o, s) {
            if ("string" == typeof n) {
                var u = t.quoteStrings,
                    l = "boolean" != typeof u || u;
                return o || l ? '"' + n + '"' : n
            }
            if ("function" == typeof n && !(n instanceof RegExp)) return i.func(n);
            if (o = o || [], r(n, o)) return "[Circular]";
            if ("[object Array]" === Object.prototype.toString.call(n)) return i.array.call(t, n, o);
            if (!n) return String(1 / n === -1 / 0 ? "-0" : n);
            if (e.isElement(n)) return i.element(n);
            if ("function" == typeof n.toString && n.toString !== Object.prototype.toString) return n.toString();
            var c, f;
            for (c = 0, f = a.length; f > c; c++)
                if (n === a[c].object) return a[c].value;
            return i.object.call(t, n, o, s)
        }

        function o(e) {
            for (var t in e) this[t] = e[t]
        }
        var s = {
                excludeConstructors: ["Object", /^.$/],
                quoteStrings: !0
            },
            a = (Object.prototype.hasOwnProperty, []);
        return "undefined" != typeof global && a.push({
            object: global,
            value: "[object global]"
        }), "undefined" != typeof document && a.push({
            object: document,
            value: "[object HTMLDocument]"
        }), "undefined" != typeof window && a.push({
            object: window,
            value: "[object Window]"
        }), i.func = function(e) {
            return "function " + t(e) + "() {}"
        }, i.array = function(e, t) {
            t = t || [], t.push(e);
            var n, r, o = [];
            for (n = 0, r = e.length; r > n; ++n) o.push(i(this, e[n], t));
            return "[" + o.join(", ") + "]"
        }, i.object = function(t, o, s) {
            o = o || [], o.push(t), s = s || 0;
            var a, u, l, c, f, h = [],
                p = e.keys(t).sort(),
                d = 3;
            for (c = 0, f = p.length; f > c; ++c) a = p[c], l = t[a], u = r(l, o) ? "[Circular]" : i(this, l, o, s + 2), u = (/\s/.test(a) ? '"' + a + '"' : a) + ": " + u, d += u.length, h.push(u);
            var y = n(this, t),
                m = y ? "[" + y + "] " : "",
                g = "";
            for (c = 0, f = s; f > c; ++c) g += " ";
            return d + s > 80 ? m + "{\n  " + g + h.join(",\n  " + g) + "\n" + g + "}" : m + "{ " + h.join(", ") + " }"
        }, i.element = function(e) {
            var t, n, r, i, o, s = e.tagName.toLowerCase(),
                a = e.attributes,
                u = [];
            for (r = 0, i = a.length; i > r; ++r) t = a.item(r), n = t.nodeName.toLowerCase().replace("html:", ""), o = t.nodeValue, ("contenteditable" !== n || "inherit" !== o) && o && u.push(n + '="' + o + '"');
            var l = "<" + s + (u.length > 0 ? " " : ""),
                c = e.innerHTML;
            c.length > 20 && (c = c.substr(0, 20) + "[...]");
            var f = l + u.join(" ") + ">" + c + "</" + s + ">";
            return f.replace(/ contentEditable="inherit"/, "")
        }, o.prototype = {
            functionName: t,
            configure: function(e) {
                return new o(e)
            },
            constructorName: function(e) {
                return n(this, e)
            },
            ascii: function(e, t, n) {
                return i(this, e, t, n)
            }
        }, o.prototype
    });
    var sinon = function(e) {
        function t(e) {
            var t = !1;
            try {
                e.appendChild(u), t = u.parentNode == e
            } catch (n) {
                return !1
            } finally {
                try {
                    e.removeChild(u)
                } catch (n) {}
            }
            return t
        }

        function n(e) {
            return u && e && 1 === e.nodeType && t(e)
        }

        function r(e) {
            return "function" == typeof e || !!(e && e.constructor && e.call && e.apply)
        }

        function i(e) {
            return "number" == typeof e && isNaN(e)
        }

        function o(e, t) {
            for (var n in t) l.call(e, n) || (e[n] = t[n])
        }

        function s(e) {
            return "function" == typeof e && "function" == typeof e.restore && e.restore.sinon
        }

        function a(e, t, n) {
            n.exports = c, c.spy = e("./sinon/spy"), c.spyCall = e("./sinon/call"), c.behavior = e("./sinon/behavior"), c.stub = e("./sinon/stub"), c.mock = e("./sinon/mock"), c.collection = e("./sinon/collection"), c.assert = e("./sinon/assert"), c.sandbox = e("./sinon/sandbox"), c.test = e("./sinon/test"), c.testCase = e("./sinon/test_case"), c.match = e("./sinon/match")
        }
        var u = "undefined" != typeof document && document.createElement("div"),
            l = Object.prototype.hasOwnProperty,
            c = {
                wrapMethod: function(e, t, n) {
                    if (!e) throw new TypeError("Should wrap property of object");
                    if ("function" != typeof n) throw new TypeError("Method wrapper should be function");
                    var i, s = e[t];
                    if (r(s)) {
                        if (s.restore && s.restore.sinon) i = new TypeError("Attempted to wrap " + t + " which is already wrapped");
                        else if (s.calledBefore) {
                            var a = s.returns ? "stubbed" : "spied on";
                            i = new TypeError("Attempted to wrap " + t + " which is already " + a)
                        }
                    } else i = new TypeError("Attempted to wrap " + typeof s + " property " + t + " as function");
                    if (i) throw s && s._stack && (i.stack += "\n--------------\n" + s._stack), i;
                    var u = e.hasOwnProperty ? e.hasOwnProperty(t) : l.call(e, t);
                    return e[t] = n, n.displayName = t, n._stack = new Error("Stack Trace for original").stack, n.restore = function() {
                        u || delete e[t], e[t] === n && (e[t] = s)
                    }, n.restore.sinon = !0, o(n, s), n
                },
                extend: function(e) {
                    for (var t = 1, n = arguments.length; n > t; t += 1)
                        for (var r in arguments[t]) arguments[t].hasOwnProperty(r) && (e[r] = arguments[t][r]), arguments[t].hasOwnProperty("toString") && arguments[t].toString != e.toString && (e.toString = arguments[t].toString);
                    return e
                },
                create: function(e) {
                    var t = function() {};
                    return t.prototype = e, new t
                },
                deepEqual: function m(e, t) {
                    if (c.match && c.match.isMatcher(e)) return e.test(t);
                    if ("object" != typeof e || "object" != typeof t) return i(e) && i(t) ? !0 : e === t;
                    if (n(e) || n(t)) return e === t;
                    if (e === t) return !0;
                    if (null === e && null !== t || null !== e && null === t) return !1;
                    if (e instanceof RegExp && t instanceof RegExp) return e.source === t.source && e.global === t.global && e.ignoreCase === t.ignoreCase && e.multiline === t.multiline;
                    var r = Object.prototype.toString.call(e);
                    if (r != Object.prototype.toString.call(t)) return !1;
                    if ("[object Date]" == r) return e.valueOf() === t.valueOf();
                    var o, s = 0,
                        a = 0;
                    if ("[object Array]" == r && e.length !== t.length) return !1;
                    for (o in e) {
                        if (s += 1, !(o in t)) return !1;
                        if (!m(e[o], t[o])) return !1
                    }
                    for (o in t) a += 1;
                    return s == a
                },
                functionName: function(e) {
                    var t = e.displayName || e.name;
                    if (!t) {
                        var n = e.toString().match(/function ([^\s\(]+)/);
                        t = n && n[1]
                    }
                    return t
                },
                functionToString: function() {
                    if (this.getCall && this.callCount)
                        for (var e, t, n = this.callCount; n--;) {
                            e = this.getCall(n).thisValue;
                            for (t in e)
                                if (e[t] === this) return t
                        }
                    return this.displayName || "sinon fake"
                },
                getConfig: function(e) {
                    var t = {};
                    e = e || {};
                    var n = c.defaultConfig;
                    for (var r in n) n.hasOwnProperty(r) && (t[r] = e.hasOwnProperty(r) ? e[r] : n[r]);
                    return t
                },
                format: function(e) {
                    return "" + e
                },
                defaultConfig: {
                    injectIntoThis: !0,
                    injectInto: null,
                    properties: ["spy", "stub", "mock", "clock", "server", "requests"],
                    useFakeTimers: !0,
                    useFakeServer: !0
                },
                timesInWords: function(e) {
                    return 1 == e && "once" || 2 == e && "twice" || 3 == e && "thrice" || (e || 0) + " times"
                },
                calledInOrder: function(e) {
                    for (var t = 1, n = e.length; n > t; t++)
                        if (!e[t - 1].calledBefore(e[t]) || !e[t].called) return !1;
                    return !0
                },
                orderByFirstCall: function(e) {
                    return e.sort(function(e, t) {
                        var n = e.getCall(0),
                            r = t.getCall(0),
                            i = n && n.callId || -1,
                            o = r && r.callId || -1;
                        return o > i ? -1 : 1
                    })
                },
                log: function() {},
                logError: function(e, t) {
                    var n = e + " threw exception: ";
                    c.log(n + "[" + t.name + "] " + t.message), t.stack && c.log(t.stack), setTimeout(function() {
                        throw t.message = n + t.message, t
                    }, 0)
                },
                typeOf: function(e) {
                    if (null === e) return "null";
                    if (void 0 === e) return "undefined";
                    var t = Object.prototype.toString.call(e);
                    return t.substring(8, t.length - 1).toLowerCase()
                },
                createStubInstance: function(e) {
                    if ("function" != typeof e) throw new TypeError("The constructor should be a function.");
                    return c.stub(c.create(e.prototype))
                },
                restore: function(e) {
                    if (null !== e && "object" == typeof e)
                        for (var t in e) s(e[t]) && e[t].restore();
                    else s(e) && e.restore()
                }
            },
            f = "undefined" != typeof module && module.exports && "function" == typeof require,
            h = "function" == typeof define && "object" == typeof define.amd && define.amd;
        if (h) define(a);
        else if (f) {
            try {
                e = require("formatio")
            } catch (p) {}
            a(require, exports, module)
        }
        if (e) {
            var d = e.configure({
                quoteStrings: !1
            });
            c.format = function() {
                return d.ascii.apply(d, arguments)
            }
        } else if (f) try {
            var y = require("util");
            c.format = function(e) {
                return "object" == typeof e && e.toString === Object.prototype.toString ? y.inspect(e) : e
            }
        } catch (p) {}
        return c
    }("object" == typeof formatio && formatio);
    if (function(e) {
            function t(t, n, r) {
                var i = e.typeOf(t);
                if (i !== n) throw new TypeError("Expected type of " + r + " to be " + n + ", but was " + i)
            }

            function n(e) {
                return s.isPrototypeOf(e)
            }

            function r(t, n) {
                if (null === n || void 0 === n) return !1;
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        var o = t[i],
                            s = n[i];
                        if (a.isMatcher(o)) {
                            if (!o.test(s)) return !1
                        } else if ("object" === e.typeOf(o)) {
                            if (!r(o, s)) return !1
                        } else if (!e.deepEqual(o, s)) return !1
                    }
                return !0
            }

            function i(n, r) {
                return function(i, o) {
                    t(i, "string", "property");
                    var s = 1 === arguments.length,
                        u = r + '("' + i + '"';
                    return s || (u += ", " + o), u += ")", a(function(t) {
                        return void 0 !== t && null !== t && n(t, i) ? s || e.deepEqual(o, t[i]) : !1
                    }, u)
                }
            }
            var o = "undefined" != typeof module && module.exports && "function" == typeof require;
            if (!e && o && (e = require("../sinon")), e) {
                var s = {
                    toString: function() {
                        return this.message
                    }
                };
                s.or = function(t) {
                    if (!arguments.length) throw new TypeError("Matcher expected");
                    n(t) || (t = a(t));
                    var r = this,
                        i = e.create(s);
                    return i.test = function(e) {
                        return r.test(e) || t.test(e)
                    }, i.message = r.message + ".or(" + t.message + ")", i
                }, s.and = function(t) {
                    if (!arguments.length) throw new TypeError("Matcher expected");
                    n(t) || (t = a(t));
                    var r = this,
                        i = e.create(s);
                    return i.test = function(e) {
                        return r.test(e) && t.test(e)
                    }, i.message = r.message + ".and(" + t.message + ")", i
                };
                var a = function(t, n) {
                    var i = e.create(s),
                        o = e.typeOf(t);
                    switch (o) {
                        case "object":
                            if ("function" == typeof t.test) return i.test = function(e) {
                                return t.test(e) === !0
                            }, i.message = "match(" + e.functionName(t.test) + ")", i;
                            var a = [];
                            for (var u in t) t.hasOwnProperty(u) && a.push(u + ": " + t[u]);
                            i.test = function(e) {
                                return r(t, e)
                            }, i.message = "match(" + a.join(", ") + ")";
                            break;
                        case "number":
                            i.test = function(e) {
                                return t == e
                            };
                            break;
                        case "string":
                            i.test = function(e) {
                                return "string" != typeof e ? !1 : -1 !== e.indexOf(t)
                            }, i.message = 'match("' + t + '")';
                            break;
                        case "regexp":
                            i.test = function(e) {
                                return "string" != typeof e ? !1 : t.test(e)
                            };
                            break;
                        case "function":
                            i.test = t, i.message = n ? n : "match(" + e.functionName(t) + ")";
                            break;
                        default:
                            i.test = function(n) {
                                return e.deepEqual(t, n)
                            }
                    }
                    return i.message || (i.message = "match(" + t + ")"), i
                };
                a.isMatcher = n, a.any = a(function() {
                    return !0
                }, "any"), a.defined = a(function(e) {
                    return null !== e && void 0 !== e
                }, "defined"), a.truthy = a(function(e) {
                    return !!e
                }, "truthy"), a.falsy = a(function(e) {
                    return !e
                }, "falsy"), a.same = function(e) {
                    return a(function(t) {
                        return e === t
                    }, "same(" + e + ")")
                }, a.typeOf = function(n) {
                    return t(n, "string", "type"), a(function(t) {
                        return e.typeOf(t) === n
                    }, 'typeOf("' + n + '")')
                }, a.instanceOf = function(n) {
                    return t(n, "function", "type"), a(function(e) {
                        return e instanceof n
                    }, "instanceOf(" + e.functionName(n) + ")")
                }, a.has = i(function(e, t) {
                    return "object" == typeof e ? t in e : void 0 !== e[t]
                }, "has"), a.hasOwn = i(function(e, t) {
                    return e.hasOwnProperty(t)
                }, "hasOwn"), a.bool = a.typeOf("boolean"), a.number = a.typeOf("number"), a.string = a.typeOf("string"), a.object = a.typeOf("object"), a.func = a.typeOf("function"), a.array = a.typeOf("array"), a.regexp = a.typeOf("regexp"), a.date = a.typeOf("date"), e.match = a, "function" == typeof define && define.amd ? define(["module"], function(e) {
                    e.exports = a
                }) : o && (module.exports = a)
            }
        }("object" == typeof sinon && sinon || null), function(e) {
            function t(t, n, r) {
                var o = e.functionName(t) + n;
                throw r.length && (o += " Received [" + i.call(r).join(", ") + "]"), new Error(o)
            }

            function n(t, n, r, i, s, a) {
                if ("number" != typeof a) throw new TypeError("Call id is not a number");
                var u = e.create(o);
                return u.proxy = t, u.thisValue = n, u.args = r, u.returnValue = i, u.exception = s, u.callId = a, u
            }
            var r = "undefined" != typeof module && module.exports && "function" == typeof require;
            if (!e && r && (e = require("../sinon")), e) {
                var i = Array.prototype.slice,
                    o = {
                        calledOn: function(t) {
                            return e.match && e.match.isMatcher(t) ? t.test(this.thisValue) : this.thisValue === t
                        },
                        calledWith: function() {
                            for (var t = 0, n = arguments.length; n > t; t += 1)
                                if (!e.deepEqual(arguments[t], this.args[t])) return !1;
                            return !0
                        },
                        calledWithMatch: function() {
                            for (var t = 0, n = arguments.length; n > t; t += 1) {
                                var r = this.args[t],
                                    i = arguments[t];
                                if (!e.match || !e.match(i).test(r)) return !1
                            }
                            return !0
                        },
                        calledWithExactly: function() {
                            return arguments.length == this.args.length && this.calledWith.apply(this, arguments)
                        },
                        notCalledWith: function() {
                            return !this.calledWith.apply(this, arguments)
                        },
                        notCalledWithMatch: function() {
                            return !this.calledWithMatch.apply(this, arguments)
                        },
                        returned: function(t) {
                            return e.deepEqual(t, this.returnValue)
                        },
                        threw: function(e) {
                            return "undefined" != typeof e && this.exception ? this.exception === e || this.exception.name === e : !!this.exception
                        },
                        calledWithNew: function() {
                            return this.proxy.prototype && this.thisValue instanceof this.proxy
                        },
                        calledBefore: function(e) {
                            return this.callId < e.callId
                        },
                        calledAfter: function(e) {
                            return this.callId > e.callId
                        },
                        callArg: function(e) {
                            this.args[e]()
                        },
                        callArgOn: function(e, t) {
                            this.args[e].apply(t)
                        },
                        callArgWith: function(e) {
                            this.callArgOnWith.apply(this, [e, null].concat(i.call(arguments, 1)))
                        },
                        callArgOnWith: function(e, t) {
                            var n = i.call(arguments, 2);
                            this.args[e].apply(t, n)
                        },
                        "yield": function() {
                            this.yieldOn.apply(this, [null].concat(i.call(arguments, 0)))
                        },
                        yieldOn: function(e) {
                            for (var n = this.args, r = 0, o = n.length; o > r; ++r)
                                if ("function" == typeof n[r]) return void n[r].apply(e, i.call(arguments, 1));
                            t(this.proxy, " cannot yield since no callback was passed.", n)
                        },
                        yieldTo: function(e) {
                            this.yieldToOn.apply(this, [e, null].concat(i.call(arguments, 1)))
                        },
                        yieldToOn: function(e, n) {
                            for (var r = this.args, o = 0, s = r.length; s > o; ++o)
                                if (r[o] && "function" == typeof r[o][e]) return void r[o][e].apply(n, i.call(arguments, 2));
                            t(this.proxy, " cannot yield to '" + e + "' since no callback was passed.", r)
                        },
                        toString: function() {
                            for (var t = this.proxy.toString() + "(", n = [], r = 0, i = this.args.length; i > r; ++r) n.push(e.format(this.args[r]));
                            return t = t + n.join(", ") + ")", "undefined" != typeof this.returnValue && (t += " => " + e.format(this.returnValue)), this.exception && (t += " !" + this.exception.name, this.exception.message && (t += "(" + this.exception.message + ")")), t
                        }
                    };
                o.invokeCallback = o.yield, n.toString = o.toString, e.spyCall = n, "function" == typeof define && define.amd ? define(["module"], function(e) {
                    e.exports = n
                }) : r && (module.exports = n)
            }
        }("object" == typeof sinon && sinon || null), function(sinon) {
            function spy(e, t) {
                if (!t && "function" == typeof e) return spy.create(e);
                if (!e && !t) return spy.create(function() {});
                var n = e[t];
                return sinon.wrapMethod(e, t, spy.create(n))
            }

            function matchingFake(e, t, n) {
                if (e)
                    for (var r = 0, i = e.length; i > r; r++)
                        if (e[r].matches(t, n)) return e[r]
            }

            function incrementCallCount() {
                this.called = !0, this.callCount += 1, this.notCalled = !1, this.calledOnce = 1 == this.callCount, this.calledTwice = 2 == this.callCount, this.calledThrice = 3 == this.callCount
            }

            function createCallProperties() {
                this.firstCall = this.getCall(0), this.secondCall = this.getCall(1), this.thirdCall = this.getCall(2), this.lastCall = this.getCall(this.callCount - 1)
            }

            function createProxy(func) {
                var p;
                return func.length ? eval("p = (function proxy(" + vars.substring(0, 2 * func.length - 1) + ") { return p.invoke(func, this, slice.call(arguments)); });") : p = function() {
                    return p.invoke(func, this, slice.call(arguments))
                }, p
            }

            function delegateToCalls(e, t, n, r) {
                spyApi[e] = function() {
                    if (!this.called) return r ? r.apply(this, arguments) : !1;
                    for (var i, o = 0, s = 0, a = this.callCount; a > s; s += 1)
                        if (i = this.getCall(s), i[n || e].apply(i, arguments) && (o += 1, t)) return !0;
                    return o === this.callCount
                }
            }
            var commonJSModule = "undefined" != typeof module && module.exports && "function" == typeof require,
                push = Array.prototype.push,
                slice = Array.prototype.slice,
                callId = 0;
            if (!sinon && commonJSModule && (sinon = require("../sinon")), sinon) {
                var vars = "a,b,c,d,e,f,g,h,i,j,k,l",
                    uuid = 0,
                    spyApi = {
                        reset: function() {
                            if (this.called = !1, this.notCalled = !0, this.calledOnce = !1, this.calledTwice = !1, this.calledThrice = !1, this.callCount = 0, this.firstCall = null, this.secondCall = null, this.thirdCall = null, this.lastCall = null, this.args = [], this.returnValues = [], this.thisValues = [], this.exceptions = [], this.callIds = [], this.fakes)
                                for (var e = 0; e < this.fakes.length; e++) this.fakes[e].reset()
                        },
                        create: function(e) {
                            var t;
                            "function" != typeof e ? e = function() {} : t = sinon.functionName(e);
                            var n = createProxy(e);
                            return sinon.extend(n, spy), delete n.create, sinon.extend(n, e), n.reset(), n.prototype = e.prototype, n.displayName = t || "spy", n.toString = sinon.functionToString, n._create = sinon.spy.create, n.id = "spy#" + uuid++, n
                        },
                        invoke: function(e, t, n) {
                            var r, i, o = matchingFake(this.fakes, n);
                            incrementCallCount.call(this), push.call(this.thisValues, t), push.call(this.args, n), push.call(this.callIds, callId++), createCallProperties.call(this);
                            try {
                                i = o ? o.invoke(e, t, n) : (this.func || e).apply(t, n);
                                var s = this.getCall(this.callCount - 1);
                                s.calledWithNew() && "object" != typeof i && (i = t)
                            } catch (a) {
                                r = a
                            }
                            if (push.call(this.exceptions, r), push.call(this.returnValues, i), createCallProperties.call(this), void 0 !== r) throw r;
                            return i
                        },
                        named: function(e) {
                            return this.displayName = e, this
                        },
                        getCall: function(e) {
                            return 0 > e || e >= this.callCount ? null : sinon.spyCall(this, this.thisValues[e], this.args[e], this.returnValues[e], this.exceptions[e], this.callIds[e])
                        },
                        getCalls: function() {
                            var e, t = [];
                            for (e = 0; e < this.callCount; e++) t.push(this.getCall(e));
                            return t
                        },
                        calledBefore: function(e) {
                            return this.called ? e.called ? this.callIds[0] < e.callIds[e.callIds.length - 1] : !0 : !1
                        },
                        calledAfter: function(e) {
                            return this.called && e.called ? this.callIds[this.callCount - 1] > e.callIds[e.callCount - 1] : !1
                        },
                        withArgs: function() {
                            var e = slice.call(arguments);
                            if (this.fakes) {
                                var t = matchingFake(this.fakes, e, !0);
                                if (t) return t
                            } else this.fakes = [];
                            var n = this,
                                r = this._create();
                            r.matchingAguments = e, r.parent = this, push.call(this.fakes, r), r.withArgs = function() {
                                return n.withArgs.apply(n, arguments)
                            };
                            for (var i = 0; i < this.args.length; i++) r.matches(this.args[i]) && (incrementCallCount.call(r), push.call(r.thisValues, this.thisValues[i]), push.call(r.args, this.args[i]), push.call(r.returnValues, this.returnValues[i]), push.call(r.exceptions, this.exceptions[i]), push.call(r.callIds, this.callIds[i]));
                            return createCallProperties.call(r), r
                        },
                        matches: function(e, t) {
                            var n = this.matchingAguments;
                            return n.length <= e.length && sinon.deepEqual(n, e.slice(0, n.length)) ? !t || n.length == e.length : void 0
                        },
                        printf: function(e) {
                            var t, n = this,
                                r = slice.call(arguments, 1);
                            return (e || "").replace(/%(.)/g, function(e, i) {
                                return t = spyApi.formatters[i], "function" == typeof t ? t.call(null, n, r) : isNaN(parseInt(i, 10)) ? "%" + i : sinon.format(r[i - 1])
                            })
                        }
                    };
                delegateToCalls("calledOn", !0), delegateToCalls("alwaysCalledOn", !1, "calledOn"), delegateToCalls("calledWith", !0), delegateToCalls("calledWithMatch", !0), delegateToCalls("alwaysCalledWith", !1, "calledWith"), delegateToCalls("alwaysCalledWithMatch", !1, "calledWithMatch"), delegateToCalls("calledWithExactly", !0), delegateToCalls("alwaysCalledWithExactly", !1, "calledWithExactly"), delegateToCalls("neverCalledWith", !1, "notCalledWith", function() {
                    return !0
                }), delegateToCalls("neverCalledWithMatch", !1, "notCalledWithMatch", function() {
                    return !0
                }), delegateToCalls("threw", !0), delegateToCalls("alwaysThrew", !1, "threw"), delegateToCalls("returned", !0), delegateToCalls("alwaysReturned", !1, "returned"), delegateToCalls("calledWithNew", !0), delegateToCalls("alwaysCalledWithNew", !1, "calledWithNew"), delegateToCalls("callArg", !1, "callArgWith", function() {
                    throw new Error(this.toString() + " cannot call arg since it was not yet invoked.")
                }), spyApi.callArgWith = spyApi.callArg, delegateToCalls("callArgOn", !1, "callArgOnWith", function() {
                    throw new Error(this.toString() + " cannot call arg since it was not yet invoked.")
                }), spyApi.callArgOnWith = spyApi.callArgOn, delegateToCalls("yield", !1, "yield", function() {
                    throw new Error(this.toString() + " cannot yield since it was not yet invoked.")
                }), spyApi.invokeCallback = spyApi.yield, delegateToCalls("yieldOn", !1, "yieldOn", function() {
                    throw new Error(this.toString() + " cannot yield since it was not yet invoked.")
                }), delegateToCalls("yieldTo", !1, "yieldTo", function(e) {
                    throw new Error(this.toString() + " cannot yield to '" + e + "' since it was not yet invoked.")
                }), delegateToCalls("yieldToOn", !1, "yieldToOn", function(e) {
                    throw new Error(this.toString() + " cannot yield to '" + e + "' since it was not yet invoked.")
                }), spyApi.formatters = {
                    c: function(e) {
                        return sinon.timesInWords(e.callCount)
                    },
                    n: function(e) {
                        return e.toString()
                    },
                    C: function(e) {
                        for (var t = [], n = 0, r = e.callCount; r > n; ++n) {
                            var i = "    " + e.getCall(n).toString();
                            /\n/.test(t[n - 1]) && (i = "\n" + i), push.call(t, i)
                        }
                        return t.length > 0 ? "\n" + t.join("\n") : ""
                    },
                    t: function(e) {
                        for (var t = [], n = 0, r = e.callCount; r > n; ++n) push.call(t, sinon.format(e.thisValues[n]));
                        return t.join(", ")
                    },
                    "*": function(e, t) {
                        for (var n = [], r = 0, i = t.length; i > r; ++r) push.call(n, sinon.format(t[r]));
                        return n.join(", ")
                    }
                }, sinon.extend(spy, spyApi), spy.spyCall = sinon.spyCall, sinon.spy = spy, "function" == typeof define && define.amd ? define(["module"], function(e) {
                    e.exports = spy
                }) : commonJSModule && (module.exports = spy)
            }
        }("object" == typeof sinon && sinon || null), function(e) {
            function t(e, t) {
                return "string" == typeof e ? (this.exception = new Error(t || ""), this.exception.name = e) : this.exception = e ? e : new Error("Error"), this
            }

            function n(e, t) {
                var n = e.callArgAt;
                if (0 > n) {
                    for (var r = e.callArgProp, i = 0, o = t.length; o > i; ++i) {
                        if (!r && "function" == typeof t[i]) return t[i];
                        if (r && t[i] && "function" == typeof t[i][r]) return t[i][r]
                    }
                    return null
                }
                return t[n]
            }

            function r(t, n, r) {
                if (t.callArgAt < 0) {
                    var i;
                    return i = t.callArgProp ? e.functionName(t.stub) + " expected to yield to '" + t.callArgProp + "', but no object with such a property was passed." : e.functionName(t.stub) + " expected to yield, but no callback was passed.", r.length > 0 && (i += " Received [" + u.call(r, ", ") + "]"), i
                }
                return "argument at index " + t.callArgAt + " is not a function: " + n
            }

            function i(e, t) {
                if ("number" == typeof e.callArgAt) {
                    var i = n(e, t);
                    if ("function" != typeof i) throw new TypeError(r(e, i, t));
                    e.callbackAsync ? l(function() {
                        i.apply(e.callbackContext, e.callbackArguments)
                    }) : i.apply(e.callbackContext, e.callbackArguments)
                }
            }
            var o = "undefined" != typeof module && module.exports && "function" == typeof require;
            if (!e && o && (e = require("../sinon")), e) {
                var s, a = Array.prototype.slice,
                    u = Array.prototype.join,
                    l = function() {
                        return "object" == typeof process && "function" == typeof process.nextTick ? process.nextTick : "function" == typeof setImmediate ? setImmediate : function(e) {
                            setTimeout(e, 0)
                        }
                    }();
                s = {
                    create: function(t) {
                        var n = e.extend({}, e.behavior);
                        return delete n.create, n.stub = t, n
                    },
                    isPresent: function() {
                        return "number" == typeof this.callArgAt || this.exception || "number" == typeof this.returnArgAt || this.returnThis || this.returnValueDefined
                    },
                    invoke: function(e, t) {
                        if (i(this, t), this.exception) throw this.exception;
                        return "number" == typeof this.returnArgAt ? t[this.returnArgAt] : this.returnThis ? e : this.returnValue
                    },
                    onCall: function(e) {
                        return this.stub.onCall(e)
                    },
                    onFirstCall: function() {
                        return this.stub.onFirstCall()
                    },
                    onSecondCall: function() {
                        return this.stub.onSecondCall()
                    },
                    onThirdCall: function() {
                        return this.stub.onThirdCall()
                    },
                    withArgs: function() {
                        throw new Error('Defining a stub by invoking "stub.onCall(...).withArgs(...)" is not supported. Use "stub.withArgs(...).onCall(...)" to define sequential behavior for calls with certain arguments.')
                    },
                    callsArg: function(e) {
                        if ("number" != typeof e) throw new TypeError("argument index is not number");
                        return this.callArgAt = e, this.callbackArguments = [], this.callbackContext = void 0, this.callArgProp = void 0, this.callbackAsync = !1, this
                    },
                    callsArgOn: function(e, t) {
                        if ("number" != typeof e) throw new TypeError("argument index is not number");
                        if ("object" != typeof t) throw new TypeError("argument context is not an object");
                        return this.callArgAt = e, this.callbackArguments = [], this.callbackContext = t, this.callArgProp = void 0, this.callbackAsync = !1, this
                    },
                    callsArgWith: function(e) {
                        if ("number" != typeof e) throw new TypeError("argument index is not number");
                        return this.callArgAt = e, this.callbackArguments = a.call(arguments, 1), this.callbackContext = void 0, this.callArgProp = void 0, this.callbackAsync = !1, this
                    },
                    callsArgOnWith: function(e, t) {
                        if ("number" != typeof e) throw new TypeError("argument index is not number");
                        if ("object" != typeof t) throw new TypeError("argument context is not an object");
                        return this.callArgAt = e, this.callbackArguments = a.call(arguments, 2), this.callbackContext = t, this.callArgProp = void 0, this.callbackAsync = !1, this
                    },
                    yields: function() {
                        return this.callArgAt = -1, this.callbackArguments = a.call(arguments, 0), this.callbackContext = void 0, this.callArgProp = void 0, this.callbackAsync = !1, this
                    },
                    yieldsOn: function(e) {
                        if ("object" != typeof e) throw new TypeError("argument context is not an object");
                        return this.callArgAt = -1, this.callbackArguments = a.call(arguments, 1), this.callbackContext = e, this.callArgProp = void 0, this.callbackAsync = !1, this
                    },
                    yieldsTo: function(e) {
                        return this.callArgAt = -1, this.callbackArguments = a.call(arguments, 1), this.callbackContext = void 0, this.callArgProp = e, this.callbackAsync = !1, this
                    },
                    yieldsToOn: function(e, t) {
                        if ("object" != typeof t) throw new TypeError("argument context is not an object");
                        return this.callArgAt = -1, this.callbackArguments = a.call(arguments, 2), this.callbackContext = t, this.callArgProp = e, this.callbackAsync = !1, this
                    },
                    "throws": t,
                    throwsException: t,
                    returns: function(e) {
                        return this.returnValue = e, this.returnValueDefined = !0, this
                    },
                    returnsArg: function(e) {
                        if ("number" != typeof e) throw new TypeError("argument index is not number");
                        return this.returnArgAt = e, this
                    },
                    returnsThis: function() {
                        return this.returnThis = !0, this
                    }
                };
                for (var c in s) s.hasOwnProperty(c) && c.match(/^(callsArg|yields)/) && !c.match(/Async/) && (s[c + "Async"] = function(e) {
                    return function() {
                        var t = this[e].apply(this, arguments);
                        return this.callbackAsync = !0, t
                    }
                }(c));
                e.behavior = s, "function" == typeof define && define.amd ? define(["module"], function(e) {
                    e.exports = s
                }) : o && (module.exports = s)
            }
        }("object" == typeof sinon && sinon || null), function(e) {
            function t(n, r, i) {
                if (i && "function" != typeof i) throw new TypeError("Custom stub should be function");
                var o;
                if (o = i ? e.spy && e.spy.create ? e.spy.create(i) : i : t.create(), !n && "undefined" == typeof r) return e.stub.create();
                if ("undefined" == typeof r && "object" == typeof n) {
                    for (var s in n) "function" == typeof n[s] && t(n, s);
                    return n
                }
                return e.wrapMethod(n, r, o)
            }

            function n(t) {
                return t.defaultBehavior || r(t) || e.behavior.create(t)
            }

            function r(e) {
                return e.parent && i(e.parent)
            }

            function i(e) {
                var t = e.behaviors[e.callCount - 1];
                return t && t.isPresent() ? t : n(e)
            }
            var o = "undefined" != typeof module && module.exports && "function" == typeof require;
            if (!e && o && (e = require("../sinon")), e) {
                var s = 0;
                e.extend(t, function() {
                    var n = {
                        create: function() {
                            var n = function() {
                                return i(n).invoke(this, arguments)
                            };
                            n.id = "stub#" + s++;
                            var r = n;
                            return n = e.spy.create(n), n.func = r, e.extend(n, t), n._create = e.stub.create, n.displayName = "stub", n.toString = e.functionToString, n.defaultBehavior = null, n.behaviors = [], n
                        },
                        resetBehavior: function() {
                            var e;
                            if (this.defaultBehavior = null, this.behaviors = [], delete this.returnValue, delete this.returnArgAt, this.returnThis = !1, this.fakes)
                                for (e = 0; e < this.fakes.length; e++) this.fakes[e].resetBehavior()
                        },
                        onCall: function(t) {
                            return this.behaviors[t] || (this.behaviors[t] = e.behavior.create(this)), this.behaviors[t]
                        },
                        onFirstCall: function() {
                            return this.onCall(0)
                        },
                        onSecondCall: function() {
                            return this.onCall(1)
                        },
                        onThirdCall: function() {
                            return this.onCall(2)
                        }
                    };
                    for (var r in e.behavior) e.behavior.hasOwnProperty(r) && !n.hasOwnProperty(r) && "create" != r && "withArgs" != r && "invoke" != r && (n[r] = function(t) {
                        return function() {
                            return this.defaultBehavior = this.defaultBehavior || e.behavior.create(this), this.defaultBehavior[t].apply(this.defaultBehavior, arguments), this
                        }
                    }(r));
                    return n
                }()), e.stub = t, "function" == typeof define && define.amd ? define(["module"], function(e) {
                    e.exports = t
                }) : o && (module.exports = t)
            }
        }("object" == typeof sinon && sinon || null), function(e) {
            function t(n) {
                return n ? t.create(n) : e.expectation.create("Anonymous mock")
            }
            var n, r = "undefined" != typeof module && module.exports && "function" == typeof require,
                i = [].push;
            if (!e && r && (e = require("../sinon")), e) {
                n = e.match, !n && r && (n = require("./match")), e.mock = t, e.extend(t, function() {
                    function n(e, t) {
                        if (e)
                            for (var n = 0, r = e.length; r > n; n += 1) t(e[n])
                    }
                    return {
                        create: function(n) {
                            if (!n) throw new TypeError("object is null");
                            var r = e.extend({}, t);
                            return r.object = n, delete r.create, r
                        },
                        expects: function(t) {
                            if (!t) throw new TypeError("method is falsy");
                            if (this.expectations || (this.expectations = {}, this.proxies = []), !this.expectations[t]) {
                                this.expectations[t] = [];
                                var n = this;
                                e.wrapMethod(this.object, t, function() {
                                    return n.invokeMethod(t, this, arguments)
                                }), i.call(this.proxies, t)
                            }
                            var r = e.expectation.create(t);
                            return i.call(this.expectations[t], r), r
                        },
                        restore: function() {
                            var e = this.object;
                            n(this.proxies, function(t) {
                                "function" == typeof e[t].restore && e[t].restore()
                            })
                        },
                        verify: function() {
                            var t = this.expectations || {},
                                r = [],
                                o = [];
                            return n(this.proxies, function(e) {
                                n(t[e], function(e) {
                                    e.met() ? i.call(o, e.toString()) : i.call(r, e.toString())
                                })
                            }), this.restore(), r.length > 0 ? e.expectation.fail(r.concat(o).join("\n")) : e.expectation.pass(r.concat(o).join("\n")), !0
                        },
                        invokeMethod: function(t, n, r) {
                            var o, s = this.expectations && this.expectations[t],
                                a = s && s.length || 0;
                            for (o = 0; a > o; o += 1)
                                if (!s[o].met() && s[o].allowsCall(n, r)) return s[o].apply(n, r);
                            var u, l = [],
                                c = 0;
                            for (o = 0; a > o; o += 1) s[o].allowsCall(n, r) ? u = u || s[o] : c += 1, i.call(l, "    " + s[o].toString());
                            return 0 === c ? u.apply(n, r) : (l.unshift("Unexpected call: " + e.spyCall.toString.call({
                                proxy: t,
                                args: r
                            })), void e.expectation.fail(l.join("\n")))
                        }
                    }
                }());
                var o = e.timesInWords;
                e.expectation = function() {
                    function t(e) {
                        return 0 == e ? "never called" : "called " + o(e)
                    }

                    function r(e) {
                        var t = e.minCalls,
                            n = e.maxCalls;
                        if ("number" == typeof t && "number" == typeof n) {
                            var r = o(t);
                            return t != n && (r = "at least " + r + " and at most " + o(n)), r
                        }
                        return "number" == typeof t ? "at least " + o(t) : "at most " + o(n)
                    }

                    function s(e) {
                        var t = "number" == typeof e.minCalls;
                        return !t || e.callCount >= e.minCalls
                    }

                    function a(e) {
                        return "number" != typeof e.maxCalls ? !1 : e.callCount == e.maxCalls
                    }

                    function u(e, t) {
                        return n && n.isMatcher(e) ? e.test(t) : !0
                    }
                    var l = Array.prototype.slice,
                        c = e.spy.invoke;
                    return {
                        minCalls: 1,
                        maxCalls: 1,
                        create: function(t) {
                            var n = e.extend(e.stub.create(), e.expectation);
                            return delete n.create, n.method = t, n
                        },
                        invoke: function(e, t, n) {
                            return this.verifyCallAllowed(t, n), c.apply(this, arguments)
                        },
                        atLeast: function(e) {
                            if ("number" != typeof e) throw new TypeError("'" + e + "' is not number");
                            return this.limitsSet || (this.maxCalls = null, this.limitsSet = !0), this.minCalls = e, this
                        },
                        atMost: function(e) {
                            if ("number" != typeof e) throw new TypeError("'" + e + "' is not number");
                            return this.limitsSet || (this.minCalls = null, this.limitsSet = !0), this.maxCalls = e, this
                        },
                        never: function() {
                            return this.exactly(0)
                        },
                        once: function() {
                            return this.exactly(1)
                        },
                        twice: function() {
                            return this.exactly(2)
                        },
                        thrice: function() {
                            return this.exactly(3)
                        },
                        exactly: function(e) {
                            if ("number" != typeof e) throw new TypeError("'" + e + "' is not a number");
                            return this.atLeast(e), this.atMost(e)
                        },
                        met: function() {
                            return !this.failed && s(this)
                        },
                        verifyCallAllowed: function(t, n) {
                            if (a(this) && (this.failed = !0, e.expectation.fail(this.method + " already called " + o(this.maxCalls))), "expectedThis" in this && this.expectedThis !== t && e.expectation.fail(this.method + " called with " + t + " as thisValue, expected " + this.expectedThis), "expectedArguments" in this) {
                                n || e.expectation.fail(this.method + " received no arguments, expected " + e.format(this.expectedArguments)), n.length < this.expectedArguments.length && e.expectation.fail(this.method + " received too few arguments (" + e.format(n) + "), expected " + e.format(this.expectedArguments)), this.expectsExactArgCount && n.length != this.expectedArguments.length && e.expectation.fail(this.method + " received too many arguments (" + e.format(n) + "), expected " + e.format(this.expectedArguments));
                                for (var r = 0, i = this.expectedArguments.length; i > r; r += 1) u(this.expectedArguments[r], n[r]) || e.expectation.fail(this.method + " received wrong arguments " + e.format(n) + ", didn't match " + this.expectedArguments.toString()), e.deepEqual(this.expectedArguments[r], n[r]) || e.expectation.fail(this.method + " received wrong arguments " + e.format(n) + ", expected " + e.format(this.expectedArguments))
                            }
                        },
                        allowsCall: function(t, n) {
                            if (this.met() && a(this)) return !1;
                            if ("expectedThis" in this && this.expectedThis !== t) return !1;
                            if (!("expectedArguments" in this)) return !0;
                            if (n = n || [], n.length < this.expectedArguments.length) return !1;
                            if (this.expectsExactArgCount && n.length != this.expectedArguments.length) return !1;
                            for (var r = 0, i = this.expectedArguments.length; i > r; r += 1) {
                                if (!u(this.expectedArguments[r], n[r])) return !1;
                                if (!e.deepEqual(this.expectedArguments[r], n[r])) return !1
                            }
                            return !0
                        },
                        withArgs: function() {
                            return this.expectedArguments = l.call(arguments), this
                        },
                        withExactArgs: function() {
                            return this.withArgs.apply(this, arguments), this.expectsExactArgCount = !0, this
                        },
                        on: function(e) {
                            return this.expectedThis = e, this
                        },
                        toString: function() {
                            var n = (this.expectedArguments || []).slice();
                            this.expectsExactArgCount || i.call(n, "[...]");
                            var o = e.spyCall.toString.call({
                                    proxy: this.method || "anonymous mock expectation",
                                    args: n
                                }),
                                s = o.replace(", [...", "[, ...") + " " + r(this);
                            return this.met() ? "Expectation met: " + s : "Expected " + s + " (" + t(this.callCount) + ")"
                        },
                        verify: function() {
                            return this.met() ? e.expectation.pass(this.toString()) : e.expectation.fail(this.toString()), !0
                        },
                        pass: function(t) {
                            e.assert.pass(t)
                        },
                        fail: function(e) {
                            var t = new Error(e);
                            throw t.name = "ExpectationError", t
                        }
                    }
                }(), e.mock = t, "function" == typeof define && define.amd ? define(["module"], function(e) {
                    e.exports = t
                }) : r && (module.exports = t)
            }
        }("object" == typeof sinon && sinon || null), function(e) {
            function t(e) {
                return e.fakes || (e.fakes = []), e.fakes
            }

            function n(e, n) {
                for (var r = t(e), i = 0, o = r.length; o > i; i += 1) "function" == typeof r[i][n] && r[i][n]()
            }

            function r(e) {
                for (var n = t(e), r = 0; r < n.length;) n.splice(r, 1)
            }
            var i = "undefined" != typeof module && module.exports && "function" == typeof require,
                o = [].push,
                s = Object.prototype.hasOwnProperty;
            if (!e && i && (e = require("../sinon")), e) {
                var a = {
                    verify: function() {
                        n(this, "verify")
                    },
                    restore: function() {
                        n(this, "restore"), r(this)
                    },
                    verifyAndRestore: function() {
                        var e;
                        try {
                            this.verify()
                        } catch (t) {
                            e = t
                        }
                        if (this.restore(), e) throw e
                    },
                    add: function(e) {
                        return o.call(t(this), e), e
                    },
                    spy: function() {
                        return this.add(e.spy.apply(e, arguments))
                    },
                    stub: function(t, n, r) {
                        if (n) {
                            var i = t[n];
                            if ("function" != typeof i) {
                                if (!s.call(t, n)) throw new TypeError("Cannot stub non-existent own property " + n);
                                return t[n] = r, this.add({
                                    restore: function() {
                                        t[n] = i
                                    }
                                })
                            }
                        }
                        if (!n && t && "object" == typeof t) {
                            var o = e.stub.apply(e, arguments);
                            for (var a in o) "function" == typeof o[a] && this.add(o[a]);
                            return o
                        }
                        return this.add(e.stub.apply(e, arguments))
                    },
                    mock: function() {
                        return this.add(e.mock.apply(e, arguments))
                    },
                    inject: function(e) {
                        var t = this;
                        return e.spy = function() {
                            return t.spy.apply(t, arguments)
                        }, e.stub = function() {
                            return t.stub.apply(t, arguments)
                        }, e.mock = function() {
                            return t.mock.apply(t, arguments)
                        }, e
                    }
                };
                e.collection = a, "function" == typeof define && define.amd ? define(["module"], function(e) {
                    e.exports = a
                }) : i && (module.exports = a)
            }
        }("object" == typeof sinon && sinon || null), "undefined" == typeof sinon) var sinon = {};
    if (function(global) {
            function addTimer(e, t) {
                if (0 === e.length) throw new Error("Function requires at least 1 parameter");
                if ("undefined" == typeof e[0]) throw new Error("Callback must be provided to timer calls");
                var n = id++,
                    r = e[1] || 0;
                return this.timeouts || (this.timeouts = {}), this.timeouts[n] = {
                    id: n,
                    func: e[0],
                    callAt: this.now + r,
                    invokeArgs: Array.prototype.slice.call(e, 2)
                }, t === !0 && (this.timeouts[n].interval = r), addTimerReturnsObject ? {
                    id: n,
                    ref: function() {},
                    unref: function() {}
                } : n
            }

            function parseTime(e) {
                if (!e) return 0;
                var t, n = e.split(":"),
                    r = n.length,
                    i = r,
                    o = 0;
                if (r > 3 || !/^(\d\d:){0,2}\d\d?$/.test(e)) throw new Error("tick only understands numbers and 'h:m:s'");
                for (; i--;) {
                    if (t = parseInt(n[i], 10), t >= 60) throw new Error("Invalid time " + e);
                    o += t * Math.pow(60, r - i - 1)
                }
                return 1e3 * o
            }

            function createObject(e) {
                var t;
                if (Object.create) t = Object.create(e);
                else {
                    var n = function() {};
                    n.prototype = e, t = new n
                }
                return t.Date.clock = t, t
            }

            function mirrorDateProperties(e, t) {
                t.now ? e.now = function() {
                    return e.clock.now
                } : delete e.now, t.toSource ? e.toSource = function() {
                    return t.toSource()
                } : delete e.toSource, e.toString = function() {
                    return t.toString()
                }, e.prototype = t.prototype, e.parse = t.parse, e.UTC = t.UTC, e.prototype.toUTCString = t.prototype.toUTCString;
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }

            function restore() {
                for (var e, t = 0, n = this.methods.length; n > t; t++)
                    if (e = this.methods[t], global[e].hadOwnProperty) global[e] = this["_" + e];
                    else try {
                        delete global[e]
                    } catch (r) {}
                this.methods = []
            }

            function stubGlobal(e, t) {
                if (t[e].hadOwnProperty = Object.prototype.hasOwnProperty.call(global, e), t["_" + e] = global[e], "Date" == e) {
                    var n = mirrorDateProperties(t[e], global[e]);
                    global[e] = n
                } else {
                    global[e] = function() {
                        return t[e].apply(t, arguments)
                    };
                    for (var r in t[e]) t[e].hasOwnProperty(r) && (global[e][r] = t[e][r])
                }
                global[e].clock = t
            }
            var timeoutResult = setTimeout(function() {}, 0),
                addTimerReturnsObject = "object" == typeof timeoutResult;
            clearTimeout(timeoutResult);
            var id = 1;
            sinon.clock = {
                now: 0,
                create: function(e) {
                    var t = createObject(this);
                    if ("number" == typeof e && (t.now = e), e && "object" == typeof e) throw new TypeError("now should be milliseconds since UNIX epoch");
                    return t
                },
                setTimeout: function() {
                    return addTimer.call(this, arguments, !1)
                },
                clearTimeout: function(e) {
                    e && (this.timeouts || (this.timeouts = []), "object" == typeof e && (e = e.id), e in this.timeouts && delete this.timeouts[e])
                },
                setInterval: function() {
                    return addTimer.call(this, arguments, !0)
                },
                clearInterval: function(e) {
                    this.clearTimeout(e)
                },
                setImmediate: function(e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    return addTimer.call(this, [e, 0].concat(t), !1)
                },
                clearImmediate: function(e) {
                    this.clearTimeout(e)
                },
                tick: function(e) {
                    e = "number" == typeof e ? e : parseTime(e);
                    for (var t, n = this.now, r = this.now + e, i = this.now, o = this.firstTimerInRange(n, r); o && r >= n;) {
                        if (this.timeouts[o.id]) {
                            n = this.now = o.callAt;
                            try {
                                this.callTimer(o)
                            } catch (s) {
                                t = t || s
                            }
                        }
                        o = this.firstTimerInRange(i, r), i = n
                    }
                    if (this.now = r, t) throw t;
                    return this.now
                },
                firstTimerInRange: function(e, t) {
                    var n, r, i = null;
                    for (var o in this.timeouts)
                        if (this.timeouts.hasOwnProperty(o)) {
                            if (this.timeouts[o].callAt < e || this.timeouts[o].callAt > t) continue;
                            (null === i || this.timeouts[o].callAt < i) && (r = this.timeouts[o], i = this.timeouts[o].callAt, n = {
                                func: this.timeouts[o].func,
                                callAt: this.timeouts[o].callAt,
                                interval: this.timeouts[o].interval,
                                id: this.timeouts[o].id,
                                invokeArgs: this.timeouts[o].invokeArgs
                            })
                        }
                    return n || null
                },
                callTimer: function(timer) {
                    "number" == typeof timer.interval ? this.timeouts[timer.id].callAt += timer.interval : delete this.timeouts[timer.id];
                    try {
                        "function" == typeof timer.func ? timer.func.apply(null, timer.invokeArgs) : eval(timer.func)
                    } catch (e) {
                        var exception = e
                    }
                    if (this.timeouts[timer.id]) {
                        if (exception) throw exception
                    } else if (exception) throw exception
                },
                reset: function() {
                    this.timeouts = {}
                },
                Date: function() {
                    function e(n, r, i, o, s, a, u) {
                        switch (arguments.length) {
                            case 0:
                                return new t(e.clock.now);
                            case 1:
                                return new t(n);
                            case 2:
                                return new t(n, r);
                            case 3:
                                return new t(n, r, i);
                            case 4:
                                return new t(n, r, i, o);
                            case 5:
                                return new t(n, r, i, o, s);
                            case 6:
                                return new t(n, r, i, o, s, a);
                            default:
                                return new t(n, r, i, o, s, a, u)
                        }
                    }
                    var t = Date;
                    return mirrorDateProperties(e, t)
                }()
            };
            var methods = ["Date", "setTimeout", "setInterval", "clearTimeout", "clearInterval"];
            "undefined" != typeof global.setImmediate && methods.push("setImmediate"), "undefined" != typeof global.clearImmediate && methods.push("clearImmediate"), sinon.useFakeTimers = function(e) {
                var t = sinon.clock.create(e);
                t.restore = restore, t.methods = Array.prototype.slice.call(arguments, "number" == typeof e ? 1 : 0), 0 === t.methods.length && (t.methods = methods);
                for (var n = 0, r = t.methods.length; r > n; n++) stubGlobal(t.methods[n], t);
                return t
            }
        }("undefined" != typeof global && "function" != typeof global ? global : this), sinon.timers = {
            setTimeout: setTimeout,
            clearTimeout: clearTimeout,
            setImmediate: "undefined" != typeof setImmediate ? setImmediate : void 0,
            clearImmediate: "undefined" != typeof clearImmediate ? clearImmediate : void 0,
            setInterval: setInterval,
            clearInterval: clearInterval,
            Date: Date
        }, "undefined" != typeof module && module.exports && (module.exports = sinon), "undefined" == typeof sinon && (this.sinon = {}), function() {
            var e = [].push;
            sinon.Event = function(e, t, n, r) {
                this.initEvent(e, t, n, r)
            }, sinon.Event.prototype = {
                initEvent: function(e, t, n, r) {
                    this.type = e, this.bubbles = t, this.cancelable = n, this.target = r
                },
                stopPropagation: function() {},
                preventDefault: function() {
                    this.defaultPrevented = !0
                }
            }, sinon.ProgressEvent = function(e, t, n) {
                this.initEvent(e, !1, !1, n), this.loaded = t.loaded || null, this.total = t.total || null
            }, sinon.ProgressEvent.prototype = new sinon.Event, sinon.ProgressEvent.prototype.constructor = sinon.ProgressEvent, sinon.CustomEvent = function(e, t, n) {
                this.initEvent(e, !1, !1, n), this.detail = t.detail || null
            }, sinon.CustomEvent.prototype = new sinon.Event, sinon.CustomEvent.prototype.constructor = sinon.CustomEvent, sinon.EventTarget = {
                addEventListener: function(t, n) {
                    this.eventListeners = this.eventListeners || {}, this.eventListeners[t] = this.eventListeners[t] || [], e.call(this.eventListeners[t], n)
                },
                removeEventListener: function(e, t) {
                    for (var n = this.eventListeners && this.eventListeners[e] || [], r = 0, i = n.length; i > r; ++r)
                        if (n[r] == t) return n.splice(r, 1)
                },
                dispatchEvent: function(e) {
                    for (var t = e.type, n = this.eventListeners && this.eventListeners[t] || [], r = 0; r < n.length; r++) "function" == typeof n[r] ? n[r].call(this, e) : n[r].handleEvent(e);
                    return !!e.defaultPrevented
                }
            }
        }(), function(e) {
            function t() {
                function e(e) {
                    r.addEventListener(e, function(t) {
                        var n = r["on" + e];
                        n && "function" == typeof n && n.call(this, t)
                    })
                }
                this.readyState = t.UNSENT, this.requestHeaders = {}, this.requestBody = null, this.status = 0, this.statusText = "", this.upload = new n, sinon.xhr.supportsCORS && (this.withCredentials = !1);
                for (var r = this, i = ["loadstart", "load", "abort", "loadend"], o = i.length - 1; o >= 0; o--) e(i[o]);
                "function" == typeof t.onCreate && t.onCreate(this)
            }

            function n() {
                this.eventListeners = {
                    progress: [],
                    load: [],
                    abort: [],
                    error: []
                }
            }

            function r(e) {
                if (e.readyState !== t.OPENED) throw new Error("INVALID_STATE_ERR");
                if (e.sendFlag) throw new Error("INVALID_STATE_ERR")
            }

            function i(e, t) {
                if (e)
                    for (var n = 0, r = e.length; r > n; n += 1) t(e[n])
            }

            function o(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (t(e[n]) === !0) return !0;
                return !1
            }

            function s(e) {
                if (e.readyState != t.OPENED) throw new Error("INVALID_STATE_ERR - " + e.readyState)
            }

            function a(e) {
                if (e.readyState == t.DONE) throw new Error("Request done")
            }

            function u(e) {
                if (e.async && e.readyState != t.HEADERS_RECEIVED) throw new Error("No headers received")
            }

            function l(e) {
                if ("string" != typeof e) {
                    var t = new Error("Attempted to respond to fake XMLHttpRequest with " + e + ", which is not a string.");
                    throw t.name = "InvalidBodyException", t
                }
            }
            "undefined" == typeof sinon && (e.sinon = {});
            var c = "undefined" != typeof ProgressEvent,
                f = "undefined" != typeof CustomEvent;
            sinon.xhr = {
                XMLHttpRequest: e.XMLHttpRequest
            };
            var h = sinon.xhr;
            h.GlobalXMLHttpRequest = e.XMLHttpRequest, h.GlobalActiveXObject = e.ActiveXObject, h.supportsActiveX = "undefined" != typeof h.GlobalActiveXObject, h.supportsXHR = "undefined" != typeof h.GlobalXMLHttpRequest, h.workingXHR = h.supportsXHR ? h.GlobalXMLHttpRequest : h.supportsActiveX ? function() {
                return new h.GlobalActiveXObject("MSXML2.XMLHTTP.3.0")
            } : !1, h.supportsCORS = h.supportsXHR && "withCredentials" in new sinon.xhr.GlobalXMLHttpRequest;
            var p = {
                "Accept-Charset": !0,
                "Accept-Encoding": !0,
                Connection: !0,
                "Content-Length": !0,
                Cookie: !0,
                Cookie2: !0,
                "Content-Transfer-Encoding": !0,
                Date: !0,
                Expect: !0,
                Host: !0,
                "Keep-Alive": !0,
                Referer: !0,
                TE: !0,
                Trailer: !0,
                "Transfer-Encoding": !0,
                Upgrade: !0,
                "User-Agent": !0,
                Via: !0
            };
            n.prototype.addEventListener = function(e, t) {
                this.eventListeners[e].push(t)
            }, n.prototype.removeEventListener = function(e, t) {
                for (var n = this.eventListeners[e] || [], r = 0, i = n.length; i > r; ++r)
                    if (n[r] == t) return n.splice(r, 1)
            }, n.prototype.dispatchEvent = function(e) {
                for (var t, n = this.eventListeners[e.type] || [], r = 0; null != (t = n[r]); r++) t(e)
            };
            var d = function(e, t, n) {
                switch (n.length) {
                    case 0:
                        return e[t]();
                    case 1:
                        return e[t](n[0]);
                    case 2:
                        return e[t](n[0], n[1]);
                    case 3:
                        return e[t](n[0], n[1], n[2]);
                    case 4:
                        return e[t](n[0], n[1], n[2], n[3]);
                    case 5:
                        return e[t](n[0], n[1], n[2], n[3], n[4])
                }
            };
            t.filters = [], t.addFilter = function(e) {
                this.filters.push(e)
            };
            var y = /MSIE 6/;
            t.defake = function(e, n) {
                var r = new sinon.xhr.workingXHR;
                i(["open", "setRequestHeader", "send", "abort", "getResponseHeader", "getAllResponseHeaders", "addEventListener", "overrideMimeType", "removeEventListener"], function(t) {
                    e[t] = function() {
                        return d(r, t, arguments)
                    }
                });
                var o = function(t) {
                        i(t, function(t) {
                            try {
                                e[t] = r[t]
                            } catch (n) {
                                if (!y.test(navigator.userAgent)) throw n
                            }
                        })
                    },
                    s = function() {
                        e.readyState = r.readyState, r.readyState >= t.HEADERS_RECEIVED && o(["status", "statusText"]), r.readyState >= t.LOADING && o(["responseText"]), r.readyState === t.DONE && o(["responseXML"]), e.onreadystatechange && e.onreadystatechange.call(e, {
                            target: e
                        })
                    };
                if (r.addEventListener) {
                    for (var a in e.eventListeners) e.eventListeners.hasOwnProperty(a) && i(e.eventListeners[a], function(e) {
                        r.addEventListener(a, e)
                    });
                    r.addEventListener("readystatechange", s)
                } else r.onreadystatechange = s;
                d(r, "open", n)
            }, t.useFilters = !1, sinon.extend(t.prototype, sinon.EventTarget, {
                async: !0,
                open: function(e, n, r, i, s) {
                    if (this.method = e, this.url = n, this.async = "boolean" == typeof r ? r : !0, this.username = i, this.password = s, this.responseText = null, this.responseXML = null, this.requestHeaders = {}, this.sendFlag = !1, sinon.FakeXMLHttpRequest.useFilters === !0) {
                        var a = arguments,
                            u = o(t.filters, function(e) {
                                return e.apply(this, a)
                            });
                        if (u) return sinon.FakeXMLHttpRequest.defake(this, arguments)
                    }
                    this.readyStateChange(t.OPENED)
                },
                readyStateChange: function(e) {
                    if (this.readyState = e, "function" == typeof this.onreadystatechange) try {
                        this.onreadystatechange()
                    } catch (n) {
                        sinon.logError("Fake XHR onreadystatechange handler", n)
                    }
                    switch (this.dispatchEvent(new sinon.Event("readystatechange")), this.readyState) {
                        case t.DONE:
                            this.dispatchEvent(new sinon.Event("load", !1, !1, this)), this.dispatchEvent(new sinon.Event("loadend", !1, !1, this)), this.upload.dispatchEvent(new sinon.Event("load", !1, !1, this)), c && this.upload.dispatchEvent(new sinon.ProgressEvent("progress", {
                                loaded: 100,
                                total: 100
                            }))
                    }
                },
                setRequestHeader: function(e, t) {
                    if (r(this), p[e] || /^(Sec-|Proxy-)/.test(e)) throw new Error('Refused to set unsafe header "' + e + '"');
                    this.requestHeaders[e] ? this.requestHeaders[e] += "," + t : this.requestHeaders[e] = t
                },
                setResponseHeaders: function(e) {
                    s(this), this.responseHeaders = {};
                    for (var n in e) e.hasOwnProperty(n) && (this.responseHeaders[n] = e[n]);
                    this.async ? this.readyStateChange(t.HEADERS_RECEIVED) : this.readyState = t.HEADERS_RECEIVED
                },
                send: function(e) {
                    if (r(this), !/^(get|head)$/i.test(this.method)) {
                        if (this.requestHeaders["Content-Type"]) {
                            var n = this.requestHeaders["Content-Type"].split(";");
                            this.requestHeaders["Content-Type"] = n[0] + ";charset=utf-8"
                        } else this.requestHeaders["Content-Type"] = "text/plain;charset=utf-8";
                        this.requestBody = e
                    }
                    this.errorFlag = !1, this.sendFlag = this.async, this.readyStateChange(t.OPENED), "function" == typeof this.onSend && this.onSend(this), this.dispatchEvent(new sinon.Event("loadstart", !1, !1, this))
                },
                abort: function() {
                    this.aborted = !0, this.responseText = null, this.errorFlag = !0, this.requestHeaders = {}, this.readyState > sinon.FakeXMLHttpRequest.UNSENT && this.sendFlag && (this.readyStateChange(sinon.FakeXMLHttpRequest.DONE), this.sendFlag = !1), this.readyState = sinon.FakeXMLHttpRequest.UNSENT, this.dispatchEvent(new sinon.Event("abort", !1, !1, this)), this.upload.dispatchEvent(new sinon.Event("abort", !1, !1, this)), "function" == typeof this.onerror && this.onerror()
                },
                getResponseHeader: function(e) {
                    if (this.readyState < t.HEADERS_RECEIVED) return null;
                    if (/^Set-Cookie2?$/i.test(e)) return null;
                    e = e.toLowerCase();
                    for (var n in this.responseHeaders)
                        if (n.toLowerCase() == e) return this.responseHeaders[n];
                    return null
                },
                getAllResponseHeaders: function() {
                    if (this.readyState < t.HEADERS_RECEIVED) return "";
                    var e = "";
                    for (var n in this.responseHeaders) this.responseHeaders.hasOwnProperty(n) && !/^Set-Cookie2?$/i.test(n) && (e += n + ": " + this.responseHeaders[n] + "\r\n");
                    return e
                },
                setResponseBody: function(e) {
                    a(this), u(this), l(e);
                    var n = this.chunkSize || 10,
                        r = 0;
                    this.responseText = "";
                    do this.async && this.readyStateChange(t.LOADING), this.responseText += e.substring(r, r + n), r += n; while (r < e.length);
                    var i = this.getResponseHeader("Content-Type");
                    if (this.responseText && (!i || /(text\/xml)|(application\/xml)|(\+xml)/.test(i))) try {
                        this.responseXML = t.parseXML(this.responseText)
                    } catch (o) {}
                    this.async ? this.readyStateChange(t.DONE) : this.readyState = t.DONE
                },
                respond: function(e, n, r) {
                    this.status = "number" == typeof e ? e : 200, this.statusText = t.statusCodes[this.status], this.setResponseHeaders(n || {}), this.setResponseBody(r || "")
                },
                uploadProgress: function(e) {
                    c && this.upload.dispatchEvent(new sinon.ProgressEvent("progress", e))
                },
                uploadError: function(e) {
                    f && this.upload.dispatchEvent(new sinon.CustomEvent("error", {
                        detail: e
                    }))
                }
            }), sinon.extend(t, {
                UNSENT: 0,
                OPENED: 1,
                HEADERS_RECEIVED: 2,
                LOADING: 3,
                DONE: 4
            }), t.parseXML = function(e) {
                var t;
                if ("undefined" != typeof DOMParser) {
                    var n = new DOMParser;
                    t = n.parseFromString(e, "text/xml")
                } else t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e);
                return t
            }, t.statusCodes = {
                100: "Continue",
                101: "Switching Protocols",
                200: "OK",
                201: "Created",
                202: "Accepted",
                203: "Non-Authoritative Information",
                204: "No Content",
                205: "Reset Content",
                206: "Partial Content",
                300: "Multiple Choice",
                301: "Moved Permanently",
                302: "Found",
                303: "See Other",
                304: "Not Modified",
                305: "Use Proxy",
                307: "Temporary Redirect",
                400: "Bad Request",
                401: "Unauthorized",
                402: "Payment Required",
                403: "Forbidden",
                404: "Not Found",
                405: "Method Not Allowed",
                406: "Not Acceptable",
                407: "Proxy Authentication Required",
                408: "Request Timeout",
                409: "Conflict",
                410: "Gone",
                411: "Length Required",
                412: "Precondition Failed",
                413: "Request Entity Too Large",
                414: "Request-URI Too Long",
                415: "Unsupported Media Type",
                416: "Requested Range Not Satisfiable",
                417: "Expectation Failed",
                422: "Unprocessable Entity",
                500: "Internal Server Error",
                501: "Not Implemented",
                502: "Bad Gateway",
                503: "Service Unavailable",
                504: "Gateway Timeout",
                505: "HTTP Version Not Supported"
            }, sinon.useFakeXMLHttpRequest = function() {
                return sinon.FakeXMLHttpRequest.restore = function(t) {
                    h.supportsXHR && (e.XMLHttpRequest = h.GlobalXMLHttpRequest), h.supportsActiveX && (e.ActiveXObject = h.GlobalActiveXObject), delete sinon.FakeXMLHttpRequest.restore, t !== !0 && delete sinon.FakeXMLHttpRequest.onCreate
                }, h.supportsXHR && (e.XMLHttpRequest = sinon.FakeXMLHttpRequest), h.supportsActiveX && (e.ActiveXObject = function(e) {
                    return "Microsoft.XMLHTTP" == e || /^Msxml2\.XMLHTTP/i.test(e) ? new sinon.FakeXMLHttpRequest : new h.GlobalActiveXObject(e)
                }), sinon.FakeXMLHttpRequest
            }, sinon.FakeXMLHttpRequest = t
        }(function() {
            return "object" == typeof global ? global : this
        }()), "undefined" != typeof module && module.exports && (module.exports = sinon), "undefined" == typeof sinon) var sinon = {};
    if (sinon.fakeServer = function() {
            function e() {}

            function t(t) {
                return e.prototype = t, new e
            }

            function n(e) {
                var t = e;
                if ("[object Array]" != Object.prototype.toString.call(e) && (t = [200, {}, e]), "string" != typeof t[2]) throw new TypeError("Fake server response body should be string, but was " + typeof t[2]);
                return t
            }

            function r(e, t, n) {
                var r = e.method,
                    i = !r || r.toLowerCase() == t.toLowerCase(),
                    o = e.url,
                    s = !o || o == n || "function" == typeof o.test && o.test(n);
                return i && s
            }

            function i(e, t) {
                var n = t.url;
                if ((!/^https?:\/\//.test(n) || a.test(n)) && (n = n.replace(a, "")), r(e, this.getHTTPMethod(t), n)) {
                    if ("function" == typeof e.response) {
                        var i = e.url,
                            o = [t].concat(i && "function" == typeof i.exec ? i.exec(n).slice(1) : []);
                        return e.response.apply(e, o)
                    }
                    return !0
                }
                return !1
            }
            var o = [].push,
                s = "undefined" != typeof window ? window.location : {},
                a = new RegExp("^" + s.protocol + "//" + s.host);
            return {
                create: function() {
                    var e = t(this);
                    return this.xhr = sinon.useFakeXMLHttpRequest(), e.requests = [], this.xhr.onCreate = function(t) {
                        e.addRequest(t)
                    }, e
                },
                addRequest: function(e) {
                    var t = this;
                    o.call(this.requests, e), e.onSend = function() {
                        t.handleRequest(this), t.autoRespond && !t.responding && (setTimeout(function() {
                            t.responding = !1, t.respond()
                        }, t.autoRespondAfter || 10), t.responding = !0)
                    }
                },
                getHTTPMethod: function(e) {
                    if (this.fakeHTTPMethods && /post/i.test(e.method)) {
                        var t = (e.requestBody || "").match(/_method=([^\b;]+)/);
                        return t ? t[1] : e.method
                    }
                    return e.method
                },
                handleRequest: function(e) {
                    e.async ? (this.queue || (this.queue = []), o.call(this.queue, e)) : this.processRequest(e)
                },
                log: function(e, t) {
                    var n;
                    n = "Request:\n" + sinon.format(t) + "\n\n", n += "Response:\n" + sinon.format(e) + "\n\n", sinon.log(n)
                },
                respondWith: function(e, t, r) {
                    return 1 == arguments.length && "function" != typeof e ? void(this.response = n(e)) : (this.responses || (this.responses = []), 1 == arguments.length && (r = e, t = e = null), 2 == arguments.length && (r = t, t = e, e = null), void o.call(this.responses, {
                        method: e,
                        url: t,
                        response: "function" == typeof r ? r : n(r)
                    }))
                },
                respond: function() {
                    arguments.length > 0 && this.respondWith.apply(this, arguments);
                    for (var e, t = this.queue || [], n = t.splice(0, t.length); e = n.shift();) this.processRequest(e)
                },
                processRequest: function(e) {
                    try {
                        if (e.aborted) return;
                        var t = this.response || [404, {}, ""];
                        if (this.responses)
                            for (var n = this.responses.length, r = n - 1; r >= 0; r--)
                                if (i.call(this, this.responses[r], e)) {
                                    t = this.responses[r].response;
                                    break
                                }
                        4 != e.readyState && (sinon.fakeServer.log(t, e), e.respond(t[0], t[1], t[2]))
                    } catch (o) {
                        sinon.logError("Fake server request processing", o)
                    }
                },
                restore: function() {
                    return this.xhr.restore && this.xhr.restore.apply(this.xhr, arguments)
                }
            }
        }(), "undefined" != typeof module && module.exports && (module.exports = sinon), function() {
            function e() {}
            e.prototype = sinon.fakeServer, sinon.fakeServerWithClock = new e, sinon.fakeServerWithClock.addRequest = function(e) {
                if (e.async && ("object" == typeof setTimeout.clock ? this.clock = setTimeout.clock : (this.clock = sinon.useFakeTimers(), this.resetClock = !0), !this.longestTimeout)) {
                    var t = this.clock.setTimeout,
                        n = this.clock.setInterval,
                        r = this;
                    this.clock.setTimeout = function(e, n) {
                        return r.longestTimeout = Math.max(n, r.longestTimeout || 0), t.apply(this, arguments)
                    }, this.clock.setInterval = function(e, t) {
                        return r.longestTimeout = Math.max(t, r.longestTimeout || 0), n.apply(this, arguments)
                    }
                }
                return sinon.fakeServer.addRequest.call(this, e)
            }, sinon.fakeServerWithClock.respond = function() {
                var e = sinon.fakeServer.respond.apply(this, arguments);
                return this.clock && (this.clock.tick(this.longestTimeout || 0), this.longestTimeout = 0, this.resetClock && (this.clock.restore(), this.resetClock = !1)), e
            }, sinon.fakeServerWithClock.restore = function() {
                return this.clock && this.clock.restore(), sinon.fakeServer.restore.apply(this, arguments)
            }
        }(), "undefined" != typeof module && module.exports && "function" == typeof require) {
        var sinon = require("../sinon");
        sinon.extend(sinon, require("./util/fake_timers"))
    }
    return function() {
            function e(e, t, r, i) {
                i && (!t.injectInto || r in t.injectInto ? n.call(e.args, i) : (t.injectInto[r] = i, e.injectedKeys.push(r)))
            }

            function t(e) {
                var t = sinon.create(sinon.sandbox);
                return e.useFakeServer && ("object" == typeof e.useFakeServer && (t.serverPrototype = e.useFakeServer), t.useFakeServer()), e.useFakeTimers && ("object" == typeof e.useFakeTimers ? t.useFakeTimers.apply(t, e.useFakeTimers) : t.useFakeTimers()), t
            }
            var n = [].push;
            sinon.sandbox = sinon.extend(sinon.create(sinon.collection), {
                useFakeTimers: function() {
                    return this.clock = sinon.useFakeTimers.apply(sinon, arguments), this.add(this.clock)
                },
                serverPrototype: sinon.fakeServer,
                useFakeServer: function() {
                    var e = this.serverPrototype || sinon.fakeServer;
                    return e && e.create ? (this.server = e.create(), this.add(this.server)) : null
                },
                inject: function(e) {
                    return sinon.collection.inject.call(this, e), this.clock && (e.clock = this.clock), this.server && (e.server = this.server, e.requests = this.server.requests), e
                },
                restore: function() {
                    sinon.collection.restore.apply(this, arguments), this.restoreContext()
                },
                restoreContext: function() {
                    if (this.injectedKeys) {
                        for (var e = 0, t = this.injectedKeys.length; t > e; e++) delete this.injectInto[this.injectedKeys[e]];
                        this.injectedKeys = []
                    }
                },
                create: function(n) {
                    if (!n) return sinon.create(sinon.sandbox);
                    var r = t(n);
                    r.args = r.args || [], r.injectedKeys = [], r.injectInto = n.injectInto;
                    var i, o, s = r.inject({});
                    if (n.properties)
                        for (var a = 0, u = n.properties.length; u > a; a++) i = n.properties[a], o = s[i] || "sandbox" == i && r, e(r, n, i, o);
                    else e(r, n, "sandbox", o);
                    return r
                }
            }), sinon.sandbox.useFakeXMLHttpRequest = sinon.sandbox.useFakeServer, "function" == typeof define && define.amd ? define(["module"], function(e) {
                e.exports = sinon.sandbox
            }) : "undefined" != typeof module && module.exports && (module.exports = sinon.sandbox)
        }(),
        function(e) {
            function t(t) {
                function n() {
                    var n = e.getConfig(e.config);
                    n.injectInto = n.injectIntoThis && this || n.injectInto;
                    var r, i, o = e.sandbox.create(n),
                        s = Array.prototype.slice.call(arguments).concat(o.args);
                    try {
                        i = t.apply(this, s)
                    } catch (a) {
                        r = a
                    }
                    if ("undefined" != typeof r) throw o.restore(), r;
                    return o.verifyAndRestore(), i
                }
                var r = typeof t;
                if ("function" != r) throw new TypeError("sinon.test needs to wrap a test function, got " + r);
                return t.length ? function() {
                    return n.apply(this, arguments)
                } : n
            }
            var n = "undefined" != typeof module && module.exports && "function" == typeof require;
            !e && n && (e = require("../sinon")), e && (t.config = {
                injectIntoThis: !0,
                injectInto: null,
                properties: ["spy", "stub", "mock", "clock", "server", "requests"],
                useFakeTimers: !0,
                useFakeServer: !0
            }, e.test = t, "function" == typeof define && define.amd ? define(["module"], function(e) {
                e.exports = t
            }) : n && (module.exports = t))
        }("object" == typeof sinon && sinon || null),
        function(e) {
            function t(e, t, n) {
                return function() {
                    t && t.apply(this, arguments);
                    var r, i;
                    try {
                        i = e.apply(this, arguments)
                    } catch (o) {
                        r = o
                    }
                    if (n && n.apply(this, arguments), r) throw r;
                    return i
                }
            }

            function n(n, r) {
                if (!n || "object" != typeof n) throw new TypeError("sinon.testCase needs an object with test functions");
                r = r || "test";
                var i, o, s, a = new RegExp("^" + r),
                    u = {},
                    l = n.setUp,
                    c = n.tearDown;
                for (i in n)
                    if (n.hasOwnProperty(i)) {
                        if (o = n[i], /^(setUp|tearDown)$/.test(i)) continue;
                        "function" == typeof o && a.test(i) ? (s = o, (l || c) && (s = t(o, l, c)), u[i] = e.test(s)) : u[i] = n[i]
                    }
                return u
            }
            var r = "undefined" != typeof module && module.exports && "function" == typeof require;
            !e && r && (e = require("../sinon")), e && Object.prototype.hasOwnProperty && (e.testCase = n, "function" == typeof define && define.amd ? define(["module"], function(e) {
                e.exports = n
            }) : r && (module.exports = n))
        }("object" == typeof sinon && sinon || null),
        function(e, t) {
            function n() {
                for (var e, t = 0, n = arguments.length; n > t; ++t) e = arguments[t], e || s.fail("fake is not a spy"), "function" != typeof e && s.fail(e + " is not a function"), "function" != typeof e.getCall && s.fail(e + " is not stubbed")
            }

            function r(e, n) {
                e = e || t;
                var r = e.fail || s.fail;
                r.call(e, n)
            }

            function i(e, t, i) {
                2 == arguments.length && (i = t, t = e), s[e] = function(o) {
                    n(o);
                    var a = u.call(arguments, 1),
                        l = !1;
                    l = "function" == typeof t ? !t(o) : "function" == typeof o[t] ? !o[t].apply(o, a) : !o[t], l ? r(this, o.printf.apply(o, [i].concat(a))) : s.pass(e)
                }
            }

            function o(e, t) {
                return !e || /^fail/.test(t) ? t : e + t.slice(0, 1).toUpperCase() + t.slice(1)
            }
            var s, a = "undefined" != typeof module && module.exports && "function" == typeof require,
                u = Array.prototype.slice;
            !e && a && (e = require("../sinon")), e && (s = {
                failException: "AssertError",
                fail: function(e) {
                    var t = new Error(e);
                    throw t.name = this.failException || s.failException, t
                },
                pass: function() {},
                callOrder: function() {
                    n.apply(null, arguments);
                    var t = "",
                        i = "";
                    if (e.calledInOrder(arguments)) s.pass("callOrder");
                    else {
                        try {
                            t = [].join.call(arguments, ", ");
                            for (var o = u.call(arguments), a = o.length; a;) o[--a].called || o.splice(a, 1);
                            i = e.orderByFirstCall(o).join(", ")
                        } catch (l) {}
                        r(this, "expected " + t + " to be called in order but were called as " + i)
                    }
                },
                callCount: function(t, i) {
                    if (n(t), t.callCount != i) {
                        var o = "expected %n to be called " + e.timesInWords(i) + " but was called %c%C";
                        r(this, t.printf(o))
                    } else s.pass("callCount")
                },
                expose: function(e, t) {
                    if (!e) throw new TypeError("target is null or undefined");
                    var n = t || {},
                        r = "undefined" == typeof n.prefix && "assert" || n.prefix,
                        i = "undefined" == typeof n.includeFail || !!n.includeFail;
                    for (var s in this) "export" == s || !i && /^(fail)/.test(s) || (e[o(r, s)] = this[s]);
                    return e
                },
                match: function(t, n) {
                    var i = e.match(n);
                    if (i.test(t)) s.pass("match");
                    else {
                        var o = ["expected value to match", "    expected = " + e.format(n), "    actual = " + e.format(t)];
                        r(this, o.join("\n"))
                    }
                }
            }, i("called", "expected %n to have been called at least once but was never called"), i("notCalled", function(e) {
                return !e.called
            }, "expected %n to not have been called but was called %c%C"), i("calledOnce", "expected %n to be called once but was called %c%C"), i("calledTwice", "expected %n to be called twice but was called %c%C"), i("calledThrice", "expected %n to be called thrice but was called %c%C"), i("calledOn", "expected %n to be called with %1 as this but was called with %t"), i("alwaysCalledOn", "expected %n to always be called with %1 as this but was called with %t"), i("calledWithNew", "expected %n to be called with new"), i("alwaysCalledWithNew", "expected %n to always be called with new"), i("calledWith", "expected %n to be called with arguments %*%C"), i("calledWithMatch", "expected %n to be called with match %*%C"), i("alwaysCalledWith", "expected %n to always be called with arguments %*%C"), i("alwaysCalledWithMatch", "expected %n to always be called with match %*%C"), i("calledWithExactly", "expected %n to be called with exact arguments %*%C"), i("alwaysCalledWithExactly", "expected %n to always be called with exact arguments %*%C"), i("neverCalledWith", "expected %n to never be called with arguments %*%C"), i("neverCalledWithMatch", "expected %n to never be called with match %*%C"), i("threw", "%n did not throw exception%C"), i("alwaysThrew", "%n did not always throw exception%C"), e.assert = s, "function" == typeof define && define.amd ? define(["module"], function(e) {
                e.exports = s
            }) : a && (module.exports = s))
        }("object" == typeof sinon && sinon || null, "undefined" != typeof window ? window : "undefined" != typeof self ? self : global), "undefined" == typeof sinon && (this.sinon = {}), sinon.xdr = {
            XDomainRequest: this.XDomainRequest
        },
        function(e) {
            function t() {
                this.readyState = t.UNSENT, this.requestBody = null, this.requestHeaders = {}, this.status = 0, this.timeout = null, "function" == typeof t.onCreate && t.onCreate(this)
            }

            function n(e) {
                if (e.readyState !== t.OPENED) throw new Error("INVALID_STATE_ERR");
                if (e.sendFlag) throw new Error("INVALID_STATE_ERR")
            }

            function r(e) {
                if (e.readyState == t.UNSENT) throw new Error("Request not sent");
                if (e.readyState == t.DONE) throw new Error("Request done")
            }

            function i(e) {
                if ("string" != typeof e) {
                    var t = new Error("Attempted to respond to fake XDomainRequest with " + e + ", which is not a string.");
                    throw t.name = "InvalidBodyException", t
                }
            }
            var o = sinon.xdr;
            o.GlobalXDomainRequest = e.XDomainRequest, o.supportsXDR = "undefined" != typeof o.GlobalXDomainRequest, o.workingXDR = o.supportsXDR ? o.GlobalXDomainRequest : !1, sinon.extend(t.prototype, sinon.EventTarget, {
                open: function(e, n) {
                    this.method = e, this.url = n, this.responseText = null, this.sendFlag = !1, this.readyStateChange(t.OPENED)
                },
                readyStateChange: function(e) {
                    this.readyState = e;
                    var n = "";
                    switch (this.readyState) {
                        case t.UNSENT:
                            break;
                        case t.OPENED:
                            break;
                        case t.LOADING:
                            this.sendFlag && (n = "onprogress");
                            break;
                        case t.DONE:
                            n = this.isTimeout ? "ontimeout" : this.errorFlag || this.status < 200 || this.status > 299 ? "onerror" : "onload"
                    }
                    if (n && "function" == typeof this[n]) try {
                        this[n]()
                    } catch (r) {
                        sinon.logError("Fake XHR " + n + " handler", r)
                    }
                },
                send: function(e) {
                    n(this), /^(get|head)$/i.test(this.method) || (this.requestBody = e), this.requestHeaders["Content-Type"] = "text/plain;charset=utf-8", this.errorFlag = !1, this.sendFlag = !0, this.readyStateChange(t.OPENED), "function" == typeof this.onSend && this.onSend(this)
                },
                abort: function() {
                    this.aborted = !0, this.responseText = null, this.errorFlag = !0, this.readyState > sinon.FakeXDomainRequest.UNSENT && this.sendFlag && (this.readyStateChange(sinon.FakeXDomainRequest.DONE), this.sendFlag = !1)
                },
                setResponseBody: function(e) {
                    r(this), i(e);
                    var n = this.chunkSize || 10,
                        o = 0;
                    this.responseText = "";
                    do this.readyStateChange(t.LOADING), this.responseText += e.substring(o, o + n), o += n; while (o < e.length);
                    this.readyStateChange(t.DONE)
                },
                respond: function(e, t, n) {
                    this.status = "number" == typeof e ? e : 200, this.setResponseBody(n || "")
                },
                simulatetimeout: function() {
                    this.status = 0, this.isTimeout = !0, this.responseText = void 0, this.readyStateChange(t.DONE)
                }
            }), sinon.extend(t, {
                UNSENT: 0,
                OPENED: 1,
                LOADING: 3,
                DONE: 4
            }), sinon.useFakeXDomainRequest = function() {
                return sinon.FakeXDomainRequest.restore = function(t) {
                    o.supportsXDR && (e.XDomainRequest = o.GlobalXDomainRequest), delete sinon.FakeXDomainRequest.restore, t !== !0 && delete sinon.FakeXDomainRequest.onCreate
                }, o.supportsXDR && (e.XDomainRequest = sinon.FakeXDomainRequest), sinon.FakeXDomainRequest
            }, sinon.FakeXDomainRequest = t
        }(this), "object" == typeof module && "function" == typeof require && (module.exports = sinon), sinon
}.call("undefined" != typeof window && window || {});
/*! Unit.js v1.0.1 | (c) 2014 Nicolas Tallefourtane | http://unitjs.com/license.html */
! function(t) {
    function e(n) {
        if (r[n]) return r[n].exports;
        var i = r[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
    }
    var r = {};
    return e.m = t, e.c = r, e.p = "", e(0)
}([function(t, e, r) {
    "use strict";
    window.unitjs = r(1), window.unitjs.httpAgent = function() {
        throw new Error("unitjs.httpAgent() is not supported in the browser build")
    }
}, function(t, e, r) {
    "use strict";
    r(3);
    var n = r(4),
        i = r(5),
        o = r(6),
        s = r(7),
        a = r(8),
        u = r(23),
        c = r(22),
        l = r(2);
    n.promise = o, n.promisify = o.promisify, n.promisifyAll = o.promisifyAll, n.assert = a, n.sinon = l, n.spy = l.spy, n.stub = l.stub, n.mock = l.mock, n.useFakeTimers = l.useFakeTimers;
    var f = i.bind(n),
        h = new f;
    n = s.merge(n, h), Object.defineProperty(n, "should", {
        value: u
    }), Object.defineProperty(n, "must", {
        value: c
    }), t.exports = n
}, function(t) {
    t.exports = sinon
}, function(t, e, r) {
    "use strict";
    t.exports.array = function(t) {
        var e = r(9);
        return new e(t)
    }, t.exports.bool = function(t) {
        var e = r(10);
        return new e(t)
    }, t.exports.date = function(t) {
        var e = r(11);
        return new e(t)
    }, t.exports.error = function(t) {
        var e = r(12);
        return new e(t)
    }, t.exports.exception = function(t) {
        var e = r(13);
        return new e(t)
    }, t.exports.function = function(t) {
        var e = r(14);
        return new e(t)
    }, t.exports.number = function(t) {
        var e = r(15);
        return new e(t)
    }, t.exports.object = function(t) {
        var e = r(16);
        return new e(t)
    }, t.exports.regexp = function(t) {
        var e = r(17);
        return new e(t)
    }, t.exports.string = function(t) {
        var e = r(18);
        return new e(t)
    }, t.exports.undefined = function(t) {
        var e = r(19);
        return new e(t)
    }, t.exports.value = function(t) {
        var e = r(20);
        return new e(t)
    }
}, function(t, e, r) {
    "use strict";

    function n() {
        i.call(this)
    }
    var i = r(27).Noder;
    n.prototype = Object.create(i.prototype, {
        constructor: {
            value: n
        }
    }), n.prototype.UnitJS = n, t.exports = new n
}, function(t, e, r) {
    "use strict";
    var n = r(3),
        i = r(21);
    t.exports = function() {
        for (var t in i) this[t] = i[t];
        for (var t in n) this[t] = n[t];
        return this
    }
}, function(t, e, r) {
    "use strict";
    var n = r(30);
    n.given = function(t) {
        return "undefined" == typeof t ? n.resolve() : "function" == typeof t ? n.resolve().then(t) : "object" != typeof t || n.is(t) ? n.resolve(t) : n.props(t)
    }, n.prototype.when = n.prototype.then, t.exports = n
}, function(t, e) {
    "use strict";
    e.merge = function(t, e) {
        if (t && e)
            for (var r in e) t[r] = e[r];
        return t
    }, e.chain = function(t) {
        return t.apply = t.apply, t.bind = t.bind, t.call = t.call, t.toString = t.toString, t.__proto__ = this, t
    }
}, function(t, e, r) {
    function n(t, e) {
        return p.isUndefined(e) ? "" + e : !p.isNumber(e) || !isNaN(e) && isFinite(e) ? p.isFunction(e) || p.isRegExp(e) ? e.toString() : e : e.toString()
    }

    function i(t, e) {
        return p.isString(t) ? t.length < e ? t : t.slice(0, e) : t
    }

    function o(t) {
        return i(JSON.stringify(t.actual, n), 128) + " " + t.operator + " " + i(JSON.stringify(t.expected, n), 128)
    }

    function s(t, e, r, n, i) {
        throw new g.AssertionError({
            message: r,
            actual: t,
            expected: e,
            operator: n,
            stackStartFunction: i
        })
    }

    function a(t, e) {
        t || s(t, !0, e, "==", g.ok)
    }

    function u(t, e) {
        if (t === e) return !0;
        if (p.isBuffer(t) && p.isBuffer(e)) {
            if (t.length != e.length) return !1;
            for (var r = 0; r < t.length; r++)
                if (t[r] !== e[r]) return !1;
            return !0
        }
        return p.isDate(t) && p.isDate(e) ? t.getTime() === e.getTime() : p.isRegExp(t) && p.isRegExp(e) ? t.source === e.source && t.global === e.global && t.multiline === e.multiline && t.lastIndex === e.lastIndex && t.ignoreCase === e.ignoreCase : p.isObject(t) || p.isObject(e) ? l(t, e) : t == e
    }

    function c(t) {
        return "[object Arguments]" == Object.prototype.toString.call(t)
    }

    function l(t, e) {
        if (p.isNullOrUndefined(t) || p.isNullOrUndefined(e)) return !1;
        if (t.prototype !== e.prototype) return !1;
        if (c(t)) return c(e) ? (t = d.call(t), e = d.call(e), u(t, e)) : !1;
        try {
            var r, n, i = v(t),
                o = v(e)
        } catch (s) {
            return !1
        }
        if (i.length != o.length) return !1;
        for (i.sort(), o.sort(), n = i.length - 1; n >= 0; n--)
            if (i[n] != o[n]) return !1;
        for (n = i.length - 1; n >= 0; n--)
            if (r = i[n], !u(t[r], e[r])) return !1;
        return !0
    }

    function f(t, e) {
        return t && e ? "[object RegExp]" == Object.prototype.toString.call(e) ? e.test(t) : t instanceof e ? !0 : e.call({}, t) === !0 ? !0 : !1 : !1
    }

    function h(t, e, r, n) {
        var i;
        p.isString(r) && (n = r, r = null);
        try {
            e()
        } catch (o) {
            i = o
        }
        if (n = (r && r.name ? " (" + r.name + ")." : ".") + (n ? " " + n : "."), t && !i && s(i, r, "Missing expected exception" + n), !t && f(i, r) && s(i, r, "Got unwanted exception" + n), t && i && r && !f(i, r) || !t && i) throw i
    }
    var p = r(43),
        d = Array.prototype.slice,
        y = Object.prototype.hasOwnProperty,
        g = t.exports = a;
    g.AssertionError = function(t) {
        this.name = "AssertionError", this.actual = t.actual, this.expected = t.expected, this.operator = t.operator, t.message ? (this.message = t.message, this.generatedMessage = !1) : (this.message = o(this), this.generatedMessage = !0);
        var e = t.stackStartFunction || s;
        if (Error.captureStackTrace) Error.captureStackTrace(this, e);
        else {
            var r = new Error;
            if (r.stack) {
                var n = r.stack,
                    i = e.name,
                    a = n.indexOf("\n" + i);
                if (a >= 0) {
                    var u = n.indexOf("\n", a + 1);
                    n = n.substring(u + 1)
                }
                this.stack = n
            }
        }
    }, p.inherits(g.AssertionError, Error), g.fail = s, g.ok = a, g.equal = function(t, e, r) {
        t != e && s(t, e, r, "==", g.equal)
    }, g.notEqual = function(t, e, r) {
        t == e && s(t, e, r, "!=", g.notEqual)
    }, g.deepEqual = function(t, e, r) {
        u(t, e) || s(t, e, r, "deepEqual", g.deepEqual)
    }, g.notDeepEqual = function(t, e, r) {
        u(t, e) && s(t, e, r, "notDeepEqual", g.notDeepEqual)
    }, g.strictEqual = function(t, e, r) {
        t !== e && s(t, e, r, "===", g.strictEqual)
    }, g.notStrictEqual = function(t, e, r) {
        t === e && s(t, e, r, "!==", g.notStrictEqual)
    }, g.throws = function() {
        h.apply(this, [!0].concat(d.call(arguments)))
    }, g.doesNotThrow = function() {
        h.apply(this, [!1].concat(d.call(arguments)))
    }, g.ifError = function(t) {
        if (t) throw t
    };
    var v = Object.keys || function(t) {
        var e = [];
        for (var r in t) y.call(t, r) && e.push(r);
        return e
    }
}, function(t, e, r) {
    "use strict";
    var n = r(47),
        i = r(5),
        o = r(24),
        s = r(25),
        a = s.concat(["matchEach", "notMatchEach", "isEmpty", "isNotEmpty", "hasLength", "hasNotLength", "hasValue", "notHasValue", "hasValues", "notHasValues", "contains", "notContains", "isReverseOf", "isNotReverseOf", "isEnumerable", "isNotEnumerable", "hasKey", "notHasKey", "hasProperty", "hasNotProperty"]);
    t.exports = function(t) {
        this.actual = t;
        var e = o.call(this, t),
            r = i.bind(this),
            s = new r;
        for (var u in s) this[u] = s[u];
        e.isArray(this.actual);
        var c = n.pick(e, a);
        for (var u in c) this[u] = c[u];
        return this
    }
}, function(t, e, r) {
    "use strict";
    var n = r(47),
        i = r(5),
        o = r(24);
    t.exports = function(t) {
        this.actual = t;
        var e = o.call(this, t),
            r = i.bind(this),
            s = new r;
        for (var a in s) this[a] = s[a];
        e.isBool(this.actual);
        var u = ["isTrue", "isNotTrue", "isFalse", "isNotFalse"],
            c = n.pick(e, u);
        for (var a in c) this[a] = c[a];
        return this
    }
}, function(t, e, r) {
    "use strict";
    var n = r(47),
        i = r(5),
        o = r(24),
        s = r(25),
        a = s.concat(["isBetween", "isNotBetween", "isBefore", "isAfter"]);
    t.exports = function(t) {
        this.actual = t;
        var e = o.call(this, t),
            r = i.bind(this),
            s = new r;
        for (var u in s) this[u] = s[u];
        e.isDate();
        var c = n.pick(e, a);
        for (var u in c) this[u] = c[u];
        return this
    }
}, function(t, e, r) {
    "use strict";
    var n = r(13);
    t.exports = function(t) {
        var e = n.bind(this),
            r = new e(t),
            i = r.isError();
        ["isType", "isNotType", "isObject", "isArray", "isString", "isNumber", "isBool", "isBoolean", "isNull", "isUndefined", "isRegExp", "isNotRegExp", "isDate", "isNotDate", "isArguments", "isNotArguments", "isEmpty", "isNotEmpty", "hasLength", "hasNotLength", "hasProperties", "hasNotProperties", "hasOwnProperties", "hasKeys", "notHasKeys", "hasValue", "notHasValue", "hasValues", "notHasValues", "contains", "notContains", "startsWith", "notStartsWith", "endsWith", "notEndsWith"].map(function(t) {
            delete i[t]
        });
        for (var o in i) this[o] = i[o];
        return this
    }
}, function(t, e, r) {
    "use strict";

    function n(t) {
        if (!t) return !1;
        var e = void 0 === o ? i : o;
        return "[object RegExp]" == Object.prototype.toString.call(t) ? t.test(e) : t === e
    }
    var i, o, s = r(47),
        a = r(5),
        u = r(24),
        c = r(25),
        l = r(7),
        f = r(4),
        h = c.concat(["isType", "isNotType", "isObject", "isArray", "isString", "isNumber", "isBool", "isBoolean", "isNull", "isUndefined", "isRegExp", "isNotRegExp", "isDate", "isNotDate", "isArguments", "isNotArguments", "isEmpty", "isNotEmpty", "hasLength", "hasNotLength", "isInstanceOf", "isNotInstanceOf", "isEnumerable", "isNotEnumerable", "isFrozen", "isNotFrozen", "hasProperty", "hasNotProperty", "hasOwnProperty", "hasNotOwnProperty", "hasProperties", "hasNotProperties", "hasOwnProperties", "hasKey", "notHasKey", "hasKeys", "notHasKeys", "hasValue", "notHasValue", "hasValues", "notHasValues", "contains", "notContains", "startsWith", "notStartsWith", "endsWith", "notEndsWith"]),
        p = {
            isError: function() {
                return this.isInstanceOf(Error)
            },
            match: function(t) {
                var e = "function" == typeof t && t(i, o) !== !0,
                    r = "function" != typeof t && !n(t);
                if (e || r) throw new Error("exception has not the expected value (" + t + ")");
                return this
            },
            notMatch: function(t) {
                var e = "function" == typeof t && t(i, o),
                    r = "function" != typeof t && n(t);
                if (e || r) throw new Error("exception has the expected value (" + t + ")");
                return this
            },
            hasMessage: function(t) {
                return this.match(t)
            }
        };
    t.exports = function(t) {
        var e;
        i = void 0;
        try {
            f.$apply(t)
        } catch (r) {
            this.actual = i = r, e = !0
        }
        e || f.fail("Missing expected exception"), i && void 0 !== i.message ? o = i.message : "string" == typeof i && (o = i);
        var n = u.call(this, i),
            c = a.bind(this),
            d = new c;
        for (var y in d) this[y] = d[y];
        var g = l.merge(s.pick(n, h), p);
        for (var y in g) this[y] = g[y];
        return this
    }
}, function(t, e, r) {
    "use strict";

    function n() {
        var t = "";
        return "function" == typeof i ? t = i.name || i.toString().match(/^function\s?([^\s(]*)/)[1] : "function" == typeof i.constructor && (t = this.hasName(i.constructor)), t
    }
    var i, o = r(47),
        s = r(5),
        a = r(24),
        u = r(25),
        c = r(7),
        l = u.concat(["throws", "isError"]),
        f = {
            hasName: function(t) {
                return this.value(n()).isIdenticalTo(t), this
            }
        };
    t.exports = function(t) {
        this.actual = i = t;
        var e = a.call(this, t),
            r = s.bind(this),
            n = new r;
        for (var u in n) this[u] = n[u];
        e.isFunction(this.actual);
        var h = c.merge(o.pick(e, l), f);
        for (var u in h) this[u] = h[u];
        return this
    }
}, function(t, e, r) {
    "use strict";
    var n = r(47),
        i = r(5),
        o = r(24),
        s = r(25),
        a = s.concat(["matchEach", "notMatchEach", "isBetween", "isNotBetween", "isBefore", "isAfter", "isGreaterThan", "isLessThan", "isApprox", "isInfinite", "isNotInfinite"]);
    t.exports = function(t) {
        this.actual = t;
        var e = o.call(this, t),
            r = i.bind(this),
            s = new r;
        for (var u in s) this[u] = s[u];
        e.isNumber(this.actual);
        var c = n.pick(e, a);
        for (var u in c) this[u] = c[u];
        return this
    }
}, function(t, e, r) {
    "use strict";

    function n(t) {
        return "undefined" == typeof t ? "undefined" : null === t ? "null" : Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1]
    }
    var i = r(47),
        o = r(5),
        s = r(24),
        a = r(25),
        u = r(7),
        c = a.concat(["matchEach", "notMatchEach", "isArray", "isRegExp", "isNotRegExp", "isDate", "isNotDate", "isArguments", "isNotArguments", "isEmpty", "isNotEmpty", "hasLength", "hasNotLength", "isInstanceOf", "isNotInstanceOf", "isEnumerable", "isNotEnumerable", "isFrozen", "isNotFrozen", "hasProperty", "hasNotProperty", "hasOwnProperty", "hasNotOwnProperty", "hasProperties", "hasNotProperties", "hasOwnProperties", "hasKey", "notHasKey", "hasKeys", "notHasKeys", "hasValue", "notHasValue", "hasValues", "notHasValues", "contains", "notContains"]),
        l = {
            hasName: function(t) {
                return this.value(n(this.actual)).isIdenticalTo(t), this
            }
        };
    t.exports = function(t) {
        this.actual = t;
        var e = s.call(this, t),
            r = o.bind(this),
            n = new r;
        for (var a in n) this[a] = n[a];
        e.isObject(this.actual);
        var f = u.merge(i.pick(e, c), l);
        for (var a in f) this[a] = f[a];
        return this
    }
}, function(t, e, r) {
    "use strict";
    var n = r(47),
        i = r(5),
        o = r(24),
        s = r(25),
        a = s.concat(["isEnumerable", "isNotEnumerable", "isFrozen", "isNotFrozen", "hasProperty", "hasNotProperty", "hasOwnProperty", "hasNotOwnProperty", "hasKey", "notHasKey"]);
    t.exports = function(t) {
        this.actual = t;
        var e = o.call(this, t),
            r = i.bind(this),
            s = new r;
        for (var u in s) this[u] = s[u];
        e.isRegExp(this.actual);
        var c = n.pick(e, a);
        for (var u in c) this[u] = c[u];
        return this
    }
}, function(t, e, r) {
    "use strict";
    var n = r(47),
        i = r(5),
        o = r(24),
        s = r(25),
        a = s.concat(["matchEach", "notMatchEach", "isEmpty", "isNotEmpty", "hasLength", "hasNotLength", "startsWith", "notStartsWith", "endsWith", "notEndsWith", "hasValue", "notHasValue", "hasValues", "notHasValues", "contains", "notContains"]);
    t.exports = function(t) {
        this.actual = t;
        var e = o.call(this, t),
            r = i.bind(this),
            s = new r;
        for (var u in s) this[u] = s[u];
        e.isString(this.actual);
        var c = n.pick(e, a);
        for (var u in c) this[u] = c[u];
        return this
    }
}, function(t, e, r) {
    "use strict";
    var n = r(5),
        i = r(24);
    t.exports = function(t) {
        this.actual = t;
        var e = i.call(this, t),
            r = n.bind(this),
            o = new r;
        for (var s in o) this[s] = o[s];
        return e.isUndefined(this.actual), this
    }
}, function(t, e, r) {
    "use strict";
    var n = r(5),
        i = r(24);
    t.exports = function(t) {
        this.actual = t;
        var e = i.call(this, t),
            r = n.bind(this),
            o = new r;
        for (var s in o) this[s] = o[s];
        for (var s in e) this[s] = e[s];
        return this
    }
}, function(t, e, r) {
    "use strict";
    var n = r(7),
        i = r(26),
        o = r(4);
    t.exports = {
        "case": function() {
            if (arguments.length)
                for (var t in arguments) "function" == typeof arguments[t] && arguments[t].call(o.$di._container);
            return o
        },
        given: function() {
            return this.case.apply(this, arguments)
        },
        when: function() {
            return this.case.apply(this, arguments)
        },
        then: function() {
            return this.case.apply(this, arguments)
        },
        get if() {
            return n.chain.call(this, this.case)
        },
        get and() {
            return n.chain.call(this, this.case)
        },
        wait: function(t, e) {
            return setTimeout(function() {
                e.call(o.$di._container)
            }, t), o
        },
        dump: function() {
            var t = "======================",
                e = "______________________",
                r = "                             ",
                n = 0;
            if (console.log("\n" + t + " Unit.js dump: start " + t), 0 === arguments.length) console.log("\n" + e + e + e + "\n" + r + "[actual]\n\n"), console.log(this.actual);
            else
                for (var i in arguments) n++, console.log("\n" + e + e + e + "\n" + r + "[dump %s]\n\n", n), console.log(arguments[i]);
            return console.log("\n" + t + " Unit.js dump: end " + t + "\n"), this
        },
        fail: function(t) {
            var e = Array.prototype.slice.call(arguments),
                r = {
                    actual: e.length >= 3 ? e[2] : this.actual
                };
            e.length >= 2 && (r.expected = e[1]), e.length >= 4 && (r.inspect = e.slice(3)), i(t, r)
        },
        stats: {
            assertions: {},
            total: {
                assertions: 0
            }
        }
    }
}, function(t, e, r) {
    function n(t) {
        return this instanceof n ? void(this.actual = t) : new n(t)
    }

    function i(t) {
        return t instanceof Boolean || t instanceof String || t instanceof Number ? t.valueOf() : t
    }
    var o = r(28),
        s = r(29);
    t.exports = n, n.prototype = Object.create(o, {
        constructor: {
            value: n,
            writable: !0,
            configurable: !0
        }
    }), n.AssertionError = s, Object.defineProperty(Object.prototype, "must", {
        get: function() {
            return new n(i(this))
        },
        set: function(t) {
            Object.defineProperty(this, "must", {
                value: t,
                configurable: !0,
                enumrable: !0,
                writable: !0
            })
        },
        configurable: !0
    })
}, function(t, e, r) {
    /*!
     * Should
     * Copyright(c) 2010-2014 TJ Holowaychuk <tj@vision-media.ca>
     * MIT Licensed
     */
    var n = r(31),
        i = n.AssertionError,
        o = n.inspect,
        s = function(t) {
            return new a(n.isWrapperType(t) ? t.valueOf() : t)
        },
        a = s.Assertion = function(t) {
            this.obj = t
        };
    a.add = function(t, e, r) {
        var n = {
            enumerable: !0
        };
        n[r ? "get" : "value"] = function() {
            var t = new a(this.obj);
            t.copy = t.copyIfMissing, t.anyOne = this.anyOne;
            try {
                e.apply(t, arguments)
            } catch (r) {
                if (this.copy(t), r instanceof s.AssertionError) {
                    if (this.negate) return this.obj = t.obj, this.negate = !1, this;
                    this.assert(!1)
                }
                throw r
            }
            return this.copy(t), this.negate && this.assert(!1), this.obj = t.obj, this.negate = !1, this
        }, Object.defineProperty(a.prototype, t, n)
    }, a.alias = function(t, e) {
        var r = Object.getOwnPropertyDescriptor(a.prototype, t);
        if (!r) throw new Error("Alias " + t + " -> " + e + " could not be created as " + t + " not defined");
        Object.defineProperty(a.prototype, e, r)
    }, s.AssertionError = i, s.format = function(t) {
        return n.isDate(t) && "function" != typeof t.inspect ? t.toISOString() : o(t, {
            depth: null
        })
    }, s.use = function(t) {
        return t(this, a), this
    }, e = t.exports = s, Object.defineProperty(Object.prototype, "should", {
        set: function() {},
        get: function() {
            return s(this)
        },
        configurable: !0
    }), a.prototype = {
        constructor: a,
        assert: function(t) {
            if (t) return this;
            var e = this.params,
                r = e.message,
                n = !1;
            r || (r = this.getMessage(), n = !0);
            var o = new i({
                message: r,
                actual: this.obj,
                expected: e.expected,
                stackStartFunction: this.assert
            });
            throw o.showDiff = e.showDiff, o.operator = e.operator, o.generatedMessage = n, o
        },
        getMessage: function() {
            return "expected " + ("obj" in this.params ? this.params.obj : s.format(this.obj)) + (this.negate ? " not " : " ") + this.params.operator + ("expected" in this.params ? " " + s.format(this.params.expected) : "")
        },
        copy: function(t) {
            this.params = t.params
        },
        copyIfMissing: function(t) {
            this.params || (this.params = t.params)
        },
        get not() {
            return this.negate = !this.negate, this
        },
        get any() {
            return this.anyOne = !0, this
        }
    }, s.use(r(32)).use(r(33)).use(r(34)).use(r(35)).use(r(36)).use(r(37)).use(r(38)).use(r(39)).use(r(40)).use(r(41)).use(r(42))
}, function(t, e, r) {
    "use strict";

    function n(t, e) {
        "undefined" == typeof a.assertions[t] && (a.assertions[t] = 0), a.assertions[t] ++, e && a.total.assertions++
    }
    var i = r(8),
        o = r(23),
        s = r(22),
        a = r(21).stats,
        u = r(21).fail;
    t.exports = function(t) {
        return {
            is: function(e) {
                return n("is", !0), s(t).eql(e), this
            },
            isNot: function(e) {
                return n("isNot", !0), s(t).not.eql(e), this
            },
            isEqualTo: function(e) {
                return n("isEqualTo", !0), i.equal(t, e, "(actual == expected), actual " + typeof t + " is not equal to expected " + typeof e), this
            },
            isNotEqualTo: function(e) {
                return n("isNotEqualTo", !0), i.notEqual(t, e, "(actual != expected), actual " + typeof t + " is equal to expected" + typeof e), this
            },
            isStrictEqualTo: function(e) {
                return n("isStrictEqualTo", !0), i.strictEqual(t, e, "(actual === expected), actual " + typeof t + " is not identical to expected " + typeof e), this
            },
            isNotStrictEqualTo: function(e) {
                return n("isNotStrictEqualTo", !0), i.notStrictEqual(t, e, "(actual !== expected), actual " + typeof t + " is identical to expected " + typeof e), this
            },
            isIdenticalTo: function(t) {
                return n("isIdenticalTo"), this.isStrictEqualTo(t)
            },
            isNotIdenticalTo: function(t) {
                return n("isNotIdenticalTo"), this.isNotStrictEqualTo(t)
            },
            match: function(e) {
                return n("match", !0), "function" == typeof e ? (e(t) !== !0 && u("actual value tested must match."), this) : (s(t).match(e), this)
            },
            notMatch: function(e) {
                return n("notMatch", !0), "function" == typeof e ? (e(t) && u("actual value tested (" + t + ") must not match (" + e + ")"), this) : (s(t).not.match(e), this)
            },
            matchEach: function(e) {
                if (n("matchEach", !0), "function" == typeof e) {
                    if ("object" == typeof t)
                        for (var r in t) e(t[r], r) !== !0 && u("matchEach()", t[r], e);
                    else e(t) !== !0 && u("matchEach()", t, e);
                    return this
                }
                for (var i in e)
                    if ("function" != typeof e[i]) this.match(e[i]);
                    else {
                        if ("object" == typeof t) {
                            for (var r in t) e[i](t[r], r) !== !0 && u("matchEach()", t[r], e[i]);
                            continue
                        }
                        e[i](t) !== !0 && u("matchEach()", t, e[i])
                    }
                return this
            },
            notMatchEach: function(e) {
                if (n("notMatchEach", !0), "function" == typeof e) {
                    if ("object" == typeof t)
                        for (var r in t) e(t[r], r) && u("notMatchEach()", t[r], e);
                    else e(t) && u("notMatchEach()", t, e);
                    return this
                }
                for (var i in e)
                    if ("function" != typeof e[i]) this.notMatch(e[i]);
                    else {
                        if ("object" == typeof t) {
                            for (var r in t) e[i](t[r], r) && u("notMatchEach()", t[r], e[i]);
                            continue
                        }
                        e[i](t) && u("notMatchEach()", t, e[i])
                    }
                return this
            },
            isValid: function(t) {
                return n("isValid"), this.match(t)
            },
            isNotValid: function(t) {
                return n("isNotValid"), this.notMatch(t)
            },
            isType: function(e) {
                return n("isType", !0), o(t).type(e), this
            },
            isNotType: function(e) {
                return n("isNotType", !0), o(t).not.type(e), this
            },
            isObject: function() {
                return n("isObject", !0), s(t).object(), this
            },
            isArray: function() {
                return n("isArray", !0), s(t).array(), this
            },
            isFunction: function() {
                return n("isFunction", !0), s(t).function(), this
            },
            isString: function() {
                return n("isString", !0), s(t).string(), this
            },
            isNumber: function() {
                return n("isNumber", !0), s(t).number(), this
            },
            isBool: function() {
                return n("isBool"), this.isBoolean()
            },
            isBoolean: function() {
                return n("isBoolean", !0), s(t).boolean(), this
            },
            isNull: function() {
                return n("isNull", !0), s(t).null(), this
            },
            isUndefined: function() {
                return n("isUndefined", !0), s(t).undefined(), this
            },
            isRegExp: function() {
                return n("isRegExp", !0), s(t).regexp(), this
            },
            isNotRegExp: function() {
                return n("isNotRegExp", !0), s(t).not.regexp(), this
            },
            isDate: function() {
                return n("isDate", !0), s(t).date(), this
            },
            isNotDate: function() {
                return n("isNotDate", !0), s(t).not.date(), this
            },
            isArguments: function() {
                return n("isArguments", !0), o(t).arguments, this
            },
            isNotArguments: function() {
                return n("isNotArguments", !0), o(t).not.arguments, this
            },
            isTrue: function() {
                return n("isTrue", !0), s(t).true(), this
            },
            isNotTrue: function() {
                return n("isNotTrue", !0), s(t).not.true(), this
            },
            isTruthy: function() {
                return n("isTruthy", !0), s(t).truthy(), this
            },
            isNotTruthy: function() {
                return n("isNotTruthy", !0), s(t).not.truthy(), this
            },
            isFalse: function() {
                return n("isFalse", !0), s(t).false(), this
            },
            isNotFalse: function() {
                return n("isNotFalse", !0), s(t).not.false(), this
            },
            isFalsy: function() {
                return n("isFalsy", !0), s(t).falsy(), this
            },
            isNotFalsy: function() {
                return n("isNotFalsy", !0), s(t).not.falsy(), this
            },
            isEmpty: function() {
                return n("isEmpty", !0), s(t).empty(), this
            },
            isNotEmpty: function() {
                return n("isNotEmpty", !0), s(t).not.empty(), this
            },
            exists: function() {
                return n("exists", !0), s(t).exist(), this
            },
            isError: function() {
                return n("isError"), this.throws(Error)
            },
            "throws": function(e, r) {
                if (n("throws", !0), arguments.length > 2) throw new Error("throws() assertion, takes maximum 2 arguments (constructor and expected).");
                return 1 == arguments.length ? "function" == typeof e ? i.throws(t, e) : s(t).throw(e) : 2 == arguments.length ? s(t).throw(e, r) : s(t).throw(), this
            },
            hasLength: function(e) {
                if (n("hasLength", !0), "object" == typeof t) {
                    var r = 0;
                    for (var i in t) r++;
                    r !== e && u(t + "must has length of " + e)
                } else s(t).length(e);
                return this
            },
            hasNotLength: function(e) {
                if (n("hasNotLength", !0), "object" == typeof t) {
                    var r = 0;
                    for (var i in t) r++;
                    r === e && u(t + "must has not length of " + e)
                } else s(t).not.length(e);
                return this
            },
            isBetween: function(e, r) {
                return n("isBetween", !0), s(t).between(e, r), this
            },
            isNotBetween: function(e, r) {
                return n("isNotBetween", !0), s(t).not.between(e, r), this
            },
            isBefore: function(e) {
                return n("isBefore", !0), s(t).before(e), this
            },
            isAfter: function(e) {
                return n("isAfter", !0), s(t).after(e), this
            },
            isGreaterThan: function(e) {
                return n("isGreaterThan", !0), s(t).above(e), this
            },
            isLessThan: function(e) {
                return n("isLessThan", !0), s(t).below(e), this
            },
            isApprox: function(e, r) {
                return n("isApprox", !0), o(t).approximately(e, r), this
            },
            isInfinite: function() {
                return n("isInfinite", !0), o(t).Infinity, this
            },
            isNotInfinite: function() {
                return n("isNotInfinite", !0), o(t).not.Infinity, this
            },
            isEnumerable: function(e) {
                return n("isEnumerable", !0), s(t).enumerable(e), this
            },
            isNotEnumerable: function(e) {
                return n("isNotEnumerable", !0), s(t).nonenumerable(e), this
            },
            isFrozen: function() {
                return n("isFrozen", !0), s(t).frozen(), this
            },
            isNotFrozen: function() {
                return n("isNotFrozen", !0), s(t).not.frozen(), this
            },
            isInstanceOf: function(e) {
                return n("isInstanceOf", !0), s(t).instanceof(e), this
            },
            isNotInstanceOf: function(e) {
                return n("isNotInstanceOf", !0), s(t).not.instanceof(e), this
            },
            hasProperty: function(e, r) {
                if (n("hasProperty", !0), !arguments.length) throw new Error('hasProperty() asserter require the argument "property" (the name of the property).');
                if (1 == arguments.length) s(t).property(e);
                else {
                    if (2 != arguments.length) throw new Error("hasProperty() asserter, takes maximum 2 arguments (property and value).");
                    s(t).property(e, r)
                }
                return this
            },
            hasNotProperty: function(e, r) {
                if (n("hasNotProperty", !0), 0 === arguments.length) throw new Error('hasNotProperty() asserter require the argument "property" (the name of the property).');
                if (1 === arguments.length) s(t).not.property(e);
                else {
                    if (2 !== arguments.length) throw new Error("hasNotProperty() asserter, takes maximum 2 arguments (property and value).");
                    s(t).not.property(e, r)
                }
                return this
            },
            hasOwnProperty: function(e, r) {
                if (n("hasOwnProperty ", !0), 0 === arguments.length) throw new Error('hasOwnProperty() asserter require the argument "property" (the name of the property).');
                if (1 === arguments.length) s(t).ownProperty(e);
                else {
                    if (2 !== arguments.length) throw new Error("hasOwnProperty() asserter, takes maximum 2 arguments (property and value).");
                    s(t).ownProperty(e, r)
                }
                return this
            },
            hasNotOwnProperty: function(e, r) {
                if (n("hasNotOwnProperty", !0), 0 === arguments.length) throw new Error('hasNotOwnProperty() asserter require the argument "property" (the name of the property).');
                if (1 === arguments.length) s(t).not.ownProperty(e);
                else {
                    if (2 !== arguments.length) throw new Error("hasNotOwnProperty() asserter, takes maximum 2 arguments (property and value).");
                    s(t).not.ownProperty(e, r)
                }
                return this
            },
            hasProperties: function(e) {
                return n("hasProperties", !0), s(t).keys(e), this
            },
            hasNotProperties: function(e) {
                return n("hasNotProperties", !0), s(t).not.keys(e), this
            },
            hasOwnProperties: function(e) {
                return n("hasOwnProperties", !0), s(t).ownKeys(e), this
            },
            hasKey: function() {
                return n("hasKey"), this.hasProperty.apply(this, arguments)
            },
            notHasKey: function() {
                return n("notHasKey"), this.hasNotProperty.apply(this, arguments)
            },
            hasKeys: function(t) {
                return n("hasKeys"), this.hasProperties(t)
            },
            notHasKeys: function(t) {
                return n("notHasKeys"), this.hasNotProperties(t)
            },
            hasValue: function(e) {
                return n("hasValue", !0), s(t).include(e), this
            },
            notHasValue: function(e) {
                return n("notHasValue", !0), s(t).not.include(e), this
            },
            hasValues: function(e) {
                n("hasValues", !0);
                for (var r in e) s(t).include(e[r]);
                return this
            },
            notHasValues: function(e) {
                n("notHasValues", !0);
                for (var r in e) s(t).not.include(e[r]);
                return this
            },
            contains: function(e) {
                if (n("contains", !0), arguments.length > 1)
                    for (var r in arguments) o(t).containDeep(arguments[r]);
                else o(t).containDeep(e);
                return this
            },
            notContains: function(e) {
                if (n("notContains", !0), arguments.length > 1)
                    for (var r in arguments) o(t).not.containDeep(arguments[r]);
                else o(t).not.containDeep(e);
                return this
            },
            isReverseOf: function(e) {
                return n("isReverseOf"), this.is(e.reverse()), s(t).permutationOf(e), this
            },
            isNotReverseOf: function(e) {
                return n("isNotReverseOf"), this.isNot(e.reverse()), s(t).not.permutationOf(e), this
            },
            startsWith: function(e) {
                return n("startsWith", !0), o(t).startWith(e), this
            },
            notStartsWith: function(e) {
                return n("notStartsWith", !0), o(t).not.startWith(e), this
            },
            endsWith: function(e) {
                return n("endsWith", !0), o(t).endWith(e), this
            },
            notEndsWith: function(e) {
                return n("notEndsWith", !0), o(t).not.endWith(e), this
            },
            hasHttpStatus: function(e) {
                return n("hasHttpStatus", !0), s(t).property("statusCode", e), this
            },
            notHasHttpStatus: function(e) {
                return n("notHasHttpStatus", !0), s(t).not.property("statusCode", e), this
            },
            hasHeader: function(e, r) {
                if (n("hasHeader", !0), 0 === arguments.length || arguments.length > 2) throw new Error('hasHeader() asserter, takes minimum the "field" argument, maximum 2 arguments (field and value).');
                return s(t).property("headers"), 1 === arguments.length ? s(t.headers).property(e.toLowerCase()) : s(t.headers).property(e.toLowerCase(), r), this
            },
            notHasHeader: function(e, r) {
                if (n("notHasHeader", !0), 0 === arguments.length || arguments.length > 2) throw new Error('notHasHeader() asserter, takes minimum the "field" argument, maximum 2 arguments (field and value).');
                return 1 === arguments.length ? s(t.headers).not.property(e.toLowerCase()) : s(t.headers).not.property(e.toLowerCase(), r), this
            },
            hasHeaderJson: function() {
                return n("hasHeaderJson", !0), s(t).property("headers"), s(t.headers).property("content-type"), s(t.headers["content-type"]).match(/application\/json/i), this
            },
            notHasHeaderJson: function() {
                return n("notHasHeaderJson", !0), t && t.headers && "content-type" in t.headers && s(t.headers["content-type"]).not.match(/application\/json/i), this
            },
            hasHeaderHtml: function() {
                return n("hasHeaderHtml", !0), s(t).property("headers"), s(t.headers).property("content-type"), s(t.headers["content-type"]).match(/text\/html/i), this
            },
            notHasHeaderHtml: function() {
                return n("notHasHeaderHtml", !0), t && t.headers && "content-type" in t.headers && s(t.headers["content-type"]).not.match(/text\/html/i), this
            }
        }
    }
}, function(t) {
    "use strict";
    t.exports = ["is", "isNot", "isIdenticalTo", "isNotIdenticalTo", "isEqualTo", "isNotEqualTo", "isStrictEqualTo", "isNotStrictEqualTo", "match", "notMatch", "isValid", "isNotValid"]
}, function(t, e, r) {
    var n = r(22),
        i = r(44),
        o = r(4);
    t.exports = function(t, e) {
        if (t = t || "test.fail()", e = e || {}, "expected" in e && (e.expected = i(e.expected), "undefined" == typeof e.actual && (t += " | expected: " + e.expected)), e.inspect) {
            var r = [];
            for (var s in e.inspect) r.push(i(e.inspect[s]));
            o.dump.apply(o, r), delete e.inspect
        }
        throw new n.AssertionError(t, e)
    }
}, function(t, e, r) {
    "use strict";

    function n() {
        this.$di = new n.prototype.$di, this.$di.addAll({
            $api: this,
            $di: this.$di,
            $container: this.$di._container,
            $invoke: this.$wrap(this.$invoke),
            $inject: this.$wrap(this.$inject),
            $provider: this.$wrap(this.$provider),
            $factory: this.$wrap(this.$factory),
            $singleton: this.$wrap(this.$singleton),
            $apply: this.$wrap(this.$apply),
            $wrap: this.$wrap(this.$wrap)
        })
    }
    var i = r(45),
        o = {};
    n.prototype.Noder = n, n.prototype.$di = i, n.prototype.Collection = i, n.prototype.createCollection = function(t) {
        return t ? new this.Collection(t) : new this.Collection
    }, n.prototype.createNoder = function() {
        return new this.Noder
    }, n.prototype.use = function(t) {
        var e = function(t, e) {
            if ("function" != typeof t.__noder) throw new TypeError("Argument #1 passed to Noder.use() is not a valid plugin for Noder.io.A plugin must implement a method named `__noder()` that is used for initialization. Example: `module.exports.__noder = function MyPlugin(noder) {\n  // here, the bootstrap\n};`\n\nAPI doc: http://noder.io/api/noder.html#use");
            t = t.__noder, e.length > 1 ? t.apply(null, Array.prototype.concat.apply([this], Array.prototype.slice.call(e, 1))) : t(this)
        }.bind(this);
        return "string" == typeof t ? e(r(46)(t), arguments) : e(t, arguments), this
    }, n.prototype.$invoke = function(t, e) {
        return this.$di.invoke(t, e)
    }, n.prototype.$inject = function(t, e) {
        return this.$di.inject(t, e)
    }, n.prototype.$provider = function(t, e, r) {
        return this.$di.provider(t, e, r), this
    }, n.prototype.$factory = function(t, e, r) {
        return this.$di.factory(t, e, r), this
    }, n.prototype.$singleton = function(t, e) {
        return this.$di.singleton(t, e), this
    }, n.prototype.$apply = function(t) {
        return this.$di.apply(t)
    }, n.prototype.$wrap = function(t) {
        return this.$di.wrap(t)
    }, n.prototype.$require = function(t, e) {
        return Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !1,
            get: function() {
                return this.$require.isLoaded(t) ? o[t] : ("undefined" == typeof e && (e = t), o[t] = "function" == typeof e ? e.call(this._container) : r(46)(e), o[t])
            },
            set: function() {
                throw new Error('"' + t + '" property is not writable because is a placeholder of a property of a lazy loading module.')
            }
        }), this
    }, n.prototype.$require.isLoaded = function(t) {
        return void 0 !== o[t]
    }, t.exports = new n
}, function(t, e, r) {
    function n(t) {
        var e = t.displayName || t.name || g(t);
        return "be an instance of " + e
    }

    function i(t, e, r, n) {
        if (t === e) return !0;
        var u = o(t) ? "plain" : y(t),
            c = o(e) ? "plain" : y(e);
        if (u != c) return !1;
        if ("object" == u || "plain" == u || "array" == u) {
            var l = r && r.indexOf(t),
                f = n && n.indexOf(e);
            if (l != f) return !1;
            if (null != l && ~l) return !0;
            r = r ? r.concat([t]) : [t], n = n ? n.concat([e]) : [e]
        }
        switch (u) {
            case "number":
                if (isNaN(t) && isNaN(e)) return !0;
            case "boolean":
            case "string":
            case "date":
                return t.valueOf() == e.valueOf();
            case "regexp":
                return t.toString() === e.toString();
            case "array":
                if (t.length != e.length) return !1;
                if (0 == t.length) return !0;
                for (var h = 0, d = t.length; d > h; ++h)
                    if (!i(t[h], e[h], r, n)) return !1;
                return !0;
            case "object":
                if (s(t) !== s(e)) return !1;
                if (a(t) && a(e)) return t.valueOf() === e.valueOf();
            case "plain":
                var g = p(t),
                    v = p(e);
                if (g.length != v.length) return !1;
                if (0 == g.length) return !0;
                for (var m in t)
                    if (!i(t[m], e[m], r, n)) return !1;
                return !0
        }
        return !1
    }

    function o(t) {
        if (!t) return !1;
        if ("object" != typeof t) return !1;
        var e = Object.getPrototypeOf(t);
        return null === e ? !0 : "constructor" in e ? e.constructor === Object : !0
    }

    function s(t) {
        var e = t && Object.getPrototypeOf(t);
        return e && e.constructor
    }

    function a(t) {
        var e = "function" == typeof t.valueOf && t.valueOf;
        return e && e !== Object.prototype.valueOf ? e : null
    }

    function u(t, e) {
        if (!Array.isArray(t) || !Array.isArray(e)) return !1;
        if (t.length !== e.length) return !1;
        t = t.slice().sort(), e = e.slice().sort();
        for (var r = 0; r < t.length; r++)
            if (t[r] !== e[r]) return !1;
        return !0
    }

    function c(t, e) {
        if (null == e) return t === e;
        var r = "string" == y(t) ? t : t.message,
            n = y(e);
        return "string" == n ? r == e : "regexp" == n ? e.exec(r) : "function" == n ? t instanceof e : r === e
    }

    function l(t, e) {
        if (Object.prototype.propertyIsEnumerable.call(t, e)) return !0;
        for (var r in t)
            if (r == e) return !0;
        return !1
    }

    function f(t, e, r, n) {
        if (this.negative ? t : !t) {
            var i = this.negative ? "not " : "",
                o = g(this.actual) + " must " + i;
            throw o += "function" == typeof e ? e(r) : e, "function" != typeof e && arguments.length >= 3 && (o += " " + g(r)), n = n ? Object.create(n) : {}, n.actual = this.actual, n.caller = arguments.callee.caller, arguments.length >= 3 && (n.expected = r), new d(o, n)
        }
    }

    function h(t) {
        return t.apply = t.apply, t.bind = t.bind, t.call = t.call, t.name = t.name, t.toString = t.toString, t.__proto__ = this, t
    }

    function p(t) {
        var e = [];
        for (var r in t) e.push(r);
        return e
    }
    var d = r(29),
        y = r(85),
        g = r(44);
    e = t.exports = {get a() {
            return h.call(this, this.instanceof)
        },
        get an() {
            return h.call(this, this.instanceof)
        },
        get at() {
            return this
        },
        get be() {
            return h.call(this, this.equal)
        },
        get have() {
            return this
        },
        get is() {
            return h.call(this, this.equal)
        },
        get not() {
            var t = new this.constructor(this.actual);
            return t.negative = !this.negative, t
        },
        get to() {
            return this
        }
    }, e.true = function() {
        var t = y(this.actual);
        f.call(this, "boolean" == t && 1 == this.actual, "be", !0)
    }, e.false = function() {
        var t = y(this.actual);
        f.call(this, "boolean" == t && 0 == this.actual, "be", !1)
    }, e.null = function() {
        f.call(this, null === this.actual, "be", null)
    }, e.undefined = function() {
        f.call(this, void 0 === this.actual, "be", void 0)
    }, e.boolean = function() {
        f.call(this, "boolean" == y(this.actual), "be a boolean")
    }, e.number = function() {
        f.call(this, "number" == y(this.actual), "be a number")
    }, e.string = function() {
        f.call(this, "string" == y(this.actual), "be a string")
    }, e.date = function() {
        f.call(this, "date" == y(this.actual), "be a date")
    }, e.regexp = function() {
        f.call(this, "regexp" == y(this.actual), "be a regular expression")
    }, e.array = function() {
        f.call(this, Array.isArray(this.actual), "be an array")
    }, e.function = function() {
        f.call(this, "function" == typeof this.actual, "be a function")
    }, e.object = function() {
        var t = this.actual && "object" == typeof this.actual;
        f.call(this, t, "be an object")
    }, e.truthy = function() {
        f.call(this, this.actual, "be truthy")
    }, e.falsy = function() {
        f.call(this, !this.actual, "be falsy")
    }, e.exist = function() {
        f.call(this, null != this.actual, "exist")
    }, e.instanceof = function(t) {
        var e = this.actual instanceof t;
        f.call(this, e, n, t)
    }, e.instanceOf = e.instanceof, e.empty = function() {
        var t;
        t = Array.isArray(this.actual) || "string" == y(this.actual) ? this.actual.length : "object" == typeof this.actual || "function" == typeof this.actual ? p(this.actual).length : 1, f.call(this, 0 === t, "be empty")
    }, e.equal = function(t) {
        f.call(this, this.actual === t, "equal", t)
    }, e.eql = function(t) {
        var e = i(this.actual, t);
        f.call(this, e, "be equivalent to", t, {
            diffable: !0
        })
    }, e.include = function(t) {
        var e;
        if (Array.isArray(this.actual) || "string" == y(this.actual)) e = ~this.actual.indexOf(t);
        else
            for (var r in this.actual)
                if (this.actual[r] === t) {
                    e = !0;
                    break
                }
        f.call(this, e, "include", t)
    }, e.contain = e.include, e.permutationOf = function(t) {
        var e = u(this.actual, t);
        f.call(this, e, "be a permutation of", t, {
            diffable: !0
        })
    }, e.match = function(t) {
        var e = t instanceof RegExp ? t : new RegExp(t);
        f.call(this, e.exec(this.actual), "match", e)
    }, e.throw = function(t, e) {
        1 == arguments.length && (e = t, t = null);
        var r, n;
        try {
            this.actual.call(null)
        } catch (i) {
            r = !0, n = i
        }
        r && t && (r = n instanceof t), r && arguments.length && (r = c(n, e));
        var o = [r, "throw"];
        arguments.length && o.push(e), f.apply(this, o)
    }, e.length = function(t) {
        f.call(this, this.actual.length == t, "have length of", t)
    }, e.frozen = function() {
        f.call(this, Object.isFrozen(this.actual), "be frozen")
    }, e.property = function(t, e) {
        var r = null != this.actual;
        r = r && t in Object(this.actual), r && arguments.length > 1 && (r = this.actual[t] === e);
        var n = 'have property "' + t + '"';
        arguments.length > 1 && (n += " equal to " + g(e)), f.call(this, r, n)
    }, e.ownProperty = function(t, e) {
        var r = null != this.actual;
        r = r && Object.prototype.hasOwnProperty.call(this.actual, t), r && arguments.length > 1 && (r = this.actual[t] === e);
        var n = 'have own property "' + t + '"';
        arguments.length > 1 && (n += " equal to " + g(e)), f.call(this, r, n)
    }, e.own = e.ownProperty, e.keys = function(t) {
        var e = null != this.actual,
            r = e && p(Object(this.actual));
        e = e && i(r.sort(), t.sort()), f.call(this, e, "have keys", t)
    }, e.ownKeys = function(t) {
        var e = null != this.actual,
            r = e && Object.keys(Object(this.actual));
        e = e && i(r.sort(), t.sort()), f.call(this, e, "have own keys", t)
    }, e.enumerable = function(t) {
        var e = null != this.actual;
        e = e && l(Object(this.actual), t);
        var r = 'have enumerable property "' + t + '"';
        f.call(this, e, r)
    }, e.enumerableProperty = e.enumerable, e.nonenumerable = function(t) {
        var e = null != this.actual;
        e = e && t in Object(this.actual), e = e && !l(Object(this.actual), t);
        var r = 'have nonenumerable property "' + t + '"';
        f.call(this, e, r)
    }, e.nonenumerableProperty = e.nonenumerable, e.below = function(t) {
        f.call(this, this.actual < t, "be below", t)
    }, e.lt = e.below, e.before = e.below, e.most = function(t) {
        f.call(this, this.actual <= t, "be at most", t)
    }, e.lte = e.most, e.above = function(t) {
        f.call(this, this.actual > t, "be above", t)
    }, e.gt = e.above, e.after = e.above, e.least = function(t) {
        f.call(this, this.actual >= t, "be at least", t)
    }, e.gte = e.least, e.between = function(t, e) {
        f.call(this, t <= this.actual && this.actual <= e, function() {
            return "be between " + g(t) + " and " + g(e)
        })
    }
}, function(t) {
    function e(t, e) {
        this.message = t, e && "actual" in e && (this.actual = e.actual), e && "expected" in e && (this.expected = e.expected), e && "diffable" in e && (this.diffable = e.diffable);
        var r = e && e.caller || arguments.callee.caller;
        Error.captureStackTrace && Error.captureStackTrace(this, r)
    }
    t.exports = e, e.prototype = Object.create(Error.prototype, {
        constructor: {
            value: e,
            configurable: !0,
            writable: !0
        }
    }), e.prototype.name = "AssertionError", e.prototype.__defineGetter__("showDiff", function() {
        return this.diffable
    })
}, function(t, e, r) {
    "use strict";
    var n = r(48)();
    t.exports = n
}, function(t, e, r) {
    (function(t) {
        function n(t) {
            return l(t) && (t.__ArrayLike || Array.isArray(t))
        }

        function i(t) {
            return "number" == typeof t || t instanceof Number
        }

        function o(t) {
            return "string" == typeof t || t instanceof String
        }

        function s(t) {
            return "boolean" == typeof t || t instanceof Boolean
        }

        function a(e) {
            return "undefined" != typeof t && e instanceof t
        }

        function u(t) {
            return l(t) && "[object Date]" === c(t)
        }

        function c(t) {
            return Object.prototype.toString.call(t)
        }

        function l(t) {
            return "object" == typeof t && null !== t
        }

        function f(t) {
            return l(t) && "[object RegExp]" === c(t)
        }

        function h(t) {
            return null == t
        }

        function p(t) {
            return null === t
        }

        function d(t) {
            return "[object Arguments]" === c(t)
        }

        function y(t) {
            return l(t) && "[object Error]" === c(t) || t instanceof Error
        }

        function g(t) {
                return void 0 === t
            }
            /*!
             * Should
             * Copyright(c) 2010-2014 TJ Holowaychuk <tj@vision-media.ca>
             * MIT Licensed
             */
        e.isWrapperType = function(t) {
            return i(t) || o(t) || s(t)
        }, e.merge = function(t, e) {
            if (t && e)
                for (var r in e) t[r] = e[r];
            return t
        }, e.isArray = n, e.isNumber = i, e.isBoolean = s, e.isString = o, e.isBuffer = a, e.isDate = u, e.isObject = l, e.isRegExp = f, e.isNullOrUndefined = h, e.isNull = p, e.isArguments = d, e.isFunction = function(t) {
            return "function" == typeof t || t instanceof Function
        }, e.isError = y, e.isUndefined = g, e.inspect = r(49).inspect, e.AssertionError = r(8).AssertionError;
        var v = Object.prototype.hasOwnProperty;
        e.forOwn = function(t, e, r) {
            for (var n in t) v.call(t, n) && e.call(r, t[n], n)
        };
        var m = /^\s*function\s*(\S*)\s*\(/;
        e.functionName = function(t) {
            if (t.name) return t.name;
            var e = t.toString().match(m)[1];
            return e
        }, e.formatProp = function(t) {
            return t = JSON.stringify("" + t), t = t.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? t.substr(1, t.length - 2) : t.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'").replace(/\\\\/g, "\\")
        }
    }).call(e, r(54).Buffer)
}, function(t, e, r) {
    /*!
     * Should
     * Copyright(c) 2010-2014 TJ Holowaychuk <tj@vision-media.ca>
     * MIT Licensed
     */
    var n = r(31),
        i = r(8),
        o = i.AssertionError;
    t.exports = function(t) {
        var e = t.format;
        n.merge(t, i), t.exist = t.exists = function(r, n) {
            if (null == r) throw new o({
                message: n || "expected " + e(r) + " to exist",
                stackStartFunction: t.exist
            })
        }, t.not = {}, t.not.exist = t.not.exists = function(r, n) {
            if (null != r) throw new o({
                message: n || "expected " + e(r) + " to not exist",
                stackStartFunction: t.not.exist
            })
        }
    }
}, function(t) {
    /*!
     * Should
     * Copyright(c) 2010-2014 TJ Holowaychuk <tj@vision-media.ca>
     * MIT Licensed
     */
    t.exports = function(t, e) {
        function r(t) {
            Object.defineProperty(e.prototype, t, {
                get: function() {
                    return this
                },
                enumerable: !0
            })
        }["an", "of", "a", "and", "be", "have", "with", "is", "which", "the"].forEach(r)
    }
}, function(t) {
    /*!
     * Should
     * Copyright(c) 2010-2014 TJ Holowaychuk <tj@vision-media.ca>
     * MIT Licensed
     */
    t.exports = function(t, e) {
        e.add("true", function() {
            this.is.exactly(!0)
        }, !0), e.alias("true", "True"), e.add("false", function() {
            this.is.exactly(!1)
        }, !0), e.alias("false", "False"), e.add("ok", function() {
            this.params = {
                operator: "to be truthy"
            }, this.assert(this.obj)
        }, !0)
    }
}, function(t) {
    /*!
     * Should
     * Copyright(c) 2010-2014 TJ Holowaychuk <tj@vision-media.ca>
     * MIT Licensed
     */
    t.exports = function(t, e) {
        e.add("NaN", function() {
            this.params = {
                operator: "to be NaN"
            }, this.assert(this.obj !== this.obj)
        }, !0), e.add("Infinity", function() {
            this.params = {
                operator: "to be Infinity"
            }, this.is.a.Number.and.not.a.NaN.and.assert(!isFinite(this.obj))
        }, !0), e.add("within", function(t, e, r) {
            this.params = {
                operator: "to be within " + t + ".." + e,
                message: r
            }, this.assert(this.obj >= t && this.obj <= e)
        }), e.add("approximately", function(t, e, r) {
            this.params = {
                operator: "to be approximately " + t + " ±" + e,
                message: r
            }, this.assert(Math.abs(this.obj - t) <= e)
        }), e.add("above", function(t, e) {
            this.params = {
                operator: "to be above " + t,
                message: e
            }, this.assert(this.obj > t)
        }), e.add("below", function(t, e) {
            this.params = {
                operator: "to be below " + t,
                message: e
            }, this.assert(this.obj < t)
        }), e.alias("above", "greaterThan"), e.alias("below", "lessThan")
    }
}, function(t, e, r) {
    /*!
     * Should
     * Copyright(c) 2010-2014 TJ Holowaychuk <tj@vision-media.ca>
     * MIT Licensed
     */
    var n = r(52);
    t.exports = function(t, e) {
        e.add("eql", function(t, e) {
            this.params = {
                operator: "to equal",
                expected: t,
                showDiff: !0,
                message: e
            }, this.assert(n(t, this.obj))
        }), e.add("equal", function(t, e) {
            this.params = {
                operator: "to be",
                expected: t,
                showDiff: !0,
                message: e
            }, this.assert(t === this.obj)
        }), e.alias("equal", "exactly")
    }
}, function(t, e, r) {
    /*!
     * Should
     * Copyright(c) 2010-2014 TJ Holowaychuk <tj@vision-media.ca>
     * MIT Licensed
     */
    var n = r(31);
    t.exports = function(t, e) {
        e.add("Number", function() {
            this.params = {
                operator: "to be a number"
            }, this.assert(n.isNumber(this.obj))
        }, !0), e.add("arguments", function() {
            this.params = {
                operator: "to be arguments"
            }, this.assert(n.isArguments(this.obj))
        }, !0), e.add("type", function(t, e) {
            this.params = {
                operator: "to have type " + t,
                message: e
            }, (typeof this.obj).should.be.exactly(t, e)
        }), e.add("instanceof", function(t, e) {
            this.params = {
                operator: "to be an instance of " + n.functionName(t),
                message: e
            }, this.assert(Object(this.obj) instanceof t)
        }), e.add("Function", function() {
            this.params = {
                operator: "to be a function"
            }, this.assert(n.isFunction(this.obj))
        }, !0), e.add("Object", function() {
            this.params = {
                operator: "to be an object"
            }, this.assert(n.isObject(this.obj))
        }, !0), e.add("String", function() {
            this.params = {
                operator: "to be a string"
            }, this.assert(n.isString(this.obj))
        }, !0), e.add("Array", function() {
            this.params = {
                operator: "to be an array"
            }, this.assert(n.isArray(this.obj))
        }, !0), e.add("Boolean", function() {
            this.params = {
                operator: "to be a boolean"
            }, this.assert(n.isBoolean(this.obj))
        }, !0), e.add("Error", function() {
            this.params = {
                operator: "to be an error"
            }, this.assert(n.isError(this.obj))
        }, !0), e.add("null", function() {
            this.params = {
                operator: "to be null"
            }, this.assert(null === this.obj)
        }, !0), e.alias("null", "Null"), e.alias("instanceof", "instanceOf")
    }
}, function(t) {
    /*!
     * Should
     * Copyright(c) 2010-2014 TJ Holowaychuk <tj@vision-media.ca>
     * MIT Licensed
     */
    t.exports = function(t, e) {
        e.add("startWith", function(e, r) {
            this.params = {
                operator: "to start with " + t.format(e),
                message: r
            }, this.assert(0 === this.obj.indexOf(e))
        }), e.add("endWith", function(e, r) {
            this.params = {
                operator: "to end with " + t.format(e),
                message: r
            }, this.assert(this.obj.indexOf(e, this.obj.length - e.length) >= 0)
        })
    }
}, function(t, e, r) {
    /*!
     * Should
     * Copyright(c) 2010-2014 TJ Holowaychuk <tj@vision-media.ca>
     * MIT Licensed
     */
    var n = r(31),
        i = r(52),
        o = Array.prototype.slice;
    t.exports = function(t, e) {
        var r = t.format;
        e.add("enumerable", function(t, e) {
            t = String(t), this.params = {
                operator: "to have enumerable property " + n.formatProp(t)
            }, this.assert(this.obj.propertyIsEnumerable(t)), arguments.length > 1 && (this.params.operator += " equal to " + r(e), this.assert(i(e, this.obj[t])))
        }), e.add("property", function(t, e) {
            if (t = String(t), arguments.length > 1) {
                var r = {};
                r[t] = e, this.have.properties(r)
            } else this.have.properties(t);
            this.obj = this.obj[t]
        }), e.add("properties", function(t) {
            var e = {};
            arguments.length > 1 ? t = o.call(arguments) : n.isArray(t) || (n.isString(t) ? t = [t] : (e = t, t = Object.keys(t)));
            var s = Object(this.obj),
                a = [];
            t.forEach(function(t) {
                t in s || a.push(n.formatProp(t))
            });
            var u = a;
            0 === u.length ? u = t.map(n.formatProp) : this.anyOne && (u = t.filter(function(t) {
                return a.indexOf(n.formatProp(t)) < 0
            }).map(n.formatProp));
            var c = (1 === u.length ? "to have property " : "to have " + (this.anyOne ? "any of " : "") + "properties ") + u.join(", ");
            this.params = {
                operator: c
            }, this.assert(0 === a.length || this.anyOne && a.length != t.length);
            var l = Object.keys(e);
            if (l.length) {
                var f = [];
                u = [], l.forEach(function(t) {
                    var o = e[t];
                    i(s[t], o) ? u.push(n.formatProp(t) + " of " + r(o)) : f.push(n.formatProp(t) + " of " + r(o) + " (got " + r(s[t]) + ")")
                }), (0 !== f.length && !this.anyOne || this.anyOne && 0 === u.length) && (u = f), c = (1 === u.length ? "to have property " : "to have " + (this.anyOne ? "any of " : "") + "properties ") + u.join(", "), this.params = {
                    operator: c
                }, this.assert(0 === f.length || this.anyOne && f.length != l.length)
            }
        }), e.add("length", function(t, e) {
            this.have.property("length", t, e)
        }), e.alias("length", "lengthOf");
        var s = Object.prototype.hasOwnProperty;
        e.add("ownProperty", function(t, e) {
            t = String(t), this.params = {
                operator: "to have own property " + n.formatProp(t),
                message: e
            }, this.assert(s.call(this.obj, t)), this.obj = this.obj[t]
        }), e.alias("ownProperty", "hasOwnProperty"), e.add("empty", function() {
            if (this.params = {
                    operator: "to be empty"
                }, n.isString(this.obj) || n.isArray(this.obj) || n.isArguments(this.obj)) this.have.property("length", 0);
            else {
                var t = Object(this.obj);
                for (var e in t) this.have.not.ownProperty(e)
            }
        }, !0), e.add("keys", function(t) {
            arguments.length > 1 ? t = o.call(arguments) : 1 === arguments.length && n.isString(t) ? t = [t] : 0 === arguments.length && (t = []), t = t.map(String);
            var e = Object(this.obj),
                r = [];
            t.forEach(function(t) {
                s.call(this.obj, t) || r.push(n.formatProp(t))
            }, this);
            var i = [];
            Object.keys(e).forEach(function(e) {
                t.indexOf(e) < 0 && i.push(n.formatProp(e))
            });
            var a = 0 === t.length ? "to be empty" : "to have " + (1 === t.length ? "key " : "keys ");
            this.params = {
                operator: a + t.map(n.formatProp).join(", ")
            }, r.length > 0 && (this.params.operator += "\n	missing keys: " + r.join(", ")), i.length > 0 && (this.params.operator += "\n	extra keys: " + i.join(", ")), this.assert(0 === r.length && 0 === i.length)
        }), e.alias("keys", "key"), e.add("propertyByPath", function(e) {
            arguments.length > 1 ? e = o.call(arguments) : 1 === arguments.length && n.isString(e) ? e = [e] : 0 === arguments.length && (e = []);
            var r = e.map(n.formatProp);
            e = e.map(String);
            for (var i, s = t(Object(this.obj)), a = []; i = e.shift();) this.params = {
                operator: "to have property by path " + r.join(", ") + " - failed on " + n.formatProp(i)
            }, s = s.have.property(i), a.push(i);
            this.params = {
                operator: "to have property by path " + r.join(", ")
            }, this.obj = s.obj
        })
    }
}, function(t, e, r) {
    /*!
     * Should
     * Copyright(c) 2010-2014 TJ Holowaychuk <tj@vision-media.ca>
     * MIT Licensed
     */
    var n = r(31);
    t.exports = function(t, e) {
        var r = t.format;
        e.add("throw", function(e, i) {
            var o = this.obj,
                s = {},
                a = "",
                u = !1,
                c = !0;
            try {
                o()
            } catch (l) {
                u = !0, s = l
            }
            if (u)
                if (e) {
                    if ("string" == typeof e) c = e == s.message;
                    else if (e instanceof RegExp) c = e.test(s.message);
                    else if ("function" == typeof e) c = s instanceof e;
                    else if (n.isObject(e)) try {
                        s.should.match(e)
                    } catch (l) {
                        if (!(l instanceof t.AssertionError)) throw l;
                        a = ": " + l.message, c = !1
                    }
                    if (c) {
                        if ("function" == typeof e && i) try {
                            s.should.match(i)
                        } catch (l) {
                            if (!(l instanceof t.AssertionError)) throw l;
                            a = ": " + l.message, c = !1
                        }
                    } else "string" == typeof e || e instanceof RegExp ? a = " with a message matching " + r(e) + ", but got '" + s.message + "'" : "function" == typeof e && (a = " of type " + n.functionName(e) + ", but got " + n.functionName(s.constructor))
                } else a = " (got " + r(s) + ")";
            this.params = {
                operator: "to throw exception" + a
            }, this.assert(u), this.assert(c)
        }), e.alias("throw", "throwError")
    }
}, function(t, e, r) {
    /*!
     * Should
     * Copyright(c) 2010-2014 TJ Holowaychuk <tj@vision-media.ca>
     * MIT Licensed
     */
    var n = r(31),
        i = r(52);
    t.exports = function(t, e) {
        var r = t.format;
        e.add("match", function(o, s) {
            if (this.params = {
                    operator: "to match " + r(o),
                    message: s
                }, !i(this.obj, o))
                if (n.isRegExp(o)) {
                    if (n.isString(this.obj)) this.assert(o.exec(this.obj));
                    else if (n.isArray(this.obj)) this.obj.forEach(function(t) {
                        this.assert(o.exec(t))
                    }, this);
                    else if (n.isObject(this.obj)) {
                        var a = [],
                            u = [];
                        n.forOwn(this.obj, function(t, e) {
                            o.exec(t) ? u.push(n.formatProp(e)) : a.push(n.formatProp(e) + " (" + r(t) + ")")
                        }, this), a.length && (this.params.operator += "\n	not matched properties: " + a.join(", ")), u.length && (this.params.operator += "\n	matched properties: " + u.join(", ")), this.assert(0 == a.length)
                    }
                } else if (n.isFunction(o)) {
                var c;
                try {
                    c = o(this.obj)
                } catch (l) {
                    throw l instanceof t.AssertionError && (this.params.operator += "\n	" + l.message), l
                }
                c instanceof e && (this.params.operator += "\n	" + c.getMessage()), n.isBoolean(c) && this.assert(c)
            } else n.isObject(o) ? (a = [], u = [], n.forOwn(o, function(e, i) {
                try {
                    t(this.obj[i]).match(e), u.push(n.formatProp(i))
                } catch (o) {
                    if (!(o instanceof t.AssertionError)) throw o;
                    a.push(n.formatProp(i) + " (" + r(this.obj[i]) + ")")
                }
            }, this), a.length && (this.params.operator += "\n	not matched properties: " + a.join(", ")), u.length && (this.params.operator += "\n	matched properties: " + u.join(", ")), this.assert(0 == a.length)) : this.assert(!1)
        }), e.add("matchEach", function(t, e) {
            this.params = {
                operator: "to match each " + r(t),
                message: e
            };
            var o = t;
            n.isRegExp(t) ? o = function(e) {
                return !!t.exec(e)
            } : n.isFunction(t) || (o = function(e) {
                return i(e, t)
            }), n.forOwn(this.obj, function(t, e) {
                var r = o(t, e);
                n.isBoolean(r) && this.assert(r)
            }, this)
        })
    }
}, function(t, e, r) {
    /*!
     * Should
     * Copyright(c) 2010-2014 TJ Holowaychuk <tj@vision-media.ca>
     * MIT Licensed
     */
    var n = r(31),
        i = r(52);
    t.exports = function(t, e) {
        var r = t.format;
        e.add("containEql", function(t) {
            this.params = {
                operator: "to contain " + r(t)
            };
            var e = this.obj;
            n.isArray(e) ? this.assert(e.some(function(e) {
                return i(e, t)
            })) : n.isString(e) ? this.assert(e.indexOf(String(t)) >= 0) : n.isObject(e) ? n.forOwn(t, function(t, r) {
                e.should.have.property(r, t)
            }) : this.assert(!1)
        }), e.add("containDeepOrdered", function(e) {
            this.params = {
                operator: "to contain " + r(e)
            };
            var i = this.obj;
            if (n.isArray(i))
                if (n.isArray(e)) {
                    var o = 0;
                    i.forEach(function(r) {
                        try {
                            t(r).not.be.Null.and.containDeep(e[o]), o++
                        } catch (n) {
                            if (n instanceof t.AssertionError) return;
                            throw n
                        }
                    }, this), this.assert(o == e.length)
                } else this.assert(!1);
            else n.isString(i) ? this.assert(i.indexOf(String(e)) >= 0) : n.isObject(i) ? n.isObject(e) ? n.forOwn(e, function(e, r) {
                t(i[r]).not.be.Null.and.containDeep(e)
            }) : this.assert(!1) : this.eql(e)
        }), e.add("containDeep", function(e) {
            this.params = {
                operator: "to contain " + r(e)
            };
            var i = this.obj;
            if (n.isArray(i))
                if (n.isArray(e)) {
                    var o = {};
                    e.forEach(function(e) {
                        this.assert(i.some(function(r, n) {
                            if (n in o) return !1;
                            try {
                                return t(r).not.be.Null.and.containDeep(e), o[n] = !0, !0
                            } catch (i) {
                                if (i instanceof t.AssertionError) return !1;
                                throw i
                            }
                        }))
                    }, this)
                } else this.assert(!1);
            else n.isString(i) ? this.assert(i.indexOf(String(e)) >= 0) : n.isObject(i) ? n.isObject(e) ? n.forOwn(e, function(e, r) {
                t(i[r]).not.be.Null.and.containDeep(e)
            }) : this.assert(!1) : this.eql(e)
        })
    }
}, function(t, e, r) {
    (function(t, n) {
        function i(t, r) {
            var n = {
                seen: [],
                stylize: s
            };
            return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), y(r) ? n.showHidden = r : r && e._extend(n, r), w(n.showHidden) && (n.showHidden = !1), w(n.depth) && (n.depth = 2), w(n.colors) && (n.colors = !1), w(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = o), u(n, t, n.depth)
        }

        function o(t, e) {
            var r = i.styles[e];
            return r ? "[" + i.colors[r][0] + "m" + t + "[" + i.colors[r][1] + "m" : t
        }

        function s(t) {
            return t
        }

        function a(t) {
            var e = {};
            return t.forEach(function(t) {
                e[t] = !0
            }), e
        }

        function u(t, r, n) {
            if (t.customInspect && r && A(r.inspect) && r.inspect !== e.inspect && (!r.constructor || r.constructor.prototype !== r)) {
                var i = r.inspect(n, t);
                return _(i) || (i = u(t, i, n)), i
            }
            var o = c(t, r);
            if (o) return o;
            var s = Object.keys(r),
                y = a(s);
            if (t.showHidden && (s = Object.getOwnPropertyNames(r)), O(r) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return l(r);
            if (0 === s.length) {
                if (A(r)) {
                    var g = r.name ? ": " + r.name : "";
                    return t.stylize("[Function" + g + "]", "special")
                }
                if (j(r)) return t.stylize(RegExp.prototype.toString.call(r), "regexp");
                if (x(r)) return t.stylize(Date.prototype.toString.call(r), "date");
                if (O(r)) return l(r)
            }
            var v = "",
                m = !1,
                b = ["{", "}"];
            if (d(r) && (m = !0, b = ["[", "]"]), A(r)) {
                var w = r.name ? ": " + r.name : "";
                v = " [Function" + w + "]"
            }
            if (j(r) && (v = " " + RegExp.prototype.toString.call(r)), x(r) && (v = " " + Date.prototype.toUTCString.call(r)), O(r) && (v = " " + l(r)), 0 === s.length && (!m || 0 == r.length)) return b[0] + v + b[1];
            if (0 > n) return j(r) ? t.stylize(RegExp.prototype.toString.call(r), "regexp") : t.stylize("[Object]", "special");
            t.seen.push(r);
            var E;
            return E = m ? f(t, r, n, y, s) : s.map(function(e) {
                return h(t, r, n, y, e, m)
            }), t.seen.pop(), p(E, v, b)
        }

        function c(t, e) {
            if (w(e)) return t.stylize("undefined", "undefined");
            if (_(e)) {
                var r = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return t.stylize(r, "string")
            }
            return m(e) ? t.stylize("" + e, "number") : y(e) ? t.stylize("" + e, "boolean") : g(e) ? t.stylize("null", "null") : void 0
        }

        function l(t) {
            return "[" + Error.prototype.toString.call(t) + "]"
        }

        function f(t, e, r, n, i) {
            for (var o = [], s = 0, a = e.length; a > s; ++s) o.push(S(e, String(s)) ? h(t, e, r, n, String(s), !0) : "");
            return i.forEach(function(i) {
                i.match(/^\d+$/) || o.push(h(t, e, r, n, i, !0))
            }), o
        }

        function h(t, e, r, n, i, o) {
            var s, a, c;
            if (c = Object.getOwnPropertyDescriptor(e, i) || {
                    value: e[i]
                }, c.get ? a = c.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : c.set && (a = t.stylize("[Setter]", "special")), S(n, i) || (s = "[" + i + "]"), a || (t.seen.indexOf(c.value) < 0 ? (a = g(r) ? u(t, c.value, null) : u(t, c.value, r - 1), a.indexOf("\n") > -1 && (a = o ? a.split("\n").map(function(t) {
                    return "  " + t
                }).join("\n").substr(2) : "\n" + a.split("\n").map(function(t) {
                    return "   " + t
                }).join("\n"))) : a = t.stylize("[Circular]", "special")), w(s)) {
                if (o && i.match(/^\d+$/)) return a;
                s = JSON.stringify("" + i), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = t.stylize(s, "string"))
            }
            return s + ": " + a
        }

        function p(t, e, r) {
            var n = 0,
                i = t.reduce(function(t, e) {
                    return n++, e.indexOf("\n") >= 0 && n++, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0);
            return i > 60 ? r[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + r[1] : r[0] + e + " " + t.join(", ") + " " + r[1]
        }

        function d(t) {
            return Array.isArray(t)
        }

        function y(t) {
            return "boolean" == typeof t
        }

        function g(t) {
            return null === t
        }

        function v(t) {
            return null == t
        }

        function m(t) {
            return "number" == typeof t
        }

        function _(t) {
            return "string" == typeof t
        }

        function b(t) {
            return "symbol" == typeof t
        }

        function w(t) {
            return void 0 === t
        }

        function j(t) {
            return E(t) && "[object RegExp]" === k(t)
        }

        function E(t) {
            return "object" == typeof t && null !== t
        }

        function x(t) {
            return E(t) && "[object Date]" === k(t)
        }

        function O(t) {
            return E(t) && ("[object Error]" === k(t) || t instanceof Error)
        }

        function A(t) {
            return "function" == typeof t
        }

        function P(t) {
            return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || "undefined" == typeof t
        }

        function k(t) {
            return Object.prototype.toString.call(t)
        }

        function T(t) {
            return 10 > t ? "0" + t.toString(10) : t.toString(10)
        }

        function F() {
            var t = new Date,
                e = [T(t.getHours()), T(t.getMinutes()), T(t.getSeconds())].join(":");
            return [t.getDate(), I[t.getMonth()], e].join(" ")
        }

        function S(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        var R = /%[sdj%]/g;
        e.format = function(t) {
            if (!_(t)) {
                for (var e = [], r = 0; r < arguments.length; r++) e.push(i(arguments[r]));
                return e.join(" ")
            }
            for (var r = 1, n = arguments, o = n.length, s = String(t).replace(R, function(t) {
                    if ("%%" === t) return "%";
                    if (r >= o) return t;
                    switch (t) {
                        case "%s":
                            return String(n[r++]);
                        case "%d":
                            return Number(n[r++]);
                        case "%j":
                            try {
                                return JSON.stringify(n[r++])
                            } catch (e) {
                                return "[Circular]"
                            }
                        default:
                            return t
                    }
                }), a = n[r]; o > r; a = n[++r]) s += g(a) || !E(a) ? " " + a : " " + i(a);
            return s
        }, e.deprecate = function(r, i) {
            function o() {
                if (!s) {
                    if (n.throwDeprecation) throw new Error(i);
                    n.traceDeprecation ? console.trace(i) : console.error(i), s = !0
                }
                return r.apply(this, arguments)
            }
            if (w(t.process)) return function() {
                return e.deprecate(r, i).apply(this, arguments)
            };
            if (n.noDeprecation === !0) return r;
            var s = !1;
            return o
        };
        var N, C = {};
        e.debuglog = function(t) {
            if (w(N) && (N = {
                    NODE_ENV: "production"
                }.NODE_DEBUG || ""), t = t.toUpperCase(), !C[t])
                if (new RegExp("\\b" + t + "\\b", "i").test(N)) {
                    var r = n.pid;
                    C[t] = function() {
                        var n = e.format.apply(e, arguments);
                        console.error("%s %d: %s", t, r, n)
                    }
                } else C[t] = function() {};
            return C[t]
        }, e.inspect = i, i.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
        }, i.styles = {
            special: "cyan",
            number: "yellow",
            "boolean": "yellow",
            undefined: "grey",
            "null": "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        }, e.isArray = d, e.isBoolean = y, e.isNull = g, e.isNullOrUndefined = v, e.isNumber = m, e.isString = _, e.isSymbol = b, e.isUndefined = w, e.isRegExp = j, e.isObject = E, e.isDate = x, e.isError = O, e.isFunction = A, e.isPrimitive = P, e.isBuffer = r(53);
        var I = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        e.log = function() {
            console.log("%s - %s", F(), e.format.apply(e, arguments))
        }, e.inherits = r(87), e._extend = function(t, e) {
            if (!e || !E(e)) return t;
            for (var r = Object.keys(e), n = r.length; n--;) t[r[n]] = e[r[n]];
            return t
        }
    }).call(e, function() {
        return this
    }(), r(86))
}, function(t, e, r) {
    function n(t) {
        var e = {};
        for (var r in t) e[r] = t[r];
        return e
    }
    var i = r(85);
    t.exports = function(t) {
        var e = t;
        switch (i(t)) {
            case "undefined":
                return "undefined";
            case "number":
                return t.toString();
            case "regexp":
                return t.toString();
            case "date":
                return t.toISOString();
            case "function":
                return t.toString();
            case "object":
                t = n(t);
            default:
                var r = [];
                return JSON.stringify(t, function(t, n) {
                    if (!r.length) return r.push(n), n;
                    var i = r.indexOf(this);
                    return ~i ? r.splice(i + 1) : r.push(this), n === e || ~r.indexOf(n) ? "[Circular]" : void 0 === n ? "[Undefined]" : n
                })
        }
    }
}, function(t, e, r) {
    "use strict";

    function n(t) {
        if (this._container = t || {}, t && "object" != typeof t) throw new TypeError("Argument #1 passed to Collection must be an object")
    }
    var i = r(51);
    n.prototype.keys = function() {
        return Object.keys(this._container)
    }, n.prototype.has = function(t) {
        if ("string" != typeof t) throw new TypeError("Argument #1 passed to Collection.has() must be a string identifier, " + Object.prototype.toString(t) + " given");
        return t in this._container == !0
    }, n.prototype.remove = function(t) {
        if ("string" != typeof t) throw new TypeError("Argument #1 passed to Collection.remove() must be a string identifier");
        return delete this._container[t], this
    }, n.prototype.set = function(t, e) {
        if ("string" != typeof t) throw new TypeError("Argument #1 passed to Collection.set() must be a string identifier");
        return this._container[t] = e, this
    }, n.prototype.setAll = function(t) {
        if ("object" != typeof t) throw new TypeError("Argument #1 passed to Collection.setAll() must be an object");
        return this._container = t, this
    }, n.prototype.addAll = function(t) {
        if ("object" != typeof t) throw new TypeError("Argument #1 passed to Collection.addAll() must be an object");
        for (var e in t) this.set(e, t[e]);
        return this
    }, n.prototype.addOnce = function(t, e, r) {
        if (this.has(t)) {
            if (r) return this;
            throw new Error("Identifier " + t + " passed to Collection.addOnce() is already defined")
        }
        return this.set(t, e)
    }, n.prototype.addOnceAll = function(t, e) {
        if ("object" != typeof t) throw new TypeError("Argument #1 passed to Collection.addOnceAll() must be an object");
        for (var r in t) this.addOnce(r, t[r], e);
        return this
    }, n.prototype.merge = function(t) {
        if ("object" != typeof t) throw new TypeError("Argument #1 passed to Collection.merge() must be an object");
        var e = Array.prototype.concat.apply([this._container], arguments);
        return this._container = i.mergeRecursive.apply(i, e), this
    }, n.prototype.getAll = function() {
        return this._container
    }, n.prototype.get = function(t, e, r) {
        return "function" == typeof this._container[t] ? this._container[t]() : this.has(t) ? this._container[t] : "function" == typeof e ? this.raw(t, e, r)() : this.raw(t, e, r)
    }, n.prototype.raw = function(t, e, r) {
        if (this.has(t)) return this._container[t];
        if (r) throw new Error("Identifier " + t + " is not defined");
        return e
    }, n.prototype.inject = function(t, e) {
        if (Array.isArray(t)) {
            for (var r in t) t[r] = this.raw(t[r]);
            return e.apply(null, t)
        }
        return "function" == typeof t ? t(this._container) : e(this.raw(t))
    }, n.prototype.invoke = function(t, e) {
        if (Array.isArray(t)) {
            for (var r in t) t[r] = this.get(t[r]);
            return e.apply(null, t)
        }
        return "function" == typeof t ? t(this._container) : e(this.get(t))
    }, n.prototype.apply = function(t) {
        if (arguments.length > 1) {
            var e = Array.prototype.slice.call(arguments, 1);
            return t.apply(this._container, e)
        }
        return t.call(this._container)
    }, n.prototype.wrap = function(t) {
        return function() {
            return t
        }
    }, n.prototype.singleton = function(t, e) {
        var r, n;
        if ("string" != typeof t) throw new TypeError("Argument #1 passed to Collection.singleton() must be a string identifier");
        if ("function" != typeof e) throw new TypeError("Argument #2 passed to Collection.singleton() must be a function");
        return this._container[t] = function() {
            return r || (r = !0, n = arguments.length ? e.apply(null, arguments) : e()), n
        }, this
    }, n.prototype.provider = function(t, e, r) {
        var n, i, o = this;
        if ("string" != typeof t) throw new TypeError("Argument #1 passed to Collection.provider() must be a string identifier");
        return this._container[t] = function() {
            return n || (n = !0, i = o.inject(e, r)), i
        }, this
    }, n.prototype.factory = function(t, e, r) {
        var n, i, o = this;
        if ("string" != typeof t) throw new TypeError("Argument #1 passed to Collection.factory() must be a string identifier");
        return this._container[t] = function() {
            return n || (n = !0, i = o.invoke(e, r)), i
        }, this
    }, t.exports = n
}, function(t, e, r) {
    function n(t) {
        return r(i(t))
    }

    function i(t) {
        return o[t] || function() {
            throw new Error("Cannot find module '" + t + "'.")
        }()
    }
    var o = {
        "./browser": 50,
        "./browser.js": 50,
        "./collection": 45,
        "./collection.js": 45,
        "./index": 27,
        "./index.js": 27,
        "./utils": 51,
        "./utils.js": 51
    };
    n.keys = function() {
        return Object.keys(o)
    }, n.resolve = i, t.exports = n
}, function(t, e, r) {
    var n;
    (function(t, i) {
        (function() {
            function o(t, e, r) {
                for (var n = (r || 0) - 1, i = t ? t.length : 0; ++n < i;)
                    if (t[n] === e) return n;
                return -1
            }

            function s(t, e) {
                var r = typeof e;
                if (t = t.cache, "boolean" == r || null == e) return t[e] ? 0 : -1;
                "number" != r && "string" != r && (r = "object");
                var n = "number" == r ? e : x + e;
                return t = (t = t[r]) && t[n], "object" == r ? t && o(t, e) > -1 ? 0 : -1 : t ? 0 : -1
            }

            function a(t) {
                var e = this.cache,
                    r = typeof t;
                if ("boolean" == r || null == t) e[t] = !0;
                else {
                    "number" != r && "string" != r && (r = "object");
                    var n = "number" == r ? t : x + t,
                        i = e[r] || (e[r] = {});
                    "object" == r ? (i[n] || (i[n] = [])).push(t) : i[n] = !0
                }
            }

            function u(t) {
                return t.charCodeAt(0)
            }

            function c(t, e) {
                for (var r = t.criteria, n = e.criteria, i = -1, o = r.length; ++i < o;) {
                    var s = r[i],
                        a = n[i];
                    if (s !== a) {
                        if (s > a || "undefined" == typeof s) return 1;
                        if (a > s || "undefined" == typeof a) return -1
                    }
                }
                return t.index - e.index
            }

            function l(t) {
                var e = -1,
                    r = t.length,
                    n = t[0],
                    i = t[r / 2 | 0],
                    o = t[r - 1];
                if (n && "object" == typeof n && i && "object" == typeof i && o && "object" == typeof o) return !1;
                var s = p();
                s["false"] = s["null"] = s["true"] = s.undefined = !1;
                var u = p();
                for (u.array = t, u.cache = s, u.push = a; ++e < r;) u.push(t[e]);
                return u
            }

            function f(t) {
                return "\\" + ie[t]
            }

            function h() {
                return b.pop() || []
            }

            function p() {
                return w.pop() || {
                    array: null,
                    cache: null,
                    criteria: null,
                    "false": !1,
                    index: 0,
                    "null": !1,
                    number: null,
                    object: null,
                    push: null,
                    string: null,
                    "true": !1,
                    undefined: !1,
                    value: null
                }
            }

            function d(t) {
                return "function" != typeof t.toString && "string" == typeof(t + "")
            }

            function y(t) {
                t.length = 0, b.length < A && b.push(t)
            }

            function g(t) {
                var e = t.cache;
                e && g(e), t.array = t.cache = t.criteria = t.object = t.number = t.string = t.value = null, w.length < A && w.push(t)
            }

            function v(t, e, r) {
                e || (e = 0), "undefined" == typeof r && (r = t ? t.length : 0);
                for (var n = -1, i = r - e || 0, o = Array(0 > i ? 0 : i); ++n < i;) o[n] = t[e + n];
                return o
            }

            function m(t) {
                function e(t) {
                    return t && "object" == typeof t && !fi(t) && Mn.call(t, "__wrapped__") ? t : new r(t)
                }

                function r(t, e) {
                    this.__chain__ = !!e, this.__wrapped__ = t
                }

                function n(t) {
                    function e() {
                        if (n) {
                            var t = v(n);
                            qn.apply(t, arguments)
                        }
                        if (this instanceof e) {
                            var o = a(r.prototype),
                                s = r.apply(o, t || arguments);
                            return Be(s) ? s : o
                        }
                        return r.apply(i, t || arguments)
                    }
                    var r = t[0],
                        n = t[2],
                        i = t[4];
                    return li(e, t), e
                }

                function i(t, e, r, n, o) {
                    if (r) {
                        var s = r(t);
                        if ("undefined" != typeof s) return s
                    }
                    var a = Be(t);
                    if (!a) return t;
                    var u = Bn.call(t);
                    if (!X[u] || !ui.nodeClass && d(t)) return t;
                    var c = si[u];
                    switch (u) {
                        case q:
                        case W:
                            return new c(+t);
                        case J:
                        case Z:
                            return new c(t);
                        case Q:
                            return s = c(t.source, N.exec(t)), s.lastIndex = t.lastIndex, s
                    }
                    var l = fi(t);
                    if (e) {
                        var f = !n;
                        n || (n = h()), o || (o = h());
                        for (var p = n.length; p--;)
                            if (n[p] == t) return o[p];
                        s = l ? c(t.length) : {}
                    } else s = l ? v(t) : ji({}, t);
                    return l && (Mn.call(t, "index") && (s.index = t.index), Mn.call(t, "input") && (s.input = t.input)), e ? (n.push(t), o.push(s), (l ? wi : Oi)(t, function(t, a) {
                        s[a] = i(t, e, r, n, o)
                    }), f && (y(n), y(o)), s) : s
                }

                function a(t) {
                    return Be(t) ? Qn(t) : {}
                }

                function b(t, e, r) {
                    if ("function" != typeof t) return on;
                    if ("undefined" == typeof e || !("prototype" in t)) return t;
                    var n = t.__bindData__;
                    if ("undefined" == typeof n && (ui.funcNames && (n = !t.name), n = n || !ui.funcDecomp, !n)) {
                        var i = zn.call(t);
                        ui.funcNames || (n = !C.test(i)), n || (n = D.test(i), li(t, n))
                    }
                    if (n === !1 || n !== !0 && 1 & n[1]) return t;
                    switch (r) {
                        case 1:
                            return function(r) {
                                return t.call(e, r)
                            };
                        case 2:
                            return function(r, n) {
                                return t.call(e, r, n)
                            };
                        case 3:
                            return function(r, n, i) {
                                return t.call(e, r, n, i)
                            };
                        case 4:
                            return function(r, n, i, o) {
                                return t.call(e, r, n, i, o)
                            }
                    }
                    return $r(t, e)
                }

                function w(t) {
                    function e() {
                        var t = c ? s : this;
                        if (i) {
                            var d = v(i);
                            qn.apply(d, arguments)
                        }
                        if ((o || f) && (d || (d = v(arguments)), o && qn.apply(d, o), f && d.length < u)) return n |= 16, w([r, h ? n : -4 & n, d, null, s, u]);
                        if (d || (d = arguments), l && (r = t[p]), this instanceof e) {
                            t = a(r.prototype);
                            var y = r.apply(t, d);
                            return Be(y) ? y : t
                        }
                        return r.apply(t, d)
                    }
                    var r = t[0],
                        n = t[1],
                        i = t[2],
                        o = t[3],
                        s = t[4],
                        u = t[5],
                        c = 1 & n,
                        l = 2 & n,
                        f = 4 & n,
                        h = 8 & n,
                        p = r;
                    return li(e, t), e
                }

                function A(t, e) {
                    var r = -1,
                        n = ye(),
                        i = t ? t.length : 0,
                        a = i >= O && n === o,
                        u = [];
                    if (a) {
                        var c = l(e);
                        c ? (n = s, e = c) : a = !1
                    }
                    for (; ++r < i;) {
                        var f = t[r];
                        n(e, f) < 0 && u.push(f)
                    }
                    return a && g(e), u
                }

                function ie(t, e, r, n) {
                    for (var i = (n || 0) - 1, o = t ? t.length : 0, s = []; ++i < o;) {
                        var a = t[i];
                        if (a && "object" == typeof a && "number" == typeof a.length && (fi(a) || _e(a))) {
                            e || (a = ie(a, e, r));
                            var u = -1,
                                c = a.length,
                                l = s.length;
                            for (s.length += c; ++u < c;) s[l++] = a[u]
                        } else r || s.push(a)
                    }
                    return s
                }

                function se(t, e, r, n, i, o) {
                    if (r) {
                        var s = r(t, e);
                        if ("undefined" != typeof s) return !!s
                    }
                    if (t === e) return 0 !== t || 1 / t == 1 / e;
                    var a = typeof t,
                        u = typeof e;
                    if (!(t !== t || t && ne[a] || e && ne[u])) return !1;
                    if (null == t || null == e) return t === e;
                    var c = Bn.call(t),
                        l = Bn.call(e);
                    if (c == V && (c = G), l == V && (l = G), c != l) return !1;
                    switch (c) {
                        case q:
                        case W:
                            return +t == +e;
                        case J:
                            return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
                        case Q:
                        case Z:
                            return t == Fn(e)
                    }
                    var f = c == M;
                    if (!f) {
                        var p = Mn.call(t, "__wrapped__"),
                            g = Mn.call(e, "__wrapped__");
                        if (p || g) return se(p ? t.__wrapped__ : t, g ? e.__wrapped__ : e, r, n, i, o);
                        if (c != G || !ui.nodeClass && (d(t) || d(e))) return !1;
                        var v = !ui.argsObject && _e(t) ? kn : t.constructor,
                            m = !ui.argsObject && _e(e) ? kn : e.constructor;
                        if (v != m && !(Ue(v) && v instanceof v && Ue(m) && m instanceof m) && "constructor" in t && "constructor" in e) return !1
                    }
                    var _ = !i;
                    i || (i = h()), o || (o = h());
                    for (var b = i.length; b--;)
                        if (i[b] == t) return o[b] == e;
                    var w = 0;
                    if (s = !0, i.push(t), o.push(e), f) {
                        if (b = t.length, w = e.length, s = w == b, s || n)
                            for (; w--;) {
                                var j = b,
                                    E = e[w];
                                if (n)
                                    for (; j-- && !(s = se(t[j], E, r, n, i, o)););
                                else if (!(s = se(t[w], E, r, n, i, o))) break
                            }
                    } else xi(e, function(e, a, u) {
                        return Mn.call(u, a) ? (w++, s = Mn.call(t, a) && se(t[a], e, r, n, i, o)) : void 0
                    }), s && !n && xi(t, function(t, e, r) {
                        return Mn.call(r, e) ? s = --w > -1 : void 0
                    });
                    return i.pop(), o.pop(), _ && (y(i), y(o)), s
                }

                function ae(t, e, r, n, i) {
                    (fi(e) ? nr : Oi)(e, function(e, o) {
                        var s, a, u = e,
                            c = t[o];
                        if (e && ((a = fi(e)) || Ai(e))) {
                            for (var l = n.length; l--;)
                                if (s = n[l] == e) {
                                    c = i[l];
                                    break
                                }
                            if (!s) {
                                var f;
                                r && (u = r(c, e), (f = "undefined" != typeof u) && (c = u)), f || (c = a ? fi(c) ? c : [] : Ai(c) ? c : {}), n.push(e), i.push(c), f || ae(c, e, r, n, i)
                            }
                        } else r && (u = r(c, e), "undefined" == typeof u && (u = e)), "undefined" != typeof u && (c = u);
                        t[o] = c
                    })
                }

                function ue(t, e) {
                    return t + $n(oi() * (e - t + 1))
                }

                function le(t, e, r) {
                    var n = -1,
                        i = ye(),
                        a = t ? t.length : 0,
                        u = [],
                        c = !e && a >= O && i === o,
                        f = r || c ? h() : u;
                    if (c) {
                        var p = l(f);
                        i = s, f = p
                    }
                    for (; ++n < a;) {
                        var d = t[n],
                            v = r ? r(d, n, t) : d;
                        (e ? !n || f[f.length - 1] !== v : i(f, v) < 0) && ((r || c) && f.push(v), u.push(d))
                    }
                    return c ? (y(f.array), g(f)) : r && y(f), u
                }

                function fe(t) {
                    return function(r, n, i) {
                        var o = {};
                        if (n = e.createCallback(n, i, 3), fi(r))
                            for (var s = -1, a = r.length; ++s < a;) {
                                var u = r[s];
                                t(o, u, n(u, s, r), r)
                            } else wi(r, function(e, r, i) {
                                t(o, e, n(e, r, i), i)
                            });
                        return o
                    }
                }

                function he(t, e, r, i, o, s) {
                    var a = 1 & e,
                        u = 2 & e,
                        c = 4 & e,
                        l = 16 & e,
                        f = 32 & e;
                    if (!u && !Ue(t)) throw new Sn;
                    l && !r.length && (e &= -17, l = r = !1), f && !i.length && (e &= -33, f = i = !1);
                    var h = t && t.__bindData__;
                    if (h && h !== !0) return h = v(h), h[2] && (h[2] = v(h[2])), h[3] && (h[3] = v(h[3])), !a || 1 & h[1] || (h[4] = o), !a && 1 & h[1] && (e |= 8), !c || 4 & h[1] || (h[5] = s), l && qn.apply(h[2] || (h[2] = []), r), f && Jn.apply(h[3] || (h[3] = []), i), h[1] |= e, he.apply(null, h);
                    var p = 1 == e || 17 === e ? n : w;
                    return p([t, e, r, i, o, s])
                }

                function pe() {
                    re.shadowedProps = $, re.array = re.bottom = re.loop = re.top = "", re.init = "iterable", re.useHas = !0;
                    for (var t, e = 0; t = arguments[e]; e++)
                        for (var r in t) re[r] = t[r];
                    var n = re.args;
                    re.firstArg = /^[^,]+/.exec(n)[0];
                    var i = On("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString", "return function(" + n + ") {\n" + ci(re) + "\n}");
                    return i(b, Y, Nn, Mn, E, _e, fi, ze, re.keys, Cn, ne, ai, Z, In, Bn)
                }

                function de(t) {
                    return vi[t]
                }

                function ye() {
                    var t = (t = e.indexOf) === xr ? o : t;
                    return t
                }

                function ge(t) {
                    return "function" == typeof t && Dn.test(t)
                }

                function ve(t) {
                    var e, r;
                    return !t || Bn.call(t) != G || (e = t.constructor, Ue(e) && !(e instanceof e)) || !ui.argsClass && _e(t) || !ui.nodeClass && d(t) ? !1 : ui.ownLast ? (xi(t, function(t, e, n) {
                        return r = Mn.call(n, e), !1
                    }), r !== !1) : (xi(t, function(t, e) {
                        r = e
                    }), "undefined" == typeof r || Mn.call(t, r))
                }

                function me(t) {
                    return mi[t]
                }

                function _e(t) {
                    return t && "object" == typeof t && "number" == typeof t.length && Bn.call(t) == V || !1
                }

                function be(t, e, r, n) {
                    return "boolean" != typeof e && null != e && (n = r, r = e, e = !1), i(t, e, "function" == typeof r && b(r, n, 1))
                }

                function we(t, e, r) {
                    return i(t, !0, "function" == typeof e && b(e, r, 1))
                }

                function je(t, e) {
                    var r = a(t);
                    return e ? ji(r, e) : r
                }

                function Ee(t, r, n) {
                    var i;
                    return r = e.createCallback(r, n, 3), Oi(t, function(t, e, n) {
                        return r(t, e, n) ? (i = e, !1) : void 0
                    }), i
                }

                function xe(t, r, n) {
                    var i;
                    return r = e.createCallback(r, n, 3), Ae(t, function(t, e, n) {
                        return r(t, e, n) ? (i = e, !1) : void 0
                    }), i
                }

                function Oe(t, e, r) {
                    var n = [];
                    xi(t, function(t, e) {
                        n.push(e, t)
                    });
                    var i = n.length;
                    for (e = b(e, r, 3); i-- && e(n[i--], n[i], t) !== !1;);
                    return t
                }

                function Ae(t, e, r) {
                    var n = pi(t),
                        i = n.length;
                    for (e = b(e, r, 3); i--;) {
                        var o = n[i];
                        if (e(t[o], o, t) === !1) break
                    }
                    return t
                }

                function Pe(t) {
                    var e = [];
                    return xi(t, function(t, r) {
                        Ue(t) && e.push(r)
                    }), e.sort()
                }

                function ke(t, e) {
                    return t ? Mn.call(t, e) : !1
                }

                function Te(t) {
                    for (var e = -1, r = pi(t), n = r.length, i = {}; ++e < n;) {
                        var o = r[e];
                        i[t[o]] = o
                    }
                    return i
                }

                function Fe(t) {
                    return t === !0 || t === !1 || t && "object" == typeof t && Bn.call(t) == q || !1
                }

                function Se(t) {
                    return t && "object" == typeof t && Bn.call(t) == W || !1
                }

                function Re(t) {
                    return t && 1 === t.nodeType || !1
                }

                function Ne(t) {
                    var e = !0;
                    if (!t) return e;
                    var r = Bn.call(t),
                        n = t.length;
                    return r == M || r == Z || (ui.argsClass ? r == V : _e(t)) || r == G && "number" == typeof n && Ue(t.splice) ? !n : (Oi(t, function() {
                        return e = !1
                    }), e)
                }

                function Ce(t, e, r, n) {
                    return se(t, e, "function" == typeof r && b(r, n, 2))
                }

                function Ie(t) {
                    return Xn(t) && !ti(parseFloat(t))
                }

                function Ue(t) {
                    return "function" == typeof t
                }

                function Be(t) {
                    return !(!t || !ne[typeof t])
                }

                function De(t) {
                    return Le(t) && t != +t
                }

                function He(t) {
                    return null === t
                }

                function Le(t) {
                    return "number" == typeof t || t && "object" == typeof t && Bn.call(t) == J || !1
                }

                function $e(t) {
                    return t && ne[typeof t] && Bn.call(t) == Q || !1
                }

                function ze(t) {
                    return "string" == typeof t || t && "object" == typeof t && Bn.call(t) == Z || !1
                }

                function Ve(t) {
                    return "undefined" == typeof t
                }

                function Me(t, r, n) {
                    var i = {};
                    return r = e.createCallback(r, n, 3), Oi(t, function(t, e, n) {
                        i[e] = r(t, e, n)
                    }), i
                }

                function qe(t) {
                    var e = arguments,
                        r = 2;
                    if (!Be(t)) return t;
                    if ("number" != typeof e[2] && (r = e.length), r > 3 && "function" == typeof e[r - 2]) var n = b(e[--r - 1], e[r--], 2);
                    else r > 2 && "function" == typeof e[r - 1] && (n = e[--r]);
                    for (var i = v(arguments, 1, r), o = -1, s = h(), a = h(); ++o < r;) ae(t, i[o], n, s, a);
                    return y(s), y(a), t
                }

                function We(t, r, n) {
                    var i = {};
                    if ("function" != typeof r) {
                        var o = [];
                        xi(t, function(t, e) {
                            o.push(e)
                        }), o = A(o, ie(arguments, !0, !1, 1));
                        for (var s = -1, a = o.length; ++s < a;) {
                            var u = o[s];
                            i[u] = t[u]
                        }
                    } else r = e.createCallback(r, n, 3), xi(t, function(t, e, n) {
                        r(t, e, n) || (i[e] = t)
                    });
                    return i
                }

                function Ye(t) {
                    for (var e = -1, r = pi(t), n = r.length, i = wn(n); ++e < n;) {
                        var o = r[e];
                        i[e] = [o, t[o]]
                    }
                    return i
                }

                function Ke(t, r, n) {
                    var i = {};
                    if ("function" != typeof r)
                        for (var o = -1, s = ie(arguments, !0, !1, 1), a = Be(t) ? s.length : 0; ++o < a;) {
                            var u = s[o];
                            u in t && (i[u] = t[u])
                        } else r = e.createCallback(r, n, 3), xi(t, function(t, e, n) {
                            r(t, e, n) && (i[e] = t)
                        });
                    return i
                }

                function Je(t, r, n, i) {
                    var o = fi(t);
                    if (null == n)
                        if (o) n = [];
                        else {
                            var s = t && t.constructor,
                                u = s && s.prototype;
                            n = a(u)
                        }
                    return r && (r = e.createCallback(r, i, 4), (o ? wi : Oi)(t, function(t, e, i) {
                        return r(n, t, e, i)
                    })), n
                }

                function Ge(t) {
                    for (var e = -1, r = pi(t), n = r.length, i = wn(n); ++e < n;) i[e] = t[r[e]];
                    return i
                }

                function Qe(t) {
                    var e = arguments,
                        r = -1,
                        n = ie(e, !0, !1, 1),
                        i = e[2] && e[2][e[1]] === t ? 1 : n.length,
                        o = wn(i);
                    for (ui.unindexedChars && ze(t) && (t = t.split("")); ++r < i;) o[r] = t[n[r]];
                    return o
                }

                function Ze(t, e, r) {
                    var n = -1,
                        i = ye(),
                        o = t ? t.length : 0,
                        s = !1;
                    return r = (0 > r ? ri(0, o + r) : r) || 0, fi(t) ? s = i(t, e, r) > -1 : "number" == typeof o ? s = (ze(t) ? t.indexOf(e, r) : i(t, e, r)) > -1 : wi(t, function(t) {
                        return ++n >= r ? !(s = t === e) : void 0
                    }), s
                }

                function Xe(t, r, n) {
                    var i = !0;
                    if (r = e.createCallback(r, n, 3), fi(t))
                        for (var o = -1, s = t.length; ++o < s && (i = !!r(t[o], o, t)););
                    else wi(t, function(t, e, n) {
                        return i = !!r(t, e, n)
                    });
                    return i
                }

                function tr(t, r, n) {
                    var i = [];
                    if (r = e.createCallback(r, n, 3), fi(t))
                        for (var o = -1, s = t.length; ++o < s;) {
                            var a = t[o];
                            r(a, o, t) && i.push(a)
                        } else wi(t, function(t, e, n) {
                            r(t, e, n) && i.push(t)
                        });
                    return i
                }

                function er(t, r, n) {
                    if (r = e.createCallback(r, n, 3), !fi(t)) {
                        var i;
                        return wi(t, function(t, e, n) {
                            return r(t, e, n) ? (i = t, !1) : void 0
                        }), i
                    }
                    for (var o = -1, s = t.length; ++o < s;) {
                        var a = t[o];
                        if (r(a, o, t)) return a
                    }
                }

                function rr(t, r, n) {
                    var i;
                    return r = e.createCallback(r, n, 3), ir(t, function(t, e, n) {
                        return r(t, e, n) ? (i = t, !1) : void 0
                    }), i
                }

                function nr(t, e, r) {
                    if (e && "undefined" == typeof r && fi(t))
                        for (var n = -1, i = t.length; ++n < i && e(t[n], n, t) !== !1;);
                    else wi(t, e, r);
                    return t
                }

                function ir(t, e, r) {
                    var n = t,
                        i = t ? t.length : 0;
                    if (e = e && "undefined" == typeof r ? e : b(e, r, 3), fi(t))
                        for (; i-- && e(t[i], i, t) !== !1;);
                    else {
                        if ("number" != typeof i) {
                            var o = pi(t);
                            i = o.length
                        } else ui.unindexedChars && ze(t) && (n = t.split(""));
                        wi(t, function(t, r, s) {
                            return r = o ? o[--i] : --i, e(n[r], r, s)
                        })
                    }
                    return t
                }

                function or(t, e) {
                    var r = v(arguments, 2),
                        n = -1,
                        i = "function" == typeof e,
                        o = t ? t.length : 0,
                        s = wn("number" == typeof o ? o : 0);
                    return nr(t, function(t) {
                        s[++n] = (i ? e : t[e]).apply(t, r)
                    }), s
                }

                function sr(t, r, n) {
                    var i = -1,
                        o = t ? t.length : 0,
                        s = wn("number" == typeof o ? o : 0);
                    if (r = e.createCallback(r, n, 3), fi(t))
                        for (; ++i < o;) s[i] = r(t[i], i, t);
                    else wi(t, function(t, e, n) {
                        s[++i] = r(t, e, n)
                    });
                    return s
                }

                function ar(t, r, n) {
                    var i = -1 / 0,
                        o = i;
                    if ("function" != typeof r && n && n[r] === t && (r = null), null == r && fi(t))
                        for (var s = -1, a = t.length; ++s < a;) {
                            var c = t[s];
                            c > o && (o = c)
                        } else r = null == r && ze(t) ? u : e.createCallback(r, n, 3), wi(t, function(t, e, n) {
                            var s = r(t, e, n);
                            s > i && (i = s, o = t)
                        });
                    return o
                }

                function ur(t, r, n) {
                    var i = 1 / 0,
                        o = i;
                    if ("function" != typeof r && n && n[r] === t && (r = null), null == r && fi(t))
                        for (var s = -1, a = t.length; ++s < a;) {
                            var c = t[s];
                            o > c && (o = c)
                        } else r = null == r && ze(t) ? u : e.createCallback(r, n, 3), wi(t, function(t, e, n) {
                            var s = r(t, e, n);
                            i > s && (i = s, o = t)
                        });
                    return o
                }

                function cr(t, r, n, i) {
                    var o = arguments.length < 3;
                    if (r = e.createCallback(r, i, 4), fi(t)) {
                        var s = -1,
                            a = t.length;
                        for (o && (n = t[++s]); ++s < a;) n = r(n, t[s], s, t)
                    } else wi(t, function(t, e, i) {
                        n = o ? (o = !1, t) : r(n, t, e, i)
                    });
                    return n
                }

                function lr(t, r, n, i) {
                    var o = arguments.length < 3;
                    return r = e.createCallback(r, i, 4), ir(t, function(t, e, i) {
                        n = o ? (o = !1, t) : r(n, t, e, i)
                    }), n
                }

                function fr(t, r, n) {
                    return r = e.createCallback(r, n, 3), tr(t, function(t, e, n) {
                        return !r(t, e, n)
                    })
                }

                function hr(t, e, r) {
                    if (t && "number" != typeof t.length ? t = Ge(t) : ui.unindexedChars && ze(t) && (t = t.split("")), null == e || r) return t ? t[ue(0, t.length - 1)] : _;
                    var n = pr(t);
                    return n.length = ni(ri(0, e), n.length), n
                }

                function pr(t) {
                    var e = -1,
                        r = t ? t.length : 0,
                        n = wn("number" == typeof r ? r : 0);
                    return nr(t, function(t) {
                        var r = ue(0, ++e);
                        n[e] = n[r], n[r] = t
                    }), n
                }

                function dr(t) {
                    var e = t ? t.length : 0;
                    return "number" == typeof e ? e : pi(t).length
                }

                function yr(t, r, n) {
                    var i;
                    if (r = e.createCallback(r, n, 3), fi(t))
                        for (var o = -1, s = t.length; ++o < s && !(i = r(t[o], o, t)););
                    else wi(t, function(t, e, n) {
                        return !(i = r(t, e, n))
                    });
                    return !!i
                }

                function gr(t, r, n) {
                    var i = -1,
                        o = fi(r),
                        s = t ? t.length : 0,
                        a = wn("number" == typeof s ? s : 0);
                    for (o || (r = e.createCallback(r, n, 3)), nr(t, function(t, e, n) {
                            var s = a[++i] = p();
                            o ? s.criteria = sr(r, function(e) {
                                return t[e]
                            }) : (s.criteria = h())[0] = r(t, e, n), s.index = i, s.value = t
                        }), s = a.length, a.sort(c); s--;) {
                        var u = a[s];
                        a[s] = u.value, o || y(u.criteria), g(u)
                    }
                    return a
                }

                function vr(t) {
                    return t && "number" == typeof t.length ? ui.unindexedChars && ze(t) ? t.split("") : v(t) : Ge(t)
                }

                function mr(t) {
                    for (var e = -1, r = t ? t.length : 0, n = []; ++e < r;) {
                        var i = t[e];
                        i && n.push(i)
                    }
                    return n
                }

                function _r(t) {
                    return A(t, ie(arguments, !0, !0, 1))
                }

                function br(t, r, n) {
                    var i = -1,
                        o = t ? t.length : 0;
                    for (r = e.createCallback(r, n, 3); ++i < o;)
                        if (r(t[i], i, t)) return i;
                    return -1
                }

                function wr(t, r, n) {
                    var i = t ? t.length : 0;
                    for (r = e.createCallback(r, n, 3); i--;)
                        if (r(t[i], i, t)) return i;
                    return -1
                }

                function jr(t, r, n) {
                    var i = 0,
                        o = t ? t.length : 0;
                    if ("number" != typeof r && null != r) {
                        var s = -1;
                        for (r = e.createCallback(r, n, 3); ++s < o && r(t[s], s, t);) i++
                    } else if (i = r, null == i || n) return t ? t[0] : _;
                    return v(t, 0, ni(ri(0, i), o))
                }

                function Er(t, e, r, n) {
                    return "boolean" != typeof e && null != e && (n = r, r = "function" != typeof e && n && n[e] === t ? null : e, e = !1), null != r && (t = sr(t, r, n)), ie(t, e)
                }

                function xr(t, e, r) {
                    if ("number" == typeof r) {
                        var n = t ? t.length : 0;
                        r = 0 > r ? ri(0, n + r) : r || 0
                    } else if (r) {
                        var i = Nr(t, e);
                        return t[i] === e ? i : -1
                    }
                    return o(t, e, r)
                }

                function Or(t, r, n) {
                    var i = 0,
                        o = t ? t.length : 0;
                    if ("number" != typeof r && null != r) {
                        var s = o;
                        for (r = e.createCallback(r, n, 3); s-- && r(t[s], s, t);) i++
                    } else i = null == r || n ? 1 : r || i;
                    return v(t, 0, ni(ri(0, o - i), o))
                }

                function Ar() {
                    for (var t = [], e = -1, r = arguments.length, n = h(), i = ye(), a = i === o, u = h(); ++e < r;) {
                        var c = arguments[e];
                        (fi(c) || _e(c)) && (t.push(c), n.push(a && c.length >= O && l(e ? t[e] : u)))
                    }
                    var f = t[0],
                        p = -1,
                        d = f ? f.length : 0,
                        v = [];
                    t: for (; ++p < d;) {
                        var m = n[0];
                        if (c = f[p], (m ? s(m, c) : i(u, c)) < 0) {
                            for (e = r, (m || u).push(c); --e;)
                                if (m = n[e], (m ? s(m, c) : i(t[e], c)) < 0) continue t;
                            v.push(c)
                        }
                    }
                    for (; r--;) m = n[r], m && g(m);
                    return y(n), y(u), v
                }

                function Pr(t, r, n) {
                    var i = 0,
                        o = t ? t.length : 0;
                    if ("number" != typeof r && null != r) {
                        var s = o;
                        for (r = e.createCallback(r, n, 3); s-- && r(t[s], s, t);) i++
                    } else if (i = r, null == i || n) return t ? t[o - 1] : _;
                    return v(t, ri(0, o - i))
                }

                function kr(t, e, r) {
                    var n = t ? t.length : 0;
                    for ("number" == typeof r && (n = (0 > r ? ri(0, n + r) : ni(r, n - 1)) + 1); n--;)
                        if (t[n] === e) return n;
                    return -1
                }

                function Tr(t) {
                    for (var e = arguments, r = 0, n = e.length, i = t ? t.length : 0; ++r < n;)
                        for (var o = -1, s = e[r]; ++o < i;) t[o] === s && (Kn.call(t, o--, 1), i--);
                    return t
                }

                function Fr(t, e, r) {
                    t = +t || 0, r = "number" == typeof r ? r : +r || 1, null == e && (e = t, t = 0);
                    for (var n = -1, i = ri(0, Hn((e - t) / (r || 1))), o = wn(i); ++n < i;) o[n] = t, t += r;
                    return o
                }

                function Sr(t, r, n) {
                    var i = -1,
                        o = t ? t.length : 0,
                        s = [];
                    for (r = e.createCallback(r, n, 3); ++i < o;) {
                        var a = t[i];
                        r(a, i, t) && (s.push(a), Kn.call(t, i--, 1), o--)
                    }
                    return s
                }

                function Rr(t, r, n) {
                    if ("number" != typeof r && null != r) {
                        var i = 0,
                            o = -1,
                            s = t ? t.length : 0;
                        for (r = e.createCallback(r, n, 3); ++o < s && r(t[o], o, t);) i++
                    } else i = null == r || n ? 1 : ri(0, r);
                    return v(t, i)
                }

                function Nr(t, r, n, i) {
                    var o = 0,
                        s = t ? t.length : o;
                    for (n = n ? e.createCallback(n, i, 1) : on, r = n(r); s > o;) {
                        var a = o + s >>> 1;
                        n(t[a]) < r ? o = a + 1 : s = a
                    }
                    return o
                }

                function Cr() {
                    return le(ie(arguments, !0, !0))
                }

                function Ir(t, r, n, i) {
                    return "boolean" != typeof r && null != r && (i = n, n = "function" != typeof r && i && i[r] === t ? null : r, r = !1), null != n && (n = e.createCallback(n, i, 3)), le(t, r, n)
                }

                function Ur(t) {
                    return A(t, v(arguments, 1))
                }

                function Br() {
                    for (var t = -1, e = arguments.length; ++t < e;) {
                        var r = arguments[t];
                        if (fi(r) || _e(r)) var n = n ? le(A(n, r).concat(A(r, n))) : r
                    }
                    return n || []
                }

                function Dr() {
                    for (var t = arguments.length > 1 ? arguments : arguments[0], e = -1, r = t ? ar(Fi(t, "length")) : 0, n = wn(0 > r ? 0 : r); ++e < r;) n[e] = Fi(t, e);
                    return n
                }

                function Hr(t, e) {
                    var r = -1,
                        n = t ? t.length : 0,
                        i = {};
                    for (e || !n || fi(t[0]) || (e = []); ++r < n;) {
                        var o = t[r];
                        e ? i[o] = e[r] : o && (i[o[0]] = o[1])
                    }
                    return i
                }

                function Lr(t, e) {
                    if (!Ue(e)) throw new Sn;
                    return function() {
                        return --t < 1 ? e.apply(this, arguments) : void 0
                    }
                }

                function $r(t, e) {
                    return arguments.length > 2 ? he(t, 17, v(arguments, 2), null, e) : he(t, 1, null, null, e)
                }

                function zr(t) {
                    for (var e = arguments.length > 1 ? ie(arguments, !0, !1, 1) : Pe(t), r = -1, n = e.length; ++r < n;) {
                        var i = e[r];
                        t[i] = he(t[i], 1, null, null, t)
                    }
                    return t
                }

                function Vr(t, e) {
                    return arguments.length > 2 ? he(e, 19, v(arguments, 2), null, t) : he(e, 3, null, null, t)
                }

                function Mr() {
                    for (var t = arguments, e = t.length; e--;)
                        if (!Ue(t[e])) throw new Sn;
                    return function() {
                        for (var e = arguments, r = t.length; r--;) e = [t[r].apply(this, e)];
                        return e[0]
                    }
                }

                function qr(t, e) {
                    return e = "number" == typeof e ? e : +e || t.length, he(t, 4, null, null, null, e)
                }

                function Wr(t, e, r) {
                    var n, i, o, s, a, u, c, l = 0,
                        f = !1,
                        h = !0;
                    if (!Ue(t)) throw new Sn;
                    if (e = ri(0, e) || 0, r === !0) {
                        var p = !0;
                        h = !1
                    } else Be(r) && (p = r.leading, f = "maxWait" in r && (ri(e, r.maxWait) || 0), h = "trailing" in r ? r.trailing : h);
                    var d = function() {
                            var r = e - (Ri() - s);
                            if (0 >= r) {
                                i && Ln(i);
                                var f = c;
                                i = u = c = _, f && (l = Ri(), o = t.apply(a, n), u || i || (n = a = null))
                            } else u = Yn(d, r)
                        },
                        y = function() {
                            u && Ln(u), i = u = c = _, (h || f !== e) && (l = Ri(), o = t.apply(a, n), u || i || (n = a = null))
                        };
                    return function() {
                        if (n = arguments, s = Ri(), a = this, c = h && (u || !p), f === !1) var r = p && !u;
                        else {
                            i || p || (l = s);
                            var g = f - (s - l),
                                v = 0 >= g;
                            v ? (i && (i = Ln(i)), l = s, o = t.apply(a, n)) : i || (i = Yn(y, g))
                        }
                        return v && u ? u = Ln(u) : u || e === f || (u = Yn(d, e)), r && (v = !0, o = t.apply(a, n)), !v || u || i || (n = a = null), o
                    }
                }

                function Yr(t) {
                    if (!Ue(t)) throw new Sn;
                    var e = v(arguments, 1);
                    return Yn(function() {
                        t.apply(_, e)
                    }, 1)
                }

                function Kr(t, e) {
                    if (!Ue(t)) throw new Sn;
                    var r = v(arguments, 2);
                    return Yn(function() {
                        t.apply(_, r)
                    }, e)
                }

                function Jr(t, e) {
                    if (!Ue(t)) throw new Sn;
                    var r = function() {
                        var n = r.cache,
                            i = e ? e.apply(this, arguments) : x + arguments[0];
                        return Mn.call(n, i) ? n[i] : n[i] = t.apply(this, arguments)
                    };
                    return r.cache = {}, r
                }

                function Gr(t) {
                    var e, r;
                    if (!Ue(t)) throw new Sn;
                    return function() {
                        return e ? r : (e = !0, r = t.apply(this, arguments), t = null, r)
                    }
                }

                function Qr(t) {
                    return he(t, 16, v(arguments, 1))
                }

                function Zr(t) {
                    return he(t, 32, null, v(arguments, 1))
                }

                function Xr(t, e, r) {
                    var n = !0,
                        i = !0;
                    if (!Ue(t)) throw new Sn;
                    return r === !1 ? n = !1 : Be(r) && (n = "leading" in r ? r.leading : n, i = "trailing" in r ? r.trailing : i), te.leading = n, te.maxWait = e, te.trailing = i, Wr(t, e, te)
                }

                function tn(t, e) {
                    return he(e, 16, [t])
                }

                function en(t) {
                    return function() {
                        return t
                    }
                }

                function rn(t, e, r) {
                    var n = typeof t;
                    if (null == t || "function" == n) return b(t, e, r);
                    if ("object" != n) return cn(t);
                    var i = pi(t),
                        o = i[0],
                        s = t[o];
                    return 1 != i.length || s !== s || Be(s) ? function(e) {
                        for (var r = i.length, n = !1; r-- && (n = se(e[i[r]], t[i[r]], null, !0)););
                        return n
                    } : function(t) {
                        var e = t[o];
                        return s === e && (0 !== s || 1 / s == 1 / e)
                    }
                }

                function nn(t) {
                    return null == t ? "" : Fn(t).replace(bi, de)
                }

                function on(t) {
                    return t
                }

                function sn(t, n, i) {
                    var o = !0,
                        s = n && Pe(n);
                    n && (i || s.length) || (null == i && (i = n), a = r, n = t, t = e, s = Pe(n)), i === !1 ? o = !1 : Be(i) && "chain" in i && (o = i.chain);
                    var a = t,
                        u = Ue(a);
                    nr(s, function(e) {
                        var r = t[e] = n[e];
                        u && (a.prototype[e] = function() {
                            var e = this.__chain__,
                                n = this.__wrapped__,
                                i = [n];
                            qn.apply(i, arguments);
                            var s = r.apply(t, i);
                            if (o || e) {
                                if (n === s && Be(s)) return this;
                                s = new a(s), s.__chain__ = e
                            }
                            return s
                        })
                    })
                }

                function an() {
                    return t._ = Un, this
                }

                function un() {}

                function cn(t) {
                    return function(e) {
                        return e[t]
                    }
                }

                function ln(t, e, r) {
                    var n = null == t,
                        i = null == e;
                    if (null == r && ("boolean" == typeof t && i ? (r = t, t = 1) : i || "boolean" != typeof e || (r = e, i = !0)), n && i && (e = 1), t = +t || 0, i ? (e = t, t = 0) : e = +e || 0, r || t % 1 || e % 1) {
                        var o = oi();
                        return ni(t + o * (e - t + parseFloat("1e-" + ((o + "").length - 1))), e)
                    }
                    return ue(t, e)
                }

                function fn(t, e) {
                    if (t) {
                        var r = t[e];
                        return Ue(r) ? t[e]() : r
                    }
                }

                function hn(t, r, n) {
                    var i = e.templateSettings;
                    t = Fn(t || ""), n = Ei({}, n, i);
                    var o, s = Ei({}, n.imports, i.imports),
                        a = pi(s),
                        u = Ge(s),
                        c = 0,
                        l = n.interpolate || B,
                        h = "__p += '",
                        p = Tn((n.escape || B).source + "|" + l.source + "|" + (l === I ? R : B).source + "|" + (n.evaluate || B).source + "|$", "g");
                    t.replace(p, function(e, r, n, i, s, a) {
                        return n || (n = i), h += t.slice(c, a).replace(H, f), r && (h += "' +\n__e(" + r + ") +\n'"), s && (o = !0, h += "';\n" + s + ";\n__p += '"), n && (h += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), c = a + e.length, e
                    }), h += "';\n";
                    var d = n.variable,
                        y = d;
                    y || (d = "obj", h = "with (" + d + ") {\n" + h + "\n}\n"), h = (o ? h.replace(T, "") : h).replace(F, "$1").replace(S, "$1;"), h = "function(" + d + ") {\n" + (y ? "" : d + " || (" + d + " = {});\n") + "var __t, __p = '', __e = _.escape" + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h + "return __p\n}";
                    var g = "\n/*\n//# sourceURL=" + (n.sourceURL || "/lodash/template/source[" + z++ +"]") + "\n*/";
                    try {
                        var v = On(a, "return " + h + g).apply(_, u)
                    } catch (m) {
                        throw m.source = h, m
                    }
                    return r ? v(r) : (v.source = h, v)
                }

                function pn(t, e, r) {
                    t = (t = +t) > -1 ? t : 0;
                    var n = -1,
                        i = wn(t);
                    for (e = b(e, r, 1); ++n < t;) i[n] = e(n);
                    return i
                }

                function dn(t) {
                    return null == t ? "" : Fn(t).replace(_i, me)
                }

                function yn(t) {
                    var e = ++j;
                    return Fn(null == t ? "" : t) + e
                }

                function gn(t) {
                    return t = new r(t), t.__chain__ = !0, t
                }

                function vn(t, e) {
                    return e(t), t
                }

                function mn() {
                    return this.__chain__ = !0, this
                }

                function _n() {
                    return Fn(this.__wrapped__)
                }

                function bn() {
                    return this.__wrapped__
                }
                t = t ? ce.defaults(oe.Object(), t, ce.pick(oe, L)) : oe;
                var wn = t.Array,
                    jn = t.Boolean,
                    En = t.Date,
                    xn = t.Error,
                    On = t.Function,
                    An = t.Math,
                    Pn = t.Number,
                    kn = t.Object,
                    Tn = t.RegExp,
                    Fn = t.String,
                    Sn = t.TypeError,
                    Rn = [],
                    Nn = xn.prototype,
                    Cn = kn.prototype,
                    In = Fn.prototype,
                    Un = t._,
                    Bn = Cn.toString,
                    Dn = Tn("^" + Fn(Bn).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                    Hn = An.ceil,
                    Ln = t.clearTimeout,
                    $n = An.floor,
                    zn = On.prototype.toString,
                    Vn = ge(Vn = kn.getPrototypeOf) && Vn,
                    Mn = Cn.hasOwnProperty,
                    qn = Rn.push,
                    Wn = Cn.propertyIsEnumerable,
                    Yn = t.setTimeout,
                    Kn = Rn.splice,
                    Jn = Rn.unshift,
                    Gn = function() {
                        try {
                            var t = {},
                                e = ge(e = kn.defineProperty) && e,
                                r = e(t, t, t) && e
                        } catch (n) {}
                        return r
                    }(),
                    Qn = ge(Qn = kn.create) && Qn,
                    Zn = ge(Zn = wn.isArray) && Zn,
                    Xn = t.isFinite,
                    ti = t.isNaN,
                    ei = ge(ei = kn.keys) && ei,
                    ri = An.max,
                    ni = An.min,
                    ii = t.parseInt,
                    oi = An.random,
                    si = {};
                si[M] = wn, si[q] = jn, si[W] = En, si[K] = On, si[G] = kn, si[J] = Pn, si[Q] = Tn, si[Z] = Fn;
                var ai = {};
                ai[M] = ai[W] = ai[J] = {
                        constructor: !0,
                        toLocaleString: !0,
                        toString: !0,
                        valueOf: !0
                    }, ai[q] = ai[Z] = {
                        constructor: !0,
                        toString: !0,
                        valueOf: !0
                    }, ai[Y] = ai[K] = ai[Q] = {
                        constructor: !0,
                        toString: !0
                    }, ai[G] = {
                        constructor: !0
                    },
                    function() {
                        for (var t = $.length; t--;) {
                            var e = $[t];
                            for (var r in ai) Mn.call(ai, r) && !Mn.call(ai[r], e) && (ai[r][e] = !1)
                        }
                    }(), r.prototype = e.prototype;
                var ui = e.support = {};
                ! function() {
                    var e = function() {
                            this.x = 1
                        },
                        r = {
                            0: 1,
                            length: 1
                        },
                        n = [];
                    e.prototype = {
                        valueOf: 1,
                        y: 1
                    };
                    for (var i in new e) n.push(i);
                    for (i in arguments);
                    ui.argsClass = Bn.call(arguments) == V, ui.argsObject = arguments.constructor == kn && !(arguments instanceof wn), ui.enumErrorProps = Wn.call(Nn, "message") || Wn.call(Nn, "name"), ui.enumPrototypes = Wn.call(e, "prototype"), ui.funcDecomp = !ge(t.WinRTError) && D.test(m), ui.funcNames = "string" == typeof On.name, ui.nonEnumArgs = 0 != i, ui.nonEnumShadows = !/valueOf/.test(n), ui.ownLast = "x" != n[0], ui.spliceObjects = (Rn.splice.call(r, 0, 1), !r[0]), ui.unindexedChars = "x" [0] + kn("x")[0] != "xx";
                    try {
                        ui.nodeClass = !(Bn.call(document) == G && !({
                            toString: 0
                        } + ""))
                    } catch (o) {
                        ui.nodeClass = !0
                    }
                }(1), e.templateSettings = {
                    escape: /<%-([\s\S]+?)%>/g,
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: I,
                    variable: "",
                    imports: {
                        _: e
                    }
                };
                var ci = function(t) {
                    var e = "var index, iterable = " + t.firstArg + ", result = " + t.init + ";\nif (!iterable) return result;\n" + t.top + ";";
                    t.array ? (e += "\nvar length = iterable.length; index = -1;\nif (" + t.array + ") {  ", ui.unindexedChars && (e += "\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "), e += "\n  while (++index < length) {\n    " + t.loop + ";\n  }\n}\nelse {  ") : ui.nonEnumArgs && (e += "\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      " + t.loop + ";\n    }\n  } else {  "), ui.enumPrototypes && (e += "\n  var skipProto = typeof iterable == 'function';\n  "), ui.enumErrorProps && (e += "\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");
                    var r = [];
                    if (ui.enumPrototypes && r.push('!(skipProto && index == "prototype")'), ui.enumErrorProps && r.push('!(skipErrorProps && (index == "message" || index == "name"))'), t.useHas && t.keys) e += "\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n", r.length && (e += "    if (" + r.join(" && ") + ") {\n  "), e += t.loop + ";    ", r.length && (e += "\n    }"), e += "\n  }  ";
                    else if (e += "\n  for (index in iterable) {\n", t.useHas && r.push("hasOwnProperty.call(iterable, index)"), r.length && (e += "    if (" + r.join(" && ") + ") {\n  "), e += t.loop + ";    ", r.length && (e += "\n    }"), e += "\n  }    ", ui.nonEnumShadows) {
                        for (e += "\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ", k = 0; 7 > k; k++) e += "\n    index = '" + t.shadowedProps[k] + "';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))", t.useHas || (e += " || (!nonEnum[index] && iterable[index] !== objectProto[index])"), e += ") {\n      " + t.loop + ";\n    }      ";
                        e += "\n  }    "
                    }
                    return (t.array || ui.nonEnumArgs) && (e += "\n}"), e += t.bottom + ";\nreturn result"
                };
                Qn || (a = function() {
                    function e() {}
                    return function(r) {
                        if (Be(r)) {
                            e.prototype = r;
                            var n = new e;
                            e.prototype = null
                        }
                        return n || t.Object()
                    }
                }());
                var li = Gn ? function(t, e) {
                    ee.value = e, Gn(t, "__bindData__", ee)
                } : un;
                ui.argsClass || (_e = function(t) {
                    return t && "object" == typeof t && "number" == typeof t.length && Mn.call(t, "callee") && !Wn.call(t, "callee") || !1
                });
                var fi = Zn || function(t) {
                        return t && "object" == typeof t && "number" == typeof t.length && Bn.call(t) == M || !1
                    },
                    hi = pe({
                        args: "object",
                        init: "[]",
                        top: "if (!(objectTypes[typeof object])) return result",
                        loop: "result.push(index)"
                    }),
                    pi = ei ? function(t) {
                        return Be(t) ? ui.enumPrototypes && "function" == typeof t || ui.nonEnumArgs && t.length && _e(t) ? hi(t) : ei(t) : []
                    } : hi,
                    di = {
                        args: "collection, callback, thisArg",
                        top: "callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",
                        array: "typeof length == 'number'",
                        keys: pi,
                        loop: "if (callback(iterable[index], index, collection) === false) return result"
                    },
                    yi = {
                        args: "object, source, guard",
                        top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
                        keys: pi,
                        loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
                        bottom: "  }\n}"
                    },
                    gi = {
                        top: "if (!objectTypes[typeof iterable]) return result;\n" + di.top,
                        array: !1
                    },
                    vi = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;"
                    },
                    mi = Te(vi),
                    _i = Tn("(" + pi(mi).join("|") + ")", "g"),
                    bi = Tn("[" + pi(vi).join("") + "]", "g"),
                    wi = pe(di),
                    ji = pe(yi, {
                        top: yi.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),
                        loop: "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"
                    }),
                    Ei = pe(yi),
                    xi = pe(di, gi, {
                        useHas: !1
                    }),
                    Oi = pe(di, gi);
                Ue(/x/) && (Ue = function(t) {
                    return "function" == typeof t && Bn.call(t) == K
                });
                var Ai = Vn ? function(t) {
                        if (!t || Bn.call(t) != G || !ui.argsClass && _e(t)) return !1;
                        var e = t.valueOf,
                            r = ge(e) && (r = Vn(e)) && Vn(r);
                        return r ? t == r || Vn(t) == r : ve(t)
                    } : ve,
                    Pi = fe(function(t, e, r) {
                        Mn.call(t, r) ? t[r] ++ : t[r] = 1
                    }),
                    ki = fe(function(t, e, r) {
                        (Mn.call(t, r) ? t[r] : t[r] = []).push(e)
                    }),
                    Ti = fe(function(t, e, r) {
                        t[r] = e
                    }),
                    Fi = sr,
                    Si = tr,
                    Ri = ge(Ri = En.now) && Ri || function() {
                        return (new En).getTime()
                    },
                    Ni = 8 == ii(P + "08") ? ii : function(t, e) {
                        return ii(ze(t) ? t.replace(U, "") : t, e || 0)
                    };
                return e.after = Lr, e.assign = ji, e.at = Qe, e.bind = $r, e.bindAll = zr, e.bindKey = Vr, e.chain = gn, e.compact = mr, e.compose = Mr, e.constant = en, e.countBy = Pi, e.create = je, e.createCallback = rn, e.curry = qr, e.debounce = Wr, e.defaults = Ei, e.defer = Yr, e.delay = Kr, e.difference = _r, e.filter = tr, e.flatten = Er, e.forEach = nr, e.forEachRight = ir, e.forIn = xi, e.forInRight = Oe, e.forOwn = Oi, e.forOwnRight = Ae, e.functions = Pe, e.groupBy = ki, e.indexBy = Ti, e.initial = Or, e.intersection = Ar, e.invert = Te, e.invoke = or, e.keys = pi, e.map = sr, e.mapValues = Me, e.max = ar, e.memoize = Jr, e.merge = qe, e.min = ur, e.omit = We, e.once = Gr, e.pairs = Ye, e.partial = Qr, e.partialRight = Zr, e.pick = Ke, e.pluck = Fi, e.property = cn, e.pull = Tr, e.range = Fr, e.reject = fr, e.remove = Sr, e.rest = Rr, e.shuffle = pr, e.sortBy = gr, e.tap = vn, e.throttle = Xr, e.times = pn, e.toArray = vr, e.transform = Je, e.union = Cr, e.uniq = Ir, e.values = Ge, e.where = Si, e.without = Ur, e.wrap = tn, e.xor = Br, e.zip = Dr, e.zipObject = Hr, e.collect = sr, e.drop = Rr, e.each = nr, e.eachRight = ir, e.extend = ji, e.methods = Pe, e.object = Hr, e.select = tr, e.tail = Rr, e.unique = Ir, e.unzip = Dr, sn(e), e.clone = be, e.cloneDeep = we, e.contains = Ze, e.escape = nn, e.every = Xe, e.find = er, e.findIndex = br, e.findKey = Ee, e.findLast = rr, e.findLastIndex = wr, e.findLastKey = xe, e.has = ke, e.identity = on, e.indexOf = xr, e.isArguments = _e, e.isArray = fi, e.isBoolean = Fe, e.isDate = Se, e.isElement = Re, e.isEmpty = Ne, e.isEqual = Ce, e.isFinite = Ie, e.isFunction = Ue, e.isNaN = De, e.isNull = He, e.isNumber = Le, e.isObject = Be, e.isPlainObject = Ai, e.isRegExp = $e, e.isString = ze, e.isUndefined = Ve, e.lastIndexOf = kr, e.mixin = sn, e.noConflict = an, e.noop = un, e.now = Ri, e.parseInt = Ni, e.random = ln, e.reduce = cr, e.reduceRight = lr, e.result = fn, e.runInContext = m, e.size = dr, e.some = yr, e.sortedIndex = Nr, e.template = hn, e.unescape = dn, e.uniqueId = yn, e.all = Xe, e.any = yr, e.detect = er, e.findWhere = er, e.foldl = cr, e.foldr = lr, e.include = Ze, e.inject = cr, sn(function() {
                    var t = {};
                    return Oi(e, function(r, n) {
                        e.prototype[n] || (t[n] = r)
                    }), t
                }(), !1), e.first = jr, e.last = Pr, e.sample = hr, e.take = jr, e.head = jr, Oi(e, function(t, n) {
                    var i = "sample" !== n;
                    e.prototype[n] || (e.prototype[n] = function(e, n) {
                        var o = this.__chain__,
                            s = t(this.__wrapped__, e, n);
                        return o || null != e && (!n || i && "function" == typeof e) ? new r(s, o) : s
                    })
                }), e.VERSION = "2.4.1", e.prototype.chain = mn, e.prototype.toString = _n, e.prototype.value = bn, e.prototype.valueOf = bn, wi(["join", "pop", "shift"], function(t) {
                    var n = Rn[t];
                    e.prototype[t] = function() {
                        var t = this.__chain__,
                            e = n.apply(this.__wrapped__, arguments);
                        return t ? new r(e, t) : e
                    }
                }), wi(["push", "reverse", "sort", "unshift"], function(t) {
                    var r = Rn[t];
                    e.prototype[t] = function() {
                        return r.apply(this.__wrapped__, arguments), this
                    }
                }), wi(["concat", "slice", "splice"], function(t) {
                    var n = Rn[t];
                    e.prototype[t] = function() {
                        return new r(n.apply(this.__wrapped__, arguments), this.__chain__)
                    }
                }), ui.spliceObjects || wi(["pop", "shift", "splice"], function(t) {
                    var n = Rn[t],
                        i = "splice" == t;
                    e.prototype[t] = function() {
                        var t = this.__chain__,
                            e = this.__wrapped__,
                            o = n.apply(e, arguments);
                        return 0 === e.length && delete e[0], t || i ? new r(o, t) : o
                    }
                }), e
            }
            var _, b = [],
                w = [],
                j = 0,
                E = {},
                x = +new Date + "",
                O = 75,
                A = 40,
                P = " 	\f ﻿\n\r\u2028\u2029 ᠎             　",
                T = /\b__p \+= '';/g,
                F = /\b(__p \+=) '' \+/g,
                S = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                R = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                N = /\w*$/,
                C = /^\s*function[ \n\r\t]+\w/,
                I = /<%=([\s\S]+?)%>/g,
                U = RegExp("^[" + P + "]*0+(?=.$)"),
                B = /($^)/,
                D = /\bthis\b/,
                H = /['\n\r\t\u2028\u2029\\]/g,
                L = ["Array", "Boolean", "Date", "Error", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
                $ = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                z = 0,
                V = "[object Arguments]",
                M = "[object Array]",
                q = "[object Boolean]",
                W = "[object Date]",
                Y = "[object Error]",
                K = "[object Function]",
                J = "[object Number]",
                G = "[object Object]",
                Q = "[object RegExp]",
                Z = "[object String]",
                X = {};
            X[K] = !1, X[V] = X[M] = X[q] = X[W] = X[J] = X[G] = X[Q] = X[Z] = !0;
            var te = {
                    leading: !1,
                    maxWait: 0,
                    trailing: !1
                },
                ee = {
                    configurable: !1,
                    enumerable: !1,
                    value: null,
                    writable: !1
                },
                re = {
                    args: "",
                    array: null,
                    bottom: "",
                    firstArg: "",
                    init: "",
                    keys: null,
                    loop: "",
                    shadowedProps: null,
                    support: null,
                    top: "",
                    useHas: !1
                },
                ne = {
                    "boolean": !1,
                    "function": !0,
                    object: !0,
                    number: !1,
                    string: !1,
                    undefined: !1
                },
                ie = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "	": "t",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                oe = ne[typeof window] && window || this,
                se = ne[typeof e] && e && !e.nodeType && e,
                ae = ne[typeof t] && t && !t.nodeType && t,
                ue = (ae && ae.exports === se && se, ne[typeof i] && i);
            !ue || ue.global !== ue && ue.window !== ue || (oe = ue);
            var ce = m();
            oe._ = ce, n = function() {
                return ce
            }.call(e, r, e, t), !(n !== _ && (t.exports = n))
        }).call(this)
    }).call(e, r(88)(t), function() {
        return this
    }())
}, function(t, e, r) {
    (function(e) {
        "use strict";

        function n(t) {
            try {
                Promise === t && (Promise = i)
            } catch (e) {}
            return t
        }
        var i;
        "undefined" != typeof Promise && (i = Promise), t.exports = function() {
            function t(e) {
                if ("function" != typeof e) throw new j("the promise constructor requires a resolver function");
                if (this.constructor !== t) throw new j("the promise constructor cannot be invoked directly");
                this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, this._settledValue = void 0, this._boundTo = void 0, e !== u && this._resolveFromResolver(e)
            }

            function i(t) {
                return t[0]
            }
            var o = r(55),
                s = r(56),
                a = r(57),
                u = function() {},
                c = {},
                l = {
                    e: null
                },
                f = r(58)(t, u),
                h = r(59)(t, u, f),
                p = r(60)(),
                d = r(61)(l),
                y = r(62),
                g = o.isArray,
                v = o.errorObj,
                m = o.tryCatch1,
                _ = o.tryCatch2,
                b = o.tryCatchApply,
                w = a.RangeError,
                j = a.TypeError,
                E = a.CancellationError,
                x = a.TimeoutError,
                O = a.OperationalError,
                A = a.originatesFromRejection,
                P = a.markAsOriginatingFromRejection,
                k = a.canAttach,
                T = o.thrower,
                F = r(63)(t),
                S = function() {
                    return new j("circular promise resolution chain")
                };
            t.prototype.bind = function(e) {
                var r = f(e, void 0),
                    n = new t(u);
                if (r instanceof t) {
                    var o = r.then(function(t) {
                            n._setBoundTo(t)
                        }),
                        s = t.all([this, o]).then(i);
                    n._follow(s)
                } else n._follow(this), n._setBoundTo(e);
                return n._propagateFrom(this, 3), n
            }, t.prototype.toString = function() {
                return "[object Promise]"
            }, t.prototype.caught = t.prototype["catch"] = function(t) {
                var e = arguments.length;
                if (e > 1) {
                    var r, n = new Array(e - 1),
                        i = 0;
                    for (r = 0; e - 1 > r; ++r) {
                        var o = arguments[r];
                        if ("function" != typeof o) {
                            var a = new j("A catch filter must be an error constructor or a filter function");
                            return this._attachExtraTrace(a), void s.invoke(this._reject, this, a)
                        }
                        n[i++] = o
                    }
                    n.length = i, t = arguments[r], this._resetTrace();
                    var u = new d(n, t, this);
                    return this._then(void 0, u.doFilter, void 0, u, void 0)
                }
                return this._then(void 0, t, void 0, void 0, void 0)
            }, t.prototype.then = function(t, e, r) {
                return this._then(t, e, r, void 0, void 0)
            }, t.prototype.done = function(t, e, r) {
                var n = this._then(t, e, r, void 0, void 0);
                n._setIsFinal()
            }, t.prototype.spread = function(t, e) {
                return this._then(t, e, void 0, c, void 0)
            }, t.prototype.isCancellable = function() {
                return !this.isResolved() && this._cancellable()
            }, t.prototype.toJSON = function() {
                var t = {
                    isFulfilled: !1,
                    isRejected: !1,
                    fulfillmentValue: void 0,
                    rejectionReason: void 0
                };
                return this.isFulfilled() ? (t.fulfillmentValue = this._settledValue, t.isFulfilled = !0) : this.isRejected() && (t.rejectionReason = this._settledValue, t.isRejected = !0), t
            }, t.prototype.all = function() {
                return new h(this).promise()
            }, t.is = function(e) {
                return e instanceof t
            }, t.all = function(t) {
                return new h(t).promise()
            }, t.prototype.error = function(t) {
                return this.caught(A, t)
            }, t.prototype._resolveFromSyncValue = function(e) {
                if (e === v) this._cleanValues(), this._setRejected(), this._settledValue = e.e, this._ensurePossibleRejectionHandled();
                else {
                    var r = f(e, void 0);
                    r instanceof t ? this._follow(r) : (this._cleanValues(), this._setFulfilled(), this._settledValue = e)
                }
            }, t.method = function(e) {
                if ("function" != typeof e) throw new j("fn must be a function");
                return function() {
                    var r;
                    switch (arguments.length) {
                        case 0:
                            r = m(e, this, void 0);
                            break;
                        case 1:
                            r = m(e, this, arguments[0]);
                            break;
                        case 2:
                            r = _(e, this, arguments[0], arguments[1]);
                            break;
                        default:
                            for (var n = arguments.length, i = new Array(n), o = 0; n > o; ++o) i[o] = arguments[o];
                            r = b(e, i, this)
                    }
                    var s = new t(u);
                    return s._setTrace(void 0), s._resolveFromSyncValue(r), s
                }
            }, t.attempt = t["try"] = function(e, r, n) {
                if ("function" != typeof e) return F("fn must be a function");
                var i = g(r) ? b(e, r, n) : m(e, n, r),
                    o = new t(u);
                return o._setTrace(void 0), o._resolveFromSyncValue(i), o
            }, t.defer = t.pending = function() {
                var e = new t(u);
                return e._setTrace(void 0), new y(e)
            }, t.bind = function(e) {
                var r = f(e, void 0),
                    n = new t(u);
                if (n._setTrace(void 0), r instanceof t) {
                    var i = r.then(function(t) {
                        n._setBoundTo(t)
                    });
                    n._follow(i)
                } else n._setBoundTo(e), n._setFulfilled();
                return n
            }, t.cast = function(e) {
                var r = f(e, void 0);
                if (!(r instanceof t)) {
                    var n = r;
                    r = new t(u), r._setTrace(void 0), r._setFulfilled(), r._cleanValues(), r._settledValue = n
                }
                return r
            }, t.resolve = t.fulfilled = t.cast, t.reject = t.rejected = function(e) {
                var r = new t(u);
                if (r._setTrace(void 0), P(e), r._cleanValues(), r._setRejected(), r._settledValue = e, !k(e)) {
                    var n = new Error(e + "");
                    r._setCarriedStackTrace(n)
                }
                return r._ensurePossibleRejectionHandled(), r
            }, t.onPossiblyUnhandledRejection = function(t) {
                p.possiblyUnhandledRejection = "function" == typeof t ? t : void 0
            };
            var R;
            t.onUnhandledRejectionHandled = function(t) {
                R = "function" == typeof t ? t : void 0
            };
            var N = !1 || !("undefined" == typeof e || "string" != typeof e.execPath || !{
                NODE_ENV: "production"
            }.BLUEBIRD_DEBUG && "development" !== {
                NODE_ENV: "production"
            }.NODE_ENV);
            t.longStackTraces = function() {
                if (s.haveItemsQueued() && N === !1) throw new Error("cannot enable long stack traces after promises have been created");
                N = p.isSupported()
            }, t.hasLongStackTraces = function() {
                return N && p.isSupported()
            }, t.prototype._then = function(e, r, n, i, o) {
                var a = void 0 !== o,
                    c = a ? o : new t(u);
                if (!a) {
                    if (N) {
                        var l = this._peekContext() === this._traceParent;
                        c._traceParent = l ? this._traceParent : this
                    }
                    c._propagateFrom(this, 7)
                }
                var f = this._addCallbacks(e, r, n, c, i);
                return this.isResolved() && s.invoke(this._queueSettleAt, this, f), c
            }, t.prototype._length = function() {
                return 262143 & this._bitField
            }, t.prototype._isFollowingOrFulfilledOrRejected = function() {
                return (939524096 & this._bitField) > 0
            }, t.prototype._isFollowing = function() {
                return 536870912 === (536870912 & this._bitField)
            }, t.prototype._setLength = function(t) {
                this._bitField = -262144 & this._bitField | 262143 & t
            }, t.prototype._setFulfilled = function() {
                this._bitField = 268435456 | this._bitField
            }, t.prototype._setRejected = function() {
                this._bitField = 134217728 | this._bitField
            }, t.prototype._setFollowing = function() {
                this._bitField = 536870912 | this._bitField
            }, t.prototype._setIsFinal = function() {
                this._bitField = 33554432 | this._bitField
            }, t.prototype._isFinal = function() {
                return (33554432 & this._bitField) > 0
            }, t.prototype._cancellable = function() {
                return (67108864 & this._bitField) > 0
            }, t.prototype._setCancellable = function() {
                this._bitField = 67108864 | this._bitField
            }, t.prototype._unsetCancellable = function() {
                this._bitField = -67108865 & this._bitField
            }, t.prototype._setRejectionIsUnhandled = function() {
                this._bitField = 2097152 | this._bitField
            }, t.prototype._unsetRejectionIsUnhandled = function() {
                this._bitField = -2097153 & this._bitField, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled())
            }, t.prototype._isRejectionUnhandled = function() {
                return (2097152 & this._bitField) > 0
            }, t.prototype._setUnhandledRejectionIsNotified = function() {
                this._bitField = 524288 | this._bitField
            }, t.prototype._unsetUnhandledRejectionIsNotified = function() {
                this._bitField = -524289 & this._bitField
            }, t.prototype._isUnhandledRejectionNotified = function() {
                return (524288 & this._bitField) > 0
            }, t.prototype._setCarriedStackTrace = function(t) {
                this._bitField = 1048576 | this._bitField, this._fulfillmentHandler0 = t
            }, t.prototype._unsetCarriedStackTrace = function() {
                this._bitField = -1048577 & this._bitField, this._fulfillmentHandler0 = void 0
            }, t.prototype._isCarryingStackTrace = function() {
                return (1048576 & this._bitField) > 0
            }, t.prototype._getCarriedStackTrace = function() {
                return this._isCarryingStackTrace() ? this._fulfillmentHandler0 : void 0
            }, t.prototype._receiverAt = function(t) {
                var e = 0 === t ? this._receiver0 : this[(t << 2) + t - 5 + 4];
                return this._isBound() && void 0 === e ? this._boundTo : e
            }, t.prototype._promiseAt = function(t) {
                return 0 === t ? this._promise0 : this[(t << 2) + t - 5 + 3]
            }, t.prototype._fulfillmentHandlerAt = function(t) {
                return 0 === t ? this._fulfillmentHandler0 : this[(t << 2) + t - 5 + 0]
            }, t.prototype._rejectionHandlerAt = function(t) {
                return 0 === t ? this._rejectionHandler0 : this[(t << 2) + t - 5 + 1]
            }, t.prototype._addCallbacks = function(t, e, r, n, i) {
                var o = this._length();
                if (o >= 262138 && (o = 0, this._setLength(0)), 0 === o) this._promise0 = n, void 0 !== i && (this._receiver0 = i), "function" != typeof t || this._isCarryingStackTrace() || (this._fulfillmentHandler0 = t), "function" == typeof e && (this._rejectionHandler0 = e), "function" == typeof r && (this._progressHandler0 = r);
                else {
                    var s = (o << 2) + o - 5;
                    this[s + 3] = n, this[s + 4] = i, this[s + 0] = "function" == typeof t ? t : void 0, this[s + 1] = "function" == typeof e ? e : void 0, this[s + 2] = "function" == typeof r ? r : void 0
                }
                return this._setLength(o + 1), o
            }, t.prototype._setProxyHandlers = function(t, e) {
                var r = this._length();
                if (r >= 262138 && (r = 0, this._setLength(0)), 0 === r) this._promise0 = e, this._receiver0 = t;
                else {
                    var n = (r << 2) + r - 5;
                    this[n + 3] = e, this[n + 4] = t, this[n + 0] = this[n + 1] = this[n + 2] = void 0
                }
                this._setLength(r + 1)
            }, t.prototype._proxyPromiseArray = function(t, e) {
                this._setProxyHandlers(t, e)
            }, t.prototype._proxyPromise = function(t) {
                t._setProxied(), this._setProxyHandlers(t, -15)
            }, t.prototype._setBoundTo = function(t) {
                void 0 !== t ? (this._bitField = 8388608 | this._bitField, this._boundTo = t) : this._bitField = -8388609 & this._bitField
            }, t.prototype._isBound = function() {
                return 8388608 === (8388608 & this._bitField)
            }, t.prototype._resolveFromResolver = function(t) {
                function e(t) {
                    n._tryFollow(t) || n._fulfill(t)
                }

                function r(t) {
                    var e = k(t) ? t : new Error(t + "");
                    n._attachExtraTrace(e), P(t), n._reject(t, e === t ? void 0 : e)
                }
                var n = this;
                this._setTrace(void 0), this._pushContext();
                var i = _(t, void 0, e, r);
                if (this._popContext(), void 0 !== i && i === v) {
                    var o = i.e,
                        s = k(o) ? o : new Error(o + "");
                    n._reject(o, s)
                }
            }, t.prototype._spreadSlowCase = function(t, e, r, n) {
                var i = new h(r).promise(),
                    o = i._then(function() {
                        return t.apply(n, arguments)
                    }, void 0, void 0, c, void 0);
                e._follow(o)
            }, t.prototype._callSpread = function(e, r, n) {
                var i = this._boundTo;
                if (g(n))
                    for (var o = 0, s = n.length; s > o; ++o)
                        if (f(n[o], void 0) instanceof t) return void this._spreadSlowCase(e, r, n, i);
                return r._pushContext(), b(e, n, i)
            }, t.prototype._callHandler = function(t, e, r, n) {
                var i;
                return e !== c || this.isRejected() ? (r._pushContext(), i = m(t, e, n)) : i = this._callSpread(t, r, n), r._popContext(), i
            }, t.prototype._settlePromiseFromHandler = function(e, r, n, i) {
                if (!(i instanceof t)) return void e.call(r, n, i);
                var o = this._callHandler(e, r, i, n);
                if (!i._isFollowing())
                    if (o === v || o === i || o === l) {
                        var s = o === i ? S() : o.e,
                            a = k(s) ? s : new Error(s + "");
                        o !== l && i._attachExtraTrace(a), i._rejectUnchecked(s, a)
                    } else {
                        var u = f(o, i);
                        if (u instanceof t) {
                            if (u.isRejected() && !u._isCarryingStackTrace() && !k(u._settledValue)) {
                                var a = new Error(u._settledValue + "");
                                i._attachExtraTrace(a), u._setCarriedStackTrace(a)
                            }
                            i._follow(u), i._propagateFrom(u, 1)
                        } else i._fulfillUnchecked(o)
                    }
            }, t.prototype._follow = function(t) {
                this._setFollowing(), t.isPending() ? (this._propagateFrom(t, 1), t._proxyPromise(this)) : t.isFulfilled() ? this._fulfillUnchecked(t._settledValue) : this._rejectUnchecked(t._settledValue, t._getCarriedStackTrace()), t._isRejectionUnhandled() && t._unsetRejectionIsUnhandled(), N && null == t._traceParent && (t._traceParent = this)
            }, t.prototype._tryFollow = function(e) {
                if (this._isFollowingOrFulfilledOrRejected() || e === this) return !1;
                var r = f(e, void 0);
                return r instanceof t ? (this._follow(r), !0) : !1
            }, t.prototype._resetTrace = function() {
                N && (this._trace = new p(void 0 === this._peekContext()))
            }, t.prototype._setTrace = function(t) {
                if (N) {
                    var e = this._peekContext();
                    this._traceParent = e;
                    var r = void 0 === e;
                    this._trace = void 0 !== t && t._traceParent === e ? t._trace : new p(r)
                }
                return this
            }, t.prototype._attachExtraTrace = function(t) {
                if (N) {
                    var e = this,
                        r = t.stack;
                    r = "string" == typeof r ? r.split("\n") : [], p.protectErrorMessageNewlines(r);
                    for (var n = 1, i = 1; null != e && null != e._trace;) r = p.combine(r, e._trace.stack.split("\n")), e = e._traceParent, i++;
                    var o = Error.stackTraceLimit || 10,
                        s = (o + n) * i,
                        a = r.length;
                    a > s && (r.length = s), a > 0 && (r[0] = r[0].split("\x00").join("\n")), t.stack = r.length <= n ? "(No stack trace)" : r.join("\n")
                }
            }, t.prototype._cleanValues = function() {
                this._cancellable() && (this._cancellationParent = void 0)
            }, t.prototype._propagateFrom = function(t, e) {
                (1 & e) > 0 && t._cancellable() && (this._setCancellable(), this._cancellationParent = t), (4 & e) > 0 && this._setBoundTo(t._boundTo), (2 & e) > 0 && this._setTrace(t)
            }, t.prototype._fulfill = function(t) {
                this._isFollowingOrFulfilledOrRejected() || this._fulfillUnchecked(t)
            }, t.prototype._reject = function(t, e) {
                this._isFollowingOrFulfilledOrRejected() || this._rejectUnchecked(t, e)
            }, t.prototype._settlePromiseAt = function(e) {
                var r = this.isFulfilled() ? this._fulfillmentHandlerAt(e) : this._rejectionHandlerAt(e),
                    n = this._settledValue,
                    i = this._receiverAt(e),
                    o = this._promiseAt(e);
                if ("function" == typeof r) this._settlePromiseFromHandler(r, i, n, o);
                else {
                    var s = !1,
                        a = this.isFulfilled();
                    void 0 !== i && (i instanceof t && i._isProxied() ? (i._unsetProxied(), a ? i._fulfillUnchecked(n) : i._rejectUnchecked(n, this._getCarriedStackTrace()), s = !0) : i instanceof h && (a ? i._promiseFulfilled(n, o) : i._promiseRejected(n, o), s = !0)), s || (a ? o._fulfill(n) : o._reject(n, this._getCarriedStackTrace()))
                }
                e >= 4 && this._queueGC()
            }, t.prototype._isProxied = function() {
                return 4194304 === (4194304 & this._bitField)
            }, t.prototype._setProxied = function() {
                this._bitField = 4194304 | this._bitField
            }, t.prototype._unsetProxied = function() {
                this._bitField = -4194305 & this._bitField
            }, t.prototype._isGcQueued = function() {
                return -1073741824 === (-1073741824 & this._bitField)
            }, t.prototype._setGcQueued = function() {
                this._bitField = -1073741824 | this._bitField
            }, t.prototype._unsetGcQueued = function() {
                this._bitField = 1073741823 & this._bitField
            }, t.prototype._queueGC = function() {
                this._isGcQueued() || (this._setGcQueued(), s.invokeLater(this._gc, this, void 0))
            }, t.prototype._gc = function() {
                for (var t = 5 * this._length() - 5, e = 0; t > e; e++) delete this[e];
                this._clearFirstHandlerData(), this._setLength(0), this._unsetGcQueued()
            }, t.prototype._clearFirstHandlerData = function() {
                this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0
            }, t.prototype._queueSettleAt = function(t) {
                this._isRejectionUnhandled() && this._unsetRejectionIsUnhandled(), s.invoke(this._settlePromiseAt, this, t)
            }, t.prototype._fulfillUnchecked = function(t) {
                if (this.isPending()) {
                    if (t === this) {
                        var e = S();
                        return this._attachExtraTrace(e), this._rejectUnchecked(e, void 0)
                    }
                    this._cleanValues(), this._setFulfilled(), this._settledValue = t;
                    var r = this._length();
                    r > 0 && s.invoke(this._settlePromises, this, r)
                }
            }, t.prototype._rejectUncheckedCheckError = function(t) {
                var e = k(t) ? t : new Error(t + "");
                this._rejectUnchecked(t, e === t ? void 0 : e)
            }, t.prototype._rejectUnchecked = function(t, e) {
                if (this.isPending()) {
                    if (t === this) {
                        var r = S();
                        return this._attachExtraTrace(r), this._rejectUnchecked(r)
                    }
                    if (this._cleanValues(), this._setRejected(), this._settledValue = t, this._isFinal()) return void s.invokeLater(T, void 0, void 0 === e ? t : e);
                    var n = this._length();
                    void 0 !== e && this._setCarriedStackTrace(e), n > 0 ? s.invoke(this._rejectPromises, this, null) : this._ensurePossibleRejectionHandled()
                }
            }, t.prototype._rejectPromises = function() {
                this._settlePromises(), this._unsetCarriedStackTrace()
            }, t.prototype._settlePromises = function() {
                for (var t = this._length(), e = 0; t > e; e++) this._settlePromiseAt(e)
            }, t.prototype._ensurePossibleRejectionHandled = function() {
                this._setRejectionIsUnhandled(), void 0 !== p.possiblyUnhandledRejection && s.invokeLater(this._notifyUnhandledRejection, this, void 0)
            }, t.prototype._notifyUnhandledRejectionIsHandled = function() {
                "function" == typeof R && s.invokeLater(R, void 0, this)
            }, t.prototype._notifyUnhandledRejection = function() {
                if (this._isRejectionUnhandled()) {
                    var t = this._settledValue,
                        e = this._getCarriedStackTrace();
                    this._setUnhandledRejectionIsNotified(), void 0 !== e && (this._unsetCarriedStackTrace(), t = e), "function" == typeof p.possiblyUnhandledRejection && p.possiblyUnhandledRejection(t, this)
                }
            };
            var C = [];
            return t.prototype._peekContext = function() {
                var t = C.length - 1;
                return t >= 0 ? C[t] : void 0
            }, t.prototype._pushContext = function() {
                N && C.push(this)
            }, t.prototype._popContext = function() {
                N && C.pop()
            }, t.noConflict = function() {
                return n(t)
            }, t.setScheduler = function(t) {
                if ("function" != typeof t) throw new j("fn must be a function");
                s._schedule = t
            }, p.isSupported() || (t.longStackTraces = function() {}, N = !1), t._makeSelfResolutionError = S, r(64)(t, l, f), r(65)(t), r(66)(t), r(67)(t, h, f, u), t.RangeError = w, t.CancellationError = E, t.TimeoutError = x, t.TypeError = j, t.OperationalError = O, t.RejectionError = O, t.AggregateError = a.AggregateError, o.toFastProperties(t), o.toFastProperties(t.prototype), t.Promise = t, r(68)(t, u, f), r(69)(t, u, f), r(70)(t), r(71)(t, F, u, f), r(72)(t, h, F, f, u), r(73)(t), r(74)(t, u), r(75)(t, h, f), r(76)(t, h, F, f, u), r(77)(t, h), r(78)(t, h, F), r(79)(t, h), r(80)(t, u), r(81)(t, u), r(82)(t, h), r(83)(t, u), r(84)(t, F, f), t.prototype = t.prototype, t
        }
    }).call(e, r(86))
}, function(t, e, r) {
    function n(t, r) {
        var n = {
            seen: [],
            stylize: o
        };
        return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), g(r) ? n.showHidden = r : r && e._extend(n, r), m(n.showHidden) && (n.showHidden = !1), m(n.depth) && (n.depth = 2), m(n.colors) && (n.colors = !1), m(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = i), a(n, t, n.depth)
    }

    function i(t, e) {
        var r = n.styles[e];
        return r ? "[" + n.colors[r][0] + "m" + t + "[" + n.colors[r][1] + "m" : t
    }

    function o(t) {
        return t
    }

    function s(t) {
        var e = {};
        return t.forEach(function(t) {
            e[t] = !0
        }), e
    }

    function a(t, r, n) {
        if (t.customInspect && r && _(r.inspect) && r.inspect !== e.inspect && (!r.constructor || r.constructor.prototype !== r)) {
            var i = r.inspect(n, t);
            return b(i) || (i = a(t, i, n)), i
        }
        var o = u(t, r);
        if (o) return o;
        var d = Object.keys(r),
            y = s(d);
        t.showHidden && (d = Object.getOwnPropertyNames(r));
        var v, m = r;
        try {
            x(r) || (m = r.valueOf())
        } catch (j) {}
        if (b(m) && (d = d.filter(function(t) {
                return !(t >= 0 && t < m.length)
            })), O(r)) return l(r);
        if (0 === d.length) {
            if (_(r)) {
                var P = r.name ? ": " + r.name : "";
                return t.stylize("[Function" + P + "]", "special")
            }
            if (E(r)) return t.stylize(RegExp.prototype.toString.call(r), "regexp");
            if (x(r)) return t.stylize(Date.prototype.toString.call(r), "date");
            if (b(m)) return v = c(t, m), t.stylize("[String: " + v + "]", "string");
            if (w(m)) return v = c(t, m), t.stylize("[Number: " + v + "]", "number");
            if (g(m)) return v = c(t, m), t.stylize("[Boolean: " + v + "]", "boolean")
        }
        var k = "",
            T = !1,
            F = ["{", "}"];
        if (A(r) && (T = !0, F = ["[", "]"]), _(r)) {
            var S = r.name ? ": " + r.name : "";
            k = " [Function" + S + "]"
        }
        if (E(r) && (k = " " + RegExp.prototype.toString.call(r)), x(r) && (k = " " + Date.prototype.toUTCString.call(r)), O(r) && (k = " " + l(r)), b(m) && (v = c(t, m), k = " [String: " + v + "]"), w(m) && (v = c(t, m), k = " [Number: " + v + "]"), g(m) && (v = c(t, m), k = " [Boolean: " + v + "]"), 0 === d.length && (!T || 0 === r.length)) return F[0] + k + F[1];
        if (0 > n) return E(r) ? t.stylize(RegExp.prototype.toString.call(r), "regexp") : t.stylize("[Object]", "special");
        t.seen.push(r);
        var R;
        return R = T ? f(t, r, n, y, d) : d.map(function(e) {
            return h(t, r, n, y, e, T)
        }), t.seen.pop(), p(R, k, F)
    }

    function u(t, e) {
        if (m(e)) return t.stylize("undefined", "undefined");
        if (b(e)) {
            var r = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return t.stylize(r, "string")
        }
        return w(e) ? 0 === e && 0 > 1 / e ? t.stylize("-0", "number") : t.stylize("" + e, "number") : g(e) ? t.stylize("" + e, "boolean") : j(e) ? t.stylize("null", "null") : void 0
    }

    function c(t, e) {
        var r = t.stylize;
        t.stylize = o;
        var n = u(t, e);
        return t.stylize = r, n
    }

    function l(t) {
        return "[" + Error.prototype.toString.call(t) + "]"
    }

    function f(t, e, r, n, i) {
        for (var o = [], s = 0, a = e.length; a > s; ++s) o.push(d(e, String(s)) ? h(t, e, r, n, String(s), !0) : "");
        return i.forEach(function(i) {
            i.match(/^\d+$/) || o.push(h(t, e, r, n, i, !0))
        }), o
    }

    function h(t, e, r, n, i, o) {
        var s, u, c;
        if (c = Object.getOwnPropertyDescriptor(e, i) || {
                value: e[i]
            }, c.get ? u = c.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : c.set && (u = t.stylize("[Setter]", "special")), d(n, i) || (s = "[" + i + "]"), u || (t.seen.indexOf(c.value) < 0 ? (u = j(r) ? a(t, c.value, null) : a(t, c.value, r - 1), u.indexOf("\n") > -1 && (u = o ? u.split("\n").map(function(t) {
                return " " + t
            }).join("\n").substr(2) : "\n" + u.split("\n").map(function(t) {
                return " " + t
            }).join("\n"))) : u = t.stylize("[Circular]", "special")), m(s)) {
            if (o && i.match(/^\d+$/)) return u;
            s = JSON.stringify("" + i), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'").replace(/\\\\/g, "\\"), s = t.stylize(s, "string"))
        }
        return s + ": " + u
    }

    function p(t, e, r) {
        var n = t.reduce(function(t, e) {
            return t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
        }, 0);
        return n > 60 ? r[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n ") + " " + r[1] : r[0] + e + " " + t.join(", ") + " " + r[1]
    }

    function d(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    var y = r(31),
        g = y.isBoolean,
        v = y.isObject,
        m = y.isUndefined,
        _ = y.isFunction,
        b = y.isString,
        w = y.isNumber,
        j = y.isNull,
        E = y.isRegExp,
        x = y.isDate,
        O = y.isError,
        A = y.isArray;
    e.inspect = n, n.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39]
    }, n.styles = {
        special: "cyan",
        number: "yellow",
        "boolean": "yellow",
        undefined: "grey",
        "null": "bold",
        string: "green",
        date: "magenta",
        regexp: "red"
    }, e._extend = function(t, e) {
        if (!e || !v(e)) return t;
        for (var r = Object.keys(e), n = r.length; n--;) t[r[n]] = e[r[n]];
        return t
    }
}, function(t, e, r) {
    "use strict";
    if (!Array.isArray) {
        var n = Object.prototype.toString();
        Array.isArray = function(t) {
            return "[object Array]" === n.call(t) ? !0 : "function" == typeof t.slice && "number" == typeof t.length ? !0 : !1
        }
    }
    window.noder = r(27)
}, function(t) {
    "use strict";
    t.exports.merge = function(t, e) {
        if (t && e)
            for (var r in e) t[r] = e[r];
        return t
    }, t.exports.mergeRecursive = function(t) {
        var e = arguments.length;
        if (2 > e) throw new Error("There should be at least 2 arguments passed to utils.mergeRecursive()");
        for (var r = 1; e > r; r++)
            for (var n in arguments[r]) t[n] = t[n] && "object" == typeof t[n] ? this.mergeRecursive(t[n], arguments[r][n]) : arguments[r][n];
        return t
    }
}, function(t, e, r) {
    function n(t, e) {
        if (t === e) return !0;
        if (o.isBuffer(t) && o.isBuffer(e)) {
            if (t.length != e.length) return !1;
            for (var r = 0; r < t.length; r++)
                if (t[r] !== e[r]) return !1;
            return !0
        }
        return o.isDate(t) && o.isDate(e) ? t.getTime() === e.getTime() : o.isRegExp(t) && o.isRegExp(e) ? t.source === e.source && t.global === e.global && t.multiline === e.multiline && t.lastIndex === e.lastIndex && t.ignoreCase === e.ignoreCase : o.isObject(t) || o.isObject(e) ? i(t, e) : t == e
    }

    function i(t, e) {
            if (o.isNullOrUndefined(t) || o.isNullOrUndefined(e)) return !1;
            if (t.prototype !== e.prototype) return !1;
            if (o.isArguments(t)) return o.isArguments(e) ? (t = s.call(t), e = s.call(e), n(t, e)) : !1;
            try {
                var r, i, a = Object.keys(t),
                    u = Object.keys(e)
            } catch (c) {
                return !1
            }
            if (a.length != u.length) return !1;
            for (a.sort(), u.sort(), i = a.length - 1; i >= 0; i--)
                if (a[i] != u[i]) return !1;
            for (i = a.length - 1; i >= 0; i--)
                if (r = a[i], !n(t[r], e[r])) return !1;
            return !0
        }
        /*!
         * Should
         * Copyright(c) 2010-2014 TJ Holowaychuk <tj@vision-media.ca>
         * MIT Licensed
         */
    var o = r(31);
    t.exports = n;
    var s = Array.prototype.slice
}, function(t) {
    t.exports = function(t) {
        return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
    }
}, function(t, e, r) {
    (function(t) {
        function t(e, r, n) {
            if (!(this instanceof t)) return new t(e, r, n);
            var i, o = typeof e;
            if ("number" === o) i = e > 0 ? e >>> 0 : 0;
            else if ("string" === o) "base64" === r && (e = j(e)), i = t.byteLength(e, r);
            else {
                if ("object" !== o || null === e) throw new TypeError("must start with number, buffer, array or string");
                "Buffer" === e.type && C(e.data) && (e = e.data), i = +e.length > 0 ? Math.floor(+e.length) : 0
            }
            if (this.length > I) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + I.toString(16) + " bytes");
            var s;
            t.TYPED_ARRAY_SUPPORT ? s = t._augment(new Uint8Array(i)) : (s = this, s.length = i, s._isBuffer = !0);
            var a;
            if (t.TYPED_ARRAY_SUPPORT && "number" == typeof e.byteLength) s._set(e);
            else if (x(e))
                if (t.isBuffer(e))
                    for (a = 0; i > a; a++) s[a] = e.readUInt8(a);
                else
                    for (a = 0; i > a; a++) s[a] = (e[a] % 256 + 256) % 256;
            else if ("string" === o) s.write(e, 0, r);
            else if ("number" === o && !t.TYPED_ARRAY_SUPPORT && !n)
                for (a = 0; i > a; a++) s[a] = 0;
            return s
        }

        function n(t, e, r, n) {
            r = Number(r) || 0;
            var i = t.length - r;
            n ? (n = Number(n), n > i && (n = i)) : n = i;
            var o = e.length;
            if (o % 2 !== 0) throw new Error("Invalid hex string");
            n > o / 2 && (n = o / 2);
            for (var s = 0; n > s; s++) {
                var a = parseInt(e.substr(2 * s, 2), 16);
                if (isNaN(a)) throw new Error("Invalid hex string");
                t[r + s] = a
            }
            return s
        }

        function i(t, e, r, n) {
            var i = F(A(e), t, r, n);
            return i
        }

        function o(t, e, r, n) {
            var i = F(P(e), t, r, n);
            return i
        }

        function s(t, e, r, n) {
            return o(t, e, r, n)
        }

        function a(t, e, r, n) {
            var i = F(T(e), t, r, n);
            return i
        }

        function u(t, e, r, n) {
            var i = F(k(e), t, r, n);
            return i
        }

        function c(t, e, r) {
            return R.fromByteArray(0 === e && r === t.length ? t : t.slice(e, r))
        }

        function l(t, e, r) {
            var n = "",
                i = "";
            r = Math.min(t.length, r);
            for (var o = e; r > o; o++) t[o] <= 127 ? (n += S(i) + String.fromCharCode(t[o]), i = "") : i += "%" + t[o].toString(16);
            return n + S(i)
        }

        function f(t, e, r) {
            var n = "";
            r = Math.min(t.length, r);
            for (var i = e; r > i; i++) n += String.fromCharCode(t[i]);
            return n
        }

        function h(t, e, r) {
            return f(t, e, r)
        }

        function p(t, e, r) {
            var n = t.length;
            (!e || 0 > e) && (e = 0), (!r || 0 > r || r > n) && (r = n);
            for (var i = "", o = e; r > o; o++) i += O(t[o]);
            return i
        }

        function d(t, e, r) {
            for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
            return i
        }

        function y(t, e, r) {
            if (t % 1 !== 0 || 0 > t) throw new RangeError("offset is not uint");
            if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
        }

        function g(e, r, n, i, o, s) {
            if (!t.isBuffer(e)) throw new TypeError("buffer must be a Buffer instance");
            if (r > o || s > r) throw new TypeError("value is out of bounds");
            if (n + i > e.length) throw new TypeError("index out of range")
        }

        function v(t, e, r, n) {
            0 > e && (e = 65535 + e + 1);
            for (var i = 0, o = Math.min(t.length - r, 2); o > i; i++) t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
        }

        function m(t, e, r, n) {
            0 > e && (e = 4294967295 + e + 1);
            for (var i = 0, o = Math.min(t.length - r, 4); o > i; i++) t[r + i] = e >>> 8 * (n ? i : 3 - i) & 255
        }

        function _(t, e, r, n, i, o) {
            if (e > i || o > e) throw new TypeError("value is out of bounds");
            if (r + n > t.length) throw new TypeError("index out of range")
        }

        function b(t, e, r, n, i) {
            return i || _(t, e, r, 4, 3.4028234663852886e38, -3.4028234663852886e38), N.write(t, e, r, n, 23, 4), r + 4
        }

        function w(t, e, r, n, i) {
            return i || _(t, e, r, 8, 1.7976931348623157e308, -1.7976931348623157e308), N.write(t, e, r, n, 52, 8), r + 8
        }

        function j(t) {
            for (t = E(t).replace(B, ""); t.length % 4 !== 0;) t += "=";
            return t
        }

        function E(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }

        function x(e) {
            return C(e) || t.isBuffer(e) || e && "object" == typeof e && "number" == typeof e.length
        }

        function O(t) {
            return 16 > t ? "0" + t.toString(16) : t.toString(16)
        }

        function A(t) {
            for (var e = [], r = 0; r < t.length; r++) {
                var n = t.charCodeAt(r);
                if (127 >= n) e.push(n);
                else {
                    var i = r;
                    n >= 55296 && 57343 >= n && r++;
                    for (var o = encodeURIComponent(t.slice(i, r + 1)).substr(1).split("%"), s = 0; s < o.length; s++) e.push(parseInt(o[s], 16))
                }
            }
            return e
        }

        function P(t) {
            for (var e = [], r = 0; r < t.length; r++) e.push(255 & t.charCodeAt(r));
            return e
        }

        function k(t) {
            for (var e, r, n, i = [], o = 0; o < t.length; o++) e = t.charCodeAt(o), r = e >> 8, n = e % 256, i.push(n), i.push(r);
            return i
        }

        function T(t) {
            return R.toByteArray(t)
        }

        function F(t, e, r, n) {
            for (var i = 0; n > i && !(i + r >= e.length || i >= t.length); i++) e[i + r] = t[i];
            return i
        }

        function S(t) {
                try {
                    return decodeURIComponent(t)
                } catch (e) {
                    return String.fromCharCode(65533)
                }
            }
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */
        var R = r(94),
            N = r(93),
            C = r(92);
        e.Buffer = t, e.SlowBuffer = t, e.INSPECT_MAX_BYTES = 50, t.poolSize = 8192;
        var I = 1073741823;
        t.TYPED_ARRAY_SUPPORT = function() {
            try {
                var t = new ArrayBuffer(0),
                    e = new Uint8Array(t);
                return e.foo = function() {
                    return 42
                }, 42 === e.foo() && "function" == typeof e.subarray && 0 === new Uint8Array(1).subarray(1, 1).byteLength
            } catch (r) {
                return !1
            }
        }(), t.isBuffer = function(t) {
            return !(null == t || !t._isBuffer)
        }, t.compare = function(e, r) {
            if (!t.isBuffer(e) || !t.isBuffer(r)) throw new TypeError("Arguments must be Buffers");
            for (var n = e.length, i = r.length, o = 0, s = Math.min(n, i); s > o && e[o] === r[o]; o++);
            return o !== s && (n = e[o], i = r[o]), i > n ? -1 : n > i ? 1 : 0
        }, t.isEncoding = function(t) {
            switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "raw":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, t.concat = function(e, r) {
            if (!C(e)) throw new TypeError("Usage: Buffer.concat(list[, length])");
            if (0 === e.length) return new t(0);
            if (1 === e.length) return e[0];
            var n;
            if (void 0 === r)
                for (r = 0, n = 0; n < e.length; n++) r += e[n].length;
            var i = new t(r),
                o = 0;
            for (n = 0; n < e.length; n++) {
                var s = e[n];
                s.copy(i, o), o += s.length
            }
            return i
        }, t.byteLength = function(t, e) {
            var r;
            switch (t += "", e || "utf8") {
                case "ascii":
                case "binary":
                case "raw":
                    r = t.length;
                    break;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    r = 2 * t.length;
                    break;
                case "hex":
                    r = t.length >>> 1;
                    break;
                case "utf8":
                case "utf-8":
                    r = A(t).length;
                    break;
                case "base64":
                    r = T(t).length;
                    break;
                default:
                    r = t.length
            }
            return r
        }, t.prototype.length = void 0, t.prototype.parent = void 0, t.prototype.toString = function(t, e, r) {
            var n = !1;
            if (e >>>= 0, r = void 0 === r || 1 / 0 === r ? this.length : r >>> 0, t || (t = "utf8"), 0 > e && (e = 0), r > this.length && (r = this.length), e >= r) return "";
            for (;;) switch (t) {
                case "hex":
                    return p(this, e, r);
                case "utf8":
                case "utf-8":
                    return l(this, e, r);
                case "ascii":
                    return f(this, e, r);
                case "binary":
                    return h(this, e, r);
                case "base64":
                    return c(this, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return d(this, e, r);
                default:
                    if (n) throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(), n = !0
            }
        }, t.prototype.equals = function(e) {
            if (!t.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return 0 === t.compare(this, e)
        }, t.prototype.inspect = function() {
            var t = "",
                r = e.INSPECT_MAX_BYTES;
            return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">"
        }, t.prototype.compare = function(e) {
            if (!t.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return t.compare(this, e)
        }, t.prototype.get = function(t) {
            return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(t)
        }, t.prototype.set = function(t, e) {
            return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(t, e)
        }, t.prototype.write = function(t, e, r, c) {
            if (isFinite(e)) isFinite(r) || (c = r, r = void 0);
            else {
                var l = c;
                c = e, e = r, r = l
            }
            e = Number(e) || 0;
            var f = this.length - e;
            r ? (r = Number(r), r > f && (r = f)) : r = f, c = String(c || "utf8").toLowerCase();
            var h;
            switch (c) {
                case "hex":
                    h = n(this, t, e, r);
                    break;
                case "utf8":
                case "utf-8":
                    h = i(this, t, e, r);
                    break;
                case "ascii":
                    h = o(this, t, e, r);
                    break;
                case "binary":
                    h = s(this, t, e, r);
                    break;
                case "base64":
                    h = a(this, t, e, r);
                    break;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    h = u(this, t, e, r);
                    break;
                default:
                    throw new TypeError("Unknown encoding: " + c)
            }
            return h
        }, t.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }, t.prototype.slice = function(e, r) {
            var n = this.length;
            if (e = ~~e, r = void 0 === r ? n : ~~r, 0 > e ? (e += n, 0 > e && (e = 0)) : e > n && (e = n), 0 > r ? (r += n, 0 > r && (r = 0)) : r > n && (r = n), e > r && (r = e), t.TYPED_ARRAY_SUPPORT) return t._augment(this.subarray(e, r));
            for (var i = r - e, o = new t(i, void 0, !0), s = 0; i > s; s++) o[s] = this[s + e];
            return o
        }, t.prototype.readUInt8 = function(t, e) {
            return e || y(t, 1, this.length), this[t]
        }, t.prototype.readUInt16LE = function(t, e) {
            return e || y(t, 2, this.length), this[t] | this[t + 1] << 8
        }, t.prototype.readUInt16BE = function(t, e) {
            return e || y(t, 2, this.length), this[t] << 8 | this[t + 1]
        }, t.prototype.readUInt32LE = function(t, e) {
            return e || y(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
        }, t.prototype.readUInt32BE = function(t, e) {
            return e || y(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
        }, t.prototype.readInt8 = function(t, e) {
            return e || y(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
        }, t.prototype.readInt16LE = function(t, e) {
            e || y(t, 2, this.length);
            var r = this[t] | this[t + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, t.prototype.readInt16BE = function(t, e) {
            e || y(t, 2, this.length);
            var r = this[t + 1] | this[t] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, t.prototype.readInt32LE = function(t, e) {
            return e || y(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
        }, t.prototype.readInt32BE = function(t, e) {
            return e || y(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
        }, t.prototype.readFloatLE = function(t, e) {
            return e || y(t, 4, this.length), N.read(this, t, !0, 23, 4)
        }, t.prototype.readFloatBE = function(t, e) {
            return e || y(t, 4, this.length), N.read(this, t, !1, 23, 4)
        }, t.prototype.readDoubleLE = function(t, e) {
            return e || y(t, 8, this.length), N.read(this, t, !0, 52, 8)
        }, t.prototype.readDoubleBE = function(t, e) {
            return e || y(t, 8, this.length), N.read(this, t, !1, 52, 8)
        }, t.prototype.writeUInt8 = function(e, r, n) {
            return e = +e, r >>>= 0, n || g(this, e, r, 1, 255, 0), t.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[r] = e, r + 1
        }, t.prototype.writeUInt16LE = function(e, r, n) {
            return e = +e, r >>>= 0, n || g(this, e, r, 2, 65535, 0), t.TYPED_ARRAY_SUPPORT ? (this[r] = e, this[r + 1] = e >>> 8) : v(this, e, r, !0), r + 2
        }, t.prototype.writeUInt16BE = function(e, r, n) {
            return e = +e, r >>>= 0, n || g(this, e, r, 2, 65535, 0), t.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 8, this[r + 1] = e) : v(this, e, r, !1), r + 2
        }, t.prototype.writeUInt32LE = function(e, r, n) {
            return e = +e, r >>>= 0, n || g(this, e, r, 4, 4294967295, 0), t.TYPED_ARRAY_SUPPORT ? (this[r + 3] = e >>> 24, this[r + 2] = e >>> 16, this[r + 1] = e >>> 8, this[r] = e) : m(this, e, r, !0), r + 4
        }, t.prototype.writeUInt32BE = function(e, r, n) {
            return e = +e, r >>>= 0, n || g(this, e, r, 4, 4294967295, 0), t.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = e) : m(this, e, r, !1), r + 4
        }, t.prototype.writeInt8 = function(e, r, n) {
            return e = +e, r >>>= 0, n || g(this, e, r, 1, 127, -128), t.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), 0 > e && (e = 255 + e + 1), this[r] = e, r + 1
        }, t.prototype.writeInt16LE = function(e, r, n) {
            return e = +e, r >>>= 0, n || g(this, e, r, 2, 32767, -32768), t.TYPED_ARRAY_SUPPORT ? (this[r] = e, this[r + 1] = e >>> 8) : v(this, e, r, !0), r + 2
        }, t.prototype.writeInt16BE = function(e, r, n) {
            return e = +e, r >>>= 0, n || g(this, e, r, 2, 32767, -32768), t.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 8, this[r + 1] = e) : v(this, e, r, !1), r + 2
        }, t.prototype.writeInt32LE = function(e, r, n) {
            return e = +e, r >>>= 0, n || g(this, e, r, 4, 2147483647, -2147483648), t.TYPED_ARRAY_SUPPORT ? (this[r] = e, this[r + 1] = e >>> 8, this[r + 2] = e >>> 16, this[r + 3] = e >>> 24) : m(this, e, r, !0), r + 4
        }, t.prototype.writeInt32BE = function(e, r, n) {
            return e = +e, r >>>= 0, n || g(this, e, r, 4, 2147483647, -2147483648), 0 > e && (e = 4294967295 + e + 1), t.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = e) : m(this, e, r, !1), r + 4
        }, t.prototype.writeFloatLE = function(t, e, r) {
            return b(this, t, e, !0, r)
        }, t.prototype.writeFloatBE = function(t, e, r) {
            return b(this, t, e, !1, r)
        }, t.prototype.writeDoubleLE = function(t, e, r) {
            return w(this, t, e, !0, r)
        }, t.prototype.writeDoubleBE = function(t, e, r) {
            return w(this, t, e, !1, r)
        }, t.prototype.copy = function(e, r, n, i) {
            var o = this;
            if (n || (n = 0), i || 0 === i || (i = this.length), r || (r = 0), i !== n && 0 !== e.length && 0 !== o.length) {
                if (n > i) throw new TypeError("sourceEnd < sourceStart");
                if (0 > r || r >= e.length) throw new TypeError("targetStart out of bounds");
                if (0 > n || n >= o.length) throw new TypeError("sourceStart out of bounds");
                if (0 > i || i > o.length) throw new TypeError("sourceEnd out of bounds");
                i > this.length && (i = this.length), e.length - r < i - n && (i = e.length - r + n);
                var s = i - n;
                if (100 > s || !t.TYPED_ARRAY_SUPPORT)
                    for (var a = 0; s > a; a++) e[a + r] = this[a + n];
                else e._set(this.subarray(n, n + s), r)
            }
        }, t.prototype.fill = function(t, e, r) {
            if (t || (t = 0), e || (e = 0), r || (r = this.length), e > r) throw new TypeError("end < start");
            if (r !== e && 0 !== this.length) {
                if (0 > e || e >= this.length) throw new TypeError("start out of bounds");
                if (0 > r || r > this.length) throw new TypeError("end out of bounds");
                var n;
                if ("number" == typeof t)
                    for (n = e; r > n; n++) this[n] = t;
                else {
                    var i = A(t.toString()),
                        o = i.length;
                    for (n = e; r > n; n++) this[n] = i[n % o]
                }
                return this
            }
        }, t.prototype.toArrayBuffer = function() {
            if ("undefined" != typeof Uint8Array) {
                if (t.TYPED_ARRAY_SUPPORT) return new t(this).buffer;
                for (var e = new Uint8Array(this.length), r = 0, n = e.length; n > r; r += 1) e[r] = this[r];
                return e.buffer
            }
            throw new TypeError("Buffer.toArrayBuffer not supported in this browser")
        };
        var U = t.prototype;
        t._augment = function(t) {
            return t._isBuffer = !0, t._get = t.get, t._set = t.set, t.get = U.get, t.set = U.set, t.write = U.write, t.toString = U.toString, t.toLocaleString = U.toString, t.toJSON = U.toJSON, t.equals = U.equals, t.compare = U.compare, t.copy = U.copy, t.slice = U.slice, t.readUInt8 = U.readUInt8, t.readUInt16LE = U.readUInt16LE, t.readUInt16BE = U.readUInt16BE, t.readUInt32LE = U.readUInt32LE, t.readUInt32BE = U.readUInt32BE, t.readInt8 = U.readInt8, t.readInt16LE = U.readInt16LE, t.readInt16BE = U.readInt16BE, t.readInt32LE = U.readInt32LE, t.readInt32BE = U.readInt32BE, t.readFloatLE = U.readFloatLE, t.readFloatBE = U.readFloatBE, t.readDoubleLE = U.readDoubleLE, t.readDoubleBE = U.readDoubleBE, t.writeUInt8 = U.writeUInt8, t.writeUInt16LE = U.writeUInt16LE, t.writeUInt16BE = U.writeUInt16BE, t.writeUInt32LE = U.writeUInt32LE, t.writeUInt32BE = U.writeUInt32BE, t.writeInt8 = U.writeInt8, t.writeInt16LE = U.writeInt16LE, t.writeInt16BE = U.writeInt16BE, t.writeInt32LE = U.writeInt32LE, t.writeInt32BE = U.writeInt32BE, t.writeFloatLE = U.writeFloatLE, t.writeFloatBE = U.writeFloatBE, t.writeDoubleLE = U.writeDoubleLE, t.writeDoubleBE = U.writeDoubleBE, t.fill = U.fill, t.inspect = U.inspect, t.toArrayBuffer = U.toArrayBuffer, t
        };
        var B = /[^+\/0-9A-z]/g
    }).call(e, r(54).Buffer)
}, function(t, e, r) {
    "use strict";

    function n(t, e, r) {
        try {
            return t.call(e, r)
        } catch (n) {
            return E.e = n, E
        }
    }

    function i(t, e, r, n) {
        try {
            return t.call(e, r, n)
        } catch (i) {
            return E.e = i, E
        }
    }

    function o(t, e, r, n, i) {
        try {
            return t.call(e, r, n, i)
        } catch (o) {
            return E.e = o, E
        }
    }

    function s(t, e, r, n, i, o) {
        try {
            return t.call(e, r, n, i, o)
        } catch (s) {
            return E.e = s, E
        }
    }

    function a(t, e, r) {
        try {
            return t.apply(r, e)
        } catch (n) {
            return E.e = n, E
        }
    }

    function u(t) {
        return "string" == typeof t ? t : "" + t
    }

    function c(t) {
        return null == t || t === !0 || t === !1 || "string" == typeof t || "number" == typeof t
    }

    function l(t) {
        return !c(t)
    }

    function f(t) {
        return c(t) ? new Error(u(t)) : t
    }

    function h(t, e) {
        var r, n = t.length,
            i = new Array(n + 1);
        for (r = 0; n > r; ++r) i[r] = t[r];
        return i[r] = e, i
    }

    function p(t, e, r) {
        if (!b.isES5) return {}.hasOwnProperty.call(t, e) ? t[e] : void 0;
        var n = Object.getOwnPropertyDescriptor(t, e);
        return null != n ? null == n.get && null == n.set ? n.value : r : void 0
    }

    function d(t, e, r) {
        if (c(t)) return t;
        var n = {
            value: r,
            configurable: !0,
            enumerable: !1,
            writable: !0
        };
        return b.defineProperty(t, e, n), t
    }

    function y(t) {
        throw t
    }

    function g(t) {
        try {
            if ("function" == typeof t) {
                var e = b.keys(t.prototype);
                return e.length > 0 && !(1 === e.length && "constructor" === e[0])
            }
            return !1
        } catch (r) {
            return !1
        }
    }

    function v(t) {
        function e() {}
        return e.prototype = t, e
    }

    function m(t) {
        return P.test(t)
    }

    function _(t, e, r) {
        for (var n = new Array(t), i = 0; t > i; ++i) n[i] = e + i + r;
        return n
    }
    var b = r(89),
        w = function() {
            try {
                var t = {};
                return b.defineProperty(t, "f", {
                    get: function() {
                        return 3
                    }
                }), 3 === t.f
            } catch (e) {
                return !1
            }
        }(),
        j = "undefined" == typeof navigator,
        E = {
            e: {}
        },
        x = function(t, e) {
            function r() {
                this.constructor = t, this.constructor$ = e;
                for (var r in e.prototype) n.call(e.prototype, r) && "$" !== r.charAt(r.length - 1) && (this[r + "$"] = e.prototype[r])
            }
            var n = {}.hasOwnProperty;
            return r.prototype = e.prototype, t.prototype = new r, t.prototype
        },
        O = function() {
            return "string" !== this
        }.call("string"),
        A = function() {
            return b.isES5 ? function(t, e) {
                for (var r = [], n = Object.create(null), i = Object(e).includeHidden ? Object.getOwnPropertyNames : Object.keys; null != t;) {
                    var o;
                    try {
                        o = i(t)
                    } catch (s) {
                        return r
                    }
                    for (var a = 0; a < o.length; ++a) {
                        var u = o[a];
                        if (!n[u]) {
                            n[u] = !0;
                            var c = Object.getOwnPropertyDescriptor(t, u);
                            null != c && null == c.get && null == c.set && r.push(u)
                        }
                    }
                    t = b.getPrototypeOf(t)
                }
                return r
            } : function(t) {
                var e = [];
                for (var r in t) e.push(r);
                return e
            }
        }(),
        P = /^[a-z$_][a-z$_0-9]*$/i,
        k = {
            isClass: g,
            isIdentifier: m,
            inheritedDataKeys: A,
            getDataPropertyOrDefault: p,
            thrower: y,
            isArray: b.isArray,
            haveGetters: w,
            notEnumerableProp: d,
            isPrimitive: c,
            isObject: l,
            canEvaluate: j,
            errorObj: E,
            tryCatch1: n,
            tryCatch2: i,
            tryCatch3: o,
            tryCatch4: s,
            tryCatchApply: a,
            inherits: x,
            withAppended: h,
            asString: u,
            maybeWrapAsError: f,
            wrapsPrimitiveReceiver: O,
            toFastProperties: v,
            filledRange: _
        };
    t.exports = k
}, function(t, e, r) {
    (function(e) {
        "use strict";

        function n() {
            this._isTickUsed = !1, this._schedule = i, this._length = 0, this._lateBuffer = new o(16), this._functionBuffer = new o(65536);
            var t = this;
            this.consumeFunctionBuffer = function() {
                t._consumeFunctionBuffer()
            }
        }
        var i = r(90),
            o = r(91),
            s = r(55).errorObj,
            a = r(55).tryCatch1,
            u = "undefined" != typeof e ? e : void 0;
        n.prototype.haveItemsQueued = function() {
            return this._length > 0
        }, n.prototype.invokeLater = function(t, e, r) {
            void 0 === u || null == u.domain || t.domain || (t = u.domain.bind(t)), this._lateBuffer.push(t, e, r), this._queueTick()
        }, n.prototype.invoke = function(t, e, r) {
            void 0 === u || null == u.domain || t.domain || (t = u.domain.bind(t));
            var n = this._functionBuffer;
            n.push(t, e, r), this._length = n.length(), this._queueTick()
        }, n.prototype._consumeFunctionBuffer = function() {
            for (var t = this._functionBuffer; t.length() > 0;) {
                var e = t.shift(),
                    r = t.shift(),
                    n = t.shift();
                e.call(r, n)
            }
            this._reset(), this._consumeLateBuffer()
        }, n.prototype._consumeLateBuffer = function() {
            for (var t = this._lateBuffer; t.length() > 0;) {
                var e = t.shift(),
                    r = t.shift(),
                    n = t.shift(),
                    i = a(e, r, n);
                if (i === s) {
                    if (this._queueTick(), null == e.domain) throw i.e;
                    e.domain.emit("error", i.e)
                }
            }
        }, n.prototype._queueTick = function() {
            this._isTickUsed || (this._schedule(this.consumeFunctionBuffer), this._isTickUsed = !0)
        }, n.prototype._reset = function() {
            this._isTickUsed = !1, this._length = 0
        }, t.exports = new n
    }).call(e, r(86))
}, function(t, e, r) {
    "use strict";

    function n(t) {
        try {
            d(t, "isOperational", !0)
        } catch (e) {}
    }

    function i(t) {
        return null == t ? !1 : t instanceof u || t.isOperational === !0
    }

    function o(t) {
        return t instanceof Error
    }

    function s(t) {
        return o(t)
    }

    function a(t, e) {
        function r(n) {
            return this instanceof r ? (this.message = "string" == typeof n ? n : e, this.name = t, void(Error.captureStackTrace && Error.captureStackTrace(this, this.constructor))) : new r(n)
        }
        return p(r, Error), r
    }

    function u(t) {
        this.name = "OperationalError", this.message = t, this.cause = t, this.isOperational = !0, t instanceof Error ? (this.message = t.message, this.stack = t.stack) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
    }
    var c, l, f = r(89).freeze,
        h = r(55),
        p = h.inherits,
        d = h.notEnumerableProp,
        y = a("CancellationError", "cancellation error"),
        g = a("TimeoutError", "timeout error"),
        v = a("AggregateError", "aggregate error");
    try {
        c = TypeError, l = RangeError
    } catch (m) {
        c = a("TypeError", "type error"), l = a("RangeError", "range error")
    }
    for (var _ = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), b = 0; b < _.length; ++b) "function" == typeof Array.prototype[_[b]] && (v.prototype[_[b]] = Array.prototype[_[b]]);
    v.prototype.length = 0, v.prototype.isOperational = !0;
    var w = 0;
    v.prototype.toString = function() {
        var t = Array(4 * w + 1).join(" "),
            e = "\n" + t + "AggregateError of:\n";
        w++, t = Array(4 * w + 1).join(" ");
        for (var r = 0; r < this.length; ++r) {
            for (var n = this[r] === this ? "[Circular AggregateError]" : this[r] + "", i = n.split("\n"), o = 0; o < i.length; ++o) i[o] = t + i[o];
            n = i.join("\n"), e += n + "\n"
        }
        return w--, e
    }, p(u, Error);
    var j = "__BluebirdErrorTypes__",
        E = Error[j];
    E || (E = f({
        CancellationError: y,
        TimeoutError: g,
        OperationalError: u,
        RejectionError: u,
        AggregateError: v
    }), d(Error, j, E)), t.exports = {
        Error: Error,
        TypeError: c,
        RangeError: l,
        CancellationError: E.CancellationError,
        OperationalError: E.OperationalError,
        TimeoutError: E.TimeoutError,
        AggregateError: E.AggregateError,
        originatesFromRejection: i,
        markAsOriginatingFromRejection: n,
        canAttach: s
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        function n(t) {
            try {
                return t.then
            } catch (e) {
                return c.e = e, c
            }
        }

        function i(r, i) {
            if (l(r)) {
                if (r instanceof t) return r;
                if (o(r)) {
                    var a = new t(e);
                    return a._setTrace(void 0), r._then(a._fulfillUnchecked, a._rejectUncheckedCheckError, a._progressUnchecked, a, null), a._setFollowing(), a
                }
                var f = n(r);
                if (f === c) return void 0 !== i && u(f.e) && i._attachExtraTrace(f.e), t.reject(f.e);
                if ("function" == typeof f) return s(r, f, i)
            }
            return r
        }

        function o(t) {
            return f.call(t, "_promise0")
        }

        function s(e, r, n) {
            function i(r) {
                if (!c) {
                    if (c = !0, e === r) {
                        var i = t._makeSelfResolutionError();
                        return void 0 !== n && n._attachExtraTrace(i), void a.promise._reject(i, void 0)
                    }
                    a.resolve(r)
                }
            }

            function o(t) {
                if (!c) {
                    c = !0;
                    var e = u(t) ? t : new Error(t + "");
                    void 0 !== n && n._attachExtraTrace(e), a.promise._reject(t, e)
                }
            }

            function s(t) {
                if (!c) {
                    var e = a.promise;
                    "function" == typeof e._progress && e._progress(t)
                }
            }
            var a = t.defer(),
                c = !1;
            try {
                r.call(e, i, o, s)
            } catch (l) {
                if (!c) {
                    c = !0;
                    var f = u(l) ? l : new Error(l + "");
                    void 0 !== n && n._attachExtraTrace(f), a.promise._reject(l, f)
                }
            }
            return a.promise
        }
        var a = r(55),
            u = r(57).canAttach,
            c = a.errorObj,
            l = a.isObject,
            f = {}.hasOwnProperty;
        return i
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, n) {
        function i(t) {
            switch (t) {
                case -1:
                    return void 0;
                case -2:
                    return [];
                case -3:
                    return {}
            }
        }

        function o(r) {
            var n = this._promise = new t(e),
                i = void 0;
            r instanceof t && (i = r, n._propagateFrom(i, 5)), n._setTrace(i), this._values = r, this._length = 0, this._totalResolved = 0, this._init(void 0, -2)
        }
        var s = r(57).canAttach,
            a = r(55),
            u = a.isArray;
        return o.prototype.length = function() {
            return this._length
        }, o.prototype.promise = function() {
            return this._promise
        }, o.prototype._init = function c(e, r) {
            var o = n(this._values, void 0);
            if (o instanceof t) {
                if (this._values = o, o._setBoundTo(this._promise._boundTo), !o.isFulfilled()) return o.isPending() ? void o._then(c, this._reject, void 0, this, r) : (o._unsetRejectionIsUnhandled(), void this._reject(o._settledValue));
                if (o = o._settledValue, !u(o)) {
                    var s = new t.TypeError("expecting an array, a promise or a thenable");
                    return void this.__hardReject__(s)
                }
            } else if (!u(o)) {
                var s = new t.TypeError("expecting an array, a promise or a thenable");
                return void this.__hardReject__(s)
            }
            if (0 === o.length) return void(-5 === r ? this._resolveEmptyArray() : this._resolve(i(r)));
            for (var a = this.getActualLength(o.length), l = a, f = this.shouldCopyValues() ? new Array(a) : this._values, h = !1, p = 0; a > p; ++p) {
                var d = n(o[p], void 0);
                d instanceof t ? d.isPending() ? d._proxyPromiseArray(this, p) : (d._unsetRejectionIsUnhandled(), h = !0) : h = !0, f[p] = d
            }
            this._values = f, this._length = l, h && this._scanDirectValues(a)
        }, o.prototype._settlePromiseAt = function(e) {
            var r = this._values[e];
            r instanceof t ? r.isFulfilled() ? this._promiseFulfilled(r._settledValue, e) : r.isRejected() && this._promiseRejected(r._settledValue, e) : this._promiseFulfilled(r, e)
        }, o.prototype._scanDirectValues = function(t) {
            for (var e = 0; t > e && !this._isResolved(); ++e) this._settlePromiseAt(e)
        }, o.prototype._isResolved = function() {
            return null === this._values
        }, o.prototype._resolve = function(t) {
            this._values = null, this._promise._fulfill(t)
        }, o.prototype.__hardReject__ = o.prototype._reject = function(t) {
            this._values = null;
            var e = s(t) ? t : new Error(t + "");
            this._promise._attachExtraTrace(e), this._promise._reject(t, e)
        }, o.prototype._promiseProgressed = function(t, e) {
            this._isResolved() || this._promise._progress({
                index: e,
                value: t
            })
        }, o.prototype._promiseFulfilled = function(t, e) {
            if (!this._isResolved()) {
                this._values[e] = t;
                var r = ++this._totalResolved;
                r >= this._length && this._resolve(this._values)
            }
        }, o.prototype._promiseRejected = function(t) {
            this._isResolved() || (this._totalResolved++, this._reject(t))
        }, o.prototype.shouldCopyValues = function() {
            return !0
        }, o.prototype.getActualLength = function(t) {
            return t
        }, o
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        function t(t) {
            var r;
            if ("function" == typeof t) r = "[function " + (t.name || "anonymous") + "]";
            else {
                r = t.toString();
                var n = /\[object [a-zA-Z0-9$_]+\]/;
                if (n.test(r)) try {
                    var i = JSON.stringify(t);
                    r = i
                } catch (o) {}
                0 === r.length && (r = "(empty array)")
            }
            return "(<" + e(r) + ">, no stack trace)"
        }

        function e(t) {
            var e = 41;
            return t.length < e ? t : t.substr(0, e - 3) + "..."
        }

        function n(t, e) {
            this.captureStackTrace(n, e)
        }
        var i = r(55).inherits,
            o = r(89).defineProperty,
            s = new RegExp("\\b(?:[a-zA-Z0-9.]+\\$_\\w+|tryCatch(?:1|2|3|4|Apply)|new \\w*PromiseArray|\\w*PromiseArray\\.\\w*PromiseArray|setTimeout|CatchFilter\\$_\\w+|makeNodePromisified|processImmediate|process._tickCallback|nextTick|Async\\$\\w+)\\b"),
            a = null,
            u = null;
        i(n, Error), n.prototype.captureStackTrace = function(t, e) {
            c(this, t, e)
        }, n.possiblyUnhandledRejection = function(t) {
            if ("object" == typeof console) {
                var e;
                if ("object" == typeof t || "function" == typeof t) {
                    var r = t.stack;
                    e = "Possibly unhandled " + u(r, t)
                } else e = "Possibly unhandled " + String(t);
                "function" == typeof console.error || "object" == typeof console.error ? console.error(e) : ("function" == typeof console.log || "object" == typeof console.log) && console.log(e)
            }
        }, n.combine = function(t, e) {
            for (var r = t.length - 1, n = e.length - 1; n >= 0; --n) {
                var i = e[n];
                if (t[r] !== i) break;
                t.pop(), r--
            }
            t.push("From previous event:");
            for (var o = t.concat(e), u = [], n = 0, c = o.length; c > n; ++n) s.test(o[n]) && a.test(o[n]) || n > 0 && !a.test(o[n]) && "From previous event:" !== o[n] || u.push(o[n]);
            return u
        }, n.protectErrorMessageNewlines = function(t) {
            for (var e = 0; e < t.length && !a.test(t[e]); ++e);
            if (!(1 >= e)) {
                for (var r = [], n = 0; e > n; ++n) r.push(t.shift());
                t.unshift(r.join("\x00"))
            }
        }, n.isSupported = function() {
            return "function" == typeof c
        };
        var c = function l() {
            if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                a = /^\s*at\s*/, u = function(e, r) {
                    return "string" == typeof e ? e : void 0 !== r.name && void 0 !== r.message ? r.name + ". " + r.message : t(r)
                };
                var e = Error.captureStackTrace;
                return function(t, r) {
                    e(t, r)
                }
            }
            var r = new Error;
            if ("string" == typeof r.stack && "function" == typeof "".startsWith && r.stack.startsWith("stackDetection@") && "stackDetection" === l.name) {
                o(Error, "stackTraceLimit", {
                    writable: !0,
                    enumerable: !1,
                    configurable: !1,
                    value: 25
                }), a = /@/;
                var n = /[@\n]/;
                return u = function(e, r) {
                        return "string" == typeof e ? r.name + ". " + r.message + "\n" + e : void 0 !== r.name && void 0 !== r.message ? r.name + ". " + r.message : t(r)
                    },
                    function(t) {
                        for (var e = (new Error).stack, r = e.split(n), i = r.length, o = "", s = 0; i > s; s += 2) o += r[s], o += "@", o += r[s + 1], o += "\n";
                        t.stack = o
                    }
            }
            return u = function(e, r) {
                return "string" == typeof e ? e : "object" != typeof r && "function" != typeof r || void 0 === r.name || void 0 === r.message ? t(r) : r.name + ". " + r.message
            }, null
        }();
        return n
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        function e(t, e, r) {
            this._instances = t, this._callback = e, this._promise = r
        }

        function n(t, e) {
            var r = {},
                n = s(t, r, e);
            if (n === a) return n;
            var i = u(r);
            return i.length ? (a.e = new c("Catch filter must inherit from Error or be a simple predicate function"), a) : n
        }
        var i = r(55),
            o = r(57),
            s = i.tryCatch1,
            a = i.errorObj,
            u = r(89).keys,
            c = o.TypeError;
        return e.prototype.doFilter = function(e) {
            for (var r = this._callback, i = this._promise, u = i._boundTo, c = 0, l = this._instances.length; l > c; ++c) {
                var f = this._instances[c],
                    h = f === Error || null != f && f.prototype instanceof Error;
                if (h && e instanceof f) {
                    var p = s(r, u, e);
                    return p === a ? (t.e = p.e, t) : p
                }
                if ("function" == typeof f && !h) {
                    var d = n(f, e);
                    if (d === a) {
                        var y = o.canAttach(a.e) ? a.e : new Error(a.e + "");
                        this._promise._attachExtraTrace(y), e = a.e;
                        break
                    }
                    if (d) {
                        var p = s(r, u, e);
                        return p === a ? (t.e = p.e, t) : p
                    }
                }
            }
            return t.e = e, t
        }, e
    }
}, function(t, e, r) {
    "use strict";

    function n(t) {
        return t instanceof Error && d.getPrototypeOf(t) === Error.prototype
    }

    function i(t) {
        var e;
        return e = n(t) ? new f(t) : t, c.markAsOriginatingFromRejection(e), e
    }

    function o(t) {
        function e(e, r) {
            if (null !== t) {
                if (e) {
                    var n = i(u(e));
                    t._attachExtraTrace(n), t._reject(n)
                } else if (arguments.length > 2) {
                    for (var o = arguments.length, s = new Array(o - 1), a = 1; o > a; ++a) s[a - 1] = arguments[a];
                    t._fulfill(s)
                } else t._fulfill(r);
                t = null
            }
        }
        return e
    }
    var s, a = r(55),
        u = a.maybeWrapAsError,
        c = r(57),
        l = c.TimeoutError,
        f = c.OperationalError,
        h = r(56),
        p = a.haveGetters,
        d = r(89);
    if (s = p ? function(t) {
            this.promise = t
        } : function(t) {
            this.promise = t, this.asCallback = o(t), this.callback = this.asCallback
        }, p) {
        var y = {
            get: function() {
                return o(this.promise)
            }
        };
        d.defineProperty(s.prototype, "asCallback", y), d.defineProperty(s.prototype, "callback", y)
    }
    s._nodebackForPromise = o, s.prototype.toString = function() {
        return "[object PromiseResolver]"
    }, s.prototype.resolve = s.prototype.fulfill = function(t) {
        if (!(this instanceof s)) throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
        var e = this.promise;
        e._tryFollow(t) || h.invoke(e._fulfill, e, t)
    }, s.prototype.reject = function(t) {
        if (!(this instanceof s)) throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
        var e = this.promise;
        c.markAsOriginatingFromRejection(t);
        var r = c.canAttach(t) ? t : new Error(t + "");
        e._attachExtraTrace(r), h.invoke(e._reject, e, t), r !== t && h.invoke(this._setCarriedStackTrace, this, r)
    }, s.prototype.progress = function(t) {
        if (!(this instanceof s)) throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
        h.invoke(this.promise._progress, this.promise, t)
    }, s.prototype.cancel = function() {
        h.invoke(this.promise.cancel, this.promise, void 0)
    }, s.prototype.timeout = function() {
        this.reject(new l("timeout"))
    }, s.prototype.isResolved = function() {
        return this.promise.isResolved()
    }, s.prototype.toJSON = function() {
        return this.promise.toJSON()
    }, s.prototype._setCarriedStackTrace = function(t) {
        this.promise.isRejected() && this.promise._setCarriedStackTrace(t)
    }, t.exports = s
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        function e(e) {
            var r = new n(e),
                i = t.rejected(r),
                o = i._peekContext();
            return null != o && o._attachExtraTrace(r), i
        }
        var n = r(57).TypeError;
        return e
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, n) {
        function i() {
            return this
        }

        function o() {
            throw this
        }

        function s(t) {
            return function() {
                return t
            }
        }

        function a(t) {
            return function() {
                throw t
            }
        }

        function u(t, e, r) {
            var n;
            return n = h && p(e) ? r ? s(e) : a(e) : r ? i : o, t._then(n, d, void 0, e, void 0)
        }

        function c(r) {
            var i = this.promise,
                o = this.handler,
                s = i._isBound() ? o.call(i._boundTo) : o();
            if (void 0 !== s) {
                var a = n(s, void 0);
                if (a instanceof t) return u(a, r, i.isFulfilled())
            }
            return i.isRejected() ? (e.e = r, e) : r
        }

        function l(e) {
            var r = this.promise,
                i = this.handler,
                o = r._isBound() ? i.call(r._boundTo, e) : i(e);
            if (void 0 !== o) {
                var s = n(o, void 0);
                if (s instanceof t) return u(s, e, !0)
            }
            return e
        }
        var f = r(55),
            h = f.wrapsPrimitiveReceiver,
            p = f.isPrimitive,
            d = f.thrower;
        t.prototype._passThroughHandler = function(t, e) {
            if ("function" != typeof t) return this.then();
            var r = {
                promise: this,
                handler: t
            };
            return this._then(e ? c : l, e ? c : void 0, void 0, r, void 0)
        }, t.prototype.lastly = t.prototype["finally"] = function(t) {
            return this._passThroughHandler(t, !0)
        }, t.prototype.tap = function(t) {
            return this._passThroughHandler(t, !1)
        }
    }
}, function(t, e, r) {
    "use strict";
    var n = r(55),
        i = n.isPrimitive,
        o = n.wrapsPrimitiveReceiver;
    t.exports = function(t) {
        var e = function() {
                return this
            },
            r = function() {
                throw this
            },
            n = function(t, e) {
                return 1 === e ? function() {
                    throw t
                } : 2 === e ? function() {
                    return t
                } : void 0
            };
        t.prototype["return"] = t.prototype.thenReturn = function(t) {
            return o && i(t) ? this._then(n(t, 2), void 0, void 0, void 0, void 0) : this._then(e, void 0, void 0, t, void 0)
        }, t.prototype["throw"] = t.prototype.thenThrow = function(t) {
            return o && i(t) ? this._then(n(t, 1), void 0, void 0, void 0, void 0) : this._then(r, void 0, void 0, t, void 0)
        }
    }
}, function(t) {
    "use strict";
    t.exports = function(t) {
        function e(t) {
            void 0 !== t ? (this._bitField = t._bitField, this._settledValue = t.isResolved() ? t._settledValue : void 0) : (this._bitField = 0, this._settledValue = void 0)
        }
        e.prototype.isFulfilled = t.prototype.isFulfilled = function() {
            return (268435456 & this._bitField) > 0
        }, e.prototype.isRejected = t.prototype.isRejected = function() {
            return (134217728 & this._bitField) > 0
        }, e.prototype.isPending = t.prototype.isPending = function() {
            return 0 === (402653184 & this._bitField)
        }, e.prototype.value = t.prototype.value = function() {
            if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise");
            return this._settledValue
        }, e.prototype.error = e.prototype.reason = t.prototype.reason = function() {
            if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise");
            return this._settledValue
        }, e.prototype.isResolved = t.prototype.isResolved = function() {
            return (402653184 & this._bitField) > 0
        }, t.PromiseInspection = e
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, n, i) {
        var o = r(55),
            s = o.canEvaluate,
            a = o.tryCatch1,
            u = o.errorObj;
        if (s) {
            for (var c = function(t) {
                    return new Function("value", "holder", "                             \n	            'use strict';                                                    \n	            holder.pIndex = value;                                           \n	            holder.checkFulfillment(this);                                   \n	            ".replace(/Index/g, t))
                }, l = function(t) {
                    for (var e = [], r = 1; t >= r; ++r) e.push("holder.p" + r);
                    return new Function("holder", "                                      \n	            'use strict';                                                    \n	            var callback = holder.fn;                                        \n	            return callback(values);                                         \n	            ".replace(/values/g, e.join(", ")))
                }, f = [], h = [void 0], p = 1; 5 >= p; ++p) f.push(c(p)), h.push(l(p));
            var d = function(t, e) {
                this.p1 = this.p2 = this.p3 = this.p4 = this.p5 = null, this.fn = e, this.total = t, this.now = 0
            };
            d.prototype.callers = h, d.prototype.checkFulfillment = function(t) {
                var e = this.now;
                e++;
                var r = this.total;
                if (e >= r) {
                    var n = this.callers[r],
                        i = a(n, void 0, this);
                    i === u ? t._rejectUnchecked(i.e) : t._tryFollow(i) || t._fulfillUnchecked(i)
                } else this.now = e
            }
        }
        t.join = function() {
            var r, o = arguments.length - 1;
            if (o > 0 && "function" == typeof arguments[o] && (r = arguments[o], 6 > o && s)) {
                var a = new t(i);
                a._setTrace(void 0);
                for (var u = new d(o, r), c = a._reject, l = f, h = 0; o > h; ++h) {
                    var p = n(arguments[h], void 0);
                    p instanceof t ? p.isPending() ? p._then(l[h], c, void 0, a, u) : p.isFulfilled() ? l[h].call(a, p._settledValue, u) : (a._reject(p._settledValue), p._unsetRejectionIsUnhandled()) : l[h].call(a, p, u)
                }
                return a
            }
            for (var y = arguments.length, g = new Array(y), v = 0; y > v; ++v) g[v] = arguments[v];
            var a = new e(g).promise();
            return void 0 !== r ? a.spread(r) : a
        }
    }
}, function(t, e, r) {
    "use strict";
    var n = function(t, e) {
        var r = arguments.length,
            n = arguments[2],
            i = arguments[3],
            o = r >= 5 ? arguments[4] : void 0;
        setTimeout(function() {
            t(n, i, o)
        }, 0 | e)
    };
    t.exports = function(t, e, i) {
        var o = (r(55), r(57)),
            s = (r(63)(t), t.TimeoutError),
            a = function(t, e, r) {
                if (t.isPending()) {
                    "string" != typeof e && (e = "operation timed out after " + r + " ms");
                    var n = new s(e);
                    o.markAsOriginatingFromRejection(n), t._attachExtraTrace(n), t._cancel(n)
                }
            },
            u = function(t, e) {
                e._fulfill(t)
            },
            c = t.delay = function(r, o) {
                void 0 === o && (o = r, r = void 0), o = +o;
                var s = i(r, void 0),
                    a = new t(e);
                return s instanceof t ? (a._propagateFrom(s, 7), a._follow(s), a.then(function(e) {
                    return t.delay(e, o)
                })) : (a._setTrace(void 0), n(u, o, r, a), a)
            };
        t.prototype.delay = function(t) {
            return c(this, t)
        }, t.prototype.timeout = function(r, i) {
            r = +r;
            var o = new t(e);
            return o._propagateFrom(this, 7), o._follow(this), n(a, r, o, i, r), o.cancellable()
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, n) {
        function i(r, i) {
            var c = n(r, void 0);
            if (c instanceof t) return a(c);
            if (!s(r)) return o("expecting an array, a promise or a thenable");
            var l = new t(e);
            void 0 !== i ? l._propagateFrom(i, 7) : l._setTrace(void 0);
            for (var f = l._fulfill, h = l._reject, p = 0, d = r.length; d > p; ++p) {
                var y = r[p];
                (void 0 !== y || u.call(r, p)) && t.cast(y)._then(f, h, void 0, l, null)
            }
            return l
        }
        var o = r(63)(t),
            s = r(55).isArray,
            a = function(t) {
                return t.then(function(e) {
                    return i(e, t)
                })
            },
            u = {}.hasOwnProperty;
        t.race = function(t) {
            return i(t, void 0)
        }, t.prototype.race = function() {
            return i(this, void 0)
        }
    }
}, function(t, e, r) {
    "use strict";
    var n = Object.create;
    if (n) {
        var i = n(null),
            o = n(null);
        i[" size"] = o[" size"] = 0
    }
    t.exports = function(t) {
        function e(t) {
            return new Function("obj", "                                             \n	        'use strict'                                                         \n	        var len = this.length;                                               \n	        switch(len) {                                                        \n	            case 1: return obj.methodName(this[0]);                          \n	            case 2: return obj.methodName(this[0], this[1]);                 \n	            case 3: return obj.methodName(this[0], this[1], this[2]);        \n	            case 0: return obj.methodName();                                 \n	            default: return obj.methodName.apply(obj, this);                 \n	        }                                                                    \n	        ".replace(/methodName/g, t))
        }

        function n(t) {
            return new Function("obj", "                                             \n	        'use strict';                                                        \n	        return obj.propertyName;                                             \n	        ".replace("propertyName", t))
        }

        function s(t, e, r) {
            var n = r[t];
            if ("function" != typeof n) {
                if (!d(t)) return null;
                if (n = e(t), r[t] = n, r[" size"] ++, r[" size"] > 512) {
                    for (var i = Object.keys(r), o = 0; 256 > o; ++o) delete r[i[o]];
                    r[" size"] = i.length - 256
                }
            }
            return n
        }

        function a(t) {
            return s(t, e, i)
        }

        function u(t) {
            return s(t, n, o)
        }

        function c(t) {
            return t[this.pop()].apply(t, this)
        }

        function l(t) {
            return t[this]
        }

        function f(t) {
            return t[this]
        }
        var h = r(55),
            p = h.canEvaluate,
            d = h.isIdentifier;
        t.prototype.call = function(t) {
            for (var e = arguments.length, r = new Array(e - 1), n = 1; e > n; ++n) r[n - 1] = arguments[n];
            if (p) {
                var i = a(t);
                if (null !== i) return this._then(i, void 0, void 0, r, void 0)
            }
            return r.push(t), this._then(c, void 0, void 0, r, void 0)
        }, t.prototype.get = function(t) {
            var e, r = "number" == typeof t;
            if (r) e = f;
            else if (p) {
                var n = u(t);
                e = null !== n ? n : l
            } else e = l;
            return this._then(e, void 0, void 0, t, void 0)
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, n, i) {
        function o(e, r) {
            for (var n = f, s = t, a = r.length, u = 0; a > u; ++u) {
                var c = h(r[u], void 0, e);
                if (c === n) return s.reject(n.e);
                var l = i(c, o);
                if (l instanceof s) return l
            }
            return null
        }

        function s(e, r, i) {
            var o = this._promise = new t(n);
            o._setTrace(void 0), this._generatorFunction = e, this._receiver = r, this._generator = void 0, this._yieldHandlers = "function" == typeof i ? [i].concat(p) : p
        }
        var a = r(57),
            u = a.TypeError,
            c = r(55).deprecated,
            l = r(55),
            f = l.errorObj,
            h = l.tryCatch1,
            p = [];
        s.prototype.promise = function() {
            return this._promise
        }, s.prototype._run = function() {
            this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._next(void 0)
        }, s.prototype._continue = function(e) {
            if (e === f) {
                this._generator = void 0;
                var r = a.canAttach(e.e) ? e.e : new Error(e.e + "");
                return this._promise._attachExtraTrace(r), void this._promise._reject(e.e, r)
            }
            var n = e.value;
            if (e.done === !0) this._generator = void 0, this._promise._tryFollow(n) || this._promise._fulfill(n);
            else {
                var s = i(n, void 0);
                if (!(s instanceof t) && (s = o(s, this._yieldHandlers), null === s)) return void this._throw(new u("A value was yielded that could not be treated as a promise"));
                s._then(this._next, this._throw, void 0, this, null)
            }
        }, s.prototype._throw = function(t) {
            a.canAttach(t) && this._promise._attachExtraTrace(t), this._continue(h(this._generator["throw"], this._generator, t))
        }, s.prototype._next = function(t) {
            this._continue(h(this._generator.next, this._generator, t))
        }, t.coroutine = function(t, e) {
            if ("function" != typeof t) throw new u("generatorFunction must be a function");
            var r = Object(e).yieldHandler,
                n = s;
            return function() {
                var e = t.apply(this, arguments),
                    i = new n(void 0, void 0, r);
                return i._generator = e, i._next(void 0), i.promise()
            }
        }, t.coroutine.addYieldHandler = function(t) {
            if ("function" != typeof t) throw new u("fn must be a function");
            p.push(t)
        }, t.spawn = function(r) {
            if (c("Promise.spawn is deprecated. Use Promise.coroutine instead."), "function" != typeof r) return e("generatorFunction must be a function");
            var n = new s(r, this),
                i = n.promise();
            return n._run(t.spawn), i
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, n, i, o) {
        function s(t, e, r, n) {
            this.constructor$(t), this._callback = e, this._preservedValues = n === o ? new Array(this.length()) : null, this._limit = r, this._inFlight = 0, this._queue = r >= 1 ? [] : h, this._init$(void 0, -2)
        }

        function a(t, e, r, n) {
            var i = "object" == typeof r && null !== r ? r.concurrency : 0;
            return i = "number" == typeof i && isFinite(i) && i >= 1 ? i : 0, new s(t, e, i, n)
        }
        var u = r(55),
            c = u.tryCatch3,
            l = u.errorObj,
            f = {},
            h = [];
        u.inherits(s, e), s.prototype._init = function() {}, s.prototype._promiseFulfilled = function(e, r) {
            var n = this._values;
            if (null !== n) {
                var o = this.length(),
                    s = this._preservedValues,
                    a = this._limit;
                if (n[r] === f) {
                    if (n[r] = e, a >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return
                } else {
                    if (a >= 1 && this._inFlight >= a) return n[r] = e, void this._queue.push(r);
                    null !== s && (s[r] = e);
                    var u = this._callback,
                        h = this._promise._boundTo,
                        p = c(u, h, e, r, o);
                    if (p === l) return this._reject(p.e);
                    var d = i(p, void 0);
                    if (d instanceof t) {
                        if (d.isPending()) return a >= 1 && this._inFlight++, n[r] = f, d._proxyPromiseArray(this, r);
                        if (!d.isFulfilled()) return d._unsetRejectionIsUnhandled(), this._reject(d.reason());
                        p = d.value()
                    }
                    n[r] = p
                }
                var y = ++this._totalResolved;
                y >= o && (null !== s ? this._filter(n, s) : this._resolve(n))
            }
        }, s.prototype._drainQueue = function() {
            for (var t = this._queue, e = this._limit, r = this._values; t.length > 0 && this._inFlight < e;) {
                var n = t.pop();
                this._promiseFulfilled(r[n], n)
            }
        }, s.prototype._filter = function(t, e) {
            for (var r = e.length, n = new Array(r), i = 0, o = 0; r > o; ++o) t[o] && (n[i++] = e[o]);
            n.length = i, this._resolve(n)
        }, s.prototype.preservedValues = function() {
            return this._preservedValues
        }, t.prototype.map = function(t, e) {
            return "function" != typeof t ? n("fn must be a function") : a(this, t, e, null).promise()
        }, t.map = function(t, e, r, i) {
            return "function" != typeof e ? n("fn must be a function") : a(t, e, r, i).promise()
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        function e(t) {
            throw t
        }

        function n(t, r) {
            if (!s.isArray(t)) return i(t, r);
            var n = s.tryCatchApply(this, [null].concat(t), r);
            n === l && a.invokeLater(e, void 0, n.e)
        }

        function i(t, r) {
            var n = this,
                i = void 0 === t ? c(n, r, null) : u(n, r, null, t);
            i === l && a.invokeLater(e, void 0, i.e)
        }

        function o(t, r) {
            var n = this,
                i = c(n, r, t);
            i === l && a.invokeLater(e, void 0, i.e)
        }
        var s = r(55),
            a = r(56),
            u = s.tryCatch2,
            c = s.tryCatch1,
            l = s.errorObj;
        t.prototype.nodeify = function(t, e) {
            if ("function" == typeof t) {
                var r = i;
                void 0 !== e && Object(e).spread && (r = n), this._then(r, o, void 0, t, this._boundTo)
            }
            return this
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        function n(t) {
            return t.replace(/([$])/, "\\$")
        }

        function i(t) {
            try {
                return t.__isPromisified__ === !0
            } catch (e) {
                return !1
            }
        }

        function o(t, e, r) {
            var n = m.getDataPropertyOrDefault(t, e + r, A);
            return n ? i(n) : !1
        }

        function s(t, e, r) {
            for (var n = 0; n < t.length; n += 2) {
                var i = t[n];
                if (r.test(i))
                    for (var o = i.replace(r, ""), s = 0; s < t.length; s += 2)
                        if (t[s] === o) throw new E("Cannot promisify an API that has normal methods with '" + e + "'-suffix")
            }
        }

        function a(t, e, r, n) {
            for (var a = m.inheritedDataKeys(t), u = [], c = 0; c < a.length; ++c) {
                var l = a[c],
                    f = t[l];
                "function" != typeof f || i(f) || o(t, l, e) || !n(l, f, t) || u.push(l, f)
            }
            return s(u, e, r), u
        }

        function u(t) {
            for (var e = [t], r = Math.max(0, t - 1 - 5), n = t - 1; n >= r; --n) n !== t && e.push(n);
            for (var n = t + 1; 5 >= n; ++n) e.push(n);
            return e
        }

        function c(t) {
            return m.filledRange(t, "arguments[", "]")
        }

        function l(t) {
            return m.filledRange(t, "_arg", "")
        }

        function f(t) {
            return "number" == typeof t.length ? Math.max(Math.min(t.length, 1024), 0) : 0
        }

        function h(t) {
            return m.isIdentifier(t) ? "." + t : "['" + t.replace(/(['\\])/g, "\\$1") + "']"
        }

        function p(r, n, i, o, s) {
            function a(t) {
                var e, i = c(t).join(", "),
                    o = t > 0 ? ", " : "";
                return e = "string" == typeof r ? "                                                          \n	                this.method(args, fn);                                       \n	                break;                                                       \n	            ".replace(".method", h(r)) : n === v ? "                                                         \n	                callback.call(this, args, fn);                               \n	                break;                                                       \n	            " : void 0 !== n ? "                                                         \n	                callback.call(receiver, args, fn);                           \n	                break;                                                       \n	            " : "                                                         \n	                callback(args, fn);                                          \n	                break;                                                       \n	            ", e.replace("args", i).replace(", ", o)
            }

            function p() {
                for (var t = "", e = 0; e < y.length; ++e) t += "case " + y[e] + ":" + a(y[e]);
                var i;
                return i = "string" == typeof r ? "                                                  \n	                this.property.apply(this, args);                             \n	            ".replace(".property", h(r)) : n === v ? "                                                  \n	                callback.apply(this, args);                                  \n	            " : "                                                  \n	                callback.apply(receiver, args);                              \n	            ", t += "                                                             \n	        default:                                                             \n	            var args = new Array(len + 1);                                   \n	            var i = 0;                                                       \n	            for (var i = 0; i < len; ++i) {                                  \n	               args[i] = arguments[i];                                       \n	            }                                                                \n	            args[i] = fn;                                                    \n	            [CodeForCall]                                                    \n	            break;                                                           \n	        ".replace("[CodeForCall]", i)
            }
            var d = Math.max(0, f(o) - 1),
                y = u(d),
                g = "string" == typeof i && m.isIdentifier(i) ? i + s : "promisified";
            return new Function("Promise", "callback", "receiver", "withAppended", "maybeWrapAsError", "nodebackForPromise", "INTERNAL", "                                         \n	        var ret = function FunctionName(Parameters) {                        \n	            'use strict';                                                    \n	            var len = arguments.length;                                      \n	            var promise = new Promise(INTERNAL);                             \n	            promise._setTrace(void 0);                                       \n	            var fn = nodebackForPromise(promise);                            \n	            try {                                                            \n	                switch(len) {                                                \n	                    [CodeForSwitchCase]                                      \n	                }                                                            \n	            } catch (e) {                                                    \n	                var wrapped = maybeWrapAsError(e);                           \n	                promise._attachExtraTrace(wrapped);                          \n	                promise._reject(wrapped);                                    \n	            }                                                                \n	            return promise;                                                  \n	        };                                                                   \n	        ret.__isPromisified__ = true;                                        \n	        return ret;                                                          \n	        ".replace("FunctionName", g).replace("Parameters", l(d)).replace("[CodeForSwitchCase]", p()))(t, r, n, b, w, _, e)
        }

        function d(r, n) {
            function i() {
                var i = n;
                n === v && (i = this), "string" == typeof r && (r = i[r]);
                var o = new t(e);
                o._setTrace(void 0);
                var s = _(o);
                try {
                    r.apply(i, b(arguments, s))
                } catch (a) {
                    var u = w(a);
                    o._attachExtraTrace(u), o._reject(u)
                }
                return o
            }
            return i.__isPromisified__ = !0, i
        }

        function y(t, e, r, i) {
            for (var o = new RegExp(n(e) + "$"), s = a(t, e, o, r), u = 0, c = s.length; c > u; u += 2) {
                var l = s[u],
                    f = s[u + 1],
                    h = l + e;
                t[h] = i === P ? P(l, v, l, f, e) : i(f)
            }
            return m.toFastProperties(t), t
        }

        function g(t, e) {
            return P(t, e, void 0, t)
        }
        var v = {},
            m = r(55),
            _ = r(62)._nodebackForPromise,
            b = m.withAppended,
            w = m.maybeWrapAsError,
            j = m.canEvaluate,
            E = r(57).TypeError,
            x = "Async",
            O = function(t, e) {
                return m.isIdentifier(t) && "_" !== t.charAt(0) && !m.isClass(e)
            },
            A = {
                __isPromisified__: !0
            },
            P = j ? p : d;
        t.promisify = function(t, e) {
            if ("function" != typeof t) throw new E("fn must be a function");
            return i(t) ? t : g(t, arguments.length < 2 ? v : e)
        }, t.promisifyAll = function(t, e) {
            if ("function" != typeof t && "object" != typeof t) throw new E("the target of promisifyAll must be an object or a function");
            e = Object(e);
            var r = e.suffix;
            "string" != typeof r && (r = x);
            var n = e.filter;
            "function" != typeof n && (n = O);
            var i = e.promisifier;
            if ("function" != typeof i && (i = P), !m.isIdentifier(r)) throw new RangeError("suffix must be a valid identifier");
            for (var o = m.inheritedDataKeys(t, {
                    includeHidden: !0
                }), s = 0; s < o.length; ++s) {
                var a = t[o[s]];
                "constructor" !== o[s] && m.isClass(a) && (y(a.prototype, r, n, i), y(a, r, n, i))
            }
            return y(t, r, n, i)
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, n) {
        function i(t) {
            for (var e = c.keys(t), r = e.length, n = new Array(2 * r), i = 0; r > i; ++i) {
                var o = e[i];
                n[i] = t[o], n[i + r] = o
            }
            this.constructor$(n)
        }

        function o(e) {
            var r, o = n(e, void 0);
            return u(o) ? (r = o instanceof t ? o._then(t.props, void 0, void 0, void 0, void 0) : new i(o).promise(), o instanceof t && r._propagateFrom(o, 4), r) : a("cannot await properties of a non-object")
        }
        var s = r(55),
            a = r(63)(t),
            u = s.isObject,
            c = r(89);
        s.inherits(i, e), i.prototype._init = function() {
            this._init$(void 0, -3)
        }, i.prototype._promiseFulfilled = function(t, e) {
            if (!this._isResolved()) {
                this._values[e] = t;
                var r = ++this._totalResolved;
                if (r >= this._length) {
                    for (var n = {}, i = this.length(), o = 0, s = this.length(); s > o; ++o) n[this._values[o + i]] = this._values[o];
                    this._resolve(n)
                }
            }
        }, i.prototype._promiseProgressed = function(t, e) {
            this._isResolved() || this._promise._progress({
                key: this._values[e + this.length()],
                value: t
            })
        }, i.prototype.shouldCopyValues = function() {
            return !1
        }, i.prototype.getActualLength = function(t) {
            return t >> 1
        }, t.prototype.props = function() {
            return o(this)
        }, t.props = function(t) {
            return o(t)
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, n, i, o) {
        function s(e, r, n, s) {
            this.constructor$(e), this._preservedValues = s === o ? [] : null, this._zerothIsAccum = void 0 === n, this._gotAccum = !1, this._reducingIndex = this._zerothIsAccum ? 1 : 0, this._valuesPhase = void 0;
            var a = i(n, void 0),
                u = !1,
                c = a instanceof t;
            c && (a.isPending() ? a._proxyPromiseArray(this, -1) : a.isFulfilled() ? (n = a.value(), this._gotAccum = !0) : (a._unsetRejectionIsUnhandled(), this._reject(a.reason()), u = !0)), c || this._zerothIsAccum || (this._gotAccum = !0), this._callback = r, this._accum = n, u || this._init$(void 0, -5)
        }

        function a(t, e, r, i) {
            if ("function" != typeof e) return n("fn must be a function");
            var o = new s(t, e, r, i);
            return o.promise()
        }
        var u = r(55),
            c = u.tryCatch4,
            l = u.tryCatch3,
            f = u.errorObj;
        u.inherits(s, e), s.prototype._init = function() {}, s.prototype._resolveEmptyArray = function() {
            (this._gotAccum || this._zerothIsAccum) && this._resolve(null !== this._preservedValues ? [] : this._accum)
        }, s.prototype._promiseFulfilled = function(e, r) {
            var n = this._values;
            if (null !== n) {
                var o, s = this.length(),
                    a = this._preservedValues,
                    u = null !== a,
                    h = this._gotAccum,
                    p = this._valuesPhase;
                if (!p)
                    for (p = this._valuesPhase = Array(s), o = 0; s > o; ++o) p[o] = 0;
                if (o = p[r], 0 === r && this._zerothIsAccum ? (h || (this._accum = e, this._gotAccum = h = !0), p[r] = 0 === o ? 1 : 2) : -1 === r ? h || (this._accum = e, this._gotAccum = h = !0) : 0 === o ? p[r] = 1 : (p[r] = 2, h && (this._accum = e)), h) {
                    for (var d, y = this._callback, g = this._promise._boundTo, v = this._reducingIndex; s > v; ++v)
                        if (o = p[v], 2 !== o) {
                            if (1 !== o) return;
                            if (e = n[v], e instanceof t) {
                                if (!e.isFulfilled()) return e.isPending() ? void 0 : (e._unsetRejectionIsUnhandled(), this._reject(e.reason()));
                                e = e._settledValue
                            }
                            if (u ? (a.push(e), d = l(y, g, e, v, s)) : d = c(y, g, this._accum, e, v, s), d === f) return this._reject(d.e);
                            var m = i(d, void 0);
                            if (m instanceof t) {
                                if (m.isPending()) return p[v] = 4, m._proxyPromiseArray(this, v);
                                if (!m.isFulfilled()) return m._unsetRejectionIsUnhandled(), this._reject(m.reason());
                                d = m.value()
                            }
                            this._reducingIndex = v + 1, this._accum = d
                        } else this._reducingIndex = v + 1;
                    this._reducingIndex < s || this._resolve(u ? a : this._accum)
                }
            }
        }, t.prototype.reduce = function(t, e) {
            return a(this, t, e, null)
        }, t.reduce = function(t, e, r, n) {
            return a(t, e, r, n)
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        function n(t) {
            this.constructor$(t)
        }
        var i = t.PromiseInspection,
            o = r(55);
        o.inherits(n, e), n.prototype._promiseResolved = function(t, e) {
            this._values[t] = e;
            var r = ++this._totalResolved;
            r >= this._length && this._resolve(this._values)
        }, n.prototype._promiseFulfilled = function(t, e) {
            if (!this._isResolved()) {
                var r = new i;
                r._bitField = 268435456, r._settledValue = t, this._promiseResolved(e, r)
            }
        }, n.prototype._promiseRejected = function(t, e) {
            if (!this._isResolved()) {
                var r = new i;
                r._bitField = 134217728, r._settledValue = t, this._promiseResolved(e, r)
            }
        }, t.settle = function(t) {
            return new n(t).promise()
        }, t.prototype.settle = function() {
            return new n(this).promise()
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, n) {
        function i(t) {
            this.constructor$(t), this._howMany = 0, this._unwrap = !1, this._initialized = !1
        }

        function o(t, e) {
            if ((0 | e) !== e || 0 > e) return n("expecting a positive integer");
            var r = new i(t),
                o = r.promise();
            return o.isRejected() ? o : (r.setHowMany(e), r.init(), o)
        }
        var s = r(55),
            a = r(57).RangeError,
            u = r(57).AggregateError,
            c = s.isArray;
        s.inherits(i, e), i.prototype._init = function() {
            if (this._initialized) {
                if (0 === this._howMany) return void this._resolve([]);
                this._init$(void 0, -5);
                var t = c(this._values);
                !this._isResolved() && t && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()))
            }
        }, i.prototype.init = function() {
            this._initialized = !0, this._init()
        }, i.prototype.setUnwrap = function() {
            this._unwrap = !0
        }, i.prototype.howMany = function() {
            return this._howMany
        }, i.prototype.setHowMany = function(t) {
            this._isResolved() || (this._howMany = t)
        }, i.prototype._promiseFulfilled = function(t) {
            this._isResolved() || (this._addFulfilled(t), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), this._resolve(1 === this.howMany() && this._unwrap ? this._values[0] : this._values)))
        }, i.prototype._promiseRejected = function(t) {
            if (!this._isResolved() && (this._addRejected(t), this.howMany() > this._canPossiblyFulfill())) {
                for (var e = new u, r = this.length(); r < this._values.length; ++r) e.push(this._values[r]);
                this._reject(e)
            }
        }, i.prototype._fulfilled = function() {
            return this._totalResolved
        }, i.prototype._rejected = function() {
            return this._values.length - this.length()
        }, i.prototype._addRejected = function(t) {
            this._values.push(t)
        }, i.prototype._addFulfilled = function(t) {
            this._values[this._totalResolved++] = t
        }, i.prototype._canPossiblyFulfill = function() {
            return this.length() - this._rejected()
        }, i.prototype._getRangeError = function(t) {
            var e = "Input array must contain at least " + this._howMany + " items but contains only " + t + " items";
            return new a(e)
        }, i.prototype._resolveEmptyArray = function() {
            this._reject(this._getRangeError(0))
        }, t.some = function(t, e) {
            return o(t, e)
        }, t.prototype.some = function(t) {
            return o(this, t)
        }, t._SomePromiseArray = i
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        var n = r(55),
            i = r(56),
            o = r(57),
            s = n.tryCatch1,
            a = n.errorObj;
        t.prototype.progressed = function(t) {
            return this._then(void 0, void 0, t, void 0, void 0)
        }, t.prototype._progress = function(t) {
            this._isFollowingOrFulfilledOrRejected() || this._progressUnchecked(t)
        }, t.prototype._clearFirstHandlerData$Base = t.prototype._clearFirstHandlerData, t.prototype._clearFirstHandlerData = function() {
            this._clearFirstHandlerData$Base(), this._progressHandler0 = void 0
        }, t.prototype._progressHandlerAt = function(t) {
            return 0 === t ? this._progressHandler0 : this[(t << 2) + t - 5 + 2]
        }, t.prototype._doProgressWith = function(e) {
            var r = e.value,
                n = e.handler,
                i = e.promise,
                u = e.receiver,
                c = s(n, u, r);
            if (c === a) {
                if (null != c.e && "StopProgressPropagation" !== c.e.name) {
                    var l = o.canAttach(c.e) ? c.e : new Error(c.e + "");
                    i._attachExtraTrace(l), i._progress(c.e)
                }
            } else c instanceof t ? c._then(i._progress, null, null, i, void 0) : i._progress(c)
        }, t.prototype._progressUnchecked = function(r) {
            if (this.isPending())
                for (var n = this._length(), o = this._progress, s = 0; n > s; s++) {
                    var a = this._progressHandlerAt(s),
                        u = this._promiseAt(s);
                    if (u instanceof t) "function" == typeof a ? i.invoke(this._doProgressWith, this, {
                        handler: a,
                        promise: u,
                        receiver: this._receiverAt(s),
                        value: r
                    }) : i.invoke(o, u, r);
                    else {
                        var c = this._receiverAt(s);
                        "function" == typeof a ? a.call(c, r, u) : c instanceof t && c._isProxied() ? c._progressUnchecked(r) : c instanceof e && c._promiseProgressed(r, u)
                    }
                }
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        var n = r(57),
            i = n.canAttach,
            o = r(56),
            s = n.CancellationError;
        t.prototype._cancel = function(t) {
            if (!this.isCancellable()) return this;
            for (var e, r = this; void 0 !== (e = r._cancellationParent) && e.isCancellable();) r = e;
            r._attachExtraTrace(t), r._rejectUnchecked(t)
        }, t.prototype.cancel = function(t) {
            return this.isCancellable() ? (t = void 0 !== t ? i(t) ? t : new Error(t + "") : new s, o.invokeLater(this._cancel, this, t), this) : this
        }, t.prototype.cancellable = function() {
            return this._cancellable() ? this : (this._setCancellable(), this._cancellationParent = void 0, this)
        }, t.prototype.uncancellable = function() {
            var r = new t(e);
            return r._propagateFrom(this, 6), r._follow(this), r._unsetCancellable(), r
        }, t.prototype.fork = function(t, e, r) {
            var n = this._then(t, e, r, void 0, void 0);
            return n._setCancellable(), n._cancellationParent = void 0, n
        }
    }
}, function(t) {
    "use strict";
    t.exports = function(t, e) {
        var r = t.map;
        t.prototype.filter = function(t, n) {
            return r(this, t, n, e)
        }, t.filter = function(t, n, i) {
            return r(t, n, i, e)
        }
    }
}, function(t) {
    "use strict";
    t.exports = function(t) {
        function e(t) {
            var e = new r(t),
                n = e.promise();
            return n.isRejected() ? n : (e.setHowMany(1), e.setUnwrap(), e.init(), n)
        }
        var r = t._SomePromiseArray;
        t.any = function(t) {
            return e(t)
        }, t.prototype.any = function() {
            return e(this)
        }
    }
}, function(t) {
    "use strict";
    t.exports = function(t, e) {
        var r = t.reduce;
        t.prototype.each = function(t) {
            return r(this, t, null, e)
        }, t.each = function(t, n) {
            return r(t, n, null, e)
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, n) {
        function i(e) {
            for (var r = e.length, n = 0; r > n; ++n) {
                var i = e[n];
                if (i.isRejected()) return t.reject(i.error());
                e[n] = i.value()
            }
            return e
        }

        function o(t) {
            setTimeout(function() {
                throw t
            }, 0)
        }

        function s(t) {
            var e = n(t, void 0);
            return e !== t && "function" == typeof t._isDisposable && "function" == typeof t._getDisposer && t._isDisposable() && e._setDisposable(t._getDisposer()), e
        }

        function a(e, r) {
            function i() {
                if (a >= u) return c.resolve();
                var l = s(e[a++]);
                if (l instanceof t && l._isDisposable()) {
                    try {
                        l = n(l._getDisposer().tryDispose(r), void 0)
                    } catch (f) {
                        return o(f)
                    }
                    if (l instanceof t) return l._then(i, o, null, null, null)
                }
                i()
            }
            var a = 0,
                u = e.length,
                c = t.defer();
            return i(), c.promise
        }

        function u(t) {
            var e = new d;
            return e._settledValue = t, e._bitField = 268435456, a(this, e).thenReturn(t)
        }

        function c(t) {
            var e = new d;
            return e._settledValue = t, e._bitField = 134217728, a(this, e).thenThrow(t)
        }

        function l(t, e) {
            this._data = t, this._promise = e
        }

        function f(t, e) {
            this.constructor$(t, e)
        }
        var h = r(57).TypeError,
            p = r(55).inherits,
            d = t.PromiseInspection;
        l.prototype.data = function() {
            return this._data
        }, l.prototype.promise = function() {
            return this._promise
        }, l.prototype.resource = function() {
            return this.promise().isFulfilled() ? this.promise().value() : null
        }, l.prototype.tryDispose = function(t) {
            var e = this.resource(),
                r = null !== e ? this.doDispose(e, t) : null;
            return this._promise._unsetDisposable(), this._data = this._promise = null, r
        }, l.isDisposer = function(t) {
            return null != t && "function" == typeof t.resource && "function" == typeof t.tryDispose
        }, p(f, l), f.prototype.doDispose = function(t, e) {
            var r = this.data();
            return r.call(t, t, e)
        }, t.using = function() {
            var r = arguments.length;
            if (2 > r) return e("you must pass at least 2 arguments to Promise.using");
            var n = arguments[r - 1];
            if ("function" != typeof n) return e("fn must be a function");
            r--;
            for (var o = new Array(r), s = 0; r > s; ++s) {
                var a = arguments[s];
                if (l.isDisposer(a)) {
                    var f = a;
                    a = a.promise(), a._setDisposable(f)
                }
                o[s] = a
            }
            return t.settle(o).then(i).spread(n)._then(u, c, void 0, o, void 0)
        }, t.prototype._setDisposable = function(t) {
            this._bitField = 262144 | this._bitField, this._disposer = t
        }, t.prototype._isDisposable = function() {
            return (262144 & this._bitField) > 0
        }, t.prototype._getDisposer = function() {
            return this._disposer
        }, t.prototype._unsetDisposable = function() {
            this._bitField = -262145 & this._bitField, this._disposer = void 0
        }, t.prototype.disposer = function(t) {
            if ("function" == typeof t) return new f(t, this);
            throw new h
        }
    }
}, function(t) {
    function e(t) {
        if (void 0 === t) return "undefined";
        if (null === t) return "null";
        switch (Object.prototype.toString.call(t)) {
            case "[object Boolean]":
                return "boolean";
            case "[object Number]":
                return "number";
            case "[object String]":
                return "string";
            case "[object RegExp]":
                return "regexp";
            case "[object Date]":
                return "date";
            case "[object Array]":
                return "array";
            default:
                return typeof t
        }
    }
    t.exports = e
}, function(t) {
    function e() {}
    var r = t.exports = {};
    r.nextTick = function() {
        var t = "undefined" != typeof window && window.setImmediate,
            e = "undefined" != typeof window && window.postMessage && window.addEventListener;
        if (t) return function(t) {
            return window.setImmediate(t)
        };
        if (e) {
            var r = [];
            return window.addEventListener("message", function(t) {
                    var e = t.source;
                    if ((e === window || null === e) && "process-tick" === t.data && (t.stopPropagation(), r.length > 0)) {
                        var n = r.shift();
                        n()
                    }
                }, !0),
                function(t) {
                    r.push(t), window.postMessage("process-tick", "*")
                }
        }
        return function(t) {
            setTimeout(t, 0)
        }
    }(), r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.on = e, r.addListener = e, r.once = e, r.off = e, r.removeListener = e, r.removeAllListeners = e, r.emit = e, r.binding = function() {
        throw new Error("process.binding is not supported")
    }, r.cwd = function() {
        return "/"
    }, r.chdir = function() {
        throw new Error("process.chdir is not supported")
    }
}, function(t) {
    t.exports = "function" == typeof Object.create ? function(t, e) {
        t.super_ = e, t.prototype = Object.create(e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : function(t, e) {
        t.super_ = e;
        var r = function() {};
        r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
    }
}, function(t) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
    }
}, function(t) {
    var e = function() {
        "use strict";
        return void 0 === this
    }();
    if (e) t.exports = {
        freeze: Object.freeze,
        defineProperty: Object.defineProperty,
        keys: Object.keys,
        getPrototypeOf: Object.getPrototypeOf,
        isArray: Array.isArray,
        isES5: e
    };
    else {
        var r = {}.hasOwnProperty,
            n = {}.toString,
            i = {}.constructor.prototype,
            o = function(t) {
                var e = [];
                for (var n in t) r.call(t, n) && e.push(n);
                return e
            },
            s = function(t, e, r) {
                return t[e] = r.value, t
            },
            a = function(t) {
                return t
            },
            u = function(t) {
                try {
                    return Object(t).constructor.prototype
                } catch (e) {
                    return i
                }
            },
            c = function(t) {
                try {
                    return "[object Array]" === n.call(t)
                } catch (e) {
                    return !1
                }
            };
        t.exports = {
            isArray: c,
            keys: o,
            defineProperty: s,
            freeze: a,
            getPrototypeOf: u,
            isES5: e
        }
    }
}, function(t, e, r) {
    (function(e) {
        "use strict";
        var r, n;
        if ("object" == typeof e && "string" == typeof e.version) r = function(t) {
            e.nextTick(t)
        };
        else if ("undefined" != typeof MutationObserver && (n = MutationObserver) || "undefined" != typeof WebKitMutationObserver && (n = WebKitMutationObserver)) r = function() {
            var t = document.createElement("div"),
                e = void 0,
                r = new n(function() {
                    var t = e;
                    e = void 0, t()
                });
            return r.observe(t, {
                    attributes: !0
                }),
                function(r) {
                    e = r, t.classList.toggle("foo")
                }
        }();
        else {
            if ("undefined" == typeof setTimeout) throw new Error("no async scheduler available");
            r = function(t) {
                setTimeout(t, 0)
            }
        }
        t.exports = r
    }).call(e, r(86))
}, function(t) {
    "use strict";

    function e(t, e, r, n, i) {
        for (var o = 0; i > o; ++o) r[o + n] = t[o + e]
    }

    function r(t) {
        this._capacity = t, this._length = 0, this._front = 0, this._makeCapacity()
    }
    r.prototype._willBeOverCapacity = function(t) {
        return this._capacity < t
    }, r.prototype._pushOne = function(t) {
        var e = this.length();
        this._checkCapacity(e + 1);
        var r = this._front + e & this._capacity - 1;
        this[r] = t, this._length = e + 1
    }, r.prototype.push = function(t, e, r) {
        var n = this.length() + 3;
        if (this._willBeOverCapacity(n)) return this._pushOne(t), this._pushOne(e), void this._pushOne(r);
        var i = this._front + n - 3;
        this._checkCapacity(n);
        var o = this._capacity - 1;
        this[i + 0 & o] = t, this[i + 1 & o] = e, this[i + 2 & o] = r, this._length = n
    }, r.prototype.shift = function() {
        var t = this._front,
            e = this[t];
        return this[t] = void 0, this._front = t + 1 & this._capacity - 1, this._length--, e
    }, r.prototype.length = function() {
        return this._length
    }, r.prototype._makeCapacity = function() {
        for (var t = this._capacity, e = 0; t > e; ++e) this[e] = void 0
    }, r.prototype._checkCapacity = function(t) {
        this._capacity < t && this._resizeTo(this._capacity << 3)
    }, r.prototype._resizeTo = function(t) {
        var r = this._front,
            n = this._capacity,
            i = new Array(n),
            o = this.length();
        if (e(this, 0, i, 0, n), this._capacity = t, this._makeCapacity(), this._front = 0, n >= r + o) e(i, r, this, 0, o);
        else {
            var s = o - (r + o & n - 1);
            e(i, r, this, 0, s), e(i, 0, this, s, o - s)
        }
    }, t.exports = r
}, function(t) {
    var e = Array.isArray,
        r = Object.prototype.toString;
    t.exports = e || function(t) {
        return !!t && "[object Array]" == r.call(t)
    }
}, function(t, e) {
    e.read = function(t, e, r, n, i) {
        var o, s, a = 8 * i - n - 1,
            u = (1 << a) - 1,
            c = u >> 1,
            l = -7,
            f = r ? i - 1 : 0,
            h = r ? -1 : 1,
            p = t[e + f];
        for (f += h, o = p & (1 << -l) - 1, p >>= -l, l += a; l > 0; o = 256 * o + t[e + f], f += h, l -= 8);
        for (s = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; s = 256 * s + t[e + f], f += h, l -= 8);
        if (0 === o) o = 1 - c;
        else {
            if (o === u) return s ? 0 / 0 : 1 / 0 * (p ? -1 : 1);
            s += Math.pow(2, n), o -= c
        }
        return (p ? -1 : 1) * s * Math.pow(2, o - n)
    }, e.write = function(t, e, r, n, i, o) {
        var s, a, u, c = 8 * o - i - 1,
            l = (1 << c) - 1,
            f = l >> 1,
            h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = n ? 0 : o - 1,
            d = n ? 1 : -1,
            y = 0 > e || 0 === e && 0 > 1 / e ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || 1 / 0 === e ? (a = isNaN(e) ? 1 : 0, s = l) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), e += s + f >= 1 ? h / u : h * Math.pow(2, 1 - f), e * u >= 2 && (s++, u /= 2), s + f >= l ? (a = 0, s = l) : s + f >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + p] = 255 & a, p += d, a /= 256, i -= 8);
        for (s = s << i | a, c += i; c > 0; t[r + p] = 255 & s, p += d, s /= 256, c -= 8);
        t[r + p - d] |= 128 * y
    }
}, function(t, e) {
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    ! function(t) {
        "use strict";

        function e(t) {
            var e = t.charCodeAt(0);
            return e === s ? 62 : e === a ? 63 : u > e ? -1 : u + 10 > e ? e - u + 26 + 26 : l + 26 > e ? e - l : c + 26 > e ? e - c + 26 : void 0
        }

        function n(t) {
            function r(t) {
                c[f++] = t
            }
            var n, i, s, a, u, c;
            if (t.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var l = t.length;
            u = "=" === t.charAt(l - 2) ? 2 : "=" === t.charAt(l - 1) ? 1 : 0, c = new o(3 * t.length / 4 - u), s = u > 0 ? t.length - 4 : t.length;
            var f = 0;
            for (n = 0, i = 0; s > n; n += 4, i += 3) a = e(t.charAt(n)) << 18 | e(t.charAt(n + 1)) << 12 | e(t.charAt(n + 2)) << 6 | e(t.charAt(n + 3)), r((16711680 & a) >> 16), r((65280 & a) >> 8), r(255 & a);
            return 2 === u ? (a = e(t.charAt(n)) << 2 | e(t.charAt(n + 1)) >> 4, r(255 & a)) : 1 === u && (a = e(t.charAt(n)) << 10 | e(t.charAt(n + 1)) << 4 | e(t.charAt(n + 2)) >> 2, r(a >> 8 & 255), r(255 & a)), c
        }

        function i(t) {
            function e(t) {
                return r.charAt(t)
            }

            function n(t) {
                return e(t >> 18 & 63) + e(t >> 12 & 63) + e(t >> 6 & 63) + e(63 & t)
            }
            var i, o, s, a = t.length % 3,
                u = "";
            for (i = 0, s = t.length - a; s > i; i += 3) o = (t[i] << 16) + (t[i + 1] << 8) + t[i + 2], u += n(o);
            switch (a) {
                case 1:
                    o = t[t.length - 1], u += e(o >> 2), u += e(o << 4 & 63), u += "==";
                    break;
                case 2:
                    o = (t[t.length - 2] << 8) + t[t.length - 1], u += e(o >> 10), u += e(o >> 4 & 63), u += e(o << 2 & 63), u += "="
            }
            return u
        }
        var o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            s = "+".charCodeAt(0),
            a = "/".charCodeAt(0),
            u = "0".charCodeAt(0),
            c = "a".charCodeAt(0),
            l = "A".charCodeAt(0);
        t.toByteArray = n, t.fromByteArray = i
    }("undefined" == typeof e ? this.base64js = {} : e)
}]);