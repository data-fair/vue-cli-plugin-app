import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import fr from 'vuetify/lib/locale/fr'
import en from 'vuetify/lib/locale/en'

Vue.use(Vuetify)

const params = new URLSearchParams(window.location.search)

export default (locale) => {
  return new Vuetify({
    theme: {
      themes: {
        light: {
          primary: params.get('primary') || '#1E88E5'
        },
        dark: {
          primary: params.get('primary') || '#1E88E5'
        }
      }
    },
    lang: {
      locales: { fr, en },
      current: locale
    }
  })
}
