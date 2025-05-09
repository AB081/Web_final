<template>
  <h1 class="header1"> {{ Name }}</h1>
  <h2 class="header2"> {{ Legends }}</h2>
</template>
  
<script>
  
  
  
  export default {
    name: 'MyHeader',
    props: {
        Name: String,
        Legends: String
    }
    
  }  

</script>
  
  
<style>

  .header1{
    color:#00A551;
    padding:1rem;
    font-size:3rem;
  }

  .header2{
    color:#FFF200;
    padding:1rem;
    font-size:3rem;
  }

  
  </style>