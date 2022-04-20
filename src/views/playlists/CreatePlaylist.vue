<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create New Playlist</h4>
    <input type="text" v-model="title" placeholder="Playlist title" required /> 
    <textarea v-model="description" placeholder="Playlist description" required></textarea>
    <label>Upload playlist cover image</label>
    <!-- Upload playlist image -->
    <input type="file" />
    <button>Create</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {

  setup() {
    const title = ref('')
    const description = ref('')

    const handleSubmit = () => {
      console.log(title.value, description.value)
    }

    return { title, description, handleSubmit }
  }

}
</script>
<style>
  form {
    background: white;
  }
  input[type="file"] {
    border: 0;
    padding: 0;
  }
  label {
    font-size: 12px;
    display: block;
    margin-top: 30px;
  }
  button {
    margin-top: 20px;
  }
</style>