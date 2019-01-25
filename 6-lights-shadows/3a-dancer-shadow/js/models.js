function updateLights( matrixWorld, lights, target ) {

  target.setFromMatrixPosition( matrixWorld );

  lights.mainLight.target.position.x = target.x;
  lights.diffuseLight.target.position.x = target.x;
  lights.topLight.target.position.x = target.x;

  lights.mainLight.target.position.y = target.y - 0.5;
  lights.diffuseLight.target.position.y = target.y - 2;
  lights.topLight.target.position.y = target.y - 2;

}

const onLoad = ( gltf, scene, lights, textures ) => {

  const model = gltf.scene.children[ 0 ];

  model.rotation.y = Math.PI / 3;

  const dancerBone = model.getObjectByName( 'mixamorigHeadTop_End' );
  const lightTarget = new THREE.Vector3();

  if ( gltf.animations[ 0 ] ) {

    const animation = gltf.animations[ 0 ];
    const mixer = new THREE.AnimationMixer( model );

    model.userData.onUpdate = ( delta ) => {

      mixer.update( delta );

      updateLights( dancerBone.matrixWorld, lights, lightTarget );

    };

    const action = mixer.clipAction( animation );
    action.play();

  }

  model.traverse( ( child ) => {

    child.castShadow = true;
    child.receiveShadow = true;

    if ( child.material ) {

      child.material.envMap = textures.envMap;
      child.material.envMapIntensity = 10;

    }

  } );

  scene.add( model );

};

function loadModels( scene, loader, lights, textures ) {

  console.log( textures );

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  loader.load( 'models/dancer.glb', gltf => onLoad( gltf, scene, lights, textures ), null, onError );

}
