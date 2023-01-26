var t = getApp(), a = (require("../../1F946BE2071E6DCF79F203E515658836.js"), null);

Page({
    data: {
        sd_result_arr_cn: "",
        sd_result_arr_en: "",
        gjj_result_arr_cn: "",
        gjj_result_arr_en: "",
        rbt: "",
        dkt: "",
        total: "",
        byyue: "",
        jumpxcximg: ""
    },
    onLoad: function(a) {
        if (0 == a.dkt) r = (Number(t.globalData.sd_result_arr_en.list[0][2]) - Number(t.globalData.sd_result_arr_en.list[1][2])).toFixed(2); else if (1 == a.dkt) e = (Number(t.globalData.gjj_result_arr_en.list[0][2]) - Number(t.globalData.gjj_result_arr_en.list[1][2])).toFixed(2); else var r = (Number(t.globalData.sd_result_arr_en.list[0][2]) - Number(t.globalData.sd_result_arr_en.list[1][2])).toFixed(2), e = (Number(t.globalData.gjj_result_arr_en.list[0][2]) - Number(t.globalData.gjj_result_arr_en.list[1][2])).toFixed(2);
        if (this.setData({
            sd_result_arr_cn: t.globalData.sd_result_arr_cn,
            sd_result_arr_en: t.globalData.sd_result_arr_en,
            gjj_result_arr_cn: t.globalData.gjj_result_arr_cn,
            gjj_result_arr_en: t.globalData.gjj_result_arr_en,
            rbt: a.rbt,
            dkt: a.dkt,
            byyue: {
                sd: r,
                gjj: e
            }
        }), 2 == a.dkt) {
            var l = (Number(t.globalData.sd_result_arr_cn.total_dk) + Number(t.globalData.gjj_result_arr_cn.total_dk)).toFixed(2), _ = (Number(t.globalData.sd_result_arr_cn.total) + Number(t.globalData.gjj_result_arr_cn.total)).toFixed(2), n = (Number(t.globalData.sd_result_arr_cn.total_lx) + Number(t.globalData.gjj_result_arr_cn.total_lx)).toFixed(2), o = (Number(t.globalData.sd_result_arr_en.total_dk) + Number(t.globalData.gjj_result_arr_en.total_dk)).toFixed(2), s = (Number(t.globalData.sd_result_arr_en.total) + Number(t.globalData.gjj_result_arr_en.total)).toFixed(2), u = (Number(t.globalData.sd_result_arr_en.total_lx) + Number(t.globalData.gjj_result_arr_en.total_lx)).toFixed(2);
            this.setData({
                total: {
                    total_dk_cn: l,
                    total_t_cn: _,
                    lx_t_cn: n,
                    total_dk_en: o,
                    total_t_en: s,
                    lx_t_en: u
                }
            });
        }
        wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        });
    },
    chang_rbt: function(t) {
        var a = t.currentTarget.id;
        if (a == this.data.rbt) return !1;
        this.setData({
            rbt: a
        });
    },
    onShow: function() {
        // wx.createInterstitialAd && ((a = wx.createInterstitialAd({
        //     adUnitId: "adunit-d06877e0070e1e5e"
        // })).onLoad(function() {}), a.onError(function(t) {}), a.onClose(function() {})), 
        // a && a.show().catch(function(t) {
        //     console.error(t);
        // });
    },
    onHide: function() {},
    onUnload: function() {},
    onShareAppMessage: function() {
        return {
            title: "最专业的免费房贷税费计算器工具！",
            desc: "为您提供最精准的贷款、税费计算服务，快来试试吧~~",
            path: "/packageC/pages/mortgage/index"
        };
    },
    onshareTimeline: function() {
        return {
            title: "最专业的免费房贷税费计算器工具！",
            desc: "为您提供最精准的贷款、税费计算服务，快来试试吧~~",
            path: "/packageC/pages/mortgage/index"
        };
    },
    back: function() {
        wx.redirectTo({
            url: "/pages/mortgage/index"
        });
    }
});