import {
  sRGBEncoding,
  TextureLoader,
} from './vendor/three/three.module.js';


export default function loadTextures() {

  const textureLoader = new TextureLoader();

  const moon = textureLoader.load( 'textures/color/moon.jpg' );
  moon.encoding = sRGBEncoding;

  return {

    moon,

  };

}
