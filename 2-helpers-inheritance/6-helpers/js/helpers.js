function addArrowHelpers( scene ) {

  // all our arrows will start at the origin
  const origin = new THREE.Vector3( 0, 0, 0 );
  const length = 7; //
  const headLength = 1; // length of arrow head
  const headWidth = 1; // width of arrow head

  // We'll create 2 arrows pointing in different directions
  const dir1 = new THREE.Vector3( 1, 1, -1 ).normalize();
  const dir2 = new THREE.Vector3( -1, 1, -1 ).normalize();

  // both arrows will start at the origin
  const arrowHelper1 = new THREE.ArrowHelper( dir1, origin, length, 0x407DA3, headLength, headWidth );
  const arrowHelper2 = new THREE.ArrowHelper( dir2, origin, length, 0x407DA3, headLength, headWidth );

  scene.add( arrowHelper1, arrowHelper2 );

}

function addAxesHelper( scene ) {

  const size = 5;

  const axesHelper = new THREE.AxesHelper( size );
  axesHelper.position.set( 0, -5, 0 );
  scene.add( axesHelper );

}

function addBoxHelper( model, scene ) {

  const boxHelper = new THREE.BoxHelper( model, 0x800080 );
  scene.add( boxHelper );

}

function addBox3Helper( scene ) {

  const min = new THREE.Vector3( -5, -5, -5 );
  const max = new THREE.Vector3( 5, 5, 5 );
  const box = new THREE.Box3( min, max );

  const box3Helper = new THREE.Box3Helper( box, 0xdddddd );
  scene.add( box3Helper );

}

function addGridHelper( scene ) {

  const size = 10;
  const divisions = 10;

  const gridHelper = new THREE.GridHelper( size, divisions );

  // the extra 0.05 prevents the the grid being at the exact same
  // position as the AxesHelper, which causes flickering
  gridHelper.position.set( 0, -5.05, 0 );

  scene.add( gridHelper );

}

function addPolarGridHelper( scene ) {

  const radius = 5;
  const radials = 16;
  const circles = 8;
  const divisions = 64;

  const polarGridHelper = new THREE.PolarGridHelper( radius, radials, circles, divisions );

  polarGridHelper.position.set( 0, 5, 0 );

  scene.add( polarGridHelper );

}

function addPlaneHelpers( scene ) {

  const planeNormal = new THREE.Vector3( 1, 0, 0 );
  const planeAConstant = -4;
  const planeA = new THREE.Plane( planeNormal, planeAConstant );

  const planeBConstant = 4;
  const planeB = new THREE.Plane( planeNormal, planeBConstant );

  const helperSize = 4;
  const planeHelperA = new THREE.PlaneHelper( planeA, helperSize, 0xff0000 );
  const planeHelperB = new THREE.PlaneHelper( planeB, helperSize, 0xff0000 );
  scene.add( planeHelperA, planeHelperB );

}
