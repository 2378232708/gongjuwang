var o = require("../@babel/runtime/helpers/typeof");

function t(o) {
    return (t = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function(o) {
        return void 0 === o ? "undefined" : r(o);
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : void 0 === o ? "undefined" : r(o);
    })(o);
}

function n(o) {
    return "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? module.exports = n = function(o) {
        return t(o);
    } : module.exports = n = function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : t(o);
    }, n(o);
}

var r = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
    return o(t);
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : o(t);
};

module.exports = n;