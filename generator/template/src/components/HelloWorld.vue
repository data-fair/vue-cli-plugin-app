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
          {{ $t('welcome') }}
        </h1>

        <p class="subheading font-weight-regular">
          <i18n path="readDoc">
            <template #link>
              <a
                href="https://koumoul-dev.github.io/data-fair/2/"
                target="_blank"
              >doc</a>
            </template>
          </i18n>
        </p>
      </v-col>

      <v-col cols="12">
        <h1 class="text-h6">
          {{ $t('app') }}
        </h1>

        <pre
          style="max-height: 300px; overflow-y: scroll;"
          class="text-left"
        >
  {{ JSON.stringify(application, null, 2) }}
            </pre>
      </v-col>

      <v-col cols="12">
        <h1 class="text-h6 mb-3">
          {{ $t('data') }}
        </h1>
        <v-btn
          fab
          small
          color="primary"
          @click="fetchData"
        >
          <v-icon>{{ icons.mdiRefresh }}</v-icon>
        </v-btn>
        <pre
          v-if="data"
          style="max-height: 300px; overflow-y: scroll;"
          class="text-left"
        >
  {{ JSON.stringify(data, null, 2) }}
            </pre>
      </v-col>
    </v-row>
  </v-container>
</template>

<i18n lang="yaml">
fr:
  welcome: Bienvenue dans l'écosystème Data Fair
  readDoc: 'Veuillez lire la {doc}'
  app: Application
  data: Données
en:
  welcome: Welcome to the Data Fair ecosystem
  readDoc: 'Please read the {doc}'
  app: Application
  data: Data
</i18n>

<script>
import { mapState, mapActions } from 'vuex'
import { mdiRefresh } from '@mdi/js'

export default {
  name: 'HelloWorld',
  data: () => ({
    icons: { mdiRefresh }
  }),
  computed: {
    ...mapState(['application', 'data'])
  },
  created () {
    this.$store.dispatch('init')
  },
  methods: {
    ...mapActions(['fetchData'])
  }
}
</script>
