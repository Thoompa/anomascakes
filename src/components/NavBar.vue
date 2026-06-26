<script setup lang="ts">
import { ref } from 'vue'
import { features } from '@/config/features'

const showCakes = features.cakesEnabled
const showShortEats = features.shortEatsEnabled
const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="header">
    <div class="navbar">
      <div class="image">
        <RouterLink to="/">
          <img alt="Anomas Cakes logo" class="logo" src="@/assets/images/anomas_cakes_logo.jpg" />
        </RouterLink>
      </div>

      <div class="menu-container">
        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation menu"
          @click="toggleMenu"
        >
          <span class="menu-toggle-line" />
          <span class="menu-toggle-line" />
          <span class="menu-toggle-line" />
        </button>

        <div class="routerlinks" :class="{ open: isMenuOpen }">
          <nav>
            <RouterLink to="/" @click="closeMenu">Home</RouterLink>
            <RouterLink to="/about" @click="closeMenu">About</RouterLink>
            <RouterLink v-if="showCakes" to="/cakes" @click="closeMenu">Cakes</RouterLink>
            <RouterLink v-if="showShortEats" to="/shorteats" @click="closeMenu">Short Eats</RouterLink>
            <RouterLink to="/order" @click="closeMenu">Order</RouterLink>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  background-color: var(--color-brand-primary);
  position: sticky;
  top: 0;
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
  min-height: var(--navbar-height);
  gap: 8px;
  padding-block: 7px;
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

.menu-toggle {
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.15);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
}

.menu-container {
  position: relative;
}

.menu-toggle-line {
  width: 18px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
}

@media (max-width: 850px) {
  .navbar {
    position: relative;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .routerlinks {
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    max-width: min(88vw, 240px);
    background: color-mix(in srgb, var(--color-brand-primary) 92%, black);
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 14px;
    box-shadow: 0 14px 24px rgba(0, 0, 0, 0.24);
    padding: 8px;
    display: none;
  }

  .routerlinks.open {
    display: block;
  }

  nav {
    width: auto;
    font-size: 13px;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
  }

  nav a {
    border-left: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 132px;
    width: 100%;
    max-width: 100%;
    text-align: center;
    padding: 0.65rem 0.9rem;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0);
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  nav a:hover {
    background-color: rgba(255, 255, 255, 0.18);
    color: var(--color-brand-strong);
  }

  nav a:active {
    background-color: rgba(255, 255, 255, 0.28);
    color: var(--color-brand-strong);
  }

  nav a.router-link-exact-active:hover,
  nav a.router-link-exact-active:active {
    background-color: rgba(255, 255, 255, 0.42);
    color: var(--color-brand-strong);
    border-color: transparent;
  }

  nav a:first-of-type {
    border-left: 0;
  }
}

</style>
