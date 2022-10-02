<script></script>

<template>
  <footer class="d-flex flex-column justify-content-center align-items-center">
    <div id="greenBox" class="d-flex justify-content-around align-items-center">
      <div class="smallItems">
        <p class="fs-5 fw-bold">Empresa</p>

        <div id="square">
          <p class="fs-2 fw-bold">ECO</p>
        </div>

        <p class="fs-5 fw-bold">certificada</p>
      </div>

      <img src="../assets/img/heart.png" alt="heart" />

      <div class="smallItems">
        <p class="fs-5 fw-bold">Calidad certificada</p>

        <div id="bio" class="fs-2 fw-bold">BIO</div>
      </div>
    </div>

    <div
      id="whiteBox"
      class="d-flex justify-content-between align-items-center"
    >
      <p>
        MY OTHER WORKS
        <a href="https://github.com/guillerdev97">guillerdev97</a>
      </p>

      <p><span>#</span>YOURBODY<span>YOURMIND</span></p>
    </div>
  </footer>
</template>

<style scoped>
@import "../assets/base.css";
/*  */
footer {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 300px;
}
/*  */
#greenBox {
  width: 100%;
  height: 225px;
  padding: 0 40px;
  background-color: var(--lightgreen-palette);
  box-shadow: 0 0 10px rgba(130, 130, 130, 0.775) inset;
}
.smallItems {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 150px;
  color: var(--white-palette);
}
#square {
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 1px 1px black;
}
#bio {
  text-shadow: 1px 1px black;
}
/*  */
img {
  width: 10%;
}
/*  */
#whiteBox {
  width: 100%;
  height: 75px;
  padding: 0 20px;
  background-color: var(--white-palette);
}
#whiteBox p {
  margin-top: 10px;
  font-size: 16px;
  text-shadow: 1px 1px rgb(193, 193, 193);
}
#whiteBox span {
  color: var(--green-palette);
}
a {
  margin-left: 5px;
  color: var(--green-palette);
  text-decoration: none;
}
</style>
