!(function (e, t) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define('translations', [], t)
        : 'object' == typeof exports
        ? (exports.translations = t())
        : (e.translations = t());
})(this, function () {
    return (function (e) {
        var t = {};
        function i(r) {
            if (t[r]) return t[r].exports;
            var n = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
        }
        return (
            (i.m = e),
            (i.c = t),
            (i.d = function (e, t, r) {
                i.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (i.r = function (e) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: 'Module',
                    }),
                    Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (i.t = function (e, t) {
                if ((1 & t && (e = i(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule)
                    return e;
                var r = Object.create(null);
                if (
                    (i.r(r),
                    Object.defineProperty(r, 'default', {
                        enumerable: !0,
                        value: e,
                    }),
                    2 & t && 'string' != typeof e)
                )
                    for (var n in e)
                        i.d(
                            r,
                            n,
                            function (t) {
                                return e[t];
                            }.bind(null, n)
                        );
                return r;
            }),
            (i.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return i.d(t, 'a', t), t;
            }),
            (i.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (i.p = ''),
            i((i.s = 181))
        );
    })([
        function (e, t, i) {
            var r = i(3),
                n = i(58),
                o = i(5),
                a = i(47),
                s = i(61),
                c = i(87),
                l = n('wks'),
                p = r.Symbol,
                u = c ? p : (p && p.withoutSetter) || a;
            e.exports = function (e) {
                return (
                    o(l, e) ||
                        (s && o(p, e)
                            ? (l[e] = p[e])
                            : (l[e] = u('Symbol.' + e))),
                    l[e]
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
        function (e, t, i) {
            var r = i(3),
                n = i(31).f,
                o = i(19),
                a = i(22),
                s = i(57),
                c = i(83),
                l = i(60);
            e.exports = function (e, t) {
                var i,
                    p,
                    u,
                    d,
                    v,
                    f = e.target,
                    m = e.global,
                    y = e.stat;
                if ((i = m ? r : y ? r[f] || s(f, {}) : (r[f] || {}).prototype))
                    for (p in t) {
                        if (
                            ((d = t[p]),
                            (u = e.noTargetGet
                                ? (v = n(i, p)) && v.value
                                : i[p]),
                            !l(m ? p : f + (y ? '.' : '#') + p, e.forced) &&
                                void 0 !== u)
                        ) {
                            if (typeof d == typeof u) continue;
                            c(d, u);
                        }
                        (e.sham || (u && u.sham)) && o(d, 'sham', !0),
                            a(i, p, d, e);
                    }
            };
        },
        function (e, t, i) {
            (function (t) {
                var i = function (e) {
                    return e && e.Math == Math && e;
                };
                e.exports =
                    i('object' == typeof globalThis && globalThis) ||
                    i('object' == typeof window && window) ||
                    i('object' == typeof self && self) ||
                    i('object' == typeof t && t) ||
                    Function('return this')();
            }.call(this, i(132)));
        },
        function (e, t) {
            e.exports = function (e) {
                return 'object' == typeof e
                    ? null !== e
                    : 'function' == typeof e;
            };
        },
        function (e, t) {
            var i = {}.hasOwnProperty;
            e.exports = function (e, t) {
                return i.call(e, t);
            };
        },
        function (e, t, i) {
            'use strict';
            var r = i(21),
                n = i(68),
                o = i(38),
                a = i(28),
                s = i(64),
                c = a.set,
                l = a.getterFor('Array Iterator');
            (e.exports = s(
                Array,
                'Array',
                function (e, t) {
                    c(this, {
                        type: 'Array Iterator',
                        target: r(e),
                        index: 0,
                        kind: t,
                    });
                },
                function () {
                    var e = l(this),
                        t = e.target,
                        i = e.kind,
                        r = e.index++;
                    return !t || r >= t.length
                        ? ((e.target = void 0), { value: void 0, done: !0 })
                        : 'keys' == i
                        ? { value: r, done: !1 }
                        : 'values' == i
                        ? { value: t[r], done: !1 }
                        : { value: [r, t[r]], done: !1 };
                },
                'values'
            )),
                (o.Arguments = o.Array),
                n('keys'),
                n('values'),
                n('entries');
        },
        function (e, t, i) {
            'use strict';
            var r = i(2),
                n = i(3),
                o = i(30),
                a = i(32),
                s = i(8),
                c = i(61),
                l = i(87),
                p = i(1),
                u = i(5),
                d = i(55),
                v = i(4),
                f = i(9),
                m = i(25),
                y = i(21),
                g = i(45),
                b = i(33),
                h = i(36),
                k = i(48),
                z = i(51),
                w = i(134),
                j = i(75),
                x = i(31),
                S = i(11),
                P = i(56),
                A = i(19),
                O = i(22),
                D = i(58),
                M = i(46),
                I = i(35),
                T = i(47),
                E = i(0),
                q = i(88),
                _ = i(89),
                C = i(37),
                N = i(28),
                L = i(49).forEach,
                V = M('hidden'),
                K = E('toPrimitive'),
                F = N.set,
                R = N.getterFor('Symbol'),
                B = Object.prototype,
                U = n.Symbol,
                H = o('JSON', 'stringify'),
                G = x.f,
                W = S.f,
                Z = w.f,
                Q = P.f,
                Y = D('symbols'),
                J = D('op-symbols'),
                $ = D('string-to-symbol-registry'),
                X = D('symbol-to-string-registry'),
                ee = D('wks'),
                te = n.QObject,
                ie = !te || !te.prototype || !te.prototype.findChild,
                re =
                    s &&
                    p(function () {
                        return (
                            7 !=
                            h(
                                W({}, 'a', {
                                    get: function () {
                                        return W(this, 'a', { value: 7 }).a;
                                    },
                                })
                            ).a
                        );
                    })
                        ? function (e, t, i) {
                              var r = G(B, t);
                              r && delete B[t],
                                  W(e, t, i),
                                  r && e !== B && W(B, t, r);
                          }
                        : W,
                ne = function (e, t) {
                    var i = (Y[e] = h(U.prototype));
                    return (
                        F(i, { type: 'Symbol', tag: e, description: t }),
                        s || (i.description = t),
                        i
                    );
                },
                oe = l
                    ? function (e) {
                          return 'symbol' == typeof e;
                      }
                    : function (e) {
                          return Object(e) instanceof U;
                      },
                ae = function (e, t, i) {
                    e === B && ae(J, t, i), f(e);
                    var r = g(t, !0);
                    return (
                        f(i),
                        u(Y, r)
                            ? (i.enumerable
                                  ? (u(e, V) && e[V][r] && (e[V][r] = !1),
                                    (i = h(i, { enumerable: b(0, !1) })))
                                  : (u(e, V) || W(e, V, b(1, {})),
                                    (e[V][r] = !0)),
                              re(e, r, i))
                            : W(e, r, i)
                    );
                },
                se = function (e, t) {
                    f(e);
                    var i = y(t),
                        r = k(i).concat(ue(i));
                    return (
                        L(r, function (t) {
                            (s && !ce.call(i, t)) || ae(e, t, i[t]);
                        }),
                        e
                    );
                },
                ce = function (e) {
                    var t = g(e, !0),
                        i = Q.call(this, t);
                    return (
                        !(this === B && u(Y, t) && !u(J, t)) &&
                        (!(
                            i ||
                            !u(this, t) ||
                            !u(Y, t) ||
                            (u(this, V) && this[V][t])
                        ) ||
                            i)
                    );
                },
                le = function (e, t) {
                    var i = y(e),
                        r = g(t, !0);
                    if (i !== B || !u(Y, r) || u(J, r)) {
                        var n = G(i, r);
                        return (
                            !n ||
                                !u(Y, r) ||
                                (u(i, V) && i[V][r]) ||
                                (n.enumerable = !0),
                            n
                        );
                    }
                },
                pe = function (e) {
                    var t = Z(y(e)),
                        i = [];
                    return (
                        L(t, function (e) {
                            u(Y, e) || u(I, e) || i.push(e);
                        }),
                        i
                    );
                },
                ue = function (e) {
                    var t = e === B,
                        i = Z(t ? J : y(e)),
                        r = [];
                    return (
                        L(i, function (e) {
                            !u(Y, e) || (t && !u(B, e)) || r.push(Y[e]);
                        }),
                        r
                    );
                };
            (c ||
                (O(
                    (U = function () {
                        if (this instanceof U)
                            throw TypeError('Symbol is not a constructor');
                        var e =
                                arguments.length && void 0 !== arguments[0]
                                    ? String(arguments[0])
                                    : void 0,
                            t = T(e),
                            i = function (e) {
                                this === B && i.call(J, e),
                                    u(this, V) &&
                                        u(this[V], t) &&
                                        (this[V][t] = !1),
                                    re(this, t, b(1, e));
                            };
                        return (
                            s && ie && re(B, t, { configurable: !0, set: i }),
                            ne(t, e)
                        );
                    }).prototype,
                    'toString',
                    function () {
                        return R(this).tag;
                    }
                ),
                O(U, 'withoutSetter', function (e) {
                    return ne(T(e), e);
                }),
                (P.f = ce),
                (S.f = ae),
                (x.f = le),
                (z.f = w.f = pe),
                (j.f = ue),
                (q.f = function (e) {
                    return ne(E(e), e);
                }),
                s &&
                    (W(U.prototype, 'description', {
                        configurable: !0,
                        get: function () {
                            return R(this).description;
                        },
                    }),
                    a || O(B, 'propertyIsEnumerable', ce, { unsafe: !0 }))),
            r({ global: !0, wrap: !0, forced: !c, sham: !c }, { Symbol: U }),
            L(k(ee), function (e) {
                _(e);
            }),
            r(
                { target: 'Symbol', stat: !0, forced: !c },
                {
                    for: function (e) {
                        var t = String(e);
                        if (u($, t)) return $[t];
                        var i = U(t);
                        return ($[t] = i), (X[i] = t), i;
                    },
                    keyFor: function (e) {
                        if (!oe(e)) throw TypeError(e + ' is not a symbol');
                        if (u(X, e)) return X[e];
                    },
                    useSetter: function () {
                        ie = !0;
                    },
                    useSimple: function () {
                        ie = !1;
                    },
                }
            ),
            r(
                { target: 'Object', stat: !0, forced: !c, sham: !s },
                {
                    create: function (e, t) {
                        return void 0 === t ? h(e) : se(h(e), t);
                    },
                    defineProperty: ae,
                    defineProperties: se,
                    getOwnPropertyDescriptor: le,
                }
            ),
            r(
                { target: 'Object', stat: !0, forced: !c },
                { getOwnPropertyNames: pe, getOwnPropertySymbols: ue }
            ),
            r(
                {
                    target: 'Object',
                    stat: !0,
                    forced: p(function () {
                        j.f(1);
                    }),
                },
                {
                    getOwnPropertySymbols: function (e) {
                        return j.f(m(e));
                    },
                }
            ),
            H) &&
                r(
                    {
                        target: 'JSON',
                        stat: !0,
                        forced:
                            !c ||
                            p(function () {
                                var e = U();
                                return (
                                    '[null]' != H([e]) ||
                                    '{}' != H({ a: e }) ||
                                    '{}' != H(Object(e))
                                );
                            }),
                    },
                    {
                        stringify: function (e, t, i) {
                            for (var r, n = [e], o = 1; arguments.length > o; )
                                n.push(arguments[o++]);
                            if (((r = t), (v(t) || void 0 !== e) && !oe(e)))
                                return (
                                    d(t) ||
                                        (t = function (e, t) {
                                            if (
                                                ('function' == typeof r &&
                                                    (t = r.call(this, e, t)),
                                                !oe(t))
                                            )
                                                return t;
                                        }),
                                    (n[1] = t),
                                    H.apply(null, n)
                                );
                        },
                    }
                );
            U.prototype[K] || A(U.prototype, K, U.prototype.valueOf),
                C(U, 'Symbol'),
                (I[V] = !0);
        },
        function (e, t, i) {
            var r = i(1);
            e.exports = !r(function () {
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
        function (e, t, i) {
            var r = i(4);
            e.exports = function (e) {
                if (!r(e)) throw TypeError(String(e) + ' is not an object');
                return e;
            };
        },
        function (e, t, i) {
            var r = i(63),
                n = i(22),
                o = i(139);
            r || n(Object.prototype, 'toString', o, { unsafe: !0 });
        },
        function (e, t, i) {
            var r = i(8),
                n = i(81),
                o = i(9),
                a = i(45),
                s = Object.defineProperty;
            t.f = r
                ? s
                : function (e, t, i) {
                      if ((o(e), (t = a(t, !0)), o(i), n))
                          try {
                              return s(e, t, i);
                          } catch (e) {}
                      if ('get' in i || 'set' in i)
                          throw TypeError('Accessors not supported');
                      return 'value' in i && (e[t] = i.value), e;
                  };
        },
        function (e, t, i) {
            'use strict';
            var r = i(2),
                n = i(8),
                o = i(3),
                a = i(5),
                s = i(4),
                c = i(11).f,
                l = i(83),
                p = o.Symbol;
            if (
                n &&
                'function' == typeof p &&
                (!('description' in p.prototype) || void 0 !== p().description)
            ) {
                var u = {},
                    d = function () {
                        var e =
                                arguments.length < 1 || void 0 === arguments[0]
                                    ? void 0
                                    : String(arguments[0]),
                            t =
                                this instanceof d
                                    ? new p(e)
                                    : void 0 === e
                                    ? p()
                                    : p(e);
                        return '' === e && (u[t] = !0), t;
                    };
                l(d, p);
                var v = (d.prototype = p.prototype);
                v.constructor = d;
                var f = v.toString,
                    m = 'Symbol(test)' == String(p('test')),
                    y = /^Symbol\((.*)\)[^)]+$/;
                c(v, 'description', {
                    configurable: !0,
                    get: function () {
                        var e = s(this) ? this.valueOf() : this,
                            t = f.call(e);
                        if (a(u, e)) return '';
                        var i = m ? t.slice(7, -1) : t.replace(y, '$1');
                        return '' === i ? void 0 : i;
                    },
                }),
                    r({ global: !0, forced: !0 }, { Symbol: d });
            }
        },
        function (e, t, i) {
            'use strict';
            var r = i(97).charAt,
                n = i(28),
                o = i(64),
                a = n.set,
                s = n.getterFor('String Iterator');
            o(
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
                        t = s(this),
                        i = t.string,
                        n = t.index;
                    return n >= i.length
                        ? { value: void 0, done: !0 }
                        : ((e = r(i, n)),
                          (t.index += e.length),
                          { value: e, done: !1 });
                }
            );
        },
        function (e, t, i) {
            i(89)('iterator');
        },
        ,
        function (e, t, i) {
            var r = i(3),
                n = i(111),
                o = i(6),
                a = i(19),
                s = i(0),
                c = s('iterator'),
                l = s('toStringTag'),
                p = o.values;
            for (var u in n) {
                var d = r[u],
                    v = d && d.prototype;
                if (v) {
                    if (v[c] !== p)
                        try {
                            a(v, c, p);
                        } catch (e) {
                            v[c] = p;
                        }
                    if ((v[l] || a(v, l, u), n[u]))
                        for (var f in o)
                            if (v[f] !== o[f])
                                try {
                                    a(v, f, o[f]);
                                } catch (e) {
                                    v[f] = o[f];
                                }
                }
            }
        },
        ,
        ,
        function (e, t, i) {
            var r = i(8),
                n = i(11),
                o = i(33);
            e.exports = r
                ? function (e, t, i) {
                      return n.f(e, t, o(1, i));
                  }
                : function (e, t, i) {
                      return (e[t] = i), e;
                  };
        },
        function (e, t, i) {
            var r = i(2),
                n = i(120);
            r(
                {
                    target: 'Array',
                    stat: !0,
                    forced: !i(78)(function (e) {
                        Array.from(e);
                    }),
                },
                { from: n }
            );
        },
        function (e, t, i) {
            var r = i(67),
                n = i(27);
            e.exports = function (e) {
                return r(n(e));
            };
        },
        function (e, t, i) {
            var r = i(3),
                n = i(19),
                o = i(5),
                a = i(57),
                s = i(74),
                c = i(28),
                l = c.get,
                p = c.enforce,
                u = String(String).split('String');
            (e.exports = function (e, t, i, s) {
                var c = !!s && !!s.unsafe,
                    l = !!s && !!s.enumerable,
                    d = !!s && !!s.noTargetGet;
                'function' == typeof i &&
                    ('string' != typeof t || o(i, 'name') || n(i, 'name', t),
                    (p(i).source = u.join('string' == typeof t ? t : ''))),
                    e !== r
                        ? (c ? !d && e[t] && (l = !0) : delete e[t],
                          l ? (e[t] = i) : n(e, t, i))
                        : l
                        ? (e[t] = i)
                        : a(t, i);
            })(Function.prototype, 'toString', function () {
                return ('function' == typeof this && l(this).source) || s(this);
            });
        },
        ,
        function (e, t, i) {
            var r = i(52),
                n = Math.min;
            e.exports = function (e) {
                return e > 0 ? n(r(e), 9007199254740991) : 0;
            };
        },
        function (e, t, i) {
            var r = i(27);
            e.exports = function (e) {
                return Object(r(e));
            };
        },
        ,
        function (e, t) {
            e.exports = function (e) {
                if (null == e) throw TypeError("Can't call method on " + e);
                return e;
            };
        },
        function (e, t, i) {
            var r,
                n,
                o,
                a = i(133),
                s = i(3),
                c = i(4),
                l = i(19),
                p = i(5),
                u = i(46),
                d = i(35),
                v = s.WeakMap;
            if (a) {
                var f = new v(),
                    m = f.get,
                    y = f.has,
                    g = f.set;
                (r = function (e, t) {
                    return g.call(f, e, t), t;
                }),
                    (n = function (e) {
                        return m.call(f, e) || {};
                    }),
                    (o = function (e) {
                        return y.call(f, e);
                    });
            } else {
                var b = u('state');
                (d[b] = !0),
                    (r = function (e, t) {
                        return l(e, b, t), t;
                    }),
                    (n = function (e) {
                        return p(e, b) ? e[b] : {};
                    }),
                    (o = function (e) {
                        return p(e, b);
                    });
            }
            e.exports = {
                set: r,
                get: n,
                has: o,
                enforce: function (e) {
                    return o(e) ? n(e) : r(e, {});
                },
                getterFor: function (e) {
                    return function (t) {
                        var i;
                        if (!c(t) || (i = n(t)).type !== e)
                            throw TypeError(
                                'Incompatible receiver, ' + e + ' required'
                            );
                        return i;
                    };
                },
            };
        },
        ,
        function (e, t, i) {
            var r = i(84),
                n = i(3),
                o = function (e) {
                    return 'function' == typeof e ? e : void 0;
                };
            e.exports = function (e, t) {
                return arguments.length < 2
                    ? o(r[e]) || o(n[e])
                    : (r[e] && r[e][t]) || (n[e] && n[e][t]);
            };
        },
        function (e, t, i) {
            var r = i(8),
                n = i(56),
                o = i(33),
                a = i(21),
                s = i(45),
                c = i(5),
                l = i(81),
                p = Object.getOwnPropertyDescriptor;
            t.f = r
                ? p
                : function (e, t) {
                      if (((e = a(e)), (t = s(t, !0)), l))
                          try {
                              return p(e, t);
                          } catch (e) {}
                      if (c(e, t)) return o(!n.f.call(e, t), e[t]);
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
            var i = {}.toString;
            e.exports = function (e) {
                return i.call(e).slice(8, -1);
            };
        },
        function (e, t) {
            e.exports = {};
        },
        function (e, t, i) {
            var r,
                n = i(9),
                o = i(116),
                a = i(59),
                s = i(35),
                c = i(117),
                l = i(73),
                p = i(46),
                u = p('IE_PROTO'),
                d = function () {},
                v = function (e) {
                    return '<script>' + e + '</script>';
                },
                f = function () {
                    try {
                        r = document.domain && new ActiveXObject('htmlfile');
                    } catch (e) {}
                    var e, t;
                    f = r
                        ? (function (e) {
                              e.write(v('')), e.close();
                              var t = e.parentWindow.Object;
                              return (e = null), t;
                          })(r)
                        : (((t = l('iframe')).style.display = 'none'),
                          c.appendChild(t),
                          (t.src = String('javascript:')),
                          (e = t.contentWindow.document).open(),
                          e.write(v('document.F=Object')),
                          e.close(),
                          e.F);
                    for (var i = a.length; i--; ) delete f.prototype[a[i]];
                    return f();
                };
            (s[u] = !0),
                (e.exports =
                    Object.create ||
                    function (e, t) {
                        var i;
                        return (
                            null !== e
                                ? ((d.prototype = n(e)),
                                  (i = new d()),
                                  (d.prototype = null),
                                  (i[u] = e))
                                : (i = f()),
                            void 0 === t ? i : o(i, t)
                        );
                    });
        },
        function (e, t, i) {
            var r = i(11).f,
                n = i(5),
                o = i(0)('toStringTag');
            e.exports = function (e, t, i) {
                e &&
                    !n((e = i ? e : e.prototype), o) &&
                    r(e, o, { configurable: !0, value: t });
            };
        },
        function (e, t) {
            e.exports = {};
        },
        ,
        function (e, t, i) {
            var r = i(50);
            e.exports = function (e, t, i) {
                if ((r(e), void 0 === t)) return e;
                switch (i) {
                    case 0:
                        return function () {
                            return e.call(t);
                        };
                    case 1:
                        return function (i) {
                            return e.call(t, i);
                        };
                    case 2:
                        return function (i, r) {
                            return e.call(t, i, r);
                        };
                    case 3:
                        return function (i, r, n) {
                            return e.call(t, i, r, n);
                        };
                }
                return function () {
                    return e.apply(t, arguments);
                };
            };
        },
        ,
        function (e, t, i) {
            var r = i(2),
                n = i(25),
                o = i(48);
            r(
                {
                    target: 'Object',
                    stat: !0,
                    forced: i(1)(function () {
                        o(1);
                    }),
                },
                {
                    keys: function (e) {
                        return o(n(e));
                    },
                }
            );
        },
        ,
        ,
        function (e, t, i) {
            var r = i(4);
            e.exports = function (e, t) {
                if (!r(e)) return e;
                var i, n;
                if (
                    t &&
                    'function' == typeof (i = e.toString) &&
                    !r((n = i.call(e)))
                )
                    return n;
                if ('function' == typeof (i = e.valueOf) && !r((n = i.call(e))))
                    return n;
                if (
                    !t &&
                    'function' == typeof (i = e.toString) &&
                    !r((n = i.call(e)))
                )
                    return n;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function (e, t, i) {
            var r = i(58),
                n = i(47),
                o = r('keys');
            e.exports = function (e) {
                return o[e] || (o[e] = n(e));
            };
        },
        function (e, t) {
            var i = 0,
                r = Math.random();
            e.exports = function (e) {
                return (
                    'Symbol(' +
                    String(void 0 === e ? '' : e) +
                    ')_' +
                    (++i + r).toString(36)
                );
            };
        },
        function (e, t, i) {
            var r = i(85),
                n = i(59);
            e.exports =
                Object.keys ||
                function (e) {
                    return r(e, n);
                };
        },
        function (e, t, i) {
            var r = i(40),
                n = i(67),
                o = i(25),
                a = i(24),
                s = i(101),
                c = [].push,
                l = function (e) {
                    var t = 1 == e,
                        i = 2 == e,
                        l = 3 == e,
                        p = 4 == e,
                        u = 6 == e,
                        d = 5 == e || u;
                    return function (v, f, m, y) {
                        for (
                            var g,
                                b,
                                h = o(v),
                                k = n(h),
                                z = r(f, m, 3),
                                w = a(k.length),
                                j = 0,
                                x = y || s,
                                S = t ? x(v, w) : i ? x(v, 0) : void 0;
                            w > j;
                            j++
                        )
                            if ((d || j in k) && ((b = z((g = k[j]), j, h)), e))
                                if (t) S[j] = b;
                                else if (b)
                                    switch (e) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return g;
                                        case 6:
                                            return j;
                                        case 2:
                                            c.call(S, g);
                                    }
                                else if (p) return !1;
                        return u ? -1 : l || p ? p : S;
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
        function (e, t) {
            e.exports = function (e) {
                if ('function' != typeof e)
                    throw TypeError(String(e) + ' is not a function');
                return e;
            };
        },
        function (e, t, i) {
            var r = i(85),
                n = i(59).concat('length', 'prototype');
            t.f =
                Object.getOwnPropertyNames ||
                function (e) {
                    return r(e, n);
                };
        },
        function (e, t) {
            var i = Math.ceil,
                r = Math.floor;
            e.exports = function (e) {
                return isNaN((e = +e)) ? 0 : (e > 0 ? r : i)(e);
            };
        },
        ,
        ,
        function (e, t, i) {
            var r = i(34);
            e.exports =
                Array.isArray ||
                function (e) {
                    return 'Array' == r(e);
                };
        },
        function (e, t, i) {
            'use strict';
            var r = {}.propertyIsEnumerable,
                n = Object.getOwnPropertyDescriptor,
                o = n && !r.call({ 1: 2 }, 1);
            t.f = o
                ? function (e) {
                      var t = n(this, e);
                      return !!t && t.enumerable;
                  }
                : r;
        },
        function (e, t, i) {
            var r = i(3),
                n = i(19);
            e.exports = function (e, t) {
                try {
                    n(r, e, t);
                } catch (i) {
                    r[e] = t;
                }
                return t;
            };
        },
        function (e, t, i) {
            var r = i(32),
                n = i(82);
            (e.exports = function (e, t) {
                return n[e] || (n[e] = void 0 !== t ? t : {});
            })('versions', []).push({
                version: '3.6.5',
                mode: r ? 'pure' : 'global',
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
        function (e, t, i) {
            var r = i(1),
                n = /#|\.prototype\./,
                o = function (e, t) {
                    var i = s[a(e)];
                    return (
                        i == l ||
                        (i != c && ('function' == typeof t ? r(t) : !!t))
                    );
                },
                a = (o.normalize = function (e) {
                    return String(e).replace(n, '.').toLowerCase();
                }),
                s = (o.data = {}),
                c = (o.NATIVE = 'N'),
                l = (o.POLYFILL = 'P');
            e.exports = o;
        },
        function (e, t, i) {
            var r = i(1);
            e.exports =
                !!Object.getOwnPropertySymbols &&
                !r(function () {
                    return !String(Symbol());
                });
        },
        function (e, t, i) {
            'use strict';
            var r = i(45),
                n = i(11),
                o = i(33);
            e.exports = function (e, t, i) {
                var a = r(t);
                a in e ? n.f(e, a, o(0, i)) : (e[a] = i);
            };
        },
        function (e, t, i) {
            var r = {};
            (r[i(0)('toStringTag')] = 'z'),
                (e.exports = '[object z]' === String(r));
        },
        function (e, t, i) {
            'use strict';
            var r = i(2),
                n = i(121),
                o = i(70),
                a = i(93),
                s = i(37),
                c = i(19),
                l = i(22),
                p = i(0),
                u = i(32),
                d = i(38),
                v = i(92),
                f = v.IteratorPrototype,
                m = v.BUGGY_SAFARI_ITERATORS,
                y = p('iterator'),
                g = function () {
                    return this;
                };
            e.exports = function (e, t, i, p, v, b, h) {
                n(i, t, p);
                var k,
                    z,
                    w,
                    j = function (e) {
                        if (e === v && O) return O;
                        if (!m && e in P) return P[e];
                        switch (e) {
                            case 'keys':
                            case 'values':
                            case 'entries':
                                return function () {
                                    return new i(this, e);
                                };
                        }
                        return function () {
                            return new i(this);
                        };
                    },
                    x = t + ' Iterator',
                    S = !1,
                    P = e.prototype,
                    A = P[y] || P['@@iterator'] || (v && P[v]),
                    O = (!m && A) || j(v),
                    D = ('Array' == t && P.entries) || A;
                if (
                    (D &&
                        ((k = o(D.call(new e()))),
                        f !== Object.prototype &&
                            k.next &&
                            (u ||
                                o(k) === f ||
                                (a
                                    ? a(k, f)
                                    : 'function' != typeof k[y] && c(k, y, g)),
                            s(k, x, !0, !0),
                            u && (d[x] = g))),
                    'values' == v &&
                        A &&
                        'values' !== A.name &&
                        ((S = !0),
                        (O = function () {
                            return A.call(this);
                        })),
                    (u && !h) || P[y] === O || c(P, y, O),
                    (d[t] = O),
                    v)
                )
                    if (
                        ((z = {
                            values: j('values'),
                            keys: b ? O : j('keys'),
                            entries: j('entries'),
                        }),
                        h)
                    )
                        for (w in z) (m || S || !(w in P)) && l(P, w, z[w]);
                    else r({ target: t, proto: !0, forced: m || S }, z);
                return z;
            };
        },
        function (e, t, i) {
            'use strict';
            var r = i(122),
                n = i(123);
            e.exports = r(
                'Set',
                function (e) {
                    return function () {
                        return e(
                            this,
                            arguments.length ? arguments[0] : void 0
                        );
                    };
                },
                n
            );
        },
        function (e, t) {
            e.exports = function (e, t, i) {
                if (!(e instanceof t))
                    throw TypeError(
                        'Incorrect ' + (i ? i + ' ' : '') + 'invocation'
                    );
                return e;
            };
        },
        function (e, t, i) {
            var r = i(1),
                n = i(34),
                o = ''.split;
            e.exports = r(function () {
                return !Object('z').propertyIsEnumerable(0);
            })
                ? function (e) {
                      return 'String' == n(e) ? o.call(e, '') : Object(e);
                  }
                : Object;
        },
        function (e, t, i) {
            var r = i(0),
                n = i(36),
                o = i(11),
                a = r('unscopables'),
                s = Array.prototype;
            null == s[a] && o.f(s, a, { configurable: !0, value: n(null) }),
                (e.exports = function (e) {
                    s[a][e] = !0;
                });
        },
        function (e, t, i) {
            var r = i(77),
                n = i(38),
                o = i(0)('iterator');
            e.exports = function (e) {
                if (null != e) return e[o] || e['@@iterator'] || n[r(e)];
            };
        },
        function (e, t, i) {
            var r = i(5),
                n = i(25),
                o = i(46),
                a = i(103),
                s = o('IE_PROTO'),
                c = Object.prototype;
            e.exports = a
                ? Object.getPrototypeOf
                : function (e) {
                      return (
                          (e = n(e)),
                          r(e, s)
                              ? e[s]
                              : 'function' == typeof e.constructor &&
                                e instanceof e.constructor
                              ? e.constructor.prototype
                              : e instanceof Object
                              ? c
                              : null
                      );
                  };
        },
        ,
        ,
        function (e, t, i) {
            var r = i(3),
                n = i(4),
                o = r.document,
                a = n(o) && n(o.createElement);
            e.exports = function (e) {
                return a ? o.createElement(e) : {};
            };
        },
        function (e, t, i) {
            var r = i(82),
                n = Function.toString;
            'function' != typeof r.inspectSource &&
                (r.inspectSource = function (e) {
                    return n.call(e);
                }),
                (e.exports = r.inspectSource);
        },
        function (e, t) {
            t.f = Object.getOwnPropertySymbols;
        },
        ,
        function (e, t, i) {
            var r = i(63),
                n = i(34),
                o = i(0)('toStringTag'),
                a =
                    'Arguments' ==
                    n(
                        (function () {
                            return arguments;
                        })()
                    );
            e.exports = r
                ? n
                : function (e) {
                      var t, i, r;
                      return void 0 === e
                          ? 'Undefined'
                          : null === e
                          ? 'Null'
                          : 'string' ==
                            typeof (i = (function (e, t) {
                                try {
                                    return e[t];
                                } catch (e) {}
                            })((t = Object(e)), o))
                          ? i
                          : a
                          ? n(t)
                          : 'Object' == (r = n(t)) &&
                            'function' == typeof t.callee
                          ? 'Arguments'
                          : r;
                  };
        },
        function (e, t, i) {
            var r = i(0)('iterator'),
                n = !1;
            try {
                var o = 0,
                    a = {
                        next: function () {
                            return { done: !!o++ };
                        },
                        return: function () {
                            n = !0;
                        },
                    };
                (a[r] = function () {
                    return this;
                }),
                    Array.from(a, function () {
                        throw 2;
                    });
            } catch (e) {}
            e.exports = function (e, t) {
                if (!t && !n) return !1;
                var i = !1;
                try {
                    var o = {};
                    (o[r] = function () {
                        return {
                            next: function () {
                                return { done: (i = !0) };
                            },
                        };
                    }),
                        e(o);
                } catch (e) {}
                return i;
            };
        },
        ,
        function (e, t, i) {
            var r = i(9),
                n = i(91),
                o = i(24),
                a = i(40),
                s = i(69),
                c = i(90),
                l = function (e, t) {
                    (this.stopped = e), (this.result = t);
                };
            (e.exports = function (e, t, i, p, u) {
                var d,
                    v,
                    f,
                    m,
                    y,
                    g,
                    b,
                    h = a(t, i, p ? 2 : 1);
                if (u) d = e;
                else {
                    if ('function' != typeof (v = s(e)))
                        throw TypeError('Target is not iterable');
                    if (n(v)) {
                        for (f = 0, m = o(e.length); m > f; f++)
                            if (
                                (y = p ? h(r((b = e[f]))[0], b[1]) : h(e[f])) &&
                                y instanceof l
                            )
                                return y;
                        return new l(!1);
                    }
                    d = v.call(e);
                }
                for (g = d.next; !(b = g.call(d)).done; )
                    if (
                        'object' == typeof (y = c(d, h, b.value, p)) &&
                        y &&
                        y instanceof l
                    )
                        return y;
                return new l(!1);
            }).stop = function (e) {
                return new l(!0, e);
            };
        },
        function (e, t, i) {
            var r = i(8),
                n = i(1),
                o = i(73);
            e.exports =
                !r &&
                !n(function () {
                    return (
                        7 !=
                        Object.defineProperty(o('div'), 'a', {
                            get: function () {
                                return 7;
                            },
                        }).a
                    );
                });
        },
        function (e, t, i) {
            var r = i(3),
                n = i(57),
                o = r['__core-js_shared__'] || n('__core-js_shared__', {});
            e.exports = o;
        },
        function (e, t, i) {
            var r = i(5),
                n = i(99),
                o = i(31),
                a = i(11);
            e.exports = function (e, t) {
                for (var i = n(t), s = a.f, c = o.f, l = 0; l < i.length; l++) {
                    var p = i[l];
                    r(e, p) || s(e, p, c(t, p));
                }
            };
        },
        function (e, t, i) {
            var r = i(3);
            e.exports = r;
        },
        function (e, t, i) {
            var r = i(5),
                n = i(21),
                o = i(86).indexOf,
                a = i(35);
            e.exports = function (e, t) {
                var i,
                    s = n(e),
                    c = 0,
                    l = [];
                for (i in s) !r(a, i) && r(s, i) && l.push(i);
                for (; t.length > c; )
                    r(s, (i = t[c++])) && (~o(l, i) || l.push(i));
                return l;
            };
        },
        function (e, t, i) {
            var r = i(21),
                n = i(24),
                o = i(100),
                a = function (e) {
                    return function (t, i, a) {
                        var s,
                            c = r(t),
                            l = n(c.length),
                            p = o(a, l);
                        if (e && i != i) {
                            for (; l > p; ) if ((s = c[p++]) != s) return !0;
                        } else
                            for (; l > p; p++)
                                if ((e || p in c) && c[p] === i)
                                    return e || p || 0;
                        return !e && -1;
                    };
                };
            e.exports = { includes: a(!0), indexOf: a(!1) };
        },
        function (e, t, i) {
            var r = i(61);
            e.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
        },
        function (e, t, i) {
            var r = i(0);
            t.f = r;
        },
        function (e, t, i) {
            var r = i(84),
                n = i(5),
                o = i(88),
                a = i(11).f;
            e.exports = function (e) {
                var t = r.Symbol || (r.Symbol = {});
                n(t, e) || a(t, e, { value: o.f(e) });
            };
        },
        function (e, t, i) {
            var r = i(9);
            e.exports = function (e, t, i, n) {
                try {
                    return n ? t(r(i)[0], i[1]) : t(i);
                } catch (t) {
                    var o = e.return;
                    throw (void 0 !== o && r(o.call(e)), t);
                }
            };
        },
        function (e, t, i) {
            var r = i(0),
                n = i(38),
                o = r('iterator'),
                a = Array.prototype;
            e.exports = function (e) {
                return void 0 !== e && (n.Array === e || a[o] === e);
            };
        },
        function (e, t, i) {
            'use strict';
            var r,
                n,
                o,
                a = i(70),
                s = i(19),
                c = i(5),
                l = i(0),
                p = i(32),
                u = l('iterator'),
                d = !1;
            [].keys &&
                ('next' in (o = [].keys())
                    ? (n = a(a(o))) !== Object.prototype && (r = n)
                    : (d = !0)),
                null == r && (r = {}),
                p ||
                    c(r, u) ||
                    s(r, u, function () {
                        return this;
                    }),
                (e.exports = {
                    IteratorPrototype: r,
                    BUGGY_SAFARI_ITERATORS: d,
                });
        },
        function (e, t, i) {
            var r = i(9),
                n = i(136);
            e.exports =
                Object.setPrototypeOf ||
                ('__proto__' in {}
                    ? (function () {
                          var e,
                              t = !1,
                              i = {};
                          try {
                              (e = Object.getOwnPropertyDescriptor(
                                  Object.prototype,
                                  '__proto__'
                              ).set).call(i, []),
                                  (t = i instanceof Array);
                          } catch (e) {}
                          return function (i, o) {
                              return (
                                  r(i),
                                  n(o),
                                  t ? e.call(i, o) : (i.__proto__ = o),
                                  i
                              );
                          };
                      })()
                    : void 0);
        },
        ,
        function (e, t, i) {
            'use strict';
            var r = i(30),
                n = i(11),
                o = i(0),
                a = i(8),
                s = o('species');
            e.exports = function (e) {
                var t = r(e),
                    i = n.f;
                a &&
                    t &&
                    !t[s] &&
                    i(t, s, {
                        configurable: !0,
                        get: function () {
                            return this;
                        },
                    });
            };
        },
        function (e, t, i) {
            var r = i(35),
                n = i(4),
                o = i(5),
                a = i(11).f,
                s = i(47),
                c = i(141),
                l = s('meta'),
                p = 0,
                u =
                    Object.isExtensible ||
                    function () {
                        return !0;
                    },
                d = function (e) {
                    a(e, l, { value: { objectID: 'O' + ++p, weakData: {} } });
                },
                v = (e.exports = {
                    REQUIRED: !1,
                    fastKey: function (e, t) {
                        if (!n(e))
                            return 'symbol' == typeof e
                                ? e
                                : ('string' == typeof e ? 'S' : 'P') + e;
                        if (!o(e, l)) {
                            if (!u(e)) return 'F';
                            if (!t) return 'E';
                            d(e);
                        }
                        return e[l].objectID;
                    },
                    getWeakData: function (e, t) {
                        if (!o(e, l)) {
                            if (!u(e)) return !0;
                            if (!t) return !1;
                            d(e);
                        }
                        return e[l].weakData;
                    },
                    onFreeze: function (e) {
                        return c && v.REQUIRED && u(e) && !o(e, l) && d(e), e;
                    },
                });
            r[l] = !0;
        },
        function (e, t, i) {
            var r = i(52),
                n = i(27),
                o = function (e) {
                    return function (t, i) {
                        var o,
                            a,
                            s = String(n(t)),
                            c = r(i),
                            l = s.length;
                        return c < 0 || c >= l
                            ? e
                                ? ''
                                : void 0
                            : (o = s.charCodeAt(c)) < 55296 ||
                              o > 56319 ||
                              c + 1 === l ||
                              (a = s.charCodeAt(c + 1)) < 56320 ||
                              a > 57343
                            ? e
                                ? s.charAt(c)
                                : o
                            : e
                            ? s.slice(c, c + 2)
                            : a - 56320 + ((o - 55296) << 10) + 65536;
                    };
                };
            e.exports = { codeAt: o(!1), charAt: o(!0) };
        },
        ,
        function (e, t, i) {
            var r = i(30),
                n = i(51),
                o = i(75),
                a = i(9);
            e.exports =
                r('Reflect', 'ownKeys') ||
                function (e) {
                    var t = n.f(a(e)),
                        i = o.f;
                    return i ? t.concat(i(e)) : t;
                };
        },
        function (e, t, i) {
            var r = i(52),
                n = Math.max,
                o = Math.min;
            e.exports = function (e, t) {
                var i = r(e);
                return i < 0 ? n(i + t, 0) : o(i, t);
            };
        },
        function (e, t, i) {
            var r = i(4),
                n = i(55),
                o = i(0)('species');
            e.exports = function (e, t) {
                var i;
                return (
                    n(e) &&
                        ('function' != typeof (i = e.constructor) ||
                        (i !== Array && !n(i.prototype))
                            ? r(i) && null === (i = i[o]) && (i = void 0)
                            : (i = void 0)),
                    new (void 0 === i ? Array : i)(0 === t ? 0 : t)
                );
            };
        },
        ,
        function (e, t, i) {
            var r = i(1);
            e.exports = !r(function () {
                function e() {}
                return (
                    (e.prototype.constructor = null),
                    Object.getPrototypeOf(new e()) !== e.prototype
                );
            });
        },
        function (e, t, i) {
            var r = i(4),
                n = i(93);
            e.exports = function (e, t, i) {
                var o, a;
                return (
                    n &&
                        'function' == typeof (o = t.constructor) &&
                        o !== i &&
                        r((a = o.prototype)) &&
                        a !== i.prototype &&
                        n(e, a),
                    e
                );
            };
        },
        ,
        ,
        function (e, t, i) {
            var r = i(22);
            e.exports = function (e, t, i) {
                for (var n in t) r(e, n, t[n], i);
                return e;
            };
        },
        ,
        ,
        ,
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
        ,
        ,
        function (e, t, i) {
            'use strict';
            i.d(t, 'a', function () {
                return n;
            }),
                i.d(t, 'b', function () {
                    return o;
                });
            i(7), i(12), i(14), i(20), i(6), i(42), i(10), i(65), i(13), i(16);
            function r(e) {
                return (r =
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
            function n(e) {
                for (var t = new Set([]), i = 0; i < e.services.length; i++)
                    for (
                        var r = e.services[i].purposes || [], n = 0;
                        n < r.length;
                        n++
                    )
                        t.add(r[n]);
                return Array.from(t);
            }
            function o(e, t, i) {
                void 0 === i && (i = !0);
                for (var n = Object.keys(t), a = 0; a < n.length; a++) {
                    var s = n[a],
                        c = t[s],
                        l = e[s];
                    'string' == typeof c
                        ? (i || void 0 === l) && (e[s] = c)
                        : 'object' === r(c) &&
                          ('object' === r(l)
                              ? o(l, c, i)
                              : (i || void 0 === l) && (e[s] = c));
                }
                return e;
            }
        },
        function (e, t, i) {
            'use strict';
            var r = i(144),
                n = i.n(r),
                o = i(145),
                a = i.n(o),
                s = i(146),
                c = i.n(s),
                l = i(147),
                p = i.n(l),
                u = i(148),
                d = i.n(u),
                v = i(149),
                f = i.n(v),
                m = i(150),
                y = i.n(m),
                g = i(151),
                b = i.n(g),
                h = i(152),
                k = i.n(h),
                z = i(153),
                w = i.n(z),
                j = i(154),
                x = i.n(j),
                S = i(155),
                P = i.n(S),
                A = i(156),
                O = i.n(A),
                D = i(157),
                M = i.n(D),
                I = i(158),
                T = i.n(I),
                E = i(159),
                q = i.n(E),
                _ = i(160),
                C = i.n(_),
                N = i(161),
                L = i.n(N),
                V = i(162),
                K = i.n(V),
                F = i(163),
                R = i.n(F),
                B = i(164),
                U = i.n(B),
                H = i(165),
                G = i.n(H),
                W = i(166),
                Z = i.n(W),
                Q = i(167),
                Y = i.n(Q);
            t.a = {
                ca: c.a,
                cs: p.a,
                da: d.a,
                de: f.a,
                el: y.a,
                en: b.a,
                zh: n.a,
                pt: a.a,
                es: k.a,
                fi: w.a,
                fr: x.a,
                gl: P.a,
                hu: O.a,
                hr: M.a,
                it: T.a,
                nl: q.a,
                no: C.a,
                ro: L.a,
                sr: K.a,
                sr_cyrl: R.a,
                sv: U.a,
                tr: G.a,
                pl: Z.a,
                ru: Y.a,
            };
        },
        function (e, t, i) {
            var r = i(8),
                n = i(11),
                o = i(9),
                a = i(48);
            e.exports = r
                ? Object.defineProperties
                : function (e, t) {
                      o(e);
                      for (var i, r = a(t), s = r.length, c = 0; s > c; )
                          n.f(e, (i = r[c++]), t[i]);
                      return e;
                  };
        },
        function (e, t, i) {
            var r = i(30);
            e.exports = r('document', 'documentElement');
        },
        ,
        ,
        function (e, t, i) {
            'use strict';
            var r = i(40),
                n = i(25),
                o = i(90),
                a = i(91),
                s = i(24),
                c = i(62),
                l = i(69);
            e.exports = function (e) {
                var t,
                    i,
                    p,
                    u,
                    d,
                    v,
                    f = n(e),
                    m = 'function' == typeof this ? this : Array,
                    y = arguments.length,
                    g = y > 1 ? arguments[1] : void 0,
                    b = void 0 !== g,
                    h = l(f),
                    k = 0;
                if (
                    (b && (g = r(g, y > 2 ? arguments[2] : void 0, 2)),
                    null == h || (m == Array && a(h)))
                )
                    for (i = new m((t = s(f.length))); t > k; k++)
                        (v = b ? g(f[k], k) : f[k]), c(i, k, v);
                else
                    for (
                        d = (u = h.call(f)).next, i = new m();
                        !(p = d.call(u)).done;
                        k++
                    )
                        (v = b ? o(u, g, [p.value, k], !0) : p.value),
                            c(i, k, v);
                return (i.length = k), i;
            };
        },
        function (e, t, i) {
            'use strict';
            var r = i(92).IteratorPrototype,
                n = i(36),
                o = i(33),
                a = i(37),
                s = i(38),
                c = function () {
                    return this;
                };
            e.exports = function (e, t, i) {
                var l = t + ' Iterator';
                return (
                    (e.prototype = n(r, { next: o(1, i) })),
                    a(e, l, !1, !0),
                    (s[l] = c),
                    e
                );
            };
        },
        function (e, t, i) {
            'use strict';
            var r = i(2),
                n = i(3),
                o = i(60),
                a = i(22),
                s = i(96),
                c = i(80),
                l = i(66),
                p = i(4),
                u = i(1),
                d = i(78),
                v = i(37),
                f = i(104);
            e.exports = function (e, t, i) {
                var m = -1 !== e.indexOf('Map'),
                    y = -1 !== e.indexOf('Weak'),
                    g = m ? 'set' : 'add',
                    b = n[e],
                    h = b && b.prototype,
                    k = b,
                    z = {},
                    w = function (e) {
                        var t = h[e];
                        a(
                            h,
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
                                          !(y && !p(e)) &&
                                          t.call(this, 0 === e ? 0 : e)
                                      );
                                  }
                                : 'get' == e
                                ? function (e) {
                                      return y && !p(e)
                                          ? void 0
                                          : t.call(this, 0 === e ? 0 : e);
                                  }
                                : 'has' == e
                                ? function (e) {
                                      return (
                                          !(y && !p(e)) &&
                                          t.call(this, 0 === e ? 0 : e)
                                      );
                                  }
                                : function (e, i) {
                                      return (
                                          t.call(this, 0 === e ? 0 : e, i), this
                                      );
                                  }
                        );
                    };
                if (
                    o(
                        e,
                        'function' != typeof b ||
                            !(
                                y ||
                                (h.forEach &&
                                    !u(function () {
                                        new b().entries().next();
                                    }))
                            )
                    )
                )
                    (k = i.getConstructor(t, e, m, g)), (s.REQUIRED = !0);
                else if (o(e, !0)) {
                    var j = new k(),
                        x = j[g](y ? {} : -0, 1) != j,
                        S = u(function () {
                            j.has(1);
                        }),
                        P = d(function (e) {
                            new b(e);
                        }),
                        A =
                            !y &&
                            u(function () {
                                for (var e = new b(), t = 5; t--; ) e[g](t, t);
                                return !e.has(-0);
                            });
                    P ||
                        (((k = t(function (t, i) {
                            l(t, k, e);
                            var r = f(new b(), t, k);
                            return null != i && c(i, r[g], r, m), r;
                        })).prototype = h),
                        (h.constructor = k)),
                        (S || A) && (w('delete'), w('has'), m && w('get')),
                        (A || x) && w(g),
                        y && h.clear && delete h.clear;
                }
                return (
                    (z[e] = k),
                    r({ global: !0, forced: k != b }, z),
                    v(k, e),
                    y || i.setStrong(k, e, m),
                    k
                );
            };
        },
        function (e, t, i) {
            'use strict';
            var r = i(11).f,
                n = i(36),
                o = i(107),
                a = i(40),
                s = i(66),
                c = i(80),
                l = i(64),
                p = i(95),
                u = i(8),
                d = i(96).fastKey,
                v = i(28),
                f = v.set,
                m = v.getterFor;
            e.exports = {
                getConstructor: function (e, t, i, l) {
                    var p = e(function (e, r) {
                            s(e, p, t),
                                f(e, {
                                    type: t,
                                    index: n(null),
                                    first: void 0,
                                    last: void 0,
                                    size: 0,
                                }),
                                u || (e.size = 0),
                                null != r && c(r, e[l], e, i);
                        }),
                        v = m(t),
                        y = function (e, t, i) {
                            var r,
                                n,
                                o = v(e),
                                a = g(e, t);
                            return (
                                a
                                    ? (a.value = i)
                                    : ((o.last = a =
                                          {
                                              index: (n = d(t, !0)),
                                              key: t,
                                              value: i,
                                              previous: (r = o.last),
                                              next: void 0,
                                              removed: !1,
                                          }),
                                      o.first || (o.first = a),
                                      r && (r.next = a),
                                      u ? o.size++ : e.size++,
                                      'F' !== n && (o.index[n] = a)),
                                e
                            );
                        },
                        g = function (e, t) {
                            var i,
                                r = v(e),
                                n = d(t);
                            if ('F' !== n) return r.index[n];
                            for (i = r.first; i; i = i.next)
                                if (i.key == t) return i;
                        };
                    return (
                        o(p.prototype, {
                            clear: function () {
                                for (
                                    var e = v(this), t = e.index, i = e.first;
                                    i;

                                )
                                    (i.removed = !0),
                                        i.previous &&
                                            (i.previous = i.previous.next =
                                                void 0),
                                        delete t[i.index],
                                        (i = i.next);
                                (e.first = e.last = void 0),
                                    u ? (e.size = 0) : (this.size = 0);
                            },
                            delete: function (e) {
                                var t = v(this),
                                    i = g(this, e);
                                if (i) {
                                    var r = i.next,
                                        n = i.previous;
                                    delete t.index[i.index],
                                        (i.removed = !0),
                                        n && (n.next = r),
                                        r && (r.previous = n),
                                        t.first == i && (t.first = r),
                                        t.last == i && (t.last = n),
                                        u ? t.size-- : this.size--;
                                }
                                return !!i;
                            },
                            forEach: function (e) {
                                for (
                                    var t,
                                        i = v(this),
                                        r = a(
                                            e,
                                            arguments.length > 1
                                                ? arguments[1]
                                                : void 0,
                                            3
                                        );
                                    (t = t ? t.next : i.first);

                                )
                                    for (
                                        r(t.value, t.key, this);
                                        t && t.removed;

                                    )
                                        t = t.previous;
                            },
                            has: function (e) {
                                return !!g(this, e);
                            },
                        }),
                        o(
                            p.prototype,
                            i
                                ? {
                                      get: function (e) {
                                          var t = g(this, e);
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
                        u &&
                            r(p.prototype, 'size', {
                                get: function () {
                                    return v(this).size;
                                },
                            }),
                        p
                    );
                },
                setStrong: function (e, t, i) {
                    var r = t + ' Iterator',
                        n = m(t),
                        o = m(r);
                    l(
                        e,
                        t,
                        function (e, t) {
                            f(this, {
                                type: r,
                                target: e,
                                state: n(e),
                                kind: t,
                                last: void 0,
                            });
                        },
                        function () {
                            for (
                                var e = o(this), t = e.kind, i = e.last;
                                i && i.removed;

                            )
                                i = i.previous;
                            return e.target &&
                                (e.last = i = i ? i.next : e.state.first)
                                ? 'keys' == t
                                    ? { value: i.key, done: !1 }
                                    : 'values' == t
                                    ? { value: i.value, done: !1 }
                                    : { value: [i.key, i.value], done: !1 }
                                : ((e.target = void 0),
                                  { value: void 0, done: !0 });
                        },
                        i ? 'entries' : 'values',
                        !i,
                        !0
                    ),
                        p(t);
                },
            };
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, t) {
            var i;
            i = (function () {
                return this;
            })();
            try {
                i = i || new Function('return this')();
            } catch (e) {
                'object' == typeof window && (i = window);
            }
            e.exports = i;
        },
        function (e, t, i) {
            var r = i(3),
                n = i(74),
                o = r.WeakMap;
            e.exports = 'function' == typeof o && /native code/.test(n(o));
        },
        function (e, t, i) {
            var r = i(21),
                n = i(51).f,
                o = {}.toString,
                a =
                    'object' == typeof window &&
                    window &&
                    Object.getOwnPropertyNames
                        ? Object.getOwnPropertyNames(window)
                        : [];
            e.exports.f = function (e) {
                return a && '[object Window]' == o.call(e)
                    ? (function (e) {
                          try {
                              return n(e);
                          } catch (e) {
                              return a.slice();
                          }
                      })(e)
                    : n(r(e));
            };
        },
        ,
        function (e, t, i) {
            var r = i(4);
            e.exports = function (e) {
                if (!r(e) && null !== e)
                    throw TypeError(
                        "Can't set " + String(e) + ' as a prototype'
                    );
                return e;
            };
        },
        ,
        ,
        function (e, t, i) {
            'use strict';
            var r = i(63),
                n = i(77);
            e.exports = r
                ? {}.toString
                : function () {
                      return '[object ' + n(this) + ']';
                  };
        },
        ,
        function (e, t, i) {
            var r = i(1);
            e.exports = !r(function () {
                return Object.isExtensible(Object.preventExtensions({}));
            });
        },
        ,
        ,
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
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, t, i) {
            'use strict';
            i.r(t);
            var r = i(115),
                n = i(114);
            i.d(t, 'updateConfig', function () {
                return n.b;
            }),
                (t.default = r.a);
        },
    ]);
});
