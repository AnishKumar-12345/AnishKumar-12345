<template>
  <div>
    <div>
      <v-container fluid style="margin: 0px auto; background-color: #e7f0f2">
        <v-row style="margin-left: 200px">
          <!-- <v-col cols="12" md="3" style="margin: 0 auto">
            <v-card
              max-width="150"
              min-height="100"
              style="border: 3px dotted blue; margin-left: 80px"
            >
              <input type="file" id="myfile" name="myfile" />
            </v-card>
          </v-col> -->
          <v-col cols="12" md="6">
            <v-card
            min-width="900"             
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
                  <h2 style="font-weight: 800; font-size: 22px; color: black">
                     Leave Entitlement
                  </h2>

                  <!-- <v-icon
                    style="font-weight: 800; font-size: 22px; color: black"
                    @click="activefiled = !activefiled"
                    >mdi-plus</v-icon
                  > -->
                </div>
                <!-- <v-divider class="red mt-8"></v-divider> -->
            
                <div v-if="activefiled" class="overView">
                  <v-data-table
                    :headers="MasterHeaders"
                   
                    class="elevation-1"
                  >
                    <template v-slot:item.actions="{ item }">
                      <v-icon small class="mr-2" @click="sendItem(item)">
                        mdi-pencil
                      </v-icon>
                    </template>
                  </v-data-table>
                </div>

                
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="3"></v-col>
        </v-row>
      </v-container>
    </div>
     <v-snackbar color="green" v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import servicescall from "../Services";
export default {
  name: "LeaveMaster",
  mixins: [servicescall],
  data() {
    return {
      count: 1,
      activeComponent: false,
      activefiled: true,
      activefiled1: true,
      activefiled2: true,
      valid: false,
      generaldata: [],
      edituser:false,
snackbar: false,
      text: "",
    
      user: {
        
      leaveType :"",
      carryForward: "",
      period: "",
      count:""

      },
      MasterHeaders: [
       
        { text: "Leave Type", value: "leaveId" },
        { text: "Opening Balance", value: "leaveType" },
        { text: "Last Credit Date", value: "carryForward" },
        { text: "Leave Credited", value: "period" },
        { text: "Leaves Approved", value: "count" },
          { text: "Leaves Awaiting Approval", value: "count" },
            { text: "Leaves Balance", value: "count" },
       
       
      ],
       nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 30 || "Name allows below 30 characters only",
        // v => /[^a-z ]*$/gmi || 'Name must be characters',
        (v) => /^[A-Za-z]+$/.test(v) || "Name must be characters",
      ],
      Registration:[
         (v) => !!v || "Regtration is is required",
         (v) => /^[A-Za-z0-9]+$/.test(v) || "Name must be characters",
         (v) => v.length <= 21 || "Name allows below 30 characters only",
      ],
       rules: [
           (v) => !!v || " Filed  is required",
       ],
      allLeaveMaster: [],
      
    };
  },
  mounted() {
    this.getLeaveMaster();
  },
  methods: {
    // add the vendor

    saveVendor() {
    

    
      this.$refs.form.validate();
    
      if (this.$refs.form.validate()) {

        
         
         if(this.edituser==false){
           this.PostMasteradd();

         }
        
       
         else{
             this.editedDesig();
         }
      }

      // this.close()
    },

    sendItem(item) {
      this.id = item.leaveId;
      console.log("Item2", item);
      this.user.leaveType = item.leaveType;
      this.user.carryForward = item.carryForward;
      this.user.period = item.period;
      this.user.count = item.count;
     
     
      this.activefiled = false;
                this.edituser=true;

      
    },
    editedDesig() {
      console.log("ID", this.id, this.result);
      var reqJSON = this.user;
      this.getupdateLeaveMaster(this.id, reqJSON).then((response) => {
        console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
            this.getLeaveMaster();
          location.reload();
        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },

    // post API calls

    PostMasteradd() {
      console.log("1234", this.user);
      var reqJSON = this.user;
      console.log("check", reqJSON);
      this.leavemaster(reqJSON)
        .then((response) => {
          console.log("In post", response);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
            
        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
        })
        .then(() => {});
    },

    //GET API Calls
    getLeaveMaster() {
      console.log("Get All LeaveMaster");
      this.getleaveMasterDetails().then((response) => {
        console.log("Get All LeaveMaster", response);
        this.allLeaveMaster = response.data.LeaveMaster;
        console.log("Get All LeaveMaster", this.allLeaveMaster);
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
</style>