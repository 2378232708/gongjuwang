// app.js
var t = require("./utils/util.js");
App({
  globalData: {
    tools: [{
        id: 0,
        name: '短视频去水印',
        title: '支持各大短视频平台',
        img: 'https://img.huangyuheng.top/api/gjw/tool/watermark.png',
        sort: 0,
        hot: 1,
        path: '/pages/watermark/watermark'
      },
      {
        id: 1,
        name: '图片九宫格',
        title: '让你的朋友圈别具一格',
        img: 'https://img.huangyuheng.top/api/gjw/tool/nine.png',
        sort: 2,
        hot: 0,
        path: '/pages/cuttingNine/cuttingNine'
      },
      {
        id: 2,
        name: '照片拼图',
        title: '将两张或更多照片拼接起来',
        img: 'https://img.huangyuheng.top/api/gjw/tool/pintu.png',
        sort: 2,
        hot: 0,
        path: '/pages/screenshotConnect/screenshotConnect'
      },
      {
        id: 3,
        name: '表情包制作',
        title: '自定义修改生成表情包!',
        img: 'https://img.huangyuheng.top/api/gjw/tool/bqb.png',
        sort: 0,
        hot: 1,
        path: '/pages/emoticon/index'
      },
      {
        id: 4,
        name: '房贷计算器',
        title: '',
        img: 'https://img.huangyuheng.top/api/gjw/tool/calc.png',
        sort: 3,
        hot: 0,
        path: '/packageC/pages/mortgage/index'
      },
      {
        id: 5,
        name: '个税计算器',
        title: '',
        img: 'https://img.huangyuheng.top/api/gjw/tool/calc.png',
        sort: 3,
        hot: 0,
        path: '/packageC/pages/income/index'
      },
      {
        id: 6,
        name: '复利计算器',
        title: '',
        img: 'https://img.huangyuheng.top/api/gjw/tool/calc.png',
        sort: 3,
        hot: 0,
        path: '/packageC/pages/compound/index'
      },
      {
        id: 7,
        name: '养老金计算器',
        title: '',
        img: 'https://img.huangyuheng.top/api/gjw/tool/calc.png',
        sort: 3,
        hot: 0,
        path: '/packageC/pages/pension/index'
      },
      {
        id: 8,
        name: '预产期计算器',
        title: '',
        img: 'https://img.huangyuheng.top/api/gjw/tool/calc.png',
        sort: 3,
        hot: 0,
        path: '/packageC/pages/gestational/index'
      },
      {
        id: 9,
        name: '胎儿体重计算器',
        title: '',
        img: 'https://img.huangyuheng.top/api/gjw/tool/calc.png',
        sort: 3,
        hot: 0,
        path: '/packageC/pages/embryo/index'
      },
      {
        id: 10,
        name: '安全期计算器',
        title: '',
        img: 'https://img.huangyuheng.top/api/gjw/tool/calc.png',
        sort: 3,
        hot: 0,
        path: '/packageC/pages/safe/index'
      },
      {
        id: 11,
        name: '保质期计算器',
        title: '',
        img: 'https://img.huangyuheng.top/api/gjw/tool/calc.png',
        sort: 3,
        hot: 0,
        path: '/packageC/pages/expiration/index'
      },
      {
        id: 12,
        name: '血压分析计算器',
        title: '',
        img: 'https://img.huangyuheng.top/api/gjw/tool/calc.png',
        sort: 3,
        hot: 0,
        path: '/packageC/pages/spirits/index'
      },
      {
        id: 13,
        name: '亲戚计算器',
        title: '',
        img: 'https://img.huangyuheng.top/api/gjw/tool/calc.png',
        sort: 3,
        hot: 0,
        path: '/packageC/pages/relative/index'
      },
      {
        id: 14,
        name: '日期日历计算器',
        title: '',
        img: 'https://img.huangyuheng.top/api/gjw/tool/calc.png',
        sort: 3,
        hot: 0,
        path: '/packageC/pages/date/index'
      },
      {
        id: 15,
        name: '手持弹幕',
        title: '',
        img: 'https://img.huangyuheng.top/api/gjw/tool/dm.png',
        sort: 1,
        hot: 0,
        path: '/pages/handBarrage/handBarrage'
      },
      {
        id: 16,
        name: '60秒看世界',
        title: '',
        img: 'https://img.huangyuheng.top/api/gjw/tool/news.png',
        sort: 4,
        hot: 0,
        path: '/pages/news/index'
      },
      {
        id: 17,
        name: '图片文字识别',
        title: '识别图片文字并翻译',
        img: 'https://img.huangyuheng.top/api/gjw/tool/word.png',
        sort: 2,
        hot: 0,
        path: '/pages/indexword/index'
      },
      {
        id: 18,
        name: '闪光灯',
        title: '',
        img: 'https://img.huangyuheng.top/api/gjw/tool/shanguang.png',
        sort: 1,
        hot: 0,
        path: '/pages/shanguang/shanguang'
      },
      {
        id: 19,
        name: '垃圾分类查询',
        title: '一键查询各种垃圾类型',
        img: 'https://img.huangyuheng.top/api/gjw/tool/garbage.png',
        sort: 4,
        hot: 0,
        path: '/pages/guide/guide'
      },
      {
        id: 20,
        name: '大学习助手',
        title: '一个帮助你快速学习的工具',
        img: 'https://img.huangyuheng.top/api/gjw/tool/daxuexi.png',
        sort: 1,
        hot: 0,
        path: '/pages/daxuexi/daxuexi'
      },
      {
        id: 21,
        name: '图片格式转换',
        title: '一键转换jpg和png格式图片',
        img: 'https://img.huangyuheng.top/api/gjw/tool/format.png',
        sort: 2,
        hot: 0,
        path: '/pages/picFormat/picFormat'
      },
      {
        id: 22,
        name: '头像生成器',
        title: '一键生成国庆、新年等风格头像',
        img: 'https://img.huangyuheng.top/api/touxiang/2.jpg',
        sort: 0,
        hot: 1,
        path: '/pages/touxiang/touxiang'
      },
    ],
    sorts: ['热门', '实用', '图片处理', '计算器', '信息查询'],
    sortIndex: 0,
    collList: [],
    canvasWidth: 300,
    bgColor: "",
    layers: [],
    newsImg: ''
  },
  onLaunch: function () {
    this.utils = t, this.globalData.canvasWidth = wx.getSystemInfoSync().windowWidth - 20
    var that = this
    wx.getStorage({
      key: 'collId',
      success(res) {
        that.globalData.collList = res.data
      }
    })
    wx.request({
      url: "https://img.huangyuheng.top/api/news",
      method: "GET",
      data: {},
      time: {},
      name: {},
      success: (res) => {
        // console.log(res.data);
        this.globalData.newsImg = res.data.data.head_image
      }
    });
  },
})