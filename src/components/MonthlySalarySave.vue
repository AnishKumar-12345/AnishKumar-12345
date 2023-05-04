<template>
  <div>
    <v-form
      @submit.prevent="SavePayslipLineItem"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-row class="pl-0 pr-0">
        <v-col cols="12" md="3">
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
<v-col cols="12" md="3">
            <v-select
              class="pr-1"
              :items="this.employeelist"
              label="Select Employee No"
              v-model="selected"
              dense
              outlined
            ></v-select>
         </v-col>
<v-col cols="12" md="3">
            <v-text-field
              label="Basic Salary"
                :rules="ItemRules"
              placeholder="Basic Salary"
             class="pr-1"
              v-model="sal"
              dense
              outlined
            ></v-text-field>
           </v-col>
<v-col cols="12 text-left" md="3">
          <v-btn type="submit" style="background:red;color:white">Save</v-btn>
       </v-col>
      </v-row>
    </v-form>
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
  name: "PaySlipLineItem",
  mixins: [servicescall],
  data() {
    return {
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
      salary:["8500"],
      itemDetails1: ["City Allowance", "HRA", "Conveyance", "PF", "PT",],
      itemType1: [{text:'Deduction', value:'false'},
                   {text:"Allowances",value:'true'}],

      user:{
        itemDetails: "",
        itemType: "",
        itemValue: ""
      },
       phoneRules: [
        (v) => !!v || "Salary is required",
        (v) => /^[0-9]+$/.test(v) || "Only number are accepted",

      ],
       ItemRules: [
        (v) => !!v || "Item Value is required",
        (v) => /^[0-9]+$/.test(v) || "Only number are accepted",

      ],
    };
  },
  mounted() {
    this.getList();
    this.getLineItem();
  },
  methods: {
    getList() {
      this.getlistOfEmployees().then(response => {
        console.log("Get All employee satya", response.data.Employee);
        for (var i = 0; i < response.data.Employee.length; i++) {
          this.employeelist.push({

            text:
              response.data.Employee[i].employeeId +
              "-" +
              response.data.Employee[i].firstName,
            value: response.data.Employee[i].employeeId
          });
        }


        console.log("Get All employee list", this.employeelist);
      });
    },
     getLineItem() {
      this.getpaySlipLineItem().then(response => {
        console.log("Get All payslipitem", response.data.ItemDetails);
         for (var i = 0; i < response.data.ItemDetails.length; i++) {
                    this.attendanceList.push(response.data.ItemDetails[i]);
                       console.log("Get All Attendance", this.attendanceList);
                   }




      });
    },
    SavePayslipLineItem() {
      console.log("json", this.user, this.valid);
      this.$refs.form.validate();
      console.log("json", this.user, this.valid);
      this.$refs.form.validate();

      if (this.$refs.form.validate()) {
        this.PostLineItem();

        if (this.edituser == false) {
        }
        //  else {
        //    console.log("Edited")
        //     this.editedDesig();

        //  }
      }
    },
    PostLineItem() {
      console.log("1234", this.user);
      this.month = this.date.substring(5, 7);
      this.year = this.date.substring(0, 4);

      //   var reqJSON = this.user;
      console.log("check", this.selected,  this.month, this.year,this.sal);
      this.MonthsalarySave(
        this.selected,

        this.month,
        this.year,
        this.sal
      )
        .then(response => {
          console.log("In post", response);
          if (response.status == 200) {
            this.text = response.data.message;
            this.snackbar = true;

            this.selected=""
            this.sal=""


          } else {
            this.text = response.data.message;
            this.snackbar = true;
          }
        })
        .then(() => {});
    }
  }
};
</script>
<style scoped>
.v-text-field{
      width: 300px;
}

</style>
