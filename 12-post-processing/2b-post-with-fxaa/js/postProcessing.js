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
  ShaderPass,
} from './vendor/three/postprocessing/ShaderPass.js';

import {
  FXAAShader,
} from './vendor/three/shaders/FXAAShader.js';

export default function setupPostProcessing( composer, app ) {

  // first we need a render pass, which renders the actual scene
  // so that later passes can apply effects to it.
  const renderPass = new RenderPass( app.scene, app.camera );
  composer.addPass( renderPass );

  const outlinePass = new OutlinePass( new Vector2( app.container.clientWidth, app.container.clientHeight ), app.scene, app.camera, app.scene.children );
  // outlinePass.renderToScreen = true;
  composer.addPass( outlinePass );

  const fxaaPass = new ShaderPass( FXAAShader );
  fxaaPass.renderToScreen = true;

  // we need to set the resolution of the fxaaShader, but we'll do this when
  // setting up the onResize event to reduce code duplication

  composer.addPass( fxaaPass );

  return {

    composer,

    passes: {

      renderPass,
      outlinePass,
      fxaaPass,

    },

  };

}
