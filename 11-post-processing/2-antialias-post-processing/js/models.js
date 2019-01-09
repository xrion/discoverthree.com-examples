function loadModels( loader, scene ) {

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  const position = new THREE.Vector3( -2.5, -1, 0 );
  const rotation = new THREE.Euler( 0, 0, 0 );
  const scale = new THREE.Vector3( 1, 1, 1 );
  loader.load( 'models/Samba Dancing.glb', gltf => onGLTFLoad( gltf, position, rotation, scale, scene ), null, onError );

}