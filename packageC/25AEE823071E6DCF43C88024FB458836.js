var e = "https://www.qiushuang.xyz/jeecg-boot", t = "8257c189-dbc1-5b55-9c81-b084b214d7ad", a = e + "/image/check", c = e + "/image/garbageText", o = e + "/image/garbageImage", u = e + "/image/baiduImage";

module.exports = {
    check_url: a,
    userinfo_url: "https://www.qiushuang.xyz/jeecg-boot/image/decrypt",
    wxlogin_url: "https://www.qiushuang.xyz/jeecg-boot/image/wx_login",
    view_image_url: "https://www.qiushuang.xyz/jeecg-boot/sys/common/static",
    is_open_url: "https://www.qiushuang.xyz/jeecg-boot/image/is_open",
    garbage_text_url: c,
    garbage_image_url: o,
    baidu_image_url: u,
    account_code: t,
    imageCheckRequest: function(e, c, o, u) {
        wx.uploadFile({
            url: a,
            filePath: e,
            header: {
                "content-type": "multipart/form-data"
            },
            name: "file",
            formData: {
                type: o,
                openId: c,
                account_code: t
            },
            method: "POST",
            success: function(e) {
                u.success(e.data);
            },
            fail: function(e) {
                u.fail && u.fail();
            }
        });
    },
    calculatLogRequest: function(e, a, c, o, u, i) {
        wx.request({
            url: "https://www.qiushuang.xyz/jeecg-boot/image/claculate",
            data: {
                account_code: t,
                openId: e,
                type: o,
                date: a,
                days: c,
                expireDate: u,
                source: i
            },
            method: "GET",
            header: {
                "content-type": "application/json"
            }
        });
    },
    frequentUseRequest: function(e, a, c) {
        wx.request({
            url: "https://www.qiushuang.xyz/jeecg-boot/image/frequentUse",
            data: {
                account_code: t,
                openId: e,
                source: a
            },
            method: "GET",
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                c.success(e.data);
            },
            fail: function(e) {
                c.fail && c.fail();
            }
        });
    },
    garbageImageCheckRequest: function(e, a, c, u) {
        wx.uploadFile({
            url: o,
            filePath: e,
            header: {
                "content-type": "multipart/form-data"
            },
            name: "file",
            formData: {
                openId: a,
                account_code: t,
                cityId: c
            },
            method: "POST",
            success: function(e) {
                u.success(e.data);
            },
            fail: function(e) {
                u.fail && u.fail();
            }
        });
    },
    garbageTextCheckRequest: function(e, a, o, u) {
        wx.request({
            url: c,
            data: {
                account_code: t,
                openId: a,
                text: e,
                cityId: o
            },
            method: "GET",
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                u.success(e.data);
            },
            fail: function(e) {
                u.fail && u.fail();
            }
        });
    },
    baiduImageRequest: function(e, a, c, o) {
        wx.uploadFile({
            url: u,
            filePath: e,
            header: {
                "content-type": "multipart/form-data"
            },
            name: "file",
            formData: {
                type: c,
                openId: a,
                account_code: t
            },
            method: "POST",
            success: function(e) {
                o.success(e.data);
            },
            fail: function(e) {
                o.fail && o.fail();
            }
        });
    }
};