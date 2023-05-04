<template>
  <div>
    <div>
      <v-container fluid>
        <v-row style="margin-left: 90px">
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
              max-width="100%"
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
                    Roles
                  </h2>

                  <h2
                    style="font-weight: 600; font-size: 16px; color: rgb(255, 255, 255);
        padding: 10px;float:right;margin-left:81%;position:relative"
                  >
                    Add Roles
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
                    @click="closeRolesdata()"
                    >mdi-close
                  </v-icon>
                </div>
                <!-- <v-divider class="red mt-8"></v-divider> -->

                <div v-if="activefiled == false" class="overView">
                  <v-data-table
                    :headers="deginationHeaders"
                    :items="this.alldegnations"
                    class="elevation-1"
                  >

                  <template v-slot:item.actions="{ item }">
                      <v-icon small class="mr-2  white--text" @click="sendItem(item)" style="padding:4px;border-radius:4px;background:blue;">
                        mdi-pencil
                      </v-icon>                  
                        <v-icon small class="mr-2  white--text" style="padding:4px;border-radius:4px;background:red;" @click="deleteRoleType(item)">
                        mdi-delete
                      </v-icon>
                    </template>

                    <template v-slot:item.status="{ item }">
                        <v-chip
                          :color="getColor(item.status)"
                          dark
                        >
                          {{ item.status }}
                        </v-chip>
                      </template>
                  </v-data-table>
                </div>

                <div v-if="activefiled == true">
                  <v-form
                    @submit.prevent="SaveRoles"
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-container>
                      <v-row style="margin-right: -15 px; margin-left: -15 px">
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Role Name"

                            :rules="rules"

                            v-model="user.roleName"
                            dense

                            outlined
                          ></v-text-field>
                          <!-- <input
                            type="text"
                            placeholder="Role Name"
                            v-model="user.roleName"
                            style="border: black solid 1px; padding: 10px"
                          /> -->
                        </v-col>

                        <v-col cols="12" md="4">
                           <v-text-field
                            label="Description"
                            :rules="rules"
                            v-model="user.description"
                            dense
                            outlined
                          ></v-text-field>
                          <!-- <input
                            type="text"
                            placeholder="Description"
                            v-model="user.description"
                            style="border: black solid 1px; padding: 10px"
                          /> -->
                        </v-col>

                        <v-col cols="12" md="4">
                          <v-select
                            label="Status"
                            :items="item"
                            :rules="rules"

                             v-model="user.status"
                            dense

                            outlined
                          ></v-select>
                          <!-- <input
                            type="text"
                            placeholder="Status"
                            v-model="user.status"
                            style="border: black solid 1px; padding: 10px"
                          /> -->
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
    
<!-- edit the roles  -->

      <v-row>
        <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
        >
          <v-card style="padding:20px">
            <v-card-text>
              <v-card-title><span>EDIT THE ROLES</span></v-card-title><br>
              <v-form
                    @submit.prevent="SaveRoles"
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-container>
                      <v-row style="margin-right: -15 px; margin-left: -15 px">
                        <v-col cols="12" md="4">
                          <v-text-field
                            label="Role Name"

                            :rules="rules"

                            v-model="user.roleName"
                            dense

                            outlined
                          ></v-text-field>
                          <!-- <input
                            type="text"
                            placeholder="Role Name"
                            v-model="user.roleName"
                            style="border: black solid 1px; padding: 10px"
                          /> -->
                        </v-col>

                        <v-col cols="12" md="4">
                           <v-text-field
                            label="Description"
                            :rules="rules"
                            v-model="user.description"
                            dense
                            outlined
                          ></v-text-field>
                          <!-- <input
                            type="text"
                            placeholder="Description"
                            v-model="user.description"
                            style="border: black solid 1px; padding: 10px"
                          /> -->
                        </v-col>

                        <v-col cols="12" md="4">
                          <v-select
                            label="Status"
                            :items="item"
                            :rules="rules"

                             v-model="user.status"
                            dense

                            outlined
                          ></v-select>
                          <!-- <input
                            type="text"
                            placeholder="Status"
                            v-model="user.status"
                            style="border: black solid 1px; padding: 10px"
                          /> -->
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-btn @click="dialog=false"
                          id="bnt1"
                            >Cancel</v-btn
                          >
                          <v-btn type="submit"
                          id="bnt2"
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
        <v-card-title class="justify-center pb-3" style="color:black;"
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
      item:['True','False'],
      count: 1,
      activeComponent: false,
      activefiled: false,
      activefiled1: true,
      activefiled2: true,
         edituser:false,
       snackbar: false,
       activeColor:"",
      text: "",
      valid: false,
      employeeId: "25",
      id:"",
      user: {
        roleName: "",
        description: "",
        status: "",
      },
      deginationHeaders: [
        // { text: "Id", value: "desigId" },

        { text: "ROLE NAME", value: "roleName" },
        { text: "DESCRIPTION", value: "description" },
         { text: "STATUS", value: "status" },
        { text: "ACTION", value: "actions", sortable: false },
      ],
      rules: [
           (v) => !!v || " Filed  is required",
       ],
      alldegnations: [],
      branchHeaders: [],
    };
  },
  mounted() {
    this.getRoll();
  },
  methods: {
    deleteRoleType(item){
      this.id = item.roleId;
      this.dialogDelete = true;
      console.log("Delete  reviewId",   this.id);
    },
    ConfirmDeleteType() {
    
    this.dialogDelete = true; 
    console.log("Delete Dates", this.id);
    this.deleteAllRoles(this.id).then((response) => {
        console.log(response)
      if (response.status == 200) {
       this.text = response.data.message;
          this.activeColor='';
                    this.activeColor='green';
        this.snackbar = true;
          this.getRoll();
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


    getColor(itm){
      if(itm == true){
        return "green";
      }else{
        return "red";
      }
    },
    closeRolesdata(){
      this.user={};
      this.activefiled=false;
    },


      sendItem(item){
            this.id=item.desigId
             console.log("Item",this.id)
              this.user.roleName=item.roleName;
            this.user.description=item.description;
              this.user.status=item.status;
          this.edituser=true;
          this.dialog=true;
          // this.activefiled=true;
          console.log("Item",this.id)




      },
      editedDesig(){
          console.log("ID",this.id,this.user)
           var reqJSON=this.user
          this.getRolesId( this.user.roleNames,reqJSON).then((response) => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
            this.getRoll();
          location.reload();
          this.activeColor = "green"
        } else {
          this.text = response.data.message;
          this.snackbar = true;
          this.activeColor = "red"
        }
      });

      },

    // add the user
    SaveRoles() {
      console.log("json", this.editedVendor, this.valid);
      this.$refs.form.validate();
      console.log("json", this.editedVendor, this.valid);
             this.$refs.form.validate();

      if (this.$refs.form.validate()) {


         if(this.edituser==false){
              this.PostRoles();

         }
         else {
           console.log("Edited")
            this.editedDesig()
         }

      }

      // this.close()
    },



    PostRoles() {
      console.log("1234", this.user);
      var reqJSON = this.user;
      console.log("check", reqJSON);
      this.RolesReq(reqJSON).then((response) => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
            this.getRoll();
          // location.reload();
          this.user={};
      this.activefiled=false;
          this.activeColor = "green"
        } else {
          this.text = response.data.message;
          this.snackbar = true;
          this.activeColor = "red"
        }
      });
    },


    //GET API Calls
    getRoll() {
      this.getAllroles().then((response) => {
        console.log("Get All user", response);
        this.alldegnations = response.data.Roles;
        console.log("Get All roles", this.alldegnations);
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
