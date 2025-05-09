<template>
 
    <div :class="leg">
      <h2>Name : {{ legend.name }}</h2>
      <h2>Country : {{ legend.country }}</h2>
      <h2>Championships : {{ legend.championships }}</h2>
    </div>

    <div class="leg-ch">
        <h2>Years he won the Championship :</h2>
        <h2>
          <ul>
            <li v-for="(item, index) in legend.years" :key="index">{{ item }}</li>
          </ul>
        </h2>
    </div>

    <div :class="leg">
      <h2>Story : {{ legend.story }}</h2>
    </div>

    <div class="leg-info">
        <h2>Contributions :</h2>
        <h2>
          <ul>
            <li v-for="(item, index) in legend.contributions" :key="index">{{ item }}</li>
          </ul>
        </h2>

        <h2>Achievements :</h2>
        <h2>
          <ul>
            <li v-for="(item, index) in legend.achievements" :key="index">{{ item }}</li>
          </ul>
        </h2>
    </div>

</template>
  

<script>
  
  export default {
    name: 'SingleLegend',
    props: {
        legend:Array
    }

  }
  
</script>
  
  
<style scoped>
  
  div{
      background-color:#EF1A2D;
      color: black;
      text-align: left;
      text-align: justify;
      width: 90%;
      margin:auto;
      padding-left:1rem;
      padding-right:1rem;
  }

  .leg{
    margin-bottom:0;
    padding-left:rem;
  }

  .leg-info ul,.leg-ch ul {
    padding-left: 2rem;
    list-style-type: disc;
    text-align: left;
    margin-top:0;
  }

  .leg-info{
    margin-top:0;
    margin-bottom:2rem;
  }

  h2{
    padding-bottom:0.4rem;
    padding-top:0.4rem;
  }

</style>