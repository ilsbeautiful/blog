<template>
  <div class="goods-item">
    <div class="goods-info">
      <h2>First article</h2>
      <p>hhhhhhhhhhhhhhhhhhhhhhhhh</p>
    </div>
    <img src="~assets/img/home/fff.jpg" alt="">
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-item {
        white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    position: relative;
    background: #ffffff9c;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 40px;
    font-size: 15px;
    top: 314px;
    width: 93%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
    /* height: 100px; */
  }


</style>
