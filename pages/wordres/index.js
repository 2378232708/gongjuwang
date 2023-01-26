var t = require("../../utils/word"), o = require("../../utils/SpamWords"), r = getApp();

Page(function(t, o, r) {
    return o in t ? Object.defineProperty(t, o, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[o] = r, t;
}({
    data: {
        result: "",
        isLoading: !0,
        dotCount: 0,
        isEdit:false,
        translateText:'',
    },
    down: function() {
        var t = this;
        this.downIntervalId = setInterval(function() {
            if (t.data.dotCount > 2) t.setData({
                dotCount: 0
            }); else {
                var o = t.data.dotCount + 1;
                t.setData({
                    dotCount: o
                });
            }
        }, 300);
    },
    onLoad: function(t) {
        this.down();
        var o = t.id || "";
        if (o) {
            if (this.resultid = o, this.currentUrl = "https://ocr-image.cdn.bcebos.com/" + o + ".jpg", 
            r.globalData.result && r.globalData.fromIndex) return console.log("from local"), 
            r.globalData.fromIndex = !1, clearInterval(this.downIntervalId), void this.setData({ 
                isLoading: !1,
                result: r.globalData.result.map(function(t) {
                    return t.words;
                }).join("\r\n")
            });
            this.loadFromServer();
        }
    },
    loadFromServer: function() {
        if (console.log("loadFromServer", this.isLoadJson), !this.isLoadJson) {
            this.isLoadJson = !0, console.log("from server");
            var r = this;
            wx.request({
                url: "https://ocr-image.bj.bcebos.com/" + this.resultid + ".json",
                success: function(e) {
                    r.isLoadJson = !1, console.log(e.data);
                    try {
                        if (!e.data.words_result) return void (0, t.reportError)(e.data, "result_loadFromServer");
                        (0, o.isSpamWords)(e.data.words_result.map(function(t) {
                            return t.words;
                        }).join("")) && (e.data.words_result = [ {
                            words: "识别结果中包含违规内容，请识别其他图片"
                        } ]), r.setData({
                            isLoading: !1,
                            result: e.data.words_result.map(function(t) {
                                return t.words;
                            }).join("\r\n")
                        });
                    } catch (o) {
                        (0, t.reportError)(o, "result_loadFromServer");
                    }
                },
                fail: function(o) {
                    r.isLoadJson = !1, (0, t.reportError)(o, "result_loadFromServer");
                }
            });
        }
    },
    onReady: function() {},
    onShow: function() {
        r.globalData.result && r.globalData.fromIndex || this.loadFromServer();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    bindCopy: function() {
        wx.setClipboardData({
            data: this.data.result
        });
    },
    priviewImage: function() {
        wx.showToast({
            title: "暂不支持",
            icon: "none"
        });
    },
    edit: function() {
      this.setData({
        isEdit:!this.data.isEdit
      })
    },
    translate: function() {
        getApp().globalData.translate = this.data.result.replace(/\r|\n/, " "), wx.navigateTo({
            url: "/pages/translate/translate"
        });
    },
    back(){
      wx.navigateBack({
        delta: 1,
      })
    },
    changeRes(e){
      this.setData({
        result:e.detail.value
      })
    },
    translate(){
      wx.showLoading({
        title: '正在翻译',
      })
      var that=this
      wx.request({
        url: 'https://api.vvhan.com/api/fy?text='+this.data.result,
        success(res){
          wx.hideLoading()
          that.setData({
            translateText:res.data.data.fanyi
          })
        }
      })
    },
    translateCopy(){
      wx.setClipboardData({
        data: this.data.translateText
    });
    }
    
}, "onShareAppMessage", function(t) {
    return {
        title: "您的朋友分享了一个文档给您",
        path: "/pages/result/result?id=" + this.resultid,
        imageUrl: "https://pdf-zo3u6pssey.bj.bcebos.com/share.jpg"
    };
}));