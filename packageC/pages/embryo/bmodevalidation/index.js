var e = null;

Page({
    data: {
        text: "",
        value: 0,
        message: ""
    },
    onLoad: function(t) {
        wx.createInterstitialAd && (e = wx.createInterstitialAd({
            adUnitId: "adunit-d06877e0070e1e5e2"
        })).onError(function(e) {}), this.setData({
            text: t.text,
            value: t.value,
            message: t.message
        });
    },
    onShow: function() {
        e && e.show().catch(function(e) {
            console.error(e);
        });
    },
    onShareAppMessage: function() {
        return {
            title: "预测胎儿体重，及早发现胎儿发育上存在的问题",
            path: "/pages/embryo/index"
        };
    }
});