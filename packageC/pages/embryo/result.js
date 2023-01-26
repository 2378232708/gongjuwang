var e = null;

Page({
    data: {
        currentRefer: {
            week: 13,
            bdp: {
                start: 2.27,
                end: 2.77
            },
            ac: {
                start: 5.25,
                end: 8.55
            },
            fl: {
                start: .86,
                end: 1.48
            },
            weight: {
                start: 20,
                end: 60
            }
        },
        bodyBDP: 0,
        bodyAC: 0,
        bodyFL: 0,
        bodyWeight: 0,
        bodyGram: 0,
        isValidationDirectly: 0,
        validation: {}
    },
    onLoad: function(a) {
        wx.createRewardedVideoAd && ((e = wx.createRewardedVideoAd({
            adUnitId: ""
        })).onError(function(e) {
            t.setData({
                isValidationDirectly: 1
            });
        }), e.onClose(function(e) {
            wx.navigateTo({
                url: "./weightvalidation/index?value=".concat(t.data.validation.weight.value, "&message=").concat(t.data.validation.weight.message)
            });
        }));
        var t = this, i = parseInt(a.week), n = wx.getStorageSync("weights");
        if (n) {
            var d = (n = JSON.parse(n)).find(function(e) {
                return e.week === i;
            });
            if (d) {
                var r = {
                    weight: {
                        text: "胎儿体重",
                        value: d.weight,
                        message: "体重正常"
                    },
                    bdp: {
                        text: "双顶径(BPD)",
                        value: d.bdp,
                        message: "正常"
                    },
                    ac: {
                        text: "腹围(AC)",
                        value: d.ac,
                        message: "正常"
                    },
                    fl: {
                        text: "股骨长(FL)",
                        value: d.fl,
                        message: "正常"
                    }
                }, o = parseFloat(d.gram);
                d.refer.weight.start > o && (r.weight.message = "体重偏低"), d.refer.weight.end < o && (r.weight.message = "体重偏高");
                var s = parseFloat(d.bdp);
                d.refer.bdp.start > s && (r.bdp.message = "偏低"), d.refer.bdp.end < s && (r.bdp.message = "偏高");
                var l = parseFloat(d.ac);
                d.refer.ac.start > l && (r.ac.message = "偏低"), d.refer.ac.end < l && (r.ac.message = "偏高");
                var g = parseFloat(d.fl);
                d.refer.fl.start > g && (r.fl.message = "偏低"), d.refer.fl.end < g && (r.fl.message = "偏高"), 
                t.setData({
                    week: i,
                    currentRefer: d.refer,
                    bodyBDP: d.bdp,
                    bodyAC: d.ac,
                    bodyFL: d.fl,
                    bodyWeight: d.weight,
                    bodyGram: d.gram,
                    validation: r
                });
            }
        }
    },
    validateWeight: function() {
        var a = this;
        a.data.isValidationDirectly ? wx.navigateTo({
            url: "./weightvalidation/index?value=".concat(a.data.validation.weight.value, "&message=").concat(a.data.validation.weight.message)
        }) : wx.showModal({
            title: "",
            content: "点击确定",
            confirmColor: "#FF6173",
            confirmText: "确定",
            success: function(t) {
                t.confirm && e ? e.show().catch(function(e) {
                    wx.navigateTo({
                        url: "./weightvalidation/index?value=".concat(a.data.validation.weight.value, "&message=").concat(a.data.validation.weight.message)
                    });
                }) : wx.navigateTo({
                    url: "./weightvalidation/index?value=".concat(a.data.validation.weight.value, "&message=").concat(a.data.validation.weight.message)
                });
            }
        });
    },
    validateBmode: function(e) {
        var a = e.currentTarget.dataset.key, t = this.data.validation[a];
        wx.navigateTo({
            url: "./bmodevalidation/index?text=".concat(t.text, "&value=").concat(t.value, "&message=").concat(t.message)
        });
    },
    onShareAppMessage: function() {
        return {
            title: "预测胎儿体重，及早发现胎儿发育上存在的问题",
            path: "/pages/embryo/index"
        };
    }
});