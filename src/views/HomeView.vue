<template>
  <v-carousel show-arrows="hover" class="v-carousel">
    <v-carousel-item v-for="(img, index) in photos" :key="index" :src="img" cover></v-carousel-item>
  </v-carousel>
  <div class="home-body">
    <div>
      <h1 style="text-transform: uppercase; text-align: center">Sample Heading</h1>
      <h2 style="text-align: center">Sample Subheading</h2>
    </div>
    <div>
      <div class="row">
        <div class="col">
          <RouterLink to="/cakes">
            <img alt="Anomas Cakes logo" class="images" src="@/assets/images/cakes.jpg" />
            <h3 style="text-align: center">Cakes</h3>
            <p style="text-align: center">Sample cakes subheading</p>
          </RouterLink>
        </div>
        <div class="col">
          <RouterLink to="/shorteats">
            <img alt="Anomas Cakes logo" class="images" src="@/assets/images/shorteats.jpg" />
            <h3 style="text-align: center">Sri Lankan Short eats</h3>
            <p style="text-align: center">Sample short eats subheading</p>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/images/anomas_cakes_logo.jpg';
import cakes from '@/assets/images/cakes.jpg';
import shorteats from '@/assets/images/shorteats.jpg';

const photos = [logo, cakes, shorteats];
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  margin-top: 45px;

  .col {
    align-self: center;
  }
}

.home-body {
  margin-block: var(--default-margin-block);
}

.images {
  width: 500px;
  align-self: center;
}

.v-carousel {
  width: 600px;
  height: 600px !important;
  justify-self: center;
}
</style>
