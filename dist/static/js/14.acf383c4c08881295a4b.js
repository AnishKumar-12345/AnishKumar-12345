webpackJsonp([14,47],{"0j8R":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Vvh8"),r=a("is0V"),n=a("JWsr"),l=a("hSyc"),o=a("H4Ap"),s={name:"EmployeeProfile",components:{subtabs:i.default,subtab:r.default,PayrollView:n.default,PayRegisterView:l.default,PayOutView:o.default},data:function(){return{count:1,activeComponent:!1,activefiled:!0}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[e("subtabs",{staticStyle:{"margin-top":"10px","margin-left":"100px",color:"white"}},[e("subtab",{attrs:{name:"Pay Register",selected:"true"}},[e("div",[e("PayRegisterView")],1)]),this._v(" "),e("subtab",{attrs:{name:"Run Payload "}},[e("div",[e("PayrollView")],1)]),this._v(" "),e("subtab",{attrs:{name:"Payout"}},[e("div",[e("PayOutView")],1)])],1)],1)])},staticRenderFns:[]},c=a("VU/8")(s,u,!1,null,null,null);e.default=c.exports},"5Mpk":function(t,e){},KmBe:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("53qO"),r=a("WmY6"),n=a("ASxZ"),l=a("0j8R"),o={name:"PayRoll",components:{Tabs:i.default,Tab:r.default,RunPayroll:l.default,menubar:n.default},data:function(){return{count:1,activeComponent:!1,activefiled:!0}},methods:{logout:function(){localStorage.removeItem("jwt"),this.$router.replace({path:"/",clearHistory:!0})}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-app-bar",{staticStyle:{height:"65px",background:"linear-gradient(90deg, rgba(2,101,129,1) 0%, rgba(0,76,95,1) 0%, rgba(0,76,95,1) 48%, rgba(14,114,139,1) 99%)"},attrs:{app:"",dark:"",prominent:""}},[i("router-link",{staticStyle:{"text-decoration":"none",color:"inherit","margin-bottom":"55px"},attrs:{to:"/HelloWorld"}},[i("v-row",[i("v-icon",{staticStyle:{color:"white","margin-left":"20px","margin-top":"20px"},attrs:{large:""}},[t._v("mdi-home")])],1)],1),t._v(" "),i("v-toolbar-title",{staticClass:"white--text ",staticStyle:{"margin-bottom":"55px","margin-left":"50px"}},[i("img",{attrs:{src:a("ONM3"),alt:"dizitiveit.com",width:"350px"}})]),t._v(" "),i("v-spacer"),t._v(" "),i("v-avatar",{staticClass:"mr-2 mt-1 avt"},[i("img",{attrs:{alt:"user",src:a("Q9AB")}}),t._v(" "),i("v-file-input",{staticClass:"inputpic",attrs:{"hide-input":"","prepend-icon":"mdi-plus"}})],1),t._v(" "),i("v-icon",{staticStyle:{padding:"10px"},attrs:{large:"",color:"white"},on:{click:function(e){return t.logout()}}},[t._v("mdi-logout ")])],1),t._v(" "),i("menubar"),t._v(" "),i("div",[i("Tabs",[i("Tab",{attrs:{name:"RUN PAYROLL",selected:"true"}},[i("div",{attrs:{id:"adminattedanceview"}},[i("RunPayroll")],1)])],1)],1)],1)},staticRenderFns:[]};var u=a("VU/8")(o,s,!1,function(t){a("5Mpk")},"data-v-b1fd6920",null);e.default=u.exports}});
//# sourceMappingURL=14.acf383c4c08881295a4b.js.map