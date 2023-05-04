import Vue from "vue";
import axios from "axios";

export default {
  data() {
    return {
      url: "http://103.60.213.11:9001/"
    };
  },
  methods: {

    PayslipLineItem(empid,month,year,reqbody) {
      var jwt = localStorage.getItem("jwt");
      console.log('requestbody',empid,month,year,reqbody)
      return axios
        .post(this.url + "paySlipLineItem/savePaySlip/"+empid+"/"+month+"/"+year
        , reqbody, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    MonthsalarySave(empid,month,year,sal) {
      var jwt = localStorage.getItem("jwt");
      console.log('requestbody',empid,month,year)
      return axios
        .post(this.url + "monthlySalary/saveMonthly/"+empid+"/"+month+"/"+year+"/"+sal
        , ' ', {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    DownloadPayslip(month,year,empid) {
      console.log("check",month,year,empid)
      var jwt = localStorage.getItem("jwt");
      
      return axios
        .get(this.url + "payRollGeneration/getAttachment/"+month+"/"+year+'/'+empid, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          },responseType:'blob'
        })
        .then(response => {
          console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    SavePayslipFile(empid,month,year,) {
    
      var jwt = localStorage.getItem("jwt");
      console.log("check234",month,year,empid,jwt)
      
      return axios
        .post(this.url + "payRollGeneration/saveFile/"+empid+"/"+month+'/'+year, ' ', {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    AttendanceView(empid,month,year) {
      var jwt = localStorage.getItem("jwt");
      console.log('requestbody',empid,month,year)
      return axios
        .get(this.url + "attendance/getAttendanceView/"+empid+"/"+month+"/"+year, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    LeaveView(empid,month,year) {
      var jwt = localStorage.getItem("jwt");
      console.log('requestbody',empid,month,year)
      return axios
        .get(this.url + "leave/leaveRequestView/"+empid+"/"+month+"/"+year, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    companyreg(reqbody) {
      return axios
        .post(this.url + "company/addCompany/", reqbody, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    familyReq(employeeId, reqbody) {
      var jwt = localStorage.getItem("jwt");
      return axios
        .post(
          this.url + "familyDetails/addFamilyDetails/" + employeeId,
          reqbody,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    EmployeeAllowancesave(employeeId, reqbody) {
      var jwt = localStorage.getItem("jwt");
      console.log("employeealloanacedata",reqbody)
      return axios
        .post(
          this.url + "empAllowance/saveListEmpAllownaces/" + employeeId,
          reqbody,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    EmployeeDeductionsave(employeeId, reqbody) {
      var jwt = localStorage.getItem("jwt");
      console.log("employeealloanacedata",reqbody)
      return axios
        .post(
          this.url + "empDeduction/saveListEmpDeductions/" + employeeId,
          reqbody,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    AutoSaving(employeeId) {
      var jwt = localStorage.getItem("jwt");
    
      return axios
        .post(
          this.url + "paySlipLineItem/autoSaving/" + employeeId,
          ' ',
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    DesignationReq(reqbody) {
      return axios
        .post(this.url + "designation/addDesig/", reqbody, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    RolesReq(reqbody) {
      return axios
        .post(this.url + "roles/addRoles/", reqbody, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },

    PostHolidays(reqbody) {
      var jwt = localStorage.getItem("jwt");
      return axios
        .post(this.url + "holidays/addHolidays/", reqbody, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    AllowanceReq(reqbody) {
      var jwt = localStorage.getItem("jwt");
      return axios
        .post(this.url + "allowances/saveAllowances/", reqbody, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    allowanceSave(reqbody) {
      var jwt = localStorage.getItem("jwt");
      return axios
        .post(this.url + "allowances/saveAllowance/", reqbody, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    deductionSave(reqbody) {
      var jwt = localStorage.getItem("jwt");
      return axios
        .post(this.url + "deductions/saveDeduction/", reqbody, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    DepartmentReq(branchName, reqbody) {
      var jwt = localStorage.getItem("jwt");
      return axios
        .post(this.url + "department/addDept/" + branchName, reqbody, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    BranchReq(reqbody) {
      var jwt = localStorage.getItem("jwt");
      return axios
        .post(this.url + "branch/addBranch/", reqbody, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    DeductionReq(reqbody) {
      var jwt = localStorage.getItem("jwt");
      return axios
        .post(this.url + "deductions/saveDeductions/", reqbody, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    AttendenceReq(selected, reqbody) {
      var jwt = localStorage.getItem("jwt");
      return axios
        .post(
          this.url + "attendance/addAttendanceDetails/" + selected,
          reqbody,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },
    ApplyReq(selected,leavetype ,reqbody) {
      var jwt = localStorage.getItem("jwt");
      console.log("leave",selected,leavetype,reqbody)
      return axios
        .post(this.url + "leave/addLeaveDetails/" + selected+"/"+leavetype, reqbody, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },

     employeeApplyReq(selected,leavetype ,reqbody) {
      var jwt = localStorage.getItem("jwt");
      console.log("leave",selected,leavetype,reqbody)
      return axios
        .post(this.url + "leave/addLeaveManager/" + selected+"/"+leavetype, reqbody, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response.data.message);
          return err.response;
        });
    },

    LeaveApprove(leaveRequestId,status,employeeid ,leaveid) {
      var jwt = localStorage.getItem("jwt");
      console.log("Leave is",leaveid)
      return axios
        .post(
          this.url + "leave/updateLeaveStatus/" + leaveRequestId + "/"+status+"/"+employeeid+"/"+leaveid, ' ',
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err);
          return err.response;
        });
    },

    LeaveRejected(leaveRequestId,status,employeeid,leaveid) {
      var jwt = localStorage.getItem("jwt");
      return axios
        .post(
          this.url + "leave/updateLeaveStatus/" + leaveRequestId + "/"+status+"/"+employeeid+"/"+leaveid, ' ',
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err);
          return err.response;
        });
    },

    LeaveCancell(leaveRequestId,status,employeeid ,leaveid) {
      var jwt = localStorage.getItem("jwt");
      console.log("Leave is",leaveid)
      return axios
        .post(
          this.url + "leave/cancelLeaveRequest/" + leaveRequestId + "/"+status+"/"+employeeid+"/"+leaveid, ' ',
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err);
          return err.response;
        });
    },

    deactiveLeavemaster(employeeId) {
      var jwt = localStorage.getItem("jwt");
      console.log("headers",  {
        // "Content-Type": "application/json",
        Authorization: "Bearer " + jwt
      })
      return axios
        .post(this.url+"leaveMaster/deactiveStatus/"+employeeId,' ', {
          headers: {
            // "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
          
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err);
          return err.response;
        });
    },
    activeLeavemaster(employeeId) {
      var jwt = localStorage.getItem("jwt");
      console.log("headers",  {
        // "Content-Type": "application/json",
        Authorization: "Bearer " + jwt
      })
      return axios
        .post(this.url+"leaveMaster/activeStatus/"+employeeId,' ', {
          headers: {
            // "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
          
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err);
          return err.response;
        });
    },
    deleteHoliday(id){
      var jwt = localStorage.getItem("jwt");
      return axios
        .delete(this.url+"holidays/deleteHolidays/"+id,
        
         {
          headers: {
            "accept": "*/*",
            "Content-Type": "application/json",
             "Authorization": "Bearer "+jwt  
          }
        })
        .then(response => {
          return response;
        });
    },
    deleteAllRoles(id){
      var jwt = localStorage.getItem("jwt");
      return axios
        .delete(this.url+"roles/deleteRoles/"+id,
        
         {
          headers: {
            "accept": "*/*",
            "Content-Type": "application/json",
             "Authorization": "Bearer "+jwt  
          }
        })
        .then(response => {
          return response;
        });
    },
    deleteDepartments(id){
      var jwt = localStorage.getItem("jwt");
      return axios
        .delete(this.url+"department/deleteDept/"+id,
        
         {
          headers: {
            "accept": "*/*",
            "Content-Type": "application/json",
             "Authorization": "Bearer "+jwt  
          }
        })
        .then(response => {
          return response;
        });
    },
  deleteDesignations(id){
    var jwt = localStorage.getItem("jwt");
    return axios
      .delete(this.url+"designation/deleteDesig/"+id,
      
       {
        headers: {
          "accept": "*/*",
          "Content-Type": "application/json",
           "Authorization": "Bearer "+jwt  
        }
      })
      .then(response => {
        return response;
      });
  },
  deleteBranchs(id){
    var jwt = localStorage.getItem("jwt");
    return axios
      .delete(this.url+"branch/deleteBranch/"+id,      
       {
        headers: {
          "accept": "*/*",
          "Content-Type": "application/json",
           "Authorization": "Bearer "+jwt  
        }
      })
      .then(response => {
        return response;
      });
  },
  deleteCompanies(id){
    var jwt = localStorage.getItem("jwt");
    return axios
      .delete(this.url+"company/deleteCompany/"+id,      
       {
        headers: {
          "accept": "*/*",
          "Content-Type": "application/json",
           "Authorization": "Bearer "+jwt  
        }
      })
      .then(response => {
        return response;
      });
  },
  deleteFamilydetails(id){
    var jwt = localStorage.getItem("jwt");
    return axios
      .delete(this.url+"familyDetails/deleteFamilyDetails/"+id,      
       {
        headers: {
          "accept": "*/*",
          "Content-Type": "application/json",
           "Authorization": "Bearer "+jwt  
        }
      })
      .then(response => {
        return response;
      });
  },
    InTimePost(employeeId) {
      var jwt = localStorage.getItem("jwt");
      console.log("headers",  {
        // "Content-Type": "application/json",
        Authorization: "Bearer " + jwt
      })
      return axios
        .post(this.url+"attendance/webClockIn/"+employeeId,' ', {
          headers: {
            // "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
          
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err);
          return err.response;
        });
    },
    OutTimePost(employeeId) {
      var jwt = localStorage.getItem("jwt");
      return axios
        .post(
          this.url + "attendance/webClockOut/" + employeeId, ' ',
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer "+jwt
            }
          }
        )
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err);
          return err.response;
        });
    },
    leavemaster(reqbody) {
      var jwt = localStorage.getItem("jwt");
      console.log("LeaveMaster",reqbody)
      return axios
        .post(
          this.url + "leaveMaster/addLeaveMaster/",reqbody,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer "+jwt
            }
          }
        )
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err);
          return err.response;
        });
    },
    //Get Api Calling
    getleaveEntilement(employeeid) {
      var jwt = localStorage.getItem("jwt");
     
      return axios
        .get(this.url + "leaveAudit/getLeavesAudit/"+employeeid, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          return response;
        });
    },
    getPaySlipgen() {
      var jwt = localStorage.getItem("jwt");
     
      return axios
        .get(this.url + "payRollGeneration/getAttachment/"+'January'+"/"+'2022'+"/"+'103', {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          return response;
        });
    },
    getleaveActiveDetails() {
      var jwt = localStorage.getItem("jwt");
     
      return axios
        .get(this.url + "leaveMaster/ActiveListOfStatus", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          return response;
        });
    },

    getAllowance() {
      var jwt = localStorage.getItem("jwt");
     
      return axios
        .get(this.url + "allowances/getAllowance/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          return response;
        });
    },
    getDeduction() {
      var jwt = localStorage.getItem("jwt");
     
      return axios
        .get(this.url + "deductions/getDeduction", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          return response;
        });
    },
    getpaySlipLineItem() {
      var jwt = localStorage.getItem("jwt");
     
      return axios
        .get(this.url + "paySlipLineItem/getItemDetails/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          return response;
        });
    },
    getleaveDeativeDetails() {
      var jwt = localStorage.getItem("jwt");
     
      return axios
        .get(this.url + "leaveMaster/DeactiveListOfStatus/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          return response;
        });
    },
    getleaveMasterDetails() {
      var jwt = localStorage.getItem("jwt");
     
      return axios
        .get(this.url + "leaveMaster/leaveMasterDetails/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          return response;
        });
    },
    getAllDepartment() {
      return axios
        .get(this.url + "department/getDeptDetails", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          return response.data;
        });
    },
    // getAllowances() {
    //   var jwt = localStorage.getItem("jwt");
    //   console.log("token in user", token);
    //   return axios
    //     .get(this.url + "allowances/listOfAllowances", {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: "Bearer " + jwt
    //       }
    //     })
    //     .then(response => {
    //       return response;
    //     });
    // },
    allowanceId(reqbody) {
      var jwt = localStorage.getItem("jwt");
      console.log("IN service register", reqbody);
      return axios
        .get(this.url + "allowances/getAllowances/" + reqbody, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    LeavesByStatus(selectedbyStatus,selected) {
      var jwt = localStorage.getItem("jwt");
      console.log("IN service register", selectedbyStatus);
      return axios
        .get(this.url + "leave/LeavesByStatusById/" +selectedbyStatus+"/"+selected, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getTodayAttendance(selected) {
      var jwt = localStorage.getItem("jwt");
     
      return axios
        .get(this.url + "attendance/getTodayAttendance/"+selected, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    // getDeduction() {
    //   var jwt = localStorage.getItem("jwt");
    //   console.log("token in user", token);
    //   return axios
    //     .get(this.url + "deductions/listOfDeductions", {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: "Bearer " + jwt
    //       }
    //     })
    //     .then(response => {
    //       return response;
    //     });
    // },
    deductionId(reqbody) {
      var jwt = localStorage.getItem("jwt");
      console.log("IN service register", reqbody);
      return axios
        .get(this.url + "deductions/getDeductions/" + reqbody, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          //console.log("res",response)
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },

    //Employyeget
    getEmployeeDetails() {
      var jwt = localStorage.getItem("jwt");
      return axios
        .get(this.url + "familyDetails/getFamilyDetails", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          return response.data;
        });
    },
    getCompanyDetails() {
      return axios
        .get(this.url + "company/getCompanyDetails", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          return response.data;
        });
    },
    getLeaveDetails() {
      var jwt = localStorage.getItem("jwt");
      return axios
        .get(this.url + "leave/getLeaveDetails", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          return response.data;
        });
    },
    getFamilyDetails() {
      return axios
        .get(this.url + "branch/getBranchDetails", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          return response.data;
        });
    },

    getAllDeginations() {
      var token = localStorage.getItem("token");

      return axios
        .get(this.url + "designation/getDesigDetails", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          return response.data;
        });
    },

    getBranchesNames() {
      var token = localStorage.getItem("token");
      console.log("token in user", token);
      return axios
        .get(this.url + "branch/getBranchNames", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log("user", response);
          return response;
        });
    },
    getSupervisorNames() {
      var token = localStorage.getItem("token");
      console.log("token in user", token);
      return axios
        .get(this.url + "branch/getBranchNames", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log("user", response);
          return response;
        });
    },
    getRolename() {
      var token = localStorage.getItem("token");
      console.log("token in user", token);
      return axios
        .get(this.url + "roles/getRoleNames", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log("user", response);
          return response;
        });
    },
    getDeginame() {
      var token = localStorage.getItem("token");
      console.log("token in user", token);
      return axios
        .get(this.url + "designation/getDesigNames", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log("user", response);
          return response;
        });
    },
    getDepartname() {
      var token = localStorage.getItem("token");
      console.log("token in user", token);
      return axios
        .get(this.url + "department/getDeptNames", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log("user", response);
          return response;
        });
    },
    getAllroles() {
      var jwt = localStorage.getItem("jwt");
      return axios
        .get(this.url + "roles/getRolesDetails/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
            
          }
        })
        .then(response => {
          console.log("user", response);
          return response;
        });
    },

    getAllholidys () {
      var jwt = localStorage.getItem("jwt");
      return axios
        .get(this.url + "holidays/getHolidays/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          console.log("user", response);
          return response;
        });
    },

    getSupervisorLeaves(id) {
      var jwt = localStorage.getItem("jwt");
      return axios
        .get(this.url + "leave/leaveDetails/" + id, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          console.log("user", response);
          return response;
        });
    },
    getlistOfEmployees() {
      return axios
        .get(this.url + "employee/listOfEmployees/", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log("user", response);
          return response;
        });
    },
    getlistOfAttendence(id,month,year) {
      var jwt = localStorage.getItem("jwt");
      return axios
        .get(this.url + "attendance/getAttend/" + id+"/"+month+"/"+year, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          console.log("user", response);
          return response;
        });
    },

    geAttendence(id) {
      var jwt = localStorage.getItem("jwt");
      return axios
        .get(this.url + "attendance/getAttendance/" + id, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          console.log("user", response);
          return response;
        });
    },
    getleave(id) {
      var jwt = localStorage.getItem("jwt");
      console.log("jwtid", jwt);
      return axios
        .get(this.url + "leave/getLeave/" + id, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          console.log("user", response);
          return response;
        });
    },
    getleavedashboard(id) {
      var jwt = localStorage.getItem("jwt");
      console.log("jwtid", jwt);
      return axios
        .get(this.url + "leaveAudit/getCurrentLeaveDashboard/" + id, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          console.log("user", response);
          return response;
        });
    },
    getEmployeeList(id) {
      var jwt = localStorage.getItem("jwt");
      console.log("jwtid", jwt);
      return axios
        .get(this.url + "employee/getEmployeeList/" + id, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          console.log("user", response);
          return response;
        });
    },
    getSavedPayroll() {
      return axios
        .get(this.url + "reports/getUnsavedPayRollReports/", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log("user", response);
          return response;
        });
    },

    getDesignationId(id, reqbody) {
      console.log("res", reqbody);

      return axios
        .post(this.url + "designation/updateDesig/" + id, reqbody, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getBranchId(id, reqbody) {
      console.log("res", reqbody);

      return axios
        .post(this.url + "branch/updateBranch/" + id, reqbody, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getDepartmentId(id, reqbody) {
      console.log("res", reqbody);

      return axios
        .post(this.url + "department/updateDept/" + id, reqbody, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getRolesId(id, reqbody) {
      console.log("res", reqbody);

      return axios
        .post(this.url + "roles/updateRoles/" + id, reqbody, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getHolidayId(id, reqbody) {
      var jwt = localStorage.getItem("jwt");
      console.log("res", reqbody);

      return axios
        .post(this.url + "holidays/updateHolidays/" + id, reqbody, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getCompanyId(id, reqbody) {
      console.log("res", reqbody);

      return axios
        .post(this.url + "company/updateCompany/" + id, reqbody, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getfamilyupdate(familyId, reqbody) {
      var jwt = localStorage.getItem("jwt");
      console.log("res123", familyId);

      return axios
        .post(
          this.url + "familyDetails/updateFamilyDetails/" + familyId,
          reqbody,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getAdditionalupdate(selected, reqbody) {
      var jwt = localStorage.getItem("jwt");
      console.log("res", selected, reqbody);

      return axios
        .post(
          this.url +
            "additionalDetails/updateAdditionalDetails/" +
            this.selected,
          reqbody,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getBankupdate(selected, reqbody) {
      var jwt = localStorage.getItem("jwt");
      console.log("res", selected, reqbody);

      return axios
        .post(
          this.url + "empBankDetails/updateEmpBankDetails/" + this.selected,
          reqbody,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getemployeeprofile(selected) {
      var jwt = localStorage.getItem("jwt");
      console.log("res", selected);

      return axios
        .get(
          this.url + "employee/getProfile/"+selected,
          {
            headers: {
              "Content-Type": "application/json",
           
            }
          }
        )
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
         
          console.log("error service", err.response);
          return err.response;
        });
    },
    getManagerlist() { 
    
     

      return axios
        .get(
          this.url + "employee/getEmployeeManagerDetails/",
          {
            headers: {
              "Content-Type": "application/json",
            
            }
          }
        )
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getemployeeupdate(
      selected,
      superisor,
      desigName,
      branchName,
      deptName,
      roleName,
      reqbody
    ) {
      var jwt = localStorage.getItem("jwt");
      console.log("res12134", selected,superisor, reqbody, jwt);
      console.log(
        this.url +
          "employee/updateEmployee/" +
          this.selected +"/"+superisor+
          "?" +
          "desigName" +
          "=" +
          desigName +
          "&" +
          "branchName" +
          "=" +
          branchName +
          "&" +
          "deptName" +
          "=" +
          deptName +
          "&" +
          "roleName" +
          "=" +
          roleName
      );

      return axios
        .post(
          this.url +
            "employee/updateEmployee/" +
            this.selected +"/"+superisor+
            "?" +
            "desigName" +
            "=" +
            desigName +
            "&" +
            "branchName" +
            "=" +
            branchName +
            "&" +
            "deptName" +
            "=" +
            deptName +
            "&" +
            "roleName" +
            "=" +
            roleName,
          reqbody,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getAttendenceupdate(AttendenceId,month,year, reqbody) {
      var jwt = localStorage.getItem("jwt");
          console.log("satya",AttendenceId,reqbody)
      return axios
        .post(
          this.url + "attendance/updateAttendanceDetails/" + AttendenceId+"/"+month+"/"+year,
          reqbody,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getupdateLeaveMaster(id, reqbody) {
      console.log("res", reqbody);
      var jwt = localStorage.getItem("jwt");
      return axios
        .post(this.url + "leaveMaster/updateLeaveMaster/" + id, reqbody, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    //getFamily
    getFamilyId(selected) {
      var jwt = localStorage.getItem("jwt");
      console.log("Get All Employee satya1", selected);
      return axios
        .get(this.url + "familyDetails/getFamily/" + selected, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getAdditionalId(selected) {
      var jwt = localStorage.getItem("jwt");
      console.log("Get All Employee additinal", selected);
      return axios
        .get(
          this.url + "additionalDetails/getadditionalDetailsId/" + selected,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getBankId(selected) {
      var jwt = localStorage.getItem("jwt");
      console.log("Get All Employee bank", selected);
      return axios
        .get(this.url + "empBankDetails/getEmpBankDetailsId/" + selected, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getEmployeeId(selected) {
      var jwt = localStorage.getItem("jwt");
      return axios
        .get(this.url + "employee/getEmployeeId/" + selected, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getPaySlip(selected, month, year) {
      var jwt = localStorage.getItem("jwt");
      console.log("id 1", selected);
      return axios
        .get(
          this.url +
            "payroll/genratingPayroll/" +
            selected +
            "/" +
            month +
            "/" +
            year,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },

    getAlllowanceView(selected, month, year) {
      var jwt = localStorage.getItem("jwt");
      console.log("id 1", selected);
      return axios
        .get(
          this.url +
            "empAllowance/getAllAllowancesForEmployee/" +
            selected +
            "/" +
            month +
            "/" +
            year,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getDeductionView(selected, month, year) {
      var jwt = localStorage.getItem("jwt");
      console.log("id 1", selected);
      return axios
        .get(
          this.url +
            "empDeduction/getAllDeductionsForEmployee/" +
            selected +
            "/" +
            month +
            "/" +
            year,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getAttendenceView(selected, month, year) {
      var jwt = localStorage.getItem("jwt");
      console.log("id 1", selected);
      return axios
        .get(
          this.url +
            "attendance/getAttend/" +
            selected +
            "/" +
            month +
            "/" +
            year,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getunsavedPaySlip(month, year) {
      var jwt = localStorage.getItem("jwt");

      return axios
        .get(
          this.url + "reports/getUnsavedPayRollReports/" + month + "/" + year,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            },
            responseType: "blob"
          }
        )
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    Bulkexcel(formdata) {
      var jwt = localStorage.getItem("jwt");
      console.log("excel", formdata);
      return axios
        .post(this.url + "bulk/bulkPayrollSave/", formdata, {
          headers: {
            "Content-Type": "application/vnd.ms-excel",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    BulkUploadAttendance(formdata) {
      var jwt = localStorage.getItem("jwt");
      console.log("excel", formdata);
      return axios
        .post(this.url + "bulkAttendance/bulkUploadAttendance/", formdata, {
          headers: {
            "Content-Type": "application/vnd.ms-excel",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },

    BulkUploadEmployee(formdata) {
      var jwt = localStorage.getItem("jwt");
      console.log("excel", formdata,jwt);
      return axios
        .post(this.url + "bulkEmployee/bulkUploadEmployee/",formdata, {
          headers: {
            "Content-Type": "application/vnd.ms-excel",
            Authorization: "Bearer " + jwt
          }
        })
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    },
    getAdditionalupdate(selected, reqbody) {
      var jwt = localStorage.getItem("jwt");
      console.log("res", selected, reqbody);

      return axios
        .post(
          this.url +
            "additionalDetails/updateAdditionalDetails/" +
            this.selected,
          reqbody,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt
            }
          }
        )
        .then(response => {
          console.log("res", response);
          return response;
        })
        .catch(err => {
          //TODO: How to i fetch, and pass the errorcode ?
          console.log("error service", err.response);
          return err.response;
        });
    }
  }
};
