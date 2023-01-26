var t = require("../@babel/runtime/helpers/typeof");

function e(t) {
    return null != t;
}

function n(t) {
    return /^\d+(\.\d+)?$/.test(t);
}

function o(t) {
    setTimeout(function() {
        t();
    }, 1e3 / 30);
}

function r() {
    return null == i && (i = wx.getSystemInfoSync()), i;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var u = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
    return t(e);
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e);
};

exports.isDef = e, exports.isObj = function(t) {
    var e = void 0 === t ? "undefined" : u(t);
    return null !== t && ("object" === e || "function" === e);
}, exports.isNumber = n, exports.range = function(t, e, n) {
    return Math.min(Math.max(t, e), n);
}, exports.nextTick = o, exports.getSystemInfoSync = r, exports.addUnit = function(t) {
    if (e(t)) return n(t = String(t)) ? t + "px" : t;
}, exports.requestAnimationFrame = function(t) {
    return "devtools" === r().platform ? o(t) : wx.createSelectorQuery().selectViewport().boundingClientRect().exec(function() {
        t();
    });
};

var i = null;