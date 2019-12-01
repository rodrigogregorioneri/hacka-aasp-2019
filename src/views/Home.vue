<template>
  <div class="hello">
           <b-card
      header-tag="header"
      footer-tag="footer"
    >
      <b-card-text>Header and footers using props.</b-card-text>
    </b-card>
  </div>
</template>

<script>
// import Sidebar from './components/Sidebar.vue'

export default {
  name: 'Home',
  components:{

  },
  props: {
    msg: String
  },
  methods:{
    goToAbout() {
      this.$router.push({name:'about'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {

}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;

}
a {
  color: #42b983;
}



.color-button-question{
  background-color:  green;
}
</style>
