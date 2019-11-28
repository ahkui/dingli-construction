<template>
  <div class="home">
    <BannerCarousel />
    <Features />
    <EventCarousel />
  </div>
</template>

<script>
// @ is an alias to /src
import BannerCarousel from "@/components/BannerCarousel.vue";
import Features from "@/components/Features.vue";
import EventCarousel from "@/components/EventCarousel.vue";

export default {
  name: "home",
  components: {
    BannerCarousel,
    Features,
    EventCarousel
  }
};
</script>
