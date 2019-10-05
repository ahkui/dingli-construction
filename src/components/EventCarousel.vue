<template>
  <div class="event-carousel">
    <carousel :responsive="responsive">
      <div class="content">
        <div
          class="image bg-img"
          v-bind:style="`background-image:url('http://assets.volvocars.com/tw/~/media/taiwan/images/wuntw/homepage_201904/02_linkinggrid/01_1343x1080.jpg')`"
        >
          <img src />
        </div>
        <div class="title">我是標題</div>
        <div class="sub-title">我是內文</div>
        <div class="sub-title">我是更多</div>
      </div>
      <div class="content">
        <div
          class="image"
          v-bind:style="`background-image:url('http://assets.volvocars.com/tw/~/media/taiwan/images/wuntw/homepage_201904/02_linkinggrid/02_4096x2304.jpg')`"
        ></div>
        <div class="title">我是標題</div>
        <div class="sub-title">我是內文</div>
        <div class="sub-title">我是更多</div>
      </div>

      <!-- <template #next>
      <ul>
        <li>next</li>
      </ul>
    </template>
    <template #prev>
      <ul>
        <li>prev</li>
      </ul>
      </template>-->
    </carousel>
  </div>
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
.event-carousel {
  width: calc(100% - (18px * 2));
  margin: 0 auto;

  // &:before{
  //   padding-top:35%;
  //   content:"";
  // }
  .content {
    // background-color: red;
    .image {
      width: 100%;
      padding-top: 48%;
    }
  }
}

@media screen and (max-width: 720px) {
  .event-carousel {
    width: 100%;
  }
}
</style>
