<template>
  <div class="order">
    <form
      action="/success"
      method="post"
      accept-charset="UTF-8"
      class="form"
      data-netlify="true"
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
      <a href="mailto:info@anomascakes.com">info@anomascakes.com</a>
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
  flex-wrap: wrap;
  gap: 40px;
  align-items: flex-start;
}

.form {
  width: min(100%, 860px);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 26px;
  box-shadow: 0 8px 24px rgba(22, 18, 17, 0.12);
}

.order label{
  color: var(--color-text-secondary);
  font-weight: 600;
}

.order v-text-field,
.order v-combobox,
.order v-textarea {
  margin-bottom: 1rem;
}

.order h2 {
  color: var(--color-heading);
}

.order a {
  color: var(--color-brand-primary);
  text-decoration: none;
}

.order a:hover {
  text-decoration: underline;
}

</style>
