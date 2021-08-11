<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col cols="12">
        <h1 class="text-h3 font-weight-bold mb-3">
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
        <h1 class="text-h6 mb-3">
          Application
        </h1>
        <p class="subheading font-weight-regular">
          {{ application }}
        </p>
      </v-col>

      <v-col cols="12">
        <h1 class="text-h6 mb-3">
          Data
        </h1>
        <v-btn
          fab
          small
          color="primary"
          class="mb-3"
          @click="fetchData"
        >
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
        <p
          v-if="data"
          class="subheading font-weight-regular"
        >
          {{ data }}
        </p>
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
