import { ref } from 'vue'
import { auth } from '../firebase/config'
import { onAuthStateChanged } from "firebase/auth";

const user = ref(auth.currentUser)

onAuthStateChanged(auth, (_user) => {
  if (_user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    user.value = _user
    console.log('User state change. Current user is:', _user)
  }
});

const getUser = () => {
  return { user }
}

export default getUser