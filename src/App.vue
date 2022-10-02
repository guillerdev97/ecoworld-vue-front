<script>
import { RouterView } from "vue-router";
import TheHeader from "./components/header/TheHeader.vue";
import TheHeaderCreate from "./components/header/TheHeaderCreate.vue";
import TheFooter from "./components/footer/TheFooter.vue";
import TheFooterCreate from "./components/footer/TheFooterCreate.vue";

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
