<template>
 
    <div v-for="legend of legends" :key="legend.id">
            <!-- <SingleLegend/> -->
            <SingleLegend :legend="legend"/>
    </div>
     
</template>
  
<script>
  
  import SingleLegend from './SingleLegend.vue'
  
   
  
  export default {
    name: 'LegendsList',
    components:{
      SingleLegend
    },
    props: {
        legends: Array
    }

  }
    
</script>
  
  
<style>
  
</style>