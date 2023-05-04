<template>
  <div id="adminapplyleave">
    <v-card style="border: 3px; margin-left: 100px; margin-right: 0px">
      <v-toolbar color="cyan" dark flat style="height: -20px">
        <template v-slot:extension>
          <v-tabs v-model="tabs" left>
            <v-tab v-for="item in items" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tabs">
        <v-tab-item style="padding:10px;">
          <v-card-text>
            <v-form
              @submit.prevent="SaveLeave"
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-row class="pl-0 pr-0" style="margin-left:0px">
                <v-col cols="12" md="3">
                  <v-autocomplete
                    :items="this.employeelist"
                    label="Select Employee"
                    v-model="selected"
                    dense
                    outlined
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="3">
                  <v-select
                    :items="leavetype"
                    label="Leave Type"
                    v-model="user.leaveName"
                    dense
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field
                    type="date"
                    v-model="user.startDate"
                    label="Start Date"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field
                    type="date"
                    label="End Date"
                    v-model="user.endDate"
                    dense
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-textarea
                    name="input-7-1"
                    label="Reason"
                    rows="2"
                    v-model="user.shortForm"
                    dense
                    outlined
                  ></v-textarea>
                </v-col>
              </v-row>

              <v-row style="margin-bottom:10px;">
                <v-col cols="12" style="text-align:right">
                  <v-btn style="background-color:red;color:white" type="submit"
                    >Save</v-btn
                  >
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-tab-item>
        <v-tab-item>
          <v-row style="margin-top:20px;margin-left:10px">
            <v-col cols="12" md="4">
              <v-autocomplete
                :items="this.employeelist"
                label="Select Employee"
                v-model="selected"
                dense
                outlined
              ></v-autocomplete>
            </v-col>
            <v-col style="text-align:left;">
              <v-btn
                style="background-color:red;color:white"
                @click="getLeaveByid(selected)"
                >Retrieve</v-btn
              >
            </v-col>
          </v-row>
          <v-data-table
            v-show="this.leavelist != ''"
            :headers="headers"
            :items="this.leavelist"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:item.action="{ item }">
              <v-btn color="success" @click="ApprovedLeave(item)"
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

        <v-tab-item>
          <v-row style="margin-top:20px;margin-left:10px">
            <v-col cols="12" md="4">
              <v-autocomplete
                :items="this.employeelist"
                label="Select Employee"
                v-model="selected"
                dense
                outlined
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" md="4">
              <v-autocomplete
                :items="this.LeavebyStatus"
                label="Select Type"
                v-model="selectedbyStatus"
                dense
                outlined
              ></v-autocomplete>
            </v-col>
            <v-col style="text-align:left;">
              <v-btn
                style="background-color:red;color:white"
                @click="getLeaveBystatus(selectedbyStatus, selected)"
                >Retrieve</v-btn
              >
            </v-col>
          </v-row>
          <v-data-table
            v-show="this.leavelistStatus != ''"
            :headers="headers1"
            :items="this.leavelistStatus"
            :items-per-page="5"
            class="elevation-1"
          >
          </v-data-table>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <v-snackbar color="green" v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
import servicescall from "../Services";
import BluckUpload from "./BluckUpload";
import Attendence from "./Attendence";
export default {
  name: "Applyleave",
  mixins: [servicescall],
  components: {
    BluckUpload,
    Attendence
  },
  data() {
    return {
      tabs: null,
      AttendenceDetails: [],
      nowDate: new Date().toISOString().slice(0, 10),
      leavetype: ["Sick", "Casual"],

      Accepted: "APPROVED",
      Rejected: "REJECTED",
      selectedbyStatus: "",
      selected: "",
      dialogDelete: false,

      headers: [
        { text: "LEAVE TYPE", value: "leaveName" },
        { text: "NAME", value: "empName" },
        { text: "SUPERVISOR NAME", value: "supervisorName" },
        { text: "START DATE", value: "startDate" },
        { text: "END DATE", value: "endDate" },
        { text: "REASON ", value: "shortForm" },
        { text: "STATUS", value: "status" },
        { text: "ACTIONS", value: "action", sortable: false, align: "center" }
      ],
      headers1: [
        { text: "LEAVE NAME", value: "leaveName" },
        { text: "SUPERVISOR NAME", value: "supervisorName" },
        { text: "START DATE", value: "startDate" },
        { text: "END DATE", value: "endDate" },
        { text: "REASON ", value: "shortForm" },
        { text: "STATUS", value: "status" }
      ],

      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      //   date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      // menu: false,
      // modal: false,
      // menu2: false,
      //  menu1: false,
      // modal1: false,
      // menu23: false,
      employeelist: [],
      LeaveType: [],
      result: [],
      leavelist: [],
      leavelistStatus: [],
      valid: false,
      showText: false,
      selected: "",
      userid: "",
      leaveIdresult: "",
      leaveIdresult1: "",

      snackbar: false,
      text: "",
      attendenceid: "",
      user: {
        leaveName: "",
        startDate: "",
        endDate: "",
        shortForm: ""
      },
      jwt: "",
      cancelloading: false,
      successmessage: "",
      errormessage: "",
      loading: null,

      items: ["Apply Leave", "Leave Request", "Approved"],
      items1: ["Approved", "Rejected"],
      LeavebyStatus: ["Approved", "Rejected", "Pending"]
    };
  },
  mounted() {
    this.getList();
    // this.getLeaveAll()
    //this.getLeaveByid()

    this.getLeaveMaster(), (this.jwt = localStorage.getItem("jwt"));
    console.log("jwt", this.jwt);
  },
  methods: {
    SaveLeave() {
      console.log("json", this.user, this.valid);
      this.$refs.form.validate();
      console.log("json", this.user, this.valid);
      this.$refs.form.validate();

      if (this.$refs.form.validate()) {
        this.PostApply();

        if (this.edituser == false) {
        }
        //  else {
        //    console.log("Edited")
        //     this.editedDesig();

        //  }
      }
    },

    ApprovedLeave(item) {
      this.loading = true;
      item.createloading = true;
      var leaveRequestId = item.leaveRequestId;
      var leavetype = item.leaveName;

      this.userid = item.employeeId;
      if (item.leaveName == "Sick") {
        this.leaveid = this.leaveIdresult1;
      } else if (item.leaveName == "Casual") {
        this.leaveid = this.leaveIdresult;
      }
      console.log("leaveRequestId", this.leaveid, leavetype == "Sick");
      console.log("Accepted", this.Accepted);

      this.LeaveApprove(
        leaveRequestId,
        this.Accepted,
        this.userid,
        this.leaveid
      ).then(response => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
          location.reload();
        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },

    RejectedLeave(item) {
      this.loading = true;
      item.createloading = true;
      var leaveRequestId = item.leaveRequestId;
      this.userid = item.employeeId;
      var leavetype = item.leaveName;

      this.userid = item.employeeId;
      if (item.leaveName == "Sick") {
        this.leaveid = this.leaveIdresult1;
      } else if (item.leaveName == "Casual") {
        this.leaveid = this.leaveIdresult;
      }

      console.log("leaveRequestId", item.leaveRequestId);
      console.log("Rejected", this.Rejected);

      this.LeaveRejected(
        leaveRequestId,
        this.Rejected,
        this.userid,
        this.leaveid
      ).then(response => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
          location.reload();
        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },

    PostApply() {
      console.log("startDate", this.user.startDate);
      console.log("endDate", this.user.endDate);
      var reqJSON = this.user;
      if (this.user.leaveName == "Sick") {
        this.leaveid = this.leaveIdresult1;
      } else if (this.user.leaveName == "Casual") {
        this.leaveid = this.leaveIdresult;
      }
      console.log("check", this.leaveid, reqJSON);
      this.ApplyReq(this.selected, this.leaveid, reqJSON).then(response => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },

    getList() {
      this.getlistOfEmployees().then(response => {
        console.log(
          "Get All employee satya",
          response.data.Employee[0].employeeId
        );
        for (var i = 0; i < response.data.Employee.length; i++) {
          this.employeelist.push({
            //text: response.data.Employee[i].employeeId,
            text:
              response.data.Employee[i].employeeId +
              "-" +
              response.data.Employee[i].firstName,
            value: response.data.Employee[i].employeeId
          });
        }

        //this.user = response.data.Employee;
        console.log("Get All employee list", this.employeelist);
      });
    },
    getLeaveAll() {
      console.log("Get All Company");
      this.getLeaveDetails().then(response => {
        console.log(
          "Get All Companysatya",
          response.Leave[0].status == "Approved"
        );

        for (var i = 0; i < response.Leave.length; i++) {
          if (response.Leave[i].status == "Approved") {
            this.result.push(response.Leave[i]);
            console.log("Get All Company11", this.result);
          }
        }
      });
    },
    getLeaveByid() {
      this.getleave(this.selected).then(response => {
        console.log("Get All employee list", response.data.Leave);
        for (var i = 0; i < response.data.Leave.length; i++) {
          if (response.data.Leave[i].status == "PENDING") {
            this.leavelist.push(response.data.Leave[i]);
            console.log("Get All Company11", this.leavelist);
          }
        }

        //this.leavelist = response.data.Leave;
        console.log("Get leave", this.leavelist);
      });
    },
    getLeaveBystatus() {
      console.log("Based on Status:", this.selectedbyStatus, this.selected);
      this.LeavesByStatus(this.selectedbyStatus, this.selected).then(
        response => { 
          console.log("Get All employee list", response.data.LeaveRequest);
          this.leavelistStatus = response.data.LeaveRequest;

          console.log("Get leave", this.leavelist);
        }
      );
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
    }
  }
};
</script>
<style scoped>
.v-text-field {
  width: 100%;
}
/* .v-list {
  display: block;
  padding: 8px 0;
  position: static;
  margin-top: 63px;
} */
</style>
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
</style>
