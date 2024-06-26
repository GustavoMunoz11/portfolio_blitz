<script setup>
import TheCard from './TheCard.vue';
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
  display: grid;
  width: 100%;
  height: 100%;
  border: 2px solid black;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  justify-items: center;
  align-content: center;
  gap: 1rem;
}
</style>
