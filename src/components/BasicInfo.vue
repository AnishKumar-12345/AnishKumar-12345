<template>
  <div >
    <div>
      <v-container fluid style="margin: 0px auto;">
        <v-row style="margin-left: 68px">
          <!-- <v-col cols="12" md="3" style="margin: 0 auto">
            <v-card
              max-width="150"
              min-height="100"
              style="border: 3px dotted blue; margin-left: 80px"
            >
              <v-file-input
                hide-input
                style="margin-left: 50px"
                prepend-icon="mdi-plus"
              ></v-file-input>
            </v-card>
          </v-col> -->

          <v-col cols="12" md="12">
            <v-card
              style="margin: 0px auto; margin-bottom: 20px;border-radius:10px;"
              min-width="100%"
            >
              <v-spacer></v-spacer>

              <v-divider height="20px"></v-divider>
              <v-card-text>
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #e4e6e4;
                    margin-bottom: 5px;
                    background-color:#1565c0;
                    height:40px;
                    line-height:20px;
                    border-radius:10px 10px 0px 0px;
                  ">
                  <h2 style="font-weight: 600; font-size: 14px; color: #fff; padding:10px;">
                    Basic Info
                  </h2>
                  <h2
                    style="font-weight: 600; font-size: 16px; color: rgb(255, 255, 255);
          padding: 10px;float:right;margin-left:74%;position:relative;"
                  >
                    Add Employee Data
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
                    @click="closeEmpoyeedata()"
                    >mdi-close
                  </v-icon>
                </div>
                <!-- <v-divider class="red mt-8"></v-divider> -->
                <div v-if="activefiled == false" class="overView">
<v-row style="margin-bottom:20px;">

<v-col cols="3">
  <v-row>
    <v-col>
      <img
                  src="../assets/employee.png"
                  width="200px"
                  alt="dizitiveit.com"
                />
    </v-col>
  </v-row>
  </v-col>

<v-col  style="margin-top:5px;" cols="4"> 
<v-row>
 <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Employee No:</v-col>

    <v-col md="8" style="text-align:left;color:black">{{ this.Adminresult.employee.employeeId }}
                  </v-col>
</v-row>

<v-row>
 <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Nationality:</v-col>

    <v-col md="8" style="text-align:left;color:black">{{ this.Adminresult.employee.nationality }}
                  </v-col>
</v-row>

<v-row>
 <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >PAN Card No:</v-col>

    <v-col md="8" style="text-align:left;color:black">{{ this.Adminresult.employee.panCardNumber
 }}
                  </v-col>
</v-row>

<v-row>
 <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Department ID:</v-col>

    <v-col md="8" style="text-align:left;color:black">{{ this.Adminresult.dept.deptId
 }}
                  </v-col>
</v-row>

<v-row>
 <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Designation:</v-col>

    <v-col md="8" style="text-align:left;color:black">{{ this.Adminresult.desg.desigName
 }}
                  </v-col>
</v-row>

<v-row>
 <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Full Name:</v-col>

    <v-col md="8" style="text-align:left;color:black">{{ this.Adminresult.employee.firstName
 }}
                  </v-col>
</v-row>

<v-row>
 <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Mobile No:</v-col>

    <v-col md="8" style="text-align:left;color:black">{{ this.Adminresult.employee.phoneNumber
 }}
                  </v-col>
</v-row>


</v-col>

<v-col cols="1" style="border-left: 3px dashed grey;margin-top:20px;">  
</v-col>

<v-col cols="4" style="margin-top:5px;padding:0px;margin-top:10px;padding:0px 0px 0px 20px " >

<v-row>
 <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Aadhaar No:</v-col>

    <v-col md="8" style="text-align:left;color:black">{{ this.Adminresult.employee.adharNumber
 }}
                  </v-col>
</v-row>

<v-row>
 <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Branch ID:</v-col>

    <v-col md="8" style="text-align:left;color:black">{{ this.Adminresult.branchs.branchId
 }}
                  </v-col>
</v-row>

<v-row>
 <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Date Of Joining:</v-col>

    <v-col md="8" style="text-align:left;color:black">{{ this.Adminresult.employee.dateOfJoining
 }}
                  </v-col>
</v-row>

<v-row>
 <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Email ID:</v-col>

    <v-col md="8" style="text-align:left;color:black">{{ this.Adminresult.employee.officialEmailId
 }}
                  </v-col>
</v-row>



<v-row>
 <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Gender:</v-col>

    <v-col md="8" style="text-align:left;color:black">{{ this.Adminresult.employee.gender
 }}
                  </v-col>
</v-row>
<v-row>
 <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Supervisor name:</v-col>

    <v-col md="8" style="text-align:left;color:black">{{ this.Adminresult.employee.supervisorName
 }}
                  </v-col>
</v-row>
<v-row>
 <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Supervisor ID:</v-col>

    <v-col md="8" style="text-align:left;color:black">{{ this.Adminresult.employee.supervisorId
 }}
                  </v-col>
</v-row>


</v-col>

</v-row>



                  <!-- <v-row align="start" justify="space-between">
                    <v-col cols="12" md="4">
                      <ul class="detail-list">
                        <li>Employee No</li>
                        <li></li>
                      </ul>
                    </v-col>
                    <v-col cols="12" md="4">
                      <ul class="detail-list">
                        <li>FullName</li>
                        <li></li>
                      </ul>
                    </v-col>
                    <v-col cols="12" md="4">
                      <ul class="detail-list">
                        <li>Date Of joinig</li>
                        <li></li>
                      </ul>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="4" md="4">
                      <ul class="detail-list">
                        <li>Nationality</li>
                        <li></li>
                      </ul>
                    </v-col>
                    <v-col cols="4" md="4">
                      <ul class="detail-list">
                        <li>Mobile No</li>
                        <li></li>
                      </ul>
                    </v-col>
                    <v-col cols="4" md="4">
                      <ul class="detail-list">
                        <li>Email Id</li>
                        <li></li>
                      </ul>
                    </v-col>
                    <v-col cols="4" md="4">
                      <ul class="detail-list">
                        <li>Pan Card No</li>
                        <li></li>
                      </ul>
                    </v-col>
                    <v-col cols="4" md="4">
                      <ul class="detail-list">
                        <li>Aadhar No</li>
                        <li></li>
                      </ul>
                    </v-col>
                    <v-col cols="4" md="4">
                      <ul class="detail-list">
                        <li>Gender</li>
                        <li></li>
                      </ul>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="4" md="4">
                      <ul class="detail-list">
                        <li>Department ID</li>
                        <li></li>
                      </ul>
                    </v-col>
                    <v-col cols="4" md="4">
                      <ul class="detail-list">
                        <li>Branch ID</li>
                        <li></li>
                      </ul>
                    </v-col>
                    <v-col cols="4" md="4">
                      <ul class="detail-list">
                        <li>Supervisor ID</li>
                        <li></li>
                      </ul>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="4" md="4">
                      <ul class="detail-list">
                        <li>Designation</li>
                        <li></li>
                      </ul>
                    </v-col>
                  </v-row> -->
                </div>

                <div v-else>
                  <v-form
                    @submit.prevent="verify"
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-container>
                      <v-row style="margin-right: -15 px; margin-left: -15 px">
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
                            placeholder="lastName"

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
                           <v-autocomplete
                            :items="this.Manager"
                            label="Select Supervisor"

                              :rules="rules"

                           v-model="supervisorName"
                            dense

                            outlined
                          ></v-autocomplete>

                          <!-- <v-text-field
                            label="Supervisor Name"
                            placeholder="Supervisor Name"

                            v-model="user.supervisorName"
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

                            :rules="aadharRules"
                            v-model="user.adharNumber"
                            dense

                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="PAN Card Number"
                            placeholder="PAN Card Number"

                              :rules="panRules"

                            v-model="user.panCardNumber"
                            dense

                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      type="date"
                      label="Date Of Joining"
                      v-model="user.dateOfJoining"
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>

                        <!-- <v-col cols="12" md="4">

                          <v-text-field
                            label="Date Of Joining "
                            placeholder="Date Of Joining"

                              :rules="rules"

                            v-model="user.dateOfJoining"
                            dense

                            outlined
                          ></v-text-field>
                        </v-col> -->

                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Present Address"
                            placeholder="Present Address"
                              :rules="rules"


                            v-model="user.presentAddress"
                            dense

                            outlined
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      type="date"
                      label="Date Of Birth"
                      v-model="user.dateOfbirth"
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                         <!-- <v-col cols="12" md="4">
                          <v-text-field
                            label="Date Of Birth"
                            placeholder="Date Of Birth"
                              :rules="rules"


                            v-model="user.dateOfbirth"
                            dense

                            outlined
                          ></v-text-field>
                        </v-col> -->


                        <v-col cols="12" md="4">
                          <v-autocomplete
                            :items="this.allBranchNames"
                            label="Select Branch"

                              :rules="rules"




                           v-model="branchName"
                            dense

                            outlined
                          ></v-autocomplete>

                        </v-col>

                        <v-col cols="12" md="4">
                          <v-autocomplete
                            :items="this.allDepartName"
                            label="Select Dept"
                              :rules="rules"

                           v-model="deptName"
                            dense

                            outlined
                          ></v-autocomplete>

                        </v-col>

                        <v-col cols="12" md="4">
                          <v-autocomplete
                            :items="this.allDegiName"
                            label="Select Desig"
                              :rules="rules"

                            v-model="desigName"
                            dense

                            outlined
                          ></v-autocomplete>

                        </v-col>
                        <v-col cols="12" md="4">
                          <v-autocomplete
                            :items="this.allRoleNames"
                            label="Select Role"
                              :rules="rules"

                             v-model="role"
                            dense

                            outlined
                          ></v-autocomplete>

                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" style="text-align:right;">
                          <v-btn type="submit" style="background: red;color:white"
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
import axios from "axios";
export default {
  name: "PersonalData",
  mixins: [servicescall],
  data() {
    return {
      AdminId:'',
      Adminresult:{},
      items: ["Male", "Female"],
      activeColor:'',
      count: 1,
      activeComponent: false,
      snackbar: false,
      text: "",
      role:"",
      desigName:"",
      deptName:"",
      branchName:"",
      valid: false,
      activefiled: false,
      activefiled1: true,
      activefiled2: true,
      allBranchNames:[],
      allSupervisor:[],
      allRoleNames:[],
      allDegiName:[],
      allDepartName:[],
      Manager:[],
      user: {
        employeeId: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        dateOfbirth:"",
        officialEmailId: "",
        gender: "",
        adharNumber: "",
        panCardNumber: "",
        dateOfJoining: "",
        presentAddress: "",

      },
      Empdata:[],
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
         (v) => /^[A-Za-z]+$/.test(v) || "Name must be characters",


],

       phoneRules: [
        (v) => !!v || "Phone is required",
        (v) => /^[0-9]+$/.test(v) || "Only number are accepted",
        (v) =>
          (v && v.length <= 10 && v.length >= 10) || "Phone number must be  10 digits",
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
      email: "",
      emailRules: [
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
       rules: [
           (v) => !!v || " Filed  is required",
       ]

    };
  },
  mounted(){
      this.getBranches(),
      this.getRolebyname(),
      this.getDegibyname(),
      this.getDeptbyname(),
      this.getSupervisor(),
      this.getManager();
      // this.getAllemployeesdata();
     
      this.AdminId = localStorage.getItem("id");
   
      this.getAdmindata();
  },
  methods: {
    // getAllemployeesdata(){
    //   this.getAllemployees().then((response)=>{
      
    //     this.Empdata = response.data;
    //     console.log('check anish details',response);
    //   })
    // },
    getAdmindata(){
      this.AdminId = localStorage.getItem("id");
      console.log('check the admin Id',this.AdminId);
      this.getemployeeprofile(this.AdminId).then((response) =>{
  
        this.Adminresult = response.data.Profile;
        console.log("check the admin profile datas",this.Adminresult);
      })
    },
    closeEmpoyeedata(){
      // this.Manager=[];
      this.user={};
      this.activefiled=false;
    },
    registration() {
      console.log("Hello regratation ");
      console.log(this.jwt);
      var config = {
        method: "post",
        url:
          "http://103.60.213.11:9001/employee/employeeRegistration/" +
          this.role +
          "/" +
          this.branchName +
          "/" +
          this.deptName +
          "/" +
          this.desigName+
          "/"+
          this.supervisorName,
        data: this.user,
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log("User data:", config);

      axios(config)
        .then((res) => {
          
          console.log("In axois", res.status);
          if (res.status == 200) {
            this.text = res.data.message;
        
            this.snackbar = true;
            this.activeColor='green'
            setTimeout(() => {  this.$router.push({name:"HelloWorld" }) }, 2000);
          }
          if(res.status == 400) {
            this.text ="Employee employeeId Already Exists";
            this.snackbar = true;
            this.activeColor='blue'
          }
        })

       

      //}
    },
    verify() {
      console.log("Validate", this.valid);
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.registration();
        this.text = "Employee saved successfully";
        // this.$router.push({name:"AdminDashborad" })
        this.activeColor='green'
        this.snackbar = true;
        //window.location.reload();
      } else {
        console.log("Validate", this.valid);
        this.text = "";
        this.snackbar = true;
        this.activeColor='red'
        this.text = "Please fill all details ";
      }
    },
      getBranches() {

      this.getBranchesNames()
        .then((response) => {
                  console.log("satya", response);
          if (response.status =='200') {
            console.log("resdata", response.data.branchNames);
          //  this.allBranchNames=response.data
          for(var i=0;i<response.data.branchNames.length;i++){
                this.allBranchNames.push(response.data.branchNames[i])
              }

              //  for(var i=0;i<response.data.branchNames.length;i++){
              //    this.allBranchNames.push({ branchName:response.data.branchNames[i]})
              //  }
                 console.log("Branch",this.allBranchNames)

          }
        })

    },
     getSupervisor() {

      this.getSupervisorNames()
        .then((response) => {
                  console.log("satya", response);
          if (response.status =='200') {
            console.log("resdata", response.data.SupervisorNames);
          //  this.allBranchNames=response.data
          for(var i=0;i<response.data.SupervisorNames.length;i++){
                this.allSupervisor.push(response.data.SupervisorNames[i])
              }

              //  for(var i=0;i<response.data.branchNames.length;i++){
              //    this.allBranchNames.push({ branchName:response.data.branchNames[i]})
              //  }
                 console.log("Branch",this.allBranchNames)

          }
        })

    },
      getRolebyname() {

      this.getRolename()
        .then((response) => {
                  console.log("satya", response);
          if (response.status =='200') {
            console.log("resdata", response.data.roleNames);
          //  this.allBranchNames=response.data
          for(var i=0;i<response.data.roleNames.length;i++){
                this.allRoleNames.push(response.data.roleNames[i])
              }

              //  for(var i=0;i<response.data.branchNames.length;i++){
              //    this.allBranchNames.push({ branchName:response.data.branchNames[i]})
              //  }
                 console.log("Branch",this.allRoleNames)

          }
        })

    },
      getDegibyname() {

      this.getDeginame()
        .then((response) => {
                  console.log("satya", response);
          if (response.status =='200') {
            console.log("resdata", response.data.desigNames);
          //  this.allBranchNames=response.data
          for(var i=0;i<response.data.desigNames.length;i++){
                this.allDegiName.push({text:response.data.desigNames[i], value:response.data.desigNames[i]})
              }
              //  for(var i=0;i<response.data.branchNames.length;i++){
              //    this.allBranchNames.push({ branchName:response.data.branchNames[i]})
              //  }
                 console.log("Degination",this.allDegiName)

          }
        })

    },

      getplayslip() {

      this.getPaySlipgen()
        .then((response) => {
                  console.log("satya", response);
          if (response.status =='200') {





          }
        })

    },
     getDeptbyname() {

      this.getDepartname()
        .then((response) => {
                  console.log("satya", response);
          if (response.status =='200') {
            console.log("resdata", response.data.departmentNames);
          //  this.allBranchNames=response.data
          for(var i=0;i<response.data.departmentNames.length;i++){
                this.allDepartName.push(response.data.departmentNames[i])
              }

              //  for(var i=0;i<response.data.branchNames.length;i++){
              //    this.allBranchNames.push({ branchName:response.data.branchNames[i]})
              //  }
                 console.log("Degination",this.allDepartName)

          }
        })

    },
    getList() {
      console.log("satya11", this.date, this.date1);
      this.getlistOfEmployees().then(response => {
        console.log("Get All employee list", response.data.Employee);
        for (var i = 0; i < response.data.Employee.length; i++) {
          this.employeelist.push({
            text: response.data.Employee[i].employeeId
          });
        }

        console.log("Get All employee list", this.employeelist);
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


                 console.log("Branch Ani", this.Manager)

          }




      });
    },
  },
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
  background-color: white;
  color: black;
}
.icn:hover{
  background-color: rgb(255, 74, 14);
  color: rgb(255, 255, 255);
}
</style>
