import { createApp } from 'vue'
/*import * as Vue from 'vue'*/
import App from './App.vue'
/*import router from './router'*/
import store from './store'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
/*import { BTable } from 'bootstrap-vue'*/

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

///*Vue.component('b-table', BTable)*/
//Vue.use(BootstrapVue)
//// Optionally install the BootstrapVue icon components plugin
//Vue.use(IconsPlugin)

createApp(App).use(store).mount('#app')

//new Vue({
//    render: h => h(App),
//}).use(store).$mount('#app')
