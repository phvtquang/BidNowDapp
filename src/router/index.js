import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListAuctionView from '../views/ListAuctionView.vue'
import MintNFTView from '../views/MintNFTView.vue'
import CreateAuctionView from '../views/CreateAuctionView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/auctionlist',
      name: 'auctionlist',
      component: ListAuctionView
    },

    {
      path: '/mintnft',
      name: 'mintnft',
      component: MintNFTView
    },

    {
      path: '/createauction',
      name: 'createauction',
      component: CreateAuctionView,
    },
  ]
})

export default router
