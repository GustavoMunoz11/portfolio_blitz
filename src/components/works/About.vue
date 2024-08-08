<script setup></script>

<template>

    <section>
<h1>Sobre mi</h1>
        <div class="about">
        <div id="foto"></div>
        <p>Nací en barrancabermeja santander, desde pequeño siempre <br>me han apasionado las historias
            y el poder escribir las mias.</br>
        </p>
    </div>
    </section>

</template>

<style scoped>
section{
    background-color: var(--color-third)
}

h1{
    font-family: "Roboto", bold;
  color: var(--color-primary);
  text-align: center;
  top: 40px;
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