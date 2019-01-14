function initMeshes( scene, textures ) {

  initGround( scene, textures );
  initWall( scene, textures );

}

function initWall( scene, textures ) {

  const material = new THREE.MeshStandardMaterial( {
    map: textures.wallColor,
    bumpMap: textures.wallBump,
    bumpScale: 0.05,
    metalness: 0.1,
    roughness: 0.8,
    envMap: textures.envMap,
    envMapIntensity: 5
  } );

  const geometry = new THREE.PlaneBufferGeometry( 10, 15 );

  const mesh = new THREE.Mesh( geometry, material );

  mesh.rotation.z += Math.PI / 2;
  mesh.position.z = -2.8;
  mesh.position.y += 5.05;
  mesh.receiveShadow = true;
  scene.add( mesh );

}

function initGround( scene, textures ) {

  const repeatU = 3;
  const repeatV = 3;

  const mat = new THREE.MeshStandardMaterial( {
    map: textures.floorColor,
    normalMap: textures.floorNormal,
    normalScale: new THREE.Vector2( 1, 1 ),
    metalness: 0.0,
    roughnessMap: textures.floorRoughness,
    roughness: 1,
    envMap: textures.envMap,
    envMapIntensity: 0.25,
  } );

  const geo = new THREE.PlaneBufferGeometry( 10, 15 );

  geo.rotateZ( Math.PI / 2 );
  const mesh = new THREE.Mesh( geo, mat );

  mesh.rotation.x = - Math.PI / 2;
  mesh.position.z += 2;
  mesh.receiveShadow = true;
  scene.add( mesh );

}