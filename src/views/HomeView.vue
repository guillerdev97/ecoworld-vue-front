<script>
import TheHeader from "../components/TheHeader.vue";
import TheCarousel from "../components/TheCarousel.vue";
export default {
  name: "HomeView",
  components: { TheHeader, TheCarousel },
};
</script>

<template>
  <TheHeader />

  <TheCarousel />
</template>

<style scoped></style>
