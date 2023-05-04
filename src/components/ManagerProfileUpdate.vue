<template>
  <div >
          <v-app-bar app>
      <router-link to="/ManagerDashboard" style="text-decoration: none; color: inherit;">
      <v-row>
        <v-btn icon>
          <v-icon style="color:red;margin-left:20px" size="40">mdi-home</v-icon>
        </v-btn>
      </v-row>
      <!-- <v-row>
        <span style="font-weight: 400; font-size: 12px; color: black;margin-left:20px">Home</span>
      </v-row> -->


      </router-link>
      <v-img class="mx-2" max-height="40" max-width="40" contain></v-img>
        <router-link to="/ManagerDashboard" style="text-decoration: none; color: inherit;">
      <img src="../assets/dizitive2.png" width="180px" alt="dizitiveit.com" />
        </router-link>
    </v-app-bar>
    <Usermenu></Usermenu>
    <v-card width="90%" style="margin-left:110px;margin-top:20px" >
      <v-toolbar color="#1565c0" >
        <v-toolbar-title style="color:#ffffff;">Basic Info</v-toolbar-title>

        <!-- <v-row style="margin-top:10px;margin-left:30px">
          <v-col>

             <v-select
                            :items="this.employeelist"
                            label="Select Employee"

                              :rules="rules"

                           v-model="selected"
                            dense

                            outlined
                          ></v-select>

          </v-col>
          <v-col>
            <v-btn @click="getallApis(selected)" style="background: red;">Retrive</v-btn>
          </v-col>
        </v-row> -->
        <template v-slot:extension>
          <v-tabs v-model="tabs"  background-color="deep-purple accent-4"
      center-active dark>
            <v-tab v-for="tab in tablist" :key="tab">
              {{ tab }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <h1>{{user.superisor}}</h1>
              <v-form
                @submit.prevent="SaveEmployee"
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-container>
                  <v-row style="margin-right: -15px; margin-left: -15px">
                 <v-col cols="12" md="4">
                      <v-text-field
                        label="Employee Id"
                        placeholder="Employee Id"


                        v-model="user.employeeId"
                        :rules="id"

                        dense
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        label="First Name"
                        placeholder="First Name"
                        v-model="user.firstName"
                        :rules="nameRules"


                       dense
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Last Name"
                        placeholder="Last Name"
                        rounded-0
                        :rules="nameRules"

                        v-model="user.lastName"
                        dense
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Phone Number"
                        placeholder="Phone Number"


                        :rules="phoneRules"

                        v-model="user.phoneNumber"
                         dense
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Official Email Id"
                        placeholder="Official Email Id"
                        :rules="emailRules"


                        v-model="user.officialEmailId"
                         dense
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">


                          <v-select
                        :items="Manager"
                        label="Select Supervisor"
                        rounded-0
                        :rules="rules"


                      v-model="superisor"
                         dense
                        outlined
                      ></v-select>
                      <!-- {{this.superisor}} -->
                       <!-- <v-text-field
                            label="Supervisor Name"
                            placeholder="Supervisor Name"

                            v-model="this.superisor"
                            :rules="nameRules"
                            dense

                            outlined
                          ></v-text-field> -->

                    </v-col>

                    <v-col cols="12" md="4">
                      <v-select
                        :items="items"
                        label="Select Gender"

                        :rules="rules"

                        v-model="user.gender"
                         dense
                        outlined
                      ></v-select>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Aadhaar Number"
                        placeholder="Aadhaar Number"
                        rounded-0
                        dense
                        :rules="aadharRules"
                        v-model="user.adharNumber"

                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="PAN Card Number"
                        placeholder="Pan Card Number"
                        rounded-0
                        :rules="panRules"

                        v-model="user.panCardNumber"
                        dense
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Date Of Joining "
                        placeholder="Date Of Joining"
                        rounded-0
                        :rules="rules"

                        v-model="user.dateOfJoining"
                         dense
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Address"
                        placeholder="Present Address"
                        :rules="rules"
                        rounded-0

                        v-model="user.presentAddress"
                         dense
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-select
                        :items="allBranchNames"
                        label="Select Branch"
                        rounded-0
                        :rules="rules"


                        v-model="branchName"
                         dense
                        outlined
                      ></v-select>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-select
                        :items="allDepartName"
                        label="Select Dept"
                        :rules="rules"


                        v-model="deptName"
                        dense
                        outlined
                      ></v-select>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-select
                        :items="allDegiName"
                        label="Select Desig"
                        :rules="rules"

                       dense
                        v-model="desigName"

                        outlined
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-select
                        :items="allRoleNames"
                        label="Select Role"
                        :rules="rules"


                        v-model="roleName"
                        dense

                        outlined
                      ></v-select>
                    </v-col>


                  </v-row>
                  <v-row>
                    <v-col cols="12" style="text-align:right">
                      <v-btn type="submit" style="background: red">Save</v-btn>
                    </v-col>
                    <v-col cols=""> </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <!-- <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-form
                @submit.prevent="Savefamily"
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-container>
                  <v-row style="margin-right: -15 px; margin-left: -15 px">
                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Relation"
                        v-model="employeedetails.relation"
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Name"
                        v-model="employeedetails.name"
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Age"
                        v-model="employeedetails.phoneNumber"
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-btn type="submit" style="background: red">Save</v-btn>
                    </v-col>
                    <v-col cols=""> </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item> -->
        <v-tab-item>
          <v-card>
            <v-card-text>
              <v-form
                @submit.prevent="SaveAdditional"
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-container>
                  <v-row style="margin-right: -15 px; margin-left: -15 px">
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Alternate Number"
                        placeholder="Alternate Number"


                        v-model="Additional.alternateNumber"
                        dense

                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Passport Number"
                        placeholder="Passport Number"


                        v-model="Additional.passportNumber"
                        dense

                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Photo Display"
                        placeholder="Photo Display"


                        v-model="Additional.photoDisplay"
                        dense

                        outlined
                      ></v-text-field>
                    </v-col>

                  </v-row>
                  <v-row>
                    <v-col cols="12" style="text-align:right">
                      <v-btn type="submit" style="background: red">Save</v-btn>
                    </v-col>
                    <v-col cols=""> </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-card-text>
              <v-form
                @submit.prevent="SaveBank"
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-container>
                  <v-row style="margin-right: -15 px; margin-left: -15 px">
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Account Name"
                        placeholder="Account Name"
                        :rules="rules"

                        v-model="bank.accountHolderName"
                        dense

                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Account Number"
                        placeholder="Account Number"
                        :rules="rules"

                        v-model="bank.accountNumber"
                        dense

                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Bank Name"
                        placeholder="Bank Name"
                        :rules="rules"

                        v-model="bank.bankName"
                        dense

                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="IFSC Code"
                        placeholder="IFSC Code"
                        :rules="rules"

                        v-model="bank.ifscCode"
                        dense

                        outlined
                      ></v-text-field>
                    </v-col>
                    <!-- <v-col cols="12" md="4">
                      <v-text-field
                        label="Location"
                        placeholder="Location"
                        :rules="rules"

                        v-model="bank.location"
                        dense

                        outlined
                      ></v-text-field>
                    </v-col> -->
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Branch"
                        placeholder="Branch"
                        :rules="rules"

                        v-model="bank.branchName"
                        dense

                        outlined
                      ></v-text-field>
                    </v-col>
                    <!-- <v-col cols="12" md="4">
                      <v-text-field
                        label="Depute Branch"
                        placeholder="Depute Branch"
                        :rules="rules"

                        v-model="bank.deputeBranch"
                        dense

                        outlined
                      ></v-text-field>
                    </v-col> -->
                    <!-- <v-col cols="12" md="4">
                      <v-text-field
                        label="Owned By"
                        placeholder="Owned By"
                        :rules="rules"

                        v-model="bank.ownedBy"
                        dense

                        outlined
                      ></v-text-field>
                    </v-col> -->
                  </v-row>
                  <v-row>
                    <v-col cols="12" style="text-align:right">
                      <v-btn type="submit" style="background: red">Save</v-btn>
                    </v-col>
                    <v-col cols=""> </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <div style="padding:10px;" >
	<v-data-table
    :headers="headers"
     :items="this.employeedetails"
    :items-per-page="5"
    class="elevation-1"
  >
   <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2"   @click="sendItem(item) " >
          mdi-pencil
        </v-icon>

      </template>
  </v-data-table>
	</div>
  <div style="margin-top:20px;margin-bottom:5px; text-align: right; margin-right:10px;">
   <v-btn v-show="showText==false" @click="showText=true" style="background: red">Add</v-btn>
  </div >
  <div v-show="showText==true">
   <v-card flat>
            <v-card-text>
              <v-form
                @submit.prevent="Savefamily"
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-container>
                  <v-row style="margin-right: -15 px; margin-left: -15 px">
                    <v-col cols="12" md="4">
                       <v-text-field
                        label="Relation"
                        placeholder="Relation"
                        :rules="rules"

                      v-model="familyDetails.relation"
                        dense

                        outlined
                      ></v-text-field>

                    </v-col>

                    <v-col cols="12" md="4">
                       <v-text-field
                        label="Name"
                        placeholder="Name"
                        :rules="rules"

                       v-model="familyDetails.name"
                        dense

                        outlined
                      ></v-text-field>

                    </v-col>
                    <v-col cols="12" md="4">
                       <v-text-field
                        label="Phone Number"
                        placeholder="Phone Number"
                        :rules="rules"

                        v-model="familyDetails.phoneNumber"
                        dense

                        outlined
                      ></v-text-field>

                    </v-col>


                  </v-row>
                  <v-row>
                    <v-col cols="12" style="text-align:right">
                      <v-btn type="submit" style="background: red">Save</v-btn>
                    </v-col>
                    <v-col cols=""> </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
  </div>

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
import Usermenu from "./Usermenu";
export default {
  name: "ManagerProfileUpdate",
  mixins: [servicescall],
   components: {
     Usermenu,
  },
  data() {
    return {
      tabs: null,
      selected: "",
       headers: [

          { text: 'Relation',value:'relation'},
          { text: 'Name ',value:'name'},
          { text: 'PhoneNumber',value:'phoneNumber' },
           { text: "Action", value: "actions", },
        ],
      tablist: ["Employee",  "Additional", "Bank Details","Family Details"],
      items: ["Male", "Female"],
      desigName:"",
      branchName:"",
      superisor:"",
      deptName:"",
      roleName:"",
      valid: false,
      showText: false,

      snackbar: false,
      text: "",
      user: "",
      familyId:"",
      edituser:false,

      allBranchNames: [],
      allRoleNames: [],
      allDegiName: [],
      allDepartName: [],
      Manager:[],
      employeeid: "",
      user: {
        supervisorName: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        officialEmailId: "",
        gender: "",
        adharNumber: "",
        panCardNumber: "",
        dateOfJoining: "",
        presentAddress: "",
      },
      Additional: {
        alternateNumber: "",

        weddingDay: "",
        passportNumber: "",
        photoDisplay: "",

      },
      bank: {
        accountHolderName: "",
        accountNumber: "",
        bankName: "",
        ifscCode: "",
        branchName: "",

        ownedBy: "",
      },

      familyDetails: {
        relation: "",
        name: "",
        phoneNumber: "",
      },
      employeelist: [],
      id: [
        (v) => !!v || " ID  is required",
        (v) => /^[0-9]+$/.test(v) || "only number are accepted",
        // v => /[^a-z ]*$/gmi || 'Name must be characters',
        // (v) => /^[A-Za-z]+$/.test(v) || "Name must be characters",
      ],

       nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 30 || "Name allows below 30 characters only",
        // v => /[^a-z ]*$/gmi || 'Name must be characters',
        (v) =>/^(?![ .]+$)[a-zA-Z .]*$/.test(v) || "Name must be characters",
      ],
      phoneRules: [
        (v) => !!v || "Phone is required",
        (v) => /^[0-9]+$/.test(v) || "only number are accepted",
        (v) =>
          (v && v.length <= 10 && v.length >= 10) || "phone must be  10 number",
      ],
      email: "",
      emailRules: [
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
        aadharRules: [
        (v) => !!v || "Aadhaar is required",
        (v) => /^[0-9]/.test(v) || "Only number are accepted",
        (v) =>(v && v.length <= 12 && v.length >= 12) || "Aadhar must be  12 digits",
      ],
      panRules: [
        (v) => !!v || "PAN is required",
        (v) => /^([A-Za-z]|[0-9]|_)+$/.test(v) || "Only number and characters are accepted",

        (v) =>(v && v.length <= 10 && v.length >= 10) || "PAN must be  10 digits",



      ],
      rules: [(v) => !!v || " Filed  is required"],
    };
  },
  mounted() {
       this.getEmployeeid();
      this.getEmployee();
      this.getAdditional();
        this.getBank();
     this.getBranches(),
     this.getRolebyname(),
    this.getDegibyname(),
    this.getDeptbyname();

    this.getManager()


     this.selected =localStorage.getItem('id')
     console.log("user id",this.selected)

  },
  methods: {


    //post Api calling


    Savefamily() {

      this.$refs.form.validate();

     this.$refs.form.validate();

      if (this.$refs.form.validate()) {


         if(this.edituser==false){
              this.Postfamily();

         }
         else {
           console.log("Edited")
            this.editedDesig();

         }

      }
    },
     reset() {
      this.$refs.form.reset();
    },
     sendItem(item){
             console.log("itemdata",item)
            this.familyId=item.familyDetailsId
            this.familyDetails.name=item.name;
            this.familyDetails.relation=item.relation;
            this.familyDetails.phoneNumber=item.phoneNumber;
             console.log("Item2222", this.familyId)
             this.showText=true
              //this.user.desigName=item.desigId;
          this.activefiled=false;

          this.edituser=true;




      },
      editedDesig(){

          console.log("ID222", this.familyId)
           var reqJSON=this.familyDetails
          this.getfamilyupdate(this.familyId,reqJSON).then((response) => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
          setTimeout(() => {  this.$router.push({name:"ManagerDashboard" }) }, 2000);

        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
      });

      },

    Postfamily() {

      var reqJSON = this.familyDetails;
      console.log("check", reqJSON);
      this.familyReq(this.selected, reqJSON).then((response) => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
          setTimeout(() => {  this.$router.push({name:"ManagerDashboard" }) }, 2000);
          this.getEmployeeid()

        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },
    SaveAdditional() {

      this.$refs.form.validate();
      console.log("json", this.editedVendor, this.valid);
      if (this.$refs.form.validate()) {
        this.Postadditional();
      }
    },

    Postadditional() {
      console.log("1234", this.Additional);
      var reqJSON = this.Additional;
      console.log("check", reqJSON);
      this.getAdditionalupdate(this.selected, reqJSON).then((response) => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
          setTimeout(() => {  this.$router.push({name:"ManagerDashboard" }) }, 2000);

        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },
    SaveEmployee() {
      this.$refs.form.validate();

      if (this.$refs.form.validate()) {
        this.Postemployee();
      }
    },

    Postemployee() {
      console.log("1234", this.desigName,this.branchName,this.deptName,this.roleName,this.superisor);
      var reqJSON = this.user;
      console.log("check", reqJSON);
      this.getemployeeupdate(this.selected, this.superisor,this.desigName,this.branchName,this.deptName,this.roleName, reqJSON).then((response) => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
             setTimeout(() => {  this.$router.push({name:"ManagerDashboard" }) }, 2000);
          this.getEmployee();

        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },
    SaveBank() {
      console.log("json", this.bank, this.valid);
      this.$refs.form.validate();
      console.log("json", this.bank, this.valid);
      if (this.$refs.form.validate()) {
        this.PostBank();
      }
    },

    PostBank() {
      console.log("1234", this.bank);
      var reqJSON = this.bank;
      console.log("check", reqJSON);
      this.getBankupdate(this.selected, reqJSON).then((response) => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
          setTimeout(() => {  this.$router.push({name:"ManagerDashboard" }) }, 2000);

        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },
    //getapi calling
    getEmployeeid() {
          this.selected =localStorage.getItem('id')
      console.log("Get All Employee satya", this.selected);
      this.getFamilyId(this.selected).then((response) => {
        console.log("Get All employee id", response.data.FamilyDetails);

        this.employeedetails = response.data.FamilyDetails;
        console.log("Get All Employee id", this.selected);
      });
    },
    getEmployee() {
          this.selected =localStorage.getItem('id')
      this.getEmployeeId(this.selected).then((response) => {
        console.log("Get All employee id", response.data.Employee);
        this.user = response.data.Employee;
        this.roleName=this.user.roles.roleName
        this.branchName=this.user.branch.branchName
        this.deptName=this.user.department.deptName
        this.desigName=this.user.desg.desigName
          for(var i=0;i<this.Manager.length;i++){
            console.log("check",this.Manager[i].value,this.user.supervisor.employeeId)
              if(this.Manager[i].value==this.user.supervisor.employeeId){
              //  console.log("hello supervisor",this.Manager[i])
                 this.superisor=this.Manager[i];
              }
              else{
                //console.log("else manager",this.Manager,this.user.supervisor.employeeId)
              }
          }
        //this.superisor=this.user.supervisor.employeeId+"--"+this.user.supervisor.firstName
       //console.log("Get All Employee user",  this.roleName=this.user.roles.roleName);
       // console.log("Get All Employee user",  this.branchName=this.user.branch.branchName);
        //console.log("Get All Employee user",  this.deptName=this.user.department.deptName);
       // console.log("Get All Employee user",  this.desigName=this.user.desg.desigName);
       //  console.log("Get All Employee user", this.superisor=this.user.supervisor.employeeId+"--"+this.user.supervisor.firstName);
      });
    },
    getAdditional() {
          this.selected =localStorage.getItem('id')
      this.getAdditionalId(this.selected).then((response) => {
        console.log(
          "Get All employee additional",
          response.data.AdditionalDetails
        );
        this.Additional = response.data.AdditionalDetails;
        console.log("Get All Employee additional", this.user);
      });
    },
    getBank() {
          this.selected =localStorage.getItem('id')
      this.getBankId(this.selected).then((response) => {
        console.log("Get All employee bank", response.data.EmployeeBankDetails);
        this.bank = response.data.EmployeeBankDetails;
        console.log("Get All Employee bank", this.bank);
      });
    },
    // getList() {

    //   this.getlistOfEmployees().then((response) => {
    //     console.log("Get All employee list", response.data.Employee);
    //     for (var i = 0; i < response.data.Employee.length; i++) {
    //       this.employeelist.push({
    //          text: response.data.Employee[i].employeeId+'-'+response.data.Employee[i].firstName,value: response.data.Employee[i].employeeId
    //         // text: response.data.Employee[i].employeeId,
    //       });
    //     }


    //     console.log("Get All employee list", this.employeelist);
    //   });
    // },
    getBranches() {
      this.getBranchesNames().then((response) => {
        console.log("satya", response);
        if (response.status == "200") {
          console.log("resdata", response.data.branchNames);

          for (var i = 0; i < response.data.branchNames.length; i++) {
            this.allBranchNames.push(response.data.branchNames[i]);
          }


          console.log("allBranchNames", this.allBranchNames);
        }
      });
    },
    getRolebyname() {
      this.getRolename().then((response) => {
        console.log("satya", response);
        if (response.status == "200") {
          console.log("resdata", response.data.roleNames);

          for (var i = 0; i < response.data.roleNames.length; i++) {
            this.allRoleNames.push(response.data.roleNames[i]);
          }


          console.log("allRoleNames", this.allRoleNames);
        }
      });
    },
    getDegibyname() {
      this.getDeginame().then((response) => {
        console.log("satya", response);
        if (response.status == "200") {


          for (var i = 0; i < response.data.desigNames.length; i++) {
            this.allDegiName.push(response.data.desigNames[i]);
          }


          console.log("allDegiName", this.allDegiName);
        }
      });
    },
    getDeptbyname() {
      this.getDepartname().then((response) => {
        console.log("satya", response);
        if (response.status == "200") {
          console.log("resdata", response.data.departmentNames);
          //  this.allBranchNames=response.data
          for (var i = 0; i < response.data.departmentNames.length; i++) {
            this.allDepartName.push(response.data.departmentNames[i]);
          }


          console.log("allDepartName", this.allDepartName);
        }
      });
    },
     getManager() {


      this.getManagerlist().then((response) => {
         console.log("Manager List",response)
           if (response.status =='200') {
            console.log("MANAGER", response.data.Managers);
          for (var i = 0; i < response.data.Managers.length; i++) {
          this.Manager.push({
            text: response.data.Managers[i].employeeId+'--'+response.data.Managers[i].firstName,value: response.data.Managers[i].employeeId
          });
        }


                 console.log("Branch", this.Manager)

          }




      });
    },
  },
};
</script>
