Page({
    data: {
        calculationOptions: 0,
        principal: "",
        time: "",
        interestRate: "",
        timeColumns: [ "年", "月" ],
        compoundIntervalColumns: [ "年复利", "月复利", "日复利" ],
        compoundIntervalUnit: "年复利",
        timeUnit: "年",
        interestRateColumns: [ "年利率", "月利率" ],
        interestRateUnit: "年利率",
        moneyUnitColumns: [ "元" ],
        moneyUnit: "元",
        active: "bg-green shadow-blur",
        inactive: "line-gray shadow",
        futureValue: "",
        regdeposit: ""
    },
    onLoad: function() {},
    onShow: function() {},
    computePresent: function() {
        this.data.calculationOptions = 2, this.data.timeUnit = this.data.interestRateUnit.substr(0, 1);
    },
    switchChange: function(t) {
        this.open = t.detail.value;
    },
    generatelist: function() {
        console.log(this.data);
        var t = Number(this.data.time), e = Number(this.data.regdeposit), a = this.data.compoundIntervalUnit, i = this.data.principal, n = "年利率" === this.data.interestRateUnit ? this.data.interestRate : 12 * this.data.interestRate;
        n /= 100;
        var r = 1;
        "日复利" === a ? r = 365 : "月复利" === a ? r = 12 : "年复利" === a && (r = 1), "月" === this.data.timeUnit && (t /= 12), 
        i = Number(i), n = Number(n), r = Number(r), t = Number(t);
        var o = [], s = [];
        return i && (o = this.generateData(i, n, r, t)), e && ("年" === this.data.timeUnit ? "年复利" === a ? s = this.generateDataYear(n, t, e) : "月复利" === a ? (n = Math.pow(1 + n / 12, 12) - 1, 
        s = this.generateDataYear(n, t, e)) : "日复利" === a && (n = Math.pow(1 + n / 365, 365) - 1, 
        s = this.generateDataYear(n, t, e)) : "月" === this.data.timeUnit && (t *= 12, "年复利" === a || "月复利" === a ? s = this.generateDataMonth(n, t, a, e) : "日复利" === a && (n = Math.pow(1 + n / 365, 365) - 1, 
        s = this.generateDataMonth(n, t, a, e)))), i && e ? this.mergeData(s, o) : i ? o : s;
    },
    mergeData: function(t, e) {
        for (var a = [], i = 0; i < t.length; i++) a.push({
            index: t[i].index,
            perDeposit: t[i].perDeposit,
            perInterest: (Number(t[i].perInterest) + Number(e[i].perInterest)).toFixed(2),
            totalPrincipal: (Number(t[i].totalPrincipal) + Number(e[i].totalPrincipal)).toFixed(2),
            totalInterest: (Number(t[i].totalInterest) + Number(e[i].totalInterest)).toFixed(2),
            current: (Number(t[i].current) + Number(e[i].current)).toFixed(2)
        });
        return a;
    },
    generateDataMonth: function(t, e, a, i) {
        for (var n = [], r = 0, o = 1; o < e + 1; o++) {
            var s, d = i;
            s = "月复利" === a ? 1 + t / 12 : Math.pow(1 + t, 1 / 12);
            var u = 0, l = (u = "年复利" === a ? o % 12 == 0 || o === e ? d * s * (Math.pow(s, o) - 1) / (s - 1) : r + d : d * s * (Math.pow(s, o) - 1) / (s - 1)) - r - d, p = d * o, c = u - p;
            n.push({
                index: o,
                perDeposit: d.toFixed(2),
                perInterest: l.toFixed(2),
                totalPrincipal: p.toFixed(2),
                totalInterest: c.toFixed(2),
                current: u.toFixed(2)
            }), r = u;
        }
        return n;
    },
    generateDataYear: function(t, e, a) {
        for (var i = [], n = 0, r = 1; r < e + 1; r++) {
            var o = 12 * a, s = Math.pow(1 + t, 1 / 12), d = a * s * (Math.pow(s, 12 * r) - 1) / (s - 1), u = d - n - o, l = o * r, p = d - l;
            i.push({
                index: r,
                perDeposit: o.toFixed(2),
                perInterest: u.toFixed(2),
                totalPrincipal: l.toFixed(2),
                totalInterest: p.toFixed(2),
                current: d.toFixed(2)
            }), n = d;
        }
        return i;
    },
    generateData: function(t, e, a, i) {
        var n = [], r = t;
        "月" === this.data.timeUnit && (i *= 12);
        for (var o = 1; o < i + 1; o++) {
            var s = o;
            "月" === this.data.timeUnit && (s = o / 12);
            var d = t * Math.pow(1 + e / a, a * s);
            if ("年复利" === this.data.compoundIntervalUnit && "月" === this.data.timeUnit) o % 12 == 0 || o === i ? (n.push({
                index: o,
                perDeposit: 0,
                perInterest: (d - r).toFixed(2),
                totalPrincipal: t,
                totalInterest: (d - t).toFixed(2),
                current: d.toFixed(2)
            }), r = d) : n.push({
                index: o,
                perDeposit: 0,
                perInterest: 0,
                totalPrincipal: t,
                totalInterest: (r - t).toFixed(2),
                current: r.toFixed(2)
            }); else {
                var u = d - r, l = d - t;
                n.push({
                    index: o,
                    perDeposit: 0,
                    perInterest: u.toFixed(2),
                    totalPrincipal: t,
                    totalInterest: l.toFixed(2),
                    current: d.toFixed(2)
                }), r = d;
            }
        }
        return n;
    },
    moneyUnitChange: function(t) {
        this.data.moneyUnit = this.data.moneyUnitColumns[t.detail.value];
    },
    calculation: function() {
        var t = this.generatelist();
        wx.setStorageSync("data", t), wx.setStorageSync("initialBalance", this.data.principal), 
        wx.setStorageSync("timeUnit", this.data.timeUnit), wx.redirectTo({
            url: "/packageC/pages/compound/result"
        });
    },
    bindExpectInterestUnitChange: function(t) {
        this.data.interestRateUnit = this.data.interestRateColumns[t.detail.value], 2 == this.data.calculationOptions && (this.data.timeUnit = this.data.interestRateUnit.substr(0, 1));
    },
    bindCompoundIntervalUnitChange: function(t) {
        this.data.compoundIntervalUnit = this.data.compoundIntervalColumns[t.detail.value];
    },
    bindFixedTimeUnitChange: function(t) {
        this.data.timeUnit = this.data.timeColumns[t.detail.value], 2 == this.data.calculationOptions && (this.data.interestRateUnit = this.data.timeUnit + "利率");
    },
    validate: function() {
        return !0;
    },
    contentInput: function(t) {
        var e = this;
        switch (t.currentTarget.dataset.type) {
          case "principal":
            e.setData({
                principal: t.detail.value
            });
            break;

          case "interestRate":
            e.setData({
                interestRate: t.detail.value
            });
            break;

          case "time":
            e.setData({
                time: t.detail.value
            });
            break;

          case "regdeposit":
            e.setData({
                regdeposit: t.detail.value
            });
        }
    }
});