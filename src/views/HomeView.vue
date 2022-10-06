<script>
import TheCarousel from "../components/TheCarousel.vue";
import TheCardRelease from "../components/TheCardRelease.vue";

export default {
  name: "HomeView",

  components: { TheCarousel, TheCardRelease },
};
</script>

<template>
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

  <section
    id="release"
    class="d-flex justify-content-center align-items-center"
  >
    <div id="card">
      <TheCardRelease />
    </div>

    <h1>NEW RELEASE<br /><br /><span class="brown">OF THE MONTH</span></h1>
  </section>
</template>

<style scoped>
@import "../assets/base.css";

/* corporation */
#corporation {
  width: 100vw;
  height: 55vh;
  padding: 2vh 3vw;
}
h1 {
  font-size: 2.6vw;
}
#text {
  width: 40vw;
  margin-left: 0.2vw;
}
#green {
  color: var(--green-palette);
}
#textBorder {
  color: var(--white-palette);
  text-shadow: 0.2vw 0.2vw black;
}
p {
  font-size: 1.3vw;
  margin-top: 1.2vh;
  margin-left: 0.3vw;
}
img {
  width: 23vw;
  height: 37vh;
  border-radius: 5px;
}

/* product release */
#release {
  width: 100vw;
  height: 58vh;
  background-color: var(--beige-palette);
}
#release #card {
  width: 40%;
}
#release h1 {
  font-size: 3vw;
  color: rgb(145, 104, 51);
}
#release .brown {
  margin-left: -0.9vw;
}

/* media queries 1000 800 650 500px */
@media (max-width: 1000px) {
  #text {
    width: 50vw;
  }
  h1 {
    font-size: 3vw;
  }
  p {
    font-size: 1.8vw;
  }
  img {
    width: 27vw;
    height: 35vh;
  }
}
@media (max-width: 800px) {
  #corporation {
    height: 48vh;
  }
  #text {
    width: 54vw;
  }
  h1 {
    font-size: 3.2vw;
  }
  p {
    font-size: 1.9vw;
  }
  img {
    width: 27vw;
    height: 30vh;
    border-radius: 5px;
  }
}
@media (max-width: 650px) {
  #corporation {
    height: 45vh;
  }
  #text {
    width: 45vw;
    margin-left: 1.2vw;
  }
  h1 {
    font-size: 5.2vw;
  }
  p {
    display: none;
  }
  img {
    width: 27vw;
    height: 25vh;
    border-radius: 5px;
  }
}
@media (max-width: 500px) {
  #corporation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40vh;
  }
  #text {
    width: 48vw;
  }
  h1 {
    text-align: center;
    font-size: 5.5vw;
  }
  p {
    display: none;
  }
  img {
    width: 32vw;
    height: 21vh;
    border-radius: 5px;
  }
}
</style>
