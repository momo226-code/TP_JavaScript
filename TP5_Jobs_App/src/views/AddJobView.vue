<template>

<div class="bg-light p-2 text-center " >  <h1>  Add a Job</h1> </div>

<div class="d-flex justify-content-center">
<form @submit.prevent="adding">

<div class="col mb-3 "> <label for=""><strong> Titre  </strong></label> <input v-model="add.title" type="text" class="form-control"   /> </div> 

<div class="col  mb-3 " ><label for=""><strong> Entreprise  </strong></label> <input v-model="add.company" type="text" class="form-control" />  </div>

<div class="col  mb-3 " ><label for=""> <strong> Location </strong> </label> <input v-model="add.location" type="text" class="form-control" /> </div> 



<div class="col  mb-3"> <label for=""> <strong> Salaire  </strong>  </label><input v-model="add.salary" type="text" class="form-control" /> </div>
  
<div class="col  mb-3 " > <label for=""> <strong>  Description  </strong></label> <textarea v-model="add.description" class="form-control"></textarea></div>

<div class="col  mb-3 " > <label for=""> <strong> Disponibilité </strong> </label>
    <select v-model="add.availability" class="form-select">
    <option value="open">Ouvert</option>
    <option value="closed">Fermé</option>
  </select>
</div>


<div class="col mb-3 " >
    <button type="submit" class="btn btn-primary">Enregistrer</button>
     <router-link to="/" class="btn btn-secondary ms-2">Annuler</router-link> 
</div>

</form>
</div>

</template>


<script setup> 


import { ref} from 'vue'
import { useRouter} from 'vue-router'
import jobs from '@/data/jobs.json'


const jobList = ref(jobs)
const router = useRouter()

const add =  ref ({
    id : jobList.value.length + 1,
    title: '',
    company: '',
    location: '',
    salary: '',
    description: '',
    availability: 'open',
})


const adding = () => {
    jobList.value.push(add.value)
    router.push('/')
}



</script>