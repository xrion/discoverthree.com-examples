import {
  Points,
} from './vendor/three/three.module.js';

export default function createPoints( geometries, materials ) {

  return {

    sphere: new Points( geometries.sphere, materials.leaf ),

  };

}
