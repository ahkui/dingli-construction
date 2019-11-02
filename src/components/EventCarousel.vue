<template>
  <section class="event-section">
    <div class="poster">DESIGNED FOR FUTURE</div>
    <div class="title">永不停止，思索 Volvo Cars 的下一步</div>
    <carousel :responsive="responsive">
      <div class="content">
        <div class="image bg-img" v-bind:style="`background-image:url('${NewParkImage}')`"></div>
        <div class="title">裝修部</div>
        <!-- <div class="sub-title">-</div> -->
        <!-- <div class="more">了解更多 ></div> -->
      </div>
      <div class="content">
        <div
          class="image"
          v-bind:style="`background-image:url('http://assets.volvocars.com/tw/~/media/taiwan/images/wuntw/homepage_201904/02_linkinggrid/02_4096x2304.jpg')`"
        ></div>
        <div class="title">社會責任與服務</div>
        <!-- <div class="sub-title">在 2020 年之前，達到沒有人員因為乘坐 VOLVO 汽車而喪生或嚴重受傷。</div> -->
      </div>
    </carousel>
  </section>
</template>

<script>
// require styles
import carousel from 'vue-owl-carousel';

// import DecorationImage from '../assets/裝修部.jpg';
import NewParkImage from '../assets/6x3m_帆布.jpg';


export default {
  components: {
    carousel,
  },
  data() {
    return {
      // DecorationImage,
      NewParkImage,
      responsive: {
        0: { items: 1, nav: false },
        720: {
          items: 2,
          nav: false,
          dots: false,
          margin: 24,
          // freeDrag: true,
          // dragEndSpeed: false,
          // pullDrag: false,
          // autoWidth: true,
        },
      },
    };
  },
};
</script>


<style lang="scss">
.event-section {
  padding-top: 3rem;
  padding-bottom: 2.5rem;
  max-width: 1280px;
  width: calc(100% - (18px * 2));
  margin: 0 auto;

  > .title {
    margin: 0.8rem 0.5rem 2.5rem 0.5rem;
    // margin-top: 0.5rem;
    // margin-bottom: 2rem;
    font-size: 1.5rem;
  }

  > .poster {
    // margin-top: 0.5rem;
    // margin-bottom: 2rem;
    font-size: 90%;
  }

  @media screen and (min-width: 1600px) {
    > .title {
      font-size: calc(100vw * 0.013);
    }

    > .poster {
      font-size: calc(100vw * 0.01);
    }
  }

  // &:before{
  //   padding-top:35%;
  //   content:"";
  // }
  .content {
    // background-color: red;
    .image {
      width: 100%;
      padding-top: 56.25%;
    }

    .title,
    .sub-title {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .title {
      margin-top: 2rem;
      font-weight: bold;
      font-size: 1.4rem;
    }

    @media screen and (min-width: 1600px) {
      .title {
        font-size: calc(100vw * 0.012);
      }
    }

    .sub-title {
      margin-top: 1rem;
      font-size: 1rem;
    }

    .more {
      color: blue;
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
    }
  }
}

@media screen and (max-width: 720px) {
  .event-section {
    width: 100%;
  }
}

@media screen and (min-width: 1600px) {
  .event-section {
    max-width: calc(100vw * 0.7);
  }
}
</style>
