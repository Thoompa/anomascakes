<script setup lang="ts"></script>

<template>
  <div class="header">
    <div class="navbar">
      <div class="image">
        <img
          alt="Anomas Cakes logo"
          class="logo"
          src="@/assets/anomas_cakes_logo.jpg"
          width="125"
          height="125"
        />
      </div>

      <div class="routerlinks">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/products">Products</RouterLink>
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
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 30px;
  height: 125px;
}

.logo {
  display: block;
}

.routerlinks {
  margin: 0 auto;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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
  font-size: xxx-large;
}

nav a:first-of-type {
  border: 0;
}
</style>
