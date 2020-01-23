<template>
  <b-container fluid class="mt-4">
    <b-row :no-gutters="true">
      <b-col cols="12" md="6" class="pb-1 pb-md-0 pr-md-1">
        <div
          class="bg-img feature feature-first d-block d-md-none"
          v-bind:style="`background-image:url('${NewCaseImage}')`"
        >
          <a class="title h3">新建案資訊</a>
          <div class="overlay">
            <div class="overlay-content">
              <div class="overlay-title">
                <a class="h3">新建案資訊</a>
              </div>
              <!-- <div class="overlay-infomation">
                  <p>- 新建案資訊 -</p>
              </div>-->
              <div class="overlay-more">
                <b-link :to="{ name: 'home' }">了解更多</b-link>
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-img feature feature-first d-none d-md-block"
          v-bind:style="`background-image:url('${NewCaseImage2}')`"
        >
          <a class="title h3">新建案資訊</a>
          <div class="overlay">
            <div class="overlay-content">
              <div class="overlay-title">
                <a class="h3">新建案資訊</a>
              </div>
              <!-- <div class="overlay-infomation">
                  <p>- 新建案資訊 -</p>
              </div>-->
              <div class="overlay-more">
                <b-link :to="{ name: 'home' }">了解更多</b-link>
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
              <a class="title h3">結構</a>
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-title">
                    <a class="h3">結構</a>
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
              <a class="h3 title">陶瓷工藝</a>
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-title">
                    <a class="h3">陶瓷工藝</a>
                  </div>
                  <!-- <div class="overlay-infomation">
                      <p>- 陶瓷工藝 -</p>
                  </div>-->
                  <div class="overlay-more">
                    <b-link :to="{ name: 'ceramics' }">了解更多</b-link>
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
              <a class="h3 title">廚衛工藝</a>
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-title">
                    <a class="h3">廚衛工藝</a>
                  </div>
                  <!-- <div class="overlay-infomation">
                      <p>- 廚衛工藝 -</p>
                  </div>-->
                  <div class="overlay-more">
                    <b-link :to="{ name: 'kitchen' }">了解更多</b-link>
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
              v-bind:style="`background-image:url('${SmartSpaceImage}')`"
            >
              <a class="title h3">智能空間</a>
              <div class="overlay">
                <div class="overlay-content">
                  <div class="overlay-title">
                    <a class="h3">智能空間</a>
                  </div>
                  <!-- <div class="overlay-infomation">
                      <p>- 智能空間 -</p>
                  </div>-->
                  <div class="overlay-more">
                    <b-link :to="{ name: 'smartspace' }">了解更多</b-link>
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
import NewCaseImage from "@/assets/6x3m_帆布.jpg";
import NewCaseImage2 from "@/assets/4x3.3_帆布.jpg";
import SmartSpaceImage from "@/assets/智能空間.jpg";
import StructureImage from "@/assets/結構.jpg";
import CeramicTechImage from "@/assets/陶瓷工藝.jpg";
import KitchenBathroomTechImage from "@/assets/廚衛工藝.jpg";

export default {
  components: {
    // Shockproof,
  },
  data() {
    return {
      NewCaseImage,
      NewCaseImage2,
      SmartSpaceImage,
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
    height: calc(100vw * 0.5) !important;
  }
  @media screen and (max-width: 767px) {
    height: calc(100vw * 0.5) !important;
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
    padding: $feature-content-spacing;
    bottom: 0;
    left: 0;
    right: 0;

    margin: 0;
    text-align: left;
    // background-color: rgba(0, 0, 0, 0.2);
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
