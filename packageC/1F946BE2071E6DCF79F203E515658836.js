function t(t, o, i) {
    wx.request({
        url: e + "?method=getLocation&nowLatitude=" + t + "&nowLongitude=" + o,
        method: "GET",
        header: {
            "Content-Type": "application/json"
        },
        success: function(t) {
            "function" == typeof i && i(t);
        },
        fail: function(t) {
            console.log(t);
        }
    });
}

var e = "https://pdp.phperservice.com/index.php/WxInterface/fdjsq";

module.exports = {
    get_city: t,
    getlist_bytype1: function(t, e, o) {
        var i = {}, n = e / 12, a = t * n * Math.pow(1 + n, o) / (Math.pow(1 + n, o) - 1), s = o * a, c = s - t;
        i.total = (s / 1e4).toFixed(2), i.total_lx = (c / 1e4).toFixed(2), i.total_dk = (t / 1e4).toFixed(2), 
        i.avg = a.toFixed(2), i.list = new Array();
        for (var l = s, d = t, u = c, r = 0; r < o; r++) {
            i.list[r] = new Array();
            var f = t * n * (Math.pow(1 + n, o) - Math.pow(1 + n, r)) / (Math.pow(1 + n, o) - 1), p = t * n * Math.pow(1 + n, r) / (Math.pow(1 + n, o) - 1);
            l -= a, d -= p, u -= f, i.list[r][1] = r + 1, i.list[r][2] = a.toFixed(2), i.list[r][3] = p.toFixed(2), 
            i.list[r][4] = f.toFixed(2), i.list[r][5] = l.toFixed(2), i.list[r][6] = d.toFixed(2), 
            i.list[r][7] = u.toFixed(2);
        }
        return i;
    },
    getlist_bytype2: function(t, e, o) {
        var i = {}, n = e / 12, a = 0, s = (t / o + t * n + t / o * (1 + n)) / 2 * o, c = s - t;
        i.total = (s / 1e4).toFixed(2), i.total_lx = (c / 1e4).toFixed(2), i.total_dk = (t / 1e4).toFixed(2), 
        i.avg = (s / o).toFixed(2), i.list = new Array();
        for (var l = s, d = t, u = c, r = 0; r < o; r++) {
            i.list[r] = new Array(), l -= a = t / o + (t - t / o * r) * n;
            var f = t / o, p = d * n;
            d -= f, u -= p, i.list[r][1] = r + 1, i.list[r][2] = a.toFixed(2), i.list[r][3] = f.toFixed(2), 
            i.list[r][4] = p.toFixed(2), i.list[r][5] = l.toFixed(2), i.list[r][6] = d.toFixed(2), 
            i.list[r][7] = u.toFixed(2);
        }
        return i;
    },
    gpspostion: function(e) {
        // wx.getLocation({
        //     type: "wgs84",
        //     success: function(o) {
        //         var i = o.latitude, n = o.longitude;
        //         o.speed, o.accuracy, t(i, n, e);
        //     }
        // });
    },
    get_allcity: function(t) {
        var o = wx.getStorageSync("All_citylist");
        o ? "function" == typeof t && t(o) : wx.request({
            url: e + "?method=getAllCity",
            method: "GET",
            header: {
                "Content-Type": "application/json"
            },
            success: function(e) {
                wx.setStorageSync("All_citylist", e.data), o = e.data, "function" == typeof t && t(o);
            }
        });
    },
    get_fangdai_set: function(t) {
        var o = wx.getStorageSync("All_fangdaiset");
        o ? "function" == typeof t && t(o) : wx.request({
            url: e + "/fangdai",
            method: "GET",
            header: {
                "Content-Type": "application/json"
            },
            success: function(e) {
                wx.setStorageSync("All_fangdaiset", e.data), o = e.data, "function" == typeof t && t(o);
            }
        });
    },
    get_city_form: function(t, o) {
        var i = "CityForm_" + t, n = wx.getStorageSync(i);
        n ? "function" == typeof o && o(n) : wx.request({
            url: e + "?method=shuifeiconfig&city=" + t,
            method: "GET",
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                wx.setStorageSync(i, t.data), n = t.data, "function" == typeof o && o(n);
            }
        });
    },
    get_shuifei_result: function(t, o) {
        wx.request({
            url: e + "?method=shuifeicalculate",
            data: t,
            method: "GET",
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                "function" == typeof o && o(t);
            }
        });
    },
    get_mmlc_img: function(t) {
        wx.request({
            url: e + "?method=getadimg",
            data: "",
            method: "GET",
            header: {
                "Content-Type": "application/json"
            },
            success: function(e) {
                "function" == typeof t && t(e);
            }
        });
    }
};