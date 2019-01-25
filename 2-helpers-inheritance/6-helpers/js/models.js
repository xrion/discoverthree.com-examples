// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
const onLoad = ( gltf, position, rotation, scale, scene ) => {

  const model = gltf.scene.children[ 0 ];

  if ( position ) model.position.copy( position );
  if ( rotation ) model.rotation.copy( rotation );
  if ( scale ) model.scale.copy( scale );

  if ( gltf.animations[ 0 ] ) {

    const animation = gltf.animations[ 0 ];
    const mixer = new THREE.AnimationMixer( model );

    // we'll check every object in the scene for
    // this function and call it once per frame
    model.userData.onUpdate = ( delta ) => {

      mixer.update( delta );

    };

    const action = mixer.clipAction( animation );
    action.play();

  }

  scene.add( model );

  addBoxHelper( model, scene );

};

function loadModels( scene, loader ) {

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const position = new THREE.Vector3( 0, 2, 0 );
  const rotation = new THREE.Euler();
  const scale = new THREE.Vector3( 0.05, 0.05, 0.05 );
  loader.load( 'models/Parrot.glb', gltf => onLoad( gltf, position, rotation, scale, scene ), null, onError );

}
