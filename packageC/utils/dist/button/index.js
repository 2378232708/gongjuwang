var e = require("../../../87ACD253071E6DCFE1CABA5422F58836.js"), t = require("../../../FB9B7F41071E6DCF9DFD1746C8668836.js"), a = require("../../../15EC89B0071E6DCF738AE1B733868836.js"), o = require("../../../07EDAED0071E6DCF618BC6D71E068836.js"), n = [ t.button, a.openType ];

(0, o.canIUseFormFieldButton)() && n.push("wx://form-field-button"), (0, e.VantComponent)({
    mixins: n,
    classes: [ "hover-class", "loading-class" ],
    data: {
        baseStyle: ""
    },
    props: {
        formType: String,
        icon: String,
        classPrefix: {
            type: String,
            value: "van-icon"
        },
        plain: Boolean,
        block: Boolean,
        round: Boolean,
        square: Boolean,
        loading: Boolean,
        hairline: Boolean,
        disabled: Boolean,
        loadingText: String,
        customStyle: String,
        loadingType: {
            type: String,
            value: "circular"
        },
        type: {
            type: String,
            value: "default"
        },
        dataset: null,
        size: {
            type: String,
            value: "normal"
        },
        loadingSize: {
            type: String,
            value: "20px"
        },
        color: {
            type: String,
            observer: function(e) {
                var t = "";
                e && (t += "color: " + (this.data.plain ? e : "white") + ";", this.data.plain || (t += "background: " + e + ";"), 
                -1 !== e.indexOf("gradient") ? t += "border: 0;" : t += "border-color: " + e + ";"), 
                t !== this.data.baseStyle && this.setData({
                    baseStyle: t
                });
            }
        }
    },
    methods: {
        onClick: function() {
            this.data.loading || this.$emit("click");
        },
        noop: function() {}
    }
});