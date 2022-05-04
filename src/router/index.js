import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import SignupView from '../views/auth/SignupView.vue'
import CreatePlaylist from '../views/playlists/CreatePlaylist.vue'

import { auth } from '../firebase/config'

//auth guard
// also check the main.js for more info
const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  if(!user) {
    next({ name: 'login' })
  }
  else
    next()
}


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/playlists/create',
    name: 'create',
    component: CreatePlaylist,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
