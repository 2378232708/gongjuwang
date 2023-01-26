// pages/daxuexi/daxuexi.js
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
  follow(){
    wx.navigateTo({
      url: '/pages/webview/webview',
    })
  },
  back(){
    wx.navigateBack({
      delta: 1,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})