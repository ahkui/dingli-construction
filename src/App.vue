<template>
  <div id="app">
    <b-navbar
      toggleable="md"
      variant="light"
      type="light"
      sticky="true"
      class="shadow-sm"
    >
      <b-navbar-brand to="/">鼎秝建設</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{ name: 'about' }">鼎秝·序</b-nav-item>
          <b-nav-item :to="{ name: 'about' }">客戶服務</b-nav-item>
          <b-nav-item
            href="https://www.facebook.com/鼎秝建設-1994258083943925"
            target="_blank"
          >
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

export default {
  components: {
    Footer
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
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
</style>
