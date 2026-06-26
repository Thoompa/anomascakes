<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Footer from './components/AppFooter.vue'
</script>

<template>
  <NavBar />
  <div class="view">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
.view {
  margin-inline: var(--app-padding-inline);
  margin-top: 18px;
  min-height: 580px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2rem;
}

@media (max-width: 912px) {
  .view {
    margin-inline: clamp(12px, 6vw, 24px);
    margin-top: 14px;
    min-height: 500px;
  }
}
</style>
