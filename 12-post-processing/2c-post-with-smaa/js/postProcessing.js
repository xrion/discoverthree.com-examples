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

  const size = renderer.getSize();
  const pixelRatio = renderer.getPixelRatio();
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
