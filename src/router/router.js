import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { 
        path: '/', 
        redirect: '/home',
    },
    {
        name:'home',
        path: '/home',
        component: () => import(/* webpackChunkName: "HomePage" */ '@/modules/pokemon/pages/ListPage')
    },
    { 
        name:'about',
        path: '/about', 
        component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage') 
    },
    { 
        path: '/pokemon/:id', 
        name: 'pokemon-id',
        component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
        props: (route) => {
            const { id } = route.params;
            return {
                id: isNaN(id) ? 1 : Number(id)
            }
        }
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "NotFoundPage" */ '@/modules/shared/pages/NoPageFound')
    },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  export default router;