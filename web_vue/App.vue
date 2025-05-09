<template>
  <MyHeader Name="SCUDERIA FERRARI" Legends="LEGENDS"/>
  <LegendsList :legends="legends"/>
</template>

<script>
  import MyHeader from './components/MyHeader.vue'
  import LegendsList from './components/LegendsList.vue'

  export default {
    name: 'App',
  //Step 2 register the component
    components:{
      MyHeader,
      LegendsList
    },

    data(){
    return {
      legends: []
    }
    },
    methods: {
      async fetchbook(){
        const res = await fetch("https://batman-final.up.railway.app/api")
        const data = await res.json()
        console.log(data)
        return data
      }

    },
    async created(){
      this.legends = await this.fetchbook()
    },

  }

</script>


<style>

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color:#2E2E2E;
    color:white;
  }

  .container {
    max-width: 400px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 0.3em solid black;
    padding: 30px;
    border-radius: 5px;
  }

  div{
    margin-bottom: 0em;
    text-align: center;
  }
  
</style>


