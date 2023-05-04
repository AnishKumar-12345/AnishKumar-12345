<template>
    <div style="margin-top:20px;">
        <v-card style="margin-left:110px; padding:20px;background:#ffff">
            <v-card-text>
        <v-row style="margin:0;">

                <v-col>
                  <input type="file" id="excelFile" @change="onChange" required />
                  <v-btn @click="uploadTodos" style="background: red;color:white">Upload</v-btn>
                </v-col>
              </v-row>
            </v-card-text>
        </v-card>
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
  name: "Employeebluckupload",
  mixins: [servicescall],
  data(){
    return{
         snackbar: false,
      text: "",


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

      this.BulkUploadEmployee(formData).then((response) => {
        console.log("satya", response);
        console.log("In post", response.data);
        if (response.status == 200) {
          this.text = response.data.message;
          this.snackbar = true;
          //location.reload();
        } else {
          this.text = response.data.message;
          this.snackbar = true;
        }
      });
    },
  }
}
</script>
