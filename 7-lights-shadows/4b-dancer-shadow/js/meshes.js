function initWall( material ) {

  const geometry = new THREE.PlaneBufferGeometry( 10, 45 );

  const backWall = new THREE.Mesh( geometry, material );

  backWall.rotation.z += Math.PI / 2;

  backWall.position.set( 0, 5.05, -2.8 );
  backWall.receiveShadow = true;

  // const geometryB = new THREE.PlaneBufferGeometry( 10, 10 );
  // const wallRight = new THREE.Mesh( geometryB, material );
  // wallRight.position.set( 8, 5.05, 0 );
  // wallRight.rotation.y -= Math.PI / 2;
  // wallRight.receiveShadow = true;

  return backWall;

}

function initFloor( material ) {

  const geometry = new THREE.PlaneBufferGeometry( 10, 120 );

  geometry.rotateZ( Math.PI / 2 );
  const floor = new THREE.Mesh( geometry, material );

  floor.rotation.x = -Math.PI / 2;
  floor.position.z += 2;
  floor.receiveShadow = true;

  return floor;

}

function createMeshes( materials ) {

  const floor = initFloor( materials.floor );
  const backWall = initWall( materials.wall );

  return { floor, backWall };

}
