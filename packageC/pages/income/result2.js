var e = require("../../F2EBA4B5071E6DCF948DCCB248A58836.js"), a = getApp(), t = null;

Page({
    data: {
        params: {},
        calculateResultList: {},
        banner: "",
        pushTitle: null,
        pushUrl: null,
        openStatus: 0,
        ad: a.globalData.ad,
        isLock: 0
    },
    onLoad: function(t) {
        var n = JSON.parse(t.transmit), i = a.globalData, o = i.pushTitle, s = i.pushUrl, l = i.openStatus;
        console.log("params", t), this.setData({
            params: n,
            calculateResultList: e.calculateResultList[n.calculatorType - 1],
            pushTitle: o,
            pushUrl: s,
            openStatus: l
        }, function() {}), this.setData({
            banner: a.globalData.banner
        });
        var r = wx.getStorageSync("unLockTime") || 0;
        console.log("unLockTime", r, r - new Date().getTime()), r > new Date().getTime() && this.setData({
            isLock: !1
        });
    },
    onShow: function(e) {
        wx.createInterstitialAd && (t = wx.createInterstitialAd({
            adUnitId: "adunit-d06877e0070e1e5e"
        })).onError(function(e) {
            console.log(e);
        }), t && t.show().catch(function(e) {
            console.error(e);
        });
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
    queryRealTax: function() {},
    jumpToUrl: function() {
        this.data.pushUrl && wx.navigateTo({
            url: "/pages/webview/index"
        });
    },
    unlock: function() {
        var e = this, t = a.globalData.unLockAppid;
        wx.navigateToMiniProgram({
            appId: t,
            path: "pages/index/index",
            extraData: {},
            envVersion: "release",
            success: function(a) {
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