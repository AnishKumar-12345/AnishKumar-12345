import Vue from 'vue'
import axios from "axios";

export default {
    data(){
        return{
            url: "http://103.60.213.11:9006/",

        }
    },
    methods :{
        login(reqbody) {
            console.log("IN service call",reqbody)
            return axios
              .post(this.url +"api/auth/signup", reqbody, {
                headers: {
                    "accept": "*/*",
                  "Content-Type": "application/json",
                 
                }
              })
              .then(response => {
                //console.log("res",response)
                return response;
              })
              .catch(err => {
                //TODO: How to i fetch, and pass the errorcode ?
                console.log("error service", err.response.data.message);
                return err.response;
              });
          },
    }
}