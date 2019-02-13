import {
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials( textures ) {

  return {

    standard: new MeshStandardMaterial( { map: textures.moon } ),

  };

}
