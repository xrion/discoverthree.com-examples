import {
  MeshBasicMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials( textures ) {

  return {

    moon: new MeshBasicMaterial( { map: textures.moon } ),

  };

}
