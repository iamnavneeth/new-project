<template>
<div class="post">
 <div class="posts" v-for="player in players" :key="player.id">
      <SinglePlayer :player="player" />
</div>
</div>
 
</template>

<script>
import SinglePlayer from '../components/SinglePlayer.vue'
export default {
    props:['players'],
    components:{SinglePlayer},
    setup(){
       
    }

}
</script>

