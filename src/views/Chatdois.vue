<template>
  <div class="hello mt-3">
    <div class="row">
      <div class="col-md-10 container">
           <b-card
    
  >
<b-card
  >

   <div :class="getClass(messagem)" v-bind:key="key" v-for="(messagem,key) in listMessages">
    <span >{{ messagem.split(",")[1]}}: </span>
    <span>{{ messagem.split(",")[2]}}</span>
  </div>

  <!-- <div class="red">
    <span>Rodrigo: </span>
    <span>Olá tudo bem</span>
  </div> -->

  <!-- <div   v-bind:key="key" v-for="(messagem,key) in listMessages">
    {{messagem}}
  </div> -->
    
  </b-card>
  <div class="row">
  <div class="col-md-10 mt-2">
      <b-form-input
          id="input-1"
          v-model="message"
          type="email"
          required
          placeholder=""
        ></b-form-input>
  </div>
  <div class="col-md-2 mt-2">
    <b-button variant="success" @click="sendMessage()" style="border:none;background:#2b3b39"><font-awesome-icon icon="paper-plane" /></b-button>
  </div>
  </div>
  </b-card>
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
  created() {
    this.getListProfissionais();
    this.load();
  },
  data: function () {
    return {
      message:null,
      idProfissional: "5de375fc55e40400d05cacb2",
      listMessages: null
    }
  },
  methods:{
      getListProfissionais: function(){
        this.$http.get('http://backaasp2019.herokuapp.com/hackathon/aasp/v1/profissionais/listmessage/'+this.idProfissional).then((response) => {
          this.listMessages = response.data;
        })
      },
      getProfissional(profissiona){
          this.profissional = profissiona
          this.getListProfissionais();
      },
      getClass(payload){
            return payload.split(",")[0];
      },

      sendMessage(){
        this.$http.post('http://backaasp2019.herokuapp.com/hackathon/aasp/v1/profissionais/send/'+this.idProfissional, {
          mensagem: this.message,
          nome: "Juliana",
          type: "a2"
        })
        .then(() => {
          this.getListProfissionais();
        })
        .catch(()=> {
         this.getListProfissionais();
        });
      } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .a1{
      width:200px;
      height: 50px;
   background-color: #4dae8b;
    border-radius: 4px;
      margin: 10px;
 padding: 0.5rem;
    }

    .a2{
      width:200px;
      height: 50px;
background-color: #2b3b39;
color: white;
    border-radius: 4px;
      margin: 10px;
      padding: 0.5rem;
    }
</style>
