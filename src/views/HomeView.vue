<template>
  <v-carousel show-arrows="hover" class="v-carousel">
    <v-carousel-item v-for="(img, index) in photos" :key="index" :src="img" cover></v-carousel-item>
  </v-carousel>
  <div class="home-body">
    <div class="hero text-center">
      <h1>Made-to-order cakes for your moments that matter</h1>
      <h2>
        From birthdays to bridal showers, we create custom cakes, cupcakes, and bento boxes
        that look beautiful and taste even better.
      </h2>
      <RouterLink class="hero-cta" to="/order">Start Your Order</RouterLink>
    </div>
    <div v-if="showCakes && showShortEats">
      <div class="row">
        <div class="col">
          <RouterLink to="/cakes">
            <img alt="Anomas Cakes logo" class="images" src="@/assets/images/cakes.jpg" />
            <h3 class="text-center">Cakes</h3>
            <p class="text-center">Sample cakes subheading</p>
          </RouterLink>
        </div>
        <div class="col">
          <RouterLink to="/shorteats">
            <img alt="Anomas Cakes logo" class="images" src="@/assets/images/shorteats.jpg" />
            <h3 class="text-center">Sri Lankan Short eats</h3>
            <p class="text-center">Sample short eats subheading</p>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { features } from '@/config/features';
import logo from '@/assets/images/anomas_cakes_logo.jpg';
import cakes from '@/assets/images/cakes.jpg';
import shorteats from '@/assets/images/shorteats.jpg';

const showCakes = features.cakesEnabled;
const showShortEats = features.shortEatsEnabled;
const photos = [logo, cakes, ...(showShortEats ? [shorteats] : [])];
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
  display: grid;
  gap: 2rem;
}

.home-body h1,
.home-body h2,
.home-body h3 {
  color: var(--color-heading);
  font-family: 'Georgia', serif;
}

.home-body h1 {
  font-size: 2.4rem;
  margin-bottom: 0.4rem;
}

.home-body h2 {
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-text-secondary);
}

.hero {
  display: grid;
  justify-items: center;
  gap: 0.9rem;
  max-width: 820px;
  margin-inline: auto;
}

.hero-cta {
  display: inline-block;
  margin-top: 0.2rem;
  padding: 0.75rem 1.4rem;
  border-radius: 999px;
  background: var(--color-link);
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.hero-cta:hover {
  color: #fff;
  background: var(--color-link-hover);
}

.text-center {
  text-align: center;
}

.text-uppercase {
  text-transform: uppercase;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(1.2rem, 4vw, 5rem);
}

.row .col {
  width: min(100%, 400px);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(31, 22, 16, 0.12);
  background: var(--color-surface);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.row .col:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(31, 22, 16, 0.18);
}

.row .col img.images {
  width: 100%;
  height: auto;
  display: block;
}

.row .col h3,
.row .col p {
  margin: 0.8rem 1rem;
  color: var(--color-text);
}

.v-carousel {
  width: min(100%, 750px);
  height: min(90vw, 600px) !important;
  margin-inline: auto;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}
</style>
