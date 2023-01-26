var a = getApp(),
  e = a.utils.showMsg;

Page({
  data: {
    canvasWidth: 300,
    canvasHeight: 300,
    layers: [],
    canvas: {}
  },
  onLoad: function (e) {
    wx.showLoading({
      title: '生成中...',
    })
    var t = a.globalData,
      n = t.canvasWidth,
      s = t.canvasHeight,
      r = t.layers,
      l = t.bgColor;
    this.setData({
      canvasWidth: n,
      canvasHeight: s,
      layers: r,
      bgColor: l
    }), this.draw();
  },
  onReady: function () {},
  draw: function () {
    var that = this
    const query = wx.createSelectorQuery()
    query.select('#myCanvas')
      .fields({
        node: true,
        size: true
      })
      .exec((res) => {
        const canvas = res[0].node
        const a = canvas.getContext('2d')
        const dpr = wx.getSystemInfoSync().pixelRatio
        canvas.width = res[0].width * dpr
        canvas.height = res[0].height * dpr
        a.scale(dpr, dpr)
        // a.setTextBaseline("top");
        a.textBaseline = 'top';
        var e = this.data,
          t = e.canvasWidth,
          n = e.canvasHeight,
          s = e.layers,
          r = e.bgColor;
        a.fillStyle = '#' + r
        a.fillRect(0, 0, t, n)
        s.reverse().sort(function (a, e) {
          return a.zIndex - e.zIndex;
        });
        console.log(s);
        // var l = !0,
        //   o = !1,
        //   i = void 0;
        // try {
          // let xxx = 1
          for (let xxx in s) {
            let f = s[xxx];
            // console.log(f);
            let h = f.nWidth * f.scale,
              d = f.nHeight * f.scale,
              u = f.rotate * Math.PI / 180,
              g = (f.left - f.centerX) * f.scale + f.centerX,
              y = (f.top - f.centerY) * f.scale + f.centerY;
            // console.log(1,h,d,u,g,y);
            if ("img" == f.type) {
              // a.drawImage(f.src, g, y, h, d);
              const image = canvas.createImage()
              image.onload = function () {
                // console.log(xxx);
                setTimeout(() => {
                  a.save()
                  if (f.flipX) {
                    // console.log(f.centerX);
                    a.translate(g * 2 + h, 0);
                    a.scale(-1, 1);
                  }
                  if (f.flipY) {
                    a.translate(0, y * 2 + d);
                    a.scale(1, -1);
                  }
                  a.translate(f.centerX, f.centerY)
                  // console.log(f);
                  if (f.flipX || f.flipY) {
                    if (f.flipX && f.flipY) {
                      a.rotate(u)
                    } else {
                      a.rotate(-u)
                    }
                  }else{
                    a.rotate(u)
                  }
                  a.translate(-f.centerX, -f.centerY)
                  a.drawImage(
                    image,
                    g,
                    y,
                    h,
                    d,
                  )
                  a.restore();
                  if (xxx==s.length-1) {
                    wx.hideLoading()
                  }
                }, 200 * xxx)
              }
              image.src = f.src
              // a.restore();
            } else {
              a.save()
              a.translate(f.centerX, f.centerY)
              // console.log(f);
              a.rotate(u)
              a.translate(-f.centerX, -f.centerY)
              var p = f.size * f.scale,
                x = f.color || "000";
              a.fillStyle = "#".concat(x)
              a.font = p + 'px "微软雅黑"'
              // a.setFontSize(p) 
              a.fillText(f.text, g, y);
              a.restore();
            }
          }
        // } catch (a) {
        //   o = !0, i = a;
        // } finally {
        //   try {
        //     l || null == v.return || v.return();
        //   } finally {
        //     if (o) throw i;
        //   }
        // }
        // 若干绘制调用
        // a.fillRect(20, 20, 50, 50)
        // 这里绘制完成
        that.setData({
          canvas: canvas
        })
        console.log('draw done')
      })

  },
  save: function () {
    var that = this
    wx.canvasToTempFilePath({
      canvas: that.data.canvas,
      success: function (a) {
        wx.saveImageToPhotosAlbum({
          filePath: a.tempFilePath,
          success: function (a) {
            e("已保存");
          },
          fail: function (a) {
            console.log("err:" + a);
          }
        });
      }
    });
  },
  onShareAppMessage: function (e) {
    var that = this;
    var temp;
    wx.canvasToTempFilePath({
      canvas: that.data.canvas,
      success: function (a) {
        temp=a.tempFilePath
      }
    });
    return {
      title: '表情包制作神器，快来制作你的专属沙雕表情吧',
      imageUrl: temp,
      // 'https://163740-1304074776.cos.ap-nanjing.myqcloud.com/images/64/2022/05/xr2WlTmc32m4CMT3k9E4Tree99tzC8.jpg',
      path: '/pages/emoticon/index'
    }
  },
});