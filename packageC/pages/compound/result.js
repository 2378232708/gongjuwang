var t = null;

Page({
    data: {
        fldata: [],
        timeUnit: "年"
    },
    onLoad: function() {
        wx.createInterstitialAd && (t = wx.createInterstitialAd({
            adUnitId: "adunit-d06877e0070e1e5e"
        })).onError(function(t) {}), this.setData({
            fldata: wx.getStorageSync("data"),
            timeUnit: wx.getStorageSync("timeUnit")
        }), this.getData();
    },
    onShow: function() {
        t && t.show().catch(function(t) {
            console.error(t);
        });
    },
    getData: function() {
        var t = this, a = t.finalInvestmentValue(), n = t.totalInterest(), e = t.totalPrincipal();
        this.setData({
            m0: a,
            m1: n,
            m2: e
        });
    },
    finalInvestmentValue: function() {
        var t = this.data.fldata.length;
        return t ? this.data.fldata[t - 1].current : "";
    },
    totalInterest: function() {
        var t = this.data.fldata.length;
        return t ? this.data.fldata[t - 1].totalInterest : "";
    },
    totalPrincipal: function() {
        var t = this.data.fldata.length;
        return t ? this.data.fldata[t - 1].totalPrincipal : "";
    },
    isLong: function() {
        return (this.finalInvestmentValue + "").length > 12;
    },
    back: function() {
        wx.redirectTo({
            url: "/pages/compound/index"
        });
    }
});