<template>
    <tab-bar>
      <tab-bar-item path='/hot' activeColor="#00b8ffe6">
        <img slot="item-icon" src="~assets/img/tabbar/hot-fill.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/hot-fill_active.svg" alt="">
        <div slot="item-text">Hot</div>
      </tab-bar-item>
      <tab-bar-item path='/home' activeColor="#00b8ffe6">
        <img slot="item-icon" src="~assets/img/tabbar/all-fill.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/all-fill_active.svg" alt="">
        <div slot="item-text">Home</div>
      </tab-bar-item>
     
      <tab-bar-item path='/smile' activeColor="#00b8ffe6">
        <img slot="item-icon" src="~assets/img/tabbar/smile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/smile_active.svg" alt="">
        <div slot="item-text">Smile</div>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>
</style>