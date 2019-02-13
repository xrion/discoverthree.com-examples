import {
  Color,
  VertexNormalsHelper,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createMeshes from './meshes.js';
import loadModels from './models.js';

async function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 10, 5, 15 );

  app.start();

  const meshes = createMeshes();
  app.scene.add( meshes.sphere );

  // For BufferGeometry, we'll use a VertexNormalsHelper
  // instead of a FaceNormalsHelper, since normals are
  // defined per Vertex, rather than per Face
  // The normals are the red lines coming out of the sphere
  app.scene.add( new VertexNormalsHelper( meshes.sphere ) );

  const models = await loadModels();
  app.scene.add( models.horse );

  // the horse geometry doesn't have any normals,
  // since it uses vertex colors and flat shading,
  // normals were omitted to reduce model size
  // trying to add a normals helper will throw an error
  // app.scene.add( new VertexNormalsHelper( models.horse ) );

}

initScene();
