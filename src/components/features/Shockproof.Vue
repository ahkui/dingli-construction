<template>
  <b-container fluid>
    <b-row
      no-gutters="true"
      v-for="(data, index) in datas"
      v-bind:key="`feature-${index}`"
    >
      <b-col md="8" cols="12" v-if="index % 2 === 0">
        <div style="background-color:red;">1</div>
      </b-col>
      <b-col md="8" cols="12" v-else order-md="2">
        <div style="background-color:red;">1</div>
      </b-col>

      <b-col md="4" cols="12" v-if="index % 2 === 0">
        <div style="background-color:blue;">2</div>
      </b-col>
      <b-col md="4" cols="12" v-else order-md="1">
        <div style="background-color:blue;">2</div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      datas: [{}, {}, {}, {}, {}]
    };
  }
};
</script>

<style lang="scss" scoped></style>
