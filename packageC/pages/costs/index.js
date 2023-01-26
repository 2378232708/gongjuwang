getApp();

var e = null;

Page({
    data: {
        result: "0",
        input: ""
    },
    onLoad: function() {
        wx.createInterstitialAd && (e = wx.createInterstitialAd({
            adUnitId: "adunit-d06877e0070e1e5e"
        })).onError(function(e) {
            console.log(e);
        });
    },
    shouli: function(e) {
        var t = this.data.input;
        if ("" == t || 0 == t) console.log("===EEROR INPUT==="), this.msg("请输入金额"); else {
            var s = 0;
            t > 0 && t <= 1e4 ? s = 50 : t > 1e4 && t <= 1e5 ? s = .025 * (t - 1e4) + 50 : t > 1e5 && t <= 2e5 ? s = .02 * (t - 1e5) + 2300 : t > 2e5 && t <= 5e5 ? s = .015 * (t - 2e5) + 4300 : t > 5e5 && t <= 1e6 ? s = .01 * (t - 5e5) + 8800 : t > 1e6 && t <= 2e6 ? s = .009 * (t - 1e6) + 13800 : t > 2e6 && t <= 5e6 ? s = .008 * (t - 2e6) + 22800 : t > 5e6 && t <= 1e7 ? s = .007 * (t - 5e6) + 46800 : t > 1e7 && t <= 2e7 ? s = .006 * (t - 1e7) + 81800 : t > 2e7 && (s = .005 * (t - 2e7) + 141800), 
            s = s.toFixed(2), this.setData({
                result: s,
                gtype: "(受理费)"
            });
        }
    },
    baoquan: function(t) {
        e && e.show().catch(function(e) {
            console.error(e);
        });
        var s = this.data.input;
        if ("" == s || 0 == s) console.log("===EEROR INPUT==="), this.msg("请输入金额"); else {
            var i = 0;
            s > 0 && s <= 1e3 ? i = 30 : s > 1e3 && s <= 1e5 ? i = .01 * s + 20 : s > 1e5 && (i = .005 * s + 520), 
            (i = i.toFixed(2)) > 5e3 && (i = 5e3), this.setData({
                result: i,
                gtype: "(保全费)"
            });
        }
    },
    zhixing: function(t) {
        e && e.show().catch(function(e) {
            console.error(e);
        });
        var s = this.data.input;
        if ("" == s || 0 == s) console.log("===EEROR INPUT==="), this.msg("请输入金额"); else {
            var i = 0;
            s > 0 && s < 1e4 ? i = 50 : s >= 1e4 && s <= 5e5 ? i = .015 * (s - 1e4) + 50 : s >= 5e5 && s <= 5e6 ? i = .01 * (s - 5e5) + 7400 : s >= 5e6 && s <= 1e7 ? i = .005 * (s - 5e6) + 52400 : s > 1e7 && (i = .001 * s + 77400), 
            i = i.toFixed(2), this.setData({
                result: i,
                gtype: "(执行费)"
            });
        }
    },
    lihun: function(t) {
        e && e.show().catch(function(e) {
            console.error(e);
        });
        var s = this.data.input;
        if ("" == s || 0 == s) console.log("===EEROR INPUT==="), this.msg("请输入金额"); else {
            var i = 0;
            s > 0 && s <= 2e5 ? i = 50 : s > 2e5 && (i = .005 * s + 50), i = i.toFixed(2), this.setData({
                result: i,
                gtype: "(离婚费)"
            });
        }
    },
    get_input: function(e) {
        console.log(e), this.setData({
            input: e.detail.value
        });
    },
    msg: function(e) {
        this.setData({
            display: "jsq_msg_show"
        }), this.setData({
            msg: e
        });
        var t = this;
        setTimeout(function() {
            t.setData({
                display: ""
            });
        }, 1500);
    },
    onShareAppMessage: function() {
        return {
            title: "诉讼费计算器",
            path: "/pages/costs/index"
        };
    }
});