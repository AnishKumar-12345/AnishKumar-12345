<template>
    <div>
         <div>
      <v-container  fluid style=" margin:0px auto;background-color:#e7f0f2; "  >
      <v-card   style="margin:0px auto; margin-bottom:20px;"
       
        max-width="750px"
        
      >
        <v-spacer></v-spacer>

        <v-divider height="20px"></v-divider>
        <v-card-text>
          <div style="display:flex; justify-content:space-between;border-bottom: 1px solid #E4E6E4; margin-bottom:5px;">
            <h2  style="font-weight:800;font-size:22px; color:black">Company Profile</h2>

            
              <v-icon  style="font-weight:800;font-size:22px; color:black" @click="activefiled = !activefiled">mdi-pencil</v-icon>
           
          </div>
             <!-- <v-divider class="red mt-8"></v-divider> -->
          <div v-if="activefiled" class="overView">

              
                 

              
            <v-row align="start" justify="space-between">
              <v-col cols="12" md="4">
                <ul class="detail-list">
                  <li>Company ID</li>
                  <li>1</li>
                </ul>
              </v-col>
              <v-col cols="12" md="4">
                <ul class="detail-list">
                  <li>Company Name</li>
                  <li>1</li>
                </ul>
              </v-col>
              <v-col cols="12" md="4">
                <ul class="detail-list">
                  <li>Registration No</li>
                  <li>1</li>
                </ul>
              </v-col>
            </v-row>
             <v-row>
              <v-col cols="4" md="4">
                <ul class="detail-list">
                  <li>TIN Number</li>
                  <li>1</li>
                </ul>
              </v-col>
              <v-col cols="4" md="4">
                <ul class="detail-list">
                  <li>PAN Number</li>
                  <li>1</li>
                </ul>
              </v-col>
              <v-col cols="4" md="4">
                <ul class="detail-list">
                  <li>ESI Number</li>
                  <li>1</li>
                </ul>
              </v-col>
              <v-col cols="4" md="4">
                <ul class="detail-list">
                  <li>PF Number</li>
                  <li>1</li>
                </ul>
              </v-col>
              <v-col cols="4" md="4">
                <ul class="detail-list">
                  <li>Numberofbranches</li>
                  <li>1</li>
                </ul>
              </v-col>
              <v-col cols="4" md="4">
                <ul class="detail-list">
                  <li>WorkingHours</li>
                  <li>1</li>
                </ul>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4" md="4">
                <ul class="detail-list">
                  <li>Working Days</li>
                  <li>1</li>
                </ul>
              </v-col>
              <v-col cols="4" md="4">
                <ul class="detail-list">
                  <li>Status</li>
                  <li>1</li>
                </ul>
              </v-col>
              <v-col cols="4" md="4">
                <ul class="detail-list">
                  <li>LastModifiedDate</li>
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
                      placeholder="Company ID"
                        
                      style="border: black solid 1px; padding: 10px"
                    />
                  </v-col>

                  <v-col cols="12" md="4">
                    <input
                      type="text"
                      placeholder="Company Name"
                        
                      style="border: black solid 1px; padding: 10px"
                    />
                  </v-col>

                  <v-col cols="12" md="4">
                    <input
                      type="text"
                      placeholder="Registration No"
                        
                      style="border: black solid 1px; padding: 10px"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <input
                      type="text"
                      placeholder="TIN Number"
                        
                      style="border: black solid 1px; padding: 10px"
                    />
                  </v-col>

                  <v-col cols="12" md="4">
                    <input
                      type="text"
                      placeholder="PAN Number"
                        
                      style="border: black solid 1px; padding: 5px"
                    />
                  </v-col>

                  <v-col cols="12" md="4">
                    <input
                      type="text"
                      placeholder="ESI Number"
                        
                      style="border: black solid 1px; padding: 10px"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <input
                      type="text"
                      placeholder="PF Number"
                        
                      style="border: black solid 1px; padding: 10px"
                    />
                  </v-col>

                  <v-col cols="12" md="4">
                    <input
                      type="text"
                      placeholder="Numberofbranches"
                        
                      style="border: black solid 1px; padding: 10px"
                    />
                  </v-col>

                  <v-col cols="12" md="4">
                    <input
                      type="text"
                      placeholder="WorkingHours"
                        
                      style="border: black solid 1px; padding: 10px"
                    />
                  </v-col>

                  <v-col cols="12" md="4">
                    <input
                      type="text"
                      placeholder="Working Days"
                        
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
                  <v-col cols="12" md="4">
                    <input
                      type="text"
                      placeholder="LastModifiedDate"
                        
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
    
}
</script>
<style scoped>

</style>