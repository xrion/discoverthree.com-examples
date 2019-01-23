const onLoad = ( gltf, position, rotation, scale, scene ) => {

  const protoModel = gltf.scene.children[ 0 ];

  if ( position ) protoModel.position.copy( position );
  if ( rotation ) protoModel.rotation.copy( rotation );
  if ( scale ) protoModel.scale.copy( scale );

  const animation = gltf.animations[ 0 ];

  for ( let i = 0; i < 6; i++ ) {

    const model = protoModel.clone();

    // calculated using wolframalpha.com
    model.position.z = -1 / 8 * ( 98 - 19 * i + i * i );
    model.scale.setScalar( 0.0025 * ( 8 - i ) );

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

function loadModels( scene, loader ) {

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  const rotation = new THREE.Euler( 0, Math.PI / 2, 0 );

  const positionA = new THREE.Vector3( 0, 0.5, -13 );
  const scaleA = new THREE.Vector3( 0.0175, 0.0175, 0.0175 );
  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, positionA, rotation, scaleA, scene ), null, onError );

}
