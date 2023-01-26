function t(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t;
}

function e() {
    return new Promise(function(t) {
        wx.getStorage({
            key: o,
            success: function(e) {
                t(e.data ? e.data.filter(function(t) {
                    return new Date().getTime() - t.createdAt < 6048e5;
                }) : []);
            },
            fail: function(e) {
                t([]);
            }
        });
    });
}

function n() {
    var t = wx.getStorageSync("__AdsObj");
    return t && t[new Date().toISOString().split("T")[0]] || {
        todayCount: 0,
        showAds1: !1,
        showAds2: !1
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getTrackingId = function() {
    var t = wx.getStorageSync("tracking_id");
    return t || (t = "" + new Date().getTime() + Math.random(), wx.setStorageSync("tracking_id", t)), 
    t;
}, exports.getRandomId = function() {
    return "" + new Date().getTime() + Math.random();
}, exports.getSign = function() {
    var t = "" + new Date().getTime() + Math.random();
    return {
        t: t,
        sign: r(t + "dfl&sd$4sdsddil3434kljdl3432o549&90")
    };
}, exports.reportError = function(t, e) {
    try {
        "[object Object]" !== t.toString() && (t = {
            error: t.toString()
        }), wx.reportAnalytics("error_report", {
            msg: JSON.stringify(t)
        });
    } catch (t) {}
}, exports.formatNum = function(t) {
    return t < 10 ? "0" + t : t;
}, exports.saveItem = function(t) {
    e().then(function(e) {
        e.unshift(t), wx.setStorage({
            key: o,
            data: e
        });
    }).catch(function(t) {
        console.log(t);
    });
}, exports.getItems = e, exports.deleteItem = function(t) {
    e().then(function(e) {
        e = e.filter(function(e) {
            return e.id !== t;
        }), wx.setStorage({
            key: o,
            data: e
        });
    });
}, exports.getDate = function() {
    var t = new Date();
    return "" + t.getFullYear() + t.getMonth() + t.getDate();
}, exports.getAdsObj = n, exports.addTodayAdsCount = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, r = n();
    r.todayCount = r.todayCount + e, wx.setStorage({
        key: "__AdsObj",
        data: t({}, new Date().toISOString().split("T")[0], r)
    });
}, exports.changeShowAds = function(e) {
    if (e) {
        var r = n();
        r[e] = !0, wx.setStorage({
            key: "__AdsObj",
            data: t({}, new Date().toISOString().split("T")[0], r)
        });
    }
};

var r = require("./md5.min.js"), o = "ITEM_LIST_KEY";