import { ref } from 'vue'
import { auth, db } from '../firebase/config'
import { collection, query, limit, getDocs, addDoc } from "firebase/firestore"


const useCollection = (collect) => {
  const error = ref(null)
  const isPending = ref(false)

  const addDocument = async (doc) => {
    console.log("doc: ", doc)
    error.value = null
    isPending.value = true

    try {
      await addDoc(collection(db, collect), doc);
      isPending.value = false
    }
    catch(err) {
      console.log(err)
      error.value="could not send the message"
      isPending.value = false
    }
  }
  return { error, addDocument, isPending }
}

export default useCollection