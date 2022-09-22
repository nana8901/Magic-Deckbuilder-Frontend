import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogoutView from '../views/LogoutView.vue'
import DecksIndex from '../views/DecksIndex.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import CardsIndex from '../views/CardsIndex.vue'
import CardsShow from '../views/CardsShow.vue'
import DecksShow from '../views/DecksShow.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {path: '/logout', name: 'logout', component: LogoutView},
  {path: '/decks', name: 'decks', component: DecksIndex},
  {path: '/login', name: 'login', component: LoginView},
  {path: '/signup', name: 'signup', component: SignupView},
  {path: '/cards', name: 'cards', component: CardsIndex},
  {path: '/cards/:id', name: 'cardsshow', component: CardsShow},
  {path: '/decks/:id', name: 'decksshow', component: DecksShow},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
