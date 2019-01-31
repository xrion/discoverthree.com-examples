const onLoad = ( gltf, scene ) => {


  const model = gltf.scene.children[ 0 ];

  console.log( 'model: ', model );

  // todo: dummy positions not working
  // const dummies = {

  //   main: model.getObjectByName( 'main_light_dummy' ),
  //   center: model.getObjectByName( 'stage_floor_center_dummy' ),

  // };


  initLights( scene );

  scene.add( model );

};

function loadModels( scene ) {

  const loader = new THREE.GLTFLoader();

  THREE.DRACOLoader.setDecoderPath( 'js/vendor/three/loaders/draco/' );
	loader.setDRACOLoader( new THREE.DRACOLoader() );

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  loader.load( 'models/lighting/stage.glb', gltf => onLoad( gltf, scene ), null, onError );

}
