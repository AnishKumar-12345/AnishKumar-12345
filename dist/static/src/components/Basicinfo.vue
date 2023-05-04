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
              <h2 style="font-weight: 800; font-size: 22px; color: black">
                Basic Info
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
                    <li>Employee No</li>
                    <li>11</li>
                  </ul>
                </v-col>
                <v-col cols="12" md="4">
                  <ul class="detail-list">
                    <li>FullName</li>
                    <li>Satya</li>
                  </ul>
                </v-col>
                <v-col cols="12" md="4">
                  <ul class="detail-list">
                    <li>Date Of joinig</li>
                    <li>26-07-1994</li>
                  </ul>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" md="4">
                  <ul class="detail-list">
                    <li>Nationality</li>
                    <li>India</li>
                  </ul>
                </v-col>
                <v-col cols="4" md="4">
                  <ul class="detail-list">
                    <li>Mobile No</li>
                    <li>8978633195</li>
                  </ul>
                </v-col>
                <v-col cols="4" md="4">
                  <ul class="detail-list">
                    <li>Email Id</li>
                    <li>satya@gmail.com</li>
                  </ul>
                </v-col>
                <v-col cols="4" md="4">
                  <ul class="detail-list">
                    <li>Pan Card No</li>
                    <li>123212</li>
                  </ul>
                </v-col>
                <v-col cols="4" md="4">
                  <ul class="detail-list">
                    <li>Aadhaar No</li>
                    <li>9897875252</li>
                  </ul>
                </v-col>
                <v-col cols="4" md="4">
                  <ul class="detail-list">
                    <li>Gender</li>
                    <li>Male</li>
                  </ul>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" md="4">
                  <ul class="detail-list">
                    <li>Department ID</li>
                    <li>123</li>
                  </ul>
                </v-col>
                <v-col cols="4" md="4">
                  <ul class="detail-list">
                    <li>Branch ID</li>
                    <li>456</li>
                  </ul>
                </v-col>
                <v-col cols="4" md="4">
                  <ul class="detail-list">
                    <li>Supervisor ID</li>
                    <li>123</li>
                  </ul>
                </v-col>
              </v-row>
              <v-row>

                <v-col cols="4" md="4">
                  <ul class="detail-list">
                    <li>Designation</li>
                    <li>4</li>
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
                        placeholder="employee Id"

                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Fullname"

                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Date Of joinig"

                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>
                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Nationality"

                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Mobile No"

                        style="border: black solid 1px; padding: 5px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Email Id"

                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>
                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Pan Card No"

                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Aadhar No"

                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Gender"

                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Department ID"

                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Branch ID"

                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>
                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Supervisor ID"

                        style="border: black solid 1px; padding: 10px"
                      />
                    </v-col>
                    <v-col cols="12" md="4">
                      <input
                        type="text"
                        placeholder="Designation"

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
  name: "Basicinfo",
  data() {
    return {
      count: 1,
      activeComponent: false,
      activefiled: true,
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
