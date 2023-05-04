<template>
  <div>
    <!-- <v-app-bar class="abc" color="#283655" app height="90px">
      <v-app-bar-nav-icon
        style="color: white; margin-left: 100px"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      
      <v-app-bar-title>
        <router-link
          to="/HelloWorld"
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
     <v-row >
       <v-col></v-col>
     <v-col></v-col>
     <v-col style="text-align:right;">
         <v-icon
        @click="logout()"
      large
      color="white"
    >
    mdi-arrow-right-bold-box-outline
    </v-icon>
     </v-col>
       </v-row>
    </v-app-bar> -->

    <v-app-bar
    dark
    prominent
    style="height:65px;margin-top:-60px;background:linear-gradient(90deg, rgba(2,101,129,1) 0%, rgba(0,76,95,1) 0%, rgba(0,76,95,1) 48%, rgba(14,114,139,1) 99%);"
    >
<v-app-bar-nav-icon large @click.stop="drawer = !drawer" ></v-app-bar-nav-icon>

<v-toolbar-title class="white--text " style="margin-bottom:55px; " ><img src="../assets/dis_logo_2022a.png" alt="dizitiveit.com" width="350px"></v-toolbar-title>
<!-- <v-toolbar-title class="white--text " style="margin-bottom:55px;margin-left:200px; " v-if="drawer == true">  <img src="../assets/dis_logo_2022a.png" alt="dizitiveit.com" width="350px"></v-toolbar-title> -->
<v-spacer></v-spacer>

  <v-badge overlap :content="this.notification[1].id" :value="this.notification.id" class="mr-2 mt-3" style="position: fixed;margin-left: 85%;">
<v-icon large class=" icn" v-if="cardOpen==false" @click="clickbell()" >mdi-bell</v-icon>
<v-icon large class=" icn" v-if="cardOpen==true" @click="cardclose()" >mdi-bell-ring</v-icon>
</v-badge>&nbsp;&nbsp;
<v-row style="margin-left:44%;">
  <v-card  
    class="mx-auto"
    max-width="220"
    outlined
    v-if="cardOpen==true"
    style="position:absolute;margin-top: 80px;height: 50vh;width: 35vh;"
    >
    <v-list-item-content class="pa-5" v-for="(itm,index) in this.take" :key="index">
        {{ itm.data }}
       
      </v-list-item-content>
      <!-- <v-btn color="error white--text"  class="pa-5" @click="cardclose()">cancel</v-btn> -->
    </v-card>
</v-row>

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
<!-- style="margin-top: 5px; z-index: 10; height: 100vh;background:linear-gradient(90deg, rgba(2,101,129,1) 0%, rgba(0,76,95,1) 0%, rgba(0,76,95,1) 48%, rgba(14,114,139,1) 99%)" -->
    <v-navigation-drawer      
      absolute
      bottom
      style="margin-top: 5px; z-index: 10; height: 110vh;background:#004d63"
      permanent
      expand-on-hover
    >
      <!-- <v-list-item>
        <v-list-item-content>
          <v-list-item-title>MENU</v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->

      <v-divider></v-divider>

      <v-list >


        <v-list-group        
          v-for="item in items"
          :key="item.title"
          no-action
          class="check"
          :prepend-icon="item.action"
         
         style="text-align:left;"
        >
          <v-divider></v-divider>
           <!-- <template v-slot:prepend-icon>
      <v-icon color="blue lighten-2">{{ item.action }}</v-icon>
    </template> -->
          <template v-slot:activator>
            <v-list-item-content >
              <v-list-item-title  v-text="item.title" style="color:white" ></v-list-item-title>
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
              <v-list-item-title v-text="child.title" style="color:white"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item >
          <v-list-item-icon>
            <v-icon>mdi-sitemap</v-icon>
          </v-list-item-icon>

          <v-list-item-title style="text-align:left;color:white">Organization Chart</v-list-item-title>
        </v-list-item>
        <!-- <v-list-item >
          <v-list-item-icon>
            <v-icon>mdi-calendar-today</v-icon>
          </v-list-item-icon>

          <v-list-item-title style="text-align:left;">Calendar</v-list-item-title>
        </v-list-item> -->
        <v-list-item >
          <v-list-item-icon>
            <v-icon>mdi-face-agent </v-icon>
          </v-list-item-icon>

          <v-list-item-title style="text-align:left;">Support</v-list-item-title>
        </v-list-item>
        <v-list-item >
          <v-list-item-icon>
            <v-icon>mdi-cogs</v-icon>
          </v-list-item-icon>

          <v-list-item-title style="text-align:left;">Settings</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- for nav icon expand -->
    <v-navigation-drawer
    v-model="drawer"
     absolute
      temporary      
      style="margin-top: 5px; height: 110vh; background:#004d63"     
    >
      <!-- <v-list-item>
        <v-list-item-content>
          <v-list-item-title>MENU</v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->
      <v-divider></v-divider>

      <v-list>

        <v-list-group
          v-for="item in items"
          :key="item.title"
          no-action          
          :prepend-icon="item.action"
         style="text-align:left;"
        >
          <v-divider></v-divider>

          <template v-slot:activator>
            <v-list-item-content >
              <v-list-item-title v-text="item.title" style="color:white;"> </v-list-item-title>
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

        <v-list-item >
          <v-list-item-icon>
            <v-icon>mdi-sitemap</v-icon>
          </v-list-item-icon>

          <v-list-item-title style="text-align:left;">Organization Chart</v-list-item-title>
        </v-list-item>
        <!-- <v-list-item >
          <v-list-item-icon>
            <v-icon>mdi-calendar-today</v-icon>
          </v-list-item-icon>

          <v-list-item-title style="text-align:left;">Calendar</v-list-item-title>
        </v-list-item> -->
        <v-list-item >
          <v-list-item-icon>
            <v-icon>mdi-face-agent </v-icon>
          </v-list-item-icon>

          <v-list-item-title style="text-align:left;">Support</v-list-item-title>
        </v-list-item>
        <v-list-item >
          <v-list-item-icon>
            <v-icon>mdi-cogs</v-icon>
          </v-list-item-icon>

          <v-list-item-title style="text-align:left;">Settings</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

<!-- Contents for HRMS front page -->

<v-container fluid  
     
> 

   <v-row  class="ml-14  mt-5">
     <v-col cols="12">
      <v-row>
        <v-col md="3">
              <v-card class="same" style="background-color:#33a038;">
                <v-icon large  style="padding:5px; margin:10px; width:50px;margin-top:-20px;color:white;">
                 mdi-account-check
                </v-icon>
                 <h1 style="margin-left:100px;position:absolute;top:80px;color:white;">30</h1>
                <h2 style="margin-left:15px;margin-top:30px;color:white">Present</h2>
              </v-card>
     </v-col>
     <v-col md="3">
              <v-card class="same" style="background-color:#ff1f42;">
                <v-icon large  style="padding:5px; margin:10px; width:50px;margin-top:-20px;color:white;">
                 mdi-account-minus
                </v-icon>
                 <h1 style="margin-left:100px;position:absolute;top:80px;color:white;">2</h1>
                <h2 style="margin-left:15px;margin-top:30px;color:white">Absent</h2>
              </v-card>
     </v-col>
     <v-col md="3">
               <v-card class="same" style="background-color:#ff8b00;">
                <v-icon large style="padding:5px; margin:10px; width:50px;margin-top:-20px;color:white;">
                    mdi-account-off
                </v-icon>               
                <h2 style="margin-left:15px;margin-top:30px;color:white">Leaves</h2>
                  <h1 style="margin-left:100px;position:absolute;top:80px;color:white;">3</h1>
              </v-card>
     </v-col>
     <v-col md="3">
     </v-col>
</v-row>
   <v-row style="margin-left:12%;margin-top:40px">
     <v-col cols="10">
      <v-row>
        <v-col>
          
      <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/company.png" height="80" width="100" />
                  </v-card-text>
                </v-card>
                <router-link to="/CompanyProfile" style="text-decoration:none;">
                   <h4 style="margin-top: 10px;" class="red1">
                  <button class="button-29" role="button">COMPANY</button>
                </h4>
              </router-link>
        <!-- <v-card
        class="mx-auto"
        max-width="265"
      >
      <v-card-title style="margin-left:35px;">
  Company Profile
</v-card-title>  
<img
  src="../assets/company.png"
  width="100px"
  height="100px"
  style="margin-left:75px;"
>

<v-card-actions>
  <v-btn
    color="indigo darken-4"
    text
  >
    Explore
  </v-btn>
</v-card-actions>  
</v-card> -->
     </v-col>
      <v-col  md="3">
        <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/profile.png" height="75" />
                  </v-card-text>
                </v-card>
                <router-link to="/EmployeeProfile" style="text-decoration:none;">
                <h4 style="margin-top: 10px">
                  <button class="button-29" role="button">MY PROFILE</button>
                </h4>
                </router-link>
        <!-- <v-card
        class="mx-auto"
        max-width="265"
      >
      <v-card-title style="margin-left:65px;">
  My Profile
</v-card-title>   
<v-img
  src="../assets/profile.ec3a683.png"
   width="100px"
  height="100px"
   style="margin-left:75px;"
></v-img>



<v-card-actions>
  <v-btn
    color="indigo darken-4"
    text
  >
    Explore
  </v-btn>
</v-card-actions>  
</v-card> -->
     </v-col>
      <v-col  md="3">
        <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/attendance.png" height="75" />
                  </v-card-text>
                </v-card>
                <router-link to="/AttendenceProfile" style="text-decoration:none;">
                <h4 style="margin-top: 10px">     
                  <button class="button-29" role="button">ATTENDANCE</button></h4></router-link>
        <!-- <v-card
        class="mx-auto"
        max-width="265"
      >
      <v-card-title style="margin-left:65px;">
 Attendence
</v-card-title>   
<v-img
  src="../assets/notification.c19b67c.png"
  height="100px"
   width="100px"
    style="margin-left:75px;"
></v-img>



<v-card-actions>
  <v-btn
    color="indigo darken-4"
    text
  >
    Explore
  </v-btn>
</v-card-actions>  
</v-card> -->
     </v-col>
      <v-col  md="3">
        <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/leave.png" height="75" />
                  </v-card-text>
                </v-card>
                <router-link to="/Leaveprofile" style="text-decoration:none;">
                <h4 style="margin-top: 10px">
                  <button class="button-29" role="button">LEAVES</button>
                </h4></router-link>
        <!-- <v-card
        class="mx-auto"
        max-width="265"
      >
      <v-card-title  style="margin-left:85px;">
  Leave
</v-card-title>   
<v-img
  src="../assets/leave.bdfa1ec.png"
   width="100px"
  height="100px"
   style="margin-left:75px;"
></v-img>



<v-card-actions>
  <v-btn
    color="indigo darken-4"
    text
  >
    Explore
  </v-btn>
</v-card-actions>  
</v-card> -->
     </v-col>
      <v-col  md="3">
        <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/salary.png" height="75" />
                  </v-card-text>
                </v-card>
                <router-link to="/PayRoll" style="text-decoration:none;">
                <h4 style="margin-top: 10px">
                  <button class="button-29" role="button">PAYROLL</button>
                </h4>
                </router-link>
        <!-- <v-card
        class="mx-auto"
        max-width="265"
      >
      <v-card-title style="margin-left:85px;">
  Payroll
</v-card-title>  
<v-img
  src="../assets/salary.90f1ab2.png"
   width="100px"
  height="100px"
   style="margin-left:75px;"
></v-img>



<v-card-actions>
  <v-btn
    color="indigo darken-4"
    text
  >
    Explore
  </v-btn>
</v-card-actions>  
</v-card> -->
     </v-col>
      <v-col  md="3">
        <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/report.png" height="75" />
                  </v-card-text>
                </v-card>

                <h4 style="margin-top: 10px">
                  <button class="button-29" role="button">REPORTS</button></h4>
        <!-- <v-card
        class="mx-auto"
        max-width="265"
        
      >
      <v-card-title style="margin-left:47px;">
 Company Chart
</v-card-title>   
<v-img
  src="../assets/report.977f241.png"
   width="100px"
  height="100px"
  style="margin-left:75px;"
></v-img>



<v-card-actions>
  <v-btn
    color="indigo lighten-1"
    text
  >
    Explore
  </v-btn>
</v-card-actions>  
</v-card> -->
     </v-col>
        <v-col  md="3">
          <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/calendar.png" height="75" />
                  </v-card-text>
                </v-card>
                <router-link to="/Calender" style="text-decoration:none;">
                <h4 style="margin-top: 10px">
                  <button class="button-29" role="button">CALENDER</button></h4>
                  </router-link>
        <!-- <v-card
        class="mx-auto"
        max-width="265"
      >
      <v-card-title style="margin-left:68px;">
 Calender
</v-card-title>   
<v-img
  src="../assets/calendar.2ba13f5.png"
  width="100px"
  height="100px"
   style="margin-left:75px;"
></v-img>



<v-card-actions>
  <v-btn
    color="indigo darken-4"
    text
  >
    Explore
  </v-btn>
</v-card-actions>  
</v-card> -->
     </v-col>
     <!-- <v-col  md="3">
          <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/calendar.png" height="75" />
                  </v-card-text>
                </v-card>
                <router-link to="/Announcement" style="text-decoration:none;">
                <h4 style="margin-top: 10px">
                  <button class="button-29" role="button">Announcement</button></h4>
                  </router-link>
                  </v-col> -->
        <v-col  md="3">
          <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/customer-service.png" height="75" />
                  </v-card-text>
                </v-card>
                <h4 style="margin-top: 10px">
                  <button class="button-29" role="button">SUPPORT</button></h4>
        <!-- <v-card
        class="mx-auto"
        max-width="265"
      >
      <v-card-title style="margin-left:80px;">
 Support
</v-card-title>   
<v-img
  src="../assets/customer-service.7460972.png"
   width="100px"
  height="100px"
  style="margin-left:75px;"
></v-img>



<v-card-actions>
  <v-btn
    color="indigo darken-4"
    text
  >
    Explore
  </v-btn>
</v-card-actions>  
</v-card> -->
     </v-col>
     <v-col  md="3">
      <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/report.png" height="75" />
                  </v-card-text>
                </v-card>

                <h4 style="margin-top: 10px">
                  <button class="button-29" role="button"> PAYSLIP</button>
                </h4>
                </v-col>

                <v-col  md="3">
  <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/money-bag.png" height="75" />
                  </v-card-text>
                </v-card>
                <h4 style="margin-top: 10px">
                  <button class="button-29" role="button">EXPENSE</button></h4>
                </v-col>

                <v-col  md="3">
                <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/directory.png" height="75" />
                  </v-card-text>
                </v-card>
                <h4 style="margin-top: 10px">
                  <button class="button-29" role="button">  DIRECTORY</button></h4>
                </v-col>

                
                <v-col  md="3">
                  <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/covid-19.png" height="75" />
                  </v-card-text>
                </v-card>
                <h4 style="margin-top: 10px">
                  <button class="button-29" role="button">COVID WATCH</button>
                </h4>
                </v-col>
                </v-row>
                </v-col>
   </v-row>

  </v-col>
   </v-row>
</v-container>
    <!-- <v-container fluid>
      <v-row>
        <v-col cols="2" style="margin-top: 60px;">
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
        <v-col cols="10">
          <v-container>
            <v-row style="margin-top: 30px; margin-bottom: 30px;">
              <v-col>
                <v-card
                  class="mx-auto rounded-xl"
                  max-width="170"
                  min-height="100"
                  color="#323ADE"
                  elevation="5"
                >
                  <v-card-title class='white--text ml-0'>
                     <span style="width:100%; float:left; margin-top:15px; margin-bottom: 10px;">
                    Present
                     </span>
                    </v-card-title>
                  <v-card-text>
                    <h3 class="headline black--text text--accent-2" style="margin-top:10px">0</h3>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col>
                <v-card
                  class="mx-auto rounded-xl"
                  max-width="170"
                  min-height="100"
                  color="#fd7575"
                  elevation="5"
                >
                  <v-card-title class='white--text ml-0'>
                     <span style="width:100%; float:left; margin-top:15px; margin-bottom: 10px;">
                    Absent</span></v-card-title>
                  <v-card-text>
                    <h3 class="headline black--text text--accent-2" style="margin-top:10px">0</h3>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col>
                <v-card
                  class="mx-auto rounded-xl"
                  max-width="170"
                  min-height="100"
                  color="#ffc37e"
                  elevation="5"
                >
                  <v-card-title class='white--text ml-0'>
                     <span style="width:100%; float:left; margin-top:15px; margin-bottom: 10px;">
                    Leave</span></v-card-title>
                  <v-card-text>
                    <h3 class="headline black--text text--accent-2" style="margin-top:10px">0</h3>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row style="margin-bottom: 25px;">

  <v-col cols="2">
                <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/company.png" height="80" width="100" />
                  </v-card-text>
                </v-card>
                <h4 style="margin-top: 10px">
                  Company Profile
                </h4>
              </v-col>

              <v-col cols="2">
                <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/directory.png" height="75" />
                  </v-card-text>
                </v-card>
                <h4 style="margin-top: 10px">Directory</h4>
              </v-col>

              <v-col cols="2">
                <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/covid-19.png" height="75" />
                  </v-card-text>
                </v-card>
                <h4 style="margin-top: 10px">
                  Covid Watch
                </h4>
              </v-col>
              <v-col cols="2">
                <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/attendance.png" height="75" />
                  </v-card-text>
                </v-card>
                <h4 style="margin-top: 10px">Attendence</h4>
              </v-col>
              <v-col cols="2">
                <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/profile.png" height="75" />
                  </v-card-text>
                </v-card>

                <h4 style="margin-top: 10px">My Profile</h4>
              </v-col>
            </v-row>

            <v-row style="margin-bottom: 25px;">
              <v-col cols="2">
                <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/calendar.png" height="75" />
                  </v-card-text>
                </v-card>
                <h4 style="margin-top: 10px">Calender</h4>
              </v-col>
              <v-col cols="2">
                <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/customer-service.png" height="75" />
                  </v-card-text>
                </v-card>
                <h4 style="margin-top: 10px">Support</h4>
              </v-col>
              <v-col cols="2">
                <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/report.png" height="75" />
                  </v-card-text>
                </v-card>

                <h4 style="margin-top: 10px">Reports</h4>
              </v-col>

              <v-col cols="2">
                <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/report.png" height="75" />
                  </v-card-text>
                </v-card>

                <h4 style="margin-top: 10px">
                  Payslip Generator
                </h4>
              </v-col>

 <v-col cols="2">
                <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img
                      src="../assets/notification.png"
                      height="80"
                      width="100"
                    />
                  </v-card-text>
                </v-card>
                <h4 style="margin-top: 10px">
                  Notification
                </h4>
              </v-col>



            </v-row>

            <v-row style="margin-bottom: 25px;">

              <v-col cols="2">
                <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/salary.png" height="75" />
                  </v-card-text>
                </v-card>
                <h4 style="margin-top: 10px">Payroll</h4>
              </v-col>


              <v-col cols="2">
                <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/money-bag.png" height="75" />
                  </v-card-text>
                </v-card>
                <h4 style="margin-top: 10px">Expense</h4>
              </v-col>
              <v-col cols="2">
                <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img src="../assets/leave.png" height="75" />
                  </v-card-text>
                </v-card>

                <h4 style="margin-top: 10px">Leave</h4>
              </v-col>

              <v-col cols="2">
                <v-card class="mx-auto box" width="120">
                  <v-card-text>
                    <img
                      src="../assets/notification.png"
                      height="80"
                      width="100"
                    />
                  </v-card-text>
                </v-card>
                <h4 style="margin-top: 10px">
                  Notification
                </h4>
              </v-col>
            </v-row>

    

          </v-container>
        </v-col>
     
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
import { mdiAccount, mdiPencil, mdiShareVariant, mdiDelete } from "@mdi/js";
export default {
  name: "HelloWorld",

  icons: {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
  },
  components: {},
  data() {
    return {
      cardOpen:false,
      msg: "Welcome to Your Vue.js App",
      drawer: false,
      showText: true,
      take:[],
      notification:[{
        id:"1",
        data:"I am Anish"
      },
      {
      id:"2",
      data:"I am Varun"
    }      
    ],
      dialog:false,
      items: [
        {
          action: "mdi-home-city",
         
          active: true,
          items: [{ title: "Company Profile", to: "/CompanyProfile" ,color:"white" }],

          title: "Company Profile",
        },
        {
          action: "mdi-account",
          items: [{ title: "Employee Profile", to: "/EmployeeProfile" }],
          title: "My Profile",
        },
        {
          action: " mdi-bell-ring",
          items: [{ title: "Attendance", to: "/AttendenceProfile" }],
          title: "Attendance",
        },
        {
          action: "mdi-ticket",
          items: [
            { title: "Leave", to: "/Leaveprofile" },


          ],
          title: "Leave",
        },
        {
          action: "mdi-hand-coin ",
          items: [
            { title: "Payroll Generation", to: "/PayRoll" },

          ],
          title: "Payroll",
        },
        {
          action: "mdi-calendar-today",
          items: [
            { title: "Calender", to: "/Calender" },

          ],
          title: "Calender",
        },
        {
          action: "mdi-bullhorn",
          items: [
            { title: "Announcement", to: "/Announcement" },

          ],
          title: "Announcement",
        }
      ],
    };

  },
  methods:{
    cardclose(){
      this.cardOpen=false;
    },
    clickbell(){
     
      this.cardOpen=true;

      var check = [];
     for(var i=0;i<this.notification.length;i++){
       this.take.push(this.notification[i]);  
       console.log(this.take);       
     }  

 

    },
    logout() {
       localStorage.removeItem("jwt");


            this.$router.replace({path:'/' ,clearHistory: true })


            },

  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap");
/* @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"); */
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
.same{
  height: 130px;
  width: 200px;
  margin-left: 195px; 
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.inputpic{
  position:absolute;
  margin-left:8px;

}
.avt:hover{
  background-color: rgba(0, 0, 0, 0.5);
}
/* .v-list-item__title {
    -ms-flex-item-align: center;
    align-self: center;
    font-size: 1rem;
    color: black;
} */
.mdi:before, .mdi-set {
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
}
/* :after, :before {
    text-decoration: inherit;
    vertical-align: inherit;
    color: white;
} */
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: rgb(253 245 245 / 87%);
}
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
/* .abc {
  border: 3px solid;
} */

.v-overlay .v-overlay__scrim {
  opacity: 0 !important;
  background-color: green !important;
}


/* .v-sheet.v-card:not(.v-sheet--outlined) {
 -webkit-box-shadow: 0 0px 0px 0px rgb(0 0 0 / 20%), 0 0px 0px 0 rgb(0 0 0 / 14%), 0 0px 0px 0 rgb(0 0 0 / 12%);
 
} */
/* h4 {
    color: #c30a0a!important;
     font-family:  'Nanum Pen Script';
     font-size: 25px;
} */
/* .theme--light.v-icon {
    color: white !important;
} */
.v-icon {
    color: rgb(255, 255, 255) !important;
  }
.check{    
    color: white;
  }
.theme--light.v-data-table .v-data-table-header th.sortable:hover {
  color: white;
}

.button-29 {
  align-items: center;
  appearance: none;
  background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: Arial, Helvetica, sans-serif;
  height: 43px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 14px;
}

.button-29:focus {
  box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
}

.button-29:hover {
  box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-29:active {
  box-shadow: #3c4fe0 0 3px 7px inset;
  transform: translateY(2px);
}
</style>
