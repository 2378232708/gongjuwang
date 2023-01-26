function t(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t;
}

function e(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e && (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), i.push.apply(i, a);
    }
    return i;
}

function i(t) {
    for (var i = 1; i < arguments.length; i++) {
        var a = null != arguments[i] ? arguments[i] : {};
        i % 2 ? e(a, !0).forEach(function (e) {
            (0, n.default)(t, e, a[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : e(a).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
        });
    }
    return t;
}

var a = require("./76C4400185D172BF10A22806F8607533.js"),
    n = a(require("./7123DF7485D172BF1745B77331407533.js")),
    s = require("./F0A6C17385D172BF96C0A9741E027533.js"),
    r = a(require("./AF571E7385D172BFC9317674F2417533.js")),
    o = a(require("./13239EC085D172BF7545F6C7DDC17533.js")),
    l = require("./ADEA465785D172BFCB8C2E5042327533.js"),
    h = (0,
        s.$getSysInfo)(),
    u = h.windowWidth,
    c = h.windowHeight,
    g = [
        [255, 0, 0, 1],
        [0, 255, 0, 1],
        [0, 0, 255, 1],
        [255, 255, 255, 1],
        [255, 251, 0, 1],
        [215, 0, 255, 1],
        [255, 95, 0, 1]
    ],
    p = {
        font: [255, 255, 255, 1],
        fontSize: 240,
        bg: [0, 0, 0, 1],
        speed: 2,
        light: [255, 255, 255, 1],
        lightSize: 50
    };

Page({
    targetName: "",
    scrollTimer: null,
    inputValue: "",
    displayText: "请输入你要的弹幕",
    data: i({
        isIpx: getApp().globalData.isIpx,
        showMenu: !1,
        showInput: !1,
        pageHeight: 0,
        inputTextArray: [],
        displayCss: {
            transitionDuration: 0,
            practicalHeight: 0
        },
        defaultInputValue: "",
        activeAttr: "",
        PRESET_COLORS: g,
        showSettings: !1
    }, p),
    onLoad: function () {
        var t = this;
        setTimeout(function () {
            t.setData({
                showMenu: !0
            });
        }, 100), this.setDefaultParameter(), this.runScroll();
    },
    onUnload: function () {
        this.stopScroll();
        var t = this.data,
            e = t.speed,
            i = t.fontSize,
            a = t.font,
            n = t.bg,
            s = t.light,
            r = t.lightSize;
        (0, o.default)("setStorage", {
            key: "handBarrageInfo",
            data: {
                speed: e,
                fontSize: i,
                font: a,
                bg: n,
                light: s,
                lightSize: r,
                displayText: this.data.displayText
            }
        });
    },
    setDefaultParameter: function () {
        var t = (0, l.$getStorageSync)("handBarrageInfo", i({}, p, {
                displayText: "请输入你要的弹幕"
            })),
            e = t.speed,
            a = t.fontSize,
            n = t.lightSize,
            r = t.font,
            o = t.bg,
            h = t.light,
            g = t.displayText;
        this.data.displayText = g, this.setData({
            pageHeight: Math.floor(750 * c / u),
            font: (0, s.$isString)(r) ? r.split(",") : r,
            fontSize: Number(a),
            light: (0, s.$isString)(h) ? h.split(",") : h,
            lightSize: Number(n),
            bg: (0, s.$isString)(o) ? o.split(",") : o,
            speed: Number(e)
        }), console.log("this.data.displayText", g);
    },
    runScroll: function () {
        var t = this;
        this.setInputTextArray();
        var e = this.data.pageHeight + 800;
        this.data.inputTextArray.forEach(function (t) {
            return e += t.fontHeight;
        });
        var i = Math.ceil(e * this.data.speed),
            a = Math.ceil(e * u / 750);
        this.scroll(i, a), this.setData({
            scrollTimer: setInterval(function () {
                t.scroll(i, a);
            }, i)
        });
    },
    scroll: function (t, e) {
        var i = this;
        this.setData({
            displayCss: {
                transitionDuration: 0,
                practicalHeight: 0
            }
        }), setTimeout(function () {
            i.setData({
                displayCss: {
                    transitionDuration: t,
                    practicalHeight: e
                }
            });
        }, 300);
    },
    stopScroll: function () {
        this.data.scrollTimer && (clearInterval(this.data.scrollTimer), this.setData({
            scrollTimer: null
        })), this.setData({
            displayCss: {
                transitionDuration: 0,
                practicalHeight: 0
            },
            inputTextArray: []
        });
    },
    setInputTextArray: function () {
        var t = this,
            e = String(this.data.displayText);
        this.setData({
            inputTextArray: e.split("").map(function (e) {
                return {
                    text: e,
                    fontHeight: t.setFontHeight(t.isChinese(e))
                };
            })
        });
    },
    setFontHeight: function (t) {
        return Math.floor((t ? 1.05 : .7) * this.data.fontSize);
    },
    onChangeScroll: function () {
        this.stopScroll(), this.runScroll();
    },
    onSetFont: function () {
        this.showSettings("font");
    },
    onFontSizeChange: function (t) {
        var e = t.detail.value;
        this.setData({
            fontSize: +e
        }), this.onChangeScroll();
    },
    onSetLight: function () {
        this.showSettings("light");
    },
    onLightSizeChange: function (t) {
        var e = t.detail.value;
        this.setData({
            lightSize: +e
        });
    },
    onSetBg: function () {
        this.showSettings("bg");
    },
    onSetSpeed: function () {
        this.showSettings("speed");
    },
    showSettings: function (t) {
        var e = this.data,
            i = e.activeAttr,
            a = e.showSettings;
        this.setData({
            activeAttr: t,
            showSettings: i !== t || !a
        });
    },
    onSpeedChange: function (t) {
        var e = t.detail.value;
        this.setData({
            speed: Number((2 - Number(e)).toFixed(1))
        }), this.onChangeScroll();
    },
    onSetColor: function (t) {
        var e = t.currentTarget.dataset.idx,
            i = g[e];
        "font" === this.data.activeAttr ? this.setData({
            font: i
        }) : "light" === this.data.activeAttr ? this.setData({
            light: i
        }) : "bg" === this.data.activeAttr && this.setData({
            bg: i
        });
    },
    setColor: function (e, i) {
        "font" === this.data.activeAttr ? this.setData(t({}, "font[".concat(e, "]"), +i)) : "light" === this.data.activeAttr ? this.setData(t({}, "light[".concat(e, "]"), +i)) : "bg" === this.data.activeAttr && this.setData(t({}, "bg[".concat(e, "]"), +i));
    },
    onRedChange: function (t) {
        var e = t.detail.value;
        this.setColor(0, e);
    },
    onGreenChange: function (t) {
        var e = t.detail.value;
        this.setColor(1, e);
    },
    onBlueChange: function (t) {
        var e = t.detail.value;
        this.setColor(2, e);
    },
    onTransparentChange: function (t) {
        var e = t.detail.value;
        this.setColor(3, e);
    },
    onSendText: function () {
        var t = this,
            e = this.data.inputValue;
            t.setData({
                defaultInputValue: t.data.inputValue || "",
                showInput: !1,
                displayText: t.data.inputValue
            }), t.data.inputValue, t.onChangeScroll()
        
    },
    onKeyInput: function (t) {
        "习近平" == t.detail.value ? this.setData({
            defaultInputValue: "",
            inputValue: ""
        }) : this.setData({
            inputValue: t.detail.value
        });
    },
    onShowInput: function () {
        this.setData({
            showInput: !0,
            activeAttr: ""
        });
    },
    onShowMenu: function () {
        this.data.showInput ? this.setData({
            showInput: !1
        }) : this.setData({
            showMenu: !this.data.showMenu,
            showSettings: !1,
            activeAttr: ""
        });
    },
    onShareAppMessage: function () {
        var t = this.data,
            e = t.font,
            i = t.fontSize,
            a = t.bg,
            n = t.light,
            s = t.lightSize,
            r = t.speed;
        this.data.displayText;
        return {
            title: "想说的话都在手持弹幕里了↓",
            path: "/pages/handBarrage/handBarrage",
            imageUrl: "https://img.huangyuheng.top/api/gjw/share/handBarrage.jpg"
        };
    },
    isChinese: function (t) {
        return /^[\u4e00-\u9fa5]+$/.test(t);
    },
    onBack: function () {
        (0, s.$navigateBack)();
    },
});