<template>
  <div >
    <h5 class="text-teacher text-muted">Professores Disponíveis</h5>
    <div class="row">
<!--
<div class="col-md-4">
  <b-card
    title="Card Title"
    img-src="https://camblyavatars.s3.amazonaws.com/5d98acbf361034ad257470efs400?h=2ec2356fdb59cb2ff0bb71f0a176e383"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
-->

<div class="col-md-4" v-bind:key="key" v-for="(item,key) in profissionais">
<div class="card" style="width: 18rem;">
  <img class="card-img-top" :src="item.foto" alt="Imagem de capa do card">
  <div class="card-body">
    <h5 class="card-title">{{ item.nome}}</h5>
    <h6 class="text-muted locale">{{item.localidade}}</h6>
    <p class="card-text bio">{{ item.curriculo}}</p>
  </div>
  <div class="card-body">
    <a href="#" v-b-modal.my-modal @click="getProfissional(item)" class="btn btn-profile card-link">PERFIL</a>
    <a href="#"   @click="pague()" class="btn btn-call card-link">PAGUE</a>

  </div>
</div>
</div>
<div>
  <!-- The modal -->

  <b-modal id="my-modal">
      <img class="card-img-top" :src="this.profissional.foto"  alt="Imagem de capa do card" style="border-radius:50%">
          <h5 class="modal-card-title"></h5>
    <h6 class="text-muted modal-locale">{{this.profissional.localidade}}</h6>
<h5 class="pd-10-0-0">Sobre o professor</h5>
<div class="video-container"><iframe width="853" height="480" :src="profissional.linkyoutube" frameborder="0" allowfullscreen></iframe></div>
<h5 class="pd-10-0-0">Introdução</h5>
<p>{{this.profissional.curriculo}}</p>
  <h6 class="pd-10-0-0">Educação</h6>
  <p>{{this.profissional.curriculo}}</p>
  <h6 class="pd-10-0-0">Experiência de ensino</h6>
  <p>{{this.profissional.experiencia}}</p>

  <p>Linkedin: <a :href="this.profissional.linkedin" target="_blank">{{this.profissional.linkedin}}</a> </p>
  <h6 class="pd-10-0-0">Experiência</h6>
  <p>{{this.profissional.profissao}}</p>
    <template v-slot:modal-footer="{ ok, cancel, hide }">
      <!-- Button with custom close trigger value -->
      <b-button class="call-in-profile" @click="chat()">
        CHAT
      </b-button>
    </template>
  </b-modal>
</div>
    </div>
    <footer class="footer">&copy; APRENDER DIREITO, 2019.</footer>
  </div>
</template>

<script>
// import Sidebar from './components/Sidebar.vue'

export default {
  name: 'Listprofissionais',
  components:{

  },
  data: function () {
    return {
      profissionais: [],
      profissional:{ 
          id:"",
          nome:"Juliana Paes",
          experiencia:"Direito Penal",
          foto:"https://upload.wikimedia.org/wikipedia/commons/c/cc/Juliana_Paes_no_Cafe_com_Gloria_06.jpg",
          estrelas:5,
          profissao:"Professor de Direito",
          curriculo:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          linkyoutube:"https://www.youtube.com/watch?v=D2-5QyYEmyQ",
          linkedin:"https://br.linkedin.com/in/rodrigogregorioneri",
          localidade:"São Paulo,Brasil",
          telefone:"11982405951",
          mensagens:[ 
            "Olá tudo bem"
          ] 
    }
      ,
      defaultFoto: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
    }
  },
  created() {
    this.getListProfissionais();
  },
  methods:{
      getListProfissionais: function(){
        this.$http.get('http://backaasp2019.herokuapp.com/hackathon/aasp/v1/profissionais').then((response) => {
          this.profissionais = response.data;
        })
      },
      getProfissional(profissiona){
          this.profissional = profissiona
      },
      pague(){
        this.$router.push({name:'pagamento'})
      },
      chat(){
        this.$router.push({name:'chatum'})
      }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.text-teacher {
  margin: 20px 10px;
  }
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.bg-info{
    background-color: #673ab7 !important;
}
.col-md-4 {
  width: auto;
  margin: auto;
}
.color-button-question{
  background-color:  green;
}
img {
  width: 100px;
  border-radius:8px;
}
.modal-card-title,
.card-title{
  position: absolute;
top: 20px;
    left: 130px;
    font-weight: bolder;
    color: rgba(0, 0, 0, 0.87);
    display: block;
    font-size: 18.5px;
    line-height: 22px;
}
.card {
  border: none;
    padding: 1rem;
    border-radius: 8px;
    margin: 10px auto 10px;
}
.modal-card-title {
  top: 52px;
}
.locale {
      position: absolute;
    left: 130px;
    top: 42px;
}
.modal-locale {
        position: absolute;
    left: 130px;
    top: 70px;
}
.bio {
  font-size: 14px;
    color: rgb(119, 119, 119);
    font-weight: 300;
    min-height: 105px;
}
.btn-profile {
  background-color: #ddd;
  font-size: 12px;
  color:rgba(0, 0, 0, 0.87);
      width: 40%;

}
.btn-call {
   background-color: #228891;
  font-size: 12px;
  color:white; 
      width: 40%;

}
.video-container {
position: relative;
padding-bottom: 56.25%;
padding-top: 30px; height: 0; overflow: hidden;
}
 
.video-container iframe,
.video-container object,
.video-container embed {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}
.call-in-profile {
   background-color: #228891;
  font-size: 12px;
  color:white; 
      width: 100%;
      border: 0;
    height: 40px;
}
.pd-10-0-0 {
  padding: 10px 0 0;
}
.footer {
  padding: 1rem 0 25px;
  text-align: center;
  color: #999;
  font-size: 12px;
}
</style>
