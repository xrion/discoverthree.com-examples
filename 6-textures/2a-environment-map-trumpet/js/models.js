const onLoad = ( gltf, scene, materials ) => {

  // get the correct model from the loaded object
  const model = gltf.scene.getObjectByName( 'trumpet' );

  model.rotation.set( 0, 0, 0 );

  model.children[ 0 ].material = materials.silver;
  model.children[ 1 ].material = materials.brass;

  scene.add( model );

};

function loadModels( scene, materials ) {

  const loader = new THREE.GLTFLoader();

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  loader.load( 'models/trumpet/trumpet.glb', gltf => onLoad( gltf, scene, materials ), null, onError );

}
