import {
  Mesh,
} from './vendor/three/three.module.js';

function createWall( geometries, materials ) {


  const backWall = new Mesh( geometries.plane, materials.wall );

  // backWall.rotation.z = Math.PI / 2;

  backWall.scale.set( 10, 10, 1 );

  backWall.position.set( 0, 5.05, -2.8 );
  backWall.receiveShadow = true;

  // const geometryB = new PlaneBufferGeometry( 10, 10 );
  // const wallRight = new Mesh( geometryB, material );
  // wallRight.position.set( 8, 5.05, 0 );
  // wallRight.rotation.y -= Math.PI / 2;
  // wallRight.receiveShadow = true;

  return backWall;

}

function createFloor( geometries, materials ) {


  const floor = new Mesh( geometries.plane, materials.floor );

  floor.scale.set( 10, 10, 1 );

  floor.rotation.x = -Math.PI / 2;
  floor.position.z += 2;
  floor.receiveShadow = true;

  return floor;

}

export default function createMeshes( geometries, materials ) {


  return {

    floor: createFloor( geometries, materials ),
    backWall: createWall( geometries, materials ),

  };

}
