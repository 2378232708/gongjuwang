Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (t[c] = a[c]);
    }
    return t;
}, e = function() {
    function t(t, e) {
        for (var a = 0; a < e.length; a++) {
            var c = e[a];
            c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), 
            Object.defineProperty(t, c.key, c);
        }
    }
    return function(e, a, c) {
        return a && t(e.prototype, a), c && t(e, c), e;
    };
}(), a = new (function() {
    function a() {
        !function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, a);
    }
    return e(a, [ {
        key: "StringToNumber",
        value: function(t) {
            return t ? "string" == typeof t ? parseInt(t) : t : 0;
        }
    }, {
        key: "AccurateAdd",
        value: function(t, e) {
            var a, c = void 0, r = void 0;
            try {
                c = t.toString().split(".")[1].length;
            } catch (t) {
                c = 0;
            }
            try {
                r = e.toString().split(".")[1].length;
            } catch (t) {
                r = 0;
            }
            return (t * (a = Math.pow(10, Math.max(c, r))) + e * a) / a;
        }
    }, {
        key: "AccurateSubtract",
        value: function(t, e) {
            return this.AccurateAdd(t, -e);
        }
    }, {
        key: "AccurateMultiply",
        value: function(t, e) {
            var a = 0, c = t.toString(), r = e.toString();
            try {
                a += c.split(".")[1].length;
            } catch (t) {}
            try {
                a += r.split(".")[1].length;
            } catch (t) {}
            return Number(c.replace(".", "")) * Number(r.replace(".", "")) / Math.pow(10, a);
        }
    }, {
        key: "AccurateVivide",
        value: function(t, e) {
            var a = 0, c = 0;
            try {
                a = t.toString().split(".")[1].length;
            } catch (t) {}
            try {
                c = e.toString().split(".")[1].length;
            } catch (t) {}
            return Number(t.toString().replace(".", "")) / Number(e.toString().replace(".", "")) * Math.pow(10, c - a);
        }
    }, {
        key: "getFloor",
        value: function(t) {
            return Math.round(100 * t) / 100;
        }
    }, {
        key: "getTaxYear",
        value: function(t) {
            var e = void 0, a = void 0;
            return t >= 0 && t <= 36e3 ? (e = .03, a = 0) : t > 36e3 && t <= 144e3 ? (e = .1, 
            a = 2520) : t > 144e3 && t <= 3e5 ? (e = .2, a = 16920) : t > 3e5 && t <= 42e4 ? (e = .25, 
            a = 31920) : t > 42e4 && t <= 66e4 ? (e = .3, a = 52920) : t > 66e4 && t <= 96e4 ? (e = .35, 
            a = 85920) : t > 96e4 && (e = .45, a = 181920), {
                taxRate: e,
                deduction: a
            };
        }
    }, {
        key: "getRealTax",
        value: function(t) {
            var e = void 0, a = void 0;
            return t >= 0 && t < 36e3 ? (e = .03, a = 0) : t >= 36e3 && t <= 144e3 ? (e = .1, 
            a = 2520) : t > 144e3 && t <= 3e5 ? (e = .2, a = 16920) : t > 3e5 && t <= 42e4 ? (e = .25, 
            a = 31920) : t > 42e4 && t <= 66e4 ? (e = .3, a = 52920) : t > 66e4 && t <= 96e4 ? (e = .35, 
            a = 85920) : t > 96e4 && (e = .45, a = 181920), {
                taxRate: e,
                deduction: a
            };
        }
    }, {
        key: "getTax",
        value: function(t) {
            var e = void 0, a = void 0;
            return t >= 0 && t <= 1500 ? (e = .03, a = 0) : t > 1500 && t <= 4500 ? (e = .1, 
            a = 105) : t > 4500 && t <= 9e3 ? (e = .2, a = 555) : t > 9e3 && t <= 35e3 ? (e = .25, 
            a = 1005) : t > 35e3 && t <= 55e3 ? (e = .3, a = 2755) : t > 55e3 && t <= 8e4 ? (e = .35, 
            a = 5505) : t > 8e4 && (e = .45, a = 13505), {
                taxRate: e,
                deduction: a
            };
        }
    }, {
        key: "getRelativeTax",
        value: function(t) {
            var e = void 0, a = void 0;
            return t > 0 && t <= 1455 ? (e = .03, a = 0) : t > 1455 && t <= 4155 ? (e = .1, 
            a = 105) : t > 4155 && t <= 7755 ? (e = .2, a = 555) : t > 7755 && t <= 27255 ? (e = .25, 
            a = 1005) : t > 27255 && t <= 41255 ? (e = .3, a = 2755) : t > 41255 && t <= 57505 ? (e = .35, 
            a = 5505) : t > 57505 && (e = .45, a = 13505), {
                taxRate: e,
                deduction: a
            };
        }
    }, {
        key: "getTaxNew",
        value: function(t) {
            var e = void 0, a = void 0;
            return t >= 0 && t <= 3e3 ? (e = .03, a = 0) : t > 3e3 && t <= 12e3 ? (e = .1, a = 210) : t > 12e3 && t <= 25e3 ? (e = .2, 
            a = 1410) : t > 25e3 && t <= 35e3 ? (e = .25, a = 2660) : t > 35e3 && t <= 55e3 ? (e = .3, 
            a = 4410) : t > 55e3 && t <= 8e4 ? (e = .35, a = 7160) : t > 8e4 && (e = .45, a = 15160), 
            {
                taxRate: e,
                deduction: a
            };
        }
    }, {
        key: "getRelativeTaxNew",
        value: function(t) {
            var e = void 0, a = void 0;
            return t >= 0 && t <= 2910 ? (e = .03, a = 0) : t > 2910 && t <= 11010 ? (e = .1, 
            a = 210) : t > 11010 && t <= 21410 ? (e = .2, a = 1410) : t > 21410 && t <= 28910 ? (e = .25, 
            a = 2660) : t > 28910 && t <= 42910 ? (e = .3, a = 4410) : t > 42910 && t <= 59160 ? (e = .35, 
            a = 7160) : t > 59160 && (e = .45, a = 15160), {
                taxRate: e,
                deduction: a
            };
        }
    }, {
        key: "getRelativeTaxNew1",
        value: function(t) {
            var e = void 0, a = void 0;
            return t >= 0 && t <= 32610 ? (e = .03, a = 0) : t > 32610 && t <= 116610 ? (e = .1, 
            a = 210) : t > 116610 && t <= 227660 ? (e = .2, a = 1410) : t > 227660 && t <= 298410 ? (e = .25, 
            a = 2660) : t > 298410 && t <= 436160 ? (e = .3, a = 4410) : t > 436160 && t <= 543160 ? (e = .35, 
            a = 7160) : t > 543160 && (e = .45, a = 15160), {
                taxRate: e,
                deduction: a
            };
        }
    }, {
        key: "getServiceTax",
        value: function(t) {
            var e = void 0, a = void 0;
            return t > 0 && t <= 2e4 ? (e = .2, a = 0) : t > 2e4 && t <= 5e4 ? (e = .3, a = 2e3) : t > 5e4 && (e = .4, 
            a = 7e3), {
                taxRate: e,
                deduction: a
            };
        }
    }, {
        key: "getServiceRelativeTax",
        value: function(t) {
            var e = void 0, a = void 0;
            return t > 0 && t <= 21e3 ? (e = .2, a = 0) : t > 21e3 && t <= 49500 ? (e = .3, 
            a = 2e3) : t > 49500 && (e = .4, a = 7e3), {
                taxRate: e,
                deduction: a
            };
        }
    }, {
        key: "getLaborAndAllowRelativeTax",
        value: function(t) {
            var e = void 0, a = void 0;
            return t >= 0 && t <= 3660 ? (e = .03, a = 0) : t > 3660 && t <= 14010 ? (e = .1, 
            a = 210) : t > 14010 && t <= 27660 ? (e = .2, a = 1410) : t > 27660 && t <= 37660 ? (e = .25, 
            a = 2660) : t > 37660 && t <= 56660 ? (e = .3, a = 4410) : t > 56660 && t <= 79160 ? (e = .35, 
            a = 7160) : t > 79160 && (e = .45, a = 15160), {
                taxRate: e,
                deduction: a
            };
        }
    }, {
        key: "getRemunerationRelativeTax",
        value: function(t) {
            var e = void 0, a = void 0;
            return t >= 0 && t <= 5267.14 ? (e = .03, a = 0) : t > 5267.14 && t <= 20438.57 ? (e = .1, 
            a = 210) : t > 20438.57 && t <= 41052.86 ? (e = .2, a = 1410) : t > 41052.86 && t <= 56410 ? (e = .25, 
            a = 2660) : t > 56410 && t <= 86124.29 ? (e = .3, a = 4410) : t > 86124.29 && t <= 122017.14 ? (e = .35, 
            a = 7160) : t > 122017.14 && (e = .45, a = 15160), {
                taxRate: e,
                deduction: a
            };
        }
    }, {
        key: "calculationSalary",
        value: function(t, e, a, c, r) {
            var i = 0, u = null, o = null, l = 0, s = 0, h = 0, n = c, A = null, d = r || 0, x = 0;
            if (5e3 != n && (d = 0), 0 == t) {
                if (o = e, x = this.AccurateAdd(n, a), o <= (x = this.AccurateAdd(x, d))) return {
                    preTax: this.getFloor(i),
                    taxRate: 100 * s,
                    deduction: h,
                    money: this.getFloor(this.AccurateSubtract(o, a)),
                    tax: this.getFloor(l),
                    preTaxMoney: this.getFloor(o),
                    special: r
                };
                i = this.AccurateSubtract(e, a), i = this.AccurateSubtract(i, n), i = this.AccurateSubtract(i, d), 
                s = (A = 5e3 == n ? this.getTaxNew(i) : this.getTax(i)).taxRate, h = A.deduction, 
                l = this.AccurateMultiply(i, s), l = this.AccurateSubtract(l, h), u = this.AccurateSubtract(e, l), 
                u = this.AccurateSubtract(u, a);
            } else {
                var y = 0, v = 0;
                if ((u = e) <= (y = this.AccurateAdd(r, n))) return {
                    preTax: this.getFloor(i),
                    taxRate: 100 * s,
                    deduction: h,
                    money: this.getFloor(u),
                    tax: this.getFloor(l),
                    preTaxMoney: this.getFloor(this.AccurateAdd(u, a)),
                    special: r
                };
                s = (A = 5e3 == n ? this.getRelativeTaxNew(this.AccurateSubtract(u, y)) : this.getRelativeTax(this.AccurateSubtract(u, y))).taxRate, 
                h = A.deduction, y = this.AccurateAdd(a, y), y = this.AccurateMultiply(y, s), v = this.AccurateAdd(u, a), 
                v = this.AccurateSubtract(v, y), y = this.AccurateSubtract(v, h), v = this.AccurateSubtract(1, s), 
                o = this.AccurateVivide(y, v), l = this.AccurateSubtract(o, u), l = this.AccurateSubtract(l, a), 
                i = this.AccurateAdd(u, l);
            }
            return {
                preTax: this.getFloor(i),
                taxRate: 100 * s,
                deduction: h,
                money: this.getFloor(u),
                tax: this.getFloor(l),
                preTaxMoney: this.getFloor(o),
                special: r
            };
        }
    }, {
        key: "calculationYearAward",
        value: function(t, e) {
            var a, c, r, i = null, u = null, o = 0, l = 0, s = 0, h = null;
            0 == t ? (u = e, l = (h = this.getTax(this.AccurateVivide(u, 12))).taxRate, s = h.deduction, 
            a = this.AccurateMultiply(u, l), o = this.AccurateSubtract(a, s), i = this.AccurateSubtract(u, o)) : (i = e, 
            l = (h = this.getRelativeTax(this.AccurateVivide(i, 12))).taxRate, s = h.deduction, 
            c = this.AccurateSubtract(i, s), r = this.AccurateSubtract(1, l), u = this.AccurateVivide(c, r), 
            o = this.AccurateSubtract(u, i));
            return {
                taxRate: 100 * l,
                deduction: s,
                money: this.getFloor(i),
                tax: this.getFloor(o),
                preTaxMoney: this.getFloor(u)
            };
        }
    }, {
        key: "calculationService",
        value: function(t, e) {
            var a = 0, c = null, r = null, i = 0, u = 0, o = 0, l = null;
            if ((r = e) <= 800) return {
                taxRate: 100 * u,
                deduction: o,
                money: this.getFloor(r),
                tax: this.getFloor(i),
                preTaxMoney: this.getFloor(r)
            };
            if (0 == t) {
                var s;
                a = (r = e) <= 4e3 ? r - 800 : this.AccurateMultiply(r, .8), u = (l = this.getServiceTax(a)).taxRate, 
                o = l.deduction, s = this.AccurateMultiply(a, u), i = this.AccurateSubtract(s, o), 
                c = this.AccurateSubtract(r, i);
            } else {
                var h = 0, n = 0;
                c = e, u = (l = this.getServiceRelativeTax(c)).taxRate, o = l.deduction, c <= 3360 ? (h = this.AccurateMultiply(800, u), 
                n = this.AccurateSubtract(this.AccurateSubtract(e, h), o), i = (r = this.AccurateVivide(n, this.AccurateSubtract(1, u))) - c) : (h = this.AccurateSubtract(c, o), 
                n = this.AccurateSubtract(1, this.AccurateMultiply(.8, u)), i = (r = this.AccurateVivide(h, n)) - c);
            }
            return {
                taxRate: 100 * u,
                deduction: o,
                money: this.getFloor(c),
                tax: this.getFloor(i),
                preTaxMoney: this.getFloor(r)
            };
        }
    }, {
        key: "calculationCasual",
        value: function(t, e) {
            var a = null, c = null, r = 0, i = 0;
            return 0 == t ? (c = e, i = .2, r = this.AccurateMultiply(c, i), a = this.AccurateSubtract(c, r)) : (a = e, 
            i = .2, c = this.AccurateVivide(a, .8), r = this.AccurateSubtract(c, a)), {
                money: this.getFloor(a),
                tax: this.getFloor(r),
                preTaxMoney: this.getFloor(c),
                taxRate: 100 * this.getFloor(i)
            };
        }
    }, {
        key: "calculationDraft",
        value: function(t, e) {
            var a = 0, c = null, r = null, i = 0;
            if ((r = e) <= 800) return {
                taxRate: 0,
                money: this.getFloor(r),
                tax: this.getFloor(i),
                preTaxMoney: this.getFloor(r)
            };
            if (0 == t) a = (r = e) <= 4e3 && r > 800 ? r - 800 : r > 4e3 ? this.AccurateMultiply(r, .8) : 0, 
            i = this.AccurateMultiply(a, .14), c = this.AccurateSubtract(r, i); else {
                var u = 0;
                (c = e) <= 3552 && c > 800 ? (u = this.AccurateSubtract(c, 112), r = this.AccurateVivide(u, .86)) : r = r > 4e3 ? this.AccurateVivide(c, .888) : c, 
                i = r - c;
            }
            return {
                taxRate: this.getFloor(.14 * 100),
                money: this.getFloor(c),
                tax: this.getFloor(i),
                preTaxMoney: this.getFloor(r)
            };
        }
    }, {
        key: "calculationTransfer",
        value: function(t, e, a, c) {
            var r = null, i = 0, u = 0, o = 0;
            if (e - a - c <= 0) return i = e, {
                money: this.getFloor(e),
                tax: this.getFloor(u),
                preTaxMoney: this.getFloor(i),
                taxRate: 0,
                preTax: this.getFloor(o)
            };
            if (0 === t) {
                var l, s = 0;
                i = e, l = this.AccurateAdd(a, c), (s = this.AccurateSubtract(i, l)) <= 0 && (s = 0), 
                u = this.AccurateMultiply(s, .2), r = this.AccurateSubtract(i, u), o = s;
            } else {
                var h, n;
                r = e, h = this.AccurateMultiply(this.AccurateAdd(a, c), .2), n = this.AccurateSubtract(r, h), 
                i = this.AccurateVivide(n, .8), u = this.AccurateSubtract(i, r), o = this.AccurateSubtract(i, this.AccurateAdd(a, c));
            }
            return {
                money: this.getFloor(r),
                tax: this.getFloor(u),
                preTaxMoney: this.getFloor(i),
                taxRate: 100 * this.getFloor(.2),
                preTax: this.getFloor(o)
            };
        }
    }, {
        key: "calculationUndertake",
        value: function(t, e, a) {
            var c, r, i, u = null, o = null, l = 0, s = 0, h = 0, n = 0;
            0 === t ? ((o = e) <= 15e3 ? (s = .05, h = 0) : o > 15e3 && o <= 3e4 ? (s = .1, 
            h = 750) : o > 3e4 && o <= 6e4 ? (s = .2, h = 3750) : o > 6e4 && o <= 1e5 ? (s = .3, 
            h = 9750) : (s = .35, h = 14750), c = this.AccurateSubtract(e, this.AccurateMultiply(3500, a)), 
            l = this.AccurateSubtract(this.AccurateMultiply(c, s), h), u = this.AccurateSubtract(o, l), 
            n = c, l < 0 && (s = 0, h = 0, l = 0, u = o, n = 0)) : ((u = e) <= 14250 ? (s = .05, 
            h = 0) : u > 14250 && u <= 27750 ? (s = .1, h = 750) : u > 27750 && u <= 51750 ? (s = .2, 
            h = 3750) : u > 51750 && u <= 79750 ? (s = .3, h = 9750) : (s = .35, h = 14750), 
            r = this.AccurateMultiply(this.AccurateMultiply(3500, a), s), i = this.AccurateSubtract(this.AccurateSubtract(u, r), h), 
            o = this.AccurateVivide(i, 1 - s), l = this.AccurateSubtract(o, u), n = this.AccurateSubtract(o, this.AccurateMultiply(3500, a)), 
            l < 0 && (s = 0, h = 0, l = 0, u = o, n = 0));
            return {
                money: this.getFloor(u),
                tax: this.getFloor(l),
                preTaxMoney: this.getFloor(o),
                taxRate: 100 * this.getFloor(s),
                deduction: this.getFloor(h),
                preTax: this.getFloor(n)
            };
        }
    }, {
        key: "calculationContract",
        value: function(t, e, a, c, r) {
            var i, u, o, l = 0, s = 0, h = 0, n = null, A = 0;
            return u = e, o = r >= 12 ? 12 : r, A = this.AccurateMultiply(3, a), A = this.AccurateAdd(A, c), 
            A = this.AccurateSubtract(u, A), A = this.AccurateVivide(A, o), (A = this.AccurateSubtract(A, 5e3)) < 0 ? (A = 0, 
            n = {
                taxRate: 0,
                deduction: 0
            }) : n = this.getTaxNew(A), s = n.taxRate, h = n.deduction, A = this.AccurateMultiply(A, s), 
            A = this.AccurateSubtract(A, h), l = this.AccurateMultiply(A, o), i = this.AccurateSubtract(u, l), 
            (l < 0 || 0 == r) && (l = 0, s = 0, h = 0), {
                money: this.getFloor(i),
                tax: this.getFloor(l),
                preTaxMoney: this.getFloor(u),
                taxRate: 100 * this.getFloor(s),
                deduction: this.getFloor(h),
                workYear: o
            };
        }
    }, {
        key: "calculationIndividual",
        value: function(t, e, a) {
            var c = null, r = null, i = 0, u = 0, o = 0, l = 0;
            if (0 === t) {
                var s;
                (r = this.AccurateSubtract(e, a)) <= 15e3 ? (u = .05, o = 0) : r > 15e3 && r <= 3e4 ? (u = .1, 
                o = 750) : r > 3e4 && r <= 6e4 ? (u = .2, o = 3750) : r > 6e4 && r <= 1e5 ? (u = .3, 
                o = 9750) : (u = .35, o = 14750), s = r, r = this.AccurateAdd(r, a), i = this.AccurateSubtract(this.AccurateMultiply(s, u), o), 
                c = this.AccurateSubtract(r, i), l = s;
            } else {
                var h = 0, n = 0;
                (c = e) <= 14250 ? (u = .05, o = 0) : c > 14250 && c <= 27750 ? (u = .1, o = 750) : c > 27750 && c <= 51750 ? (u = .2, 
                o = 3750) : c > 51750 && c <= 79750 ? (u = .3, o = 9750) : (u = .35, o = 14750), 
                console.log("税率", c, u, o), n = this.AccurateMultiply(a, u), h = this.AccurateSubtract(c, o), 
                h = this.AccurateSubtract(h, n), n = this.AccurateSubtract(1, u), r = this.AccurateVivide(h, n), 
                i = this.AccurateSubtract(r, c), l = r;
            }
            return {
                money: this.getFloor(c),
                tax: this.getFloor(i),
                preTaxMoney: this.getFloor(r),
                taxRate: 100 * this.getFloor(u),
                deduction: this.getFloor(o),
                preTax: this.getFloor(l)
            };
        }
    }, {
        key: "calculationLease",
        value: function(t, e) {
            var a = null, c = null, r = 0, i = 0;
            return 0 === t ? (c = e) <= 800 ? (r = 0, a = c) : c > 800 && c <= 4e3 ? (i = this.AccurateSubtract(c, 800), 
            a = c - (r = this.AccurateMultiply(i, .2))) : (i = this.AccurateMultiply(c, .8), 
            a = c - (r = this.AccurateMultiply(i, .2))) : ((a = e) <= 800 ? (c = a, r = 0) : a > 800 && a <= 3360 ? (c = this.AccurateVivide(this.AccurateSubtract(a, 160), .8), 
            r = this.AccurateSubtract(c, a)) : (c = this.AccurateVivide(a, .84), r = this.AccurateSubtract(c, a)), 
            i = c <= 800 ? 0 : c > 800 && c <= 4e3 ? this.AccurateSubtract(c, 800) : this.AccurateMultiply(c, .8)), 
            {
                money: this.getFloor(a),
                tax: this.getFloor(r),
                preTaxMoney: this.getFloor(c),
                taxRate: 100 * this.getFloor(.2),
                preTax: this.getFloor(i)
            };
        }
    }, {
        key: "newCalculationYearAward",
        value: function(t, e) {
            var a, c, r, i = null, u = null, o = 0, l = 0, s = 0, h = null;
            0 == t ? (u = e, l = (h = this.getTaxNew(this.AccurateVivide(u, 12))).taxRate, s = h.deduction, 
            a = this.AccurateMultiply(u, l), o = this.AccurateSubtract(a, s), i = this.AccurateSubtract(u, o)) : (i = e, 
            l = (h = this.getRelativeTaxNew1(i)).taxRate, s = h.deduction, c = this.AccurateSubtract(i, s), 
            r = this.AccurateSubtract(1, l), u = this.AccurateVivide(c, r), o = this.AccurateSubtract(u, i));
            return {
                taxRate: 100 * l,
                deduction: s,
                money: this.getFloor(i),
                tax: this.getFloor(o),
                preTaxMoney: this.getFloor(u)
            };
        }
    }, {
        key: "newCalculationService",
        value: function(t, e) {
            console.log("新政的计算公式");
            var a = 0, c = null, r = null, i = 0, u = 0, o = 0, l = null;
            if (r = e, 0 == t) {
                var s;
                r = e, a = this.AccurateMultiply(r, .8), u = (l = this.getTaxNew(a)).taxRate, o = l.deduction, 
                s = this.AccurateMultiply(a, u), i = this.AccurateSubtract(s, o), c = this.AccurateSubtract(r, i);
            } else {
                var h, n = 0;
                c = e, u = (l = this.getLaborAndAllowRelativeTax(c)).taxRate, o = l.deduction, h = this.AccurateSubtract(c, o), 
                n = this.AccurateMultiply(.8, u), n = this.AccurateSubtract(1, n), i = (r = this.AccurateVivide(h, n)) - c;
            }
            return {
                taxRate: 100 * u,
                deduction: o,
                money: this.getFloor(c),
                tax: this.getFloor(i),
                preTaxMoney: this.getFloor(r)
            };
        }
    }, {
        key: "newCalculationDraft",
        value: function(t, e) {
            console.log("新政的计算公式", e);
            var a = 0, c = null, r = null, i = 0, u = 0, o = null, l = 0;
            if (r = e, 0 == t) {
                var s;
                r = e, a = this.AccurateMultiply(r, .8), a = this.AccurateMultiply(a, .7), u = (o = this.getTaxNew(a)).taxRate, 
                l = o.deduction, s = this.AccurateMultiply(a, u), i = this.AccurateSubtract(s, l), 
                c = this.AccurateSubtract(r, i);
            } else {
                var h, n = 0;
                c = e, u = (o = this.getRemunerationRelativeTax(c)).taxRate, l = o.deduction, h = this.AccurateSubtract(c, l), 
                n = this.AccurateMultiply(.56, u), n = this.AccurateSubtract(1, n), i = (r = this.AccurateVivide(h, n)) - c;
            }
            return {
                taxRate: this.getFloor(100 * u),
                money: this.getFloor(c),
                tax: this.getFloor(i),
                preTaxMoney: this.getFloor(r),
                deduction: l
            };
        }
    }, {
        key: "newCalculationIndividual",
        value: function(t, e, a) {
            console.log("新政个体户", e, a);
            var c = null, r = null, i = 0, u = 0, o = 0, l = 0;
            if (0 == t) {
                var s;
                if ((r = this.AccurateSubtract(e, a)) <= 0) return {
                    money: this.getFloor(e),
                    tax: 0,
                    preTaxMoney: this.getFloor(e),
                    taxRate: 0,
                    deduction: 0,
                    preTax: 0
                };
                r > 0 && r <= 3e4 ? (u = .05, o = 0) : r > 3e4 && r <= 9e4 ? (u = .1, o = 1500) : r > 9e4 && r <= 3e5 ? (u = .2, 
                o = 10500) : r > 3e5 && r <= 5e5 ? (u = .3, o = 40500) : r > 5e5 && (u = .35, o = 65500), 
                s = r, r = this.AccurateAdd(r, a), i = this.AccurateSubtract(this.AccurateMultiply(s, u), o), 
                c = this.AccurateSubtract(r, i), l = s;
            } else {
                var h = 0, n = 0;
                if (c = e, (h = this.AccurateSubtract(c, a)) < 0) return {
                    money: this.getFloor(c),
                    tax: 0,
                    preTaxMoney: this.getFloor(c),
                    taxRate: 0,
                    deduction: 0,
                    preTax: 0
                };
                h > 0 && h <= 28500 ? (u = .05, o = 0) : h > 28500 && h <= 82500 ? (u = .1, o = 1500) : h > 82500 && h <= 250500 ? (u = .2, 
                o = 10500) : h > 250500 && h <= 390500 ? (u = .3, o = 40500) : h > 390500 && (u = .35, 
                o = 65500), n = this.AccurateMultiply(a, u), h = this.AccurateSubtract(c, o), h = this.AccurateSubtract(h, n), 
                n = this.AccurateSubtract(1, u), r = this.AccurateVivide(h, n), i = this.AccurateSubtract(r, c), 
                l = r;
            }
            return {
                money: this.getFloor(c),
                tax: this.getFloor(i),
                preTaxMoney: this.getFloor(r),
                taxRate: 100 * this.getFloor(u),
                deduction: this.getFloor(o),
                preTax: this.getFloor(l)
            };
        }
    }, {
        key: "calculationSixYear",
        value: function(t, e, a) {
            var c, r, i, u = this, o = null, l = this.AccurateMultiply(t, 12), s = 0, h = 0, n = 0, A = null, d = e ? this.AccurateMultiply(e, 12) : 0, x = 0;
            a instanceof Array ? a && a.map(function(t) {
                "education" !== t.name ? x += u.AccurateMultiply(t.total, 12) : (t.checked.indexOf(0) > -1 && (x += 4800), 
                t.checked.indexOf(1) > -1 && (x += 3600));
            }) : x = this.AccurateMultiply(a, 12), r = this.AccurateAdd(this.AccurateAdd(d, x), 6e4), 
            (c = this.AccurateSubtract(l, r)) <= 0 ? o = this.AccurateSubtract(l, d) : (h = (A = this.getTaxYear(c)).taxRate, 
            n = A.deduction, s = this.AccurateSubtract(this.AccurateMultiply(c, h), n), o = this.AccurateSubtract(this.AccurateSubtract(l, s), d));
            var y = this.AccurateAdd(d, 6e4), v = this.AccurateSubtract(l, y), g = 0, b = 0, S = 0, p = 0, F = 0;
            return v <= 0 ? F = this.AccurateSubtract(l, d) : v > 0 && (b = (g = this.getTaxYear(v)).taxRate, 
            S = g.deduction, p = this.AccurateSubtract(this.AccurateMultiply(v, b), S), F = this.AccurateSubtract(this.AccurateSubtract(l, p), d)), 
            i = this.AccurateSubtract(o, F), {
                money: this.getFloor(o),
                preTax: this.getFloor(c),
                taxRate: h,
                tax: this.getFloor(s),
                taxObj: A,
                deduction: n,
                fiveTotal: d,
                sixTotal: x,
                preTaxMoney: this.getFloor(l),
                deductionTotal: this.getFloor(r),
                increase: this.getFloor(i)
            };
        }
    }, {
        key: "calculationPrePay",
        value: function(e, a, c, r, i, u, o) {
            if (1 === r) {
                var l = this.calculationCustomDeduct(i, u, o, 1);
                return t({}, l);
            }
            var s = this.calculationCustomDeduct(i, u, o, r), h = this.calculationCustomDeduct(this.AccurateSubtract(i, e), this.AccurateSubtract(u, a), this.AccurateSubtract(o, c), r - 1), n = this.calculationCustomDeduct(e, a, c, 1), A = this.AccurateSubtract(s.tax, h.tax), d = this.AccurateSubtract(s._tax, h._tax), x = this.AccurateSubtract(e, this.AccurateAdd(A, a)), y = this.AccurateSubtract(e, this.AccurateAdd(d, a)), v = this.AccurateSubtract(x, y);
            return console.log("result1"), console.log(s), t({}, s, {
                lastMonthTax: this.getFloor(h.tax),
                tax: this.getFloor(A),
                deductionTotal: this.getFloor(n.deductionTotal),
                money: this.getFloor(x),
                increase: this.getFloor(v),
                five: this.getFloor(n.five)
            });
        }
    }, {
        key: "calculationCustomDeduct",
        value: function(t, e, a, c) {
            var r, i, u, o, l = t, s = 0, h = 0, n = 0, A = null, d = e || 0, x = a;
            u = this.AccurateAdd(this.AccurateAdd(d, x), 5e3 * c), (r = this.AccurateSubtract(l, u)) > 0 && (h = (A = this.getTaxYear(r)).taxRate, 
            n = A.deduction, s = this.AccurateSubtract(this.AccurateMultiply(r, h), n)), i = this.AccurateSubtract(this.AccurateSubtract(t, s), d);
            var y = this.AccurateAdd(d, 5e3 * c), v = this.AccurateSubtract(l, y), g = 0, b = 0, S = 0, p = 0;
            v <= 0 ? p = 0 : (b = (g = this.getTaxYear(v)).taxRate, S = g.deduction, p = this.AccurateSubtract(this.AccurateMultiply(v, b), S));
            var F = this.AccurateSubtract(this.AccurateSubtract(t, p), d);
            return o = this.AccurateSubtract(i, F), {
                money: this.getFloor(i),
                preTax: this.getFloor(r),
                taxRate: h,
                tax: this.getFloor(s),
                taxObj: A,
                deduction: n,
                five: this.getFloor(d),
                sixTotal: this.getFloor(x),
                preTaxMoney: this.getFloor(l),
                deductionTotal: this.getFloor(u),
                increase: this.getFloor(o),
                _tax: this.getFloor(p)
            };
        }
    }, {
        key: "calculationSixByMonth",
        value: function(t, e, a, c) {
            var r, i, u, o, l, s, h, n, A, d = this, x = this.AccurateMultiply(t, c), y = e ? this.AccurateMultiply(e, c) : 0, v = 0, g = 0;
            a && a.map(function(t) {
                "education" !== t.name ? (v += d.AccurateMultiply(t.total, c), g += t.total) : (t.checked.indexOf(0) > -1 && (v += d.AccurateMultiply(400, c), 
                g += 400), t.checked.indexOf(1) > -1 && (v += 3600, g += 3600));
            }), n = g + 5e3;
            var b = 0, S = 0, p = null;
            c > 1 && (b = (p = this.calculationSixByLastMonth(t, e, a, c)).tax, S = p._tax), 
            h = this.AccurateAdd(this.AccurateAdd(y, v), this.AccurateMultiply(5e3, c)), r = this.AccurateSubtract(x, h), 
            o = (s = this.getTaxYear(r)).taxRate, l = s.deduction, u = this.AccurateSubtract(this.AccurateSubtract(this.AccurateMultiply(r, o), l), b), 
            i = this.AccurateSubtract(this.AccurateSubtract(t, u), y);
            var F = this.AccurateAdd(y, this.AccurateMultiply(5e3, c)), M = this.AccurateSubtract(x, F), f = this.getTaxYear(M), T = f.taxRate, R = f.deduction, m = this.AccurateSubtract(this.AccurateSubtract(this.AccurateMultiply(M, T), R), S), k = this.AccurateSubtract(this.AccurateSubtract(t, m), y);
            return A = this.AccurateSubtract(i, k), {
                money: this.getFloor(i),
                preTax: this.getFloor(r),
                taxRate: o,
                tax: this.getFloor(u),
                taxObj: s,
                deduction: l,
                five: y,
                sixTotal: v,
                preTaxMoney: this.getFloor(x),
                deductionTotal: this.getFloor(n),
                increase: this.getFloor(A),
                lastMonthTax: this.getFloor(b)
            };
        }
    }, {
        key: "calculationSixByLastMonth",
        value: function(t, e, a, c) {
            var r, i, u, o, l, s, h = this, n = c - 1, A = this.AccurateMultiply(t, n), d = e ? this.AccurateMultiply(e, n) : 0, x = 0;
            a && a.map(function(t) {
                "education" !== t.name ? x += h.AccurateMultiply(t.total, n) : (t.checked.indexOf(0) > -1 && (x += h.AccurateMultiply(400, n)), 
                t.checked.indexOf(1) > -1 && (x += 3600));
            }), s = this.AccurateAdd(this.AccurateAdd(d, x), this.AccurateMultiply(5e3, n)), 
            r = this.AccurateSubtract(A, s), u = (l = this.getTaxYear(r)).taxRate, o = l.deduction, 
            i = this.AccurateSubtract(this.AccurateMultiply(r, u), o);
            var y = this.AccurateAdd(d, this.AccurateMultiply(5e3, n)), v = this.AccurateSubtract(A, y), g = this.getTaxYear(v), b = g.taxRate, S = g.deduction;
            return {
                tax: i,
                _tax: this.AccurateSubtract(this.AccurateMultiply(v, b), S)
            };
        }
    }, {
        key: "calculationDeductTotal",
        value: function(t, e) {
            var a = this, c = 0;
            return t && t.map(function(t) {
                "education" !== t.name ? c += a.AccurateMultiply(t.total, e) : (t.checked.indexOf(0) > -1 && (c += a.AccurateMultiply(400, e)), 
                t.checked.indexOf(1) > -1 && (c += 3600));
            }), c;
        }
    }, {
        key: "calculationYearDetails",
        value: function(t, e, a) {
            var c = [], r = 0, i = !1;
            a instanceof Array ? a && a.map(function(t) {
                "education" !== t.name ? r += t.total : (t.checked.indexOf(0) > -1 && (r += 400), 
                t.checked.indexOf(1) > -1 && (i = !0));
            }) : r = a;
            for (var u = 1; u <= 12; u++) {
                var o = this.calculationTaxableByMonth(t, e, r, i, u);
                c.push({
                    income: t,
                    tax: o.tax,
                    money: o.money
                });
            }
            return c;
        }
    }, {
        key: "calculationTaxableByMonth",
        value: function(t, e, a, c, r) {
            var i, u, o, l, s = this.AccurateMultiply(t, r), h = 0, n = 0, A = 0, d = null, x = e ? this.AccurateMultiply(e, r) : 0;
            l = 12 === r && c ? this.AccurateAdd(this.AccurateMultiply(a, r), 3600) : this.AccurateMultiply(a, r);
            var y = 0;
            return (12 === r || r > 1) && (y = this.calculationTaxableByLastMonth(t, e, a, r).tax), 
            o = this.AccurateAdd(this.AccurateAdd(x, l), this.AccurateMultiply(5e3, r)), (i = this.AccurateSubtract(s, o)) > 0 && (n = (d = this.getTaxYear(i)).taxRate, 
            A = d.deduction, h = this.AccurateSubtract(this.AccurateSubtract(this.AccurateMultiply(i, n), A), y)), 
            u = this.AccurateSubtract(this.AccurateSubtract(t, h), e), {
                money: this.getFloor(u),
                preTax: this.getFloor(i),
                taxRate: n,
                tax: this.getFloor(h),
                taxObj: d,
                deduction: A,
                five: x,
                sixTotal: l,
                preTaxMoney: this.getFloor(s)
            };
        }
    }, {
        key: "calculationTaxableByLastMonth",
        value: function(t, e, a, c) {
            var r, i, u = c - 1, o = this.AccurateMultiply(t, u), l = 0, s = null, h = null, n = null, A = this.AccurateMultiply(a, u), d = e ? this.AccurateMultiply(e, u) : 0;
            return i = this.AccurateAdd(this.AccurateAdd(d, A), this.AccurateMultiply(5e3, u)), 
            (r = this.AccurateSubtract(o, i)) > 0 && (s = (n = this.getTaxYear(r)).taxRate, 
            h = n.deduction, l = this.AccurateSubtract(this.AccurateMultiply(r, s), h)), {
                tax: l
            };
        }
    }, {
        key: "getFiveMoney",
        value: function(t, e) {
            if ("" != t) {
                var a = this.setBase(t, "fund", e), c = this.setBase(t, "social", e), r = a * e.fundRatio, i = c * (e.loseRatio + e.medicalRatio + e.pensionRatio);
                return parseInt(100 * (r + i) / 100);
            }
        }
    }, {
        key: "setBase",
        value: function(t, e, a) {
            var c = e + "Lowerlimit", r = e + "Toplimit";
            return t < a[c] ? a[c] : t > a[r] ? a[r] : t;
        }
    }, {
        key: "realTax",
        value: function(t, e, a, c, r) {
            var i = 0, u = 0, o = 0, l = 0, s = 0, h = null, n = this.AccurateAdd(c, r);
            return o = u = this.AccurateSubtract(t, e), t <= this.AccurateAdd(a, e) || (u = this.AccurateSubtract(u, a), 
            (u = this.AccurateMultiply(u, 12)) <= n || (o = this.AccurateSubtract(u, n), l = (h = this.getRealTax(o)).taxRate, 
            s = h.deduction, u = this.AccurateMultiply(o, l), i = this.AccurateSubtract(u, s))), 
            {
                realTax: this.getFloor(i)
            };
        }
    } ]), a;
}())();

exports.default = a;