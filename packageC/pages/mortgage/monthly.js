var r = getApp();

require("../../1F946BE2071E6DCF79F203E515658836.js"), Page({
    data: {
        navbar: [ "月还款合计", "商业贷款", "公积金贷款" ],
        currentNavbar: 0,
        list_arr: "",
        list_arr2: "",
        list_arr3: "",
        rbt: "",
        dkt: "",
        total: "",
        pageinfo: {}
    },
    onLoad: function(a) {
        var t = new Array(), e = new Array(), i = new Array();
        "cn" == a.rbt ? 0 == a.dkt ? t = this.array_add(r.globalData.sd_result_arr_cn.list, e, 0) : 1 == a.dkt ? t = this.array_add(r.globalData.gjj_result_arr_cn.list, e, 0) : (t = this.array_add(r.globalData.sd_result_arr_cn.list, e, 0), 
        e = this.array_add(r.globalData.gjj_result_arr_cn.list, e, 0), i = this.array_add(r.globalData.sd_result_arr_cn.list, r.globalData.gjj_result_arr_cn.list, 0)) : 0 == a.dkt ? t = this.array_add(r.globalData.sd_result_arr_en.list, e, 0) : 1 == a.dkt ? t = this.array_add(r.globalData.gjj_result_arr_en.list, e, 0) : (t = this.array_add(r.globalData.sd_result_arr_en.list, e, 0), 
        e = this.array_add(r.globalData.gjj_result_arr_en.list, e, 0), i = this.array_add(r.globalData.sd_result_arr_en.list, r.globalData.gjj_result_arr_en.list, 0)), 
        this.setData({
            list_arr: t,
            list_arr2: e,
            list_arr3: i,
            rbt: a.rbt,
            dkt: a.dkt
        });
        var s = this;
        wx.getSystemInfo({
            success: function(r) {
                s.setData({
                    pageinfo: r
                });
            }
        });
    },
    array_add: function() {
        for (var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], t = arguments[2], e = r.length, i = a.length, s = Math.max(e, i), d = new Array(), l = 0; l < s; l++) d[l] = new Array(), 
        l + 1 > e ? (d[l][1] = l + 1, d[l][2] = Number(a[l][2]).toFixed(t), d[l][3] = Number(a[l][3]).toFixed(t), 
        d[l][4] = Number(a[l][4]).toFixed(t), d[l][5] = Number(a[l][5]).toFixed(t), d[l][6] = Number(a[l][6]).toFixed(t), 
        d[l][7] = Number(a[l][7]).toFixed(t)) : l + 1 > i ? (d[l][1] = l + 1, d[l][2] = Number(r[l][2]).toFixed(t), 
        d[l][3] = Number(r[l][3]).toFixed(t), d[l][4] = Number(r[l][4]).toFixed(t), d[l][5] = Number(r[l][5]).toFixed(t), 
        d[l][6] = Number(r[l][6]).toFixed(t), d[l][7] = Number(r[l][7]).toFixed(t)) : (d[l][1] = l + 1, 
        d[l][2] = (Number(r[l][2]) + Number(a[l][2])).toFixed(t), d[l][3] = (Number(r[l][3]) + Number(a[l][3])).toFixed(t), 
        d[l][4] = (Number(r[l][4]) + Number(a[l][4])).toFixed(t), d[l][5] = (Number(r[l][5]) + Number(a[l][5])).toFixed(t), 
        d[l][6] = (Number(r[l][6]) + Number(a[l][6])).toFixed(t), d[l][7] = (Number(r[l][7]) + Number(a[l][7])).toFixed(t));
        return d;
    },
    switchNav: function(r) {
        this.setData({
            currentNavbar: r.currentTarget.dataset.idx
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onShareAppMessage: function() {
        return {
            title: "最专业的免费房贷税费计算器工具！",
            desc: "为您提供最精准的贷款、税费计算服务，快来试试吧~~",
            path: "/pages/mortgage/index"
        };
    },
    onshareTimeline: function() {
        return {
            title: "最专业的免费房贷税费计算器工具！",
            desc: "为您提供最精准的贷款、税费计算服务，快来试试吧~~",
            path: "/pages/mortgage/index"
        };
    },
    back: function() {
        wx.redirectTo({
            url: "/pages/mortgage/index"
        });
    }
});