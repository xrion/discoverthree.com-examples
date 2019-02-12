import {
  LineDashedMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials() {

  return {

    dashed: new LineDashedMaterial( {
      color: 0xff0000,
      scale: 1, // scale of the dashes
      dashSize: 0.1,
      gapSize: 0.1,
    } ),

  };

}
