function initComposers( renderer, scene, camera  ) {

  const composers = {};

  composers.noAA = initComposerNoAA( renderer, scene, camera );

  const ssaa = initComposerSSAA( renderer, scene, camera );
  composers.ssaa = ssaa.composerSSAA;
  composers.ssaaRenderPass = ssaa.ssaaRenderPass;

  const taa = initComposerTAA( renderer, scene, camera );
  composers.taa = taa.composerTAA;
  composers.taaRenderPass = taa.taaRenderPass;

  composers.fxaa = initComposerFXAA( renderer, scene, camera );
  composers.smaa = initComposerSMAA( renderer, scene, camera );

  return composers;

}

function initComposerNoAA( renderer, scene, camera ) {

  const composerNoAA = new THREE.EffectComposer( renderer );

  const renderPass = new THREE.RenderPass( scene, camera );
  composerNoAA.addPass( renderPass );

  const copyPass = new THREE.ShaderPass( THREE.CopyShader );

  // // the on the final shader pass, set renderToScreen to true,
  // // to let the composer know that this is the result we want to see
  copyPass.renderToScreen = true;
  composerNoAA.addPass( copyPass );

  return composerNoAA;

}

function initComposerSSAA( renderer, scene, camera ) {

  const composerSSAA = new THREE.EffectComposer( renderer );

  const ssaaRenderPass = new THREE.SSAARenderPass( scene, camera );
  ssaaRenderPass.sampleLevel = 4; // specified as n, where the number of samples is 2^n, so sampleLevel = 4, is 2^4 samples, 16.
  composerSSAA.addPass( ssaaRenderPass );

  const copyPass = new THREE.ShaderPass( THREE.CopyShader );

  copyPass.renderToScreen = true;
  composerSSAA.addPass( copyPass );

  return { composerSSAA, ssaaRenderPass };

}

function initComposerTAA( renderer, scene, camera ) {

  const composerTAA = new THREE.EffectComposer( renderer );

  const taaRenderPass = new THREE.TAARenderPass( scene, camera );
	taaRenderPass.sampleLevel = 4; // specified as n, where the number of samples is 2^n, so sampleLevel = 4, is 2^4 samples, 16.
  composerTAA.addPass( taaRenderPass );

  const copyPass = new THREE.ShaderPass( THREE.CopyShader );

  copyPass.renderToScreen = true;
  composerTAA.addPass( copyPass );

  return { composerTAA, taaRenderPass };

}

function initComposerFXAA( renderer, scene, camera ) {

  const composerFXAA = new THREE.EffectComposer( renderer );

  const renderPass = new THREE.RenderPass( scene, camera );
  composerFXAA.addPass( renderPass );

  var fxaaShader = new THREE.ShaderPass( THREE.FXAAShader );
  fxaaShader.renderToScreen = true;
  composerFXAA.addPass( fxaaShader );

  return composerFXAA;

}

function initComposerSMAA( renderer, scene, camera ) {

  const composerSMAA = new THREE.EffectComposer( renderer );

  const renderPass = new THREE.RenderPass( scene, camera );
  composerSMAA.addPass( renderPass );

  const size = renderer.getSize();
  const pixelRatio = renderer.getPixelRatio();
  const smaaPass = new THREE.SMAAPass( size.width * pixelRatio, size.height * pixelRatio );
  smaaPass.renderToScreen = true;
  composerSMAA.addPass( smaaPass );

  return composerSMAA;

}