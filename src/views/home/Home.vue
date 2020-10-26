<template>
  <div id="home">
    <NavBars/>
    <contlist/>
    <GoodList/>
  </div>
</template>

<script>
  import NavBars from '@/components/content/navbars/NavBars'
  import contlist from '@/components/content/contentlist/ContList'
  import GoodList from '@/components/content/goods/GoodsList'

  export default {
    name: 'Home',
    components: {
      NavBars,
      contlist,
      GoodList
    }
  } 
</script>
<style >
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
    
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
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