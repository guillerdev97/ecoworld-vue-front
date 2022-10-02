<script></script>

<template>
  <header
    class="d-flex flex-column justify-content-center align-items-center w-100 sticky-top"
  >
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="d-flex justify-content-center align-items-center">
        <router-link to="/"
          ><h1><span>ECO</span>WORLD</h1></router-link
        >

        <img
          class="align-self-start"
          src="../assets/img/leaf.png"
          alt="tree image"
        />
      </div>

      <p class="align-self-end">retail sales</p>
    </div>

    <nav class="d-flex justify-content-center align-items-center">
      <ul class="d-flex justify-content-around align-items-center">
        <li><router-link to="/about">ABOUT US</router-link></li>
        <li><router-link to="/allproducts">ECO PRODUCTS</router-link></li>
        <li><router-link to="/recipes">ECO RECIPES</router-link></li>
        <li><router-link to="/reach">REACH US</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@import "../assets/base.css";

/* header */
header {
  height: 20vh;
  background-color: var(--white-palette);
}

/* title */
h1 {
  cursor: pointer;
  font-size: 58px;
  letter-spacing: 2px;
  text-shadow: 1px 1px;
}
span {
  color: var(--green-palette);
}
img {
  cursor: pointer;
  width: 50px;
  margin-top: -14px;
  margin-left: -16px;
}
img:hover {
  animation: leftToRight 0.5s ease-in;
}
p {
  margin-top: -13px;
  margin-right: 45px;
  font-size: 16px;
  text-shadow: 1px 1px;
}

/* nav */
nav {
  width: 100%;
  height: 30px;
}
ul {
  width: 53%;
}
li {
  cursor: pointer;
  font-size: 18px;
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
</style>
