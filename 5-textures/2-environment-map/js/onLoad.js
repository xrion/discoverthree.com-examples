const onLoad = ( gltf, position, rotation, scale, scene ) => {

  // get the correct model from the loaded object
  const model = gltf.scene.getObjectByName( 'trumpet' );

  console.log(model);
  // name the children to something useful
  model.children[ 0 ].name = 'silver';
  model.children[ 1 ].name = 'brass';

  if( position ) model.position.copy( position );
  if( rotation ) model.rotation.copy( rotation );
  if( scale ) model.scale.copy( scale );

  const materials = initMaterial( scene );

  model.children[ 0 ].material = materials.silverStandard;
  model.children[ 1 ].material = materials.brassStandard;

  setupMaterialTypeSelect( model, materials );

  scene.add( model );

};