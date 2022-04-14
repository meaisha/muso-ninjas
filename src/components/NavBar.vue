<template>
  <div class="navbar">
    <nav>
      <h1>
        <img src="@/assets/ninja.png" />
        <router-link :to="{ name: 'home' }">Muso Ninjas</router-link></h1>
      <div class="links">
        <button @click="handleClick">Logout</button>
        <router-link class="btn" :to="{ name: 'signup' }">Sign up</router-link>
        <router-link class="btn" :to="{ name: 'login' }">Log in</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '@/composables/useLogout'
export default {
  setup() {
    const { error, logout, isPending } = useLogout()

    const handleClick = () => {
      logout()
      if(!error.value)
        console.log('Logged out.')
    }

    return { error, handleClick, isPending }
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