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
  outlinePass = new THREE.OutlinePass( new THREE.Vector2( container.clientWidth, container.clientHeight ), scene, camera, scene.children );
  // outlinePass.renderToScreen = true;

  composer.addPass( outlinePass );

  const kaleidoPass = new THREE.ShaderPass( THREE.KaleidoShader );

  // look inside the KaleidoShader.js file to see that	there are three
  // "uniforms" defined - these are variables that we can set, either
  // at load time, or changing up to once per frame

  //uniforms: {
  //
	// 	"tDiffuse": { value: null },
	// 	"sides":    { value: 6.0 },
	// 	"angle":    { value: 0.0 }
  //
  // }

  // we can access them like this:

  kaleidoPass.uniforms.angle.value = Math.PI / 4;
  kaleidoPass.uniforms.sides.value = 4;

  // Here's how you would asign a texture to a uniform, although it
  // doesn't seem to have much of an effect in this case
  kaleidoPass.uniforms.tDiffuse.value = new THREE.TextureLoader().load( 'textures/bamboo-diffuse.jpg' );

  kaleidoPass.renderToScreen = true;

  composer.addPass( kaleidoPass );


  // var effect = new THREE.ShaderPass( THREE.DotScreenShader );
  // effect.uniforms[ 'scale' ].value = 4;
  // composer.addPass( effect );

  return composer;

}