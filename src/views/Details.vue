<template>
  <div v-if="error">{{error}}</div>
  <div v-if="player" class="post">
      <h3>{{player.name}}</h3>
      <p class="pre">{{player.details}}</p>
      <button @click="handleDelete" class="delete">Delete Player</button>
  </div>

</template>

<script>
import { useRouter } from 'vue-router'
import getPlayer from '../composables/getPlayer'
import getPlayers from '../composables/getPlayers'
import { projectFirestore } from '../firebase/config'
export default {
    props:['id'],
    setup(props){
        const router=useRouter()
        const {player,error,load}=getPlayer(props.id)

        const handleDelete= async ()=>{
            await projectFirestore.collection('players').doc(props.id).delete()
            router.push('/')
        }
    load()
    return{player,error,handleDelete}
    }
}
</script>

<style>
.post{
    max-width:1200px;
    margin: 0 auto;
}
.post p{
    color:#444;
    line-height: 1.5em;
    margin-top:40px;
}
.pre{
    white-space: pre-wrap;
}
.delete{
    margin:10px auto;
}
</style>