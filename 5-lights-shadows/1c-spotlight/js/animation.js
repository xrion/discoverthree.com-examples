import {
  AnimationMixer,
  Math as MathUtils,
  Spherical,
} from './vendor/three/three.module.js';

function setupSimpleRotation( mesh ) {

  mesh.userData.onUpdate = ( delta ) => {

    mesh.rotation.y += delta / 2;
    mesh.rotation.z -= delta / 4;

  };

}

function setupCircularRunningAnimation( horse ) {

  const mixer = new AnimationMixer( horse );

  const spherical = new Spherical().setFromVector3( horse.position );

  horse.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

    spherical.theta -= delta / 2;
    horse.position.setFromSpherical( spherical );

    horse.rotation.z += delta / 2;

  };

  horse.animations.forEach( ( clip ) => {

    const action = mixer.clipAction( clip );

    // start the animations at a random point so that the horses run out off sync
    action.startAt( MathUtils.randFloat( 0, 0.5 ) ).play();

  } );

}

export default function setupAnimations( meshes, models ) {

  setupSimpleRotation( meshes.shapes );

  models.horsesArray.forEach( ( model ) => {

    setupCircularRunningAnimation( model );

  } );

}
