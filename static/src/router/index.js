import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/HelloWorld',
      props:true,
      name: 'HelloWorld',
      component: () =>import('../components/HelloWorld.vue'),
     
    },
    {
      path: '/Appbar',
      props:true,
      name: 'Appbar',
      component: () =>import('../components/Appbar.vue'),
     
    },
    {
      path: '/CompanyProfile',
      props:true,
      name: 'CompanyProfile',
      component: () =>import('../components/CompanyProfile.vue'),
    
     
    },
    {
      path: '/EmployeeProfile',
      props:true,
      name: 'EmployeeProfile',
      component: () =>import('../components/EmployeeProfile.vue'),
    
     
    },
    {
      path: '/FamilyDetails',
      props:true,
      name: 'FamilyDetails',
      component: () =>import('../components/FamilyDetails.vue'),
    
     
    },
    {
      path: '/EducationDetails',
      props:true,
      name: 'EducationDetails',
      component: () =>import('../components/EducationDetails.vue'),
    
     
    },
    {
      path: '/PersonalData',
      props:true,
      name: 'PersonalData',
      component: () =>import('../components/PersonalData.vue'),
    
     
    },
    {
      path: '/Appbarmenu',
      props:true,
      name: 'Appbarmenu',
      component: () =>import('../components/Appbarmenu.vue'),
     
    },
    {
      path: '/menubar',
      props:true,
      name: 'menubar',
      component: () =>import('../components/menubar.vue'),
     
    },
    {
      path: '/Address',
      props:true,
      name: 'Address',
      component: () =>import('../components/Address.vue'),
     
    },
    {
      path: '/Companydata',
      props:true,
      name: 'Companydata',
      component: () =>import('../components/Companydata.vue'),
     
    },
    {
      path: '/Leave',
      props:true,
      name: 'Leave',
      component: () =>import('../components/Leave.vue'),
     
    },
    {
      path: '/AdditionalDetails',
      props:true,
      name: 'AdditionalDetails',
      component: () =>import('../components/AdditionalDetails.vue'),
     
    },
    {
      path: '/Tabs.vue',
      props:true,
      name: 'Tab',
      component: () =>import('../components/Tab.vue'),
     
    },
    {
      path: '/Tab.vue',
      props:true,
      name: 'Tab',
      component: () =>import('../components/Tab.vue'),
     
    },
  ]
})
