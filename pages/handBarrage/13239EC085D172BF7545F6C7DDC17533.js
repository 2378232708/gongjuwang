Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0, exports.default = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return new Promise(function(o, r) {
        t.success = o, t.fail = r, wx[e](t);
    });
};