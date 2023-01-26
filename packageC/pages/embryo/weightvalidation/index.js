var e = null;

Page({
    data: {
        value: 0,
        message: ""
    },
    onLoad: function(a) {
        wx.createInterstitialAd && (e = wx.createInterstitialAd({
            adUnitId: "adunit-d06877e0070e1e5e"
        })).onError(function(e) {
            console.log(e);
        }), this.setData({
            value: a.value,
            message: a.message
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