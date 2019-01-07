function loadModels() {

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const position = new THREE.Vector3( 0, 2, 0 );
  const rotation = new THREE.Euler();
  const scale = new THREE.Vector3( 0.05, 0.05, 0.05 );
  app.loader.load( 'models/Parrot.glb', gltf => onGLTFLoad( gltf, position, rotation, scale ), null, onError );

}