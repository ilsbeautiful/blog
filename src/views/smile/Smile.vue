<template>
  <div id="smile">
    <NavBars/>
  </div>
</template>

<script>
import NavBars from '@/components/content/navbars/NavBars'

export default {
  name: "Smile",
  components: {
      NavBars
    }
}
</script>

<style scoped>
  #smile {
    height: 100vh;
    position: relative;
    background-image: url(~assets/img/home/mtimg.jpg);
    background-size: 100%;
  }
</style>