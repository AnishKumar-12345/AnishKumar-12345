<template>
  <div>
    <div>
      <v-container fluid style="margin: 0px auto; background-color: #e7f0f2">
          <v-row style="margin-left:68px;">
              <v-col cols="12" md="3"  style=";margin:0 auto">
                   <v-card
            max-width="150"
            min-height="100"
           
            style="border: 3px dotted blue;margin-left:80px"
          >
            <v-file-input
              hide-input
              style="margin-left: 50px"
              prepend-icon="mdi-plus"
            ></v-file-input>
          </v-card>
              </v-col>
              <v-col cols="12" md="6" >

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
              <h2 style="font-weight: 800; font-size: 22px; color: black">
                REGISTERED OFFICE
              </h2>

              
              
            </div>

            <div>
              <v-row>
                <v-icon
                  style="
                    font-weight: 900;
                    font-size: 22px;
                    margin-top: 20px;
                    color: blue;
                  "
                  v-if="showText"
                  v-on:click="showText = !showText"
                  >mdi-plus
                </v-icon>
              </v-row>
            </div>

            <div  style="margin-top:20px;" v-show="!showText">
              <v-form v-model="valid">
                <v-container>
                  <v-row style="margin-right: -15 px; margin-left: -15 px">
                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Address Line1"
                       
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Address Line2"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="City"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>
                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="State"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Country"
                          
                        style="border: black solid 1px; padding: 5px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Pincode"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>
                  
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                         <v-btn style="background: red"  v-on:click="showText = !showText">Cancel</v-btn>
                      <v-btn style="background: red">Save</v-btn>
                      
                    </v-col>
                    <v-col cols=""> </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </div>
          </v-card-text>
        </v-card>
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
              <h2 style="font-weight: 800; font-size: 22px; color: black">
                CUSTOM ADDRESS TITLE
              </h2>

              
              
            </div>

            <div>
              <v-row>
                <v-icon
                  style="
                    font-weight: 900;
                    font-size: 22px;
                    margin-top: 20px;
                    color: blue;
                  "
                  v-if="showText1"
                  v-on:click="showText1 = !showText1"
                  >mdi-plus
                </v-icon>
              </v-row>
            </div>

            <div  style="margin-top:20px;" v-show="!showText1">
              <v-form v-model="valid">
                <v-container>
                  <v-row style="margin-right: -15 px; margin-left: -15 px">
                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Address Line1"
                       
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Address Line2"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="City"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>
                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="State"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Country"
                          
                        style="border: black solid 1px; padding: 5px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Pincode"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>
                  
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                         <v-btn style="background: red"  v-on:click="showText1 = !showText1">Cancel</v-btn>
                      <v-btn style="background: red">Save</v-btn>
                      
                    </v-col>
                    <v-col cols=""> </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </div>
          </v-card-text>
        </v-card>
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
              <h2 style="font-weight: 800; font-size: 22px; color: black">
               CORPORATE OFFICE
              </h2>

              
              
            </div>

            <div>
              <v-row>
                <v-icon
                  style="
                    font-weight: 900;
                    font-size: 22px;
                    margin-top: 20px;
                    color: blue;
                  "
                  v-if="showText2"
                  v-on:click="showText2 = !showText2"
                  >mdi-plus
                </v-icon>
              </v-row>
            </div>

            <div  style="margin-top:20px;" v-show="!showText2">
              <v-form v-model="valid">
                <v-container>
                  <v-row style="margin-right: -15 px; margin-left: -15 px">
                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Address Line1"
                       
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Address Line2"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="City"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>
                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="State"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Country"
                          
                        style="border: black solid 1px; padding: 5px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Pincode"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>
                  
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                         <v-btn style="background: red"  v-on:click="showText2 = !showText2">Cancel</v-btn>
                      <v-btn style="background: red">Save</v-btn>
                      
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
export default {
  name: "Address",
  data() {
    return {
      showText: true,
       showText1: true,
        showText2: true,
        valid:'',
    };
  },
};
</script>
<style scoped>
</style>
