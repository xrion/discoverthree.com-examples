

function loadEnvMaps() {

  const textureLoader = new THREE.TextureLoader();
  const cubeTextureLoader = new THREE.CubeTextureLoader();

  const environments = {};

  const urls = [
    'textures/cubemap/px.jpg', 'textures/cubemap/nx.jpg',
    'textures/cubemap/py.jpg', 'textures/cubemap/ny.jpg',
    'textures/cubemap/pz.jpg', 'textures/cubemap/nz.jpg'
  ];

  environments.cubemap = cubeTextureLoader.load( urls );
  environments.cubemap.mapping = THREE.CubeReflectionMapping;
  environments.cubemap.encoding = THREE.sRGBEncoding;

  environments.equirectangular = textureLoader.load( "textures/equirectangular.jpg" );
  environments.equirectangular.mapping = THREE.EquirectangularReflectionMapping;
  environments.equirectangular.magFilter = THREE.LinearFilter;
  environments.equirectangular.minFilter = THREE.LinearMipMapLinearFilter;
  environments.equirectangular.encoding = THREE.sRGBEncoding;

  environments.spherical = textureLoader.load( "textures/Env_map_sphere_1.jpg" );
  environments.spherical.mapping = THREE.SphericalReflectionMapping;
  environments.spherical.encoding = THREE.sRGBEncoding;

  return environments;

}