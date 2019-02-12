import {
  CopyShader,
  EffectComposer,
  RenderPass,
  ShaderPass,
} from './vendor/three/todo.js';

export default function setupPostProcessing( renderer, scene, camera ) {

  const composer = new EffectComposer( renderer );

  // first we need a render pass, which renders the actual scene
  // so that later passes can apply effects to it.
  const renderPass = new RenderPass( scene, camera );
  composer.addPass( renderPass );

  const copyPass = new ShaderPass( CopyShader );

  // the on the final shader pass, set renderToScreen to true,
  // to let the composer know that this is the result we want to see
  copyPass.renderToScreen = true;

  composer.addPass( copyPass );

  return composer;

}
