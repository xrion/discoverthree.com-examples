import {
  sRGBEncoding,
  TextureLoader,
} from './vendor/three/three.module.js';


export default function loadTextures() {

  const textureLoader = new TextureLoader();

  const bambooColor = textureLoader.load( 'textures/color/bamboo.jpg' );
  bambooColor.encoding = sRGBEncoding;

  return {
    bambooColor,
  };

}
