import {
  MeshBasicMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials( textures ) {

  return {
    left: new MeshBasicMaterial( {
      morphTargets: true,
      map: textures.map,

    } ),
    right: new MeshBasicMaterial( {
      morphTargets: true,
      map: textures.map,

    } ),
  };

}
