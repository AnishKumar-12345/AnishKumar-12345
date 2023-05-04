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

<v-toolbar-title  style="margin-bottom:55px; margin-left:50px;" ><img src="../assets/dis_logo_2022a.png" alt="dizitiveit.com" width="350px"></v-toolbar-title>

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
<menubar></menubar>

<v-row style="margin-left:120px">
    <v-col cols="7" >
        <v-card
class="mx-auto"
max-width="800"
elevation="6"
style="margin:40px;"
>
<v-card-title 
style="background-color:rgba(107,126,149,255);color: white;"
><span style="margin-left:30px;padding: 15px;">Announcement and Press</span></v-card-title>
<v-card-text
class="text--primary"
style="font-size: 13px;margin: 20px;"
>
    <span style="margin-left:-9px;">Fill in the subject and body of the announcement and press send .Employees will receive a notification shortly.</span> 

   <v-row>
    <v-col cols="6" style="margin:20px">
    <v-text-field
    label="Title"
    outlined
    dense
    >
    </v-text-field>
    </v-col>
    <v-col
        cols="10"
        style="margin:20px;margin-top: -35px;"
      >
        <v-textarea
          filled
          label="Enter an announcement body"
          rows="5"
          row-height="30"
          prepend-inner-icon="mdi-comment"
          outlined
          clearable
      clear-icon="mdi-close-circle"
        ></v-textarea>
      </v-col>
   </v-row>
</v-card-text>
<v-card-actions >
    <v-btn depressed color="cyan" style="margin-left: 75%; ">Announce <v-icon>mdi-share</v-icon></v-btn>
</v-card-actions>
</v-card>
    </v-col>
    <v-col cols="5">
        <v-card width="400" style="margin:40px;" elevation="6">
        <v-img
          height="200px"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >
          <!-- <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

            <v-toolbar-title class="text-h6 white--text pl-0">
              Messages
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
              color="white"
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar> -->

          <v-card-title class="white--text mt-8">
            <v-avatar size="56" style="margin:10px">
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              >
            </v-avatar>
            <p class="ml-3">
              Admin
            </p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Announcements
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> @{{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-col>
</v-row>

    </div>
  </template>
    <script>
       import menubar from "./menubar"; 
    export default {
        name: "Announcement",
    components: {
        menubar
    },
      data: () => ({
        messages: [
        {
          from: 'Admin',
          message: `Meeting at 2:30.`,
          time: '10:42am',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'Admin',
          message: 'Diwali celebration?',
          time: '10:37am',
          color: 'green',
        },
        {
          from: 'Admin',
          message: 'Ugadi Celebration in office?',
          time: '9:47am',
          color: 'deep-purple lighten-1',
        },
      ],
      }),
     
     
    }
  </script>
<style>
.inputpic{
  position:absolute;
  margin-left:8px;
}
.avt:hover{
  background-color: rgba(0, 0, 0, 0.5);
}
</style>