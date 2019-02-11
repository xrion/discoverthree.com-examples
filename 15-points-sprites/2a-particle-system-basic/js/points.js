import {
  Points,
  PointsMaterial,
  SphereBufferGeometry,
  sRGBEncoding,
  TextureLoader,
} from './vendor/three/three.module.js';

export default function createPoints() {

  const textureLoader = new TextureLoader();

  const geometry = new SphereBufferGeometry( 2, 32, 8 );

  const map = textureLoader.load( 'textures/color/leaf/leaf.png' );
  map.encoding = sRGBEncoding;

  const material = new PointsMaterial( {

    color: 0xffffff,
    map,

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

  } );

  const sphere = new Points( geometry, material );

  sphere.userData.onUpdate = ( delta ) => {

    sphere.rotation.y -= delta / 3;

  };

  return { sphere };

}
