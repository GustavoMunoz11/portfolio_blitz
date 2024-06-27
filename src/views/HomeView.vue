<script setup>
import ComicBox from "../components/comics/ComicBox.vue";
import WorkSection from "../components/works/WorkSection.vue";
import ComicRow from "../components/comics/ComicRow.vue";
</script>

<template>
  <section>
    <ComicBox />
    <WorkSection sectionName="Fotomontajes" />
    <ComicRow />
    <WorkSection sectionName="Ilustración" />
    <WorkSection sectionName="Marcas" />
  </section>
</template>

<style scoped></style>
