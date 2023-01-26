var e = require("../../../EF3451A4071E6DCF895239A3B6768836.js");

(0, require("../../../87ACD253071E6DCFE1CABA5422F58836.js").VantComponent)({
    classes: [ "title-class", "label-class", "value-class", "right-icon-class", "hover-class" ],
    mixins: [ e.link ],
    props: {
        title: null,
        value: null,
        icon: String,
        size: String,
        label: String,
        center: Boolean,
        isLink: Boolean,
        required: Boolean,
        clickable: Boolean,
        titleWidth: String,
        customStyle: String,
        arrowDirection: String,
        useLabelSlot: Boolean,
        border: {
            type: Boolean,
            value: !0
        },
        titleStyle: String
    },
    methods: {
        onClick: function(e) {
            this.$emit("click", e.detail), this.jumpLink();
        }
    }
});