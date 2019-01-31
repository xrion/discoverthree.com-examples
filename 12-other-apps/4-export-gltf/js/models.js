// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
const onLoad = ( gltf, scene ) => {

  const model = gltf.scene.children[ 0 ];

  console.log(gltf);

  // model.position.copy( position );

  // scale the birds down to be actual bird sized (roughly)
  // model.scale.set( 0.05, 0.05, 0.05 );

  if ( gltf.animations[ 0 ] ) {

    const animation = gltf.animations[ 0 ];
    // animation.tracks[0].name = '.morphTargetInfluences';

    const mixer = new THREE.AnimationMixer( model );

    // we'll check every object in the scene for
    // this function and call it once per frame
    model.userData.onUpdate = ( delta ) => {

      mixer.update( delta );

    };

    const action = mixer.clipAction( animation );
    action.play();

  }

  model.geometry.computeBoundingBox()

  console.log(model.geometry.boundingBox);

  console.log(model);
  scene.add( model );

};

function loadModels( scene ) {

  const loader = new THREE.GLTFLoader();

  const onError = ( errorMessage ) => { console.log( errorMessage ); };


  // loader.load( 'models/Parrot.glb', gltf => onLoad( gltf, scene ), null, onError );
  // loader.load( 'models/Parrot_u.glb', gltf => onLoad( gltf, scene ), null, onError );

  // loader.load( 'models/Flamingo.glb', gltf => onLoad( gltf, scene ), null, onError );
  // loader.load( 'models/Flamingo_u.glb', gltf => onLoad( gltf, scene ), null, onError );

  // loader.load( 'models/Stork.glb', gltf => onLoad( gltf, scene ), null, onError );
  // loader.load( 'models/Stork_u.glb', gltf => onLoad( gltf, scene ), null, onError );

  // loader.load( 'models/Horse.glb', gltf => onLoad( gltf, scene ), null, onError );
  loader.load( 'models/Horse_u.glb', gltf => onLoad( gltf, scene ), null, onError );

}
