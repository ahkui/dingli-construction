<template>
  <div>
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(image, index) in images" v-bind:key="image+'-'+index">
        <div v-bind:style="`background-image:url('${image}')`" class="img swiper-lazy"></div>
        <!-- <img data-src="{{image}}" class="swiper-lazy" /> -->
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
// require styles
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      images: [
        "https://picsum.photos/id/498/1920/1080",
        "https://picsum.photos/id/867/1920/1080",
        "https://picsum.photos/id/485/1920/1080",
        "https://picsum.photos/id/591/1920/1080",
        "https://picsum.photos/id/826/1920/1080",
        "https://picsum.photos/id/648/1920/1080",
        "https://picsum.photos/id/783/1920/1080",
        "https://picsum.photos/id/785/1920/1080",
        "https://picsum.photos/id/485/1920/1080",
        "https://picsum.photos/id/294/1920/1080"
      ],
      swiperOption: {
        effect: "fade",
        grabCursor: true,
        lazy: true,
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>


<style lang="scss" scoped>
.swiper-container {
  height: 100vh;
}
.swiper-pagination {
  bottom: 1rem;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444 !important;
  .img {
    height: 100%;
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
.swiper-button-next,
.swiper-button-prev {
  opacity: 0.45;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
    // background: #444 !important;
  }
}
</style>
