<template>
  <v-app>
    <v-main v-if="application">
      <hello-world v-if="!configureError" />
      <v-container v-else-if="params('draft') === 'true'">
        <v-col class="text-center">
          <v-alert
            :value="true"
            type="warning"
            outlined
          >
            <h3>{{ configureError }}</h3>
          </v-alert>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld,
    },
    data: () => ({}),
    computed: {
      ...mapState(['application']),
      ...mapGetters(['dataset', 'config']),
      configureError () {
        if (!this.dataset) return 'Veuillez sélectionner une source de données'
        return null
      },
    },
    mounted () {
      if (this.configureError) return
      this.$store.dispatch('init')
    },
    methods: {
      params (p) {
        const params = new URLSearchParams(window.location.search)
        return params.get(p)
      },
    },
  }
</script>

<style>
.v-application {
  font-family: "Nunito", sans-serif!important;
}
</style>
