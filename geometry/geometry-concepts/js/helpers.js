import {
  FaceNormalsHelper,
} from './vendor/three/three.module.js';

function createFaceNormalsHelper( mesh ) {

  // yellow lines represent "normals" of each face
  // that is, the direction that is perpendicular to the face

  // Note that, even though the normals are defined per Face,
  // when it comes to actually renderering the Geometry it gets
  // converted to a BufferGeometry, and normals are calculated
  // per Vertex instead

  return new FaceNormalsHelper( mesh );

}

export default function createHelpers( meshes ) {

  return {

    boxFacesHelper: createFaceNormalsHelper( meshes.box ),
    sphereFacesHelper: createFaceNormalsHelper( meshes.sphere ),

  };

}
