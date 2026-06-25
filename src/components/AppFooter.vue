<template>
  <div class="social-media">
    <a v-for="item in socialMedia" :key="item.id" :href="item.link">
      <img class="logo" :src="item.icon" :alt="item.name" width="38" height="38" />
    </a>
  </div>
  <div class="contact-details">
    <div class="col">
      <span class="brand-name"> Anomas Cakes </span>
      <span> Caroline Springs </span>
      <span> Pickup only </span>
      <span> T: 0478 066 761 </span>
      <span> E: info@anomascakes.com </span>
    </div>
    <div class="col">
      <span> Anomas Cakes ©2026 </span>
    </div>
  </div>
</template>

<script lang="ts">
import FacebookIcon from '@/assets/images/facebook.jpg'
import InstagramIcon from '@/assets/images/instagram.jpg'

export default {
  name: 'AppFooter',
  data() {
    return {
      socialMedia: [
        {
          id: 1,
          name: 'Facebook',
          link: 'https://www.facebook.com/anomascakes',
          icon: FacebookIcon
        },
        {
          id: 2,
          name: 'Instagram',
          link: 'https://www.instagram.com/anomascakes/',
          icon: InstagramIcon
        }
      ]
    }
  }
}
</script>

<style scoped>
.contact-details {
  padding-inline: var(--app-padding-inline);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-block: var(--default-margin-block) 30px;
  border-top: 1px solid var(--color-border);
  padding-top: 18px;
  color: var(--color-text-secondary);
}

.logo {
  border-radius: 8px;
  object-fit: cover;
}

.social-media {
  display: flex;
  background: var(--color-brand-secondary);
  gap: 12px;
  padding: 14px var(--app-padding-inline);
}

.social-media a {
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.social-media img {
  display: block;
}

.contact-details span {
  display: block;
  color: var(--color-text);
}

.brand-name {
  font-weight: 700;
}

</style>
