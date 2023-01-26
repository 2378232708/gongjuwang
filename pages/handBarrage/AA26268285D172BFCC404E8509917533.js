var e = require("76C4400185D172BF10A22806F8607533.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("13239EC085D172BF7545F6C7DDC17533.js")), r = require("ADEA465785D172BFCB8C2E5042327533.js"), n = require("F0A6C17385D172BF96C0A9741E027533.js"), a = new Map(), u = {
    downloadAudio: function(e) {
        var u = this, i = (0, r.$getStorageSync)(e, "");
        if (a.has(e)) return i ? Promise.resolve(i) : a.get(e);
        var o = (0, t.default)("getSavedFileInfo", {
            filePath: i
        }).then(function() {
            return i;
        }).catch(function() {
            return (0, t.default)("downloadFile", {
                url: u.qn(e)
            }).then(function(e) {
                var r = e.tempFilePath;
                return (0, t.default)("saveFile", {
                    tempFilePath: r
                });
            }).then(function(t) {
                var n = t.savedFilePath;
                return (0, r.$setStorageSync)(e, n), n;
            }).catch(function(t) {
                var a = t.errMsg, i = void 0 === a ? "" : a;
                if ((0, n.$inArray)(i, "exceed")) {
                    var o = u.qn(e);
                    return (0, r.$setStorageSync)(e, o), o;
                }
            });
        });
        return a.set(e, o), o;
    },
    qn: function(e) {
        return "https://wxflag.afunapp.com/finger/".concat(e, ".mp3");
    }
};

exports.default = u;