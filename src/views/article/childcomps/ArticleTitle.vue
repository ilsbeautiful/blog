<template>
  <div class="article-title">
    <p>分类</p>
    <div slot="detail" class="detail">
      <el-button>Vue</el-button>
      <el-button type="primary">Python</el-button>
      <el-button type="success">Node</el-button>
      <el-button type="info">javascript</el-button>
      <el-button type="warning">Php</el-button>
    </div>
  </div>
</template>

<script>
import ArticleTag from '@/components/content/Article/ArticleTag'
export default {
  name:'ArticleTitle',
  components: {
    ArticleTag
  }
}
</script>

<style scoped>
  .article-title {
    width: 100%;
    margin-bottom: 1rem;
    background: #ffffff6b;
    padding:.5rem;
    border: 1px solid #ccc;
    position: relative;
    background: #fff;
    font-size: 20px;
    border-radius: 8px!important;
    border-bottom-left-radius: 0!important;
    border-bottom-right-radius: 0!important;
  }
  .article-title:hover {
    transform: translate(0,-2px);
    box-shadow:0 15px 30px rgba(0,0,0,.1);
  }
  p {
    font-size: 18px;
    padding:0.5rem;
    border-bottom:1.5px solid lightseagreen;
  }
  .detail {
    padding: 10px 0 15px 0;
  }
  .detail button {
    margin: 5px 15px;

  }
</style>