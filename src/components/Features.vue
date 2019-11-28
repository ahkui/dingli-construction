<template>
  <b-container fluid class="mt-4">
    <b-row :no-gutters="true">
      <b-col cols="12" md="6" class="pb-1 pb-md-0 pr-md-1">
        <div
          class="bg-img feature feature-first"
          v-bind:style="`background-image:url('${NewCaseImage}')`"
        >
          <h2 class="title">新建案資訊</h2>
          <div class="overlay">
            <div class="overlay-content">
              <div class="overlay-title">
                <h2>新建案資訊</h2>
              </div>
              <!-- <div class="overlay-infomation">
                  <p>- 新建案資訊 -</p>
              </div>-->
              <div class="overlay-more">
                <b-link to="about">了解更多</b-link>
              </div>
            </div>
          </div>
        </div>
      </b-col>

      <b-col cols="12" md="3" class="px-md-1">
        <b-row :no-gutters="true" class="h-33">
          <b-col cols="12" class="py-1 pt-md-0">
            <div
              class="bg-img feature"
              v-bind:style="`background-image:url('${StructureImage}')`"
            >
              <h2 class="title">結構</h2>
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-title">
                    <h2>結構</h2>
                  </div>
                  <!-- <div class="overlay-infomation">
                      <p>- 結構 -</p>
                  </div>-->
                  <div class="overlay-more">
                    <b-link :to="{ name: 'shockproof' }">了解更多</b-link>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row :no-gutters="true" class="h-66">
          <b-col cols="12" class="py-1 pb-md-0">
            <div
              class="bg-img feature"
              v-bind:style="`background-image:url('${CeramicTechImage}')`"
            >
              <h2 class="title">陶瓷工藝</h2>
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-title">
                    <h2>陶瓷工藝</h2>
                  </div>
                  <!-- <div class="overlay-infomation">
                      <p>- 陶瓷工藝 -</p>
                  </div>-->
                  <div class="overlay-more">
                    <b-link to="about">了解更多</b-link>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="12" md="3" class="pl-md-1">
        <b-row :no-gutters="true" class="h-66">
          <b-col cols="12" class="py-1 pt-md-0">
            <div
              class="bg-img feature"
              v-bind:style="
                `background-image:url('${KitchenBathroomTechImage}')`
              "
            >
              <h2 class="title">廚衛工藝</h2>
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-title">
                    <h2>廚衛工藝</h2>
                  </div>
                  <!-- <div class="overlay-infomation">
                      <p>- 廚衛工藝 -</p>
                  </div>-->
                  <div class="overlay-more">
                    <b-link to="about">了解更多</b-link>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row :no-gutters="true" class="h-33">
          <b-col cols="12" class="py-1 pb-md-0">
            <div
              class="bg-img feature"
              v-bind:style="`background-image:url('${NewCaseImage}')`"
            >
              <h2 class="title">防水</h2>
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-title">
                    <h2>防水</h2>
                  </div>
                  <!-- <div class="overlay-infomation">
                      <p>- 防水 -</p>
                  </div>-->
                  <div class="overlay-more">
                    <b-link to="about">了解更多</b-link>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import NewCaseImage from "../assets/6x3m_帆布.jpg";
import StructureImage from "../assets/結構.jpg";
import CeramicTechImage from "../assets/陶瓷工藝.jpg";
import KitchenBathroomTechImage from "../assets/廚衛工藝.jpg";

export default {
  components: {
    // Shockproof,
  },
  data() {
    return {
      NewCaseImage,
      StructureImage,
      CeramicTechImage,
      KitchenBathroomTechImage
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
$feature-block-spacing: 8px;
$feature-content-spacing: 2rem;
section {
  margin-top: 3rem;
}

@media screen and (max-width: 767px) {
  .h {
    &-33,
    &-66 {
      height: auto !important;
    }
  }
}

.feature {
  position: relative;
  // margin: calc(#{$feature-block-spacing} / 2);
  // width: calc(100% - #{$feature-block-spacing});
  height: 100%;

  &-first {
    height: calc(100vw * 0.4) !important;
  }
  @media screen and (max-width: 767px) {
    height: calc(100vw * 0.4) !important;
  }

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
          color: white;
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
</style>
