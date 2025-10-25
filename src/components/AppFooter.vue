<template>
  <div class="social-media">
    <a v-for="item in socialMedia" :key="item.id" :href="item.link">
      <img class="logo" :src="item.icon" :alt="item.name" width="38" height="38" />
    </a>
  </div>
  <div class="contact-details">
    <div class="col">
      <span style="font-weight: bold"> Anomas Cakes </span>
      <span> Caroline Springs </span>
      <span> Pickup only </span>
      <span> T: fake number for now </span>
      <span> E: fake email for now </span>
    </div>
    <div class="col">
      <span> Anomas Cakes ©2025 </span>
    </div>
  </div>
</template>

<script lang="ts">
import FacebookIcon from '@/assets/images/facebook-icon.png'
import InstagramIcon from '@/assets/images/instagram-icon.png'

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
  flex-direction: row;
  justify-content: space-between;
  margin-block: var(--default-margin-block) 30px;
}

.social-media {
  display: flex;
  background: black;
  gap: 10px;
  padding-left: var(--app-padding-inline);
}
</style>
