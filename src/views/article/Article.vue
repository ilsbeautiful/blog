<template>
  <div >
    <NavBars/>
    <el-row class="article animation">
      <ArticleList :articleitem="Article"/>
      <div class="article-right">
        <Contact/>
        <Likeme/>
        <!-- <ArticleTitle/> -->
        <ArticleNew/>
        <!-- <ArticleMusic/> -->
        <Music/>
      </div>
      <Footer/>
    </el-row>
  
    <BackTop/>
  </div>
</template>

<script>
  import BackTop from '@/components/content/backTop/BackTop'
  import NavBars from '@/components/content/navbars/NavBars'
  import Footer from '@/components/common/footer/Footer'
  import ContList from '@/components/content/contentlist/ContList'

  import ArticleList from './childcomps/ArticleList'
  import ArticleTitle from './childcomps/ArticleTitle'
  import ArticleNew from './childcomps/ArticleNew'
  import ArticleMusic from './childcomps/ArticleMusic'
  import Contact from '@/views/article/childcomps/Contact'
  import Likeme from '@/views/article/childcomps/Likeme'
  import Music from '@/views/article/childcomps/Music'

  import { getdata } from "network/home"

  export default {
    name: 'Article',
    components: {
      Contact,
      Likeme,
      NavBars,
      ContList,
      ArticleList,
      ArticleTitle,
      ArticleNew,
      ArticleMusic,
      Music,
      Footer,
      BackTop
    },
    data() {
      return {
        Article: [],
        // showbacktop: false,
        // top: ''
      }
    },
    created() {
      this.getdata()

      // window.onscroll = () => {
      //   var scrollTop = document.documentElement.scrollTop;
      //   this.top = scrollTop
      //   this.showbacktop = this.top > 800
      // }
    },
    methods: {
      getdata() {
        getdata().then(res => {
          // console.log(res)
          this.Article = res.data.data
        })
      },
    }
  }
</script>

<style scoped>
  .article {
    display: flex;
    /* justify-content: space-around; */
    flex-wrap: wrap;
    width: 100%;
    margin-top: 150px;
  }
  .article-right {
    display: flex;
    flex-direction: column;
    width: 22rem;
    position: relative;
    left: 22rem;
    border-radius: 10px;
    /* background: #ffffff6b; */
  }

  @media screen and (max-width: 1200px) {
    .article {
      justify-content: center;
    }
    .article-right {
      width: 80%;
    }
  }







  
  /* .animation {
    animation: animate 1s;
  }

  @keyframes animate {
    0% { opacity: 0; transform: translateY(-50px);}
    100% { opacity: 1; transform: translateY(0);}
  } */
</style>