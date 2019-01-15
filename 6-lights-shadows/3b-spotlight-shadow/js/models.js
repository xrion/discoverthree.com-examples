// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
const onLoad = ( gltf, position, rotation, scale, scene ) => {

  const model = gltf.scene.children[ 0 ];

  if( position ) model.position.copy( position );
  if( rotation ) model.rotation.copy( rotation );
  if( scale ) model.scale.copy( scale );
  if( gltf.animations[ 0 ] ) {

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

  model.castShadow = true;

  scene.add( model );

};

function loadModels( scene, loader ) {

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const flamingoPos = new THREE.Vector3( -4, 3, -5 );
  const flamingoRot = new THREE.Euler( 0, Math.PI / 3, 0 );
  const flamingoScl = new THREE.Vector3( 0.025, 0.025, 0.025 );
  loader.load( 'models/Flamingo.glb', gltf => onLoad( gltf, flamingoPos, flamingoRot, flamingoScl, scene ), null, onError );

  const horsePos = new THREE.Vector3( 0, 0, -6 );
  const horseRot = new THREE.Euler( 0, Math.PI / 4, 0 );
  const horseScl = new THREE.Vector3( 0.01, 0.01, 0.01 );
  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, horsePos, horseRot, horseScl, scene ), null, onError );

}