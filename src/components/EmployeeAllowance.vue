<template>
  <div>
    <div>
      <v-form
        @submit.prevent="SaveBranch"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-row class="pl-0 pr-0">
          <v-col cols="12" md="3">
            <v-select
              :items="this.employeelist"
              label="Select Employee No"
              v-model="selected"
              dense
              outlined
            ></v-select>
</v-col>
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
                  label="Picker in From"
                  outlined
                  dense
                  readonly
                  v-bind="attrs"
                  v-on="on"
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
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              :return-value.sync="date1"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date1"
                  label="Picker in To"
                  outlined
                  dense
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date1" type="month" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu1 = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu1.save(date1)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
</v-col>
<v-col cols="12" md="3">
            <v-text-field
              label="Enter Value"
              v-model="EmployeeAllowanceModel.value"
              dense
              outlined
            ></v-text-field>
</v-col>
<v-col cols="12" md="3">
            <v-select
              :items="this.Allowancesdata"
              label="Select Allowance Name"
              v-model="EmployeeAllowanceModel.allowanceName"
              dense
              multiple
              outlined
            ></v-select>
 </v-col>
<v-col cols="12 text-right" md="12" style="margin-bottom:20px;">
            <v-btn type="submit" style="background:red;color:white">Save</v-btn>
          </v-col>
        </v-row>
      </v-form>
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
  name: "PaySlips",
  mixins: [servicescall],
  data() {
    return {
      snackbar: false,
      text: "",
      date: new Date().toISOString().substr(0, 7),
      date1: new Date().toISOString().substr(0, 7),
      date2: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
      menu1: false,
      modal1: false,
      menu2: false,
      modal12: false,
      selected: "",
      allowancename: "",
      employeeId: "",
      employeelist: [],
      result: [],
      valueData:[],
      Allowancesdata: [],
      employeeallowancearray: [],
      EmployeeAllowanceModel: {
        fromMonth: "",
        fromYear: "",
        toMonth: "",
        toYear: "",
        value: "",
        allowanceName: ""
      }
    };
  },
  components: {},
  mounted() {
    this.getList();
    this.getAllowanceData();
  },
  methods: {
    SaveBranch() {
      this.$refs.form.validate();

      if (this.$refs.form.validate()) {
        this.PostBranch();
      }

      // this.close()
    },
    PostBranch() {
      console.log("Hello regratation", this.value,this.allowancename);
     
      var array = this.EmployeeAllowanceModel.value.split(",");

      for (var i = 0; i < array.length; i++) {
        this.valueData.push(array[i]);
        ;
      }
      
      this.EmployeeAllowanceModel.value = this.valueData;
      var month = this.date.substring(5, 7);
      var year = this.date.substring(0, 4);
      var tomonth = this.date1.substring(5, 7);
      var toyear = this.date1.substring(0, 4);
      this.EmployeeAllowanceModel.fromMonth = month;
      this.EmployeeAllowanceModel.fromYear = year;
      this.EmployeeAllowanceModel.toMonth = tomonth;
      this.EmployeeAllowanceModel.toYear = toyear;
      this.employeeallowancearray.push(this.EmployeeAllowanceModel);
      console.log("arayy", this.employeeallowancearray);

      console.log(
        "1234",
        this.EmployeeAllowanceModel.fromMonth,
        this.EmployeeAllowanceModel.fromYear
      );
      var reqJSON = this.employeeallowancearray;
      console.log("check", reqJSON);
      this.EmployeeAllowancesave(this.selected, reqJSON).then(response => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
          this.EmployeeAllowanceModel = {};
        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },
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

    getAllowanceData() {
      this.getAllowance().then(response => {
        console.log("satya", response);
        if (response.status == "200") {
          console.log("resdata", response.data.Allowances);
          //  this.allBranchNames=response.data
          for (var i = 0; i < response.data.Allowances.length; i++) {
            this.Allowancesdata.push(response.data.Allowances[i].allowanceName);
          }

          console.log("Allowancesdata", this.Allowancesdata);
        }
      });
    }

  }
};
</script>

<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.Total {
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
}

.button {
  background-color: red; /* Green */
  border: none;
  color: black;
  padding: 5px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-bottom: 20px;
}
#td {
  border: 30px solid black;
}

.table-em {
  border: 1px solid;
  border-collapse: collapse;
  width: 100%;
}

.table-em td {
  border: 1px solid;
  border-collapse: collapse;
}

.table-em > td {
  width: 33%;
}

.table-em table {
  width: 100%;
  border: none;
  border-collapse: collapse;
}

/* .table-em table:first-child tr {
  border: none;
}

.table-em table:last-child tr td {
  border-bottom: none;
} */

.table-em table tr > td {
  border-left: none;
}
</style>
