import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

import newsList from './components/news/newsLIst.vue'
import newsInfo from './components/news/newsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer },
        { path: '/home/news', component: newsList },
        { path: '/home/newsInfo/:id', component: newsInfo },
        { path: '/home/PhotoList', component: PhotoList },
        { path: '/home/PhotoInfo/:id', component: PhotoInfo },
        { path: '/home/GoodsList', component: GoodsList },
    ],
    linkActiveClass: 'mui-active'
})


export default router