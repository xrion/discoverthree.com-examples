function setupRenderer( renderer ) {

  // renderer.toneMapping = THREE.ACESFilmicToneMapping;

  renderer.toneMappingExposure = 0.15;

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

}
