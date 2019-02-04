function initPostProcessing( renderer, scene, camera, container ) {

  const composer = new THREE.EffectComposer( renderer );

  // first we need a render pass, which renders the actual scene
  // so that later passes can apply effects to it.
  const renderPass = new THREE.RenderPass( scene, camera );
  composer.addPass( renderPass );

  const outlinePass = new THREE.OutlinePass( new THREE.Vector2( container.clientWidth, container.clientHeight ), scene, camera, scene.children );
  // outlinePass.renderToScreen = true;
  composer.addPass( outlinePass );

  const fxaaPass = new THREE.ShaderPass( THREE.FXAAShader );
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
