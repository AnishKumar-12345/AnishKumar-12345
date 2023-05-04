<template>
  <div style="width: 100%">
    <div class="menu-bar">
      <ul>
       
        <li class="mdi mdi-home" v-show="this.role != 'ROLE_SECURITY_MANAGER'">
          <router-link
            v-if="this.role == 'ROLE_ADMIN'"
            to="/AdminDashborad"
            style="text-decoration: none"
          >
            Building
          </router-link>
          <router-link
            v-else
            to="/CompanyProfile"
            style="text-decoration: none"
          >
            Personal
          </router-link>
        </li>
        <li class="mdi mdi-shield-home">
          <router-link
            to="/CompanyProfile/Department"
            style="text-decoration: none"
          >
            Work</router-link
          >
        </li>
        <!-- <li class="mdi mdi-account" v-show="this.role!='ROLE_MANAGER'">
              <router-link to="/Getvisitorsoltdetails"  style="text-decoration: none;"> Visitor</router-link>
          <div class="sub-menu-1">
                <ul>
                    
                    <li><router-link to="/VisitorSlotRegistration" style="text-decoration: none;">Parking slot<br>Registration
                    </router-link>
                    </li>
                     <li ><router-link  to="/AdditionalSlotReg"  style="text-decoration: none;">Assign slots to Flat 
                     </router-link>
                    </li>
                    <li ><router-link  to="/Getvisitorsoltdetails"  style="text-decoration: none;">Visitor search
                     </router-link>
                    </li>
                   
                    
                       
                    
                    
    
                </ul>
            </div>
        
        
        
        </li> -->

        <li class="mdi mdi-book" v-show="this.role != 'ROLE_MANAGER'">
          <router-link to="/CompanyProfile" style="text-decoration: none">
            Education</router-link
          >
        </li>
        <li class="mdi mdi-file">
          <router-link to="/ReportDashboard" style="text-decoration: none"
            >Family</router-link
          >
        </li>
        <li><a href="#">Documents</a></li>

        <!-- <li class="mdi mdi-bell" ><a href ="#" ></a></li> -->
      </ul>
    </div>
    <!-- <div class="menu_bar">
    
    <div class="heading">
           Building Management System
    </div>
    <div class="menu-items">
          <ul>
               <li> <i class="mdi mdi-home" aria-hidden="true"></i>Home 
                   <div  class="menu-inner-items"> <ul>
                        <li>Owner</li>
                        <li>Owner</li>
                        <li>Owner</li>
                    
                    
                    
                    
                    </ul></div>
               
               
               </li> 
               <li><i class="mdi mdi-home" aria-hidden="true"></i>Building</li> 
               <li><i class="mdi mdi-car" aria-hidden="true"></i>Parking</li> 
                <li><i class="mdi mdi-account" aria-hidden="true"></i>Vistor</li> 
               <li>About Us</li> 
               <li><i class="mdi mdi-phone" aria-hidden="true"></i> ContactUs</li> 
               <li><i class="mdi mdi-logout" aria-hidden="true"></i>Log Out </li> 
               
           </ul>
    </div>
</div> -->
  </div>
</template>
<script>
import Department from "./Department";
export default {
  name: "Appbar",
  components: {
    Department,
  },
  data() {
    return {
      role: "",
    };
  },

  mounted() {
    this.jwtToken = localStorage.getItem("jwt");
    this.role = localStorage.getItem("role");
    //console.log(" siderole",this.role);
    //this.getData();
  },
  methods: {
    logout() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("flatNos");
      //console.log(jwt);
      // console.log("jwt:"+localStorage.getItem("jwt"));
      // console.log("Hello regratation ",localStorage.getItem("flatNos"));

      //window.history.push({ path: 'LogIn' })
      //this.$router.push( {path:'/' , clearHistory: true });

      this.$router.replace({ path: "/", clearHistory: true });
      //window.location.reload();
      // window.history.back();
    },
  },
};
</script>
<style>
.heading {
  float: left;
  width: 20%;
  margin-top: 10px;
  margin-right: 50px;
  /* height: 60px !important; */
  background-color: white;
  /* line-height: 1.8; */
  text-align: center;
  font-size: 10px;
}

.menu-bar {
  background: #05386b;
  text-align: center;
  position: sticky;
  top: 64px;
  z-index: 90;
}
.menu-bar ul {
  display: inline-flex;
  color: #fff;
  list-style: none;
}
.menu-bar ul li {
  width: 150px;
  margin: 15px;
  padding: 6px;
}
.menu-bar ul li a {
  text-decoration: none;
  color: #fff;
}
.menu-bar ul li:hover {
  background: #5cdb95;
  border-radius: 10px;
}
.active {
  background-color: orange;
  border-radius: 10px;
}
.sub-menu-1 {
  display: none;
  z-index: 1;
  border-radius: 10px;
}

.menu-bar ul li:hover .sub-menu-1 {
  display: block;
  position: absolute;
  margin-top: 6px;
  margin-right: -1px;
  background: #05386b;
  margin-left: -10px;
}

.menu-bar ul li:hover .sub-menu-1 ul {
  display: block;
  margin-top: 10px;
}

.menu-bar ul li:hover .sub-menu-1 ul li {
  width: 150px;
  padding-top: 5px;
  border-bottom: 1px solid white;
  background: transparent;
  border-radius: 0;
  margin-left: 0px;
  text-align: left;
}
.menu-bar ul li:hover .sub-menu-1 ul li:last-child {
  border-bottom: none;
}

.menu-bar ul li:hover .sub-menu-1 ul li a:hover {
  color: #b2ff00;
}
.sub-menu-2 {
  display: none;
}

.hover-me:hover .sub-menu-2 {
  position: absolute;
  display: block;
  margin-top: -40px;
  margin-left: 140px;
  background: rgb(0, 100, 0);
}
/* .menu_bar {
    margin: 0% !important;
    padding: 0% !important;
    background-color: white !important;
    height: 60px !important;
   line-height: 1.5;
   text-align: center;
} */
/* .heading {
    float: left;
    width: 30%;
     margin-top:10px ;
    height: 60px !important;
    background-color: white;
     line-height: 1.8;
     text-align: center;
     font-size: 20px;
} */
/* .menu-items {
    margin-top:10px ;
     line-height: 1.8;
    float: right;
    width:70%;
    background-color: white;
   
} */
/* .menu_bar .menu-items ul li {
    list-style: none;
    display: inline;
    text-align: center;
    margin: 15px;
    font-size: 20px;

} */
/* .menu_bar .menu-items ul li:hover {
    background-color: red;
    
    
}

.menu-inner-items ul li{
    display: none;
}
.menu_bar .menu-items ul li:hover, .menu-inner-items  {
    background-color: white;
    display: block;
    position: absolute;
}
.menu_bar .menu-items ul li:hover, .menu-inner-items  ul{
      display: block;
    margin: 10px;
} */

/* .menu_bar .menu-items ul li:hover ul{
    display: block;
} */

/* .menu_bar .menu-items ul li ul:hover {
    display:block;
} */
</style>