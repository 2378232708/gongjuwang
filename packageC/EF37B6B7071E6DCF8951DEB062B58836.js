var e = {
    diffDays: function(e, t) {
        var o = t.getTime() - e.getTime();
        return Math.floor(o / 864e5);
    },
    diffDate: function(e, t, o) {
        void 0 === o && (o = !1), console.info("date1:", e, "  -------- date2:", t);
        var r = t.getTime() - e.getTime(), n = Math.floor(r / 864e5), a = r % 864e5, i = Math.floor(a / 36e5), l = a % 36e5, g = Math.floor(l / 6e4), s = l % 6e4, u = Math.round(s / 1e3);
        return console.log(" 相差 " + n + "天 " + i + "小时 " + g + " 分钟" + u + " 秒"), o ? " " + n + "天 " + i + "小时 " + g + "分钟 " + u + "秒" : n > 0 ? n + "天前" : i > 0 ? i + "小时前" : g > 0 ? g + "分钟前" : u > 0 ? u + "秒前" : void 0;
    },
    date2str: function(e, t) {
        var o = {
            y: e.getFullYear(),
            M: e.getMonth() + 1,
            d: e.getDate(),
            h: e.getHours(),
            m: e.getMinutes(),
            s: e.getSeconds()
        };
        return t.replace(/(y+|M+|d+|h+|m+|s+)/g, function(e) {
            return ((e.length > 1 ? "0" : "") + o[e.slice(-1)]).slice(-(e.length > 2 ? e.length : 2));
        });
    }
};

module.exports = e;