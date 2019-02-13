import {
  AnimationMixer,
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

function setupSimpleRotation( mesh ) {

  mesh.userData.onUpdate = ( delta ) => {

    mesh.rotation.y -= delta / 6;

  };

}

export default function setupAnimation( meshes, models ) {

  setupSimpleRotation( meshes.box );

  Object.values( models ).forEach( ( model ) => {

    setupAnimationClips( model );

  } );

}
