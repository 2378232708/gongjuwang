require("../../7B639004071E6DCF1D05F80353378836.js");

var t = require("../../30635981071E6DCF56053186F2478836.js"), n = require("../../FEFB01E0071E6DCF989D69E76A278836.js"), i = null;

Page({
    data: {
        nick: "",
        isRelay: !1,
        city: "",
        avatar: "",
        pension: "",
        result: {
            status: "",
            introductions: "",
            style: ""
        }
    },
    onLoad: function(e) {
        wx.createInterstitialAd && (i = wx.createInterstitialAd({
            adUnitId: "adunit-d06877e0070e1e5e"
        })).onError(function(t) {
            console.log(t);
        }), console.log(e);
        var a = t.getResult(n.getPublicPosition(e.city), e.pension);
        e.isRelay ? this.setData({
            isRelay: !0,
            city: e.city,
            avatar: e.url,
            result: a,
            pension: e.pension,
            nick: e.nick
        }) : this.setData({
            city: e.city,
            avatar: e.url,
            result: a,
            pension: e.pension,
            nick: e.nick
        });
    },
    onReady: function() {},
    onShow: function() {
        i && i.show().catch(function(t) {
            console.error(t);
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: this.data.nick + ",邀请你PK养老金收入",
            path: "pages/pension/result?url=" + this.data.avatar + "&nick=" + this.data.nick + "&pension=" + this.data.pension + "&city=" + this.data.city + "&isRelay=1"
        };
    }
});