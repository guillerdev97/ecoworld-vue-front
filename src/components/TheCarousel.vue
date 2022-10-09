<script></script>

<template>
  <router-link to="/allproducts">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          id="corporation"
          class="carousel-item active"
          data-bs-interval="3000"
        >
          <div class="flex">
            <img src="../assets/img/planta.png" alt="plant" />

            <div>
              <h1>We are <span>EcoAstur</span></h1>
              <p>the new corporation that promotes the organic food</p>
            </div>
          </div>
        </div>
        <div id="motivation" class="carousel-item" data-bs-interval="3000">
          <div class="flex">
            <img src="../assets/img/vegetales.png" alt="vegetables" />

            <div>
              <h1>You have <span>the power</span></h1>
              <p>to show the future</p>
            </div>
          </div>
        </div>
        <div id="product" class="carousel-item" data-bs-interval="3000">
          <div class="flex">
            <img src="../assets/img/nueces.png" alt="nuts" />

            <div>
              <h1>Asturian <span>organic walnuts</span></h1>
              <p>taste the green world</p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </router-link>
</template>

<style scoped>
@import "../assets/base.css";

/* carousel */
#carouselExampleControls {
  width: 100vw;
  height: 40vh;
  color: white;
}
.carousel-item {
  height: 40vh;
  padding: 5vh 10vw;
  box-shadow: 0 0 10px rgba(130, 130, 130, 0.775) inset;
}
.flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5vh;
}

/* green item */
#corporation {
  background-color: var(--lightgreen-palette);
}
#corporation img {
  margin-top: 2.5vh;
  width: 15%;
  border-radius: 10px;
}
#corporation h1 {
  margin-top: 2.5vh;
  font-size: 3vw;
}
#corporation span {
  color: var(--green-palette);
}
#corporation p {
  margin-left: 0.5vw;
  font-size: 1.5vw;
}

/* orange item */
#motivation {
  background-color: rgb(246, 173, 17);
}
#motivation img {
  width: 12%;
  margin-top: 2.5vh;
  border-radius: 10px;
}
#motivation h1 {
  margin-top: 2.5vh;
  font-size: 3vw;
}
#motivation span {
  color: var(--orange-palette);
}
#motivation p {
  margin-left: 0.6vw;
  font-size: 1.5vw;
}

/* red item */
#product {
  background-color: #a83e55;
}
#product img {
  width: 15%;
  margin-top: 2.5vh;
  border-radius: 10px;
}
#product h1 {
  margin-top: 2.5vh;
  font-size: 3vw;
}
#product span {
  color: var(--pink-palette);
}
#product p {
  font-size: 1.5vw;
}

/* media queries 1000 800 650 500px */
@media (max-width: 1000px) {
  #carouselExampleControls {
    height: 33vh;
  }
  .carousel-item {
    height: 33vh;
  }
  h1 {
    font-size: 4vw !important;
  }
  p {
    font-size: 2vw !important;
  }
}
@media (max-width: 800px) {
  #carouselExampleControls {
    height: 28vh;
  }
  .carousel-item {
    height: 28vh;
  }
  h1 {
    font-size: 4vw !important;
  }
  p {
    font-size: 2vw !important;
  }
}

@media (max-width: 650px) {
  #carouselExampleControls {
    height: 28vh;
  }
  .carousel-item {
    height: 28vh;
  }
  h1 {
    font-size: 4vw !important;
  }
  p {
    font-size: 2vw !important;
  }
}
@media (max-width: 500px) {
  #carouselExampleControls {
    height: 24vh;
  }
  .carousel-item {
    height: 24vh;
  }
  img {
    margin-top: 1vh;
  }
  h1 {
    margin-top: 1vh;
    font-size: 5vw !important;
  }
  p {
    font-size: 3vw !important;
  }
  button {
    display: none;
  }
}
</style>
