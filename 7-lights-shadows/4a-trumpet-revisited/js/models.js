const onLoad = ( gltf, scene, materials ) => {

  // get the correct model from the loaded object
  const model = gltf.scene.getObjectByName( 'trumpet' );

  model.rotation.set( 0, 0, 0 );

  model.children[ 0 ].material = materials.silver;
  model.children[ 1 ].material = materials.brass;

  model.children[ 0 ].castShadow = true;
  model.children[ 0 ].receiveShadow = true;

  model.children[ 1 ].castShadow = true;
  model.children[ 1 ].receiveShadow = true;

  model.userData.onUpdate = ( delta ) => {

    model.rotation.y += 0.1 * delta;

  };

  scene.add( model );

};

function loadModels( scene, materials ) {

  const loader = new THREE.GLTFLoader();

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  loader.load( 'models/trumpet/trumpet.glb', gltf => onLoad( gltf, scene, materials ), null, onError );

}
