<template>
  <div class="order">
    <form
      action="https://public.herotofu.com/v1/37440b50-b158-11f0-beba-f5677707202f"
      method="post"
      accept-charset="UTF-8"
    >
      <label for="fname">First name:</label><br />
      <input type="text" id="fname" name="fname" value="" required /><br />

      <label for="lname">Last name:</label><br />
      <input type="text" id="lname" name="lname" value="" required /><br /><br />

      <label for="email">Email:</label><br />
      <input type="text" id="email" name="email" value="" required /><br /><br />

      <label for="phone">Phone:</label><br />
      <input type="text" id="phone" name="phone" value="" required /><br /><br />

      <label for="source">How did you find us?</label><br />
      <select id="source" name="source" v-model="source" required>
        <option value="facebook">Facebook</option>
        <option value="instagram">Instagram</option>
        <option value="web">Web search</option>
        <option value="mouth">Word of Mouth</option>
        <option value="other">Other</option>
      </select>

      <div v-if="source === 'other'">
        <label for="message">Please specify:</label><br />
        <input type="text" id="sourceOther" name="sourceOther" value="" />
      </div>
      <br /><br />

      <label for="message">Add a message: (optional)</label><br />
      <input type="text" id="message" name="message" value="" /><br /><br />

      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const source = ref('')

function submitForm(): void {
  alert('Form submitted!')
}
</script>

<style scoped>
.order {
  margin: var(--default-margin-block) 30px;
}
</style>
