import { ref } from 'vue'
import {projectFirestore} from '../firebase/config'
const getPlayers=()=>{
    const players=ref([])
    const error=ref()

    const load = async () => {
      try {
        const res = await projectFirestore.collection('players')
        .get()
        // console.log(res.docs)
  
        players.value = res.docs.map(doc => {
          // console.log(doc.data())
          return { ...doc.data(), id: doc.id }
        })
      }
      catch(err) {
        error.value = err.message
      }
    }
  
    return { players, error, load }
  }
  
  export default getPlayers