import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventDetailsView from '../views/EventDetailsView.vue'
import Events from '../components/Events.vue'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetailsView,
    },
    {
      path: '/events/:page',
      component: Events,
      props: true,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      props: (route) => ({ showExtra: route.query.e }), //http://localhost:5173/home?e=1 to test it
      //Peu importe la valeur : si e existe, showExtra deviendra truthy → ça s’affiche.
    },
  ],
})

export default router
