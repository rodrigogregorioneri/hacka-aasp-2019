<template>
<div>
    
<b-card


    class="card-perfil"

  >
  <b-col  >
        <b-card-img src="https://avatars3.githubusercontent.com/u/9269696?s=460&v=4" ></b-card-img>
      </b-col>
  <template v-slot:header>
      <h4 class="mb-0">Meu Perfil</h4>
    </template>
    <div>
      <span>
        <h5>Rodrigo Gregorio Neri</h5>
        <p>Member Gold</p>
      </span>
    </div>
    

  </b-card>
    <b-card
    title="Em destaque"
    
  >
      <b-list-group>
      <b-list-group-item>O que direito Constitucional e o que aborda ?</b-list-group-item>
      <b-list-group-item>O que é direito ?</b-list-group-item>
      <b-list-group-item>O que faz um advogado ?</b-list-group-item>
      <b-list-group-item>Como ser um advogado ?</b-list-group-item>
      <b-list-group-item>Como seguir na area de direito ?</b-list-group-item>
    </b-list-group>
  </b-card>
</div>
</template>
<script>
export default {
  name: 'Sidebarright',
  components: {
  },
  data: () => {
    return { itemsCount: 42 }
  }
}
</script>

<style scoped>
  .card-perfil{
    margin-bottom: 10px;
  }
</style>