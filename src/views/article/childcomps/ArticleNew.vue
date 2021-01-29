<template>
  <div class="ArticleNew">
    <p>最近文章</p>
    <div slot="detail" class="detail"> 
      <ul>
        <li v-for="(item,index) in context" :key="index">
          <a :href="'#/detail/'+item.iid">{{item.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ArticleTag from '@/components/content/Article/ArticleTag'
import { recent } from 'network/home'

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
  .ArticleNew:hover {
    transform: translate(0,-2px);
    box-shadow:0 15px 30px rgba(0,0,0,.1);
  }
  p {
    font-size: 18px;
    padding:0.5rem;
    border-bottom:1.5px solid lightseagreen;
  }
  .detail ul li{
    display: flex;
    flex-direction: column;
  }

  .detail ul li  {
    display: flex;
    justify-content: center;
    padding-left: 10px;
    height: 45px;
    border-bottom: 1px solid #e2e2e2;
  }
  .detail ul li a {
    font-size: 16px;
    color: steelblue;
    height: 20px;
    line-height: 20px;
  }
</style>