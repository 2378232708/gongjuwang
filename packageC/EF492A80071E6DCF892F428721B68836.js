Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.transition = void 0;

var e = require("66E31625071E6DCF00857E22E4068836.js"), t = function(e) {
    return {
        enter: "van-" + e + "-enter van-" + e + "-enter-active enter-class enter-active-class",
        "enter-to": "van-" + e + "-enter-to van-" + e + "-enter-active enter-to-class enter-active-class",
        leave: "van-" + e + "-leave van-" + e + "-leave-active leave-class leave-active-class",
        "leave-to": "van-" + e + "-leave-to van-" + e + "-leave-active leave-to-class leave-active-class"
    };
};

exports.transition = function(a) {
    return Behavior({
        properties: {
            customStyle: String,
            show: {
                type: Boolean,
                value: a,
                observer: "observeShow"
            },
            duration: {
                type: null,
                value: 300,
                observer: "observeDuration"
            },
            name: {
                type: String,
                value: "fade"
            }
        },
        data: {
            type: "",
            inited: !1,
            display: !1
        },
        methods: {
            observeShow: function(e, t) {
                e !== t && (e ? this.enter() : this.leave());
            },
            enter: function() {
                var a = this, n = this.data, s = n.duration, i = n.name, r = t(i), o = (0, e.isObj)(s) ? s.enter : s;
                this.status = "enter", this.$emit("before-enter"), (0, e.requestAnimationFrame)(function() {
                    a.checkStatus("enter"), a.$emit("enter"), a.setData({
                        inited: !0,
                        display: !0,
                        classes: r.enter,
                        currentDuration: o
                    }), (0, e.requestAnimationFrame)(function() {
                        a.checkStatus("enter"), a.transitionEnded = !1, a.setData({
                            classes: r["enter-to"]
                        });
                    });
                });
            },
            leave: function() {
                var a = this;
                if (this.data.display) {
                    var n = this.data, s = n.duration, i = n.name, r = t(i), o = (0, e.isObj)(s) ? s.leave : s;
                    this.status = "leave", this.$emit("before-leave"), (0, e.requestAnimationFrame)(function() {
                        a.checkStatus("leave"), a.$emit("leave"), a.setData({
                            classes: r.leave,
                            currentDuration: o
                        }), (0, e.requestAnimationFrame)(function() {
                            a.checkStatus("leave"), a.transitionEnded = !1, setTimeout(function() {
                                return a.onTransitionEnd();
                            }, o), a.setData({
                                classes: r["leave-to"]
                            });
                        });
                    });
                }
            },
            checkStatus: function(e) {
                if (e !== this.status) throw new Error("incongruent status: " + e);
            },
            onTransitionEnd: function() {
                if (!this.transitionEnded) {
                    this.transitionEnded = !0, this.$emit("after-" + this.status);
                    var e = this.data, t = e.show, a = e.display;
                    !t && a && this.setData({
                        display: !1
                    });
                }
            }
        }
    });
};