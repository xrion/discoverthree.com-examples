import {
  AnimationMixer,
} from './vendor/three/three.module.js';

function setupAnimationClip( model, clip ) {

  const mixer = new AnimationMixer( model );

  model.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

  const action = mixer.clipAction( clip );
  action.play();

}

function setupSimpleRotation( mesh ) {

  mesh.userData.onUpdate = ( delta ) => {

    mesh.rotation.y -= delta / 6;

  };

}

export default function setupAnimation( meshes, models, animations ) {

  setupSimpleRotation( meshes.box );

  setupAnimationClip( models.parrot, animations.parrotAnimation );

}
