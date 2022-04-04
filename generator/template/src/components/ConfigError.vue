<template>
  <v-container data-iframe-height>
    <v-col class="text-center">
      <v-alert
        :value="true"
        type="warning"
        outlined
      >
        <h3>{{ value }}</h3>
      </v-alert>
    </v-col>
  </v-container>
</template>

<script>
export default {
  props: {
    value: { type: String, required: true }
  }
}
</script>

<style>

</style>
