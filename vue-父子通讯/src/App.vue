<template>
  <div id="app">
    <router-view :data="manInfo" @childEvent="person"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      manInfo: {
        name: "JackSon",
        age: 25,
        favorite: "banana"
      }
    }
  },
  methods: {
    person: function(value){
      console.log(value)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
