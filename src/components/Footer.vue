<template>
  <div class="footer py-5">
    <b-container>
      <b-row :no-gutters="true" align-h="center">
        <b-col cols="auto" class="px-3">
          <b>
            <a href="mailto:nameho99@gmail.com">與我們聯絡</a>
          </b>
        </b-col>
        <b-col cols="auto" class="px-3">
          <b>品牌新聞</b>
        </b-col>
        <b-col cols="auto" class="px-3">
          <b>防水工程</b>
        </b-col>
        <b-col cols="auto" class="px-3">
          <b>防震工程</b>
        </b-col>
      </b-row>
      <b-row :no-gutters="true" class="pt-4">
        <b-col>
          <h2>Ding Li Construction Taiwan</h2>
        </b-col>
      </b-row>
      <b-row :no-gutters="true" align-h="center">
        <b-col cols="auto">
          <table>
            <tr>
              <td>聯絡地址：</td>
              <td>台中市五權路2-106號14樓A</td>
            </tr>
            <tr>
              <td>聯絡電話：</td>
              <td>
                <a href="tel:+886423763123">04-23763123</a>
              </td>
            </tr>
            <tr>
              <td>聯絡信箱：</td>
              <td>
                <a>N/A</a>
              </td>
            </tr>
          </table>
        </b-col>
      </b-row>
      <b-row :no-gutters="true" align-h="center" class="mx-0 mt-4">
        <b-col cols="auto">
          <a class="announce">本網站所提供之圖片、數據皆來自網路</a>
        </b-col>
        <b-col cols="auto">
          <a class="announce">Copyright © 2019 鼎秝建設股份有限公司 版權所有</a>
        </b-col>
      </b-row>

      <!-- <div class="footer-navigation">
      <b>Cookies</b>
      <b>Legal</b>
      <b>Privacy</b>
      <b>Bulletin</b>
      </div>-->
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  background-color: black;
  color: white;

  .announce {
    color: grey;
    font-size: 0.9rem;
  }
  .contact-us {
    width: 400px;
  }
}
</style>
