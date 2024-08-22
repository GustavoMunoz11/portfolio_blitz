<script setup>
function handleSubmit(params) {
  console.log("hola");
}
</script>

<template>
  <section>
    <h1>Contacto</h1>
    <div id="contact_container">
      <form @submit.prevent="handleSubmit">
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name" />

        <label for="email">Email</label>
        <input type="email" id="email" name="email" />

        <label for="message">Mensaje</label>
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
  text-align: center;
  margin-top: 40px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
  gap: 30px;
  font-size: 1.2rem;
}

input {
  background-color: white;
  border-radius: 30px;
  width: 500px;
  height: 40px;
}

textarea {
  background-color: white;
  border-radius: 30px;
  border-color: none;
  width: 500px;
  height: 300px;
}

button {
  background-color: var(--color-secondary);
}

@media screen and (max-width: 900px) {
  form {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 600px) {
  form {
    font-size: 1.7rem;
  }

  input {
    width: 80%;
    height: 40px;
  }

  textarea {
    width: 80%;
    height: 300px;
  }
}
</style>
