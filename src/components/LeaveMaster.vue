<template>
<div id="adminleavemaster">
  <v-card style="margin-left:100px;margin-right:0px;">
    <v-toolbar
      color="cyan"
      dark
      flat
    >


      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="white"></v-tabs-slider>

          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item style="padding:10px;"
      >

                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #e4e6e4;
                    margin-bottom: 5px;
                  "
                >
                  <h2 style="font-weight: 600; font-size: 16px; color: black;margin-top:10px;margin-bottom:10px;margin-left:10px">
                     LEAVE MASTER
                  </h2>

                  <v-icon
                  class=" mr-3 icn"
                    v-if="activefiled == false"
                    @click="activefiled = !activefiled"
                    >mdi-plus
                  </v-icon>
                  <v-icon
                  class=" mr-3 icn"
                    v-if="activefiled == true"
                    @click="closeLeavedata()"
                    >mdi-close
                  </v-icon>
                </div>


                <div v-if="activefiled == false" class="overView">
                  <v-data-table
                    :headers="MasterHeaders"
                    :items="this.allLeaveMaster"
                    class="elevation-1"
                  >
                    <template v-slot:item.actions="{ item }">
                      <v-icon small class="mr-2 white--text" style="padding:4px;border-radius:4px;background:blue;" @click="sendItem(item)">
                        mdi-pencil
                      </v-icon>
                    </template>

                  </v-data-table>
                </div>

                <div v-if="activefiled == true">
                  <v-form
                    @submit.prevent="saveVendor"
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-container>
                      <v-row style="margin-right: -15 px; margin-left: -15 px">
                        <v-col cols="12" md="4">
                          <!-- <v-text-field
                            label="Leave Type"
                            placeholder="Leave Type"
                          :rules="LeaveType"
                            v-model="user.leaveType"

                            dense

                            outlined
                          ></v-text-field> -->
                           <v-select
                            :items="leaveTypedata"
                             label="Leave Type"
                            placeholder="Leave Type"




                           :rules="LeaveType"
                            v-model="user.leaveType"

                            dense

                            outlined
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="4">
                           <v-select
                            :items="carryForwarddata"
                             label="Carry Forward"
                            placeholder="Carry Forward"
                            :rules="CarryForward"
                            v-model="user.carryForward"

                            dense

                            outlined
                          ></v-select>

                        </v-col>
                         <v-col cols="12" md="4">
                          <v-text-field
                            label="Period"
                            placeholder="Period"

                            v-model="user.period"
                             :rules="Period"
                            dense

                            outlined
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Count"
                            placeholder="Count"
                           :rules="Count"
                            v-model="user.count"

                            dense

                            outlined
                          ></v-text-field>
                        </v-col>

                      </v-row>
                      <v-row>
                        <v-col cols="12 text-right">
                          <v-btn type="submit" style="background: red;color:white"
                            >Save</v-btn
                          >
                        </v-col>
                        <v-col cols=""> </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </div>

                <!-- Edit the Leave Master -->

                <v-row>
                  <v-dialog
                  v-model="dialog"
                  persistent
                  max-width="600px"
                  >
                    <v-card>
                      <v-card-text>
                        <v-card-title>
                    <span class="text-h5 ml-5">LEAVES</span><br><br>
                  </v-card-title>
                        <v-form
                    @submit.prevent="saveVendor"
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-container>
                      <v-row style="margin-right: -15 px; margin-left: -15 px">
                        <v-col cols="12" md="4">
                          <!-- <v-text-field
                            label="Leave Type"
                            placeholder="Leave Type"
                          :rules="LeaveType"
                            v-model="user.leaveType"

                            dense

                            outlined
                          ></v-text-field> -->
                           <v-select
                            :items="leaveTypedata"
                             label="Leave Type"
                            placeholder="Leave Type"




                           :rules="LeaveType"
                            v-model="user.leaveType"

                            dense

                            outlined
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="4">
                           <v-select
                            :items="carryForwarddata"
                             label="Carry Forward"
                            placeholder="Carry Forward"
                            :rules="CarryForward"
                            v-model="user.carryForward"

                            dense

                            outlined
                          ></v-select>

                        </v-col>
                         <v-col cols="12" md="4">
                          <v-text-field
                            label="Period"
                            placeholder="Period"

                            v-model="user.period"
                             :rules="Period"
                            dense

                            outlined
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Count"
                            placeholder="Count"
                           :rules="Count"
                            v-model="user.count"

                            dense

                            outlined
                          ></v-text-field>
                        </v-col>

                      </v-row>
                      <v-row>
                        <v-col cols="12 text-right">
                          <v-btn @click="dialog=false" id="bnt1"
                            >Cancel</v-btn>
                          <v-btn type="submit" id="bnt2"
                            >Save</v-btn>                          
                        </v-col>
                        <v-col cols=""> </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </v-row>








     <v-snackbar :color="activeColor" v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>


      </v-tab-item>

      <v-tab-item style="padding:10px;">
          <v-data-table
                    :headers="DeativeHeaders"
                    :items="this.AllDeative"
                    class="elevation-1"
                  >

                    <template v-slot:item.actions1="{ item }">
                      <!-- <v-icon small class="mr-2" @click="sendItem(item)">
                        mdi-pencil
                      </v-icon> -->
                      <v-btn
                color="red
              "
              dense
              small
              @click="Activemaster(item)"

                >Active</v-btn
              >
                    </template>
                  </v-data-table>
                  <v-snackbar :color="activeColor" v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
      </v-tab-item>
       <v-tab-item style="padding:10px;">
          <v-data-table
                    :headers="ActiveHeaders"
                    :items="this.AllActive"
                    class="elevation-1"
                  >
                    <template v-slot:item.actions="{ item }">
                      <!-- <v-icon small class="mr-2" @click="sendItem(item)">
                        mdi-pencil
                      </v-icon> -->
                      <v-btn
                color="red"
              @click="Deactivemaster(item)"
               dense
              small
                >Deactive</v-btn
              >
                    </template>
                  </v-data-table>

                  <v-snackbar :color="activeColor" v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</div>
</template>

<script>
import servicescall from "../Services";
  export default {
    name: "LeaveMaster",
  mixins: [servicescall],
    data () {

      return {
        dialog:false,
        tab: null,
        items: [
          'Leave Master', 'Deactive List', 'Active List',
        ],
         leaveTypedata: [
          'Sick', 'Casual',
        ],
         carryForwarddata: [
          'Yes', 'No',
        ],
         count: 1,
      activeComponent: false,
      activefiled: false,
      activefiled1: true,
      activefiled2: true,
      valid: false,
      generaldata: [],
      edituser:false,
snackbar: false,
activeColor:"",
      text: "",
       user: {

      leaveType :"",
      carryForward: "",
      period: "",
      count:""

      },
      MasterHeaders: [

        { text: "LEAVE ID", value: "leaveId" },
        { text: "LEAVE TYPE", value: "leaveType" },
        { text: "CARRY FORWARD", value: "carryForward" },
        { text: "PERIOD", value: "period" },
        { text: "COUNT", value: "count" },
        { text: "ACTION", value: "actions", sortable: false },


      ],
      DeativeHeaders: [

        { text: "LEAVE ID", value: "leaveId" },
        { text: "LEAVE TYPE", value: "leaveType" },

        { text: "STATUS", value: "status" },


         { text: "ACTION", value: "actions1", sortable: false },
      ],
         ActiveHeaders: [

        { text: "LEAVE ID", value: "leaveId" },
        { text: "LEAVE TYPE", value: "leaveType" },

        { text: "STATUS", value: "status" },
        { text: "ACTION", value: "actions", sortable: false },


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

        LeaveType: [
           (v) => !!v || " Leave Type  is required",
       ],
       CarryForward: [
           (v) => !!v || " Carry Forward  is required",
       ],
       Period: [
        (v) => !!v || "Period  is required",
        (v) => v.length <= 30 || "Period allows below 30 characters only",
        // v => /[^a-z ]*$/gmi || 'Name must be characters',
        (v) =>/^(?![ .]+$)[a-zA-Z .]*$/.test(v) || "Period must be characters",
      ],
       Count: [
        (v) => !!v || "Count is required",
        (v) => /^[0-9]+$/.test(v) || "Only numbers are accepted",
        (v) =>
          (v && v.length <= 3 ) || "Count numbers must be 3 digits",
      ],
      //  Period: [
      //      (v) => !!v || " Period  is required",
      //  ],
      //  Count: [
      //      (v) => !!v || " Count  is required",
      //  ],
      allLeaveMaster: [],
      AllDeative:[],
      AllActive:[],


      }
    },
     mounted() {
    this.getLeaveMaster();
    this.getDeativeDetails();
    this.getActiveDetails();
  },
    methods: {
      closeLeavedata(){
        this.user={};
      this.activefiled=false;
      },
    // add the vendor

    saveVendor() {



      this.$refs.form.validate();

      if (this.$refs.form.validate()) {



         if(this.edituser==false){
           this.PostMasteradd();

         }


         else{
             this.editedDesig();
         }
      }

      // this.close()
    },

    sendItem(item) {
      this.id = item.leaveId;
      console.log("Item2", item);
      this.user.leaveType = item.leaveType;
      this.user.carryForward = item.carryForward;
      this.user.period = item.period;
      this.user.count = item.count;


      // this.activefiled = true;
                this.edituser=true;
      this.dialog=true;

    },
    editedDesig() {
      console.log("ID", this.id, this.result);
      var reqJSON = this.user;
      this.getupdateLeaveMaster(this.id, reqJSON).then((response) => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
            this.getLeaveMaster();
          this.$refs.form.reset();
          location.reload()
             this.activefiled = true;
             this.activeColor="green"
        } else {
          this.text = response.data.message;
          this.snackbar = true;
          this.activeColor="red"
        }
      });
    },

    // post API calls

    PostMasteradd() {
      console.log("1234", this.user);
      var reqJSON = this.user;
      console.log("check", reqJSON);
      this.leavemaster(reqJSON)
        .then((response) => {
          console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
            this.$refs.form.reset();
             this.activefiled = true;
               this.getLeaveMaster();
                 location.reload()

        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
        })
        .then(() => {});
    },


      Deactivemaster(item) {

            var leaveRequestId=item.leaveId

         console.log("Deativelist",item,leaveRequestId)

      this.deactiveLeavemaster(leaveRequestId).then(response => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
           this.getActiveDetails();
           location.reload()

        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },
   Activemaster(item) {

            var leaveRequestId=item.leaveId

         console.log("Deativelist",item,leaveRequestId)

      this.activeLeavemaster(leaveRequestId).then(response => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
           this.getDeativeDetails();
            location.reload()

        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },
    //GET API Calls
    getLeaveMaster() {
      console.log("Get All LeaveMaster");
      this.getleaveMasterDetails().then((response) => {
        console.log("Get All LeaveMaster", response);
        this.allLeaveMaster = response.data.LeaveMaster;
        console.log("Get All LeaveMaster", this.allLeaveMaster);
      });
    },
     getDeativeDetails() {
      console.log("Get All LeaveMaster");
      this.getleaveDeativeDetails().then((response) => {
        console.log("Get All LeaveMaster", response);
        this.AllDeative = response.data.LeaveMaster;
        console.log("Get All Deativedetails", this.AllDeative);
      });
    },
    getActiveDetails() {
      console.log("Get All LeaveMaster");
      this.getleaveActiveDetails().then((response) => {
        console.log("Get All LeaveMaster", response);
        this.AllActive = response.data.LeaveMaster;
        console.log("Get All Ativedetails", this.AllActive);
      });
    },
  },
  }
</script>

<style scoped>
.v-list {
    display: block;
    padding: 8px 0;
    position: static;
   margin-top: 63px;
}
.icn{
  border-radius: 20px;
  color: black;
  width: 35px;
  margin: 5px;
  background-color: blue;
  color: rgb(255, 255, 255);
}
.icn:hover{
  background-color: rgb(30, 198, 12);
  color: rgb(255, 255, 255);
}
#bnt1{
  border: 2px solid rgb(255, 74, 14);
  border-radius: 20px;
  background-color: white !important;
  color: rgb(255, 74, 14) !important;
  width: 100px;
  height: 40px;
  font-weight: bold;
}
#bnt1:hover{
  background: rgb(255, 74, 14) !important;
  color: white !important;
 
}
#bnt2{
  border: 2px solid rgb(64, 209, 28);
  border-radius: 20px;
  background-color: white !important ;
  color: rgb(64, 209, 28);
  width: 100px;
  height: 40px;
  font-weight: bold;
  margin: 15px;
}
#bnt2:hover{
  background: rgb(64, 209, 28) !important;
  color: white;
}
</style>
