<template>
  <div>
    <v-app-bar app color="#283655">
      <router-link to="/HelloWorld">
        <v-btn icon @click="HelloWorld">
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>

      <v-toolbar-title
        class="white--text"
        style="margin-left: 530px; color: white"
        >{{ title }}</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-row>
         <v-col   >
            <router-link to="/AdminDashboard" style=" text-decoration:none;">
         <v-icon medium  color="white" style="padding-top: 10px;" :class="{ active: activeAccount = true }" >mdi-home </v-icon>
         </router-link>
        </v-col> 

         <v-col cols="3">
         <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon class="white--text">mdi-account-plus</v-icon>
          </v-btn>
        </template>

        <!-- <v-list>
          <v-list-item
            v-for="(n,index) in contactList"
            :key="index"
            @click="() => {}"
          >
           <router-link  :to=n.value style=" text-decoration:none">
            <v-list-item-title> {{ n.text }}</v-list-item-title>
           </router-link>
          </v-list-item>
        </v-list> -->
      </v-menu>
      </v-col>
        <!-- <v-col cols="1">
           <router-link to="/ContactList" style=" text-decoration:none">
         <v-icon medium  color="white"  >mdi-account-plus </v-icon>
           </router-link>
        </v-col> -->
        <!-- <v-col>
           <router-link to="/ContactDetails" style=" text-decoration:none">
         <v-icon medium  color="white"  >mdi-card-account-phone-outline </v-icon>
         </router-link>
        </v-col> -->
        <!-- <v-col style="text-align:center;" class="white--text pt-6 pl-5">
      <v-icon medium  color="white" class="mt-3"  >mdi-account </v-icon> 
       {{this.user}}
      </v-col> -->
        
        <v-col>  <v-icon medium  color="white"  class="mt-3 mr-2"  @click="logOut">mdi-logout </v-icon></v-col>
          </v-row>
      <v-toolbar-items> </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Appbar",
  props: ["title"],
  data() {
    return {
      user:'',
      activeAccount: false,
       contactList:[{text:'Contact Dashboard', value:'/ContactList'},
                    {text:'Contact Details',value:'/ContactDetails'}
        ]
    };
  },
   mounted() {
     this.user=localStorage.getItem('user')
     console.log("user",this.user)
   },methods:{
  //    goHome(){
  // this.$store.commit("updateChildReplace",'a');
  //    this.$router.push({ path: 'AdminDashboard' })

       
  //    },
     logOut(){
       localStorage.removeItem("user");
      this.$router.push({
                name: "Login",
               
              });
     }
   },
};
</script>

<style scoped>
.active { 
  color: rgb(35, 196, 69);
  /* background-color: #5C6BC0;   */
}
</style>