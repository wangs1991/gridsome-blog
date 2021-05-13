<template>
  <Layout>
    <div data-v-78e0b360 class="container" style="margin-top: 80px;">
      <div data-v-78e0b360 class="contact-header">
        <h1 data-v-78e0b360 class="contact-title">Say hi!</h1>
        <p
          data-v-78e0b360
        >Leave me a note with any questions you might have, I'll get back to you as soon as possible.</p>
      </div>
      <form data-v-78e0b360 name="contact" class="contact-form" @submit.prevent="submitData">
        <div data-v-78e0b360 class="sender-info">
          <div data-v-78e0b360>
            <label data-v-78e0b360 for="name" class="label">Your name</label>
            <input data-v-78e0b360 type="text" name="name" v-model="name" required />
          </div>
          <div data-v-78e0b360>
            <label data-v-78e0b360 for="email" class="label">Your email</label>
            <input data-v-78e0b360 type="email" name="email" v-model="email" required />
          </div>
        </div>
        <div data-v-78e0b360 class="message">
          <label data-v-78e0b360 for="message" class="label">Message</label>
          <textarea data-v-78e0b360 name="message" required></textarea>
        </div>
        <button data-v-78e0b360 class="button">Submit form</button>
      </form>
    </div>
  </Layout>
</template>

<page-query>
query {
  Setting: allStrapiSetting {
    edges {
      node {
        name
        slogan
        subtitle
        copyright
        logo {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import axios from 'axios'

export default {
  name: 'NotePage',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    async submitData() {
      const { name, email, message } = this

      try {
        const { data } = await axios.post(this.host + '/messages', {
          name,
          email,
          message
        })

        if (data) {
          alert('提交成功')
          this.name = ''
          this.email = ''
          this.message = ''
        }
      } catch (e) {
        alert(e.toString())
      }
    }
  }
}
</script>

<style>
</style>