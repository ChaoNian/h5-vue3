<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <header class="header">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </header>
  </div>


  <!-- <RouterView /> -->
</template>

<style scoped lang="less">
.header {
  display: flex;

  div {
    height: 50px;
    line-height: 50px;
    color: #fff;
    text-align: center;
  }

  div:nth-child(1) {
    width: 100px;
    background-color: rebeccapurple;
  }

  div:nth-child(2) {
    flex: 1;
    background-color: blue;
  }

  div:nth-child(3) {
    width: 100px;
    background-color: darkcyan;
  }
}
</style>
