<template>
  <div id="userpayslip" style="margin-top: 20px">
<v-card  width="90%" style="margin-left: 110px; padding:10px; margin-bottom:20px;">
  <div style="margin-top:10px;">
       <v-row>
    <v-col
      cols="4"
      sm="5"
      md="3"
    >
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
            v-bind="attrs"
            v-on="on"
            dense
             outlined
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          type="month"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>

          <v-col style="padding-left:0;"
          cols="1"
      sm="1"
      md="1">
            <v-btn @click="getblukapi(selected)" style="background:red;color:white">Retrieve</v-btn>
          </v-col>

            <v-col
          border:1px solid redcols="2"
      sm="2"
      md="2">
       <!-- <button @click="createPDF()" style="background:red;color:white">
      Download
    </button> -->

    <v-btn @click="createPDF()" style="background:red;color:white">Download</v-btn>

          </v-col>

  </v-row>

    </div>


</v-card>



    <v-card  width="90%" style=" margin-left: 110px; padding:10px;">
    <!-- <div>
       <v-row justify="center">
    <v-col
      cols="4"
      sm="5"
      md="3"
    >
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


            v-bind="attrs"
            v-on="on"
            dense
             outlined
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          type="month"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>

          <v-col
          cols="4"
      sm="5"
      md="3">
            <v-btn @click="getblukapi(selected)" style="background:red;color:white">Retrive</v-btn>
          </v-col>

  </v-row>

    </div> -->

     <div
      id="tab"
      width="50%"

    >

    <div >
        <v-row style="  display:flex;
     justify-content:center;
     align-items:center;

  ">
             <img src="../assets/dizilogo.jpeg" width="360px"  alt="dizitiveit.com" />
        </v-row>

    </div>
      <div>
        <v-row style="width: 100%; margin:0px auto; text-align: left;color:black;font-size: 130%">
           Payslip
        </v-row>
         <v-row style="width: 100%; margin:0px auto; text-align: left;color:black">
 <h1  style=" font-size: 130%">{{this.result.payRollMonth}}</h1>
        </v-row>

        </div>

      <section class="maincls">

        <!-- <table class="table-em">
          <tr><td colspan="3">Jagadeesh</td></tr>
          <tr>
            <td>
              <table>
                <tr><td colspan="2">Employee Details</td></tr>
                <tr>
                  <td>Emp No</td><td>value</td>
                </tr>
                <tr>
                  <td>Emp No</td><td>value</td>
                </tr>
                <tr>
                  <td>Emp No</td><td>value</td>
                </tr>
                <tr>
                  <td>Emp No</td><td>value</td>
                </tr>
              </table>
            </td>
            <td>
              <table>
                <tr><td colspan="2">Employee Details</td></tr>
                <tr>
                  <td>Emp No</td><td>value</td>
                </tr>
                <tr>
                  <td>Emp No</td><td>value</td>
                </tr>
                <tr>
                  <td>Emp No</td><td>value</td>
                </tr>
                <tr>
                  <td>Emp No</td><td><table>
                      <tr>
                        <td>1</td> <td>2</td>
                         <td>3</td> <td>4</td>
                          <td>5</td> <td>6</td>
                      </tr>

                    </table></td>
                </tr>
              </table>
            </td>
            <td>
              <table>
                <tr><td colspan="2">Employee Details</td></tr>
                <tr>
                  <td>Emp No</td><td>value</td>
                </tr>
                <tr>
                  <td>Emp No</td><td>value</td>
                </tr>
                <tr>
                  <td>Emp No</td><td>value</td>
                </tr>
                <tr>
                  <td>Emp No</td><td>value</td>
                </tr>
              </table>
            </td>
          </tr>
        </table> -->




        <table
          border="1"
          width="100%"
          style="border-collapse: collapse;color:black"
          class="tableDeatails"


        >
          <tr >

            <td colspan="12" style="text-align:left"><span style="line-height:30px">{{this.result.employeeName}}</span></td>
          </tr>

          <tr style="background:#01009f">
            <td colspan="4" style="text-align:left; color:white;padding:3px;width:35%"><b>Employee Details</b></td>
            <td colspan="4" style="text-align:left;color:white;padding:3px;width:35% "><b>Payment & Leave Details</b></td>
            <td colspan="4" style="text-align:left;color:white;padding:3px;width:30%"><b>Location Details</b></td>
          </tr>
          <tr >
            <td colspan="2" style="text-align:left;padding:3px;"><b>Emp No</b></td>
            <td colspan="2" style="text-align:left;padding:3px;">{{this.result.employeeId}}</td>
            <td colspan="2" style="text-align:left;padding:3px"><b>Bank Name</b></td>
            <td colspan="2" style="text-align:left;padding:3px">{{this.result.bankName}}</td>
            <td colspan="2" style="text-align:left;padding:3px"><b>Location</b></td>
            <td colspan="2" style="text-align:left;padding:3px">{{this.result.location}}</td>
          </tr>
          <tr >
            <td colspan="2" style="text-align:left;padding:3px;"><b>Designation</b></td>
            <td colspan="2" style="text-align:left;padding:3px;">{{this.result.designation}}</td>
            <td colspan="2" style="text-align:left;padding:3px"><b>A.C NO</b></td>
            <td colspan="2" style="text-align:left;padding:3px">{{this.result.accountNo}}</td>
            <td colspan="2" style="text-align:left;padding:3px"><b>Base Branch</b></td>
            <td colspan="2" style="text-align:left;padding:3px">{{this.result.baseBranch}}</td>
          </tr>
          <tr >
            <td colspan="2" style="text-align:left;padding:3px;"><b>Grade</b></td>
            <td colspan="2" style="text-align:left;padding:3px;">{{this.result.grade}}</td>
            <td colspan="2" style="text-align:left;padding:3px"><b>Days Paid</b></td>
            <td colspan="2" style="text-align:left;padding:3px">{{this.result.daysPaid}}</td>
            <td colspan="2" style="text-align:left;padding:3px"><b>Depute&nbsp;Branch</b></td>
            <td colspan="2" style="text-align:left;padding:3px">{{this.result.deputeBranch}}</td>
          </tr>
          <tr>
            <td colspan="2" style="text-align:left;padding:3px;"><b>Pan No</b></td>
            <td colspan="2" style="text-align:left;padding:3px;"> {{this.result.panCardNumber}}</td>
            <td colspan="3" style="text-align:left;padding:3px"><b>Leave&nbsp;Balance</b></td>


             <td colspan="1" style="padding:0px" >
              <table style="border-color:white"
             >
                      <tr>
                        <td style="border-right:1px solid;padding: 0 7px;margin:0px">SL</td> <td style="border-right:1px solid;padding: 0 7px;margin:0px">{{this.result.sickLeaves}}</td>
                         <td style="border-right:1px solid;padding: 0 7px;margin:0px">CL</td> <td style="border-right:1px solid;padding: 0 7px;margin:0px">{{this.result.casualLeaves}}</td>
                          <td style="border-right:1px solid;padding: 0 7px;margin:0px">LOP</td> <td  v-if="this.result.lop!=0">{{this.result.lop}}</td>
                      </tr>

                    </table>

               <!-- <div style="
                width: 150px;
                display: flex;
                align-items: center;
                justify-content: space-between
               ">
                  <div style="width: 50px; height: 30px
                    display: flex;
                    justify-content: center;
                    align-center: center;
                    display: flex;
                  ">
                    <span style="
                    display: flex;
                    width: 25px;
                    height: 30px;
                    border-right: 1px solid;
                    align-items: center;
                    justify-content: center;">SL</span>
                    <span style="border-right: 1px solid;
                      height: 30px;
                      width:25px;
                      display: flex;
                      align-items: center;
                      justify-content: center;">{{this.result.sickLeaves}}</span>
                  </div>
                  <div style="width: 50px; height: 30px;display: flex;">
                    <span style="
                    display: flex;
                    width: 25px;
                    height: 30px;
                    border-right: 1px solid;
                    align-items: center;
                    justify-content: center;">CL</span>
                    <span style="border-right: 1px solid;
                      height: 30px;
                      width:25px;
                      display: flex;
                      align-items: center;
                      justify-content: center;">{{this.result.casualLeaves}}</span>
                  </div>
                  <div style="width: 50px; height: 30px; display: flex;" v-if="this.result.lop!=0">

                    <span style="
                    display: flex;
                    width: 25px;
                    height: 30px;
                    border-right: 1px solid;
                    align-items: center;
                    justify-content: center;">LOP</span>
                    <span style="border-right: 1px solid;
                      height: 30px;
                      width:25px;
                      display: flex;
                      align-items: center;
                      justify-content: center;">{{this.result.lop}}</span>
                  </div>

               </div> -->
               <!-- <div style="display: flex; justify-content: space-around, border: 1px solid red; width: 100%;

               display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    height: 100%;
    /* width: 150px; */
    align-items: center;
    /* justify-content: space-around; */
    margin: 0;
    height: 29px;
                ">


               <div style="    display: flex;
    align-items: center;
    justify-content: space-around; height: 30px">
                <span style="border-right: 1px solid;
    height: 30px;
    padding: 0 10px;
    display: flex;
    align-items: center; width: 50%;
    justify-content: center;">SL</span>
    <span style="border-right: 1px solid;
    height: 30px;
    padding: 0 10px;
    display: flex;
    align-items: center; width: 50%;
    justify-content: center;">{{this.result.sickLeaves}} </span>
               </div>

               <div style="    display: flex;
    align-items: center;
    justify-content: space-around; height: 30px"> <span style="border-right: 1px solid;
    height: 30px;
    padding: 0 10px;
    display: flex;
    align-items: center; width: 50%;
    justify-content: center;">CL</span><span style="border-right: 1px solid;
    height: 30px;
    padding: 0 10px;
    display: flex;
    align-items: center; width: 50%;
    justify-content: center;">{{this.result.casualLeaves}}</span>
               </div>
               <div v-if="this.result.lop!=0" style="    display: flex;
    align-items: center;
    justify-content: space-around; height: 30px">
                 <span style="border-right: 1px solid;
    height: 30px;
    padding: 0 10px;
    display: flex;
    align-items: center; width: 50%;
    justify-content: center;">LOP</span> <span style="border-right: 1px solid;
    height: 30px;
    padding: 0 10px;
    display: flex;
    align-items: center; width: 50%;
    justify-content: center;"> {{this.result.lop}}</span>
                 </div>
               </div> -->

             </td>

                <!-- <td  colspan="0.5" ></td> -->
                  <!-- <td  colspan="0.5" ></td> -->
                 <td colspan="2" style="text-align:left;padding:3px;"><b>Date of Joining</b></td>
                 <td colspan="2" style="text-align:left;padding:3px;">{{this.result.dateOfJoining}}</td>

          </tr>
        </table>

       <div style="height: 5px"></div>

        <table
          border="1"
          width="100%"
          style="border-collapse: collapse;color:black"
          class="tableDeatails"

        >
          <tr  style="background:#01009f">
            <td colspan="3.5" style="text-align:left;color:white;padding:3px;width:25%"><b>Earnings</b></td>
            <!-- <td colspan="1.5" style="text-align:left;color:white;padding:3px"><b>Arrears</b><span style="font-size:10px">(INR)</span></td> -->
            <td colspan="1.5" style="text-align:left;color:white;padding:3px;25%"><b>Current </b><span style="font-size:10px">(INR)</span></td>
            <td colspan="4.5" style="text-align:left;color:white;padding:3px;25%"><b>Deductions</b></td>
            <td colspan="1.5" style="text-align:left;color:white;padding:3px;25%"><b>Amount</b><span style="font-size:10px">(INR)</span></td>
          </tr>

            <tr v-if="this.result.pt==0.00">
            <!-- <td colspan="3.5" style="text-align:left;padding:3px" v-if="this.result.pt!=0.00"><b>Basic Salary</b></td> -->
            <td colspan="3.5" style="text-align:left;padding:3px;"><b>Consolidated  Pay</b></td>
            <!-- <td colspan="1.5" style="text-align:left;padding:3px"></td> -->
            <td colspan="1.5" style="text-align:right;padding:3px">{{this.result.basicSalary}}</td>
             <td colspan="4.5" style="text-align:left;padding:3px" v-if="this.result.lopDeduction!=null">LOP</td>
            <td colspan="4.5" style="text-align:left;padding:3px; height:30px" v-if="this.result.lopDeduction==null"></td>
            <td colspan="1.5" style="text-align:right;padding:3px" v-if="this.result.lopDeduction!=null">{{this.result.lopDeduction}}</td>
             <td colspan="1.5" style="text-align:left;padding:3px; height:30px" v-if="this.result.lopDeduction==null"></td>
          </tr>
          <tr v-else>
            <td colspan="3.5" style="text-align:left;padding:3px" ><b>Basic Salary</b></td>
            <!-- <td colspan="3.5" style="text-align:left;padding:3px;" v-if="this.result.pt==0.00"><b>Consolidated Pay</b></td> -->
            <!-- <td colspan="1.5" style="text-align:left;padding:3px"></td> -->
            <td colspan="1.5" style="text-align:right;padding:3px">{{this.result.basicSalary}}</td>
             <td colspan="4.5" style="text-align:left;padding:3px">PT</td>
            <!-- <td colspan="4.5" style="text-align:left;padding:3px; height:30px" ></td> -->
            <td colspan="1.5" style="text-align:right;padding:3px" >{{this.result.pt}}</td>
            <!-- <td colspan="1.5" style="text-align:left;padding:3px; height:30px" ></td>    -->
          </tr>
          <tr v-if="this.result.pt!=0.00">
            <td colspan="3.5" style="text-align:left;padding:3px" v-if="this.result.hra!=0.00"><b>HRA</b></td>
            <td colspan="3.5" style="text-align:left;padding:3px" v-if="this.result.hra==0.00"><b></b></td>
            <!-- <td colspan="1.5"></td> -->
            <td colspan="1.5" style="text-align:right;padding:3px" v-if="this.result.hra!=0.00">{{this.result.hra}}</td>
             <td colspan="1.5" style="text-align:right;padding:3px; height:30px" v-if="this.result.hra==0.00" ></td>
              <td colspan="4.5" style="text-align:left;padding:3px" v-if="this.result.lopDeduction!=null" >LOP</td>
            <td colspan="4.5" style="text-align:left;padding:3px" v-if="this.result.lopDeduction==null" ></td>
            <td colspan="1.5" style="text-align:right;padding:3px" v-if="this.result.lopDeduction!=null"> {{this.result.lopDeduction}}</td>
             <td colspan="1.5" style="text-align:right;padding:3px" v-if="this.result.lopDeduction==null"> </td>
          </tr>
          <tr>
            <td colspan="3.5" style="text-align:left;padding:3px" v-if="this.result.conveyance!=0.00"><b>Conveyance</b></td>
            <td colspan="3.5" style="text-align:left;padding:3px; height:30px" v-if="this.result.conveyance==0.00"><b></b></td>
            <!-- <td colspan="1.5"></td> -->
            <td colspan="1.5" style="text-align:right;padding:3px" v-if="this.result.conveyance!=0.00">{{this.result.conveyance}}</td>
              <td colspan="1.5" style="text-align:right;padding:3px; height:30px" v-if="this.result.conveyance==0.00"></td>
            <td colspan="4.5"></td>
            <td colspan="1.5"></td>
          </tr>
          <tr>
            <td colspan="3.5" style="text-align:left;padding:3px" v-if="this.result.cityAllowances!=0.00"><b>City Allowance</b></td>
             <td colspan="3.5" style="text-align:left;padding:3px; height:30px" v-if="this.result.cityAllowances==0.00"><b></b></td>
            <!-- <td colspan="1.5"></td> -->
            <td colspan="1.5" style="text-align:right;padding:3px" v-if="this.result.cityAllowances!=0.00">{{this.result.cityAllowances}}</td>
             <td colspan="1.5" style="text-align:right;padding:3px ; height:30px" v-if="this.result.cityAllowances==0.00"></td>
            <td colspan="4.5"></td>
            <td colspan="1.5"></td>
          </tr>
          <tr>
            <td colspan="3.5" style="text-align:left;padding:3px" v-if="this.result.pfEmployeerContributor!=0.00"><b>PF Employer Contribution*</b></td>
             <td colspan="3.5" style="text-align:left;padding:3px; height:30px" v-if="this.result.pfEmployeerContributor==0.00"><b></b></td>

            <td colspan="1.5" style="text-align:right;padding:3px" v-if="this.result.pfEmployeerContributor!=0.00">{{this.result.pfEmployeerContributor}}</td>
             <td colspan="1.5" style="text-align:right;padding:3p; height:30px" v-if="this.result.pfEmployeerContributor==0.00"></td>
            <td colspan="4.5"></td>
            <td colspan="1.5"></td>
          </tr>

              <tr >
            <td  colspan="4" height="50px" >


            </td>
             <td  colspan="6" height="50px" style="text-align:left">


            </td>


          </tr>

              <tr >
            <td  colspan="4" height="30px" >
              <div style="float:left;padding:3px">
             <span> <b>Total Earnings</b></span>
             </div>
             <div style="float:right; padding:3px">
             <span> <b style="color:black">{{this.result.totalEarnings}}</b></span>
             </div>
            <!-- <tr>
              <td style="width:50%">Total</td>
              <td style="margin-right:0"> 1000</td>
            </tr> -->
            </td>
             <td  colspan="6" height="30px" >
            <div style="float:left;padding:3px">
            <span ><b> Total Deduction</b></span>
            </div>
            <div style="float:right; padding:3px">
          <span ><b>{{this.result.totalDeductions}}</b></span>
            </div>
            </td>


          </tr>

        </table>
        <div style="height: 5px"></div>
         <!-- <table

          class="tableDeatails"
        >
          <tr style="margin-left:200px">
            <td style="width:80% ;border-color:white"></td>
            <td style="border:1px solid;width:10%;padding:8px;background:#01009f;color:white">Net Pay(INR)</td>
            <td style="border:1px solid ;width:10%"><b style="color:black">{{(this.result.netPay)}}</b></td>
          </tr>
        </table>  -->

        <div style="width: 100%; height: 40px;
          display: flex; align-items: center; justify-content: flex-end;
        ">
          <div style="width: 100px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background:#01009f;
            border: 1px solid #01009f;
            color: #fff"
            >Net Pay(INR)</div>
          <div style="width: 100px;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: end;
              border: 1px solid" ><b style="color:black">{{(this.result.netPay)}}</b></div>
        </div>

        <div style="width: 100%; margin:30px auto; text-align: left"><span>Payslip generated  </span><b>on {{this.result.payrollDate}}</b></div>
         <div  style="width: 100%; margin:30px auto; text-align: left" v-if="this.result.pfEmployeerContributor!=0.00"><span>*PF Employer Contribution was added to Gross as
<br>the PF Registration formalities are pending<br> </span></div>
      </section>


    </div>
    <!-- <button @click="createPDF()" class="button" style="margin-left: 70px">
      Download
    </button> -->
    </v-card>
  </div>
</template>

<script>
import servicescall from "../Services";
export default {
  name: "Userpayroll",
 mixins: [servicescall],
  data() {
    return {
      data: {},
       userid:"",
      jwt: "",
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
      selected:"",
      employeeId:"",
       employeelist: [],
       result:[]
    };
  },
  components: {},
  mounted() {
    this.getList();
      this.userid =localStorage.getItem('id')

  },
  methods: {




    createPDF() {

      var sTable = document.getElementById("tab").innerHTML;

      var style = "<style>";
      style = style + "table {width: 100%;font-size: 17px Calibri;}";
      style =
        style +
        " th, td {border: solid 1px black; border-collapse: collapse;";
      style = style + "text-align: center;}";
      style = style + "</style>";

      // CREATE A WINDOW OBJECT.
      var win = window.open("", "", "height=700,width=700");

      win.document.write("<html><head>");
      win.document.write("<title></title>"); // <title> FOR PDF HEADER.
      win.document.write(style); // ADD STYLE INSIDE THE HEAD TAG.
      win.document.write("</head>");
      win.document.write("<body>");
      win.document.write(sTable); // THE TABLE CONTENTS INSIDE THE BODY TAG.
      win.document.write("</body></html>");

      win.document.close(); // CLOSE THE CURRENT WINDOW.

      win.print(); // PRINT THE CONTENTS.
    },
     getList() {

      this.getlistOfEmployees().then((response) => {
        console.log("Get All employee satya", response.data.Employee[0].employeeId);
        for (var i = 0; i < response.data.Employee.length; i++) {
          this.employeelist.push({
            text: response.data.Employee[i].employeeId,
          });
        }

        //this.user = response.data.Employee;
        console.log("Get All employee list", this.employeelist);
      });
    },
    getblukapi(selected) {

      var month = this.date.substring(5,7);
      var year = this.date.substring(0,4);
    //   var employeeId= selected;
    //   console.log("date",month,year,employeeId)
      this.getPaySlip(this.userid,month, year).then((response) => {
          this.result = response.data.PayRoll;

        console.log("In post", this.result);
      });
    },
    getPayroll(){
       var month = this.date.substring(5,7);
      var year = this.date.substring(0,4);
       this.getSavedPayroll(month, year).then((response) => {
          this.result = response.data.PayRoll;

        console.log("In post", this.result);
      });
    }
  },
};
</script>

<style scoped>
.Total{
   display: flex;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
}
.tableDeatails {
  margin: 10px auto;
}
#customers {
  font-family: serif;
  border-collapse: collapse;
  width: 80%;
  margin: opx auto;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #a09898;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  /* background-color: #4CAF50; */
  background-color: #e3f2fd;
  color: black;
  text-align: center;
}
.button {
  background-color: red; /* Green */
  border: none;
  color: black;
  padding: 5px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-bottom: 20px;
}
</style>
