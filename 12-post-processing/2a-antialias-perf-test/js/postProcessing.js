import {
  Vector2
} from './vendor/three/three.module.js';

import {
  RenderPass,
} from './vendor/three/postprocessing/RenderPass.js';

import {
  SSAARenderPass,
} from './vendor/three/postprocessing/SSAARenderPass.js';

import {
  ShaderPass,
} from './vendor/three/postprocessing/ShaderPass.js';

import {
  SMAAPass,
} from './vendor/three/postprocessing/SMAAPass.js';

import {
  TAARenderPass,
} from './vendor/three/postprocessing/TAARenderPass.js';

import {
  CopyShader,
} from './vendor/three/shaders/CopyShader.js';

import {
  FXAAShader,
} from './vendor/three/shaders/FXAAShader.js';

function setupNoAA( composers, app ) {

  const renderPass = new RenderPass( app.scene, app.camera );
  composers.noAA.addPass( renderPass );

  const copyPass = new ShaderPass( CopyShader );

  copyPass.renderToScreen = true;
  composers.noAA.addPass( copyPass );

}

function setupFXAAShaderPass( composers, app ) {

  const renderPass = new RenderPass( app.scene, app.camera );
  composers.FXAA.addPass( renderPass );

  const fxaaShaderPass = new ShaderPass( FXAAShader );

  fxaaShaderPass.renderToScreen = true;
  composers.FXAA.addPass( fxaaShaderPass );

  return fxaaShaderPass;

}

function setupSSAARenderPass( composers, app ) {

  const ssaaRenderPass = new SSAARenderPass( app.scene, app.camera );
  ssaaRenderPass.sampleLevel = 4; // specified as n, where the number of samples is 2^n, so sampleLevel = 4, is 2^4 samples, 16.
  composers.SSAA.addPass( ssaaRenderPass );

  const copyPass = new ShaderPass( CopyShader );

  copyPass.renderToScreen = true;
  composers.SSAA.addPass( copyPass );

  return ssaaRenderPass;

}

function setupTAARenderPass( composers, app ) {

  const taaRenderPass = new TAARenderPass( app.scene, app.camera );
  taaRenderPass.sampleLevel = 4; // specified as n, where the number of samples is 2^n, so sampleLevel = 4, is 2^4 samples, 16.
  composers.TAA.addPass( taaRenderPass );

  const copyPass = new ShaderPass( CopyShader );

  copyPass.renderToScreen = true;
  composers.TAA.addPass( copyPass );

  return taaRenderPass;

}

function setupSMAAShaderPass( composers, app ) {

  const renderPass = new RenderPass( app.scene, app.camera );
  composers.SMAA.addPass( renderPass );

  const size = new Vector2();
  app.renderer.getSize( size );

  const pixelRatio = app.renderer.getPixelRatio();

  const smaaShaderPass = new SMAAPass( size.width * pixelRatio, size.height * pixelRatio );
  smaaShaderPass.renderToScreen = true;
  composers.SMAA.addPass( smaaShaderPass );

  return smaaShaderPass;

}

export default function setupPostProcessing( composers, app ) {

  setupNoAA( composers, app );

  return {

    fxaaShaderPass: setupFXAAShaderPass( composers, app ),
    smaaShaderPass: setupSMAAShaderPass( composers, app ),
    ssaaRenderPass: setupSSAARenderPass( composers, app ),
    taaRenderPass: setupTAARenderPass( composers, app ),

  };

}
