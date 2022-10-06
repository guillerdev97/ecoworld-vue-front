<script></script>

<template>
  <header
    class="d-flex flex-column justify-content-center align-items-center sticky-top"
  >
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="d-flex justify-content-center align-items-center">
        <router-link to="/"
          ><h1><span>ECO</span>WORLD</h1></router-link
        >

        <img class="align-self-start" src="../assets/img/leaf.png" alt="tree" />
      </div>

      <p class="align-self-end">retail sales</p>
    </div>

    <nav class="d-flex justify-content-center align-items-center">
      <ul class="d-flex justify-content-around align-items-center">
        <li><router-link to="/about">ABOUT US</router-link></li>
        <li><router-link to="/allproducts">ECO PRODUCTS</router-link></li>
        <li id="buy"><router-link to="/cart">🛒</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@import "../assets/base.css";

/* header */
header {
  width: 100vw;
  height: 25vh;
  background-color: var(--white-palette);
}

/* title */
h1 {
  cursor: pointer;
  font-size: 4.5vw;
  letter-spacing: 0.3vw;
  text-shadow: 0.1vw 0.1vw;
}
span {
  color: var(--green-palette);
}
img {
  cursor: pointer;
  width: 4.5vw;
  height: 8vh;
  margin-top: -2.2vh;
  margin-left: -1.7vh;
}
img:hover {
  animation: leftToRight 0.5s ease-in;
}
p {
  margin-top: -1.7vh;
  margin-right: 4.3vw;
  font-size: 1vw;
  text-shadow: 0.1vw 0;
}

/* nav */
nav {
  width: 100vw;
  height: 6vh;
  margin-top: 2vh;
  border: 1px solid black;
}
ul {
  width: 55vw;
}
li {
  cursor: pointer;
  font-size: 1.3vw;
  font-weight: bold;
  list-style-type: none;
  transition: all 0.3s ease;
}
li:hover {
  color: var(--green-palette);
}

/* img animation */
@keyframes leftToRight {
  100% {
    transform: rotateZ(360deg);
  }
}

@media (max-width: 1000px) {
  header {
    height: 21vh;
  }
  h1 {
    font-size: 5vw;
  }
  img {
    cursor: pointer;
    width: 5vw;
    height: 8vh;
    margin-top: -2.2vh;
    margin-left: 0.1vw;
  }
  p {
    margin-top: -1vh;

    font-size: 1.5vw;
  }
  nav {
    margin-top: 1.5vh;
  }
  ul {
    width: 55vw;
  }
  li {
    font-size: 2vw;
  }
}
@media (max-width: 800px) {
  header {
    height: 21vh;
  }
  h1 {
    font-size: 5vw;
  }
  img {
    cursor: pointer;
    width: 5vw;
    height: 8vh;
    margin-top: -2.2vh;
    margin-left: 0.1vw;
  }
  p {
    margin-top: -0.5vh;

    font-size: 1.8vw;
  }
  nav {
    height: 5.5vh;
    margin-top: 1vh;
  }
  ul {
    width: 60vw;
  }
  li {
    font-size: 2.2vw;
  }
}
@media (max-width: 650px) {
  header {
    height: 18vh;
  }
  h1 {
    font-size: 6.3vw;
  }
  img {
    cursor: pointer;
    width: 6.2vw;
    height: 8vh;
    margin-top: -2.2vh;
    margin-left: 0.1vw;
  }
  p {
    margin-top: -1vh;

    font-size: 1.8vw;
  }
  nav {
    height: 5vh;
    margin-top: 1.3vh;
  }
  ul {
    width: 75vw;
  }
  li {
    font-size: 2.8vw;
  }
}
@media (max-width: 500px) {
  header {
    height: 15vh;
  }
  h1 {
    font-size: 7.8vw;
  }
  img {
    cursor: pointer;
    width: 7vw;
    height: 6vh;
    margin-top: -1.5vh;
    margin-left: -0.5vw;
  }
  p {
    margin-top: -1vh;

    font-size: 2vw;
  }
  nav {
    height: 4vh;
    margin-top: 1.3vh;
  }
  ul {
    width: 80vw;
  }
  li {
    font-size: 3.3vw;
  }
}
</style>
