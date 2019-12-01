import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Listprofissionais from '../views/Listprofissionais.vue'
import Chatum from '../views/Chatum.vue'
import Chatdois from '../views/Chatdois.vue'
import Pagamento from '../views/Pagamento.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Listprofissionais
  },
  {
    path: '/listprofissionais',
    name: 'listprofissionais',
    component: Home
  },
  {
    path: '/chatum',
    name: 'chatum',
    component: Chatum
  },
  {
    path: '/chatdois',
    name: 'chatdois',
    component: Chatdois
  },
  {
    path: '/pagamento',
    name: 'pagamento',
    component: Pagamento
  }
]

const router = new VueRouter({
  routes
})

export default router
