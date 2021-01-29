<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="right" @click="shownav"><slot name="right"></slot></div>
    
    <!-- <div class="navbar-collapse" v-show="navbarcoll"><slot></slot></div> -->
  </div>
  
</template>

<script>
export default {
    name: "Header",
    data() {
      return {
        navbarcoll : false
      }
    },
    methods: {
      shownav() {
        this.navbarcoll = !this.navbarcoll
      }
    },
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    /* height: 44px; */
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }

  .left {
    flex: 1;
  }

  .right{
    flex: 4;
    display: flex;
    justify-content: space-around;
    
  }

  .left img,
  .right img {
    margin: 5px;
    width: 40px;
    height: 35px;
  }
 
  .navbar-collapse {
    width: 100%;
    background-color: #1c24388f;
  }
</style>
