import {
  AnimationMixer,
} from './vendor/three/three.module.js';

function setupAnimationClips( model ) {

  const mixer = new AnimationMixer( model );

  model.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

  for ( const clip of model.animations ) {

    const action = mixer.clipAction( clip );
    action.play();

  }

}

function setupSimpleRotation( mesh ) {

  mesh.userData.onUpdate = ( delta ) => {

    mesh.rotation.y += delta / 2;
    mesh.rotation.z -= delta / 4;

  };

}

export default function setupAnimations( meshes, models ) {

  setupSimpleRotation( meshes.box );

  setupAnimationClips( models.parrot );

}
