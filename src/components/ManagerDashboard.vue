<template>
  <div>
       <ManagerAppbar title=" "></ManagerAppbar>

      <div>
       <ManagerGetprofile></ManagerGetprofile>
      </div>

  </div>
</template>

<script>
import { mdiAccount, mdiPencil, mdiShareVariant, mdiDelete } from "@mdi/js";

import ManagerAppbar from "./ManagerAppbar";
import ManagerGetprofile from "./ManagerGetprofile.vue";
export default {
  name: "ManagerDashboard",
   props:['userjwt','employeeId'],
  icons: {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
  },
  components: {
    ManagerAppbar,
    ManagerGetprofile
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      drawer: null,
      showText: true,
      items: [


        {
          action: " mdi-bell-ring",
          items: [{ title: "Attendence", to: "/UserAttendenceprofile" }],
          title: "Attendence",
        },
        {
          action: "mdi-ticket",
          items: [
            { title: "Leave", to: "/UserLeaveprofile" },

          ],
          title: "Leave",
        },
        {
          action: "mdi-hand-coin ",
          items: [
            { title: "payRoll", to: "/ManagerPayroll" },

          ],
          title: "Payroll",
        },
      ],
    };

  },

  methods:{

  logOut(){
       localStorage.removeItem("jwt");
      this.$router.push({
                name: "Login",

              });
     }
  }
};
</script>


<style scoped>

.dotted {
  border-style: dotted;
}
.box {
  background-color: #fff;
  box-shadow: none;
  position: relative;
  z-index: 0;
}
.box:hover {
  z-index: 1;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  transform: scale(1.1);
  transition: 0.15s;
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
.abc {
  border: 3px solid;
}

.v-overlay .v-overlay__scrim {
  opacity: 0 !important;
  background-color: green !important;
}
</style>
