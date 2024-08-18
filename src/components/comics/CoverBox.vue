<script setup>
const props = defineProps({
  images: Array,
});
</script>

<template>
  <section>
    <div id="cover">
      <img :src="`img/${props.images ? props.images[0] : ''}`" alt="" />
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--color-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#cover {
  background-color: white;
  border: 3px solid black;
  width: 90%;
  height: 620px;
}

@media screen and (max-width: 1300px) {
  #cover {
    height: 550px;
  }
}

@media screen and (max-width: 900px) {
  #cover {
    width: 9%2;
    height: 500px;
  }
}

@media screen and (max-width: 600px) {
  #cover {
    width: 97%;
    height: 300px;
  }
}
</style>
