function initTextures() {

  const textureLoader = new THREE.TextureLoader();

  const textures = {}

  textures.wallColor = textureLoader.load( 'textures/wall.png' );
  textures.wallColor.anisotropy = 16;

  textures.wallBump = textureLoader.load( 'textures/wall_bump.png' );

  const repeatU = 3;
  const repeatV = 3;

  textures.floorColor = textureLoader.load( 'textures/floor/mahog/color.png' );
  textures.floorColor.anisotropy = 16;
  textures.floorColor.wrapS = textures.floorColor.wrapT = THREE.RepeatWrapping;
  textures.floorColor.repeat.set( repeatU, repeatV );

  textures.floorNormal = textureLoader.load( 'textures/floor/mahog/normal.png' );
  textures.floorNormal.wrapS = textures.floorNormal.wrapT = THREE.RepeatWrapping;
  textures.floorNormal.repeat.set( repeatU, repeatV );

  textures.floorRoughness = textureLoader.load( 'textures/floor/mahog/roughness.png' );
  textures.floorRoughness.wrapS = textures.floorRoughness.wrapT = THREE.RepeatWrapping;
  textures.floorRoughness.repeat.set( repeatU, repeatV );

  textures.envMap = loadEnvMap();

  return textures;

}

function loadEnvMap() {

  const cubeTextureLoader = new THREE.CubeTextureLoader();

  const urls = [
    'textures/cubemap/px.jpg', 'textures/cubemap/nx.jpg',
    'textures/cubemap/py.jpg', 'textures/cubemap/ny.jpg',
    'textures/cubemap/pz.jpg', 'textures/cubemap/nz.jpg'
  ];

  const cubemap = cubeTextureLoader.load( urls );
  cubemap.mapping = THREE.CubeReflectionMapping;
  cubemap.encoding = THREE.sRGBEncoding;

  return cubemap

}