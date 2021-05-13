// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Blog',
      path: './content/blog/**/*.md',
      typeName: 'Blog',
      remark: {
        // remark options
      }
    }
  }, {
    use: '@gridsome/source-strapi',
    options: {
      apiURL: process.env.GRIDSOME_API_URL,
      queryLimit: 1000, // Defaults to 100
      contentTypes: ['Post', 'Tag'],
      singleTypes: ['setting'],
      // Possibility to login with a Strapi user,
      // when content types are not publicly available (optional).
      // loginData: {
      //   identifier: '',
      //   password: ''
      // }
    }
  }],
  transformers: {
    remark: {
      // global remark options
    }
  },
  templates: {
    // 这个名称和 Post 对应好即可: 值需要是一个 Array
    StrapiPost: [
      {
        path: '/post/:id',
        component: 'src/templates/Post.vue'
      }
    ],
    StrapiTag: [
      {
        path: '/tag/:id',
        component: 'src/templates/Tag.vue'
      }
    ]
  }
}
