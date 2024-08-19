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
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#cover {
  background-color: white;
  border: 3px solid black;
  width: 1060px;
  height: 632px;
}

@media screen and (max-width: 1300px) {
  #cover {
    height: 550px;
  }
  img {
    padding-top: 0;
  }
}

@media screen and (max-width: 900px) {
  #cover {
    width: 92%;
    height: 500px;
  }

  img {
    padding-top: 0;
  }
}

@media screen and (max-width: 600px) {
  #cover {
    width: 97%;
    height: 300px;
  }
}
</style>
