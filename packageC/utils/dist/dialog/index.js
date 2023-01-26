var e = require("../../../87ACD253071E6DCFE1CABA5422F58836.js"), t = require("../../../FB9B7F41071E6DCF9DFD1746C8668836.js"), n = require("../../../15EC89B0071E6DCF738AE1B733868836.js"), o = require("../../../48B57775071E6DCF2ED31F72C2E58836.js");

(0, e.VantComponent)({
    mixins: [ t.button, n.openType ],
    props: {
        show: {
            type: Boolean,
            observer: function(e) {
                !e && this.stopLoading();
            }
        },
        title: String,
        message: String,
        theme: {
            type: String,
            value: "default"
        },
        useSlot: Boolean,
        className: String,
        customStyle: String,
        asyncClose: Boolean,
        messageAlign: String,
        overlayStyle: String,
        useTitleSlot: Boolean,
        showCancelButton: Boolean,
        closeOnClickOverlay: Boolean,
        confirmButtonOpenType: String,
        width: null,
        zIndex: {
            type: Number,
            value: 2e3
        },
        confirmButtonText: {
            type: String,
            value: "确认"
        },
        cancelButtonText: {
            type: String,
            value: "取消"
        },
        confirmButtonColor: {
            type: String,
            value: o.RED
        },
        cancelButtonColor: {
            type: String,
            value: o.GRAY
        },
        showConfirmButton: {
            type: Boolean,
            value: !0
        },
        overlay: {
            type: Boolean,
            value: !0
        },
        transition: {
            type: String,
            value: "scale"
        }
    },
    data: {
        loading: {
            confirm: !1,
            cancel: !1
        }
    },
    methods: {
        onConfirm: function() {
            this.handleAction("confirm");
        },
        onCancel: function() {
            this.handleAction("cancel");
        },
        onClickOverlay: function() {
            this.onClose("overlay");
        },
        handleAction: function(e) {
            this.data.asyncClose && this.setData(function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: !0,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = !0, e;
            }({}, "loading." + e)), this.onClose(e);
        },
        close: function() {
            this.setData({
                show: !1
            });
        },
        stopLoading: function() {
            this.setData({
                loading: {
                    confirm: !1,
                    cancel: !1
                }
            });
        },
        onClose: function(e) {
            this.data.asyncClose || this.close(), this.$emit("close", e), this.$emit(e, {
                dialog: this
            });
            var t = this.data["confirm" === e ? "onConfirm" : "onCancel"];
            t && t(this);
        }
    }
});