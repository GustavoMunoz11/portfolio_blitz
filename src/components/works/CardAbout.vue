<script setup></script>

<template>
        <div class="about">
<h1>Sobre mi</h1>
        <div id="foto"></div>
        <p>Nací en barrancabermeja santander, desde pequeño siempre <br>me han apasionado las historias
            y el poder escribir las mias.</br>
        </p>
    </div>

</template>

<style scoped>


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