getApp();

var e = require("../../FB920B91071E6DCF9DF463967E358836.js"), t = "", a = new Date(), i = a.getFullYear(), n = parseInt(a.getMonth()) + parseInt(1);

a.getDate(), (a = new Date()).setTime(a.getTime());

var r = a.getFullYear() + "-" + (parseInt(a.getMonth()) + parseInt(1)) + "-" + a.getDate(), o = a.getFullYear() + "-" + (parseInt(a.getMonth()) + parseInt(1)), s = {}, d = 28, g = 5, u = r, l = null;

Page({
    onShareAppMessage: function(e) {
        return "button" === e.from && console.log(e.target), {
            title: "一款功能强大的女性安全期受孕期月经期计算器",
            path: "/pages/safe/index",
            success: function(e) {},
            fail: function(e) {}
        };
    },
    data: {
        a: 0,
        modalHidden2: !0,
        orderInfo: {},
        zhouqi: 27,
        xingjingqi: 4,
        yuejingriqi: r,
        start_yuejingriqi: r,
        arr_xingjingqi: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15" ],
        arr_zhouqi: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45" ],
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        riqi: o,
        index_rl: e.drawCld(i, n, d, g, u, 0),
        openAd: 0
    },
    bindPickerChange_zhouqi: function(e) {
        s[e.currentTarget.id] = e.detail.value, this.setData({
            zhouqi: e.detail.value
        });
    },
    bindPickerChange_xingjingqi: function(e) {
        s[e.currentTarget.id] = e.detail.value, this.setData({
            xingjingqi: e.detail.value
        });
    },
    bindPickerChange_yuejingriqi: function(e) {
        s[e.currentTarget.id] = e.detail.value, new Date(Date.parse(e.detail.value)), this.setData({
            a: 1,
            yuejingriqi: e.detail.value
        });
    },
    bindPickerChange_js: function(a) {
        l && l.show().catch(function(e) {
            console.error(e);
        });
        var o = new Date();
        if (d = void 0 !== s.zhouqi ? parseInt(s.zhouqi) + parseInt(1) : 28, g = void 0 !== s.xingjingqi ? parseInt(s.xingjingqi) + parseInt(1) : 5, 
        void 0 !== s.yuejingriqi) {
            u = s.yuejingriqi;
            var c = new Date(Date.parse(u)), h = new Date(Date.UTC(c.getFullYear(), c.getMonth(), c.getDate()));
            if (o.getTime() - h.getTime() < 0) return void this.modalTap2();
        } else u = r;
        t = new Date(Date.parse(u)), i = t.getFullYear(), n = parseInt(t.getMonth()) + parseInt(1), 
        wx.setStorage({
            key: "orderInfo",
            data: {
                zhouqi: d,
                jingqi: g,
                time: u
            }
        }), this.setData({
            riqi: i + "-" + n,
            index_rl: e.drawCld(i, n, d, g, u, 1),
            openAd: 1
        });
    },
    next_p: function(t) {
        var a = e.getPreMonth(i + "-" + n);
        i = a[0], n = a[1], this.setData({
            riqi: i + "-" + n,
            index_rl: e.drawCld(i, n, d, g, u, 1)
        });
    },
    next_m: function(t) {
        var a = e.getNextMonth(i + "-" + n);
        i = a[0], n = a[1], this.setData({
            riqi: i + "-" + n,
            index_rl: e.drawCld(i, n, d, g, u, 1)
        });
    },
    onLoad: function() {
        wx.createInterstitialAd && (l = wx.createInterstitialAd({
            adUnitId: "adunit-d06877e0070e1e5e"
        })).onError(function(e) {
            console.log(e);
        });
        var e = this;
        wx.getStorage({
            key: "orderInfo",
            success: function(t) {
                e.setData({
                    orderInfo: t.data
                });
            }
        });
    },
    modalChange2: function(e) {
        this.setData({
            modalHidden2: 1
        });
    },
    modalTap2: function(e) {
        this.setData({
            modalHidden2: 0
        });
    }
});