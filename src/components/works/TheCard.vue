<script setup>
const props = defineProps({
  name: String,
});
</script>

<template>
  <div class="card-mod">
    <div id="img_container">
      <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-e33a2.appspot.com/o/fotomontajes%2Fchoco%20com.png?alt=media&token=70ad2cba-d02a-4a1a-9e86-5ffc5ceea74f" alt="">
    </div>
    <h3 class="name">{{ props.name }}</h3>
  </div>
</template>

<style scoped>
.card-mod {
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 350px;
  background: white;
  justify-content: start;
  align-items: center;
  color: var(--color-fourth);
}

#img_container {
  width: 249px;
  height: 269px;
  background-color: #d9d9d9;
  margin-top: 10px;
}

.name {
  margin-top: 15px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
