<template>
    <div style="padding:20px 10px 10px 10px;">

            <v-row style="text-align:left;" >
                <v-col >
                  <input type="file" id="excelFile" @change="onChange" />
                  <v-btn @click="uploadTodos" style="background: red;color:white;margin-bottom:5px;">Upload</v-btn>
                  <v-btn color="green darken-2" class="m-2" style="margin-bottom:5px;">Download</v-btn>
                </v-col>
            </v-row>

      <!-- <v-row style="margin-bottom:10px; text-align:left;">
                <v-col>
                  <download-excel  name="Payslip Templete">
                    Download Template View
                    <v-icon large color="green darken-2">
                      mdi-file-excel
                    </v-icon>
                  </download-excel>
                </v-col>
            </v-row> -->

    <v-snackbar :color="activeColor" v-model="snackbar">
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
  name: "BluckUpload",
  mixins: [servicescall],
  data(){
    return{
         snackbar: false,
      text: "",
      activeColor:"",

    }
  },
  methods:{
     onChange(event) {
      this.file = event.target.files ? event.target.files[0] : null;
      console.log("satya", this.file);
    },
      uploadTodos() {
      console.log("form", this.file);
      var formData = new FormData();
      formData.append("excelfile", this.file);

      this.BulkUploadAttendance(formData).then((response) => {
        console.log("satya", response);
        console.log("In post", response.data);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
          this.activeColor="green"
          //location.reload();
        } else {
          this.text = response.data.message;
          this.snackbar = true;
          this.activeColor="red";
        }
      });
    },
  }
}
</script>
