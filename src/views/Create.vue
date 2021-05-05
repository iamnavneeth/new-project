<template>
  <div class="create">
      <form @submit.prevent="handleSubmit">
          <label>Player Name:</label>
          <input type="text" required v-model="name">
          <label>Country:</label>
          <input type="text" required v-model="country">
          <label>Player Details:</label>
          <textarea v-model="details"></textarea>   
          <button>Add Details</button>
      </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import { projectFirestore,} from '../firebase/config'
export default {
    setup(){
        const name=ref('')
        const country=ref('')
        const details=ref('')

  const router=useRouter()
    const handleSubmit=async()=>{
        const players={
            name:name.value,
            country:country.value,
            details:details.value,
        }
       const res= await projectFirestore.collection('players').add(players)
        router.push({name:'Home'})
    }

        return{name,country,details,handleSubmit}
    }

}
</script>

<style >
form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
</style>