<template>
    <div>
       
    
    <div >
        
      <subtabs style="margin-top: 10px;margin-left:100px;color:white">
          <subtab name="Pay Register" selected="true" >
          <div>
             <PayRegisterView></PayRegisterView>
          </div>
        </subtab>
        <subtab name="Run Payload " >
          <div>
            <PayrollView></PayrollView>
          </div>
        </subtab>
        
         <subtab name="Payout">
          <div>
            <PayOutView></PayOutView>
          </div>
        </subtab>
        
        
         
        
      </subtabs>
    </div>
    </div>
</template>

<script>

import subtabs from "./subtabs.vue";
import subtab from "./subtab.vue";
import PayrollView from "./PayrollView.vue";
import PayRegisterView from "./PayRegisterView.vue";
import PayOutView from "./PayOutView.vue";







export default {
  name: "EmployeeProfile",
  components: {
    
    subtabs,
    subtab,
    PayrollView,
    PayRegisterView,
    PayOutView
   
  
 
   
   
  },
  data() {
    return {
      count: 1,
      activeComponent: false,
      activefiled: true,
    };
  },
};
</script>