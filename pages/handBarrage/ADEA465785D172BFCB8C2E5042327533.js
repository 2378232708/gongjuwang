function e(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    try {
        return wx.getStorageSync(e) || r;
    } catch (e) {
        return r;
    }
}

function r(e, r) {
    try {
        return wx.setStorageSync(e, r);
    } catch (e) {
        (0, o.$error)(e);
    }
}

function t(e) {
    try {
        return wx.removeStorageSync(e);
    } catch (e) {
        (0, o.$error)(e);
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.$setStorageSync = function(e, n, o) {
    r(e, n), o > 0 ? r(e + c, "".concat(Date.now() + o)) : t(e + c);
}, exports.$getStorageSync = function(r) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, o = (0, 
    n.$parseInt)(e(r + c));
    return o && o < Date.now() ? t : e(r) || t;
}, exports.$removeStorageSync = function(e) {
    t(e), t(e + c);
};

var n = require("F0A6C17385D172BF96C0A9741E027533.js"), o = require("D860D58585D172BFBE06BD82F7B17533.js"), c = "_expired_time";