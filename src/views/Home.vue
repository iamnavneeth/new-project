<template>
  <div class="home">
    <div v-if="error">
      {{error}}
    </div>
    <div v-if="players.length">
<postPlayers :players="players"/>
    </div>
    <div v-else>Loading....</div>
  </div>
</template>

<script>
import postPlayers from '../components/postPlayers.vue'
import getPlayers from '../composables/getPlayers'
export default {
  name: 'Home',
  components:{postPlayers},
 setup(){
   const { players,error,load}=getPlayers()
   load()
   return{players,error}
 }
}

</script>
<style>
.home{
  max-width:1200px;
  margin:0 auto;
  padding:10px;

}
</style>