<template>
  <div id="Photo">
    <NavBars/>
  </div>
</template>

<script>
import NavBars from '@/components/content/navbars/NavBars'

export default {
  name: "Photo",
  components: {
      NavBars
    }
}
</script>

<style scoped>
  #Photo {
    height: 100vh;
    position: relative;
    /* background-image: url(~assets/img/home/mtimg.jpg); */
    background-size: 100%;
  }
</style>