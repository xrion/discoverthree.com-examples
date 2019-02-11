import {
  BufferAttribute,
  BufferGeometry,
  Matrix4,
} from './vendor/three/three.module.js';

export default function createGeometry() { {

  const geometry = new BufferGeometry();

  const vertices = new Float32Array( [

    // lower face
    -1, 1, 0, // vertex 0
    -1, -1, 0, // vertex 1
    1, -1, 0, // vertex 2

    // upper face
    1, -1, 0, // vertex 3
    1, 1, 0, // vertex 4
    -1, 1, 0, // vertex 5

  ] );

  geometry.addAttribute( 'position', new BufferAttribute( vertices, 3 ) );

  // compute the normals automatically
  geometry.computeVertexNormals();

  const uvs = new Float32Array( [

    // lower face
    0, 1,
    0, 0,
    1, 0,

    // upper face
    1, 0,
    1, 1,
    0, 1,

  ] );

  geometry.addAttribute( 'uv', new BufferAttribute( uvs, 2 ) );

  // create an empty array to  hold targets for the attribute we want to morph
  // morphing positions and normals is supported
  geometry.morphAttributes.position = [];

  // since the upper and lower face are not attached in
  // any way, we can move them completely independently id
  // each other, causing them to become detached
  const morphPositions = new Float32Array( [

    // lower face
    -4, 1, 0, // vertex 0
    -1, -4, 0.5, // vertex 1
    4, -1, 0, // vertex 2

    // upper face
    1, -4, 0, // vertex 3
    4, 1, -0.5, // vertex 4
    -1, 4, 0, // vertex 5

  ] );

  // add the spherical positions as the first morph target
  geometry.morphAttributes.position[ 0 ] = new BufferAttribute( morphPositions, 3 );

  return geometry;

}

function createGeometryIndexed() {

  const geometry = new BufferGeometry();

  const vertices = new Float32Array( [

    -1, 1, 0, // vertex 0
    -1, -1, 0, // vertex 1
    1, -1, 0, // vertex 2
    1, 1, 0, // vertex 3

  ] );

  const positionAttribute = new BufferAttribute( vertices, 3 );

  geometry.addAttribute( 'position', positionAttribute );

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

  const uvs = new Float32Array( [

    // set one UV coordinate for each vertex
    0, 1,
    0, 0,
    1, 0,
    1, 1,

  ] );

  geometry.addAttribute( 'uv', new BufferAttribute( uvs, 2 ) );

  // create an empty array to  hold targets for the attribute we want to morph
  // morphing positions and normals is supported
  geometry.morphAttributes.position = [];

  // let's do something different here.
  // We'll set up a rotation matrix then apply it to a copy
  // of the positions attribute

  const rotationMatrix = new Matrix4().makeRotationZ( Math.PI / 4 );

  const morphRotate = positionAttribute.clone();

  // if we give our morph target a name then we can later retrieve that
  // from mesh.morphTargetDictionary and it will
  // save us from having to remember which morph target is in which position
  morphRotate.name = 'rotate';

  rotationMatrix.applyToBufferAttribute( morphRotate );

  geometry.morphAttributes.position[ 0 ] = morphRotate;

  // we can add as many morph targets as we like.
  // up to 8 can be active at one time and their effects will get combined
  const scalePositions = new Float32Array( [

    -2, 2, 0, // vertex 0
    -2, -2, 0, // vertex 1
    2, -2, 0, // vertex 2
    2, 2, 0, // vertex 3

  ] );

  const morphScale = new BufferAttribute( scalePositions, 3 );
  morphScale.name = 'scale';

  // add the spherical positions as the first morph target
  geometry.morphAttributes.position[ 1 ] = morphScale;

  return geometry;

}
