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

    const spherical = new THREE.Spherical().setFromVector3( position )

    // we'll check every object in the scene for
    // this function and call it once per frame
    model.userData.onUpdate = ( delta ) => {

      mixer.update( delta );

      spherical.theta -= delta / 2;
      model.position.setFromSpherical( spherical );
      model.rotation.y -= delta / 2;

    };


    const action = mixer.clipAction( animation );
    action.startAt( THREE.Math.randFloat( 0, 0.5 ) ).play();

  }

  model.castShadow = true;

  scene.add( model );

};