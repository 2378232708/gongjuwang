var t = require("76C4400185D172BF10A22806F8607533.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

for (var e = t(require("AA26268285D172BFCC404E8509917533.js")), o = require("F0A6C17385D172BF96C0A9741E027533.js"), i = {
    press: "",
    exit: "",
    select: "",
    win: "",
    roulette: "https://wxflag.afunapp.com/finger/roulette.mp3",
    shake: "",
    uncle_start: "",
    barrage: "",
    guess_error: "",
    guess_right: "",
    deskmate_start: "",
    deskmate_hit: "",
    deskmate_gameover: "",
    deskmate_teacher_male: "",
    deskmate_dese: "",
    deskmate_teacher_female: ""
}, n = 0; n < 13; n++) i["light/".concat(n + 1)] = "";

var a = {
    audioContext: null,
    audioContexts: [],
    contextIdx: 0,
    addSkinAudio: function() {
        (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(function(t) {
            var e = t.resource, o = e.click_audio, n = e.select_audio;
            void 0 === i[o] && (i[o] = ""), void 0 === i[n] && (i[n] = "");
        });
    },
    checkAudioStorage: function() {
        (0, o.$isDevTools)() || setTimeout(function() {
            Promise.all(Object.keys(i).map(function(t) {
                return e.default.downloadAudio(t);
            })).then(function(t) {
                Object.keys(i).forEach(function(e, o) {
                    i[e] = t[o];
                });
            });
        }, 1e3);
    },
    clearContext: function() {
        this.clearAudioContext(), this.audioContexts.length && (this.audioContexts.forEach(function(t) {
            t.destroy(), t = null;
        }), this.audioContexts.length = 0), this.audioContext = 0;
    },
    clearAudioContext: function() {
        this.audioContext && (this.audioContext.destroy(), this.audioContext = null);
    },
    stopMusic: function() {
        this.audioContext && this.audioContext.stop();
    },
    playMusic: function(t) {
        var e = getApp().globalData.audio[t];
        if (e && getApp().globalData.settings.voiceChecked && this && this.canIUseAudio()) {
            if (!this.audioContexts.length) for (var o = 0; o < 20; o++) this.audioContexts[o] = wx.createInnerAudioContext();
            var i = this.audioContexts[this.contextIdx];
            i && (i.src = e, i.play()), 20 == ++this.contextIdx && (this.contextIdx = 0);
        }
    },
    playLightMusic: function(t) {
        var e = i[t];
        e && this && this.canIUseAudio() && (this.audioContext || (this.audioContext = wx.createInnerAudioContext(), 
        this.audioContext && (this.audioContext.autoplay = !0, this.audioContext.loop = !0)), 
        this.audioContext && (this.audioContext.src = e));
    },
    canIUseAudio: function() {
        return wx.canIUse("createInnerAudioContext");
    }
};

exports.default = a;