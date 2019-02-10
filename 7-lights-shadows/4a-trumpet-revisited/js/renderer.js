function setupRenderer( renderer ) {

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // renderer.toneMapping;
  // renderer.toneMapping = THREE.NoToneMapping;
  // renderer.toneMapping = THREE.LinearToneMapping; // default
  // renderer.toneMapping = THREE.ReinhardToneMapping;
  // renderer.toneMapping = THREE.Uncharted2ToneMapping;
  // renderer.toneMapping = THREE.CineonToneMapping;
  // renderer.toneMapping = THREE.ACESFilmicToneMapping;

  renderer.toneMappingExposure = 0.75;


}
