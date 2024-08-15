<script setup>
</script>

<template>

    <section>
        <div class="about">
<h1>Sobre mi</h1>
        <div id="foto"></div>
        <p>"Nací en barrancabermeja santander, desde pequeño siempre <br>me han apasionado las historias
            y el poder escribir las mias.</br><br>debido a eso me encanta la escritura, la Animación, la Ilustración y la utilizo</br><br> para traer a la vida a mis propios personajes e historias. desde los 8 me encantaba</br><br>dibujar comics y quize volver a esas raices, creo en que todos tus </br><br>sueños se pueden lograr si luchas por ellos.""</br>
        </p>
    </div>
    </section>

</template>

<style scoped>
section{
    background-color: var(--color-third);

}

h1{
    font-family: "Roboto", bold;
  color: var(--color-primary);
  text-align: center;
bottom: 40px;
}

.about{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
  
}

#foto{
    border-radius: 100%;
    width: 300px;
    height: 300px;
    background-color: gray;
}

p{
    padding-top: 50px;
    padding-bottom: 100px;
    font-family: "Roboto";
    font-size: 20px;
    color: var(--color-fourth);
}
</style>