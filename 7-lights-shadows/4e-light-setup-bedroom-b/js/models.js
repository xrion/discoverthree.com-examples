const onLoad = ( gltf, scene ) => {

  const model = gltf.scene.children[ 0 ];

  model.rotation.y = Math.PI;

  console.log( 'model: ', model );

  createLights( scene );

  scene.add( model );

};

function loadModels( scene ) {

  const loader = new THREE.GLTFLoader();

  THREE.DRACOLoader.setDecoderPath( 'js/vendor/three/loaders/draco/' );
	loader.setDRACOLoader( new THREE.DRACOLoader() );

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  loader.load( 'models/lighting/bedroom_bright.glb', gltf => onLoad( gltf, scene ), null, onError );

}
