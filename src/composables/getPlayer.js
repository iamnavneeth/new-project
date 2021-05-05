import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
const getPlayer=(id)=>{
    const player=ref(null)
    const error=ref()

    const load=async()=>{
      try{
        let res= await projectFirestore.collection('players').doc(id).get()

        player.value={...res.data(), id:res.id}
        if(!res.exists){
          throw Error('That player does not exists')
        }
      }
      catch(err){
        error.value=err.message
        console.log(error.value)
      }
    }
    return{player,error,load}
}
export default getPlayer