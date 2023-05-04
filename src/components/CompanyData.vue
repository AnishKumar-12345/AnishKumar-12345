<template>
  <div>
    <div>
      <v-container fluid>
        <v-row style="margin-left: 90px">
          <!-- <v-col cols="12" md="2">
            <v-card min-height="100" style="border: 3px dotted blue;">
              <v-file-input
                hide-input
                style="margin-left: 70px"
                prepend-icon="mdi-plus"
              ></v-file-input>
            </v-card>
          </v-col> -->
          <v-col cols="12" md="12"> 
            <v-card
              style="margin: 0px auto; margin-bottom: 20px"
              max-width="100%"
            >
              <!-- <v-divider height="20px"></v-divider> -->
              <v-card-text>
                <div
                  style=" 
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #e4e6e4;
                    margin-bottom: 5px;
                    background-color:#1565c0;
                    color:#fff;
                    height:40px;
                    line-height:20px;
                    text-align:left;
                  "
                >
                  <h2
                    style="font-weight: 600; font-size: 16px; color: rgb(255, 255, 255);
        padding: 10px;"
                  >
                    Company Profile
                  </h2>
                  <h2
                    style="font-weight: 600; font-size: 16px; color: rgb(255, 255, 255);
        padding: 10px;float:right;margin-left:67%;"
                  >
                    Add Company Profile
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
                    @click="closeCompanydata()"
                    >mdi-close
                  </v-icon>
                  <!-- <v-icon
                    style="font-weight: 800; font-size: 22px; color: black"
                    @click="openCard"
                    >mdi-close </v-icon
                  > -->
                </div>
                <!-- <v-divider class="red mt-8"></v-divider> -->
                <div v-if="activefiled == false" class="overView">
                  <!-- {{ alldegnations }} -->
                 
                  <v-data-table
                    :headers="deginationHeaders"
                    :items="this.alldegnations"
                    class="elevation-1"
                  >
                    <template v-slot:item.actions="{ item }">
                        <v-icon small class="mr-2  white--text" @click="sendItem(item)" style="padding:4px;border-radius:4px;background:blue;">
                        mdi-pencil
                      </v-icon> 
           <v-icon small class="mr-2  white--text" style="padding:4px;border-radius:4px;background:red;" @click="deleteCompanydetails(item)">
                        mdi-delete
                      </v-icon>
                    </template>
                    <template v-slot:item.status="{ item }">
                        <v-chip
                          :color="getColor(item.status)"
                          dark
                        >
                          {{ item.status }}
                        </v-chip>
                      </template>
                      <template v-slot:item.workingHours="{ item }">
                        <v-chip
                          :color="getWColor(item.workingHours)"
                          dark
                        >
                          {{ item.workingHours }}
                        </v-chip>
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
                          <v-text-field
                            label="Company Name"
                            placeholder="Company Name"
                            v-model="user.companyName"
                            :rules="nameRules"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Registration Number"
                            v-model="user.registrationNumber"
                            :rules="Registration"
                            dense
                            outlined
                          ></v-text-field> 
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="GST Number"
                            v-model="user.gstNumber"
                            :rules="gstRules"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                          <v-text-field
                            label="TIN Number"
                            v-model="user.tinNumber"
                            :rules="tinRules"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="PAN Number"
                            v-model="user.panNumber"
                            :rules="panRules"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="ESI Number"
                            v-model="user.esiNumber"
                            :rules="esiRules"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="PF Number"
                            v-model="user.pfNumber"
                            :rules="pfRules"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Number Of Branches"
                            v-model="user.numberOfBranches"
                            :rules="branchRules"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Working Hours"
                            v-model="user.workingHours"
                            :rules="hoursRules"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Working Days"
                            v-model="user.workingDays"
                            :rules="dayRules"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-select
                            :items="items"
                            label="Status"
                            v-model="user.status"
                            :rules="stausRules"
                            dense
                            outlined
                          ></v-select>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-btn
                            type="submit"
                            style="background: red;color:white
                          "
                            >Save</v-btn
                          >
                        </v-col>
                        <v-col cols=""> </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <!-- <v-col cols="12" md="3"></v-col> -->
        </v-row>
      </v-container>
    </div>

    <!-- edit company profile -->
    <v-row>
      <v-dialog 
      v-model="dialog"
      persistent
      max-width="600"
      >
        <v-card style="padding:30px">
          <v-card-text>
            <v-card-title><span>EDIT COMPANY PROFILE</span></v-card-title><br><br>
            <v-form
                    @submit.prevent="saveVendor"
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-container>
                      <v-row style="margin-right: -15 px; margin-left: -15 px">
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Company Name"
                            placeholder="Company Name"
                            v-model="user.companyName"
                            :rules="nameRules"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Registration Number"
                            v-model="user.registrationNumber"
                            :rules="Registration"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="GST Number"
                            v-model="user.gstNumber"
                            :rules="gstRules"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                          <v-text-field
                            label="TIN Number"
                            v-model="user.tinNumber"
                            :rules="tinRules"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="PAN Number"
                            v-model="user.panNumber"
                            :rules="panRules"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="ESI Number"
                            v-model="user.esiNumber"
                            :rules="esiRules"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="PF Number"
                            v-model="user.pfNumber"
                            :rules="pfRules"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Number Of Branches"
                            v-model="user.numberOfBranches"
                            :rules="branchRules"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Working Hours"
                            v-model="user.workingHours"
                            :rules="hoursRules"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Working Days"
                            v-model="user.workingDays"
                            :rules="dayRules"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4"> 
                          <v-select
                            :items="items"
                            label="Status"
                            v-model="user.status"
                            :rules="stausRules"
                            dense
                            outlined
                          ></v-select>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-btn @click="dialog=false" id="bnt1">
                            Cancel
                          </v-btn>
                          <v-btn
                            type="submit"                          
                            id="bnt2"
                            >Save
                          </v-btn>                        
                        </v-col>
                        <v-col cols=""> </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>

    <v-dialog v-model="dialogDelete" persistent >
      <v-card rounded="xl" class="pb-4" min-width="450" min-height="150" style="padding:20px;">
        <v-card-title class="justify-center pb-3" style="color:black;"
          >Delete Company Profile</v-card-title
        >
        <v-card-subtitle  style="text-align: center;margin-top:1px;color:black;font-size:15px;"
          >Are you sure want to delete?</v-card-subtitle
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <button
            
           class="bnt1"
            @click="dialogDelete = false"
            >Cancel</button
          >
          <button           
            class="bnt2"
            @click="ConfirmDeleteType"
            >OK</button
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
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

export default {

  name: "PersonalData",
  mixins: [servicescall],
  data() {
    return {
      dialog:false,
      dialogDelete:false,
      id:"",
      items: ["TRUE", "FALSE"],
      count: 1,
      activeComponent: false,
      activefiled: false,
      activefiled1: true,
      activefiled2: true,
      valid: false,
      generaldata: [],
      edituser: false,
      activeColor:"",
      snackbar: false,
      text: "",

      user: {
        companyName: "",
        registrationNumber: "",
        gstNumber: "",
        panNumber: "",
        esiNumber: "",
        pfNumber: "",
        tinNumber: "",
        numberOfBranches: "",
        workingHours: "",
        workingDays: "",
        status: ""
      },
      deginationHeaders: [
        // { text: "Id", value: "desigId" },
        { text: "COMPANY NAME", value: "companyName" },
        { text: "ESI NUMBER", value: "esiNumber" },
        { text: "GST NUMBER", value: "gstNumber" },
        { text: "NUMBER OF BRANCHES", value: "numberOfBranches"},
        { text: "PAN NUMBER", value: "panNumber" },
        { text: "PF NUMBER", value: "pfNumber" },
        { text: "REGISTRATION NUMBER", value: "registrationNumber" },
        { text: "STATUS", value: "status" },
        { text: "TIN NUMBER", value: "tinNumber" },
        { text: "WORKING DAYS", value: "workingDays" },
        { text: "WORKING HOURS", value: "workingHours" },
        { text: "LAST MODIFIED DATE", value: "lastModifiedDate"},
        { text: "ACTION", value: "actions", sortable: false }
      ],
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 30 || "Name allows below 30 characters only",
        // v => /[^a-z ]*$/gmi || 'Name must be characters',
        v => /^(?![ .]+$)[a-zA-Z .]*$/.test(v) || "Name must be characters"
      ],
      Registration: [
        v => !!v || "Registration numbers is required",
        v =>
          /^([A-Za-z]|[0-9]|)+$/.test(v) ||
          "Registration Number must be numbers and characters",
        v =>
          (v && v.length <= 21 && v.length >= 21) ||
          "Number allows below 21 characters only"
      ],
      aadharRules: [
        v => !!v || "Aadhar is required",
        v => /^[0-9]+$/.test(v) || "only numbers are accepted",
        v =>
          (v && v.length <= 12 && v.length >= 12) ||
          "Aadhar must be  12 numbers"
      ],
      panRules: [
        v => !!v || "PAN is required",
        v =>
          /^([A-Za-z]|[0-9]|_)+$/.test(v) ||
          "only numbers and characters are accepted",

        v =>
          (v && v.length <= 10 && v.length >= 10) || "PAN must be  10 numbers"
      ],
      tinRules: [
        v => !!v || "TIN is required",
        v =>
          /^([A-Za-z]|[0-9]|_)+$/.test(v) ||
          "only numbers and characters are accepted",

        v =>
          (v && v.length <= 10 && v.length >= 10) || "TIN must be  10 numbers"
      ],
      gstRules: [
        v => !!v || "GST is required",
        v =>
          /^([A-Za-z]|[0-9])+$/.test(v) ||
          "only numbers and characters are accepted",

        v =>
          (v && v.length <= 15 && v.length >= 15) || "GST must be  15 numbers"
      ],
      pfRules: [
        v => !!v || "PF is required",
        v =>
          /^[[A-Za-z]|[0-9]|[/]]*$/.test(v) ||
          "only numbers and characters are accepted",
        v => (v && v.length <= 20 && v.length >= 20) || "PF must be 20 numbers"
      ],
      esiRules: [
        v => !!v || "ESI is required",
        v => /^[0-9]+$/.test(v) || "only numbers are accepted",
        v => (v && v.length <= 17 && v.length >= 17) || "ESI must be 17 numbers"
      ],
      branchRules: [
        v => !!v || "Branch is required",
        v => /^[0-9]+$/.test(v) || "only numbers are accepted",
        v => (v && v.length <= 2) || "Branch must be  numbers"
      ],
      hoursRules: [
        v => !!v || "Hours is required",
        v => /^[0-9]+$/.test(v) || "only numbers are accepted",
        v => (v && v.length <= 2) || "Hours greater than two numbers"
      ],
      dayRules: [
        v => !!v || "Days is required",
        v => /^[0-9]+$/.test(v) || "only numbers are accepted",
        v => (v && v.length <= 2) || "Days greater than two numbers"
      ],
      stausRules: [
        v => !!v || "Status is required",
        v => /^[A-Za-z]+$/.test(v) || "only characters are accepted"
      ],
      rules: [v => !!v || " Filed  is required"],
      alldegnations: [],
      branchHeaders: []
    };
  },
  mounted() {
    this.getCompanys();
  },
  methods: {
    deleteCompanydetails(item){
      this.id = item.companyId;
      this.dialogDelete = true;
      console.log("Delete  reviewId",   this.id);
    },
    ConfirmDeleteType() {    
    this.dialogDelete = true; 
    console.log("Delete Dates", this.id);
    this.deleteCompanies(this.id).then((response) => {
        console.log(response)
      if (response.status == 200) {
       this.text = response.data.message;
          this.activeColor='';
                    this.activeColor='green';
        this.snackbar = true;
          this.getCompanys();
          this.dialogDelete=false;
      }
       else{
                  this.text=response.data.error;
                   this.snackbar=true
                   this.activeColor='';
                    this.activeColor='red';
                     this.dialogDelete=false;
              }
    });
  },

    getWColor(itm){
      if(itm == 8){
          return 'green';
        }else if(itm < "8"){
          return 'red';
        }else{
          return "#dcbb04"
        }
    },
    getColor (itm) {
      // if (calories > 400) return 'red'
      //   else if (calories > 200) return 'orange'
      //   else return 'green'
        if(itm == true){
          return 'green';
        }else{
          return 'red';
        }
      },
    //close alldesignations
    closeCompanydata(){
      // this.alldegnations=[];
      this.user={};
      this.activefiled=false;
    },
    //open card
    openCard() {
      this.$refs.form.reset();
      //  this.activefile=true
      this.activefiled = true;
      // this.edituser=false;
    },
    // add the vendor

    saveVendor() {
      this.$refs.form.validate();

      if (this.$refs.form.validate()) {
        if (this.edituser == false) {
          this.PostDesig();
        } else {
          this.editedDesig();
        }
      }

      // this.close()
    },

    sendItem(item) {
      this.id = item.companyId;
      console.log("Item2", item);
      this.user.companyName = item.companyName;
      this.user.esiNumber = item.esiNumber;
      this.user.gstNumber = item.gstNumber;
      this.user.registrationNumber = item.registrationNumber;
      this.user.panNumber = item.panNumber;
      this.user.pfNumber = item.pfNumber;
      this.user.tinNumber = item.tinNumber;
      this.user.numberOfBranches = item.numberOfBranches;
      this.user.workingHours = item.workingHours;
      this.user.workingDays = item.workingDays;
      this.user.status = item.status;
      //  this.result.lastModifiedDate=item.lastModifiedDate;
      // this.activefiled = true;
      this.edituser = true;
      this.dialog=true;
      // console.log("Item",this.id)
    },
    editedDesig() {
      console.log("ID", this.id, this.result);
      var reqJSON = this.user;
      this.getCompanyId(this.id, reqJSON).then(response => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
          this.getCompanys();
          location.reload();
          this.activeColor = "green";
        } else {
          this.text = response.data.message;
          this.snackbar = true;
          this.activeColor = "red";
        }
      });
    },

    // post API calls

    PostDesig() {
      console.log("1234", this.user);
      var reqJSON = this.user;
      console.log("check", reqJSON);
      this.companyreg(reqJSON)
        .then(response => {
          console.log("In post", response);
          if (response.status == 200) {
            this.text = response.data.message;
            this.snackbar = true;
            this.getCompanys();
            this.activeColor = "green"
            // location.reload();
            this.user={};
            this.activefiled=false;
          } else {
            this.text = response.data.message;
            this.snackbar = true;
            this.activeColor = "red";
          }
        })
        .then(() => {});
    },

    //GET API Calls
    getCompanys() {
      console.log("Get All Company");
      this.getCompanyDetails().then(response => {
        console.log("Get All Company", response);
        this.alldegnations = response.Company;
        console.log("Get All Company11", this.alldegnations);
      });
    }
  }
};
</script>
<style scoped>
.detail-list li:first-child {
  font-weight: 600;
  line-height: 18px;
  color: #07182b;
  font-size: 14px;
}
.overView {
  padding: 10px;
}
.detail-list {
  padding: 10 px 20 px 0;
  min-height: 46 px;
}
ul {
  padding: 0;
  list-style-type: none;
}
ul li {
  list-style-type: none;
}
.icn{
  border-radius: 20px;
  width: 30px;
  margin: 5px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}
.icn:hover{
  background-color: rgb(255, 74, 14);
  color: rgb(255, 255, 255);
}
.bnt1{
  border: 2px solid rgb(255, 74, 14);
  border-radius: 20px;
  background-color: white ;
  color: rgb(255, 74, 14);
  width: 180px;
  height: 40px;
  font-weight: bold;
}
.bnt1:hover{
  background: rgb(255, 74, 14);
  color: white;
 
}
.bnt2{
  border: 2px solid rgb(64, 209, 28);
  border-radius: 20px;
  background-color: white ;
  color: rgb(64, 209, 28);
  width: 180px;
  height: 40px;
  font-weight: bold;
  margin: 15px;
}
.bnt2:hover{
  background: rgb(64, 209, 28);
  color: white;
}
#bnt1{
  border: 2px solid rgb(255, 74, 14);
  border-radius: 20px;
  background-color: white !important;
  color: rgb(255, 74, 14) !important;
  width: 150px;
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
  width: 150px;
  height: 40px;
  font-weight: bold;
  margin: 15px;
}
#bnt2:hover{
  background: rgb(64, 209, 28) !important;
  color: white;
}
</style>
