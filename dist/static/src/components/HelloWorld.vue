<template>
  <div style="color-red">
    <v-app-bar color="#283655" app>
      <v-app-bar-nav-icon style="color:white" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img class="mx-2" max-height="40" max-width="40" contain></v-img>

      <v-toolbar-title class="ml-2" style="color:white" > HRMS </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>MENU</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

    <v-list>
      <v-list-group
       v-for="item in items"
        :key="item.title"


        no-action

               :prepend-icon="item.action"

      >
                         <v-divider></v-divider>

        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title">

            </v-list-item-title>

          </v-list-item-content>

        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
           :to="child.to"
        router
        exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
    </v-navigation-drawer>

    <v-container fluid>
      <v-row style="margin-left: 100px">
        <v-col cols="2" style="margin-top: 60px">
          <v-card
            max-width="150"
            min-height="100"
            style="border: 3px dotted blue"
          >
            <v-file-input
              hide-input
              style="margin-left: 50px"
              prepend-icon="mdi-plus"
            ></v-file-input>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-container>
            <v-row style="margin-top: 30px">
              <v-col>
                <v-card
                  class="mx-auto"
                  max-width="150"
                  min-height="100"
                  color="#323ADE"
                >
                  <v-card-title>Present</v-card-title>
                  <v-card-text>
                    <h2 style="color: white">0</h2>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col>
                <v-card
                  class="mx-auto"
                  max-width="150"
                  min-height="100"
                  color="#fd7575"
                >
                  <v-card-title>Present</v-card-title>
                  <v-card-text>
                    <h2 style="color: white">0</h2>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col>
                <v-card
                  class="mx-auto"
                  max-width="150"
                  min-height="100"
                  color="#ffc37e"
                >
                  <v-card-title>Leave</v-card-title>
                  <v-card-text>
                    <h2 style="color: white">0</h2>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-card class="mx-auto" max-width="150" min-height="100">
                  <v-card-text>
                    <img src="../assets/directory.png" height="80" width="100" >
                  </v-card-text>
                </v-card>

                <h4 style="margin-right: 45px; margin-top: 10px">Directory</h4>
              </v-col>

              <v-col cols="4">
                <v-card class="mx-auto" max-width="150" min-height="100">
                  <v-card-text>
                      <img src="../assets/covid-19.png" height="80" width="100" >
                  </v-card-text>
                </v-card>
                <h4 style="margin-right: 45px; margin-top: 10px">
                  Covid Watch
                </h4>
              </v-col>
              <v-col cols="4">
                <v-card class="mx-auto" max-width="150" min-height="100">
                  <v-card-text>
                     <img src="../assets/attendance.png" height="80" width="100" >
                     </v-card-text>
                </v-card>
                <h4 style="margin-right: 45px; margin-top: 10px">Attendence</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-card class="mx-auto" max-width="150" min-height="100">
                  <v-card-text>
                      <img src="../assets/profile.png" height="80" width="100" >
                  </v-card-text>
                </v-card>

                <h4 style="margin-right: 45px; margin-top: 10px">My Profile</h4>
              </v-col>

              <v-col cols="4">
                <v-card class="mx-auto" max-width="150" min-height="100">
                  <v-card-text>

                     <img src="../assets/calendar.png" height="80" width="100" >
                  </v-card-text>
                </v-card>
                <h4 style="margin-right: 45px; margin-top: 10px">Calender</h4>
              </v-col>
              <v-col cols="4">
                <v-card class="mx-auto" max-width="150" min-height="100">
                  <v-card-text>
                     <img src="../assets/customer-service.png" height="80" width="100" >
                  </v-card-text>
                </v-card>
                <h4 style="margin-right: 45px; margin-top: 10px">Support</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-card class="mx-auto" max-width="150" min-height="100">
                  <v-card-text>
                     <img src="../assets/report.png" height="80" width="100" >
                  </v-card-text>
                </v-card>

                <h4 style="margin-right: 45px; margin-top: 10px">Reports</h4>
              </v-col>

              <v-col cols="4">
                <v-card class="mx-auto" max-width="150" min-height="100">
                  <v-card-text>
                     <img src="../assets/salary.png" height="80" width="100" >
                  </v-card-text>
                </v-card>
                <h4 style="margin-right: 45px; margin-top: 10px">Payroll</h4>
              </v-col>
              <v-col cols="4">
                <v-card class="mx-auto" max-width="150" min-height="100">

                  <v-card-text>
                     <img src="../assets/money-bag.png" height="80" width="100" >
                  </v-card-text>
                </v-card>
                <h4 style="margin-right: 45px; margin-top: 10px">Expense</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-card class="mx-auto" max-width="150" min-height="100">
                  <v-card-text>
                     <img src="../assets/leave.png" height="80" width="100" >
                  </v-card-text>
                </v-card>

                <h4 style="margin-right: 45px; margin-top: 10px">Leave</h4>
              </v-col>

              <v-col cols="4">
                <v-card class="mx-auto" max-width="150" min-height="100">
                  <v-card-text>
                     <img src="../assets/notification.png" height="80" width="100" >
                  </v-card-text>
                </v-card>
                <h4 style="margin-right: 45px; margin-top: 10px">
                  Notification
                </h4>
              </v-col>
              <v-col cols="4">
                <v-card class="mx-auto" max-width="150" min-height="100">
                  <v-card-text>
                    <img src="../assets/company.png" height="80" width="100" >
                  </v-card-text>
                </v-card>
                <h4 style="margin-right: 45px; margin-top: 10px">
                  Company Profile
                </h4>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="4">
          <v-row style="margin-top: 60px">
            <v-card class="mx-auto" max-width="344" outlined color="#5632a8">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">OVERLINE</div>
                  <v-list-item-title class="text-h5 mb-1">
                    Headline 5
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >Greyhound divisely hello coldly
                    fonwderfully</v-list-item-subtitle
                  >
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn outlined rounded text> Button </v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
          <v-row style="margin-top: 60px">
            <v-card class="mx-auto" max-width="344" color="#35ccc2" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">OVERLINE</div>
                  <v-list-item-title class="text-h5 mb-1">
                    Headline 5
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >Greyhound divisely hello coldly
                    fonwderfully</v-list-item-subtitle
                  >
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn outlined rounded text> Button </v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
          <v-row style="margin-top: 60px">
            <v-card class="mx-auto" max-width="344" outlined color="#1F7087">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">OVERLINE</div>
                  <v-list-item-title class="text-h5 mb-1">
                    Headline 5
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >Greyhound divisely hello coldly
                    fonwderfully</v-list-item-subtitle
                  >
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn outlined rounded text> Button </v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Appbar from "./Appbar.vue";
import { mdiAccount, mdiPencil, mdiShareVariant, mdiDelete } from "@mdi/js";
export default {
  name: "HelloWorld",

  icons: {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
  },
  components: {
    Appbar,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      drawer: null,
      items: [
        {
          action: 'mdi-ticket',

          title: 'Dashboard',
          to:'/HelloWorld',
        },
         {
          action: 'mdi-ticket',

          title: 'Payslip Generator',
        },
        {
          action: 'mdi-account',
          active: true,
          items: [
        {  title: 'New Employee', to: '/EmployeeReg' },
        {  title: 'Employee Update', to: '/HrmsDashboard' },
        {  title: 'Employee Shift Assign', to: '/EmployeeShiftDetails' }

      ],

          title: 'Company Profile',
        },
        {
          action: 'mdi-account',
           items: [
        {  title: 'CompanyProfile', to: '/CompanyProfile' },
        {  title: 'View Own Leave Request', to: '/Department' },
        {  title: 'Approve Leave request', to: '/ApproveleaveRequest' },
        {  title: 'View Employee Leaves', to: '/Viewleaves' }


      ],
          title: 'My Profile',
        },
        {
          action: 'mdi-account',
          items: [ {  title: 'EmployeeProfile', to: '/EmployeeProfile' },
                   {  title: 'View Holidays', to: '/Viewholidays' }
],
          title: 'Attendence',
        },
        {
          action: 'mdi-ticket',
           items: [ {  title: 'Add Holiday', to: '/Addholiday' },
                   {  title: 'View Holidays', to: '/Viewholidays' }
],
          title: 'Leave',
        },

      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dotted {
  border-style: dotted;
}
.box {
  background-color: #fff;
  box-shadow: 0 0 0 1px #e2e9ed;
  padding: 60px 10px;
  position: relative;
  z-index: 0;
  transition: 0.2s all;
}
.box:hover {
  z-index: 1;
  /* box-shadow: 0 8px 50px rgba(0, 0, 0, 2); */
  transform: scale(1.05);
}
.rounded-corner {
  border-radius: 20px;
}
#part1 {
  background-color: beige;
  width: 25%;
  float: right;
  height: 900px;
}
#part2 {
  background-color: skyblue;
  width: 25%;
  float: left;
  height: 900px;
}
#part3 {
  background-color: greenyellow;
  width: 50%;
  max-width: 0 auto;
  height: 900px;
}
#a {
  border-style: solid;
}
</style>
