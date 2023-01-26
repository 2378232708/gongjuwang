function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

getApp(), Page({
    data: {
        kindList: [],
        currentTab: 1,
        activeTab: 1,
        selectId: "kind1",
        kindScrollTop: [ 0, 0, 0, 0 ],
        touch: !0,
        detailVisible: !1,
        current: {
            kind: "1",
            name: "宝特瓶"
        },
        close: !0
    },
    onLoad: function() {
        wx.getStorageSync("close") ? this.setData({
            close: !0
        }) : this.setData({
            close: !1
        });
        var that=this
        wx.request({
          url: 'https://img.huangyuheng.top/api/getGar',
          success: function (res) { 
            that.setData({
              kindList:res.data
            })
          } 
        })
    },
    toSelect: function(t) {
        this.setData({
            activeTab: t.currentTarget.dataset.id,
            currentTab: t.currentTarget.dataset.id,
            touch: !1
        });
    },
    hideFavHint: function() {
        wx.setStorageSync("close", !0), this.setData({
            close: !0
        });
    },
    toSearch: function() {
        wx.navigateTo({
            url: "/pages/searchGar/searchGar"
        });
    },
    toggleDetail: function() {
      console.log(1);
        this.setData({
            detailVisible: !this.data.detailVisible
        });
    },
    toDetail: function(e) {
        var a;
        this.setData((t(a = {
            detailVisible: !0
        }, "current.kind", e.currentTarget.dataset.kind), t(a, "current.name", e.currentTarget.dataset.name), 
        a));
    },
    stopBubble: function() {},
    onShareAppMessage: function(t) {
        return {
            title: "垃圾分类查询",
            path: "/pages/guide/guide"
        };
    },
    back(){
      wx.navigateBack({
        delta: 1,
      })
    },
});