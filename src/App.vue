<template>
  <div id="app">
    <img alt="Vue logo"
         src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <slide></slide>
  </div>
</template>

<script>
import slide from "./components/slide"
import HelloWorld from "./components/HelloWorld"
export default {
  name: 'app',
  components:{
    HelloWorld,
    slide
  },
  mounted () {
  }
}
</script>

<style>
body {
  background-color: #fff;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
