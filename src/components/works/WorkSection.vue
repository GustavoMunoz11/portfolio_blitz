<script setup>
import CardContainer from "./CardContainer.vue";
const props = defineProps({
  sectionName: String,
  proyects: Array,
});
</script>

<template>
  <section>
    <h1 class="section_name">{{ props.sectionName }}</h1>
    <CardContainer :proyects="proyects"/>
  </section>
</template>

<style scoped>
section {
  background-color: var(--color-third);
  padding: 13px;
}

h1 {
  font-family: "Roboto", bold;
  color: var(--color-primary);
  text-align: left;
  margin-left: 40px;
}

@media screen and (max-width: 900px) {
  h1 {
    text-align: center;
    margin-left: 0;
  }
}
</style>
