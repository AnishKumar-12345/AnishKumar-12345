<template>
  <div id="uattendance">

    <v-card
      width="90%" style="margin-left:110px;margin-top:20px;"
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
        <!-- <v-tab-item>
          <v-card flat>
            <v-card-text>
              <UserAddAttendence></UserAddAttendence>
            </v-card-text>
          </v-card>
        </v-tab-item> -->


        <v-tab-item>
          <v-card style="padding:10px;">
            <v-card-text>
              <v-row>
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
            prepend-icon="mdi-calendar"
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
            @click="menu = false"
          >
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



                <v-col cols="12" md="4" style="text-align:left;">
                  <v-btn style="background:red;color:white" type="submit" @click="getblukapi()">Retrieve

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
        <v-icon small class="mr-2"   @click="sendItem(item)">
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
import UserAddAttendence from "./UserAddAttendence";
import Usermenu from "./Usermenu";
export default {
  name: "UserAttendenceview",
  mixins: [servicescall],
  components: {
    BluckUpload,
    UserAddAttendence,
    Usermenu
  },
  data() {
    return {
      tabs: null,
      AttendenceDetails: [],
      monitems:["Janury","February","March","April","May","June","July","August","September","October","November","December"],
      yearitems:["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030"],
      user: {
        inTime: "",
        outTime: "",
        attendanceDay: "",
      },
      headers1: [

          { text: 'Employee Id',value:'employeeId'},

          { text: 'In Time',value:'inTime' },
           { text: "Out Time", value: "outTime", },
           { text: 'Total Hours ',value:'totalHours'},

           { text: "Date", value: "attendanceDay", },
        ],

      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
      menu2: false,
      employeelist: [],
      result:[],
      valid: false,
      showText: false,

       userid:"",

      snackbar: false,
      text: "",
      attendenceid: "",
      headers: [
        { text: "Date", value: "attendanceDay" },
        //  { text: 'Emp Name',value:'empName'},
        { text: "In Time ", value: "inTime" },
        { text: "Out Time", value: "outTime" },
        { text: "Action", value: "actions" },
      ],
      items: [ "Attendance View","","","","","","","","","","",],

    };
  },
  mounted() {

      this.userid =localStorage.getItem('id')
    this.getList();
  },
  methods: {

    getList() {
      this.getlistOfEmployees().then((response) => {
        console.log("Get All employee list", response.data.Employee);
        for (var i = 0; i < response.data.Employee.length; i++) {
          this.employeelist.push({
            text: response.data.Employee[i].employeeId,
          });
        }

        console.log("Get All employee list", this.employeelist);
      });
    },
    getblukapi() {
         var monthdata = this.date.substring(5,7);
         var yeardata = this.date.substring(0,4);
         var employeeId = this.userid;
      console.log("date", monthdata, yeardata, employeeId);
      this.getAttendenceView(employeeId, monthdata,yeardata).then((response) => {
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

</style>
