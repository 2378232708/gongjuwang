var e = getApp();

Page({
    data: {
        imageInfo: [],
        imageUrls: [],
        ad: {}
    },
    onReady: function() {},
    previewImage: function(e) {
        var a = this;
        wx.chooseImage({
            count: 9,
            success: function(e) {
                for (var t = 0; t < e.tempFilePaths.length; t++) a.getImageInfo(e.tempFilePaths[t]);
            }
        });
    },
    getImageInfo: function(e) {
        var a = this;
        wx.getImageInfo({
            src: e,
            success: function(t) {
                var n = a.data.imageInfo, i = a.data.imageUrls, s = new Object();
                s.url = e, s.width = t.width, s.height = t.height, n.push(s), i.push(e), a.setData({
                    imageInfo: n,
                    imageUrls: i
                });
            }
        });
    },
    changePreview: function(e) {
        wx.previewImage({
            current: e.currentTarget.dataset.src,
            urls: this.data.imageUrls
        });
    },
    removeImage: function(e) {
        var a = this, t = a.data.imageInfo, n = a.data.imageUrls, i = e.currentTarget.dataset.index;
        t.splice(i, 1), n.splice(i, 1), a.setData({
            imageInfo: t,
            imageUrls: n
        });
    },
    goToPage: function(e) {
        var a = e.currentTarget.dataset.direction;
        null == this.data.imageInfo[1] ? wx.showToast({
            title: "至少要选两张图！",
            icon: "none"
        }) : wx.navigateTo({
            url: "./showImage?imageInfo=" + JSON.stringify(this.data.imageInfo) + "&direction=" + a
        });
    },
    back(){
      wx.navigateBack({
        delta: 1,
      })
    },
    onLoad: function(a) {
    },
    onShareAppMessage: function(e) {
        return {
            title: "快速拼图",
            path: "/pages/screenshotConnect/screenshotConnect"
        };
    },
    onShareTimeline: function(e) {
        return {
            title: "快速拼图"
        };
    }
});