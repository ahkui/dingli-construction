<template>
  <section class="banner">
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(data, index) in datas" v-bind:key="'banner-'+index">
        <div v-bind:style="`background-image:url('${data.image}')`" class="img swiper-lazy"></div>
        <div class="content">
          <div class="title">{{data.title}}</div>
        </div>
        <!-- <img data-src="{{image}}" class="swiper-lazy" /> -->
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </section>
</template>

<script>
// require styles
// eslint-disable-next-line import/no-extraneous-dependencies
import 'swiper/dist/css/swiper.css';

import { swiper, swiperSlide } from 'vue-awesome-swiper';

import Banner1 from '../assets/banner/banner1.jpg';
import Banner2 from '../assets/banner/banner2.jpg';
import Banner3 from '../assets/banner/banner3.jpg';
import Banner4 from '../assets/banner/banner4.jpg';
import Banner5 from '../assets/banner/banner5.jpg';
import Banner6 from '../assets/banner/banner6.jpg';
import Banner7 from '../assets/banner/banner7.jpg';

export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      datas: [
        {
          image: Banner5,
          title: '鼎秝建設',
        },
        {
          image: Banner1,
          title: '鐵定心，把最好呈現給您。',
        },
        {
          image: Banner2,
          title: '建築，是一種生活藝術的總集。',
        },
        {
          image: Banner3,
          title: '將心予你。匠心求己。講安心，對每一個家。',
        },
        {
          image: Banner4,
          title: '安全，是家的根本，不是配備。',
        },
        {
          image: Banner5,
          title: '堅持的工法，是一種態度;設計，則豐富了建築。',
        },
        {
          image: Banner6,
          title: '執子之手，傳世承孝，百善之家。',
        },
        {
          image: Banner7,
          title: '親情，暖了手，也暖了家。',
        },
      ],
      swiperOption: {
        effect: 'fade',
        grabCursor: true,
        lazy: true,
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
};
</script>


<style lang="scss" scoped>
$banner_aspect-radio: 35%;
.banner {
  position: relative;
  padding-top: #{$banner_aspect-radio};
  width: 100%;
}

@media screen and (max-width: 767px) {
  .banner {
    padding-top: calc(#{$banner_aspect-radio} * 2);
  }
}
.swiper-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  // height: calc(100vw * 0.85);
}
// .swiper-pagination {
//   bottom: 1rem;
// }
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444 !important;
  position: relative;
  .img {
    height: 100%;
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .content {
    background-color: rgba($color: #ffffff, $alpha: 0.6);
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 0.5rem 1.2rem;
    .title {
      // font-weight: bold;
      font-size: 2rem;
      // font-size: calc(100vw * 0.045);
      position: relative;
      top: 30%;
      text-align: left;
    }
  }

  @media screen and (max-width: 767px) {
    .img {
      height: 75%;
    }
    .content {
      background-color: grey;
      height: 25%;
      position: relative;
      top: 0;
      right: 0;
      left: 0;
      margin: 0 auto;
      padding: initial;
      .title {
        text-align: center;
        color: white;
        // font-weight: bold;
        font-size: calc(100vw * 0.045);
        position: relative;
        // top: 38%;
      }
    }
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

@media screen and (max-width: 767px) {
  .swiper-button-next,
  .swiper-button-prev {
    top: 37.5%;
  }
}
</style>

<style lang="scss">
.swiper-pagination {
  span {
    background: lightgrey;
  }
}
</style>
