<template>
    <div>
         <v-form
      @submit.prevent="SaveFile"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-row class="pl-0 pr-0">
        <v-col cols="12" md="3" >

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
<v-col cols="12 text-left" md="3">
          <v-btn type="submit" style="background:red;color:white">Generate</v-btn>
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
     name: "payRollGeneration",
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
        employeelist: [],
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
     SaveFile() {
      console.log("1234", this.user);
      this.month = this.date.substring(5, 7);
      this.year = this.date.substring(0, 4);

      //   var reqJSON = this.user;
      console.log("check", this.selected, this.sal, this.month, this.year);
      this.SavePayslipFile(
        this.selected,

        this.month,
        this.year,

      )
        .then(response => {
          console.log("In post", response);
          if (response.status == 200) {
            this.text = response.data.message;
            this.snackbar = true;
            this.selected=""


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
