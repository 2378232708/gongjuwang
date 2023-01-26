let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sorts: app.globalData.sorts,
    tools: [],
    sortIndex: app.globalData.sortIndex,
    collList: [],
    isColls: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.switchSort()
  },
  onShow() {
    this.setData({
      collList: app.globalData.collList
    })
    this.switchSort()
    this.getColl()
  },
  switchSort(e) {
    this.setData({
      tools: []
    })
    if (e) {
      app.globalData.sortIndex = e.currentTarget.dataset.index
    }
    // console.log(app.globalData.sortIndex);
    this.setData({
      sortIndex: app.globalData.sortIndex
    })
    let tool = app.globalData.tools
    let tools = tool.filter(item => item.sort == app.globalData.sortIndex)
    // console.log(tools);
    this.setData({
      tools: tools
    })
    this.getColl()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  goTool(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.path,
    })
  },
  getColl() {
    var that = this
    let arr = [];
    for (let i in this.data.tools) {
      // console.log(this.data.collList.indexOf(this.data.tools[i].id));
      if (this.data.collList.indexOf(this.data.tools[i].id) >= 0) {
        arr.push(true)
      } else {
        arr.push(false)
      }
    }
    // console.log(arr);
    that.setData({
      isColls: arr
    })
  },
  coll(e) {
    var that = this
    wx.getStorage({
      key: 'collId',
      success(res) {
        // console.log(res.data);
        if (res.data.indexOf(e.currentTarget.dataset.id) == -1) {
          let addList = res.data
          addList.push(e.currentTarget.dataset.id)
          console.log('添加后的id', addList);
          wx.setStorage({
            key: "collId",
            data: addList,
            success() {
              app.globalData.collList = addList
              that.setData({
                collList: addList
              })
              that.getColl()
            }
          })
        } else {
          let removedList;
          // console.log(res.data.length);
          if (res.data.length < 2) {
            removedList = []
          } else {
            // console.log(res.data.indexOf(e.currentTarget.dataset.id));
            removedList = res.data
            removedList.splice(res.data.indexOf(e.currentTarget.dataset.id), 1)
          }
          console.log('删除后的id', removedList);
          wx.setStorage({
            key: "collId",
            data: removedList,
            success() {
              app.globalData.collList = removedList
              that.setData({
                collList: removedList
              })
              that.getColl()
            }
          })
        }
      },
      fail(res) {
        wx.setStorage({
          key: "collId",
          data: [e.currentTarget.dataset.id],
          success() {
            app.globalData.collList = [e.currentTarget.dataset.id]
            that.setData({
              collList: [e.currentTarget.dataset.id]
            })
            that.getColl()
          }
        })
      }
    })
  },
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */

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

  }
})