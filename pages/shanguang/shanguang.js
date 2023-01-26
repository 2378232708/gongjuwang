Page({
    data: {
        flash: "",
        xianshi: "",
        xianshi_01: "display:none"
    },
    onLoad: function() {},
    shandeng: function() {
        if (this.setData({
            xianshi: "display:none",
            xianshi_01: "display:hidden"
        }), null == this.data.intervalId) {
            var a = this, n = (a.data.flash, setInterval(function() {
                a.setData({
                    flash: "on"
                }), setTimeout(function() {
                    a.setData({
                        flash: "off"
                    });
                }, 100);
            }, 200));
            a.setData({
                intervalId: n
            });
        }
    },
    mshandeng: function() {
        if (this.setData({
            xianshi: "display:none",
            xianshi_01: "display:hidden"
        }), null == this.data.intervalId) {
            var a = this, n = (a.data.flash, setInterval(function() {
                a.setData({
                    flash: "on"
                }), setTimeout(function() {
                    a.setData({
                        flash: "off"
                    });
                }, 500);
            }, 600));
            a.setData({
                intervalId: n
            });
        }
    },
    changliang: function() {
        this.setData({
            xianshi_01: "display:hidden",
            xianshi: "display:none"
        }), this.setData({
            flash: "on"
        });
    },
    gohome: function(a) {
        wx.switchTab({
            url: "/pages/picmake/index"
        });
    },
    close: function() {
        var a = this;
        a.setData({
            xianshi: "display:hidden",
            xianshi_01: "display:none"
        }), null !== a.data.intervalId && clearInterval(a.data.intervalId), a.setData({
            flash: "off",
            intervalId: null
        });
    }
});