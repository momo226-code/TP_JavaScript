<template>

    
<div class="bg-light p-2 text-center " >   <h1>Job Details </h1> </div>

    <div v-if="j"  class="row d-flex justify-content">

      <div> <h2>{{ j.title }}</h2>  </div>
      <div> <h4>{{ j.company }}</h4> </div>
      <div class="col-md-3 mb-3" ><strong>Lieu :</strong> {{ j.location }} </div>
      <div class="col-md-3 mb-3" > <strong>Salaire :</strong> {{ j.salary }}  </div>
      <div class="col-md-3 mb-3">  <strong>Description :</strong> {{ j.description }}</div>

      <div class="col-md-3 mb-3" > <p><strong>Compétences :</strong></p> 
      <ul> 
        <li v-for="skill in j.skills" :key="skill">{{ skill }}</li>
      </ul>   
    </div>

         <div class="text-center my-3"> <router-link :to="`/`" class="btn btn-primary">Retour</router-link> </div>

    </div>

    

    



</template>

<script setup>

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import jobs from '@/data/jobs.json' 



const route = useRoute()
const jobId = route.params.id
const j= ref(null)

onMounted(() => {
  j.value = jobs.find(j => j.id.toString() === jobId)
})




</script>