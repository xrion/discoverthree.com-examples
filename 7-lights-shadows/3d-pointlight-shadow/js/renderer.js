function setupRenderer( renderer ) {

  renderer.shadowMap.enabled = true;

  renderer.shadowMap.type = THREE.PCFShadowMap; // default

  // renderer.shadowMap.type = THREE.BasicShadowMap; //  low quality, fast
  // renderer.shadowMap.type = THREE.PCFSoftShadowMap; // higher quality, slower

  // renderer.shadowMap.autoUpdate = false;

}
