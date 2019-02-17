import {
  MeshStandardMaterial,
  Vector2,
} from './vendor/three/three.module.js';

function createFloorMaterial( textures, environments ) {

  return new MeshStandardMaterial( {
    map: textures.floorColor,
    normalMap: textures.floorNormal,
    normalScale: new Vector2( 1, 1 ),
    metalness: 0.1,
    roughness: 0.4,
    envMap: environments.castle,
    envMapIntensity: 0.25,
  } );

}

function createWallMaterial( textures, environments ) {

  return new MeshStandardMaterial( {

    map: textures.wallColor,
    bumpMap: textures.wallBump,
    bumpScale: 0.05,
    metalness: 0.1,
    roughness: 0.8,
    envMap: environments.castle,
    envMapIntensity: 5,

  } );

}

export default function createMaterials( textures, environments ) {

  return {

    wall: createWallMaterial( textures, environments ),
    floor: createFloorMaterial( textures, environments ),

  };

}
