<template>
  <div>
    <modal
      name="example"
      :width="300"
      :height="300"
      @before-open="beforeOpen"
      @before-close="beforeClose"
    >
      <b>{{time}}</b>
    </modal>
    <div class="bg-img feature">
      <div class="col w-50">
        <div class="bg-img feature-big" v-bind:style="`background-image:url('${image}')`">
          <h1 class="title">未來的移動生活</h1>
          <div class="overlay">
            <div class="overlay-content">
              <div class="overlay-title">
                <h2>未來的移動生活</h2>
              </div>
              <div class="overlay-infomation">
                <p>未來的移動生活</p>
              </div>
              <div class="overlay-more">
                <a class="overlay-more" @click="showDynamicRuntimeModal()">快點我</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col w-25">
        <div class="bg-img feature-medium" v-bind:style="`background-image:url('${image}')`">
          <h1 class="title">未來的移動生活</h1>
          <div class="overlay">
            <div class="overlay-content">
              <div class="overlay-title">
                <h2>未來的移動生活</h2>
              </div>
              <div class="overlay-infomation">
                <p>未來的移動生活</p>
              </div>
              <div class="overlay-more">
                <a class="overlay-more" @click="showDynamicRuntimeModal()">快點我</a>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-img feature-small" v-bind:style="`background-image:url('${image}')`">
          <h1 class="title">未來的移動生活</h1>
          <div class="overlay">
            <div class="overlay-content">
              <div class="overlay-title">
                <h2>未來的移動生活</h2>
              </div>
              <div class="overlay-infomation">
                <p>未來的移動生活</p>
              </div>
              <div class="overlay-more">
                <a class="overlay-more" @click="showDynamicRuntimeModal()">快點我</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col w-25">
        <div class="bg-img feature-small" v-bind:style="`background-image:url('${image}')`">
          <h1 class="title">未來的移動生活</h1>
          <div class="overlay">
            <div class="overlay-content">
              <div class="overlay-title">
                <h2>未來的移動生活</h2>
              </div>
              <div class="overlay-infomation">
                <p>未來的移動生活</p>
              </div>
              <div class="overlay-more">
                <a class="overlay-more" @click="showDynamicRuntimeModal()">快點我</a>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-img feature-medium" v-bind:style="`background-image:url('${image}')`">
          <h1 class="title">未來的移動生活</h1>
          <div class="overlay">
            <div class="overlay-content">
              <div class="overlay-title">
                <h2>未來的移動生活</h2>
              </div>
              <div class="overlay-infomation">
                <p>未來的移動生活</p>
              </div>
              <div class="overlay-more">
                <a class="overlay-more" @click="showDynamicRuntimeModal()">快點我</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-img feature">
      <div class="col w-66">
        <div class="bg-img feature-big" v-bind:style="`background-image:url('${image}')`">
          <div>big</div>
        </div>
      </div>
      <div class="col w-33">
        <div class="bg-img feature-medium" v-bind:style="`background-image:url('${image}')`">
          <h1 class="title">未來的移動生活</h1>
          <div class="overlay">
            <div class="overlay-content">
              <div class="overlay-title">
                <h2>未來的移動生活</h2>
              </div>
              <div class="overlay-infomation">
                <p>未來的移動生活</p>
              </div>
              <div class="overlay-more">
                <a class="overlay-more" @click="showDynamicRuntimeModal()">快點我</a>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-img feature-small" v-bind:style="`background-image:url('${image}')`">
          <h1 class="title">未來的移動生活</h1>
          <div class="overlay">
            <div class="overlay-content">
              <div class="overlay-title">
                <h2>未來的移動生活</h2>
              </div>
              <div class="overlay-infomation">
                <p>未來的移動生活</p>
              </div>
              <div class="overlay-more">
                <a class="overlay-more" @click="showDynamicRuntimeModal()">快點我</a>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: 'https://picsum.photos/id/248/1920/1080',
      features: [
        {
          title: '未來的移動生活',
          content: 'The Feture of Driving',
        },
        {
          title: '未來的移動生活',
          content: 'The Feture of Driving',
        },
        {
          title: '未來的移動生活',
          content: 'The Feture of Driving',
        },
        {
          title: '未來的移動生活',
          content: 'The Feture of Driving',
        },
        {
          title: '未來的移動生活',
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
$feature-block-spacing: 4px;
$feature-height: 720px;
$feature-content-spacing: 2rem;

.feature {
  display: flex;
  padding: #{$feature-block-spacing};
  width: calc(100% - #{$feature-block-spacing});

  .col {
    height: calc(
      #{$feature-height} - #{$feature-block-spacing} - #{$feature-block-spacing}
    );
  }

  .feature-big,
  .feature-medium,
  .feature-small {
    margin: #{$feature-block-spacing};
    width: calc(100% - #{$feature-block-spacing} - #{$feature-block-spacing});
    float: left;

    background-color: blueviolet;
    position: relative;

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

  .feature-big {
    height: calc(#{$feature-height} - (#{$feature-block-spacing} * 4));
  }

  .feature-medium {
    height: calc(
      (#{$feature-height} - (#{$feature-block-spacing} * 6)) / 5 * 3
    );
  }

  .feature-small {
    height: calc(
      (#{$feature-height} - (#{$feature-block-spacing} * 6)) / 5 * 2
    );
  }
}
</style>
