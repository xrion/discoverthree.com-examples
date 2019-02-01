function loadEnvMap() {

  const cubeTextureLoader = new THREE.CubeTextureLoader();

  const urls = [
    'textures/cubemap/px.jpg', 'textures/cubemap/nx.jpg',
    'textures/cubemap/py.jpg', 'textures/cubemap/ny.jpg',
    'textures/cubemap/pz.jpg', 'textures/cubemap/nz.jpg',
  ];

  const cubemap = cubeTextureLoader.load( urls );
  cubemap.mapping = THREE.CubeReflectionMapping;
  cubemap.encoding = THREE.sRGBEncoding;

  return cubemap;

}


function initTextures() {

  const textureLoader = new THREE.TextureLoader();

  const textures = {};

  let repeatU = 1;
  let repeatV = 3;

  textures.wallColor = textureLoader.load( 'textures/wall_color.jpg' );
  textures.wallColor.wrapT = THREE.RepeatWrapping;
  textures.wallColor.wrapS = THREE.MirrorRepeatWrapping;
  textures.wallColor.repeat.set( repeatU, repeatV );
  textures.encoding = THREE.sRGBEncoding;

  textures.wallBump = textureLoader.load( 'textures/wall_bump.jpg' );
  textures.wallBump.wrapT = THREE.MirrorRepeatWrapping;
  textures.wallBump.wrapS = THREE.RepeatWrapping;
  textures.wallBump.repeat.set( repeatU, repeatV );

  repeatU = 3;
  repeatV = 24;

  textures.floorColor = textureLoader.load( 'textures/floor_color.jpg' );
  textures.floorColor.wrapS = textures.floorColor.wrapT = THREE.RepeatWrapping;
  textures.floorColor.repeat.set( repeatU, repeatV );
  textures.encoding = THREE.sRGBEncoding;

  textures.floorNormal = textureLoader.load( 'textures/floor_normal.jpg' );
  textures.floorNormal.wrapS = textures.floorNormal.wrapT = THREE.RepeatWrapping;
  textures.floorNormal.repeat.set( repeatU, repeatV );

  textures.envMap = loadEnvMap();

  return textures;

}
