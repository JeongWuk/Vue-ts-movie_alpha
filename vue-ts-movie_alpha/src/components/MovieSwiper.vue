<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }"
    :modules="modules"
    :initialSlide="4"
    class="mySwiper">
    <swiper-slide
      ><img
        src="https://c4.wallpaperflare.com/wallpaper/763/245/276/suicide-squad-margot-robbie-dc-comics-harley-quinn-wallpaper-preview.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://c4.wallpaperflare.com/wallpaper/361/823/829/avengers-endgame-iron-man-robert-downey-jr-captain-america-chris-evans-hd-wallpaper-preview.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://c4.wallpaperflare.com/wallpaper/1022/525/87/movies-the-lord-of-the-rings-aragorn-viggo-mortensen-movie-posters-posters-the-return-of-the-king-entertainment-movies-hd-art-wallpaper-preview.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://c4.wallpaperflare.com/wallpaper/687/356/960/joker-2019-movie-joker-smile-digital-art-poster-hd-wallpaper-preview.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://c4.wallpaperflare.com/wallpaper/929/709/303/aquaman-dc-comics-justice-league-warner-brothers-wallpaper-preview.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://c4.wallpaperflare.com/wallpaper/175/302/384/dune-movie-movie-poster-hd-wallpaper-preview.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://c4.wallpaperflare.com/wallpaper/707/380/956/kung-fu-panda-3-animation-po-pandas-wallpaper-preview.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://c4.wallpaperflare.com/wallpaper/640/436/18/spider-man-peter-parker-tom-holland-marvel-cinematic-universe-marvel-comics-hd-wallpaper-preview.jpg"
    /></swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow } from 'swiper/modules'
import 'swiper/css'

const modules = [EffectCoverflow]
</script>

<style scoped lang="scss">
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: Appear 5s;

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 400px;

    img {
      display: block;
      width: 100%;
      border-radius: 20px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 1);
    }
  }
}
@keyframes Appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
