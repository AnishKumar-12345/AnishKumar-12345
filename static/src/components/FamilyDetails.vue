<template>
    <div>
      <!-- <div style="width:25%;margin-left:8%">

          <v-card
            max-width="150"
            min-height="100"
            style="border: 3px dotted blue"
          >
            <v-file-input
              hide-input
              style="margin-left: 50px"
              prepend-icon="mdi-plus"
            ></v-file-input>
          </v-card>

      </div> -->
       <div >
      <v-container  fluid style=" margin:0px auto;background-color:#e7f0f2; "  >
      <v-card   style="margin:0px auto; margin-bottom:20px; "
       
        max-width="750px"
        
      >
        <v-spacer></v-spacer>

        <v-divider height="20px"></v-divider>
        <v-card-text>
          <div style="display:flex; justify-content:space-between;border-bottom: 1px solid #E4E6E4; margin-bottom:5px;">
            <h2  style="font-weight:800;font-size:22px; color:black">Family Info</h2>

            
              <v-icon  style="font-weight:800;font-size:22px; color:black" @click="activefiled = !activefiled">mdi-pencil</v-icon>
           
          </div>
             <!-- <v-divider class="red mt-8"></v-divider> -->
          <div v-if="activefiled" class="overView">

              
                 

              
            <v-row align="start" justify="space-between">
              <v-col cols="12" md="4">
                <ul class="detail-list">
                  <li>Relation</li>
                  <li>1</li>
                </ul>
              </v-col>
              <v-col cols="12" md="4">
                <ul class="detail-list">
                  <li>Name</li>
                  <li>1</li>
                </ul>
              </v-col>
              <v-col cols="12" md="4">
                <ul class="detail-list">
                  <li>Age</li>
                  <li>1</li>
                </ul>
              </v-col>
            </v-row>
             <v-row>
              <v-col cols="4" md="4">
                <ul class="detail-list">
                  <li>Occupation</li>
                  <li>1</li>
                </ul>
              </v-col>
              <v-col cols="4" md="4">
                <ul class="detail-list">
                  <li>Disabilities</li>
                  <li>1</li>
                </ul>
              </v-col>
              <v-col cols="4" md="4">
                <ul class="detail-list">
                  <li>Education</li>
                  <li>1</li>
                </ul>
              </v-col>
              <v-col cols="4" md="4">
                <ul class="detail-list">
                  <li>Status</li>
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
                      placeholder="Relation"
                        
                      style="border: black solid 1px; padding: 10px"
                    />
                  </v-col>

                  <v-col cols="12" md="4">
                    <input
                      type="text"
                      placeholder="Name"
                        
                      style="border: black solid 1px; padding: 10px"
                    />
                  </v-col>

                  <v-col cols="12" md="4">
                    <input
                      type="text"
                      placeholder="Age"
                        
                      style="border: black solid 1px; padding: 10px"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <input
                      type="text"
                      placeholder="Occupation"
                        
                      style="border: black solid 1px; padding: 10px"
                    />
                  </v-col>

                  <v-col cols="12" md="4">
                    <input
                      type="text"
                      placeholder="Disabilities"
                        
                      style="border: black solid 1px; padding: 5px"
                    />
                  </v-col>

                  <v-col cols="12" md="4">
                    <input
                      type="text"
                      placeholder="Education"
                        
                      style="border: black solid 1px; padding: 10px"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <input
                      type="text"
                      placeholder="Status"
                        
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
import Appbar from "./Appbar.vue";
export default {
    name: "FamilyDetails",
  components: {
      Appbar
   
  },
   data() {
    return {
      count: 1,
      activeComponent: false,
      activefiled: true,
    };
  },
    
}
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