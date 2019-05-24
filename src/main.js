// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MyPortfolio from './MyPortfolio'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Snowf from 'vue-snowf'

import VueApexCharts from 'vue-apexcharts'

import axios from 'axios'
import '@/styles/main.css'

Vue.use(BootstrapVue)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#snowf',
  data: {
    'info': '0'
  },
  components: {
    Snowf
  },
  created: function () {
    axios.get('https://www.tama-kodak.com/multi-origin-behavior/portfolio_data.json')
      .then(res => {
        this.info = res.data.info
      })
  },
  template:
    `<div id="snowfStyle" >
      <Snowf v-if="info === '0'"
      :amount="50" 
      :size="5" 
      :speed="1.5" 
      :wind="0" 
      :opacity="0.8" 
      :swing="1" 
      :image="null" 
      :zIndex="0"
      :resize="true" 
      color="#fff"
      style="position:fixed; top:0; left:0; margin:0; width:100%; height:100%;" />
      <Snowf v-else
      :amount="50" 
      :size="10" 
      :speed="1.5" 
      :wind="0" 
      :opacity="0.8" 
      :swing="1" 
      :image="null" 
      :zIndex="0" 
      :resize="true"
      color="#FF99CC"
      style="position:fixed; top:0; left:0; margin:0; width:100%; height:100%;" />
    </div>`
})

new Vue({
  el: '#myportfolio',
  router,
  components: { MyPortfolio },
  template: '<MyPortfolio/>'
})
