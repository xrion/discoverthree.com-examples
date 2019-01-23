// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
const onLoad = ( gltf, position, rotation, scale, scene ) => {

  const model = gltf.scene.children[ 0 ];

  if ( position ) model.position.copy( position );
  if ( rotation ) model.rotation.copy( rotation );
  if ( scale ) model.scale.copy( scale );
  if ( gltf.animations[ 0 ] ) {

    const animation = gltf.animations[ 0 ];
    const mixer = new THREE.AnimationMixer( model );

    const spherical = new THREE.Spherical().setFromVector3( position );

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

function loadModels( scene, loader ) {

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  const rotation = new THREE.Euler( 0, Math.PI / 2, 0 );

  const positionA = new THREE.Vector3( 0, 0.5, -10 );
  const scaleA = new THREE.Vector3( 0.0175, 0.0175, 0.0175 );
  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, positionA, rotation, scaleA, scene ), null, onError );

  const positionB = new THREE.Vector3( 0, 0.5, -8 );
  const scaleB = new THREE.Vector3( 0.015, 0.015, 0.015 );
  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, positionB, rotation, scaleB, scene ), null, onError );

  const positionC = new THREE.Vector3( 0, 0.5, -6.25 );
  const scaleC = new THREE.Vector3( 0.0125, 0.0125, 0.0125 );
  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, positionC, rotation, scaleC, scene ), null, onError );

  const positionD = new THREE.Vector3( 0, 0.5, -4.75 );
  const scaleD = new THREE.Vector3( 0.0075, 0.0075, 0.0075 );
  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, positionD, rotation, scaleD, scene ), null, onError );

  const positionE = new THREE.Vector3( 0, 0.5, -3.5 );
  const scaleE = new THREE.Vector3( 0.005, 0.005, 0.005 );
  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, positionE, rotation, scaleE, scene ), null, onError );

  const positionF = new THREE.Vector3( 0, 0.5, -2.5 );
  const scaleF = new THREE.Vector3( 0.0025, 0.0025, 0.0025 );
  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, positionF, rotation, scaleF, scene ), null, onError );

}
