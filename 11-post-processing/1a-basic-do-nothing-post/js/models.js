// A reusable function to setup the models
// We need a reference to the model once it has loaded, s
// so we'll pass in an empty variable here and assign the model to that
const onLoad = ( gltf, position, rotation, scale, lights, envMaps ) => {

  // get the correct model from the loaded object
  const model = gltf.scene.getObjectByName( 'name' );

  if( position ) model.position.copy( position );
  if( rotation ) model.rotation.copy( rotation );
  if( scale ) model.scale.copy( scale );

  app.scene.add( model );

};

function loadModels( lights, envMaps ) {

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  const position = new THREE.Vector3(-2, 0, 0 );
  const rotation = new THREE.Euler( 0, 0, 0 );
  const scale = new THREE.Vector3( 1, 1, 1 );
  app.loader.load( 'models/Samba Dancing.glb', gltf => onLoad( gltf, position, rotation, scale, lights, envMaps ), null, onError );

  return modelRef;

}