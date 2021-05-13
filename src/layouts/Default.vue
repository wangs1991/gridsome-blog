<template>
  <div class="layout">
    <header class="header sticky" data-v-7e33895e>
      <div class="container" data-v-7e33895e>
        <div class="left" data-v-7e33895e>
          <g-link 
            aria-current="page"
            class="home-link active--exact active"
            data-v-7e33895e
            :to="{ path: '/' }"
          >
            <img
              :src="host + setting.logo.url"
              :alt="setting.name"
              class="logo"
              data-v-7e33895e
            />
          </g-link>
        </div>
        <nav class="nav right" data-v-7e33895e>
          <g-link
            class="nav__link"
            data-v-7e33895e
            :to="{ path: '/list' }"
          >Journal</g-link>
          <g-link
            :to="{ path: '/contact' }"
            class="nav__link"
            data-v-7e33895e
          >Say Hi!</g-link>
        </nav>
      </div>
    </header>
    <div class="container">
      <slot />
    </div>
    <footer class="footer" data-v-07acb5f8>
      <div class="container" data-v-07acb5f8>
        <span data-v-07acb5f8>{{ setting.copyright }}</span>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: 'DefaultLayout',
  computed: {
    setting () {
      return this.$page.Setting.edges[0].node
    }
  }
}
</script>

<style></style>
