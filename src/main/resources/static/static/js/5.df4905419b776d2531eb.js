webpackJsonp([5],{WIvm:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o("1HuH"),a=o("P9l9"),n=o("U+Q4"),s={name:"setFront",props:["show","showClose"],data:function(){return{loading:!1,dialogVisible:this.show,closeVisible:this.showClose||!1,frontFrom:{ip:"",port:"",company:"",description:""},rules:{ip:[{required:!0,message:"请输入ip名称",trigger:"blur"},{pattern:/((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))/,message:"ip不符合规则",trigger:"blur"}],port:[{required:!0,message:"请输入端口名称",trigger:"blur"},{min:1,max:12,message:"长度在 1 到 12 个数字",trigger:"blur"},{pattern:/^[0-9]*[1-9][0-9]*$/,message:"端口不符合规则",trigger:"blur"}],company:[{required:!0,message:"请输入机构名称",trigger:"blur"},{min:1,max:16,message:"长度在 1 到 16 位",trigger:"blur"},{pattern:/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_]){1,20}$/,message:"机构名称请输入中文、英文和数字",trigger:"blur"}]}}},methods:{submit:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.loading=!0,e.setFront()})},setFront:function(){var t=this,e={chainId:localStorage.getItem("chainId"),frontIp:this.frontFrom.ip,frontPort:this.frontFrom.port,agency:this.frontFrom.company,description:this.frontFrom.description};Object(a.b)(e).then(function(e){t.loading=!1,0===e.data.code?(t.$message({message:"添加前置成功",type:"success"}),t.$emit("close")):t.$message({message:n.a.errCode[e.data.code].zh,type:"error"})}).catch(function(e){t.loading=!1,t.$message({message:"系统错误",type:"error"})})},modelClose:function(){this.$emit("close")}}},i={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-dialog",{staticClass:"dialog-wrapper",attrs:{title:"新增节点前置",visible:t.dialogVisible,"before-close":t.modelClose,width:"433px",center:!0,"show-close":!0},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("div",[o("el-form",{ref:"frontFrom",staticClass:"demo-ruleForm",attrs:{model:t.frontFrom,rules:t.rules,"label-width":"100px"}},[o("el-form-item",{staticStyle:{width:"330px"},attrs:{label:"ip",prop:"ip"}},[o("el-input",{model:{value:t.frontFrom.ip,callback:function(e){t.$set(t.frontFrom,"ip",e)},expression:"frontFrom.ip"}})],1),t._v(" "),o("el-form-item",{staticStyle:{width:"330px"},attrs:{label:"前置端口",prop:"port"}},[o("el-input",{model:{value:t.frontFrom.port,callback:function(e){t.$set(t.frontFrom,"port",e)},expression:"frontFrom.port"}})],1),t._v(" "),o("el-form-item",{staticStyle:{width:"330px"},attrs:{label:"所属机构",prop:"company"}},[o("el-input",{model:{value:t.frontFrom.company,callback:function(e){t.$set(t.frontFrom,"company",e)},expression:"frontFrom.company"}})],1),t._v(" "),o("el-form-item",{staticStyle:{width:"330px"},attrs:{label:"备注"}},[o("el-input",{model:{value:t.frontFrom.description,callback:function(e){t.$set(t.frontFrom,"description",e)},expression:"frontFrom.description"}})],1)],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t.closeVisible?o("el-button",{on:{click:t.modelClose}},[t._v("取 消")]):t._e(),t._v(" "),o("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){return t.submit("frontFrom")}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]},l=o("VU/8")(s,i,!1,null,null,null).exports,c=o("YaEn"),d={name:"front",components:{"v-content-head":r.a,"set-front":l},data:function(){return{frontData:[],loading:!1,setFrontShow:!1,groupList:[],groupId:""}},mounted:function(){localStorage.getItem("chainId")&&(this.getFrontList(),this.getGroupList())},methods:{changGroup:function(){this.getFrontList(),this.getGroupList()},search:function(){this.getFrontList()},createFront:function(){this.setFrontShow=!0},setFrontClose:function(){this.setFrontShow=!1,localStorage.getItem("chainId")&&this.getFrontList()},getFrontList:function(){var t=this,e={chainId:localStorage.getItem("chainId"),groupId:this.groupId};Object(a.h)(e).then(function(e){0===e.data.code?t.frontData=e.data.data:t.$message({type:"error",message:n.a.errCode[e.data.code].zh})}).catch(function(e){t.$message({type:"error",message:"系统错误"})})},routeDetail:function(t){c.a.push({path:"/hostDetail",query:{frontId:t.frontId,nodeIp:t.frontIp,groupId:this.groupId}})},getGroupList:function(){var t=this;Object(a.i)(localStorage.getItem("chainId")).then(function(e){0===e.data.code?(t.groupList=e.data.data,e.data.data.length&&(t.groupId=e.data.data[0].groupId)):t.$message({type:"error",message:n.a.errCode[e.data.code].zh})}).catch(function(e){t.$message({type:"error",message:"系统错误"})})},handleClick:function(t){var e=this;this.$confirm("此操作将在数据库删除该前置,删除后可以再次添加 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.deleteData(t)}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},deleteData:function(t){var e=this;Object(a.e)(t.frontId).then(function(t){0===t.data.code?(e.$message({type:"success",message:"删除成功"}),e.getFrontList()):e.$message({type:"error",message:n.a.errCode[t.data.code].zh})}).catch(function(t){e.$message({type:"error",message:"系统错误"})})},copyNodeIdKey:function(t){var e=this;t?this.$copyText(t).then(function(t){e.$message({type:"success",showClose:!0,message:"复制成功",duration:2e3})}):this.$message({type:"fail",showClose:!0,message:"复制失败",duration:2e3})}}},u={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-content-head",{attrs:{headTitle:"前置管理"},on:{changGroup:t.changGroup}}),t._v(" "),o("div",{staticClass:"module-wrapper"},[o("h3",{staticStyle:{padding:"20px 0 0 40px"}},[t._v("前置列表")]),t._v(" "),o("div",{staticClass:"search-part",staticStyle:{"padding-top":"20px"}},[o("div",{staticClass:"search-part-left"},[o("el-button",{staticClass:"search-part-left-btn",attrs:{type:"primary"},on:{click:t.createFront}},[t._v("新增节点前置")])],1),t._v(" "),o("div",{staticClass:"search-part-right"},[t._v("\n                群组切换：\n                "),o("el-select",{attrs:{placeholder:"请选择"},on:{change:t.search},model:{value:t.groupId,callback:function(e){t.groupId=e},expression:"groupId"}},t._l(t.groupList,function(t){return o("el-option",{key:t.groupId,attrs:{label:t.groupName,value:t.groupId}})}),1)],1)]),t._v(" "),o("div",{staticClass:"search-table"},[o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"search-table-content",attrs:{data:t.frontData}},[o("el-table-column",{attrs:{prop:"frontId",label:"前置编号",width:"180"}}),t._v(" "),o("el-table-column",{attrs:{prop:"nodeId",label:"节点编号","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[o("i",{staticClass:"el-icon-document-copy",attrs:{title:"复制"},on:{click:function(o){return t.copyNodeIdKey(e.row.nodeId)}}}),t._v(" "),o("span",[t._v(t._s(e.row.nodeId))])]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"frontIp",label:"前置IP",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){return t.routeDetail(e.row)}}},[t._v(t._s(e.row.frontIp))])]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"frontPort",label:"前置端口"}}),t._v(" "),o("el-table-column",{attrs:{prop:"agency",label:"所属机构"}}),t._v(" "),o("el-table-column",{attrs:{prop:"description",label:"备注",width:"180"}}),t._v(" "),o("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"180"}}),t._v(" "),o("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){return t.handleClick(e.row)}}},[t._v("删除")])]}}])})],1)],1)]),t._v(" "),t.setFrontShow?o("set-front",{attrs:{show:t.setFrontShow},on:{close:t.setFrontClose}}):t._e()],1)},staticRenderFns:[]};var p=o("VU/8")(d,u,!1,function(t){o("p4by")},"data-v-3e24b81c",null);e.default=p.exports},p4by:function(t,e){}});