import {
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials() {

  return {

    standard: new MeshStandardMaterial( {

      flatShading: true,

      // remember to set transparent to true if you want to
      // animate the opacity!
      transparent: true,

    } ),


  };

}
