<script setup>
import ComicBox from "../components/comics/ComicBox.vue";
import WorkSection from "../components/works/WorkSection.vue";
import ComicRow from "../components/comics/ComicRow.vue";
import Contact from "../components/Contact.vue";

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
    <WorkSection sectionName="Fotomontajes" />
    <ComicRow :images="['c4c1.png', 'c4c2.png', 'c4c3.png', 'c4c4.png']" />
    <WorkSection sectionName="Ilustración" :proyects="proyects.filter((e) => e.category_code == 'ilu')"/>
    <WorkSection sectionName="Marcas" :proyects="proyects.filter((e) => e.category_code == 'mar')" />
    <ComicBox />
    <WorkSection sectionName="Fotografía" :proyects="proyects.filter((e) => e.category_code == 'fot')" />
    <Contact sectionName="Contacto" />
  </section>
</template>

<style scoped>
section{
  color: #000;
}
</style>
