import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const params = new URLSearchParams(window.location.search)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: params.get('primary') || '#1E88E5',
      },
      dark: {
        primary: params.get('primary') || '#1E88E5',
      },
    },
  },
})
