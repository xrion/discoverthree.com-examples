import {
  VertexNormalsHelper,
} from './vendor/three/three.module.js';

function createVertexNormalsHelper( mesh ) {

  // add a helper to show normals in the left square.
  // red lines are normals, they tell us which side the geometry
  // will be visible from

  return new VertexNormalsHelper( mesh );

}

export default function createHelpers( meshes ) {


  return {

    vertexNormalsHelper: createVertexNormalsHelper( meshes.leftQuad ),

  };

}
