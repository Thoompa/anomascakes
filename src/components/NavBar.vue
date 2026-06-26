<script setup lang="ts">
import { features } from '@/config/features'

const showCakes = features.cakesEnabled
const showShortEats = features.shortEatsEnabled
</script>

<template>
  <div class="header">
    <div class="navbar">
      <div class="image">
        <RouterLink to="/">
          <img alt="Anomas Cakes logo" class="logo" src="@/assets/images/anomas_cakes_logo.jpg" />
        </RouterLink>
      </div>

      <div class="routerlinks">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink v-if="showCakes" to="/cakes">Cakes</RouterLink>
          <RouterLink v-if="showShortEats" to="/shorteats">Short Eats</RouterLink>
          <RouterLink to="/order">Order</RouterLink>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  background-color: var(--color-brand-primary);
  position: fixed;
  z-index: 100;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.logo {
  height: calc(var(--navbar-height) - 14px);
  width: calc(var(--navbar-height) - 14px);
  border-radius: 12px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: var(--app-padding-inline);
  height: var(--navbar-height);
  gap: 8px;
}

nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
}

nav a {
  color: var(--color-surface);
  font-weight: 600;
  padding: 0.55rem 0.9rem;
  border-radius: 8px;
  border-left: 3px solid var(--color-border);
  transition: all 0.23s ease;
}

nav a:hover {
  color: var(--color-surface);
  background-color: rgba(255, 255, 255, 0.2);
}

nav a.router-link-exact-active {
  background-color: rgba(255, 255, 255, 0.35);
  color: var(--color-surface);
  border-color: rgba(255, 255, 255, 0.8);
}

nav a:first-of-type {
  border-left: 0;
}

@media (max-width: 850px) {
  .navbar {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  nav {
    font-size: 12px;
  }
}

</style>
