import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AboutMe from './views/AboutMe'
import Post from './views/Post'
import Contact from './views/Contact'
import NotFound from './views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'aboutme',
      component: AboutMe
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/post/:number',
      name: 'post',
      component: Post
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
