<script setup>
import TheCard from "./TheCard.vue";
</script>
<template>
  <section>
    <div class="card-container">
      <TheCard name="luis" />
      <TheCard name="carlos" />
      <TheCard name="pepe" />
      <TheCard name="Fercho" />
    </div>
  </section>
</template>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  border: 2px solid black;
  gap: 1em;

  margin-top: 80px;
  margin-bottom: 170px;
}
</style>
