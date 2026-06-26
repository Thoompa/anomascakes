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
  flex-wrap: wrap;
  margin-block: var(--default-margin-block);
  gap: 36px;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 32px;
}

.text {
  max-width: 640px;
  color: var(--color-text);
}

.text h1 {
  font-size: 2.2rem;
  color: var(--color-heading);
  margin-bottom: 16px;
}

.text p {
  line-height: 1.8;
  color: var(--color-text-secondary);
}

.about img {
  width: min(100%, 420px);
  border-radius: 16px;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.14);
}

@media (max-width: 760px) {
  .about {
    gap: 20px;
    padding: 18px;
    border-radius: 14px;
  }

  .text h1 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  .text p {
    line-height: 1.65;
  }

  .about img {
    max-width: 320px;
    width: 100%;
  }
}

</style>
