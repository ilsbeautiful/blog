<template>
  <div class="cont">
      <cont-list-item>123</cont-list-item>
  </div>
</template>

<script>
import ContListItem from './ContListItem'

export default {
    name: 'ContList',
    components: {
      ContListItem
    },
}
</script>

<style scoped>
  .cont {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }


</style>
