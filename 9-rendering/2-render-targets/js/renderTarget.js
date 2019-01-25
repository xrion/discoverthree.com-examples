function initRenderTarget() {

  const target = new THREE.WebGLRenderTarget( 1024, 1024 );

  // You could enable this for an addition performance gain
  // but only if your sceneRT doesn't contain any overlapping geometry
  // target.depthBuffer = false;

  console.log( 'Here\'s the target you just created: ', target );
  return target;

}
