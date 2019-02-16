import {
  sRGBEncoding,
  TextureLoader,
} from './vendor/three/three.module.js';


export default function loadTextures() {

  const textureLoader = new TextureLoader();

  const deer = textureLoader.load( 'textures/color/phoenix_park_dublin.jpg' );
  deer.encoding = sRGBEncoding;

  return {
    deer,
  };

}
