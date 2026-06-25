<template>
  <div class="order">
    <form
      action="/success"
      method="post"
      accept-charset="UTF-8"
      novalidate
      class="form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="order"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="order" />
      <p class="honeypot">
        <label>
          Don't fill this out if you're human:
          <input v-model="botField" name="bot-field" autocomplete="off" tabindex="-1" />
        </label>
      </p>
      <label for="fname">First name:</label><br />
      <v-text-field
        id="fname"
        v-model="fname"
        name="fname"
        autocomplete="given-name"
        maxlength="50"
        required
        :error-messages="errors.fname ? [errors.fname] : []"
      /><br />

      <label for="lname">Last name:</label><br />
      <v-text-field
        id="lname"
        v-model="lname"
        name="lname"
        autocomplete="family-name"
        maxlength="50"
        required
        :error-messages="errors.lname ? [errors.lname] : []"
      /><br />

      <label for="email">Email:</label><br />
      <v-text-field
        id="email"
        v-model="email"
        name="email"
        type="email"
        autocomplete="email"
        maxlength="254"
        required
        :error-messages="errors.email ? [errors.email] : []"
      /><br />

      <label for="phone">Phone:</label><br />
      <v-text-field
        id="phone"
        v-model="phone"
        name="phone"
        type="tel"
        inputmode="tel"
        autocomplete="tel"
        maxlength="20"
        required
        :error-messages="errors.phone ? [errors.phone] : []"
      /><br />

      <label for="source">How did you find us?</label><br />
      <v-combobox
        id="source"
        name="source"
        v-model="source"
        :items="sourceOptions"
        maxlength="40"
        required
        :error-messages="errors.source ? [errors.source] : []"
      >
      </v-combobox>

      <div v-if="source === 'Other'">
        <label for="sourceOther">Please specify:</label><br />
        <v-text-field
          id="sourceOther"
          v-model="sourceOther"
          name="sourceOther"
          maxlength="80"
          :error-messages="errors.sourceOther ? [errors.sourceOther] : []"
        />
      </div>
      <br />

      <label for="message">Add a message: (optional)</label><br />
      <v-textarea
        id="message"
        v-model="message"
        name="message"
        maxlength="1000"
        :error-messages="errors.message ? [errors.message] : []"
      /><br />

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
import { useRouter } from 'vue-router'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_ALLOWED_REGEX = /^[0-9+\s().-]{8,20}$/
const NAME_REGEX = /^[\p{L}\p{M}][\p{L}\p{M}\s'-]{0,49}$/u

const sourceOptions = ['Facebook', 'Instagram', 'Web search', 'Word of Mouth', 'Other']

const fname = ref('')
const lname = ref('')
const email = ref('')
const phone = ref('')
const source = ref('')
const sourceOther = ref('')
const message = ref('')
const botField = ref('')

const errors = ref({
  fname: '',
  lname: '',
  email: '',
  phone: '',
  source: '',
  sourceOther: '',
  message: ''
})

const router = useRouter()

const sanitizeInput = (value: string, maxLength: number) => {
  return value
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength)
}

const escapeHtml = (value: string) => {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const encodeFormData = (payload: Record<string, string>) => {
  const params = new URLSearchParams()

  for (const [key, value] of Object.entries(payload)) {
    params.append(key, value)
  }

  return params.toString()
}

const validateForm = () => {
  errors.value = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    source: '',
    sourceOther: '',
    message: ''
  }

  const safeFName = sanitizeInput(fname.value, 50)
  const safeLName = sanitizeInput(lname.value, 50)
  const safeEmail = sanitizeInput(email.value, 254)
  const safePhone = sanitizeInput(phone.value, 20)
  const safeSource = sanitizeInput(source.value, 40)
  const safeSourceOther = sanitizeInput(sourceOther.value, 80)
  const safeMessage = sanitizeInput(message.value, 1000)

  fname.value = safeFName
  lname.value = safeLName
  email.value = safeEmail
  phone.value = safePhone
  source.value = safeSource
  sourceOther.value = safeSourceOther
  message.value = safeMessage

  if (!safeFName || !NAME_REGEX.test(safeFName)) {
    errors.value.fname = 'Enter a valid first name.'
  }

  if (!safeLName || !NAME_REGEX.test(safeLName)) {
    errors.value.lname = 'Enter a valid last name.'
  }

  if (!EMAIL_REGEX.test(safeEmail)) {
    errors.value.email = 'Enter a valid email address.'
  }

  const digitCount = safePhone.replace(/\D/g, '').length
  if (!PHONE_ALLOWED_REGEX.test(safePhone) || digitCount < 8 || digitCount > 15) {
    errors.value.phone = 'Enter a valid phone number.'
  }

  if (!sourceOptions.includes(safeSource)) {
    errors.value.source = 'Select a valid source option.'
  }

  if (safeSource === 'Other' && !safeSourceOther) {
    errors.value.sourceOther = 'Please specify how you found us.'
  }

  if (safeMessage.length > 1000) {
    errors.value.message = 'Message is too long.'
  }

  return !Object.values(errors.value).some(Boolean)
}

const handleSubmit = async () => {
  if (botField.value) {
    return
  }

  if (!validateForm()) {
    return
  }

  const payload = {
    'form-name': 'order',
    'bot-field': '',
    fname: escapeHtml(fname.value),
    lname: escapeHtml(lname.value),
    email: escapeHtml(email.value),
    phone: escapeHtml(phone.value),
    source: escapeHtml(source.value),
    sourceOther: source.value === 'Other' ? escapeHtml(sourceOther.value) : '',
    message: escapeHtml(message.value)
  }

  await fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: encodeFormData(payload)
  })

  await router.push('/success')
}
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

.honeypot {
  display: none;
}

.order a {
  color: var(--color-brand-primary);
  text-decoration: none;
}

.order a:hover {
  text-decoration: underline;
}

</style>
