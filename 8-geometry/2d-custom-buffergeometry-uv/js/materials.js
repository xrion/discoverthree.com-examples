import {
  MeshBasicMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials( textures ) {

  return {

    basic: new MeshBasicMaterial( { map: textures.deer } ),

  };

}
