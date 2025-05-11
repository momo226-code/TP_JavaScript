<template>


<div class="bg-light p-2 text-center " >  <h1>  Modifier une offre </h1> </div>
    <div class="d-flex justify-content-center">
      <form @submit.prevent="edition">
        <div class="col  mb-3 "> <label for="">Titre </label> <input v-model="edit.title" type="text" class="form-control" /> </div> 
        <div class="col  mb-3" ><label for="">Entreprise</label> <input v-model="edit.company" type="text" class="form-control" />  </div>
    
        <div class="col mb-3"> <label for=""> Location </label> <input v-model="edit.location" type="text" class="form-control" /> </div> 

  
        
        <div class="col mb-3"> <label for=""> Salaire   </label><input v-model="edit.salary" type="text" class="form-control" /> </div>
          
        <div class="col  mb-3" > <label for=""> Description </label> <textarea v-model="edit.description" class="form-control"></textarea></div>
  
        <div class="col  mb-3" > <label for=""> Disponibilité</label>
            <select v-model="edit.availability" class="form-select">
            <option value="open">Ouvert</option>
            <option value="closed">Fermé</option>
          </select>
        </div>
  
        
        <div>
            <button type="submit" class="btn btn-primary">Enregistrer</button>
             <router-link to="/" class="btn btn-secondary ms-2">Annuler</router-link> 
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute , useRouter} from 'vue-router'
  import jobs from '@/data/jobs.json'
  
  const route = useRoute()
  const router = useRouter()
 
  const jobId = route.params.id
  const jobList = ref([...jobs])
  
  const edit = ref({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: '',
    availability: 'open',
  })
  
  onMounted(() => {
    const Editjob = jobList.value.find(j => j.id.toString() === jobId)
    if (Editjob) {
        Object.assign ( edit.value , Editjob)
    }
  })
  
  const edition = () => {
   const jobEdit  = jobList.value.find( j => j.id.toString() === jobId)

   if (jobEdit){
    Object.assign( jobEdit , edit.value )
    router.push('/')
   }
    
  }
  </script>
  