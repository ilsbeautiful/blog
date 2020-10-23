<template>
  <div id="home" class="wrapper">
    <nav-bar><div slot="center">博客</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'

  export default {
    name: 'Home',
    components: {
      NavBar
    }
  } 
</script>
<style >
 #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
    background-image: url(~assets/img/home/mtimg.jpg);
    background-size: 100%;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
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