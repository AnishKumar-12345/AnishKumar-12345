<template>
  <div>
    <v-app-bar app>
      <router-link to="/HelloWorld" style="text-decoration: none; color: inherit;">
        <v-btn icon @click="HelloWorld">
          <v-icon style="color:pink">mdi-home</v-icon>
        </v-btn>
       
      </router-link>
      <v-img class="mx-2" max-height="40" max-width="40" contain></v-img>

      <v-toolbar-title class="ml-2"> HRMS </v-toolbar-title>
    </v-app-bar>

    <!-- <div style="position: sticky; top: 64px; z-index: 9;left:0">
      <appbarmenu></appbarmenu>
    </div> -->
    <!-- <div style="float:left; width:10%; ">
      <v-card nav dense elevation="10" class="sidemenu">
        <v-list nav dense style="height:100%;background:#05386b;width:90px" align="justify" justify="center">
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
                       <span style="color:white; margin-top:15px;">Calendar</span>
                </v-list-item-title>
            </v-list-item>
          
            <v-list-item > 
              <v-list-item-title  >
              <v-list-item-icon>
                <img src="../assets/autumn-tree.png" style="color:white" height="40" width="40" >
                </v-list-item-icon>
                <br>
                       <span style="color:white; margin-top:15px;">Leave</span>
                </v-list-item-title>
            </v-list-item>

           
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
    </div> -->
<menubar></menubar>
<div >
      <Tabs style="margin-top: 10px">
        <Tab name="OverView " selected="true">
          <div>
            <overviewCompany></overviewCompany>
          </div>
        </Tab>
        <Tab name="Additional">
          <div>
            <Address></Address>
          </div>
        </Tab>

        <Tab name="Department">
          <div>
           <FamilyDetails></FamilyDetails>
          </div>
        </Tab>

        <Tab name="Designation ">
          <div>
            <AdditionalDetails></AdditionalDetails>
          </div>
        </Tab>

        
        <Tab name="Announcement">
          <div>
            <DocumentDetails></DocumentDetails>
          </div>
        </Tab>
      </Tabs>
    </div>


    
  </div>
</template>
<script>
import Tab from "@/components/Tab";
import Tabs from "@/components/Tabs";
import Appbarmenu from "./Appbarmenu";
import Department from "./Department";
import menubar from "./menubar";
import Address from "./Address";
import overviewCompany from "./overviewCompany";



export default {
  name: "CompanyProfile",
  components: {
    Appbarmenu,
    Tab,
    Tabs,
    Department,
    menubar,
    overviewCompany,
    Address
  
    
  },
  data() {
    return {
      count: 1,
      activeComponent: false,
      activefiled: false,
    };
  },
};
</script>
<style scoped>
.sidemenu {
  /* height: 100vh; */
  overflow-y: auto;
  position: fixed;
  top: 64px;
  z-index: 100;
}
.mdi-domain::before {
    content: "\F01D7";
    color: white;
}
.fixed-sidebar-menu {
  display: block;
}
.fixed-sidebar-menu {
  position: fixed;
  top: 159 px;
  height: calc(100 vh - 159 px);
  background: #283655;
  width: 80 px;
  display: none;
}
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
</style>