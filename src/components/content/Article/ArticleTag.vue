<template>
  <div class="articletag">
    <div class="title"><slot name="title"></slot></div>
    <div class="detail"><slot name="detail"></slot></div>
  </div>
</template>

<script>
export default {
  name:'ArticleTag',
}
</script>

<style scoped>
  .articletag {
    position: relative;
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 40%;
    left: 30%;
    background-color: #fff;
    margin-bottom: 40px;
  }
  .title {
    display: flex;
    position: relative;
    color: #333;
    font-size: 22px;
    height: 48px;
    line-height: 23px;
    padding: 10px 15px;
    background: #ffff;
    font-family: "微软雅黑";
    border-bottom: 3px solid #799eb7;
  }
  .title div {
    display: flex;
    width: 100%;
  }
  
</style>