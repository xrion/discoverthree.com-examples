import {
  RGBFormat,
  Vector2,
  WebGLMultisampleRenderTarget,
} from './vendor/three/three.module.js';

import {
  EffectComposer,
} from './vendor/post-new/postprocessing/EffectComposer.js';

import {
  RenderPass,
} from './vendor/post-new/postprocessing/RenderPass.js';

import {
  ShaderPass,
} from './vendor/post-new/postprocessing/ShaderPass.js';

import {
  CopyShader,
} from './vendor/post-new/shaders/CopyShader.js';

import {
  SSAOPass,
} from './vendor/post-new/postprocessing/SSAOPass.js';

export default function setupPostProcessing( app ) {

  const size = app.renderer.getDrawingBufferSize( new Vector2() );

  let composer;

  if ( app.renderer.capabilities.isWebGL2 ) {

    const parameters = {
      format: RGBFormat,
      stencilBuffer: false,
    };
    const renderTarget = new WebGLMultisampleRenderTarget( size.width, size.height, parameters );
    composer = new EffectComposer( app.renderer, renderTarget );

  } else composer = new EffectComposer( app.renderer );

  // overwrite the app's default render function to use the
  // EffectComposer instead
  app.render = () => {

    // render using the composer instead of the app.renderer
    composer.render();

  };

  // addRenderPass( app, composer );

  // addCopyPass( composer );
  addSSAOPass( app, size, composer );

  return composer;

}

function addRenderPass( app, composer ) {

  const renderPass = new RenderPass( app.scene, app.camera );
  composer.addPass( renderPass );

}

function addCopyPass( composer ) {

  const copyPass = new ShaderPass( CopyShader );
  composer.addPass( copyPass );

}

function addSSAOPass( app, size, composer ) {

  const pass = new SSAOPass( app.scene, app.camera, app.container.clientWidth, app.container.clientHeight );

  pass.kernelRadius = 0.0015;
  pass.kernelSize = 32;
  pass.minDistance = 0.0000009;
  pass.maxDistance = 0.0001;
  // SSAOPass.OUTPUT = {
  //   Default: 0,
  //   SSAO: 1,
  //   Blur: 2,
  //   Beauty: 3,
  //   Depth: 4,
  //   Normal: 5,
  // };

  pass.output = 1;

  composer.addPass( pass );

}
