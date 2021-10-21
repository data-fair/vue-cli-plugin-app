<template>
  <v-container data-iframe-height>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          contain
          height="150"
        />
      </v-col>

      <v-col cols="12">
        <h1 class="text-h4 font-weight-bold mb-3">
          Welcome to the Data Fair ecosystem
        </h1>

        <p class="subheading font-weight-regular">
          Please read the
          <a
            href="https://koumoul-dev.github.io/data-fair/2/"
            target="_blank"
          >documentation</a>
        </p>
      </v-col>

      <v-col cols="12">
        <h1 class="text-h6">
          Application
        </h1>
        <code class="text-left">
          <pre style="max-height: 300px; overflow-y: scroll;">
  {{ JSON.stringify(application, null, 2) }}
            </pre>
        </code>
      </v-col>

      <v-col cols="12">
        <h1 class="text-h6 mb-3">
          Data
        </h1>
        <v-btn
          fab
          small
          color="primary"
          @click="fetchData"
        >
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
        <code
          v-if="data"
          class="text-left"
        >
          <pre style="max-height: 300px; overflow-y: scroll;">
  {{ JSON.stringify(data, null, 2) }}
            </pre>
        </code>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'HelloWorld',
    data: () => ({}),
    computed: {
      ...mapState(['application', 'data']),
    },
    created () {
      this.$store.dispatch('init')
    },
    methods: {
      ...mapActions(['fetchData']),
    },
  }
</script>
