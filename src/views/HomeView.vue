<script setup>
import ComicBox from "../components/comics/ComicBox.vue";
import WorkSection from "../components/works/WorkSection.vue";
import ComicRow from "../components/comics/ComicRow.vue";
import Contact from "../components/Contact.vue";
import About from "../components/works/About.vue";

import { ref, onMounted } from "vue";

import Papa from "papaparse";

const database =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTN8ukBftP2YebAXpsXppXCpoMHRZGJvNIOLicVIakL4-m3YIaMhZgDfe54dBgEIE4PprIb7i-Ld6Bo/pub?output=csv";

const proyects = ref([])

onMounted(() => {
  Papa.parse(database, {
    download: true,
    header: true,
    complete: (results) => (proyects.value = results.data),
  });
});
</script>

<template>
  <section>
    <ComicBox :images="['c1c1.png', 'c1c2.png', 'c1c3.png', 'c1c4.png']" />
    <WorkSection sectionName="Fotomontajes" :proyects="proyects.filter((e) => e.category_code == 'ftm')"/>
      <ComicBox />
      <WorkSection sectionName="Ilustración" :proyects="proyects.filter((e) => e.category_code == 'ilu')"/>
        <WorkSection sectionName="Marcas" :proyects="proyects.filter((e) => e.category_code == 'mar')" />
        <ComicRow />
        <WorkSection sectionName="Web" :proyects="proyects.filter((e) => e.category_code == 'web')" />
    <ComicRow :images="['c4c1.png', 'c4c2.png', 'c4c3.png', 'c4c4.png']" />
    <WorkSection sectionName="Animación 2D Y 3D" :proyects="proyects.filter((e) => e.category_code == 'ani')"/>
      <ComicBox />
      <WorkSection sectionName="Editorial" :proyects="proyects.filter((e) => e.category_code == 'edi')" />
        <ComicBox />
        <WorkSection sectionName="Doblaje y Edición de sonido" :proyects="proyects.filter((e) => e.category_code == 'dob')" />
    <ComicBox :images="['c8c1.png', 'c8c2.png', 'c8c3.png', 'c8c4.png']" />
    <WorkSection />
      <ComicBox />
      <WorkSection sectionName="Fotografía" :proyects="proyects.filter((e) => e.category_code == 'fot')" />
        <ComicBox />
      <About />
      <ComicBox />
    <Contact sectionName="Contacto" />
  </section>
</template>

<style scoped>
section{
  color: #000;
}
</style>
