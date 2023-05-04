<template>
  <div>
    <v-app-bar app>
      <router-link
        to="/HelloWorld"
        style="text-decoration: none; color: inherit"
      >
        <v-btn icon @click="HelloWorld">
          <v-icon style="color: pink">mdi-home</v-icon>
        </v-btn>
      </router-link>
      <v-img class="mx-2" max-height="40" max-width="40" contain></v-img>

      <v-toolbar-title class="ml-2"> HRMS </v-toolbar-title>
    </v-app-bar>
    <menubar></menubar>
    <div>
      <v-container fluid style="margin: 0px auto; background-color: #e7f0f2">
        <v-card style="margin: 0px auto; margin-bottom: 20px" max-width="750px">
          <v-spacer></v-spacer>

          <v-divider height="20px"></v-divider>
          <v-card-text>
            <!-- <v-divider class="red mt-8"></v-divider> -->

            <div>
              <v-form v-model="valid">
                <v-container>
                  <v-row style="margin-right: -15 px; margin-left: -15 px">
                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="employee Id"
                          
                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <select
                        placeholder="Date of Birth"
                        name="cars"
                        id="cars"
                        style="
                          border: black solid 1px;
                          padding: 10px;
                          width: 190px;
                        "
                      >
                        <option value="volvo">Leave Type</option>
                        <option value="saab">Sick</option>
                        <option value="opel">Causal</option>
                      </select>
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
                      <input
                        type="date"
                        style="border: black solid 1px; padding: 10px"
                        placeholder="Date of Birth"
                        id="birthday"
                        name="birthday"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <textarea
                        id="w3review"
                        name="w3review"
                        rows="4"
                        cols="50"
                        style="border: black solid 1px; padding: 0px"
                      >

</textarea
                      >
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
import menubar from "./menubar";
export default {
  name: "Leave",
  components: {
    menubar,
  },
};
</script>

<style scoped>
</style>