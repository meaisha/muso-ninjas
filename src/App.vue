<template>
  <div class="content">
    <NavBar />
    <router-view/>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: { NavBar }
}
</script>
<style>
  .content {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 20px;
  }
</style>
