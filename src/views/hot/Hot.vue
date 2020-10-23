<template>
  <div id="hot">
    <NavBars/>
  </div>
</template>

<script>
import NavBars from '@/components/content/navbars/NavBars'

export default {
  name: 'Hot',
  components: {
      NavBars
    }
}
</script>

<style scoped>
  #hot {
    height: 100vh;
    position: relative;
    background-image: url(~assets/img/home/mtimg.jpg);
    background-size: 100%;
  }
</style>