<script></script>

<template>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div id="corporationItem" class="carousel-item active">
        <div class="d-block w-100"></div>
        <div class="carousel-caption d-none d-md-block">
          <h1>We are EcoAstur</h1>
          <p>the new corporation that promotes the organic food</p>
        </div>
      </div>

      <div
        id="motivationItem"
        class="carousel-item d-flex justify-content-center align-items-center"
      >
        <div class="w-100"></div>
        <div class="carousel-caption d-none d-md-block">
          <h1>We have the power<br />to show the future</h1>
        </div>
      </div>

      <div id="productItem" class="carousel-item">
        <div class="w-100"></div>
        <div class="carousel-caption d-none d-md-block">
          <h1>Organic asturian walnuts</h1>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleControls"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleControls"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<style scoped>
@import "../assets/base.css";
#carouselExampleControls {
  width: 100%;
  height: 300px;
  border: 1px solid black;
}
.carousel-item {
  /*  width: 100%; */
  height: 300px;
  padding: 20px;
  border: 1px solid black;
}
#corporationItem > div {
  background-color: rgb(25, 162, 25);
}
#motivationItem > div {
  background-color: orange;
}
#productItem > div {
  background-color: #a83e55;
}
</style>
