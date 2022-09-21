<script>
export default {
  name: "AboutView",
};
</script>

<template>
  <section
    id="weareSection"
    class="d-flex justify-content-center align-items-center"
  >
    <img src="../assets/img/cesta.svg" alt="" />
    <div class="d-flex flex-column justify-content-around align-items-center">
      <h1>
        We are organic food<br />
        <span>health and innovation</span>
      </h1>
      <!-- Button trigger modal -->
      <button
        id="modalButton"
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        More about us!
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">We connect people</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    id="corporation"
    class="d-flex justify-content-around align-items-center"
  >
    <div id="text" class="d-flex flex-column justify-content-center">
      <h1>What are <span id="green">organic products?</span></h1>

      <p class="text-justify">
        We make all our products from ingredients grown using organic production
        methods, without pesticides, herbicides or artificial fertilizers and
        using techniques that combine the knowledge of traditional agriculture
        with the knowledge provided by modern science.
      </p>
    </div>

    <div id="img" class="d-flex justify-content-center align-items-center">
      <img src="../assets/img/apple.jpeg" alt="apple" />
    </div>
  </section>

  <section
    id="corporation"
    class="d-flex justify-content-around align-items-center"
  >
    <div id="img" class="d-flex justify-content-center align-items-center">
      <img src="../assets/img/apple.jpeg" alt="apple" />
    </div>

    <div id="text" class="d-flex flex-column justify-content-center">
      <h1>What do <span id="green">we do?</span></h1>

      <p class="text-justify">
        Ecoastur was born with an idea: to give visibility to organic food and
        make it accessible to any consumer in their usual place of purchase.
      </p>
    </div>
  </section>

  <section
    id="corporation"
    class="d-flex justify-content-around align-items-center"
  >
    <div id="text" class="d-flex flex-column justify-content-center">
      <h1>How do <span id="green">we do?</span></h1>

      <p class="text-justify">
        connecting small farms with small businesses and driving local growth
      </p>
    </div>
    <div id="img" class="d-flex justify-content-center align-items-center">
      <img src="../assets/img/apple.jpeg" alt="apple" />
    </div>
  </section>
</template>

<style scoped>
@import "../assets/base.css";

#weareSection {
  width: 100%;
  height: 350px;
  background-color: #a36529;
}
#weareSection img {
  width: 15%;
  margin-right: 200px;
}
#weareSection h1 {
  color: var(--white-palette);
  font-size: 40px;
}
#weareSection span {
  margin-left: 3px;
}

#modalButton {
  box-shadow: none;
  margin-top: 30px;
  font-weight: bold;
  border: 1px solid white;
  color: white;
  background-color: rgb(174, 115, 34);
  transition: all 0.3s ease-in;
}
#modalButton:hover {
  background-color: rgb(139, 92, 27);
}

#corporation {
  width: 100%;
  height: 350px;
  padding: 20px 40px;
}

#text {
  width: 40%;
  margin-left: 15px;
}
#green {
  color: var(--green-palette);
}

p {
  margin-top: 10px;
  margin-left: 5px;
}

#img {
  width: 40%;
}
img {
  width: 70%;
  height: 280px;
  border-radius: 5px;
}
</style>
