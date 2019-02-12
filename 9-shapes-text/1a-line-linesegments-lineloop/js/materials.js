import {
  LineBasicMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials() {

  return {

    black: new LineBasicMaterial( { color: 0x000000 } ),
    red: new LineBasicMaterial( { color: 0xff0000 } ),
    white: new LineBasicMaterial( { color: 0xffffff } ),

  };

}
