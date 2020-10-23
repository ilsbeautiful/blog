<template>
  <div id="home">
    <NavBars/>
  </div>
</template>

<script>
  import NavBars from '@/components/content/navbars/NavBars'

  export default {
    name: 'Home',
    components: {
      NavBars
    }
  } 
</script>
<style >
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
    background-image: url(~assets/img/home/bgi.jpg);
    background-size: 100% 100%;
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