function t(t, e, a) {
  return e in t ? Object.defineProperty(t, e, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = a, t;
}

var e = function (t) {
  return t && t.__esModule ? t : {
    default: t
  };
}

Page({
  data: {
    kindList: [],
    detailVisible: !1,
    searchList: [],
    backHomeVisible: !1,
    searchText: ""
  },
  onLoad: function (t) {
    var that = this
    wx.request({
      url: 'https://img.huangyuheng.top/api/getGar',
      success: function (res) {
        // console.log(res.data);
        "share" == t.share && this.setData({
          backHomeVisible: !0
        });
        var a = [];
        for (var i in res.data) {
          var n = res.data[i];
          a.push(n);
        }
        that.setData({
          kindList: a
        });
      }
    })

  },
  search: function (t) {
    this.setData({
      searchList: []
    });
    var e = [],
      a = t.detail.value.trim();
    this.setData({
      searchText: a
    }), a.length > 0 && this.data.kindList.forEach(function (t) {
      t.forEach(function (t) {
        -1 == t.name.indexOf(a) && -1 == t.alias.indexOf(a) || e.push(t);
      });
    }), this.setData({
      searchList: e
    });
  },
  toDetail: function (e) {
    var a;
    this.setData((t(a = {
        detailVisible: !0
      }, "current.kind", e.currentTarget.dataset.kind), t(a, "current.name", e.currentTarget.dataset.name),
      a));
  },
  toggleDetail: function () {
    this.setData({
      detailVisible: !this.data.detailVisible
    });
  },
  back() {
    wx.navigateBack({
      delta: 1,
    })
  },
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function (t) {
    return {
      title: "垃圾分类查询",
      path: "/pages/guide/guide"
    };
  }
});