const app = getApp()
Page({
  data: {
    itemList: [],
    data: [],
    itemTime: '',
    itemname: '',
    img: app.globalData.newsImg
  },
  onLoad() {
    this.getData();
  },
  getData() {
    wx.request({
      url: "https://api.vvhan.com/api/60s?type=json",
      method: "GET",
      data: {},
      time: {},
      name: {},
      success: (res) => {
        this.setData({
          itemList: res.data.data,
          itemTime: res.data.time,
          itemname: res.data.name,
        })
      }
    });
  },
  back() {
    wx.navigateBack({
      delta: 1
    })
  }
});