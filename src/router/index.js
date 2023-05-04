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
      path: '/AddHolidays',
      props:true,
      name: 'AddHolidays',
      component: () =>import('../components/AddHolidays.vue'),
     
    },
    {
      path: '/PaySlipLineItem',
      props:true,
      name: 'PaySlipLineItem',
      component: () =>import('../components/PaySlipLineItem.vue'),
     
    },
    {
      path: '/LeaveEntitlement',
      props:true,
      name: 'LeaveEntitlement',
      component: () =>import('../components/LeaveEntitlement.vue'),
     
    },
    {
      path: '/UserLeaveEntitlement',
      props:true,
      name: 'UserLeaveEntitlement',
      component: () =>import('../components/UserLeaveEntitlement.vue'),
     
    },
    {
      path: '/ManagerLeaveDashboard',
      props:true,
      name: 'ManagerLeaveDashboard',
      component: () =>import('../components/ManagerLeaveDashboard.vue'),
     
    },
    {
      path: '/ManagerLeaveProfile',
      props:true,
      name: 'ManagerLeaveProfile',
      component: () =>import('../components/ManagerLeaveProfile.vue'),
     
    },
    {
      path: '/ManagerEmployeeLeaveApply',
      props:true,
      name: 'ManagerEmployeeLeaveApply',
      component: () =>import('../components/ManagerEmployeeLeaveApply.vue'),
     
    },
    {
      path: '/ManagerAudit',
      props:true,
      name: 'ManagerAudit',
      component: () =>import('../components/ManagerAudit.vue'),
     
    },
    {
      path: '/ManagerLeaveapply',
      props:true,
      name: 'ManagerLeaveapply',
      component: () =>import('../components/ManagerLeaveapply.vue'),
     
    },
    {
      path: '/ManagerAttendanceview',
      props:true,
      name: 'ManagerAttendanceview',
      component: () =>import('../components/ManagerAttendanceview.vue'),
     
    },
    {
      path: '/ManagerAttendanceProfile',
      props:true,
      name: 'ManagerAttendanceProfile',
      component: () =>import('../components/ManagerAttendanceProfile.vue'),
     
    },
    {
      path: '/UserProfileUpdate',
      props:true,
      name: 'UserProfileUpdate',
      component: () =>import('../components/UserProfileUpdate.vue'),
     
    },
    {
      path: '/ManagerProfileUpdate',
      props:true,
      name: 'ManagerProfileUpdate',
      component: () =>import('../components/ManagerProfileUpdate.vue'),
     
    },
    
    {
      path: '/Roles',
      props:true,
      name: 'Roles',
      component: () =>import('../components/Roles.vue'),
     
    },
    {
      path: '/UserLeaveprofile',
      props:true,
      name: 'UserLeaveprofile',
      component: () =>import('../components/UserLeaveprofile.vue'),
     
    },
    {
      path: '/Userpayroll',
      props:true,
      name: 'Userpayroll',
      component: () =>import('../components/Userpayroll.vue'),
     
    },
    {
      path: '/Userpayslipprofile',
      props:true,
      name: 'Userpayslipprofile',
      component: () =>import('../components/Userpayslipprofile.vue'),
     
    },
    {
      path: '/Usermenu',
      props:true,
      name: 'Usermenu',
      component: () =>import('../components/Usermenu.vue'),
     
    },
    {
      path: '/UserAttendenceview',
      props:true,
      name: 'UserAttendenceview',
      component: () =>import('../components/UserAttendenceview.vue'),
     
    },
    {
      path: '/UserAddAttendence',
      props:true,
      name: 'UserAddAttendence',
      component: () =>import('../components/UserAddAttendence.vue'),
     
    },
    {
      path: '/UserAttendenceprofile',
      props:true,
      name: 'UserAttendenceprofile',
      component: () =>import('../components/UserAttendenceprofile.vue'),
     
    },
    {
      path: '/EmployeeUpdate',
      props:true,
      name: 'EmployeeUpdate',
      component: () =>import('../components/EmployeeUpdate.vue'),
     
    },
   
    {
      path: '/UserDashboard',
      props:true,
      name: 'UserDashboard',
      component: () =>import('../components/UserDashboard.vue'),
     
    },
    {
      path: '/MonthlySalarySave',
      props:true,
      name: 'MonthlySalarySave',
      component: () =>import('../components/MonthlySalarySave.vue'),
     
    },
    {
      path: '/ManagerDownloadPayslip',
      props:true,
      name: 'ManagerDownloadPayslip',
      component: () =>import('../components/ManagerDownloadPayslip.vue'),
     
    },
    {
      path: '/EmployeeAllowance',
      props:true,
      name: 'EmployeeAllowance',
      component: () =>import('../components/EmployeeAllowance.vue'),
     
    },
    {
      path: '/EmployeeDeduction',
      props:true,
      name: 'EmployeeDeduction',
      component: () =>import('../components/EmployeeDeduction.vue'),
     
    },
    {
      path: '/EmployeeAllowanceView',
      props:true,
      name: 'EmployeeAllowanceView',
      component: () =>import('../components/EmployeeAllowanceView.vue'),
     
    },
    {
      path: '/LeaveView',
      props:true,
      name: 'LeaveView',
      component: () =>import('../components/LeaveView.vue'),
     
    },
    {
      path: '/UserLeaveapply',
      props:true,
      name: 'UserLeaveapply',
      component: () =>import('../components/UserLeaveapply.vue'),
     
    },
    {
      path: '/ApplyLeave',
      props:true,
      name: 'ApplyLeave',
      component: () =>import('../components/ApplyLeave.vue'),
     
    },
    {
      path: '/GeneratePdf',
      props:true,
      name: 'GeneratePdf',
      component: () =>import('../components/GeneratePdf.vue'),
     
    },
    {
      path: '/PaySlips',
      props:true,
      name: 'PaySlips',
      component: () =>import('../components/PaySlips.vue'),
     
    },
    {
      path: '/AttendenceProfile',
      props:true,
      name: 'AttendenceProfile',
      component: () =>import('../components/AttendenceProfile.vue'),
     
    },
    {
      path: '/Addattendence',
      props:true,
      name: 'Addattendence',
      component: () =>import('../components/Addattendence.vue'),
     
    },
    {
      path: '/Employeebluckupload',
      props:true,
      name: 'Employeebluckupload',
      component: () =>import('../components/Employeebluckupload.vue'),
     
    },
    
    {
      path: '/BranchDetails',
      props:true,
      name: 'BranchDetails',
      component: () =>import('../components/BranchDetails.vue'),
     
    },
    {
      path: '/UsergetProfile',
      props:true,
      name: 'UsergetProfile',
      component: () =>import('../components/UsergetProfile.vue'),
     
    },
    {
      path: '/PayRegisterView',
      props:true,
      name: 'PayRegisterView',
      component: () =>import('../components/PayRegisterView.vue'),
     
    },
    {
      path: '/PayOutView',
      props:true,
      name: 'PayOutView',
      component: () =>import('../components/PayOutView.vue'),
     
    },
    {
      path: '/LeaveMaster',
      props:true,
      name: 'LeaveMaster',
      component: () =>import('../components/LeaveMaster.vue'),
     
    },
    {
      path: '/DownloadPaySlip',
      props:true,
      name: 'DownloadPaySlip',
      component: () =>import('../components/DownloadPaySlip.vue'),
     
    },
    {
      path: '/AttendanceView',
      props:true,
      name: 'AttendanceView',
      component: () =>import('../components/AttendanceView.vue'),
     
    },
    {
      path: '/payRollGeneration',
      props:true,
      name: 'payRollGeneration',
      component: () =>import('../components/payRollGeneration.vue'),
     
    },
    {
      path: '/UserLeaveDashboard',
      props:true,
      name: 'UserLeaveDashboard',
      component: () =>import('../components/UserLeaveDashboard.vue'),
     
    },
    {
      path: '/ManagerDashboard',
      props:true,
      name: 'ManagerDashboard',
      component: () =>import('../components/ManagerDashboard.vue'),
     
    },
    {
      path: '/ManagerGetprofile',
      props:true,
      name: 'ManagerGetprofile',
      component: () =>import('../components/ManagerGetprofile.vue'),
     
    },
    {
      path: '/ManagerMenu',
      props:true,
      name: 'ManagerMenu',
      component: () =>import('../components/ManagerMenu.vue'),
     
    },
    {
      path: '/ManagerAppbar',
      props:true,
      name: 'ManagerAppbar',
      component: () =>import('../components/ManagerAppbar.vue'),
     
    },
    {
      path: '/ManagerPayroll',
      props:true,
      name: 'ManagerPayroll',
      component: () =>import('../components/ManagerPayroll.vue'),
     
    },
    {
      path: '/Department',
      props:true,
      name: 'Department',
      component: () =>import('../components/Department.vue'),
     
    },
    {
      path: '/BluckUpload',
      props:true,
      name: 'BluckUpload',
      component: () =>import('../components/BluckUpload.vue'),
     
    },
   
    {
      path: '/Leaveprofile',
      props:true,
      name: 'Leaveprofile',
      component: () =>import('../components/Leaveprofile.vue'),
     
    },
    {
      path: '/Attendence',
      props:true,
      name: 'Attendence',
      component: () =>import('../components/Attendence.vue'),
     
    },
    {
      path: '/PayRoll',
      props:true,
      name: 'PayRoll',
      component: () =>import('../components/PayRoll.vue'),
     
    },
    {
      path: '/RunPayroll',
      props:true,
      name: 'RunPayroll',
      component: () =>import('../components/RunPayroll.vue'),
     
    },
    {
      path: '/subtabs',
      props:true,
      name: 'subtabs',
      component: () =>import('../components/subtabs.vue'),
     
    },
    {
      path: '/subtab',
      props:true,
      name: 'subtab',
      component: () =>import('../components/subtab.vue'),
     
    },
    {
      path: '/AllowancesView',
      props:true,
      name: 'AllowancesView',
      component: () =>import('../components/AllowancesView.vue'),
     
    },
    {
      path: '/PayrollView',
      props:true,
      name: 'PayrollView',
      component: () =>import('../components/PayrollView.vue'),
     
    },
    {
      path: '/Designation',
      props:true,
      name: 'Designation',
      component: () =>import('../components/Designation.vue'),
     
    },
    // {
    //   path: '/Appbar',
    //   props:true,
    //   name: 'Appbar',
    //   component: () =>import('../components/Appbar.vue'),
     
    // },
    {
      path: '/CompanyProfile',
      props:true,
      name: 'CompanyProfile',
      component: () =>import('../components/CompanyProfile.vue'),
    
     
    },
    {
      path: '/OverViewCompany',
      props:true,
      name: 'OverViewCompany',
      component: () =>import('../components/OverViewCompany.vue'),
    
     
    },
    {
      path: '/EmployeeProfile',
      props:true,
      name: 'EmployeeProfile',
      component: () =>import('../components/EmployeeProfile.vue'),
    
     
    },
    // {
    //   path: '/FamilyDetails',
    //   props:true,
    //   name: 'FamilyDetails',
    //   component: () =>import('../components/FamilyDetails.vue'),
    
     
    // },
    // {
    //   path: '/EducationDetails',
    //   props:true,
    //   name: 'EducationDetails',
    //   component: () =>import('../components/EducationDetails.vue'),
    
     
    // },
    {
      path: '/BasicInfo',
      props:true,
      name: 'BasicInfo',
      component: () =>import('../components/BasicInfo.vue'),
    
     
    },
    {
      path: '/PersonalData',
      props:true,
      name: 'PersonalData',
      component: () =>import('../components/PersonalData.vue'),
    
     
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
      path: '/CompanyData',
      props:true,
      name: 'CompanyData',
      component: () =>import('../components/CompanyData.vue'),
     
    },
    // {
    //   path: '/Leave',
    //   props:true,
    //   name: 'Leave',
    //   component: () =>import('../components/Leave.vue'),
     
    // },
    {
      path: '/AdditionalDetails',
      props:true,
      name: 'AdditionalDetails',
      component: () =>import('../components/AdditionalDetails.vue'),
     
    },
    {
      path: '/Tabs.vue',
      props:true,
      name: 'Tabs',
      component: () =>import('../components/Tabs.vue'),
     
    },
    {
      path: '/Tab.vue',
      props:true,
      name: 'Tab',
      component: () =>import('../components/Tab.vue'),
     
    },
    {
      path: '/AppBar',
      props:true,
      name: 'AppBar',
      component: () =>import('../components/AppBar.vue'),
     
    },
    {
      path: '/Calender',
      props:true,
      name: 'Calender',
      component: () =>import('../components/Calender.vue'),
    },
    {
      path: '/Announcement',
      props:true,
      name: 'Announcement',
      component: () =>import('../components/Announcement.vue'),
    }

   
  ]
})
