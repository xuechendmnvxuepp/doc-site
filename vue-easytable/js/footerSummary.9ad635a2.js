webpackJsonp([9],{"49nL":function(module,exports,s){exports=module.exports=s("FZ+f")(!1),exports.push([module.i,"\n.footer-cell-class-name-title {\n    background-color: #f60;\n    color: #fff;\n}\n.footer-cell-class-name-normal {\n\n    color: red;\n}\n\n",""])},"5Tvs":function(module,exports,s){module.exports=s("mEk2")},GGeL:function(module,exports,s){module.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("demo-box",{attrs:{jsfiddle:{html:'<template>\n    <div>\n        <v-table is-horizontal-resize style="width:100%" :height="260" :columns="columns" :table-data="tableData" :footer-cell-class-name="setFooterCellClass" :footer="footer" :footer-row-height="40"></v-table>\n    </div>\n</template>\n\n\n\n\n',script:'\n\n    export default{\n        data() {\n            return {\n                tableData: [\n                    {"name": "赵伟", "amount1": "2", "amount2": "3", "amount3": "上海市黄浦区金陵东路569号17楼"},\n                    {"name": "李伟", "amount1": "5", "amount2": "4", "amount3": "上海市奉贤区南桥镇立新路12号2楼"},\n                    {"name": "孙伟", "amount1": "3", "amount2": "9", "amount3": "上海市崇明县城桥镇八一路739号"},\n                    {"name": "周伟", "amount1": "6", "amount2": "10", "amount3": "上海市青浦区青浦镇章浜路24号"},\n                    {"name": "吴伟", "amount1": "1", "amount2": "12", "amount3": "上海市松江区乐都西路867-871号"}\n                ],\n                columns: [\n                    {field: \'name\',title: \'姓名\',width: 100,titleAlign: \'center\',columnAlign: \'center\',isFrozen: true},\n                    {field: \'amount1\',title: \'数值1\',width: 200,titleAlign: \'center\',columnAlign: \'center\',isResize: true},\n                    {field: \'amount2\',title: \'数值2\',width: 230,titleAlign: \'center\',columnAlign: \'center\',isResize: true},\n                    {field: \'amount3\',title: \'数值3\',width: 208,titleAlign: \'center\',columnAlign: \'left\',isResize: true}\n                ],\n                footer: []\n                /* 下面的数据结构\n                 footer: [\n                    [\'最小值\',1,3,\'-\'],\n                    [\'求和\',17,38,\'-\']\n                 ]\n                */\n            }\n        },\n\n        methods: {\n\n            setFooterData(){\n\n                let result = [],\n                    amounts1 = this.tableData.map(item => {\n                        return item.amount1\n                    }),\n                    amounts2 = this.tableData.map(item => {\n                        return item.amount2\n                    });\n\n                let minVal = [\'最小值\'];\n                minVal.push(Math.min.apply(null, amounts1)+\' ￥\');\n                minVal.push(Math.min.apply(null, amounts2)+\' ￥\');\n                minVal.push(\'-\');\n\n\n                let sumVal = [\'求和\'];\n                sumVal.push(\n                    amounts1.reduce((prev, curr) => {\n\n                        return parseInt(prev) + parseInt(curr);\n                    }, 0)+\' ￥\'\n                )\n\n                sumVal.push(\n                    amounts2.reduce((prev, curr) => {\n\n                        return parseInt(prev) + parseInt(curr);\n                    }, 0)+\' ￥\'\n                )\n\n                sumVal.push(\'-\');\n\n\n                result.push(minVal);\n                result.push(sumVal);\n\n                this.footer = result;\n            },\n\n            // 设置 footer-cell-class\n            setFooterCellClass(rowIndex, colIndex, value){\n\n                if (colIndex === 0) {\n\n                    return \'footer-cell-class-name-title\'\n                } else {\n\n                    return \'footer-cell-class-name-normal\'\n                }\n            }\n\n        },\n\n        created(){\n\n            this.setFooterData();\n        }\n    }\n',style:"\n    .footer-cell-class-name-title {\n        background-color: #f60;\n        color: #fff;\n    }\n\n    .footer-cell-class-name-normal {\n\n        color: red;\n    }\n\n"},showDemo:!0}},[a("div",{attrs:{slot:"effectHtml"},slot:"effectHtml"},[[a("div",[a("v-table",{staticStyle:{width:"100%"},attrs:{"is-horizontal-resize":"",height:260,columns:s.columns,"table-data":s.tableData,"footer-cell-class-name":s.setFooterCellClass,footer:s.footer,"footer-row-height":40}})],1)]],2),s._v(" "),a("div",{attrs:{slot:"codeDescription"},slot:"codeDescription"},[a("p",[s._v("通过设置 "),a("code",[s._v("footer")]),s._v(" 数组对象给 table 添加汇总信息，footer "),a("strong",[s._v("汇总信息可以设置多行")]),s._v("，每一个子数组代表一行汇总信息")]),s._v(" "),a("p",[s._v("通过 "),a("code",[s._v("footer-cell-class-name")]),s._v(" 属性设置footer 各个单元格的样式")]),s._v(" "),a("p",[s._v("通过 "),a("code",[s._v("footer-row-height")]),s._v("属性设置每个footer行高（默认40px）")]),s._v(" "),a("p",[a("strong",[s._v("注意")]),s._v("：由于汇总信息格式不定，有"),a("strong",[s._v("求和、平均值、最大值、最小值、乘积")]),s._v("等等，以及保留位数不定等问题。所以"),a("strong",[s._v("汇总信息由调用者提供")]),s._v("！")])]),s._v(" "),a("div",{attrs:{slot:"codeHighlight"},slot:"codeHighlight"},[a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-table")]),s._v("\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("is-horizontal-resize")]),s._v("\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"width:100%"')]),s._v("\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"260"')]),s._v("\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":columns")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"columns"')]),s._v("\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":table-data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"tableData"')]),s._v("\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":footer-cell-class-name")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"setFooterCellClass"')]),s._v("\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":footer")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"footer"')]),s._v("\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":footer-row-height")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"40"')]),s._v("\n        >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-table")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),a("span",{attrs:{class:"css"}},[s._v("\n    "),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".footer-cell-class-name-title")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("background-color")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("#f60")]),s._v(";\n        "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("#fff")]),s._v(";\n    }\n\n    "),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".footer-cell-class-name-normal")]),s._v(" {\n\n        "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": red;\n    }\n\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n        data() {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("tableData")]),s._v(": [\n                    {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"赵伟"')]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v('"amount1"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"2"')]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v('"amount2"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v('"amount3"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市黄浦区金陵东路569号17楼"')]),s._v("},\n                    {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"李伟"')]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v('"amount1"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v('"amount2"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"4"')]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v('"amount3"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市奉贤区南桥镇立新路12号2楼"')]),s._v("},\n                    {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"孙伟"')]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v('"amount1"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v('"amount2"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"9"')]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v('"amount3"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市崇明县城桥镇八一路739号"')]),s._v("},\n                    {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"周伟"')]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v('"amount1"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v('"amount2"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v('"amount3"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市青浦区青浦镇章浜路24号"')]),s._v("},\n                    {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"吴伟"')]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v('"amount1"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v('"amount2"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v('"amount3"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市松江区乐都西路867-871号"')]),s._v("}\n                ],\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("columns")]),s._v(": [\n                    {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'姓名'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isFrozen")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("},\n                    {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'amount1'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'数值1'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isResize")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("},\n                    {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'amount2'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'数值2'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("230")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isResize")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("},\n                    {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'amount3'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'数值3'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("208")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isResize")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("}\n                ],\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("footer")]),s._v(": []\n                "),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* 下面的数据结构\n                 footer: [\n                    ['最小值',1,3,'-'],\n                    ['求和',17,38,'-']\n                 ]\n                */")]),s._v("\n            }\n        },\n\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n\n            setFooterData(){\n\n                "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" result = [],\n                    amounts1 = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".tableData.map("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("item")]),s._v(" =>")]),s._v(" {\n                        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" item.amount1\n                    }),\n                    amounts2 = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".tableData.map("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("item")]),s._v(" =>")]),s._v(" {\n                        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" item.amount2\n                    });\n\n                "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" minVal = ["),a("span",{attrs:{class:"hljs-string"}},[s._v("'最小值'")]),s._v("];\n                minVal.push("),a("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".min.apply("),a("span",{attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(", amounts1)+"),a("span",{attrs:{class:"hljs-string"}},[s._v("' ￥'")]),s._v(");\n                minVal.push("),a("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".min.apply("),a("span",{attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(", amounts2)+"),a("span",{attrs:{class:"hljs-string"}},[s._v("' ￥'")]),s._v(");\n                minVal.push("),a("span",{attrs:{class:"hljs-string"}},[s._v("'-'")]),s._v(");\n\n\n                "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" sumVal = ["),a("span",{attrs:{class:"hljs-string"}},[s._v("'求和'")]),s._v("];\n                sumVal.push(\n                    amounts1.reduce("),a("span",{attrs:{class:"hljs-function"}},[s._v("("),a("span",{attrs:{class:"hljs-params"}},[s._v("prev, curr")]),s._v(") =>")]),s._v(" {\n\n                        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("parseInt")]),s._v("(prev) + "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("parseInt")]),s._v("(curr);\n                    }, "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(")+"),a("span",{attrs:{class:"hljs-string"}},[s._v("' ￥'")]),s._v("\n                )\n\n                sumVal.push(\n                    amounts2.reduce("),a("span",{attrs:{class:"hljs-function"}},[s._v("("),a("span",{attrs:{class:"hljs-params"}},[s._v("prev, curr")]),s._v(") =>")]),s._v(" {\n\n                        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("parseInt")]),s._v("(prev) + "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("parseInt")]),s._v("(curr);\n                    }, "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(")+"),a("span",{attrs:{class:"hljs-string"}},[s._v("' ￥'")]),s._v("\n                )\n\n                sumVal.push("),a("span",{attrs:{class:"hljs-string"}},[s._v("'-'")]),s._v(");\n\n\n                result.push(minVal);\n                result.push(sumVal);\n\n                "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".footer = result;\n            },\n\n            "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 设置 footer-cell-class")]),s._v("\n            setFooterCellClass(rowIndex, colIndex, value){\n\n                "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (colIndex === "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(") {\n\n                    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'footer-cell-class-name-title'")]),s._v("\n                } "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n\n                    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'footer-cell-class-name-normal'")]),s._v("\n                }\n            }\n\n        },\n\n        created(){\n\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".setFooterData();\n        }\n    }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])])],1)},staticRenderFns:[]},module.exports.render._withStripped=!0},HniL:function(module,exports,s){function t(t){a||s("T6MV")}var a=!1,n=s("VU/8")(s("StSV"),s("GGeL"),t,null,null);n.options.__file="D:\\MySpace\\PracticePro\\vue-easytable\\examples\\doc\\table\\footer-summary\\footer-summary.md",n.esModule&&Object.keys(n.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] footer-summary.md: functional components are not supported with templates, they should use render functions."),module.exports=n.exports},KSpp:function(module,exports,s){module.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("demo-box",{attrs:{jsfiddle:{html:'<template>\n         <div class="mt30">\n            <h3>footer 汇总</h3>\n\n            <div class="mt30">\n               <anchor id="footer-summary" label="footer 汇总" h4></anchor>\n               <footer-summary></footer-summary>\n           </div>\n        </div>\n</template>\n\n',script:"\n\n    import footerSummary from './footer-summary.md'\n\n    export default{\n        name: \"footer-summary-main\",\n        components: {\n            footerSummary\n        }\n    }\n",style:null},showDemo:!1}},[a("div",{attrs:{slot:"effectHtml"},slot:"effectHtml"},[[a("div",{staticClass:"mt30"},[a("h3",[s._v("footer 汇总")]),s._v(" "),a("div",{staticClass:"mt30"},[a("anchor",{attrs:{id:"footer-summary",label:"footer 汇总",h4:""}}),s._v(" "),a("footer-summary")],1)])]],2),s._v(" "),a("div",{attrs:{slot:"codeDescription"},slot:"codeDescription"}),s._v(" "),a("div",{attrs:{slot:"codeHighlight"},slot:"codeHighlight"},[a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n         "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"mt30"')]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("h3")]),s._v(">")]),s._v("footer 汇总"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("h3")]),s._v(">")]),s._v("\n\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"mt30"')]),s._v(">")]),s._v("\n               "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("anchor")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"footer-summary"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"footer 汇总"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("h4")]),s._v(" >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("anchor")]),s._v(">")]),s._v("\n               "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("footer-summary")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("footer-summary")]),s._v(">")]),s._v("\n           "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" footerSummary "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'./footer-summary.md'")]),s._v("\n\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"footer-summary-main"')]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": {\n            footerSummary\n        }\n    }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])])],1)},staticRenderFns:[]},module.exports.render._withStripped=!0},StSV:function(module,exports,s){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={data:function(){return{tableData:[{name:"赵伟",amount1:"2",amount2:"3",amount3:"上海市黄浦区金陵东路569号17楼"},{name:"李伟",amount1:"5",amount2:"4",amount3:"上海市奉贤区南桥镇立新路12号2楼"},{name:"孙伟",amount1:"3",amount2:"9",amount3:"上海市崇明县城桥镇八一路739号"},{name:"周伟",amount1:"6",amount2:"10",amount3:"上海市青浦区青浦镇章浜路24号"},{name:"吴伟",amount1:"1",amount2:"12",amount3:"上海市松江区乐都西路867-871号"}],columns:[{field:"name",title:"姓名",width:100,titleAlign:"center",columnAlign:"center",isFrozen:!0},{field:"amount1",title:"数值1",width:200,titleAlign:"center",columnAlign:"center",isResize:!0},{field:"amount2",title:"数值2",width:230,titleAlign:"center",columnAlign:"center",isResize:!0},{field:"amount3",title:"数值3",width:208,titleAlign:"center",columnAlign:"left",isResize:!0}],footer:[]}},methods:{setFooterData:function(){var s=[],t=this.tableData.map(function(s){return s.amount1}),a=this.tableData.map(function(s){return s.amount2}),n=["最小值"];n.push(Math.min.apply(null,t)+" ￥"),n.push(Math.min.apply(null,a)+" ￥"),n.push("-");var l=["求和"];l.push(t.reduce(function(s,t){return parseInt(s)+parseInt(t)},0)+" ￥"),l.push(a.reduce(function(s,t){return parseInt(s)+parseInt(t)},0)+" ￥"),l.push("-"),s.push(n),s.push(l),this.footer=s},setFooterCellClass:function(s,t,a){return 0===t?"footer-cell-class-name-title":"footer-cell-class-name-normal"}},created:function(){this.setFooterData()}}},T6MV:function(module,exports,s){var t=s("49nL");"string"==typeof t&&(t=[[module.i,t,""]]),t.locals&&(module.exports=t.locals);s("rjj0")("acbeb5cc",t,!1,{})},"Wb7+":function(module,exports,s){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=s("mMSE"),a=function(s){return s&&s.__esModule?s:{default:s}}(t);exports.default={name:"footer-summary-main",components:{footerSummary:a.default}}},mEk2:function(module,exports,s){var t=s("VU/8")(s("Wb7+"),s("KSpp"),null,null,null);t.options.__file="D:\\MySpace\\PracticePro\\vue-easytable\\examples\\doc\\table\\footer-summary\\main.md",t.esModule&&Object.keys(t.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.options.functional&&console.error("[vue-loader] main.md: functional components are not supported with templates, they should use render functions."),module.exports=t.exports},mMSE:function(module,exports,s){module.exports=s("HniL")}});