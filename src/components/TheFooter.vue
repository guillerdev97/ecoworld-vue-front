<script></script>

<template>
  <footer class="d-flex justify-content-center align-items-center w-100">
    <img src="../assets/img/heart.png" alt="heart" />
  </footer>
</template>

<style scoped>
@import "../assets/base.css";

/* footer */
footer {
  position: relative;
  bottom: 0;
  height: 22vh;
  background-color: var(--lightgreen-palette);
  box-shadow: 0 0 10px rgba(130, 130, 130, 0.775) inset;
}

/* image */
img {
  width: 8%;
}

@media (max-width: 1000px) {
  footer {
    height: 21vh;
  }
  img {
    width: 10%;
  }
}
@media (max-width: 800px) {
  footer {
    height: 21vh;
  }
  img {
    width: 13%;
  }
}
@media (max-width: 650px) {
  footer {
    height: 21vh;
  }
  img {
    width: 16%;
  }
}
@media (max-width: 500px) {
  footer {
    height: 21vh;
  }
  img {
    width: 18%;
  }
}
</style>
