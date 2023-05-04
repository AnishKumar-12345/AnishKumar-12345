<template>
  <div id="app">
  <v-app>
    <div class="v-container">
   
      <div class="col-xs-12 col-sm-4 col-md-6" id="logo" align="center"> <img src="https://www.smartpractice.co.za/gerhard/ExportUI/images/logo.png" width="150px" ></div>
      <div class="col-xs-8 col-md-6" align="right" id="invInfo">
        <h1>TAX INVOICE</h1>
        <div class="col-xs-12 col-sm-8" align="right">NUMBER:<br>
          REFERENCE:<br>
          DATE:<br>
          DUE DATE:<br>
          SALES REP:<br>
          OVERALL DISCOUNT %:<br>
          PAGES:
        </div>
        <div class="col-xs-12 col-sm-4" align="right">123456789<br>
          ___<br>
          ___<br>
          ___<br>
          ___<br>
          ___<br>
          ___
        </div>
      </div>
      
  </div>
  
  <div class="container">
  <div class="col-sm-6 col-md-3">
      <tr>            <h4>FROM:</h4>           </tr>
        <address>
          <p class="h2" style="line-height:0.3; font-weight:750">COMPANY, Inc.</p><br>
          VAT NO.: <br>    
          1355 Market Street, Suite 900<br>
          San Francisco, CA 94103<br>
          <abbr title="Phone"> P:</abbr> (123) 456-7890
        </address>
    </div>
        
       <div class="col-sm-6 col-md-3">
      <tr>            <h4>TO:</h4>           </tr>
        <address>
          <p class="h2" style="line-height:0.3; font-weight:750">COMPANY, Inc.</p><br>
          CUSTOMER VAT NO.: <br>
          1355 Market Street, Suite 900<br>
          San Francisco, CA 94103<br>
          <abbr title="Phone"> P:</abbr> (123) 456-7890
        </address>
    </div>
      </div>
  
   
     <div class="container">
         <div class="col-sm-12" style="border: 1px solid">name</div>
       <table class="table" style="border: 1px solid" id="mytable">
         <thead style="border: 1px solid">
           <tr style="border: 1px solid; background: blue; padding: 0; border-collapse: collapse; color: #fff">
           <th class="col-sm-4 ">Description</th>       
           <th class="col-sm-4">Quantity</th>
           <th class="col-sm-4">Price/Unit</th>         
           <!-- <th class="col-sm-1">Disc%</th>      
           <th class="col-sm-1">VAT%</th>                  
           <th class="col-sm-2" style="text-align: right">Excl. Total</th>         
            <th class="col-sm-2" style="text-align: right">Incl. Total</th> -->
           </tr>
         </thead>
         <tbody>
           <tr>
           <td class="col-sm-4" style="padding: 0">
               <table style="border: none; width: 100%">
                   <tr>
                       <th>sdfg</th>
                       <td>sdfg</td>   
                    </tr>
                   <tr>
                       <th>sdfg</th>
                       <td>sdfg</td>   
                    </tr>
                   <tr><th>dfg</th><td>sdfg</td></tr>
                   <tr>
                       <th>hdk</th>
                       <td>dsklf</td>
                   </tr>
               </table>
            </td>       
           <td class="col-sm-4" style="padding: 0">
               <table style="border: none; width: 100%">
                   <tr>
                       <th>sdfg</th>
                       <td colspan="2">sdfg</td>   
                    </tr>
                   <tr>
                       <th>sdfg</th>
                       <td colspan="2">sdfg</td>   
                    </tr>
                   <tr><th>dfg</th><td colspan="2">sdfg</td></tr>
                   <tr>
                       <th>hdk</th>
                        <td >
                            <div style="display: flex; flex-direction: row">
                            <span style="width: 50%; border-left: 1px solid; display: flex; align-items: center; justify-content: center">a</span>
                            <span style="width: 50%; border-left: 1px solid; display: flex; align-items: center; justify-content: center">b</span>
                            </div>    
                        </td>
                        <td >
                            <div style="display: flex; flex-direction: row">
                            <span style="width: 50%; border-left: 1px solid; display: flex; align-items: center; justify-content: center">a</span>
                            <span style="width: 50%; border-left: 1px solid; display: flex; align-items: center; justify-content: center">b</span>
                            </div>    
                        </td>

                   </tr>
               </table>
           </td>
           <td class="col-sm-4" style="padding: 0">
               <table style="border: none; width: 100%">
                   <tr>
                       <th>sdfg</th>
                       <td>sdfg</td> 
                         
                    </tr>
                   <tr>
                       <th>sdfg</th>
                       <td>sdfg</td>   
                    </tr>
                   <tr><th>dfg</th><td>sdfg</td></tr>
                   <tr>
                       <th>q</th>
                       <td></td>
                   </tr>
               </table>
           </td>
           <!-- <td class="col-sm-2">0.00</td>      
           <td class="col-sm-2">675.00</td>                  
           <td class="col-sm-2" style="text-align: right">4500.00</td>          -->
            <!-- <td class="col-sm-2" style="text-align: right">5175.00</td> -->
           </tr>
         </tbody>
            </table>
    
       
       <br /><br />
     </div>
       <v-btn type="button" class="btn btn-success" @click='generatePDF'>Generate PDF</v-btn>


  </v-app>
</div>
  
</template>
<script>
import servicescall from "../Services";
import { jsPDF } from "jspdf";
import 'jspdf-autotable'
export default {
    name:"GeneratePdf",
     mixins: [servicescall],
     data() {
    return {
      
      heading: "TAX INVOICE",
    
      items: [
        { 
            description:  
            
            [{title: "title1", dataKey: "title1"}, {title: "title2", dataKey: title2},
            {title: "title3", dataKey: "title3"}],
            item: [{title1: "value1"}, {title2: "value2"}, {title2: "value3"}], 
            
            quantity: "1", unitprice: "450.00", disc: "0.00", vat:  "67.50", excltotal: "450.00", incltotal: "517.50" },
        { description: "Item 2", quantity: "10", unitprice: "4500.00", disc: "0.00", vat:  "675.00", excltotal: "4500.00", incltotal: "5175.00" },
        
      ]
    };
  },
  methods: {
    generatePDF() {
      const vm = this;
       const imgData = 'data:image/jpeg;base64,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';
      const columns = [
        { title: "Discription", dataKey: "description" },
        { title: "Quantity", dataKey: "quantity" },
        { title: "UnitPrice", dataKey: "unitprice" },
        // { title: "Disc%", dataKey: "disk" },
        // { title: "Vat%", dataKey: "vat" },
        // { title: "ExclTotal", dataKey: "excltotal" },
        // { title: "InclTotal", dataKey: "incltotal" }
      ];
      const doc = new jsPDF("p", "pt");
     
      // text is placed using x, y coordinates
      doc.addImage(imgData, 'JPEG', 45, 30, 90, 118);
      doc
        .setFont("times")
        .setFontSize(22)
        .text(420, 40, "TAX INVOICE");
      doc
        .setFont("times")
        .setFontSize(10)
        .text(400, 70, "NUMBER:");
      doc
        .setFont("times")
        .setFontSize(10)
        .text(490, 70, "123456789");
        doc
        .setFont("times")
        .setFontSize(10)
        .text(385, 85, "REFERENCE:");
      doc
        .setFont("times")
        .setFontSize(10)
        .text(490, 85, "123456789");
        doc
        .setFont("times")
        .setFontSize(10)
        .text(416, 100, "DATE:");
      doc
        .setFont("times")
        .setFontSize(10)
        .text(490, 100, "123456789");
        doc
        .setFont("times")
        .setFontSize(10)
        .text(392, 115, "DUE DATE:");
      doc
        .setFont("times")
        .setFontSize(10)
        .text(490, 115, "123456789");
        doc
        .setFont("times")
        .setFontSize(10)
        .text(390, 130, "SALES REP:");
      doc
        .setFont("times")
        .setFontSize(10)
        .text(490, 130, "123456789");
        doc
        .setFont("times")
        .setFontSize(10)
        .text(330, 145, "OVERALL DISCOUNT %:");
      doc
        .setFont("times")
        .setFontSize(10)
        .text(490, 145, "123456789");
        doc
        .setFont("times")
        .setFontSize(10)
        .text(412, 160, "PAGES:");
      doc
        .setFont("times")
        .setFontSize(10)
        .text(490, 160, "123456789");      
        doc
        .setFont("times")
        .setFontSize(11)
        .text(50, 230, "FROM:");
      doc
        .setFont("times")
        .setFontSize(11)
        .text(300, 230, "TO:");
        doc
        .setFont("times")
        .setFontSize(18)
        .text(50, 250, "COMPANY Inc.");
      doc
        .setFont("times")
        .setFontSize(18)
        .text(300, 250, "COMPANY Inc.");
       doc
        .setFont("times")
        .setFontSize(11)
        .text(50, 280, "VAT NO:");
      doc
        .setFont("times")
        .setFontSize(11)
        .text(300, 280, "CUSTOMER VAT NO:");
       doc
        .setFont("times")
        .setFontSize(10)
        .text(50, 290, "1355 Market Street, Suite 900");
      doc
        .setFont("times")
        .setFontSize(10)
        .text(300, 290, "1355 Market Street, Suite 900");
      doc
        .setFont("times")
        .setFontSize(10)
        .text(50, 300, "San Francisco, CA 94103");
      doc
        .setFont("times")
        .setFontSize(10)
        .text(300, 300, "San Francisco, CA 94103");
      doc
        .setFont("times")
        .setFontSize(10)
        .text(50, 310, "P: (123) 456-7890");
      doc
        .setFont("times")
        .setFontSize(10)
        .text(300, 310, "P: (123) 456-7890");
     
      doc.autoTable(columns, vm.items, {margin: {top: 350}});
    //  doc.autoTable({ html: '#mytable' })
      
      doc.setLineWidth(2)
      doc.line(560, 725, 40, 725)
    
      
        doc.save(`${this.heading}.pdf`);
      
      
    }
  }
   
  
 
}
</script>
<style scoped>
    table {
        width: 100%;
    }
    table, td, th {
        border: 1px solid;
        border-collapse: collapse;
    }
</style>