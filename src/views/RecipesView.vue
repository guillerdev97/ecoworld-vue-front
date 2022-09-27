<script></script>

<template>
  <section
    id="firstSection"
    class="d-flex justify-content-center align-items-center"
  >
    <img src="../assets/img/firstSectionRecipes.jpg" alt="recipe" />
    <div class="d-flex flex-column justify-content-around align-items-center">
      <h1>
        Every month new recipes<br />
        <span>healthy and design for you</span>
      </h1>
      <a href="#recipesSection"
        ><button id="firstSectionButton" type="button" class="btn">
          Discover them!
        </button></a
      >
    </div>
  </section>

  <div>
    <h1 id="recipesTitle">ALL RECIPES</h1>
  </div>

  <section id="recipesSection">
    <div id="grid" class="container">
      <div class="row">
        <div class="col-sm recipeCard">
          <img src="" alt="" />
          <p></p>
        </div>
        <div class="col-sm recipeCard"></div>
        <div class="col-sm recipeCard"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "../assets/base.css";

#firstSection {
  width: 100%;
  height: 350px;
  background-color: #eaba31;
}
#firstSection img {
  width: 20%;
  margin-right: 200px;
  border-radius: 10px;
}
#firstSection h1 {
  color: var(--white-palette);
  font-size: 40px;
}
#firstSection span {
  margin-left: 3px;
}

#firstSectionButton {
  box-shadow: none;
  margin-top: 30px;
  padding: 7px;
  font-weight: bold;
  border: 1px solid white;
  color: white;
  background-color: #e3b32e;
  transition: all 0.3s ease-in;
}
#firstSectionButton:hover {
  background-color: #c29928;
}

#recipesTitle {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#recipesSection {
  width: 100%;
  height: 400px;
  background-color: var(--beige-palette);
}

#grid {
  width: 80%;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
}

.recipeCard {
  width: 25%;
  height: 280px;
  margin: 15px;
  border: 1px solid black;
}

</style>
