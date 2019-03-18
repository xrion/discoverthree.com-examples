import {
  MeshBasicMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials( textures ) {

  return {

    morph: new MeshBasicMaterial( {

      morphTargets: true,
      map: textures.deer,

    } ),

  };

}
