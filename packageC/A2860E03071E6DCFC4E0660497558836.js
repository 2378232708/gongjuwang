var e, t = require("3F378EB5071E6DCF5951E6B2EE058836.js")(require("7D0F8764071E6DCF1B69EF638EF48836.js")), a = function(e) {
    return [ e.getFullYear(), e.getMonth() + 1, e.getDate() ].map(r).join("-");
}, r = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}, n = function(e, t, r) {
    if (/^([1-9][0-9]*|-[1-9][0-9]*)$/.test(t)) {
        var n = new Date(e), u = Number.parseInt(t);
        if ("1" == r) {
            var o = Number.parseInt(n.getDate());
            n.setDate(o + u);
        }
        if ("2" == r) {
            var i = Number.parseInt(n.getDate());
            n.setDate(i + 7 * u);
        }
        if ("3" == r) {
            var g = Number.parseInt(n.getMonth());
            n.setMonth(g + u);
        }
        if ("4" == r) {
            var m = Number.parseInt(n.getFullYear());
            n.setFullYear(m + u);
        }
        return u > 0 ? n.setDate(Number.parseInt(n.getDate() - 1)) : u < 0 && n.setDate(Number.parseInt(n.getDate() + 1)), 
        a(n);
    }
    wx.showModal({
        content: "请输入正整数!",
        showCancel: !1,
        confirmText: "明白了"
    });
};

module.exports = (e = {
    formatTime: function(e) {
        var t = e.getFullYear(), a = e.getMonth() + 1, n = e.getDate(), u = e.getHours(), o = e.getMinutes(), i = e.getSeconds();
        return [ t, a, n ].map(r).join("-") + " " + [ u, o, i ].map(r).join(":");
    },
    formatDate: a,
    addDate: n
}, (0, t.default)(e, "addDate", n), (0, t.default)(e, "getTimes", function() {
    return new Date().getTime();
}), (0, t.default)(e, "compareDate", function(e, t) {
    var a = new Date(e), r = new Date(t);
    return a.getTime() > r.getTime();
}), (0, t.default)(e, "formatTimeStamp", function(e) {
    var t = new Date(e);
    return [ t.getFullYear(), t.getMonth() + 1, t.getDate() ].map(r).join("-");
}), (0, t.default)(e, "subDate", function(e, t) {
    var a = new Date(e), r = new Date(t);
    return (a.getTime() - r.getTime()) / 864e5;
}), (0, t.default)(e, "formatYMDHMTime", function(e) {
    var t = e.getFullYear(), a = e.getMonth() + 1, n = e.getDate(), u = e.getHours(), o = e.getMinutes();
    return [ t, a, n ].map(r).join("-") + " " + [ u, o ].map(r).join(":");
}), (0, t.default)(e, "formatYMDHTime", function(e) {
    var t = e.getFullYear(), a = e.getMonth() + 1, n = e.getDate(), u = e.getHours();
    return [ t, a, n ].map(r).join("-") + " " + [ u ].map(r).join(":");
}), e);