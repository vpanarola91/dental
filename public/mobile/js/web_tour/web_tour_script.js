    /*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
    ! function(d, c) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = d.document ? c(d, !0) : function(b) {
            if (!b.document) {
                throw new Error("jQuery requires a window with a document")
            }
            return c(b)
        } : c(d)
    }("undefined" != typeof window ? window : this, function(a, b) {
        var c = [],
            d = c.slice,
            e = c.concat,
            f = c.push,
            g = c.indexOf,
            h = {},
            i = h.toString,
            j = h.hasOwnProperty,
            k = {},
            l = "1.11.2",
            m = function(a, b) {
                return new m.fn.init(a, b)
            },
            n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            o = /^-ms-/,
            p = /-([\da-z])/gi,
            q = function(a, b) {
                return b.toUpperCase()
            };
        m.fn = m.prototype = {
            jquery: l,
            constructor: m,
            selector: "",
            length: 0,
            toArray: function() {
                return d.call(this)
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
            },
            pushStack: function(a) {
                var b = m.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a, b) {
                return m.each(this, a, b)
            },
            map: function(a) {
                return this.pushStack(m.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(d.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: f,
            sort: c.sort,
            splice: c.splice
        }, m.extend = m.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
                if (null != (e = arguments[h])) {
                    for (d in e) {
                        a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c))
                    }
                }
            }
            return g
        }, m.extend({
            expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === m.type(a)
            },
            isArray: Array.isArray || function(a) {
                return "array" === m.type(a)
            },
            isWindow: function(a) {
                return null != a && a == a.window
            },
            isNumeric: function(a) {
                return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) {
                    return !1
                }
                return !0
            },
            isPlainObject: function(a) {
                var b;
                if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) {
                    return !1
                }
                try {
                    if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) {
                        return !1
                    }
                } catch (c) {
                    return !1
                }
                if (k.ownLast) {
                    for (b in a) {
                        return j.call(a, b)
                    }
                }
                for (b in a) {}
                return void 0 === b || j.call(a, b)
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
            },
            globalEval: function(b) {
                b && m.trim(b) && (a.execScript || function(b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function(a) {
                return a.replace(o, "ms-").replace(p, q)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, c) {
                var d, e = 0,
                    f = a.length,
                    g = r(a);
                if (c) {
                    if (g) {
                        for (; f > e; e++) {
                            if (d = b.apply(a[e], c), d === !1) {
                                break
                            }
                        }
                    } else {
                        for (e in a) {
                            if (d = b.apply(a[e], c), d === !1) {
                                break
                            }
                        }
                    }
                } else {
                    if (g) {
                        for (; f > e; e++) {
                            if (d = b.call(a[e], e, a[e]), d === !1) {
                                break
                            }
                        }
                    } else {
                        for (e in a) {
                            if (d = b.call(a[e], e, a[e]), d === !1) {
                                break
                            }
                        }
                    }
                }
                return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(n, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (g) {
                        return g.call(b, a, c)
                    }
                    for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
                        if (c in b && b[c] === a) {
                            return c
                        }
                    }
                }
                return -1
            },
            merge: function(a, b) {
                var c = +b.length,
                    d = 0,
                    e = a.length;
                while (c > d) {
                    a[e++] = b[d++]
                }
                if (c !== c) {
                    while (void 0 !== b[d]) {
                        a[e++] = b[d++]
                    }
                }
                return a.length = e, a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                    d = !b(a[f], f), d !== h && e.push(a[f])
                }
                return e
            },
            map: function(a, b, c) {
                var d, f = 0,
                    g = a.length,
                    h = r(a),
                    i = [];
                if (h) {
                    for (; g > f; f++) {
                        d = b(a[f], f, c), null != d && i.push(d)
                    }
                } else {
                    for (f in a) {
                        d = b(a[f], f, c), null != d && i.push(d)
                    }
                }
                return e.apply([], i)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, e, f;
                return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                    return a.apply(b || this, c.concat(d.call(arguments)))
                }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
            },
            now: function() {
                return +new Date
            },
            support: k
        }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            h["[object " + b + "]"] = b.toLowerCase()
        });

        function r(a) {
            var b = a.length,
                c = m.type(a);
            return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }
        var s = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
                v = a.document,
                w = 0,
                x = 0,
                y = hb(),
                z = hb(),
                A = hb(),
                B = function(a, b) {
                    return a === b && (l = !0), 0
                },
                C = 1 << 31,
                D = {}.hasOwnProperty,
                E = [],
                F = E.pop,
                G = E.push,
                H = E.push,
                I = E.slice,
                J = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++) {
                        if (a[c] === b) {
                            return c
                        }
                    }
                    return -1
                },
                K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                L = "[\\x20\\t\\r\\n\\f]",
                M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                N = M.replace("w", "w#"),
                O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
                P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
                Q = new RegExp(L + "+", "g"),
                R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                S = new RegExp("^" + L + "*," + L + "*"),
                T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
                V = new RegExp(P),
                W = new RegExp("^" + N + "$"),
                X = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + O),
                    PSEUDO: new RegExp("^" + P),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + K + ")$", "i"),
                    needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                },
                Y = /^(?:input|select|textarea|button)$/i,
                Z = /^h\d$/i,
                $ = /^[^{]+\{\s*\[native \w/,
                _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ab = /[+~]/,
                bb = /'|\\/g,
                cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
                db = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                eb = function() {
                    m()
                };
            try {
                H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
            } catch (fb) {
                H = {
                    apply: E.length ? function(a, b) {
                        G.apply(a, I.call(b))
                    } : function(a, b) {
                        var c = a.length,
                            d = 0;
                        while (a[c++] = b[d++]) {}
                        a.length = c - 1
                    }
                }
            }

            function gb(a, b, d, e) {
                var f, h, j, k, l, o, r, s, w, x;
                if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) {
                    return d
                }
                if (!e && p) {
                    if (11 !== k && (f = _.exec(a))) {
                        if (j = f[1]) {
                            if (9 === k) {
                                if (h = b.getElementById(j), !h || !h.parentNode) {
                                    return d
                                }
                                if (h.id === j) {
                                    return d.push(h), d
                                }
                            } else {
                                if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) {
                                    return d.push(h), d
                                }
                            }
                        } else {
                            if (f[2]) {
                                return H.apply(d, b.getElementsByTagName(a)), d
                            }
                            if ((j = f[3]) && c.getElementsByClassName) {
                                return H.apply(d, b.getElementsByClassName(j)), d
                            }
                        }
                    }
                    if (c.qsa && (!q || !q.test(a))) {
                        if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                            while (l--) {
                                o[l] = s + rb(o[l])
                            }
                            w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",")
                        }
                        if (x) {
                            try {
                                return H.apply(d, w.querySelectorAll(x)), d
                            } catch (y) {} finally {
                                r || b.removeAttribute("id")
                            }
                        }
                    }
                }
                return i(a.replace(R, "$1"), b, d, e)
            }

            function hb() {
                var a = [];

                function b(c, e) {
                    return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
                }
                return b
            }

            function ib(a) {
                return a[u] = !0, a
            }

            function jb(a) {
                var b = n.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function kb(a, b) {
                var c = a.split("|"),
                    e = a.length;
                while (e--) {
                    d.attrHandle[c[e]] = b
                }
            }

            function lb(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
                if (d) {
                    return d
                }
                if (c) {
                    while (c = c.nextSibling) {
                        if (c === b) {
                            return -1
                        }
                    }
                }
                return a ? 1 : -1
            }

            function mb(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function nb(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function ob(a) {
                return ib(function(b) {
                    return b = +b, ib(function(c, d) {
                        var e, f = a([], c.length, b),
                            g = f.length;
                        while (g--) {
                            c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                        }
                    })
                })
            }

            function pb(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }
            c = gb.support = {}, f = gb.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, m = gb.setDocument = function(a) {
                var b, e, g = a ? a.ownerDocument || a : v;
                return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), p = !f(g), c.attributes = jb(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), c.getElementsByTagName = jb(function(a) {
                    return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
                }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function(a) {
                    return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
                }), c.getById ? (d.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, d.filter.ID = function(a) {
                    var b = a.replace(cb, db);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete d.find.ID, d.filter.ID = function(a) {
                    var b = a.replace(cb, db);
                    return function(a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        while (c = f[e++]) {
                            1 === c.nodeType && d.push(c)
                        }
                        return d
                    }
                    return f
                }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                    return p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function(a) {
                    o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                }), jb(function(a) {
                    var b = g.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
                })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function(a) {
                    c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
                }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b) {
                        while (b = b.parentNode) {
                            if (b === a) {
                                return !0
                            }
                        }
                    }
                    return !1
                }, B = b ? function(a, b) {
                    if (a === b) {
                        return l = !0, 0
                    }
                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
                } : function(a, b) {
                    if (a === b) {
                        return l = !0, 0
                    }
                    var c, d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        h = [a],
                        i = [b];
                    if (!e || !f) {
                        return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0
                    }
                    if (e === f) {
                        return lb(a, b)
                    }
                    c = a;
                    while (c = c.parentNode) {
                        h.unshift(c)
                    }
                    c = b;
                    while (c = c.parentNode) {
                        i.unshift(c)
                    }
                    while (h[d] === i[d]) {
                        d++
                    }
                    return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
                }, g) : n
            }, gb.matches = function(a, b) {
                return gb(a, null, null, b)
            }, gb.matchesSelector = function(a, b) {
                if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) {
                    try {
                        var d = s.call(a, b);
                        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
                            return d
                        }
                    } catch (e) {}
                }
                return gb(b, n, null, [a]).length > 0
            }, gb.contains = function(a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b)
            }, gb.attr = function(a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()],
                    f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
            }, gb.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, gb.uniqueSort = function(a) {
                var b, d = [],
                    e = 0,
                    f = 0;
                if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                    while (b = a[f++]) {
                        b === a[f] && (e = d.push(f))
                    }
                    while (e--) {
                        a.splice(d[e], 1)
                    }
                }
                return k = null, a
            }, e = gb.getText = function(a) {
                var b, c = "",
                    d = 0,
                    f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent) {
                            return a.textContent
                        }
                        for (a = a.firstChild; a; a = a.nextSibling) {
                            c += e(a)
                        }
                    } else {
                        if (3 === f || 4 === f) {
                            return a.nodeValue
                        }
                    }
                } else {
                    while (b = a[d++]) {
                        c += e(b)
                    }
                }
                return c
            }, d = gb.selectors = {
                cacheLength: 50,
                createPseudo: ib,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(cb, db).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = y[a + " "];
                        return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, b, c) {
                        return function(d) {
                            var e = gb.attr(d, a);
                            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;
                            if (q) {
                                if (f) {
                                    while (p) {
                                        l = b;
                                        while (l = l[p]) {
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) {
                                                return !1
                                            }
                                        }
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                    while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [w, n, m];
                                            break
                                        }
                                    }
                                } else {
                                    if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) {
                                        m = j[1]
                                    } else {
                                        while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                            if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) {
                                                break
                                            }
                                        }
                                    }
                                }
                                return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, b) {
                        var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
                        return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function(a, c) {
                            var d, f = e(a, b),
                                g = f.length;
                            while (g--) {
                                d = J(a, f[g]), a[d] = !(c[d] = f[g])
                            }
                        }) : function(a) {
                            return e(a, 0, c)
                        }) : e
                    }
                },
                pseudos: {
                    not: ib(function(a) {
                        var b = [],
                            c = [],
                            d = h(a.replace(R, "$1"));
                        return d[u] ? ib(function(a, b, c, e) {
                            var f, g = d(a, null, e, []),
                                h = a.length;
                            while (h--) {
                                (f = g[h]) && (a[h] = !(b[h] = f))
                            }
                        }) : function(a, e, f) {
                            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: ib(function(a) {
                        return function(b) {
                            return gb(a, b).length > 0
                        }
                    }),
                    contains: ib(function(a) {
                        return a = a.replace(cb, db),
                            function(b) {
                                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                            }
                    }),
                    lang: ib(function(a) {
                        return W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                            function(b) {
                                var c;
                                do {
                                    if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
                                        return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-")
                                    }
                                } while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === o
                    },
                    focus: function(a) {
                        return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling) {
                            if (a.nodeType < 6) {
                                return !1
                            }
                        }
                        return !0
                    },
                    parent: function(a) {
                        return !d.pseudos.empty(a)
                    },
                    header: function(a) {
                        return Z.test(a.nodeName)
                    },
                    input: function(a) {
                        return Y.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: ob(function() {
                        return [0]
                    }),
                    last: ob(function(a, b) {
                        return [b - 1]
                    }),
                    eq: ob(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: ob(function(a, b) {
                        for (var c = 0; b > c; c += 2) {
                            a.push(c)
                        }
                        return a
                    }),
                    odd: ob(function(a, b) {
                        for (var c = 1; b > c; c += 2) {
                            a.push(c)
                        }
                        return a
                    }),
                    lt: ob(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) {
                            a.push(d)
                        }
                        return a
                    }),
                    gt: ob(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) {
                            a.push(d)
                        }
                        return a
                    })
                }
            }, d.pseudos.nth = d.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) {
                d.pseudos[b] = mb(b)
            }
            for (b in {
                    submit: !0,
                    reset: !0
                }) {
                d.pseudos[b] = nb(b)
            }

            function qb() {}
            qb.prototype = d.filters = d.pseudos, d.setFilters = new qb, g = gb.tokenize = function(a, b) {
                var c, e, f, g, h, i, j, k = z[a + " "];
                if (k) {
                    return b ? 0 : k.slice(0)
                }
                h = a, i = [], j = d.preFilter;
                while (h) {
                    (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                        value: c,
                        type: e[0].replace(R, " ")
                    }), h = h.slice(c.length));
                    for (g in d.filter) {
                        !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                            value: c,
                            type: g,
                            matches: e
                        }), h = h.slice(c.length))
                    }
                    if (!c) {
                        break
                    }
                }
                return b ? h.length : h ? gb.error(a) : z(a, i).slice(0)
            };

            function rb(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) {
                    d += a[b].value
                }
                return d
            }

            function sb(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = x++;
                return b.first ? function(b, c, f) {
                    while (b = b[d]) {
                        if (1 === b.nodeType || e) {
                            return a(b, c, f)
                        }
                    }
                } : function(b, c, g) {
                    var h, i, j = [w, f];
                    if (g) {
                        while (b = b[d]) {
                            if ((1 === b.nodeType || e) && a(b, c, g)) {
                                return !0
                            }
                        }
                    } else {
                        while (b = b[d]) {
                            if (1 === b.nodeType || e) {
                                if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) {
                                    return j[2] = h[2]
                                }
                                if (i[d] = j, j[2] = a(b, c, g)) {
                                    return !0
                                }
                            }
                        }
                    }
                }
            }

            function tb(a) {
                return a.length > 1 ? function(b, c, d) {
                    var e = a.length;
                    while (e--) {
                        if (!a[e](b, c, d)) {
                            return !1
                        }
                    }
                    return !0
                } : a[0]
            }

            function ub(a, b, c) {
                for (var d = 0, e = b.length; e > d; d++) {
                    gb(a, b[d], c)
                }
                return c
            }

            function vb(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                    (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h))
                }
                return g
            }

            function wb(a, b, c, d, e, f) {
                return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function(f, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = f || ub(b || "*", h.nodeType ? [h] : h, []),
                        q = !a || !f && b ? p : vb(p, m, a, h, i),
                        r = c ? e || (f ? a : o || d) ? [] : g : q;
                    if (c && c(q, r, h, i), d) {
                        j = vb(r, n), d(j, [], h, i), k = j.length;
                        while (k--) {
                            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                        }
                    }
                    if (f) {
                        if (e || a) {
                            if (e) {
                                j = [], k = r.length;
                                while (k--) {
                                    (l = r[k]) && j.push(q[k] = l)
                                }
                                e(null, r = [], j, i)
                            }
                            k = r.length;
                            while (k--) {
                                (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                            }
                        }
                    } else {
                        r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
                    }
                })
            }

            function xb(a) {
                for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function(a) {
                        return a === b
                    }, h, !0), l = sb(function(a) {
                        return J(b, a) > -1
                    }, h, !0), m = [function(a, c, d) {
                        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                        return b = null, e
                    }]; f > i; i++) {
                    if (c = d.relative[a[i].type]) {
                        m = [sb(tb(m), c)]
                    } else {
                        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                            for (e = ++i; f > e; e++) {
                                if (d.relative[a[e].type]) {
                                    break
                                }
                            }
                            return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({
                                value: " " === a[i - 2].type ? "*" : ""
                            })).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a))
                        }
                        m.push(c)
                    }
                }
                return tb(m)
            }

            function yb(a, b) {
                var c = b.length > 0,
                    e = a.length > 0,
                    f = function(f, g, h, i, k) {
                        var l, m, o, p = 0,
                            q = "0",
                            r = f && [],
                            s = [],
                            t = j,
                            u = f || e && d.find.TAG("*", k),
                            v = w += null == t ? 1 : Math.random() || 0.1,
                            x = u.length;
                        for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                            if (e && l) {
                                m = 0;
                                while (o = a[m++]) {
                                    if (o(l, g, h)) {
                                        i.push(l);
                                        break
                                    }
                                }
                                k && (w = v)
                            }
                            c && ((l = !o && l) && p--, f && r.push(l))
                        }
                        if (p += q, c && q !== p) {
                            m = 0;
                            while (o = b[m++]) {
                                o(r, s, g, h)
                            }
                            if (f) {
                                if (p > 0) {
                                    while (q--) {
                                        r[q] || s[q] || (s[q] = F.call(i))
                                    }
                                }
                                s = vb(s)
                            }
                            H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i)
                        }
                        return k && (w = v, j = t), r
                    };
                return c ? ib(f) : f
            }
            return h = gb.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = A[a + " "];
                if (!f) {
                    b || (b = g(a)), c = b.length;
                    while (c--) {
                        f = xb(b[c]), f[u] ? d.push(f) : e.push(f)
                    }
                    f = A(a, yb(e, d)), f.selector = a
                }
                return f
            }, i = gb.select = function(a, b, e, f) {
                var i, j, k, l, m, n = "function" == typeof a && a,
                    o = !f && g(a = n.selector || a);
                if (e = e || [], 1 === o.length) {
                    if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                        if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) {
                            return e
                        }
                        n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                    }
                    i = X.needsContext.test(a) ? 0 : j.length;
                    while (i--) {
                        if (k = j[i], d.relative[l = k.type]) {
                            break
                        }
                        if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
                            if (j.splice(i, 1), a = f.length && rb(j), !a) {
                                return H.apply(e, f), e
                            }
                            break
                        }
                    }
                }
                return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e
            }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = jb(function(a) {
                return 1 & a.compareDocumentPosition(n.createElement("div"))
            }), jb(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || kb("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), c.attributes && jb(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || kb("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), jb(function(a) {
                return null == a.getAttribute("disabled")
            }) || kb(K, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), gb
        }(a);
        m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
        var t = m.expr.match.needsContext,
            u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            v = /^.[^:#\[\.,]*$/;

        function w(a, b, c) {
            if (m.isFunction(b)) {
                return m.grep(a, function(a, d) {
                    return !!b.call(a, d, a) !== c
                })
            }
            if (b.nodeType) {
                return m.grep(a, function(a) {
                    return a === b !== c
                })
            }
            if ("string" == typeof b) {
                if (v.test(b)) {
                    return m.filter(b, a, c)
                }
                b = m.filter(b, a)
            }
            return m.grep(a, function(a) {
                return m.inArray(a, b) >= 0 !== c
            })
        }
        m.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }, m.fn.extend({
            find: function(a) {
                var b, c = [],
                    d = this,
                    e = d.length;
                if ("string" != typeof a) {
                    return this.pushStack(m(a).filter(function() {
                        for (b = 0; e > b; b++) {
                            if (m.contains(d[b], this)) {
                                return !0
                            }
                        }
                    }))
                }
                for (b = 0; e > b; b++) {
                    m.find(a, d[b], c)
                }
                return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
            },
            filter: function(a) {
                return this.pushStack(w(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(w(this, a || [], !0))
            },
            is: function(a) {
                return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
            }
        });
        var x, y = a.document,
            z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            A = m.fn.init = function(a, b) {
                var c, d;
                if (!a) {
                    return this
                }
                if ("string" == typeof a) {
                    if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) {
                        return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a)
                    }
                    if (c[1]) {
                        if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) {
                            for (c in b) {
                                m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c])
                            }
                        }
                        return this
                    }
                    if (d = y.getElementById(c[2]), d && d.parentNode) {
                        if (d.id !== c[2]) {
                            return x.find(a)
                        }
                        this.length = 1, this[0] = d
                    }
                    return this.context = y, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
            };
        A.prototype = m.fn, x = m(y);
        var B = /^(?:parents|prev(?:Until|All))/,
            C = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        m.extend({
            dir: function(a, b, c) {
                var d = [],
                    e = a[b];
                while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) {
                    1 === e.nodeType && d.push(e), e = e[b]
                }
                return d
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) {
                    1 === a.nodeType && a !== b && c.push(a)
                }
                return c
            }
        }), m.fn.extend({
            has: function(a) {
                var b, c = m(a, this),
                    d = c.length;
                return this.filter(function() {
                    for (b = 0; d > b; b++) {
                        if (m.contains(this, c[b])) {
                            return !0
                        }
                    }
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) {
                    for (c = this[d]; c && c !== b; c = c.parentNode) {
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
                    }
                }
                return this.pushStack(f.length > 1 ? m.unique(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        });

        function D(a, b) {
            do {
                a = a[b]
            } while (a && 1 !== a.nodeType);
            return a
        }
        m.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return m.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return m.dir(a, "parentNode", c)
            },
            next: function(a) {
                return D(a, "nextSibling")
            },
            prev: function(a) {
                return D(a, "previousSibling")
            },
            nextAll: function(a) {
                return m.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return m.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return m.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return m.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return m.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return m.sibling(a.firstChild)
            },
            contents: function(a) {
                return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
            }
        }, function(a, b) {
            m.fn[a] = function(c, d) {
                var e = m.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
            }
        });
        var E = /\S+/g,
            F = {};

        function G(a) {
            var b = F[a] = {};
            return m.each(a.match(E) || [], function(a, c) {
                b[c] = !0
            }), b
        }
        m.Callbacks = function(a) {
            a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
            var b, c, d, e, f, g, h = [],
                i = !a.once && [],
                j = function(l) {
                    for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) {
                        if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                            c = !1;
                            break
                        }
                    }
                    b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
                },
                k = {
                    add: function() {
                        if (h) {
                            var d = h.length;
                            ! function f(b) {
                                m.each(b, function(b, c) {
                                    var d = m.type(c);
                                    "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                                })
                            }(arguments), b ? e = h.length : c && (g = d, j(c))
                        }
                        return this
                    },
                    remove: function() {
                        return h && m.each(arguments, function(a, c) {
                            var d;
                            while ((d = m.inArray(c, h, d)) > -1) {
                                h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                            }
                        }), this
                    },
                    has: function(a) {
                        return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                    },
                    empty: function() {
                        return h = [], e = 0, this
                    },
                    disable: function() {
                        return h = i = c = void 0, this
                    },
                    disabled: function() {
                        return !h
                    },
                    lock: function() {
                        return i = void 0, c || k.disable(), this
                    },
                    locked: function() {
                        return !i
                    },
                    fireWith: function(a, c) {
                        return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                    },
                    fire: function() {
                        return k.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!d
                    }
                };
            return k
        }, m.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", m.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return m.Deferred(function(c) {
                                m.each(b, function(b, f) {
                                    var g = m.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? m.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, m.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b = 0,
                    c = d.call(arguments),
                    e = c.length,
                    f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                    g = 1 === f ? a : m.Deferred(),
                    h = function(a, b, c) {
                        return function(e) {
                            b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                        }
                    },
                    i, j, k;
                if (e > 1) {
                    for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
                        c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f
                    }
                }
                return f || g.resolveWith(k, c), g.promise()
            }
        });
        var H;
        m.fn.ready = function(a) {
            return m.ready.promise().done(a), this
        }, m.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? m.readyWait++ : m.ready(!0)
            },
            ready: function(a) {
                if (a === !0 ? !--m.readyWait : !m.isReady) {
                    if (!y.body) {
                        return setTimeout(m.ready)
                    }
                    m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
                }
            }
        });

        function I() {
            y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
        }

        function J() {
            (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
        }
        m.ready.promise = function(b) {
            if (!H) {
                if (H = m.Deferred(), "complete" === y.readyState) {
                    setTimeout(m.ready)
                } else {
                    if (y.addEventListener) {
                        y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1)
                    } else {
                        y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
                        var c = !1;
                        try {
                            c = null == a.frameElement && y.documentElement
                        } catch (d) {}
                        c && c.doScroll && ! function e() {
                            if (!m.isReady) {
                                try {
                                    c.doScroll("left")
                                } catch (a) {
                                    return setTimeout(e, 50)
                                }
                                I(), m.ready()
                            }
                        }()
                    }
                }
            }
            return H.promise(b)
        };
        var K = "undefined",
            L;
        for (L in m(k)) {
            break
        }
        k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
                var a, b, c, d;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
            }),
            function() {
                var a = y.createElement("div");
                if (null == k.deleteExpando) {
                    k.deleteExpando = !0;
                    try {
                        delete a.test
                    } catch (b) {
                        k.deleteExpando = !1
                    }
                }
                a = null
            }(), m.acceptData = function(a) {
                var b = m.noData[(a.nodeName + " ").toLowerCase()],
                    c = +a.nodeType || 1;
                return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
            };
        var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            N = /([A-Z])/g;

        function O(a, b, c) {
            if (void 0 === c && 1 === a.nodeType) {
                var d = "data-" + b.replace(N, "-$1").toLowerCase();
                if (c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                    } catch (e) {}
                    m.data(a, b, c)
                } else {
                    c = void 0
                }
            }
            return c
        }

        function P(a) {
            var b;
            for (b in a) {
                if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) {
                    return !1
                }
            }
            return !0
        }

        function Q(a, b, d, e) {
            if (m.acceptData(a)) {
                var f, g, h = m.expando,
                    i = a.nodeType,
                    j = i ? m.cache : a,
                    k = i ? a[h] : a[h] && h;
                if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) {
                    return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                        toJSON: m.noop
                    }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
                }
            }
        }

        function R(a, b, c) {
            if (m.acceptData(a)) {
                var d, e, f = a.nodeType,
                    g = f ? m.cache : a,
                    h = f ? a[m.expando] : m.expando;
                if (g[h]) {
                    if (b && (d = c ? g[h] : g[h].data)) {
                        m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                        while (e--) {
                            delete d[b[e]]
                        }
                        if (c ? !P(d) : !m.isEmptyObject(d)) {
                            return
                        }
                    }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
                }
            }
        }
        m.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
            },
            data: function(a, b, c) {
                return Q(a, b, c)
            },
            removeData: function(a, b) {
                return R(a, b)
            },
            _data: function(a, b, c) {
                return Q(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return R(a, b, !0)
            }
        }), m.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--) {
                            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])))
                        }
                        m._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    m.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    m.data(this, a, b)
                }) : f ? O(f, a, m.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    m.removeData(this, a)
                })
            }
        }), m.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = m.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = m._queueHooks(a, b),
                    g = function() {
                        m.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return m._data(a, c) || m._data(a, c, {
                    empty: m.Callbacks("once memory").add(function() {
                        m._removeData(a, b + "queue"), m._removeData(a, c)
                    })
                })
            }
        }), m.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = m.queue(this, a, b);
                    m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    m.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = m.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--) {
                    c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h))
                }
                return h(), e.promise(b)
            }
        });
        var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            T = ["Top", "Right", "Bottom", "Left"],
            U = function(a, b) {
                return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
            },
            V = m.access = function(a, b, c, d, e, f, g) {
                var h = 0,
                    i = a.length,
                    j = null == c;
                if ("object" === m.type(c)) {
                    e = !0;
                    for (h in c) {
                        m.access(a, b, h, c[h], !0, f, g)
                    }
                } else {
                    if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                            return j.call(m(a), c)
                        })), b)) {
                        for (; i > h; h++) {
                            b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
                        }
                    }
                }
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            },
            W = /^(?:checkbox|radio)$/i;
        ! function() {
            var a = y.createElement("input"),
                b = y.createElement("div"),
                c = y.createDocumentFragment();
            if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                    k.noCloneEvent = !1
                }), b.cloneNode(!0).click()), null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete b.test
                } catch (d) {
                    k.deleteExpando = !1
                }
            }
        }(),
        function() {
            var b, c, d = y.createElement("div");
            for (b in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) {
                c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1)
            }
            d = null
        }();
        var X = /^(?:input|select|textarea)$/i,
            Y = /^key/,
            Z = /^(?:mouse|pointer|contextmenu)|click/,
            $ = /^(?:focusinfocus|focusoutblur)$/,
            _ = /^([^.]*)(?:\.(.+)|)$/;

        function ab() {
            return !0
        }

        function bb() {
            return !1
        }

        function cb() {
            try {
                return y.activeElement
            } catch (a) {}
        }
        m.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
                if (r) {
                    c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                        return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                    }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                    while (h--) {
                        f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                            type: o,
                            origType: q,
                            data: d,
                            handler: c,
                            guid: c.guid,
                            selector: e,
                            needsContext: e && m.expr.match.needsContext.test(e),
                            namespace: p.join(".")
                        }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0)
                    }
                    a = null
                }
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
                if (r && (k = r.events)) {
                    b = (b || "").match(E) || [""], j = b.length;
                    while (j--) {
                        if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                            l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                            while (f--) {
                                g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g))
                            }
                            i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                        } else {
                            for (o in k) {
                                m.event.remove(a, o + b[j], c, d, !0)
                            }
                        }
                    }
                    m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
                }
            },
            trigger: function(b, c, d, e) {
                var f, g, h, i, k, l, n, o = [d || y],
                    p = j.call(b, "type") ? b.type : b,
                    q = j.call(b, "namespace") ? b.namespace.split(".") : [];
                if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                    if (!e && !k.noBubble && !m.isWindow(d)) {
                        for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) {
                            o.push(h), l = h
                        }
                        l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                    }
                    n = 0;
                    while ((h = o[n++]) && !b.isPropagationStopped()) {
                        b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault())
                    }
                    if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                        l = d[g], l && (d[g] = null), m.event.triggered = p;
                        try {
                            d[p]()
                        } catch (r) {}
                        m.event.triggered = void 0, l && (d[g] = l)
                    }
                    return b.result
                }
            },
            dispatch: function(a) {
                a = m.event.fix(a);
                var b, c, e, f, g, h = [],
                    i = d.call(arguments),
                    j = (m._data(this, "events") || {})[a.type] || [],
                    k = m.event.special[a.type] || {};
                if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                    h = m.event.handlers.call(this, a, j), b = 0;
                    while ((f = h[b++]) && !a.isPropagationStopped()) {
                        a.currentTarget = f.elem, g = 0;
                        while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) {
                            (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                        }
                    }
                    return k.postDispatch && k.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type)) {
                    for (; i != this; i = i.parentNode || this) {
                        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                            for (e = [], f = 0; h > f; f++) {
                                d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d)
                            }
                            e.length && g.push({
                                elem: i,
                                handlers: e
                            })
                        }
                    }
                }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }), g
            },
            fix: function(a) {
                if (a[m.expando]) {
                    return a
                }
                var b, c, d, e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
                while (b--) {
                    c = d[b], a[c] = f[c]
                }
                return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, d, e, f = b.button,
                        g = b.fromElement;
                    return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== cb() && this.focus) {
                            try {
                                return this.focus(), !1
                            } catch (a) {}
                        }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === cb() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(a) {
                        return m.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = m.extend(new m.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
        }, m.Event = function(a, b) {
            return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
        }, m.Event.prototype = {
            isDefaultPrevented: bb,
            isPropagationStopped: bb,
            isImmediatePropagationStopped: bb,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, m.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            m.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), k.submitBubbles || (m.event.special.submit = {
            setup: function() {
                return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                    var b = a.target,
                        c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                    c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                        a._submit_bubble = !0
                    }), m._data(c, "submitBubbles", !0))
                })
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
            }
        }), k.changeBubbles || (m.event.special.change = {
            setup: function() {
                return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), m.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
                })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                    }), m._data(b, "changeBubbles", !0))
                })
            },
            handle: function(a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return m.event.remove(this, "._change"), !X.test(this.nodeName)
            }
        }), k.focusinBubbles || m.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                m.event.simulate(b, a.target, m.event.fix(a), !0)
            };
            m.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = m._data(d, b);
                    e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = m._data(d, b) - 1;
                    e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
                }
            }
        }), m.fn.extend({
            on: function(a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                    "string" != typeof b && (c = c || b, b = void 0);
                    for (f in a) {
                        this.on(f, b, c, a[f], e)
                    }
                    return this
                }
                if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) {
                    d = bb
                } else {
                    if (!d) {
                        return this
                    }
                }
                return 1 === e && (g = d, d = function(a) {
                    return m().off(a), g.apply(this, arguments)
                }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                    m.event.add(this, a, d, c, b)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) {
                    return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this
                }
                if ("object" == typeof a) {
                    for (e in a) {
                        this.off(e, b, a[e])
                    }
                    return this
                }
                return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function() {
                    m.event.remove(this, a, c, b)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    m.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? m.event.trigger(a, b, c, !0) : void 0
            }
        });

        function db(a) {
            var b = eb.split("|"),
                c = a.createDocumentFragment();
            if (c.createElement) {
                while (b.length) {
                    c.createElement(b.pop())
                }
            }
            return c
        }
        var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            fb = / jQuery\d+="(?:null|\d+)"/g,
            gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
            hb = /^\s+/,
            ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            jb = /<([\w:]+)/,
            kb = /<tbody/i,
            lb = /<|&#?\w+;/,
            mb = /<(?:script|style|link)/i,
            nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ob = /^$|\/(?:java|ecma)script/i,
            pb = /^true\/(.*)/,
            qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            rb = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            sb = db(y),
            tb = sb.appendChild(y.createElement("div"));
        rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;

        function ub(a, b) {
            var c, d, e = 0,
                f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
            if (!f) {
                for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
                    !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b))
                }
            }
            return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
        }

        function vb(a) {
            W.test(a.type) && (a.defaultChecked = a.checked)
        }

        function wb(a, b) {
            return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function xb(a) {
            return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
        }

        function yb(a) {
            var b = pb.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function zb(a, b) {
            for (var c, d = 0; null != (c = a[d]); d++) {
                m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
            }
        }

        function Ab(a, b) {
            if (1 === b.nodeType && m.hasData(a)) {
                var c, d, e, f = m._data(a),
                    g = m._data(b, f),
                    h = f.events;
                if (h) {
                    delete g.handle, g.events = {};
                    for (c in h) {
                        for (d = 0, e = h[c].length; e > d; d++) {
                            m.event.add(b, c, h[c][d])
                        }
                    }
                }
                g.data && (g.data = m.extend({}, g.data))
            }
        }

        function Bb(a, b) {
            var c, d, e;
            if (1 === b.nodeType) {
                if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                    e = m._data(b);
                    for (d in e.events) {
                        m.removeEvent(b, d, e.handle)
                    }
                    b.removeAttribute(m.expando)
                }
                "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
            }
        }
        m.extend({
            clone: function(a, b, c) {
                var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
                if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) {
                    for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) {
                        d[g] && Bb(e, d[g])
                    }
                }
                if (b) {
                    if (c) {
                        for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) {
                            Ab(e, d[g])
                        }
                    } else {
                        Ab(a, f)
                    }
                }
                return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++) {
                    if (f = a[q], f || 0 === f) {
                        if ("object" === m.type(f)) {
                            m.merge(p, f.nodeType ? [f] : f)
                        } else {
                            if (lb.test(f)) {
                                h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                                while (e--) {
                                    h = h.lastChild
                                }
                                if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                                    f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                                    while (e--) {
                                        m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                                    }
                                }
                                m.merge(p, h.childNodes), h.textContent = "";
                                while (h.firstChild) {
                                    h.removeChild(h.firstChild)
                                }
                                h = o.lastChild
                            } else {
                                p.push(b.createTextNode(f))
                            }
                        }
                    }
                }
                h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
                while (f = p[q++]) {
                    if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                        e = 0;
                        while (f = h[e++]) {
                            ob.test(f.type || "") && c.push(f)
                        }
                    }
                }
                return h = null, o
            },
            cleanData: function(a, b) {
                for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) {
                    if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                        if (g.events) {
                            for (e in g.events) {
                                n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle)
                            }
                        }
                        j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                    }
                }
            }
        }), m.fn.extend({
            text: function(a) {
                return V(this, function(a) {
                    return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
                }, null, a, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = wb(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = wb(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
                    b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c))
                }
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    1 === a.nodeType && m.cleanData(ub(a, !1));
                    while (a.firstChild) {
                        a.removeChild(a.firstChild)
                    }
                    a.options && m.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                    return m.clone(this, a, b)
                })
            },
            html: function(a) {
                return V(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a) {
                        return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0
                    }
                    if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                        a = a.replace(ib, "<$1></$2>");
                        try {
                            for (; d > c; c++) {
                                b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a)
                            }
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = arguments[0];
                return this.domManip(arguments, function(b) {
                    a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
                }), a && (a.length || a.nodeType) ? this : this.remove()
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b) {
                a = e.apply([], a);
                var c, d, f, g, h, i, j = 0,
                    l = this.length,
                    n = this,
                    o = l - 1,
                    p = a[0],
                    q = m.isFunction(p);
                if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) {
                    return this.each(function(c) {
                        var d = n.eq(c);
                        q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
                    })
                }
                if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                    for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) {
                        d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j)
                    }
                    if (f) {
                        for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) {
                            d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")))
                        }
                    }
                    i = c = null
                }
                return this
            }
        }), m.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            m.fn[a] = function(a) {
                for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) {
                    c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get())
                }
                return this.pushStack(e)
            }
        });
        var Cb, Db = {};

        function Eb(b, c) {
            var d, e = m(c.createElement(b)).appendTo(c.body),
                f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
            return e.detach(), f
        }

        function Fb(a) {
            var b = y,
                c = Db[a];
            return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
        }! function() {
            var a;
            k.shrinkWrapBlocks = function() {
                if (null != a) {
                    return a
                }
                a = !1;
                var b, c, d;
                return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
            }
        }();
        var Gb = /^margin/,
            Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
            Ib, Jb, Kb = /^(top|right|bottom|left)$/;
        a.getComputedStyle ? (Ib = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        }, Jb = function(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
        }) : y.documentElement.currentStyle && (Ib = function(a) {
            return a.currentStyle
        }, Jb = function(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
        });

        function Lb(a, b) {
            return {
                get: function() {
                    var c = a();
                    if (null != c) {
                        return c ? void delete this.get : (this.get = b).apply(this, arguments)
                    }
                }
            }
        }! function() {
            var b, c, d, e, f, g, h;
            if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
                c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                    reliableHiddenOffsets: function() {
                        return null == g && i(), g
                    },
                    boxSizingReliable: function() {
                        return null == f && i(), f
                    },
                    pixelPosition: function() {
                        return null == e && i(), e
                    },
                    reliableMarginRight: function() {
                        return null == h && i(), h
                    }
                });

                function i() {
                    var b, c, d, i;
                    c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                        width: "4px"
                    }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
                }
            }
        }(), m.swap = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) {
                g[f] = a.style[f], a.style[f] = b[f]
            }
            e = c.apply(a, d || []);
            for (f in b) {
                a.style[f] = g[f]
            }
            return e
        };
        var Mb = /alpha\([^)]*\)/i,
            Nb = /opacity\s*=\s*([^)]*)/,
            Ob = /^(none|table(?!-c[ea]).+)/,
            Pb = new RegExp("^(" + S + ")(.*)$", "i"),
            Qb = new RegExp("^([+-])=(" + S + ")", "i"),
            Rb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Sb = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Tb = ["Webkit", "O", "Moz", "ms"];

        function Ub(a, b) {
            if (b in a) {
                return b
            }
            var c = b.charAt(0).toUpperCase() + b.slice(1),
                d = b,
                e = Tb.length;
            while (e--) {
                if (b = Tb[e] + c, b in a) {
                    return b
                }
            }
            return d
        }

        function Vb(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
                d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))))
            }
            for (g = 0; h > g; g++) {
                d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"))
            }
            return a
        }

        function Wb(a, b, c) {
            var d = Pb.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function Xb(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
                "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)))
            }
            return g
        }

        function Yb(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = Ib(a),
                g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) {
                    return e
                }
                d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }
        m.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = Jb(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": k.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = m.camelCase(b),
                        i = a.style;
                    if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) {
                        return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]
                    }
                    if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) {
                        try {
                            i[b] = c
                        } catch (j) {}
                    }
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = m.camelCase(b);
                return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
            }
        }), m.each(["height", "width"], function(a, b) {
            m.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() {
                        return Yb(a, b, d)
                    }) : Yb(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e = d && Ib(a);
                    return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), k.opacity || (m.cssHooks.opacity = {
            get: function(a, b) {
                return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    f = d && d.filter || c.filter || "";
                c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
            }
        }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) {
            return b ? m.swap(a, {
                display: "inline-block"
            }, Jb, [a, "marginRight"]) : void 0
        }), m.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            m.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                        e[a + T[d] + b] = f[d] || f[d - 2] || f[0]
                    }
                    return e
                }
            }, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
        }), m.fn.extend({
            css: function(a, b) {
                return V(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (m.isArray(b)) {
                        for (d = Ib(a), e = b.length; e > g; g++) {
                            f[b[g]] = m.css(a, b[g], !1, d)
                        }
                        return f
                    }
                    return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return Vb(this, !0)
            },
            hide: function() {
                return Vb(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    U(this) ? m(this).show() : m(this).hide()
                })
            }
        });

        function Zb(a, b, c, d, e) {
            return new Zb.prototype.init(a, b, c, d, e)
        }
        m.Tween = Zb, Zb.prototype = {
            constructor: Zb,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = Zb.propHooks[this.prop];
                return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = Zb.propHooks[this.prop];
                return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
            }
        }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                },
                set: function(a) {
                    m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, m.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return 0.5 - Math.cos(a * Math.PI) / 2
            }
        }, m.fx = Zb.prototype.init, m.fx.step = {};
        var $b, _b, ac = /^(?:toggle|show|hide)$/,
            bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
            cc = /queueHooks$/,
            dc = [ic],
            ec = {
                "*": [function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = bc.exec(b),
                        f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                        g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do {
                            h = h || ".5", g /= h, m.style(c.elem, a, g + f)
                        } while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }]
            };

        function fc() {
            return setTimeout(function() {
                $b = void 0
            }), $b = m.now()
        }

        function gc(a, b) {
            var c, d = {
                    height: a
                },
                e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
                c = T[e], d["margin" + c] = d["padding" + c] = a
            }
            return b && (d.opacity = d.width = a), d
        }

        function hc(a, b, c) {
            for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++) {
                if (d = e[f].call(c, b, a)) {
                    return d
                }
            }
        }

        function ic(a, b, c) {
            var d, e, f, g, h, i, j, l, n = this,
                o = {},
                p = a.style,
                q = a.nodeType && U(a),
                r = m._data(a, "fxshow");
            c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i()
            }), h.unqueued++, n.always(function() {
                n.always(function() {
                    h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
                p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
            }));
            for (d in b) {
                if (e = b[d], ac.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                        if ("show" !== e || !r || void 0 === r[d]) {
                            continue
                        }
                        q = !0
                    }
                    o[d] = r && r[d] || m.style(a, d)
                } else {
                    j = void 0
                }
            }
            if (m.isEmptyObject(o)) {
                "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j)
            } else {
                r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() {
                    m(a).hide()
                }), n.done(function() {
                    var b;
                    m._removeData(a, "fxshow");
                    for (b in o) {
                        m.style(a, b, o[b])
                    }
                });
                for (d in o) {
                    g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
                }
            }
        }

        function jc(a, b) {
            var c, d, e, f, g;
            for (c in a) {
                if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) {
                        c in a || (a[c] = f[c], b[c] = e)
                    }
                } else {
                    b[d] = e
                }
            }
        }

        function kc(a, b, c) {
            var d, e, f = 0,
                g = dc.length,
                h = m.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) {
                        return !1
                    }
                    for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                        j.tweens[g].run(f)
                    }
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: m.extend({}, b),
                    opts: m.extend(!0, {
                        specialEasing: {}
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: $b || fc(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) {
                            return this
                        }
                        for (e = !0; d > c; c++) {
                            j.tweens[c].run(1)
                        }
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (jc(k, j.opts.specialEasing); g > f; f++) {
                if (d = dc[f].call(j, a, k, j.opts)) {
                    return d
                }
            }
            return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }
        m.Animation = m.extend(kc, {
                tweener: function(a, b) {
                    m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                    for (var c, d = 0, e = a.length; e > d; d++) {
                        c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
                    }
                },
                prefilter: function(a, b) {
                    b ? dc.unshift(a) : dc.push(a)
                }
            }), m.speed = function(a, b, c) {
                var d = a && "object" == typeof a ? m.extend({}, a) : {
                    complete: c || !c && b || m.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !m.isFunction(b) && b
                };
                return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                    m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
                }, d
            }, m.fn.extend({
                fadeTo: function(a, b, c, d) {
                    return this.filter(U).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function(a, b, c, d) {
                    var e = m.isEmptyObject(a),
                        f = m.speed(b, c, d),
                        g = function() {
                            var b = kc(this, m.extend({}, a), f);
                            (e || m._data(this, "finish")) && b.stop(!0)
                        };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = m.timers,
                            g = m._data(this);
                        if (e) {
                            g[e] && g[e].stop && d(g[e])
                        } else {
                            for (e in g) {
                                g[e] && g[e].stop && cc.test(e) && d(g[e])
                            }
                        }
                        for (e = f.length; e--;) {
                            f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1))
                        }(b || !c) && m.dequeue(this, a)
                    })
                },
                finish: function(a) {
                    return a !== !1 && (a = a || "fx"), this.each(function() {
                        var b, c = m._data(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = m.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                            f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1))
                        }
                        for (b = 0; g > b; b++) {
                            d[b] && d[b].finish && d[b].finish.call(this)
                        }
                        delete c.finish
                    })
                }
            }), m.each(["toggle", "show", "hide"], function(a, b) {
                var c = m.fn[b];
                m.fn[b] = function(a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
                }
            }), m.each({
                slideDown: gc("show"),
                slideUp: gc("hide"),
                slideToggle: gc("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(a, b) {
                m.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }), m.timers = [], m.fx.tick = function() {
                var a, b = m.timers,
                    c = 0;
                for ($b = m.now(); c < b.length; c++) {
                    a = b[c], a() || b[c] !== a || b.splice(c--, 1)
                }
                b.length || m.fx.stop(), $b = void 0
            }, m.fx.timer = function(a) {
                m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
            }, m.fx.interval = 13, m.fx.start = function() {
                _b || (_b = setInterval(m.fx.tick, m.fx.interval))
            }, m.fx.stop = function() {
                clearInterval(_b), _b = null
            }, m.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, m.fn.delay = function(a, b) {
                return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
            },
            function() {
                var a, b, c, d, e;
                b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
            }();
        var lc = /\r/g;
        m.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0];
                if (arguments.length) {
                    return d = m.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    })
                }
                if (e) {
                    return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
                }
            }
        }), m.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = m.find.attr(a, "value");
                        return null != b ? b : m.trim(m.text(a))
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                            if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                                if (b = m(c).val(), f) {
                                    return b
                                }
                                g.push(b)
                            }
                        }
                        return g
                    },
                    set: function(a, b) {
                        var c, d, e = a.options,
                            f = m.makeArray(b),
                            g = e.length;
                        while (g--) {
                            if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) {
                                try {
                                    d.selected = c = !0
                                } catch (h) {
                                    d.scrollHeight
                                }
                            } else {
                                d.selected = !1
                            }
                        }
                        return c || (a.selectedIndex = -1), e
                    }
                }
            }
        }), m.each(["radio", "checkbox"], function() {
            m.valHooks[this] = {
                set: function(a, b) {
                    return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
                }
            }, k.checkOn || (m.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var mc, nc, oc = m.expr.attrHandle,
            pc = /^(?:checked|selected)$/i,
            qc = k.getSetAttribute,
            rc = k.input;
        m.fn.extend({
            attr: function(a, b) {
                return V(this, m.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    m.removeAttr(this, a)
                })
            }
        }), m.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f) {
                    return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
                }
            },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(E);
                if (f && 1 === a.nodeType) {
                    while (c = f[e++]) {
                        d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
                    }
                }
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            }
        }), nc = {
            set: function(a, b, c) {
                return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
            }
        }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = oc[b] || m.find.attr;
            oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) {
                var e, f;
                return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
            } : function(a, b, c) {
                return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
            }
        }), rc && qc || (m.attrHooks.value = {
            set: function(a, b, c) {
                return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c)
            }
        }), qc || (mc = {
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
            }
        }, oc.id = oc.name = oc.coords = function(a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
        }, m.valHooks.button = {
            get: function(a, b) {
                var c = a.getAttributeNode(b);
                return c && c.specified ? c.value : void 0
            },
            set: mc.set
        }, m.attrHooks.contenteditable = {
            set: function(a, b, c) {
                mc.set(a, "" === b ? !1 : b, c)
            }
        }, m.each(["width", "height"], function(a, b) {
            m.attrHooks[b] = {
                set: function(a, c) {
                    return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
                }
            }
        })), k.style || (m.attrHooks.style = {
            get: function(a) {
                return a.style.cssText || void 0
            },
            set: function(a, b) {
                return a.style.cssText = b + ""
            }
        });
        var sc = /^(?:input|select|textarea|button|object)$/i,
            tc = /^(?:a|area)$/i;
        m.fn.extend({
            prop: function(a, b) {
                return V(this, m.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return a = m.propFix[a] || a, this.each(function() {
                    try {
                        this[a] = void 0, delete this[a]
                    } catch (b) {}
                })
            }
        }), m.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(a, b, c) {
                var d, e, f, g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g) {
                    return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
                }
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = m.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            }
        }), k.hrefNormalized || m.each(["href", "src"], function(a, b) {
            m.propHooks[b] = {
                get: function(a) {
                    return a.getAttribute(b, 4)
                }
            }
        }), k.optSelected || (m.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
            }
        }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            m.propFix[this.toLowerCase()] = this
        }), k.enctype || (m.propFix.enctype = "encoding");
        var uc = /[\t\r\n\f]/g;
        m.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h = 0,
                    i = this.length,
                    j = "string" == typeof a && a;
                if (m.isFunction(a)) {
                    return this.each(function(b) {
                        m(this).addClass(a.call(this, b, this.className))
                    })
                }
                if (j) {
                    for (b = (a || "").match(E) || []; i > h; h++) {
                        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                            f = 0;
                            while (e = b[f++]) {
                                d.indexOf(" " + e + " ") < 0 && (d += e + " ")
                            }
                            g = m.trim(d), c.className !== g && (c.className = g)
                        }
                    }
                }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h = 0,
                    i = this.length,
                    j = 0 === arguments.length || "string" == typeof a && a;
                if (m.isFunction(a)) {
                    return this.each(function(b) {
                        m(this).removeClass(a.call(this, b, this.className))
                    })
                }
                if (j) {
                    for (b = (a || "").match(E) || []; i > h; h++) {
                        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                            f = 0;
                            while (e = b[f++]) {
                                while (d.indexOf(" " + e + " ") >= 0) {
                                    d = d.replace(" " + e + " ", " ")
                                }
                            }
                            g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                        }
                    }
                }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                    m(this).toggleClass(a.call(this, c, this.className, b), b)
                } : function() {
                    if ("string" === c) {
                        var b, d = 0,
                            e = m(this),
                            f = a.match(E) || [];
                        while (b = f[d++]) {
                            e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                        }
                    } else {
                        (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
                    }
                })
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) {
                        return !0
                    }
                }
                return !1
            }
        }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            m.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), m.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var vc = m.now(),
            wc = /\?/,
            xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        m.parseJSON = function(b) {
            if (a.JSON && a.JSON.parse) {
                return a.JSON.parse(b + "")
            }
            var c, d = null,
                e = m.trim(b + "");
            return e && !m.trim(e.replace(xc, function(a, b, e, f) {
                return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
            })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
        }, m.parseXML = function(b) {
            var c, d;
            if (!b || "string" != typeof b) {
                return null
            }
            try {
                a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
            } catch (e) {
                c = void 0
            }
            return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
        };
        var yc, zc, Ac = /#.*$/,
            Bc = /([?&])_=[^&]*/,
            Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ec = /^(?:GET|HEAD)$/,
            Fc = /^\/\//,
            Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Hc = {},
            Ic = {},
            Jc = "*/".concat("*");
        try {
            zc = location.href
        } catch (Kc) {
            zc = y.createElement("a"), zc.href = "", zc = zc.href
        }
        yc = Gc.exec(zc.toLowerCase()) || [];

        function Lc(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(E) || [];
                if (m.isFunction(c)) {
                    while (d = f[e++]) {
                        "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                    }
                }
            }
        }

        function Mc(a, b, c, d) {
            var e = {},
                f = a === Ic;

            function g(h) {
                var i;
                return e[h] = !0, m.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
                }), i
            }
            return g(b.dataTypes[0]) || !e["*"] && g("*")
        }

        function Nc(a, b) {
            var c, d, e = m.ajaxSettings.flatOptions || {};
            for (d in b) {
                void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d])
            }
            return c && m.extend(!0, a, c), a
        }

        function Oc(a, b, c) {
            var d, e, f, g, h = a.contents,
                i = a.dataTypes;
            while ("*" === i[0]) {
                i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"))
            }
            if (e) {
                for (g in h) {
                    if (h[g] && h[g].test(e)) {
                        i.unshift(g);
                        break
                    }
                }
            }
            if (i[0] in c) {
                f = i[0]
            } else {
                for (g in c) {
                    if (!i[0] || a.converters[g + " " + i[0]]) {
                        f = g;
                        break
                    }
                    d || (d = g)
                }
                f = f || d
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function Pc(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1]) {
                for (g in a.converters) {
                    j[g.toLowerCase()] = a.converters[g]
                }
            }
            f = k.shift();
            while (f) {
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
                    if ("*" === f) {
                        f = i
                    } else {
                        if ("*" !== i && i !== f) {
                            if (g = j[i + " " + f] || j["* " + f], !g) {
                                for (e in j) {
                                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                        break
                                    }
                                }
                            }
                            if (g !== !0) {
                                if (g && a["throws"]) {
                                    b = g(b)
                                } else {
                                    try {
                                        b = g(b)
                                    } catch (l) {
                                        return {
                                            state: "parsererror",
                                            error: g ? l : "No conversion from " + i + " to " + f
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return {
                state: "success",
                data: b
            }
        }
        m.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: zc,
                type: "GET",
                isLocal: Dc.test(yc[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Jc,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": m.parseJSON,
                    "text xml": m.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
            },
            ajaxPrefilter: Lc(Hc),
            ajaxTransport: Lc(Ic),
            ajax: function(a, b) {
                "object" == typeof a && (b = a, a = void 0), b = b || {};
                var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                    l = k.context || k,
                    n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                    o = m.Deferred(),
                    p = m.Callbacks("once memory"),
                    q = k.statusCode || {},
                    r = {},
                    s = {},
                    t = 0,
                    u = "canceled",
                    v = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === t) {
                                if (!j) {
                                    j = {};
                                    while (b = Cc.exec(f)) {
                                        j[b[1].toLowerCase()] = b[2]
                                    }
                                }
                                b = j[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === t ? f : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return t || (a = s[c] = s[c] || a, r[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return t || (k.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a) {
                                if (2 > t) {
                                    for (b in a) {
                                        q[b] = [q[b], a[b]]
                                    }
                                } else {
                                    v.always(a[v.status])
                                }
                            }
                            return this
                        },
                        abort: function(a) {
                            var b = a || u;
                            return i && i.abort(b), x(0, b), this
                        }
                    };
                if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) {
                    return v
                }
                h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
                for (d in k.headers) {
                    v.setRequestHeader(d, k.headers[d])
                }
                if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) {
                    return v.abort()
                }
                u = "abort";
                for (d in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) {
                    v[d](k[d])
                }
                if (i = Mc(Ic, k, b, v)) {
                    v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                        v.abort("timeout")
                    }, k.timeout));
                    try {
                        t = 1, i.send(r, x)
                    } catch (w) {
                        if (!(2 > t)) {
                            throw w
                        }
                        x(-1, w)
                    }
                } else {
                    x(-1, "No Transport")
                }

                function x(a, b, c, d) {
                    var j, r, s, u, w, x = b;
                    2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
                }
                return v
            },
            getJSON: function(a, b, c) {
                return m.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return m.get(a, void 0, b, "script")
            }
        }), m.each(["get", "post"], function(a, b) {
            m[b] = function(a, c, d, e) {
                return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                })
            }
        }), m._evalUrl = function(a) {
            return m.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, m.fn.extend({
            wrapAll: function(a) {
                if (m.isFunction(a)) {
                    return this.each(function(b) {
                        m(this).wrapAll(a.call(this, b))
                    })
                }
                if (this[0]) {
                    var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                        var a = this;
                        while (a.firstChild && 1 === a.firstChild.nodeType) {
                            a = a.firstChild
                        }
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return this.each(m.isFunction(a) ? function(b) {
                    m(this).wrapInner(a.call(this, b))
                } : function() {
                    var b = m(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = m.isFunction(a);
                return this.each(function(c) {
                    m(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
                }).end()
            }
        }), m.expr.filters.hidden = function(a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
        }, m.expr.filters.visible = function(a) {
            return !m.expr.filters.hidden(a)
        };
        var Qc = /%20/g,
            Rc = /\[\]$/,
            Sc = /\r?\n/g,
            Tc = /^(?:submit|button|image|reset|file)$/i,
            Uc = /^(?:input|select|textarea|keygen)/i;

        function Vc(a, b, c, d) {
            var e;
            if (m.isArray(b)) {
                m.each(b, function(b, e) {
                    c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
                })
            } else {
                if (c || "object" !== m.type(b)) {
                    d(a, b)
                } else {
                    for (e in b) {
                        Vc(a + "[" + e + "]", b[e], c, d)
                    }
                }
            }
        }
        m.param = function(a, b) {
            var c, d = [],
                e = function(a, b) {
                    b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) {
                m.each(a, function() {
                    e(this.name, this.value)
                })
            } else {
                for (c in a) {
                    Vc(c, a[c], b, e)
                }
            }
            return d.join("&").replace(Qc, "+")
        }, m.fn.extend({
            serialize: function() {
                return m.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = m.prop(this, "elements");
                    return a ? m.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
                }).map(function(a, b) {
                    var c = m(this).val();
                    return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(Sc, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(Sc, "\r\n")
                    }
                }).get()
            }
        }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
        } : Zc;
        var Wc = 0,
            Xc = {},
            Yc = m.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() {
            for (var a in Xc) {
                Xc[a](void 0, !0)
            }
        }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function(a) {
            if (!a.crossDomain || k.cors) {
                var b;
                return {
                    send: function(c, d) {
                        var e, f = a.xhr(),
                            g = ++Wc;
                        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) {
                            for (e in a.xhrFields) {
                                f[e] = a.xhrFields[e]
                            }
                        }
                        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                        for (e in c) {
                            void 0 !== c[e] && f.setRequestHeader(e, c[e] + "")
                        }
                        f.send(a.hasContent && a.data || null), b = function(c, e) {
                            var h, i, j;
                            if (b && (e || 4 === f.readyState)) {
                                if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) {
                                    4 !== f.readyState && f.abort()
                                } else {
                                    j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                    try {
                                        i = f.statusText
                                    } catch (k) {
                                        i = ""
                                    }
                                    h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                                }
                            }
                            j && d(h, i, j, f.getAllResponseHeaders())
                        }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                    },
                    abort: function() {
                        b && b(void 0, !0)
                    }
                }
            }
        });

        function Zc() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {}
        }

        function $c() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {}
        }
        m.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    return m.globalEval(a), a
                }
            }
        }), m.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
        }), m.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c = y.head || m("head")[0] || y.documentElement;
                return {
                    send: function(d, e) {
                        b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                        }, c.insertBefore(b, c.firstChild)
                    },
                    abort: function() {
                        b && b.onload(void 0, !0)
                    }
                }
            }
        });
        var _c = [],
            ad = /(=)\?(?=&|$)|\?\?/;
        m.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = _c.pop() || m.expando + "_" + vc++;
                return this[a] = !0, a
            }
        }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
                return g || m.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                g = arguments
            }, d.always(function() {
                a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), m.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a) {
                return null
            }
            "boolean" == typeof b && (c = b, b = !1), b = b || y;
            var d = u.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
        };
        var bd = m.fn.load;
        m.fn.load = function(a, b, c) {
            if ("string" != typeof a && bd) {
                return bd.apply(this, arguments)
            }
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
                url: a,
                type: f,
                dataType: "html",
                data: b
            }).done(function(a) {
                e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
            }).complete(c && function(a, b) {
                g.each(c, e || [a.responseText, b, a])
            }), this
        }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            m.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), m.expr.filters.animated = function(a) {
            return m.grep(m.timers, function(b) {
                return a === b.elem
            }).length
        };
        var cd = a.document.documentElement;

        function dd(a) {
            return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }
        m.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = m.css(a, "position"),
                    l = m(a),
                    n = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
            }
        }, m.fn.extend({
            offset: function(a) {
                if (arguments.length) {
                    return void 0 === a ? this : this.each(function(b) {
                        m.offset.setOffset(this, a, b)
                    })
                }
                var b, c, d = {
                        top: 0,
                        left: 0
                    },
                    e = this[0],
                    f = e && e.ownerDocument;
                if (f) {
                    return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
                        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                    }) : d
                }
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = {
                            top: 0,
                            left: 0
                        },
                        d = this[0];
                    return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - c.top - m.css(d, "marginTop", !0),
                        left: b.left - c.left - m.css(d, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var a = this.offsetParent || cd;
                    while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) {
                        a = a.offsetParent
                    }
                    return a || cd
                })
            }
        }), m.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var c = /Y/.test(b);
            m.fn[a] = function(d) {
                return V(this, function(a, d, e) {
                    var f = dd(a);
                    return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
                }, a, d, arguments.length, null)
            }
        }), m.each(["top", "left"], function(a, b) {
            m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) {
                return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
            })
        }), m.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            m.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                m.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return V(this, function(b, c, d) {
                        var e;
                        return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), m.fn.size = function() {
            return this.length
        }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return m
        });
        var ed = a.jQuery,
            fd = a.$;
        return m.noConflict = function(b) {
            return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
        }, typeof b === K && (a.jQuery = a.$ = m), m
    });
    (function(b) {
        b.fn.allBut = function(l) {
            var h = this;
            var k = b();
            var g = b(l || "body").children();
            while (g.size() > 0) {
                var a = g.first();
                g = g.slice(1);
                if (a.filter(h).size() != h.size()) {
                    if (a.has(h).size() > 0) {
                        g = g.add(a.children())
                    } else {
                        k = k.add(a)
                    }
                }
            }
            return k
        }
    })(jQuery);
    (function(J) {
        var E = 0;
        var H = 0;
        var A = 100000;
        var z = "";
        var F = "";
        var D;
        var C = 0;
        var u = [];
        var I;
        var y = 0;
        var G = false;
        ! function(k, m) {
            var o, p, q, a = "._tap",
                b = "._tapActive",
                c = "tap",
                d = "clientX clientY screenX screenY pageX pageY".split(" "),
                e = {
                    count: 0,
                    event: 0
                },
                f = function(t, P) {
                    var Q = P.originalEvent,
                        R = m.Event(Q);
                    R.type = t;
                    for (var r = 0, s = d.length; s > r; r++) {
                        R[d[r]] = P[d[r]]
                    }
                    return R
                },
                g = function(t) {
                    if (t.isTrigger) {
                        return !1
                    }
                    var O = e.event,
                        P = Math.abs(t.pageX - O.pageX),
                        r = Math.abs(t.pageY - O.pageY),
                        s = Math.max(P, r);
                    return t.timeStamp - O.timeStamp < m.tap.TIME_DELTA && s < m.tap.POSITION_DELTA && (!O.touches || 1 === e.count) && n.isTracking
                },
                h = function(t) {
                    if (!q) {
                        return !1
                    }
                    var N = Math.abs(t.pageX - q.pageX),
                        r = Math.abs(t.pageY - q.pageY),
                        s = Math.max(N, r);
                    return Math.abs(t.timeStamp - q.timeStamp) < 750 && s < m.tap.POSITION_DELTA
                },
                l = function(s) {
                    if (0 === s.type.indexOf("touch")) {
                        s.touches = s.originalEvent.changedTouches;
                        for (var t = s.touches[0], N = 0, r = d.length; r > N; N++) {
                            s[d[N]] = t[d[N]]
                        }
                    }
                    s.timeStamp = Date.now ? Date.now() : +new Date
                },
                n = {
                    isEnabled: !1,
                    isTracking: !1,
                    enable: function() {
                        n.isEnabled || (n.isEnabled = !0, o = m(k.body).on("touchstart" + a, n.onStart).on("mousedown" + a, n.onStart).on("click" + a, n.onClick))
                    },
                    disable: function() {
                        n.isEnabled && (n.isEnabled = !1, o.off(a))
                    },
                    onStart: function(r) {
                        r.isTrigger || (l(r), (!m.tap.LEFT_BUTTON_ONLY || r.touches || 1 === r.which) && (r.touches && (e.count = r.touches.length), n.isTracking || (r.touches || !h(r)) && (n.isTracking = !0, e.event = r, r.touches ? (q = r, o.on("touchend" + a + b, n.onEnd).on("touchcancel" + a + b, n.onCancel)) : o.on("mouseup" + a + b, n.onEnd))))
                    },
                    onEnd: function(s) {
                        var r;
                        s.isTrigger || (l(s), g(s) && (r = f(c, s), p = r, m(e.event.target).trigger(r)), n.onCancel(s))
                    },
                    onCancel: function(r) {
                        r && "touchcancel" === r.type && r.preventDefault(), n.isTracking = !1, o.off(b)
                    },
                    onClick: function(r) {
                        return !r.isTrigger && p && p.isDefaultPrevented() && p.target === r.target && p.pageX === r.pageX && p.pageY === r.pageY && r.timeStamp - p.timeStamp < 750 ? (p = null, !1) : void 0
                    }
                };
            m(k).ready(n.enable), m.tap = {
                POSITION_DELTA: 10,
                TIME_DELTA: 400,
                LEFT_BUTTON_ONLY: !0
            }
        }(document, jQuery);
        ! function() {
            function a(e) {
                e.fn.swiper = function(g) {
                    var f;
                    return e(this).each(function() {
                        var h = new Swiper(this, g);
                        f || (f = h)
                    }), f
                }
            }
            window.Swiper = function(at, T) {
                function h() {
                    return "horizontal" === aA.params.direction
                }

                function aE() {
                    aA.autoplayTimeoutId = setTimeout(function() {
                        aA.params.loop ? (aA.fixLoop(), aA._slideNext()) : aA.isEnd ? T.autoplayStopOnLast ? aA.stopAutoplay() : aA._slideTo(0) : aA._slideNext()
                    }, aA.params.autoplay)
                }

                function f(N, R) {
                    var Q = au(N.target);
                    if (!Q.is(R)) {
                        if ("string" == typeof R) {
                            Q = Q.parents(R)
                        } else {
                            if (R.nodeType) {
                                var O;
                                return Q.parents().each(function(U, V) {
                                    V === R && (O = R)
                                }), O ? R : void 0
                            }
                        }
                    }
                    return 0 === Q.length ? void 0 : Q[0]
                }

                function ax(N, R) {
                    R = R || {};
                    var Q = window.MutationObserver || window.WebkitMutationObserver,
                        O = new Q(function(U) {
                            U.forEach(function(V) {
                                aA.onResize(), aA.emit("onObserverUpdate", aA, V)
                            })
                        });
                    O.observe(N, {
                        attributes: "undefined" == typeof R.attributes ? !0 : R.attributes,
                        childList: "undefined" == typeof R.childList ? !0 : R.childList,
                        characterData: "undefined" == typeof R.characterData ? !0 : R.characterData
                    }), aA.observers.push(O)
                }

                function aB(W) {
                    W.originalEvent && (W = W.originalEvent);
                    var R = W.keyCode || W.charCode;
                    if (!(W.shiftKey || W.altKey || W.ctrlKey || W.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                        if (37 === R || 39 === R || 38 === R || 40 === R) {
                            var X = !1;
                            if (aA.container.parents(".swiper-slide").length > 0 && 0 === aA.container.parents(".swiper-slide-active").length) {
                                return
                            }
                            for (var Q = {
                                    left: window.pageXOffset,
                                    top: window.pageYOffset
                                }, Y = window.innerWidth, N = window.innerHeight, O = aA.container.offset(), Z = [
                                    [O.left, O.top],
                                    [O.left + aA.width, O.top],
                                    [O.left, O.top + aA.height],
                                    [O.left + aA.width, O.top + aA.height]
                                ], V = 0; V < Z.length; V++) {
                                var U = Z[V];
                                U[0] >= Q.left && U[0] <= Q.left + Y && U[1] >= Q.top && U[1] <= Q.top + N && (X = !0)
                            }
                            if (!X) {
                                return
                            }
                        }
                        h() ? ((37 === R || 39 === R) && (W.preventDefault ? W.preventDefault() : W.returnValue = !1), 39 === R && aA.slideNext(), 37 === R && aA.slidePrev()) : ((38 === R || 40 === R) && (W.preventDefault ? W.preventDefault() : W.returnValue = !1), 40 === R && aA.slideNext(), 38 === R && aA.slidePrev())
                    }
                }

                function aC(N) {
                    N.originalEvent && (N = N.originalEvent);
                    var R = aA._wheelEvent,
                        Q = 0;
                    if (N.detail) {
                        Q = -N.detail
                    } else {
                        if ("mousewheel" === R) {
                            if (aA.params.mousewheelForceToAxis) {
                                if (h()) {
                                    if (!(Math.abs(N.wheelDeltaX) > Math.abs(N.wheelDeltaY))) {
                                        return
                                    }
                                    Q = N.wheelDeltaX
                                } else {
                                    if (!(Math.abs(N.wheelDeltaY) > Math.abs(N.wheelDeltaX))) {
                                        return
                                    }
                                    Q = N.wheelDeltaY
                                }
                            } else {
                                Q = N.wheelDelta
                            }
                        } else {
                            if ("DOMMouseScroll" === R) {
                                Q = -N.detail
                            } else {
                                if ("wheel" === R) {
                                    if (aA.params.mousewheelForceToAxis) {
                                        if (h()) {
                                            if (!(Math.abs(N.deltaX) > Math.abs(N.deltaY))) {
                                                return
                                            }
                                            Q = -N.deltaX
                                        } else {
                                            if (!(Math.abs(N.deltaY) > Math.abs(N.deltaX))) {
                                                return
                                            }
                                            Q = -N.deltaY
                                        }
                                    } else {
                                        Q = Math.abs(N.deltaX) > Math.abs(N.deltaY) ? -N.deltaX : -N.deltaY
                                    }
                                }
                            }
                        }
                    }
                    if (aA.params.freeMode) {
                        var O = aA.getWrapperTranslate() + Q;
                        if (O > 0 && (O = 0), O < aA.maxTranslate() && (O = aA.maxTranslate()), aA.setWrapperTransition(0), aA.setWrapperTranslate(O), aA.updateProgress(), aA.updateActiveIndex(), 0 === O || O === aA.maxTranslate()) {
                            return
                        }
                    } else {
                        (new Date).getTime() - aA._lastWheelScrollTime > 60 && (0 > Q ? aA.slideNext() : aA.slidePrev()), aA._lastWheelScrollTime = (new Date).getTime()
                    }
                    return aA.params.autoplay && aA.stopAutoplay(), N.preventDefault ? N.preventDefault() : N.returnValue = !1, !1
                }

                function az(N, U) {
                    N = au(N);
                    var O, R, Q;
                    O = N.attr("data-swiper-parallax") || "0", R = N.attr("data-swiper-parallax-x"), Q = N.attr("data-swiper-parallax-y"), R || Q ? (R = R || "0", Q = Q || "0") : h() ? (R = O, Q = "0") : (Q = O, R = "0"), R = R.indexOf("%") >= 0 ? parseInt(R, 10) * U + "%" : R * U + "px", Q = Q.indexOf("%") >= 0 ? parseInt(Q, 10) * U + "%" : Q * U + "px", N.transform("translate3d(" + R + ", " + Q + ",0px)")
                }

                function aD(N) {
                    return 0 !== N.indexOf("on") && (N = N[0] !== N[0].toUpperCase() ? "on" + N[0].toUpperCase() + N.substring(1) : "on" + N), N
                }
                if (!(this instanceof Swiper)) {
                    return new Swiper(at, T)
                }
                var ar = {
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    autoplay: !1,
                    autoplayDisableOnInteraction: !0,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    coverflow: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    },
                    cube: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: 0.94
                    },
                    fade: {
                        crossFade: !1
                    },
                    parallax: !1,
                    scrollbar: null,
                    scrollbarHide: !0,
                    keyboardControl: !1,
                    mousewheelControl: !1,
                    mousewheelForceToAxis: !1,
                    hashnav: !1,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: 0.5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    onlyExternal: !1,
                    threshold: 0,
                    touchMoveStopPropagation: !0,
                    pagination: null,
                    paginationClickable: !1,
                    paginationHide: !1,
                    paginationBulletRender: null,
                    resistance: !0,
                    resistanceRatio: 0.85,
                    nextButton: null,
                    prevButton: null,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    lazyLoading: !1,
                    lazyLoadingInPrevNext: !1,
                    lazyLoadingOnTransitionStart: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    control: void 0,
                    controlInverse: !1,
                    allowSwipeToPrev: !0,
                    allowSwipeToNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    slideClass: "swiper-slide",
                    slideActiveClass: "swiper-slide-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slidePrevClass: "swiper-slide-prev",
                    wrapperClass: "swiper-wrapper",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    buttonDisabledClass: "swiper-button-disabled",
                    paginationHiddenClass: "swiper-pagination-hidden",
                    observer: !1,
                    observeParents: !1,
                    a11y: !1,
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    runCallbacksOnInit: !0
                };
                T = T || {};
                for (var l in ar) {
                    if ("undefined" == typeof T[l]) {
                        T[l] = ar[l]
                    } else {
                        if ("object" == typeof T[l]) {
                            for (var aq in ar[l]) {
                                "undefined" == typeof T[l][aq] && (T[l][aq] = ar[l][aq])
                            }
                        }
                    }
                }
                var aA = this;
                aA.params = T, aA.classNames = [];
                var au;
                if (au = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, au && (aA.$ = au, aA.container = au(at), 0 !== aA.container.length)) {
                    if (aA.container.length > 1) {
                        return void aA.container.each(function() {
                            new Swiper(this, T)
                        })
                    }
                    aA.container[0].swiper = aA, aA.container.data("swiper", aA), aA.classNames.push("swiper-container-" + aA.params.direction), aA.params.freeMode && aA.classNames.push("swiper-container-free-mode"), aA.support.flexbox || (aA.classNames.push("swiper-container-no-flexbox"), aA.params.slidesPerColumn = 1), (aA.params.parallax || aA.params.watchSlidesVisibility) && (aA.params.watchSlidesProgress = !0), ["cube", "coverflow"].indexOf(aA.params.effect) >= 0 && (aA.support.transforms3d ? (aA.params.watchSlidesProgress = !0, aA.classNames.push("swiper-container-3d")) : aA.params.effect = "slide"), "slide" !== aA.params.effect && aA.classNames.push("swiper-container-" + aA.params.effect), "cube" === aA.params.effect && (aA.params.resistanceRatio = 0, aA.params.slidesPerView = 1, aA.params.slidesPerColumn = 1, aA.params.slidesPerGroup = 1, aA.params.centeredSlides = !1, aA.params.spaceBetween = 0, aA.params.virtualTranslate = !0, aA.params.setWrapperSize = !1), "fade" === aA.params.effect && (aA.params.slidesPerView = 1, aA.params.slidesPerColumn = 1, aA.params.slidesPerGroup = 1, aA.params.watchSlidesProgress = !0, aA.params.spaceBetween = 0, aA.params.virtualTranslate = !0), aA.params.grabCursor && aA.support.touch && (aA.params.grabCursor = !1), aA.wrapper = aA.container.children("." + aA.params.wrapperClass), aA.params.pagination && (aA.paginationContainer = au(aA.params.pagination), aA.params.paginationClickable && aA.paginationContainer.addClass("swiper-pagination-clickable")), aA.rtl = h() && ("rtl" === aA.container[0].dir.toLowerCase() || "rtl" === aA.container.css("direction")), aA.rtl && aA.classNames.push("swiper-container-rtl"), aA.rtl && (aA.wrongRTL = "-webkit-box" === aA.wrapper.css("display")), aA.params.slidesPerColumn > 1 && aA.classNames.push("swiper-container-multirow"), aA.device.android && aA.classNames.push("swiper-container-android"), aA.container.addClass(aA.classNames.join(" ")), aA.translate = 0, aA.progress = 0, aA.velocity = 0, aA.lockSwipeToNext = function() {
                        aA.params.allowSwipeToNext = !1
                    }, aA.lockSwipeToPrev = function() {
                        aA.params.allowSwipeToPrev = !1
                    }, aA.lockSwipes = function() {
                        aA.params.allowSwipeToNext = aA.params.allowSwipeToPrev = !1
                    }, aA.unlockSwipeToNext = function() {
                        aA.params.allowSwipeToNext = !0
                    }, aA.unlockSwipeToPrev = function() {
                        aA.params.allowSwipeToPrev = !0
                    }, aA.unlockSwipes = function() {
                        aA.params.allowSwipeToNext = aA.params.allowSwipeToPrev = !0
                    }, aA.params.grabCursor && (aA.container[0].style.cursor = "move", aA.container[0].style.cursor = "-webkit-grab", aA.container[0].style.cursor = "-moz-grab", aA.container[0].style.cursor = "grab"), aA.imagesToLoad = [], aA.imagesLoaded = 0, aA.loadImage = function(N, V, U, O) {
                        function Q() {
                            O && O()
                        }
                        var R;
                        N.complete && U ? Q() : V ? (R = new Image, R.onload = Q, R.onerror = Q, R.src = V) : Q()
                    }, aA.preloadImages = function() {
                        function N() {
                            "undefined" != typeof aA && null !== aA && (void 0 !== aA.imagesLoaded && aA.imagesLoaded++, aA.imagesLoaded === aA.imagesToLoad.length && (aA.params.updateOnImagesReady && aA.update(), aA.emit("onImagesReady", aA)))
                        }
                        aA.imagesToLoad = aA.container.find("img");
                        for (var O = 0; O < aA.imagesToLoad.length; O++) {
                            aA.loadImage(aA.imagesToLoad[O], aA.imagesToLoad[O].currentSrc || aA.imagesToLoad[O].getAttribute("src"), !0, N)
                        }
                    }, aA.autoplayTimeoutId = void 0, aA.autoplaying = !1, aA.autoplayPaused = !1, aA.startAutoplay = function() {
                        return "undefined" != typeof aA.autoplayTimeoutId ? !1 : aA.params.autoplay ? aA.autoplaying ? !1 : (aA.autoplaying = !0, aA.emit("onAutoplayStart", aA), void aE()) : !1
                    }, aA.stopAutoplay = function() {
                        aA.autoplayTimeoutId && (aA.autoplayTimeoutId && clearTimeout(aA.autoplayTimeoutId), aA.autoplaying = !1, aA.autoplayTimeoutId = void 0, aA.emit("onAutoplayStop", aA))
                    }, aA.pauseAutoplay = function(N) {
                        aA.autoplayPaused || (aA.autoplayTimeoutId && clearTimeout(aA.autoplayTimeoutId), aA.autoplayPaused = !0, 0 === N ? (aA.autoplayPaused = !1, aE()) : aA.wrapper.transitionEnd(function() {
                            aA.autoplayPaused = !1, aA.autoplaying ? aE() : aA.stopAutoplay()
                        }))
                    }, aA.minTranslate = function() {
                        return -aA.snapGrid[0]
                    }, aA.maxTranslate = function() {
                        return -aA.snapGrid[aA.snapGrid.length - 1]
                    }, aA.updateContainerSize = function() {
                        aA.width = aA.container[0].clientWidth, aA.height = aA.container[0].clientHeight, aA.size = h() ? aA.width : aA.height
                    }, aA.updateSlidesSize = function() {
                        aA.slides = aA.wrapper.children("." + aA.params.slideClass), aA.snapGrid = [], aA.slidesGrid = [], aA.slidesSizesGrid = [];
                        var X, V = aA.params.spaceBetween,
                            ab = 0,
                            Q = 0,
                            ac = 0;
                        "string" == typeof V && V.indexOf("%") >= 0 && (V = parseFloat(V.replace("%", "")) / 100 * aA.size), aA.virtualSize = -V, aA.slides.css(aA.rtl ? {
                            marginLeft: "",
                            marginTop: ""
                        } : {
                            marginRight: "",
                            marginBottom: ""
                        });
                        var N;
                        aA.params.slidesPerColumn > 1 && (N = Math.floor(aA.slides.length / aA.params.slidesPerColumn) === aA.slides.length / aA.params.slidesPerColumn ? aA.slides.length : Math.ceil(aA.slides.length / aA.params.slidesPerColumn) * aA.params.slidesPerColumn);
                        var O;
                        for (X = 0; X < aA.slides.length; X++) {
                            O = 0;
                            var ad = aA.slides.eq(X);
                            if (aA.params.slidesPerColumn > 1) {
                                var aa, W, R, U, Y = aA.params.slidesPerColumn;
                                "column" === aA.params.slidesPerColumnFill ? (W = Math.floor(X / Y), R = X - W * Y, aa = W + R * N / Y, ad.css({
                                    "-webkit-box-ordinal-group": aa,
                                    "-moz-box-ordinal-group": aa,
                                    "-ms-flex-order": aa,
                                    "-webkit-order": aa,
                                    order: aa
                                })) : (U = N / Y, R = Math.floor(X / U), W = X - R * U), ad.css({
                                    "margin-top": 0 !== R && aA.params.spaceBetween && aA.params.spaceBetween + "px"
                                }).attr("data-swiper-column", W).attr("data-swiper-row", R)
                            }
                            "none" !== ad.css("display") && ("auto" === aA.params.slidesPerView ? O = h() ? ad.outerWidth(!0) : ad.outerHeight(!0) : (O = (aA.size - (aA.params.slidesPerView - 1) * V) / aA.params.slidesPerView, h() ? aA.slides[X].style.width = O + "px" : aA.slides[X].style.height = O + "px"), aA.slides[X].swiperSlideSize = O, aA.slidesSizesGrid.push(O), aA.params.centeredSlides ? (ab = ab + O / 2 + Q / 2 + V, 0 === X && (ab = ab - aA.size / 2 - V), Math.abs(ab) < 0.001 && (ab = 0), ac % aA.params.slidesPerGroup === 0 && aA.snapGrid.push(ab), aA.slidesGrid.push(ab)) : (ac % aA.params.slidesPerGroup === 0 && aA.snapGrid.push(ab), aA.slidesGrid.push(ab), ab = ab + O + V), aA.virtualSize += O + V, Q = O, ac++)
                        }
                        aA.virtualSize = Math.max(aA.virtualSize, aA.size);
                        var Z;
                        if (aA.rtl && aA.wrongRTL && ("slide" === aA.params.effect || "coverflow" === aA.params.effect) && aA.wrapper.css({
                                width: aA.virtualSize + aA.params.spaceBetween + "px"
                            }), (!aA.support.flexbox || aA.params.setWrapperSize) && aA.wrapper.css(h() ? {
                                width: aA.virtualSize + aA.params.spaceBetween + "px"
                            } : {
                                height: aA.virtualSize + aA.params.spaceBetween + "px"
                            }), aA.params.slidesPerColumn > 1 && (aA.virtualSize = (O + aA.params.spaceBetween) * N, aA.virtualSize = Math.ceil(aA.virtualSize / aA.params.slidesPerColumn) - aA.params.spaceBetween, aA.wrapper.css({
                                width: aA.virtualSize + aA.params.spaceBetween + "px"
                            }), aA.params.centeredSlides)) {
                            for (Z = [], X = 0; X < aA.snapGrid.length; X++) {
                                aA.snapGrid[X] < aA.virtualSize + aA.snapGrid[0] && Z.push(aA.snapGrid[X])
                            }
                            aA.snapGrid = Z
                        }
                        if (!aA.params.centeredSlides) {
                            for (Z = [], X = 0; X < aA.snapGrid.length; X++) {
                                aA.snapGrid[X] <= aA.virtualSize - aA.size && Z.push(aA.snapGrid[X])
                            }
                            aA.snapGrid = Z, Math.floor(aA.virtualSize - aA.size) > Math.floor(aA.snapGrid[aA.snapGrid.length - 1]) && aA.snapGrid.push(aA.virtualSize - aA.size)
                        }
                        0 === aA.snapGrid.length && (aA.snapGrid = [0]), 0 !== aA.params.spaceBetween && aA.slides.css(h() ? aA.rtl ? {
                            marginLeft: V + "px"
                        } : {
                            marginRight: V + "px"
                        } : {
                            marginBottom: V + "px"
                        }), aA.params.watchSlidesProgress && aA.updateSlidesOffset()
                    }, aA.updateSlidesOffset = function() {
                        for (var N = 0; N < aA.slides.length; N++) {
                            aA.slides[N].swiperSlideOffset = h() ? aA.slides[N].offsetLeft : aA.slides[N].offsetTop
                        }
                    }, aA.updateSlidesProgress = function(V) {
                        if ("undefined" == typeof V && (V = aA.translate || 0), 0 !== aA.slides.length) {
                            "undefined" == typeof aA.slides[0].swiperSlideOffset && aA.updateSlidesOffset();
                            var R = aA.params.centeredSlides ? -V + aA.size / 2 : -V;
                            aA.rtl && (R = aA.params.centeredSlides ? V - aA.size / 2 : V);
                            aA.container[0].getBoundingClientRect(), h() ? "left" : "top", h() ? "right" : "bottom";
                            aA.slides.removeClass(aA.params.slideVisibleClass);
                            for (var W = 0; W < aA.slides.length; W++) {
                                var Q = aA.slides[W],
                                    X = aA.params.centeredSlides === !0 ? Q.swiperSlideSize / 2 : 0,
                                    N = (R - Q.swiperSlideOffset - X) / (Q.swiperSlideSize + aA.params.spaceBetween);
                                if (aA.params.watchSlidesVisibility) {
                                    var O = -(R - Q.swiperSlideOffset - X),
                                        Y = O + aA.slidesSizesGrid[W],
                                        U = O >= 0 && O < aA.size || Y > 0 && Y <= aA.size || 0 >= O && Y >= aA.size;
                                    U && aA.slides.eq(W).addClass(aA.params.slideVisibleClass)
                                }
                                Q.progress = aA.rtl ? -N : N
                            }
                        }
                    }, aA.updateProgress = function(N) {
                        "undefined" == typeof N && (N = aA.translate || 0);
                        var O = aA.maxTranslate() - aA.minTranslate();
                        0 === O ? (aA.progress = 0, aA.isBeginning = aA.isEnd = !0) : (aA.progress = (N - aA.minTranslate()) / O, aA.isBeginning = aA.progress <= 0, aA.isEnd = aA.progress >= 1), aA.isBeginning && aA.emit("onReachBeginning", aA), aA.isEnd && aA.emit("onReachEnd", aA), aA.params.watchSlidesProgress && aA.updateSlidesProgress(N), aA.emit("onProgress", aA, aA.progress)
                    }, aA.updateActiveIndex = function() {
                        var N, R, Q, O = aA.rtl ? aA.translate : -aA.translate;
                        for (R = 0; R < aA.slidesGrid.length; R++) {
                            "undefined" != typeof aA.slidesGrid[R + 1] ? O >= aA.slidesGrid[R] && O < aA.slidesGrid[R + 1] - (aA.slidesGrid[R + 1] - aA.slidesGrid[R]) / 2 ? N = R : O >= aA.slidesGrid[R] && O < aA.slidesGrid[R + 1] && (N = R + 1) : O >= aA.slidesGrid[R] && (N = R)
                        }(0 > N || "undefined" == typeof N) && (N = 0), Q = Math.floor(N / aA.params.slidesPerGroup), Q >= aA.snapGrid.length && (Q = aA.snapGrid.length - 1), N !== aA.activeIndex && (aA.snapIndex = Q, aA.previousIndex = aA.activeIndex, aA.activeIndex = N, aA.updateClasses())
                    }, aA.updateClasses = function() {
                        aA.slides.removeClass(aA.params.slideActiveClass + " " + aA.params.slideNextClass + " " + aA.params.slidePrevClass);
                        var N = aA.slides.eq(aA.activeIndex);
                        if (N.addClass(aA.params.slideActiveClass), N.next("." + aA.params.slideClass).addClass(aA.params.slideNextClass), N.prev("." + aA.params.slideClass).addClass(aA.params.slidePrevClass), aA.bullets && aA.bullets.length > 0) {
                            aA.bullets.removeClass(aA.params.bulletActiveClass);
                            var O;
                            aA.params.loop ? (O = Math.ceil(aA.activeIndex - aA.loopedSlides) / aA.params.slidesPerGroup, O > aA.slides.length - 1 - 2 * aA.loopedSlides && (O -= aA.slides.length - 2 * aA.loopedSlides), O > aA.bullets.length - 1 && (O -= aA.bullets.length)) : O = "undefined" != typeof aA.snapIndex ? aA.snapIndex : aA.activeIndex || 0, aA.paginationContainer.length > 1 ? aA.bullets.each(function() {
                                au(this).index() === O && au(this).addClass(aA.params.bulletActiveClass)
                            }) : aA.bullets.eq(O).addClass(aA.params.bulletActiveClass)
                        }
                        aA.params.loop || (aA.params.prevButton && (aA.isBeginning ? (au(aA.params.prevButton).addClass(aA.params.buttonDisabledClass), aA.params.a11y && aA.a11y && aA.a11y.disable(au(aA.params.prevButton))) : (au(aA.params.prevButton).removeClass(aA.params.buttonDisabledClass), aA.params.a11y && aA.a11y && aA.a11y.enable(au(aA.params.prevButton)))), aA.params.nextButton && (aA.isEnd ? (au(aA.params.nextButton).addClass(aA.params.buttonDisabledClass), aA.params.a11y && aA.a11y && aA.a11y.disable(au(aA.params.nextButton))) : (au(aA.params.nextButton).removeClass(aA.params.buttonDisabledClass), aA.params.a11y && aA.a11y && aA.a11y.enable(au(aA.params.nextButton)))))
                    }, aA.updatePagination = function() {
                        if (aA.params.pagination && aA.paginationContainer && aA.paginationContainer.length > 0) {
                            for (var O = "", Q = aA.params.loop ? Math.ceil((aA.slides.length - 2 * aA.loopedSlides) / aA.params.slidesPerGroup) : aA.snapGrid.length, N = 0; Q > N; N++) {
                                O += aA.params.paginationBulletRender ? aA.params.paginationBulletRender(N, aA.params.bulletClass) : '<span class="' + aA.params.bulletClass + '"></span>'
                            }
                            aA.paginationContainer.html(O), aA.bullets = aA.paginationContainer.find("." + aA.params.bulletClass)
                        }
                    }, aA.update = function(N) {
                        function R() {
                            O = Math.min(Math.max(aA.translate, aA.maxTranslate()), aA.minTranslate()), aA.setWrapperTranslate(O), aA.updateActiveIndex(), aA.updateClasses()
                        }
                        if (aA.updateContainerSize(), aA.updateSlidesSize(), aA.updateProgress(), aA.updatePagination(), aA.updateClasses(), aA.params.scrollbar && aA.scrollbar && aA.scrollbar.set(), N) {
                            var Q, O;
                            aA.params.freeMode ? R() : (Q = "auto" === aA.params.slidesPerView && aA.isEnd && !aA.params.centeredSlides ? aA.slideTo(aA.slides.length - 1, 0, !1, !0) : aA.slideTo(aA.activeIndex, 0, !1, !0), Q || R())
                        }
                    }, aA.onResize = function() {
                        if (aA.updateContainerSize(), aA.updateSlidesSize(), aA.updateProgress(), ("auto" === aA.params.slidesPerView || aA.params.freeMode) && aA.updatePagination(), aA.params.scrollbar && aA.scrollbar && aA.scrollbar.set(), aA.params.freeMode) {
                            var N = Math.min(Math.max(aA.translate, aA.maxTranslate()), aA.minTranslate());
                            aA.setWrapperTranslate(N), aA.updateActiveIndex(), aA.updateClasses()
                        } else {
                            aA.updateClasses(), "auto" === aA.params.slidesPerView && aA.isEnd && !aA.params.centeredSlides ? aA.slideTo(aA.slides.length - 1, 0, !1, !0) : aA.slideTo(aA.activeIndex, 0, !1, !0)
                        }
                    };
                    var aw = ["mousedown", "mousemove", "mouseup"];
                    window.navigator.pointerEnabled ? aw = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (aw = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), aA.touchEvents = {
                        start: aA.support.touch || !aA.params.simulateTouch ? "touchstart" : aw[0],
                        move: aA.support.touch || !aA.params.simulateTouch ? "touchmove" : aw[1],
                        end: aA.support.touch || !aA.params.simulateTouch ? "touchend" : aw[2]
                    }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === aA.params.touchEventsTarget ? aA.container : aA.wrapper).addClass("swiper-wp8-" + aA.params.direction), aA.initEvents = function(O) {
                        var U = O ? "off" : "on",
                            Q = O ? "removeEventListener" : "addEventListener",
                            R = "container" === aA.params.touchEventsTarget ? aA.container[0] : aA.wrapper[0],
                            V = aA.support.touch ? R : document,
                            N = aA.params.nested ? !0 : !1;
                        aA.browser.ie ? (R[Q](aA.touchEvents.start, aA.onTouchStart, !1), V[Q](aA.touchEvents.move, aA.onTouchMove, N), V[Q](aA.touchEvents.end, aA.onTouchEnd, !1)) : (aA.support.touch && (R[Q](aA.touchEvents.start, aA.onTouchStart, !1), R[Q](aA.touchEvents.move, aA.onTouchMove, N), R[Q](aA.touchEvents.end, aA.onTouchEnd, !1)), !T.simulateTouch || aA.device.ios || aA.device.android || (R[Q]("mousedown", aA.onTouchStart, !1), V[Q]("mousemove", aA.onTouchMove, N), V[Q]("mouseup", aA.onTouchEnd, !1))), window[Q]("resize", aA.onResize), aA.params.nextButton && (au(aA.params.nextButton)[U]("click", aA.onClickNext), aA.params.a11y && aA.a11y && au(aA.params.nextButton)[U]("keydown", aA.a11y.onEnterKey)), aA.params.prevButton && (au(aA.params.prevButton)[U]("click", aA.onClickPrev), aA.params.a11y && aA.a11y && au(aA.params.prevButton)[U]("keydown", aA.a11y.onEnterKey)), aA.params.pagination && aA.params.paginationClickable && au(aA.paginationContainer)[U]("click", "." + aA.params.bulletClass, aA.onClickIndex), (aA.params.preventClicks || aA.params.preventClicksPropagation) && R[Q]("click", aA.preventClicks, !0)
                    }, aA.attachEvents = function() {
                        aA.initEvents()
                    }, aA.detachEvents = function() {
                        aA.initEvents(!0)
                    }, aA.allowClick = !0, aA.preventClicks = function(N) {
                        aA.allowClick || (aA.params.preventClicks && N.preventDefault(), aA.params.preventClicksPropagation && (N.stopPropagation(), N.stopImmediatePropagation()))
                    }, aA.onClickNext = function(N) {
                        N.preventDefault(), aA.slideNext()
                    }, aA.onClickPrev = function(N) {
                        N.preventDefault(), aA.slidePrev()
                    }, aA.onClickIndex = function(N) {
                        N.preventDefault();
                        var O = au(this).index() * aA.params.slidesPerGroup;
                        aA.params.loop && (O += aA.loopedSlides), aA.slideTo(O)
                    }, aA.updateClickedSlide = function(N) {
                        var U = f(N, "." + aA.params.slideClass);
                        if (!U) {
                            return aA.clickedSlide = void 0, void(aA.clickedIndex = void 0)
                        }
                        if (aA.clickedSlide = U, aA.clickedIndex = au(U).index(), aA.params.slideToClickedSlide && void 0 !== aA.clickedIndex && aA.clickedIndex !== aA.activeIndex) {
                            var R, O = aA.clickedIndex;
                            if (aA.params.loop) {
                                if (R = au(aA.clickedSlide).attr("data-swiper-slide-index"), O > aA.slides.length - aA.params.slidesPerView) {
                                    aA.fixLoop(), O = aA.wrapper.children("." + aA.params.slideClass + '[data-swiper-slide-index="' + R + '"]').eq(0).index(), setTimeout(function() {
                                        aA.slideTo(O)
                                    }, 0)
                                } else {
                                    if (O < aA.params.slidesPerView - 1) {
                                        aA.fixLoop();
                                        var Q = aA.wrapper.children("." + aA.params.slideClass + '[data-swiper-slide-index="' + R + '"]');
                                        O = Q.eq(Q.length - 1).index(), setTimeout(function() {
                                            aA.slideTo(O)
                                        }, 0)
                                    } else {
                                        aA.slideTo(O)
                                    }
                                }
                            } else {
                                aA.slideTo(O)
                            }
                        }
                    };
                    var m, av, n, o, q, S, ap, P, e, t = "input, select, textarea, button",
                        r = Date.now(),
                        M = [];
                    aA.animating = !1, aA.touches = {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    };
                    var p, k;
                    if (aA.onTouchStart = function(N) {
                            if (N.originalEvent && (N = N.originalEvent), p = "touchstart" === N.type, p || !("which" in N) || 3 !== N.which) {
                                if (aA.params.noSwiping && f(N, "." + aA.params.noSwipingClass)) {
                                    return void(aA.allowClick = !0)
                                }
                                if (!aA.params.swipeHandler || f(N, aA.params.swipeHandler)) {
                                    if (m = !0, av = !1, o = void 0, k = void 0, aA.touches.startX = aA.touches.currentX = "touchstart" === N.type ? N.targetTouches[0].pageX : N.pageX, aA.touches.startY = aA.touches.currentY = "touchstart" === N.type ? N.targetTouches[0].pageY : N.pageY, n = Date.now(), aA.allowClick = !0, aA.updateContainerSize(), aA.swipeDirection = void 0, aA.params.threshold > 0 && (ap = !1), "touchstart" !== N.type) {
                                        var O = !0;
                                        au(N.target).is(t) && (O = !1), document.activeElement && au(document.activeElement).is(t) && document.activeElement.blur(), O && N.preventDefault()
                                    }
                                    aA.emit("onTouchStart", aA, N)
                                }
                            }
                        }, aA.onTouchMove = function(N) {
                            if (N.originalEvent && (N = N.originalEvent), !(p && "mousemove" === N.type || N.preventedByNestedSwiper)) {
                                if (aA.params.onlyExternal) {
                                    return av = !0, void(aA.allowClick = !1)
                                }
                                if (p && document.activeElement && N.target === document.activeElement && au(N.target).is(t)) {
                                    return av = !0, void(aA.allowClick = !1)
                                }
                                if (aA.emit("onTouchMove", aA, N), !(N.targetTouches && N.targetTouches.length > 1)) {
                                    if (aA.touches.currentX = "touchmove" === N.type ? N.targetTouches[0].pageX : N.pageX, aA.touches.currentY = "touchmove" === N.type ? N.targetTouches[0].pageY : N.pageY, "undefined" == typeof o) {
                                        var Q = 180 * Math.atan2(Math.abs(aA.touches.currentY - aA.touches.startY), Math.abs(aA.touches.currentX - aA.touches.startX)) / Math.PI;
                                        o = h() ? Q > aA.params.touchAngle : 90 - Q > aA.params.touchAngle
                                    }
                                    if (o && aA.emit("onTouchMoveOpposite", aA, N), "undefined" == typeof k && aA.browser.ieTouch && (aA.touches.currentX !== aA.touches.startX || aA.touches.currentY !== aA.touches.startY) && (k = !0), m) {
                                        if (o) {
                                            return void(m = !1)
                                        }
                                        if (k || !aA.browser.ieTouch) {
                                            aA.allowClick = !1, aA.emit("onSliderMove", aA, N), N.preventDefault(), aA.params.touchMoveStopPropagation && !aA.params.nested && N.stopPropagation(), av || (T.loop && aA.fixLoop(), S = aA.getWrapperTranslate(), aA.setWrapperTransition(0), aA.animating && aA.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), aA.params.autoplay && aA.autoplaying && (aA.params.autoplayDisableOnInteraction ? aA.stopAutoplay() : aA.pauseAutoplay()), e = !1, aA.params.grabCursor && (aA.container[0].style.cursor = "move", aA.container[0].style.cursor = "-webkit-grabbing", aA.container[0].style.cursor = "-moz-grabbin", aA.container[0].style.cursor = "grabbing")), av = !0;
                                            var O = aA.touches.diff = h() ? aA.touches.currentX - aA.touches.startX : aA.touches.currentY - aA.touches.startY;
                                            O *= aA.params.touchRatio, aA.rtl && (O = -O), aA.swipeDirection = O > 0 ? "prev" : "next", q = O + S;
                                            var R = !0;
                                            if (O > 0 && q > aA.minTranslate() ? (R = !1, aA.params.resistance && (q = aA.minTranslate() - 1 + Math.pow(-aA.minTranslate() + S + O, aA.params.resistanceRatio))) : 0 > O && q < aA.maxTranslate() && (R = !1, aA.params.resistance && (q = aA.maxTranslate() + 1 - Math.pow(aA.maxTranslate() - S - O, aA.params.resistanceRatio))), R && (N.preventedByNestedSwiper = !0), !aA.params.allowSwipeToNext && "next" === aA.swipeDirection && S > q && (q = S), !aA.params.allowSwipeToPrev && "prev" === aA.swipeDirection && q > S && (q = S), aA.params.followFinger) {
                                                if (aA.params.threshold > 0) {
                                                    if (!(Math.abs(O) > aA.params.threshold || ap)) {
                                                        return void(q = S)
                                                    }
                                                    if (!ap) {
                                                        return ap = !0, aA.touches.startX = aA.touches.currentX, aA.touches.startY = aA.touches.currentY, q = S, void(aA.touches.diff = h() ? aA.touches.currentX - aA.touches.startX : aA.touches.currentY - aA.touches.startY)
                                                    }
                                                }(aA.params.freeMode || aA.params.watchSlidesProgress) && aA.updateActiveIndex(), aA.params.freeMode && (0 === M.length && M.push({
                                                    position: aA.touches[h() ? "startX" : "startY"],
                                                    time: n
                                                }), M.push({
                                                    position: aA.touches[h() ? "currentX" : "currentY"],
                                                    time: (new Date).getTime()
                                                })), aA.updateProgress(q), aA.setWrapperTranslate(q)
                                            }
                                        }
                                    }
                                }
                            }
                        }, aA.onTouchEnd = function(aa) {
                            if (aa.originalEvent && (aa = aa.originalEvent), aA.emit("onTouchEnd", aA, aa), m) {
                                aA.params.grabCursor && av && m && (aA.container[0].style.cursor = "move", aA.container[0].style.cursor = "-webkit-grab", aA.container[0].style.cursor = "-moz-grab", aA.container[0].style.cursor = "grab");
                                var V = Date.now(),
                                    ab = V - n;
                                if (aA.allowClick && (aA.updateClickedSlide(aa), aA.emit("onTap", aA, aa), 300 > ab && V - r > 300 && (P && clearTimeout(P), P = setTimeout(function() {
                                        aA && (aA.params.paginationHide && aA.paginationContainer.length > 0 && !au(aa.target).hasClass(aA.params.bulletClass) && aA.paginationContainer.toggleClass(aA.params.paginationHiddenClass), aA.emit("onClick", aA, aa))
                                    }, 300)), 300 > ab && 300 > V - r && (P && clearTimeout(P), aA.emit("onDoubleTap", aA, aa))), r = Date.now(), setTimeout(function() {
                                        aA && aA.allowClick && (aA.allowClick = !0)
                                    }, 0), !m || !av || !aA.swipeDirection || 0 === aA.touches.diff || q === S) {
                                    return void(m = av = !1)
                                }
                                m = av = !1;
                                var Q;
                                if (Q = aA.params.followFinger ? aA.rtl ? aA.translate : -aA.translate : -q, aA.params.freeMode) {
                                    if (Q < -aA.minTranslate()) {
                                        return void aA.slideTo(aA.activeIndex)
                                    }
                                    if (Q > -aA.maxTranslate()) {
                                        return void aA.slideTo(aA.slides.length - 1)
                                    }
                                    if (aA.params.freeModeMomentum) {
                                        if (M.length > 1) {
                                            var R = M.pop(),
                                                ad = M.pop(),
                                                ah = R.position - ad.position,
                                                N = R.time - ad.time;
                                            aA.velocity = ah / N, aA.velocity = aA.velocity / 2, Math.abs(aA.velocity) < 0.02 && (aA.velocity = 0), (N > 150 || (new Date).getTime() - R.time > 300) && (aA.velocity = 0)
                                        } else {
                                            aA.velocity = 0
                                        }
                                        M.length = 0;
                                        var ag = 1000 * aA.params.freeModeMomentumRatio,
                                            O = aA.velocity * ag,
                                            Z = aA.translate + O;
                                        aA.rtl && (Z = -Z);
                                        var ae, Y = !1,
                                            ac = 20 * Math.abs(aA.velocity) * aA.params.freeModeMomentumBounceRatio;
                                        Z < aA.maxTranslate() && (aA.params.freeModeMomentumBounce ? (Z + aA.maxTranslate() < -ac && (Z = aA.maxTranslate() - ac), ae = aA.maxTranslate(), Y = !0, e = !0) : Z = aA.maxTranslate()), Z > aA.minTranslate() && (aA.params.freeModeMomentumBounce ? (Z - aA.minTranslate() > ac && (Z = aA.minTranslate() + ac), ae = aA.minTranslate(), Y = !0, e = !0) : Z = aA.minTranslate()), 0 !== aA.velocity && (ag = Math.abs(aA.rtl ? (-Z - aA.translate) / aA.velocity : (Z - aA.translate) / aA.velocity)), aA.params.freeModeMomentumBounce && Y ? (aA.updateProgress(ae), aA.setWrapperTransition(ag), aA.setWrapperTranslate(Z), aA.onTransitionStart(), aA.animating = !0, aA.wrapper.transitionEnd(function() {
                                            e && (aA.emit("onMomentumBounce", aA), aA.setWrapperTransition(aA.params.speed), aA.setWrapperTranslate(ae), aA.wrapper.transitionEnd(function() {
                                                aA.onTransitionEnd()
                                            }))
                                        })) : aA.velocity ? (aA.updateProgress(Z), aA.setWrapperTransition(ag), aA.setWrapperTranslate(Z), aA.onTransitionStart(), aA.animating || (aA.animating = !0, aA.wrapper.transitionEnd(function() {
                                            aA.onTransitionEnd()
                                        }))) : aA.updateProgress(Z), aA.updateActiveIndex()
                                    }
                                    return void((!aA.params.freeModeMomentum || ab >= aA.params.longSwipesMs) && (aA.updateProgress(), aA.updateActiveIndex()))
                                }
                                var af, X = 0,
                                    W = aA.slidesSizesGrid[0];
                                for (af = 0; af < aA.slidesGrid.length; af += aA.params.slidesPerGroup) {
                                    "undefined" != typeof aA.slidesGrid[af + aA.params.slidesPerGroup] ? Q >= aA.slidesGrid[af] && Q < aA.slidesGrid[af + aA.params.slidesPerGroup] && (X = af, W = aA.slidesGrid[af + aA.params.slidesPerGroup] - aA.slidesGrid[af]) : Q >= aA.slidesGrid[af] && (X = af, W = aA.slidesGrid[aA.slidesGrid.length - 1] - aA.slidesGrid[aA.slidesGrid.length - 2])
                                }
                                var U = (Q - aA.slidesGrid[X]) / W;
                                if (ab > aA.params.longSwipesMs) {
                                    if (!aA.params.longSwipes) {
                                        return void aA.slideTo(aA.activeIndex)
                                    }
                                    "next" === aA.swipeDirection && aA.slideTo(U >= aA.params.longSwipesRatio ? X + aA.params.slidesPerGroup : X), "prev" === aA.swipeDirection && aA.slideTo(U > 1 - aA.params.longSwipesRatio ? X + aA.params.slidesPerGroup : X)
                                } else {
                                    if (!aA.params.shortSwipes) {
                                        return void aA.slideTo(aA.activeIndex)
                                    }
                                    "next" === aA.swipeDirection && aA.slideTo(X + aA.params.slidesPerGroup), "prev" === aA.swipeDirection && aA.slideTo(X)
                                }
                            }
                        }, aA._slideTo = function(N, O) {
                            return aA.slideTo(N, O, !0, !0)
                        }, aA.slideTo = function(O, V, Q, U) {
                            "undefined" == typeof Q && (Q = !0), "undefined" == typeof O && (O = 0), 0 > O && (O = 0), aA.snapIndex = Math.floor(O / aA.params.slidesPerGroup), aA.snapIndex >= aA.snapGrid.length && (aA.snapIndex = aA.snapGrid.length - 1);
                            var R = -aA.snapGrid[aA.snapIndex];
                            aA.params.autoplay && aA.autoplaying && (U || !aA.params.autoplayDisableOnInteraction ? aA.pauseAutoplay(V) : aA.stopAutoplay()), aA.updateProgress(R);
                            for (var N = 0; N < aA.slidesGrid.length; N++) {
                                -R >= aA.slidesGrid[N] && (O = N)
                            }
                            if ("undefined" == typeof V && (V = aA.params.speed), aA.previousIndex = aA.activeIndex || 0, aA.activeIndex = O, R === aA.translate) {
                                return aA.updateClasses(), !1
                            }
                            aA.onTransitionStart(Q);
                            h() ? R : 0, h() ? 0 : R;
                            return 0 === V ? (aA.setWrapperTransition(0), aA.setWrapperTranslate(R), aA.onTransitionEnd(Q)) : (aA.setWrapperTransition(V), aA.setWrapperTranslate(R), aA.animating || (aA.animating = !0, aA.wrapper.transitionEnd(function() {
                                aA.onTransitionEnd(Q)
                            }))), aA.updateClasses(), !0
                        }, aA.onTransitionStart = function(N) {
                            "undefined" == typeof N && (N = !0), aA.lazy && aA.lazy.onTransitionStart(), N && (aA.emit("onTransitionStart", aA), aA.activeIndex !== aA.previousIndex && aA.emit("onSlideChangeStart", aA))
                        }, aA.onTransitionEnd = function(N) {
                            aA.animating = !1, aA.setWrapperTransition(0), "undefined" == typeof N && (N = !0), aA.lazy && aA.lazy.onTransitionEnd(), N && (aA.emit("onTransitionEnd", aA), aA.activeIndex !== aA.previousIndex && aA.emit("onSlideChangeEnd", aA)), aA.params.hashnav && aA.hashnav && aA.hashnav.setHash()
                        }, aA.slideNext = function(O, Q, N) {
                            if (aA.params.loop) {
                                if (aA.animating) {
                                    return !1
                                }
                                aA.fixLoop();
                                aA.container[0].clientLeft;
                                return aA.slideTo(aA.activeIndex + aA.params.slidesPerGroup, Q, O, N)
                            }
                            return aA.slideTo(aA.activeIndex + aA.params.slidesPerGroup, Q, O, N)
                        }, aA._slideNext = function(N) {
                            return aA.slideNext(!0, N, !0)
                        }, aA.slidePrev = function(O, Q, N) {
                            if (aA.params.loop) {
                                if (aA.animating) {
                                    return !1
                                }
                                aA.fixLoop();
                                aA.container[0].clientLeft;
                                return aA.slideTo(aA.activeIndex - 1, Q, O, N)
                            }
                            return aA.slideTo(aA.activeIndex - 1, Q, O, N)
                        }, aA._slidePrev = function(N) {
                            return aA.slidePrev(!0, N, !0)
                        }, aA.slideReset = function(N, O) {
                            return aA.slideTo(aA.activeIndex, O, N)
                        }, aA.setWrapperTransition = function(N, O) {
                            aA.wrapper.transition(N), "slide" !== aA.params.effect && aA.effects[aA.params.effect] && aA.effects[aA.params.effect].setTransition(N), aA.params.parallax && aA.parallax && aA.parallax.setTransition(N), aA.params.scrollbar && aA.scrollbar && aA.scrollbar.setTransition(N), aA.params.control && aA.controller && aA.controller.setTransition(N, O), aA.emit("onSetTransition", aA, N)
                        }, aA.setWrapperTranslate = function(O, V, Q) {
                            var U = 0,
                                R = 0,
                                N = 0;
                            h() ? U = aA.rtl ? -O : O : R = O, aA.params.virtualTranslate || aA.wrapper.transform(aA.support.transforms3d ? "translate3d(" + U + "px, " + R + "px, " + N + "px)" : "translate(" + U + "px, " + R + "px)"), aA.translate = h() ? U : R, V && aA.updateActiveIndex(), "slide" !== aA.params.effect && aA.effects[aA.params.effect] && aA.effects[aA.params.effect].setTranslate(aA.translate), aA.params.parallax && aA.parallax && aA.parallax.setTranslate(aA.translate), aA.params.scrollbar && aA.scrollbar && aA.scrollbar.setTranslate(aA.translate), aA.params.control && aA.controller && aA.controller.setTranslate(aA.translate, Q), aA.emit("onSetTranslate", aA, aA.translate)
                        }, aA.getTranslate = function(N, V) {
                            var U, O, Q, R;
                            return "undefined" == typeof V && (V = "x"), aA.params.virtualTranslate ? aA.rtl ? -aA.translate : aA.translate : (Q = window.getComputedStyle(N, null), window.WebKitCSSMatrix ? R = new WebKitCSSMatrix("none" === Q.webkitTransform ? "" : Q.webkitTransform) : (R = Q.MozTransform || Q.OTransform || Q.MsTransform || Q.msTransform || Q.transform || Q.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), U = R.toString().split(",")), "x" === V && (O = window.WebKitCSSMatrix ? R.m41 : parseFloat(16 === U.length ? U[12] : U[4])), "y" === V && (O = window.WebKitCSSMatrix ? R.m42 : parseFloat(16 === U.length ? U[13] : U[5])), aA.rtl && O && (O = -O), O || 0)
                        }, aA.getWrapperTranslate = function(N) {
                            return "undefined" == typeof N && (N = h() ? "x" : "y"), aA.getTranslate(aA.wrapper[0], N)
                        }, aA.observers = [], aA.initObservers = function() {
                            if (aA.params.observeParents) {
                                for (var N = aA.container.parents(), O = 0; O < N.length; O++) {
                                    ax(N[O])
                                }
                            }
                            ax(aA.container[0], {
                                childList: !1
                            }), ax(aA.wrapper[0], {
                                attributes: !1
                            })
                        }, aA.disconnectObservers = function() {
                            for (var N = 0; N < aA.observers.length; N++) {
                                aA.observers[N].disconnect()
                            }
                            aA.observers = []
                        }, aA.createLoop = function() {
                            aA.wrapper.children("." + aA.params.slideClass + "." + aA.params.slideDuplicateClass).remove();
                            var N = aA.wrapper.children("." + aA.params.slideClass);
                            aA.loopedSlides = parseInt(aA.params.loopedSlides || aA.params.slidesPerView, 10), aA.loopedSlides = aA.loopedSlides + aA.params.loopAdditionalSlides, aA.loopedSlides > N.length && (aA.loopedSlides = N.length);
                            var R, Q = [],
                                O = [];
                            for (N.each(function(W, U) {
                                    var V = au(this);
                                    W < aA.loopedSlides && O.push(U), W < N.length && W >= N.length - aA.loopedSlides && Q.push(U), V.attr("data-swiper-slide-index", W)
                                }), R = 0; R < O.length; R++) {
                                aA.wrapper.append(au(O[R].cloneNode(!0)).addClass(aA.params.slideDuplicateClass))
                            }
                            for (R = Q.length - 1; R >= 0; R--) {
                                aA.wrapper.prepend(au(Q[R].cloneNode(!0)).addClass(aA.params.slideDuplicateClass))
                            }
                        }, aA.destroyLoop = function() {
                            aA.wrapper.children("." + aA.params.slideClass + "." + aA.params.slideDuplicateClass).remove()
                        }, aA.fixLoop = function() {
                            var N;
                            aA.activeIndex < aA.loopedSlides ? (N = aA.slides.length - 3 * aA.loopedSlides + aA.activeIndex, N += aA.loopedSlides, aA.slideTo(N, 0, !1, !0)) : ("auto" === aA.params.slidesPerView && aA.activeIndex >= 2 * aA.loopedSlides || aA.activeIndex > aA.slides.length - 2 * aA.params.slidesPerView) && (N = -aA.slides.length + aA.activeIndex + aA.loopedSlides, N += aA.loopedSlides, aA.slideTo(N, 0, !1, !0))
                        }, aA.appendSlide = function(N) {
                            if (aA.params.loop && aA.destroyLoop(), "object" == typeof N && N.length) {
                                for (var O = 0; O < N.length; O++) {
                                    N[O] && aA.wrapper.append(N[O])
                                }
                            } else {
                                aA.wrapper.append(N)
                            }
                            aA.params.loop && aA.createLoop(), aA.params.observer && aA.support.observer || aA.update(!0)
                        }, aA.prependSlide = function(O) {
                            aA.params.loop && aA.destroyLoop();
                            var Q = aA.activeIndex + 1;
                            if ("object" == typeof O && O.length) {
                                for (var N = 0; N < O.length; N++) {
                                    O[N] && aA.wrapper.prepend(O[N])
                                }
                                Q = aA.activeIndex + O.length
                            } else {
                                aA.wrapper.prepend(O)
                            }
                            aA.params.loop && aA.createLoop(), aA.params.observer && aA.support.observer || aA.update(!0), aA.slideTo(Q, 0, !1)
                        }, aA.removeSlide = function(N) {
                            aA.params.loop && aA.destroyLoop();
                            var R, Q = aA.activeIndex;
                            if ("object" == typeof N && N.length) {
                                for (var O = 0; O < N.length; O++) {
                                    R = N[O], aA.slides[R] && aA.slides.eq(R).remove(), Q > R && Q--
                                }
                                Q = Math.max(Q, 0)
                            } else {
                                R = N, aA.slides[R] && aA.slides.eq(R).remove(), Q > R && Q--, Q = Math.max(Q, 0)
                            }
                            aA.params.observer && aA.support.observer || aA.update(!0), aA.slideTo(Q, 0, !1)
                        }, aA.removeAllSlides = function() {
                            for (var N = [], O = 0; O < aA.slides.length; O++) {
                                N.push(O)
                            }
                            aA.removeSlide(N)
                        }, aA.effects = {
                            fade: {
                                setTranslate: function() {
                                    for (var O = 0; O < aA.slides.length; O++) {
                                        var V = aA.slides.eq(O),
                                            Q = V[0].swiperSlideOffset,
                                            U = -Q;
                                        aA.params.virtualTranslate || (U -= aA.translate);
                                        var R = 0;
                                        h() || (R = U, U = 0);
                                        var N = aA.params.fade.crossFade ? Math.max(1 - Math.abs(V[0].progress), 0) : 1 + Math.min(Math.max(V[0].progress, -1), 0);
                                        V.css({
                                            opacity: N
                                        }).transform("translate3d(" + U + "px, " + R + "px, 0px)")
                                    }
                                },
                                setTransition: function(N) {
                                    aA.slides.transition(N), aA.params.virtualTranslate && 0 !== N && aA.slides.eq(aA.activeIndex).transitionEnd(function() {
                                        for (var Q = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], O = 0; O < Q.length; O++) {
                                            aA.wrapper.trigger(Q[O])
                                        }
                                    })
                                }
                            },
                            cube: {
                                setTranslate: function() {
                                    var Y, ai = 0;
                                    aA.params.cube.shadow && (h() ? (Y = aA.wrapper.find(".swiper-cube-shadow"), 0 === Y.length && (Y = au('<div class="swiper-cube-shadow"></div>'), aA.wrapper.append(Y)), Y.css({
                                        height: aA.width + "px"
                                    })) : (Y = aA.container.find(".swiper-cube-shadow"), 0 === Y.length && (Y = au('<div class="swiper-cube-shadow"></div>'), aA.container.append(Y))));
                                    for (var O = 0; O < aA.slides.length; O++) {
                                        var Q = aA.slides.eq(O),
                                            ac = 90 * O,
                                            ag = Math.floor(ac / 360);
                                        aA.rtl && (ac = -ac, ag = Math.floor(-ac / 360));
                                        var ah = Math.max(Math.min(Q[0].progress, 1), -1),
                                            ad = 0,
                                            N = 0,
                                            W = 0;
                                        O % 4 === 0 ? (ad = 4 * -ag * aA.size, W = 0) : (O - 1) % 4 === 0 ? (ad = 0, W = 4 * -ag * aA.size) : (O - 2) % 4 === 0 ? (ad = aA.size + 4 * ag * aA.size, W = aA.size) : (O - 3) % 4 === 0 && (ad = -aA.size, W = 3 * aA.size + 4 * aA.size * ag), aA.rtl && (ad = -ad), h() || (N = ad, ad = 0);
                                        var R = "rotateX(" + (h() ? 0 : -ac) + "deg) rotateY(" + (h() ? ac : 0) + "deg) translate3d(" + ad + "px, " + N + "px, " + W + "px)";
                                        if (1 >= ah && ah > -1 && (ai = 90 * O + 90 * ah, aA.rtl && (ai = 90 * -O - 90 * ah)), Q.transform(R), aA.params.cube.slideShadows) {
                                            var V = Q.find(h() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                                                aa = Q.find(h() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                            0 === V.length && (V = au('<div class="swiper-slide-shadow-' + (h() ? "left" : "top") + '"></div>'), Q.append(V)), 0 === aa.length && (aa = au('<div class="swiper-slide-shadow-' + (h() ? "right" : "bottom") + '"></div>'), Q.append(aa));
                                            Q[0].progress;
                                            V.length && (V[0].style.opacity = -Q[0].progress), aa.length && (aa[0].style.opacity = Q[0].progress)
                                        }
                                    }
                                    if (aA.wrapper.css({
                                            "-webkit-transform-origin": "50% 50% -" + aA.size / 2 + "px",
                                            "-moz-transform-origin": "50% 50% -" + aA.size / 2 + "px",
                                            "-ms-transform-origin": "50% 50% -" + aA.size / 2 + "px",
                                            "transform-origin": "50% 50% -" + aA.size / 2 + "px"
                                        }), aA.params.cube.shadow) {
                                        if (h()) {
                                            Y.transform("translate3d(0px, " + (aA.width / 2 + aA.params.cube.shadowOffset) + "px, " + -aA.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + aA.params.cube.shadowScale + ")")
                                        } else {
                                            var X = Math.abs(ai) - 90 * Math.floor(Math.abs(ai) / 90),
                                                Z = 1.5 - (Math.sin(2 * X * Math.PI / 360) / 2 + Math.cos(2 * X * Math.PI / 360) / 2),
                                                ab = aA.params.cube.shadowScale,
                                                ae = aA.params.cube.shadowScale / Z,
                                                af = aA.params.cube.shadowOffset;
                                            Y.transform("scale3d(" + ab + ", 1, " + ae + ") translate3d(0px, " + (aA.height / 2 + af) + "px, " + -aA.height / 2 / ae + "px) rotateX(-90deg)")
                                        }
                                    }
                                    var U = aA.isSafari || aA.isUiWebView ? -aA.size / 2 : 0;
                                    aA.wrapper.transform("translate3d(0px,0," + U + "px) rotateX(" + (h() ? 0 : ai) + "deg) rotateY(" + (h() ? -ai : 0) + "deg)")
                                },
                                setTransition: function(N) {
                                    aA.slides.transition(N).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(N), aA.params.cube.shadow && !h() && aA.container.find(".swiper-cube-shadow").transition(N)
                                }
                            },
                            coverflow: {
                                setTranslate: function() {
                                    for (var Y = aA.translate, ai = h() ? -Y + aA.width / 2 : -Y + aA.height / 2, O = h() ? aA.params.coverflow.rotate : -aA.params.coverflow.rotate, Q = aA.params.coverflow.depth, ac = 0, ag = aA.slides.length; ag > ac; ac++) {
                                        var ah = aA.slides.eq(ac),
                                            ad = aA.slidesSizesGrid[ac],
                                            N = ah[0].swiperSlideOffset,
                                            W = (ai - N - ad / 2) / ad * aA.params.coverflow.modifier,
                                            R = h() ? O * W : 0,
                                            V = h() ? 0 : O * W,
                                            aa = -Q * Math.abs(W),
                                            X = h() ? 0 : aA.params.coverflow.stretch * W,
                                            Z = h() ? aA.params.coverflow.stretch * W : 0;
                                        Math.abs(Z) < 0.001 && (Z = 0), Math.abs(X) < 0.001 && (X = 0), Math.abs(aa) < 0.001 && (aa = 0), Math.abs(R) < 0.001 && (R = 0), Math.abs(V) < 0.001 && (V = 0);
                                        var ab = "translate3d(" + Z + "px," + X + "px," + aa + "px)  rotateX(" + V + "deg) rotateY(" + R + "deg)";
                                        if (ah.transform(ab), ah[0].style.zIndex = -Math.abs(Math.round(W)) + 1, aA.params.coverflow.slideShadows) {
                                            var ae = ah.find(h() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                                                af = ah.find(h() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                            0 === ae.length && (ae = au('<div class="swiper-slide-shadow-' + (h() ? "left" : "top") + '"></div>'), ah.append(ae)), 0 === af.length && (af = au('<div class="swiper-slide-shadow-' + (h() ? "right" : "bottom") + '"></div>'), ah.append(af)), ae.length && (ae[0].style.opacity = W > 0 ? W : 0), af.length && (af[0].style.opacity = -W > 0 ? -W : 0)
                                        }
                                    }
                                    if (aA.browser.ie) {
                                        var U = aA.wrapper[0].style;
                                        U.perspectiveOrigin = ai + "px 50%"
                                    }
                                },
                                setTransition: function(N) {
                                    aA.slides.transition(N).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(N)
                                }
                            }
                        }, aA.lazy = {
                            initialImageLoaded: !1,
                            loadImageInSlide: function(O) {
                                if ("undefined" != typeof O && 0 !== aA.slides.length) {
                                    var Q = aA.slides.eq(O),
                                        N = Q.find("img.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                                    0 !== N.length && N.each(function() {
                                        var R = au(this);
                                        R.addClass("swiper-lazy-loading");
                                        var U = R.attr("data-src");
                                        aA.loadImage(R[0], U, !1, function() {
                                            R.attr("src", U), R.removeAttr("data-src"), R.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), Q.find(".swiper-lazy-preloader, .preloader").remove(), aA.emit("onLazyImageReady", aA, Q[0], R[0])
                                        }), aA.emit("onLazyImageLoad", aA, Q[0], R[0])
                                    })
                                }
                            },
                            load: function() {
                                if (aA.params.watchSlidesVisibility) {
                                    aA.wrapper.children("." + aA.params.slideVisibleClass).each(function() {
                                        aA.lazy.loadImageInSlide(au(this).index())
                                    })
                                } else {
                                    if (aA.params.slidesPerView > 1) {
                                        for (var O = aA.activeIndex; O < aA.activeIndex + aA.params.slidesPerView; O++) {
                                            aA.slides[O] && aA.lazy.loadImageInSlide(O)
                                        }
                                    } else {
                                        aA.lazy.loadImageInSlide(aA.activeIndex)
                                    }
                                }
                                if (aA.params.lazyLoadingInPrevNext) {
                                    var Q = aA.wrapper.children("." + aA.params.slideNextClass);
                                    Q.length > 0 && aA.lazy.loadImageInSlide(Q.index());
                                    var N = aA.wrapper.children("." + aA.params.slidePrevClass);
                                    N.length > 0 && aA.lazy.loadImageInSlide(N.index())
                                }
                            },
                            onTransitionStart: function() {
                                aA.params.lazyLoading && (aA.params.lazyLoadingOnTransitionStart || !aA.params.lazyLoadingOnTransitionStart && !aA.lazy.initialImageLoaded) && (aA.lazy.initialImageLoaded = !0, aA.lazy.load())
                            },
                            onTransitionEnd: function() {
                                aA.params.lazyLoading && !aA.params.lazyLoadingOnTransitionStart && aA.lazy.load()
                            }
                        }, aA.scrollbar = {
                            set: function() {
                                if (aA.params.scrollbar) {
                                    var N = aA.scrollbar;
                                    N.track = au(aA.params.scrollbar), N.drag = N.track.find(".swiper-scrollbar-drag"), 0 === N.drag.length && (N.drag = au('<div class="swiper-scrollbar-drag"></div>'), N.track.append(N.drag)), N.drag[0].style.width = "", N.drag[0].style.height = "", N.trackSize = h() ? N.track[0].offsetWidth : N.track[0].offsetHeight, N.divider = aA.size / aA.virtualSize, N.moveDivider = N.divider * (N.trackSize / aA.size), N.dragSize = N.trackSize * N.divider, h() ? N.drag[0].style.width = N.dragSize + "px" : N.drag[0].style.height = N.dragSize + "px", N.track[0].style.display = N.divider >= 1 ? "none" : "", aA.params.scrollbarHide && (N.track[0].style.opacity = 0)
                                }
                            },
                            setTranslate: function() {
                                if (aA.params.scrollbar) {
                                    var O, Q = aA.scrollbar,
                                        N = (aA.translate || 0, Q.dragSize);
                                    O = (Q.trackSize - Q.dragSize) * aA.progress, aA.rtl && h() ? (O = -O, O > 0 ? (N = Q.dragSize - O, O = 0) : -O + Q.dragSize > Q.trackSize && (N = Q.trackSize + O)) : 0 > O ? (N = Q.dragSize + O, O = 0) : O + Q.dragSize > Q.trackSize && (N = Q.trackSize - O), h() ? (Q.drag.transform(aA.support.transforms3d ? "translate3d(" + O + "px, 0, 0)" : "translateX(" + O + "px)"), Q.drag[0].style.width = N + "px") : (Q.drag.transform(aA.support.transforms3d ? "translate3d(0px, " + O + "px, 0)" : "translateY(" + O + "px)"), Q.drag[0].style.height = N + "px"), aA.params.scrollbarHide && (clearTimeout(Q.timeout), Q.track[0].style.opacity = 1, Q.timeout = setTimeout(function() {
                                        Q.track[0].style.opacity = 0, Q.track.transition(400)
                                    }, 1000))
                                }
                            },
                            setTransition: function(N) {
                                aA.params.scrollbar && aA.scrollbar.drag.transition(N)
                            }
                        }, aA.controller = {
                            setTranslate: function(N, V) {
                                var U, O, Q = aA.params.control;
                                if (aA.isArray(Q)) {
                                    for (var R = 0; R < Q.length; R++) {
                                        Q[R] !== V && Q[R] instanceof Swiper && (N = Q[R].rtl && "horizontal" === Q[R].params.direction ? -aA.translate : aA.translate, U = (Q[R].maxTranslate() - Q[R].minTranslate()) / (aA.maxTranslate() - aA.minTranslate()), O = (N - aA.minTranslate()) * U + Q[R].minTranslate(), aA.params.controlInverse && (O = Q[R].maxTranslate() - O), Q[R].updateProgress(O), Q[R].setWrapperTranslate(O, !1, aA), Q[R].updateActiveIndex())
                                    }
                                } else {
                                    Q instanceof Swiper && V !== Q && (N = Q.rtl && "horizontal" === Q.params.direction ? -aA.translate : aA.translate, U = (Q.maxTranslate() - Q.minTranslate()) / (aA.maxTranslate() - aA.minTranslate()), O = (N - aA.minTranslate()) * U + Q.minTranslate(), aA.params.controlInverse && (O = Q.maxTranslate() - O), Q.updateProgress(O), Q.setWrapperTranslate(O, !1, aA), Q.updateActiveIndex())
                                }
                            },
                            setTransition: function(N, R) {
                                var Q = aA.params.control;
                                if (aA.isArray(Q)) {
                                    for (var O = 0; O < Q.length; O++) {
                                        Q[O] !== R && Q[O] instanceof Swiper && Q[O].setWrapperTransition(N, aA)
                                    }
                                } else {
                                    Q instanceof Swiper && R !== Q && Q.setWrapperTransition(N, aA)
                                }
                            }
                        }, aA.hashnav = {
                            init: function() {
                                if (aA.params.hashnav) {
                                    aA.hashnav.initialized = !0;
                                    var O = document.location.hash.replace("#", "");
                                    if (O) {
                                        for (var W = 0, V = 0, Q = aA.slides.length; Q > V; V++) {
                                            var R = aA.slides.eq(V),
                                                U = R.attr("data-hash");
                                            if (U === O && !R.hasClass(aA.params.slideDuplicateClass)) {
                                                var N = R.index();
                                                aA.slideTo(N, W, aA.params.runCallbacksOnInit, !0)
                                            }
                                        }
                                    }
                                }
                            },
                            setHash: function() {
                                aA.hashnav.initialized && aA.params.hashnav && (document.location.hash = aA.slides.eq(aA.activeIndex).attr("data-hash") || "")
                            }
                        }, aA.disableKeyboardControl = function() {
                            au(document).off("keydown", aB)
                        }, aA.enableKeyboardControl = function() {
                            au(document).on("keydown", aB)
                        }, aA._wheelEvent = !1, aA._lastWheelScrollTime = (new Date).getTime(), aA.params.mousewheelControl) {
                        if (void 0 !== document.onmousewheel && (aA._wheelEvent = "mousewheel"), !aA._wheelEvent) {
                            try {
                                new WheelEvent("wheel"), aA._wheelEvent = "wheel"
                            } catch (ay) {}
                        }
                        aA._wheelEvent || (aA._wheelEvent = "DOMMouseScroll")
                    }
                    aA.disableMousewheelControl = function() {
                        return aA._wheelEvent ? (aA.container.off(aA._wheelEvent, aC), !0) : !1
                    }, aA.enableMousewheelControl = function() {
                        return aA._wheelEvent ? (aA.container.on(aA._wheelEvent, aC), !0) : !1
                    }, aA.parallax = {
                        setTranslate: function() {
                            aA.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                az(this, aA.progress)
                            }), aA.slides.each(function() {
                                var N = au(this);
                                N.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                    var O = Math.min(Math.max(N[0].progress, -1), 1);
                                    az(this, O)
                                })
                            })
                        },
                        setTransition: function(N) {
                            "undefined" == typeof N && (N = aA.params.speed), aA.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                var Q = au(this),
                                    O = parseInt(Q.attr("data-swiper-parallax-duration"), 10) || N;
                                0 === N && (O = 0), Q.transition(O)
                            })
                        }
                    }, aA._plugins = [];
                    for (var g in aA.plugins) {
                        var s = aA.plugins[g](aA, aA.params[g]);
                        s && aA._plugins.push(s)
                    }
                    return aA.callPlugins = function(N) {
                        for (var O = 0; O < aA._plugins.length; O++) {
                            N in aA._plugins[O] && aA._plugins[O][N](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                        }
                    }, aA.emitterEventListeners = {}, aA.emit = function(N) {
                        aA.params[N] && aA.params[N](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                        var O;
                        if (aA.emitterEventListeners[N]) {
                            for (O = 0; O < aA.emitterEventListeners[N].length; O++) {
                                aA.emitterEventListeners[N][O](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                            }
                        }
                        aA.callPlugins && aA.callPlugins(N, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                    }, aA.on = function(N, O) {
                        return N = aD(N), aA.emitterEventListeners[N] || (aA.emitterEventListeners[N] = []), aA.emitterEventListeners[N].push(O), aA
                    }, aA.off = function(O, Q) {
                        var N;
                        if (O = aD(O), "undefined" == typeof Q) {
                            return aA.emitterEventListeners[O] = [], aA
                        }
                        if (aA.emitterEventListeners[O] && 0 !== aA.emitterEventListeners[O].length) {
                            for (N = 0; N < aA.emitterEventListeners[O].length; N++) {
                                aA.emitterEventListeners[O][N] === Q && aA.emitterEventListeners[O].splice(N, 1)
                            }
                            return aA
                        }
                    }, aA.once = function(O, Q) {
                        O = aD(O);
                        var N = function() {
                            Q(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), aA.off(O, N)
                        };
                        return aA.on(O, N), aA
                    }, aA.a11y = {
                        makeFocusable: function(N) {
                            return N[0].tabIndex = "0", N
                        },
                        addRole: function(N, O) {
                            return N.attr("role", O), N
                        },
                        addLabel: function(N, O) {
                            return N.attr("aria-label", O), N
                        },
                        disable: function(N) {
                            return N.attr("aria-disabled", !0), N
                        },
                        enable: function(N) {
                            return N.attr("aria-disabled", !1), N
                        },
                        onEnterKey: function(N) {
                            13 === N.keyCode && (au(N.target).is(aA.params.nextButton) ? (aA.onClickNext(N), aA.a11y.notify(aA.isEnd ? aA.params.lastSlideMsg : aA.params.nextSlideMsg)) : au(N.target).is(aA.params.prevButton) && (aA.onClickPrev(N), aA.a11y.notify(aA.isBeginning ? aA.params.firstSlideMsg : aA.params.prevSlideMsg)))
                        },
                        liveRegion: au('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                        notify: function(N) {
                            var O = aA.a11y.liveRegion;
                            0 !== O.length && (O.html(""), O.html(N))
                        },
                        init: function() {
                            if (aA.params.nextButton) {
                                var N = au(aA.params.nextButton);
                                aA.a11y.makeFocusable(N), aA.a11y.addRole(N, "button"), aA.a11y.addLabel(N, aA.params.nextSlideMsg)
                            }
                            if (aA.params.prevButton) {
                                var O = au(aA.params.prevButton);
                                aA.a11y.makeFocusable(O), aA.a11y.addRole(O, "button"), aA.a11y.addLabel(O, aA.params.prevSlideMsg)
                            }
                            au(aA.container).append(aA.a11y.liveRegion)
                        },
                        destroy: function() {
                            aA.a11y.liveRegion && aA.a11y.liveRegion.length > 0 && aA.a11y.liveRegion.remove()
                        }
                    }, aA.init = function() {
                        aA.params.loop && aA.createLoop(), aA.updateContainerSize(), aA.updateSlidesSize(), aA.updatePagination(), aA.params.scrollbar && aA.scrollbar && aA.scrollbar.set(), "slide" !== aA.params.effect && aA.effects[aA.params.effect] && (aA.params.loop || aA.updateProgress(), aA.effects[aA.params.effect].setTranslate()), aA.params.loop ? aA.slideTo(aA.params.initialSlide + aA.loopedSlides, 0, aA.params.runCallbacksOnInit) : (aA.slideTo(aA.params.initialSlide, 0, aA.params.runCallbacksOnInit), 0 === aA.params.initialSlide && (aA.parallax && aA.params.parallax && aA.parallax.setTranslate(), aA.lazy && aA.params.lazyLoading && aA.lazy.load())), aA.attachEvents(), aA.params.observer && aA.support.observer && aA.initObservers(), aA.params.preloadImages && !aA.params.lazyLoading && aA.preloadImages(), aA.params.autoplay && aA.startAutoplay(), aA.params.keyboardControl && aA.enableKeyboardControl && aA.enableKeyboardControl(), aA.params.mousewheelControl && aA.enableMousewheelControl && aA.enableMousewheelControl(), aA.params.hashnav && aA.hashnav && aA.hashnav.init(), aA.params.a11y && aA.a11y && aA.a11y.init(), aA.emit("onInit", aA)
                    }, aA.destroy = function(N) {
                        aA.detachEvents(), aA.disconnectObservers(), aA.params.keyboardControl && aA.disableKeyboardControl && aA.disableKeyboardControl(), aA.params.mousewheelControl && aA.disableMousewheelControl && aA.disableMousewheelControl(), aA.params.a11y && aA.a11y && aA.a11y.destroy(), aA.emit("onDestroy"), N !== !1 && (aA = null)
                    }, aA.init(), aA
                }
            }, Swiper.prototype = {
                isSafari: function() {
                    var e = navigator.userAgent.toLowerCase();
                    return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                }(),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
                isArray: function(e) {
                    return "[object Array]" === Object.prototype.toString.apply(e)
                },
                browser: {
                    ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                    ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
                },
                device: function() {
                    var h = navigator.userAgent,
                        g = h.match(/(Android);?[\s\/]+([\d.]+)?/),
                        f = h.match(/(iPad).*OS\s([\d_]+)/),
                        e = (h.match(/(iPod)(.*OS\s([\d_]+))?/), !f && h.match(/(iPhone\sOS)\s([\d_]+)/));
                    return {
                        ios: f || e || f,
                        android: g
                    }
                }(),
                support: {
                    touch: window.Modernizr && Modernizr.touch === !0 || function() {
                        return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
                    }(),
                    transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                        var e = document.createElement("div").style;
                        return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
                    }(),
                    flexbox: function() {
                        for (var e = document.createElement("div").style, g = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), f = 0; f < g.length; f++) {
                            if (g[f] in e) {
                                return !0
                            }
                        }
                    }(),
                    observer: function() {
                        return "MutationObserver" in window || "WebkitMutationObserver" in window
                    }()
                },
                plugins: {}
            };
            for (var d = ["jQuery", "Zepto", "Dom7"], c = 0; c < d.length; c++) {
                window[d[c]] && a(window[d[c]])
            }
            var b;
            b = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, b && ("transitionEnd" in b.fn || (b.fn.transitionEnd = function(g) {
                function k(l) {
                    if (l.target === this) {
                        for (g.call(this, l), f = 0; f < h.length; f++) {
                            e.off(h[f], k)
                        }
                    }
                }
                var f, h = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                    e = this;
                if (g) {
                    for (f = 0; f < h.length; f++) {
                        e.on(h[f], k)
                    }
                }
                return this
            }), "transform" in b.fn || (b.fn.transform = function(e) {
                for (var g = 0; g < this.length; g++) {
                    var f = this[g].style;
                    f.webkitTransform = f.MsTransform = f.msTransform = f.MozTransform = f.OTransform = f.transform = e
                }
                return this
            }), "transition" in b.fn || (b.fn.transition = function(e) {
                "string" != typeof e && (e += "ms");
                for (var g = 0; g < this.length; g++) {
                    var f = this[g].style;
                    f.webkitTransitionDuration = f.MsTransitionDuration = f.msTransitionDuration = f.MozTransitionDuration = f.OTransitionDuration = f.transitionDuration = e
                }
                return this
            }))
        }(), "undefined" != typeof module ? module.exports = Swiper : "function" == typeof define && define.amd && define([], function() {
            return Swiper
        });
        (function(a) {
            (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
        })(navigator.userAgent || navigator.vendor || window.opera);
        var x = {
            isIe: function() {
                return navigator.appVersion.indexOf("MSIE") != -1
            },
            navigator: navigator.appVersion,
            getVersion: function() {
                var a = 999;
                if (navigator.appVersion.indexOf("MSIE") != -1) {
                    a = parseFloat(navigator.appVersion.split("MSIE")[1])
                }
                return a
            }
        };
        if (x.isIe() && x.getVersion() <= 9) {
            G = true
        }
        J.ttgSlideshow = function(a) {
            a = J.extend({
                color: "#1f7cba",
                animation: "fadeIn fast",
                closebutton: "Close this tour",
                elements: []
            }, a);
            B(a.elements, a.color, a.closebutton, a.animation)
        };

        function B(l, h, d, k) {
            if (l.length <= 0) {
                alert("Tour tip slideshow needs the elements that you want to display");
                return
            }
            var f = "";
            if (J.browser.mobile) {
                J("#ttgSlideMainElement").allBut().addClass("full-hide");
                f += '<div class="ttgSlideBGPhone"></div>'
            } else {
                f += '<div class="ttgSlideBG"></div>'
            }
            f += '<div class="ttgSlideMainContainer animated ' + k + '" align="center" id="ttgSlideMainElement">';
            if (J.browser.mobile) {
                f += '<div class="ttgSlideContainerPhone">'
            } else {
                f += '<div class="ttgSlideContainer">'
            }
            f += '<div class="swiper-ttgContainer">';
            f += '<div class="swiper-wrapper">';
            var e = "";
            var g = "";
            if (G) {
                e = 'style="height:100%;"';
                g = 'style="width:400px;"'
            }
            for (i = 0; i < l.length; i++) {
                f += '<div class="swiper-slide">';
                f += "<table " + e + ">";
                if (l[i].img != undefined) {
                    var a = "";
                    if (l[i].imgclass != undefined) {
                        a = l[i].imgclass
                    }
                    f += "<tr>";
                    f += '<td align="center">';
                    f += '<img src="' + l[i].img + '" alt="comments" class="' + a + '">';
                    f += "<br>";
                    f += "<br>";
                    f += "</td>";
                    f += "</tr>"
                } else {
                    if (l[i].fa != undefined) {
                        var b = h;
                        if (l[i].iconcolor != undefined) {
                            b = l[i].iconcolor
                        }
                        f += "<tr>";
                        f += '<td align="center" ' + g + ">";
                        f += '<i class="fa ' + l[i].fa + '" style="color:' + b + '"></i> ';
                        f += "<br>";
                        f += "<br>";
                        f += "</td>";
                        f += "</tr>"
                    }
                }
                f += "<tr>";
                f += '<td align="center" class="ttgSlidePadding">';
                f += l[i].content;
                f += "</td>";
                f += "</tr>";
                f += "</table>";
                f += "</div>"
            }
            f += '<div class="swiper-slide">';
            f += "<table>";
            f += "<tr " + e + ">";
            f += '<td align="center" class="ttgSlidePadding" ' + g + ">";
            if (G) {
                f += "<br/><br/><br/><br/><br/><br/>"
            }
            f += '<button class="ttgSlideCloseButton" style="background-color:' + h + '">' + d + "</button>";
            f += "</td>";
            f += "</tr>";
            f += "</table>";
            f += "</div>";
            f += "</div>";
            f += '<div class="swiper-pagination"></div>';
            f += "</div>";
            f += "</div>";
            f += "</div>";
            J("body").prepend(f);
            var c = new Swiper(".swiper-ttgContainer", {
                pagination: ".swiper-pagination",
                paginationClickable: true
            });
            setTimeout(function() {
                J(".swiper-pagination-bullet").attr("style", "background:" + h + ";")
            }, 100)
        }
        J(document).ready(function() {
            J("body").on("tap", ".ttgSlideCloseButton", function() {
                J("#ttgSlideMainElement").allBut().removeClass("full-hide");
                J("#ttgSlideMainElement").addClass("fadeOut");
                J(".ttgSlideBGPhone,.ttgSlideBG,.ttgSlideMainContainer,#ttgSlideMainElement").fadeOut(300, function() {
                    J(this).remove()
                })
            })
        });
        J.ttgTourNuke = function() {
            if (D != undefined) {
                D.allBut().removeClass("semi-hide")
            }
            J(".ttgBody").addClass("fadeOut fast");
            setTimeout(function() {
                J(".ttgBody").remove()
            }, 300)
        };
        J.ttgTour = function(a) {
            a = J.extend({
                position: "bottom",
                title: undefined,
                content: "",
                width: 350,
                color: "#1f7cba",
                next: "Next",
                prev: "Prev",
                finish: "Tour End",
                animation: "fadeIn",
                closeicon: true,
                arrow: true,
                currentidx: 0,
                opacity: true,
                scrollspeed: 200,
                elements: []
            }, a);
            C = 0;
            L(a.elements, a);
            E = a.currentidx;
            H = J(".tourtipguide").length;
            z = a.finish;
            I = a;
            J(".ttgBody").remove();
            J(".tourtipguide").each(function(d) {
                var e = J(this);
                var c = v(a, e);
                e.attr("data-ttgBodyID", F);
                J("body").prepend(c);
                K(e, F)
            });
            for (i = 0; i < u.length; i++) {
                for (j = 0; j < u.length; j++) {
                    if (u[j] > u[i]) {
                        var b = u[j];
                        u[j] = u[i];
                        u[i] = b
                    }
                }
            }
            w(E)
        };
        J(document).ready(function(a) {
            a("body").on("tap", ".ttgNext", function(f) {
                f.preventDefault();
                var d = a(this).attr("data-parent");
                var c = a("#" + d);
                var e = c.attr("data-idx") * 1;
                var g = u.indexOf(e) + 1;
                c.hide();
                w(g)
            });
            a("body").on("tap", ".ttgPrev", function(f) {
                f.preventDefault();
                var d = a(this).attr("data-parent");
                var c = a("#" + d);
                var e = c.attr("data-idx") * 1;
                var g = u.indexOf(e) - 1;
                c.hide();
                w(g)
            });
            a("body").on("tap", ".ttgDot", function() {
                var e = a(this).attr("data-indicator") * 1;
                var c = a(this).attr("data-parentid");
                var d = a("#" + c);
                d.hide();
                w(e)
            });
            a("body").on("tap", ".ttgbutClose", function() {
                if (D != undefined) {
                    D.allBut().removeClass("semi-hide")
                }
                a(".ttgBody").addClass("fadeOut fast");
                setTimeout(function() {
                    a(".ttgBody").remove()
                }, 300)
            });
            var b;
            a(window).on("resize", function() {
                clearInterval(b);
                b = setTimeout(function() {
                    try {
                        I.currentidx = E;
                        a.ttgTour(I)
                    } catch (c) {}
                }, 300)
            })
        });

        function L(n, g) {
            for (i = 0; i < n.length; i++) {
                var d = n[i];
                var l = d.id;
                var e = g.animation;
                var c = g.position;
                var b = undefined;
                var h = undefined;
                var a = undefined;
                var m = undefined;
                var f = g.color;
                var o = g.arrow;
                var p = A;
                if (l == undefined) {
                    continue
                }
                var k = J("#" + l);
                if (k.hasClass("tourtipguide")) {
                    continue
                }
                k.addClass("tourtipguide");
                k.attr("data-ttg-parentid", l);
                if (d.animation != undefined) {
                    k.attr("data-ttg-animation", d.animation)
                }
                if (d.position != undefined) {
                    k.attr("data-ttg-position", d.position)
                }
                if (d.fa != undefined) {
                    k.attr("data-ttg-fa", d.fa)
                }
                if (d.img != undefined) {
                    k.attr("data-ttg-img", d.img)
                }
                if (d.title != undefined) {
                    k.attr("data-ttg-title", d.title)
                }
                if (d.content != undefined) {
                    k.attr("data-ttg-content", d.content)
                }
                if (d.color != undefined) {
                    k.attr("data-ttg-color", d.color)
                }
                if (d.idx != undefined) {
                    k.attr("data-ttg-idx", d.idx)
                } else {
                    p = A;
                    A++;
                    k.attr("data-ttg-idx", p)
                }
                if (d.arrow != undefined) {
                    k.attr("data-ttg-arrow", d.arrow)
                }
            }
        }

        function w(d) {
            var b = J("#ttgId" + u[d]);
            var c = b.attr("data-color");
            if (D != undefined) {
                D.allBut().removeClass("semi-hide")
            }
            if (I.opacity) {
                var e = b.attr("data-parentid");
                $Parent = J("#" + e);
                D = $Parent;
                $Parent.allBut().addClass("semi-hide")
            }
            J(".ttgBody").removeClass("semi-hide");
            try {
                if (d == 0) {
                    b.find(".ttgPrev").hide()
                } else {
                    if (d == (u.length - 1)) {
                        b.find(".ttgNext").text(z)
                    }
                }
                E = d;
                b.show();
                b.find(".ttgButtom i").eq(d).attr("style", "color:" + c + ";");
                J("html, body").animate({
                    scrollTop: J("#ttgId" + u[d]).offset().top - 320
                }, I.scrollspeed)
            } catch (a) {}
        }

        function v(k, f) {
            var c = "";
            var g = k.animation;
            var e = k.position;
            var b = undefined;
            var m = undefined;
            var a = undefined;
            var l = undefined;
            var h = k.color;
            var n = k.arrow;
            var o = A;
            var d = f.attr("id");
            if (d == undefined) {
                y += 1;
                d = "ttgCustomID" + y;
                f.attr("id", d)
            }
            if (f.attr("data-ttg-animation") != undefined) {
                g = f.attr("data-ttg-animation")
            }
            if (f.attr("data-ttg-position") != undefined) {
                e = f.attr("data-ttg-position")
            }
            if (f.attr("data-ttg-fa") != undefined) {
                b = f.attr("data-ttg-fa")
            }
            if (f.attr("data-ttg-img") != undefined) {
                m = f.attr("data-ttg-img")
            }
            if (f.attr("data-ttg-title") != undefined) {
                a = f.attr("data-ttg-title")
            }
            if (f.attr("data-ttg-content") != undefined) {
                l = f.attr("data-ttg-content")
            }
            if (f.attr("data-ttg-color") != undefined) {
                h = f.attr("data-ttg-color")
            }
            if (f.attr("data-ttg-arrow") != undefined) {
                n = f.attr("data-ttg-arrow")
            }
            if (f.attr("data-ttg-idx") != undefined) {
                o = f.attr("data-ttg-idx");
                o = o * 1;
                if (u.indexOf(o) > -1) {
                    o = A;
                    A++
                }
            } else {
                o = A;
                A++
            }
            u[C] = (o * 1);
            C++;
            F = "#ttgId" + o;
            c += '<div class="ttgBody animated ' + g + '" data-parentid="' + d + '" data-position="' + e + '"" data-idx="' + o + '" id="ttgId' + o + '" data-color="' + h + '">';
            if (n == true || n == "1") {
                c += '<div class="ttgArrow-up" style="border-bottom-color:' + h + ';"></div>';
                c += '<div class="ttgArrow-left" style="border-right-color:' + h + ';"></div>';
                c += '<div class="ttgArrow-right" style="border-left-color:' + h + ';"></div>'
            }
            c += '  <div class="ttgClose">';
            if (k.closeicon) {
                c += '      <i class="ttgbutClose fa fa-times"> </i>'
            } else {
                c += "      <br/>"
            }
            c += "  </div>";
            c += '  <div class="ttgContent">';
            c += "      <table>";
            c += "          <tr>";
            if (b != undefined || m != undefined) {
                c += '              <td class="ttgIconContainer" valign="top">';
                if (b != undefined) {
                    c += '                  <i class="ttgIcon fa ' + b + ' fa-3x" style="color:' + h + ';"></i>'
                } else {
                    c += '                  <img src="' + m + '" alt="icon">'
                }
                c += "              </td>"
            }
            c += "              <td>";
            if (a != undefined) {
                c += '<span class="ttgTitle" style="color:' + h + ';">' + a + "</span>"
            }
            if (l != undefined) {
                c += '<span class="ttgInfo">' + l + "</span>"
            }
            c += "              </td>";
            c += "          </tr>";
            c += "      </table>";
            c += "  </div>";
            if (H > 1) {
                c += '  <div class="ttgButtom">';
                c += "      <br>";
                for (i = 0; i < H; i++) {
                    if (E == i) {
                        c += '<i data-indicator="' + i + '" data-parentid="ttgId' + o + '" class="ttgDot fa fa-circle"></i>'
                    } else {
                        c += '<i data-indicator="' + i + '" data-parentid="ttgId' + o + '" class="ttgDot fa fa-circle"></i>'
                    }
                }
                c += "  </div>"
            }
            c += '  <div class="ttgNextPrev" align="right">';
            c += '<a class="ttgPrev" data-parent="ttgId' + o + '">' + k.prev + "</a> ";
            c += '<a class="ttgNext" data-parent="ttgId' + o + '" style="background:' + h + ';">' + k.next + "</a>";
            c += "  </div>";
            if (n == true || n == "1") {
                c += '<div class="ttgArrow-down" style="border-top-color:' + h + ';"></div>'
            }
            c += "</div>";
            return c
        }

        function K(l, r) {
            var g = l.offset().top;
            var d = l.offset().left;
            var p = J(r);
            var a = p.attr("data-position");
            var e = l.outerHeight();
            var N = l.outerWidth();
            var n = p.outerHeight();
            var o = p.outerWidth();
            var b = p.find(".ttgArrow-up");
            var k = p.find(".ttgArrow-down");
            var t = p.find(".ttgArrow-left");
            var c = p.find(".ttgArrow-right");
            var s = J(window).width();
            var h;
            switch (a) {
                case "bottom":
                    var f = d + (N / 2) - (o / 2);
                    b.show();
                    if (s <= (d + 40 + (o / 2))) {
                        p.css({
                            top: g + e + 15,
                            left: s - o - 10
                        });
                        b.css({
                            position: "fixed",
                            top: g + e,
                            left: d + (N / 2),
                        });
                        h = 10
                    } else {
                        if (f - 10 <= 0) {
                            p.css({
                                top: g + e + 15,
                                left: 10
                            });
                            b.css({
                                position: "fixed",
                                top: g + e,
                                left: d + (N / 2),
                            });
                            h = f
                        } else {
                            p.css({
                                top: g + e + 15,
                                left: f
                            });
                            b.css({
                                position: "absolute",
                                top: -15,
                                left: (o / 2) - 12
                            });
                            h = f
                        }
                    }
                    break;
                case "top":
                    var f = d + (N / 2) - (o / 2);
                    var m;
                    k.show();
                    if (s <= d + 40 + (o / 2)) {
                        m = g - n - 20;
                        p.css({
                            top: m,
                            right: 10
                        });
                        k.css({
                            position: "fixed",
                            top: g - 20,
                            left: d + (N / 2),
                        });
                        h = 10
                    } else {
                        if (f - 10 <= 0) {
                            m = g - n - e + 10;
                            p.css({
                                top: m,
                                left: 10
                            });
                            k.css({
                                position: "fixed",
                                top: g - 25,
                                left: d + (N / 2),
                            });
                            h = d + (N / 2) - (o / 2)
                        } else {
                            m = g - n - e + 10;
                            p.css({
                                top: m,
                                left: d + (N / 2) - (o / 2)
                            });
                            k.css({
                                position: "absolute",
                                bottom: -15,
                                left: (o / 2) - 12
                            });
                            h = d + (N / 2) - (o / 2)
                        }
                    }
                    if (m <= 10) {
                        k.hide();
                        p.attr("data-position", "bottom");
                        K(l, r)
                    }
                    break;
                case "right":
                    p.css({
                        top: g + (e / 2) - (n / 2) - 10,
                        left: d + N
                    });
                    t.show();
                    t.css({
                        top: (n / 2) - 10,
                        left: -15
                    });
                    h = d + N;
                    break;
                case "left":
                    p.css({
                        top: g + (e / 2) - (n / 2) - 10,
                        left: d - o - 20
                    });
                    c.show();
                    c.css({
                        top: (n / 2) - 10,
                        right: -15
                    });
                    h = d - o - 10;
                    break;
                default:
                    p.css({
                        top: g + e,
                        left: d + (N / 2) - (o / 2)
                    });
                    b.show();
                    b.css({
                        top: -15,
                        left: (o / 2)
                    });
                    h = d + (N / 2) - (o / 2)
            }
            var q = h + p.outerWidth();
            if (h <= 20) {
                if (a == "left" || a == "right") {
                    t.hide();
                    c.hide();
                    p.attr("data-position", "bottom");
                    K(l, r)
                }
            } else {
                if (q >= s && (a == "right" || a == "left")) {
                    t.hide();
                    c.hide();
                    p.attr("data-position", "bottom");
                    K(l, r)
                }
            }
        }
    })(jQuery);
