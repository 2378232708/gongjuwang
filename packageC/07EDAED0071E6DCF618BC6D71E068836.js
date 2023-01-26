function e(e, r) {
    e = e.split("."), r = r.split(".");
    for (var t = Math.max(e.length, r.length); e.length < t; ) e.push("0");
    for (;r.length < t; ) r.push("0");
    for (var n = 0; n < t; n++) {
        var s = parseInt(e[n], 10), o = parseInt(r[n], 10);
        if (s > o) return 1;
        if (s < o) return -1;
    }
    return 0;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.canIUseModel = function() {
    return e((0, r.getSystemInfoSync)().SDKVersion, "2.9.3") >= 0;
}, exports.canIUseFormFieldButton = function() {
    return e((0, r.getSystemInfoSync)().SDKVersion, "2.10.3") >= 0;
};

var r = require("66E31625071E6DCF00857E22E4068836.js");