import {
  CubeTextureLoader,
  CubeReflectionMapping,
  sRGBEncoding,
  RepeatWrapping,
  MirrorRepeatWrapping,
} from './vendor/three/three.module.js';

function loadEnvMap() {

  const cubeTextureLoader = new CubeTextureLoader();

  const path = 'textures/environments/cubemap/castle/';

  const urls = [
    `${path}/px.jpg`, `${path}/nx.jpg`,
    `${path}/py.jpg`, `${path}/ny.jpg`,
    `${path}/pz.jpg`, `${path}/nz.jpg`,
  ];

  const cubemap = cubeTextureLoader.load( urls );
  cubemap.mapping = CubeReflectionMapping;
  cubemap.encoding = sRGBEncoding;

  return cubemap;

}


function initTextures() {

  const textureLoader = new TextureLoader();

  const textures = {};

  let repeatU = 1;
  let repeatV = 3;

  textures.wallColor = textureLoader.load( 'textures/wall/wall_color.jpg' );
  textures.wallColor.wrapT = RepeatWrapping;
  textures.wallColor.wrapS = MirrorRepeatWrapping;
  textures.wallColor.repeat.set( repeatU, repeatV );
  textures.wallColor.encoding = sRGBEncoding;

  textures.wallBump = textureLoader.load( 'textures/wall/wall_bump.jpg' );
  textures.wallBump.wrapT = MirrorRepeatWrapping;
  textures.wallBump.wrapS = RepeatWrapping;
  textures.wallBump.repeat.set( repeatU, repeatV );

  repeatU = 3;
  repeatV = 24;

  textures.floorColor = textureLoader.load( 'textures/floor/floor_color.jpg' );
  textures.floorColor.wrapS = textures.floorColor.wrapT = RepeatWrapping;
  textures.floorColor.repeat.set( repeatU, repeatV );
  textures.floorColor.encoding = sRGBEncoding;

  textures.floorNormal = textureLoader.load( 'textures/floor/floor_normal.jpg' );
  textures.floorNormal.wrapS = textures.floorNormal.wrapT = RepeatWrapping;
  textures.floorNormal.repeat.set( repeatU, repeatV );

  textures.envMap = loadEnvMap();

  return textures;

}
