function createSphericalPositions() {

  const initialPos = new THREE.Vector3( -100, -1, 0 );

  const positions = [];

  const spherical = new THREE.Spherical().setFromVector3( initialPos );

  let yPos = initialPos.y;

  for( let i = 0; i < 3000; i++ ) {

    const theta = THREE.Math.randFloat( step / 2, step * 1.5 );

    spherical.theta += theta;
    spherical.radius = THREE.Math.randFloat( 60, 100 );

    const position = new THREE.Vector3().setFromSpherical( spherical );
    yPos += 0.06;

    position.y = yPos;

    positions.push( {
      vec: position,
      rot: theta
    } );

  }

  return positions;

}