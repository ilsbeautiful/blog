<template>
  <div>
    <nav-bar class="home-nav">
      <img src="@/assets/img/home/favorites-fill.svg" alt="" slot="left">
      <img src="@/assets/img/home/favorites-fill.svg" alt="" slot="right">
      <input type="text" slot="center" class="search">
      <ul class="navcoll">
        <li class="naa"
            v-for="(item,index) in navArray" 
            :key="index"
            @click="leftIndex(index)"
            :class="{'navactive':active==index}">{{index}}-{{item.message}}
        </li>
      </ul>
    </nav-bar>  
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'

  export default {
    name: 'navbars',
    components: {
      NavBar
    },
    data() {
      return {
        active:-1,
        navArray: [
          { message: 'go' },
          { message: 'gogo' },
          { message: 'gogo' }
        ]
      }
    },
    methods: {
     leftIndex(index) {
        this.active = index;
      }
    },
    computed: {
      // isActive() {
      //   return this.includes(this.path)
      // },
      // ColorisActive() {
      //   return this.isActive ? {color: this.navcollactive} : {}
      // }
    }
  }
</script>

<style>
  .home-nav {
    background-color: #00000042;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .search {
    outline: none;
    padding: 2px 10px;
    width: 100%;
    border: none;
    border-radius: 50px;
    background-color: #ffffffa3;
  }
  
  .left, .right {
    width: 40px;
    height: 40px;
  }

  .navactive {
    background-color: #3d7b7d99;
    color: #8bb6dce6;
  }
  
  .naa {
    color: #000;

  }
</style>