<template>
  <div>
    <b-navbar toggleable="md" variant="faded" type="light">
      <b-navbar-brand href="#">鼎秝建設</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">鼎秝·序</b-nav-item>
          <b-nav-item href="#">客戶服務</b-nav-item>
          <b-nav-item
            href="https://www.facebook.com/鼎秝建設-1994258083943925"
            target="_blank"
            ><font-awesome-icon :icon="['fab', 'facebook']" size="lg"
          /></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss"></style>
