<template>
  <div id="app">
    <b-navbar
      toggleable="md"
      variant="light"
      type="light"
      :sticky="true"
      class="shadow-sm"
    >
      <b-navbar-brand to="/">
        <img :src="LogoImage" alt="Logo" class="logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{ name: 'about' }">鼎秝·序</b-nav-item>
          <b-nav-item :to="{ name: 'about' }">客戶服務</b-nav-item>
          <b-nav-item :href="fbLink" target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import LogoImage from "@/assets/logo.png";

export default {
  components: {
    Footer
  },
  data() {
    return {
      LogoImage,
      fbLink: "https://www.facebook.com/鼎秝建設-1994258083943925"
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap");
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+SC&display=swap");

#app {
  font-family: "Avenir", "Noto Sans TC", "Noto Sans SC", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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

.h {
  &-20 {
    height: calc(20%);
  }
  &-25 {
    height: calc(25%);
  }
  &-33 {
    height: calc(100% / 3);
  }
  &-40 {
    height: calc(40%);
  }
  &-50 {
    height: calc(50%);
  }
  &-60 {
    height: calc(60%);
  }
  &-66 {
    height: calc(100% / 3 * 2);
  }
  &-75 {
    height: calc(75%);
  }
  &-80 {
    height: calc(80%);
  }
  &-100 {
    height: calc(100%);
  }
}

.bg-img {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media screen and (min-width: 2000px) {
  .navbar-brand {
    font-size: calc(100vw * 0.018) !important;
  }
  body {
    font-size: calc(100vw * 0.015) !important;
  }
}
.navbar-brand {
  .logo {
    height: 40px;
    @media screen and (min-width: 2000px) {
      height: calc(100vw * 0.04) !important;
    }
  }
}
</style>
