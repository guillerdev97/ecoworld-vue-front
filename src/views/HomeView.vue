<script>
import TheHeader from "../components/TheHeader.vue";
import TheCarousel from "../components/TheCarousel.vue";
import TheFooter from "../components/TheFooter.vue";
export default {
  name: "HomeView",
  components: { TheHeader, TheCarousel, TheFooter },
};
</script>

<template>
  <TheHeader />

  <TheCarousel />

  <section
    id="corporation"
    class="d-flex justify-content-around align-items-center"
  >
    <div id="text" class="d-flex flex-column justify-content-center">
      <h1>We are <span id="green">EcoAstur</span></h1>

      <h1>We are <span id="textBorder">innovation</span></h1>

      <p class="text-justify">
        We are committed to the <strong>environment.</strong> This corporation
        of small businesses was born with the purpose of generating a
        <strong>positive impact</strong> at the environmental and promoting the
        consumption of <strong>real food.</strong>
      </p>
    </div>

    <div id="img" class="d-flex justify-content-center align-items-center">
      <img src="../assets/img/apple.jpeg" alt="apple" />
    </div>
  </section>

  <TheFooter />
</template>

<style scoped>
@import "../assets/base.css";

#corporation {
  width: 100%;
  height: 350px;
  padding: 20px 40px;
}

#text {
  width: 40%;
  margin-left: 15px;
}
#green {
  color: var(--green-palette);
}
#textBorder {
  color: var(--white-palette);
  text-shadow: 3px 3px black;
}
p {
  margin-top: 10px;
  margin-left: 5px;
}

#img {
  width: 40%;
}
img {
  width: 70%;
  height: 280px;
  border-radius: 5px;
}
</style>
