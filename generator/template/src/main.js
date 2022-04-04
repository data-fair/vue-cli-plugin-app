import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueI18n from 'vue-i18n'
import vuetify from './plugins/vuetify'
<% if (iframeResizer) { %>
// remove this if the application should not resize
// but instead adapt to its original given space
require('iframe-resizer/js/iframeResizer.contentWindow')
window.iFrameResizer = { heightCalculationMethod: 'taggedElement' }
<% } %>
const cookieLocale = document.cookie.split(';')
  .map(c => c.trim().split('='))
  .find(c => c[0] === 'i18n_lang')
const locale = cookieLocale ? cookieLocale[1] : '<%= locale %>'

Vue.use(VueI18n)
const i18n = new VueI18n({ locale })

Vue.config.productionTip = false

new Vue({
  store,
  vuetify: vuetify(locale),
  i18n,
  render: h => h(App)
}).$mount('#app')