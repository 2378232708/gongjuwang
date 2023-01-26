function e(e, t) {
    var n, a, r;
    try {
        n = e.toString().split(".")[1].length;
    } catch (e) {
        n = 0;
    }
    try {
        a = t.toString().split(".")[1].length;
    } catch (e) {
        a = 0;
    }
    return ((e * (r = Math.pow(10, Math.max(n, a))) - t * r) / r).toFixed(a <= n ? n : a);
}

function t(e, t) {
    return function(e, t) {
        var n, a, r;
        try {
            n = e.toString().split(".")[1].length;
        } catch (e) {
            n = 0;
        }
        try {
            a = t.toString().split(".")[1].length;
        } catch (e) {
            a = 0;
        }
        return (e * (r = Math.pow(10, Math.max(n, a))) + t * r) / r;
    }(e, -t);
}

function n(e, t) {
    var n = 0, a = e.toString(), r = t.toString();
    try {
        n += a.split(".")[1].length;
    } catch (e) {}
    try {
        n += r.split(".")[1].length;
    } catch (e) {}
    return Number(a.replace(".", "")) * Number(r.replace(".", "")) / Math.pow(10, n);
}

function a(e, t) {
    var n = 0, a = 0;
    try {
        n = e.toString().split(".")[1].length;
    } catch (e) {}
    try {
        a = t.toString().split(".")[1].length;
    } catch (e) {}
    return Number(e.toString().replace(".", "")) / Number(t.toString().replace(".", "")) * Math.pow(10, a - n);
}

function r(e) {
    return Math.round(100 * e) / 100;
}

function c(e) {
    var t = !1;
    return (36e3 < e && e < 38566.67 || 144e3 < e && e < 160500 || 3e5 < e && e < 318333.33 || 42e4 < e && e < 447500 || 66e4 < e && e < 706538.46 || 96e4 < e && e < 112e4) && (t = !0), 
    t;
}

function u(e) {
    var t = {
        taxRate: 0,
        deduct: 0
    };
    return 0 < e && e <= 2e4 ? t = {
        taxRate: .2,
        deduct: 0
    } : 2e4 < e && e <= 5e4 ? t = {
        taxRate: .3,
        deduct: 2e3
    } : 5e4 < e && (t = {
        taxRate: .4,
        deduct: 7e3
    }), t;
}

module.exports = {
    accSub: e,
    minus: function(e) {
        return e < 0 ? 0 : e;
    },
    getTaxRate: function(e) {
        return e <= 36e3 ? {
            taxRate: .03,
            deduct: 0
        } : 36e3 < e && e <= 144e3 ? {
            taxRate: .1,
            deduct: 2520
        } : 144e3 < e && e <= 3e5 ? {
            taxRate: .2,
            deduct: 16920
        } : 3e5 < e && e <= 42e4 ? {
            taxRate: .25,
            deduct: 31920
        } : 42e4 < e && e <= 66e4 ? {
            taxRate: .3,
            deduct: 52920
        } : 66e4 < e && e <= 96e4 ? {
            taxRate: .35,
            deduct: 85920
        } : 96e4 < e ? {
            taxRate: .45,
            deduct: 181920
        } : void 0;
    },
    calcYearBonus: function(e, u) {
        var o = null, d = null, i = 0, l = 0, x = 0, R = null;
        return 0 == u ? (l = (R = function(e) {
            var t, n, a;
            return 0 <= e && e <= 3e3 ? (t = .03, n = 0, a = 1) : 3e3 < e && e <= 12e3 ? (t = .1, 
            n = 210, a = 2) : 12e3 < e && e <= 25e3 ? (t = .2, n = 1410, a = 3) : 25e3 < e && e <= 35e3 ? (t = .25, 
            n = 2660, a = 4) : 35e3 < e && e <= 55e3 ? (t = .3, n = 4410, a = 5) : 55e3 < e && e <= 8e4 ? (t = .35, 
            n = 7160, a = 6) : 8e4 < e && (t = .45, n = 15160, a = 7), {
                taxRate: t,
                deduction: n,
                RankIndex: a
            };
        }(a(d = e, 12))).taxRate, x = R.deduction, o = t(d, i = t(n(d, l), x)), {
            Income: r(d),
            Average: r(a(d, 12)),
            Rate: l,
            Deduct: x,
            Tax: r(i),
            IncomeAT: r(o),
            RankIndex: R.RankIndex,
            Blind: c(d)
        }) : (l = (R = function(e) {
            var t, n, a;
            return 0 <= e && e <= 32610 ? (t = .03, n = 0, a = 1) : 32610 < e && e <= 116610 ? (t = .1, 
            n = 210, a = 2) : 116610 < e && e <= 227660 ? (t = .2, n = 1410, a = 3) : 227660 < e && e <= 298410 ? (t = .25, 
            n = 2660, a = 4) : 298410 < e && e <= 436160 ? (t = .3, n = 4410, a = 5) : 436160 < e && e <= 543160 ? (t = .35, 
            n = 7160, a = 6) : 543160 < e && (t = .45, n = 15160, a = 7), {
                taxRate: t,
                deduction: n,
                RankIndex: a
            };
        }(o = e)).taxRate, i = t(d = a(t(o, x = R.deduction), t(1, l)), o), {
            Income: r(d),
            Average: r(a(d, 12)),
            Rate: l,
            Deduct: x,
            Tax: r(i),
            IncomeAT: r(o),
            RankIndex: R.RankIndex,
            Blind: c(d)
        });
    },
    calcLabourService: function(t) {
        var a, r, c, o, d, i = null;
        return d = t < 4e3 ? (i = 800 < t ? 800 : 0, 800 < t ? e(t, i) : 0) : e(t, i = n(t, .2)), 
        {
            Income: t,
            Fee: i,
            TaxableIncome: d,
            Rate: r = (o = u(d)).taxRate,
            Deduct: a = o.deduct,
            Tax: c = e(n(d, r), a),
            IncomeAT: e(t, c),
            useFormula: t < 4e3 ? 0 : 1
        };
    },
    calculationDraft: function(e, r) {
        var c = 0, u = null, o = null, d = 0;
        return (o = r) <= 800 ? {
            Income: r,
            Tax: d,
            IncomeAT: r,
            PreTax: c,
            Rate: .14,
            Deduction: o <= 4e3 ? "800" : n(o, .2),
            useFormula: 0
        } : (0 == e ? u = t(o = r, d = n(c = o <= 4e3 && 800 < o ? o - 800 : 4e3 < o ? n(o, .8) : 0, .14)) : d = (o = (u = r) <= 3552 && 800 < u ? a(t(u, 112), .86) : 4e3 < o ? a(u, .888) : u) - u, 
        {
            Income: r,
            Tax: d,
            IncomeAT: u,
            PreTax: c,
            TaxRate: .14,
            Deduction: o <= 4e3 ? "800" : n(o, .2),
            useFormula: 1
        });
    }
};