function initPostProcessing( renderer, scene, camera  ) {

  const composer = new THREE.EffectComposer( renderer );

  // first we need a render pass, which renders the actual scene
  // so that later passes can apply effects to it.
  const renderPass = new THREE.RenderPass( scene, camera );
  composer.addPass( renderPass );

  // Alternate render pass #1: Supersampling Antialiasing
  // YOU PROBABLY SHOULDN'T USE THIS! It's very sloooooow
  // const ssaaRenderPass = new THREE.SSAARenderPass( scene, camera );
  // ssaaRenderPass.sampleLevel = 8; // specified as n, where the number of samples is 2^n, so sampleLevel = 4, is 2^4 samples, 16.
  // composer.addPass( ssaaRenderPass );

  // Alternate render pass #2: Supersampling Antialiasing
  // const taaRenderPass = new THREE.TAARenderPass( scene, camera );
	// taaRenderPass.sampleLevel = 8; // specified as n, where the number of samples is 2^n, so sampleLevel = 4, is 2^4 samples, 16.
  // composer.addPass( taaRenderPass );
  // console.log('object');

  // const copyPass = new THREE.ShaderPass( THREE.CopyShader );

  // // the on the final shader pass, set renderToScreen to true,
  // // to let the composer know that this is the result we want to see
  // copyPass.renderToScreen = true;
  // composer.addPass( copyPass );

  // const size = renderer.getSize();
  // const pixelRatio = renderer.getPixelRatio();
  // const smaaPass = new THREE.SMAAPass( size.width * pixelRatio, size.height * pixelRatio );
  // smaaPass.renderToScreen = true;
  // composer.addPass( smaaPass );


  var fxaaShader = new THREE.ShaderPass( THREE.FXAAShader );
  fxaaShader.renderToScreen = true;
  composer.addPass( fxaaShader );

  return composer;

}