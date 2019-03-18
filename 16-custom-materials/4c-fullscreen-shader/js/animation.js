function setupShaderAnimation( fullscreenQuad ) {

  fullscreenQuad.userData.onUpdate = ( delta ) => {

    fullscreenQuad.material.uniforms.time.value += delta;

  };
}

export default function setupAnimations( meshes ) {

  setupShaderAnimation( meshes.fullscreenQuad );

}
