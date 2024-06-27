<script setup></script>

<template>
  <section>
    <div class="comic_container">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--color-secondary);
}

.comic_container {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  padding: 1em;
  gap: 1em;
}

.comic_container > div {
  background-color: white;
  border: 3px solid black;
  padding-top: 71%;
}

@media screen and (max-width: 600px) {
  .comic_container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
