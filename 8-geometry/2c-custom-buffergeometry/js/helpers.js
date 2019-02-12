import {
  VertexNormalsHelper,
} from './vendor/three/three.module.js';

export default function createHelpers( meshes ) {

  // add a helper to show normals in the left square.
  // red lines are normals, they tell us which side the geometry
  // will be visible from
  return {
    vertexNormalsHelper: new VertexNormalsHelper( meshes.leftQuad ),
  };

}
