<template>
  <div style="float:left; width:5%;  ">
      <v-card nav dense elevation="10" class="sidemenu" >
        <v-list nav dense style="height:100%;background:linear-gradient(90deg, rgba(2,101,129,1) 0%, rgba(0,76,95,1) 0%, rgba(0,76,95,1) 48%, rgba(14,114,139,1) 99%);width:100px; margin-top:-8px;" align="justify" justify="center">
          <v-list-item-group active-class="deep-purple--text text--accent-4">
              <router-link to="/CompanyProfile"  style="text-decoration: none; color: inherit;">
                <v-list-item style="margin:0px auto">
                  <v-list-item-content>

                
                <v-list-item-icon>
                <img src="../assets/business-and-trade.png" style="color:white" height="40" width="40" >
                </v-list-item-icon>
                <!-- <v-icon>mdi-domain</v-icon> -->
                <v-list-item-subtitle style="color:white; margin-top:20px;">Company</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
              </router-link>
                 
            <router-link to="/EmployeeProfile"  style="text-decoration: none; color: inherit;">
            <v-list-item >
              <v-list-item-title  >
              <v-list-item-icon>
                <img src="../assets/profilename.png" style="color:white;margin-left:-20px" height="40" width="40" >
                </v-list-item-icon>
                <br>
                       <span style="color:white; margin-top:15px;">Profile</span>
                </v-list-item-title>
                <!-- <v-list-item-subtitle >My profile</v-list-item-subtitle> -->
            </v-list-item>
            </router-link>
            <v-list-item >
              <v-list-item-title  >
              <v-list-item-icon>
                <img src="../assets/directoryname.png" style="color:white;margin-left:-20px" height="40" width="40" >
                </v-list-item-icon>
                <br>
                       <span style="color:white; margin-top:15px;">Directory</span>
                </v-list-item-title>
              
               </v-list-item>
           <router-link to="/AttendenceProfile"  style="text-decoration: none; color: inherit;">
            <v-list-item >
               <v-list-item-title  >
              <v-list-item-icon>
                <img src="../assets/biometric (2).png" style="color:white;margin-left:-20px" height="50" width="50" >
                </v-list-item-icon>
                <br>
                       <span style="color:white; margin-top:15px;">Attendance</span>
                </v-list-item-title>
            </v-list-item>
           </router-link>
            <router-link to="/Leaveprofile"  style="text-decoration: none; color: inherit;">
            <v-list-item > 
              <v-list-item-title  >
              <v-list-item-icon>
                <img src="../assets/icons8-leave-house-100.png" style="color:white;margin-left:-20px" height="40" width="40" >
                </v-list-item-icon>
                <br>
                       <span style="color:white; margin-top:15px;">Leave</span>
                </v-list-item-title>
            </v-list-item>
            </router-link>
           <router-link to="/PayRoll"  style="text-decoration: none; color: inherit;">
            <v-list-item > 
 <v-list-item-title  >
              <v-list-item-icon>
                <img src="../assets/save-money.png" style="color:white;margin-left:-20px" height="40" width="40" >
                </v-list-item-icon>
                <br>
                       <span style="color:white; margin-top:15px;">Payroll</span>
                </v-list-item-title>

            </v-list-item>
              </router-link>
              <router-link to="/Calender"  style="text-decoration: none; color: inherit;">
            <v-list-item > 
 <v-list-item-title  >
              <v-list-item-icon>
                <img src="../assets/calendarname.png" style="color:white;margin-left:-20px" height="40" width="40" >
                </v-list-item-icon>
                <br>
                       <span style="color:white; margin-top:15px;">Calendar</span>
                </v-list-item-title>

            </v-list-item>
              </router-link>
              <router-link to="/Announcement"  style="text-decoration: none; color: inherit;">
            <v-list-item > 
 <v-list-item-title  >
              <v-list-item-icon>
                <img src="../assets/announcement.png" style="color:white;margin-left:-20px" height="40" width="40" >
                </v-list-item-icon>
                <br>
                       <span style="color:white; margin-top:15px;">Announcement</span>
                </v-list-item-title>

            </v-list-item>
              </router-link>
            <v-list-item class="mr-9"> </v-list-item>
           
            <v-list-item class="mr-11">
              <v-list-item-icon>
              
              </v-list-item-icon>
            </v-list-item>

            <v-divider></v-divider>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.sidemenu {
  height:100vh;
  overflow-y: auto;
  position: fixed;
  top: 64px;
  /* z-index: 100; */
}
</style>