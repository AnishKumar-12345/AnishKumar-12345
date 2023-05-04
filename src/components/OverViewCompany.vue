<template>
  <div>
    <div>
      <v-container fluid style="margin: 0px auto; background-color: #e7f0f2">
          <v-row style="margin-left:68px;">
              <v-col cols="12" md="3"  style="margin:0 auto">
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
              <h2 style="font-weight: 600; font-size: 18px; color: black">
               OverView
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
                    <li>Registered Company name</li>
                    <li>1</li>
                  </ul>
                </v-col>
                <v-col cols="12" md="4">
                  <ul class="detail-list">
                    <li>Brand Name</li>
                    <li>1</li>
                  </ul>
                </v-col>
                <v-col cols="12" md="4">
                  <ul class="detail-list">
                    <li>Website</li>
                    <li>1</li>
                  </ul>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" md="4">
                  <ul class="detail-list">
                    <li>Domain Name</li>
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
                        placeholder="Registered Company name"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Branch Name"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Website"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>
                    <v-col cols="12" md="4">
                     <input
                        type="text"
                        placeholder="Domain Name"
                          
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
        </v-card>s
              
              </v-col>
              <v-col cols="12" md="3" ></v-col>
          </v-row>
        
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