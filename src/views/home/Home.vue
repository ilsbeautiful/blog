<template>
  <div id="Home">
    <NavBars/>
    <!-- <ContList class="box animate__animated animate__bounceInDown"/> -->
    <ContList class="animation"/>

  </div>
</template>

<script>
  import NavBars from '@/components/content/navbars/NavBars'
  import ContList from '@/components/content/contentlist/ContList'

  export default {
    name: 'Home',
    components: {
      NavBars,
      ContList
    },
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>
<style scoped>
  #Home {
    /* position: relative; */
  }

 
</style>