require("../../3F378EB5071E6DCF5951E6B2EE058836.js")(require("../../7D0F8764071E6DCF1B69EF638EF48836.js")), 
getApp();

var a = require("../../A2860E03071E6DCFC4E0660497558836.js");

require("../../25AEE823071E6DCF43C88024FB458836.js"), Page({
    data: {
        date: a.formatDate(new Date()),
        expireDate: "****-**-**",
        dateDays: null,
        dateWeeks: null,
        dateMonths: null,
        dateYears: null,
        classFlag: 1,
        isDisplayed: 1,
        historyList: [],
        dataType: "1",
        hideNotice: 0,
        step: 1,
        distance: 0,
        space: 30,
        interval: 35,
        wantList: [],
        openAd: 0
    },
    bindDateChange: function(e) {
        var t = e.detail.value;
        this.setData({
            date: t
        });
        var s = "1", i = null;
        if (this.data.dateDays && (s = "1", i = this.data.dateDays), this.data.dateWeeks && (s = "2", 
        i = this.data.dateWeeks), this.data.dateMonths && (s = "3", i = this.data.dateMonths), 
        this.data.dateYears && (s = "4", i = this.data.dateYears), null != i) {
            var n = a.addDate(t, i, s);
            n && (this.setData({
                expireDate: n,
                classFlag: a.compareDate(n, new Date()),
                dataType: s,
                openAd: 1
            }), this.storeData(t, i, s, n));
        }
    },
    calculatDate: function(e) {
        var t = e.detail.value, s = e.currentTarget.dataset.type;
        if (this.setData({
            dateDays: "1" == s ? t : null,
            dateWeeks: "2" == s ? t : null,
            dateMonths: "3" == s ? t : null,
            dateYears: "4" == s ? t : null,
            expireDate: "****-**-**",
            classFlag: !0
        }), t) {
            var i = this.data.date, n = a.addDate(i, t, s);
            n && (this.setData({
                expireDate: n,
                classFlag: a.compareDate(n, new Date()),
                openAd: 1
            }), this.storeData(i, t, s, n));
        }
    },
    onReady: function() {
        var e = new Date();
        a.compareDate(e, "2020-11-16") ? this.setData({
            isDisplayed: !1
        }) : this.setData({
            isDisplayed: !0
        });
        var t = wx.getStorageSync("clearIndexFlag");
        null != t && "" != t || (this.clearStore(), wx.setStorage({
            data: "1",
            key: "clearIndexFlag"
        }));
        var s = wx.getStorageSync("index");
        null != s && "" != s && s.forEach(function(e, t) {
            e.classFlag = a.compareDate(e.expireDate, new Date());
        }), this.setData({
            historyList: s
        });
    },
    onShareAppMessage: function() {
        return {
            title: "保质期计算",
            path: "/pages/expiration/index"
        };
    },
    onshareTimeline: function() {
        return {
            title: "保质期计算",
            path: "/pages/expiration/index"
        };
    },
    storeData: function(e, t, s, i) {
        var n = wx.getStorageSync("index"), d = {
            date: e,
            days: t,
            typeName: "1" == s ? "天数" : "2" == s ? "周数" : "3" == s ? "月数" : "年数",
            expireDate: i,
            classFlag: a.compareDate(i, new Date()),
            type: s
        };
        null == n || "" == n ? n = [ d ] : (n.length > 30 && n.pop(), n.unshift(d)), wx.setStorage({
            data: n,
            key: "index"
        }), this.setData({
            historyList: n
        });
    },
    clearStore: function() {
        wx.clearStorageSync("index"), this.setData({
            historyList: []
        });
    },
    onclick: function(a) {
        var e = a.currentTarget.dataset.value;
        this.setData({
            dateDays: "1" == e.type ? e.days : null,
            dateWeeks: "2" == e.type ? e.days : null,
            dateMonths: "3" == e.type ? e.days : null,
            dateYears: "4" == e.type ? e.days : null,
            days: e.days,
            expireDate: e.expireDate,
            classFlag: e.classFlag,
            dataType: e.type,
            date: e.date
        });
    },
    switchNotice: function() {
        this.setData({
            hideNotice: !0
        });
    },
    onShow: function() {}
});