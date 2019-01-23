const onLoad = ( gltf, position, rotation, scale, scene ) => {

  // get the correct model from the loaded object
  const model = gltf.scene.getObjectByName( 'trumpet' );

  // name the children to something useful
  model.children[ 0 ].name = 'silver';
  model.children[ 1 ].name = 'brass';

  if ( position ) model.position.copy( position );
  if ( rotation ) model.rotation.copy( rotation );
  if ( scale ) model.scale.copy( scale );

  const materials = initMaterial( scene );

  model.children[ 0 ].material = materials.silverStandard;
  model.children[ 1 ].material = materials.brassStandard;

  setupMaterialTypeSelect( model, materials );

  scene.add( model );

};

function loadModels( scene, loader ) {

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const position = new THREE.Vector3( 0, 0, 0 );
  const rotation = new THREE.Euler( 0, 0, 0 );
  const scale = new THREE.Vector3( 1, 1, 1 );
  loader.load( 'models/trumpet.glb', gltf => onLoad( gltf, position, rotation, scale, scene ), null, onError );

}
