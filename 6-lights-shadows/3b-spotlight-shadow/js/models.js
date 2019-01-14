
function loadModels( scene, loader ) {

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const flamingoPos = new THREE.Vector3( -4, 3, -5 );
  const flamingoRot = new THREE.Euler( 0, Math.PI / 3, 0 );
  const flamingoScl = new THREE.Vector3( 0.025, 0.025, 0.025 );
  loader.load( 'models/Flamingo.glb', gltf => onLoad( gltf, flamingoPos, flamingoRot, flamingoScl, scene ), null, onError );

  const horsePos = new THREE.Vector3( 0, 0, -6 );
  const horseRot = new THREE.Euler( 0, Math.PI / 4, 0 );
  const horseScl = new THREE.Vector3( 0.01, 0.01, 0.01 );
  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, horsePos, horseRot, horseScl, scene ), null, onError );

}