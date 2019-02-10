function createMeshes() {

  const map = new THREE.TextureLoader().load( 'textures/color/moon.jpg' );
  map.encoding = THREE.sRGBEncoding;

  const geometry = new THREE.CircleBufferGeometry( 8, 128 );
  const material = new THREE.MeshBasicMaterial( { map } );

  const moon = new THREE.Mesh( geometry, material );

  moon.position.set( 0, 0, -10 );

  moon.renderOrder = 1;

  return { moon };

}
