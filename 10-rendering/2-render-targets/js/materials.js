import {
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials( map ) {

  return {

    // "map" here is the render target's texture
    // this means that whatever we draw onto the render
    // target show up as the color map for this material
    main: new MeshStandardMaterial( {
      map,
    } ),

    standard: new MeshStandardMaterial(),


  };

}
