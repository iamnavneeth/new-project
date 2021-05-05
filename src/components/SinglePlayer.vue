<template>
<div class="post">
    <router-link :to="{name:'Details', params:{id:player.id}}"> 
<h3>{{player.name}}</h3>
    </router-link>

</div>
<div>
    <h4>{{player.country}}</h4>
    <h4>{{player.details}}</h4>
</div>
  
</template>

<script>
export default {
    props:['player']

}
</script>


<style scoped>
.post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
  }
  .post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
  }
  .post h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
  }
</style>

