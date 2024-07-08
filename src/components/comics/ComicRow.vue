<script setup>
const props = defineProps({
  images: Array,
});
</script>

<template>
  <section>
    <div class="comic_container">
      <div><img :src="`img/${props.images ? props.images[0]: ''}`" alt=""></div>
      <div><img :src="`img/${props.images ? props.images[1]: ''}`" alt=""></div>
      <div><img :src="`img/${props.images ? props.images[2]: ''}`" alt=""></div>
      <div><img :src="`img/${props.images ? props.images[3]: ''}`" alt=""></div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--color-secondary);
}


img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.comic_container {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  padding: 1em;
}

.comic_container > div {
  background-color: white;
  border: 3px solid black;
  border-right: none;
  padding-top: 100%;
}

.comic_container > div:last-child {
  border-right: 3px solid black;
}

@media screen and (max-width: 600px) {
  .comic_container {
    grid-template-columns: repeat(1, 1fr);
  }

  .comic_container > div {
    border-right: 3px solid black;
    border-bottom: none;
  }

  .comic_container > div:last-child {
    border-bottom: 3px solid black;
  }
}
</style>
