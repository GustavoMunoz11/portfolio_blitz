<script setup>
const props = defineProps({
  name: String,
});
</script>

<template>
  <div class="card-mod">
    <div id="img_container"></div>
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
</style>
