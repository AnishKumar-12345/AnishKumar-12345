<template>
  <div>
    <div>
      <v-container fluid style="margin: 0px auto; background-color: #e7f0f2">
        <v-card style="margin: 0px auto; margin-bottom: 20px" max-width="750px">
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
                Personal Info
              </h2>

              <v-icon
                style="font-weight: 800; font-size: 22px; color: black"
                @click="activefiled = !activefiled"
                >mdi-pencil</v-icon
              >
            </div>
            <!-- <v-divider class="red mt-8"></v-divider> -->
            <div v-if="activefiled" class="overView">
              <v-row align="start" justify="space-between">
                <v-col cols="12" md="4">
                  <ul class="detail-list">
                    <li>Name</li>
                    <li>1</li>
                  </ul>
                </v-col>
                <v-col cols="12" md="4">
                  <ul class="detail-list">
                    <li>Date Of Birth</li>
                    <li>1</li>
                  </ul>
                </v-col>
                <v-col cols="12" md="4">
                  <ul class="detail-list">
                    <li>Gender</li>
                    <li>1</li>
                  </ul>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" md="4">
                  <ul class="detail-list">
                    <li>Blood Group</li>
                    <li>1</li>
                  </ul>
                </v-col>
                <v-col cols="4" md="4">
                  <ul class="detail-list">
                    <li>Marital Status</li>
                    <li>1</li>
                  </ul>
                </v-col>
              </v-row>
            </div>

            <div v-else>
              <v-form v-model="valid">
                <v-container>
                  <v-row style="margin-right: -15 px; margin-left: -15 px">
                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Firstname"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Middlename"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="LastName"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>
                    <v-col cols="12" md="4">
                      <input
                        type="date"
                        style="border: black solid 1px; padding: 10px"
                        placeholder="Date of Birth"
                        id="birthday"
                        name="birthday"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <select
                        placeholder="Date of Birth"
                        name="cars"
                        id="cars"
                        style="border: black solid 1px; padding: 10px;width:190px"
                      >
                        <option value="volvo">Select Gender</option>
                        <option value="saab">Male</option>
                        <option value="opel">Female</option>
                      
                      </select>
                    </v-col>

                    <v-col cols="12" md="4">
                      <select
                       
                        name="cars"
                        id="cars"
                        style="border: black solid 1px; padding: 10px;width:190px"
                      >
                        <option value="volvo">Blood Group</option>
                        <option value="saab">A+</option>
                        <option value="opel">B-</option>
                        <option value="saab">B+</option>
                        <option value="opel">O-</option>
                        <option value="saab">O+</option>
                        <option value="opel">AB-</option>
                      
                      </select>
                    </v-col>
                    <v-col cols="12" md="4">
                     <select
                       
                        name="cars"
                        id="cars"
                        style="border: black solid 1px; padding: 10px;width:190px"
                      >
                        <option value="volvo">Marital Status</option>
                        <option value="saab">Married</option>
                        <option value="opel">Unmarried</option>
                      
                      </select>
                    </v-col>

                    

                  

                

                   
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-btn style="background: red">Save</v-btn>
                    </v-col>
                    <v-col cols=""> </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </div>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
    <div>
      <v-container fluid style="margin: 0px auto; background-color: #e7f0f2">
        <v-card style="margin: 0px auto; margin-bottom: 20px" max-width="750px">
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
              <h2 style="font-weight: 600; font-size: 18px; color: black">
                Contact 
              </h2>

              <v-icon
                style="font-weight: 800; font-size: 22px; color: black"
                @click="activefiled1 = !activefiled1"
                >mdi-pencil</v-icon
              >
            </div>
            <!-- <v-divider class="red mt-8"></v-divider> -->
            <div v-if="activefiled1" class="overView">
              <v-row align="start" justify="space-between">
                <v-col cols="12" md="4">
                  <ul class="detail-list">
                    <li>Official Email Id</li>
                    <li>1</li>
                  </ul>
                </v-col>
                <v-col cols="12" md="4">
                  <ul class="detail-list">
                    <li>Personal Email Id</li>
                    <li>1</li>
                  </ul>
                </v-col>
                <v-col cols="12" md="4">
                  <ul class="detail-list">
                    <li>Phone Number</li>
                    <li>1</li>
                  </ul>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" md="4">
                  <ul class="detail-list">
                    <li>Alternative Phone Number</li>
                    <li>1</li>
                  </ul>
                </v-col>
                
              </v-row>
            </div>

            <div v-else>
              <v-form v-model="valid">
                <v-container>
                  <v-row style="margin-right: -15 px; margin-left: -15 px">
                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Official Email Id"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Personal Email Id"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Phone Number"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>
                    <v-col cols="12" md="4">
                     <input
                        type="text"
                        placeholder="Alternative Phone Number"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                   

                   
                 

                    

                  

                

                   
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-btn style="background: red">Save</v-btn>
                    </v-col>
                    <v-col cols=""> </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </div>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
    <div>
      <v-container fluid style="margin: 0px auto; background-color: #e7f0f2">
        <v-card style="margin: 0px auto; margin-bottom: 20px" max-width="750px">
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
              <h2 style="font-weight: 600; font-size: 18px; color: black">
                Address 
              </h2>

              <v-icon
                style="font-weight: 800; font-size: 22px; color: black"
                @click="activefiled2 = !activefiled2"
                >mdi-pencil</v-icon
              >
            </div>
            <!-- <v-divider class="red mt-8"></v-divider> -->
            <div v-if="activefiled2" class="overView">
              <v-row align="start" justify="space-between">
                
                <v-col cols="12" md="4">
                  <ul class="detail-list">
                    <li>Current Address</li>
                    <li>1</li>
                  </ul>
                </v-col>
                <v-col cols="12" md="4">
                  <ul class="detail-list">
                    <li>Permanent Address</li>
                    <li>1</li>
                  </ul>
                </v-col>
              </v-row>
             
            </div>

            <div v-else>
              <v-form v-model="valid">
                <v-container>
                  <v-row style="margin-right: -15 px; margin-left: -15 px">
                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Current Address"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Permanent Address"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                  
                   

                   

                   
                 

                    

                  

                

                   
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-btn style="background: red">Save</v-btn>
                    </v-col>
                    <v-col cols=""> </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </div>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "PersonalData",
  data() {
    return {
      count: 1,
      activeComponent: false,
      activefiled: true,
      activefiled1: true,
       activefiled2: true,
    };
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
</style>