<template>
  <b-container fluid="sm">
    <SearchPage />
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import SearchPage from "@/components/restaurant/SearchPage.vue";

export default Vue.extend({
  name: "IndexPage",
  components: {
    SearchPage,
  },
});
</script>
