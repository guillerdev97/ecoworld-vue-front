<script>
export default {
  name: "LandingVIew",
  methods: {
    load() {
      setTimeout(this.toLocation, 2000);
    },
    toLocation() {
      this.$router.push("/home");
    },
  },
  created() {
    this.load();
  },
};
</script>

<template>
  <main class="d-flex justify-content-center align-items-center">
    <div class="d-flex justify-content-center align-items-center">
      <span>ECO WORLD</span>
    </div>
  </main>
</template>

<style scoped>
@import "../assets/base.css";

main {
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(242, 240, 234);
}
div {
  width: 20%;
  height: 35vh;
  border: 2vw solid rgb(213, 165, 55);
  border-radius: 100%;
  animation-name: move;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
span {
  font-size: 35px;
  font-weight: bold;
  color: var(--green-palette);
}
@keyframes move {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
}
</style>
