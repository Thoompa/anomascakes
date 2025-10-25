<template>
  <ImageCarousel :images="photos" />
  <div class="home-body">
    <div>
      <h1 style="text-transform: uppercase; text-align: center">Sample Heading</h1>
      <h2 style="text-align: center">Sample Subheading</h2>
    </div>
    <div>
      <div class="row">
        <div class="col">
          <img alt="Anomas Cakes logo" class="images" src="@/assets/images/anomas_cakes_logo.jpg" />
          <h3 style="text-align: center">Cakes</h3>
          <p style="text-align: center">Sample cakes subheading</p>
        </div>
        <div class="col">
          <img alt="Anomas Cakes logo" class="images" src="@/assets/images/anomas_cakes_logo.jpg" />
          <h3 style="text-align: center">Short eats</h3>
          <p style="text-align: center">Sample short eats subheading</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageCarousel from '@/components/ImageCarousel.vue'

const photos = [
  'src/assets/images/anomas_cakes_logo.jpg',
  'src/assets/images/instagram-icon.png',
  'src/assets/images/facebook-icon.png'
]
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.home-body {
  margin-block: var(--default-margin-block);
}
</style>
