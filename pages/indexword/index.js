var e = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s]);
    }
    return e;
  },
  t = require("../..//utils/word.js"),
  o = getApp()

Page({
  data: {},
  goHistory: function () {
    wx.navigateTo({
      url: "/pages/history/history"
    });
  },
  bindViewTap2: function () {
    wx.chooseMessageFile ? this.selectImageFromChat() : this.selectImageFromAlbum();
  },
  bindViewTap: function () {
    this.selectImageFromAlbum();
  },
  onLoad: function () {},
  selectImageFromChat: function () {
    var e = this;
    wx.chooseMessageFile({
      count: 9,
      type: "image",
      success: function (t) {
        e.uploadFiles(t.tempFiles);
      }
    });
  },
  selectImageFromAlbum: function () {
    var e = this;
    (0, t.getAdsObj)().todayCount >= 30 && !(0, t.getAdsObj)().showAds1 && s ? s.show().catch(function () {
      s.load().then(function () {
        return s.show();
      }).catch(function (t) {
        console.log("激励视频 广告显示失败"), wx.chooseImage({
          count: 9,
          sizeType: ["compressed"],
          sourceType: ["album", "camera"],
          success: function (t) {
            e.uploadFiles(t.tempFiles);
          }
        });
      });
    }) : wx.chooseImage({
      count: 9,
      sizeType: ["compressed"],
      sourceType: ["album", "camera"],
      success: function (t) {
        e.uploadFiles(t.tempFiles);
      }
    });
  },
  uploadFiles: function (e) {
    this.files = e, this.errorCount = 0, this.result = "", this.current = -1, this.processUpload();
  },
  processUpload: function (e, s) {
    var n = this;
    if (wx.hideLoading(), this.current++, e && (this.errorCount++, console.log(e), (0,
        t.reportError)(e, "index_processUpload")), !this.files[this.current]) return clearTimeout(this.loadingTimeoutid),
      this.files.length === this.errorCount ? void wx.showToast({
        title: "出错了，请重试",
        icon: "none"
      }) : (o.globalData.needUpdateHistory = !0, 1 === this.files.length ? (console.log("result", s),
        o.globalData.result = s.words_result, o.globalData.fromIndex = !0, void wx.navigateTo({
          url: "/pages/wordres/index?from=index&id=" + s.id
        })) : void wx.showModal({
        title: "识别结果",
        content: "本次共识别" + this.files.length + "张图片。成功：" + (this.files.length - this.errorCount) + "，失败：" + this.errorCount + "。请到历史记录查看。",
        showCancel: !1,
        confirmText: "查看",
        success: function () {
          wx.navigateTo({
            url: "/pages/history/history"
          });
        }
      }));
    this.loadingTimeoutid = setTimeout(function () {
      wx.showLoading({
        title: "正在识别第" + (n.current + 1) + "张...",
        mask: !1
      });
    }, 0 === this.current ? 500 : 0), this.uploadFile(this.files[this.current], this.processUpload);
  },
  uploadFile: function (s, n) {
    try {
      (0, t.addTodayAdsCount)(), o.globalData.currentTimes = o.globalData.currentTimes + 1;
      var i = new Date().getTime(),
        a = (0, t.getRandomId)() + ".jpg";
      wx.uploadFile({
        url: "https://ocr-image.bj.bcebos.com",
        filePath: s.path,
        name: "file",
        formData: {
          key: a
        },
        success: function (o) {
          "" === o.data ? wx.request({
            method: "POST",
            url: "https://enzev6807c9ws.cfc-execute.bj.baidubce.com/bNRWAT2CSd",
            data: e({
              tracking_id: (0, t.getTrackingId)()
            }, (0, t.getSign)(), {
              from: "weichat-v1.4.1",
              filename: a
            }),
            success: function (e) {
              wx.reportAnalytics("reg_time", {
                time: (new Date().getTime() - i) / 1e3
              });
              try {
                var o = e.data;
                "string" == typeof o && (o = JSON.parse(o)), (0, t.saveItem)({
                  id: a.replace(".jpg", ""),
                  createdAt: new Date().getTime(),
                  result: o.words_result.map(function (e) {
                    return e.words;
                  }).join("\r\n").substring(0, 60) + "..."
                }), n(null, o);
              } catch (e) {
                n(e);
              }
            },
            fail: function (e) {
              n(e);
            }
          }) : n(o.data);
        },
        fail: function (e) {
          n(e);
        }
      });
    } catch (e) {
      n(e);
    }
  },
  back(){
    wx.navigateBack({
      delta: 1,
    })
  },
  onShow: function () {

  }
});