<script setup>
import CardContainer from './CardContainer.vue';
</script>

<template>
<section>
<h1>Fotomontajes</h1>
<CardContainer />
</section>

</template>

<style scoped>

section {
    background-color: var(--color-third);
    padding: 30px;
}

h1 {
    font-family: "Roboto", bold;
    color: var(--color-primary);
}

</style>