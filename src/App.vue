<template>
  <div id="app">
  <v-app>

    <router-view/>
    
   </v-app>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /* font-family: 'Avenir', serif; */
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.v-overlay__scrim {

    opacity: 0 !important;
}
.sampletable.v-data-table>.v-data-table__wrapper>table>tbody>tr>td, .v-data-table>.v-data-table__wrapper>table>tfoot>tr>td, .v-data-table>.v-data-table__wrapper>table>thead>tr>td {
    font-size: .875rem;
    height: 30px;
}
.tabledata.v-data-table>.v-data-table__wrapper>table {
    width: 60%;
    border-spacing: 0;
}
.v-data-table>.v-data-table__wrapper>table {
    width: 100%;
    /* border-spacing: 0; */
    color: black;
}
.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th {
    color: rgb(255, 255, 255);
    background: #19284f;
    border-bottom: thin solid rgba(0,0,0,.12);
    border-right: thin solid rgba(0,0,0,.12);
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th:hover{
    color:#dcbb04;
    border-bottom: thin solid rgba(0,0,0,.12);
    border-right: thin solid rgba(0,0,0,.12);
}
.mdi-arrow-up{
  color: white !important;
}
.mdi-chevron-down{
  color: white !important;
}
.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr>td {
    color:black;
    border-bottom: thin solid rgba(0,0,0,.12);
    border-right: thin solid rgba(0,0,0,.12);
}
.v-data-table>.v-data-table__wrapper>table>thead>tr>th {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 0.90rem;
    height: 42px;
    /* background-color: #3468C0; */
    /* color:#a8a8c5; */
}
.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th {
  width: 50px !important;
  font-weight: 400!important;
  font-size: 13px;
}
.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr>td {
  width: 50px;
}

 /* table.v-table tbody td {
    font-size: 3px;
} */
/* .theme--light.v-data-table tbody tr:nth-of-type(even) {
    background-color:#f0f2f5
}
.theme--dark.v-data-table tbody tr:nth-of-type(even) {
    background-color: rgba(0, 0, 0, .5);
} */
.v-data-table-header th {
  white-space: nowrap;
}
.v-data-table  tbody td {
  white-space: nowrap;
}
.theme--light.v-data-table tbody tr:nth-of-type(even) {
    background-color:#e2efda;
}
.theme--dark.v-data-table tbody tr:nth-of-type(even) {
    background-color: rgba(0, 0, 0, .5);
}
/* .theme--light.v-data-table .v-data-table-header th.sortable.active, .theme--light.v-data-table .v-data-table-header th.sortable.active .v-data-table-header__icon, .theme--light.v-data-table .v-data-table-header th.sortable:hover {

    color: red !important;
} */
</style>
