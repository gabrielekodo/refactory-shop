<template>
  <div class="container text-center">
    <h1 class="py-3">Meet our Alumni from the various cohorts.</h1>
<p class="lead">Our current cohort at the Catalyst consist of aspiring developers, UX designers, project managers and so much more. Read more about who they are and what they aspire to be.</p>
<h4>Want to register as an Alumni? </h4>
  
  <router-link to="/alumni/register"><a class="nav-link ">Fill this form</a></router-link>


<div class="container d-flex flex-wrap">
<AlumniCard ></AlumniCard>
<AlumniCard />
<AlumniCard />
<AlumniCard />
<AlumniCard />
<AlumniCard />

</div>







  </div>
</template>

<script>
import AlumniCard from './AlumniCard.vue'

export default {
    name:'AlumniSection',
   components:{
      AlumniCard,
    
    }

}
</script>

<style scoped>

</style>