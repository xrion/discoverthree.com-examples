const onLoad = ( gltf, scene ) => {

  // get the correct model from the loaded object
  const model = gltf.scene.getObjectByName( 'trumpet' );

  model.rotation.set( 0, 0, 0 );

  // name the children to something useful
  model.children[ 0 ].name = 'silver';
  model.children[ 1 ].name = 'brass';

  const materials = initMaterial( scene );

  model.children[ 0 ].material = materials.silverStandard;
  model.children[ 1 ].material = materials.brassStandard;

  setupMaterialTypeSelect( model, materials );

  scene.add( model );

};

function loadModels( scene, loader ) {

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  loader.load( 'models/trumpet.glb', gltf => onLoad( gltf, scene ), null, onError );

}
