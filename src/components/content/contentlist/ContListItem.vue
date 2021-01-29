<template>
  <div class="cont-list">
    <!-- <h2>Welcome to my blog</h2> -->
    <div class="container">
    <svg viewBox="0 0 1000 300">
     <symbol id="line-text">
       <text text-anchor="middle" x="50%" y="50%" dy=".4em">
         Welcome to my blog
       </text>
     </symbol>
     <use xlink:href="#line-text" class="text"></use>
     <use xlink:href="#line-text" class="text"></use>
     <use xlink:href="#line-text" class="text"></use>
     <use xlink:href="#line-text" class="text"></use>
    </svg>
  </div>
  </div>
</template>

<script>
export default {
    name: 'ContListItem'
}
</script>

<style>
.cont-list {
    width: 100%;
    position: relative;
    /* height: 300px; */
    /* text-align: center; */
    /* position: absolute; */
    left: 0;
    top: 2rem;
    font-family: 'Sigmar One', Arial;
    text-shadow: 0 5px 1px #47456d;
}

.container {
  font-size: 45px;
  font-weight: bold;
  /* text-transform: uppercase; */
}

/* svg {
  position: absolute;
  width: 100%;
  height: 100%;
} */

.text {
  fill: none;
  stroke-width: 3px;
  stroke-dasharray: 0 240;
  stroke-dashoffset: 1000;
}

.text:nth-child(4n + 1) {
  stroke: rgb(39, 135, 238);
  animation: text1 2s ease-out infinite alternate forwards;
}
.text:nth-child(4n + 2) {
  stroke: rgb(47, 169, 92);
  animation: text2 2s ease-out infinite alternate forwards;
}
.text:nth-child(4n + 3) {
  stroke: rgb(249, 189, 56);
  animation: text3 2s ease-out infinite alternate forwards;
}
.text:nth-child(4n + 4) {
  stroke: rgb(235, 61, 50);
  animation: text4 2s ease-out infinite alternate forwards;
}

@keyframes text1 {
  100% {
    stroke-dashoffset: 1000;
    stroke-dasharray: 60 180;
  }
}

@keyframes text2 {
  100% {
    stroke-dashoffset: 1060;
    stroke-dasharray: 60 180;
  }
}

@keyframes text3 {
  100% {
    stroke-dashoffset: 1120;
    stroke-dasharray: 60 180;
  }
}

@keyframes text4 {
  100% {
    stroke-dashoffset: 1180;
    stroke-dasharray: 60 180;
  }
}

@media screen and (max-width: 992px) {
  .container {
    font-size: 75px;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>