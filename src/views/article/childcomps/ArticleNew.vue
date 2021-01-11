<template>
  <ArticleTag class="ArticleNew">
    <div slot="title">
      <i class="el-icon-s-grid"></i>
      <h4>最近文章</h4>
    </div>
    <div slot="detail" class="detail"> 
      <ul>
        <li v-for="(item,index) in context" :key="index">
          <a href="" >{{item.title}}</a>
        </li>
      </ul>
    </div>
  
  </ArticleTag>
  
</template>

<script>
import ArticleTag from '@/components/content/Article/ArticleTag'
import { recent } from 'network/home'
// import { recent } from "network/home"

export default {
  name:'ArticleNew',
  components: {
    ArticleTag
  },
  data() {
    return {
      context: {
        type: [Array,Object],
        default() {
          return []
        }
      }
    }
  },
  created() {
    recent().then(res => {
      this.context = res.data.data
    })
  }
}
</script>

<style scoped>
  .ArticleNew {
    height: 250px;

  }

  .detail ul li{
    display: flex;
    flex-direction: column;
  }

  .detail ul li  {
    display: flex;
    justify-content: center;
    padding-left: 10px;
    height: 40px;
    line-height: 40px;
    border-bottom: 2px solid #ccc;
  }
  .detail ul li a {
    font-size: 16px;
    color: steelblue;
    height: 20px;
    line-height: 20px;
  }
</style>