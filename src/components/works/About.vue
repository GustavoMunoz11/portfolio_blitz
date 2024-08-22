<script setup>
const props = defineProps({
  images: Array,
});
</script>

<template>
  <section>
    <div class="about">
      <h1>Sobre mi</h1>
      <div id="foto">
        <img :src="`img/${props.images ? props.images[0] : ''}`" alt="" />
      </div>
      <p>
        "Nací en barrancabermeja santander, desde pequeño siempre me han
        apasionado las historias y el poder escribir las mias. debido a eso me
        encanta la escritura, la Animación, la Ilustración y la utilizo para
        traer a la vida a mis propios personajes e historias. desde los 8 me
        encantaba dibujar comics y quize volver a esas raices, creo en que todos
        tus sueños se pueden lograr si luchas por ellos."
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--color-third);
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: "Roboto", bold;
  color: var(--color-primary);
  text-align: center;
  bottom: 40px;
  margin: 50px;
}

.about {
  padding-top: 100px;
}

#foto {
  border-radius: 100%;
  width: 300px;
  height: 300px;
  background-color: gray;
}

img {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
}

p {
  padding-top: 50px;
  padding-bottom: 100px;
  font-family: "Roboto";
  font-size: 1rem;
  color: var(--color-fourth);
  text-wrap: balance;
}

@media screen and (max-width: 1300px) {
  #foto {
    left: 400px;
  }
}

@media screen and (max-width: 900px) {
  #foto {
    left: 290px;
  }
}

@media screen and (max-width: 600px) {
  #foto {
    left: 150px;
  }
}
</style>
