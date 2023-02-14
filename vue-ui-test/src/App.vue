<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
// import { IconMaster } from '../../src/vue'
import { IconMaster } from '../../dist/vue'
</script>

<template>
  <div>
    <IconMaster colorRef="ff0000" nameRef="After-the-rain" />
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
._aaaa {
  width: 100px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
