import {
  BufferGeometry,
  Face3,
  Geometry,
  Vector2,
  Vector3,
} from './vendor/three/three.module.js';

function createCutomGeometryWithUVs() {

  const geometry = new Geometry();

  geometry.vertices.push(
    new Vector3( -1, 1, 0 ), // vertex 0
    new Vector3( -1, -1, 0 ), // vertex 1
    new Vector3( 1, -1, 0 ), // vertex 2
    new Vector3( 1, 1, 0 ), // vertex 3
  );

  // create a face made up of 3 vertices. Faces are always triangles
  // The face references the vertices by their position in
  // the geometry.vertices array
  geometry.faces.push( new Face3( 0, 1, 2 ) );

  geometry.faces.push( new Face3( 2, 3, 0 ) );

  // vertices can be in more than one face
  // uncomment this line to add a second face in the same
  // position as the first, but facing the opposite direction
  // geometry.faces.push( new Face3( 2, 1, 0 ) );

  // the face's normal is initialzed as (0, 0, 0)
  // either set it manually, or use this function to calculate
  // smooth normals automatically
  geometry.computeFaceNormals();

  // we can also compute one normal per vertex instead of per face
  // this is the style used by BufferGeometry, so if you need
  // maximum control over the conversion you can calculate these first
  // geometry.computeVertexNormals();


  // for UVs, we need to create one UV mapping per vertex per material index
  // geometry.faceVertexUvs[ 0 ][ faceIndex ][ vertexIndex ]

  // each UV is a Vector2, mapping the point in 3D to the 2D UV coordinate
  // on the texture.
  // Here, we only have one material so material index is always 0

  // first face
  geometry.faceVertexUvs[ 0 ].push( [
    new Vector2( 0, 1 ),
    new Vector2( 0, 0 ),
    new Vector2( 1, 0 ),
  ] );

  // second face
  geometry.faceVertexUvs[ 0 ].push( [
    new Vector2( 1, 0 ),
    new Vector2( 1, 1 ),
    new Vector2( 0, 1 ),
  ] );


  geometry.uvsNeedUpdate = true;

  return geometry;

}

// never use a Geometry directly, always convert it to a BufferGeometry first
function convertGeometryToBufferGeometry( geometry ) {

  return new BufferGeometry().fromGeometry( geometry );

}

export default function createGeometries() {

  const geometry = createCutomGeometryWithUVs();
  const bufferGeometry = convertGeometryToBufferGeometry( geometry );

  return {

    geometry,
    bufferGeometry,

  };

}
