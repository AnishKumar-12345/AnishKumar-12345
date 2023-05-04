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
	 margin: 60 10px;
   position: sticky; top: 64px; z-index: 9;left:0

}
 .tabs-details {
	 padding: 10px;
}
 ul {
	 display: flex;
	 padding:   0px;
	 list-style: none;
  background-color:#283655;
  color: white;

}
 ul li {
   margin:10px 5px;
   font-size:18px;
padding: 5px 10px;
}
li:nth-child(1){
         margin-left: 400px;

}
 ul .nav-item {
	 cursor: pointer;
  padding: 5px 10px;

}
 ul .nav-item:hover {
	 color: black;
   background-color:#e1f8fe;
   border-radius: 10px;
    padding: 5px 10px;
}
 ul .nav-item.is-active {
	 color: black;
     background-color:#e1f8fe;
     border-radius: 10px;
     padding: 5px 10px;
     
}

</style>