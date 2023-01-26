var t = [ {
    status: "有点寒碜",
    introductions: "目前你的退休金偏低，建议每月额外增加养老金或提高你的工资",
    style: "margin-bottom:15rpx"
}, {
    status: "衣食无忧",
    introductions: "不缺吃不缺穿，偶尔下馆子",
    style: "margin-bottom:40rpx"
}, {
    status: "中产",
    introductions: "有的吃有的穿，还能旅个游",
    style: "margin-bottom:40rpx"
}, {
    status: "富豪",
    introductions: "可随便吃喝玩，任性不差钱",
    style: "margin-bottom:40rpx"
} ];

module.exports = {
    getResult: function(s, o) {
        return o < s / 3 ? t[0] : o < s / 3 * 2 ? t[1] : o < s ? t[2] : t[3];
    }
};