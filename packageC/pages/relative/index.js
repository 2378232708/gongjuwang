getApp();

var t = require("../../5D3F87E4071E6DCF3B59EFE3A5858836.js");

Page({
    data: {
        model: "我称呼Ta",
        search: "",
        input: "",
        output: "",
        s_switch: !1,
        reverse: !1,
        sex: 1
    },
    switchChange: function(t) {
        this.setData({
            search: "",
            input: "",
            output: "",
            s_switch: t.detail.value,
            sex: t.detail.value ? 0 : 1
        });
    },
    bindInput: function(e) {
        var a = e.target.dataset.value, s = this.data.search, i = (this.data.output, this.data.s_switch ? 0 : 1);
        switch (a) {
          case "back":
            var u = s.lastIndexOf("的");
            u = Math.max(0, u), s ? (a = (s = s.substr(0, u)).split("的").pop(), this.setData({
                search: s,
                output: s
            })) : this.setData({
                search: "",
                input: "",
                output: ""
            });
            break;

          case "reset":
            this.setData({
                search: "",
                input: "",
                output: ""
            });
            break;

          case "exchange":
            this.setData({
                reverse: !this.data.reverse
            });

          case "equal":
            if (s) {
                var h = t({
                    text: s,
                    sex: i
                }), r = t({
                    text: s,
                    reverse: !0,
                    sex: i
                });
                "equal" == a && s.indexOf("的") > -1 && this.setData({
                    search: h.length ? h[0] : ""
                }), this.data.reverse ? r.length ? this.setData({
                    input: s,
                    output: r.join("/")
                }) : this.setData({
                    input: s,
                    output: "--"
                }) : h.length ? this.setData({
                    input: s,
                    output: h.join("/")
                }) : this.setData({
                    input: s,
                    output: "--"
                });
            } else this.setData({
                input: "",
                output: ""
            });
            break;

          default:
            s.split("的").length > 10 ? this.setData({
                search: s,
                output: "--"
            }) : this.setData({
                search: s ? s + "的" + a : a,
                output: s ? s + "的" + a : a
            });
        }
        var n = this.data.sex;
        a && this.data.search ? "爸爸,老公,儿子,哥哥,弟弟".indexOf(a) > -1 ? n = 1 : "妈妈,老婆,女儿,姐姐,妹妹".indexOf(a) > -1 && (n = 0) : n = -1;
        var p = n < 0 ? "Ta" : n ? "他" : "她", c = this.data.reverse ? p + "称呼我" : "我称呼" + p;
        this.setData({
            sex: n < 0 ? i : n,
            model: c
        });
    },
    onShareAppMessage: function() {
        return {
            title: "亲戚关系计算器 逢年过节必备神器",
            desc: "亲戚关系是一款最全面的中国亲戚关系计算器，走亲访友，逢年过节必备神器，避免叫错、不会叫亲戚的尴尬，人人必备亲戚关系工具。",
            path: "/pages/index/index"
        };
    },
    onLoad: function() {}
});