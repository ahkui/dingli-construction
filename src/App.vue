<template>
  <div id="app">
    <BannerCarousel />
    <Features />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Features from './components/Features.vue';
import BannerCarousel from './components/BannerCarousel.vue';

export default {
  name: 'app',
  components: {
    Footer,
    Features,
    BannerCarousel,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;

  .w {
    &-20 {
      width: calc(20%);
    }
    &-25 {
      width: calc(25%);
    }
    &-33 {
      width: calc(100% / 3);
    }
    &-40 {
      width: calc(40%);
    }
    &-50 {
      width: calc(50%);
    }
    &-60 {
      width: calc(60%);
    }
    &-66 {
      width: calc(100% / 3 * 2);
    }
    &-75 {
      width: calc(75%);
    }
    &-80 {
      width: calc(80%);
    }
    &-100 {
      width: calc(100%);
    }
  }

  .bg-img {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
