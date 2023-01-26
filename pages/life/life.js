// pages/life/life.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    i:0,
    selectList:[],
    sortLogo:['icon-waimai','icon-xianxingduosechuhang','icon-tubiaozhizuomoban-','icon-icon']
  },
  onLoad(options) {
    var that=this
    wx.request({
      url: 'https://img.huangyuheng.top/api/getLife',
      success(res){
        that.setData({
          list:res.data,
          selectList:res.data.filter(item => item.sort == that.data.i)
        })
      }
    })
  },
  changeIndex(e){
    let selectList=this.data.list.filter(item => item.sort == e.currentTarget.dataset.index)
    this.setData({
      i:e.currentTarget.dataset.index,
      selectList:selectList
    })
  },
  goGzh(){
    wx.navigateTo({
      url: '/pages/webview/webview',
    })
  },
  goXcx(e){
    // console.log(e.currentTarget.dataset);
    wx.navigateToMiniProgram({
      appId: e.currentTarget.dataset.appid,
      path: e.currentTarget.dataset.path,
      envVersion: 'release',
      success(res) {
        wx.hideLoading()
        // 打开成功
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: "美团饿了么限时优惠券，手慢无！",
      path: "/pages/life/life",
      imageUrl: "https://img.huangyuheng.top/api/gjw/share/waimai.jpg"
    };
  },
  onShareTimeline(){
    return {
      title: "美团饿了么限时优惠券，手慢无！",
      path: "/pages/life/life",
      imageUrl: "https://img.huangyuheng.top/api/gjw/wm/mt.png"
    };
  }
})