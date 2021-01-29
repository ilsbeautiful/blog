<template>
  <div class="Detail">
    <NavBars/>
    <el-row class="article animation">
      <div class="article-left">
        <ArticleDetail :goods='goods'/>
        <DetailMsg :iid='iid'/>
      </div>
      <div class="article-right">
        <Contact/>
        <!-- <Likeme/> -->
        <ArticleTitle/>
        <Music/>
      </div>
      <Footer/>
    </el-row>
    <BackTop/>
  </div>
</template>

<script>
import BackTop from '@/components/content/backTop/BackTop'
import Footer from '@/components/common/footer/Footer'
import NavBars from '@/components/content/navbars/NavBars'
import { getuser, getDetail } from "network/home"

import ArticleDetail from '@/views/detail/childcomps/ArticleDetail'
import DetailMsg from '@/views/detail/childcomps/DetailMsg'

import Contact from '@/views/article/childcomps/Contact'
import Likeme from '@/views/article/childcomps/Likeme'
import ArticleTitle from '@/views/article/childcomps/ArticleTitle'
import Music from '@/views/article/childcomps/Music'

export default {
  name:'Detail',
  components: {
    BackTop,
    Footer,
    NavBars,
    ArticleDetail,
    DetailMsg,
    Contact,
    Likeme,
    ArticleTitle,
    Music,
  },
  data() {
    return {
      iid: null,
      goods: {},
    }
  },
  created() {
    // this.data.token = localStorage.getItem('token')
    // getuser(this.data).then(res => {
    //   this.user = res.data.data[0]
    //   // console.log(this.user);
    // })
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      this.goods = res.data.data[0]
    })
    
  }
}
</script>

<style scoped>
  .article {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 150px;
  }
  .article-left {
    display: flex;
    flex-direction: column;
    width: 68rem;
    position: relative;
    left: 8rem;
    border-radius: 10px;
  }

  .article-right {
    display: flex;
    flex-direction: column;
    width: 22rem;
    position: relative;
    left: 22rem;
  }

  @media screen and (max-width: 1200px) {
    .article {
      justify-content: center;
    }
    .article-right {
      width: 80%;
    }
  }
</style>