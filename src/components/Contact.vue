<script setup></script>

<template>
  <section>
    <h1>Contacto</h1>
    <div class="contact_container">
      <form action="">
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name" />

        <label for="email">email</label>
        <input type="email" id="email" name="email" />

        <label for="message">mensaje</label>
        <textarea name="message" id="message"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  background-color: var(--color-third);
  color: var(--color-primary);
}

h1 {
  font-family: "Roboto", bold;
  color: var(--color-primary);
  text-align: left;
  margin-left: 40px;
}
</style>
