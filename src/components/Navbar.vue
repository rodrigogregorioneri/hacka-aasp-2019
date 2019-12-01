<template>
<div class="bg-info">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand @click="backHome()" href="#">Aprender &bull; Direito   <font-awesome-icon icon="balance-scale" /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>

        
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">  
        <b-nav-form>
          <b-button size="sm" class="my-2 my-sm-0 bg-success register-button mr-2" @click="chatDois()" type="submit"><font-awesome-icon icon="bell" /></b-button>
          <b-button size="sm" class="my-2 my-sm-0 bg-danger register-button" to="/pagamento" type="submit">ASSINAR</b-button>
      <img src="https://s.cdpn.io/profiles/user/103173/512.jpg?1557945218" width="40px" class="rounded-circle img-profile" alt="Cinque Terre">
        </b-nav-form>

        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

        <!-- <b-nav-item-dropdown right>

          <template v-slot:button-content>
            <em>User</em>

        </b-nav-item-dropdown> -->

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
  name: 'Navbar',
  components: {
  },
  methods: {
    goToAbout: function () {
       this.$router.push({name:'/'})
    },
    chatDois: function(){
      this.$router.push({name:'chatdois'})

    },
    backHome: function(){
      this.$router.push({name:'home'})

    }
  },
  data: () => {
    return { itemsCount: 42 }
  }
}
</script>

<style scoped>
.bg-info{
  background: #4dae8b;  /* fallback for old browsers */
  background: linear-gradient(to right, #2b3b39, #9df1d3, #4dae8b);
}
.register-button {
  border: none;
  padding-left: 16px;
  padding-right: 16px;
}
.img-profile {
  margin-left: 20px;
} 
</style>