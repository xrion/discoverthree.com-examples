import {
  Vector2,
} from './vendor/three/three.module.js';

import {
  OutlinePass,
} from './vendor/three/postprocessing/OutlinePass.js';

import {
  RenderPass,
} from './vendor/three/postprocessing/RenderPass.js';

import {
  SMAAPass,
} from './vendor/three/postprocessing/SMAAPass.js';

export default function initPostProcessing( composer, app ) {

  // first we need a render pass, which renders the actual scene
  // so that later passes can apply effects to it.
  const renderPass = new RenderPass( app.scene, app.camera );
  composer.addPass( renderPass );

  const outlinePass = new OutlinePass( new Vector2( app.container.clientWidth, app.container.clientHeight ), app.scene, app.camera, app.scene.children );
  // outlinePass.renderToScreen = true;
  composer.addPass( outlinePass );

  const size = app.renderer.getSize();
  const pixelRatio = app.renderer.getPixelRatio();
  const smaaPass = new SMAAPass( size.width * pixelRatio, size.height * pixelRatio );
  smaaPass.renderToScreen = true;

  composer.addPass( smaaPass );

  return {

    composer,

    passes: {

      renderPass,
      outlinePass,
      smaaPass,

    },

  };

}
