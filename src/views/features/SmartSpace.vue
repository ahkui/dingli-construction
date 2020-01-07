<template>
  <div class="smartspace">
    <b-container fluid
      ><div class="row justify-content-center">
        <div class="col-12 col-md-10">
          <b-row
            align-v="center"
            v-for="(data, index) in datas"
            v-bind:key="`feature-${index}`"
            no-gutters="true"
          >
            <b-col md="6" cols="12" v-if="index % 2 === 0">
              <img width="100%" :src="data.image" alt="" />
            </b-col>
            <b-col md="6" cols="12" v-else order-md="2">
              <img width="100%" :src="data.image" alt="" />
            </b-col>

            <b-col class="px-3" md="6" cols="12" v-if="index % 2 === 0">
              <h5 :key="tIndex" v-for="(text, tIndex) in data.texts">
                {{ text }}
              </h5>
            </b-col>
            <b-col class="px-3" md="6" cols="12" v-else order-md="1">
              <h5 :key="tIndex" v-for="(text, tIndex) in data.texts">
                {{ text }}
              </h5>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import Image1 from "@/assets/智能空間/1停車場.jpg";
import Image2 from "@/assets/智能空間/2玄關.jpg";
import Image3 from "@/assets/智能空間/3客廳.jpg";
import Image4 from "@/assets/智能空間/4餐廳.jpg";
import Image5 from "@/assets/智能空間/5廁所.jpg";
import Image6 from "@/assets/智能空間/6主臥.jpg";
import Image7 from "@/assets/智能空間/7次臥.jpg";
import Image8 from "@/assets/智能空間/8頂樓休閒空間.jpg";

export default {
  data() {
    return {
      datas: [
        {
          image: Image1,
          texts: ["停車位"]
        },
        {
          image: Image2,
          texts: ["玄關"]
        },
        {
          image: Image3,
          texts: ["客廳"]
        },
        {
          image: Image4,
          texts: ["餐廳"]
        },
        {
          image: Image5,
          texts: ["廁所"]
        },
        {
          image: Image6,
          texts: ["主臥"]
        },
        {
          image: Image7,
          texts: ["次臥"]
        },
        {
          image: Image8,
          texts: ["頂樓休閒空間"]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
