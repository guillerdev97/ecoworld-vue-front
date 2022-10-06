<script></script>

<template>
  <!-- card -->
  <div class="card">
    <img
      src="../assets/img/tomate.jpg"
      class="card-img-top h-50"
      alt="product image"
    />

    <!-- card body -->
    <div
      class="card-body h-50 d-flex flex-column justify-content-around align-items-start"
    >
      <h5 class="card-title fs-4 fw-bold">Red tomatoes</h5>

      <p class="card-text">Fruits and vegetables</p>

      <p class="card-text">3.5€</p>

      <div class="d-flex justify-content-center align-items-center w-100 mt-2">
        <button type="button" class="btn">Buy</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/base.css";

/* card done */
.card {
  width: 15vw;
  height: 38vh;
  border: 0.1vw solid #c8a65cd1;
}
.card:hover {
  box-shadow: 0 0 0.5vw #c8a65cd1;
}

/* card body done */
.card-body {
  background-color: var(--brown-palette);
}
.card-title {
  text-transform: capitalize;
  letter-spacing: 1px;
  color: white;
}
.card-text {
  font-size: 1vw;
  text-transform: capitalize;
  color: white;
  margin-left: 0.6vw;
}
.btn {
  padding: 0.3vh 0.6vw;
  font-size: 1vw;
  background-color: #c4af78;
  border: 0.1vw solid white;
  color: white;
  transition: all 0.2s ease-in;
}
.btn:hover {
  cursor: pointer;
  color: white;
  background-color: #c3a24f;
}
a:hover {
  cursor: pointer;
  font-size: 1.2vw;
}

/* media queries 1000 800 650 500px */
@media (max-width: 1000px) {
  .card {
    width: 18vw;
    height: 34vh;
  }
}
@media (max-width: 800px) {
  .card {
    width: 20vw;
    height: 30vh;
  }
  .card-title {
    font-size: 2.3vw !important;
  }
  .card-text {
    font-size: 1.3vw;
  }
  .btn {
    font-size: 1.3vw;
  }
}

@media (max-width: 650px) {
  .card {
    width: 23vw;
    height: 27vh;
  }
  .card-title {
    font-size: 2.5vw !important;
  }
  .card-text {
    font-size: 1.5vw;
  }
  .btn {
    font-size: 1.5vw;
  }
}
@media (max-width: 650px) {
  .card {
    width: 31vw;
    height: 23vh;
  }
  .card-title {
    font-size: 3vw !important;
  }
  .card-text {
    font-size: 2vw;
  }
  .btn {
    font-size: 2vw;
  }
}
</style>
