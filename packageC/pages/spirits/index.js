var s = null;

Page({
    data: {
        transId: "",
        inputValue: "0",
        orgInputValue: "",
        showDialog: 0,
        showDetails: 0,
        acuteResdiease: 1,
        scrollTop: "",
        grids: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
        screenstr: "血气分析",
        screendes: "点击下面格子输入数据",
        ph: 7.25,
        pco2: 10,
        hco3: 4,
        na: 132,
        cl: 82,
        alb: 45,
        nameStr: {
            ph: "PH值",
            pco2: "二氧化碳分压(mmHg)",
            hco3: "碳酸氢根(mmol/l)",
            na: "钠离子(mmol/l)",
            cl: "氯离子(mmol/l)",
            alb: "白蛋白(g/L)"
        },
        tipStr: {
            step1: "",
            step2: "",
            step3: "",
            step4: "",
            step5: ""
        },
        diagStrArr: [ "", "正常血气", "呼吸性酸中毒", "呼吸性碱中毒", "代谢性酸中毒", "代谢性碱中毒" ],
        diagStr: [ 0, 0, 0, 0 ],
        tipStrIndex: {
            step1: 0,
            step2: 0,
            step3: 0,
            step4: 0,
            step5: 0
        },
        tipStr2: {
            step1: [],
            step2: [],
            step3: [],
            step4: [],
            step5: []
        },
        bzStr: {
            step1: "第一步，判断酸碱失衡：",
            step2: "第二步，寻找原发因素：",
            step3: "第三步，计算代偿范围：",
            step4: "第四步，计算阴离子间隙：",
            step5: "第五步，计算矫正碳酸氢根："
        },
        finalTip: "",
        step1: [],
        step2: [],
        step3: [],
        step4: [],
        step5: [],
        ishideModal: !0,
        appName: "abgcalc"
    },
    onLoad: function() {
        wx.showShareMenu({
            withShareTicket: !0
        });
    },
    clk_grid: function(t) {
        var s = t.currentTarget.id;
        this.setData({
            transId: s
        }), this.setData({
            inputValue: this.data[s].toString()
        }), this.setData({
            orgInputValue: this.data.inputValue
        }), this.setData({
            showDialog: !this.data.showDialog
        }), a = 1;
    },
    toggleDialog: function() {
        this.setData({
            showDialog: !this.data.showDialog
        });
    },
    clk_numpad: function(t) {
        var s = t.target.id;
        if ("back" == s) {
            if ("0" == (i = this.data.inputValue)) return;
            "" != (i = i.substring(0, i.length - 1)) && "." != i || (i = "0"), this.setData({
                inputValue: i
            }), a = 0;
        } else if ("clear" == s) this.setData({
            inputValue: "0"
        }); else {
            var i, e = this.data.inputValue;
            "0" == e ? "." == (i = t.target.id) && (i = e + i) : 1 == a ? (i = t.target.id, 
            a = 0) : i = e + t.target.id, this.setData({
                inputValue: i
            });
        }
    },
    saveNumpadInput: function() {
        var a = this.data.transId;
        this.setData(t({}, a, this.data.inputValue)), this.setData({
            showDialog: !this.data.showDialog
        });
    },
    cancleNumpadInput: function() {
        this.setData({
            inputValue: this.data.orgInputValue
        }), this.setData({
            showDialog: !this.data.showDialog
        });
    },
    tog_acuteResdiease: function() {
        this.setData({
            acuteResdiease: !this.data.acuteResdiease
        });
    },
    dataInput: function(t) {
        console.log(t);
    },
    onShow: function() {
        wx.createInterstitialAd && ((s = wx.createInterstitialAd({
            adUnitId: "adunit-d06877e0070e1e5e"
        })).onLoad(function() {}), s.onError(function(t) {}), s.onClose(function() {}));
    },
    calcABG: function() {
        s && s.show().catch(function(t) {
            console.error(t);
        });
        var t = 1 * this.data.ph, a = 1 * this.data.pco2, i = 1 * this.data.hco3, e = 1 * this.data.na, h = 1 * this.data.cl, p = 1 * this.data.alb, r = this.data.acuteResdiease ? 1 : 2;
        this.setData({
            "diagStr[0]": 0
        }), this.setData({
            "diagStr[1]": 0
        }), this.setData({
            "diagStr[2]": 0
        }), this.setData({
            "diagStr[3]": 0
        }), this.setData({
            step1: []
        }), this.setData({
            step2: []
        }), this.setData({
            step3: []
        }), this.setData({
            step4: []
        }), this.setData({
            step5: []
        });
        var d = this.aniongap2(e, h, i, p), n = -1 * Math.log10(24 * a / i / 1e9);
        if (console.log("predictPH:" + n), t > n + .05 || t < n - .05) this.setData({
            screenstr: "根据Henderseon-Hasselbach公式计算该血气PH与HCO3及PCO2数值不一致，存在检验误差可能！"
        }); else {
            if (t >= 7.35 && t <= 7.45 && a >= 35 && a <= 45 && i >= 22 && i <= 26 && d >= 9 && d <= 16) this.setData({
                "diagStr[0]": 1
            }), this.setData({
                "tipStr.step1": "各项指标均在正常范围"
            }), this.setData({
                "tipStr2.step1": [ "各项指标均在正常范围" ]
            }), this.data.step1.push("各项指标均在正常范围"); else if (t < 7.35 && i < 22) this.setData({
                "diagStr[0]": 4
            }), this.setData({
                "tipStr.step1": "PH<7.35,提示酸中毒"
            }), this.data.step1.push("PH<7.35,提示酸中毒"), this.setData({
                "tipStr.step2": "HCO3-降低与PH变化一致，提示代谢性酸中毒"
            }), this.data.step2.push("HCO3-降低与PH变化一致，提示代谢性酸中毒"), this.metAcid(i, a), this.aniongap(e, h, i, p); else if (t > 7.45 && i > 26) this.setData({
                "diagStr[0]": 5
            }), this.setData({
                "tipStr.step1": "PH>7.45,提示碱中毒"
            }), this.data.step1.push("PH>7.45,提示碱中毒"), this.setData({
                "tipStr.step2": "HCO3-升高与PH变化一致，提示代谢性碱中毒"
            }), this.data.step2.push("HCO3-升高与PH变化一致，提示代谢性碱中毒"), this.metAlk(i, a), this.aniongap(e, h, i, p); else if (t < 7.35 && a > 45) this.setData({
                "diagStr[0]": 2
            }), this.setData({
                "tipStr.step1": "PH<7.35,提示酸中毒"
            }), this.setData({
                "tipStr.step2": "PCO2升高与PH变化一致，提示呼吸性酸中毒"
            }), this.data.step1.push("PH<7.35,提示酸中毒"), this.data.step2.push("PCO2升高与PH变化一致，提示呼吸性酸中毒"), 
            this.respAcid(i, a, r), this.aniongap(e, h, i, p); else if (t > 7.45 && a < 35) this.setData({
                "diagStr[0]": 3
            }), this.setData({
                "tipStr.step1": "PH>7.45,提示碱中毒"
            }), this.setData({
                "tipStr.step2": "PCO2降低与PH变化一致，提示呼吸性碱中毒"
            }), this.data.step1.push("PH>7.45,提示碱中毒"), this.data.step2.push("PCO2降低与PH变化一致，提示呼吸性碱中毒"), 
            this.respAlk(i, a, r), this.aniongap(e, h, i, p); else if (t >= 7.35 && t <= 7.45 && a < 35 && i < 22) this.setData({
                "diagStr[0]": 3
            }), this.setData({
                "diagStr[1]": 4
            }), this.data.step1.push("PH在正常范围"), this.data.step2.push("PCO2与HCO3同时减低，提示合并呼吸性碱中毒和代谢性酸中毒，需要根据临床信息判断哪个是原发。"), 
            this.data.step3.push("PCO2与HCO3同向变化无需计算代偿，必然同时存在两种代谢紊乱"), this.aniongap(e, h, i, p); else {
                if (!(t >= 7.35 && t <= 7.45 && a > 45 && i > 26)) return void this.setData({
                    screenstr: "该血气超出了我的计算能力范围，请确认输入正确！"
                });
                this.setData({
                    "diagStr[0]": 2
                }), this.setData({
                    "diagStr[1]": 5
                }), this.data.step1.push("PH在正常范围"), this.data.step2.push("PCO2与HCO3同时升高，提示合并呼吸性酸中毒和代谢性碱中毒，需要根据临床信息判断哪个是原发。"), 
                this.data.step3.push("PCO2与HCO3同向变化无需计算代偿，必然同时存在两种代谢紊乱"), this.aniongap(e, h, i, p);
            }
            var o = "";
            if (4 == this.data.diagStr[2] && 4 == this.data.diagStr[0]) o = "代谢性酸中毒(高AG) " + this.data.diagStrArr[this.data.diagStr[1]] + " " + this.data.diagStrArr[this.data.diagStr[3]]; else if (4 == this.data.diagStr[2] && 4 == this.data.diagStr[1]) o = this.data.diagStrArr[this.data.diagStr[0]] + " 代谢性酸中毒(高AG) " + this.data.diagStrArr[this.data.diagStr[3]]; else for (var u = 0; u < 4; u++) o = o + this.data.diagStrArr[this.data.diagStr[u]] + " ";
            var l = "";
            for (var g in this.data.tipStr) l = l + g + ":\r\n" + this.data.tipStr[g] + "\r\n";
            this.setData({
                screenstr: o
            }), this.setData({
                finalTip: l
            }), console.log(o), console.log(l), this.setData({
                "tipStr2.step1": this.data.step1
            }), this.setData({
                "tipStr2.step2": this.data.step2
            }), this.setData({
                "tipStr2.step3": this.data.step3
            }), this.setData({
                "tipStr2.step4": this.data.step4
            }), this.setData({
                "tipStr2.step5": this.data.step5
            }), console.log(this.data.tipStr2);
        }
    },
    metAcid: function(t, a) {
        var s = "PaCO2  = ( 1.5 x [ HCO3- ] ) +8 ± 2，代偿极限10mmHg", i = 1.5 * t + 8;
        this.data.step3.push("代谢性酸中毒，计算PCO2代偿范围"), this.data.step3.push("代偿公式：" + s), this.data.step3.push("计算代偿范围：" + (i - 2) + "~" + (i + 2));
        var e = "代谢性酸中毒，计算PCO2代偿范围\r\n" + s + "\r\n计算代偿范围：" + (i - 2) + "~" + (i + 2) + "\r\n";
        a < i - 2 || a < 10 ? (this.setData({
            "diagStr[1]": 3
        }), e = e + "PCO2:" + a + "mmHg小于代偿范围提示合并呼吸性碱中毒", this.setData({
            "tipStr.step3": e
        }), this.data.step3.push("PCO2:" + a + "mmHg小于代偿范围提示合并呼吸性碱中毒")) : a > i + 2 ? (this.setData({
            "diagStr[1]": 2
        }), e = e + "PCO2:" + a + "mmHg大于代偿范围提示合并呼吸性酸中毒", this.setData({
            "tipStr.step3": e
        }), this.data.step3.push("PCO2:" + a + "mmHg大于代偿范围提示合并呼吸性酸中毒")) : (e = e + "PCO2:" + a + "mmHg在代偿范围内", 
        this.setData({
            "tipStr.step3": e
        }), this.data.step3.push("PCO2:" + a + "mmHg在代偿范围内"));
    },
    metAlk: function(t, a) {
        var s = .75 * (t - 24) + 40;
        this.data.step3.push("代谢性碱中毒，计算PCO2代偿范围"), this.data.step3.push("代偿公式：∆PaCO2  = 0.75 x ( ∆ HCO3- )，代偿极限55mmHg"), 
        this.data.step3.push("PCO2预计代偿值≈" + s);
        var i = "代谢性碱中毒，计算PCO2代偿范围\r\n∆PaCO2  = 0.75 x ( ∆ HCO3- )，代偿极限55mmHg\r\n";
        a < s ? (this.setData({
            "diagStr[1]": 3
        }), i = i + "PCO2:" + a + "mmHg小于预计代偿值提示合并呼吸性碱中毒", this.data.step3.push("PCO2:" + a + "mmHg小于预计代偿值提示合并呼吸性碱中毒"), 
        this.setData({
            "tipStr.step3": i
        })) : a > s + 5 || a > 55 ? (this.setData({
            "diagStr[1]": 2
        }), i = i + "PCO2:" + a + "mmHg大于预计代偿值提示合并呼吸性酸中毒", this.data.step3.push("PCO2:" + a + "mmHg大于预计代偿值提示合并呼吸性酸中毒"), 
        this.setData({
            "tipStr.step3": i
        })) : (i = i + "PCO2:" + a + "mmHg不超过预计代偿范围", this.data.step3.push("PCO2:" + a + "mmHg不超过预计代偿范围"), 
        this.setData({
            "tipStr.step3": i
        }));
    },
    respAcid: function(t, a, s) {
        var i, e = "呼吸性酸中毒，计算HCO3-代偿范围\r\n";
        if (this.data.step3.push("呼吸性酸中毒，计算HCO3 - 代偿范围"), 1 == s) e = e + "你选择的是急性呼吸系统疾病，代偿公式为:\r\n" + (h = "[ HCO3- ] 升高 = ∆ PaCO2 /10") + "\r\n", 
        this.data.step3.push("你选择的是急性呼吸系统疾病，代偿公式为:"), this.data.step3.push(h), i = 1; else {
            var h = "[ HCO3- ] 升高 = 3.5 x ( ∆ PaCO2 / 10 )";
            e = e + "你选择的是慢性呼吸系统疾病，代偿公式为:\r\n" + h + "\r\n", this.data.step3.push("你选择的是慢性呼吸系统疾病，代偿公式为:"), 
            this.data.step3.push(h), i = 3.5;
        }
        var p = 24 + i * (a - 40) / 10;
        e = e + "计算预计HCO3-代偿值≈" + p + "±2\r\n", this.data.step3.push("计算预计HCO3-代偿值≈" + p + "±2"), 
        t < p - 2 ? (this.setData({
            "diagStr[1]": 4
        }), e = e + "HCO3-:" + t + "mmol/L小于预计代偿值提示合并代谢性酸中毒", this.data.step3.push("HCO3-:" + t + "mmol/L小于预计代偿值提示合并代谢性酸中毒"), 
        this.setData({
            "tipStr.step3": e
        })) : t > p + 2 ? (this.setData({
            "diagStr[1]": 5
        }), e = e + "HCO3-:" + t + "mmol/L大于预计代偿值提示合并代谢性碱中毒", this.data.step3.push("HCO3-:" + t + "mmol/L大于预计代偿值提示合并代谢性碱中毒"), 
        this.setData({
            "tipStr.step3": e
        })) : (e = e + "HCO3-:" + t + "mmol/L在代偿范围内", this.data.step3.push("HCO3-:" + t + "mmol/L在代偿范围内"), 
        this.setData({
            "tipStr.step3": e
        }));
    },
    respAlk: function(t, a, s) {
        var i, e = "呼吸性碱中毒，计算HCO3-代偿范围\r\n";
        if (this.data.step3.push("呼吸性碱中毒，计算HCO3 - 代偿范围"), 1 == s) i = 2, e = e + "你选择的是急性呼吸系统疾病，代偿公式为:\r\n" + (h = "[ HCO3- ] 下降 = 2 x ( ∆ PaCO2 / 10 )") + "\r\n", 
        this.data.step3.push("你选择的是急性呼吸系统疾病，代偿公式为:"), this.data.step3.push(h); else {
            if (2 != s) return;
            i = 5;
            var h = "[ HCO3- ] 下降 = 5 x ( ∆ PaCO2 / 10 )";
            e = e + "你选择的是慢性呼吸系统疾病，代偿公式为:\r\n" + h + "\r\n", this.data.step3.push("你选择的是慢性呼吸系统疾病，代偿公式为:"), 
            this.data.step3.push(h);
        }
        var p = 24 + i * (a - 40) / 10;
        e = e + "计算预计HCO3-代偿值≈" + p + "±2\r\n", this.data.step3.push("计算预计HCO3-代偿值≈" + p + "±2"), 
        t < p - 2 ? (this.setData({
            "diagStr[1]": 4
        }), e = e + "HCO3-:" + t + "mmol/L小于预计代偿值提示合并代谢性酸中毒", this.data.step3.push("HCO3-:" + t + "mmol/L小于预计代偿值提示合并代谢性酸中毒"), 
        this.setData({
            "tipStr.step3": e
        })) : t > p + 2 ? (this.setData({
            "diagStr[1]": 5
        }), e = e + "HCO3-:" + t + "mmol/L大于预计代偿值提示合并代谢性碱中毒", this.data.step3.push("HCO3-:" + t + "mmol/L大于预计代偿值提示合并代谢性碱中毒"), 
        this.setData({
            "tipStr.step3": e
        })) : (e = e + "HCO3-:" + t + "mmol/L在代偿范围", this.data.step3.push("HCO3-:" + t + "mmol/L在代偿范围"), 
        this.setData({
            "tipStr.step3": e
        }));
    },
    aniongap: function(t, a, s, i) {
        var e;
        if (e = i >= 35 && i <= 45 ? t - a - s : t - a - s + .25 * (35 - i), h = "计算阴离子间隙（AG）：\r\nAG=Na-Cl-HCO3,同时受白蛋白(alb)水平影响：\r\nAG = AG + ((35 - alb) * 0.25)\r\n", 
        this.data.step4.push("AG=Na-Cl-HCO3,同时受白蛋白(alb)水平影响："), this.data.step4.push("AG = AG + ((35 - alb) * 0.25)"), 
        e > 16) this.setData({
            "diagStr[2]": 4
        }), h = h + "计算结果为：" + e + "超过正常值16，提示存在高AG代酸。", this.data.step4.push("计算结果为：" + e + "超过正常值16，提示存在高AG代酸。"), 
        this.setData({
            "tipStr.step4": h
        }), s + e - 12 > 26 ? (this.setData({
            "diagStr[3]": 5
        }), this.setData({
            "tipStr.step5": "计算矫正HCO3=HCO3+AG-12=" + (s + e - 12) + "超过正常上限,提示合并代谢性碱中毒"
        }), this.data.step5.push("计算矫正HCO3 = HCO3 + AG - 12=" + (s + e - 12)), this.data.step5.push("超过正常上限,提示合并代谢性碱中毒")) : s + e - 12 < 22 ? (this.setData({
            "diagStr[3]": 4
        }), this.setData({
            "tipStr.step5": "计算矫正HCO3=HCO3+AG-12=" + (s + e - 12) + "低过正常下限,提示合并代谢性酸中毒"
        }), this.data.step5.push("计算矫正HCO3 = HCO3 + AG - 12=" + (s + e - 12)), this.data.step5.push("低于正常下限,提示合并代谢性酸中毒")) : (this.setData({
            "tipStr.step5": "计算矫正HCO3=HCO3+AG-12=" + (s + e - 12) + "在正常范围"
        }), this.data.step5.push("计算矫正HCO3 = HCO3 + AG - 12=" + (s + e - 12)), this.data.step5.push("在正常范围")); else {
            var h = h + "计算结果为：" + e + ",不超过正常值16";
            this.data.step4.push("计算结果为：" + e + ",不超过正常值16"), this.setData({
                "tipStr.step4": h
            }), this.setData({
                "tipStr.step5": "不存在高AG代酸，无需矫正HCO3-"
            }), this.data.step5.push("不存在高AG代酸，无需矫正HCO3-");
        }
    },
    aniongap2: function(t, a, s, i) {
        return i >= 35 && i <= 45 ? t - a - s : t - a - s + .25 * (35 - i);
    },
    fixHco: function(t, a) {
        var s = t + a - 10;
        s > 26 ? this.setData({
            "diagStr[3]": 5
        }) : s > 26 && this.setData({
            "diagStr[3]": 4
        });
    },
    detailABG: function() {
        this.calcABG(), this.setData({
            showDetails: !this.data.showDetails
        }), this.setData({
            scrollTop: "scrollTop"
        });
    },
    togDetails: function() {
        this.setData({
            showDetails: !this.data.showDetails
        });
    },
    gotoabout: function() {
        wx.navigateTo({
            url: "../about/about"
        });
    },
    hideModal: function() {
        this.setData({
            ishideModal: !0
        });
    },
    showModal: function() {
        this.setData({
            ishideModal: !1
        });
    },
    onShareAppMessage: function() {
        return {
            title: "血气分析",
            path: "/pages/spirits/index"
        };
    },
    onShareTimeline: function() {
        return {
            title: "血气分析",
            path: "/pages/spirits/index"
        };
    }
});