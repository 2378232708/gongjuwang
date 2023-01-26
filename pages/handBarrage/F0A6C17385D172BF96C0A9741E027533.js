function e() {
    n > 0 && (n = 0, wx.hideLoading(), a());
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.$isDevTools = function() {
    return "devtools" === t().platform;
}, exports.$isIOS = function() {
    var e = t(), r = e.platform, n = e.system;
    return "devtools" === r && n.includes("iOS") || "ios" === r;
}, exports.$hideLoading = e, exports.$showLoading = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    n > 0 ? e() : a(), n = 1, wx.showLoading(t), o = setTimeout(e, 5e3);
}, exports.$toast = function(t) {
    n > 0 && e(), wx.showToast({
        title: t,
        icon: "none",
        duration: 3e3
    });
}, exports.$navigateBack = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "index", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    getCurrentPages().length > 1 ? wx.navigateBack() : wx.reLaunch({
        url: "".concat(t ? "/".concat(t) : "", "/page/").concat(e, "/").concat(e)
    });
}, exports.$vibrate = function() {
    getApp().globalData.settings.vibrateChecked && wx.canIUse("vibrateLong") && wx.vibrateLong();
}, exports.$getDate = function(e) {
    return e ? new Date(e).getDate() : 0;
}, exports.$paddingTime = function(e) {
    return +e < 10 ? "0".concat(e) : e;
}, exports.$randomByFactor = function(e, t) {
    var r = [ 0, 0, Math.random() ], n = r[0], o = r[1], a = r[2];
    t.forEach(function(e) {
        return n += e;
    }), a *= n;
    for (var i = t.length - 1; i >= 0; i--) if (o += t[i], a <= o) return e[i];
}, exports.$curRoute = function() {
    var e = getCurrentPages();
    return e && e.length ? e[e.length - 1].route : "";
}, exports.$squareShareData = function() {
    return {
        title: "这游戏简直上瘾，一上车就停不下来！",
        imageUrl: "/square/assets/share.jpg"
    };
}, exports.$todayRemainingMS = exports.$parseInt = exports.$generateQueryParam = exports.$parseQueryParam = exports.$goWebview = exports.$pageUrl = exports.$isString = exports.$isObject = exports.$inArray = exports.$getSysInfo = void 0, 
require("./47B0444785D172BF21D62C40C3EF6533.js");

var t = function() {
    var e = getApp();
    return e && e.globalData.sysInfo || wx.getSystemInfoSync();
};

exports.$getSysInfo = t;

var r = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 ? arguments[1] : void 0;
    return -1 !== e.indexOf(t);
};

exports.$inArray = r;

var n = 0, o = null, a = function() {
    o && (clearTimeout(o), o = null);
}, i = function(e, t) {
    return Object.prototype.toString.call(e) === "[object ".concat(t, "]");
};

exports.$isObject = function(e) {
    return i(e, "Object") || i(e, "Array");
}, exports.$isString = function(e) {
    return i(e, "String");
}, exports.$pageUrl = function(e, t, r) {
    var n = "".concat(e ? "/".concat(e) : "", "/page/").concat(t, "/").concat(t);
    return r && (n += "?".concat(r)), n;
}, exports.$goWebview = function(e) {
    return wx.navigateTo({
        url: "/secondary/page/webView/webView?url=".concat(e)
    });
}, exports.$parseQueryParam = function(e, t) {
    if (!e || !r(e, t)) return "";
    var n = new RegExp("".concat(t, "=([^&]+)"), "ig").exec(e);
    return n ? n[1] : "";
}, exports.$generateQueryParam = function(e) {
    return Object.keys(e).map(function(t) {
        return "".concat(t, "=").concat(e[t]);
    }).join("&");
}, exports.$parseInt = function(e) {
    return Number.parseInt(e, 10);
}, exports.$todayRemainingMS = function() {
    var e = new Date(), t = e.getTime();
    return e.setHours(23), e.setMinutes(59), e.setSeconds(59), e.getTime() - t;
};