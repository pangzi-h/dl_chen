import Vue from 'vue'
import App from './App.vue'


import router from './router'


import moment from 'moment'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import Container from "@/components/Container.vue";

Vue.prototype.moment = moment


Vue.use(ElementUI)


Vue.use(VXETable)

Vue.config.productionTip = false
Vue.component('Container', Container)
Vue.component('L', Container)
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
