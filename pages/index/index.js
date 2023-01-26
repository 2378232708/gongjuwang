const app = getApp()
let timer;
Page({
  data: {
    isSearch: false,
    hotTools: [],
    searchTools: [],
    searchKey: '',
    collList: [],
    isColls: [],
    newsImg: app.globalData.newsImg
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    let tool = app.globalData.tools
    let hotTools = tool.filter(item => item.hot === 1)
    this.setData({
      hotTools: hotTools
    })
    wx.request({
      url: "https://img.huangyuheng.top/api/news",
      method: "GET",
      data: {},
      time: {},
      name: {},
      success: (res) => {
        // console.log(res.data);
        this.setData({
          newsImg: res.data.data.head_image
        })
      }
    });
  },
  goTool(e) {
    var that = this
    wx.navigateTo({
      url: e.currentTarget.dataset.path,
    })
    setTimeout(() => {
      that.setData({
        searchTools: [],
        isSearch: false,
        searchKey: ''
      })
    }, 100)

  },
  goLife(){
    wx.switchTab({
      url: '/pages/life/life',
    })
  },
  goMore(e) {
    app.globalData.sortIndex = e.currentTarget.dataset.index
    // console.log('gomore',app.globalData.sortIndex);
    wx.switchTab({
      url: '/pages/tool/tool',
    })
  },
  search() {
    setTimeout(() => {
      this.setData({
        isSearch: !this.data.isSearch
      })
    }, 100)
    this.setData({
      collList: app.globalData.collList
    })
    this.getColl()
  },
  changeSearch(e) {
    var that = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      if (e.type == 'input') {
        that.setData({
          searchKey: e.detail.value
        })
      }
      if (that.data.searchKey.length > 0 && that.tableInfoDataWithSearch(that.data.searchKey).length < 1) {
        wx.showToast({
          title: '找不到该工具哦!',
          icon: 'none'
        })
      }
      that.setData({
        searchTools: that.tableInfoDataWithSearch(that.data.searchKey)
      })
      this.setData({
        collList: app.globalData.collList
      })
      this.getColl()
    }, 200)
  },
  getColl() {
    var that = this
    let arr = [];
    for (let i in this.data.searchTools) {
      // console.log(this.data.collList.indexOf(this.data.tools[i].id));
      if (this.data.collList.indexOf(this.data.searchTools[i].id) >= 0) {
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
  tableInfoDataWithSearch(key) {
    // searchKey是将要搜索的数据
    const searchKey = key;
    // 将 searchkey转为正则，并忽略大小写 也就是输入af能匹配AF和af
    var reg = new RegExp(searchKey, 'i');
    // tableInfoData 是将要遍历的数据组
    let tools = app.globalData.tools;
    let searchTools = []
    if (searchKey !== '') {
      searchTools = tools.filter((item) => {
        // 如果包含要筛选的字符，reg.test就返回true
        return reg.test(item.name) || reg.test(item.title);
      });
    }
    // 这里是筛选过后的数组
    return searchTools;
  },
  onShareAppMessage() {
    return {
      title: "工具王，满足你的一切需求",
      path: "/pages/index/index",
      imageUrl: "https://img.huangyuheng.top/api/gjw/share/index.jpg"
    };
  }
})