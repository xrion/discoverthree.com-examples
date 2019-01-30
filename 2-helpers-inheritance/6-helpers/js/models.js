const onLoad = ( gltf, scene ) => {

  const model = gltf.scene.children[ 0 ];

  model.position.y = 2;
  model.scale.set( 0.05, 0.05, 0.05 );

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

  addBoxHelper( model, scene );

};

function loadModels( scene ) {

  const loader = new THREE.GLTFLoader();

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  loader.load( 'models/Parrot.glb', gltf => onLoad( gltf, scene ), null, onError );

}
