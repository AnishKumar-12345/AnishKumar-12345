<template>
  <div style="float:left; width:10%;  ">
      <v-card nav dense elevation="10" class="sidemenu">
        <v-list nav dense style="height:100%;background:linear-gradient(90deg, rgba(2,101,129,1) 0%, rgba(0,76,95,1) 0%, rgba(0,76,95,1) 48%, rgba(14,114,139,1) 99%);width:90px; margin-top:-8px;" align="justify" justify="center">
          <v-list-item-group active-class="deep-purple--text text--accent-4">
             
           <router-link to="/UserAttendenceprofile"  style="text-decoration: none; color: inherit;">
            <v-list-item >
               <v-list-item-title  >
              <v-list-item-icon>
                <img src="../assets/calendarname.png" style="color:white;margin-left:-20px" height="40" width="40" >
                </v-list-item-icon>
                <br>
                       <span style="color:white; margin-top:15px;font-size: 11px;">Attendance</span>
                </v-list-item-title>
            </v-list-item>
           </router-link>
            <router-link to="/UserLeaveprofile"  style="text-decoration: none; color: inherit;">
            <v-list-item > 
              <v-list-item-title  >
              <v-list-item-icon>
                <img src="../assets/autumn-tree.png" style="color:white;margin-left:-20px" height="40" width="40" >
                </v-list-item-icon>
                <br>
                       <span style="color:white; margin-top:15px;">Leave</span>
                </v-list-item-title>
            </v-list-item>
            </router-link>
           <router-link to="/Userpayslipprofile"  style="text-decoration: none; color: inherit;">
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
  name:"Usermenu"
}
</script>
<style scoped>
.sidemenu {
  height:100vh;
  overflow-y: auto;
  position: fixed;
  top: 64px;
  z-index: 100;
}
</style>