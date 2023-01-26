Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = [], e = function e(n) {
    return n = Object.assign(Object.assign({}, e.currentOptions), n), new Promise(function(e, o) {
        var s = (n.context || function() {
            var t = getCurrentPages();
            return t[t.length - 1];
        }()).selectComponent(n.selector);
        delete n.context, delete n.selector, s ? (s.setData(Object.assign({
            onCancel: o,
            onConfirm: e
        }, n)), wx.nextTick(function() {
            s.setData({
                show: !0
            });
        }), t.push(s)) : console.warn("未找到 van-dialog 节点，请确认 selector 及 context 是否正确");
    });
};

e.defaultOptions = {
    show: !1,
    title: "",
    width: null,
    theme: "default",
    message: "",
    zIndex: 100,
    overlay: !0,
    selector: "#van-dialog",
    className: "",
    asyncClose: !1,
    transition: "scale",
    customStyle: "",
    messageAlign: "",
    overlayStyle: "",
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    showConfirmButton: !0,
    showCancelButton: !1,
    closeOnClickOverlay: !1,
    confirmButtonOpenType: ""
}, e.alert = e, e.confirm = function(t) {
    return e(Object.assign({
        showCancelButton: !0
    }, t));
}, e.close = function() {
    t.forEach(function(t) {
        t.close();
    }), t = [];
}, e.stopLoading = function() {
    t.forEach(function(t) {
        t.stopLoading();
    });
}, e.setDefaultOptions = function(t) {
    Object.assign(e.currentOptions, t);
}, e.resetDefaultOptions = function() {
    e.currentOptions = Object.assign({}, e.defaultOptions);
}, e.resetDefaultOptions(), exports.default = e;