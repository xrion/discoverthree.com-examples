function updateLights( matrixWorld, lights, target ) {

  target.setFromMatrixPosition( matrixWorld );

  lights.main.target.position.x = target.x;
  lights.diffuse.target.position.x = target.x;
  lights.top.target.position.x = target.x;

  lights.main.target.position.y = target.y - 0.5;
  lights.diffuse.target.position.y = target.y - 2;
  lights.top.target.position.y = target.y - 2;

}

function setupAnimation( model, lights ) {

  const headBone = model.getObjectByName( 'mixamorigHeadTop_End' );
  const lightTarget = new THREE.Vector3();

  const mixer = new THREE.AnimationMixer( model );

  model.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

    updateLights( headBone.matrixWorld, lights, lightTarget );

  };

  const action = mixer.clipAction( model.userData.animation );
  action.play();

}
