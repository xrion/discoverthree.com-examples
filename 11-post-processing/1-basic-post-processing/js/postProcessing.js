function initPostProcessing( renderer, scene, camera  ) {

  const composer = new THREE.EffectComposer( renderer );

  // first we need a render pass, which renders the actual scene
  // so that later passes can apply effects to it.
  const renderPass = new THREE.RenderPass( scene, camera );
  composer.addPass( renderPass );

  const copyPass = new THREE.ShaderPass( THREE.CopyShader );

  // the on the final shader pass, set renderToScreen to true,
  // to let the composer know that this is the result we want to see
  copyPass.renderToScreen = true;



  composer.addPass( copyPass );

  // var effect = new THREE.ShaderPass( THREE.DotScreenShader );
  // effect.uniforms[ 'scale' ].value = 4;
  // composer.addPass( effect );

  return composer;

}