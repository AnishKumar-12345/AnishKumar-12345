<template>
    <div >
      <v-app-bar app
    dark
    prominent
    style="height:65px;background:linear-gradient(90deg, rgba(2,101,129,1) 0%, rgba(0,76,95,1) 0%, rgba(0,76,95,1) 48%, rgba(14,114,139,1) 99%);"
    >
<v-app-bar-nav-icon large @click.stop="drawer = !drawer" ></v-app-bar-nav-icon>

<v-toolbar-title class="white--text " style="margin-bottom:55px; " v-if="drawer == false"><img src="../assets/dis_logo_2022a.png" alt="dizitiveit.com" width="350px"></v-toolbar-title>
<v-toolbar-title class="white--text " style="margin-bottom:55px;margin-left:200px; " v-if="drawer == true">  <img src="../assets/dis_logo_2022a.png" alt="dizitiveit.com" width="350px"></v-toolbar-title>
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
    <!-- <v-app-bar app
     class="abc" color="#283655"  height="90px"
    >
     <v-app-bar-nav-icon
        style="color: white; margin-left: 100px"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-img class="mx-2" max-height="40" max-width="40" contain></v-img>
      <v-app-bar-title>
        <router-link
          to="/ManagerDashboard"
          style="text-decoration: none; color: inherit"
        >
          <img
            src="../assets/dizitive.png"
            width="180px"
            alt="dizitiveit.com"
          />
        </router-link>
      </v-app-bar-title>

      <v-spacer></v-spacer>



      <v-row>
        <v-col style="text-align:right;">
      <v-btn type="submit"  :disabled="isFormValid" @click="PostIntime()" style="background:red;color:white">
       Web Clock In
      </v-btn>
       </v-col>
       <v-col  style="text-align:left;">
      <v-btn type="submit" @click="PostOuttime()" style="background:red;color:white">
      Web Clock Out
      </v-btn>
        </v-col>
        <v-icon
        @click="logout()"
      large
      color="white"
    >
      mdi-arrow-right-bold-box-outline
    </v-icon>
      </v-row>

    </v-app-bar> -->
 <!-- on hover -->
 <v-navigation-drawer
      absolute
      bottom
      style="margin-top: 65px;z-index: 100; height: 100vh;background:linear-gradient(90deg, rgba(2,101,129,1) 0%, rgba(0,76,95,1) 0%, rgba(0,76,95,1) 48%, rgba(14,114,139,1) 99%);position:fixed;"
      permanent
      expand-on-hover
    >
      <!-- <v-list-item>
        <v-list-item-content>
          <v-list-item-title>MENU</v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->

      <v-divider></v-divider>

      <v-list>
        <!-- <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title style="text-align:left;">Dashboard</v-list-item-title>
        </v-list-item> -->
        <!-- <v-list-item to="/HelloWorld">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title style="text-align:left;">Payslip Generator</v-list-item-title>
        </v-list-item> -->

        <v-list-group
          v-for="item in items"
          :key="item.title"
          no-action
          :prepend-icon="item.action"
         style="text-align:left;"
        >
          <v-divider></v-divider>

          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"  style="color:white" > </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            :to="child.to"
            router
            exact
             style="text-align:left;"
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"  style="color:white" ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>


      </v-list>
    </v-navigation-drawer>
    <!-- on button click -->
    <v-navigation-drawer
    v-model="drawer"
      absolute
      temporary
      style="position:fixed;margin-top: 65px;background:linear-gradient(90deg, rgba(2,101,129,1) 0%, rgba(0,76,95,1) 0%, rgba(0,76,95,1) 48%, rgba(14,114,139,1) 99%)"
    >
      <!-- <v-list-item>
        <v-list-item-content>
          <v-list-item-title>MENU</v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->

      <v-divider></v-divider>

      <v-list>
        <!-- <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title style="text-align:left;">Dashboard</v-list-item-title>
        </v-list-item> -->
        <!-- <v-list-item to="/HelloWorld">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title style="text-align:left;">Payslip Generator</v-list-item-title>
        </v-list-item> -->

        <v-list-group
          v-for="item in items"
          :key="item.title"
          no-action
          :prepend-icon="item.action"
         style="text-align:left;"
        >
          <v-divider></v-divider>

          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"  style="color:white" > </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            :to="child.to"
            router
            exact
             style="text-align:left;"
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"  style="color:white" ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>


      </v-list>
    </v-navigation-drawer>
    <div>
   <v-row style="margin:20px;margin-bottom:-80px;">
    <v-col cols="6">
      <clock border="none" bg="radial-gradient(circle, #ecffe5, #fffbe1, #235197)" style="box-shadow: rgba(0,107,156, 0.4) 0px 5px, rgba(0,107,156, 0.3) 0px 10px, rgba(0,107,156, 0.2) 0px 15px, rgba(0,107,156, 0.1) 0px 20px, rgba(0,107,156, 0.05) 0px 25px;"></clock> 
      
    </v-col>
    <v-col  cols="6" style="margin-top:30px;">
      <v-btn type="submit"  :disabled="isFormValid" @click="PostIntime()" style="background:red;color:white">
       Web Clock In
      </v-btn>
      <v-btn type="submit" @click="PostOuttime()" style="background:red;color:white">
      Web Clock Out
      </v-btn>
      <br>
      <br>
      <span style="border:1px solid rgba(0,107,156, 0.4);padding:10px;box-shadow: rgba(0,107,156, 0.4) 5px 5px, rgba(0,107,156, 0.3) 10px 10px, rgba(0,107,156, 0.2) 15px 15px, rgba(0,107,156, 0.1) 20px 20px, rgba(0,107,156, 0.05) 25px 25px;">{{ computedDateFormattedDatefns }}</span>
    </v-col>
   </v-row>
  
   </div>
    <v-snackbar color="green" v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
</div>
</template>
<script>
import { format, parseISO } from 'date-fns'
import Clock from 'vue-clock2';
import servicescall from "../Services";
export default {
  name:"AppBar",
  mixins: [servicescall],
  components: { Clock },
       data: () => ({
        date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
          userid:"",
          messageText:"",
           isFormValid: false,
            snackbar: false,
      text: "",
    msg: "Welcome to Your Vue.js App",
      drawer: false,
      showText: true,
      items: [


        {
          action: " mdi-bell-ring",
          items: [{ title: "Attendence", to: "/ManagerAttendanceProfile" }],
          title: "Attendence",
        },
        {
          action: "mdi-ticket",
          items: [
            { title: "Leave", to: "/ManagerLeaveProfile" },

          ],
          title: "Leave",
        },
        {
          action: "mdi-hand-coin ",
          items: [
            { title: "Payroll", to: "/ManagerPayroll" },

          ],
          title: "Payroll",
        },
      ],
  }),
  mounted(){
     this.getToday()
  },
  computed: {
    computedDateFormattedDatefns () {
        return this.date ? format(parseISO(this.date), 'EEEE, MMMM do yyyy') : ''
      },
},
   methods:{

     PostIntime() {
        var userid =localStorage.getItem('id')
      console.log("1234",  userid);

      console.log("satya", userid);
      this.InTimePost( userid)
        .then((response) => {
          console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;

        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
        })
        .then(() => {});
    },

    PostOuttime() {
       var userid =localStorage.getItem('id')

      console.log("check", userid);
      this.OutTimePost( userid)
        .then((response) => {
          console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;

        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
        })
        .then(() => {});
    },
     getToday() {
     this.userid =localStorage.getItem('id')
      console.log("satya id",this.userid)
      this.getTodayAttendance(this.userid).then((response) => {

       this.messageText=response.data.message
        console.log("In post", this.messageText);
      });
    },
     logout() {
       localStorage.removeItem("jwt");


            this.$router.replace({path:'/' ,clearHistory: true })


            },


  }
}
</script>
<style>
/* .mdi[data-v-469af010]:before, .mdi-set[data-v-469af010] {
    display: inline-block;
    font: normal normal normal 24px/1 "Material Design Icons";
    font-size: inherit;
    text-rendering: auto;
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(255, 255, 255);   
    padding: 2px; 
    width: 100px px;  
    border-radius: 400px;
} */
/* .v-list-item__title {
    -ms-flex-item-align: center;
    align-self: center;
    font-size: 1rem;
    color: white;
} */
/* .mdi:before, .mdi-set {
    display: inline-block;
    font: normal normal normal 24px/1 "Material Design Icons";
    font-size: inherit;
    text-rendering: auto;
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
:after, :before {
    text-decoration: inherit;
    vertical-align: inherit;
    color: white;
} */
.inputpic{
  position:absolute;
  margin-left:8px;
}
.avt:hover{
  background-color: rgba(0, 0, 0, 0.5);
}
.mdi-bell-ring::before {
    content: "\F009E";
    color: white;
}
.mdi-ticket::before{
  color: white;
}
.mdi-hand-coin::before{
  color: white;
}
</style>