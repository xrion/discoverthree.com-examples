import {
  BufferGeometry,
  Face3,
  Geometry,
  Vector3,
} from './vendor/three/three.module.js';

function createCustomGeometry() {

  const geometry = new Geometry();

  geometry.vertices.push(
    new Vector3( -1, 1, 0 ), // vertex 0
    new Vector3( -1, -1, 0 ), // vertex 1
    new Vector3( 1, -1, 0 ), // vertex 2
  );

  // create a face made up of 3 vertices. Faces are always triangles
  // The face references the vertices by their position in
  // the geometry.vertices array
  geometry.faces.push( new Face3( 0, 1, 2 ) );

  // vertices can be in more than one face
  // uncomment this line to add a second face in the same
  // position as the first, but facing the opposite direction
  // geometry.faces.push( new Face3( 2, 1, 0 ) );

  // the face's normal is initialzed as (0, 0, 0)
  // either set it manually, or use this function to calculate
  // smooth normals automatically
  // geometry.computeFaceNormals();

  // we can also compute one normal per vertex instead of per face
  // this is the style used by BufferGeometry, and we are going to
  // convert our Geometry to a BufferGeomtry before we render it so
  // so it makes more sense to calculate these
  geometry.computeVertexNormals();

  return geometry;

}

// never use a Geometry directly, always convert it to a BufferGeometry first
function convertGeometryToBufferGeometry( geometry ) {

  return new BufferGeometry().fromGeometry( geometry );


}

export default function createGeometries() {

  const geometry = createCustomGeometry();
  const bufferGeometry = convertGeometryToBufferGeometry( geometry );

  return {
    geometry,
    bufferGeometry,
  };

}
