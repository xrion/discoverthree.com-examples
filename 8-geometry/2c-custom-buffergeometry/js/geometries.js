import {
  BufferAttribute,
  BufferGeometry,
} from './vendor/three/three.module.js';

function createNonIndexedGeometry() {

  const geometry = new BufferGeometry();

  // first, create a typed Array with number of vertices * 3 length
  // that is, x + y + z for each vertex. Here, 6 vertices * 3 = 18
  const positionsArray = new Float32Array( 18 );

  // Next, use the array to create a BufferAttribute with an itemsize of 3
  // The item size tells it that each entry takes up 3 data points in the array
  const positionBuffer = new BufferAttribute( positionsArray, 3 );

  // Next, add the vertices one at a time using the setXYZ method
  // the first parameter is an offset into the array
  // the last 3 parameters are the x, y, and z values
  // lower face

  // every set of 3 vertices
  // will be interpreted as a face
  // the faces are not connected together in any
  // way and cannot share vertices
  // this is often called "triangle soup"
  positionBuffer.setXYZ( 0, -1, 1, 0 ); // vertex 0
  positionBuffer.setXYZ( 1, -1, -1, 0 ); // vertex 1
  positionBuffer.setXYZ( 2, 1, -1, 0 ); // vertex 2

  // upper face
  positionBuffer.setXYZ( 3, 1, -1, 0 ); // vertex 3
  positionBuffer.setXYZ( 4, 1, 1, 0 ); // vertex 4
  positionBuffer.setXYZ( 5, -1, 1, 0 ); // vertex 5

  geometry.addAttribute( 'position', positionBuffer );

  // compute the normals automatically
  geometry.computeVertexNormals();

  console.log( 'Here\'s the geometry you just created: ', geometry );

  return geometry;

}

function createIndexedGeometry() {

  const geometry = new BufferGeometry();

  // Setting up the bufferAttribute this way is identical to the previous function,
  // but more succinct. This time, we only need 4 vertices
  // since we are going to reuse them in multiple faces
  const vertices = new Float32Array( [

    -1, 1, 0, // vertex 0
    -1, -1, 0, // vertex 1
    1, -1, 0, // vertex 2
    1, 1, 0, // vertex 3

  ] );

  geometry.addAttribute( 'position', new BufferAttribute( vertices, 3 ) );

  // note that the indices for each face
  // are the same as the Face indices in our Geometry example
  const indices = [

    // lower face
    0, 1, 2,

    // upper face
    2, 3, 0,

  ];

  geometry.setIndex( indices );

  // compute the normals automatically
  geometry.computeVertexNormals();

  console.log( '...and here\'s the indexed geometry you just created: ', geometry );

  return geometry;

}

export default function createGeometries() {

  return {
    indexed: createIndexedGeometry(),
    nonIndexed: createNonIndexedGeometry(),
  };

}
