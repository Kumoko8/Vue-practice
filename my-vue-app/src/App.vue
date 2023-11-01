<template>
<router-link to="/"> 
  <img alt="INVIZ logo" src="./assets/Logo.png">
</router-link>
  <HelloWorld msg="Welcome to INVIZ"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>


#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
  background-color: rgb(0, 155, 183);

}
</style>
