import {
  AnimationMixer,
  Vector3,
} from './vendor/three/three.module.js';

function setupAnimationClips( model ) {

  const mixer = new AnimationMixer( model );

  model.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

  model.animations.forEach( ( clip ) => {

    const action = mixer.clipAction( clip );
    action.play();

  } );

}

function trackModelWithLights( model, lights ) {

  const headBone = model.getObjectByName( 'mixamorigHeadTop_End' );
  const lightTarget = new Vector3();

  lights.main.userData.onUpdate = () => {

    lightTarget.setFromMatrixPosition( headBone.matrixWorld );

    lights.main.target.position.x = lightTarget.x;
    lights.diffuse.target.position.x = lightTarget.x;
    lights.top.target.position.x = lightTarget.x;

    lights.main.target.position.y = lightTarget.y - 0.5;
    lights.diffuse.target.position.y = lightTarget.y - 2;
    lights.top.target.position.y = lightTarget.y - 2;

  };

}

export default function setupAnimation( models, lights ) {

  setupAnimationClips( models.dancer );

  trackModelWithLights( models.dancer, lights );

}
