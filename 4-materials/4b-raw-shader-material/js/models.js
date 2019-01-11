
function loadModels() {

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const position = new THREE.Vector3( 0, 2, 0 );
  const rotation = new THREE.Euler( 0, Math.PI, 0 );
  const scale = new THREE.Vector3( 0.025, 0.025, 0.025 );
  app.loader.load( 'models/Horse.glb', gltf => onGLTFLoad( gltf, position, rotation, scale ), null, onError );

}