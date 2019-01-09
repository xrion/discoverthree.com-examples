const step = Math.PI / 48;

function addPolarGridHelper( scene ) {

  const radius = 100;
  const radials = 16;
  const circles = 8;
  const divisions = 64;

  const polarGridHelper = new THREE.PolarGridHelper( radius, radials, circles, divisions );

  polarGridHelper.position.set( 0, -1, 0 );

  scene.add( polarGridHelper );

}

function createSphericalPositions() {

  const initialPos = new THREE.Vector3( -100, -1, 0 );

  const positions = [];

  const spherical = new THREE.Spherical().setFromVector3( initialPos );

  let yPos = initialPos.y;

  for( let i = 0; i < 6000; i++ ) {

    spherical.theta += step;
    // spherical.radius -= 0.025;

    const position = new THREE.Vector3().setFromSpherical( spherical );
    yPos += 0.03;

    position.y = yPos;

    positions.push( position );

  }

  return positions;

}

// A reusable function to setup the models
// We need a reference to the model once it has loaded, s
// so we'll pass in an empty variable here and assign the model to that
const onGLTFLoad = ( gltf, position, rotation, scale, scene ) => {

  // get the correct model from the loaded object
  const model = gltf.scene.children[ 0 ];

  if( position ) model.position.copy( position );
  if( rotation ) model.rotation.copy( rotation );
  if( scale ) model.scale.copy( scale );

  const animation = gltf.animations[ 0 ];

  const positions = createSphericalPositions( position );

  const models = [];

  let rotationFactor = 0;
  positions.forEach( ( position ) => {

    const newModel = model.clone();

    newModel.position.copy( position );

    rotationFactor += step;
    newModel.rotation.y = rotationFactor;

    const mixer = new THREE.AnimationMixer( newModel );

    // we'll check every object in the scene for
    // this function and call it once per frame
    newModel.userData.onUpdate = ( delta ) => {

      mixer.update( delta );

    };

    const action = mixer.clipAction( animation );

    action.play();

    models.push( newModel );

    scene.add( newModel );

  } );

  const bigModel = model.clone();
  bigModel.scale.set( 1.5, 1.5, 1.5 );
  bigModel.position.set( 0, 140, 30 );

  scene.add( bigModel );

  const mixer = new THREE.AnimationMixer( bigModel );

    // we'll check every object in the scene for
    // this function and call it once per frame
    bigModel.userData.onUpdate = ( delta ) => {

      mixer.update( delta );

    };

    const action = mixer.clipAction( animation );

    action.play();

  addPolarGridHelper( scene );

};