import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// global styles
import './assets/main.css'


// fixes the refresh page issue - goes to login page when you refresh the create playlist page
import { auth } from './firebase/config'
import { onAuthStateChanged } from "firebase/auth";

let app

onAuthStateChanged(auth, () => {
  if(!app) {
    app = createApp(App).use(router).mount('#app')
  }
});