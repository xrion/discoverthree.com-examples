function createArrowHelper() {

  const origin = new THREE.Vector3( 0, 0, 0 );
  const length = 3;
  const headLength = 1;
  const headWidth = 1;
  const direction = new THREE.Vector3( 1, 0, 0 );

  const arrowHelper = new THREE.ArrowHelper( direction, origin, length, 0xff0000, headLength, headWidth );

  return { arrowHelper };

}
