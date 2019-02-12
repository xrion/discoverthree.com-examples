import {
  PointsMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials( textures ) {

  return {
    leaf: new PointsMaterial( {

      map: textures.leaf,

      // standard transparency doesn't work well,
      // since the particles are all pieces of the same geometry
      // this leads to transparent portions of particles cutting out
      // pieces of the particles behind them

      // transparent: true,

      // fortunately we can use alpha testing instead, which
      // gives much better results here since the transparent
      // portions of the texture are well defined

      alphaTest: 0.5,

      size: 1,
      sizeAttenuation: true,

    } ),

  };

}
