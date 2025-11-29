<script setup lang="ts"></script>

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
          <RouterLink to="/menu">Menu</RouterLink>
          <RouterLink to="/order">Order</RouterLink>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  background-color: var(--vt-c-indigo);
  position: fixed;
  z-index: 100;
}

.logo {
  height: var(--navbar-height);
  width: var(--navbar-height);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: var(--app-padding-inline);
  height: var(--navbar-height);
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 3px solid var(--color-border);
  font-size: 18px;
}

nav a:first-of-type {
  border: 0;
}
</style>
