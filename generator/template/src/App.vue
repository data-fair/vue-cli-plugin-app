<template>
  <v-app>
    <v-main v-if="application">
      <hello-world v-if="!configureError" />
      <config-error
        v-else-if="params('draft') === 'true'"
        :value="configureError"
      />
    </v-main>
  </v-app>
</template>

<i18n lang="yaml">
fr:
  missingDataset: Veuillez sélectionner une source de données
en:
  missingDataset: Please select a data source
</i18n>

<script>
import { mapState, mapGetters } from 'vuex'
import HelloWorld from './components/HelloWorld.vue'
const ConfigError = () => import('./components/ConfigError.vue')

export default {
  name: 'App',
  components: {
    HelloWorld,
    ConfigError
  },
  data: () => ({}),
  computed: {
    ...mapState(['application']),
    ...mapGetters(['dataset', 'config']),
    configureError () {
      if (!this.dataset) return this.$t('missingDataset')
      return null
    }
  },
  mounted () {
    if (this.configureError) return
    this.$store.dispatch('init')
  },
  methods: {
    params (p) {
      const params = new URLSearchParams(window.location.search)
      return params.get(p)
    }
  }
}
</script>

<style lang="scss">

</style>
