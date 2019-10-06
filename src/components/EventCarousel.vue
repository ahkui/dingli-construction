<template>
  <section class="event-section">
    <div class="poster">DESIGNED FOR FUTURE</div>
    <div class="title">永不停止，思索 Volvo Cars 的下一步</div>
    <carousel :responsive="responsive">
      <div class="content">
        <div
          class="image bg-img"
          v-bind:style="`background-image:url('http://assets.volvocars.com/tw/~/media/taiwan/images/wuntw/homepage_201904/02_linkinggrid/01_1343x1080.jpg')`"
        >
          <img src />
        </div>
        <div class="title">The E.V.A Initiative</div>
        <div class="sub-title">分享 VOLVO 的研究成果，完備每個人的行車安全。</div>
        <div class="more">了解更多 ></div>
      </div>
      <div class="content">
        <div
          class="image"
          v-bind:style="`background-image:url('http://assets.volvocars.com/tw/~/media/taiwan/images/wuntw/homepage_201904/02_linkinggrid/02_4096x2304.jpg')`"
        ></div>
        <div class="title">Vision 2020</div>
        <div class="sub-title">在 2020 年之前，達到沒有人員因為乘坐 VOLVO 汽車而喪生或嚴重受傷。</div>
      </div>
    </carousel>
  </section>
</template>

<script>
// require styles
import carousel from 'vue-owl-carousel';

export default {
  components: {
    carousel,
  },
  data() {
    return {
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
</style>
