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

  const environments = loadEnvironments();
  const materials = initMaterial();

  model.children[ 0 ].material = materials.silver.standard;
  model.children[ 1 ].material = materials.brass.standard;

  scene.add( model );

};