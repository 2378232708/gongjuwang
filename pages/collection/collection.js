// pages/collection/collection.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tools: [],
    collList: [],
    isColls: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      collList: app.globalData.collList
    })
    this.getColl()
  },
  goTool(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.path,
    })
  },
  getColl() {
    var that = this
    const tool = app.globalData.tools
    let tools = tool.filter(item => this.data.collList.indexOf(item.id) >= 0)
    // console.log(tools);
    this.setData({
      tools: tools
    })
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
          var addList = res.data
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
          var removedList;
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
  back() {
    wx.navigateBack({
      delta: 1
    })
  },
  onShareAppMessage() {

  }
})