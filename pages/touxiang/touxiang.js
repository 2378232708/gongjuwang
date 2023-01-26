// pages/touxiang/touxiang.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bgImage: "https://img.huangyuheng.top/api/touxiang/bg_image.jpg",
    title: ["快来制作2022国庆头像框", "您收到一个好看的头像请注意查收", "您有个国庆头像待查收", "这头像框也太好看了吧"],
    sortIndex: 0,
    selectIndex: 0,
    avatarUrl: "",
    frameImage: "",
    subscribe: true,
    savedNum: 0,
    canvas: {},
    categoryList: ["国庆", "新年", "热门", "王者", "圣诞", "万圣"],
    assetsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let assetsList = []
    const lenList = [
      [86, 'guoqing'],
      [94, 'xinnian'],
      [25, 'hot'],
      [112, 'wangzhe'],
      [58, 'shengdan'],
      [15, 'wansheng']
    ]
    for (let i = 0; i < lenList.length; i++) {
      var imgList = []
      for (let j = 1; j < lenList[i][0]; j++) {
        imgList.push('https://img.huangyuheng.top/api/touxiang/' + lenList[i][1] + '/' + j + ".png")
      }
      assetsList[i] = imgList
    }
    this.setData({
      assetsList: assetsList
    })
  },
  // 点击微信授权按钮回调
  getUserProfile(e) {
    var that = this;
    wx.getUserProfile({
      desc: "生成用户头像图片需要",
      success: (res) => {
        var data = res.userInfo;
        // console.log(data);
        that.setData({
          avatarUrl: data.avatarUrl,
          frameImage: that.data.assetsList[that.data.sortIndex][that.data.selectIndex]
        })
      }
    });
  },
  // 清空
  reset: function reset() {
    this.avatarImage = "";
  },
  // 选择分类
  changeCategory(e) {
    if (!this.data.avatarUrl) {
      wx.showToast({
        title: "请先上传图片",
        icon: "none",
        duration: 2000
      });
      return;
    }
    this.setData({
      sortIndex: e.currentTarget.dataset.index,
      savedNum: 0,
      selectIndex: 0,
    })
  },
  // 左右切换
  cutover(e) {
    if (!this.data.avatarUrl) {
      wx.showToast({
        title: "请先上传图片",
        icon: "none",
        duration: 2000
      });
      return;
    }
    if (e.currentTarget.dataset.opts == 0) {
      if (this.data.selectIndex == 0) {
        wx.showToast({
          title: "已经是第一张了",
          icon: "none",
          duration: 2000
        });
        return
      }
      this.setData({
        selectIndex: this.data.selectIndex - 1,
        frameImage: this.data.assetsList[this.data.sortIndex][this.data.selectIndex - 1]
      })
    } else {
      if (this.data.selectIndex == this.data.assetsList[this.data.sortIndex].length - 1) {
        wx.showToast({
          title: "已经是最后一张了",
          icon: "none",
          duration: 2000
        });
        return
      }
      this.setData({
        selectIndex: this.data.selectIndex + 1,
        frameImage: this.data.assetsList[this.data.sortIndex][this.data.selectIndex + 1]
      })
    }
  },
  // 选择挂件
  changeAsset(e) {
    if (this.data.avatarUrl) {
      this.setData({
        selectIndex: e.currentTarget.dataset.index,
        frameImage: this.data.assetsList[this.data.sortIndex][e.currentTarget.dataset.index]
      })
    } else {
      wx.showToast({
        title: "请先上传图片",
        icon: "none",
        duration: 2000
      });
    }
  },
  //绘制头像
  draw(fx = null) {
    console.log("绘制头像");
    var that = this;
    const query = wx.createSelectorQuery()
    query.select('#canvas')
      .fields({
        node: true,
        size: true
      })
      .exec((res) => {
        const canvas = res[0].node
        const a = canvas.getContext('2d')
        const dpr = wx.getSystemInfoSync().pixelRatio
        canvas.width = 280
        canvas.height = 280
        a.fillStyle = '#fff'
        a.fillRect(0, 0, 280, 280)
        const image = canvas.createImage()
        image.onload = function () {
          a.drawImage(
            image,
            0,
            0,
            280,
            280,
          )
          const image1 = canvas.createImage()
          image1.onload = function () {
            a.drawImage(
              image1,
              0,
              0,
              280,
              280,
            )
            that.setData({
              canvas: canvas
            })
            fx()
          }
          image1.src = that.data.frameImage
        }
        image.src = that.data.avatarUrl

      })

  },
  share() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ["shareAppMessage", "shareTimeline"]
    });
  },
  // 保存到相册
  save() {
    var that = this
    if (!this.data.avatarUrl) {
      wx.showToast({
        title: "请先上传图片",
        icon: "none",
        duration: 2000
      });
      return;
    }
    wx.showLoading({
      title: '生成中.',
    })
    this.draw(() => {
      wx.canvasToTempFilePath({
        canvas: that.data.canvas,
        success: function (a) {
          wx.saveImageToPhotosAlbum({
            filePath: a.tempFilePath,
            success: function (a) {
              wx.hideLoading()
              wx.showToast({
                title: '保存成功',
                icon: 'success',
              })
            },
            fail: function (a) {
              wx.hideLoading()
              wx.showToast({
                title: '保存失败',
                icon: 'success',
              })
            }
          });
        }
      });
    })
    // 保存图片开始

    // 保存图片结束

  },
  random(a) {
    return Math.round(Math.random() * a)
  },
  onShareTimeline() {
    return {
      title: this.data.title[this.random(3)],
      imageUrl: "https://img.huangyuheng.top/api/touxiang/2.jpg",
      path: "/pages/touxiang/touxiang"
    };
  },
  // 页面分享
  onShareAppMessage() {
    return {
      title: this.data.title[this.random(3)],
      imageUrl: "https://img.huangyuheng.top/api/touxiang/1.jpg",
      path: "/pages/touxiang/touxiang"
    }
  },
  back() {
    wx.navigateBack({
      delta: 1,
    })
  },
})