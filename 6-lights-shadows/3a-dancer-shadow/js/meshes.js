function initWall( scene, textures ) {

  const material = new THREE.MeshStandardMaterial( {
    map: textures.wallColor,
    bumpMap: textures.wallBump,
    bumpScale: 0.05,
    metalness: 0.1,
    roughness: 0.8,
    envMap: textures.envMap,
    envMapIntensity: 5,
  } );

  const geometry = new THREE.PlaneBufferGeometry( 10, 45 );

  const mesh = new THREE.Mesh( geometry, material );

  mesh.rotation.z += Math.PI / 2;

  mesh.position.set( 0, 5.05, -2.8 );
  mesh.receiveShadow = true;
  scene.add( mesh );

  const geometryB = new THREE.PlaneBufferGeometry( 10, 10 );
  const wallB = new THREE.Mesh( geometryB, material );
  wallB.position.set( 8, 5.05, 0 );
  wallB.rotation.y -= Math.PI / 2;
  wallB.receiveShadow = true;

  scene.add( wallB );
}

function initGround( scene, textures ) {

  const mat = new THREE.MeshStandardMaterial( {
    map: textures.floorColor,
    normalMap: textures.floorNormal,
    normalScale: new THREE.Vector2( 1, 1 ),
    metalness: 0.1,
    roughness: 0.4,
    envMap: textures.envMap,
    envMapIntensity: 0.25,
  } );

  const geo = new THREE.PlaneBufferGeometry( 10, 120 );

  geo.rotateZ( Math.PI / 2 );
  const mesh = new THREE.Mesh( geo, mat );

  mesh.rotation.x = -Math.PI / 2;
  mesh.position.z += 2;
  mesh.receiveShadow = true;
  scene.add( mesh );

}

function initMeshes( scene, textures ) {

  initGround( scene, textures );
  initWall( scene, textures );

}
