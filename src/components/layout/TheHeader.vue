<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <header>
    <h1>portafolio</h1>

    <div class="buttons">
      <p @click="router.push({ name: 'trabajos' })">Trabajos</p>
      <p @click="router.push({ name: 'sobre mi' })">Sobre Mi</p>
      <p @click="router.push({ name: 'contacto' })">contacto</p>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

h1 {
  color: whitesmoke;
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
}

.buttons {
  display: flex;
  gap: 50px;
}

p {
  color: whitesmoke;
  font-family: "Roboto", sans-serif;
}

@media screen and (max-width: 600px) {
  .buttons {
    display: none;
  }
}
</style>
