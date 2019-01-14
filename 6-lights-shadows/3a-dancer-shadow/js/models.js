function updateLights( matrixWorld, lights, target ) {

  target.setFromMatrixPosition( matrixWorld );

  mainLight.target.position.x = target.x;
  diffuseLight.target.position.x = target.x;
  topLight.target.position.x = target.x;

  mainLight.target.position.y = target.y - 0.5;
  diffuseLight.target.position.y = target.y - 2;
  topLight.target.position.y = target.y - 2;

}

const onLoad = ( gltf, position, rotation, scale, scene, lights, textures ) => {

  const model = gltf.scene.children[ 0 ];

  if( position ) model.position.copy( position );
  if( rotation ) model.rotation.copy( rotation );
  if( scale ) model.scale.copy( scale );

  const dancerBone = model.getObjectByName( 'mixamorigHeadTop_End' );
  const lightTarget = new THREE.Vector3();

  if( gltf.animations[ 0 ] ) {

    const animation = gltf.animations[ 0 ];
    const mixer = new THREE.AnimationMixer( model );

    // we'll check every object in the scene for
    // this function and call it once per frame
    model.userData.onUpdate = ( delta ) => {

      mixer.update( delta );

      updateLights( dancerBone.matrixWorld, lights, lightTarget )

    };

    const action = mixer.clipAction( animation );
    action.play();

  }

  console.log( textures );

  model.traverse( ( child ) => {

    child.castShadow = true;
    child.receiveShadow = true;

    if( child.material ) {
      child.material.envMap = textures.envMap;
      child.material.envMapIntensity = 10;

      console.log(child.material);
    }

  } );

  scene.add( model );

};

function loadModels( scene, loader, lights, textures ) {

  console.log( textures );

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  const position = new THREE.Vector3( 0, 0, 0 );
  const rotation = new THREE.Euler( 0, Math.PI / 3, 0 );
  const scale = new THREE.Vector3( 1, 1, 1 );
  loader.load( 'models/dancer.glb', gltf => onLoad( gltf, position, position, scale, scene, lights, textures ), null, onError );

}