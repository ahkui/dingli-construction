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
        <div class="column column-2">
          <div class="bg-img feature" v-bind:style="`background-image:url('${image[0]}')`">
            <h1 class="title">未來的電動生活</h1>
            <div class="overlay">
              <div class="overlay-content">
                <div class="overlay-title">
                  <h2>未來的電動生活</h2>
                </div>
                <div class="overlay-infomation">
                  <p>未來的電動生活</p>
                </div>
                <div class="overlay-more">
                  <a class="overlay-more" @click="showDynamicRuntimeModal()">快點我</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="row row-2">
            <div class="bg-img feature" v-bind:style="`background-image:url('${image[1]}')`">
              <h1 class="title">未來的電動生活</h1>
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-title">
                    <h2>未來的電動生活</h2>
                  </div>
                  <div class="overlay-infomation">
                    <p>未來的電動生活</p>
                  </div>
                  <div class="overlay-more">
                    <a class="overlay-more" @click="showDynamicRuntimeModal()">快點我</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-3">
            <div class="bg-img feature" v-bind:style="`background-image:url('${image[2]}')`">
              <h1 class="title">未來的電動生活</h1>
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-title">
                    <h2>未來的電動生活</h2>
                  </div>
                  <div class="overlay-infomation">
                    <p>未來的電動生活</p>
                  </div>
                  <div class="overlay-more">
                    <a class="overlay-more" @click="showDynamicRuntimeModal()">快點我</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="row row-3">
            <div class="bg-img feature" v-bind:style="`background-image:url('${image[3]}')`">
              <h1 class="title">未來的電動生活</h1>
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-title">
                    <h2>未來的電動生活</h2>
                  </div>
                  <div class="overlay-infomation">
                    <p>未來的電動生活</p>
                  </div>
                  <div class="overlay-more">
                    <a class="overlay-more" @click="showDynamicRuntimeModal()">快點我</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-2">
            <div class="bg-img feature" v-bind:style="`background-image:url('${image[4]}')`">
              <h1 class="title">未來的電動生活</h1>
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-title">
                    <h2>未來的電動生活</h2>
                  </div>
                  <div class="overlay-infomation">
                    <p>未來的電動生活</p>
                  </div>
                  <div class="overlay-more">
                    <a class="overlay-more" @click="showDynamicRuntimeModal()">快點我</a>
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
export default {
  data() {
    return {
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

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    // height: 100%;
  }

  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }

  .column,
  .row {
    &-2 {
      flex: 2;
    }
    &-3 {
      flex: 3;
    }
    &-4 {
      flex: 4;
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
    .column {
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
