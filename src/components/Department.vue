<template>
  <div>
    <div>
      <v-container fluid>
        <v-row style="margin-left: 90px;">
          <!-- <v-col cols="12" md="2">
            <v-card
              min-height="100"
              style="border: 3px dotted blue;"
            >
              <v-file-input
                hide-input
                style="margin-left: 70px"
                prepend-icon="mdi-plus"
              ></v-file-input>
            </v-card>
          </v-col> -->
          <v-col cols="12" md="12">
            <v-card
              style="margin: 0px auto; margin-bottom: 20px"
              max-width="100%;"
            >
              <!-- <v-spacer></v-spacer>

              <v-divider height="20px"></v-divider> -->
              <v-card-text>
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #e4e6e4;
                    margin-bottom: 5px;
                    background-color:#1565c0;
                    color:#fff;
                    height:40px;
                    line-height:20px;
                    text-align:left;
                  "
                >
                  <h2 style="font-weight: 600; font-size: 16px; color: rgb(255, 255, 255);
        padding: 10px;">
                    Department Details
                  </h2>

                  <h2
                    style="font-weight: 600; font-size: 16px; color: rgb(255, 255, 255);
           padding: 10px;float:right;margin-left:64%;position:relative;"
                  >
                    Add Department Details
                  </h2>
                  <v-icon
                  class=" mr-3 icn"
                    v-if="activefiled == false"
                    @click="activefiled = !activefiled"
                    >mdi-plus
                  </v-icon>
                  <v-icon
                  class=" mr-3 icn"
                    v-if="activefiled == true"
                    @click="closeDepartmentdata()"
                    >mdi-close
                  </v-icon>
                </div>
                <!-- <v-divider class="red mt-8"></v-divider> -->

                <div v-if="activefiled == false" class="overView">
                  <v-data-table
                    :headers="deginationHeaders"
                    :items="this.alldepartment"
                    class="elevation-1"
                  >

                  <template v-slot:item.actions="{ item }">
                      <v-icon small class="mr-2  white--text" @click="sendItem(item)" style="padding:4px;border-radius:4px;background:blue;">
                        mdi-pencil
                      </v-icon>                  
                        <v-icon small class="mr-2  white--text" style="padding:4px;border-radius:4px;background:red;" @click="deleteDepartmentType(item)">
                        mdi-delete
                      </v-icon>
                    </template>
                    
                  </v-data-table>
                </div>

                <div v-if="activefiled == true">
                  <v-form
                    @submit.prevent="SaveDesig"
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-container>
                      <v-row style="margin-right: -15 px; margin-left: -15 px">
                        <v-col cols="12" md="4">
                        <v-text-field
                            label="Department"

                            :rules="rules"

                            v-model="user.deptName"
                            dense

                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                      <v-autocomplete
                        :items="allBranchNames"
                        label="Select Branch"

                        :rules="rules"


                        v-model="branchName"
                         dense
                        outlined
                      ></v-autocomplete>
                    </v-col>



                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-btn type="submit" style="background: red;color:white"
                            >Save</v-btn
                          >
                        </v-col>
                        <v-col cols=""> </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="3"></v-col>
        </v-row>
      </v-container>
    </div>

    <!-- edit Department details -->
    <v-row>
      <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
      >
        <v-card style="padding:20px;">
          <v-card-text>
            <v-card-title><span>EDIT DEPARTMENT DETAILS</span></v-card-title><br>
            <v-form
                    @submit.prevent="SaveDesig"
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-container>
                      <v-row style="margin-right: -15 px; margin-left: -15 px">
                        <v-col cols="6">
                        <v-text-field
                            label="Department"

                            :rules="rules"

                            v-model="user.deptName"
                            dense

                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                      <v-autocomplete
                        :items="allBranchNames"
                        label="Select Branch"

                        :rules="rules"


                        v-model="branchName"
                         dense
                        outlined
                      ></v-autocomplete>
                    </v-col>



                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-btn @click="dialog=false" id="bnt1"
                            >Cancel</v-btn
                          >
                          <v-btn type="submit" id="bnt2"
                            >Save</v-btn
                          >
                        </v-col>
                        <v-col cols=""> </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>

    <v-dialog v-model="dialogDelete" persistent>
      <v-card rounded="xl" class="pb-4" min-width="450" min-height="150" style="padding:20px;">
        <v-card-title class=" justify-center pb-3" style="color:black;"
          >Delete Holiday</v-card-title
        >
        <v-card-subtitle style="text-align: center;margin-top:1px;color:black;font-size:15px;"
          >Are you sure you want to delete this item?</v-card-subtitle
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <button
            
           class="bnt1"
            @click="dialogDelete = false"
            >Cancel</button
          >
          <button           
            class="bnt2"
            @click="ConfirmDeleteType"
            >OK</button
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
import axios from "axios";
export default {
  name: "Designation",
  mixins: [servicescall],
  data() {
    return {
      dialog:false,
      id:"",
      dialogDelete:false,
      count: 1,
      activeComponent: false,
      activefiled: false,
      activefiled1: true,
      activefiled2: true,
      valid: false,
     branchName:"",
      snackbar: false,
   activeColor:"",
      text: "",
      id:"",
      user: {
        deptName: "",

      },
      edituser:false,
      deginationHeaders: [
        // { text: "Id", value: "desigId" },
        { text: "DEPARTMENT NAME", value: "deptName" },

        { text: "ACTION", value: "actions", sortable: false },
      ],
        rules: [
           (v) => !!v || " Filed  is required",
       ],
      alldepartment: [],
      allBranchNames:[],
      branchHeaders: [],
    };
  },
  mounted() {
    this.getdepartment();
    this.getBranches();
    },
  methods: {
    deleteDepartmentType(item){
      this.id = item.deptId;
      this.dialogDelete = true;
      console.log("Delete  reviewId",   this.id);
    },
    ConfirmDeleteType() {
    
    this.dialogDelete = true; 
    console.log("Delete Dates", this.id);
    this.deleteDepartments(this.id).then((response) => {
        console.log(response)
      if (response.status == 200) {
       this.text = response.data.message;
          this.activeColor='';
                    this.activeColor='green';
        this.snackbar = true;
          this.getdepartment();
          this.dialogDelete=false;
      }
       else{
                  this.text=response.data.error;
                   this.snackbar=true
                   this.activeColor='';
                    this.activeColor='red';
                     this.dialogDelete=false;
              }
    });
  },
  
    closeDepartmentdata(){
      this.user={};
      this.activefiled=false;
    },


      sendItem(item){
        // console.log('Dept Item check',item);
            this.id=item.deptId
            //  console.log("Item",this.id)
              //this.user.desigName=item.desigId;
            this.user.deptName=item.deptName;
          this.branchName = item.branch.branchName;
          // console.log('check the Item Branch',this.branchName);
          // this.activefiled=true;
          // console.log("Item",this.id)
          this.edituser=true;
          this.dialog=true;




      },
      editedDesig(){
          console.log("ID",this.id,this.user)
           var reqJSON=this.user
          this.getDepartmentId(this.id,reqJSON).then((response) => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
           this.getdepartment();
           location.reload();
           this.activeColor = "green"

        } else {
          this.text = response.data.message;
          this.snackbar = true;
          this.activeColor = "red"
        }
      });

      },


    SaveDesig() {

      this.$refs.form.validate();

      if (this.$refs.form.validate()) {


         if(this.edituser==false){
              this.PostDesig();

         }
         else {
           console.log("Edited")
            this.editedDesig();

         }

      }


    },



    PostDesig() {
      console.log("1234", this.user,this.branchName);
      var reqJSON = this.user;
      console.log("check", reqJSON);
      this.DepartmentReq(this.branchName,reqJSON).then((response) => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
           this.getdepartment();
          //  location.reload();
          this.user={};
      this.activefiled=false;
      this.branchName=" ";
           this.activeColor = "green"
        } else {
          this.text = response.data.message;
          this.snackbar = true;
          this.activeColor = "red"
        }
      });
    },


    //GET API Calls
    getdepartment() {
      this.getAllDepartment().then((response) => {
        console.log("Get All department", response);
        this.alldepartment = response.Department;
        console.log("Get All department", this.alldepartment);
      });
    },
    getBranches() {
      this.getBranchesNames().then((response) => {
        console.log("satya", response);
        if (response.status == "200") {
          console.log("resdata", response.data.branchNames);

          for (var i = 0; i < response.data.branchNames.length; i++) {
            this.allBranchNames.push(response.data.branchNames[i]);
          }


          console.log("allBranchNames", this.allBranchNames);
        }
      });
    },
  },
};
</script>
<style scoped>
.detail-list li:first-child {
  font-weight: 600;
  line-height: 18px;
  color: #07182b;
  font-size: 14px;
}
.overView {
  padding: 10px;
}
.detail-list {
  padding: 10 px 20 px 0;
  min-height: 46 px;
}
ul {
  padding: 0;
  list-style-type: none;
}
ul li {
  list-style-type: none;
}
.icn{
  border-radius: 20px;
  width: 30px;
  margin: 5px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}
.icn:hover{
  background-color: rgb(255, 74, 14);
  color: rgb(255, 255, 255);
}
.bnt1{
  border: 2px solid rgb(255, 74, 14);
  border-radius: 20px;
  background-color: white ;
  color: rgb(255, 74, 14);
  width: 180px;
  height: 40px;
  font-weight: bold;
}
.bnt1:hover{
  background: rgb(255, 74, 14);
  color: white;
 
}
.bnt2{
  border: 2px solid rgb(64, 209, 28);
  border-radius: 20px;
  background-color: white ;
  color: rgb(64, 209, 28);
  width: 180px;
  height: 40px;
  font-weight: bold;
  margin: 15px;
}
.bnt2:hover{
  background: rgb(64, 209, 28);
  color: white;
}
#bnt1{
  border: 2px solid rgb(255, 74, 14);
  border-radius: 20px;
  background-color: white !important;
  color: rgb(255, 74, 14) !important;
  width: 150px;
  height: 40px;
  font-weight: bold;
}
#bnt1:hover{
  background: rgb(255, 74, 14) !important;
  color: white !important;
 
}
#bnt2{
  border: 2px solid rgb(64, 209, 28);
  border-radius: 20px;
  background-color: white !important ;
  color: rgb(64, 209, 28);
  width: 150px;
  height: 40px;
  font-weight: bold;
  margin: 15px;
}
#bnt2:hover{
  background: rgb(64, 209, 28) !important;
  color: white;
}
</style>
