import { ref } from 'vue'
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";

const error = ref(null)
const isPending = ref(false)

const signup = async (email, password, displayName) => {
  error.value = null
  isPending.value = true
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    if(!res) throw new Error('Could not complete the signup')
    
    //res.user.updateProfile({ displayName })
    updateProfile(res.user, { displayName })
    
    error.value = null
    isPending.value = false
    
    return res
    //console.log(auth.currentUser)
  }
  catch(err) {
    console.log(err.message)
    error.value = err.message
    isPending = false
  }
}

const useSignup = () => {
  
  return { error, signup, isPending }
}

export default useSignup