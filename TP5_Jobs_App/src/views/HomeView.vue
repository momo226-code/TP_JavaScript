<template>

  <div  class="bg-light p-3 text-center" > <h1>Welcome Dear User </h1>

  <h3> Disponible Jobs </h3> </div>



  <div class="row" >
    <div class="bg-light p-1 text-center" >  <h4>Applique un filtre </h4> </div>
    <div  class="col-md-3 mb-3"> <label>Titre:</label><input v-model="filter.title" type="text" placeholder="Filtrer par titre" class="form-control" /> </div>
    <div class="col-md-3 mb-3" ><label>Entreprise:</label><input v-model="filter.company" type="text" placeholder="Filtrer par entreprise" class="form-control" /></div>
    <div class="col-md-3 mb-3"><label>Salaire:</label><input v-model="filter.salary" type="text" placeholder="Filtrer par salaire" class="form-control" /></div>
    <div class="col-md-3 mb-3"><label>Lieu:</label><input v-model="filter.location" type="text" placeholder="Filtrer par lieu" class="form-control" /></div> 

  </div>
<div class="row justify-content-center">
  <div> 
    <ul v-for ="job in filteredJob" :key="job.id"  class="text-center list-unstyled mb-4 p-3 border rounded"> 
      <li >  {{ job.title }} </li>
      <li>  {{ job.company}} </li>
      <li>  {{ job.salary }} </li>
      <li>  {{ job.location }} </li>
      <router-link :to="`/details/${ job.id }`" class="btn btn-info  ms-2"> Voir Details </router-link>
      <router-link :to ="`/jobs/${ job.id }`" class="btn btn-secondary ms-2"> Edit </router-link>
      <button class="btn btn-danger" @click ="deleteJob(job.id)"> Delete</button>
  </ul>
  </div>
  
 
  </div>
  <div class="text-center my-3"> <router-link :to="`/add`" class="btn btn-success">Add a Job</router-link> </div>

</template>



<script setup>


import { computed, ref } from 'vue'
import jobs from '@/data/jobs.json'
const jobList = ref(jobs) // Crée une copie réactive du tableau original



const filter = ref ({
    title: '',
    company: '',
    location: '',
    salary: '',
})



const deleteJob = (jobId) => {
  if (confirm("Are you sure you want to delete this job?")) {
    jobList.value = jobList.value.filter(job => job.id !== jobId)
    // Optionnel : Sauvegarder dans localStorage ou API ici
    console.log('Job deleted:', jobId)
  }
}




const filteredJob = computed(() => {
  return jobList.value.filter(job => {
    return (
      (job.title.toLowerCase().includes(filter.value.title.toLowerCase())) &&
      (job.company.toLowerCase().includes(filter.value.company.toLowerCase())) &&
      (job.salary.toString().includes(filter.value.salary)) &&
      (job.location.toLowerCase().includes(filter.value.location.toLowerCase()))
    )
  })
})

</script>

