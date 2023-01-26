var e = require("../../7B639004071E6DCF1D05F80353378836.js"), t = require("../../FEFB01E0071E6DCF989D69E76A278836.js");

Page({
    data: {
        info: {
            hidden: !0,
            info: e.balanceInfo
        },
        contents: [ {
            id: "1",
            title: "退休城市",
            content: "深圳",
            array: e.selectCity,
            value: "0",
            mode: "selector"
        }, {
            id: "2",
            title: "现在年龄",
            content: "30岁",
            array: e.selectAge,
            value: "12",
            mode: "selector"
        }, {
            id: "3",
            title: "现已参保",
            content: "6年",
            array: e.selectTime,
            value: [ "6", "0" ],
            mode: "multiSelector"
        }, {
            id: "4",
            title: "税前工资",
            content: "¥ 10000",
            placeholder: "当前每月参保工资",
            maxlength: "12",
            input: !0,
            value: "¥ 10000"
        }, {
            id: "5",
            title: "任职企业",
            content: "民营企业",
            array: e.selectCompanyType,
            value: "3",
            mode: "selector"
        }, {
            id: "6",
            title: "退休身份",
            content: "男同胞",
            array: e.selectIdentity,
            value: "0",
            mode: "selector"
        }, {
            id: "7",
            title: "养老余额",
            maxlength: "12",
            content: "",
            placeholder: "个人已缴养老保险总额",
            input: !0,
            value: ""
        } ]
    },
    bindPickerChange: function(t) {
        console.log(t);
        var n = t.currentTarget.id, o = t.detail.value, a = this.data.contents;
        switch (n) {
          case "1":
            console.log(e.selectCity.length), Number(o) == e.selectCity.length - 1 && (o = "0"), 
            a[0].content = e.selectCity[o];
            break;

          case "2":
            a[1].content = e.selectAge[o];
            break;

          case "3":
            var i = "", c = 0 == o[0], l = 0 == o[1];
            c && l ? i = "0年" : (c || (i += e.selectTime[0][o[0]]), l || (i += e.selectTime[1][o[1]])), 
            a[2].content = i;
            break;

          case "5":
            a[4].content = e.selectCompanyType[o];
            break;

          case "6":
            a[5].content = e.selectIdentity[o];
        }
        a[n - 1].value = o, this.setData({
            contents: a
        });
    },
    bindfocusAction: function(e) {
        var t = e.detail.value, n = e.currentTarget.id, o = this.data.contents;
        0 != t.length && (t = t.substring(2)), o[n - 1].content = t, o[n - 1].maxlength = 10, 
        this.setData({
            contents: o
        });
    },
    bindblurAction: function(e) {
        var t = e.detail.value, n = e.currentTarget.id, o = this.data.contents;
        0 != t.length && (t = "¥ " + t), o[n - 1].content = t, o[n - 1].value = t, o[n - 1].maxlength = 12, 
        this.setData({
            contents: o
        });
    },
    onGotUserInfo: function(e) {
        if (console.log(e), "getUserInfo:ok" == e.detail.errMsg) {
            var t = e.detail.userInfo.avatarUrl, n = e.detail.userInfo.nickName;
            this.formSubmit(t, n);
        }
    },
    formSubmit: function(e, n) {
        var o = this.data.contents;
        if ("" != o[3].value) if ("" != o[6].value) {
            wx.showLoading({
                title: "",
                mask: !0
            });
            var a = t.calculate(o);
            wx.hideLoading(), wx.redirectTo({
                url: "/packageC/pages/pension/result?url=" + e + "&nick=" + n + "&pension=" + a + "&city=" + o[0].value
            });
        } else wx.showToast({
            title: "请输入养老余额",
            icon: "none"
        }); else wx.showToast({
            title: "请输入税前工资",
            icon: "none"
        });
    },
    infoAction: function(t) {
        var n = t.target.id, o = this.data.info;
        "4" == n ? (o.hidden = !1, o.info = e.salaryInfo) : "7" == n && (o.hidden = !1, 
        o.info = e.balanceInfo), this.setData({
            info: o
        });
    },
    coverViewTap: function(e) {},
    infoButtonAction: function(e) {
        var t = this.data.info;
        t.hidden = !0, this.setData({
            info: t
        });
    },
    onLoad: function(e) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "邀请你PK养老金收入",
            path: "pages/pension/index"
        };
    }
});