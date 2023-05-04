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
       
       
       
        

        <!-- <v-tab-item>
          <v-card flat>
            <v-card-text>
              <PaySlipLineItem></PaySlipLineItem>
            </v-card-text>
          </v-card>
        </v-tab-item> -->
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <payRollGeneration></payRollGeneration>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card>
            <v-card-text>
              <DownloadPaySlip></DownloadPaySlip>
            </v-card-text>
          </v-card>
        </v-tab-item>
      
         <v-tab-item>
          <v-card flat>
            <v-card-text>
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
<v-col cols="12 text-left" md="3">
          <v-btn type="submit" @click="PaySlipLineItem()" style="background:red;color:white">Generate</v-btn>
        </v-col>
      </v-row>

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
import AllowancesView from "./AllowancesView";
import PaySlipLineItem from "./PaySlipLineItem";
import payRollGeneration from "./payRollGeneration";
import DownloadPaySlip from "./DownloadPaySlip";





import PaySlips from "./PaySlips";
import GeneratePdf from "./GeneratePdf";
import XLSX from "xlsx";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
export default {
  name: "PayrollView",
  mixins: [servicescall],
  components: {
    PaySlips,
    GeneratePdf,

    PaySlipLineItem,
    payRollGeneration,
    DownloadPaySlip,
    
    
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
      allowanceNameRule: [
        v => !!v || "Allowance Name is required",

        v => /^(?![ .]+$)[a-zA-Z .]*$/.test(v) || "Allowance must be characters"
      ],
      deductionNameRule: [
        v => !!v || "Deduction Name is required",

        v => /^(?![ .]+$)[a-zA-Z .]*$/.test(v) || "Deduction must be characters"
      ],

      headers1: [
        { text: "Id", value: "allowanceId", sortable: true },
        { text: "Allowance Name", value: "allowanceName" },
        { text: "Allowance Type", value: "allowanceType" },

        { text: "Value", value: "value" }
      ],
      headers3: [
        { text: "Id", value: "deductionId", sortable: true },
        { text: "Deduction Name", value: "deductionName" },
        { text: "Deduction Type", value: "deductionType" },

        { text: "Value", value: "value" }
      ],

      editedIndex: -1,
      allowancesModel: {
        allowanceName: "",
        allowanceType: ""
      },
      deductionModel: {
        deductionName: "",
        deductionType: ""
      },

      editedVendor: {
        allowanceName: "",
        allowanceType: "",
        active: "",
        startDate: "",
        endDate: "",
        value: ""
      },

      defaultVendor: {
        allowanceName: "",
        allowanceType: "",
        active: "",
        startDate: "",
        endDate: "",
        value: ""
      },
      items: [
       
        // "Pay Roll Generation",
        "Payslip Generate",
        "DownLoad Payslip",
        "Pay Roll Generation"

        // "DownLoad Payslip"
      ],
      singleSelect: false,
      selected: [],
      headers2: [
        { text: "ID", value: "calories" },
        { text: "Employee Name", value: "fat" },
        { text: "Absent Date", value: "carbs" },
        { text: "Absent Days", value: "protein" },
        { text: "LOP Days", value: "iron" }
      ],
      headers: [
        { text: "ID", value: "calories" },
        { text: "Employee Name", value: "fat" },
        { text: "Date", value: "carbs" },
        { text: "Total Days", value: "protein" },
        { text: "Leave Type", value: "iron" },
        { text: "Status", value: "iron" },
        { text: "	Manager", value: "iron" }
      ],

      //downlodexcel
      json_fields: {
        EmployeeId: "",
        EmployeeName: "",
        HRA: ""
      },
      json_data: [
        {
          EmployeeId: "",
          EmployeeName: "",
          HRA: "",
          Conveyance: "",
          CityAllowance: "",
          PfEmployeerContribution: "",
          BasicSalary: "",
          PT: "",
          CasualLeaves: "",
          SickLeaves: "",
          LossOfPays: "",
          Location: "",
          Location: "",
          Date: ""
        }
      ],
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8"
          }
        ]
      ],
      payslipJson: {
        employeeId: "",
        pfEmployeerContributor: "",
        designation: "",
        grade: "",
        aadharNo: "",
        bankName: "",
        dayspaid: "",
        baseBranch: "",
        location: "",
        deputeBranch: "",
        sickLeaves: "",
        casualLeaves: "",
        totalEarnings: "",
        totalDeductions: "",
        lopDeduction: "",
        netPay: "",
        basicSalary: "",
        lop: "",
        hra: "",
        pt: "",
        conveyance: "",
        cityAllowances: ""
      },
      employeeid: "04",
      month: "12",
      year: "2021"
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add Allowance" : "Edit Allowance";
    }
  },

  mounted() {
    this.getList();
    this.getListEmployyedata();
    this.getAllowanceData();
    this.getDeductionData();
  },

  methods: {
    getAllowanceData() {
      this.getAllowance().then(response => {
        this.result = response.data.Allowances;
        console.log("Get All payslipitem", response.data.Allowances);
      });
    },
    getDeductionData() {
      this.getDeduction().then(response => {
        this.result1 = response.data.Deductions;
        console.log("Get All dection", response.data.Deductions);
      });
    },
    generatePdf() {
      const doc = new jsPDF({});
      const imgData = "https://cdn-icons-png.flaticon.com/512/136/136524.png";
      // text is placed using x, y coordinates
      doc.addImage(imgData, "JPEG", 45, 30, 90, 118);
      doc.autoTable({
        html: "#satya"
      });
      doc.save("output.pdf");
    },
    // add the Allowance
    saveAllowances() {
      console.log("json", this.editedVendor, this.valid);
      this.$refs.form.validate();
      console.log("json", this.editedVendor, this.valid);
      if (this.$refs.form.validate()) {
        this.PostAllowance();
      }
    },
    savededuction() {
      console.log("json", this.editedVendor, this.valid);
      this.$refs.form.validate();
      console.log("json", this.editedVendor, this.valid);
      if (this.$refs.form.validate()) {
        this.Postdeduction();
      }
    },

    editVendor(item) {
      var id = item.allowanceName;
      console.log("resid", id);
      this.allowanceId(id).then(response => {
        console.log("res", response.data.Allowances.allowanceName);
        if (response.status == 200) {
          this.editedVendor.allowanceName =
            response.data.Allowances.allowanceName;
          console.log("address", this.editedVendor.allowanceType);
          this.editedVendor.allowanceType =
            response.data.Allowances.allowanceType;
          this.editedVendor.startDate = response.data.Allowances.startDate;
          this.editedVendor.endDate = response.data.Allowances.endDate;
          this.editedVendor.value = response.data.Allowances.value;
          this.editedVendor.active = response.data.Allowances.active;
          console.log("Check edited", this.editedVendor);
          this.editedIndex = this.result.indexOf(item);
          this.dialog = true;
        } else {
          this.text = response.data.message;
        }
      });
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedVendor = Object.assign({}, this.defaultVendor);
        this.editedIndex = -1;
      });
    },

    // post API calls
      PaySlipLineItem() { 

    var year = this.date.substring(0, 4);
      this.AutoSaving(year)
        .then(response => {
          console.log("In post", response);
          if (response.status == 200) {

            this.text = response.data.message;
            this.snackbar = true;

          } else {
            this.text = response.data.message;
            this.snackbar = true;
          }
        })
        .then(() => {
          this.close(), setInterval(this.getVendors(), 3000);
        });
    },

    PostAllowance() {
      console.log("1234", this.editedVendor);
      var reqJSON = this.allowancesModel;
      console.log("check", reqJSON);
      this.allowanceSave(reqJSON)
        .then(response => {
          console.log("In post", response);
          if (response.status == 200) {
            this.getAllowanceData();
            this.text = response.data.message;
            this.snackbar = true;
            this.allowancesModel = {};
            //location.reload();
          } else {
            this.text = response.data.message;
            this.snackbar = true;
          }
        })
        .then(() => {
          this.close(), setInterval(this.getVendors(), 3000);
        });
    },
    Postdeduction() {
      console.log("1234", this.editedVendor);
      var reqJSON = this.deductionModel;
      console.log("check", reqJSON);
      this.deductionSave(reqJSON)
        .then(response => {
          console.log("In post", response);
          if (response.status == 200) {
            this.getDeductionData();
            this.text = response.data.message;
            this.snackbar = true;
            this.deductionModel = {};
            //location.reload();
          } else {
            this.text = response.data.message;
            this.snackbar = true;
          }
        })
        .then(() => {
          this.close(), setInterval(this.getVendors(), 3000);
        });
    },

    //GET API Calls
    // getVendors() {
    //   this.getAllowances().then(response => {
    //     console.log("satya", response);

    //     this.result = response.data.Allowances;

    //     console.log("allowancename", this.allowancename);
    //   });
    // },
    onChange(event) {
      this.file = event.target.files ? event.target.files[0] : null;
      console.log("satya", this.file);
    },
    uploadTodos() {
      console.log("form", this.file);
      var formData = new FormData();
      formData.append("excelfile2", this.file);

      this.Bulkexcel(formData).then(response => {
        console.log("satya", response);
        console.log("In post", response.data);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
          //location.reload();
        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },
    getblukapi() {
      var month = this.date.substring(5, 7);
      var year = this.date.substring(0, 4);

      console.log("date", month, year);
      this.getunsavedPaySlip(month, year).then(response => {
        const link = document.createElement("a");

        // Tell the browser to associate the response data to
        // the URL of the link we created above.
        link.href = window.URL.createObjectURL(new Blob([response.data]));

        // Tell the browser to download, not render, the file.
        link.setAttribute("download", "UnsavedPayRoll.xlsx");

        // Place the link in the DOM.
        document.body.appendChild(link);

        // Make the magic happen!
        link.click();

        console.log("In post", this.result);
      });
    },

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
    getListEmployyedata() {
      this.getlistOfEmployees().then(response => {
        console.log("Get All employee satya", response.data.Employee);
        for (var i = 0; i < response.data.Employee.length; i++) {
          this.employeelist1.push({
            text:
              response.data.Employee[i].employeeId +
              "-" +
              response.data.Employee[i].firstName,
            value: response.data.Employee[i].employeeId
          });
        }

        console.log("Get All employeesatya list", this.employeelist1);
      });
    }
  }
};
</script>
