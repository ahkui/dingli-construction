<template>
  <section class="banner">
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(data, index) in datas" v-bind:key="'banner-'+index">
        <div v-bind:style="`background-image:url('${data.image}')`" class="img swiper-lazy"></div>
        <div class="content">
          <div class="title">
            {{data.title}}
            <!-- <div class="sub-title">這是圖片的鏈接 {{image}}</div> -->
          </div>
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

import ReinforcingSteelImage from '../assets/鋼筋.jpg';

export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      datas: [{
        image: 'https://picsum.photos/id/498/1920/1080',
        title: '鼎秝建設',
      },
      {
        image: 'https://picsum.photos/id/867/1920/1080',
        title: '清水模',
      },
      {
        image: 'https://picsum.photos/id/485/1920/1080',
        title: '石材',
      },
      {
        image: 'http://www.semiflor.com.tw/upload/brand/03_德國強化木地板/KR_09.jpg',
        title: '木地板',
      },
      {
        image: 'https://cdn.ready-market.com/106/3a861c74//Templates/pic/Strongco-faq-12.jpg?v=83d77b3c',
        title: '不鏽鋼龍頭',
      },
      {
        image: ReinforcingSteelImage,
        title: '鋼筋',
      },
      {
        image: 'https://picsum.photos/id/783/1920/1080',
        title: '.',
      },
      {
        image: 'https://picsum.photos/id/785/1920/1080',
        title: '.',
      },
      {
        image: 'https://www.tesla.com/tesla_theme/assets/img/savings-calculator/modelx_white_wall_2x.jpg',
        title: '科技(電動車)',

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
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
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

@media screen and (max-width: 720px) {
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
.swiper-pagination {
  bottom: 1rem;
}
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
    background-color: rgba($color: #000000, $alpha: 0.2);
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    .title {
      color: white;
      font-weight: bold;
      font-size: calc(100vw * 0.05);
      position: relative;
      top: 30%;

      .sub-title {
        font-size: calc(100vw * 0.025);
        font-weight: normal;
      }
    }
  }

  @media screen and (max-width: 720px) {
    .img {
      height: 50%;
    }
    .content {
      background-color: black;
      height: 50%;
      position: relative;
      .title {
        color: white;
        font-weight: bold;
        font-size: calc(100vw * 0.08);
        // font-size: 1.5rem;
        position: relative;
        top: 30%;

        .sub-title {
          display: none;
        }
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

@media screen and (max-width: 720px) {
  .swiper-button-next,
  .swiper-button-prev {
    top: 25%;
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
