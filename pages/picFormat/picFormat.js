getApp();

var t = null;

Page({
    data: {
        fileList: [],
        imgeurl: "",
        candis: !0,
        isupImg: !1,
        size: "",
        type: "",
        wh: "",
        imgpath: "",
        cpimgpaht: "",
        array: [ .9, .8, .5, .3, .1 ],
        popShow: !1,
        quality: 1,
        iscpimg: !1
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    onLoad: function() {

    },
    compressImage: function(t, e) {
        wx.showLoading({
            title: "生成图片"
        });
        var i = this;
        wx.getImageInfo({
            src: e,
            success: function(e) {
                var a = e.width, s = e.height;
                i.setData({
                    cWidth: a,
                    cHeight: s
                });
                var o = wx.createCanvasContext("canvas");
                o.drawImage(e.path, 0, 0, a, s), o.draw(!1, setTimeout(function() {
                    wx.canvasToTempFilePath({
                        canvasId: "canvas",
                        destWidth: a,
                        destHeight: s,
                        fileType: t,
                        quality: i.data.quality,
                        success: function(t) {
                            var e = t.tempFilePath;
                            i.getinfo(e);
                        },
                        fail: function(t) {
                            console.log(t.errMsg);
                        }
                    });
                }, 100));
            },
            fail: function(t) {
                console.log(t.errMsg);
            }
        });
    },
    getinfo: function(t) {
        var e = this;
        wx.getImageInfo({
            src: t,
            success: function(i) {
                wx.getFileInfo({
                    filePath: t,
                    success: function(a) {
                        e.setData({
                            cpimgpaht: t,
                            iscpimg: !0,
                            cpsize: (a.size / 1024).toFixed(2) + "kb",
                            cptype: i.type,
                            cpwh: i.width + " × " + i.height
                        }), wx.hideLoading();
                    }
                });
            }
        });
    },
    save: function() {
        wx.saveImageToPhotosAlbum({
            filePath: this.data.cpimgpaht,
            success: function() {
                wx.showModal({
                    title: "保存成功，请前往相册查看"
                });
            }
        });
    },
    getwork: function(t) {
        var e = this, i = new Date().valueOf().toString(16), a = i.substr(3) + "Q" + i.substr(0, 3);
        wx.uploadFile({
            url: "https://www.funens.com/api/img2gif",
            filePath: t,
            name: "file",
            header: {
                "Content-Type": "multipart/form-data"
            },
            timeout: 3e4,
            formData: {
                token: a
            },
            success: function(t) {
                wx.hideLoading();
                var i = JSON.parse(t.data);
                100 != i.errno ? (e.setData({
                    imgeurl: i.filePath
                }), wx.showToast({
                    title: "转换成功",
                    icon: "none"
                })) : wx.showModal({
                    title: "违规提示",
                    content: "图片违规",
                    showCancel: !1,
                    confirmColor: "#DC143C"
                });
            }
        });
    },
    back(){
      wx.navigateBack({
        delta: 1,
      })
    },
    tojpg: function() {
        this.setData({
            popShow: !0
        });
    },
    topng: function() {
        this.setData({
            quality: 1
        }), this.compressImage("png", this.data.imgpath);
    },
    fileCheck: function() {
        var t = this;
        this.setData({
            isupImg: !1,
            iscpimg: !1
        }), wx.chooseMessageFile({
            count: 1,
            type: "image",
            success: function(e) {
                wx.showLoading({
                    title: "加载图片"
                }), t.getImgMssage(e.tempFiles[0].path, e.tempFiles[0].size);
            }
        });
    },
    imgCheck: function() {
        var t = this;
        this.setData({
            isupImg: !1,
            iscpimg: !1
        }), wx.chooseImage({
            number: 1,
            success: function(e) {
                wx.showLoading({
                    title: "加载图片"
                }), t.getImgMssage(e.tempFiles[0].path, e.tempFiles[0].size);
            }
        });
    },
    onShareAppMessage: function(t) {
        return this.setData({
            shared: !0,
            showTip: !1
        }), {
            title: "图片照片转换",
            path: "/pages/index/index",
            imageUrl: "https://i.loli.net/2020/11/05/nUC9P58Iesmu14V.png"
        };
    },
    getImgMssage: function(t, e) {
        var i = this;
        wx.getImageInfo({
            src: t,
            success: function(a) {
                i.setData({
                    imgpath: t,
                    isupImg: !0,
                    size: (e / 1024).toFixed(2) + "kb",
                    type: a.type,
                    wh: a.width + " × " + a.height
                }), wx.hideLoading();
            }
        });
    },
    onCancel: function() {
        this.setData({
            popShow: !1,
            quality: 1
        }), this.compressImage("jpg", this.data.imgpath);
    },
    onConfirm: function(t) {
        this.setData({
            popShow: !1,
            quality: t.detail.value
        }), this.compressImage("jpg", this.data.imgpath);
    }
});