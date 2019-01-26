function createSkeleton( object ) {

  // Create a simple "arm"

  const bones = [];

  const shoulder = new THREE.Bone();
  const elbow = new THREE.Bone();
  const hand = new THREE.Bone();

  shoulder.add( elbow );
  // elbow.add( hand );

  bones.push( shoulder );
  bones.push( elbow );
  // bones.push( hand );

  shoulder.position.y = 8;
  elbow.position.y = 0;
  // hand.position.y = 0;

  const skeleton = new THREE.Skeleton( bones );

  console.log( 'Here\'s the skeleton we just created: ', skeleton );

  return skeleton;

}
