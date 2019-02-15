import {
  AnimationMixer,
} from './vendor/three/three.module.js';

function setupSimpleRotation( mesh, helper ) {

  mesh.userData.onUpdate = ( delta ) => {

    mesh.rotation.z -= delta;
    helper.update();

  };

}

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

export default function setupAnimation( meshes, models, helpers ) {

  setupSimpleRotation( meshes.shape, helpers.vertexNormals );

  Object.values( models ).forEach( ( model ) => {

    setupAnimationClips( model );

  } );

}
