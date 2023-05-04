<template>
  <div>
    <div>
      <!-- <v-container fluid style="margin: 0px auto; background-color: #e7f0f2">
        <v-row style="margin-left: 80px"> -->


            <v-card width="90%" style="margin-left:110px;margin-top:20px;"
            >
              <v-spacer></v-spacer>

              <v-divider height="20px"></v-divider>
              <v-card-text>
                <!-- <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #e4e6e4;
                    margin-bottom: 5px;
                  "
                >
                  <h2 style="font-weight: 800; font-size: 18px; color: black">
                   Leave Audit
                  </h2>
                </div> -->


                <div v-if="activefiled" class="overView">
                  <v-data-table
                    :headers="MasterHeaders"
                     :items=" this.LeaveEntitlement"
                    class="elevation-1"
                  >
                    <template v-slot:item.actions="{ item }">
                      <v-icon small class="mr-2" @click="sendItem(item)">
                        mdi-pencil
                      </v-icon>
                    </template>
                  </v-data-table>
                </div>


              </v-card-text>
            </v-card>


     
      <!-- </v-container> -->
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
export default {
  name: "LeaveMaster",
  mixins: [servicescall],
  data() {
    return {
      count: 1,
      activeComponent: false,
      activefiled: true,
      activefiled1: true,
      activefiled2: true,
      valid: false,
      generaldata: [],
      edituser:false,
      LeaveEntitlement:[],
     snackbar: false,
      text: "",

      user: {

      leaveType :"",
      carryForward: "",
      period: "",
      count:"",
      userid:""

      },
      MasterHeaders: [
        { text: "Financial Year", value: "financialYear" },
        { text: "Leave Type", value: "leaveType" },
         { text: "Opening Balance", value: "openingBalance" },
        { text: "Leave Credited", value: "leavesCredited" },
          { text: "Leave Balance", value: "leaveBalance" },
           { text: "Leaves Approved", value: "leavesApproved" },
              { text: "Leaves Awaiting Approval", value: "leavesAwaitingApproval" },








      ],
       nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 30 || "Name allows below 30 characters only",
        // v => /[^a-z ]*$/gmi || 'Name must be characters',
        (v) => /^[A-Za-z]+$/.test(v) || "Name must be characters",
      ],
      Registration:[
         (v) => !!v || "Regtration is is required",
         (v) => /^[A-Za-z0-9]+$/.test(v) || "Name must be characters",
         (v) => v.length <= 21 || "Name allows below 30 characters only",
      ],
       rules: [
           (v) => !!v || " Filed  is required",
       ],
      allLeaveMaster: [],

    };
  },
   mounted() {


     this.userid =localStorage.getItem('id')

   this.getLeaveEntile()
  },
  methods: {








    getLeaveEntile() {
      console.log("Get All LeaveMaster");
      this.getleaveEntilement(this.userid,).then((response) => {
        console.log("Get All Entilement", response.data);
        this.LeaveEntitlement = response.data.LeavesAudit;
        console.log("Get All Entilement", this.LeaveEntitlement);
      });
    },
  },
};
</script>
<style scoped>
.detail-list li:first-child {
  font-weight: 600;
  line-height: 18px;
  color: #07182b;
  font-size: 14px;
}
.overView {
  padding: 10px;
}
.detail-list {
  padding: 10 px 20 px 0;
  min-height: 46 px;
}
ul {
  padding: 0;
  list-style-type: none;
}
ul li {
  list-style-type: none;
}
</style>
