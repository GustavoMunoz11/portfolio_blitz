<script setup>
const props = defineProps({
  name: String,
  proyect: Object,
});

function handleClick() {
  console.log("ss");

  if (props.proyect.link_url !== "") {
    console.log("in");
    let url = `${props.proyect.link_url}`;
    window.open(url, "_blank");
  }
}
</script>

<template>
  <div class="card-mod" @click="handleClick">
    <div id="img_container">
      <video
        v-if="proyect.video_url !== ''"
        width="100%"
        height="100%"
        muted
        autoplay
      >
        <source :src="proyect.video_url" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img v-else :src="proyect.img_url" alt="" />
    </div>
    <h3 class="name">{{ proyect.name }}</h3>
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
  cursor: pointer;
}

#img_container {
  width: 249px;
  height: 269px;
  background-color: #d9d9d9;
  margin-top: 10px;
}

.name {
  margin-top: 15px;
  color: var(--color-fourth);
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
