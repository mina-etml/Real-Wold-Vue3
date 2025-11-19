import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventDetails from '../views/event/Details.vue'
import EventRegister from '../views/event/Register.vue'
import EventEdit from '../views/event/Edit.vue'
import EventLayout from '../views/event/Layout.vue'
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
      path: '/about-us',
      name: 'About',
      component: AboutView,
      alias: '/about',
    },
    {
      path: '/events/:id',
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
    {
      path: '/event/:afterEvent(.*)',
      redirect: (to) => {
        return { path: '/events/' + to.params.afterEvent }
      },
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
