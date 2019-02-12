import {
  Group,
  Math as MathUtils,
  Sprite,
} from './vendor/three/three.module.js';

export default function createSprites( materials ) {

  const leaves = new Group();

  // we'll create a group to hold all the sprites, and
  // then set that to rotating to give a swirling wind effect
  leaves.userData.onUpdate = ( delta ) => {

    leaves.rotation.x += delta / 10;
    leaves.rotation.y += delta;
    leaves.rotation.z -= delta / 10;

  };


  for ( let i = 0; i < 100; i++ ) {

    const sprite = new Sprite( materials.leaf.clone() );

    sprite.position.set(
      MathUtils.randFloat( -20, 20 ),
      MathUtils.randFloat( -20, 20 ),
      MathUtils.randFloat( -20, 20 ),
    );

    const factor = MathUtils.randFloat( -5, 5 );

    sprite.userData.onUpdate = function ( delta ) {

      // we can't rotate the sprite directly, instead
      // we need to apply a rotation to the material
      sprite.material.rotation += delta * factor;

    };

    leaves.add( sprite );

  }

  return { leaves };

}
