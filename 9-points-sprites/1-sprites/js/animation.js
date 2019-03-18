import {
  Math as MathUtils,
} from './vendor/three/three.module.js';

function setupSimpleRotation( object ) {

  // we'll rotate the group containing all the
  // sprites to give a whirling wind effect
  object.userData.onUpdate = ( delta ) => {

    object.rotation.x += delta / 10;
    object.rotation.y += delta;
    object.rotation.z -= delta / 10;

  };

}

// We want to make each individual leaf swirl,
// but we can't rotate sprites directly.
// Instead
// we need to apply a rotation to the material
function setupSpriteMaterialRotation( sprite ) {

  const factor = MathUtils.randFloat( 2, 7 );

  sprite.userData.onUpdate = function ( delta ) {

    sprite.material.rotation += delta * factor;

  };
}


export default function setupAnimation( sprites ) {

  setupSimpleRotation( sprites.leaves );

  sprites.leaves.children.forEach( ( sprite ) => {

    setupSpriteMaterialRotation( sprite );

  } );

}
