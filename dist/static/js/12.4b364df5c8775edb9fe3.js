webpackJsonp([12],{"D/dO":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("bOdI"),l=a.n(s),o=(a("mtWM"),a("UYCa")),i=a("bvXH"),n=a("eArI"),r={name:"Applyleave",mixins:[o.a],components:{BluckUpload:i.default,Attendence:n.default},data:function(){var e;return e={tabs:null,AttendenceDetails:[],nowDate:(new Date).toISOString().slice(0,10),leavetype:["Sick","Casual"],Accepted:"APPROVED",Rejected:"REJECTED",selectedbyStatus:"",selected:"",dialogDelete:!1,headers:[{text:"LEAVE TYPE",value:"leaveName"},{text:"NAME",value:"empName"},{text:"SUPERVISOR NAME",value:"supervisorName"},{text:"START DATE",value:"startDate"},{text:"END DATE",value:"endDate"},{text:"REASON ",value:"shortForm"},{text:"STATUS",value:"status"},{text:"ACTIONS",value:"action",sortable:!1,align:"center"}],headers1:[{text:"LEAVE NAME",value:"leaveName"},{text:"SUPERVISOR NAME",value:"supervisorName"},{text:"START DATE",value:"startDate"},{text:"END DATE",value:"endDate"},{text:"REASON ",value:"shortForm"},{text:"STATUS",value:"status"}],date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),employeelist:[],LeaveType:[],result:[],leavelist:[],leavelistStatus:[],valid:!1,showText:!1},l()(e,"selected",""),l()(e,"userid",""),l()(e,"leaveIdresult",""),l()(e,"leaveIdresult1",""),l()(e,"snackbar",!1),l()(e,"text",""),l()(e,"attendenceid",""),l()(e,"user",{leaveName:"",startDate:"",endDate:"",shortForm:""}),l()(e,"jwt",""),l()(e,"cancelloading",!1),l()(e,"successmessage",""),l()(e,"errormessage",""),l()(e,"loading",null),l()(e,"items",["Apply Leave","Leave Request","Approved"]),l()(e,"items1",["Approved","Rejected"]),l()(e,"LeavebyStatus",["Approved","Rejected","Pending"]),e},mounted:function(){this.getList(),this.getLeaveMaster(),this.jwt=localStorage.getItem("jwt"),console.log("jwt",this.jwt)},methods:{SaveLeave:function(){console.log("json",this.user,this.valid),this.$refs.form.validate(),console.log("json",this.user,this.valid),this.$refs.form.validate(),this.$refs.form.validate()&&(this.PostApply(),this.edituser)},ApprovedLeave:function(e){var t=this;this.loading=!0,e.createloading=!0;var a=e.leaveRequestId,s=e.leaveName;this.userid=e.employeeId,"Sick"==e.leaveName?this.leaveid=this.leaveIdresult1:"Casual"==e.leaveName&&(this.leaveid=this.leaveIdresult),console.log("leaveRequestId",this.leaveid,"Sick"==s),console.log("Accepted",this.Accepted),this.LeaveApprove(a,this.Accepted,this.userid,this.leaveid).then(function(e){console.log("In post",e),200==e.status?(t.text=e.data.message,t.snackbar=!0,location.reload()):(t.text=e.data.message,t.snackbar=!0)})},RejectedLeave:function(e){var t=this;this.loading=!0,e.createloading=!0;var a=e.leaveRequestId;this.userid=e.employeeId;e.leaveName;this.userid=e.employeeId,"Sick"==e.leaveName?this.leaveid=this.leaveIdresult1:"Casual"==e.leaveName&&(this.leaveid=this.leaveIdresult),console.log("leaveRequestId",e.leaveRequestId),console.log("Rejected",this.Rejected),this.LeaveRejected(a,this.Rejected,this.userid,this.leaveid).then(function(e){console.log("In post",e),200==e.status?(t.text=e.data.message,t.snackbar=!0,location.reload()):(t.text=e.data.message,t.snackbar=!0)})},PostApply:function(){var e=this;console.log("startDate",this.user.startDate),console.log("endDate",this.user.endDate);var t=this.user;"Sick"==this.user.leaveName?this.leaveid=this.leaveIdresult1:"Casual"==this.user.leaveName&&(this.leaveid=this.leaveIdresult),console.log("check",this.leaveid,t),this.ApplyReq(this.selected,this.leaveid,t).then(function(t){console.log("In post",t),t.status,e.text=t.data.message,e.snackbar=!0})},getList:function(){var e=this;this.getlistOfEmployees().then(function(t){console.log("Get All employee satya",t.data.Employee[0].employeeId);for(var a=0;a<t.data.Employee.length;a++)e.employeelist.push({text:t.data.Employee[a].employeeId+"-"+t.data.Employee[a].firstName,value:t.data.Employee[a].employeeId});console.log("Get All employee list",e.employeelist)})},getLeaveAll:function(){var e=this;console.log("Get All Company"),this.getLeaveDetails().then(function(t){console.log("Get All Companysatya","Approved"==t.Leave[0].status);for(var a=0;a<t.Leave.length;a++)"Approved"==t.Leave[a].status&&(e.result.push(t.Leave[a]),console.log("Get All Company11",e.result))})},getLeaveByid:function(){var e=this;this.getleave(this.selected).then(function(t){console.log("Get All employee list",t.data.Leave);for(var a=0;a<t.data.Leave.length;a++)"PENDING"==t.data.Leave[a].status&&(e.leavelist.push(t.data.Leave[a]),console.log("Get All Company11",e.leavelist));console.log("Get leave",e.leavelist)})},getLeaveBystatus:function(){var e=this;console.log("Based on Status:",this.selectedbyStatus,this.selected),this.LeavesByStatus(this.selectedbyStatus,this.selected).then(function(t){console.log("Get All employee list",t.data.LeaveRequest),e.leavelistStatus=t.data.LeaveRequest,console.log("Get leave",e.leavelist)})},getLeaveMaster:function(){var e=this;console.log("Get All LeaveMaster"),this.getleaveMasterDetails().then(function(t){for(var a=0;a<t.data.LeaveMaster.length;a++)"Casual"==t.data.LeaveMaster[a].leaveType&&(e.leaveIdresult=t.data.LeaveMaster[a].leaveId,console.log("Get All satya1111",e.leaveIdresult)),"Sick"==t.data.LeaveMaster[a].leaveType&&(e.leaveIdresult1=t.data.LeaveMaster[a].leaveId,console.log("Get All satya1111",e.leaveIdresult1))})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"adminapplyleave"}},[a("v-card",{staticStyle:{border:"3px","margin-left":"100px","margin-right":"0px"}},[a("v-toolbar",{staticStyle:{height:"-20px"},attrs:{color:"cyan",dark:"",flat:""},scopedSlots:e._u([{key:"extension",fn:function(){return[a("v-tabs",{attrs:{left:""},model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},e._l(e.items,function(t){return a("v-tab",{key:t},[e._v("\n            "+e._s(t)+"\n          ")])}),1)]},proxy:!0}])}),e._v(" "),a("v-tabs-items",{model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},[a("v-tab-item",{staticStyle:{padding:"10px"}},[a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.SaveLeave.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",{staticClass:"pl-0 pr-0",staticStyle:{"margin-left":"0px"}},[a("v-col",{attrs:{cols:"12",md:"3"}},[a("v-autocomplete",{attrs:{items:this.employeelist,label:"Select Employee",dense:"",outlined:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"3"}},[a("v-select",{attrs:{items:e.leavetype,label:"Leave Type",dense:"",outlined:""},model:{value:e.user.leaveName,callback:function(t){e.$set(e.user,"leaveName",t)},expression:"user.leaveName"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"3"}},[a("v-text-field",{attrs:{type:"date",label:"Start Date",outlined:"",dense:""},model:{value:e.user.startDate,callback:function(t){e.$set(e.user,"startDate",t)},expression:"user.startDate"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"3"}},[a("v-text-field",{attrs:{type:"date",label:"End Date",dense:"",outlined:""},model:{value:e.user.endDate,callback:function(t){e.$set(e.user,"endDate",t)},expression:"user.endDate"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-textarea",{attrs:{name:"input-7-1",label:"Reason",rows:"2",dense:"",outlined:""},model:{value:e.user.shortForm,callback:function(t){e.$set(e.user,"shortForm",t)},expression:"user.shortForm"}})],1)],1),e._v(" "),a("v-row",{staticStyle:{"margin-bottom":"10px"}},[a("v-col",{staticStyle:{"text-align":"right"},attrs:{cols:"12"}},[a("v-btn",{staticStyle:{"background-color":"red",color:"white"},attrs:{type:"submit"}},[e._v("Save")])],1)],1)],1)],1)],1),e._v(" "),a("v-tab-item",[a("v-row",{staticStyle:{"margin-top":"20px","margin-left":"10px"}},[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-autocomplete",{attrs:{items:this.employeelist,label:"Select Employee",dense:"",outlined:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),a("v-col",{staticStyle:{"text-align":"left"}},[a("v-btn",{staticStyle:{"background-color":"red",color:"white"},on:{click:function(t){return e.getLeaveByid(e.selected)}}},[e._v("Retrieve")])],1)],1),e._v(" "),a("v-data-table",{directives:[{name:"show",rawName:"v-show",value:""!=this.leavelist,expression:"this.leavelist != ''"}],staticClass:"elevation-1",attrs:{headers:e.headers,items:this.leavelist,"items-per-page":5},scopedSlots:e._u([{key:"item.action",fn:function(t){var s=t.item;return[a("v-btn",{attrs:{color:"success"},on:{click:function(t){return e.ApprovedLeave(s)}}},[e._v("Approve")]),e._v(" "),a("v-btn",{attrs:{color:"red",loading:s.cancelloading,disabled:e.cancelloading},on:{click:function(t){return e.RejectedLeave(s)}}},[e._v("Reject")])]}}])})],1),e._v(" "),a("v-tab-item",[a("v-row",{staticStyle:{"margin-top":"20px","margin-left":"10px"}},[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-autocomplete",{attrs:{items:this.employeelist,label:"Select Employee",dense:"",outlined:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-autocomplete",{attrs:{items:this.LeavebyStatus,label:"Select Type",dense:"",outlined:""},model:{value:e.selectedbyStatus,callback:function(t){e.selectedbyStatus=t},expression:"selectedbyStatus"}})],1),e._v(" "),a("v-col",{staticStyle:{"text-align":"left"}},[a("v-btn",{staticStyle:{"background-color":"red",color:"white"},on:{click:function(t){return e.getLeaveBystatus(e.selectedbyStatus,e.selected)}}},[e._v("Retrieve")])],1)],1),e._v(" "),a("v-data-table",{directives:[{name:"show",rawName:"v-show",value:""!=this.leavelistStatus,expression:"this.leavelistStatus != ''"}],staticClass:"elevation-1",attrs:{headers:e.headers1,items:this.leavelistStatus,"items-per-page":5}})],1)],1)],1),e._v(" "),a("v-snackbar",{attrs:{color:"green"},scopedSlots:e._u([{key:"action",fn:function(t){var s=t.attrs;return[a("v-btn",e._b({attrs:{text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",s,!1),[e._v(" Close ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.text)+"\n\n    ")])],1)},staticRenderFns:[]};var v=a("VU/8")(r,c,!1,function(e){a("u1Jp"),a("eUXV")},"data-v-f0107cf8",null);t.default=v.exports},eUXV:function(e,t){},u1Jp:function(e,t){}});
//# sourceMappingURL=12.4b364df5c8775edb9fe3.js.map