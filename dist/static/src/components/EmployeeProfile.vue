<template>
  <div style="background-color:#e7f0f2;" >
   
     <!-- <Appbar title="HRMS" ></Appbar> -->
     <v-app-bar app>
      <router-link to="/HelloWorld">
        <v-btn icon @click="HelloWorld">
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
      <v-img class="mx-2" max-height="40" max-width="40" contain></v-img>

      <v-toolbar-title class="ml-2"> HRMS </v-toolbar-title>
    </v-app-bar>
    
    <menubar></menubar>
    
    <div >
      <Tabs style="margin-top: 10px">
        <Tab name="Personal " selected="true">
          <div>
            <PersonalData></PersonalData>
          </div>
        </Tab>
        <Tab name="Work ">
          <div>
            <Basicinfo></Basicinfo>
          </div>
        </Tab>

        <Tab name="Family">
          <div>
           <FamilyDetails></FamilyDetails>
          </div>
        </Tab>

        <Tab name="Additional ">
          <div>
            <AdditionalDetails></AdditionalDetails>
          </div>
        </Tab>

        
        <Tab name="Document">
          <div>
            <DocumentDetails></DocumentDetails>
          </div>
        </Tab>
         <Tab name="Attendence">
          <div>
            <DocumentDetails></DocumentDetails>
          </div>
        </Tab>
         <Tab name="Leave">
          <div>
            <DocumentDetails></DocumentDetails>
          </div>
        </Tab>
         <Tab name="Payroll">
          <div>
            <DocumentDetails></DocumentDetails>
          </div>
        </Tab>
        
      </Tabs>
    </div>
    

   
   
  </div>
</template>
<script>
import Appbarmenu from "./Appbarmenu";
import FamilyDetails from "./FamilyDetails.vue"
import Department from "./Department";
import Tabs from "./Tabs.vue";
import Tab from "./Tab.vue";
import Appbar from "./Appbar.vue";
import Basicinfo from "./Basicinfo.vue";
import PersonalData from "./PersonalData.vue"
import menubar from "./menubar";
import AdditionalDetails from "./AdditionalDetails";


export default {
  name: "EmployeeProfile",
  components: {
     Appbar,
    Appbarmenu,
    Tabs,
    Tab,
    Department,
    employeedetails,
    Basicinfo,
    PersonalData,
    menubar,
   AdditionalDetails
  },
  data() {
    return {
      count: 1,
      activeComponent: false,
      activefiled: true,
    };
  },
};
</script>
<style scoped>
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