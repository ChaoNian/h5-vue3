<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import {useCssVar} from '@vueuse/core'

const change = (num:number) => {
  //  不引入useCssVar时 
  // vue内部是通过设置 
  // document?.documentElement?.style.getPropertyValue('--size')
  // document?.documentElement?.style.setProperty('--size', num + 'px')
  
  // 刷新后 会恢复，可以在localstorage 存一份数据
   const size = useCssVar('--size')
   size.value = num + 'px'
}
</script>

<template>
  <div>
    <header class="header">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </header>
    <div>
      <button @click="change(36)">大</button>
      <button @click="change(24)">中</button>
      <button @click="change(14)">小</button>
    </div>
   
    <div class="flex. red m-10">121212</div>
    <div class="cike">wewewe</div>
  </div>


  <!-- <RouterView /> -->
</template>

<style scoped lang="less">
:root {
  --size:14px;
}
.header {
  display: flex;

  div {
    height: 50px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    font-size: var(--size);
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
