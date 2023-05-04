<template>
  <div>
    <v-row>
        <v-col>LEAVE BALANCE</v-col>
    </v-row>
      <v-container>
          <v-row fluid>
              <v-card
               class="mx-auto mt-10 rounded-xl"
   width="200"
    height="170"
    color="#385F73"
    elevation="5">
     <v-card-title   class='white--text ml-6'>
        <span style="width:100%; float:left;">
       Casual Leave
       </span>
       </v-card-title>
     <v-card-subtitle><h3 class="headline black--text text--accent-2" style="margin-top:40px">{{ this.CausalLeavecount}}</h3></v-card-subtitle>
    </v-card>
              <v-card
               class="mx-auto mt-10 rounded-xl"
   width="200"
    height="170"
    color="green"
    elevation="5"><v-card-title   class='white--text ml-10 '>Sick Leave</v-card-title>
     <v-card-subtitle> <h3 class="headline black--text text--accent-2" style="margin-top:40px">{{this.SickLeavecount}} </h3></v-card-subtitle></v-card>
              <!-- <v-card  class="mx-auto mt-10 rounded-xl"
   width="200"
    height="170"
    color="red"
    elevation="5"><v-card-title   class='white--text ml-10 '>Present</v-card-title>
         <v-card-subtitle><h3 class="headline black--text text--accent-2" style="margin-top:40px">2 </h3></v-card-subtitle>


    </v-card> -->


          </v-row>
      </v-container>
  </div>
</template>

<script>
import servicescall from "../Services";
export default {
   name: "UserLeaveDashboard",
    mixins: [servicescall],
  data(){
    return{
        userid:"",
        Leavedata:[],
        CausalLeavecount:"",
        SickLeavecount:"",
    }
  },
  mounted(){
  this.getdashboard()
  },
  methods:{
    getdashboard() {
        var userid =localStorage.getItem('id')
      this.getleavedashboard(userid).then((response) => {
        console.log("Get All employee bank", response.data.LeaveAudit);
         for (var i = 0; i < response.data.LeaveAudit.length; i++) {
           if(response.data.LeaveAudit[i].leaveType=='Casual'){
             this.CausalLeavecount=response.data.LeaveAudit[i].leaveBalance
           }
           if(response.data.LeaveAudit[i].leaveType=='Sick'){
             this.SickLeavecount=response.data.LeaveAudit[i].leaveBalance
           }
            localStorage.setItem('Sickcount', this.SickLeavecount);
               localStorage.setItem('Causalcount', this.CausalLeavecount);
          var Sickcount = localStorage.getItem("Sickcount");
            var Causalcount = localStorage.getItem("Causalcount");

        }


        console.log("Get All Leavedata",Sickcount ,Causalcount);
      });
    },
  }
};
</script>
<style scoped></style>
