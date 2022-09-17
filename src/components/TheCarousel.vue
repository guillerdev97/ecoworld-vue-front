<script></script>

<template>
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
</template>

<style scoped>
@import "../assets/base.css";
/*  */
#carouselExampleControls {
  width: 100%;
  height: 300px;
  color: white;
}
.carousel-item {
  height: 300px;
  padding: 25px 90px;
  box-shadow: 0 0 10px rgba(130, 130, 130, 0.775) inset;
}
.flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
/*  */
#corporation {
  background-color: var(--lightgreen-palette);
}
#corporation img {
  margin-top: 15px;
  width: 15%;
  border-radius: 10px;
}
#corporation h1 {
  font-size: 45px;
  text-shadow: 1px 1px;
}
#corporation span {
  color: var(--green-palette);
}
#corporation p {
  margin-left: 5px;
  font-size: 22px;
}
/*  */
#motivation {
  background-color: rgb(246, 173, 17);
}
#motivation img {
  width: 12%;
  margin-top: 20px;
  border-radius: 10px;
}
#motivation h1 {
  margin-top: 40px;
  font-size: 45px;
  text-shadow: 1px 1px;
}
#motivation span {
  color: var(--orange-palette);
}
#motivation p {
  margin-left: 7px;
  font-size: 22px;
}
/*  */
#product {
  background-color: #a83e55;
}
#product img {
  width: 15%;
  margin-top: 28px;
  border-radius: 10px;
}
#product h1 {
  margin-top: 50px;
  font-size: 45px;
  text-shadow: 1px 1px;
}
#product span {
  color: var(--pink-palette);
}
#product p {
  font-size: 22px;
}
</style>
