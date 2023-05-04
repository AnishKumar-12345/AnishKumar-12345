// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import "../node_modules/vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify({
    iconfont: 'mdi',
    theme:{
      themes: {
          dark: {
            primary: '#E3F2FD',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
            background: '#00a86b'
          },
        },

  }

  }),
  components: { App },
  template: '<App/>'
})
