<template id="myTemplate">
  <div>
      <h1>qew</h1>

    <div><slot name="item-icon-active"></slot></div>
    <div class="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  }
  .activeStyle {
      color: aqua;
  }
</style>