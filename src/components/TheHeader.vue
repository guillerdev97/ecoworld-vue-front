<script></script>

<template>
  <header class="d-flex flex-column justify-content-center align-items-center">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="d-flex justify-content-center align-items-center">
        <h1><span>ECO</span>WORLD</h1>

        <img class="align-self-start" src="../assets/img/leaf.png" alt="tree" />
      </div>

      <p class="align-self-end">retail sales</p>
    </div>

    <nav class="d-flex justify-content-center align-items-center">
      <ul class="d-flex justify-content-around align-items-center">
        <li>ABOUT US</li>
        <li>ECO PRODUCTS</li>
        <li>ECO RECIPES</li>
        <li>REACH US</li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@import "../assets/base.css";

header {
  width: 100%;
  height: 175px;
  background-color: var(--white-palette);
}
h1 {
  cursor: pointer;
  font-size: 60px;
  letter-spacing: 2px;
  text-shadow: 1px 1px;
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
  margin-top: -17px;
  margin-right: 50px;
  font-size: 16px;
  text-shadow: 1px 1px;
}

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

@keyframes leftToRight {
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
