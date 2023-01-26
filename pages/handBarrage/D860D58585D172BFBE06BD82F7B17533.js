Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.$error = function() {
    for (var o = arguments.length, t = new Array(o), l = 0; l < o; l++) t[l] = arguments[l];
    var s;
    r && (s = console).error.apply(s, t), e.errors.splice(n, 1, a(t));
}, exports.$warn = function() {
    for (var o = arguments.length, t = new Array(o), l = 0; l < o; l++) t[l] = arguments[l];
    var s;
    r && (s = console).warn.apply(s, t), e.warns.splice(n, 1, a(t));
}, exports.$log = function() {
    for (var o = arguments.length, t = new Array(o), l = 0; l < o; l++) t[l] = arguments[l];
    var s;
    r && (s = console).log.apply(s, t), e.logs.splice(n, 1, a(t));
}, exports.$info = function() {
    for (var o = arguments.length, t = new Array(o), l = 0; l < o; l++) t[l] = arguments[l];
    var s;
    r && (s = console).info.apply(s, t), e.info.splice(n, 1, a(t));
}, exports.$debug = function() {
    for (var o = arguments.length, t = new Array(o), l = 0; l < o; l++) t[l] = arguments[l];
    var s;
    r && (s = console).debug.apply(s, t), e.debugs.splice(n, 1, a(t));
}, exports.$getLogTrack = function() {
    var r = JSON.stringify(e);
    return t(), r;
};

var r = !1, n = 20, e = null, o = function(r, n) {
    return Object.prototype.toString.call(r) === "[object ".concat(n, "]");
}, t = function() {
    return e = {
        errors: [],
        warns: [],
        logs: [],
        info: [],
        debugs: []
    };
}, a = function() {
    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function(r) {
        return o(n = r, "Object") || o(n, "Array") ? JSON.stringify(r) : r;
        var n;
    }).join("_");
};

t();