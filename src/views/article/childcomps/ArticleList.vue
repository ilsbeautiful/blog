<template>
  <ArticleTag class="article-list">
    <!-- <div slot="title">
        <i class="el-icon-document"></i>
        <h4>文章列表</h4>
    </div> -->
    <div slot="detail">
      <ArticleListItem v-for="(item,index) in articleitem" :articleitem="item" :key="index"/>
    </div>
    
  </ArticleTag>
</template>

<script>
import ArticleTag from '@/components/content/Article/ArticleTag'
import ArticleListItem from './ArticleListItem'


  export default {
    name: "ArticleList",
    components: {
      ArticleTag,
      ArticleListItem,
    },
    data() {
      return {
      }
    },
    props: {
      articleitem: {
        type: [Object,Array],
        default() {
          return []
        }
      }
    },
    methods: {
      details() {
      }
    }
  }
</script>

<style scoped>
  .article-list {
    
    /* border: 1px solid #ccc; */
    width: 68rem;
    position: relative;
    left: 8rem;
  }

  @media screen and (max-width: 1200px) {
    .article-list {
      width: 80%;
    }
  }
</style>
