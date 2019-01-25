// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
const onLoad = ( gltf, scene ) => {

  const model = gltf.scene.children[ 0 ];

  model.position.y = 2;
  model.scale.setScalar( 0.025 );

  // The model has morph target. The work fine with the Kaleidoscope pass that we used
  // however, they don't work with every post-processing effect
  if ( gltf.animations[ 0 ] ) {

    const animation = gltf.animations[ 0 ];
    const mixer = new THREE.AnimationMixer( model );

    model.userData.onUpdate = ( delta ) => {

      mixer.update( delta );

    };

    const action = mixer.clipAction( animation );
    action.play();

  }

  scene.add( model );

};

function loadModels( scene, loader ) {

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  loader.load( 'models/Stork.glb', gltf => onLoad( gltf, scene ), null, onError );

}
