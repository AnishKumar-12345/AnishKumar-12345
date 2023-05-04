<template>
  <div>
    <div>
      <v-container fluid >
        <v-row style="margin-left: 90px">
          <!-- <v-col cols="12" md="2">
            <v-card
              max-width="150"
              min-height="100"
              style="border: 3px dotted blue;"
            >
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
              <!-- <v-spacer></v-spacer>

              <v-divider height="20px"></v-divider> -->
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
                  <h2 style="font-weight: 600; font-size: 16px; color: rgb(255, 255, 255);
        padding: 10px;">
                    Branch Details
                  </h2>
                  <h2
                    style="font-weight: 600; font-size: 16px; color: rgb(255, 255, 255);
        padding: 10px;float:right;margin-left:70%;position:relative;"
                  >
                    Add Branch Details
                  </h2>
                  <v-icon
                  class="mr-3 icn"
                    v-if="activefiled == false"
                    @click="activefiled = !activefiled"
                    >mdi-plus
                  </v-icon>
                  <v-icon
                  class="mr-3 icn"
                    v-if="activefiled == true"
                    @click="closeBranchdata()"
                    >mdi-close
                  </v-icon>
                </div>
                <!-- <v-divider class="red mt-8"></v-divider> -->

                <div v-if="activefiled == false" class="overView">
                  <v-data-table
                    :headers="branchHeaders"
                    :items="this.allFamily"
                    class="elevation-1"
                  >
                    <template v-slot:item.actions="{ item }">
                      <v-icon small class="mr-2  white--text" @click="sendItem(item)" style="padding:4px;border-radius:4px;background:blue;">
                        mdi-pencil
                      </v-icon>                  
                        <v-icon small class="mr-2  white--text" style="padding:4px;border-radius:4px;background:red;" @click="deleteBranchdetails(item)">
                        mdi-delete
                      </v-icon>
                    </template> 

                    <template v-slot:item.branchPremisesType="{ item }">
                        <v-chip
                          :color="getColor(item.branchPremisesType)"
                          dark
                        >
                          {{ item.branchPremisesType }}
                        </v-chip>
                      </template>

                      <template v-slot:item.country="{ item }">
                        <v-chip
                          :color="getCountryColor(item.country)"
                          dark
                        >
                          {{ item.country }}
                        </v-chip>
                      </template>
                  </v-data-table>
                </div>

                <div  v-if="activefiled == true">
                  <v-form
                    @submit.prevent="SaveBranch"
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-container>
                      <v-row style="margin-right: -15 px; margin-left: -15 px">
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Branch Name"
                            :rules="branchRules"
                            v-model="user.branchName"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="City"
                            :rules="cityRules"
                            v-model="user.city"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="State"
                            :rules="stateRules"
                            v-model="user.state"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Country"
                            :rules="countryRules"
                            v-model="user.country"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Phone Number "
                            :rules="phoneRules"
                            v-model="user.phoneNumberOne"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Alternative Number "
                            :rules="phoneRules"
                            v-model="user.phoneNumberTwo"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Email Id "
                            :rules="emailRules"
                            v-model="user.emailId"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-select
                            :items="branchType"
                            label="Branch Premises Type "
                            :rules="branchpremisestypeRules"
                            v-model="user.branchPremisesType"
                            dense
                            outlined
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Branch Premises Rent"
                            :rules="branchpremisesrentRules"
                            v-model="user.branchPremisesRent"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-btn
                            type="submit"
                            style="background: red;color:white"
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
          <v-col cols="12" md="3"></v-col>
        </v-row>
      </v-container>
    </div>

<!-- edit the branch details -->

    <v-row>
      <v-dialog 
      v-model="dialog"
      persistent
      max-width="600px"
      >
        <v-card style="padding:30px;">
          <v-card-text>
            <v-card-title><span>EDIT BRANCH DETAILS</span></v-card-title><br>
            <v-form
                    @submit.prevent="SaveBranch"
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-container>
                      <v-row style="margin-right: -15 px; margin-left: -15 px">
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Branch Name"
                            :rules="branchRules"
                            v-model="user.branchName"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="City"
                            :rules="cityRules"
                            v-model="user.city"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="State"
                            :rules="stateRules"
                            v-model="user.state"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Country"
                            :rules="countryRules"
                            v-model="user.country"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Phone Number "
                            :rules="phoneRules"
                            v-model="user.phoneNumberOne"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Alternative Number "
                            :rules="phoneRules"
                            v-model="user.phoneNumberTwo"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Email Id "
                            :rules="emailRules"
                            v-model="user.emailId"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-select
                            :items="branchType"
                            label="Branch Premises Type "
                            :rules="branchpremisestypeRules"
                            v-model="user.branchPremisesType"
                            dense
                            outlined
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Branch Premises Rent"
                            :rules="branchpremisesrentRules"
                            v-model="user.branchPremisesRent"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-btn                            
                            @click="dialog=false;"
                            id="bnt1"
                            >Cancel</v-btn
                          >
                          <v-btn
                            type="submit"
                            id="bnt2"
                            >Save</v-btn
                          >                         
                        </v-col>
                        <v-col cols=""> </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>

    <v-dialog v-model="dialogDelete" persistent>
      <v-card rounded="xl" class="pb-4"  min-width="450" min-height="150" style="padding:20px;">
        <v-card-title class="text-h5 justify-center pb-3" style="color:black;"
          >Delete Branch Details</v-card-title
        >
        <v-card-subtitle style="text-align: center;margin-top:1px;color:black;font-size:15px;"
          >Are you sure you want to delete this item?</v-card-subtitle
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
import axios from "axios";
export default {
  name: "PersonalData",
  mixins: [servicescall],
  data() {
    return {
      dialog:false,
      dialogDelete:false,
      id:"",
      branchType:['OWNED','RENT'],
      count: 1,
      activeComponent: false,
      activefiled: false,
      activefiled1: true,
      activefiled2: true,
      valid: false,
      allFamily: [],
      snackbar: false,
      activeColor:"",
      text: "",
      edituser: false,

      employeeId: "25",
      user: {
        branchName: "",
        city: "",
        state: "",
        country: "",
        phoneNumberOne: "",
        phoneNumberTwo: "",
        emailId: "",
        branchPremisesType: "",
        branchPremisesRent: ""
      },
      branchRules: [
        v => !!v || "Branch is required",

        v => /^(?![ .]+$)[a-zA-Z .]*$/.test(v) || "Branch must be characters"
      ],
      cityRules: [
        v => !!v || "City is required",

        v => /^(?![ .]+$)[a-zA-Z .]*$/.test(v) || "City must be characters"
      ],
      stateRules: [
        v => !!v || "State is required",

        v => /^(?![ .]+$)[a-zA-Z .]*$/.test(v) || "State must be characters"
      ],
      countryRules: [
        v => !!v || "Country is required",

        v => /^(?![ .]+$)[a-zA-Z .]*$/.test(v) || "Country must be characters"
      ],
      phoneRules: [
        v => !!v || "Phone is required",
        v => /^[0-9]+$/.test(v) || "only number are accepted",
        v =>
          (v && v.length <= 10 && v.length >= 10) || "phone must be  10 number"
      ],
      emailRules: [
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      branchpremisestypeRules: [
        v => !!v || "Premises type is required",

        v => /^(?![ .]+$)[a-zA-Z .]*$/.test(v) || "Premises must be characters"
      ],

      branchpremisesrentRules: [
        v => !!v || "Premises rent is required",

        v => /^(?![ .]+$)[a-zA-Z .]*$/.test(v) || "Premises must be characters"
      ],
      rules: [v => !!v || " Filed  is required"],

      branchHeaders: [
        { text: "BRANCH NAME", value: "branchName" },
        { text: "CITY", value: "city" },
        { text: "STATE", value: "state" },
        { text: "COUNTRY", value: "country" },
        { text: "EMAIL ID", value: "emailId" },
        { text: "PHONE NUMBER", value: "phoneNumberOne" },
        { text: "ALTERNATIVE NUMBER", value: "phoneNumberTwo" },
        { text: "BRANCH PREMISES TYPE", value: "branchPremisesType" },
        { text: "BRANCH PREMISES RENT", value: "branchPremisesRent" },
        { text: "ACTION", value: "actions", sortable: false }
      ]
    };
  },
  mounted() {
    this.getBranches();
  },
  methods: {
    deleteBranchdetails(item){
      this.id = item.branchId;
      this.dialogDelete = true;
      console.log("Delete  reviewId",   this.id);
    },
    ConfirmDeleteType(){    
    this.dialogDelete = true; 
    console.log("Delete Dates", this.id);
    this.deleteBranchs(this.id).then((response) => {
        console.log(response)
      if (response.status == 200) {
       this.text = response.data.message;
          this.activeColor='';
                    this.activeColor='green';
        this.snackbar = true;
          this.getBranches();
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

    getCountryColor(itm){
      if(itm == "INDIA"){
        return "green";
      }else{
        return "#dcbb04";
      }
    },

    getColor(itm){
      if(itm == "OWNED"){
        return "green";
      }else{
        return "red";
      }
    },
    closeBranchdata(){
      // this.alldegnations=[];
      this.user={};
      this.activefiled=false;
    },
    sendItem(item) {
      console.log("Item", item.branchName);
      this.user.branchName = item.branchName;
      this.user.city = item.city;
      this.user.state = item.state;
      this.user.country = item.country;
      this.user.emailId = item.emailId;
      this.user.phoneNumberOne = item.phoneNumberOne;
      this.user.phoneNumberTwo = item.phoneNumberTwo;
      this.user.branchPremisesType = item.branchPremisesType;
      this.user.branchPremisesRent = item.branchPremisesRent;
      this.edituser = true;
      this.dialog=true;
      // this.activefiled = true;
    },
    editedDesig() {
      console.log("ID", this.id, this.user);
      var reqJSON = this.user;
      this.getBranchId(this.user.branchName, reqJSON).then(response => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
          this.activeColor = "green",
          this.getBranches();
          location.reload();
        } else {
          this.text = response.data.message;
          this.snackbar = true;
          this.activeColor = "red";
        }
      });
    },
    SaveBranch() {
      this.$refs.form.validate();

      if (this.$refs.form.validate()) {
        if (this.edituser == false) {
          this.PostBranch();
        } else {
          this.editedDesig();
        }
      }

      // this.close()
    },

    PostBranch() {
      console.log("1234", this.user);
      var reqJSON = this.user;
      console.log("check", reqJSON);
      this.BranchReq(reqJSON).then(response => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
          this.activeColor = "green"
          this.getBranches();
          // location.reload();
          this.user={};
         this.activefiled=false;
        } else {
          this.text = response.data.message;
          this.snackbar = true;
          this.activeColor = "red";
        }
      });
    },

    getBranches() {
      console.log("Get All Company");
      this.getFamilyDetails().then(response => {
        console.log("Get All Company", response);
        this.allFamily = response.Branch;
        console.log("Get All Company11", this.allFamily);
      });
    }

    // getBranches() {

    //   this.getBranchesNames()
    //     .then((response) => {
    //               console.log("satya", response);
    //       if (response.status =='200') {
    //         console.log("resdata", response.data);
    //        this.allBranchNames=response.data

    //            for(var i=0;i<response.data.branchNames.length;i++){
    //              this.allBranchNames.push({ SNo:i+1,branchName:response.data.branchNames[i]})
    //            }
    //              console.log("Branch",this.allBranchNames)

    //       }
    //     })

    // },
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
