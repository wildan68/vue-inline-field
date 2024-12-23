import { reactive as ye, getCurrentScope as _e, onScopeDispose as $e, unref as Me, watch as ve, defineComponent as ge, ref as re, computed as ie, h as q } from "vue";
const K = ye({
  components: {},
  locale: "en"
}), fe = () => ({
  setConfig: ({ components: m, locale: c }) => {
    K.components = { ...K.components, ...m }, c && (K.locale = c);
  },
  config: K
});
function be(u) {
  return _e() ? ($e(u), !0) : !1;
}
function U(u) {
  return typeof u == "function" ? u() : Me(u);
}
const he = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Se = Object.prototype.toString, we = (u) => Se.call(u) === "[object Object]", Q = () => {
}, De = /* @__PURE__ */ Ye();
function Ye() {
  var u, m;
  return he && ((u = window == null ? void 0 : window.navigator) == null ? void 0 : u.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((m = window == null ? void 0 : window.navigator) == null ? void 0 : m.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
const me = he ? window : void 0;
function N(u) {
  var m;
  const c = U(u);
  return (m = c == null ? void 0 : c.$el) != null ? m : c;
}
function se(...u) {
  let m, c, i, k;
  if (typeof u[0] == "string" || Array.isArray(u[0]) ? ([c, i, k] = u, m = me) : [m, c, i, k] = u, !m)
    return Q;
  Array.isArray(c) || (c = [c]), Array.isArray(i) || (i = [i]);
  const y = [], _ = () => {
    y.forEach((S) => S()), y.length = 0;
  }, v = (S, $, L, w) => (S.addEventListener($, L, w), () => S.removeEventListener($, L, w)), A = ve(
    () => [N(m), U(k)],
    ([S, $]) => {
      if (_(), !S)
        return;
      const L = we($) ? { ...$ } : $;
      y.push(
        ...c.flatMap((w) => i.map((H) => v(S, w, H, L)))
      );
    },
    { immediate: !0, flush: "post" }
  ), D = () => {
    A(), _();
  };
  return be(D), D;
}
let ae = !1;
function Oe(u, m, c = {}) {
  const { window: i = me, ignore: k = [], capture: y = !0, detectIframe: _ = !1 } = c;
  if (!i)
    return Q;
  De && !ae && (ae = !0, Array.from(i.document.body.children).forEach((l) => l.addEventListener("click", Q)), i.document.documentElement.addEventListener("click", Q));
  let v = !0;
  const A = (l) => U(k).some((p) => {
    if (typeof p == "string")
      return Array.from(i.document.querySelectorAll(p)).some((Y) => Y === l.target || l.composedPath().includes(Y));
    {
      const Y = N(p);
      return Y && (l.target === Y || l.composedPath().includes(Y));
    }
  });
  function D(l) {
    const p = U(l);
    return p && p.$.subTree.shapeFlag === 16;
  }
  function S(l, p) {
    const Y = U(l), F = Y.$.subTree && Y.$.subTree.children;
    return F == null || !Array.isArray(F) ? !1 : F.some((C) => C.el === p.target || p.composedPath().includes(C.el));
  }
  const $ = (l) => {
    const p = N(u);
    if (l.target != null && !(!(p instanceof Element) && D(u) && S(u, l)) && !(!p || p === l.target || l.composedPath().includes(p))) {
      if (l.detail === 0 && (v = !A(l)), !v) {
        v = !0;
        return;
      }
      m(l);
    }
  };
  let L = !1;
  const w = [
    se(i, "click", (l) => {
      L || (L = !0, setTimeout(() => {
        L = !1;
      }, 0), $(l));
    }, { passive: !0, capture: y }),
    se(i, "pointerdown", (l) => {
      const p = N(u);
      v = !A(l) && !!(p && !l.composedPath().includes(p));
    }, { passive: !0 }),
    _ && se(i, "blur", (l) => {
      setTimeout(() => {
        var p;
        const Y = N(u);
        ((p = i.document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !(Y != null && Y.contains(i.document.activeElement)) && m(l);
      }, 0);
    })
  ].filter(Boolean);
  return () => w.forEach((l) => l());
}
function ke(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var X = { exports: {} }, Ae = X.exports, le;
function pe() {
  return le || (le = 1, function(u, m) {
    (function(c, i) {
      u.exports = i();
    })(Ae, function() {
      var c = 1e3, i = 6e4, k = 36e5, y = "millisecond", _ = "second", v = "minute", A = "hour", D = "day", S = "week", $ = "month", L = "quarter", w = "year", H = "date", l = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, F = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(s) {
        var n = ["th", "st", "nd", "rd"], e = s % 100;
        return "[" + s + (n[(e - 20) % 10] || n[e] || n[0]) + "]";
      } }, C = function(s, n, e) {
        var r = String(s);
        return !r || r.length >= n ? s : "" + Array(n + 1 - r.length).join(e) + s;
      }, h = { s: C, z: function(s) {
        var n = -s.utcOffset(), e = Math.abs(n), r = Math.floor(e / 60), t = e % 60;
        return (n <= 0 ? "+" : "-") + C(r, 2, "0") + ":" + C(t, 2, "0");
      }, m: function s(n, e) {
        if (n.date() < e.date()) return -s(e, n);
        var r = 12 * (e.year() - n.year()) + (e.month() - n.month()), t = n.clone().add(r, $), o = e - t < 0, a = n.clone().add(r + (o ? -1 : 1), $);
        return +(-(r + (e - t) / (o ? t - a : a - t)) || 0);
      }, a: function(s) {
        return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
      }, p: function(s) {
        return { M: $, y: w, w: S, d: D, D: H, h: A, m: v, s: _, ms: y, Q: L }[s] || String(s || "").toLowerCase().replace(/s$/, "");
      }, u: function(s) {
        return s === void 0;
      } }, E = "en", j = {};
      j[E] = F;
      var ue = "$isDayjsObject", ne = function(s) {
        return s instanceof Z || !(!s || !s[ue]);
      }, B = function s(n, e, r) {
        var t;
        if (!n) return E;
        if (typeof n == "string") {
          var o = n.toLowerCase();
          j[o] && (t = o), e && (j[o] = e, t = o);
          var a = n.split("-");
          if (!t && a.length > 1) return s(a[0]);
        } else {
          var f = n.name;
          j[f] = n, t = f;
        }
        return !r && t && (E = t), t || !r && E;
      }, g = function(s, n) {
        if (ne(s)) return s.clone();
        var e = typeof n == "object" ? n : {};
        return e.date = s, e.args = arguments, new Z(e);
      }, d = h;
      d.l = B, d.i = ne, d.w = function(s, n) {
        return g(s, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
      };
      var Z = function() {
        function s(e) {
          this.$L = B(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[ue] = !0;
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
                var f = a[2] - 1 || 0, M = (a[7] || "0").substring(0, 3);
                return o ? new Date(Date.UTC(a[1], f, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, M)) : new Date(a[1], f, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, M);
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
          var t = this, o = !!d.u(r) || r, a = d.p(e), f = function(J, T) {
            var V = d.w(t.$u ? Date.UTC(t.$y, T, J) : new Date(t.$y, T, J), t);
            return o ? V : V.endOf(D);
          }, M = function(J, T) {
            return d.w(t.toDate()[J].apply(t.toDate("s"), (o ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(T)), t);
          }, b = this.$W, O = this.$M, x = this.$D, W = "set" + (this.$u ? "UTC" : "");
          switch (a) {
            case w:
              return o ? f(1, 0) : f(31, 11);
            case $:
              return o ? f(1, O) : f(0, O + 1);
            case S:
              var I = this.$locale().weekStart || 0, P = (b < I ? b + 7 : b) - I;
              return f(o ? x - P : x + (6 - P), O);
            case D:
            case H:
              return M(W + "Hours", 0);
            case A:
              return M(W + "Minutes", 1);
            case v:
              return M(W + "Seconds", 2);
            case _:
              return M(W + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, n.endOf = function(e) {
          return this.startOf(e, !1);
        }, n.$set = function(e, r) {
          var t, o = d.p(e), a = "set" + (this.$u ? "UTC" : ""), f = (t = {}, t[D] = a + "Date", t[H] = a + "Date", t[$] = a + "Month", t[w] = a + "FullYear", t[A] = a + "Hours", t[v] = a + "Minutes", t[_] = a + "Seconds", t[y] = a + "Milliseconds", t)[o], M = o === D ? this.$D + (r - this.$W) : r;
          if (o === $ || o === w) {
            var b = this.clone().set(H, 1);
            b.$d[f](M), b.init(), this.$d = b.set(H, Math.min(this.$D, b.daysInMonth())).$d;
          } else f && this.$d[f](M);
          return this.init(), this;
        }, n.set = function(e, r) {
          return this.clone().$set(e, r);
        }, n.get = function(e) {
          return this[d.p(e)]();
        }, n.add = function(e, r) {
          var t, o = this;
          e = Number(e);
          var a = d.p(r), f = function(O) {
            var x = g(o);
            return d.w(x.date(x.date() + Math.round(O * e)), o);
          };
          if (a === $) return this.set($, this.$M + e);
          if (a === w) return this.set(w, this.$y + e);
          if (a === D) return f(1);
          if (a === S) return f(7);
          var M = (t = {}, t[v] = i, t[A] = k, t[_] = c, t)[a] || 1, b = this.$d.getTime() + e * M;
          return d.w(b, this);
        }, n.subtract = function(e, r) {
          return this.add(-1 * e, r);
        }, n.format = function(e) {
          var r = this, t = this.$locale();
          if (!this.isValid()) return t.invalidDate || l;
          var o = e || "YYYY-MM-DDTHH:mm:ssZ", a = d.z(this), f = this.$H, M = this.$m, b = this.$M, O = t.weekdays, x = t.months, W = t.meridiem, I = function(T, V, R, z) {
            return T && (T[V] || T(r, o)) || R[V].slice(0, z);
          }, P = function(T) {
            return d.s(f % 12 || 12, T, "0");
          }, J = W || function(T, V, R) {
            var z = T < 12 ? "AM" : "PM";
            return R ? z.toLowerCase() : z;
          };
          return o.replace(Y, function(T, V) {
            return V || function(R) {
              switch (R) {
                case "YY":
                  return String(r.$y).slice(-2);
                case "YYYY":
                  return d.s(r.$y, 4, "0");
                case "M":
                  return b + 1;
                case "MM":
                  return d.s(b + 1, 2, "0");
                case "MMM":
                  return I(t.monthsShort, b, x, 3);
                case "MMMM":
                  return I(x, b);
                case "D":
                  return r.$D;
                case "DD":
                  return d.s(r.$D, 2, "0");
                case "d":
                  return String(r.$W);
                case "dd":
                  return I(t.weekdaysMin, r.$W, O, 2);
                case "ddd":
                  return I(t.weekdaysShort, r.$W, O, 3);
                case "dddd":
                  return O[r.$W];
                case "H":
                  return String(f);
                case "HH":
                  return d.s(f, 2, "0");
                case "h":
                  return P(1);
                case "hh":
                  return P(2);
                case "a":
                  return J(f, M, !0);
                case "A":
                  return J(f, M, !1);
                case "m":
                  return String(M);
                case "mm":
                  return d.s(M, 2, "0");
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
          var o, a = this, f = d.p(r), M = g(e), b = (M.utcOffset() - this.utcOffset()) * i, O = this - M, x = function() {
            return d.m(a, M);
          };
          switch (f) {
            case w:
              o = x() / 12;
              break;
            case $:
              o = x();
              break;
            case L:
              o = x() / 3;
              break;
            case S:
              o = (O - b) / 6048e5;
              break;
            case D:
              o = (O - b) / 864e5;
              break;
            case A:
              o = O / k;
              break;
            case v:
              o = O / i;
              break;
            case _:
              o = O / c;
              break;
            default:
              o = O;
          }
          return t ? o : d.a(o);
        }, n.daysInMonth = function() {
          return this.endOf($).$D;
        }, n.$locale = function() {
          return j[this.$L];
        }, n.locale = function(e, r) {
          if (!e) return this.$L;
          var t = this.clone(), o = B(e, r, !0);
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
      }(), oe = Z.prototype;
      return g.prototype = oe, [["$ms", y], ["$s", _], ["$m", v], ["$H", A], ["$W", D], ["$M", $], ["$y", w], ["$D", H]].forEach(function(s) {
        oe[s[1]] = function(n) {
          return this.$g(n, s[0], s[1]);
        };
      }), g.extend = function(s, n) {
        return s.$i || (s(n, Z, g), s.$i = !0), g;
      }, g.locale = B, g.isDayjs = ne, g.unix = function(s) {
        return g(1e3 * s);
      }, g.en = j[E], g.Ls = j, g.p = {}, g;
    });
  }(X)), X.exports;
}
var Te = pe();
const G = /* @__PURE__ */ ke(Te);
var ee = { exports: {} }, Le = ee.exports, ce;
function xe() {
  return ce || (ce = 1, function(u, m) {
    (function(c, i) {
      u.exports = i(pe());
    })(Le, function(c) {
      function i(_) {
        return _ && typeof _ == "object" && "default" in _ ? _ : { default: _ };
      }
      var k = i(c), y = { name: "id", weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), weekStart: 1, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, ordinal: function(_) {
        return _ + ".";
      } };
      return k.default.locale(y, null, !0), y;
    });
  }(ee)), ee.exports;
}
xe();
var te = { exports: {} }, He = te.exports, de;
function Ee() {
  return de || (de = 1, function(u, m) {
    (function(c, i) {
      u.exports = i();
    })(He, function() {
      return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(c) {
        var i = ["th", "st", "nd", "rd"], k = c % 100;
        return "[" + c + (i[(k - 20) % 10] || i[k] || i[0]) + "]";
      } };
    });
  }(te)), te.exports;
}
Ee();
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
      },
      labelHtml: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["update:modelValue"],
    setup(i, { emit: k, attrs: y, slots: _ }) {
      const v = re(!1), A = re(null), D = re(null), S = (h) => Array.isArray(h) ? h.every((E) => G(E).isValid()) : G(h).isValid(), $ = (h, E) => Array.isArray(h) ? h.map((j) => G(j).locale(u.locale || "en").format(E || "YYYY-MM-DD")) : G(h).locale(u.locale || "en").format(E || "YYYY-MM-DD"), L = ie(() => {
        const h = $(i.modelValue, i.dateFormat);
        return Array.isArray(h) ? h.join(" - ") : h;
      }), w = (h) => {
        const j = new DOMParser().parseFromString(h, "text/html");
        return q("div", { innerHTML: j.body.innerHTML });
      }, H = ie(() => {
        if (i.labelHtml)
          return w(i.modelValue || (y == null ? void 0 : y.placeholder) || "Enter Text");
      }), l = (h) => {
        S(h) && $(h), k("update:modelValue", h);
      }, p = (h) => {
        if (h.key === "Enter") {
          if (!i.enterToSave) return;
          v.value = !1;
        }
      }, Y = () => {
        i.disabled || (v.value = !0);
      }, F = ie(() => i.disabled ? "inline-field-placeholder" : `inline-field-label ${!i.modelValue && (y == null ? void 0 : y.placeholder) && "inline-field-placeholder"}`), C = Object.keys(_).filter((h) => h !== "default").map((h) => h);
      return () => {
        if (!m[i.fieldType])
          throw new Error(`Component FieldType#${i.fieldType} not found. Register the component first.`);
        return !v.value || i.disabled ? q(
          "span",
          {
            class: F.value,
            onClick: Y
          },
          S(i.modelValue) ? L.value : i.labelHtml ? H.value : i.modelValue ? i.modelValue : (y == null ? void 0 : y.placeholder) || ""
        ) : (Oe(A, () => v.value = !1, { ignore: [D] }), q(
          "div",
          { ref: A },
          [
            q(m[i.fieldType] || "input", {
              modelValue: i.modelValue,
              ...y,
              "onUpdate:modelValue": l,
              onkeydown: p
            }, [
              ...C,
              _.default && q(_.default, { ref: D })
            ])
          ]
        ));
      };
    }
  }) };
}, Ve = {
  install(u, m) {
    const { setConfig: c } = fe();
    m && c(m);
  }
};
export {
  Ve as default,
  Ce as useComponent,
  fe as useConfig
};
