const axios = require('axios')

// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })
  /**
   * 添加博客数据
   */
  // api.loadSource(async ({addCollection}) => {
  //   const { data } = await axios.get('http://localhost:1337/posts')
  //   const collection = addCollection('Post')

  //   for (const item of data) {
  //     collection.addNode(item)
  //   }
  // })
  /**
   * 添加站点信息数据
   */
  // api.loadSource(async ({addCollection}) => {
  //   const {data} = await axios.get('http://localhost:1337/setting')
  //   const collection = addCollection('Setting')
    
  //   collection.addNode(data)
  // })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
