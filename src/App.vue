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
}
</style>
