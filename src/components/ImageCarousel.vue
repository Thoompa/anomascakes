<template>
  <div class="carousel">
    <button class="nav prev" @click="prevSlide">❮</button>

    <img :src="images[currentIndex]" alt="carousel image" class="carousel-image" />

    <button class="nav next" @click="nextSlide">❯</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: 600px;
  max-width: 100%;
  margin: auto;
  overflow: hidden;
  text-align: center;
}

.carousel-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  z-index: 2;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
</style>
