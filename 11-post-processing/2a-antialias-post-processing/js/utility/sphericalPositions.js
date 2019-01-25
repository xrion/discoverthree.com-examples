function createSphericalPositions() {

  const initialPos = new THREE.Vector3( -100, -1, 0 );

  const positions = [];

  const spherical = new THREE.Spherical().setFromVector3( initialPos );

  let yPos = initialPos.y;

  for ( let i = 0; i < 2000; i++ ) {


    spherical.theta += Math.random() * Math.PI;
    spherical.radius = THREE.Math.randFloat( 60, 100 );

    const position = new THREE.Vector3().setFromSpherical( spherical );
    yPos += 0.06;

    position.y = yPos;

    positions.push( {
      vec: position,
      rot: spherical.theta,
    } );

  }

  return positions;

}
