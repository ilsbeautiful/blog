<template>
  <div id="Home">
    <NavBars/>
    <!-- <Article :article="Article"/> -->

  </div>
</template>

<script>
  import NavBars from '@/components/content/navbars/NavBars'
  // import Article from '@/components/content/Article/Article'
  // import { getdata } from "network/home"


  export default {
    name: 'Home',
    components: {
      NavBars,
      // Article,
    },
    data() {
      return {
        // Article: []
      }
    },
    created() {
      // this.getdata()
    },
    methods: {
      // getdata() {
      //   getdata().then(res => {
      //     // console.log(res)
      //     this.Article = res.data.data
      //   })
      // }
    }
  }
</script>
<style  scoped>
  #Home {
    /*padding-top: 44px;*/
    /* height: 100vh; */
    position: relative;
  }

  .content {
    overflow: hidden;
    font-weight: bold;
    color: #d58cecd4;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>