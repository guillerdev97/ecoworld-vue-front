<script>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheHeaderCreate from "./components/TheHeaderCreate.vue";
import TheFooter from "./components/TheFooter.vue";
import TheFooterCreate from "./components/TheFooterCreate.vue";

export default {
  name: "App",
  components: {
    RouterView,
    TheHeader,
    TheHeaderCreate,
    TheFooter,
    TheFooterCreate,
  },
};
</script>

<template>
  <TheHeader v-if="this.$route.path != '/create'" />
  <TheHeaderCreate v-if="this.$route.path === '/create'" />

  <RouterView />

  <TheFooter v-if="this.$route.path != '/create'" />
  <TheFooterCreate v-if="this.$route.path === '/create'" />
</template>

<style></style>
