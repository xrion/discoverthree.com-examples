<template>
  <div id="container">
    <!-- This div will hold our scene-->
  </div>
</template>

<script>

import initScene from './js/Scene.js'


export default {
  name: 'ThreeScene',
  // called once the component has been added to the page
  mounted: () => initScene(),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
