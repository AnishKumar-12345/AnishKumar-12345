<template>
  <div id="managerleave">
    <!-- <v-app-bar app>
      <router-link
        to="/ManagerDashboard"
        style="text-decoration: none; color: inherit;"
      >
        <v-row>
          <v-btn icon>
            <v-icon style="color:red;margin-left:20px" size="40"
              >mdi-home</v-icon
            >
          </v-btn>
        </v-row>
        <v-row>
          <span
            style="font-weight: 400; font-size: 12px; color: black;margin-left:20px"
            >Home</span
          >
        </v-row>
      </router-link>
      <v-img class="mx-2" max-height="40" max-width="40" contain></v-img>
      <router-link
        to="/ManagerDashboard"
        style="text-decoration: none; color: inherit;margin-left:100px"
      >
        <img src="../assets/dizitive2.png" width="180px" alt="dizitiveit.com" />
      </router-link>
    </v-app-bar> -->
    <!-- <ManagerMenu></ManagerMenu> -->
    <v-card
      style=" margin-left: 100px; margin-right: 0px"
    >
      <v-toolbar color="cyan" dark flat style="height: -20px">
        <template v-slot:extension>
          <v-tabs v-model="tabs" centered>
            <v-tab v-for="item in items" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-card style="padding:10px;">
                   <v-row>
        <v-col style="font-weight: bold;">LEAVE BALANCE</v-col>
    </v-row>
               <v-container >
          <v-row fluid style="margin-left:220px; margin-bottom: 20px;">
            <v-col cols="12" md="4" sm="2">
              <v-card
               class="mx-auto mt-10 rounded-xl"
   width="200"
    height="110"
    color="#385F73"
    elevation="5">
     <v-card-title   class='white--text ml-6'>
       <span style="width:100%; float:left;">
       Casual Leave
       </span>
       </v-card-title>
     <v-card-subtitle><h3 class="headline black--text text--accent-2" style="margin-top:40px">{{ this.CausalLeavecount}}</h3></v-card-subtitle>
    </v-card>
    </v-col>
    <v-col cols="12" md="4" sm="2">
              <v-card
               class="mx-auto mt-10 rounded-xl"
   width="200"
    height="110"
    color="green"
    elevation="5"><v-card-title   class='white--text ml-10'>Sick Leave</v-card-title>
     <v-card-subtitle> <h3 class="headline black--text text--accent-2" style="margin-top:40px">{{this.SickLeavecount}} </h3></v-card-subtitle></v-card>
    </v-col>
           <!-- <v-col cols="12" md="4" sm="2">

           </v-col> -->
          </v-row>

      </v-container>
            <v-card-text>
              <v-form
                @submit.prevent="SaveLeave"
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-row class="pl-0 pr-0">
                <v-col cols="12" md="3">
                    <v-text-field
                    class="pr-1"
                      label="Employee Id"
                      placeholder="Employee Id"
                      v-model="this.userid"
                      :rules="rules"
                      disabled
                        dense
                      outlined
                    ></v-text-field>
</v-col>
<v-col cols="12" md="3">
                    <v-select
                      :items="leavetype"
                      label="Leave Type"
                      v-model="user.leaveName"
                      :rules="rules"
                      dense
                      outlined
                    ></v-select>
</v-col>

<v-col cols="12" md="3">
                    <v-text-field
                      type="date"
                      v-model="user.startDate"
                      label="Start Date"
                      :rules="rules"
                       :min="nowDate"
                      outlined
                      dense
                    ></v-text-field>
</v-col>

<v-col cols="12" md="3">
                    <v-text-field
                      type="date"
                      label="End Date"
                      v-model="user.endDate"
                      :rules="rules"
                       :min="nowDate"
                      dense
                      outlined
                    ></v-text-field>
</v-col>
<v-col cols="12">
                  <v-textarea
                      name="input-7-1"
                      label="Reason"
                      v-model="user.shortForm"
                      :rules="rules"
                      rows="2"
                      dense  outlined
                    ></v-textarea>
</v-col>
</v-row>

 <v-row>
 <v-col cols="12" style="text-align:right;">
                    <v-btn type="submit" style="background:red;color:white; margin-bottom:20px">Save</v-btn>

                 </v-col>
                </v-row>
              </v-form>
            </v-card-text>

          </v-card>
        </v-tab-item>
        <v-tab-item style="padding:10px;">
          <v-data-table
            :headers="headers"
            :items="this.leavelist"
            :items-per-page="5"
            class="elevation-1"
          >
           <template v-slot:item.action1="{ item }">

              <v-btn v-if="item.status == 'PENDING'"
                color="success"
                  @click="CancellLeave(item)"

                >Cancel</v-btn
              >
               <v-btn v-if="item.status == 'APPROVED'"
                color="success"
                  @click="CancellLeave(item)"

                >Cancel</v-btn
              >

            </template>
          </v-data-table>
        </v-tab-item>

        <v-tab-item>
            <v-card style="padding:10px;">
            <v-card-text>
              <v-form
                @submit.prevent="EmployeeLeave"
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-row>
                  <v-col cols="12" md="3">

                       <v-select
                            :items="this.employeeListData"
                            label="Select Employee"
                              :rules="rules"
                           v-model="selected"
                            dense
                            outlined
                          ></v-select>
 </v-col>

<v-col cols="12" md="3">
                    <v-select
                      :items="leavetype"
                      label="Leave Type"
                      v-model="user.leaveName"
                      :rules="rules"
                      dense
                      outlined
                    ></v-select>
</v-col>
<v-col cols="12" md="3">
                    <v-text-field
                      type="date"
                      v-model="user.startDate"
                      label="Start Date"
                       :min="nowDate"
                      :rules="rules"
                      outlined
                      dense
                    ></v-text-field>
</v-col>
<v-col cols="12" md="3">
                    <v-text-field
                      type="date"
                      label="End Date"
                         :min="nowDate"
                      v-model="user.endDate"

                      :rules="rules"
                      dense
                      outlined
                    ></v-text-field>
</v-col>
<v-col cols="12">
                    <v-textarea
                      name="input-7-1"
                      label="Reason"
                      v-model="user.shortForm"
                      :rules="rules"
                      rows="2"
                      dense
                      outlined
                    ></v-textarea>
</v-col>

  </v-row>

<v-row>
                    <v-col cols="12" style="text-align:right">
                    <v-btn type="submit" style="background:red;color:white;margin-bottom:20px;">Save</v-btn>

                </v-col>

                </v-row>
              </v-form>
            </v-card-text>
                       <!-- <div class="text-center">

     <v-layout row justify-center align-center>
    <v-progress-circular
         v-show="isProgress == true"
      style="margin-top:200px"

     indeterminate :size="70" :width="7" color="black"
    >
     <v-avatar class="img">
      <img src="../assets/dizitive1.png"  alt="logo">
     </v-avatar>

    </v-progress-circular>

     </v-layout>

    </div> -->
          </v-card>
        </v-tab-item>
         <v-tab-item style="padding:10px;">
          <v-data-table
            :headers="headers1"
            :items="this.supervisorleavelist"
            :items-per-page="5"
            class="elevation-1"
          >
               <template v-slot:item.action="{ item }">
              <v-btn
                color="success"
                @click="ApprovedLeave(item)"

                >Approve</v-btn
              >
              <v-btn
                color="red"
                @click="RejectedLeave(item)"
                :loading="item.cancelloading"
                :disabled="cancelloading"
                >Reject</v-btn
              >
            </template>
          </v-data-table>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

     <v-dialog v-model="dialogDelete" max-width="500px">
                      <v-card>
                        <v-card-title
                          >Your leave is already completed,<br>
                           you can continue to  apply for <br>leave you are going to LOP,
                          </v-card-title
                        >
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="cancel()">Cancel</v-btn>

                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>

                       <div class="text-center">

     <v-layout row justify-center align-center>
    <v-progress-circular
         v-show="isProgress == true"
      style="margin-top:-200px;margin-left:60px"

     indeterminate :size="70" :width="7" color="black"
    >
     <v-avatar class="img">
      <img src="../assets/dizitive1.png"  alt="logo">
     </v-avatar>

    </v-progress-circular>

     </v-layout>
       <v-layout row justify-center align-center>
    <v-progress-circular
         v-show="isProgress1 == true"
      style="margin-top:-100px;margin-left:60px"

     indeterminate :size="70" :width="7" color="black"
    >
     <v-avatar class="img">
      <img src="../assets/dizitive1.png"  alt="logo">
     </v-avatar>

    </v-progress-circular>

     </v-layout>
      <v-layout row justify-center align-center>
    <v-progress-circular
         v-show="isProgress2 == true"
      style="margin-top:-100px;margin-left:60px"

     indeterminate :size="70" :width="7" color="black"
    >
     <v-avatar class="img">
      <img src="../assets/dizitive1.png"  alt="logo">
     </v-avatar>

    </v-progress-circular>

     </v-layout>


    </div>

    <v-snackbar color="green" v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import servicescall from "../Services";
import BluckUpload from "./BluckUpload";
import Attendence from "./Attendence";
// import ManagerMenu from "./ManagerMenu";
import { mdiConsoleNetworkOutline } from '@mdi/js';
export default {
  name: "UserLeaveapply",
  props: ["userjwt", "employeeId"],
  mixins: [servicescall],
  components: {
    BluckUpload,
    Attendence,
    // ManagerMenu
  },
  data() {
    return {
      tabs: null,
      AttendenceDetails: [],
      rules: [v => !!v || " Filed  is required"],
      leavetype: ["Sick", "Casual"],
      monitems: [
        "Janury",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
        nowDate: new Date().toISOString().slice(0,10),
      yearitems: [
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
        "2025",
        "2026",
        "2027",
        "2028",
        "2029",
        "2030"
      ],
      user: {
        inTime: "",
        outTime: "",
        attendanceDay: ""
      },
      leaveIdresult: "",
      leaveIdresult1: "",
         dialogDelete: false,
      headers: [
        { text: "Employee Id", value: "employeeId" },
        { text: "Leave Name ", value: "leaveName" },
        { text: "Start Date", value: "startDate" },
        { text: "End Date", value: "endDate" },
        {text:"Reason",value:"shortForm"},
        { text: "Status ", value: "status" },
         { text: "Actions", value: "action1", sortable: false, align: "center" }
      ],
       headers1: [
        { text: "Employee Id", value: "employeeId" },
        { text: "Leave Type ", value: "leaveName" },
        { text: "Start Date", value: "startDate" },
        { text: "End Date", value: "endDate" },
          {text:"Reason",value:"shortForm"},
        { text: "Status ", value: "status" },

        { text: "Actions", value: "action", sortable: false, align: "center" }
      ],

      //  date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      //   date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      // menu: false,
      // modal: false,
      // menu2: false,
      //  menu1: false,
      // modal1: false,
      // menu23: false,
       userid:"",
        Leavedata:[],
        CausalLeavecount:"",
        SickLeavecount:"",
      employeelist: [],
      leavelist: [],
        supervisorleavelist: [],
        employeeListData:[]
,      result: [],
      valid: false,
      showText: false,
      selected: "",

      snackbar: false,
      text: "",
      userid: "",
      count:"",
      selected:"",

      Accepted:"APPROVED",
      Rejected:"REJECTED",
      Cancelled:"CANCELLED",
          isProgress:false,
          isProgress1:false,
           isProgress2:false,


      user: {
        leaveName: "",
        startDate: "",
        endDate: "",
        shortForm: ""
      },
       leaveIdresult:"",
       leaveIdresult1:"",
      Sickcount:"",
      Causalcount:"",
      items: ["Apply Leave", "Leave Status","Employee Leave Apply", "Employee Leave Request ",,"","","","",""]
    };
  },
  mounted() {
   // this.count=this.user.startDate+this.user.endDate
    this.getList();
     this. Sickcount = localStorage.getItem("Sickcount");
     this. Causalcount = localStorage.getItem("Causalcount");

      console.log("sick and causual count",this.Sickcount,this.Causalcount, this.count)
    this.userid = localStorage.getItem("id");
    this.getLeaveByid();
    this.getLeaveMaster();
    this.getLeavesuperivisorid()
    this.getListEmployeedata()
      this.getdashboard()
  },
  methods: {

     EmployeeLeave() {

      console.log("json", this.user, this.valid);
      this.$refs.form.validate();

      if (this.$refs.form.validate()) {

        this.checkLeave();

        if (this.edituser == false) {
        }
        //  else {
        //    console.log("Edited")
        //     this.editedDesig();

        //  }
      }
    },
    confirmToLeave(){
      this.employeePostApply();
      this.dialogDelete=false
    },
    cancel(){
 this.dialogDelete=false
    },

    checkLeave(){
         console.log("startDate", this.user.startDate);
      console.log("endDate", this.user.endDate);
      const d1= new Date(this.user.startDate)
       const d2= new Date(this.user.endDate)
       const time =Math.abs(d2-d1)
       const dy=Math.ceil(time / (1000*60*60*24))

      console.log("Number of days",dy,this.user.leaveName == "Sick");

      if(this.user.leaveName == "Sick"){
            if(this.Sickcount<dy){
                this.dialogDelete=true
              }
            else{
                  this.employeePostApply()
             }

      }
      else{
             if(this.Causalcount<dy){
                this.dialogDelete=true
             }
              else{
                  this.employeePostApply()
             }
        }
    },

    employeePostApply() {

      if (this.user.leaveName == "Sick") {
        this.leaveid = this.leaveIdresult1;
      } else if (this.user.leaveName == "Casual") {
        this.leaveid = this.leaveIdresult;
      }
      // this.user.startDate=this.date
      // this.user.endDate=this.date1
      //  console.log("startDate", this.user.startDate);

      var reqJSON = this.user;
      console.log("check", reqJSON,this.selected);
       this.isProgress=true;
      this.employeeApplyReq(this.selected, this.leaveid, reqJSON).then(response => {
        console.log("In post", response);
        if (response.status == 200) {
            this.isProgress=false;
          this.text = response.data.message;
          this.snackbar = true;
          location.reload();
          this.getLeaveByid();
        } else {
           this.isProgress=true;
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },

    SaveLeave() {
      console.log("json", this.user, this.valid);
      this.$refs.form.validate();
      console.log("json", this.user, this.valid);
      this.$refs.form.validate();

      if (this.$refs.form.validate()) {

        this.checkLeavestatus();

        if (this.edituser == false) {
        }

      }
    },
    // confirmToLeave(){
    //   this.PostApply();
    //   this.dialogDelete=false
    // },
    cancel(){
 this.dialogDelete=false
    },

    checkLeavestatus(){
         console.log("startDate", this.user.startDate);
      console.log("endDate", this.user.endDate);
      const d1= new Date(this.user.startDate)
       const d2= new Date(this.user.endDate)
       const time =Math.abs(d2-d1)
       const dy=Math.ceil(time / (1000*60*60*24))

      console.log("Number of days",dy,this.user.leaveName == "Sick");

      if(this.user.leaveName == "Sick"){
            if(this.Sickcount<dy){
                this.dialogDelete=true
              }
            else{
                  this.PostApply()
             }

      }
      else{
             if(this.Causalcount<dy){
                this.dialogDelete=true
             }
              else{
                  this.PostApply()
             }
        }
    },

    PostApply() {
      if (this.user.leaveName == "Sick") {
        this.leaveid = this.leaveIdresult1;
      } else if (this.user.leaveName == "Casual") {
        this.leaveid = this.leaveIdresult;
      }


      var reqJSON = this.user;
      console.log("check", reqJSON);
        this.isProgress=true;
      this.ApplyReq(this.userid, this.leaveid, reqJSON).then(response => {
        console.log("In post", response);
        if (response.status == 200) {
            this.isProgress=false;
          this.text = response.data.message;
          this.snackbar = true;
          location.reload();
          this.getLeaveByid();
        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },
     ApprovedLeave(item) {
         this.loading = true;
            item.createloading = true;
            var leaveRequestId=item.leaveRequestId
            var leavetype=item.leaveName

             this.userid =item.employeeId
               if(item.leaveName == "Sick"){
        this.leaveid=this.leaveIdresult1
      }
      else if(item.leaveName == "Casual"){
          this.leaveid=this.leaveIdresult
      }
      console.log("leaveRequestId", this.leaveid, leavetype == "Sick");
      console.log("Accepted", this.Accepted);

     this.isProgress2=true;

      this.LeaveApprove(leaveRequestId,this.Accepted, this.userid,this.leaveid).then(response => {
        console.log("In post", response);
        if (response.status == 200) {
          this.isProgress2=false;
          this.text = response.data.message;
          this.snackbar = true;
            location.reload();
        } else {
          this.isProgress2=true;
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },



     RejectedLeave(item) {
         this.loading = true;
            item.createloading = true;
            var leaveRequestId=item.leaveRequestId
            this.userid =item.employeeId
             var leavetype=item.leaveName

             this.userid =item.employeeId
               if(item.leaveName == "Sick"){
        this.leaveid=this.leaveIdresult1
      }
      else if(item.leaveName == "Casual"){
          this.leaveid=this.leaveIdresult
      }
             this.isProgress2=true;

      console.log("leaveRequestId", item.leaveRequestId);
      console.log("Rejected", this.Rejected);


      this.LeaveRejected(leaveRequestId,this.Rejected, this.userid,this.leaveid).then(response => {
        console.log("In post", response);
        if (response.status == 200) {
           this.isProgress2=false;
          this.text = response.data.message;
          this.snackbar = false;
            location.reload();
        } else {
           this.isProgress2=true;
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },

       CancellLeave(item) {
         this.loading = true;
           this.isProgress1=true;
            item.createloading = true;
            var leaveRequestId=item.leaveRequestId
            var leavetype=item.leaveName

             this.userid =item.employeeId
               if(item.leaveName == "Sick"){
        this.leaveid=this.leaveIdresult1
      }
      else if(item.leaveName == "Casual"){
          this.leaveid=this.leaveIdresult
      }
      console.log("leaveRequestId", this.leaveid, leavetype == "Sick");
      console.log("Accepted", this.Cancelled);



      this.LeaveCancell(leaveRequestId,this.Cancelled, this.userid,this.leaveid).then(response => {
        console.log("In post", response);
        if (response.status == 200) {
          this.isProgress1=false;
          this.text = response.data.message;
          this.snackbar = true;
            location.reload();
        } else {
            this.isProgress1=true;
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },

    getList() {
      console.log("satya11", this.date, this.date1);
      this.getlistOfEmployees().then(response => {
        console.log("Get All employee list", response.data.Employee);
        for (var i = 0; i < response.data.Employee.length; i++) {
          this.employeelist.push({
            text: response.data.Employee[i].employeeId
          });
        }

        console.log("Get All employee list", this.employeelist);
      });
    },
    getLeaveByid() {
      this.getleave(this.userid).then(response => {
        console.log("Get All employee list", response.data.Leave);
        this.leavelist = response.data.Leave;

        console.log("status",this.leavelist)

      });
    },
     getLeavesuperivisorid() {
      this.getSupervisorLeaves(this.userid).then(response => {
        console.log("Get All employee list", response.data.LeaveDetails);
         for (var i = 0; i < response.data.LeaveDetails.length; i++) {
          if (response.data.LeaveDetails[i].status == "PENDING") {
            this.supervisorleavelist.push(response.data.LeaveDetails[i]);
            console.log("Get All supervisorleavelist", this.supervisorleavelist);
          }
        }
        // this.supervisorleavelist = response.data.LeaveDetails;

      });
    },
    getLeaveMaster() {
      console.log("Get All LeaveMaster");
      this.getleaveMasterDetails().then(response => {
        for (var i = 0; i < response.data.LeaveMaster.length; i++) {
          if (response.data.LeaveMaster[i].leaveType == "Casual") {
            this.leaveIdresult = response.data.LeaveMaster[i].leaveId;

            //this.leaveIdresult.push(response.data.LeaveMaster[i].leaveId);
            console.log("Get All satya1111", this.leaveIdresult);
          }
          if (response.data.LeaveMaster[i].leaveType == "Sick") {
            this.leaveIdresult1 = response.data.LeaveMaster[i].leaveId;

            //this.leaveIdresult.push(response.data.LeaveMaster[i].leaveId);
            console.log("Get All satya1111", this.leaveIdresult1);
          } else {
          }
        }
      });
    },
     getListEmployeedata() {
      this.getEmployeeList(this.userid).then((response) => {
        console.log("Get All employee list", response.data.EmployeeList);
        for (var i = 0; i < response.data.EmployeeList.length; i++) {
          this.employeeListData.push({
             text: response.data.EmployeeList[i].employeeId+'-'+response.data.EmployeeList[i].empName,value: response.data.EmployeeList[i].employeeId
            // text: response.data.Employee[i].employeeId,
          });
        }


        console.log("Get All employee list", this.employeelist);
      });
    },
      getdashboard() {
        var userid =localStorage.getItem('id')
      this.getleavedashboard(userid).then((response) => {
        console.log("Get All employee bank", response.data.LeaveAudit);
         for (var i = 0; i < response.data.LeaveAudit.length; i++) {
           if(response.data.LeaveAudit[i].leaveType=='Casual'){
             this.CausalLeavecount=response.data.LeaveAudit[i].leaveBalance
           }
           if(response.data.LeaveAudit[i].leaveType=='Sick'){
             this.SickLeavecount=response.data.LeaveAudit[i].leaveBalance
           }
              localStorage.setItem('Sickcount', this.SickLeavecount);
               localStorage.setItem('Causalcount', this.CausalLeavecount);
           var Sickcount = localStorage.getItem("Sickcount");
            var Causalcount = localStorage.getItem("Causalcount");
        }


        console.log("Get All Leavedata", this.SickLeavecount,Sickcount,Causalcount);
      });
    },

  }
};
</script>
<style scoped>
.id1 {
  width: 60%;
  padding: 6px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

.id1:focus {
  border: 3px solid #555;
}
.v-text-field{
      width: 100%;
}
</style>
