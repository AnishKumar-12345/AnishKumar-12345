<template>
    <div>
       <v-form
                @submit.prevent="SaveAttendence"
                ref="form"
                v-model="valid"
                lazy-validation
              >
       
        <div >
          
            <v-row  style="margin-left:200px">
              <v-col cols="12" sm="6" md="4">

                   <v-text-field
                            label="Employee Id"
                            placeholder="Employee Id"
                             v-model="  this.userid"
                            
                            
                         
                           
                            dense
                          
                            outlined
                          ></v-text-field>
               
                <!-- <select
                  name=""
                  id=""
                  v-model="selected"
                  style="border: black solid 1px; padding: 10px;width:100%"
                >
                  <option value="" disabled>Select a Employee</option>
                  <option
                    v-for="item in this.employeelist"
                    :key="item.employeeId"
                  >
                    {{ item.text }}
                  </option>
                </select> -->
              </v-col>

           <v-col
      cols="12"
      sm="6"
      md="4"
    >
                
  <v-text-field type="date" v-model="user.attendanceDay"
    label="Start Date" outlined dense ></v-text-field>
 </v-col>
                <v-col
         cols="12"
      sm="6"
      md="4">
      

     <v-text-field   v-model="time" outlined dense></v-text-field>
      </v-col>
       <v-col
          cols="12"
      sm="6"
      md="4">
      

      <v-text-field type="time" step="1"   v-model="user.outTime" outlined dense></v-text-field>
      </v-col>
            </v-row>
            </div>
            <div>
          
    
   
    
           
            </div>
            <v-row >
              <v-col>
  <v-btn style="background:red" type="submit">Save</v-btn>
              </v-col>
            
            </v-row>
              
       </v-form>
    </div>
</template>

<script>
import servicescall from "../Services";
export default {
  name: "UserAddAttendence",
  mixins: [servicescall],
  data() {
    return {
       selected: "",
        userid:"",
       valid:"",
      employeelist: [],
      items: [" Add Attendence", "Bluck Attenence"],
      selected: "",
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
          

      menu: false,
      modal: false,
      menu2: false,
      time: null,
      time1:null,
        menu23: false,
        modal23: false,
         menu231: false,
        modal231: false,

        user:{
          inTime:"",
          outTime:"",
          attendanceDay:"",
        }
    };
  },
  mounted() {
    this.getList();
     this.userid =localStorage.getItem('id')
      var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log("date,time",date,time)
  },
  methods: {
     SaveAttendence() {
      console.log("json", this.employeedetails, this.valid);
      this.$refs.form.validate();
      console.log("json", this.editedVendor, this.valid);
     this.$refs.form.validate();
     
      if (this.$refs.form.validate()) {
         
           
         
              this.PostAttendence();
             
     
        
       
      }
    },
       PostAttendence() {

         console.log("date1",this.user.attendanceDay)
                //  this.user.inTime=this.time
                //  this.user.outTime=this.time1
                  console.log("Intime", this.user.inTime)
                   console.log("outTime", this.user.outTime)
      var reqJSON = this.user;
      console.log("check", reqJSON);
      this.AttendenceReq( this.userid, reqJSON).then((response) => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
          //location.reload();
        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },
    getList() {
      this.getlistOfEmployees().then((response) => {
        //console.log("Get All employee list", response.data.Employee);
        for (var i = 0; i < response.data.Employee.length; i++) {
          console.log(
            "Get All employee list11",
            response.data.Employee[i].status
          );
          if (response.data.Employee[i].status == true) {
            console.log("Get All employee2 ", response.data.Employee[i].status);
            this.employeelist.push({
              text:
                response.data.Employee[i].employeeId 
            });
          }
        }

        console.log("Get All employee list", this.employeelist);
      });
    },
  },
};
</script>
<style scoped> 
 .id1{
  width: 60%;
  padding: 6px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

.id1:focus {
  border: 3px solid #555;
}
</style>