import { signOut } from 'firebase/auth'
import { ref } from 'vue'
import { auth } from '../firebase/config'
import getUser from '@/composables/getUser'

const error = ref(null)
const isPending = ref(false)

const logout = () => {
  error.value = null
  isPending.value = true
  const { user } = getUser()
  // try {
  //   const res = await signOut(auth)
  //   console.log(res)
  // } catch (err) {
  //   console.log(err.message)
  //   error.value = err.message
  // }

  signOut(auth).then(() => {
    console.log('signed out successfully')
    user.value = null
    isPending.value = false
  }).catch((error) => {
    // An error happened.
    console.log(err.message)
    error.value = err.message
    isPending.value = false
  });
}

const useLogout = () => {
  return { error, logout, isPending }
}

export default useLogout