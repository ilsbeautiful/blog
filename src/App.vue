<template>
  <div id="app">
    <!-- <keep-alive :include='ArticleList'> -->
      <router-view/>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  height: 100%;
}
@import 'assets/css/base.css';
body {
  background-image: url(~assets/img/bgi/321.jpg);
  background-attachment: fixed;
  background-size: 100% ;
}

 @media screen and (max-width: 992px) {
    body {
      background-image: url(~assets/img/bgi/25.gif);
      background-attachment: fixed;
      /* background-size: 100% 100%; */
    }
  }
</style>