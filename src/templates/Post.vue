<template>
  <Layout>
    <div id="app" class="layout sticky-header">
      <div class="project" data-v-7f3c42a8>
        <div class="container" data-v-7f3c42a8>
          <div class="project-header" data-v-7f3c42a8>
            <h1 class="project-title" data-v-7f3c42a8>{{post.title}}</h1>
            <div class="project-info" data-v-7f3c42a8>
              <div class="categories-container" data-v-7f3c42a8>
                <div class="categories" data-v-7f3c42a8>
                  <span class="label" data-v-7f3c42a8>Categories</span>
                  <g-link
                    v-for="(slug, index) in post.tags"
                    :key="index"
                    :to="{ path: '/tag/' + slug.id }"
                  >
                    <span class="category" data-v-7f3c42a8>{{ slug.name }}</span>
                  </g-link>
                </div>
              </div>
              <div class="year-container" data-v-7f3c42a8>
                <span class="label" data-v-7f3c42a8>Published</span>
                <div data-v-7f3c42a8>{{ post.published_at | dateFmt('YYYY-MM-DD hh:mm') }}</div>
              </div>
            </div>
          </div>
          <div class="content" data-v-7f3c42a8>
            <p>
              <img class="g-image g-image--lazy" :src="host + post.cover.url" />
              <noscript>
                <img
                  class="g-image g-image--lazy g-image--loaded"
                  :src="host + post.cover.url"
                  width="2560"
                />
              </noscript>
            </p>
            <div v-html="content"></div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: strapiPost (id: $id) {
    title
    content
    published_at
    cover {
      url
    }
    tags {
      name
      id
    }
  },
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
import MarkdownIt from 'markdown-it'

export default {
  name: 'PostPage',
  computed: {
    post() {
      return this.$page.post
    },
    host() {
      return 'http://localhost:1337'
    },
    content() {
      console.log(this.post)
      return new MarkdownIt().render(this.post.content)
    }
  }
}
</script>

<style>
</style>