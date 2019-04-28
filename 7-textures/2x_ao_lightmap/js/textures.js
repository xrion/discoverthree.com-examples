import {
  // sRGBEncoding,
  TextureLoader,
} from './vendor/three/three.module.js';

export default function loadTextures() {

  const textureLoader = new TextureLoader();

  const ao = textureLoader.load( 'textures/IBL/ao/modular_sculpture_ao.png' );
  ao.flipY = false;
  // aoMap.encoding = sRGBEncoding;

  return {

    ao,

  };

}
