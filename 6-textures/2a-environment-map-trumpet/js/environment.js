function loadEnvMaps() {

  const cubeTextureLoader = new THREE.CubeTextureLoader();

  const environments = {};

  const path = 'textures/environments/cubemap/castle/';

  const urls = [
    `${path}/px.jpg`, `${path}/nx.jpg`,
    `${path}/py.jpg`, `${path}/ny.jpg`,
    `${path}/pz.jpg`, `${path}/nz.jpg`,
  ];


  environments.cubemap = cubeTextureLoader.load( urls );
  environments.cubemap.mapping = THREE.CubeReflectionMapping;
  environments.cubemap.encoding = THREE.sRGBEncoding;

  return environments;

}
