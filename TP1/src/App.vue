
<template>

  <p>Exercice1</p>
  <h1> {{ titre }}</h1>
  <button @click="clique()"> "Cliquez moi !!" </button>
<p>Exercice2</p>
  <div>
    <button @click="incrementer()">+ +</button> {{ compteur }}  <button @click="decrementer()">- -</button>
  </div>




<p>Exercice3</p>
<input type="text" v-model="texte" @input="verifier">
<p v-if="space">Vous aviez mis un espace !</p>

<p>Exercice4</p>


<ul>
  <li>Couleur de la police :</li>
  
      <div><label for="">Rouge</label><input type="radio" v-model="couleur" value="red" id="red"></div>
      
      <div><label for="">Bleu</label><input type="radio" v-model="couleur" value=blue id="blue"></div>
  <li>Afficher/cacher le paragraphe? <input type="checkbox" v-model="para"></li>
</ul>

<p  v-bind:style="{color:couleur}" v-if="para">
  Dieu merci pour tout ce qu'il a fait pour moi jusque maintenant
  je sais que la vie d'ici bas est un enfer pour le croyant et un paradis pour le mecrean
</p>

</template>

<script>

export default {
  data(){
    return{
      titre : "Cliquez moi !!" ,
      compteur : 0,
      texte:'',
      space :false ,
     couleur:'' ,
      para:false 
    } ;
  },
  methods:{
    verifier(){
      if(this.texte.includes(' ')){
        this.space=true ;
      }else{
        this.space=false ;
      }
    } , 

    clique(){
      this.titre = "Cliqué!" ; 
    } ,

    incrementer(){
      this.compteur ++ ;
    } ,

    decrementer(){
      this.compteur--; 
    }

  }
}

</script>


<style>

</style>
