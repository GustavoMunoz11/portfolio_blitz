 <script setup>
import ComicBox from "../components/comics/ComicBox.vue";
import WorkSection from "../components/works/WorkSection.vue";
import ComicRow from "../components/comics/ComicRow.vue";
import Contact from "../components/Contact.vue";
</script>

<template>
  <section>
    <ComicBox :images="['c1c1.png','c1c2.png','c1c3.png','c1c4.png']"/>
    <WorkSection sectionName="Fotomontajes" />
    <ComicRow :images="['c4c1.png','c4c2.png','c4c3.png','c4c4.png']" />
    <WorkSection sectionName="Ilustración" />
    <WorkSection sectionName="Marcas" />
    <ComicBox />
    <Contact sectionName="Contacto" />
  </section>
</template>

<style scoped></style>
