function setupShaderMaterialAnimation( object ) {

  object.userData.onUpdate = ( delta ) => {

    object.material.uniforms.time.value -= delta / 30;

  };

}

export default function setupAnimation( meshes ) {

  setupShaderMaterialAnimation( meshes.spiral );

}
