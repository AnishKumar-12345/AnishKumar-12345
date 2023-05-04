<template>
  <div>
    <div>
      <v-container fluid style="margin: 0px auto; background-color: #e7f0f2">
        <v-row style="margin-left: 68px">
          <v-col cols="12" md="3" style="margin: 0 auto">
            <v-card
              max-width="150"
              min-height="100"
              style="border: 3px dotted blue; margin-left: 80px"
            >
              <v-file-input
                hide-input
                style="margin-left: 50px"
                prepend-icon="mdi-plus"
              ></v-file-input>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" >
            <v-card
              style="margin: 0px auto; margin-bottom: 20px"
              max-width="750px"
            >
              <v-spacer></v-spacer>

              <v-divider height="20px"></v-divider>
              <v-card-text>
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #e4e6e4;
                    margin-bottom: 5px;
                  "
                >
                  <h2 style="font-weight: 800; font-size: 18px; color: black">
                    Family Info
                  </h2>

                  <v-icon
                    style="font-weight: 800; font-size: 22px; color: black"
                    @click="activefiled = !activefiled"
                    >mdi-pencil</v-icon
                  >
                </div>
                <!-- <v-divider class="red mt-8"></v-divider> -->
                <div v-if="activefiled" class="overView">
                  <v-data-table
                    :headers="deginationHeaders"
                    :items="this.alldegnations"
                    class="elevation-1"
                  >

                   <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2"  @click="sendItem(item)">
          mdi-pencil
        </v-icon>
       
      </template>
                  </v-data-table>

                   
                </div>

                <div v-else>
                  <v-form   @submit.prevent="verify"
                    ref="form"
                    v-model="valid"
                    lazy-validation>
                    <v-container>
                      <v-row style="margin-right: -15 px; margin-left: -15 px">
                        <v-col cols="12" md="4">
                          <input
                            type="text"
                            placeholder="Relation"
                            v-model="user.relation"
                            style="border: black solid 1px; padding: 10px"
                          />
                        </v-col>

                        <v-col cols="12" md="4">
                          <input
                            type="text"
                            placeholder="Name"
                            v-model="user.name"
                            style="border: black solid 1px; padding: 10px"
                          />
                        </v-col>

                        <v-col cols="12" md="4">
                          <input
                            type="text"
                            placeholder="Age"
                            v-model="user.age"
                            style="border: black solid 1px; padding: 10px"
                          />
                        </v-col>
                        <v-col cols="12" md="4">
                          <input
                            type="text"
                            placeholder="Occupation"
                            v-model="user.occupation"
                            style="border: black solid 1px; padding: 10px"
                          />
                        </v-col>

                        <v-col cols="12" md="4">
                          <input
                            type="text"
                            placeholder="Disabilities"
                            v-model="user.disabilities"
                             style="border: black solid 1px; padding: 10px"
                          />
                        </v-col>

                        <v-col cols="12" md="4">
                          <input
                            type="text"
                            placeholder="Education"
                            v-model="user.education"
                            style="border: black solid 1px; padding: 10px"
                          />
                        </v-col>
                        <v-col cols="12" md="4">
                          <input
                            type="text"
                            placeholder="Status"
                            v-model="user.status"
                            style="border: black solid 1px; padding: 10px"
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-btn type="submit" style="background: red">Save</v-btn>
                        </v-col>
                        <v-col cols=""> </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="3" ></v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import servicescall from "../Services";
import axios from "axios";
export default {
  name: "PersonalData",
      mixins: [servicescall],
  data() {
    return {
      count: 1,
      activeComponent: false,
      activefiled: true,
      activefiled1: true,
      activefiled2: true,
      valid:false,
    employeeId:"25",
       user: {
        relation: "",
        name: "",
        occupation: "",
        phoneNumber: "",
        education: "",
        disabilities: "",
        status: "",
        age: "",
       
      },
       deginationHeaders: [
        // { text: "Id", value: "desigId" },
        { text: "Relation", value: "relation" },
        { text: "Name", value: "name" },
        { text: "Occupation", value: "occupation" },
        { text: "Education", value: "education" },
        { text: "Disabilities", value: "disabilities" },
        { text: "Age", value: "age" },
        { text: "Status", value: "status" },
        { text: "Action", value: "actions", sortable: false },
      ],
      alldegnations: [],
    };
  },
   mounted() {
    this.getEmployee();
  },
   methods:{

       registration() {
      console.log("Hello regratation ");
      console.log(this.jwt);
      var config = {
        method: "post",
        url:
          "http://103.60.213.11:9001/familyDetails/addFamilyDetails/"+this.employeeId,
          data: this.user,
        headers: {
           "Content-Type": "application/json",
           Authorization: "Bearer " +"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMkBkaXppdGl2ZWl0LmNvbSIsImV4cCI6MTY0MDQzNjg4NSwiaWF0IjoxNjM4MzM0MTM4fQ.Ym13I-7hbEIXBEyHaj5xxg5ojeRo-nyXOrVXr8C693o",
          
        },
      };
      console.log("User data:", config);

      axios(config)
        .then((res) => {
          console.log("In axois", res.data);
              })

        .catch((error) => {
          console.log("error", error);
          if (!error.response) {
            // network error
            this.errorStatus = "Error: Network Error";
            console.log("if error", this.errorStatus);
          } else {
            this.errorStatus = error.response.data.message;
            console.log("else error", this.errorStatus);
            this.text = "please select Type";
            this.snackbar = true;
          }
        });
        
      //}
    },
     verify() {
     
      console.log("Validate", this.valid);
      if (this.valid == true) {
        this.snackbar = true;
        this.registration();

        // this.$router.push({name:"AdminDashborad" })

        this.snackbar = true;
        //window.location.reload();
      } else {
        console.log("Validate", this.valid);
        this.text = "";
        this.snackbar = true;
        this.text = "Please fill all details ";
      }
    },
     getEmployee() {
      this.getEmployeeDetails().then((response) => {
        console.log("Get All user", response);
        this.alldegnations = response.FamilyDetails;
        console.log("Get All Employee", this.alldegnations);
      });
    },


    }
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
</style>