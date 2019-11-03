<template>
  <section>
    <modal
      name="example"
      :width="300"
      :height="300"
      @before-open="beforeOpen"
      @before-close="beforeClose"
    >
      <b>{{time}}</b>
    </modal>
    <div class="bg-img feature-wrapper">
      <div class="row">
        <div class="col col-2">
          <div class="bg-img feature" v-bind:style="`background-image:url('${NewCaseImage}')`">
            <h1 class="title">新建案資訊</h1>
            <div class="overlay">
              <div class="overlay-content">
                <div class="overlay-title">
                  <h2>新建案資訊</h2>
                </div>
                <div class="overlay-infomation">
                  <p>- 新建案資訊 -</p>
                </div>
                <div class="overlay-more">
                  <a class="overlay-more" @click="showDynamicRuntimeModal()">了解更多</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row row-2">
            <div class="bg-img feature" v-bind:style="`background-image:url('${StructureImage}')`">
              <h1 class="title">結構</h1>
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-title">
                    <h2>結構</h2>
                  </div>
                  <div class="overlay-infomation">
                    <p>- 結構 -</p>
                  </div>
                  <div class="overlay-more">
                    <a class="overlay-more" @click="showDynamicRuntimeModal()">了解更多</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-3">
            <div
              class="bg-img feature"
              v-bind:style="`background-image:url('${CeramicTechImage}')`"
            >
              <h1 class="title">陶瓷工藝</h1>
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-title">
                    <h2>陶瓷工藝</h2>
                  </div>
                  <div class="overlay-infomation">
                    <p>- 陶瓷工藝 -</p>
                  </div>
                  <div class="overlay-more">
                    <a class="overlay-more" @click="showDynamicRuntimeModal()">了解更多</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row row-3">
            <div class="bg-img feature"
            v-bind:style="`background-image:url('${KitchenBathroomTechImage}')`">
              <h1 class="title">廚衛工藝</h1>
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-title">
                    <h2>廚衛工藝</h2>
                  </div>
                  <div class="overlay-infomation">
                    <p>- 廚衛工藝 -</p>
                  </div>
                  <div class="overlay-more">
                    <a class="overlay-more" @click="showDynamicRuntimeModal()">了解更多</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-2">
            <div class="bg-img feature" v-bind:style="`background-image:url('${image[4]}')`">
              <h1 class="title">防水</h1>
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-title">
                    <h2>防水</h2>
                  </div>
                  <div class="overlay-infomation">
                    <p>- 防水 -</p>
                  </div>
                  <div class="overlay-more">
                    <a class="overlay-more" @click="showDynamicRuntimeModal()">了解更多</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal name="fs" transition="pop-out" width="90%" height="90%">
      <p>{{ text }}</p>
      <p>Default Property: {{ foo }} - value is "foo"</p>
    </modal>
  </section>
</template>

<script>
import NewCaseImage from '../assets/6x3m_帆布.jpg';
import StructureImage from '../assets/結構.jpg';
import CeramicTechImage from '../assets/陶瓷工藝.jpg';
import KitchenBathroomTechImage from '../assets/廚衛工藝.jpg';


export default {
  data() {
    return {
      NewCaseImage,
      StructureImage,
      CeramicTechImage,
      KitchenBathroomTechImage,
      image: [
        'http://assets.volvocars.com/tw/~/media/taiwan/images/wuntw/homepage_201904/02_linkinggrid/01_1343x1080.jpg',
        'http://assets.volvocars.com/tw/~/media/taiwan/images/wuntw/homepage_201904/02_linkinggrid/02_4096x2304.jpg',
        'http://assets.volvocars.com/tw/~/media/taiwan/images/wuntw/homepage_201904/02_linkinggrid/03_4096x2304.jpg',
        'http://assets.volvocars.com/tw/~/media/taiwan/images/wuntw/homepage_201904/02_linkinggrid/04_2420x2304.jpg',
        'http://assets.volvocars.com/tw/~/media/taiwan/images/wuntw/homepage_201904/02_linkinggrid/05_4096x2304.jpg',
      ],
      features: [
        {
          title: '未來的電動生活',
          content: 'The Feture of Driving',
        },
        {
          title: '未來的電動生活',
          content: 'The Feture of Driving',
        },
        {
          title: '未來的電動生活',
          content: 'The Feture of Driving',
        },
        {
          title: '未來的電動生活',
          content: 'The Feture of Driving',
        },
        {
          title: '未來的電動生活',
          content: 'The Feture of Driving',
        },
      ],
    };
  },
  methods: {
    beforeOpen(event) {
      console.log(event);
      // Set the opening time of the modal
      this.time = Date.now();
    },
    beforeClose(event) {
      console.log(event);
      // If modal was open less then 5000 ms - prevent closing it
      if (this.time + this.duration < Date.now()) {
        event.stop();
      }
    },

    showDynamicRuntimeModal() {
      this.$modal.show(
        'fs',
        {
          text: 'This text is passed as a property',
          foo: 'testing',
        },
        {
          height: 'auto',
        },
        {
          'before-close': (event) => {
            console.log('this will be called before the modal closes', event);
          },
        },
      );
    },
  },
};
</script>


<style lang="scss" scoped>
$feature-block-spacing: 8px;
$feature-height: 720px;
$feature-content-spacing: 2rem;
section{
  margin-top:3rem;
}
.feature-wrapper {
  display: flex;
  margin: calc(#{$feature-block-spacing} / 2);
  width: calc(100% - #{$feature-block-spacing});

  &:before {
    padding-top: 40%;
    content: "";
  }

  @media screen and (max-width: 720px) {
    &:before {
      padding-top: calc(35% * 5);
    }
  }

  .feature {
    position: relative;
    margin: calc(#{$feature-block-spacing} / 2);
    width: calc(100% - #{$feature-block-spacing});
    height: calc(100% - #{$feature-block-spacing});

    .overlay,
    .title {
      transition: all 0.25s;
      position: absolute;
      color: white;
    }

    @media screen and (min-width: 1600px) {
      .title {
         font-size: calc(100vw * 0.02);
      }
    }

    .overlay {
      opacity: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba($color: #000000, $alpha: 0.5);

      display: flex;
      // flex-flow: row wrap;
      align-items: center;
      // justify-content: center;

      .overlay-content {
        padding: $feature-content-spacing;
        text-align: left;
        display: flex;
        flex-flow: column;
        width: 100%;

        .overlay-title,
        .overlay-infomation,
        .overlay-more {
          width: 100%;
        }

        .overlay-more {
          a {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }

    .title {
      bottom: $feature-content-spacing;
      left: $feature-content-spacing;
      right: $feature-content-spacing;
      margin: 0;
      text-align: left;
    }

    &:hover {
      .overlay {
        opacity: 1;
      }
      .title {
        opacity: 0;
        bottom: calc(#{$feature-content-spacing} * 3);
      }
      // background-color: white;
    }
  }

  @media screen and (max-width: 720px) {
    & {
      margin: calc(#{$feature-block-spacing} / 2) 0;
      width: 100%;
      .feature {
        margin: calc(#{$feature-block-spacing} / 2) 0;
        width: 100%;
      }
    }
    .col {
      flex: unset;
      width: inherit;
      &-2,
      &-3,
      &-4 {
        flex: unset;
      }
    }

    .row {
      &-2,
      &-3,
      &-4 {
        flex: 1;
      }
    }

    .feature {
      height: 160px;
    }
    // .feature:before {
    //   padding-top: 40%;
    //   content: "";
    // }
  }
}
</style>
