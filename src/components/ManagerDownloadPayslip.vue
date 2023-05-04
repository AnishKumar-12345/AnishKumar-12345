<template>
    <div style="padding:25px 10px 10px 10px;">
        <v-row class="pl-0 pr-0" >
        <v-col
          cols="4"
      sm="5"
      md="3">

            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Please Select Month"
                  class="pr-1"
                  v-bind="attrs"
                  v-on="on"
                  dense
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" type="month" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
        </v-col>
             <!-- <v-col
          cols="4"
      sm="5"
      md="3">

             </v-col> -->
              <v-col
          cols="4"
      sm="5"
      md="1">
    <v-btn @click="PayslipDownload()" style="background:red;color:white">Retrieve</v-btn>
        </v-col>
        </v-row>
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
     name: "DownloadPaySlip",
  mixins: [servicescall],
    data(){
        return{
            date: new Date().toISOString().substr(0, 7),
         menu: false,
         modal: false,
         valid: false,
         snackbar: false,
        selected: "",
         month: "",
         year: "",
         sal: "",
         text: "",
        employeelist: [],
        }
    },
    mounted(){
          this.selected =localStorage.getItem('id')

    },

    methods:{

     PayslipDownload() {

      this.month = this.date.substring(5, 7);
      this.year = this.date.substring(0, 4);

      //   var reqJSON = this.user;

      this.DownloadPayslip(


        this.month,
        this.year,
        this.selected,

      )
        .then(response => {
          console.log("In post", response.status);
          //if (response.status == 200) {
              const blob = new Blob([response.data], {
           type: response.data.type,
            //encoding: "UTF-8",
         })

         // console.log("link",blob)

          var url = window.URL.createObjectURL(blob);
          //console.log("url",url)
           const link = document.createElement("a");
           link.href = url;
            link.setAttribute("download", "Download PaySlip");
        document.body.appendChild(link);
       link.click()

            this.text = response.data.message;
            this.snackbar = true;


        //  }
        //    else if(response.status==400) {
        //     this.text = response.data.message;
        //     this.snackbar = true;
        //   }
        //   else{
        //     this.text = response.data.message;
        //     this.snackbar = true;
        //   }


        })
        .then(() => {});
    }
    }
}
</script>
