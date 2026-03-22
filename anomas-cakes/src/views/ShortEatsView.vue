<template>
  <div class="menu">
    <img alt="Anomas Cakes logo" class="images" src="@/assets/images/shorteats.jpg" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  margin-block: var(--default-margin-block);
}

.menu .images {
  width: min(100%, 880px);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.14);
}

</style>
