!(function (e, t) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define('klaro', [], t)
        : 'object' == typeof exports
        ? (exports.klaro = t())
        : (e.klaro = t());
})(this, function () {
    return (function (e) {
        var t = {};
        function n(o) {
            if (t[o]) return t[o].exports;
            var r = (t[o] = { i: o, l: !1, exports: {} });
            return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
        }
        return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, o) {
                n.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: o });
            }),
            (n.r = function (e) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: 'Module',
                    }),
                    Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule)
                    return e;
                var o = Object.create(null);
                if (
                    (n.r(o),
                    Object.defineProperty(o, 'default', {
                        enumerable: !0,
                        value: e,
                    }),
                    2 & t && 'string' != typeof e)
                )
                    for (var r in e)
                        n.d(
                            o,
                            r,
                            function (t) {
                                return e[t];
                            }.bind(null, r)
                        );
                return o;
            }),
            (n.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return n.d(t, 'a', t), t;
            }),
            (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ''),
            n((n.s = 188))
        );
    })([
        function (e, t, n) {
            var o = n(3),
                r = n(27).f,
                i = n(21),
                a = n(22),
                c = n(66),
                s = n(98),
                l = n(57);
            e.exports = function (e, t) {
                var n,
                    u,
                    p,
                    d,
                    f,
                    m = e.target,
                    v = e.global,
                    y = e.stat;
                if ((n = v ? o : y ? o[m] || c(m, {}) : (o[m] || {}).prototype))
                    for (u in t) {
                        if (
                            ((d = t[u]),
                            (p = e.noTargetGet
                                ? (f = r(n, u)) && f.value
                                : n[u]),
                            !l(v ? u : m + (y ? '.' : '#') + u, e.forced) &&
                                void 0 !== p)
                        ) {
                            if (typeof d == typeof p) continue;
                            s(d, p);
                        }
                        (e.sham || (p && p.sham)) && i(d, 'sham', !0),
                            a(n, u, d, e);
                    }
            };
        },
        function (e, t) {
            e.exports = function (e) {
                try {
                    return !!e();
                } catch (e) {
                    return !0;
                }
            };
        },
        function (e, t, n) {
            var o = n(3),
                r = n(68),
                i = n(15),
                a = n(54),
                c = n(72),
                s = n(103),
                l = r('wks'),
                u = o.Symbol,
                p = s ? u : (u && u.withoutSetter) || a;
            e.exports = function (e) {
                return (
                    i(l, e) ||
                        (c && i(u, e)
                            ? (l[e] = u[e])
                            : (l[e] = p('Symbol.' + e))),
                    l[e]
                );
            };
        },
        function (e, t, n) {
            (function (t) {
                var n = function (e) {
                    return e && e.Math == Math && e;
                };
                e.exports =
                    n('object' == typeof globalThis && globalThis) ||
                    n('object' == typeof window && window) ||
                    n('object' == typeof self && self) ||
                    n('object' == typeof t && t) ||
                    Function('return this')();
            }.call(this, n(158)));
        },
        function (e, t) {
            e.exports = function (e) {
                return 'object' == typeof e
                    ? null !== e
                    : 'function' == typeof e;
            };
        },
        function (e, t, n) {
            'use strict';
            var o = n(0),
                r = n(3),
                i = n(34),
                a = n(33),
                c = n(8),
                s = n(72),
                l = n(103),
                u = n(1),
                p = n(15),
                d = n(58),
                f = n(4),
                m = n(9),
                v = n(23),
                y = n(18),
                h = n(52),
                b = n(42),
                g = n(44),
                k = n(45),
                _ = n(55),
                x = n(161),
                w = n(71),
                S = n(27),
                j = n(16),
                O = n(50),
                A = n(21),
                z = n(22),
                P = n(68),
                E = n(53),
                C = n(43),
                D = n(54),
                T = n(2),
                I = n(105),
                R = n(106),
                N = n(46),
                M = n(32),
                q = n(39).forEach,
                U = E('hidden'),
                L = T('toPrimitive'),
                F = M.set,
                H = M.getterFor('Symbol'),
                W = Object.prototype,
                B = r.Symbol,
                K = i('JSON', 'stringify'),
                V = S.f,
                $ = j.f,
                G = x.f,
                Z = O.f,
                Q = P('symbols'),
                Y = P('op-symbols'),
                J = P('string-to-symbol-registry'),
                X = P('symbol-to-string-registry'),
                ee = P('wks'),
                te = r.QObject,
                ne = !te || !te.prototype || !te.prototype.findChild,
                oe =
                    c &&
                    u(function () {
                        return (
                            7 !=
                            g(
                                $({}, 'a', {
                                    get: function () {
                                        return $(this, 'a', { value: 7 }).a;
                                    },
                                })
                            ).a
                        );
                    })
                        ? function (e, t, n) {
                              var o = V(W, t);
                              o && delete W[t],
                                  $(e, t, n),
                                  o && e !== W && $(W, t, o);
                          }
                        : $,
                re = function (e, t) {
                    var n = (Q[e] = g(B.prototype));
                    return (
                        F(n, { type: 'Symbol', tag: e, description: t }),
                        c || (n.description = t),
                        n
                    );
                },
                ie = l
                    ? function (e) {
                          return 'symbol' == typeof e;
                      }
                    : function (e) {
                          return Object(e) instanceof B;
                      },
                ae = function (e, t, n) {
                    e === W && ae(Y, t, n), m(e);
                    var o = h(t, !0);
                    return (
                        m(n),
                        p(Q, o)
                            ? (n.enumerable
                                  ? (p(e, U) && e[U][o] && (e[U][o] = !1),
                                    (n = g(n, { enumerable: b(0, !1) })))
                                  : (p(e, U) || $(e, U, b(1, {})),
                                    (e[U][o] = !0)),
                              oe(e, o, n))
                            : $(e, o, n)
                    );
                },
                ce = function (e, t) {
                    m(e);
                    var n = y(t),
                        o = k(n).concat(pe(n));
                    return (
                        q(o, function (t) {
                            (c && !se.call(n, t)) || ae(e, t, n[t]);
                        }),
                        e
                    );
                },
                se = function (e) {
                    var t = h(e, !0),
                        n = Z.call(this, t);
                    return (
                        !(this === W && p(Q, t) && !p(Y, t)) &&
                        (!(
                            n ||
                            !p(this, t) ||
                            !p(Q, t) ||
                            (p(this, U) && this[U][t])
                        ) ||
                            n)
                    );
                },
                le = function (e, t) {
                    var n = y(e),
                        o = h(t, !0);
                    if (n !== W || !p(Q, o) || p(Y, o)) {
                        var r = V(n, o);
                        return (
                            !r ||
                                !p(Q, o) ||
                                (p(n, U) && n[U][o]) ||
                                (r.enumerable = !0),
                            r
                        );
                    }
                },
                ue = function (e) {
                    var t = G(y(e)),
                        n = [];
                    return (
                        q(t, function (e) {
                            p(Q, e) || p(C, e) || n.push(e);
                        }),
                        n
                    );
                },
                pe = function (e) {
                    var t = e === W,
                        n = G(t ? Y : y(e)),
                        o = [];
                    return (
                        q(n, function (e) {
                            !p(Q, e) || (t && !p(W, e)) || o.push(Q[e]);
                        }),
                        o
                    );
                };
            (s ||
                (z(
                    (B = function () {
                        if (this instanceof B)
                            throw TypeError('Symbol is not a constructor');
                        var e =
                                arguments.length && void 0 !== arguments[0]
                                    ? String(arguments[0])
                                    : void 0,
                            t = D(e),
                            n = function (e) {
                                this === W && n.call(Y, e),
                                    p(this, U) &&
                                        p(this[U], t) &&
                                        (this[U][t] = !1),
                                    oe(this, t, b(1, e));
                            };
                        return (
                            c && ne && oe(W, t, { configurable: !0, set: n }),
                            re(t, e)
                        );
                    }).prototype,
                    'toString',
                    function () {
                        return H(this).tag;
                    }
                ),
                z(B, 'withoutSetter', function (e) {
                    return re(D(e), e);
                }),
                (O.f = se),
                (j.f = ae),
                (S.f = le),
                (_.f = x.f = ue),
                (w.f = pe),
                (I.f = function (e) {
                    return re(T(e), e);
                }),
                c &&
                    ($(B.prototype, 'description', {
                        configurable: !0,
                        get: function () {
                            return H(this).description;
                        },
                    }),
                    a || z(W, 'propertyIsEnumerable', se, { unsafe: !0 }))),
            o({ global: !0, wrap: !0, forced: !s, sham: !s }, { Symbol: B }),
            q(k(ee), function (e) {
                R(e);
            }),
            o(
                { target: 'Symbol', stat: !0, forced: !s },
                {
                    for: function (e) {
                        var t = String(e);
                        if (p(J, t)) return J[t];
                        var n = B(t);
                        return (J[t] = n), (X[n] = t), n;
                    },
                    keyFor: function (e) {
                        if (!ie(e)) throw TypeError(e + ' is not a symbol');
                        if (p(X, e)) return X[e];
                    },
                    useSetter: function () {
                        ne = !0;
                    },
                    useSimple: function () {
                        ne = !1;
                    },
                }
            ),
            o(
                { target: 'Object', stat: !0, forced: !s, sham: !c },
                {
                    create: function (e, t) {
                        return void 0 === t ? g(e) : ce(g(e), t);
                    },
                    defineProperty: ae,
                    defineProperties: ce,
                    getOwnPropertyDescriptor: le,
                }
            ),
            o(
                { target: 'Object', stat: !0, forced: !s },
                { getOwnPropertyNames: ue, getOwnPropertySymbols: pe }
            ),
            o(
                {
                    target: 'Object',
                    stat: !0,
                    forced: u(function () {
                        w.f(1);
                    }),
                },
                {
                    getOwnPropertySymbols: function (e) {
                        return w.f(v(e));
                    },
                }
            ),
            K) &&
                o(
                    {
                        target: 'JSON',
                        stat: !0,
                        forced:
                            !s ||
                            u(function () {
                                var e = B();
                                return (
                                    '[null]' != K([e]) ||
                                    '{}' != K({ a: e }) ||
                                    '{}' != K(Object(e))
                                );
                            }),
                    },
                    {
                        stringify: function (e, t, n) {
                            for (var o, r = [e], i = 1; arguments.length > i; )
                                r.push(arguments[i++]);
                            if (((o = t), (f(t) || void 0 !== e) && !ie(e)))
                                return (
                                    d(t) ||
                                        (t = function (e, t) {
                                            if (
                                                ('function' == typeof o &&
                                                    (t = o.call(this, e, t)),
                                                !ie(t))
                                            )
                                                return t;
                                        }),
                                    (r[1] = t),
                                    K.apply(null, r)
                                );
                        },
                    }
                );
            B.prototype[L] || A(B.prototype, L, B.prototype.valueOf),
                N(B, 'Symbol'),
                (C[U] = !0);
        },
        function (e, t, n) {
            'use strict';
            var o = n(18),
                r = n(61),
                i = n(48),
                a = n(32),
                c = n(77),
                s = a.set,
                l = a.getterFor('Array Iterator');
            (e.exports = c(
                Array,
                'Array',
                function (e, t) {
                    s(this, {
                        type: 'Array Iterator',
                        target: o(e),
                        index: 0,
                        kind: t,
                    });
                },
                function () {
                    var e = l(this),
                        t = e.target,
                        n = e.kind,
                        o = e.index++;
                    return !t || o >= t.length
                        ? ((e.target = void 0), { value: void 0, done: !0 })
                        : 'keys' == n
                        ? { value: o, done: !1 }
                        : 'values' == n
                        ? { value: t[o], done: !1 }
                        : { value: [o, t[o]], done: !1 };
                },
                'values'
            )),
                (i.Arguments = i.Array),
                r('keys'),
                r('values'),
                r('entries');
        },
        function (e, t, n) {
            var o = n(75),
                r = n(22),
                i = n(167);
            o || r(Object.prototype, 'toString', i, { unsafe: !0 });
        },
        function (e, t, n) {
            var o = n(1);
            e.exports = !o(function () {
                return (
                    7 !=
                    Object.defineProperty({}, 1, {
                        get: function () {
                            return 7;
                        },
                    })[1]
                );
            });
        },
        function (e, t, n) {
            var o = n(4);
            e.exports = function (e) {
                if (!o(e)) throw TypeError(String(e) + ' is not an object');
                return e;
            };
        },
        function (e, t, n) {
            'use strict';
            var o = n(0),
                r = n(8),
                i = n(3),
                a = n(15),
                c = n(4),
                s = n(16).f,
                l = n(98),
                u = i.Symbol;
            if (
                r &&
                'function' == typeof u &&
                (!('description' in u.prototype) || void 0 !== u().description)
            ) {
                var p = {},
                    d = function () {
                        var e =
                                arguments.length < 1 || void 0 === arguments[0]
                                    ? void 0
                                    : String(arguments[0]),
                            t =
                                this instanceof d
                                    ? new u(e)
                                    : void 0 === e
                                    ? u()
                                    : u(e);
                        return '' === e && (p[t] = !0), t;
                    };
                l(d, u);
                var f = (d.prototype = u.prototype);
                f.constructor = d;
                var m = f.toString,
                    v = 'Symbol(test)' == String(u('test')),
                    y = /^Symbol\((.*)\)[^)]+$/;
                s(f, 'description', {
                    configurable: !0,
                    get: function () {
                        var e = c(this) ? this.valueOf() : this,
                            t = m.call(e);
                        if (a(p, e)) return '';
                        var n = v ? t.slice(7, -1) : t.replace(y, '$1');
                        return '' === n ? void 0 : n;
                    },
                }),
                    o({ global: !0, forced: !0 }, { Symbol: d });
            }
        },
        function (e, t, n) {
            n(106)('iterator');
        },
        function (e, t, n) {
            'use strict';
            var o = n(22),
                r = n(9),
                i = n(1),
                a = n(85),
                c = RegExp.prototype,
                s = c.toString,
                l = i(function () {
                    return '/a/b' != s.call({ source: 'a', flags: 'b' });
                }),
                u = 'toString' != s.name;
            (l || u) &&
                o(
                    RegExp.prototype,
                    'toString',
                    function () {
                        var e = r(this),
                            t = String(e.source),
                            n = e.flags;
                        return (
                            '/' +
                            t +
                            '/' +
                            String(
                                void 0 === n &&
                                    e instanceof RegExp &&
                                    !('flags' in c)
                                    ? a.call(e)
                                    : n
                            )
                        );
                    },
                    { unsafe: !0 }
                );
        },
        function (e, t, n) {
            'use strict';
            var o = n(123).charAt,
                r = n(32),
                i = n(77),
                a = r.set,
                c = r.getterFor('String Iterator');
            i(
                String,
                'String',
                function (e) {
                    a(this, {
                        type: 'String Iterator',
                        string: String(e),
                        index: 0,
                    });
                },
                function () {
                    var e,
                        t = c(this),
                        n = t.string,
                        r = t.index;
                    return r >= n.length
                        ? { value: void 0, done: !0 }
                        : ((e = o(n, r)),
                          (t.index += e.length),
                          { value: e, done: !1 });
                }
            );
        },
        function (e, t, n) {
            var o = n(3),
                r = n(125),
                i = n(6),
                a = n(21),
                c = n(2),
                s = c('iterator'),
                l = c('toStringTag'),
                u = i.values;
            for (var p in r) {
                var d = o[p],
                    f = d && d.prototype;
                if (f) {
                    if (f[s] !== u)
                        try {
                            a(f, s, u);
                        } catch (e) {
                            f[s] = u;
                        }
                    if ((f[l] || a(f, l, p), r[p]))
                        for (var m in i)
                            if (f[m] !== i[m])
                                try {
                                    a(f, m, i[m]);
                                } catch (e) {
                                    f[m] = i[m];
                                }
                }
            }
        },
        function (e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function (e, t) {
                return n.call(e, t);
            };
        },
        function (e, t, n) {
            var o = n(8),
                r = n(96),
                i = n(9),
                a = n(52),
                c = Object.defineProperty;
            t.f = o
                ? c
                : function (e, t, n) {
                      if ((i(e), (t = a(t, !0)), i(n), r))
                          try {
                              return c(e, t, n);
                          } catch (e) {}
                      if ('get' in n || 'set' in n)
                          throw TypeError('Accessors not supported');
                      return 'value' in n && (e[t] = n.value), e;
                  };
        },
        function (e, t, n) {
            var o = n(8),
                r = n(16).f,
                i = Function.prototype,
                a = i.toString,
                c = /^\s*function ([^ (]*)/;
            o &&
                !('name' in i) &&
                r(i, 'name', {
                    configurable: !0,
                    get: function () {
                        try {
                            return a.call(this).match(c)[1];
                        } catch (e) {
                            return '';
                        }
                    },
                });
        },
        function (e, t, n) {
            var o = n(51),
                r = n(26);
            e.exports = function (e) {
                return o(r(e));
            };
        },
        function (e, t, n) {
            var o = n(56),
                r = Math.min;
            e.exports = function (e) {
                return e > 0 ? r(o(e), 9007199254740991) : 0;
            };
        },
        function (e, t, n) {
            'use strict';
            var o = n(0),
                r = n(4),
                i = n(58),
                a = n(102),
                c = n(19),
                s = n(18),
                l = n(59),
                u = n(2),
                p = n(60),
                d = n(29),
                f = p('slice'),
                m = d('slice', { ACCESSORS: !0, 0: 0, 1: 2 }),
                v = u('species'),
                y = [].slice,
                h = Math.max;
            o(
                { target: 'Array', proto: !0, forced: !f || !m },
                {
                    slice: function (e, t) {
                        var n,
                            o,
                            u,
                            p = s(this),
                            d = c(p.length),
                            f = a(e, d),
                            m = a(void 0 === t ? d : t, d);
                        if (
                            i(p) &&
                            ('function' != typeof (n = p.constructor) ||
                            (n !== Array && !i(n.prototype))
                                ? r(n) && null === (n = n[v]) && (n = void 0)
                                : (n = void 0),
                            n === Array || void 0 === n)
                        )
                            return y.call(p, f, m);
                        for (
                            o = new (void 0 === n ? Array : n)(h(m - f, 0)),
                                u = 0;
                            f < m;
                            f++, u++
                        )
                            f in p && l(o, u, p[f]);
                        return (o.length = u), o;
                    },
                }
            );
        },
        function (e, t, n) {
            var o = n(8),
                r = n(16),
                i = n(42);
            e.exports = o
                ? function (e, t, n) {
                      return r.f(e, t, i(1, n));
                  }
                : function (e, t, n) {
                      return (e[t] = n), e;
                  };
        },
        function (e, t, n) {
            var o = n(3),
                r = n(21),
                i = n(15),
                a = n(66),
                c = n(67),
                s = n(32),
                l = s.get,
                u = s.enforce,
                p = String(String).split('String');
            (e.exports = function (e, t, n, c) {
                var s = !!c && !!c.unsafe,
                    l = !!c && !!c.enumerable,
                    d = !!c && !!c.noTargetGet;
                'function' == typeof n &&
                    ('string' != typeof t || i(n, 'name') || r(n, 'name', t),
                    (u(n).source = p.join('string' == typeof t ? t : ''))),
                    e !== o
                        ? (s ? !d && e[t] && (l = !0) : delete e[t],
                          l ? (e[t] = n) : r(e, t, n))
                        : l
                        ? (e[t] = n)
                        : a(t, n);
            })(Function.prototype, 'toString', function () {
                return ('function' == typeof this && l(this).source) || c(this);
            });
        },
        function (e, t, n) {
            var o = n(26);
            e.exports = function (e) {
                return Object(o(e));
            };
        },
        function (e, t, n) {
            var o = n(0),
                r = n(163);
            o(
                {
                    target: 'Array',
                    stat: !0,
                    forced: !n(76)(function (e) {
                        Array.from(e);
                    }),
                },
                { from: r }
            );
        },
        function (e, t, n) {
            'use strict';
            var o = n(0),
                r = n(39).map,
                i = n(60),
                a = n(29),
                c = i('map'),
                s = a('map');
            o(
                { target: 'Array', proto: !0, forced: !c || !s },
                {
                    map: function (e) {
                        return r(
                            this,
                            e,
                            arguments.length > 1 ? arguments[1] : void 0
                        );
                    },
                }
            );
        },
        function (e, t) {
            e.exports = function (e) {
                if (null == e) throw TypeError("Can't call method on " + e);
                return e;
            };
        },
        function (e, t, n) {
            var o = n(8),
                r = n(50),
                i = n(42),
                a = n(18),
                c = n(52),
                s = n(15),
                l = n(96),
                u = Object.getOwnPropertyDescriptor;
            t.f = o
                ? u
                : function (e, t) {
                      if (((e = a(e)), (t = c(t, !0)), l))
                          try {
                              return u(e, t);
                          } catch (e) {}
                      if (s(e, t)) return i(!r.f.call(e, t), e[t]);
                  };
        },
        function (e, t) {
            var n = {}.toString;
            e.exports = function (e) {
                return n.call(e).slice(8, -1);
            };
        },
        function (e, t, n) {
            var o = n(8),
                r = n(1),
                i = n(15),
                a = Object.defineProperty,
                c = {},
                s = function (e) {
                    throw e;
                };
            e.exports = function (e, t) {
                if (i(c, e)) return c[e];
                t || (t = {});
                var n = [][e],
                    l = !!i(t, 'ACCESSORS') && t.ACCESSORS,
                    u = i(t, 0) ? t[0] : s,
                    p = i(t, 1) ? t[1] : void 0;
                return (c[e] =
                    !!n &&
                    !r(function () {
                        if (l && !o) return !0;
                        var e = { length: -1 };
                        l ? a(e, 1, { enumerable: !0, get: s }) : (e[1] = 1),
                            n.call(e, u, p);
                    }));
            };
        },
        function (e, t, n) {
            var o = n(0),
                r = n(1),
                i = n(23),
                a = n(78),
                c = n(115);
            o(
                {
                    target: 'Object',
                    stat: !0,
                    forced: r(function () {
                        a(1);
                    }),
                    sham: !c,
                },
                {
                    getPrototypeOf: function (e) {
                        return a(i(e));
                    },
                }
            );
        },
        function (e, t, n) {
            var o = n(0),
                r = n(34),
                i = n(35),
                a = n(9),
                c = n(4),
                s = n(44),
                l = n(168),
                u = n(1),
                p = r('Reflect', 'construct'),
                d = u(function () {
                    function e() {}
                    return !(p(function () {}, [], e) instanceof e);
                }),
                f = !u(function () {
                    p(function () {});
                }),
                m = d || f;
            o(
                { target: 'Reflect', stat: !0, forced: m, sham: m },
                {
                    construct: function (e, t) {
                        i(e), a(t);
                        var n = arguments.length < 3 ? e : i(arguments[2]);
                        if (f && !d) return p(e, t, n);
                        if (e == n) {
                            switch (t.length) {
                                case 0:
                                    return new e();
                                case 1:
                                    return new e(t[0]);
                                case 2:
                                    return new e(t[0], t[1]);
                                case 3:
                                    return new e(t[0], t[1], t[2]);
                                case 4:
                                    return new e(t[0], t[1], t[2], t[3]);
                            }
                            var o = [null];
                            return o.push.apply(o, t), new (l.apply(e, o))();
                        }
                        var r = n.prototype,
                            u = s(c(r) ? r : Object.prototype),
                            m = Function.apply.call(e, u, t);
                        return c(m) ? m : u;
                    },
                }
            );
        },
        function (e, t, n) {
            var o,
                r,
                i,
                a = n(159),
                c = n(3),
                s = n(4),
                l = n(21),
                u = n(15),
                p = n(53),
                d = n(43),
                f = c.WeakMap;
            if (a) {
                var m = new f(),
                    v = m.get,
                    y = m.has,
                    h = m.set;
                (o = function (e, t) {
                    return h.call(m, e, t), t;
                }),
                    (r = function (e) {
                        return v.call(m, e) || {};
                    }),
                    (i = function (e) {
                        return y.call(m, e);
                    });
            } else {
                var b = p('state');
                (d[b] = !0),
                    (o = function (e, t) {
                        return l(e, b, t), t;
                    }),
                    (r = function (e) {
                        return u(e, b) ? e[b] : {};
                    }),
                    (i = function (e) {
                        return u(e, b);
                    });
            }
            e.exports = {
                set: o,
                get: r,
                has: i,
                enforce: function (e) {
                    return i(e) ? r(e) : o(e, {});
                },
                getterFor: function (e) {
                    return function (t) {
                        var n;
                        if (!s(t) || (n = r(t)).type !== e)
                            throw TypeError(
                                'Incompatible receiver, ' + e + ' required'
                            );
                        return n;
                    };
                },
            };
        },
        function (e, t) {
            e.exports = !1;
        },
        function (e, t, n) {
            var o = n(100),
                r = n(3),
                i = function (e) {
                    return 'function' == typeof e ? e : void 0;
                };
            e.exports = function (e, t) {
                return arguments.length < 2
                    ? i(o[e]) || i(r[e])
                    : (o[e] && o[e][t]) || (r[e] && r[e][t]);
            };
        },
        function (e, t) {
            e.exports = function (e) {
                if ('function' != typeof e)
                    throw TypeError(String(e) + ' is not a function');
                return e;
            };
        },
        function (e, t, n) {
            var o = n(0),
                r = n(23),
                i = n(45);
            o(
                {
                    target: 'Object',
                    stat: !0,
                    forced: n(1)(function () {
                        i(1);
                    }),
                },
                {
                    keys: function (e) {
                        return i(r(e));
                    },
                }
            );
        },
        function (e, t, n) {
            'use strict';
            var o = n(0),
                r = n(63);
            o(
                { target: 'RegExp', proto: !0, forced: /./.exec !== r },
                { exec: r }
            );
        },
        function (e, t, n) {
            'use strict';
            var o = n(0),
                r = n(51),
                i = n(18),
                a = n(62),
                c = [].join,
                s = r != Object,
                l = a('join', ',');
            o(
                { target: 'Array', proto: !0, forced: s || !l },
                {
                    join: function (e) {
                        return c.call(i(this), void 0 === e ? ',' : e);
                    },
                }
            );
        },
        function (e, t, n) {
            var o = n(47),
                r = n(51),
                i = n(23),
                a = n(19),
                c = n(107),
                s = [].push,
                l = function (e) {
                    var t = 1 == e,
                        n = 2 == e,
                        l = 3 == e,
                        u = 4 == e,
                        p = 6 == e,
                        d = 5 == e || p;
                    return function (f, m, v, y) {
                        for (
                            var h,
                                b,
                                g = i(f),
                                k = r(g),
                                _ = o(m, v, 3),
                                x = a(k.length),
                                w = 0,
                                S = y || c,
                                j = t ? S(f, x) : n ? S(f, 0) : void 0;
                            x > w;
                            w++
                        )
                            if ((d || w in k) && ((b = _((h = k[w]), w, g)), e))
                                if (t) j[w] = b;
                                else if (b)
                                    switch (e) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return h;
                                        case 6:
                                            return w;
                                        case 2:
                                            s.call(j, h);
                                    }
                                else if (u) return !1;
                        return p ? -1 : l || u ? u : j;
                    };
                };
            e.exports = {
                forEach: l(0),
                map: l(1),
                filter: l(2),
                some: l(3),
                every: l(4),
                find: l(5),
                findIndex: l(6),
            };
        },
        function (e, t, n) {
            'use strict';
            var o = n(0),
                r = n(1),
                i = n(58),
                a = n(4),
                c = n(23),
                s = n(19),
                l = n(59),
                u = n(107),
                p = n(60),
                d = n(2),
                f = n(73),
                m = d('isConcatSpreadable'),
                v =
                    f >= 51 ||
                    !r(function () {
                        var e = [];
                        return (e[m] = !1), e.concat()[0] !== e;
                    }),
                y = p('concat'),
                h = function (e) {
                    if (!a(e)) return !1;
                    var t = e[m];
                    return void 0 !== t ? !!t : i(e);
                };
            o(
                { target: 'Array', proto: !0, forced: !v || !y },
                {
                    concat: function (e) {
                        var t,
                            n,
                            o,
                            r,
                            i,
                            a = c(this),
                            p = u(a, 0),
                            d = 0;
                        for (t = -1, o = arguments.length; t < o; t++)
                            if (h((i = -1 === t ? a : arguments[t]))) {
                                if (d + (r = s(i.length)) > 9007199254740991)
                                    throw TypeError(
                                        'Maximum allowed index exceeded'
                                    );
                                for (n = 0; n < r; n++, d++)
                                    n in i && l(p, d, i[n]);
                            } else {
                                if (d >= 9007199254740991)
                                    throw TypeError(
                                        'Maximum allowed index exceeded'
                                    );
                                l(p, d++, i);
                            }
                        return (p.length = d), p;
                    },
                }
            );
        },
        function (e, t, n) {
            'use strict';
            var o = n(0),
                r = n(39).filter,
                i = n(60),
                a = n(29),
                c = i('filter'),
                s = a('filter');
            o(
                { target: 'Array', proto: !0, forced: !c || !s },
                {
                    filter: function (e) {
                        return r(
                            this,
                            e,
                            arguments.length > 1 ? arguments[1] : void 0
                        );
                    },
                }
            );
        },
        function (e, t) {
            e.exports = function (e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t,
                };
            };
        },
        function (e, t) {
            e.exports = {};
        },
        function (e, t, n) {
            var o,
                r = n(9),
                i = n(160),
                a = n(70),
                c = n(43),
                s = n(104),
                l = n(65),
                u = n(53),
                p = u('IE_PROTO'),
                d = function () {},
                f = function (e) {
                    return '<script>' + e + '</script>';
                },
                m = function () {
                    try {
                        o = document.domain && new ActiveXObject('htmlfile');
                    } catch (e) {}
                    var e, t;
                    m = o
                        ? (function (e) {
                              e.write(f('')), e.close();
                              var t = e.parentWindow.Object;
                              return (e = null), t;
                          })(o)
                        : (((t = l('iframe')).style.display = 'none'),
                          s.appendChild(t),
                          (t.src = String('javascript:')),
                          (e = t.contentWindow.document).open(),
                          e.write(f('document.F=Object')),
                          e.close(),
                          e.F);
                    for (var n = a.length; n--; ) delete m.prototype[a[n]];
                    return m();
                };
            (c[p] = !0),
                (e.exports =
                    Object.create ||
                    function (e, t) {
                        var n;
                        return (
                            null !== e
                                ? ((d.prototype = r(e)),
                                  (n = new d()),
                                  (d.prototype = null),
                                  (n[p] = e))
                                : (n = m()),
                            void 0 === t ? n : i(n, t)
                        );
                    });
        },
        function (e, t, n) {
            var o = n(101),
                r = n(70);
            e.exports =
                Object.keys ||
                function (e) {
                    return o(e, r);
                };
        },
        function (e, t, n) {
            var o = n(16).f,
                r = n(15),
                i = n(2)('toStringTag');
            e.exports = function (e, t, n) {
                e &&
                    !r((e = n ? e : e.prototype), i) &&
                    o(e, i, { configurable: !0, value: t });
            };
        },
        function (e, t, n) {
            var o = n(35);
            e.exports = function (e, t, n) {
                if ((o(e), void 0 === t)) return e;
                switch (n) {
                    case 0:
                        return function () {
                            return e.call(t);
                        };
                    case 1:
                        return function (n) {
                            return e.call(t, n);
                        };
                    case 2:
                        return function (n, o) {
                            return e.call(t, n, o);
                        };
                    case 3:
                        return function (n, o, r) {
                            return e.call(t, n, o, r);
                        };
                }
                return function () {
                    return e.apply(t, arguments);
                };
            };
        },
        function (e, t) {
            e.exports = {};
        },
        function (e, t, n) {
            var o = n(0),
                r = n(171);
            o(
                { target: 'Object', stat: !0, forced: Object.assign !== r },
                { assign: r }
            );
        },
        function (e, t, n) {
            'use strict';
            var o = {}.propertyIsEnumerable,
                r = Object.getOwnPropertyDescriptor,
                i = r && !o.call({ 1: 2 }, 1);
            t.f = i
                ? function (e) {
                      var t = r(this, e);
                      return !!t && t.enumerable;
                  }
                : o;
        },
        function (e, t, n) {
            var o = n(1),
                r = n(28),
                i = ''.split;
            e.exports = o(function () {
                return !Object('z').propertyIsEnumerable(0);
            })
                ? function (e) {
                      return 'String' == r(e) ? i.call(e, '') : Object(e);
                  }
                : Object;
        },
        function (e, t, n) {
            var o = n(4);
            e.exports = function (e, t) {
                if (!o(e)) return e;
                var n, r;
                if (
                    t &&
                    'function' == typeof (n = e.toString) &&
                    !o((r = n.call(e)))
                )
                    return r;
                if ('function' == typeof (n = e.valueOf) && !o((r = n.call(e))))
                    return r;
                if (
                    !t &&
                    'function' == typeof (n = e.toString) &&
                    !o((r = n.call(e)))
                )
                    return r;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function (e, t, n) {
            var o = n(68),
                r = n(54),
                i = o('keys');
            e.exports = function (e) {
                return i[e] || (i[e] = r(e));
            };
        },
        function (e, t) {
            var n = 0,
                o = Math.random();
            e.exports = function (e) {
                return (
                    'Symbol(' +
                    String(void 0 === e ? '' : e) +
                    ')_' +
                    (++n + o).toString(36)
                );
            };
        },
        function (e, t, n) {
            var o = n(101),
                r = n(70).concat('length', 'prototype');
            t.f =
                Object.getOwnPropertyNames ||
                function (e) {
                    return o(e, r);
                };
        },
        function (e, t) {
            var n = Math.ceil,
                o = Math.floor;
            e.exports = function (e) {
                return isNaN((e = +e)) ? 0 : (e > 0 ? o : n)(e);
            };
        },
        function (e, t, n) {
            var o = n(1),
                r = /#|\.prototype\./,
                i = function (e, t) {
                    var n = c[a(e)];
                    return (
                        n == l ||
                        (n != s && ('function' == typeof t ? o(t) : !!t))
                    );
                },
                a = (i.normalize = function (e) {
                    return String(e).replace(r, '.').toLowerCase();
                }),
                c = (i.data = {}),
                s = (i.NATIVE = 'N'),
                l = (i.POLYFILL = 'P');
            e.exports = i;
        },
        function (e, t, n) {
            var o = n(28);
            e.exports =
                Array.isArray ||
                function (e) {
                    return 'Array' == o(e);
                };
        },
        function (e, t, n) {
            'use strict';
            var o = n(52),
                r = n(16),
                i = n(42);
            e.exports = function (e, t, n) {
                var a = o(t);
                a in e ? r.f(e, a, i(0, n)) : (e[a] = n);
            };
        },
        function (e, t, n) {
            var o = n(1),
                r = n(2),
                i = n(73),
                a = r('species');
            e.exports = function (e) {
                return (
                    i >= 51 ||
                    !o(function () {
                        var t = [];
                        return (
                            ((t.constructor = {})[a] = function () {
                                return { foo: 1 };
                            }),
                            1 !== t[e](Boolean).foo
                        );
                    })
                );
            };
        },
        function (e, t, n) {
            var o = n(2),
                r = n(44),
                i = n(16),
                a = o('unscopables'),
                c = Array.prototype;
            null == c[a] && i.f(c, a, { configurable: !0, value: r(null) }),
                (e.exports = function (e) {
                    c[a][e] = !0;
                });
        },
        function (e, t, n) {
            'use strict';
            var o = n(1);
            e.exports = function (e, t) {
                var n = [][e];
                return (
                    !!n &&
                    o(function () {
                        n.call(
                            null,
                            t ||
                                function () {
                                    throw 1;
                                },
                            1
                        );
                    })
                );
            };
        },
        function (e, t, n) {
            'use strict';
            var o,
                r,
                i = n(85),
                a = n(122),
                c = RegExp.prototype.exec,
                s = String.prototype.replace,
                l = c,
                u =
                    ((o = /a/),
                    (r = /b*/g),
                    c.call(o, 'a'),
                    c.call(r, 'a'),
                    0 !== o.lastIndex || 0 !== r.lastIndex),
                p = a.UNSUPPORTED_Y || a.BROKEN_CARET,
                d = void 0 !== /()??/.exec('')[1];
            (u || d || p) &&
                (l = function (e) {
                    var t,
                        n,
                        o,
                        r,
                        a = this,
                        l = p && a.sticky,
                        f = i.call(a),
                        m = a.source,
                        v = 0,
                        y = e;
                    return (
                        l &&
                            (-1 === (f = f.replace('y', '')).indexOf('g') &&
                                (f += 'g'),
                            (y = String(e).slice(a.lastIndex)),
                            a.lastIndex > 0 &&
                                (!a.multiline ||
                                    (a.multiline &&
                                        '\n' !== e[a.lastIndex - 1])) &&
                                ((m = '(?: ' + m + ')'), (y = ' ' + y), v++),
                            (n = new RegExp('^(?:' + m + ')', f))),
                        d && (n = new RegExp('^' + m + '$(?!\\s)', f)),
                        u && (t = a.lastIndex),
                        (o = c.call(l ? n : a, y)),
                        l
                            ? o
                                ? ((o.input = o.input.slice(v)),
                                  (o[0] = o[0].slice(v)),
                                  (o.index = a.lastIndex),
                                  (a.lastIndex += o[0].length))
                                : (a.lastIndex = 0)
                            : u &&
                              o &&
                              (a.lastIndex = a.global
                                  ? o.index + o[0].length
                                  : t),
                        d &&
                            o &&
                            o.length > 1 &&
                            s.call(o[0], n, function () {
                                for (r = 1; r < arguments.length - 2; r++)
                                    void 0 === arguments[r] && (o[r] = void 0);
                            }),
                        o
                    );
                }),
                (e.exports = l);
        },
        function (e, t, n) {
            var o = n(8),
                r = n(3),
                i = n(57),
                a = n(119),
                c = n(16).f,
                s = n(55).f,
                l = n(88),
                u = n(85),
                p = n(122),
                d = n(22),
                f = n(1),
                m = n(32).set,
                v = n(82),
                y = n(2)('match'),
                h = r.RegExp,
                b = h.prototype,
                g = /a/g,
                k = /a/g,
                _ = new h(g) !== g,
                x = p.UNSUPPORTED_Y;
            if (
                o &&
                i(
                    'RegExp',
                    !_ ||
                        x ||
                        f(function () {
                            return (
                                (k[y] = !1),
                                h(g) != g || h(k) == k || '/a/i' != h(g, 'i')
                            );
                        })
                )
            ) {
                for (
                    var w = function (e, t) {
                            var n,
                                o = this instanceof w,
                                r = l(e),
                                i = void 0 === t;
                            if (!o && r && e.constructor === w && i) return e;
                            _
                                ? r && !i && (e = e.source)
                                : e instanceof w &&
                                  (i && (t = u.call(e)), (e = e.source)),
                                x &&
                                    (n = !!t && t.indexOf('y') > -1) &&
                                    (t = t.replace(/y/g, ''));
                            var c = a(
                                _ ? new h(e, t) : h(e, t),
                                o ? this : b,
                                w
                            );
                            return x && n && m(c, { sticky: n }), c;
                        },
                        S = function (e) {
                            (e in w) ||
                                c(w, e, {
                                    configurable: !0,
                                    get: function () {
                                        return h[e];
                                    },
                                    set: function (t) {
                                        h[e] = t;
                                    },
                                });
                        },
                        j = s(h),
                        O = 0;
                    j.length > O;

                )
                    S(j[O++]);
                (b.constructor = w), (w.prototype = b), d(r, 'RegExp', w);
            }
            v('RegExp');
        },
        function (e, t, n) {
            var o = n(3),
                r = n(4),
                i = o.document,
                a = r(i) && r(i.createElement);
            e.exports = function (e) {
                return a ? i.createElement(e) : {};
            };
        },
        function (e, t, n) {
            var o = n(3),
                r = n(21);
            e.exports = function (e, t) {
                try {
                    r(o, e, t);
                } catch (n) {
                    o[e] = t;
                }
                return t;
            };
        },
        function (e, t, n) {
            var o = n(97),
                r = Function.toString;
            'function' != typeof o.inspectSource &&
                (o.inspectSource = function (e) {
                    return r.call(e);
                }),
                (e.exports = o.inspectSource);
        },
        function (e, t, n) {
            var o = n(33),
                r = n(97);
            (e.exports = function (e, t) {
                return r[e] || (r[e] = void 0 !== t ? t : {});
            })('versions', []).push({
                version: '3.6.5',
                mode: o ? 'pure' : 'global',
                copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
            });
        },
        function (e, t, n) {
            var o = n(18),
                r = n(19),
                i = n(102),
                a = function (e) {
                    return function (t, n, a) {
                        var c,
                            s = o(t),
                            l = r(s.length),
                            u = i(a, l);
                        if (e && n != n) {
                            for (; l > u; ) if ((c = s[u++]) != c) return !0;
                        } else
                            for (; l > u; u++)
                                if ((e || u in s) && s[u] === n)
                                    return e || u || 0;
                        return !e && -1;
                    };
                };
            e.exports = { includes: a(!0), indexOf: a(!1) };
        },
        function (e, t) {
            e.exports = [
                'constructor',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'toLocaleString',
                'toString',
                'valueOf',
            ];
        },
        function (e, t) {
            t.f = Object.getOwnPropertySymbols;
        },
        function (e, t, n) {
            var o = n(1);
            e.exports =
                !!Object.getOwnPropertySymbols &&
                !o(function () {
                    return !String(Symbol());
                });
        },
        function (e, t, n) {
            var o,
                r,
                i = n(3),
                a = n(108),
                c = i.process,
                s = c && c.versions,
                l = s && s.v8;
            l
                ? (r = (o = l.split('.'))[0] + o[1])
                : a &&
                  (!(o = a.match(/Edge\/(\d+)/)) || o[1] >= 74) &&
                  (o = a.match(/Chrome\/(\d+)/)) &&
                  (r = o[1]),
                (e.exports = r && +r);
        },
        function (e, t, n) {
            'use strict';
            var o = n(0),
                r = n(109);
            o(
                { target: 'Array', proto: !0, forced: [].forEach != r },
                { forEach: r }
            );
        },
        function (e, t, n) {
            var o = {};
            (o[n(2)('toStringTag')] = 'z'),
                (e.exports = '[object z]' === String(o));
        },
        function (e, t, n) {
            var o = n(2)('iterator'),
                r = !1;
            try {
                var i = 0,
                    a = {
                        next: function () {
                            return { done: !!i++ };
                        },
                        return: function () {
                            r = !0;
                        },
                    };
                (a[o] = function () {
                    return this;
                }),
                    Array.from(a, function () {
                        throw 2;
                    });
            } catch (e) {}
            e.exports = function (e, t) {
                if (!t && !r) return !1;
                var n = !1;
                try {
                    var i = {};
                    (i[o] = function () {
                        return {
                            next: function () {
                                return { done: (n = !0) };
                            },
                        };
                    }),
                        e(i);
                } catch (e) {}
                return n;
            };
        },
        function (e, t, n) {
            'use strict';
            var o = n(0),
                r = n(164),
                i = n(78),
                a = n(116),
                c = n(46),
                s = n(21),
                l = n(22),
                u = n(2),
                p = n(33),
                d = n(48),
                f = n(114),
                m = f.IteratorPrototype,
                v = f.BUGGY_SAFARI_ITERATORS,
                y = u('iterator'),
                h = function () {
                    return this;
                };
            e.exports = function (e, t, n, u, f, b, g) {
                r(n, t, u);
                var k,
                    _,
                    x,
                    w = function (e) {
                        if (e === f && z) return z;
                        if (!v && e in O) return O[e];
                        switch (e) {
                            case 'keys':
                            case 'values':
                            case 'entries':
                                return function () {
                                    return new n(this, e);
                                };
                        }
                        return function () {
                            return new n(this);
                        };
                    },
                    S = t + ' Iterator',
                    j = !1,
                    O = e.prototype,
                    A = O[y] || O['@@iterator'] || (f && O[f]),
                    z = (!v && A) || w(f),
                    P = ('Array' == t && O.entries) || A;
                if (
                    (P &&
                        ((k = i(P.call(new e()))),
                        m !== Object.prototype &&
                            k.next &&
                            (p ||
                                i(k) === m ||
                                (a
                                    ? a(k, m)
                                    : 'function' != typeof k[y] && s(k, y, h)),
                            c(k, S, !0, !0),
                            p && (d[S] = h))),
                    'values' == f &&
                        A &&
                        'values' !== A.name &&
                        ((j = !0),
                        (z = function () {
                            return A.call(this);
                        })),
                    (p && !g) || O[y] === z || s(O, y, z),
                    (d[t] = z),
                    f)
                )
                    if (
                        ((_ = {
                            values: w('values'),
                            keys: b ? z : w('keys'),
                            entries: w('entries'),
                        }),
                        g)
                    )
                        for (x in _) (v || j || !(x in O)) && l(O, x, _[x]);
                    else o({ target: t, proto: !0, forced: v || j }, _);
                return _;
            };
        },
        function (e, t, n) {
            var o = n(15),
                r = n(23),
                i = n(53),
                a = n(115),
                c = i('IE_PROTO'),
                s = Object.prototype;
            e.exports = a
                ? Object.getPrototypeOf
                : function (e) {
                      return (
                          (e = r(e)),
                          o(e, c)
                              ? e[c]
                              : 'function' == typeof e.constructor &&
                                e instanceof e.constructor
                              ? e.constructor.prototype
                              : e instanceof Object
                              ? s
                              : null
                      );
                  };
        },
        function (e, t, n) {
            'use strict';
            var o = n(117),
                r = n(120);
            e.exports = o(
                'Map',
                function (e) {
                    return function () {
                        return e(
                            this,
                            arguments.length ? arguments[0] : void 0
                        );
                    };
                },
                r
            );
        },
        function (e, t, n) {
            var o = n(9),
                r = n(111),
                i = n(19),
                a = n(47),
                c = n(112),
                s = n(110),
                l = function (e, t) {
                    (this.stopped = e), (this.result = t);
                };
            (e.exports = function (e, t, n, u, p) {
                var d,
                    f,
                    m,
                    v,
                    y,
                    h,
                    b,
                    g = a(t, n, u ? 2 : 1);
                if (p) d = e;
                else {
                    if ('function' != typeof (f = c(e)))
                        throw TypeError('Target is not iterable');
                    if (r(f)) {
                        for (m = 0, v = i(e.length); v > m; m++)
                            if (
                                (y = u ? g(o((b = e[m]))[0], b[1]) : g(e[m])) &&
                                y instanceof l
                            )
                                return y;
                        return new l(!1);
                    }
                    d = f.call(e);
                }
                for (h = d.next; !(b = h.call(d)).done; )
                    if (
                        'object' == typeof (y = s(d, g, b.value, u)) &&
                        y &&
                        y instanceof l
                    )
                        return y;
                return new l(!1);
            }).stop = function (e) {
                return new l(!0, e);
            };
        },
        function (e, t) {
            e.exports = function (e, t, n) {
                if (!(e instanceof t))
                    throw TypeError(
                        'Incorrect ' + (n ? n + ' ' : '') + 'invocation'
                    );
                return e;
            };
        },
        function (e, t, n) {
            'use strict';
            var o = n(34),
                r = n(16),
                i = n(2),
                a = n(8),
                c = i('species');
            e.exports = function (e) {
                var t = o(e),
                    n = r.f;
                a &&
                    t &&
                    !t[c] &&
                    n(t, c, {
                        configurable: !0,
                        get: function () {
                            return this;
                        },
                    });
            };
        },
        function (e, t, n) {
            var o = n(0),
                r = n(1),
                i = n(18),
                a = n(27).f,
                c = n(8),
                s = r(function () {
                    a(1);
                });
            o(
                { target: 'Object', stat: !0, forced: !c || s, sham: !c },
                {
                    getOwnPropertyDescriptor: function (e, t) {
                        return a(i(e), t);
                    },
                }
            );
        },
        function (e, t, n) {
            var o = n(0),
                r = n(8),
                i = n(99),
                a = n(18),
                c = n(27),
                s = n(59);
            o(
                { target: 'Object', stat: !0, sham: !r },
                {
                    getOwnPropertyDescriptors: function (e) {
                        for (
                            var t,
                                n,
                                o = a(e),
                                r = c.f,
                                l = i(o),
                                u = {},
                                p = 0;
                            l.length > p;

                        )
                            void 0 !== (n = r(o, (t = l[p++]))) && s(u, t, n);
                        return u;
                    },
                }
            );
        },
        function (e, t, n) {
            'use strict';
            var o = n(9);
            e.exports = function () {
                var e = o(this),
                    t = '';
                return (
                    e.global && (t += 'g'),
                    e.ignoreCase && (t += 'i'),
                    e.multiline && (t += 'm'),
                    e.dotAll && (t += 's'),
                    e.unicode && (t += 'u'),
                    e.sticky && (t += 'y'),
                    t
                );
            };
        },
        function (e, t, n) {
            'use strict';
            var o = n(87),
                r = n(88),
                i = n(9),
                a = n(26),
                c = n(124),
                s = n(89),
                l = n(19),
                u = n(90),
                p = n(63),
                d = n(1),
                f = [].push,
                m = Math.min,
                v = !d(function () {
                    return !RegExp(4294967295, 'y');
                });
            o(
                'split',
                2,
                function (e, t, n) {
                    var o;
                    return (
                        (o =
                            'c' == 'abbc'.split(/(b)*/)[1] ||
                            4 != 'test'.split(/(?:)/, -1).length ||
                            2 != 'ab'.split(/(?:ab)*/).length ||
                            4 != '.'.split(/(.?)(.?)/).length ||
                            '.'.split(/()()/).length > 1 ||
                            ''.split(/.?/).length
                                ? function (e, n) {
                                      var o = String(a(this)),
                                          i =
                                              void 0 === n
                                                  ? 4294967295
                                                  : n >>> 0;
                                      if (0 === i) return [];
                                      if (void 0 === e) return [o];
                                      if (!r(e)) return t.call(o, e, i);
                                      for (
                                          var c,
                                              s,
                                              l,
                                              u = [],
                                              d =
                                                  (e.ignoreCase ? 'i' : '') +
                                                  (e.multiline ? 'm' : '') +
                                                  (e.unicode ? 'u' : '') +
                                                  (e.sticky ? 'y' : ''),
                                              m = 0,
                                              v = new RegExp(e.source, d + 'g');
                                          (c = p.call(v, o)) &&
                                          !(
                                              (s = v.lastIndex) > m &&
                                              (u.push(o.slice(m, c.index)),
                                              c.length > 1 &&
                                                  c.index < o.length &&
                                                  f.apply(u, c.slice(1)),
                                              (l = c[0].length),
                                              (m = s),
                                              u.length >= i)
                                          );

                                      )
                                          v.lastIndex === c.index &&
                                              v.lastIndex++;
                                      return (
                                          m === o.length
                                              ? (!l && v.test('')) || u.push('')
                                              : u.push(o.slice(m)),
                                          u.length > i ? u.slice(0, i) : u
                                      );
                                  }
                                : '0'.split(void 0, 0).length
                                ? function (e, n) {
                                      return void 0 === e && 0 === n
                                          ? []
                                          : t.call(this, e, n);
                                  }
                                : t),
                        [
                            function (t, n) {
                                var r = a(this),
                                    i = null == t ? void 0 : t[e];
                                return void 0 !== i
                                    ? i.call(t, r, n)
                                    : o.call(String(r), t, n);
                            },
                            function (e, r) {
                                var a = n(o, e, this, r, o !== t);
                                if (a.done) return a.value;
                                var p = i(e),
                                    d = String(this),
                                    f = c(p, RegExp),
                                    y = p.unicode,
                                    h =
                                        (p.ignoreCase ? 'i' : '') +
                                        (p.multiline ? 'm' : '') +
                                        (p.unicode ? 'u' : '') +
                                        (v ? 'y' : 'g'),
                                    b = new f(
                                        v ? p : '^(?:' + p.source + ')',
                                        h
                                    ),
                                    g = void 0 === r ? 4294967295 : r >>> 0;
                                if (0 === g) return [];
                                if (0 === d.length)
                                    return null === u(b, d) ? [d] : [];
                                for (var k = 0, _ = 0, x = []; _ < d.length; ) {
                                    b.lastIndex = v ? _ : 0;
                                    var w,
                                        S = u(b, v ? d : d.slice(_));
                                    if (
                                        null === S ||
                                        (w = m(
                                            l(b.lastIndex + (v ? 0 : _)),
                                            d.length
                                        )) === k
                                    )
                                        _ = s(d, _, y);
                                    else {
                                        if (
                                            (x.push(d.slice(k, _)),
                                            x.length === g)
                                        )
                                            return x;
                                        for (var j = 1; j <= S.length - 1; j++)
                                            if ((x.push(S[j]), x.length === g))
                                                return x;
                                        _ = k = w;
                                    }
                                }
                                return x.push(d.slice(k)), x;
                            },
                        ]
                    );
                },
                !v
            );
        },
        function (e, t, n) {
            'use strict';
            n(37);
            var o = n(22),
                r = n(1),
                i = n(2),
                a = n(63),
                c = n(21),
                s = i('species'),
                l = !r(function () {
                    var e = /./;
                    return (
                        (e.exec = function () {
                            var e = [];
                            return (e.groups = { a: '7' }), e;
                        }),
                        '7' !== ''.replace(e, '$<a>')
                    );
                }),
                u = '$0' === 'a'.replace(/./, '$0'),
                p = i('replace'),
                d = !!/./[p] && '' === /./[p]('a', '$0'),
                f = !r(function () {
                    var e = /(?:)/,
                        t = e.exec;
                    e.exec = function () {
                        return t.apply(this, arguments);
                    };
                    var n = 'ab'.split(e);
                    return 2 !== n.length || 'a' !== n[0] || 'b' !== n[1];
                });
            e.exports = function (e, t, n, p) {
                var m = i(e),
                    v = !r(function () {
                        var t = {};
                        return (
                            (t[m] = function () {
                                return 7;
                            }),
                            7 != ''[e](t)
                        );
                    }),
                    y =
                        v &&
                        !r(function () {
                            var t = !1,
                                n = /a/;
                            return (
                                'split' === e &&
                                    (((n = {}).constructor = {}),
                                    (n.constructor[s] = function () {
                                        return n;
                                    }),
                                    (n.flags = ''),
                                    (n[m] = /./[m])),
                                (n.exec = function () {
                                    return (t = !0), null;
                                }),
                                n[m](''),
                                !t
                            );
                        });
                if (
                    !v ||
                    !y ||
                    ('replace' === e && (!l || !u || d)) ||
                    ('split' === e && !f)
                ) {
                    var h = /./[m],
                        b = n(
                            m,
                            ''[e],
                            function (e, t, n, o, r) {
                                return t.exec === a
                                    ? v && !r
                                        ? { done: !0, value: h.call(t, n, o) }
                                        : { done: !0, value: e.call(n, t, o) }
                                    : { done: !1 };
                            },
                            {
                                REPLACE_KEEPS_$0: u,
                                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d,
                            }
                        ),
                        g = b[0],
                        k = b[1];
                    o(String.prototype, e, g),
                        o(
                            RegExp.prototype,
                            m,
                            2 == t
                                ? function (e, t) {
                                      return k.call(e, this, t);
                                  }
                                : function (e) {
                                      return k.call(e, this);
                                  }
                        );
                }
                p && c(RegExp.prototype[m], 'sham', !0);
            };
        },
        function (e, t, n) {
            var o = n(4),
                r = n(28),
                i = n(2)('match');
            e.exports = function (e) {
                var t;
                return o(e) && (void 0 !== (t = e[i]) ? !!t : 'RegExp' == r(e));
            };
        },
        function (e, t, n) {
            'use strict';
            var o = n(123).charAt;
            e.exports = function (e, t, n) {
                return t + (n ? o(e, t).length : 1);
            };
        },
        function (e, t, n) {
            var o = n(28),
                r = n(63);
            e.exports = function (e, t) {
                var n = e.exec;
                if ('function' == typeof n) {
                    var i = n.call(e, t);
                    if ('object' != typeof i)
                        throw TypeError(
                            'RegExp exec method returned something other than an Object or null'
                        );
                    return i;
                }
                if ('RegExp' !== o(e))
                    throw TypeError(
                        'RegExp#exec called on incompatible receiver'
                    );
                return r.call(e, t);
            };
        },
        function (e, t, n) {
            var o = n(3),
                r = n(125),
                i = n(109),
                a = n(21);
            for (var c in r) {
                var s = o[c],
                    l = s && s.prototype;
                if (l && l.forEach !== i)
                    try {
                        a(l, 'forEach', i);
                    } catch (e) {
                        l.forEach = i;
                    }
            }
        },
        function (e, t, n) {
            var o = n(88);
            e.exports = function (e) {
                if (o(e))
                    throw TypeError(
                        "The method doesn't accept regular expressions"
                    );
                return e;
            };
        },
        function (e, t, n) {
            var o = n(2)('match');
            e.exports = function (e) {
                var t = /./;
                try {
                    '/./'[e](t);
                } catch (n) {
                    try {
                        return (t[o] = !1), '/./'[e](t);
                    } catch (e) {}
                }
                return !1;
            };
        },
        function (e, t, n) {
            var o = n(0),
                r = n(175).entries;
            o(
                { target: 'Object', stat: !0 },
                {
                    entries: function (e) {
                        return r(e);
                    },
                }
            );
        },
        function (e, t, n) {
            'use strict';
            var o,
                r = n(0),
                i = n(27).f,
                a = n(19),
                c = n(92),
                s = n(26),
                l = n(93),
                u = n(33),
                p = ''.startsWith,
                d = Math.min,
                f = l('startsWith');
            r(
                {
                    target: 'String',
                    proto: !0,
                    forced:
                        !!(
                            u ||
                            f ||
                            ((o = i(String.prototype, 'startsWith')),
                            !o || o.writable)
                        ) && !f,
                },
                {
                    startsWith: function (e) {
                        var t = String(s(this));
                        c(e);
                        var n = a(
                                d(
                                    arguments.length > 1
                                        ? arguments[1]
                                        : void 0,
                                    t.length
                                )
                            ),
                            o = String(e);
                        return p
                            ? p.call(t, o, n)
                            : t.slice(n, n + o.length) === o;
                    },
                }
            );
        },
        function (e, t, n) {
            var o = n(8),
                r = n(1),
                i = n(65);
            e.exports =
                !o &&
                !r(function () {
                    return (
                        7 !=
                        Object.defineProperty(i('div'), 'a', {
                            get: function () {
                                return 7;
                            },
                        }).a
                    );
                });
        },
        function (e, t, n) {
            var o = n(3),
                r = n(66),
                i = o['__core-js_shared__'] || r('__core-js_shared__', {});
            e.exports = i;
        },
        function (e, t, n) {
            var o = n(15),
                r = n(99),
                i = n(27),
                a = n(16);
            e.exports = function (e, t) {
                for (var n = r(t), c = a.f, s = i.f, l = 0; l < n.length; l++) {
                    var u = n[l];
                    o(e, u) || c(e, u, s(t, u));
                }
            };
        },
        function (e, t, n) {
            var o = n(34),
                r = n(55),
                i = n(71),
                a = n(9);
            e.exports =
                o('Reflect', 'ownKeys') ||
                function (e) {
                    var t = r.f(a(e)),
                        n = i.f;
                    return n ? t.concat(n(e)) : t;
                };
        },
        function (e, t, n) {
            var o = n(3);
            e.exports = o;
        },
        function (e, t, n) {
            var o = n(15),
                r = n(18),
                i = n(69).indexOf,
                a = n(43);
            e.exports = function (e, t) {
                var n,
                    c = r(e),
                    s = 0,
                    l = [];
                for (n in c) !o(a, n) && o(c, n) && l.push(n);
                for (; t.length > s; )
                    o(c, (n = t[s++])) && (~i(l, n) || l.push(n));
                return l;
            };
        },
        function (e, t, n) {
            var o = n(56),
                r = Math.max,
                i = Math.min;
            e.exports = function (e, t) {
                var n = o(e);
                return n < 0 ? r(n + t, 0) : i(n, t);
            };
        },
        function (e, t, n) {
            var o = n(72);
            e.exports = o && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
        },
        function (e, t, n) {
            var o = n(34);
            e.exports = o('document', 'documentElement');
        },
        function (e, t, n) {
            var o = n(2);
            t.f = o;
        },
        function (e, t, n) {
            var o = n(100),
                r = n(15),
                i = n(105),
                a = n(16).f;
            e.exports = function (e) {
                var t = o.Symbol || (o.Symbol = {});
                r(t, e) || a(t, e, { value: i.f(e) });
            };
        },
        function (e, t, n) {
            var o = n(4),
                r = n(58),
                i = n(2)('species');
            e.exports = function (e, t) {
                var n;
                return (
                    r(e) &&
                        ('function' != typeof (n = e.constructor) ||
                        (n !== Array && !r(n.prototype))
                            ? o(n) && null === (n = n[i]) && (n = void 0)
                            : (n = void 0)),
                    new (void 0 === n ? Array : n)(0 === t ? 0 : t)
                );
            };
        },
        function (e, t, n) {
            var o = n(34);
            e.exports = o('navigator', 'userAgent') || '';
        },
        function (e, t, n) {
            'use strict';
            var o = n(39).forEach,
                r = n(62),
                i = n(29),
                a = r('forEach'),
                c = i('forEach');
            e.exports =
                a && c
                    ? [].forEach
                    : function (e) {
                          return o(
                              this,
                              e,
                              arguments.length > 1 ? arguments[1] : void 0
                          );
                      };
        },
        function (e, t, n) {
            var o = n(9);
            e.exports = function (e, t, n, r) {
                try {
                    return r ? t(o(n)[0], n[1]) : t(n);
                } catch (t) {
                    var i = e.return;
                    throw (void 0 !== i && o(i.call(e)), t);
                }
            };
        },
        function (e, t, n) {
            var o = n(2),
                r = n(48),
                i = o('iterator'),
                a = Array.prototype;
            e.exports = function (e) {
                return void 0 !== e && (r.Array === e || a[i] === e);
            };
        },
        function (e, t, n) {
            var o = n(113),
                r = n(48),
                i = n(2)('iterator');
            e.exports = function (e) {
                if (null != e) return e[i] || e['@@iterator'] || r[o(e)];
            };
        },
        function (e, t, n) {
            var o = n(75),
                r = n(28),
                i = n(2)('toStringTag'),
                a =
                    'Arguments' ==
                    r(
                        (function () {
                            return arguments;
                        })()
                    );
            e.exports = o
                ? r
                : function (e) {
                      var t, n, o;
                      return void 0 === e
                          ? 'Undefined'
                          : null === e
                          ? 'Null'
                          : 'string' ==
                            typeof (n = (function (e, t) {
                                try {
                                    return e[t];
                                } catch (e) {}
                            })((t = Object(e)), i))
                          ? n
                          : a
                          ? r(t)
                          : 'Object' == (o = r(t)) &&
                            'function' == typeof t.callee
                          ? 'Arguments'
                          : o;
                  };
        },
        function (e, t, n) {
            'use strict';
            var o,
                r,
                i,
                a = n(78),
                c = n(21),
                s = n(15),
                l = n(2),
                u = n(33),
                p = l('iterator'),
                d = !1;
            [].keys &&
                ('next' in (i = [].keys())
                    ? (r = a(a(i))) !== Object.prototype && (o = r)
                    : (d = !0)),
                null == o && (o = {}),
                u ||
                    s(o, p) ||
                    c(o, p, function () {
                        return this;
                    }),
                (e.exports = {
                    IteratorPrototype: o,
                    BUGGY_SAFARI_ITERATORS: d,
                });
        },
        function (e, t, n) {
            var o = n(1);
            e.exports = !o(function () {
                function e() {}
                return (
                    (e.prototype.constructor = null),
                    Object.getPrototypeOf(new e()) !== e.prototype
                );
            });
        },
        function (e, t, n) {
            var o = n(9),
                r = n(165);
            e.exports =
                Object.setPrototypeOf ||
                ('__proto__' in {}
                    ? (function () {
                          var e,
                              t = !1,
                              n = {};
                          try {
                              (e = Object.getOwnPropertyDescriptor(
                                  Object.prototype,
                                  '__proto__'
                              ).set).call(n, []),
                                  (t = n instanceof Array);
                          } catch (e) {}
                          return function (n, i) {
                              return (
                                  o(n),
                                  r(i),
                                  t ? e.call(n, i) : (n.__proto__ = i),
                                  n
                              );
                          };
                      })()
                    : void 0);
        },
        function (e, t, n) {
            'use strict';
            var o = n(0),
                r = n(3),
                i = n(57),
                a = n(22),
                c = n(118),
                s = n(80),
                l = n(81),
                u = n(4),
                p = n(1),
                d = n(76),
                f = n(46),
                m = n(119);
            e.exports = function (e, t, n) {
                var v = -1 !== e.indexOf('Map'),
                    y = -1 !== e.indexOf('Weak'),
                    h = v ? 'set' : 'add',
                    b = r[e],
                    g = b && b.prototype,
                    k = b,
                    _ = {},
                    x = function (e) {
                        var t = g[e];
                        a(
                            g,
                            e,
                            'add' == e
                                ? function (e) {
                                      return (
                                          t.call(this, 0 === e ? 0 : e), this
                                      );
                                  }
                                : 'delete' == e
                                ? function (e) {
                                      return (
                                          !(y && !u(e)) &&
                                          t.call(this, 0 === e ? 0 : e)
                                      );
                                  }
                                : 'get' == e
                                ? function (e) {
                                      return y && !u(e)
                                          ? void 0
                                          : t.call(this, 0 === e ? 0 : e);
                                  }
                                : 'has' == e
                                ? function (e) {
                                      return (
                                          !(y && !u(e)) &&
                                          t.call(this, 0 === e ? 0 : e)
                                      );
                                  }
                                : function (e, n) {
                                      return (
                                          t.call(this, 0 === e ? 0 : e, n), this
                                      );
                                  }
                        );
                    };
                if (
                    i(
                        e,
                        'function' != typeof b ||
                            !(
                                y ||
                                (g.forEach &&
                                    !p(function () {
                                        new b().entries().next();
                                    }))
                            )
                    )
                )
                    (k = n.getConstructor(t, e, v, h)), (c.REQUIRED = !0);
                else if (i(e, !0)) {
                    var w = new k(),
                        S = w[h](y ? {} : -0, 1) != w,
                        j = p(function () {
                            w.has(1);
                        }),
                        O = d(function (e) {
                            new b(e);
                        }),
                        A =
                            !y &&
                            p(function () {
                                for (var e = new b(), t = 5; t--; ) e[h](t, t);
                                return !e.has(-0);
                            });
                    O ||
                        (((k = t(function (t, n) {
                            l(t, k, e);
                            var o = m(new b(), t, k);
                            return null != n && s(n, o[h], o, v), o;
                        })).prototype = g),
                        (g.constructor = k)),
                        (j || A) && (x('delete'), x('has'), v && x('get')),
                        (A || S) && x(h),
                        y && g.clear && delete g.clear;
                }
                return (
                    (_[e] = k),
                    o({ global: !0, forced: k != b }, _),
                    f(k, e),
                    y || n.setStrong(k, e, v),
                    k
                );
            };
        },
        function (e, t, n) {
            var o = n(43),
                r = n(4),
                i = n(15),
                a = n(16).f,
                c = n(54),
                s = n(166),
                l = c('meta'),
                u = 0,
                p =
                    Object.isExtensible ||
                    function () {
                        return !0;
                    },
                d = function (e) {
                    a(e, l, { value: { objectID: 'O' + ++u, weakData: {} } });
                },
                f = (e.exports = {
                    REQUIRED: !1,
                    fastKey: function (e, t) {
                        if (!r(e))
                            return 'symbol' == typeof e
                                ? e
                                : ('string' == typeof e ? 'S' : 'P') + e;
                        if (!i(e, l)) {
                            if (!p(e)) return 'F';
                            if (!t) return 'E';
                            d(e);
                        }
                        return e[l].objectID;
                    },
                    getWeakData: function (e, t) {
                        if (!i(e, l)) {
                            if (!p(e)) return !0;
                            if (!t) return !1;
                            d(e);
                        }
                        return e[l].weakData;
                    },
                    onFreeze: function (e) {
                        return s && f.REQUIRED && p(e) && !i(e, l) && d(e), e;
                    },
                });
            o[l] = !0;
        },
        function (e, t, n) {
            var o = n(4),
                r = n(116);
            e.exports = function (e, t, n) {
                var i, a;
                return (
                    r &&
                        'function' == typeof (i = t.constructor) &&
                        i !== n &&
                        o((a = i.prototype)) &&
                        a !== n.prototype &&
                        r(e, a),
                    e
                );
            };
        },
        function (e, t, n) {
            'use strict';
            var o = n(16).f,
                r = n(44),
                i = n(121),
                a = n(47),
                c = n(81),
                s = n(80),
                l = n(77),
                u = n(82),
                p = n(8),
                d = n(118).fastKey,
                f = n(32),
                m = f.set,
                v = f.getterFor;
            e.exports = {
                getConstructor: function (e, t, n, l) {
                    var u = e(function (e, o) {
                            c(e, u, t),
                                m(e, {
                                    type: t,
                                    index: r(null),
                                    first: void 0,
                                    last: void 0,
                                    size: 0,
                                }),
                                p || (e.size = 0),
                                null != o && s(o, e[l], e, n);
                        }),
                        f = v(t),
                        y = function (e, t, n) {
                            var o,
                                r,
                                i = f(e),
                                a = h(e, t);
                            return (
                                a
                                    ? (a.value = n)
                                    : ((i.last = a =
                                          {
                                              index: (r = d(t, !0)),
                                              key: t,
                                              value: n,
                                              previous: (o = i.last),
                                              next: void 0,
                                              removed: !1,
                                          }),
                                      i.first || (i.first = a),
                                      o && (o.next = a),
                                      p ? i.size++ : e.size++,
                                      'F' !== r && (i.index[r] = a)),
                                e
                            );
                        },
                        h = function (e, t) {
                            var n,
                                o = f(e),
                                r = d(t);
                            if ('F' !== r) return o.index[r];
                            for (n = o.first; n; n = n.next)
                                if (n.key == t) return n;
                        };
                    return (
                        i(u.prototype, {
                            clear: function () {
                                for (
                                    var e = f(this), t = e.index, n = e.first;
                                    n;

                                )
                                    (n.removed = !0),
                                        n.previous &&
                                            (n.previous = n.previous.next =
                                                void 0),
                                        delete t[n.index],
                                        (n = n.next);
                                (e.first = e.last = void 0),
                                    p ? (e.size = 0) : (this.size = 0);
                            },
                            delete: function (e) {
                                var t = f(this),
                                    n = h(this, e);
                                if (n) {
                                    var o = n.next,
                                        r = n.previous;
                                    delete t.index[n.index],
                                        (n.removed = !0),
                                        r && (r.next = o),
                                        o && (o.previous = r),
                                        t.first == n && (t.first = o),
                                        t.last == n && (t.last = r),
                                        p ? t.size-- : this.size--;
                                }
                                return !!n;
                            },
                            forEach: function (e) {
                                for (
                                    var t,
                                        n = f(this),
                                        o = a(
                                            e,
                                            arguments.length > 1
                                                ? arguments[1]
                                                : void 0,
                                            3
                                        );
                                    (t = t ? t.next : n.first);

                                )
                                    for (
                                        o(t.value, t.key, this);
                                        t && t.removed;

                                    )
                                        t = t.previous;
                            },
                            has: function (e) {
                                return !!h(this, e);
                            },
                        }),
                        i(
                            u.prototype,
                            n
                                ? {
                                      get: function (e) {
                                          var t = h(this, e);
                                          return t && t.value;
                                      },
                                      set: function (e, t) {
                                          return y(this, 0 === e ? 0 : e, t);
                                      },
                                  }
                                : {
                                      add: function (e) {
                                          return y(
                                              this,
                                              (e = 0 === e ? 0 : e),
                                              e
                                          );
                                      },
                                  }
                        ),
                        p &&
                            o(u.prototype, 'size', {
                                get: function () {
                                    return f(this).size;
                                },
                            }),
                        u
                    );
                },
                setStrong: function (e, t, n) {
                    var o = t + ' Iterator',
                        r = v(t),
                        i = v(o);
                    l(
                        e,
                        t,
                        function (e, t) {
                            m(this, {
                                type: o,
                                target: e,
                                state: r(e),
                                kind: t,
                                last: void 0,
                            });
                        },
                        function () {
                            for (
                                var e = i(this), t = e.kind, n = e.last;
                                n && n.removed;

                            )
                                n = n.previous;
                            return e.target &&
                                (e.last = n = n ? n.next : e.state.first)
                                ? 'keys' == t
                                    ? { value: n.key, done: !1 }
                                    : 'values' == t
                                    ? { value: n.value, done: !1 }
                                    : { value: [n.key, n.value], done: !1 }
                                : ((e.target = void 0),
                                  { value: void 0, done: !0 });
                        },
                        n ? 'entries' : 'values',
                        !n,
                        !0
                    ),
                        u(t);
                },
            };
        },
        function (e, t, n) {
            var o = n(22);
            e.exports = function (e, t, n) {
                for (var r in t) o(e, r, t[r], n);
                return e;
            };
        },
        function (e, t, n) {
            'use strict';
            var o = n(1);
            function r(e, t) {
                return RegExp(e, t);
            }
            (t.UNSUPPORTED_Y = o(function () {
                var e = r('a', 'y');
                return (e.lastIndex = 2), null != e.exec('abcd');
            })),
                (t.BROKEN_CARET = o(function () {
                    var e = r('^r', 'gy');
                    return (e.lastIndex = 2), null != e.exec('str');
                }));
        },
        function (e, t, n) {
            var o = n(56),
                r = n(26),
                i = function (e) {
                    return function (t, n) {
                        var i,
                            a,
                            c = String(r(t)),
                            s = o(n),
                            l = c.length;
                        return s < 0 || s >= l
                            ? e
                                ? ''
                                : void 0
                            : (i = c.charCodeAt(s)) < 55296 ||
                              i > 56319 ||
                              s + 1 === l ||
                              (a = c.charCodeAt(s + 1)) < 56320 ||
                              a > 57343
                            ? e
                                ? c.charAt(s)
                                : i
                            : e
                            ? c.slice(s, s + 2)
                            : a - 56320 + ((i - 55296) << 10) + 65536;
                    };
                };
            e.exports = { codeAt: i(!1), charAt: i(!0) };
        },
        function (e, t, n) {
            var o = n(9),
                r = n(35),
                i = n(2)('species');
            e.exports = function (e, t) {
                var n,
                    a = o(e).constructor;
                return void 0 === a || null == (n = o(a)[i]) ? t : r(n);
            };
        },
        function (e, t) {
            e.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0,
            };
        },
        function (e, t, n) {
            'use strict';
            var o = n(0),
                r = n(69).indexOf,
                i = n(62),
                a = n(29),
                c = [].indexOf,
                s = !!c && 1 / [1].indexOf(1, -0) < 0,
                l = i('indexOf'),
                u = a('indexOf', { ACCESSORS: !0, 1: 0 });
            o(
                { target: 'Array', proto: !0, forced: s || !l || !u },
                {
                    indexOf: function (e) {
                        return s
                            ? c.apply(this, arguments) || 0
                            : r(
                                  this,
                                  e,
                                  arguments.length > 1 ? arguments[1] : void 0
                              );
                    },
                }
            );
        },
        function (e, t, n) {
            'use strict';
            var o = n(0),
                r = n(35),
                i = n(23),
                a = n(1),
                c = n(62),
                s = [],
                l = s.sort,
                u = a(function () {
                    s.sort(void 0);
                }),
                p = a(function () {
                    s.sort(null);
                }),
                d = c('sort');
            o(
                { target: 'Array', proto: !0, forced: u || !p || !d },
                {
                    sort: function (e) {
                        return void 0 === e
                            ? l.call(i(this))
                            : l.call(i(this), r(e));
                    },
                }
            );
        },
        function (e, t, n) {
            'use strict';
            var o = n(117),
                r = n(120);
            e.exports = o(
                'Set',
                function (e) {
                    return function () {
                        return e(
                            this,
                            arguments.length ? arguments[0] : void 0
                        );
                    };
                },
                r
            );
        },
        function (e, t, n) {
            'use strict';
            var o = n(87),
                r = n(9),
                i = n(23),
                a = n(19),
                c = n(56),
                s = n(26),
                l = n(89),
                u = n(90),
                p = Math.max,
                d = Math.min,
                f = Math.floor,
                m = /\$([$&'`]|\d\d?|<[^>]*>)/g,
                v = /\$([$&'`]|\d\d?)/g;
            o('replace', 2, function (e, t, n, o) {
                var y = o.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                    h = o.REPLACE_KEEPS_$0,
                    b = y ? '$' : '$0';
                return [
                    function (n, o) {
                        var r = s(this),
                            i = null == n ? void 0 : n[e];
                        return void 0 !== i
                            ? i.call(n, r, o)
                            : t.call(String(r), n, o);
                    },
                    function (e, o) {
                        if (
                            (!y && h) ||
                            ('string' == typeof o && -1 === o.indexOf(b))
                        ) {
                            var i = n(t, e, this, o);
                            if (i.done) return i.value;
                        }
                        var s = r(e),
                            f = String(this),
                            m = 'function' == typeof o;
                        m || (o = String(o));
                        var v = s.global;
                        if (v) {
                            var k = s.unicode;
                            s.lastIndex = 0;
                        }
                        for (var _ = []; ; ) {
                            var x = u(s, f);
                            if (null === x) break;
                            if ((_.push(x), !v)) break;
                            '' === String(x[0]) &&
                                (s.lastIndex = l(f, a(s.lastIndex), k));
                        }
                        for (var w, S = '', j = 0, O = 0; O < _.length; O++) {
                            x = _[O];
                            for (
                                var A = String(x[0]),
                                    z = p(d(c(x.index), f.length), 0),
                                    P = [],
                                    E = 1;
                                E < x.length;
                                E++
                            )
                                P.push(void 0 === (w = x[E]) ? w : String(w));
                            var C = x.groups;
                            if (m) {
                                var D = [A].concat(P, z, f);
                                void 0 !== C && D.push(C);
                                var T = String(o.apply(void 0, D));
                            } else T = g(A, f, z, P, C, o);
                            z >= j &&
                                ((S += f.slice(j, z) + T), (j = z + A.length));
                        }
                        return S + f.slice(j);
                    },
                ];
                function g(e, n, o, r, a, c) {
                    var s = o + e.length,
                        l = r.length,
                        u = v;
                    return (
                        void 0 !== a && ((a = i(a)), (u = m)),
                        t.call(c, u, function (t, i) {
                            var c;
                            switch (i.charAt(0)) {
                                case '$':
                                    return '$';
                                case '&':
                                    return e;
                                case '`':
                                    return n.slice(0, o);
                                case "'":
                                    return n.slice(s);
                                case '<':
                                    c = a[i.slice(1, -1)];
                                    break;
                                default:
                                    var u = +i;
                                    if (0 === u) return t;
                                    if (u > l) {
                                        var p = f(u / 10);
                                        return 0 === p
                                            ? t
                                            : p <= l
                                            ? void 0 === r[p - 1]
                                                ? i.charAt(1)
                                                : r[p - 1] + i.charAt(1)
                                            : t;
                                    }
                                    c = r[u - 1];
                            }
                            return void 0 === c ? '' : c;
                        })
                    );
                }
            });
        },
        function (e, t, n) {
            var o,
                r,
                i,
                a = n(3),
                c = n(1),
                s = n(28),
                l = n(47),
                u = n(104),
                p = n(65),
                d = n(131),
                f = a.location,
                m = a.setImmediate,
                v = a.clearImmediate,
                y = a.process,
                h = a.MessageChannel,
                b = a.Dispatch,
                g = 0,
                k = {},
                _ = function (e) {
                    if (k.hasOwnProperty(e)) {
                        var t = k[e];
                        delete k[e], t();
                    }
                },
                x = function (e) {
                    return function () {
                        _(e);
                    };
                },
                w = function (e) {
                    _(e.data);
                },
                S = function (e) {
                    a.postMessage(e + '', f.protocol + '//' + f.host);
                };
            (m && v) ||
                ((m = function (e) {
                    for (var t = [], n = 1; arguments.length > n; )
                        t.push(arguments[n++]);
                    return (
                        (k[++g] = function () {
                            ('function' == typeof e ? e : Function(e)).apply(
                                void 0,
                                t
                            );
                        }),
                        o(g),
                        g
                    );
                }),
                (v = function (e) {
                    delete k[e];
                }),
                'process' == s(y)
                    ? (o = function (e) {
                          y.nextTick(x(e));
                      })
                    : b && b.now
                    ? (o = function (e) {
                          b.now(x(e));
                      })
                    : h && !d
                    ? ((i = (r = new h()).port2),
                      (r.port1.onmessage = w),
                      (o = l(i.postMessage, i, 1)))
                    : !a.addEventListener ||
                      'function' != typeof postMessage ||
                      a.importScripts ||
                      c(S) ||
                      'file:' === f.protocol
                    ? (o =
                          'onreadystatechange' in p('script')
                              ? function (e) {
                                    u.appendChild(
                                        p('script')
                                    ).onreadystatechange = function () {
                                        u.removeChild(this), _(e);
                                    };
                                }
                              : function (e) {
                                    setTimeout(x(e), 0);
                                })
                    : ((o = S), a.addEventListener('message', w, !1))),
                (e.exports = { set: m, clear: v });
        },
        function (e, t, n) {
            var o = n(108);
            e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(o);
        },
        function (e, t, n) {
            'use strict';
            var o = n(35),
                r = function (e) {
                    var t, n;
                    (this.promise = new e(function (e, o) {
                        if (void 0 !== t || void 0 !== n)
                            throw TypeError('Bad Promise constructor');
                        (t = e), (n = o);
                    })),
                        (this.resolve = o(t)),
                        (this.reject = o(n));
                };
            e.exports.f = function (e) {
                return new r(e);
            };
        },
        function (e, t, n) {
            e.exports = n(169)();
        },
        function (e, t) {
            e.exports = {
                acceptAll: '照单全收',
                acceptSelected: '接受选择',
                close: '密切',
                consentModal: {
                    description:
                        '在这里，您可以评估和定制我们希望在本网站上使用的服务。您是负责人！您可以根据自己的需要启用或禁用服务。启用或禁用您认为合适的服务。',
                    privacyPolicy: {
                        name: '隐私政策',
                        text: '要了解更多，请阅读我们的{privacyPolicy} 。',
                    },
                    title: '我们想使用的服务',
                },
                consentNotice: {
                    changeDescription: '自上次访问后有变化，请更新您的同意。',
                    description:
                        '你好！我们可以为{purposes} 启用一些额外的服务吗？您可以随时更改或撤回您的同意。',
                    imprint: { name: '印记' },
                    learnMore: '让我来选',
                    privacyPolicy: { name: '隐私政策' },
                    testing: '测试模式！',
                },
                contextualConsent: {
                    acceptAlways: '总是',
                    acceptOnce: '是的，是的',
                    description: '你想加载由{title} 提供的外部内容吗？',
                },
                decline: '我拒绝',
                ok: '没事的',
                poweredBy: '与Klaro一起实现!',
                privacyPolicy: {
                    name: '隐私政策',
                    text: '要了解更多，请阅读我们的{privacyPolicy} 。',
                },
                purposeItem: { service: '服务', services: '服务' },
                purposes: {
                    advertising: {
                        description:
                            '这些服务处理个人信息，向您展示个性化或基于兴趣的广告。',
                        title: '广告宣传',
                    },
                    functional: {
                        description:
                            '这些服务对于本网站的正常运行是必不可少的。您不能在这里禁用它们，否则服务将无法正常运行。\n',
                        title: '服务提供',
                    },
                    marketing: {
                        description:
                            '这些服务会处理个人信息，向您展示您可能感兴趣的产品、服务或主题的相关内容。',
                        title: '市场营销',
                    },
                    performance: {
                        description:
                            '这些服务处理个人信息是为了优化本网站提供的服务。\n',
                        title: '性能优化',
                    },
                },
                save: '挽救',
                service: {
                    disableAll: {
                        description: '使用此开关可启用或禁用所有服务。',
                        title: '启用或停用所有服务',
                    },
                    optOut: {
                        description: '这个服务是默认加载的(但你可以选择退出)',
                        title: '(选择退出)',
                    },
                    purpose: '目的',
                    purposes: '目的',
                    required: {
                        description: '这种服务是必须的',
                        title: '(总是需要)',
                    },
                },
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: 'Aceitar todos',
                acceptSelected: 'Aceitar selecionados',
                close: 'Fechar',
                consentModal: {
                    description:
                        'Aqui você pode avaliar e personalizar os serviços que gostaríamos de usar neste website. Você está no comando! Habilite ou desabilite os serviços como julgar conveniente.',
                    privacyPolicy: {
                        name: 'política de privacidade',
                        text: 'Para saber mais, por favor, leia nossa {privacyPolicy}.',
                    },
                    title: 'Serviços que gostaríamos de utilizar',
                },
                consentNotice: {
                    changeDescription:
                        'Houve mudanças desde sua última visita, queira renovar seu consentimento.',
                    description:
                        'Olá! Poderíamos, por favor, habilitar alguns serviços adicionais para {purposes}? Você pode sempre mudar ou retirar seu consentimento mais tarde.',
                    imprint: { name: 'imprimir' },
                    learnMore: 'Deixe-me escolher',
                    privacyPolicy: { name: 'política de privacidade' },
                    testing: 'Modo de teste!',
                },
                contextualConsent: {
                    acceptAlways: 'Sempre',
                    acceptOnce: 'Sim',
                    description:
                        'Você deseja carregar conteúdo externo fornecido por {title}?',
                },
                decline: 'Recusar',
                ok: 'Aceito.',
                poweredBy: 'Realizado com Klaro!',
                privacyPolicy: {
                    name: 'política de privacidade',
                    text: 'Para saber mais, por favor, leia nossa {privacyPolicy}.',
                },
                purposeItem: { service: 'serviço', services: 'serviços' },
                purposes: {
                    advertising: {
                        description:
                            'Esses serviços processam informações pessoais para mostrar a você anúncios personalizados ou baseados em interesses.',
                        title: 'Publicidade',
                    },
                    functional: {
                        description:
                            'Esses serviços são essenciais para o correto funcionamento deste website. Você não pode desativá-los aqui, pois de outra forma o serviço não funcionaria corretamente.\n',
                        title: 'Prestação de serviços',
                    },
                    marketing: {
                        description:
                            'Esses serviços processam informações pessoais para mostrar a você conteúdo relevante sobre produtos, serviços ou tópicos que possam ser do seu interesse.',
                        title: 'Marketing',
                    },
                    performance: {
                        description:
                            'Esses serviços processam informações pessoais para otimizar o serviço que este website oferece.\n',
                        title: 'Otimização do desempenho',
                    },
                },
                save: 'Salvar',
                service: {
                    disableAll: {
                        description:
                            'Use essa chave para habilitar ou desabilitar todos os serviços.',
                        title: 'Habilitar ou desabilitar todos os serviços',
                    },
                    optOut: {
                        description:
                            'Estes serviços são carregados por padrão (mas o você pode optar por não participar).',
                        title: '(opt-out)',
                    },
                    purpose: 'Objetivo',
                    purposes: 'Objetivos',
                    required: {
                        description: 'Esses serviços são sempre necessários',
                        title: '(sempre necessário)',
                    },
                },
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: 'Accepta-les totes',
                acceptSelected: 'Accepta les escollides',
                service: {
                    disableAll: {
                        description:
                            'Useu aquest botó per a habilitar o deshabilitar totes les aplicacions.',
                        title: 'Habilita/deshabilita totes les aplicacions',
                    },
                    optOut: {
                        description:
                            'Aquesta aplicació es carrega per defecte, però podeu desactivar-la',
                        title: '(opt-out)',
                    },
                    purpose: 'Finalitat',
                    purposes: 'Finalitats',
                    required: {
                        description: 'Aquesta aplicació es necessita sempre',
                        title: '(necessària)',
                    },
                },
                close: 'Tanca',
                consentModal: {
                    description:
                        'Aquí podeu veure i personalitzar la informació que recopilem sobre vós.',
                    privacyPolicy: {
                        name: 'política de privadesa',
                        text: 'Per a més informació, consulteu la nostra {privacyPolicy}.',
                    },
                    title: 'Informació que recopilem',
                },
                consentNotice: {
                    changeDescription:
                        'Hi ha hagut canvis des de la vostra darrera visita. Actualitzeu el vostre consentiment.',
                    description:
                        'Recopilem i processem la vostra informació personal amb les següents finalitats: {purposes}.',
                    imprint: { name: 'Empremta' },
                    learnMore: 'Saber-ne més',
                    privacyPolicy: { name: 'política de privadesa' },
                },
                decline: 'Rebutja',
                ok: 'Accepta',
                poweredBy: 'Funciona amb Klaro!',
                purposeItem: { service: 'aplicació', services: 'aplicacions' },
                save: 'Desa',
            };
        },
        function (e, t) {
            e.exports = {
                privacyPolicy: {
                    name: 'zásady ochrany soukromí',
                    text: 'Pro další informace si přečtete naše <tr-hint v="privacy policy">{privacyPolicy}</tr-hint>.',
                },
                consentModal: {
                    title: 'Služby, které bychom rádi využili',
                    description:
                        'Zde můžete posoudit a přizpůsobit služby, které bychom rádi na tomto webu používali. Máte to pod kontrolou! Povolte nebo zakažte služby, jak uznáte za vhodné.',
                },
                consentNotice: {
                    testing: 'Testing mode!',
                    changeDescription:
                        'Od vaší poslední návštěvy došlo ke změnám, obnovte prosím svůj souhlas.',
                    description:
                        '„Dobrý den! Můžeme povolit některé další služby pro {purposes}? Svůj souhlas můžete kdykoliv změnit nebo odvolat.“',
                    'learnMore|capitalize': 'Vyberu si',
                },
                účely: {
                    functional: {
                        'title|capitalize': 'Poskytování služeb',
                        description:
                            'Tyto služby jsou nezbytné pro správné fungování tohoto webu. Nelze je zde deaktivovat, protože služba by jinak nefungovala správně.\n',
                    },
                    performance: {
                        'title|capitalize': 'Optimalizace výkonu',
                        description:
                            'V rámci těchto služeb jsou zpracovávány osobní údaje za účelem optimalizace služeb, které jsou na tomto webu poskytovány.\n',
                    },
                    marketing: {
                        'title|capitalize': 'Marketing',
                        description:
                            'V rámci těchto služeb jsou zpracovávány osobní údaje, aby se vám zobrazoval relevantní obsah o produktech, službách nebo tématech, které by vás mohly zajímat.',
                    },
                    advertising: {
                        'title|capitalize': 'Reklama',
                        description:
                            'V rámci těchto služeb jsou zpracovávány osobní údaje, aby vám zobrazovaly personalizované nebo zájmově orientované reklamy.',
                    },
                },
                purposeItem: {
                    service:
                        'Jednoduchá služba <tr-snip></tr-snip> , kterou nainstaluji do svého počítače.',
                    services:
                        'Několik jednoduchých služeb <tr-snip></tr-snip> , které nainstaluji do svého počítače.',
                },
                'ok|capitalize': 'To je v pořádku',
                save: 'uložit',
                'decline|capitalize': 'Nepřijímám',
                close: 'zavřít',
                acceptAll: 'přijmout vše',
                acceptSelected: 'přijmout vybrané',
                service: {
                    disableAll: {
                        title: 'povolit nebo zakázat všechny služby',
                        description:
                            'Pomocí tohoto přepínače můžete povolit nebo zakázat všechny služby.',
                    },
                    optOut: {
                        title: '(opt-out)',
                        description:
                            'Tato služba se načítá ve výchozím nastavení (ale můžete ji zrušit)',
                    },
                    required: {
                        title: '(vždy vyžadováno)',
                        description: 'Tato služba je vždy vyžadována',
                    },
                    purposes: 'Zpracování  pro účely <tr-snip></tr-snip>',
                    purpose: 'Zpracování pro účely <tr-snip></tr-snip>',
                },
                poweredBy: 'Realizováno pomocí Klaro!',
                contextualConsent: {
                    description:
                        'Chcete načíst externí obsah dodávaný prostřednictvím {title}?',
                    acceptOnce: 'Ano',
                    acceptAlways: 'Vždy',
                },
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: 'Tillad alle',
                acceptSelected: 'Tillad udvalgte',
                service: {
                    disableAll: {
                        description:
                            'Brug denne kontakt til at aktivere/deaktivere alle apps.',
                        title: 'Aktiver/deaktiver alle applikatione',
                    },
                    optOut: {
                        description:
                            'Denne applikation indlæses som standard (men du kan deaktivere den)',
                        title: 'Opt-Out',
                    },
                    purpose: 'Formål',
                    purposes: 'Formål',
                    required: {
                        description: 'Denne applikation er altid nødvendig',
                        title: '(Altid nødvendig)',
                    },
                },
                close: 'Luk',
                consentModal: {
                    description:
                        'Her kan du se og ændre, hvilke informationer vi gemmer om dig.',
                    privacyPolicy: {
                        name: 'Flere informationer finde du under {privacyPolicy}',
                        text: 'databeskyttelseserklæring.',
                    },
                    title: 'Informationer, som vi gemmer',
                },
                consentNotice: {
                    changeDescription:
                        'Der har været ændringer siden dit sidste besøg. Opdater dit valg.',
                    description:
                        'Vi gemmer og behandler dine personlige oplysninger til følgende formål: {purposes}.',
                    imprint: { name: '' },
                    learnMore: 'Læs mere',
                    privacyPolicy: { name: 'Datenschutzerklärung' },
                },
                decline: 'Afvis',
                ok: 'Ok',
                poweredBy: 'Realiseret med Klaro!',
                purposeItem: { service: '', services: '' },
                save: 'Gem',
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: 'Alle akzeptieren',
                acceptLocalOnly: 'Nur EU-Anbieter akzeptieren',
                acceptSelected: 'Ausgewählte akzeptieren',
                close: 'Schließen',
                consentModal: {
                    description:
                        'Hier können Sie die Dienste, die wir auf dieser Website nutzen möchten, bewerten und anpassen. Sie haben das Sagen! Aktivieren oder deaktivieren Sie die Dienste, wie Sie es für richtig halten.',
                    privacyPolicy: {
                        name: 'Datenschutzerklärung',
                        text: 'Um mehr zu erfahren, lesen Sie bitte unsere {privacyPolicy}.',
                    },
                    title: 'Dienste, die wir nutzen möchten',
                },
                consentNotice: {
                    changeDescription:
                        'Seit Ihrem letzten Besuch gab es Änderungen, bitte erneuern Sie Ihre Zustimmung.',
                    title: 'Cookie-Einstellungen',
                    description:
                        'Hallo! Könnten wir bitte einige zusätzliche Dienste für {purposes} aktivieren? Sie können Ihre Zustimmung später jederzeit ändern oder zurückziehen.',
                    imprint: { name: 'Impressum' },
                    learnMore: 'Lassen Sie mich wählen',
                    privacyPolicy: { name: 'Datenschutzerklärung' },
                    testing: 'Testmodus!',
                },
                contextualConsent: {
                    acceptAlways: 'Immer',
                    acceptOnce: 'Ja',
                    description:
                        'Möchten Sie von {title} bereitgestellte externe Inhalte laden?',
                },
                decline: 'Ich lehne ab',
                ok: 'Das ist ok',
                poweredBy: 'Realisiert mit Klaro!',
                privacyPolicy: {
                    name: 'Datenschutzerklärung',
                    text: 'Um mehr zu erfahren, lesen Sie bitte unsere {privacyPolicy}.',
                },
                purposeItem: { service: 'Dienst', services: 'Dienste' },
                purposes: {
                    advertising: {
                        description:
                            'Diese Dienste verarbeiten persönliche Informationen, um Ihnen personalisierte oder interessenbezogene Werbung zu zeigen.',
                        title: 'Werbung',
                    },
                    functional: {
                        description:
                            'Diese Dienste sind für die korrekte Funktion dieser Website unerlässlich. Sie können sie hier nicht deaktivieren, da der Dienst sonst nicht richtig funktionieren würde.\n',
                        title: 'Dienstbereitstellung',
                    },
                    marketing: {
                        description:
                            'Diese Dienste verarbeiten persönliche Daten, um Ihnen relevante Inhalte über Produkte, Dienstleistungen oder Themen zu zeigen, die Sie interessieren könnten.',
                        title: 'Marketing',
                    },
                    performance: {
                        description:
                            'Diese Dienste verarbeiten personenbezogene Daten, um den von dieser Website angebotenen Service zu optimieren.\n',
                        title: 'Optimierung der Leistung',
                    },
                },
                save: 'Speichern',
                service: {
                    disableAll: {
                        description:
                            'Mit diesem Schalter können Sie alle Dienste aktivieren oder deaktivieren.',
                        title: 'Alle Dienste aktivieren oder deaktivieren',
                    },
                    optOut: {
                        description:
                            'Diese Dienste werden standardmäßig geladen (Sie können sich jedoch abmelden)',
                        title: '(Opt-out)',
                    },
                    purpose: 'Zweck',
                    purposes: 'Zwecke',
                    required: {
                        description: 'Dieser Service ist immer erforderlich',
                        title: '(immer erforderlich)',
                    },
                    tags: { 'non-eu': 'Nicht-EU Anbieter' },
                },
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: '',
                acceptAll_en: 'Accept all',
                acceptSelected: '',
                acceptSelected_en: 'Accept selected',
                service: {
                    disableAll: {
                        description:
                            'Χρησιμοποίησε αυτό τον διακόπτη για να ενεργοποιήσεις/απενεργοποιήσεις όλες τις εφαρμογές.',
                        title: 'Για όλες τις εφαρμογές',
                    },
                    optOut: {
                        description:
                            'Είναι προκαθορισμένο να φορτώνεται, άλλα μπορεί να παραληφθεί',
                        title: '(μη απαιτούμενο)',
                    },
                    purpose: 'Σκοπός',
                    purposes: 'Σκοποί',
                    required: {
                        description:
                            'Δεν γίνεται να λειτουργήσει σωστά η εφαρμογή χωρίς αυτό',
                        title: '(απαιτούμενο)',
                    },
                },
                close: 'Κλείσιμο',
                consentModal: {
                    description:
                        'Εδώ μπορείς να δεις και να ρυθμίσεις τις πληροφορίες που συλλέγουμε σχετικά με εσένα.',
                    privacyPolicy: {
                        name: 'Πολιτική Απορρήτου',
                        text: 'Για περισσότερες πληροφορίες, παρακαλώ διαβάστε την {privacyPolicy}.',
                    },
                    title: 'Πληροφορίες που συλλέγουμε',
                },
                consentNotice: {
                    changeDescription:
                        'Πραγματοποιήθηκαν αλλαγές μετά την τελευταία σας επίσκεψη παρακαλούμε ανανεώστε την συγκατάθεση σας.',
                    description:
                        'Συγκεντρώνουμε και επεξεργαζόμαστε τα προσωπικά δεδομένα σας για τους παρακάτω λόγους: {purposes}.',
                    imprint: { name: '', name_en: 'imprint' },
                    learnMore: 'Περισσότερα',
                    privacyPolicy: { name: 'Πολιτική Απορρήτου' },
                },
                decline: 'Απόρριπτω',
                ok: 'OK',
                poweredBy: 'Υποστηρίζεται από το Klaro!',
                purposeItem: { service: '', services: '' },
                save: 'Αποθήκευση',
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: 'Accept all',
                acceptLocalOnly: 'Accept EU providers only',
                acceptSelected: 'Accept selected',
                close: 'Close',
                consentModal: {
                    description:
                        "Here you can assess and customize the services that we'd like to use on this website. You're in charge! Enable or disable services as you see fit.",
                    title: 'Services we would like to use',
                },
                consentNotice: {
                    changeDescription:
                        'There were changes since your last visit, please renew your consent.',
                    title: 'Cookie Consent',
                    description:
                        'Hi! Could we please enable some additional services for {purposes}? You can always change or withdraw your consent later.',
                    learnMore: 'Let me choose',
                    testing: 'Testing mode!',
                },
                contextualConsent: {
                    acceptAlways: 'Always',
                    acceptOnce: 'Yes',
                    description:
                        'Do you want to load external content supplied by {title}?',
                },
                decline: 'I decline',
                ok: "That's ok",
                poweredBy: 'Realized with Klaro!',
                privacyPolicy: {
                    name: 'privacy policy',
                    text: 'To learn more, please read our {privacyPolicy}.',
                },
                purposeItem: { service: 'service', services: 'services' },
                purposes: {
                    advertising: {
                        description:
                            'These services process personal information to show you personalized or interest-based advertisements.',
                        title: 'Advertising',
                    },
                    functional: {
                        description:
                            'These services are essential for the correct functioning of this website. You cannot disable them here as the service would not work correctly otherwise.\n',
                        title: 'Service Provision',
                    },
                    marketing: {
                        description:
                            'These services process personal information to show you relevant content about products, services or topics that you might be interested in.',
                        title: 'Marketing',
                    },
                    performance: {
                        description:
                            'These services process personal information to optimize the service that this website offers.\n',
                        title: 'Performance Optimization',
                    },
                },
                save: 'Save',
                service: {
                    disableAll: {
                        description:
                            'Use this switch to enable or disable all services.',
                        title: 'Enable or disable all services',
                    },
                    optOut: {
                        description:
                            'This services is loaded by default (but you can opt out)',
                        title: '(opt-out)',
                    },
                    purpose: 'purpose',
                    purposes: 'purposes',
                    required: {
                        description: 'This services is always required',
                        title: '(always required)',
                    },
                    tags: { 'non-eu': 'Non-EU Provider' },
                },
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: 'Aceptar todas',
                acceptSelected: 'Aceptar seleccionadas',
                close: 'Cerrar',
                consentModal: {
                    description:
                        'Aquí puede evaluar y personalizar los servicios que nos gustaría utilizar en este sitio web. ¡Usted decide! Habilite o deshabilite los servicios como considere oportuno.',
                    privacyPolicy: {
                        name: 'política de privacidad',
                        text: 'Para saber más, por favor lea nuestra {privacyPolicy}.',
                    },
                    title: 'Servicios que nos gustaría utilizar',
                },
                consentNotice: {
                    changeDescription:
                        'Ha habido cambios en las cookies desde su última visita. Debe renovar su consentimiento.',
                    description:
                        '¡Hola! ¿Podríamos habilitar algunos servicios adicionales para {purposes}? Siempre podrá cambiar o retirar su consentimiento más tarde.',
                    imprint: { name: 'Imprimir' },
                    learnMore: 'Quiero elegir',
                    privacyPolicy: { name: 'política de privacidad' },
                    testing: '¡Modo de prueba!',
                },
                contextualConsent: {
                    acceptAlways: 'Siempre',
                    acceptOnce: 'Sí',
                    description:
                        '¿Quieres cargar el contenido externo suministrado por {title}?',
                },
                decline: 'Descartar todas',
                ok: 'De acuerdo',
                poweredBy: '¡Realizado con Klaro!',
                privacyPolicy: {
                    name: 'política de privacidad',
                    text: 'Para saber más, por favor lea nuestra {privacyPolicy}.',
                },
                purposeItem: { service: 'servicio', services: 'servicios' },
                purposes: {
                    advertising: {
                        description:
                            'Estos servicios procesan información personal para mostrarle anuncios personalizados o basados en intereses.',
                        title: 'Publicidad',
                    },
                    functional: {
                        description:
                            'Estos servicios son esenciales para el correcto funcionamiento de este sitio web. No puede desactivarlos ya que la página no funcionaría correctamente.',
                        title: 'Prestación de servicios',
                    },
                    marketing: {
                        description:
                            'Estos servicios procesan información personal para mostrarle contenido relevante sobre productos, servicios o temas que puedan interesarle.',
                        title: 'Marketing',
                    },
                    performance: {
                        description:
                            'Estos servicios procesan información personal para optimizar el servicio que ofrece este sitio.',
                        title: 'Optimización del rendimiento',
                    },
                },
                save: 'Guardar',
                service: {
                    disableAll: {
                        description:
                            'Utilice este interruptor para activar o desactivar todos los servicios.',
                        title: 'Activar o desactivar todos los servicios',
                    },
                    optOut: {
                        description:
                            'Este servicio está habilitado por defecto (pero puede optar por lo contrario)',
                        title: '(desactivar)',
                    },
                    purpose: 'Finalidad',
                    purposes: 'Finalidades',
                    required: {
                        description: 'Este servicio es necesario siempre',
                        title: '(siempre requerido)',
                    },
                },
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: '',
                acceptAll_en: 'Accept all',
                acceptSelected: '',
                acceptSelected_en: 'Accept selected',
                service: {
                    disableAll: {
                        description: 'Aktivoi kaikki päälle/pois.',
                        title: 'Valitse kaikki',
                    },
                    optOut: {
                        description:
                            'Ladataan oletuksena (mutta voit ottaa sen pois päältä)',
                        title: '(ladataan oletuksena)',
                    },
                    purpose: 'Käyttötarkoitus',
                    purposes: 'Käyttötarkoitukset',
                    required: {
                        description: 'Sivusto vaatii tämän aina',
                        title: '(vaaditaan)',
                    },
                },
                close: 'Sulje',
                consentModal: {
                    description:
                        'Voit tarkastella ja muokata sinusta keräämiämme tietoja.',
                    privacyPolicy: {
                        name: 'tietosuojasivultamme',
                        text: 'Voit lukea lisätietoja {privacyPolicy}.',
                    },
                    title: 'Keräämämme tiedot',
                },
                consentNotice: {
                    changeDescription:
                        'Olemme tehneet muutoksia ehtoihin viime vierailusi jälkeen, tarkista ehdot.',
                    description:
                        'Keräämme ja käsittelemme henkilötietoja seuraaviin tarkoituksiin: {purposes}.',
                    imprint: { name: '', name_en: 'imprint' },
                    learnMore: 'Lue lisää',
                    privacyPolicy: { name: 'tietosuojasivultamme' },
                },
                decline: 'Hylkää',
                ok: 'Hyväksy',
                poweredBy: 'Palvelun tarjoaa Klaro!',
                purposeItem: { service: '', services: '' },
                save: 'Tallenna',
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: 'Accepter tout',
                acceptSelected: 'Accepter sélectionné',
                close: 'Fermer',
                consentModal: {
                    description:
                        "Vous pouvez ici évaluer et personnaliser les services que nous aimerions utiliser sur ce site. C'est vous qui décidez ! Activez ou désactivez les services comme bon vous semble.",
                    privacyPolicy: {
                        name: 'politique de confidentialité',
                        text: 'Pour en savoir plus, veuillez lire notre {privacyPolicy}.',
                    },
                    title: 'Services que nous souhaitons utiliser',
                },
                consentNotice: {
                    changeDescription:
                        'Il y a eu des changements depuis votre dernière visite, veuillez renouveler votre consentement.',
                    description:
                        'Bonjour ! Pourrions-nous activer des services supplémentaires pour {purposes}? Vous pouvez toujours modifier ou retirer votre consentement plus tard.',
                    imprint: { name: 'mentions légales' },
                    learnMore: 'Laissez-moi choisir',
                    privacyPolicy: { name: 'politique de confidentialité' },
                    testing: 'Mode test !',
                },
                contextualConsent: {
                    acceptAlways: 'Toujours',
                    acceptOnce: 'Oui',
                    description:
                        'Vous souhaitez charger un contenu externe fourni par {title}?',
                },
                decline: 'Je refuse',
                ok: "C'est bon.",
                poweredBy: 'Réalisé avec Klaro !',
                privacyPolicy: {
                    name: 'politique de confidentialité',
                    text: 'Pour en savoir plus, veuillez lire notre {privacyPolicy}.',
                },
                purposeItem: { service: 'service', services: 'services' },
                purposes: {
                    advertising: {
                        description:
                            'Ces services traitent les informations personnelles pour vous présenter des publicités personnalisées ou basées sur des intérêts.',
                        title: 'Publicité',
                    },
                    functional: {
                        description:
                            'Ces services sont essentiels au bon fonctionnement de ce site. Vous ne pouvez pas les désactiver ici car le service ne fonctionnerait pas correctement autrement.\n',
                        title: 'Prestation de services',
                    },
                    marketing: {
                        description:
                            'Ces services traitent les informations personnelles afin de vous présenter un contenu pertinent sur les produits, les services ou les sujets qui pourraient vous intéresser.',
                        title: 'Marketing',
                    },
                    performance: {
                        description:
                            "Ces services traitent les informations personnelles afin d'optimiser le service que ce site Web offre.\n",
                        title: 'Optimisation de la performance',
                    },
                },
                save: 'Enregistrer',
                service: {
                    disableAll: {
                        description:
                            'Utilisez ce commutateur pour activer ou désactiver tous les services.',
                        title: 'Activer ou désactiver tous les services',
                    },
                    optOut: {
                        description:
                            'Ce service est chargé par défaut (mais vous pouvez le désactiver)',
                        title: '(opt-out)',
                    },
                    purpose: 'Objet',
                    purposes: 'Fins',
                    required: {
                        description: 'Ce service est toujours nécessaire',
                        title: '(toujours requis)',
                    },
                },
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: 'Aceptar todas',
                acceptSelected: 'Aceptar seleccionadas',
                close: 'Pechar',
                consentModal: {
                    description:
                        'Aquí pode avaliar e personalizar os servizos que nos gustaría utilizar neste sitio web. ¡Vostede decide! Habilite ou deshabilite os servicios como lle conveña.',
                    privacyPolicy: {
                        name: 'política de privacidade',
                        text: 'Para saber máis, por favor lea a nosa {privacyPolicy}.',
                    },
                    title: 'Servizos que nos gustaría utilizar',
                },
                consentNotice: {
                    changeDescription:
                        'Houbo cambios nas cookies dende a súa última visita. Debe renovar o seu consentimento.',
                    description:
                        '¡Ola! ¿Poderíamos habilitar algúns servizos adicionais para {purposes}? Sempre poderá cambiar ou retirar o séu consentimento máis tarde.',
                    imprint: { name: 'Imprimir' },
                    learnMore: 'Quero elixir',
                    privacyPolicy: { name: 'política de privacidade' },
                    testing: '¡Modo de proba!',
                },
                decline: 'Descartar todas',
                ok: 'De acordo',
                poweredBy: '¡Realizado con Klaro!',
                privacyPolicy: {
                    name: 'política de privacidade',
                    text: 'Para saber máis, por favor lea a nosa {privacyPolicy}.',
                },
                purposeItem: { service: 'servizo', services: 'servizos' },
                purposes: {
                    advertising: {
                        description:
                            'Estes servizos procesan información persoal para mostrarlle anuncios personalizados ou basados en intereses.',
                        title: 'Publicidade',
                    },
                    functional: {
                        description:
                            'Estes servizos son esenciais para o correcto funcionamiento deste sitio web. Non pode desactivalos xa que a páxina non funcionaría correctamente.',
                        title: 'Prestación de servizos',
                    },
                    marketing: {
                        description:
                            'Estes servizos procesan información persoal para mostrarlle contido relevante sobre produtos, servizos ou temas que poidan interesarlle.',
                        title: 'Marketing',
                    },
                    performance: {
                        description:
                            'Estes servizos procesan información persoal para optimizar o servizo que ofrece este sitio.',
                        title: 'Optimización do rendimento',
                    },
                },
                save: 'Gardar',
                service: {
                    disableAll: {
                        description:
                            'Utilice este interruptor para activar ou desactivar todos os servizos.',
                        title: 'Activar ou desactivar todos os servizos',
                    },
                    optOut: {
                        description:
                            'Este servizo está habilitado por defecto (pero pode optar polo contrario)',
                        title: '(desactivar)',
                    },
                    purpose: 'Finalidade',
                    purposes: 'Finalidades',
                    required: {
                        description: 'Este servizo é necesario sempre',
                        title: '(sempre requirido)',
                    },
                },
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: '',
                acceptAll_en: 'Accept all',
                acceptSelected: '',
                acceptSelected_en: 'Accept selected',
                service: {
                    disableAll: {
                        description:
                            'Használd ezt a kapcsolót az összes alkalmazás engedélyezéséhez/letiltásához.',
                        title: 'Összes app átkapcsolása',
                    },
                    optOut: {
                        description:
                            'Ez az alkalmazás alapértelmezés szerint betöltött (de ki lehet kapcsolni)',
                        title: '(leiratkozás)',
                    },
                    purpose: 'Cél',
                    purposes: 'Célok',
                    required: {
                        description: 'Ez az alkalmazás mindig kötelező',
                        title: '(mindig kötelező)',
                    },
                },
                close: 'Elvet',
                consentModal: {
                    description:
                        'Itt láthatod és testreszabhatod az rólad gyűjtött információkat.',
                    privacyPolicy: {
                        name: 'adatvédelmi irányelveinket',
                        text: 'További információért kérjük, olvassd el az {privacyPolicy}.',
                    },
                    title: 'Információk, amiket gyűjtünk',
                },
                consentNotice: {
                    changeDescription:
                        'Az utolsó látogatás óta változások történtek, kérjük, frissítsd a hozzájárulásodat.',
                    description:
                        'Az személyes adataidat összegyűjtjük és feldolgozzuk az alábbi célokra: {purposes}.',
                    imprint: { name: '', name_en: 'imprint' },
                    learnMore: 'Tudj meg többet',
                    privacyPolicy: { name: 'adatvédelmi irányelveinket' },
                },
                contextualConsent: {
                    acceptAlways: 'Mindig',
                    acceptOnce: 'Igen',
                    description:
                        'Be akarod tölteni a {title} által szolgáltatott külső tartalmakat?',
                },
                decline: 'Mentés',
                ok: 'Elfogad',
                poweredBy: 'Powered by Klaro!',
                purposeItem: { service: '', services: '' },
                save: 'Save',
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: '',
                acceptAll_en: 'Prihvati sve',
                acceptSelected: '',
                acceptSelected_en: 'Prihvati odabrane',
                service: {
                    disableAll: {
                        description:
                            'Koristite ovaj prekidač da omogućite/onemogućite sve aplikacije odjednom.',
                        title: 'Izmeijeni sve',
                    },
                    optOut: {
                        description:
                            'Ova aplikacija je učitana automatski (ali je možete onemogućiti)',
                        title: '(onemogućite)',
                    },
                    purpose: 'Svrha',
                    purposes: 'Svrhe',
                    required: {
                        description: 'Ova aplikacija je uvijek obavezna',
                        title: '(obavezna)',
                    },
                },
                close: 'Zatvori',
                consentModal: {
                    description:
                        'Ovdje možete vidjeti i podesiti informacije koje prikupljamo o Vama.',
                    privacyPolicy: {
                        name: 'pravila privatnosti',
                        text: 'Za više informacije pročitajte naša {privacyPolicy}.',
                    },
                    title: 'Informacije koje prikupljamo',
                },
                consentNotice: {
                    changeDescription:
                        'Došlo je do promjena od Vaše posljednjeg posjećivanja web stranice, molimo Vas da ažurirate svoja odobrenja.',
                    description:
                        'Mi prikupljamo i procesiramo Vaše osobne podatke radi slijedećeg: {purposes}.',
                    imprint: { name: '', name_en: 'imprint' },
                    learnMore: 'Saznajte više',
                    privacyPolicy: { name: 'pravila privatnosti' },
                },
                decline: 'Odbij',
                ok: 'U redu',
                poweredBy: 'Pokreće Klaro!',
                purposeItem: { service: '', services: '' },
                save: 'Spremi',
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: 'Accettare tutti',
                acceptSelected: 'Accettare selezionato',
                close: 'Chiudi',
                consentModal: {
                    description:
                        'Qui può valutare e personalizzare i servizi che vorremmo utilizzare su questo sito web. È lei il responsabile! Abilitare o disabilitare i servizi come meglio crede.',
                    privacyPolicy: {
                        name: 'informativa sulla privacy',
                        text: 'Per saperne di più, legga la nostra {privacyPolicy}.',
                    },
                    title: 'Servizi che desideriamo utilizzare',
                },
                consentNotice: {
                    changeDescription:
                        'Ci sono stati dei cambiamenti rispetto alla sua ultima visita, la preghiamo di rinnovare il suo consenso.',
                    description:
                        'Salve, possiamo attivare alcuni servizi aggiuntivi per {purposes}? Può sempre modificare o ritirare il suo consenso in un secondo momento.',
                    imprint: { name: 'impronta' },
                    learnMore: 'Lasciatemi scegliere',
                    privacyPolicy: { name: 'informativa sulla privacy' },
                    testing: 'Modalità di test!',
                },
                contextualConsent: {
                    acceptAlways: 'Sempre',
                    acceptOnce: 'Sì',
                    description:
                        'Vuole caricare contenuti esterni forniti da {title}?',
                },
                decline: 'Rifiuto',
                ok: 'Va bene così',
                poweredBy: 'Realizzato con Klaro!',
                privacyPolicy: {
                    name: 'informativa sulla privacy',
                    text: 'Per saperne di più, legga la nostra {privacyPolicy}.',
                },
                purposeItem: { service: 'servizio', services: 'servizi' },
                purposes: {
                    advertising: {
                        description:
                            'Questi servizi elaborano le informazioni personali per mostrarle annunci pubblicitari personalizzati o basati su interessi.',
                        title: 'Pubblicità',
                    },
                    functional: {
                        description:
                            'Questi servizi sono essenziali per il corretto funzionamento di questo sito web. Non può disattivarli qui perché altrimenti il servizio non funzionerebbe correttamente.\n',
                        title: 'Fornitura di servizi',
                    },
                    marketing: {
                        description:
                            'Questi servizi elaborano le informazioni personali per mostrarle contenuti rilevanti su prodotti, servizi o argomenti che potrebbero interessarla.',
                        title: 'Marketing',
                    },
                    performance: {
                        description:
                            'Questi servizi elaborano le informazioni personali per ottimizzare il servizio offerto da questo sito web.\n',
                        title: 'Ottimizzazione delle prestazioni',
                    },
                },
                save: 'Salva',
                service: {
                    disableAll: {
                        description:
                            'Utilizzi questo interruttore per attivare o disattivare tutti i servizi.',
                        title: 'Attivare o disattivare tutti i servizi',
                    },
                    optOut: {
                        description:
                            'Questo servizio è caricato di default (ma è possibile scegliere di non usufruirne)',
                        title: '(opt-out)',
                    },
                    purpose: 'Scopo dell',
                    purposes: 'Finalità',
                    required: {
                        description: 'Questo servizio è sempre richiesto',
                        title: '(sempre richiesto)',
                    },
                },
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: 'Accepteer alle',
                acceptSelected: 'Geselecteerde',
                close: 'Sluit',
                consentModal: {
                    description:
                        'Hier kunt u de diensten die wij op deze website willen gebruiken beoordelen en aanpassen. U heeft de leiding! Schakel de diensten naar eigen inzicht in of uit.',
                    privacyPolicy: {
                        name: 'privacybeleid',
                        text: 'Voor meer informatie kunt u ons {privacyPolicy} lezen.',
                    },
                    title: 'Diensten die we graag willen gebruiken',
                },
                consentNotice: {
                    changeDescription:
                        'Er waren veranderingen sinds uw laatste bezoek, gelieve uw toestemming te hernieuwen.',
                    description:
                        'Hallo, kunnen wij u een aantal extra diensten aanbieden voor {purposes}? U kunt uw toestemming later altijd nog wijzigen of intrekken.',
                    imprint: { name: 'impressum' },
                    learnMore: 'Laat me kiezen',
                    privacyPolicy: { name: 'privacybeleid' },
                    testing: 'Testmodus!',
                },
                contextualConsent: {
                    acceptAlways: 'Altijd',
                    acceptOnce: 'Ja',
                    description:
                        'Wilt u externe content laden die door {title} wordt aangeleverd ?',
                },
                decline: 'Ik weiger',
                ok: 'Dat is oké',
                poweredBy: 'Gerealiseerd met Klaro!',
                privacyPolicy: {
                    name: 'privacybeleid',
                    text: 'Voor meer informatie kunt u ons {privacyPolicy} lezen.',
                },
                purposeItem: { service: 'service', services: 'diensten' },
                purposes: {
                    advertising: {
                        description:
                            'Deze diensten verwerken persoonlijke informatie om u gepersonaliseerde of op interesse gebaseerde advertenties te tonen.',
                        title: 'Reclame',
                    },
                    functional: {
                        description:
                            'Deze diensten zijn essentieel voor het correct functioneren van deze website. U kunt ze hier niet uitschakelen omdat de dienst anders niet correct zou werken.\n',
                        title: 'Dienstverlening',
                    },
                    marketing: {
                        description:
                            'Deze diensten verwerken persoonlijke informatie om u relevante inhoud te tonen over producten, diensten of onderwerpen waarin u geïnteresseerd zou kunnen zijn.',
                        title: 'Marketing',
                    },
                    performance: {
                        description:
                            'Deze diensten verwerken persoonlijke informatie om de service die deze website biedt te optimaliseren.\n',
                        title: 'Optimalisatie van de prestaties',
                    },
                },
                save: 'Opslaan',
                service: {
                    disableAll: {
                        description:
                            'Gebruik deze schakelaar om alle diensten in of uit te schakelen.',
                        title: 'Alle diensten in- of uitschakelen',
                    },
                    optOut: {
                        description:
                            'Deze diensten worden standaard geladen (maar u kunt zich afmelden)',
                        title: '(opt-out)',
                    },
                    purpose: 'Verwerkingsdoel',
                    purposes: 'Verwerkingsdoeleinden',
                    required: {
                        description: 'Deze diensten zijn altijd nodig',
                        title: '(altijd nodig)',
                    },
                },
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: 'Godtar alle',
                acceptSelected: 'Godtar valgt',
                service: {
                    disableAll: {
                        description: 'Bruk denne for å skru av/på alle apper.',
                        title: 'Bytt alle apper',
                    },
                    optOut: {
                        description:
                            'Denne appen er lastet som standard (men du kan skru det av)',
                        title: '(opt-out)',
                    },
                    purpose: 'Årsak',
                    purposes: 'Årsaker',
                    required: {
                        description: 'Denne applikasjonen er alltid påkrevd',
                        title: '(alltid påkrevd)',
                    },
                },
                close: '',
                close_en: 'Close',
                consentModal: {
                    description:
                        'Her kan du se og velge hvilken informasjon vi samler inn om deg.',
                    privacyPolicy: {
                        name: 'personvernerklæring',
                        text: 'For å lære mer, vennligst les vår {privacyPolicy}.',
                    },
                    title: 'Informasjon vi samler inn',
                },
                consentNotice: {
                    changeDescription:
                        'Det har skjedd endringer siden ditt siste besøk, vennligst oppdater ditt samtykke.',
                    description:
                        'Vi samler inn og prosesserer din personlige informasjon av følgende årsaker: {purposes}.',
                    imprint: { name: '', name_en: 'imprint' },
                    learnMore: 'Lær mer',
                    privacyPolicy: { name: 'personvernerklæring' },
                },
                decline: 'Avslå',
                ok: 'OK',
                poweredBy: 'Laget med Klaro!',
                purposeItem: { service: '', services: '' },
                save: 'Opslaan',
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: '',
                acceptAll_en: 'Accept all',
                acceptSelected: '',
                acceptSelected_en: 'Accept selected',
                service: {
                    disableAll: {
                        description:
                            'Utilizați acest switch pentru a activa/dezactiva toate aplicațiile.',
                        title: 'Comutați între toate aplicațiile',
                    },
                    optOut: {
                        description:
                            'Această aplicație este încărcată în mod implicit (dar puteți renunța)',
                        title: '(opt-out)',
                    },
                    purpose: 'Scop',
                    purposes: 'Scopuri',
                    required: {
                        description:
                            'Această aplicație este întotdeauna necesară',
                        title: '(întotdeauna necesar)',
                    },
                },
                close: '',
                close_en: 'Close',
                consentModal: {
                    description:
                        'Aici puteți vedea și personaliza informațiile pe care le colectăm despre dvs.',
                    privacyPolicy: {
                        name: 'politica privacy',
                        text: 'Pentru a afla mai multe, vă rugăm să citiți {privacyPolicy}.',
                    },
                    title: 'Informațiile pe care le colectăm',
                },
                consentNotice: {
                    changeDescription:
                        'Au existat modificări de la ultima vizită, vă rugăm să actualizați consimțământul.',
                    description:
                        'Colectăm și procesăm informațiile dvs. personale în următoarele scopuri: {purposes}.',
                    imprint: { name: '', name_en: 'imprint' },
                    learnMore: 'Află mai multe',
                    privacyPolicy: { name: 'politica privacy' },
                },
                decline: 'Renunță',
                ok: 'OK',
                poweredBy: 'Realizat de Klaro!',
                purposeItem: { service: '', services: '' },
                save: 'Salvează',
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: '',
                acceptAll_en: 'Accept all',
                acceptSelected: '',
                acceptSelected_en: 'Accept selected',
                service: {
                    disableAll: {
                        description:
                            'Koristite ovaj prekidač da omogućite/onesposobite sve aplikacije odjednom.',
                        title: 'Izmeni sve',
                    },
                    optOut: {
                        description:
                            'Ova aplikacija je učitana automatski (ali je možete onesposobiti)',
                        title: '(onesposobite)',
                    },
                    purpose: 'Svrha',
                    purposes: 'Svrhe',
                    required: {
                        description: 'Ova aplikacija je uvek neophodna',
                        title: '(neophodna)',
                    },
                },
                close: 'Zatvori',
                consentModal: {
                    description:
                        'Ovde možete videti i podesiti informacije koje prikupljamo o Vama.',
                    privacyPolicy: {
                        name: 'politiku privatnosti',
                        text: 'Za više informacije pročitajte našu {privacyPolicy}.',
                    },
                    title: 'Informacije koje prikupljamo',
                },
                consentNotice: {
                    changeDescription:
                        'Došlo je do promena od Vaše poslednje posete, molimo Vas da ažurirate svoja odobrenja.',
                    description:
                        'Mi prikupljamo i procesiramo Vaše lične podatke radi sledećeg: {purposes}.',
                    imprint: { name: '', name_en: 'imprint' },
                    learnMore: 'Saznajte više',
                    privacyPolicy: { name: 'politiku privatnosti' },
                },
                decline: 'Odbij',
                ok: 'U redu',
                poweredBy: 'Pokreće Klaro!',
                purposeItem: { service: '', services: '' },
                save: 'Sačuvaj',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Информације које прикупљамо',
                    description:
                        'Овде можете видет и подесити информације које прикупљамо о Вама.\n',
                    privacyPolicy: {
                        name: 'политику приватности',
                        text: 'За више информација прочитајте нашу {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Дошло је до промена од Ваше последнје посете, молимо Вас да ажурирате своја одобрења.',
                    description:
                        'Ми прикупљамо и процесирамо Ваше личне податке ради следећег: {purposes}.\n',
                    learnMore: 'Сазнајте више',
                    privacyPolicy: { name: 'политику приватности' },
                },
                ok: 'У реду',
                save: 'Сачувај',
                decline: 'Одбиј',
                close: 'Затвори',
                service: {
                    disableAll: {
                        title: 'Измени све',
                        description:
                            'Користите овај прекидач да омогућите/онеспособите све апликације одједном.',
                    },
                    optOut: {
                        title: '(онеспособите)',
                        description:
                            'Ова апликација је учитана аутоматски (али је можете онеспособити)',
                    },
                    required: {
                        title: '(неопходна)',
                        description: 'Ова апликација је увек неопходна.',
                    },
                    purposes: 'Сврхе',
                    purpose: 'Сврха',
                },
                poweredBy: 'Покреће Кларо!',
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: 'Acceptera alla',
                acceptSelected: 'Acceptera markerat',
                service: {
                    disableAll: {
                        description:
                            'Använd detta reglage för att aktivera/avaktivera samtliga appar.',
                        title: 'Ändra för alla appar',
                    },
                    optOut: {
                        description:
                            'Den här appen laddas som standardinställning (men du kan avaktivera den)',
                        title: '(Avaktivera)',
                    },
                    purpose: 'Syfte',
                    purposes: 'Syften',
                    required: {
                        description: 'Den här applikationen krävs alltid',
                        title: '(Krävs alltid)',
                    },
                },
                close: 'Stäng',
                consentModal: {
                    description:
                        'Här kan du se och anpassa vilken information vi samlar om dig.',
                    privacyPolicy: {
                        name: 'Integritetspolicy',
                        text: 'För att veta mer, läs vår {privacyPolicy}.',
                    },
                    title: 'Information som vi samlar',
                },
                consentNotice: {
                    changeDescription:
                        'Det har skett förändringar sedan ditt senaste besök, var god uppdatera ditt medgivande.',
                    description:
                        'Vi samlar och bearbetar din personliga data i följande syften: {purposes}.',
                    imprint: { name: '', name_en: 'imprint' },
                    learnMore: 'Läs mer',
                    privacyPolicy: { name: 'Integritetspolicy' },
                },
                decline: 'Avböj',
                ok: 'OK',
                poweredBy: 'Körs på Klaro!',
                purposeItem: { service: '', services: '' },
                save: 'Spara',
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: '',
                acceptAll_en: 'Accept all',
                acceptSelected: '',
                acceptSelected_en: 'Accept selected',
                service: {
                    disableAll: {
                        description:
                            'Toplu açma/kapama için bu düğmeyi kullanabilirsin.',
                        title: 'Tüm uygulamaları aç/kapat',
                    },
                    optOut: {
                        description:
                            'Bu uygulama varsayılanda yüklendi (ancak iptal edebilirsin)',
                        title: '(isteğe bağlı)',
                    },
                    purpose: 'Amaç',
                    purposes: 'Amaçlar',
                    required: {
                        description: 'Bu uygulama her zaman gerekli',
                        title: '(her zaman gerekli)',
                    },
                },
                close: 'Kapat',
                consentModal: {
                    description:
                        'Hakkınızda topladığımız bilgileri burada görebilir ve özelleştirebilirsiniz.',
                    privacyPolicy: {
                        name: 'Gizlilik Politikası',
                        text: 'Daha fazlası için lütfen {privacyPolicy} sayfamızı okuyun.',
                    },
                    title: 'Sakladığımız bilgiler',
                },
                consentNotice: {
                    changeDescription:
                        'Son ziyaretinizden bu yana değişiklikler oldu, lütfen seçiminizi güncelleyin.',
                    description:
                        'Kişisel bilgilerinizi aşağıdaki amaçlarla saklıyor ve işliyoruz: {purposes}.',
                    imprint: { name: '', name_en: 'imprint' },
                    learnMore: 'Daha fazla bilgi',
                    privacyPolicy: { name: 'Gizlilik Politikası' },
                },
                decline: 'Reddet',
                ok: 'Tamam',
                poweredBy: 'Klaro tarafından geliştirildi!',
                purposeItem: { service: '', services: '' },
                save: 'Kaydet',
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: 'Zaakceptuj wszystkie',
                acceptSelected: 'Zaakceptuj wybrane',
                close: 'Zamknij',
                consentModal: {
                    description:
                        'Tutaj mogą Państwo ocenić i dostosować usługi, które chcielibyśmy wykorzystać na tej stronie. Włączaj lub wyłączaj usługi według własnego uznania.',
                    privacyPolicy: {
                        name: 'polityką prywatności',
                        text: 'Aby dowiedzieć się więcej, prosimy o zapoznanie się z naszą {privacyPolicy}.',
                    },
                    title: 'Usługi, z których chcielibyśmy skorzystać',
                },
                consentNotice: {
                    changeDescription:
                        'Od Twojej ostatniej wizyty nastąpiły zmiany, prosimy o odnowienie zgody.',
                    description:
                        'Czy możemy włączyć dodatkowe usługi dla {purposes}? W każdej chwili mogą Państwo później zmienić lub wycofać swoją zgodę.',
                    imprint: { name: 'Imprint' },
                    learnMore: 'Pozwól mi wybrać',
                    privacyPolicy: { name: 'polityka prywatności' },
                    testing: 'Tryb testowy!',
                },
                contextualConsent: {
                    acceptAlways: 'Zawsze',
                    acceptOnce: 'Tak',
                    description:
                        'Czy chcą Państwo załadować treści zewnętrzne dostarczane przez {title}?',
                },
                decline: 'Odmawiam',
                ok: 'Ok',
                poweredBy: 'Technologia dostarczona przez Klaro',
                privacyPolicy: {
                    name: 'polityka prywatności',
                    text: 'Aby dowiedzieć się więcej, prosimy o zapoznanie się z naszą {privacyPolicy}.',
                },
                purposeItem: { service: 'usługa', services: 'usługi' },
                purposes: {
                    advertising: {
                        description:
                            'Usługi te przetwarzają dane osobowe w celu pokazania Państwu spersonalizowanych lub opartych na zainteresowaniach reklam.',
                        title: 'Reklama',
                    },
                    functional: {
                        description:
                            'Usługi te są niezbędne do prawidłowego funkcjonowania niniejszej strony internetowej. Nie mogą Państwo ich tutaj wyłączyć, ponieważ w przeciwnym razie strona nie działałaby prawidłowo.\n',
                        title: 'Świadczenie usług',
                    },
                    marketing: {
                        description:
                            'Usługi te przetwarzają dane osobowe w celu pokazania Państwu istotnych treści dotyczących produktów, usług lub tematów, którymi mogą być Państwo zainteresowani.',
                        title: 'Marketing',
                    },
                    performance: {
                        description:
                            'Usługi te przetwarzają dane osobowe w celu optymalizacji usług oferowanych przez tę stronę.\n',
                        title: 'Optymalizacja wydajności',
                    },
                },
                save: 'Zapisz',
                service: {
                    disableAll: {
                        description:
                            'Za pomocą tego przełącznika można włączać lub wyłączać wszystkie usługi.',
                        title: 'Włącz lub wyłącz wszystkie usługi',
                    },
                    optOut: {
                        description:
                            'Ta usługa jest domyślnie załadowana (ale mogą Państwo z niej zrezygnować)',
                        title: '(opt-out)',
                    },
                    purpose: 'Cel',
                    purposes: 'Cele',
                    required: {
                        description: 'Usługi te są zawsze wymagane',
                        title: '(zawsze wymagane)',
                    },
                },
            };
        },
        function (e, t) {
            e.exports = {
                acceptAll: 'Принять всё',
                acceptSelected: 'Принять выбранные',
                service: {
                    disableAll: {
                        description:
                            'Используйте этот переключатель, чтобы включить/отключить все приложения.',
                        title: 'Переключить все приложения',
                    },
                    optOut: {
                        description:
                            'Это приложение включено по умолчанию (но вы можете отказаться)',
                        title: '(отказаться)',
                    },
                    purpose: 'Намерение',
                    purposes: 'Намерения',
                    required: {
                        description: 'Это обязательное приложение',
                        title: '(всегда обязательный)',
                    },
                },
                close: 'Закрыть',
                consentModal: {
                    description:
                        'Здесь вы можете просмотреть и настроить, какую информацию о вас мы храним.',
                    privacyPolicy: {
                        name: 'Соглашение',
                        text: 'Чтобы узнать больше, пожалуйста, прочитайте наше {privacyPolicy}.',
                    },
                    title: 'Информация, которую мы сохраняем',
                },
                consentNotice: {
                    changeDescription:
                        'Со времени вашего последнего визита произошли изменения, обновите своё согласие.',
                    description:
                        'Мы собираем и обрабатываем вашу личную информацию для следующих целей: {purposes}.',
                    imprint: { name: '', name_en: 'imprint' },
                    learnMore: 'Настроить',
                    privacyPolicy: { name: 'политика конфиденциальности' },
                },
                decline: 'Отклонить',
                ok: 'Принять',
                poweredBy: 'Работает на Кларо!',
                purposeItem: { service: '', services: '' },
                save: 'Сохранить',
            };
        },
        function (e, t) {
            var n;
            n = (function () {
                return this;
            })();
            try {
                n = n || new Function('return this')();
            } catch (e) {
                'object' == typeof window && (n = window);
            }
            e.exports = n;
        },
        function (e, t, n) {
            var o = n(3),
                r = n(67),
                i = o.WeakMap;
            e.exports = 'function' == typeof i && /native code/.test(r(i));
        },
        function (e, t, n) {
            var o = n(8),
                r = n(16),
                i = n(9),
                a = n(45);
            e.exports = o
                ? Object.defineProperties
                : function (e, t) {
                      i(e);
                      for (var n, o = a(t), c = o.length, s = 0; c > s; )
                          r.f(e, (n = o[s++]), t[n]);
                      return e;
                  };
        },
        function (e, t, n) {
            var o = n(18),
                r = n(55).f,
                i = {}.toString,
                a =
                    'object' == typeof window &&
                    window &&
                    Object.getOwnPropertyNames
                        ? Object.getOwnPropertyNames(window)
                        : [];
            e.exports.f = function (e) {
                return a && '[object Window]' == i.call(e)
                    ? (function (e) {
                          try {
                              return r(e);
                          } catch (e) {
                              return a.slice();
                          }
                      })(e)
                    : r(o(e));
            };
        },
        function (e, t, n) {
            'use strict';
            var o = n(0),
                r = n(39).find,
                i = n(61),
                a = n(29),
                c = !0,
                s = a('find');
            'find' in [] &&
                Array(1).find(function () {
                    c = !1;
                }),
                o(
                    { target: 'Array', proto: !0, forced: c || !s },
                    {
                        find: function (e) {
                            return r(
                                this,
                                e,
                                arguments.length > 1 ? arguments[1] : void 0
                            );
                        },
                    }
                ),
                i('find');
        },
        function (e, t, n) {
            'use strict';
            var o = n(47),
                r = n(23),
                i = n(110),
                a = n(111),
                c = n(19),
                s = n(59),
                l = n(112);
            e.exports = function (e) {
                var t,
                    n,
                    u,
                    p,
                    d,
                    f,
                    m = r(e),
                    v = 'function' == typeof this ? this : Array,
                    y = arguments.length,
                    h = y > 1 ? arguments[1] : void 0,
                    b = void 0 !== h,
                    g = l(m),
                    k = 0;
                if (
                    (b && (h = o(h, y > 2 ? arguments[2] : void 0, 2)),
                    null == g || (v == Array && a(g)))
                )
                    for (n = new v((t = c(m.length))); t > k; k++)
                        (f = b ? h(m[k], k) : m[k]), s(n, k, f);
                else
                    for (
                        d = (p = g.call(m)).next, n = new v();
                        !(u = d.call(p)).done;
                        k++
                    )
                        (f = b ? i(p, h, [u.value, k], !0) : u.value),
                            s(n, k, f);
                return (n.length = k), n;
            };
        },
        function (e, t, n) {
            'use strict';
            var o = n(114).IteratorPrototype,
                r = n(44),
                i = n(42),
                a = n(46),
                c = n(48),
                s = function () {
                    return this;
                };
            e.exports = function (e, t, n) {
                var l = t + ' Iterator';
                return (
                    (e.prototype = r(o, { next: i(1, n) })),
                    a(e, l, !1, !0),
                    (c[l] = s),
                    e
                );
            };
        },
        function (e, t, n) {
            var o = n(4);
            e.exports = function (e) {
                if (!o(e) && null !== e)
                    throw TypeError(
                        "Can't set " + String(e) + ' as a prototype'
                    );
                return e;
            };
        },
        function (e, t, n) {
            var o = n(1);
            e.exports = !o(function () {
                return Object.isExtensible(Object.preventExtensions({}));
            });
        },
        function (e, t, n) {
            'use strict';
            var o = n(75),
                r = n(113);
            e.exports = o
                ? {}.toString
                : function () {
                      return '[object ' + r(this) + ']';
                  };
        },
        function (e, t, n) {
            'use strict';
            var o = n(35),
                r = n(4),
                i = [].slice,
                a = {},
                c = function (e, t, n) {
                    if (!(t in a)) {
                        for (var o = [], r = 0; r < t; r++)
                            o[r] = 'a[' + r + ']';
                        a[t] = Function(
                            'C,a',
                            'return new C(' + o.join(',') + ')'
                        );
                    }
                    return a[t](e, n);
                };
            e.exports =
                Function.bind ||
                function (e) {
                    var t = o(this),
                        n = i.call(arguments, 1),
                        a = function () {
                            var o = n.concat(i.call(arguments));
                            return this instanceof a
                                ? c(t, o.length, o)
                                : t.apply(e, o);
                        };
                    return r(t.prototype) && (a.prototype = t.prototype), a;
                };
        },
        function (e, t, n) {
            'use strict';
            var o = n(170);
            function r() {}
            function i() {}
            (i.resetWarningCache = r),
                (e.exports = function () {
                    function e(e, t, n, r, i, a) {
                        if (a !== o) {
                            var c = new Error(
                                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                            );
                            throw ((c.name = 'Invariant Violation'), c);
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
                        resetWarningCache: r,
                    };
                    return (n.PropTypes = n), n;
                });
        },
        function (e, t, n) {
            'use strict';
            e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        },
        function (e, t, n) {
            'use strict';
            var o = n(8),
                r = n(1),
                i = n(45),
                a = n(71),
                c = n(50),
                s = n(23),
                l = n(51),
                u = Object.assign,
                p = Object.defineProperty;
            e.exports =
                !u ||
                r(function () {
                    if (
                        o &&
                        1 !==
                            u(
                                { b: 1 },
                                u(
                                    p({}, 'a', {
                                        enumerable: !0,
                                        get: function () {
                                            p(this, 'b', {
                                                value: 3,
                                                enumerable: !1,
                                            });
                                        },
                                    }),
                                    { b: 2 }
                                )
                            ).b
                    )
                        return !0;
                    var e = {},
                        t = {},
                        n = Symbol();
                    return (
                        (e[n] = 7),
                        'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                            t[e] = e;
                        }),
                        7 != u({}, e)[n] ||
                            'abcdefghijklmnopqrst' != i(u({}, t)).join('')
                    );
                })
                    ? function (e, t) {
                          for (
                              var n = s(e),
                                  r = arguments.length,
                                  u = 1,
                                  p = a.f,
                                  d = c.f;
                              r > u;

                          )
                              for (
                                  var f,
                                      m = l(arguments[u++]),
                                      v = p ? i(m).concat(p(m)) : i(m),
                                      y = v.length,
                                      h = 0;
                                  y > h;

                              )
                                  (f = v[h++]),
                                      (o && !d.call(m, f)) || (n[f] = m[f]);
                          return n;
                      }
                    : u;
        },
        function (e, t, n) {
            'use strict';
            var o,
                r = n(0),
                i = n(27).f,
                a = n(19),
                c = n(92),
                s = n(26),
                l = n(93),
                u = n(33),
                p = ''.endsWith,
                d = Math.min,
                f = l('endsWith');
            r(
                {
                    target: 'String',
                    proto: !0,
                    forced:
                        !!(
                            u ||
                            f ||
                            ((o = i(String.prototype, 'endsWith')),
                            !o || o.writable)
                        ) && !f,
                },
                {
                    endsWith: function (e) {
                        var t = String(s(this));
                        c(e);
                        var n = arguments.length > 1 ? arguments[1] : void 0,
                            o = a(t.length),
                            r = void 0 === n ? o : d(a(n), o),
                            i = String(e);
                        return p
                            ? p.call(t, i, r)
                            : t.slice(r - i.length, r) === i;
                    },
                }
            );
        },
        function (e, t, n) {
            'use strict';
            var o = n(87),
                r = n(9),
                i = n(19),
                a = n(26),
                c = n(89),
                s = n(90);
            o('match', 1, function (e, t, n) {
                return [
                    function (t) {
                        var n = a(this),
                            o = null == t ? void 0 : t[e];
                        return void 0 !== o
                            ? o.call(t, n)
                            : new RegExp(t)[e](String(n));
                    },
                    function (e) {
                        var o = n(t, e, this);
                        if (o.done) return o.value;
                        var a = r(e),
                            l = String(this);
                        if (!a.global) return s(a, l);
                        var u = a.unicode;
                        a.lastIndex = 0;
                        for (var p, d = [], f = 0; null !== (p = s(a, l)); ) {
                            var m = String(p[0]);
                            (d[f] = m),
                                '' === m &&
                                    (a.lastIndex = c(l, i(a.lastIndex), u)),
                                f++;
                        }
                        return 0 === f ? null : d;
                    },
                ];
            });
        },
        function (e, t, n) {
            'use strict';
            var o = n(0),
                r = n(39).findIndex,
                i = n(61),
                a = n(29),
                c = !0,
                s = a('findIndex');
            'findIndex' in [] &&
                Array(1).findIndex(function () {
                    c = !1;
                }),
                o(
                    { target: 'Array', proto: !0, forced: c || !s },
                    {
                        findIndex: function (e) {
                            return r(
                                this,
                                e,
                                arguments.length > 1 ? arguments[1] : void 0
                            );
                        },
                    }
                ),
                i('findIndex');
        },
        function (e, t, n) {
            var o = n(8),
                r = n(45),
                i = n(18),
                a = n(50).f,
                c = function (e) {
                    return function (t) {
                        for (
                            var n,
                                c = i(t),
                                s = r(c),
                                l = s.length,
                                u = 0,
                                p = [];
                            l > u;

                        )
                            (n = s[u++]),
                                (o && !a.call(c, n)) ||
                                    p.push(e ? [n, c[n]] : c[n]);
                        return p;
                    };
                };
            e.exports = { entries: c(!0), values: c(!1) };
        },
        function (e, t, n) {
            'use strict';
            var o = n(0),
                r = n(69).includes,
                i = n(61);
            o(
                {
                    target: 'Array',
                    proto: !0,
                    forced: !n(29)('indexOf', { ACCESSORS: !0, 1: 0 }),
                },
                {
                    includes: function (e) {
                        return r(
                            this,
                            e,
                            arguments.length > 1 ? arguments[1] : void 0
                        );
                    },
                }
            ),
                i('includes');
        },
        function (e, t, n) {
            'use strict';
            var o = n(0),
                r = n(92),
                i = n(26);
            o(
                { target: 'String', proto: !0, forced: !n(93)('includes') },
                {
                    includes: function (e) {
                        return !!~String(i(this)).indexOf(
                            r(e),
                            arguments.length > 1 ? arguments[1] : void 0
                        );
                    },
                }
            );
        },
        function (e, t, n) {
            'use strict';
            var o,
                r,
                i,
                a,
                c = n(0),
                s = n(33),
                l = n(3),
                u = n(34),
                p = n(179),
                d = n(22),
                f = n(121),
                m = n(46),
                v = n(82),
                y = n(4),
                h = n(35),
                b = n(81),
                g = n(28),
                k = n(67),
                _ = n(80),
                x = n(76),
                w = n(124),
                S = n(130).set,
                j = n(180),
                O = n(181),
                A = n(182),
                z = n(132),
                P = n(183),
                E = n(32),
                C = n(57),
                D = n(2),
                T = n(73),
                I = D('species'),
                R = 'Promise',
                N = E.get,
                M = E.set,
                q = E.getterFor(R),
                U = p,
                L = l.TypeError,
                F = l.document,
                H = l.process,
                W = u('fetch'),
                B = z.f,
                K = B,
                V = 'process' == g(H),
                $ = !!(F && F.createEvent && l.dispatchEvent),
                G = C(R, function () {
                    if (!(k(U) !== String(U))) {
                        if (66 === T) return !0;
                        if (!V && 'function' != typeof PromiseRejectionEvent)
                            return !0;
                    }
                    if (s && !U.prototype.finally) return !0;
                    if (T >= 51 && /native code/.test(U)) return !1;
                    var e = U.resolve(1),
                        t = function (e) {
                            e(
                                function () {},
                                function () {}
                            );
                        };
                    return (
                        ((e.constructor = {})[I] = t),
                        !(e.then(function () {}) instanceof t)
                    );
                }),
                Z =
                    G ||
                    !x(function (e) {
                        U.all(e).catch(function () {});
                    }),
                Q = function (e) {
                    var t;
                    return !(!y(e) || 'function' != typeof (t = e.then)) && t;
                },
                Y = function (e, t, n) {
                    if (!t.notified) {
                        t.notified = !0;
                        var o = t.reactions;
                        j(function () {
                            for (
                                var r = t.value, i = 1 == t.state, a = 0;
                                o.length > a;

                            ) {
                                var c,
                                    s,
                                    l,
                                    u = o[a++],
                                    p = i ? u.ok : u.fail,
                                    d = u.resolve,
                                    f = u.reject,
                                    m = u.domain;
                                try {
                                    p
                                        ? (i ||
                                              (2 === t.rejection && te(e, t),
                                              (t.rejection = 1)),
                                          !0 === p
                                              ? (c = r)
                                              : (m && m.enter(),
                                                (c = p(r)),
                                                m && (m.exit(), (l = !0))),
                                          c === u.promise
                                              ? f(L('Promise-chain cycle'))
                                              : (s = Q(c))
                                              ? s.call(c, d, f)
                                              : d(c))
                                        : f(r);
                                } catch (e) {
                                    m && !l && m.exit(), f(e);
                                }
                            }
                            (t.reactions = []),
                                (t.notified = !1),
                                n && !t.rejection && X(e, t);
                        });
                    }
                },
                J = function (e, t, n) {
                    var o, r;
                    $
                        ? (((o = F.createEvent('Event')).promise = t),
                          (o.reason = n),
                          o.initEvent(e, !1, !0),
                          l.dispatchEvent(o))
                        : (o = { promise: t, reason: n }),
                        (r = l['on' + e])
                            ? r(o)
                            : 'unhandledrejection' === e &&
                              A('Unhandled promise rejection', n);
                },
                X = function (e, t) {
                    S.call(l, function () {
                        var n,
                            o = t.value;
                        if (
                            ee(t) &&
                            ((n = P(function () {
                                V
                                    ? H.emit('unhandledRejection', o, e)
                                    : J('unhandledrejection', e, o);
                            })),
                            (t.rejection = V || ee(t) ? 2 : 1),
                            n.error)
                        )
                            throw n.value;
                    });
                },
                ee = function (e) {
                    return 1 !== e.rejection && !e.parent;
                },
                te = function (e, t) {
                    S.call(l, function () {
                        V
                            ? H.emit('rejectionHandled', e)
                            : J('rejectionhandled', e, t.value);
                    });
                },
                ne = function (e, t, n, o) {
                    return function (r) {
                        e(t, n, r, o);
                    };
                },
                oe = function (e, t, n, o) {
                    t.done ||
                        ((t.done = !0),
                        o && (t = o),
                        (t.value = n),
                        (t.state = 2),
                        Y(e, t, !0));
                },
                re = function (e, t, n, o) {
                    if (!t.done) {
                        (t.done = !0), o && (t = o);
                        try {
                            if (e === n)
                                throw L("Promise can't be resolved itself");
                            var r = Q(n);
                            r
                                ? j(function () {
                                      var o = { done: !1 };
                                      try {
                                          r.call(
                                              n,
                                              ne(re, e, o, t),
                                              ne(oe, e, o, t)
                                          );
                                      } catch (n) {
                                          oe(e, o, n, t);
                                      }
                                  })
                                : ((t.value = n), (t.state = 1), Y(e, t, !1));
                        } catch (n) {
                            oe(e, { done: !1 }, n, t);
                        }
                    }
                };
            G &&
                ((U = function (e) {
                    b(this, U, R), h(e), o.call(this);
                    var t = N(this);
                    try {
                        e(ne(re, this, t), ne(oe, this, t));
                    } catch (e) {
                        oe(this, t, e);
                    }
                }),
                ((o = function (e) {
                    M(this, {
                        type: R,
                        done: !1,
                        notified: !1,
                        parent: !1,
                        reactions: [],
                        rejection: !1,
                        state: 0,
                        value: void 0,
                    });
                }).prototype = f(U.prototype, {
                    then: function (e, t) {
                        var n = q(this),
                            o = B(w(this, U));
                        return (
                            (o.ok = 'function' != typeof e || e),
                            (o.fail = 'function' == typeof t && t),
                            (o.domain = V ? H.domain : void 0),
                            (n.parent = !0),
                            n.reactions.push(o),
                            0 != n.state && Y(this, n, !1),
                            o.promise
                        );
                    },
                    catch: function (e) {
                        return this.then(void 0, e);
                    },
                })),
                (r = function () {
                    var e = new o(),
                        t = N(e);
                    (this.promise = e),
                        (this.resolve = ne(re, e, t)),
                        (this.reject = ne(oe, e, t));
                }),
                (z.f = B =
                    function (e) {
                        return e === U || e === i ? new r(e) : K(e);
                    }),
                s ||
                    'function' != typeof p ||
                    ((a = p.prototype.then),
                    d(
                        p.prototype,
                        'then',
                        function (e, t) {
                            var n = this;
                            return new U(function (e, t) {
                                a.call(n, e, t);
                            }).then(e, t);
                        },
                        { unsafe: !0 }
                    ),
                    'function' == typeof W &&
                        c(
                            { global: !0, enumerable: !0, forced: !0 },
                            {
                                fetch: function (e) {
                                    return O(U, W.apply(l, arguments));
                                },
                            }
                        ))),
                c({ global: !0, wrap: !0, forced: G }, { Promise: U }),
                m(U, R, !1, !0),
                v(R),
                (i = u(R)),
                c(
                    { target: R, stat: !0, forced: G },
                    {
                        reject: function (e) {
                            var t = B(this);
                            return t.reject.call(void 0, e), t.promise;
                        },
                    }
                ),
                c(
                    { target: R, stat: !0, forced: s || G },
                    {
                        resolve: function (e) {
                            return O(s && this === i ? U : this, e);
                        },
                    }
                ),
                c(
                    { target: R, stat: !0, forced: Z },
                    {
                        all: function (e) {
                            var t = this,
                                n = B(t),
                                o = n.resolve,
                                r = n.reject,
                                i = P(function () {
                                    var n = h(t.resolve),
                                        i = [],
                                        a = 0,
                                        c = 1;
                                    _(e, function (e) {
                                        var s = a++,
                                            l = !1;
                                        i.push(void 0),
                                            c++,
                                            n.call(t, e).then(function (e) {
                                                l ||
                                                    ((l = !0),
                                                    (i[s] = e),
                                                    --c || o(i));
                                            }, r);
                                    }),
                                        --c || o(i);
                                });
                            return i.error && r(i.value), n.promise;
                        },
                        race: function (e) {
                            var t = this,
                                n = B(t),
                                o = n.reject,
                                r = P(function () {
                                    var r = h(t.resolve);
                                    _(e, function (e) {
                                        r.call(t, e).then(n.resolve, o);
                                    });
                                });
                            return r.error && o(r.value), n.promise;
                        },
                    }
                );
        },
        function (e, t, n) {
            var o = n(3);
            e.exports = o.Promise;
        },
        function (e, t, n) {
            var o,
                r,
                i,
                a,
                c,
                s,
                l,
                u,
                p = n(3),
                d = n(27).f,
                f = n(28),
                m = n(130).set,
                v = n(131),
                y = p.MutationObserver || p.WebKitMutationObserver,
                h = p.process,
                b = p.Promise,
                g = 'process' == f(h),
                k = d(p, 'queueMicrotask'),
                _ = k && k.value;
            _ ||
                ((o = function () {
                    var e, t;
                    for (g && (e = h.domain) && e.exit(); r; ) {
                        (t = r.fn), (r = r.next);
                        try {
                            t();
                        } catch (e) {
                            throw (r ? a() : (i = void 0), e);
                        }
                    }
                    (i = void 0), e && e.enter();
                }),
                g
                    ? (a = function () {
                          h.nextTick(o);
                      })
                    : y && !v
                    ? ((c = !0),
                      (s = document.createTextNode('')),
                      new y(o).observe(s, { characterData: !0 }),
                      (a = function () {
                          s.data = c = !c;
                      }))
                    : b && b.resolve
                    ? ((l = b.resolve(void 0)),
                      (u = l.then),
                      (a = function () {
                          u.call(l, o);
                      }))
                    : (a = function () {
                          m.call(p, o);
                      })),
                (e.exports =
                    _ ||
                    function (e) {
                        var t = { fn: e, next: void 0 };
                        i && (i.next = t), r || ((r = t), a()), (i = t);
                    });
        },
        function (e, t, n) {
            var o = n(9),
                r = n(4),
                i = n(132);
            e.exports = function (e, t) {
                if ((o(e), r(t) && t.constructor === e)) return t;
                var n = i.f(e);
                return (0, n.resolve)(t), n.promise;
            };
        },
        function (e, t, n) {
            var o = n(3);
            e.exports = function (e, t) {
                var n = o.console;
                n &&
                    n.error &&
                    (1 === arguments.length ? n.error(e) : n.error(e, t));
            };
        },
        function (e, t) {
            e.exports = function (e) {
                try {
                    return { error: !1, value: e() };
                } catch (e) {
                    return { error: !0, value: e };
                }
            };
        },
        function (e, t, n) {
            var o = n(185),
                r = n(186);
            'string' == typeof (r = r.__esModule ? r.default : r) &&
                (r = [[e.i, r, '']]);
            var i = {
                attributes: { 'data-context': 'klaro-styles' },
                insert: 'head',
                singleton: !1,
            };
            o(r, i);
            e.exports = r.locals || {};
        },
        function (e, t, n) {
            'use strict';
            var o,
                r = function () {
                    return (
                        void 0 === o &&
                            (o = Boolean(
                                window &&
                                    document &&
                                    document.all &&
                                    !window.atob
                            )),
                        o
                    );
                },
                i = (function () {
                    var e = {};
                    return function (t) {
                        if (void 0 === e[t]) {
                            var n = document.querySelector(t);
                            if (
                                window.HTMLIFrameElement &&
                                n instanceof window.HTMLIFrameElement
                            )
                                try {
                                    n = n.contentDocument.head;
                                } catch (e) {
                                    n = null;
                                }
                            e[t] = n;
                        }
                        return e[t];
                    };
                })(),
                a = [];
            function c(e) {
                for (var t = -1, n = 0; n < a.length; n++)
                    if (a[n].identifier === e) {
                        t = n;
                        break;
                    }
                return t;
            }
            function s(e, t) {
                for (var n = {}, o = [], r = 0; r < e.length; r++) {
                    var i = e[r],
                        s = t.base ? i[0] + t.base : i[0],
                        l = n[s] || 0,
                        u = ''.concat(s, ' ').concat(l);
                    n[s] = l + 1;
                    var p = c(u),
                        d = { css: i[1], media: i[2], sourceMap: i[3] };
                    -1 !== p
                        ? (a[p].references++, a[p].updater(d))
                        : a.push({
                              identifier: u,
                              updater: y(d, t),
                              references: 1,
                          }),
                        o.push(u);
                }
                return o;
            }
            function l(e) {
                var t = document.createElement('style'),
                    o = e.attributes || {};
                if (void 0 === o.nonce) {
                    var r = n.nc;
                    r && (o.nonce = r);
                }
                if (
                    (Object.keys(o).forEach(function (e) {
                        t.setAttribute(e, o[e]);
                    }),
                    'function' == typeof e.insert)
                )
                    e.insert(t);
                else {
                    var a = i(e.insert || 'head');
                    if (!a)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        );
                    a.appendChild(t);
                }
                return t;
            }
            var u,
                p =
                    ((u = []),
                    function (e, t) {
                        return (u[e] = t), u.filter(Boolean).join('\n');
                    });
            function d(e, t, n, o) {
                var r = n
                    ? ''
                    : o.media
                    ? '@media '.concat(o.media, ' {').concat(o.css, '}')
                    : o.css;
                if (e.styleSheet) e.styleSheet.cssText = p(t, r);
                else {
                    var i = document.createTextNode(r),
                        a = e.childNodes;
                    a[t] && e.removeChild(a[t]),
                        a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
                }
            }
            function f(e, t, n) {
                var o = n.css,
                    r = n.media,
                    i = n.sourceMap;
                if (
                    (r
                        ? e.setAttribute('media', r)
                        : e.removeAttribute('media'),
                    i &&
                        btoa &&
                        (o +=
                            '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                btoa(
                                    unescape(
                                        encodeURIComponent(JSON.stringify(i))
                                    )
                                ),
                                ' */'
                            )),
                    e.styleSheet)
                )
                    e.styleSheet.cssText = o;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(o));
                }
            }
            var m = null,
                v = 0;
            function y(e, t) {
                var n, o, r;
                if (t.singleton) {
                    var i = v++;
                    (n = m || (m = l(t))),
                        (o = d.bind(null, n, i, !1)),
                        (r = d.bind(null, n, i, !0));
                } else
                    (n = l(t)),
                        (o = f.bind(null, n, t)),
                        (r = function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(n);
                        });
                return (
                    o(e),
                    function (t) {
                        if (t) {
                            if (
                                t.css === e.css &&
                                t.media === e.media &&
                                t.sourceMap === e.sourceMap
                            )
                                return;
                            o((e = t));
                        } else r();
                    }
                );
            }
            e.exports = function (e, t) {
                (t = t || {}).singleton ||
                    'boolean' == typeof t.singleton ||
                    (t.singleton = r());
                var n = s((e = e || []), t);
                return function (e) {
                    if (
                        ((e = e || []),
                        '[object Array]' === Object.prototype.toString.call(e))
                    ) {
                        for (var o = 0; o < n.length; o++) {
                            var r = c(n[o]);
                            a[r].references--;
                        }
                        for (var i = s(e, t), l = 0; l < n.length; l++) {
                            var u = c(n[l]);
                            0 === a[u].references &&
                                (a[u].updater(), a.splice(u, 1));
                        }
                        n = i;
                    }
                };
            };
        },
        function (e, t, n) {
            (t = n(187)(!1)).push([
                e.i,
                ".klaro{font-family:inherit;font-family:var(--font-family, inherit);font-size:14px;font-size:var(--font-size, 14px)}.klaro button{font-family:inherit;font-family:var(--font-family, inherit);font-size:14px;font-size:var(--font-size, 14px)}.klaro.cm-as-context-notice{height:100%;padding-bottom:12px;padding-top:12px}.klaro .cookie-modal .cm-switch-container,.klaro .context-notice .cm-switch-container,.klaro .cookie-notice .cm-switch-container{border-bottom-style:solid;border-bottom-style:var(--border-style, solid);border-bottom-width:1px;border-bottom-width:var(--border-width, 1px);border-bottom-color:#c8c8c8;border-bottom-color:var(--light2, #c8c8c8);display:block;position:relative;padding:10px;padding-left:66px;line-height:20px;vertical-align:middle;min-height:40px}.klaro .cookie-modal .cm-switch-container:last-child,.klaro .context-notice .cm-switch-container:last-child,.klaro .cookie-notice .cm-switch-container:last-child{border-bottom:0}.klaro .cookie-modal .cm-switch-container:first-child,.klaro .context-notice .cm-switch-container:first-child,.klaro .cookie-notice .cm-switch-container:first-child{margin-top:0}.klaro .cookie-modal .cm-switch-container p,.klaro .context-notice .cm-switch-container p,.klaro .cookie-notice .cm-switch-container p{margin-top:0}.klaro .cookie-modal .cm-switch,.klaro .context-notice .cm-switch,.klaro .cookie-notice .cm-switch{position:relative;display:inline-block;width:50px;height:30px}.klaro .cookie-modal .cm-list-input:checked+.cm-list-label .slider,.klaro .context-notice .cm-list-input:checked+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input:checked+.cm-list-label .slider{background-color:#1a936f;background-color:var(--green1, #1a936f)}.klaro .cookie-modal .cm-list-input.half-checked:checked+.cm-list-label .slider,.klaro .context-notice .cm-list-input.half-checked:checked+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input.half-checked:checked+.cm-list-label .slider{background-color:#1a936f;background-color:var(--green1, #1a936f);opacity:0.6}.klaro .cookie-modal .cm-list-input.half-checked:checked+.cm-list-label .slider::before,.klaro .context-notice .cm-list-input.half-checked:checked+.cm-list-label .slider::before,.klaro .cookie-notice .cm-list-input.half-checked:checked+.cm-list-label .slider::before{transform:translateX(10px)}.klaro .cookie-modal .cm-list-input.only-required+.cm-list-label .slider,.klaro .context-notice .cm-list-input.only-required+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input.only-required+.cm-list-label .slider{background-color:#24cc9a;background-color:var(--green2, #24cc9a);opacity:0.8}.klaro .cookie-modal .cm-list-input.only-required+.cm-list-label .slider::before,.klaro .context-notice .cm-list-input.only-required+.cm-list-label .slider::before,.klaro .cookie-notice .cm-list-input.only-required+.cm-list-label .slider::before{transform:translateX(10px)}.klaro .cookie-modal .cm-list-input.required:checked+.cm-list-label .slider,.klaro .context-notice .cm-list-input.required:checked+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input.required:checked+.cm-list-label .slider{background-color:#24cc9a;background-color:var(--green2, #24cc9a);opacity:0.8;cursor:not-allowed}.klaro .cookie-modal .slider,.klaro .context-notice .slider,.klaro .cookie-notice .slider{box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19)}.klaro .cookie-modal .cm-list-input,.klaro .context-notice .cm-list-input,.klaro .cookie-notice .cm-list-input{position:absolute;top:0;left:0;opacity:0;width:50px;height:30px}.klaro .cookie-modal .cm-list-title,.klaro .context-notice .cm-list-title,.klaro .cookie-notice .cm-list-title{font-size:0.9em;font-weight:600}.klaro .cookie-modal .cm-list-description,.klaro .context-notice .cm-list-description,.klaro .cookie-notice .cm-list-description{color:#7c7c7c;color:var(--dark3, #7c7c7c);font-size:0.9em;padding-top:4px}.klaro .cookie-modal .cm-list-label .cm-switch,.klaro .context-notice .cm-list-label .cm-switch,.klaro .cookie-notice .cm-list-label .cm-switch{position:absolute;left:0}.klaro .cookie-modal .cm-list-label .slider,.klaro .context-notice .cm-list-label .slider,.klaro .cookie-notice .cm-list-label .slider{background-color:#f2f2f2;background-color:var(--white2, #f2f2f2);position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;transition:0.4s;width:50px;display:inline-block}.klaro .cookie-modal .cm-list-label .slider::before,.klaro .context-notice .cm-list-label .slider::before,.klaro .cookie-notice .cm-list-label .slider::before{background-color:#e6e6e6;background-color:var(--white3, #e6e6e6);position:absolute;content:'';height:20px;width:20px;left:5px;bottom:5px;transition:0.4s}.klaro .cookie-modal .cm-list-label .slider.round,.klaro .context-notice .cm-list-label .slider.round,.klaro .cookie-notice .cm-list-label .slider.round{border-radius:30px}.klaro .cookie-modal .cm-list-label .slider.round::before,.klaro .context-notice .cm-list-label .slider.round::before,.klaro .cookie-notice .cm-list-label .slider.round::before{border-radius:50%}.klaro .cookie-modal .cm-list-label input:focus+.slider,.klaro .context-notice .cm-list-label input:focus+.slider,.klaro .cookie-notice .cm-list-label input:focus+.slider{box-shadow-color:#48dfb2;box-shadow-color:var(--green3, #48dfb2);box-shadow:0 0 1px var(color, green3)}.klaro .cookie-modal .cm-list-label input:checked+.slider::before,.klaro .context-notice .cm-list-label input:checked+.slider::before,.klaro .cookie-notice .cm-list-label input:checked+.slider::before{transform:translateX(20px)}.klaro .cookie-modal .cm-list-input:focus+.cm-list-label .slider,.klaro .context-notice .cm-list-input:focus+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input:focus+.cm-list-label .slider{box-shadow:0 4px 6px 0 rgba(125,125,125,0.2),5px 5px 10px 0 rgba(125,125,125,0.19)}.klaro .cookie-modal .cm-list-input:checked+.cm-list-label .slider::before,.klaro .context-notice .cm-list-input:checked+.cm-list-label .slider::before,.klaro .cookie-notice .cm-list-input:checked+.cm-list-label .slider::before{transform:translateX(20px)}.klaro .cookie-modal .slider,.klaro .context-notice .slider,.klaro .cookie-notice .slider{box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19)}.klaro .cookie-modal a,.klaro .context-notice a,.klaro .cookie-notice a{color:#1a936f;color:var(--green1, #1a936f);text-decoration:none}.klaro .cookie-modal p,.klaro .cookie-modal strong,.klaro .cookie-modal h1,.klaro .cookie-modal h2,.klaro .cookie-modal ul,.klaro .cookie-modal li,.klaro .context-notice p,.klaro .context-notice strong,.klaro .context-notice h1,.klaro .context-notice h2,.klaro .context-notice ul,.klaro .context-notice li,.klaro .cookie-notice p,.klaro .cookie-notice strong,.klaro .cookie-notice h1,.klaro .cookie-notice h2,.klaro .cookie-notice ul,.klaro .cookie-notice li{color:#fafafa;color:var(--light1, #fafafa)}.klaro .cookie-modal p,.klaro .cookie-modal h1,.klaro .cookie-modal h2,.klaro .cookie-modal ul,.klaro .cookie-modal li,.klaro .context-notice p,.klaro .context-notice h1,.klaro .context-notice h2,.klaro .context-notice ul,.klaro .context-notice li,.klaro .cookie-notice p,.klaro .cookie-notice h1,.klaro .cookie-notice h2,.klaro .cookie-notice ul,.klaro .cookie-notice li{display:block;text-align:left;margin:0;padding:0;margin-top:0.7em}.klaro .cookie-modal h1,.klaro .cookie-modal h2,.klaro .cookie-modal h3,.klaro .cookie-modal h4,.klaro .cookie-modal h5,.klaro .cookie-modal h6,.klaro .context-notice h1,.klaro .context-notice h2,.klaro .context-notice h3,.klaro .context-notice h4,.klaro .context-notice h5,.klaro .context-notice h6,.klaro .cookie-notice h1,.klaro .cookie-notice h2,.klaro .cookie-notice h3,.klaro .cookie-notice h4,.klaro .cookie-notice h5,.klaro .cookie-notice h6{font-family:inherit;font-family:var(--title-font-family, inherit)}.klaro .cookie-modal .cm-link,.klaro .context-notice .cm-link,.klaro .cookie-notice .cm-link{margin-right:0.5em;vertical-align:middle}.klaro .cookie-modal .cm-btn,.klaro .context-notice .cm-btn,.klaro .cookie-notice .cm-btn{color:#fff;color:var(--button-text-color, #fff);background-color:#5c5c5c;background-color:var(--dark2, #5c5c5c);border-radius:4px;border-radius:var(--border-radius, 4px);padding:6px 10px;margin-right:.5em;border-style:none;padding:0.4em;font-size:1em;cursor:pointer}.klaro .cookie-modal .cm-btn:disabled,.klaro .context-notice .cm-btn:disabled,.klaro .cookie-notice .cm-btn:disabled{opacity:0.5}.klaro .cookie-modal .cm-btn.cm-btn-close,.klaro .context-notice .cm-btn.cm-btn-close,.klaro .cookie-notice .cm-btn.cm-btn-close{background-color:#c8c8c8;background-color:var(--light2, #c8c8c8)}.klaro .cookie-modal .cm-btn.cm-btn-success,.klaro .context-notice .cm-btn.cm-btn-success,.klaro .cookie-notice .cm-btn.cm-btn-success{background-color:#1a936f;background-color:var(--green1, #1a936f)}.klaro .cookie-modal .cm-btn.cm-btn-success-var,.klaro .context-notice .cm-btn.cm-btn-success-var,.klaro .cookie-notice .cm-btn.cm-btn-success-var{background-color:#24cc9a;background-color:var(--green2, #24cc9a)}.klaro .cookie-modal .cm-btn.cm-btn-info,.klaro .context-notice .cm-btn.cm-btn-info,.klaro .cookie-notice .cm-btn.cm-btn-info{background-color:#2581c4;background-color:var(--blue1, #2581c4)}.klaro .context-notice{border-radius:4px;border-radius:var(--border-radius, 4px);border-style:solid;border-style:var(--border-style, solid);border-width:1px;border-width:var(--border-width, 1px);border-color:#c8c8c8;border-color:var(--light2, #c8c8c8);background-color:#fafafa;background-color:var(--light1, #fafafa);display:flex;flex-direction:column;flex-wrap:wrap;align-items:center;justify-content:center;padding:12px;height:100%}.klaro .context-notice.cm-dark{background-color:#333;background-color:var(--dark1, #333);border-color:#5c5c5c;border-color:var(--dark2, #5c5c5c)}.klaro .context-notice.cm-dark p{color:#fafafa;color:var(--light1, #fafafa)}.klaro .context-notice.cm-dark p a{color:#459cdc;color:var(--blue2, #459cdc)}.klaro .context-notice p{color:#333;color:var(--dark1, #333);flex-grow:0;text-align:center;padding-top:0;margin-top:0}.klaro .context-notice p a{color:#24cc9a;color:var(--green2, #24cc9a)}.klaro .context-notice p.cm-buttons{margin-top:12px}.klaro .cookie-modal{width:100%;height:100%;position:fixed;overflow:hidden;left:0;top:0;z-index:1000}.klaro .cookie-modal.cm-embedded{position:relative;height:inherit;width:inherit;left:inherit;right:inherit;z-index:0}.klaro .cookie-modal.cm-embedded .cm-modal.cm-klaro{position:relative;transform:none}.klaro .cookie-modal .cm-bg{background:rgba(0,0,0,0.5);height:100%;width:100%;position:fixed;top:0;left:0}.klaro .cookie-modal .cm-modal.cm-klaro{background-color:#333;background-color:var(--dark1, #333);color:#fafafa;color:var(--light1, #fafafa);z-index:1001;box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19);width:100%;max-height:98%;top:50%;transform:translateY(-50%);position:fixed;overflow:auto}@media (min-width: 660px){.klaro .cookie-modal .cm-modal.cm-klaro{border-radius:4px;border-radius:var(--border-radius, 4px);position:relative;margin:0 auto;max-width:640px;height:auto;width:auto}}.klaro .cookie-modal .cm-modal .hide{border-style:none;background:none;cursor:pointer;position:absolute;top:20px;right:20px;z-index:1}.klaro .cookie-modal .cm-modal .hide svg{stroke:#fafafa;stroke:var(--light1, #fafafa)}.klaro .cookie-modal .cm-modal .cm-footer{border-top-color:#5c5c5c;border-top-color:var(--dark2, #5c5c5c);border-top-width:1px;border-top-width:var(--border-width, 1px);border-top-style:solid;border-top-style:var(--border-style, solid);padding:1em}.klaro .cookie-modal .cm-modal .cm-footer-buttons{display:flex;flex-flow:row;justify-content:space-between}.klaro .cookie-modal .cm-modal .cm-footer .cm-powered-by{font-size:0.8em;padding-top:4px;text-align:right;padding-right:8px}.klaro .cookie-modal .cm-modal .cm-footer .cm-powered-by a{color:#5c5c5c;color:var(--dark2, #5c5c5c)}.klaro .cookie-modal .cm-modal .cm-header{border-bottom-width:1px;border-bottom-width:var(--border-width, 1px);border-bottom-style:solid;border-bottom-style:var(--border-style, solid);border-bottom-color:#5c5c5c;border-bottom-color:var(--dark2, #5c5c5c);padding:1em;padding-right:24px}.klaro .cookie-modal .cm-modal .cm-header h1{margin:0;font-size:2em;display:block}.klaro .cookie-modal .cm-modal .cm-header h1.title{padding-right:20px}.klaro .cookie-modal .cm-modal .cm-body{padding:1em}.klaro .cookie-modal .cm-modal .cm-body ul{display:block}.klaro .cookie-modal .cm-modal .cm-body span{display:inline-block;width:auto}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes{padding:0;margin:0}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose .cm-services .cm-caret,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose .cm-services .cm-caret{color:#a0a0a0;color:var(--light3, #a0a0a0)}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose .cm-services .cm-content,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose .cm-services .cm-content{margin-left:-40px;display:none}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose .cm-services .cm-content.expanded,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose .cm-services .cm-content.expanded{margin-top:10px;display:block}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose{position:relative;line-height:20px;vertical-align:middle;padding-left:60px;min-height:40px}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose:first-child{margin-top:0}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose p{margin-top:0}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service p.purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose p.purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service p.purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose p.purposes{color:#a0a0a0;color:var(--light3, #a0a0a0);font-size:0.8em}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service.cm-toggle-all,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose.cm-toggle-all,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service.cm-toggle-all,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose.cm-toggle-all{border-top-width:1px;border-top-width:var(--border-width, 1px);border-top-style:solid;border-top-style:var(--border-style, solid);border-top-color:#5c5c5c;border-top-color:var(--dark2, #5c5c5c);padding-top:1em}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service span.cm-list-title,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose span.cm-list-title,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service span.cm-list-title,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose span.cm-list-title{font-weight:600}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service span.cm-required,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose span.cm-required,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service span.cm-required,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose span.cm-required{color:#5c5c5c;color:var(--dark2, #5c5c5c);padding-left:0.2em;font-size:0.8em}.klaro .cookie-notice:not(.cookie-modal-notice){background-color:#333;background-color:var(--dark1, #333);z-index:999;position:fixed;width:100%;bottom:0;right:0}@media (min-width: 1024px){.klaro .cookie-notice:not(.cookie-modal-notice){border-radius:4px;border-radius:var(--border-radius, 4px);position:fixed;position:var(--notice-position, fixed);right:20px;right:var(--notice-right, 20px);left:auto;left:var(--notice-left, auto);bottom:20px;bottom:var(--notice-bottom, 20px);top:auto;top:var(--notice-top, auto);max-width:400px;max-width:var(--notice-max-width, 400px);box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19)}}@media (max-width: 1023px){.klaro .cookie-notice:not(.cookie-modal-notice){border-style:none;border-radius:0}}.klaro .cookie-notice:not(.cookie-modal-notice).cn-embedded{position:relative;height:inherit;width:inherit;left:inherit;right:inherit;bottom:inherit;z-index:0}.klaro .cookie-notice:not(.cookie-modal-notice).cn-embedded .cn-body{padding-top:0.5em}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body{margin-bottom:0;margin-right:0;bottom:0;padding:1em;padding-top:0}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body p{margin-bottom:0.5em}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body p.cn-changes{text-decoration:underline}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-learn-more{display:inline-block;flex-grow:1}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons{display:inline-block;margin-top:-0.5em}@media (max-width: 384px){.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons{width:100%}}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons button.cm-btn{margin-top:0.5em}@media (max-width: 384px){.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons button.cm-btn{width:calc(50% - .5em)}}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-ok{margin-top:-0.5em;display:flex;flex-flow:row;flex-wrap:wrap;justify-content:right;align-items:baseline}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-ok a,.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-ok div{margin-top:0.5em}.klaro .cookie-modal-notice{background-color:#333;background-color:var(--dark1, #333);color:#fafafa;color:var(--light1, #fafafa);z-index:1001;box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19);width:100%;max-height:98%;top:50%;transform:translateY(-50%);position:fixed;overflow:auto;padding:1em;padding-top:0.2em}@media (min-width: 400px){.klaro .cookie-modal-notice{border-radius:4px;border-radius:var(--border-radius, 4px);position:relative;margin:0 auto;max-width:400px;height:auto;width:auto}}.klaro .cookie-modal-notice .cn-ok{display:flex;flex-flow:row;justify-content:space-between;align-items:center;margin-top:1em}.klaro .cookie-notice-hidden{display:none !important}\n",
                '',
            ]),
                (e.exports = t);
        },
        function (e, t, n) {
            'use strict';
            e.exports = function (e) {
                var t = [];
                return (
                    (t.toString = function () {
                        return this.map(function (t) {
                            var n = (function (e, t) {
                                var n = e[1] || '',
                                    o = e[3];
                                if (!o) return n;
                                if (t && 'function' == typeof btoa) {
                                    var r =
                                            ((a = o),
                                            (c = btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON.stringify(a)
                                                    )
                                                )
                                            )),
                                            (s =
                                                'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                                                    c
                                                )),
                                            '/*# '.concat(s, ' */')),
                                        i = o.sources.map(function (e) {
                                            return '/*# sourceURL='
                                                .concat(o.sourceRoot || '')
                                                .concat(e, ' */');
                                        });
                                    return [n].concat(i).concat([r]).join('\n');
                                }
                                var a, c, s;
                                return [n].join('\n');
                            })(t, e);
                            return t[2]
                                ? '@media '.concat(t[2], ' {').concat(n, '}')
                                : n;
                        }).join('');
                    }),
                    (t.i = function (e, n, o) {
                        'string' == typeof e && (e = [[null, e, '']]);
                        var r = {};
                        if (o)
                            for (var i = 0; i < this.length; i++) {
                                var a = this[i][0];
                                null != a && (r[a] = !0);
                            }
                        for (var c = 0; c < e.length; c++) {
                            var s = [].concat(e[c]);
                            (o && r[s[0]]) ||
                                (n &&
                                    (s[2]
                                        ? (s[2] = ''
                                              .concat(n, ' and ')
                                              .concat(s[2]))
                                        : (s[2] = n)),
                                t.push(s));
                        }
                    }),
                    t
                );
            };
        },
        function (e, t, n) {
            'use strict';
            n.r(t),
                n.d(t, 'updateConfig', function () {
                    return wt;
                }),
                n.d(t, 'getElementID', function () {
                    return Qn;
                }),
                n.d(t, 'getElement', function () {
                    return Yn;
                }),
                n.d(t, 'addEventListener', function () {
                    return Jn;
                }),
                n.d(t, 'getConfigTranslations', function () {
                    return eo;
                }),
                n.d(t, 'render', function () {
                    return no;
                }),
                n.d(t, 'renderContextualConsentNotices', function () {
                    return oo;
                }),
                n.d(t, 'validateConfig', function () {
                    return io;
                }),
                n.d(t, 'setup', function () {
                    return ao;
                }),
                n.d(t, 'show', function () {
                    return co;
                }),
                n.d(t, 'resetManagers', function () {
                    return lo;
                }),
                n.d(t, 'getManager', function () {
                    return uo;
                }),
                n.d(t, 'version', function () {
                    return po;
                }),
                n.d(t, 'language', function () {
                    return Ae;
                }),
                n.d(t, 'defaultConfig', function () {
                    return qn;
                }),
                n.d(t, 'defaultTranslations', function () {
                    return $n;
                });
            n(5),
                n(10),
                n(11),
                n(40),
                n(41),
                n(162),
                n(74),
                n(24),
                n(6),
                n(25),
                n(20),
                n(17),
                n(79),
                n(83),
                n(84),
                n(36),
                n(7),
                n(37),
                n(12),
                n(13),
                n(86),
                n(91),
                n(14);
            var o,
                r,
                i,
                a,
                c,
                s = {},
                l = [],
                u =
                    /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
            function p(e, t) {
                for (var n in t) e[n] = t[n];
                return e;
            }
            function d(e) {
                var t = e.parentNode;
                t && t.removeChild(e);
            }
            function f(e, t, n) {
                var o,
                    r = arguments,
                    i = {};
                for (o in t) 'key' !== o && 'ref' !== o && (i[o] = t[o]);
                if (arguments.length > 3)
                    for (n = [n], o = 3; o < arguments.length; o++)
                        n.push(r[o]);
                if (
                    (null != n && (i.children = n),
                    'function' == typeof e && null != e.defaultProps)
                )
                    for (o in e.defaultProps)
                        void 0 === i[o] && (i[o] = e.defaultProps[o]);
                return m(e, i, t && t.key, t && t.ref, null);
            }
            function m(e, t, n, r, i) {
                var a = {
                    type: e,
                    props: t,
                    key: n,
                    ref: r,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    constructor: void 0,
                    __v: i,
                };
                return null == i && (a.__v = a), o.vnode && o.vnode(a), a;
            }
            function v(e) {
                return e.children;
            }
            function y(e, t) {
                (this.props = e), (this.context = t);
            }
            function h(e, t) {
                if (null == t)
                    return e.__ ? h(e.__, e.__.__k.indexOf(e) + 1) : null;
                for (var n; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
                return 'function' == typeof e.type ? h(e) : null;
            }
            function b(e) {
                var t, n;
                if (null != (e = e.__) && null != e.__c) {
                    for (
                        e.__e = e.__c.base = null, t = 0;
                        t < e.__k.length;
                        t++
                    )
                        if (null != (n = e.__k[t]) && null != n.__e) {
                            e.__e = e.__c.base = n.__e;
                            break;
                        }
                    return b(e);
                }
            }
            function g(e) {
                ((!e.__d && (e.__d = !0) && r.push(e) && !k.__r++) ||
                    a !== o.debounceRendering) &&
                    ((a = o.debounceRendering) || i)(k);
            }
            function k() {
                for (var e; (k.__r = r.length); )
                    (e = r.sort(function (e, t) {
                        return e.__v.__b - t.__v.__b;
                    })),
                        (r = []),
                        e.some(function (e) {
                            var t, n, o, r, i, a, c;
                            e.__d &&
                                ((a = (i = (t = e).__v).__e),
                                (c = t.__P) &&
                                    ((n = []),
                                    ((o = p({}, i)).__v = o),
                                    (r = z(
                                        c,
                                        i,
                                        o,
                                        t.__n,
                                        void 0 !== c.ownerSVGElement,
                                        null,
                                        n,
                                        null == a ? h(i) : a
                                    )),
                                    P(n, i),
                                    r != a && b(i)));
                        });
            }
            function _(e, t, n, o, r, i, a, c, u, p) {
                var f,
                    y,
                    b,
                    g,
                    k,
                    _,
                    x,
                    S = (o && o.__k) || l,
                    j = S.length;
                for (
                    u == s && (u = null != a ? a[0] : j ? h(o, 0) : null),
                        n.__k = [],
                        f = 0;
                    f < t.length;
                    f++
                )
                    if (
                        null !=
                        (g = n.__k[f] =
                            null == (g = t[f]) || 'boolean' == typeof g
                                ? null
                                : 'string' == typeof g || 'number' == typeof g
                                ? m(null, g, null, null, g)
                                : Array.isArray(g)
                                ? m(v, { children: g }, null, null, null)
                                : null != g.__e || null != g.__c
                                ? m(g.type, g.props, g.key, null, g.__v)
                                : g)
                    ) {
                        if (
                            ((g.__ = n),
                            (g.__b = n.__b + 1),
                            null === (b = S[f]) ||
                                (b && g.key == b.key && g.type === b.type))
                        )
                            S[f] = void 0;
                        else
                            for (y = 0; y < j; y++) {
                                if (
                                    (b = S[y]) &&
                                    g.key == b.key &&
                                    g.type === b.type
                                ) {
                                    S[y] = void 0;
                                    break;
                                }
                                b = null;
                            }
                        (k = z(e, g, (b = b || s), r, i, a, c, u, p)),
                            (y = g.ref) &&
                                b.ref != y &&
                                (x || (x = []),
                                b.ref && x.push(b.ref, null, g),
                                x.push(y, g.__c || k, g)),
                            null != k
                                ? (null == _ && (_ = k),
                                  (u = w(e, g, b, S, a, k, u)),
                                  p || 'option' != n.type
                                      ? 'function' == typeof n.type &&
                                        (n.__d = u)
                                      : (e.value = ''))
                                : u &&
                                  b.__e == u &&
                                  u.parentNode != e &&
                                  (u = h(b));
                    }
                if (((n.__e = _), null != a && 'function' != typeof n.type))
                    for (f = a.length; f--; ) null != a[f] && d(a[f]);
                for (f = j; f--; ) null != S[f] && D(S[f], S[f]);
                if (x) for (f = 0; f < x.length; f++) C(x[f], x[++f], x[++f]);
            }
            function x(e) {
                return null == e || 'boolean' == typeof e
                    ? []
                    : Array.isArray(e)
                    ? l.concat.apply([], e.map(x))
                    : [e];
            }
            function w(e, t, n, o, r, i, a) {
                var c, s, l;
                if (void 0 !== t.__d) (c = t.__d), (t.__d = void 0);
                else if (r == n || i != a || null == i.parentNode)
                    e: if (null == a || a.parentNode !== e)
                        e.appendChild(i), (c = null);
                    else {
                        for (
                            s = a, l = 0;
                            (s = s.nextSibling) && l < o.length;
                            l += 2
                        )
                            if (s == i) break e;
                        e.insertBefore(i, a), (c = a);
                    }
                return void 0 !== c ? c : i.nextSibling;
            }
            function S(e, t, n) {
                '-' === t[0]
                    ? e.setProperty(t, n)
                    : (e[t] =
                          'number' == typeof n && !1 === u.test(t)
                              ? n + 'px'
                              : null == n
                              ? ''
                              : n);
            }
            function j(e, t, n, o, r) {
                var i, a, c, s, l;
                if (
                    (r
                        ? 'className' === t && (t = 'class')
                        : 'class' === t && (t = 'className'),
                    'style' === t)
                )
                    if (((i = e.style), 'string' == typeof n)) i.cssText = n;
                    else {
                        if (
                            ('string' == typeof o &&
                                ((i.cssText = ''), (o = null)),
                            o)
                        )
                            for (s in o) (n && s in n) || S(i, s, '');
                        if (n)
                            for (l in n) (o && n[l] === o[l]) || S(i, l, n[l]);
                    }
                else
                    'o' === t[0] && 'n' === t[1]
                        ? ((a = t !== (t = t.replace(/Capture$/, ''))),
                          (c = t.toLowerCase()),
                          (t = (c in e ? c : t).slice(2)),
                          n
                              ? (o || e.addEventListener(t, O, a),
                                ((e.l || (e.l = {}))[t] = n))
                              : e.removeEventListener(t, O, a))
                        : 'list' !== t &&
                          'tagName' !== t &&
                          'form' !== t &&
                          'type' !== t &&
                          'size' !== t &&
                          'download' !== t &&
                          !r &&
                          t in e
                        ? (e[t] = null == n ? '' : n)
                        : 'function' != typeof n &&
                          'dangerouslySetInnerHTML' !== t &&
                          (t !== (t = t.replace(/^xlink:?/, ''))
                              ? null == n || !1 === n
                                  ? e.removeAttributeNS(
                                        'http://www.w3.org/1999/xlink',
                                        t.toLowerCase()
                                    )
                                  : e.setAttributeNS(
                                        'http://www.w3.org/1999/xlink',
                                        t.toLowerCase(),
                                        n
                                    )
                              : null == n || (!1 === n && !/^ar/.test(t))
                              ? e.removeAttribute(t)
                              : e.setAttribute(t, n));
            }
            function O(e) {
                this.l[e.type](o.event ? o.event(e) : e);
            }
            function A(e, t, n) {
                var o, r;
                for (o = 0; o < e.__k.length; o++)
                    (r = e.__k[o]) &&
                        ((r.__ = e),
                        r.__e &&
                            ('function' == typeof r.type &&
                                r.__k.length > 1 &&
                                A(r, t, n),
                            (t = w(n, r, r, e.__k, null, r.__e, t)),
                            'function' == typeof e.type && (e.__d = t)));
            }
            function z(e, t, n, r, i, a, c, s, l) {
                var u,
                    d,
                    f,
                    m,
                    h,
                    b,
                    g,
                    k,
                    x,
                    w,
                    S,
                    j = t.type;
                if (void 0 !== t.constructor) return null;
                (u = o.__b) && u(t);
                try {
                    e: if ('function' == typeof j) {
                        if (
                            ((k = t.props),
                            (x = (u = j.contextType) && r[u.__c]),
                            (w = u ? (x ? x.props.value : u.__) : r),
                            n.__c
                                ? (g = (d = t.__c = n.__c).__ = d.__E)
                                : ('prototype' in j && j.prototype.render
                                      ? (t.__c = d = new j(k, w))
                                      : ((t.__c = d = new y(k, w)),
                                        (d.constructor = j),
                                        (d.render = T)),
                                  x && x.sub(d),
                                  (d.props = k),
                                  d.state || (d.state = {}),
                                  (d.context = w),
                                  (d.__n = r),
                                  (f = d.__d = !0),
                                  (d.__h = [])),
                            null == d.__s && (d.__s = d.state),
                            null != j.getDerivedStateFromProps &&
                                (d.__s == d.state && (d.__s = p({}, d.__s)),
                                p(d.__s, j.getDerivedStateFromProps(k, d.__s))),
                            (m = d.props),
                            (h = d.state),
                            f)
                        )
                            null == j.getDerivedStateFromProps &&
                                null != d.componentWillMount &&
                                d.componentWillMount(),
                                null != d.componentDidMount &&
                                    d.__h.push(d.componentDidMount);
                        else {
                            if (
                                (null == j.getDerivedStateFromProps &&
                                    k !== m &&
                                    null != d.componentWillReceiveProps &&
                                    d.componentWillReceiveProps(k, w),
                                (!d.__e &&
                                    null != d.shouldComponentUpdate &&
                                    !1 ===
                                        d.shouldComponentUpdate(k, d.__s, w)) ||
                                    t.__v === n.__v)
                            ) {
                                (d.props = k),
                                    (d.state = d.__s),
                                    t.__v !== n.__v && (d.__d = !1),
                                    (d.__v = t),
                                    (t.__e = n.__e),
                                    (t.__k = n.__k),
                                    d.__h.length && c.push(d),
                                    A(t, s, e);
                                break e;
                            }
                            null != d.componentWillUpdate &&
                                d.componentWillUpdate(k, d.__s, w),
                                null != d.componentDidUpdate &&
                                    d.__h.push(function () {
                                        d.componentDidUpdate(m, h, b);
                                    });
                        }
                        (d.context = w),
                            (d.props = k),
                            (d.state = d.__s),
                            (u = o.__r) && u(t),
                            (d.__d = !1),
                            (d.__v = t),
                            (d.__P = e),
                            (u = d.render(d.props, d.state, d.context)),
                            (d.state = d.__s),
                            null != d.getChildContext &&
                                (r = p(p({}, r), d.getChildContext())),
                            f ||
                                null == d.getSnapshotBeforeUpdate ||
                                (b = d.getSnapshotBeforeUpdate(m, h)),
                            (S =
                                null != u && u.type == v && null == u.key
                                    ? u.props.children
                                    : u),
                            _(
                                e,
                                Array.isArray(S) ? S : [S],
                                t,
                                n,
                                r,
                                i,
                                a,
                                c,
                                s,
                                l
                            ),
                            (d.base = t.__e),
                            d.__h.length && c.push(d),
                            g && (d.__E = d.__ = null),
                            (d.__e = !1);
                    } else
                        null == a && t.__v === n.__v
                            ? ((t.__k = n.__k), (t.__e = n.__e))
                            : (t.__e = E(n.__e, t, n, r, i, a, c, l));
                    (u = o.diffed) && u(t);
                } catch (e) {
                    (t.__v = null), o.__e(e, t, n);
                }
                return t.__e;
            }
            function P(e, t) {
                o.__c && o.__c(t, e),
                    e.some(function (t) {
                        try {
                            (e = t.__h),
                                (t.__h = []),
                                e.some(function (e) {
                                    e.call(t);
                                });
                        } catch (e) {
                            o.__e(e, t.__v);
                        }
                    });
            }
            function E(e, t, n, o, r, i, a, c) {
                var u,
                    p,
                    d,
                    f,
                    m,
                    v = n.props,
                    y = t.props;
                if (((r = 'svg' === t.type || r), null != i))
                    for (u = 0; u < i.length; u++)
                        if (
                            null != (p = i[u]) &&
                            ((null === t.type
                                ? 3 === p.nodeType
                                : p.localName === t.type) ||
                                e == p)
                        ) {
                            (e = p), (i[u] = null);
                            break;
                        }
                if (null == e) {
                    if (null === t.type) return document.createTextNode(y);
                    (e = r
                        ? document.createElementNS(
                              'http://www.w3.org/2000/svg',
                              t.type
                          )
                        : document.createElement(t.type, y.is && { is: y.is })),
                        (i = null),
                        (c = !1);
                }
                if (null === t.type) v !== y && e.data !== y && (e.data = y);
                else {
                    if (
                        (null != i && (i = l.slice.call(e.childNodes)),
                        (d = (v = n.props || s).dangerouslySetInnerHTML),
                        (f = y.dangerouslySetInnerHTML),
                        !c)
                    ) {
                        if (null != i)
                            for (v = {}, m = 0; m < e.attributes.length; m++)
                                v[e.attributes[m].name] = e.attributes[m].value;
                        (f || d) &&
                            ((f && d && f.__html == d.__html) ||
                                (e.innerHTML = (f && f.__html) || ''));
                    }
                    (function (e, t, n, o, r) {
                        var i;
                        for (i in n)
                            'children' === i ||
                                'key' === i ||
                                i in t ||
                                j(e, i, null, n[i], o);
                        for (i in t)
                            (r && 'function' != typeof t[i]) ||
                                'children' === i ||
                                'key' === i ||
                                'value' === i ||
                                'checked' === i ||
                                n[i] === t[i] ||
                                j(e, i, t[i], n[i], o);
                    })(e, y, v, r, c),
                        f
                            ? (t.__k = [])
                            : ((u = t.props.children),
                              _(
                                  e,
                                  Array.isArray(u) ? u : [u],
                                  t,
                                  n,
                                  o,
                                  'foreignObject' !== t.type && r,
                                  i,
                                  a,
                                  s,
                                  c
                              )),
                        c ||
                            ('value' in y &&
                                void 0 !== (u = y.value) &&
                                u !== e.value &&
                                j(e, 'value', u, v.value, !1),
                            'checked' in y &&
                                void 0 !== (u = y.checked) &&
                                u !== e.checked &&
                                j(e, 'checked', u, v.checked, !1));
                }
                return e;
            }
            function C(e, t, n) {
                try {
                    'function' == typeof e ? e(t) : (e.current = t);
                } catch (e) {
                    o.__e(e, n);
                }
            }
            function D(e, t, n) {
                var r, i, a;
                if (
                    (o.unmount && o.unmount(e),
                    (r = e.ref) &&
                        ((r.current && r.current !== e.__e) || C(r, null, t)),
                    n ||
                        'function' == typeof e.type ||
                        (n = null != (i = e.__e)),
                    (e.__e = e.__d = void 0),
                    null != (r = e.__c))
                ) {
                    if (r.componentWillUnmount)
                        try {
                            r.componentWillUnmount();
                        } catch (e) {
                            o.__e(e, t);
                        }
                    r.base = r.__P = null;
                }
                if ((r = e.__k))
                    for (a = 0; a < r.length; a++) r[a] && D(r[a], t, n);
                null != i && d(i);
            }
            function T(e, t, n) {
                return this.constructor(e, n);
            }
            function I(e, t, n) {
                var r, i, a;
                o.__ && o.__(e, t),
                    (i = (r = n === c) ? null : (n && n.__k) || t.__k),
                    (e = f(v, null, [e])),
                    (a = []),
                    z(
                        t,
                        ((r ? t : n || t).__k = e),
                        i || s,
                        s,
                        void 0 !== t.ownerSVGElement,
                        n && !r
                            ? [n]
                            : i
                            ? null
                            : t.childNodes.length
                            ? l.slice.call(t.childNodes)
                            : null,
                        a,
                        n || s,
                        r
                    ),
                    P(a, e);
            }
            (o = {
                __e: function (e, t) {
                    for (var n, o; (t = t.__); )
                        if ((n = t.__c) && !n.__)
                            try {
                                if (
                                    (n.constructor &&
                                        null !=
                                            n.constructor
                                                .getDerivedStateFromError &&
                                        ((o = !0),
                                        n.setState(
                                            n.constructor.getDerivedStateFromError(
                                                e
                                            )
                                        )),
                                    null != n.componentDidCatch &&
                                        ((o = !0), n.componentDidCatch(e)),
                                    o)
                                )
                                    return g((n.__E = n));
                            } catch (t) {
                                e = t;
                            }
                    throw e;
                },
            }),
                (y.prototype.setState = function (e, t) {
                    var n;
                    (n =
                        null != this.__s && this.__s !== this.state
                            ? this.__s
                            : (this.__s = p({}, this.state))),
                        'function' == typeof e && (e = e(n, this.props)),
                        e && p(n, e),
                        null != e &&
                            this.__v &&
                            (t && this.__h.push(t), g(this));
                }),
                (y.prototype.forceUpdate = function (e) {
                    this.__v &&
                        ((this.__e = !0), e && this.__h.push(e), g(this));
                }),
                (y.prototype.render = v),
                (r = []),
                (i =
                    'function' == typeof Promise
                        ? Promise.prototype.then.bind(Promise.resolve())
                        : setTimeout),
                (k.__r = 0),
                (c = s);
            var R,
                N,
                M,
                q = 0,
                U = [],
                L = o.__r,
                F = o.diffed,
                H = o.__c,
                W = o.unmount;
            function B(e, t) {
                o.__h && o.__h(N, e, q || t), (q = 0);
                var n = N.__H || (N.__H = { __: [], __h: [] });
                return e >= n.__.length && n.__.push({}), n.__[e];
            }
            function K(e) {
                return (q = 1), V(X, e);
            }
            function V(e, t, n) {
                var o = B(R++, 2);
                return (
                    (o.t = e),
                    o.__c ||
                        ((o.__c = N),
                        (o.__ = [
                            n ? n(t) : X(void 0, t),
                            function (e) {
                                var t = o.t(o.__[0], e);
                                o.__[0] !== t &&
                                    ((o.__ = [t, o.__[1]]), o.__c.setState({}));
                            },
                        ])),
                    o.__
                );
            }
            function $(e, t) {
                var n = B(R++, 3);
                !o.__s &&
                    J(n.__H, t) &&
                    ((n.__ = e), (n.__H = t), N.__H.__h.push(n));
            }
            function G() {
                U.some(function (e) {
                    if (e.__P)
                        try {
                            e.__H.__h.forEach(Q),
                                e.__H.__h.forEach(Y),
                                (e.__H.__h = []);
                        } catch (t) {
                            return (e.__H.__h = []), o.__e(t, e.__v), !0;
                        }
                }),
                    (U = []);
            }
            (o.__r = function (e) {
                L && L(e), (R = 0);
                var t = (N = e.__c).__H;
                t && (t.__h.forEach(Q), t.__h.forEach(Y), (t.__h = []));
            }),
                (o.diffed = function (e) {
                    F && F(e);
                    var t = e.__c;
                    t &&
                        t.__H &&
                        t.__H.__h.length &&
                        ((1 !== U.push(t) && M === o.requestAnimationFrame) ||
                            (
                                (M = o.requestAnimationFrame) ||
                                function (e) {
                                    var t,
                                        n = function () {
                                            clearTimeout(o),
                                                Z && cancelAnimationFrame(t),
                                                setTimeout(e);
                                        },
                                        o = setTimeout(n, 100);
                                    Z && (t = requestAnimationFrame(n));
                                }
                            )(G));
                }),
                (o.__c = function (e, t) {
                    t.some(function (e) {
                        try {
                            e.__h.forEach(Q),
                                (e.__h = e.__h.filter(function (e) {
                                    return !e.__ || Y(e);
                                }));
                        } catch (n) {
                            t.some(function (e) {
                                e.__h && (e.__h = []);
                            }),
                                (t = []),
                                o.__e(n, e.__v);
                        }
                    }),
                        H && H(e, t);
                }),
                (o.unmount = function (e) {
                    W && W(e);
                    var t = e.__c;
                    if (t && t.__H)
                        try {
                            t.__H.__.forEach(Q);
                        } catch (e) {
                            o.__e(e, t.__v);
                        }
                });
            var Z = 'function' == typeof requestAnimationFrame;
            function Q(e) {
                'function' == typeof e.u && e.u();
            }
            function Y(e) {
                e.u = e.__();
            }
            function J(e, t) {
                return (
                    !e ||
                    t.some(function (t, n) {
                        return t !== e[n];
                    })
                );
            }
            function X(e, t) {
                return 'function' == typeof t ? t(e) : t;
            }
            function ee(e, t) {
                for (var n in t) e[n] = t[n];
                return e;
            }
            function te(e, t) {
                for (var n in e) if ('__source' !== n && !(n in t)) return !0;
                for (var o in t)
                    if ('__source' !== o && e[o] !== t[o]) return !0;
                return !1;
            }
            !(function (e) {
                var t, n;
                function o(t) {
                    var n;
                    return (
                        ((n = e.call(this, t) || this).isPureReactComponent =
                            !0),
                        n
                    );
                }
                (n = e),
                    ((t = o).prototype = Object.create(n.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = n),
                    (o.prototype.shouldComponentUpdate = function (e, t) {
                        return te(this.props, e) || te(this.state, t);
                    });
            })(y);
            var ne = o.__b;
            o.__b = function (e) {
                e.type &&
                    e.type.t &&
                    e.ref &&
                    ((e.props.ref = e.ref), (e.ref = null)),
                    ne && ne(e);
            };
            'undefined' != typeof Symbol &&
                Symbol.for &&
                Symbol.for('react.forward_ref');
            var oe = o.__e;
            function re(e) {
                return (
                    e &&
                        (((e = ee({}, e)).__c = null),
                        (e.__k = e.__k && e.__k.map(re))),
                    e
                );
            }
            function ie(e) {
                return (
                    e && ((e.__v = null), (e.__k = e.__k && e.__k.map(ie))), e
                );
            }
            function ae() {
                (this.__u = 0), (this.o = null), (this.__b = null);
            }
            function ce(e) {
                var t = e.__.__c;
                return t && t.u && t.u(e);
            }
            function se() {
                (this.i = null), (this.l = null);
            }
            (o.__e = function (e, t, n) {
                if (e.then)
                    for (var o, r = t; (r = r.__); )
                        if ((o = r.__c) && o.__c)
                            return (
                                null == t.__e &&
                                    ((t.__e = n.__e), (t.__k = n.__k)),
                                o.__c(e, t.__c)
                            );
                oe(e, t, n);
            }),
                ((ae.prototype = new y()).__c = function (e, t) {
                    var n = this;
                    null == n.o && (n.o = []), n.o.push(t);
                    var o = ce(n.__v),
                        r = !1,
                        i = function () {
                            r ||
                                ((r = !0),
                                (t.componentWillUnmount = t.__c),
                                o ? o(a) : a());
                        };
                    (t.__c = t.componentWillUnmount),
                        (t.componentWillUnmount = function () {
                            i(), t.__c && t.__c();
                        });
                    var a = function () {
                        var e;
                        if (!--n.__u)
                            for (
                                n.__v.__k[0] = ie(n.state.u),
                                    n.setState({ u: (n.__b = null) });
                                (e = n.o.pop());

                            )
                                e.forceUpdate();
                    };
                    n.__u++ || n.setState({ u: (n.__b = n.__v.__k[0]) }),
                        e.then(i, i);
                }),
                (ae.prototype.componentWillUnmount = function () {
                    this.o = [];
                }),
                (ae.prototype.render = function (e, t) {
                    return (
                        this.__b &&
                            (this.__v.__k && (this.__v.__k[0] = re(this.__b)),
                            (this.__b = null)),
                        [f(v, null, t.u ? null : e.children), t.u && e.fallback]
                    );
                });
            var le = function (e, t, n) {
                if (
                    (++n[1] === n[0] && e.l.delete(t),
                    e.props.revealOrder &&
                        ('t' !== e.props.revealOrder[0] || !e.l.size))
                )
                    for (n = e.i; n; ) {
                        for (; n.length > 3; ) n.pop()();
                        if (n[1] < n[0]) break;
                        e.i = n = n[2];
                    }
            };
            ((se.prototype = new y()).u = function (e) {
                var t = this,
                    n = ce(t.__v),
                    o = t.l.get(e);
                return (
                    o[0]++,
                    function (r) {
                        var i = function () {
                            t.props.revealOrder
                                ? (o.push(r), le(t, e, o))
                                : r();
                        };
                        n ? n(i) : i();
                    }
                );
            }),
                (se.prototype.render = function (e) {
                    (this.i = null), (this.l = new Map());
                    var t = x(e.children);
                    e.revealOrder && 'b' === e.revealOrder[0] && t.reverse();
                    for (var n = t.length; n--; )
                        this.l.set(t[n], (this.i = [1, 0, this.i]));
                    return e.children;
                }),
                (se.prototype.componentDidUpdate =
                    se.prototype.componentDidMount =
                        function () {
                            var e = this;
                            e.l.forEach(function (t, n) {
                                le(e, n, t);
                            });
                        });
            !(function () {
                function e() {}
                var t = e.prototype;
                (t.getChildContext = function () {
                    return this.props.context;
                }),
                    (t.render = function (e) {
                        return e.children;
                    });
            })();
            var ue =
                /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
            y.prototype.isReactComponent = {};
            var pe =
                ('undefined' != typeof Symbol &&
                    Symbol.for &&
                    Symbol.for('react.element')) ||
                60103;
            function de(e, t, n) {
                if (null == t.__k)
                    for (; t.firstChild; ) t.removeChild(t.firstChild);
                return I(e, t), 'function' == typeof n && n(), e ? e.__c : null;
            }
            var fe = o.event;
            function me(e, t) {
                e['UNSAFE_' + t] &&
                    !e[t] &&
                    Object.defineProperty(e, t, {
                        configurable: !1,
                        get: function () {
                            return this['UNSAFE_' + t];
                        },
                        set: function (e) {
                            this['UNSAFE_' + t] = e;
                        },
                    });
            }
            o.event = function (e) {
                fe && (e = fe(e)), (e.persist = function () {});
                var t = !1,
                    n = !1,
                    o = e.stopPropagation;
                e.stopPropagation = function () {
                    o.call(e), (t = !0);
                };
                var r = e.preventDefault;
                return (
                    (e.preventDefault = function () {
                        r.call(e), (n = !0);
                    }),
                    (e.isPropagationStopped = function () {
                        return t;
                    }),
                    (e.isDefaultPrevented = function () {
                        return n;
                    }),
                    (e.nativeEvent = e)
                );
            };
            var ve = {
                    configurable: !0,
                    get: function () {
                        return this.class;
                    },
                },
                ye = o.vnode;
            o.vnode = function (e) {
                e.$$typeof = pe;
                var t = e.type,
                    n = e.props;
                if (t) {
                    if (
                        (n.class != n.className &&
                            ((ve.enumerable = 'className' in n),
                            null != n.className && (n.class = n.className),
                            Object.defineProperty(n, 'className', ve)),
                        'function' != typeof t)
                    ) {
                        var o, r, i;
                        for (i in (n.defaultValue &&
                            void 0 !== n.value &&
                            (n.value ||
                                0 === n.value ||
                                (n.value = n.defaultValue),
                            delete n.defaultValue),
                        Array.isArray(n.value) &&
                            n.multiple &&
                            'select' === t &&
                            (x(n.children).forEach(function (e) {
                                -1 != n.value.indexOf(e.props.value) &&
                                    (e.props.selected = !0);
                            }),
                            delete n.value),
                        !0 === n.download && (n.download = ''),
                        n))
                            if ((o = ue.test(i))) break;
                        if (o)
                            for (i in ((r = e.props = {}), n))
                                r[
                                    ue.test(i)
                                        ? i
                                              .replace(/[A-Z0-9]/, '-$&')
                                              .toLowerCase()
                                        : i
                                ] = n[i];
                    }
                    !(function (t) {
                        var n = e.type,
                            o = e.props;
                        if (o && 'string' == typeof n) {
                            var r = {};
                            for (var i in o)
                                /^on(Ani|Tra|Tou)/.test(i) &&
                                    ((o[i.toLowerCase()] = o[i]), delete o[i]),
                                    (r[i.toLowerCase()] = i);
                            if (
                                (r.ondoubleclick &&
                                    ((o.ondblclick = o[r.ondoubleclick]),
                                    delete o[r.ondoubleclick]),
                                r.onbeforeinput &&
                                    ((o.onbeforeinput = o[r.onbeforeinput]),
                                    delete o[r.onbeforeinput]),
                                r.onchange &&
                                    ('textarea' === n ||
                                        ('input' === n.toLowerCase() &&
                                            !/^fil|che|ra/i.test(o.type))))
                            ) {
                                var a = r.oninput || 'oninput';
                                o[a] ||
                                    ((o[a] = o[r.onchange]),
                                    delete o[r.onchange]);
                            }
                        }
                    })(),
                        'function' == typeof t &&
                            !t.m &&
                            t.prototype &&
                            (me(t.prototype, 'componentWillMount'),
                            me(t.prototype, 'componentWillReceiveProps'),
                            me(t.prototype, 'componentWillUpdate'),
                            (t.m = !0));
                }
                ye && ye(e);
            };
            var he = f,
                be = v,
                ge = y,
                ke = (n(30), n(31), n(126), n(38), n(127), n(133)),
                _e = function (e) {
                    var t = e.t;
                    return he(
                        'svg',
                        {
                            role: 'img',
                            'aria-label': t(['close']),
                            width: '12',
                            height: '12',
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg',
                        },
                        he('title', null, t(['close'])),
                        he('line', {
                            x1: '1',
                            y1: '11',
                            x2: '11',
                            y2: '1',
                            strokeWidth: '1',
                        }),
                        he('line', {
                            x1: '1',
                            y1: '1',
                            x2: '11',
                            y2: '11',
                            strokeWidth: '1',
                        })
                    );
                };
            _e.propTypes = { t: n.n(ke).a.func };
            n(49);
            function xe(e) {
                return e
                    .split('-')
                    .map(function (e) {
                        return e.slice(0, 1).toUpperCase() + e.slice(1);
                    })
                    .join(' ');
            }
            n(64), n(172), n(173);
            function we(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return Se(e);
                    })(e) ||
                    (function (e) {
                        if (
                            'undefined' != typeof Symbol &&
                            Symbol.iterator in Object(e)
                        )
                            return Array.from(e);
                    })(e) ||
                    (function (e, t) {
                        if (!e) return;
                        if ('string' == typeof e) return Se(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n &&
                            e.constructor &&
                            (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n) return Array.from(e);
                        if (
                            'Arguments' === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                            return Se(e, t);
                    })(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Se(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o;
            }
            function je(e) {
                return (je =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            var Oe = function (e) {
                for (
                    var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        o = 1;
                    o < t;
                    o++
                )
                    n[o - 1] = arguments[o];
                var r,
                    i = je(n[0]);
                r =
                    0 === n.length
                        ? {}
                        : 'string' === i || 'number' === i
                        ? Array.prototype.slice.call(n)
                        : n[0];
                for (var a = [], c = e.toString(); c.length > 0; ) {
                    var s = c.match(/\{(?!\{)([\w\d]+)\}(?!\})/);
                    if (null !== s) {
                        var l = c.substr(0, s.index);
                        c = c.substr(s.index + s[0].length);
                        var u = parseInt(s[1]);
                        a.push(l), u != u ? a.push(r[s[1]]) : a.push(r[u]);
                    } else a.push(c), (c = '');
                }
                return a;
            };
            function Ae(e) {
                if (void 0 !== e && void 0 !== e.lang && 'zz' !== e.lang)
                    return e.lang;
                var t = (
                        ('string' == typeof window.language
                            ? window.language
                            : null) ||
                        document.documentElement.lang ||
                        (void 0 !== e &&
                        void 0 !== e.languages &&
                        void 0 !== e.languages[0]
                            ? e.languages[0]
                            : 'en')
                    ).toLowerCase(),
                    n = new RegExp('^([\\w]+)-([\\w]+)$').exec(t);
                return null === n ? t : n[1];
            }
            function ze(e, t, n) {
                var o = t;
                Array.isArray(o) || (o = [o]);
                for (var r = e, i = 0; i < o.length; i++) {
                    if (void 0 === r) return n;
                    if (void 0 !== o[i] && o[i].endsWith('?')) {
                        var a = o[i].slice(0, o[i].length - 1),
                            c = void 0;
                        void 0 !== (c = r instanceof Map ? r.get(a) : r[a]) &&
                            'string' == typeof c &&
                            (r = c);
                    } else r = r instanceof Map ? r.get(o[i]) : r[o[i]];
                }
                return void 0 === r || 'string' != typeof r
                    ? n
                    : '' !== r
                    ? r
                    : void 0;
            }
            function Pe(e, t, n, o) {
                var r = o,
                    i = !1;
                '!' === r[0] && ((r = r.slice(1)), (i = !0)),
                    Array.isArray(r) || (r = [r]);
                var a = ze(e, [t].concat(we(r)));
                if (
                    (void 0 === a &&
                        void 0 !== n &&
                        (a = ze(e, [n].concat(we(r)))),
                    void 0 === a)
                ) {
                    if (i) return;
                    return [
                        '[missing translation: '
                            .concat(t, '/')
                            .concat(r.join('/'), ']'),
                    ];
                }
                for (
                    var c = arguments.length,
                        s = new Array(c > 4 ? c - 4 : 0),
                        l = 4;
                    l < c;
                    l++
                )
                    s[l - 4] = arguments[l];
                return s.length > 0 ? Oe.apply(void 0, [a].concat(s)) : a;
            }
            var Ee = function (e) {
                var t = e.text,
                    n = e.config;
                if ((t instanceof Array || (t = [t]), !0 === n.htmlTexts)) {
                    var o = !1;
                    '<' === t[0][0] && (o = !0);
                    var r = t.map(function (e, t) {
                        return 'string' == typeof e
                            ? he('span', {
                                  key: t,
                                  dangerouslySetInnerHTML: { __html: e },
                              })
                            : e;
                    });
                    return he(o ? be : 'span', null, r);
                }
                return he('span', null, t);
            };
            function Ce(e) {
                return (Ce =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function De() {
                return (De =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n)
                                Object.prototype.hasOwnProperty.call(n, o) &&
                                    (e[o] = n[o]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function Te(e, t) {
                if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
            }
            function Ie(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            function Re(e, t) {
                return (Re =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function Ne(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
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
                        o = qe(e);
                    if (t) {
                        var r = qe(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return Me(this, n);
                };
            }
            function Me(e, t) {
                return !t || ('object' !== Ce(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return e;
                      })(e)
                    : t;
            }
            function qe(e) {
                return (qe = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var Ue = (function (e) {
                !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError(
                            'Super expression must either be null or a function'
                        );
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                        t && Re(e, t);
                })(i, e);
                var t,
                    n,
                    o,
                    r = Ne(i);
                function i() {
                    return Te(this, i), r.apply(this, arguments);
                }
                return (
                    (t = i),
                    (n = [
                        {
                            key: 'render',
                            value: function () {
                                var e,
                                    t,
                                    n = this.props,
                                    o = n.checked,
                                    r = n.onlyRequiredEnabled,
                                    i = n.onToggle,
                                    a = n.name,
                                    c = n.lang,
                                    s = n.config,
                                    l = n.translations,
                                    u = n.title,
                                    p = n.description,
                                    d = n.visible,
                                    f = n.t,
                                    m = this.props.required || !1,
                                    v = this.props.optOut || !1,
                                    y = this.props.purposes || [],
                                    h = this.props.tags || [],
                                    b = 'service-item-'.concat(a),
                                    g = ''.concat(b, '-title'),
                                    k = y
                                        .map(function (e) {
                                            return (
                                                f([
                                                    '!',
                                                    'purposes',
                                                    e,
                                                    'title?',
                                                ]) || xe(e)
                                            );
                                        })
                                        .join(', '),
                                    _ = v
                                        ? he(
                                              'span',
                                              {
                                                  className: 'cm-opt-out',
                                                  title: f([
                                                      'service',
                                                      'optOut',
                                                      'description',
                                                  ]),
                                              },
                                              f(['service', 'optOut', 'title'])
                                          )
                                        : '',
                                    x = m
                                        ? he(
                                              'span',
                                              {
                                                  className: 'cm-required',
                                                  title: f([
                                                      'service',
                                                      'required',
                                                      'description',
                                                  ]),
                                              },
                                              f([
                                                  'service',
                                                  'required',
                                                  'title',
                                              ])
                                          )
                                        : '',
                                    w = h.map(function (e) {
                                        return he(
                                            'span',
                                            { key: '{tag}' },
                                            f(['service', 'tags', e])
                                        );
                                    });
                                h.length > 0 &&
                                    (e = he(
                                        'span',
                                        { className: 'cm-required' },
                                        w
                                    )),
                                    y.length > 0 &&
                                        (t = he(
                                            'p',
                                            { className: 'purposes' },
                                            f([
                                                'service',
                                                y.length > 1
                                                    ? 'purposes'
                                                    : 'purpose',
                                            ]),
                                            ': ',
                                            k
                                        ));
                                var S =
                                    p ||
                                    Pe(l, c, 'zz', ['!', 'description']) ||
                                    f(['!', a, 'description?']);
                                return he(
                                    'div',
                                    null,
                                    he('input', {
                                        id: b,
                                        className:
                                            'cm-list-input' +
                                            (m ? ' required' : '') +
                                            (r
                                                ? ' half-checked only-required'
                                                : ''),
                                        'aria-labelledby': ''.concat(g),
                                        'aria-describedby': ''.concat(
                                            b,
                                            '-description'
                                        ),
                                        disabled: m,
                                        checked: o || m,
                                        tabIndex: d ? '0' : '-1',
                                        type: 'checkbox',
                                        onChange: function (e) {
                                            i(e.target.checked);
                                        },
                                    }),
                                    he(
                                        'label',
                                        De(
                                            {
                                                htmlFor: b,
                                                className: 'cm-list-label',
                                            },
                                            m ? { tabIndex: '0' } : {}
                                        ),
                                        he(
                                            'span',
                                            {
                                                className: 'cm-list-title',
                                                id: ''.concat(g),
                                            },
                                            u ||
                                                Pe(l, c, 'zz', [
                                                    '!',
                                                    'title',
                                                ]) ||
                                                f(['!', a, 'title?']) ||
                                                xe(a)
                                        ),
                                        x,
                                        _,
                                        e,
                                        he(
                                            'span',
                                            { className: 'cm-switch' },
                                            he('div', {
                                                className:
                                                    'slider round active',
                                            })
                                        )
                                    ),
                                    he(
                                        'div',
                                        { id: ''.concat(b, '-description') },
                                        S &&
                                            he(
                                                'p',
                                                {
                                                    className:
                                                        'cm-list-description',
                                                },
                                                he(Ee, { config: s, text: S })
                                            ),
                                        t
                                    )
                                );
                            },
                        },
                    ]) && Ie(t.prototype, n),
                    o && Ie(t, o),
                    i
                );
            })(ge);
            function Le(e) {
                return (Le =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function Fe(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            function He(e, t) {
                return (He =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function We(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
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
                        o = Ve(e);
                    if (t) {
                        var r = Ve(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return Be(this, n);
                };
            }
            function Be(e, t) {
                return !t || ('object' !== Le(t) && 'function' != typeof t)
                    ? Ke(e)
                    : t;
            }
            function Ke(e) {
                if (void 0 === e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return e;
            }
            function Ve(e) {
                return (Ve = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function $e() {
                return ($e =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n)
                                Object.prototype.hasOwnProperty.call(n, o) &&
                                    (e[o] = n[o]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            var Ge = function (e) {
                    var t = e.services,
                        n = e.config,
                        o = e.consents,
                        r = e.lang,
                        i = e.toggle,
                        a = e.visible,
                        c = e.t;
                    return t.map(function (e) {
                        var t = o[e.name];
                        return he(
                            'li',
                            { key: e.name, className: 'cm-service' },
                            he(
                                Ue,
                                $e(
                                    {
                                        checked: t || e.required,
                                        onToggle: function (t) {
                                            i([e], t);
                                        },
                                        config: n,
                                        lang: r,
                                        visible: a,
                                        t: c,
                                    },
                                    e
                                )
                            )
                        );
                    });
                },
                Ze = (function (e) {
                    !(function (e, t) {
                        if ('function' != typeof t && null !== t)
                            throw new TypeError(
                                'Super expression must either be null or a function'
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0,
                            },
                        })),
                            t && He(e, t);
                    })(i, e);
                    var t,
                        n,
                        o,
                        r = We(i);
                    function i(e) {
                        var t;
                        return (
                            (function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        'Cannot call a class as a function'
                                    );
                            })(this, i),
                            (t = r.call(this, e)),
                            e.manager.watch(Ke(t)),
                            (t.state = { consents: e.manager.consents }),
                            t
                        );
                    }
                    return (
                        (t = i),
                        (n = [
                            {
                                key: 'componentWillUnmount',
                                value: function () {
                                    this.props.manager.unwatch(this);
                                },
                            },
                            {
                                key: 'update',
                                value: function (e, t, n) {
                                    e === this.props.manager &&
                                        'consents' === t &&
                                        this.setState({ consents: n });
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    var e = this.props,
                                        t = e.config,
                                        n = e.t,
                                        o = e.manager,
                                        r = e.lang,
                                        i = this.state.consents,
                                        a = t.services,
                                        c = function (e, t) {
                                            e.map(function (e) {
                                                e.required ||
                                                    o.updateConsent(e.name, t);
                                            });
                                        },
                                        s = he(Ge, {
                                            config: t,
                                            lang: r,
                                            services: a,
                                            t: n,
                                            consents: i,
                                            toggle: c,
                                        }),
                                        l = a.filter(function (e) {
                                            return !e.required;
                                        }),
                                        u = l.filter(function (e) {
                                            return i[e.name];
                                        }).length,
                                        p = a.filter(function (e) {
                                            return e.required;
                                        }).length,
                                        d = u === l.length;
                                    return (
                                        a.filter(function (e) {
                                            return e.required;
                                        }).length,
                                        he(
                                            'ul',
                                            { className: 'cm-services' },
                                            s,
                                            !t.hideToggleAll &&
                                                l.length > 1 &&
                                                he(
                                                    'li',
                                                    {
                                                        className:
                                                            'cm-service cm-toggle-all',
                                                    },
                                                    he(Ue, {
                                                        name: 'disableAll',
                                                        title: n([
                                                            'service',
                                                            'disableAll',
                                                            'title',
                                                        ]),
                                                        description: n([
                                                            'service',
                                                            'disableAll',
                                                            'description',
                                                        ]),
                                                        checked: d,
                                                        config: t,
                                                        onlyRequiredEnabled:
                                                            !d && p > 0,
                                                        onToggle: function (e) {
                                                            c(a, e);
                                                        },
                                                        lang: r,
                                                        t: n,
                                                    })
                                                )
                                        )
                                    );
                                },
                            },
                        ]) && Fe(t.prototype, n),
                        o && Fe(t, o),
                        i
                    );
                })(ge);
            function Qe(e) {
                return (Qe =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function Ye() {
                return (Ye =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n)
                                Object.prototype.hasOwnProperty.call(n, o) &&
                                    (e[o] = n[o]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function Je(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            function Xe(e, t) {
                return (Xe =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function et(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
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
                        o = nt(e);
                    if (t) {
                        var r = nt(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return tt(this, n);
                };
            }
            function tt(e, t) {
                return !t || ('object' !== Qe(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return e;
                      })(e)
                    : t;
            }
            function nt(e) {
                return (nt = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var ot = (function (e) {
                !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError(
                            'Super expression must either be null or a function'
                        );
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                        t && Xe(e, t);
                })(i, e);
                var t,
                    n,
                    o,
                    r = et(i);
                function i(e) {
                    var t;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, i),
                        ((t = r.call(this, e)).state = { servicesVisible: !1 }),
                        t
                    );
                }
                return (
                    (t = i),
                    (n = [
                        {
                            key: 'render',
                            value: function () {
                                var e,
                                    t = this,
                                    n = this.props,
                                    o = n.allEnabled,
                                    r = n.onlyRequiredEnabled,
                                    i = n.allDisabled,
                                    a = n.services,
                                    c = n.config,
                                    s = n.onToggle,
                                    l = n.name,
                                    u = n.lang,
                                    p = n.manager,
                                    d = n.consents,
                                    f = n.title,
                                    m = n.description,
                                    v = n.t,
                                    y = this.state.servicesVisible,
                                    h = this.props.required || !1,
                                    b = this.props.purposes || [],
                                    g = 'purpose-item-'.concat(l),
                                    k = ''.concat(g, '-title'),
                                    _ = b
                                        .map(function (e) {
                                            return (
                                                v([
                                                    '!',
                                                    'purposes',
                                                    e,
                                                    'title?',
                                                ]) || xe(e)
                                            );
                                        })
                                        .join(', '),
                                    x = h
                                        ? he(
                                              'span',
                                              {
                                                  className: 'cm-required',
                                                  title:
                                                      v([
                                                          '!',
                                                          'service',
                                                          'required',
                                                          'description',
                                                      ]) || '',
                                              },
                                              v([
                                                  'service',
                                                  'required',
                                                  'title',
                                              ])
                                          )
                                        : '';
                                b.length > 0 &&
                                    (e = he(
                                        'p',
                                        { className: 'purposes' },
                                        v([
                                            'purpose',
                                            b.length > 1
                                                ? 'purposes'
                                                : 'purpose',
                                        ]),
                                        ': ',
                                        _
                                    ));
                                var w = function (e) {
                                        e.preventDefault();
                                        var n =
                                            'false' !==
                                            e.currentTarget.getAttribute(
                                                'aria-expanded'
                                            );
                                        e.currentTarget.setAttribute(
                                            'aria-expanded',
                                            !n
                                        ),
                                            t.setState({ servicesVisible: !y });
                                    },
                                    S = he(Ge, {
                                        config: c,
                                        lang: u,
                                        services: a,
                                        toggle: function (e, t) {
                                            e.map(function (e) {
                                                e.required ||
                                                    p.updateConsent(e.name, t);
                                            });
                                        },
                                        consents: d,
                                        visible: y,
                                        t: v,
                                    }),
                                    j =
                                        m ||
                                        v(['!', 'purposes', l, 'description']);
                                return he(
                                    be,
                                    null,
                                    he('input', {
                                        id: g,
                                        className:
                                            'cm-list-input' +
                                            (h ? ' required' : '') +
                                            (o
                                                ? ''
                                                : r
                                                ? ' only-required'
                                                : ' half-checked'),
                                        'aria-labelledby': ''.concat(k),
                                        'aria-describedby': ''.concat(
                                            g,
                                            '-description'
                                        ),
                                        disabled: h,
                                        checked: o || (!i && !r),
                                        type: 'checkbox',
                                        onChange: function (e) {
                                            s(e.target.checked);
                                        },
                                    }),
                                    he(
                                        'label',
                                        Ye(
                                            {
                                                htmlFor: g,
                                                className: 'cm-list-label',
                                            },
                                            h ? { tabIndex: '0' } : {}
                                        ),
                                        he(
                                            'span',
                                            {
                                                className: 'cm-list-title',
                                                id: ''.concat(k),
                                            },
                                            f ||
                                                v([
                                                    '!',
                                                    'purposes',
                                                    l,
                                                    'title?',
                                                ]) ||
                                                xe(l)
                                        ),
                                        x,
                                        he(
                                            'span',
                                            { className: 'cm-switch' },
                                            he('div', {
                                                className:
                                                    'slider round active',
                                            })
                                        )
                                    ),
                                    he(
                                        'div',
                                        { id: ''.concat(g, '-description') },
                                        j &&
                                            he(
                                                'p',
                                                {
                                                    className:
                                                        'cm-list-description',
                                                },
                                                he(Ee, { config: c, text: j })
                                            ),
                                        e
                                    ),
                                    a.length > 0 &&
                                        he(
                                            'div',
                                            { className: 'cm-services' },
                                            he(
                                                'div',
                                                { className: 'cm-caret' },
                                                he(
                                                    'a',
                                                    {
                                                        href: '#',
                                                        'aria-haspopup': 'true',
                                                        'aria-expanded':
                                                            'false',
                                                        tabIndex: '0',
                                                        onClick: w,
                                                        onKeyDown: function (
                                                            e
                                                        ) {
                                                            32 === e.keyCode &&
                                                                w(e);
                                                        },
                                                    },
                                                    (y &&
                                                        he(
                                                            'span',
                                                            null,
                                                            '↑'
                                                        )) ||
                                                        he('span', null, '↓'),
                                                    ' ',
                                                    a.length,
                                                    ' ',
                                                    v([
                                                        'purposeItem',
                                                        a.length > 1
                                                            ? 'services'
                                                            : 'service',
                                                    ])
                                                )
                                            ),
                                            he(
                                                'ul',
                                                {
                                                    className:
                                                        'cm-content' +
                                                        (y ? ' expanded' : ''),
                                                },
                                                S
                                            )
                                        )
                                );
                            },
                        },
                    ]) && Je(t.prototype, n),
                    o && Je(t, o),
                    i
                );
            })(ge);
            function rt(e) {
                return (rt =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function it(e, t) {
                var n;
                if (
                    'undefined' == typeof Symbol ||
                    null == e[Symbol.iterator]
                ) {
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return at(e, t);
                            var n = Object.prototype.toString
                                .call(e)
                                .slice(8, -1);
                            'Object' === n &&
                                e.constructor &&
                                (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n)
                                return Array.from(e);
                            if (
                                'Arguments' === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    n
                                )
                            )
                                return at(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var o = 0,
                            r = function () {};
                        return {
                            s: r,
                            n: function () {
                                return o >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[o++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: r,
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                }
                var i,
                    a = !0,
                    c = !1;
                return {
                    s: function () {
                        n = e[Symbol.iterator]();
                    },
                    n: function () {
                        var e = n.next();
                        return (a = e.done), e;
                    },
                    e: function (e) {
                        (c = !0), (i = e);
                    },
                    f: function () {
                        try {
                            a || null == n.return || n.return();
                        } finally {
                            if (c) throw i;
                        }
                    },
                };
            }
            function at(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o;
            }
            function ct(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            function st(e, t) {
                return (st =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function lt(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
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
                        o = dt(e);
                    if (t) {
                        var r = dt(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return ut(this, n);
                };
            }
            function ut(e, t) {
                return !t || ('object' !== rt(t) && 'function' != typeof t)
                    ? pt(e)
                    : t;
            }
            function pt(e) {
                if (void 0 === e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return e;
            }
            function dt(e) {
                return (dt = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var ft = (function (e) {
                !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError(
                            'Super expression must either be null or a function'
                        );
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                        t && st(e, t);
                })(i, e);
                var t,
                    n,
                    o,
                    r = lt(i);
                function i(e) {
                    var t;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, i),
                        (t = r.call(this, e)),
                        e.manager.watch(pt(t)),
                        (t.state = { consents: e.manager.consents }),
                        t
                    );
                }
                return (
                    (t = i),
                    (n = [
                        {
                            key: 'componentWillUnmount',
                            value: function () {
                                this.props.manager.unwatch(this);
                            },
                        },
                        {
                            key: 'update',
                            value: function (e, t, n) {
                                e === this.props.manager &&
                                    'consents' === t &&
                                    this.setState({ consents: n });
                            },
                        },
                        {
                            key: 'render',
                            value: function () {
                                var e,
                                    t = this.props,
                                    n = t.config,
                                    o = t.t,
                                    r = t.manager,
                                    i = t.lang,
                                    a = this.state.consents,
                                    c = n.services,
                                    s = {},
                                    l = it(c);
                                try {
                                    for (l.s(); !(e = l.n()).done; ) {
                                        var u,
                                            p = e.value,
                                            d = it(p.purposes);
                                        try {
                                            for (d.s(); !(u = d.n()).done; ) {
                                                var f = u.value;
                                                void 0 === s[f] && (s[f] = []),
                                                    s[f].push(p);
                                            }
                                        } catch (e) {
                                            d.e(e);
                                        } finally {
                                            d.f();
                                        }
                                    }
                                } catch (e) {
                                    l.e(e);
                                } finally {
                                    l.f();
                                }
                                var m = function (e, t) {
                                        e.map(function (e) {
                                            var n,
                                                o = it(s[e]);
                                            try {
                                                for (
                                                    o.s();
                                                    !(n = o.n()).done;

                                                ) {
                                                    var i = n.value;
                                                    i.required ||
                                                        r.updateConsent(
                                                            i.name,
                                                            t
                                                        );
                                                }
                                            } catch (e) {
                                                o.e(e);
                                            } finally {
                                                o.f();
                                            }
                                        });
                                    },
                                    v = function (e) {
                                        var t,
                                            n = {
                                                allEnabled: !0,
                                                onlyRequiredEnabled: !0,
                                                allDisabled: !0,
                                                allRequired: !0,
                                            },
                                            o = it(e);
                                        try {
                                            for (o.s(); !(t = o.n()).done; ) {
                                                var r = t.value;
                                                r.required ||
                                                    (n.allRequired = !1),
                                                    a[r.name]
                                                        ? (r.required ||
                                                              (n.onlyRequiredEnabled =
                                                                  !1),
                                                          (n.allDisabled = !1))
                                                        : r.required ||
                                                          (n.allEnabled = !1);
                                            }
                                        } catch (e) {
                                            o.e(e);
                                        } finally {
                                            o.f();
                                        }
                                        return (
                                            n.allDisabled &&
                                                (n.onlyRequiredEnabled = !1),
                                            n
                                        );
                                    },
                                    y = n.purposeOrder || [],
                                    h = Object.keys(s)
                                        .sort(function (e, t) {
                                            return y.indexOf(e) - y.indexOf(t);
                                        })
                                        .map(function (e) {
                                            var t = v(s[e]);
                                            return he(
                                                'li',
                                                {
                                                    key: e,
                                                    className: 'cm-purpose',
                                                },
                                                he(ot, {
                                                    allEnabled: t.allEnabled,
                                                    allDisabled: t.allDisabled,
                                                    onlyRequiredEnabled:
                                                        t.onlyRequiredEnabled,
                                                    required: t.allRequired,
                                                    consents: a,
                                                    name: e,
                                                    config: n,
                                                    lang: i,
                                                    manager: r,
                                                    onToggle: function (t) {
                                                        m([e], t);
                                                    },
                                                    services: s[e],
                                                    t: o,
                                                })
                                            );
                                        }),
                                    b = Object.keys(s).filter(function (e) {
                                        var t,
                                            n = it(s[e]);
                                        try {
                                            for (n.s(); !(t = n.n()).done; )
                                                if (!t.value.required)
                                                    return !0;
                                        } catch (e) {
                                            n.e(e);
                                        } finally {
                                            n.f();
                                        }
                                        return !1;
                                    }),
                                    g = v(c);
                                return he(
                                    'ul',
                                    { className: 'cm-purposes' },
                                    h,
                                    b.length > 1 &&
                                        he(
                                            'li',
                                            {
                                                className:
                                                    'cm-purpose cm-toggle-all',
                                            },
                                            he(ot, {
                                                name: 'disableAll',
                                                title: o([
                                                    'service',
                                                    'disableAll',
                                                    'title',
                                                ]),
                                                description: o([
                                                    'service',
                                                    'disableAll',
                                                    'description',
                                                ]),
                                                allDisabled: g.allDisabled,
                                                allEnabled: g.allEnabled,
                                                onlyRequiredEnabled:
                                                    g.onlyRequiredEnabled,
                                                onToggle: function (e) {
                                                    m(Object.keys(s), e);
                                                },
                                                manager: r,
                                                consents: a,
                                                config: n,
                                                lang: i,
                                                services: [],
                                                t: o,
                                            })
                                        )
                                );
                            },
                        },
                    ]) && ct(t.prototype, n),
                    o && ct(t, o),
                    i
                );
            })(ge);
            function mt(e) {
                return (mt =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function vt(e, t) {
                if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
            }
            function yt(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            function ht(e, t) {
                return (ht =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function bt(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
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
                        o = kt(e);
                    if (t) {
                        var r = kt(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return gt(this, n);
                };
            }
            function gt(e, t) {
                return !t || ('object' !== mt(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return e;
                      })(e)
                    : t;
            }
            function kt(e) {
                return (kt = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var _t = (function (e) {
                !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError(
                            'Super expression must either be null or a function'
                        );
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                        t && ht(e, t);
                })(i, e);
                var t,
                    n,
                    o,
                    r = bt(i);
                function i() {
                    return vt(this, i), r.apply(this, arguments);
                }
                return (
                    (t = i),
                    (n = [
                        {
                            key: 'componentDidMount',
                            value: function () {
                                this.consentModalRef.focus();
                            },
                        },
                        {
                            key: 'render',
                            value: function () {
                                var e,
                                    t,
                                    n,
                                    o = this,
                                    r = this.props,
                                    i = r.hide,
                                    a = r.confirming,
                                    c = r.saveAndHide,
                                    s = r.acceptAndHide,
                                    l = r.acceptLocalAndHide,
                                    u = r.declineAndHide,
                                    p = r.config,
                                    d = r.manager,
                                    f = r.lang,
                                    m = r.t,
                                    v = p.embedded,
                                    y =
                                        void 0 === p.groupByPurpose ||
                                        p.groupByPurpose;
                                p.mustConsent ||
                                    (e = he(
                                        'button',
                                        {
                                            title: m(['close']),
                                            'aria-label': m(['close']),
                                            className: 'hide',
                                            type: 'button',
                                            onClick: i,
                                            tabIndex: '0',
                                            ref: function (e) {
                                                o.consentModalRef = e;
                                            },
                                        },
                                        he(_e, { t: m })
                                    )),
                                    p.hideDeclineAll ||
                                        d.confirmed ||
                                        (t = he(
                                            'button',
                                            {
                                                disabled: a,
                                                className:
                                                    'cm-btn cm-btn-decline cm-btn-danger cn-decline',
                                                type: 'button',
                                                onClick: u,
                                            },
                                            m(['decline'])
                                        ));
                                var h,
                                    b,
                                    g,
                                    k,
                                    _ = he(
                                        'button',
                                        {
                                            disabled: a,
                                            className:
                                                'cm-btn cm-btn-success cm-btn-info cm-btn-accept',
                                            type: 'button',
                                            onClick: c,
                                        },
                                        m([
                                            d.confirmed
                                                ? 'save'
                                                : 'acceptSelected',
                                        ])
                                    );
                                p.acceptAll &&
                                    !d.confirmed &&
                                    (n = he(
                                        'button',
                                        {
                                            disabled: a,
                                            className:
                                                'cm-btn cm-btn-success cm-btn-accept-all',
                                            type: 'button',
                                            onClick: s,
                                        },
                                        m(['acceptAll'])
                                    )),
                                    d.confirmed ||
                                        (h = he(
                                            'button',
                                            {
                                                disabled: a,
                                                className:
                                                    'cm-btn cm-btn-local-only cm-btn-danger',
                                                type: 'button',
                                                onClick: l,
                                            },
                                            m(['acceptLocalOnly'])
                                        )),
                                    void 0 !== p.privacyPolicy
                                        ? 'string' == typeof p.privacyPolicy
                                            ? (b = p.privacyPolicy)
                                            : 'object' ===
                                                  mt(p.privacyPolicy) &&
                                              (b =
                                                  p.privacyPolicy[f] ||
                                                  p.privacyPolicy.default)
                                        : void 0 !==
                                              (b = m(
                                                  ['!', 'privacyPolicyUrl'],
                                                  { lang: f }
                                              )) && (b = b.join('')),
                                    void 0 !== b &&
                                        (g = he(
                                            'a',
                                            {
                                                key: 'ppLink',
                                                href: b,
                                                target: '_blank',
                                                rel: 'noopener',
                                            },
                                            m(['privacyPolicy', 'name'])
                                        )),
                                    (k = he(y ? ft : Ze, {
                                        t: m,
                                        config: p,
                                        manager: d,
                                        lang: f,
                                    }));
                                var x = he(
                                    'div',
                                    { className: 'cm-modal cm-klaro' },
                                    he(
                                        'div',
                                        { className: 'cm-header' },
                                        e,
                                        he(
                                            'h1',
                                            { className: 'title' },
                                            he(Ee, {
                                                config: p,
                                                text: m([
                                                    'consentModal',
                                                    'title',
                                                ]),
                                            })
                                        ),
                                        he(
                                            'p',
                                            null,
                                            he(Ee, {
                                                config: p,
                                                text: [
                                                    m([
                                                        'consentModal',
                                                        'description',
                                                    ]),
                                                ].concat(
                                                    (g &&
                                                        [' '].concat(
                                                            m(
                                                                [
                                                                    'privacyPolicy',
                                                                    'text',
                                                                ],
                                                                {
                                                                    privacyPolicy:
                                                                        g,
                                                                }
                                                            )
                                                        )) ||
                                                        []
                                                ),
                                            })
                                        )
                                    ),
                                    he('div', { className: 'cm-body' }, k),
                                    he(
                                        'div',
                                        { className: 'cm-footer' },
                                        he(
                                            'div',
                                            { className: 'cm-footer-buttons' },
                                            t,
                                            h,
                                            _,
                                            n
                                        ),
                                        !p.disablePoweredBy &&
                                            he(
                                                'p',
                                                { className: 'cm-powered-by' },
                                                he(
                                                    'a',
                                                    {
                                                        target: '_blank',
                                                        href:
                                                            p.poweredBy ||
                                                            'https://kiprotect.com/klaro',
                                                        rel: 'noopener',
                                                    },
                                                    m(['poweredBy'])
                                                )
                                            )
                                    )
                                );
                                return v
                                    ? he(
                                          'div',
                                          {
                                              id: 'cookieScreen',
                                              className:
                                                  'cookie-modal cm-embedded',
                                          },
                                          x
                                      )
                                    : he(
                                          'div',
                                          {
                                              id: 'cookieScreen',
                                              className: 'cookie-modal',
                                          },
                                          he('div', {
                                              className: 'cm-bg',
                                              onClick: i,
                                          }),
                                          x
                                      );
                            },
                        },
                    ]) && yt(t.prototype, n),
                    o && yt(t, o),
                    i
                );
            })(ge);
            n(128);
            function xt(e) {
                return (xt =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function wt(e, t, n) {
                void 0 === n && (n = !0);
                for (var o = Object.keys(t), r = 0; r < o.length; r++) {
                    var i = o[r],
                        a = t[i],
                        c = e[i];
                    'string' == typeof a
                        ? (n || void 0 === c) && (e[i] = a)
                        : 'object' === xt(a) &&
                          ('object' === xt(c)
                              ? wt(c, a, n)
                              : (n || void 0 === c) && (e[i] = a));
                }
                return e;
            }
            function St(e) {
                return (St =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function jt(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return Ot(e);
                    })(e) ||
                    (function (e) {
                        if (
                            'undefined' != typeof Symbol &&
                            Symbol.iterator in Object(e)
                        )
                            return Array.from(e);
                    })(e) ||
                    (function (e, t) {
                        if (!e) return;
                        if ('string' == typeof e) return Ot(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n &&
                            e.constructor &&
                            (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n) return Array.from(e);
                        if (
                            'Arguments' === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                            return Ot(e, t);
                    })(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Ot(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o;
            }
            function At(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            function zt(e, t) {
                return (zt =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function Pt(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
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
                        o = Dt(e);
                    if (t) {
                        var r = Dt(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return Et(this, n);
                };
            }
            function Et(e, t) {
                return !t || ('object' !== St(t) && 'function' != typeof t)
                    ? Ct(e)
                    : t;
            }
            function Ct(e) {
                if (void 0 === e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return e;
            }
            function Dt(e) {
                return (Dt = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function Tt(e, t, n) {
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
            var It = (function (e) {
                !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError(
                            'Super expression must either be null or a function'
                        );
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                        t && zt(e, t);
                })(i, e);
                var t,
                    n,
                    o,
                    r = Pt(i);
                function i(e) {
                    var t;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, i),
                        Tt(
                            Ct((t = r.call(this, e))),
                            'executeButtonClicked',
                            function (e) {
                                var n =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : 0,
                                    o = t.state.modal,
                                    r = t.props.manager.confirmed;
                                if (
                                    (t.props.manager.saveAndApplyConsents(e),
                                    n > 0 &&
                                        !r &&
                                        (o || t.props.config.mustConsent))
                                ) {
                                    var i = function () {
                                        t.setState({ confirming: !1 }),
                                            t.props.hide();
                                    };
                                    t.setState({ confirming: !0 }),
                                        0 === n ? i() : setTimeout(i, 800);
                                } else t.props.hide();
                            }
                        ),
                        Tt(Ct(t), 'saveAndHide', function () {
                            t.executeButtonClicked('save');
                        }),
                        Tt(Ct(t), 'acceptAndHide', function () {
                            var e = t.props.manager.changeAll(!0);
                            t.executeButtonClicked('accept', e);
                        }),
                        Tt(Ct(t), 'acceptLocalOnlyAndHide', function () {
                            var e = t.props.manager.changeAllWithTag(
                                !0,
                                'non-eu'
                            );
                            t.executeButtonClicked('acceptLocalOnly', e);
                        }),
                        Tt(Ct(t), 'declineAndHide', function () {
                            var e = t.props.manager.changeAll(!1);
                            t.executeButtonClicked('decline', e);
                        }),
                        (t.state = { modal: e.modal, confirming: !1 }),
                        t
                    );
                }
                return (
                    (t = i),
                    (n = [
                        {
                            key: 'componentDidUpdate',
                            value: function (e) {
                                e.modal !== this.props.modal &&
                                    this.setState({ modal: this.props.modal }),
                                    this.noticeRef && this.noticeRef.focus();
                            },
                        },
                        {
                            key: 'render',
                            value: function () {
                                var e,
                                    t = this,
                                    n = this.props,
                                    o = n.lang,
                                    r = n.config,
                                    i = n.show,
                                    a = n.manager,
                                    c = n.testing,
                                    s = n.t,
                                    l = this.state,
                                    u = l.confirming,
                                    p = l.modal,
                                    d = r.embedded,
                                    f = r.noticeAsModal,
                                    m = r.hideLearnMore,
                                    v = r.purposeOrder || [],
                                    y = (function (e) {
                                        for (
                                            var t = new Set([]), n = 0;
                                            n < e.services.length;
                                            n++
                                        )
                                            for (
                                                var o =
                                                        e.services[n]
                                                            .purposes || [],
                                                    r = 0;
                                                r < o.length;
                                                r++
                                            )
                                                t.add(o[r]);
                                        return Array.from(t);
                                    })(r)
                                        .filter(function (e) {
                                            return 'functional' !== e;
                                        })
                                        .sort(function (e, t) {
                                            return v.indexOf(e) - v.indexOf(t);
                                        })
                                        .map(function (e) {
                                            return (
                                                s([
                                                    '!',
                                                    'purposes',
                                                    e,
                                                    'title?',
                                                ]) || xe(e)
                                            );
                                        }),
                                    h = '';
                                (h =
                                    1 === y.length
                                        ? y[0]
                                        : []
                                              .concat(jt(y.slice(0, -2)), [
                                                  y.slice(-2).join(' & '),
                                              ])
                                              .join(', ')),
                                    void 0 !== r.privacyPolicy
                                        ? 'string' == typeof r.privacyPolicy
                                            ? (e = r.privacyPolicy)
                                            : 'object' ===
                                                  St(r.privacyPolicy) &&
                                              (e =
                                                  r.privacyPolicy[o] ||
                                                  r.privacyPolicy.default)
                                        : void 0 !==
                                              (e = s(
                                                  ['!', 'privacyPolicyUrl'],
                                                  { lang: o }
                                              )) && (e = e.join(''));
                                var b,
                                    g = function (e) {
                                        e.preventDefault(),
                                            t.setState({ modal: !0 });
                                    };
                                if (
                                    (a.changed &&
                                        (b = he(
                                            'p',
                                            { className: 'cn-changes' },
                                            s([
                                                'consentNotice',
                                                'changeDescription',
                                            ])
                                        )),
                                    !i && !c && !u)
                                )
                                    return he('div', null);
                                var k,
                                    _ =
                                        (!r.mustConsent || f) &&
                                        !a.confirmed &&
                                        !r.noNotice,
                                    x = r.hideDeclineAll
                                        ? ''
                                        : he(
                                              'button',
                                              {
                                                  className:
                                                      'cm-btn cm-btn-danger cn-decline',
                                                  type: 'button',
                                                  onClick: this.declineAndHide,
                                              },
                                              s(['decline'])
                                          ),
                                    w = r.acceptAll
                                        ? he(
                                              'button',
                                              {
                                                  className:
                                                      'cm-btn cm-btn-success',
                                                  type: 'button',
                                                  onClick: this.acceptAndHide,
                                              },
                                              s(['ok'])
                                          )
                                        : he(
                                              'button',
                                              {
                                                  className:
                                                      'cm-btn cm-btn-success',
                                                  type: 'button',
                                                  onClick: this.saveAndHide,
                                              },
                                              s(['ok'])
                                          ),
                                    S = he(
                                        'button',
                                        {
                                            className:
                                                'cm-btn cm-btn-danger cm-btn-local-only',
                                            type: 'button',
                                            onClick:
                                                this.acceptLocalOnlyAndHide,
                                        },
                                        s(['acceptLocalOnly'])
                                    ),
                                    j = function () {
                                        return f
                                            ? he(
                                                  'button',
                                                  {
                                                      key: 'learnMoreLink',
                                                      className:
                                                          'cm-btn cm-btn-lern-more cm-btn-info',
                                                      type: 'button',
                                                      onClick: g,
                                                  },
                                                  s([
                                                      'consentNotice',
                                                      'learnMore',
                                                  ])
                                              )
                                            : he(
                                                  'a',
                                                  {
                                                      key: 'learnMoreLink',
                                                      className:
                                                          'cm-link cn-learn-more',
                                                      href: '#',
                                                      onClick: g,
                                                  },
                                                  s([
                                                      'consentNotice',
                                                      'learnMore',
                                                  ])
                                              );
                                    };
                                if (
                                    (void 0 !== e &&
                                        (k = he(
                                            'a',
                                            { key: 'ppLink', href: e },
                                            s(['privacyPolicy', 'name'])
                                        )),
                                    p ||
                                        (a.confirmed && !c) ||
                                        (!a.confirmed && r.mustConsent))
                                )
                                    return he(_t, {
                                        t: s,
                                        lang: o,
                                        config: r,
                                        hide: function () {
                                            (r.mustConsent && !r.acceptAll) ||
                                                (a.confirmed && !c
                                                    ? t.props.hide()
                                                    : t.setState({ modal: !1 }),
                                                setTimeout(function () {
                                                    t.noticeRef &&
                                                        t.noticeRef.focus();
                                                }, 1));
                                        },
                                        confirming: u,
                                        declineAndHide: this.declineAndHide,
                                        saveAndHide: this.saveAndHide,
                                        acceptAndHide: this.acceptAndHide,
                                        acceptLocalAndHide:
                                            this.acceptLocalOnlyAndHide,
                                        manager: a,
                                    });
                                var O = he(
                                    'div',
                                    {
                                        role: 'dialog',
                                        'aria-describedby': 'id-cookie-notice',
                                        'aria-labelledby': 'id-cookie-title',
                                        id: 'klaro-cookie-notice',
                                        tabIndex: '0',
                                        autoFocus: !0,
                                        ref: function (e) {
                                            t.noticeRef = e;
                                        },
                                        className: 'cookie-notice '
                                            .concat(
                                                _ || c
                                                    ? ''
                                                    : 'cookie-notice-hidden',
                                                ' '
                                            )
                                            .concat(
                                                f ? 'cookie-modal-notice' : '',
                                                ' '
                                            )
                                            .concat(d ? 'cn-embedded' : ''),
                                    },
                                    he(
                                        'div',
                                        { className: 'cn-body' },
                                        s(['!', 'consentNotice', 'title']) &&
                                            he(
                                                'h2',
                                                { id: 'id-cookie-title' },
                                                s(['consentNotice', 'title'])
                                            ),
                                        he(
                                            'p',
                                            { id: 'id-cookie-notice' },
                                            he(Ee, {
                                                config: r,
                                                text: s(
                                                    [
                                                        'consentNotice',
                                                        'description',
                                                    ],
                                                    {
                                                        purposes: he(
                                                            'strong',
                                                            { key: 'strong' },
                                                            h
                                                        ),
                                                        privacyPolicy: k,
                                                        learnMoreLink: j(),
                                                    }
                                                ),
                                            })
                                        ),
                                        c &&
                                            he(
                                                'p',
                                                null,
                                                s(['consentNotice', 'testing'])
                                            ),
                                        b,
                                        he(
                                            'div',
                                            { className: 'cn-ok' },
                                            !m && j(),
                                            he(
                                                'div',
                                                { className: 'cn-buttons' },
                                                x,
                                                S,
                                                w
                                            )
                                        )
                                    )
                                );
                                return f
                                    ? he(
                                          'div',
                                          {
                                              id: 'cookieScreen',
                                              className: 'cookie-modal',
                                          },
                                          he('div', { className: 'cm-bg' }),
                                          O
                                      )
                                    : O;
                            },
                        },
                    ]) && At(t.prototype, n),
                    o && At(t, o),
                    i
                );
            })(ge);
            function Rt(e) {
                return (Rt =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function Nt(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            function Mt(e, t) {
                return (Mt =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function qt(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
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
                        o = Ft(e);
                    if (t) {
                        var r = Ft(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return Ut(this, n);
                };
            }
            function Ut(e, t) {
                return !t || ('object' !== Rt(t) && 'function' != typeof t)
                    ? Lt(e)
                    : t;
            }
            function Lt(e) {
                if (void 0 === e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return e;
            }
            function Ft(e) {
                return (Ft = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var Ht = (function (e) {
                !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError(
                            'Super expression must either be null or a function'
                        );
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                        t && Mt(e, t);
                })(i, e);
                var t,
                    n,
                    o,
                    r = qt(i);
                function i(e) {
                    var t;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, i),
                        (t = r.call(this, e)),
                        e.manager.watch(Lt(t)),
                        (t.state = {
                            show: e.show > 0 || !e.manager.confirmed,
                        }),
                        t
                    );
                }
                return (
                    (t = i),
                    (n = [
                        {
                            key: 'componentWillUnmount',
                            value: function () {
                                this.props.manager.unwatch(this);
                            },
                        },
                        {
                            key: 'update',
                            value: function (e, t) {
                                e === this.props.manager &&
                                    'applyConsents' === t &&
                                    (!this.props.config.embedded &&
                                    this.props.manager.confirmed
                                        ? this.setState({ show: !1 })
                                        : this.forceUpdate());
                            },
                        },
                        {
                            key: 'notifyApi',
                            value: function () {
                                var e = this.props,
                                    t = e.api,
                                    n = e.modal,
                                    o = e.show,
                                    r = e.config;
                                if (void 0 !== t) {
                                    if (n || o > 0) return;
                                    this.props.manager.confirmed ||
                                        this.props.manager.auxiliaryStore.getWithKey(
                                            'shown-before'
                                        ) ||
                                        (t.update(this, 'showNotice', {
                                            config: r,
                                        }),
                                        this.props.manager.auxiliaryStore.setWithKey(
                                            'shown-before',
                                            !0
                                        ));
                                }
                            },
                        },
                        {
                            key: 'componentDidMount',
                            value: function () {
                                this.notifyApi();
                            },
                        },
                        {
                            key: 'componentDidUpdate',
                            value: function (e) {
                                if (e.show !== this.props.show) {
                                    this.notifyApi();
                                    var t =
                                        this.props.show > 0 ||
                                        !this.props.manager.confirmed;
                                    t !== this.state.show &&
                                        this.setState({ show: t });
                                }
                            },
                        },
                        {
                            key: 'render',
                            value: function () {
                                var e = this,
                                    t = this.props,
                                    n = t.config,
                                    o = t.t,
                                    r = t.lang,
                                    i = t.testing,
                                    a = t.manager,
                                    c = t.modal,
                                    s = this.state.show,
                                    l = n.additionalClass,
                                    u = n.embedded,
                                    p = n.stylePrefix;
                                return he(
                                    'div',
                                    {
                                        lang: r,
                                        className:
                                            (p || 'klaro') +
                                            (void 0 !== l ? ' ' + l : ''),
                                    },
                                    he(It, {
                                        key: 'app-' + this.props.show,
                                        t: o,
                                        testing: i,
                                        show: s,
                                        lang: r,
                                        modal: c,
                                        hide: function () {
                                            u || e.setState({ show: !1 });
                                        },
                                        config: n,
                                        manager: a,
                                    })
                                );
                            },
                        },
                    ]) && Nt(t.prototype, n),
                    o && Nt(t, o),
                    i
                );
            })(ge);
            function Wt(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if (
                            'undefined' == typeof Symbol ||
                            !(Symbol.iterator in Object(e))
                        )
                            return;
                        var n = [],
                            o = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (
                                var a, c = e[Symbol.iterator]();
                                !(o = (a = c.next()).done) &&
                                (n.push(a.value), !t || n.length !== t);
                                o = !0
                            );
                        } catch (e) {
                            (r = !0), (i = e);
                        } finally {
                            try {
                                o || null == c.return || c.return();
                            } finally {
                                if (r) throw i;
                            }
                        }
                        return n;
                    })(e, t) ||
                    (function (e, t) {
                        if (!e) return;
                        if ('string' == typeof e) return Bt(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n &&
                            e.constructor &&
                            (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n) return Array.from(e);
                        if (
                            'Arguments' === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                            return Bt(e, t);
                    })(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Bt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o;
            }
            var Kt = function (e) {
                var t = e.manager,
                    n = e.style,
                    o = e.config,
                    r = e.t,
                    i = e.lang,
                    a = e.service,
                    c = Wt(K(0), 2),
                    s = c[0],
                    l = c[1],
                    u = o.additionalClass,
                    p = (o.embedded, o.stylePrefix);
                $(function () {
                    var e = {
                        update: function () {
                            return l(s + 1);
                        },
                    };
                    return (
                        t.watch(e),
                        function () {
                            t.unwatch(e);
                        }
                    );
                });
                var d =
                    Pe(a.translations || {}, i, 'zz', ['!', 'title']) ||
                    r(['!', a.name, 'title?']) ||
                    xe(a.name);
                return he(
                    'div',
                    {
                        lang: i,
                        className:
                            (p || 'klaro') +
                            (void 0 !== u ? ' ' + u : '') +
                            ' cm-as-context-notice',
                    },
                    he(
                        'div',
                        {
                            className:
                                'context-notice' +
                                (void 0 !== n ? ' cm-'.concat(n) : ''),
                        },
                        he(
                            'p',
                            null,
                            r(['contextualConsent', 'description'], {
                                title: d,
                            })
                        ),
                        he(
                            'p',
                            { className: 'cm-buttons' },
                            he(
                                'button',
                                {
                                    className: 'cm-btn cm-btn-success',
                                    type: 'button',
                                    onClick: function () {
                                        t.updateConsent(a.name, !0),
                                            t.applyConsents(!1, !0, a.name),
                                            t.updateConsent(a.name, !1);
                                    },
                                },
                                r(['contextualConsent', 'acceptOnce'])
                            ),
                            he(
                                'button',
                                {
                                    className: 'cm-btn cm-btn-success-var',
                                    type: 'button',
                                    onClick: function () {
                                        t.updateConsent(a.name, !0),
                                            t.confirmed
                                                ? (t.saveConsents(
                                                      'contextual-accept'
                                                  ),
                                                  t.applyConsents(
                                                      !1,
                                                      !0,
                                                      a.name
                                                  ))
                                                : t.applyConsents(
                                                      !1,
                                                      !0,
                                                      a.name
                                                  );
                                    },
                                },
                                r(['contextualConsent', 'acceptAlways'])
                            )
                        )
                    )
                );
            };
            n(174), n(94), n(129), n(95);
            function Vt() {
                for (
                    var e = document.cookie.split(';'),
                        t = [],
                        n = new RegExp('^\\s*([^=]+)\\s*=\\s*(.*?)$'),
                        o = 0;
                    o < e.length;
                    o++
                ) {
                    var r = e[o],
                        i = n.exec(r);
                    null !== i && t.push({ name: i[1], value: i[2] });
                }
                return t;
            }
            function $t(e, t, n) {
                var o = e + '=; Max-Age=-99999999;';
                (document.cookie = o),
                    (o += ' path=' + (t || '/') + ';'),
                    (document.cookie = o),
                    void 0 !== n &&
                        ((o += ' domain=' + n + ';'), (document.cookie = o));
            }
            n(176), n(177);
            function Gt(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if (
                            'undefined' == typeof Symbol ||
                            !(Symbol.iterator in Object(e))
                        )
                            return;
                        var n = [],
                            o = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (
                                var a, c = e[Symbol.iterator]();
                                !(o = (a = c.next()).done) &&
                                (n.push(a.value), !t || n.length !== t);
                                o = !0
                            );
                        } catch (e) {
                            (r = !0), (i = e);
                        } finally {
                            try {
                                o || null == c.return || c.return();
                            } finally {
                                if (r) throw i;
                            }
                        }
                        return n;
                    })(e, t) ||
                    Zt(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Zt(e, t) {
                if (e) {
                    if ('string' == typeof e) return Qt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === n &&
                            e.constructor &&
                            (n = e.constructor.name),
                        'Map' === n || 'Set' === n
                            ? Array.from(e)
                            : 'Arguments' === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? Qt(e, t)
                            : void 0
                    );
                }
            }
            function Qt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o;
            }
            function Yt(e) {
                for (var t = {}, n = 0; n < e.attributes.length; n++) {
                    var o = e.attributes[n];
                    o.name.startsWith('data-') &&
                        (t[o.name.slice(5)] = o.value);
                }
                return t;
            }
            function Jt(e, t) {
                for (var n = Object.keys(e), o = 0; o < n.length; o++) {
                    var r = n[o],
                        i = e[r];
                    t[r] !== i && t.setAttribute('data-' + r, i);
                }
            }
            function Xt(e) {
                var t,
                    n = (function (e, t) {
                        var n;
                        if (
                            'undefined' == typeof Symbol ||
                            null == e[Symbol.iterator]
                        ) {
                            if (
                                Array.isArray(e) ||
                                (n = Zt(e)) ||
                                (t && e && 'number' == typeof e.length)
                            ) {
                                n && (e = n);
                                var o = 0,
                                    r = function () {};
                                return {
                                    s: r,
                                    n: function () {
                                        return o >= e.length
                                            ? { done: !0 }
                                            : { done: !1, value: e[o++] };
                                    },
                                    e: function (e) {
                                        throw e;
                                    },
                                    f: r,
                                };
                            }
                            throw new TypeError(
                                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                            );
                        }
                        var i,
                            a = !0,
                            c = !1;
                        return {
                            s: function () {
                                n = e[Symbol.iterator]();
                            },
                            n: function () {
                                var e = n.next();
                                return (a = e.done), e;
                            },
                            e: function (e) {
                                (c = !0), (i = e);
                            },
                            f: function () {
                                try {
                                    a || null == n.return || n.return();
                                } finally {
                                    if (c) throw i;
                                }
                            },
                        };
                    })(
                        document.querySelectorAll(
                            'style[data-context=klaro-styles]'
                        )
                    );
                try {
                    for (n.s(); !(t = n.n()).done; ) {
                        var o = t.value,
                            r = o.innerText;
                        void 0 !== o.styleSheet && (r = o.styleSheet.cssText);
                        for (
                            var i = function () {
                                    var e = Gt(c[a], 2),
                                        t = e[0],
                                        n = e[1],
                                        o = new RegExp(
                                            '([a-z0-9-]+):[^;]+;[\\s\\n]*\\1:\\s*var\\(--' +
                                                t +
                                                ',\\s*[^\\)]+\\)',
                                            'g'
                                        );
                                    r = r.replace(o, function (e, o) {
                                        return ''
                                            .concat(o, ': ')
                                            .concat(n, '; ')
                                            .concat(o, ': var(--')
                                            .concat(t, ', ')
                                            .concat(n, ')');
                                    });
                                },
                                a = 0,
                                c = Object.entries(e);
                            a < c.length;
                            a++
                        )
                            i();
                        var s = document.createElement('style');
                        s.setAttribute('type', 'text/css'),
                            s.setAttribute('data-context', 'klaro-styles'),
                            void 0 !== s.styleSheet
                                ? (s.styleSheet.cssText = r)
                                : (s.innerText = r),
                            o.parentElement.appendChild(s),
                            o.parentElement.removeChild(o);
                    }
                } catch (e) {
                    n.e(e);
                } finally {
                    n.f();
                }
            }
            function en(e) {
                return (en =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function tn(e, t) {
                if ('function' != typeof t && null !== t)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                })),
                    t && nn(e, t);
            }
            function nn(e, t) {
                return (nn =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function on(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
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
                        o = an(e);
                    if (t) {
                        var r = an(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return rn(this, n);
                };
            }
            function rn(e, t) {
                return !t || ('object' !== en(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return e;
                      })(e)
                    : t;
            }
            function an(e) {
                return (an = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function cn(e, t) {
                if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
            }
            function sn(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            function ln(e, t, n) {
                return t && sn(e.prototype, t), n && sn(e, n), e;
            }
            var un = (function () {
                    function e() {
                        cn(this, e), (this.value = null);
                    }
                    return (
                        ln(e, [
                            {
                                key: 'get',
                                value: function () {
                                    return this.value;
                                },
                            },
                            {
                                key: 'set',
                                value: function (e) {
                                    this.value = e;
                                },
                            },
                            {
                                key: 'delete',
                                value: function () {
                                    this.value = null;
                                },
                            },
                        ]),
                        e
                    );
                })(),
                pn = (function () {
                    function e(t) {
                        cn(this, e),
                            (this.cookieName = t.storageName),
                            (this.cookieDomain = t.cookieDomain),
                            (this.cookiePath = t.cookiePath),
                            (this.cookieExpiresAfterDays =
                                t.cookieExpiresAfterDays);
                    }
                    return (
                        ln(e, [
                            {
                                key: 'get',
                                value: function () {
                                    var e = (function (e) {
                                        for (
                                            var t = Vt(), n = 0;
                                            n < t.length;
                                            n++
                                        )
                                            if (t[n].name === e) return t[n];
                                        return null;
                                    })(this.cookieName);
                                    return e ? e.value : null;
                                },
                            },
                            {
                                key: 'set',
                                value: function (e) {
                                    return (function (e, t, n, o, r) {
                                        var i = '';
                                        if (n) {
                                            var a = new Date();
                                            a.setTime(
                                                a.getTime() +
                                                    24 * n * 60 * 60 * 1e3
                                            ),
                                                (i =
                                                    '; expires=' +
                                                    a.toUTCString());
                                        }
                                        void 0 !== o && (i += '; domain=' + o),
                                            (i +=
                                                void 0 !== r
                                                    ? '; path=' + r
                                                    : '; path=/'),
                                            (document.cookie =
                                                e +
                                                '=' +
                                                (t || '') +
                                                i +
                                                '; SameSite=Lax');
                                    })(
                                        this.cookieName,
                                        e,
                                        this.cookieExpiresAfterDays,
                                        this.cookieDomain,
                                        this.cookiePath
                                    );
                                },
                            },
                            {
                                key: 'delete',
                                value: function () {
                                    return $t(this.cookieName);
                                },
                            },
                        ]),
                        e
                    );
                })(),
                dn = (function () {
                    function e(t, n) {
                        cn(this, e),
                            (this.key = t.storageName),
                            (this.handle = n);
                    }
                    return (
                        ln(e, [
                            {
                                key: 'get',
                                value: function () {
                                    return this.handle.getItem(this.key);
                                },
                            },
                            {
                                key: 'getWithKey',
                                value: function (e) {
                                    return this.handle.getItem(e);
                                },
                            },
                            {
                                key: 'set',
                                value: function (e) {
                                    return this.handle.setItem(this.key, e);
                                },
                            },
                            {
                                key: 'setWithKey',
                                value: function (e, t) {
                                    return this.handle.setItem(e, t);
                                },
                            },
                            {
                                key: 'delete',
                                value: function () {
                                    return this.handle.removeItem(this.key);
                                },
                            },
                            {
                                key: 'deleteWithKey',
                                value: function (e) {
                                    return this.handle.removeItem(e);
                                },
                            },
                        ]),
                        e
                    );
                })(),
                fn = (function (e) {
                    tn(n, e);
                    var t = on(n);
                    function n(e) {
                        return cn(this, n), t.call(this, e, localStorage);
                    }
                    return n;
                })(dn),
                mn = (function (e) {
                    tn(n, e);
                    var t = on(n);
                    function n(e) {
                        return cn(this, n), t.call(this, e, sessionStorage);
                    }
                    return n;
                })(dn),
                vn = {
                    cookie: pn,
                    test: un,
                    localStorage: fn,
                    sessionStorage: mn,
                };
            function yn(e, t) {
                var n;
                if (
                    'undefined' == typeof Symbol ||
                    null == e[Symbol.iterator]
                ) {
                    if (
                        Array.isArray(e) ||
                        (n = bn(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var o = 0,
                            r = function () {};
                        return {
                            s: r,
                            n: function () {
                                return o >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[o++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: r,
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                }
                var i,
                    a = !0,
                    c = !1;
                return {
                    s: function () {
                        n = e[Symbol.iterator]();
                    },
                    n: function () {
                        var e = n.next();
                        return (a = e.done), e;
                    },
                    e: function (e) {
                        (c = !0), (i = e);
                    },
                    f: function () {
                        try {
                            a || null == n.return || n.return();
                        } finally {
                            if (c) throw i;
                        }
                    },
                };
            }
            function hn(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if (
                            'undefined' == typeof Symbol ||
                            !(Symbol.iterator in Object(e))
                        )
                            return;
                        var n = [],
                            o = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (
                                var a, c = e[Symbol.iterator]();
                                !(o = (a = c.next()).done) &&
                                (n.push(a.value), !t || n.length !== t);
                                o = !0
                            );
                        } catch (e) {
                            (r = !0), (i = e);
                        } finally {
                            try {
                                o || null == c.return || c.return();
                            } finally {
                                if (r) throw i;
                            }
                        }
                        return n;
                    })(e, t) ||
                    bn(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function bn(e, t) {
                if (e) {
                    if ('string' == typeof e) return gn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === n &&
                            e.constructor &&
                            (n = e.constructor.name),
                        'Map' === n || 'Set' === n
                            ? Array.from(e)
                            : 'Arguments' === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? gn(e, t)
                            : void 0
                    );
                }
            }
            function gn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o;
            }
            function kn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t &&
                        (o = o.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t
                            ).enumerable;
                        })),
                        n.push.apply(n, o);
                }
                return n;
            }
            function _n(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? kn(Object(n), !0).forEach(function (t) {
                              xn(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                          )
                        : kn(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                              );
                          });
                }
                return e;
            }
            function xn(e, t, n) {
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
            function wn(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            var Sn = (function () {
                function e(t, n, o) {
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                'Cannot call a class as a function'
                            );
                    })(this, e),
                        (this.config = t),
                        (this.store =
                            void 0 !== n
                                ? n
                                : new vn[this.storageMethod](this)),
                        void 0 === this.store && (this.store = vn.cookie),
                        (this.auxiliaryStore = void 0 !== o ? o : new mn(this)),
                        (this.consents = this.defaultConsents),
                        (this.confirmed = !1),
                        (this.changed = !1),
                        (this.states = {}),
                        (this.initialized = {}),
                        (this.executedOnce = {}),
                        (this.watchers = new Set([])),
                        this.loadConsents(),
                        this.applyConsents(),
                        (this.savedConsents = _n({}, this.consents));
                }
                var t, n, o;
                return (
                    (t = e),
                    (n = [
                        {
                            key: 'watch',
                            value: function (e) {
                                this.watchers.has(e) || this.watchers.add(e);
                            },
                        },
                        {
                            key: 'unwatch',
                            value: function (e) {
                                this.watchers.has(e) && this.watchers.delete(e);
                            },
                        },
                        {
                            key: 'notify',
                            value: function (e, t) {
                                var n = this;
                                this.watchers.forEach(function (o) {
                                    o.update(n, e, t);
                                });
                            },
                        },
                        {
                            key: 'getService',
                            value: function (e) {
                                var t = this.config.services.filter(function (
                                    t
                                ) {
                                    return t.name === e;
                                });
                                if (t.length > 0) return t[0];
                            },
                        },
                        {
                            key: 'getDefaultConsent',
                            value: function (e) {
                                var t = e.default || e.required;
                                return (
                                    void 0 === t && (t = this.config.default),
                                    void 0 === t && (t = !1),
                                    t
                                );
                            },
                        },
                        {
                            key: 'changeAll',
                            value: function (e) {
                                var t = this,
                                    n = 0;
                                return (
                                    this.config.services
                                        .filter(function (e) {
                                            return !e.contextualConsentOnly;
                                        })
                                        .map(function (o) {
                                            var r =
                                                'function' == typeof e
                                                    ? e(o)
                                                    : e;
                                            o.required || t.config.required || r
                                                ? t.updateConsent(o.name, !0) &&
                                                  n++
                                                : t.updateConsent(o.name, !1) &&
                                                  n++;
                                        }),
                                    n
                                );
                            },
                        },
                        {
                            key: 'changeAllWithTag',
                            value: function (e, t) {
                                var n = this;
                                return this.changeAll(function (o) {
                                    return n.hasTag(o, t) ? !e : e;
                                });
                            },
                        },
                        {
                            key: 'hasTag',
                            value: function (e, t) {
                                var n;
                                return (
                                    -1 !==
                                    (null !== (n = e.tags) && void 0 !== n
                                        ? n
                                        : []
                                    ).findIndex(function (e) {
                                        return e === t;
                                    })
                                );
                            },
                        },
                        {
                            key: 'updateConsent',
                            value: function (e, t) {
                                var n = (this.consents[e] || !1) !== t;
                                return (
                                    (this.consents[e] = t),
                                    this.notify('consents', this.consents),
                                    n
                                );
                            },
                        },
                        {
                            key: 'resetConsents',
                            value: function () {
                                (this.consents = this.defaultConsents),
                                    (this.states = {}),
                                    (this.confirmed = !1),
                                    this.applyConsents(),
                                    (this.savedConsents = _n(
                                        {},
                                        this.consents
                                    )),
                                    this.store.delete(),
                                    this.notify('consents', this.consents);
                            },
                        },
                        {
                            key: 'getConsent',
                            value: function (e) {
                                return this.consents[e] || !1;
                            },
                        },
                        {
                            key: 'loadConsents',
                            value: function () {
                                var e = this.store.get();
                                return (
                                    null !== e &&
                                        ((this.consents = JSON.parse(
                                            decodeURIComponent(e)
                                        )),
                                        this._checkConsents(),
                                        this.notify('consents', this.consents)),
                                    this.consents
                                );
                            },
                        },
                        {
                            key: 'saveAndApplyConsents',
                            value: function (e) {
                                this.saveConsents(e), this.applyConsents();
                            },
                        },
                        {
                            key: 'changedConsents',
                            value: function () {
                                for (
                                    var e = {},
                                        t = 0,
                                        n = Object.entries(this.consents);
                                    t < n.length;
                                    t++
                                ) {
                                    var o = hn(n[t], 2),
                                        r = o[0],
                                        i = o[1];
                                    this.savedConsents[r] !== i && (e[r] = i);
                                }
                                return e;
                            },
                        },
                        {
                            key: 'saveConsents',
                            value: function (e) {
                                var t = encodeURIComponent(
                                    JSON.stringify(this.consents)
                                );
                                this.store.set(t),
                                    (this.confirmed = !0),
                                    (this.changed = !1);
                                var n = this.changedConsents();
                                (this.savedConsents = _n({}, this.consents)),
                                    this.notify('saveConsents', {
                                        changes: n,
                                        consents: this.consents,
                                        type: e || 'script',
                                    });
                            },
                        },
                        {
                            key: 'applyConsents',
                            value: function (e, t, n) {
                                function o(e, t) {
                                    if (void 0 !== e)
                                        return (
                                            'function' == typeof e
                                                ? e
                                                : new Function('opts', e)
                                        )(t);
                                }
                                for (
                                    var r = 0, i = 0;
                                    i < this.config.services.length;
                                    i++
                                ) {
                                    var a = this.config.services[i];
                                    if (void 0 === n || n === a.name) {
                                        var c = a.vars || {},
                                            s = {
                                                service: a,
                                                config: this.config,
                                                vars: c,
                                            };
                                        this.initialized[a.name] ||
                                            ((this.initialized[a.name] = !0),
                                            o(a.onInit, s));
                                    }
                                }
                                for (
                                    var l = 0;
                                    l < this.config.services.length;
                                    l++
                                ) {
                                    var u = this.config.services[l];
                                    if (void 0 === n || n === u.name) {
                                        var p = this.states[u.name],
                                            d = u.vars || {},
                                            f =
                                                void 0 !== u.optOut
                                                    ? u.optOut
                                                    : this.config.optOut || !1,
                                            m =
                                                void 0 !== u.required
                                                    ? u.required
                                                    : this.config.required ||
                                                      !1,
                                            v = this.confirmed || f || e || t,
                                            y =
                                                (this.getConsent(u.name) &&
                                                    v) ||
                                                m,
                                            h = {
                                                service: u,
                                                config: this.config,
                                                vars: d,
                                                consents: this.consents,
                                                confirmed: this.confirmed,
                                            };
                                        p !== y && r++,
                                            e ||
                                                (o(
                                                    y
                                                        ? u.onAccept
                                                        : u.onDecline,
                                                    h
                                                ),
                                                this.updateServiceElements(
                                                    u,
                                                    y
                                                ),
                                                this.updateServiceStorage(u, y),
                                                void 0 !== u.callback &&
                                                    u.callback(y, u),
                                                void 0 !==
                                                    this.config.callback &&
                                                    this.config.callback(y, u),
                                                (this.states[u.name] = y));
                                    }
                                }
                                return this.notify('applyConsents', r, n), r;
                            },
                        },
                        {
                            key: 'updateServiceElements',
                            value: function (e, t) {
                                if (t) {
                                    if (e.onlyOnce && this.executedOnce[e.name])
                                        return;
                                    this.executedOnce[e.name] = !0;
                                }
                                for (
                                    var n = document.querySelectorAll(
                                            "[data-name='" + e.name + "']"
                                        ),
                                        o = 0;
                                    o < n.length;
                                    o++
                                ) {
                                    var r = n[o],
                                        i = r.parentElement,
                                        a = Yt(r),
                                        c = a.type,
                                        s = a.src,
                                        l = a.href,
                                        u = ['href', 'src', 'type'];
                                    if ('placeholder' !== c)
                                        if ('IFRAME' === r.tagName) {
                                            if (t && r.src === s) {
                                                console.debug(
                                                    'Skipping '
                                                        .concat(
                                                            r.tagName,
                                                            ' for service '
                                                        )
                                                        .concat(
                                                            e.name,
                                                            ', as it already has the correct type...'
                                                        )
                                                );
                                                continue;
                                            }
                                            var p,
                                                d = document.createElement(
                                                    r.tagName
                                                ),
                                                f = yn(r.attributes);
                                            try {
                                                for (
                                                    f.s();
                                                    !(p = f.n()).done;

                                                ) {
                                                    var m = p.value;
                                                    d.setAttribute(
                                                        m.name,
                                                        m.value
                                                    );
                                                }
                                            } catch (e) {
                                                f.e(e);
                                            } finally {
                                                f.f();
                                            }
                                            (d.innerText = r.innerText),
                                                (d.text = r.text),
                                                t
                                                    ? (void 0 !==
                                                          a[
                                                              'original-display'
                                                          ] &&
                                                          (d.style.display =
                                                              a[
                                                                  'original-display'
                                                              ]),
                                                      void 0 !== a.src &&
                                                          (d.src = a.src))
                                                    : ((d.src = ''),
                                                      void 0 !==
                                                          a[
                                                              'modified-by-klaro'
                                                          ] &&
                                                      void 0 !==
                                                          a['original-display']
                                                          ? d.setAttribute(
                                                                'data-original-display',
                                                                a[
                                                                    'original-display'
                                                                ]
                                                            )
                                                          : (void 0 !==
                                                                r.style
                                                                    .display &&
                                                                d.setAttribute(
                                                                    'data-original-display',
                                                                    r.style
                                                                        .display
                                                                ),
                                                            d.setAttribute(
                                                                'data-modified-by-klaro',
                                                                'yes'
                                                            )),
                                                      (d.style.display =
                                                          'none')),
                                                i.insertBefore(d, r),
                                                i.removeChild(r);
                                        } else if (
                                            'SCRIPT' === r.tagName ||
                                            'LINK' === r.tagName
                                        ) {
                                            if (
                                                t &&
                                                r.type === (c || '') &&
                                                r.src === s
                                            ) {
                                                console.debug(
                                                    'Skipping '
                                                        .concat(
                                                            r.tagName,
                                                            ' for service '
                                                        )
                                                        .concat(
                                                            e.name,
                                                            ', as it already has the correct type or src...'
                                                        )
                                                );
                                                continue;
                                            }
                                            var v,
                                                y = document.createElement(
                                                    r.tagName
                                                ),
                                                h = yn(r.attributes);
                                            try {
                                                for (
                                                    h.s();
                                                    !(v = h.n()).done;

                                                ) {
                                                    var b = v.value;
                                                    y.setAttribute(
                                                        b.name,
                                                        b.value
                                                    );
                                                }
                                            } catch (e) {
                                                h.e(e);
                                            } finally {
                                                h.f();
                                            }
                                            (y.innerText = r.innerText),
                                                (y.text = r.text),
                                                t
                                                    ? ((y.type = c || ''),
                                                      void 0 !== s &&
                                                          (y.src = s),
                                                      void 0 !== l &&
                                                          (y.href = l))
                                                    : (y.type = 'text/plain'),
                                                i.insertBefore(y, r),
                                                i.removeChild(r);
                                        } else {
                                            if (t) {
                                                var g,
                                                    k = yn(u);
                                                try {
                                                    for (
                                                        k.s();
                                                        !(g = k.n()).done;

                                                    ) {
                                                        var _ = g.value,
                                                            x = a[_];
                                                        void 0 !== x &&
                                                            (void 0 ===
                                                                a[
                                                                    'original-' +
                                                                        _
                                                                ] &&
                                                                (a[
                                                                    'original-' +
                                                                        _
                                                                ] = r[_]),
                                                            (r[_] = x));
                                                    }
                                                } catch (e) {
                                                    k.e(e);
                                                } finally {
                                                    k.f();
                                                }
                                                void 0 !== a.title &&
                                                    (r.title = a.title),
                                                    void 0 !==
                                                    a['original-display']
                                                        ? (r.style.display =
                                                              a[
                                                                  'original-display'
                                                              ])
                                                        : r.style.removeProperty(
                                                              'display'
                                                          );
                                            } else {
                                                void 0 !== a.title &&
                                                    r.removeAttribute('title'),
                                                    void 0 ===
                                                        a['original-display'] &&
                                                        void 0 !==
                                                            r.style.display &&
                                                        (a['original-display'] =
                                                            r.style.display),
                                                    (r.style.display = 'none');
                                                var w,
                                                    S = yn(u);
                                                try {
                                                    for (
                                                        S.s();
                                                        !(w = S.n()).done;

                                                    ) {
                                                        var j = w.value;
                                                        void 0 !== a[j] &&
                                                            (void 0 !==
                                                            a['original-' + j]
                                                                ? (r[j] =
                                                                      a[
                                                                          'original-' +
                                                                              j
                                                                      ])
                                                                : r.removeAttribute(
                                                                      j
                                                                  ));
                                                    }
                                                } catch (e) {
                                                    S.e(e);
                                                } finally {
                                                    S.f();
                                                }
                                            }
                                            Jt(a, r);
                                        }
                                    else
                                        t
                                            ? ((r.style.display = 'none'),
                                              (a['original-display'] =
                                                  r.style.display))
                                            : (r.style.display =
                                                  a['original-display'] ||
                                                  'block');
                                }
                            },
                        },
                        {
                            key: 'updateServiceStorage',
                            value: function (e, t) {
                                if (
                                    !t &&
                                    void 0 !== e.cookies &&
                                    e.cookies.length > 0
                                )
                                    for (
                                        var n = Vt(), o = 0;
                                        o < e.cookies.length;
                                        o++
                                    ) {
                                        var r = e.cookies[o],
                                            i = void 0,
                                            a = void 0;
                                        if (r instanceof Array) {
                                            var c = hn(r, 3);
                                            (r = c[0]), (i = c[1]), (a = c[2]);
                                        } else if (
                                            r instanceof Object &&
                                            !(r instanceof RegExp)
                                        ) {
                                            var s = r;
                                            (r = s.pattern),
                                                (i = s.path),
                                                (a = s.domain);
                                        }
                                        if (void 0 !== r) {
                                            r instanceof RegExp ||
                                                (r = r.startsWith('^')
                                                    ? new RegExp(r)
                                                    : new RegExp(
                                                          '^' +
                                                              r.replace(
                                                                  /[-[\]/{}()*+?.\\^$|]/g,
                                                                  '\\$&'
                                                              ) +
                                                              '$'
                                                      ));
                                            for (var l = 0; l < n.length; l++) {
                                                var u = n[l];
                                                null !== r.exec(u.name) &&
                                                    (console.debug(
                                                        'Deleting cookie:',
                                                        u.name,
                                                        'Matched pattern:',
                                                        r,
                                                        'Path:',
                                                        i,
                                                        'Domain:',
                                                        a
                                                    ),
                                                    $t(u.name, i, a),
                                                    void 0 === a &&
                                                        $t(
                                                            u.name,
                                                            i,
                                                            '.' +
                                                                window.location
                                                                    .hostname
                                                        ));
                                            }
                                        }
                                    }
                            },
                        },
                        {
                            key: '_checkConsents',
                            value: function () {
                                for (
                                    var e = !0,
                                        t = new Set(
                                            this.config.services.map(function (
                                                e
                                            ) {
                                                return e.name;
                                            })
                                        ),
                                        n = new Set(Object.keys(this.consents)),
                                        o = 0,
                                        r = Object.keys(this.consents);
                                    o < r.length;
                                    o++
                                ) {
                                    var i = r[o];
                                    t.has(i) || delete this.consents[i];
                                }
                                var a,
                                    c = yn(this.config.services);
                                try {
                                    for (c.s(); !(a = c.n()).done; ) {
                                        var s = a.value;
                                        n.has(s.name) ||
                                            ((this.consents[s.name] =
                                                this.getDefaultConsent(s)),
                                            (e = !1));
                                    }
                                } catch (e) {
                                    c.e(e);
                                } finally {
                                    c.f();
                                }
                                (this.confirmed = e), e || (this.changed = !0);
                            },
                        },
                        {
                            key: 'storageMethod',
                            get: function () {
                                return this.config.storageMethod || 'cookie';
                            },
                        },
                        {
                            key: 'storageName',
                            get: function () {
                                return (
                                    this.config.storageName ||
                                    this.config.cookieName ||
                                    'klaro'
                                );
                            },
                        },
                        {
                            key: 'cookieDomain',
                            get: function () {
                                return this.config.cookieDomain || void 0;
                            },
                        },
                        {
                            key: 'cookiePath',
                            get: function () {
                                return this.config.cookiePath || void 0;
                            },
                        },
                        {
                            key: 'cookieExpiresAfterDays',
                            get: function () {
                                return (
                                    this.config.cookieExpiresAfterDays || 120
                                );
                            },
                        },
                        {
                            key: 'defaultConsents',
                            get: function () {
                                for (
                                    var e = {}, t = 0;
                                    t < this.config.services.length;
                                    t++
                                ) {
                                    var n = this.config.services[t];
                                    e[n.name] = this.getDefaultConsent(n);
                                }
                                return e;
                            },
                        },
                    ]) && wn(t.prototype, n),
                    o && wn(t, o),
                    e
                );
            })();
            n(178);
            function jn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t &&
                        (o = o.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t
                            ).enumerable;
                        })),
                        n.push.apply(n, o);
                }
                return n;
            }
            function On(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? jn(Object(n), !0).forEach(function (t) {
                              An(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                          )
                        : jn(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                              );
                          });
                }
                return e;
            }
            function An(e, t, n) {
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
            function zn(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            var Pn = (function () {
                function e(t, n, o) {
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                'Cannot call a class as a function'
                            );
                    })(this, e),
                        (this.url = t),
                        (this.id = n),
                        (this.opts = Object.assign({}, o));
                }
                var t, n, o;
                return (
                    (t = e),
                    (n = [
                        {
                            key: 'getLocationData',
                            value: function (e) {
                                var t = e.records || {};
                                return {
                                    pathname:
                                        void 0 === t.savePathname ||
                                        t.savePathname
                                            ? location.pathname
                                            : void 0,
                                    port:
                                        '' !== location.port
                                            ? parseInt(location.port)
                                            : 0,
                                    hostname: location.hostname,
                                    protocol: location.protocol.slice(
                                        0,
                                        location.protocol.length - 1
                                    ),
                                };
                            },
                        },
                        {
                            key: 'getUserData',
                            value: function () {
                                return {
                                    client_version: po(),
                                    client_name: 'klaro:web',
                                };
                            },
                        },
                        {
                            key: 'getBaseConsentData',
                            value: function (e) {
                                return {
                                    location_data: this.getLocationData(e),
                                    user_data: this.getUserData(e),
                                };
                            },
                        },
                        {
                            key: 'update',
                            value: function (e, t, n) {
                                if ('saveConsents' === t) {
                                    if (
                                        'save' === n.type &&
                                        0 === Object.keys(n.changes).length
                                    )
                                        return;
                                    var o = On(
                                        On(
                                            {},
                                            this.getBaseConsentData(e.config)
                                        ),
                                        {},
                                        {
                                            consent_data: {
                                                consents: n.consents,
                                                changes:
                                                    'save' === n.type
                                                        ? n.changes
                                                        : void 0,
                                                type: n.type,
                                                config: e.config.id,
                                            },
                                        }
                                    );
                                    this.submitConsentData(o);
                                } else if ('showNotice' === t) {
                                    var r = On(
                                        On(
                                            {},
                                            this.getBaseConsentData(n.config)
                                        ),
                                        {},
                                        {
                                            consent_data: {
                                                consents: {},
                                                changes: {},
                                                type: 'show',
                                                config: n.config.id,
                                            },
                                        }
                                    );
                                    this.submitConsentData(r);
                                }
                            },
                        },
                        {
                            key: 'apiRequest',
                            value: function (e, t, n, o) {
                                var r = this;
                                return new Promise(function (i, a) {
                                    var c,
                                        s,
                                        l = new XMLHttpRequest();
                                    l.addEventListener('load', function () {
                                        var e = JSON.parse(l.response);
                                        l.status < 200 || l.status >= 300
                                            ? ((e.status = l.status), a(e))
                                            : i(e, l.status);
                                    }),
                                        l.addEventListener(
                                            'error',
                                            function () {
                                                a({ status: 0, xhr: l });
                                            }
                                        ),
                                        void 0 !== n &&
                                            ('GET' === e
                                                ? (t +=
                                                      '?' +
                                                      ((s = n),
                                                      '?' +
                                                          Object.keys(s)
                                                              .map(function (
                                                                  e
                                                              ) {
                                                                  return (
                                                                      e +
                                                                      '=' +
                                                                      encodeURIComponent(
                                                                          s[e]
                                                                      )
                                                                  );
                                                              })
                                                              .join('&')))
                                                : (c = JSON.stringify(n))),
                                        l.open(e, r.url + t),
                                        void 0 !== c &&
                                            l.setRequestHeader(
                                                'Content-Type',
                                                o ||
                                                    'application/json;charset=UTF-8'
                                            ),
                                        l.send(c);
                                });
                            },
                        },
                        {
                            key: 'submitConsentData',
                            value: function (e) {
                                return this.apiRequest(
                                    'POST',
                                    '/v1/privacy-managers/' +
                                        this.id +
                                        '/submit',
                                    e,
                                    'text/plain;charset=UTF-8'
                                );
                            },
                        },
                        {
                            key: 'loadConfig',
                            value: function (e) {
                                return this.apiRequest(
                                    'GET',
                                    '/v1/privacy-managers/' +
                                        this.id +
                                        '/config.json?name=' +
                                        e +
                                        (this.opts.testing
                                            ? '&testing=true'
                                            : '')
                                );
                            },
                        },
                        {
                            key: 'loadConfigs',
                            value: function () {
                                return this.apiRequest(
                                    'GET',
                                    '/v1/privacy-managers/' +
                                        this.id +
                                        '/configs.json' +
                                        (this.opts.testing
                                            ? '&testing=true'
                                            : '')
                                );
                            },
                        },
                    ]) && zn(t.prototype, n),
                    o && zn(t, o),
                    e
                );
            })();
            function En(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if (
                            'undefined' == typeof Symbol ||
                            !(Symbol.iterator in Object(e))
                        )
                            return;
                        var n = [],
                            o = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (
                                var a, c = e[Symbol.iterator]();
                                !(o = (a = c.next()).done) &&
                                (n.push(a.value), !t || n.length !== t);
                                o = !0
                            );
                        } catch (e) {
                            (r = !0), (i = e);
                        } finally {
                            try {
                                o || null == c.return || c.return();
                            } finally {
                                if (r) throw i;
                            }
                        }
                        return n;
                    })(e, t) ||
                    Cn(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Cn(e, t) {
                if (e) {
                    if ('string' == typeof e) return Dn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === n &&
                            e.constructor &&
                            (n = e.constructor.name),
                        'Map' === n || 'Set' === n
                            ? Array.from(e)
                            : 'Arguments' === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? Dn(e, t)
                            : void 0
                    );
                }
            }
            function Dn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o;
            }
            function Tn(e, t, n) {
                if (void 0 !== e.styling) {
                    var o = Object.assign({}, e.styling);
                    if (void 0 !== o.theme) {
                        var r = o.theme;
                        r instanceof Array || (r = [r]), (o = {});
                        var i,
                            a = (function (e, t) {
                                var n;
                                if (
                                    'undefined' == typeof Symbol ||
                                    null == e[Symbol.iterator]
                                ) {
                                    if (
                                        Array.isArray(e) ||
                                        (n = Cn(e)) ||
                                        (t && e && 'number' == typeof e.length)
                                    ) {
                                        n && (e = n);
                                        var o = 0,
                                            r = function () {};
                                        return {
                                            s: r,
                                            n: function () {
                                                return o >= e.length
                                                    ? { done: !0 }
                                                    : {
                                                          done: !1,
                                                          value: e[o++],
                                                      };
                                            },
                                            e: function (e) {
                                                throw e;
                                            },
                                            f: r,
                                        };
                                    }
                                    throw new TypeError(
                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                    );
                                }
                                var i,
                                    a = !0,
                                    c = !1;
                                return {
                                    s: function () {
                                        n = e[Symbol.iterator]();
                                    },
                                    n: function () {
                                        var e = n.next();
                                        return (a = e.done), e;
                                    },
                                    e: function (e) {
                                        (c = !0), (i = e);
                                    },
                                    f: function () {
                                        try {
                                            a || null == n.return || n.return();
                                        } finally {
                                            if (c) throw i;
                                        }
                                    },
                                };
                            })(r);
                        try {
                            for (a.s(); !(i = a.n()).done; ) {
                                var c = t[i.value];
                                if (void 0 !== c)
                                    for (
                                        var s = 0, l = Object.entries(c);
                                        s < l.length;
                                        s++
                                    ) {
                                        var u = En(l[s], 2),
                                            p = u[0],
                                            d = u[1];
                                        p.startsWith('_') || (o[p] = d);
                                    }
                            }
                        } catch (e) {
                            a.e(e);
                        } finally {
                            a.f();
                        }
                        for (
                            var f = 0, m = Object.entries(e.styling);
                            f < m.length;
                            f++
                        ) {
                            var v = En(m[f], 2),
                                y = v[0],
                                h = v[1];
                            'theme' !== y && (o[y] = h);
                        }
                    }
                    void 0 === n && (n = document.documentElement);
                    for (var b = 0, g = Object.entries(o); b < g.length; b++) {
                        var k = En(g[b], 2),
                            _ = k[0],
                            x = k[1];
                        n.style.setProperty('--' + _, x);
                    }
                    window.document.documentMode &&
                        n === document.documentElement &&
                        Xt(o);
                }
            }
            function In(e, t) {
                var n;
                if (
                    'undefined' == typeof Symbol ||
                    null == e[Symbol.iterator]
                ) {
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Rn(e, t);
                            var n = Object.prototype.toString
                                .call(e)
                                .slice(8, -1);
                            'Object' === n &&
                                e.constructor &&
                                (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n)
                                return Array.from(e);
                            if (
                                'Arguments' === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    n
                                )
                            )
                                return Rn(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var o = 0,
                            r = function () {};
                        return {
                            s: r,
                            n: function () {
                                return o >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[o++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: r,
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                }
                var i,
                    a = !0,
                    c = !1;
                return {
                    s: function () {
                        n = e[Symbol.iterator]();
                    },
                    n: function () {
                        var e = n.next();
                        return (a = e.done), e;
                    },
                    e: function (e) {
                        (c = !0), (i = e);
                    },
                    f: function () {
                        try {
                            a || null == n.return || n.return();
                        } finally {
                            if (c) throw i;
                        }
                    },
                };
            }
            function Rn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o;
            }
            function Nn(e) {
                for (
                    var t = new Map([]), n = 0, o = Object.keys(e);
                    n < o.length;
                    n++
                ) {
                    var r = o[n],
                        i = e[r];
                    'string' == typeof r &&
                        ('string' == typeof i || null === i
                            ? t.set(r, i)
                            : t.set(r, Nn(i)));
                }
                return t;
            }
            function Mn(e, t, n, o) {
                var r = function (e, t, n) {
                    if (n instanceof Map) {
                        var o = new Map([]);
                        Mn(o, n, !0, !1), e.set(t, o);
                    } else e.set(t, n);
                };
                if (!(t instanceof Map && e instanceof Map))
                    throw new Error('Parameters are not maps!');
                void 0 === n && (n = !0),
                    void 0 === o && (o = !1),
                    o && (e = new e.constructor(e));
                var i,
                    a = In(t.keys());
                try {
                    for (a.s(); !(i = a.n()).done; ) {
                        var c = i.value,
                            s = t.get(c),
                            l = e.get(c);
                        if (e.has(c))
                            if (s instanceof Map && l instanceof Map)
                                e.set(c, Mn(l, s, n, o));
                            else {
                                if (!n) continue;
                                r(e, c, s);
                            }
                        else r(e, c, s);
                    }
                } catch (e) {
                    a.e(e);
                } finally {
                    a.f();
                }
                return e;
            }
            var qn,
                Un = {
                    top: {
                        _meta: { incompatibleWith: ['bottom'] },
                        'notice-top': '20px',
                        'notice-bottom': 'auto',
                    },
                    bottom: {
                        _meta: { incompatibleWith: ['top'] },
                        'notice-bottom': '20px',
                        'notice-top': 'auto',
                    },
                    left: {
                        _meta: { incompatibleWith: ['wide'] },
                        'notice-left': '20px',
                        'notice-right': 'auto',
                    },
                    right: {
                        _meta: { incompatibleWith: ['wide'] },
                        'notice-right': '20px',
                        'notice-left': 'auto',
                    },
                    wide: {
                        'notice-left': '20px',
                        'notice-right': 'auto',
                        'notice-max-width': 'calc(100vw - 60px)',
                        'notice-position': 'fixed',
                    },
                    light: {
                        'button-text-color': '#fff',
                        dark1: '#fafafa',
                        dark2: '#777',
                        dark3: '#555',
                        light1: '#444',
                        light2: '#666',
                        light3: '#111',
                        green3: '#f00',
                    },
                };
            n(184);
            function Ln(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t &&
                        (o = o.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t
                            ).enumerable;
                        })),
                        n.push.apply(n, o);
                }
                return n;
            }
            function Fn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? Ln(Object(n), !0).forEach(function (t) {
                              Hn(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                          )
                        : Ln(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                              );
                          });
                }
                return e;
            }
            function Hn(e, t, n) {
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
            function Wn(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return Vn(e);
                    })(e) ||
                    (function (e) {
                        if (
                            'undefined' != typeof Symbol &&
                            Symbol.iterator in Object(e)
                        )
                            return Array.from(e);
                    })(e) ||
                    Kn(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Bn(e, t) {
                var n;
                if (
                    'undefined' == typeof Symbol ||
                    null == e[Symbol.iterator]
                ) {
                    if (
                        Array.isArray(e) ||
                        (n = Kn(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var o = 0,
                            r = function () {};
                        return {
                            s: r,
                            n: function () {
                                return o >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[o++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: r,
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                }
                var i,
                    a = !0,
                    c = !1;
                return {
                    s: function () {
                        n = e[Symbol.iterator]();
                    },
                    n: function () {
                        var e = n.next();
                        return (a = e.done), e;
                    },
                    e: function (e) {
                        (c = !0), (i = e);
                    },
                    f: function () {
                        try {
                            a || null == n.return || n.return();
                        } finally {
                            if (c) throw i;
                        }
                    },
                };
            }
            function Kn(e, t) {
                if (e) {
                    if ('string' == typeof e) return Vn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === n &&
                            e.constructor &&
                            (n = e.constructor.name),
                        'Map' === n || 'Set' === n
                            ? Array.from(e)
                            : 'Arguments' === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? Vn(e, t)
                            : void 0
                    );
                }
            }
            function Vn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o;
            }
            var $n = new Map([]),
                Gn = {},
                Zn = {};
            function Qn(e, t) {
                return (e.elementID || 'klaro') + (t ? '-ide' : '');
            }
            function Yn(e, t) {
                var n = Qn(e, t),
                    o = document.getElementById(n);
                return (
                    null === o &&
                        (((o = document.createElement('div')).id = n),
                        document.body.appendChild(o)),
                    o
                );
            }
            function Jn(e, t) {
                if (
                    (void 0 === Gn[e] ? (Gn[e] = [t]) : Gn[e].push(t),
                    void 0 !== Zn[e])
                ) {
                    var n,
                        o = Bn(Zn[e]);
                    try {
                        for (o.s(); !(n = o.n()).done; ) {
                            var r = n.value;
                            if (!1 === t.apply(void 0, Wn(r))) break;
                        }
                    } catch (e) {
                        o.e(e);
                    } finally {
                        o.f();
                    }
                }
            }
            function Xn(e) {
                for (
                    var t = Gn[e],
                        n = arguments.length,
                        o = new Array(n > 1 ? n - 1 : 0),
                        r = 1;
                    r < n;
                    r++
                )
                    o[r - 1] = arguments[r];
                if (
                    (void 0 === Zn[e] ? (Zn[e] = [o]) : Zn[e].push(o),
                    void 0 !== t)
                ) {
                    var i,
                        a = Bn(t);
                    try {
                        for (a.s(); !(i = a.n()).done; ) {
                            var c = i.value;
                            if (!0 === c.apply(void 0, o)) return !0;
                        }
                    } catch (e) {
                        a.e(e);
                    } finally {
                        a.f();
                    }
                }
            }
            function eo(e) {
                var t = new Map([]);
                return Mn(t, $n), Mn(t, Nn(e.translations || {})), t;
            }
            var to = 1;
            function no(e, t) {
                if (void 0 !== e) {
                    (t = t || {}), Xn('render', (e = io(e)), t);
                    var n = 0;
                    t.show && (n = to++);
                    var o = Yn(e),
                        r = uo(e);
                    void 0 !== t.api && r.watch(t.api), Tn(e, Un, o);
                    var i = Ae(e),
                        a = eo(e),
                        c = function () {
                            for (
                                var t = arguments.length,
                                    n = new Array(t),
                                    o = 0;
                                o < t;
                                o++
                            )
                                n[o] = arguments[o];
                            return Pe.apply(
                                void 0,
                                [a, i, e.fallbackLang || 'zz'].concat(n)
                            );
                        },
                        s = de(
                            he(Ht, {
                                t: c,
                                lang: i,
                                manager: r,
                                config: e,
                                testing: t.testing,
                                modal: t.modal,
                                api: t.api,
                                show: n,
                            }),
                            o
                        );
                    return oo(r, c, i, e, t), s;
                }
            }
            function oo(e, t, n, o, r) {
                var i,
                    a = [],
                    c = Bn(o.services);
                try {
                    for (c.s(); !(i = c.n()).done; ) {
                        var s,
                            l = i.value,
                            u = e.getConsent(l.name) && e.confirmed,
                            p = Bn(
                                document.querySelectorAll(
                                    "[data-name='" + l.name + "']"
                                )
                            );
                        try {
                            for (p.s(); !(s = p.n()).done; ) {
                                var d = s.value,
                                    f = Yt(d);
                                if (
                                    'placeholder' !== f.type &&
                                    ('IFRAME' === d.tagName ||
                                        'DIV' === d.tagName)
                                ) {
                                    var m = d.previousElementSibling;
                                    if (null !== m) {
                                        var v = Yt(m);
                                        ('placeholder' === v.type &&
                                            v.name === l.name) ||
                                            (m = null);
                                    }
                                    if (null === m) {
                                        ((m =
                                            document.createElement(
                                                'DIV'
                                            )).style.maxWidth = d.width + 'px'),
                                            (m.style.height = d.height + 'px'),
                                            Jt(
                                                {
                                                    type: 'placeholder',
                                                    name: l.name,
                                                },
                                                m
                                            ),
                                            u && (m.style.display = 'none'),
                                            d.parentElement.insertBefore(m, d);
                                        var y = de(
                                            he(Kt, {
                                                t: t,
                                                lang: n,
                                                manager: e,
                                                config: o,
                                                service: l,
                                                style: f.style,
                                                testing: r.testing,
                                                api: r.api,
                                            }),
                                            m
                                        );
                                        a.push(y);
                                    }
                                    'IFRAME' === d.tagName && (f.src = d.src),
                                        void 0 === f['modified-by-klaro'] &&
                                            void 0 === d.style.display &&
                                            (f['original-display'] =
                                                d.style.display),
                                        (f['modified-by-klaro'] = 'yes'),
                                        Jt(f, d),
                                        u ||
                                            ((d.src = ''),
                                            (d.style.display = 'none'));
                                }
                            }
                        } catch (e) {
                            p.e(e);
                        } finally {
                            p.f();
                        }
                    }
                } catch (e) {
                    c.e(e);
                } finally {
                    c.f();
                }
                return a;
            }
            function ro(e) {
                /complete|interactive|loaded/.test(document.readyState)
                    ? e()
                    : window.addEventListener('DOMContentLoaded', e);
            }
            function io(e) {
                var t = Fn({}, e);
                return (
                    2 === t.version ||
                        (void 0 !== t.apps &&
                            void 0 === t.services &&
                            ((t.services = t.apps),
                            console.warn(
                                'Warning, your configuration file is outdated. Please change `apps` to `services`'
                            ),
                            delete t.apps),
                        void 0 !== t.translations &&
                            void 0 !== t.translations.apps &&
                            void 0 === t.services &&
                            ((t.translations.services = t.translations.apps),
                            console.warn(
                                'Warning, your configuration file is outdated. Please change `apps` to `services` in the `translations` key'
                            ),
                            delete t.translations.apps)),
                    t
                );
            }
            function ao(e) {
                if (void 0 !== window) {
                    var t = (function (e) {
                            if (
                                null !== document.currentScript &&
                                void 0 !== document.currentScript
                            )
                                return document.currentScript;
                            for (
                                var t = document.getElementsByTagName('script'),
                                    n = 0;
                                n < t.length;
                                n++
                            ) {
                                var o = t[n];
                                if (o.src.includes(e)) return o;
                            }
                            return null;
                        })('klaro'),
                        n = new Map(
                            decodeURI(location.hash.slice(1))
                                .split('&')
                                .map(function (e) {
                                    return e.split('=');
                                })
                                .map(function (e) {
                                    return 1 === e.length ? [e[0], !0] : e;
                                })
                        ),
                        o = n.get('klaro-testing'),
                        r = function (e) {
                            var t = Fn(Fn({}, e), {}, { testing: o });
                            qn.noAutoLoad ||
                                (qn.testing && !t.testing) ||
                                no(qn, t);
                        };
                    if (void 0 !== e)
                        (qn = e),
                            ro(function () {
                                return r({});
                            });
                    else if (null !== t) {
                        var i = (function (e) {
                                var t = e.getAttribute('data-klaro-id');
                                if (null !== t) return t;
                                var n =
                                    /.*\/privacy-managers\/([a-f0-9]+)\/klaro.*\.js/.exec(
                                        e.src
                                    );
                                return null !== n ? n[1] : null;
                            })(t),
                            a = (function (e) {
                                var t = e.getAttribute('data-klaro-api-url');
                                if (null !== t) return t;
                                var n =
                                    /(http(?:s)?:\/\/[^/]+)\/v1\/privacy-managers\/([a-f0-9]+)\/klaro.*\.js/.exec(
                                        e.src
                                    );
                                return null !== n ? n[1] : null;
                            })(t),
                            c = (function (e, t) {
                                if (e.has('klaro-config'))
                                    return e.get('klaro-config');
                                var n = t.getAttribute('data-klaro-config');
                                return null !== n ? n : 'default';
                            })(n, t);
                        if (null !== i) {
                            var s = new Pn(a, i, { testing: o });
                            if (void 0 !== window.klaroApiConfigs) {
                                if (
                                    !0 ===
                                    Xn(
                                        'apiConfigsLoaded',
                                        window.klaroApiConfigs,
                                        s
                                    )
                                )
                                    return;
                                var l = window.klaroApiConfigs.find(function (
                                    e
                                ) {
                                    return (
                                        e.name === c &&
                                        ('active' === e.status || o)
                                    );
                                });
                                void 0 !== l
                                    ? ((qn = l),
                                      ro(function () {
                                          return r({ api: s });
                                      }))
                                    : Xn('apiConfigsFailed', {});
                            } else
                                s.loadConfig(c)
                                    .then(function (e) {
                                        !0 !== Xn('apiConfigsLoaded', [e], s) &&
                                            ((qn = e),
                                            ro(function () {
                                                return r({ api: s });
                                            }));
                                    })
                                    .catch(function (e) {
                                        console.error(
                                            e,
                                            'cannot load Klaro configs'
                                        ),
                                            Xn('apiConfigsFailed', e);
                                    });
                        } else {
                            var u =
                                t.getAttribute('data-klaro-config') ||
                                'klaroConfig';
                            void 0 !== (qn = window[u]) &&
                                ro(function () {
                                    return r({});
                                });
                        }
                    }
                    n.has('klaro-ide') &&
                        (function (e) {
                            var t = /^(.*)(\/[^/]+)$/.exec(e.src)[1] || '',
                                n = document.createElement('script');
                            (n.src = '' !== t ? t + '/ide.js' : 'ide.js'),
                                (n.type = 'application/javascript');
                            var o,
                                r = Bn(n.attributes);
                            try {
                                for (r.s(); !(o = r.n()).done; ) {
                                    var i = o.value;
                                    n.setAttribute(i.name, i.value);
                                }
                            } catch (e) {
                                r.e(e);
                            } finally {
                                r.f();
                            }
                            document.head.appendChild(n);
                        })(t);
                }
            }
            function co(e, t, n) {
                return no((e = e || qn), { show: !0, modal: t, api: n }), !1;
            }
            var so = {};
            function lo() {
                for (var e in Object.keys(so)) delete so[e];
            }
            function uo(e) {
                var t = (e = e || qn).storageName || e.cookieName || 'default';
                return void 0 === so[t] && (so[t] = new Sn(io(e))), so[t];
            }
            function po() {
                return 'v' === 'unknown'[0] ? 'unknown'.slice(1) : 'unknown';
            }
            var fo = n(134),
                mo = n.n(fo),
                vo = n(135),
                yo = n.n(vo),
                ho = n(136),
                bo = n.n(ho),
                go = n(137),
                ko = n.n(go),
                _o = n(138),
                xo = n.n(_o),
                wo = n(139),
                So = n.n(wo),
                jo = n(140),
                Oo = n.n(jo),
                Ao = n(141),
                zo = n.n(Ao),
                Po = n(142),
                Eo = n.n(Po),
                Co = n(143),
                Do = n.n(Co),
                To = n(144),
                Io = n.n(To),
                Ro = n(145),
                No = n.n(Ro),
                Mo = n(146),
                qo = n.n(Mo),
                Uo = n(147),
                Lo = n.n(Uo),
                Fo = n(148),
                Ho = n.n(Fo),
                Wo = n(149),
                Bo = n.n(Wo),
                Ko = n(150),
                Vo = n.n(Ko),
                $o = n(151),
                Go = n.n($o),
                Zo = n(152),
                Qo = n.n(Zo),
                Yo = n(153),
                Jo = n.n(Yo),
                Xo = n(154),
                er = n.n(Xo),
                tr = n(155),
                nr = n.n(tr),
                or = n(156),
                rr = n.n(or),
                ir = n(157),
                ar = n.n(ir),
                cr = Nn({
                    ca: bo.a,
                    cs: ko.a,
                    da: xo.a,
                    de: So.a,
                    el: Oo.a,
                    en: zo.a,
                    zh: mo.a,
                    pt: yo.a,
                    es: Eo.a,
                    fi: Do.a,
                    fr: Io.a,
                    gl: No.a,
                    hu: qo.a,
                    hr: Lo.a,
                    it: Ho.a,
                    nl: Bo.a,
                    no: Vo.a,
                    ro: Go.a,
                    sr: Qo.a,
                    sr_cyrl: Jo.a,
                    sv: er.a,
                    tr: nr.a,
                    pl: rr.a,
                    ru: ar.a,
                });
            Mn($n, cr), ao();
        },
    ]);
});
