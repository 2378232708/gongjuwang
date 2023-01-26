function e(e, r) {
    var a = new Array(12);
    return a[0] = 31, a[1] = 28, a[2] = 31, a[3] = 30, a[4] = 31, a[5] = 30, a[6] = 31, 
    a[7] = 31, a[8] = 30, a[9] = 31, a[10] = 30, a[11] = 31, (e % 4 == 0 && e % 100 != 0 || e % 400 == 0) && (a[1] = 29), 
    a[r - 1];
}

function r(e) {
    return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}

function a(e, a) {
    var t = 0, n = e - 1, s = 1;
    for (t = n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400) + 1; s < a; s++) switch (s) {
      case 1:
        t += 31;
        break;

      case 2:
        r(e) ? t += 29 : t += 28;
        break;

      case 3:
        t += 31;
        break;

      case 4:
        t += 30;
        break;

      case 5:
        t += 31;
        break;

      case 6:
        t += 30;
        break;

      case 7:
      case 8:
        t += 31;
        break;

      case 9:
        t += 30;
        break;

      case 10:
        t += 31;
        break;

      case 11:
        t += 30;
        break;

      case 12:
        t += 31;
    }
    return t % 7;
}

var t, n = new Array();

module.exports = {
    drawCld: function(r, s, o, b, c, f) {
        var l = new Date(Date.parse(c)), g = parseInt(o), i = parseInt(b), u = new Date(Date.UTC(l.getFullYear(), l.getMonth(), l.getDate())), w = a(r, s), D = e(r, s);
        for (t = 0; t < 42; t++) {
            n[t] = new Array(), n[t][0] = new Array(), n[t][1] = new Array(), n[t][2] = new Array(), 
            n[t][3] = new Array();
            var y = t - (w - 1);
            if (w <= t && y <= D) {
                var p = new Date(Date.UTC(r, s - 1, y)), v = (Math.floor((p.getTime() - u.getTime()) / 864e5) % g + g) % g;
                if (0 <= v && v <= i - 1) var k = "rlbg-yjq", h = "月经期", A = "fb";
                i <= v && v <= g - 20 && (k = "rlbg-aqq", h = "安全期", A = "fb"), g - 19 <= v && v <= g - 10 && (k = "rlbg-syq", 
                h = "易孕期", A = "fb"), v == g - 14 && (k = "rlbg-plq", h = "排卵日", A = "fb"), g - 9 <= v && v <= g - 1 && (k = "rlbg-aqq", 
                h = "安全期", A = "fb"), n[t][0] = y, 0 == f ? (n[t][1] = "", n[t][2] = "", n[t][3] = A) : (n[t][1] = k, 
                n[t][2] = h, n[t][3] = "ft");
            } else n[t][0] = "";
        }
        return n;
    },
    getMonthDate: e,
    getFirstDay: a,
    runNian: r,
    getNextMonth: function(e) {
        var r = new Array(), a = e.split("-"), t = a[0], n = a[1], s = (a[2], new Date(t, n, 0));
        s = s.getDate();
        var o = t, b = parseInt(n) + 1;
        return 13 == b && (o = parseInt(o) + 1, b = 1), b < 10 && (b = "0" + b), r[0] = o, 
        r[1] = b, r;
    },
    getPreMonth: function(e) {
        var r = new Array(), a = e.split("-"), t = a[0], n = a[1], s = (a[2], new Date(t, n, 0));
        s = s.getDate();
        var o = t, b = parseInt(n) - 1;
        return 0 == b && (o = parseInt(o) - 1, b = 12), b < 10 && (b = "0" + b), r[0] = o, 
        r[1] = b, r;
    }
};