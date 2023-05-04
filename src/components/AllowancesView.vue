<template>
<div id="app" data-app>
    <v-data-table
                :headers="headers1"
                :items="this.result"
                sort-by="id"
                class="elevation-1"
                :search="search"
              >
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-toolbar-title> </v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog persistent v-model="dialog" max-width="500px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="red"
                          dark
                          class="mb-2"
                          v-bind="attrs"
                          v-on="on"
                        >
                          Add
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>
                        <v-form
                          @submit.prevent="saveAllowances"
                          ref="form"
                          v-model="valid"
                          lazy-validation
                        >
                          <v-card-text>
                            <v-container>
                              <!-- <v-form @submit.prevent="saveVendor" ref="form" v-model="valid" lazy-validation   >   -->
                              <v-row>
                                <v-col cols="12" sm="6" md="6">
                                  <v-text-field
                                    v-model="editedVendor.deductionName"
                                    label="Allowance Name"
                                    solo
                                    rounded
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                  <v-text-field
                                    v-model="editedVendor.deductionType"
                                    label="Allowance Type"
                                    solo
                                    rounded
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                  <v-text-field
                                    v-model="editedVendor.status"
                                    label="Status"
                                    solo
                                    rounded
                                  ></v-text-field>
                                </v-col>
                              
                              </v-row>
                              <!-- </v-form> -->
                            </v-container>
                          </v-card-text>

                          <v-card-actions class="mr-3">
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">
                              Cancel
                            </v-btn>
                            <v-btn
                              class="mr-3"
                              color="blue darken-1"
                              text
                              type="submit"
                            >
                              Save
                            </v-btn>
                          </v-card-actions>
                        </v-form>
                      </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="500px">
                      <v-card>
                        <v-card-title class="text-h5"
                          >Are you sure you want to delete this
                          item?</v-card-title
                        >
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text>Cancel</v-btn>
                          <v-btn color="blue darken-1" text>OK</v-btn>
                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2" @click="editVendor(item)">
                    mdi-pencil
                  </v-icon>
                  <!-- <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon> -->
                </template>
              </v-data-table>

              <v-snackbar color="green" v-model="snackbar">
                {{ text }}

                <template v-slot:action="{ attrs }">
                  <v-btn text v-bind="attrs" @click="snackbar = false">
                    Close
                  </v-btn>
                </template>
              </v-snackbar>    
</div>
</template>
   

<script>
import servicescall from "../Services";
export default {
  name: "AllowancesView",
  mixins: [servicescall],
  data() {
    return {
      tab: null,
      snackbar: false,
      text: "",
      search: "",
      valid: false,
      result: [],
      dialog: false,
      dialogDelete: false,

      headers1: [
        { text: "Id", value: "deductionId", sortable: true },
        { text: "Deduction Name", value: "deductionName" },
        { text: "Deduction Type", value: "deductionType" },
        { text: "Status", value: "status" },
       
       

        { text: "Actions", value: "actions", sortable: false },
      ],

      editedIndex: -1,

      editedVendor: {
        deductionName: "",
        deductionType: "",
        status: "",
        
      },

      defaultVendor: {
        deductionName: "",
        deductionType: "",
        status: "",
       
      },
      
     
     
    
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add Allowance" : "Edit Allowance";
    },
  },

  mounted() {
    
  },

  methods: {
    // add the Allowance
    saveAllowances() {
      console.log("json", this.editedVendor, this.valid);
      this.$refs.form.validate();
      console.log("json", this.editedVendor, this.valid);
      if (this.$refs.form.validate()) {
        this.PostAllowance();
      }

     
    },

    editVendor(item) {
      var id = item.deductionName;
      console.log("resid", id);
      this.deductionId(id).then((response) => {
        console.log("res", response.data.Deductions.deductionName);
        if (response.status == 200) {
         
          this.editedVendor.deductionName =response.data.Deductions.deductionName;
         
          this.editedVendor.deductionType =response.data.Deductions.deductionType;
        
          this.editedVendor.status = response.data.Deductions.status;
          
          this.editedIndex = this.result.indexOf(item);
          this.dialog = true;
        } else {
          this.text = response.data.message;
         
        }
      });
     
    },
   
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedVendor = Object.assign({}, this.defaultVendor);
        this.editedIndex = -1;
      });
    },

    // post API calls

    PostAllowance() {
      console.log("1234", this.editedVendor);
      var reqJSON = this.editedVendor;
      console.log("check", reqJSON);
      this.DeductionReq(reqJSON)
        .then((response) => {
          console.log("In post", response);
          if (response.status == 200) {
            this.text = response.data.message;
            this.snackbar = true;
            location.reload();
          } else {
            this.text = response.data.message;
            this.snackbar = true;
          }
        })
        .then(() => {
          this.close(), setInterval(this.getVendors(), 3000);
        });
    },

    //GET API Calls
    getVendors() {
      this.getDeduction().then((response) => {
        console.log("satya", response);

        this.result = response.data.Deductions;

        console.log("allowancename",  this.result);
      });
    },
  },
};
</script>