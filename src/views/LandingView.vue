<script></script>

<template>
  <main class="d-flex justify-content-center align-items-center">
    <div class="d-flex justify-content-center align-items-center">
      <span>ECO</span>
    </div>
  </main>
</template>

<style scoped>
@import "../assets/base.css";

main {
  width: 100vw;
  max-height: 100vh;
}
div {
  width: 20%;
  height: 35vh;
  border: 2vw solid rgb(213, 165, 55);
  border-radius: 100%;
  animation-name: move;
  animation-duration: 1.7s;
  animation-iteration-count: infinite;
}
span {
  font-size: 60px;
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
