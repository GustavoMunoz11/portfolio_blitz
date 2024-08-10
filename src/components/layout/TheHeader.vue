<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function toggleMenu() {
  const burger = document.querySelector(".burger")
  const dropMenu = document.querySelector(".dropMenu")
  burger.classList.toggle("open")
  dropMenu.classList.toggle("show")
}
</script>

<template>
  <header>
    <h1>Gustavo Muñoz</h1>

    <div class="buttons">
      <p @click="router.push({ name: 'trabajos' })">Trabajos</p>
      <p @click="router.push({ name: 'sobre mi' })">Sobre Mi</p>
      <p @click="router.push({ name: 'contacto' })">contacto</p>
    </div>

    <div class="burger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="dropMenu" @click="toggleMenu">
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
  color: var(--color-third);
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
}

p {
  color: var(--color-third);
  font-family: "Roboto", sans-serif;
}

.buttons {
  display: flex;
  gap: 50px;
}

.dropMenu {
  color: var(--color-third);
  background-color: var(--color-primary);
  font-family: "Roboto", sans-serif;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  display: none;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  z-index: 9 !important;
}

.show {
  display: flex;
}

.burger {
  width: 40px;
  height: 30px;
  position: relative;
  cursor: pointer;
  display: none;
  justify-content: center;
}

.burger > span {
  display: block;
  position: absolute;
  height: 5px;
  width: 100%;
  background-color: var(--color-third);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.burger span:nth-child(1) {
  top: 0;
}

.burger span:nth-child(2) {
  top: 10px;
  width: 120%;
}

.burger span:nth-child(3) {
  top: 20px;
}

.burger.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.burger.open span:nth-child(2) {
  opacity: 0;
}

.burger.open span:nth-child(3) {
  transform: translateY(-12px) rotate(-45deg);
}


@media screen and (max-width: 600px) {
  .buttons {
    display: none;
  }

  .burger {
    display: flex;
  }
}
</style>
