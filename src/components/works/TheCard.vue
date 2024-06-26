<script setup>
const props = defineProps({
  name: String,
});
</script>

<template>
  <div class="card-mod">
    <h4 class="name">{{ props.name }}</h4>
  </div>
</template>

<style scoped>
.card-mod {
  width: 350px;
  height: 450px;
  background: white;
  align-content: center;
  justify-content: center;
  padding: 30px;
}

.name {
  margin: 0;
}
</style>
