<template>
  <Layout>
    <div id="app" class="layout sticky-header">
      <div data-v-da896d1e class="container">
        <div data-v-da896d1e class="journal-hero">
          <div class="categories" data-v-50cbff3e>
            <g-link
              v-for="tag in $page.Tags.edges"
              :key="tag.node.id"
              :to="{ path: '/tag/' + tag.node.id }"
              style="margin: 0 10px;"
              :class="{ active: $route.params.id === tag.node.id }"
            >
              <span class="category" data-v-50cbff3e>{{tag.node.name}}</span>
            </g-link>
          </div>
        </div>
      </div>

      <g-link
        v-for="item in $page.Tag.posts"
        :key="item.id"
        data-v-da896d1e
        class="journal-post"
        :to="{ path: '/post/' +  item.id }"
      >
        <div data-v-da896d1e class="container journal">
          <h2 data-v-da896d1e class="journal-title">{{ item.title }}</h2>
          <p data-v-da896d1e class="journal-excerpt" style="text-align: right;">
            <span class="category" data-v-7f3c42a8>{{ $page.Tag.name }}</span>
            | {{item.published_at | dateFmt('YYYY-MM-DD hh:mm')}}
          </p>
        </div>
      </g-link>
      <!--  <Pager class="pagination" :info="$page.Post.pageInfo" /> -->
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  Tags: allStrapiTag {
    edges {
      node {
        id
        name
      }
    }
  },
  Tag: strapiTag (
    id: $id
  ) {
    name
    posts {
      id
      title
      published_at
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
  name: 'TagPage',
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

<style scoped>
.categories a {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 3px;
  line-height: 1.5;
  text-decoration: none;
  background: #d6d6d6;
}
.categories a.active {
  color: #fff;
  background-color: #e85f0e;
}
</style>
