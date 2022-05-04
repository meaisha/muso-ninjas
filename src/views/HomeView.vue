<template>
  <div class="home">
    <p>Homepage</p>
    <div class="error">
      {{ error }}
    </div>
    <div v-if="documents">
    <list-view :playlists="documents" />
    </div>
   
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
import ListView from '@/components/ListView.vue'
export default {
  name: 'HomeView',
  components: { ListView },
  setup() {
    const { error, documents } = getCollection('playlists')

    return { error, documents }
  }
}
</script>
