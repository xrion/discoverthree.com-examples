import {
  Group,
  Math as MathUtils,
  Sprite,
} from './vendor/three/three.module.js';

function createLeaves( materials ) {

  const leaves = new Group();

  for ( let i = 0; i < 500; i++ ) {

    const sprite = new Sprite( materials.leaf.clone() );

    sprite.position.set(

      MathUtils.randFloat( -20, 20 ), // x
      MathUtils.randFloat( -20, 20 ), // y
      MathUtils.randFloat( -20, 20 ), // z

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
