<template>
  <article>
    <header class="tabs">
      <ul>
        <li v-for="(tab, index) in tabs" :key="index">
          <div class="nav-item"
              :class="{ 'is-active': tab.isActive }"
              @click="selectTab(tab)">
            {{ tab.name }}
          </div>
        </li>
      </ul>
    </header>
    <section class="tabs-details">
      <slot></slot>
    </section>
  </article>
</template>

<script>
  export default {
    data: () => {
      return {
        tabs: []
      }
    },
    methods: {
      selectTab(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = tab.name === selectedTab.name;
        });
      }
    },
    created() {
      this.tabs = this.$children;
    }
  }
</script>

<style scoped>
.tabs {
	 margin: 0 0px;

}
 .tabs-details {
	 padding: 10px;
}
 ul {
	 display: flex;
	 /* padding: 8px; */
     padding-top:10px;
	 list-style: none;
    /* background-color:#e2e2e2; */
    border-bottom:2px solid rgb(47, 18, 150) ;
     color:  #000;

}
 ul li {
   margin:0 5px

}
li:nth-child(1){
         margin-left: 40px;

}
 ul .nav-item {
	 cursor: pointer;
         padding: 10px 25px;

}
 ul .nav-item:hover {
	 color: white;
     padding: 10px 25px;
     background-color: #2094FF;
     
}
 ul .nav-item.is-active {
	 color: white;
    background-color: #2094FF;
    
     padding: 10px 25px;
     
}

</style>