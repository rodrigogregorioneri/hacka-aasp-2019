<template>
  <div class="hello">
         <div class="row">
            <div class="col">
                <a href="https://aprenderdireito.jusblog.com/">
                <b-card
                                class="mb-2 mt-4"
                                img-src="https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/79214719_2973172582716014_4845086751884050432_n.jpg?_nc_cat=108&_nc_ohc=-Yq3NewLjYwAQk3Sc0pFGWf-thOqKn36Nii2LZ5373NRYMn_QPEOCggIw&_nc_ht=scontent-gru2-2.xx&oh=48405c9503be4c5371ecde7f7fdc47c0&oe=5E83D0BA"
                            >
                </b-card >
                </a>
            </div>
            <div class="col">
               <a href="https://aprenderdireito.jusblog.com/">
                <b-card
                                class="mb-2 mt-4"
                                img-src="https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/79214719_2973172582716014_4845086751884050432_n.jpg?_nc_cat=108&_nc_ohc=-Yq3NewLjYwAQk3Sc0pFGWf-thOqKn36Nii2LZ5373NRYMn_QPEOCggIw&_nc_ht=scontent-gru2-2.xx&oh=48405c9503be4c5371ecde7f7fdc47c0&oe=5E83D0BA"
                            >
                </b-card >
                </a>
            </div>
            <div class="col">
                <a href="https://aprenderdireito.jusblog.com/">
                <b-card
                                class="mb-2 mt-4"
                                img-src="https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/79214719_2973172582716014_4845086751884050432_n.jpg?_nc_cat=108&_nc_ohc=-Yq3NewLjYwAQk3Sc0pFGWf-thOqKn36Nii2LZ5373NRYMn_QPEOCggIw&_nc_ht=scontent-gru2-2.xx&oh=48405c9503be4c5371ecde7f7fdc47c0&oe=5E83D0BA"
                            >
                </b-card >
                </a>
            </div>
         </div>
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
