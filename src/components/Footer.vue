<template>
  <div class="footer">
    <div class="footer-navigation">
      <b>Careers</b>
      <b>Company</b>
      <b>與我們聯絡</b>
      <b>品牌新聞</b>
      <b>防水工程</b>
      <b>防震工程</b>
    </div>
    <h1>Ding Li Construction Taiwan</h1>
    <a class="announce">本網站所提供之圖片、數據皆來自網路</a>

    <div class="footer-navigation">
      <b>Cookies</b>
      <b>Legal</b>
      <b>Privacy</b>
      <b>Bulletin</b>
    </div>
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
}
</style>
