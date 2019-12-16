<template>
  <div class="ceramics">
    <b-container>
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
          <h5 :key="tIndex" v-for="(text, tIndex) in data.texts">{{ text }}</h5>
        </b-col>
        <b-col class="px-3" md="6" cols="12" v-else order-md="1">
          <h5 :key="tIndex" v-for="(text, tIndex) in data.texts">{{ text }}</h5>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Image1 from "@/assets/陶瓷工藝/toto1.jpg";
import Image2 from "@/assets/陶瓷工藝/toto2.jpg";
import Image3 from "@/assets/陶瓷工藝/toto3.jpg";
import Image4 from "@/assets/陶瓷工藝/toto4.jpg";

export default {
  data() {
    return {
      datas: [
        {
          image: Image1,
          texts: []
        },
        {
          image: Image2,
          texts: []
        },
        {
          image: Image3,
          texts: []
        },
        {
          image: Image4,
          texts: []
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
