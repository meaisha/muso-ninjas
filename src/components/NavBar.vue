<template>
  <div class="navbar">
    <nav>
      <h1>
        <img src="@/assets/ninja.png" />
        <router-link :to="{ name: 'home' }">Muso Ninjas</router-link>
      </h1>
      <div class="links">
        <span v-if="user">
          <router-link :to="{ name: 'create' }">Create Playlist</router-link>
          <button @click="handleClick">Logout</button>
        </span>
        <span v-else>
          <router-link class="btn" :to="{ name: 'signup' }">Sign up</router-link>
          <router-link class="btn" :to="{ name: 'login' }">Log in</router-link>
        </span>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'
import {ref} from '@vue/reactivity'
export default {
  setup() {
    const { error, logout, isPending } = useLogout()
    const router = useRouter()
    const { user } = getUser()
    const isLoggedIn = ref(false)

    const handleClick = () => {
      logout()
      if(!error.value) {
        console.log('Logged out.')
        router.push({ name: 'login' })
      }
        
    }

    return { error, handleClick, isPending, user }
  } 
}
</script>

<style scoped>
  .navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  nav img {
    max-height: 60px;
  }
  nav h1 {
    margin-left: 20px;
  }
  nav .links {
    margin-left: auto;
  }
  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }
</style>
© 2022 GitHub, Inc.