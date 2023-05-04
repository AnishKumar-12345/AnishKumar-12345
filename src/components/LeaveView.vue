<template>
    <div>
        <v-row class="pl-0 pr-0" >
        <v-col
          cols="4"
      sm="5"
      md="3">

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
                  label="Please Select Month"
                  class="pr-1"
                  v-bind="attrs"
                  v-on="on"
                  dense
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" type="month" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
        </v-col>
         <v-col
          cols="4"
      sm="5"
      md="3">
  <v-select
  :items="employeelist"
  label="select employee"
  v-model="selected"
  outlined
  dense>

  </v-select>
         </v-col>
   <v-col
          cols="4 text-left"
      sm="5"
      md="3">

    <v-btn @click="getAttendanceView(selected)" style="background:red;color:white">Retrieve</v-btn>
        </v-col>
        </v-row>
         <v-data-table
           v-show="this.attendanceList != ''"
                :headers="headers"

                :items="this.attendanceList"
                class="elevation-1"

              >

              </v-data-table>

    </div>
</template>
<script>
import servicescall from "../Services";
export default {
     name: "LeaveView",
  mixins: [servicescall],
    data(){
        return{
            date: new Date().toISOString().substr(0, 7),
         menu: false,
         modal: false,
         valid: false,
         snackbar: false,
        selected: "",
         month: "",
         year: "",
         sal: "",
         text: "",
         attendanceList:[],
        employeelist: [],
         headers: [


        { text: "Employee Name", value: "empName" },
        { text: "Leave Name", value: "leaveName" },
         { text: "Supervisor Name", value: "supervisorName" },
          { text: "Status", value: "status" },

      ],
        }
    },
    mounted(){
         this.getList();
    },

    methods:{
          getList() {
      this.getlistOfEmployees().then(response => {
        console.log("Get All employee satya", response.data.Employee);
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
     getAttendanceView(selected) {

      this.month = this.date.substring(5, 7);
      this.year = this.date.substring(0, 4);
 var employeeId= selected;
      //   var reqJSON = this.user;

      this.LeaveView(
       employeeId,

        this.month,
        this.year,

      )
        .then(response => {
          console.log("In post", response);
          if (response.status == 200) {
             this.attendanceList=[]
//this.attendanceList= response.data.Attendance;
                   for (var i = 0; i < response.data.LeaveReqView.length; i++) {
                    this.attendanceList.push(response.data.LeaveReqView[i]);
                       console.log("Get All Attendance", this.attendanceList);
                   }

            this.text = response.data.message;
            this.snackbar = true;


          } else {
            this.text = response.data.message;
            this.snackbar = true;
          }
        })
        .then(() => {});
    }
    }
}
</script>
