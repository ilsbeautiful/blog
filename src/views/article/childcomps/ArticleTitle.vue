<template>
  <ArticleTag class="article-title">
    <div slot="title">
      <i class="el-icon-s-grid"></i>
      <h4>分类</h4>
    </div>
    <div slot="detail" class="detail">
      <el-button>Vue</el-button>
      <el-button type="primary">Python</el-button>
      <el-button type="success">Node</el-button>
      <el-button type="info">javascript</el-button>
      <el-button type="warning">Php</el-button>
    </div>
  
  </ArticleTag>
  
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
    /* height: 250px; */
  }
  .detail {
    padding: 10px 0 15px 0;
  }
  .detail button {
    margin: 5px 15px;

  }
</style>