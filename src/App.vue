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
  <TheHeader
    v-if="this.$route.path != '/create' && this.$route.path != '/edit'"
  />
  <TheHeaderCreate
    v-if="this.$route.path === '/create' || this.$route.path === '/edit'"
  />

  <RouterView />

  <TheFooter
    v-if="this.$route.path != '/create' && this.$route.path != '/edit'"
  />
  <TheFooterCreate
    v-if="this.$route.path === '/create' || this.$route.path === '/edit'"
  />
</template>

<style></style>
