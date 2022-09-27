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
        <li><router-link to="/recipes">ECO RECIPES</router-link></li>
        <li><router-link to="/reach">REACH US</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@import "../assets/base.css";
/*  */
header {
  width: 100%;
  height: 175px;
  background-color: var(--white-palette);
}
/*  */
h1 {
  cursor: pointer;
  font-size: 60px;
  letter-spacing: 2px;
  text-shadow: 1px 1px;
}
h1:hover {
  color: black;
}
span {
  color: var(--green-palette);
}
img {
  cursor: pointer;
  width: 60px;
  height: 60px;
  margin-top: -17px;
  margin-left: -17px;
}
img:hover {
  animation: leftToRight 0.5s ease-in;
}
p {
  margin-top: -15px;
  margin-right: 50px;
  font-size: 16px;
  text-shadow: 1px 1px;
}
/*  */
nav {
  width: 100%;
  height: 40px;
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
/*  */
.dropdownContent {
  display: none;
  transform-origin: top bottom;
  transition: all 0.5s ease;
}
.dropdown:hover .dropdownContent {
  display: block;
  position: absolute;
  width: 100%;
  background-color: var(--beige-palette);
  z-index: 9;
}
@keyframes leftToRight {
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
