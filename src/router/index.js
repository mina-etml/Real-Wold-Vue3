import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
//import EventDetailsView from '../views/EventDetailsView.vue'
import EventDetails from '../views/event/Details.vue'
import EventRegister from '../views/event/Register.vue'
import EventEdit from '../views/event/Edit.vue'
import EventLayout from '../views/event/Layout.vue'
//import Events from '../components/Events.vue'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
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
      name: 'EventLayout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'EventDetails',
          props: true,
          component: EventDetails,
        },
        {
          path: 'register',
          name: 'EventRegister',
          props: true,
          component: EventRegister,
        },
        {
          path: 'edit',
          name: 'EventEdit',
          props: true,
          component: EventEdit,
        },
      ],
    },
    // {
    //   path: '/events/:page',
    //   component: Events,
    //   props: true,
    // },
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
