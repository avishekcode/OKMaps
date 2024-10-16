(() => {
	var $b = Object.create;
	var nn = Object.defineProperty;
	var Qb = Object.getOwnPropertyDescriptor;
	var Zb = Object.getOwnPropertyNames;
	var Jb = Object.getPrototypeOf,
		e_ = Object.prototype.hasOwnProperty;
	var ve = (e, t) => () => (e && (t = e(e = 0)), t);
	var c = (e, t) => () => (t || e((t = {
			exports: {}
		}).exports, t), t.exports),
		De = (e, t) => {
			for (var r in t) nn(e, r, {
				get: t[r],
				enumerable: !0
			})
		},
		qs = (e, t, r, n) => {
			if (t && typeof t == "object" || typeof t == "function")
				for (let i of Zb(t)) !e_.call(e, i) && i !== r && nn(e, i, {
					get: () => t[i],
					enumerable: !(n = Qb(t, i)) || n.enumerable
				});
			return e
		};
	var le = (e, t, r) => (r = e != null ? $b(Jb(e)) : {}, qs(t || !e || !e.__esModule ? nn(r, "default", {
			value: e,
			enumerable: !0
		}) : r, e)),
		rt = e => qs(nn({}, "__esModule", {
			value: !0
		}), e);
	var Ri = c(() => {
		"use strict";
		window.tram = function(e) {
			function t(f, E) {
				var x = new m.Bare;
				return x.init(f, E)
			}

			function r(f) {
				return f.replace(/[A-Z]/g, function(E) {
					return "-" + E.toLowerCase()
				})
			}

			function n(f) {
				var E = parseInt(f.slice(1), 16),
					x = E >> 16 & 255,
					S = E >> 8 & 255,
					w = 255 & E;
				return [x, S, w]
			}

			function i(f, E, x) {
				return "#" + (1 << 24 | f << 16 | E << 8 | x).toString(16).slice(1)
			}

			function o() {}

			function a(f, E) {
				l("Type warning: Expected: [" + f + "] Got: [" + typeof E + "] " + E)
			}

			function s(f, E, x) {
				l("Units do not match [" + f + "]: " + E + ", " + x)
			}

			function u(f, E, x) {
				if (E !== void 0 && (x = E), f === void 0) return x;
				var S = x;
				return We.test(f) || !Fe.test(f) ? S = parseInt(f, 10) : Fe.test(f) && (S = 1e3 * parseFloat(f)), 0 > S && (S = 0), S === S ? S : x
			}

			function l(f) {
				se.debug && window && window.console.warn(f)
			}

			function v(f) {
				for (var E = -1, x = f ? f.length : 0, S = []; ++E < x;) {
					var w = f[E];
					w && S.push(w)
				}
				return S
			}
			var d = function(f, E, x) {
					function S(oe) {
						return typeof oe == "object"
					}

					function w(oe) {
						return typeof oe == "function"
					}

					function C() {}

					function $(oe, ge) {
						function k() {
							var Re = new ae;
							return w(Re.init) && Re.init.apply(Re, arguments), Re
						}

						function ae() {}
						ge === x && (ge = oe, oe = Object), k.Bare = ae;
						var ue, _e = C[f] = oe[f],
							tt = ae[f] = k[f] = new C;
						return tt.constructor = k, k.mixin = function(Re) {
							return ae[f] = k[f] = $(k, Re)[f], k
						}, k.open = function(Re) {
							if (ue = {}, w(Re) ? ue = Re.call(k, tt, _e, k, oe) : S(Re) && (ue = Re), S(ue))
								for (var vr in ue) E.call(ue, vr) && (tt[vr] = ue[vr]);
							return w(tt.init) || (tt.init = oe), k
						}, k.open(ge)
					}
					return $
				}("prototype", {}.hasOwnProperty),
				g = {
					ease: ["ease", function(f, E, x, S) {
						var w = (f /= S) * f,
							C = w * f;
						return E + x * (-2.75 * C * w + 11 * w * w + -15.5 * C + 8 * w + .25 * f)
					}],
					"ease-in": ["ease-in", function(f, E, x, S) {
						var w = (f /= S) * f,
							C = w * f;
						return E + x * (-1 * C * w + 3 * w * w + -3 * C + 2 * w)
					}],
					"ease-out": ["ease-out", function(f, E, x, S) {
						var w = (f /= S) * f,
							C = w * f;
						return E + x * (.3 * C * w + -1.6 * w * w + 2.2 * C + -1.8 * w + 1.9 * f)
					}],
					"ease-in-out": ["ease-in-out", function(f, E, x, S) {
						var w = (f /= S) * f,
							C = w * f;
						return E + x * (2 * C * w + -5 * w * w + 2 * C + 2 * w)
					}],
					linear: ["linear", function(f, E, x, S) {
						return x * f / S + E
					}],
					"ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(f, E, x, S) {
						return x * (f /= S) * f + E
					}],
					"ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(f, E, x, S) {
						return -x * (f /= S) * (f - 2) + E
					}],
					"ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(f, E, x, S) {
						return (f /= S / 2) < 1 ? x / 2 * f * f + E : -x / 2 * (--f * (f - 2) - 1) + E
					}],
					"ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(f, E, x, S) {
						return x * (f /= S) * f * f + E
					}],
					"ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(f, E, x, S) {
						return x * ((f = f / S - 1) * f * f + 1) + E
					}],
					"ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(f, E, x, S) {
						return (f /= S / 2) < 1 ? x / 2 * f * f * f + E : x / 2 * ((f -= 2) * f * f + 2) + E
					}],
					"ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(f, E, x, S) {
						return x * (f /= S) * f * f * f + E
					}],
					"ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(f, E, x, S) {
						return -x * ((f = f / S - 1) * f * f * f - 1) + E
					}],
					"ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(f, E, x, S) {
						return (f /= S / 2) < 1 ? x / 2 * f * f * f * f + E : -x / 2 * ((f -= 2) * f * f * f - 2) + E
					}],
					"ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(f, E, x, S) {
						return x * (f /= S) * f * f * f * f + E
					}],
					"ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(f, E, x, S) {
						return x * ((f = f / S - 1) * f * f * f * f + 1) + E
					}],
					"ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(f, E, x, S) {
						return (f /= S / 2) < 1 ? x / 2 * f * f * f * f * f + E : x / 2 * ((f -= 2) * f * f * f * f + 2) + E
					}],
					"ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(f, E, x, S) {
						return -x * Math.cos(f / S * (Math.PI / 2)) + x + E
					}],
					"ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(f, E, x, S) {
						return x * Math.sin(f / S * (Math.PI / 2)) + E
					}],
					"ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(f, E, x, S) {
						return -x / 2 * (Math.cos(Math.PI * f / S) - 1) + E
					}],
					"ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(f, E, x, S) {
						return f === 0 ? E : x * Math.pow(2, 10 * (f / S - 1)) + E
					}],
					"ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(f, E, x, S) {
						return f === S ? E + x : x * (-Math.pow(2, -10 * f / S) + 1) + E
					}],
					"ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(f, E, x, S) {
						return f === 0 ? E : f === S ? E + x : (f /= S / 2) < 1 ? x / 2 * Math.pow(2, 10 * (f - 1)) + E : x / 2 * (-Math.pow(2, -10 * --f) + 2) + E
					}],
					"ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(f, E, x, S) {
						return -x * (Math.sqrt(1 - (f /= S) * f) - 1) + E
					}],
					"ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(f, E, x, S) {
						return x * Math.sqrt(1 - (f = f / S - 1) * f) + E
					}],
					"ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(f, E, x, S) {
						return (f /= S / 2) < 1 ? -x / 2 * (Math.sqrt(1 - f * f) - 1) + E : x / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + E
					}],
					"ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(f, E, x, S, w) {
						return w === void 0 && (w = 1.70158), x * (f /= S) * f * ((w + 1) * f - w) + E
					}],
					"ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(f, E, x, S, w) {
						return w === void 0 && (w = 1.70158), x * ((f = f / S - 1) * f * ((w + 1) * f + w) + 1) + E
					}],
					"ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(f, E, x, S, w) {
						return w === void 0 && (w = 1.70158), (f /= S / 2) < 1 ? x / 2 * f * f * (((w *= 1.525) + 1) * f - w) + E : x / 2 * ((f -= 2) * f * (((w *= 1.525) + 1) * f + w) + 2) + E
					}]
				},
				p = {
					"ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
					"ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
					"ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
				},
				h = document,
				b = window,
				T = "bkwld-tram",
				_ = /[\-\.0-9]/g,
				R = /[A-Z]/,
				A = "number",
				N = /^(rgb|#)/,
				P = /(em|cm|mm|in|pt|pc|px)$/,
				L = /(em|cm|mm|in|pt|pc|px|%)$/,
				W = /(deg|rad|turn)$/,
				X = "unitless",
				j = /(all|none) 0s ease 0s/,
				Q = /^(width|height)$/,
				ie = " ",
				M = h.createElement("a"),
				O = ["Webkit", "Moz", "O", "ms"],
				q = ["-webkit-", "-moz-", "-o-", "-ms-"],
				B = function(f) {
					if (f in M.style) return {
						dom: f,
						css: f
					};
					var E, x, S = "",
						w = f.split("-");
					for (E = 0; E < w.length; E++) S += w[E].charAt(0).toUpperCase() + w[E].slice(1);
					for (E = 0; E < O.length; E++)
						if (x = O[E] + S, x in M.style) return {
							dom: x,
							css: q[E] + f
						}
				},
				D = t.support = {
					bind: Function.prototype.bind,
					transform: B("transform"),
					transition: B("transition"),
					backface: B("backface-visibility"),
					timing: B("transition-timing-function")
				};
			if (D.transition) {
				var Z = D.timing.dom;
				if (M.style[Z] = g["ease-in-back"][0], !M.style[Z])
					for (var re in p) g[re][0] = p[re]
			}
			var F = t.frame = function() {
					var f = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame;
					return f && D.bind ? f.bind(b) : function(E) {
						b.setTimeout(E, 16)
					}
				}(),
				G = t.now = function() {
					var f = b.performance,
						E = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
					return E && D.bind ? E.bind(f) : Date.now || function() {
						return +new Date
					}
				}(),
				K = d(function(f) {
					function E(te, ce) {
						var ye = v(("" + te).split(ie)),
							de = ye[0];
						ce = ce || {};
						var Le = H[de];
						if (!Le) return l("Unsupported property: " + de);
						if (!ce.weak || !this.props[de]) {
							var je = Le[0],
								Me = this.props[de];
							return Me || (Me = this.props[de] = new je.Bare), Me.init(this.$el, ye, Le, ce), Me
						}
					}

					function x(te, ce, ye) {
						if (te) {
							var de = typeof te;
							if (ce || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), de == "number" && ce) return this.timer = new J({
								duration: te,
								context: this,
								complete: C
							}), void(this.active = !0);
							if (de == "string" && ce) {
								switch (te) {
									case "hide":
										k.call(this);
										break;
									case "stop":
										$.call(this);
										break;
									case "redraw":
										ae.call(this);
										break;
									default:
										E.call(this, te, ye && ye[1])
								}
								return C.call(this)
							}
							if (de == "function") return void te.call(this, this);
							if (de == "object") {
								var Le = 0;
								tt.call(this, te, function(Ie, Yb) {
									Ie.span > Le && (Le = Ie.span), Ie.stop(), Ie.animate(Yb)
								}, function(Ie) {
									"wait" in Ie && (Le = u(Ie.wait, 0))
								}), _e.call(this), Le > 0 && (this.timer = new J({
									duration: Le,
									context: this
								}), this.active = !0, ce && (this.timer.complete = C));
								var je = this,
									Me = !1,
									rn = {};
								F(function() {
									tt.call(je, te, function(Ie) {
										Ie.active && (Me = !0, rn[Ie.name] = Ie.nextStyle)
									}), Me && je.$el.css(rn)
								})
							}
						}
					}

					function S(te) {
						te = u(te, 0), this.active ? this.queue.push({
							options: te
						}) : (this.timer = new J({
							duration: te,
							context: this,
							complete: C
						}), this.active = !0)
					}

					function w(te) {
						return this.active ? (this.queue.push({
							options: te,
							args: arguments
						}), void(this.timer.complete = C)) : l("No active transition timer. Use start() or wait() before then().")
					}

					function C() {
						if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
							var te = this.queue.shift();
							x.call(this, te.options, !0, te.args)
						}
					}

					function $(te) {
						this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
						var ce;
						typeof te == "string" ? (ce = {}, ce[te] = 1) : ce = typeof te == "object" && te != null ? te : this.props, tt.call(this, ce, Re), _e.call(this)
					}

					function oe(te) {
						$.call(this, te), tt.call(this, te, vr, zb)
					}

					function ge(te) {
						typeof te != "string" && (te = "block"), this.el.style.display = te
					}

					function k() {
						$.call(this), this.el.style.display = "none"
					}

					function ae() {
						this.el.offsetHeight
					}

					function ue() {
						$.call(this), e.removeData(this.el, T), this.$el = this.el = null
					}

					function _e() {
						var te, ce, ye = [];
						this.upstream && ye.push(this.upstream);
						for (te in this.props) ce = this.props[te], ce.active && ye.push(ce.string);
						ye = ye.join(","), this.style !== ye && (this.style = ye, this.el.style[D.transition.dom] = ye)
					}

					function tt(te, ce, ye) {
						var de, Le, je, Me, rn = ce !== Re,
							Ie = {};
						for (de in te) je = te[de], de in fe ? (Ie.transform || (Ie.transform = {}), Ie.transform[de] = je) : (R.test(de) && (de = r(de)), de in H ? Ie[de] = je : (Me || (Me = {}), Me[de] = je));
						for (de in Ie) {
							if (je = Ie[de], Le = this.props[de], !Le) {
								if (!rn) continue;
								Le = E.call(this, de)
							}
							ce.call(this, Le, je)
						}
						ye && Me && ye.call(this, Me)
					}

					function Re(te) {
						te.stop()
					}

					function vr(te, ce) {
						te.set(ce)
					}

					function zb(te) {
						this.$el.css(te)
					}

					function Xe(te, ce) {
						f[te] = function() {
							return this.children ? Kb.call(this, ce, arguments) : (this.el && ce.apply(this, arguments), this)
						}
					}

					function Kb(te, ce) {
						var ye, de = this.children.length;
						for (ye = 0; de > ye; ye++) te.apply(this.children[ye], ce);
						return this
					}
					f.init = function(te) {
						if (this.$el = e(te), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, se.keepInherited && !se.fallback) {
							var ce = V(this.el, "transition");
							ce && !j.test(ce) && (this.upstream = ce)
						}
						D.backface && se.hideBackface && y(this.el, D.backface.css, "hidden")
					}, Xe("add", E), Xe("start", x), Xe("wait", S), Xe("then", w), Xe("next", C), Xe("stop", $), Xe("set", oe), Xe("show", ge), Xe("hide", k), Xe("redraw", ae), Xe("destroy", ue)
				}),
				m = d(K, function(f) {
					function E(x, S) {
						var w = e.data(x, T) || e.data(x, T, new K.Bare);
						return w.el || w.init(x), S ? w.start(S) : w
					}
					f.init = function(x, S) {
						var w = e(x);
						if (!w.length) return this;
						if (w.length === 1) return E(w[0], S);
						var C = [];
						return w.each(function($, oe) {
							C.push(E(oe, S))
						}), this.children = C, this
					}
				}),
				I = d(function(f) {
					function E() {
						var C = this.get();
						this.update("auto");
						var $ = this.get();
						return this.update(C), $
					}

					function x(C, $, oe) {
						return $ !== void 0 && (oe = $), C in g ? C : oe
					}

					function S(C) {
						var $ = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(C);
						return ($ ? i($[1], $[2], $[3]) : C).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
					}
					var w = {
						duration: 500,
						ease: "ease",
						delay: 0
					};
					f.init = function(C, $, oe, ge) {
						this.$el = C, this.el = C[0];
						var k = $[0];
						oe[2] && (k = oe[2]), z[k] && (k = z[k]), this.name = k, this.type = oe[1], this.duration = u($[1], this.duration, w.duration), this.ease = x($[2], this.ease, w.ease), this.delay = u($[3], this.delay, w.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = Q.test(this.name), this.unit = ge.unit || this.unit || se.defaultUnit, this.angle = ge.angle || this.angle || se.defaultAngle, se.fallback || ge.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + ie + this.duration + "ms" + (this.ease != "ease" ? ie + g[this.ease][0] : "") + (this.delay ? ie + this.delay + "ms" : ""))
					}, f.set = function(C) {
						C = this.convert(C, this.type), this.update(C), this.redraw()
					}, f.transition = function(C) {
						this.active = !0, C = this.convert(C, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), C == "auto" && (C = E.call(this))), this.nextStyle = C
					}, f.fallback = function(C) {
						var $ = this.el.style[this.name] || this.convert(this.get(), this.type);
						C = this.convert(C, this.type), this.auto && ($ == "auto" && ($ = this.convert(this.get(), this.type)), C == "auto" && (C = E.call(this))), this.tween = new Y({
							from: $,
							to: C,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease,
							update: this.update,
							context: this
						})
					}, f.get = function() {
						return V(this.el, this.name)
					}, f.update = function(C) {
						y(this.el, this.name, C)
					}, f.stop = function() {
						(this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, y(this.el, this.name, this.get()));
						var C = this.tween;
						C && C.context && C.destroy()
					}, f.convert = function(C, $) {
						if (C == "auto" && this.auto) return C;
						var oe, ge = typeof C == "number",
							k = typeof C == "string";
						switch ($) {
							case A:
								if (ge) return C;
								if (k && C.replace(_, "") === "") return +C;
								oe = "number(unitless)";
								break;
							case N:
								if (k) {
									if (C === "" && this.original) return this.original;
									if ($.test(C)) return C.charAt(0) == "#" && C.length == 7 ? C : S(C)
								}
								oe = "hex or rgb string";
								break;
							case P:
								if (ge) return C + this.unit;
								if (k && $.test(C)) return C;
								oe = "number(px) or string(unit)";
								break;
							case L:
								if (ge) return C + this.unit;
								if (k && $.test(C)) return C;
								oe = "number(px) or string(unit or %)";
								break;
							case W:
								if (ge) return C + this.angle;
								if (k && $.test(C)) return C;
								oe = "number(deg) or string(angle)";
								break;
							case X:
								if (ge || k && L.test(C)) return C;
								oe = "number(unitless) or string(unit or %)"
						}
						return a(oe, C), C
					}, f.redraw = function() {
						this.el.offsetHeight
					}
				}),
				U = d(I, function(f, E) {
					f.init = function() {
						E.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), N))
					}
				}),
				ee = d(I, function(f, E) {
					f.init = function() {
						E.init.apply(this, arguments), this.animate = this.fallback
					}, f.get = function() {
						return this.$el[this.name]()
					}, f.update = function(x) {
						this.$el[this.name](x)
					}
				}),
				ne = d(I, function(f, E) {
					function x(S, w) {
						var C, $, oe, ge, k;
						for (C in S) ge = fe[C], oe = ge[0], $ = ge[1] || C, k = this.convert(S[C], oe), w.call(this, $, k, oe)
					}
					f.init = function() {
						E.init.apply(this, arguments), this.current || (this.current = {}, fe.perspective && se.perspective && (this.current.perspective = se.perspective, y(this.el, this.name, this.style(this.current)), this.redraw()))
					}, f.set = function(S) {
						x.call(this, S, function(w, C) {
							this.current[w] = C
						}), y(this.el, this.name, this.style(this.current)), this.redraw()
					}, f.transition = function(S) {
						var w = this.values(S);
						this.tween = new be({
							current: this.current,
							values: w,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease
						});
						var C, $ = {};
						for (C in this.current) $[C] = C in w ? w[C] : this.current[C];
						this.active = !0, this.nextStyle = this.style($)
					}, f.fallback = function(S) {
						var w = this.values(S);
						this.tween = new be({
							current: this.current,
							values: w,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease,
							update: this.update,
							context: this
						})
					}, f.update = function() {
						y(this.el, this.name, this.style(this.current))
					}, f.style = function(S) {
						var w, C = "";
						for (w in S) C += w + "(" + S[w] + ") ";
						return C
					}, f.values = function(S) {
						var w, C = {};
						return x.call(this, S, function($, oe, ge) {
							C[$] = oe, this.current[$] === void 0 && (w = 0, ~$.indexOf("scale") && (w = 1), this.current[$] = this.convert(w, ge))
						}), C
					}
				}),
				Y = d(function(f) {
					function E(k) {
						oe.push(k) === 1 && F(x)
					}

					function x() {
						var k, ae, ue, _e = oe.length;
						if (_e)
							for (F(x), ae = G(), k = _e; k--;) ue = oe[k], ue && ue.render(ae)
					}

					function S(k) {
						var ae, ue = e.inArray(k, oe);
						ue >= 0 && (ae = oe.slice(ue + 1), oe.length = ue, ae.length && (oe = oe.concat(ae)))
					}

					function w(k) {
						return Math.round(k * ge) / ge
					}

					function C(k, ae, ue) {
						return i(k[0] + ue * (ae[0] - k[0]), k[1] + ue * (ae[1] - k[1]), k[2] + ue * (ae[2] - k[2]))
					}
					var $ = {
						ease: g.ease[1],
						from: 0,
						to: 1
					};
					f.init = function(k) {
						this.duration = k.duration || 0, this.delay = k.delay || 0;
						var ae = k.ease || $.ease;
						g[ae] && (ae = g[ae][1]), typeof ae != "function" && (ae = $.ease), this.ease = ae, this.update = k.update || o, this.complete = k.complete || o, this.context = k.context || this, this.name = k.name;
						var ue = k.from,
							_e = k.to;
						ue === void 0 && (ue = $.from), _e === void 0 && (_e = $.to), this.unit = k.unit || "", typeof ue == "number" && typeof _e == "number" ? (this.begin = ue, this.change = _e - ue) : this.format(_e, ue), this.value = this.begin + this.unit, this.start = G(), k.autoplay !== !1 && this.play()
					}, f.play = function() {
						this.active || (this.start || (this.start = G()), this.active = !0, E(this))
					}, f.stop = function() {
						this.active && (this.active = !1, S(this))
					}, f.render = function(k) {
						var ae, ue = k - this.start;
						if (this.delay) {
							if (ue <= this.delay) return;
							ue -= this.delay
						}
						if (ue < this.duration) {
							var _e = this.ease(ue, 0, 1, this.duration);
							return ae = this.startRGB ? C(this.startRGB, this.endRGB, _e) : w(this.begin + _e * this.change), this.value = ae + this.unit, void this.update.call(this.context, this.value)
						}
						ae = this.endHex || this.begin + this.change, this.value = ae + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
					}, f.format = function(k, ae) {
						if (ae += "", k += "", k.charAt(0) == "#") return this.startRGB = n(ae), this.endRGB = n(k), this.endHex = k, this.begin = 0, void(this.change = 1);
						if (!this.unit) {
							var ue = ae.replace(_, ""),
								_e = k.replace(_, "");
							ue !== _e && s("tween", ae, k), this.unit = ue
						}
						ae = parseFloat(ae), k = parseFloat(k), this.begin = this.value = ae, this.change = k - ae
					}, f.destroy = function() {
						this.stop(), this.context = null, this.ease = this.update = this.complete = o
					};
					var oe = [],
						ge = 1e3
				}),
				J = d(Y, function(f) {
					f.init = function(E) {
						this.duration = E.duration || 0, this.complete = E.complete || o, this.context = E.context, this.play()
					}, f.render = function(E) {
						var x = E - this.start;
						x < this.duration || (this.complete.call(this.context), this.destroy())
					}
				}),
				be = d(Y, function(f, E) {
					f.init = function(x) {
						this.context = x.context, this.update = x.update, this.tweens = [], this.current = x.current;
						var S, w;
						for (S in x.values) w = x.values[S], this.current[S] !== w && this.tweens.push(new Y({
							name: S,
							from: this.current[S],
							to: w,
							duration: x.duration,
							delay: x.delay,
							ease: x.ease,
							autoplay: !1
						}));
						this.play()
					}, f.render = function(x) {
						var S, w, C = this.tweens.length,
							$ = !1;
						for (S = C; S--;) w = this.tweens[S], w.context && (w.render(x), this.current[w.name] = w.value, $ = !0);
						return $ ? void(this.update && this.update.call(this.context)) : this.destroy()
					}, f.destroy = function() {
						if (E.destroy.call(this), this.tweens) {
							var x, S = this.tweens.length;
							for (x = S; x--;) this.tweens[x].destroy();
							this.tweens = null, this.current = null
						}
					}
				}),
				se = t.config = {
					debug: !1,
					defaultUnit: "px",
					defaultAngle: "deg",
					keepInherited: !1,
					hideBackface: !1,
					perspective: "",
					fallback: !D.transition,
					agentTests: []
				};
			var y = e.style,
				V = e.css,
				z = {
					transform: D.transform && D.transform.css
				},
				H = {
					color: [U, N],
				},
				fe = {};
			var We = /ms/,
				Fe = /s|\./;
			return e.tram = t
		}(window.jQuery)
	});
	var Ms = c((Xk, Fs) => {
		"use strict";
		var t_ = window.$,
			r_ = Ri() && t_.tram;
		Fs.exports = function() {
			var e = {};
			e.VERSION = "1.6.0-Webflow";
			var t = {},
				r = Array.prototype,
				n = Object.prototype,
				i = Function.prototype,
				o = r.push,
				_ = r.indexOf,
				R = r.lastIndexOf,
				A = Array.isArray,
				N = Object.keys,
				P = i.bind,
				L = e.each = e.forEach = function(O, q, B) {
					if (O == null) return O;
					return O
				};
			e.contains = e.include = function(O, q) {
			}, e.delay = function(O, q) {
			}, e.defer = function(O) {
			}, e.throttle = function(O) {
				var q, B, D;
				return function() {
					q || (q = !0, B = arguments, D = this, r_.frame(function() {
						q = !1, O.apply(D, B)
					}))
				}
			}, e.debounce = function(O, q, B) {
			}, e.defaults = function(O) {
			}, e.keys = function(O) {
			}, e.has = function(O, q) {
			}, e.isObject = function(O) {
			}, e.now = Date.now || function() {
			}, e.templateSettings = {
			};
			var X = /(.)^/,
				j = {
					"'": "'",
					"\\": "\\",
					"\r": "r",
					"\n": "n",
					"\u2028": "u2028",
					"\u2029": "u2029"
				},
				Q = /\\|'|\r|\n|\u2028|\u2029/g,
				ie = function(O) {
					return "\\" + j[O]
				},
				M = /^\s*(\w|\$)+\s*$/;
			return e.template = function(O, q, B) {
			}, e
		}()
	});
	var Be = c((jk, Ws) => {
		"use strict";
		var pe = {},
			Gt = {},
			Vt = [],
			Ni = window.Webflow || [],
			yt = window.jQuery,
			Ke = yt(window),
			n_ = yt(document),
			nt = yt.isFunction,
			ze = pe._ = Ms(),
			Gs = pe.tram = Ri() && yt.tram,
			an = !1,
			Pi = !1;
		Gs.config.hideBackface = !1;
		Gs.config.keepInherited = !0;
		pe.define = function(e, t, r) {
			Gt[e] && Us(Gt[e]);
			var n = Gt[e] = t(yt, ze, r) || {};
			return Vs(n), n
		};
		pe.require = function(e) {
			return Gt[e]
		};

		function Vs(e) {
		}

		function i_(e) {
		}

		function Us(e) {
		}

		function o_(e) {
		}
		pe.push = function(e) {
		};
		pe.env = function(e) {
		};
		var on = navigator.userAgent.toLowerCase(),
			ks = pe.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
			a_ = pe.env.chrome = /chrome/.test(on) && /Google/.test(navigator.vendor) && parseInt(on.match(/chrome\/(\d+)\./)[1], 10),
			s_ = pe.env.ios = /(ipod|iphone|ipad)/.test(on);
		pe.env.safari = /safari/.test(on) && !a_ && !s_;
		var Li;
		ks && n_.on("touchstart mousedown", function(e) {
			Li = e.target
		});
		pe.validClick = ks ? function(e) {
			return e === Li || yt.contains(e, Li)
		} : function() {
			return !0
		};
		var Bs = "resize.webflow orientationchange.webflow load.webflow",
			u_ = "scroll.webflow " + Bs;
		pe.resize = qi(Ke, Bs);
		pe.scroll = qi(Ke, u_);
		pe.redraw = qi();

		function qi(e, t) {
			var r = [],
				n = {};
			return n.up = ze.throttle(function(i) {
				ze.each(r, function(o) {
					o(i)
				})
			}), e && t && e.on(t, n.up), n.on = function(i) {
				typeof i == "function" && (ze.contains(r, i) || r.push(i))
			}, n.off = function(i) {
				if (!arguments.length) {
					r = [];
					return
				}
				r = ze.filter(r, function(o) {
					return o !== i
				})
			}, n
		}
		pe.location = function(e) {
		};
		pe.env() && (pe.location = function() {});
		pe.ready = function() {
		};

		function Ds(e) {
		}

		function c_() {
		}
		var At;
		pe.load = function(e) {
		};

		function Hs() {
		}
		pe.destroy = function(e) {
		};
		yt(pe.ready);
		Hs();
		Ws.exports = window.Webflow = pe
	});
	var zs = c((zk, js) => {
		"use strict";
		var Xs = Be();
		Xs.define("brand", js.exports = function(e) {
			var t = {},
				r = document,
				n = e("html"),
				i = e("body"),
				o = ".w-webflow-badge",
				a = window.location,
				s = /PhantomJS/i.test(navigator.userAgent),
				u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
				l;
			t.ready = function() {
				var p = n.attr("data-wf-status"),
					h = n.attr("data-wf-domain") || "";
				/\.webflow\.io$/i.test(h) && a.hostname !== h && (p = !0), p && !s && (l = l || d(), g(), setTimeout(g, 500), e(r).off(u, v).on(u, v))
			};

			function v() {
				e(l).attr("style", p ? "display: none !important;" : "")
			}

			function d() {
			}

			function g() {
			}
			return t
		})
	});
	var Ys = c((Kk, Ks) => {
		"use strict";
		var Fi = Be();
		Fi.define("edit", Ks.exports = function(e, t, r) {
			if (r = r || {}, (Fi.env("test") || Fi.env("frame")) && !r.fixture && !l_()) return {
				exit: 1
			};
			var n = {},
				i = e(window),
				o = e(document.documentElement),
				a = document.location,
				s = "hashchange",
				u, l = r.load || g,
				v = !1;
			try {
				v = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
			} catch {}
			v ? l() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && l() : i.on(s, d).triggerHandler(s);

			function d() {
				u || /\?edit/.test(a.hash) && l()
			}

			function g() {
			}

			function p(N) {
			}

			function h(N, P) {
			}

			function b(N, P, L) {
			}

			function T(N) {
			}

			function _(N) {
			}

			function R(N) {
			}

			function A(N, P) {
			}
			return n
		});

		function l_() {
		}
	});
	var Qs = c((Yk, $s) => {
		"use strict";
		var f_ = Be();
		f_.define("focus-visible", $s.exports = function() {
			function e(r) {
				var n = !0,
					i = !1,
					o = null,
					a = {
						text: !0,
						search: !0,
						url: !0,
						tel: !0,
						email: !0,
						password: !0,
						number: !0,
						date: !0,
						month: !0,
						week: !0,
						time: !0,
						datetime: !0,
						"datetime-local": !0
					};

				function s(A) {
				}

				function u(A) {
				}

				function l(A) {
				}

				function v(A) {
				}

				function d(A) {
				}

				function g() {
				}

				function p(A) {
				}

				function h(A) {
				}

				function b() {
				}

				function T() {
				}

				function _() {
				}

				function R(A) {
				}
			}

			function t() {
			}
			return {
				ready: t
			}
		})
	});
	var eu = c(($k, Js) => {
		"use strict";
		var Zs = Be();
		Zs.define("focus", Js.exports = function() {
			var e = [],
				t = !1;

			function r(a) {
				t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
			}

			function n(a) {
				var s = a.target,
					u = s.tagName;
				return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
			}

			function i(a) {
				n(a) && (t = !0, setTimeout(() => {
					for (t = !1, a.target.focus(); e.length > 0;) {
						var s = e.pop();
						s.target.dispatchEvent(new MouseEvent(s.type, s))
					}
				}, 0))
			}

			function o() {
				typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Zs.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
			}
			return {
				ready: o
			}
		})
	});
	var nu = c((Qk, ru) => {
		"use strict";
		var Mi = window.jQuery,
			it = {},
			sn = [],
			tu = ".w-ix",
			un = {
				reset: function(e, t) {
					t.__wf_intro = null
				},
				intro: function(e, t) {
					t.__wf_intro || (t.__wf_intro = !0, Mi(t).triggerHandler(it.types.INTRO))
				},
				outro: function(e, t) {
					t.__wf_intro && (t.__wf_intro = null, Mi(t).triggerHandler(it.types.OUTRO))
				}
			};
		it.triggers = {};
		it.types = {
			INTRO: "w-ix-intro" + tu,
			OUTRO: "w-ix-outro" + tu
		};
		it.init = function() {
			for (var e = sn.length, t = 0; t < e; t++) {
				var r = sn[t];
				r[0](0, r[1])
			}
			sn = [], Mi.extend(it.triggers, un)
		};
		it.async = function() {
			for (var e in un) {
				var t = un[e];
				un.hasOwnProperty(e) && (it.triggers[e] = function(r, n) {
					sn.push([t, n])
				})
			}
		};
		it.async();
		ru.exports = it
	});
	var Gi = c((Zk, au) => {
		"use strict";
		var Di = nu();

		function iu(e, t) {
			var r = document.createEvent("CustomEvent");
			r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
		}
		var d_ = window.jQuery,
			cn = {},
			ou = ".w-ix",
			p_ = {
				reset: function(e, t) {
					Di.triggers.reset(e, t)
				},
				intro: function(e, t) {
					Di.triggers.intro(e, t), iu(t, "COMPONENT_ACTIVE")
				},
				outro: function(e, t) {
					Di.triggers.outro(e, t), iu(t, "COMPONENT_INACTIVE")
				}
			};
		cn.triggers = {};
		cn.types = {
			INTRO: "w-ix-intro" + ou,
			OUTRO: "w-ix-outro" + ou
		};
		d_.extend(cn.triggers, p_);
		au.exports = cn
	});
	var su = c((Jk, ft) => {
		function Vi(e) {
			return ft.exports = Vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
				return typeof t
			} : function(t) {
				return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, ft.exports.__esModule = !0, ft.exports.default = ft.exports, Vi(e)
		}
		ft.exports = Vi, ft.exports.__esModule = !0, ft.exports.default = ft.exports
	});
	var ln = c((eB, mr) => {
		var g_ = su().default;

		function uu(e) {
			if (typeof WeakMap != "function") return null;
			var t = new WeakMap,
				r = new WeakMap;
			return (uu = function(i) {
				return i ? r : t
			})(e)
		}

		function h_(e, t) {
			if (!t && e && e.__esModule) return e;
			if (e === null || g_(e) != "object" && typeof e != "function") return {
				default: e
			};
			var r = uu(t);
			if (r && r.has(e)) return r.get(e);
			var n = {
					__proto__: null
				},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var o in e)
				if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
					var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
					a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
				} return n.default = e, r && r.set(e, n), n
		}
		mr.exports = h_, mr.exports.__esModule = !0, mr.exports.default = mr.exports
	});
	var cu = c((tB, yr) => {
		function v_(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		yr.exports = v_, yr.exports.__esModule = !0, yr.exports.default = yr.exports
	});
	var me = c((rB, lu) => {
		var fn = function(e) {
			return e && e.Math == Math && e
		};
		lu.exports = fn(typeof globalThis == "object" && globalThis) || fn(typeof window == "object" && window) || fn(typeof self == "object" && self) || fn(typeof global == "object" && global) || function() {
			return this
		}() || Function("return this")()
	});
	var Ut = c((nB, fu) => {
		fu.exports = function(e) {
			try {
				return !!e()
			} catch {
				return !0
			}
		}
	});
	var St = c((iB, du) => {
		var m_ = Ut();
		du.exports = !m_(function() {
			return Object.defineProperty({}, 1, {
				get: function() {
					return 7
				}
			})[1] != 7
		})
	});
	var dn = c((oB, pu) => {
		var Er = Function.prototype.call;
		pu.exports = Er.bind ? Er.bind(Er) : function() {
			return Er.apply(Er, arguments)
		}
	});
	var mu = c(vu => {
		"use strict";
		var gu = {}.propertyIsEnumerable,
			hu = Object.getOwnPropertyDescriptor,
			y_ = hu && !gu.call({
				1: 2
			}, 1);
		vu.f = y_ ? function(t) {
			var r = hu(this, t);
			return !!r && r.enumerable
		} : gu
	});
	var Ui = c((sB, yu) => {
		yu.exports = function(e, t) {
			return {
				enumerable: !(e & 1),
				configurable: !(e & 2),
				writable: !(e & 4),
				value: t
			}
		}
	});
	var Ye = c((uB, bu) => {
		var Eu = Function.prototype,
			ki = Eu.bind,
			Bi = Eu.call,
			E_ = ki && ki.bind(Bi);
		bu.exports = ki ? function(e) {
			return e && E_(Bi, e)
		} : function(e) {
			return e && function() {
				return Bi.apply(e, arguments)
			}
		}
	});
	var Tu = c((cB, Iu) => {
		var _u = Ye(),
			b_ = _u({}.toString),
			__ = _u("".slice);
		Iu.exports = function(e) {
			return __(b_(e), 8, -1)
		}
	});
	var xu = c((lB, wu) => {
		var I_ = me(),
			T_ = Ye(),
			w_ = Ut(),
			x_ = Tu(),
			Hi = I_.Object,
			O_ = T_("".split);
		wu.exports = w_(function() {
			return !Hi("z").propertyIsEnumerable(0)
		}) ? function(e) {
			return x_(e) == "String" ? O_(e, "") : Hi(e)
		} : Hi
	});
	var Wi = c((fB, Ou) => {
		var A_ = me(),
			S_ = A_.TypeError;
		Ou.exports = function(e) {
			if (e == null) throw S_("Can't call method on " + e);
			return e
		}
	});
	var br = c((dB, Au) => {
		var C_ = xu(),
			R_ = Wi();
		Au.exports = function(e) {
			return C_(R_(e))
		}
	});
	var ot = c((pB, Su) => {
		Su.exports = function(e) {
			return typeof e == "function"
		}
	});
	var kt = c((gB, Cu) => {
		var L_ = ot();
		Cu.exports = function(e) {
			return typeof e == "object" ? e !== null : L_(e)
		}
	});
	var _r = c((hB, Ru) => {
		var Xi = me(),
			N_ = ot(),
			P_ = function(e) {
				return N_(e) ? e : void 0
			};
		Ru.exports = function(e, t) {
			return arguments.length < 2 ? P_(Xi[e]) : Xi[e] && Xi[e][t]
		}
	});
	var Nu = c((vB, Lu) => {
		var q_ = Ye();
		Lu.exports = q_({}.isPrototypeOf)
	});
	var qu = c((mB, Pu) => {
		var F_ = _r();
		Pu.exports = F_("navigator", "userAgent") || ""
	});
	var ku = c((yB, Uu) => {
		var Vu = me(),
			ji = qu(),
			Fu = Vu.process,
			Mu = Vu.Deno,
			Du = Fu && Fu.versions || Mu && Mu.version,
			Gu = Du && Du.v8,
			$e, pn;
		Gu && ($e = Gu.split("."), pn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1]));
		!pn && ji && ($e = ji.match(/Edge\/(\d+)/), (!$e || $e[1] >= 74) && ($e = ji.match(/Chrome\/(\d+)/), $e && (pn = +$e[1])));
		Uu.exports = pn
	});
	var zi = c((EB, Hu) => {
		var Bu = ku(),
			M_ = Ut();
		Hu.exports = !!Object.getOwnPropertySymbols && !M_(function() {
			var e = Symbol();
			return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Bu && Bu < 41
		})
	});
	var Ki = c((bB, Wu) => {
		var D_ = zi();
		Wu.exports = D_ && !Symbol.sham && typeof Symbol.iterator == "symbol"
	});
	var Yi = c((_B, Xu) => {
		var G_ = me(),
			V_ = _r(),
			U_ = ot(),
			k_ = Nu(),
			B_ = Ki(),
			H_ = G_.Object;
		Xu.exports = B_ ? function(e) {
			return typeof e == "symbol"
		} : function(e) {
			var t = V_("Symbol");
			return U_(t) && k_(t.prototype, H_(e))
		}
	});
	var zu = c((IB, ju) => {
		var W_ = me(),
			X_ = W_.String;
		ju.exports = function(e) {
			try {
				return X_(e)
			} catch {
				return "Object"
			}
		}
	});
	var Yu = c((TB, Ku) => {
		var j_ = me(),
			z_ = ot(),
			K_ = zu(),
			Y_ = j_.TypeError;
		Ku.exports = function(e) {
			if (z_(e)) return e;
			throw Y_(K_(e) + " is not a function")
		}
	});
	var Qu = c((wB, $u) => {
		var $_ = Yu();
		$u.exports = function(e, t) {
			var r = e[t];
			return r == null ? void 0 : $_(r)
		}
	});
	var Ju = c((xB, Zu) => {
		var Q_ = me(),
			$i = dn(),
			Qi = ot(),
			Zi = kt(),
			Z_ = Q_.TypeError;
		Zu.exports = function(e, t) {
			var r, n;
			if (t === "string" && Qi(r = e.toString) && !Zi(n = $i(r, e)) || Qi(r = e.valueOf) && !Zi(n = $i(r, e)) || t !== "string" && Qi(r = e.toString) && !Zi(n = $i(r, e))) return n;
			throw Z_("Can't convert object to primitive value")
		}
	});
	var tc = c((OB, ec) => {
		ec.exports = !1
	});
	var gn = c((AB, nc) => {
		var rc = me(),
			J_ = Object.defineProperty;
		nc.exports = function(e, t) {
			try {
				J_(rc, e, {
					value: t,
					configurable: !0,
					writable: !0
				})
			} catch {
				rc[e] = t
			}
			return t
		}
	});
	var hn = c((SB, oc) => {
		var eI = me(),
			tI = gn(),
			ic = "__core-js_shared__",
			rI = eI[ic] || tI(ic, {});
		oc.exports = rI
	});
	var Ji = c((CB, sc) => {
		var nI = tc(),
			ac = hn();
		(sc.exports = function(e, t) {
			return ac[e] || (ac[e] = t !== void 0 ? t : {})
		})("versions", []).push({
			version: "3.19.0",
			mode: nI ? "pure" : "global",
			copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
		})
	});
	var cc = c((RB, uc) => {
		var iI = me(),
			oI = Wi(),
			aI = iI.Object;
		uc.exports = function(e) {
			return aI(oI(e))
		}
	});
	var Et = c((LB, lc) => {
		var sI = Ye(),
			uI = cc(),
			cI = sI({}.hasOwnProperty);
		lc.exports = Object.hasOwn || function(t, r) {
			return cI(uI(t), r)
		}
	});
	var eo = c((NB, fc) => {
		var lI = Ye(),
			fI = 0,
			dI = Math.random(),
			pI = lI(1 .toString);
		fc.exports = function(e) {
			return "Symbol(" + (e === void 0 ? "" : e) + ")_" + pI(++fI + dI, 36)
		}
	});
	var to = c((PB, vc) => {
		var gI = me(),
			hI = Ji(),
			dc = Et(),
			vI = eo(),
			pc = zi(),
			hc = Ki(),
			Bt = hI("wks"),
			Ct = gI.Symbol,
			gc = Ct && Ct.for,
			mI = hc ? Ct : Ct && Ct.withoutSetter || vI;
		vc.exports = function(e) {
			if (!dc(Bt, e) || !(pc || typeof Bt[e] == "string")) {
				var t = "Symbol." + e;
				pc && dc(Ct, e) ? Bt[e] = Ct[e] : hc && gc ? Bt[e] = gc(t) : Bt[e] = mI(t)
			}
			return Bt[e]
		}
	});
	var bc = c((qB, Ec) => {
		var yI = me(),
			EI = dn(),
			mc = kt(),
			yc = Yi(),
			bI = Qu(),
			_I = Ju(),
			II = to(),
			TI = yI.TypeError,
			wI = II("toPrimitive");
		Ec.exports = function(e, t) {
			if (!mc(e) || yc(e)) return e;
			var r = bI(e, wI),
				n;
			if (r) {
				if (t === void 0 && (t = "default"), n = EI(r, e, t), !mc(n) || yc(n)) return n;
				throw TI("Can't convert object to primitive value")
			}
			return t === void 0 && (t = "number"), _I(e, t)
		}
	});
	var ro = c((FB, _c) => {
		var xI = bc(),
			OI = Yi();
		_c.exports = function(e) {
			var t = xI(e, "string");
			return OI(t) ? t : t + ""
		}
	});
	var io = c((MB, Tc) => {
		var AI = me(),
			Ic = kt(),
			no = AI.document,
			SI = Ic(no) && Ic(no.createElement);
		Tc.exports = function(e) {
			return SI ? no.createElement(e) : {}
		}
	});
	var oo = c((DB, wc) => {
		var CI = St(),
			RI = Ut(),
			LI = io();
		wc.exports = !CI && !RI(function() {
			return Object.defineProperty(LI("div"), "a", {
				get: function() {
					return 7
				}
			}).a != 7
		})
	});
	var ao = c(Oc => {
		var NI = St(),
			PI = dn(),
			qI = mu(),
			FI = Ui(),
			MI = br(),
			DI = ro(),
			GI = Et(),
			VI = oo(),
			xc = Object.getOwnPropertyDescriptor;
		Oc.f = NI ? xc : function(t, r) {
			if (t = MI(t), r = DI(r), VI) try {
				return xc(t, r)
			} catch {}
			if (GI(t, r)) return FI(!PI(qI.f, t, r), t[r])
		}
	});
	var Ir = c((VB, Sc) => {
		var Ac = me(),
			UI = kt(),
			kI = Ac.String,
			BI = Ac.TypeError;
		Sc.exports = function(e) {
			if (UI(e)) return e;
			throw BI(kI(e) + " is not an object")
		}
	});
	var Tr = c(Lc => {
		var HI = me(),
			WI = St(),
			XI = oo(),
			Cc = Ir(),
			jI = ro(),
			zI = HI.TypeError,
			Rc = Object.defineProperty;
		Lc.f = WI ? Rc : function(t, r, n) {
			if (Cc(t), r = jI(r), Cc(n), XI) try {
				return Rc(t, r, n)
			} catch {}
			if ("get" in n || "set" in n) throw zI("Accessors not supported");
			return "value" in n && (t[r] = n.value), t
		}
	});
	var vn = c((kB, Nc) => {
		var KI = St(),
			YI = Tr(),
			$I = Ui();
		Nc.exports = KI ? function(e, t, r) {
			return YI.f(e, t, $I(1, r))
		} : function(e, t, r) {
			return e[t] = r, e
		}
	});
	var uo = c((BB, Pc) => {
		var QI = Ye(),
			ZI = ot(),
			so = hn(),
			JI = QI(Function.toString);
		ZI(so.inspectSource) || (so.inspectSource = function(e) {
			return JI(e)
		});
		Pc.exports = so.inspectSource
	});
	var Mc = c((HB, Fc) => {
		var eT = me(),
			tT = ot(),
			rT = uo(),
			qc = eT.WeakMap;
		Fc.exports = tT(qc) && /native code/.test(rT(qc))
	});
	var co = c((WB, Gc) => {
		var nT = Ji(),
			iT = eo(),
			Dc = nT("keys");
		Gc.exports = function(e) {
			return Dc[e] || (Dc[e] = iT(e))
		}
	});
	var mn = c((XB, Vc) => {
		Vc.exports = {}
	});
	var Xc = c((jB, Wc) => {
		var oT = Mc(),
			Hc = me(),
			lo = Ye(),
			aT = kt(),
			sT = vn(),
			fo = Et(),
			po = hn(),
			uT = co(),
			cT = mn(),
			Uc = "Object already initialized",
			ho = Hc.TypeError,
			lT = Hc.WeakMap,
			yn, wr, En, fT = function(e) {
				return En(e) ? wr(e) : yn(e, {})
			},
			dT = function(e) {
				return function(t) {
					var r;
					if (!aT(t) || (r = wr(t)).type !== e) throw ho("Incompatible receiver, " + e + " required");
					return r
				}
			};
		oT || po.state ? (bt = po.state || (po.state = new lT), kc = lo(bt.get), go = lo(bt.has), Bc = lo(bt.set), yn = function(e, t) {
			if (go(bt, e)) throw new ho(Uc);
			return t.facade = e, Bc(bt, e, t), t
		}, wr = function(e) {
			return kc(bt, e) || {}
		}, En = function(e) {
			return go(bt, e)
		}) : (Rt = uT("state"), cT[Rt] = !0, yn = function(e, t) {
			if (fo(e, Rt)) throw new ho(Uc);
			return t.facade = e, sT(e, Rt, t), t
		}, wr = function(e) {
			return fo(e, Rt) ? e[Rt] : {}
		}, En = function(e) {
			return fo(e, Rt)
		});
		var bt, kc, go, Bc, Rt;
		Wc.exports = {
			set: yn,
			get: wr,
			has: En,
			enforce: fT,
			getterFor: dT
		}
	});
	var Kc = c((zB, zc) => {
		var vo = St(),
			pT = Et(),
			jc = Function.prototype,
			gT = vo && Object.getOwnPropertyDescriptor,
			mo = pT(jc, "name"),
			hT = mo && function() {}.name === "something",
			vT = mo && (!vo || vo && gT(jc, "name").configurable);
		zc.exports = {
			EXISTS: mo,
			PROPER: hT,
			CONFIGURABLE: vT
		}
	});
	var Jc = c((KB, Zc) => {
		var mT = me(),
			Yc = ot(),
			yT = Et(),
			$c = vn(),
			ET = gn(),
			bT = uo(),
			Qc = Xc(),
			_T = Kc().CONFIGURABLE,
			IT = Qc.get,
			TT = Qc.enforce,
			wT = String(String).split("String");
		(Zc.exports = function(e, t, r, n) {
			var i = n ? !!n.unsafe : !1,
				o = n ? !!n.enumerable : !1,
				a = n ? !!n.noTargetGet : !1,
				s = n && n.name !== void 0 ? n.name : t,
				u;
			if (Yc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!yT(r, "name") || _T && r.name !== s) && $c(r, "name", s), u = TT(r), u.source || (u.source = wT.join(typeof s == "string" ? s : ""))), e === mT) {
				o ? e[t] = r : ET(t, r);
				return
			} else i ? !a && e[t] && (o = !0) : delete e[t];
			o ? e[t] = r : $c(e, t, r)
		})(Function.prototype, "toString", function() {
			return Yc(this) && IT(this).source || bT(this)
		})
	});
	var yo = c((YB, el) => {
		var xT = Math.ceil,
			OT = Math.floor;
		el.exports = function(e) {
			var t = +e;
			return t !== t || t === 0 ? 0 : (t > 0 ? OT : xT)(t)
		}
	});
	var rl = c(($B, tl) => {
		var AT = yo(),
			ST = Math.max,
			CT = Math.min;
		tl.exports = function(e, t) {
			var r = AT(e);
			return r < 0 ? ST(r + t, 0) : CT(r, t)
		}
	});
	var il = c((QB, nl) => {
		var RT = yo(),
			LT = Math.min;
		nl.exports = function(e) {
			return e > 0 ? LT(RT(e), 9007199254740991) : 0
		}
	});
	var al = c((ZB, ol) => {
		var NT = il();
		ol.exports = function(e) {
			return NT(e.length)
		}
	});
	var Eo = c((JB, ul) => {
		var PT = br(),
			qT = rl(),
			FT = al(),
			sl = function(e) {
				return function(t, r, n) {
					var i = PT(t),
						o = FT(i),
						a = qT(n, o),
						s;
					if (e && r != r) {
						for (; o > a;)
							if (s = i[a++], s != s) return !0
					} else
						for (; o > a; a++)
							if ((e || a in i) && i[a] === r) return e || a || 0;
					return !e && -1
				}
			};
		ul.exports = {
			includes: sl(!0),
			indexOf: sl(!1)
		}
	});
	var _o = c((e5, ll) => {
		var MT = Ye(),
			bo = Et(),
			DT = br(),
			GT = Eo().indexOf,
			VT = mn(),
			cl = MT([].push);
		ll.exports = function(e, t) {
			var r = DT(e),
				n = 0,
				i = [],
				o;
			for (o in r) !bo(VT, o) && bo(r, o) && cl(i, o);
			for (; t.length > n;) bo(r, o = t[n++]) && (~GT(i, o) || cl(i, o));
			return i
		}
	});
	var bn = c((t5, fl) => {
		fl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
	});
	var pl = c(dl => {
		var UT = _o(),
			kT = bn(),
			BT = kT.concat("length", "prototype");
		dl.f = Object.getOwnPropertyNames || function(t) {
			return UT(t, BT)
		}
	});
	var hl = c(gl => {
		gl.f = Object.getOwnPropertySymbols
	});
	var ml = c((i5, vl) => {
		var HT = _r(),
			WT = Ye(),
			XT = pl(),
			jT = hl(),
			zT = Ir(),
			KT = WT([].concat);
		vl.exports = HT("Reflect", "ownKeys") || function(t) {
			var r = XT.f(zT(t)),
				n = jT.f;
			return n ? KT(r, n(t)) : r
		}
	});
	var El = c((o5, yl) => {
		var YT = Et(),
			$T = ml(),
			QT = ao(),
			ZT = Tr();
		yl.exports = function(e, t) {
			for (var r = $T(t), n = ZT.f, i = QT.f, o = 0; o < r.length; o++) {
				var a = r[o];
				YT(e, a) || n(e, a, i(t, a))
			}
		}
	});
	var _l = c((a5, bl) => {
		var JT = Ut(),
			ew = ot(),
			tw = /#|\.prototype\./,
			xr = function(e, t) {
				var r = nw[rw(e)];
				return r == ow ? !0 : r == iw ? !1 : ew(t) ? JT(t) : !!t
			},
			rw = xr.normalize = function(e) {
				return String(e).replace(tw, ".").toLowerCase()
			},
			nw = xr.data = {},
			iw = xr.NATIVE = "N",
			ow = xr.POLYFILL = "P";
		bl.exports = xr
	});
	var Tl = c((s5, Il) => {
		var Io = me(),
			aw = ao().f,
			sw = vn(),
			uw = Jc(),
			cw = gn(),
			lw = El(),
			fw = _l();
		Il.exports = function(e, t) {
			var r = e.target,
				n = e.global,
				i = e.stat,
				o, a, s, u, l, v;
			if (n ? a = Io : i ? a = Io[r] || cw(r, {}) : a = (Io[r] || {}).prototype, a)
				for (s in t) {
					if (l = t[s], e.noTargetGet ? (v = aw(a, s), u = v && v.value) : u = a[s], o = fw(n ? s : r + (i ? "." : "#") + s, e.forced), !o && u !== void 0) {
						if (typeof l == typeof u) continue;
						lw(l, u)
					}(e.sham || u && u.sham) && sw(l, "sham", !0), uw(a, s, l, e)
				}
		}
	});
	var xl = c((u5, wl) => {
		var dw = _o(),
			pw = bn();
		wl.exports = Object.keys || function(t) {
			return dw(t, pw)
		}
	});
	var Al = c((c5, Ol) => {
		var gw = St(),
			hw = Tr(),
			vw = Ir(),
			mw = br(),
			yw = xl();
		Ol.exports = gw ? Object.defineProperties : function(t, r) {
			vw(t);
			for (var n = mw(r), i = yw(r), o = i.length, a = 0, s; o > a;) hw.f(t, s = i[a++], n[s]);
			return t
		}
	});
	var Cl = c((l5, Sl) => {
		var Ew = _r();
		Sl.exports = Ew("document", "documentElement")
	});
	var Dl = c((f5, Ml) => {
		var bw = Ir(),
			_w = Al(),
			Rl = bn(),
			Iw = mn(),
			Tw = Cl(),
			ww = io(),
			xw = co(),
			Ll = ">",
			Nl = "<",
			wo = "prototype",
			xo = "script",
			ql = xw("IE_PROTO"),
			To = function() {},
			Fl = function(e) {
				return Nl + xo + Ll + e + Nl + "/" + xo + Ll
			},
			Pl = function(e) {
				e.write(Fl("")), e.close();
				var t = e.parentWindow.Object;
				return e = null, t
			},
			Ow = function() {
			},
			_n, In = function() {
			};
		Iw[ql] = !0;
		Ml.exports = Object.create || function(t, r) {
			var n;
			return t !== null ? (To[wo] = bw(t), n = new To, To[wo] = null, n[ql] = t) : n = In(), r === void 0 ? n : _w(n, r)
		}
	});
	var Vl = c((d5, Gl) => {
		var Aw = to(),
			Sw = Dl(),
			Cw = Tr(),
			Oo = Aw("unscopables"),
			Ao = Array.prototype;
		Ao[Oo] == null && Cw.f(Ao, Oo, {
			configurable: !0,
			value: Sw(null)
		});
		Gl.exports = function(e) {
			Ao[Oo][e] = !0
		}
	});
	var Ul = c(() => {
		"use strict";
		var Rw = Tl(),
			Lw = Eo().includes,
			Nw = Vl();
		Rw({
			target: "Array",
			proto: !0
		}, {
			includes: function(t) {
				return Lw(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		Nw("includes")
	});
	var Bl = c((h5, kl) => {
		var Pw = me(),
			qw = Ye();
		kl.exports = function(e, t) {
			return qw(Pw[e].prototype[t])
		}
	});
	var Wl = c((v5, Hl) => {
		Ul();
		var Fw = Bl();
		Hl.exports = Fw("Array", "includes")
	});
	var jl = c((m5, Xl) => {
		var Mw = Wl();
		Xl.exports = Mw
	});
	var Kl = c((y5, zl) => {
		var Dw = jl();
		zl.exports = Dw
	});
	var So = c((E5, Yl) => {
		var Gw = typeof global == "object" && global && global.Object === Object && global;
		Yl.exports = Gw
	});
	var Qe = c((b5, $l) => {
		var Vw = So(),
			Uw = typeof self == "object" && self && self.Object === Object && self,
			kw = Vw || Uw || Function("return this")();
		$l.exports = kw
	});
	var Ht = c((_5, Ql) => {
		var Bw = Qe(),
			Hw = Bw.Symbol;
		Ql.exports = Hw
	});
	var tf = c((I5, ef) => {
		var Zl = Ht(),
			Jl = Object.prototype,
			Ww = Jl.hasOwnProperty,
			Xw = Jl.toString,
			Or = Zl ? Zl.toStringTag : void 0;

		function jw(e) {
			var t = Ww.call(e, Or),
				r = e[Or];
			try {
				e[Or] = void 0;
				var n = !0
			} catch {}
			var i = Xw.call(e);
			return n && (t ? e[Or] = r : delete e[Or]), i
		}
		ef.exports = jw
	});
	var nf = c((T5, rf) => {
		var zw = Object.prototype,
			Kw = zw.toString;

		function Yw(e) {
			return Kw.call(e)
		}
		rf.exports = Yw
	});
	var _t = c((w5, sf) => {
		var of = Ht(), $w = tf(), Qw = nf(), Zw = "[object Null]", Jw = "[object Undefined]", af = of ? of.toStringTag : void 0;

		function e0(e) {
			return e == null ? e === void 0 ? Jw : Zw : af && af in Object(e) ? $w(e) : Qw(e)
		}
		sf.exports = e0
	});
	var Co = c((x5, uf) => {
		function t0(e, t) {
			return function(r) {
				return e(t(r))
			}
		}
		uf.exports = t0
	});
	var Ro = c((O5, cf) => {
		var r0 = Co(),
			n0 = r0(Object.getPrototypeOf, Object);
		cf.exports = n0
	});
	var dt = c((A5, lf) => {
		function i0(e) {
			return e != null && typeof e == "object"
		}
		lf.exports = i0
	});
	var Lo = c((S5, df) => {
		var o0 = _t(),
			a0 = Ro(),
			s0 = dt(),
			u0 = "[object Object]",
			c0 = Function.prototype,
			l0 = Object.prototype,
			ff = c0.toString,
			f0 = l0.hasOwnProperty,
			d0 = ff.call(Object);

		function p0(e) {
			if (!s0(e) || o0(e) != u0) return !1;
			var t = a0(e);
			if (t === null) return !0;
			var r = f0.call(t, "constructor") && t.constructor;
			return typeof r == "function" && r instanceof r && ff.call(r) == d0
		}
		df.exports = p0
	});
	var pf = c(No => {
		"use strict";
		Object.defineProperty(No, "__esModule", {
			value: !0
		});
		No.default = g0;

		function g0(e) {
			var t, r = e.Symbol;
			return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
		}
	});
	var gf = c((qo, Po) => {
		"use strict";
		Object.defineProperty(qo, "__esModule", {
			value: !0
		});
		var h0 = pf(),
			v0 = m0(h0);

		function m0(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var Wt;
		typeof self < "u" ? Wt = self : typeof window < "u" ? Wt = window : typeof global < "u" ? Wt = global : typeof Po < "u" ? Wt = Po : Wt = Function("return this")();
		var y0 = (0, v0.default)(Wt);
		qo.default = y0
	});
	var Fo = c(Ar => {
		"use strict";
		Ar.__esModule = !0;
		Ar.ActionTypes = void 0;
		Ar.default = yf;
		var E0 = Lo(),
			b0 = mf(E0),
			_0 = gf(),
			hf = mf(_0);

		function mf(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var vf = Ar.ActionTypes = {
			INIT: "@@redux/INIT"
		};

		function yf(e, t, r) {
			var n;
			if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
				if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
				return r(yf)(e, t)
			}
			if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
			var i = e,
				o = t,
				a = [],
				s = a,
				u = !1;

			function l() {
				s === a && (s = a.slice())
			}

			function v() {
				return o
			}

			function d(b) {
				if (typeof b != "function") throw new Error("Expected listener to be a function.");
				var T = !0;
				return l(), s.push(b),
					function() {
						if (T) {
							T = !1, l();
							var R = s.indexOf(b);
							s.splice(R, 1)
						}
					}
			}

			function g(b) {
				if (!(0, b0.default)(b)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
				if (typeof b.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
				if (u) throw new Error("Reducers may not dispatch actions.");
				try {
					u = !0, o = i(o, b)
				} finally {
					u = !1
				}
				for (var T = a = s, _ = 0; _ < T.length; _++) T[_]();
				return b
			}

			function p(b) {
			}

			function h() {
			}
			return g({
				type: vf.INIT
			}), n = {
				dispatch: g,
				subscribe: d,
				getState: v,
				replaceReducer: p
			}, n[hf.default] = h, n
		}
	});
	var Do = c(Mo => {
		"use strict";
		Mo.__esModule = !0;
		Mo.default = I0;

		function I0(e) {
		}
	});
	var _f = c(Go => {
		"use strict";
		Go.__esModule = !0;
		Go.default = A0;
		var Ef = Fo(),
			T0 = Lo(),
			N5 = bf(T0),
			w0 = Do(),
			P5 = bf(w0);

		function bf(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function x0(e, t) {
		}

		function O0(e) {
		}

		function A0(e) {
			for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
				var i = t[n];
				typeof e[i] == "function" && (r[i] = e[i])
			}
			var o = Object.keys(r);
			if (!1) var a;
			var s;
			try {
				O0(r)
			} catch (u) {
				s = u
			}
			return function() {
				var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
					v = arguments[1];
				if (s) throw s;
				if (!1) var d;
				for (var g = !1, p = {}, h = 0; h < o.length; h++) {
					var b = o[h],
						T = r[b],
						_ = l[b],
						R = T(_, v);
					if (typeof R > "u") {
						var A = x0(b, v);
						throw new Error(A)
					}
					p[b] = R, g = g || R !== _
				}
				return g ? p : l
			}
		}
	});
	var Tf = c(Vo => {
		"use strict";
		Vo.__esModule = !0;
		Vo.default = S0;

		function If(e, t) {
			return function() {
				return t(e.apply(void 0, arguments))
			}
		}

		function S0(e, t) {
			if (typeof e == "function") return If(e, t);
			if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
			for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
				var o = r[i],
					a = e[o];
				typeof a == "function" && (n[o] = If(a, t))
			}
			return n
		}
	});
	var ko = c(Uo => {
		"use strict";
		Uo.__esModule = !0;
		Uo.default = C0;

		function C0() {
		}
	});
	var wf = c(Bo => {
		"use strict";
		Bo.__esModule = !0;
		var R0 = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = arguments[t];
				for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
			}
			return e
		};
		Bo.default = q0;
		var L0 = ko(),
			N0 = P0(L0);

		function P0(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function q0() {
		}
	});
	var Ho = c(He => {
		"use strict";
		He.__esModule = !0;
		He.compose = He.applyMiddleware = He.bindActionCreators = He.combineReducers = He.createStore = void 0;
		var F0 = Fo(),
			M0 = Xt(F0),
			D0 = _f(),
			G0 = Xt(D0),
			V0 = Tf(),
			U0 = Xt(V0),
			k0 = wf(),
			B0 = Xt(k0),
			H0 = ko(),
			W0 = Xt(H0),
			X0 = Do(),
			G5 = Xt(X0);

		function Xt(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		He.createStore = M0.default;
		He.combineReducers = G0.default;
		He.bindActionCreators = U0.default;
		He.applyMiddleware = B0.default;
		He.compose = W0.default
	});
	var Ze, Wo, at, j0, z0, Tn, K0, Xo = ve(() => {
		"use strict";
		Ze = {
			MOUSE_CLICK: "MOUSE_CLICK",
			MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
			MOUSE_DOWN: "MOUSE_DOWN",
			MOUSE_UP: "MOUSE_UP",
			MOUSE_OVER: "MOUSE_OVER",
			MOUSE_OUT: "MOUSE_OUT",
			MOUSE_MOVE: "MOUSE_MOVE",
			MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
			SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
			SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
			SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
		}, Wo = {
			ELEMENT: "ELEMENT",
			CLASS: "CLASS",
			PAGE: "PAGE"
		}, at = {
		}, j0 = {
		}, z0 = {
		}, Tn = {
		}, K0 = {
		}
	});
	var Ge, Y0, wn = ve(() => {
		"use strict";
		Ge = {
			TRANSFORM_MOVE: "TRANSFORM_MOVE",
			TRANSFORM_SCALE: "TRANSFORM_SCALE",
			TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
			TRANSFORM_SKEW: "TRANSFORM_SKEW",
			STYLE_OPACITY: "STYLE_OPACITY",
			STYLE_SIZE: "STYLE_SIZE",
			STYLE_FILTER: "STYLE_FILTER",
			STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
			STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
			STYLE_BORDER: "STYLE_BORDER",
			STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
			GENERAL_DISPLAY: "GENERAL_DISPLAY",
			STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
		}, Y0 = {
		}
	});
	var $0, xf = ve(() => {
		"use strict";
		$0 = {
		}
	});
	var Q0, Z0, J0, ex, tx, rx, nx, jo, Of = ve(() => {
		"use strict";
		wn();
		({
		} = Ge), jo = {
			[Q0]: !0,
			[Z0]: !0,
			[J0]: !0,
			[ex]: !0,
			[tx]: !0,
			[rx]: !0,
			[nx]: !0
		}
	});
	var Te = {};
	De(Te, {
		IX2_ACTION_LIST_PLAYBACK_CHANGED: () => bx,
		IX2_ANIMATION_FRAME_CHANGED: () => gx,
		IX2_CLEAR_REQUESTED: () => fx,
		IX2_ELEMENT_STATE_CHANGED: () => Ex,
		IX2_EVENT_LISTENER_ADDED: () => dx,
		IX2_EVENT_STATE_CHANGED: () => px,
		IX2_INSTANCE_ADDED: () => vx,
		IX2_INSTANCE_REMOVED: () => yx,
		IX2_INSTANCE_STARTED: () => mx,
		IX2_MEDIA_QUERIES_DEFINED: () => Ix,
		IX2_PARAMETER_CHANGED: () => hx,
		IX2_PLAYBACK_REQUESTED: () => cx,
		IX2_PREVIEW_REQUESTED: () => ux,
		IX2_RAW_DATA_IMPORTED: () => ix,
		IX2_SESSION_INITIALIZED: () => ox,
		IX2_SESSION_STARTED: () => ax,
		IX2_SESSION_STOPPED: () => sx,
		IX2_STOP_REQUESTED: () => lx,
		IX2_TEST_FRAME_RENDERED: () => Tx,
		IX2_VIEWPORT_WIDTH_CHANGED: () => _x
	});
	var ix, ox, ax, sx, ux, cx, lx, fx, dx, px, gx, hx, vx, mx, yx, Ex, bx, _x, Ix, Tx, Af = ve(() => {
		"use strict";
		ix = "IX2_RAW_DATA_IMPORTED", ox = "IX2_SESSION_INITIALIZED", ax = "IX2_SESSION_STARTED", sx = "IX2_SESSION_STOPPED", ux = "IX2_PREVIEW_REQUESTED", cx = "IX2_PLAYBACK_REQUESTED", lx = "IX2_STOP_REQUESTED", fx = "IX2_CLEAR_REQUESTED", dx = "IX2_EVENT_LISTENER_ADDED", px = "IX2_EVENT_STATE_CHANGED", gx = "IX2_ANIMATION_FRAME_CHANGED", hx = "IX2_PARAMETER_CHANGED", vx = "IX2_INSTANCE_ADDED", mx = "IX2_INSTANCE_STARTED", yx = "IX2_INSTANCE_REMOVED", Ex = "IX2_ELEMENT_STATE_CHANGED", bx = "IX2_ACTION_LIST_PLAYBACK_CHANGED", _x = "IX2_VIEWPORT_WIDTH_CHANGED", Ix = "IX2_MEDIA_QUERIES_DEFINED", Tx = "IX2_TEST_FRAME_RENDERED"
	});
	var Ce = {};
	De(Ce, {
		CHILDREN: () => gO,
		COLON_DELIMITER: () => dO,
		COLOR: () => aO,
		COMMA_DELIMITER: () => fO,
		CONFIG_UNIT: () => Mx,
		CONFIG_VALUE: () => Nx,
		CONFIG_X_UNIT: () => Px,
		CONFIG_X_VALUE: () => Cx,
		CONFIG_Y_UNIT: () => qx,
		CONFIG_Y_VALUE: () => Rx,
		CONFIG_Z_UNIT: () => Fx,
		CONFIG_Z_VALUE: () => Lx,
		DISPLAY: () => sO,
		FILTER: () => Jx,
		FLEX: () => uO,
		FONT_VARIATION_SETTINGS: () => eO,
		HEIGHT: () => rO,
		HTML_ELEMENT: () => EO,
		IMMEDIATE_CHILDREN: () => hO,
		IX2_ID_DELIMITER: () => wx,
		OPACITY: () => Zx,
		PARENT: () => mO,
		PLAIN_OBJECT: () => bO,
		PRESERVE_3D: () => yO,
		RENDER_GENERAL: () => TO,
		RENDER_PLUGIN: () => xO,
		RENDER_STYLE: () => wO,
		RENDER_TRANSFORM: () => IO,
		ROTATE_X: () => jx,
		ROTATE_Y: () => zx,
		ROTATE_Z: () => Kx,
		SCALE_3D: () => Xx,
		SCALE_X: () => Bx,
		SCALE_Y: () => Hx,
		SCALE_Z: () => Wx,
		SIBLINGS: () => vO,
		SKEW: () => Yx,
		SKEW_X: () => $x,
		SKEW_Y: () => Qx,
		TRANSFORM: () => Dx,
		TRANSLATE_3D: () => kx,
		TRANSLATE_X: () => Gx,
		TRANSLATE_Y: () => Vx,
		TRANSLATE_Z: () => Ux,
		WF_PAGE: () => xx,
		WIDTH: () => tO,
		WILL_CHANGE: () => cO,
		W_MOD_IX: () => Ax,
		W_MOD_JS: () => Ox
	});
	var wx, xx, Ox, Ax, Sx, Cx, Rx, Lx, Nx, Px, qx, Fx, Mx, Dx, Gx, Vx, Ux, kx, Bx, Hx, Wx, Xx, jx, zx, Kx, Yx, $x, Qx, Zx, Jx, eO, tO, rO, nO, iO, oO, aO, sO, uO, cO, lO, fO, dO, pO, gO, hO, vO, mO, yO, EO, bO, _O, IO, TO, wO, xO, Sf = ve(() => {
		"use strict";
		wx = "|", xx = "data-wf-page", Ox = "w-mod-js", Ax = "w-mod-ix", Sx = ".w-dyn-item", Cx = "xValue", Rx = "yValue", Lx = "zValue", Nx = "value", Px = "xUnit", qx = "yUnit", Fx = "zUnit", Mx = "unit", Dx = "transform", Gx = "translateX", Vx = "translateY", Ux = "translateZ", kx = "translate3d", Bx = "scaleX", Hx = "scaleY", Wx = "scaleZ", Xx = "scale3d", jx = "rotateX", zx = "rotateY", Kx = "rotateZ", Yx = "skew", $x = "skewX", Qx = "skewY", Zx = "opacity", Jx = "filter", eO = "font-variation-settings", tO = "width", rO = "height", nO = "backgroundColor", iO = "background", oO = "borderColor", aO = "color", sO = "display", uO = "flex", cO = "willChange", lO = "AUTO", fO = ",", dO = ":", pO = "|", gO = "CHILDREN", hO = "IMMEDIATE_CHILDREN", vO = "SIBLINGS", mO = "PARENT", yO = "preserve-3d", EO = "HTML_ELEMENT", bO = "PLAIN_OBJECT", _O = "ABSTRACT_NODE", IO = "RENDER_TRANSFORM", TO = "RENDER_GENERAL", wO = "RENDER_STYLE", xO = "RENDER_PLUGIN"
	});
	var Cf = {};
	De(Cf, {
		ActionAppliesTo: () => Y0,
		ActionTypeConsts: () => Ge,
		EventAppliesTo: () => Wo,
		EventBasedOn: () => at,
		EventContinuousMouseAxes: () => j0,
		EventLimitAffectedElements: () => z0,
		EventTypeConsts: () => Ze,
		IX2EngineActionTypes: () => Te,
		IX2EngineConstants: () => Ce,
		InteractionTypeConsts: () => $0,
		QuickEffectDirectionConsts: () => K0,
		QuickEffectIds: () => Tn,
		ReducedMotionTypes: () => jo
	});
	var Ve = ve(() => {
		"use strict";
		Xo();
		wn();
		xf();
		Of();
		Af();
		Sf();
		wn();
		Xo()
	});
	var OO, Rf, Lf = ve(() => {
		"use strict";
		Ve();
		({
			IX2_RAW_DATA_IMPORTED: OO
		} = Te), Rf = (e = Object.freeze({}), t) => {
			switch (t.type) {
				case OO:
					return t.payload.ixData || Object.freeze({});
				default:
					return e
			}
		}
	});
	var jt = c(Ee => {
		"use strict";
		Object.defineProperty(Ee, "__esModule", {
			value: !0
		});
		var AO = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
			return typeof e
		} : function(e) {
			return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		};
		Ee.clone = On;
		Ee.addLast = qf;
		Ee.addFirst = Ff;
		Ee.removeLast = Mf;
		Ee.removeFirst = Df;
		Ee.insert = Gf;
		Ee.removeAt = Vf;
		Ee.replaceAt = Uf;
		Ee.getIn = An;
		Ee.set = Sn;
		Ee.setIn = Cn;
		Ee.update = Bf;
		Ee.updateIn = Hf;
		Ee.merge = Wf;
		Ee.mergeDeep = Xf;
		Ee.mergeIn = jf;
		Ee.omit = zf;
		Ee.addDefaults = Kf;
		var Nf = "INVALID_ARGS";

		function Pf(e) {
			throw new Error(e)
		}

		function zo(e) {
			var t = Object.keys(e);
			return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
		}
		var SO = {}.hasOwnProperty;

		function On(e) {
			if (Array.isArray(e)) return e.slice();
			for (var t = zo(e), r = {}, n = 0; n < t.length; n++) {
				var i = t[n];
				r[i] = e[i]
			}
			return r
		}

		function Ue(e, t, r) {
			var n = r;
			n == null && Pf(Nf);
			for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s];
			for (var u = 0; u < a.length; u++) {
				var l = a[u];
				if (l != null) {
					var v = zo(l);
					if (v.length)
						for (var d = 0; d <= v.length; d++) {
							var g = v[d];
							if (!(e && n[g] !== void 0)) {
								var p = l[g];
								t && xn(n[g]) && xn(p) && (p = Ue(e, t, n[g], p)), !(p === void 0 || p === n[g]) && (i || (i = !0, n = On(n)), n[g] = p)
							}
						}
				}
			}
			return n
		}

		function xn(e) {
			var t = typeof e > "u" ? "undefined" : AO(e);
			return e != null && (t === "object" || t === "function")
		}

		function qf(e, t) {
			return Array.isArray(t) ? e.concat(t) : e.concat([t])
		}

		function Ff(e, t) {
			return Array.isArray(t) ? t.concat(e) : [t].concat(e)
		}

		function Mf(e) {
			return e.length ? e.slice(0, e.length - 1) : e
		}

		function Df(e) {
			return e.length ? e.slice(1) : e
		}

		function Gf(e, t, r) {
			return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
		}

		function Vf(e, t) {
			return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
		}

		function Uf(e, t, r) {
			if (e[t] === r) return e;
			for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
			return i[t] = r, i
		}

		function An(e, t) {
			if (!Array.isArray(t) && Pf(Nf), e != null) {
				for (var r = e, n = 0; n < t.length; n++) {
					var i = t[n];
					if (r = r?.[i], r === void 0) return r
				}
				return r
			}
		}

		function Sn(e, t, r) {
			var n = typeof t == "number" ? [] : {},
				i = e ?? n;
			if (i[t] === r) return i;
			var o = On(i);
			return o[t] = r, o
		}

		function kf(e, t, r, n) {
			var i = void 0,
				o = t[n];
			if (n === t.length - 1) i = r;
			else {
				var a = xn(e) && xn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
				i = kf(a, t, r, n + 1)
			}
			return Sn(e, o, i)
		}

		function Cn(e, t, r) {
			return t.length ? kf(e, t, r, 0) : r
		}

		function Bf(e, t, r) {
			var n = e?.[t],
				i = r(n);
			return Sn(e, t, i)
		}

		function Hf(e, t, r) {
			var n = An(e, t),
				i = r(n);
			return Cn(e, t, i)
		}

		function Wf(e, t, r, n, i, o) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
			return s.length ? Ue.call.apply(Ue, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Ue(!1, !1, e, t, r, n, i, o)
		}

		function Xf(e, t, r, n, i, o) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
			return s.length ? Ue.call.apply(Ue, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Ue(!1, !0, e, t, r, n, i, o)
		}

		function jf(e, t, r, n, i, o, a) {
			var s = An(e, t);
			s == null && (s = {});
			for (var u = void 0, l = arguments.length, v = Array(l > 7 ? l - 7 : 0), d = 7; d < l; d++) v[d - 7] = arguments[d];
			return v.length ? u = Ue.call.apply(Ue, [null, !1, !1, s, r, n, i, o, a].concat(v)) : u = Ue(!1, !1, s, r, n, i, o, a), Cn(e, t, u)
		}

		function zf(e, t) {
			for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
				if (SO.call(e, r[i])) {
					n = !0;
					break
				} if (!n) return e;
			for (var o = {}, a = zo(e), s = 0; s < a.length; s++) {
				var u = a[s];
				r.indexOf(u) >= 0 || (o[u] = e[u])
			}
			return o
		}

		function Kf(e, t, r, n, i, o) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
			return s.length ? Ue.call.apply(Ue, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Ue(!0, !1, e, t, r, n, i, o)
		}
		var CO = {
			clone: On,
			addLast: qf,
			addFirst: Ff,
			removeLast: Mf,
			removeFirst: Df,
			insert: Gf,
			removeAt: Vf,
			replaceAt: Uf,
			getIn: An,
			set: Sn,
			setIn: Cn,
			update: Bf,
			updateIn: Hf,
			merge: Wf,
			mergeDeep: Xf,
			mergeIn: jf,
			omit: zf,
			addDefaults: Kf
		};
		Ee.default = CO
	});
	var $f, RO, LO, NO, PO, qO, Yf, Qf, Zf = ve(() => {
		"use strict";
		Ve();
		$f = le(jt()), {
			IX2_PREVIEW_REQUESTED: RO,
			IX2_PLAYBACK_REQUESTED: LO,
			IX2_STOP_REQUESTED: NO,
			IX2_CLEAR_REQUESTED: PO
		} = Te, qO = {
			preview: {},
			playback: {},
			stop: {},
			clear: {}
		}, Yf = Object.create(null, {
			[RO]: {
				value: "preview"
			},
			[LO]: {
				value: "playback"
			},
			[NO]: {
				value: "stop"
			},
			[PO]: {
				value: "clear"
			}
		}), Qf = (e = qO, t) => {
			if (t.type in Yf) {
				let r = [Yf[t.type]];
				return (0, $f.setIn)(e, [r], {
					...t.payload
				})
			}
			return e
		}
	});
	var Ne, FO, MO, DO, GO, VO, UO, kO, BO, HO, WO, Jf, XO, ed, td = ve(() => {
		"use strict";
		Ve();
		Ne = le(jt()), {
			IX2_SESSION_INITIALIZED: FO,
			IX2_SESSION_STARTED: MO,
			IX2_TEST_FRAME_RENDERED: DO,
			IX2_SESSION_STOPPED: GO,
			IX2_EVENT_LISTENER_ADDED: VO,
			IX2_EVENT_STATE_CHANGED: UO,
			IX2_ANIMATION_FRAME_CHANGED: kO,
			IX2_ACTION_LIST_PLAYBACK_CHANGED: BO,
			IX2_VIEWPORT_WIDTH_CHANGED: HO,
			IX2_MEDIA_QUERIES_DEFINED: WO
		} = Te, Jf = {
			active: !1,
			tick: 0,
			eventListeners: [],
			eventState: {},
			playbackState: {},
			viewportWidth: 0,
			mediaQueryKey: null,
			hasBoundaryNodes: !1,
			hasDefinedMediaQueries: !1,
			reducedMotion: !1
		}, XO = 20, ed = (e = Jf, t) => {
			switch (t.type) {
				case FO: {
					let {
						hasBoundaryNodes: r,
						reducedMotion: n
					} = t.payload;
					return (0, Ne.merge)(e, {
						hasBoundaryNodes: r,
						reducedMotion: n
					})
				}
				case MO:
					return (0, Ne.set)(e, "active", !0);
				case DO: {
					let {
						payload: {
							step: r = XO
						}
					} = t;
					return (0, Ne.set)(e, "tick", e.tick + r)
				}
				case GO:
					return Jf;
				case kO: {
					let {
						payload: {
							now: r
						}
					} = t;
					return (0, Ne.set)(e, "tick", r)
				}
				case VO: {
					let r = (0, Ne.addLast)(e.eventListeners, t.payload);
					return (0, Ne.set)(e, "eventListeners", r)
				}
				case UO: {
					let {
						stateKey: r,
						newState: n
					} = t.payload;
					return (0, Ne.setIn)(e, ["eventState", r], n)
				}
				case BO: {
					let {
						actionListId: r,
						isPlaying: n
					} = t.payload;
					return (0, Ne.setIn)(e, ["playbackState", r], n)
				}
				case HO: {
					let {
						width: r,
						mediaQueries: n
					} = t.payload, i = n.length, o = null;
					for (let a = 0; a < i; a++) {
						let {
							key: s,
							min: u,
							max: l
						} = n[a];
						if (r >= u && r <= l) {
							o = s;
							break
						}
					}
					return (0, Ne.merge)(e, {
						viewportWidth: r,
						mediaQueryKey: o
					})
				}
				case WO:
					return (0, Ne.set)(e, "hasDefinedMediaQueries", !0);
				default:
					return e
			}
		}
	});
	var nd = c((iH, rd) => {
		function jO() {
			this.__data__ = [], this.size = 0
		}
		rd.exports = jO
	});
	var Rn = c((oH, id) => {
		function zO(e, t) {
			return e === t || e !== e && t !== t
		}
		id.exports = zO
	});
	var Sr = c((aH, od) => {
		var KO = Rn();

		function YO(e, t) {
			for (var r = e.length; r--;)
				if (KO(e[r][0], t)) return r;
			return -1
		}
		od.exports = YO
	});
	var sd = c((sH, ad) => {
		var $O = Sr(),
			QO = Array.prototype,
			ZO = QO.splice;

		function JO(e) {
			var t = this.__data__,
				r = $O(t, e);
			if (r < 0) return !1;
			var n = t.length - 1;
			return r == n ? t.pop() : ZO.call(t, r, 1), --this.size, !0
		}
		ad.exports = JO
	});
	var cd = c((uH, ud) => {
		var eA = Sr();

		function tA(e) {
			var t = this.__data__,
				r = eA(t, e);
			return r < 0 ? void 0 : t[r][1]
		}
		ud.exports = tA
	});
	var fd = c((cH, ld) => {
		var rA = Sr();

		function nA(e) {
			return rA(this.__data__, e) > -1
		}
		ld.exports = nA
	});
	var pd = c((lH, dd) => {
		var iA = Sr();

		function oA(e, t) {
			var r = this.__data__,
				n = iA(r, e);
			return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
		}
		dd.exports = oA
	});
	var Cr = c((fH, gd) => {
		var aA = nd(),
			sA = sd(),
			uA = cd(),
			cA = fd(),
			lA = pd();

		function zt(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		zt.prototype.clear = aA;
		zt.prototype.delete = sA;
		zt.prototype.get = uA;
		zt.prototype.has = cA;
		zt.prototype.set = lA;
		gd.exports = zt
	});
	var vd = c((dH, hd) => {
		var fA = Cr();

		function dA() {
			this.__data__ = new fA, this.size = 0
		}
		hd.exports = dA
	});
	var yd = c((pH, md) => {
		function pA(e) {
			var t = this.__data__,
				r = t.delete(e);
			return this.size = t.size, r
		}
		md.exports = pA
	});
	var bd = c((gH, Ed) => {
		function gA(e) {
			return this.__data__.get(e)
		}
		Ed.exports = gA
	});
	var Id = c((hH, _d) => {
		function hA(e) {
			return this.__data__.has(e)
		}
		_d.exports = hA
	});
	var st = c((vH, Td) => {
		function vA(e) {
			var t = typeof e;
			return e != null && (t == "object" || t == "function")
		}
		Td.exports = vA
	});
	var Ko = c((mH, wd) => {
		var mA = _t(),
			yA = st(),
			EA = "[object AsyncFunction]",
			bA = "[object Function]",
			_A = "[object GeneratorFunction]",
			IA = "[object Proxy]";

		function TA(e) {
			if (!yA(e)) return !1;
			var t = mA(e);
			return t == bA || t == _A || t == EA || t == IA
		}
		wd.exports = TA
	});
	var Od = c((yH, xd) => {
		var wA = Qe(),
			xA = wA["__core-js_shared__"];
		xd.exports = xA
	});
	var Cd = c((EH, Sd) => {
		var Yo = Od(),
			Ad = function() {
				var e = /[^.]+$/.exec(Yo && Yo.keys && Yo.keys.IE_PROTO || "");
				return e ? "Symbol(src)_1." + e : ""
			}();

		function OA(e) {
			return !!Ad && Ad in e
		}
		Sd.exports = OA
	});
	var $o = c((bH, Rd) => {
		var AA = Function.prototype,
			SA = AA.toString;

		function CA(e) {
			if (e != null) {
				try {
					return SA.call(e)
				} catch {}
				try {
					return e + ""
				} catch {}
			}
			return ""
		}
		Rd.exports = CA
	});
	var Nd = c((_H, Ld) => {
		var RA = Ko(),
			LA = Cd(),
			NA = st(),
			PA = $o(),
			qA = /[\\^$.*+?()[\]{}|]/g,
			FA = /^\[object .+?Constructor\]$/,
			MA = Function.prototype,
			DA = Object.prototype,
			GA = MA.toString,
			VA = DA.hasOwnProperty,
			UA = RegExp("^" + GA.call(VA).replace(qA, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

		function kA(e) {
			if (!NA(e) || LA(e)) return !1;
			var t = RA(e) ? UA : FA;
			return t.test(PA(e))
		}
		Ld.exports = kA
	});
	var qd = c((IH, Pd) => {
		function BA(e, t) {
			return e?.[t]
		}
		Pd.exports = BA
	});
	var It = c((TH, Fd) => {
		var HA = Nd(),
			WA = qd();

		function XA(e, t) {
			var r = WA(e, t);
			return HA(r) ? r : void 0
		}
		Fd.exports = XA
	});
	var Ln = c((wH, Md) => {
		var jA = It(),
			zA = Qe(),
			KA = jA(zA, "Map");
		Md.exports = KA
	});
	var Rr = c((xH, Dd) => {
		var YA = It(),
			$A = YA(Object, "create");
		Dd.exports = $A
	});
	var Ud = c((OH, Vd) => {
		var Gd = Rr();

		function QA() {
			this.__data__ = Gd ? Gd(null) : {}, this.size = 0
		}
		Vd.exports = QA
	});
	var Bd = c((AH, kd) => {
		function ZA(e) {
			var t = this.has(e) && delete this.__data__[e];
			return this.size -= t ? 1 : 0, t
		}
		kd.exports = ZA
	});
	var Wd = c((SH, Hd) => {
		var JA = Rr(),
			eS = "__lodash_hash_undefined__",
			tS = Object.prototype,
			rS = tS.hasOwnProperty;

		function nS(e) {
			var t = this.__data__;
			if (JA) {
				var r = t[e];
				return r === eS ? void 0 : r
			}
			return rS.call(t, e) ? t[e] : void 0
		}
		Hd.exports = nS
	});
	var jd = c((CH, Xd) => {
		var iS = Rr(),
			oS = Object.prototype,
			aS = oS.hasOwnProperty;

		function sS(e) {
			var t = this.__data__;
			return iS ? t[e] !== void 0 : aS.call(t, e)
		}
		Xd.exports = sS
	});
	var Kd = c((RH, zd) => {
		var uS = Rr(),
			cS = "__lodash_hash_undefined__";

		function lS(e, t) {
			var r = this.__data__;
			return this.size += this.has(e) ? 0 : 1, r[e] = uS && t === void 0 ? cS : t, this
		}
		zd.exports = lS
	});
	var $d = c((LH, Yd) => {
		var fS = Ud(),
			dS = Bd(),
			pS = Wd(),
			gS = jd(),
			hS = Kd();

		function Kt(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		Kt.prototype.clear = fS;
		Kt.prototype.delete = dS;
		Kt.prototype.get = pS;
		Kt.prototype.has = gS;
		Kt.prototype.set = hS;
		Yd.exports = Kt
	});
	var Jd = c((NH, Zd) => {
		var Qd = $d(),
			vS = Cr(),
			mS = Ln();

		function yS() {
			this.size = 0, this.__data__ = {
				hash: new Qd,
				map: new(mS || vS),
				string: new Qd
			}
		}
		Zd.exports = yS
	});
	var tp = c((PH, ep) => {
		function ES(e) {
			var t = typeof e;
			return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
		}
		ep.exports = ES
	});
	var Lr = c((qH, rp) => {
		var bS = tp();

		function _S(e, t) {
			var r = e.__data__;
			return bS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
		}
		rp.exports = _S
	});
	var ip = c((FH, np) => {
		var IS = Lr();

		function TS(e) {
			var t = IS(this, e).delete(e);
			return this.size -= t ? 1 : 0, t
		}
		np.exports = TS
	});
	var ap = c((MH, op) => {
		var wS = Lr();

		function xS(e) {
			return wS(this, e).get(e)
		}
		op.exports = xS
	});
	var up = c((DH, sp) => {
		var OS = Lr();

		function AS(e) {
			return OS(this, e).has(e)
		}
		sp.exports = AS
	});
	var lp = c((GH, cp) => {
		var SS = Lr();

		function CS(e, t) {
			var r = SS(this, e),
				n = r.size;
			return r.set(e, t), this.size += r.size == n ? 0 : 1, this
		}
		cp.exports = CS
	});
	var Nn = c((VH, fp) => {
		var RS = Jd(),
			LS = ip(),
			NS = ap(),
			PS = up(),
			qS = lp();

		function Yt(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		Yt.prototype.clear = RS;
		Yt.prototype.delete = LS;
		Yt.prototype.get = NS;
		Yt.prototype.has = PS;
		Yt.prototype.set = qS;
		fp.exports = Yt
	});
	var pp = c((UH, dp) => {
		var FS = Cr(),
			MS = Ln(),
			DS = Nn(),
			GS = 200;

		function VS(e, t) {
			var r = this.__data__;
			if (r instanceof FS) {
				var n = r.__data__;
				if (!MS || n.length < GS - 1) return n.push([e, t]), this.size = ++r.size, this;
				r = this.__data__ = new DS(n)
			}
			return r.set(e, t), this.size = r.size, this
		}
		dp.exports = VS
	});
	var Qo = c((kH, gp) => {
		var US = Cr(),
			kS = vd(),
			BS = yd(),
			HS = bd(),
			WS = Id(),
			XS = pp();

		function $t(e) {
			var t = this.__data__ = new US(e);
			this.size = t.size
		}
		$t.prototype.clear = kS;
		$t.prototype.delete = BS;
		$t.prototype.get = HS;
		$t.prototype.has = WS;
		$t.prototype.set = XS;
		gp.exports = $t
	});
	var vp = c((BH, hp) => {
		var jS = "__lodash_hash_undefined__";

		function zS(e) {
			return this.__data__.set(e, jS), this
		}
		hp.exports = zS
	});
	var yp = c((HH, mp) => {
		function KS(e) {
			return this.__data__.has(e)
		}
		mp.exports = KS
	});
	var bp = c((WH, Ep) => {
		var YS = Nn(),
			$S = vp(),
			QS = yp();

		function Pn(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.__data__ = new YS; ++t < r;) this.add(e[t])
		}
		Pn.prototype.add = Pn.prototype.push = $S;
		Pn.prototype.has = QS;
		Ep.exports = Pn
	});
	var Ip = c((XH, _p) => {
		function ZS(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
				if (t(e[r], r, e)) return !0;
			return !1
		}
		_p.exports = ZS
	});
	var wp = c((jH, Tp) => {
		function JS(e, t) {
			return e.has(t)
		}
		Tp.exports = JS
	});
	var Zo = c((zH, xp) => {
		var eC = bp(),
			tC = Ip(),
			rC = wp(),
			nC = 1,
			iC = 2;

		function oC(e, t, r, n, i, o) {
			var a = r & nC,
				s = e.length,
				u = t.length;
			if (s != u && !(a && u > s)) return !1;
			var l = o.get(e),
				v = o.get(t);
			if (l && v) return l == t && v == e;
			var d = -1,
				g = !0,
				p = r & iC ? new eC : void 0;
			for (o.set(e, t), o.set(t, e); ++d < s;) {
				var h = e[d],
					b = t[d];
				if (n) var T = a ? n(b, h, d, t, e, o) : n(h, b, d, e, t, o);
				if (T !== void 0) {
					if (T) continue;
					g = !1;
					break
				}
				if (p) {
					if (!tC(t, function(_, R) {
							if (!rC(p, R) && (h === _ || i(h, _, r, n, o))) return p.push(R)
						})) {
						g = !1;
						break
					}
				} else if (!(h === b || i(h, b, r, n, o))) {
					g = !1;
					break
				}
			}
			return o.delete(e), o.delete(t), g
		}
		xp.exports = oC
	});
	var Ap = c((KH, Op) => {
		var aC = Qe(),
			sC = aC.Uint8Array;
		Op.exports = sC
	});
	var Cp = c((YH, Sp) => {
		function uC(e) {
			var t = -1,
				r = Array(e.size);
			return e.forEach(function(n, i) {
				r[++t] = [i, n]
			}), r
		}
		Sp.exports = uC
	});
	var Lp = c(($H, Rp) => {
		function cC(e) {
			var t = -1,
				r = Array(e.size);
			return e.forEach(function(n) {
				r[++t] = n
			}), r
		}
		Rp.exports = cC
	});
	var Mp = c((QH, Fp) => {
		var Np = Ht(),
			Pp = Ap(),
			lC = Rn(),
			fC = Zo(),
			dC = Cp(),
			pC = Lp(),
			gC = 1,
			hC = 2,
			vC = "[object Boolean]",
			mC = "[object Date]",
			yC = "[object Error]",
			EC = "[object Map]",
			bC = "[object Number]",
			_C = "[object RegExp]",
			IC = "[object Set]",
			TC = "[object String]",
			wC = "[object Symbol]",
			xC = "[object ArrayBuffer]",
			OC = "[object DataView]",
			qp = Np ? Np.prototype : void 0,
			Jo = qp ? qp.valueOf : void 0;

		function AC(e, t, r, n, i, o, a) {
			switch (r) {
				case OC:
					if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
					e = e.buffer, t = t.buffer;
				case xC:
					return !(e.byteLength != t.byteLength || !o(new Pp(e), new Pp(t)));
				case vC:
				case mC:
				case bC:
					return lC(+e, +t);
				case yC:
					return e.name == t.name && e.message == t.message;
				case _C:
				case TC:
					return e == t + "";
				case EC:
					var s = dC;
				case IC:
					var u = n & gC;
					if (s || (s = pC), e.size != t.size && !u) return !1;
					var l = a.get(e);
					if (l) return l == t;
					n |= hC, a.set(e, t);
					var v = fC(s(e), s(t), n, i, o, a);
					return a.delete(e), v;
				case wC:
					if (Jo) return Jo.call(e) == Jo.call(t)
			}
			return !1
		}
		Fp.exports = AC
	});
	var qn = c((ZH, Dp) => {
		function SC(e, t) {
			for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
			return e
		}
		Dp.exports = SC
	});
	var we = c((JH, Gp) => {
		var CC = Array.isArray;
		Gp.exports = CC
	});
	var ea = c((eW, Vp) => {
		var RC = qn(),
			LC = we();

		function NC(e, t, r) {
			var n = t(e);
			return LC(e) ? n : RC(n, r(e))
		}
		Vp.exports = NC
	});
	var kp = c((tW, Up) => {
		function PC(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
				var a = e[r];
				t(a, r, e) && (o[i++] = a)
			}
			return o
		}
		Up.exports = PC
	});
	var ta = c((rW, Bp) => {
		function qC() {
			return []
		}
		Bp.exports = qC
	});
	var ra = c((nW, Wp) => {
		var FC = kp(),
			MC = ta(),
			DC = Object.prototype,
			GC = DC.propertyIsEnumerable,
			Hp = Object.getOwnPropertySymbols,
			VC = Hp ? function(e) {
				return e == null ? [] : (e = Object(e), FC(Hp(e), function(t) {
					return GC.call(e, t)
				}))
			} : MC;
		Wp.exports = VC
	});
	var jp = c((iW, Xp) => {
		function UC(e, t) {
			for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
			return n
		}
		Xp.exports = UC
	});
	var Kp = c((oW, zp) => {
		var kC = _t(),
			BC = dt(),
			HC = "[object Arguments]";

		function WC(e) {
			return BC(e) && kC(e) == HC
		}
		zp.exports = WC
	});
	var Nr = c((aW, Qp) => {
		var Yp = Kp(),
			XC = dt(),
			$p = Object.prototype,
			jC = $p.hasOwnProperty,
			zC = $p.propertyIsEnumerable,
			KC = Yp(function() {
				return arguments
			}()) ? Yp : function(e) {
				return XC(e) && jC.call(e, "callee") && !zC.call(e, "callee")
			};
		Qp.exports = KC
	});
	var Jp = c((sW, Zp) => {
		function YC() {
			return !1
		}
		Zp.exports = YC
	});
	var Fn = c((Pr, Qt) => {
		var $C = Qe(),
			QC = Jp(),
			rg = typeof Pr == "object" && Pr && !Pr.nodeType && Pr,
			eg = rg && typeof Qt == "object" && Qt && !Qt.nodeType && Qt,
			ZC = eg && eg.exports === rg,
			tg = ZC ? $C.Buffer : void 0,
			JC = tg ? tg.isBuffer : void 0,
			eR = JC || QC;
		Qt.exports = eR
	});
	var Mn = c((uW, ng) => {
		var tR = 9007199254740991,
			rR = /^(?:0|[1-9]\d*)$/;

		function nR(e, t) {
			var r = typeof e;
			return t = t ?? tR, !!t && (r == "number" || r != "symbol" && rR.test(e)) && e > -1 && e % 1 == 0 && e < t
		}
		ng.exports = nR
	});
	var Dn = c((cW, ig) => {
		var iR = 9007199254740991;

		function oR(e) {
			return typeof e == "number" && e > -1 && e % 1 == 0 && e <= iR
		}
		ig.exports = oR
	});
	var ag = c((lW, og) => {
		var aR = _t(),
			sR = Dn(),
			uR = dt(),
			cR = "[object Arguments]",
			lR = "[object Array]",
			fR = "[object Boolean]",
			dR = "[object Date]",
			pR = "[object Error]",
			gR = "[object Function]",
			hR = "[object Map]",
			vR = "[object Number]",
			mR = "[object Object]",
			yR = "[object RegExp]",
			ER = "[object Set]",
			bR = "[object String]",
			_R = "[object WeakMap]",
			IR = "[object ArrayBuffer]",
			TR = "[object DataView]",
			wR = "[object Float32Array]",
			xR = "[object Float64Array]",
			OR = "[object Int8Array]",
			AR = "[object Int16Array]",
			SR = "[object Int32Array]",
			CR = "[object Uint8Array]",
			RR = "[object Uint8ClampedArray]",
			LR = "[object Uint16Array]",
			NR = "[object Uint32Array]",
			he = {};
		he[wR] = he[xR] = he[OR] = he[AR] = he[SR] = he[CR] = he[RR] = he[LR] = he[NR] = !0;
		he[cR] = he[lR] = he[IR] = he[fR] = he[TR] = he[dR] = he[pR] = he[gR] = he[hR] = he[vR] = he[mR] = he[yR] = he[ER] = he[bR] = he[_R] = !1;

		function PR(e) {
			return uR(e) && sR(e.length) && !!he[aR(e)]
		}
		og.exports = PR
	});
	var ug = c((fW, sg) => {
		function qR(e) {
			return function(t) {
				return e(t)
			}
		}
		sg.exports = qR
	});
	var lg = c((qr, Zt) => {
		var FR = So(),
			cg = typeof qr == "object" && qr && !qr.nodeType && qr,
			Fr = cg && typeof Zt == "object" && Zt && !Zt.nodeType && Zt,
			MR = Fr && Fr.exports === cg,
			na = MR && FR.process,
			DR = function() {
				try {
					var e = Fr && Fr.require && Fr.require("util").types;
					return e || na && na.binding && na.binding("util")
				} catch {}
			}();
		Zt.exports = DR
	});
	var Gn = c((dW, pg) => {
		var GR = ag(),
			VR = ug(),
			fg = lg(),
			dg = fg && fg.isTypedArray,
			UR = dg ? VR(dg) : GR;
		pg.exports = UR
	});
	var ia = c((pW, gg) => {
		var kR = jp(),
			BR = Nr(),
			HR = we(),
			WR = Fn(),
			XR = Mn(),
			jR = Gn(),
			zR = Object.prototype,
			KR = zR.hasOwnProperty;

		function YR(e, t) {
			var r = HR(e),
				n = !r && BR(e),
				i = !r && !n && WR(e),
				o = !r && !n && !i && jR(e),
				a = r || n || i || o,
				s = a ? kR(e.length, String) : [],
				u = s.length;
			for (var l in e)(t || KR.call(e, l)) && !(a && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || XR(l, u))) && s.push(l);
			return s
		}
		gg.exports = YR
	});
	var Vn = c((gW, hg) => {
		var $R = Object.prototype;

		function QR(e) {
			var t = e && e.constructor,
				r = typeof t == "function" && t.prototype || $R;
			return e === r
		}
		hg.exports = QR
	});
	var mg = c((hW, vg) => {
		var ZR = Co(),
			JR = ZR(Object.keys, Object);
		vg.exports = JR
	});
	var Un = c((vW, yg) => {
		var eL = Vn(),
			tL = mg(),
			rL = Object.prototype,
			nL = rL.hasOwnProperty;

		function iL(e) {
			if (!eL(e)) return tL(e);
			var t = [];
			for (var r in Object(e)) nL.call(e, r) && r != "constructor" && t.push(r);
			return t
		}
		yg.exports = iL
	});
	var Lt = c((mW, Eg) => {
		var oL = Ko(),
			aL = Dn();

		function sL(e) {
			return e != null && aL(e.length) && !oL(e)
		}
		Eg.exports = sL
	});
	var Mr = c((yW, bg) => {
		var uL = ia(),
			cL = Un(),
			lL = Lt();

		function fL(e) {
			return lL(e) ? uL(e) : cL(e)
		}
		bg.exports = fL
	});
	var Ig = c((EW, _g) => {
		var dL = ea(),
			pL = ra(),
			gL = Mr();

		function hL(e) {
			return dL(e, gL, pL)
		}
		_g.exports = hL
	});
	var xg = c((bW, wg) => {
		var Tg = Ig(),
			vL = 1,
			mL = Object.prototype,
			yL = mL.hasOwnProperty;

		function EL(e, t, r, n, i, o) {
			var a = r & vL,
				s = Tg(e),
				u = s.length,
				l = Tg(t),
				v = l.length;
			if (u != v && !a) return !1;
			for (var d = u; d--;) {
				var g = s[d];
				if (!(a ? g in t : yL.call(t, g))) return !1
			}
			var p = o.get(e),
				h = o.get(t);
			if (p && h) return p == t && h == e;
			var b = !0;
			o.set(e, t), o.set(t, e);
			for (var T = a; ++d < u;) {
				g = s[d];
				var _ = e[g],
					R = t[g];
				if (n) var A = a ? n(R, _, g, t, e, o) : n(_, R, g, e, t, o);
				if (!(A === void 0 ? _ === R || i(_, R, r, n, o) : A)) {
					b = !1;
					break
				}
				T || (T = g == "constructor")
			}
			if (b && !T) {
				var N = e.constructor,
					P = t.constructor;
				N != P && "constructor" in e && "constructor" in t && !(typeof N == "function" && N instanceof N && typeof P == "function" && P instanceof P) && (b = !1)
			}
			return o.delete(e), o.delete(t), b
		}
		wg.exports = EL
	});
	var Ag = c((_W, Og) => {
		var bL = It(),
			_L = Qe(),
			IL = bL(_L, "DataView");
		Og.exports = IL
	});
	var Cg = c((IW, Sg) => {
		var TL = It(),
			wL = Qe(),
			xL = TL(wL, "Promise");
		Sg.exports = xL
	});
	var Lg = c((TW, Rg) => {
		var OL = It(),
			AL = Qe(),
			SL = OL(AL, "Set");
		Rg.exports = SL
	});
	var oa = c((wW, Ng) => {
		var CL = It(),
			RL = Qe(),
			LL = CL(RL, "WeakMap");
		Ng.exports = LL
	});
	var kn = c((xW, Vg) => {
		var aa = Ag(),
			sa = Ln(),
			ua = Cg(),
			ca = Lg(),
			la = oa(),
			Gg = _t(),
			Jt = $o(),
			Pg = "[object Map]",
			NL = "[object Object]",
			qg = "[object Promise]",
			Fg = "[object Set]",
			Mg = "[object WeakMap]",
			Dg = "[object DataView]",
			PL = Jt(aa),
			qL = Jt(sa),
			FL = Jt(ua),
			ML = Jt(ca),
			DL = Jt(la),
			Nt = Gg;
		(aa && Nt(new aa(new ArrayBuffer(1))) != Dg || sa && Nt(new sa) != Pg || ua && Nt(ua.resolve()) != qg || ca && Nt(new ca) != Fg || la && Nt(new la) != Mg) && (Nt = function(e) {
			var t = Gg(e),
				r = t == NL ? e.constructor : void 0,
				n = r ? Jt(r) : "";
			if (n) switch (n) {
				case PL:
					return Dg;
				case qL:
					return Pg;
				case FL:
					return qg;
				case ML:
					return Fg;
				case DL:
					return Mg
			}
			return t
		});
		Vg.exports = Nt
	});
	var zg = c((OW, jg) => {
		var fa = Qo(),
			GL = Zo(),
			VL = Mp(),
			UL = xg(),
			Ug = kn(),
			kg = we(),
			Bg = Fn(),
			kL = Gn(),
			BL = 1,
			Hg = "[object Arguments]",
			Wg = "[object Array]",
			Bn = "[object Object]",
			HL = Object.prototype,
			Xg = HL.hasOwnProperty;

		function WL(e, t, r, n, i, o) {
			var a = kg(e),
				s = kg(t),
				u = a ? Wg : Ug(e),
				l = s ? Wg : Ug(t);
			u = u == Hg ? Bn : u, l = l == Hg ? Bn : l;
			var v = u == Bn,
				d = l == Bn,
				g = u == l;
			if (g && Bg(e)) {
				if (!Bg(t)) return !1;
				a = !0, v = !1
			}
			if (g && !v) return o || (o = new fa), a || kL(e) ? GL(e, t, r, n, i, o) : VL(e, t, u, r, n, i, o);
			if (!(r & BL)) {
				var p = v && Xg.call(e, "__wrapped__"),
					h = d && Xg.call(t, "__wrapped__");
				if (p || h) {
					var b = p ? e.value() : e,
						T = h ? t.value() : t;
					return o || (o = new fa), i(b, T, r, n, o)
				}
			}
			return g ? (o || (o = new fa), UL(e, t, r, n, i, o)) : !1
		}
		jg.exports = WL
	});
	var da = c((AW, $g) => {
		var XL = zg(),
			Kg = dt();

		function Yg(e, t, r, n, i) {
			return e === t ? !0 : e == null || t == null || !Kg(e) && !Kg(t) ? e !== e && t !== t : XL(e, t, r, n, Yg, i)
		}
		$g.exports = Yg
	});
	var Zg = c((SW, Qg) => {
		var jL = Qo(),
			zL = da(),
			KL = 1,
			YL = 2;

		function $L(e, t, r, n) {
			var i = r.length,
				o = i,
				a = !n;
			if (e == null) return !o;
			for (e = Object(e); i--;) {
				var s = r[i];
				if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
			}
			for (; ++i < o;) {
				s = r[i];
				var u = s[0],
					l = e[u],
					v = s[1];
				if (a && s[2]) {
					if (l === void 0 && !(u in e)) return !1
				} else {
					var d = new jL;
					if (n) var g = n(l, v, u, e, t, d);
					if (!(g === void 0 ? zL(v, l, KL | YL, n, d) : g)) return !1
				}
			}
			return !0
		}
		Qg.exports = $L
	});
	var pa = c((CW, Jg) => {
		var QL = st();

		function ZL(e) {
			return e === e && !QL(e)
		}
		Jg.exports = ZL
	});
	var th = c((RW, eh) => {
		var JL = pa(),
			eN = Mr();

		function tN(e) {
			for (var t = eN(e), r = t.length; r--;) {
				var n = t[r],
					i = e[n];
				t[r] = [n, i, JL(i)]
			}
			return t
		}
		eh.exports = tN
	});
	var ga = c((LW, rh) => {
		function rN(e, t) {
			return function(r) {
				return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
			}
		}
		rh.exports = rN
	});
	var ih = c((NW, nh) => {
		var nN = Zg(),
			iN = th(),
			oN = ga();

		function aN(e) {
			var t = iN(e);
			return t.length == 1 && t[0][2] ? oN(t[0][0], t[0][1]) : function(r) {
				return r === e || nN(r, e, t)
			}
		}
		nh.exports = aN
	});
	var Dr = c((PW, oh) => {
		var sN = _t(),
			uN = dt(),
			cN = "[object Symbol]";

		function lN(e) {
			return typeof e == "symbol" || uN(e) && sN(e) == cN
		}
		oh.exports = lN
	});
	var Hn = c((qW, ah) => {
		var fN = we(),
			dN = Dr(),
			pN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			gN = /^\w*$/;

		function hN(e, t) {
			if (fN(e)) return !1;
			var r = typeof e;
			return r == "number" || r == "symbol" || r == "boolean" || e == null || dN(e) ? !0 : gN.test(e) || !pN.test(e) || t != null && e in Object(t)
		}
		ah.exports = hN
	});
	var ch = c((FW, uh) => {
		var sh = Nn(),
			vN = "Expected a function";

		function ha(e, t) {
			if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(vN);
			var r = function() {
				var n = arguments,
					i = t ? t.apply(this, n) : n[0],
					o = r.cache;
				if (o.has(i)) return o.get(i);
				var a = e.apply(this, n);
				return r.cache = o.set(i, a) || o, a
			};
			return r.cache = new(ha.Cache || sh), r
		}
		ha.Cache = sh;
		uh.exports = ha
	});
	var fh = c((MW, lh) => {
		var mN = ch(),
			yN = 500;

		function EN(e) {
			var t = mN(e, function(n) {
					return r.size === yN && r.clear(), n
				}),
				r = t.cache;
			return t
		}
		lh.exports = EN
	});
	var ph = c((DW, dh) => {
		var bN = fh(),
			_N = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			IN = /\\(\\)?/g,
			TN = bN(function(e) {
				var t = [];
				return e.charCodeAt(0) === 46 && t.push(""), e.replace(_N, function(r, n, i, o) {
					t.push(i ? o.replace(IN, "$1") : n || r)
				}), t
			});
		dh.exports = TN
	});
	var va = c((GW, gh) => {
		function wN(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
			return i
		}
		gh.exports = wN
	});
	var bh = c((VW, Eh) => {
		var hh = Ht(),
			xN = va(),
			ON = we(),
			AN = Dr(),
			SN = 1 / 0,
			vh = hh ? hh.prototype : void 0,
			mh = vh ? vh.toString : void 0;

		function yh(e) {
			if (typeof e == "string") return e;
			if (ON(e)) return xN(e, yh) + "";
			if (AN(e)) return mh ? mh.call(e) : "";
			var t = e + "";
			return t == "0" && 1 / e == -SN ? "-0" : t
		}
		Eh.exports = yh
	});
	var Ih = c((UW, _h) => {
		var CN = bh();

		function RN(e) {
			return e == null ? "" : CN(e)
		}
		_h.exports = RN
	});
	var Gr = c((kW, Th) => {
		var LN = we(),
			NN = Hn(),
			PN = ph(),
			qN = Ih();

		function FN(e, t) {
			return LN(e) ? e : NN(e, t) ? [e] : PN(qN(e))
		}
		Th.exports = FN
	});
	var er = c((BW, wh) => {
		var MN = Dr(),
			DN = 1 / 0;

		function GN(e) {
			if (typeof e == "string" || MN(e)) return e;
			var t = e + "";
			return t == "0" && 1 / e == -DN ? "-0" : t
		}
		wh.exports = GN
	});
	var Wn = c((HW, xh) => {
		var VN = Gr(),
			UN = er();

		function kN(e, t) {
			t = VN(t, e);
			for (var r = 0, n = t.length; e != null && r < n;) e = e[UN(t[r++])];
			return r && r == n ? e : void 0
		}
		xh.exports = kN
	});
	var Xn = c((WW, Oh) => {
		var BN = Wn();

		function HN(e, t, r) {
			var n = e == null ? void 0 : BN(e, t);
			return n === void 0 ? r : n
		}
		Oh.exports = HN
	});
	var Sh = c((XW, Ah) => {
		function WN(e, t) {
			return e != null && t in Object(e)
		}
		Ah.exports = WN
	});
	var Rh = c((jW, Ch) => {
		var XN = Gr(),
			jN = Nr(),
			zN = we(),
			KN = Mn(),
			YN = Dn(),
			$N = er();

		function QN(e, t, r) {
			t = XN(t, e);
			for (var n = -1, i = t.length, o = !1; ++n < i;) {
				var a = $N(t[n]);
				if (!(o = e != null && r(e, a))) break;
				e = e[a]
			}
			return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && YN(i) && KN(a, i) && (zN(e) || jN(e)))
		}
		Ch.exports = QN
	});
	var Nh = c((zW, Lh) => {
		var ZN = Sh(),
			JN = Rh();

		function eP(e, t) {
			return e != null && JN(e, t, ZN)
		}
		Lh.exports = eP
	});
	var qh = c((KW, Ph) => {
		var tP = da(),
			rP = Xn(),
			nP = Nh(),
			iP = Hn(),
			oP = pa(),
			aP = ga(),
			sP = er(),
			uP = 1,
			cP = 2;

		function lP(e, t) {
			return iP(e) && oP(t) ? aP(sP(e), t) : function(r) {
				var n = rP(r, e);
				return n === void 0 && n === t ? nP(r, e) : tP(t, n, uP | cP)
			}
		}
		Ph.exports = lP
	});
	var jn = c((YW, Fh) => {
		function fP(e) {
			return e
		}
		Fh.exports = fP
	});
	var ma = c(($W, Mh) => {
		function dP(e) {
			return function(t) {
				return t?.[e]
			}
		}
		Mh.exports = dP
	});
	var Gh = c((QW, Dh) => {
		var pP = Wn();

		function gP(e) {
			return function(t) {
				return pP(t, e)
			}
		}
		Dh.exports = gP
	});
	var Uh = c((ZW, Vh) => {
		var hP = ma(),
			vP = Gh(),
			mP = Hn(),
			yP = er();

		function EP(e) {
			return mP(e) ? hP(yP(e)) : vP(e)
		}
		Vh.exports = EP
	});
	var Tt = c((JW, kh) => {
		var bP = ih(),
			_P = qh(),
			IP = jn(),
			TP = we(),
			wP = Uh();

		function xP(e) {
			return typeof e == "function" ? e : e == null ? IP : typeof e == "object" ? TP(e) ? _P(e[0], e[1]) : bP(e) : wP(e)
		}
		kh.exports = xP
	});
	var ya = c((eX, Bh) => {
		var OP = Tt(),
			AP = Lt(),
			SP = Mr();

		function CP(e) {
			return function(t, r, n) {
				var i = Object(t);
				if (!AP(t)) {
					var o = OP(r, 3);
					t = SP(t), r = function(s) {
						return o(i[s], s, i)
					}
				}
				var a = e(t, r, n);
				return a > -1 ? i[o ? t[a] : a] : void 0
			}
		}
		Bh.exports = CP
	});
	var Ea = c((tX, Hh) => {
		function RP(e, t, r, n) {
			for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
				if (t(e[o], o, e)) return o;
			return -1
		}
		Hh.exports = RP
	});
	var Xh = c((rX, Wh) => {
		var LP = /\s/;

		function NP(e) {
			for (var t = e.length; t-- && LP.test(e.charAt(t)););
			return t
		}
		Wh.exports = NP
	});
	var zh = c((nX, jh) => {
		var PP = Xh(),
			qP = /^\s+/;

		function FP(e) {
			return e && e.slice(0, PP(e) + 1).replace(qP, "")
		}
		jh.exports = FP
	});
	var zn = c((iX, $h) => {
		var MP = zh(),
			Kh = st(),
			DP = Dr(),
			Yh = 0 / 0,
			GP = /^[-+]0x[0-9a-f]+$/i,
			VP = /^0b[01]+$/i,
			UP = /^0o[0-7]+$/i,
			kP = parseInt;

		function BP(e) {
			if (typeof e == "number") return e;
			if (DP(e)) return Yh;
			if (Kh(e)) {
				var t = typeof e.valueOf == "function" ? e.valueOf() : e;
				e = Kh(t) ? t + "" : t
			}
			if (typeof e != "string") return e === 0 ? e : +e;
			e = MP(e);
			var r = VP.test(e);
			return r || UP.test(e) ? kP(e.slice(2), r ? 2 : 8) : GP.test(e) ? Yh : +e
		}
		$h.exports = BP
	});
	var Jh = c((oX, Zh) => {
		var HP = zn(),
			Qh = 1 / 0,
			WP = 17976931348623157e292;

		function XP(e) {
			if (!e) return e === 0 ? e : 0;
			if (e = HP(e), e === Qh || e === -Qh) {
				var t = e < 0 ? -1 : 1;
				return t * WP
			}
			return e === e ? e : 0
		}
		Zh.exports = XP
	});
	var ba = c((aX, ev) => {
		var jP = Jh();

		function zP(e) {
			var t = jP(e),
				r = t % 1;
			return t === t ? r ? t - r : t : 0
		}
		ev.exports = zP
	});
	var rv = c((sX, tv) => {
		var KP = Ea(),
			YP = Tt(),
			$P = ba(),
			QP = Math.max;

		function ZP(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var i = r == null ? 0 : $P(r);
			return i < 0 && (i = QP(n + i, 0)), KP(e, YP(t, 3), i)
		}
		tv.exports = ZP
	});
	var _a = c((uX, nv) => {
		var JP = ya(),
			eq = rv(),
			tq = JP(eq);
		nv.exports = tq
	});
	var av = {};
	De(av, {
		ELEMENT_MATCHES: () => rq,
		FLEX_PREFIXED: () => Ia,
		IS_BROWSER_ENV: () => Je,
		TRANSFORM_PREFIXED: () => wt,
		TRANSFORM_STYLE_PREFIXED: () => Yn,
		withBrowser: () => Kn
	});
	var ov, Je, Kn, rq, Ia, wt, iv, Yn, $n = ve(() => {
		"use strict";
		ov = le(_a()), Je = typeof window < "u", Kn = (e, t) => Je ? e() : t, rq = Kn(() => (0, ov.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), Ia = Kn(() => {
			let e = document.createElement("i"),
				t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
				r = "";
			try {
				let {
					length: n
				} = t;
				for (let i = 0; i < n; i++) {
					let o = t[i];
					if (e.style.display = o, e.style.display === o) return o
				}
				return r
			} catch {
				return r
			}
		}, "flex"), wt = Kn(() => {
			let e = document.createElement("i");
			if (e.style.transform == null) {
				let t = ["Webkit", "Moz", "ms"],
					r = "Transform",
					{
						length: n
					} = t;
				for (let i = 0; i < n; i++) {
					let o = t[i] + r;
					if (e.style[o] !== void 0) return o
				}
			}
			return "transform"
		}, "transform"), iv = wt.split("transform")[0], Yn = iv ? iv + "TransformStyle" : "transformStyle"
	});
	var Ta = c((cX, fv) => {
		var nq = 4,
			iq = .001,
			oq = 1e-7,
			aq = 10,
			Vr = 11,
			Qn = 1 / (Vr - 1),
			sq = typeof Float32Array == "function";

		function sv(e, t) {
			return 1 - 3 * t + 3 * e
		}

		function uv(e, t) {
			return 3 * t - 6 * e
		}

		function cv(e) {
			return 3 * e
		}

		function Zn(e, t, r) {
			return ((sv(t, r) * e + uv(t, r)) * e + cv(t)) * e
		}

		function lv(e, t, r) {
			return 3 * sv(t, r) * e * e + 2 * uv(t, r) * e + cv(t)
		}

		function uq(e, t, r, n, i) {
			var o, a, s = 0;
			do a = t + (r - t) / 2, o = Zn(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > oq && ++s < aq);
			return a
		}

		function cq(e, t, r, n) {
			for (var i = 0; i < nq; ++i) {
				var o = lv(t, r, n);
				if (o === 0) return t;
				var a = Zn(t, r, n) - e;
				t -= a / o
			}
			return t
		}
		fv.exports = function(t, r, n, i) {
			if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
			var o = sq ? new Float32Array(Vr) : new Array(Vr);
			if (t !== r || n !== i)
				for (var a = 0; a < Vr; ++a) o[a] = Zn(a * Qn, t, n);

			function s(u) {
				for (var l = 0, v = 1, d = Vr - 1; v !== d && o[v] <= u; ++v) l += Qn;
				--v;
				var g = (u - o[v]) / (o[v + 1] - o[v]),
					p = l + g * Qn,
					h = lv(p, t, n);
				return h >= iq ? cq(u, p, t, n) : h === 0 ? p : uq(u, l, l + Qn, t, n)
			}
			return function(l) {
				return t === r && n === i ? l : l === 0 ? 0 : l === 1 ? 1 : Zn(s(l), r, i)
			}
		}
	});
	var kr = {};
	De(kr, {
		bounce: () => Xq,
		bouncePast: () => jq,
		ease: () => lq,
		easeIn: () => fq,
		easeInOut: () => pq,
		easeOut: () => dq,
		inBack: () => Mq,
		inCirc: () => Nq,
		inCubic: () => mq,
		inElastic: () => Vq,
		inExpo: () => Cq,
		inOutBack: () => Gq,
		inOutCirc: () => qq,
		inOutCubic: () => Eq,
		inOutElastic: () => kq,
		inOutExpo: () => Lq,
		inOutQuad: () => vq,
		inOutQuart: () => Iq,
		inOutQuint: () => xq,
		inOutSine: () => Sq,
		inQuad: () => gq,
		inQuart: () => bq,
		inQuint: () => Tq,
		inSine: () => Oq,
		outBack: () => Dq,
		outBounce: () => Fq,
		outCirc: () => Pq,
		outCubic: () => yq,
		outElastic: () => Uq,
		outExpo: () => Rq,
		outQuad: () => hq,
		outQuart: () => _q,
		outQuint: () => wq,
		outSine: () => Aq,
		swingFrom: () => Hq,
		swingFromTo: () => Bq,
		swingTo: () => Wq
	});

	function gq(e) {
		return Math.pow(e, 2)
	}

	function hq(e) {
		return -(Math.pow(e - 1, 2) - 1)
	}

	function vq(e) {
		return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
	}

	function mq(e) {
		return Math.pow(e, 3)
	}

	function yq(e) {
		return Math.pow(e - 1, 3) + 1
	}

	function Eq(e) {
		return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
	}

	function bq(e) {
		return Math.pow(e, 4)
	}

	function _q(e) {
		return -(Math.pow(e - 1, 4) - 1)
	}

	function Iq(e) {
		return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
	}

	function Tq(e) {
		return Math.pow(e, 5)
	}

	function wq(e) {
		return Math.pow(e - 1, 5) + 1
	}

	function xq(e) {
		return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
	}

	function Oq(e) {
		return -Math.cos(e * (Math.PI / 2)) + 1
	}

	function Aq(e) {
		return Math.sin(e * (Math.PI / 2))
	}

	function Sq(e) {
		return -.5 * (Math.cos(Math.PI * e) - 1)
	}

	function Cq(e) {
		return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
	}

	function Rq(e) {
		return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
	}

	function Lq(e) {
		return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
	}

	function Nq(e) {
		return -(Math.sqrt(1 - e * e) - 1)
	}

	function Pq(e) {
		return Math.sqrt(1 - Math.pow(e - 1, 2))
	}

	function qq(e) {
		return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
	}

	function Fq(e) {
		return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
	}

	function Mq(e) {
		let t = pt;
		return e * e * ((t + 1) * e - t)
	}

	function Dq(e) {
		let t = pt;
		return (e -= 1) * e * ((t + 1) * e + t) + 1
	}

	function Gq(e) {
		let t = pt;
		return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
	}

	function Vq(e) {
		let t = pt,
			r = 0,
			n = 1;
		return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
	}

	function Uq(e) {
		let t = pt,
			r = 0,
			n = 1;
		return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
	}

	function kq(e) {
		let t = pt,
			r = 0,
			n = 1;
		return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
	}

	function Bq(e) {
		let t = pt;
		return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
	}

	function Hq(e) {
		let t = pt;
		return e * e * ((t + 1) * e - t)
	}

	function Wq(e) {
		let t = pt;
		return (e -= 1) * e * ((t + 1) * e + t) + 1
	}

	function Xq(e) {
		return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
	}

	function jq(e) {
		return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
	}
	var Ur, pt, lq, fq, dq, pq, wa = ve(() => {
		"use strict";
		Ur = le(Ta()), pt = 1.70158, lq = (0, Ur.default)(.25, .1, .25, 1), fq = (0, Ur.default)(.42, 0, 1, 1), dq = (0, Ur.default)(0, 0, .58, 1), pq = (0, Ur.default)(.42, 0, .58, 1)
	});
	var pv = {};
	De(pv, {
		applyEasing: () => Kq,
		createBezierEasing: () => zq,
		optimizeFloat: () => Br
	});

	function Br(e, t = 5, r = 10) {
		let n = Math.pow(r, t),
			i = Number(Math.round(e * n) / n);
		return Math.abs(i) > 1e-4 ? i : 0
	}

	function zq(e) {
		return (0, dv.default)(...e)
	}

	function Kq(e, t, r) {
		return t === 0 ? 0 : t === 1 ? 1 : Br(r ? t > 0 ? r(t) : t : t > 0 && e && kr[e] ? kr[e](t) : t)
	}
	var dv, xa = ve(() => {
		"use strict";
		wa();
		dv = le(Ta())
	});
	var vv = {};
	De(vv, {
		createElementState: () => hv,
		ixElements: () => uF,
		mergeActionState: () => Oa
	});

	function hv(e, t, r, n, i) {
		let o = r === Yq ? (0, tr.getIn)(i, ["config", "target", "objectId"]) : null;
		return (0, tr.mergeIn)(e, [n], {
			id: n,
			ref: t,
			refId: o,
			refType: r
		})
	}

	function Oa(e, t, r, n, i) {
		let o = lF(i);
		return (0, tr.mergeIn)(e, [t, sF, r], n, o)
	}

	function lF(e) {
		let {
			config: t
		} = e;
		return cF.reduce((r, n) => {
			let i = n[0],
				o = n[1],
				a = t[i],
				s = t[o];
			return a != null && s != null && (r[o] = s), r
		}, {})
	}
	var tr, fX, Yq, dX, $q, Qq, Zq, Jq, eF, tF, rF, nF, iF, oF, aF, gv, sF, uF, cF, mv = ve(() => {
		"use strict";
		tr = le(jt());
		Ve();
		({
			HTML_ELEMENT: fX,
			PLAIN_OBJECT: Yq,
			ABSTRACT_NODE: dX,
			CONFIG_X_VALUE: $q,
			CONFIG_Y_VALUE: Qq,
			CONFIG_Z_VALUE: Zq,
			CONFIG_VALUE: Jq,
			CONFIG_X_UNIT: eF,
			CONFIG_Y_UNIT: tF,
			CONFIG_Z_UNIT: rF,
			CONFIG_UNIT: nF
		} = Ce), {
			IX2_SESSION_STOPPED: iF,
			IX2_INSTANCE_ADDED: oF,
			IX2_ELEMENT_STATE_CHANGED: aF
		} = Te, gv = {}, sF = "refState", uF = (e = gv, t = {}) => {
			switch (t.type) {
				case iF:
					return gv;
				case oF: {
					let {
						elementId: r,
						element: n,
						origin: i,
						actionItem: o,
						refType: a
					} = t.payload, {
						actionTypeId: s
					} = o, u = e;
					return (0, tr.getIn)(u, [r, n]) !== n && (u = hv(u, n, a, r, o)), Oa(u, r, s, i, o)
				}
				case aF: {
					let {
						elementId: r,
						actionTypeId: n,
						current: i,
						actionItem: o
					} = t.payload;
					return Oa(e, r, n, i, o)
				}
				default:
					return e
			}
		};
		cF = [
			[$q, eF],
			[Qq, tF],
			[Zq, rF],
			[Jq, nF]
		]
	});
	var yv = c(xe => {
		"use strict";
		Object.defineProperty(xe, "__esModule", {
			value: !0
		});
		xe.renderPlugin = xe.getPluginOrigin = xe.getPluginDuration = xe.getPluginDestination = xe.getPluginConfig = xe.createPluginInstance = xe.clearPlugin = void 0;
		var fF = e => e.value;
		xe.getPluginConfig = fF;
		var dF = (e, t) => {
			if (t.config.duration !== "auto") return null;
			let r = parseFloat(e.getAttribute("data-duration"));
			return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
		};
		xe.getPluginDuration = dF;
		var pF = e => e || {
			value: 0
		};
		xe.getPluginOrigin = pF;
		var gF = e => ({
			value: e.value
		});
		xe.getPluginDestination = gF;
		var hF = e => {
			let t = window.Webflow.require("lottie").createInstance(e);
			return t.stop(), t.setSubframe(!0), t
		};
		xe.createPluginInstance = hF;
		var vF = (e, t, r) => {
			if (!e) return;
			let n = t[r.actionTypeId].value / 100;
			e.goToFrame(e.frames * n)
		};
		xe.renderPlugin = vF;
		var mF = e => {
			window.Webflow.require("lottie").createInstance(e).stop()
		};
		xe.clearPlugin = mF
	});
	var bv = c(Oe => {
		"use strict";
		Object.defineProperty(Oe, "__esModule", {
			value: !0
		});
		Oe.renderPlugin = Oe.getPluginOrigin = Oe.getPluginDuration = Oe.getPluginDestination = Oe.getPluginConfig = Oe.createPluginInstance = Oe.clearPlugin = void 0;
		var yF = e => document.querySelector(`[data-w-id="${e}"]`),
			EF = () => window.Webflow.require("spline"),
			bF = (e, t) => e.filter(r => !t.includes(r)),
			_F = (e, t) => e.value[t];
		Oe.getPluginConfig = _F;
		var IF = () => null;
		Oe.getPluginDuration = IF;
		var Ev = Object.freeze({
				positionX: 0,
				positionY: 0,
				positionZ: 0,
				rotationX: 0,
				rotationY: 0,
				rotationZ: 0,
				scaleX: 1,
				scaleY: 1,
				scaleZ: 1
			}),
			TF = (e, t) => {
				let r = t.config.value,
					n = Object.keys(r);
				if (e) {
					let o = Object.keys(e),
						a = bF(n, o);
					return a.length ? a.reduce((u, l) => (u[l] = Ev[l], u), e) : e
				}
				return n.reduce((o, a) => (o[a] = Ev[a], o), {})
			};
		Oe.getPluginOrigin = TF;
		var wF = e => e.value;
		Oe.getPluginDestination = wF;
		var xF = (e, t) => {
			var r;
			let n = t == null || (r = t.config) === null || r === void 0 || (r = r.target) === null || r === void 0 ? void 0 : r.pluginElement;
			return n ? yF(n) : null
		};
		Oe.createPluginInstance = xF;
		var OF = (e, t, r) => {
			let n = EF(),
				i = n.getInstance(e),
				o = r.config.target.objectId,
				a = s => {
					if (!s) throw new Error("Invalid spline app passed to renderSpline");
					let u = o && s.findObjectById(o);
					if (!u) return;
					let {
						PLUGIN_SPLINE: l
					} = t;
					l.positionX != null && (u.position.x = l.positionX), l.positionY != null && (u.position.y = l.positionY), l.positionZ != null && (u.position.z = l.positionZ), l.rotationX != null && (u.rotation.x = l.rotationX), l.rotationY != null && (u.rotation.y = l.rotationY), l.rotationZ != null && (u.rotation.z = l.rotationZ), l.scaleX != null && (u.scale.x = l.scaleX), l.scaleY != null && (u.scale.y = l.scaleY), l.scaleZ != null && (u.scale.z = l.scaleZ)
				};
			i ? a(i.spline) : n.setLoadHandler(e, a)
		};
		Oe.renderPlugin = OF;
		var AF = () => null;
		Oe.clearPlugin = AF
	});
	var Sa = c(Aa => {
		"use strict";
		Object.defineProperty(Aa, "__esModule", {
			value: !0
		});
		Aa.normalizeColor = SF;
		var _v = {
		};

		function SF(e) {
		}
	});
	var Iv = c(Ae => {
		"use strict";
		Object.defineProperty(Ae, "__esModule", {
			value: !0
		});
		Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
		var CF = Sa(),
			RF = (e, t) => e.value[t];
		Ae.getPluginConfig = RF;
		var LF = () => null;
		Ae.getPluginDuration = LF;
		var NF = (e, t) => {
			if (e) return e;
			let r = t.config.value,
				n = t.config.target.objectId,
				i = getComputedStyle(document.documentElement).getPropertyValue(n);
			if (r.size != null) return {
				size: parseInt(i, 10)
			};
			if (r.red != null && r.green != null && r.blue != null) return (0, CF.normalizeColor)(i)
		};
		Ae.getPluginOrigin = NF;
		var PF = e => e.value;
		Ae.getPluginDestination = PF;
		var qF = () => null;
		Ae.createPluginInstance = qF;
		var FF = (e, t, r) => {
			let n = r.config.target.objectId,
				i = r.config.value.unit,
				{
					PLUGIN_VARIABLE: o
				} = t,
				{
					size: a,
					red: s,
					green: u,
					blue: l,
					alpha: v
				} = o,
				d;
			a != null && (d = a + i), s != null && l != null && u != null && v != null && (d = `rgba(${s}, ${u}, ${l}, ${v})`), d != null && document.documentElement.style.setProperty(n, d)
		};
		Ae.renderPlugin = FF;
		var MF = (e, t) => {
			let r = t.config.target.objectId;
			document.documentElement.style.removeProperty(r)
		};
		Ae.clearPlugin = MF
	});
	var Tv = c(Jn => {
		"use strict";
		var Ra = ln().default;
		Object.defineProperty(Jn, "__esModule", {
			value: !0
		});
		Jn.pluginMethodMap = void 0;
		var Ca = (Ve(), rt(Cf)),
			DF = Ra(yv()),
			GF = Ra(bv()),
			VF = Ra(Iv()),
			mX = Jn.pluginMethodMap = new Map([
				[Ca.ActionTypeConsts.PLUGIN_LOTTIE, {
					...DF
				}],
				[Ca.ActionTypeConsts.PLUGIN_SPLINE, {
					...GF
				}],
				[Ca.ActionTypeConsts.PLUGIN_VARIABLE, {
					...VF
				}]
			])
	});
	var wv = {};
	De(wv, {
		clearPlugin: () => Ma,
		createPluginInstance: () => kF,
		getPluginConfig: () => Na,
		getPluginDestination: () => qa,
		getPluginDuration: () => UF,
		getPluginOrigin: () => Pa,
		isPluginType: () => Pt,
		renderPlugin: () => Fa
	});

	function Pt(e) {
		return La.pluginMethodMap.has(e)
	}
	var La, qt, Na, Pa, UF, qa, kF, Fa, Ma, Da = ve(() => {
		"use strict";
		$n();
		La = le(Tv());
		qt = e => t => {
			if (!Je) return () => null;
			let r = La.pluginMethodMap.get(t);
			if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
			let n = r[e];
			if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
			return n
		}, Na = qt("getPluginConfig"), Pa = qt("getPluginOrigin"), UF = qt("getPluginDuration"), qa = qt("getPluginDestination"), kF = qt("createPluginInstance"), Fa = qt("renderPlugin"), Ma = qt("clearPlugin")
	});
	var Ov = c((bX, xv) => {
		function BF(e, t) {
			return e == null || e !== e ? t : e
		}
		xv.exports = BF
	});
	var Sv = c((_X, Av) => {
		function HF(e, t, r, n) {
			var i = -1,
				o = e == null ? 0 : e.length;
			for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
			return r
		}
		Av.exports = HF
	});
	var Rv = c((IX, Cv) => {
		function WF(e) {
			return function(t, r, n) {
				for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
					var u = a[e ? s : ++i];
					if (r(o[u], u, o) === !1) break
				}
				return t
			}
		}
		Cv.exports = WF
	});
	var Nv = c((TX, Lv) => {
		var XF = Rv(),
			jF = XF();
		Lv.exports = jF
	});
	var Ga = c((wX, Pv) => {
		var zF = Nv(),
			KF = Mr();

		function YF(e, t) {
			return e && zF(e, t, KF)
		}
		Pv.exports = YF
	});
	var Fv = c((xX, qv) => {
		var $F = Lt();

		function QF(e, t) {
			return function(r, n) {
				if (r == null) return r;
				if (!$F(r)) return e(r, n);
				for (var i = r.length, o = t ? i : -1, a = Object(r);
					(t ? o-- : ++o < i) && n(a[o], o, a) !== !1;);
				return r
			}
		}
		qv.exports = QF
	});
	var Va = c((OX, Mv) => {
		var ZF = Ga(),
			JF = Fv(),
			eM = JF(ZF);
		Mv.exports = eM
	});
	var Gv = c((AX, Dv) => {
		function tM(e, t, r, n, i) {
			return i(e, function(o, a, s) {
				r = n ? (n = !1, o) : t(r, o, a, s)
			}), r
		}
		Dv.exports = tM
	});
	var Uv = c((SX, Vv) => {
		var rM = Sv(),
			nM = Va(),
			iM = Tt(),
			oM = Gv(),
			aM = we();

		function sM(e, t, r) {
			var n = aM(e) ? rM : oM,
				i = arguments.length < 3;
			return n(e, iM(t, 4), r, i, nM)
		}
		Vv.exports = sM
	});
	var Bv = c((CX, kv) => {
		var uM = Ea(),
			cM = Tt(),
			lM = ba(),
			fM = Math.max,
			dM = Math.min;

		function pM(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var i = n - 1;
			return r !== void 0 && (i = lM(r), i = r < 0 ? fM(n + i, 0) : dM(i, n - 1)), uM(e, cM(t, 3), i, !0)
		}
		kv.exports = pM
	});
	var Wv = c((RX, Hv) => {
		var gM = ya(),
			hM = Bv(),
			vM = gM(hM);
		Hv.exports = vM
	});

	function Xv(e, t) {
		return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
	}

	function mM(e, t) {
		if (Xv(e, t)) return !0;
		if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
		let r = Object.keys(e),
			n = Object.keys(t);
		if (r.length !== n.length) return !1;
		for (let i = 0; i < r.length; i++)
			if (!Object.hasOwn(t, r[i]) || !Xv(e[r[i]], t[r[i]])) return !1;
		return !0
	}
	var Ua, jv = ve(() => {
		"use strict";
		Ua = mM
	});
	var lm = {};
	De(lm, {
		cleanupHTMLElement: () => gD,
		clearAllStyles: () => pD,
		clearObjectCache: () => qM,
		getActionListProgress: () => vD,
		getAffectedElements: () => Xa,
		getComputedStyle: () => BM,
		getDestinationValues: () => YM,
		getElementId: () => GM,
		getInstanceId: () => MM,
		getInstanceOrigin: () => XM,
		getItemConfigByKey: () => KM,
		getMaxDurationItemIndex: () => cm,
		getNamespacedParameterId: () => ED,
		getRenderType: () => am,
		getStyleProp: () => $M,
		mediaQueriesEqual: () => _D,
		observeStore: () => kM,
		reduceListToGroup: () => mD,
		reifyState: () => VM,
		renderHTMLElement: () => QM,
		shallowEqual: () => Ua,
		shouldAllowMediaQuery: () => bD,
		shouldNamespaceEventParameter: () => yD,
		stringifyTarget: () => ID
	});

	function qM() {
		ei.clear()
	}

	function MM() {
		return "i" + FM++
	}

	function GM(e, t) {
		for (let r in e) {
			let n = e[r];
			if (n && n.ref === t) return n.id
		}
		return "e" + DM++
	}

	function VM({
		events: e,
		actionLists: t,
		site: r
	} = {}) {
		let n = (0, ii.default)(e, (a, s) => {
				let {
					eventTypeId: u
				} = s;
				return a[u] || (a[u] = {}), a[u][s.id] = s, a
			}, {}),
			i = r && r.mediaQueries,
			o = [];
		return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
			ixData: {
				events: e,
				actionLists: t,
				eventTypeMap: n,
				mediaQueries: i,
				mediaQueryKeys: o
			}
		}
	}

	function kM({
		store: e,
		select: t,
		onChange: r,
		comparator: n = UM
	}) {
		let {
			getState: i,
			subscribe: o
		} = e, a = o(u), s = t(i());

		function u() {
			let l = t(i());
			if (l == null) {
				a();
				return
			}
			n(l, s) || (s = l, r(s, e))
		}
		return a
	}

	function Yv(e) {
		let t = typeof e;
		if (t === "string") return {
			id: e
		};
		if (e != null && t === "object") {
			let {
				id: r,
				objectId: n,
				selector: i,
				selectorGuids: o,
				appliesTo: a,
				useEventTarget: s
			} = e;
			return {
				id: r,
				objectId: n,
				selector: i,
				selectorGuids: o,
				appliesTo: a,
				useEventTarget: s
			}
		}
		return {}
	}

	function Xa({
		config: e,
		event: t,
		eventTarget: r,
		elementRoot: n,
		elementApi: i
	}) {
		if (!i) throw new Error("IX2 missing elementApi");
		let {
			targets: o
		} = e;
		if (Array.isArray(o) && o.length > 0) return o.reduce((M, O) => M.concat(Xa({
			config: {
				target: O
			},
			event: t,
			eventTarget: r,
			elementRoot: n,
			elementApi: i
		})), []);
		let {
			getValidDocument: a,
			getQuerySelector: s,
			queryDocument: u,
			getChildElements: l,
			getSiblingElements: v,
			matchSelector: d,
			elementContains: g,
			isSiblingNode: p
		} = i, {
			target: h
		} = e;
		if (!h) return [];
		let {
			id: b,
			objectId: T,
			selector: _,
			selectorGuids: R,
			appliesTo: A,
			useEventTarget: N
		} = Yv(h);
		if (T) return [ei.has(T) ? ei.get(T) : ei.set(T, {}).get(T)];
		if (A === Wo.PAGE) {
			let M = a(b);
			return M ? [M] : []
		}
		let L = (t?.action?.config?.affectedElements ?? {})[b || _] || {},
			W = !!(L.id || L.selector),
			X, j, Q, ie = t && s(Yv(t.target));
		if (W ? (X = L.limitAffectedElements, j = ie, Q = s(L)) : j = Q = s({
				id: b,
				selector: _,
				selectorGuids: R
			}), t && N) {
			let M = r && (Q || N === !0) ? [r] : u(ie);
			if (Q) {
				if (N === LM) return u(Q).filter(O => M.some(q => g(O, q)));
				if (N === zv) return u(Q).filter(O => M.some(q => g(q, O)));
				if (N === Kv) return u(Q).filter(O => M.some(q => p(q, O)))
			}
			return M
		}
		return j == null || Q == null ? [] : Je && n ? u(Q).filter(M => n.contains(M)) : X === zv ? u(j, Q) : X === RM ? l(u(j)).filter(d(Q)) : X === Kv ? v(u(j)).filter(d(Q)) : u(Q)
	}

	function BM({
		element: e,
		actionItem: t
	}) {
		if (!Je) return {};
		let {
			actionTypeId: r
		} = t;
		switch (r) {
			case ar:
			case sr:
			case ur:
			case cr:
			case ai:
				return window.getComputedStyle(e);
			default:
				return {}
		}
	}

	function XM(e, t = {}, r = {}, n, i) {
		let {
			getStyle: o
		} = i, {
			actionTypeId: a
		} = n;
		if (Pt(a)) return Pa(a)(t[a], n);
		switch (n.actionTypeId) {
			case nr:
			case ir:
			case or:
			case jr:
				return t[n.actionTypeId] || ja[n.actionTypeId];
			case zr:
				return HM(t[n.actionTypeId], n.config.filters);
			case Kr:
				return WM(t[n.actionTypeId], n.config.fontVariations);
			case nm:
				return {
					value: (0, gt.default)(parseFloat(o(e, ri)), 1)
				};
			case sr:
			case ur:
			case cr:
				return lD({
					element: e,
					actionTypeId: n.actionTypeId,
					computedStyle: r,
					getStyle: o
				});
			case ai:
				return {
					value: (0, gt.default)(o(e, ni), r.display)
				};
			case PM:
				return t[n.actionTypeId] || {
					value: 0
				};
			default:
				return
		}
	}

	function YM({
		element: e,
		actionItem: t,
		elementApi: r
	}) {
		if (Pt(t.actionTypeId)) return qa(t.actionTypeId)(t.config);
		switch (t.actionTypeId) {
			case nr:
			case ir:
			case or:
			case jr: {
				let {
					xValue: n,
					yValue: i,
					zValue: o
				} = t.config;
				return {
					xValue: n,
					yValue: i,
					zValue: o
				}
			}
			case ar: {
				let {
					getStyle: n,
					setStyle: i,
					getProperty: o
				} = r, {
					widthUnit: a,
					heightUnit: s
				} = t.config, {
					widthValue: u,
					heightValue: l
				} = t.config;
				if (!Je) return {
					widthValue: u,
					heightValue: l
				};
				if (a === xt) {
					let v = n(e, ut);
					i(e, ut, ""), u = o(e, "offsetWidth"), i(e, ut, v)
				}
				if (s === xt) {
					let v = n(e, ct);
					i(e, ct, ""), l = o(e, "offsetHeight"), i(e, ct, v)
				}
				return {
					widthValue: u,
					heightValue: l
				}
			}
			case sr:
			case ur:
			case cr: {
				let {
					rValue: n,
					gValue: i,
					bValue: o,
					aValue: a,
					globalSwatchId: s
				} = t.config;
				if (s && s.startsWith("--")) {
					let {
						getStyle: u
					} = r, l = u(e, s), v = (0, Jv.normalizeColor)(l);
					return {
						rValue: v.red,
						gValue: v.green,
						bValue: v.blue,
						aValue: v.alpha
					}
				}
				return {
					rValue: n,
					gValue: i,
					bValue: o,
					aValue: a
				}
			}
			case zr:
				return t.config.filters.reduce(jM, {});
			case Kr:
				return t.config.fontVariations.reduce(zM, {});
			default: {
				let {
					value: n
				} = t.config;
				return {
					value: n
				}
			}
		}
	}

	function am(e) {
		if (/^TRANSFORM_/.test(e)) return tm;
		if (/^STYLE_/.test(e)) return Ha;
		if (/^GENERAL_/.test(e)) return Ba;
		if (/^PLUGIN_/.test(e)) return rm
	}

	function $M(e, t) {
		return e === Ha ? t.replace("STYLE_", "").toLowerCase() : null
	}

	function QM(e, t, r, n, i, o, a, s, u) {
		switch (s) {
			case tm:
				return rD(e, t, r, i, a);
			case Ha:
				return fD(e, t, r, i, o, a);
			case Ba:
				return dD(e, i, a);
			case rm: {
				let {
					actionTypeId: l
				} = i;
				if (Pt(l)) return Fa(l)(u, t, i)
			}
		}
	}

	function rD(e, t, r, n, i) {
		let o = tD.map(s => {
				let u = ja[s],
					{
						xValue: l = u.xValue,
						yValue: v = u.yValue,
						zValue: d = u.zValue,
						xUnit: g = "",
						yUnit: p = "",
						zUnit: h = ""
					} = t[s] || {};
				switch (s) {
					case nr:
						return `${bM}(${l}${g}, ${v}${p}, ${d}${h})`;
					case ir:
						return `${_M}(${l}${g}, ${v}${p}, ${d}${h})`;
					case or:
						return `${IM}(${l}${g}) ${TM}(${v}${p}) ${wM}(${d}${h})`;
					case jr:
						return `${xM}(${l}${g}, ${v}${p})`;
					default:
						return ""
				}
			}).join(" "),
			{
				setStyle: a
			} = i;
		Ft(e, wt, i), a(e, wt, o), oD(n, r) && a(e, Yn, OM)
	}

	function nD(e, t, r, n) {
		let i = (0, ii.default)(t, (a, s, u) => `${a} ${u}(${s}${eD(u,r)})`, ""),
			{
				setStyle: o
			} = n;
		Ft(e, Hr, n), o(e, Hr, i)
	}

	function iD(e, t, r, n) {
		let i = (0, ii.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), []).join(", "),
			{
				setStyle: o
			} = n;
		Ft(e, Wr, n), o(e, Wr, i)
	}

	function oD({
		actionTypeId: e
	}, {
		xValue: t,
		yValue: r,
		zValue: n
	}) {
		return e === nr && n !== void 0 || e === ir && n !== void 0 || e === or && (t !== void 0 || r !== void 0)
	}

	function cD(e, t) {
		let r = e.exec(t);
		return r ? r[1] : ""
	}

	function lD({
		element: e,
		actionTypeId: t,
		computedStyle: r,
		getStyle: n
	}) {
		let i = Wa[t],
			o = n(e, i),
			a = sD.test(o) ? o : r[i],
			s = cD(uD, a).split(Xr);
		return {
			rValue: (0, gt.default)(parseInt(s[0], 10), 255),
			gValue: (0, gt.default)(parseInt(s[1], 10), 255),
			bValue: (0, gt.default)(parseInt(s[2], 10), 255),
			aValue: (0, gt.default)(parseFloat(s[3]), 1)
		}
	}

	function fD(e, t, r, n, i, o) {
		let {
			setStyle: a
		} = o;
		switch (n.actionTypeId) {
			case ar: {
				let {
					widthUnit: s = "",
					heightUnit: u = ""
				} = n.config, {
					widthValue: l,
					heightValue: v
				} = r;
				l !== void 0 && (s === xt && (s = "px"), Ft(e, ut, o), a(e, ut, l + s)), v !== void 0 && (u === xt && (u = "px"), Ft(e, ct, o), a(e, ct, v + u));
				break
			}
			case zr: {
				nD(e, r, n.config, o);
				break
			}
			case Kr: {
				iD(e, r, n.config, o);
				break
			}
			case sr:
			case ur:
			case cr: {
				let s = Wa[n.actionTypeId],
					u = Math.round(r.rValue),
					l = Math.round(r.gValue),
					v = Math.round(r.bValue),
					d = r.aValue;
				Ft(e, s, o), a(e, s, d >= 1 ? `rgb(${u},${l},${v})` : `rgba(${u},${l},${v},${d})`);
				break
			}
			default: {
				let {
					unit: s = ""
				} = n.config;
				Ft(e, i, o), a(e, i, r.value + s);
				break
			}
		}
	}

	function dD(e, t, r) {
		let {
			setStyle: n
		} = r;
		switch (t.actionTypeId) {
			case ai: {
				let {
					value: i
				} = t.config;
				i === AM && Je ? n(e, ni, Ia) : n(e, ni, i);
				return
			}
		}
	}

	function Ft(e, t, r) {
		if (!Je) return;
		let n = om[t];
		if (!n) return;
		let {
			getStyle: i,
			setStyle: o
		} = r, a = i(e, rr);
		if (!a) {
			o(e, rr, n);
			return
		}
		let s = a.split(Xr).map(im);
		s.indexOf(n) === -1 && o(e, rr, s.concat(n).join(Xr))
	}

	function sm(e, t, r) {
		if (!Je) return;
		let n = om[t];
		if (!n) return;
		let {
			getStyle: i,
			setStyle: o
		} = r, a = i(e, rr);
		!a || a.indexOf(n) === -1 || o(e, rr, a.split(Xr).map(im).filter(s => s !== n).join(Xr))
	}

	function pD({
		store: e,
		elementApi: t
	}) {
		let {
			ixData: r
		} = e.getState(), {
			events: n = {},
			actionLists: i = {}
		} = r;
		Object.keys(n).forEach(o => {
			let a = n[o],
				{
					config: s
				} = a.action,
				{
					actionListId: u
				} = s,
				l = i[u];
			l && Qv({
				actionList: l,
				event: a,
				elementApi: t
			})
		}), Object.keys(i).forEach(o => {
			Qv({
				actionList: i[o],
				elementApi: t
			})
		})
	}

	function Qv({
		actionList: e = {},
		event: t,
		elementApi: r
	}) {
		let {
			actionItemGroups: n,
			continuousParameterGroups: i
		} = e;
		n && n.forEach(o => {
			Zv({
				actionGroup: o,
				event: t,
				elementApi: r
			})
		}), i && i.forEach(o => {
			let {
				continuousActionGroups: a
			} = o;
			a.forEach(s => {
				Zv({
					actionGroup: s,
					event: t,
					elementApi: r
				})
			})
		})
	}

	function Zv({
		actionGroup: e,
		event: t,
		elementApi: r
	}) {
		let {
			actionItems: n
		} = e;
		n.forEach(i => {
			let {
				actionTypeId: o,
				config: a
			} = i, s;
			Pt(o) ? s = u => Ma(o)(u, i) : s = um({
				effect: hD,
				actionTypeId: o,
				elementApi: r
			}), Xa({
				config: a,
				event: t,
				elementApi: r
			}).forEach(s)
		})
	}

	function gD(e, t, r) {
		let {
			setStyle: n,
			getStyle: i
		} = r, {
			actionTypeId: o
		} = t;
		if (o === ar) {
			let {
				config: a
			} = t;
			a.widthUnit === xt && n(e, ut, ""), a.heightUnit === xt && n(e, ct, "")
		}
		i(e, rr) && um({
			effect: sm,
			actionTypeId: o,
			elementApi: r
		})(e)
	}

	function hD(e, t, r) {
		let {
			setStyle: n
		} = r;
		sm(e, t, r), n(e, t, ""), t === wt && n(e, Yn, "")
	}

	function cm(e) {
		let t = 0,
			r = 0;
		return e.forEach((n, i) => {
			let {
				config: o
			} = n, a = o.delay + o.duration;
			a >= t && (t = a, r = i)
		}), r
	}

	function vD(e, t) {
		let {
			actionItemGroups: r,
			useFirstGroupAsInitialState: n
		} = e, {
			actionItem: i,
			verboseTimeElapsed: o = 0
		} = t, a = 0, s = 0;
		return r.forEach((u, l) => {
			if (n && l === 0) return;
			let {
				actionItems: v
			} = u, d = v[cm(v)], {
				config: g,
				actionTypeId: p
			} = d;
			i.id === d.id && (s = a + o);
			let h = am(p) === Ba ? 0 : g.duration;
			a += g.delay + h
		}), a > 0 ? Br(s / a) : 0
	}

	function mD({
		actionList: e,
		actionItemId: t,
		rawData: r
	}) {
		let {
			actionItemGroups: n,
			continuousParameterGroups: i
		} = e, o = [], a = s => (o.push((0, oi.mergeIn)(s, ["config"], {
			delay: 0,
			duration: 0
		})), s.id === t);
		return n && n.some(({
			actionItems: s
		}) => s.some(a)), i && i.some(s => {
			let {
				continuousActionGroups: u
			} = s;
			return u.some(({
				actionItems: l
			}) => l.some(a))
		}), (0, oi.setIn)(r, ["actionLists"], {
			[e.id]: {
				id: e.id,
				actionItemGroups: [{
					actionItems: o
				}]
			}
		})
	}

	function yD(e, {
		basedOn: t
	}) {
		return e === Ze.SCROLLING_IN_VIEW && (t === at.ELEMENT || t == null) || e === Ze.MOUSE_MOVE && t === at.ELEMENT
	}

	function ED(e, t) {
		return e + NM + t
	}

	function bD(e, t) {
		return t == null ? !0 : e.indexOf(t) !== -1
	}

	function _D(e, t) {
		return Ua(e && e.sort(), t && t.sort())
	}

	function ID(e) {
		if (typeof e == "string") return e;
		if (e.pluginElement && e.objectId) return e.pluginElement + ka + e.objectId;
		if (e.objectId) return e.objectId;
		let {
			id: t = "",
			selector: r = "",
			useEventTarget: n = ""
		} = e;
		return t + ka + r + ka + n
	}
	var gt, ii, ti, oi, Jv, yM, EM, bM, _M, IM, TM, wM, xM, OM, AM, ri, Hr, Wr, ut, ct, em, SM, CM, zv, RM, Kv, LM, ni, rr, xt, Xr, NM, ka, tm, Ba, Ha, rm, nr, ir, or, jr, nm, zr, Kr, ar, sr, ur, cr, ai, PM, im, Wa, om, ei, FM, DM, UM, $v, HM, WM, jM, zM, KM, ja, ZM, JM, eD, tD, aD, sD, uD, um, fm = ve(() => {
		"use strict";
		gt = le(Ov()), ii = le(Uv()), ti = le(Wv()), oi = le(jt());
		Ve();
		jv();
		xa();
		Jv = le(Sa());
		Da();
		$n();
		({
			BACKGROUND: yM,
			TRANSFORM: EM,
			TRANSLATE_3D: bM,
			SCALE_3D: _M,
			ROTATE_X: IM,
			ROTATE_Y: TM,
			ROTATE_Z: wM,
			SKEW: xM,
			PRESERVE_3D: OM,
			FLEX: AM,
			OPACITY: ri,
			FILTER: Hr,
			FONT_VARIATION_SETTINGS: Wr,
			WIDTH: ut,
			HEIGHT: ct,
			BACKGROUND_COLOR: em,
			BORDER_COLOR: SM,
			COLOR: CM,
			CHILDREN: zv,
			IMMEDIATE_CHILDREN: RM,
			SIBLINGS: Kv,
			PARENT: LM,
			DISPLAY: ni,
			WILL_CHANGE: rr,
			AUTO: xt,
			COMMA_DELIMITER: Xr,
			COLON_DELIMITER: NM,
			BAR_DELIMITER: ka,
			RENDER_TRANSFORM: tm,
			RENDER_GENERAL: Ba,
			RENDER_STYLE: Ha,
			RENDER_PLUGIN: rm
		} = Ce), {
			TRANSFORM_MOVE: nr,
			TRANSFORM_SCALE: ir,
			TRANSFORM_ROTATE: or,
			TRANSFORM_SKEW: jr,
			STYLE_OPACITY: nm,
			STYLE_FILTER: zr,
			STYLE_FONT_VARIATION: Kr,
			STYLE_SIZE: ar,
			STYLE_BACKGROUND_COLOR: sr,
			STYLE_BORDER: ur,
			STYLE_TEXT_COLOR: cr,
			GENERAL_DISPLAY: ai,
			OBJECT_VALUE: PM
		} = Ge, im = e => e.trim(), Wa = Object.freeze({
			[sr]: em,
			[ur]: SM,
			[cr]: CM
		}), om = Object.freeze({
			[wt]: EM,
			[em]: yM,
			[ri]: ri,
			[Hr]: Hr,
			[ut]: ut,
			[ct]: ct,
			[Wr]: Wr
		}), ei = new Map;
		FM = 1;
		DM = 1;
		UM = (e, t) => e === t;
		$v = /px/, HM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = ZM[n.type]), r), e || {}), WM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = JM[n.type] || n.defaultValue || 0), r), e || {});
		jM = (e, t) => (t && (e[t.type] = t.value || 0), e), zM = (e, t) => (t && (e[t.type] = t.value || 0), e), KM = (e, t, r) => {
			if (Pt(e)) return Na(e)(r, t);
			switch (e) {
				case zr: {
					let n = (0, ti.default)(r.filters, ({
						type: i
					}) => i === t);
					return n ? n.value : 0
				}
				case Kr: {
					let n = (0, ti.default)(r.fontVariations, ({
						type: i
					}) => i === t);
					return n ? n.value : 0
				}
				default:
					return r[t]
			}
		};
		ja = {
			[nr]: Object.freeze({
				xValue: 0,
				yValue: 0,
				zValue: 0
			}),
			[ir]: Object.freeze({
				xValue: 1,
				yValue: 1,
				zValue: 1
			}),
			[or]: Object.freeze({
				xValue: 0,
				yValue: 0,
				zValue: 0
			}),
			[jr]: Object.freeze({
				xValue: 0,
				yValue: 0
			})
		}, ZM = Object.freeze({
			blur: 0,
			"hue-rotate": 0,
			invert: 0,
			grayscale: 0,
			saturate: 100,
			sepia: 0,
			contrast: 100,
			brightness: 100
		}), JM = Object.freeze({
			wght: 0,
			opsz: 0,
			wdth: 0,
			slnt: 0
		}), eD = (e, t) => {
			let r = (0, ti.default)(t.filters, ({
				type: n
			}) => n === e);
			if (r && r.unit) return r.unit;
			switch (e) {
				case "blur":
					return "px";
				case "hue-rotate":
					return "deg";
				default:
					return "%"
			}
		}, tD = Object.keys(ja);
		aD = "\\(([^)]+)\\)", sD = /^rgb/, uD = RegExp(`rgba?${aD}`);
		um = ({
			effect: e,
			actionTypeId: t,
			elementApi: r
		}) => n => {
			switch (t) {
				case nr:
				case ir:
				case or:
				case jr:
					e(n, wt, r);
					break;
				case zr:
					e(n, Hr, r);
					break;
				case Kr:
					e(n, Wr, r);
					break;
				case nm:
					e(n, ri, r);
					break;
				case ar:
					e(n, ut, r), e(n, ct, r);
					break;
				case sr:
				case ur:
				case cr:
					e(n, Wa[t], r);
					break;
				case ai:
					e(n, ni, r);
					break
			}
		}
	});
	var Mt = c(Pe => {
		"use strict";
		var lr = ln().default;
		Object.defineProperty(Pe, "__esModule", {
			value: !0
		});
		Pe.IX2VanillaUtils = Pe.IX2VanillaPlugins = Pe.IX2ElementsReducer = Pe.IX2Easings = Pe.IX2EasingUtils = Pe.IX2BrowserSupport = void 0;
		var TD = lr(($n(), rt(av)));
		Pe.IX2BrowserSupport = TD;
		var wD = lr((wa(), rt(kr)));
		Pe.IX2Easings = wD;
		var xD = lr((xa(), rt(pv)));
		Pe.IX2EasingUtils = xD;
		var OD = lr((mv(), rt(vv)));
		Pe.IX2ElementsReducer = OD;
		var AD = lr((Da(), rt(wv)));
		Pe.IX2VanillaPlugins = AD;
		var SD = lr((fm(), rt(lm)));
		Pe.IX2VanillaUtils = SD
	});
	var ui, ht, CD, RD, LD, ND, PD, qD, si, dm, FD, MD, za, DD, GD, VD, UD, pm, gm = ve(() => {
		"use strict";
		Ve();
		ui = le(Mt()), ht = le(jt()), {
			IX2_RAW_DATA_IMPORTED: CD,
			IX2_SESSION_STOPPED: RD,
			IX2_INSTANCE_ADDED: LD,
			IX2_INSTANCE_STARTED: ND,
			IX2_INSTANCE_REMOVED: PD,
			IX2_ANIMATION_FRAME_CHANGED: qD
		} = Te, {
			optimizeFloat: si,
			applyEasing: dm,
			createBezierEasing: FD
		} = ui.IX2EasingUtils, {
			RENDER_GENERAL: MD
		} = Ce, {
			getItemConfigByKey: za,
			getRenderType: DD,
			getStyleProp: GD
		} = ui.IX2VanillaUtils, VD = (e, t) => {
			let {
				position: r,
				parameterId: n,
				actionGroups: i,
				destinationKeys: o,
				smoothing: a,
				restingValue: s,
				actionTypeId: u,
				customEasingFn: l,
				skipMotion: v,
				skipToValue: d
			} = e, {
				parameters: g
			} = t.payload, p = Math.max(1 - a, .01), h = g[n];
			h == null && (p = 1, h = s);
			let b = Math.max(h, 0) || 0,
				T = si(b - r),
				_ = v ? d : si(r + T * p),
				R = _ * 100;
			if (_ === r && e.current) return e;
			let A, N, P, L;
			for (let X = 0, {
					length: j
				} = i; X < j; X++) {
				let {
					keyframe: Q,
					actionItems: ie
				} = i[X];
				if (X === 0 && (A = ie[0]), R >= Q) {
					A = ie[0];
					let M = i[X + 1],
						O = M && R !== Q;
					N = O ? M.actionItems[0] : null, O && (P = Q / 100, L = (M.keyframe - Q) / 100)
				}
			}
			let W = {};
			if (A && !N)
				for (let X = 0, {
						length: j
					} = o; X < j; X++) {
					let Q = o[X];
					W[Q] = za(u, Q, A.config)
				} else if (A && N && P !== void 0 && L !== void 0) {
					let X = (_ - P) / L,
						j = A.config.easing,
						Q = dm(j, X, l);
					for (let ie = 0, {
							length: M
						} = o; ie < M; ie++) {
						let O = o[ie],
							q = za(u, O, A.config),
							Z = (za(u, O, N.config) - q) * Q + q;
						W[O] = Z
					}
				} return (0, ht.merge)(e, {
				position: _,
				current: W
			})
		}, UD = (e, t) => {
			let {
				active: r,
				origin: n,
				start: i,
				immediate: o,
				renderType: a,
				verbose: s,
				actionItem: u,
				destination: l,
				destinationKeys: v,
				pluginDuration: d,
				instanceDelay: g,
				customEasingFn: p,
				skipMotion: h
			} = e, b = u.config.easing, {
				duration: T,
				delay: _
			} = u.config;
			d != null && (T = d), _ = g ?? _, a === MD ? T = 0 : (o || h) && (T = _ = 0);
			let {
				now: R
			} = t.payload;
			if (r && n) {
				let A = R - (i + _);
				if (s) {
					let X = R - i,
						j = T + _,
						Q = si(Math.min(Math.max(0, X / j), 1));
					e = (0, ht.set)(e, "verboseTimeElapsed", j * Q)
				}
				if (A < 0) return e;
				let N = si(Math.min(Math.max(0, A / T), 1)),
					P = dm(b, N, p),
					L = {},
					W = null;
				return v.length && (W = v.reduce((X, j) => {
					let Q = l[j],
						ie = parseFloat(n[j]) || 0,
						O = (parseFloat(Q) - ie) * P + ie;
					return X[j] = O, X
				}, {})), L.current = W, L.position = N, N === 1 && (L.active = !1, L.complete = !0), (0, ht.merge)(e, L)
			}
			return e
		}, pm = (e = Object.freeze({}), t) => {
			switch (t.type) {
				case CD:
					return t.payload.ixInstances || Object.freeze({});
				case RD:
					return Object.freeze({});
				case LD: {
					let {
						instanceId: r,
						elementId: n,
						actionItem: i,
						eventId: o,
						eventTarget: a,
						eventStateKey: s,
						actionListId: u,
						groupIndex: l,
						isCarrier: v,
						origin: d,
						destination: g,
						immediate: p,
						verbose: h,
						continuous: b,
						parameterId: T,
						actionGroups: _,
						smoothing: R,
						restingValue: A,
						pluginInstance: N,
						pluginDuration: P,
						instanceDelay: L,
						skipMotion: W,
						skipToValue: X
					} = t.payload, {
						actionTypeId: j
					} = i, Q = DD(j), ie = GD(Q, j), M = Object.keys(g).filter(q => g[q] != null && typeof g[q] != "string"), {
						easing: O
					} = i.config;
					return (0, ht.set)(e, r, {
						id: r,
						elementId: n,
						active: !1,
						position: 0,
						start: 0,
						origin: d,
						destination: g,
						destinationKeys: M,
						immediate: p,
						verbose: h,
						current: null,
						actionItem: i,
						actionTypeId: j,
						eventId: o,
						eventTarget: a,
						eventStateKey: s,
						actionListId: u,
						groupIndex: l,
						renderType: Q,
						isCarrier: v,
						styleProp: ie,
						continuous: b,
						parameterId: T,
						actionGroups: _,
						smoothing: R,
						restingValue: A,
						pluginInstance: N,
						pluginDuration: P,
						instanceDelay: L,
						skipMotion: W,
						skipToValue: X,
						customEasingFn: Array.isArray(O) && O.length === 4 ? FD(O) : void 0
					})
				}
				case ND: {
					let {
						instanceId: r,
						time: n
					} = t.payload;
					return (0, ht.mergeIn)(e, [r], {
						active: !0,
						complete: !1,
						start: n
					})
				}
				case PD: {
					let {
						instanceId: r
					} = t.payload;
					if (!e[r]) return e;
					let n = {},
						i = Object.keys(e),
						{
							length: o
						} = i;
					for (let a = 0; a < o; a++) {
						let s = i[a];
						s !== r && (n[s] = e[s])
					}
					return n
				}
				case qD: {
					let r = e,
						n = Object.keys(e),
						{
							length: i
						} = n;
					for (let o = 0; o < i; o++) {
						let a = n[o],
							s = e[a],
							u = s.continuous ? VD : UD;
						r = (0, ht.set)(r, a, u(s, t))
					}
					return r
				}
				default:
					return e
			}
		}
	});
	var kD, BD, HD, hm, vm = ve(() => {
		"use strict";
		Ve();
		({
			IX2_RAW_DATA_IMPORTED: kD,
			IX2_SESSION_STOPPED: BD,
			IX2_PARAMETER_CHANGED: HD
		} = Te), hm = (e = {}, t) => {
			switch (t.type) {
				case kD:
					return t.payload.ixParameters || {};
				case BD:
					return {};
				case HD: {
					let {
						key: r,
						value: n
					} = t.payload;
					return e[r] = n, e
				}
				default:
					return e
			}
		}
	});
	var Em = {};
	De(Em, {
		default: () => XD
	});
	var mm, ym, WD, XD, bm = ve(() => {
		"use strict";
		mm = le(Ho());
		Lf();
		Zf();
		td();
		ym = le(Mt());
		gm();
		vm();
		({
			ixElements: WD
		} = ym.IX2ElementsReducer), XD = (0, mm.combineReducers)({
			ixData: Rf,
			ixRequest: Qf,
			ixSession: ed,
			ixElements: WD,
			ixInstances: pm,
			ixParameters: hm
		})
	});
	var Im = c((zX, _m) => {
		var jD = _t(),
			zD = we(),
			KD = dt(),
			YD = "[object String]";

		function $D(e) {
			return typeof e == "string" || !zD(e) && KD(e) && jD(e) == YD
		}
		_m.exports = $D
	});
	var wm = c((KX, Tm) => {
		var QD = ma(),
			ZD = QD("length");
		Tm.exports = ZD
	});
	var Om = c((YX, xm) => {
		var JD = "\\ud800-\\udfff",
			e1 = "\\u0300-\\u036f",
			t1 = "\\ufe20-\\ufe2f",
			r1 = "\\u20d0-\\u20ff",
			n1 = e1 + t1 + r1,
			i1 = "\\ufe0e\\ufe0f",
			o1 = "\\u200d",
			a1 = RegExp("[" + o1 + JD + n1 + i1 + "]");

		function s1(e) {
			return a1.test(e)
		}
		xm.exports = s1
	});
	var Fm = c(($X, qm) => {
		var Sm = "\\ud800-\\udfff",
			u1 = "\\u0300-\\u036f",
			c1 = "\\ufe20-\\ufe2f",
			l1 = "\\u20d0-\\u20ff",
			f1 = u1 + c1 + l1,
			d1 = "\\ufe0e\\ufe0f",
			p1 = "[" + Sm + "]",
			Ka = "[" + f1 + "]",
			Ya = "\\ud83c[\\udffb-\\udfff]",
			g1 = "(?:" + Ka + "|" + Ya + ")",
			Cm = "[^" + Sm + "]",
			Rm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
			Lm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
			h1 = "\\u200d",
			Nm = g1 + "?",
			Pm = "[" + d1 + "]?",
			v1 = "(?:" + h1 + "(?:" + [Cm, Rm, Lm].join("|") + ")" + Pm + Nm + ")*",
			m1 = Pm + Nm + v1,
			y1 = "(?:" + [Cm + Ka + "?", Ka, Rm, Lm, p1].join("|") + ")",
			Am = RegExp(Ya + "(?=" + Ya + ")|" + y1 + m1, "g");

		function E1(e) {
			for (var t = Am.lastIndex = 0; Am.test(e);) ++t;
			return t
		}
		qm.exports = E1
	});
	var Dm = c((QX, Mm) => {
		var b1 = wm(),
			_1 = Om(),
			I1 = Fm();

		function T1(e) {
			return _1(e) ? I1(e) : b1(e)
		}
		Mm.exports = T1
	});
	var Vm = c((ZX, Gm) => {
		var w1 = Un(),
			x1 = kn(),
			O1 = Lt(),
			A1 = Im(),
			S1 = Dm(),
			C1 = "[object Map]",
			R1 = "[object Set]";

		function L1(e) {
			if (e == null) return 0;
			if (O1(e)) return A1(e) ? S1(e) : e.length;
			var t = x1(e);
			return t == C1 || t == R1 ? e.size : w1(e).length
		}
		Gm.exports = L1
	});
	var km = c((JX, Um) => {
		var N1 = "Expected a function";

		function P1(e) {
			if (typeof e != "function") throw new TypeError(N1);
			return function() {
				var t = arguments;
				switch (t.length) {
					case 0:
						return !e.call(this);
					case 1:
						return !e.call(this, t[0]);
					case 2:
						return !e.call(this, t[0], t[1]);
					case 3:
						return !e.call(this, t[0], t[1], t[2])
				}
				return !e.apply(this, t)
			}
		}
		Um.exports = P1
	});
	var $a = c((ej, Bm) => {
		var q1 = It(),
			F1 = function() {
				try {
					var e = q1(Object, "defineProperty");
					return e({}, "", {}), e
				} catch {}
			}();
		Bm.exports = F1
	});
	var Qa = c((tj, Wm) => {
		var Hm = $a();

		function M1(e, t, r) {
			t == "__proto__" && Hm ? Hm(e, t, {
				configurable: !0,
				enumerable: !0,
				value: r,
				writable: !0
			}) : e[t] = r
		}
		Wm.exports = M1
	});
	var jm = c((rj, Xm) => {
		var D1 = Qa(),
			G1 = Rn(),
			V1 = Object.prototype,
			U1 = V1.hasOwnProperty;

		function k1(e, t, r) {
			var n = e[t];
			(!(U1.call(e, t) && G1(n, r)) || r === void 0 && !(t in e)) && D1(e, t, r)
		}
		Xm.exports = k1
	});
	var Ym = c((nj, Km) => {
		var B1 = jm(),
			H1 = Gr(),
			W1 = Mn(),
			zm = st(),
			X1 = er();

		function j1(e, t, r, n) {
			if (!zm(e)) return e;
			t = H1(t, e);
			for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
				var u = X1(t[i]),
					l = r;
				if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
				if (i != a) {
					var v = s[u];
					l = n ? n(v, u, s) : void 0, l === void 0 && (l = zm(v) ? v : W1(t[i + 1]) ? [] : {})
				}
				B1(s, u, l), s = s[u]
			}
			return e
		}
		Km.exports = j1
	});
	var Qm = c((ij, $m) => {
		var z1 = Wn(),
			K1 = Ym(),
			Y1 = Gr();

		function $1(e, t, r) {
			for (var n = -1, i = t.length, o = {}; ++n < i;) {
				var a = t[n],
					s = z1(e, a);
				r(s, a) && K1(o, Y1(a, e), s)
			}
			return o
		}
		$m.exports = $1
	});
	var Jm = c((oj, Zm) => {
		var Q1 = qn(),
			Z1 = Ro(),
			J1 = ra(),
			e2 = ta(),
			t2 = Object.getOwnPropertySymbols,
			r2 = t2 ? function(e) {
				for (var t = []; e;) Q1(t, J1(e)), e = Z1(e);
				return t
			} : e2;
		Zm.exports = r2
	});
	var ty = c((aj, ey) => {
		function n2(e) {
			var t = [];
			if (e != null)
				for (var r in Object(e)) t.push(r);
			return t
		}
		ey.exports = n2
	});
	var ny = c((sj, ry) => {
		var i2 = st(),
			o2 = Vn(),
			a2 = ty(),
			s2 = Object.prototype,
			u2 = s2.hasOwnProperty;

		function c2(e) {
			if (!i2(e)) return a2(e);
			var t = o2(e),
				r = [];
			for (var n in e) n == "constructor" && (t || !u2.call(e, n)) || r.push(n);
			return r
		}
		ry.exports = c2
	});
	var oy = c((uj, iy) => {
		var l2 = ia(),
			f2 = ny(),
			d2 = Lt();

		function p2(e) {
			return d2(e) ? l2(e, !0) : f2(e)
		}
		iy.exports = p2
	});
	var sy = c((cj, ay) => {
		var g2 = ea(),
			h2 = Jm(),
			v2 = oy();

		function m2(e) {
			return g2(e, v2, h2)
		}
		ay.exports = m2
	});
	var cy = c((lj, uy) => {
		var y2 = va(),
			E2 = Tt(),
			b2 = Qm(),
			_2 = sy();

		function I2(e, t) {
			if (e == null) return {};
			var r = y2(_2(e), function(n) {
				return [n]
			});
			return t = E2(t), b2(e, r, function(n, i) {
				return t(n, i[0])
			})
		}
		uy.exports = I2
	});
	var fy = c((fj, ly) => {
		var T2 = Tt(),
			w2 = km(),
			x2 = cy();

		function O2(e, t) {
			return x2(e, w2(T2(t)))
		}
		ly.exports = O2
	});
	var py = c((dj, dy) => {
		var A2 = Un(),
			S2 = kn(),
			C2 = Nr(),
			R2 = we(),
			L2 = Lt(),
			N2 = Fn(),
			P2 = Vn(),
			q2 = Gn(),
			F2 = "[object Map]",
			M2 = "[object Set]",
			D2 = Object.prototype,
			G2 = D2.hasOwnProperty;

		function V2(e) {
			if (e == null) return !0;
			if (L2(e) && (R2(e) || typeof e == "string" || typeof e.splice == "function" || N2(e) || q2(e) || C2(e))) return !e.length;
			var t = S2(e);
			if (t == F2 || t == M2) return !e.size;
			if (P2(e)) return !A2(e).length;
			for (var r in e)
				if (G2.call(e, r)) return !1;
			return !0
		}
		dy.exports = V2
	});
	var hy = c((pj, gy) => {
		var U2 = Qa(),
			k2 = Ga(),
			B2 = Tt();

		function H2(e, t) {
			var r = {};
			return t = B2(t, 3), k2(e, function(n, i, o) {
				U2(r, i, t(n, i, o))
			}), r
		}
		gy.exports = H2
	});
	var my = c((gj, vy) => {
		function W2(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
			return e
		}
		vy.exports = W2
	});
	var Ey = c((hj, yy) => {
		var X2 = jn();

		function j2(e) {
			return typeof e == "function" ? e : X2
		}
		yy.exports = j2
	});
	var _y = c((vj, by) => {
		var z2 = my(),
			K2 = Va(),
			Y2 = Ey(),
			$2 = we();

		function Q2(e, t) {
			var r = $2(e) ? z2 : K2;
			return r(e, Y2(t))
		}
		by.exports = Q2
	});
	var Ty = c((mj, Iy) => {
		var Z2 = Qe(),
			J2 = function() {
				return Z2.Date.now()
			};
		Iy.exports = J2
	});
	var Oy = c((yj, xy) => {
		var eG = st(),
			Za = Ty(),
			wy = zn(),
			tG = "Expected a function",
			rG = Math.max,
			nG = Math.min;

		function iG(e, t, r) {
			var n, i, o, a, s, u, l = 0,
				v = !1,
				d = !1,
				g = !0;
			if (typeof e != "function") throw new TypeError(tG);
			t = wy(t) || 0, eG(r) && (v = !!r.leading, d = "maxWait" in r, o = d ? rG(wy(r.maxWait) || 0, t) : o, g = "trailing" in r ? !!r.trailing : g);

			function p(L) {
				var W = n,
					X = i;
				return n = i = void 0, l = L, a = e.apply(X, W), a
			}

			function h(L) {
				return l = L, s = setTimeout(_, t), v ? p(L) : a
			}

			function b(L) {
				var W = L - u,
					X = L - l,
					j = t - W;
				return d ? nG(j, o - X) : j
			}

			function T(L) {
				var W = L - u,
					X = L - l;
				return u === void 0 || W >= t || W < 0 || d && X >= o
			}

			function _() {
				var L = Za();
				if (T(L)) return R(L);
				s = setTimeout(_, b(L))
			}

			function R(L) {
				return s = void 0, g && n ? p(L) : (n = i = void 0, a)
			}

			function A() {
				s !== void 0 && clearTimeout(s), l = 0, n = u = i = s = void 0
			}

			function N() {
				return s === void 0 ? a : R(Za())
			}

			function P() {
				var L = Za(),
					W = T(L);
				if (n = arguments, i = this, u = L, W) {
					if (s === void 0) return h(u);
					if (d) return clearTimeout(s), s = setTimeout(_, t), p(u)
				}
				return s === void 0 && (s = setTimeout(_, t)), a
			}
			return P.cancel = A, P.flush = N, P
		}
		xy.exports = iG
	});
	var Sy = c((Ej, Ay) => {
		var oG = Oy(),
			aG = st(),
			sG = "Expected a function";

		function uG(e, t, r) {
			var n = !0,
				i = !0;
			if (typeof e != "function") throw new TypeError(sG);
			return aG(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), oG(e, t, {
				leading: n,
				maxWait: t,
				trailing: i
			})
		}
		Ay.exports = uG
	});
	var Ry = {};
	De(Ry, {
		actionListPlaybackChanged: () => dr,
		animationFrameChanged: () => li,
		clearRequested: () => PG,
		elementStateChanged: () => as,
		eventListenerAdded: () => ci,
		eventStateChanged: () => ns,
		instanceAdded: () => is,
		instanceRemoved: () => os,
		instanceStarted: () => fi,
		mediaQueriesDefined: () => us,
		parameterChanged: () => fr,
		playbackRequested: () => LG,
		previewRequested: () => RG,
		rawDataImported: () => Ja,
		sessionInitialized: () => es,
		sessionStarted: () => ts,
		sessionStopped: () => rs,
		stopRequested: () => NG,
		testFrameRendered: () => qG,
		viewportWidthChanged: () => ss
	});
	var Cy, cG, lG, fG, dG, pG, gG, hG, vG, mG, yG, EG, bG, _G, IG, TG, wG, xG, OG, AG, SG, CG, Ja, es, ts, rs, RG, LG, NG, PG, ci, qG, ns, li, fr, is, fi, os, as, dr, ss, us, di = ve(() => {
		"use strict";
		Ve();
		Cy = le(Mt()), {
			IX2_RAW_DATA_IMPORTED: cG,
			IX2_SESSION_INITIALIZED: lG,
			IX2_SESSION_STARTED: fG,
			IX2_SESSION_STOPPED: dG,
			IX2_PREVIEW_REQUESTED: pG,
			IX2_PLAYBACK_REQUESTED: gG,
			IX2_STOP_REQUESTED: hG,
			IX2_CLEAR_REQUESTED: vG,
			IX2_EVENT_LISTENER_ADDED: mG,
			IX2_TEST_FRAME_RENDERED: yG,
			IX2_EVENT_STATE_CHANGED: EG,
			IX2_ANIMATION_FRAME_CHANGED: bG,
			IX2_PARAMETER_CHANGED: _G,
			IX2_INSTANCE_ADDED: IG,
			IX2_INSTANCE_STARTED: TG,
			IX2_INSTANCE_REMOVED: wG,
			IX2_ELEMENT_STATE_CHANGED: xG,
			IX2_ACTION_LIST_PLAYBACK_CHANGED: OG,
			IX2_VIEWPORT_WIDTH_CHANGED: AG,
			IX2_MEDIA_QUERIES_DEFINED: SG
		} = Te, {
			reifyState: CG
		} = Cy.IX2VanillaUtils, Ja = e => ({
			type: cG,
			payload: {
				...CG(e)
			}
		}), es = ({
			hasBoundaryNodes: e,
			reducedMotion: t
		}) => ({
			type: lG,
			payload: {
				hasBoundaryNodes: e,
				reducedMotion: t
			}
		}), ts = () => ({
			type: fG
		}), rs = () => ({
			type: dG
		}), RG = ({
			rawData: e,
			defer: t
		}) => ({
			type: pG,
			payload: {
				defer: t,
				rawData: e
			}
		}), LG = ({
			actionTypeId: e = Ge.GENERAL_START_ACTION,
			actionListId: t,
			actionItemId: r,
			eventId: n,
			allowEvents: i,
			immediate: o,
			testManual: a,
			verbose: s,
			rawData: u
		}) => ({
			type: gG,
			payload: {
				actionTypeId: e,
				actionListId: t,
				actionItemId: r,
				testManual: a,
				eventId: n,
				allowEvents: i,
				immediate: o,
				verbose: s,
				rawData: u
			}
		}), NG = e => ({
			type: hG,
			payload: {
				actionListId: e
			}
		}), PG = () => ({
			type: vG
		}), ci = (e, t) => ({
			type: mG,
			payload: {
				target: e,
				listenerParams: t
			}
		}), qG = (e = 1) => ({
			type: yG,
			payload: {
				step: e
			}
		}), ns = (e, t) => ({
			type: EG,
			payload: {
				stateKey: e,
				newState: t
			}
		}), li = (e, t) => ({
			type: bG,
			payload: {
				now: e,
				parameters: t
			}
		}), fr = (e, t) => ({
			type: _G,
			payload: {
				key: e,
				value: t
			}
		}), is = e => ({
			type: IG,
			payload: {
				...e
			}
		}), fi = (e, t) => ({
			type: TG,
			payload: {
				instanceId: e,
				time: t
			}
		}), os = e => ({
			type: wG,
			payload: {
				instanceId: e
			}
		}), as = (e, t, r, n) => ({
			type: xG,
			payload: {
				elementId: e,
				actionTypeId: t,
				current: r,
				actionItem: n
			}
		}), dr = ({
			actionListId: e,
			isPlaying: t
		}) => ({
			type: OG,
			payload: {
				actionListId: e,
				isPlaying: t
			}
		}), ss = ({
			width: e,
			mediaQueries: t
		}) => ({
			type: AG,
			payload: {
				width: e,
				mediaQueries: t
			}
		}), us = () => ({
			type: SG
		})
	});
	var qe = {};
	De(qe, {
		elementContains: () => fs,
		getChildElements: () => WG,
		getClosestElement: () => Yr,
		getProperty: () => VG,
		getQuerySelector: () => ls,
		getRefType: () => ds,
		getSiblingElements: () => XG,
		getStyle: () => GG,
		getValidDocument: () => kG,
		isSiblingNode: () => HG,
		matchSelector: () => UG,
		queryDocument: () => BG,
		setStyle: () => DG
	});

	function DG(e, t, r) {
		e.style[t] = r
	}

	function GG(e, t) {
		return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
	}

	function VG(e, t) {
		return e[t]
	}

	function UG(e) {
		return t => t[cs](e)
	}

	function ls({
		id: e,
		selector: t
	}) {
		if (e) {
			let r = e;
			if (e.indexOf(Ly) !== -1) {
				let n = e.split(Ly),
					i = n[0];
				if (r = n[1], i !== document.documentElement.getAttribute(Py)) return null
			}
			return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
		}
		return t
	}

	function kG(e) {
		return e == null || e === document.documentElement.getAttribute(Py) ? document : null
	}

	function BG(e, t) {
		return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
	}

	function fs(e, t) {
		return e.contains(t)
	}

	function HG(e, t) {
		return e !== t && e.parentNode === t.parentNode
	}

	function WG(e) {
		let t = [];
		for (let r = 0, {
				length: n
			} = e || []; r < n; r++) {
			let {
				children: i
			} = e[r], {
				length: o
			} = i;
			if (o)
				for (let a = 0; a < o; a++) t.push(i[a])
		}
		return t
	}

	function XG(e = []) {
		let t = [],
			r = [];
		for (let n = 0, {
				length: i
			} = e; n < i; n++) {
			let {
				parentNode: o
			} = e[n];
			if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
			r.push(o);
			let a = o.firstElementChild;
			for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
		}
		return t
	}

	function ds(e) {
		return e != null && typeof e == "object" ? e instanceof Element ? FG : MG : null
	}
	var Ny, cs, Ly, FG, MG, Py, Yr, qy = ve(() => {
		"use strict";
		Ny = le(Mt());
		Ve();
		({
			ELEMENT_MATCHES: cs
		} = Ny.IX2BrowserSupport), {
			IX2_ID_DELIMITER: Ly,
			HTML_ELEMENT: FG,
			PLAIN_OBJECT: MG,
			WF_PAGE: Py
		} = Ce;
		Yr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
			if (!document.documentElement.contains(e)) return null;
			let r = e;
			do {
				if (r[cs] && r[cs](t)) return r;
				r = r.parentNode
			} while (r != null);
			return null
		}
	});
	var ps = c((Ij, My) => {
		var jG = st(),
			Fy = Object.create,
			zG = function() {
				function e() {}
				return function(t) {
					if (!jG(t)) return {};
					if (Fy) return Fy(t);
					e.prototype = t;
					var r = new e;
					return e.prototype = void 0, r
				}
			}();
		My.exports = zG
	});
	var pi = c((Tj, Dy) => {
		function KG() {}
		Dy.exports = KG
	});
	var hi = c((wj, Gy) => {
		var YG = ps(),
			$G = pi();

		function gi(e, t) {
			this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
		}
		gi.prototype = YG($G.prototype);
		gi.prototype.constructor = gi;
		Gy.exports = gi
	});
	var By = c((xj, ky) => {
		var Vy = Ht(),
			QG = Nr(),
			ZG = we(),
			Uy = Vy ? Vy.isConcatSpreadable : void 0;

		function JG(e) {
			return ZG(e) || QG(e) || !!(Uy && e && e[Uy])
		}
		ky.exports = JG
	});
	var Xy = c((Oj, Wy) => {
		var eV = qn(),
			tV = By();

		function Hy(e, t, r, n, i) {
			var o = -1,
				a = e.length;
			for (r || (r = tV), i || (i = []); ++o < a;) {
				var s = e[o];
				t > 0 && r(s) ? t > 1 ? Hy(s, t - 1, r, n, i) : eV(i, s) : n || (i[i.length] = s)
			}
			return i
		}
		Wy.exports = Hy
	});
	var zy = c((Aj, jy) => {
		var rV = Xy();

		function nV(e) {
			var t = e == null ? 0 : e.length;
			return t ? rV(e, 1) : []
		}
		jy.exports = nV
	});
	var Yy = c((Sj, Ky) => {
		function iV(e, t, r) {
			switch (r.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, r[0]);
				case 2:
					return e.call(t, r[0], r[1]);
				case 3:
					return e.call(t, r[0], r[1], r[2])
			}
			return e.apply(t, r)
		}
		Ky.exports = iV
	});
	var Zy = c((Cj, Qy) => {
		var oV = Yy(),
			$y = Math.max;

		function aV(e, t, r) {
			return t = $y(t === void 0 ? e.length - 1 : t, 0),
				function() {
					for (var n = arguments, i = -1, o = $y(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
					i = -1;
					for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
					return s[t] = r(a), oV(e, this, s)
				}
		}
		Qy.exports = aV
	});
	var eE = c((Rj, Jy) => {
		function sV(e) {
			return function() {
				return e
			}
		}
		Jy.exports = sV
	});
	var nE = c((Lj, rE) => {
		var uV = eE(),
			tE = $a(),
			cV = jn(),
			lV = tE ? function(e, t) {
				return tE(e, "toString", {
					configurable: !0,
					enumerable: !1,
					value: uV(t),
					writable: !0
				})
			} : cV;
		rE.exports = lV
	});
	var oE = c((Nj, iE) => {
		var fV = 800,
			dV = 16,
			pV = Date.now;

		function gV(e) {
			var t = 0,
				r = 0;
			return function() {
				var n = pV(),
					i = dV - (n - r);
				if (r = n, i > 0) {
					if (++t >= fV) return arguments[0]
				} else t = 0;
				return e.apply(void 0, arguments)
			}
		}
		iE.exports = gV
	});
	var sE = c((Pj, aE) => {
		var hV = nE(),
			vV = oE(),
			mV = vV(hV);
		aE.exports = mV
	});
	var cE = c((qj, uE) => {
		var yV = zy(),
			EV = Zy(),
			bV = sE();

		function _V(e) {
			return bV(EV(e, void 0, yV), e + "")
		}
		uE.exports = _V
	});
	var dE = c((Fj, fE) => {
		var lE = oa(),
			IV = lE && new lE;
		fE.exports = IV
	});
	var gE = c((Mj, pE) => {
		function TV() {}
		pE.exports = TV
	});
	var gs = c((Dj, vE) => {
		var hE = dE(),
			wV = gE(),
			xV = hE ? function(e) {
				return hE.get(e)
			} : wV;
		vE.exports = xV
	});
	var yE = c((Gj, mE) => {
		var OV = {};
		mE.exports = OV
	});
	var hs = c((Vj, bE) => {
		var EE = yE(),
			AV = Object.prototype,
			SV = AV.hasOwnProperty;

		function CV(e) {
			for (var t = e.name + "", r = EE[t], n = SV.call(EE, t) ? r.length : 0; n--;) {
				var i = r[n],
					o = i.func;
				if (o == null || o == e) return i.name
			}
			return t
		}
		bE.exports = CV
	});
	var mi = c((Uj, _E) => {
		var RV = ps(),
			LV = pi(),
			NV = 4294967295;

		function vi(e) {
			this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = NV, this.__views__ = []
		}
		vi.prototype = RV(LV.prototype);
		vi.prototype.constructor = vi;
		_E.exports = vi
	});
	var TE = c((kj, IE) => {
		function PV(e, t) {
			var r = -1,
				n = e.length;
			for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
			return t
		}
		IE.exports = PV
	});
	var xE = c((Bj, wE) => {
		var qV = mi(),
			FV = hi(),
			MV = TE();

		function DV(e) {
			if (e instanceof qV) return e.clone();
			var t = new FV(e.__wrapped__, e.__chain__);
			return t.__actions__ = MV(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
		}
		wE.exports = DV
	});
	var SE = c((Hj, AE) => {
		var GV = mi(),
			OE = hi(),
			VV = pi(),
			UV = we(),
			kV = dt(),
			BV = xE(),
			HV = Object.prototype,
			WV = HV.hasOwnProperty;

		function yi(e) {
			if (kV(e) && !UV(e) && !(e instanceof GV)) {
				if (e instanceof OE) return e;
				if (WV.call(e, "__wrapped__")) return BV(e)
			}
			return new OE(e)
		}
		yi.prototype = VV.prototype;
		yi.prototype.constructor = yi;
		AE.exports = yi
	});
	var RE = c((Wj, CE) => {
		var XV = mi(),
			jV = gs(),
			zV = hs(),
			KV = SE();

		function YV(e) {
			var t = zV(e),
				r = KV[t];
			if (typeof r != "function" || !(t in XV.prototype)) return !1;
			if (e === r) return !0;
			var n = jV(r);
			return !!n && e === n[0]
		}
		CE.exports = YV
	});
	var qE = c((Xj, PE) => {
		var LE = hi(),
			$V = cE(),
			QV = gs(),
			vs = hs(),
			ZV = we(),
			NE = RE(),
			JV = "Expected a function",
			eU = 8,
			tU = 32,
			rU = 128,
			nU = 256;

		function iU(e) {
			return $V(function(t) {
				var r = t.length,
					n = r,
					i = LE.prototype.thru;
				for (e && t.reverse(); n--;) {
					var o = t[n];
					if (typeof o != "function") throw new TypeError(JV);
					if (i && !a && vs(o) == "wrapper") var a = new LE([], !0)
				}
				for (n = a ? n : r; ++n < r;) {
					o = t[n];
					var s = vs(o),
						u = s == "wrapper" ? QV(o) : void 0;
					u && NE(u[0]) && u[1] == (rU | eU | tU | nU) && !u[4].length && u[9] == 1 ? a = a[vs(u[0])].apply(a, u[3]) : a = o.length == 1 && NE(o) ? a[s]() : a.thru(o)
				}
				return function() {
					var l = arguments,
						v = l[0];
					if (a && l.length == 1 && ZV(v)) return a.plant(v).value();
					for (var d = 0, g = r ? t[d].apply(this, l) : v; ++d < r;) g = t[d].call(this, g);
					return g
				}
			})
		}
		PE.exports = iU
	});
	var ME = c((jj, FE) => {
		var oU = qE(),
			aU = oU();
		FE.exports = aU
	});
	var GE = c((zj, DE) => {
		function sU(e, t, r) {
			return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
		}
		DE.exports = sU
	});
	var UE = c((Kj, VE) => {
		var uU = GE(),
			ms = zn();

		function cU(e, t, r) {
			return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = ms(r), r = r === r ? r : 0), t !== void 0 && (t = ms(t), t = t === t ? t : 0), uU(ms(e), t, r)
		}
		VE.exports = cU
	});
	var YE, $E, QE, ZE, lU, fU, dU, pU, gU, hU, vU, mU, yU, EU, bU, _U, IU, TU, wU, JE, eb, xU, OU, AU, tb, SU, CU, rb, RU, ys, nb, kE, BE, ib, Qr, LU, lt, ob, NU, ke, et, Zr, ab, Es, HE, bs, PU, $r, qU, FU, MU, sb, WE, DU, XE, GU, VU, UU, jE, Ei, bi, zE, KE, ub, cb = ve(() => {
		"use strict";
		YE = le(ME()), $E = le(Xn()), QE = le(UE());
		Ve();
		_s();
		di();
		ZE = le(Mt()), {
			MOUSE_CLICK: lU,
			MOUSE_SECOND_CLICK: fU,
			MOUSE_DOWN: dU,
			MOUSE_UP: pU,
			MOUSE_OVER: gU,
			MOUSE_OUT: hU,
			DROPDOWN_CLOSE: vU,
			DROPDOWN_OPEN: mU,
			SLIDER_ACTIVE: yU,
			SLIDER_INACTIVE: EU,
			TAB_ACTIVE: bU,
			TAB_INACTIVE: _U,
			NAVBAR_CLOSE: IU,
			NAVBAR_OPEN: TU,
			MOUSE_MOVE: wU,
			PAGE_SCROLL_DOWN: JE,
			SCROLL_INTO_VIEW: eb,
			SCROLL_OUT_OF_VIEW: xU,
			PAGE_SCROLL_UP: OU,
			SCROLLING_IN_VIEW: AU,
			PAGE_FINISH: tb,
			ECOMMERCE_CART_CLOSE: SU,
			ECOMMERCE_CART_OPEN: CU,
			PAGE_START: rb,
			PAGE_SCROLL: RU
		} = Ze, ys = "COMPONENT_ACTIVE", nb = "COMPONENT_INACTIVE", {
			COLON_DELIMITER: kE
		} = Ce, {
			getNamespacedParameterId: BE
		} = ZE.IX2VanillaUtils, ib = e => t => typeof t == "object" && e(t) ? !0 : t, Qr = ib(({
			element: e,
			nativeEvent: t
		}) => e === t.target), LU = ib(({
			element: e,
			nativeEvent: t
		}) => e.contains(t.target)), lt = (0, YE.default)([Qr, LU]), ob = (e, t) => {
			if (t) {
				let {
					ixData: r
				} = e.getState(), {
					events: n
				} = r, i = n[t];
				if (i && !PU[i.eventTypeId]) return i
			}
			return null
		}, NU = ({
			store: e,
			event: t
		}) => {
			let {
				action: r
			} = t, {
				autoStopEventId: n
			} = r.config;
			return !!ob(e, n)
		}, ke = ({
			store: e,
			event: t,
			element: r,
			eventStateKey: n
		}, i) => {
			let {
				action: o,
				id: a
			} = t, {
				actionListId: s,
				autoStopEventId: u
			} = o.config, l = ob(e, u);
			return l && pr({
				store: e,
				eventId: u,
				eventTarget: r,
				eventStateKey: u + kE + n.split(kE)[1],
				actionListId: (0, $E.default)(l, "action.config.actionListId")
			}), pr({
				store: e,
				eventId: a,
				eventTarget: r,
				eventStateKey: n,
				actionListId: s
			}), Jr({
				store: e,
				eventId: a,
				eventTarget: r,
				eventStateKey: n,
				actionListId: s
			}), i
		}, et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, Zr = {
			handler: et(lt, ke)
		}, ab = {
			...Zr,
			types: [ys, nb].join(" ")
		}, Es = [{
			target: window,
			types: "resize orientationchange",
			throttle: !0
		}, {
			target: document,
			types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
			throttle: !0
		}], HE = "mouseover mouseout", bs = {
			types: Es
		}, PU = {
			PAGE_START: rb,
			PAGE_FINISH: tb
		}, $r = (() => {
			let e = window.pageXOffset !== void 0,
				r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
			return () => ({
				scrollLeft: e ? window.pageXOffset : r.scrollLeft,
				scrollTop: e ? window.pageYOffset : r.scrollTop,
				stiffScrollTop: (0, QE.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
				scrollWidth: r.scrollWidth,
				scrollHeight: r.scrollHeight,
				clientWidth: r.clientWidth,
				clientHeight: r.clientHeight,
				innerWidth: window.innerWidth,
				innerHeight: window.innerHeight
			})
		})(), qU = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), FU = ({
			element: e,
			nativeEvent: t
		}) => {
			let {
				type: r,
				target: n,
				relatedTarget: i
			} = t, o = e.contains(n);
			if (r === "mouseover" && o) return !0;
			let a = e.contains(i);
			return !!(r === "mouseout" && o && a)
		}, MU = e => {
			let {
				element: t,
				event: {
					config: r
				}
			} = e, {
				clientWidth: n,
				clientHeight: i
			} = $r(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
			return qU(t.getBoundingClientRect(), {
				left: 0,
				top: u,
				right: n,
				bottom: i - u
			})
		}, sb = e => (t, r) => {
			let {
				type: n
			} = t.nativeEvent, i = [ys, nb].indexOf(n) !== -1 ? n === ys : r.isActive, o = {
				...r,
				isActive: i
			};
			return (!r || o.isActive !== r.isActive) && e(t, o) || o
		}, WE = e => (t, r) => {
			let n = {
				elementHovered: FU(t)
			};
			return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
		}, DU = e => (t, r) => {
			let n = {
				...r,
				elementVisible: MU(t)
			};
			return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
		}, XE = e => (t, r = {}) => {
			let {
				stiffScrollTop: n,
				scrollHeight: i,
				innerHeight: o
			} = $r(), {
				event: {
					config: a,
					eventTypeId: s
				}
			} = t, {
				scrollOffsetValue: u,
				scrollOffsetUnit: l
			} = a, v = l === "PX", d = i - o, g = Number((n / d).toFixed(2));
			if (r && r.percentTop === g) return r;
			let p = (v ? u : o * (u || 0) / 100) / d,
				h, b, T = 0;
			r && (h = g > r.percentTop, b = r.scrollingDown !== h, T = b ? g : r.anchorTop);
			let _ = s === JE ? g >= T + p : g <= T - p,
				R = {
					...r,
					percentTop: g,
					inBounds: _,
					anchorTop: T,
					scrollingDown: h
				};
			return r && _ && (b || R.inBounds !== r.inBounds) && e(t, R) || R
		}, GU = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, VU = e => (t, r) => {
			let n = {
				finished: document.readyState === "complete"
			};
			return n.finished && !(r && r.finshed) && e(t), n
		}, UU = e => (t, r) => {
			let n = {
				started: !0
			};
			return r || e(t), n
		}, jE = e => (t, r = {
			clickCount: 0
		}) => {
			let n = {
				clickCount: r.clickCount % 2 + 1
			};
			return n.clickCount !== r.clickCount && e(t, n) || n
		}, Ei = (e = !0) => ({
			...ab,
			handler: et(e ? lt : Qr, sb((t, r) => r.isActive ? Zr.handler(t, r) : r))
		}), bi = (e = !0) => ({
			...ab,
			handler: et(e ? lt : Qr, sb((t, r) => r.isActive ? r : Zr.handler(t, r)))
		}), zE = {
			...bs,
			handler: DU((e, t) => {
				let {
					elementVisible: r
				} = t, {
					event: n,
					store: i
				} = e, {
					ixData: o
				} = i.getState(), {
					events: a
				} = o;
				return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === eb === r ? (ke(e), {
					...t,
					triggered: !0
				}) : t
			})
		}, KE = .05, ub = {
			[yU]: Ei(),
			[EU]: bi(),
			[mU]: Ei(),
			[vU]: bi(),
			[TU]: Ei(!1),
			[IU]: bi(!1),
			[bU]: Ei(),
			[_U]: bi(),
			[CU]: {
				types: "ecommerce-cart-open",
				handler: et(lt, ke)
			},
			[SU]: {
				types: "ecommerce-cart-close",
				handler: et(lt, ke)
			},
			[lU]: {
				types: "click",
				handler: et(lt, jE((e, {
					clickCount: t
				}) => {
					NU(e) ? t === 1 && ke(e) : ke(e)
				}))
			},
			[fU]: {
				types: "click",
				handler: et(lt, jE((e, {
					clickCount: t
				}) => {
					t === 2 && ke(e)
				}))
			},
			[dU]: {
				...Zr,
				types: "mousedown"
			},
			[pU]: {
				...Zr,
				types: "mouseup"
			},
			[gU]: {
				types: HE,
				handler: et(lt, WE((e, t) => {
					t.elementHovered && ke(e)
				}))
			},
			[hU]: {
				types: HE,
				handler: et(lt, WE((e, t) => {
					t.elementHovered || ke(e)
				}))
			},
			[wU]: {
				types: "mousemove mouseout scroll",
				handler: ({
					store: e,
					element: t,
					eventConfig: r,
					nativeEvent: n,
					eventStateKey: i
				}, o = {
					clientX: 0,
					clientY: 0,
					pageX: 0,
					pageY: 0
				}) => {
					let {
						basedOn: a,
						selectedAxis: s,
						continuousParameterGroupId: u,
						reverse: l,
						restingState: v = 0
					} = r, {
						clientX: d = o.clientX,
						clientY: g = o.clientY,
						pageX: p = o.pageX,
						pageY: h = o.pageY
					} = n, b = s === "X_AXIS", T = n.type === "mouseout", _ = v / 100, R = u, A = !1;
					switch (a) {
						case at.VIEWPORT: {
							_ = b ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
							break
						}
						case at.PAGE: {
							let {
								scrollLeft: N,
								scrollTop: P,
								scrollWidth: L,
								scrollHeight: W
							} = $r();
							_ = b ? Math.min(N + p, L) / L : Math.min(P + h, W) / W;
							break
						}
						case at.ELEMENT:
						default: {
							R = BE(i, u);
							let N = n.type.indexOf("mouse") === 0;
							if (N && lt({
									element: t,
									nativeEvent: n
								}) !== !0) break;
							let P = t.getBoundingClientRect(),
								{
									left: L,
									top: W,
									width: X,
									height: j
								} = P;
							if (!N && !GU({
									left: d,
									top: g
								}, P)) break;
							A = !0, _ = b ? (d - L) / X : (g - W) / j;
							break
						}
					}
					return T && (_ > 1 - KE || _ < KE) && (_ = Math.round(_)), (a !== at.ELEMENT || A || A !== o.elementHovered) && (_ = l ? 1 - _ : _, e.dispatch(fr(R, _))), {
						elementHovered: A,
						clientX: d,
						clientY: g,
						pageX: p,
						pageY: h
					}
				}
			},
			[RU]: {
				types: Es,
				handler: ({
					store: e,
					eventConfig: t
				}) => {
					let {
						continuousParameterGroupId: r,
						reverse: n
					} = t, {
						scrollTop: i,
						scrollHeight: o,
						clientHeight: a
					} = $r(), s = i / (o - a);
					s = n ? 1 - s : s, e.dispatch(fr(r, s))
				}
			},
			[AU]: {
				types: Es,
				handler: ({
					element: e,
					store: t,
					eventConfig: r,
					eventStateKey: n
				}, i = {
					scrollPercent: 0
				}) => {
					let {
						scrollLeft: o,
						scrollTop: a,
						scrollWidth: s,
						scrollHeight: u,
						clientHeight: l
					} = $r(), {
						basedOn: v,
						selectedAxis: d,
						continuousParameterGroupId: g,
						startsEntering: p,
						startsExiting: h,
						addEndOffset: b,
						addStartOffset: T,
						addOffsetValue: _ = 0,
						endOffsetValue: R = 0
					} = r, A = d === "X_AXIS";
					if (v === at.VIEWPORT) {
						let N = A ? o / s : a / u;
						return N !== i.scrollPercent && t.dispatch(fr(g, N)), {
							scrollPercent: N
						}
					} else {
						let N = BE(n, g),
							P = e.getBoundingClientRect(),
							L = (T ? _ : 0) / 100,
							W = (b ? R : 0) / 100;
						L = p ? L : 1 - L, W = h ? W : 1 - W;
						let X = P.top + Math.min(P.height * L, l),
							Q = P.top + P.height * W - X,
							ie = Math.min(l + Q, u),
							O = Math.min(Math.max(0, l - X), ie) / ie;
						return O !== i.scrollPercent && t.dispatch(fr(N, O)), {
							scrollPercent: O
						}
					}
				}
			},
			[eb]: zE,
			[xU]: zE,
			[JE]: {
				...bs,
				handler: XE((e, t) => {
					t.scrollingDown && ke(e)
				})
			},
			[OU]: {
				...bs,
				handler: XE((e, t) => {
					t.scrollingDown || ke(e)
				})
			},
			[tb]: {
				types: "readystatechange IX2_PAGE_UPDATE",
				handler: et(Qr, VU(ke))
			},
			[rb]: {
				types: "readystatechange IX2_PAGE_UPDATE",
				handler: et(Qr, UU(ke))
			}
		}
	});
	var Ob = {};
	De(Ob, {
		observeRequests: () => ak,
		startActionGroup: () => Jr,
		startEngine: () => Oi,
		stopActionGroup: () => pr,
		stopAllActionGroups: () => Tb,
		stopEngine: () => Ai
	});

	function ak(e) {
		Dt({
			store: e,
			select: ({
				ixRequest: t
			}) => t.preview,
			onChange: ck
		}), Dt({
			store: e,
			select: ({
				ixRequest: t
			}) => t.playback,
			onChange: lk
		}), Dt({
			store: e,
			select: ({
				ixRequest: t
			}) => t.stop,
			onChange: fk
		}), Dt({
			store: e,
			select: ({
				ixRequest: t
			}) => t.clear,
			onChange: dk
		})
	}

	function sk(e) {
		Dt({
			store: e,
			select: ({
				ixSession: t
			}) => t.mediaQueryKey,
			onChange: () => {
				Ai(e), Eb({
					store: e,
					elementApi: qe
				}), Oi({
					store: e,
					allowEvents: !0
				}), bb()
			}
		})
	}

	function uk(e, t) {
		let r = Dt({
			store: e,
			select: ({
				ixSession: n
			}) => n.tick,
			onChange: n => {
				t(n), r()
			}
		})
	}

	function ck({
		rawData: e,
		defer: t
	}, r) {
		let n = () => {
			Oi({
				store: r,
				rawData: e,
				allowEvents: !0
			}), bb()
		};
		t ? setTimeout(n, 0) : n()
	}

	function bb() {
		document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
	}

	function lk(e, t) {
		let {
			actionTypeId: r,
			actionListId: n,
			actionItemId: i,
			eventId: o,
			allowEvents: a,
			immediate: s,
			testManual: u,
			verbose: l = !0
		} = e, {
			rawData: v
		} = e;
		if (n && i && v && s) {
			let d = v.actionLists[n];
			d && (v = YU({
				actionList: d,
				actionItemId: i,
				rawData: v
			}))
		}
		if (Oi({
				store: t,
				rawData: v,
				allowEvents: a,
				testManual: u
			}), n && r === Ge.GENERAL_START_ACTION || Is(r)) {
			pr({
				store: t,
				actionListId: n
			}), Ib({
				store: t,
				actionListId: n,
				eventId: o
			});
			let d = Jr({
				store: t,
				eventId: o,
				actionListId: n,
				immediate: s,
				verbose: l
			});
			l && d && t.dispatch(dr({
				actionListId: n,
				isPlaying: !s
			}))
		}
	}

	function fk({
		actionListId: e
	}, t) {
		e ? pr({
			store: t,
			actionListId: e
		}) : Tb({
			store: t
		}), Ai(t)
	}

	function dk(e, t) {
		Ai(t), Eb({
			store: t,
			elementApi: qe
		})
	}

	function Oi({
		store: e,
		rawData: t,
		allowEvents: r,
		testManual: n
	}) {
		let {
			ixSession: i
		} = e.getState();
		t && e.dispatch(Ja(t)), i.active || (e.dispatch(es({
			hasBoundaryNodes: !!document.querySelector(Ii),
			reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
		})), r && (yk(e), pk(), e.getState().ixSession.hasDefinedMediaQueries && sk(e)), e.dispatch(ts()), gk(e, n))
	}

	function pk() {
		let {
			documentElement: e
		} = document;
		e.className.indexOf(lb) === -1 && (e.className += ` ${lb}`)
	}

	function gk(e, t) {
		let r = n => {
			let {
				ixSession: i,
				ixParameters: o
			} = e.getState();
			i.active && (e.dispatch(li(n, o)), t ? uk(e, r) : requestAnimationFrame(r))
		};
		r(window.performance.now())
	}

	function Ai(e) {
		let {
			ixSession: t
		} = e.getState();
		if (t.active) {
			let {
				eventListeners: r
			} = t;
			r.forEach(hk), JU(), e.dispatch(rs())
		}
	}

	function hk({
		target: e,
		listenerParams: t
	}) {
		e.removeEventListener.apply(e, t)
	}

	function vk({
		store: e,
		eventStateKey: t,
		eventTarget: r,
		eventId: n,
		eventConfig: i,
		actionListId: o,
		parameterGroup: a,
		smoothing: s,
		restingValue: u
	}) {
		let {
			ixData: l,
			ixSession: v
		} = e.getState(), {
			events: d
		} = l, g = d[n], {
			eventTypeId: p
		} = g, h = {}, b = {}, T = [], {
			continuousActionGroups: _
		} = a, {
			id: R
		} = a;
		$U(p, i) && (R = QU(t, R));
		let A = v.hasBoundaryNodes && r ? Yr(r, Ii) : null;
		_.forEach(N => {
			let {
				keyframe: P,
				actionItems: L
			} = N;
			L.forEach(W => {
				let {
					actionTypeId: X
				} = W, {
					target: j
				} = W.config;
				if (!j) return;
				let Q = j.boundaryMode ? A : null,
					ie = ek(j) + Ts + X;
				if (b[ie] = mk(b[ie], P, W), !h[ie]) {
					h[ie] = !0;
					let {
						config: M
					} = W;
					Ti({
						config: M,
						event: g,
						eventTarget: r,
						elementRoot: Q,
						elementApi: qe
					}).forEach(O => {
						T.push({
							element: O,
							key: ie
						})
					})
				}
			})
		}), T.forEach(({
			element: N,
			key: P
		}) => {
			let L = b[P],
				W = (0, vt.default)(L, "[0].actionItems[0]", {}),
				{
					actionTypeId: X
				} = W,
				j = xi(X) ? xs(X)(N, W) : null,
				Q = ws({
					element: N,
					actionItem: W,
					elementApi: qe
				}, j);
			Os({
				store: e,
				element: N,
				eventId: n,
				actionListId: o,
				actionItem: W,
				destination: Q,
				continuous: !0,
				parameterId: R,
				actionGroups: L,
				smoothing: s,
				restingValue: u,
				pluginInstance: j
			})
		})
	}

	function mk(e = [], t, r) {
		let n = [...e],
			i;
		return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
			keyframe: t,
			actionItems: []
		})), n[i].actionItems.push(r), n
	}

	function yk(e) {
		let {
			ixData: t
		} = e.getState(), {
			eventTypeMap: r
		} = t;
		_b(e), (0, gr.default)(r, (i, o) => {
			let a = ub[o];
			if (!a) {
				console.warn(`IX2 event type not configured: ${o}`);
				return
			}
			wk({
				logic: a,
				store: e,
				events: i
			})
		});
		let {
			ixSession: n
		} = e.getState();
		n.eventListeners.length && bk(e)
	}

	function bk(e) {
		let t = () => {
			_b(e)
		};
		Ek.forEach(r => {
			window.addEventListener(r, t), e.dispatch(ci(window, [r, t]))
		}), t()
	}

	function _b(e) {
		let {
			ixSession: t,
			ixData: r
		} = e.getState(), n = window.innerWidth;
		if (n !== t.viewportWidth) {
			let {
				mediaQueries: i
			} = r;
			e.dispatch(ss({
				width: n,
				mediaQueries: i
			}))
		}
	}

	function wk({
		logic: e,
		store: t,
		events: r
	}) {
		xk(r);
		let {
			types: n,
			handler: i
		} = e, {
			ixData: o
		} = t.getState(), {
			actionLists: a
		} = o, s = _k(r, Tk);
		if (!(0, pb.default)(s)) return;
		(0, gr.default)(s, (d, g) => {
			let p = r[g],
				{
					action: h,
					id: b,
					mediaQueries: T = o.mediaQueryKeys
				} = p,
				{
					actionListId: _
				} = h.config;
			tk(T, o.mediaQueryKeys) || t.dispatch(us()), h.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION && (Array.isArray(p.config) ? p.config : [p.config]).forEach(A => {
				let {
					continuousParameterGroupId: N
				} = A, P = (0, vt.default)(a, `${_}.continuousParameterGroups`, []), L = (0, db.default)(P, ({
					id: j
				}) => j === N), W = (A.smoothing || 0) / 100, X = (A.restingState || 0) / 100;
				L && d.forEach((j, Q) => {
					let ie = b + Ts + Q;
					vk({
						store: t,
						eventStateKey: ie,
						eventTarget: j,
						eventId: b,
						eventConfig: A,
						actionListId: _,
						parameterGroup: L,
						smoothing: W,
						restingValue: X
					})
				})
			}), (h.actionTypeId === Ge.GENERAL_START_ACTION || Is(h.actionTypeId)) && Ib({
				store: t,
				actionListId: _,
				eventId: b
			})
		});
		let u = d => {
				let {
					ixSession: g
				} = t.getState();
				Ik(s, (p, h, b) => {
					let T = r[h],
						_ = g.eventState[b],
						{
							action: R,
							mediaQueries: A = o.mediaQueryKeys
						} = T;
					if (!wi(A, g.mediaQueryKey)) return;
					let N = (P = {}) => {
						let L = i({
							store: t,
							element: p,
							event: T,
							eventConfig: P,
							nativeEvent: d,
							eventStateKey: b
						}, _);
						rk(L, _) || t.dispatch(ns(b, L))
					};
					R.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(T.config) ? T.config : [T.config]).forEach(N) : N()
				})
			},
			l = (0, mb.default)(u, ok),
			v = ({
				target: d = document,
				types: g,
				throttle: p
			}) => {
				g.split(" ").filter(Boolean).forEach(h => {
					let b = p ? l : u;
					d.addEventListener(h, b), t.dispatch(ci(d, [h, b]))
				})
			};
		Array.isArray(n) ? n.forEach(v) : typeof n == "string" && v(e)
	}

	function xk(e) {
		if (!ik) return;
		let t = {},
			r = "";
		for (let n in e) {
			let {
				eventTypeId: i,
				target: o
			} = e[n], a = ls(o);
			t[a] || (i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
		}
		if (r) {
			let n = document.createElement("style");
			n.textContent = r, document.body.appendChild(n)
		}
	}

	function Ib({
		store: e,
		actionListId: t,
		eventId: r
	}) {
		let {
			ixData: n,
			ixSession: i
		} = e.getState(), {
			actionLists: o,
			events: a
		} = n, s = a[r], u = o[t];
		if (u && u.useFirstGroupAsInitialState) {
			let l = (0, vt.default)(u, "actionItemGroups[0].actionItems", []),
				v = (0, vt.default)(s, "mediaQueries", n.mediaQueryKeys);
			if (!wi(v, i.mediaQueryKey)) return;
			l.forEach(d => {
				let {
					config: g,
					actionTypeId: p
				} = d, h = g?.target?.useEventTarget === !0 && g?.target?.objectId == null ? {
					target: s.target,
					targets: s.targets
				} : g, b = Ti({
					config: h,
					event: s,
					elementApi: qe
				}), T = xi(p);
				b.forEach(_ => {
					let R = T ? xs(p)(_, d) : null;
					Os({
						destination: ws({
							element: _,
							actionItem: d,
							elementApi: qe
						}, R),
						immediate: !0,
						store: e,
						element: _,
						eventId: r,
						actionItem: d,
						actionListId: t,
						pluginInstance: R
					})
				})
			})
		}
	}

	function Tb({
		store: e
	}) {
		let {
			ixInstances: t
		} = e.getState();
		(0, gr.default)(t, r => {
			if (!r.continuous) {
				let {
					actionListId: n,
					verbose: i
				} = r;
				As(r, e), i && e.dispatch(dr({
					actionListId: n,
					isPlaying: !1
				}))
			}
		})
	}

	function pr({
		store: e,
		eventId: t,
		eventTarget: r,
		eventStateKey: n,
		actionListId: i
	}) {
		let {
			ixInstances: o,
			ixSession: a
		} = e.getState(), s = a.hasBoundaryNodes && r ? Yr(r, Ii) : null;
		(0, gr.default)(o, u => {
			let l = (0, vt.default)(u, "actionItem.config.target.boundaryMode"),
				v = n ? u.eventStateKey === n : !0;
			if (u.actionListId === i && u.eventId === t && v) {
				if (s && l && !fs(s, u.element)) return;
				As(u, e), u.verbose && e.dispatch(dr({
					actionListId: i,
					isPlaying: !1
				}))
			}
		})
	}

	function Jr({
		store: e,
		eventId: t,
		eventTarget: r,
		eventStateKey: n,
		actionListId: i,
		groupIndex: o = 0,
		immediate: a,
		verbose: s
	}) {
		let {
			ixData: u,
			ixSession: l
		} = e.getState(), {
			events: v
		} = u, d = v[t] || {}, {
			mediaQueries: g = u.mediaQueryKeys
		} = d, p = (0, vt.default)(u, `actionLists.${i}`, {}), {
			actionItemGroups: h,
			useFirstGroupAsInitialState: b
		} = p;
		if (!h || !h.length) return !1;
		o >= h.length && (0, vt.default)(d, "config.loop") && (o = 0), o === 0 && b && o++;
		let _ = (o === 0 || o === 1 && b) && Is(d.action?.actionTypeId) ? d.config.delay : void 0,
			R = (0, vt.default)(h, [o, "actionItems"], []);
		if (!R.length || !wi(g, l.mediaQueryKey)) return !1;
		let A = l.hasBoundaryNodes && r ? Yr(r, Ii) : null,
			N = jU(R),
			P = !1;
		return R.forEach((L, W) => {
			let {
				config: X,
				actionTypeId: j
			} = L, Q = xi(j), {
				target: ie
			} = X;
			if (!ie) return;
			let M = ie.boundaryMode ? A : null;
			Ti({
				config: X,
				event: d,
				eventTarget: r,
				elementRoot: M,
				elementApi: qe
			}).forEach((q, B) => {
				let D = Q ? xs(j)(q, L) : null,
					Z = Q ? nk(j)(q, L) : null;
				P = !0;
				let re = N === W && B === 0,
					F = zU({
						element: q,
						actionItem: L
					}),
					G = ws({
						element: q,
						actionItem: L,
						elementApi: qe
					}, D);
				Os({
					store: e,
					element: q,
					actionItem: L,
					eventId: t,
					eventTarget: r,
					eventStateKey: n,
					actionListId: i,
					groupIndex: o,
					isCarrier: re,
					computedStyle: F,
					destination: G,
					immediate: a,
					verbose: s,
					pluginInstance: D,
					pluginDuration: Z,
					instanceDelay: _
				})
			})
		}), P
	}

	function Os(e) {
		let {
			store: t,
			computedStyle: r,
			...n
		} = e, {
			element: i,
			actionItem: o,
			immediate: a,
			pluginInstance: s,
			continuous: u,
			restingValue: l,
			eventId: v
		} = n, d = !u, g = WU(), {
			ixElements: p,
			ixSession: h,
			ixData: b
		} = t.getState(), T = HU(p, i), {
			refState: _
		} = p[T] || {}, R = ds(i), A = h.reducedMotion && jo[o.actionTypeId], N;
		if (A && u) switch (b.events[v]?.eventTypeId) {
			case Ze.MOUSE_MOVE:
			case Ze.MOUSE_MOVE_IN_VIEWPORT:
				N = l;
				break;
			default:
				N = .5;
				break
		}
		let P = KU(i, _, r, o, qe, s);
		if (t.dispatch(is({
				instanceId: g,
				elementId: T,
				origin: P,
				refType: R,
				skipMotion: A,
				skipToValue: N,
				...n
			})), wb(document.body, "ix2-animation-started", g), a) {
			Ok(t, g);
			return
		}
		Dt({
			store: t,
			select: ({
				ixInstances: L
			}) => L[g],
			onChange: xb
		}), d && t.dispatch(fi(g, h.tick))
	}

	function As(e, t) {
		wb(document.body, "ix2-animation-stopping", {
			instanceId: e.id,
			state: t.getState()
		});
		let {
			elementId: r,
			actionItem: n
		} = e, {
			ixElements: i
		} = t.getState(), {
			ref: o,
			refType: a
		} = i[r] || {};
		a === yb && ZU(o, n, qe), t.dispatch(os(e.id))
	}

	function wb(e, t, r) {
		let n = document.createEvent("CustomEvent");
		n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
	}

	function Ok(e, t) {
		let {
			ixParameters: r
		} = e.getState();
		e.dispatch(fi(t, 0)), e.dispatch(li(performance.now(), r));
		let {
			ixInstances: n
		} = e.getState();
		xb(n[t], e)
	}

	function xb(e, t) {
		let {
			active: r,
			continuous: n,
			complete: i,
			elementId: o,
			actionItem: a,
			actionTypeId: s,
			renderType: u,
			current: l,
			groupIndex: v,
			eventId: d,
			eventTarget: g,
			eventStateKey: p,
			actionListId: h,
			isCarrier: b,
			styleProp: T,
			verbose: _,
			pluginInstance: R
		} = e, {
			ixData: A,
			ixSession: N
		} = t.getState(), {
			events: P
		} = A, L = P[d] || {}, {
			mediaQueries: W = A.mediaQueryKeys
		} = L;
		if (wi(W, N.mediaQueryKey) && (n || r || i)) {
			if (l || u === BU && i) {
				t.dispatch(as(o, s, l, a));
				let {
					ixElements: X
				} = t.getState(), {
					ref: j,
					refType: Q,
					refState: ie
				} = X[o] || {}, M = ie && ie[s];
				(Q === yb || xi(s)) && XU(j, ie, M, d, a, T, qe, u, R)
			}
			if (i) {
				if (b) {
					let X = Jr({
						store: t,
						eventId: d,
						eventTarget: g,
						eventStateKey: p,
						actionListId: h,
						groupIndex: v + 1,
						verbose: _
					});
					_ && !X && t.dispatch(dr({
						actionListId: h,
						isPlaying: !1
					}))
				}
				As(e, t)
			}
		}
	}
	var db, vt, pb, gb, hb, vb, gr, mb, _i, kU, Is, Ts, Ii, yb, BU, lb, Ti, HU, ws, Dt, WU, XU, Eb, jU, zU, KU, YU, $U, QU, wi, ZU, JU, ek, tk, rk, xi, xs, nk, fb, ik, ok, Ek, _k, Ik, Tk, _s = ve(() => {
		"use strict";
		db = le(_a()), vt = le(Xn()), pb = le(Vm()), gb = le(fy()), hb = le(py()), vb = le(hy()), gr = le(_y()), mb = le(Sy());
		Ve();
		_i = le(Mt());
		di();
		qy();
		cb();
		kU = Object.keys(Tn), Is = e => kU.includes(e), {
			COLON_DELIMITER: Ts,
			BOUNDARY_SELECTOR: Ii,
			HTML_ELEMENT: yb,
			RENDER_GENERAL: BU,
			W_MOD_IX: lb
		} = Ce, {
			getAffectedElements: Ti,
			getElementId: HU,
			getDestinationValues: ws,
			observeStore: Dt,
			getInstanceId: WU,
			renderHTMLElement: XU,
			clearAllStyles: Eb,
			getMaxDurationItemIndex: jU,
			getComputedStyle: zU,
			getInstanceOrigin: KU,
			reduceListToGroup: YU,
			shouldNamespaceEventParameter: $U,
			getNamespacedParameterId: QU,
			shouldAllowMediaQuery: wi,
			cleanupHTMLElement: ZU,
			clearObjectCache: JU,
			stringifyTarget: ek,
			mediaQueriesEqual: tk,
			shallowEqual: rk
		} = _i.IX2VanillaUtils, {
			isPluginType: xi,
			createPluginInstance: xs,
			getPluginDuration: nk
		} = _i.IX2VanillaPlugins, fb = navigator.userAgent, ik = fb.match(/iPad/i) || fb.match(/iPhone/), ok = 12;
		Ek = ["resize", "orientationchange"];
		_k = (e, t) => (0, gb.default)((0, vb.default)(e, t), hb.default), Ik = (e, t) => {
			(0, gr.default)(e, (r, n) => {
				r.forEach((i, o) => {
					let a = n + Ts + o;
					t(i, n, a)
				})
			})
		}, Tk = e => {
			let t = {
				target: e.target,
				targets: e.targets
			};
			return Ti({
				config: t,
				elementApi: qe
			})
		}
	});
	var Sb = c(mt => {
		"use strict";
		var Ak = ln().default,
			Sk = cu().default;
		Object.defineProperty(mt, "__esModule", {
			value: !0
		});
		mt.actions = void 0;
		mt.destroy = Ab;
		mt.init = Pk;
		mt.setEnv = Nk;
		mt.store = void 0;
		Kl();
		var Ck = Ho(),
			Rk = Sk((bm(), rt(Em))),
			Ss = (_s(), rt(Ob)),
			Lk = Ak((di(), rt(Ry)));
		mt.actions = Lk;
		var Cs = mt.store = (0, Ck.createStore)(Rk.default);

		function Nk(e) {
			e() && (0, Ss.observeRequests)(Cs)
		}

		function Pk(e) {
			Ab(), (0, Ss.startEngine)({
				store: Cs,
				rawData: e,
				allowEvents: !0
			})
		}

		function Ab() {
			(0, Ss.stopEngine)(Cs)
		}
	});
	var Nb = c((nz, Lb) => {
		"use strict";
		var Cb = Be(),
			Rb = Sb();
		Rb.setEnv(Cb.env);
		Cb.define("ix2", Lb.exports = function() {
			return Rb
		})
	});
	var qb = c((iz, Pb) => {
		"use strict";
		var hr = Be();
		hr.define("links", Pb.exports = function(e, t) {
			var r = {},
				n = e(window),
				i, o = hr.env(),
				a = window.location,
				s = document.createElement("a"),
				u = "w--current",
				l = /index\.(html|php)$/,
				v = /\/$/,
				d, g;
			r.ready = r.design = r.preview = p;

			function p() {
				i = o && hr.env("design"), g = hr.env("slug") || a.pathname || "", hr.scroll.off(b), d = [];
				for (var _ = document.links, R = 0; R < _.length; ++R) h(_[R]);
				d.length && (hr.scroll.on(b), b())
			}

			function h(_) {
				if (!_.getAttribute("hreflang")) {
					var R = i && _.getAttribute("href-disabled") || _.getAttribute("href");
					if (s.href = R, !(R.indexOf(":") >= 0)) {
						var A = e(_);
						if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
							if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
							var N = e(s.hash);
							N.length && d.push({
								link: A,
								sec: N,
								active: !1
							});
							return
						}
						if (!(R === "#" || R === "")) {
							var P = s.href === a.href || R === g || l.test(R) && v.test(g);
							T(A, u, P)
						}
					}
				}
			}

			function b() {
				var _ = n.scrollTop(),
					R = n.height();
				t.each(d, function(A) {
					if (!A.link.attr("hreflang")) {
						var N = A.link,
							P = A.sec,
							L = P.offset().top,
							W = P.outerHeight(),
							X = R * .5,
							j = P.is(":visible") && L + W - X >= _ && L + X <= _ + R;
						A.active !== j && (A.active = j, T(N, u, j))
					}
				})
			}

			function T(_, R, A) {
				var N = _.hasClass(R);
				A && N || !A && !N || (A ? _.addClass(R) : _.removeClass(R))
			}
			return r
		})
	});
	var Mb = c((oz, Fb) => {
		"use strict";
		var Si = Be();
		Si.define("scroll", Fb.exports = function(e) {
			var t = {
					WF_CLICK_EMPTY: "click.wf-empty-link",
					WF_CLICK_SCROLL: "click.wf-scroll"
				},
				r = window.location,
				n = h() ? null : window.history,
				i = e(window),
				o = e(document),
				a = e(document.body),
				s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(M) {
					window.setTimeout(M, 15)
				},
				u = Si.env("editor") ? ".w-editor-body" : "body",
				l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
				v = 'a[href="#"]',
				d = 'a[href*="#"]:not(.w-tab-link):not(' + v + ")",
				g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
				p = document.createElement("style");
			p.appendChild(document.createTextNode(g));

			function h() {
				try {
					return !!window.frameElement
				} catch {
					return !0
				}
			}
			var b = /^#[a-zA-Z0-9][\w:.-]*$/;

			function T(M) {
				return b.test(M.hash) && M.host + M.pathname === r.host + r.pathname
			}
			let _ = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

			function R() {
				return document.body.getAttribute("data-wf-scroll-motion") === "none" || _.matches
			}

			function A(M, O) {
				var q;
				switch (O) {
					case "add":
						q = M.attr("tabindex"), q ? M.attr("data-wf-tabindex-swap", q) : M.attr("tabindex", "-1");
						break;
					case "remove":
						q = M.attr("data-wf-tabindex-swap"), q ? (M.attr("tabindex", q), M.removeAttr("data-wf-tabindex-swap")) : M.removeAttr("tabindex");
						break
				}
				M.toggleClass("wf-force-outline-none", O === "add")
			}

			function N(M) {
				var O = M.currentTarget;
				if (!(Si.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(O.className))) {
					var q = T(O) ? O.hash : "";
					if (q !== "") {
						var B = e(q);
						B.length && (M && (M.preventDefault(), M.stopPropagation()), P(q, M), window.setTimeout(function() {
							L(B, function() {
								A(B, "add"), B.get(0).focus({
									preventScroll: !0
								}), A(B, "remove")
							})
						}, M ? 0 : 300))
					}
				}
			}

			function P(M) {
				if (r.hash !== M && n && n.pushState && !(Si.env.chrome && r.protocol === "file:")) {
					var O = n.state && n.state.hash;
					O !== M && n.pushState({
						hash: M
					}, "", M)
				}
			}

			function L(M, O) {
				var q = i.scrollTop(),
					B = W(M);
				if (q !== B) {
					var D = X(M, q, B),
						Z = Date.now(),
						re = function() {
							var F = Date.now() - Z;
							window.scroll(0, j(q, B, F, D)), F <= D ? s(re) : typeof O == "function" && O()
						};
					s(re)
				}
			}

			function W(M) {
				var O = e(l),
					q = O.css("position") === "fixed" ? O.outerHeight() : 0,
					B = M.offset().top - q;
				if (M.data("scroll") === "mid") {
					var D = i.height() - q,
						Z = M.outerHeight();
					Z < D && (B -= Math.round((D - Z) / 2))
				}
				return B
			}

			function X(M, O, q) {
				if (R()) return 0;
				var B = 1;
				return a.add(M).each(function(D, Z) {
					var re = parseFloat(Z.getAttribute("data-scroll-time"));
					!isNaN(re) && re >= 0 && (B = re)
				}), (472.143 * Math.log(Math.abs(O - q) + 125) - 2e3) * B
			}

			function j(M, O, q, B) {
				return q > B ? O : M + (O - M) * Q(q / B)
			}

			function Q(M) {
				return M < .5 ? 4 * M * M * M : (M - 1) * (2 * M - 2) * (2 * M - 2) + 1
			}

			function ie() {
				var {
					WF_CLICK_EMPTY: M,
					WF_CLICK_SCROLL: O
				} = t;
				o.on(O, d, N), o.on(M, v, function(q) {
					q.preventDefault()
				}), document.head.insertBefore(p, document.head.firstChild)
			}
			return {
				ready: ie
			}
		})
	});
	var Gb = c((az, Db) => {
		"use strict";
		var qk = Be();
		qk.define("touch", Db.exports = function(e) {
			var t = {},
				r = window.getSelection;
			e.event.special.tap = {
				bindType: "click",
				delegateType: "click"
			}, t.init = function(o) {
				return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
			};

			function n(o) {
				var a = !1,
					s = !1,
					u = Math.min(Math.round(window.innerWidth * .04), 40),
					l, v;
				o.addEventListener("touchstart", d, !1), o.addEventListener("touchmove", g, !1), o.addEventListener("touchend", p, !1), o.addEventListener("touchcancel", h, !1), o.addEventListener("mousedown", d, !1), o.addEventListener("mousemove", g, !1), o.addEventListener("mouseup", p, !1), o.addEventListener("mouseout", h, !1);

				function d(T) {
					var _ = T.touches;
					_ && _.length > 1 || (a = !0, _ ? (s = !0, l = _[0].clientX) : l = T.clientX, v = l)
				}

				function g(T) {
					if (a) {
						if (s && T.type === "mousemove") {
							T.preventDefault(), T.stopPropagation();
							return
						}
						var _ = T.touches,
							R = _ ? _[0].clientX : T.clientX,
							A = R - v;
						v = R, Math.abs(A) > u && r && String(r()) === "" && (i("swipe", T, {
							direction: A > 0 ? "right" : "left"
						}), h())
					}
				}

				function p(T) {
					if (a && (a = !1, s && T.type === "mouseup")) {
						T.preventDefault(), T.stopPropagation(), s = !1;
						return
					}
				}

				function h() {
					a = !1
				}

				function b() {
					o.removeEventListener("touchstart", d, !1), o.removeEventListener("touchmove", g, !1), o.removeEventListener("touchend", p, !1), o.removeEventListener("touchcancel", h, !1), o.removeEventListener("mousedown", d, !1), o.removeEventListener("mousemove", g, !1), o.removeEventListener("mouseup", p, !1), o.removeEventListener("mouseout", h, !1), o = null
				}
				this.destroy = b
			}

			function i(o, a, s) {
				var u = e.Event(o, {
					originalEvent: a
				});
				e(a.target).trigger(u, s)
			}
			return t.instance = t.init(document), t
		})
	});
	var Vb = c(Rs => {
		"use strict";
		Object.defineProperty(Rs, "__esModule", {
			value: !0
		});
		Rs.default = Fk;

		function Fk(e, t, r, n, i, o, a, s, u, l, v, d, g) {
			return function(p) {
				e(p);
				var h = p.form,
					b = {
						name: h.attr("data-name") || h.attr("name") || "Untitled Form",
						pageId: h.attr("data-wf-page-id") || "",
						elementId: h.attr("data-wf-element-id") || "",
						source: t.href,
						test: r.env(),
						fields: {},
						fileUploads: {},
						dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(h.html()),
						trackingCookies: n()
					};
				let T = h.attr("data-wf-flow");
				T && (b.wfFlow = T), i(p);
				var _ = o(h, b.fields);
				if (_) return a(_);
				if (b.fileUploads = s(h), u(p), !l) {
					v(p);
					return
				}
				d.ajax({
					url: g,
					type: "POST",
					data: b,
					dataType: "json",
					crossDomain: !0
				}).done(function(R) {
					R && R.code === 200 && (p.success = !0), v(p)
				}).fail(function() {
					v(p)
				})
			}
		}
	});
	var kb = c((uz, Ub) => {
		"use strict";
		var Ci = Be();
		Ci.define("forms", Ub.exports = function(e, t) {
			var r = {},
				n = e(document),
				i, o = window.location,
				a = window.XDomainRequest && !window.atob,
				s = ".w-form",
				u, l = /e(-)?mail/i,
				v = /^\S+@\S+$/,
				d = window.alert,
				g = Ci.env(),
				p, h, b, T = /list-manage[1-9]?.com/i,
				_ = t.debounce(function() {
					d("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
				}, 100);
			r.ready = r.design = r.preview = function() {
				R(), !g && !p && N()
			};

			function R() {
				u = e("html").attr("data-wf-site"), h = "https://voiyt.com/api/v1/form/" + u, a && h.indexOf("https://voiyt.com") >= 0 && (h = h.replace("https://voiyt.com", "https://formdata.voiyt.com")), b = `${h}/signFile`, i = e(s + " form"), i.length && i.each(A)
			}

			function A(F, G) {
				var K = e(G),
					m = e.data(G, s);
				m || (m = e.data(G, s, {
					form: K
				})), P(m);
				var I = K.closest("div.w-form");
				m.done = I.find("> .w-form-done"), m.fail = I.find("> .w-form-fail"), m.fileUploads = I.find(".w-file-upload"), m.fileUploads.each(function(ne) {
					D(ne, m)
				});
				var U = m.form.attr("aria-label") || m.form.attr("data-name") || "Form";
				m.done.attr("aria-label") || m.form.attr("aria-label", U), m.done.attr("tabindex", "-1"), m.done.attr("role", "region"), m.done.attr("aria-label") || m.done.attr("aria-label", U + " success"), m.fail.attr("tabindex", "-1"), m.fail.attr("role", "region"), m.fail.attr("aria-label") || m.fail.attr("aria-label", U + " failure");
				var ee = m.action = K.attr("action");
				if (m.handler = null, m.redirect = K.attr("data-redirect"), T.test(ee)) {
					m.handler = O;
					return
				}
				if (!ee) {
					if (u) {
						m.handler = (() => {
							let ne = Vb().default;
							return ne(P, o, Ci, Q, B, W, d, X, L, u, q, e, h)
						})();
						return
					}
					_()
				}
			}

			function N() {
				p = !0, n.on("submit", s + " form", function(ne) {
					var Y = e.data(this, s);
					Y.handler && (Y.evt = ne, Y.handler(Y))
				});
				let F = ".w-checkbox-input",
					G = ".w-radio-input",
					K = "w--redirected-checked",
					m = "w--redirected-focus",
					I = "w--redirected-focus-visible",
					U = ":focus-visible, [data-wf-focus-visible]",
					ee = [
						["checkbox", F],
						["radio", G]
					];
				n.on("change", s + ' form input[type="checkbox"]:not(' + F + ")", ne => {
					e(ne.target).siblings(F).toggleClass(K)
				}), n.on("change", s + ' form input[type="radio"]', ne => {
					e(`input[name="${ne.target.name}"]:not(${F})`).map((J, be) => e(be).siblings(G).removeClass(K));
					let Y = e(ne.target);
					Y.hasClass("w-radio-input") || Y.siblings(G).addClass(K)
				}), ee.forEach(([ne, Y]) => {
					n.on("focus", s + ` form input[type="${ne}"]:not(` + Y + ")", J => {
						e(J.target).siblings(Y).addClass(m), e(J.target).filter(U).siblings(Y).addClass(I)
					}), n.on("blur", s + ` form input[type="${ne}"]:not(` + Y + ")", J => {
						e(J.target).siblings(Y).removeClass(`${m} ${I}`)
					})
				})
			}

			function P(F) {
				var G = F.btn = F.form.find(':input[type="submit"]');
				F.wait = F.btn.attr("data-wait") || null, F.success = !1, G.prop("disabled", !1), F.label && G.val(F.label)
			}

			function L(F) {
				var G = F.btn,
					K = F.wait;
				G.prop("disabled", !0), K && (F.label = G.val(), G.val(K))
			}

			function W(F, G) {
				var K = null;
				return G = G || {}, F.find(':input:not([type="submit"]):not([type="file"])').each(function(m, I) {
					var U = e(I),
						ee = U.attr("type"),
						ne = U.attr("data-name") || U.attr("name") || "Field " + (m + 1);
					ne = encodeURIComponent(ne);
					var Y = U.val();
					if (ee === "checkbox") Y = U.is(":checked");
					else if (ee === "radio") {
						if (G[ne] === null || typeof G[ne] == "string") return;
						Y = F.find('input[name="' + U.attr("name") + '"]:checked').val() || null
					}
					typeof Y == "string" && (Y = e.trim(Y)), G[ne] = Y, K = K || ie(U, ee, ne, Y)
				}), K
			}

			function X(F) {
				var G = {};
				return F.find(':input[type="file"]').each(function(K, m) {
					var I = e(m),
						U = I.attr("data-name") || I.attr("name") || "File " + (K + 1),
						ee = I.attr("data-value");
					typeof ee == "string" && (ee = e.trim(ee)), G[U] = ee
				}), G
			}
			let j = {
				_mkto_trk: "marketo"
			};

			function Q() {
				return document.cookie.split("; ").reduce(function(G, K) {
					let m = K.split("="),
						I = m[0];
					if (I in j) {
						let U = j[I],
							ee = m.slice(1).join("=");
						G[U] = ee
					}
					return G
				}, {})
			}

			function ie(F, G, K, m) {
				var I = null;
				return G === "password" ? I = "Passwords cannot be submitted." : F.attr("required") ? m ? l.test(F.attr("type")) && (v.test(m) || (I = "Please enter a valid email address for: " + K)) : I = "Please fill out the required field: " + K : K === "g-recaptcha-response" && !m && (I = "Please confirm you\u2019re not a robot."), I
			}

			function M(F) {
				B(F), q(F)
			}

			function O(F) {
				P(F);
				var G = F.form,
					K = {};
				if (/^https/.test(o.href) && !/^https/.test(F.action)) {
					G.attr("method", "post");
					return
				}
				B(F);
				var m = W(G, K);
				if (m) return d(m);
				L(F);
				var I;
				t.each(K, function(Y, J) {
					l.test(J) && (K.EMAIL = Y), /^((full[ _-]?)?name)$/i.test(J) && (I = Y), /^(first[ _-]?name)$/i.test(J) && (K.FNAME = Y), /^(last[ _-]?name)$/i.test(J) && (K.LNAME = Y)
				}), I && !K.FNAME && (I = I.split(" "), K.FNAME = I[0], K.LNAME = K.LNAME || I[1]);
				var U = F.action.replace("/post?", "/post-json?") + "&c=?",
					ee = U.indexOf("u=") + 2;
				ee = U.substring(ee, U.indexOf("&", ee));
				var ne = U.indexOf("id=") + 3;
				ne = U.substring(ne, U.indexOf("&", ne)), K["b_" + ee + "_" + ne] = "", e.ajax({
					url: U,
					data: K,
					dataType: "jsonp"
				}).done(function(Y) {
					F.success = Y.result === "success" || /already/.test(Y.msg), F.success || console.info("MailChimp error: " + Y.msg), q(F)
				}).fail(function() {
					q(F)
				})
			}

			function q(F) {
				var G = F.form,
					K = F.redirect,
					m = F.success;
				if (m && K) {
					Ci.location(K);
					return
				}
				F.done.toggle(m), F.fail.toggle(!m), m ? F.done.focus() : F.fail.focus(), G.toggle(!m), P(F)
			}

			function B(F) {
				F.evt && F.evt.preventDefault(), F.evt = null
			}

			function D(F, G) {
				if (!G.fileUploads || !G.fileUploads[F]) return;
				var K, m = e(G.fileUploads[F]),
					I = m.find("> .w-file-upload-default"),
					U = m.find("> .w-file-upload-uploading"),
					ee = m.find("> .w-file-upload-success"),
					ne = m.find("> .w-file-upload-error"),
					Y = I.find(".w-file-upload-input"),
					J = I.find(".w-file-upload-label"),
					be = J.children(),
					se = ne.find(".w-file-upload-error-msg"),
					y = ee.find(".w-file-upload-file"),
					V = ee.find(".w-file-remove-link"),
					z = y.find(".w-file-upload-file-name"),
					H = se.attr("data-w-size-error"),
					fe = se.attr("data-w-type-error"),
					We = se.attr("data-w-generic-error");
				if (g || J.on("click keydown", function(w) {
						w.type === "keydown" && w.which !== 13 && w.which !== 32 || (w.preventDefault(), Y.click())
					}), J.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), V.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), g) Y.on("click", function(w) {
					w.preventDefault()
				}), J.on("click", function(w) {
					w.preventDefault()
				}), be.on("click", function(w) {
					w.preventDefault()
				});
				else {
					V.on("click keydown", function(w) {
						if (w.type === "keydown") {
							if (w.which !== 13 && w.which !== 32) return;
							w.preventDefault()
						}
						Y.removeAttr("data-value"), Y.val(""), z.html(""), I.toggle(!0), ee.toggle(!1), J.focus()
					}), Y.on("change", function(w) {
						K = w.target && w.target.files && w.target.files[0], K && (I.toggle(!1), ne.toggle(!1), U.toggle(!0), U.focus(), z.text(K.name), S() || L(G), G.fileUploads[F].uploading = !0, Z(K, E))
					});
					var Fe = J.outerHeight();
					Y.height(Fe), Y.width(1)
				}

				function f(w) {
					var C = w.responseJSON && w.responseJSON.msg,
						$ = We;
					typeof C == "string" && C.indexOf("InvalidFileTypeError") === 0 ? $ = fe : typeof C == "string" && C.indexOf("MaxFileSizeError") === 0 && ($ = H), se.text($), Y.removeAttr("data-value"), Y.val(""), U.toggle(!1), I.toggle(!0), ne.toggle(!0), ne.focus(), G.fileUploads[F].uploading = !1, S() || P(G)
				}

				function E(w, C) {
					if (w) return f(w);
					var $ = C.fileName,
						oe = C.postData,
						ge = C.fileId,
						k = C.s3Url;
					Y.attr("data-value", ge), re(k, oe, K, $, x)
				}

				function x(w) {
					if (w) return f(w);
					U.toggle(!1), ee.css("display", "inline-block"), ee.focus(), G.fileUploads[F].uploading = !1, S() || P(G)
				}

				function S() {
					var w = G.fileUploads && G.fileUploads.toArray() || [];
					return w.some(function(C) {
						return C.uploading
					})
				}
			}

			function Z(F, G) {
				var K = new URLSearchParams({
					name: F.name,
					size: F.size
				});
				e.ajax({
					type: "GET",
					url: `${b}?${K}`,
					crossDomain: !0
				}).done(function(m) {
					G(null, m)
				}).fail(function(m) {
					G(m)
				})
			}

			function re(F, G, K, m, I) {
				var U = new FormData;
				for (var ee in G) U.append(ee, G[ee]);
				U.append("file", K, m), e.ajax({
					type: "POST",
					url: F,
					data: U,
					processData: !1,
					contentType: !1
				}).done(function() {
					I(null)
				}).fail(function(ne) {
					I(ne)
				})
			}
			return r
		})
	});
	var Wb = c((cz, Hb) => {
		"use strict";
		var Ls = Be(),
			Bb = "w-condition-invisible",
			Mk = "." + Bb;

		function Dk(e) {
			return e.filter(function(t) {
				return !tn(t)
			})
		}

		function tn(e) {
			return !!(e.$el && e.$el.closest(Mk).length)
		}

		function Ns(e, t) {
			for (var r = e; r >= 0; r--)
				if (!tn(t[r])) return r;
			return -1
		}

		function Ps(e, t) {
			for (var r = e; r <= t.length - 1; r++)
				if (!tn(t[r])) return r;
			return -1
		}

		function Gk(e, t) {
			return Ns(e - 1, t) === -1
		}

		function Vk(e, t) {
			return Ps(e + 1, t) === -1
		}

		function en(e, t) {
			e.attr("aria-label") || e.attr("aria-label", t)
		}

		function Uk(e, t, r, n) {
			var i = r.tram,
				o = Array.isArray,
				a = "w-lightbox",
				s = a + "-",
				u = /(^|\s+)/g,
				l = [],
				v, d, g, p = [];

			function h(m, I) {
				return l = o(m) ? m : [m], d || h.build(), Dk(l).length > 1 && (d.items = d.empty, l.forEach(function(U, ee) {
					var ne = G("thumbnail"),
						Y = G("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(ne);
					en(Y, `show item ${ee+1} of ${l.length}`), tn(U) && Y.addClass(Bb), d.items = d.items.add(Y), Q(U.thumbnailUrl || U.url, function(J) {
						J.prop("width") > J.prop("height") ? D(J, "wide") : D(J, "tall"), ne.append(D(J, "thumbnail-image"))
					})
				}), d.strip.empty().append(d.items), D(d.content, "group")), i(Z(d.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
					opacity: 1
				}), D(d.html, "noscroll"), h.show(I || 0)
			}
			h.build = function() {
				return h.destroy(), d = {
					html: r(t.documentElement),
					empty: r()
				}, d.arrowLeft = G("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), d.arrowRight = G("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), d.close = G("control close").attr("role", "button"), en(d.arrowLeft, "previous image"), en(d.arrowRight, "next image"), en(d.close, "close lightbox"), d.spinner = G("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), d.strip = G("strip").attr("role", "tablist"), g = new O(d.spinner, q("hide")), d.content = G("content").append(d.spinner, d.arrowLeft, d.arrowRight, d.close), d.container = G("container").append(d.content, d.strip), d.lightbox = G("backdrop hide").append(d.container), d.strip.on("click", B("item"), A), d.content.on("swipe", N).on("click", B("left"), T).on("click", B("right"), _).on("click", B("close"), R).on("click", B("image, caption"), _), d.container.on("click", B("view"), R).on("dragstart", B("img"), L), d.lightbox.on("keydown", W).on("focusin", P), r(n).append(d.lightbox), h
			}, h.destroy = function() {
				d && (Z(d.html, "noscroll"), d.lightbox.remove(), d = void 0)
			}, h.show = function(m) {
				if (m !== v) {
					var I = l[m];
					if (!I) return h.hide();
					if (tn(I)) {
						if (m < v) {
							var U = Ns(m - 1, l);
							m = U > -1 ? U : m
						} else {
							var ee = Ps(m + 1, l);
							m = ee > -1 ? ee : m
						}
						I = l[m]
					}
					var ne = v;
					v = m, d.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), g.show();
					var Y = I.html && K(I.width, I.height) || I.url;
					return Q(Y, function(J) {
						if (m !== v) return;
						var be = G("figure", "figure").append(D(J, "image")),
							se = G("frame").append(be),
							y = G("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(se),
							V, z;
						I.html && (V = r(I.html), z = V.is("iframe"), z && V.on("load", H), be.append(D(V, "embed"))), I.caption && be.append(G("caption", "figcaption").text(I.caption)), d.spinner.before(y), z || H();

						function H() {
							if (d.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"), g.hide(), m !== v) {
								y.remove();
								return
							}
							let fe = Gk(m, l);
							re(d.arrowLeft, "inactive", fe), F(d.arrowLeft, fe), fe && d.arrowLeft.is(":focus") && d.arrowRight.focus();
							let We = Vk(m, l);
							if (re(d.arrowRight, "inactive", We), F(d.arrowRight, We), We && d.arrowRight.is(":focus") && d.arrowLeft.focus(), d.view ? (i(d.view).add("opacity .3s").start({
									opacity: 0
								}).then(ie(d.view)), i(y).add("opacity .3s").add("transform .3s").set({
									x: m > ne ? "80px" : "-80px"
								}).start({
									opacity: 1,
									x: 0
								})) : y.css("opacity", 1), d.view = y, d.view.prop("tabIndex", 0), d.items) {
								Z(d.items, "active"), d.items.removeAttr("aria-selected");
								var Fe = d.items.eq(m);
								D(Fe, "active"), Fe.attr("aria-selected", !0), M(Fe)
							}
						}
					}), d.close.prop("tabIndex", 0), r(":focus").addClass("active-lightbox"), p.length === 0 && (r("body").children().each(function() {
						r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (p.push({
							node: r(this),
							hidden: r(this).attr("aria-hidden"),
							tabIndex: r(this).attr("tabIndex")
						}), r(this).attr("aria-hidden", !0).attr("tabIndex", -1))
					}), d.close.focus()), h
				}
			}, h.hide = function() {
				return i(d.lightbox).add("opacity .3s").start({
					opacity: 0
				}).then(j), h
			}, h.prev = function() {
				var m = Ns(v - 1, l);
				m > -1 && h.show(m)
			}, h.next = function() {
				var m = Ps(v + 1, l);
				m > -1 && h.show(m)
			};

			function b(m) {
				return function(I) {
					this === I.target && (I.stopPropagation(), I.preventDefault(), m())
				}
			}
			var T = b(h.prev),
				_ = b(h.next),
				R = b(h.hide),
				A = function(m) {
					var I = r(this).index();
					m.preventDefault(), h.show(I)
				},
				N = function(m, I) {
					m.preventDefault(), I.direction === "left" ? h.next() : I.direction === "right" && h.prev()
				},
				P = function() {
					this.focus()
				};

			function L(m) {
				m.preventDefault()
			}

			function W(m) {
				var I = m.keyCode;
				I === 27 || X(I, "close") ? h.hide() : I === 37 || X(I, "left") ? h.prev() : I === 39 || X(I, "right") ? h.next() : X(I, "item") && r(":focus").click()
			}

			function X(m, I) {
				if (m !== 13 && m !== 32) return !1;
				var U = r(":focus").attr("class"),
					ee = q(I).trim();
				return U.includes(ee)
			}

			function j() {
				d && (d.strip.scrollLeft(0).empty(), Z(d.html, "noscroll"), D(d.lightbox, "hide"), d.view && d.view.remove(), Z(d.content, "group"), D(d.arrowLeft, "inactive"), D(d.arrowRight, "inactive"), v = d.view = void 0, p.forEach(function(m) {
					var I = m.node;
					I && (m.hidden ? I.attr("aria-hidden", m.hidden) : I.removeAttr("aria-hidden"), m.tabIndex ? I.attr("tabIndex", m.tabIndex) : I.removeAttr("tabIndex"))
				}), p = [], r(".active-lightbox").removeClass("active-lightbox").focus())
			}

			function Q(m, I) {
				var U = G("img", "img");
				return U.one("load", function() {
					I(U)
				}), U.attr("src", m), U
			}

			function ie(m) {
				return function() {
					m.remove()
				}
			}

			function M(m) {
				var I = m.get(0),
					U = d.strip.get(0),
					ee = I.offsetLeft,
					ne = I.clientWidth,
					Y = U.scrollLeft,
					J = U.clientWidth,
					be = U.scrollWidth - J,
					se;
				ee < Y ? se = Math.max(0, ee + ne - J) : ee + ne > J + Y && (se = Math.min(ee, be)), se != null && i(d.strip).add("scroll-left 500ms").start({
					"scroll-left": se
				})
			}

			function O(m, I, U) {
				this.$element = m, this.className = I, this.delay = U || 200, this.hide()
			}
			O.prototype.show = function() {
				var m = this;
				m.timeoutId || (m.timeoutId = setTimeout(function() {
					m.$element.removeClass(m.className), delete m.timeoutId
				}, m.delay))
			}, O.prototype.hide = function() {
				var m = this;
				if (m.timeoutId) {
					clearTimeout(m.timeoutId), delete m.timeoutId;
					return
				}
				m.$element.addClass(m.className)
			};

			function q(m, I) {
				return m.replace(u, (I ? " ." : " ") + s)
			}

			function B(m) {
				return q(m, !0)
			}

			function D(m, I) {
				return m.addClass(q(I))
			}

			function Z(m, I) {
				return m.removeClass(q(I))
			}

			function re(m, I, U) {
				return m.toggleClass(q(I), U)
			}

			function F(m, I) {
				return m.attr("aria-hidden", I).attr("tabIndex", I ? -1 : 0)
			}

			function G(m, I) {
				return D(r(t.createElement(I || "div")), m)
			}

			function K(m, I) {
				var U = '<svg xmlns="http://www.w3.org/2000/svg" width="' + m + '" height="' + I + '"/>';
				return "data:image/svg+xml;charset=utf-8," + encodeURI(U)
			}
			return function() {
				var m = e.navigator.userAgent,
					I = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
					U = m.match(I),
					ee = m.indexOf("Android ") > -1 && m.indexOf("Chrome") === -1;
				if (!ee && (!U || U[2] > 7)) return;
				var ne = t.createElement("style");
				t.head.appendChild(ne), e.addEventListener("resize", Y, !0);

				function Y() {
					var J = e.innerHeight,
						be = e.innerWidth,
						se = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + J + "px}.w-lightbox-view {width:" + be + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * J + "px}.w-lightbox-image {max-width:" + be + "px;max-height:" + J + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * J + "px}.w-lightbox-strip {padding: 0 " + .01 * J + "px}.w-lightbox-item {width:" + .1 * J + "px;padding:" + .02 * J + "px " + .01 * J + "px}.w-lightbox-thumbnail {height:" + .1 * J + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * J + "px}.w-lightbox-content {margin-top:" + .02 * J + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * J + "px}.w-lightbox-image {max-width:" + .96 * be + "px;max-height:" + .96 * J + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * be + "px;max-height:" + .84 * J + "px}}";
					ne.textContent = se
				}
				Y()
			}(), h
		}
		Ls.define("lightbox", Hb.exports = function(e) {
			var t = {},
				r = Ls.env(),
				n = Uk(window, document, e, r ? "#lightbox-mountpoint" : "body"),
				i = e(document),
				o, a, s = ".w-lightbox",
				u;
			t.ready = t.design = t.preview = l;

			function l() {
				a = r && Ls.env("design"), n.destroy(), u = {}, o = i.find(s), o.webflowLightBox(), o.each(function() {
					en(e(this), "open lightbox"), e(this).attr("aria-haspopup", "dialog")
				})
			}
			jQuery.fn.extend({
				webflowLightBox: function() {
					var p = this;
					e.each(p, function(h, b) {
						var T = e.data(b, s);
						T || (T = e.data(b, s, {
							el: e(b),
							mode: "images",
							images: [],
							embed: ""
						})), T.el.off(s), v(T), a ? T.el.on("setting" + s, v.bind(null, T)) : T.el.on("click" + s, d(T)).on("click" + s, function(_) {
							_.preventDefault()
						})
					})
				}
			});

			function v(p) {
				var h = p.el.children(".w-json").html(),
					b, T;
				if (!h) {
					p.items = [];
					return
				}
				try {
					h = JSON.parse(h)
				} catch (_) {
					console.error("Malformed lightbox JSON configuration.", _)
				}
				g(h), h.items.forEach(function(_) {
					_.$el = p.el
				}), b = h.group, b ? (T = u[b], T || (T = u[b] = []), p.items = T, h.items.length && (p.index = T.length, T.push.apply(T, h.items))) : (p.items = h.items, p.index = 0)
			}

			function d(p) {
				return function() {
					p.items.length && n(p.items, p.index || 0)
				}
			}

			function g(p) {
				p.images && (p.images.forEach(function(h) {
					h.type = "image"
				}), p.items = p.images), p.embed && (p.embed.type = "video", p.items = [p.embed]), p.groupId && (p.group = p.groupId)
			}
			return t
		})
	});
	var jb = c((lz, Xb) => {
		"use strict";
		var Ot = Be(),
			kk = Gi(),
			Se = {
				ARROW_LEFT: 37,
				ARROW_UP: 38,
				ARROW_RIGHT: 39,
				ARROW_DOWN: 40,
				ESCAPE: 27,
				SPACE: 32,
				ENTER: 13,
				HOME: 36,
				END: 35
			};
		Ot.define("navbar", Xb.exports = function(e, t) {
			var r = {},
				n = e.tram,
				i = e(window),
				o = e(document),
				a = t.debounce,
				s, u, l, v, d = Ot.env(),
				g = '<div class="w-nav-overlay" data-wf-ignore />',
				p = ".w-nav",
				h = "w--open",
				b = "w--nav-dropdown-open",
				T = "w--nav-dropdown-toggle-open",
				_ = "w--nav-dropdown-list-open",
				R = "w--nav-link-open",
				A = kk.triggers,
				N = e();
			r.ready = r.design = r.preview = P, r.destroy = function() {
				N = e(), L(), u && u.length && u.each(Q)
			};

			function P() {
				l = d && Ot.env("design"), v = Ot.env("editor"), s = e(document.body), u = o.find(p), u.length && (u.each(j), L(), W())
			}

			function L() {
				Ot.resize.off(X)
			}

			function W() {
				Ot.resize.on(X)
			}

			function X() {
				u.each(I)
			}

			function j(y, V) {
				var z = e(V),
					H = e.data(V, p);
				H || (H = e.data(V, p, {
					open: !1,
					el: z,
					config: {},
					selectedIdx: -1
				})), H.menu = z.find(".w-nav-menu"), H.links = H.menu.find(".w-nav-link"), H.dropdowns = H.menu.find(".w-dropdown"), H.dropdownToggle = H.menu.find(".w-dropdown-toggle"), H.dropdownList = H.menu.find(".w-dropdown-list"), H.button = z.find(".w-nav-button"), H.container = z.find(".w-container"), H.overlayContainerId = "w-nav-overlay-" + y, H.outside = K(H);
				var fe = z.find(".w-nav-brand");
				fe && fe.attr("href") === "/" && fe.attr("aria-label") == null && fe.attr("aria-label", "home"), H.button.attr("style", "-webkit-user-select: text;"), H.button.attr("aria-label") == null && H.button.attr("aria-label", "menu"), H.button.attr("role", "button"), H.button.attr("tabindex", "0"), H.button.attr("aria-controls", H.overlayContainerId), H.button.attr("aria-haspopup", "menu"), H.button.attr("aria-expanded", "false"), H.el.off(p), H.button.off(p), H.menu.off(p), O(H), l ? (ie(H), H.el.on("setting" + p, q(H))) : (M(H), H.button.on("click" + p, F(H)), H.menu.on("click" + p, "a", G(H)), H.button.on("keydown" + p, B(H)), H.el.on("keydown" + p, D(H))), I(y, V)
			}

			function Q(y, V) {
				var z = e.data(V, p);
				z && (ie(z), e.removeData(V, p))
			}

			function ie(y) {
				y.overlay && (se(y, !0), y.overlay.remove(), y.overlay = null)
			}

			function M(y) {
				y.overlay || (y.overlay = e(g).appendTo(y.el), y.overlay.attr("id", y.overlayContainerId), y.parent = y.menu.parent(), se(y, !0))
			}

			function O(y) {
				var V = {},
					z = y.config || {},
					H = V.animation = y.el.attr("data-animation") || "default";
				V.animOver = /^over/.test(H), V.animDirect = /left$/.test(H) ? -1 : 1, z.animation !== H && y.open && t.defer(re, y), V.easing = y.el.attr("data-easing") || "ease", V.easing2 = y.el.attr("data-easing2") || "ease";
				var fe = y.el.attr("data-duration");
				V.duration = fe != null ? Number(fe) : 400, V.docHeight = y.el.attr("data-doc-height"), y.config = V
			}

			function q(y) {
				return function(V, z) {
					z = z || {};
					var H = i.width();
					O(y), z.open === !0 && J(y, !0), z.open === !1 && se(y, !0), y.open && t.defer(function() {
						H !== i.width() && re(y)
					})
				}
			}

			function B(y) {
				return function(V) {
					switch (V.keyCode) {
						case Se.SPACE:
						case Se.ENTER:
							return F(y)(), V.preventDefault(), V.stopPropagation();
						case Se.ESCAPE:
							return se(y), V.preventDefault(), V.stopPropagation();
						case Se.ARROW_RIGHT:
						case Se.ARROW_DOWN:
						case Se.HOME:
						case Se.END:
							return y.open ? (V.keyCode === Se.END ? y.selectedIdx = y.links.length - 1 : y.selectedIdx = 0, Z(y), V.preventDefault(), V.stopPropagation()) : (V.preventDefault(), V.stopPropagation())
					}
				}
			}

			function D(y) {
				return function(V) {
					if (y.open) switch (y.selectedIdx = y.links.index(document.activeElement), V.keyCode) {
						case Se.HOME:
						case Se.END:
							return V.keyCode === Se.END ? y.selectedIdx = y.links.length - 1 : y.selectedIdx = 0, Z(y), V.preventDefault(), V.stopPropagation();
						case Se.ESCAPE:
							return se(y), y.button.focus(), V.preventDefault(), V.stopPropagation();
						case Se.ARROW_LEFT:
						case Se.ARROW_UP:
							return y.selectedIdx = Math.max(-1, y.selectedIdx - 1), Z(y), V.preventDefault(), V.stopPropagation();
						case Se.ARROW_RIGHT:
						case Se.ARROW_DOWN:
							return y.selectedIdx = Math.min(y.links.length - 1, y.selectedIdx + 1), Z(y), V.preventDefault(), V.stopPropagation()
					}
				}
			}

			function Z(y) {
				if (y.links[y.selectedIdx]) {
					var V = y.links[y.selectedIdx];
					V.focus(), G(V)
				}
			}

			function re(y) {
				y.open && (se(y, !0), J(y, !0))
			}

			function F(y) {
				return a(function() {
					y.open ? se(y) : J(y)
				})
			}

			function G(y) {
				return function(V) {
					var z = e(this),
						H = z.attr("href");
					if (!Ot.validClick(V.currentTarget)) {
						V.preventDefault();
						return
					}
					H && H.indexOf("#") === 0 && y.open && se(y)
				}
			}

			function K(y) {
				return y.outside && o.off("click" + p, y.outside),
					function(V) {
						var z = e(V.target);
						v && z.closest(".w-editor-bem-EditorOverlay").length || m(y, z)
					}
			}
			var m = a(function(y, V) {
				if (y.open) {
					var z = V.closest(".w-nav-menu");
					y.menu.is(z) || se(y)
				}
			});

			function I(y, V) {
				var z = e.data(V, p),
					H = z.collapsed = z.button.css("display") !== "none";
				if (z.open && !H && !l && se(z, !0), z.container.length) {
					var fe = ee(z);
					z.links.each(fe), z.dropdowns.each(fe)
				}
				z.open && be(z)
			}
			var U = "max-width";

			function ee(y) {
				var V = y.container.css(U);
				return V === "none" && (V = ""),
					function(z, H) {
						H = e(H), H.css(U, ""), H.css(U) === "none" && H.css(U, V)
					}
			}

			function ne(y, V) {
				V.setAttribute("data-nav-menu-open", "")
			}

			function Y(y, V) {
				V.removeAttribute("data-nav-menu-open")
			}

			function J(y, V) {
				if (y.open) return;
				y.open = !0, y.menu.each(ne), y.links.addClass(R), y.dropdowns.addClass(b), y.dropdownToggle.addClass(T), y.dropdownList.addClass(_), y.button.addClass(h);
				var z = y.config,
					H = z.animation;
				(H === "none" || !n.support.transform || z.duration <= 0) && (V = !0);
				var fe = be(y),
					We = y.menu.outerHeight(!0),
					Fe = y.menu.outerWidth(!0),
					f = y.el.height(),
					E = y.el[0];
				if (I(0, E), A.intro(0, E), Ot.redraw.up(), l || o.on("click" + p, y.outside), V) {
					w();
					return
				}
				var x = "transform " + z.duration + "ms " + z.easing;
				if (y.overlay && (N = y.menu.prev(), y.overlay.show().append(y.menu)), z.animOver) {
					n(y.menu).add(x).set({
						x: z.animDirect * Fe,
						height: fe
					}).start({
						x: 0
					}).then(w), y.overlay && y.overlay.width(Fe);
					return
				}
				var S = f + We;
				n(y.menu).add(x).set({
					y: -S
				}).start({
					y: 0
				}).then(w);

				function w() {
					y.button.attr("aria-expanded", "true")
				}
			}

			function be(y) {
				var V = y.config,
					z = V.docHeight ? o.height() : s.height();
				return V.animOver ? y.menu.height(z) : y.el.css("position") !== "fixed" && (z -= y.el.outerHeight(!0)), y.overlay && y.overlay.height(z), z
			}

			function se(y, V) {
				if (!y.open) return;
				y.open = !1, y.button.removeClass(h);
				var z = y.config;
				if ((z.animation === "none" || !n.support.transform || z.duration <= 0) && (V = !0), A.outro(0, y.el[0]), o.off("click" + p, y.outside), V) {
					n(y.menu).stop(), E();
					return
				}
				var H = "transform " + z.duration + "ms " + z.easing2,
					fe = y.menu.outerHeight(!0),
					We = y.menu.outerWidth(!0),
					Fe = y.el.height();
				if (z.animOver) {
					n(y.menu).add(H).start({
						x: We * z.animDirect
					}).then(E);
					return
				}
				var f = Fe + fe;
				n(y.menu).add(H).start({
					y: -f
				}).then(E);

				function E() {
					y.menu.height(""), n(y.menu).set({
						x: 0,
						y: 0
					}), y.menu.each(Y), y.links.removeClass(R), y.dropdowns.removeClass(b), y.dropdownToggle.removeClass(T), y.dropdownList.removeClass(_), y.overlay && y.overlay.children().length && (N.length ? y.menu.insertAfter(N) : y.menu.prependTo(y.parent), y.overlay.attr("style", "").hide()), y.el.triggerHandler("w-close"), y.button.attr("aria-expanded", "false")
				}
			}
			return r
		})
	});
	zs();
	Ys();
	Qs();
	eu();
	Gi();
	Nb();
	qb();
	Mb();
	Gb();
	kb();
	Wb();
	jb();
})();

Webflow.require('ix2').init({
	"events": {
		"e-9": {
			"id": "e-9",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInTop",
					"autoStopEventId": "e-66"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|76736ec5-2b08-acaf-a91b-04fdb4535eb7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|76736ec5-2b08-acaf-a91b-04fdb4535eb7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "TOP",
				"effectIn": true
			},
			"createdOn": 1711633192325
		},
		"e-11": {
			"id": "e-11",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-74"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|6df50204-501d-c4e8-1305-fea3ff2053ac",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|6df50204-501d-c4e8-1305-fea3ff2053ac",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1711633217858
		},
		"e-13": {
			"id": "e-13",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-88"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|0b44afd5-18b5-f9fd-5e73-438a563e2632",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|0b44afd5-18b5-f9fd-5e73-438a563e2632",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1711633228684
		},
		"e-15": {
			"id": "e-15",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInLeft",
					"autoStopEventId": "e-16"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|669a217e-ddd5-ab14-3aeb-a6b12645171a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|669a217e-ddd5-ab14-3aeb-a6b12645171a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1711633236604
		},
		"e-23": {
			"id": "e-23",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInLeft",
					"autoStopEventId": "e-56"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|ee0fe326-0faf-a6e8-a8bd-8cf0636cbe80",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|ee0fe326-0faf-a6e8-a8bd-8cf0636cbe80",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1698068196857
		},
		"e-25": {
			"id": "e-25",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-88"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|ee0fe326-0faf-a6e8-a8bd-8cf0636cbe83",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|ee0fe326-0faf-a6e8-a8bd-8cf0636cbe83",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1698068206143
		},
		"e-27": {
			"id": "e-27",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-37"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|08f491ae-1ccb-2ba9-6ee0-2ef03fd520ac",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|08f491ae-1ccb-2ba9-6ee0-2ef03fd520ac",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1698068223471
		},
		"e-35": {
			"id": "e-35",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-3",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-36"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|be609a7d-0daa-18c2-1b53-99c64f901bb3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|be609a7d-0daa-18c2-1b53-99c64f901bb3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 10,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1674160443439
		},
		"e-37": {
			"id": "e-37",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-4",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-38"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|be609a7d-0daa-18c2-1b53-99c64f901bbd",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|be609a7d-0daa-18c2-1b53-99c64f901bbd",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 10,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692010882161
		},
		"e-39": {
			"id": "e-39",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-40"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|be609a7d-0daa-18c2-1b53-99c64f901bc8",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|be609a7d-0daa-18c2-1b53-99c64f901bc8",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 10,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1674160450481
		},
		"e-58": {
			"id": "e-58",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-3",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-68"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b58",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b58",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 10,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1691851005003
		},
		"e-60": {
			"id": "e-60",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-14",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-75"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": "._100-cover-image",
				"originalId": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b4d",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": "._100-cover-image",
				"originalId": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b4d",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1691850814840
		},
		"e-61": {
			"id": "e-61",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-59"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b5b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b5b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 10,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1691851017692
		},
		"e-62": {
			"id": "e-62",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-57"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b4f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b4f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 10,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1691850525938
		},
		"e-63": {
			"id": "e-63",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-13",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": "._100-cover-image",
				"originalId": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b4d",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": "._100-cover-image",
				"originalId": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b4d",
				"appliesTo": "CLASS"
			}],
			"config": [{
				"continuousParameterGroupId": "a-13-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "ELEMENT",
				"reverse": false,
				"smoothing": 98,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-13-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "ELEMENT",
				"reverse": false,
				"smoothing": 98,
				"restingState": 50
			}],
			"createdOn": 1691850707116
		},
		"e-65": {
			"id": "e-65",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-3",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-64"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b52",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b52",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 10,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1691850574860
		},
		"e-70": {
			"id": "e-70",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-3",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-67"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b40",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b40",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 10,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1687907346115
		},
		"e-71": {
			"id": "e-71",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-72"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b55",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b55",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 10,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1691850977110
		},
		"e-74": {
			"id": "e-74",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-3",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-73"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b4c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b4c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 10,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1688389429668
		},
		"e-75": {
			"id": "e-75",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-15",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-60"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": "._100-cover-image",
				"originalId": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b4d",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": "._100-cover-image",
				"originalId": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b4d",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1691850814842
		},
		"e-78": {
			"id": "e-78",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-9",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-79"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|8fab874b-f32a-da52-e54c-89572dde4560",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|8fab874b-f32a-da52-e54c-89572dde4560",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1711710922423
		},
		"e-79": {
			"id": "e-79",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-10",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-78"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|8fab874b-f32a-da52-e54c-89572dde4560",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|8fab874b-f32a-da52-e54c-89572dde4560",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1711710922423
		},
		"e-80": {
			"id": "e-80",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInLeft",
					"autoStopEventId": "e-81"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|476afe59-29a6-b7ec-d800-58b552f9b46e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|476afe59-29a6-b7ec-d800-58b552f9b46e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "LEFT",
				"effectIn": true
			},
			"createdOn": 1711713676794
		},
		"e-82": {
			"id": "e-82",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInRight",
					"autoStopEventId": "e-83"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|476afe59-29a6-b7ec-d800-58b552f9b471",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|476afe59-29a6-b7ec-d800-58b552f9b471",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "RIGHT",
				"effectIn": true
			},
			"createdOn": 1711713676794
		},
		"e-84": {
			"id": "e-84",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-85"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|76e4c178-84d3-7f7d-f945-010cd1f417e1",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|76e4c178-84d3-7f7d-f945-010cd1f417e1",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1711721497928
		},
		"e-86": {
			"id": "e-86",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GROW_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "growIn",
					"autoStopEventId": "e-87"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|54dfce34-3f6a-0dc4-441b-ffae05e5e7cd",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|54dfce34-3f6a-0dc4-441b-ffae05e5e7cd",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": null,
				"effectIn": true
			},
			"createdOn": 1711721701852
		},
		"e-88": {
			"id": "e-88",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-16",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-89"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".animation-sponsor-wrapper",
				"originalId": "61d266fc9760811d151b2fc2|40b371e5-5b0e-7f36-c3e2-6f1bb05c9d24",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".animation-sponsor-wrapper",
				"originalId": "61d266fc9760811d151b2fc2|40b371e5-5b0e-7f36-c3e2-6f1bb05c9d24",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1643388924732
		},
		"e-90": {
			"id": "e-90",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInTop",
					"autoStopEventId": "e-91"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|6fd32efd-c88c-0a49-b873-c93802b2d151",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|6fd32efd-c88c-0a49-b873-c93802b2d151",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "TOP",
				"effectIn": true
			},
			"createdOn": 1711964242557
		},
		"e-92": {
			"id": "e-92",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GROW_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "growIn",
					"autoStopEventId": "e-93"
				}
			},
			"mediaQueries": ["small", "tiny"],
			"target": {
				"id": "6602b4202f70e4c906461364|f7350681-b5ce-e7d8-10ab-de2e5019926f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6602b4202f70e4c906461364|f7350681-b5ce-e7d8-10ab-de2e5019926f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": null,
				"effectIn": true
			},
			"createdOn": 1711977612132
		},
		"e-94": {
			"id": "e-94",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-17",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-95"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".links",
				"originalId": "1e8b5ce1-8404-c9e6-78a0-e2de35d76607",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".links",
				"originalId": "1e8b5ce1-8404-c9e6-78a0-e2de35d76607",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1641829256535
		},
		"e-95": {
			"id": "e-95",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-18",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-94"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".links",
				"originalId": "1e8b5ce1-8404-c9e6-78a0-e2de35d76607",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".links",
				"originalId": "1e8b5ce1-8404-c9e6-78a0-e2de35d76607",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1641829256538
		}
	},
	"actionLists": {
		"a-3": {
			"id": "a-3",
			"title": "Load On Scroll 0.3 (Top)",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-3-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "64d39d22477d7b9204310572|f6851da7-5cb5-6e89-332a-4dc71303f382"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-3-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "64d39d22477d7b9204310572|f6851da7-5cb5-6e89-332a-4dc71303f382"
						},
						"xValue": null,
						"yValue": 10,
						"xUnit": "vh",
						"yUnit": "vh",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-3-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 300,
						"easing": "swingFromTo",
						"duration": 1000,
						"target": {
							"useEventTarget": true,
							"id": "64d39d22477d7b9204310572|f6851da7-5cb5-6e89-332a-4dc71303f382"
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-3-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 300,
						"easing": "swingFromTo",
						"duration": 1000,
						"target": {
							"useEventTarget": true,
							"id": "64d39d22477d7b9204310572|f6851da7-5cb5-6e89-332a-4dc71303f382"
						},
						"xValue": null,
						"yValue": 0,
						"xUnit": "vh",
						"yUnit": "vh",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1688388663627
		},
		"a-4": {
			"id": "a-4",
			"title": "Load On Scroll 0.4s (Top)",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-4-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "64d39d22477d7b9204310572|f6851da7-5cb5-6e89-332a-4dc71303f382"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-4-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "64d39d22477d7b9204310572|f6851da7-5cb5-6e89-332a-4dc71303f382"
						},
						"xValue": null,
						"yValue": 10,
						"xUnit": "vh",
						"yUnit": "vh",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-4-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 400,
						"easing": "swingFromTo",
						"duration": 1000,
						"target": {
							"useEventTarget": true,
							"id": "64d39d22477d7b9204310572|f6851da7-5cb5-6e89-332a-4dc71303f382"
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-4-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 400,
						"easing": "swingFromTo",
						"duration": 1000,
						"target": {
							"useEventTarget": true,
							"id": "64d39d22477d7b9204310572|f6851da7-5cb5-6e89-332a-4dc71303f382"
						},
						"xValue": null,
						"yValue": 0,
						"xUnit": "vh",
						"yUnit": "vh",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1688388663627
		},
		"a-5": {
			"id": "a-5",
			"title": "Load On Scroll 0.5 (Top)",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-5-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "64d39d22477d7b9204310572|f6851da7-5cb5-6e89-332a-4dc71303f382"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-5-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "64d39d22477d7b9204310572|f6851da7-5cb5-6e89-332a-4dc71303f382"
						},
						"xValue": null,
						"yValue": 10,
						"xUnit": "vh",
						"yUnit": "vh",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-5-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 500,
						"easing": "swingFromTo",
						"duration": 1000,
						"target": {
							"useEventTarget": true,
							"id": "64d39d22477d7b9204310572|f6851da7-5cb5-6e89-332a-4dc71303f382"
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-5-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 500,
						"easing": "swingFromTo",
						"duration": 1000,
						"target": {
							"useEventTarget": true,
							"id": "64d39d22477d7b9204310572|f6851da7-5cb5-6e89-332a-4dc71303f382"
						},
						"xValue": null,
						"yValue": 0,
						"xUnit": "vh",
						"yUnit": "vh",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1688388663627
		},
		"a-14": {
			"id": "a-14",
			"title": "IMG Hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-14-n",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b4d"
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-14-n-2",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1000,
						"target": {
							"useEventTarget": true,
							"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b4d"
						},
						"xValue": 1.2,
						"yValue": 1.2,
						"locked": true
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1691850818456
		},
		"a-13": {
			"id": "a-13",
			"title": "Water Move",
			"continuousParameterGroups": [{
				"id": "a-13-p",
				"type": "MOUSE_X",
				"parameterLabel": "Mouse X",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-13-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": true,
								"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b4d"
							},
							"xValue": -8,
							"xUnit": "%",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-13-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": true,
								"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b4d"
							},
							"xValue": 8,
							"xUnit": "%",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}]
			}, {
				"id": "a-13-p-2",
				"type": "MOUSE_Y",
				"parameterLabel": "Mouse Y",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-13-n-3",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": true,
								"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b4d"
							},
							"yValue": -8,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-13-n-4",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": true,
								"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b4d"
							},
							"yValue": 8,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1691849490243
		},
		"a-15": {
			"id": "a-15",
			"title": "IMG Hover Out",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-15-n",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1000,
						"target": {
							"useEventTarget": true,
							"id": "6602b4202f70e4c906461364|bdc963ea-011d-7876-8a8b-357183333b4d"
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1691850818456
		},
		"a-9": {
			"id": "a-9",
			"title": "See more text 3",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-9-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".see-less-text",
							"selectorGuids": ["b7556a35-4896-3494-fcb1-93d30d9c04d7"]
						},
						"value": "none"
					}
				}, {
					"id": "a-9-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".se-more-text-div",
							"selectorGuids": ["eec1df3f-5df0-0578-d342-e92b814c9984"]
						},
						"heightValue": 0,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}, {
					"id": "a-9-n-3",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".down-arrow",
							"selectorGuids": ["0b4efb10-0477-20cd-e124-87008c637f3e"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-9-n-4",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".see-more-text",
							"selectorGuids": ["0b4efb10-0477-20cd-e124-87008c637f3d"]
						},
						"value": "none"
					}
				}, {
					"id": "a-9-n-5",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"selector": ".se-more-text-div",
							"selectorGuids": ["eec1df3f-5df0-0578-d342-e92b814c9984"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}, {
					"id": "a-9-n-6",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".see-less-text",
							"selectorGuids": ["b7556a35-4896-3494-fcb1-93d30d9c04d7"]
						},
						"value": "block"
					}
				}, {
					"id": "a-9-n-7",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {
							"selector": ".down-arrow",
							"selectorGuids": ["0b4efb10-0477-20cd-e124-87008c637f3e"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1629369501215
		},
		"a-10": {
			"id": "a-10",
			"title": "See more arrow out 3",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-10-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".see-less-text",
							"selectorGuids": ["b7556a35-4896-3494-fcb1-93d30d9c04d7"]
						},
						"value": "none"
					}
				}, {
					"id": "a-10-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {
							"selector": ".se-more-text-div",
							"selectorGuids": ["eec1df3f-5df0-0578-d342-e92b814c9984"]
						},
						"heightValue": 0,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}, {
					"id": "a-10-n-3",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".down-arrow",
							"selectorGuids": ["0b4efb10-0477-20cd-e124-87008c637f3e"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-10-n-4",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".see-more-text",
							"selectorGuids": ["0b4efb10-0477-20cd-e124-87008c637f3d"]
						},
						"value": "block"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1629369713856
		},
		"a-16": {
			"id": "a-16",
			"title": "Sponsor Animation",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-16-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 30000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".flex-content-footer",
							"selectorGuids": ["ae9f7047-56ec-5591-2ef2-06fea98157b2"]
						},
						"xValue": -200,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-16-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".flex-content-footer",
							"selectorGuids": ["ae9f7047-56ec-5591-2ef2-06fea98157b2"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1643388927854
		},
		"a-17": {
			"id": "a-17",
			"title": "Cursor Hover In 3",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-17-n",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 500,
						"target": {},
						"xValue": 0.7,
						"yValue": 0.7,
						"locked": true
					}
				}, {
					"id": "a-17-n-2",
					"actionTypeId": "STYLE_BACKGROUND_COLOR",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {},
						"globalSwatchId": "",
						"rValue": 0,
						"bValue": 0,
						"gValue": 0,
						"aValue": 0
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1635757932218
		},
		"a-18": {
			"id": "a-18",
			"title": "Cursor Hover Out 3",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-18-n",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 500,
						"target": {},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-18-n-2",
					"actionTypeId": "STYLE_BACKGROUND_COLOR",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {},
						"globalSwatchId": "",
						"rValue": 0,
						"bValue": 0,
						"gValue": 0,
						"aValue": 0
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1635757932218
		},
		"slideInTop": {
			"id": "slideInTop",
			"useFirstGroupAsInitialState": true,
			"actionItemGroups": [{
				"actionItems": [{
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 0
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": 0,
						"yValue": -100,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 1
					}
				}, {
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}]
		},
		"slideInRight": {
			"id": "slideInRight",
			"useFirstGroupAsInitialState": true,
			"actionItemGroups": [{
				"actionItems": [{
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 0
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": 100,
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 1
					}
				}, {
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}]
		},
		"slideInBottom": {
			"id": "slideInBottom",
			"useFirstGroupAsInitialState": true,
			"actionItemGroups": [{
				"actionItems": [{
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 0
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": 0,
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 1
					}
				}]
			}]
		},
		"slideInLeft": {
			"id": "slideInLeft",
			"useFirstGroupAsInitialState": true,
			"actionItemGroups": [{
				"actionItems": [{
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 0
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": -100,
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 1
					}
				}, {
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}]
		},
		"growIn": {
			"id": "growIn",
			"useFirstGroupAsInitialState": true,
			"actionItemGroups": []
		}
	},
	"site": {
		"mediaQueries": [{
			"key": "main",
			"min": 992,
			"max": 10000
		}, {
			"key": "medium",
			"min": 768,
			"max": 991
		}, {
			"key": "small",
			"min": 480,
			"max": 767
		}, {
			"key": "tiny",
			"min": 0,
			"max": 479
		}]
	}
});
