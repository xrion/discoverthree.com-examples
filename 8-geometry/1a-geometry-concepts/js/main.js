
import {
  Color,
  FaceNormalsHelper,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createMeshes from './meshes.js';

function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 10 );

  app.start();

  const meshes = createMeshes();
  app.scene.add( meshes.cube, meshes.sphere );

  // yellow lines represent "normals" of each face
  // that is, the direction that is perpendicular to the face
  app.scene.add( new FaceNormalsHelper( meshes.cube ) );

  // Note that, even though the normals are defined per Face,
  // when it comes to actually renderering the Geometry it gets
  // converted to a BufferGeometry, and normals are calculated
  // per Vertex instead
  app.scene.add( new FaceNormalsHelper( meshes.sphere ) );

}

initScene();
