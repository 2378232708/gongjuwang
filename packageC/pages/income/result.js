!function(e) {
    e && e.__esModule;
}(require("../../CF50D590071E6DCFA936BD9760468836.js"));

var e = require("../../F2EBA4B5071E6DCF948DCCB248A58836.js"), t = (function(e) {
    e && e.__esModule;
}(require("../../A8B547A0071E6DCFCED32FA77E858836.js")), getApp()), a = null;

Page({
    data: {
        params: {},
        calculateResultList: {},
        totalList: [],
        sixTotalList: [],
        showDeductDetails: !1,
        pushTitle: null,
        pushUrl: null,
        openStatus: 0,
        index: 0,
        ad: t.globalData.ad,
        isLock: 0
    },
    onLoad: function(t) {
        var a = JSON.parse(t.gz);
        a.condition = this.getCondition(a), this.setData({
            index: a.index,
            params: a,
            calculateResultList: e.calculateResultList[a.index]
        }), console.log("result index", a.index, this.data.calculateResultList, a);
        var n = wx.getStorageSync("unLockTime") || 0;
        console.log("unLockTime", n, n - new Date().getTime()), n > new Date().getTime() && this.setData({
            isLock: !1
        });
    },
    onShow: function(e) {
        // wx.createInterstitialAd && (a = wx.createInterstitialAd({
        //     adUnitId: "adunit-d06877e0070e1e5e"
        // })).onError(function(e) {
        //     console.log(e);
        // }), a && a.show().catch(function(e) {
        //     console.error(e);
        // });
    },
    toggleDeductDetails: function() {
        this.setData({
            showDeductDetails: !this.data.showDeductDetails
        });
    },
    getCondition: function(e) {
        var t = void 0;
        switch (e.index) {
          case 1:
            t = e.Income;
            break;

          case 2:
            t = [ e.Income, "*(1-20%)" ].join("");
            break;

          case 15:
            t = [ e.totalIncome, "-", e.totalInsure, "-", e.totalSpecial, "-", e.baseLine, "*", e.month ].join("");
            break;

          default:
            t = e.Income;
        }
        return t;
    },
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
    unlock: function() {
        var e = this;
        wx.navigateToMiniProgram({
            appId: "wxde8ac0a21135c07d",
            path: "/index/pages/h5/h5?weburl=https%3A%2F%2Frunion.meituan.com%2Furl%3Fkey%3D4aea4846f853057d8fa7f914744cefd7%26url%3Dhttps%253A%252F%252Fi.meituan.com%252Fawp%252Fhfe%252Fblock%252Fa13b87919a9ace9cfab4%252F89400%252Findex.html%253Fappkey%253D4aea4846f853057d8fa7f914744cefd7%253Amt1000%26sid%3Dmt1000&lch=cps:waimai:5:4aea4846f853057d8fa7f914744cefd7:mt1000&f_token=1&f_userId=1",
            extraData: {},
            envVersion: "release",
            success: function(t) {
                wx.setStorageSync("unLockTime", new Date().getTime() + 864e5), e.setData({
                    isLock: !1
                });
            },
            fail: function(e) {
                console.log("fail", e);
            }
        });
    }
});