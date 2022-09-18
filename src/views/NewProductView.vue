<script>
export default {
  name: "NewProductView",
};
</script>

<template>
  <form>
    <div class="form-group">
      <label for="exampleFormControlInput1">Product Name:</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Product Category:</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>Cereales en grano</option>
        <option>Frutas</option>
        <option>Hortalizas</option>
        <option>Carnes</option>
        <option>Pescados</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Product Description:</label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        cols="10"
      ></textarea>
    </div>
  </form>
</template>

<style scoped>
@import "../assets/base.css";
</style>
