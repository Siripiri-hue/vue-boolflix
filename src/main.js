import Vue from 'vue'
import App from './App.vue'
import CountryFlag from 'vue-country-flag'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fasStar, farStar)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('country-flag', CountryFlag)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')




