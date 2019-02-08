function loadEnvironments() {

  const cubeTextureLoader = new THREE.CubeTextureLoader();

  const path = 'textures/environments/cubemap/skybox/';

  const urls = [
    `${path}px.jpg`, `${path}nx.jpg`,
    `${path}py.jpg`, `${path}ny.jpg`,
    `${path}pz.jpg`, `${path}nz.jpg`,
  ];


  const cubemap = cubeTextureLoader.load( urls );
  cubemap.mapping = THREE.CubeReflectionMapping;
  cubemap.encoding = THREE.sRGBEncoding;

  return cubemap;

}
