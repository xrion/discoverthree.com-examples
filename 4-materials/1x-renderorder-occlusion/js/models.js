function onLoad( gltf, scene ) {

  const model = gltf.scene.children[ 0 ];

  model.position.y = 2;
  model.rotation.y = -Math.PI / 2;
  model.scale.multiplyScalar( 0.05 );

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

  loader.load( 'models/Parrot.glb', gltf => onLoad( gltf, scene ), null, onError );

}
