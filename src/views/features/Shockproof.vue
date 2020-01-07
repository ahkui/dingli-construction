<template>
  <div class="shockproof">
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
import Image1 from "@/assets/結構/1_.jpg";
import Image2 from "@/assets/結構/2_.jpg";
import Image3 from "@/assets/結構/3_.jpg";
import Image4 from "@/assets/結構/4_.jpg";
import Image5 from "@/assets/結構/5_.jpg";
export default {
  data() {
    return {
      datas: [
        {
          image: Image1,
          texts: ["制震工法＿筏式基礎 ; 一體成型,減緩基底壓力增強基礎剛度。"]
        },
        {
          image: Image2,
          texts: ["為了您，我們將住宅安全更加升級，不惜成本。"]
        },
        {
          image: Image3,
          texts: ["有了筏式基礎，即使土壤液化的侵擾，我們也能安全無慮。"]
        },
        {
          image: Image4,
          texts: [
            "不僅有筏式基礎的固盤，一梁一柱的精工築成守護您一切固若磐石的家。"
          ]
        },
        {
          image: Image5,
          texts: [
            "全ＲＣ即使浴廁或是寢居室，毫無妥協。",
            "（90%以上採用鋼筋混凝土）"
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
