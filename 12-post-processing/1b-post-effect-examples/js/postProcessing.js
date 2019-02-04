function initPostProcessing( renderer, scene, camera, container ) {

  const composer = new THREE.EffectComposer( renderer );

  // first we need a render pass, which renders the actual scene
  // so that later passes can apply effects to it.
  const renderPass = new THREE.RenderPass( scene, camera );
  composer.addPass( renderPass );

  // the outline pass draws an outline around selected objects
  // we're passing in scene.children as the last argument, so it's
  // selecting all objects in the scene - even objects that
  // we add in the future
  const outlinePass = new THREE.OutlinePass( new THREE.Vector2( container.clientWidth, container.clientHeight ), scene, camera, scene.children );
  // outlinePass.renderToScreen = true;

  composer.addPass( outlinePass );

  const kaleidoPass = new THREE.ShaderPass( THREE.KaleidoShader );

  // look inside the KaleidoShader.js file to see that there are three
  // "uniforms" defined - these are variables that we can set, either
  // at load time, or changing up to once per frame

  // uniforms: {
  //
  //  "tDiffuse": { value: null },
  //  "sides":    { value: 6.0 },
  //  "angle":    { value: 0.0 }
  //
  // }

  // we can access them like this:

  kaleidoPass.uniforms.angle.value = Math.PI / 45;
  kaleidoPass.uniforms.sides.value = 4;

  // the last one is a special uniform that takes the result of the
  // previous pass in as a texture. You shouldn't modify this
  // kaleidoPass.uniforms.tDiffuse

  kaleidoPass.renderToScreen = true;

  composer.addPass( kaleidoPass );

  return composer;

}
