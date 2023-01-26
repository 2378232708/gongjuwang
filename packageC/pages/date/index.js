var t = require("../../EF37B6B7071E6DCF8951DEB062B58836.js"), e = null;

Page({
    data: {
        date0: "2016-09-01",
        time0: "00:00",
        date1: "2016-09-01",
        time1: "00:00",
        result: "?",
        result_week: "?",
        openAd: 0
    },
    onLoad: function(a) {
        wx.createInterstitialAd && (e = wx.createInterstitialAd({
            adUnitId: "adunit-d06877e0070e1e5e"
        })).onError(function(t) {
            console.log(t);
        });
        var i = new Date(), n = t.date2str(i, "yyyy-MM-dd");
        i.setDate(i.getDate() - 7);
        var d = t.date2str(i, "yyyy-MM-dd");
        this.setData({
            date0: d,
            date1: n
        });
    },
    onShareAppMessage: function() {
        return {
            title: "日期计算器",
            path: "/pages/date/index"
        };
    },
    bindDate0Change: function(t) {
        this.setData({
            date0: t.detail.value
        });
    },
    bindTime0Change: function(t) {
        this.setData({
            time0: t.detail.value
        });
    },
    bindDate1Change: function(t) {
        this.setData({
            date1: t.detail.value
        });
    },
    bindTime1Change: function(t) {
        this.setData({
            time1: t.detail.value
        });
    },
    onCanculateClick: function(a) {
        e && e.show().catch(function(t) {
            console.error(t);
        });
        var i = this.data.date0 + " " + this.data.time0;
        i = i.replace(/-/g, "/");
        var n = new Date(i), d = this.data.date1 + " " + this.data.time1;
        d = d.replace(/-/g, "/");
        var s = new Date(d), r = t.diffDate(n, s, !0), l = t.diffDays(n, s), o = l % 7, u = parseInt(l / 7) + "周";
        0 != o && (u += o + "天"), this.setData({
            result: r,
            result_week: u,
            openAd: 1
        });
    }
});