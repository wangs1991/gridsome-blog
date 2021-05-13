// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import dayjs from 'dayjs'
import DefaultLayout from '~/layouts/Default.vue'
import './assets/styles/theme.css'
import './assets/styles/custom.css'

export default function (Vue, { router, head, isClient }) {
  Vue.prototype.host = process.env.GRIDSOME_API_URL
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // 注册filter
  Vue.filter('dateFmt', function (value, f) {
    return dayjs(value).format(f)
  })
}
