var a = getApp(), e = require("../../1F946BE2071E6DCF79F203E515658836.js");

Page({
    data: {
        navbar: [ "商业贷款", "公积金贷款", "组合贷款" ],
        firstpay_arr: [ "2成", "3成", "4成", "5成", "6成", "7成", "8成", "9成" ],
        firstpay_index: 1,
        currentNavbar: 0,
        titlename: [ {
            re_type: "还款方式",
            jisuan_type: "计算方式",
            total: "贷款总额",
            price: "单价",
            area: "面积",
            firstpay: "首付",
            qishu: "贷款期限",
            lilv: "贷款利率"
        }, {
            re_type: "还款方式",
            gjj_total: "公积金贷款总额",
            gjj_qishu: "公积金贷款期限",
            gjj_lilv: "公积金贷款利率"
        }, {
            re_type: "还款方式",
            total: "商业贷款总额",
            qishu: "商业贷款期限",
            lilv: "商业贷款利率",
            gjj_total: "公积金款总额",
            gjj_qishu: "公积金贷款期限",
            gjj_lilv: "公积金贷款利率"
        } ],
        refundArr: [ {
            typevalue: "cn",
            name: "等额本息"
        }, {
            typevalue: "en",
            name: "等额本金 "
        } ],
        lprchoose_arr: [ "按最新LPR", "按旧版基准利率" ],
        lprIndex: 0,
        lprvalue: 0,
        jidanvalue: 0,
        jidianlilv: "",
        currentRefund: "cn",
        jisuanRefund: "all",
        all_fangdaiset: "",
        max_lilv: 30,
        nianxianindex: 20,
        gjj_nianxianindex: 20,
        chooselilv_1: "",
        chooselilv_2: "",
        show_base_lilv: {
            sd: "",
            gjj: ""
        },
        showDialog: !1,
        jumpxcximg: ""
    },
    onLoad: function() {
        this.get_fangdaiset(), wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        });
    },
    bindPickerChange: function(a) {
        this.setData({
            firstpay_index: a.detail.value
        });
    },
    lprChange: function(a) {
        this.setData({
            lprIndex: a.detail.value
        });
    },
    lprdefaultvalueset: function() {
        if (1 == this.data.nianxianindex) a = this.data.all_fangdaiset.lprinfo.lpr_value_oneyear; else var a = this.data.all_fangdaiset.lprinfo.lpr_value;
        this.setData({
            lprvalue: a
        }), this.resetjidianlilv();
    },
    resetjidianlilv: function() {
        var a = parseFloat(this.data.jidanvalue ? this.data.jidanvalue : 0) / 100, e = parseFloat(this.data.lprvalue) + parseFloat(a);
        this.setData({
            jidianlilv: Number(e.toFixed(4))
        });
    },
    changejiidan: function(a) {
        if (e = 0, "-" == a.detail.value.substr(0, 1)) var e = 1;
        var t = a.detail.value.toString().replace(/[^\d.]/g, "");
        return t = (t = (t = t.replace(/^\./g, "")).replace(/^0*(0\.|[1-9])/, "$1")).replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), 
        e && (t = "-" + t), this.setData({
            jidanvalue: t && "-" != t ? Number(t) : 0
        }), this.resetjidianlilv(), t.toString();
    },
    changelprvalue: function(a) {
        var e = a.detail.value.toString().replace(/[^\d.]/g, "");
        return e = (e = (e = e.replace(/^\./g, "")).replace(/^0*(0\.|[1-9])/, "$1")).replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), 
        this.setData({
            lprvalue: e
        }), this.resetjidianlilv(), e.toString();
    },
    ipt: function(a) {
        var e = a.detail.value.toString().replace(/[^\d.]/g, "");
        return (e = (e = (e = e.replace(/^\./g, "")).replace(/^0*(0\.|[1-9])/, "$1")).replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")).toString();
    },
    onShow: function() {
        // this.setData({
        //     chooselilv_1: a.globalData.chooselilv_1_log.chooselilv,
        //     chooselilv_2: a.globalData.chooselilv_2_log.chooselilv
        // });
    },
    onReady: function() {},
    onHide: function() {},
    onUnload: function() {},
    get_fangdaiset: function() {
        var t, l, i = this;
        e.get_fangdai_set(function(e) {
            t = i.data.nianxianindex <= 1 ? e.newdata.business1Below[0].data : i.data.nianxianindex > 5 ? e.newdata.business5Over[0].data : e.newdata.business1to5[0].data, 
            l = i.data.gjj_nianxianindex > 5 ? e.newdata.fund5Over[0].data : e.newdata.fund5Below[0].data, 
            i.setData({
                all_fangdaiset: e,
                max_lilv: e.mortgage_year.length,
                chooselilv_1: t,
                chooselilv_2: l,
                show_base_lilv: {
                    sd: t,
                    gjj: l
                }
            }), i.resetjidianlilv(), i.lprdefaultvalueset(), a.globalData.all_fangdaiset = e, 
            a.globalData.chooselilv_1_log = {
                choosetype: 1,
                x: t,
                y: 1,
                chooselilv: t
            }, a.globalData.chooselilv_2_log = {
                choosetype: 1,
                x: l,
                y: 1,
                chooselilv: l
            };
        });
    },
    radioChange: function(a) {
        var e = a.currentTarget.dataset.inputname;
        "re_type" == e ? this.setData({
            currentRefund: a.currentTarget.dataset.idx
        }) : "jisuan_type" == e && this.setData({
            jisuanRefund: a.currentTarget.dataset.idx
        });
    },
    changqishu: function(e) {
        var t, l, i = e.currentTarget.id;
        "qishu" == i ? (t = e.detail.value <= 1 ? this.data.all_fangdaiset.newdata.business1Below[0].data : e.detail.value > 5 ? this.data.all_fangdaiset.newdata.business5Over[0].data : this.data.all_fangdaiset.newdata.business1to5[0].data, 
        this.setData({
            nianxianindex: e.detail.value,
            chooselilv_1: t,
            show_base_lilv: {
                sd: t,
                gjj: this.data.show_base_lilv.gjj
            }
        }), this.lprdefaultvalueset(), a.globalData.chooselilv_1_log = {
            choosetype: 1,
            x: t,
            y: 1,
            chooselilv: t
        }) : "gjj_qishu" == i && (l = e.detail.value > 5 ? this.data.all_fangdaiset.newdata.fund5Over[0].data : this.data.all_fangdaiset.newdata.fund5Below[0].data, 
        this.setData({
            gjj_nianxianindex: e.detail.value,
            chooselilv_2: l,
            show_base_lilv: {
                sd: this.data.show_base_lilv.sd,
                gjj: l
            }
        }), a.globalData.chooselilv_2_log = {
            choosetype: 1,
            x: l,
            y: 1,
            chooselilv: l
        });
    },
    swichNav: function(a) {
        this.setData({
            currentNavbar: a.currentTarget.dataset.idx
        });
    },
    formSubmit: function(t) {
        var l = "", i = t.detail.value.daikan_type, n = t.detail.value.re_type, s = t.detail.value.jisuan_type, r = 1e4 * Number(t.detail.value.total), o = Number(t.detail.value.price), d = Number(t.detail.value.area), u = Number(t.detail.value.firstpay) / 10, g = 12 * Number(t.detail.value.qishu), h = Number(t.detail.value.lilv) / 100, v = 1e4 * Number(t.detail.value.gjj_total), c = 12 * Number(t.detail.value.gjj_qishu), _ = Number(t.detail.value.gjj_lilv) / 100, p = new Array(), f = new Array(), j = new Array(), b = new Array();
        if (0 == i && "prize" == s ? ("" == o || 0 == o ? l = "请输入单价" : 0 == /^\d+$/.test(o) ? l = "单价只能输入数字" : "" == d || 0 == d ? l = "请输入面积" : 0 == /^\d+$/.test(o) && (l = "面积只能输入数字"), 
        r = o * d * (.8 - u)) : 0 != i && 2 != i || ("" == r || 0 == r ? l = "请输入商贷总额" : 0 == /^\d+$/.test(r) && (l = "商贷总额只能输入数字")), 
        1 != i && 2 != i || ("" == v || 0 == v ? l = "请输入公积金总额" : 0 == /^\d+$/.test(v) && (l = "公积金总额只能输入数字")), 
        l) return wx.showModal({
            title: "输入提示",
            content: l,
            showCancel: !1,
            success: function(a) {
                a.confirm;
            }
        }), !1;
        if (wx.showToast({
            title: "计算之中",
            icon: "loading",
            mask: !0,
            duration: 1e4
        }), 0 == this.data.lprIndex) {
            var y = parseFloat(this.data.jidanvalue ? this.data.jidanvalue : 0) / 100;
            h = Number(parseFloat(this.data.lprvalue) + parseFloat(y)) / 100;
        }
        1 == i ? (f = e.getlist_bytype1(v, _, c), b = e.getlist_bytype2(v, _, c)) : 0 == i ? (p = e.getlist_bytype1(r, h, g), 
        j = e.getlist_bytype2(r, h, g)) : (p = e.getlist_bytype1(r, h, g), f = e.getlist_bytype1(v, _, c), 
        j = e.getlist_bytype2(r, h, g), b = e.getlist_bytype2(v, _, c)), a.globalData.gjj_result_arr_cn = f, 
        a.globalData.gjj_result_arr_en = b, a.globalData.sd_result_arr_cn = p, a.globalData.sd_result_arr_en = j, 
        wx.hideToast(), wx.redirectTo({
            url: "/packageC/pages/mortgage/result?rbt=" + n + "&dkt=" + i
        });
    },
    showdtlDialog: function() {
        this.setData({
            showDialog: !0
        });
    },
    closedialog: function() {
        this.setData({
            showDialog: !1
        });
    },
    gotfxcx: function() {
        wx.navigateToMiniProgram({
            appId: "wx95b9feef72e1a67d",
            path: "page/index/index"
        });
    },
    onShareAppMessage: function(a) {
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
    }
});