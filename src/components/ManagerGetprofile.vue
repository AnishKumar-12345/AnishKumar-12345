<template>
  <div>
  
    <div style="margin-top:100px">
      <v-container>
        <v-card>
          <v-card-text>
            <v-row style="margin:0;">
              <v-card color="#1565c0" min-width="1160">
                <v-card-text>
                  <v-row style="margin:0; ">
                    <v-col style="text-align:left; height:48px;">
                      <b>Basic Details</b>
                    </v-col>
                    <router-link
                      to="/ManagerProfileUpdate"
                      style="text-decoration: none; color: inherit"
                    >
                      <v-col style="text-align:right">
                        <v-icon small color="white" class="mr-2">
                          mdi-pencil
                        </v-icon>
                      </v-col>
                    </router-link>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-row>
            <v-row>
              <v-col>
                <img
                  src="../assets/employee.png"
                  width="200px"
                  alt="dizitiveit.com"
                />
              </v-col>

              <v-col>
                <v-row>
                  <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Employee Id</v-col
                  >
                  <v-col md="8" style="text-align:left;color:black">{{
                    this.result.employee.employeeId
                  }}</v-col>
                </v-row>

                <v-row>
                  <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Name</v-col
                  >
                  <v-col md="8" style="text-align:left;color:black">{{
                    this.result.employee.firstName + "." + this.result.employee.lastName
                  }}</v-col>
                </v-row>
                <v-row>
                  <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Designation</v-col
                  >
                  <v-col md="8" style="text-align:left;color:black">{{
                    this.result.desg.desigName
                  }}</v-col>
                </v-row>
                <v-row>
                  <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Supervisor</v-col
                  >
                  <v-col md="8" style="text-align:left;color:black">{{
                    this.result.employee.supervisorName
                  }}</v-col>
                </v-row>
                
  <v-row>
                  <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Gender</v-col
                  >
                  <v-col md="8" style="text-align:left;color:black">{{
                    this.result.employee.gender
                  }}</v-col>
                </v-row>
                <v-row>
                  <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Marital Status</v-col
                  >
                  <v-col md="8" style="text-align:left;color:black">{{
                    "single"
                  }}</v-col>
                </v-row>


              </v-col>
              <v-col>
                <v-row>
                  <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Email</v-col
                  >
                  <v-col md="8" style="text-align:left;color:black">{{
                    this.result.employee.officialEmailId
                  }}</v-col>
                </v-row>
                <v-row>
                  <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Mobile</v-col
                  >
                  <v-col md="8" style="text-align:left">{{
                    this.result.employee.phoneNumber
                  }}</v-col>
                </v-row>
                <v-row>
                  <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Location</v-col
                  >
                  <v-col md="8" style="text-align:left;color:black">{{
                    this.result.employee.location
                  }}</v-col>
                </v-row>

 <v-row>
                  <v-col md="4" style="text-align:left;font-weight:bold;color:black"
                    >Address</v-col
                  >
                  <v-col md="8" style="text-align:left;color:black">{{
                    this.result.employee.presentAddress
                  }}</v-col>
                </v-row>



              </v-col>
            </v-row>
            <!-- <v-row style="margin-right:300px">
              <v-col></v-col>
              <v-col>


              </v-col>
              <v-col></v-col>
            </v-row> -->
          </v-card-text>
        </v-card>
      </v-container> 
    </div>
  </div>
</template>

<script>
import servicescall from "../Services";
import axios from "axios";
export default {
  name: "Attendence",
  mixins: [servicescall],
  data() {
    return {
      result:"",
      userid: "",
      messageText: ""
    };
  },
  mounted() {
    this.getProfile();
     this.userid = localStorage.getItem("id");
  },
  methods: {
    getProfile() {
      this.userid = localStorage.getItem("id");
      console.log("satya id11", this.userid);
      this.getemployeeprofile(this.userid).then(response => {
        this.result = response.data.Profile;
        console.log("In post",  this.result);
      });
    }
  }
};
</script>
