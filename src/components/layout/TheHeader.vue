<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>


<template>
    <header>
        <h1>portafolio</h1>

        <div class="buttons">
            <p @click="router.push({ name: 'about' })">about</p>
            <p @click="router.push({ name: 'contact' })">contact</p>
            <p @click="router.push({ name: 'work' })">work</p>
        </div>


    </header>

</template>

<style scoped>
header {
    background-color: blueviolet;
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

h1 {
    color: whitesmoke;
    font-size: 2rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.buttons {
    display: flex;
    gap: 50px;
}

p {
    color: whitesmoke;

}
</style>