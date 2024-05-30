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
      <TheCard name="Juana" />
      <TheCard name="Sofia" />
      <TheCard name="Olga" />
      <TheCard name="Maria" />
    </div>
  </section>
</template>

<style scoped>
.card-container {
  display: grid;
  width: 500px;
  height: 500px;
  border: 2px solid black;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  justify-items: center;
  align-content: center;
  gap: 1rem;
}
</style>
