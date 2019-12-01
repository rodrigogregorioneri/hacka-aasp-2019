<template>
  <div id="app">

   <navbar></navbar>
   <div class="container-fluid">
     <div class="row">
       <div class="col">
        <router-view/>
       </div>
    </div>
   </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'


export default {
  components:{
      Navbar
  },
  props: {
    msg: String
  }
}
</script>



<style>
body {
      background: #eeeeee !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.about{
  color: blue;
}

.bg-info{
    background-color: #673ab7 !important;
}

.home{
  color: red;
}

.color-button-question{
  background-color: green !important;
}
</style>
