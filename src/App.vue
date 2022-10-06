<script>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";

import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    RouterView,
    TheHeader,

    TheFooter,
  },
};
</script>

<template>
  <TheHeader
    v-if="
      this.$route.path != '/create' &&
      this.$route.path != '/edit' &&
      this.$route.path != '/'
    "
  />

  <RouterView />

  <TheFooter
    v-if="
      this.$route.path != '/create' &&
      this.$route.path != '/edit' &&
      this.$route.path != '/'
    "
  />
</template>

<style></style>
