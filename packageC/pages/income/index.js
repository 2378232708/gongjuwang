function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function a(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var e, i = t(require("../../A8B547A0071E6DCFCED32FA77E858836.js")), n = t(require("../../F2EBA4B5071E6DCF948DCCB248A58836.js")), s = t(require("../../CF50D590071E6DCFA936BD9760468836.js")), r = getApp(), o = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
}, c = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../F4275555071E6DCF92413D52EF958836.js"));

Page((e = {
    data: {
        swiperCurrent: 0,
        calculatorType: 1,
        active: 0,
        columns: [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ],
        monthOptions: [ {
            key: 0,
            value: "1月"
        }, {
            key: 1,
            value: "2月"
        }, {
            key: 2,
            value: "3月"
        }, {
            key: 3,
            value: "4月"
        }, {
            key: 4,
            value: "5月"
        }, {
            key: 5,
            value: "6月"
        }, {
            key: 6,
            value: "7月"
        }, {
            key: 7,
            value: "8月"
        }, {
            key: 8,
            value: "9月"
        }, {
            key: 9,
            value: "10月"
        }, {
            key: 10,
            value: "11月"
        }, {
            key: 11,
            value: "12月"
        } ],
        txtIncome: "",
        txtInsure: "",
        txtSpecial: "",
        txtBaseLine: 5e3,
        totalTxtIncome: "",
        totalTxtInsure: "",
        totalTxtSpecial: "",
        socialBase: "",
        socialPec: "",
        fundBase: "",
        fundPec: "",
        month: new Date().getMonth(),
        txtYearIncome: "",
        txtServerIncome: "",
        bottom: !1,
        list: n.default.more,
        currentIndex: 0,
        time: 0,
        isShowInsureBox: "none",
        formList1: n.default.calculatorList[1],
        formList2: n.default.calculatorList[2],
        params1: {
            tabIndex: 0,
            income: ""
        },
        params2: {
            tabIndex: 0,
            typeIndex: 0,
            income: ""
        },
        heights: [],
        ad: r.globalData.ad,
        animation_box: !0,
        version: 1,
        bannerVersion: 1,
        insVersion: 1
    },
    changeSwiperCurrent: function(t) {
        var a = t.currentTarget.dataset.current;
        t.currentTarget.dataset.title, this.setData({
            swiperCurrent: a,
            calculatorType: a + 1
        }), console.log("当前高度", this.data.swiperCurrent, this.data.heights[this.data.swiperCurrent]);
    },
    swiperChange: function(t) {
        this.setData({
            swiperCurrent: t.detail.current,
            calculatorType: t.detail.current + 1
        });
    },
    onLoad: function() {
        this.setData({
            time: Date.parse(new Date())
        });
    },
    calculate: function() {
        wx.getStorageSync("isJumpToPush") ? this._calculate() : "1.1" == this.data.version || this._calculate();
    },
    _calculate: function() {
        if (this.data.txtIncome) {
            var t = this.data.month + 1, a = this.data.txtIncome * t, e = this.data.txtInsure * t, i = this.data.txtSpecial * t, n = this.calcGongZi(this.data.txtIncome, this.data.txtInsure, this.data.txtSpecial, this.data.txtBaseLine, t, a, e, i);
            n.index = 15, console.log("gz=" + JSON.stringify(n)), wx.redirectTo({
                url: "/packageC/pages/income/result?gz=" + JSON.stringify(n)
            });
        }
    },
    calcGongZi: function(t, a, e, n, s, r, o, c) {
        var u = t, l = r, d = a, h = o, m = e, p = c, f = n, x = 100 * n * s / 100, g = i.default.accSub(i.default.accSub(i.default.accSub(l, h), p), x);
        g = 0 < g ? g : 0;
        var I = i.default.accSub(l, u), b = i.default.accSub(h, d), v = i.default.accSub(p, m), y = i.default.accSub(x, f), S = i.default.accSub(i.default.accSub(i.default.accSub(I, b), v), y);
        S = 0 < S ? S : 0;
        var w = i.default.getTaxRate(parseInt(g)), T = i.default.getTaxRate(parseInt(S)), D = i.default.accSub(1e4 * g * w.taxRate / 1e4, w.deduct), C = i.default.accSub(1e4 * S * T.taxRate / 1e4, T.deduct), P = i.default.accSub(i.default.minus(D), i.default.minus(C)), k = i.default.accSub(i.default.accSub(u, d), P);
        return {
            income: t,
            insure: a,
            special: e,
            baseLine: n,
            month: s,
            totalIncome: l,
            totalInsure: h,
            totalSpecial: p,
            totalBaseLine: x,
            txtTaxableIncome: g,
            taxPayable: parseFloat(D).toFixed(2),
            Rate: w.taxRate,
            paidTax: parseFloat(C).toFixed(2),
            Deduct: w.deduct,
            Tax: parseFloat(P).toFixed(2),
            taxedIncome: parseFloat(k).toFixed(2),
            deductionTotal: Number(a) + Number(n) + Number(e)
        };
    },
    calculateOnClick: function(t) {
        if ("txtYearIncome" == t.target.id) {
            if (this.data.txtYearIncome < 0) return void wx.showToast({
                title: "请输入正确的收入"
            });
            var a = i.default.calcYearBonus(this.data.txtYearIncome, 0);
            a.index = 1, wx.redirectTo({
                url: "/packageC/pages/income/result?gz=" + JSON.stringify(a)
            });
        } else if ("txtServerIncome" == t.target.id) {
            if (this.data.txtServerIncome < 0) return void wx.showToast({
                title: "请输入正确的收入"
            });
            var e = i.default.calcLabourService(this.data.txtServerIncome, 0);
            e.index = 2, wx.redirectTo({
                url: "/packageC/pages/income/result?gz=" + JSON.stringify(e)
            });
        }
    },
    myTxt: function(t) {
        var e = t.target.id;
        this.setData(a({}, e, t.detail)), this.setItemResult();
    },
    setItemResult: function() {
        var t = {
            totalTxtIncome: parseInt(this.data.txtIncome || 0) * (this.data.month + 1),
            totalTxtInsure: parseInt(this.data.txtInsure || 0) * (this.data.month + 1),
            totalTxtSpecial: parseInt(this.data.txtSpecial || 0) * (this.data.month + 1)
        };
        console.log(this.data), this.setData(t);
    },
    toggleBottomPopup: function(t) {
        console.log(t), this.setData({
            bottom: !0
        });
    },
    toggleBottomPopup2: function(t) {
        console.log(t), this.setData({
            bottom: !1
        });
    },
    onChange: function() {},
    onShareAppMessage: function() {
        return {
            title: "2020最新个人所得税计算器，工资，年终奖，劳务报酬等!",
            path: "/pages/income/index"
        };
    },
    onShareTimeline: function() {
        return {
            title: "2020最新个人所得税计算器，工资，年终奖，劳务报酬等!",
            path: "/pages/income/index"
        };
    },
    _changeParamsMonth: function(t) {
        t.detail.value && (this.setData({
            month: Number(t.detail.value)
        }), this.setItemResult());
    },
    showModal: function() {
        s.default.alert({
            title: "如何选择缴纳期数？",
            message: "若计算当月份的个税，则只需选择当月份即可。如果是一年中途入职，则选择入职后的在职月数即可。"
        }).then(function() {});
    },
    editInsure: function() {
        this.setData({
            isShowInsureBox: "none" == this.data.isShowInsureBox ? "block" : "none"
        });
    },
    myInsure: function(t) {
        if (("socialPec" == t.target.id || "fundPec" == t.target.id) && t.detail > 50) wx.showToast({
            title: "比例不合法"
        }); else {
            var e = t.target.id;
            this.setData(a({}, e, t.detail)), this.setData({
                txtInsure: (this.data.socialBase || 0) * (this.data.socialPec || 0) / 100 + (this.data.fundBase || 0) * (this.data.fundPec || 0) / 100
            }), this.setItemResult();
        }
    },
    _changeTabIndex: function(t) {
        var a = t.currentTarget.dataset, e = (a.name, parseInt(a.index)), i = this.data.params1;
        i.tabIndex = e, this.setData({
            params1: i
        });
    },
    _changeTabIndex2: function(t) {
        var a = t.currentTarget.dataset, e = (a.name, parseInt(a.index)), i = this.data.params2;
        i.tabIndex = e, this.setData({
            params2: i
        });
    }
}, a(e, "_changeParams", function(t) {
    var a = this.data.params1;
    a.income = t.detail.value, this.setData({
        params1: a
    });
}), a(e, "_changeParams2", function(t) {
    var a = this.data.params2;
    a.income = t.detail.value, this.setData({
        params2: a
    });
}), a(e, "_changeTypeTabIndex", function(t) {
    var a = t.currentTarget.dataset, e = (a.name, parseInt(a.index)), i = this.data.params2;
    i.typeIndex = e, this.setData({
        params2: i
    });
}), a(e, "calculate1", function(t) {
    if (1 == t.target.dataset.index) {
        if (!this.data.params1.income) return;
        var a = c.default.calculationSalary(this.data.params1.tabIndex, parseInt(this.data.params1.income), 0, 0, 0), e = o({
            calculatorType: this.data.formList1.calculatorType,
            newPolicy: this.data.formList1.newPolicy,
            condition: [],
            useFormula: 0,
            type: this.data.params1.tabIndex,
            oppositeObj: null
        }, this.data.params1, a);
        wx.redirectTo({
            url: "/packageC/pages/income/result2?transmit=" + JSON.stringify(e)
        });
    } else if (2 == t.target.dataset.index) {
        if (!this.data.params2.income) return;
        var i = this.data.params2, n = (this.data.params2.calculatorType, this.data.params2.tabIndex), s = this.data.formList2.newPolicy && parseInt(this.data.params2.typeIndex), r = this.data.params2.typeIndex ? c.default.calculationYearAward(n, i.income) : c.default.newCalculationYearAward(n, i.income);
        s = o({
            calculatorType: this.data.formList2.calculatorType,
            newPolicy: this.data.formList2.newPolicy,
            condition: [],
            useFormula: 0,
            type: this.data.params2.tabIndex,
            oppositeObj: null
        }, this.data.params2, r), wx.redirectTo({
            url: "/packageC/pages/income/result2?transmit=" + JSON.stringify(s)
        });
    }
}), a(e, "onReady", function() {
    var t = this;
    wx.createSelectorQuery().selectAll(".cell-group").boundingClientRect(function(a) {
        var e = wx.getSystemInfoSync(), i = [];
        a.forEach(function(t, a) {
            i[a] = t.height + 256, i[a] + 50 + 50 < e.windowHeight && (i[a] = e.windowHeight - 50), 
            i[a] += 50;
        }), console.log(e.windowHeight, i), t.setData({
            heights: i
        });
    }).exec();
}), e));