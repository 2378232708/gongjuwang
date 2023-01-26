function e(e, n, t) {
    Object.keys(t).forEach(function(i) {
        e[i] && (n[t[i]] = e[i]);
    });
}

function n(e, n, t) {
    var s = t.type, r = t.name, o = t.linked, a = t.unlinked, d = t.linkChanged, l = n.beforeCreate, c = n.destroyed;
    "descendant" === s && (e.created = function() {
        l && l.bind(this)(), this.children = this.children || [];
    }, e.detached = function() {
        this.children = [], c && c.bind(this)();
    }), e.relations = Object.assign(e.relations || {}, function(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t, e;
    }({}, "../" + r + "/index", {
        type: s,
        linked: function(e) {
            i[s].linked.bind(this)(e), o && o.bind(this)(e);
        },
        linkChanged: function(e) {
            d && d.bind(this)(e);
        },
        unlinked: function(e) {
            i[s].unlinked.bind(this)(e), a && a.bind(this)(e);
        }
    }));
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.VantComponent = void 0;

var t = require("CC9F2330071E6DCFAAF94B3766568836.js"), i = {
    ancestor: {
        linked: function(e) {
            this.parent = e;
        },
        unlinked: function() {
            this.parent = null;
        }
    },
    descendant: {
        linked: function(e) {
            this.children = this.children || [], this.children.push(e);
        },
        unlinked: function(e) {
            this.children = (this.children || []).filter(function(n) {
                return n !== e;
            });
        }
    }
};

exports.VantComponent = function() {
    var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, s = {};
    e(i, s, {
        data: "data",
        props: "properties",
        mixins: "behaviors",
        methods: "methods",
        beforeCreate: "created",
        created: "attached",
        mounted: "ready",
        relations: "relations",
        destroyed: "detached",
        classes: "externalClasses"
    });
    var r = i.relation;
    r && n(s, i, r), s.externalClasses = s.externalClasses || [], s.externalClasses.push("custom-class"), 
    s.behaviors = s.behaviors || [], s.behaviors.push(t.basic), i.field && s.behaviors.push("wx://form-field"), 
    s.properties && Object.keys(s.properties).forEach(function(e) {
        Array.isArray(s.properties[e]) && (s.properties[e] = null);
    }), s.options = {
        multipleSlots: !0,
        addGlobalClass: !0
    }, Component(s);
};