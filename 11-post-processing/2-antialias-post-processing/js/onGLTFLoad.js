const step = Math.PI / 48;

const models = [];

const group = new THREE.Group();

group.userData.onUpdate = ( delta ) => {

  group.rotation.y += delta / 18 ;

}

initModelsAmountSlider( group, models );



function createSphericalPositions() {

  const initialPos = new THREE.Vector3( -100, -1, 0 );

  const positions = [];

  const spherical = new THREE.Spherical().setFromVector3( initialPos );

  let yPos = initialPos.y;

  for( let i = 0; i < 8000; i++ ) {

    const theta = THREE.Math.randFloat( step / 2, step * 1.5 );

    spherical.theta += theta;
    spherical.radius = THREE.Math.randFloat( 60, 100 );

    const position = new THREE.Vector3().setFromSpherical( spherical );
    yPos += 0.025;

    position.y = yPos;

    positions.push( {
      vec: position,
      rot: theta
    } );

  }

  return positions;

}

// A reusable function to setup the models
// We need a reference to the model once it has loaded, s
// so we'll pass in an empty variable here and assign the model to that
const onGLTFLoad = ( gltf, position, rotation, scale, scene, offset ) => {

  // get the correct model from the loaded object
  const model = gltf.scene.children[ 0 ];

  if( position ) model.position.copy( position );
  if( rotation ) model.rotation.copy( rotation );
  if( scale ) model.scale.copy( scale );

  const animation = gltf.animations[ 0 ];

  const positions = createSphericalPositions( position );

  let rotationFactor = 0;
  positions.forEach( ( position, index ) => {

     // console.log(position);
     rotationFactor += position.rot;

    if( index % 2 === offset ) {

      const newModel = model.clone();

      newModel.position.copy( position.vec );


      newModel.rotation.y = rotationFactor;

      const mixer = new THREE.AnimationMixer( newModel );

      newModel.userData.onUpdate = ( delta ) => {

        mixer.update( delta );

      };

      const action = mixer.clipAction( animation );

      // set the birds to start at random times so that they  don't flap in sync
      action.startAt( THREE.Math.randFloat( 0, 1.2 ) ).play();

      models[ index ] = newModel;

    }

  } );

  if( offset === 0 ) {

    scene.add( group );

    const bigModel = model.clone();
    bigModel.scale.set( 1.5, 1.5, 1.5 );
    bigModel.position.set( 0, 140, 30 );

    scene.add( bigModel );

    const mixer = new THREE.AnimationMixer( bigModel );

      bigModel.userData.onUpdate = ( delta ) => {

        mixer.update( delta );

      };

      const action = mixer.clipAction( animation );

      action.play();
  }

};