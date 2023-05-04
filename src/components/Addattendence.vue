<template>
  <div id="adminaddattendance">
    <v-card
      style="margin-left: 100px;"
    >
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
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <Attendence></Attendence>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <BluckUpload></BluckUpload>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <div style="padding:10px;">
            <v-row style="margin-top:10px;">
              <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                            :items="this.employeelist"
                            label="Select Employee"
                              :rules="rules"
                           v-model="selected"
                            dense
                            outlined
                          ></v-autocomplete>
              </v-col>
                 <v-col
      cols="4"
      sm="5"
      md="3"
    >
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Select Date"
            readonly
            v-bind="attrs"
            v-on="on"
            dense
             outlined
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          type="month"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false">
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>
              <v-col cols="12 text-left" sm="6" md="4">
                <v-btn @click="getblukapi(selected)" style="background: red;">Retrieve</v-btn>
              </v-col>
            </v-row>
          </div>

          <div style="padding:10px;">
            <v-data-table
              :headers="headers"
              :items="this.result"
              :items-per-page="5"
              class="elevation-1"
            >
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2 white--text" style="padding:4px;border-radius:4px;background:blue;" @click="sendItem(item)">
                  mdi-pencil
                </v-icon>
              </template>
            </v-data-table>
          </div>
          <!-- <button v-show="showText == false" @click="showText = true">
            Add
          </button> -->
         
          <v-row justify="center">
            <v-dialog 
            v-model="dialog"
            persistent
       
            >
              <v-card flat style="padding:40px">
              <v-card-text>
                <v-card-title>
                    <span class="text-h5">USER ATTENDANCE</span><br><br>
                  </v-card-title>
                  <v-container>              
                 <v-form @submit.prevent="SaveAttendence"
                 ref="form"
                  v-model="valid"
                  lazy-validation
                 >
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                       label="First Name"
                            placeholder="First Name"
                             v-model="user.empName"
                              :rules="nameRules"
                              dense
                              outlined>

                      </v-text-field>
                      <v-menu
                          v-model="menu2"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="user.attendanceDay"
                              label="Pick Date"
                              readonly
                              dense
                              outlined
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="user.attendanceDay"
                            @input="menu2 = false"
                          ></v-date-picker>                         
                        </v-menu>
                        <v-text-field label="In Time" type="time" step="1"  v-model="user.inTime" outlined dense>
                          </v-text-field>
                          <v-text-field label="Out Time" type="time" step="1"   v-model="user.outTime" outlined dense>
                          </v-text-field> &nbsp;&nbsp;&nbsp;&nbsp;
                          <v-btn
                           id="bnt1"
                           @click="dialog = false;">
                           Cancel</v-btn>
                          <v-btn 
                           id="bnt2" 
                           type="submit">
                           SAVE</v-btn>                          
                      </v-col>
                    </v-row>
                  </v-form>
                  </v-container>
                <!-- <v-form
                 @submit.prevent="SaveAttendence"
                  ref="form"
                  v-model="valid"
                  lazy-validation>

                  <v-row class="pl-0 pr-0" style="margin-left:400px">
            <v-col cols="12" sm="10" md="8" lg="6">
                      <v-text-field
                       label="First Name"
                            placeholder="First Name"
                             v-model="user.empName"
                              :rules="nameRules"
                              dense
                              outlined>

                      </v-text-field>

                        <v-menu
                          v-model="menu2"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="user.attendanceDay"
                              label="Pick Date"
                              readonly
                              dense
                              outlined
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="user.attendanceDay"
                            @input="menu2 = false"
                          ></v-date-picker>
                        </v-menu>




     <v-text-field label="In Time" type="time" step="1"  v-model="user.inTime" outlined dense></v-text-field>



      <v-text-field label="Out Time" type="time" step="1"   v-model="user.outTime" outlined dense></v-text-field>

                     
                    </v-col>
                  </v-row>
                  <v-btn type="submit" color="blue--white--text">Save</v-btn>
                  <v-btn @click="dialog = false;" color="blue--white--text">Cancel</v-btn>
                </v-form> -->



                <!-- <v-form

                >
                  <div>
                    <v-row style="margin-left: 200px">
                      <v-col cols="12" sm="6" md="4">
                        <v-menu
                          v-model="menu2"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="user.attendanceDay"
                              label="Pick Date"
                              prepend-icon="mdi-calendar"
                              readonly
                              dense
                              outlined
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="user.attendanceDay"
                            @input="menu2 = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                    </v-row>
                  </div>
                  <div>

                    <v-row>
                      <v-col>
                        <label for="fname">In Time </label>

                        <input
                          type="time"
                          step="1"
                          class="id1"
                          v-model="user.inTime"
                        />
                      </v-col>
                      <v-col>
                        <label for="fname">Out Time</label>

                        <input
                          type="time"
                          step="1"
                          class="id1"
                          v-model="user.outTime"
                        />
                      </v-col>
                    </v-row>
                  </div>
                  <v-row>
                    <v-col>
                      <v-btn type="submit" style="background: red;">Save</v-btn>
                    </v-col>
                  </v-row>
                </v-form> -->
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-row>
         
        </v-tab-item>
        <v-tab-item>
          <v-card style="padding:20px 10px 10px 10px;">
            <v-card-text>
              <v-row>
                <v-col cols="12" md="4">
                  <v-autocomplete
                    :items="this.employeelist"
                    label="Select Employee"
                     v-model="selected"
                    dense
                    outlined
                  ></v-autocomplete>
                </v-col>

                 <v-col
      cols="4"
      sm="5"
      md="3"
    >
      <v-menu
        ref="menu"
        v-model="menu1"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date1"
            label="Select Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            dense
             outlined
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date1"
          type="month"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu1 = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date1)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>



                <v-col cols="12 text-left" md="4">
                  <v-btn type="submit" @click="getblukapi(selected)" style="background: red;color:white"> Retrieve

                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col>

                </v-col>
              </v-row>
               <div >
	<v-data-table
    :headers="headers1"
     :items="this.result"
    :items-per-page="5"
    class="elevation-1"
  >
   <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2"   @click="sendItem(item,index)">
          mdi-pencil
        </v-icon>

      </template>
  </v-data-table>
	</div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <v-snackbar :color="activeColor" v-model="snackbar">
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
export default {
  name: "Addattendence",
  mixins: [servicescall],
  components: {
    BluckUpload,
    Attendence,
  },
  data() {
    return {
      dialog:false,
      tabs: null,
      showItem:false,
     user:{
          inTime:"",
          outTime:"",
          attendanceDay:"",
          empName:"",



        },
      headers1: [

          { text: 'EMPLOYEE ID',value:'employeeId'},
          { text: 'IN TIME',value:'inTime' },
           { text: "OUT TIME", value: "outTime", },
           { text: 'TOTAL HOURS ',value:'totalHours'},

           { text: "DATE", value: "attendanceDay", },
        ],

      date: new Date().toISOString().substr(0, 7),

      menu: false,
      modal: false,
      menu2: false,
       date1: new Date().toISOString().substr(0, 7),
      menu1: false,
      modal1: false,
      employeelist: [],
      result:[],
      valid: false,
      showText: false,
      selected: "",
      activeColor:"",
      snackbar: false,
      text: "",
      attendenceid: "",
      headers: [
        { text: "DATE", value: "attendanceDay" },
        //  { text: 'Emp Name',value:'empName'},
        { text: "IN TIME ", value: "inTime" },
        { text: "OUT TIME", value: "outTime" },
        { text: "ACTION", value: "actions" },
      ],
      items: ["Add Attendance", "Bulk Upload", "Attendance Update","Attendance View"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  mounted() {
    this.getAttendence();
    this.getList();
  },
  methods: {
    closeItem(){
      this.showItem=false;
    },
    sendItem(item) {
      console.log("itemdata", item);
      this.attendenceid = item.attendanceId;
      this.user.inTime = item.inTime;
      this.user.outTime = item.outTime;
      this.user.attendanceDay = item.attendanceDay;
      this.user.empName = item.empName;
        // this.user.totalHours=item.totalHours
          // this.user.permissionHours=item.permissionHours
       this.showText=true;  
      this.activefiled = false;
      this.dialog = true;
    },
    SaveAttendence() {
      console.log("json",  this.valid);
      if (this.$refs.form.validate()) {
        this.editedAttendence();
      }
    },
    editedAttendence() {
      console.log("ID222", this.attendenceid);
      var reqJSON = this.user;
        var userData={}
        userData.attendanceDay=this.user.attendanceDay;
         userData.inTime=this.user.inTime;
          userData.outTime=this.user.outTime;
          userData.empName= this.user.empName
          // userData.permissionHours=this.user.permissionHours;
          // userData.totalHours=this.user.totalHours;
          var monthdata = this.date.substring(5,7);
         var yeardata = this.date.substring(0,4);
          console.log("check768",userData ,monthdata,yeardata)
      this.getAttendenceupdate(this.attendenceid,monthdata,yeardata, reqJSON).then((response) => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
          this.activeColor="green"
        } else {
          this.text = response.data.message;
          this.snackbar = true;
          this.activeColor = "red";
        }
      });
    },
    getAttendence() {
      this.geAttendence(this.selected).then((response) => {
        console.log("Get All employee Attendance", response.data.Attendance);

        this.AttendenceDetails = response.data.Attendance;
        console.log("AttendenceDetails", this.AttendenceDetails);
      });
    },
    getList() {
      this.getlistOfEmployees().then((response) => {
        console.log("Get All employee list", response.data.Employee);
        for (var i = 0; i < response.data.Employee.length; i++) {
          this.employeelist.push({
             text: response.data.Employee[i].employeeId+'-'+response.data.Employee[i].firstName,value: response.data.Employee[i].employeeId
            // text: response.data.Employee[i].employeeId,
          });
        }


        console.log("Get All employee list", this.employeelist);
      });
    },
    getblukapi(selected) {
         var monthdata = this.date.substring(5,7);
         var yeardata = this.date.substring(0,4);
         var employeeId = selected;
      console.log("date", monthdata, yeardata, employeeId);
      this.getlistOfAttendence(employeeId,monthdata, yeardata,).then((response) => {
        this.result = response.data.Attendance;

        console.log("In post", this.result);
      });
    },
  },
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
