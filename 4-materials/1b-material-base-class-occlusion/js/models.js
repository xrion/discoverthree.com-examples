function onLoad( gltf, position, rotation, scale, scene ) {

  const model = gltf.scene.children[ 0 ];

  if ( position ) model.position.copy( position );
  if ( rotation ) model.rotation.copy( rotation );
  if ( scale ) model.scale.copy( scale );

  model.renderOrder = 0;

  model.material.colorWrite = false;

  const max = new THREE.Vector3( 8, 5, -10 );
  const min = new THREE.Vector3( -8, -5, 4 );

  let t = 0;

  model.position.x = max.x;

  if ( gltf.animations[ 0 ] ) {

    const animation = gltf.animations[ 0 ];
    const mixer = new THREE.AnimationMixer( model );

    // we'll check every object in the scene for
    // this function and call it once per frame
    model.userData.onUpdate = ( delta ) => {

      mixer.update( delta );

      // once t reaches 1,
      // move the bird to a new random position
      if ( t > 1 ) {

        t = 0;
        model.position.y = THREE.Math.randFloat( min.y, max.y );
        model.position.z = THREE.Math.randFloat( min.z, max.z );

      }

      t += delta / 3;

      model.position.x = THREE.Math.lerp( max.x, min.x, t );

    };

    const action = mixer.clipAction( animation );
    action.play();

  }

  scene.add( model );

}

function loadModels( scene, loader ) {

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const position = new THREE.Vector3( 0, 2, 0 );
  const rotation = new THREE.Euler( 0, -Math.PI / 2, 0 );
  const scale = new THREE.Vector3( 0.05, 0.05, 0.05 );
  loader.load( 'models/Parrot.glb', gltf => onLoad( gltf, position, rotation, scale, scene ), null, onError );

}
