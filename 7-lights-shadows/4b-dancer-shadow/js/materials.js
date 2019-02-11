function createFloorMaterial( textures ) {

  return new MeshStandardMaterial( {
    map: textures.floorColor,
    normalMap: textures.floorNormal,
    normalScale: new Vector2( 1, 1 ),
    metalness: 0.1,
    roughness: 0.4,
    envMap: textures.envMap,
    envMapIntensity: 0.25,
  } );

}

function createWallMaterial( textures ) {

  return new MeshStandardMaterial( {
    map: textures.wallColor,
    bumpMap: textures.wallBump,
    bumpScale: 0.05,
    metalness: 0.1,
    roughness: 0.8,
    envMap: textures.envMap,
    envMapIntensity: 5,
  } );

}

function createMaterials( textures ) {

  return {
    wall: createWallMaterial( textures ),
    floor: createFloorMaterial( textures ),
  };

}
