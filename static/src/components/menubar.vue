<template>
  <div style="float:left; width:10%; ">
      <v-card nav dense elevation="10" class="sidemenu">
        <v-list nav dense style="height:100%;background:#283655;width:90px" align="justify" justify="center">
          <v-list-item-group active-class="deep-purple--text text--accent-4">
              <router-link to="/CompanyProfile"  style="text-decoration: none; color: inherit;">
            <v-list-item style="margin:0px auto">
              <v-list-item-content>

                
                <v-list-item-icon>
                <img src="../assets/business-and-trade.png" style="color:white" height="40" width="40" >
                </v-list-item-icon>
                <v-list-item-subtitle style="color:white;margin-top:20px">Company</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
              </router-link>
                 
            <router-link to="/EmployeeProfile"  style="text-decoration: none; color: inherit;">
            <v-list-item >
              <v-list-item-title  >
              <v-list-item-icon>
                <img src="../assets/profilename.png" style="color:white" height="40" width="40" >
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
                <img src="../assets/directoryname.png" style="color:white" height="40" width="40" >
                </v-list-item-icon>
                <br>
                       <span style="color:white; margin-top:15px;">Directory</span>
                </v-list-item-title>
              
               </v-list-item>
          
            <v-list-item >
               <v-list-item-title  >
              <v-list-item-icon>
                <img src="../assets/calendarname.png" style="color:white" height="40" width="40" >
                </v-list-item-icon>
                <br>
                       <span style="color:white; margin-top:15px;font-size: 11px;">Attendence</span>
                </v-list-item-title>
            </v-list-item>
            <router-link to="/Leave"  style="text-decoration: none; color: inherit;">
            <v-list-item > 
              <v-list-item-title  >
              <v-list-item-icon>
                <img src="../assets/autumn-tree.png" style="color:white" height="40" width="40" >
                </v-list-item-icon>
                <br>
                       <span style="color:white; margin-top:15px;">Leave</span>
                </v-list-item-title>
            </v-list-item>
            </router-link>
           
            <v-list-item > 
 <v-list-item-title  >
              <v-list-item-icon>
                <img src="../assets/save-money.png" style="color:white" height="40" width="40" >
                </v-list-item-icon>
                <br>
                       <span style="color:white; margin-top:15px;">Payroll</span>
                </v-list-item-title>

            </v-list-item>
            
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
  /* height: 100vh; */
  overflow-y: auto;
  position: fixed;
  top: 64px;
  z-index: 100;
}
</style>