module.exports = {
    showMsg: function(o) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        wx.showToast({
            title: o,
            icon: t,
            duration: 1500
        });
    }
};