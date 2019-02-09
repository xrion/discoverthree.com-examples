const onLoad = ( gltf, scene ) => {

  console.timeEnd( 'Loading time: ' );

  const model = gltf.scene.children[ 0 ];

  scene.add( model );

};

function loadModels( scene ) {

  const loader = new THREE.GLTFLoader();

  THREE.DRACOLoader.setDecoderPath( 'js/vendor/three/loaders/draco/' );
  loader.setDRACOLoader( new THREE.DRACOLoader() );

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  console.time( 'Loading time: ' );
  loader.load( 'models/statues/rhino/rhino-draco.glb', gltf => onLoad( gltf, scene ), null, onError );

}
