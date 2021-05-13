<template>
  <Layout>
    <div id="app" class="layout sticky-header">
      <div class="container">
        <div class="hero">
          <h1 class="hero-title">{{ setting.slogan }}</h1>
          <h2 class="hero-subtitle">{{ setting.subtitle }}</h2>
        </div>
        <div class="projects" data-v-50cbff3e>
          <div v-for="item in posts" :key="item.node.id" class="project" data-v-50cbff3e>
            <g-link class="project-link" data-v-50cbff3e :to="{ path: '/post/' + item.node.id }">
              <img
                :alt="item.node.cover.name"
                class="thumbnail g-image g-image--loaded"
                data-v-50cbff3e
                :src="host + item.node.cover.url"
                sizes="(max-width: 2560px) 100vw, 2560px"
              />
              <noscript data-v-50cbff3e>
                <img
                  :src="host + item.node.cover.url"
                  class="thumbnail g-image g-image--loaded"
                  width="2560"
                  alt="Banana"
                />
              </noscript>
              <h3 class="project-title" data-v-50cbff3e>{{item.node.title}}</h3>
            </g-link>
            <div class="categories" data-v-50cbff3e>
              <g-link
                v-for="(slug, index) in item.node.tags"
                :key="index"
                :to="{ path: '/tag/' + slug.id }"
              >
                <span class="category" data-v-50cbff3e>{{slug.name}}</span>
              </g-link>
            </div>
          </div>
        </div>
      </div>
      <div data-v-460714ac>
        <div class="latest-journals-heading container" data-v-460714ac>
          <span class="label" data-v-460714ac>RECOMMENDS</span>
        </div>
        <div class="latest-journals" data-v-460714ac>
          <div class="container" data-v-460714ac>
            <g-link
              v-for="(post, index) in recPosts"
              :key="index"
              :to="{ path: '/post/' + post.node.id }"
              class="journal"
              data-v-460714ac
            >
              <h3 class="journal-title" data-v-460714ac>{{ post.node.title }}</h3>
            </g-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  NewPost: allStrapiPost (
    sortBy: "updated_at",
    order: DESC,
    perPage: 4,
    page: 1
  ) {
    edges {
      node {
        id
        title
        isRecommend
         cover {
          url
          name
        }
        tags {
          id
          name
        }
      }
    }
  },
  RecPost: allStrapiPost (
    sortBy: "updated_at",
    order: DESC,
    filter: {
      isRecommend: {
        eq: true
      }
    },
    perPage: 4,
    page: 1
  ) {
    edges {
      node {
        id
        title
        isRecommend
      }
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
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  computed: {
    posts() {
      return this.$page.NewPost.edges
    },
    recPosts() {
      return this.$page.RecPost.edges
    },
    setting() {
      return this.$page.Setting.edges[0].node
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
