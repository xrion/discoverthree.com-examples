import {
  Bone,
  Skeleton,
} from './vendor/three/three.module.js';

export default function createSkeleton( object ) {

  // Create a simple "arm"

  const bones = [];

  const shoulder = new Bone();
  const elbow = new Bone();
  const hand = new Bone();

  shoulder.add( elbow );
  // elbow.add( hand );

  bones.push( shoulder );
  bones.push( elbow );
  // bones.push( hand );

  shoulder.position.y = 8;
  elbow.position.y = 0;
  // hand.position.y = 0;

  const skeleton = new Skeleton( bones );

  console.log( 'Here\'s the skeleton we just created: ', skeleton );

  return skeleton;

}
