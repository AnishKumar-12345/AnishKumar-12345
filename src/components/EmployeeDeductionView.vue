<template>
  <div>
    <div>
      <v-row>
        <v-col cols="4" sm="5" md="3">
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
                prepend-icon="mdi-calendar"
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
        <v-col cols="4" sm="5" md="3">
          <v-select
            :items="this.employeelist"
            label="Select Employee No"
            v-model="selected"
            dense
            outlined
          ></v-select>
        </v-col>
        <v-col cols="4 text-left" sm="5" md="3">
          <v-btn
            @click="getblukapi(selected)"
            style="background:red;color:white"
            >Retrieve</v-btn
          >
        </v-col>
      </v-row>

      <div>
        <v-data-table
          :headers="headers1"
          :items="this.result"
          :items-per-page="5"
          class="elevation-1"
        >
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import servicescall from "../Services";
export default {
  name: "EmployeeDeductionView",
  mixins: [servicescall],
  data() {
    return {
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,

      selected: "",
      employeeId: "",
      employeelist: [],
      result: [],
      headers1: [
        { text: "Id", value: "employeeId", sortable: true },
        { text: "Deduction Name", value: "deductionName" },
        { text: "From Year", value: "fromYear" },
        { text: "To Year", value: "toYear" },
        { text: "From Month", value: "fromMonth" },
        { text: "To Month", value: "toMonth" },

        { text: "Value", value: "value" }
      ]
    };
  },
  components: {},
  mounted() {
    this.getList();
  },
  methods: {
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
        console.log("Get All employee list123", this.employeelist);
      });
    },
    getblukapi(selected) {
      var month = this.date.substring(5, 7);
      var year = this.date.substring(0, 4);
      var employeeId = selected;
      console.log("date", month, year, employeeId);
      this.getDeductionView(employeeId, month, year).then(response => {
        this.result = response.data.EmployeeDeductions;

        console.log("In post", this.EmployeeDeductions);
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
