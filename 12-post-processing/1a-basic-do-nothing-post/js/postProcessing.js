import {
  RenderPass,
} from './vendor/three/postprocessing/RenderPass.js';

import {
  ShaderPass,
} from './vendor/three/postprocessing/ShaderPass.js';

import {
  CopyShader,
} from './vendor/three/shaders/CopyShader.js';

export default function setupPostProcessing( composer, app ) {

  // first we need a render pass, which renders the actual scene
  // so that later passes can apply effects to it.
  const renderPass = new RenderPass( app.scene, app.camera );
  composer.addPass( renderPass );

  const copyPass = new ShaderPass( CopyShader );

  // the on the final shader pass, set renderToScreen to true,
  // to let the composer know that this is the result we want to see
  copyPass.renderToScreen = true;

  composer.addPass( copyPass );

  return composer;

}
