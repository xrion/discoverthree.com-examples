// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
const onGLTFLoad = ( gltf, position, rotation, scale ) => {

  // get the correct model from the loaded object
  const model = gltf.scene.getObjectByName( 'trumpet' );

  if( position ) model.position.copy( position );
  if( rotation ) model.rotation.copy( rotation );
  if( scale ) model.scale.copy( scale );

  const environments = loadEnvironments();



  console.log(environments);

  model.traverse( ( child ) => {
    if( child.material ) {

      child.material.metalness = 0.9;
      child.material.roughness = 0.2;

      child.material.envMap = environments.cubemap;
      // child.material.envMap = environments.equirectangular;
      // child.material.envMap = environments.spherical;

      console.log(child.material);
    }
  })

  app.scene.add( model );

};