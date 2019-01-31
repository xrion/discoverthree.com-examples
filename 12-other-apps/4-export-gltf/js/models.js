// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
const onLoad = ( gltf, scene ) => {

  const model = gltf.scene.children[ 0 ];

  console.log(gltf.animations[0]);

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

  setupExportControl( model, gltf.animations );

  scene.add( model );

};

function loadModels( scene ) {

  const loader = new THREE.GLTFLoader();

  const onError = ( errorMessage ) => { console.log( errorMessage ); };


  // loader.load( 'models/Parrot.glb', gltf => onLoad( gltf, scene ), null, onError );
  // loader.load( 'models/Parrot_u.glb', gltf => onLoad( gltf, scene ), null, onError );
  loader.load( 'models/Parrot_e.glb', gltf => onLoad( gltf, scene ), null, onError );

  // loader.load( 'models/Flamingo.glb', gltf => onLoad( gltf, scene ), null, onError );
  // loader.load( 'models/Flamingo_u.glb', gltf => onLoad( gltf, scene ), null, onError );

  // loader.load( 'models/Stork.glb', gltf => onLoad( gltf, scene ), null, onError );
  // loader.load( 'models/Stork_u.glb', gltf => onLoad( gltf, scene ), null, onError );

  // loader.load( 'models/Horse.glb', gltf => onLoad( gltf, scene ), null, onError );
  // loader.load( 'models/Horse_u.glb', gltf => onLoad( gltf, scene ), null, onError );

}
