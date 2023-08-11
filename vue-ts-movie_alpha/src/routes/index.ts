import { createRouter, createWebHistory } from 'vue-router'
import MovieSwiper from '../components/MovieSwiper.vue'
import MovieContainer from '../components/MovieContainer.vue'
import SearchBar from '../components/SearchBar.vue'
import SearchContainer from '../components/SearchContainer.vue'
import WelcomeSign from '../components/WelcomeSign.vue'
import MovieDetail from '../components/MovieDetail.vue'
import LoadingAnimation from '../components/LoadingAnimation.vue'


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      components: {
        swiper: MovieSwiper,
        search1: SearchBar,
        welcome: WelcomeSign,
        loading: LoadingAnimation,
      },
    },
    {
      path: '/movies',
      components: {
        movies: MovieContainer,
        search2: SearchContainer,
        loading: LoadingAnimation
      },
    },
    {
      path: '/detail',
      components: {
        search2: SearchContainer,
        detail: MovieDetail,
        loading: LoadingAnimation,
      },
    }
  ]
})