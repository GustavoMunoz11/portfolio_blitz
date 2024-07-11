<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const navigateTo = (path) => {
  router.push(path);
};

function toggleMenu() {
  const hamburger = document.querySelector(".hamburger");
  const dropDown = document.querySelector(".dropDown");
  hamburger.classList.toggle("open");
  dropDown.classList.toggle("show");
}
</script>

<template>
  <header>
    <div class="titulo">
      <h1 @click="navigateTo('/')">Laura Verde</h1>
    </div>
    <div class="links">
      <p @click="navigateTo('/work')">WORK</p>
      <p @click="navigateTo('/about')">ABOUT</p>
      <p @click="navigateTo('/contact')">CONTACT</p>
    </div>
    <div class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="dropDown" @click="toggleMenu">
      <p @click="navigateTo('/work')">WORK</p>
      <p @click="navigateTo('/about')">ABOUT</p>
      <p @click="navigateTo('/contact')">CONTACT</p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
  background-color: #29235c;
  z-index: 9 !important;
}

.titulo {
  h1 {
    text-transform: capitalize;
    font-family: kaoly_font;
    cursor: pointer;
    color: #ffbd59;
  }
}

.links {
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-family: gilroy_regular;
  color: #ffbd59;

  p {
    cursor: pointer;
    transition: 0.3s;
    z-index: 9 !important;
    &:hover {
      text-shadow: 0px 0px 1px black;
    }
  }
}

.dropDown {
  font-family: gilroy_regular;
  color: #ffbd59;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  background-color: var(--color-primary);
  display: none;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  z-index: 9 !important;

  p {
    cursor: pointer;
    transition: 0.3s;
    z-index: 9 !important;
    &:hover {
      text-shadow: 0px 0px 1px black;
    }
  }
}

.show {
  display: flex;
}

.hamburger {
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;
  display: none;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background-color: var(--color-accent);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger span:nth-child(1) {
  top: 0;
}

.hamburger span:nth-child(2) {
  top: 8px;
}

.hamburger span:nth-child(3) {
  top: 16px;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

@media screen and (max-width: 600px) {
  .links {
    display: none;
  }

  .hamburger {
    display: inline-block;
  }
}
</style>
