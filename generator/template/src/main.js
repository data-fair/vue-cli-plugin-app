import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
<% if (iframeResizer) { %>
// remove this if the application should not resize
// but instead adapt to its original given space
require('iframe-resizer/js/iframeResizer.contentWindow')
window.iFrameResizer = {
  heightCalculationMethod: 'taggedElement',
}
<% } %>
Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
