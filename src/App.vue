<script setup>

import TheHeader from "././components/layout/TheHeader.vue";
import TheFooter from "././components/layout/TheFooter.vue";
import { RouterView } from "vue-router";
</script>

<template>
<TheHeader />

<main>
  <RouterView />
</main>

<TheFooter />
  
</template>

<style scoped></style>
