!(function (e, t) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define('ide', [], t)
        : 'object' == typeof exports
        ? (exports.ide = t())
        : (e.ide = t());
})(this, function () {
    return (function (e) {
        var t = {};
        function r(n) {
            if (t[n]) return t[n].exports;
            var o = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
        }
        return (
            (r.m = e),
            (r.c = t),
            (r.d = function (e, t, n) {
                r.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (r.r = function (e) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: 'Module',
                    }),
                    Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (r.t = function (e, t) {
                if ((1 & t && (e = r(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule)
                    return e;
                var n = Object.create(null);
                if (
                    (r.r(n),
                    Object.defineProperty(n, 'default', {
                        enumerable: !0,
                        value: e,
                    }),
                    2 & t && 'string' != typeof e)
                )
                    for (var o in e)
                        r.d(
                            n,
                            o,
                            function (t) {
                                return e[t];
                            }.bind(null, o)
                        );
                return n;
            }),
            (r.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return r.d(t, 'a', t), t;
            }),
            (r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ''),
            r((r.s = 203))
        );
    })([
        function (e, t, r) {
            var n = r(3),
                o = r(58),
                i = r(5),
                a = r(47),
                c = r(61),
                l = r(87),
                s = o('wks'),
                u = n.Symbol,
                d = l ? u : (u && u.withoutSetter) || a;
            e.exports = function (e) {
                return (
                    i(s, e) ||
                        (c && i(u, e)
                            ? (s[e] = u[e])
                            : (s[e] = d('Symbol.' + e))),
                    s[e]
                );
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
        function (e, t, r) {
            var n = r(3),
                o = r(31).f,
                i = r(19),
                a = r(22),
                c = r(57),
                l = r(83),
                s = r(60);
            e.exports = function (e, t) {
                var r,
                    u,
                    d,
                    p,
                    f,
                    m = e.target,
                    v = e.global,
                    h = e.stat;
                if ((r = v ? n : h ? n[m] || c(m, {}) : (n[m] || {}).prototype))
                    for (u in t) {
                        if (
                            ((p = t[u]),
                            (d = e.noTargetGet
                                ? (f = o(r, u)) && f.value
                                : r[u]),
                            !s(v ? u : m + (h ? '.' : '#') + u, e.forced) &&
                                void 0 !== d)
                        ) {
                            if (typeof p == typeof d) continue;
                            l(p, d);
                        }
                        (e.sham || (d && d.sham)) && i(p, 'sham', !0),
                            a(r, u, p, e);
                    }
            };
        },
        function (e, t, r) {
            (function (t) {
                var r = function (e) {
                    return e && e.Math == Math && e;
                };
                e.exports =
                    r('object' == typeof globalThis && globalThis) ||
                    r('object' == typeof window && window) ||
                    r('object' == typeof self && self) ||
                    r('object' == typeof t && t) ||
                    Function('return this')();
            }.call(this, r(132)));
        },
        function (e, t) {
            e.exports = function (e) {
                return 'object' == typeof e
                    ? null !== e
                    : 'function' == typeof e;
            };
        },
        function (e, t) {
            var r = {}.hasOwnProperty;
            e.exports = function (e, t) {
                return r.call(e, t);
            };
        },
        function (e, t, r) {
            'use strict';
            var n = r(21),
                o = r(68),
                i = r(38),
                a = r(28),
                c = r(64),
                l = a.set,
                s = a.getterFor('Array Iterator');
            (e.exports = c(
                Array,
                'Array',
                function (e, t) {
                    l(this, {
                        type: 'Array Iterator',
                        target: n(e),
                        index: 0,
                        kind: t,
                    });
                },
                function () {
                    var e = s(this),
                        t = e.target,
                        r = e.kind,
                        n = e.index++;
                    return !t || n >= t.length
                        ? ((e.target = void 0), { value: void 0, done: !0 })
                        : 'keys' == r
                        ? { value: n, done: !1 }
                        : 'values' == r
                        ? { value: t[n], done: !1 }
                        : { value: [n, t[n]], done: !1 };
                },
                'values'
            )),
                (i.Arguments = i.Array),
                o('keys'),
                o('values'),
                o('entries');
        },
        function (e, t, r) {
            'use strict';
            var n = r(2),
                o = r(3),
                i = r(30),
                a = r(32),
                c = r(8),
                l = r(61),
                s = r(87),
                u = r(1),
                d = r(5),
                p = r(55),
                f = r(4),
                m = r(9),
                v = r(25),
                h = r(21),
                y = r(45),
                b = r(33),
                g = r(36),
                k = r(48),
                w = r(51),
                x = r(134),
                _ = r(75),
                S = r(31),
                j = r(11),
                O = r(56),
                A = r(19),
                P = r(22),
                z = r(58),
                C = r(46),
                E = r(35),
                N = r(47),
                R = r(0),
                I = r(88),
                T = r(89),
                D = r(37),
                M = r(28),
                L = r(49).forEach,
                q = C('hidden'),
                U = R('toPrimitive'),
                B = M.set,
                F = M.getterFor('Symbol'),
                H = Object.prototype,
                K = o.Symbol,
                W = i('JSON', 'stringify'),
                V = S.f,
                $ = j.f,
                G = x.f,
                Z = O.f,
                Y = z('symbols'),
                J = z('op-symbols'),
                X = z('string-to-symbol-registry'),
                Q = z('symbol-to-string-registry'),
                ee = z('wks'),
                te = o.QObject,
                re = !te || !te.prototype || !te.prototype.findChild,
                ne =
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
                        ? function (e, t, r) {
                              var n = V(H, t);
                              n && delete H[t],
                                  $(e, t, r),
                                  n && e !== H && $(H, t, n);
                          }
                        : $,
                oe = function (e, t) {
                    var r = (Y[e] = g(K.prototype));
                    return (
                        B(r, { type: 'Symbol', tag: e, description: t }),
                        c || (r.description = t),
                        r
                    );
                },
                ie = s
                    ? function (e) {
                          return 'symbol' == typeof e;
                      }
                    : function (e) {
                          return Object(e) instanceof K;
                      },
                ae = function (e, t, r) {
                    e === H && ae(J, t, r), m(e);
                    var n = y(t, !0);
                    return (
                        m(r),
                        d(Y, n)
                            ? (r.enumerable
                                  ? (d(e, q) && e[q][n] && (e[q][n] = !1),
                                    (r = g(r, { enumerable: b(0, !1) })))
                                  : (d(e, q) || $(e, q, b(1, {})),
                                    (e[q][n] = !0)),
                              ne(e, n, r))
                            : $(e, n, r)
                    );
                },
                ce = function (e, t) {
                    m(e);
                    var r = h(t),
                        n = k(r).concat(de(r));
                    return (
                        L(n, function (t) {
                            (c && !le.call(r, t)) || ae(e, t, r[t]);
                        }),
                        e
                    );
                },
                le = function (e) {
                    var t = y(e, !0),
                        r = Z.call(this, t);
                    return (
                        !(this === H && d(Y, t) && !d(J, t)) &&
                        (!(
                            r ||
                            !d(this, t) ||
                            !d(Y, t) ||
                            (d(this, q) && this[q][t])
                        ) ||
                            r)
                    );
                },
                se = function (e, t) {
                    var r = h(e),
                        n = y(t, !0);
                    if (r !== H || !d(Y, n) || d(J, n)) {
                        var o = V(r, n);
                        return (
                            !o ||
                                !d(Y, n) ||
                                (d(r, q) && r[q][n]) ||
                                (o.enumerable = !0),
                            o
                        );
                    }
                },
                ue = function (e) {
                    var t = G(h(e)),
                        r = [];
                    return (
                        L(t, function (e) {
                            d(Y, e) || d(E, e) || r.push(e);
                        }),
                        r
                    );
                },
                de = function (e) {
                    var t = e === H,
                        r = G(t ? J : h(e)),
                        n = [];
                    return (
                        L(r, function (e) {
                            !d(Y, e) || (t && !d(H, e)) || n.push(Y[e]);
                        }),
                        n
                    );
                };
            (l ||
                (P(
                    (K = function () {
                        if (this instanceof K)
                            throw TypeError('Symbol is not a constructor');
                        var e =
                                arguments.length && void 0 !== arguments[0]
                                    ? String(arguments[0])
                                    : void 0,
                            t = N(e),
                            r = function (e) {
                                this === H && r.call(J, e),
                                    d(this, q) &&
                                        d(this[q], t) &&
                                        (this[q][t] = !1),
                                    ne(this, t, b(1, e));
                            };
                        return (
                            c && re && ne(H, t, { configurable: !0, set: r }),
                            oe(t, e)
                        );
                    }).prototype,
                    'toString',
                    function () {
                        return F(this).tag;
                    }
                ),
                P(K, 'withoutSetter', function (e) {
                    return oe(N(e), e);
                }),
                (O.f = le),
                (j.f = ae),
                (S.f = se),
                (w.f = x.f = ue),
                (_.f = de),
                (I.f = function (e) {
                    return oe(R(e), e);
                }),
                c &&
                    ($(K.prototype, 'description', {
                        configurable: !0,
                        get: function () {
                            return F(this).description;
                        },
                    }),
                    a || P(H, 'propertyIsEnumerable', le, { unsafe: !0 }))),
            n({ global: !0, wrap: !0, forced: !l, sham: !l }, { Symbol: K }),
            L(k(ee), function (e) {
                T(e);
            }),
            n(
                { target: 'Symbol', stat: !0, forced: !l },
                {
                    for: function (e) {
                        var t = String(e);
                        if (d(X, t)) return X[t];
                        var r = K(t);
                        return (X[t] = r), (Q[r] = t), r;
                    },
                    keyFor: function (e) {
                        if (!ie(e)) throw TypeError(e + ' is not a symbol');
                        if (d(Q, e)) return Q[e];
                    },
                    useSetter: function () {
                        re = !0;
                    },
                    useSimple: function () {
                        re = !1;
                    },
                }
            ),
            n(
                { target: 'Object', stat: !0, forced: !l, sham: !c },
                {
                    create: function (e, t) {
                        return void 0 === t ? g(e) : ce(g(e), t);
                    },
                    defineProperty: ae,
                    defineProperties: ce,
                    getOwnPropertyDescriptor: se,
                }
            ),
            n(
                { target: 'Object', stat: !0, forced: !l },
                { getOwnPropertyNames: ue, getOwnPropertySymbols: de }
            ),
            n(
                {
                    target: 'Object',
                    stat: !0,
                    forced: u(function () {
                        _.f(1);
                    }),
                },
                {
                    getOwnPropertySymbols: function (e) {
                        return _.f(v(e));
                    },
                }
            ),
            W) &&
                n(
                    {
                        target: 'JSON',
                        stat: !0,
                        forced:
                            !l ||
                            u(function () {
                                var e = K();
                                return (
                                    '[null]' != W([e]) ||
                                    '{}' != W({ a: e }) ||
                                    '{}' != W(Object(e))
                                );
                            }),
                    },
                    {
                        stringify: function (e, t, r) {
                            for (var n, o = [e], i = 1; arguments.length > i; )
                                o.push(arguments[i++]);
                            if (((n = t), (f(t) || void 0 !== e) && !ie(e)))
                                return (
                                    p(t) ||
                                        (t = function (e, t) {
                                            if (
                                                ('function' == typeof n &&
                                                    (t = n.call(this, e, t)),
                                                !ie(t))
                                            )
                                                return t;
                                        }),
                                    (o[1] = t),
                                    W.apply(null, o)
                                );
                        },
                    }
                );
            K.prototype[U] || A(K.prototype, U, K.prototype.valueOf),
                D(K, 'Symbol'),
                (E[q] = !0);
        },
        function (e, t, r) {
            var n = r(1);
            e.exports = !n(function () {
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
        function (e, t, r) {
            var n = r(4);
            e.exports = function (e) {
                if (!n(e)) throw TypeError(String(e) + ' is not an object');
                return e;
            };
        },
        function (e, t, r) {
            var n = r(63),
                o = r(22),
                i = r(139);
            n || o(Object.prototype, 'toString', i, { unsafe: !0 });
        },
        function (e, t, r) {
            var n = r(8),
                o = r(81),
                i = r(9),
                a = r(45),
                c = Object.defineProperty;
            t.f = n
                ? c
                : function (e, t, r) {
                      if ((i(e), (t = a(t, !0)), i(r), o))
                          try {
                              return c(e, t, r);
                          } catch (e) {}
                      if ('get' in r || 'set' in r)
                          throw TypeError('Accessors not supported');
                      return 'value' in r && (e[t] = r.value), e;
                  };
        },
        function (e, t, r) {
            'use strict';
            var n = r(2),
                o = r(8),
                i = r(3),
                a = r(5),
                c = r(4),
                l = r(11).f,
                s = r(83),
                u = i.Symbol;
            if (
                o &&
                'function' == typeof u &&
                (!('description' in u.prototype) || void 0 !== u().description)
            ) {
                var d = {},
                    p = function () {
                        var e =
                                arguments.length < 1 || void 0 === arguments[0]
                                    ? void 0
                                    : String(arguments[0]),
                            t =
                                this instanceof p
                                    ? new u(e)
                                    : void 0 === e
                                    ? u()
                                    : u(e);
                        return '' === e && (d[t] = !0), t;
                    };
                s(p, u);
                var f = (p.prototype = u.prototype);
                f.constructor = p;
                var m = f.toString,
                    v = 'Symbol(test)' == String(u('test')),
                    h = /^Symbol\((.*)\)[^)]+$/;
                l(f, 'description', {
                    configurable: !0,
                    get: function () {
                        var e = c(this) ? this.valueOf() : this,
                            t = m.call(e);
                        if (a(d, e)) return '';
                        var r = v ? t.slice(7, -1) : t.replace(h, '$1');
                        return '' === r ? void 0 : r;
                    },
                }),
                    n({ global: !0, forced: !0 }, { Symbol: p });
            }
        },
        function (e, t, r) {
            'use strict';
            var n = r(97).charAt,
                o = r(28),
                i = r(64),
                a = o.set,
                c = o.getterFor('String Iterator');
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
                        r = t.string,
                        o = t.index;
                    return o >= r.length
                        ? { value: void 0, done: !0 }
                        : ((e = n(r, o)),
                          (t.index += e.length),
                          { value: e, done: !1 });
                }
            );
        },
        function (e, t, r) {
            r(89)('iterator');
        },
        function (e, t, r) {
            'use strict';
            var n = r(22),
                o = r(9),
                i = r(1),
                a = r(106),
                c = RegExp.prototype,
                l = c.toString,
                s = i(function () {
                    return '/a/b' != l.call({ source: 'a', flags: 'b' });
                }),
                u = 'toString' != l.name;
            (s || u) &&
                n(
                    RegExp.prototype,
                    'toString',
                    function () {
                        var e = o(this),
                            t = String(e.source),
                            r = e.flags;
                        return (
                            '/' +
                            t +
                            '/' +
                            String(
                                void 0 === r &&
                                    e instanceof RegExp &&
                                    !('flags' in c)
                                    ? a.call(e)
                                    : r
                            )
                        );
                    },
                    { unsafe: !0 }
                );
        },
        function (e, t, r) {
            var n = r(3),
                o = r(111),
                i = r(6),
                a = r(19),
                c = r(0),
                l = c('iterator'),
                s = c('toStringTag'),
                u = i.values;
            for (var d in o) {
                var p = n[d],
                    f = p && p.prototype;
                if (f) {
                    if (f[l] !== u)
                        try {
                            a(f, l, u);
                        } catch (e) {
                            f[l] = u;
                        }
                    if ((f[s] || a(f, s, d), o[d]))
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
        function (e, t, r) {
            var n = r(8),
                o = r(11).f,
                i = Function.prototype,
                a = i.toString,
                c = /^\s*function ([^ (]*)/;
            n &&
                !('name' in i) &&
                o(i, 'name', {
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
        function (e, t, r) {
            'use strict';
            var n = r(2),
                o = r(4),
                i = r(55),
                a = r(100),
                c = r(24),
                l = r(21),
                s = r(62),
                u = r(0),
                d = r(76),
                p = r(41),
                f = d('slice'),
                m = p('slice', { ACCESSORS: !0, 0: 0, 1: 2 }),
                v = u('species'),
                h = [].slice,
                y = Math.max;
            n(
                { target: 'Array', proto: !0, forced: !f || !m },
                {
                    slice: function (e, t) {
                        var r,
                            n,
                            u,
                            d = l(this),
                            p = c(d.length),
                            f = a(e, p),
                            m = a(void 0 === t ? p : t, p);
                        if (
                            i(d) &&
                            ('function' != typeof (r = d.constructor) ||
                            (r !== Array && !i(r.prototype))
                                ? o(r) && null === (r = r[v]) && (r = void 0)
                                : (r = void 0),
                            r === Array || void 0 === r)
                        )
                            return h.call(d, f, m);
                        for (
                            n = new (void 0 === r ? Array : r)(y(m - f, 0)),
                                u = 0;
                            f < m;
                            f++, u++
                        )
                            f in d && s(n, u, d[f]);
                        return (n.length = u), n;
                    },
                }
            );
        },
        function (e, t, r) {
            var n = r(8),
                o = r(11),
                i = r(33);
            e.exports = n
                ? function (e, t, r) {
                      return o.f(e, t, i(1, r));
                  }
                : function (e, t, r) {
                      return (e[t] = r), e;
                  };
        },
        function (e, t, r) {
            var n = r(2),
                o = r(120);
            n(
                {
                    target: 'Array',
                    stat: !0,
                    forced: !r(78)(function (e) {
                        Array.from(e);
                    }),
                },
                { from: o }
            );
        },
        function (e, t, r) {
            var n = r(67),
                o = r(27);
            e.exports = function (e) {
                return n(o(e));
            };
        },
        function (e, t, r) {
            var n = r(3),
                o = r(19),
                i = r(5),
                a = r(57),
                c = r(74),
                l = r(28),
                s = l.get,
                u = l.enforce,
                d = String(String).split('String');
            (e.exports = function (e, t, r, c) {
                var l = !!c && !!c.unsafe,
                    s = !!c && !!c.enumerable,
                    p = !!c && !!c.noTargetGet;
                'function' == typeof r &&
                    ('string' != typeof t || i(r, 'name') || o(r, 'name', t),
                    (u(r).source = d.join('string' == typeof t ? t : ''))),
                    e !== n
                        ? (l ? !p && e[t] && (s = !0) : delete e[t],
                          s ? (e[t] = r) : o(e, t, r))
                        : s
                        ? (e[t] = r)
                        : a(t, r);
            })(Function.prototype, 'toString', function () {
                return ('function' == typeof this && s(this).source) || c(this);
            });
        },
        function (e, t, r) {
            'use strict';
            var n = r(2),
                o = r(49).map,
                i = r(76),
                a = r(41),
                c = i('map'),
                l = a('map');
            n(
                { target: 'Array', proto: !0, forced: !c || !l },
                {
                    map: function (e) {
                        return o(
                            this,
                            e,
                            arguments.length > 1 ? arguments[1] : void 0
                        );
                    },
                }
            );
        },
        function (e, t, r) {
            var n = r(52),
                o = Math.min;
            e.exports = function (e) {
                return e > 0 ? o(n(e), 9007199254740991) : 0;
            };
        },
        function (e, t, r) {
            var n = r(27);
            e.exports = function (e) {
                return Object(n(e));
            };
        },
        function (e, t, r) {
            'use strict';
            var n = r(2),
                o = r(1),
                i = r(55),
                a = r(4),
                c = r(25),
                l = r(24),
                s = r(62),
                u = r(101),
                d = r(76),
                p = r(0),
                f = r(118),
                m = p('isConcatSpreadable'),
                v =
                    f >= 51 ||
                    !o(function () {
                        var e = [];
                        return (e[m] = !1), e.concat()[0] !== e;
                    }),
                h = d('concat'),
                y = function (e) {
                    if (!a(e)) return !1;
                    var t = e[m];
                    return void 0 !== t ? !!t : i(e);
                };
            n(
                { target: 'Array', proto: !0, forced: !v || !h },
                {
                    concat: function (e) {
                        var t,
                            r,
                            n,
                            o,
                            i,
                            a = c(this),
                            d = u(a, 0),
                            p = 0;
                        for (t = -1, n = arguments.length; t < n; t++)
                            if (y((i = -1 === t ? a : arguments[t]))) {
                                if (p + (o = l(i.length)) > 9007199254740991)
                                    throw TypeError(
                                        'Maximum allowed index exceeded'
                                    );
                                for (r = 0; r < o; r++, p++)
                                    r in i && s(d, p, i[r]);
                            } else {
                                if (p >= 9007199254740991)
                                    throw TypeError(
                                        'Maximum allowed index exceeded'
                                    );
                                s(d, p++, i);
                            }
                        return (d.length = p), d;
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
        function (e, t, r) {
            var n,
                o,
                i,
                a = r(133),
                c = r(3),
                l = r(4),
                s = r(19),
                u = r(5),
                d = r(46),
                p = r(35),
                f = c.WeakMap;
            if (a) {
                var m = new f(),
                    v = m.get,
                    h = m.has,
                    y = m.set;
                (n = function (e, t) {
                    return y.call(m, e, t), t;
                }),
                    (o = function (e) {
                        return v.call(m, e) || {};
                    }),
                    (i = function (e) {
                        return h.call(m, e);
                    });
            } else {
                var b = d('state');
                (p[b] = !0),
                    (n = function (e, t) {
                        return s(e, b, t), t;
                    }),
                    (o = function (e) {
                        return u(e, b) ? e[b] : {};
                    }),
                    (i = function (e) {
                        return u(e, b);
                    });
            }
            e.exports = {
                set: n,
                get: o,
                has: i,
                enforce: function (e) {
                    return i(e) ? o(e) : n(e, {});
                },
                getterFor: function (e) {
                    return function (t) {
                        var r;
                        if (!l(t) || (r = o(t)).type !== e)
                            throw TypeError(
                                'Incompatible receiver, ' + e + ' required'
                            );
                        return r;
                    };
                },
            };
        },
        function (e, t, r) {
            e.exports = r(184)();
        },
        function (e, t, r) {
            var n = r(84),
                o = r(3),
                i = function (e) {
                    return 'function' == typeof e ? e : void 0;
                };
            e.exports = function (e, t) {
                return arguments.length < 2
                    ? i(n[e]) || i(o[e])
                    : (n[e] && n[e][t]) || (o[e] && o[e][t]);
            };
        },
        function (e, t, r) {
            var n = r(8),
                o = r(56),
                i = r(33),
                a = r(21),
                c = r(45),
                l = r(5),
                s = r(81),
                u = Object.getOwnPropertyDescriptor;
            t.f = n
                ? u
                : function (e, t) {
                      if (((e = a(e)), (t = c(t, !0)), s))
                          try {
                              return u(e, t);
                          } catch (e) {}
                      if (l(e, t)) return i(!o.f.call(e, t), e[t]);
                  };
        },
        function (e, t) {
            e.exports = !1;
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
            var r = {}.toString;
            e.exports = function (e) {
                return r.call(e).slice(8, -1);
            };
        },
        function (e, t) {
            e.exports = {};
        },
        function (e, t, r) {
            var n,
                o = r(9),
                i = r(116),
                a = r(59),
                c = r(35),
                l = r(117),
                s = r(73),
                u = r(46),
                d = u('IE_PROTO'),
                p = function () {},
                f = function (e) {
                    return '<script>' + e + '</script>';
                },
                m = function () {
                    try {
                        n = document.domain && new ActiveXObject('htmlfile');
                    } catch (e) {}
                    var e, t;
                    m = n
                        ? (function (e) {
                              e.write(f('')), e.close();
                              var t = e.parentWindow.Object;
                              return (e = null), t;
                          })(n)
                        : (((t = s('iframe')).style.display = 'none'),
                          l.appendChild(t),
                          (t.src = String('javascript:')),
                          (e = t.contentWindow.document).open(),
                          e.write(f('document.F=Object')),
                          e.close(),
                          e.F);
                    for (var r = a.length; r--; ) delete m.prototype[a[r]];
                    return m();
                };
            (c[d] = !0),
                (e.exports =
                    Object.create ||
                    function (e, t) {
                        var r;
                        return (
                            null !== e
                                ? ((p.prototype = o(e)),
                                  (r = new p()),
                                  (p.prototype = null),
                                  (r[d] = e))
                                : (r = m()),
                            void 0 === t ? r : i(r, t)
                        );
                    });
        },
        function (e, t, r) {
            var n = r(11).f,
                o = r(5),
                i = r(0)('toStringTag');
            e.exports = function (e, t, r) {
                e &&
                    !o((e = r ? e : e.prototype), i) &&
                    n(e, i, { configurable: !0, value: t });
            };
        },
        function (e, t) {
            e.exports = {};
        },
        function (e, t, r) {
            'use strict';
            r.d(t, 'b', function () {
                return a;
            }),
                r.d(t, 'c', function () {
                    return c;
                }),
                r.d(t, 'a', function () {
                    return l;
                }),
                r.d(t, 'd', function () {
                    return s;
                });
            r(7),
                r(12),
                r(14),
                r(26),
                r(20),
                r(112),
                r(6),
                r(18),
                r(17),
                r(71),
                r(42),
                r(10),
                r(94),
                r(54),
                r(15),
                r(113),
                r(13),
                r(142),
                r(125),
                r(16);
            function n(e, t) {
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
                        var r = [],
                            n = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (
                                var a, c = e[Symbol.iterator]();
                                !(n = (a = c.next()).done) &&
                                (r.push(a.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (i = e);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return r;
                    })(e, t) ||
                    o(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function o(e, t) {
                if (e) {
                    if ('string' == typeof e) return i(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name),
                        'Map' === r || 'Set' === r
                            ? Array.from(e)
                            : 'Arguments' === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? i(e, t)
                            : void 0
                    );
                }
            }
            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function a(e) {
                if (
                    null !== document.currentScript &&
                    void 0 !== document.currentScript
                )
                    return document.currentScript;
                for (
                    var t = document.getElementsByTagName('script'), r = 0;
                    r < t.length;
                    r++
                ) {
                    var n = t[r];
                    if (n.src.includes(e)) return n;
                }
                return null;
            }
            function c(e) {
                for (var t = {}, r = 0; r < e.attributes.length; r++) {
                    var n = e.attributes[r];
                    n.name.startsWith('data-') &&
                        (t[n.name.slice(5)] = n.value);
                }
                return t;
            }
            function l(e, t) {
                for (var r = Object.keys(e), n = 0; n < r.length; n++) {
                    var o = r[n],
                        i = e[o];
                    t[o] !== i && t.setAttribute('data-' + o, i);
                }
            }
            function s(e) {
                var t,
                    r = (function (e, t) {
                        var r;
                        if (
                            'undefined' == typeof Symbol ||
                            null == e[Symbol.iterator]
                        ) {
                            if (
                                Array.isArray(e) ||
                                (r = o(e)) ||
                                (t && e && 'number' == typeof e.length)
                            ) {
                                r && (e = r);
                                var n = 0,
                                    i = function () {};
                                return {
                                    s: i,
                                    n: function () {
                                        return n >= e.length
                                            ? { done: !0 }
                                            : { done: !1, value: e[n++] };
                                    },
                                    e: function (e) {
                                        throw e;
                                    },
                                    f: i,
                                };
                            }
                            throw new TypeError(
                                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                            );
                        }
                        var a,
                            c = !0,
                            l = !1;
                        return {
                            s: function () {
                                r = e[Symbol.iterator]();
                            },
                            n: function () {
                                var e = r.next();
                                return (c = e.done), e;
                            },
                            e: function (e) {
                                (l = !0), (a = e);
                            },
                            f: function () {
                                try {
                                    c || null == r.return || r.return();
                                } finally {
                                    if (l) throw a;
                                }
                            },
                        };
                    })(
                        document.querySelectorAll(
                            'style[data-context=klaro-styles]'
                        )
                    );
                try {
                    for (r.s(); !(t = r.n()).done; ) {
                        var i = t.value,
                            a = i.innerText;
                        void 0 !== i.styleSheet && (a = i.styleSheet.cssText);
                        for (
                            var c = function () {
                                    var e = n(s[l], 2),
                                        t = e[0],
                                        r = e[1],
                                        o = new RegExp(
                                            '([a-z0-9-]+):[^;]+;[\\s\\n]*\\1:\\s*var\\(--' +
                                                t +
                                                ',\\s*[^\\)]+\\)',
                                            'g'
                                        );
                                    a = a.replace(o, function (e, n) {
                                        return ''
                                            .concat(n, ': ')
                                            .concat(r, '; ')
                                            .concat(n, ': var(--')
                                            .concat(t, ', ')
                                            .concat(r, ')');
                                    });
                                },
                                l = 0,
                                s = Object.entries(e);
                            l < s.length;
                            l++
                        )
                            c();
                        var u = document.createElement('style');
                        u.setAttribute('type', 'text/css'),
                            u.setAttribute('data-context', 'klaro-styles'),
                            void 0 !== u.styleSheet
                                ? (u.styleSheet.cssText = a)
                                : (u.innerText = a),
                            i.parentElement.appendChild(u),
                            i.parentElement.removeChild(i);
                    }
                } catch (e) {
                    r.e(e);
                } finally {
                    r.f();
                }
            }
        },
        function (e, t, r) {
            var n = r(50);
            e.exports = function (e, t, r) {
                if ((n(e), void 0 === t)) return e;
                switch (r) {
                    case 0:
                        return function () {
                            return e.call(t);
                        };
                    case 1:
                        return function (r) {
                            return e.call(t, r);
                        };
                    case 2:
                        return function (r, n) {
                            return e.call(t, r, n);
                        };
                    case 3:
                        return function (r, n, o) {
                            return e.call(t, r, n, o);
                        };
                }
                return function () {
                    return e.apply(t, arguments);
                };
            };
        },
        function (e, t, r) {
            var n = r(8),
                o = r(1),
                i = r(5),
                a = Object.defineProperty,
                c = {},
                l = function (e) {
                    throw e;
                };
            e.exports = function (e, t) {
                if (i(c, e)) return c[e];
                t || (t = {});
                var r = [][e],
                    s = !!i(t, 'ACCESSORS') && t.ACCESSORS,
                    u = i(t, 0) ? t[0] : l,
                    d = i(t, 1) ? t[1] : void 0;
                return (c[e] =
                    !!r &&
                    !o(function () {
                        if (s && !n) return !0;
                        var e = { length: -1 };
                        s ? a(e, 1, { enumerable: !0, get: l }) : (e[1] = 1),
                            r.call(e, u, d);
                    }));
            };
        },
        function (e, t, r) {
            var n = r(2),
                o = r(25),
                i = r(48);
            n(
                {
                    target: 'Object',
                    stat: !0,
                    forced: r(1)(function () {
                        i(1);
                    }),
                },
                {
                    keys: function (e) {
                        return i(o(e));
                    },
                }
            );
        },
        function (e, t, r) {
            var n = r(2),
                o = r(1),
                i = r(25),
                a = r(70),
                c = r(103);
            n(
                {
                    target: 'Object',
                    stat: !0,
                    forced: o(function () {
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
        function (e, t, r) {
            var n = r(2),
                o = r(30),
                i = r(50),
                a = r(9),
                c = r(4),
                l = r(36),
                s = r(174),
                u = r(1),
                d = o('Reflect', 'construct'),
                p = u(function () {
                    function e() {}
                    return !(d(function () {}, [], e) instanceof e);
                }),
                f = !u(function () {
                    d(function () {});
                }),
                m = p || f;
            n(
                { target: 'Reflect', stat: !0, forced: m, sham: m },
                {
                    construct: function (e, t) {
                        i(e), a(t);
                        var r = arguments.length < 3 ? e : i(arguments[2]);
                        if (f && !p) return d(e, t, r);
                        if (e == r) {
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
                            var n = [null];
                            return n.push.apply(n, t), new (s.apply(e, n))();
                        }
                        var o = r.prototype,
                            u = l(c(o) ? o : Object.prototype),
                            m = Function.apply.call(e, u, t);
                        return c(m) ? m : u;
                    },
                }
            );
        },
        function (e, t, r) {
            var n = r(4);
            e.exports = function (e, t) {
                if (!n(e)) return e;
                var r, o;
                if (
                    t &&
                    'function' == typeof (r = e.toString) &&
                    !n((o = r.call(e)))
                )
                    return o;
                if ('function' == typeof (r = e.valueOf) && !n((o = r.call(e))))
                    return o;
                if (
                    !t &&
                    'function' == typeof (r = e.toString) &&
                    !n((o = r.call(e)))
                )
                    return o;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function (e, t, r) {
            var n = r(58),
                o = r(47),
                i = n('keys');
            e.exports = function (e) {
                return i[e] || (i[e] = o(e));
            };
        },
        function (e, t) {
            var r = 0,
                n = Math.random();
            e.exports = function (e) {
                return (
                    'Symbol(' +
                    String(void 0 === e ? '' : e) +
                    ')_' +
                    (++r + n).toString(36)
                );
            };
        },
        function (e, t, r) {
            var n = r(85),
                o = r(59);
            e.exports =
                Object.keys ||
                function (e) {
                    return n(e, o);
                };
        },
        function (e, t, r) {
            var n = r(40),
                o = r(67),
                i = r(25),
                a = r(24),
                c = r(101),
                l = [].push,
                s = function (e) {
                    var t = 1 == e,
                        r = 2 == e,
                        s = 3 == e,
                        u = 4 == e,
                        d = 6 == e,
                        p = 5 == e || d;
                    return function (f, m, v, h) {
                        for (
                            var y,
                                b,
                                g = i(f),
                                k = o(g),
                                w = n(m, v, 3),
                                x = a(k.length),
                                _ = 0,
                                S = h || c,
                                j = t ? S(f, x) : r ? S(f, 0) : void 0;
                            x > _;
                            _++
                        )
                            if ((p || _ in k) && ((b = w((y = k[_]), _, g)), e))
                                if (t) j[_] = b;
                                else if (b)
                                    switch (e) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return y;
                                        case 6:
                                            return _;
                                        case 2:
                                            l.call(j, y);
                                    }
                                else if (u) return !1;
                        return d ? -1 : s || u ? u : j;
                    };
                };
            e.exports = {
                forEach: s(0),
                map: s(1),
                filter: s(2),
                some: s(3),
                every: s(4),
                find: s(5),
                findIndex: s(6),
            };
        },
        function (e, t) {
            e.exports = function (e) {
                if ('function' != typeof e)
                    throw TypeError(String(e) + ' is not a function');
                return e;
            };
        },
        function (e, t, r) {
            var n = r(85),
                o = r(59).concat('length', 'prototype');
            t.f =
                Object.getOwnPropertyNames ||
                function (e) {
                    return n(e, o);
                };
        },
        function (e, t) {
            var r = Math.ceil,
                n = Math.floor;
            e.exports = function (e) {
                return isNaN((e = +e)) ? 0 : (e > 0 ? n : r)(e);
            };
        },
        function (e, t, r) {
            'use strict';
            var n = r(2),
                o = r(49).filter,
                i = r(76),
                a = r(41),
                c = i('filter'),
                l = a('filter');
            n(
                { target: 'Array', proto: !0, forced: !c || !l },
                {
                    filter: function (e) {
                        return o(
                            this,
                            e,
                            arguments.length > 1 ? arguments[1] : void 0
                        );
                    },
                }
            );
        },
        function (e, t, r) {
            'use strict';
            var n = r(2),
                o = r(79);
            n(
                { target: 'RegExp', proto: !0, forced: /./.exec !== o },
                { exec: o }
            );
        },
        function (e, t, r) {
            var n = r(34);
            e.exports =
                Array.isArray ||
                function (e) {
                    return 'Array' == n(e);
                };
        },
        function (e, t, r) {
            'use strict';
            var n = {}.propertyIsEnumerable,
                o = Object.getOwnPropertyDescriptor,
                i = o && !n.call({ 1: 2 }, 1);
            t.f = i
                ? function (e) {
                      var t = o(this, e);
                      return !!t && t.enumerable;
                  }
                : n;
        },
        function (e, t, r) {
            var n = r(3),
                o = r(19);
            e.exports = function (e, t) {
                try {
                    o(n, e, t);
                } catch (r) {
                    n[e] = t;
                }
                return t;
            };
        },
        function (e, t, r) {
            var n = r(32),
                o = r(82);
            (e.exports = function (e, t) {
                return o[e] || (o[e] = void 0 !== t ? t : {});
            })('versions', []).push({
                version: '3.6.5',
                mode: n ? 'pure' : 'global',
                copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
            });
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
        function (e, t, r) {
            var n = r(1),
                o = /#|\.prototype\./,
                i = function (e, t) {
                    var r = c[a(e)];
                    return (
                        r == s ||
                        (r != l && ('function' == typeof t ? n(t) : !!t))
                    );
                },
                a = (i.normalize = function (e) {
                    return String(e).replace(o, '.').toLowerCase();
                }),
                c = (i.data = {}),
                l = (i.NATIVE = 'N'),
                s = (i.POLYFILL = 'P');
            e.exports = i;
        },
        function (e, t, r) {
            var n = r(1);
            e.exports =
                !!Object.getOwnPropertySymbols &&
                !n(function () {
                    return !String(Symbol());
                });
        },
        function (e, t, r) {
            'use strict';
            var n = r(45),
                o = r(11),
                i = r(33);
            e.exports = function (e, t, r) {
                var a = n(t);
                a in e ? o.f(e, a, i(0, r)) : (e[a] = r);
            };
        },
        function (e, t, r) {
            var n = {};
            (n[r(0)('toStringTag')] = 'z'),
                (e.exports = '[object z]' === String(n));
        },
        function (e, t, r) {
            'use strict';
            var n = r(2),
                o = r(121),
                i = r(70),
                a = r(93),
                c = r(37),
                l = r(19),
                s = r(22),
                u = r(0),
                d = r(32),
                p = r(38),
                f = r(92),
                m = f.IteratorPrototype,
                v = f.BUGGY_SAFARI_ITERATORS,
                h = u('iterator'),
                y = function () {
                    return this;
                };
            e.exports = function (e, t, r, u, f, b, g) {
                o(r, t, u);
                var k,
                    w,
                    x,
                    _ = function (e) {
                        if (e === f && P) return P;
                        if (!v && e in O) return O[e];
                        switch (e) {
                            case 'keys':
                            case 'values':
                            case 'entries':
                                return function () {
                                    return new r(this, e);
                                };
                        }
                        return function () {
                            return new r(this);
                        };
                    },
                    S = t + ' Iterator',
                    j = !1,
                    O = e.prototype,
                    A = O[h] || O['@@iterator'] || (f && O[f]),
                    P = (!v && A) || _(f),
                    z = ('Array' == t && O.entries) || A;
                if (
                    (z &&
                        ((k = i(z.call(new e()))),
                        m !== Object.prototype &&
                            k.next &&
                            (d ||
                                i(k) === m ||
                                (a
                                    ? a(k, m)
                                    : 'function' != typeof k[h] && l(k, h, y)),
                            c(k, S, !0, !0),
                            d && (p[S] = y))),
                    'values' == f &&
                        A &&
                        'values' !== A.name &&
                        ((j = !0),
                        (P = function () {
                            return A.call(this);
                        })),
                    (d && !g) || O[h] === P || l(O, h, P),
                    (p[t] = P),
                    f)
                )
                    if (
                        ((w = {
                            values: _('values'),
                            keys: b ? P : _('keys'),
                            entries: _('entries'),
                        }),
                        g)
                    )
                        for (x in w) (v || j || !(x in O)) && s(O, x, w[x]);
                    else n({ target: t, proto: !0, forced: v || j }, w);
                return w;
            };
        },
        function (e, t, r) {
            'use strict';
            var n = r(122),
                o = r(123);
            e.exports = n(
                'Set',
                function (e) {
                    return function () {
                        return e(
                            this,
                            arguments.length ? arguments[0] : void 0
                        );
                    };
                },
                o
            );
        },
        function (e, t) {
            e.exports = function (e, t, r) {
                if (!(e instanceof t))
                    throw TypeError(
                        'Incorrect ' + (r ? r + ' ' : '') + 'invocation'
                    );
                return e;
            };
        },
        function (e, t, r) {
            var n = r(1),
                o = r(34),
                i = ''.split;
            e.exports = n(function () {
                return !Object('z').propertyIsEnumerable(0);
            })
                ? function (e) {
                      return 'String' == o(e) ? i.call(e, '') : Object(e);
                  }
                : Object;
        },
        function (e, t, r) {
            var n = r(0),
                o = r(36),
                i = r(11),
                a = n('unscopables'),
                c = Array.prototype;
            null == c[a] && i.f(c, a, { configurable: !0, value: o(null) }),
                (e.exports = function (e) {
                    c[a][e] = !0;
                });
        },
        function (e, t, r) {
            var n = r(77),
                o = r(38),
                i = r(0)('iterator');
            e.exports = function (e) {
                if (null != e) return e[i] || e['@@iterator'] || o[n(e)];
            };
        },
        function (e, t, r) {
            var n = r(5),
                o = r(25),
                i = r(46),
                a = r(103),
                c = i('IE_PROTO'),
                l = Object.prototype;
            e.exports = a
                ? Object.getPrototypeOf
                : function (e) {
                      return (
                          (e = o(e)),
                          n(e, c)
                              ? e[c]
                              : 'function' == typeof e.constructor &&
                                e instanceof e.constructor
                              ? e.constructor.prototype
                              : e instanceof Object
                              ? l
                              : null
                      );
                  };
        },
        function (e, t, r) {
            var n = r(2),
                o = r(173).entries;
            n(
                { target: 'Object', stat: !0 },
                {
                    entries: function (e) {
                        return o(e);
                    },
                }
            );
        },
        function (e, t, r) {
            var n = r(2),
                o = r(175);
            n(
                { target: 'Object', stat: !0, forced: Object.assign !== o },
                { assign: o }
            );
        },
        function (e, t, r) {
            var n = r(3),
                o = r(4),
                i = n.document,
                a = o(i) && o(i.createElement);
            e.exports = function (e) {
                return a ? i.createElement(e) : {};
            };
        },
        function (e, t, r) {
            var n = r(82),
                o = Function.toString;
            'function' != typeof n.inspectSource &&
                (n.inspectSource = function (e) {
                    return o.call(e);
                }),
                (e.exports = n.inspectSource);
        },
        function (e, t) {
            t.f = Object.getOwnPropertySymbols;
        },
        function (e, t, r) {
            var n = r(1),
                o = r(0),
                i = r(118),
                a = o('species');
            e.exports = function (e) {
                return (
                    i >= 51 ||
                    !n(function () {
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
        function (e, t, r) {
            var n = r(63),
                o = r(34),
                i = r(0)('toStringTag'),
                a =
                    'Arguments' ==
                    o(
                        (function () {
                            return arguments;
                        })()
                    );
            e.exports = n
                ? o
                : function (e) {
                      var t, r, n;
                      return void 0 === e
                          ? 'Undefined'
                          : null === e
                          ? 'Null'
                          : 'string' ==
                            typeof (r = (function (e, t) {
                                try {
                                    return e[t];
                                } catch (e) {}
                            })((t = Object(e)), i))
                          ? r
                          : a
                          ? o(t)
                          : 'Object' == (n = o(t)) &&
                            'function' == typeof t.callee
                          ? 'Arguments'
                          : n;
                  };
        },
        function (e, t, r) {
            var n = r(0)('iterator'),
                o = !1;
            try {
                var i = 0,
                    a = {
                        next: function () {
                            return { done: !!i++ };
                        },
                        return: function () {
                            o = !0;
                        },
                    };
                (a[n] = function () {
                    return this;
                }),
                    Array.from(a, function () {
                        throw 2;
                    });
            } catch (e) {}
            e.exports = function (e, t) {
                if (!t && !o) return !1;
                var r = !1;
                try {
                    var i = {};
                    (i[n] = function () {
                        return {
                            next: function () {
                                return { done: (r = !0) };
                            },
                        };
                    }),
                        e(i);
                } catch (e) {}
                return r;
            };
        },
        function (e, t, r) {
            'use strict';
            var n,
                o,
                i = r(106),
                a = r(140),
                c = RegExp.prototype.exec,
                l = String.prototype.replace,
                s = c,
                u =
                    ((n = /a/),
                    (o = /b*/g),
                    c.call(n, 'a'),
                    c.call(o, 'a'),
                    0 !== n.lastIndex || 0 !== o.lastIndex),
                d = a.UNSUPPORTED_Y || a.BROKEN_CARET,
                p = void 0 !== /()??/.exec('')[1];
            (u || p || d) &&
                (s = function (e) {
                    var t,
                        r,
                        n,
                        o,
                        a = this,
                        s = d && a.sticky,
                        f = i.call(a),
                        m = a.source,
                        v = 0,
                        h = e;
                    return (
                        s &&
                            (-1 === (f = f.replace('y', '')).indexOf('g') &&
                                (f += 'g'),
                            (h = String(e).slice(a.lastIndex)),
                            a.lastIndex > 0 &&
                                (!a.multiline ||
                                    (a.multiline &&
                                        '\n' !== e[a.lastIndex - 1])) &&
                                ((m = '(?: ' + m + ')'), (h = ' ' + h), v++),
                            (r = new RegExp('^(?:' + m + ')', f))),
                        p && (r = new RegExp('^' + m + '$(?!\\s)', f)),
                        u && (t = a.lastIndex),
                        (n = c.call(s ? r : a, h)),
                        s
                            ? n
                                ? ((n.input = n.input.slice(v)),
                                  (n[0] = n[0].slice(v)),
                                  (n.index = a.lastIndex),
                                  (a.lastIndex += n[0].length))
                                : (a.lastIndex = 0)
                            : u &&
                              n &&
                              (a.lastIndex = a.global
                                  ? n.index + n[0].length
                                  : t),
                        p &&
                            n &&
                            n.length > 1 &&
                            l.call(n[0], r, function () {
                                for (o = 1; o < arguments.length - 2; o++)
                                    void 0 === arguments[o] && (n[o] = void 0);
                            }),
                        n
                    );
                }),
                (e.exports = s);
        },
        function (e, t, r) {
            var n = r(9),
                o = r(91),
                i = r(24),
                a = r(40),
                c = r(69),
                l = r(90),
                s = function (e, t) {
                    (this.stopped = e), (this.result = t);
                };
            (e.exports = function (e, t, r, u, d) {
                var p,
                    f,
                    m,
                    v,
                    h,
                    y,
                    b,
                    g = a(t, r, u ? 2 : 1);
                if (d) p = e;
                else {
                    if ('function' != typeof (f = c(e)))
                        throw TypeError('Target is not iterable');
                    if (o(f)) {
                        for (m = 0, v = i(e.length); v > m; m++)
                            if (
                                (h = u ? g(n((b = e[m]))[0], b[1]) : g(e[m])) &&
                                h instanceof s
                            )
                                return h;
                        return new s(!1);
                    }
                    p = f.call(e);
                }
                for (y = p.next; !(b = y.call(p)).done; )
                    if (
                        'object' == typeof (h = l(p, g, b.value, u)) &&
                        h &&
                        h instanceof s
                    )
                        return h;
                return new s(!1);
            }).stop = function (e) {
                return new s(!0, e);
            };
        },
        function (e, t, r) {
            var n = r(8),
                o = r(1),
                i = r(73);
            e.exports =
                !n &&
                !o(function () {
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
        function (e, t, r) {
            var n = r(3),
                o = r(57),
                i = n['__core-js_shared__'] || o('__core-js_shared__', {});
            e.exports = i;
        },
        function (e, t, r) {
            var n = r(5),
                o = r(99),
                i = r(31),
                a = r(11);
            e.exports = function (e, t) {
                for (var r = o(t), c = a.f, l = i.f, s = 0; s < r.length; s++) {
                    var u = r[s];
                    n(e, u) || c(e, u, l(t, u));
                }
            };
        },
        function (e, t, r) {
            var n = r(3);
            e.exports = n;
        },
        function (e, t, r) {
            var n = r(5),
                o = r(21),
                i = r(86).indexOf,
                a = r(35);
            e.exports = function (e, t) {
                var r,
                    c = o(e),
                    l = 0,
                    s = [];
                for (r in c) !n(a, r) && n(c, r) && s.push(r);
                for (; t.length > l; )
                    n(c, (r = t[l++])) && (~i(s, r) || s.push(r));
                return s;
            };
        },
        function (e, t, r) {
            var n = r(21),
                o = r(24),
                i = r(100),
                a = function (e) {
                    return function (t, r, a) {
                        var c,
                            l = n(t),
                            s = o(l.length),
                            u = i(a, s);
                        if (e && r != r) {
                            for (; s > u; ) if ((c = l[u++]) != c) return !0;
                        } else
                            for (; s > u; u++)
                                if ((e || u in l) && l[u] === r)
                                    return e || u || 0;
                        return !e && -1;
                    };
                };
            e.exports = { includes: a(!0), indexOf: a(!1) };
        },
        function (e, t, r) {
            var n = r(61);
            e.exports = n && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
        },
        function (e, t, r) {
            var n = r(0);
            t.f = n;
        },
        function (e, t, r) {
            var n = r(84),
                o = r(5),
                i = r(88),
                a = r(11).f;
            e.exports = function (e) {
                var t = n.Symbol || (n.Symbol = {});
                o(t, e) || a(t, e, { value: i.f(e) });
            };
        },
        function (e, t, r) {
            var n = r(9);
            e.exports = function (e, t, r, o) {
                try {
                    return o ? t(n(r)[0], r[1]) : t(r);
                } catch (t) {
                    var i = e.return;
                    throw (void 0 !== i && n(i.call(e)), t);
                }
            };
        },
        function (e, t, r) {
            var n = r(0),
                o = r(38),
                i = n('iterator'),
                a = Array.prototype;
            e.exports = function (e) {
                return void 0 !== e && (o.Array === e || a[i] === e);
            };
        },
        function (e, t, r) {
            'use strict';
            var n,
                o,
                i,
                a = r(70),
                c = r(19),
                l = r(5),
                s = r(0),
                u = r(32),
                d = s('iterator'),
                p = !1;
            [].keys &&
                ('next' in (i = [].keys())
                    ? (o = a(a(i))) !== Object.prototype && (n = o)
                    : (p = !0)),
                null == n && (n = {}),
                u ||
                    l(n, d) ||
                    c(n, d, function () {
                        return this;
                    }),
                (e.exports = {
                    IteratorPrototype: n,
                    BUGGY_SAFARI_ITERATORS: p,
                });
        },
        function (e, t, r) {
            var n = r(9),
                o = r(136);
            e.exports =
                Object.setPrototypeOf ||
                ('__proto__' in {}
                    ? (function () {
                          var e,
                              t = !1,
                              r = {};
                          try {
                              (e = Object.getOwnPropertyDescriptor(
                                  Object.prototype,
                                  '__proto__'
                              ).set).call(r, []),
                                  (t = r instanceof Array);
                          } catch (e) {}
                          return function (r, i) {
                              return (
                                  n(r),
                                  o(i),
                                  t ? e.call(r, i) : (r.__proto__ = i),
                                  r
                              );
                          };
                      })()
                    : void 0);
        },
        function (e, t, r) {
            var n = r(8),
                o = r(3),
                i = r(60),
                a = r(104),
                c = r(11).f,
                l = r(51).f,
                s = r(105),
                u = r(106),
                d = r(140),
                p = r(22),
                f = r(1),
                m = r(28).set,
                v = r(95),
                h = r(0)('match'),
                y = o.RegExp,
                b = y.prototype,
                g = /a/g,
                k = /a/g,
                w = new y(g) !== g,
                x = d.UNSUPPORTED_Y;
            if (
                n &&
                i(
                    'RegExp',
                    !w ||
                        x ||
                        f(function () {
                            return (
                                (k[h] = !1),
                                y(g) != g || y(k) == k || '/a/i' != y(g, 'i')
                            );
                        })
                )
            ) {
                for (
                    var _ = function (e, t) {
                            var r,
                                n = this instanceof _,
                                o = s(e),
                                i = void 0 === t;
                            if (!n && o && e.constructor === _ && i) return e;
                            w
                                ? o && !i && (e = e.source)
                                : e instanceof _ &&
                                  (i && (t = u.call(e)), (e = e.source)),
                                x &&
                                    (r = !!t && t.indexOf('y') > -1) &&
                                    (t = t.replace(/y/g, ''));
                            var c = a(
                                w ? new y(e, t) : y(e, t),
                                n ? this : b,
                                _
                            );
                            return x && r && m(c, { sticky: r }), c;
                        },
                        S = function (e) {
                            (e in _) ||
                                c(_, e, {
                                    configurable: !0,
                                    get: function () {
                                        return y[e];
                                    },
                                    set: function (t) {
                                        y[e] = t;
                                    },
                                });
                        },
                        j = l(y),
                        O = 0;
                    j.length > O;

                )
                    S(j[O++]);
                (b.constructor = _), (_.prototype = b), p(o, 'RegExp', _);
            }
            v('RegExp');
        },
        function (e, t, r) {
            'use strict';
            var n = r(30),
                o = r(11),
                i = r(0),
                a = r(8),
                c = i('species');
            e.exports = function (e) {
                var t = n(e),
                    r = o.f;
                a &&
                    t &&
                    !t[c] &&
                    r(t, c, {
                        configurable: !0,
                        get: function () {
                            return this;
                        },
                    });
            };
        },
        function (e, t, r) {
            var n = r(35),
                o = r(4),
                i = r(5),
                a = r(11).f,
                c = r(47),
                l = r(141),
                s = c('meta'),
                u = 0,
                d =
                    Object.isExtensible ||
                    function () {
                        return !0;
                    },
                p = function (e) {
                    a(e, s, { value: { objectID: 'O' + ++u, weakData: {} } });
                },
                f = (e.exports = {
                    REQUIRED: !1,
                    fastKey: function (e, t) {
                        if (!o(e))
                            return 'symbol' == typeof e
                                ? e
                                : ('string' == typeof e ? 'S' : 'P') + e;
                        if (!i(e, s)) {
                            if (!d(e)) return 'F';
                            if (!t) return 'E';
                            p(e);
                        }
                        return e[s].objectID;
                    },
                    getWeakData: function (e, t) {
                        if (!i(e, s)) {
                            if (!d(e)) return !0;
                            if (!t) return !1;
                            p(e);
                        }
                        return e[s].weakData;
                    },
                    onFreeze: function (e) {
                        return l && f.REQUIRED && d(e) && !i(e, s) && p(e), e;
                    },
                });
            n[s] = !0;
        },
        function (e, t, r) {
            var n = r(52),
                o = r(27),
                i = function (e) {
                    return function (t, r) {
                        var i,
                            a,
                            c = String(o(t)),
                            l = n(r),
                            s = c.length;
                        return l < 0 || l >= s
                            ? e
                                ? ''
                                : void 0
                            : (i = c.charCodeAt(l)) < 55296 ||
                              i > 56319 ||
                              l + 1 === s ||
                              (a = c.charCodeAt(l + 1)) < 56320 ||
                              a > 57343
                            ? e
                                ? c.charAt(l)
                                : i
                            : e
                            ? c.slice(l, l + 2)
                            : a - 56320 + ((i - 55296) << 10) + 65536;
                    };
                };
            e.exports = { codeAt: i(!1), charAt: i(!0) };
        },
        function (e, t, r) {
            'use strict';
            var n = r(2),
                o = r(67),
                i = r(21),
                a = r(119),
                c = [].join,
                l = o != Object,
                s = a('join', ',');
            n(
                { target: 'Array', proto: !0, forced: l || !s },
                {
                    join: function (e) {
                        return c.call(i(this), void 0 === e ? ',' : e);
                    },
                }
            );
        },
        function (e, t, r) {
            var n = r(30),
                o = r(51),
                i = r(75),
                a = r(9);
            e.exports =
                n('Reflect', 'ownKeys') ||
                function (e) {
                    var t = o.f(a(e)),
                        r = i.f;
                    return r ? t.concat(r(e)) : t;
                };
        },
        function (e, t, r) {
            var n = r(52),
                o = Math.max,
                i = Math.min;
            e.exports = function (e, t) {
                var r = n(e);
                return r < 0 ? o(r + t, 0) : i(r, t);
            };
        },
        function (e, t, r) {
            var n = r(4),
                o = r(55),
                i = r(0)('species');
            e.exports = function (e, t) {
                var r;
                return (
                    o(e) &&
                        ('function' != typeof (r = e.constructor) ||
                        (r !== Array && !o(r.prototype))
                            ? n(r) && null === (r = r[i]) && (r = void 0)
                            : (r = void 0)),
                    new (void 0 === r ? Array : r)(0 === t ? 0 : t)
                );
            };
        },
        function (e, t, r) {
            'use strict';
            var n = r(2),
                o = r(135);
            n(
                { target: 'Array', proto: !0, forced: [].forEach != o },
                { forEach: o }
            );
        },
        function (e, t, r) {
            var n = r(1);
            e.exports = !n(function () {
                function e() {}
                return (
                    (e.prototype.constructor = null),
                    Object.getPrototypeOf(new e()) !== e.prototype
                );
            });
        },
        function (e, t, r) {
            var n = r(4),
                o = r(93);
            e.exports = function (e, t, r) {
                var i, a;
                return (
                    o &&
                        'function' == typeof (i = t.constructor) &&
                        i !== r &&
                        n((a = i.prototype)) &&
                        a !== r.prototype &&
                        o(e, a),
                    e
                );
            };
        },
        function (e, t, r) {
            var n = r(4),
                o = r(34),
                i = r(0)('match');
            e.exports = function (e) {
                var t;
                return n(e) && (void 0 !== (t = e[i]) ? !!t : 'RegExp' == o(e));
            };
        },
        function (e, t, r) {
            'use strict';
            var n = r(9);
            e.exports = function () {
                var e = n(this),
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
        function (e, t, r) {
            var n = r(22);
            e.exports = function (e, t, r) {
                for (var o in t) n(e, o, t[o], r);
                return e;
            };
        },
        function (e, t, r) {
            'use strict';
            r(54);
            var n = r(22),
                o = r(1),
                i = r(0),
                a = r(79),
                c = r(19),
                l = i('species'),
                s = !o(function () {
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
                d = i('replace'),
                p = !!/./[d] && '' === /./[d]('a', '$0'),
                f = !o(function () {
                    var e = /(?:)/,
                        t = e.exec;
                    e.exec = function () {
                        return t.apply(this, arguments);
                    };
                    var r = 'ab'.split(e);
                    return 2 !== r.length || 'a' !== r[0] || 'b' !== r[1];
                });
            e.exports = function (e, t, r, d) {
                var m = i(e),
                    v = !o(function () {
                        var t = {};
                        return (
                            (t[m] = function () {
                                return 7;
                            }),
                            7 != ''[e](t)
                        );
                    }),
                    h =
                        v &&
                        !o(function () {
                            var t = !1,
                                r = /a/;
                            return (
                                'split' === e &&
                                    (((r = {}).constructor = {}),
                                    (r.constructor[l] = function () {
                                        return r;
                                    }),
                                    (r.flags = ''),
                                    (r[m] = /./[m])),
                                (r.exec = function () {
                                    return (t = !0), null;
                                }),
                                r[m](''),
                                !t
                            );
                        });
                if (
                    !v ||
                    !h ||
                    ('replace' === e && (!s || !u || p)) ||
                    ('split' === e && !f)
                ) {
                    var y = /./[m],
                        b = r(
                            m,
                            ''[e],
                            function (e, t, r, n, o) {
                                return t.exec === a
                                    ? v && !o
                                        ? { done: !0, value: y.call(t, r, n) }
                                        : { done: !0, value: e.call(r, t, n) }
                                    : { done: !1 };
                            },
                            {
                                REPLACE_KEEPS_$0: u,
                                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p,
                            }
                        ),
                        g = b[0],
                        k = b[1];
                    n(String.prototype, e, g),
                        n(
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
                d && c(RegExp.prototype[m], 'sham', !0);
            };
        },
        function (e, t, r) {
            var n = r(34),
                o = r(79);
            e.exports = function (e, t) {
                var r = e.exec;
                if ('function' == typeof r) {
                    var i = r.call(e, t);
                    if ('object' != typeof i)
                        throw TypeError(
                            'RegExp exec method returned something other than an Object or null'
                        );
                    return i;
                }
                if ('RegExp' !== n(e))
                    throw TypeError(
                        'RegExp#exec called on incompatible receiver'
                    );
                return o.call(e, t);
            };
        },
        function (e, t, r) {
            var n = r(3),
                o = r(111),
                i = r(135),
                a = r(19);
            for (var c in o) {
                var l = n[c],
                    s = l && l.prototype;
                if (s && s.forEach !== i)
                    try {
                        a(s, 'forEach', i);
                    } catch (e) {
                        s.forEach = i;
                    }
            }
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
        function (e, t, r) {
            'use strict';
            var n = r(2),
                o = r(86).includes,
                i = r(68);
            n(
                {
                    target: 'Array',
                    proto: !0,
                    forced: !r(41)('indexOf', { ACCESSORS: !0, 1: 0 }),
                },
                {
                    includes: function (e) {
                        return o(
                            this,
                            e,
                            arguments.length > 1 ? arguments[1] : void 0
                        );
                    },
                }
            ),
                i('includes');
        },
        function (e, t, r) {
            'use strict';
            var n = r(2),
                o = r(126),
                i = r(27);
            n(
                { target: 'String', proto: !0, forced: !r(127)('includes') },
                {
                    includes: function (e) {
                        return !!~String(i(this)).indexOf(
                            o(e),
                            arguments.length > 1 ? arguments[1] : void 0
                        );
                    },
                }
            );
        },
        function (e, t, r) {
            'use strict';
            r.d(t, 'a', function () {
                return o;
            }),
                r.d(t, 'b', function () {
                    return i;
                });
            r(7), r(12), r(14), r(20), r(6), r(42), r(10), r(65), r(13), r(16);
            function n(e) {
                return (n =
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
            function o(e) {
                for (var t = new Set([]), r = 0; r < e.services.length; r++)
                    for (
                        var n = e.services[r].purposes || [], o = 0;
                        o < n.length;
                        o++
                    )
                        t.add(n[o]);
                return Array.from(t);
            }
            function i(e, t, r) {
                void 0 === r && (r = !0);
                for (var o = Object.keys(t), a = 0; a < o.length; a++) {
                    var c = o[a],
                        l = t[c],
                        s = e[c];
                    'string' == typeof l
                        ? (r || void 0 === s) && (e[c] = l)
                        : 'object' === n(l) &&
                          ('object' === n(s)
                              ? i(s, l, r)
                              : (r || void 0 === s) && (e[c] = l));
                }
                return e;
            }
        },
        function (e, t, r) {
            'use strict';
            var n = r(144),
                o = r.n(n),
                i = r(145),
                a = r.n(i),
                c = r(146),
                l = r.n(c),
                s = r(147),
                u = r.n(s),
                d = r(148),
                p = r.n(d),
                f = r(149),
                m = r.n(f),
                v = r(150),
                h = r.n(v),
                y = r(151),
                b = r.n(y),
                g = r(152),
                k = r.n(g),
                w = r(153),
                x = r.n(w),
                _ = r(154),
                S = r.n(_),
                j = r(155),
                O = r.n(j),
                A = r(156),
                P = r.n(A),
                z = r(157),
                C = r.n(z),
                E = r(158),
                N = r.n(E),
                R = r(159),
                I = r.n(R),
                T = r(160),
                D = r.n(T),
                M = r(161),
                L = r.n(M),
                q = r(162),
                U = r.n(q),
                B = r(163),
                F = r.n(B),
                H = r(164),
                K = r.n(H),
                W = r(165),
                V = r.n(W),
                $ = r(166),
                G = r.n($),
                Z = r(167),
                Y = r.n(Z);
            t.a = {
                ca: l.a,
                cs: u.a,
                da: p.a,
                de: m.a,
                el: h.a,
                en: b.a,
                zh: o.a,
                pt: a.a,
                es: k.a,
                fi: x.a,
                fr: S.a,
                gl: O.a,
                hu: P.a,
                hr: C.a,
                it: N.a,
                nl: I.a,
                no: D.a,
                ro: L.a,
                sr: U.a,
                sr_cyrl: F.a,
                sv: K.a,
                tr: V.a,
                pl: G.a,
                ru: Y.a,
            };
        },
        function (e, t, r) {
            var n = r(8),
                o = r(11),
                i = r(9),
                a = r(48);
            e.exports = n
                ? Object.defineProperties
                : function (e, t) {
                      i(e);
                      for (var r, n = a(t), c = n.length, l = 0; c > l; )
                          o.f(e, (r = n[l++]), t[r]);
                      return e;
                  };
        },
        function (e, t, r) {
            var n = r(30);
            e.exports = n('document', 'documentElement');
        },
        function (e, t, r) {
            var n,
                o,
                i = r(3),
                a = r(168),
                c = i.process,
                l = c && c.versions,
                s = l && l.v8;
            s
                ? (o = (n = s.split('.'))[0] + n[1])
                : a &&
                  (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
                  (n = a.match(/Chrome\/(\d+)/)) &&
                  (o = n[1]),
                (e.exports = o && +o);
        },
        function (e, t, r) {
            'use strict';
            var n = r(1);
            e.exports = function (e, t) {
                var r = [][e];
                return (
                    !!r &&
                    n(function () {
                        r.call(
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
        function (e, t, r) {
            'use strict';
            var n = r(40),
                o = r(25),
                i = r(90),
                a = r(91),
                c = r(24),
                l = r(62),
                s = r(69);
            e.exports = function (e) {
                var t,
                    r,
                    u,
                    d,
                    p,
                    f,
                    m = o(e),
                    v = 'function' == typeof this ? this : Array,
                    h = arguments.length,
                    y = h > 1 ? arguments[1] : void 0,
                    b = void 0 !== y,
                    g = s(m),
                    k = 0;
                if (
                    (b && (y = n(y, h > 2 ? arguments[2] : void 0, 2)),
                    null == g || (v == Array && a(g)))
                )
                    for (r = new v((t = c(m.length))); t > k; k++)
                        (f = b ? y(m[k], k) : m[k]), l(r, k, f);
                else
                    for (
                        p = (d = g.call(m)).next, r = new v();
                        !(u = p.call(d)).done;
                        k++
                    )
                        (f = b ? i(d, y, [u.value, k], !0) : u.value),
                            l(r, k, f);
                return (r.length = k), r;
            };
        },
        function (e, t, r) {
            'use strict';
            var n = r(92).IteratorPrototype,
                o = r(36),
                i = r(33),
                a = r(37),
                c = r(38),
                l = function () {
                    return this;
                };
            e.exports = function (e, t, r) {
                var s = t + ' Iterator';
                return (
                    (e.prototype = o(n, { next: i(1, r) })),
                    a(e, s, !1, !0),
                    (c[s] = l),
                    e
                );
            };
        },
        function (e, t, r) {
            'use strict';
            var n = r(2),
                o = r(3),
                i = r(60),
                a = r(22),
                c = r(96),
                l = r(80),
                s = r(66),
                u = r(4),
                d = r(1),
                p = r(78),
                f = r(37),
                m = r(104);
            e.exports = function (e, t, r) {
                var v = -1 !== e.indexOf('Map'),
                    h = -1 !== e.indexOf('Weak'),
                    y = v ? 'set' : 'add',
                    b = o[e],
                    g = b && b.prototype,
                    k = b,
                    w = {},
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
                                          !(h && !u(e)) &&
                                          t.call(this, 0 === e ? 0 : e)
                                      );
                                  }
                                : 'get' == e
                                ? function (e) {
                                      return h && !u(e)
                                          ? void 0
                                          : t.call(this, 0 === e ? 0 : e);
                                  }
                                : 'has' == e
                                ? function (e) {
                                      return (
                                          !(h && !u(e)) &&
                                          t.call(this, 0 === e ? 0 : e)
                                      );
                                  }
                                : function (e, r) {
                                      return (
                                          t.call(this, 0 === e ? 0 : e, r), this
                                      );
                                  }
                        );
                    };
                if (
                    i(
                        e,
                        'function' != typeof b ||
                            !(
                                h ||
                                (g.forEach &&
                                    !d(function () {
                                        new b().entries().next();
                                    }))
                            )
                    )
                )
                    (k = r.getConstructor(t, e, v, y)), (c.REQUIRED = !0);
                else if (i(e, !0)) {
                    var _ = new k(),
                        S = _[y](h ? {} : -0, 1) != _,
                        j = d(function () {
                            _.has(1);
                        }),
                        O = p(function (e) {
                            new b(e);
                        }),
                        A =
                            !h &&
                            d(function () {
                                for (var e = new b(), t = 5; t--; ) e[y](t, t);
                                return !e.has(-0);
                            });
                    O ||
                        (((k = t(function (t, r) {
                            s(t, k, e);
                            var n = m(new b(), t, k);
                            return null != r && l(r, n[y], n, v), n;
                        })).prototype = g),
                        (g.constructor = k)),
                        (j || A) && (x('delete'), x('has'), v && x('get')),
                        (A || S) && x(y),
                        h && g.clear && delete g.clear;
                }
                return (
                    (w[e] = k),
                    n({ global: !0, forced: k != b }, w),
                    f(k, e),
                    h || r.setStrong(k, e, v),
                    k
                );
            };
        },
        function (e, t, r) {
            'use strict';
            var n = r(11).f,
                o = r(36),
                i = r(107),
                a = r(40),
                c = r(66),
                l = r(80),
                s = r(64),
                u = r(95),
                d = r(8),
                p = r(96).fastKey,
                f = r(28),
                m = f.set,
                v = f.getterFor;
            e.exports = {
                getConstructor: function (e, t, r, s) {
                    var u = e(function (e, n) {
                            c(e, u, t),
                                m(e, {
                                    type: t,
                                    index: o(null),
                                    first: void 0,
                                    last: void 0,
                                    size: 0,
                                }),
                                d || (e.size = 0),
                                null != n && l(n, e[s], e, r);
                        }),
                        f = v(t),
                        h = function (e, t, r) {
                            var n,
                                o,
                                i = f(e),
                                a = y(e, t);
                            return (
                                a
                                    ? (a.value = r)
                                    : ((i.last = a =
                                          {
                                              index: (o = p(t, !0)),
                                              key: t,
                                              value: r,
                                              previous: (n = i.last),
                                              next: void 0,
                                              removed: !1,
                                          }),
                                      i.first || (i.first = a),
                                      n && (n.next = a),
                                      d ? i.size++ : e.size++,
                                      'F' !== o && (i.index[o] = a)),
                                e
                            );
                        },
                        y = function (e, t) {
                            var r,
                                n = f(e),
                                o = p(t);
                            if ('F' !== o) return n.index[o];
                            for (r = n.first; r; r = r.next)
                                if (r.key == t) return r;
                        };
                    return (
                        i(u.prototype, {
                            clear: function () {
                                for (
                                    var e = f(this), t = e.index, r = e.first;
                                    r;

                                )
                                    (r.removed = !0),
                                        r.previous &&
                                            (r.previous = r.previous.next =
                                                void 0),
                                        delete t[r.index],
                                        (r = r.next);
                                (e.first = e.last = void 0),
                                    d ? (e.size = 0) : (this.size = 0);
                            },
                            delete: function (e) {
                                var t = f(this),
                                    r = y(this, e);
                                if (r) {
                                    var n = r.next,
                                        o = r.previous;
                                    delete t.index[r.index],
                                        (r.removed = !0),
                                        o && (o.next = n),
                                        n && (n.previous = o),
                                        t.first == r && (t.first = n),
                                        t.last == r && (t.last = o),
                                        d ? t.size-- : this.size--;
                                }
                                return !!r;
                            },
                            forEach: function (e) {
                                for (
                                    var t,
                                        r = f(this),
                                        n = a(
                                            e,
                                            arguments.length > 1
                                                ? arguments[1]
                                                : void 0,
                                            3
                                        );
                                    (t = t ? t.next : r.first);

                                )
                                    for (
                                        n(t.value, t.key, this);
                                        t && t.removed;

                                    )
                                        t = t.previous;
                            },
                            has: function (e) {
                                return !!y(this, e);
                            },
                        }),
                        i(
                            u.prototype,
                            r
                                ? {
                                      get: function (e) {
                                          var t = y(this, e);
                                          return t && t.value;
                                      },
                                      set: function (e, t) {
                                          return h(this, 0 === e ? 0 : e, t);
                                      },
                                  }
                                : {
                                      add: function (e) {
                                          return h(
                                              this,
                                              (e = 0 === e ? 0 : e),
                                              e
                                          );
                                      },
                                  }
                        ),
                        d &&
                            n(u.prototype, 'size', {
                                get: function () {
                                    return f(this).size;
                                },
                            }),
                        u
                    );
                },
                setStrong: function (e, t, r) {
                    var n = t + ' Iterator',
                        o = v(t),
                        i = v(n);
                    s(
                        e,
                        t,
                        function (e, t) {
                            m(this, {
                                type: n,
                                target: e,
                                state: o(e),
                                kind: t,
                                last: void 0,
                            });
                        },
                        function () {
                            for (
                                var e = i(this), t = e.kind, r = e.last;
                                r && r.removed;

                            )
                                r = r.previous;
                            return e.target &&
                                (e.last = r = r ? r.next : e.state.first)
                                ? 'keys' == t
                                    ? { value: r.key, done: !1 }
                                    : 'values' == t
                                    ? { value: r.value, done: !1 }
                                    : { value: [r.key, r.value], done: !1 }
                                : ((e.target = void 0),
                                  { value: void 0, done: !0 });
                        },
                        r ? 'entries' : 'values',
                        !r,
                        !0
                    ),
                        u(t);
                },
            };
        },
        function (e, t, r) {
            'use strict';
            var n = r(97).charAt;
            e.exports = function (e, t, r) {
                return t + (r ? n(e, t).length : 1);
            };
        },
        function (e, t, r) {
            'use strict';
            var n,
                o = r(2),
                i = r(31).f,
                a = r(24),
                c = r(126),
                l = r(27),
                s = r(127),
                u = r(32),
                d = ''.startsWith,
                p = Math.min,
                f = s('startsWith');
            o(
                {
                    target: 'String',
                    proto: !0,
                    forced:
                        !!(
                            u ||
                            f ||
                            ((n = i(String.prototype, 'startsWith')),
                            !n || n.writable)
                        ) && !f,
                },
                {
                    startsWith: function (e) {
                        var t = String(l(this));
                        c(e);
                        var r = a(
                                p(
                                    arguments.length > 1
                                        ? arguments[1]
                                        : void 0,
                                    t.length
                                )
                            ),
                            n = String(e);
                        return d
                            ? d.call(t, n, r)
                            : t.slice(r, r + n.length) === n;
                    },
                }
            );
        },
        function (e, t, r) {
            var n = r(105);
            e.exports = function (e) {
                if (n(e))
                    throw TypeError(
                        "The method doesn't accept regular expressions"
                    );
                return e;
            };
        },
        function (e, t, r) {
            var n = r(0)('match');
            e.exports = function (e) {
                var t = /./;
                try {
                    '/./'[e](t);
                } catch (r) {
                    try {
                        return (t[n] = !1), '/./'[e](t);
                    } catch (e) {}
                }
                return !1;
            };
        },
        function (e, t, r) {
            'use strict';
            var n = r(2),
                o = r(49).find,
                i = r(68),
                a = r(41),
                c = !0,
                l = a('find');
            'find' in [] &&
                Array(1).find(function () {
                    c = !1;
                }),
                n(
                    { target: 'Array', proto: !0, forced: c || !l },
                    {
                        find: function (e) {
                            return o(
                                this,
                                e,
                                arguments.length > 1 ? arguments[1] : void 0
                            );
                        },
                    }
                ),
                i('find');
        },
        function (e, t, r) {
            'use strict';
            var n = r(2),
                o = r(86).indexOf,
                i = r(119),
                a = r(41),
                c = [].indexOf,
                l = !!c && 1 / [1].indexOf(1, -0) < 0,
                s = i('indexOf'),
                u = a('indexOf', { ACCESSORS: !0, 1: 0 });
            n(
                { target: 'Array', proto: !0, forced: l || !s || !u },
                {
                    indexOf: function (e) {
                        return l
                            ? c.apply(this, arguments) || 0
                            : o(
                                  this,
                                  e,
                                  arguments.length > 1 ? arguments[1] : void 0
                              );
                    },
                }
            );
        },
        function (e, t, r) {
            'use strict';
            r.r(t),
                r.d(t, 'default', function () {
                    return z;
                });
            r(7),
                r(12),
                r(14),
                r(26),
                r(53),
                r(172),
                r(102),
                r(20),
                r(6),
                r(23),
                r(18),
                r(17),
                r(71),
                r(137),
                r(138),
                r(42),
                r(10),
                r(94),
                r(54),
                r(15),
                r(65),
                r(13),
                r(142),
                r(125),
                r(110),
                r(16),
                r(143);
            function n() {
                for (
                    var e = document.cookie.split(';'),
                        t = [],
                        r = new RegExp('^\\s*([^=]+)\\s*=\\s*(.*?)$'),
                        n = 0;
                    n < e.length;
                    n++
                ) {
                    var o = e[n],
                        i = r.exec(o);
                    null !== i && t.push({ name: i[1], value: i[2] });
                }
                return t;
            }
            function o(e, t, r) {
                var n = e + '=; Max-Age=-99999999;';
                (document.cookie = n),
                    (n += ' path=' + (t || '/') + ';'),
                    (document.cookie = n),
                    void 0 !== r &&
                        ((n += ' domain=' + r + ';'), (document.cookie = n));
            }
            var i = r(39);
            r(43), r(44);
            function a(e) {
                return (a =
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
            function c(e, t) {
                if ('function' != typeof t && null !== t)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                })),
                    t && l(e, t);
            }
            function l(e, t) {
                return (l =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function s(e) {
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
                    var r,
                        n = d(e);
                    if (t) {
                        var o = d(this).constructor;
                        r = Reflect.construct(n, arguments, o);
                    } else r = n.apply(this, arguments);
                    return u(this, r);
                };
            }
            function u(e, t) {
                return !t || ('object' !== a(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return e;
                      })(e)
                    : t;
            }
            function d(e) {
                return (d = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function p(e, t) {
                if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
            }
            function f(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function m(e, t, r) {
                return t && f(e.prototype, t), r && f(e, r), e;
            }
            var v = (function () {
                    function e() {
                        p(this, e), (this.value = null);
                    }
                    return (
                        m(e, [
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
                h = (function () {
                    function e(t) {
                        p(this, e),
                            (this.cookieName = t.storageName),
                            (this.cookieDomain = t.cookieDomain),
                            (this.cookiePath = t.cookiePath),
                            (this.cookieExpiresAfterDays =
                                t.cookieExpiresAfterDays);
                    }
                    return (
                        m(e, [
                            {
                                key: 'get',
                                value: function () {
                                    var e = (function (e) {
                                        for (
                                            var t = n(), r = 0;
                                            r < t.length;
                                            r++
                                        )
                                            if (t[r].name === e) return t[r];
                                        return null;
                                    })(this.cookieName);
                                    return e ? e.value : null;
                                },
                            },
                            {
                                key: 'set',
                                value: function (e) {
                                    return (function (e, t, r, n, o) {
                                        var i = '';
                                        if (r) {
                                            var a = new Date();
                                            a.setTime(
                                                a.getTime() +
                                                    24 * r * 60 * 60 * 1e3
                                            ),
                                                (i =
                                                    '; expires=' +
                                                    a.toUTCString());
                                        }
                                        void 0 !== n && (i += '; domain=' + n),
                                            (i +=
                                                void 0 !== o
                                                    ? '; path=' + o
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
                                    return o(this.cookieName);
                                },
                            },
                        ]),
                        e
                    );
                })(),
                y = (function () {
                    function e(t, r) {
                        p(this, e),
                            (this.key = t.storageName),
                            (this.handle = r);
                    }
                    return (
                        m(e, [
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
                b = (function (e) {
                    c(r, e);
                    var t = s(r);
                    function r(e) {
                        return p(this, r), t.call(this, e, localStorage);
                    }
                    return r;
                })(y),
                g = (function (e) {
                    c(r, e);
                    var t = s(r);
                    function r(e) {
                        return p(this, r), t.call(this, e, sessionStorage);
                    }
                    return r;
                })(y),
                k = { cookie: h, test: v, localStorage: b, sessionStorage: g };
            function w(e, t) {
                var r;
                if (
                    'undefined' == typeof Symbol ||
                    null == e[Symbol.iterator]
                ) {
                    if (
                        Array.isArray(e) ||
                        (r = _(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        r && (e = r);
                        var n = 0,
                            o = function () {};
                        return {
                            s: o,
                            n: function () {
                                return n >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[n++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: o,
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
                        r = e[Symbol.iterator]();
                    },
                    n: function () {
                        var e = r.next();
                        return (a = e.done), e;
                    },
                    e: function (e) {
                        (c = !0), (i = e);
                    },
                    f: function () {
                        try {
                            a || null == r.return || r.return();
                        } finally {
                            if (c) throw i;
                        }
                    },
                };
            }
            function x(e, t) {
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
                        var r = [],
                            n = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (
                                var a, c = e[Symbol.iterator]();
                                !(n = (a = c.next()).done) &&
                                (r.push(a.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (i = e);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return r;
                    })(e, t) ||
                    _(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function _(e, t) {
                if (e) {
                    if ('string' == typeof e) return S(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name),
                        'Map' === r || 'Set' === r
                            ? Array.from(e)
                            : 'Arguments' === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? S(e, t)
                            : void 0
                    );
                }
            }
            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function j(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t
                            ).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? j(Object(r), !0).forEach(function (t) {
                              A(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r)
                          )
                        : j(Object(r)).forEach(function (t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
                              );
                          });
                }
                return e;
            }
            function A(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            function P(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var z = (function () {
                function e(t, r, n) {
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                'Cannot call a class as a function'
                            );
                    })(this, e),
                        (this.config = t),
                        (this.store =
                            void 0 !== r ? r : new k[this.storageMethod](this)),
                        void 0 === this.store && (this.store = k.cookie),
                        (this.auxiliaryStore = void 0 !== n ? n : new g(this)),
                        (this.consents = this.defaultConsents),
                        (this.confirmed = !1),
                        (this.changed = !1),
                        (this.states = {}),
                        (this.initialized = {}),
                        (this.executedOnce = {}),
                        (this.watchers = new Set([])),
                        this.loadConsents(),
                        this.applyConsents(),
                        (this.savedConsents = O({}, this.consents));
                }
                var t, r, a;
                return (
                    (t = e),
                    (r = [
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
                                var r = this;
                                this.watchers.forEach(function (n) {
                                    n.update(r, e, t);
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
                                    r = 0;
                                return (
                                    this.config.services
                                        .filter(function (e) {
                                            return !e.contextualConsentOnly;
                                        })
                                        .map(function (n) {
                                            var o =
                                                'function' == typeof e
                                                    ? e(n)
                                                    : e;
                                            n.required || t.config.required || o
                                                ? t.updateConsent(n.name, !0) &&
                                                  r++
                                                : t.updateConsent(n.name, !1) &&
                                                  r++;
                                        }),
                                    r
                                );
                            },
                        },
                        {
                            key: 'changeAllWithTag',
                            value: function (e, t) {
                                var r = this;
                                return this.changeAll(function (n) {
                                    return r.hasTag(n, t) ? !e : e;
                                });
                            },
                        },
                        {
                            key: 'hasTag',
                            value: function (e, t) {
                                var r;
                                return (
                                    -1 !==
                                    (null !== (r = e.tags) && void 0 !== r
                                        ? r
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
                                var r = (this.consents[e] || !1) !== t;
                                return (
                                    (this.consents[e] = t),
                                    this.notify('consents', this.consents),
                                    r
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
                                    (this.savedConsents = O({}, this.consents)),
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
                                        r = Object.entries(this.consents);
                                    t < r.length;
                                    t++
                                ) {
                                    var n = x(r[t], 2),
                                        o = n[0],
                                        i = n[1];
                                    this.savedConsents[o] !== i && (e[o] = i);
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
                                var r = this.changedConsents();
                                (this.savedConsents = O({}, this.consents)),
                                    this.notify('saveConsents', {
                                        changes: r,
                                        consents: this.consents,
                                        type: e || 'script',
                                    });
                            },
                        },
                        {
                            key: 'applyConsents',
                            value: function (e, t, r) {
                                function n(e, t) {
                                    if (void 0 !== e)
                                        return (
                                            'function' == typeof e
                                                ? e
                                                : new Function('opts', e)
                                        )(t);
                                }
                                for (
                                    var o = 0, i = 0;
                                    i < this.config.services.length;
                                    i++
                                ) {
                                    var a = this.config.services[i];
                                    if (void 0 === r || r === a.name) {
                                        var c = a.vars || {},
                                            l = {
                                                service: a,
                                                config: this.config,
                                                vars: c,
                                            };
                                        this.initialized[a.name] ||
                                            ((this.initialized[a.name] = !0),
                                            n(a.onInit, l));
                                    }
                                }
                                for (
                                    var s = 0;
                                    s < this.config.services.length;
                                    s++
                                ) {
                                    var u = this.config.services[s];
                                    if (void 0 === r || r === u.name) {
                                        var d = this.states[u.name],
                                            p = u.vars || {},
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
                                            h =
                                                (this.getConsent(u.name) &&
                                                    v) ||
                                                m,
                                            y = {
                                                service: u,
                                                config: this.config,
                                                vars: p,
                                                consents: this.consents,
                                                confirmed: this.confirmed,
                                            };
                                        d !== h && o++,
                                            e ||
                                                (n(
                                                    h
                                                        ? u.onAccept
                                                        : u.onDecline,
                                                    y
                                                ),
                                                this.updateServiceElements(
                                                    u,
                                                    h
                                                ),
                                                this.updateServiceStorage(u, h),
                                                void 0 !== u.callback &&
                                                    u.callback(h, u),
                                                void 0 !==
                                                    this.config.callback &&
                                                    this.config.callback(h, u),
                                                (this.states[u.name] = h));
                                    }
                                }
                                return this.notify('applyConsents', o, r), o;
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
                                    var r = document.querySelectorAll(
                                            "[data-name='" + e.name + "']"
                                        ),
                                        n = 0;
                                    n < r.length;
                                    n++
                                ) {
                                    var o = r[n],
                                        a = o.parentElement,
                                        c = Object(i.c)(o),
                                        l = c.type,
                                        s = c.src,
                                        u = c.href,
                                        d = ['href', 'src', 'type'];
                                    if ('placeholder' !== l)
                                        if ('IFRAME' === o.tagName) {
                                            if (t && o.src === s) {
                                                console.debug(
                                                    'Skipping '
                                                        .concat(
                                                            o.tagName,
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
                                                f = document.createElement(
                                                    o.tagName
                                                ),
                                                m = w(o.attributes);
                                            try {
                                                for (
                                                    m.s();
                                                    !(p = m.n()).done;

                                                ) {
                                                    var v = p.value;
                                                    f.setAttribute(
                                                        v.name,
                                                        v.value
                                                    );
                                                }
                                            } catch (e) {
                                                m.e(e);
                                            } finally {
                                                m.f();
                                            }
                                            (f.innerText = o.innerText),
                                                (f.text = o.text),
                                                t
                                                    ? (void 0 !==
                                                          c[
                                                              'original-display'
                                                          ] &&
                                                          (f.style.display =
                                                              c[
                                                                  'original-display'
                                                              ]),
                                                      void 0 !== c.src &&
                                                          (f.src = c.src))
                                                    : ((f.src = ''),
                                                      void 0 !==
                                                          c[
                                                              'modified-by-klaro'
                                                          ] &&
                                                      void 0 !==
                                                          c['original-display']
                                                          ? f.setAttribute(
                                                                'data-original-display',
                                                                c[
                                                                    'original-display'
                                                                ]
                                                            )
                                                          : (void 0 !==
                                                                o.style
                                                                    .display &&
                                                                f.setAttribute(
                                                                    'data-original-display',
                                                                    o.style
                                                                        .display
                                                                ),
                                                            f.setAttribute(
                                                                'data-modified-by-klaro',
                                                                'yes'
                                                            )),
                                                      (f.style.display =
                                                          'none')),
                                                a.insertBefore(f, o),
                                                a.removeChild(o);
                                        } else if (
                                            'SCRIPT' === o.tagName ||
                                            'LINK' === o.tagName
                                        ) {
                                            if (
                                                t &&
                                                o.type === (l || '') &&
                                                o.src === s
                                            ) {
                                                console.debug(
                                                    'Skipping '
                                                        .concat(
                                                            o.tagName,
                                                            ' for service '
                                                        )
                                                        .concat(
                                                            e.name,
                                                            ', as it already has the correct type or src...'
                                                        )
                                                );
                                                continue;
                                            }
                                            var h,
                                                y = document.createElement(
                                                    o.tagName
                                                ),
                                                b = w(o.attributes);
                                            try {
                                                for (
                                                    b.s();
                                                    !(h = b.n()).done;

                                                ) {
                                                    var g = h.value;
                                                    y.setAttribute(
                                                        g.name,
                                                        g.value
                                                    );
                                                }
                                            } catch (e) {
                                                b.e(e);
                                            } finally {
                                                b.f();
                                            }
                                            (y.innerText = o.innerText),
                                                (y.text = o.text),
                                                t
                                                    ? ((y.type = l || ''),
                                                      void 0 !== s &&
                                                          (y.src = s),
                                                      void 0 !== u &&
                                                          (y.href = u))
                                                    : (y.type = 'text/plain'),
                                                a.insertBefore(y, o),
                                                a.removeChild(o);
                                        } else {
                                            if (t) {
                                                var k,
                                                    x = w(d);
                                                try {
                                                    for (
                                                        x.s();
                                                        !(k = x.n()).done;

                                                    ) {
                                                        var _ = k.value,
                                                            S = c[_];
                                                        void 0 !== S &&
                                                            (void 0 ===
                                                                c[
                                                                    'original-' +
                                                                        _
                                                                ] &&
                                                                (c[
                                                                    'original-' +
                                                                        _
                                                                ] = o[_]),
                                                            (o[_] = S));
                                                    }
                                                } catch (e) {
                                                    x.e(e);
                                                } finally {
                                                    x.f();
                                                }
                                                void 0 !== c.title &&
                                                    (o.title = c.title),
                                                    void 0 !==
                                                    c['original-display']
                                                        ? (o.style.display =
                                                              c[
                                                                  'original-display'
                                                              ])
                                                        : o.style.removeProperty(
                                                              'display'
                                                          );
                                            } else {
                                                void 0 !== c.title &&
                                                    o.removeAttribute('title'),
                                                    void 0 ===
                                                        c['original-display'] &&
                                                        void 0 !==
                                                            o.style.display &&
                                                        (c['original-display'] =
                                                            o.style.display),
                                                    (o.style.display = 'none');
                                                var j,
                                                    O = w(d);
                                                try {
                                                    for (
                                                        O.s();
                                                        !(j = O.n()).done;

                                                    ) {
                                                        var A = j.value;
                                                        void 0 !== c[A] &&
                                                            (void 0 !==
                                                            c['original-' + A]
                                                                ? (o[A] =
                                                                      c[
                                                                          'original-' +
                                                                              A
                                                                      ])
                                                                : o.removeAttribute(
                                                                      A
                                                                  ));
                                                    }
                                                } catch (e) {
                                                    O.e(e);
                                                } finally {
                                                    O.f();
                                                }
                                            }
                                            Object(i.a)(c, o);
                                        }
                                    else
                                        t
                                            ? ((o.style.display = 'none'),
                                              (c['original-display'] =
                                                  o.style.display))
                                            : (o.style.display =
                                                  c['original-display'] ||
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
                                        var r = n(), i = 0;
                                        i < e.cookies.length;
                                        i++
                                    ) {
                                        var a = e.cookies[i],
                                            c = void 0,
                                            l = void 0;
                                        if (a instanceof Array) {
                                            var s = x(a, 3);
                                            (a = s[0]), (c = s[1]), (l = s[2]);
                                        } else if (
                                            a instanceof Object &&
                                            !(a instanceof RegExp)
                                        ) {
                                            var u = a;
                                            (a = u.pattern),
                                                (c = u.path),
                                                (l = u.domain);
                                        }
                                        if (void 0 !== a) {
                                            a instanceof RegExp ||
                                                (a = a.startsWith('^')
                                                    ? new RegExp(a)
                                                    : new RegExp(
                                                          '^' +
                                                              a.replace(
                                                                  /[-[\]/{}()*+?.\\^$|]/g,
                                                                  '\\$&'
                                                              ) +
                                                              '$'
                                                      ));
                                            for (var d = 0; d < r.length; d++) {
                                                var p = r[d];
                                                null !== a.exec(p.name) &&
                                                    (console.debug(
                                                        'Deleting cookie:',
                                                        p.name,
                                                        'Matched pattern:',
                                                        a,
                                                        'Path:',
                                                        c,
                                                        'Domain:',
                                                        l
                                                    ),
                                                    o(p.name, c, l),
                                                    void 0 === l &&
                                                        o(
                                                            p.name,
                                                            c,
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
                                        r = new Set(Object.keys(this.consents)),
                                        n = 0,
                                        o = Object.keys(this.consents);
                                    n < o.length;
                                    n++
                                ) {
                                    var i = o[n];
                                    t.has(i) || delete this.consents[i];
                                }
                                var a,
                                    c = w(this.config.services);
                                try {
                                    for (c.s(); !(a = c.n()).done; ) {
                                        var l = a.value;
                                        r.has(l.name) ||
                                            ((this.consents[l.name] =
                                                this.getDefaultConsent(l)),
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
                                    var r = this.config.services[t];
                                    e[r.name] = this.getDefaultConsent(r);
                                }
                                return e;
                            },
                        },
                    ]) && P(t.prototype, r),
                    a && P(t, a),
                    e
                );
            })();
        },
        function (e, t, r) {
            var n;
            /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
                'use strict';
                var r = {}.hasOwnProperty;
                function o() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var i = typeof n;
                            if ('string' === i || 'number' === i) e.push(n);
                            else if (Array.isArray(n) && n.length) {
                                var a = o.apply(null, n);
                                a && e.push(a);
                            } else if ('object' === i)
                                for (var c in n)
                                    r.call(n, c) && n[c] && e.push(c);
                        }
                    }
                    return e.join(' ');
                }
                e.exports
                    ? ((o.default = o), (e.exports = o))
                    : void 0 ===
                          (n = function () {
                              return o;
                          }.apply(t, [])) || (e.exports = n);
            })();
        },
        function (e, t) {
            var r;
            r = (function () {
                return this;
            })();
            try {
                r = r || new Function('return this')();
            } catch (e) {
                'object' == typeof window && (r = window);
            }
            e.exports = r;
        },
        function (e, t, r) {
            var n = r(3),
                o = r(74),
                i = n.WeakMap;
            e.exports = 'function' == typeof i && /native code/.test(o(i));
        },
        function (e, t, r) {
            var n = r(21),
                o = r(51).f,
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
                              return o(e);
                          } catch (e) {
                              return a.slice();
                          }
                      })(e)
                    : o(n(e));
            };
        },
        function (e, t, r) {
            'use strict';
            var n = r(49).forEach,
                o = r(119),
                i = r(41),
                a = o('forEach'),
                c = i('forEach');
            e.exports =
                a && c
                    ? [].forEach
                    : function (e) {
                          return n(
                              this,
                              e,
                              arguments.length > 1 ? arguments[1] : void 0
                          );
                      };
        },
        function (e, t, r) {
            var n = r(4);
            e.exports = function (e) {
                if (!n(e) && null !== e)
                    throw TypeError(
                        "Can't set " + String(e) + ' as a prototype'
                    );
                return e;
            };
        },
        function (e, t, r) {
            var n = r(2),
                o = r(1),
                i = r(21),
                a = r(31).f,
                c = r(8),
                l = o(function () {
                    a(1);
                });
            n(
                { target: 'Object', stat: !0, forced: !c || l, sham: !c },
                {
                    getOwnPropertyDescriptor: function (e, t) {
                        return a(i(e), t);
                    },
                }
            );
        },
        function (e, t, r) {
            var n = r(2),
                o = r(8),
                i = r(99),
                a = r(21),
                c = r(31),
                l = r(62);
            n(
                { target: 'Object', stat: !0, sham: !o },
                {
                    getOwnPropertyDescriptors: function (e) {
                        for (
                            var t,
                                r,
                                n = a(e),
                                o = c.f,
                                s = i(n),
                                u = {},
                                d = 0;
                            s.length > d;

                        )
                            void 0 !== (r = o(n, (t = s[d++]))) && l(u, t, r);
                        return u;
                    },
                }
            );
        },
        function (e, t, r) {
            'use strict';
            var n = r(63),
                o = r(77);
            e.exports = n
                ? {}.toString
                : function () {
                      return '[object ' + o(this) + ']';
                  };
        },
        function (e, t, r) {
            'use strict';
            var n = r(1);
            function o(e, t) {
                return RegExp(e, t);
            }
            (t.UNSUPPORTED_Y = n(function () {
                var e = o('a', 'y');
                return (e.lastIndex = 2), null != e.exec('abcd');
            })),
                (t.BROKEN_CARET = n(function () {
                    var e = o('^r', 'gy');
                    return (e.lastIndex = 2), null != e.exec('str');
                }));
        },
        function (e, t, r) {
            var n = r(1);
            e.exports = !n(function () {
                return Object.isExtensible(Object.preventExtensions({}));
            });
        },
        function (e, t, r) {
            'use strict';
            var n = r(108),
                o = r(9),
                i = r(25),
                a = r(24),
                c = r(52),
                l = r(27),
                s = r(124),
                u = r(109),
                d = Math.max,
                p = Math.min,
                f = Math.floor,
                m = /\$([$&'`]|\d\d?|<[^>]*>)/g,
                v = /\$([$&'`]|\d\d?)/g;
            n('replace', 2, function (e, t, r, n) {
                var h = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                    y = n.REPLACE_KEEPS_$0,
                    b = h ? '$' : '$0';
                return [
                    function (r, n) {
                        var o = l(this),
                            i = null == r ? void 0 : r[e];
                        return void 0 !== i
                            ? i.call(r, o, n)
                            : t.call(String(o), r, n);
                    },
                    function (e, n) {
                        if (
                            (!h && y) ||
                            ('string' == typeof n && -1 === n.indexOf(b))
                        ) {
                            var i = r(t, e, this, n);
                            if (i.done) return i.value;
                        }
                        var l = o(e),
                            f = String(this),
                            m = 'function' == typeof n;
                        m || (n = String(n));
                        var v = l.global;
                        if (v) {
                            var k = l.unicode;
                            l.lastIndex = 0;
                        }
                        for (var w = []; ; ) {
                            var x = u(l, f);
                            if (null === x) break;
                            if ((w.push(x), !v)) break;
                            '' === String(x[0]) &&
                                (l.lastIndex = s(f, a(l.lastIndex), k));
                        }
                        for (var _, S = '', j = 0, O = 0; O < w.length; O++) {
                            x = w[O];
                            for (
                                var A = String(x[0]),
                                    P = d(p(c(x.index), f.length), 0),
                                    z = [],
                                    C = 1;
                                C < x.length;
                                C++
                            )
                                z.push(void 0 === (_ = x[C]) ? _ : String(_));
                            var E = x.groups;
                            if (m) {
                                var N = [A].concat(z, P, f);
                                void 0 !== E && N.push(E);
                                var R = String(n.apply(void 0, N));
                            } else R = g(A, f, P, z, E, n);
                            P >= j &&
                                ((S += f.slice(j, P) + R), (j = P + A.length));
                        }
                        return S + f.slice(j);
                    },
                ];
                function g(e, r, n, o, a, c) {
                    var l = n + e.length,
                        s = o.length,
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
                                    return r.slice(0, n);
                                case "'":
                                    return r.slice(l);
                                case '<':
                                    c = a[i.slice(1, -1)];
                                    break;
                                default:
                                    var u = +i;
                                    if (0 === u) return t;
                                    if (u > s) {
                                        var d = f(u / 10);
                                        return 0 === d
                                            ? t
                                            : d <= s
                                            ? void 0 === o[d - 1]
                                                ? i.charAt(1)
                                                : o[d - 1] + i.charAt(1)
                                            : t;
                                    }
                                    c = o[u - 1];
                            }
                            return void 0 === c ? '' : c;
                        })
                    );
                }
            });
        },
        function (e, t, r) {
            'use strict';
            var n = r(108),
                o = r(105),
                i = r(9),
                a = r(27),
                c = r(169),
                l = r(124),
                s = r(24),
                u = r(109),
                d = r(79),
                p = r(1),
                f = [].push,
                m = Math.min,
                v = !p(function () {
                    return !RegExp(4294967295, 'y');
                });
            n(
                'split',
                2,
                function (e, t, r) {
                    var n;
                    return (
                        (n =
                            'c' == 'abbc'.split(/(b)*/)[1] ||
                            4 != 'test'.split(/(?:)/, -1).length ||
                            2 != 'ab'.split(/(?:ab)*/).length ||
                            4 != '.'.split(/(.?)(.?)/).length ||
                            '.'.split(/()()/).length > 1 ||
                            ''.split(/.?/).length
                                ? function (e, r) {
                                      var n = String(a(this)),
                                          i =
                                              void 0 === r
                                                  ? 4294967295
                                                  : r >>> 0;
                                      if (0 === i) return [];
                                      if (void 0 === e) return [n];
                                      if (!o(e)) return t.call(n, e, i);
                                      for (
                                          var c,
                                              l,
                                              s,
                                              u = [],
                                              p =
                                                  (e.ignoreCase ? 'i' : '') +
                                                  (e.multiline ? 'm' : '') +
                                                  (e.unicode ? 'u' : '') +
                                                  (e.sticky ? 'y' : ''),
                                              m = 0,
                                              v = new RegExp(e.source, p + 'g');
                                          (c = d.call(v, n)) &&
                                          !(
                                              (l = v.lastIndex) > m &&
                                              (u.push(n.slice(m, c.index)),
                                              c.length > 1 &&
                                                  c.index < n.length &&
                                                  f.apply(u, c.slice(1)),
                                              (s = c[0].length),
                                              (m = l),
                                              u.length >= i)
                                          );

                                      )
                                          v.lastIndex === c.index &&
                                              v.lastIndex++;
                                      return (
                                          m === n.length
                                              ? (!s && v.test('')) || u.push('')
                                              : u.push(n.slice(m)),
                                          u.length > i ? u.slice(0, i) : u
                                      );
                                  }
                                : '0'.split(void 0, 0).length
                                ? function (e, r) {
                                      return void 0 === e && 0 === r
                                          ? []
                                          : t.call(this, e, r);
                                  }
                                : t),
                        [
                            function (t, r) {
                                var o = a(this),
                                    i = null == t ? void 0 : t[e];
                                return void 0 !== i
                                    ? i.call(t, o, r)
                                    : n.call(String(o), t, r);
                            },
                            function (e, o) {
                                var a = r(n, e, this, o, n !== t);
                                if (a.done) return a.value;
                                var d = i(e),
                                    p = String(this),
                                    f = c(d, RegExp),
                                    h = d.unicode,
                                    y =
                                        (d.ignoreCase ? 'i' : '') +
                                        (d.multiline ? 'm' : '') +
                                        (d.unicode ? 'u' : '') +
                                        (v ? 'y' : 'g'),
                                    b = new f(
                                        v ? d : '^(?:' + d.source + ')',
                                        y
                                    ),
                                    g = void 0 === o ? 4294967295 : o >>> 0;
                                if (0 === g) return [];
                                if (0 === p.length)
                                    return null === u(b, p) ? [p] : [];
                                for (var k = 0, w = 0, x = []; w < p.length; ) {
                                    b.lastIndex = v ? w : 0;
                                    var _,
                                        S = u(b, v ? p : p.slice(w));
                                    if (
                                        null === S ||
                                        (_ = m(
                                            s(b.lastIndex + (v ? 0 : w)),
                                            p.length
                                        )) === k
                                    )
                                        w = l(p, w, h);
                                    else {
                                        if (
                                            (x.push(p.slice(k, w)),
                                            x.length === g)
                                        )
                                            return x;
                                        for (var j = 1; j <= S.length - 1; j++)
                                            if ((x.push(S[j]), x.length === g))
                                                return x;
                                        w = k = _;
                                    }
                                }
                                return x.push(p.slice(k)), x;
                            },
                        ]
                    );
                },
                !v
            );
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
        function (e, t, r) {
            var n = r(30);
            e.exports = n('navigator', 'userAgent') || '';
        },
        function (e, t, r) {
            var n = r(9),
                o = r(50),
                i = r(0)('species');
            e.exports = function (e, t) {
                var r,
                    a = n(e).constructor;
                return void 0 === a || null == (r = n(a)[i]) ? t : o(r);
            };
        },
        function (e, t, r) {
            'use strict';
            var n = r(122),
                o = r(123);
            e.exports = n(
                'Map',
                function (e) {
                    return function () {
                        return e(
                            this,
                            arguments.length ? arguments[0] : void 0
                        );
                    };
                },
                o
            );
        },
        function (e, t, r) {
            'use strict';
            var n = r(2),
                o = r(50),
                i = r(25),
                a = r(1),
                c = r(119),
                l = [],
                s = l.sort,
                u = a(function () {
                    l.sort(void 0);
                }),
                d = a(function () {
                    l.sort(null);
                }),
                p = c('sort');
            n(
                { target: 'Array', proto: !0, forced: u || !d || !p },
                {
                    sort: function (e) {
                        return void 0 === e
                            ? s.call(i(this))
                            : s.call(i(this), o(e));
                    },
                }
            );
        },
        function (e, t, r) {
            'use strict';
            var n = r(2),
                o = r(49).findIndex,
                i = r(68),
                a = r(41),
                c = !0,
                l = a('findIndex');
            'findIndex' in [] &&
                Array(1).findIndex(function () {
                    c = !1;
                }),
                n(
                    { target: 'Array', proto: !0, forced: c || !l },
                    {
                        findIndex: function (e) {
                            return o(
                                this,
                                e,
                                arguments.length > 1 ? arguments[1] : void 0
                            );
                        },
                    }
                ),
                i('findIndex');
        },
        function (e, t, r) {
            var n = r(8),
                o = r(48),
                i = r(21),
                a = r(56).f,
                c = function (e) {
                    return function (t) {
                        for (
                            var r,
                                c = i(t),
                                l = o(c),
                                s = l.length,
                                u = 0,
                                d = [];
                            s > u;

                        )
                            (r = l[u++]),
                                (n && !a.call(c, r)) ||
                                    d.push(e ? [r, c[r]] : c[r]);
                        return d;
                    };
                };
            e.exports = { entries: c(!0), values: c(!1) };
        },
        function (e, t, r) {
            'use strict';
            var n = r(50),
                o = r(4),
                i = [].slice,
                a = {},
                c = function (e, t, r) {
                    if (!(t in a)) {
                        for (var n = [], o = 0; o < t; o++)
                            n[o] = 'a[' + o + ']';
                        a[t] = Function(
                            'C,a',
                            'return new C(' + n.join(',') + ')'
                        );
                    }
                    return a[t](e, r);
                };
            e.exports =
                Function.bind ||
                function (e) {
                    var t = n(this),
                        r = i.call(arguments, 1),
                        a = function () {
                            var n = r.concat(i.call(arguments));
                            return this instanceof a
                                ? c(t, n.length, n)
                                : t.apply(e, n);
                        };
                    return o(t.prototype) && (a.prototype = t.prototype), a;
                };
        },
        function (e, t, r) {
            'use strict';
            var n = r(8),
                o = r(1),
                i = r(48),
                a = r(75),
                c = r(56),
                l = r(25),
                s = r(67),
                u = Object.assign,
                d = Object.defineProperty;
            e.exports =
                !u ||
                o(function () {
                    if (
                        n &&
                        1 !==
                            u(
                                { b: 1 },
                                u(
                                    d({}, 'a', {
                                        enumerable: !0,
                                        get: function () {
                                            d(this, 'b', {
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
                        r = Symbol();
                    return (
                        (e[r] = 7),
                        'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                            t[e] = e;
                        }),
                        7 != u({}, e)[r] ||
                            'abcdefghijklmnopqrst' != i(u({}, t)).join('')
                    );
                })
                    ? function (e, t) {
                          for (
                              var r = l(e),
                                  o = arguments.length,
                                  u = 1,
                                  d = a.f,
                                  p = c.f;
                              o > u;

                          )
                              for (
                                  var f,
                                      m = s(arguments[u++]),
                                      v = d ? i(m).concat(d(m)) : i(m),
                                      h = v.length,
                                      y = 0;
                                  h > y;

                              )
                                  (f = v[y++]),
                                      (n && !p.call(m, f)) || (r[f] = m[f]);
                          return r;
                      }
                    : u;
        },
        function (e, t, r) {
            'use strict';
            var n,
                o,
                i,
                a,
                c = r(2),
                l = r(32),
                s = r(3),
                u = r(30),
                d = r(188),
                p = r(22),
                f = r(107),
                m = r(37),
                v = r(95),
                h = r(4),
                y = r(50),
                b = r(66),
                g = r(34),
                k = r(74),
                w = r(80),
                x = r(78),
                _ = r(169),
                S = r(177).set,
                j = r(189),
                O = r(190),
                A = r(191),
                P = r(179),
                z = r(192),
                C = r(28),
                E = r(60),
                N = r(0),
                R = r(118),
                I = N('species'),
                T = 'Promise',
                D = C.get,
                M = C.set,
                L = C.getterFor(T),
                q = d,
                U = s.TypeError,
                B = s.document,
                F = s.process,
                H = u('fetch'),
                K = P.f,
                W = K,
                V = 'process' == g(F),
                $ = !!(B && B.createEvent && s.dispatchEvent),
                G = E(T, function () {
                    if (!(k(q) !== String(q))) {
                        if (66 === R) return !0;
                        if (!V && 'function' != typeof PromiseRejectionEvent)
                            return !0;
                    }
                    if (l && !q.prototype.finally) return !0;
                    if (R >= 51 && /native code/.test(q)) return !1;
                    var e = q.resolve(1),
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
                        q.all(e).catch(function () {});
                    }),
                Y = function (e) {
                    var t;
                    return !(!h(e) || 'function' != typeof (t = e.then)) && t;
                },
                J = function (e, t, r) {
                    if (!t.notified) {
                        t.notified = !0;
                        var n = t.reactions;
                        j(function () {
                            for (
                                var o = t.value, i = 1 == t.state, a = 0;
                                n.length > a;

                            ) {
                                var c,
                                    l,
                                    s,
                                    u = n[a++],
                                    d = i ? u.ok : u.fail,
                                    p = u.resolve,
                                    f = u.reject,
                                    m = u.domain;
                                try {
                                    d
                                        ? (i ||
                                              (2 === t.rejection && te(e, t),
                                              (t.rejection = 1)),
                                          !0 === d
                                              ? (c = o)
                                              : (m && m.enter(),
                                                (c = d(o)),
                                                m && (m.exit(), (s = !0))),
                                          c === u.promise
                                              ? f(U('Promise-chain cycle'))
                                              : (l = Y(c))
                                              ? l.call(c, p, f)
                                              : p(c))
                                        : f(o);
                                } catch (e) {
                                    m && !s && m.exit(), f(e);
                                }
                            }
                            (t.reactions = []),
                                (t.notified = !1),
                                r && !t.rejection && Q(e, t);
                        });
                    }
                },
                X = function (e, t, r) {
                    var n, o;
                    $
                        ? (((n = B.createEvent('Event')).promise = t),
                          (n.reason = r),
                          n.initEvent(e, !1, !0),
                          s.dispatchEvent(n))
                        : (n = { promise: t, reason: r }),
                        (o = s['on' + e])
                            ? o(n)
                            : 'unhandledrejection' === e &&
                              A('Unhandled promise rejection', r);
                },
                Q = function (e, t) {
                    S.call(s, function () {
                        var r,
                            n = t.value;
                        if (
                            ee(t) &&
                            ((r = z(function () {
                                V
                                    ? F.emit('unhandledRejection', n, e)
                                    : X('unhandledrejection', e, n);
                            })),
                            (t.rejection = V || ee(t) ? 2 : 1),
                            r.error)
                        )
                            throw r.value;
                    });
                },
                ee = function (e) {
                    return 1 !== e.rejection && !e.parent;
                },
                te = function (e, t) {
                    S.call(s, function () {
                        V
                            ? F.emit('rejectionHandled', e)
                            : X('rejectionhandled', e, t.value);
                    });
                },
                re = function (e, t, r, n) {
                    return function (o) {
                        e(t, r, o, n);
                    };
                },
                ne = function (e, t, r, n) {
                    t.done ||
                        ((t.done = !0),
                        n && (t = n),
                        (t.value = r),
                        (t.state = 2),
                        J(e, t, !0));
                },
                oe = function (e, t, r, n) {
                    if (!t.done) {
                        (t.done = !0), n && (t = n);
                        try {
                            if (e === r)
                                throw U("Promise can't be resolved itself");
                            var o = Y(r);
                            o
                                ? j(function () {
                                      var n = { done: !1 };
                                      try {
                                          o.call(
                                              r,
                                              re(oe, e, n, t),
                                              re(ne, e, n, t)
                                          );
                                      } catch (r) {
                                          ne(e, n, r, t);
                                      }
                                  })
                                : ((t.value = r), (t.state = 1), J(e, t, !1));
                        } catch (r) {
                            ne(e, { done: !1 }, r, t);
                        }
                    }
                };
            G &&
                ((q = function (e) {
                    b(this, q, T), y(e), n.call(this);
                    var t = D(this);
                    try {
                        e(re(oe, this, t), re(ne, this, t));
                    } catch (e) {
                        ne(this, t, e);
                    }
                }),
                ((n = function (e) {
                    M(this, {
                        type: T,
                        done: !1,
                        notified: !1,
                        parent: !1,
                        reactions: [],
                        rejection: !1,
                        state: 0,
                        value: void 0,
                    });
                }).prototype = f(q.prototype, {
                    then: function (e, t) {
                        var r = L(this),
                            n = K(_(this, q));
                        return (
                            (n.ok = 'function' != typeof e || e),
                            (n.fail = 'function' == typeof t && t),
                            (n.domain = V ? F.domain : void 0),
                            (r.parent = !0),
                            r.reactions.push(n),
                            0 != r.state && J(this, r, !1),
                            n.promise
                        );
                    },
                    catch: function (e) {
                        return this.then(void 0, e);
                    },
                })),
                (o = function () {
                    var e = new n(),
                        t = D(e);
                    (this.promise = e),
                        (this.resolve = re(oe, e, t)),
                        (this.reject = re(ne, e, t));
                }),
                (P.f = K =
                    function (e) {
                        return e === q || e === i ? new o(e) : W(e);
                    }),
                l ||
                    'function' != typeof d ||
                    ((a = d.prototype.then),
                    p(
                        d.prototype,
                        'then',
                        function (e, t) {
                            var r = this;
                            return new q(function (e, t) {
                                a.call(r, e, t);
                            }).then(e, t);
                        },
                        { unsafe: !0 }
                    ),
                    'function' == typeof H &&
                        c(
                            { global: !0, enumerable: !0, forced: !0 },
                            {
                                fetch: function (e) {
                                    return O(q, H.apply(s, arguments));
                                },
                            }
                        ))),
                c({ global: !0, wrap: !0, forced: G }, { Promise: q }),
                m(q, T, !1, !0),
                v(T),
                (i = u(T)),
                c(
                    { target: T, stat: !0, forced: G },
                    {
                        reject: function (e) {
                            var t = K(this);
                            return t.reject.call(void 0, e), t.promise;
                        },
                    }
                ),
                c(
                    { target: T, stat: !0, forced: l || G },
                    {
                        resolve: function (e) {
                            return O(l && this === i ? q : this, e);
                        },
                    }
                ),
                c(
                    { target: T, stat: !0, forced: Z },
                    {
                        all: function (e) {
                            var t = this,
                                r = K(t),
                                n = r.resolve,
                                o = r.reject,
                                i = z(function () {
                                    var r = y(t.resolve),
                                        i = [],
                                        a = 0,
                                        c = 1;
                                    w(e, function (e) {
                                        var l = a++,
                                            s = !1;
                                        i.push(void 0),
                                            c++,
                                            r.call(t, e).then(function (e) {
                                                s ||
                                                    ((s = !0),
                                                    (i[l] = e),
                                                    --c || n(i));
                                            }, o);
                                    }),
                                        --c || n(i);
                                });
                            return i.error && o(i.value), r.promise;
                        },
                        race: function (e) {
                            var t = this,
                                r = K(t),
                                n = r.reject,
                                o = z(function () {
                                    var o = y(t.resolve);
                                    w(e, function (e) {
                                        o.call(t, e).then(r.resolve, n);
                                    });
                                });
                            return o.error && n(o.value), r.promise;
                        },
                    }
                );
        },
        function (e, t, r) {
            var n,
                o,
                i,
                a = r(3),
                c = r(1),
                l = r(34),
                s = r(40),
                u = r(117),
                d = r(73),
                p = r(178),
                f = a.location,
                m = a.setImmediate,
                v = a.clearImmediate,
                h = a.process,
                y = a.MessageChannel,
                b = a.Dispatch,
                g = 0,
                k = {},
                w = function (e) {
                    if (k.hasOwnProperty(e)) {
                        var t = k[e];
                        delete k[e], t();
                    }
                },
                x = function (e) {
                    return function () {
                        w(e);
                    };
                },
                _ = function (e) {
                    w(e.data);
                },
                S = function (e) {
                    a.postMessage(e + '', f.protocol + '//' + f.host);
                };
            (m && v) ||
                ((m = function (e) {
                    for (var t = [], r = 1; arguments.length > r; )
                        t.push(arguments[r++]);
                    return (
                        (k[++g] = function () {
                            ('function' == typeof e ? e : Function(e)).apply(
                                void 0,
                                t
                            );
                        }),
                        n(g),
                        g
                    );
                }),
                (v = function (e) {
                    delete k[e];
                }),
                'process' == l(h)
                    ? (n = function (e) {
                          h.nextTick(x(e));
                      })
                    : b && b.now
                    ? (n = function (e) {
                          b.now(x(e));
                      })
                    : y && !p
                    ? ((i = (o = new y()).port2),
                      (o.port1.onmessage = _),
                      (n = s(i.postMessage, i, 1)))
                    : !a.addEventListener ||
                      'function' != typeof postMessage ||
                      a.importScripts ||
                      c(S) ||
                      'file:' === f.protocol
                    ? (n =
                          'onreadystatechange' in d('script')
                              ? function (e) {
                                    u.appendChild(
                                        d('script')
                                    ).onreadystatechange = function () {
                                        u.removeChild(this), w(e);
                                    };
                                }
                              : function (e) {
                                    setTimeout(x(e), 0);
                                })
                    : ((n = S), a.addEventListener('message', _, !1))),
                (e.exports = { set: m, clear: v });
        },
        function (e, t, r) {
            var n = r(168);
            e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(n);
        },
        function (e, t, r) {
            'use strict';
            var n = r(50),
                o = function (e) {
                    var t, r;
                    (this.promise = new e(function (e, n) {
                        if (void 0 !== t || void 0 !== r)
                            throw TypeError('Bad Promise constructor');
                        (t = e), (r = n);
                    })),
                        (this.resolve = n(t)),
                        (this.reject = n(r));
                };
            e.exports.f = function (e) {
                return new o(e);
            };
        },
        function (e, t, r) {
            'use strict';
            var n,
                o = function () {
                    return (
                        void 0 === n &&
                            (n = Boolean(
                                window &&
                                    document &&
                                    document.all &&
                                    !window.atob
                            )),
                        n
                    );
                },
                i = (function () {
                    var e = {};
                    return function (t) {
                        if (void 0 === e[t]) {
                            var r = document.querySelector(t);
                            if (
                                window.HTMLIFrameElement &&
                                r instanceof window.HTMLIFrameElement
                            )
                                try {
                                    r = r.contentDocument.head;
                                } catch (e) {
                                    r = null;
                                }
                            e[t] = r;
                        }
                        return e[t];
                    };
                })(),
                a = [];
            function c(e) {
                for (var t = -1, r = 0; r < a.length; r++)
                    if (a[r].identifier === e) {
                        t = r;
                        break;
                    }
                return t;
            }
            function l(e, t) {
                for (var r = {}, n = [], o = 0; o < e.length; o++) {
                    var i = e[o],
                        l = t.base ? i[0] + t.base : i[0],
                        s = r[l] || 0,
                        u = ''.concat(l, ' ').concat(s);
                    r[l] = s + 1;
                    var d = c(u),
                        p = { css: i[1], media: i[2], sourceMap: i[3] };
                    -1 !== d
                        ? (a[d].references++, a[d].updater(p))
                        : a.push({
                              identifier: u,
                              updater: h(p, t),
                              references: 1,
                          }),
                        n.push(u);
                }
                return n;
            }
            function s(e) {
                var t = document.createElement('style'),
                    n = e.attributes || {};
                if (void 0 === n.nonce) {
                    var o = r.nc;
                    o && (n.nonce = o);
                }
                if (
                    (Object.keys(n).forEach(function (e) {
                        t.setAttribute(e, n[e]);
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
                d =
                    ((u = []),
                    function (e, t) {
                        return (u[e] = t), u.filter(Boolean).join('\n');
                    });
            function p(e, t, r, n) {
                var o = r
                    ? ''
                    : n.media
                    ? '@media '.concat(n.media, ' {').concat(n.css, '}')
                    : n.css;
                if (e.styleSheet) e.styleSheet.cssText = d(t, o);
                else {
                    var i = document.createTextNode(o),
                        a = e.childNodes;
                    a[t] && e.removeChild(a[t]),
                        a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
                }
            }
            function f(e, t, r) {
                var n = r.css,
                    o = r.media,
                    i = r.sourceMap;
                if (
                    (o
                        ? e.setAttribute('media', o)
                        : e.removeAttribute('media'),
                    i &&
                        btoa &&
                        (n +=
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
                    e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n));
                }
            }
            var m = null,
                v = 0;
            function h(e, t) {
                var r, n, o;
                if (t.singleton) {
                    var i = v++;
                    (r = m || (m = s(t))),
                        (n = p.bind(null, r, i, !1)),
                        (o = p.bind(null, r, i, !0));
                } else
                    (r = s(t)),
                        (n = f.bind(null, r, t)),
                        (o = function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(r);
                        });
                return (
                    n(e),
                    function (t) {
                        if (t) {
                            if (
                                t.css === e.css &&
                                t.media === e.media &&
                                t.sourceMap === e.sourceMap
                            )
                                return;
                            n((e = t));
                        } else o();
                    }
                );
            }
            e.exports = function (e, t) {
                (t = t || {}).singleton ||
                    'boolean' == typeof t.singleton ||
                    (t.singleton = o());
                var r = l((e = e || []), t);
                return function (e) {
                    if (
                        ((e = e || []),
                        '[object Array]' === Object.prototype.toString.call(e))
                    ) {
                        for (var n = 0; n < r.length; n++) {
                            var o = c(r[n]);
                            a[o].references--;
                        }
                        for (var i = l(e, t), s = 0; s < r.length; s++) {
                            var u = c(r[s]);
                            0 === a[u].references &&
                                (a[u].updater(), a.splice(u, 1));
                        }
                        r = i;
                    }
                };
            };
        },
        function (e, t, r) {
            'use strict';
            e.exports = function (e) {
                var t = [];
                return (
                    (t.toString = function () {
                        return this.map(function (t) {
                            var r = (function (e, t) {
                                var r = e[1] || '',
                                    n = e[3];
                                if (!n) return r;
                                if (t && 'function' == typeof btoa) {
                                    var o =
                                            ((a = n),
                                            (c = btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON.stringify(a)
                                                    )
                                                )
                                            )),
                                            (l =
                                                'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                                                    c
                                                )),
                                            '/*# '.concat(l, ' */')),
                                        i = n.sources.map(function (e) {
                                            return '/*# sourceURL='
                                                .concat(n.sourceRoot || '')
                                                .concat(e, ' */');
                                        });
                                    return [r].concat(i).concat([o]).join('\n');
                                }
                                var a, c, l;
                                return [r].join('\n');
                            })(t, e);
                            return t[2]
                                ? '@media '.concat(t[2], ' {').concat(r, '}')
                                : r;
                        }).join('');
                    }),
                    (t.i = function (e, r, n) {
                        'string' == typeof e && (e = [[null, e, '']]);
                        var o = {};
                        if (n)
                            for (var i = 0; i < this.length; i++) {
                                var a = this[i][0];
                                null != a && (o[a] = !0);
                            }
                        for (var c = 0; c < e.length; c++) {
                            var l = [].concat(e[c]);
                            (n && o[l[0]]) ||
                                (r &&
                                    (l[2]
                                        ? (l[2] = ''
                                              .concat(r, ' and ')
                                              .concat(l[2]))
                                        : (l[2] = r)),
                                t.push(l));
                        }
                    }),
                    t
                );
            };
        },
        function (e, t, r) {
            var n = r(1),
                o = r(0),
                i = r(32),
                a = o('iterator');
            e.exports = !n(function () {
                var e = new URL('b?a=1&b=2&c=3', 'http://a'),
                    t = e.searchParams,
                    r = '';
                return (
                    (e.pathname = 'c%20d'),
                    t.forEach(function (e, n) {
                        t.delete('b'), (r += n + e);
                    }),
                    (i && !e.toJSON) ||
                        !t.sort ||
                        'http://a/c%20d?a=1&c=3' !== e.href ||
                        '3' !== t.get('c') ||
                        'a=1' !== String(new URLSearchParams('?a=1')) ||
                        !t[a] ||
                        'a' !== new URL('https://a@b').username ||
                        'b' !==
                            new URLSearchParams(new URLSearchParams('a=b')).get(
                                'a'
                            ) ||
                        'xn--e1aybc' !== new URL('http://тест').host ||
                        '#%D0%B1' !== new URL('http://a#б').hash ||
                        'a1c3' !== r ||
                        'x' !== new URL('http://x', void 0).host
                );
            });
        },
        ,
        function (e, t, r) {
            'use strict';
            var n = r(185);
            function o() {}
            function i() {}
            (i.resetWarningCache = o),
                (e.exports = function () {
                    function e(e, t, r, o, i, a) {
                        if (a !== n) {
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
                    var r = {
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
                        resetWarningCache: o,
                    };
                    return (r.PropTypes = r), r;
                });
        },
        function (e, t, r) {
            'use strict';
            e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        },
        function (e, t, r) {
            'use strict';
            var n,
                o = r(2),
                i = r(31).f,
                a = r(24),
                c = r(126),
                l = r(27),
                s = r(127),
                u = r(32),
                d = ''.endsWith,
                p = Math.min,
                f = s('endsWith');
            o(
                {
                    target: 'String',
                    proto: !0,
                    forced:
                        !!(
                            u ||
                            f ||
                            ((n = i(String.prototype, 'endsWith')),
                            !n || n.writable)
                        ) && !f,
                },
                {
                    endsWith: function (e) {
                        var t = String(l(this));
                        c(e);
                        var r = arguments.length > 1 ? arguments[1] : void 0,
                            n = a(t.length),
                            o = void 0 === r ? n : p(a(r), n),
                            i = String(e);
                        return d
                            ? d.call(t, i, o)
                            : t.slice(o - i.length, o) === i;
                    },
                }
            );
        },
        function (e, t, r) {
            'use strict';
            var n = r(108),
                o = r(9),
                i = r(24),
                a = r(27),
                c = r(124),
                l = r(109);
            n('match', 1, function (e, t, r) {
                return [
                    function (t) {
                        var r = a(this),
                            n = null == t ? void 0 : t[e];
                        return void 0 !== n
                            ? n.call(t, r)
                            : new RegExp(t)[e](String(r));
                    },
                    function (e) {
                        var n = r(t, e, this);
                        if (n.done) return n.value;
                        var a = o(e),
                            s = String(this);
                        if (!a.global) return l(a, s);
                        var u = a.unicode;
                        a.lastIndex = 0;
                        for (var d, p = [], f = 0; null !== (d = l(a, s)); ) {
                            var m = String(d[0]);
                            (p[f] = m),
                                '' === m &&
                                    (a.lastIndex = c(s, i(a.lastIndex), u)),
                                f++;
                        }
                        return 0 === f ? null : p;
                    },
                ];
            });
        },
        function (e, t, r) {
            var n = r(3);
            e.exports = n.Promise;
        },
        function (e, t, r) {
            var n,
                o,
                i,
                a,
                c,
                l,
                s,
                u,
                d = r(3),
                p = r(31).f,
                f = r(34),
                m = r(177).set,
                v = r(178),
                h = d.MutationObserver || d.WebKitMutationObserver,
                y = d.process,
                b = d.Promise,
                g = 'process' == f(y),
                k = p(d, 'queueMicrotask'),
                w = k && k.value;
            w ||
                ((n = function () {
                    var e, t;
                    for (g && (e = y.domain) && e.exit(); o; ) {
                        (t = o.fn), (o = o.next);
                        try {
                            t();
                        } catch (e) {
                            throw (o ? a() : (i = void 0), e);
                        }
                    }
                    (i = void 0), e && e.enter();
                }),
                g
                    ? (a = function () {
                          y.nextTick(n);
                      })
                    : h && !v
                    ? ((c = !0),
                      (l = document.createTextNode('')),
                      new h(n).observe(l, { characterData: !0 }),
                      (a = function () {
                          l.data = c = !c;
                      }))
                    : b && b.resolve
                    ? ((s = b.resolve(void 0)),
                      (u = s.then),
                      (a = function () {
                          u.call(s, n);
                      }))
                    : (a = function () {
                          m.call(d, n);
                      })),
                (e.exports =
                    w ||
                    function (e) {
                        var t = { fn: e, next: void 0 };
                        i && (i.next = t), o || ((o = t), a()), (i = t);
                    });
        },
        function (e, t, r) {
            var n = r(9),
                o = r(4),
                i = r(179);
            e.exports = function (e, t) {
                if ((n(e), o(t) && t.constructor === e)) return t;
                var r = i.f(e);
                return (0, r.resolve)(t), r.promise;
            };
        },
        function (e, t, r) {
            var n = r(3);
            e.exports = function (e, t) {
                var r = n.console;
                r &&
                    r.error &&
                    (1 === arguments.length ? r.error(e) : r.error(e, t));
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
        function (e, t, r) {
            var n = r(180),
                o = r(194);
            'string' == typeof (o = o.__esModule ? o.default : o) &&
                (o = [[e.i, o, '']]);
            var i = {
                attributes: { 'data-context': 'klaro-styles' },
                insert: 'head',
                singleton: !1,
            };
            n(o, i);
            e.exports = o.locals || {};
        },
        function (e, t, r) {
            (t = r(181)(!1)).push([
                e.i,
                ".klaro{font-family:inherit;font-family:var(--font-family, inherit);font-size:14px;font-size:var(--font-size, 14px)}.klaro button{font-family:inherit;font-family:var(--font-family, inherit);font-size:14px;font-size:var(--font-size, 14px)}.klaro.cm-as-context-notice{height:100%;padding-bottom:12px;padding-top:12px}.klaro .cookie-modal .cm-switch-container,.klaro .context-notice .cm-switch-container,.klaro .cookie-notice .cm-switch-container{border-bottom-style:solid;border-bottom-style:var(--border-style, solid);border-bottom-width:1px;border-bottom-width:var(--border-width, 1px);border-bottom-color:#c8c8c8;border-bottom-color:var(--light2, #c8c8c8);display:block;position:relative;padding:10px;padding-left:66px;line-height:20px;vertical-align:middle;min-height:40px}.klaro .cookie-modal .cm-switch-container:last-child,.klaro .context-notice .cm-switch-container:last-child,.klaro .cookie-notice .cm-switch-container:last-child{border-bottom:0}.klaro .cookie-modal .cm-switch-container:first-child,.klaro .context-notice .cm-switch-container:first-child,.klaro .cookie-notice .cm-switch-container:first-child{margin-top:0}.klaro .cookie-modal .cm-switch-container p,.klaro .context-notice .cm-switch-container p,.klaro .cookie-notice .cm-switch-container p{margin-top:0}.klaro .cookie-modal .cm-switch,.klaro .context-notice .cm-switch,.klaro .cookie-notice .cm-switch{position:relative;display:inline-block;width:50px;height:30px}.klaro .cookie-modal .cm-list-input:checked+.cm-list-label .slider,.klaro .context-notice .cm-list-input:checked+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input:checked+.cm-list-label .slider{background-color:#1a936f;background-color:var(--green1, #1a936f)}.klaro .cookie-modal .cm-list-input.half-checked:checked+.cm-list-label .slider,.klaro .context-notice .cm-list-input.half-checked:checked+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input.half-checked:checked+.cm-list-label .slider{background-color:#1a936f;background-color:var(--green1, #1a936f);opacity:0.6}.klaro .cookie-modal .cm-list-input.half-checked:checked+.cm-list-label .slider::before,.klaro .context-notice .cm-list-input.half-checked:checked+.cm-list-label .slider::before,.klaro .cookie-notice .cm-list-input.half-checked:checked+.cm-list-label .slider::before{transform:translateX(10px)}.klaro .cookie-modal .cm-list-input.only-required+.cm-list-label .slider,.klaro .context-notice .cm-list-input.only-required+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input.only-required+.cm-list-label .slider{background-color:#24cc9a;background-color:var(--green2, #24cc9a);opacity:0.8}.klaro .cookie-modal .cm-list-input.only-required+.cm-list-label .slider::before,.klaro .context-notice .cm-list-input.only-required+.cm-list-label .slider::before,.klaro .cookie-notice .cm-list-input.only-required+.cm-list-label .slider::before{transform:translateX(10px)}.klaro .cookie-modal .cm-list-input.required:checked+.cm-list-label .slider,.klaro .context-notice .cm-list-input.required:checked+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input.required:checked+.cm-list-label .slider{background-color:#24cc9a;background-color:var(--green2, #24cc9a);opacity:0.8;cursor:not-allowed}.klaro .cookie-modal .slider,.klaro .context-notice .slider,.klaro .cookie-notice .slider{box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19)}.klaro .cookie-modal .cm-list-input,.klaro .context-notice .cm-list-input,.klaro .cookie-notice .cm-list-input{position:absolute;top:0;left:0;opacity:0;width:50px;height:30px}.klaro .cookie-modal .cm-list-title,.klaro .context-notice .cm-list-title,.klaro .cookie-notice .cm-list-title{font-size:0.9em;font-weight:600}.klaro .cookie-modal .cm-list-description,.klaro .context-notice .cm-list-description,.klaro .cookie-notice .cm-list-description{color:#7c7c7c;color:var(--dark3, #7c7c7c);font-size:0.9em;padding-top:4px}.klaro .cookie-modal .cm-list-label .cm-switch,.klaro .context-notice .cm-list-label .cm-switch,.klaro .cookie-notice .cm-list-label .cm-switch{position:absolute;left:0}.klaro .cookie-modal .cm-list-label .slider,.klaro .context-notice .cm-list-label .slider,.klaro .cookie-notice .cm-list-label .slider{background-color:#f2f2f2;background-color:var(--white2, #f2f2f2);position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;transition:0.4s;width:50px;display:inline-block}.klaro .cookie-modal .cm-list-label .slider::before,.klaro .context-notice .cm-list-label .slider::before,.klaro .cookie-notice .cm-list-label .slider::before{background-color:#e6e6e6;background-color:var(--white3, #e6e6e6);position:absolute;content:'';height:20px;width:20px;left:5px;bottom:5px;transition:0.4s}.klaro .cookie-modal .cm-list-label .slider.round,.klaro .context-notice .cm-list-label .slider.round,.klaro .cookie-notice .cm-list-label .slider.round{border-radius:30px}.klaro .cookie-modal .cm-list-label .slider.round::before,.klaro .context-notice .cm-list-label .slider.round::before,.klaro .cookie-notice .cm-list-label .slider.round::before{border-radius:50%}.klaro .cookie-modal .cm-list-label input:focus+.slider,.klaro .context-notice .cm-list-label input:focus+.slider,.klaro .cookie-notice .cm-list-label input:focus+.slider{box-shadow-color:#48dfb2;box-shadow-color:var(--green3, #48dfb2);box-shadow:0 0 1px var(color, green3)}.klaro .cookie-modal .cm-list-label input:checked+.slider::before,.klaro .context-notice .cm-list-label input:checked+.slider::before,.klaro .cookie-notice .cm-list-label input:checked+.slider::before{transform:translateX(20px)}.klaro .cookie-modal .cm-list-input:focus+.cm-list-label .slider,.klaro .context-notice .cm-list-input:focus+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input:focus+.cm-list-label .slider{box-shadow:0 4px 6px 0 rgba(125,125,125,0.2),5px 5px 10px 0 rgba(125,125,125,0.19)}.klaro .cookie-modal .cm-list-input:checked+.cm-list-label .slider::before,.klaro .context-notice .cm-list-input:checked+.cm-list-label .slider::before,.klaro .cookie-notice .cm-list-input:checked+.cm-list-label .slider::before{transform:translateX(20px)}.klaro .cookie-modal .slider,.klaro .context-notice .slider,.klaro .cookie-notice .slider{box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19)}.klaro .cookie-modal a,.klaro .context-notice a,.klaro .cookie-notice a{color:#1a936f;color:var(--green1, #1a936f);text-decoration:none}.klaro .cookie-modal p,.klaro .cookie-modal strong,.klaro .cookie-modal h1,.klaro .cookie-modal h2,.klaro .cookie-modal ul,.klaro .cookie-modal li,.klaro .context-notice p,.klaro .context-notice strong,.klaro .context-notice h1,.klaro .context-notice h2,.klaro .context-notice ul,.klaro .context-notice li,.klaro .cookie-notice p,.klaro .cookie-notice strong,.klaro .cookie-notice h1,.klaro .cookie-notice h2,.klaro .cookie-notice ul,.klaro .cookie-notice li{color:#fafafa;color:var(--light1, #fafafa)}.klaro .cookie-modal p,.klaro .cookie-modal h1,.klaro .cookie-modal h2,.klaro .cookie-modal ul,.klaro .cookie-modal li,.klaro .context-notice p,.klaro .context-notice h1,.klaro .context-notice h2,.klaro .context-notice ul,.klaro .context-notice li,.klaro .cookie-notice p,.klaro .cookie-notice h1,.klaro .cookie-notice h2,.klaro .cookie-notice ul,.klaro .cookie-notice li{display:block;text-align:left;margin:0;padding:0;margin-top:0.7em}.klaro .cookie-modal h1,.klaro .cookie-modal h2,.klaro .cookie-modal h3,.klaro .cookie-modal h4,.klaro .cookie-modal h5,.klaro .cookie-modal h6,.klaro .context-notice h1,.klaro .context-notice h2,.klaro .context-notice h3,.klaro .context-notice h4,.klaro .context-notice h5,.klaro .context-notice h6,.klaro .cookie-notice h1,.klaro .cookie-notice h2,.klaro .cookie-notice h3,.klaro .cookie-notice h4,.klaro .cookie-notice h5,.klaro .cookie-notice h6{font-family:inherit;font-family:var(--title-font-family, inherit)}.klaro .cookie-modal .cm-link,.klaro .context-notice .cm-link,.klaro .cookie-notice .cm-link{margin-right:0.5em;vertical-align:middle}.klaro .cookie-modal .cm-btn,.klaro .context-notice .cm-btn,.klaro .cookie-notice .cm-btn{color:#fff;color:var(--button-text-color, #fff);background-color:#5c5c5c;background-color:var(--dark2, #5c5c5c);border-radius:4px;border-radius:var(--border-radius, 4px);padding:6px 10px;margin-right:.5em;border-style:none;padding:0.4em;font-size:1em;cursor:pointer}.klaro .cookie-modal .cm-btn:disabled,.klaro .context-notice .cm-btn:disabled,.klaro .cookie-notice .cm-btn:disabled{opacity:0.5}.klaro .cookie-modal .cm-btn.cm-btn-close,.klaro .context-notice .cm-btn.cm-btn-close,.klaro .cookie-notice .cm-btn.cm-btn-close{background-color:#c8c8c8;background-color:var(--light2, #c8c8c8)}.klaro .cookie-modal .cm-btn.cm-btn-success,.klaro .context-notice .cm-btn.cm-btn-success,.klaro .cookie-notice .cm-btn.cm-btn-success{background-color:#1a936f;background-color:var(--green1, #1a936f)}.klaro .cookie-modal .cm-btn.cm-btn-success-var,.klaro .context-notice .cm-btn.cm-btn-success-var,.klaro .cookie-notice .cm-btn.cm-btn-success-var{background-color:#24cc9a;background-color:var(--green2, #24cc9a)}.klaro .cookie-modal .cm-btn.cm-btn-info,.klaro .context-notice .cm-btn.cm-btn-info,.klaro .cookie-notice .cm-btn.cm-btn-info{background-color:#2581c4;background-color:var(--blue1, #2581c4)}.klaro .context-notice{border-radius:4px;border-radius:var(--border-radius, 4px);border-style:solid;border-style:var(--border-style, solid);border-width:1px;border-width:var(--border-width, 1px);border-color:#c8c8c8;border-color:var(--light2, #c8c8c8);background-color:#fafafa;background-color:var(--light1, #fafafa);display:flex;flex-direction:column;flex-wrap:wrap;align-items:center;justify-content:center;padding:12px;height:100%}.klaro .context-notice.cm-dark{background-color:#333;background-color:var(--dark1, #333);border-color:#5c5c5c;border-color:var(--dark2, #5c5c5c)}.klaro .context-notice.cm-dark p{color:#fafafa;color:var(--light1, #fafafa)}.klaro .context-notice.cm-dark p a{color:#459cdc;color:var(--blue2, #459cdc)}.klaro .context-notice p{color:#333;color:var(--dark1, #333);flex-grow:0;text-align:center;padding-top:0;margin-top:0}.klaro .context-notice p a{color:#24cc9a;color:var(--green2, #24cc9a)}.klaro .context-notice p.cm-buttons{margin-top:12px}.klaro .cookie-modal{width:100%;height:100%;position:fixed;overflow:hidden;left:0;top:0;z-index:1000}.klaro .cookie-modal.cm-embedded{position:relative;height:inherit;width:inherit;left:inherit;right:inherit;z-index:0}.klaro .cookie-modal.cm-embedded .cm-modal.cm-klaro{position:relative;transform:none}.klaro .cookie-modal .cm-bg{background:rgba(0,0,0,0.5);height:100%;width:100%;position:fixed;top:0;left:0}.klaro .cookie-modal .cm-modal.cm-klaro{background-color:#333;background-color:var(--dark1, #333);color:#fafafa;color:var(--light1, #fafafa);z-index:1001;box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19);width:100%;max-height:98%;top:50%;transform:translateY(-50%);position:fixed;overflow:auto}@media (min-width: 660px){.klaro .cookie-modal .cm-modal.cm-klaro{border-radius:4px;border-radius:var(--border-radius, 4px);position:relative;margin:0 auto;max-width:640px;height:auto;width:auto}}.klaro .cookie-modal .cm-modal .hide{border-style:none;background:none;cursor:pointer;position:absolute;top:20px;right:20px;z-index:1}.klaro .cookie-modal .cm-modal .hide svg{stroke:#fafafa;stroke:var(--light1, #fafafa)}.klaro .cookie-modal .cm-modal .cm-footer{border-top-color:#5c5c5c;border-top-color:var(--dark2, #5c5c5c);border-top-width:1px;border-top-width:var(--border-width, 1px);border-top-style:solid;border-top-style:var(--border-style, solid);padding:1em}.klaro .cookie-modal .cm-modal .cm-footer-buttons{display:flex;flex-flow:row;justify-content:space-between}.klaro .cookie-modal .cm-modal .cm-footer .cm-powered-by{font-size:0.8em;padding-top:4px;text-align:right;padding-right:8px}.klaro .cookie-modal .cm-modal .cm-footer .cm-powered-by a{color:#5c5c5c;color:var(--dark2, #5c5c5c)}.klaro .cookie-modal .cm-modal .cm-header{border-bottom-width:1px;border-bottom-width:var(--border-width, 1px);border-bottom-style:solid;border-bottom-style:var(--border-style, solid);border-bottom-color:#5c5c5c;border-bottom-color:var(--dark2, #5c5c5c);padding:1em;padding-right:24px}.klaro .cookie-modal .cm-modal .cm-header h1{margin:0;font-size:2em;display:block}.klaro .cookie-modal .cm-modal .cm-header h1.title{padding-right:20px}.klaro .cookie-modal .cm-modal .cm-body{padding:1em}.klaro .cookie-modal .cm-modal .cm-body ul{display:block}.klaro .cookie-modal .cm-modal .cm-body span{display:inline-block;width:auto}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes{padding:0;margin:0}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose .cm-services .cm-caret,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose .cm-services .cm-caret{color:#a0a0a0;color:var(--light3, #a0a0a0)}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose .cm-services .cm-content,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose .cm-services .cm-content{margin-left:-40px;display:none}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose .cm-services .cm-content.expanded,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose .cm-services .cm-content.expanded{margin-top:10px;display:block}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose{position:relative;line-height:20px;vertical-align:middle;padding-left:60px;min-height:40px}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose:first-child{margin-top:0}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose p{margin-top:0}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service p.purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose p.purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service p.purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose p.purposes{color:#a0a0a0;color:var(--light3, #a0a0a0);font-size:0.8em}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service.cm-toggle-all,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose.cm-toggle-all,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service.cm-toggle-all,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose.cm-toggle-all{border-top-width:1px;border-top-width:var(--border-width, 1px);border-top-style:solid;border-top-style:var(--border-style, solid);border-top-color:#5c5c5c;border-top-color:var(--dark2, #5c5c5c);padding-top:1em}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service span.cm-list-title,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose span.cm-list-title,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service span.cm-list-title,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose span.cm-list-title{font-weight:600}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service span.cm-required,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose span.cm-required,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service span.cm-required,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose span.cm-required{color:#5c5c5c;color:var(--dark2, #5c5c5c);padding-left:0.2em;font-size:0.8em}.klaro .cookie-notice:not(.cookie-modal-notice){background-color:#333;background-color:var(--dark1, #333);z-index:999;position:fixed;width:100%;bottom:0;right:0}@media (min-width: 1024px){.klaro .cookie-notice:not(.cookie-modal-notice){border-radius:4px;border-radius:var(--border-radius, 4px);position:fixed;position:var(--notice-position, fixed);right:20px;right:var(--notice-right, 20px);left:auto;left:var(--notice-left, auto);bottom:20px;bottom:var(--notice-bottom, 20px);top:auto;top:var(--notice-top, auto);max-width:400px;max-width:var(--notice-max-width, 400px);box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19)}}@media (max-width: 1023px){.klaro .cookie-notice:not(.cookie-modal-notice){border-style:none;border-radius:0}}.klaro .cookie-notice:not(.cookie-modal-notice).cn-embedded{position:relative;height:inherit;width:inherit;left:inherit;right:inherit;bottom:inherit;z-index:0}.klaro .cookie-notice:not(.cookie-modal-notice).cn-embedded .cn-body{padding-top:0.5em}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body{margin-bottom:0;margin-right:0;bottom:0;padding:1em;padding-top:0}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body p{margin-bottom:0.5em}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body p.cn-changes{text-decoration:underline}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-learn-more{display:inline-block;flex-grow:1}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons{display:inline-block;margin-top:-0.5em}@media (max-width: 384px){.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons{width:100%}}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons button.cm-btn{margin-top:0.5em}@media (max-width: 384px){.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons button.cm-btn{width:calc(50% - .5em)}}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-ok{margin-top:-0.5em;display:flex;flex-flow:row;flex-wrap:wrap;justify-content:right;align-items:baseline}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-ok a,.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-ok div{margin-top:0.5em}.klaro .cookie-modal-notice{background-color:#333;background-color:var(--dark1, #333);color:#fafafa;color:var(--light1, #fafafa);z-index:1001;box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19);width:100%;max-height:98%;top:50%;transform:translateY(-50%);position:fixed;overflow:auto;padding:1em;padding-top:0.2em}@media (min-width: 400px){.klaro .cookie-modal-notice{border-radius:4px;border-radius:var(--border-radius, 4px);position:relative;margin:0 auto;max-width:400px;height:auto;width:auto}}.klaro .cookie-modal-notice .cn-ok{display:flex;flex-flow:row;justify-content:space-between;align-items:center;margin-top:1em}.klaro .cookie-notice-hidden{display:none !important}\n",
                '',
            ]),
                (e.exports = t);
        },
        function (e, t, r) {
            'use strict';
            var n = r(108),
                o = r(9),
                i = r(27),
                a = r(196),
                c = r(109);
            n('search', 1, function (e, t, r) {
                return [
                    function (t) {
                        var r = i(this),
                            n = null == t ? void 0 : t[e];
                        return void 0 !== n
                            ? n.call(t, r)
                            : new RegExp(t)[e](String(r));
                    },
                    function (e) {
                        var n = r(t, e, this);
                        if (n.done) return n.value;
                        var i = o(e),
                            l = String(this),
                            s = i.lastIndex;
                        a(s, 0) || (i.lastIndex = 0);
                        var u = c(i, l);
                        return (
                            a(i.lastIndex, s) || (i.lastIndex = s),
                            null === u ? -1 : u.index
                        );
                    },
                ];
            });
        },
        function (e, t) {
            e.exports =
                Object.is ||
                function (e, t) {
                    return e === t
                        ? 0 !== e || 1 / e == 1 / t
                        : e != e && t != t;
                };
        },
        function (e, t, r) {
            'use strict';
            r(13);
            var n,
                o = r(2),
                i = r(8),
                a = r(182),
                c = r(3),
                l = r(116),
                s = r(22),
                u = r(66),
                d = r(5),
                p = r(175),
                f = r(120),
                m = r(97).codeAt,
                v = r(198),
                h = r(37),
                y = r(199),
                b = r(28),
                g = c.URL,
                k = y.URLSearchParams,
                w = y.getState,
                x = b.set,
                _ = b.getterFor('URL'),
                S = Math.floor,
                j = Math.pow,
                O = /[A-Za-z]/,
                A = /[\d+-.A-Za-z]/,
                P = /\d/,
                z = /^(0x|0X)/,
                C = /^[0-7]+$/,
                E = /^\d+$/,
                N = /^[\dA-Fa-f]+$/,
                R = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
                I = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
                T = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
                D = /[\u0009\u000A\u000D]/g,
                M = function (e, t) {
                    var r, n, o;
                    if ('[' == t.charAt(0)) {
                        if (']' != t.charAt(t.length - 1))
                            return 'Invalid host';
                        if (!(r = q(t.slice(1, -1)))) return 'Invalid host';
                        e.host = r;
                    } else if ($(e)) {
                        if (((t = v(t)), R.test(t))) return 'Invalid host';
                        if (null === (r = L(t))) return 'Invalid host';
                        e.host = r;
                    } else {
                        if (I.test(t)) return 'Invalid host';
                        for (r = '', n = f(t), o = 0; o < n.length; o++)
                            r += W(n[o], B);
                        e.host = r;
                    }
                },
                L = function (e) {
                    var t,
                        r,
                        n,
                        o,
                        i,
                        a,
                        c,
                        l = e.split('.');
                    if (
                        (l.length && '' == l[l.length - 1] && l.pop(),
                        (t = l.length) > 4)
                    )
                        return e;
                    for (r = [], n = 0; n < t; n++) {
                        if ('' == (o = l[n])) return e;
                        if (
                            ((i = 10),
                            o.length > 1 &&
                                '0' == o.charAt(0) &&
                                ((i = z.test(o) ? 16 : 8),
                                (o = o.slice(8 == i ? 1 : 2))),
                            '' === o)
                        )
                            a = 0;
                        else {
                            if (!(10 == i ? E : 8 == i ? C : N).test(o))
                                return e;
                            a = parseInt(o, i);
                        }
                        r.push(a);
                    }
                    for (n = 0; n < t; n++)
                        if (((a = r[n]), n == t - 1)) {
                            if (a >= j(256, 5 - t)) return null;
                        } else if (a > 255) return null;
                    for (c = r.pop(), n = 0; n < r.length; n++)
                        c += r[n] * j(256, 3 - n);
                    return c;
                },
                q = function (e) {
                    var t,
                        r,
                        n,
                        o,
                        i,
                        a,
                        c,
                        l = [0, 0, 0, 0, 0, 0, 0, 0],
                        s = 0,
                        u = null,
                        d = 0,
                        p = function () {
                            return e.charAt(d);
                        };
                    if (':' == p()) {
                        if (':' != e.charAt(1)) return;
                        (d += 2), (u = ++s);
                    }
                    for (; p(); ) {
                        if (8 == s) return;
                        if (':' != p()) {
                            for (t = r = 0; r < 4 && N.test(p()); )
                                (t = 16 * t + parseInt(p(), 16)), d++, r++;
                            if ('.' == p()) {
                                if (0 == r) return;
                                if (((d -= r), s > 6)) return;
                                for (n = 0; p(); ) {
                                    if (((o = null), n > 0)) {
                                        if (!('.' == p() && n < 4)) return;
                                        d++;
                                    }
                                    if (!P.test(p())) return;
                                    for (; P.test(p()); ) {
                                        if (
                                            ((i = parseInt(p(), 10)),
                                            null === o)
                                        )
                                            o = i;
                                        else {
                                            if (0 == o) return;
                                            o = 10 * o + i;
                                        }
                                        if (o > 255) return;
                                        d++;
                                    }
                                    (l[s] = 256 * l[s] + o),
                                        (2 != ++n && 4 != n) || s++;
                                }
                                if (4 != n) return;
                                break;
                            }
                            if (':' == p()) {
                                if ((d++, !p())) return;
                            } else if (p()) return;
                            l[s++] = t;
                        } else {
                            if (null !== u) return;
                            d++, (u = ++s);
                        }
                    }
                    if (null !== u)
                        for (a = s - u, s = 7; 0 != s && a > 0; )
                            (c = l[s]),
                                (l[s--] = l[u + a - 1]),
                                (l[u + --a] = c);
                    else if (8 != s) return;
                    return l;
                },
                U = function (e) {
                    var t, r, n, o;
                    if ('number' == typeof e) {
                        for (t = [], r = 0; r < 4; r++)
                            t.unshift(e % 256), (e = S(e / 256));
                        return t.join('.');
                    }
                    if ('object' == typeof e) {
                        for (
                            t = '',
                                n = (function (e) {
                                    for (
                                        var t = null,
                                            r = 1,
                                            n = null,
                                            o = 0,
                                            i = 0;
                                        i < 8;
                                        i++
                                    )
                                        0 !== e[i]
                                            ? (o > r && ((t = n), (r = o)),
                                              (n = null),
                                              (o = 0))
                                            : (null === n && (n = i), ++o);
                                    return o > r && ((t = n), (r = o)), t;
                                })(e),
                                r = 0;
                            r < 8;
                            r++
                        )
                            (o && 0 === e[r]) ||
                                (o && (o = !1),
                                n === r
                                    ? ((t += r ? ':' : '::'), (o = !0))
                                    : ((t += e[r].toString(16)),
                                      r < 7 && (t += ':')));
                        return '[' + t + ']';
                    }
                    return e;
                },
                B = {},
                F = p({}, B, { ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1 }),
                H = p({}, F, { '#': 1, '?': 1, '{': 1, '}': 1 }),
                K = p({}, H, {
                    '/': 1,
                    ':': 1,
                    ';': 1,
                    '=': 1,
                    '@': 1,
                    '[': 1,
                    '\\': 1,
                    ']': 1,
                    '^': 1,
                    '|': 1,
                }),
                W = function (e, t) {
                    var r = m(e, 0);
                    return r > 32 && r < 127 && !d(t, e)
                        ? e
                        : encodeURIComponent(e);
                },
                V = {
                    ftp: 21,
                    file: null,
                    http: 80,
                    https: 443,
                    ws: 80,
                    wss: 443,
                },
                $ = function (e) {
                    return d(V, e.scheme);
                },
                G = function (e) {
                    return '' != e.username || '' != e.password;
                },
                Z = function (e) {
                    return !e.host || e.cannotBeABaseURL || 'file' == e.scheme;
                },
                Y = function (e, t) {
                    var r;
                    return (
                        2 == e.length &&
                        O.test(e.charAt(0)) &&
                        (':' == (r = e.charAt(1)) || (!t && '|' == r))
                    );
                },
                J = function (e) {
                    var t;
                    return (
                        e.length > 1 &&
                        Y(e.slice(0, 2)) &&
                        (2 == e.length ||
                            '/' === (t = e.charAt(2)) ||
                            '\\' === t ||
                            '?' === t ||
                            '#' === t)
                    );
                },
                X = function (e) {
                    var t = e.path,
                        r = t.length;
                    !r ||
                        ('file' == e.scheme && 1 == r && Y(t[0], !0)) ||
                        t.pop();
                },
                Q = function (e) {
                    return '.' === e || '%2e' === e.toLowerCase();
                },
                ee = {},
                te = {},
                re = {},
                ne = {},
                oe = {},
                ie = {},
                ae = {},
                ce = {},
                le = {},
                se = {},
                ue = {},
                de = {},
                pe = {},
                fe = {},
                me = {},
                ve = {},
                he = {},
                ye = {},
                be = {},
                ge = {},
                ke = {},
                we = function (e, t, r, o) {
                    var i,
                        a,
                        c,
                        l,
                        s,
                        u = r || ee,
                        p = 0,
                        m = '',
                        v = !1,
                        h = !1,
                        y = !1;
                    for (
                        r ||
                            ((e.scheme = ''),
                            (e.username = ''),
                            (e.password = ''),
                            (e.host = null),
                            (e.port = null),
                            (e.path = []),
                            (e.query = null),
                            (e.fragment = null),
                            (e.cannotBeABaseURL = !1),
                            (t = t.replace(T, ''))),
                            t = t.replace(D, ''),
                            i = f(t);
                        p <= i.length;

                    ) {
                        switch (((a = i[p]), u)) {
                            case ee:
                                if (!a || !O.test(a)) {
                                    if (r) return 'Invalid scheme';
                                    u = re;
                                    continue;
                                }
                                (m += a.toLowerCase()), (u = te);
                                break;
                            case te:
                                if (
                                    a &&
                                    (A.test(a) ||
                                        '+' == a ||
                                        '-' == a ||
                                        '.' == a)
                                )
                                    m += a.toLowerCase();
                                else {
                                    if (':' != a) {
                                        if (r) return 'Invalid scheme';
                                        (m = ''), (u = re), (p = 0);
                                        continue;
                                    }
                                    if (
                                        r &&
                                        ($(e) != d(V, m) ||
                                            ('file' == m &&
                                                (G(e) || null !== e.port)) ||
                                            ('file' == e.scheme && !e.host))
                                    )
                                        return;
                                    if (((e.scheme = m), r))
                                        return void (
                                            $(e) &&
                                            V[e.scheme] == e.port &&
                                            (e.port = null)
                                        );
                                    (m = ''),
                                        'file' == e.scheme
                                            ? (u = fe)
                                            : $(e) && o && o.scheme == e.scheme
                                            ? (u = ne)
                                            : $(e)
                                            ? (u = ce)
                                            : '/' == i[p + 1]
                                            ? ((u = oe), p++)
                                            : ((e.cannotBeABaseURL = !0),
                                              e.path.push(''),
                                              (u = be));
                                }
                                break;
                            case re:
                                if (!o || (o.cannotBeABaseURL && '#' != a))
                                    return 'Invalid scheme';
                                if (o.cannotBeABaseURL && '#' == a) {
                                    (e.scheme = o.scheme),
                                        (e.path = o.path.slice()),
                                        (e.query = o.query),
                                        (e.fragment = ''),
                                        (e.cannotBeABaseURL = !0),
                                        (u = ke);
                                    break;
                                }
                                u = 'file' == o.scheme ? fe : ie;
                                continue;
                            case ne:
                                if ('/' != a || '/' != i[p + 1]) {
                                    u = ie;
                                    continue;
                                }
                                (u = le), p++;
                                break;
                            case oe:
                                if ('/' == a) {
                                    u = se;
                                    break;
                                }
                                u = ye;
                                continue;
                            case ie:
                                if (((e.scheme = o.scheme), a == n))
                                    (e.username = o.username),
                                        (e.password = o.password),
                                        (e.host = o.host),
                                        (e.port = o.port),
                                        (e.path = o.path.slice()),
                                        (e.query = o.query);
                                else if ('/' == a || ('\\' == a && $(e)))
                                    u = ae;
                                else if ('?' == a)
                                    (e.username = o.username),
                                        (e.password = o.password),
                                        (e.host = o.host),
                                        (e.port = o.port),
                                        (e.path = o.path.slice()),
                                        (e.query = ''),
                                        (u = ge);
                                else {
                                    if ('#' != a) {
                                        (e.username = o.username),
                                            (e.password = o.password),
                                            (e.host = o.host),
                                            (e.port = o.port),
                                            (e.path = o.path.slice()),
                                            e.path.pop(),
                                            (u = ye);
                                        continue;
                                    }
                                    (e.username = o.username),
                                        (e.password = o.password),
                                        (e.host = o.host),
                                        (e.port = o.port),
                                        (e.path = o.path.slice()),
                                        (e.query = o.query),
                                        (e.fragment = ''),
                                        (u = ke);
                                }
                                break;
                            case ae:
                                if (!$(e) || ('/' != a && '\\' != a)) {
                                    if ('/' != a) {
                                        (e.username = o.username),
                                            (e.password = o.password),
                                            (e.host = o.host),
                                            (e.port = o.port),
                                            (u = ye);
                                        continue;
                                    }
                                    u = se;
                                } else u = le;
                                break;
                            case ce:
                                if (
                                    ((u = le),
                                    '/' != a || '/' != m.charAt(p + 1))
                                )
                                    continue;
                                p++;
                                break;
                            case le:
                                if ('/' != a && '\\' != a) {
                                    u = se;
                                    continue;
                                }
                                break;
                            case se:
                                if ('@' == a) {
                                    v && (m = '%40' + m), (v = !0), (c = f(m));
                                    for (var b = 0; b < c.length; b++) {
                                        var g = c[b];
                                        if (':' != g || y) {
                                            var k = W(g, K);
                                            y
                                                ? (e.password += k)
                                                : (e.username += k);
                                        } else y = !0;
                                    }
                                    m = '';
                                } else if (
                                    a == n ||
                                    '/' == a ||
                                    '?' == a ||
                                    '#' == a ||
                                    ('\\' == a && $(e))
                                ) {
                                    if (v && '' == m)
                                        return 'Invalid authority';
                                    (p -= f(m).length + 1), (m = ''), (u = ue);
                                } else m += a;
                                break;
                            case ue:
                            case de:
                                if (r && 'file' == e.scheme) {
                                    u = ve;
                                    continue;
                                }
                                if (':' != a || h) {
                                    if (
                                        a == n ||
                                        '/' == a ||
                                        '?' == a ||
                                        '#' == a ||
                                        ('\\' == a && $(e))
                                    ) {
                                        if ($(e) && '' == m)
                                            return 'Invalid host';
                                        if (
                                            r &&
                                            '' == m &&
                                            (G(e) || null !== e.port)
                                        )
                                            return;
                                        if ((l = M(e, m))) return l;
                                        if (((m = ''), (u = he), r)) return;
                                        continue;
                                    }
                                    '[' == a ? (h = !0) : ']' == a && (h = !1),
                                        (m += a);
                                } else {
                                    if ('' == m) return 'Invalid host';
                                    if ((l = M(e, m))) return l;
                                    if (((m = ''), (u = pe), r == de)) return;
                                }
                                break;
                            case pe:
                                if (!P.test(a)) {
                                    if (
                                        a == n ||
                                        '/' == a ||
                                        '?' == a ||
                                        '#' == a ||
                                        ('\\' == a && $(e)) ||
                                        r
                                    ) {
                                        if ('' != m) {
                                            var w = parseInt(m, 10);
                                            if (w > 65535)
                                                return 'Invalid port';
                                            (e.port =
                                                $(e) && w === V[e.scheme]
                                                    ? null
                                                    : w),
                                                (m = '');
                                        }
                                        if (r) return;
                                        u = he;
                                        continue;
                                    }
                                    return 'Invalid port';
                                }
                                m += a;
                                break;
                            case fe:
                                if (
                                    ((e.scheme = 'file'), '/' == a || '\\' == a)
                                )
                                    u = me;
                                else {
                                    if (!o || 'file' != o.scheme) {
                                        u = ye;
                                        continue;
                                    }
                                    if (a == n)
                                        (e.host = o.host),
                                            (e.path = o.path.slice()),
                                            (e.query = o.query);
                                    else if ('?' == a)
                                        (e.host = o.host),
                                            (e.path = o.path.slice()),
                                            (e.query = ''),
                                            (u = ge);
                                    else {
                                        if ('#' != a) {
                                            J(i.slice(p).join('')) ||
                                                ((e.host = o.host),
                                                (e.path = o.path.slice()),
                                                X(e)),
                                                (u = ye);
                                            continue;
                                        }
                                        (e.host = o.host),
                                            (e.path = o.path.slice()),
                                            (e.query = o.query),
                                            (e.fragment = ''),
                                            (u = ke);
                                    }
                                }
                                break;
                            case me:
                                if ('/' == a || '\\' == a) {
                                    u = ve;
                                    break;
                                }
                                o &&
                                    'file' == o.scheme &&
                                    !J(i.slice(p).join('')) &&
                                    (Y(o.path[0], !0)
                                        ? e.path.push(o.path[0])
                                        : (e.host = o.host)),
                                    (u = ye);
                                continue;
                            case ve:
                                if (
                                    a == n ||
                                    '/' == a ||
                                    '\\' == a ||
                                    '?' == a ||
                                    '#' == a
                                ) {
                                    if (!r && Y(m)) u = ye;
                                    else if ('' == m) {
                                        if (((e.host = ''), r)) return;
                                        u = he;
                                    } else {
                                        if ((l = M(e, m))) return l;
                                        if (
                                            ('localhost' == e.host &&
                                                (e.host = ''),
                                            r)
                                        )
                                            return;
                                        (m = ''), (u = he);
                                    }
                                    continue;
                                }
                                m += a;
                                break;
                            case he:
                                if ($(e)) {
                                    if (((u = ye), '/' != a && '\\' != a))
                                        continue;
                                } else if (r || '?' != a)
                                    if (r || '#' != a) {
                                        if (a != n && ((u = ye), '/' != a))
                                            continue;
                                    } else (e.fragment = ''), (u = ke);
                                else (e.query = ''), (u = ge);
                                break;
                            case ye:
                                if (
                                    a == n ||
                                    '/' == a ||
                                    ('\\' == a && $(e)) ||
                                    (!r && ('?' == a || '#' == a))
                                ) {
                                    if (
                                        ('..' === (s = (s = m).toLowerCase()) ||
                                        '%2e.' === s ||
                                        '.%2e' === s ||
                                        '%2e%2e' === s
                                            ? (X(e),
                                              '/' == a ||
                                                  ('\\' == a && $(e)) ||
                                                  e.path.push(''))
                                            : Q(m)
                                            ? '/' == a ||
                                              ('\\' == a && $(e)) ||
                                              e.path.push('')
                                            : ('file' == e.scheme &&
                                                  !e.path.length &&
                                                  Y(m) &&
                                                  (e.host && (e.host = ''),
                                                  (m = m.charAt(0) + ':')),
                                              e.path.push(m)),
                                        (m = ''),
                                        'file' == e.scheme &&
                                            (a == n || '?' == a || '#' == a))
                                    )
                                        for (
                                            ;
                                            e.path.length > 1 &&
                                            '' === e.path[0];

                                        )
                                            e.path.shift();
                                    '?' == a
                                        ? ((e.query = ''), (u = ge))
                                        : '#' == a &&
                                          ((e.fragment = ''), (u = ke));
                                } else m += W(a, H);
                                break;
                            case be:
                                '?' == a
                                    ? ((e.query = ''), (u = ge))
                                    : '#' == a
                                    ? ((e.fragment = ''), (u = ke))
                                    : a != n && (e.path[0] += W(a, B));
                                break;
                            case ge:
                                r || '#' != a
                                    ? a != n &&
                                      ("'" == a && $(e)
                                          ? (e.query += '%27')
                                          : (e.query +=
                                                '#' == a ? '%23' : W(a, B)))
                                    : ((e.fragment = ''), (u = ke));
                                break;
                            case ke:
                                a != n && (e.fragment += W(a, F));
                        }
                        p++;
                    }
                },
                xe = function (e) {
                    var t,
                        r,
                        n = u(this, xe, 'URL'),
                        o = arguments.length > 1 ? arguments[1] : void 0,
                        a = String(e),
                        c = x(n, { type: 'URL' });
                    if (void 0 !== o)
                        if (o instanceof xe) t = _(o);
                        else if ((r = we((t = {}), String(o))))
                            throw TypeError(r);
                    if ((r = we(c, a, null, t))) throw TypeError(r);
                    var l = (c.searchParams = new k()),
                        s = w(l);
                    s.updateSearchParams(c.query),
                        (s.updateURL = function () {
                            c.query = String(l) || null;
                        }),
                        i ||
                            ((n.href = Se.call(n)),
                            (n.origin = je.call(n)),
                            (n.protocol = Oe.call(n)),
                            (n.username = Ae.call(n)),
                            (n.password = Pe.call(n)),
                            (n.host = ze.call(n)),
                            (n.hostname = Ce.call(n)),
                            (n.port = Ee.call(n)),
                            (n.pathname = Ne.call(n)),
                            (n.search = Re.call(n)),
                            (n.searchParams = Ie.call(n)),
                            (n.hash = Te.call(n)));
                },
                _e = xe.prototype,
                Se = function () {
                    var e = _(this),
                        t = e.scheme,
                        r = e.username,
                        n = e.password,
                        o = e.host,
                        i = e.port,
                        a = e.path,
                        c = e.query,
                        l = e.fragment,
                        s = t + ':';
                    return (
                        null !== o
                            ? ((s += '//'),
                              G(e) && (s += r + (n ? ':' + n : '') + '@'),
                              (s += U(o)),
                              null !== i && (s += ':' + i))
                            : 'file' == t && (s += '//'),
                        (s += e.cannotBeABaseURL
                            ? a[0]
                            : a.length
                            ? '/' + a.join('/')
                            : ''),
                        null !== c && (s += '?' + c),
                        null !== l && (s += '#' + l),
                        s
                    );
                },
                je = function () {
                    var e = _(this),
                        t = e.scheme,
                        r = e.port;
                    if ('blob' == t)
                        try {
                            return new URL(t.path[0]).origin;
                        } catch (e) {
                            return 'null';
                        }
                    return 'file' != t && $(e)
                        ? t + '://' + U(e.host) + (null !== r ? ':' + r : '')
                        : 'null';
                },
                Oe = function () {
                    return _(this).scheme + ':';
                },
                Ae = function () {
                    return _(this).username;
                },
                Pe = function () {
                    return _(this).password;
                },
                ze = function () {
                    var e = _(this),
                        t = e.host,
                        r = e.port;
                    return null === t ? '' : null === r ? U(t) : U(t) + ':' + r;
                },
                Ce = function () {
                    var e = _(this).host;
                    return null === e ? '' : U(e);
                },
                Ee = function () {
                    var e = _(this).port;
                    return null === e ? '' : String(e);
                },
                Ne = function () {
                    var e = _(this),
                        t = e.path;
                    return e.cannotBeABaseURL
                        ? t[0]
                        : t.length
                        ? '/' + t.join('/')
                        : '';
                },
                Re = function () {
                    var e = _(this).query;
                    return e ? '?' + e : '';
                },
                Ie = function () {
                    return _(this).searchParams;
                },
                Te = function () {
                    var e = _(this).fragment;
                    return e ? '#' + e : '';
                },
                De = function (e, t) {
                    return { get: e, set: t, configurable: !0, enumerable: !0 };
                };
            if (
                (i &&
                    l(_e, {
                        href: De(Se, function (e) {
                            var t = _(this),
                                r = String(e),
                                n = we(t, r);
                            if (n) throw TypeError(n);
                            w(t.searchParams).updateSearchParams(t.query);
                        }),
                        origin: De(je),
                        protocol: De(Oe, function (e) {
                            var t = _(this);
                            we(t, String(e) + ':', ee);
                        }),
                        username: De(Ae, function (e) {
                            var t = _(this),
                                r = f(String(e));
                            if (!Z(t)) {
                                t.username = '';
                                for (var n = 0; n < r.length; n++)
                                    t.username += W(r[n], K);
                            }
                        }),
                        password: De(Pe, function (e) {
                            var t = _(this),
                                r = f(String(e));
                            if (!Z(t)) {
                                t.password = '';
                                for (var n = 0; n < r.length; n++)
                                    t.password += W(r[n], K);
                            }
                        }),
                        host: De(ze, function (e) {
                            var t = _(this);
                            t.cannotBeABaseURL || we(t, String(e), ue);
                        }),
                        hostname: De(Ce, function (e) {
                            var t = _(this);
                            t.cannotBeABaseURL || we(t, String(e), de);
                        }),
                        port: De(Ee, function (e) {
                            var t = _(this);
                            Z(t) ||
                                ('' == (e = String(e))
                                    ? (t.port = null)
                                    : we(t, e, pe));
                        }),
                        pathname: De(Ne, function (e) {
                            var t = _(this);
                            t.cannotBeABaseURL ||
                                ((t.path = []), we(t, e + '', he));
                        }),
                        search: De(Re, function (e) {
                            var t = _(this);
                            '' == (e = String(e))
                                ? (t.query = null)
                                : ('?' == e.charAt(0) && (e = e.slice(1)),
                                  (t.query = ''),
                                  we(t, e, ge)),
                                w(t.searchParams).updateSearchParams(t.query);
                        }),
                        searchParams: De(Ie),
                        hash: De(Te, function (e) {
                            var t = _(this);
                            '' != (e = String(e))
                                ? ('#' == e.charAt(0) && (e = e.slice(1)),
                                  (t.fragment = ''),
                                  we(t, e, ke))
                                : (t.fragment = null);
                        }),
                    }),
                s(
                    _e,
                    'toJSON',
                    function () {
                        return Se.call(this);
                    },
                    { enumerable: !0 }
                ),
                s(
                    _e,
                    'toString',
                    function () {
                        return Se.call(this);
                    },
                    { enumerable: !0 }
                ),
                g)
            ) {
                var Me = g.createObjectURL,
                    Le = g.revokeObjectURL;
                Me &&
                    s(xe, 'createObjectURL', function (e) {
                        return Me.apply(g, arguments);
                    }),
                    Le &&
                        s(xe, 'revokeObjectURL', function (e) {
                            return Le.apply(g, arguments);
                        });
            }
            h(xe, 'URL'), o({ global: !0, forced: !a, sham: !i }, { URL: xe });
        },
        function (e, t, r) {
            'use strict';
            var n = /[^\0-\u007E]/,
                o = /[.\u3002\uFF0E\uFF61]/g,
                i = 'Overflow: input needs wider integers to process',
                a = Math.floor,
                c = String.fromCharCode,
                l = function (e) {
                    return e + 22 + 75 * (e < 26);
                },
                s = function (e, t, r) {
                    var n = 0;
                    for (
                        e = r ? a(e / 700) : e >> 1, e += a(e / t);
                        e > 455;
                        n += 36
                    )
                        e = a(e / 35);
                    return a(n + (36 * e) / (e + 38));
                },
                u = function (e) {
                    var t,
                        r,
                        n = [],
                        o = (e = (function (e) {
                            for (var t = [], r = 0, n = e.length; r < n; ) {
                                var o = e.charCodeAt(r++);
                                if (o >= 55296 && o <= 56319 && r < n) {
                                    var i = e.charCodeAt(r++);
                                    56320 == (64512 & i)
                                        ? t.push(
                                              ((1023 & o) << 10) +
                                                  (1023 & i) +
                                                  65536
                                          )
                                        : (t.push(o), r--);
                                } else t.push(o);
                            }
                            return t;
                        })(e)).length,
                        u = 128,
                        d = 0,
                        p = 72;
                    for (t = 0; t < e.length; t++)
                        (r = e[t]) < 128 && n.push(c(r));
                    var f = n.length,
                        m = f;
                    for (f && n.push('-'); m < o; ) {
                        var v = 2147483647;
                        for (t = 0; t < e.length; t++)
                            (r = e[t]) >= u && r < v && (v = r);
                        var h = m + 1;
                        if (v - u > a((2147483647 - d) / h))
                            throw RangeError(i);
                        for (
                            d += (v - u) * h, u = v, t = 0;
                            t < e.length;
                            t++
                        ) {
                            if ((r = e[t]) < u && ++d > 2147483647)
                                throw RangeError(i);
                            if (r == u) {
                                for (var y = d, b = 36; ; b += 36) {
                                    var g =
                                        b <= p ? 1 : b >= p + 26 ? 26 : b - p;
                                    if (y < g) break;
                                    var k = y - g,
                                        w = 36 - g;
                                    n.push(c(l(g + (k % w)))), (y = a(k / w));
                                }
                                n.push(c(l(y))),
                                    (p = s(d, h, m == f)),
                                    (d = 0),
                                    ++m;
                            }
                        }
                        ++d, ++u;
                    }
                    return n.join('');
                };
            e.exports = function (e) {
                var t,
                    r,
                    i = [],
                    a = e.toLowerCase().replace(o, '.').split('.');
                for (t = 0; t < a.length; t++)
                    (r = a[t]), i.push(n.test(r) ? 'xn--' + u(r) : r);
                return i.join('.');
            };
        },
        function (e, t, r) {
            'use strict';
            r(6);
            var n = r(2),
                o = r(30),
                i = r(182),
                a = r(22),
                c = r(107),
                l = r(37),
                s = r(121),
                u = r(28),
                d = r(66),
                p = r(5),
                f = r(40),
                m = r(77),
                v = r(9),
                h = r(4),
                y = r(36),
                b = r(33),
                g = r(200),
                k = r(69),
                w = r(0),
                x = o('fetch'),
                _ = o('Headers'),
                S = w('iterator'),
                j = u.set,
                O = u.getterFor('URLSearchParams'),
                A = u.getterFor('URLSearchParamsIterator'),
                P = /\+/g,
                z = Array(4),
                C = function (e) {
                    return (
                        z[e - 1] ||
                        (z[e - 1] = RegExp(
                            '((?:%[\\da-f]{2}){' + e + '})',
                            'gi'
                        ))
                    );
                },
                E = function (e) {
                    try {
                        return decodeURIComponent(e);
                    } catch (t) {
                        return e;
                    }
                },
                N = function (e) {
                    var t = e.replace(P, ' '),
                        r = 4;
                    try {
                        return decodeURIComponent(t);
                    } catch (e) {
                        for (; r; ) t = t.replace(C(r--), E);
                        return t;
                    }
                },
                R = /[!'()~]|%20/g,
                I = {
                    '!': '%21',
                    "'": '%27',
                    '(': '%28',
                    ')': '%29',
                    '~': '%7E',
                    '%20': '+',
                },
                T = function (e) {
                    return I[e];
                },
                D = function (e) {
                    return encodeURIComponent(e).replace(R, T);
                },
                M = function (e, t) {
                    if (t)
                        for (var r, n, o = t.split('&'), i = 0; i < o.length; )
                            (r = o[i++]).length &&
                                ((n = r.split('=')),
                                e.push({
                                    key: N(n.shift()),
                                    value: N(n.join('=')),
                                }));
                },
                L = function (e) {
                    (this.entries.length = 0), M(this.entries, e);
                },
                q = function (e, t) {
                    if (e < t) throw TypeError('Not enough arguments');
                },
                U = s(
                    function (e, t) {
                        j(this, {
                            type: 'URLSearchParamsIterator',
                            iterator: g(O(e).entries),
                            kind: t,
                        });
                    },
                    'Iterator',
                    function () {
                        var e = A(this),
                            t = e.kind,
                            r = e.iterator.next(),
                            n = r.value;
                        return (
                            r.done ||
                                (r.value =
                                    'keys' === t
                                        ? n.key
                                        : 'values' === t
                                        ? n.value
                                        : [n.key, n.value]),
                            r
                        );
                    }
                ),
                B = function () {
                    d(this, B, 'URLSearchParams');
                    var e,
                        t,
                        r,
                        n,
                        o,
                        i,
                        a,
                        c,
                        l,
                        s = arguments.length > 0 ? arguments[0] : void 0,
                        u = this,
                        f = [];
                    if (
                        (j(u, {
                            type: 'URLSearchParams',
                            entries: f,
                            updateURL: function () {},
                            updateSearchParams: L,
                        }),
                        void 0 !== s)
                    )
                        if (h(s))
                            if ('function' == typeof (e = k(s)))
                                for (
                                    r = (t = e.call(s)).next;
                                    !(n = r.call(t)).done;

                                ) {
                                    if (
                                        (a = (i = (o = g(v(n.value)))
                                            .next).call(o)).done ||
                                        (c = i.call(o)).done ||
                                        !i.call(o).done
                                    )
                                        throw TypeError(
                                            'Expected sequence with length 2'
                                        );
                                    f.push({
                                        key: a.value + '',
                                        value: c.value + '',
                                    });
                                }
                            else
                                for (l in s)
                                    p(s, l) &&
                                        f.push({ key: l, value: s[l] + '' });
                        else
                            M(
                                f,
                                'string' == typeof s
                                    ? '?' === s.charAt(0)
                                        ? s.slice(1)
                                        : s
                                    : s + ''
                            );
                },
                F = B.prototype;
            c(
                F,
                {
                    append: function (e, t) {
                        q(arguments.length, 2);
                        var r = O(this);
                        r.entries.push({ key: e + '', value: t + '' }),
                            r.updateURL();
                    },
                    delete: function (e) {
                        q(arguments.length, 1);
                        for (
                            var t = O(this), r = t.entries, n = e + '', o = 0;
                            o < r.length;

                        )
                            r[o].key === n ? r.splice(o, 1) : o++;
                        t.updateURL();
                    },
                    get: function (e) {
                        q(arguments.length, 1);
                        for (
                            var t = O(this).entries, r = e + '', n = 0;
                            n < t.length;
                            n++
                        )
                            if (t[n].key === r) return t[n].value;
                        return null;
                    },
                    getAll: function (e) {
                        q(arguments.length, 1);
                        for (
                            var t = O(this).entries, r = e + '', n = [], o = 0;
                            o < t.length;
                            o++
                        )
                            t[o].key === r && n.push(t[o].value);
                        return n;
                    },
                    has: function (e) {
                        q(arguments.length, 1);
                        for (
                            var t = O(this).entries, r = e + '', n = 0;
                            n < t.length;

                        )
                            if (t[n++].key === r) return !0;
                        return !1;
                    },
                    set: function (e, t) {
                        q(arguments.length, 1);
                        for (
                            var r,
                                n = O(this),
                                o = n.entries,
                                i = !1,
                                a = e + '',
                                c = t + '',
                                l = 0;
                            l < o.length;
                            l++
                        )
                            (r = o[l]).key === a &&
                                (i
                                    ? o.splice(l--, 1)
                                    : ((i = !0), (r.value = c)));
                        i || o.push({ key: a, value: c }), n.updateURL();
                    },
                    sort: function () {
                        var e,
                            t,
                            r,
                            n = O(this),
                            o = n.entries,
                            i = o.slice();
                        for (o.length = 0, r = 0; r < i.length; r++) {
                            for (e = i[r], t = 0; t < r; t++)
                                if (o[t].key > e.key) {
                                    o.splice(t, 0, e);
                                    break;
                                }
                            t === r && o.push(e);
                        }
                        n.updateURL();
                    },
                    forEach: function (e) {
                        for (
                            var t,
                                r = O(this).entries,
                                n = f(
                                    e,
                                    arguments.length > 1
                                        ? arguments[1]
                                        : void 0,
                                    3
                                ),
                                o = 0;
                            o < r.length;

                        )
                            n((t = r[o++]).value, t.key, this);
                    },
                    keys: function () {
                        return new U(this, 'keys');
                    },
                    values: function () {
                        return new U(this, 'values');
                    },
                    entries: function () {
                        return new U(this, 'entries');
                    },
                },
                { enumerable: !0 }
            ),
                a(F, S, F.entries),
                a(
                    F,
                    'toString',
                    function () {
                        for (
                            var e, t = O(this).entries, r = [], n = 0;
                            n < t.length;

                        )
                            (e = t[n++]), r.push(D(e.key) + '=' + D(e.value));
                        return r.join('&');
                    },
                    { enumerable: !0 }
                ),
                l(B, 'URLSearchParams'),
                n({ global: !0, forced: !i }, { URLSearchParams: B }),
                i ||
                    'function' != typeof x ||
                    'function' != typeof _ ||
                    n(
                        { global: !0, enumerable: !0, forced: !0 },
                        {
                            fetch: function (e) {
                                var t,
                                    r,
                                    n,
                                    o = [e];
                                return (
                                    arguments.length > 1 &&
                                        (h((t = arguments[1])) &&
                                            ((r = t.body),
                                            'URLSearchParams' === m(r) &&
                                                ((n = t.headers
                                                    ? new _(t.headers)
                                                    : new _()).has(
                                                    'content-type'
                                                ) ||
                                                    n.set(
                                                        'content-type',
                                                        'application/x-www-form-urlencoded;charset=UTF-8'
                                                    ),
                                                (t = y(t, {
                                                    body: b(0, String(r)),
                                                    headers: b(0, n),
                                                })))),
                                        o.push(t)),
                                    x.apply(this, o)
                                );
                            },
                        }
                    ),
                (e.exports = { URLSearchParams: B, getState: O });
        },
        function (e, t, r) {
            var n = r(9),
                o = r(69);
            e.exports = function (e) {
                var t = o(e);
                if ('function' != typeof t)
                    throw TypeError(String(e) + ' is not iterable');
                return n(t.call(e));
            };
        },
        function (e, t, r) {
            var n = r(180),
                o = r(202);
            'string' == typeof (o = o.__esModule ? o.default : o) &&
                (o = [[e.i, o, '']]);
            var i = {
                attributes: { 'data-context': 'klaro-styles' },
                insert: 'head',
                singleton: !1,
            };
            n(o, i);
            e.exports = o.locals || {};
        },
        function (e, t, r) {
            (t = r(181)(!1)).push([
                e.i,
                ".klaro-ide .cm-switch-container{border-bottom-style:solid;border-bottom-style:var(--border-style, solid);border-bottom-width:1px;border-bottom-width:var(--border-width, 1px);border-bottom-color:#c8c8c8;border-bottom-color:var(--light2, #c8c8c8);display:block;position:relative;padding:10px;padding-left:66px;line-height:20px;vertical-align:middle;min-height:40px}.klaro-ide .cm-switch-container:last-child{border-bottom:0}.klaro-ide .cm-switch-container:first-child{margin-top:0}.klaro-ide .cm-switch-container p{margin-top:0}.klaro-ide .cm-switch{position:relative;display:inline-block;width:50px;height:30px}.klaro-ide .cm-list-input:checked+.cm-list-label .slider{background-color:#1a936f;background-color:var(--green1, #1a936f)}.klaro-ide .cm-list-input.half-checked:checked+.cm-list-label .slider{background-color:#1a936f;background-color:var(--green1, #1a936f);opacity:0.6}.klaro-ide .cm-list-input.half-checked:checked+.cm-list-label .slider::before{transform:translateX(10px)}.klaro-ide .cm-list-input.only-required+.cm-list-label .slider{background-color:#24cc9a;background-color:var(--green2, #24cc9a);opacity:0.8}.klaro-ide .cm-list-input.only-required+.cm-list-label .slider::before{transform:translateX(10px)}.klaro-ide .cm-list-input.required:checked+.cm-list-label .slider{background-color:#24cc9a;background-color:var(--green2, #24cc9a);opacity:0.8;cursor:not-allowed}.klaro-ide .slider{box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19)}.klaro-ide .cm-list-input{position:absolute;top:0;left:0;opacity:0;width:50px;height:30px}.klaro-ide .cm-list-title{font-size:0.9em;font-weight:600}.klaro-ide .cm-list-description{color:#7c7c7c;color:var(--dark3, #7c7c7c);font-size:0.9em;padding-top:4px}.klaro-ide .cm-list-label .cm-switch{position:absolute;left:0}.klaro-ide .cm-list-label .slider{background-color:#f2f2f2;background-color:var(--white2, #f2f2f2);position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;transition:0.4s;width:50px;display:inline-block}.klaro-ide .cm-list-label .slider::before{background-color:#e6e6e6;background-color:var(--white3, #e6e6e6);position:absolute;content:'';height:20px;width:20px;left:5px;bottom:5px;transition:0.4s}.klaro-ide .cm-list-label .slider.round{border-radius:30px}.klaro-ide .cm-list-label .slider.round::before{border-radius:50%}.klaro-ide .cm-list-label input:focus+.slider{box-shadow-color:#48dfb2;box-shadow-color:var(--green3, #48dfb2);box-shadow:0 0 1px var(color, green3)}.klaro-ide .cm-list-label input:checked+.slider::before{transform:translateX(20px)}.klaro-ide .cm-list-input:focus+.cm-list-label .slider{box-shadow:0 4px 6px 0 rgba(125,125,125,0.2),5px 5px 10px 0 rgba(125,125,125,0.19)}.klaro-ide .cm-list-input:checked+.cm-list-label .slider::before{transform:translateX(20px)}.klaro-ide .cm-language-select,.klaro-ide .cm-theme-select,.klaro-ide .cm-purpose-select{border-radius:4px;border-radius:var(--border-radius, 4px);background-color:#fff;background-color:var(--white1, #fff);border-style:solid;border-style:var(--border-style, solid);border-width:1px;border-width:var(--border-width, 1px);border-color:#c8c8c8;border-color:var(--light2, #c8c8c8);box-shadow:0 2px 5px 0 rgba(0,0,0,0.11);padding:12px;margin-bottom:12px}.klaro-ide .cm-language-select ul.cm-languages,.klaro-ide .cm-language-select ul.cm-themes,.klaro-ide .cm-language-select ul.cm-purposes,.klaro-ide .cm-theme-select ul.cm-languages,.klaro-ide .cm-theme-select ul.cm-themes,.klaro-ide .cm-theme-select ul.cm-purposes,.klaro-ide .cm-purpose-select ul.cm-languages,.klaro-ide .cm-purpose-select ul.cm-themes,.klaro-ide .cm-purpose-select ul.cm-purposes{margin-top:-4px}.klaro-ide .cm-language-select ul.cm-languages li,.klaro-ide .cm-language-select ul.cm-themes li,.klaro-ide .cm-language-select ul.cm-purposes li,.klaro-ide .cm-theme-select ul.cm-languages li,.klaro-ide .cm-theme-select ul.cm-themes li,.klaro-ide .cm-theme-select ul.cm-purposes li,.klaro-ide .cm-purpose-select ul.cm-languages li,.klaro-ide .cm-purpose-select ul.cm-themes li,.klaro-ide .cm-purpose-select ul.cm-purposes li{color:#fafafa;color:var(--light1, #fafafa);border-radius:4px;border-radius:var(--border-radius, 4px);border-width:1px;border-width:var(--border-width, 1px);border-style:solid;border-style:var(--border-style, solid);border-color:#24cc9a;border-color:var(--green2, #24cc9a);background-color:#1a936f;background-color:var(--green1, #1a936f);display:inline-block;margin-right:4px;margin-top:4px;padding:2px 4px;font-size:0.9em}.klaro-ide .cm-language-select ul.cm-languages li a,.klaro-ide .cm-language-select ul.cm-themes li a,.klaro-ide .cm-language-select ul.cm-purposes li a,.klaro-ide .cm-theme-select ul.cm-languages li a,.klaro-ide .cm-theme-select ul.cm-themes li a,.klaro-ide .cm-theme-select ul.cm-purposes li a,.klaro-ide .cm-purpose-select ul.cm-languages li a,.klaro-ide .cm-purpose-select ul.cm-themes li a,.klaro-ide .cm-purpose-select ul.cm-purposes li a{color:#fff;color:var(--white1, #fff)}.klaro-ide .cm-search-select{margin-top:12px;margin-bottom:12px;display:flex}.klaro-ide .cm-search-select input:not(:focus) ~ .cm-candidates{display:none}.klaro-ide .cm-search-select .cm-candidates:hover{display:block !important}.klaro-ide .cm-search-select .cm-candidates{background-color:#fff;background-color:var(--white1, #fff);border-radius:4px;border-radius:var(--border-radius, 4px);border-width:1px;border-width:var(--border-width, 1px);border-style:solid;border-style:var(--border-style, solid);border-color:#f2f2f2;border-color:var(--white2, #f2f2f2);position:absolute;top:55px;left:0;z-index:10;margin-bottom:10px;width:100%}.klaro-ide .cm-search-select .cm-candidates .cm-candidate{border-bottom-width:1px;border-bottom-width:var(--border-width, 1px);border-bottom-style:solid;border-bottom-style:var(--border-style, solid);border-bottom-color:#7c7c7c;border-bottom-color:var(--dark3, #7c7c7c);padding:12px;cursor:pointer}.klaro-ide .cm-search-select .cm-candidates .cm-candidate p{color:#5c5c5c;color:var(--dark2, #5c5c5c);font-size:0.9em}.klaro-ide .cm-search-select .cm-candidates .cm-candidate:last-child{border-bottom-style:none}.klaro-ide .cm-obj-selector{position:relative;display:inline-block;margin-bottom:10px;margin-right:20px;width:100%;height:40px;overflow:visible}@media (min-width: 768px){.klaro-ide .cm-obj-selector{width:300px}}.klaro-ide .cm-obj-selector span.cm-obj-selector-more{display:block;position:absolute;right:0.5em;padding-top:0.6em;padding-right:0.3em;z-index:2;pointer-events:none;transform:scaleY(0.6) scaleX(0.8);font-weight:800}.klaro-ide .cm-obj-selector ul{background-color:#fff;background-color:var(--white1, #fff);top:0;left:0;z-index:1;margin:0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.klaro-ide .cm-obj-selector ul li{background-color:#fff;background-color:var(--white1, #fff);border-bottom-style:solid;border-bottom-style:var(--border-style, solid);border-bottom-width:1px;border-bottom-width:var(--border-width, 1px);border-bottom-color:#f2f2f2;border-bottom-color:var(--white2, #f2f2f2);box-shadow:0 2px 5px 0 rgba(0,0,0,0.33);margin:0;width:auto;display:none;width:100%;order:2}.klaro-ide .cm-obj-selector ul li:last-child{border-bottom-style:none}.klaro-ide .cm-obj-selector ul li.cm-obj-is-active{background-color:#c8c8c8;background-color:var(--light2, #c8c8c8);display:flex;order:1}.klaro-ide .cm-obj-selector ul li a.cm-obj-item{width:100%;padding:8px;padding-right:40px}.klaro-ide .cm-obj-selector ul li.cm-obj-add{padding:8px;display:none;justify-content:space-between;order:3}.klaro-ide .cm-obj-selector ul li.cm-obj-add input{color:#333;color:var(--dark1, #333);border-color:#5c5c5c;border-color:var(--dark2, #5c5c5c);border-radius:4px;border-radius:var(--border-radius, 4px);border-style:solid;border-style:var(--border-style, solid);border-width:1px;border-width:var(--border-width, 1px);flex-grow:1;flex-shrink:1;padding:4px;font-size:0.9em}.klaro-ide .cm-obj-selector ul li.cm-obj-add a.cm-btn{color:#fff;color:var(--white1, #fff);border-radius:4px;border-radius:var(--border-radius, 4px);background-color:#7c7c7c;background-color:var(--dark3, #7c7c7c);padding:8px;flex-grow:0;flex-shrink:0;margin-left:10px;width:auto;display:inline-block}.klaro-ide .cm-obj-selector ul:not(.cm-is-active) li.cm-obj-is-active{background-color:#fff;background-color:var(--white1, #fff)}.klaro-ide .cm-obj-selector ul.cm-is-active{z-index:4}.klaro-ide .cm-obj-selector ul.cm-is-active li{display:flex}.klaro-ide .cm-switch{padding:12px}.klaro-ide p.cm-description{color:#5c5c5c;color:var(--dark2, #5c5c5c);font-size:0.9em;padding-top:2px;margin-bottom:4px}.klaro-ide .cm-select{margin-top:16px}.klaro-ide .cm-select select{background-color:#fff;background-color:var(--white1, #fff);color:#5c5c5c;color:var(--dark2, #5c5c5c);border-radius:4px;border-radius:var(--border-radius, 4px);border-style:solid;border-style:var(--border-style, solid);border-color:#f2f2f2;border-color:var(--white2, #f2f2f2);display:block;width:100%;padding:12px 5px;font-size:0.9em;text-indent:5px}.klaro-ide .cm-select select[disabled]{background-color:#c8c8c8;background-color:var(--light2, #c8c8c8)}.klaro-ide .cm-retracting-label-input{display:inline-block;position:relative;width:100%;padding:10px 0 6px;margin-top:4px}.klaro-ide .cm-retracting-label-input>.cm-label{background-color:#fff;background-color:var(--white1, #fff);border-radius:4px;border-radius:var(--border-radius, 4px);border-style:solid;border-style:var(--border-style, solid);border-width:1px;border-width:var(--border-width, 1px);border-color:#c8c8c8;border-color:var(--light2, #c8c8c8);position:absolute;top:16px;left:8px;white-space:nowrap;text-overflow:ellipsis;max-width:calc(100% - (2 * 8px));overflow:hidden;pointer-events:none;transition:transform 150ms cubic-bezier(0.47, 0, 0.74, 0.71),opacity 150ms cubic-bezier(0.47, 0, 0.74, 0.71),color 150ms cubic-bezier(0.47, 0, 0.74, 0.71);padding:0 8px;transform:scale(0.75) translateX(-16%) translateY(-26px)}.klaro-ide .cm-input{border-radius:4px;border-radius:var(--border-radius, 4px);background-color:#fafafa;background-color:var(--light1, #fafafa);border-style:solid;border-style:var(--border-style, solid);border-width:1px;border-width:var(--border-width, 1px);border-color:#1a936f;border-color:var(--green1, #1a936f);font-size:0.9em;box-sizing:border-box;padding:12px 18px;width:100%}.klaro-ide .cm-input[disabled]{background-color:#c8c8c8;background-color:var(--light2, #c8c8c8)}@media (min-width: 768px){.klaro-ide .cm-tabs span.cm-more{display:none}}.klaro-ide .cm-tabs{position:relative;display:flex;align-items:stretch;justify-content:space-between;white-space:nowrap}@media (min-width: 768px){.klaro-ide .cm-tabs span.cm-tabs-more{display:none}}@media (max-width: 768px){.klaro-ide .cm-tabs{border-radius:4px;border-radius:var(--border-radius, 4px);border-radius:4px;border-radius:var(--border-radius, 4px);background-color:#fff;background-color:var(--white1, #fff);box-shadow:0 2px 5px 0 rgba(0,0,0,0.33)}.klaro-ide .cm-tabs span.cm-tabs-more{display:block;position:absolute;right:0.5em;padding-top:0.6em;padding-right:0.3em;transform:scaleY(0.6) scaleX(0.8);font-weight:800}.klaro-ide .cm-tabs ul{flex-wrap:wrap}.klaro-ide .cm-tabs ul li{display:block;position:relative;width:100%;text-align:left}.klaro-ide .cm-tabs ul li a{justify-content:left;border-bottom:0 !important}.klaro-ide .cm-tabs:not(.cm-tabs-active) ul li:not(.cm-tab-is-active){display:none}.klaro-ide .cm-tabs.cm-tabs-active ul li{order:2;display:block}.klaro-ide .cm-tabs.cm-tabs-active ul li.cm-tab-is-active{background-color:#c8c8c8;background-color:var(--light2, #c8c8c8);order:1}}.klaro-ide .cm-tabs:not(:last-child){margin-bottom:1.5rem}.klaro-ide .cm-tabs ul{border-bottom-style:solid;border-bottom-style:var(--border-style, solid);border-bottom-width:1px;border-bottom-width:var(--border-width, 1px);border-bottom-color:#c8c8c8;border-bottom-color:var(--light2, #c8c8c8);align-items:center;display:flex;width:100%;flex-grow:1;flex-shrink:0;justify-content:flex-start;margin:0;padding:0}.klaro-ide .cm-tabs ul li{display:block}.klaro-ide .cm-tabs ul li a{border-bottom-style:solid;border-bottom-style:var(--border-style, solid);border-bottom-width:1px;border-bottom-width:var(--border-width, 1px);border-bottom-color:#c8c8c8;border-bottom-color:var(--light2, #c8c8c8);color:#5c5c5c;color:var(--dark2, #5c5c5c);display:flex;align-items:flex-start;justify-content:left;margin-bottom:-1px;padding:0.5em 1em}.klaro-ide .cm-tabs ul li.cm-tab-is-active a{color:#2581c4;color:var(--blue1, #2581c4);border-bottom-color:#2581c4;border-bottom-color:var(--blue1, #2581c4)}@media (max-width: 767px){.klaro-ide .cm-tabs.tabs-active{position:relative;min-height:40px;overflow:visible;z-index:10}.klaro-ide .cm-tabs.tabs-active ul{background-color:#fff;background-color:var(--white1, #fff);display:flex;flex-direction:column;flex-wrap:wrap;position:absolute;width:100%;height:auto;box-shadow:0 2px 5px 0 rgba(0,0,0,0.33)}.klaro-ide .cm-tabs.tabs-active ul li{margin:0 !important}.klaro-ide .cm-tabs.tabs-active ul li:not(.cm-tab-is-active){order:2;display:block}.klaro-ide .cm-tabs.tabs-active ul li.cm-tab-is-active{background-color:#fafafa;background-color:var(--light1, #fafafa);order:1;display:block}}.klaro-ide .cm-list .cm-item{display:flex;flex-direction:row;align-items:center;padding:8px;display:flex;flex-direction:row;align-items:top;justify-items:flex-end}@media (min-width: 768px){.klaro-ide .cm-list .cm-item span.cm-is-action{display:none}.klaro-ide .cm-list .cm-item:hover span.cm-is-action{display:inline-block}}.klaro-ide .cm-list .cm-item:last-child{border-bottom:0}.klaro-ide .cm-list .cm-item:nth-child(2n){background-color:#fafafa;background-color:var(--light1, #fafafa)}.klaro-ide .cm-list .cm-item.cm-is-header{font-weight:600;margin-bottom:4px;background:none}.klaro-ide .cm-list .cm-item.cm-is-card{background-color:#fff;background-color:var(--white1, #fff);border-radius:4px;border-radius:var(--border-radius, 4px);box-shadow:0 2px 5px 0 rgba(0,0,0,0.33);margin-bottom:24px}.klaro-ide .cm-list .cm-item.cm-is-clickable{cursor:pointer}.klaro-ide .cm-list .cm-item.cm-is-expandable{cursor:pointer}.klaro-ide .cm-list .cm-item form{margin:0}.klaro-ide .cm-list .cm-item form label.label{font-weight:300}.klaro-ide .cm-list .cm-item span.cm-is-action{position:absolute;right:1rem;top:1rem}.klaro-ide .cm-list .cm-item .cm-col{align-content:center;flex-basis:0;margin:8px;flex-grow:1}.klaro-ide .cm-list .cm-item .cm-col.cm-is-xs{flex-grow:1}.klaro-ide .cm-list .cm-item .cm-col.cm-is-sm{flex-grow:2}.klaro-ide .cm-list .cm-item .cm-col.cm-is-md{flex-grow:5}.klaro-ide .cm-list .cm-item .cm-col.cm-is-lg{flex-grow:10}.klaro-ide .cm-list .cm-item .cm-col.cm-is-xl{flex-grow:20}.klaro-ide .cm-list .cm-item .cm-col.cm-is-icon{flex-basis:50px;text-align:right;flex-grow:0}.klaro-ide .cm-list .cm-item .cm-content{flex:10}.klaro-ide .cm-dropdown{position:relative}.klaro-ide .cm-dropdown>button{display:inline-flex;vertical-align:middle;align-items:center;justify-content:center;width:2em;height:2em;font-size:1em;border:0;background-color:transparent}.klaro-ide .cm-dropdown>button:focus,.klaro-ide .cm-dropdown>button:hover{background-color:#fafafa;background-color:var(--light1, #fafafa);border-radius:25px}.klaro-ide .cm-dropdown>.cm-dropdowncontent{background-color:#fff;background-color:var(--white1, #fff);display:none;box-shadow:0 2px 5px 0 rgba(0,0,0,0.33);width:auto}.klaro-ide .cm-dropdown>.cm-dropdowncontent.cm-dropdownexpanded{border-radius:4px;border-radius:var(--border-radius, 4px);display:block;position:absolute;top:35px;z-index:100;left:0}.klaro-ide .cm-dropdown>.cm-dropdowncontent ul.cm-dropdownmenu{border-radius:4px;border-radius:var(--border-radius, 4px);border-style:solid;border-style:var(--border-style, solid);border-width:1px;border-width:var(--border-width, 1px);border-color:#5c5c5c;border-color:var(--dark2, #5c5c5c);list-style:none;text-align:left;max-width:300px;min-width:200px;padding-top:0.25rem;padding-bottom:0.25rem}.klaro-ide .cm-dropdown>.cm-dropdowncontent ul.cm-dropdownmenu li{height:auto}.klaro-ide .cm-dropdown>.cm-dropdowncontent ul.cm-dropdownmenu li a{display:block;padding:8px;padding-left:16px}.klaro-ide .cm-dropdown>.cm-dropdowncontent ul.cm-dropdownmenu li a span{display:inline-flex;align-items:center}.klaro-ide .cm-dropdown>.cm-dropdowncontent ul.cm-dropdownmenu li a .icon{margin-right:0.45em}.klaro-ide .cm-dropdown>.cm-dropdowncontent ul.cm-dropdownmenu li a:hover{background-color:#2581c4;background-color:var(--blue1, #2581c4);color:#fff;color:var(--white1, #fff)}.klaro-ide .cm-dropdown.is-right .cm-dropdowncontent.cm-dropdownexpanded{right:0;left:auto}.klaro-ide label{display:inline-block}.klaro-ide .cm-global-fields,.klaro-ide .cm-config-controls,.klaro-ide .cm-translations-fields,.klaro-ide .cm-service-fields{max-width:600px}.klaro-ide .cm-json .cm-file-import{display:none}.klaro-ide .cm-json .cm-upload-label{cursor:pointer}.klaro-ide .cm-json .cm-upload-label button{pointer-events:none}.klaro-ide .cm-json pre code{white-space:pre-wrap}.klaro-ide .cm-message{padding:12px}.klaro-ide .cm-message.cm-error,.klaro-ide .cm-message.cm-success{border-radius:4px;border-radius:var(--border-radius, 4px);color:#fff;color:var(--white1, #fff);box-shadow:0 2px 5px 0 rgba(0,0,0,0.11);margin-bottom:24px}.klaro-ide .cm-message.cm-error{background-color:#e15669;background-color:var(--red2, #e15669)}.klaro-ide .cm-message.cm-success{background:#24cc9a;background:var(--green2, #24cc9a)}.klaro-ide .cm-space-sm{margin-bottom:8px !important}.klaro-ide .cm-space-md{margin-bottom:12px !important}.klaro-ide .cm-space-lg{margin-bottom:24px !important}.klaro-ide .cm-json h1,.klaro-ide .cm-json h2,.klaro-ide .cm-json h3,.klaro-ide .cm-json h4,.klaro-ide .cm-global-fields h1,.klaro-ide .cm-global-fields h2,.klaro-ide .cm-global-fields h3,.klaro-ide .cm-global-fields h4,.klaro-ide .cm-config-controls h1,.klaro-ide .cm-config-controls h2,.klaro-ide .cm-config-controls h3,.klaro-ide .cm-config-controls h4,.klaro-ide .cm-translations-fields h1,.klaro-ide .cm-translations-fields h2,.klaro-ide .cm-translations-fields h3,.klaro-ide .cm-translations-fields h4,.klaro-ide .cm-service-fields h1,.klaro-ide .cm-service-fields h2,.klaro-ide .cm-service-fields h3,.klaro-ide .cm-service-fields h4{font-size:2em;text-transform:uppercase;margin-top:10px;margin-bottom:10px;font-weight:600}.klaro-ide .cm-json h1,.klaro-ide .cm-global-fields h1,.klaro-ide .cm-config-controls h1,.klaro-ide .cm-translations-fields h1,.klaro-ide .cm-service-fields h1{border-style:solid;border-style:var(--border-style, solid);border-width:1px;border-width:var(--border-width, 1px);border-color:#c8c8c8;border-color:var(--light2, #c8c8c8);text-transform:none;margin-bottom:20px;display:inline-block}.klaro-ide .cm-json h2,.klaro-ide .cm-global-fields h2,.klaro-ide .cm-config-controls h2,.klaro-ide .cm-translations-fields h2,.klaro-ide .cm-service-fields h2{font-size:1.6em}.klaro-ide .cm-json h3,.klaro-ide .cm-global-fields h3,.klaro-ide .cm-config-controls h3,.klaro-ide .cm-translations-fields h3,.klaro-ide .cm-service-fields h3{font-size:1.3em}.klaro-ide .cm-json h4,.klaro-ide .cm-global-fields h4,.klaro-ide .cm-config-controls h4,.klaro-ide .cm-translations-fields h4,.klaro-ide .cm-service-fields h4{font-size:1em;font-weight:600}.klaro-ide p.cm-section-description{color:#5c5c5c;color:var(--dark2, #5c5c5c);text-align:justify;margin-top:8px;margin-bottom:24px}.klaro-ide .cm-purpose-order ul{margin-top:12px;margin-bottom:12px}.klaro-ide .cm-purpose-order ul li{display:flex}.klaro-ide .cm-purpose-order ul li span.cm-buttons{border-radius:4px;border-radius:var(--border-radius, 4px);flex-grow:0;box-shadow:0 2px 5px 0 rgba(0,0,0,0.11)}.klaro-ide .cm-purpose-order ul li span.cm-buttons a{padding:12px;display:inline-block}.klaro-ide .cm-purpose-order ul li span.cm-buttons a:hover{background:#1a936f;background:var(--green1, #1a936f)}.klaro-ide .cm-purpose-order ul li span.cm-value{flex-grow:1;padding:12px}.klaro-ide .cm-translations-fields .cm-translations-for-key{border-radius:4px;border-radius:var(--border-radius, 4px);background-color:#fff;background-color:var(--white1, #fff);box-shadow:0 2px 5px 0 rgba(0,0,0,0.11);padding:12px;margin-bottom:24px}.klaro-ide .cm-translations-fields .cm-translations-for-key li{display:flex;justify-content:space-between;align-items:flex-start}.klaro-ide .cm-translations-fields .cm-translations-for-key li span.cm-lang{font-family:Courier;display:block;padding:20px;margin-top:5px;flex-grow:0}.klaro-ide .cm-service-list .cm-status,.klaro-ide .cm-config-list .cm-status{text-align:left}.klaro-ide .cm-service-list .cm-status span,.klaro-ide .cm-config-list .cm-status span{padding-left:10px}.klaro-ide .cm-service-list .cm-status .cm-status-is-active,.klaro-ide .cm-config-list .cm-status .cm-status-is-active{color:#1a936f;color:var(--green1, #1a936f)}.klaro-ide .cm-service-list .cm-status .cm-status-is-inactive,.klaro-ide .cm-config-list .cm-status .cm-status-is-inactive{color:#da2c43;color:var(--red1, #da2c43)}.klaro-ide .cm-service-list .cm-name,.klaro-ide .cm-config-list .cm-name{text-transform:uppercase;font-weight:600}.klaro-ide p.cm-no-cookies,.klaro-ide p.cm-no-services{margin-top:6px;margin-bottom:6px;font-weight:600}.klaro-ide .cm-cookie-config .cm-cookie-forms .cm-cookie-form{border-bottom-style:solid;border-bottom-style:var(--border-style, solid);border-bottom-width:1px;border-bottom-width:var(--border-width, 1px);border-bottom-color:#c8c8c8;border-bottom-color:var(--light2, #c8c8c8)}.klaro-ide .cm-demo .cm-config-controls .cm-retracting-label-input{width:auto;flex-grow:1;margin-right:12px}.klaro-ide .cm-demo .cm-config-controls:first-child{border-bottom-style:solid;border-bottom-style:var(--border-style, solid);border-bottom-width:1px;border-bottom-width:var(--border-width, 1px);border-bottom-color:#c8c8c8;border-bottom-color:var(--light2, #c8c8c8)}.klaro-ide .cm-config-controls{margin-top:8px;margin-bottom:24px;max-width:none;display:flex;flex-wrap:wrap;width:100%;align-items:baseline;justify-content:space-between}.klaro-ide .cm-config-controls h2{margin-right:24px;display:block;flex-grow:1}.klaro-ide .cm-config-controls .cm-control{flex-shrink:1;display:inline-block;margin-bottom:20px}.klaro-ide .cm-config-controls .cm-control .cm-retracting-label-input{max-width:400px;display:block}.klaro-ide .cm-config-controls .cm-control input{max-width:400px}.klaro-ide .cm-config-controls .cm-control select{border-color:#1a936f;border-color:var(--green1, #1a936f);border-radius:4px;border-radius:var(--border-radius, 4px);border-style:solid;border-style:var(--border-style, solid);border-radius:4px;border-radius:var(--border-radius, 4px);background-color:#fff;background-color:var(--white1, #fff);padding:12px;margin-bottom:12px;display:block}.klaro-ide .cm-config-controls .cm-control-button{border-radius:4px;border-radius:var(--border-radius, 4px);background-color:#459cdc;background-color:var(--blue2, #459cdc);color:#fff;color:var(--white1, #fff);border-style:none;padding:12px;margin-top:4px;cursor:pointer;box-shadow:0 2px 5px 0 rgba(0,0,0,0.33);margin-right:6px}.klaro-ide .cm-config-controls .cm-control-button.cm-delete{background-color:#e77887;background-color:var(--red3, #e77887);float:right}.klaro-ide .cm-config-controls .cm-control-button.cm-secondary{background-color:#e15669;background-color:var(--red2, #e15669)}.klaro-ide .cm-config-controls .cm-control-button.cm-success{background-color:#1a936f;background-color:var(--green1, #1a936f)}.klaro-ide .cm-config-controls .cm-control-button:disabled{background-color:#fafafa;background-color:var(--light1, #fafafa);color:#333;color:var(--dark1, #333);cursor:not-allowed}.klaro-ide .cookie-modal .cm-modal.cm-ide{background-color:#333;background-color:var(--dark1, #333);color:#fafafa;color:var(--light1, #fafafa);z-index:1001;box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19);width:100%;max-height:98%;top:50%;transform:translateY(-50%);position:fixed;overflow:auto}@media (min-width: 1020px){.klaro-ide .cookie-modal .cm-modal.cm-ide{border-radius:4px;border-radius:var(--border-radius, 4px);position:relative;margin:0 auto;max-width:1000px;height:auto;width:auto}}\n",
                '',
            ]),
                (e.exports = t);
        },
        function (e, t, r) {
            'use strict';
            r.r(t),
                r.d(t, 'renderIDE', function () {
                    return Eo;
                }),
                r.d(t, 'show', function () {
                    return No;
                }),
                r.d(t, 'version', function () {
                    return Ro;
                });
            var n = {};
            r.r(n),
                r.d(n, 'I18nInput', function () {
                    return pr;
                }),
                r.d(n, 'Input', function () {
                    return yr;
                }),
                r.d(n, 'BaseRetractingLabelInput', function () {
                    return br;
                }),
                r.d(n, 'RetractingLabelInput', function () {
                    return gr;
                }),
                r.d(n, 'LanguageSelect', function () {
                    return jr;
                }),
                r.d(n, 'Select', function () {
                    return Or;
                }),
                r.d(n, 'Switch', function () {
                    return zr;
                }),
                r.d(n, 'Range', function () {
                    return Mr;
                }),
                r.d(n, 'CookieForm', function () {
                    return Br;
                }),
                r.d(n, 'Cookies', function () {
                    return Fr;
                }),
                r.d(n, 'PurposeSelect', function () {
                    return $r;
                }),
                r.d(n, 'ServiceSelect', function () {
                    return rn;
                }),
                r.d(n, 'PurposeOrder', function () {
                    return an;
                }),
                r.d(n, 'ThemesSelect', function () {
                    return dn;
                });
            r(26), r(18);
            var o,
                i,
                a,
                c,
                l,
                s = {},
                u = [],
                d =
                    /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
            function p(e, t) {
                for (var r in t) e[r] = t[r];
                return e;
            }
            function f(e) {
                var t = e.parentNode;
                t && t.removeChild(e);
            }
            function m(e, t, r) {
                var n,
                    o = arguments,
                    i = {};
                for (n in t) 'key' !== n && 'ref' !== n && (i[n] = t[n]);
                if (arguments.length > 3)
                    for (r = [r], n = 3; n < arguments.length; n++)
                        r.push(o[n]);
                if (
                    (null != r && (i.children = r),
                    'function' == typeof e && null != e.defaultProps)
                )
                    for (n in e.defaultProps)
                        void 0 === i[n] && (i[n] = e.defaultProps[n]);
                return v(e, i, t && t.key, t && t.ref, null);
            }
            function v(e, t, r, n, i) {
                var a = {
                    type: e,
                    props: t,
                    key: r,
                    ref: n,
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
            function h(e) {
                return e.children;
            }
            function y(e, t) {
                (this.props = e), (this.context = t);
            }
            function b(e, t) {
                if (null == t)
                    return e.__ ? b(e.__, e.__.__k.indexOf(e) + 1) : null;
                for (var r; t < e.__k.length; t++)
                    if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
                return 'function' == typeof e.type ? b(e) : null;
            }
            function g(e) {
                var t, r;
                if (null != (e = e.__) && null != e.__c) {
                    for (
                        e.__e = e.__c.base = null, t = 0;
                        t < e.__k.length;
                        t++
                    )
                        if (null != (r = e.__k[t]) && null != r.__e) {
                            e.__e = e.__c.base = r.__e;
                            break;
                        }
                    return g(e);
                }
            }
            function k(e) {
                ((!e.__d && (e.__d = !0) && i.push(e) && !w.__r++) ||
                    c !== o.debounceRendering) &&
                    ((c = o.debounceRendering) || a)(w);
            }
            function w() {
                for (var e; (w.__r = i.length); )
                    (e = i.sort(function (e, t) {
                        return e.__v.__b - t.__v.__b;
                    })),
                        (i = []),
                        e.some(function (e) {
                            var t, r, n, o, i, a, c;
                            e.__d &&
                                ((a = (i = (t = e).__v).__e),
                                (c = t.__P) &&
                                    ((r = []),
                                    ((n = p({}, i)).__v = n),
                                    (o = z(
                                        c,
                                        i,
                                        n,
                                        t.__n,
                                        void 0 !== c.ownerSVGElement,
                                        null,
                                        r,
                                        null == a ? b(i) : a
                                    )),
                                    C(r, i),
                                    o != a && g(i)));
                        });
            }
            function x(e, t, r, n, o, i, a, c, l, d) {
                var p,
                    m,
                    y,
                    g,
                    k,
                    w,
                    x,
                    _ = (n && n.__k) || u,
                    j = _.length;
                for (
                    l == s && (l = null != a ? a[0] : j ? b(n, 0) : null),
                        r.__k = [],
                        p = 0;
                    p < t.length;
                    p++
                )
                    if (
                        null !=
                        (g = r.__k[p] =
                            null == (g = t[p]) || 'boolean' == typeof g
                                ? null
                                : 'string' == typeof g || 'number' == typeof g
                                ? v(null, g, null, null, g)
                                : Array.isArray(g)
                                ? v(h, { children: g }, null, null, null)
                                : null != g.__e || null != g.__c
                                ? v(g.type, g.props, g.key, null, g.__v)
                                : g)
                    ) {
                        if (
                            ((g.__ = r),
                            (g.__b = r.__b + 1),
                            null === (y = _[p]) ||
                                (y && g.key == y.key && g.type === y.type))
                        )
                            _[p] = void 0;
                        else
                            for (m = 0; m < j; m++) {
                                if (
                                    (y = _[m]) &&
                                    g.key == y.key &&
                                    g.type === y.type
                                ) {
                                    _[m] = void 0;
                                    break;
                                }
                                y = null;
                            }
                        (k = z(e, g, (y = y || s), o, i, a, c, l, d)),
                            (m = g.ref) &&
                                y.ref != m &&
                                (x || (x = []),
                                y.ref && x.push(y.ref, null, g),
                                x.push(m, g.__c || k, g)),
                            null != k
                                ? (null == w && (w = k),
                                  (l = S(e, g, y, _, a, k, l)),
                                  d || 'option' != r.type
                                      ? 'function' == typeof r.type &&
                                        (r.__d = l)
                                      : (e.value = ''))
                                : l &&
                                  y.__e == l &&
                                  l.parentNode != e &&
                                  (l = b(y));
                    }
                if (((r.__e = w), null != a && 'function' != typeof r.type))
                    for (p = a.length; p--; ) null != a[p] && f(a[p]);
                for (p = j; p--; ) null != _[p] && R(_[p], _[p]);
                if (x) for (p = 0; p < x.length; p++) N(x[p], x[++p], x[++p]);
            }
            function _(e) {
                return null == e || 'boolean' == typeof e
                    ? []
                    : Array.isArray(e)
                    ? u.concat.apply([], e.map(_))
                    : [e];
            }
            function S(e, t, r, n, o, i, a) {
                var c, l, s;
                if (void 0 !== t.__d) (c = t.__d), (t.__d = void 0);
                else if (o == r || i != a || null == i.parentNode)
                    e: if (null == a || a.parentNode !== e)
                        e.appendChild(i), (c = null);
                    else {
                        for (
                            l = a, s = 0;
                            (l = l.nextSibling) && s < n.length;
                            s += 2
                        )
                            if (l == i) break e;
                        e.insertBefore(i, a), (c = a);
                    }
                return void 0 !== c ? c : i.nextSibling;
            }
            function j(e, t, r) {
                '-' === t[0]
                    ? e.setProperty(t, r)
                    : (e[t] =
                          'number' == typeof r && !1 === d.test(t)
                              ? r + 'px'
                              : null == r
                              ? ''
                              : r);
            }
            function O(e, t, r, n, o) {
                var i, a, c, l, s;
                if (
                    (o
                        ? 'className' === t && (t = 'class')
                        : 'class' === t && (t = 'className'),
                    'style' === t)
                )
                    if (((i = e.style), 'string' == typeof r)) i.cssText = r;
                    else {
                        if (
                            ('string' == typeof n &&
                                ((i.cssText = ''), (n = null)),
                            n)
                        )
                            for (l in n) (r && l in r) || j(i, l, '');
                        if (r)
                            for (s in r) (n && r[s] === n[s]) || j(i, s, r[s]);
                    }
                else
                    'o' === t[0] && 'n' === t[1]
                        ? ((a = t !== (t = t.replace(/Capture$/, ''))),
                          (c = t.toLowerCase()),
                          (t = (c in e ? c : t).slice(2)),
                          r
                              ? (n || e.addEventListener(t, A, a),
                                ((e.l || (e.l = {}))[t] = r))
                              : e.removeEventListener(t, A, a))
                        : 'list' !== t &&
                          'tagName' !== t &&
                          'form' !== t &&
                          'type' !== t &&
                          'size' !== t &&
                          'download' !== t &&
                          !o &&
                          t in e
                        ? (e[t] = null == r ? '' : r)
                        : 'function' != typeof r &&
                          'dangerouslySetInnerHTML' !== t &&
                          (t !== (t = t.replace(/^xlink:?/, ''))
                              ? null == r || !1 === r
                                  ? e.removeAttributeNS(
                                        'http://www.w3.org/1999/xlink',
                                        t.toLowerCase()
                                    )
                                  : e.setAttributeNS(
                                        'http://www.w3.org/1999/xlink',
                                        t.toLowerCase(),
                                        r
                                    )
                              : null == r || (!1 === r && !/^ar/.test(t))
                              ? e.removeAttribute(t)
                              : e.setAttribute(t, r));
            }
            function A(e) {
                this.l[e.type](o.event ? o.event(e) : e);
            }
            function P(e, t, r) {
                var n, o;
                for (n = 0; n < e.__k.length; n++)
                    (o = e.__k[n]) &&
                        ((o.__ = e),
                        o.__e &&
                            ('function' == typeof o.type &&
                                o.__k.length > 1 &&
                                P(o, t, r),
                            (t = S(r, o, o, e.__k, null, o.__e, t)),
                            'function' == typeof e.type && (e.__d = t)));
            }
            function z(e, t, r, n, i, a, c, l, s) {
                var u,
                    d,
                    f,
                    m,
                    v,
                    b,
                    g,
                    k,
                    w,
                    _,
                    S,
                    j = t.type;
                if (void 0 !== t.constructor) return null;
                (u = o.__b) && u(t);
                try {
                    e: if ('function' == typeof j) {
                        if (
                            ((k = t.props),
                            (w = (u = j.contextType) && n[u.__c]),
                            (_ = u ? (w ? w.props.value : u.__) : n),
                            r.__c
                                ? (g = (d = t.__c = r.__c).__ = d.__E)
                                : ('prototype' in j && j.prototype.render
                                      ? (t.__c = d = new j(k, _))
                                      : ((t.__c = d = new y(k, _)),
                                        (d.constructor = j),
                                        (d.render = I)),
                                  w && w.sub(d),
                                  (d.props = k),
                                  d.state || (d.state = {}),
                                  (d.context = _),
                                  (d.__n = n),
                                  (f = d.__d = !0),
                                  (d.__h = [])),
                            null == d.__s && (d.__s = d.state),
                            null != j.getDerivedStateFromProps &&
                                (d.__s == d.state && (d.__s = p({}, d.__s)),
                                p(d.__s, j.getDerivedStateFromProps(k, d.__s))),
                            (m = d.props),
                            (v = d.state),
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
                                    d.componentWillReceiveProps(k, _),
                                (!d.__e &&
                                    null != d.shouldComponentUpdate &&
                                    !1 ===
                                        d.shouldComponentUpdate(k, d.__s, _)) ||
                                    t.__v === r.__v)
                            ) {
                                (d.props = k),
                                    (d.state = d.__s),
                                    t.__v !== r.__v && (d.__d = !1),
                                    (d.__v = t),
                                    (t.__e = r.__e),
                                    (t.__k = r.__k),
                                    d.__h.length && c.push(d),
                                    P(t, l, e);
                                break e;
                            }
                            null != d.componentWillUpdate &&
                                d.componentWillUpdate(k, d.__s, _),
                                null != d.componentDidUpdate &&
                                    d.__h.push(function () {
                                        d.componentDidUpdate(m, v, b);
                                    });
                        }
                        (d.context = _),
                            (d.props = k),
                            (d.state = d.__s),
                            (u = o.__r) && u(t),
                            (d.__d = !1),
                            (d.__v = t),
                            (d.__P = e),
                            (u = d.render(d.props, d.state, d.context)),
                            (d.state = d.__s),
                            null != d.getChildContext &&
                                (n = p(p({}, n), d.getChildContext())),
                            f ||
                                null == d.getSnapshotBeforeUpdate ||
                                (b = d.getSnapshotBeforeUpdate(m, v)),
                            (S =
                                null != u && u.type == h && null == u.key
                                    ? u.props.children
                                    : u),
                            x(
                                e,
                                Array.isArray(S) ? S : [S],
                                t,
                                r,
                                n,
                                i,
                                a,
                                c,
                                l,
                                s
                            ),
                            (d.base = t.__e),
                            d.__h.length && c.push(d),
                            g && (d.__E = d.__ = null),
                            (d.__e = !1);
                    } else
                        null == a && t.__v === r.__v
                            ? ((t.__k = r.__k), (t.__e = r.__e))
                            : (t.__e = E(r.__e, t, r, n, i, a, c, s));
                    (u = o.diffed) && u(t);
                } catch (e) {
                    (t.__v = null), o.__e(e, t, r);
                }
                return t.__e;
            }
            function C(e, t) {
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
            function E(e, t, r, n, o, i, a, c) {
                var l,
                    d,
                    p,
                    f,
                    m,
                    v = r.props,
                    h = t.props;
                if (((o = 'svg' === t.type || o), null != i))
                    for (l = 0; l < i.length; l++)
                        if (
                            null != (d = i[l]) &&
                            ((null === t.type
                                ? 3 === d.nodeType
                                : d.localName === t.type) ||
                                e == d)
                        ) {
                            (e = d), (i[l] = null);
                            break;
                        }
                if (null == e) {
                    if (null === t.type) return document.createTextNode(h);
                    (e = o
                        ? document.createElementNS(
                              'http://www.w3.org/2000/svg',
                              t.type
                          )
                        : document.createElement(t.type, h.is && { is: h.is })),
                        (i = null),
                        (c = !1);
                }
                if (null === t.type) v !== h && e.data !== h && (e.data = h);
                else {
                    if (
                        (null != i && (i = u.slice.call(e.childNodes)),
                        (p = (v = r.props || s).dangerouslySetInnerHTML),
                        (f = h.dangerouslySetInnerHTML),
                        !c)
                    ) {
                        if (null != i)
                            for (v = {}, m = 0; m < e.attributes.length; m++)
                                v[e.attributes[m].name] = e.attributes[m].value;
                        (f || p) &&
                            ((f && p && f.__html == p.__html) ||
                                (e.innerHTML = (f && f.__html) || ''));
                    }
                    (function (e, t, r, n, o) {
                        var i;
                        for (i in r)
                            'children' === i ||
                                'key' === i ||
                                i in t ||
                                O(e, i, null, r[i], n);
                        for (i in t)
                            (o && 'function' != typeof t[i]) ||
                                'children' === i ||
                                'key' === i ||
                                'value' === i ||
                                'checked' === i ||
                                r[i] === t[i] ||
                                O(e, i, t[i], r[i], n);
                    })(e, h, v, o, c),
                        f
                            ? (t.__k = [])
                            : ((l = t.props.children),
                              x(
                                  e,
                                  Array.isArray(l) ? l : [l],
                                  t,
                                  r,
                                  n,
                                  'foreignObject' !== t.type && o,
                                  i,
                                  a,
                                  s,
                                  c
                              )),
                        c ||
                            ('value' in h &&
                                void 0 !== (l = h.value) &&
                                l !== e.value &&
                                O(e, 'value', l, v.value, !1),
                            'checked' in h &&
                                void 0 !== (l = h.checked) &&
                                l !== e.checked &&
                                O(e, 'checked', l, v.checked, !1));
                }
                return e;
            }
            function N(e, t, r) {
                try {
                    'function' == typeof e ? e(t) : (e.current = t);
                } catch (e) {
                    o.__e(e, r);
                }
            }
            function R(e, t, r) {
                var n, i, a;
                if (
                    (o.unmount && o.unmount(e),
                    (n = e.ref) &&
                        ((n.current && n.current !== e.__e) || N(n, null, t)),
                    r ||
                        'function' == typeof e.type ||
                        (r = null != (i = e.__e)),
                    (e.__e = e.__d = void 0),
                    null != (n = e.__c))
                ) {
                    if (n.componentWillUnmount)
                        try {
                            n.componentWillUnmount();
                        } catch (e) {
                            o.__e(e, t);
                        }
                    n.base = n.__P = null;
                }
                if ((n = e.__k))
                    for (a = 0; a < n.length; a++) n[a] && R(n[a], t, r);
                null != i && f(i);
            }
            function I(e, t, r) {
                return this.constructor(e, r);
            }
            function T(e, t, r) {
                var n, i, a;
                o.__ && o.__(e, t),
                    (i = (n = r === l) ? null : (r && r.__k) || t.__k),
                    (e = m(h, null, [e])),
                    (a = []),
                    z(
                        t,
                        ((n ? t : r || t).__k = e),
                        i || s,
                        s,
                        void 0 !== t.ownerSVGElement,
                        r && !n
                            ? [r]
                            : i
                            ? null
                            : t.childNodes.length
                            ? u.slice.call(t.childNodes)
                            : null,
                        a,
                        r || s,
                        n
                    ),
                    C(a, e);
            }
            (o = {
                __e: function (e, t) {
                    for (var r, n; (t = t.__); )
                        if ((r = t.__c) && !r.__)
                            try {
                                if (
                                    (r.constructor &&
                                        null !=
                                            r.constructor
                                                .getDerivedStateFromError &&
                                        ((n = !0),
                                        r.setState(
                                            r.constructor.getDerivedStateFromError(
                                                e
                                            )
                                        )),
                                    null != r.componentDidCatch &&
                                        ((n = !0), r.componentDidCatch(e)),
                                    n)
                                )
                                    return k((r.__E = r));
                            } catch (t) {
                                e = t;
                            }
                    throw e;
                },
            }),
                (y.prototype.setState = function (e, t) {
                    var r;
                    (r =
                        null != this.__s && this.__s !== this.state
                            ? this.__s
                            : (this.__s = p({}, this.state))),
                        'function' == typeof e && (e = e(r, this.props)),
                        e && p(r, e),
                        null != e &&
                            this.__v &&
                            (t && this.__h.push(t), k(this));
                }),
                (y.prototype.forceUpdate = function (e) {
                    this.__v &&
                        ((this.__e = !0), e && this.__h.push(e), k(this));
                }),
                (y.prototype.render = h),
                (i = []),
                (a =
                    'function' == typeof Promise
                        ? Promise.prototype.then.bind(Promise.resolve())
                        : setTimeout),
                (w.__r = 0),
                (l = s);
            var D,
                M,
                L,
                q = 0,
                U = [],
                B = o.__r,
                F = o.diffed,
                H = o.__c,
                K = o.unmount;
            function W(e, t) {
                o.__h && o.__h(M, e, q || t), (q = 0);
                var r = M.__H || (M.__H = { __: [], __h: [] });
                return e >= r.__.length && r.__.push({}), r.__[e];
            }
            function V(e) {
                return (q = 1), $(re, e);
            }
            function $(e, t, r) {
                var n = W(D++, 2);
                return (
                    (n.t = e),
                    n.__c ||
                        ((n.__c = M),
                        (n.__ = [
                            r ? r(t) : re(void 0, t),
                            function (e) {
                                var t = n.t(n.__[0], e);
                                n.__[0] !== t &&
                                    ((n.__ = [t, n.__[1]]), n.__c.setState({}));
                            },
                        ])),
                    n.__
                );
            }
            function G(e, t) {
                var r = W(D++, 3);
                !o.__s &&
                    te(r.__H, t) &&
                    ((r.__ = e), (r.__H = t), M.__H.__h.push(r));
            }
            function Z(e) {
                return (
                    (q = 5),
                    Y(function () {
                        return { current: void 0 === e ? null : e };
                    }, [])
                );
            }
            function Y(e, t) {
                var r = W(D++, 7);
                return te(r.__H, t)
                    ? ((r.__H = t), (r.__h = e), (r.__ = e()))
                    : r.__;
            }
            function J() {
                U.some(function (e) {
                    if (e.__P)
                        try {
                            e.__H.__h.forEach(Q),
                                e.__H.__h.forEach(ee),
                                (e.__H.__h = []);
                        } catch (t) {
                            return (e.__H.__h = []), o.__e(t, e.__v), !0;
                        }
                }),
                    (U = []);
            }
            (o.__r = function (e) {
                B && B(e), (D = 0);
                var t = (M = e.__c).__H;
                t && (t.__h.forEach(Q), t.__h.forEach(ee), (t.__h = []));
            }),
                (o.diffed = function (e) {
                    F && F(e);
                    var t = e.__c;
                    t &&
                        t.__H &&
                        t.__H.__h.length &&
                        ((1 !== U.push(t) && L === o.requestAnimationFrame) ||
                            (
                                (L = o.requestAnimationFrame) ||
                                function (e) {
                                    var t,
                                        r = function () {
                                            clearTimeout(n),
                                                X && cancelAnimationFrame(t),
                                                setTimeout(e);
                                        },
                                        n = setTimeout(r, 100);
                                    X && (t = requestAnimationFrame(r));
                                }
                            )(J));
                }),
                (o.__c = function (e, t) {
                    t.some(function (e) {
                        try {
                            e.__h.forEach(Q),
                                (e.__h = e.__h.filter(function (e) {
                                    return !e.__ || ee(e);
                                }));
                        } catch (r) {
                            t.some(function (e) {
                                e.__h && (e.__h = []);
                            }),
                                (t = []),
                                o.__e(r, e.__v);
                        }
                    }),
                        H && H(e, t);
                }),
                (o.unmount = function (e) {
                    K && K(e);
                    var t = e.__c;
                    if (t && t.__H)
                        try {
                            t.__H.__.forEach(Q);
                        } catch (e) {
                            o.__e(e, t.__v);
                        }
                });
            var X = 'function' == typeof requestAnimationFrame;
            function Q(e) {
                'function' == typeof e.u && e.u();
            }
            function ee(e) {
                e.u = e.__();
            }
            function te(e, t) {
                return (
                    !e ||
                    t.some(function (t, r) {
                        return t !== e[r];
                    })
                );
            }
            function re(e, t) {
                return 'function' == typeof t ? t(e) : t;
            }
            function ne(e, t) {
                for (var r in t) e[r] = t[r];
                return e;
            }
            function oe(e, t) {
                for (var r in e) if ('__source' !== r && !(r in t)) return !0;
                for (var n in t)
                    if ('__source' !== n && e[n] !== t[n]) return !0;
                return !1;
            }
            !(function (e) {
                var t, r;
                function n(t) {
                    var r;
                    return (
                        ((r = e.call(this, t) || this).isPureReactComponent =
                            !0),
                        r
                    );
                }
                (r = e),
                    ((t = n).prototype = Object.create(r.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = r),
                    (n.prototype.shouldComponentUpdate = function (e, t) {
                        return oe(this.props, e) || oe(this.state, t);
                    });
            })(y);
            var ie = o.__b;
            o.__b = function (e) {
                e.type &&
                    e.type.t &&
                    e.ref &&
                    ((e.props.ref = e.ref), (e.ref = null)),
                    ie && ie(e);
            };
            'undefined' != typeof Symbol &&
                Symbol.for &&
                Symbol.for('react.forward_ref');
            var ae = o.__e;
            function ce(e) {
                return (
                    e &&
                        (((e = ne({}, e)).__c = null),
                        (e.__k = e.__k && e.__k.map(ce))),
                    e
                );
            }
            function le(e) {
                return (
                    e && ((e.__v = null), (e.__k = e.__k && e.__k.map(le))), e
                );
            }
            function se() {
                (this.__u = 0), (this.o = null), (this.__b = null);
            }
            function ue(e) {
                var t = e.__.__c;
                return t && t.u && t.u(e);
            }
            function de() {
                (this.i = null), (this.l = null);
            }
            (o.__e = function (e, t, r) {
                if (e.then)
                    for (var n, o = t; (o = o.__); )
                        if ((n = o.__c) && n.__c)
                            return (
                                null == t.__e &&
                                    ((t.__e = r.__e), (t.__k = r.__k)),
                                n.__c(e, t.__c)
                            );
                ae(e, t, r);
            }),
                ((se.prototype = new y()).__c = function (e, t) {
                    var r = this;
                    null == r.o && (r.o = []), r.o.push(t);
                    var n = ue(r.__v),
                        o = !1,
                        i = function () {
                            o ||
                                ((o = !0),
                                (t.componentWillUnmount = t.__c),
                                n ? n(a) : a());
                        };
                    (t.__c = t.componentWillUnmount),
                        (t.componentWillUnmount = function () {
                            i(), t.__c && t.__c();
                        });
                    var a = function () {
                        var e;
                        if (!--r.__u)
                            for (
                                r.__v.__k[0] = le(r.state.u),
                                    r.setState({ u: (r.__b = null) });
                                (e = r.o.pop());

                            )
                                e.forceUpdate();
                    };
                    r.__u++ || r.setState({ u: (r.__b = r.__v.__k[0]) }),
                        e.then(i, i);
                }),
                (se.prototype.componentWillUnmount = function () {
                    this.o = [];
                }),
                (se.prototype.render = function (e, t) {
                    return (
                        this.__b &&
                            (this.__v.__k && (this.__v.__k[0] = ce(this.__b)),
                            (this.__b = null)),
                        [m(h, null, t.u ? null : e.children), t.u && e.fallback]
                    );
                });
            var pe = function (e, t, r) {
                if (
                    (++r[1] === r[0] && e.l.delete(t),
                    e.props.revealOrder &&
                        ('t' !== e.props.revealOrder[0] || !e.l.size))
                )
                    for (r = e.i; r; ) {
                        for (; r.length > 3; ) r.pop()();
                        if (r[1] < r[0]) break;
                        e.i = r = r[2];
                    }
            };
            ((de.prototype = new y()).u = function (e) {
                var t = this,
                    r = ue(t.__v),
                    n = t.l.get(e);
                return (
                    n[0]++,
                    function (o) {
                        var i = function () {
                            t.props.revealOrder
                                ? (n.push(o), pe(t, e, n))
                                : o();
                        };
                        r ? r(i) : i();
                    }
                );
            }),
                (de.prototype.render = function (e) {
                    (this.i = null), (this.l = new Map());
                    var t = _(e.children);
                    e.revealOrder && 'b' === e.revealOrder[0] && t.reverse();
                    for (var r = t.length; r--; )
                        this.l.set(t[r], (this.i = [1, 0, this.i]));
                    return e.children;
                }),
                (de.prototype.componentDidUpdate =
                    de.prototype.componentDidMount =
                        function () {
                            var e = this;
                            e.l.forEach(function (t, r) {
                                pe(e, r, t);
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
            var fe =
                /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
            y.prototype.isReactComponent = {};
            var me =
                ('undefined' != typeof Symbol &&
                    Symbol.for &&
                    Symbol.for('react.element')) ||
                60103;
            function ve(e, t, r) {
                if (null == t.__k)
                    for (; t.firstChild; ) t.removeChild(t.firstChild);
                return T(e, t), 'function' == typeof r && r(), e ? e.__c : null;
            }
            var he = o.event;
            function ye(e, t) {
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
                he && (e = he(e)), (e.persist = function () {});
                var t = !1,
                    r = !1,
                    n = e.stopPropagation;
                e.stopPropagation = function () {
                    n.call(e), (t = !0);
                };
                var o = e.preventDefault;
                return (
                    (e.preventDefault = function () {
                        o.call(e), (r = !0);
                    }),
                    (e.isPropagationStopped = function () {
                        return t;
                    }),
                    (e.isDefaultPrevented = function () {
                        return r;
                    }),
                    (e.nativeEvent = e)
                );
            };
            var be = {
                    configurable: !0,
                    get: function () {
                        return this.class;
                    },
                },
                ge = o.vnode;
            o.vnode = function (e) {
                e.$$typeof = me;
                var t = e.type,
                    r = e.props;
                if (t) {
                    if (
                        (r.class != r.className &&
                            ((be.enumerable = 'className' in r),
                            null != r.className && (r.class = r.className),
                            Object.defineProperty(r, 'className', be)),
                        'function' != typeof t)
                    ) {
                        var n, o, i;
                        for (i in (r.defaultValue &&
                            void 0 !== r.value &&
                            (r.value ||
                                0 === r.value ||
                                (r.value = r.defaultValue),
                            delete r.defaultValue),
                        Array.isArray(r.value) &&
                            r.multiple &&
                            'select' === t &&
                            (_(r.children).forEach(function (e) {
                                -1 != r.value.indexOf(e.props.value) &&
                                    (e.props.selected = !0);
                            }),
                            delete r.value),
                        !0 === r.download && (r.download = ''),
                        r))
                            if ((n = fe.test(i))) break;
                        if (n)
                            for (i in ((o = e.props = {}), r))
                                o[
                                    fe.test(i)
                                        ? i
                                              .replace(/[A-Z0-9]/, '-$&')
                                              .toLowerCase()
                                        : i
                                ] = r[i];
                    }
                    !(function (t) {
                        var r = e.type,
                            n = e.props;
                        if (n && 'string' == typeof r) {
                            var o = {};
                            for (var i in n)
                                /^on(Ani|Tra|Tou)/.test(i) &&
                                    ((n[i.toLowerCase()] = n[i]), delete n[i]),
                                    (o[i.toLowerCase()] = i);
                            if (
                                (o.ondoubleclick &&
                                    ((n.ondblclick = n[o.ondoubleclick]),
                                    delete n[o.ondoubleclick]),
                                o.onbeforeinput &&
                                    ((n.onbeforeinput = n[o.onbeforeinput]),
                                    delete n[o.onbeforeinput]),
                                o.onchange &&
                                    ('textarea' === r ||
                                        ('input' === r.toLowerCase() &&
                                            !/^fil|che|ra/i.test(n.type))))
                            ) {
                                var a = o.oninput || 'oninput';
                                n[a] ||
                                    ((n[a] = n[o.onchange]),
                                    delete n[o.onchange]);
                            }
                        }
                    })(),
                        'function' == typeof t &&
                            !t.m &&
                            t.prototype &&
                            (ye(t.prototype, 'componentWillMount'),
                            ye(t.prototype, 'componentWillReceiveProps'),
                            ye(t.prototype, 'componentWillUpdate'),
                            (t.m = !0));
                }
                ge && ge(e);
            };
            var ke = m,
                we = function () {
                    return { current: null };
                },
                xe = h,
                _e = y,
                Se =
                    (r(7),
                    r(12),
                    r(14),
                    r(53),
                    r(128),
                    r(102),
                    r(20),
                    r(6),
                    r(23),
                    r(17),
                    r(170),
                    r(137),
                    r(138),
                    r(42),
                    r(10),
                    r(54),
                    r(15),
                    r(13),
                    r(143),
                    r(110),
                    r(16),
                    r(43),
                    r(44),
                    r(129),
                    r(98),
                    r(171),
                    r(29)),
                je = r.n(Se),
                Oe = function (e) {
                    var t = e.t;
                    return ke(
                        'svg',
                        {
                            role: 'img',
                            'aria-label': t(['close']),
                            width: '12',
                            height: '12',
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg',
                        },
                        ke('title', null, t(['close'])),
                        ke('line', {
                            x1: '1',
                            y1: '11',
                            x2: '11',
                            y2: '1',
                            strokeWidth: '1',
                        }),
                        ke('line', {
                            x1: '1',
                            y1: '1',
                            x2: '11',
                            y2: '11',
                            strokeWidth: '1',
                        })
                    );
                };
            Oe.propTypes = { t: je.a.func };
            r(72);
            function Ae(e) {
                return e
                    .split('-')
                    .map(function (e) {
                        return e.slice(0, 1).toUpperCase() + e.slice(1);
                    })
                    .join(' ');
            }
            r(94), r(186), r(187);
            function Pe(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return ze(e);
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
                        if ('string' == typeof e) return ze(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ('Map' === r || 'Set' === r) return Array.from(e);
                        if (
                            'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return ze(e, t);
                    })(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function ze(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
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
            var Ee = function (e) {
                for (
                    var t = arguments.length,
                        r = new Array(t > 1 ? t - 1 : 0),
                        n = 1;
                    n < t;
                    n++
                )
                    r[n - 1] = arguments[n];
                var o,
                    i = Ce(r[0]);
                o =
                    0 === r.length
                        ? {}
                        : 'string' === i || 'number' === i
                        ? Array.prototype.slice.call(r)
                        : r[0];
                for (var a = [], c = e.toString(); c.length > 0; ) {
                    var l = c.match(/\{(?!\{)([\w\d]+)\}(?!\})/);
                    if (null !== l) {
                        var s = c.substr(0, l.index);
                        c = c.substr(l.index + l[0].length);
                        var u = parseInt(l[1]);
                        a.push(s), u != u ? a.push(o[l[1]]) : a.push(o[u]);
                    } else a.push(c), (c = '');
                }
                return a;
            };
            function Ne(e) {
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
                    r = new RegExp('^([\\w]+)-([\\w]+)$').exec(t);
                return null === r ? t : r[1];
            }
            function Re(e, t, r) {
                var n = t;
                Array.isArray(n) || (n = [n]);
                for (var o = e, i = 0; i < n.length; i++) {
                    if (void 0 === o) return r;
                    if (void 0 !== n[i] && n[i].endsWith('?')) {
                        var a = n[i].slice(0, n[i].length - 1),
                            c = void 0;
                        void 0 !== (c = o instanceof Map ? o.get(a) : o[a]) &&
                            'string' == typeof c &&
                            (o = c);
                    } else o = o instanceof Map ? o.get(n[i]) : o[n[i]];
                }
                return void 0 === o || 'string' != typeof o
                    ? r
                    : '' !== o
                    ? o
                    : void 0;
            }
            function Ie(e, t, r, n) {
                var o = n,
                    i = !1;
                '!' === o[0] && ((o = o.slice(1)), (i = !0)),
                    Array.isArray(o) || (o = [o]);
                var a = Re(e, [t].concat(Pe(o)));
                if (
                    (void 0 === a &&
                        void 0 !== r &&
                        (a = Re(e, [r].concat(Pe(o)))),
                    void 0 === a)
                ) {
                    if (i) return;
                    return [
                        '[missing translation: '
                            .concat(t, '/')
                            .concat(o.join('/'), ']'),
                    ];
                }
                for (
                    var c = arguments.length,
                        l = new Array(c > 4 ? c - 4 : 0),
                        s = 4;
                    s < c;
                    s++
                )
                    l[s - 4] = arguments[s];
                return l.length > 0 ? Ee.apply(void 0, [a].concat(l)) : a;
            }
            var Te = function (e) {
                var t = e.text,
                    r = e.config;
                if ((t instanceof Array || (t = [t]), !0 === r.htmlTexts)) {
                    var n = !1;
                    '<' === t[0][0] && (n = !0);
                    var o = t.map(function (e, t) {
                        return 'string' == typeof e
                            ? ke('span', {
                                  key: t,
                                  dangerouslySetInnerHTML: { __html: e },
                              })
                            : e;
                    });
                    return ke(n ? xe : 'span', null, o);
                }
                return ke('span', null, t);
            };
            function De(e) {
                return (De =
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
            function Me() {
                return (Me =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) &&
                                    (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function Le(e, t) {
                if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
            }
            function qe(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function Ue(e, t) {
                return (Ue =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function Be(e) {
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
                    var r,
                        n = He(e);
                    if (t) {
                        var o = He(this).constructor;
                        r = Reflect.construct(n, arguments, o);
                    } else r = n.apply(this, arguments);
                    return Fe(this, r);
                };
            }
            function Fe(e, t) {
                return !t || ('object' !== De(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return e;
                      })(e)
                    : t;
            }
            function He(e) {
                return (He = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var Ke = (function (e) {
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
                        t && Ue(e, t);
                })(i, e);
                var t,
                    r,
                    n,
                    o = Be(i);
                function i() {
                    return Le(this, i), o.apply(this, arguments);
                }
                return (
                    (t = i),
                    (r = [
                        {
                            key: 'render',
                            value: function () {
                                var e,
                                    t,
                                    r = this.props,
                                    n = r.checked,
                                    o = r.onlyRequiredEnabled,
                                    i = r.onToggle,
                                    a = r.name,
                                    c = r.lang,
                                    l = r.config,
                                    s = r.translations,
                                    u = r.title,
                                    d = r.description,
                                    p = r.visible,
                                    f = r.t,
                                    m = this.props.required || !1,
                                    v = this.props.optOut || !1,
                                    h = this.props.purposes || [],
                                    y = this.props.tags || [],
                                    b = 'service-item-'.concat(a),
                                    g = ''.concat(b, '-title'),
                                    k = h
                                        .map(function (e) {
                                            return (
                                                f([
                                                    '!',
                                                    'purposes',
                                                    e,
                                                    'title?',
                                                ]) || Ae(e)
                                            );
                                        })
                                        .join(', '),
                                    w = v
                                        ? ke(
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
                                        ? ke(
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
                                    _ = y.map(function (e) {
                                        return ke(
                                            'span',
                                            { key: '{tag}' },
                                            f(['service', 'tags', e])
                                        );
                                    });
                                y.length > 0 &&
                                    (e = ke(
                                        'span',
                                        { className: 'cm-required' },
                                        _
                                    )),
                                    h.length > 0 &&
                                        (t = ke(
                                            'p',
                                            { className: 'purposes' },
                                            f([
                                                'service',
                                                h.length > 1
                                                    ? 'purposes'
                                                    : 'purpose',
                                            ]),
                                            ': ',
                                            k
                                        ));
                                var S =
                                    d ||
                                    Ie(s, c, 'zz', ['!', 'description']) ||
                                    f(['!', a, 'description?']);
                                return ke(
                                    'div',
                                    null,
                                    ke('input', {
                                        id: b,
                                        className:
                                            'cm-list-input' +
                                            (m ? ' required' : '') +
                                            (o
                                                ? ' half-checked only-required'
                                                : ''),
                                        'aria-labelledby': ''.concat(g),
                                        'aria-describedby': ''.concat(
                                            b,
                                            '-description'
                                        ),
                                        disabled: m,
                                        checked: n || m,
                                        tabIndex: p ? '0' : '-1',
                                        type: 'checkbox',
                                        onChange: function (e) {
                                            i(e.target.checked);
                                        },
                                    }),
                                    ke(
                                        'label',
                                        Me(
                                            {
                                                htmlFor: b,
                                                className: 'cm-list-label',
                                            },
                                            m ? { tabIndex: '0' } : {}
                                        ),
                                        ke(
                                            'span',
                                            {
                                                className: 'cm-list-title',
                                                id: ''.concat(g),
                                            },
                                            u ||
                                                Ie(s, c, 'zz', [
                                                    '!',
                                                    'title',
                                                ]) ||
                                                f(['!', a, 'title?']) ||
                                                Ae(a)
                                        ),
                                        x,
                                        w,
                                        e,
                                        ke(
                                            'span',
                                            { className: 'cm-switch' },
                                            ke('div', {
                                                className:
                                                    'slider round active',
                                            })
                                        )
                                    ),
                                    ke(
                                        'div',
                                        { id: ''.concat(b, '-description') },
                                        S &&
                                            ke(
                                                'p',
                                                {
                                                    className:
                                                        'cm-list-description',
                                                },
                                                ke(Te, { config: l, text: S })
                                            ),
                                        t
                                    )
                                );
                            },
                        },
                    ]) && qe(t.prototype, r),
                    n && qe(t, n),
                    i
                );
            })(_e);
            function We(e) {
                return (We =
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
            function Ve(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function $e(e, t) {
                return ($e =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function Ge(e) {
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
                    var r,
                        n = Je(e);
                    if (t) {
                        var o = Je(this).constructor;
                        r = Reflect.construct(n, arguments, o);
                    } else r = n.apply(this, arguments);
                    return Ze(this, r);
                };
            }
            function Ze(e, t) {
                return !t || ('object' !== We(t) && 'function' != typeof t)
                    ? Ye(e)
                    : t;
            }
            function Ye(e) {
                if (void 0 === e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return e;
            }
            function Je(e) {
                return (Je = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function Xe() {
                return (Xe =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) &&
                                    (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            var Qe = function (e) {
                    var t = e.services,
                        r = e.config,
                        n = e.consents,
                        o = e.lang,
                        i = e.toggle,
                        a = e.visible,
                        c = e.t;
                    return t.map(function (e) {
                        var t = n[e.name];
                        return ke(
                            'li',
                            { key: e.name, className: 'cm-service' },
                            ke(
                                Ke,
                                Xe(
                                    {
                                        checked: t || e.required,
                                        onToggle: function (t) {
                                            i([e], t);
                                        },
                                        config: r,
                                        lang: o,
                                        visible: a,
                                        t: c,
                                    },
                                    e
                                )
                            )
                        );
                    });
                },
                et = (function (e) {
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
                            t && $e(e, t);
                    })(i, e);
                    var t,
                        r,
                        n,
                        o = Ge(i);
                    function i(e) {
                        var t;
                        return (
                            (function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        'Cannot call a class as a function'
                                    );
                            })(this, i),
                            (t = o.call(this, e)),
                            e.manager.watch(Ye(t)),
                            (t.state = { consents: e.manager.consents }),
                            t
                        );
                    }
                    return (
                        (t = i),
                        (r = [
                            {
                                key: 'componentWillUnmount',
                                value: function () {
                                    this.props.manager.unwatch(this);
                                },
                            },
                            {
                                key: 'update',
                                value: function (e, t, r) {
                                    e === this.props.manager &&
                                        'consents' === t &&
                                        this.setState({ consents: r });
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    var e = this.props,
                                        t = e.config,
                                        r = e.t,
                                        n = e.manager,
                                        o = e.lang,
                                        i = this.state.consents,
                                        a = t.services,
                                        c = function (e, t) {
                                            e.map(function (e) {
                                                e.required ||
                                                    n.updateConsent(e.name, t);
                                            });
                                        },
                                        l = ke(Qe, {
                                            config: t,
                                            lang: o,
                                            services: a,
                                            t: r,
                                            consents: i,
                                            toggle: c,
                                        }),
                                        s = a.filter(function (e) {
                                            return !e.required;
                                        }),
                                        u = s.filter(function (e) {
                                            return i[e.name];
                                        }).length,
                                        d = a.filter(function (e) {
                                            return e.required;
                                        }).length,
                                        p = u === s.length;
                                    return (
                                        a.filter(function (e) {
                                            return e.required;
                                        }).length,
                                        ke(
                                            'ul',
                                            { className: 'cm-services' },
                                            l,
                                            !t.hideToggleAll &&
                                                s.length > 1 &&
                                                ke(
                                                    'li',
                                                    {
                                                        className:
                                                            'cm-service cm-toggle-all',
                                                    },
                                                    ke(Ke, {
                                                        name: 'disableAll',
                                                        title: r([
                                                            'service',
                                                            'disableAll',
                                                            'title',
                                                        ]),
                                                        description: r([
                                                            'service',
                                                            'disableAll',
                                                            'description',
                                                        ]),
                                                        checked: p,
                                                        config: t,
                                                        onlyRequiredEnabled:
                                                            !p && d > 0,
                                                        onToggle: function (e) {
                                                            c(a, e);
                                                        },
                                                        lang: o,
                                                        t: r,
                                                    })
                                                )
                                        )
                                    );
                                },
                            },
                        ]) && Ve(t.prototype, r),
                        n && Ve(t, n),
                        i
                    );
                })(_e);
            function tt(e) {
                return (tt =
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
            function rt() {
                return (rt =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) &&
                                    (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function nt(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function ot(e, t) {
                return (ot =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function it(e) {
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
                    var r,
                        n = ct(e);
                    if (t) {
                        var o = ct(this).constructor;
                        r = Reflect.construct(n, arguments, o);
                    } else r = n.apply(this, arguments);
                    return at(this, r);
                };
            }
            function at(e, t) {
                return !t || ('object' !== tt(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return e;
                      })(e)
                    : t;
            }
            function ct(e) {
                return (ct = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var lt = (function (e) {
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
                        t && ot(e, t);
                })(i, e);
                var t,
                    r,
                    n,
                    o = it(i);
                function i(e) {
                    var t;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, i),
                        ((t = o.call(this, e)).state = { servicesVisible: !1 }),
                        t
                    );
                }
                return (
                    (t = i),
                    (r = [
                        {
                            key: 'render',
                            value: function () {
                                var e,
                                    t = this,
                                    r = this.props,
                                    n = r.allEnabled,
                                    o = r.onlyRequiredEnabled,
                                    i = r.allDisabled,
                                    a = r.services,
                                    c = r.config,
                                    l = r.onToggle,
                                    s = r.name,
                                    u = r.lang,
                                    d = r.manager,
                                    p = r.consents,
                                    f = r.title,
                                    m = r.description,
                                    v = r.t,
                                    h = this.state.servicesVisible,
                                    y = this.props.required || !1,
                                    b = this.props.purposes || [],
                                    g = 'purpose-item-'.concat(s),
                                    k = ''.concat(g, '-title'),
                                    w = b
                                        .map(function (e) {
                                            return (
                                                v([
                                                    '!',
                                                    'purposes',
                                                    e,
                                                    'title?',
                                                ]) || Ae(e)
                                            );
                                        })
                                        .join(', '),
                                    x = y
                                        ? ke(
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
                                    (e = ke(
                                        'p',
                                        { className: 'purposes' },
                                        v([
                                            'purpose',
                                            b.length > 1
                                                ? 'purposes'
                                                : 'purpose',
                                        ]),
                                        ': ',
                                        w
                                    ));
                                var _ = function (e) {
                                        e.preventDefault();
                                        var r =
                                            'false' !==
                                            e.currentTarget.getAttribute(
                                                'aria-expanded'
                                            );
                                        e.currentTarget.setAttribute(
                                            'aria-expanded',
                                            !r
                                        ),
                                            t.setState({ servicesVisible: !h });
                                    },
                                    S = ke(Qe, {
                                        config: c,
                                        lang: u,
                                        services: a,
                                        toggle: function (e, t) {
                                            e.map(function (e) {
                                                e.required ||
                                                    d.updateConsent(e.name, t);
                                            });
                                        },
                                        consents: p,
                                        visible: h,
                                        t: v,
                                    }),
                                    j =
                                        m ||
                                        v(['!', 'purposes', s, 'description']);
                                return ke(
                                    xe,
                                    null,
                                    ke('input', {
                                        id: g,
                                        className:
                                            'cm-list-input' +
                                            (y ? ' required' : '') +
                                            (n
                                                ? ''
                                                : o
                                                ? ' only-required'
                                                : ' half-checked'),
                                        'aria-labelledby': ''.concat(k),
                                        'aria-describedby': ''.concat(
                                            g,
                                            '-description'
                                        ),
                                        disabled: y,
                                        checked: n || (!i && !o),
                                        type: 'checkbox',
                                        onChange: function (e) {
                                            l(e.target.checked);
                                        },
                                    }),
                                    ke(
                                        'label',
                                        rt(
                                            {
                                                htmlFor: g,
                                                className: 'cm-list-label',
                                            },
                                            y ? { tabIndex: '0' } : {}
                                        ),
                                        ke(
                                            'span',
                                            {
                                                className: 'cm-list-title',
                                                id: ''.concat(k),
                                            },
                                            f ||
                                                v([
                                                    '!',
                                                    'purposes',
                                                    s,
                                                    'title?',
                                                ]) ||
                                                Ae(s)
                                        ),
                                        x,
                                        ke(
                                            'span',
                                            { className: 'cm-switch' },
                                            ke('div', {
                                                className:
                                                    'slider round active',
                                            })
                                        )
                                    ),
                                    ke(
                                        'div',
                                        { id: ''.concat(g, '-description') },
                                        j &&
                                            ke(
                                                'p',
                                                {
                                                    className:
                                                        'cm-list-description',
                                                },
                                                ke(Te, { config: c, text: j })
                                            ),
                                        e
                                    ),
                                    a.length > 0 &&
                                        ke(
                                            'div',
                                            { className: 'cm-services' },
                                            ke(
                                                'div',
                                                { className: 'cm-caret' },
                                                ke(
                                                    'a',
                                                    {
                                                        href: '#',
                                                        'aria-haspopup': 'true',
                                                        'aria-expanded':
                                                            'false',
                                                        tabIndex: '0',
                                                        onClick: _,
                                                        onKeyDown: function (
                                                            e
                                                        ) {
                                                            32 === e.keyCode &&
                                                                _(e);
                                                        },
                                                    },
                                                    (h &&
                                                        ke(
                                                            'span',
                                                            null,
                                                            '↑'
                                                        )) ||
                                                        ke('span', null, '↓'),
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
                                            ke(
                                                'ul',
                                                {
                                                    className:
                                                        'cm-content' +
                                                        (h ? ' expanded' : ''),
                                                },
                                                S
                                            )
                                        )
                                );
                            },
                        },
                    ]) && nt(t.prototype, r),
                    n && nt(t, n),
                    i
                );
            })(_e);
            function st(e) {
                return (st =
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
            function ut(e, t) {
                var r;
                if (
                    'undefined' == typeof Symbol ||
                    null == e[Symbol.iterator]
                ) {
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return dt(e, t);
                            var r = Object.prototype.toString
                                .call(e)
                                .slice(8, -1);
                            'Object' === r &&
                                e.constructor &&
                                (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r)
                                return Array.from(e);
                            if (
                                'Arguments' === r ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    r
                                )
                            )
                                return dt(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        r && (e = r);
                        var n = 0,
                            o = function () {};
                        return {
                            s: o,
                            n: function () {
                                return n >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[n++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: o,
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
                        r = e[Symbol.iterator]();
                    },
                    n: function () {
                        var e = r.next();
                        return (a = e.done), e;
                    },
                    e: function (e) {
                        (c = !0), (i = e);
                    },
                    f: function () {
                        try {
                            a || null == r.return || r.return();
                        } finally {
                            if (c) throw i;
                        }
                    },
                };
            }
            function dt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function pt(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function ft(e, t) {
                return (ft =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function mt(e) {
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
                    var r,
                        n = yt(e);
                    if (t) {
                        var o = yt(this).constructor;
                        r = Reflect.construct(n, arguments, o);
                    } else r = n.apply(this, arguments);
                    return vt(this, r);
                };
            }
            function vt(e, t) {
                return !t || ('object' !== st(t) && 'function' != typeof t)
                    ? ht(e)
                    : t;
            }
            function ht(e) {
                if (void 0 === e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return e;
            }
            function yt(e) {
                return (yt = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var bt = (function (e) {
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
                        t && ft(e, t);
                })(i, e);
                var t,
                    r,
                    n,
                    o = mt(i);
                function i(e) {
                    var t;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, i),
                        (t = o.call(this, e)),
                        e.manager.watch(ht(t)),
                        (t.state = { consents: e.manager.consents }),
                        t
                    );
                }
                return (
                    (t = i),
                    (r = [
                        {
                            key: 'componentWillUnmount',
                            value: function () {
                                this.props.manager.unwatch(this);
                            },
                        },
                        {
                            key: 'update',
                            value: function (e, t, r) {
                                e === this.props.manager &&
                                    'consents' === t &&
                                    this.setState({ consents: r });
                            },
                        },
                        {
                            key: 'render',
                            value: function () {
                                var e,
                                    t = this.props,
                                    r = t.config,
                                    n = t.t,
                                    o = t.manager,
                                    i = t.lang,
                                    a = this.state.consents,
                                    c = r.services,
                                    l = {},
                                    s = ut(c);
                                try {
                                    for (s.s(); !(e = s.n()).done; ) {
                                        var u,
                                            d = e.value,
                                            p = ut(d.purposes);
                                        try {
                                            for (p.s(); !(u = p.n()).done; ) {
                                                var f = u.value;
                                                void 0 === l[f] && (l[f] = []),
                                                    l[f].push(d);
                                            }
                                        } catch (e) {
                                            p.e(e);
                                        } finally {
                                            p.f();
                                        }
                                    }
                                } catch (e) {
                                    s.e(e);
                                } finally {
                                    s.f();
                                }
                                var m = function (e, t) {
                                        e.map(function (e) {
                                            var r,
                                                n = ut(l[e]);
                                            try {
                                                for (
                                                    n.s();
                                                    !(r = n.n()).done;

                                                ) {
                                                    var i = r.value;
                                                    i.required ||
                                                        o.updateConsent(
                                                            i.name,
                                                            t
                                                        );
                                                }
                                            } catch (e) {
                                                n.e(e);
                                            } finally {
                                                n.f();
                                            }
                                        });
                                    },
                                    v = function (e) {
                                        var t,
                                            r = {
                                                allEnabled: !0,
                                                onlyRequiredEnabled: !0,
                                                allDisabled: !0,
                                                allRequired: !0,
                                            },
                                            n = ut(e);
                                        try {
                                            for (n.s(); !(t = n.n()).done; ) {
                                                var o = t.value;
                                                o.required ||
                                                    (r.allRequired = !1),
                                                    a[o.name]
                                                        ? (o.required ||
                                                              (r.onlyRequiredEnabled =
                                                                  !1),
                                                          (r.allDisabled = !1))
                                                        : o.required ||
                                                          (r.allEnabled = !1);
                                            }
                                        } catch (e) {
                                            n.e(e);
                                        } finally {
                                            n.f();
                                        }
                                        return (
                                            r.allDisabled &&
                                                (r.onlyRequiredEnabled = !1),
                                            r
                                        );
                                    },
                                    h = r.purposeOrder || [],
                                    y = Object.keys(l)
                                        .sort(function (e, t) {
                                            return h.indexOf(e) - h.indexOf(t);
                                        })
                                        .map(function (e) {
                                            var t = v(l[e]);
                                            return ke(
                                                'li',
                                                {
                                                    key: e,
                                                    className: 'cm-purpose',
                                                },
                                                ke(lt, {
                                                    allEnabled: t.allEnabled,
                                                    allDisabled: t.allDisabled,
                                                    onlyRequiredEnabled:
                                                        t.onlyRequiredEnabled,
                                                    required: t.allRequired,
                                                    consents: a,
                                                    name: e,
                                                    config: r,
                                                    lang: i,
                                                    manager: o,
                                                    onToggle: function (t) {
                                                        m([e], t);
                                                    },
                                                    services: l[e],
                                                    t: n,
                                                })
                                            );
                                        }),
                                    b = Object.keys(l).filter(function (e) {
                                        var t,
                                            r = ut(l[e]);
                                        try {
                                            for (r.s(); !(t = r.n()).done; )
                                                if (!t.value.required)
                                                    return !0;
                                        } catch (e) {
                                            r.e(e);
                                        } finally {
                                            r.f();
                                        }
                                        return !1;
                                    }),
                                    g = v(c);
                                return ke(
                                    'ul',
                                    { className: 'cm-purposes' },
                                    y,
                                    b.length > 1 &&
                                        ke(
                                            'li',
                                            {
                                                className:
                                                    'cm-purpose cm-toggle-all',
                                            },
                                            ke(lt, {
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
                                                allDisabled: g.allDisabled,
                                                allEnabled: g.allEnabled,
                                                onlyRequiredEnabled:
                                                    g.onlyRequiredEnabled,
                                                onToggle: function (e) {
                                                    m(Object.keys(l), e);
                                                },
                                                manager: o,
                                                consents: a,
                                                config: r,
                                                lang: i,
                                                services: [],
                                                t: n,
                                            })
                                        )
                                );
                            },
                        },
                    ]) && pt(t.prototype, r),
                    n && pt(t, n),
                    i
                );
            })(_e);
            function gt(e) {
                return (gt =
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
            function kt(e, t) {
                if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
            }
            function wt(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function xt(e, t) {
                return (xt =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function _t(e) {
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
                    var r,
                        n = jt(e);
                    if (t) {
                        var o = jt(this).constructor;
                        r = Reflect.construct(n, arguments, o);
                    } else r = n.apply(this, arguments);
                    return St(this, r);
                };
            }
            function St(e, t) {
                return !t || ('object' !== gt(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return e;
                      })(e)
                    : t;
            }
            function jt(e) {
                return (jt = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var Ot = (function (e) {
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
                            t && xt(e, t);
                    })(i, e);
                    var t,
                        r,
                        n,
                        o = _t(i);
                    function i() {
                        return kt(this, i), o.apply(this, arguments);
                    }
                    return (
                        (t = i),
                        (r = [
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
                                        r,
                                        n = this,
                                        o = this.props,
                                        i = o.hide,
                                        a = o.confirming,
                                        c = o.saveAndHide,
                                        l = o.acceptAndHide,
                                        s = o.acceptLocalAndHide,
                                        u = o.declineAndHide,
                                        d = o.config,
                                        p = o.manager,
                                        f = o.lang,
                                        m = o.t,
                                        v = d.embedded,
                                        h =
                                            void 0 === d.groupByPurpose ||
                                            d.groupByPurpose;
                                    d.mustConsent ||
                                        (e = ke(
                                            'button',
                                            {
                                                title: m(['close']),
                                                'aria-label': m(['close']),
                                                className: 'hide',
                                                type: 'button',
                                                onClick: i,
                                                tabIndex: '0',
                                                ref: function (e) {
                                                    n.consentModalRef = e;
                                                },
                                            },
                                            ke(Oe, { t: m })
                                        )),
                                        d.hideDeclineAll ||
                                            p.confirmed ||
                                            (t = ke(
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
                                    var y,
                                        b,
                                        g,
                                        k,
                                        w = ke(
                                            'button',
                                            {
                                                disabled: a,
                                                className:
                                                    'cm-btn cm-btn-success cm-btn-info cm-btn-accept',
                                                type: 'button',
                                                onClick: c,
                                            },
                                            m([
                                                p.confirmed
                                                    ? 'save'
                                                    : 'acceptSelected',
                                            ])
                                        );
                                    d.acceptAll &&
                                        !p.confirmed &&
                                        (r = ke(
                                            'button',
                                            {
                                                disabled: a,
                                                className:
                                                    'cm-btn cm-btn-success cm-btn-accept-all',
                                                type: 'button',
                                                onClick: l,
                                            },
                                            m(['acceptAll'])
                                        )),
                                        p.confirmed ||
                                            (y = ke(
                                                'button',
                                                {
                                                    disabled: a,
                                                    className:
                                                        'cm-btn cm-btn-local-only cm-btn-danger',
                                                    type: 'button',
                                                    onClick: s,
                                                },
                                                m(['acceptLocalOnly'])
                                            )),
                                        void 0 !== d.privacyPolicy
                                            ? 'string' == typeof d.privacyPolicy
                                                ? (b = d.privacyPolicy)
                                                : 'object' ===
                                                      gt(d.privacyPolicy) &&
                                                  (b =
                                                      d.privacyPolicy[f] ||
                                                      d.privacyPolicy.default)
                                            : void 0 !==
                                                  (b = m(
                                                      ['!', 'privacyPolicyUrl'],
                                                      { lang: f }
                                                  )) && (b = b.join('')),
                                        void 0 !== b &&
                                            (g = ke(
                                                'a',
                                                {
                                                    key: 'ppLink',
                                                    href: b,
                                                    target: '_blank',
                                                    rel: 'noopener',
                                                },
                                                m(['privacyPolicy', 'name'])
                                            )),
                                        (k = ke(h ? bt : et, {
                                            t: m,
                                            config: d,
                                            manager: p,
                                            lang: f,
                                        }));
                                    var x = ke(
                                        'div',
                                        { className: 'cm-modal cm-klaro' },
                                        ke(
                                            'div',
                                            { className: 'cm-header' },
                                            e,
                                            ke(
                                                'h1',
                                                { className: 'title' },
                                                ke(Te, {
                                                    config: d,
                                                    text: m([
                                                        'consentModal',
                                                        'title',
                                                    ]),
                                                })
                                            ),
                                            ke(
                                                'p',
                                                null,
                                                ke(Te, {
                                                    config: d,
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
                                        ke('div', { className: 'cm-body' }, k),
                                        ke(
                                            'div',
                                            { className: 'cm-footer' },
                                            ke(
                                                'div',
                                                {
                                                    className:
                                                        'cm-footer-buttons',
                                                },
                                                t,
                                                y,
                                                w,
                                                r
                                            ),
                                            !d.disablePoweredBy &&
                                                ke(
                                                    'p',
                                                    {
                                                        className:
                                                            'cm-powered-by',
                                                    },
                                                    ke(
                                                        'a',
                                                        {
                                                            target: '_blank',
                                                            href:
                                                                d.poweredBy ||
                                                                'https://kiprotect.com/klaro',
                                                            rel: 'noopener',
                                                        },
                                                        m(['poweredBy'])
                                                    )
                                                )
                                        )
                                    );
                                    return v
                                        ? ke(
                                              'div',
                                              {
                                                  id: 'cookieScreen',
                                                  className:
                                                      'cookie-modal cm-embedded',
                                              },
                                              x
                                          )
                                        : ke(
                                              'div',
                                              {
                                                  id: 'cookieScreen',
                                                  className: 'cookie-modal',
                                              },
                                              ke('div', {
                                                  className: 'cm-bg',
                                                  onClick: i,
                                              }),
                                              x
                                          );
                                },
                            },
                        ]) && wt(t.prototype, r),
                        n && wt(t, n),
                        i
                    );
                })(_e),
                At = r(114);
            function Pt(e) {
                return (Pt =
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
            function zt(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return Ct(e);
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
                        if ('string' == typeof e) return Ct(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ('Map' === r || 'Set' === r) return Array.from(e);
                        if (
                            'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return Ct(e, t);
                    })(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Ct(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function Et(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function Nt(e, t) {
                return (Nt =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function Rt(e) {
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
                    var r,
                        n = Dt(e);
                    if (t) {
                        var o = Dt(this).constructor;
                        r = Reflect.construct(n, arguments, o);
                    } else r = n.apply(this, arguments);
                    return It(this, r);
                };
            }
            function It(e, t) {
                return !t || ('object' !== Pt(t) && 'function' != typeof t)
                    ? Tt(e)
                    : t;
            }
            function Tt(e) {
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
            function Mt(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            var Lt = (function (e) {
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
                        t && Nt(e, t);
                })(i, e);
                var t,
                    r,
                    n,
                    o = Rt(i);
                function i(e) {
                    var t;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, i),
                        Mt(
                            Tt((t = o.call(this, e))),
                            'executeButtonClicked',
                            function (e) {
                                var r =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : 0,
                                    n = t.state.modal,
                                    o = t.props.manager.confirmed;
                                if (
                                    (t.props.manager.saveAndApplyConsents(e),
                                    r > 0 &&
                                        !o &&
                                        (n || t.props.config.mustConsent))
                                ) {
                                    var i = function () {
                                        t.setState({ confirming: !1 }),
                                            t.props.hide();
                                    };
                                    t.setState({ confirming: !0 }),
                                        0 === r ? i() : setTimeout(i, 800);
                                } else t.props.hide();
                            }
                        ),
                        Mt(Tt(t), 'saveAndHide', function () {
                            t.executeButtonClicked('save');
                        }),
                        Mt(Tt(t), 'acceptAndHide', function () {
                            var e = t.props.manager.changeAll(!0);
                            t.executeButtonClicked('accept', e);
                        }),
                        Mt(Tt(t), 'acceptLocalOnlyAndHide', function () {
                            var e = t.props.manager.changeAllWithTag(
                                !0,
                                'non-eu'
                            );
                            t.executeButtonClicked('acceptLocalOnly', e);
                        }),
                        Mt(Tt(t), 'declineAndHide', function () {
                            var e = t.props.manager.changeAll(!1);
                            t.executeButtonClicked('decline', e);
                        }),
                        (t.state = { modal: e.modal, confirming: !1 }),
                        t
                    );
                }
                return (
                    (t = i),
                    (r = [
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
                                    r = this.props,
                                    n = r.lang,
                                    o = r.config,
                                    i = r.show,
                                    a = r.manager,
                                    c = r.testing,
                                    l = r.t,
                                    s = this.state,
                                    u = s.confirming,
                                    d = s.modal,
                                    p = o.embedded,
                                    f = o.noticeAsModal,
                                    m = o.hideLearnMore,
                                    v = o.purposeOrder || [],
                                    h = Object(At.a)(o)
                                        .filter(function (e) {
                                            return 'functional' !== e;
                                        })
                                        .sort(function (e, t) {
                                            return v.indexOf(e) - v.indexOf(t);
                                        })
                                        .map(function (e) {
                                            return (
                                                l([
                                                    '!',
                                                    'purposes',
                                                    e,
                                                    'title?',
                                                ]) || Ae(e)
                                            );
                                        }),
                                    y = '';
                                (y =
                                    1 === h.length
                                        ? h[0]
                                        : []
                                              .concat(zt(h.slice(0, -2)), [
                                                  h.slice(-2).join(' & '),
                                              ])
                                              .join(', ')),
                                    void 0 !== o.privacyPolicy
                                        ? 'string' == typeof o.privacyPolicy
                                            ? (e = o.privacyPolicy)
                                            : 'object' ===
                                                  Pt(o.privacyPolicy) &&
                                              (e =
                                                  o.privacyPolicy[n] ||
                                                  o.privacyPolicy.default)
                                        : void 0 !==
                                              (e = l(
                                                  ['!', 'privacyPolicyUrl'],
                                                  { lang: n }
                                              )) && (e = e.join(''));
                                var b,
                                    g = function (e) {
                                        e.preventDefault(),
                                            t.setState({ modal: !0 });
                                    };
                                if (
                                    (a.changed &&
                                        (b = ke(
                                            'p',
                                            { className: 'cn-changes' },
                                            l([
                                                'consentNotice',
                                                'changeDescription',
                                            ])
                                        )),
                                    !i && !c && !u)
                                )
                                    return ke('div', null);
                                var k,
                                    w =
                                        (!o.mustConsent || f) &&
                                        !a.confirmed &&
                                        !o.noNotice,
                                    x = o.hideDeclineAll
                                        ? ''
                                        : ke(
                                              'button',
                                              {
                                                  className:
                                                      'cm-btn cm-btn-danger cn-decline',
                                                  type: 'button',
                                                  onClick: this.declineAndHide,
                                              },
                                              l(['decline'])
                                          ),
                                    _ = o.acceptAll
                                        ? ke(
                                              'button',
                                              {
                                                  className:
                                                      'cm-btn cm-btn-success',
                                                  type: 'button',
                                                  onClick: this.acceptAndHide,
                                              },
                                              l(['ok'])
                                          )
                                        : ke(
                                              'button',
                                              {
                                                  className:
                                                      'cm-btn cm-btn-success',
                                                  type: 'button',
                                                  onClick: this.saveAndHide,
                                              },
                                              l(['ok'])
                                          ),
                                    S = ke(
                                        'button',
                                        {
                                            className:
                                                'cm-btn cm-btn-danger cm-btn-local-only',
                                            type: 'button',
                                            onClick:
                                                this.acceptLocalOnlyAndHide,
                                        },
                                        l(['acceptLocalOnly'])
                                    ),
                                    j = function () {
                                        return f
                                            ? ke(
                                                  'button',
                                                  {
                                                      key: 'learnMoreLink',
                                                      className:
                                                          'cm-btn cm-btn-lern-more cm-btn-info',
                                                      type: 'button',
                                                      onClick: g,
                                                  },
                                                  l([
                                                      'consentNotice',
                                                      'learnMore',
                                                  ])
                                              )
                                            : ke(
                                                  'a',
                                                  {
                                                      key: 'learnMoreLink',
                                                      className:
                                                          'cm-link cn-learn-more',
                                                      href: '#',
                                                      onClick: g,
                                                  },
                                                  l([
                                                      'consentNotice',
                                                      'learnMore',
                                                  ])
                                              );
                                    };
                                if (
                                    (void 0 !== e &&
                                        (k = ke(
                                            'a',
                                            { key: 'ppLink', href: e },
                                            l(['privacyPolicy', 'name'])
                                        )),
                                    d ||
                                        (a.confirmed && !c) ||
                                        (!a.confirmed && o.mustConsent))
                                )
                                    return ke(Ot, {
                                        t: l,
                                        lang: n,
                                        config: o,
                                        hide: function () {
                                            (o.mustConsent && !o.acceptAll) ||
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
                                var O = ke(
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
                                                w || c
                                                    ? ''
                                                    : 'cookie-notice-hidden',
                                                ' '
                                            )
                                            .concat(
                                                f ? 'cookie-modal-notice' : '',
                                                ' '
                                            )
                                            .concat(p ? 'cn-embedded' : ''),
                                    },
                                    ke(
                                        'div',
                                        { className: 'cn-body' },
                                        l(['!', 'consentNotice', 'title']) &&
                                            ke(
                                                'h2',
                                                { id: 'id-cookie-title' },
                                                l(['consentNotice', 'title'])
                                            ),
                                        ke(
                                            'p',
                                            { id: 'id-cookie-notice' },
                                            ke(Te, {
                                                config: o,
                                                text: l(
                                                    [
                                                        'consentNotice',
                                                        'description',
                                                    ],
                                                    {
                                                        purposes: ke(
                                                            'strong',
                                                            { key: 'strong' },
                                                            y
                                                        ),
                                                        privacyPolicy: k,
                                                        learnMoreLink: j(),
                                                    }
                                                ),
                                            })
                                        ),
                                        c &&
                                            ke(
                                                'p',
                                                null,
                                                l(['consentNotice', 'testing'])
                                            ),
                                        b,
                                        ke(
                                            'div',
                                            { className: 'cn-ok' },
                                            !m && j(),
                                            ke(
                                                'div',
                                                { className: 'cn-buttons' },
                                                x,
                                                S,
                                                _
                                            )
                                        )
                                    )
                                );
                                return f
                                    ? ke(
                                          'div',
                                          {
                                              id: 'cookieScreen',
                                              className: 'cookie-modal',
                                          },
                                          ke('div', { className: 'cm-bg' }),
                                          O
                                      )
                                    : O;
                            },
                        },
                    ]) && Et(t.prototype, r),
                    n && Et(t, n),
                    i
                );
            })(_e);
            function qt(e) {
                return (qt =
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
            function Ut(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function Bt(e, t) {
                return (Bt =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function Ft(e) {
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
                    var r,
                        n = Wt(e);
                    if (t) {
                        var o = Wt(this).constructor;
                        r = Reflect.construct(n, arguments, o);
                    } else r = n.apply(this, arguments);
                    return Ht(this, r);
                };
            }
            function Ht(e, t) {
                return !t || ('object' !== qt(t) && 'function' != typeof t)
                    ? Kt(e)
                    : t;
            }
            function Kt(e) {
                if (void 0 === e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return e;
            }
            function Wt(e) {
                return (Wt = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var Vt = (function (e) {
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
                        t && Bt(e, t);
                })(i, e);
                var t,
                    r,
                    n,
                    o = Ft(i);
                function i(e) {
                    var t;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, i),
                        (t = o.call(this, e)),
                        e.manager.watch(Kt(t)),
                        (t.state = {
                            show: e.show > 0 || !e.manager.confirmed,
                        }),
                        t
                    );
                }
                return (
                    (t = i),
                    (r = [
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
                                    r = e.modal,
                                    n = e.show,
                                    o = e.config;
                                if (void 0 !== t) {
                                    if (r || n > 0) return;
                                    this.props.manager.confirmed ||
                                        this.props.manager.auxiliaryStore.getWithKey(
                                            'shown-before'
                                        ) ||
                                        (t.update(this, 'showNotice', {
                                            config: o,
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
                                    r = t.config,
                                    n = t.t,
                                    o = t.lang,
                                    i = t.testing,
                                    a = t.manager,
                                    c = t.modal,
                                    l = this.state.show,
                                    s = r.additionalClass,
                                    u = r.embedded,
                                    d = r.stylePrefix;
                                return ke(
                                    'div',
                                    {
                                        lang: o,
                                        className:
                                            (d || 'klaro') +
                                            (void 0 !== s ? ' ' + s : ''),
                                    },
                                    ke(Lt, {
                                        key: 'app-' + this.props.show,
                                        t: n,
                                        testing: i,
                                        show: l,
                                        lang: o,
                                        modal: c,
                                        hide: function () {
                                            u || e.setState({ show: !1 });
                                        },
                                        config: r,
                                        manager: a,
                                    })
                                );
                            },
                        },
                    ]) && Ut(t.prototype, r),
                    n && Ut(t, n),
                    i
                );
            })(_e);
            var $t = r(130);
            r(176);
            r(71), r(125);
            var Gt = r(39);
            function Zt(e, t) {
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
                        var r = [],
                            n = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (
                                var a, c = e[Symbol.iterator]();
                                !(n = (a = c.next()).done) &&
                                (r.push(a.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (i = e);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return r;
                    })(e, t) ||
                    Yt(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Yt(e, t) {
                if (e) {
                    if ('string' == typeof e) return Jt(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name),
                        'Map' === r || 'Set' === r
                            ? Array.from(e)
                            : 'Arguments' === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? Jt(e, t)
                            : void 0
                    );
                }
            }
            function Jt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function Xt(e, t, r) {
                if (void 0 !== e.styling) {
                    var n = Object.assign({}, e.styling);
                    if (void 0 !== n.theme) {
                        var o = n.theme;
                        o instanceof Array || (o = [o]), (n = {});
                        var i,
                            a = (function (e, t) {
                                var r;
                                if (
                                    'undefined' == typeof Symbol ||
                                    null == e[Symbol.iterator]
                                ) {
                                    if (
                                        Array.isArray(e) ||
                                        (r = Yt(e)) ||
                                        (t && e && 'number' == typeof e.length)
                                    ) {
                                        r && (e = r);
                                        var n = 0,
                                            o = function () {};
                                        return {
                                            s: o,
                                            n: function () {
                                                return n >= e.length
                                                    ? { done: !0 }
                                                    : {
                                                          done: !1,
                                                          value: e[n++],
                                                      };
                                            },
                                            e: function (e) {
                                                throw e;
                                            },
                                            f: o,
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
                                        r = e[Symbol.iterator]();
                                    },
                                    n: function () {
                                        var e = r.next();
                                        return (a = e.done), e;
                                    },
                                    e: function (e) {
                                        (c = !0), (i = e);
                                    },
                                    f: function () {
                                        try {
                                            a || null == r.return || r.return();
                                        } finally {
                                            if (c) throw i;
                                        }
                                    },
                                };
                            })(o);
                        try {
                            for (a.s(); !(i = a.n()).done; ) {
                                var c = t[i.value];
                                if (void 0 !== c)
                                    for (
                                        var l = 0, s = Object.entries(c);
                                        l < s.length;
                                        l++
                                    ) {
                                        var u = Zt(s[l], 2),
                                            d = u[0],
                                            p = u[1];
                                        d.startsWith('_') || (n[d] = p);
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
                            var v = Zt(m[f], 2),
                                h = v[0],
                                y = v[1];
                            'theme' !== h && (n[h] = y);
                        }
                    }
                    void 0 === r && (r = document.documentElement);
                    for (var b = 0, g = Object.entries(n); b < g.length; b++) {
                        var k = Zt(g[b], 2),
                            w = k[0],
                            x = k[1];
                        r.style.setProperty('--' + w, x);
                    }
                    window.document.documentMode &&
                        r === document.documentElement &&
                        Object(Gt.d)(n);
                }
            }
            function Qt(e, t) {
                var r;
                if (
                    'undefined' == typeof Symbol ||
                    null == e[Symbol.iterator]
                ) {
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return er(e, t);
                            var r = Object.prototype.toString
                                .call(e)
                                .slice(8, -1);
                            'Object' === r &&
                                e.constructor &&
                                (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r)
                                return Array.from(e);
                            if (
                                'Arguments' === r ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    r
                                )
                            )
                                return er(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        r && (e = r);
                        var n = 0,
                            o = function () {};
                        return {
                            s: o,
                            n: function () {
                                return n >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[n++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: o,
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
                        r = e[Symbol.iterator]();
                    },
                    n: function () {
                        var e = r.next();
                        return (a = e.done), e;
                    },
                    e: function (e) {
                        (c = !0), (i = e);
                    },
                    f: function () {
                        try {
                            a || null == r.return || r.return();
                        } finally {
                            if (c) throw i;
                        }
                    },
                };
            }
            function er(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function tr(e) {
                for (
                    var t = new Map([]), r = 0, n = Object.keys(e);
                    r < n.length;
                    r++
                ) {
                    var o = n[r],
                        i = e[o];
                    'string' == typeof o &&
                        ('string' == typeof i || null === i
                            ? t.set(o, i)
                            : t.set(o, tr(i)));
                }
                return t;
            }
            function rr(e, t, r, n) {
                var o = function (e, t, r) {
                    if (r instanceof Map) {
                        var n = new Map([]);
                        rr(n, r, !0, !1), e.set(t, n);
                    } else e.set(t, r);
                };
                if (!(t instanceof Map && e instanceof Map))
                    throw new Error('Parameters are not maps!');
                void 0 === r && (r = !0),
                    void 0 === n && (n = !1),
                    n && (e = new e.constructor(e));
                var i,
                    a = Qt(t.keys());
                try {
                    for (a.s(); !(i = a.n()).done; ) {
                        var c = i.value,
                            l = t.get(c),
                            s = e.get(c);
                        if (e.has(c))
                            if (l instanceof Map && s instanceof Map)
                                e.set(c, rr(s, l, r, n));
                            else {
                                if (!r) continue;
                                o(e, c, l);
                            }
                        else o(e, c, l);
                    }
                } catch (e) {
                    a.e(e);
                } finally {
                    a.f();
                }
                return e;
            }
            var nr = {
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
            r(193);
            new Map([]);
            function or(e, t) {
                var r = (function (e, t) {
                        return (e.elementID || 'klaro') + (t ? '-ide' : '');
                    })(e, t),
                    n = document.getElementById(r);
                return (
                    null === n &&
                        (((n = document.createElement('div')).id = r),
                        document.body.appendChild(n)),
                    n
                );
            }
            function ir(e) {
                return (ir =
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
            function ar(e, t) {
                if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
            }
            function cr(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function lr(e, t) {
                return (lr =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function sr(e) {
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
                    var r,
                        n = dr(e);
                    if (t) {
                        var o = dr(this).constructor;
                        r = Reflect.construct(n, arguments, o);
                    } else r = n.apply(this, arguments);
                    return ur(this, r);
                };
            }
            function ur(e, t) {
                return !t || ('object' !== ir(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return e;
                      })(e)
                    : t;
            }
            function dr(e) {
                return (dr = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var pr = (function (e) {
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
                        t && lr(e, t);
                })(i, e);
                var t,
                    r,
                    n,
                    o = sr(i);
                function i() {
                    return ar(this, i), o.apply(this, arguments);
                }
                return (
                    (t = i),
                    (r = [
                        {
                            key: 'render',
                            value: function () {
                                return ke('div', null);
                            },
                        },
                    ]) && cr(t.prototype, r),
                    n && cr(t, n),
                    i
                );
            })(_e);
            function fr(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return mr(e);
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
                        if ('string' == typeof e) return mr(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ('Map' === r || 'Set' === r) return Array.from(e);
                        if (
                            'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return mr(e, t);
                    })(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function mr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function vr() {
                return (vr =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) &&
                                    (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function hr(e, t) {
                if (null == e) return {};
                var r,
                    n,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            o = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++)
                            (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++)
                        (r = i[n]),
                            t.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    r
                                ) &&
                                    (o[r] = e[r]));
                }
                return o;
            }
            var yr = function (e) {
                    var t = e.value,
                        r = e.onChange,
                        n = hr(e, ['value', 'onChange']);
                    return ke(
                        'input',
                        vr(
                            {
                                className: 'cm-input',
                                onChange: function (e) {
                                    return r(e.target.value);
                                },
                                value: t,
                            },
                            n
                        )
                    );
                },
                br = function (e) {
                    var t = e.name,
                        r = e.children,
                        n = e.className,
                        o = e.value,
                        i = e.label,
                        a = e.description,
                        c = e.onChange,
                        l = hr(e, [
                            'name',
                            'children',
                            'className',
                            'value',
                            'label',
                            'description',
                            'onChange',
                        ]);
                    return ke(
                        'div',
                        {
                            className:
                                'cm-retracting-label-input' +
                                (n ? ' ' + n : ''),
                        },
                        ke(
                            yr,
                            vr({ 'aria-labelledby': t + '-label' }, l, {
                                value: o,
                                onChange: c,
                                className: 'cm-input',
                                placeholder: ' ',
                            })
                        ),
                        ke(
                            'span',
                            {
                                id: t + '-label',
                                'aria-hidden': 'true',
                                className: 'cm-label',
                            },
                            i
                        ),
                        ke('p', { className: 'cm-description' }, a),
                        r
                    );
                },
                gr = function (e) {
                    var t = e.t,
                        r = e.field,
                        n = e.children,
                        o = e.prefix,
                        i = e.config,
                        a = e.className,
                        c = e.updateConfig,
                        l = hr(e, [
                            't',
                            'field',
                            'children',
                            'prefix',
                            'config',
                            'className',
                            'updateConfig',
                        ]);
                    return ke(
                        br,
                        vr(
                            {
                                description: t(
                                    ['fields'].concat(fr(o || []), [
                                        r.name,
                                        'description',
                                    ])
                                ),
                                value: i[r.name] || '',
                                label: t(
                                    ['fields'].concat(fr(o || []), [
                                        r.name,
                                        'label',
                                    ])
                                ),
                            },
                            l,
                            {
                                className: a,
                                name: r.name,
                                onChange: function (e) {
                                    return c([r.name], e);
                                },
                                children: n,
                            }
                        )
                    );
                };
            (gr.propTypes = { className: '' }),
                (gr.propTypes = { className: je.a.string });
            r(112), r(65), r(113), r(195);
            var kr = function (e) {
                var t,
                    r = e.search,
                    n = e.disabled,
                    o = e.label,
                    i = e.description,
                    a = e.onSelect,
                    c = e.setSearch,
                    l = e.candidates,
                    s = l.slice(0, 10).map(function (e) {
                        return ke(
                            'li',
                            {
                                onClick: function () {
                                    return a(e);
                                },
                                key: e.name,
                                className: 'cm-candidate',
                            },
                            e.value,
                            e.description && ke('p', null, e.description)
                        );
                    });
                return (
                    l.length > 10 &&
                        s.push(
                            ke(
                                'li',
                                { key: 'hasMore', className: 'cm-candidate' },
                                '...'
                            )
                        ),
                    s.length > 0 &&
                        (t = ke('ul', { className: 'cm-candidates' }, s)),
                    ke(
                        'div',
                        { className: 'cm-search-select' },
                        ke(
                            'form',
                            {
                                onSubmit: function (e) {
                                    e.preventDefault(), a();
                                },
                            },
                            ke(
                                'fieldset',
                                { disabled: n },
                                ke(
                                    br,
                                    {
                                        onChange: c,
                                        label: o,
                                        disabled: n,
                                        description: i,
                                        autoComplete: 'off',
                                        value: r,
                                    },
                                    t
                                )
                            )
                        )
                    )
                );
            };
            function wr(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return Sr(e);
                    })(e) ||
                    (function (e) {
                        if (
                            'undefined' != typeof Symbol &&
                            Symbol.iterator in Object(e)
                        )
                            return Array.from(e);
                    })(e) ||
                    _r(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function xr(e, t) {
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
                        var r = [],
                            n = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (
                                var a, c = e[Symbol.iterator]();
                                !(n = (a = c.next()).done) &&
                                (r.push(a.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (i = e);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return r;
                    })(e, t) ||
                    _r(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function _r(e, t) {
                if (e) {
                    if ('string' == typeof e) return Sr(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name),
                        'Map' === r || 'Set' === r
                            ? Array.from(e)
                            : 'Arguments' === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? Sr(e, t)
                            : void 0
                    );
                }
            }
            function Sr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var jr = function (e) {
                    var t = e.field,
                        r = e.disabled,
                        n = e.config,
                        o = e.prefix,
                        i = e.t,
                        a = e.updateConfig,
                        c = xr(V(''), 2),
                        l = c[0],
                        s = c[1],
                        u = i.tv.languages,
                        d = function () {
                            return Array.from(Object.entries(u))
                                .filter(function (e) {
                                    var r = xr(e, 1)[0];
                                    return !n[t.name].includes(r);
                                })
                                .map(function (e) {
                                    var t = xr(e, 2),
                                        r = t[0],
                                        n = t[1];
                                    return {
                                        name: r,
                                        value: ''
                                            .concat(n.en, ' - ')
                                            .concat(n[r], ' (')
                                            .concat(r, ')'),
                                    };
                                });
                        },
                        p = xr(V(d()), 2),
                        f = p[0],
                        m = p[1],
                        v = xr(V(!1), 2),
                        h = v[0],
                        y = v[1],
                        b = new Set(n[t.name]),
                        g = n[t.name].map(function (e) {
                            return ke(
                                'li',
                                { key: e },
                                e,
                                ': ',
                                i(['languages', e]),
                                ' ',
                                ke(
                                    'a',
                                    {
                                        onClick: function () {
                                            a(
                                                [t.name],
                                                n[t.name].filter(function (t) {
                                                    return t !== e;
                                                })
                                            ),
                                                y(!0);
                                        },
                                    },
                                    '⤬'
                                )
                            );
                        });
                    G(function () {
                        h && (m(d()), y(!1));
                    });
                    return ke(
                        'div',
                        { className: 'cm-language-select' },
                        ke('ul', { className: 'cm-languages' }, g),
                        ke(kr, {
                            disabled: r,
                            search: l,
                            onSelect: function (e) {
                                n[t.name].find(function (t) {
                                    return t === e.name;
                                }) ||
                                    (n[t.name].push(e.name),
                                    a([t.name], n[t.name])),
                                    s(''),
                                    y(!0);
                            },
                            setSearch: function (e) {
                                var t = Array.from(Object.entries(u))
                                    .filter(function (e) {
                                        var t = xr(e, 2),
                                            r = t[0],
                                            n = t[1];
                                        return (
                                            !b.has(r) &&
                                            (n[r]
                                                .toLowerCase()
                                                .includes(l.toLowerCase()) ||
                                                n.en
                                                    .toLowerCase()
                                                    .includes(l.toLowerCase()))
                                        );
                                    })
                                    .map(function (e) {
                                        return {
                                            name: e[0],
                                            value: ''
                                                .concat(e[1].en, ' - ')
                                                .concat(e[1][e[0]], ' (')
                                                .concat(e[0], ')'),
                                        };
                                    });
                                t.length > 10 && (t = []), m(t), s(e);
                            },
                            candidates: f,
                            label: i(
                                ['fields'].concat(wr(o || []), [
                                    t.name,
                                    'label',
                                ])
                            ),
                            description: i(
                                ['fields'].concat(wr(o || []), [
                                    t.name,
                                    'description',
                                ])
                            ),
                        })
                    );
                },
                Or = function (e) {
                    var t = e.t,
                        r = e.field,
                        n = e.config,
                        o = e.updateConfig,
                        i = r.choices.map(function (e) {
                            return ke(
                                'option',
                                { key: e, value: e },
                                t(['fields', r.name, 'title']),
                                ': ',
                                t(['fields', r.name, e])
                            );
                        });
                    return ke(
                        'div',
                        { className: 'cm-select' },
                        ke(
                            'select',
                            {
                                value: n[r.name],
                                onChange: function (e) {
                                    return o([r.name], e.target.value);
                                },
                            },
                            i
                        ),
                        ke(
                            'p',
                            { className: 'cm-description' },
                            t(['fields', r.name, 'description'])
                        )
                    );
                };
            function Ar(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return Pr(e);
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
                        if ('string' == typeof e) return Pr(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ('Map' === r || 'Set' === r) return Array.from(e);
                        if (
                            'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return Pr(e, t);
                    })(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Pr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var zr = function (e) {
                var t = e.t,
                    r = e.field,
                    n = e.prefix,
                    o = e.config,
                    i = e.updateConfig,
                    a = r.name,
                    c = o[a];
                return ke(
                    'div',
                    { className: 'cm-switch-container' },
                    ke('input', {
                        id: 'fields-' + a,
                        className: 'cm-list-input',
                        'aria-describedby': ''.concat(a, '-description'),
                        checked: c,
                        type: 'checkbox',
                        onChange: function (e) {
                            return i([a], e.target.checked);
                        },
                    }),
                    ke(
                        'label',
                        { htmlFor: 'fields-' + a, className: 'cm-list-label' },
                        ke(
                            'span',
                            { className: 'cm-list-title' },
                            t(['fields'].concat(Ar(n || []), [a, 'label']))
                        ),
                        ke(
                            'span',
                            { className: 'cm-switch' },
                            ke('div', { className: 'slider round active' })
                        )
                    ),
                    ke(
                        'div',
                        { id: ''.concat(a, '-description') },
                        ke(
                            'p',
                            { className: 'cm-list-description' },
                            t(
                                ['fields'].concat(Ar(n || []), [
                                    a,
                                    'description',
                                ])
                            )
                        )
                    )
                );
            };
            function Cr(e) {
                return (Cr =
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
            function Er(e, t) {
                if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
            }
            function Nr(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function Rr(e, t) {
                return (Rr =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function Ir(e) {
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
                    var r,
                        n = Dr(e);
                    if (t) {
                        var o = Dr(this).constructor;
                        r = Reflect.construct(n, arguments, o);
                    } else r = n.apply(this, arguments);
                    return Tr(this, r);
                };
            }
            function Tr(e, t) {
                return !t || ('object' !== Cr(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return e;
                      })(e)
                    : t;
            }
            function Dr(e) {
                return (Dr = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var Mr = (function (e) {
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
                        t && Rr(e, t);
                })(i, e);
                var t,
                    r,
                    n,
                    o = Ir(i);
                function i() {
                    return Er(this, i), o.apply(this, arguments);
                }
                return (
                    (t = i),
                    (r = [
                        {
                            key: 'render',
                            value: function () {
                                return ke('div', null);
                            },
                        },
                    ]) && Nr(t.prototype, r),
                    n && Nr(t, n),
                    i
                );
            })(_e);
            function Lr(e, t) {
                if (null == e) return {};
                var r,
                    n,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            o = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++)
                            (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++)
                        (r = i[n]),
                            t.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    r
                                ) &&
                                    (o[r] = e[r]));
                }
                return o;
            }
            function qr(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return Ur(e);
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
                        if ('string' == typeof e) return Ur(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ('Map' === r || 'Set' === r) return Array.from(e);
                        if (
                            'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return Ur(e, t);
                    })(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Ur(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var Br = function (e) {
                    var t = e.updateConfig,
                        r = e.config,
                        n = e.cookie,
                        o = e.t,
                        i = function (e, o) {
                            t(
                                ['services', r._id, 'cookies', n._id].concat(
                                    qr(e)
                                ),
                                o
                            );
                        },
                        a = ['pattern', 'path', 'domain'].map(function (e) {
                            return ke(gr, {
                                key: e,
                                t: o,
                                field: { name: e },
                                config: n,
                                prefix: ['cookies'],
                                updateConfig: i,
                            });
                        });
                    return ke(
                        'div',
                        { className: 'cm-cookie-form' },
                        ke('fieldset', null, a),
                        ke(
                            'div',
                            { className: 'cm-config-controls' },
                            ke('div', { className: 'cm-control' }),
                            ke(
                                'button',
                                {
                                    className: 'cm-control-button cm-delete',
                                    onClick: function () {
                                        return t(
                                            [
                                                'services',
                                                r._id,
                                                'cookies',
                                                n._id,
                                            ],
                                            null
                                        );
                                    },
                                },
                                o(['cookies', 'delete'])
                            )
                        )
                    );
                },
                Fr = function (e) {
                    var t = e.t,
                        r = (e.field, e.config),
                        n = (e.className, e.updateConfig),
                        o =
                            (Lr(e, [
                                't',
                                'field',
                                'config',
                                'className',
                                'updateConfig',
                            ]),
                            r.cookies.map(function (e) {
                                return ke(Br, {
                                    t: t,
                                    config: r,
                                    key: e._id,
                                    cookie: e,
                                    updateConfig: n,
                                });
                            }));
                    return (
                        0 === o.length &&
                            (o = ke(
                                'p',
                                { className: 'cm-no-cookies' },
                                t(['cookies', 'noCookies'])
                            )),
                        ke(
                            'div',
                            { className: 'cm-cookie-config' },
                            ke('h3', null, t(['cookies', 'title'])),
                            ke('div', { className: 'cm-cookie-forms' }, o),
                            ke(
                                'div',
                                { className: 'cm-config-controls' },
                                ke(
                                    'fieldset',
                                    null,
                                    ke(
                                        'button',
                                        {
                                            className: 'cm-control-button',
                                            onClick: function () {
                                                return n(
                                                    [
                                                        'services',
                                                        r._id,
                                                        'cookies',
                                                        null,
                                                    ],
                                                    {}
                                                );
                                            },
                                        },
                                        t(['cookies', 'add'])
                                    )
                                )
                            )
                        )
                    );
                };
            function Hr(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return Vr(e);
                    })(e) ||
                    (function (e) {
                        if (
                            'undefined' != typeof Symbol &&
                            Symbol.iterator in Object(e)
                        )
                            return Array.from(e);
                    })(e) ||
                    Wr(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Kr(e, t) {
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
                        var r = [],
                            n = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (
                                var a, c = e[Symbol.iterator]();
                                !(n = (a = c.next()).done) &&
                                (r.push(a.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (i = e);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return r;
                    })(e, t) ||
                    Wr(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Wr(e, t) {
                if (e) {
                    if ('string' == typeof e) return Vr(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name),
                        'Map' === r || 'Set' === r
                            ? Array.from(e)
                            : 'Arguments' === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? Vr(e, t)
                            : void 0
                    );
                }
            }
            function Vr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var $r = function (e) {
                var t = e.field,
                    r = e.disabled,
                    n = e.prefix,
                    o = e.config,
                    i = e.t,
                    a = e.updateConfig,
                    c = Kr(V(''), 2),
                    l = c[0],
                    s = c[1],
                    u = Kr(V(!1), 2),
                    d = u[0],
                    p = u[1],
                    f = i.tv.purposes,
                    m = new Set(o[t.name]),
                    v = function () {
                        return Array.from(Object.entries(f))
                            .filter(function (e) {
                                var t = Kr(e, 1)[0];
                                return !m.has(t);
                            })
                            .map(function (e) {
                                var t = Kr(e, 2),
                                    r = t[0],
                                    n = t[1];
                                return {
                                    name: r,
                                    description: i([
                                        'purposes',
                                        r,
                                        'description',
                                    ]),
                                    value:
                                        'en' === i.lang
                                            ? ''.concat(n.title.en)
                                            : ''
                                                  .concat(n.title.en, ' - ')
                                                  .concat(
                                                      i([
                                                          'purposes',
                                                          r,
                                                          'title',
                                                      ])
                                                  ),
                                };
                            });
                    },
                    h = Kr(V(v()), 2),
                    y = h[0],
                    b = h[1],
                    g = o[t.name].map(function (e) {
                        return ke(
                            'li',
                            { key: e },
                            e,
                            ' ',
                            ke(
                                'a',
                                {
                                    onClick: function () {
                                        p(!0),
                                            a(
                                                [t.name],
                                                o[t.name].filter(function (t) {
                                                    return t !== e;
                                                })
                                            );
                                    },
                                },
                                '⤬'
                            )
                        );
                    });
                G(function () {
                    d && (b(v()), p(!1));
                });
                return ke(
                    'div',
                    { className: 'cm-purpose-select' },
                    ke('ul', { className: 'cm-purposes' }, g),
                    ke(kr, {
                        disabled: r,
                        search: l,
                        onSelect: function (e) {
                            o[t.name].find(function (t) {
                                return t === e.name;
                            }) ||
                                (o[t.name].push(e.name),
                                a([t.name], o[t.name])),
                                s(''),
                                p(!0);
                        },
                        setSearch: function (e) {
                            var t = Array.from(Object.entries(f))
                                .filter(function (t) {
                                    var r = Kr(t, 2),
                                        n = r[0];
                                    r[1];
                                    return (
                                        !m.has(n) &&
                                        ('' === e ||
                                            n
                                                .toLowerCase()
                                                .includes(l.toLowerCase()) ||
                                            i(['purposes', n, 'title'])
                                                .toLowerCase()
                                                .includes(l.toLowerCase()))
                                    );
                                })
                                .map(function (e) {
                                    return {
                                        name: e[0],
                                        description: i([
                                            'purposes',
                                            e[0],
                                            'description',
                                        ]),
                                        value: ''
                                            .concat(e[1].title.en, ' - ')
                                            .concat(
                                                i(['purposes', e[0], 'title'])
                                            ),
                                    };
                                });
                            t.length > 10 && (t = []),
                                '' !== e &&
                                    t.push({
                                        name: e,
                                        description: i([
                                            'purpose',
                                            'descriptionNotice',
                                        ]),
                                        value: ''
                                            .concat(e, ' (')
                                            .concat(i(['purpose', 'add']), ')'),
                                    }),
                                b(t),
                                s(e);
                        },
                        candidates: y,
                        label: i(
                            ['fields'].concat(Hr(n || []), [t.name, 'label'])
                        ),
                        description: i(
                            ['fields'].concat(Hr(n || []), [
                                t.name,
                                'description',
                            ])
                        ),
                    })
                );
            };
            function Gr(e, t) {
                var r;
                if (
                    'undefined' == typeof Symbol ||
                    null == e[Symbol.iterator]
                ) {
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Zr(e, t);
                            var r = Object.prototype.toString
                                .call(e)
                                .slice(8, -1);
                            'Object' === r &&
                                e.constructor &&
                                (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r)
                                return Array.from(e);
                            if (
                                'Arguments' === r ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    r
                                )
                            )
                                return Zr(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        r && (e = r);
                        var n = 0,
                            o = function () {};
                        return {
                            s: o,
                            n: function () {
                                return n >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[n++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: o,
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
                        r = e[Symbol.iterator]();
                    },
                    n: function () {
                        var e = r.next();
                        return (a = e.done), e;
                    },
                    e: function (e) {
                        (c = !0), (i = e);
                    },
                    f: function () {
                        try {
                            a || null == r.return || r.return();
                        } finally {
                            if (c) throw i;
                        }
                    },
                };
            }
            function Zr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function Yr(e, t, r) {
                var n = e[t];
                if (void 0 !== n) {
                    var o,
                        i = Gr(r);
                    try {
                        for (i.s(); !(o = i.n()).done; ) {
                            var a = o.value;
                            if (void 0 === n) return;
                            n = n[a];
                        }
                    } catch (e) {
                        i.e(e);
                    } finally {
                        i.f();
                    }
                    return n;
                }
            }
            function Jr(e, t, r) {
                var n,
                    o = e,
                    i = Gr(r);
                try {
                    for (i.s(); !(n = i.n()).done; ) {
                        var a = n.value;
                        if (void 0 === o) break;
                        o = o[a];
                    }
                } catch (e) {
                    i.e(e);
                } finally {
                    i.f();
                }
                return void 0 !== o && (o = o[t]), o;
            }
            function Xr(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return tn(e);
                    })(e) ||
                    (function (e) {
                        if (
                            'undefined' != typeof Symbol &&
                            Symbol.iterator in Object(e)
                        )
                            return Array.from(e);
                    })(e) ||
                    en(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Qr(e, t) {
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
                        var r = [],
                            n = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (
                                var a, c = e[Symbol.iterator]();
                                !(n = (a = c.next()).done) &&
                                (r.push(a.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (i = e);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return r;
                    })(e, t) ||
                    en(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function en(e, t) {
                if (e) {
                    if ('string' == typeof e) return tn(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name),
                        'Map' === r || 'Set' === r
                            ? Array.from(e)
                            : 'Arguments' === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? tn(e, t)
                            : void 0
                    );
                }
            }
            function tn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var rn = function (e) {
                var t = e.field,
                    r = e.services,
                    n = e.prefix,
                    o = (e.config, e.t),
                    i = e.updateConfig,
                    a = Qr(V(''), 2),
                    c = a[0],
                    l = a[1],
                    s = Qr(V(!1), 2),
                    u = s[0],
                    d = s[1],
                    p = function (e) {
                        return (
                            Yr(e.spec.translations || {}, o.lang, ['title']) ||
                            Yr(e.spec.translations || {}, 'zz', ['title']) ||
                            Ae(e.name)
                        );
                    },
                    f = function (e) {
                        return e
                            .sort(function (e, t) {
                                return p(e) > p(t) ? 1 : -1;
                            })
                            .map(function (e) {
                                return {
                                    service: e,
                                    name: e.name,
                                    value: p(e),
                                };
                            });
                    },
                    m = Qr(V(f(r)), 2),
                    v = m[0],
                    h = m[1];
                G(function () {
                    u && (h(f(r)), d(!1));
                });
                return ke(
                    'div',
                    { className: 'cm-service-select' },
                    ke(kr, {
                        search: c,
                        onSelect: function (e) {
                            if (void 0 === e) {
                                if (!('' !== e && v.length > 0)) return;
                                e = v[0];
                            }
                            i(['services', null], e.service.spec), l(''), d(!0);
                        },
                        setSearch: function (e) {
                            var t,
                                n = f(
                                    (t = e)
                                        ? r.filter(function (e) {
                                              return p(e)
                                                  .toLowerCase()
                                                  .includes(t.toLowerCase());
                                          })
                                        : r
                                );
                            '' !== e &&
                                n.unshift({
                                    name: e,
                                    service: {
                                        spec: {
                                            name: e,
                                            cookies: [],
                                            purposes: [],
                                            requests: [],
                                            version: 1,
                                        },
                                    },
                                    value: ''
                                        .concat(e, ' (')
                                        .concat(
                                            o(['fields', 'services', 'addNew']),
                                            ')'
                                        ),
                                }),
                                h(n),
                                l(e);
                        },
                        candidates: v,
                        label: o(
                            ['fields'].concat(Xr(n || []), [t.name, 'label'])
                        ),
                        description: o(
                            ['fields'].concat(Xr(n || []), [
                                t.name,
                                'description',
                            ])
                        ),
                    })
                );
            };
            function nn(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return on(e);
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
                        if ('string' == typeof e) return on(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ('Map' === r || 'Set' === r) return Array.from(e);
                        if (
                            'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return on(e, t);
                    })(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function on(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var an = function (e) {
                var t = e.t,
                    r = e.config,
                    n = e.updateConfig,
                    o = new Set(),
                    i = r.purposeOrder || [];
                r.services.forEach(function (e) {
                    return e.purposes.forEach(function (e) {
                        return o.add(e);
                    });
                });
                var a = Array.from(o.values()).sort(function (e, t) {
                    return i.indexOf(e) - i.indexOf(t);
                });
                o.forEach(function (e) {
                    -1 === i.indexOf(e) && i.push(e);
                });
                var c = function (e, t) {
                        var r = i.indexOf(e),
                            o = nn(i);
                        if (
                            !(
                                (0 === r && -1 === t) ||
                                (r === i.length - 1 && 1 === t)
                            )
                        ) {
                            var a = o[r + t];
                            (o[r + t] = e), (o[r] = a), n(['purposeOrder'], o);
                        }
                    },
                    l = a.map(function (e) {
                        var n = Yr(r.translations, t.lang, [
                                'purposes',
                                e,
                                'title',
                            ]),
                            o = Jr(t.tv, t.lang, ['purposes', e, 'title']);
                        return ke(
                            'li',
                            { key: e },
                            ke(
                                'span',
                                { className: 'cm-buttons' },
                                ke(
                                    'a',
                                    {
                                        className: 'cm-btn',
                                        onClick: function () {
                                            return c(e, -1);
                                        },
                                    },
                                    '↑'
                                ),
                                ke(
                                    'a',
                                    {
                                        className: 'cm-btn',
                                        onClick: function () {
                                            return c(e, 1);
                                        },
                                    },
                                    '↓'
                                )
                            ),
                            ke('span', { className: 'cm-value' }, n || o || e)
                        );
                    });
                return ke(
                    'div',
                    { className: 'cm-purpose-order' },
                    ke('h3', null, t(['purposeOrder', 'title'])),
                    ke(
                        'p',
                        { className: 'cm-description' },
                        t(['purposeOrder', 'description'])
                    ),
                    ke('ul', null, l)
                );
            };
            function cn(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return un(e);
                    })(e) ||
                    (function (e) {
                        if (
                            'undefined' != typeof Symbol &&
                            Symbol.iterator in Object(e)
                        )
                            return Array.from(e);
                    })(e) ||
                    sn(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function ln(e, t) {
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
                        var r = [],
                            n = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (
                                var a, c = e[Symbol.iterator]();
                                !(n = (a = c.next()).done) &&
                                (r.push(a.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (i = e);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return r;
                    })(e, t) ||
                    sn(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function sn(e, t) {
                if (e) {
                    if ('string' == typeof e) return un(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name),
                        'Map' === r || 'Set' === r
                            ? Array.from(e)
                            : 'Arguments' === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? un(e, t)
                            : void 0
                    );
                }
            }
            function un(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var dn = function (e) {
                var t = e.field,
                    r = e.disabled,
                    n = e.prefix,
                    o = e.config,
                    i = e.t,
                    a = e.updateConfig,
                    c = ln(V(''), 2),
                    l = c[0],
                    s = c[1],
                    u = ln(V(!1), 2),
                    d = u[0],
                    p = u[1],
                    f = i.tv.themes,
                    m = new Set(o[t.name] || []),
                    v = function () {
                        return Array.from(Object.entries(f))
                            .filter(function (e) {
                                var t = ln(e, 1)[0];
                                return !m.has(t);
                            })
                            .map(function (e) {
                                var t = ln(e, 2),
                                    r = t[0],
                                    n = t[1];
                                return {
                                    name: r,
                                    description: i([
                                        'themes',
                                        r,
                                        'description',
                                    ]),
                                    value:
                                        'en' === i.lang
                                            ? ''.concat(n.title.en)
                                            : ''
                                                  .concat(n.title.en, ' - ')
                                                  .concat(
                                                      i(['themes', r, 'title'])
                                                  ),
                                };
                            });
                    },
                    h = ln(V(v()), 2),
                    y = h[0],
                    b = h[1],
                    g = Array.from(m).map(function (e) {
                        return ke(
                            'li',
                            { key: e },
                            e,
                            ' ',
                            ke(
                                'a',
                                {
                                    onClick: function () {
                                        p(!0),
                                            a(
                                                [t.name],
                                                o[t.name].filter(function (t) {
                                                    return t !== e;
                                                })
                                            );
                                    },
                                },
                                '⤬'
                            )
                        );
                    });
                G(function () {
                    d && (b(v()), p(!1));
                });
                return ke(
                    'div',
                    { className: 'cm-theme-select' },
                    ke('ul', { className: 'cm-themes' }, g),
                    ke(kr, {
                        disabled: r,
                        search: l,
                        onSelect: function (e) {
                            var r = o[t.name] || [];
                            r.find(function (t) {
                                return t === e.name;
                            }) || (r.push(e.name), a([t.name], r)),
                                s(''),
                                p(!0);
                        },
                        setSearch: function (e) {
                            var t = Array.from(Object.entries(f))
                                .filter(function (t) {
                                    var r = ln(t, 2),
                                        n = r[0];
                                    r[1];
                                    return (
                                        !m.has(n) &&
                                        ('' === e ||
                                            n
                                                .toLowerCase()
                                                .includes(l.toLowerCase()) ||
                                            i(['themes', n, 'title'])
                                                .toLowerCase()
                                                .includes(l.toLowerCase()))
                                    );
                                })
                                .map(function (e) {
                                    return {
                                        name: e[0],
                                        description: i([
                                            'themes',
                                            e[0],
                                            'description',
                                        ]),
                                        value: ''.concat(
                                            i(['themes', e[0], 'title'])
                                        ),
                                    };
                                });
                            t.length > 10 && (t = t.slice(0, 10)), b(t), s(e);
                        },
                        candidates: y,
                        label: i(
                            ['fields'].concat(cn(n || []), [t.name, 'label'])
                        ),
                        description: i(
                            ['fields'].concat(cn(n || []), [
                                t.name,
                                'description',
                            ])
                        ),
                    })
                );
            };
            var pn = r(131),
                fn = r.n(pn),
                mn = function (e) {
                    var t = e.className,
                        r = e.children;
                    return ke('div', { className: fn()('cm-list', t) }, r);
                },
                vn = function (e) {
                    var t = e.children;
                    return ke('div', { className: 'cm-item cm-is-header' }, t);
                },
                hn = function (e) {
                    var t = e.children,
                        r = e.size;
                    return ke(
                        'div',
                        {
                            className: 'cm-col cm-is-'.concat(
                                void 0 === r ? 'md' : r
                            ),
                        },
                        t
                    );
                },
                yn = function (e) {
                    var t = e.children,
                        r = e.isCard,
                        n = void 0 === r || r,
                        o = e.onClick;
                    return ke(
                        'div',
                        {
                            className: fn()('cm-item', {
                                'cm-is-card': n,
                                'cm-is-clickable': o,
                            }),
                            onClick: function (e) {
                                return o();
                            },
                        },
                        t
                    );
                };
            function bn(e) {
                return (bn =
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
            function gn(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function kn(e, t) {
                return (kn =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function wn(e) {
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
                    var r,
                        n = Sn(e);
                    if (t) {
                        var o = Sn(this).constructor;
                        r = Reflect.construct(n, arguments, o);
                    } else r = n.apply(this, arguments);
                    return xn(this, r);
                };
            }
            function xn(e, t) {
                return !t || ('object' !== bn(t) && 'function' != typeof t)
                    ? _n(e)
                    : t;
            }
            function _n(e) {
                if (void 0 === e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return e;
            }
            function Sn(e) {
                return (Sn = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            yn.propTypes = {
                children: je.a.node,
                isCard: je.a.bool,
                onClick: je.a.func,
            };
            var jn = function (e) {
                var t = e.children;
                return ke(
                    An,
                    { title: ke('span', { className: 'cm-icon' }, '…') },
                    ke('ul', { className: 'cm-dropdownmenu' }, t)
                );
            };
            jn.propTypes = { children: je.a.node };
            var On = function (e) {
                var t = e.icon,
                    r = e.children,
                    n = e.onClick;
                return ke(
                    'li',
                    null,
                    ke(
                        'a',
                        {
                            onClick: function (e) {
                                e.preventDefault(), e.stopPropagation(), n();
                            },
                        },
                        t && ke('span', { className: 'cm-icon' }, t),
                        ke('span', null, r)
                    )
                );
            };
            On.propTypes = {
                children: je.a.node,
                icon: je.a.string,
                onClick: je.a.func.isRequired,
            };
            var An = (function (e) {
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
                        t && kn(e, t);
                })(i, e);
                var t,
                    r,
                    n,
                    o = wn(i);
                function i(e) {
                    var t, r, n, a;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, i),
                        (t = o.call(this, e)),
                        (r = _n(t)),
                        (a = function (e) {
                            var r = t.state.expanded;
                            e.preventDefault(),
                                e.stopPropagation(),
                                r ? t.hide() : t.show();
                        }),
                        (n = 'handleToggle') in r
                            ? Object.defineProperty(r, n, {
                                  value: a,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (r[n] = a),
                        (t.state = { expanded: !1, right: !1 }),
                        (t.ref = we()),
                        (t.handler = function (e) {
                            return t.handleClick(e);
                        }),
                        t
                    );
                }
                return (
                    (t = i),
                    (r = [
                        {
                            key: 'hide',
                            value: function () {
                                this.setState({ expanded: !1 }),
                                    document.removeEventListener(
                                        'click',
                                        this.handler,
                                        !1
                                    );
                            },
                        },
                        {
                            key: 'show',
                            value: function () {
                                this.setState({ expanded: !0 }),
                                    document.addEventListener(
                                        'click',
                                        this.handler,
                                        !1
                                    );
                            },
                        },
                        {
                            key: 'handleClick',
                            value: function (e) {
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    this.hide();
                            },
                        },
                        {
                            key: 'componentWillUnmount',
                            value: function () {
                                this.hide();
                            },
                        },
                        {
                            key: 'componentDidMount',
                            value: function () {
                                this.ref.current.getBoundingClientRect().left >
                                    0.5 * window.innerWidth &&
                                    this.setState({ right: !0 });
                            },
                        },
                        {
                            key: 'render',
                            value: function () {
                                var e = this.state,
                                    t = e.expanded,
                                    r = e.right,
                                    n = this.props,
                                    o = n.title,
                                    i = n.children;
                                return ke(
                                    'div',
                                    {
                                        ref: this.ref,
                                        className: fn()('cm-dropdown', {
                                            'is-right': r,
                                        }),
                                    },
                                    ke(
                                        'button',
                                        {
                                            'aria-expanded': t,
                                            type: 'button',
                                            tabIndex: '0',
                                            onClick: this.handleToggle,
                                        },
                                        o
                                    ),
                                    ke(
                                        'div',
                                        {
                                            className: fn()(
                                                'cm-dropdowncontent',
                                                { 'cm-dropdownexpanded': t }
                                            ),
                                        },
                                        i
                                    )
                                );
                            },
                        },
                    ]) && gn(t.prototype, r),
                    n && gn(t, n),
                    i
                );
            })(_e);
            An.propTypes = { children: je.a.node, title: je.a.node.isRequired };
            var Pn = {
                cookieConfig: [
                    {
                        name: 'pattern',
                        control: 'RetractingLabelInput',
                        validators: [],
                    },
                    {
                        name: 'path',
                        control: 'RetractingLabelInput',
                        validators: [],
                    },
                    {
                        name: 'domain',
                        control: 'RetractingLabelInput',
                        validators: [],
                    },
                ],
                serviceConfig: [
                    {
                        name: 'name',
                        control: 'RetractingLabelInput',
                        validators: [],
                        default: 'klaro',
                    },
                    {
                        name: 'purposes',
                        control: 'PurposeSelect',
                        validators: [],
                        default: 'klaro',
                    },
                    {
                        name: 'default',
                        control: 'Switch',
                        validators: [],
                        default: !0,
                    },
                    {
                        name: 'required',
                        control: 'Switch',
                        validators: [],
                        default: !1,
                    },
                    { control: 'Switch', validators: [], default: !1 },
                    {
                        name: 'optOut',
                        control: 'Switch',
                        validators: [],
                        default: !1,
                    },
                    {
                        name: 'onlyOnce',
                        control: 'Switch',
                        default: !1,
                        validators: [],
                    },
                    { name: 'cookies', control: 'Cookies', validators: [] },
                ],
                styling: [
                    {
                        name: 'theme',
                        control: 'ThemesSelect',
                        validators: [],
                        default: [],
                    },
                ],
                globals: [
                    {
                        name: 'languages',
                        control: 'LanguageSelect',
                        validators: [],
                        default: '',
                    },
                    {
                        name: 'elementID',
                        control: 'RetractingLabelInput',
                        validators: [],
                        default: 'klaro',
                    },
                    {
                        name: 'additionalClass',
                        control: 'RetractingLabelInput',
                        validators: [],
                        default: '',
                    },
                    {
                        name: 'storageMethod',
                        control: 'Select',
                        choices: ['cookie', 'localStorage'],
                        validators: [],
                        default: 'cookie',
                    },
                    {
                        name: 'storageName',
                        control: 'RetractingLabelInput',
                        validators: [],
                        default: 'klaro',
                    },
                    {
                        name: 'cookieDomain',
                        applicable: function (e) {
                            return 'cookie' === e.storageMethod;
                        },
                        control: 'RetractingLabelInput',
                        validators: [],
                        default: '',
                    },
                    {
                        name: 'cookiePath',
                        applicable: function (e) {
                            return 'cookie' === e.storageMethod;
                        },
                        control: 'RetractingLabelInput',
                        validators: [],
                        default: '',
                    },
                    {
                        name: 'htmlTexts',
                        control: 'Switch',
                        validators: [],
                        default: !1,
                    },
                    {
                        name: 'embedded',
                        control: 'Switch',
                        validators: [],
                        default: !1,
                    },
                    {
                        name: 'groupByPurpose',
                        control: 'Switch',
                        validators: [],
                        default: !0,
                    },
                    {
                        name: 'cookieExpiresAfterDays',
                        applicable: function (e) {
                            return 'cookie' === e.storageMethod;
                        },
                        control: 'Range',
                        controlProps: { min: 0, max: 356 },
                        validators: [],
                        default: 60,
                    },
                    {
                        name: 'privacyPolicy',
                        control: 'I18nInput',
                        validators: [],
                        controlProps: { default: !0 },
                    },
                    {
                        name: 'default',
                        control: 'Switch',
                        validators: [],
                        default: !1,
                    },
                    {
                        name: 'mustConsent',
                        control: 'Switch',
                        validators: [],
                        default: !1,
                    },
                    {
                        name: 'acceptAll',
                        control: 'Switch',
                        validators: [],
                        default: !0,
                    },
                    {
                        name: 'hideDeclineAll',
                        control: 'Switch',
                        validators: [],
                        default: !1,
                    },
                    {
                        name: 'hideLearnMore',
                        control: 'Switch',
                        validators: [],
                        default: !1,
                    },
                    {
                        name: 'hideToggleAll',
                        control: 'Switch',
                        validators: [],
                        default: !1,
                    },
                    {
                        name: 'noticeAsModal',
                        control: 'Switch',
                        validators: [],
                        default: !1,
                    },
                    {
                        name: 'disablePoweredBy',
                        control: 'Switch',
                        validators: [],
                        default: !1,
                    },
                    {
                        name: 'purposeOrder',
                        control: 'PurposeOrder',
                        validators: [],
                        default: [],
                    },
                ],
                groups: {},
            };
            function zn(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            function Cn() {
                return (Cn =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) &&
                                    (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function En(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return Nn(e);
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
                        if ('string' == typeof e) return Nn(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ('Map' === r || 'Set' === r) return Array.from(e);
                        if (
                            'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return Nn(e, t);
                    })(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Nn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var Rn = function (e) {
                    var t = e.t,
                        r = e.service,
                        n = e.onClick,
                        o = e.updateConfig;
                    return ke(
                        yn,
                        {
                            onClick: function () {
                                return n(r);
                            },
                            isCard: !0,
                            key: r._id,
                        },
                        ke(
                            hn,
                            { size: 'md' },
                            ke('p', { className: 'cm-name' }, r.name)
                        ),
                        ke(
                            hn,
                            { size: 'icon' },
                            ke(
                                jn,
                                null,
                                ke(
                                    On,
                                    {
                                        onClick: function () {
                                            return o(['services', r._id], null);
                                        },
                                    },
                                    t(['services', 'delete'])
                                )
                            )
                        )
                    );
                },
                In = function (e) {
                    var t = e.t,
                        r = e.config,
                        n = (e.disabled, e.onClick),
                        o = e.updateConfig,
                        i = r.services.map(function (e) {
                            return ke(Rn, {
                                key: e._id,
                                updateConfig: o,
                                onClick: n,
                                t: t,
                                service: e,
                            });
                        });
                    return ke(
                        xe,
                        null,
                        (i.length > 0 &&
                            ke(
                                mn,
                                { className: 'cm-service-list' },
                                ke(
                                    vn,
                                    null,
                                    ke(
                                        hn,
                                        { size: 'md' },
                                        t(['services', 'name'])
                                    ),
                                    ke(hn, { size: 'icon' }, t(['menu']))
                                ),
                                i
                            )) ||
                            ke(
                                'p',
                                { className: 'cm-no-services' },
                                t(['services', 'noServices'])
                            )
                    );
                },
                Tn = function (e) {
                    var t = e.t,
                        r = e.setState,
                        n = e.service,
                        o = e.updateServiceName,
                        i = e.updateConfig;
                    return void 0 === n
                        ? ke('div', null)
                        : ke(
                              'div',
                              { className: 'cm-service-details' },
                              ke(Dn, {
                                  setState: r,
                                  service: n,
                                  updateServiceName: o,
                                  t: t,
                                  updateConfig: i,
                              })
                          );
                },
                Dn = function (e) {
                    var t = e.service,
                        r = e.setState,
                        o = e.updateServiceName,
                        i = e.disabled,
                        a = e.updateConfig,
                        c = e.t,
                        l = Pn.serviceConfig.map(function (e) {
                            var r,
                                l = n[e.control];
                            return ke(
                                l,
                                Cn(
                                    (zn(
                                        (r = {
                                            disabled: i,
                                            key: e.name,
                                            prefix: ['services'],
                                            updateConfig: function (e, r) {
                                                a(
                                                    ['services', t._id].concat(
                                                        En(e)
                                                    ),
                                                    r
                                                ),
                                                    'name' === e[0] && o(r);
                                            },
                                            config: t,
                                            t: c,
                                        }),
                                        'key',
                                        e.name
                                    ),
                                    zn(r, 'field', e),
                                    r),
                                    e.controlProps || {}
                                )
                            );
                        });
                    return ke(
                        xe,
                        null,
                        ke(
                            'fieldset',
                            { className: 'cm-service-fields', disabled: i },
                            ke(
                                'h2',
                                null,
                                ke(
                                    'a',
                                    {
                                        onClick: function () {
                                            r({ service: void 0 });
                                        },
                                    },
                                    c(['services', 'title']),
                                    ' ›'
                                ),
                                ' ',
                                t.name
                            ),
                            l
                        )
                    );
                };
            function Mn(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            function Ln() {
                return (Ln =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) &&
                                    (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            var qn = r(115);
            function Un(e, t) {
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
                        var r = [],
                            n = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (
                                var a, c = e[Symbol.iterator]();
                                !(n = (a = c.next()).done) &&
                                (r.push(a.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (i = e);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return r;
                    })(e, t) ||
                    (function (e, t) {
                        if (!e) return;
                        if ('string' == typeof e) return Bn(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ('Map' === r || 'Set' === r) return Array.from(e);
                        if (
                            'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return Bn(e, t);
                    })(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Bn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function Fn(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            var Hn = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                'Cannot call a class as a function'
                            );
                    })(this, e),
                        (this.value = null);
                }
                var t, r, n;
                return (
                    (t = e),
                    (r = [
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
                    ]) && Fn(t.prototype, r),
                    n && Fn(t, n),
                    e
                );
            })();
            r(197);
            function Kn(e, t) {
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
                        var r = [],
                            n = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (
                                var a, c = e[Symbol.iterator]();
                                !(n = (a = c.next()).done) &&
                                (r.push(a.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (i = e);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return r;
                    })(e, t) ||
                    (function (e, t) {
                        if (!e) return;
                        if ('string' == typeof e) return Wn(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ('Map' === r || 'Set' === r) return Array.from(e);
                        if (
                            'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return Wn(e, t);
                    })(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Wn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var Vn = function (e) {
                    var t = e.t,
                        r = e.config,
                        n = e.onConfigAction,
                        o = e.onClick;
                    return ke(
                        yn,
                        {
                            onClick: function () {
                                return o(r);
                            },
                            isCard: !0,
                            key: r.name,
                        },
                        ke(
                            hn,
                            { size: 'icon cm-status' },
                            ke(
                                'span',
                                {
                                    title: r.status,
                                    className: 'cm-status-is-' + r.status,
                                },
                                'active' === r.status
                                    ? ke('span', null, '⊕')
                                    : ke('span', null, '⊗')
                            )
                        ),
                        ke(
                            hn,
                            { size: 'lg cm-name' },
                            ke(
                                'p',
                                null,
                                'default' === r.name
                                    ? t(['configs', 'default', 'title'])
                                    : r.name
                            )
                        ),
                        ke(
                            hn,
                            { size: 'icon' },
                            ke(
                                jn,
                                null,
                                !1,
                                ke(
                                    On,
                                    {
                                        onClick: function () {
                                            return n(r, 'activate');
                                        },
                                    },
                                    t(['configs', 'activate'])
                                ),
                                ke(
                                    On,
                                    {
                                        onClick: function () {
                                            return n(r, 'deactivate');
                                        },
                                    },
                                    t(['configs', 'deactivate'])
                                )
                            )
                        )
                    );
                },
                $n = function (e) {
                    var t = e.t,
                        r = e.configs,
                        n = e.onConfigAction,
                        o = e.onClick,
                        i =
                            (e.disabled,
                            r.map(function (e) {
                                return ke(Vn, {
                                    onClick: o,
                                    onConfigAction: n,
                                    key: e.name,
                                    t: t,
                                    config: e,
                                });
                            }));
                    return ke(
                        mn,
                        { className: 'cm-config-list' },
                        ke(
                            vn,
                            null,
                            ke(hn, { size: 'icon' }, t(['configs', 'status'])),
                            ke(hn, { size: 'lg' }, t(['configs', 'name'])),
                            ke(hn, { size: 'icon' }, t(['menu']))
                        ),
                        i
                    );
                },
                Gn = function (e) {
                    var t = e.t,
                        r = e.configs,
                        n = e.onClick,
                        o = e.onConfigAction,
                        i = e.disabled;
                    return ke(
                        'div',
                        { className: 'cm-ide-configs' },
                        ke(
                            'p',
                            { className: 'cm-section-description' },
                            t(['configs', 'description'])
                        ),
                        ke($n, {
                            t: t,
                            configs: r,
                            disabled: i,
                            onConfigAction: o,
                            onClick: n,
                        }),
                        !1
                    );
                };
            function Zn() {
                return (Zn =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) &&
                                    (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function Yn(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return Jn(e);
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
                        if ('string' == typeof e) return Jn(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name);
                        if ('Map' === r || 'Set' === r) return Array.from(e);
                        if (
                            'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                            return Jn(e, t);
                    })(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Jn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function Xn(e) {
                return (Xn =
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
            function Qn(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function eo(e, t) {
                return (eo =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function to(e) {
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
                    var r,
                        n = no(e);
                    if (t) {
                        var o = no(this).constructor;
                        r = Reflect.construct(n, arguments, o);
                    } else r = n.apply(this, arguments);
                    return ro(this, r);
                };
            }
            function ro(e, t) {
                return !t || ('object' !== Xn(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return e;
                      })(e)
                    : t;
            }
            function no(e) {
                return (no = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var oo = (function (e) {
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
                            t && eo(e, t);
                    })(i, e);
                    var t,
                        r,
                        n,
                        o = to(i);
                    function i(e) {
                        var t;
                        return (
                            (function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        'Cannot call a class as a function'
                                    );
                            })(this, i),
                            ((t = o.call(this, e)).state = { active: !1 }),
                            t
                        );
                    }
                    return (
                        (t = i),
                        (r = [
                            {
                                key: 'render',
                                value: function () {
                                    var e = this,
                                        t = this.state.active;
                                    return ke(
                                        'div',
                                        {
                                            className:
                                                'cm-tabs' +
                                                (this.state.active
                                                    ? ' cm-tabs-active'
                                                    : ''),
                                            onClick: function () {
                                                return e.setState({
                                                    active: !t,
                                                });
                                            },
                                        },
                                        ke(
                                            'span',
                                            { className: 'cm-tabs-more' },
                                            '∨'
                                        ),
                                        ke('ul', null, this.props.children)
                                    );
                                },
                            },
                        ]) && Qn(t.prototype, r),
                        n && Qn(t, n),
                        i
                    );
                })(_e),
                io = function (e) {
                    var t = e.active,
                        r = e.children,
                        n = (e.href, e.icon),
                        o = e.params,
                        i = e.onClick;
                    return ke(
                        'li',
                        { className: t ? 'cm-tab-is-active' : '' },
                        ke(
                            'a',
                            { params: o, onClick: i },
                            n &&
                                ke(
                                    'span',
                                    {
                                        className:
                                            'cm-tabs-icon cm-tabs-is-small',
                                    },
                                    n
                                ),
                            r
                        )
                    );
                };
            function ao(e) {
                return (ao =
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
            function co(e, t) {
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
                        var r = [],
                            n = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (
                                var a, c = e[Symbol.iterator]();
                                !(n = (a = c.next()).done) &&
                                (r.push(a.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (i = e);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return r;
                    })(e, t) ||
                    so(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function lo(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return uo(e);
                    })(e) ||
                    (function (e) {
                        if (
                            'undefined' != typeof Symbol &&
                            Symbol.iterator in Object(e)
                        )
                            return Array.from(e);
                    })(e) ||
                    so(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function so(e, t) {
                if (e) {
                    if ('string' == typeof e) return uo(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name),
                        'Map' === r || 'Set' === r
                            ? Array.from(e)
                            : 'Arguments' === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? uo(e, t)
                            : void 0
                    );
                }
            }
            function uo(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            io.propTypes = {
                active: je.a.bool,
                children: je.a.node.isRequired,
                href: je.a.string,
                icon: je.a.node,
                params: je.a.object,
                onClick: je.a.func,
            };
            var po = function (e) {
                    var t = e.hintKey,
                        r = e.translationKey,
                        n = e.noDefault,
                        o = e.onChange,
                        i = e.name,
                        a = e.translations,
                        c = e.languages,
                        l = e.t,
                        s =
                            (e.config,
                            e.value,
                            e.fallbackValue,
                            [].concat(lo(n ? [] : ['zz']), lo(c))),
                        u = l(['translations'].concat(lo(t), ['description']), {
                            name: i,
                        }),
                        d = s.map(function (e) {
                            var n = Yr(a, e, r),
                                c = Jr(l.tv, e, r),
                                s = (n && n === c) || (!n && void 0 !== c),
                                u = l(
                                    ['translations'].concat(lo(t), [
                                        'zz' === e ? 'defaultLabel' : 'label',
                                    ]),
                                    { name: i, language: l(['languages', e]) }
                                );
                            return ke(
                                'li',
                                { key: e },
                                ke(
                                    'span',
                                    { className: 'cm-lang' },
                                    'zz' !== e ? e : '_'
                                ),
                                ke(br, {
                                    onChange: function (t) {
                                        o(e, t === c || '' === t ? void 0 : t);
                                    },
                                    label: [].concat(
                                        lo(u),
                                        lo(
                                            s
                                                ? [' '].concat(
                                                      lo(
                                                          l([
                                                              'translations',
                                                              'defaultValue',
                                                          ])
                                                      )
                                                  )
                                                : []
                                        )
                                    ),
                                    value: n || c || '',
                                })
                            );
                        });
                    return ke(
                        'div',
                        { className: 'cm-translations-for-key' },
                        ke(
                            'h4',
                            null,
                            l(['translations'].concat(lo(t), ['label']), {
                                name: i,
                            })
                        ),
                        ke('p', null, u),
                        ke('ul', null, d)
                    );
                },
                fo = {
                    services: function (e) {
                        var t = e.t,
                            r = e.config,
                            n = e.updateConfig,
                            o = r.services.map(function (e) {
                                return ke(
                                    xe,
                                    { key: e.name },
                                    ke('h3', null, e.name),
                                    ke(po, {
                                        onChange: function (t, r) {
                                            return (function (e, t, r) {
                                                n(
                                                    [
                                                        'services',
                                                        e._id,
                                                        'translations',
                                                        t,
                                                        'title',
                                                    ],
                                                    r
                                                );
                                            })(e, t, r);
                                        },
                                        t: t,
                                        hintKey: ['services', 'title'],
                                        translationKey: ['title'],
                                        name: e.name,
                                        translations: e.translations || {},
                                        languages: r.languages,
                                    }),
                                    ke(po, {
                                        onChange: function (t, r) {
                                            return (function (e, t, r) {
                                                n(
                                                    [
                                                        'services',
                                                        e._id,
                                                        'translations',
                                                        t,
                                                        'description',
                                                    ],
                                                    r
                                                );
                                            })(e, t, r);
                                        },
                                        t: t,
                                        hintKey: ['services', 'description'],
                                        translationKey: ['description'],
                                        name: e.name,
                                        translations: e.translations || {},
                                        noDefault: !0,
                                        languages: r.languages,
                                    })
                                );
                            });
                        return ke(
                            xe,
                            null,
                            (o.length > 0 && o) ||
                                ke(
                                    'p',
                                    { className: 'cm-section-description' },
                                    t(['translations', 'noTranslations'])
                                )
                        );
                    },
                    purposes: function (e) {
                        var t = e.t,
                            r = e.config,
                            n = e.updateConfig,
                            o = new Set();
                        r.services.forEach(function (e) {
                            return e.purposes.forEach(function (e) {
                                return o.add(e);
                            });
                        });
                        var i = Array.from(o.keys()).map(function (e) {
                            return ke(
                                xe,
                                { key: e },
                                ke('h3', null, e),
                                ke(po, {
                                    t: t,
                                    onChange: function (t, r) {
                                        return (function (e, t, r) {
                                            n(
                                                [
                                                    'translations',
                                                    t,
                                                    'purposes',
                                                    e,
                                                    'title',
                                                ],
                                                r
                                            );
                                        })(e, t, r);
                                    },
                                    translationKey: ['purposes', e, 'title'],
                                    hintKey: ['purposes', 'title'],
                                    name: e,
                                    translations: r.translations,
                                    languages: r.languages,
                                }),
                                ke(po, {
                                    t: t,
                                    onChange: function (t, r) {
                                        return (function (e, t, r) {
                                            n(
                                                [
                                                    'translations',
                                                    t,
                                                    'purposes',
                                                    e,
                                                    'description',
                                                ],
                                                r
                                            );
                                        })(e, t, r);
                                    },
                                    hintKey: ['purposes', 'description'],
                                    translationKey: [
                                        'purposes',
                                        e,
                                        'description',
                                    ],
                                    name: e,
                                    translations: r.translations,
                                    noDefault: !0,
                                    languages: r.languages,
                                })
                            );
                        });
                        return ke(
                            xe,
                            null,
                            (i.length > 0 && i) ||
                                ke(
                                    'p',
                                    { className: 'cm-section-description' },
                                    t(['translations', 'noTranslations'])
                                )
                        );
                    },
                    privacyPolicyUrl: function (e) {
                        var t = e.t,
                            r = e.config,
                            n = e.updateConfig;
                        return ke(po, {
                            t: t,
                            hintKey: ['privacyPolicyUrl'],
                            name: 'privacyPolicyUrl',
                            translationKey: ['privacyPolicyUrl'],
                            translations: r.translations,
                            languages: r.languages,
                            onChange: function (e, t) {
                                n(['translations', e, 'privacyPolicyUrl'], t);
                            },
                        });
                    },
                    ui: function (e) {
                        var t = e.t,
                            r = e.config,
                            n = e.updateConfig;
                        return (function e(o, i) {
                            for (
                                var a = [],
                                    c = function () {
                                        var o = co(s[l], 2),
                                            c = o[0],
                                            u = o[1];
                                        if (
                                            0 === i.length &&
                                            ('purposes' === c ||
                                                'services' === c)
                                        )
                                            return 'continue';
                                        var d = void 0,
                                            p = [].concat(lo(i), [c]);
                                        (d =
                                            'object' === ao(u)
                                                ? e(u, p)
                                                : ke(po, {
                                                      onChange: function (
                                                          e,
                                                          t
                                                      ) {
                                                          return n(
                                                              [
                                                                  'translations',
                                                                  e,
                                                              ].concat(lo(p)),
                                                              t,
                                                              !0
                                                          );
                                                      },
                                                      t: t,
                                                      hintKey: p,
                                                      noDefault: !0,
                                                      translationKey: p,
                                                      name: p.join('.'),
                                                      key: p.join('.'),
                                                      translations:
                                                          r.translations,
                                                      languages: r.languages,
                                                  })),
                                            a.push(
                                                ke(
                                                    'div',
                                                    {
                                                        key: p.join('.'),
                                                        className:
                                                            'cm-key-translations',
                                                    },
                                                    d
                                                )
                                            );
                                    },
                                    l = 0,
                                    s = Object.entries(o);
                                l < s.length;
                                l++
                            )
                                c();
                            return ke(xe, null, a);
                        })(qn.a.en, []);
                    },
                };
            function mo(e) {
                return (mo =
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
            function vo() {
                return (vo =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) &&
                                    (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function ho(e, t) {
                if (null == e) return {};
                var r,
                    n,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            o = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++)
                            (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++)
                        (r = i[n]),
                            t.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    r
                                ) &&
                                    (o[r] = e[r]));
                }
                return o;
            }
            function yo(e, t) {
                if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
            }
            function bo(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function go(e, t, r) {
                return t && bo(e.prototype, t), r && bo(e, r), e;
            }
            function ko(e, t) {
                if ('function' != typeof t && null !== t)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                })),
                    t && wo(e, t);
            }
            function wo(e, t) {
                return (wo =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function xo(e) {
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
                    var r,
                        n = So(e);
                    if (t) {
                        var o = So(this).constructor;
                        r = Reflect.construct(n, arguments, o);
                    } else r = n.apply(this, arguments);
                    return _o(this, r);
                };
            }
            function _o(e, t) {
                return !t || ('object' !== mo(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return e;
                      })(e)
                    : t;
            }
            function So(e) {
                return (So = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var jo,
                Oo = {
                    globals: function (e) {
                        var t = e.config,
                            r = e.disabled,
                            o = e.controls,
                            i = e.updateConfig,
                            a = e.t,
                            c = Pn.globals.map(function (e) {
                                var c,
                                    l = o[e.control] || n[e.control];
                                return ke(
                                    l,
                                    Ln(
                                        (Mn(
                                            (c = {
                                                disabled: r,
                                                key: e.name,
                                                updateConfig: i,
                                                config: t,
                                                t: a,
                                            }),
                                            'key',
                                            e.name
                                        ),
                                        Mn(c, 'field', e),
                                        c),
                                        e.controlProps || {}
                                    )
                                );
                            });
                        return ke(
                            xe,
                            null,
                            ke(
                                'p',
                                { className: 'cm-section-description' },
                                a(['globals', 'description'])
                            ),
                            ke(
                                'fieldset',
                                { className: 'cm-global-fields', disabled: r },
                                c
                            )
                        );
                    },
                    services: function (e) {
                        var t,
                            r = e.t,
                            n = (e.tt, e.state),
                            o = e.services,
                            i = e.setState,
                            a = e.config,
                            c = e.disabled,
                            l = e.updateConfig,
                            s = (n = n || { service: void 0 }).service,
                            u = [];
                        return (
                            void 0 !== o &&
                                (u = o.filter(function (e) {
                                    return (
                                        void 0 ===
                                        a.services.find(function (t) {
                                            return (
                                                t.name === e.name ||
                                                t.id === e.id
                                            );
                                        })
                                    );
                                })),
                            (t =
                                void 0 !== s
                                    ? ke(Tn, {
                                          setState: i,
                                          updateServiceName: function (e) {
                                              return i({ service: e });
                                          },
                                          t: r,
                                          updateConfig: l,
                                          service: a.services.find(function (
                                              e
                                          ) {
                                              return e.name === s;
                                          }),
                                      })
                                    : ke(
                                          xe,
                                          null,
                                          ke(In, {
                                              t: r,
                                              config: a,
                                              onClick: function (e) {
                                                  return i({ service: e.name });
                                              },
                                              updateConfig: l,
                                              disabled: c,
                                          }),
                                          ke(
                                              'div',
                                              {
                                                  className:
                                                      'cm-config-controls',
                                              },
                                              ke(
                                                  'fieldset',
                                                  null,
                                                  ke(rn, {
                                                      services: u,
                                                      updateConfig: l,
                                                      config: a,
                                                      field: {
                                                          name: 'services',
                                                      },
                                                      t: r,
                                                  })
                                              )
                                          )
                                      )),
                            ke(
                                'div',
                                { className: 'cm-ide-services' },
                                ke(
                                    'p',
                                    { className: 'cm-section-description' },
                                    r(['services', 'description'])
                                ),
                                t
                            )
                        );
                    },
                    translations: function (e) {
                        var t = e.t,
                            r = e.state,
                            n = e.setState,
                            o = e.config,
                            i = e.updateConfig,
                            a = fo[(r = r || { tab: 'services' }).tab],
                            c = Array.from(Object.entries(fo)).map(function (
                                e
                            ) {
                                var o = co(e, 2),
                                    i = o[0];
                                o[1];
                                return ke(
                                    io,
                                    {
                                        active: i === r.tab,
                                        onClick: function () {
                                            return n({ tab: i });
                                        },
                                        key: i,
                                    },
                                    t(['translations', 'headers', i])
                                );
                            });
                        return ke(
                            xe,
                            null,
                            ke(
                                'p',
                                { className: 'cm-section-description' },
                                t(['translations', 'description'])
                            ),
                            ke(oo, null, c),
                            ke(
                                'div',
                                { className: 'cm-translations-fields' },
                                ke(a, { t: t, config: o, updateConfig: i })
                            )
                        );
                    },
                    testing: function (e) {
                        var t = e.t,
                            r = e.config,
                            n = Un(V(0), 2),
                            o = n[0],
                            i = n[1],
                            a = Un(V(''), 2),
                            c = a[0],
                            l = a[1],
                            s = Un(
                                V(
                                    r.languages.length > 0
                                        ? r.languages[0]
                                        : 'en'
                                ),
                                2
                            ),
                            u = s[0],
                            d = s[1],
                            p = Un(V(new Hn()), 2),
                            f = p[0],
                            m = p[1],
                            v = new Hn(),
                            h = new $t.default(r, f, v),
                            y = (function (e) {
                                var t = new Map();
                                return (
                                    rr(t, tr(qn.a)),
                                    rr(t, tr(e.translations || {})),
                                    t
                                );
                            })(r),
                            b = r.languages.map(function (e) {
                                return ke(
                                    'option',
                                    { key: e, value: e },
                                    t(['languages', e]),
                                    ' (',
                                    e,
                                    ')'
                                );
                            }),
                            g = function () {
                                window.open(
                                    c +
                                        '#klaro-testing&klaro-config='.concat(
                                            r.name
                                        )
                                );
                            },
                            k = Z(null);
                        return (
                            G(function () {
                                Xt(r, nr, k.current);
                            }),
                            ke(
                                'div',
                                { className: 'cm-demo' },
                                ke(
                                    'p',
                                    { className: 'cm-section-description' },
                                    t(['demo', 'description'])
                                ),
                                ke(
                                    'form',
                                    { onSubmit: g },
                                    ke(
                                        'div',
                                        { className: 'cm-config-controls' },
                                        ke(br, {
                                            value: c,
                                            onChange: l,
                                            label: t([
                                                'demo',
                                                'testOnSite',
                                                'label',
                                            ]),
                                        }),
                                        ke(
                                            'button',
                                            {
                                                className:
                                                    'cm-control-button cm-success',
                                                onClick: function (e) {
                                                    e.preventDefault(), g();
                                                },
                                            },
                                            t(['demo', 'testOnSite', 'button'])
                                        )
                                    )
                                ),
                                ke(
                                    'div',
                                    { className: 'cm-config-controls' },
                                    ke(
                                        'div',
                                        { className: 'cm-control' },
                                        ke(
                                            'select',
                                            {
                                                value: u,
                                                onChange: function (e) {
                                                    return d(e.target.value);
                                                },
                                            },
                                            b
                                        )
                                    ),
                                    ke(
                                        'div',
                                        { className: 'cm-control' },
                                        ke(
                                            'button',
                                            {
                                                className:
                                                    'cm-control-button cm-secondary',
                                                onClick: function () {
                                                    m(new Hn()), i(o + 1);
                                                },
                                            },
                                            t(['demo', 'reset'])
                                        ),
                                        ke(
                                            'button',
                                            {
                                                className: 'cm-control-button',
                                                onClick: function () {
                                                    i(o + 1);
                                                },
                                            },
                                            t(['demo', 'showManager'])
                                        )
                                    )
                                ),
                                ke(
                                    'div',
                                    { ref: k },
                                    ke(Vt, {
                                        t: function () {
                                            for (
                                                var e = arguments.length,
                                                    t = new Array(e),
                                                    n = 0;
                                                n < e;
                                                n++
                                            )
                                                t[n] = arguments[n];
                                            return Ie.apply(
                                                void 0,
                                                [
                                                    y,
                                                    u,
                                                    r.fallbackLang || 'zz',
                                                ].concat(t)
                                            );
                                        },
                                        lang: u,
                                        manager: h,
                                        config: r,
                                        show: o,
                                    })
                                )
                            )
                        );
                    },
                    json: function (e) {
                        var t = e.t,
                            r = e.config,
                            n = e.updateConfig,
                            o = Z(null),
                            i = Kn(V(), 2),
                            a = i[0],
                            c = i[1],
                            l = Kn(V(), 2),
                            s = l[0],
                            u = l[1],
                            d = JSON.stringify(r, void 0, 2),
                            p = new Blob([d], { type: 'application/json' }),
                            f = URL.createObjectURL(p);
                        return ke(
                            'div',
                            { className: 'cm-json' },
                            ke(
                                'h3',
                                { className: 'cm-space-lg' },
                                t(['json', 'importExport'])
                            ),
                            a &&
                                ke(
                                    'p',
                                    { className: 'cm-message cm-error' },
                                    a
                                ),
                            s &&
                                ke(
                                    'p',
                                    { className: 'cm-message cm-success' },
                                    s
                                ),
                            ke(
                                'form',
                                { className: 'cm-config-controls' },
                                ke(
                                    'fieldset',
                                    null,
                                    ke(
                                        'label',
                                        {
                                            htmlFor: 'cm-file-import',
                                            className: 'cm-upload-label',
                                        },
                                        ke(
                                            'a',
                                            {
                                                className:
                                                    'cm-control-button cm-success',
                                            },
                                            '↥ ',
                                            t(['json', 'import'])
                                        )
                                    ),
                                    ke('input', {
                                        onChange: function () {
                                            var e = (function (e) {
                                                var t = e.current.files[0];
                                                if (t)
                                                    return new Promise(
                                                        function (e, r) {
                                                            var n =
                                                                new FileReader();
                                                            (n.onload =
                                                                function () {
                                                                    return e(
                                                                        n.result
                                                                    );
                                                                }),
                                                                (n.onerror = r),
                                                                n.readAsText(t);
                                                        }
                                                    );
                                            })(o);
                                            u(),
                                                c(),
                                                e.then(function (e) {
                                                    try {
                                                        var r = JSON.parse(e);
                                                        n([], r),
                                                            u(
                                                                t([
                                                                    'json',
                                                                    'success',
                                                                ])
                                                            );
                                                    } catch (e) {
                                                        console.log(e),
                                                            c(
                                                                t([
                                                                    'json',
                                                                    'invalidJSON',
                                                                ])
                                                            );
                                                    }
                                                }),
                                                e.catch(function () {
                                                    return c(
                                                        t([
                                                            'json',
                                                            'cannotReadFile',
                                                        ])
                                                    );
                                                });
                                        },
                                        ref: o,
                                        className: 'cm-file-import',
                                        id: 'cm-file-import',
                                        type: 'file',
                                    }),
                                    ke(
                                        'a',
                                        {
                                            download: 'klaro-config.json',
                                            href: f,
                                            className:
                                                'cm-control-button cm-primary',
                                        },
                                        '↧ ',
                                        t(['json', 'export'])
                                    )
                                )
                            ),
                            ke('p', null, t(['json', 'rawText'])),
                            ke(
                                'pre',
                                null,
                                ke('code', null, JSON.stringify(r, void 0, 2))
                            )
                        );
                    },
                    styling: function (e) {
                        var t = e.config,
                            r = e.disabled,
                            o = e.controls,
                            i = e.updateConfig,
                            a = e.t,
                            c = Pn.styling.map(function (e) {
                                var c = o[e.control] || n[e.control];
                                return ke(
                                    c,
                                    Zn(
                                        {
                                            disabled: r,
                                            prefix: ['styling'],
                                            updateConfig: function (e, t) {
                                                return i(
                                                    ['styling'].concat(Yn(e)),
                                                    t,
                                                    !0
                                                );
                                            },
                                            config: t.styling || { themes: [] },
                                            t: a,
                                            key: e.name,
                                            field: e,
                                        },
                                        e.controlProps || {}
                                    )
                                );
                            });
                        return ke(
                            xe,
                            null,
                            ke(
                                'p',
                                { className: 'cm-section-description' },
                                a(['styling', 'description'])
                            ),
                            ke(
                                'fieldset',
                                { className: 'cm-styling-fields', disabled: r },
                                c
                            )
                        );
                    },
                },
                Ao = (function (e) {
                    ko(r, e);
                    var t = xo(r);
                    function r(e) {
                        return yo(this, r), t.call(this, e);
                    }
                    return (
                        go(r, [
                            {
                                key: 'render',
                                value: function () {
                                    var e,
                                        t = this.props,
                                        r = t.state,
                                        n = t.setState,
                                        o = t.className,
                                        i = t.onConfigAction,
                                        a = t.configs,
                                        c = t.t,
                                        l = ho(t, [
                                            'state',
                                            'setState',
                                            'className',
                                            'onConfigAction',
                                            'configs',
                                            't',
                                        ]),
                                        s = r.activeConfig;
                                    if (void 0 !== s) {
                                        var u = a.find(function (e) {
                                            return e.name === s;
                                        });
                                        e = ke(
                                            Po,
                                            vo(
                                                {
                                                    state: r.configState,
                                                    setState: function (e) {
                                                        var t = Object.assign(
                                                            {},
                                                            r
                                                        );
                                                        (t.configState = e),
                                                            n(t);
                                                    },
                                                    t: c,
                                                    unsetConfig: function () {
                                                        n({
                                                            activeConfig:
                                                                void 0,
                                                        });
                                                    },
                                                    config: u,
                                                },
                                                l
                                            )
                                        );
                                    } else
                                        e = ke(Gn, {
                                            onConfigAction: i,
                                            onClick: function (e) {
                                                return n({
                                                    activeConfig: e.name,
                                                });
                                            },
                                            configs: a,
                                            t: c,
                                        });
                                    return ke(
                                        'div',
                                        { className: o || 'klaro-ide' },
                                        e
                                    );
                                },
                            },
                        ]),
                        r
                    );
                })(_e),
                Po = (function (e) {
                    ko(r, e);
                    var t = xo(r);
                    function r() {
                        return yo(this, r), t.apply(this, arguments);
                    }
                    return (
                        go(r, [
                            {
                                key: 'render',
                                value: function () {
                                    var e = this.props,
                                        t = e.t,
                                        r = e.disabled,
                                        n = e.controls,
                                        o = e.setState,
                                        i = e.config,
                                        a = e.services,
                                        c = e.unsetConfig,
                                        l = e.saveConfig,
                                        s = e.resetConfig,
                                        u = e.updateConfig,
                                        d =
                                            (e.deleteConfig,
                                            this.props.state || {
                                                tab: 'services',
                                            }),
                                        p = d.tab,
                                        f = Oo[p],
                                        m = d[p],
                                        v = [
                                            'services',
                                            'globals',
                                            'translations',
                                            'json',
                                            'styling',
                                            'testing',
                                        ].map(function (e) {
                                            return ke(
                                                io,
                                                {
                                                    key: e,
                                                    onClick: function () {
                                                        return (function (e) {
                                                            return o({
                                                                tab: e,
                                                            });
                                                        })(e);
                                                    },
                                                    active: p === e,
                                                },
                                                t(['ide', e])
                                            );
                                        });
                                    return ke(
                                        xe,
                                        null,
                                        ke(
                                            'div',
                                            { className: 'cm-config-controls' },
                                            ke(
                                                'h2',
                                                null,
                                                ke(
                                                    'a',
                                                    {
                                                        onClick: function () {
                                                            return c();
                                                        },
                                                    },
                                                    t(['configs', 'title']),
                                                    ' ›'
                                                ),
                                                ' ',
                                                'default' === i.name
                                                    ? t([
                                                          'configs',
                                                          'default',
                                                          'title',
                                                      ])
                                                    : i.name
                                            ),
                                            ke(
                                                'fieldset',
                                                null,
                                                ke(
                                                    'button',
                                                    {
                                                        disabled:
                                                            r || !i.modified,
                                                        className:
                                                            'cm-control-button cm-secondary',
                                                        onClick: function (e) {
                                                            return (
                                                                e.preventDefault() ||
                                                                s(i.name)
                                                            );
                                                        },
                                                    },
                                                    t(['config', 'reset'])
                                                ),
                                                ke(
                                                    'button',
                                                    {
                                                        disabled:
                                                            r || !i.modified,
                                                        className:
                                                            'cm-control-button',
                                                        onClick: function (e) {
                                                            return (
                                                                e.preventDefault() ||
                                                                l(i.name)
                                                            );
                                                        },
                                                    },
                                                    t(['config', 'save'])
                                                ),
                                                !1
                                            )
                                        ),
                                        ke(oo, { key: 'tabs' }, v),
                                        ke(f, {
                                            state: m,
                                            setState: function (e) {
                                                var t = Object.assign({}, d);
                                                (t[p] = e), o(t);
                                            },
                                            disabled: r,
                                            services: a,
                                            config: i,
                                            updateConfig: function () {
                                                for (
                                                    var e = arguments.length,
                                                        t = new Array(e),
                                                        r = 0;
                                                    r < e;
                                                    r++
                                                )
                                                    t[r] = arguments[r];
                                                return u.apply(
                                                    void 0,
                                                    [i.name].concat(t)
                                                );
                                            },
                                            controls: n,
                                            t: t,
                                        })
                                    );
                                },
                            },
                        ]),
                        r
                    );
                })(_e),
                zo = {},
                Co = (r(201), tr(zo));
            function Eo(e) {
                var t = Ne(e),
                    r = or(e, !0);
                return ve(
                    ke(Ao, {
                        t: function () {
                            for (
                                var r = arguments.length,
                                    n = new Array(r),
                                    o = 0;
                                o < r;
                                o++
                            )
                                n[o] = arguments[o];
                            return Ie.apply(
                                void 0,
                                [Co, t, e.fallbackLang || 'en'].concat(n)
                            );
                        },
                        lang: t,
                        config: e,
                    }),
                    r
                );
            }
            function No(e) {
                Eo((e = e || jo));
            }
            function Ro() {
                return 'v' === 'unknown'[0] ? 'unknown'.slice(1) : 'unknown';
            }
            function Io() {
                No();
            }
            !(function () {
                var e = Object(Gt.b)('klaro');
                if (void 0 !== e) {
                    var t = e.getAttribute('data-config') || 'klaroConfig';
                    jo = window[t];
                    var r = e.getAttribute('data-style-prefix');
                    void 0 === r && (jo.stylePrefix = r),
                        void 0 !== jo &&
                            (/complete|interactive|loaded/.test(
                                document.readyState
                            )
                                ? Io()
                                : window.addEventListener(
                                      'DOMContentLoaded',
                                      Io
                                  ));
                }
            })();
        },
    ]);
});
