import {
  ArrowHelper,
  AxesHelper,
  Box3,
  Box3Helper,
  BoxHelper,
  GridHelper,
  Plane,
  PlaneHelper,
  PolarGridHelper,
  Vector3,
} from './vendor/three/three.module.js';

function createArrowHelpers() {

  // all our arrows will start at the origin
  const origin = new Vector3( 0, 0, 0 );
  const length = 7; //
  const headLength = 1; // length of arrow head
  const headWidth = 1; // width of arrow head

  // We'll create 2 arrows pointing in different directions
  const dir1 = new Vector3( 1, 1, -1 ).normalize();
  const dir2 = new Vector3( -1, 1, -1 ).normalize();

  // both arrows will start at the origin
  const arrowHelper1 = new ArrowHelper( dir1, origin, length, 0x001D53, headLength, headWidth );
  const arrowHelper2 = new ArrowHelper( dir2, origin, length, 0x001D53, headLength, headWidth );

  return { left: arrowHelper1, right: arrowHelper2 };

}

function createAxesHelper() {

  const size = 5;

  const axesHelper = new AxesHelper( size );
  axesHelper.position.set( 0, -5, 0 );
  return axesHelper;

}

function createBoxHelper( model ) {

  const boxHelper = new BoxHelper( model, 0x800080 );
  return boxHelper;

}

function createBox3Helper() {

  const min = new Vector3( -5, -5, -5 );
  const max = new Vector3( 5, 5, 5 );
  const box = new Box3( min, max );

  const box3Helper = new Box3Helper( box, 0xdddddd );
  return box3Helper;

}

function createGridHelper() {

  const size = 10;
  const divisions = 10;

  const gridHelper = new GridHelper( size, divisions );

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

  const polarGridHelper = new PolarGridHelper( radius, radials, circles, divisions );

  polarGridHelper.position.set( 0, 5, 0 );

  return polarGridHelper;

}

function createPlaneHelpers() {

  const planeNormal = new Vector3( 1, 0, 0 );
  const planeAConstant = -4;
  const planeA = new Plane( planeNormal, planeAConstant );

  const planeBConstant = 4;
  const planeB = new Plane( planeNormal, planeBConstant );

  const helperSize = 4;
  const planeHelperA = new PlaneHelper( planeA, helperSize, 0xff0000 );
  const planeHelperB = new PlaneHelper( planeB, helperSize, 0xff0000 );

  return { left: planeHelperA, right: planeHelperB };

}

export default function createHelpers( model ) {

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
