<template>
  <div>
       <v-app-bar app
    dark
    prominent
    style="height:65px;background:linear-gradient(90deg, rgba(2,101,129,1) 0%, rgba(0,76,95,1) 0%, rgba(0,76,95,1) 48%, rgba(14,114,139,1) 99%);"
    >
 <router-link to="/HelloWorld" style="text-decoration: none; color: inherit;margin-bottom:55px;">
      <v-row>        
          <v-icon style="color:white;margin-left:20px;margin-top:20px;" large >mdi-home</v-icon>
      </v-row>
      </router-link>

<v-toolbar-title class="white--text " style="margin-bottom:55px; margin-left:50px;" ><img src="../assets/dis_logo_2022a.png" alt="dizitiveit.com" width="350px"></v-toolbar-title>
<!-- <v-toolbar-title class="white--text " style="margin-bottom:55px;margin-left:200px; " v-if="drawer == true">  <img src="../assets/dis_logo_2022a.png" alt="dizitiveit.com" width="350px"></v-toolbar-title> -->
<v-spacer></v-spacer>


<v-avatar class="mr-2 mt-1 avt"><img 
          alt="user"
          src="../assets/customer-service.7460972.png"
        
        > <v-file-input
              hide-input
              class="inputpic"
            
              prepend-icon="mdi-plus"
            ></v-file-input></v-avatar>
<v-icon large  color="white" style="padding:10px;" @click="logout()">mdi-logout </v-icon>
</v-app-bar>

    <!-- <v-app-bar app>
      <router-link to="/HelloWorld" style="text-decoration: none; color: inherit;">
      <v-row>
        <v-btn icon>
          <v-icon style="color:red;margin-left:20px" size="30">mdi-home</v-icon>
        </v-btn>
      </v-row>
      </router-link>
      <v-img class="mx-2" max-height="40" max-width="40" contain></v-img>
        <router-link to="/HelloWorld" style="text-decoration: none; color: inherit;margin-left:0px; margin-top:10px;">
      <img src="../assets/dizitive2.png" width="180px" alt="dizitiveit.com" />
        </router-link>
         <v-spacer></v-spacer>
     <v-row >
       <v-col></v-col>
     <v-col></v-col>
     <v-col style="text-align:right;">
         <v-icon style="font-size:30px;"
        @click="logout()"
      large
      color="black"
    >
    mdi-arrow-right-bold-box-outline
    </v-icon>
     </v-col>
       </v-row>
    </v-app-bar> -->
    
    <menubar></menubar>
<div >
      <Tabs >

         <Tab name="LEAVE MASTER" selected="true">
          <div>
           <LeaveMaster></LeaveMaster>
          </div>
        </Tab>
        <Tab name="LEAVE" >
          <div>
           <ApplyLeave></ApplyLeave>
          </div>
        </Tab>








      </Tabs>
    </div>
  </div>
</template>

<script>
import Tab from "@/components/Tab";
import Tabs from "@/components/Tabs";
import menubar from "./menubar";

import ApplyLeave from "./ApplyLeave";
import LeaveMaster from "./LeaveMaster";
import LeaveEntitlement from "./LeaveEntitlement";






export default {
  name: "Leaveprofile",
  components: {

    Tab,
    Tabs,
     menubar,

ApplyLeave,
LeaveMaster,
LeaveEntitlement




  },
  data() {
    return {
      count: 1,
      activeComponent: false,
      activefiled: false,
    };
  },
  methods:{
     logout() {
       localStorage.removeItem("jwt");


            this.$router.replace({path:'/' ,clearHistory: true })


            },


  }
};
</script>
<style scoped>
.inputpic{
  position:absolute;
  margin-left:8px;
}
.avt:hover{
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
