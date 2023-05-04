<template>
  <div class="loginbg"
   
  >
    
      <v-container style="
        font-family: Nunito sans-serif;
        
        
        
        
      ">
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
              style="margin: 95px 20px 0px 0px"
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
                  font-family: Nunito;
                  font-size: 22px;
                  color: #1d244f;
                  font-weight: 800;
                "
                >Sign In
                <!-- <span style="color: #b0b2c1;font-size: 15px;font-family:Nunito;font-weight: 600;">Dont have an account?</span> -->
              </v-card-title>
              <v-card-text>
                <v-form>
                  <div>
                    <input
                      style="font-size: 22px; font-family: Nunito"
                      label="Mobile Number"
                    ></input>

                    <v-btn style="background-color: #1565c0; color: white">
                      Send Otp
                    </v-btn>
                  </div>
                  <div>
                    <input
                      style="font-size: 22px; font-family: Nunito"
                      label="Password"
                    ></input>
                    <router-link to="/HelloWorld">
                      <v-btn style="background-color: #1565c0; color: white">
                        Submit</v-btn
                      >
                    </router-link>
                  </div>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    
  </div>
</template>

<script>
import '../Styles/styles.css'
export default {
  name: "Login",
  data() {
            return {
                image: {backgroundImage: "url(../assets/bg1.png)"}
            };
        }
};
</script>

<style scoped>
.logo {
  background-image: url("../assets/bg1.png");
  background: #1565c0;
  border-radius: 0px 0px 0 0;
  padding: 0px 0;
}
</style>