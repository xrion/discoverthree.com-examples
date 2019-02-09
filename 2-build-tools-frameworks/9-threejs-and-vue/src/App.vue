<template>
  <div id="app">
    <h1 class="title">{{ msg }}</h1>
    <ThreeScene/>
  </div>
</template>

<script>
import ThreeScene from './components/ThreeScene';
import './main.css';

export default {
  name: 'App',
  components: {
    ThreeScene,
  },
  data() {
    return {
      msg: 'three.js and Vue.js',
    };
  },
};
</script>
