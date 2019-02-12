import {
  sRGBEncoding,
  TextureLoader,
} from './vendor/three/three.module.js';


export default function loadTextures() {

  const textureLoader = new TextureLoader();

  const map = textureLoader.load( 'textures/color/phoenix_park_dublin.jpg' );
  map.encoding = sRGBEncoding;

  return {
    map,
  };

}
