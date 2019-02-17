import {
  Group,
  Math as MathUtils,
  Sprite,
} from './vendor/three/three.module.js';

function createLeaves( materials ) {

  const leaves = new Group();

  for ( let i = 0; i < 100; i++ ) {

    const sprite = new Sprite( materials.leaf.clone() );

    sprite.position.set(

      MathUtils.randFloat( -20, 20 ),
      MathUtils.randFloat( -20, 20 ),
      MathUtils.randFloat( -20, 20 ),

    );

    leaves.add( sprite );

  }

  return leaves;

}

export default function createSprites( materials ) {

  return {

    leaves: createLeaves( materials ),

  };

}
