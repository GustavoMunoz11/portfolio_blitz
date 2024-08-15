<script setup>
import TheCard from "./TheCard.vue";
const props = defineProps({
  proyects: Array,
});
</script>
<template>
  <section>
    <div class="card-container">
      <TheCard v-for="p in proyects" :proyect="p" :key="p.id" />
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
  gap: 1em;
  margin-top: 80px;
  margin-bottom: 170px;
}
</style>
