<template>
  <Layout>
    <div id="app" class="layout sticky-header">
      <div data-v-da896d1e class="container">
        <div data-v-da896d1e class="journal-hero">
          <h1 data-v-da896d1e class="journal-header">a wise person once said...</h1>
        </div>
      </div>

      <g-link
        v-for="item in posts"
        :key="item.node.id"
        data-v-da896d1e
        class="journal-post"
        :to="{ path: '/post/' +  item.node.id }"
      >
        <div data-v-da896d1e class="container journal">
          <h2 data-v-da896d1e class="journal-title">{{ item.node.title }}</h2>
          <p data-v-da896d1e class="journal-excerpt" style="text-align: right;">
            <g-link
              v-for="(slug, index) in item.node.tags"
              :key="index"
              :to="{ path: '/tag/' + slug.id }"
            >
              <span class="category" data-v-7f3c42a8>{{ slug.name }}</span>
            </g-link>
            | {{item.node.published_at | dateFmt('YYYY-MM-DD hh:mm')}}
          </p>
        </div>
      </g-link>
      <Pager class="pagination" :info="$page.Post.pageInfo" />
    </div>
  </Layout>
</template>


<page-query>
query ($page: Int) {
  Post: allStrapiPost (
    sortBy: "updated_at",
    order: DESC,
    perPage: 8,
    page: $page
  ) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        tags {
          name
        }
        published_at
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
import { Pager } from 'gridsome'

export default {
  name: 'ListPage',
  computed: {
    posts() {
      return this.$page.Post.edges
    }
  },
  components: {
    Pager
  }
}
</script>

<style>
</style>
