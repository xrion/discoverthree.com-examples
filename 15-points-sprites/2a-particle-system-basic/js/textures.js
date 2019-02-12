import {
  sRGBEncoding,
  TextureLoader,
} from './vendor/three/three.module.js';


export default function loadTextures() {

  const textureLoader = new TextureLoader();

  const leaf = textureLoader.load( 'textures/color/leaf/leaf.png' );
  leaf.encoding = sRGBEncoding;

  return {
    leaf,
  };

}
