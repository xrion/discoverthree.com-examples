import {
  CubeTextureLoader,
  CubeReflectionMapping,
  sRGBEncoding
} from './vendor/three/three.module.js';

export default function loadEnvironments() {

  const cubeTextureLoader = new CubeTextureLoader();

  const path = 'textures/environments/cubemap/skybox/';

  const urls = [
    `${path}px.jpg`, `${path}nx.jpg`,
    `${path}py.jpg`, `${path}ny.jpg`,
    `${path}pz.jpg`, `${path}nz.jpg`,
  ];


  const cubemap = cubeTextureLoader.load( urls );
  cubemap.mapping = CubeReflectionMapping;
  cubemap.encoding = sRGBEncoding;

  return cubemap;

}
