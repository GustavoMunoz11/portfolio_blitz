<script setup>
import ComicBox from "../components/comics/ComicBox.vue";
import WorkSection from "../components/works/WorkSection.vue";
import ComicRow from "../components/comics/ComicRow.vue";
import Contact from "../components/Contact.vue";
import About from "../components/works/About.vue";
import CoverBox from "../components/comics/CoverBox.vue";

import { ref, onMounted } from "vue";

import Papa from "papaparse";

const database =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTN8ukBftP2YebAXpsXppXCpoMHRZGJvNIOLicVIakL4-m3YIaMhZgDfe54dBgEIE4PprIb7i-Ld6Bo/pub?output=csv";

const proyects = ref([]);

onMounted(() => {
  Papa.parse(database, {
    download: true,
    header: true,
    complete: (results) => (proyects.value = results.data),
  });
});
</script>

<template>
  <section id="home">
    <CoverBox :images="['portada.png']" />
    <ComicBox :images="['c1c1.png', 'c1c2.png', 'c1c3.png', 'c1c4.png']" />
    <WorkSection
      sectionName="Fotomontajes"
      :proyects="proyects.filter((e) => e.category_code == 'ftm')"
    />
    <ComicBox :images="['c2c1.png', 'c2c2.png', 'c2c3.png', 'c2c4.png']" />
    <WorkSection
      sectionName="Ilustración"
      :proyects="proyects.filter((e) => e.category_code == 'ilu')"
    />
    <WorkSection
      sectionName="Marcas"
      :proyects="proyects.filter((e) => e.category_code == 'mar')"
    />
    <ComicRow :images="['c3c1.png', 'c3c2.png', 'c3c3.png', 'c3c4.png']" />
    <WorkSection
      sectionName="Web"
      :proyects="proyects.filter((e) => e.category_code == 'web')"
    />
    <ComicRow :images="['c4c1.png', 'c4c2.png', 'c4c3.png', 'c4c4.png']" />
    <WorkSection
      sectionName="Animación 2D Y 3D"
      :proyects="proyects.filter((e) => e.category_code == 'ani')"
    />
    <ComicBox />
    <WorkSection
      sectionName="Editorial"
      :proyects="proyects.filter((e) => e.category_code == 'edi')"
    />
    <ComicBox />
    <WorkSection
      sectionName="Doblaje y Edición de sonido"
      :proyects="proyects.filter((e) => e.category_code == 'dob')"
    />
    <ComicBox :images="['c7c1.png', 'c7c2.png', 'c7c3.png', 'c7c4.png']" />
    <WorkSection
      sectionName="Otros trabajos"
      :proyects="proyects.filter((e) => e.category_code == 'otr')"
    />
    <ComicBox :images="['c8c1.png', 'c8c2.png', 'c8c3.png', 'c8c4.png']" />
    <WorkSection
      sectionName="Fotografía"
      :proyects="proyects.filter((e) => e.category_code == 'fot')"
    />
    <ComicBox :images="['c9c1.png', 'c9c2.png', 'c9c3.png', 'c9c4.png']" />
    <About />
    <ComicBox />
    <Contact sectionName="Contacto" />
  </section>
</template>

<style scoped>
section {
  color: #000;
}

#home {
  padding-top: 74px;
}
</style>
