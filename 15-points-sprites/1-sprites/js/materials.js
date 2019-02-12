import {
  SpriteMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials( textures ) {

  return {
    leaf: new SpriteMaterial( {
      map: textures.leaf,
      sizeAttenuation: true, // default
    } ),

  };

}
