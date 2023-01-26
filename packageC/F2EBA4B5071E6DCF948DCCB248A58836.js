module.exports = {
    calculatorList: [ {
        title: "工资薪金所得",
        calculatorType: 1,
        against: !0,
        newPolicy: !1,
        inputInfos: [ {
            textTitle: [ "应发工资(元)", "税后所得(元)" ],
            textType: "extraInput",
            inputName: "income",
            inputValue: "",
            placeholder: [ "请输入应发工资", "请输入税后所得" ],
            border: !0,
            tips: []
        }, {
            textTitle: "五险一金(元)",
            textType: "input",
            inputName: "five",
            inputValue: "",
            placeholder: "请输入五险一金",
            border: !0,
            tips: [ "*五险一金怎么算？" ]
        }, {
            textTitle: "选择起征点(元)",
            textType: "select",
            inputName: "range",
            inputValue: 2,
            placeholder: "",
            border: !1,
            optionsValue: [ {
                key: 0,
                value: "3500"
            }, {
                key: 1,
                value: "4800"
            }, {
                key: 2,
                value: "5000"
            } ]
        }, {
            textTitle: "专项扣除项(元)",
            textType: "input",
            inputName: "special",
            inputValue: "",
            placeholder: "请输入金额(如没有,可不填)",
            border: !1,
            tips: [ "*专项扣除包括子女教育、继续教育、大病医疗、住房贷款利息或者住房租金、赡养老人等支出" ]
        } ]
    }, {
        title: "年终奖",
        calculatorType: 2,
        against: !0,
        newPolicy: !0,
        inputInfos: [ {
            textTitle: [ "应发年终奖(元)", "税后所得(元)" ],
            textType: "extraInput",
            inputName: "income",
            inputValue: "",
            placeholder: [ "请输入应发年终奖", "请输入税后所得" ],
            border: !1
        } ]
    }, {
        title: "劳务报酬",
        calculatorType: 3,
        against: !0,
        newPolicy: !0,
        inputInfos: [ {
            textTitle: [ "劳务报酬(元)", "税后所得(元)" ],
            textType: "extraInput",
            inputName: "income",
            inputValue: "",
            placeholder: [ "请输入劳务报酬", "请输入税后所得" ],
            border: !1
        } ]
    }, {
        title: "偶然收入(如中奖、中彩)所得",
        calculatorType: 4,
        against: !0,
        newPolicy: !1,
        inputInfos: [ {
            textTitle: [ "偶然收入所得(元)", "税后所得(元)" ],
            textType: "extraInput",
            inputName: "income",
            inputValue: "",
            placeholder: [ "请输入偶然收入所得", "请输入税后所得" ],
            border: !1
        } ]
    }, {
        title: "利息、股息红利所得",
        calculatorType: 5,
        against: !0,
        newPolicy: !1,
        inputInfos: [ {
            textTitle: [ "利息、股息红利所得(元)", "税后所得(元)" ],
            textType: "extraInput",
            inputName: "income",
            inputValue: "",
            placeholder: [ "请输入利息、股息红利所得", "请输入税后所得" ],
            border: !1
        } ]
    }, {
        title: "稿酬所得",
        calculatorType: 6,
        against: !0,
        newPolicy: !0,
        inputInfos: [ {
            textTitle: [ "稿酬所得(元)", "税后所得(元)" ],
            textType: "extraInput",
            inputName: "income",
            inputValue: "",
            placeholder: [ "请输入稿酬所得", "请输入税后所得" ],
            border: !1
        } ]
    }, {
        title: "财产转让所得",
        calculatorType: 7,
        against: !0,
        newPolicy: !1,
        inputInfos: [ {
            textTitle: [ "转让收入金额(元)", "税后所得(元)" ],
            textType: "extraInput",
            inputName: "income",
            inputValue: "",
            placeholder: [ "请输入转让收入金额", "请输入税后所得" ],
            border: !0
        }, {
            textTitle: "财产原值(元)",
            textType: "input",
            inputName: "original",
            inputValue: "",
            placeholder: "请输入财产原值",
            border: !0
        }, {
            textTitle: "合理费用(元)",
            textType: "input",
            inputName: "cost",
            inputValue: "",
            placeholder: "请输入合理费用",
            border: !1,
            tips: [ {
                textType: "tips",
                textTitle: "*例如税费、装修费等"
            } ]
        }, {
            textType: "tips",
            textTitle: "*例如税费、装修费等",
            inputName: "tips1"
        } ]
    }, {
        title: "对企事业单位的承包经营所得",
        calculatorType: 8,
        against: !0,
        newPolicy: !0,
        inputInfos: [ {
            textTitle: [ "经营收入(元)", "税后所得(元)" ],
            textType: "extraInput",
            inputName: "income",
            inputValue: "",
            placeholder: [ "请输入经营收入", "请输入税后所得" ],
            border: !1
        }, {
            textTitle: "成本、费用及损失",
            textType: "input",
            inputName: "cost",
            inputValue: "",
            placeholder: "请输入成本、费用及损失",
            border: !1,
            show: !1
        }, {
            textType: "defalutParams",
            inputName: "mustMoney",
            inputValue: "3500"
        }, {
            textTitle: "经营时间",
            textType: "select",
            inputName: "time",
            inputValue: "0",
            placeholder: "",
            show: !1,
            optionsValue: [ {
                key: 0,
                value: "1个月"
            }, {
                key: 1,
                value: "2个月"
            }, {
                key: 2,
                value: "3个月"
            }, {
                key: 3,
                value: "4个月"
            }, {
                key: 4,
                value: "5个月"
            }, {
                key: 5,
                value: "6个月"
            }, {
                key: 6,
                value: "7个月"
            }, {
                key: 7,
                value: "8个月"
            }, {
                key: 8,
                value: "9个月"
            }, {
                key: 9,
                value: "10个月"
            }, {
                key: 10,
                value: "11个月"
            }, {
                key: 11,
                value: "12个月"
            } ],
            border: !1,
            tips: [ {
                textType: "tips",
                textTitle: "*按每一纳税年度计算纳税"
            } ]
        }, {
            textType: "tips",
            textTitle: "*按每一纳税年度计算纳税",
            inputName: "tips1"
        } ]
    }, {
        title: "解除合同离职补偿个税",
        calculatorType: 9,
        against: !1,
        newPolicy: !1,
        inputInfos: [ {
            textTitle: "一次性补偿收入(元)",
            textType: "input",
            inputName: "income",
            inputValue: "",
            placeholder: "请输入一次性补偿收入",
            border: !0
        }, {
            textTitle: "上年度全市职工平均工资(元)",
            textType: "input",
            inputName: "average",
            inputValue: "",
            placeholder: "请输入平均工资",
            border: !0
        }, {
            textTitle: "个人实际缴纳的保险金等(元)",
            textType: "input",
            inputName: "insurance",
            inputValue: "",
            placeholder: "请输入缴纳保险金等",
            border: !1,
            tips: [ {
                textType: "tips",
                textTitle: "*截止获取补偿已交金额"
            } ]
        }, {
            textType: "tips",
            textTitle: "*截止获取补偿已交金额",
            inputName: "tips1"
        }, {
            textTitle: "个人在本企业的工作年限(元)",
            textType: "input",
            inputName: "year",
            inputValue: "",
            placeholder: "请输入工作年限",
            border: !1,
            tips: [ {
                textType: "tips",
                textTitle: "*超过12年按12年计算"
            } ]
        }, {
            textType: "tips",
            textTitle: "*超过12年按12年计算",
            inputName: "tips2"
        } ]
    }, {
        title: "财产租赁所得",
        calculatorType: 10,
        against: !0,
        newPolicy: !1,
        inputInfos: [ {
            textTitle: [ "财产租赁所得(元)", "税后所得(元)" ],
            textType: "extraInput",
            inputName: "income",
            inputValue: "",
            placeholder: [ "请输入财产租赁所得", "请输入税税后所得" ],
            border: !1
        } ]
    }, {
        title: "个体工商户经营所得",
        calculatorType: 11,
        against: !0,
        newPolicy: !0,
        inputInfos: [ {
            textTitle: [ "经营所得(元)", "税后所得(元)" ],
            textType: "extraInput",
            inputName: "income",
            inputValue: "",
            placeholder: [ "请输入经营所得", "请输入税后所得" ],
            border: !1
        }, {
            textTitle: "成本、费用及损失",
            textType: "input",
            inputName: "cost",
            inputValue: "",
            placeholder: "请输入成本、费用及损失",
            border: !1
        }, {
            textType: "defalutParams",
            inputName: "loss",
            inputValue: "0"
        } ]
    }, {
        title: "特许权使用费所得",
        calculatorType: 12,
        against: !0,
        newPolicy: !0,
        inputInfos: [ {
            textTitle: [ "特许权使用费所得(元)", "税后所得(元)" ],
            textType: "extraInput",
            inputName: "income",
            inputValue: "",
            placeholder: [ "请输入特许权使用费所得", "请输入税后所得" ],
            border: !1
        } ]
    }, {
        title: "工资薪金节税计算",
        calculatorType: 13,
        against: !1,
        inputInfos: [ {
            textTitle: "工资(元)",
            textType: "input",
            inputName: "income",
            inputValue: "",
            placeholder: "请输入工资",
            border: !0
        }, {
            textTitle: "年终奖(元)",
            textType: "input",
            inputName: "yearAward",
            inputValue: "",
            placeholder: "请输入年终奖",
            border: !0
        }, {
            textTitle: "五险一金(元)",
            textType: "5insurances",
            inputName: "monthInsure",
            inputValue: "",
            placeholder: "请输入五险一金",
            border: !0
        }, {
            textTitle: "选择起征点(元)",
            textType: "select",
            inputName: "baseLine",
            inputValue: 3500,
            placeholder: "",
            border: !1,
            optionsValue: [ {
                key: 3500,
                value: 3500
            }, {
                key: 4800,
                value: 4800
            } ],
            tips: [ {
                textType: "tips",
                textTitle: "中国员工3500，外籍员工4800"
            } ]
        }, {
            textTitle: "税前减免项(元)",
            textType: "input",
            inputName: "taxExemption",
            inputValue: "",
            placeholder: "请输入税前减免项",
            border: !0
        }, {
            textType: "relief",
            textTitle: "点此查看",
            textContent: "税前减免项目"
        } ]
    }, {
        title: "年终奖节税计算",
        calculatorType: 14,
        against: !1,
        inputInfos: [ {
            textTitle: "年终奖(元)",
            textType: "input",
            inputName: "yearAward",
            inputValue: "",
            placeholder: "请输入年终奖",
            border: !1
        }, {
            textTitle: "年终奖发放当月工资(元)",
            textType: "input",
            inputName: "income",
            inputValue: "",
            placeholder: "请输入当月工资",
            border: !1
        }, {
            textTitle: "五险一金(元)",
            textType: "5insurances",
            inputName: "monthInsure",
            inputValue: "",
            placeholder: "请输入五险一金",
            border: !0
        }, {
            textTitle: "选择起征点(元)",
            textType: "select",
            inputName: "baseLine",
            inputValue: 3500,
            placeholder: "",
            border: !1,
            optionsValue: [ {
                key: 3500,
                value: 3500
            }, {
                key: 4800,
                value: 4800
            } ],
            tips: [ {
                textType: "tips",
                textTitle: "中国员工3500，外籍员工4800"
            } ]
        }, {
            textTitle: "税前减免项(元)",
            textType: "input",
            inputName: "taxExemption",
            inputValue: "",
            placeholder: "请输入税前减免项",
            border: !0
        }, {
            textType: "relief",
            textTitle: "点此查看",
            textContent: "税前减免项目"
        } ]
    }, {
        title: "年度个税计算",
        calculatorType: 15,
        against: !1,
        inputInfos: [ {
            textTitle: "月均工资收入(元)",
            textType: "input",
            inputName: "income",
            inputValue: "",
            placeholder: "请输入应发工资",
            border: !0
        }, {
            textTitle: "五险一金(元)",
            textType: "5insurances",
            inputName: "monthInsure",
            inputValue: "",
            placeholder: "请输入五险一金",
            border: !0
        }, {
            textTitle: "专项附加扣除(元)",
            textType: "disabledInput",
            inputName: "special",
            inputValue: "0",
            placeholder: "请计算扣除金额",
            border: !1,
            tips: [ {
                textType: "tips",
                textTitle: "专项附加扣除包括子女教育、继续教育、大病医疗、住房贷款利息或者住房租金、赡养老人等支出"
            } ],
            url: "/geshui/sixDeducted",
            urlName: "帮我计算"
        } ],
        validDate: ""
    }, {
        title: "工资个税计算",
        calculatorType: 16,
        against: !1,
        inputInfos: [ {
            textTitle: "当前月份",
            titleRightText: "",
            textType: "select",
            inputName: "month",
            inputValue: 1,
            placeholder: "",
            border: !1,
            tips: [ {
                textType: "tips",
                textTitle: "若一年中途换工作，那么在新企业的每月工资个税计算会以在职月数进行计算，这里请选择在职月数"
            } ],
            optionsValue: [ {
                key: 1,
                value: "1月"
            }, {
                key: 2,
                value: "2月"
            }, {
                key: 3,
                value: "3月"
            }, {
                key: 4,
                value: "4月"
            }, {
                key: 5,
                value: "5月"
            }, {
                key: 6,
                value: "6月"
            }, {
                key: 7,
                value: "7月"
            }, {
                key: 8,
                value: "8月"
            }, {
                key: 9,
                value: "9月"
            }, {
                key: 10,
                value: "10月"
            }, {
                key: 11,
                value: "11月"
            }, {
                key: 12,
                value: "12月"
            } ]
        }, {
            textTitle: "本月工资收入(元)",
            textType: "input",
            inputName: "income",
            inputValue: "",
            placeholder: "请输入应发工资",
            border: !0
        }, {
            textTitle: "五险一金(元)",
            textType: "5insurances",
            inputName: "monthInsure",
            inputValue: "",
            placeholder: "请输入五险一金",
            border: !0
        }, {
            textTitle: "专项附加扣除(元)",
            textType: "disabledInput",
            inputName: "special",
            inputValue: " 0",
            placeholder: "请计算扣除金额",
            border: !1,
            url: "/geshui/sixDeducted",
            urlName: "帮我计算"
        } ],
        validDate: ""
    } ],
    calculateResultList: [ {
        title: "工资薪金所得",
        calculatorType: 1,
        resultList: [ {
            key: "five",
            name: "五险一金",
            unit: "¥",
            unitFront: !0
        }, {
            key: "range",
            name: "起征点",
            unit: "¥",
            unitFront: !0
        }, {
            key: "preTax",
            name: "应纳税所得额",
            unit: "¥",
            unitFront: !0
        }, {
            key: "taxRate",
            name: "税率",
            unit: "%",
            unitFront: !1
        }, {
            key: "deduction",
            name: "速算扣除数",
            unit: "",
            unitFront: !1
        }, {
            key: "money",
            name: "税后工资",
            unit: "¥",
            unitFront: !0
        } ],
        formula: {
            oldFormula: [ "（税前-五险一金-起征点）" ],
            newFormula: [ "（税前-五险一金-起征点 - 专项扣除）" ]
        },
        formulaTitle: "工资个人所得税计算公式",
        formulaList: {
            oldList: [ {
                title: "应纳税所得额",
                content: " = 税前工资收入金额 - 五险一金(个人缴纳部分) - 起征点"
            }, {
                title: "应纳税额",
                content: "= 应纳税所得额 x 税率 - 速算扣除数"
            } ],
            newList: [ {
                title: "应纳税所得额",
                content: " = 税前工资收入金额 - 五险一金(个人缴纳部分) - 起征点 - 专项扣除"
            }, {
                title: "应纳税额",
                content: "= 应纳税所得额 x 税率 - 速算扣除数"
            } ]
        },
        tableTitle: "个人所得税率表",
        tableList: {
            newTable: [ "https://img.51baoshui.com/miniApp/calculator/gxNewTable1.png", "https://img.51baoshui.com/miniApp/calculator/gxNewTable2.png" ],
            oldTable: [ "https://img.51baoshui.com/miniApp/calculator/gxTable2.png", "https://img.51baoshui.com/miniApp/calculator/gxTable1.png" ]
        }
    }, {
        title: "年终奖",
        calculatorType: 2,
        resultList: [ {
            key: "taxRate",
            name: "税率",
            unit: "%",
            unitFront: !1
        }, {
            key: "deduction",
            name: "速算扣除数",
            unit: "",
            unitFront: !1
        }, {
            key: "money",
            name: "税后年终奖",
            unit: "¥",
            unitFront: !0
        } ],
        formula: {
            oldFormula: [ "税前" ],
            newFormula: [ "税前" ]
        },
        formulaListTitle: "年终奖个人所得税计算公式",
        formulaTitle: "年终奖个人所得税计算公式",
        formulaList: {
            oldList: [ {
                title: "应纳税额",
                content: " = 税前年终奖金额×适用税率-速算扣除数 （年终奖／12获得税率和速算数）"
            } ],
            newList: [ {
                title: "应纳税额",
                content: " = 税前年终奖金额×适用税率-速算扣除数 （年终奖／12获得税率和速算数）"
            } ]
        },
        tableTitle: "年终奖个人所得税率表",
        tableList: {
            newTable: [ "https://img.51baoshui.com/miniApp/calculator/gxNewTable1.png", "https://img.51baoshui.com/miniApp/calculator/gxNewTable2.png" ],
            oldTable: [ "https://img.51baoshui.com/miniApp/calculator/gxTable2.png", "https://img.51baoshui.com/miniApp/calculator/gxTable1.png" ]
        },
        tableTips: "年终奖所得，将年终奖金额除以12个月，以每月平均收入金额来确定税率和速算扣除数"
    }, {
        title: "劳务报酬",
        calculatorType: 3,
        resultList: [ {
            key: "taxRate",
            name: "税率",
            unit: "%",
            unitFront: !1
        }, {
            key: "deduction",
            name: "速算扣除数",
            unit: "",
            unitFront: !1
        }, {
            key: "money",
            name: "收入",
            unit: "¥",
            unitFront: !0
        } ],
        formula: {
            oldFormula: [ "税前 ×（1 - 20%）", "税前 ×（1 - 20%）" ],
            newFormula: [ "{税前（不超过4000元）- 800元}", "税前（超过4000元）×（1 - 20%）" ]
        },
        formulaTitle: "劳务报酬计算公式",
        formulaList: {
            oldList: [ {
                title: "应纳税所得额",
                content: " = 税前每次劳务收入金额*（1-20%）"
            }, {
                title: "应纳税额",
                content: " = 应纳税所得额 x 税率 － 速算扣除数"
            } ],
            newList: [ {
                title: "应纳税所得额",
                content: " = 劳务报酬所得（不超过4000元） - 800元"
            }, {
                title: "应纳税所得额",
                content: " = 劳务报酬所得（超过4000元）×（1 - 20%）"
            }, {
                title: "应纳税额",
                content: " = 应纳税所得额×适用税率-速算扣除数"
            } ]
        },
        tableTitle: "劳务报酬税率表",
        tableList: {
            newTable: [ "https://img.51baoshui.com/miniApp/calculator/laowuTable2.png", "https://img.51baoshui.com/miniApp/calculator/laowuTable1.png" ],
            oldTable: [ "https://img.51baoshui.com/miniApp/calculator/gxNewTable1.png", "https://img.51baoshui.com/miniApp/calculator/gxNewTable2.png" ]
        },
        tableTips: "含税级适用于纳税人负担税款的劳务报酬所得;"
    }, {
        title: "偶然收入(如中奖、中彩)所得",
        calculatorType: 4,
        resultList: [ {
            key: "taxRate",
            name: "税率",
            unit: "%",
            unitFront: !1
        }, {
            key: "money",
            name: "税后收入",
            unit: "¥",
            unitFront: !0
        } ],
        resultTips: "备注：对于个人购买彩票、赈灾彩票、体育彩票，一次性中介收入小于等于10000,暂免征个人所得税",
        formula: {
            oldFormula: [ "税前", "税前" ],
            newFormula: [ "税前", "税前" ]
        },
        formulaTitle: "偶然收入所得税率计算公式",
        formulaList: {
            oldList: [ {
                title: "应纳税额",
                content: " = 税前收入 x 20%"
            } ],
            newList: [ {
                title: "应纳税额",
                content: " = 税前收入 x 20%"
            } ]
        },
        tableTitle: "",
        tableList: {
            newTable: [],
            oldTable: []
        }
    }, {
        title: "利息、股息红利所得",
        calculatorType: 5,
        resultList: [ {
            key: "taxRate",
            name: "税率",
            unit: "%",
            unitFront: !1
        }, {
            key: "money",
            name: "税后收入",
            unit: "¥",
            unitFront: !0
        } ],
        formula: {
            oldFormula: [ "税前", "税前" ],
            newFormula: [ "税前", "税前" ]
        },
        formulaTitle: "利息、股息红利所得税率计算公式",
        formulaList: {
            oldList: [ {
                title: "应纳税额",
                content: " = 税前收入 x 20%"
            } ],
            newList: [ {
                title: "应纳税额",
                content: " = 税前收入 x 20%"
            } ]
        },
        tableTitle: "",
        tableList: {
            newTable: [],
            oldTable: []
        }
    }, {
        title: "稿酬所得",
        calculatorType: 6,
        resultList: [ {
            key: "taxRate",
            name: "税率",
            unit: "%",
            unitFront: !1
        }, {
            key: "money",
            name: "税后收入",
            unit: "¥",
            unitFront: !0
        } ],
        formula: {
            oldFormula: [ "税前 ×（1 - 20%）× （1-30%）", "税前 ×（1 - 20%）× （1-30%）" ],
            newFormula: [ "税前（不超过4000元）- 800元", "税前（超过4000元）×（1 - 20%）" ]
        },
        formulaTitle: "稿酬所得税率计算公式",
        formulaList: {
            oldList: [ {
                title: "应纳税所得额",
                content: " = 税前每次稿酬收入金额×（1 - 20%）× （1-30%）"
            }, {
                title: "应纳税额",
                content: " = 应纳税所得额 x 税率 － 速算扣除数"
            } ],
            newList: [ {
                title: "应纳税所得额",
                content: " = 稿酬所得（不超过4000元） - 800元"
            }, {
                title: "应纳税所得额",
                content: " = 稿酬所得（超过4000元）×（1 - 20%）"
            }, {
                title: "应纳税额",
                content: " = 税前收入 x 14%"
            } ]
        },
        tableTitle: "稿酬对应的税率表",
        tableList: {
            newTable: [],
            oldTable: [ "https://img.51baoshui.com/miniApp/calculator/gxNewTable1.png", "https://img.51baoshui.com/miniApp/calculator/gxNewTable2.png" ]
        }
    }, {
        title: "财产转让所得",
        calculatorType: 7,
        resultList: [ {
            key: "original",
            name: "财产原值",
            unit: "¥",
            unitFront: !0
        }, {
            key: "cost",
            name: "合理费用",
            unit: "¥",
            unitFront: !0
        }, {
            key: "preTax",
            name: "应纳税所得额",
            unit: "¥",
            unitFront: !0
        }, {
            key: "taxRate",
            name: "税率",
            unit: "%",
            unitFront: !1
        }, {
            key: "money",
            name: "税后收入金额",
            unit: "¥",
            unitFront: !0
        } ],
        formula: {
            oldFormula: [ "（税前 - 财产原值 - 合理费用）", "（税前 - 财产原值 - 合理费用）" ],
            newFormula: [ "（税前 - 财产原值 - 合理费用）", "（税前 - 财产原值 - 合理费用）" ]
        },
        formulaTitle: "财产转让所得税计算公式",
        formulaList: {
            oldList: [ {
                title: "应纳税所得额",
                content: " = 财产转让收入金额 - 财产原值 - 合理费用"
            }, {
                title: "应纳税额",
                content: " =  应纳税所得额 × 税率（20%）"
            } ],
            newList: [ {
                title: "应纳税所得额",
                content: " = 财产转让收入金额 - 财产原值 - 合理费用"
            }, {
                title: "应纳税额",
                content: " =  应纳税所得额 × 税率（20%）"
            } ]
        },
        tableTitle: "",
        tableList: []
    }, {
        title: "对企事业单位的承包经营所得",
        calculatorType: 8,
        resultList: [ {
            key: "mustMoney",
            name: "减除必要费用",
            unit: "¥",
            unitFront: !0
        }, {
            key: "preTax",
            name: "应纳税所得额",
            unit: "¥",
            unitFront: !0
        }, {
            key: "taxRate",
            name: "税率",
            unit: "%",
            unitFront: !1
        }, {
            key: "money",
            name: "税后收入金额",
            unit: "¥",
            unitFront: !0
        } ],
        formula: {
            oldFormula: [ "（税前 - 必要费用 × 经营时间）" ],
            newFormula: [ "（税前 - 成本、费用及损失）" ]
        },
        formulaTitle: "对企事业单位的承包经营所得税计算公式",
        formulaList: {
            oldList: [ {
                title: "应纳税所得额",
                content: " = 经营收入金额 －（减除必要费用 × 经营时间）"
            }, {
                title: "应纳税额",
                content: " = 应纳税所得额 × 适用税率 － 速算扣除数"
            }, {
                title: "说明",
                content: " 上述公式中的“减除必要费用”，当前个税税法规定为3500元，经营时间以月份为计算单位。"
            } ],
            newList: [ {
                title: "应纳税所得额",
                content: " = 年度收入总额 - 成本、费用及损失"
            }, {
                title: "应纳税额",
                content: " = 应纳税所得额 × 适用税率 - 速算扣除数"
            } ]
        },
        tableTitle: "对企事业单位的承包经营所得对应税率表",
        tableList: {
            newTable: [ "https://img.51baoshui.com/miniApp/calculator/gshTable1.png", "https://img.51baoshui.com/miniApp/calculator/gshTable2.png" ],
            oldTable: [ "https://img.51baoshui.com/miniApp/calculator/getiTable1.png", "https://img.51baoshui.com/miniApp/calculator/getiTable2.png" ]
        }
    }, {
        title: "解除合同离职补偿个税",
        calculatorType: 9,
        resultList: [ {
            key: "average",
            name: "上年度全市职工平均工资",
            unit: "¥",
            unitFront: !0
        }, {
            key: "insurance",
            name: "个人实际缴纳的保险金等",
            unit: "¥",
            unitFront: !0
        }, {
            key: "year",
            name: "个人在本企业的工作年限",
            unit: "",
            unitFront: !0
        }, {
            key: "taxRate",
            name: "税率",
            unit: "%",
            unitFront: !1
        }, {
            key: "money",
            name: "税后收入金额",
            unit: "¥",
            unitFront: !0
        } ],
        formula: {
            oldFormula: [ "(税前 - 3 × 平均工资 - 个人缴纳保险金) ÷ 工作年限 - 5000" ],
            newFormula: [ "(税前 - 3 × 平均工资 - 个人缴纳保险金) ÷ 工作年限 - 5000" ]
        },
        formulaTitle: "解除合同离职补偿个税计算公式",
        formulaList: {
            oldList: [ {
                title: "应纳个税",
                content: "= [{(一次性补偿收入-3×当地上年度职工平均工资-个人缴纳保险金)÷实际工作年限数-5000]×适用税率-速算扣除数}×实际工作年限'}}"
            } ],
            newList: [ {
                title: "应纳个税",
                content: "= {[(一次性补偿收入-3×当地上年度职工平均工资-个人缴纳保险金)÷实际工作年限数-5000]×适用税率-速算扣除数}×实际工作年限'}}"
            } ]
        },
        tableTitle: "解除合同离职补偿个税对应的税率表",
        tableList: {
            newTable: [ "https://img.51baoshui.com/miniApp/calculator/gxNewTable1.png", "https://img.51baoshui.com/miniApp/calculator/gxNewTable2.png" ],
            oldTable: [ "https://img.51baoshui.com/miniApp/calculator/gxTable2.png", "https://img.51baoshui.com/miniApp/calculator/gxTable2.png" ]
        }
    }, {
        title: "财产租赁所得",
        calculatorType: 10,
        resultList: [ {
            key: "preTax",
            name: "应纳税所得额",
            unit: "¥",
            unitFront: !0
        }, {
            key: "taxRate",
            name: "税率",
            unit: "%",
            unitFront: !1
        }, {
            key: "money",
            name: "税后收入",
            unit: "¥",
            unitFront: !0
        } ],
        formula: {
            oldFormula: [ "财产租赁(不超过4000元) - 800元", "财产租赁(超过4000元）×（1 - 20%）" ],
            newFormula: [ "财产租赁(不超过4000元) - 800元", "财产租赁(超过4000元）×（1 - 20%）" ]
        },
        formulaTitle: "财产租赁个税计算公式",
        formulaList: {
            oldList: [ {
                title: "应纳税所得额",
                content: " = 财产租赁(不超过4000元) - 800元"
            }, {
                title: "应纳税所得额",
                content: " =  财产租赁(超过4000元）×（1 - 20%）"
            }, {
                title: "应纳税额",
                content: " =  应纳税所得额 × 20%"
            } ],
            newList: [ {
                title: "应纳税所得额",
                content: " = 财产租赁(不超过4000元) - 800元"
            }, {
                title: "应纳税所得额",
                content: " =  财产租赁(超过4000元）×（1 - 20%）"
            }, {
                title: "应纳税额",
                content: " =  应纳税所得额 × 20%"
            } ]
        },
        tableTitle: "",
        tableList: {
            newTable: [],
            oldTable: []
        }
    }, {
        title: "个体工商户经营所得",
        calculatorType: 11,
        resultList: [ {
            key: "loss",
            name: "成本、费用及损失",
            unit: "¥",
            unitFront: !0
        }, {
            key: "preTax",
            name: "应纳税所得额",
            unit: "¥",
            unitFront: !0
        }, {
            key: "taxRate",
            name: "税率",
            unit: "%",
            unitFront: !1
        }, {
            key: "money",
            name: "税后收入",
            unit: "¥",
            unitFront: !0
        } ],
        formula: {
            oldFormula: [ "（税前- 成本、费用及损失）" ],
            newFormula: [ "（税前 - 成本、费用及损失）" ]
        },
        formulaTitle: "个体工商户经营所得个税计算公式",
        formulaList: {
            oldList: [ {
                title: "应纳税所得额",
                content: " = 年度收入总额 - 成本、费用及损失"
            }, {
                title: "应纳税额",
                content: " = 应纳税所得额 × 适用税率 - 速算扣除数"
            } ],
            newList: [ {
                title: "应纳税所得额",
                content: " = 年度收入总额 - 成本、费用及损失"
            }, {
                title: "应纳税额",
                content: " = 应纳税所得额 × 适用税率 - 速算扣除数"
            } ]
        },
        tableTitle: "个体工商所得税率表",
        tableList: {
            newTable: [ "https://img.51baoshui.com/miniApp/calculator/gshTable1.png", "https://img.51baoshui.com/miniApp/calculator/gshTable2.png" ],
            oldTable: [ "https://img.51baoshui.com/miniApp/calculator/getiTable1.png", "https://img.51baoshui.com/miniApp/calculator/getiTable2.png" ]
        }
    }, {
        title: "特许使用费所得",
        calculatorType: 12,
        resultList: [ {
            key: "preTax",
            name: "应纳税所得额",
            unit: "¥",
            unitFront: !0
        }, {
            key: "taxRate",
            name: "税率",
            unit: "%",
            unitFront: !1
        }, {
            key: "money",
            name: "税后收入",
            unit: "¥",
            unitFront: !0
        } ],
        formula: {
            oldFormula: [ "税前 ×（1 - 20%）", "税前 ×（1 - 20%）" ],
            newFormula: [ "{税前(不超过4000元) - 800元}", "税前(超过4000元）×（1 - 20%）" ]
        },
        formulaTitle: "特许使用费个税计算公式",
        formulaList: {
            oldList: [ {
                title: "应纳税所得额",
                content: " = 税前每次特许使用费收入金额*（1-20%）"
            }, {
                title: "应纳税额",
                content: " = 应纳税所得额 x 税率 － 速算扣除数"
            } ],
            newList: [ {
                title: "应纳税所得额",
                content: " = 特许使用费(不超过4000元) - 800元"
            }, {
                title: "应纳税所得额",
                content: " = 特许使用费(超过4000元）×（1 - 20%）"
            }, {
                title: "应纳税额",
                content: " = 应纳税所得额 × 20%"
            } ]
        },
        tableTitle: "特许使用费所得税率表",
        tableList: {
            newTable: [],
            oldTable: [ "https://img.51baoshui.com/miniApp/calculator/gxNewTable1.png", "https://img.51baoshui.com/miniApp/calculator/gxNewTable2.png" ]
        }
    }, {
        title: "工资薪金节税",
        calculatorType: 13
    }, {
        title: "年终奖节税",
        calculatorType: 14
    }, {
        title: "年度工资薪金",
        calculatorType: 15,
        resultList: [ {
            key: "preTax",
            name: "应纳税所得额",
            unit: "¥",
            unitFront: !0
        }, {
            key: "taxRate",
            name: "税率",
            unit: "%",
            unitFront: !1
        }, {
            key: "money",
            name: "税后收入",
            unit: "¥",
            unitFront: !0
        } ],
        formulaListTitle: "年度工资个税计算公式",
        formulaList: {
            oldList: [ {
                title: "应纳税所得额",
                content: " = 年度税前工资收入 -  年度五险一金（个人缴纳部分） - 年度专项附加扣除 -  年度减除费用"
            }, {
                title: "应纳税额",
                content: " = 应纳税所得额  * 税率 -速算扣除数"
            } ]
        },
        tableTitle: "年度个人所得税率表",
        formulaTitle: "年度个税",
        formula: {
            oldFormula: [ [ "（累计税前 - 累计五险一金 - 累计专项附加扣除 - 累计减除费用）" ], " x 税率", " - 速算扣除数" ]
        },
        tableList: {
            newTable: [],
            oldTable: [ "https://img.51baoshui.com/geshui/sixTable.png" ]
        },
        tableImg: [ "https://img.51baoshui.com/geshui/sixTable.png" ]
    }, {
        title: "月度工资薪金",
        calculatorType: 16,
        resultList: [ {
            key: "preTax",
            name: "应纳税所得额",
            unit: "¥",
            unitFront: !0
        }, {
            key: "taxRate",
            name: "税率",
            unit: "%",
            unitFront: !1
        }, {
            key: "money",
            name: "税后收入",
            unit: "¥",
            unitFront: !0
        } ],
        formulaListTitle: "工资个税预扣预缴计算公式",
        formulaList: {
            oldList: [ {
                title: "应纳税所得额",
                content: " = 累计税前工资收入 -  累计五险一金（个人缴纳部分） - 累计专项附加扣除 - 累计减除费用"
            }, {
                title: "应纳税额",
                content: " = 应纳税所得额  * 预扣税率 - 速算扣除数"
            }, {
                title: "当月应纳税额",
                content: " = 应纳税额 - 累计已缴纳税额"
            } ]
        },
        tableTitle: "年度个人所得税率表",
        formulaTitle: "当月个税",
        formula: {
            oldFormula: [ [ "(累计收入 - 累计五险一金 - 累计专项附加扣除 - 累计减除费用)" ], " x 预扣税率", " - 速算扣除数", " - 累计已缴纳税额" ]
        },
        tableList: {
            newTable: [],
            oldTable: [ "https://img.51baoshui.com/geshui/sixTable.png" ]
        },
        tableImg: [ "https://img.51baoshui.com/geshui/sixTable.png" ]
    } ],
    more: [ {
        itemList: [ {
            icon: "https://img-tax.geshui.com/tax/banner/3157ed29b9fb476aa1599bcd4bf74ab7.png",
            title: "稿酬所得",
            type: 6
        }, {
            icon: "https://img-tax.geshui.com/tax/banner/8e9b482babd046799f4cc3cdacd46877.png",
            title: "特许权使用费所得",
            type: 12
        } ],
        classId: 1,
        classTitle: "综合所得"
    }, {
        itemList: [ {
            icon: "https://img-tax.geshui.com/tax/banner/4ce9bfc4c619468698f205751a9736b2.png",
            title: "经营所得",
            type: 8
        } ],
        classId: 0,
        classTitle: "经营所得"
    }, {
        itemList: [ {
            icon: "https://img-tax.geshui.com/tax/banner/1b7bbcac7a8d4e438053bb31bc1d4fc4.png",
            title: "利息、股息红利所得",
            type: 5
        }, {
            icon: "https://img-tax.geshui.com/tax/banner/e11d6a19938b41cd9f9332c84be389be.png",
            title: "偶然收入(如中奖、中彩)所得",
            type: 4
        }, {
            icon: "https://img-tax.geshui.com/tax/banner/b18baa27e4a64d52ae1277dbe942aeb0.png",
            title: "财产租赁所得",
            type: 10
        }, {
            icon: "https://img-tax.geshui.com/tax/banner/3c1f1552885c4e53af98fdf994ca56f4.png",
            title: "财产转让所得",
            type: 7
        }, {
            icon: "https://img-tax.geshui.com/tax/banner/78f94237f2644a89ae22a5919dffffa6.png",
            title: "解除合同离职补偿所得",
            type: 9
        } ],
        classId: -1,
        classTitle: "其他所得"
    } ]
};