// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  goColl(){
    wx.navigateTo({
      url: '/pages/collection/collection',
    })
  },
  gofeedback(){
    wx.navigateTo({
      url: '/pages/feedback/feedback',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: "工具王，满足你的一切需求",
      path: "/pages/index/index",
      imageUrl: "https://img.huangyuheng.top/api/gjw/share/index.jpg"
  };
  }
})