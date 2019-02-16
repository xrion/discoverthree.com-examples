import {
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials() {

  return {

    // Cesium man already has a material set up correctly,
    // but we'll replace it here with a plane white material so
    // that we can examine the model more easily
    skinning: new MeshStandardMaterial( {

      // this needs to be set for any mesh that has skeletal
      // animation. If you leave it out, then skinning
      // will not work!
      skinning: true,

    } ),

  };

}
