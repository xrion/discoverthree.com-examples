function createArrowHelpers() {

  // all our arrows will start at the origin
  const origin = new THREE.Vector3( 0, 0, 0 );
  const length = 7; //
  const headLength = 1; // length of arrow head
  const headWidth = 1; // width of arrow head

  // We'll create 2 arrows pointing in different directions
  const dir1 = new THREE.Vector3( 1, 1, -1 ).normalize();
  const dir2 = new THREE.Vector3( -1, 1, -1 ).normalize();

  // both arrows will start at the origin
  const arrowHelper1 = new THREE.ArrowHelper( dir1, origin, length, 0x001D53, headLength, headWidth );
  const arrowHelper2 = new THREE.ArrowHelper( dir2, origin, length, 0x001D53, headLength, headWidth );

  return { left: arrowHelper1, right: arrowHelper2 };

}

function createAxesHelper() {

  const size = 5;

  const axesHelper = new THREE.AxesHelper( size );
  axesHelper.position.set( 0, -5, 0 );
  return axesHelper;

}

function createBoxHelper( model ) {

  const boxHelper = new THREE.BoxHelper( model, 0x800080 );
  return boxHelper;

}

function createBox3Helper() {

  const min = new THREE.Vector3( -5, -5, -5 );
  const max = new THREE.Vector3( 5, 5, 5 );
  const box = new THREE.Box3( min, max );

  const box3Helper = new THREE.Box3Helper( box, 0xdddddd );
  return box3Helper;

}

function createGridHelper() {

  const size = 10;
  const divisions = 10;

  const gridHelper = new THREE.GridHelper( size, divisions );

  // the extra 0.05 prevents the the grid being at the exact same
  // position as the AxesHelper, which causes flickering
  gridHelper.position.set( 0, -5.05, 0 );

  return gridHelper;

}

function createPolarGridHelper() {

  const radius = 5;
  const radials = 16;
  const circles = 8;
  const divisions = 64;

  const polarGridHelper = new THREE.PolarGridHelper( radius, radials, circles, divisions );

  polarGridHelper.position.set( 0, 5, 0 );

  return polarGridHelper;

}

function createPlaneHelpers() {

  const planeNormal = new THREE.Vector3( 1, 0, 0 );
  const planeAConstant = -4;
  const planeA = new THREE.Plane( planeNormal, planeAConstant );

  const planeBConstant = 4;
  const planeB = new THREE.Plane( planeNormal, planeBConstant );

  const helperSize = 4;
  const planeHelperA = new THREE.PlaneHelper( planeA, helperSize, 0xff0000 );
  const planeHelperB = new THREE.PlaneHelper( planeB, helperSize, 0xff0000 );

  return { left: planeHelperA, right: planeHelperB };

}

function createHelpers( model ) {

  return {

    boxHelper: createBoxHelper( model ),
    arrowHelpers: createArrowHelpers(),
    axesHelper: createAxesHelper(),
    box3Helper: createBox3Helper(),
    gridHelper: createGridHelper(),
    polarGridHelper: createPolarGridHelper(),
    planeHelpers: createPlaneHelpers(),

  };

}
