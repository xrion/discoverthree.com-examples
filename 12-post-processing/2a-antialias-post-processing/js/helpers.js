function addPolarGridHelper( scene ) {

  const radius = 5;
  const radials = 16;
  const circles = 8;
  const divisions = 64;

  const polarGridHelper = new THREE.PolarGridHelper( radius, radials, circles, divisions );

  polarGridHelper.position.set( 0, -1, 0 );

  scene.add( polarGridHelper );

}
