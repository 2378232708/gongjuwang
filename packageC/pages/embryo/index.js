var t = require("../../3F378EB5071E6DCF5951E6B2EE058836.js"), e = t(require("../../F8ACFC94071E6DCF9ECA94930BB48836.js")), a = t(require("../../FACF1B67071E6DCF9CA97360C8C48836.js"));

t(require("../../B3484E63071E6DCFD52E26643C178836.js")), Component({
    properties: {},
    data: {
        weekIndex: 0,
        weeks: [ 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40 ],
        currentRefer: {
            week: 13,
            bdp: {
                start: 2.27,
                end: 2.77
            },
            ac: {
                start: 5.25,
                end: 8.55
            },
            fl: {
                start: .86,
                end: 1.48
            },
            weight: {
                start: 20,
                end: 60
            }
        },
        refers: [ {
            week: 13,
            bdp: {
                start: 2.27,
                end: 2.77
            },
            ac: {
                start: 5.25,
                end: 8.55
            },
            fl: {
                start: .86,
                end: 1.48
            },
            weight: {
                start: 20,
                end: 60
            }
        }, {
            week: 14,
            bdp: {
                start: 2.26,
                end: 3.4
            },
            ac: {
                start: 5.95,
                end: 9.59
            },
            fl: {
                start: .9,
                end: 1.86
            },
            weight: {
                start: 20,
                end: 90
            }
        }, {
            week: 15,
            bdp: {
                start: 2.72,
                end: 3.74
            },
            ac: {
                start: 7.57,
                end: 10.69
            },
            fl: {
                start: 1.16,
                end: 2.32
            },
            weight: {
                start: 40,
                end: 140
            }
        }, {
            week: 16,
            bdp: {
                start: 3.04,
                end: 4.2
            },
            ac: {
                start: 8.4,
                end: 12.24
            },
            fl: {
                start: 1.59,
                end: 2.61
            },
            weight: {
                start: 60,
                end: 200
            }
        }, {
            week: 17,
            bdp: {
                start: 3.53,
                end: 4.41
            },
            ac: {
                start: 9.87,
                end: 13.11
            },
            fl: {
                start: 2.08,
                end: 2.96
            },
            weight: {
                start: 110,
                end: 240
            }
        }, {
            week: 18,
            bdp: {
                start: 3.72,
                end: 4.78
            },
            ac: {
                start: 10.52,
                end: 14.3
            },
            fl: {
                start: 2.25,
                end: 3.17
            },
            weight: {
                start: 130,
                end: 310
            }
        }, {
            week: 19,
            bdp: {
                start: 3.99,
                end: 5.05
            },
            ac: {
                start: 11.29,
                end: 15.89
            },
            fl: {
                start: 2.53,
                end: 3.53
            },
            weight: {
                start: 160,
                end: 410
            }
        }, {
            week: 20,
            bdp: {
                start: 4.3,
                end: 5.46
            },
            ac: {
                start: 12.91,
                end: 16.69
            },
            fl: {
                start: 2.88,
                end: 3.82
            },
            weight: {
                start: 230,
                end: 490
            }
        }, {
            week: 21,
            bdp: {
                start: 4.8,
                end: 5.64
            },
            ac: {
                start: 13.78,
                end: 17.46
            },
            fl: {
                start: 3.24,
                end: 4.04
            },
            weight: {
                start: 300,
                end: 560
            }
        }, {
            week: 22,
            bdp: {
                start: 4.88,
                end: 6.02
            },
            ac: {
                start: 14.47,
                end: 18.93
            },
            fl: {
                start: 3.35,
                end: 4.29
            },
            weight: {
                start: 330,
                end: 690
            }
        }, {
            week: 23,
            bdp: {
                start: 5.36,
                end: 6.24
            },
            ac: {
                start: 16.05,
                end: 19.75
            },
            fl: {
                start: 3.8,
                end: 4.62
            },
            weight: {
                start: 460,
                end: 800
            }
        }, {
            week: 24,
            bdp: {
                start: 5.55,
                end: 6.55
            },
            ac: {
                start: 16.51,
                end: 20.97
            },
            fl: {
                start: 3.85,
                end: 4.87
            },
            weight: {
                start: 500,
                end: 940
            }
        }, {
            week: 25,
            bdp: {
                start: 5.69,
                end: 7.09
            },
            ac: {
                start: 17.44,
                end: 21.84
            },
            fl: {
                start: 4.23,
                end: 5.07
            },
            weight: {
                start: 580,
                end: 1110
            }
        }, {
            week: 26,
            bdp: {
                start: 6.07,
                end: 7.29
            },
            ac: {
                start: 19.32,
                end: 23.92
            },
            fl: {
                start: 4.46,
                end: 5.28
            },
            weight: {
                start: 740,
                end: 1320
            }
        }, {
            week: 27,
            bdp: {
                start: 6.37,
                end: 7.59
            },
            ac: {
                start: 19.51,
                end: 24.11
            },
            fl: {
                start: 4.69,
                end: 5.51
            },
            weight: {
                start: 830,
                end: 1410
            }
        }, {
            week: 28,
            bdp: {
                start: 6.59,
                end: 7.89
            },
            ac: {
                start: 20.45,
                end: 25.27
            },
            fl: {
                start: 4.8,
                end: 5.9
            },
            weight: {
                start: 910,
                end: 1660
            }
        }, {
            week: 29,
            bdp: {
                start: 6.85,
                end: 8.15
            },
            ac: {
                start: 22.21,
                end: 25.21
            },
            fl: {
                start: 5.17,
                end: 6.05
            },
            weight: {
                start: 1110,
                end: 1730
            }
        }, {
            week: 30,
            bdp: {
                start: 7.21,
                end: 8.45
            },
            ac: {
                start: 22.85,
                end: 26.91
            },
            fl: {
                start: 5.3,
                end: 6.24
            },
            weight: {
                start: 1230,
                end: 2e3
            }
        }, {
            week: 31,
            bdp: {
                start: 7.46,
                end: 8.66
            },
            ac: {
                start: 23.46,
                end: 28.1
            },
            fl: {
                start: 5.65,
                end: 6.41
            },
            weight: {
                start: 1380,
                end: 2210
            }
        }, {
            week: 32,
            bdp: {
                start: 7.52,
                end: 8.82
            },
            ac: {
                start: 23.87,
                end: 28.53
            },
            fl: {
                start: 5.94,
                end: 6.92
            },
            weight: {
                start: 1470,
                end: 2420
            }
        }, {
            week: 33,
            bdp: {
                start: 8.03,
                end: 8.97
            },
            ac: {
                start: 25.48,
                end: 30.08
            },
            fl: {
                start: 6.06,
                end: 6.98
            },
            weight: {
                start: 1730,
                end: 2670
            }
        }, {
            week: 34,
            bdp: {
                start: 7.98,
                end: 9.24
            },
            ac: {
                start: 25.44,
                end: 30.54
            },
            fl: {
                start: 6.19,
                end: 7.05
            },
            weight: {
                start: 1750,
                end: 2820
            }
        }, {
            week: 35,
            bdp: {
                start: 8.15,
                end: 9.25
            },
            ac: {
                start: 25.86,
                end: 31.62
            },
            fl: {
                start: 6.26,
                end: 7.16
            },
            weight: {
                start: 1840,
                end: 2990
            }
        }, {
            week: 36,
            bdp: {
                start: 8.24,
                end: 9.38
            },
            ac: {
                start: 26.61,
                end: 32.27
            },
            fl: {
                start: 6.48,
                end: 7.42
            },
            weight: {
                start: 1980,
                end: 3200
            }
        }, {
            week: 37,
            bdp: {
                start: 8.37,
                end: 9.63
            },
            ac: {
                start: 27.97,
                end: 32.31
            },
            fl: {
                start: 6.58,
                end: 7.62
            },
            weight: {
                start: 2170,
                end: 3340
            }
        }, {
            week: 38,
            bdp: {
                start: 8.49,
                end: 9.67
            },
            ac: {
                start: 27.8,
                end: 33.46
            },
            fl: {
                start: 6.77,
                end: 7.63
            },
            weight: {
                start: 2220,
                end: 3530
            }
        }, {
            week: 39,
            bdp: {
                start: 8.62,
                end: 9.8
            },
            ac: {
                start: 28.22,
                end: 34.46
            },
            fl: {
                start: 6.81,
                end: 7.87
            },
            weight: {
                start: 2310,
                end: 3800
            }
        }, {
            week: 40,
            bdp: {
                start: 8.78,
                end: 9.78
            },
            ac: {
                start: 28.7,
                end: 34.28
            },
            fl: {
                start: 6.87,
                end: 7.93
            },
            weight: {
                start: 2420,
                end: 3800
            }
        } ],
        bodyBDP: 0,
        bodyAC: 0,
        bodyFL: 0,
        bodyWeight: 0,
        bodyGram: 0
    },
    created: function(t) {},
    methods: {
        bindWeeksPickerChange: function(t) {
            var e = t.detail.value, a = this.data.refers[e];
            this.setData({
                weekIndex: parseInt(e),
                currentRefer: a
            }), wx.showToast({
                title: "孕周设置成功!",
                icon: "none",
                duration: 2e3
            });
        },
        formSubmit: function() {
            var t = (0, a.default)(e.default.mark(function t(a) {
                var r, d, n, s, i, w, c, l, o, f, h, p, g, u, b, k, y;
                return e.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (r = a.detail.value.bodyBDP, d = a.detail.value.bodyAC, n = a.detail.value.bodyFL, 
                        r && d && n) {
                            t.next = 6;
                            break;
                        }
                        return wx.showToast({
                            title: "请先完整输入数据!",
                            icon: "none",
                            duration: 2e3
                        }), t.abrupt("return");

                      case 6:
                        s = parseFloat(r), i = parseFloat(d), w = parseFloat(n), l = (2 * (c = 1.07 * s * s * s + .3 * i * i * w) / 1e3).toFixed(2), 
                        o = c.toFixed(2), f = this.data.currentRefer;
                        try {
                            h = {
                                bdp: r,
                                ac: d,
                                fl: n,
                                weight: l,
                                gram: o,
                                week: f.week,
                                refer: f
                            }, (p = wx.getStorageSync("weights")) ? (p = JSON.parse(p), g = !1, u = [], p.forEach(function(t, e) {
                                t.week === f.week && (t = h, g = !0), u.push(t);
                            }), g || u.push(h), p = u) : (p = []).push(h), wx.setStorageSync("weights", JSON.stringify(p));
                        } catch (t) {}
                        return t.next = 17;

                      case 17:
                        if (t.t0 = t.sent, t.t0) {
                            t.next = 20;
                            break;
                        }
                        t.t0 = {
                            value: {
                                minWeightRecordCount: 3,
                                maxDisplayTimesPerDay: 1
                            }
                        };

                      case 20:
                        b = t.t0, console.log(b), (k = wx.getStorageSync("weights")) && (k = JSON.parse(k)).length, 
                        y = "/packageC/pages/embryo/result?week=".concat(f.week), wx.redirectTo({
                            url: y
                        });

                      case 27:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }(),
        setBodyData: function(t) {
            t.currentTarget.dataset.fieldName, t.currentTarget.dataset.fieldLabel;
            var e = 0;
            if ("" !== t.detail.value && (e = parseFloat(t.detail.value)), e >= 50) wx.showToast({
                title: "数值太大，请输入厘米单位",
                icon: "none",
                duration: 3e3
            }); else {
                var a = {};
                a[t.currentTarget.id] = t.detail.value, this.setData(a);
            }
        }
    }
});