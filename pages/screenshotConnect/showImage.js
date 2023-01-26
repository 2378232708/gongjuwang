var t = getApp();

Page({
  data: {
    imageInfo: [],
    direction: "vertical",
    canvasWidth: 0,
    canvasHeight: 0,
    systemHeight: 0,
    systemWidth: 0,
    showImage: {
      url: "",
      width: 0,
      height: 0
    },
    hidden: !1,
  },
  onLoad: function (e) {
    var a = this;
    a.setData({
      imageInfo: JSON.parse(e.imageInfo),
      direction: e.direction
    }), wx.getSystemInfo({
      success: function (t) {
        a.setData({
          systemWidth: t.windowWidth,
          systemHeight: t.windowHeight
        });
      }
    }), console.log(a.data.imageInfo), wx.showLoading({
      title: "拼接中",
      mask: !0
    }), a.connectImage();
  },
  save: function () {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.showImage.url,
      success: function (t) {
        wx.showToast({
          title: "保存成功"
        });
      },
      fail: function (t) {
        console.log("err:" + t), wx.showToast({
          title: "保存失败",
          icon: "none"
        });
      }
    });
  },
  connectImage: function () {
    var t = this,
      e = wx.createCanvasContext("draw", t),
      a = 0,
      i = 0,
      s = t.data.imageInfo;
    if ("vertical" == t.data.direction) {
      a = t.data.systemWidth;
      for (var h = 0, n = 0; h < s.length; h++) i += n = s[h].height * a / s[h].width;
      t.setData({
        canvasWidth: a,
        canvasHeight: i
      }), h = 0, n = 0;
      for (var o = 0; h < s.length; h++) n = s[h].height * a / s[h].width, h > 0 && (o += s[h - 1].height * a / s[h - 1].width),
        e.drawImage(s[h].url, 0, o, a, n);
    } else {
      i = t.data.systemHeight, h = 0;
      for (var g = 0; h < s.length; h++) a += g = s[h].width * i / s[h].height;
      t.setData({
        canvasWidth: a,
        canvasHeight: i
      }), h = 0, g = 0;
      for (var c = 0; h < s.length; h++) g = s[h].width * i / s[h].height, h > 0 && (c += s[h - 1].width * i / s[h - 1].height),
        e.drawImage(s[h].url, c, 0, g, i);
    }
    e.draw(), setTimeout(function (e) {
      wx.canvasToTempFilePath({
        canvasId: "draw",
        success: function (e) {
          console.log(e.tempFilePath), t.setData({
            "showImage.url": e.tempFilePath,
            hidden: !0
          }), t.setShowImage(e.tempFilePath), wx.hideLoading();
        }
      }, t);
    }, 500);
  },
  previewImage: function (t) {
    var e = [];
    e.push(this.data.showImage.url), wx.previewImage({
      current: e[0],
      urls: e
    });
  },
  setShowImage: function (t) {
    var e = this,
      a = e.data.direction,
      i = 0,
      s = 0;
    wx.getSystemInfo({
      success: function (h) {
        wx.getImageInfo({
          src: t,
          success: function (t) {
            if ("vertical" == a) n = .93, i = h.windowWidth * n, s = h.windowWidth / t.width * t.height * n;
            else {
              var n = .5;
              s = h.windowHeight * n, i = h.windowHeight / t.height * t.width * n;
            }
            e.setData({
              "showImage.width": i,
              "showImage.height": s
            });
          }
        });
      }
    });
  },
  back() {
    wx.navigateBack({
      delta: 1,
    })
  },
  onShareAppMessage: function (t) {
    return {
      title: "快速拼图",
      path: "/pages/screenshotConnect/screenshotConnect",
      imageUrl: "https://website-178c6e-1252504509.tcloudbaseapp.com/images/photobox/cover.png"
    };
  }
});