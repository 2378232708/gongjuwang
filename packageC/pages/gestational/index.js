var e = null;

Page({
    data: {
        starttime: "",
        date: "",
        endtime: "",
        nowTime: "",
        exTime: "",
        numsToal: "",
        lastWeek: "",
        lastDay: "",
        lastEx: "",
        openAd: 0,
        isWeekshow: !1,
        isDayweekshow: !0
    },
    bindDateChange: function(e) {
        console.log("picker发送选择改变，携带值为", e.detail.value), this.setData({
            date: e.detail.value
        });
    },
    onLoad: function() {
        wx.createInterstitialAd && (e = wx.createInterstitialAd({
            adUnitId: "adunit-d06877e0070e1e5e"
        })).onError(function(e) {
            console.log(e);
        }), console.log("页面加载事件");
        var t = new Date(), a = t.getFullYear(), n = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1, o = t.getMonth() < 10 ? "0" + t.getMonth() : t.getMonth(), s = t.getDate();
        s < 10 && (s = "0" + s), console.log(s);
        var i = a - 1 + "-" + n + "-" + s, l = a + "-" + o + "-" + s, g = a + "-" + n + "-" + s;
        this.setData({
            starttime: i,
            date: l,
            nowTime: g,
            endtime: g
        });
    },
    resetBtn: function() {
        this.setData({
            exTime: "",
            numsToal: "",
            lastWeek: "",
            lastDay: "",
            lastEx: "",
            isWeekshow: !1
        }), console.log(this.data.exTime);
    },
    clickCau: function() {
        e && e.show().catch(function(e) {
            console.error(e);
        });
        var t = new Date(this.data.date), a = new Date(), n = new Date(a.getTime() - t.getTime()), o = n.getTime() / 1e3 / 3600 / 24 / 7, s = parseInt(o), i = parseInt((n - 7 * s * 24 * 3600 * 1e3) / 1e3 / 3600 / 24), l = parseInt(n.getTime() / 1e3 / 3600 / 24), g = 280 - l, c = a.getTime() + 864e5 * g;
        c = (c = new Date(c)).getFullYear() + "-" + (c.getMonth() + 1 < 10 ? "0" + (c.getMonth() + 1) : c.getMonth() + 1) + "-" + (c.getDate() < 10 ? "0" + c.getDate() : c.getDate()), 
        g < 1 || g >= 280 ? wx.showToast({
            title: "请输入正确时间",
            icon: "none",
            success: function(e) {}
        }) : this.setData({
            exTime: c,
            numsToal: l,
            lastWeek: s,
            lastDay: i,
            lastEx: g,
            isWeekshow: !0,
            openAd: 1
        });
    },
    bindPickerCancel: function(e) {
        console.log(e), tt.showToast({
            title: "cancel"
        });
    },
    onShareAppMessage: function() {
        return {
            title: "预产期计算",
            path: "/pages/gestational/index"
        };
    },
    onShareTimeline: function() {
        return {
            title: "预产期计算",
            path: "/pages/gestational/index"
        };
    },
    back(){
      wx.navigateBack({
        delta: 1
      })
    }
});