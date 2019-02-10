function loadEnvironments() {

  const cubeTextureLoader = new THREE.CubeTextureLoader();

  const path = 'textures/environments/cubemap/castle/';

  const urls = [
    `${path}/px.jpg`, `${path}/nx.jpg`,
    `${path}/py.jpg`, `${path}/ny.jpg`,
    `${path}/pz.jpg`, `${path}/nz.jpg`,
  ];

  const castle = cubeTextureLoader.load( urls );
  castle.mapping = THREE.CubeReflectionMapping;
  castle.encoding = THREE.sRGBEncoding;

  return { castle };

}
