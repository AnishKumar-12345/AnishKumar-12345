<template>
  <div data-app>
    <v-card>
      <v-toolbar color="cyan" dark flat height="10px">
        <template v-slot:extension>
          <v-tabs v-model="tab" align-with-title>
            <v-tabs-slider color="white"></v-tabs-slider>

            <v-tab v-for="item in items" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <AttendanceView></AttendanceView>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <LeaveView></LeaveView>
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

import AttendanceView from "./AttendanceView";
import LeaveView from "./LeaveView";





import XLSX from "xlsx";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
export default {
  name: "PayRegisterView",
  mixins: [servicescall],
  components: {
    
    AttendanceView,
    LeaveView,
    
  },
  data() {
    return {
      allowanceItem: ["Fixed ", "Percentage"],
      deductionItem: ["Fixed ", "Percentage"],
      date: new Date().toISOString().substr(0, 7),
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
      tab: null,
      snackbar: false,
      text: "",
      employeelist: [],
      employeelist1: [],
      search: "",
      itemDetails: ["City Allowance", "HRA", "Conveyance", "PF", "PT"],
      itemType: ["0", "1"],
      valid: false,
      result: [],
      result1: [],
      excelData: [],
      attendanceList: [],

      dialog: false,
      dialogDelete: false,
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
     

     
      items: [
        "Attendance",
        "Leave",
       
      ],
      

      //downlodexcel
     
      
    };
  },
  

 

 
};
</script>
