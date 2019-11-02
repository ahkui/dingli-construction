<template>
  <div class="footer">
    <div class="footer-navigation">
      <b><a href="mailto:nameho99@gmail.com">與我們聯絡</a></b>
      <b>品牌新聞</b>
      <b>防水工程</b>
      <b>防震工程</b>
    </div>
    <h1>Ding Li Construction Taiwan</h1>
    <div class="contact-us">
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
    </div>

    <a class="announce">本網站所提供之圖片、數據皆來自網路</a>
    <a class="announce">Copyright © 2019 鼎秝建設股份有限公司 版權所有</a>

    <!-- <div class="footer-navigation">
      <b>Cookies</b>
      <b>Legal</b>
      <b>Privacy</b>
      <b>Bulletin</b>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  background-color: black;
  display: flex;
  flex-flow: column;
  color: white;
  align-items: center;
  padding: 4rem 0;

  & > * {
    padding: 1rem;
  }

  .footer-navigation {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;

    b {
      margin: 1rem;
    }
  }

  .announce {
    color: grey;
    font-size: 0.9rem;
  }
  .contact-us {
    padding: 0;
    width: 400px;
  }
}
</style>
