<template>
  <div class="order">
    <form
      action="https://public.herotofu.com/v1/37440b50-b158-11f0-beba-f5677707202f"
      method="post"
      accept-charset="UTF-8"
      class="form"
    >
      <label for="fname">First name:</label><br />
      <v-text-field id="fname" name="fname" required /><br />

      <label for="lname">Last name:</label><br />
      <v-text-field id="lname" name="lname" required /><br />

      <label for="email">Email:</label><br />
      <v-text-field id="email" name="email" required /><br />

      <label for="phone">Phone:</label><br />
      <v-text-field id="phone" name="phone" required /><br />

      <label for="source">How did you find us?</label><br />
      <v-combobox
        id="source"
        name="source"
        v-model="source"
        :items="['Facebook', 'Instagram', 'Web search', 'Word of Mouth', 'Other']"
        required
      >
      </v-combobox>

      <div v-if="source === 'other'">
        <label for="message">Please specify:</label><br />
        <v-text-field id="sourceOther" name="sourceOther" />
      </div>
      <br />

      <label for="message">Add a message: (optional)</label><br />
      <v-textarea id="message" name="message" /><br />

      <v-btn type="submit">Submit</v-btn>
    </form>
    <div>
      <h2>All Enquiries:</h2>
      <a href="mailto:info@anomascakes.com.au">info@anomascakes.com.au</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const source = ref('')
</script>

<style scoped>
.order {
  margin: var(--default-margin-block) 30px;
  display: flex;
  gap: 40px;
}

.form {
  width: 800px;
}
</style>
