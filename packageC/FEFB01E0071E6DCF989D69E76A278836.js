var o = [ 7480, 7425, 7706, 6504, 4699, 6538, 4986, 5482, 5525, 6057, 5525, 6071, 5600, 6071, 5112, 5768, 4767, 4491, 4628, 4672, 5921, 5333, 5265, 4429, 4581, 5019, 5020, 4298, 5801, 6071, 5379, 5096, 5616, 5883 ], e = [ 65, 59, 53 ], l = [ 139, 170, 195 ];

module.exports = {
    calculate: function(r) {
        console.log(r);
        var u = r[3].value;
        "¥" == u.substring(0, 1) && (u = u.substring(2)), u = Number(u);
        var a = r[6].value;
        "¥" == a.substring(0, 1) && (a = a.substring(2)), a = Number(a), console.log(u + "," + a);
        var s = o[r[0].value], v = u / s;
        v > 3 && (v = 3);
        var n = v / .6;
        n > 1 && (n = 1);
        var t = e[r[5].value] - r[1].value - 18;
        t < 0 && (t = 0);
        var c = r[2].value, g = Number(c[0]);
        Number(c[1]) > 6 && g++;
        var i = void 0;
        "3" == r[4].value ? (console.log("0.08"), i = .08) : i = .12, console.log("b-----" + i);
        var b = s * (v + n) / 2 * (g + t) * .01, m = (a + 12 * t * u * i) / l[r[5].value];
        console.log(b), console.log(m);
        var N = (b + m).toFixed(1);
        return console.log(N), N;
    },
    getPublicPosition: function(e) {
        return o[e];
    }
};