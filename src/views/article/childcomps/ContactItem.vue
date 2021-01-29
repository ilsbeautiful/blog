<template>
  <div class="" >
    <div v-if="isActive" @mouseover="mouseOver"><slot name="item-icon"></slot></div>
    <div v-else @mouseleave="mouseLeave"><slot name="item-icon-active"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "ContactItem",
    data() {
      return {
        isActive: true
      }
    },
    methods: {
      mouseOver() {
      this.isActive = !this.isActive
      },
      mouseLeave() {
        this.isActive = !this.isActive

      },
    }
  }
</script>

<style scoped>
  
</style>
