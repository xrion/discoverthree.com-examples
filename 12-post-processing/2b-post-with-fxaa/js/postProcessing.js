import {
  Vector2,
} from './vendor/three/three.module.js';

import {
  CopyShader,
  EffectComposer,
  FXAAShader,
  OutlinePass,
  RenderPass,
  ShaderPass,
} from './vendor/three/todo.js';

export default function initPostProcessing( renderer, scene, camera, container ) {

  const composer = new EffectComposer( renderer );

  // first we need a render pass, which renders the actual scene
  // so that later passes can apply effects to it.
  const renderPass = new RenderPass( scene, camera );
  composer.addPass( renderPass );

  const outlinePass = new OutlinePass( new Vector2( container.clientWidth, container.clientHeight ), scene, camera, scene.children );
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
