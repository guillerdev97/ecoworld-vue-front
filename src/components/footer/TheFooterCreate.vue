<script></script>

<template>
  <footer
    class="d-flex flex-column justify-content-center align-items-center w-100"
  >
    <div class="d-flex justify-content-around align-items-center w-100">
      <div class="footerDivs">
        <p class="fs-5 fw-bold text">Empresa</p>

        <p id="ecoText" class="fs-2 fw-bold">ECO</p>

        <p class="fs-5 fw-bold text">certificada</p>
      </div>

      <img src="../assets/img/heart.png" alt="heart" />

      <div class="footerDivs">
        <p class="fs-5 fw-bold text">Calidad certificada</p>

        <div id="bioText" class="fs-2 fw-bold">BIO</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import "../assets/base.css";

/* footer */
footer {
  position: fixed;
  bottom: 0;
  height: 16vh;
  padding: 0 60px;
  background-color: var(--lightgreen-palette);
  box-shadow: 0 0 10px rgba(130, 130, 130, 0.775) inset;
}

/* first div */
.footerDivs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white-palette);
}
.text {
  letter-spacing: 1px;
}
#ecoText {
  text-shadow: 1px 1px black;
}

/* img */
img {
  width: 8%;
}

/* second div includes class .footerDivs class .text*/
#bioText {
  text-shadow: 1px 1px black;
}
</style>
