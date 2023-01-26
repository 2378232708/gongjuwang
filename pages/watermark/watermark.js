// pages/watermark/watermark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    supportList: [
      "快手",
      "抖音",
      "皮皮虾",
      "火山",
      "西瓜视频",
      "皮皮搞笑",
      "全民K歌",
      "微视",
      "微博",
      "最右",
      "vuevlog",
      "小咖秀",
      "轻视频",
      "全民小视频",
      "陌陌",
      "Before避风",
      "逗拍",
      "虎牙",
      "6间房",
      "梨视频",
      "新片场",
      "Acfun",
      "美拍",
    ],
    url: '',
    video: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  back() {
    wx.navigateBack({
      delta: 1,
    })
  },
  changeUrl(e) {
    this.setData({
      url: e.detail.value
    })
  },
  getVideo() {
    var that = this
    var url=this.data.url
    if (url) {
      if (url.length>40) {
        // console.log(url.split('https://')[1]);
        if (url.split('https://')[1].length>30) {
          url='https://'+url.split('https://')[1].split(' ')[0]
        }else{
          url='https://'+url.split('https://')[1]
        }
        console.log(url);
      }
      wx.showLoading({
        title: '正在解析',
      })
      wx.request({
        url: 'https://api.huangyuheng.top/?url=' + url,
        success(res) {
          console.log(res);
          wx.hideLoading()
          if (res.data.code == 200) {
            let video = res.data.data
            wx.showToast({
              title: '解析成功',
              icon: 'success',
              duration: 2000
            })
            if (video.url.indexOf("https://v5") != -1) {
              video.url= 'https://v5.douyinvod.com'+ video.url.split('.com')[1]
              console.log(video.url);
            }
            that.setData({
              video: video
            })
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'error',
              duration: 2000
            })
          }
        }
      })
    } else {
      wx.showToast({
        title: '请输入链接',
        icon: 'error',
        duration: 2000
      })
    }

  },
  downloadViedo() {
    let that=this
    wx.showLoading({
      title: '下载中',
    })
    wx.downloadFile({
      url: this.data.video.url,
      success(res) {
        wx.hideLoading()
        wx.saveVideoToPhotosAlbum({
          filePath: res.tempFilePath,
          success(ress) {
            wx.showToast({
              title: '下载成功',
              icon: 'success',
              duration: 2000
            })
          }
        })
      },
      fail(err) {
        wx.hideLoading()
        wx.setClipboardData({
          data: that.data.video.url,
          success: function (res) {
            wx.showToast({
              title: '已复制作品链接!',
              icon: 'error',
              duration: 2000
            })
          }
        })
      }
    })
  },
  copyTitle() {
    wx.setClipboardData({
      data: this.data.video.title,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: "短视频去水印",
      path: "/pages/watermark/watermark",
      imageUrl: "https://img.huangyuheng.top/api/gjw/share/qsy.jpg"
    };
  }
})