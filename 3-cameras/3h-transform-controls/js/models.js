const onLoad = ( gltf, scene ) => {

  const protoModel = gltf.scene.children[ 0 ];

  protoModel.position.set( 0, 0.5, -15 );
  protoModel.rotation.set( 0, Math.PI / 2, 0 );

  const animation = gltf.animations[ 0 ];

  for ( let i = 0; i < 10; i++ ) {

    const model = protoModel.clone();

    model.position.z += 1.6 * i;

    model.scale.setScalar( 0.02 - 0.002 * i );

    const mixer = new THREE.AnimationMixer( model );

    const spherical = new THREE.Spherical().setFromVector3( model.position );

    model.userData.onUpdate = ( delta ) => {

      mixer.update( delta );

      spherical.theta -= delta / 2;
      model.position.setFromSpherical( spherical );
      model.rotation.y -= delta / 2;

    };

    const action = mixer.clipAction( animation );
    action.startAt( THREE.Math.randFloat( 0, 0.5 ) ).play();

    scene.add( model );

  }

};

function loadModels( scene ) {

  const loader = new THREE.GLTFLoader();

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, scene ), null, onError );

}
