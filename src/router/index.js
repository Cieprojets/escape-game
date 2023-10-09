import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'


const  routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/salleRepos',
      name: 'Salle de Repos',
      component: () => import('../views/BreakRoomView.vue')
    },
    {
      path: '/bureauRH',
      name: 'Bureau des HR',
      component: () => import('../views/HROfficeView.vue')
    },
    {
      path: '/bureauPDG',
      name: 'Bureau du PDG',
      component: () => import('../views/OfficePDGView.vue')
    },
    {
      path: '/salleReunion',
      name: 'Salle de reunion',
      component: () => import('../views/MeetingRoomView.vue')
    },
    {
      path: '/reglesJeu',
      name: 'Régles du jeu',
      component: () => import('../views/GameRulesView.vue')
    }
    
  ]


const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router
