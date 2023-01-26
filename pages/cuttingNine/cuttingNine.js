
Page({
    data: {
        canvasInfo: {
            id: "mycanvas",
            width: 320,
            height: 320
        },
        showInfo: {
            width: 320,
            height: 320
        },
        systemInfo: {
            width: 320,
            height: 568,
            screenHeight: 0
        },
        fixedHeight: 0,
        img: "",
        isChoose: !1,
    },
    onLoad: function(e) {
        var i = this;
        wx.getSystemInfo({
            success: function(t) {
                console.log(t.screenHeight), i.setData({
                    "systemInfo.width": t.windowWidth,
                    "systemInfo.height": t.windowHeight,
                    "systemInfo.screenHeight": t.screenHeight
                });
            }
        })
    },
    imageToCanvas: function(t) {
        var e = this.data.canvasInfo, i = wx.createCanvasContext(e.id, this);
        i.drawImage(t, 0, 0, e.width, e.height), i.draw();
    },
    cutImage: function(t) {
        var e = this;
        wx.getImageInfo({
            src: t,
            success: function(i) {
                var s = i.width, a = i.height;
                wx.getSystemInfo({
                    success: function(i) {
                        e.setData({
                            "systemInfo.width": i.windowWidth,
                            "systemInfo.height": i.windowHeight,
                            "canvasInfo.width": s,
                            "canvasInfo.height": a,
                            "systemInfo.screenHeight": i.screenHeight,
                            "showInfo.width": i.windowWidth,
                            "showInfo.height": i.windowWidth / s * a
                        });
                        var n = e.data.systemInfo.height / 2, o = e.data.showInfo.height + 10;
                        console.log("fh:" + n), console.log("ch:" + o), o > n && e.setData({
                            fixedHeight: o - n
                        }), e.imageToCanvas(t);
                    }
                });
            }
        });
    },
    previewImage: function(t) {
        var e = this.data.canvasInfo, i = t.currentTarget.dataset.index;
        wx.canvasToTempFilePath({
            canvasId: e.id,
            x: i % 3 * e.width / 3,
            y: parseInt(i / 3) * e.height / 3,
            width: e.width / 3,
            height: e.height / 3,
            success: function(t) {
                console.log("成功路径： " + t.tempFilePath);
                var e = [];
                e.push(t.tempFilePath), wx.previewImage({
                    urls: e
                });
            }
        }, this);
    },
    chooseImage: function(t) {
        var e = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            success: function(t) {
                e.setData({
                    img: t.tempFilePaths[0],
                    isChoose: !0
                }), e.cutImage(t.tempFilePaths[0]);
            }
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: "九宫格切图",
            path: "/pages/cuttingNine/cuttingNine",
            imageUrl: "https://website-178c6e-1252504509.tcloudbaseapp.com/images/photobox/cover.png"
        };
    },
    onShareTimeline: function(t) {
        return {
            title: "九宫格切图"
        };
    },
    saveAll: function() {
        var t = this.data.canvasInfo;
        wx.showLoading({
            title: "正在保存"
        });
        for (var e = 0; e < 9; e++) wx.canvasToTempFilePath({
            canvasId: t.id,
            x: e % 3 * t.width / 3,
            y: parseInt(e / 3) * t.height / 3,
            width: t.width / 3,
            height: t.height / 3,
            success: function(t) {
                wx.saveImageToPhotosAlbum({
                    filePath: t.tempFilePath,
                    success: function(t) {
                        wx.hideLoading({
                            complete: function(t) {
                                wx.showToast({
                                    title: "保存成功"
                                });
                            }
                        });
                    },
                    fail: function(t) {
                        console.log("err:" + t), wx.hideLoading({
                            complete: function(t) {}
                        }), wx.showToast({
                            title: "保存失败",
                            icon: "none"
                        });
                    }
                });
            }
        }, this);
    },
    back(){
      wx.navigateBack({
        delta: 1
      })
    }
});