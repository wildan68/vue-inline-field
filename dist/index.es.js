import { reactive as ye, getCurrentScope as _e, onScopeDispose as $e, unref as Me, watch as ve, defineComponent as ge, ref as re, computed as oe, h as Z } from "vue";
const z = ye({
  components: {},
  locale: "en"
}), fe = () => ({
  setConfig: ({ components: m, locale: c }) => {
    z.components = { ...z.components, ...m }, c && (z.locale = c);
  },
  config: z
});
function Se(u) {
  return _e() ? ($e(u), !0) : !1;
}
function q(u) {
  return typeof u == "function" ? u() : Me(u);
}
const he = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const be = Object.prototype.toString, we = (u) => be.call(u) === "[object Object]", G = () => {
}, De = /* @__PURE__ */ Ye();
function Ye() {
  var u, m;
  return he && ((u = window == null ? void 0 : window.navigator) == null ? void 0 : u.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((m = window == null ? void 0 : window.navigator) == null ? void 0 : m.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
const me = he ? window : void 0;
function P(u) {
  var m;
  const c = q(u);
  return (m = c == null ? void 0 : c.$el) != null ? m : c;
}
function ie(...u) {
  let m, c, i, O;
  if (typeof u[0] == "string" || Array.isArray(u[0]) ? ([c, i, O] = u, m = me) : [m, c, i, O] = u, !m)
    return G;
  Array.isArray(c) || (c = [c]), Array.isArray(i) || (i = [i]);
  const M = [], y = () => {
    M.forEach((b) => b()), M.length = 0;
  }, v = (b, _, L, w) => (b.addEventListener(_, L, w), () => b.removeEventListener(_, L, w)), A = ve(
    () => [P(m), q(O)],
    ([b, _]) => {
      if (y(), !b)
        return;
      const L = we(_) ? { ..._ } : _;
      M.push(
        ...c.flatMap((w) => i.map((E) => v(b, w, E, L)))
      );
    },
    { immediate: !0, flush: "post" }
  ), D = () => {
    A(), y();
  };
  return Se(D), D;
}
let ae = !1;
function ke(u, m, c = {}) {
  const { window: i = me, ignore: O = [], capture: M = !0, detectIframe: y = !1 } = c;
  if (!i)
    return G;
  De && !ae && (ae = !0, Array.from(i.document.body.children).forEach((l) => l.addEventListener("click", G)), i.document.documentElement.addEventListener("click", G));
  let v = !0;
  const A = (l) => q(O).some((p) => {
    if (typeof p == "string")
      return Array.from(i.document.querySelectorAll(p)).some((Y) => Y === l.target || l.composedPath().includes(Y));
    {
      const Y = P(p);
      return Y && (l.target === Y || l.composedPath().includes(Y));
    }
  });
  function D(l) {
    const p = q(l);
    return p && p.$.subTree.shapeFlag === 16;
  }
  function b(l, p) {
    const Y = q(l), f = Y.$.subTree && Y.$.subTree.children;
    return f == null || !Array.isArray(f) ? !1 : f.some((j) => j.el === p.target || p.composedPath().includes(j.el));
  }
  const _ = (l) => {
    const p = P(u);
    if (l.target != null && !(!(p instanceof Element) && D(u) && b(u, l)) && !(!p || p === l.target || l.composedPath().includes(p))) {
      if (l.detail === 0 && (v = !A(l)), !v) {
        v = !0;
        return;
      }
      m(l);
    }
  };
  let L = !1;
  const w = [
    ie(i, "click", (l) => {
      L || (L = !0, setTimeout(() => {
        L = !1;
      }, 0), _(l));
    }, { passive: !0, capture: M }),
    ie(i, "pointerdown", (l) => {
      const p = P(u);
      v = !A(l) && !!(p && !l.composedPath().includes(p));
    }, { passive: !0 }),
    y && ie(i, "blur", (l) => {
      setTimeout(() => {
        var p;
        const Y = P(u);
        ((p = i.document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !(Y != null && Y.contains(i.document.activeElement)) && m(l);
      }, 0);
    })
  ].filter(Boolean);
  return () => w.forEach((l) => l());
}
function Oe(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var Q = { exports: {} }, Ae = Q.exports, le;
function pe() {
  return le || (le = 1, function(u, m) {
    (function(c, i) {
      u.exports = i();
    })(Ae, function() {
      var c = 1e3, i = 6e4, O = 36e5, M = "millisecond", y = "second", v = "minute", A = "hour", D = "day", b = "week", _ = "month", L = "quarter", w = "year", E = "date", l = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, f = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(s) {
        var n = ["th", "st", "nd", "rd"], e = s % 100;
        return "[" + s + (n[(e - 20) % 10] || n[e] || n[0]) + "]";
      } }, j = function(s, n, e) {
        var r = String(s);
        return !r || r.length >= n ? s : "" + Array(n + 1 - r.length).join(e) + s;
      }, te = { s: j, z: function(s) {
        var n = -s.utcOffset(), e = Math.abs(n), r = Math.floor(e / 60), t = e % 60;
        return (n <= 0 ? "+" : "-") + j(r, 2, "0") + ":" + j(t, 2, "0");
      }, m: function s(n, e) {
        if (n.date() < e.date()) return -s(e, n);
        var r = 12 * (e.year() - n.year()) + (e.month() - n.month()), t = n.clone().add(r, _), o = e - t < 0, a = n.clone().add(r + (o ? -1 : 1), _);
        return +(-(r + (e - t) / (o ? t - a : a - t)) || 0);
      }, a: function(s) {
        return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
      }, p: function(s) {
        return { M: _, y: w, w: b, d: D, D: E, h: A, m: v, s: y, ms: M, Q: L }[s] || String(s || "").toLowerCase().replace(/s$/, "");
      }, u: function(s) {
        return s === void 0;
      } }, J = "en", H = {};
      H[J] = f;
      var se = "$isDayjsObject", ne = function(s) {
        return s instanceof U || !(!s || !s[se]);
      }, N = function s(n, e, r) {
        var t;
        if (!n) return J;
        if (typeof n == "string") {
          var o = n.toLowerCase();
          H[o] && (t = o), e && (H[o] = e, t = o);
          var a = n.split("-");
          if (!t && a.length > 1) return s(a[0]);
        } else {
          var h = n.name;
          H[h] = n, t = h;
        }
        return !r && t && (J = t), t || !r && J;
      }, g = function(s, n) {
        if (ne(s)) return s.clone();
        var e = typeof n == "object" ? n : {};
        return e.date = s, e.args = arguments, new U(e);
      }, d = te;
      d.l = N, d.i = ne, d.w = function(s, n) {
        return g(s, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
      };
      var U = function() {
        function s(e) {
          this.$L = N(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[se] = !0;
        }
        var n = s.prototype;
        return n.parse = function(e) {
          this.$d = function(r) {
            var t = r.date, o = r.utc;
            if (t === null) return /* @__PURE__ */ new Date(NaN);
            if (d.u(t)) return /* @__PURE__ */ new Date();
            if (t instanceof Date) return new Date(t);
            if (typeof t == "string" && !/Z$/i.test(t)) {
              var a = t.match(p);
              if (a) {
                var h = a[2] - 1 || 0, $ = (a[7] || "0").substring(0, 3);
                return o ? new Date(Date.UTC(a[1], h, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, $)) : new Date(a[1], h, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, $);
              }
            }
            return new Date(t);
          }(e), this.init();
        }, n.init = function() {
          var e = this.$d;
          this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds();
        }, n.$utils = function() {
          return d;
        }, n.isValid = function() {
          return this.$d.toString() !== l;
        }, n.isSame = function(e, r) {
          var t = g(e);
          return this.startOf(r) <= t && t <= this.endOf(r);
        }, n.isAfter = function(e, r) {
          return g(e) < this.startOf(r);
        }, n.isBefore = function(e, r) {
          return this.endOf(r) < g(e);
        }, n.$g = function(e, r, t) {
          return d.u(e) ? this[r] : this.set(t, e);
        }, n.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, n.valueOf = function() {
          return this.$d.getTime();
        }, n.startOf = function(e, r) {
          var t = this, o = !!d.u(r) || r, a = d.p(e), h = function(F, T) {
            var C = d.w(t.$u ? Date.UTC(t.$y, T, F) : new Date(t.$y, T, F), t);
            return o ? C : C.endOf(D);
          }, $ = function(F, T) {
            return d.w(t.toDate()[F].apply(t.toDate("s"), (o ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(T)), t);
          }, S = this.$W, k = this.$M, x = this.$D, V = "set" + (this.$u ? "UTC" : "");
          switch (a) {
            case w:
              return o ? h(1, 0) : h(31, 11);
            case _:
              return o ? h(1, k) : h(0, k + 1);
            case b:
              var I = this.$locale().weekStart || 0, W = (S < I ? S + 7 : S) - I;
              return h(o ? x - W : x + (6 - W), k);
            case D:
            case E:
              return $(V + "Hours", 0);
            case A:
              return $(V + "Minutes", 1);
            case v:
              return $(V + "Seconds", 2);
            case y:
              return $(V + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, n.endOf = function(e) {
          return this.startOf(e, !1);
        }, n.$set = function(e, r) {
          var t, o = d.p(e), a = "set" + (this.$u ? "UTC" : ""), h = (t = {}, t[D] = a + "Date", t[E] = a + "Date", t[_] = a + "Month", t[w] = a + "FullYear", t[A] = a + "Hours", t[v] = a + "Minutes", t[y] = a + "Seconds", t[M] = a + "Milliseconds", t)[o], $ = o === D ? this.$D + (r - this.$W) : r;
          if (o === _ || o === w) {
            var S = this.clone().set(E, 1);
            S.$d[h]($), S.init(), this.$d = S.set(E, Math.min(this.$D, S.daysInMonth())).$d;
          } else h && this.$d[h]($);
          return this.init(), this;
        }, n.set = function(e, r) {
          return this.clone().$set(e, r);
        }, n.get = function(e) {
          return this[d.p(e)]();
        }, n.add = function(e, r) {
          var t, o = this;
          e = Number(e);
          var a = d.p(r), h = function(k) {
            var x = g(o);
            return d.w(x.date(x.date() + Math.round(k * e)), o);
          };
          if (a === _) return this.set(_, this.$M + e);
          if (a === w) return this.set(w, this.$y + e);
          if (a === D) return h(1);
          if (a === b) return h(7);
          var $ = (t = {}, t[v] = i, t[A] = O, t[y] = c, t)[a] || 1, S = this.$d.getTime() + e * $;
          return d.w(S, this);
        }, n.subtract = function(e, r) {
          return this.add(-1 * e, r);
        }, n.format = function(e) {
          var r = this, t = this.$locale();
          if (!this.isValid()) return t.invalidDate || l;
          var o = e || "YYYY-MM-DDTHH:mm:ssZ", a = d.z(this), h = this.$H, $ = this.$m, S = this.$M, k = t.weekdays, x = t.months, V = t.meridiem, I = function(T, C, R, B) {
            return T && (T[C] || T(r, o)) || R[C].slice(0, B);
          }, W = function(T) {
            return d.s(h % 12 || 12, T, "0");
          }, F = V || function(T, C, R) {
            var B = T < 12 ? "AM" : "PM";
            return R ? B.toLowerCase() : B;
          };
          return o.replace(Y, function(T, C) {
            return C || function(R) {
              switch (R) {
                case "YY":
                  return String(r.$y).slice(-2);
                case "YYYY":
                  return d.s(r.$y, 4, "0");
                case "M":
                  return S + 1;
                case "MM":
                  return d.s(S + 1, 2, "0");
                case "MMM":
                  return I(t.monthsShort, S, x, 3);
                case "MMMM":
                  return I(x, S);
                case "D":
                  return r.$D;
                case "DD":
                  return d.s(r.$D, 2, "0");
                case "d":
                  return String(r.$W);
                case "dd":
                  return I(t.weekdaysMin, r.$W, k, 2);
                case "ddd":
                  return I(t.weekdaysShort, r.$W, k, 3);
                case "dddd":
                  return k[r.$W];
                case "H":
                  return String(h);
                case "HH":
                  return d.s(h, 2, "0");
                case "h":
                  return W(1);
                case "hh":
                  return W(2);
                case "a":
                  return F(h, $, !0);
                case "A":
                  return F(h, $, !1);
                case "m":
                  return String($);
                case "mm":
                  return d.s($, 2, "0");
                case "s":
                  return String(r.$s);
                case "ss":
                  return d.s(r.$s, 2, "0");
                case "SSS":
                  return d.s(r.$ms, 3, "0");
                case "Z":
                  return a;
              }
              return null;
            }(T) || a.replace(":", "");
          });
        }, n.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, n.diff = function(e, r, t) {
          var o, a = this, h = d.p(r), $ = g(e), S = ($.utcOffset() - this.utcOffset()) * i, k = this - $, x = function() {
            return d.m(a, $);
          };
          switch (h) {
            case w:
              o = x() / 12;
              break;
            case _:
              o = x();
              break;
            case L:
              o = x() / 3;
              break;
            case b:
              o = (k - S) / 6048e5;
              break;
            case D:
              o = (k - S) / 864e5;
              break;
            case A:
              o = k / O;
              break;
            case v:
              o = k / i;
              break;
            case y:
              o = k / c;
              break;
            default:
              o = k;
          }
          return t ? o : d.a(o);
        }, n.daysInMonth = function() {
          return this.endOf(_).$D;
        }, n.$locale = function() {
          return H[this.$L];
        }, n.locale = function(e, r) {
          if (!e) return this.$L;
          var t = this.clone(), o = N(e, r, !0);
          return o && (t.$L = o), t;
        }, n.clone = function() {
          return d.w(this.$d, this);
        }, n.toDate = function() {
          return new Date(this.valueOf());
        }, n.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, n.toISOString = function() {
          return this.$d.toISOString();
        }, n.toString = function() {
          return this.$d.toUTCString();
        }, s;
      }(), ue = U.prototype;
      return g.prototype = ue, [["$ms", M], ["$s", y], ["$m", v], ["$H", A], ["$W", D], ["$M", _], ["$y", w], ["$D", E]].forEach(function(s) {
        ue[s[1]] = function(n) {
          return this.$g(n, s[0], s[1]);
        };
      }), g.extend = function(s, n) {
        return s.$i || (s(n, U, g), s.$i = !0), g;
      }, g.locale = N, g.isDayjs = ne, g.unix = function(s) {
        return g(1e3 * s);
      }, g.en = H[J], g.Ls = H, g.p = {}, g;
    });
  }(Q)), Q.exports;
}
var Te = pe();
const K = /* @__PURE__ */ Oe(Te);
var X = { exports: {} }, Le = X.exports, ce;
function xe() {
  return ce || (ce = 1, function(u, m) {
    (function(c, i) {
      u.exports = i(pe());
    })(Le, function(c) {
      function i(y) {
        return y && typeof y == "object" && "default" in y ? y : { default: y };
      }
      var O = i(c), M = { name: "id", weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), weekStart: 1, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, ordinal: function(y) {
        return y + ".";
      } };
      return O.default.locale(M, null, !0), M;
    });
  }(X)), X.exports;
}
xe();
var ee = { exports: {} }, Ee = ee.exports, de;
function je() {
  return de || (de = 1, function(u, m) {
    (function(c, i) {
      u.exports = i();
    })(Ee, function() {
      return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(c) {
        var i = ["th", "st", "nd", "rd"], O = c % 100;
        return "[" + c + (i[(O - 20) % 10] || i[O] || i[0]) + "]";
      } };
    });
  }(ee)), ee.exports;
}
je();
const Ce = () => {
  const { config: u } = fe(), m = u.components;
  return { InlineField: ge({
    name: "InlineField",
    props: {
      modelValue: {
        type: String,
        default: ""
      },
      fieldType: {
        type: String,
        required: !0
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      dateFormat: {
        type: String,
        default: "DD MMMM YYYY"
      },
      enterToSave: {
        type: Boolean,
        default: !0
      }
    },
    emits: ["update:modelValue"],
    setup(i, { emit: O, attrs: M, slots: y }) {
      const v = re(!1), A = re(null), D = re(null), b = (f) => Array.isArray(f) ? f.every((j) => K(j).isValid()) : K(f).isValid(), _ = (f, j) => Array.isArray(f) ? f.map((te) => K(te).locale(u.locale || "en").format(j || "YYYY-MM-DD")) : K(f).locale(u.locale || "en").format(j || "YYYY-MM-DD"), L = oe(() => {
        const f = _(i.modelValue, i.dateFormat);
        return Array.isArray(f) ? f.join(" - ") : f;
      }), w = (f) => {
        b(f) && _(f), O("update:modelValue", f);
      }, E = (f) => {
        if (f.key === "Enter") {
          if (!i.enterToSave) return;
          v.value = !1;
        }
      }, l = () => {
        i.disabled || (v.value = !0);
      }, p = oe(() => i.disabled ? "inline-field-placeholder" : `inline-field-label ${!i.modelValue && (M == null ? void 0 : M.placeholder) && "inline-field-placeholder"}`), Y = Object.keys(y).filter((f) => f !== "default").map((f) => f);
      return () => {
        if (!m[i.fieldType])
          throw new Error(`Component FieldType#${i.fieldType} not found. Register the component first.`);
        return !v.value || i.disabled ? Z(
          "span",
          {
            class: p.value,
            onClick: l
          },
          b(i.modelValue) ? L.value : i.modelValue ? i.modelValue : (M == null ? void 0 : M.placeholder) || ""
        ) : (ke(A, () => v.value = !1, { ignore: [D] }), Z(
          "div",
          { ref: A },
          [
            Z(m[i.fieldType] || "input", {
              modelValue: i.modelValue,
              ...M,
              "onUpdate:modelValue": w,
              onkeydown: E
            }, [
              ...Y,
              y.default && Z(y.default, { ref: D })
            ])
          ]
        ));
      };
    }
  }) };
}, { InlineField: Ie } = Ce(), Fe = {
  install(u, m) {
    const { setConfig: c } = fe();
    m && c(m);
  }
};
export {
  Ie as InlineField,
  Fe as default,
  Ce as useComponent,
  fe as useConfig
};
