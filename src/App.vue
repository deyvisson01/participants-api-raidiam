<template>
  <div id="app">
    <Login />
  </div>
</template>

<script>
    //<HelloWorld msg="Welcome to Your Vue.js App"/>
//import HelloWorld from './components/HelloWorld.vue'
import Login from './pages/Login/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
