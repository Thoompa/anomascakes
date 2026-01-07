<template>
  <div class="about">
    <div class="text">
      <h1>About Us</h1><br />
      <p>
        We’re a small team with a big love for Sri Lankan flavours. Our founder, Anoma, grew up in
        Sri Lanka and has been cooking for over 35 years, bringing a deep knowledge of the cuisine
        and a passion for sharing it with others.<br /><br />
        Inspired by the kitchens and street stalls of the island, we bring you a modern take on
        classic cakes, snacks and bakes. From crisp pan rolls to soft maalu paan, golden cutlets to
        modern cakes - everything we make is rooted in family recipes, use of fresh ingredients, and
        the joy of sharing good food.<br /><br />
        Whether you grew up with these favourites or are trying them for the first time, we’re here
        to serve a taste of home.
      </p>
    </div>
    <img alt="Anomas Cakes logo" src="@/assets/images/anoma-short.jpg" />
  </div>
</template>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-block: var(--default-margin-block);
  gap: 50px;
}

.text {
  width: 500px;
  align-content: center;
}
</style>
