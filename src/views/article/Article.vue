<template>
  <div class="article">
    <NavBars/>
    <ArticleList :articleitem="Article"/>
    <div class="article-right">
      <ArticleTitle/>
      <ArticleNew/>
      <ArticleMusic/>
    </div>
    <Footer/>
    
  </div>
</template>

<script>
  import NavBars from '@/components/content/navbars/NavBars'
  import Footer from '@/components/common/footer/Footer'

  import ArticleList from './childcomps/ArticleList'
  import ArticleTitle from './childcomps/ArticleTitle'
  import ArticleNew from './childcomps/ArticleNew'
  import ArticleMusic from './childcomps/ArticleMusic'

  import { getdata } from "network/home"

  export default {
    name: 'Article',
    components: {
      NavBars,
      ArticleList,
      ArticleTitle,
      ArticleNew,
      ArticleMusic,
      Footer
    },
    data() {
      return {
        Article: []
      }
    },
    created() {
      this.getdata()
    },
    methods: {
      getdata() {
        getdata().then(res => {
          // console.log(res)
          this.Article = res.data.data
        })
      }
    }
  }
</script>

<style scoped>
  #Article {
    height: 100vh;
    position: relative;
    /* background-image: url(~assets/img/home/mtimg.jpg); */
    background-size: 100%;
  }
  .article {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
    margin-top: 300px;
  }
  .article-right {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
</style>