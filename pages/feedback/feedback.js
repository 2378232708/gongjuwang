// pages/feedback/feedback.js
var date = new Date
var time = (date.getMonth() + 1) + '-' + date.getDate()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: '',
    content: '',
    isSend: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this
    console.log(time);
    wx.getStorage({
      key: 'fedback',
      success(res) {
        if (res.data[0] && res.data[1] == time) {
          that.setData({
            isSend: true
          })
        }
      }
    })
  },
  changeContent(e) {
    this.setData({
      content: e.detail.value
    })
  },
  changeInfo(e) {
    this.setData({
      info: e.detail.value
    })
  },
  submit() {
    var that=this
    if (this.data.info.length > 5 && this.data.content.length > 5) {
      if (!this.data.isSend) {
        wx.request({
          url: 'https://img.huangyuheng.top/api/opinion',
          method: 'post',
          data: {
            info: this.data.info,
            content: this.data.content
          },
          success: function (res) {
            if (res.data.status == 0) {
              wx.showToast({
                title: res.data.message,
                icon: 'success'
              })
              wx.setStorage({
                key: "fedback",
                data: [true, time],
              })
              that.setData({
                isSend:true
              })
            } else {
              wx.showToast({
                title: '提交失败',
                icon: 'error'
              })
            }
            console.log(res.data.message);
          }
        })
      }else{
        wx.showToast({
          title: '不能频繁反馈哦！',
          icon: 'none'
        })
      }

    } else {
      wx.showToast({
        title: '内容长度不能少于5!',
        icon: 'none'
      })
    }

  },
  back() {
    wx.navigateBack({
      delta: 1,
    })
  },

  onShareAppMessage() {

  }
})