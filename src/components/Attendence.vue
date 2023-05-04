<template>
    <div>
      <div style="padding:20px 10px 10px 10px;">
       <v-form
                @submit.prevent="SaveAttendence"
                ref="form"
                v-model="valid"
                lazy-validation>



            <v-row class="pl-0 pr-0">
            <v-col cols="12" md="3">
                <v-autocomplete
                            :items="this.employeelist"
                            label="Select Employee"

                              :rules="rules"

                           v-model="selected"
                            dense

                            outlined
                          ></v-autocomplete>
             </v-col>
<v-col cols="12" md="3">

                 <v-text-field
                      type="date"
                      label="Select Date"
                    v-model="user.attendanceDay"
                      dense
                      outlined
                    ></v-text-field>
               </v-col>
<v-col cols="12" md="3">

     <v-text-field label="In Time" type="time" step="1"  v-model="user.inTime" outlined dense></v-text-field>
     </v-col>
<v-col cols="12" md="3">
      <v-text-field label="Out Time" type="time" step="1"   v-model="user.outTime" outlined dense></v-text-field>
     </v-col>

            </v-row>

          <v-row style="margin-bottom:10px;">
          <v-col cols="12" style="text-align:right">
  <v-btn type="submit" style="background: red;color:white">Save</v-btn>
              </v-col>

            </v-row>

       </v-form>
      </div>
       <v-snackbar :color="activeColor" v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
    </div>
</template>

<script>
import servicescall from "../Services";
export default {
  name: "Attendence",
  mixins: [servicescall],
  data() {
    return {
       selected: "",
      employeelist: [],
      snackbar:"",
      activeColor:"",
      text:"",
      items: [" Add Attendence", "Bluck Attenence"],
      selected: "",


        user:{
          inTime:"",
          outTime:"",
          attendanceDay:"",
          empName:"",
          totalHours:"",
          permissionHours:""


        }
    };
  },
  mounted() {
    this.getList();
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
      this.AttendenceReq(this.selected, reqJSON).then((response) => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
          this.activeColor="green"
          location.reload();
        } else {
          this.text = response.data.message;
          this.snackbar = true;
          this.activeColor="red"
        }
      });
    },
    getList() {
      this.getlistOfEmployees().then((response) => {
        console.log("Get All employee list", response.data.Employee);
        for (var i = 0; i < response.data.Employee.length; i++) {
          this.employeelist.push({
             text: response.data.Employee[i].employeeId+'-'+response.data.Employee[i].firstName,value: response.data.Employee[i].employeeId
            // text: response.data.Employee[i].employeeId,
          });
        }


        console.log("Get All employee list", this.employeelist);
      });
    },
  },
};
</script>
<style scoped>
.v-text-field{
      width: 300px;
}
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
