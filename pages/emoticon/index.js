var t = require("./@babel/runtime/helpers/interopRequireDefault"), e = t(require("./@babel/runtime/regenerator")), a = t(require("./@babel/runtime/helpers/asyncToGenerator")), r = getApp(), s = r.utils.showMsg;

Page({
    data: {
        canvasWidth: 300,
        canvasHeight: 300,
        layers: [],
        zIndex: 2,
        selected: null,
        hideTextarea: !0,
        hideStickers: !1,
        textFocus: !1,
        textContent: "",
        textColor: "333",
        textSize: 18,
        bgColor: "fff",
        colors: [ "333", "ddd", "fff", "2ecc71", "1abc9c", "3498db", "9b59b6", "f1c40f", "e67e22", "e74c3c", "000", "aaa", "eee", "27ae60", "16a085", "2980b9", "8e44ad", "f39c12", "d35400", "c0392b" ],
        currentTab: 0,
        currentSubTab: 0,
        tabs: [ {
            name: "身体",
            children: [ {
                name: "熊猫人",
                path: "xiongmao",
                count: 39
            }, {
                name: "蘑菇头",
                path: "mogu",
                count: 12
            }, {
                name: "猥琐萌",
                path: "weisuomeng",
                count: 7
            }, {
                name: "双人互动",
                path: "srhd",
                count: 11
            }, {
                name: "圆脸",
                path: "yuanlian",
                count: 7
            } ]
        }, {
            name: "脸部",
            children: [ {
                name: "真人脸",
                path: "zrl",
                count: 26
            }, {
                name: "暴漫",
                path: "baoman",
                count: 10
            }, {
                name: "卡通脸",
                path: "katonglian",
                count: 46
            } ]
        }, {
            name: "素材",
            children: [ {
                name: "帽子",
                path: "maozi",
                count: 7
            }, {
                name: "手臂",
                path: "shoubi",
                count: 9
            }, {
                name: "眼镜",
                path: "yanjing",
                count: 8
            }, {
                name: "杂物",
                path: "zawu",
                count: 7
            } ]
        } ],
        stickers: []
    },
    onLoad: function() {
        if (wx.cloud) {
            var t = r.globalData.canvasWidth;
            this.setData({
                canvasWidth: t
            }), this.step = 0, this.history = [ [] ], this.updateStickers();
        } else wx.redirectTo({
            url: "../updateWX/updateWX"
        });
    },
    onShow:function(){
      wx.showShareMenu({
				withShareTicket: false,
				menus: ['shareAppMessage', 'shareTimeline'],
			})
    },
    onShareAppMessage:function(e) {
			var that = this;
			return {
				title: '表情包制作神器，快来制作你的专属沙雕表情吧',
				imageUrl: 'https://163740-1304074776.cos.ap-nanjing.myqcloud.com/images/64/2022/05/xr2WlTmc32m4CMT3k9E4Tree99tzC8.jpg',
				path: '/pages/index/index'
			}
		},
		// 微信分享盆友圈|收藏
		onShareTimeline:function() {
			var that = this;
			return {
        title: '表情包制作神器，快来制作你的专属沙雕表情吧',
        path: '/pages/emoticon/index',
				imageUrl: 'https://163740-1304074776.cos.ap-nanjing.myqcloud.com/images/64/2022/05/xr2WlTmc32m4CMT3k9E4Tree99tzC8.jpg',
			}	
		},
		onAddToFavorites:function() {
			var that = this;
			return {
        title: '表情包制作神器，快来制作你的专属沙雕表情吧',
				imageUrl: 'https://163740-1304074776.cos.ap-nanjing.myqcloud.com/images/64/2022/05/xr2WlTmc32m4CMT3k9E4Tree99tzC8.jpg',
			}
		},
    updateHistory: function() {
        this.step += 1;
        var t = this.history.slice(0, this.step);
        this.history = t.concat([ this.data.layers ]);
    },
    insertImage: function(t) {
        var e = this;
        wx.getImageInfo({
            src: t,
            success: function(a) {
                var r = a.width, s = a.height, i = r / 200, n = r / i, o = s / i, c = e.data.zIndex, h = {
                    src: t,
                    width: r,
                    height: s,
                    nWidth: n,
                    nHeight: o,
                    centerX: n / 2 + 30,
                    centerY: o / 2 + 30,
                    left: 30,
                    top: 30,
                    right: n + 30,
                    bottom: o + 30,
                    scale: 1,
                    rotate: 0,
                    flipX: !1,
                    flipY: !1,
                    type: "img",
                    zIndex: c
                }, u = e.data.layers.concat([ h ]);
                e.setData({
                    layers: u,
                    zIndex: c + 1,
                    selected: null
                }), e.updateHistory();
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    addSticker: function(t) {
        var e = t.target.dataset.src;
        e && this.insertImage(e);
    },
    addImage: function() {
        var t = this;
        wx.chooseImage({
            sizeType: "compressed",
            count: 1,
            success: function() {
                var r = (0, a.default)(e.default.mark(function a(r) {
                    var i, n;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return i = r.tempFilePaths[0], wx.showLoading({
                                title: "请稍候..."
                            }), e.prev = 2, e.next = 5, t.upload(i),wx.hideLoading();

                          case 5:
                            return n = e.sent, e.next = 8, t.imageSecurityCheck(n);

                          case 8:
                            t.insertImage(i), wx.hideLoading(), e.next = 17;
                            break;

                          case 12:
                            e.prev = 12, e.t0 = e.catch(2), console.log(e.t0), wx.hideLoading(), s("出错了，" + e.t0.message);

                          case 17:
                          case "end":
                            return e.stop();
                        }
                    }, a, null, [ [ 2, 12 ] ]);
                    
                }));
                return function(t) {
                    return r.apply(this, arguments);
                };
            }(),
            fail: function(t) {
                console.log(t);
            }
        });
    },
    addText: function() {
        var t = this.data.zIndex, e = {
            width: 260,
            height: 30,
            nWidth: 260,
            nHeight: 30,
            centerX: 160,
            centerY: 45,
            left: 30,
            top: 30,
            right: 290,
            bottom: 60,
            scale: 1,
            rotate: 0,
            flipX: !1,
            flipY: !1,
            type: "text",
            text: "",
            focus: !1,
            color: this.data.textColor,
            size: this.data.textSize,
            zIndex: t
        }, a = this.data.layers.concat([ e ]), r = a.length - 1;
        this.setData({
            layers: a,
            zIndex: t + 1,
            selected: r,
            hideTextarea: !1,
            textFocus: !0,
            textContent: "",
            textColor: "333"
        }), this.updateHistory();
    },
    hideTextarea: function() {
        this.setData({
            textFocus: !1,
            hideTextarea: !0,
            textContent: "",
            textColor: "333"
        });
    },
    typing: function(t) {
        var e = this.data.selected, a = this.data.layers, r = a[e];
        r && "text" == r.type ? (r.text = t.detail.value, this.setData({
            layers: a
        }), this.updateHistory()) : console.log("未选中文字");
    },
    textEdit: function(t) {
        var e = t.target.dataset.idx, a = this.data.layers[e], r = a.text, s = a.color;
        this.setData({
            selected: e,
            textContent: r,
            textColor: s,
            hideTextarea: !1,
            textFocus: !0
        });
    },
    copyLayer: function() {
        var t = this.data.selected;
        if (null != t) {
            var e = this.data.layers, a = Object.assign({}, e[t]);
            this.setData({
                layers: e.concat([ a ])
            }), this.updateHistory();
        }
    },
    removerLayer: function() {
        var t = this.data.selected;
        if (null != t) {
            var e = this.data.layers;
            e.splice(t, 1), this.setData({
                selected: null,
                layers: e
            }), this.updateHistory();
        }
    },
    upperLayer: function(t) {
        var e = this.data.selected;
        if (null != e) {
            var a = this.data.layers;
            a[e].zIndex += 1, this.setData({
                layers: a
            }), this.updateHistory();
        }
    },
    lowerLayer: function(t) {
        var e = this.data.selected;
        if (null != e) {
            var a = this.data.layers, r = a[e];
            r.zIndex -= r.zIndex ? 1 : 0, this.setData({
                layers: a
            }), this.updateHistory();
        }
    },

    flipX: function(t) {
        var e = this.data.selected;
        if (null != e) {
            var a = this.data.layers, r = a[e];
            r.flipX = !r.flipX, this.setData({
                layers: a
            }), this.updateHistory();
        }
    },
    flipY: function(t) {
        var e = this.data.selected;
        if (null != e) {
            var a = this.data.layers, r = a[e];
            r.flipY = !r.flipY, this.setData({
                layers: a
            }), this.updateHistory();
        }
    },
    undo: function() {
        var t = this.step - 1, e = this.history[t];
        e && (this.setData({
            layers: e
        }), this.step -= 1);
    },
    redo: function() {
        var t = this.step + 1, e = this.history[t];
        e && (this.setData({
            layers: e
        }), this.step += 1);
    },
    removeAll: function() {
        this.setData({
            layers: [],
            selected: null,
            zIndex: 2
        }), this.updateHistory();
    },
    showStickers: function() {
        var t = !this.data.hideStickers;
        this.setData({
            hideStickers: t
        });
    },
    changeTab: function(t) {
        if (void 0 !== t.target.dataset.idx) {
            var e = t.target.dataset.idx;
            this.setData({
                currentTab: e,
                currentSubTab: 0
            }), this.updateStickers();
        }
    },
    changeSubTab: function(t) {
        if (void 0 !== t.target.dataset.idx) {
            var e = t.target.dataset.idx;
            this.setData({
                currentSubTab: e
            }), this.updateStickers();
        }
    },
    updateStickers: function() {
        var t = this.data, e = t.tabs, a = t.currentTab, r = t.currentSubTab, s = e[a].children[r], i = s.count, n = s.path, o = new Array(i).fill("").map(function(t, e) {
            return "".concat("https://img.huangyuheng.top/api/bqb", "/").concat(n, "/").concat(e, ".png");
        });
        this.setData({
            currentSubTab: r,
            stickers: o
        });
    },
    changeBgColor: function(t) {
        var e = t.target.dataset.color, a = e == this.data.bgColor ? "" : e;
        this.setData({
            bgColor: a
        });
    },
    changeColor: function(t) {
        var e = t.target.dataset.color, a = this.data.selected;
        if (null != a) {
            var r = this.data.layers;
            r[a].color = e, this.setData({
                textColor: e,
                layers: r
            }), this.updateHistory();
        } else this.setData({
            textColor: e
        });
    },
    touchStart: function(t) {
        this.hideTextarea(), this.target = t.target, this.pageX = t.touches[0].pageX, this.pageY = t.touches[0].pageY, 
        this.moveX = 0, this.moveY = 0;
        var e = t.target.dataset.idx;
        e = void 0 === e ? null : e, this.setData({
            selected: e
        });
    },
    touchEnd: function(t) {
        (Math.abs(this.moveX) > 20 || Math.abs(this.moveY) > 20) && this.updateHistory(), 
        this.target = null, this.pageX = 0, this.pageY = 0, this.moveX = 0, this.moveY = 0;
    },
    touchMove: function(t) {
        if (this.target) {
            var e = this.target.dataset.idx, a = this.target.dataset.type, r = this.data.layers, s = r[e];
            if (a) {
                var i = t.touches[0].pageX, n = t.touches[0].pageY, o = i - this.pageX, c = n - this.pageY;
                if ("bgScale" == a) {
                    var h = this.data.canvasHeight + c >= 200 && this.data.canvasHeight + c <= 400 ? this.data.canvasHeight + c : this.data.canvasHeight;
                    this.setData({
                        canvasHeight: h
                    });
                } else if ("layerDrag" == a) s.left += o, s.top += c, s.right += o, s.bottom += c, 
                s.centerX += o, s.centerY += c, this.setData({
                    layers: r
                }); else if ("layerScale" == a) {
                    var u = s.right - s.centerX, l = s.bottom - s.centerY, d = u + o, f = l + c, p = Math.sqrt(u * u + l * l), g = Math.sqrt(d * d + f * f), v = Math.atan2(l, u) / Math.PI * 180, x = Math.atan2(f, d) / Math.PI * 180;
                    s.rotate = x - v + s.rotate, s.scale = g / p * s.scale, s.right += o, s.bottom += c, 
                    this.setData({
                        layers: r
                    });
                }
                this.pageX = i, this.pageY = n, this.moveX += o, this.moveY += c;
            }
        }
    },
    textSecurityCheck: function() {
        var t = (0, a.default)(e.default.mark(function t() {
            var a, r;
            return e.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (a = this.data.layers, r = a.filter(function(t) {
                        return "text" === t.type;
                    }).map(function(t) {
                        return t.text;
                    }).join(""), console.log({
                        text: r
                    }), !r) {
                        t.next = 5;
                        break;
                    }
                    // return t.abrupt("return", wx.cloud.callFunction({
                    //     name: "security",
                    //     data: {
                    //         text: r
                    //     }
                    // }).then(function(t) {
                    //     console.log(t);
                    //     var e = t.result, a = t.errCode, r = t.errMsg;
                    //     if (a) throw new Error(r);
                    //     if (e) {
                    //         var s = e.errCode, i = e.errMsg;
                    //         if (87014 == s) throw new Error("包含敏感词");
                    //         if (s) throw new Error(i);
                    //     }
                    // }).catch(function(t) {
                    //     throw t;
                    // }));

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t, this);
        }));
        return function() {
            return t.apply(this, arguments);
        };
    }(),
    imageSecurityCheck: function(t) {
        return true
        wx.cloud.callFunction({
            name: "security",
            data: {
                fileID: t
            }
        }).then(function(t) {
            console.log({
                res: t
            });
            var e = t.result, a = t.errCode, r = t.errMsg;
            if (a) throw new Error(r);
            if (e) {
                var s = e.errCode, i = e.errMsg;
                if (87014 == s) throw new Error("图片含有违法违规内容");
                if (s) throw new Error(i);
            }
        }).catch(function(t) {
            throw t;
        });
    },
    upload: function() {
        var t = (0, a.default)(e.default.mark(function t(a) {
            var r;
            return e.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return r = Date.now() + "_" + Math.random().toString(36).substr(-8) + ".png", t.abrupt("return");

                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }(),
    generate: function() {
        var t = (0, a.default)(e.default.mark(function t(a) {
            return e.default.wrap(function(t) {
              // console.log(t);
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, wx.showLoading({
                        title: "请稍候..."
                    }), t.next = 4, this.textSecurityCheck(),wx.hideLoading();
                  case 4:
                    wx.hideLoading(), t.next = 13;
                    break;

                  case 7:
                    // return t.prev = 7, t.t0 = t.catch(0), console.debug(t.t0), wx.hideLoading(), s("出错了，" + t.t0.message), 
                    // t.abrupt("return");
                    r.globalData.layers = this.data.layers, r.globalData.canvasHeight = this.data.canvasHeight, 
                    r.globalData.bgColor = this.data.bgColor, wx.navigateTo({
                        url: "./generate"
                    });
                  case 13:
                    r.globalData.layers = this.data.layers, r.globalData.canvasHeight = this.data.canvasHeight, 
                    r.globalData.bgColor = this.data.bgColor, wx.navigateTo({
                        url: "./generate"
                    });

                  case 17:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 0, 7 ] ]);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }()
});