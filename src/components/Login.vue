<template>
  <div class="loginbg"

  >

      <v-container style="
        font-family: Helvetica, sans-serif;">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="6">
            <img
              src="../assets/1a.png"
              style="margin-top: 50px"
              alt="dizitiveit.com"
            />
          </v-col>

          <v-col cols="12" sm="12" md="6">
            <v-card
              elevation="2"
              min-height="100"
              style="margin: 0px 20px 0px 0px"
            >
              <div class="logo">
                <v-avatar size="100">
                  <img src="../assets/logo.png" alt="dizitiveit.com" />
                </v-avatar>
              </div>
              <v-card-title
                style="
                  display: flex;
                  justify-content: space-between;
                  font-family: Helvetica, sans-serif;
                  font-size: 22px;
                  color: #1d244f;
                  margin-left: 10px;
                  margin-top: 10px;
                  /* font-weight: 800; */
                "
                >Sign In
                <!-- <span style="color: #b0b2c1;font-size: 15px;font-family:Nunito;font-weight: 600;">Dont have an account?</span> -->
              </v-card-title>
              <v-card-text style="padding:10px;">
                <div v-show="showText" style="padding:10px;">
                    <v-form @submit.prevent="checkForm" type="POST" v-model="valid">
                        <v-text-field
                          style="font-size: 22px;  font-family: Helvetica, sans-serif;"
                          label="Mobile Number"
                          v-model="mobile"
                            :rules="phoneRules"
                        ></v-text-field>

                    <div style="margin-bottom:5px; text-align:right;">
                        <v-btn type="submit"  style="background-color: #1565c0; color: white">
                          Send OTP
                        </v-btn>
                    </div>
                    </v-form>
                </div>

                <div v-show="!showText" style="padding:10px;">
                  <v-form @submit.prevent="checkForm1" type="POST" v-model="valid">
                    <v-text-field
                      style="font-size: 22px; font-family: Helvetica, sans-serif;"
                      label="Enter OTP"
                    ></v-text-field>

                    <div style="margin-bottom:5px; text-align:right;">
                      <v-btn type="submit" style="background-color: #1565c0; color: white">
                        Submit</v-btn
                      >
                    </div>
                  </v-form>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
       <v-snackbar color="green" v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
import '../Styles/styles.css'

export default {
  name: 'LogIn',
 data() {

    return {

     mobile: "",
     signature:"DIS-HYD",
     otpNum:"9999",
     result:[],
    snackbar:false,
      valid:false,
      text:"",
      showText: true,
        phoneRules: [
        (v) => !!v || "Phone is required",
        (v) => /^[0-9]+$/.test(v) || "only number are accepted",
        (v) =>
          (v && v.length <= 10 && v.length >= 10) || "phone must be  10 number",
      ],

      jwt: "",
      roleName:"",
      id:"",
    };
    },
    mounted(){
    this.getManager()
    },
    methods:{
      login() {

      axios
        .post("http://103.60.213.11:9001/employee/sendOtp/"+this.mobile+"/"+this.signature,{
          headers: {
			'Content-Type':'application/json' }}).then(res => {
         if(res.status==200){
       //console.log("RECEIVED: ");
         this.jwt = res.data.jwt;
          //////////////////////console.log("jwt RECEIVED: ", this.jwt);
       localStorage.setItem('jwt', this.jwt);
           this.text=" Send OTP Successfully "
             this.snackbar=true;
             this.showText=false

        // this.$router.push({path:"Home" , params:{userjwt:this.jwt,}});

        }
        if(res.status==400)
         {
             this.jwt = res.data.jwt; 
          //////////////////////console.log("jwt RECEIVED: ", this.jwt);
       localStorage.setItem('jwt', this.jwt);
           this.text=" Mobile Number Does Not Exists "
             this.snackbar=true;
             this.showText=false
         }
            })
        .catch(error => {
        if (!error.response) {
            // network error
            this.errorStatus = 'Error: Network Error';
        } else {
            this.errorStatus = error.response.data.message;
        }
      })
    },
       resentOtp() {

      axios
        .post("http://103.60.213.11:9001/employee/validateOtp/"+this.mobile+"/"+this.otpNum,{
          headers: {
			'Content-Type':'application/json' }}).then(res => {
         if(res.status==200){
       //console.log("RECEIVED: ");
         this.jwt = res.data.jwt;
         this.roleName=res.data.roleName
         this.id=res.data.employeeId
          //////////////////////console.log("jwt RECEIVED: ", this.jwt);
       localStorage.setItem('jwt', this.jwt);
         localStorage.setItem('roleName',  this.roleName);
           localStorage.setItem('id',  this.id);
        this.text="Successfully Login"
           this.snackbar=true;

        // this.$router.push({path:"Home" , params:{userjwt:this.jwt,}});

        if (this.roleName == "Admin") {
              this.$router.push({
                name: "HelloWorld",
                params: {  },
              });
            } else if (this.roleName == "Employee") {
              this.$router.push({
                name: "UserDashboard",
                params: { employeeId: this.id },
              });
            } else {
              this.$router.push({
                name: "ManagerDashboard",
                params: {employeeId: this.id },
              });
            }
              //  this.$router.push({ name: "HelloWorld"});
        }



                   console.log("satya"+res.data.roleName)
                  console.log("satya"+this.jwt)
                 console.log("satya"+res.data.employeeId)








            })
        .catch(error => {
        if (!error.response) {
            // network error
            this.errorStatus = 'Error: Network Error';
        } else {
            this.errorStatus = error.response.data.message;
        }
      })
    },
      checkForm(){




                      this.login();




      } ,
      checkForm1(){




                      this.resentOtp();




      } ,

    }
}
</script>

<style scoped>
.logo {
  background-image: url("../assets/bg1.png");
  background: #1565c0;
  border-radius: 0px 0px 0 0;
  padding: 0px 0;
}
</style>
