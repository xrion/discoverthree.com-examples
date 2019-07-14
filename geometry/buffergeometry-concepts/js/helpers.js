import {
  VertexNormalsHelper,
} from './vendor/three/three.module.js';

function createVertexNormalsHelper( mesh ) {

  // For BufferGeometry, we'll use a VertexNormalsHelper
  // instead of a FaceNormalsHelper, since normals are
  // defined per Vertex, rather than per Face
  // The normals are the red lines coming out of the sphere

  // the horse geometry doesn't have any normals,
  // since it uses vertex colors and flat shading,
  // normals were omitted to reduce model size
  // trying to add a normals helper will throw an error

  return new VertexNormalsHelper( mesh );

}

export default function createHelpers( meshes ) {

  return {

    vertexNormals: createVertexNormalsHelper( meshes.shape ),

  };

}
