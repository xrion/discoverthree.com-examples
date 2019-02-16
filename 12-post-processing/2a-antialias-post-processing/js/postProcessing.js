import {
  EffectComposer,
} from './vendor/three/postprocessing/EffectComposer.js';

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

function initComposerNoAA( renderer, scene, camera ) {

  const composerNoAA = new EffectComposer( renderer );

  const renderPass = new RenderPass( scene, camera );
  composerNoAA.addPass( renderPass );

  const copyPass = new ShaderPass( CopyShader );

  // // the on the final shader pass, set renderToScreen to true,
  // // to let the composer know that this is the result we want to see
  copyPass.renderToScreen = true;
  composerNoAA.addPass( copyPass );

  return composerNoAA;

}

function initComposerSSAA( renderer, scene, camera ) {

  const composerSSAA = new EffectComposer( renderer );

  const ssaaRenderPass = new SSAARenderPass( scene, camera );
  ssaaRenderPass.sampleLevel = 4; // specified as n, where the number of samples is 2^n, so sampleLevel = 4, is 2^4 samples, 16.
  composerSSAA.addPass( ssaaRenderPass );

  const copyPass = new ShaderPass( CopyShader );

  copyPass.renderToScreen = true;
  composerSSAA.addPass( copyPass );

  return { composerSSAA, ssaaRenderPass };

}

function initComposerTAA( renderer, scene, camera ) {

  const composerTAA = new EffectComposer( renderer );

  const taaRenderPass = new TAARenderPass( scene, camera );
  taaRenderPass.sampleLevel = 4; // specified as n, where the number of samples is 2^n, so sampleLevel = 4, is 2^4 samples, 16.
  composerTAA.addPass( taaRenderPass );

  const copyPass = new ShaderPass( CopyShader );

  copyPass.renderToScreen = true;
  composerTAA.addPass( copyPass );

  return { composerTAA, taaRenderPass };

}

function initComposerFXAA( renderer, scene, camera ) {

  const composerFXAA = new EffectComposer( renderer );

  const renderPass = new RenderPass( scene, camera );
  composerFXAA.addPass( renderPass );

  const fxaaShader = new ShaderPass( FXAAShader );

  fxaaShader.renderToScreen = true;
  composerFXAA.addPass( fxaaShader );

  return { composerFXAA, fxaaShader };

}

function initComposerSMAA( renderer, scene, camera ) {

  const composerSMAA = new EffectComposer( renderer );

  const renderPass = new RenderPass( scene, camera );
  composerSMAA.addPass( renderPass );

  const size = renderer.getSize();
  const pixelRatio = renderer.getPixelRatio();
  const smaaPass = new SMAAPass( size.width * pixelRatio, size.height * pixelRatio );
  smaaPass.renderToScreen = true;
  composerSMAA.addPass( smaaPass );

  // console.log(smaaPass);

  return composerSMAA;

}

export default function initComposers( renderer, scene, camera ) {

  const composers = {};

  composers.noAA = initComposerNoAA( renderer, scene, camera );

  const ssaa = initComposerSSAA( renderer, scene, camera );
  composers.ssaa = ssaa.composerSSAA;
  composers.ssaaRenderPass = ssaa.ssaaRenderPass;

  const taa = initComposerTAA( renderer, scene, camera );
  composers.taa = taa.composerTAA;
  composers.taaRenderPass = taa.taaRenderPass;

  const fxaa = initComposerFXAA( renderer, scene, camera );
  composers.fxaa = fxaa.composerFXAA;
  composers.fxaaShader = fxaa.fxaaShader;

  composers.smaa = initComposerSMAA( renderer, scene, camera );

  return composers;

}
