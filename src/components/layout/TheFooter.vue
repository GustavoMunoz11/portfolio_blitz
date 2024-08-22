<script setup></script>

<template>
  <footer>
    <h3>All content copyright Gustavo 2024 ©</h3>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--color-primary);
  display: flex;
  justify-content: space-around;
}

h3 {
  color: whitesmoke;
  font-size: 1.3rem;
  font-family: Arial, Helvetica, sans-serif;
  padding: 30px;
}

@media screen and (max-width: 900px) {
  h3 {
    color: whitesmoke;
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
  }
}

@media screen and (max-width: 600px) {
  h3 {
    color: whitesmoke;
    font-size: 0.75rem;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
  }
}
</style>
